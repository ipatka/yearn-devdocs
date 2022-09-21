"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[1081],{3905:(e,t,n)=>{n.d(t,{kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"smart-contracts/test/TestStrategy",id:"version-0.3.0/smart-contracts/test/TestStrategy",title:"TestStrategy",description:"Functions",source:"@site/versioned_docs/version-0.3.0/smart-contracts/test/TestStrategy.md",sourceDirName:"smart-contracts/test",slug:"/smart-contracts/test/TestStrategy",permalink:"/vaults/0.3.0/smart-contracts/test/TestStrategy",draft:!1,editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.3.0/smart-contracts/test/TestStrategy.md",tags:[],version:"0.3.0",frontMatter:{},sidebar:"version-0.3.1/mySidebar",previous:{title:"TestGuestList",permalink:"/vaults/0.3.0/smart-contracts/test/TestGuestList"},next:{title:"Token",permalink:"/vaults/0.3.0/smart-contracts/test/Token"}},l={},c=[{value:"Functions",id:"functions",level:2},{value:"constructor",id:"constructor",level:3},{value:"name",id:"name",level:3},{value:"_takeFunds",id:"_takefunds",level:3},{value:"_toggleReentrancyExploit",id:"_togglereentrancyexploit",level:3},{value:"estimatedTotalAssets",id:"estimatedtotalassets",level:3},{value:"prepareReturn",id:"preparereturn",level:3},{value:"adjustPosition",id:"adjustposition",level:3},{value:"liquidatePosition",id:"liquidateposition",level:3},{value:"prepareMigration",id:"preparemigration",level:3},{value:"protectedTokens",id:"protectedtokens",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function name(\n  ) external returns (string)\n")),(0,a.kt)("h3",{id:"_takefunds"},"_takeFunds"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _takeFunds(\n  ) public\n")),(0,a.kt)("h3",{id:"_togglereentrancyexploit"},"_toggleReentrancyExploit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _toggleReentrancyExploit(\n  ) public\n")),(0,a.kt)("h3",{id:"estimatedtotalassets"},"estimatedTotalAssets"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function estimatedTotalAssets(\n  ) public returns (uint256)\n")),(0,a.kt)("h3",{id:"preparereturn"},"prepareReturn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function prepareReturn(\n  ) internal returns (uint256 _profit, uint256 _loss, uint256 _debtPayment)\n")),(0,a.kt)("h3",{id:"adjustposition"},"adjustPosition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function adjustPosition(\n  ) internal\n")),(0,a.kt)("h3",{id:"liquidateposition"},"liquidatePosition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function liquidatePosition(\n  ) internal returns (uint256 _liquidatedAmount, uint256 _loss)\n")),(0,a.kt)("h3",{id:"preparemigration"},"prepareMigration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function prepareMigration(\n  ) internal\n")),(0,a.kt)("h3",{id:"protectedtokens"},"protectedTokens"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"  function protectedTokens(\n  ) internal returns (address[])\n")))}p.isMDXComponent=!0}}]);