"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[3861],{3905:function(t,e,r){r.d(e,{Zo:function(){return d},kt:function(){return s}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var o=n.createContext({}),m=function(t){var e=n.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},d=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=m(r),s=a,k=c["".concat(o,".").concat(s)]||c[s]||f[s]||l;return r?n.createElement(k,i(i({ref:e},d),{},{components:r})):n.createElement(k,i({ref:e},d))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var m=2;m<l;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},41481:function(t,e){var r=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();var n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}return r(t,[{key:"on",value:function(t,e){this.subscriptions[t]=this.subscriptions[t]||[],this.subscriptions[t].push(e)}},{key:"off",value:function(t,e){if(this.subscriptions[t]){var r=this.subscriptions[t].findIndex((function(t){return t===e}));this.subscriptions[t].splice(r,1)}}},{key:"handleMsg",value:function(t){t.data&&t.data.type&&(this.subscriptions[t.data.type]||[]).forEach((function(e){e(t.data,t.origin,t.source)}))}},{key:"destroy",value:function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}}}]),t}(),a=n;e.Z=a;"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(n,"Receiver","src/recevier.js"),__REACT_HOT_LOADER__.register(a,"default","src/recevier.js"))},72181:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(75068),a=r(67294),l=r(45697),i=r.n(l),p=r(41481),o=function(t){function e(e){var r;return(r=t.call(this,e)||this).createRecevier=function(){r.destroyRecevier(),r.recevier=new p.Z,r.recevier.on("updateHeight",(function(t,e,n){r.iframe&&n===r.iframe.contentWindow&&(r.container.style.height=(t.msg||0)+"px",r.props.onUpdateHeight(t.msg||"#"))}))},r.destroyRecevier=function(){r.recevier&&(r.recevier.destroy(),r.recevier=null)},r.container=null,r.iframe=null,r}(0,n.Z)(e,t);var r=e.prototype;return r.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},r.componentDidUpdate=function(t){var e=t.url,r=t.disableHeightSync;t.style;e.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height||"800px"),r!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},r.componentWillUnmount=function(){this.destroyRecevier()},r.render=function(){var t=this,e=this.props,r=e.className,n=e.id,l=e.style,i=e.url;return i?a.createElement("div",{className:"bg-iframe "+r,id:n,style:Object.assign({height:800,width:"100%"},l),ref:function(e){t.container=e}},a.createElement("iframe",{src:i,style:{border:"none",width:"100%",height:"100%"},ref:function(e){t.iframe=e}})):a.createElement("div",{className:"bg-iframe empty"},"Iframe")},e}(a.PureComponent);o.displayName="bg-iframe",o.propTypes={className:i().string,disableHeightSync:i().bool,id:i().string,onUpdateHeight:i().func,style:i().object,url:i().string.isRequired},o.defaultProps={className:"",disableHeightSync:!1,id:"",onUpdateHeight:function(){},style:{},syncParam:!0,url:""}},24622:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return f},default:function(){return s}});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),i=r(72181),p=["components"],o={title:"\u4eba\u5458\u641c\u7d22\u6846",order:12},m="\u4eba\u5458\u641c\u7d22\u6846",d={unversionedId:"components/form/peopleSearch",id:"components/form/peopleSearch",title:"\u4eba\u5458\u641c\u7d22\u6846",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/peopleSearch.mdx",sourceDirName:"components/form",slug:"/components/form/peopleSearch",permalink:"/docs/components/form/peopleSearch",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/form/peopleSearch.mdx",tags:[],version:"current",frontMatter:{title:"\u4eba\u5458\u641c\u7d22\u6846",order:12},sidebar:"components",previous:{title:"\u591a\u884c\u8f93\u5165\u6846",permalink:"/docs/components/form/textInputs"},next:{title:"\u8bc4\u5206",permalink:"/docs/components/form/rateField"}},f=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],c={toc:f};function s(t){var e=t.components,r=(0,a.Z)(t,p);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u4eba\u5458\u641c\u7d22\u6846"},"\u4eba\u5458\u641c\u7d22\u6846"),(0,l.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,l.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,l.kt)(i.Z,{url:"https://pre-yida-performance3.alibaba-inc.com/developer/employee-field-v2?isRenderNav=false",mdxType:"Iframe"}),(0,l.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570\u540d"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"behavior"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8868\u5355\u72b6\u6001"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"NORMAL"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"emplIdInLabel"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5f3a\u5236\u5728 label \u4e2d\u663e\u793a\u5de5\u53f7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"defaultValue"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u521d\u59cb\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Employee/Employee[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"value"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f53\u524d\u503c"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Employee/Employee[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"fetchDataOnMount"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u5728\u6302\u8f7d\u540e\u7acb\u5373\u83b7\u53d6\u6570\u636e"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"hiddenSelected"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9009\u62e9\u540e\u662f\u5426\u7acb\u5373\u9690\u85cf\u83dc\u5355"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"multiple"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u662f\u591a\u9009\u6a21\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"onChange"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u503c\u53d1\u751f\u6539\u53d8\u65f6\u7684\u56de\u8c03",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u7b7e\u540d"),(0,l.kt)("br",null),":Function(item: Employee"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Employee[]) => void",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u53c2\u6570"),":",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"item"),": {Employee} \u6839\u636e\u5355\u9879\u6216\u591a\u9009\u72b6\u6001\u8fd4\u56de\u5355\u4e2a\u5bf9\u8c61\u6216\u6570\u7ec4\uff0c\u7ed3\u6784\u4e3a\u63a5\u53e3\u8fd4\u56de\u7684\u683c\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"onSearch"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u641c\u7d22\u65f6\u7684\u56de\u8c03",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u7b7e\u540d"),":",(0,l.kt)("br",null),"Function(value: String) => void",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u53c2\u6570"),":",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"value"),": {String} \u7528\u6237\u8f93\u5165\u7684\u5173\u952e\u8bcd"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5982\u63d0\u4f9b\u5219\u9700\u81ea\u884c\u5904\u7406\u641c\u7d22\u8fc7\u6ee4\u548c\u6570\u636e\u6e90\u53d8\u5316\uff08\u91cd\u65b0\u901a\u8fc7 props \u4f20\u5165\u7ec4\u4ef6\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"orderNum"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u9009\u4eba\u6216\u9009\u5c97\u6a21\u5f0f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4e3a 0 \u65f6\u4e3a\u9009\u4eba\u6a21\u5f0f\uff08\u4ec5\u5c55\u793a\u4e3b\u5c97\u4fe1\u606f\uff09\uff0c\u975e 0 \u4e3a\u9009\u5c97\u6a21\u5f0f\uff08\u900f\u51fa\u591a\u4e2a\u517c\u5c97\u4fe1\u606f\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"popupClassName"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5f39\u5c42\u7684 className"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"String"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"renderOption"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u5b9a\u4e49\u6e32\u67d3\u4e0b\u62c9\u9009\u9879",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u7b7e\u540d"),":",(0,l.kt)("br",null),"Function(item: Employee) => ReactNode",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u53c2\u6570"),":",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"item"),": {Employee} \u5f53\u524d\u5458\u5de5\u4fe1\u606f\u9879",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u8fd4\u56de\u503c"),":",(0,l.kt)("br",null),"{ReactNode} \u6e32\u67d3\u540e\u7684\u8282\u70b9"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"renderSelection"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u81ea\u5b9a\u4e49\u6e32\u67d3\u9009\u62e9\u7ed3\u679c",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u7b7e\u540d"),":",(0,l.kt)("br",null),"Function(item: Employee) => String",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u53c2\u6570"),":",(0,l.kt)("br",null),(0,l.kt)("em",{parentName:"td"},"item"),": {Employee} \u9009\u4e2d\u7684\u5458\u5de5\u4fe1\u606f\u9879",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u8fd4\u56de\u503c"),":",(0,l.kt)("br",null),"{String} \u8981\u5728\u7ed3\u679c\u4e2d\u5c55\u793a\u7684 label"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Function"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"searchDelay"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u641c\u7d22\u5ef6\u8fdf"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"300"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5355\u4f4d\u4e3a\u6beb\u79d2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"showSub"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u663e\u793a\u76f4\u63a5\u4e0b\u5c5e\u9009\u9879"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4ec5\u5728\u591a\u9009\u65f6\u6709\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"showAllSub"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u663e\u793a\u5168\u5458\u9009\u9879"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4ec5\u5728\u591a\u9009\u65f6\u6709\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"showAvater"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u663e\u793a\u4eba\u5458\u5934\u50cf"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"showDeptDesc"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u663e\u793a\u90e8\u95e8\u4fe1\u606f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"showEmplId"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u663e\u793a\u5de5\u53f7"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"showJobDesc"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u662f\u5426\u663e\u793a\u804c\u4f4d\u4fe1\u606f"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"showSearch"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5c55\u5f00\u540e\u662f\u5426\u80fd\u641c\u7d22"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"dataSource"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u4f20\u5165\u7684\u6570\u636e\u6e90"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Employee[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"-"),(0,l.kt)("td",{parentName:"tr",align:"left"})))))}s.isMDXComponent=!0}}]);