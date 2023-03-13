"use strict";(self.webpackChunkcourses=self.webpackChunkcourses||[]).push([[8954],{4137:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(4137));const i={sidebar_position:3},a="Greedy Search",c={unversionedId:"Heuristic Search/Greedy Search",id:"Heuristic Search/Greedy Search",title:"Greedy Search",description:"Pseudocode",source:"@site/docs-intro-to-ai/2 - Heuristic Search/3. Greedy Search.md",sourceDirName:"2 - Heuristic Search",slug:"/Heuristic Search/Greedy Search",permalink:"/vives/docs-intro-to-ai/Heuristic Search/Greedy Search",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Beam Search",permalink:"/vives/docs-intro-to-ai/Heuristic Search/Beam Search"},next:{title:"Uniform Cost",permalink:"/vives/docs-intro-to-ai/Optimal Search/Uniform Cost"}},l={},u=[{value:"Pseudocode",id:"pseudocode",level:2},{value:"Criteria",id:"criteria",level:3},{value:"Speed",id:"speed",level:3},{value:"Memory",id:"memory",level:3},{value:"CODE",id:"code",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"greedy-search"},"Greedy Search"),(0,o.kt)("h2",{id:"pseudocode"},"Pseudocode"),(0,o.kt)("p",null,"1) QUEUE (path containing the root)"),(0,o.kt)("p",null,"2) WHILE (QUEUE is not empty AND goal is not reached)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Remove the first path from the QUEUE"),(0,o.kt)("li",{parentName:"ul"},"Create new paths (to all children)"),(0,o.kt)("li",{parentName:"ul"},"Reject the new paths with loops"),(0,o.kt)("li",{parentName:"ul"},"Add the new paths ",(0,o.kt)("strong",{parentName:"li"},"and sort the entire QUEUE using heuristic f"))),(0,o.kt)("p",null,"3) IF (goal reached)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"THEN SUCCESS"),(0,o.kt)("li",{parentName:"ul"},"ELSE FAILURE")),(0,o.kt)("h3",{id:"criteria"},"Criteria"),(0,o.kt)("p",null,"b = depth of the tree ",(0,o.kt)("br",null),"\nd = (average) branching factor of the tree ",(0,o.kt)("br",null),"\nm = depth of the shallowest solution ",(0,o.kt)("br",null)),(0,o.kt)("h3",{id:"speed"},"Speed"),(0,o.kt)("p",null,"Exercise"),(0,o.kt)("h3",{id:"memory"},"Memory"),(0,o.kt)("p",null,"Exercise"),(0,o.kt)("h2",{id:"code"},"CODE"),(0,o.kt)("p",null,"Under construction"))}p.isMDXComponent=!0}}]);