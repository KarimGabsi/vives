"use strict";(self.webpackChunkcourses=self.webpackChunkcourses||[]).push([[263],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),k=n,d=m["".concat(p,".").concat(k)]||m[k]||u[k]||o;return r?a.createElement(d,i(i({ref:t},c),{},{components:r})):a.createElement(d,i({ref:t},c))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1761:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(4137));const o={sidebar_position:3},i="Flask App Dockerized",l={unversionedId:"Chapter 1 - Docker Basics/flask app dockerized",id:"Chapter 1 - Docker Basics/flask app dockerized",title:"Flask App Dockerized",description:"Generating Requirements.txt",source:"@site/docs-cloud-for-ai/Chapter 1 - Docker Basics/3. flask app dockerized.md",sourceDirName:"Chapter 1 - Docker Basics",slug:"/Chapter 1 - Docker Basics/flask app dockerized",permalink:"/vives/docs-cloud-for-ai/Chapter 1 - Docker Basics/flask app dockerized",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Simple Flask App",permalink:"/vives/docs-cloud-for-ai/Chapter 1 - Docker Basics/simple flask app"},next:{title:"Volume",permalink:"/vives/docs-cloud-for-ai/Chapter 1 - Docker Basics/volume"}},p={},s=[{value:"Generating Requirements.txt",id:"generating-requirementstxt",level:2},{value:"Building a Docker Image",id:"building-a-docker-image",level:2},{value:"Deploying a Docker Container",id:"deploying-a-docker-container",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"flask-app-dockerized"},"Flask App Dockerized"),(0,n.kt)("h2",{id:"generating-requirementstxt"},"Generating Requirements.txt"),(0,n.kt)("p",null,"Now that we have a simple Flask App up and running on our local machine it is time to dockerize it. ",(0,n.kt)("br",null),"\nBut before need to be able to tell our soon to be ",(0,n.kt)("strong",{parentName:"p"},"image")," about our extra package we've just used. ",(0,n.kt)("br",null),"\nWe can do this by generating a ",(0,n.kt)("strong",{parentName:"p"},"requirements.txt")," file for our python project. ",(0,n.kt)("br",null)),(0,n.kt)("p",null,"Open the ",(0,n.kt)("strong",{parentName:"p"},"Terminal"),": "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Go to our project directory"',title:'"Go',to:!0,our:!0,project:!0,'directory"':!0},"cd DockerProject\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Generate requirements.txt"',title:'"Generate','requirements.txt"':!0},"pip freeze > requirements.txt\n")),(0,n.kt)("p",null,"The file should look somewhat like this (make sure you see ",(0,n.kt)("strong",{parentName:"p"},"Flask==x.x.x"),"):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"click==8.1.3\ncolorama==0.4.5\nFlask==2.2.2\nitsdangerous==2.1.2\nJinja2==3.1.2\nMarkupSafe==2.1.1\nWerkzeug==2.2.2\n")),(0,n.kt)("h2",{id:"building-a-docker-image"},"Building a Docker Image"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the DockerProject folder, create a file called ",(0,n.kt)("strong",{parentName:"li"},"DockerFile")," (this file has no extentions)"),(0,n.kt)("li",{parentName:"ol"},"Edit the File:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Dockerfile Reference = https://docs.docker.com/engine/reference/builder/\n\n# With the FROM keyword we can tell docker which image we are going to use.\n# For a list of images: https://hub.docker.com/search?q=&type=image\nFROM python:alpine\n\n# Copy our app\nCOPY . /app\n\n# Set our app as the working directory\nWORKDIR /app\n\n# Install the requirements of our app\n# Remember to generate this in our project: pip freeze > requirements.txt\nRUN pip install -r requirements.txt\n\n# We are using flask, so we need a port open\n# Make sure you expose the same port as in your python flask script.\nEXPOSE 5000\n\n# Then run our app\nCMD python ./main.py\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Now that we have a DockerFile which is a crucial file for constructing a local docker image. ",(0,n.kt)("br",null),"\nWe can now use Docker commands to ",(0,n.kt)("strong",{parentName:"li"},"create")," an image for our Flask App.\nWe can do this in the ",(0,n.kt)("strong",{parentName:"li"},"Terminal"),":")),(0,n.kt)("p",null,"Open the ",(0,n.kt)("strong",{parentName:"p"},"Terminal"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Go to our project directory (if necessary)"',title:'"Go',to:!0,our:!0,project:!0,directory:!0,"(if":!0,'necessary)"':!0},"cd DockerProject\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="building the image"',title:'"building',the:!0,'image"':!0},"docker build -t myflaskimage .\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Once you've created the image, you can find it:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Docker Desktop > images"),(0,n.kt)("li",{parentName:"ul"},"Via Terminal command:")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="show docker images"',title:'"show',docker:!0,'images"':!0},"docker images --all\n")))),(0,n.kt)("h2",{id:"deploying-a-docker-container"},"Deploying a Docker Container"),(0,n.kt)("p",null,"Now that we have a Docker Image of our Flask App, let's build a container based on that image. ",(0,n.kt)("br",null),"\nThere are a few ways of doing this:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Docker Desktop ",(0,n.kt)("br",null),"\nUnder Images, click on ",(0,n.kt)("strong",{parentName:"p"},"Run")," button of the image named: myflaskimage ",(0,n.kt)("br",null))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Terminal",(0,n.kt)("br",null),"\n--name ",(0,n.kt)("em",{parentName:"p"},"(name of container)")," ",(0,n.kt)("br",null),"\n-p ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"<<container port>>")," : ",(0,n.kt)("inlineCode",{parentName:"strong"},"<<host port>>"))," ",(0,n.kt)("em",{parentName:"p"},"(port exposure and forwarding)")," ",(0,n.kt)("br",null),"\nmyflaskimage ",(0,n.kt)("em",{parentName:"p"},"(name of image)")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name myflaskcontainer -p 5000:5000 myflaskimage\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Docker Compose ",(0,n.kt)("em",{parentName:"p"},"(to be seen in a later chapter)")))))}u.isMDXComponent=!0}}]);