(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(t,e,n){"use strict";n.r(e);n(10),n(107);var r=n(8),o=Object(r.defineComponent)({data:function(){return{search:""}},computed:{isCol:function(){return this.$store.getters["posts/isCol"]}},methods:{searchPosts:function(){this.$store.commit("posts/filteredPosts",this.search)}}}),c=(n(295),n(61)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-navbar",{attrs:{toggleable:"lg",type:"dark"}},[e("b-container",[e("b-navbar-brand",{attrs:{to:""}},[t._v("NavBar")]),t._v(" "),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-form",{on:{click:function(t){t.preventDefault()}}},[e("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Начните вводить..."},on:{input:t.searchPosts},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._v(" "),e("b-navbar-nav",{staticClass:"ml-3"},[e("div",{staticClass:"card-modes"},[e("span",{staticClass:"icon grid-vertical",class:{actived:t.isCol},attrs:{"data-tooltip":"Вертикальные карточки"},on:{click:function(e){return t.$store.commit("posts/setView",!0)}}}),t._v(" "),e("span",{staticClass:"icon grid-horizontal",class:{actived:!t.isCol},attrs:{"data-tooltip":"Горизонтальные карточки"},on:{click:function(e){return t.$store.commit("posts/setView",!1)}}})])])],1)],1)}),[],!1,null,"06182d3b",null);e.default=component.exports},222:function(t,e,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(89).default)("5413eb42",content,!0,{sourceMap:!1})},236:function(t,e,n){"use strict";var r={components:{NavBar:n(167).default}},o=n(61),component=Object(o.a)(r,(function(){var t=this._self._c;return t("div",[t("NavBar"),this._v(" "),t("nuxt")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{NavBar:n(167).default})},239:function(t,e,n){n(240),t.exports=n(241)},295:function(t,e,n){"use strict";n(222)},296:function(t,e,n){var r=n(88)(!1);r.push([t.i,"nav.navbar[data-v-06182d3b]{margin-bottom:50px;background-color:#3f51b5}.card-modes[data-v-06182d3b]{display:flex;flex-grow:0}.icon[data-v-06182d3b]{display:block;width:24px;height:24px;background-color:#fff;margin-right:2px;cursor:pointer}.icon.actived[data-v-06182d3b]{background-color:#3ac7ff}.icon.grid-vertical[data-v-06182d3b]{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDMuNzVIM3Y3aDd2LTd6bTExIDBoLTd2N2g3di03em0wIDExaC03djdoN3YtN3ptLTExIDBIM3Y3aDd2LTd6IiBzdHJva2U9IiMxRTFFMUUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==);mask-image:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDMuNzVIM3Y3aDd2LTd6bTExIDBoLTd2N2g3di03em0wIDExaC03djdoN3YtN3ptLTExIDBIM3Y3aDd2LTd6IiBzdHJva2U9IiMxRTFFMUUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)}.icon.grid-horizontal[data-v-06182d3b]{-webkit-mask-image:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxIDMuOTA1SDN2N2gxOHYtN3ptMCAxMUgzdjdoMTh2LTd6IiBzdHJva2U9IiM4MThDQTkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==);mask-image:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxIDMuOTA1SDN2N2gxOHYtN3ptMCAxMUgzdjdoMTh2LTd6IiBzdHJva2U9IiM4MThDQTkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==)}",""]),t.exports=r},297:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return d})),n.d(e,"mutations",(function(){return l})),n.d(e,"actions",(function(){return m})),n.d(e,"getters",(function(){return f}));n(4),n(6),n(3),n(7);var r=n(31),o=n(0);n(69),n(2),n(1),n(5),n(60),n(106),n(128);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d=function(){return{allPosts:[],posts:[],isCol:!0}},l={setPosts:function(t,e){t.allPosts=e,t.posts=e},setView:function(t,e){t.isCol=e},filteredPosts:function(t,e){t.posts=t.allPosts.filter((function(t){var n=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},t);return Object.keys(n).some((function(t){return(""+n[t]).toLowerCase().includes(e.toLowerCase())}))}))}},m={fetchPosts:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,fetch("https://jsonplaceholder.typicode.com/posts?_limit=50");case 3:return r=e.sent,e.next=6,r.json();case 6:o=e.sent,n("setPosts",o);case 8:case"end":return e.stop()}}),e)})))()}},f={posts:function(t){return t.posts},postById:function(t){return function(e){return t.posts.find((function(t){return t.id==e}))}},isCol:function(t){return t.isCol}}}},[[239,3,1,4]]]);