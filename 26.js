webpackJsonp([26],{730:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.handlePay=t.channelEntered=void 0;var l=n(459);t.channelEntered=(0,l.createAction)("evaluate/channelEntered"),t.handlePay=(0,l.createAction)("bill/bcPayBtn")},771:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=(n(31),n(30)),a=l(r),o=(n(88),n(87)),u=l(o),i=(n(15),n(14)),d=l(i),f=n(3),c=l(f),s=n(5),p=l(s),h=n(4),m=l(h),v=(n(335),n(334)),E=l(v),g=(n(333),n(332)),y=l(g),I=(n(373),n(372)),b=l(I),_=n(1),x=l(_),P=n(336),C=l(P),S=n(375),w=l(S),M=n(376),k=l(M),A=n(1022),F=l(A),O=n(157),j=(b["default"].Header,b["default"].Content),z=y["default"].Step,H=E["default"].TabPane,N=function(e){function t(n){(0,c["default"])(this,t);var l=(0,p["default"])(this,e.call(this,n));return l.componentDidMount=function(){l.refs&&l.refs.msgScroller&&(l.refs.msgScroller.scrollTop=l.refs.msgScroller.childNodes[0].clientHeight)},l.onHandlePay=function(){l.props.handlePay()},l.state={newFiles:[]},l}return(0,m["default"])(t,e),t.prototype.render=function(){var e=this,t=this,n=this.props.channelInfo?this.props.channelInfo.channelId:null,l=this.props.channelInfo?this.props.channelInfo.users:[],r=this.props.channelInfo?this.props.channelInfo.filelist:[],o=this.props.channelInfo?this.props.channelInfo.msglist:[],i=this.props.channelInfo?this.props.channelInfo.selfUserId:"",f=this.props.channelInfo?this.props.channelInfo.orders:[],c=f?f[f.length-1]:null,s=this.props.fpar,p={selfUserId:i,users:l,orders:f,msglist:o},h=function(t){e.props.fpar&&e.props.fpar.sendMessage(t)},m={channelId:n,sendMsg:function(e){h(e)},changeFiles:function(e){var t={type:"uploadingfile",channelId:this.props.channelInfo?this.props.channelInfo.channelId:"",file:e};s&&s.sendCustomRequest(t,function(e,t){if(e)return void console.error(e)})}},v=function(){return x["default"].createElement("div",{style:{padding:"20px"}},x["default"].createElement(y["default"],{current:e.props.currentStep||0,style:{padding:"20px 0"},direction:"vertical"},x["default"].createElement(z,{title:"\u610f\u5411\u8ba2\u5355",description:""}),x["default"].createElement(z,{title:"\u534f\u5546\u5b9a\u4ef7",description:""}),x["default"].createElement(z,{title:"\u652f\u4ed8\u670d\u52a1\u8d39",description:""}),x["default"].createElement(z,{title:"\u5f00\u59cb\u6cd5\u5f8b\u670d\u52a1",description:""}),x["default"].createElement(z,{title:"\u786e\u8ba4\u670d\u52a1\u5b8c\u6210",description:""}),x["default"].createElement(z,{title:"\u8bc4\u4ef7\u6211\u7684\u670d\u52a1",description:""})),x["default"].createElement("div",null,x["default"].createElement(u["default"],{title:"\u4ef7\u683c\u4fe1\u606f",bordered:!1,style:{fontSize:"1.2em"}},9!=O.get("r")&&c&&c.priceStatus>0?x["default"].createElement("div",null,x["default"].createElement("p",null,"\u672c\u8ba2\u5355\u5f8b\u5e08\u62a5\u4ef7\u4e3a:"),x["default"].createElement("p",{style:{fontSize:"1.5em"}},"\uffe5",Number(c.orderAmountY).formatCurrency(),"\u5143"),x["default"].createElement(d["default"],{size:"large",style:{width:"8em",color:"#fff",backgroundColor:"orange",borderColor:"orange"},onClick:e.onHandlePay},"\u53bb\u4ed8\u6b3e")):x["default"].createElement("div",null,x["default"].createElement("p",null,"\u5f8b\u5e08\u5c1a\u672a\u62a5\u4ef7"),x["default"].createElement("p",null,"\u8bf7\u63d0\u4ea4\u8d44\u6599\u7b49\u5f85\u5f8b\u5e08\u8bc4\u4f30")))))},g={channelId:n,fileList:r,changeFiles:function(e){var l=t.state.newFiles,r=-1;l.forEach(function(t,n){t.uid==e.uid&&(r=n)}),r!=-1?l.splice(r,1,e):l.splice(0,0,e),t.setState({newFiles:l});var a={type:"uploadingfile",channelId:n,file:e};s&&s.sendCustomRequest(a,function(e,t){if(e)return void console.error(e)})},openFilePage:function(e,t){}},I=function(){return x["default"].createElement(u["default"],{title:"\u6587\u4ef6",bordered:!1,style:{fontSize:"1.2em"}},x["default"].createElement(C["default"],g))},_=function(){return x["default"].createElement(E["default"],{defaultActiveKey:"1"},x["default"].createElement(H,{tab:"\u8ba2\u5355\u8fdb\u5ea6",key:"1"},x["default"].createElement(v,null)),x["default"].createElement(H,{tab:"\u8ba2\u5355\u8be6\u60c5",key:"2"},x["default"].createElement(I,null)))};return x["default"].createElement("div",{className:F["default"].normal,style:{position:"fixed",bottom:0,top:"70px",maxWidth:"1000px",left:"0px",right:"0px",margin:"auto"}},x["default"].createElement(b["default"],{style:{height:"100%",overflow:"hidden"}},x["default"].createElement(j,{style:{background:"white",height:"100%",overflow:"hidden"}},x["default"].createElement(a["default"],{md:18,sm:24,style:{position:"relative",height:"100%",overflow:"hidden",padding:"8px 0px 80px 8px"}},x["default"].createElement(w["default"],p),x["default"].createElement(k["default"],m)),x["default"].createElement(a["default"],{md:6,xs:0},x["default"].createElement(_,null)))))},t}(_.Component);t["default"]=N,e.exports=t["default"]},858:function(e,t,n){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t=e.location,n=(e.dispatch,e.evaluate),l=e.channelinfo,r=e.order,a=e.fhome,o=e.actions,u=n.enterInChannel,i=o.channelEntered,f=o.handlePay,c=l.orders&&l.orders.length>0?l.orders:null,p=c?c[c.length-1]:null,h=p?(p.orderSn+p.details[0].productName).slice(0,30):"",m={currentStep:r.currentStep,channelInfo:l,recvMsgs:a.msglist||[],fpar:a.fpar||null,handlePay:function(){var e=h;f({title:e,amount:p.orderAmount,optional:{orderId:p?p.orderId:""},returnurl:t.href})}},v=function(e){var t={type:"openChatChannel",channelId:e,leaveChannel:""};a.fpar.sendCustomRequest(t,function(e,t){if(e)return void console.error(e);i();var n=t.users.filter(function(e){return 1==e.onlineStatus});a.fpar.receiveVideos(n)})};return!u&&l&&a&&v(l.channelId),d["default"].createElement(s["default"],m)}function o(e){var t=e.evaluate,n=e.channelinfo,l=e.fhome,r=e.order;return{evaluate:t,channelinfo:n,fhome:l,order:r}}function u(e){return{actions:(0,p.bindActionCreators)(m,e)}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),d=r(i),f=n(40),c=n(771),s=r(c),p=n(284),h=n(730),m=l(h),v=n(1035);r(v);t["default"]=(0,f.connect)(o,u)(a),e.exports=t["default"]},1022:function(e,t){e.exports={normal:"normal___hPsBX"}},1035:function(e,t){e.exports={normal:"normal___Obrvi"}}});
//# sourceMappingURL=26.js.map