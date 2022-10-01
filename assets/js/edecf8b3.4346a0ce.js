"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[8721],{3905:function(e,t,a){a.d(t,{kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),v=r,m=c["".concat(l,".").concat(v)]||c[v]||d[v]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8776:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return v},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={},l="Overview",u={unversionedId:"products/ycrv/overview",id:"products/ycrv/overview",title:"Overview",description:"What is yCRV",source:"@site/docs/getting-started/products/ycrv/overview.md",sourceDirName:"products/ycrv",slug:"/products/ycrv/overview",permalink:"/getting-started/products/ycrv/overview",draft:!1,tags:[],version:"current",lastUpdatedAt:1664610091,formattedLastUpdatedAt:"10/1/2022",frontMatter:{},sidebar:"mySidebar",previous:{title:"How Yearn increases your yield",permalink:"/getting-started/products/yvaults/yvault-advantages"},next:{title:"Interface Guide",permalink:"/getting-started/products/ycrv/guide"}},d={},p=[{value:"What is yCRV",id:"what-is-ycrv",level:2},{value:"Base-token",id:"base-token",level:3},{value:"&#39;Activated&#39;-tokens",id:"activated-tokens",level:3},{value:"Staked yCRV",id:"staked-ycrv",level:2},{value:"LP&#39;d yCRV/CRV",id:"lpd-ycrvcrv",level:2},{value:"Voting with yCRV",id:"voting-with-ycrv",level:2},{value:"Voting In-depth:",id:"voting-in-depth",level:3},{value:"Vote Delegation",id:"vote-delegation",level:4},{value:"Locks",id:"locks",level:4},{value:"Bribes and Incentives",id:"bribes-and-incentives",level:3},{value:"How yveCRV and veBOOST functionality was migrated to yCRV",id:"how-yvecrv-and-veboost-functionality-was-migrated-to-ycrv",level:2},{value:"Addresses",id:"addresses",level:2},{value:"Read more",id:"read-more",level:2}],c={toc:p};function v(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"what-is-ycrv"},"What is yCRV"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/ni42qE6.png",alt:null})),(0,o.kt)("h3",{id:"base-token"},"Base-token"),(0,o.kt)("p",null,"yCRV is the base-token, which carries no native rewards, but lets users easily enter into the other 'activated' tokens that do."),(0,o.kt)("p",null,"New yCRV can be minted in two ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Lock CRV in yearn (permanent 1-way lock).")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"or")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Migrate from legacy tokens ",(0,o.kt)("a",{parentName:"li",href:"#how-yvecrv-and-veboost-functionality-was-migrated-to-ycrv"},"yveCRV and yvBOOST"),".")),(0,o.kt)("p",null,"Both operations mint yCRV at a 1:1 rate. All CRV locked in this way will automatically get max-locked as veCRV to increase Yearn's veCRV position. "),(0,o.kt)("h3",{id:"activated-tokens"},"'Activated'-tokens"),(0,o.kt)("p",null,"Yearn passes all benefits of its veCRV position on to yCRV users who hold one of its ",(0,o.kt)("strong",{parentName:"p"},"activated-tokens:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#staked-ycrv"},(0,o.kt)("strong",{parentName:"a"},"st-yCRV (Staking Rewards):"))," ",(0,o.kt)("a",{parentName:"li",href:"https://medium.com/iearn/yearn-finance-explained-what-are-vaults-and-strategies-96970560432"},"yVault")," that receives admin fees and bribes from locked CRV."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#lpd-ycrvcrv"},(0,o.kt)("strong",{parentName:"a"},"lp-yCRV (Liquidity Pool Rewards):"))," yVault for CRV/yCRV LP tokens, autocompounds emissions and fees."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#voting-with-ycrv"},(0,o.kt)("strong",{parentName:"a"},"vl-yCRV (Curve Gauges Voting Power):"))," Vote power mechanism to vote on Curve gauge weights. ")),(0,o.kt)("p",null,"Users can choose to move between activated-tokens at any time depending on which benefits they want, except for vl-yCRV which has time lock ",(0,o.kt)("a",{parentName:"p",href:"#voting-with-ycrv"},"restrictions")," varying from 14 to 28 days."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/KrYztyJ.png",alt:null})),(0,o.kt)("h2",{id:"staked-ycrv"},"Staked yCRV"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/IgpIhKN.png",alt:null})),(0,o.kt)("p",null,"Staked yCRV is designed to be a 'set and forget' yield-optimized position for yCRV users. The source of yield comes from two primary places:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Admin Fees:"),' Every week, veCRV holders earn weekly "admin fees" from Curve protocol. Staked yCRV is where 100% of admin fees earned by Yearn\'s veCRV position are sent and auto-compounded into more yCRV.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Bribes:")," For all the yCRV within st-yCRV, 1 veCRV worth of vote power will be used to vote in favor of the Curve gauge which optimizes bribe revenue for st-yCRV users. Bribes (or misc. revenue) collected from these votes will be allocated as supplemental yield to st-yCRV users.")),(0,o.kt)("p",null,"Under the hood, st-yCRV is a Yearn v2 vault, allowing users to sit back, relax and have their underlying token compounded by a strategy that sells 3CRV and some claimed bribes into yCRV."),(0,o.kt)("h2",{id:"lpd-ycrvcrv"},"LP'd yCRV/CRV"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/3JNhzWR.png",alt:null})),(0,o.kt)("p",null,"Liquidity Pool'd yCRV provides liquidity to the new CRV/yCRV pool on Curve, and lp-yCRV holders receive this LP fees and emissions. When you zap to this token, under the hood, you are entering an LP position in the yCRV/CRV pool and and depositing the LP tokens into the lp-yCRV yVault."),(0,o.kt)("p",null,"This is also a Yearn v2 vault with a strategy that deposits all CRV emissions generated back into the pool to grow the position. Like st-yCRV this is designed to be a set and forget token that auto harvests and auto compound rewards."),(0,o.kt)("p",null,"Yearn will mark 1 veCRV worth of voting power for every 1 yCRV in this position to vote in favor of yCRV Curve gauge - increasing CRV emissions to users."),(0,o.kt)("h2",{id:"voting-with-ycrv"},"Voting with yCRV"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/uCwM4Pv.png",alt:null})),(0,o.kt)("p",null,"vl-yCRV is the position that users can enter which allows them to cast votes for Curve ",(0,o.kt)("a",{parentName:"p",href:"https://resources.curve.fi/reward-gauges/understanding-gauges"},"gauge")," weights."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"It is currently in the final stages of development, not yet ready for production.")),(0,o.kt)("p",null,"In this position, users can vote for gauge weights (not DAO votes)."),(0,o.kt)("p",null,"Users in this position will not earn weekly admin fees or bribes, and will be subject to a minimum 14-day lock (28-day maximum). Once the lock period is over, the user is free to withdraw to yCRV if they choose and move freely within/without the yCRV ecosystem."),(0,o.kt)("p",null,"We expect this system to be especially useful protocols that seek to boost emissions to their pool's Curve gauges without committing to a 4-year veCRV lock or repeatedly submitting large bribes."),(0,o.kt)("h3",{id:"voting-in-depth"},"Voting In-depth:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Voting periods last 14 days."),(0,o.kt)("li",{parentName:"ul"},"Users can vote on a single gauge or split their votes across multiple gauges."),(0,o.kt)("li",{parentName:"ul"},"Users must vote every period. Votes cannot carry over automatically from one period to the next."),(0,o.kt)("li",{parentName:"ul"},"Voting is all on-chain and therefore is not cost-free. Consider voting when the network is not particularly congested."),(0,o.kt)("li",{parentName:"ul"},"Votes can be added throughout the week as long as the user's balance permits."),(0,o.kt)("li",{parentName:"ul"},"Once voted on a gauge in a period, those votes cannot be removed or substituted until the next period.")),(0,o.kt)("h4",{id:"vote-delegation"},"Vote Delegation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each vl-yCRV user can assign up to one delegate who becomes eligible to cast votes on behalf of the user."),(0,o.kt)("li",{parentName:"ul"},"The purpose of delegation is to allow for multisigs to automate their voting activities each period, reducing missed votes due to slow signers or forgetfulness.")),(0,o.kt)("h4",{id:"locks"},"Locks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A vote lock lasts a minimum of 1 voting period (14 days) and no more than 28 days depending on when the vote was cast."),(0,o.kt)("li",{parentName:"ul"},"Each vote re-ups a user's lock for the remainder of the current period plus the full duration of the next period."),(0,o.kt)("li",{parentName:"ul"},"After unlock time has expired, users can withdraw from vl-yCRV and move freely within the yCRV system.",(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"620",height:"280",src:"https://i.imgur.com/p5fCVnY.png"})))),(0,o.kt)("h3",{id:"bribes-and-incentives"},"Bribes and Incentives"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"While in vl-yCRV, users forego yield from other parts of the yCRV system."),(0,o.kt)("li",{parentName:"ul"},"vl-yCRV users will not collect bribes on the gauges they vote for.")),(0,o.kt)("h2",{id:"how-yvecrv-and-veboost-functionality-was-migrated-to-ycrv"},"How yveCRV and veBOOST functionality was migrated to yCRV"),(0,o.kt)("p",null,"yveCRV and yvBOOST are being deprecated, and there is a migration path available to users. The functionality of both was integrated into ",(0,o.kt)("a",{parentName:"p",href:"#staked-ycrv"},"st-yCRV")," so if you are looking for the same benefits check the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.yearn.finance/getting-started/products/ycrv/guide"},"guide")," on how to migrate from the legacy tokens using yearn's UI"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/Htl3AgP.png",alt:null})),(0,o.kt)("h2",{id:"addresses"},"Addresses"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"yCRV:")," ",(0,o.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0xFCc5c47bE19d06BF83eB04298b026F81069ff65b"},"0xFCc5c47bE19d06BF83eB04298b026F81069ff65b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"st-yCRV (vault):"),"\t",(0,o.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x27B5739e22ad9033bcBf192059122d163b60349D"},"0x27B5739e22ad9033bcBf192059122d163b60349D")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"lp-yCRV (vault):")," ",(0,o.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0xc97232527B62eFb0D8ed38CF3EA103A6CcA4037e"},"0xc97232527B62eFb0D8ed38CF3EA103A6CcA4037e")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"vl-yCRV:")," in audit"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CRV/yCRV Curve Pool:")," ",(0,o.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x453D92C7d4263201C69aACfaf589Ed14202d83a4"},"0x453D92C7d4263201C69aACfaf589Ed14202d83a4")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ZapYCRV.vy (zapper):")," ",(0,o.kt)("a",{parentName:"li",href:"https://etherscan.io/address/0x01D7f32B6E463c96c00575fA97B8224326C6A6B9"},"0x01D7f32B6E463c96c00575fA97B8224326C6A6B9")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"yCRV Interface:")," ",(0,o.kt)("a",{parentName:"li",href:"http://y.finance/"},"http://y.finance/"))),(0,o.kt)("h2",{id:"read-more"},"Read more"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.yearn.finance/getting-started/products/ycrv/guide"},"yCRV Interface Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.yearn.finance/getting-started/products/ycrv/faq"},"yCRV FAQ"))))}v.isMDXComponent=!0}}]);