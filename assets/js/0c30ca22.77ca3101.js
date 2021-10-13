"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[7500],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(r),f=n,h=u["".concat(l,".").concat(f)]||u[f]||c[f]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2590:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i={description:"Not recommended for retail use"},s="ySwap",l={unversionedId:"r-and-d/yswap",id:"r-and-d/yswap",isDocsHomePage:!1,title:"ySwap",description:"Not recommended for retail use",source:"@site/docs/resources/r-and-d/yswap.md",sourceDirName:"r-and-d",slug:"/r-and-d/yswap",permalink:"/yearn-devdocs/resources/r-and-d/yswap",tags:[],version:"current",lastUpdatedBy:"KurogeWashu",lastUpdatedAt:1634114459,formattedLastUpdatedAt:"10/13/2021",frontMatter:{description:"Not recommended for retail use"},sidebar:"mySidebar",previous:{title:"yLiquidate",permalink:"/yearn-devdocs/resources/r-and-d/yliquidate"},next:{title:"yTrade",permalink:"/yearn-devdocs/resources/r-and-d/ytrade"}},d=[{value:"Overview",id:"overview",children:[]},{value:"Mechanics",id:"mechanics",children:[]}],p={toc:d};function c(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"yswap"},"ySwap"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://yswap.exchange/"},"ySwap")," is currently in the testing phase and not available for general use. It's an automated market maker ","(","AMM",")"," enabling single-sided liquidity and impermanent loss ","(","IL",")"," mitigation. ySwap creates decentralized trading pools ","(","similar to Uniswap",")",", which traders can buy or sell from. Additionally, users can provide liquidity using only one token, whereas on Uniswap they would need both tokens in the pool at a 50/50 ratio. This removes barriers of entry for potential liquidity providers who may not have both tokens in a pool. The following tokens are available to be traded:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"wrapped BTC:")," renBTC, wBTC, sBTC"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AAVE tokens:")," aBTC, aLEND, aMKR, aMANA, aKNC, aLINK, aUSDC, aREP, aZRX, aBAT, aDAI, aTUSD, aUSDT, aBUSD, aSUSD, aSNX"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Standard ERC-20s:")," LEND, MKR, MANA, KNC, LINK, USDC, REP, ZRX, BAT, DAI, TUSD, USDT, BUSD, SUSD, SNX,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Synthetix tokens:")," sAUD, sEUR, sCHF, sGBP, sJPY, sXAG, sXAU")),(0,o.kt)("h2",{id:"mechanics"},"Mechanics"),(0,o.kt)("p",null,"aUSD is immediately minted when a user deposits into one of the ySwap AMM pools. aUSD is a synthetic stablecoin that is pegged to the price of \\$1. The amount of aUSD minted depends on the market value of the asset deposited. Market prices are provided by ",(0,o.kt)("a",{parentName:"p",href:"https://chain.link/"},"Chainlink"),"'s decentralized oracles, therefore only coins with ",(0,o.kt)("a",{parentName:"p",href:"https://feeds.chain.link/"},"Chainlink price feeds")," are eligible to be traded. A list of the current price feeds supported by Chainlink oracles can be found ",(0,o.kt)("a",{parentName:"p",href:"https://feeds.chain.link/"},"here"),"."),(0,o.kt)("p",null,"Immediately after deposit, the deposited token and aUSD are added to the ySwap pool, and the depositor receives a LP token in return, representing his or her share of the pool. Traders make trades using the ",(0,o.kt)("a",{parentName:"p",href:"https://yswap.exchange/"},"ySwap interface"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"If a trader desires to sell aLINK for aLEND the following steps will occur:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The interface will deposit the trader's aLINK into the ySwap LINK pool;"),(0,o.kt)("li",{parentName:"ul"},"The dollar amount of the aLINK, at the time of trade, is made using the aUSD to the aLEND pool;"),(0,o.kt)("li",{parentName:"ul"},"ySwap sends the amount of aLEND purchased to the trader.")),(0,o.kt)("p",null,"The AMM is a constant product market maker ","(","CPMM",")"," and uses a bonding curve, similar in design to Uniswap. If the dollar value of the asset increases, depositors will receive the full amount of the deposit back. If the dollar value of the asset decreases, depositors will receive the full amount of the deposit back plus an additional amount in aUSD. This additional aUSD amount is meant to compensate liquidity providers for exposure to impermanent loss, which occurs during volatile price changes of assets."))}c.isMDXComponent=!0}}]);