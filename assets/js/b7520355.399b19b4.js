"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[546],{3905:(e,t,r)=>{r.d(t,{kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||l;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const l={},i=void 0,o={unversionedId:"smart-contracts/utils/ProxyFactoryInitializable",id:"version-0.4.3/smart-contracts/utils/ProxyFactoryInitializable",title:"ProxyFactoryInitializable",description:"Functions",source:"@site/versioned_docs/version-0.4.3/smart-contracts/utils/ProxyFactoryInitializable.md",sourceDirName:"smart-contracts/utils",slug:"/smart-contracts/utils/ProxyFactoryInitializable",permalink:"/vaults/smart-contracts/utils/ProxyFactoryInitializable",draft:!1,editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.4.3/smart-contracts/utils/ProxyFactoryInitializable.md",tags:[],version:"0.4.3",frontMatter:{},sidebar:"version-0.4.3/mySidebar",previous:{title:"TokenNoReturn",permalink:"/vaults/smart-contracts/test/TokenNoReturn"},next:{title:"Vault.vy",permalink:"/vaults/smart-contracts/vault"}},s={},c=[{value:"Functions",id:"functions",level:2},{value:"deployMinimal",id:"deployminimal",level:3},{value:"_getRevertMsg",id:"_getrevertmsg",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Return Values:",id:"return-values",level:4},{value:"slice",id:"slice",level:3},{value:"Events",id:"events",level:2},{value:"ProxyCreated",id:"proxycreated",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"functions"},"Functions"),(0,n.kt)("h3",{id:"deployminimal"},"deployMinimal"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function deployMinimal(\n  ) external returns (address proxy, bytes returnData)\n")),(0,n.kt)("h3",{id:"_getrevertmsg"},"_getRevertMsg"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _getRevertMsg(\n    bytes _res\n  ) internal returns (string)\n")),(0,n.kt)("p",null,"This is needed in order to get the human-readable revert message from a call"),(0,n.kt)("p",null,"Get the revert message from a call"),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"_res")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Response of the call")))),(0,n.kt)("h4",{id:"return-values"},"Return Values:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Revert")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"message string")))),(0,n.kt)("h3",{id:"slice"},"slice"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  function slice(\n  ) internal returns (bytes)\n")),(0,n.kt)("h2",{id:"events"},"Events"),(0,n.kt)("h3",{id:"proxycreated"},"ProxyCreated"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"  event ProxyCreated(\n  )\n")))}u.isMDXComponent=!0}}]);