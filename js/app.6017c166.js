(function(e){function t(t){for(var n,s,i=t[0],c=t[1],u=t[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},o={app:0},a=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/biblewriting/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"30d1":function(e,t,r){},"65fe":function(e,t,r){"use strict";var n=r("30d1"),o=r.n(n);o.a},"781c":function(e,t,r){},"85ec":function(e,t,r){},b2a2:function(e,t,r){"use strict";var n=r("781c"),o=r.n(n);o.a},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e._m(0),r("section",{staticClass:"section"},[r("b-loading",{attrs:{"is-full-page":!1},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}}),r("BibleSelector",{staticClass:"screen-only"}),r("div",{staticClass:"container"},[r("div",{staticClass:"content"},[r("span",{staticClass:"print-only"},[e._v(" "+e._s(e.today)+" ")]),e._v(" "+e._s(e.$store.getters.bookName)+" "+e._s(e.$store.state.chapter)+":"+e._s(e.verseNumber)+" "),r("span",{staticClass:"screen-only"},[e._v(" "+e._s(e.$store.getters.verse)+" ")])]),r("b-field",{staticClass:"screen-only"},[r("b-button",{attrs:{type:"is-primary",icon:"printer",expanded:""},on:{click:e.print}},[e._v(" Print ")])],1),r("WriteBook",{attrs:{type:"grey"}}),r("WriteBook",{attrs:{type:"transparent"}}),e._m(1)],1)],1)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"hero is-primary screen-only"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[e._v(" 성경쓰기연습장 생성기 ")]),n("h2",{staticClass:"subtitle"},[e._v(" Data from "),n("a",{attrs:{href:"https://bskorea.or.kr/",target:"_blank"}},[e._v("대한성서공회")])]),n("img",{attrs:{src:r("cf05")}})])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"copyright screen-only"},[e._v(" Icons made by "),r("a",{attrs:{href:"https://www.flaticon.com/authors/itim2101",title:"itim2101"}},[e._v("itim2101")]),e._v(" from "),r("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[e._v(" www.flaticon.com")])])}],s=(r("99af"),r("d3b7"),r("25f0"),r("96cf"),r("1da1")),i=r("d4ec"),c=r("bee2"),u=r("262e"),l=r("2caf"),p=r("9ab4"),f=r("60a3"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("section",[r("b-field",[r("b-select",{attrs:{rounded:"",expanded:"",icon:"translate"},model:{value:e.version,callback:function(t){e.version=t},expression:"version"}},e._l(e.versions,(function(t){return r("option",{key:t.code,domProps:{value:t.code}},[e._v(" "+e._s(t.name)+" ")])})),0)],1),r("b-field",[r("b-autocomplete",{attrs:{rounded:"",data:e.bookNames,icon:"book-open-page-variant",clearable:"","open-on-focus":""},model:{value:e.book,callback:function(t){e.book=t},expression:"book"}},[r("template",{slot:"empty"},[e._v("No results found")])],2)],1),r("b-field",{attrs:{label:"장"}},[r("b-slider",{attrs:{min:1,max:e.chapters,ticks:"","custom-formatter":function(e){return e?e.toString():""}},model:{value:e.chapter,callback:function(t){e.chapter=t},expression:"chapter"}})],1),r("b-field",{attrs:{label:"절"}},[r("b-slider",{attrs:{min:1,max:e.verses,ticks:"","custom-formatter":function(e){return e?e.toString():""}},model:{value:e.verse,callback:function(t){e.verse=t},expression:"verse"}})],1),r("b-field",[r("b-checkbox",{model:{value:e.ranged,callback:function(t){e.ranged=t},expression:"ranged"}},[e._v(" 여러 절 보기 ")])],1)],1)])},h=[],d=(r("4de4"),r("7db0"),r("caad"),r("d81d"),r("b0c0"),r("2532"),r("7240")),b=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){var e;return Object(i["a"])(this,r),e=t.apply(this,arguments),e.book="",e.ranged=!1,e}return Object(c["a"])(r,[{key:"created",value:function(){this.onBookName()}},{key:"onBookName",value:function(){this.book=this.$store.getters.bookName}},{key:"onBook",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=this.$store.getters.books.find((function(e){var t=e.name;return t===r.book})),!t||this.$store.state.book===t.code){e.next=10;break}return e.prev=2,e.next=5,this.$store.dispatch("select",{book:t.code});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](2),this.$buefy.toast.open({duration:5e3,message:e.t0.toString(),position:"is-bottom",type:"is-danger"});case 10:case"end":return e.stop()}}),e,this,[[2,7]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"setchapter",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.chapter===t){e.next=9;break}return e.prev=1,e.next=4,this.$store.dispatch("selectRange",{chapter:t});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),this.$buefy.toast.open({duration:5e3,message:e.t0.toString(),position:"is-bottom",type:"is-danger"});case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));function t(t){return e.apply(this,arguments)}return t}()},{key:"setverse",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.multiVerse[0]===t&&this.multiVerse[1]===r){e.next=9;break}return e.prev=1,e.next=4,this.$store.dispatch("selectRange",{verseStart:t,verseEnd:r});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](1),this.$buefy.toast.open({duration:5e3,message:e.t0.toString(),position:"is-bottom",type:"is-danger"});case 9:case"end":return e.stop()}}),e,this,[[1,6]])})));function t(t,r){return e.apply(this,arguments)}return t}()},{key:"version",get:function(){return this.$store.state.version},set:function(e){var t=this;Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,t.$store.dispatch("select",{version:e});case 3:r.next=8;break;case 5:r.prev=5,r.t0=r["catch"](0),t.$buefy.toast.open({duration:5e3,message:r.t0.toString(),position:"is-bottom",type:"is-danger"});case 8:case"end":return r.stop()}}),r,null,[[0,5]])})))()}},{key:"chapter",get:function(){return this.$store.state.chapter||1},set:function(e){this.setchapter(e)}},{key:"singleVerse",get:function(){return this.$store.state.verseStart||1},set:function(e){this.setverse(e,e)}},{key:"multiVerse",get:function(){var e=this.$store.state.verseStart||1,t=this.$store.state.verseEnd||1;return[e,t]},set:function(e){2===e.length&&this.setverse(e[0],e[1])}},{key:"verse",get:function(){return this.ranged?this.multiVerse:this.singleVerse},set:function(e){this.ranged?this.multiVerse=e:this.singleVerse=e}},{key:"versions",get:function(){return this.$store.getters.versions}},{key:"bookNames",get:function(){var e=this;return this.$store.getters.books.map((function(e){var t=e.name;return t})).filter((function(t){return t.toLowerCase().includes(e.book.toLowerCase())}))}},{key:"chapters",get:function(){return this.$store.getters.chapters}},{key:"verses",get:function(){return this.$store.getters.verses}}]),r}(f["c"]);Object(p["a"])([Object(f["d"])("$store.getters.bookName")],b.prototype,"onBookName",null),Object(p["a"])([Object(f["d"])("book")],b.prototype,"onBook",null),Object(p["a"])([Object(d["debounce"])(500)],b.prototype,"setchapter",null),Object(p["a"])([Object(d["debounce"])(200)],b.prototype,"setverse",null),b=Object(p["a"])([f["a"]],b);var g=b,m=g,k=r("2877"),y=Object(k["a"])(m,v,h,!1,null,null,null),j=y.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page container"},e._l(e.page,(function(t,n){return r("div",{key:n,staticClass:"row"},e._l(t,(function(t,n){return r("WriteCell",{key:n,attrs:{cell:t,type:e.type}})})),1)})),0)},O=[],x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{staticClass:"cell",class:{grey:"grey"===e.type,transparent:"transparent"===e.type},attrs:{viewBox:"0 0 10 10"}},[r("text",{attrs:{x:e.leftHalf?"25%":e.rightHalf?"75%":"50%",y:"50%","text-anchor":"middle","dominant-baseline":"central"}},[e._v(" "+e._s(e.cellGlyph)+" ")]),e.overlayGlyph?r("text",{attrs:{x:"100%",y:"50%","text-anchor":"end","dominant-baseline":"central"}},[e._v(" "+e._s(e.overlayGlyph)+" ")]):e._e(),r("line",{staticStyle:{stroke:"rgb(192,192,192)","stroke-width":"1px"},attrs:{x1:"0",y1:"5",x2:"10",y2:"5","vector-effect":"non-scaling-stroke"}}),r("line",{staticStyle:{stroke:"rgb(192,192,192)","stroke-width":"1px"},attrs:{x1:"5",y1:"0",x2:"5",y2:"10","vector-effect":"non-scaling-stroke"}})])},_=[],S=(r("498a"),function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){return Object(i["a"])(this,r),t.apply(this,arguments)}return Object(c["a"])(r,[{key:"overlayGlyph",get:function(){return this.cell.length>=2&&(this.cell.charCodeAt(0)<32||this.cell.charCodeAt(0)>=256)?this.cell[1]:""}},{key:"cellGlyph",get:function(){return this.overlayGlyph?this.cell[0]:this.cell}},{key:"leftHalf",get:function(){return!![".",","].includes(this.cell.trim())||!!['" ',"' "].includes(this.cell)}},{key:"rightHalf",get:function(){return!![' "'," '"].includes(this.cell)||!!['"',"'"].includes(this.cell)}}]),r}(f["c"]));Object(p["a"])([Object(f["b"])(String)],S.prototype,"cell",void 0),Object(p["a"])([Object(f["b"])({default:""})],S.prototype,"type",void 0),S=Object(p["a"])([f["a"]],S);var $=S,C=$,R=(r("b2a2"),Object(k["a"])(C,x,_,!1,null,"0f533038",null)),E=R.exports,N=function(e,t,r){return e>=t&&e<r},B=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){var e;return Object(i["a"])(this,r),e=t.apply(this,arguments),e.glyphPerRow=10,e}return Object(c["a"])(r,[{key:"adjustGlyphsPerRow",value:function(){this.glyphPerRow=Math.max(Math.ceil(Math.sqrt(this.verse.length/.7)+1),10);while(this.page.length>.7*this.glyphPerRow)this.glyphPerRow+=1}},{key:"verse",get:function(){return this.$store.getters.verse}},{key:"page",get:function(){var e=[],t=0,r=!0;while(t<this.verse.length){var n=[];while(" "===this.verse[t]&&t<this.verse.length)++t;if(t>=this.verse.length)break;var o=0,a=0;r&&(a+=1,n.push("")),r=!1;while(a<this.glyphPerRow&&t+a<this.verse.length){if("\n"==this.verse[t+o]){o+=1,r=!0;break}N(this.verse.charCodeAt(t+o),32,256)&&N(this.verse.charCodeAt(t+o+1),32,256)?(n.push(this.verse[t+o]+this.verse[t+o+1]),o+=2):(n.push(this.verse[t+o]),o+=1),++a}if(n.length===this.glyphPerRow&&[".",",",'"',"'"].includes(this.verse[t+o])&&(n[n.length-1]+=this.verse[t+o],o+=1),n.length>0){while(n.length<this.glyphPerRow)n.push("");e.push(n)}t+=o}return e}}]),r}(f["c"]);Object(p["a"])([Object(f["b"])({default:""})],B.prototype,"type",void 0),Object(p["a"])([Object(f["d"])("verse")],B.prototype,"adjustGlyphsPerRow",null),B=Object(p["a"])([Object(f["a"])({components:{WriteCell:E}})],B);var M=B,P=M,A=(r("65fe"),Object(k["a"])(P,w,O,!1,null,"4294f940",null)),V=A.exports,L=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){var e;return Object(i["a"])(this,r),e=t.apply(this,arguments),e.today="",e}return Object(c["a"])(r,[{key:"created",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$store.dispatch("loadMeta");case 3:return e.next=5,this.$store.dispatch("loadChapter");case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.$buefy.toast.open({duration:5e3,message:e.t0.toString(),position:"is-bottom",type:"is-danger"});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"print",value:function(){this.today=(new Date).toLocaleDateString(),this.$nextTick((function(){return window.print()}))}},{key:"isLoading",get:function(){return this.$store.state.loading}},{key:"verseNumber",get:function(){return this.$store.state.verseStart===this.$store.state.verseEnd?this.$store.state.verseStart:"".concat(this.$store.state.verseStart,"-").concat(this.$store.state.verseEnd)}}]),r}(f["c"]);L=Object(p["a"])([Object(f["a"])({components:{BibleSelector:j,WriteBook:V}})],L);var G=L,T=G,D=(r("034f"),Object(k["a"])(T,o,a,!1,null,null,null)),F=D.exports,W=r("9483");Object(W["a"])("".concat("/biblewriting/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("0481"),r("a630"),r("a15b"),r("4069"),r("b64b"),r("ac1f"),r("3ca3"),r("1276");var q=r("15fd"),H=r("2909"),I=r("5530"),J=r("3835"),U=r("2f62"),z=r("bc3a"),X=r.n(z),K=r("6591"),Q=r.n(K);n["a"].use(U["a"]);var Y="https://ancient-anchorage-57657.herokuapp.com/https://www.bskorea.or.kr/bible",Z=Object({NODE_ENV:"production",BASE_URL:"/biblewriting/"}).VUE_APP_BIBLE_BASE||Y,ee=new U["a"].Store({state:{version:"",book:"",chapter:1,verseStart:1,verseEnd:1,versionMeta:[],cachedBible:[],loading:!1},mutations:{loading:function(e,t){e.loading=t},loadChapter:function(e,t){var r=e.versionMeta.filter((function(e){return e.code===t.version})).map((function(e){return e.books})).flat().filter((function(e){return e.code===t.book})),n=Object(J["a"])(r,1),o=n[0];if(void 0!==o){var a=e.cachedBible.filter((function(e){return e.version===t.version&&e.book===t.book&&e.chapter===t.chapter})),s=Object(J["a"])(a,1),i=s[0];void 0===i?e.cachedBible.push(t):i.verses=t.verses,e.verseStart>t.verses.length&&(e.verseStart=1),e.verseEnd>t.verses.length&&(e.verseEnd=1)}},loadMeta:function(e,t){e.versionMeta=t,e.version=t[0].code,e.book=t[0].books[0].code,e.chapter=1,e.verseStart=1,e.verseEnd=1},select:function(e,t){var r=Object(I["a"])({version:e.version,book:e.book,chapter:e.chapter,verseStart:e.verseStart,verseEnd:e.verseEnd},t),n=e.versionMeta.find((function(e){var t=e.code;return t===r.version}));if(n||(r.version=e.version,n=e.versionMeta.find((function(t){var r=t.code;return r===e.version})),n)){var o=n.books.find((function(e){var t=e.code;return t===r.book}));if(o||(r.book=e.book,o=n.books.find((function(t){var r=t.code;return r===e.book})),o)){(r.chapter<=0||r.chapter>o.chapters)&&(r.chapter=1);var a=e.cachedBible.filter((function(e){var t=e.version,n=e.book,o=e.chapter;return t===r.version&&n===r.book&&o===r.chapter})).map((function(e){var t=e.verses;return t.length})),s=Object(J["a"])(a,1),i=s[0];(r.verseStart<=0||i&&r.verseStart>i)&&(r.verseStart=1),(r.verseEnd<=0||i&&r.verseEnd>i)&&(r.verseEnd=1),e.version=r.version,e.book=r.book,e.chapter=r.chapter,e.verseStart=r.verseStart,e.verseEnd=r.verseEnd}}}},getters:{versions:function(e){return e.versionMeta.map((function(e){return{name:e.name,code:e.code}}))},versionName:function(e){var t=e.versionMeta.filter((function(t){return t.code===e.version})).map((function(e){return e.name})),r=Object(J["a"])(t,1),n=r[0];return n||""},books:function(e){return e.versionMeta.filter((function(t){return t.code===e.version})).map((function(e){return e.books})).flat().map((function(e){return{name:e.name,code:e.code}}))},bookName:function(e){var t=e.versionMeta.filter((function(t){return t.code===e.version})).map((function(e){return e.books})).flat().filter((function(t){return t.code===e.book})).map((function(e){return e.name})),r=Object(J["a"])(t,1),n=r[0];return n||""},chapters:function(e){var t=e.versionMeta.filter((function(t){return t.code===e.version})).map((function(e){return e.books})).flat().filter((function(t){return t.code===e.book})).map((function(e){return e.chapters})),r=Object(J["a"])(t,1),n=r[0];return n||0},verses:function(e){var t=e.cachedBible.filter((function(t){return t.version===e.version&&t.book===e.book&&t.chapter===e.chapter})).map((function(e){return e.verses})),r=Object(J["a"])(t,1),n=r[0];return void 0===n?0:n.length},verse:function(e){var t=e.cachedBible.filter((function(t){return t.version===e.version&&t.book===e.book&&t.chapter===e.chapter})).map((function(e){return e.verses})),r=Object(J["a"])(t,1),n=r[0];return void 0===n?"":Object.keys(Object(H["a"])(Array(e.verseEnd-e.verseStart+1))).map((function(t){return parseInt(t)+e.verseStart})).map((function(e){return n[e-1].trim()})).join(" ")}},actions:{loadMeta:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,o,a,s,i,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,r("loading",!0),t.prev=2,t.next=5,X.a.get(Z+"/korbibReadpage.php");case 5:return n=t.sent,o=new DOMParser,a=o.parseFromString(n.data,n.headers["content-type"].split(";")[0]),s=Array.from(a.querySelectorAll("select#version option")).map((function(e){return{name:e.text,code:e.value,books:[]}})),t.next=11,X.a.get(Z+"/js/bible.list.js");case 11:i=t.sent,c=Q()(i.data+"; ["+s.map((function(e){var t=e.code;return"{code: ".concat(JSON.stringify(t),", books: sz").concat(t,"Book}")})).join(", ")+"]"),u=function(e){var t=c.find((function(t){var r=t.code;return r===e}));return void 0===t?[]:t.books.map((function(e){var t=Object(J["a"])(e,1),r=t[0];return{name:r[0],code:r[1],chapters:parseInt(r[r.length-1])}}))},r("loadMeta",s.map((function(e){return Object(I["a"])(Object(I["a"])({},e),{},{books:u(e.code)})})).filter((function(e){return e.books.length>0})));case 15:return t.prev=15,r("loading",!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[2,,15,18]])})))()},loadChapter:function(e){return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,o,a,s,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.state,n=e.commit,n("loading",!0),t.prev=2,t.next=5,X.a.get(Z+"/korbibReadpage.php",{params:{version:r.version,book:r.book,chap:r.chapter}});case 5:o=t.sent,a=new DOMParser,s=a.parseFromString(o.data,o.headers["content-type"].split(";")[0]),i=function e(t){return t.nodeType===Node.TEXT_NODE?(t.textContent||"").replaceAll(/\s+/g," "):"FONT"===t.nodeName?Array.from(t.childNodes).map((function(t){return e(t)})).filter((function(e){return e})).join(""):""},c=Array.from(s.querySelectorAll("div.bible_read span.number")).map((function(e){return null===e.parentNode?"":Array.from(e.parentNode.childNodes).map((function(e){return i(e)})).filter((function(e){return e})).join("")})),n("loadChapter",{version:r.version,book:r.book,chapter:r.chapter,verses:c});case 11:return t.prev=11,n("loading",!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[2,,11,14]])})))()},select:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,o,a,s,i,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.getters,o=e.commit,a=e.dispatch,s=t.verse,i=Object(q["a"])(t,["verse"]),c=i,s&&(c.verseStart=s,c.verseEnd=s),o("select",c),0!==n.verses){r.next=8;break}return r.next=8,a("loadChapter");case 8:case"end":return r.stop()}}),r)})))()},selectRange:function(e,t){return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.getters,o=e.commit,a=e.dispatch,o("select",t),0!==n.verses){r.next=5;break}return r.next=5,a("loadChapter");case 5:case"end":return r.stop()}}),r)})))()}},modules:{}}),te=r("289d");r("5abe");n["a"].use(te["a"]),n["a"].config.productionTip=!1,new n["a"]({store:ee,render:function(e){return e(F)}}).$mount("#app")},cf05:function(e,t,r){e.exports=r.p+"img/logo.199b774b.png"}});
//# sourceMappingURL=app.6017c166.js.map