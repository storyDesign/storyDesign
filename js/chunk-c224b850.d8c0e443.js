(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c224b850"],{2148:function(t,s,i){"use strict";i("dc6e")},dc6e:function(t,s,i){},dcfc:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"wrapper"},[i("div",{staticClass:"d-flex flex-wrap animate__animated animate__fadeIn"},t._l(t.stories,(function(s){return i("router-link",{key:s.id+s.title,staticClass:"figure",attrs:{to:"/story/"+s.id,tag:"figure"}},[i("img",{staticClass:"img-fluid",attrs:{src:"/storyDesign/images/stories/"+s.pictrue}}),i("figcaption",{staticClass:"figcaption"},[t._v(t._s(s.title))]),i("div",{staticClass:"desrcBox"},[i("div",{staticClass:"desrc"},[t._v(t._s(s.desre))])])])})),1)])},a=[],n={data:function(){return{stories:[]}},created:function(){this.getStories()},methods:{getStories:function(){var t=this,s=this.$loading.show();this.$http.get("/storyDesign/data/db.json").then((function(i){t.stories=i.data.stories,s.hide()})).catch((function(t){console.log(t)}))}}},c=n,r=(i("2148"),i("2877")),o=Object(r["a"])(c,e,a,!1,null,"267dadd6",null);s["default"]=o.exports}}]);
//# sourceMappingURL=chunk-c224b850.d8c0e443.js.map