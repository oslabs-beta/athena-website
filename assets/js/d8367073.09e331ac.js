"use strict";(self.webpackChunkathena_website=self.webpackChunkathena_website||[]).push([[4641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(y,i(i({ref:t},l),{},{components:n})):o.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:0},i="Mocking Props",p={unversionedId:"editing-your-component/mocking-props",id:"editing-your-component/mocking-props",title:"Mocking Props",description:"In AthenaJS, mocking props is an essential aspect of component development and testing. It enables developers to simulate the data that their components receive from parent components or external sources, ensuring that they function correctly in various scenarios. Here is a step-by-step guide on how to write and use dummy props in AthenaJS:",source:"@site/docs/editing-your-component/mocking-props.md",sourceDirName:"editing-your-component",slug:"/editing-your-component/mocking-props",permalink:"/docs/editing-your-component/mocking-props",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/editing-your-component/mocking-props.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Editing Your Component",permalink:"/docs/category/editing-your-component"},next:{title:"Mocking State",permalink:"/docs/editing-your-component/mocking-state"}},s={},c=[],l={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mocking-props"},"Mocking Props"),(0,r.kt)("p",null,"In AthenaJS, mocking props is an essential aspect of component development and testing. It enables developers to simulate the data that their components receive from parent components or external sources, ensuring that they function correctly in various scenarios. Here is a step-by-step guide on how to write and use dummy props in AthenaJS:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Access the props editor"),": Find the props editor panel located in the bottom-left of the AthenaJS UI. This panel allows for the creation and management of prop mocks for your isolated component.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Write the mock prop"),': In the "Props" text area, you can load props from your component page and edit/create more mock props using JSON notation. For example, you can enter ',(0,r.kt)("inlineCode",{parentName:"p"},"{\u201ccount\u201d : 1}"),' to create a dummy prop called "count" with a value of 1. ')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For more complex prop values, you can use JSON objects or arrays, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"{\u201citems\u201d: [{\u201cid\u201d:1, \u201cname\u201d: \u201cItem 1\u201d}, {\u201cid\u201d: 2, \u201cname\u201d: \u201cItem 2\u201d}]}"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Utilize the built-in linter"),": While writing mock props, AthenaJS's built-in linter will check for syntax errors or issues in your JSON notation. If any problems are detected, the linter will notify you on the left side of the panel and provide helpful feedback if you hover over the notification.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Preview the component"),": The component will automatically update as you edit mock props in the editor. With the mock props defined, you can preview the component in AthenaJS's component rendering panel. This enables you to see how the component behaves with specific prop values and make necessary adjustments on the fly thanks to AthenaJS's live component rendering.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Modify or remove mock props"),": You can easily modify or remove existing mock props by accessing the Props panel and editing or deleting the corresponding JSON entries."))),(0,r.kt)("p",null,"By following these steps, you can efficiently create and manage mock props for your components in AthenaJS."))}u.isMDXComponent=!0}}]);