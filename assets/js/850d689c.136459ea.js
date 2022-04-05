(self.webpackChunk=self.webpackChunk||[]).push([[98275],{3905:(e,r,t)=>{"use strict";t.r(r),t.d(r,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>s});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a.apply(this,arguments)}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){return function(r){var t=u(r.components);return n.createElement(e,a({},r,{components:t}))}},u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),d=o,m=s["".concat(i,".").concat(d)]||s[d]||f[d]||a;return t?n.createElement(m,c(c({ref:r},p),{},{components:t})):n.createElement(m,c({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13919:(e,r,t)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}t.d(r,{b:()=>n,Z:()=>o})},44996:(e,r,t)=>{"use strict";t.r(r),t.d(r,{useBaseUrlUtils:()=>a,default:()=>i});var n=t(52263),o=t(13919);function a(){var e=(0,n.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,a=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,c=void 0!==i&&i,l=a.absolute,p=void 0!==l&&l;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(c)return r+t;var s=t.startsWith(r)?t:r+t.replace(/^\//,"");return p?e+s:s}(a,t,e,r)}}}function i(e,r){return void 0===r&&(r={}),(0,a().withBaseUrl)(e,r)}},77193:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>s,toc:()=>u,default:()=>f});var n=t(74034),o=t(79973),a=(t(67294),t(3905)),i=t(44996),c=["components"],l={},p=void 0,s={unversionedId:"api-reference/types/SelectorStoreUpdater",id:"version-v11.0.0/api-reference/types/SelectorStoreUpdater",isDocsHomePage:!1,title:"SelectorStoreUpdater",description:"Type SelectorStoreUpdater",source:"@site/versioned_docs/version-v11.0.0/api-reference/types/SelectorStoreUpdater.md",sourceDirName:"api-reference/types",slug:"/api-reference/types/SelectorStoreUpdater",permalink:"/docs/v11.0.0/api-reference/types/SelectorStoreUpdater",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/api-reference/types/SelectorStoreUpdater.md",tags:[],version:"v11.0.0",lastUpdatedBy:"Christian Vuerings",lastUpdatedAt:1649173888,formattedLastUpdatedAt:"4/5/2022",frontMatter:{}},u=[{value:"Type <code>SelectorStoreUpdater</code>",id:"type-selectorstoreupdater",children:[],level:4}],d={toc:u};function f(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.mdx)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)("h4",{id:"type-selectorstoreupdater"},"Type ",(0,a.mdx)("inlineCode",{parentName:"h4"},"SelectorStoreUpdater")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"A function with signature ",(0,a.mdx)("inlineCode",{parentName:"li"},"(store: RecordSourceSelectorProxy, data) => void")),(0,a.mdx)("li",{parentName:"ul"},"This interface allows you to ",(0,a.mdx)("em",{parentName:"li"},"imperatively")," write and read data directly to and from the Relay store. This means that you have full control over how to update the store in response to the subscription payload: you can ",(0,a.mdx)("em",{parentName:"li"},"create entirely new records"),", or ",(0,a.mdx)("em",{parentName:"li"},"update or delete existing ones"),". The full API for reading and writing to the Relay store is available ",(0,a.mdx)("a",{href:(0,i.default)("docs/api-reference/store/#recordsourceselectorproxy")},"here"),".")))}f.isMDXComponent=!0}}]);