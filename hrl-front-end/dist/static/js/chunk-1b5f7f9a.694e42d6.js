(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b5f7f9a"],{2196:function(a,e,r){},c0db:function(a,e,r){"use strict";var t=r("2196"),o=r.n(t);o.a},fe9a:function(a,e,r){"use strict";r.r(e);var t=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"page"},[r("div",{staticClass:"m-discribe"},[a._v("\n        亲爱的管理员，您有权升级普通用户为管理员或者邀请他人成为管理员，请慎重操作\n    ")]),r("div",{staticClass:"m-func"},[r("el-tabs",{attrs:{type:"border-card",stretch:""}},[r("el-tab-pane",{attrs:{label:"普通用户升级"}},[r("el-form",{staticClass:"modal-form",attrs:{model:a.upgradeForm,"label-width":"90px","label-position":"left"}},[r("el-form-item",{attrs:{label:"输入用户名"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:a.upgradeForm.username,callback:function(e){a.$set(a.upgradeForm,"username",e)},expression:"upgradeForm.username"}})],1)],1),r("div",{staticClass:"btn-group"},[r("el-button",[a._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:a.userUpgrade}},[a._v("添 加")])],1)],1),r("el-tab-pane",{attrs:{label:"添加新管理员"}},[r("el-form",{staticClass:"modal-form",attrs:{model:a.addManagerForm,"label-width":"90px","label-position":"left"}},[r("el-form-item",{attrs:{label:"输入用户名"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:a.addManagerForm.username,callback:function(e){a.$set(a.addManagerForm,"username",e)},expression:"addManagerForm.username"}})],1),r("el-form-item",{attrs:{label:"输入密码"}},[r("el-input",{attrs:{"show-password":"",autocomplete:"off"},model:{value:a.addManagerForm.password,callback:function(e){a.$set(a.addManagerForm,"password",e)},expression:"addManagerForm.password"}})],1),r("el-form-item",{attrs:{label:"确认密码"}},[r("el-input",{attrs:{"show-password":"",autocomplete:"off"},model:{value:a.addManagerForm.passwordConfirm,callback:function(e){a.$set(a.addManagerForm,"passwordConfirm",e)},expression:"addManagerForm.passwordConfirm"}})],1)],1),r("div",{staticClass:"btn-group"},[r("el-button",[a._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:a.addManager}},[a._v("添 加")])],1)],1)],1)],1)])},o=[],s={data:function(){return{upgradeForm:{username:""},addManagerForm:{username:"",password:"",passwordConfirm:""}}},methods:{userUpgrade:function(){this.$axios({method:"post",url:"/userupgrade/",data:{username:this.upgradeForm.username}}).then(function(a){var e=a.data;alert(e.info)}).catch(function(a){console.log(a)})},addManager:function(){this.addManagerForm.password==this.addManagerForm.passwordConfirm?this.$axios({method:"post",url:"/addmanager/",data:{username:this.addManagerForm.username,password:this.addManagerForm.password}}).then(function(a){var e=a.data;alert(e.info)}).catch(function(a){console.log(a)}):alert("请确认两次输入密码是否一致")}}},n=s,d=(r("c0db"),r("2877")),l=Object(d["a"])(n,t,o,!1,null,"0aa09236",null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-1b5f7f9a.694e42d6.js.map