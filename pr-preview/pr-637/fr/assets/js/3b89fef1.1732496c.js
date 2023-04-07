"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[868],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={},a="Create toolings for the Celestia Network",l={unversionedId:"nodes/itn-toolings",id:"nodes/itn-toolings",title:"Create toolings for the Celestia Network",description:"Description",source:"@site/docs/nodes/itn-toolings.md",sourceDirName:"nodes",slug:"/nodes/itn-toolings",permalink:"/pr-preview/pr-637/fr/nodes/itn-toolings",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-toolings.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging criteria",id:"judging-criteria",level:2},{value:"Submission",id:"submission",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-toolings-for-the-celestia-network"},"Create toolings for the Celestia Network"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Create any useful tool, whether it is a command-line application\nor a dashboard tooling, that will be a net-benefit for the Celestia\nnetwork, whether for validators, node operators, or developers."),(0,r.kt)("p",null,"It can target the consensus, data availability or execution layer."),(0,r.kt)("p",null,"The tool can interact with ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-app"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"celestia-node"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"rollkit"),"."),(0,r.kt)("p",null,"You can view our ",(0,r.kt)("a",{parentName:"p",href:"https://docs.celestia.org"},"documentation")," for ideas\nand inspiration."),(0,r.kt)("h2",{id:"directions"},"Directions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Submission is limited to only 1, do not submit more than one."),(0,r.kt)("li",{parentName:"ol"},"Build a tool that can help strengthens the validator community,\nwhether it is an analytics tool, a dev-tool, a command-line script,\nor a useful dashboard."),(0,r.kt)("li",{parentName:"ol"},"The tool should have supporting documentation or readme.")),(0,r.kt)("h2",{id:"judging-criteria"},"Judging criteria"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Points will be given for creativity and usefulness of the tool."),(0,r.kt)("li",{parentName:"ol"},"Github repositories must be provided and the code must be open-source."),(0,r.kt)("li",{parentName:"ol"},"If it is a command-line tool that doesn't run or compile, no point will\nbe awarded."),(0,r.kt)("li",{parentName:"ol"},"Celestia team reserves the right to judge and review tools as they\nsee fit, possibly with the help of community.")),(0,r.kt)("h2",{id:"submission"},"Submission"),(0,r.kt)("p",null,"Please submit a link to your tool."),(0,r.kt)("p",null,"Submission link can be found ",(0,r.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."))}d.isMDXComponent=!0}}]);