(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cb6e4"],{"4a45":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("base-content",[e("div",{staticClass:"base-markdown-content"},[e("v-md-editor",{attrs:{value:t.content,mode:"preview"}})],1)])},o=[],s=e("b0dd"),c={name:"axios",components:{BaseContent:s["a"]},data:function(){return{content:""}},methods:{getMsg:function(){var t=this,n={url:"./data/axiosData.md",method:"get",responseType:"text"};this.$fetchData(n).then((function(n){t.content=n.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.getMsg()}},i=c,u=e("2877"),d=Object(u["a"])(i,a,o,!1,null,null,null);n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0cb6e4.1605945730771.js.map