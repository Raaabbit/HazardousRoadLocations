(function(e){function t(t){for(var o,r,s=t[0],l=t[1],u=t[2],c=0,f=[];c<s.length;c++)r=s[c],a[r]&&f.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function s(e){return l.p+"static/js/"+({}[e]||e)+"."+{"chunk-0afcab6c":"43ba32a7","chunk-4a2d3510":"99e7908d","chunk-59f3e08a":"a138b665","chunk-67b5e30d":"32fde58e","chunk-ad4b04de":"21c9bbd9","chunk-ea5d9e42":"f7439b33"}[e]+".js"}function l(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-0afcab6c":1,"chunk-4a2d3510":1,"chunk-59f3e08a":1,"chunk-67b5e30d":1,"chunk-ad4b04de":1,"chunk-ea5d9e42":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var o="static/css/"+({}[e]||e)+"."+{"chunk-0afcab6c":"a065681b","chunk-4a2d3510":"3bb0666e","chunk-59f3e08a":"ec5511e6","chunk-67b5e30d":"d8f14fb5","chunk-ad4b04de":"9d6068bd","chunk-ea5d9e42":"920a6132"}[e]+".css",a=l.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===o||c===a))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],c=u.getAttribute("data-href");if(c===o||c===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.request=o,delete r[e],p.parentNode.removeChild(p),n(i)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){r[e]=0}));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(function(t,n){o=a[e]=[t,n]});t.push(o[2]=i);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(e),u=function(t){c.onerror=c.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");i.type=o,i.request=r,n[1](i)}a[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=o,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(n,o,function(t){return e[t]}.bind(null,o));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var p=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),r=n.n(o);r.a},4753:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("14c6"),n("08c1"),n("4842"),n("d9fc");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"g-container"},[o("header",{staticClass:"g-header"},[o("router-link",{attrs:{to:"/"}},[o("img",{attrs:{src:n("cf05")}})]),o("nav",{staticClass:"g-header-nav"},[0==e.islogin?o("div",{staticClass:"common-btns"},[o("button",{on:{click:function(t){e.loginDialogVisible=!0}}},[e._v("登录")]),o("button",{on:{click:function(t){e.signupDialogvisible=!0}}},[e._v("注册")])]):1==e.userRole?o("div",{staticClass:"user-btns"},[o("router-link",{attrs:{to:"/citysearch"}},[o("button",[e._v("城市查询")])]),o("router-link",{attrs:{to:"/fileanalysis"}},[o("button",[e._v("文件分析")])]),o("router-link",{attrs:{to:"/report"}},[o("button",[e._v("提出反馈")])]),o("button",[e._v("退出登录")])],1):2==e.userRole?o("div",{staticClass:"manager-btns"},[o("router-link",{attrs:{to:"/dealreport"}},[o("button",[e._v("处理用户反馈")])]),o("router-link",{attrs:{to:"/addbps"}},[o("button",[e._v("添加路网黑点")])]),o("router-link",{attrs:{to:"/addmanager"}},[o("button",[e._v("添加新管理员")])]),o("button",[e._v("退出登录")])],1):e._e()]),o("el-dialog",{attrs:{title:"登录",visible:e.loginDialogVisible},on:{"update:visible":function(t){e.loginDialogVisible=t}}},[o("el-form",{staticClass:"modal-form",attrs:{model:e.loginForm,"label-width":"90px","label-position":"left"}},[o("el-form-item",{attrs:{label:"用户名"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),o("el-form-item",{attrs:{label:"密码"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.loginDialogVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.loginDialogVisible=!1}}},[e._v("登 录")])],1)],1),o("el-dialog",{attrs:{title:"注册",visible:e.signupDialogvisible},on:{"update:visible":function(t){e.signupDialogvisible=t}}},[o("el-form",{staticClass:"modal-form",attrs:{model:e.signupForm,"label-width":"90px","label-position":"left"}},[o("el-form-item",{attrs:{label:"输入用户名"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.signupForm.username,callback:function(t){e.$set(e.signupForm,"username",t)},expression:"signupForm.username"}})],1),o("el-form-item",{attrs:{label:"输入密码"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.signupForm.password,callback:function(t){e.$set(e.signupForm,"password",t)},expression:"signupForm.password"}})],1),o("el-form-item",{attrs:{label:"确认密码"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.signupForm.passwordConfirm,callback:function(t){e.$set(e.signupForm,"passwordConfirm",t)},expression:"signupForm.passwordConfirm"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.signupDialogvisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.signupDialogvisible=!1}}},[e._v("注 册")])],1)],1)],1),o("div",{staticClass:"g-main"},[o("router-view")],1),e._m(0)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"g-footer"},[n("p",[e._v("BSI路网黑点在线识别系统")]),n("p",[e._v("邮箱：yangflo@126.com")]),n("p",[e._v("东南大学软件工程学院、交通学院")])])}],i={name:"app",components:{},data:function(){return{username:"",loginForm:{username:"",password:""},signupForm:{username:"",password:"",passwordConfirm:""},islogin:!1,userRole:1,loginDialogVisible:!1,signupDialogvisible:!1}}},s=i,l=(n("034f"),n("2877")),u=Object(l["a"])(s,r,a,!1,null,null,null),c=u.exports,f=n("8c4f"),p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},d=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page"},[o("div",{staticClass:"m-banner"},[o("h1",{staticClass:"main-title"},[e._v("路网黑点")]),o("p",[e._v("基于时空序列以及聚类算法的精确路网事故高发地点判断")])]),o("article",{staticClass:"m-discribe"},[o("section",{staticClass:"section1"},[o("img",{attrs:{src:n("6136"),alt:"",srcset:""}}),o("p",[e._v("BSI是一个基于交通大数据的事故高发点（黑点）识别系统，该系统的目的在于识别给定路网中的黑点，为提高道路交通安全的实际举措提供可靠依据 。BSI系统的特色在于将事故的一些非统计学特征应用到了事故预测之中,它会使用预测出的数据进行黑点识别，并将识别的结果进行可视化展示。")])]),o("section",{staticClass:"section2"},[o("img",{attrs:{src:n("f64f"),alt:"",srcset:""}}),o("p",[e._v("系统提供了识别城市黑点的功能，用户选定城市后，系统利用数据库中交通大数据对该城市的分析结果，将黑点展示给用户。系统也提供了识别结果的下载功能，以便用户离线使用。系统支持模拟路网黑点识别功能。系统定义了一种模拟路网及事故信息的格式，用户根据该格式填写文件，即可上传到系统并得到黑点识别结果。")])])])])}],m={},b=m,g=(n("95d0"),Object(l["a"])(b,p,d,!1,null,"551ea052",null)),h=g.exports;o["default"].use(f["a"]);var v=new f["a"]({routes:[{path:"/",name:"home",component:h},{path:"/fileanalysis",name:"fileanalysis",component:function(){return n.e("chunk-ea5d9e42").then(n.bind(null,"77e7"))}},{path:"/citysearch",name:"citysearch",component:function(){return n.e("chunk-4a2d3510").then(n.bind(null,"ea35"))}},{path:"/report",name:"report",component:function(){return n.e("chunk-ad4b04de").then(n.bind(null,"8ce2"))}},{path:"/dealreport",name:"dealreport",component:function(){return n.e("chunk-59f3e08a").then(n.bind(null,"4889"))}},{path:"/index.html/addbps",name:"addbps",component:function(){return n.e("chunk-67b5e30d").then(n.bind(null,"1eb0"))}},{path:"/index.html/addmanager",name:"addmanager",component:function(){return n.e("chunk-0afcab6c").then(n.bind(null,"fe9a"))}}]}),k=n("5c96"),_=n.n(k);n("0fae");o["default"].use(_.a),o["default"].config.productionTip=!1,new o["default"]({router:v,render:function(e){return e(c)}}).$mount("#app")},6136:function(e,t,n){e.exports=n.p+"static/img/home-img1.4494b598.png"},"64a9":function(e,t,n){},"95d0":function(e,t,n){"use strict";var o=n("4753"),r=n.n(o);r.a},cf05:function(e,t,n){e.exports=n.p+"static/img/logo.4de07d55.png"},f64f:function(e,t,n){e.exports=n.p+"static/img/home-img2.10820d4a.png"}});
//# sourceMappingURL=app.bb3a3fb7.js.map