(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-exchangeDetail-exchangeDetail"],{"098a":function(e,t,a){"use strict";a("6a54"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("dc69");var n={data:function(){return{userinfo:{username:"",mobile:"",banklist:[],records:[]},records:[]}},mounted:function(){Object.assign(this.userinfo,uni.getStorageSync("userinfo")||{}),this.records=this.userinfo.records.reverse()},methods:{}};t.default=n},"17b5":function(e,t,a){e.exports=a.p+"static/accountView/banklogo@2x.png"},4494:function(e,t,a){"use strict";a.r(t);var n=a("098a"),i=a.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t["default"]=i.a},"650f":function(e,t,a){"use strict";var n=a("b9d7"),i=a.n(n);i.a},"9abc":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"exchange"},[n("v-uni-view",{staticClass:"header",staticStyle:{background:"#FFFFFF"}},[n("v-uni-view",{staticClass:"header_info"},[n("v-uni-view",{staticClass:"header_info_logo"},[n("v-uni-image",{attrs:{src:a("17b5"),mode:""}})],1),n("v-uni-view",{staticClass:"header_info_text"},[n("v-uni-view",{staticClass:"num"},[e._v(e._s(e.userinfo.banklist[0].bankno))]),n("v-uni-view",{staticClass:"typ"},[e._v(e._s(e.userinfo.banklist[0].bankname))])],1)],1),n("v-uni-view",{staticClass:"header_right"},[n("v-uni-image",{attrs:{src:a("cd32"),mode:""}})],1)],1),n("v-uni-view",{staticClass:"main"},[n("v-uni-view",{staticClass:"main_header"},[n("v-uni-view",{staticClass:"main_header_left"},[e._v("近六个月")]),n("v-uni-view",{staticClass:"main_header_right"},[n("v-uni-text",[e._v("筛选")]),n("v-uni-image",{attrs:{src:"/static/exchange/icon_shaixuan@2x.png",mode:""}})],1)],1),e._l(e.records,(function(t,a){return n("v-uni-view",{key:a,staticClass:"item"},[n("v-uni-view",{staticClass:"item_label"},[e._v(e._s(t.transfer_dete.split("-")[1])+"月/"+e._s(t.transfer_dete.split("-")[0]))]),n("v-uni-view",{staticClass:"item_sub"},[n("v-uni-view",{staticClass:"item_sub_date"},[n("v-uni-view",{staticClass:"day"},[e._v(e._s(t.transfer_dete.split("-")[2]))]),n("v-uni-view",{staticClass:"week"},[e._v(e._s(t.transfer_week))])],1),n("v-uni-view",{staticClass:"item_sub_li"},[n("v-uni-view",{staticClass:"item_sub_li_desc"},[n("v-uni-view",{staticClass:"desc"},[e._v("转账"+e._s(2==t.type?"转入":"支出"))]),n("v-uni-view",{staticClass:"type"},[n("v-uni-text",{staticStyle:{"margin-right":"16rpx"}},[e._v("余额")]),n("v-uni-text",[e._v(e._s(e.$threeDot(t.transfer_balance)))])],1)],1),n("v-uni-view",{staticClass:"item_sub_li_right"},[n("v-uni-view",{staticClass:"name"},[e._v(e._s(1==t.type?t.recipet_name:t.username))]),n("v-uni-view",{staticClass:"amount"},[n("v-uni-text",[e._v("人名币元")]),2==t.type?n("v-uni-text",{staticClass:"num",staticStyle:{color:"#E02E49"}},[e._v(e._s(e.$threeDot(t.transfer_amount)))]):n("v-uni-text",{staticClass:"num",staticStyle:{color:"#008762"}},[e._v("-"+e._s(e.$threeDot(t.transfer_amount)))])],1)],1)],1)],1)],1)}))],2)],1)},i=[]},b9d7:function(e,t,a){var n=a("f7c8");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("967d").default;i("4f7c0973",n,!0,{sourceMap:!1,shadowMode:!1})},cbe6:function(e,t,a){"use strict";a.r(t);var n=a("9abc"),i=a("4494");for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a("650f");var o=a("828b"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"676b5864",null,!1,n["a"],void 0);t["default"]=c.exports},cd32:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAwCAYAAABqkJjhAAAAAXNSR0IArs4c6QAAATFJREFUaEPt190qRlEQgOHnO/KXnzM3IaWUlLgOF0NKIulLHChFiPycyR24IpfgW2dSarXXXruWZp+tmql3vXv2zOyRxp5RY7wCuPYbC8Nh+JeBKIkoiSiJ2jUQhv+B4SV81bpH3314Ge/4wFEN6L6Bp3CPbVzgpG/ovoET3zQesIUxzvqErgGc+GbwiE2c4rwv6FrAiW8WT9jAMS77gK4JnPjm8Ix1HOKqFLo2cOKbx8uke6xNDge4LoEeAjjxLeAVq9jDbVfooYAT3yLesIJdfHaBDuA/rP0siX3cdLGbcoYw3NRH11Rba2pwNDWam1p+0np5h51W1svmFvjUKpv6Reo6D7Lzhhgc2TA5gQGcY6kkJgyX2MvJDcM5lkpiwnCJvZzcMJxjqSQmDJfYy8n9BhuwJjGnATiCAAAAAElFTkSuQmCC"},f7c8:function(e,t,a){var n=a("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.exchange[data-v-676b5864]{min-height:calc(100vh - %?22?%);background:#f0eff5;padding-top:%?22?%}.exchange .main[data-v-676b5864]{background:#f9f9f9}.exchange .main .item[data-v-676b5864]{border-bottom:%?2?% solid #e8e9ed}.exchange .main .item_label[data-v-676b5864]{padding:%?20?% %?14?%;font-family:PingFangSC,PingFang SC;font-weight:500;font-size:%?24?%;color:#666;border-bottom:%?2?% solid #e8e9ed}.exchange .main .item_sub[data-v-676b5864]{display:flex;align-items:center;padding:0 0 0 %?20?%}.exchange .main .item_sub_date[data-v-676b5864]{text-align:center;padding-right:%?20?%}.exchange .main .item_sub_date .day[data-v-676b5864]{font-family:PingFangSC,PingFang SC;font-weight:500;font-size:%?34?%;color:#666}.exchange .main .item_sub_date .week[data-v-676b5864]{font-family:PingFangSC,PingFang SC;font-weight:400;font-size:%?18?%;color:#666;margin-top:%?4?%}.exchange .main .item_sub_li[data-v-676b5864]{display:flex;align-items:center;justify-content:space-between;width:%?620?%;height:%?108?%;padding:0 %?24?%;background:#fff}.exchange .main .item_sub_li_desc[data-v-676b5864]{padding-left:%?24?%;text-align:center}.exchange .main .item_sub_li_desc .desc[data-v-676b5864]{font-family:PingFangSC,PingFang SC;font-weight:400;font-size:%?26?%;color:#000}.exchange .main .item_sub_li_desc .type[data-v-676b5864]{font-family:PingFangSC,PingFang SC;font-weight:400;font-size:%?26?%;color:#666;margin-top:%?6?%}.exchange .main .item_sub_li_right[data-v-676b5864]{text-align:right}.exchange .main .item_sub_li_right .name[data-v-676b5864]{font-family:PingFangSC,PingFang SC;font-weight:400;font-size:%?26?%;color:#000}.exchange .main .item_sub_li_right .amount[data-v-676b5864]{font-family:PingFangSC,PingFang SC;font-weight:500;font-size:%?26?%;color:#000;margin-top:%?6?%}.exchange .main .item_sub_li_right .amount .num[data-v-676b5864]{font-family:PingFangSC,PingFang SC;font-weight:500;font-size:%?26?%;margin-left:%?12?%}.exchange .main_header[data-v-676b5864]{border-bottom:%?2?% solid #e8e9ed;background:#f0eff5;padding:%?20?% %?16?%;display:flex;align-items:center;justify-content:space-between}.exchange .main_header_left[data-v-676b5864]{font-family:PingFangSC,PingFang SC;font-weight:400;font-size:%?24?%;color:#6e6e6e}.exchange .main_header_right[data-v-676b5864]{display:flex;align-items:center}.exchange .main_header_right uni-text[data-v-676b5864]{font-family:PingFangSC,PingFang SC;font-weight:400;font-size:%?24?%;color:#131315;margin-right:%?6?%}.exchange .main_header_right uni-image[data-v-676b5864]{width:%?26?%;height:%?26?%}.exchange .header[data-v-676b5864]{width:%?710?%;margin:0 auto;display:flex;align-items:center;justify-content:space-between;padding:%?24?% 0;border:%?2?% solid #e9eaed}.exchange .header_info[data-v-676b5864]{padding-left:%?24?%;display:flex;align-items:center}.exchange .header_info_logo[data-v-676b5864]{width:%?100?%;height:%?68?%}.exchange .header_info_logo uni-image[data-v-676b5864]{width:%?100?%;height:%?68?%}.exchange .header_info_text[data-v-676b5864]{margin-left:%?24?%}.exchange .header_info_text .num[data-v-676b5864]{font-family:PingFangSC,PingFang SC;font-weight:500;font-size:%?28?%;color:#333}.exchange .header_info_text .type[data-v-676b5864]{font-family:PingFangSC,PingFang SC;font-weight:400;font-size:%?24?%;color:#6e6e6e}.exchange .header_right[data-v-676b5864]{width:%?44?%;height:%?48?%}.exchange .header_right uni-image[data-v-676b5864]{width:%?44?%;height:%?48?%}',""]),e.exports=t}}]);