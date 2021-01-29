import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import safeEval from "notevil";

Vue.use(Vuex);

const DEFAULT_BIBLE_BASE =
  "https://ancient-anchorage-57657.herokuapp.com/https://www.bskorea.or.kr/bible";
const bibleBase = process.env.VUE_APP_BIBLE_BASE || DEFAULT_BIBLE_BASE;

export interface CodeMapEntry {
  name: string;
  code: string;
}

interface BookMeta {
  name: string;
  code: string;
  chapters: number;
}

interface VersionMeta {
  name: string;
  code: string;
  books: BookMeta[];
}

interface CachedBible {
  version: string;
  book: string;
  chapter: number;
  verses: string[];
}

interface BibleSelector {
  version?: string;
  book?: string;
  chapter?: number;
  verse?: number;
}

interface BibleRangeSelector {
  version?: string;
  book?: string;
  chapter?: number;
  verseStart?: number;
  verseEnd?: number;
}

export default new Vuex.Store({
  state: {
    version: "",
    book: "",
    chapter: 1,
    verseStart: 1,
    verseEnd: 1,
    versionMeta: [] as VersionMeta[],
    cachedBible: [] as CachedBible[],
    loading: false
  },
  mutations: {
    loading(state, loading: boolean) {
      state.loading = loading;
    },
    loadChapter(state, req: CachedBible) {
      const [book] = state.versionMeta
        .filter(version => version.code === req.version)
        .map(version => version.books)
        .flat()
        .filter(book => book.code === req.book);
      if (book === undefined) {
        return;
      }

      const [bible] = state.cachedBible.filter(
        bible =>
          bible.version === req.version &&
          bible.book === req.book &&
          bible.chapter === req.chapter
      );
      if (bible === undefined) {
        state.cachedBible.push(req);
      } else {
        bible.verses = req.verses;
      }
      if (state.verseStart > req.verses.length) {
        state.verseStart = 1;
      }
      if (state.verseEnd > req.verses.length) {
        state.verseEnd = 1;
      }
    },
    loadMeta(state, req: VersionMeta[]) {
      state.versionMeta = req;
      state.version = req[0].code;
      state.book = req[0].books[0].code;
      state.chapter = 1;
      state.verseStart = 1;
      state.verseEnd = 1;
    },
    select(state, selector: BibleRangeSelector) {
      const newSelector = {
        version: state.version,
        book: state.book,
        chapter: state.chapter,
        verseStart: state.verseStart,
        verseEnd: state.verseEnd,
        ...selector
      };
      let version = state.versionMeta.find(
        ({ code }) => code === newSelector.version
      );
      if (!version) {
        newSelector.version = state.version;
        version = state.versionMeta.find(({ code }) => code === state.version);
        if (!version) return;
      }
      let book = version.books.find(({ code }) => code === newSelector.book);
      if (!book) {
        newSelector.book = state.book;
        book = version.books.find(({ code }) => code === state.book);
        if (!book) return;
      }
      if (newSelector.chapter <= 0 || newSelector.chapter > book.chapters) {
        newSelector.chapter = 1;
      }

      const [maxVerses] = state.cachedBible
        .filter(
          ({ version, book, chapter }) =>
            version === newSelector.version &&
            book === newSelector.book &&
            chapter === newSelector.chapter
        )
        .map(({ verses }) => verses.length);

      if (
        newSelector.verseStart <= 0 ||
        (maxVerses && newSelector.verseStart > maxVerses)
      ) {
        newSelector.verseStart = 1;
      }
      if (
        newSelector.verseEnd <= 0 ||
        (maxVerses && newSelector.verseEnd > maxVerses)
      ) {
        newSelector.verseEnd = 1;
      }

      ({
        version: state.version,
        book: state.book,
        chapter: state.chapter,
        verseStart: state.verseStart,
        verseEnd: state.verseEnd
      } = newSelector);
    }
  },
  getters: {
    versions(state) {
      return state.versionMeta.map(version => ({
        name: version.name,
        code: version.code
      }));
    },
    versionName(state) {
      const [name] = state.versionMeta
        .filter(version => version.code === state.version)
        .map(version => version.name);
      return name || "";
    },
    books(state) {
      return state.versionMeta
        .filter(version => version.code === state.version)
        .map(version => version.books)
        .flat()
        .map(book => ({ name: book.name, code: book.code }));
    },
    bookName(state) {
      const [name] = state.versionMeta
        .filter(version => version.code === state.version)
        .map(version => version.books)
        .flat()
        .filter(book => book.code === state.book)
        .map(book => book.name);
      return name || "";
    },
    chapters(state) {
      const [chapters] = state.versionMeta
        .filter(version => version.code === state.version)
        .map(version => version.books)
        .flat()
        .filter(book => book.code === state.book)
        .map(book => book.chapters);
      return chapters || 0;
    },
    verses(state) {
      const [verses] = state.cachedBible
        .filter(
          bible =>
            bible.version === state.version &&
            bible.book === state.book &&
            bible.chapter === state.chapter
        )
        .map(bible => bible.verses);
      if (verses === undefined) return 0;
      return verses.length;
    },
    verse(state) {
      const [verses] = state.cachedBible
        .filter(
          bible =>
            bible.version === state.version &&
            bible.book === state.book &&
            bible.chapter === state.chapter
        )
        .map(bible => bible.verses);
      if (verses === undefined) return "";
      return Object.keys([...Array(state.verseEnd - state.verseStart + 1)])
        .map(v => parseInt(v) + state.verseStart)
        .map(v => verses[v - 1].trim())
        .join(" ");
    }
  },
  actions: {
    async loadMeta({ commit }) {
      commit("loading", true);
      try {
        const frontPage = await axios.get(bibleBase + "/korbibReadpage.php");
        const domparser = new DOMParser();
        const doc = domparser.parseFromString(
          frontPage.data,
          frontPage.headers["content-type"].split(";")[0]
        );
        const versions = (Array.from(
          doc.querySelectorAll("select#version option")
        ) as HTMLOptionElement[]).map(option => ({
          name: option.text,
          code: option.value,
          books: []
        }));

        const bibleListJs = await axios.get(bibleBase + "/js/bible.list.js");
        const bibleMetaRaw: { code: string; books: string[][] }[] = safeEval(
          bibleListJs.data +
            "; [" +
            versions
              .map(
                ({ code }) =>
                  `{code: ${JSON.stringify(code)}, books: sz${code}Book}`
              )
              .join(", ") +
            "]"
        );

        const buildBibleMeta: (version: string) => BookMeta[] = version => {
          const rawBooks = bibleMetaRaw.find(({ code }) => code === version);
          if (rawBooks === undefined) return [];

          return rawBooks.books.map(([meta]) => ({
            name: meta[0],
            code: meta[1],
            chapters: parseInt(meta[meta.length - 1])
          }));
        };

        commit(
          "loadMeta",
          versions
            .map(version => ({
              ...version,
              books: buildBibleMeta(version.code)
            }))
            .filter(version => version.books.length > 0)
        );
      } finally {
        commit("loading", false);
      }
    },
    async loadChapter({ state, commit }) {
      commit("loading", true);
      try {
        const chapterPage = await axios.get(bibleBase + "/korbibReadpage.php", {
          params: {
            version: state.version,
            book: state.book,
            chap: state.chapter
          }
        });
        const domparser = new DOMParser();
        const doc = domparser.parseFromString(
          chapterPage.data,
          chapterPage.headers["content-type"].split(";")[0]
        );
        const collectVerse = (node: Node): string => {
          if (node.nodeType === Node.TEXT_NODE)
            return ((node as Text).textContent || "").replaceAll(/\s+/g, " ");
          if (node.nodeName === "FONT")
            return Array.from(node.childNodes)
              .map(n => collectVerse(n))
              .filter(word => word)
              .join("");
          return "";
        };
        const verses = Array.from(
          doc.querySelectorAll("div.bible_read span.number")
        ).map(elem =>
          elem.parentNode === null
            ? ""
            : Array.from(elem.parentNode.childNodes)
                .map(node => collectVerse(node))
                .filter(word => word)
                .join("")
        );
        commit("loadChapter", {
          version: state.version,
          book: state.book,
          chapter: state.chapter,
          verses
        });
      } finally {
        commit("loading", false);
      }
    },
    async select(
      { state, getters, commit, dispatch },
      selector: BibleSelector
    ) {
      const { verse, ...restSelector } = selector;
      const rangedSelector: BibleRangeSelector = restSelector;
      if (verse) {
        rangedSelector.verseStart = verse;
        rangedSelector.verseEnd = verse;
      }
      commit("select", rangedSelector);
      if (getters.verses === 0) {
        await dispatch("loadChapter");
      }
      const versePath =
        state.verseStart === state.verseEnd
          ? `${state.verseStart}`
          : `${state.verseStart}/${state.verseEnd}`;
      const verseTitle =
        state.verseStart === state.verseEnd
          ? `${state.verseStart}`
          : `${state.verseStart}-${state.verseEnd}`;
      history.pushState(
        {},
        `${getters.versionName} ${getters.bookName} ${state.chapter}:${verseTitle}`,
        `#${state.version}/${state.book}/${state.chapter}/${versePath}`
      );
    },
    async selectRange(
      { state, getters, commit, dispatch },
      selector: BibleRangeSelector
    ) {
      commit("select", selector);
      if (getters.verses === 0) {
        await dispatch("loadChapter");
      }
      const versePath =
        state.verseStart === state.verseEnd
          ? `${state.verseStart}`
          : `${state.verseStart}/${state.verseEnd}`;
      const verseTitle =
        state.verseStart === state.verseEnd
          ? `${state.verseStart}`
          : `${state.verseStart}-${state.verseEnd}`;
      history.pushState(
        {},
        `${getters.versionName} ${getters.bookName} ${state.chapter}:${verseTitle}`,
        `#${state.version}/${state.book}/${state.chapter}/${versePath}`
      );
    }
  },
  modules: {}
});
