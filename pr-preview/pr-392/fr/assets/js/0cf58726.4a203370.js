"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5646],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2388:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const a={sidebar_label:"Mocha Testnet"},i="Mocha Testnet",l={unversionedId:"nodes/mocha-testnet",id:"nodes/mocha-testnet",title:"Mocha Testnet",description:"mocha-testnet",source:"@site/docs/nodes/mocha-testnet.md",sourceDirName:"nodes",slug:"/nodes/mocha-testnet",permalink:"/pr-preview/pr-392/fr/nodes/mocha-testnet",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/mocha-testnet.md",tags:[],version:"current",frontMatter:{sidebar_label:"Mocha Testnet"},sidebar:"nodes",previous:{title:"Arabica Devnet",permalink:"/pr-preview/pr-392/fr/nodes/arabica-devnet"},next:{title:"Quick Start",permalink:"/pr-preview/pr-392/fr/nodes/quick-start"}},s={},c=[{value:"RPC endpoints",id:"rpc-endpoints",level:2},{value:"API endpoints",id:"api-endpoints",level:2},{value:"GRPC endpoints",id:"grpc-endpoints",level:2},{value:"Mocha Testnet faucet",id:"mocha-testnet-faucet",level:2},{value:"Explorers",id:"explorers",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mocha-testnet"},"Mocha Testnet"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mocha-testnet",src:n(1514).Z,width:"3000",height:"1500"})),(0,o.kt)("p",null,"This guide contains the relevant sections for how to connect to Mocha,\ndepending on the type of node you are running. Mocha Testnet is designed\nto help validators test out their infrastructure and node software.\nDevelopers are encouraged to deploy their\nsovereign rollups on Mocha, but we also recommend ",(0,o.kt)("a",{parentName:"p",href:"./arabica-devnet"},"Arabica Devnet"),"\nfor that as it is designed for development purposes."),(0,o.kt)("p",null,"Mocha is a milestone in Celestia, allowing everyone to test out\ncore functionalities on the network. Read the anouncement ",(0,o.kt)("a",{parentName:"p",href:"https://blog.celestia.org/celestia-testnet-introduces-alpha-data-availability-api/"},"here"),".\nYour best approach to participating is to first determine which node\nyou would like to run. Each node guides will link to the relevant network\nin order to show you how to connect to them."),(0,o.kt)("p",null,"You have a list of options on the type of nodes you can run in order to\nparticipate in Mocha:"),(0,o.kt)("p",null,"Consensus:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./validator-node"},"Validator Node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./consensus-full-node"},"Consensus Full Node"))),(0,o.kt)("p",null,"Data Availability:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./bridge-node"},"Bridge Node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./full-storage-node"},"Full Storage Node")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./light-node"},"Light Node"))),(0,o.kt)("p",null,"Select the type of node you would like to run and follow the instructions\non each respective page. Whenever you are asked to select the type of network\nyou want to connect to in those guides, select ",(0,o.kt)("inlineCode",{parentName:"p"},"Mocha")," in order to refer\nto the correct instructions on this page on how to connect to Mocha."),(0,o.kt)("h2",{id:"rpc-endpoints"},"RPC endpoints"),(0,o.kt)("p",null,"There is a list of RPC endpoints you can use to connect to Mocha Testnet:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://rpc-mocha.pops.one"},"https://rpc-mocha.pops.one"))),(0,o.kt)("h2",{id:"api-endpoints"},"API endpoints"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://api-mocha.pops.one"},"https://api-mocha.pops.one"))),(0,o.kt)("h2",{id:"grpc-endpoints"},"GRPC endpoints"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://grpc-mocha.pops.one"},"https://grpc-mocha.pops.one"))),(0,o.kt)("h2",{id:"mocha-testnet-faucet"},"Mocha Testnet faucet"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"USING THIS FAUCET DOES NOT ENTITLE YOU TO ANY AIRDROP OR OTHER\nDISTRIBUTION OF MAINNET CELESTIA TOKENS. MAINNET CELESTIA TOKENS\nDO NOT CURRENTLY EXIST AND THERE ARE NO PUBLIC SALES OR OTHER PUBLIC\nDISTRIBUTIONS OF ANY MAINNET CELESTIA TOKENS.")),(0,o.kt)("p",null,"You can request from Mocha Testnet Faucet on the #mocha-faucet channel on\nCelestia's Discord server with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"$request <CELESTIA-ADDRESS>\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"<CELESTIA-ADDRESS>")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia1******")," generated address."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Faucet has a limit of 10 tokens per week per address/Discord ID")),(0,o.kt)("h2",{id:"explorers"},"Explorers"),(0,o.kt)("p",null,"There are several explorers you can use for Mocha:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://testnet.mintscan.io/celestia-testnet"},"https://testnet.mintscan.io/celestia-testnet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://celestia.explorers.guru/"},"https://celestia.explorers.guru/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://celestiascan.vercel.app/"},"https://celestiascan.vercel.app/"))))}u.isMDXComponent=!0},1514:function(e,t,n){t.Z=n.p+"assets/images/mocha-57e8627f3a1ad8d70c559a19553f439d.jpg"}}]);