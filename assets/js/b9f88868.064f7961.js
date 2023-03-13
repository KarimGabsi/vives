"use strict";(self.webpackChunkcourses=self.webpackChunkcourses||[]).push([[392],{4137:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(o),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||a;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},8579:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(7462),r=(o(7294),o(4137));const a={sidebar_position:1},i="Concept",s={unversionedId:"Chapter 1 - Docker Basics/concept",id:"Chapter 1 - Docker Basics/concept",title:"Concept",description:"Source: Official Documentation",source:"@site/docs-cloud-for-ai/Chapter 1 - Docker Basics/1. concept.md",sourceDirName:"Chapter 1 - Docker Basics",slug:"/Chapter 1 - Docker Basics/concept",permalink:"/vives/docs-cloud-for-ai/Chapter 1 - Docker Basics/concept",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/vives/docs-cloud-for-ai/intro"},next:{title:"Simple Flask App",permalink:"/vives/docs-cloud-for-ai/Chapter 1 - Docker Basics/simple flask app"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"The Docker platform",id:"the-docker-platform",level:2},{value:"What can I use Docker for?",id:"what-can-i-use-docker-for",level:2},{value:"Docker architecture",id:"docker-architecture",level:2},{value:"The Docker daemon",id:"the-docker-daemon",level:2},{value:"The Docker client",id:"the-docker-client",level:2},{value:"Docker Desktop",id:"docker-desktop",level:2},{value:"Docker registries",id:"docker-registries",level:2},{value:"Docker objects",id:"docker-objects",level:2},{value:"Images",id:"images",level:2},{value:"Containers",id:"containers",level:2}],u={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"concept"},"Concept"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-started/overview/"},"Official Documentation"))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"IMPORTANT:")," ",(0,r.kt)("a",{parentName:"p",href:"https://dockerlabs.collabnix.com/docker/cheatsheet/"},"Cheat Sheet"))),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Docker is an open platform for developing, shipping, and running applications. ",(0,r.kt)("br",null),"\nDocker enables you to separate your applications from your infrastructure so you can deliver software quickly. ",(0,r.kt)("br",null),"\nWith Docker, you can manage your infrastructure in the same ways you manage your applications. ",(0,r.kt)("br",null),"\nBy taking advantage of Docker\u2019s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production."),(0,r.kt)("h2",{id:"the-docker-platform"},"The Docker platform"),(0,r.kt)("p",null,"Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security allows you to run many containers simultaneously on a given host. Containers are lightweight and contain everything needed to run the application, so you do not need to rely on what is currently installed on the host. You can easily share containers while you work, and be sure that everyone you share with gets the same container that works in the same way.\nDocker provides tooling and a platform to manage the lifecycle of your containers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Develop your application and its supporting components using containers."),(0,r.kt)("li",{parentName:"ul"},"The container becomes the unit for distributing and testing your application."),(0,r.kt)("li",{parentName:"ul"},"When you\u2019re ready, deploy your application into your production environment, as a container or an orchestrated service. This works the same whether your production environment is a local data center, a cloud provider, or a hybrid of the two.")),(0,r.kt)("h2",{id:"what-can-i-use-docker-for"},"What can I use Docker for?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fast, consistent delivery of your applications")),(0,r.kt)("p",null,"Docker streamlines the development lifecycle by allowing developers to work in standardized environments using local containers which provide your applications and services.\nContainers are great for continuous integration and continuous delivery (CI/CD) workflows."),(0,r.kt)("p",null,"Consider the following example scenario:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your developers write code locally and share their work with their colleagues using Docker containers."),(0,r.kt)("li",{parentName:"ul"},"They use Docker to push their applications into a test environment and execute automated and manual tests."),(0,r.kt)("li",{parentName:"ul"},"When developers find bugs, they can fix them in the development environment and redeploy them to the test environment for testing and validation."),(0,r.kt)("li",{parentName:"ul"},"When testing is complete, getting the fix to the customer is as simple as pushing the updated image to the production environment.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Responsive deployment and scaling")),(0,r.kt)("p",null,"Docker\u2019s container-based platform allows for highly portable workloads.\nDocker containers can run on a developer\u2019s local laptop, on physical or virtual machines in a data center,\non cloud providers, or in a mixture of environments."),(0,r.kt)("p",null,"Docker\u2019s portability and lightweight nature also make it easy to dynamically manage workloads,\nscaling up or tearing down applications and services as business needs dictate, in near real time."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Running more workloads on the same hardware")),(0,r.kt)("p",null,"Docker is lightweight and fast. It provides a viable, cost-effective alternative to hypervisor-based virtual machines,\nso you can use more of your server capacity to achieve your business goals.\nDocker is perfect for high density environments and for small and medium deployments where you need to do more with fewer resources."),(0,r.kt)("h2",{id:"docker-architecture"},"Docker architecture"),(0,r.kt)("p",null,"Docker uses a client-server architecture.\nThe Docker client talks to the Docker daemon, which does the heavy lifting of building, running, and distributing your Docker containers.\nThe Docker client and daemon can run on the same system, or you can connect a Docker client to a remote Docker daemon.\nThe Docker client and daemon communicate using a REST API, over UNIX sockets or a network interface.\nAnother Docker client is Docker Compose, that lets you work with applications consisting of a set of containers."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docker Architecture",src:o(1545).Z,title:"Docker Architecture",width:"1009",height:"527"})),(0,r.kt)("h2",{id:"the-docker-daemon"},"The Docker daemon"),(0,r.kt)("p",null,"The Docker daemon (dockerd) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes.\nA daemon can also communicate with other daemons to manage Docker services."),(0,r.kt)("h2",{id:"the-docker-client"},"The Docker client"),(0,r.kt)("p",null,"The Docker client (docker) is the primary way that many Docker users interact with Docker.\nWhen you use commands such as docker run, the client sends these commands to dockerd, which carries them out.\nThe docker command uses the Docker API. The Docker client can communicate with more than one daemon."),(0,r.kt)("h2",{id:"docker-desktop"},"Docker Desktop"),(0,r.kt)("p",null,"Docker Desktop is an easy-to-install application for your Mac, Windows or Linux environment that enables you to build and share containerized applications and microservices.\nDocker Desktop includes the Docker daemon (dockerd), the Docker client (docker), Docker Compose, Docker Content Trust, Kubernetes, and Credential Helper."),(0,r.kt)("h2",{id:"docker-registries"},"Docker registries"),(0,r.kt)("p",null,"A Docker registry stores Docker images. Docker Hub is a public registry that anyone can use, and Docker is configured to look for images on Docker Hub by default.\nYou can even run your own private registry.\nWhen you use the docker pull or docker run commands, the required images are pulled from your configured registry.\nWhen you use the docker push command, your image is pushed to your configured registry."),(0,r.kt)("h2",{id:"docker-objects"},"Docker objects"),(0,r.kt)("p",null,"When you use Docker, you are creating and using images, containers, networks, volumes, plugins, and other objects.\nThis section is a brief overview of some of those objects."),(0,r.kt)("h2",{id:"images"},"Images"),(0,r.kt)("p",null,"An image is a read-only template with instructions for creating a Docker container.\nOften, an image is based on another image, with some additional customization.\nFor example, you may build an image which is based on the ubuntu image, but installs the Apache web server and your application,\nas well as the configuration details needed to make your application run."),(0,r.kt)("p",null,"You might create your own images or you might only use those created by others and published in a registry.\nTo build your own image, you create a Dockerfile with a simple syntax for defining the steps needed to create the image and run it.\nEach instruction in a Dockerfile creates a layer in the image.\nWhen you change the Dockerfile and rebuild the image, only those layers which have changed are rebuilt.\nThis is part of what makes images so lightweight, small, and fast, when compared to other virtualization technologies."),(0,r.kt)("h2",{id:"containers"},"Containers"),(0,r.kt)("p",null,"A container is a runnable instance of an image.\nYou can create, start, stop, move, or delete a container using the Docker API or CLI.\nYou can connect a container to one or more networks, attach storage to it, or even create a new image based on its current state."),(0,r.kt)("p",null,"By default, a container is relatively well isolated from other containers and its host machine.\nYou can control how isolated a container\u2019s network, storage, or other underlying subsystems are from other containers or from the host machine."),(0,r.kt)("p",null,"A container is defined by its image as well as any configuration options you provide to it when you create or start it.\nWhen a container is removed, any changes to its state that are not stored in persistent storage disappear."))}d.isMDXComponent=!0},1545:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/architecture-2cfbbea0e91adcb4d443b59d8c297dfb.svg"}}]);