(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pending-pending"],{"0c23":function(e,n,t){"use strict";t.r(n);var i=t("2e37"),s=t("c10f");for(var a in s)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return s[e]}))}(a);t("722e");var r=t("828b"),u=Object(r["a"])(s["default"],i["b"],i["c"],!1,null,"eee551fe",null,!1,i["a"],void 0);n["default"]=u.exports},"171e":function(e,n,t){var i=t("cb6e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=t("967d").default;s("61f3bf06",i,!0,{sourceMap:!1,shadowMode:!1})},"2e37":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){}));var i=function(){var e=this.$createElement,n=this._self._c||e;return n("v-uni-view",{staticClass:"pending"},[n("v-uni-view",{staticClass:"circle"},[n("v-uni-view",{staticClass:"item"},[n("v-uni-view",{staticClass:"num"},[this._v(this._s(this.num))]),n("v-uni-view",{staticClass:"unit"},[this._v("s")])],1)],1),n("v-uni-view",{staticClass:"note"},[this._v("转账申请已提交，银行正在处理中...")])],1)},s=[]},"722e":function(e,n,t){"use strict";var i=t("171e"),s=t.n(i);s.a},c10f:function(e,n,t){"use strict";t.r(n);var i=t("fa8b"),s=t.n(i);for(var a in i)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=s.a},cb6e:function(e,n,t){var i=t("c86c");n=i(!1),n.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.pending[data-v-eee551fe]{width:100vw;min-height:100vh;display:flex;flex-direction:column;align-items:center}.pending .circle[data-v-eee551fe]{margin-top:%?200?%;width:%?200?%;height:%?200?%;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#2979ff;color:#fff}.pending .circle .item[data-v-eee551fe]{font-size:%?80?%;font-weight:600;display:flex;align-items:baseline;justify-content:center}.pending .circle .unit[data-v-eee551fe]{font-size:%?36?%;font-weight:400;margin-left:%?10?%}.pending .note[data-v-eee551fe]{font-size:%?24?%;margin:0 auto;text-align:center;margin-top:%?20?%;color:#333}',""]),e.exports=n},fa8b:function(e,n,t){"use strict";t("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{num:6,timer:null}},onLoad:function(){this.setTime()},methods:{setTime:function(){var e=this;e.timer=setInterval((function(){e.num>1?e.num=e.num-1:(clearInterval(e.timer),e.timer=null,uni.redirectTo({url:"/pages/result/result"}))}),1e3)}}};n.default=i}}]);