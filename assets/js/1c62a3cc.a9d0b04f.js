"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[4371],{3905:(e,t,n)=>{n.d(t,{kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,g=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},l=void 0,s={unversionedId:"smart-contracts/VaultAPI",id:"version-0.3.5/smart-contracts/VaultAPI",title:"VaultAPI",description:"Functions",source:"@site/versioned_docs/version-0.3.5/smart-contracts/VaultAPI.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/VaultAPI",permalink:"/vaults/0.3.5/smart-contracts/VaultAPI",draft:!1,editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.3.5/smart-contracts/VaultAPI.md",tags:[],version:"0.3.5",frontMatter:{},sidebar:"version-0.3.5/mySidebar",previous:{title:"StrategyAPI",permalink:"/vaults/0.3.5/smart-contracts/StrategyAPI"},next:{title:"Registry.vy",permalink:"/vaults/0.3.5/smart-contracts/registry"}},o={},u=[{value:"Functions",id:"functions",level:2},{value:"name",id:"name",level:3},{value:"symbol",id:"symbol",level:3},{value:"decimals",id:"decimals",level:3},{value:"apiVersion",id:"apiversion",level:3},{value:"permit",id:"permit",level:3},{value:"deposit",id:"deposit",level:3},{value:"deposit",id:"deposit-1",level:3},{value:"deposit",id:"deposit-2",level:3},{value:"withdraw",id:"withdraw",level:3},{value:"withdraw",id:"withdraw-1",level:3},{value:"withdraw",id:"withdraw-2",level:3},{value:"token",id:"token",level:3},{value:"strategies",id:"strategies",level:3},{value:"pricePerShare",id:"pricepershare",level:3},{value:"totalAssets",id:"totalassets",level:3},{value:"depositLimit",id:"depositlimit",level:3},{value:"maxAvailableShares",id:"maxavailableshares",level:3},{value:"creditAvailable",id:"creditavailable",level:3},{value:"debtOutstanding",id:"debtoutstanding",level:3},{value:"expectedReturn",id:"expectedreturn",level:3},{value:"report",id:"report",level:3},{value:"revokeStrategy",id:"revokestrategy",level:3},{value:"governance",id:"governance",level:3},{value:"management",id:"management",level:3},{value:"guardian",id:"guardian",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function name(\n  ) external returns (string)\n")),(0,r.kt)("h3",{id:"symbol"},"symbol"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function symbol(\n  ) external returns (string)\n")),(0,r.kt)("h3",{id:"decimals"},"decimals"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function decimals(\n  ) external returns (uint256)\n")),(0,r.kt)("h3",{id:"apiversion"},"apiVersion"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function apiVersion(\n  ) external returns (string)\n")),(0,r.kt)("h3",{id:"permit"},"permit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function permit(\n  ) external returns (bool)\n")),(0,r.kt)("h3",{id:"deposit"},"deposit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function deposit(\n  ) external returns (uint256)\n")),(0,r.kt)("h3",{id:"deposit-1"},"deposit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function deposit(\n  ) external returns (uint256)\n")),(0,r.kt)("h3",{id:"deposit-2"},"deposit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function deposit(\n  ) external returns (uint256)\n")),(0,r.kt)("h3",{id:"withdraw"},"withdraw"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function withdraw(\n  ) external returns (uint256)\n")),(0,r.kt)("h3",{id:"withdraw-1"},"withdraw"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function withdraw(\n  ) external returns (uint256)\n")),(0,r.kt)("h3",{id:"withdraw-2"},"withdraw"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function withdraw(\n  ) external returns (uint256)\n")),(0,r.kt)("h3",{id:"token"},"token"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function token(\n  ) external returns (address)\n")),(0,r.kt)("h3",{id:"strategies"},"strategies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function strategies(\n  ) external returns (struct StrategyParams)\n")),(0,r.kt)("h3",{id:"pricepershare"},"pricePerShare"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function pricePerShare(\n  ) external returns (uint256)\n")),(0,r.kt)("h3",{id:"totalassets"},"totalAssets"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function totalAssets(\n  ) external returns (uint256)\n")),(0,r.kt)("h3",{id:"depositlimit"},"depositLimit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function depositLimit(\n  ) external returns (uint256)\n")),(0,r.kt)("h3",{id:"maxavailableshares"},"maxAvailableShares"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function maxAvailableShares(\n  ) external returns (uint256)\n")),(0,r.kt)("h3",{id:"creditavailable"},"creditAvailable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function creditAvailable(\n  ) external returns (uint256)\n")),(0,r.kt)("p",null,"View how much the Vault would increase this Strategy's borrow limit,\nbased on its present performance (since its last report). Can be used to\ndetermine expectedReturn in your Strategy."),(0,r.kt)("h3",{id:"debtoutstanding"},"debtOutstanding"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function debtOutstanding(\n  ) external returns (uint256)\n")),(0,r.kt)("p",null,"View how much the Vault would like to pull back from the Strategy,\nbased on its present performance (since its last report). Can be used to\ndetermine expectedReturn in your Strategy."),(0,r.kt)("h3",{id:"expectedreturn"},"expectedReturn"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function expectedReturn(\n  ) external returns (uint256)\n")),(0,r.kt)("p",null,"View how much the Vault expect this Strategy to return at the current\nblock, based on its present performance (since its last report). Can be\nused to determine expectedReturn in your Strategy."),(0,r.kt)("h3",{id:"report"},"report"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function report(\n  ) external returns (uint256)\n")),(0,r.kt)("p",null,"This is the main contact point where the Strategy interacts with the\nVault. It is critical that this call is handled as intended by the\nStrategy. Therefore, this function will be called by BaseStrategy to\nmake sure the integration is correct."),(0,r.kt)("h3",{id:"revokestrategy"},"revokeStrategy"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function revokeStrategy(\n  ) external\n")),(0,r.kt)("p",null,'This function should only be used in the scenario where the Strategy is\nbeing retired but no migration of the positions are possible, or in the\nextreme scenario that the Strategy needs to be put into "Emergency Exit"\nmode in order for it to exit as quickly as possible. The latter scenario\ncould be for any reason that is considered "critical" that the Strategy\nexits its position as fast as possible, such as a sudden change in\nmarket conditions leading to losses, or an imminent failure in an\nexternal dependency.'),(0,r.kt)("h3",{id:"governance"},"governance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function governance(\n  ) external returns (address)\n")),(0,r.kt)("p",null,"View the governance address of the Vault to assert privileged functions\ncan only be called by governance. The Strategy serves the Vault, so it\nis subject to governance defined by the Vault."),(0,r.kt)("h3",{id:"management"},"management"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function management(\n  ) external returns (address)\n")),(0,r.kt)("p",null,"View the management address of the Vault to assert privileged functions\ncan only be called by management. The Strategy serves the Vault, so it\nis subject to management defined by the Vault."),(0,r.kt)("h3",{id:"guardian"},"guardian"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"  function guardian(\n  ) external returns (address)\n")),(0,r.kt)("p",null,"View the guardian address of the Vault to assert privileged functions\ncan only be called by guardian. The Strategy serves the Vault, so it\nis subject to guardian defined by the Vault."))}c.isMDXComponent=!0}}]);