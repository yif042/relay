(self.webpackChunk=self.webpackChunk||[]).push([[15987],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45139:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>d});var o=n(22122),r=n(19756),a=(n(67294),n(3905)),i=["components"],s={id:"upgrading-to-relay-hooks",title:"Upgrading to Relay Hooks",slug:"/migration-and-compatibility/"},l=void 0,p={unversionedId:"migration-and-compatibility/upgrading-to-relay-hooks",id:"version-v11.0.0/migration-and-compatibility/upgrading-to-relay-hooks",isDocsHomePage:!1,title:"Upgrading to Relay Hooks",description:"Relay Hooks is a set of new Hooks-based APIs for using Relay with React that improves upon the existing container-based APIs.",source:"@site/versioned_docs/version-v11.0.0/migration-and-compatibility/upgrading-to-relay-hooks.md",sourceDirName:"migration-and-compatibility",slug:"/migration-and-compatibility/",permalink:"/docs/v11.0.0/migration-and-compatibility/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/migration-and-compatibility/upgrading-to-relay-hooks.md",version:"v11.0.0",lastUpdatedBy:"Jianfeng Chen",lastUpdatedAt:1636650075,formattedLastUpdatedAt:"11/11/2021",frontMatter:{id:"upgrading-to-relay-hooks",title:"Upgrading to Relay Hooks",slug:"/migration-and-compatibility/"},sidebar:"version-v11.0.0/docs",previous:{title:"Testing Relay with Preloaded Queries",permalink:"/docs/v11.0.0/guides/testing-relay-with-preloaded-queries/"},next:{title:"Suspense Compatibility",permalink:"/docs/v11.0.0/migration-and-compatibility/suspense-compatibility/"}},c=[{value:"Accessing Relay Hooks",id:"accessing-relay-hooks",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/blog/2021/03/09/introducing-relay-hooks"},"Relay Hooks")," is a set of new Hooks-based APIs for using Relay with React that improves upon the existing container-based APIs."),(0,a.kt)("p",null,"In this we will cover how to start using Relay Hooks, what you need to know about compatibility, and how to migrate existing container-based code to Hooks if you choose to do so. However, note that migrating existing code to Relay Hooks is ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"not"))," required, and ",(0,a.kt)("strong",{parentName:"p"},"container-based code will continue to work"),"."),(0,a.kt)("h2",{id:"accessing-relay-hooks"},"Accessing Relay Hooks"),(0,a.kt)("p",null,"Make sure the latest versions of React and Relay are installed, and that you\u2019ve followed additional setup in our ",(0,a.kt)("a",{parentName:"p",href:"../getting-started/installation-and-setup/"},"Installation & Setup")," guide:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"yarn add react react-dom react-relay\n")),(0,a.kt)("p",null,"Then, you can import Relay Hooks from the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"react-relay"))," module, or if you only want to include Relay Hooks in your bundle, you can import them from ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"react-relay/hooks")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {graphql, useFragment} from 'react-relay'; // or 'react-relay/hooks'\n\n// ...\n")),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"Check out the following guides in this section:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./suspense-compatibility/"},"Suspense Compatibility")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./relay-hooks-and-legacy-container-apis/"},"Relay Hooks and Legacy Container APIs"))),(0,a.kt)("p",null,"For more documentation on the APIs themselves, check out our ",(0,a.kt)("a",{parentName:"p",href:"../api-reference/relay-environment-provider"},"API Reference")," or our ",(0,a.kt)("a",{parentName:"p",href:"../guided-tour/"},"Guided Tour"),"."))}d.isMDXComponent=!0}}]);