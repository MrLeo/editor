(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ueditor"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"0bfb":function(t,e,n){"use strict";var r=n("cb7c");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},1169:function(t,e,n){var r=n("2d95");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),o=n("6821"),a=n("6a99"),c=n("69a8"),u=n("c69a"),s=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?s:function(t,e){if(t=o(t),e=a(e,!0),u)try{return s(t,e)}catch(n){}if(c(t,e))return i(!r.f.call(t,e),t[e])}},"1bc3":function(t,e,n){var r=n("f772");t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var r=n("f772"),i=n("e53d").document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"35e8":function(t,e,n){var r=n("d9f6"),i=n("aebd");t.exports=n("8e60")?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},"37c8":function(t,e,n){e.f=n("2b4c")},3846:function(t,e,n){n("9e1e")&&"g"!=/./g.flags&&n("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:n("0bfb")})},"3a72":function(t,e,n){var r=n("7726"),i=n("8378"),o=n("2d00"),a=n("37c8"),c=n("86cc").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:a.f(t)})}},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"456d":function(t,e,n){var r=n("4bf8"),i=n("0d58");n("5eda")("keys",function(){return function(t){return i(r(t))}})},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},5471:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Tinymce",{ref:"editor",attrs:{height:400},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tinymce-container",class:{fullscreen:t.fullscreen},style:{width:t.containerWidth}},[n("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}})])},a=[],c=(n("ac6a"),n("c5f6"),["advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime legacyoutput link lists media nonbreaking noneditable pagebreak powerpaste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount lineheight"]),u=c,s=["searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"],f=s,l=(n("ac4d"),n("8a81"),[]);function d(){return window.tinymce}var p=function(t,e){var n=document.getElementById(t),r=e||function(){};if(!n){var i=document.createElement("script");i.src=t,i.id=t,document.body.appendChild(i),l.push(r);var o="onload"in i?a:c;o(i)}function a(e){e.onload=function(){this.onerror=this.onload=null;for(var t=0,n=l;t<n.length;t++){var r=n[t];r(null,e)}l=null},e.onerror=function(){this.onerror=this.onload=null,r(new Error("Failed to load "+t),e)}}function c(t){t.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var e=!0,n=!1,r=void 0;try{for(var i,o=l[Symbol.iterator]();!(e=(i=o.next()).done);e=!0){var a=i.value;a(null,t)}}catch(c){n=!0,r=c}finally{try{e||null==o.return||o.return()}finally{if(n)throw r}}l=null}}}n&&r&&(d()?r(null,n):l.push(r))},h=p,m="/tinymce/tinymce.min.js",y={name:"Tinymce",props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"}}},computed:{containerWidth:function(){var t=this.width;return/^[\d]+(\.[\d]+)?$/.test(t)?"".concat(t,"px"):t}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return window.tinymce.get(e.tinymceId).setContent(t||"")})}},mounted:function(){this.init()},activated:function(){window.tinymce&&this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{init:function(){var t=this;h(m,function(e){e?t.$message.error(e.message):t.initTinymce()})},initTinymce:function(){var t=this,e=this;window.tinymce.init({selector:"#".concat(this.tinymceId),language:this.languageTypeList["zh"],height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:f,menubar:this.menubar,plugins:u,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(n){e.value&&n.setContent(e.value),e.hasInit=!0,n.on("NodeChange Change KeyUp SetContent",function(){t.hasChange=!0,t.$emit("input",n.getContent())})},setup:function(t){t.on("FullscreenStateChanged",function(t){e.fullscreen=t.state})}})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach(function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'.concat(t.url,'" >'))})}}},g=y,b=(n("6dae"),n("2877")),v=Object(b["a"])(g,o,a,!1,null,"6d7c9046",null),w=v.exports,_={components:{Tinymce:w},data:function(){return{content:""}},methods:{}},E=_,S=Object(b["a"])(E,r,i,!1,null,null,null);e["default"]=S.exports},"584a":function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"5dbc":function(t,e,n){var r=n("d3f4"),i=n("8b97").set;t.exports=function(t,e,n){var o,a=e.constructor;return a!==n&&"function"==typeof a&&(o=a.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},"5eda":function(t,e,n){var r=n("5ca1"),i=n("8378"),o=n("79e5");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",a)}},"63b6":function(t,e,n){var r=n("e53d"),i=n("584a"),o=n("d864"),a=n("35e8"),c=n("07e3"),u="prototype",s=function(t,e,n){var f,l,d,p=t&s.F,h=t&s.G,m=t&s.S,y=t&s.P,g=t&s.B,b=t&s.W,v=h?i:i[e]||(i[e]={}),w=v[u],_=h?r:m?r[e]:(r[e]||{})[u];for(f in h&&(n=e),n)l=!p&&_&&void 0!==_[f],l&&c(v,f)||(d=l?_[f]:n[f],v[f]=h&&"function"!=typeof _[f]?n[f]:g&&l?o(d,r):b&&_[f]==d?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[u]=t[u],e}(d):y&&"function"==typeof d?o(Function.call,d):d,y&&((v.virtual||(v.virtual={}))[f]=d,t&s.R&&w&&!w[f]&&a(w,f,d)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},"67ab":function(t,e,n){var r=n("ca5a")("meta"),i=n("d3f4"),o=n("69a8"),a=n("86cc").f,c=0,u=Object.isExtensible||function(){return!0},s=!n("79e5")(function(){return u(Object.preventExtensions({}))}),f=function(t){a(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!u(t))return"F";if(!e)return"E";f(t)}return t[r].i},d=function(t,e){if(!o(t,r)){if(!u(t))return!0;if(!e)return!1;f(t)}return t[r].w},p=function(t){return s&&h.NEED&&u(t)&&!o(t,r)&&f(t),t},h=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:d,onFreeze:p}},"69b5":function(t,e,n){},"6b54":function(t,e,n){"use strict";n("3846");var r=n("cb7c"),i=n("0bfb"),o=n("9e1e"),a="toString",c=/./[a],u=function(t){n("2aba")(RegExp.prototype,a,t,!0)};n("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?u(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):c.name!=a&&u(function(){return c.call(this)})},"6dae":function(t,e,n){"use strict";var r=n("69b5"),i=n.n(r);i.a},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")(function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a})},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7bbc":function(t,e,n){var r=n("6821"),i=n("9093").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):i(r(t))}},"7e1a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vue-neditor-wrap",{attrs:{config:t.config,destroy:!1},on:{ready:t.ready},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)},i=[],o=n("85f2"),a=n.n(o);function c(t,e,n){return e in t?a()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=n("afcf"),s=n.n(u),f={components:{VueNeditorWrap:s.a},data:function(){return{config:c({serverUrl:"/api/web/upload/ueditor",UEDITOR_HOME_URL:"/NEditor/",autoHeightEnabled:!1,initialFrameHeight:240,initialFrameWidth:"100%",enableAutoSave:!1},"autoHeightEnabled",!0),content:""}},watch:{},mounted:function(){},methods:{ready:function(t){console.log("🔊: ready -> edotor",t)}}},l=f,d=n("2877"),p=Object(d["a"])(l,r,i,!1,null,null,null);e["default"]=p.exports},"7f7f":function(t,e,n){var r=n("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,a="name";a in i||n("9e1e")&&r(i,a,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"85f2":function(t,e,n){t.exports=n("454f")},"8a81":function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),o=n("9e1e"),a=n("5ca1"),c=n("2aba"),u=n("67ab").KEY,s=n("79e5"),f=n("5537"),l=n("7f20"),d=n("ca5a"),p=n("2b4c"),h=n("37c8"),m=n("3a72"),y=n("d4c0"),g=n("1169"),b=n("cb7c"),v=n("d3f4"),w=n("4bf8"),_=n("6821"),E=n("6a99"),S=n("4630"),O=n("2aeb"),C=n("7bbc"),x=n("11e9"),T=n("2621"),I=n("86cc"),N=n("0d58"),j=x.f,k=I.f,L=C.f,P=r.Symbol,F=r.JSON,R=F&&F.stringify,U="prototype",M=p("_hidden"),D=p("toPrimitive"),A={}.propertyIsEnumerable,G=f("symbol-registry"),V=f("symbols"),H=f("op-symbols"),B=Object[U],$="function"==typeof P&&!!T.f,W=r.QObject,q=!W||!W[U]||!W[U].findChild,z=o&&s(function(){return 7!=O(k({},"a",{get:function(){return k(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=j(B,e);r&&delete B[e],k(t,e,n),r&&t!==B&&k(B,e,r)}:k,J=function(t){var e=V[t]=O(P[U]);return e._k=t,e},K=$&&"symbol"==typeof P.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof P},Y=function(t,e,n){return t===B&&Y(H,e,n),b(t),e=E(e,!0),b(n),i(V,e)?(n.enumerable?(i(t,M)&&t[M][e]&&(t[M][e]=!1),n=O(n,{enumerable:S(0,!1)})):(i(t,M)||k(t,M,S(1,{})),t[M][e]=!0),z(t,e,n)):k(t,e,n)},X=function(t,e){b(t);var n,r=y(e=_(e)),i=0,o=r.length;while(o>i)Y(t,n=r[i++],e[n]);return t},Q=function(t,e){return void 0===e?O(t):X(O(t),e)},Z=function(t){var e=A.call(this,t=E(t,!0));return!(this===B&&i(V,t)&&!i(H,t))&&(!(e||!i(this,t)||!i(V,t)||i(this,M)&&this[M][t])||e)},tt=function(t,e){if(t=_(t),e=E(e,!0),t!==B||!i(V,e)||i(H,e)){var n=j(t,e);return!n||!i(V,e)||i(t,M)&&t[M][e]||(n.enumerable=!0),n}},et=function(t){var e,n=L(_(t)),r=[],o=0;while(n.length>o)i(V,e=n[o++])||e==M||e==u||r.push(e);return r},nt=function(t){var e,n=t===B,r=L(n?H:_(t)),o=[],a=0;while(r.length>a)!i(V,e=r[a++])||n&&!i(B,e)||o.push(V[e]);return o};$||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var t=d(arguments.length>0?arguments[0]:void 0),e=function(n){this===B&&e.call(H,n),i(this,M)&&i(this[M],t)&&(this[M][t]=!1),z(this,t,S(1,n))};return o&&q&&z(B,t,{configurable:!0,set:e}),J(t)},c(P[U],"toString",function(){return this._k}),x.f=tt,I.f=Y,n("9093").f=C.f=et,n("52a7").f=Z,T.f=nt,o&&!n("2d00")&&c(B,"propertyIsEnumerable",Z,!0),h.f=function(t){return J(p(t))}),a(a.G+a.W+a.F*!$,{Symbol:P});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),it=0;rt.length>it;)p(rt[it++]);for(var ot=N(p.store),at=0;ot.length>at;)m(ot[at++]);a(a.S+a.F*!$,"Symbol",{for:function(t){return i(G,t+="")?G[t]:G[t]=P(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var e in G)if(G[e]===t)return e},useSetter:function(){q=!0},useSimple:function(){q=!1}}),a(a.S+a.F*!$,"Object",{create:Q,defineProperty:Y,defineProperties:X,getOwnPropertyDescriptor:tt,getOwnPropertyNames:et,getOwnPropertySymbols:nt});var ct=s(function(){T.f(1)});a(a.S+a.F*ct,"Object",{getOwnPropertySymbols:function(t){return T.f(w(t))}}),F&&a(a.S+a.F*(!$||s(function(){var t=P();return"[null]"!=R([t])||"{}"!=R({a:t})||"{}"!=R(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e=r[1],(v(e)||void 0!==t)&&!K(t))return g(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!K(e))return e}),r[1]=e,R.apply(F,r)}}),P[U][D]||n("32e9")(P[U],D,P[U].valueOf),l(P,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},"8b97":function(t,e,n){var r=n("d3f4"),i=n("cb7c"),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},"8e60":function(t,e,n){t.exports=!n("294c")(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},aa77:function(t,e,n){var r=n("5ca1"),i=n("be13"),o=n("79e5"),a=n("fdef"),c="["+a+"]",u="​",s=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),l=function(t,e,n){var i={},c=o(function(){return!!a[t]()||u[t]()!=u}),s=i[t]=c?e(d):a[t];n&&(i[n]=s),r(r.P+r.F*c,"String",i)},d=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(s,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},ac4d:function(t,e,n){n("3a72")("asyncIterator")},ac6a:function(t,e,n){for(var r=n("cadf"),i=n("0d58"),o=n("2aba"),a=n("7726"),c=n("32e9"),u=n("84f2"),s=n("2b4c"),f=s("iterator"),l=s("toStringTag"),d=u.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(p),m=0;m<h.length;m++){var y,g=h[m],b=p[g],v=a[g],w=v&&v.prototype;if(w&&(w[f]||c(w,f,d),w[l]||c(w,l,g),u[g]=d,b))for(y in r)w[y]||o(w,y,r[y],!0)}},ad93:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("script",{attrs:{id:t.id,name:t.name,type:"text/plain"}})},i=[];n("456d"),n("7f7f"),n("6b54"),n("ac6a");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=n("85f2"),c=n.n(a);function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),c()(t,r.key,r)}}function s(t,e,n){return e&&u(t.prototype,e),n&&u(t,n),t}var f=function(){function t(){o(this,t),this.listeners={}}return s(t,[{key:"on",value:function(t,e){void 0===this.listeners[t]&&(this.listeners[t]=[]),this.listeners[t].push(e)}},{key:"emit",value:function(t){this.listeners[t]&&this.listeners[t].forEach(function(t){return t()})}}]),t}(),l={name:"VueNeditorWrap",data:function(){return{id:"editor"+Math.random().toString().slice(-10),editor:null,isReady:!1,readyValue:"",defaultConfig:{UEDITOR_HOME_URL:"./public/NEditor/",enableAutoSave:!1}}},props:{value:{type:String,default:"Vue + NEditor + v-model双向绑定"},config:{type:Object,default:function(){return{}}},init:{type:Function,default:function(){return function(){}}},destroy:Boolean,name:String},computed:{mixedConfig:function(){return Object.assign({},this.defaultConfig,this.config)}},methods:{registerButton:function(t){var e=t.name,n=t.icon,r=t.tip,i=t.handler,o=t.UE,a=void 0===o?window.UE:o;a.registerUI(e,function(t,e){t.registerCommand(e,{execCommand:function(){i(t,e)}});var o=new a.ui.Button({name:e,title:r,cssRules:"background-image: url(".concat(n,") !important;background-size: cover;"),onclick:function(){t.execCommand(e)}});return t.addListener("selectionchange",function(){var n=t.queryCommandState(e);-1===n?(o.setDisabled(!0),o.setChecked(!1)):(o.setDisabled(!1),o.setChecked(n))}),o})},_beforeInitEditor:function(t){var e=this;window.UE&&window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length&&window.UE.getEditor?this._initEditor(t):this._loadScripts().then(function(){return e._initEditor(t)})},_initEditor:function(t){var e=this;this.$nextTick(function(){e.init(),e.editor=window.UE.getEditor(e.id,e.mixedConfig),e.readyValue=t,e.editor.addListener("ready",function(){e.isReady=!0,e.$emit("ready",e.editor),e.editor.setContent(e.readyValue),e.editor.addListener("contentChange",function(){e.$emit("input",e.editor.getContent())})})})},_loadScripts:function(){var t=this;return window.loadEnv?new Promise(function(t,e){window.loadEnv.on("scriptsLoaded",function(){t()})}):(window.loadEnv=new f,new Promise(function(e,n){var r=t;r._loadParse().then(function(){return r._loadConfig()}).then(function(){return r._loadCore()}).then(function(){return r._loadService()}).then(function(){window.loadEnv.emit("scriptsLoaded"),e()}).catch(function(t){console.error(t)})}))},_loadConfig:function(){var t=this;return new Promise(function(e,n){if(window.UE&&window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length)e();else{var r=document.createElement("script");r.type="text/javascript",r.src=t.mixedConfig.UEDITOR_HOME_URL+"neditor.config.js",document.getElementsByTagName("head")[0].appendChild(r),r.onload=function(){window.UE&&window.UEDITOR_CONFIG&&0!==Object.keys(window.UEDITOR_CONFIG).length?e():console&&console.error("加载ueditor.config.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!")}}})},_loadService:function(){var t=this;return new Promise(function(e,n){var r=document.createElement("script");r.type="text/javascript",r.src=t.mixedConfig.UEDITOR_HOME_URL+"neditor.service.js",document.getElementsByTagName("head")[0].appendChild(r),r.onload=function(){e()}})},_loadParse:function(){var t=this;return new Promise(function(e,n){var r=document.createElement("script");r.type="text/javascript",r.src=t.mixedConfig.UEDITOR_HOME_URL+"neditor.parse.min.js",document.getElementsByTagName("head")[0].appendChild(r),r.onload=function(){e()}})},_loadCore:function(){var t=this;return new Promise(function(e,n){if(window.UE&&window.UE.getEditor)e();else{var r=document.createElement("script");r.type="text/javascript",r.src=t.mixedConfig.UEDITOR_HOME_URL+"neditor.all.js",document.getElementsByTagName("head")[0].appendChild(r),r.onload=function(){e()}}})},_setContent:function(t){this.isReady?t===this.editor.getContent()||this.editor.setContent(t):this.readyValue=t}},beforeDestroy:function(){this.destroy&&this.editor&&this.editor.destroy&&this.editor.destroy()},watch:{value:{handler:function(t){this.editor?this._setContent(t):this._beforeInitEditor(t)},immediate:!0}}},d=l,p=n("2877"),h=Object(p["a"])(d,r,i,!1,null,null,null);e["default"]=h.exports},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},afcf:function(t,e,n){t.exports=n("ad93")},c5f6:function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),o=n("2d95"),a=n("5dbc"),c=n("6a99"),u=n("79e5"),s=n("9093").f,f=n("11e9").f,l=n("86cc").f,d=n("aa77").trim,p="Number",h=r[p],m=h,y=h.prototype,g=o(n("2aeb")(y))==p,b="trim"in String.prototype,v=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():d(e,3);var n,r,i,o=e.charCodeAt(0);if(43===o||45===o){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var a,u=e.slice(2),s=0,f=u.length;s<f;s++)if(a=u.charCodeAt(s),a<48||a>i)return NaN;return parseInt(u,r)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(g?u(function(){y.valueOf.call(n)}):o(n)!=p)?a(new m(v(e)),n,h):v(e)};for(var w,_=n("9e1e")?s(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;_.length>E;E++)i(m,w=_[E])&&!i(h,w)&&l(h,w,f(m,w));h.prototype=y,y.constructor=h,n("2aba")(r,p,h)}},d4c0:function(t,e,n){var r=n("0d58"),i=n("2621"),o=n("52a7");t.exports=function(t){var e=r(t),n=i.f;if(n){var a,c=n(t),u=o.f,s=0;while(c.length>s)u.call(t,a=c[s++])&&e.push(a)}return e}},d864:function(t,e,n){var r=n("79aa");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var r=n("e4ae"),i=n("794b"),o=n("1bc3"),a=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return a(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},e4ae:function(t,e,n){var r=n("f772");t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=ueditor.e4c8cce2.js.map