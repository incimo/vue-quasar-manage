(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2143ea"],{afb1:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("base-content",[o("div",{staticClass:"base-markdown-content"},[t.isLottieF?t._e():o("q-skeleton",{attrs:{type:"text",height:"150px"}}),o("lottie-web-cimo",{ref:"lottie_web",attrs:{path:t.defaultOptions.path,loop:t.defaultOptions.loop,"animation-speed":t.defaultOptions.animationSpeed},on:{isLottieFinish:t.handleLottieFinish}}),o("div",{staticClass:"row justify-center",staticStyle:{"margin-left":"10px","margin-right":"10px"}},[o("q-badge",{staticClass:"justify-start",attrs:{color:"secondary"}},[t._v(" Speed: "+t._s(t.defaultOptions.animationSpeed)+" ")]),o("q-slider",{attrs:{min:0,max:3,step:.5,color:"purple",label:""},model:{value:t.defaultOptions.animationSpeed,callback:function(e){t.$set(t.defaultOptions,"animationSpeed",e)},expression:"defaultOptions.animationSpeed"}}),o("q-btn-group",[o("q-btn",{attrs:{color:"accent",icon:"play_arrow"},on:{click:t.play}},[o("q-tooltip",[t._v("播放")])],1),o("q-btn",{attrs:{color:"accent",icon:"pause"},on:{click:t.pause}},[o("q-tooltip",[t._v("暂停")])],1),o("q-btn",{attrs:{color:"accent",icon:"stop"},on:{click:t.stop}},[o("q-tooltip",[t._v("停止")])],1)],1)],1),o("v-md-editor",{attrs:{value:t.content,mode:"preview"}})],1)])},i=[],a=o("b0dd"),s=o("0bf7"),l={name:"my-lottie",components:{LottieWebCimo:s["a"],BaseContent:a["a"]},data:function(){return{defaultOptions:{path:"https://assets1.lottiefiles.com/packages/lf20_gzl797gs.json",loop:!0,animationSpeed:1},anim:{},content:"",test:{},isLottieF:!1}},methods:{play:function(){this.$refs.lottie_web.play()},stop:function(){this.$refs.lottie_web.stop()},pause:function(){this.$refs.lottie_web.pause()},handleLottieFinish:function(t){this.isLottieF=t},getMsg:function(){var t=this,e={url:"./data/lottieData.md",method:"get",responseType:"text"};this.$fetchData(e).then((function(e){t.content=e.data})).catch((function(t){console.log(t)}))}},mounted:function(){this.getMsg()}},c=l,p=o("2877"),r=o("fe09"),d=Object(p["a"])(c,n,i,!1,null,null,null);e["default"]=d.exports;d.options.components=Object.assign(Object.create(d.options.components||null),d.options.components||{},{QSkeleton:r["B"],QBadge:r["c"],QSlider:r["D"],QBtnGroup:r["g"],QBtn:r["f"],QTooltip:r["N"]})}}]);
//# sourceMappingURL=chunk-2d2143ea.1605945730771.js.map