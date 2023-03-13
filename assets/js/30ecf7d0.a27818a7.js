"use strict";(self.webpackChunkcourses=self.webpackChunkcourses||[]).push([[1962],{4137:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>k});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),k=i,m=d["".concat(c,".").concat(k)]||d[k]||p[k]||a;return r?o.createElement(m,n(n({ref:t},l),{},{components:r})):o.createElement(m,n({ref:t},l))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,n[1]=s;for(var u=2;u<a;u++)n[u]=r[u];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5009:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=r(7462),i=(r(7294),r(4137));const a={sidebar_position:1},n="Docker Hub",s={unversionedId:"Chapter 2 - Docker Hub & Compose/docker hub",id:"Chapter 2 - Docker Hub & Compose/docker hub",title:"Docker Hub",description:"Source: Official Documentation",source:"@site/docs-cloud-for-ai/Chapter 2 - Docker Hub & Compose/1. docker hub.md",sourceDirName:"Chapter 2 - Docker Hub & Compose",slug:"/Chapter 2 - Docker Hub & Compose/docker hub",permalink:"/vives/docs-cloud-for-ai/Chapter 2 - Docker Hub & Compose/docker hub",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Volume",permalink:"/vives/docs-cloud-for-ai/Chapter 1 - Docker Basics/volume"},next:{title:"Docker Compose",permalink:"/vives/docs-cloud-for-ai/Chapter 2 - Docker Hub & Compose/docker compose"}},c={},u=[{value:"Step 1: Sign up for a Docker account",id:"step-1-sign-up-for-a-docker-account",level:2},{value:"Step 2: Join the organisation &#39;Revelare&#39;",id:"step-2-join-the-organisation-revelare",level:2},{value:"Step 3: Join/create a docker hub repository",id:"step-3-joincreate-a-docker-hub-repository",level:2},{value:"Step 4: Link your GitHub Repository",id:"step-4-link-your-github-repository",level:2},{value:"Step 5: Autobuilding",id:"step-5-autobuilding",level:2}],l={toc:u};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,o.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"docker-hub"},"Docker Hub"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Source: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-hub/"},"Official Documentation"))),(0,i.kt)("p",null,"Docker Hub is a service provided by Docker for finding and sharing container images with your team. It is the world\u2019s largest repository of container images with an array of content sources including container community developers, open source projects and independent software vendors (ISV) building and distributing their code in containers."),(0,i.kt)("p",null,"Users get access to free public repositories for storing and sharing images or can choose a subscription plan for private repositories."),(0,i.kt)("p",null,"Docker Hub provides the following major features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Repositories: Push and pull container images."),(0,i.kt)("li",{parentName:"ul"},"Teams & Organizations: Manage access to private repositories of container images."),(0,i.kt)("li",{parentName:"ul"},"Docker Official Images: Pull and use high-quality container images provided by Docker."),(0,i.kt)("li",{parentName:"ul"},"Docker Verified Publisher Images: Pull and use high- quality container images provided by external vendors."),(0,i.kt)("li",{parentName:"ul"},"Builds: Automatically build container images from GitHub and Bitbucket and push them to Docker Hub."),(0,i.kt)("li",{parentName:"ul"},"Webhooks: Trigger actions after a successful push to a repository to integrate Docker Hub with other services.")),(0,i.kt)("h2",{id:"step-1-sign-up-for-a-docker-account"},"Step 1: Sign up for a Docker account"),(0,i.kt)("p",null,"Let\u2019s start by creating a ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/signup"},"Docker ID (a.k.a. account)"),"."),(0,i.kt)("p",null,"A Docker ID grants you access to Docker Hub repositories and allows you to explore images that are available from the community and verified publishers.\nYou\u2019ll also need a Docker ID to share images on Docker Hub."),(0,i.kt)("h2",{id:"step-2-join-the-organisation-revelare"},"Step 2: Join the organisation 'Revelare'"),(0,i.kt)("p",null,"Once you've made an account, the professor will add you to the organisation.\nThis is required because so that your account can be promoted to a Team-account.\nWith a Team subscription, you can autobuild images based on your GitHub repository."),(0,i.kt)("h2",{id:"step-3-joincreate-a-docker-hub-repository"},"Step 3: Join/create a docker hub repository"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Docker Repository",src:r(8070).Z,title:"docker repository",width:"807",height:"625"})),(0,i.kt)("h2",{id:"step-4-link-your-github-repository"},"Step 4: Link your GitHub Repository"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Docker Github",src:r(4322).Z,title:"docker repository",width:"1260",height:"528"})),(0,i.kt)("h2",{id:"step-5-autobuilding"},"Step 5: Autobuilding"),(0,i.kt)("p",null,"Autobuilding is the very reason we use Docker Hub, it allows us to automatically create images based upon our GitHub repository (triggers on push) ",(0,i.kt)("br",null)),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Source: ",(0,i.kt)("strong",{parentName:"li"},"main")," (the branch name of your repository where your docker project is located)"),(0,i.kt)("li",{parentName:"ul"},"DockerFile location: ",(0,i.kt)("strong",{parentName:"li"},"DockerfileVolume")," (the name of our Dockerfile)"),(0,i.kt)("li",{parentName:"ul"},"Build context: ",(0,i.kt)("strong",{parentName:"li"},"/")," ",(0,i.kt)("br",null),'\n(the path to the dockerfile -> "/" is the parent folder of the selected branch)'))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Docker Github",src:r(1784).Z,title:"docker repository",width:"1233",height:"911"})))}p.isMDXComponent=!0},4322:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/autobuild_1-ab6c25a25d3557a1ca09770eab74fa78.png"},1784:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/autobuild_2-98ae5b2a6b2887024b342773c204bfff.png"},8070:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/docker-hub-repository-97441d588d3598e5a317d9f4e4903d58.png"}}]);