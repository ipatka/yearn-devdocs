"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[4510],{3905:(e,t,a)=>{a.d(t,{kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),f=c(a),u=n,h=f["".concat(o,".").concat(u)]||f[u]||l[u]||s;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<s;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5384:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const s={},i="Multisig",p={unversionedId:"multisig",id:"multisig",title:"Multisig",description:"How it works",source:"@site/docs/security/multisig.md",sourceDirName:".",slug:"/multisig",permalink:"/security/multisig",draft:!1,tags:[],version:"current",lastUpdatedAt:1646387801,formattedLastUpdatedAt:"3/4/2022",frontMatter:{},sidebar:"mySidebar",previous:{title:"Security Home",permalink:"/security/"}},o={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"Members",id:"members",level:2},{value:"History",id:"history",level:2}],l={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"multisig"},"Multisig"),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"The Multisig is implemented by a 6-of-9 multi-signature wallet. The members of the multi-signature wallet were voted in by YFI holders and are subject to change from future governance votes. Specific powers are delegated to the governance multisig, as defined by ",(0,n.kt)("a",{parentName:"p",href:"https://gov.yearn.finance/t/yip-41-temporarily-empower-multisig/3630"},"Governance 2.0"),". More information about Yearn governance and how it interacts with the multisig can be found on  and on the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.yearn.finance/resources/faq#governance"},"FAQ"),"."),(0,n.kt)("p",null,"The multisig is implemented as a Gnosis Safe. The multisig's assets, transactions, and signers can be viewed using ",(0,n.kt)("a",{parentName:"p",href:"https://gnosis-safe.io/app/eth:0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52/balances"},"Gnosis's Web UI"),". If there is a need to trustlessly audit Yearn's multisig (without trusting the Gnosis site), the Gnosis Safe web app source code can be found on Github ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/gnosis/safe-react"},"here"),". "),(0,n.kt)("h2",{id:"members"},"Members"),(0,n.kt)("p",null,"Multisig membership can be validated from the Gnosis UI ",(0,n.kt)("a",{parentName:"p",href:"https://gnosis-safe.io/app/eth:0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52/settings/owners"},"here"),".",(0,n.kt)("br",{parentName:"p"}),"\n","Cryptographic membership attestations can be validated against the PGP keys in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/yearn/yearn-security/tree/master/keys"},"yearn-security")," repository."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"0x0Cec743b8CE4Ef8802cAc0e5df18a180ed8402A7")," - Milkyklim (Yearn Finance)",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://milkyklim.keybase.pub/yearn-social-proof.txt"},"Membership attestation")," - ",(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x0Cec743b8CE4Ef8802cAc0e5df18a180ed8402A7"},"Etherscan")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"0x48f2bd7513da5Bb9F7BfD54Ea37c41650Fd5f3a3")," - Devops199fan (Saddle Finance, eGirl Capital, Venture DAO)",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/devops199fan/status/1285430347954622464"},"Membership attestation")," - ",(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x48f2bd7513da5Bb9F7BfD54Ea37c41650Fd5f3a3"},"Etherscan")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"0x6E83d6f57012D74e0F131753f8B5Ab557824507D")," - Vasily Shapovalov (p2p.org)",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/_vshapovalov/status/1299799139635679232"},"Membership attestation")," - ",(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x6E83d6f57012D74e0F131753f8B5Ab557824507D"},"Etherscan")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"0x6F2A8Ee9452ba7d336b3fba03caC27f7818AeAD6")," - Mariano Conti (nanexcool.com, prev. MakerDAO)",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/nanexcool/status/1491900804223041540"},"Membership attestation")," - ",(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x6F2A8Ee9452ba7d336b3fba03caC27f7818AeAD6"},"Etherscan")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"0x7321ED86B0Eb914b789D6A4CcBDd3bB10f367153")," - Leo Cheng (C.R.E.A.M. Finance)",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/lumbergdoteth/status/1492736002724876291"},"Membership Attestation")," - ",(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x7321ED86B0Eb914b789D6A4CcBDd3bB10f367153"},"Etherscan")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"0x74630370197b4c4795bFEeF6645ee14F8cf8997D")," - cp287 (cp0x.com)",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/kaplansky1/status/1285427247286046725"},"Membership attestation")," - ",(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x74630370197b4c4795bFEeF6645ee14F8cf8997D"},"Etherscan")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"0x757280Bd46fC5B1C8b85628E800c443525Afc09b")," - Ryan Watkins (Messari)",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x757280Bd46fC5B1C8b85628E800c443525Afc09b"},"Etherscan")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"0x7A1057E6e9093DA9C1D4C1D049609B6889fC4c67")," - Banteg (Yearn Finance)",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/bantg/status/1285426492906909696"},"Membership attestation")," - ",(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x7A1057E6e9093DA9C1D4C1D049609B6889fC4c67"},"Etherscan")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"0x99BC02c239025E431D5741cC1DbA8CE77fc51CE3")," - Daryl Lau (Not3Lau Capital)",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/Daryllautk/status/1285434908383444992"},"Membership attestation")," - ",(0,n.kt)("a",{parentName:"p",href:"https://etherscan.io/address/0x99BC02c239025E431D5741cC1DbA8CE77fc51CE3"},"Etherscan")),(0,n.kt)("h2",{id:"history"},"History"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"May 2021 - ",(0,n.kt)("a",{parentName:"li",href:"https://gov.yearn.finance/t/yip-62-change-two-multisig-signers/10758"},"YIP-62: Change Two Multisig Signers")),(0,n.kt)("li",{parentName:"ul"},"April 2021 - ",(0,n.kt)("a",{parentName:"li",href:"https://gov.yearn.finance/t/yip-61-governance-2-0/10460"},"YIP-61: Governance 2.0")),(0,n.kt)("li",{parentName:"ul"},"August 2020 - ",(0,n.kt)("a",{parentName:"li",href:"https://gov.yearn.finance/t/yip-41-temporarily-empower-multisig/3630"},"YIP-41: Temporarily Empower Multisig")),(0,n.kt)("li",{parentName:"ul"},"August 2020 - ",(0,n.kt)("a",{parentName:"li",href:"https://yips.yearn.finance/YIPS/yip-40"},"YIP-40: Replace inactive multisig signers"))))}m.isMDXComponent=!0}}]);