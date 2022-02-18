"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[1335],{71766:function(e,t,r){var a=r(97218),n=r(67294),i=(r(31877),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"dafault",width:"10%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return n.createElement(a.Z,{dataSource:e.dataSource,columns:i,pagination:!1})}},72181:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(75068),n=r(67294),i=r(45697),o=r.n(i),d=r(41481),c=function(e){function t(t){var r;return(r=e.call(this,t)||this).createRecevier=function(){r.destroyRecevier(),r.recevier=new d.Z,r.recevier.on("updateHeight",(function(e,t,a){r.iframe&&a===r.iframe.contentWindow&&(r.container.style.height=(e.msg||0)+"px",r.props.onUpdateHeight(e.msg||"#"))}))},r.destroyRecevier=function(){r.recevier&&(r.recevier.destroy(),r.recevier=null)},r.container=null,r.iframe=null,r}(0,a.Z)(t,e);var r=t.prototype;return r.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},r.componentDidUpdate=function(e){var t=e.url,r=e.disableHeightSync;e.style;t.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height||"800px"),r!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},r.componentWillUnmount=function(){this.destroyRecevier()},r.render=function(){var e=this,t=this.props,r=t.className,a=t.id,i=t.style,o=t.url;return o?n.createElement("div",{className:"bg-iframe "+r,id:a,style:Object.assign({height:800,width:"100%"},i),ref:function(t){e.container=t}},n.createElement("iframe",{src:o,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):n.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(n.PureComponent);c.displayName="bg-iframe",c.propTypes={className:o().string,disableHeightSync:o().bool,id:o().string,onUpdateHeight:o().func,style:o().object,url:o().string.isRequired},c.defaultProps={className:"",disableHeightSync:!1,id:"",onUpdateHeight:function(){},style:{},syncParam:!0,url:""}},41159:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return f}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=r(72181),d=r(71766),c=["components"],l={title:"\u6570\u5b57\u8f93\u5165\u6846",order:1},s="\u6570\u5b57\u8f93\u5165\u6846",u={unversionedId:"components/form/number",id:"components/form/number",title:"\u6570\u5b57\u8f93\u5165\u6846",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/number.mdx",sourceDirName:"components/form",slug:"/components/form/number",permalink:"/docs/components/form/number",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/form/number.mdx",tags:[],version:"current",frontMatter:{title:"\u6570\u5b57\u8f93\u5165\u6846",order:1},sidebar:"components",previous:{title:"\u89c6\u9891\u64ad\u653e",permalink:"/docs/components/basic/video"},next:{title:"\u5355\u9009",permalink:"/docs/components/form/radio"}},m=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],p={toc:m};function f(e){var t=e.components,r=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6570\u5b57\u8f93\u5165\u6846"},"\u6570\u5b57\u8f93\u5165\u6846"),(0,i.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,i.kt)(o.Z,{url:"https://pre-yida-performance3.alibaba-inc.com/developer/number-field-v2?isRenderNav=false",mdxType:"Iframe"}),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,i.kt)(d.Z,{dataSource:[{attr:"\u6807\u9898",code:"label",type:"String",demo:"\u6807\u9898",dafault:"",desc:""},{attr:"\u503c",code:"fieldData",type:"Object",demo:"{value: 1505894659813}",dafault:"",desc:""},{attr:"\u6807\u9898\u4f4d\u7f6e",code:"labelAlign",type:"String",demo:"\u201cleft\u201d",dafault:"",desc:"\u53ef\u9009\u503c\uff1a\u201cleft\u201d,\u201dtop\u201d"},{attr:"\u6807\u9898\u5bbd\u5ea6",code:"labelColSpan",type:"Number",demo:"4",dafault:"",desc:""},{attr:"\u6807\u9898\u504f\u79fb",code:"labelColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u5bbd\u5ea6",code:"wrapperColSpan",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u5185\u5bb9\u504f\u79fb",code:"wrapperColOffset",type:"Number",demo:"0",dafault:"",desc:""},{attr:"\u6807\u9898\u5bf9\u9f50",code:"labelTextAlign",type:"String",demo:"\u201cleft\u201d",dafault:"",desc:'\u53ef\u9009\u503c\uff1a\u201cleft\u201d,\u201dright"'},{attr:"\u63d0\u793a\u6587\u5b57",code:"placeholder",type:"String",demo:"\u201c\u8bf7\u9009\u62e9\u65e5\u671f\u201d",dafault:"",desc:""},{attr:"\u63cf\u8ff0\u4fe1\u606f",code:"extra",type:"String",demo:"\u8fd9\u662f\u4e00\u6bb5\u63cf\u8ff0\u4fe1\u606f",dafault:"",desc:""},{attr:"\u5c3a\u5bf8",code:"size",type:"String",demo:"\u201csmall\u201d",dafault:"",desc:'\u53ef\u9009\u503c\uff1a\u201csmall\u201d,\u201dmedium\u201d,"large"'},{attr:"\u9ed8\u8ba4\u72b6\u6001",code:"behavior",type:"String",demo:'{fieldBehavior: "NORMAL"}',dafault:"",desc:'fieldBehavior \u53ef\u9009\u503c\uff1a"NORMAL","DISABLED","READONLY","HIDDEN"'},{attr:"\u7c7b\u578b",code:"extra",type:"String",demo:'"normal"',dafault:"",desc:'\u53ef\u9009\u503c\uff1a\u201cnormal\u201d,\u201dinline" '},{attr:"\u6b65\u6570",code:"step",type:"number",demo:"1",dafault:"",desc:""},{attr:"\u5c0f\u6570\u4f4d\u6570",code:"precision",type:"Number",demo:"0 ",dafault:"",desc:""},{attr:"\u53ef\u4ee5\u8f93\u5165",code:"editable",type:"Bool",demo:"true",dafault:"",desc:""},{attr:"\u6821\u9a8c",code:"validation",type:"Array",demo:'[{type:"required"}] ',dafault:"",desc:'\u53ef\u9009\u503c\uff1a{type:"required"}, {type: "customValidate", message: "\u8bf7\u9009\u62e9\u4eca\u65e5\u4e4b\u524d\u7684\u65e5\u671f", param: "function validateRule(value) { return value <= new Date().getTime(); }"}'},{attr:"\u503c\u53d1\u751f\u6539\u53d8\u4e8b\u4ef6",code:"onChange",type:"Function",demo:"function(value){ console.log(value); }",dafault:"",desc:""}],mdxType:"AttrTable"}))}f.isMDXComponent=!0}}]);