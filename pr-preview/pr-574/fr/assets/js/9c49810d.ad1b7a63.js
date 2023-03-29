"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2662],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},x=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(a),x=l,f=u["".concat(p,".").concat(x)]||u[x]||d[x]||n;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=x;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<n;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}x.displayName="MDXCreateElement"},3345:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var r=a(7462),l=(a(7294),a(3905));const n={sidebar_label:"Wallet with celestia-app"},i="Create a wallet with celestia-app",o={unversionedId:"developers/celestia-app-wallet",id:"developers/celestia-app-wallet",title:"Create a wallet with celestia-app",description:"For this guide, we will go over how you can generate a Celestia",source:"@site/docs/developers/celestia-app-wallet.md",sourceDirName:"developers",slug:"/developers/celestia-app-wallet",permalink:"/pr-preview/pr-574/fr/developers/celestia-app-wallet",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/celestia-app-wallet.md",tags:[],version:"current",frontMatter:{sidebar_label:"Wallet with celestia-app"},sidebar:"developers",previous:{title:"Keplr integration",permalink:"/pr-preview/pr-574/fr/developers/keplr"},next:{title:"Wallet with celestia-node",permalink:"/pr-preview/pr-574/fr/developers/celestia-node-key"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create a wallet",id:"create-a-wallet",level:2},{value:"Fund a wallet",id:"fund-a-wallet",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"create-a-wallet-with-celestia-app"},"Create a wallet with celestia-app"),(0,l.kt)("p",null,"For this guide, we will go over how you can generate a Celestia\nwallet using ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-app"),"."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/pr-preview/pr-574/fr/nodes/quick-start"},"Gone through Quick Start and Installed celestia-app"))),(0,l.kt)("p",null,"Note, you do not need to install celestia-node for this tutorial."),(0,l.kt)("h2",{id:"create-a-wallet"},"Create a wallet"),(0,l.kt)("p",null,"First, create an application CLI configuration file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd config keyring-backend test\n")),(0,l.kt)("p",null,'You can pick whatever wallet name you want.\nFor our example we used "validator" as the wallet name:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys add validator --interactive\n")),(0,l.kt)("p",null,"Save the mnemonic output as this is the only way to\nrecover your validator wallet in case you lose it!"),(0,l.kt)("p",null,"To check all your wallets you can run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys list\n")),(0,l.kt)("h2",{id:"fund-a-wallet"},"Fund a wallet"),(0,l.kt)("p",null,"For the public celestia address, you can fund the\npreviously created wallet via ",(0,l.kt)("a",{parentName:"p",href:"https://discord.gg/celestiacommunity"},"Discord"),"\nby sending this message to either the #mocha-faucet or #arabica-faucet channel:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"$request celestia1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")),(0,l.kt)("p",null,"Wait to see if you get a confirmation that the\ntokens have been successfully sent. To check if\ntokens have arrived successfully to the destination\nwallet run the command below replacing the public\naddress with your own:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd start\ncelestia-appd query bank balances celestia1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")))}d.isMDXComponent=!0}}]);