(self.webpackChunk=self.webpackChunk||[]).push([[671],{931:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var o=r(3645),n=r.n(o)()((function(e){return e[1]}));n.push([e.id,".sactive[data-v-14b9aedb]{color:rgba(0,0,0,var(--tw-text-opacity));background-color:#fff}",""]);const a=n},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,o){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(n[s]=!0)}for(var l=0;l<e.length;l++){var i=[].concat(e[l]);o&&n[i[0]]||(r&&(i[2]?i[2]="".concat(r," and ").concat(i[2]):i[2]=r),t.push(i))}},t}},9178:function(e){e.exports=function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=9)}([function(e,t,r){"use strict";t.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2}},function(e,t,r){"use strict";var o=r(2),n=r(5),a=r(0);t.a=function(e,t){if(t.value){var s=r.i(n.a)(a.a,t.value);if("INPUT"!==e.tagName.toLocaleUpperCase()){var l=e.getElementsByTagName("input");1!==l.length||(e=l[0])}e.oninput=function(){var t=e.value.length-e.selectionEnd;e.value=r.i(o.a)(e.value,s),t=Math.max(t,s.suffix.length),t=e.value.length-t,t=Math.max(t,s.prefix.length+1),r.i(o.b)(e,t),e.dispatchEvent(r.i(o.c)("change"))},e.onfocus=function(){r.i(o.b)(e,e.value.length-s.suffix.length)},e.oninput(),e.dispatchEvent(r.i(o.c)("input"))}}},function(e,t,r){"use strict";function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v.a;"number"==typeof e&&(e=e.toFixed(s(t.precision)));var r=e.indexOf("-")>=0?"-":"",o=d(i(a(e),t.precision)).split("."),n=o[0],l=o[1];return n=c(n,t.thousands),t.prefix+r+u(n,l,t.decimal)+t.suffix}function n(e,t){var r=e.indexOf("-")>=0?-1:1,o=i(a(e),t);return parseFloat(o)*r}function a(e){return d(e).replace(/\D+/g,"")||"0"}function s(e){return l(0,e,20)}function l(e,t,r){return Math.max(e,Math.min(t,r))}function i(e,t){var r=Math.pow(10,t);return(parseFloat(e)/r).toFixed(s(t))}function c(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+t)}function u(e,t,r){return t?e+r+t:e}function d(e){return e?e.toString():""}function f(e,t){var r=function(){e.setSelectionRange(t,t)};e===document.activeElement&&(r(),setTimeout(r,1))}function p(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var v=r(0);r.d(t,"a",(function(){return o})),r.d(t,"d",(function(){return n})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return p}))},function(e,t,r){"use strict";function o(e,t){t&&Object.keys(t).map((function(e){l.a[e]=t[e]})),e.directive("money",s.a),e.component("money",a.a)}Object.defineProperty(t,"__esModule",{value:!0});var n=r(6),a=r.n(n),s=r(1),l=r(0);r.d(t,"Money",(function(){return a.a})),r.d(t,"VMoney",(function(){return s.a})),r.d(t,"options",(function(){return l.a})),r.d(t,"VERSION",(function(){return i}));var i="0.8.1";t.default=o,"undefined"!=typeof window&&window.Vue&&window.Vue.use(o)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(0),a=r(2);t.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return n.a.precision}},decimal:{type:String,default:function(){return n.a.decimal}},thousands:{type:String,default:function(){return n.a.thousands}},prefix:{type:String,default:function(){return n.a.prefix}},suffix:{type:String,default:function(){return n.a.suffix}}},directives:{money:o.a},data:function(){return{formattedValue:""}},watch:{value:{immediate:!0,handler:function(e,t){var o=r.i(a.a)(e,this.$props);o!==this.formattedValue&&(this.formattedValue=o)}}},methods:{change:function(e){this.$emit("input",this.masked?e.target.value:r.i(a.d)(e.target.value,this.precision))}}}},function(e,t,r){"use strict";t.a=function(e,t){return e=e||{},t=t||{},Object.keys(e).concat(Object.keys(t)).reduce((function(r,o){return r[o]=void 0===t[o]?e[o]:t[o],r}),{})}},function(e,t,r){var o=r(7)(r(4),r(8),null,null);e.exports=o.exports},function(e,t){e.exports=function(e,t,r,o){var n,a=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(n=e,a=e.default);var l="function"==typeof a?a.options:a;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns),r&&(l._scopeId=r),o){var i=l.computed||(l.computed={});Object.keys(o).forEach((function(e){var t=o[e];i[e]=function(){return t}}))}return{esModule:n,exports:a,options:l}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix},expression:"{precision, decimal, thousands, prefix, suffix}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:e.formattedValue},on:{change:e.change}})},staticRenderFns:[]}},function(e,t,r){e.exports=r(3)}])},4579:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var o=r(5166),n={class:"flex w-full h-screen"},a={class:"mb-2 text-3xl font-bold text-yellow-500"},s={class:"w-full px-4 text-center md:px-0 md:w-1/2"},l={class:"max-w-md mx-auto"};const i={props:{errors:Object,title:String,formHandler:Function},render:function(e,t,r,i,c,u){return(0,o.openBlock)(),(0,o.createBlock)("div",n,[(0,o.createVNode)("form",{onSubmit:t[1]||(t[1]=(0,o.withModifiers)((function(){return r.formHandler&&r.formHandler.apply(r,arguments)}),["prevent"])),class:"flex flex-col items-center justify-center w-full bg-white"},[(0,o.createVNode)("h1",a,(0,o.toDisplayString)(r.title),1),(0,o.createVNode)("div",s,[(0,o.createVNode)("div",l,[(0,o.renderSlot)(e.$slots,"default")])])],32)])}},c=i},8887:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});var o=r(5166),n={class:"flex"},a={class:"w-full h-screen overflow-y-scroll"};var s=r(5348),l=(0,o.withScopeId)("data-v-14b9aedb");(0,o.pushScopeId)("data-v-14b9aedb");var i={class:"flex flex-col w-64 h-screen px-0 bg-yellow-500 border border-yellow-500 tex-gray-900"},c={class:"flex flex-wrap mt-8"},u={class:"text-center",style:{width:"100%"}},d={class:"block mb-3 font-semibold text-white"},f=(0,o.createVNode)("img",{src:"https://picsum.photos/200",class:"w-40 h-40 mx-auto rounded-full"},null,-1),p={class:"mt-3 mb-4"},v={class:"ml-0"},h=(0,o.createVNode)("span",null,[(0,o.createVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",viewBox:"0 0 20 20",fill:"currentColor"},[(0,o.createVNode)("path",{"fill-rule":"evenodd",d:"M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z","clip-rule":"evenodd"})])],-1),m=(0,o.createVNode)("span",{class:"ml-2"},"Users",-1),x=(0,o.createVNode)("span",null,[(0,o.createVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-6 h-6",viewBox:"0 0 20 20",fill:"currentColor"},[(0,o.createVNode)("path",{d:"M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"})])],-1),b=(0,o.createVNode)("span",{class:"ml-2"},"Products",-1),g=(0,o.createVNode)("span",null,[(0,o.createVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor"},[(0,o.createVNode)("path",{d:"M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"})])],-1),w=(0,o.createVNode)("span",{class:"ml-2"},"Customers",-1),y=(0,o.createVNode)("span",null,[(0,o.createVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor"},[(0,o.createVNode)("path",{d:"M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"}),(0,o.createVNode)("path",{"fill-rule":"evenodd",d:"M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z","clip-rule":"evenodd"})])],-1),N=(0,o.createVNode)("span",{class:"ml-2"},"Sale Orders",-1),V=(0,o.createVNode)("span",null,[(0,o.createVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor"},[(0,o.createVNode)("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z","clip-rule":"evenodd"})])],-1),M=(0,o.createVNode)("span",{class:"ml-2"},"Sair",-1);(0,o.popScopeId)();var k=l((function(e,t,r,n,a,s){var k=(0,o.resolveComponent)("inertia-link");return(0,o.openBlock)(),(0,o.createBlock)("div",null,[(0,o.createVNode)("nav",i,[(0,o.createVNode)("div",c,[(0,o.createVNode)("div",u,[(0,o.createVNode)("span",d,(0,o.toDisplayString)(r.user.name),1),f])]),(0,o.createVNode)("div",p,[(0,o.createVNode)("ul",v,[(0,o.createVNode)("li",null,[(0,o.createVNode)(k,{class:[{active:s.isRoute("users.index")},"flex flex-row px-4 py-4 mb-2 text-gray-100 border-gray-300 rounded-lg hover:text-black hover:bg-white hover:font-bold hover:cursor-pointer"],href:e.route("users.index")},{default:l((function(){return[h,m]})),_:1},8,["class","href"])]),(0,o.createVNode)("li",null,[(0,o.createVNode)(k,{class:[{active:s.isRoute("products.")},"flex flex-row px-4 py-4 mb-2 text-gray-100 border-gray-300 rounded-lg hover:text-black hover:bg-white hover:font-bold hover:cursor-pointer"],href:e.route("products.index")},{default:l((function(){return[x,b]})),_:1},8,["class","href"])]),(0,o.createVNode)("li",null,[(0,o.createVNode)(k,{class:[{active:s.isRoute("customers.")},"flex flex-row px-4 py-4 mb-2 text-gray-100 border-gray-300 rounded-lg hover:text-black hover:bg-white hover:font-bold hover:cursor-pointer"],href:e.route("customers.index")},{default:l((function(){return[g,w]})),_:1},8,["class","href"]),(0,o.createVNode)(k,{class:[{active:s.isRoute("sale-orders.")},"flex flex-row px-4 py-4 mb-2 text-gray-100 border-gray-300 rounded-lg hover:text-black hover:bg-white hover:font-bold hover:cursor-pointer"],href:e.route("sale-orders.index")},{default:l((function(){return[y,N]})),_:1},8,["class","href"]),(0,o.createVNode)(k,{class:[{active:s.isRoute("auth.login.logout")},"absolute bottom-0 flex flex-row px-4 py-4 mb-2 text-gray-100 border-gray-300 rounded-lg hover:text-black hover:bg-white hover:font-bold hover:cursor-pointer"],href:e.route("auth.login.logout")},{default:l((function(){return[V,M]})),_:1},8,["class","href"])])])])])])}));const S={props:{user:{default:{name:"user",id:1},type:Object}},methods:{isRoute:function(e){return!!route().current().includes(e)}}};r(5284);S.render=k,S.__scopeId="data-v-14b9aedb";const C=S,B={components:{FloatingError:s.Z,MainSideBar:C},props:{errors:Object,user:Object},methods:{isRoute:function(e){return!!route().current().includes(e)}},render:function(e,t,r,s,l,i){var c=(0,o.resolveComponent)("main-side-bar"),u=(0,o.resolveComponent)("floating-error");return(0,o.openBlock)(),(0,o.createBlock)("div",n,[(0,o.createVNode)(c,{user:r.user},null,8,["user"]),(0,o.createVNode)("div",a,[(0,o.renderSlot)(e.$slots,"default")]),(0,o.createVNode)(u,{errors:r.errors},null,8,["errors"])])}},_=B},5348:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var o=r(5166),n={class:"absolute rounded-md top-3 right-3"},a={class:"flex items-center px-4 py-3 text-sm font-bold text-white bg-red-600",role:"alert"},s=(0,o.createVNode)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor"},[(0,o.createVNode)("path",{"fill-rule":"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1);const l={props:{errors:Object},render:function(e,t,r,l,i,c){return(0,o.openBlock)(),(0,o.createBlock)("div",n,[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(r.errors,(function(e){return(0,o.openBlock)(),(0,o.createBlock)("div",{key:e,class:"mt-2"},[(0,o.createVNode)("div",a,[s,(0,o.createVNode)("p",null,(0,o.toDisplayString)(e),1)])])})),128))])}},i=l},5671:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var o=r(5166),n=(0,o.createVNode)("label",{class:""}," Name ",-1),a=(0,o.createVNode)("label",{class:""}," Cost Price ",-1),s=(0,o.createVNode)("label",{class:""}," Sell Price ",-1),l=(0,o.createVNode)("label",{class:""}," Description ",-1),i=(0,o.createVNode)("button",{class:"px-3 py-1 text-lg font-bold text-white bg-yellow-600 rounded shadow hover:bg-yellow-600 focus:outline-none"}," Save ",-1);var c=r(4579),u=r(8887),d=r(9178);const f={layout:u.Z,directives:{money:d.VMoney},components:{MasterLayout:u.Z,BasicForm:c.Z},props:{errors:Object},data:function(){return{data:{name:"",sell_price:"",cost_price:"",description:""},money:{decimal:",",thousands:".",prefix:"R$ ",suffix:"",precision:2}}},methods:{handleForm:function(){this.$inertia.post(route("products.store"),this.data)}},render:function(e,t,r,c,u,d){var f=(0,o.resolveComponent)("basic-form"),p=(0,o.resolveDirective)("money");return(0,o.openBlock)(),(0,o.createBlock)(f,{errors:r.errors,formHandler:d.handleForm,title:"ADD NEW PRODUCT"},{default:(0,o.withCtx)((function(){return[n,(0,o.withDirectives)((0,o.createVNode)("input",{type:"text",placeholder:"Name",autocomplete:"off",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return u.data.name=e}),class:[{"border border-red-600":r.errors.name},"w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"]},null,2),[[o.vModelText,u.data.name]]),a,(0,o.withDirectives)((0,o.createVNode)("input",{type:"text",placeholder:"Cost Price",autocomplete:"off",required:"","onUpdate:modelValue":t[2]||(t[2]=function(e){return u.data.cost_price=e}),class:[{"border border-red-600":r.errors.cost_price},"w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"]},null,2),[[p,u.money],[o.vModelText,u.data.cost_price]]),s,(0,o.withDirectives)((0,o.createVNode)("input",{type:"text",placeholder:"Sell Price",autocomplete:"off",required:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return u.data.sell_price=e}),class:[{"border border-red-600":r.errors.sell_price},"w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"]},null,2),[[p,u.money],[o.vModelText,u.data.sell_price]]),l,(0,o.withDirectives)((0,o.createVNode)("input",{type:"text",placeholder:"Description",autocomplete:"off",required:"","onUpdate:modelValue":t[4]||(t[4]=function(e){return u.data.description=e}),class:[{"border border-red-600":r.errors.description},"w-full h-10 px-3 py-2 mb-3 border rounded shadow-md focus:outline-none focus:border-yellow-500"]},null,2),[[o.vModelText,u.data.description]]),i]})),_:1},8,["errors","formHandler"])}},p=f},5284:(e,t,r)=>{var o=r(931);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[e.id,o,""]]),o.locals&&(e.exports=o.locals);(0,r(5346).Z)("3f2f39e2",o,!0,{})},5346:(e,t,r)=>{"use strict";function o(e,t){for(var r=[],o={},n=0;n<t.length;n++){var a=t[n],s=a[0],l={id:e+":"+n,css:a[1],media:a[2],sourceMap:a[3]};o[s]?o[s].parts.push(l):r.push(o[s]={id:s,parts:[l]})}return r}r.d(t,{Z:()=>v});var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},s=n&&(document.head||document.getElementsByTagName("head")[0]),l=null,i=0,c=!1,u=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,r,n){c=r,d=n||{};var s=o(e,t);return h(s),function(t){for(var r=[],n=0;n<s.length;n++){var l=s[n];(i=a[l.id]).refs--,r.push(i)}t?h(s=o(e,t)):s=[];for(n=0;n<r.length;n++){var i;if(0===(i=r[n]).refs){for(var c=0;c<i.parts.length;c++)i.parts[c]();delete a[i.id]}}}}function h(e){for(var t=0;t<e.length;t++){var r=e[t],o=a[r.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](r.parts[n]);for(;n<r.parts.length;n++)o.parts.push(x(r.parts[n]));o.parts.length>r.parts.length&&(o.parts.length=r.parts.length)}else{var s=[];for(n=0;n<r.parts.length;n++)s.push(x(r.parts[n]));a[r.id]={id:r.id,refs:1,parts:s}}}}function m(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function x(e){var t,r,o=document.querySelector("style["+f+'~="'+e.id+'"]');if(o){if(c)return u;o.parentNode.removeChild(o)}if(p){var n=i++;o=l||(l=m()),t=w.bind(null,o,n,!1),r=w.bind(null,o,n,!0)}else o=m(),t=y.bind(null,o),r=function(){o.parentNode.removeChild(o)};return t(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;t(e=o)}else r()}}var b,g=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function w(e,t,r,o){var n=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(t,n);else{var a=document.createTextNode(n),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function y(e,t){var r=t.css,o=t.media,n=t.sourceMap;if(o&&e.setAttribute("media",o),d.ssrId&&e.setAttribute(f,t.id),n&&(r+="\n/*# sourceURL="+n.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}}}]);