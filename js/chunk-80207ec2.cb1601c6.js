(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80207ec2"],{"8b33":function(t,s,i){"use strict";i("98fc")},"98fc":function(t,s,i){},dcfc:function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"wrapper"},[i("div",{staticClass:"d-flex flex-wrap"},t._l(t.stories,(function(s){return i("router-link",{key:s.id+s.title,staticClass:"figure",attrs:{to:"/story/"+s.id,tag:"figure"}},[i("img",{staticClass:"img-fluid",attrs:{src:"/images/stories/"+s.pictrue}}),i("figcaption",{staticClass:"figcaption"},[t._v(t._s(s.title))])])})),1)])},n=[],c={data:function(){return{stories:[]}},created:function(){this.getStories()},methods:{getStories:function(){var t=this;this.$http.get("/data/db.json").then((function(s){t.stories=s.data.stories,console.log(t.stories)})).catch((function(t){console.log(t)}))}}},o=c,a=(i("8b33"),i("2877")),r=Object(a["a"])(o,e,n,!1,null,"0ba55dfe",null);s["default"]=r.exports}}]);
//# sourceMappingURL=chunk-80207ec2.cb1601c6.js.map