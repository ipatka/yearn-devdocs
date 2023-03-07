"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[2195],{3905:(e,t,a)=>{a.d(t,{kt:()=>u});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,N=o(e,["components","mdxType","originalType","parentName"]),u=m(a),k=l,d=u["".concat(p,".").concat(k)]||u[k]||s[k]||i;return a?n.createElement(d,r(r({ref:t},N),{},{components:a})):n.createElement(d,r({ref:t},N))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=N;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var m=2;m<i;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},9291:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>N,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(7462),l=(a(7294),a(3905));const i={},r="Naming Conventions",o={unversionedId:"process-and-procedures/naming-convention",id:"version-0.4.2/process-and-procedures/naming-convention",title:"Naming Conventions",description:"&nbsp;",source:"@site/versioned_docs/version-0.4.2/process-and-procedures/naming-convention.md",sourceDirName:"process-and-procedures",slug:"/process-and-procedures/naming-convention",permalink:"/vaults/0.4.2/process-and-procedures/naming-convention",draft:!1,editUrl:"https://github.com/yearn/yearn-devdocs/edit/master/website/versioned_docs/version-0.4.2/process-and-procedures/naming-convention.md",tags:[],version:"0.4.2",frontMatter:{},sidebar:"version-0.4.2/mySidebar",previous:{title:"Emergency Procedures for Yearn Finance",permalink:"/vaults/0.4.2/process-and-procedures/emergency"},next:{title:"BaseStrategy",permalink:"/vaults/0.4.2/smart-contracts/BaseStrategy"}},p={},m=[{value:"yVaults",id:"yvaults",level:2},{value:"Dev Cheat Sheet (Examples)",id:"dev-cheat-sheet-examples",level:3},{value:"Overview and Explanation",id:"overview-and-explanation",level:3},{value:"yVault Want Token",id:"yvault-want-token",level:2},{value:"yUSD",id:"yusd",level:2},{value:"yEarn",id:"yearn",level:2},{value:"Test Products",id:"test-products",level:2},{value:"Future Products",id:"future-products",level:2}],s={toc:m};function N(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"naming-conventions"},"Naming Conventions"),(0,l.kt)("h2",{id:"yvaults"},"yVaults"),(0,l.kt)("h3",{id:"dev-cheat-sheet-examples"},"Dev Cheat Sheet (Examples)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Vanilla ERC20 tokens"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"${token.symbol()} or override yVault")),(0,l.kt)("li",{parentName:"ul"},"Symbol: ",(0,l.kt)("inlineCode",{parentName:"li"},"yv${token.symbol()} or override"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"USDC yVault"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yvUSDC"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"aLINK yVault"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yvaLINK")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"LP positions"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Curve"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"Curve + pool + Pool yVault"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Curve sBTC Pool yVault"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Curve 3pool yVault"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Curve Y Pool yVault")))),(0,l.kt)("li",{parentName:"ul"},"Symbol: ",(0,l.kt)("inlineCode",{parentName:"li"},"yvCurve-pool"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"yvCurve-sBTC"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yvCurve-3pool"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yvCurve-Y"),". We make an exception for the last one and call it ",(0,l.kt)("inlineCode",{parentName:"li"},"yUSD"),"."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Uniswap"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"Uniswap + v${self.version()} + TOKEN-TOKEN + LP yVault"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Uniswap v2 USDT-WETH LP yVault"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Uniswap v2 WBTC-WETH LP yVault")))),(0,l.kt)("li",{parentName:"ul"},"Symbol: ",(0,l.kt)("inlineCode",{parentName:"li"},"yvUni-TOKEN-TOKEN"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"yvUni-USDT-WETH"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yvUni-WBTC-WETH")))),(0,l.kt)("li",{parentName:"ul"},"Note: Version was included for Uniswap LP tokens to help limit confusion between UNI-v2 LP tokens and upcoming UNI-v3 LP tokens."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Balancer"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"Balancer + TOKEN-TOKEN + Pool yVault"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Balancer USDT-WETH Pool yVault"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Balancer WBTC-WETH Pool yVault")))),(0,l.kt)("li",{parentName:"ul"},"Symbol: ",(0,l.kt)("inlineCode",{parentName:"li"},"yvBal-TOKEN-TOKEN"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"yvBal-USDT-WETH"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yvBal-WBTC-WETH")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SushiSwap"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"SushiSwap + TOKEN-TOKEN + LP yVault"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"SushiSwap USDT-WETH LP yVault"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Uniswap v2 WBTC-WETH LP yVault")))),(0,l.kt)("li",{parentName:"ul"},"Symbol: ",(0,l.kt)("inlineCode",{parentName:"li"},"yvSushi-TOKEN-TOKEN"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"yvSushi-USDT-WETH"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yvSushi-WBTC-WETH")))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Experimental"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"No hard rules for ",(0,l.kt)("inlineCode",{parentName:"li"},"name")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"symbol"),", just be sure to end ",(0,l.kt)("inlineCode",{parentName:"li"},"name"),' with "yVault".',(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"yveCRV-DAO yVault"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yveCRV-DAO"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"St. Banteg of Yearn Patron of Plebs Lido St. Ether yVault"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"sboypoplyvstETH"))))))),(0,l.kt)("h3",{id:"overview-and-explanation"},"Overview and Explanation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Acceptable alternative names include Yearn Vaults, or informally referring to the product as vaults."),(0,l.kt)("li",{parentName:"ul"},"When referring to a specific yVault, the preferred name is generally ",(0,l.kt)("inlineCode",{parentName:"li"},"TOKEN + yVault"),"; this matches the ",(0,l.kt)("inlineCode",{parentName:"li"},"name")," field on the yVault contract. However, it is also acceptable to use ",(0,l.kt)("inlineCode",{parentName:"li"},"yvTOKEN + Vault"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Yearn + TOKEN + Vault")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"yvTOKEN"),"; the latter matches ",(0,l.kt)("inlineCode",{parentName:"li"},"symbol")," in the contract.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"DAI yVault"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yvDAI Vault"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Yearn DAI Vault"),", or simply ",(0,l.kt)("inlineCode",{parentName:"li"},"yvDAI")))),(0,l.kt)("li",{parentName:"ul"},"For each yVault, name and symbol conventions are as follows:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"${token.symbol()} or override yVault")),(0,l.kt)("li",{parentName:"ul"},"Symbol: ",(0,l.kt)("inlineCode",{parentName:"li"},"yv${token.symbol()} or override")))),(0,l.kt)("li",{parentName:"ul"},"A ",(0,l.kt)("inlineCode",{parentName:"li"},"version")," field is included in the token contract to correspond to the major yVault release version.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Additionally, developers may find it useful to denote ",(0,l.kt)("inlineCode",{parentName:"li"},"version")," within the ",(0,l.kt)("inlineCode",{parentName:"li"},"name")," field itself to help clarify the token to be deposited. Useful examples include Uniswap LPs (below), and also v1 vs v2 Aave aTokens."))),(0,l.kt)("li",{parentName:"ul"},"The predominant use case for name and symbol override is for LP tokens. The use of the term ",(0,l.kt)("inlineCode",{parentName:"li"},"Pool")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"LP")," is interchangeable, and will be selected based on colloquial use for each protocol.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"For instance, Curve and Balancer LP positions are typically referred to as pools since they can contain more than two tokens, while Uniswap and SushiSwap positions are typically referred to as LPs."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Curve"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"Curve + pool + Pool yVault"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Curve sBTC Pool yVault"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Curve 3pool yVault"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Curve Y Pool yVault")),(0,l.kt)("li",{parentName:"ul"},"In this case, ",(0,l.kt)("inlineCode",{parentName:"li"},"pool")," is taken directly from Curve.fi's UI, and we can adjust for capitalization as needed. In the case of the ",(0,l.kt)("inlineCode",{parentName:"li"},"3pool"),', the redundant "Pool" is removed.'))),(0,l.kt)("li",{parentName:"ul"},"Symbol: ",(0,l.kt)("inlineCode",{parentName:"li"},"yvCurve-pool"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"yvCurve-sBTC"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yvCurve-3pool"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yvCurve-Y")))),(0,l.kt)("li",{parentName:"ul"},"Note: In this methodology, ",(0,l.kt)("inlineCode",{parentName:"li"},"yvCurve-Y")," refers to the vault previously known as ",(0,l.kt)("inlineCode",{parentName:"li"},"yUSD"),". Please see below for a more detailed discussion on proper use of ",(0,l.kt)("inlineCode",{parentName:"li"},"yUSD"),"."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Uniswap"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"Uniswap + v${self.version()} + TOKEN-TOKEN + LP yVault"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Uniswap v2 USDT-WETH LP yVault"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Uniswap v2 WBTC-WETH LP yVault")))),(0,l.kt)("li",{parentName:"ul"},"Symbol: ",(0,l.kt)("inlineCode",{parentName:"li"},"yvUni-TOKEN-TOKEN"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"yvUni-USDT-WETH"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yvUni-WBTC-WETH")))),(0,l.kt)("li",{parentName:"ul"},"Note: Version was included for Uniswap LP tokens to help limit confusion between UNI-v2 LP tokens and upcoming UNI-v3 LP tokens."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Balancer"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"Balancer + TOKEN-TOKEN + Pool yVault"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Balancer USDT-WETH Pool yVault"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Balancer WBTC-WETH Pool yVault")))),(0,l.kt)("li",{parentName:"ul"},"Symbol: ",(0,l.kt)("inlineCode",{parentName:"li"},"yvBal-TOKEN-TOKEN"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"yvBal-USDT-WETH"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yvBal-WBTC-WETH")))),(0,l.kt)("li",{parentName:"ul"},"Note: Since Balancer allows more than two tokens per pool, append as many ",(0,l.kt)("inlineCode",{parentName:"li"},"TOKEN")," as needed for the pool in question."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SushiSwap"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"SushiSwap + TOKEN-TOKEN + LP yVault"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"SushiSwap USDT-WETH LP yVault"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Uniswap v2 WBTC-WETH LP yVault")))),(0,l.kt)("li",{parentName:"ul"},"Symbol: ",(0,l.kt)("inlineCode",{parentName:"li"},"yvSushi-TOKEN-TOKEN"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"yvSushi-USDT-WETH"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yvSushi-WBTC-WETH"))))))))),(0,l.kt)("h2",{id:"yvault-want-token"},"yVault Want Token"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In Yearn's UI, it may be useful to denote the desired token to deposit into a specific yVault. For basic ERC20 ",(0,l.kt)("inlineCode",{parentName:"li"},"want")," tokens, ",(0,l.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"symbol")," can be pulled directly from the token contract and utilized as-is.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"USD Coin"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"USDC"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"ChainLink Token"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"LINK")))),(0,l.kt)("li",{parentName:"ul"},"However, for LP positions, naming needs to be standardized.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Curve",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"Curve + pool + Pool"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Curve sBTC Pool"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Curve 3pool"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Curve Y Pool"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Curve Compound Pool")),(0,l.kt)("li",{parentName:"ul"},"In this case, ",(0,l.kt)("inlineCode",{parentName:"li"},"pool")," is taken directly from Curve.fi's UI, and we can adjust for capitalization as needed. In the case of the ",(0,l.kt)("inlineCode",{parentName:"li"},"3pool"),', the redundant "Pool" is removed.'))),(0,l.kt)("li",{parentName:"ul"},"Symbol: ",(0,l.kt)("inlineCode",{parentName:"li"},"crvPOOL or override"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"crvBUSD"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"crvCOMP"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"crvGUSD"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"crvMUSD"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"crvTBTC"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"crvSBTC"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yCRV"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"3Crv")))),(0,l.kt)("li",{parentName:"ul"},"These names were chosen as ",(0,l.kt)("inlineCode",{parentName:"li"},"crvBUSD")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"crvSBTC")," are already fairly widely used, and applying this formula works well for other pools. ",(0,l.kt)("inlineCode",{parentName:"li"},"yCRV")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"3Crv")," are the allowed exceptions, as ",(0,l.kt)("inlineCode",{parentName:"li"},"yCRV")," is the most widely used name for that pool, and ",(0,l.kt)("inlineCode",{parentName:"li"},"3Crv")," usage is now fairly common with the recent admin fee distribution."))),(0,l.kt)("li",{parentName:"ul"},"Uniswap",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"Uniswap + v${self.version()} + TOKEN-TOKEN + LP"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Uniswap v2 USDT-WETH LP"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Uniswap v2 WBTC-WETH LP")))),(0,l.kt)("li",{parentName:"ul"},"Symbol: ",(0,l.kt)("inlineCode",{parentName:"li"},"TOKEN-TOKEN UNI"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"USDT-WETH UNI"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"WBTC-WETH UNI")))))),(0,l.kt)("li",{parentName:"ul"},"Balancer",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"Balancer + TOKEN-TOKEN + Pool"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"Balancer USDT-WETH Pool"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Balancer WBTC-WETH Pool")))),(0,l.kt)("li",{parentName:"ul"},"Symbol: ",(0,l.kt)("inlineCode",{parentName:"li"},"TOKEN-TOKEN BPT"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"USDT-WETH BPT"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"WBTC-WETH BPT")))),(0,l.kt)("li",{parentName:"ul"},"Note: Since Balancer allows more than two tokens per pool, append as many ",(0,l.kt)("inlineCode",{parentName:"li"},"TOKEN")," as needed for the pool in question."))),(0,l.kt)("li",{parentName:"ul"},"SushiSwap",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"SushiSwap + TOKEN-TOKEN + LP"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"SushiSwap USDT-WETH LP"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Uniswap v2 WBTC-WETH LP")))),(0,l.kt)("li",{parentName:"ul"},"Symbol: ",(0,l.kt)("inlineCode",{parentName:"li"},"TOKEN-TOKEN SLP"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"USDT-WETH SLP"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"WBTC-WETH SLP"))))))))),(0,l.kt)("h2",{id:"yusd"},"yUSD"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"While the term ",(0,l.kt)("inlineCode",{parentName:"li"},"yUSD")," was used to refer to the Curve Y Pool yVault in the past, under our updated naming convention this vault token is now ",(0,l.kt)("inlineCode",{parentName:"li"},"yvCurve-Y"),". However, usage of ",(0,l.kt)("inlineCode",{parentName:"li"},"yUSD")," is still permissable when referring to the asset itself.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Example:")," Yearn pays monthly grants in ",(0,l.kt)("inlineCode",{parentName:"li"},"yUSD"),"."))),(0,l.kt)("li",{parentName:"ul"},"In the future, if Yearn creates a new ",(0,l.kt)("inlineCode",{parentName:"li"},"yUSD")," that is a collection of several yVault tokens (as has been previously discussed), then the current ",(0,l.kt)("inlineCode",{parentName:"li"},"yUSD")," will simply be referred to as ",(0,l.kt)("inlineCode",{parentName:"li"},"yvCurve-Y")," and only the new token will be ",(0,l.kt)("inlineCode",{parentName:"li"},"yUSD"),".")),(0,l.kt)("h2",{id:"yearn"},"yEarn"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"These are Yearn's original yield-aware tokens, whose v1 and v2 contracts can be found ",(0,l.kt)("a",{parentName:"p",href:"https://docs.yearn.finance/getting-started/products/yvaults/vault-tokens#v2-yvault-tokens"},"here")," or by clicking on the etherscan icon when viewing the vault:"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/FZ0BJjf.png",alt:null}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"These products should be referred to as yEarn Tokens, ",(0,l.kt)("inlineCode",{parentName:"p"},"underlying token name + Earn"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"y{token.symbol()}v${self.version()}")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"yDAIv2"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yDAI Earn"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yBUSDv3"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yBUSD Earn"))))),(0,l.kt)("h2",{id:"test-products"},"Test Products"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For deployed contracts that have not reached their final production version, a simple modification is included to designate these on the contract level as being test products.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"${token.symbol()} or override + Test + Product")),(0,l.kt)("li",{parentName:"ul"},"Symbol: ",(0,l.kt)("inlineCode",{parentName:"li"},"yt${token.symbol()} or override")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"DAI Test yVault"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"ytDAI")))),(0,l.kt)("li",{parentName:"ul"},"Additionally, the v2 yVault contracts have upgradeable ",(0,l.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"symbol")," fields. This means that should a test contract perform well, these fields can be updated to reflect that it is no longer a test contract, removing the need to deploy new contracts.")),(0,l.kt)("h2",{id:"future-products"},"Future Products"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Future products can follow a simple naming convention: ",(0,l.kt)("inlineCode",{parentName:"li"},"y + product"),", where the product and any potential token names follow similar guidelines as above with yVaults. These can then be further modified as needed based on the product","(","s",")",".",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Examples:")," ",(0,l.kt)("inlineCode",{parentName:"li"},"ySwap"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yBorrow"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"yTrade"))))))}N.isMDXComponent=!0}}]);