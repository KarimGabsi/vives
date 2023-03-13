"use strict";(self.webpackChunkcourses=self.webpackChunkcourses||[]).push([[4165],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return r?a.createElement(k,o(o({ref:t},u),{},{components:r})):a.createElement(k,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(4137));const i={sidebar_position:1},o="Summary Exercise: XOR",l={unversionedId:"Chapter 5 - Summary Excercise/xor",id:"Chapter 5 - Summary Excercise/xor",title:"Summary Exercise: XOR",description:"It is now time to combine all the skills acquired from the previous four chapters into one summary exercise.",source:"@site/docs-cloud-for-ai/Chapter 5 - Summary Excercise/1. xor.md",sourceDirName:"Chapter 5 - Summary Excercise",slug:"/Chapter 5 - Summary Excercise/xor",permalink:"/vives/docs-cloud-for-ai/Chapter 5 - Summary Excercise/xor",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Python To Executable",permalink:"/vives/docs-cloud-for-ai/Chapter 4 - Epsagon/python to executable"},next:{title:"Summary Exercise: Guide",permalink:"/vives/docs-cloud-for-ai/Chapter 5 - Summary Excercise/guide"}},s={},p=[{value:"What is XOR?",id:"what-is-xor",level:2},{value:"Python XOR",id:"python-xor",level:2},{value:"Project XOR overview",id:"project-xor-overview",level:2},{value:"Requisites",id:"requisites",level:3},{value:"Schema",id:"schema",level:3}],u={toc:p};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"summary-exercise-xor"},"Summary Exercise: XOR"),(0,n.kt)("p",null,"It is now time to combine all the skills acquired from the previous four chapters into one summary exercise. ",(0,n.kt)("br",null),"\nAnd whilst we have seen the whole ",(0,n.kt)("strong",{parentName:"p"},"Docker")," and ",(0,n.kt)("strong",{parentName:"p"},"Epsagon")," aspect in this course, you still haven't done any 'real' A.I. implementation from scratch.\n",(0,n.kt)("strong",{parentName:"p"},"It is now time to do so!")),(0,n.kt)("h2",{id:"what-is-xor"},"What is XOR?"),(0,n.kt)("p",null,"XOR is an operation based on the ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/XOR_gate"},"XOR GATE"),", which just is a logic gate that receives two inputs and either outputs ",(0,n.kt)("inlineCode",{parentName:"p"},"1 or HIGH")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"0 or LOW"),".\nIt is an ",(0,n.kt)("strong",{parentName:"p"},"exclusive or")," from a mathematical logic standpoint, meaning that if one of the input differs from each other, it would output ",(0,n.kt)("inlineCode",{parentName:"p"},"1/HIGH")," and if both inputs are the same it will output ",(0,n.kt)("inlineCode",{parentName:"p"},"0/LOW"),"."),(0,n.kt)("table",{class:"GeneratedTable"},(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",{colspan:"2"},"Input"),(0,n.kt)("th",null,"Output"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",{class:"blue"},(0,n.kt)("td",null,"A"),(0,n.kt)("td",null,"B"),(0,n.kt)("td",null,"A XOR B")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"red"},"0"),(0,n.kt)("td",{class:"red"},"0"),(0,n.kt)("td",{class:"red"},"0")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"red"},"0"),(0,n.kt)("td",{class:"green"},"1"),(0,n.kt)("td",{class:"green"},"1")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"green"},"1"),(0,n.kt)("td",{class:"red"},"0"),(0,n.kt)("td",{class:"green"},"1")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"green"},"1"),(0,n.kt)("td",{class:"green"},"1"),(0,n.kt)("td",{class:"red"},"0")))),(0,n.kt)("h2",{id:"python-xor"},"Python XOR"),(0,n.kt)("p",null,"It's actually very simple to perform an XOR operation in Python:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-py"},"def xor(a, b):\n    return a ^ b\n")),(0,n.kt)("p",null,"Source: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/operator.html#mapping-operators-to-functions"},"Python Operators")),(0,n.kt)("h2",{id:"project-xor-overview"},"Project XOR overview"),(0,n.kt)("h3",{id:"requisites"},"Requisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Build an ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Artificial_neural_network"},"ANN")," that receives ",(0,n.kt)("strong",{parentName:"li"},"two")," inputs and has ",(0,n.kt)("strong",{parentName:"li"},"one")," output.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Document the following:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"The process of building the ",(0,n.kt)("inlineCode",{parentName:"strong"},"XOR ANN"),".")),(0,n.kt)("li",{parentName:"ul"},"How many layers did you use?"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.tensorflow.org/tutorials/keras/overfit_and_underfit"},"Underfitting vs overfitting"),": How did you solve this?"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Auto Training"),": After how many iterations of training did you achieve an accuracy of approximately ",(0,n.kt)("strong",{parentName:"li"},">99.00%")," ?"))),(0,n.kt)("li",{parentName:"ul"},"Remember, you can easily generate training data with the function mentioned in ",(0,n.kt)("a",{parentName:"li",href:"./xor#python-xor"},"Python XOR")),(0,n.kt)("li",{parentName:"ul"},"Don't forget to save your ",(0,n.kt)("strong",{parentName:"li"},"model")," because you will be using it in ",(0,n.kt)("em",{parentName:"li"},"two")," containers, so it needs to be up-to-date!"))),(0,n.kt)("li",{parentName:"ul"},"Deploy two containers with separate APIs sharing the same volume.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"C1: Is where the user can insert two bits and try and predict the output."),(0,n.kt)("li",{parentName:"ul"},"C2: Is a simple website with three buttons:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Train 1 (trains one iteration of data)"),(0,n.kt)("li",{parentName:"ul"},"Train 100 (trains a hundred iterations of data)"),(0,n.kt)("li",{parentName:"ul"},"Auto Training (ON/OFF): continuously trains data (with timer). Make sure you can enable/disable this.")))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Model saving: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/pickle.html"},"Pickle")," ",(0,n.kt)("br",null),"\nOr use the standard built-in function from ",(0,n.kt)("strong",{parentName:"p"},"keras")," | ",(0,n.kt)("strong",{parentName:"p"},"tensorflow")),(0,n.kt)("p",{parentName:"admonition"},"You need to ",(0,n.kt)("inlineCode",{parentName:"p"},"save the model in C2")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"load the model in C1"),".")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create a ",(0,n.kt)("em",{parentName:"p"},"new")," dashboard in ",(0,n.kt)("inlineCode",{parentName:"p"},"Epsagon")," that shows the following:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Visits & predictions from C1:"),(0,n.kt)("li",{parentName:"ul"},"Visits & data trained from C2:"),(0,n.kt)("li",{parentName:"ul"},"Accuracy measurements"),(0,n.kt)("li",{parentName:"ul"},"Errors!"),(0,n.kt)("li",{parentName:"ul"},"Alert via ",(0,n.kt)("a",{parentName:"li",href:"https://slack.com/"},"slack")," when reaching ",(0,n.kt)("strong",{parentName:"li"},"80%, 90%, 95%, >99.00%")," accuracy"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"(Optional) Performance measuring")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Make sure C1 & C2 has a ",(0,n.kt)("strong",{parentName:"p"},"nice layout"),", also include the ",(0,n.kt)("a",{parentName:"p",href:"../../"},"VIVES Logo"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub")," and ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub")," to autobuild your images")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When ready, compress ",(0,n.kt)("em",{parentName:"p"},"(zip)")," the entire project with your documentation ",(0,n.kt)("em",{parentName:"p"},"(pdf)")," and upload it to ",(0,n.kt)("strong",{parentName:"p"},"Toledo")))),(0,n.kt)("h3",{id:"schema"},"Schema"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"XOR Exercise",src:r(5747).Z,title:"XOR Exercise",width:"601",height:"541"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Time needed: approximately two/three course sessions")),(0,n.kt)("admonition",{title:"Extra documentation",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"XOR with Keras and Tensorflow: ",(0,n.kt)("a",{parentName:"p",href:"https://blog.thoughtram.io/machine-learning/2016/11/02/understanding-XOR-with-keras-and-tensorlow.html"},"Example")," ",(0,n.kt)("br",null),"\nDNA Engine: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/KarimGabsi/DNAEngine"},"ANN for DNA")," ",(0,n.kt)("br",null))))}m.isMDXComponent=!0},5747:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/XOR_Exercise-ad14746922bc5e501b0764d35645ddce.png"}}]);