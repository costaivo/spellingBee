parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"PrXa":[function(require,module,exports) {
var global = arguments[3];
var e=arguments[3],t="object"==typeof e&&e&&e.Object===Object&&e;module.exports=t;
},{}],"M4cY":[function(require,module,exports) {
var e=require("./_freeGlobal"),t="object"==typeof self&&self&&self.Object===Object&&self,l=e||t||Function("return this")();module.exports=l;
},{"./_freeGlobal":"PrXa"}],"ydxh":[function(require,module,exports) {
var o=require("./_root"),r=o.Symbol;module.exports=r;
},{"./_root":"M4cY"}],"oCpU":[function(require,module,exports) {
function r(r,n){for(var e=-1,l=null==r?0:r.length,o=Array(l);++e<l;)o[e]=n(r[e],e,r);return o}module.exports=r;
},{}],"+F0h":[function(require,module,exports) {
var r=Array.isArray;module.exports=r;
},{}],"+MKx":[function(require,module,exports) {
var r=require("./_Symbol"),t=Object.prototype,e=t.hasOwnProperty,o=t.toString,a=r?r.toStringTag:void 0;function l(r){var t=e.call(r,a),l=r[a];try{r[a]=void 0;var c=!0}catch(n){}var i=o.call(r);return c&&(t?r[a]=l:delete r[a]),i}module.exports=l;
},{"./_Symbol":"ydxh"}],"+SM0":[function(require,module,exports) {
var t=Object.prototype,o=t.toString;function r(t){return o.call(t)}module.exports=r;
},{}],"fk/T":[function(require,module,exports) {
var e=require("./_Symbol"),r=require("./_getRawTag"),o=require("./_objectToString"),t="[object Null]",i="[object Undefined]",n=e?e.toStringTag:void 0;function u(e){return null==e?void 0===e?i:t:n&&n in Object(e)?r(e):o(e)}module.exports=u;
},{"./_Symbol":"ydxh","./_getRawTag":"+MKx","./_objectToString":"+SM0"}],"cwaR":[function(require,module,exports) {
function e(e){return null!=e&&"object"==typeof e}module.exports=e;
},{}],"DFEd":[function(require,module,exports) {
var e=require("./_baseGetTag"),r=require("./isObjectLike"),o="[object Symbol]";function t(t){return"symbol"==typeof t||r(t)&&e(t)==o}module.exports=t;
},{"./_baseGetTag":"fk/T","./isObjectLike":"cwaR"}],"e/2l":[function(require,module,exports) {
var r=require("./_Symbol"),e=require("./_arrayMap"),i=require("./isArray"),t=require("./isSymbol"),o=1/0,u=r?r.prototype:void 0,n=u?u.toString:void 0;function a(r){if("string"==typeof r)return r;if(i(r))return e(r,a)+"";if(t(r))return n?n.call(r):"";var u=r+"";return"0"==u&&1/r==-o?"-0":u}module.exports=a;
},{"./_Symbol":"ydxh","./_arrayMap":"oCpU","./isArray":"+F0h","./isSymbol":"DFEd"}],"X6M1":[function(require,module,exports) {
function r(r,e,n){var o=-1,t=r.length;e<0&&(e=-e>t?0:t+e),(n=n>t?t:n)<0&&(n+=t),t=e>n?0:n-e>>>0,e>>>=0;for(var a=Array(t);++o<t;)a[o]=r[o+e];return a}module.exports=r;
},{}],"E/sK":[function(require,module,exports) {
var e=require("./_baseSlice");function r(r,i,n){var o=r.length;return n=void 0===n?o:n,!i&&n>=o?r:e(r,i,n)}module.exports=r;
},{"./_baseSlice":"X6M1"}],"InoQ":[function(require,module,exports) {
function r(r,e,n,t){for(var o=r.length,u=n+(t?1:-1);t?u--:++u<o;)if(e(r[u],u,r))return u;return-1}module.exports=r;
},{}],"YsmI":[function(require,module,exports) {
function e(e){return e!=e}module.exports=e;
},{}],"auMB":[function(require,module,exports) {
function r(r,e,n){for(var t=n-1,o=r.length;++t<o;)if(r[t]===e)return t;return-1}module.exports=r;
},{}],"EzxW":[function(require,module,exports) {
var e=require("./_baseFindIndex"),r=require("./_baseIsNaN"),i=require("./_strictIndexOf");function n(n,u,s){return u==u?i(n,u,s):e(n,r,s)}module.exports=n;
},{"./_baseFindIndex":"InoQ","./_baseIsNaN":"YsmI","./_strictIndexOf":"auMB"}],"h7my":[function(require,module,exports) {
var e=require("./_baseIndexOf");function r(r,n){for(var o=r.length;o--&&e(n,r[o],0)>-1;);return o}module.exports=r;
},{"./_baseIndexOf":"EzxW"}],"yx6o":[function(require,module,exports) {
var e=require("./_baseIndexOf");function r(r,n){for(var o=-1,t=r.length;++o<t&&e(n,r[o],0)>-1;);return o}module.exports=r;
},{"./_baseIndexOf":"EzxW"}],"tWPq":[function(require,module,exports) {
function t(t){return t.split("")}module.exports=t;
},{}],"5M34":[function(require,module,exports) {
var u="\\ud800-\\udfff",f="\\u0300-\\u036f",e="\\ufe20-\\ufe2f",d="\\u20d0-\\u20ff",t=f+e+d,r="\\ufe0e\\ufe0f",n="\\u200d",o=RegExp("["+n+u+t+r+"]");function p(u){return o.test(u)}module.exports=p;
},{}],"2doU":[function(require,module,exports) {
var f="\\ud800-\\udfff",u="\\u0300-\\u036f",d="\\ufe20-\\ufe2f",e="\\u20d0-\\u20ff",c=u+d+e,n="\\ufe0e\\ufe0f",o="["+f+"]",r="["+c+"]",t="\\ud83c[\\udffb-\\udfff]",i="(?:"+r+"|"+t+")",a="[^"+f+"]",b="(?:\\ud83c[\\udde6-\\uddff]){2}",g="[\\ud800-\\udbff][\\udc00-\\udfff]",j="\\u200d",m=i+"?",p="["+n+"]?",x="(?:"+j+"(?:"+[a,b,g].join("|")+")"+p+m+")*",h=p+m+x,l="(?:"+[a+r+"?",r,b,g,o].join("|")+")",s=RegExp(t+"(?="+t+")|"+l+h,"g");function v(f){return f.match(s)||[]}module.exports=v;
},{}],"zUI1":[function(require,module,exports) {
var r=require("./_asciiToArray"),e=require("./_hasUnicode"),i=require("./_unicodeToArray");function o(o){return e(o)?i(o):r(o)}module.exports=o;
},{"./_asciiToArray":"tWPq","./_hasUnicode":"5M34","./_unicodeToArray":"2doU"}],"QWoG":[function(require,module,exports) {
var r=require("./_baseToString");function e(e){return null==e?"":r(e)}module.exports=e;
},{"./_baseToString":"e/2l"}],"Q8b/":[function(require,module,exports) {
var r=require("./_baseToString"),e=require("./_castSlice"),i=require("./_charsEndIndex"),n=require("./_charsStartIndex"),t=require("./_stringToArray"),u=require("./toString"),a=/^\s+|\s+$/g;function o(o,s,c){if((o=u(o))&&(c||void 0===s))return o.replace(a,"");if(!o||!(s=r(s)))return o;var q=t(o),d=t(s),_=n(q,d),g=i(q,d)+1;return e(q,_,g).join("")}module.exports=o;
},{"./_baseToString":"e/2l","./_castSlice":"E/sK","./_charsEndIndex":"h7my","./_charsStartIndex":"yx6o","./_stringToArray":"zUI1","./toString":"QWoG"}],"GRYO":[function(require,module,exports) {
var t=Object.prototype;function o(o){var r=o&&o.constructor;return o===("function"==typeof r&&r.prototype||t)}module.exports=o;
},{}],"Sosh":[function(require,module,exports) {
function n(n,r){return function(t){return n(r(t))}}module.exports=n;
},{}],"NtzY":[function(require,module,exports) {
var e=require("./_overArg"),r=e(Object.keys,Object);module.exports=r;
},{"./_overArg":"Sosh"}],"61st":[function(require,module,exports) {
var r=require("./_isPrototype"),e=require("./_nativeKeys"),t=Object.prototype,o=t.hasOwnProperty;function n(t){if(!r(t))return e(t);var n=[];for(var u in Object(t))o.call(t,u)&&"constructor"!=u&&n.push(u);return n}module.exports=n;
},{"./_isPrototype":"GRYO","./_nativeKeys":"NtzY"}],"ihtJ":[function(require,module,exports) {
function n(n){var o=typeof n;return null!=n&&("object"==o||"function"==o)}module.exports=n;
},{}],"CqcF":[function(require,module,exports) {
var e=require("./_baseGetTag"),r=require("./isObject"),t="[object AsyncFunction]",n="[object Function]",o="[object GeneratorFunction]",c="[object Proxy]";function u(u){if(!r(u))return!1;var i=e(u);return i==n||i==o||i==t||i==c}module.exports=u;
},{"./_baseGetTag":"fk/T","./isObject":"ihtJ"}],"6Fwg":[function(require,module,exports) {
var r=require("./_root"),e=r["__core-js_shared__"];module.exports=e;
},{"./_root":"M4cY"}],"4VZN":[function(require,module,exports) {
var e=require("./_coreJsData"),r=function(){var r=/[^.]+$/.exec(e&&e.keys&&e.keys.IE_PROTO||"");return r?"Symbol(src)_1."+r:""}();function n(e){return!!r&&r in e}module.exports=n;
},{"./_coreJsData":"6Fwg"}],"1+25":[function(require,module,exports) {
var t=Function.prototype,r=t.toString;function n(t){if(null!=t){try{return r.call(t)}catch(n){}try{return t+""}catch(n){}}return""}module.exports=n;
},{}],"0tEm":[function(require,module,exports) {
var e=require("./isFunction"),r=require("./_isMasked"),t=require("./isObject"),o=require("./_toSource"),n=/[\\^$.*+?()[\]{}|]/g,c=/^\[object .+?Constructor\]$/,i=Function.prototype,u=Object.prototype,p=i.toString,s=u.hasOwnProperty,a=RegExp("^"+p.call(s).replace(n,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function l(n){return!(!t(n)||r(n))&&(e(n)?a:c).test(o(n))}module.exports=l;
},{"./isFunction":"CqcF","./_isMasked":"4VZN","./isObject":"ihtJ","./_toSource":"1+25"}],"O+Na":[function(require,module,exports) {
function n(n,o){return null==n?void 0:n[o]}module.exports=n;
},{}],"b5xW":[function(require,module,exports) {
var e=require("./_baseIsNative"),r=require("./_getValue");function u(u,a){var i=r(u,a);return e(i)?i:void 0}module.exports=u;
},{"./_baseIsNative":"0tEm","./_getValue":"O+Na"}],"tNX1":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),t=e(r,"DataView");module.exports=t;
},{"./_getNative":"b5xW","./_root":"M4cY"}],"ztLC":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),o=e(r,"Map");module.exports=o;
},{"./_getNative":"b5xW","./_root":"M4cY"}],"xI+/":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),o=e(r,"Promise");module.exports=o;
},{"./_getNative":"b5xW","./_root":"M4cY"}],"2dnz":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),t=e(r,"Set");module.exports=t;
},{"./_getNative":"b5xW","./_root":"M4cY"}],"5zzh":[function(require,module,exports) {
var e=require("./_getNative"),r=require("./_root"),a=e(r,"WeakMap");module.exports=a;
},{"./_getNative":"b5xW","./_root":"M4cY"}],"Q9e6":[function(require,module,exports) {
var e=require("./_DataView"),r=require("./_Map"),t=require("./_Promise"),a=require("./_Set"),u=require("./_WeakMap"),c=require("./_baseGetTag"),o=require("./_toSource"),i="[object Map]",n="[object Object]",s="[object Promise]",b="[object Set]",w="[object WeakMap]",j="[object DataView]",q=o(e),_=o(r),p=o(t),f=o(a),v=o(u),M=c;(e&&M(new e(new ArrayBuffer(1)))!=j||r&&M(new r)!=i||t&&M(t.resolve())!=s||a&&M(new a)!=b||u&&M(new u)!=w)&&(M=function(e){var r=c(e),t=r==n?e.constructor:void 0,a=t?o(t):"";if(a)switch(a){case q:return j;case _:return i;case p:return s;case f:return b;case v:return w}return r}),module.exports=M;
},{"./_DataView":"tNX1","./_Map":"ztLC","./_Promise":"xI+/","./_Set":"2dnz","./_WeakMap":"5zzh","./_baseGetTag":"fk/T","./_toSource":"1+25"}],"Lm6w":[function(require,module,exports) {
var e=9007199254740991;function r(r){return"number"==typeof r&&r>-1&&r%1==0&&r<=e}module.exports=r;
},{}],"8XeS":[function(require,module,exports) {
var e=require("./isFunction"),n=require("./isLength");function r(r){return null!=r&&n(r.length)&&!e(r)}module.exports=r;
},{"./isFunction":"CqcF","./isLength":"Lm6w"}],"QWfy":[function(require,module,exports) {
var e=require("./_baseGetTag"),r=require("./isArray"),i=require("./isObjectLike"),t="[object String]";function u(u){return"string"==typeof u||!r(u)&&i(u)&&e(u)==t}module.exports=u;
},{"./_baseGetTag":"fk/T","./isArray":"+F0h","./isObjectLike":"cwaR"}],"21gn":[function(require,module,exports) {
function n(n){return function(u){return null==u?void 0:u[n]}}module.exports=n;
},{}],"3orD":[function(require,module,exports) {
var e=require("./_baseProperty"),r=e("length");module.exports=r;
},{"./_baseProperty":"21gn"}],"QykZ":[function(require,module,exports) {
var f="\\ud800-\\udfff",u="\\u0300-\\u036f",d="\\ufe20-\\ufe2f",e="\\u20d0-\\u20ff",n=u+d+e,o="\\ufe0e\\ufe0f",r="["+f+"]",t="["+n+"]",c="\\ud83c[\\udffb-\\udfff]",a="(?:"+t+"|"+c+")",i="[^"+f+"]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",x="[\\ud800-\\udbff][\\udc00-\\udfff]",b="\\u200d",g=a+"?",j="["+o+"]?",l="(?:"+b+"(?:"+[i,s,x].join("|")+")"+j+g+")*",p=j+g+l,v="(?:"+[i+t+"?",t,s,x,r].join("|")+")",m=RegExp(c+"(?="+c+")|"+v+p,"g");function E(f){for(var u=m.lastIndex=0;m.test(f);)++u;return u}module.exports=E;
},{}],"SzN6":[function(require,module,exports) {
var e=require("./_asciiSize"),i=require("./_hasUnicode"),r=require("./_unicodeSize");function u(u){return i(u)?r(u):e(u)}module.exports=u;
},{"./_asciiSize":"3orD","./_hasUnicode":"5M34","./_unicodeSize":"QykZ"}],"ykeN":[function(require,module,exports) {
var e=require("./_baseKeys"),r=require("./_getTag"),i=require("./isArrayLike"),t=require("./isString"),u=require("./_stringSize"),n="[object Map]",s="[object Set]";function a(a){if(null==a)return 0;if(i(a))return t(a)?u(a):a.length;var g=r(a);return g==n||g==s?a.size:e(a).length}module.exports=a;
},{"./_baseKeys":"61st","./_getTag":"Q9e6","./isArrayLike":"8XeS","./isString":"QWfy","./_stringSize":"SzN6"}],"Bhgs":[function(require,module,exports) {
var e=require("./isArray"),r=require("./isSymbol"),t=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,n=/^\w*$/;function u(u,l){if(e(u))return!1;var o=typeof u;return!("number"!=o&&"symbol"!=o&&"boolean"!=o&&null!=u&&!r(u))||(n.test(u)||!t.test(u)||null!=l&&u in Object(l))}module.exports=u;
},{"./isArray":"+F0h","./isSymbol":"DFEd"}],"Shes":[function(require,module,exports) {
var e=require("./_getNative"),r=e(Object,"create");module.exports=r;
},{"./_getNative":"b5xW"}],"1w7U":[function(require,module,exports) {
var e=require("./_nativeCreate");function t(){this.__data__=e?e(null):{},this.size=0}module.exports=t;
},{"./_nativeCreate":"Shes"}],"iOZZ":[function(require,module,exports) {
function t(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}module.exports=t;
},{}],"/hBF":[function(require,module,exports) {
var e=require("./_nativeCreate"),r="__lodash_hash_undefined__",t=Object.prototype,a=t.hasOwnProperty;function _(t){var _=this.__data__;if(e){var o=_[t];return o===r?void 0:o}return a.call(_,t)?_[t]:void 0}module.exports=_;
},{"./_nativeCreate":"Shes"}],"CKBs":[function(require,module,exports) {
var e=require("./_nativeCreate"),r=Object.prototype,t=r.hasOwnProperty;function a(r){var a=this.__data__;return e?void 0!==a[r]:t.call(a,r)}module.exports=a;
},{"./_nativeCreate":"Shes"}],"rh+C":[function(require,module,exports) {
var e=require("./_nativeCreate"),_="__lodash_hash_undefined__";function i(i,t){var a=this.__data__;return this.size+=this.has(i)?0:1,a[i]=e&&void 0===t?_:t,this}module.exports=i;
},{"./_nativeCreate":"Shes"}],"GyRm":[function(require,module,exports) {
var e=require("./_hashClear"),r=require("./_hashDelete"),t=require("./_hashGet"),h=require("./_hashHas"),o=require("./_hashSet");function a(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var h=e[r];this.set(h[0],h[1])}}a.prototype.clear=e,a.prototype.delete=r,a.prototype.get=t,a.prototype.has=h,a.prototype.set=o,module.exports=a;
},{"./_hashClear":"1w7U","./_hashDelete":"iOZZ","./_hashGet":"/hBF","./_hashHas":"CKBs","./_hashSet":"rh+C"}],"UuqP":[function(require,module,exports) {
function t(){this.__data__=[],this.size=0}module.exports=t;
},{}],"LaH9":[function(require,module,exports) {
function e(e,n){return e===n||e!=e&&n!=n}module.exports=e;
},{}],"TrJy":[function(require,module,exports) {
var r=require("./eq");function e(e,n){for(var t=e.length;t--;)if(r(e[t][0],n))return t;return-1}module.exports=e;
},{"./eq":"LaH9"}],"UjAu":[function(require,module,exports) {
var e=require("./_assocIndexOf"),r=Array.prototype,t=r.splice;function a(r){var a=this.__data__,o=e(a,r);return!(o<0)&&(o==a.length-1?a.pop():t.call(a,o,1),--this.size,!0)}module.exports=a;
},{"./_assocIndexOf":"TrJy"}],"bvw3":[function(require,module,exports) {
var r=require("./_assocIndexOf");function e(e){var a=this.__data__,o=r(a,e);return o<0?void 0:a[o][1]}module.exports=e;
},{"./_assocIndexOf":"TrJy"}],"0Yob":[function(require,module,exports) {
var e=require("./_assocIndexOf");function r(r){return e(this.__data__,r)>-1}module.exports=r;
},{"./_assocIndexOf":"TrJy"}],"afRd":[function(require,module,exports) {
var s=require("./_assocIndexOf");function e(e,r){var t=this.__data__,i=s(t,e);return i<0?(++this.size,t.push([e,r])):t[i][1]=r,this}module.exports=e;
},{"./_assocIndexOf":"TrJy"}],"hCml":[function(require,module,exports) {
var e=require("./_listCacheClear"),t=require("./_listCacheDelete"),r=require("./_listCacheGet"),l=require("./_listCacheHas"),o=require("./_listCacheSet");function a(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var l=e[t];this.set(l[0],l[1])}}a.prototype.clear=e,a.prototype.delete=t,a.prototype.get=r,a.prototype.has=l,a.prototype.set=o,module.exports=a;
},{"./_listCacheClear":"UuqP","./_listCacheDelete":"UjAu","./_listCacheGet":"bvw3","./_listCacheHas":"0Yob","./_listCacheSet":"afRd"}],"+UOH":[function(require,module,exports) {
var e=require("./_Hash"),i=require("./_ListCache"),r=require("./_Map");function a(){this.size=0,this.__data__={hash:new e,map:new(r||i),string:new e}}module.exports=a;
},{"./_Hash":"GyRm","./_ListCache":"hCml","./_Map":"ztLC"}],"MmTn":[function(require,module,exports) {
function o(o){var n=typeof o;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==o:null===o}module.exports=o;
},{}],"19us":[function(require,module,exports) {
var r=require("./_isKeyable");function e(e,a){var t=e.__data__;return r(a)?t["string"==typeof a?"string":"hash"]:t.map}module.exports=e;
},{"./_isKeyable":"MmTn"}],"QjAw":[function(require,module,exports) {
var e=require("./_getMapData");function t(t){var r=e(this,t).delete(t);return this.size-=r?1:0,r}module.exports=t;
},{"./_getMapData":"19us"}],"X/Tf":[function(require,module,exports) {
var e=require("./_getMapData");function t(t){return e(this,t).get(t)}module.exports=t;
},{"./_getMapData":"19us"}],"jqgC":[function(require,module,exports) {
var e=require("./_getMapData");function r(r){return e(this,r).has(r)}module.exports=r;
},{"./_getMapData":"19us"}],"QE4m":[function(require,module,exports) {
var e=require("./_getMapData");function t(t,i){var s=e(this,t),r=s.size;return s.set(t,i),this.size+=s.size==r?0:1,this}module.exports=t;
},{"./_getMapData":"19us"}],"ZmWn":[function(require,module,exports) {
var e=require("./_mapCacheClear"),r=require("./_mapCacheDelete"),t=require("./_mapCacheGet"),a=require("./_mapCacheHas"),p=require("./_mapCacheSet");function o(e){var r=-1,t=null==e?0:e.length;for(this.clear();++r<t;){var a=e[r];this.set(a[0],a[1])}}o.prototype.clear=e,o.prototype.delete=r,o.prototype.get=t,o.prototype.has=a,o.prototype.set=p,module.exports=o;
},{"./_mapCacheClear":"+UOH","./_mapCacheDelete":"QjAw","./_mapCacheGet":"X/Tf","./_mapCacheHas":"jqgC","./_mapCacheSet":"QE4m"}],"wFGW":[function(require,module,exports) {
var e=require("./_MapCache"),r="Expected a function";function t(n,a){if("function"!=typeof n||null!=a&&"function"!=typeof a)throw new TypeError(r);var c=function(){var e=arguments,r=a?a.apply(this,e):e[0],t=c.cache;if(t.has(r))return t.get(r);var o=n.apply(this,e);return c.cache=t.set(r,o)||t,o};return c.cache=new(t.Cache||e),c}t.Cache=e,module.exports=t;
},{"./_MapCache":"ZmWn"}],"CquK":[function(require,module,exports) {
var e=require("./memoize"),r=500;function n(n){var u=e(n,function(e){return c.size===r&&c.clear(),e}),c=u.cache;return u}module.exports=n;
},{"./memoize":"wFGW"}],"pYME":[function(require,module,exports) {
var e=require("./_memoizeCapped"),r=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,p=/\\(\\)?/g,u=e(function(e){var u=[];return 46===e.charCodeAt(0)&&u.push(""),e.replace(r,function(e,r,a,o){u.push(a?o.replace(p,"$1"):r||e)}),u});module.exports=u;
},{"./_memoizeCapped":"CquK"}],"0RbE":[function(require,module,exports) {
var r=require("./isArray"),e=require("./_isKey"),i=require("./_stringToPath"),t=require("./toString");function u(u,n){return r(u)?u:e(u,n)?[u]:i(t(u))}module.exports=u;
},{"./isArray":"+F0h","./_isKey":"Bhgs","./_stringToPath":"pYME","./toString":"QWoG"}],"BA1W":[function(require,module,exports) {
var r=require("./isSymbol"),e=1/0;function t(t){if("string"==typeof t||r(t))return t;var i=t+"";return"0"==i&&1/t==-e?"-0":i}module.exports=t;
},{"./isSymbol":"DFEd"}],"Ws9z":[function(require,module,exports) {
var r=require("./_castPath"),e=require("./_toKey");function t(t,o){for(var u=0,n=(o=r(o,t)).length;null!=t&&u<n;)t=t[e(o[u++])];return u&&u==n?t:void 0}module.exports=t;
},{"./_castPath":"0RbE","./_toKey":"BA1W"}],"/BBF":[function(require,module,exports) {
var e=require("./_baseGet");function r(r,o,u){var i=null==r?void 0:e(r,o);return void 0===i?u:i}module.exports=r;
},{"./_baseGet":"Ws9z"}],"uBrB":[function(require,module,exports) {
var r=require("./_arrayMap");function e(e,n){return r(n,function(r){return[r,e[r]]})}module.exports=e;
},{"./_arrayMap":"oCpU"}],"XDXg":[function(require,module,exports) {
function r(r){var n=-1,o=Array(r.size);return r.forEach(function(r,e){o[++n]=[e,r]}),o}module.exports=r;
},{}],"gwZ6":[function(require,module,exports) {
function r(r){var n=-1,o=Array(r.size);return r.forEach(function(r){o[++n]=[r,r]}),o}module.exports=r;
},{}],"sqg4":[function(require,module,exports) {
var r=require("./_baseToPairs"),e=require("./_getTag"),t=require("./_mapToArray"),a=require("./_setToPairs"),o="[object Map]",u="[object Set]";function i(i){return function(n){var s=e(n);return s==o?t(n):s==u?a(n):r(n,i(n))}}module.exports=i;
},{"./_baseToPairs":"uBrB","./_getTag":"Q9e6","./_mapToArray":"XDXg","./_setToPairs":"gwZ6"}],"z+W8":[function(require,module,exports) {
function r(r,o){for(var e=-1,n=Array(r);++e<r;)n[e]=o(e);return n}module.exports=r;
},{}],"4rx9":[function(require,module,exports) {
var e=require("./_baseGetTag"),r=require("./isObjectLike"),t="[object Arguments]";function u(u){return r(u)&&e(u)==t}module.exports=u;
},{"./_baseGetTag":"fk/T","./isObjectLike":"cwaR"}],"9oh3":[function(require,module,exports) {
var e=require("./_baseIsArguments"),r=require("./isObjectLike"),t=Object.prototype,l=t.hasOwnProperty,n=t.propertyIsEnumerable,u=e(function(){return arguments}())?e:function(e){return r(e)&&l.call(e,"callee")&&!n.call(e,"callee")};module.exports=u;
},{"./_baseIsArguments":"4rx9","./isObjectLike":"cwaR"}],"i9YA":[function(require,module,exports) {
function e(){return!1}module.exports=e;
},{}],"+Cdu":[function(require,module,exports) {

var e=require("./_root"),o=require("./stubFalse"),r="object"==typeof exports&&exports&&!exports.nodeType&&exports,t=r&&"object"==typeof module&&module&&!module.nodeType&&module,p=t&&t.exports===r,u=p?e.Buffer:void 0,d=u?u.isBuffer:void 0,s=d||o;module.exports=s;
},{"./_root":"M4cY","./stubFalse":"i9YA"}],"XqZz":[function(require,module,exports) {
var e=9007199254740991,r=/^(?:0|[1-9]\d*)$/;function t(t,n){var o=typeof t;return!!(n=null==n?e:n)&&("number"==o||"symbol"!=o&&r.test(t))&&t>-1&&t%1==0&&t<n}module.exports=t;
},{}],"IQli":[function(require,module,exports) {
var e=require("./_baseGetTag"),t=require("./isLength"),r=require("./isObjectLike"),o="[object Arguments]",b="[object Array]",c="[object Boolean]",j="[object Date]",a="[object Error]",n="[object Function]",i="[object Map]",A="[object Number]",y="[object Object]",u="[object RegExp]",g="[object Set]",l="[object String]",p="[object WeakMap]",s="[object ArrayBuffer]",m="[object DataView]",U="[object Float32Array]",f="[object Float64Array]",q="[object Int8Array]",F="[object Int16Array]",I="[object Int32Array]",d="[object Uint8Array]",h="[object Uint8ClampedArray]",k="[object Uint16Array]",x="[object Uint32Array]",B={};function D(o){return r(o)&&t(o.length)&&!!B[e(o)]}B[U]=B[f]=B[q]=B[F]=B[I]=B[d]=B[h]=B[k]=B[x]=!0,B[o]=B[b]=B[s]=B[c]=B[m]=B[j]=B[a]=B[n]=B[i]=B[A]=B[y]=B[u]=B[g]=B[l]=B[p]=!1,module.exports=D;
},{"./_baseGetTag":"fk/T","./isLength":"Lm6w","./isObjectLike":"cwaR"}],"kFVy":[function(require,module,exports) {
function n(n){return function(r){return n(r)}}module.exports=n;
},{}],"a9Sd":[function(require,module,exports) {
var e=require("./_freeGlobal"),o="object"==typeof exports&&exports&&!exports.nodeType&&exports,r=o&&"object"==typeof module&&module&&!module.nodeType&&module,t=r&&r.exports===o,p=t&&e.process,u=function(){try{var e=r&&r.require&&r.require("util").types;return e||p&&p.binding&&p.binding("util")}catch(o){}}();module.exports=u;
},{"./_freeGlobal":"PrXa"}],"pKgN":[function(require,module,exports) {
var e=require("./_baseIsTypedArray"),r=require("./_baseUnary"),a=require("./_nodeUtil"),i=a&&a.isTypedArray,s=i?r(i):e;module.exports=s;
},{"./_baseIsTypedArray":"IQli","./_baseUnary":"kFVy","./_nodeUtil":"a9Sd"}],"Fz1h":[function(require,module,exports) {
var e=require("./_baseTimes"),r=require("./isArguments"),t=require("./isArray"),i=require("./isBuffer"),n=require("./_isIndex"),s=require("./isTypedArray"),u=Object.prototype,f=u.hasOwnProperty;function a(u,a){var o=t(u),p=!o&&r(u),y=!o&&!p&&i(u),g=!o&&!p&&!y&&s(u),h=o||p||y||g,l=h?e(u.length,String):[],q=l.length;for(var b in u)!a&&!f.call(u,b)||h&&("length"==b||y&&("offset"==b||"parent"==b)||g&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||n(b,q))||l.push(b);return l}module.exports=a;
},{"./_baseTimes":"z+W8","./isArguments":"9oh3","./isArray":"+F0h","./isBuffer":"+Cdu","./_isIndex":"XqZz","./isTypedArray":"pKgN"}],"6svo":[function(require,module,exports) {
var e=require("./_arrayLikeKeys"),r=require("./_baseKeys"),i=require("./isArrayLike");function u(u){return i(u)?e(u):r(u)}module.exports=u;
},{"./_arrayLikeKeys":"Fz1h","./_baseKeys":"61st","./isArrayLike":"8XeS"}],"2YY8":[function(require,module,exports) {
var e=require("./_createToPairs"),r=require("./keys"),a=e(r);module.exports=a;
},{"./_createToPairs":"sqg4","./keys":"6svo"}],"1bWe":[function(require,module,exports) {
function n(n){return null==n}module.exports=n;
},{}],"lfs2":[function(require,module,exports) {
var e=require("./_root"),r=e.isFinite;function o(e){return"number"==typeof e&&r(e)}module.exports=o;
},{"./_root":"M4cY"}],"fAPr":[function(require,module,exports) {
function r(r){for(var n=-1,e=null==r?0:r.length,l=0,o=[];++n<e;){var t=r[n];t&&(o[l++]=t)}return o}module.exports=r;
},{}],"wi9q":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.validateLocale=exports.splitSentences=void 0;var e=n(require("lodash/trim")),a=n(require("lodash/compact"));function n(e){return e&&e.__esModule?e:{default:e}}var i=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,a.default)(n.replace(/\.+/g,".|").replace(/\?/g,"?|").replace(/\!/g,"!|").split("|").map(function(a){return(0,e.default)(a)}))};exports.splitSentences=i;var t=/^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i,o=function(e){return"string"==typeof e&&t.test(e)};exports.validateLocale=o;
},{"lodash/trim":"Q8b/","lodash/compact":"fAPr"}],"ovRn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=c(require("lodash/trim")),t=c(require("lodash/size")),n=c(require("lodash/get")),r=c(require("lodash/toPairs")),i=c(require("lodash/isNil")),s=c(require("lodash/isObject")),a=c(require("lodash/isString")),o=c(require("lodash/isFinite")),u=require("./utils");function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return v(e)||h(e,t)||f()}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function h(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){i=!0,s=u}finally{try{r||null==o.return||o.return()}finally{if(i)throw s}}return n}function v(e){if(Array.isArray(e))return e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}var g=function(){function c(){p(this,c),this.browserSupport="speechSynthesis"in window&&"SpeechSynthesisUtterance"in window,this.synthesisVoice=null}return y(c,[{key:"init",value:function(e){var t=this;return new Promise(function(s,a){t.browserSupport||a("Your browser does not support Speech Synthesis");var o=(0,n.default)(e,"listeners",{}),u=(0,n.default)(e,"splitSentences",!0),c=(0,n.default)(e,"lang"),f=(0,n.default)(e,"volume",1),h=(0,n.default)(e,"rate",1),v=(0,n.default)(e,"pitch",1),p=(0,n.default)(e,"voice");(0,r.default)(o).forEach(function(e){var t=l(e,2),n=t[0],r=t[1];"onvoiceschanged"!==n&&(speechSynthesis[n]=function(e){r&&r(e)})}),t._loadVoices().then(function(e){o.onvoiceschanged&&o.onvoiceschanged(e),!(0,i.default)(c)&&t.setLanguage(c),!(0,i.default)(p)&&t.setVoice(p),!(0,i.default)(f)&&t.setVolume(f),!(0,i.default)(h)&&t.setRate(h),!(0,i.default)(v)&&t.setPitch(v),!(0,i.default)(u)&&t.setSplitSentences(u),s({voices:e,lang:t.lang,voice:t.voice,volume:t.volume,rate:t.rate,pitch:t.pitch,splitSentences:t.splitSentences,browserSupport:t.browserSupport})}).catch(function(){a()})})}},{key:"_fetchVoices",value:function(){return new Promise(function(e,n){setTimeout(function(){var r=speechSynthesis.getVoices();return(0,t.default)(r)>0?e(r):n()},100)})}},{key:"_loadVoices",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return this._fetchVoices().catch(function(n){if(0===t)throw n;return e._loadVoices(t-1)})}},{key:"hasBrowserSupport",value:function(){return this.browserSupport}},{key:"setVoice",value:function(e){var t,n=speechSynthesis.getVoices();if((0,a.default)(e)&&(t=n.find(function(t){return t.name===e})),(0,s.default)(e)&&(t=e),!t)throw"Error setting voice. The voice you passed is not valid or the voices have not been loaded yet.";this.synthesisVoice=t}},{key:"setLanguage",value:function(e){if(e=e.replace("_","-"),!(0,u.validateLocale)(e))throw"Error setting language. Please verify your locale is BCP47 format (http://schneegans.de/lv/?tags=es-FR&format=text)";this.lang=e}},{key:"setVolume",value:function(e){if(e=parseFloat(e),!((0,o.default)(e)&&e>=0&&e<=1))throw"Error setting volume. Please verify your volume value is a number between 0 and 1.";this.volume=e}},{key:"setRate",value:function(e){if(e=parseFloat(e),!((0,o.default)(e)&&e>=0&&e<=10))throw"Error setting rate. Please verify your volume value is a number between 0 and 10.";this.rate=e}},{key:"setPitch",value:function(e){if(e=parseFloat(e),!((0,o.default)(e)&&e>=0&&e<=2))throw"Error setting pitch. Please verify your pitch value is a number between 0 and 2.";this.pitch=e}},{key:"setSplitSentences",value:function(e){this.splitSentences=e}},{key:"speak",value:function(n){var s=this;return new Promise(function(a,o){var c=n.text,f=n.listeners,h=void 0===f?{}:f,v=n.queue,p=void 0===v||v,d=(0,e.default)(c);(0,i.default)(d)&&a(),!p&&s.cancel();var y=[],g=s.splitSentences?(0,u.splitSentences)(d):[d];g.forEach(function(e,n){var i=n===(0,t.default)(g)-1,u=new SpeechSynthesisUtterance;s.synthesisVoice&&(u.voice=s.synthesisVoice),s.lang&&(u.lang=s.lang),s.volume&&(u.volume=s.volume),s.rate&&(u.rate=s.rate),s.pitch&&(u.pitch=s.pitch),u.text=e,(0,r.default)(h).forEach(function(e){var t=l(e,2),n=t[0],r=t[1];u[n]=function(e){r&&r(e),"onerror"===n&&o({utterances:y,lastUtterance:u,error:e}),"onend"===n&&i&&a({utterances:y,lastUtterance:u})}}),y.push(u),speechSynthesis.speak(u)})})}},{key:"pending",value:function(){return speechSynthesis.pending}},{key:"paused",value:function(){return speechSynthesis.paused}},{key:"speaking",value:function(){return speechSynthesis.speaking}},{key:"pause",value:function(){speechSynthesis.pause()}},{key:"resume",value:function(){speechSynthesis.resume()}},{key:"cancel",value:function(){speechSynthesis.cancel()}}]),c}(),S=g;exports.default=S;
},{"lodash/trim":"Q8b/","lodash/size":"ykeN","lodash/get":"/BBF","lodash/toPairs":"2YY8","lodash/isNil":"1bWe","lodash/isObject":"ihtJ","lodash/isString":"QWfy","lodash/isFinite":"lfs2","./utils":"wi9q"}],"vZyd":[function(require,module,exports) {
"use strict";var e=t(require("speak-tts"));function t(e){return e&&e.__esModule?e:{default:e}}var n=function(e){var t=window.document.createElement("div"),n='<h2>Available Voices</h2><select id="languages"><option value="">autodetect language</option>';e.forEach(function(e){n+='<option value="'.concat(e.lang,'" data-name="').concat(e.name,'">').concat(e.name," (").concat(e.lang,")</option>")}),t.innerHTML=n,window.document.getElementById("mainHeader").appendChild(t)},o=["adventure","structure","mysterious","appreciation","furniture","maintenance","ascending","surprise","scariest","expenditure","bracket","sequence","moisture","received","etiquette","constitution","foreign","discussion","scholarship","camouflage","recommend","mathematician","announcement","plateau","sculpture","humorous","perseverance","interrogation","successful","musician"],r=0,s=0,a=0,i=0,c=0;function l(e){for(var t=e.length;t>0;){var n=Math.floor(Math.random()*t),o=e[--t];e[t]=e[n],e[n]=o}return e}function u(){o=l(o);var t=new e.default;t.init({volume:.5,lang:"en-GB",rate:1,pitch:1,listeners:{onvoiceschanged:function(e){console.log("Voices changed",e)}}}).then(function(e){console.log("Speech is ready",e),n(e.voices),d(t)}).catch(function(e){console.error("An error occured while initializing : ",e)});var r=t.hasBrowserSupport()?"Hurray, your browser supports speech synthesis":"Your browser does NOT support speech synthesis. Try using Chrome of Safari instead !";document.getElementById("support").innerHTML=r}function d(e){var t=document.getElementById("play"),n=document.getElementById("pause"),l=document.getElementById("resume"),u=document.getElementById("startMyTraining"),d=document.getElementById("submitAnswer"),m=document.getElementById("inputAnswer"),g=document.getElementById("mainHeader"),p=document.getElementById("trainingArena"),y=document.getElementById("text"),f=document.getElementById("languages"),v=document.getElementById("scoreCounter"),h=document.getElementById("wrongAttempts"),b=document.getElementById("currentWrongAttempts"),E=document.getElementById("totalWordsAttempted"),w=document.getElementById("totalWordsAvailable"),B=document.getElementById("scoreDivider"),I=document.getElementById("wordsDisplayArea"),T=document.getElementById("progressBar"),x=document.getElementById("progressCounter"),k=o[0];function A(){0===c&&(E.classList.remove("d-none"),w.classList.remove("d-none"),T.classList.remove("d-none"),B.classList.remove("d-none"),x.setAttribute("aria-valuemax",0),w.innerText=o.length),c++,E.innerText=c;var t=o[s];x.setAttribute("aria-valuenow",c);var n="width: "+100*c/o.length+"%";x.setAttribute("style",n),i>0?(a++,h.innerText=a,I.innerHTML+="<label class='btn btn-danger'>"+t+" <span class='badge badge-danger badge-pill'><i class='fa fa-times-circle' aria-hidden='true'></i></span></label>"):I.innerHTML+="<label class='btn btn-primary'>"+t+" <span class='badge badge-success badge-pill'><i class='fa fa-check' aria-hidden='true'></i></span></label>",i=0,b.innerText="0",m.value="",m.style.backgroundColor="white",m.style.color="black",a>3?(e.speak({text:"Sorry! You have Exceeded all the lifelines. Your Final Score is ".concat(r,". Please restart to try again."),queue:!1}),setTimeout({},2e3),document.getElementById("msgGameOver").classList.remove("d-none"),d.style.visibility="hidden",u.style.visibility="hidden",T.classList.add("d-none")):s>=o.length?(e.speak({text:"You have completed Training for all the words today. Your Final score is "+r+" points",queue:!1}),T.classList.add("d-none"),0==a&&document.getElementById("msgAllGood").classList.remove("d-none")):(k=o[++s],e.speak({text:"Ready for Next Word..., spell "+k,queue:!1}),setTimeout({},2e3)),submitAnswer.disabled=!1}t.addEventListener("click",function(){var t=f.value,n=f.options[f.selectedIndex].dataset.name;t&&e.setLanguage(f.value),n&&e.setVoice(n),e.speak({text:y.innerText,queue:!1,listeners:{onstart:function(){console.log("Start utterance")},onend:function(){console.log("End utterance")},onresume:function(){console.log("Resume utterance")},onboundary:function(e){console.log(e.name+" boundary reached after "+e.elapsedTime+" milliseconds.")}}}).then(function(e){console.log("Success !",e),g.hidden=!0,p.classList.remove("d-none")}).catch(function(e){console.error("An error occurred :",e)})}),n.addEventListener("click",function(){e.pause()}),l.addEventListener("click",function(){e.resume()}),d.addEventListener("click",function(){if(console.log("Submit Button Clicked!!"),submitAnswer.disabled=!0,m.value.toLowerCase()===k.toLocaleLowerCase()){var t=-1*i+10;(r+=t>0?t:1)%2==0?(console.log("odd score"),e.speak({text:"Very Good my Friend. Now for the next word",queue:!1}),setTimeout({},2e3)):(console.log("even score"),e.speak({text:"Great Going buddy. Your current score is :"+r+"points. Next word coming up",queue:!1}),setTimeout({},2e3)),v.innerText=r,A()}else i++,b.innerText=i,i<2?(e.speak({text:"Sorry That was an Incorrect Answer. Try Again!",queue:!1}),m.style.backgroundColor="red",m.style.color="white",submitAnswer.disabled=!1):(e.speak({text:"Sorry! That was a wrong spelling. Try the next word now",queue:!1}),setTimeout({},5e3),A())}),document.getElementById("inputAnswer").addEventListener("keyup",function(e){13===e.keyCode&&(e.preventDefault(),document.getElementById("submitAnswer").click())}),u.addEventListener("click",function(){e.speak({text:"Spell "+k,queue:!1,listeners:{onstart:function(){u.value="Play Word",console.log("Start utterance")},onend:function(){console.log("End utterance")},onresume:function(){console.log("Resume utterance")},onboundary:function(e){console.log(e.name+" boundary reached after "+e.elapsedTime+" milliseconds.")}}}).then(function(e){console.log("Success !",e),u.innerText="Play Word"}).catch(function(e){console.error("An error occurred :",e)})})}u();
},{"speak-tts":"ovRn"}]},{},["vZyd"], null)
//# sourceMappingURL=/app.eb858173.js.map