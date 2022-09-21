"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[8721],{3905:(e,t,r)=>{r.d(t,{kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),y=d(r),u=a,v=y["".concat(l,".").concat(u)]||y[u]||p[u]||o;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8776:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={},i="Overview",s={unversionedId:"products/ycrv/overview",id:"products/ycrv/overview",title:"Overview",description:"yCRV is the new and improved liquid veCRV wrapper from Yearn. The yCRV system aims to advance both the simplicity and functionality of its predecessor tokens, yveCRV and yvBOOST.",source:"@site/docs/getting-started/products/ycrv/overview.md",sourceDirName:"products/ycrv",slug:"/products/ycrv/overview",permalink:"/getting-started/products/ycrv/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1663779153,formattedLastUpdatedAt:"9/21/2022",frontMatter:{},sidebar:"mySidebar",previous:{title:"How Yearn increases your yield",permalink:"/getting-started/products/yvaults/yvault-advantages"},next:{title:"FAQ",permalink:"/getting-started/products/ycrv/faq"}},l={},d=[{value:"yCRV",id:"ycrv",level:2},{value:"Staked yCRV (st-yCRV)",id:"staked-ycrv-st-ycrv",level:2},{value:"Admin Fees",id:"admin-fees",level:4},{value:"Bribes",id:"bribes",level:4},{value:"LP yCRV (lp-yCRV)",id:"lp-ycrv-lp-ycrv",level:2},{value:"Vote Locked yCRV (vl-yCRV)",id:"vote-locked-ycrv-vl-ycrv",level:2},{value:"Addresses (Ethereum)",id:"addresses-ethereum",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"yCRV is the new and improved liquid veCRV wrapper from Yearn. The yCRV system aims to advance both the simplicity and functionality of its predecessor tokens, yveCRV and yvBOOST. "),(0,a.kt)("p",null,"The system is organized into a set of 4 tokens, each representing a different position a user within the ecosystem can elect to hold:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{width:"640",height:"400",src:"https://i.imgur.com/XH05fIy.png"})),(0,a.kt)("h2",{id:"ycrv"},"yCRV"),(0,a.kt)("p",null,'yCRV is the "base token" that has no native rewards, but serves as a starting point for users in the system from which they can enter token positions (vaults) which do. Yearn will supply a handy zap contract that allows users to efficiently move into their preferred position in a single transaction.'),(0,a.kt)("p",null,"New yCRV can be minted in two ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Lock CRV (permanent 1-way lock)"),(0,a.kt)("li",{parentName:"ol"},"Migration from yveCRV (or yvBOOST via our zap)")),(0,a.kt)("p",null,"When holding yCRV, users can then choose to position into three different types of rewards:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Staking Rewards (st-yCRV) - Receive admin fees and bribes from locked CRV."),(0,a.kt)("li",{parentName:"ul"},"Liquidity Pool Rewards (lp-yCRV) - Deposit CRV/yCRV LP positions and receive autocompounded LP emissions."),(0,a.kt)("li",{parentName:"ul"},"CRV Voting Power (vl-yCRV) - Vote in Curve governance proposals.")),(0,a.kt)("h2",{id:"staked-ycrv-st-ycrv"},"Staked yCRV (st-yCRV)"),(0,a.kt)("p",null,"Staked yCRV is designed to be the yield-optimized position for yCRV users. Source of yield comes from two primary places:"),(0,a.kt)("h4",{id:"admin-fees"},"Admin Fees"),(0,a.kt)("p",null,'Every week, veCRV holders earn weekly "admin fees" from Curve protocol. Staked yCRV is where 100% of admin fees earned by Yearn\'s veCRV position are sent and auto-compounded into more yCRV.'),(0,a.kt)("h4",{id:"bribes"},"Bribes"),(0,a.kt)("p",null,"Additionally, for all the yCRV within st-yCRV, 1 veCRV worth of vote power will be used to vote in favor of the Curve gauge which optimizes bribe revenue for st-yCRV users. Bribes (or misc. revenue) collected from these votes will be allocated as supplemental yield to st-yCRV users."),(0,a.kt)("p",null,"Under the hood, st-yCRV is yet another Yearn v2 vault, allowing users to sit back, relax and have their underlying token compounded by a strategy that sells 3CRV and some claimed bribes into yCRV."),(0,a.kt)("h2",{id:"lp-ycrv-lp-ycrv"},"LP yCRV (lp-yCRV)"),(0,a.kt)("p",null,"LP yCRV is fairly straightforward. This position is for users who provide liquidity to the new CRV/yCRV pool on Curve and deposit LPs into lp-yCRV."),(0,a.kt)("p",null,"Under the hood, it is yet another v2 Yearn vault with a strategy that deposits all CRV emissions generated back into the pool to grow the position."),(0,a.kt)("p",null,"Yearn will earmark 1 veCRV worth of voting power for every 1 yCRV in this position to vote in favor of yCRV Curve gauge - increasing CRV emissions to users."),(0,a.kt)("h2",{id:"vote-locked-ycrv-vl-ycrv"},"Vote Locked yCRV (vl-yCRV)"),(0,a.kt)("p",null,"vl-yCRV is the position that users can enter which allows them to cast votes for Curve gauge weights."),(0,a.kt)("p",null,"It is the final piece of the yCRV system and is currently in the final stages of development, not yet ready for production."),(0,a.kt)("p",null,"In this position, users can vote for gauge weights only (no DAO votes). "),(0,a.kt)("p",null,"Users in this position will not earn weekly admin fees or bribes, and will be subject to a minimum 14-day lock (21-day maximum). Once the lock period is over, user is free to withdraw to yCRV if they choose and move freely within/without the yCRV ecosystem."),(0,a.kt)("p",null,"Read ",(0,a.kt)("a",{parentName:"p",href:"https://docs.yearn.finance/getting-started/products/ycrv/vl-ycrv"},"more")," about vl-yCRV"),(0,a.kt)("h2",{id:"addresses-ethereum"},"Addresses (Ethereum)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Address"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"yCrv"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x4c1317326fd8efdebdbe5e1cd052010d97723bd6"},"0x4c1317326fd8efdebdbe5e1cd052010d97723bd6"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"st-yCRV (vault)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x8a0889d47f9Aa0Fac1cC718ba34E26b867437880"},"0x8a0889d47f9Aa0Fac1cC718ba34E26b867437880"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"lp-yCRV (vault)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x61f46C65E403429266e8b569F23f70dD75d9BeE7"},"0x61f46C65E403429266e8b569F23f70dD75d9BeE7"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"vl-yCRV"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CRV/yCRV Gauge"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x9672D72D5843ca5C6b1E0CC676E106920D6a650E"},"0x9672D72D5843ca5C6b1E0CC676E106920D6a650E"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ZapYCRV.vy"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x6F3c2647f0C0fBcCbaF74c400D886033F8c6d2E6"},"0x6F3c2647f0C0fBcCbaF74c400D886033F8c6d2E6"))))),(0,a.kt)("h1",{id:"faq"},"FAQ"),(0,a.kt)("p",null,"Read yCRV FAQ ",(0,a.kt)("a",{parentName:"p",href:"https://docs.yearn.finance/getting-started/products/ycrv/faq"},"page")," for more information"))}c.isMDXComponent=!0}}]);