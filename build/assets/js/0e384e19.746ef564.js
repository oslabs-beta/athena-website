"use strict";(self.webpackChunkathena_website=self.webpackChunkathena_website||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="Getting Started",l={unversionedId:"intro",id:"intro",title:"Getting Started",description:"Introduction to AthenaJS:",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Editing Your Component",permalink:"/docs/category/editing-your-component"}},p={},s=[{value:"Introduction to AthenaJS:",id:"introduction-to-athenajs",level:2},{value:"Key Features of AthenaJS Include:",id:"key-features-of-athenajs-include",level:3},{value:"Prerequisities",id:"prerequisities",level:2},{value:"Installing Athena JS",id:"installing-athena-js",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("h2",{id:"introduction-to-athenajs"},"Introduction to AthenaJS:"),(0,r.kt)("p",null,"AthenaJS is an Electron-based application that streamlines the development process of React components. Its key feature is the ability to ",(0,r.kt)("strong",{parentName:"p"},"develop individual components in isolation"),", allowing for rapid prototyping, testing, and iteration. By providing a dedicated environment for component creation, AthenaJS enhances efficiency and promotes best practices in React development."),(0,r.kt)("h3",{id:"key-features-of-athenajs-include"},"Key Features of AthenaJS Include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Intuitive interface")," for editing components, mocking props, and managing state. This includes a built-in linter for JavaScript, JSON, and JSX.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Support for ",(0,r.kt)("strong",{parentName:"p"},"defining custom actions")," to manage component behavior and interactions.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Live component rendering and previewing"),", making it easy to visualize and test components on the fly.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Render time calculations"),", allowing developers to analyze component performance and optimize if needed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Export")," functionality to integrate updated components seamlessly into your React application.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ability to ",(0,r.kt)("strong",{parentName:"p"},"edit React server components in isolation"),", allowing developers to optimize performance and reduce the need for client-side rendering, further enhancing the React development experience."))),(0,r.kt)("h2",{id:"prerequisities"},"Prerequisities"),(0,r.kt)("p",null,"To get started with AthenaJS, it's important to ensure that your system meets the following requirements:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Compatible operating system"),": AthenaJS is available for Windows, macOS, and Linux."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Basic knowledge of React"),": Familiarity with React, its core concepts, and component development is highly recommended to use AthenaJS effectively.")),(0,r.kt)("p",null,"Once you have met these prerequisites, you can install AthenaJS and begin developing React components with enhanced performance insights and efficient workflows."),(0,r.kt)("h2",{id:"installing-athena-js"},"Installing Athena JS"),(0,r.kt)("p",null,"Users will be able to download Athena JS either through our ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"homepage")," or our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oslabs-beta/Athena"},"Github"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Github Instructions:")),(0,r.kt)("p",null,"First, navigate to the Github repository URL and fork the repository."),(0,r.kt)("p",null,"Next, clone the repository to your local machine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/YOUR_USERNAME_HERE/Athena.git\n")),(0,r.kt)("p",null,"Navigate into the newly created Athena Folder, install all necessary dependencies, and spin up the app"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd Athena\nnpm install\nnpm run dev\n")))}d.isMDXComponent=!0}}]);