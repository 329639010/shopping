(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-address-create"],{2179:function(e,r,t){"use strict";t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return o})),t.d(r,"a",(function(){return a}));var a={uForm:t("9278").default,uFormItem:t("f0d8").default,uInput:t("b138").default,selectRegion:t("e30e").default},n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"container"},[t("v-uni-view",{staticClass:"page-title"},[e._v("收货地址")]),t("v-uni-view",{staticClass:"form-wrapper"},[t("u-form",{ref:"uForm",attrs:{model:e.form,"label-width":"140rpx"}},[t("u-form-item",{attrs:{label:"姓名",prop:"name"}},[t("u-input",{attrs:{placeholder:"请输入收货人姓名"},model:{value:e.form.name,callback:function(r){e.$set(e.form,"name",r)},expression:"form.name"}})],1),t("u-form-item",{attrs:{label:"电话",prop:"phone"}},[t("u-input",{attrs:{placeholder:"请输入收货人手机号"},model:{value:e.form.phone,callback:function(r){e.$set(e.form,"phone",r)},expression:"form.phone"}})],1),t("u-form-item",{attrs:{label:"地区",prop:"region"}},[t("select-region",{model:{value:e.form.region,callback:function(r){e.$set(e.form,"region",r)},expression:"form.region"}})],1),t("u-form-item",{attrs:{label:"详细地址",prop:"detail","border-bottom":!1}},[t("u-input",{attrs:{placeholder:"街道门牌、楼层等信息"},model:{value:e.form.detail,callback:function(r){e.$set(e.form,"detail",r)},expression:"form.detail"}})],1)],1)],1),t("v-uni-view",{staticClass:"footer"},[t("v-uni-view",{staticClass:"btn-wrapper"},[t("v-uni-view",{staticClass:"btn-item btn-item-main",class:{disabled:e.disabled},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.handleSubmit()}}},[e._v("保存")])],1)],1)],1)},o=[]},"4d3c":function(e,r,t){var a=t("7cbd");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=t("4f06").default;n("3e463ebf",a,!0,{sourceMap:!1,shadowMode:!1})},"58f4":function(e,r,t){"use strict";var a=t("dbce"),n=t("4ea4");t("d3b7"),Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=n(t("e30e")),i=t("6c01"),s=a(t("8616")),u={name:"",phone:"",region:[],detail:""},f={name:[{required:!0,message:"请输入姓名",trigger:["blur","change"]}],phone:[{required:!0,message:"请输入手机号",trigger:["blur","change"]},{validator:function(e,r,t){return(0,i.isMobile)(r)},message:"手机号码不正确",trigger:["blur"]}],region:[{required:!0,message:"请选择省市区",trigger:["blur","change"],type:"array"}],detail:[{required:!0,message:"请输入详细地址",trigger:["blur","change"]}]},d={components:{SelectRegion:o.default},data:function(){return{form:u,rules:f,disabled:!1}},onLoad:function(e){},onReady:function(){this.$refs.uForm.setRules(this.rules)},methods:{handleSubmit:function(){var e=this;if(e.disabled)return!1;e.$refs.uForm.validate((function(r){r&&(e.disabled=!0,s.add(e.form).then((function(r){e.$toast(r.message),uni.navigateBack()})).finally((function(){return e.disabled=!1})))}))}}};r.default=d},6015:function(e,r,t){"use strict";t.r(r);var a=t("58f4"),n=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(r,e,(function(){return a[e]}))}(o);r["default"]=n.a},"661b":function(e,r,t){"use strict";t.r(r);var a=t("2179"),n=t("6015");for(var o in n)"default"!==o&&function(e){t.d(r,e,(function(){return n[e]}))}(o);t("7b73"),t("a152");var i,s=t("f0c5"),u=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"5fe46676",null,!1,a["a"],i);r["default"]=u.exports},6845:function(e,r,t){var a=t("24fb");r=a(!1),r.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */.page-title[data-v-5fe46676]{width:94%;margin:0 auto;padding-top:%?40?%;font-size:%?28?%;color:rgba(69,90,100,.6)}.form-wrapper[data-v-5fe46676]{margin:%?20?% auto %?20?% auto;padding:0 %?40?%;width:94%;box-shadow:0 %?1?% %?5?% 0 rgba(0,0,0,.05);border-radius:%?16?%;background:#fff}\r\n/* 底部操作栏 */.footer[data-v-5fe46676]{margin-top:%?60?%}.footer .btn-wrapper[data-v-5fe46676]{height:100%;display:flex;align-items:center;padding:0 %?20?%}.footer .btn-item[data-v-5fe46676]{flex:1;font-size:%?28?%;height:%?100?%;line-height:%?100?%;text-align:center;color:#fff;border-radius:%?50?%}.footer .btn-item-main[data-v-5fe46676]{background:linear-gradient(90deg,#f9211c,#ff6335)}.footer .btn-item-main.disabled[data-v-5fe46676]{background:#ff9779}',""]),e.exports=r},"7b73":function(e,r,t){"use strict";var a=t("4d3c"),n=t.n(a);n.a},"7cbd":function(e,r,t){var a=t("24fb");r=a(!1),r.push([e.i,"uni-page-body[data-v-5fe46676]{background:#f7f8fa}body.?%PAGE?%[data-v-5fe46676]{background:#f7f8fa}",""]),e.exports=r},a152:function(e,r,t){"use strict";var a=t("ceef"),n=t.n(a);n.a},ceef:function(e,r,t){var a=t("6845");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=t("4f06").default;n("8dcd227c",a,!0,{sourceMap:!1,shadowMode:!1})}}]);