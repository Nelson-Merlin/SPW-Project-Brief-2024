!function(){var e={8552:function(e,t,n){var r=n(852)(n(5639),"DataView");e.exports=r},7071:function(e,t,n){var r=n(852)(n(5639),"Map");e.exports=r},3818:function(e,t,n){var r=n(852)(n(5639),"Promise");e.exports=r},8525:function(e,t,n){var r=n(852)(n(5639),"Set");e.exports=r},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},577:function(e,t,n){var r=n(852)(n(5639),"WeakMap");e.exports=r},4239:function(e,t,n){var r=n(2705),o=n(9607),a=n(2333),c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?o(e):a(e)}},9454:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return o(e)&&"[object Arguments]"==r(e)}},8458:function(e,t,n){var r=n(3560),o=n(5346),a=n(3218),c=n(346),l=/^\[object .+?Constructor\]$/,u=Function.prototype,i=Object.prototype,s=u.toString,f=i.hasOwnProperty,p=RegExp("^"+s.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(r(e)?p:l).test(c(e))}},8749:function(e,t,n){var r=n(4239),o=n(1780),a=n(7005),c={};c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c["[object Arguments]"]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c["[object Function]"]=c["[object Map]"]=c["[object Number]"]=c["[object Object]"]=c["[object RegExp]"]=c["[object Set]"]=c["[object String]"]=c["[object WeakMap]"]=!1,e.exports=function(e){return a(e)&&o(e.length)&&!!c[r(e)]}},280:function(e,t,n){var r=n(5726),o=n(6916),a=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return o(e);var t=[];for(var n in Object(e))a.call(e,n)&&"constructor"!=n&&t.push(n);return t}},7518:function(e){e.exports=function(e){return function(t){return e(t)}}},4429:function(e,t,n){var r=n(5639)["__core-js_shared__"];e.exports=r},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},852:function(e,t,n){var r=n(8458),o=n(7801);e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},9607:function(e,t,n){var r=n(2705),o=Object.prototype,a=o.hasOwnProperty,c=o.toString,l=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,l),n=e[l];try{e[l]=void 0;var r=!0}catch(e){}var o=c.call(e);return r&&(t?e[l]=n:delete e[l]),o}},4160:function(e,t,n){var r=n(8552),o=n(7071),a=n(3818),c=n(8525),l=n(577),u=n(4239),i=n(346),s="[object Map]",f="[object Promise]",p="[object Set]",m="[object WeakMap]",b="[object DataView]",d=i(r),y=i(o),v=i(a),h=i(c),w=i(l),j=u;(r&&j(new r(new ArrayBuffer(1)))!=b||o&&j(new o)!=s||a&&j(a.resolve())!=f||c&&j(new c)!=p||l&&j(new l)!=m)&&(j=function(e){var t=u(e),n="[object Object]"==t?e.constructor:void 0,r=n?i(n):"";if(r)switch(r){case d:return b;case y:return s;case v:return f;case h:return p;case w:return m}return t}),e.exports=j},7801:function(e){e.exports=function(e,t){return null==e?void 0:e[t]}},5346:function(e,t,n){var r,o=n(4429),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!a&&a in e}},5726:function(e){var t=Object.prototype;e.exports=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||t)}},6916:function(e,t,n){var r=n(5569)(Object.keys,Object);e.exports=r},1167:function(e,t,n){e=n.nmd(e);var r=n(1957),o=t&&!t.nodeType&&t,a=o&&e&&!e.nodeType&&e,c=a&&a.exports===o&&r.process,l=function(){try{return a&&a.require&&a.require("util").types||c&&c.binding&&c.binding("util")}catch(e){}}();e.exports=l},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5569:function(e){e.exports=function(e,t){return function(n){return e(t(n))}}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},346:function(e){var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},5694:function(e,t,n){var r=n(9454),o=n(7005),a=Object.prototype,c=a.hasOwnProperty,l=a.propertyIsEnumerable,u=r(function(){return arguments}())?r:function(e){return o(e)&&c.call(e,"callee")&&!l.call(e,"callee")};e.exports=u},1469:function(e){var t=Array.isArray;e.exports=t},8612:function(e,t,n){var r=n(3560),o=n(1780);e.exports=function(e){return null!=e&&o(e.length)&&!r(e)}},4144:function(e,t,n){e=n.nmd(e);var r=n(5639),o=n(5062),a=t&&!t.nodeType&&t,c=a&&e&&!e.nodeType&&e,l=c&&c.exports===a?r.Buffer:void 0,u=(l?l.isBuffer:void 0)||o;e.exports=u},1609:function(e,t,n){var r=n(280),o=n(4160),a=n(5694),c=n(1469),l=n(8612),u=n(4144),i=n(5726),s=n(6719),f=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(l(e)&&(c(e)||"string"==typeof e||"function"==typeof e.splice||u(e)||s(e)||a(e)))return!e.length;var t=o(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(i(e))return!r(e).length;for(var n in e)if(f.call(e,n))return!1;return!0}},3560:function(e,t,n){var r=n(4239),o=n(3218);e.exports=function(e){if(!o(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},1780:function(e){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},6719:function(e,t,n){var r=n(8749),o=n(7518),a=n(1167),c=a&&a.isTypedArray,l=c?o(c):r;e.exports=l},5062:function(e){e.exports=function(){return!1}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r](a,a.exports,n),a.loaded=!0,a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},function(){"use strict";var e=window.wp.element,t=window.wp.blocks,r=JSON.parse('{"u2":"wpzoom-forms/multi-checkbox-field"}');function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function c(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,_x,a,c=[],_n=!0,l=!1;try{if(_x=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;_n=!1}else for(;!(_n=(r=_x.call(n)).done)&&(c.push(r.value),c.length!==t);_n=!0);}catch(e){l=!0,o=e}finally{try{if(!_n&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=n(1609),i=n.n(u),s=window.wp.blockEditor,f=window.wp.i18n,p=window.wp.components,m=r.u2;(0,t.registerBlockType)(m,{icon:(0,e.createElement)("svg",{viewBox:"0 0 128 128",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("title",null),(0,e.createElement)("path",{d:"M54,56H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H54a2,2,0,0,1,2,2V54A2,2,0,0,1,54,56ZM4,52H52V4H4Z"}),(0,e.createElement)("path",{d:"M25.5,41a2,2,0,0,1-1.41-.58L8.59,24.9a2,2,0,0,1,2.82-2.82L25.5,36.17,44.59,17.08a2,2,0,1,1,2.82,2.83L26.92,40.41A2,2,0,0,1,25.5,41Z"}),(0,e.createElement)("path",{d:"M126,24H68a2,2,0,0,1,0-4h58a2,2,0,0,1,0,4Z"}),(0,e.createElement)("path",{d:"M54,128H2a2,2,0,0,1-2-2V74a2,2,0,0,1,2-2H54a2,2,0,0,1,2,2v52A2,2,0,0,1,54,128ZM4,124H52V76H4Z"}),(0,e.createElement)("path",{d:"M107,36H68a2,2,0,0,1,0-4h39a2,2,0,0,1,0,4Z"}),(0,e.createElement)("path",{d:"M126,96H68a2,2,0,0,1,0-4h58a2,2,0,0,1,0,4Z"}),(0,e.createElement)("path",{d:"M116,108H68a2,2,0,0,1,0-4h48a2,2,0,0,1,0,4Z"})),edit:function(t){var n=(0,s.useBlockProps)({className:"unstyled-list"}),r=t.attributes,o=t.setAttributes,a=t.clientId,u=r.id,m=r.name,b=r.options,d=r.defaultValue,y=r.label,v=r.showLabel,h=r.required,w=l((0,e.useState)(!1),2),j=w[0],x=w[1],g=l((0,e.useState)(""),2),E=g[0],_=g[1];return(0,e.useEffect)((function(){u||o({id:"input_"+a.substr(0,8)})}),[]),(0,e.useEffect)((function(){if(b){var e="";b.forEach((function(t){e+=t+"\n"})),_(e)}}),[b]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(s.InspectorControls,null,(0,e.createElement)(p.PanelBody,{title:(0,f.__)("Options","wpzoom-forms")},(0,e.createElement)(p.TextControl,{label:(0,f.__)("Name","wpzoom-forms"),value:m,placeholder:(0,f.__)("e.g. My Checkbox Field","wpzoom-forms"),onChange:function(e){return o({name:e})}}),(0,e.createElement)(p.Card,{size:"small"},(0,e.createElement)(p.CardHeader,null,(0,f.__)("Items","wpzoom-forms"),(0,e.createElement)(p.Button,{icon:"insert",label:(0,f.__)("Add Item","wpzoom-forms"),onClick:function(){var e=c(b);e.push((0,f.sprintf)((0,f.__)("Item #%s","wpzoom-forms"),b.length+1)),o({options:e})}.bind(void 0)})),(0,e.createElement)(p.CardBody,null,b.map((function(t,n){return(0,e.createElement)(e.Fragment,{key:n},(0,e.createElement)(p.Flex,null,(0,e.createElement)(p.FlexBlock,null,(0,e.createElement)(p.TextControl,{value:b[n],onChange:function(e){return function(e,t){var n=c(b);n[t]=e,o({options:n})}(e,n)}})),b.length>1&&(0,e.createElement)(p.FlexItem,null,(0,e.createElement)(p.Button,{icon:"no-alt",label:(0,f.__)("Delete Item","wpzoom-forms"),onClick:function(){return function(e){var t=c(b);t.splice(e,1),o({options:t})}(n)}}))))})))),(0,e.createElement)(p.Button,{icon:"admin-settings",label:(0,f.__)("Add Bulk Options","wpzoom-forms"),onClick:function(){return x(!0)}},(0,f.__)("Add Bulk Options","wpzoom-forms")),j&&(0,e.createElement)(p.Modal,{title:(0,f.__)("Add Bulk Options","wpzoom-forms"),onRequestClose:function(){return x(!1)},shouldCloseOnClickOutside:!0},(0,e.createElement)("div",{className:"wpzoom-forms-extra-options",style:{maxWidth:"720px",maxHeight:"525px"}},(0,e.createElement)("div",{className:"form-group"},(0,e.createElement)("div",{className:"wrap-content"},(0,e.createElement)(p.TextareaControl,{label:(0,f.__)("Bulk Options","wpzoom-forms"),help:(0,f.__)("Each line break is a new option.","wpzoom-forms"),className:"bulk-add-enter-options",rows:"5",value:E,onChange:function(e){return _(e)}}))),(0,e.createElement)("div",{className:"form-group"},(0,e.createElement)(p.Button,{isDefault:!0,onClick:function(){return x(!1)}},(0,f.__)("Cancel","recipe-card-blocks-by-wpzoom")),!i()(E)&&(0,e.createElement)(p.Button,{isPrimary:!0,onClick:function(){var e;e=E.split("\n").filter(Boolean),o({options:e}),x(!1)}},(0,f.__)("Bulk Add","recipe-card-blocks-by-wpzoom"))))),(0,e.createElement)(p.SelectControl,{label:(0,f.__)("Default Value","wpzoom-forms"),value:d,options:b.map((function(e,t){return{label:e,value:e}})),onChange:function(e){return o({defaultValue:e})}}),(0,e.createElement)(p.ToggleControl,{label:(0,f.__)("Show Label","wpzoom-forms"),checked:!!v,onChange:function(e){return o({showLabel:!!e})}}),v&&(0,e.createElement)(p.TextControl,{label:(0,f.__)("Label","wpzoom-forms"),value:y,onChange:function(e){return o({label:e})}}),(0,e.createElement)(p.ToggleControl,{label:(0,f.__)("Required","wpzoom-forms"),checked:!!h,onChange:function(e){return o({required:!!e})}}))),(0,e.createElement)(e.Fragment,null,v&&(0,e.createElement)("label",{htmlFor:u},(0,e.createElement)(s.RichText,{tagName:"label",placeholder:(0,f.__)("Label","wpzoom-forms"),value:y,htmlFor:u,onChange:function(e){return o({label:e})}}),h&&(0,e.createElement)("sup",{className:"wp-block-wpzoom-forms-required"},(0,f.__)("*","wpzoom-forms"))),(0,e.createElement)("ul",n,b.map((function(t,n){return(0,e.createElement)("li",{key:n},(0,e.createElement)("label",null,(0,e.createElement)("input",{type:"checkbox",name:"".concat(u,"[]"),id:u,value:t,checked:t==d,onChange:function(e){},required:!!h}),t))})))))},save:function(t){var n=t.attributes,r=s.useBlockProps.save(),o=n.id,a=(n.name,n.options),c=n.defaultValue,l=n.label,u=n.showLabel,i=n.required;return(0,e.createElement)(e.Fragment,null,u&&(0,e.createElement)("label",{htmlFor:o},(0,e.createElement)(s.RichText.Content,{tagName:"label",value:l,htmlFor:o}),i&&(0,e.createElement)("sup",{className:"wp-block-wpzoom-forms-required"},(0,f.__)("*","wpzoom-forms"))),(0,e.createElement)("ul",r,a.map((function(t,n){return(0,e.createElement)("li",{key:n},(0,e.createElement)("label",null,(0,e.createElement)("input",{type:"checkbox",name:"".concat(o,"[]"),id:o,value:t,checked:t==c,onChange:function(e){},required:!!i}),t))}))))}})}()}();