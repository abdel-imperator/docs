"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2228],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},987:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return a},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(3117),o=(n(7294),n(3905));const i={sidebar_label:"Quick start"},a="Quick start guide",l={unversionedId:"nodes/quick-start",id:"nodes/quick-start",title:"Quick start guide",description:"In this section, we show you how to get started",source:"@site/docs/nodes/quick-start.md",sourceDirName:"nodes",slug:"/nodes/quick-start",permalink:"/pr-preview/pr-521/fr/nodes/quick-start",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/quick-start.md",tags:[],version:"current",frontMatter:{sidebar_label:"Quick start"},sidebar:"nodes",previous:{title:"Mocha testnet",permalink:"/pr-preview/pr-521/fr/nodes/mocha-testnet"},next:{title:"Setting up environment",permalink:"/pr-preview/pr-521/fr/nodes/environment"}},s={},c=[{value:"celestia-node",id:"celestia-node",level:2},{value:"celestia-app",id:"celestia-app",level:2},{value:"Getting started",id:"getting-started",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start-guide"},"Quick start guide"),(0,o.kt)("p",null,"In this section, we show you how to get started\nwith installing the needed libraries and packages\nin Celestia to help you run a node on Celestia."),(0,o.kt)("h2",{id:"celestia-node"},"celestia-node"),(0,o.kt)("p",null,"Installing celestia-node allows you to get started with\nrunning a light node and do Data Availability Sampling."),(0,o.kt)("p",null,"Light Nodes are the best nodes to test out initially if\nyou are new to participating in Celestia."),(0,o.kt)("p",null,"celestia-node client also allows you to run other types\nof Data-Availability nodes like Bridge and Full Storage\nnodes, which will be covered in later sections."),(0,o.kt)("h2",{id:"celestia-app"},"celestia-app"),(0,o.kt)("p",null,"celestia-app is the software that allows you to run\nValidator nodes and also provide RPC endpoints."),(0,o.kt)("p",null,"celestia-app covers the Consensus layer, while celestia-node\ncovers the Data Availability layer."),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"As covered in the previous section, Celestia offers\ntwo different test networks, ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-521/fr/nodes/arabica-devnet"},"Arabica"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"/pr-preview/pr-521/fr/nodes/mocha-testnet"},"Mocha"),"."),(0,o.kt)("p",null,"If you are planning to run a light node, it is recommended\nto use Arabica, which you will find options to connecting to\nin the later sections."),(0,o.kt)("p",null,"If you plan on running a validator, your only option is to run\nyour node on Mocha."),(0,o.kt)("p",null,"In this Quick Start guide, we will go over installing both of\nthe software clients: celestia-node and celestia-app."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: If you just want to run a Light Node, you don't need to\ninstall celestia-app and can skip that part.")),(0,o.kt)("p",null,"Proceed to the next section in order to get started."))}p.isMDXComponent=!0}}]);