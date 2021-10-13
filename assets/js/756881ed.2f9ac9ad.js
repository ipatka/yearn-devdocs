"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[3941],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(o,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7273:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return d},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l={},s=void 0,o={unversionedId:"smart-contracts/VaultAPI",id:"version-0.3.4/smart-contracts/VaultAPI",isDocsHomePage:!1,title:"VaultAPI",description:"Functions",source:"@site/versioned_docs/version-0.3.4/smart-contracts/VaultAPI.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/VaultAPI",permalink:"/yearn-devdocs/v2/0.3.4/smart-contracts/VaultAPI",editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.3.4/smart-contracts/VaultAPI.md",tags:[],version:"0.3.4",frontMatter:{},sidebar:"version-0.3.4/mySidebar",previous:{title:"StrategyAPI",permalink:"/yearn-devdocs/v2/0.3.4/smart-contracts/StrategyAPI"},next:{title:"Registry.vy",permalink:"/yearn-devdocs/v2/0.3.4/smart-contracts/registry"}},d=[{value:"Functions",id:"functions",children:[{value:"name",id:"name",children:[]},{value:"symbol",id:"symbol",children:[]},{value:"decimals",id:"decimals",children:[]},{value:"apiVersion",id:"apiversion",children:[]},{value:"permit",id:"permit",children:[]},{value:"deposit",id:"deposit",children:[]},{value:"deposit",id:"deposit-1",children:[]},{value:"deposit",id:"deposit-2",children:[]},{value:"withdraw",id:"withdraw",children:[]},{value:"withdraw",id:"withdraw-1",children:[]},{value:"withdraw",id:"withdraw-2",children:[]},{value:"token",id:"token",children:[]},{value:"strategies",id:"strategies",children:[]},{value:"pricePerShare",id:"pricepershare",children:[]},{value:"totalAssets",id:"totalassets",children:[]},{value:"depositLimit",id:"depositlimit",children:[]},{value:"maxAvailableShares",id:"maxavailableshares",children:[]},{value:"creditAvailable",id:"creditavailable",children:[]},{value:"debtOutstanding",id:"debtoutstanding",children:[]},{value:"expectedReturn",id:"expectedreturn",children:[]},{value:"report",id:"report",children:[]},{value:"revokeStrategy",id:"revokestrategy",children:[]},{value:"governance",id:"governance",children:[]},{value:"management",id:"management",children:[]},{value:"guardian",id:"guardian",children:[]}]}],u={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function name(\n  ) external returns (string)\n")),(0,i.kt)("h3",{id:"symbol"},"symbol"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function symbol(\n  ) external returns (string)\n")),(0,i.kt)("h3",{id:"decimals"},"decimals"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function decimals(\n  ) external returns (uint256)\n")),(0,i.kt)("h3",{id:"apiversion"},"apiVersion"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function apiVersion(\n  ) external returns (string)\n")),(0,i.kt)("h3",{id:"permit"},"permit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function permit(\n  ) external returns (bool)\n")),(0,i.kt)("h3",{id:"deposit"},"deposit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function deposit(\n  ) external returns (uint256)\n")),(0,i.kt)("h3",{id:"deposit-1"},"deposit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function deposit(\n  ) external returns (uint256)\n")),(0,i.kt)("h3",{id:"deposit-2"},"deposit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function deposit(\n  ) external returns (uint256)\n")),(0,i.kt)("h3",{id:"withdraw"},"withdraw"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function withdraw(\n  ) external returns (uint256)\n")),(0,i.kt)("h3",{id:"withdraw-1"},"withdraw"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function withdraw(\n  ) external returns (uint256)\n")),(0,i.kt)("h3",{id:"withdraw-2"},"withdraw"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function withdraw(\n  ) external returns (uint256)\n")),(0,i.kt)("h3",{id:"token"},"token"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function token(\n  ) external returns (address)\n")),(0,i.kt)("h3",{id:"strategies"},"strategies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function strategies(\n  ) external returns (struct StrategyParams)\n")),(0,i.kt)("h3",{id:"pricepershare"},"pricePerShare"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function pricePerShare(\n  ) external returns (uint256)\n")),(0,i.kt)("h3",{id:"totalassets"},"totalAssets"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function totalAssets(\n  ) external returns (uint256)\n")),(0,i.kt)("h3",{id:"depositlimit"},"depositLimit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function depositLimit(\n  ) external returns (uint256)\n")),(0,i.kt)("h3",{id:"maxavailableshares"},"maxAvailableShares"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function maxAvailableShares(\n  ) external returns (uint256)\n")),(0,i.kt)("h3",{id:"creditavailable"},"creditAvailable"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function creditAvailable(\n  ) external returns (uint256)\n")),(0,i.kt)("p",null,"View how much the Vault would increase this Strategy's borrow limit,\nbased on its present performance (since its last report). Can be used to\ndetermine expectedReturn in your Strategy."),(0,i.kt)("h3",{id:"debtoutstanding"},"debtOutstanding"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function debtOutstanding(\n  ) external returns (uint256)\n")),(0,i.kt)("p",null,"View how much the Vault would like to pull back from the Strategy,\nbased on its present performance (since its last report). Can be used to\ndetermine expectedReturn in your Strategy."),(0,i.kt)("h3",{id:"expectedreturn"},"expectedReturn"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function expectedReturn(\n  ) external returns (uint256)\n")),(0,i.kt)("p",null,"View how much the Vault expect this Strategy to return at the current\nblock, based on its present performance (since its last report). Can be\nused to determine expectedReturn in your Strategy."),(0,i.kt)("h3",{id:"report"},"report"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function report(\n  ) external returns (uint256)\n")),(0,i.kt)("p",null,"This is the main contact point where the Strategy interacts with the\nVault. It is critical that this call is handled as intended by the\nStrategy. Therefore, this function will be called by BaseStrategy to\nmake sure the integration is correct."),(0,i.kt)("h3",{id:"revokestrategy"},"revokeStrategy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function revokeStrategy(\n  ) external\n")),(0,i.kt)("p",null,'This function should only be used in the scenario where the Strategy is\nbeing retired but no migration of the positions are possible, or in the\nextreme scenario that the Strategy needs to be put into "Emergency Exit"\nmode in order for it to exit as quickly as possible. The latter scenario\ncould be for any reason that is considered "critical" that the Strategy\nexits its position as fast as possible, such as a sudden change in\nmarket conditions leading to losses, or an imminent failure in an\nexternal dependency.'),(0,i.kt)("h3",{id:"governance"},"governance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function governance(\n  ) external returns (address)\n")),(0,i.kt)("p",null,"View the governance address of the Vault to assert privileged functions\ncan only be called by governance. The Strategy serves the Vault, so it\nis subject to governance defined by the Vault."),(0,i.kt)("h3",{id:"management"},"management"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function management(\n  ) external returns (address)\n")),(0,i.kt)("p",null,"View the management address of the Vault to assert privileged functions\ncan only be called by management. The Strategy serves the Vault, so it\nis subject to management defined by the Vault."),(0,i.kt)("h3",{id:"guardian"},"guardian"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"  function guardian(\n  ) external returns (address)\n")),(0,i.kt)("p",null,"View the guardian address of the Vault to assert privileged functions\ncan only be called by guardian. The Strategy serves the Vault, so it\nis subject to guardian defined by the Vault."))}c.isMDXComponent=!0}}]);