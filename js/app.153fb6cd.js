(function(){"use strict";var e={7050:function(e,t,s){var r=s(144),o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{id:"app"}},[e._m(0),t("section",{staticClass:"section",attrs:{id:"body"}},[t("b-loading",{attrs:{"is-full-page":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),t("BibleSelector",{staticClass:"screen-only"}),t("div",{staticClass:"container",attrs:{id:"writebook"}},[t("div",{staticClass:"content"},[t("span",{staticClass:"print-only"},[e._v(" "+e._s(e.today)+" ")]),e._v(" "+e._s(e.$store.getters.bookName)+" "+e._s(e.$store.state.chapter)+":"+e._s(e.verseNumber)+" "),t("span",{staticClass:"screen-only"},[e._v(" "+e._s(e.$store.getters.verse)+" ")])]),t("b-field",{staticClass:"screen-only"},[t("b-button",{attrs:{type:"is-primary",icon:"printer",expanded:""},on:{click:e.print}},[e._v(" Print ")])],1),t("WriteBook",{attrs:{type:"grey"}}),t("WriteBook",{attrs:{type:"transparent"}}),e._m(1)],1)],1)])},n=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",{staticClass:"hero is-primary screen-only"},[t("div",{staticClass:"hero-body"},[t("div",{staticClass:"container"},[t("h1",{staticClass:"title"},[e._v(" 성경쓰기연습장 생성기 ")]),t("h2",{staticClass:"subtitle"},[e._v(" Data from "),t("a",{attrs:{href:"https://bskorea.or.kr/",target:"_blank"}},[e._v("대한성서공회")])]),t("img",{attrs:{src:s(6949)}})])])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("span",{staticClass:"copyright screen-only"},[e._v(" Icons made by "),t("a",{attrs:{href:"https://www.flaticon.com/authors/itim2101",title:"itim2101"}},[e._v("itim2101")]),e._v(" from "),t("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v(" www.flaticon.com")])])}],a=s(6318),i=(s(6229),s(7330),s(2062),s(7582)),l=s(140),c=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"container"},[t("section",[t("b-field",[t("b-select",{attrs:{rounded:"",expanded:"",icon:"translate"},model:{value:e.version,callback:function(t){e.version=t},expression:"version"}},e._l(e.versions,(function(s){return t("option",{key:s.code,domProps:{value:s.code}},[e._v(" "+e._s(s.name)+" ")])})),0)],1),t("b-field",[t("b-autocomplete",{attrs:{rounded:"",data:e.bookNames,icon:"book-open-page-variant",clearable:"","open-on-focus":""},model:{value:e.book,callback:function(t){e.book=t},expression:"book"}},[t("template",{slot:"empty"},[e._v("No results found")])],2)],1),t("b-field",{attrs:{label:"장"}},[t("b-slider",{attrs:{min:1,max:e.chapters,ticks:"","custom-formatter":e=>e?e.toString():""},model:{value:e.chapter,callback:function(t){e.chapter=t},expression:"chapter"}})],1),t("b-field",{attrs:{label:"절"}},[t("b-slider",{attrs:{min:1,max:e.verses,ticks:"","custom-formatter":e=>e?e.toString():""},model:{value:e.verse,callback:function(t){e.verse=t},expression:"verse"}})],1),t("b-field",[t("b-checkbox",{model:{value:e.ranged,callback:function(t){e.ranged=t},expression:"ranged"}},[e._v(" 여러 절 보기 ")])],1)],1)])},h=[],v=s(4049);let p=class extends l.w3{constructor(...e){super(...e),(0,a.Z)(this,"book",""),(0,a.Z)(this,"ranged",!1)}created(){this.onBookName()}get version(){return this.$store.state.version}set version(e){(async()=>{try{await this.$store.dispatch("select",{version:e})}catch(t){this.$buefy.toast.open({duration:5e3,message:String(t),position:"is-bottom",type:"is-danger"})}})()}onBookName(){this.book=this.$store.getters.bookName}async onBook(){const e=this.$store.getters.books.find((({name:e})=>e===this.book));if(e&&this.$store.state.book!==e.code)try{await this.$store.dispatch("select",{book:e.code})}catch(t){this.$buefy.toast.open({duration:5e3,message:String(t),position:"is-bottom",type:"is-danger"})}}get chapter(){return this.$store.state.chapter||1}set chapter(e){this.setchapter(e)}async setchapter(e){if(this.chapter!==e)try{await this.$store.dispatch("selectRange",{chapter:e})}catch(t){this.$buefy.toast.open({duration:5e3,message:String(t),position:"is-bottom",type:"is-danger"})}}get singleVerse(){return this.$store.state.verseStart||1}set singleVerse(e){this.setverse(e,e)}get multiVerse(){const e=this.$store.state.verseStart||1,t=this.$store.state.verseEnd||1;return[e,t]}set multiVerse(e){2===e.length&&this.setverse(e[0],e[1])}get verse(){return this.ranged?this.multiVerse:this.singleVerse}set verse(e){this.ranged?this.multiVerse=e:this.singleVerse=e}async setverse(e,t){if(this.multiVerse[0]!==e||this.multiVerse[1]!==t)try{await this.$store.dispatch("selectRange",{verseStart:e,verseEnd:t})}catch(s){this.$buefy.toast.open({duration:5e3,message:String(s),position:"is-bottom",type:"is-danger"})}}get versions(){return this.$store.getters.versions}get bookNames(){return this.$store.getters.books.map((({name:e})=>e)).filter((e=>e.toLowerCase().includes(this.book.toLowerCase())))}get chapters(){return this.$store.getters.chapters}get verses(){return this.$store.getters.verses}};(0,i.gn)([(0,l.RL)("$store.getters.bookName")],p.prototype,"onBookName",null),(0,i.gn)([(0,l.RL)("book")],p.prototype,"onBook",null),(0,i.gn)([(0,v.Ds)(500)],p.prototype,"setchapter",null),(0,i.gn)([(0,v.Ds)(200)],p.prototype,"setverse",null),p=(0,i.gn)([l.wA],p);var d=p,g=d,u=s(1001),A=(0,u.Z)(g,c,h,!1,null,null,null),f=A.exports,b=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"page container"},e._l(e.page,(function(s,r){return t("div",{key:r,staticClass:"row"},e._l(s,(function(s,r){return t("WriteCell",{key:r,attrs:{cell:s,type:e.type}})})),1)})),0)},y=[],k=(s(7658),function(){var e=this,t=e._self._c;e._self._setupProxy;return t("svg",{staticClass:"cell",class:{grey:"grey"===e.type,transparent:"transparent"===e.type},attrs:{viewBox:"0 0 10 10"}},[t("text",{attrs:{x:e.leftHalf?"25%":e.rightHalf?"75%":"50%",y:"50%","text-anchor":"middle","dominant-baseline":"central"}},[e._v(" "+e._s(e.cellGlyph)+" ")]),e.overlayGlyph?t("text",{attrs:{x:"100%",y:"50%","text-anchor":"end","dominant-baseline":"central"}},[e._v(" "+e._s(e.overlayGlyph)+" ")]):e._e(),t("line",{staticStyle:{stroke:"rgb(192,192,192)","stroke-width":"1px"},attrs:{x1:"0",y1:"5",x2:"10",y2:"5","vector-effect":"non-scaling-stroke"}}),t("line",{staticStyle:{stroke:"rgb(192,192,192)","stroke-width":"1px"},attrs:{x1:"5",y1:"0",x2:"5",y2:"10","vector-effect":"non-scaling-stroke"}})])}),m=[];let w=class extends l.w3{constructor(...e){super(...e),(0,a.Z)(this,"cell",void 0),(0,a.Z)(this,"type",void 0)}get overlayGlyph(){return this.cell.length>=2&&(this.cell.charCodeAt(0)<32||this.cell.charCodeAt(0)>=256)?this.cell[1]:""}get cellGlyph(){return this.overlayGlyph?this.cell[0]:this.cell}get leftHalf(){return!![".",","].includes(this.cell.trim())||!!['" ',"' "].includes(this.cell)}get rightHalf(){return!![' "'," '"].includes(this.cell)||!!['"',"'"].includes(this.cell)}};(0,i.gn)([(0,l.fI)(String)],w.prototype,"cell",void 0),(0,i.gn)([(0,l.fI)({default:""})],w.prototype,"type",void 0),w=(0,i.gn)([l.wA],w);var C=w,Q=C,B=(0,u.Z)(Q,k,m,!1,null,"0f533038",null),E=B.exports;const S=(e,t,s)=>e>=t&&e<s;let P=class extends l.w3{constructor(...e){super(...e),(0,a.Z)(this,"type",void 0),(0,a.Z)(this,"glyphPerRow",10)}adjustGlyphsPerRow(){let e=10,t=this.verse.length,s=0;this.glyphPerRow=10;while(e<t){if(this.glyphPerRow=Math.floor((e+t)/2),s=this.page.length-.7*this.glyphPerRow,e===this.glyphPerRow)break;if(s>0)e=this.glyphPerRow;else{if(!(s<0))break;t=this.glyphPerRow}}s>0&&(this.glyphPerRow+=1),this.glyphPerRow<10&&(this.glyphPerRow=10)}get verse(){return this.$store.getters.verse}get page(){const e=[];let t=0,s=!0;while(t<this.verse.length){const r=[];while(" "===this.verse[t]&&t<this.verse.length)++t;if(t>=this.verse.length)break;let o=0,n=0;s&&(n+=1,r.push("")),s=!1;while(n<this.glyphPerRow&&t+o<this.verse.length){if("\n"==this.verse[t+o]){o+=1,s=!0;break}S(this.verse.charCodeAt(t+o),32,256)&&S(this.verse.charCodeAt(t+o+1),32,256)?(r.push(this.verse[t+o]+this.verse[t+o+1]),o+=2):(r.push(this.verse[t+o]),o+=1),++n}if(r.length===this.glyphPerRow&&[".",",",'"',"'"].includes(this.verse[t+o])&&(r[r.length-1]+=this.verse[t+o],o+=1),r.length>0){while(r.length<this.glyphPerRow)r.push("");e.push(r)}t+=o}return e}};(0,i.gn)([(0,l.fI)({default:""})],P.prototype,"type",void 0),(0,i.gn)([(0,l.RL)("verse")],P.prototype,"adjustGlyphsPerRow",null),P=(0,i.gn)([(0,l.wA)({components:{WriteCell:E}})],P);var x=P,I=x,R=(0,u.Z)(I,b,y,!1,null,"f966e77c",null),L=R.exports;let Z=class extends l.w3{constructor(...e){super(...e),(0,a.Z)(this,"today","")}selectViaHash(){const e=(e,t)=>isNaN(e)?t:e,t=new URL(location.href).hash,[s,r,o,n,a]=t.substr(1).split("/"),i=e(parseInt(o),1),l=e(parseInt(n),1),c=e(parseInt(a),l);return this.$store.dispatch("selectRange",{version:s,book:r,chapter:i,verseStart:l,verseEnd:c})}async created(){try{await this.$store.dispatch("loadMeta"),window.addEventListener("hashchange",this.selectViaHash),await this.selectViaHash()}catch(e){this.$buefy.toast.open({duration:5e3,message:String(e),position:"is-bottom",type:"is-danger"})}}async destroyed(){window.removeEventListener("hashchange",this.selectViaHash)}get isLoading(){return this.$store.state.loading}get verseNumber(){return this.$store.state.verseStart===this.$store.state.verseEnd?this.$store.state.verseStart:`${this.$store.state.verseStart}-${this.$store.state.verseEnd}`}print(){this.today=(new Date).toLocaleDateString(),this.$nextTick((()=>window.print()))}};Z=(0,i.gn)([(0,l.wA)({components:{BibleSelector:f,WriteBook:L}})],Z);var U=Z,F=U,O=(0,u.Z)(F,o,n,!1,null,null,null),G=O.exports,H=s(5205);(0,H.z)("/biblewriting/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var N=s(629),D=s(6154),M=s(6815),W=s.n(M);r.ZP.use(N.ZP);const q="https://ovcors-1-p9525929.deta.app/https/www.bskorea.or.kr/bible";var z=new N.ZP.Store({state:{version:"",book:"",chapter:1,verseStart:1,verseEnd:1,versionMeta:[],cachedBible:[],loading:!1},mutations:{loading(e,t){e.loading=t},loadChapter(e,t){const[s]=e.versionMeta.filter((e=>e.code===t.version)).map((e=>e.books)).flat().filter((e=>e.code===t.book));if(void 0===s)return;const[r]=e.cachedBible.filter((e=>e.version===t.version&&e.book===t.book&&e.chapter===t.chapter));void 0===r?e.cachedBible.push(t):r.verses=t.verses,e.verseStart>t.verses.length&&(e.verseStart=1),e.verseEnd>t.verses.length&&(e.verseEnd=1)},loadMeta(e,t){e.versionMeta=t,e.version=t[0].code,e.book=t[0].books[0].code,e.chapter=1,e.verseStart=1,e.verseEnd=1},select(e,t){const s={version:e.version,book:e.book,chapter:e.chapter,verseStart:e.verseStart,verseEnd:e.verseEnd,...t};let r=e.versionMeta.find((({code:e})=>e===s.version));if(!r&&(s.version=e.version,r=e.versionMeta.find((({code:t})=>t===e.version)),!r))return;let o=r.books.find((({code:e})=>e===s.book));if(!o&&(s.book=e.book,o=r.books.find((({code:t})=>t===e.book)),!o))return;(s.chapter<=0||s.chapter>o.chapters)&&(s.chapter=1);const[n]=e.cachedBible.filter((({version:e,book:t,chapter:r})=>e===s.version&&t===s.book&&r===s.chapter)).map((({verses:e})=>e.length));(s.verseStart<=0||n&&s.verseStart>n)&&(s.verseStart=1),(s.verseEnd<=0||n&&s.verseEnd>n)&&(s.verseEnd=1),({version:e.version,book:e.book,chapter:e.chapter,verseStart:e.verseStart,verseEnd:e.verseEnd}=s)}},getters:{versions(e){return e.versionMeta.map((e=>({name:e.name,code:e.code})))},versionName(e){const[t]=e.versionMeta.filter((t=>t.code===e.version)).map((e=>e.name));return t||""},books(e){return e.versionMeta.filter((t=>t.code===e.version)).map((e=>e.books)).flat().map((e=>({name:e.name,code:e.code})))},bookName(e){const[t]=e.versionMeta.filter((t=>t.code===e.version)).map((e=>e.books)).flat().filter((t=>t.code===e.book)).map((e=>e.name));return t||""},chapters(e){const[t]=e.versionMeta.filter((t=>t.code===e.version)).map((e=>e.books)).flat().filter((t=>t.code===e.book)).map((e=>e.chapters));return t||0},verses(e){const[t]=e.cachedBible.filter((t=>t.version===e.version&&t.book===e.book&&t.chapter===e.chapter)).map((e=>e.verses));return void 0===t?0:t.length},verse(e){const[t]=e.cachedBible.filter((t=>t.version===e.version&&t.book===e.book&&t.chapter===e.chapter)).map((e=>e.verses));return void 0===t?"":Object.keys([...Array(e.verseEnd-e.verseStart+1)]).map((t=>parseInt(t)+e.verseStart)).map((e=>t[e-1].trim())).join(" ")}},actions:{async loadMeta({commit:e}){e("loading",!0);try{const t=await D.Z.get(q+"/korbibReadpage.php"),s=new DOMParser,r=s.parseFromString(t.data,t.headers["content-type"].split(";")[0]),o=Array.from(r.querySelectorAll("select#version option")).map((e=>({name:e.text,code:e.value,books:[]}))),n=await D.Z.get(q+"/js/bible.list.js"),a=W()(n.data+"; ["+o.map((({code:e})=>`{code: ${JSON.stringify(e)}, books: sz${e}Book}`)).join(", ")+"]"),i=e=>{const t=a.find((({code:t})=>t===e));return void 0===t?[]:t.books.map((([e])=>({name:e[0],code:e[1],chapters:parseInt(e[e.length-1])})))};e("loadMeta",o.map((e=>({...e,books:i(e.code)}))).filter((e=>e.books.length>0)))}finally{e("loading",!1)}},async loadChapter({state:e,commit:t}){t("loading",!0);try{const s=await D.Z.get(q+"/korbibReadpage.php",{params:{version:e.version,book:e.book,chap:e.chapter}}),r=new DOMParser,o=r.parseFromString(s.data,s.headers["content-type"].split(";")[0]),n=e=>e.nodeType===Node.TEXT_NODE?(e.textContent||"").replaceAll(/\s+/g," "):"FONT"===e.nodeName?Array.from(e.childNodes).map((e=>n(e))).filter((e=>e)).join(""):"",a=Array.from(o.querySelectorAll("div.bible_read span.number")).map((e=>null===e.parentNode?"":Array.from(e.parentNode.childNodes).map((e=>n(e))).filter((e=>e)).join("")));t("loadChapter",{version:e.version,book:e.book,chapter:e.chapter,verses:a})}finally{t("loading",!1)}},async select({state:e,getters:t,commit:s,dispatch:r},o){const{verse:n,...a}=o,i=a;n&&(i.verseStart=n,i.verseEnd=n),s("select",i),0===t.verses&&await r("loadChapter");const l=e.verseStart===e.verseEnd?`${e.verseStart}`:`${e.verseStart}/${e.verseEnd}`,c=e.verseStart===e.verseEnd?`${e.verseStart}`:`${e.verseStart}-${e.verseEnd}`;history.pushState({},`${t.versionName} ${t.bookName} ${e.chapter}:${c}`,`#${e.version}/${e.book}/${e.chapter}/${l}`)},async selectRange({state:e,getters:t,commit:s,dispatch:r},o){s("select",o),0===t.verses&&await r("loadChapter");const n=e.verseStart===e.verseEnd?`${e.verseStart}`:`${e.verseStart}/${e.verseEnd}`,a=e.verseStart===e.verseEnd?`${e.verseStart}`:`${e.verseStart}-${e.verseEnd}`;history.pushState({},`${t.versionName} ${t.bookName} ${e.chapter}:${a}`,`#${e.version}/${e.book}/${e.chapter}/${n}`)}},modules:{}}),j=s(4082);s(387);r.ZP.use(j.ZP),r.ZP.config.productionTip=!1,new r.ZP({store:z,render:e=>e(G)}).$mount("#app")},6949:function(e){e.exports="data:image/png;base64,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"}},t={};function s(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,r,o,n){if(!r){var a=1/0;for(h=0;h<e.length;h++){r=e[h][0],o=e[h][1],n=e[h][2];for(var i=!0,l=0;l<r.length;l++)(!1&n||a>=n)&&Object.keys(s.O).every((function(e){return s.O[e](r[l])}))?r.splice(l--,1):(i=!1,n<a&&(a=n));if(i){e.splice(h--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var h=e.length;h>0&&e[h-1][2]>n;h--)e[h]=e[h-1];e[h]=[r,o,n]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,n,a=r[0],i=r[1],l=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(l)var h=l(s)}for(t&&t(r);c<a.length;c++)n=a[c],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(h)},r=self["webpackChunkbiblewriting"]=self["webpackChunkbiblewriting"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=s.O(void 0,[998],(function(){return s(7050)}));r=s.O(r)})();
//# sourceMappingURL=app.153fb6cd.js.map