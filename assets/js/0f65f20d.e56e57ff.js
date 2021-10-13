"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[3659],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},681:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i={},o=void 0,c={unversionedId:"smart-contracts/yToken",id:"version-0.4.2/smart-contracts/yToken",isDocsHomePage:!1,title:"yToken",description:"Functions",source:"@site/versioned_docs/version-0.4.2/smart-contracts/yToken.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/yToken",permalink:"/yearn-devdocs/v2/0.4.2/smart-contracts/yToken",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.4.2/smart-contracts/yToken.md",tags:[],version:"0.4.2",frontMatter:{},sidebar:"version-0.4.2/mySidebar",previous:{title:"Vault.vy",permalink:"/yearn-devdocs/v2/0.4.2/smart-contracts/vault"},next:{title:"yWETH",permalink:"/yearn-devdocs/v2/0.4.2/smart-contracts/yWETH"}},s=[{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"name",id:"name",children:[]},{value:"symbol",id:"symbol",children:[]},{value:"decimals",id:"decimals",children:[]},{value:"totalSupply",id:"totalsupply",children:[]},{value:"balanceOf",id:"balanceof",children:[]},{value:"_transfer",id:"_transfer",children:[]},{value:"transfer",id:"transfer",children:[]},{value:"_approve",id:"_approve",children:[]},{value:"approve",id:"approve",children:[]},{value:"transferFrom",id:"transferfrom",children:[]},{value:"increaseAllowance",id:"increaseallowance",children:[]},{value:"decreaseAllowance",id:"decreaseallowance",children:[]},{value:"deposit",id:"deposit",children:[]},{value:"withdraw",id:"withdraw",children:[]},{value:"_permitAll",id:"_permitall",children:[]},{value:"permitAll",id:"permitall",children:[]},{value:"migrate",id:"migrate",children:[]},{value:"migrate",id:"migrate-1",children:[]},{value:"migrate",id:"migrate-2",children:[]},{value:"migrate",id:"migrate-3",children:[]},{value:"migrate",id:"migrate-4",children:[]},{value:"migrate",id:"migrate-5",children:[]},{value:"revokeAll",id:"revokeall",children:[]}]}],u={toc:s};function d(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function constructor(\n  ) public\n")),(0,l.kt)("h3",{id:"name"},"name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function name(\n  ) external returns (string)\n")),(0,l.kt)("h3",{id:"symbol"},"symbol"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function symbol(\n  ) external returns (string)\n")),(0,l.kt)("h3",{id:"decimals"},"decimals"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function decimals(\n  ) external returns (uint256)\n")),(0,l.kt)("h3",{id:"totalsupply"},"totalSupply"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function totalSupply(\n  ) external returns (uint256 total)\n")),(0,l.kt)("h3",{id:"balanceof"},"balanceOf"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function balanceOf(\n  ) external returns (uint256 balance)\n")),(0,l.kt)("h3",{id:"_transfer"},"_transfer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _transfer(\n  ) internal\n")),(0,l.kt)("h3",{id:"transfer"},"transfer"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function transfer(\n  ) public returns (bool)\n")),(0,l.kt)("h3",{id:"_approve"},"_approve"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _approve(\n  ) internal\n")),(0,l.kt)("h3",{id:"approve"},"approve"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function approve(\n  ) public returns (bool)\n")),(0,l.kt)("h3",{id:"transferfrom"},"transferFrom"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function transferFrom(\n  ) public returns (bool)\n")),(0,l.kt)("h3",{id:"increaseallowance"},"increaseAllowance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function increaseAllowance(\n  ) public returns (bool)\n")),(0,l.kt)("h3",{id:"decreaseallowance"},"decreaseAllowance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function decreaseAllowance(\n  ) public returns (bool)\n")),(0,l.kt)("h3",{id:"deposit"},"deposit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function deposit(\n  ) external returns (uint256)\n")),(0,l.kt)("h3",{id:"withdraw"},"withdraw"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function withdraw(\n  ) external returns (uint256)\n")),(0,l.kt)("h3",{id:"_permitall"},"_permitAll"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function _permitAll(\n  ) internal\n")),(0,l.kt)("h3",{id:"permitall"},"permitAll"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function permitAll(\n  ) public\n")),(0,l.kt)("h3",{id:"migrate"},"migrate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function migrate(\n  ) external returns (uint256)\n")),(0,l.kt)("h3",{id:"migrate-1"},"migrate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function migrate(\n  ) external returns (uint256)\n")),(0,l.kt)("h3",{id:"migrate-2"},"migrate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function migrate(\n  ) external returns (uint256)\n")),(0,l.kt)("h3",{id:"migrate-3"},"migrate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function migrate(\n  ) external returns (uint256)\n")),(0,l.kt)("h3",{id:"migrate-4"},"migrate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function migrate(\n  ) external returns (uint256)\n")),(0,l.kt)("h3",{id:"migrate-5"},"migrate"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function migrate(\n  ) external returns (uint256)\n")),(0,l.kt)("h3",{id:"revokeall"},"revokeAll"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"  function revokeAll(\n  ) external\n")))}d.isMDXComponent=!0}}]);