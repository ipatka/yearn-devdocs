"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[5668],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9614:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o={},l=void 0,s={unversionedId:"smart-contracts/utils/ProxyFactoryInitializable",id:"version-0.3.3/smart-contracts/utils/ProxyFactoryInitializable",isDocsHomePage:!1,title:"ProxyFactoryInitializable",description:"Functions",source:"@site/versioned_docs/version-0.3.3/smart-contracts/utils/ProxyFactoryInitializable.md",sourceDirName:"smart-contracts/utils",slug:"/smart-contracts/utils/ProxyFactoryInitializable",permalink:"/yearn-devdocs/v2/0.3.3/smart-contracts/utils/ProxyFactoryInitializable",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.3.3/smart-contracts/utils/ProxyFactoryInitializable.md",tags:[],version:"0.3.3",frontMatter:{},sidebar:"version-0.3.3/mySidebar",previous:{title:"TokenNoReturn",permalink:"/yearn-devdocs/v2/0.3.3/smart-contracts/test/TokenNoReturn"},next:{title:"Vault.vy",permalink:"/yearn-devdocs/v2/0.3.3/smart-contracts/vault"}},c=[{value:"Functions",id:"functions",children:[{value:"deployMinimal",id:"deployminimal",children:[]},{value:"_getRevertMsg",id:"_getrevertmsg",children:[]},{value:"slice",id:"slice",children:[]}]},{value:"Events",id:"events",children:[{value:"ProxyCreated",id:"proxycreated",children:[]}]}],u={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"deployminimal"},"deployMinimal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function deployMinimal(\n  ) external returns (address proxy, bytes returnData)\n")),(0,i.kt)("h3",{id:"_getrevertmsg"},"_getRevertMsg"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _getRevertMsg(\n    bytes _res\n  ) internal returns (string)\n")),(0,i.kt)("p",null,"This is needed in order to get the human-readable revert message from a call"),(0,i.kt)("p",null,"Get the revert message from a call"),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"_res")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Response of the call")))),(0,i.kt)("h4",{id:"return-values"},"Return Values:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Revert")),(0,i.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"message string")))),(0,i.kt)("h3",{id:"slice"},"slice"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function slice(\n  ) internal returns (bytes)\n")),(0,i.kt)("h2",{id:"events"},"Events"),(0,i.kt)("h3",{id:"proxycreated"},"ProxyCreated"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  event ProxyCreated(\n  )\n")))}p.isMDXComponent=!0}}]);