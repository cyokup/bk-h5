(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-result-result"],{"0005":function(t,n){t.exports="data:image/png;base64,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"},"1b2f":function(t,n,e){"use strict";e("6a54"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{userinfo:{username:"",mobile:"",banklist:[],records:[]},transferInfo:{recipet_name:"",recipet_no:"",transfer_bankno:"",transfer_amount:"",transfer_balance:""}}},mounted:function(){Object.assign(this.userinfo,uni.getStorageSync("userinfo")||{}),uni.getStorageSync("transferInfo")&&Object.assign(this.transferInfo,uni.getStorageSync("transferInfo"))},methods:{toShare:function(){uni.navigateTo({url:"/pages/receipt/receipt"})},back:function(){uni.reLaunch({url:"/pages/mine/mine"})}}};n.default=i},"1b55":function(t,n,e){"use strict";e.r(n);var i=e("e472"),a=e("8ba5");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(s);e("5c1d");var r=e("828b"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"22960c28",null,!1,i["a"],void 0);n["default"]=c.exports},"5c1d":function(t,n,e){"use strict";var i=e("7b42"),a=e.n(i);a.a},"7b42":function(t,n,e){var i=e("feeb");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("967d").default;a("595d9672",i,!0,{sourceMap:!1,shadowMode:!1})},"8ba5":function(t,n,e){"use strict";e.r(n);var i=e("1b2f"),a=e.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(s);n["default"]=a.a},"98c4":function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABYCAYAAABiQnDAAAAAAXNSR0IArs4c6QAAAotJREFUeF7t2l1LVFEYxfH/2LfwK3VrlBRiZtGLoYQmGEVlEERRl90L4o0UBEIghCBIEEGXfY3szd7PliNsBm/OrCdnb1leimsPz8+158zsc3r4RxLoSWmHMaBYAgMaUBQQ426gAUUBMe4GGlAUEONuoAFFATHuBhpQFBDjbqABRQEx7gYaUBQQ426gAUUBMe4GGlAUEONuoAFFATHuBhpQFBDjbqABRQExflwa+AD4CKyIHp3jxwHwPjAN/AUWgNXOCkKgdsA7wOVs/jXghuDROVoz4C3gWjbxOjAL/OmsIARqBVxssQ5GfwnMHDVeevEaAef7tukr4CrwWyjSwNHaAOeAm9m0G+174K+BBcRgTYBpiy5l874GLgJDw6tpC19ptujtDG8TuAD8FAskx2toYGrZvWzSN8D5po0/5OkDFigdcApYzi52W8AksBcwe8gSJQNOAA8zvG0g/e57yORBi5QKeBZ4lOHtAOeAb0Fzhy1TIuBp4Akw0k75FkigX8OmDlyoNMAx4FmG9645ZRlvDgm+BM4culRJgCeB581F40Q74fsWbzd04uDFSgJMbRtt5/sApK38KXje8OUMKJKWBHjYFj4DfBZn/K/xkgDToKeAp76IaP/z1LrH/hijIfqDtOa3n/ZXuQBEHyYEIF5q1rjr4yxN0geqmt9+2kf6AYi+qRSA6NuaAYj9N9ZfANd9Y72brB/t6OZ16F/74aIARD/eFoDoBywDEIeyRGnngUNBUF7UgIpepc8HiiPHxt1A0dOABhQFxLgbaEBRQIy7gQYUBcS4G2hAUUCMu4EGFAXEuBtoQFFAjLuBBhQFxLgbaEBRQIy7gQYUBcS4G2hAUUCMu4EGFAXE+D/mpWJZTKTCgQAAAABJRU5ErkJggg=="},e472:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"sure"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"back",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.back()}}},[i("v-uni-image",{attrs:{src:e("98c4"),mode:""}})],1),i("v-uni-text",[t._v("操作结果")]),i("v-uni-image",{staticClass:"kefu",attrs:{src:e("0005"),mode:""}})],1),i("v-uni-view",{staticClass:"main"},[i("v-uni-view",{staticClass:"main_result"},[i("v-uni-image",{attrs:{src:"/static/result/icon_wancheng@2x.png",mode:""}}),i("v-uni-text",[t._v(t._s(t.transferInfo.transfer_amount)+"元交易成功")])],1),i("v-uni-view",{staticClass:"item"},[i("v-uni-view",{staticClass:"item_label"},[t._v("优惠后付费")]),i("v-uni-view",{staticClass:"item_val"},[t._v("0.01")])],1),i("v-uni-view",{staticClass:"item",staticStyle:{"border-bottom":"2rpx solid #F0EFF5"}},[i("v-uni-view",{staticClass:"item_label"},[t._v("付款后可用余额")]),i("v-uni-view",{staticClass:"item_val"},[t._v(t._s(t.transferInfo.transfer_balance))])],1),i("v-uni-view",{staticClass:"btn"},[t._v("交易详情")]),i("v-uni-view",{staticClass:"banner1"},[i("v-uni-image",{attrs:{src:"/static/result/222@2x.png",mode:""}})],1),i("v-uni-view",{staticClass:"note"},[t._v("您可能需要")]),i("v-uni-view",{staticClass:"row",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toShare()}}},[i("v-uni-view",{staticClass:"row_label"},[t._v("分享给微信好友")]),i("v-uni-view",{staticClass:"row_right"},[i("v-uni-image",{attrs:{src:"/static/exchange/ionc_fanhui@2x.png",mode:""}})],1)],1),i("v-uni-view",{staticClass:"row"},[i("v-uni-view",{staticClass:"row_label"},[t._v("继续转账")]),i("v-uni-view",{staticClass:"row_right"},[i("v-uni-image",{attrs:{src:"/static/exchange/ionc_fanhui@2x.png",mode:""}})],1)],1),i("v-uni-view",{staticClass:"row"},[i("v-uni-view",{staticClass:"row_label"},[t._v("转账记录")]),i("v-uni-view",{staticClass:"row_right"},[i("v-uni-image",{attrs:{src:"/static/exchange/ionc_fanhui@2x.png",mode:""}})],1)],1),i("v-uni-view",{staticClass:"other"},[i("v-uni-view",{staticClass:"other_label"},[t._v("更多推荐")]),i("v-uni-view",{staticClass:"other_right"},[i("v-uni-image",{attrs:{src:e("eec9"),mode:""}}),i("v-uni-view",{staticClass:"other_right_text"},[t._v("换一换")])],1)],1),i("v-uni-view",{staticClass:"banner2"},[i("v-uni-image",{attrs:{src:"/static/result/banner_footer.png",mode:""}})],1),i("v-uni-view",{staticClass:"btn1",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.back()}}},[t._v("完成")])],1)],1)},a=[]},eec9:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAA39JREFUSEu9lltonEUUx/9nvm/FLF4IKKm0SF+ESqxaTciLIohPJaIIMTQVBbXx0odSSHZmNy+j8C1zduNDxUaCtCBqW31SqPqgD4qCeCnUFrw8CGovklZ8MNaVJt8cd2C3bDa76a4bu4+zZ85v/nPmnP9HuMI/usI8dAScmZnZmKbphIjcJyK3E9ENABSA8wBOisjRTCbzXpIkZy4nYE2g1vpmAImI7CCiCMCCiBwjogUiUt77ASK6G8CNAJZF5GAcx7ZYLP7WDtwWaIwZF5HXRCRLRG+IyKulUumr5kQiQlrrYSLaA+BRAH9773eWy+WjraAtgcaYvSLyEhF9LyITzPzt5a4q/J/L5YbC4QDcAmAPM+9v3rcKaIzZISJvAfh0cXHxwbm5ub86gdVjrLXXVSqVDwGMeO8fbla6AmiM2SwiJwD8mqbpyOzs7IVuYPXYXC53LRF9A2BDFEVbGmvaDHxTRMYB3MXMJ/8LrL7HGLPNe/+1UuqAc+6Z+vol4OTkZKa/v/9PAK8z87O9wKy1V1lrl4wx4bGNx3G8ud4yKxTmcrlbs9nsT9bai70AjTGfA/DVXn1RRD4iot3OubmQs6PG7xaez+d3pWk6T0RfArgNwGfMvP1/A4bEWuvnRGQ/EQVRZ5h50wqgMeYQgI+dcwe7VdQuvgF6kZmvXgHUWv9THWMZAM8z8/x6QY0xTwO43zk30Qw8DWBjrdjrCm08/KVHo7X+oHql91Tn4XcAhkVkslQqHVgvpav6UGu9G8ArIvKAUuoFERFmvrcX4NjYWDQ4OHi9tfaPVcDgecvLyz8T0WHn3BPW2kyv/ai1Dr33CDNvWAUMC8aYee/9U1VDHSqXy8d7Uae1vqPmnW8z886WwEKhcFOapj8AONvX1zdsre3KKRoc45pKpRK8c1Mcx1uTJPmlJTAs5vP5Ue/9uwC+EJHtpVJpsRul1toAex9AqH/w0iMtX2njYu0B7SOiHwE87pw71gm0UCjcmaZpGCBbAOxl5n3N+9rO0unp6VGlVDDibDXBESJ62TkXPE6ak0xNTY3EcRxG2WMALkRRtKtYLL7T6pBrDu9QU++9FZEnAcTVKXQOQFC7UBsQAwCGAAyISKqUOhRF0UySJKfa3UhHbhFaZmlp6aGqi48C2Fr7SvMi8jsRnVBKfaKUOtzzZ2Indes2piOF3SZdK/5f/Q59LJ/89vgAAAAASUVORK5CYII="},feeb:function(t,n,e){var i=e("c86c");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.sure[data-v-22960c28]{position:relative;padding-top:%?106?%}.sure .main[data-v-22960c28]{background:#f0eff5}.sure .main_result[data-v-22960c28]{display:flex;flex-direction:column;align-items:center;padding-top:%?56?%;background:#fff;padding-bottom:%?16?%}.sure .main_result uni-image[data-v-22960c28]{width:%?90?%;height:%?90?%}.sure .main_result uni-text[data-v-22960c28]{font-family:PingFangSC,PingFang SC;font-weight:500;font-size:%?32?%;color:#333;text-align:center;margin-top:%?28?%}.sure .main .item[data-v-22960c28]{display:flex;align-items:center;padding:%?16?% %?26?%;border-top:%?2?% solid #f0eff5;background:#fff}.sure .main .item_label[data-v-22960c28]{font-family:PingFangSC,PingFang SC;font-weight:400;font-size:%?24?%;color:#414141;line-height:%?34?%;text-align:left;width:%?120?%;white-space:pre-wrap}.sure .main .item_val[data-v-22960c28]{font-weight:500;font-size:%?24?%;color:#666;line-height:%?34?%;text-align:left;margin-left:%?72?%}.sure .main .btn[data-v-22960c28]{font-family:PingFangSC,PingFang SC;font-weight:500;font-size:%?24?%;color:#2d70ed;text-align:center;padding:%?20?% 0;margin-bottom:%?24?%;background:#fff}.sure .main .banner1[data-v-22960c28]{width:%?750?%;height:%?274?%}.sure .main .banner1 uni-image[data-v-22960c28]{width:%?750?%;height:%?274?%}.sure .main .note[data-v-22960c28]{font-family:PingFangSC,PingFang SC;font-weight:400;font-size:%?24?%;color:#666;padding:%?20?% %?24?%}.sure .main .row[data-v-22960c28]{background:#fff;border-bottom:%?2?% solid #f0eff5;display:flex;align-items:center;justify-content:space-between;padding:%?18?% %?26?%}.sure .main .row_label[data-v-22960c28]{font-family:PingFangSC,PingFang SC;font-weight:400;font-size:%?26?%;color:#111;flex:1}.sure .main .row_right[data-v-22960c28]{display:flex;align-items:center;justify-content:flex-end}.sure .main .row_right uni-image[data-v-22960c28]{width:%?28?%;height:%?28?%}.sure .main .other[data-v-22960c28]{display:flex;align-items:center;justify-content:space-between;padding:%?24?% %?20?%;background:#fff}.sure .main .other_label[data-v-22960c28]{font-family:PingFangSC,PingFang SC;font-weight:400;font-size:%?32?%;color:#111;flex:1}.sure .main .other_right[data-v-22960c28]{display:flex;align-items:center;justify-content:flex-end}.sure .main .other_right uni-image[data-v-22960c28]{width:%?28?%;height:%?28?%}.sure .main .other_right_text[data-v-22960c28]{margin-left:%?4?%;font-family:PingFangSC,PingFang SC;font-weight:400;font-size:%?28?%;color:#777}.sure .main .banner2[data-v-22960c28]{display:flex;align-items:center;justify-content:center;background:#fff}.sure .main .banner2 uni-image[data-v-22960c28]{width:%?690?%;height:%?160?%;border-radius:%?20?%}.sure .main .btn1[data-v-22960c28]{font-family:PingFangSC,PingFang SC;font-weight:400;font-size:%?32?%;color:#e1324b;padding:%?20?% 0 %?181?%;background:#fff;text-align:center}.sure .header[data-v-22960c28]{width:%?730?%;padding-right:%?20?%;height:%?88?%;position:fixed;top:0;left:0;background:#fff;display:flex;align-items:center;justify-content:space-between;z-index:2}.sure .header .back uni-image[data-v-22960c28]{width:%?80?%;height:%?88?%}.sure .header uni-text[data-v-22960c28]{font-family:PingFangSC,PingFang SC;font-weight:500;font-size:%?36?%;color:#333}.sure .header .kefu[data-v-22960c28]{width:%?44?%;height:%?44?%}',""]),t.exports=n}}]);