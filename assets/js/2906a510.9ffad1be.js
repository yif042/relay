"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[91804],{3905:(e,t,o)=>{o.r(t),o.d(t,{MDXContext:()=>p,MDXProvider:()=>m,mdx:()=>g,useMDXComponents:()=>c,withMDXComponents:()=>d});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},a.apply(this,arguments)}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),d=function(e){return function(t){var o=c(t.components);return r.createElement(e,a({},t,{components:o}))}},c=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),m=n,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||a;return o?r.createElement(y,l(l({ref:t},p),{},{components:o})):r.createElement(y,l({ref:t},p))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}y.displayName="MDXCreateElement"},99482:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=o(83117),n=o(80102),a=(o(67294),o(3905)),i=["components"],l={id:"upgrading-to-relay-hooks",title:"Upgrading to Relay Hooks",slug:"/migration-and-compatibility/",description:"Relay guide to upgrading to Relay hooks",keywords:["upgrade","hooks"]},s=void 0,p={unversionedId:"migration-and-compatibility/upgrading-to-relay-hooks",id:"version-v13.0.0/migration-and-compatibility/upgrading-to-relay-hooks",title:"Upgrading to Relay Hooks",description:"Relay guide to upgrading to Relay hooks",source:"@site/versioned_docs/version-v13.0.0/migration-and-compatibility/upgrading-to-relay-hooks.md",sourceDirName:"migration-and-compatibility",slug:"/migration-and-compatibility/",permalink:"/docs/v13.0.0/migration-and-compatibility/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v13.0.0/migration-and-compatibility/upgrading-to-relay-hooks.md",tags:[],version:"v13.0.0",lastUpdatedBy:"Robert Balicki",lastUpdatedAt:1670911142,formattedLastUpdatedAt:"Dec 13, 2022",frontMatter:{id:"upgrading-to-relay-hooks",title:"Upgrading to Relay Hooks",slug:"/migration-and-compatibility/",description:"Relay guide to upgrading to Relay hooks",keywords:["upgrade","hooks"]},sidebar:"version-v13.0.0/docs",previous:{title:"@required Directive",permalink:"/docs/v13.0.0/guides/required-directive/"},next:{title:"Suspense Compatibility",permalink:"/docs/v13.0.0/migration-and-compatibility/suspense-compatibility/"}},d={},c=[{value:"Accessing Relay Hooks",id:"accessing-relay-hooks",level:2},{value:"Next Steps",id:"next-steps",level:2}],m={toc:c};function u(e){var t=e.components,o=(0,n.Z)(e,i);return(0,a.mdx)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/blog/2021/03/09/introducing-relay-hooks"},"Relay Hooks")," is a set of new Hooks-based APIs for using Relay with React that improves upon the existing container-based APIs."),(0,a.mdx)("p",null,"In this we will cover how to start using Relay Hooks, what you need to know about compatibility, and how to migrate existing container-based code to Hooks if you choose to do so. However, note that migrating existing code to Relay Hooks is ",(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)("em",{parentName:"strong"},"not"))," required, and ",(0,a.mdx)("strong",{parentName:"p"},"container-based code will continue to work"),"."),(0,a.mdx)("h2",{id:"accessing-relay-hooks"},"Accessing Relay Hooks"),(0,a.mdx)("p",null,"Make sure the latest versions of React and Relay are installed, and that you\u2019ve followed additional setup in our ",(0,a.mdx)("a",{parentName:"p",href:"../getting-started/installation-and-setup/"},"Installation & Setup")," guide:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"yarn add react react-dom react-relay\n")),(0,a.mdx)("p",null,"Then, you can import Relay Hooks from the ",(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)("inlineCode",{parentName:"strong"},"react-relay"))," module, or if you only want to include Relay Hooks in your bundle, you can import them from ",(0,a.mdx)("strong",{parentName:"p"},(0,a.mdx)("inlineCode",{parentName:"strong"},"react-relay/hooks")),":"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import {graphql, useFragment} from 'react-relay'; // or 'react-relay/hooks'\n\n// ...\n")),(0,a.mdx)("h2",{id:"next-steps"},"Next Steps"),(0,a.mdx)("p",null,"Check out the following guides in this section:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"./suspense-compatibility/"},"Suspense Compatibility")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"./relay-hooks-and-legacy-container-apis/"},"Relay Hooks and Legacy Container APIs"))),(0,a.mdx)("p",null,"For more documentation on the APIs themselves, check out our ",(0,a.mdx)("a",{parentName:"p",href:"../api-reference/relay-environment-provider"},"API Reference")," or our ",(0,a.mdx)("a",{parentName:"p",href:"../guided-tour/"},"Guided Tour"),"."))}u.isMDXComponent=!0}}]);