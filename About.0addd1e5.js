parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"GXfe":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("tslib"),t=u(e),r=require("vue-property-decorator");function u(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var n=function(e){function u(){return null!==e&&e.apply(this,arguments)||this}return t.__extends(u,e),u=t.__decorate([(0,r.Component)({data:function(){return{isAciveItem:!1,todos:[{text:"Изучить JavaScript"},{text:"Изучить Vue"},{text:"Создать что-нибудь классное"}]}}})],u)}(r.Vue);exports.default=n;
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"about"},[i("h1",[t._v("This is an about page")]),t._v(" "),i("ol",t._l(t.todos,function(e){return i("li",{key:e.id,staticClass:"item",class:{"item--active":t.isAciveItem},on:{click:function(e){t.isAciveItem=!t.isAciveItem}}},[t._v(t._s(e.text))])}))])},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-07c112",functional:void 0});})();
},{"tslib":"/mDB","vue-property-decorator":"ZmJ3"}]},{},["GXfe"], null)
//# sourceMappingURL=/About.0addd1e5.map