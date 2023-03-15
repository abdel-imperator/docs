"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[5867],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),k=l,m=u["".concat(p,".").concat(k)]||u[k]||d[k]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(4334),r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(3117),l=n(7294),r=n(4334),o=n(2389),i=n(7392),p=n(7094),s=n(2466),c="tabList__CuJ",d="tabItem_LNqP";function u(e){var t;const{lazy:n,block:o,defaultValue:u,values:k,groupId:m,className:y}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=k??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,i.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:v}=(0,p.U)(),[N,T]=(0,l.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=m){const e=w[m];null!=e&&e!==N&&g.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,n=C.indexOf(t),a=g[n].value;a!==N&&(x(t),T(a),null!=m&&v(m,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},y)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:E,onClick:I},o,{className:(0,r.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,l.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function k(e){const t=(0,o.Z)();return l.createElement(u,(0,a.Z)({key:String(t)},e))}},881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var a=n(3117),l=(n(7294),n(3905)),r=n(5488),o=n(5162);const i={sidebar_label:"Wallet with celestia-node"},p="Create a wallet with celestia-node",s={unversionedId:"developers/celestia-node-key",id:"developers/celestia-node-key",title:"Create a wallet with celestia-node",description:"This tutorial will go over using the cel-key utility",source:"@site/docs/developers/celestia-node-key.mdx",sourceDirName:"developers",slug:"/developers/celestia-node-key",permalink:"/pr-preview/pr-521/developers/celestia-node-key",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/celestia-node-key.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Wallet with celestia-node"},sidebar:"developers",previous:{title:"Wallet with celestia-app",permalink:"/pr-preview/pr-521/developers/celestia-app-wallet"},next:{title:"Data availability API",permalink:"/pr-preview/pr-521/category/data-availability-api"}},c={},d=[{value:"Using the <code>cel-key</code> utility",id:"using-the-cel-key-utility",level:2},{value:"Installation",id:"installation",level:3},{value:"Steps for generating node keys",id:"steps-for-generating-node-keys",level:3},{value:"Steps for exporting node keys",id:"steps-for-exporting-node-keys",level:3},{value:"Steps for importing node keys",id:"steps-for-importing-node-keys",level:3},{value:"View all options for <code>cel-key</code>",id:"view-all-options-for-cel-key",level:3},{value:"Docker and <code>cel-key</code>",id:"docker-and-cel-key",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Running your node",id:"running-your-node",level:3},{value:"Mounting existing keys to container",id:"mounting-existing-keys-to-container",level:3}],u={toc:d};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"create-a-wallet-with-celestia-node"},"Create a wallet with celestia-node"),(0,l.kt)("p",null,"This tutorial will go over using the ",(0,l.kt)("inlineCode",{parentName:"p"},"cel-key")," utility\nto generate a wallet on celestia-node."),(0,l.kt)("p",null,"While this tutorial will go over installation process\nof ",(0,l.kt)("inlineCode",{parentName:"p"},"cel-key"),", it is recommended that you complete\nthe following prerequisites first:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/pr-preview/pr-521/nodes/environment"},"Setting Up Your Environment"))),(0,l.kt)("p",null,"Once you completed the prerequisite, you can proceed with this\ntutorial."),(0,l.kt)("h2",{id:"using-the-cel-key-utility"},"Using the ",(0,l.kt)("inlineCode",{parentName:"h2"},"cel-key")," utility"),(0,l.kt)("p",null,"Inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," repository is a utility called ",(0,l.kt)("inlineCode",{parentName:"p"},"cel-key")," that uses\nthe key utility provided by Cosmos-SDK under the hood. The utility can be\nused to ",(0,l.kt)("inlineCode",{parentName:"p"},"add"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"delete"),", and manage keys for any DA node\ntype ",(0,l.kt)("inlineCode",{parentName:"p"},"(bridge || full || light)"),", or just keys in general."),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("p",null,"You need to first pull down the ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node")," repository:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\n")),(0,l.kt)("p",null,"It can be built using either of the following commands:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# dumps binary in current working directory, accessible via `./cel-key`\nmake cel-key\n")),(0,l.kt)("p",null,"or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# installs binary in GOBIN path, accessible via `cel-key`\nmake install-key\n")),(0,l.kt)("p",null,"For the purpose of this guide, we will use the ",(0,l.kt)("inlineCode",{parentName:"p"},"make cel-key")," command."),(0,l.kt)("h3",{id:"steps-for-generating-node-keys"},"Steps for generating node keys"),(0,l.kt)(r.Z,{groupId:"node-type",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"bridge",label:"Bridge",mdxType:"TabItem"},(0,l.kt)("p",null,"To generate a key for a Celestia bridge node, do the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --keyring-backend test --node.type bridge --p2p.network <network>\n")),(0,l.kt)("p",null,"This will load the key ",(0,l.kt)("inlineCode",{parentName:"p"},"<key-name>")," into the directory of the bridge node.")),(0,l.kt)(o.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,l.kt)("p",null,"To generate a key for a Celestia full node, do the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --keyring-backend test --node.type full --p2p.network <network>\n")),(0,l.kt)("p",null,"This will load the key ",(0,l.kt)("inlineCode",{parentName:"p"},"<key-name>")," into the directory of the full node.")),(0,l.kt)(o.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,l.kt)("p",null,"To generate a key for a Celestia light node, do the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --keyring-backend test --node.type light --p2p.network <network>\n")),(0,l.kt)("p",null,"This will load the key ",(0,l.kt)("inlineCode",{parentName:"p"},"<key-name>")," into the directory of the light node."))),(0,l.kt)("p",null,"Further flags you can use to customize your key are the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--node.store"),": Specifies a different directory you can use to\nsave your node data and configurations. Expects a path to a directory."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--p2p.network"),": Specifies which network you want the key for. Values\nare ",(0,l.kt)("inlineCode",{parentName:"li"},"arabica")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"mocha"),". Please note the default network will be ",(0,l.kt)("inlineCode",{parentName:"li"},"mocha"),".")),(0,l.kt)("p",null,"Keep in mind that your celestia-node will only pick up keys that\nare inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"node.store")," directory under ",(0,l.kt)("inlineCode",{parentName:"p"},"/keys")," so you should make\nsure to point ",(0,l.kt)("inlineCode",{parentName:"p"},"cel-key")," utility to the correct directory via the\n",(0,l.kt)("inlineCode",{parentName:"p"},"node.store")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"p2p.network")," flags if you have specified a custom\ndirectory or network other than Mocha."),(0,l.kt)("p",null,"Also keep in mind that if you do not specify a network with ",(0,l.kt)("inlineCode",{parentName:"p"},"--p2p.network"),",\nthe default one will always be ",(0,l.kt)("inlineCode",{parentName:"p"},"mocha"),"."),(0,l.kt)("h3",{id:"steps-for-exporting-node-keys"},"Steps for exporting node keys"),(0,l.kt)(r.Z,{groupId:"node-type",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"bridge",label:"Bridge",mdxType:"TabItem"},(0,l.kt)("p",null,"You can export a private key from the local keyring in encrypted and ASCII-armored format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key export <key-name> --keyring-backend test --node.type bridge --p2p.network <network>\n"))),(0,l.kt)(o.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,l.kt)("p",null,"You can export a private key from the local keyring in encrypted and ASCII-armored format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key export <key-name> --keyring-backend test --node.type full --p2p.network <network>\n"))),(0,l.kt)(o.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,l.kt)("p",null,"You can export a private key from the local keyring in encrypted and ASCII-armored format."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key export <key-name> --keyring-backend test --node.type light --p2p.network <network>\n")))),(0,l.kt)("h3",{id:"steps-for-importing-node-keys"},"Steps for importing node keys"),(0,l.kt)(r.Z,{groupId:"node-type",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"bridge",label:"Bridge",mdxType:"TabItem"},(0,l.kt)("p",null,"Importing from a mnemonic:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --recover --keyring-backend test --node.type bridge --p2p.network <network>\n")),(0,l.kt)("p",null,"You will then be prompted to enter your bip39 mnemonic."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add alice --recover --keyring-backend test --node.type bridge --p2p.network <network>\n"))),(0,l.kt)(o.Z,{value:"full",label:"Full",mdxType:"TabItem"},(0,l.kt)("p",null,"Importing from a mnemonic:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --recover --keyring-backend test --node.type full --p2p.network <network>\n")),(0,l.kt)("p",null,"You will then be prompted to enter your bip39 mnemonic."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add alice --recover --keyring-backend test --node.type full --p2p.network <network>\n"))),(0,l.kt)(o.Z,{value:"light",label:"Light",mdxType:"TabItem"},(0,l.kt)("p",null,"Importing from a mnemonic:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add <key-name> --recover --keyring-backend test --node.type light --p2p.network <network>\n")),(0,l.kt)("p",null,"You will then be prompted to enter your bip39 mnemonic."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key add alice --recover --keyring-backend test --node.type light --p2p.network <network>\n")))),(0,l.kt)("h3",{id:"view-all-options-for-cel-key"},"View all options for ",(0,l.kt)("inlineCode",{parentName:"h3"},"cel-key")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key --help\n")),(0,l.kt)("h2",{id:"docker-and-cel-key"},"Docker and ",(0,l.kt)("inlineCode",{parentName:"h2"},"cel-key")),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Docker installed on your machine"),(0,l.kt)("li",{parentName:"ul"},"Understanding of the ",(0,l.kt)("a",{parentName:"li",href:"/pr-preview/pr-521/nodes/docker-images"},"guide"),"\non how to run ",(0,l.kt)("inlineCode",{parentName:"li"},"celestia-node")," with Docker.")),(0,l.kt)("h3",{id:"running-your-node"},"Running your node"),(0,l.kt)("p",null,"Run the Docker image (in this example, we are using a Light Node):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name celestia-node -e NODE_TYPE=light -e P2P_NETWORK=mocha -p 26659:26659 \\\nghcr.io/celestiaorg/celestia-node:sha-747c9e5 celestia light start \\\n--core.ip https://rpc-mocha.pops.one \\\n--gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network mocha\n")),(0,l.kt)("p",null,"List active containers in another window with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,l.kt)("p",null,"The response will look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE           COMMAND                  CREATED          STATUS          PORTS      NAMES\n<container_id>   celestia-node   "/entrypoint.sh cele\u2026"   22 seconds ago   Up 21 seconds   2121/tcp   docker-compose-test-celestia-1\n')),(0,l.kt)("p",null,"Interact with the container by replacing ",(0,l.kt)("inlineCode",{parentName:"p"},"<container_id>")," for the container ID:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -ti <container_id> /bin/bash\n")),(0,l.kt)("p",null,"Now, interact with ",(0,l.kt)("inlineCode",{parentName:"p"},"cel-key")," to check for the key that was autogenerated when\nyou started the node:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./cel-key list --keyring-backend test --node.type light\n")),(0,l.kt)("p",null,"You can also export your key from the container. In the next section, you'll\nlearn how to mount existing keys to the container."),(0,l.kt)("h3",{id:"mounting-existing-keys-to-container"},"Mounting existing keys to container"),(0,l.kt)("p",null,"In this example, we'll be mounting an existing key to the container. We're also\nusing an existing image called ",(0,l.kt)("inlineCode",{parentName:"p"},"celestia-node"),". This will mount the entire\n",(0,l.kt)("inlineCode",{parentName:"p"},"/.celestia-light-<p2p_network>/keys")," directory to your image."),(0,l.kt)("p",null,"Write a ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," to accomplish this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.8'\nservices:\n  celestia:\n    image: celestia-node\n    environment:\n      - NODE_TYPE=light\n    command: celestia light start --core.ip https://rpc-mocha.pops.one --gateway --gateway.addr 127.0.0.1 --gateway.port 26659 --p2p.network mocha --keyring.accname my_celes_key\n    volumes:\n      - ${PWD}/keys:/root/.celestia-light-mocha/keys\n    ports:\n      - 26659:26659\n")),(0,l.kt)("p",null,"Start the container by running the following command in the directory with your ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,l.kt)("p",null,"List active containers in another window with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,l.kt)("p",null,"The response will look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'CONTAINER ID   IMAGE           COMMAND                  CREATED          STATUS          PORTS      NAMES\n<container_id>   celestia-node   "/entrypoint.sh cele\u2026"   22 seconds ago   Up 21 seconds   2121/tcp   docker-compose-test-celestia-1\n')),(0,l.kt)("p",null,"Interact with the container by replacing ",(0,l.kt)("inlineCode",{parentName:"p"},"<container_id>")," for the container ID:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -ti <container_id> /bin/bash\n")),(0,l.kt)("p",null,"Now, interact with ",(0,l.kt)("inlineCode",{parentName:"p"},"cel-key")," to check your address matches the address you\nexpect with the key you mounted:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'root@<container_id>:/# ./cel-key list --keyring-backend test --node.type light\nusing directory:  ~/.celestia-light-mocha/keys\n- address: celestia1wkhyhr7ngf0ayqlpnsnxg4d72hfs5453dvunm9\n  name: my_celes_key\n  pubkey: \'{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A1/NsoY0RGL7Hqt4VWLg441GQKJsZ2fBUnZXipgns8oV"}\'\n  type: local\n')))}k.isMDXComponent=!0}}]);