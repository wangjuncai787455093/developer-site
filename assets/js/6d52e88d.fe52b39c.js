"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[898],{71766:function(e,t,n){var i=n(97218),a=n(67294),r=(n(31877),[{title:"\u5c5e\u6027\u540d",dataIndex:"attr",width:"20%"},{title:"\u5c5e\u6027Code",dataIndex:"code",width:"10%"},{title:"\u7c7b\u578b",dataIndex:"type",width:"10%"},{title:"\u6570\u636e\u793a\u4f8b",dataIndex:"demo",width:"30%"},{title:"\u9ed8\u8ba4\u503c",dataIndex:"dafault",width:"10%"},{title:"\u5907\u6ce8",dataIndex:"desc",width:"20%"}]);t.Z=function(e){return a.createElement(i.Z,{dataSource:e.dataSource,columns:r,pagination:!1})}},72181:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(75068),a=n(67294),r=n(45697),o=n.n(r),l=n(41481),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new l.Z,n.recevier.on("updateHeight",(function(e,t,i){n.iframe&&i===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){var t=e.url,n=e.disableHeightSync;e.style;t.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height||"800px"),n!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,i=t.id,r=t.style,o=t.url;return o?a.createElement("div",{className:"bg-iframe "+n,id:i,style:Object.assign({height:800,width:"100%"},r),ref:function(t){e.container=t}},a.createElement("iframe",{src:o,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):a.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(a.PureComponent);d.displayName="bg-iframe",d.propTypes={className:o().string,disableHeightSync:o().bool,id:o().string,onUpdateHeight:o().func,style:o().object,url:o().string.isRequired},d.defaultProps={className:"",disableHeightSync:!1,id:"",onUpdateHeight:function(){},style:{},syncParam:!0,url:""}},37608:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=n(72181),l=n(71766),d=["components"],c={title:"\u56fe\u6807",order:1},s="\u56fe\u6807",p={unversionedId:"components/basic/icon",id:"components/basic/icon",title:"\u56fe\u6807",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/basic/icon.mdx",sourceDirName:"components/basic",slug:"/components/basic/icon",permalink:"/docs/components/basic/icon",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/feat/init/docs/components/basic/icon.mdx",tags:[],version:"current",frontMatter:{title:"\u56fe\u6807",order:1},sidebar:"components",previous:{title:"\u5e03\u5c40\u5bb9\u5668",permalink:"/docs/components/layout/regionalContainer"},next:{title:"\u6309\u94ae",permalink:"/docs/components/basic/button"}},m=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],u={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,d);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u56fe\u6807"},"\u56fe\u6807"),(0,r.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,r.kt)(o.Z,{url:"https://pre-yida-performance3.alibaba-inc.com/developer/icon-v2?isRenderNav=false",mdxType:"Iframe"}),(0,r.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027\u540d"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5c5e\u6027code"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u6570\u636e\u793a\u4f8b"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u52a8\u6001\u5c5e\u6027"),(0,r.kt)("th",{parentName:"tr",align:"left"},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u56fe\u6807"),(0,r.kt)("td",{parentName:"tr",align:"left"},"src"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"'smile'"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"size"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},"'medium'"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u4ece\u5c0f\u5230\u5927\u4f9d\u6b21\u4e3a: ",(0,r.kt)("inlineCode",{parentName:"td"},"xxs"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"xs"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"small"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"medium"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"large"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"xl"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"xxl"))))),(0,r.kt)("p",null,"\u586b\u5145\u8272\u8bf7\u76f4\u63a5\u4fee\u6539\u6837\u5f0f\u4e2d\u7684\u989c\u8272\u5c5e\u6027\u3002"),(0,r.kt)(l.Z,{dataSource:[{attr:"\u56fe\u6807",code:"src",type:"String",demo:"smile",dafault:"",desc:""},{attr:"\u5927\u5c0f",code:"size",type:"String",demo:"medium",dafault:"",desc:""}],mdxType:"AttrTable"}))}f.isMDXComponent=!0}}]);