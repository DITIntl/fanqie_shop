(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-refund"],{"0b08":function(t,e,i){"use strict";var n={cpimg:i("8bb2").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("custom",{attrs:{bgColor:"bg-white",isBack:!0}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("返回")]),i("template",{attrs:{slot:"content"},slot:"content"},[t._v("订单退款")])],2),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"title"},[t._v("退货原因")]),i("v-uni-picker",{attrs:{value:t.index,range:t.picker},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.PickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"picker"},[t._v(t._s(t.picker[t.index]))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-textarea",{attrs:{placeholder:"请输入说明"},model:{value:t.refund_reason_wap_explain,callback:function(e){t.refund_reason_wap_explain=e},expression:"refund_reason_wap_explain"}})],1),i("v-uni-view",{staticClass:"cu-bar bg-white margin-top"},[i("v-uni-view",{staticClass:"action"},[t._v("上传凭证(最多三张)")])],1),i("v-uni-view",{staticClass:"cu-form-group"},[i("v-uni-view",{staticClass:"grid col-4 grid-square flex-sub"},[t._l(t.imgList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"bg-img",attrs:{"data-url":t.imgList[n]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ViewImage.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:t.imgList[n],mode:"aspectFill"}}),i("v-uni-view",{staticClass:"cu-tag bg-red",attrs:{"data-index":n},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.DelImg.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1)],1)})),t.imgList.length<3?i("v-uni-view",{staticClass:"solids",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ChooseImage.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-cameraadd"})],1):t._e()],2)],1),i("cpimg",{ref:"cpimg",attrs:{number:2,fixOrientation:!0,size:500,maxWidth:1e3,ql:.9,type:"url"},on:{result:function(e){arguments[0]=e=t.$handleEvent(e),t.cpimgOk.apply(void 0,arguments)},err:function(e){arguments[0]=e=t.$handleEvent(e),t.cpimgErr.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"padding flex flex-direction"},[i("v-uni-button",{staticClass:"cu-btn bg-orange round lg",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onSub.apply(void 0,arguments)}}},[t._v("提交退款")])],1)],1)},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}))},"186b":function(t,e,i){var n=i("9b93");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("137efeb6",n,!0,{sourceMap:!1,shadowMode:!1})},"5c5f":function(t,e,i){"use strict";i.r(e);var n=i("9a10"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},"7c7e":function(t,e,i){"use strict";var n=i("186b"),a=i.n(n);a.a},"8bb2":function(t,e,i){"use strict";i.r(e);var n=i("f55a"),a=i("a9ba");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("7c7e");var s,o=i("f0c5"),u=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"1d6c9665",null,!1,n["a"],s);e["default"]=u.exports},"9a10":function(t,e,i){"use strict";var n=i("ee27");i("4160"),i("a434"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n(i("8bb2"));var a=i("7870"),r={data:function(){return{index:0,picker:[],imgList:[],refund_reason_wap_explain:"",id:0}},onLoad:function(t){this.id=t.id,this.get_config()},methods:{onSub:function(){var t=this,e={};e.id=this.id,e.refund_say=this.picker[this.index],e.refund_mark=this.refund_reason_wap_explain,e.refund_thumb=this.imgList,this.fq_post("fanqie/order/refund",e,(function(e){t.showMs(e.message,(function(){wx.navigateTo({url:"/pages/order/index?nav=5"})}))}))},onTea:function(t){this.setData({refund_reason_wap_explain:t.detail.value})},get_config:function(){var t=this;this.fq_get("fanqie/order/get_config","",(function(e){t.picker=e.data.stor_reason}))},PickerChange:function(t){this.index=t.detail.value},ChooseImage:function(){this.$refs.cpimg._changImg()},cpimgOk:function(t){var e=this,i=this;t.forEach((function(t){a.fq_upload(e.host+"fanqie/api/issue_upimg",t,"pics",(function(t){i.imgList.push(t.data)}))}))},DelImg:function(t){var e=this;uni.showModal({title:"提示",content:"确定要删除这个图片吗？",cancelText:"再看看",confirmText:"删了吧",success:function(i){i.confirm&&e.imgList.splice(t.currentTarget.dataset.index,1)}})},ViewImage:function(t){}}};e.default=r},"9b93":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"._cpimg[data-v-1d6c9665]{position:fixed;top:%?-99999?%;left:%?-99999?%;z-index:-99999}",""]),t.exports=e},a9ba:function(t,e,i){"use strict";i.r(e);var n=i("dccb"),a=i.n(n);for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},b420:function(t,e,i){var n=i("23e7"),a=i("621a"),r=i("a981");n({global:!0,forced:!r},{DataView:a.DataView})},dccb:function(t,e,i){"use strict";i("99af"),i("c975"),i("ace4"),i("b420"),i("a9e3"),i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=[],a="",r=0,s={name:"cpimg",props:{maxWidth:{type:Number,default:750},type:{type:String,default:"url"},ql:{type:Number,default:.92},src:{type:String,default:""},number:{type:Number,default:1},fixOrientation:{type:Boolean,default:!0},size:{type:Number,default:5e5}},data:function(){return{cWidth:750,cHeight:750}},onUnload:function(){},methods:{_changImg:function(){var t=this;""==t.src?uni.chooseImage({count:t.number,sizeType:["compressed"],success:function(e){n=[],a=e.tempFilePaths,r=0,t._cpImg()},fail:function(e){t._err(e)}}):_cpImg(t.src)},_cpImg:function(){var t=this,e=a[r];function i(i,n){if(i.type.indexOf("png")>=0)return t._result(e),!1;var a,r,s=i.width,o=i.height,u=1,c=1;(n/1024>=t.size||i.width>=t.maxWidth)&&(i.width>=i.height&&i.width>=t.maxWidth?(i.height=t.maxWidth*i.height/i.width,i.width=t.maxWidth):i.width<i.height&&i.height>=t.maxWidth&&(i.width=t.maxWidth*i.width/i.height,i.height=t.maxWidth),u=i.width/s,c=i.height/o),a=s*u,r=o*c;var d=uni.createCanvasContext("_myCanvas",t);if(t.cWidth=i.width,t.cHeight=i.height,t.fixOrientation){var f=i.orientation;[5,6,7,8,"right","left","right-mirrored","left-mirrored"].indexOf(f)>-1&&(t.cWidth=i.height,t.cHeight=i.width),2==f||"up-mirrored"==f?(d.translate(a,0),d.scale(-1,1)):3==f||"down"==f?(d.translate(a,r),d.rotate(Math.PI)):4==f||"down-mirrored"==f?(d.translate(0,r),d.scale(1,-1)):5==f||"right-mirrored"==f?(d.rotate(.5*Math.PI),d.scale(1,-1)):6==f||"right"==f?(d.rotate(.5*Math.PI),d.translate(0,-r)):7==f||"left-mirrored"==f?(d.rotate(.5*Math.PI),d.translate(a,-r),d.scale(-1,1)):8==f||"left"==f?(d.rotate(-.5*Math.PI),d.translate(-a,0)):d.translate(0,0)}var l=0;function h(){var e=t.maxWidth/5;return e>=600?600:e<=100?100:e}l=h(),setTimeout((function(){d.drawImage(e,0,0,a,r),d.draw(!1,(function(){var e=0;e=10,setTimeout((function(){uni.canvasToTempFilePath({width:Number(t.cWidth),height:Number(t.cHeight),destWidth:Number(t.cWidth),destHeight:Number(t.cHeight),canvasId:"_myCanvas",fileType:"jpg",quality:Number(t.ql),success:function(e){if("base64"==t.type){t._result(e.tempFilePath)}else t._result(e.tempFilePath)},fail:function(e){t._err(e)}},t)}),e)}))}),l)}uni.showLoading({title:"图片压缩中 ".concat(r+1,"/").concat(a.length),mask:!0}),t._getH5ImageInfo(e,(function(t){i(t,t.size)}))},_reverseImgData:function(t){for(var e=t.width,i=t.height,n=0,a=0;a<i/2;a++)for(var r=0;r<4*e;r++)n=t.data[a*e*4+r],t.data[a*e*4+r]=t.data[(i-a-1)*e*4+r],t.data[(i-a-1)*e*4+r]=n;return t},_getH5ImageInfo:function(t,e){var i=new Image;i.src=t,i.onload=function(i){var n=this,a=new XMLHttpRequest;a.open("GET",t,!0),a.responseType="blob",a.onload=function(t){var i=this;if(200==i.status||0===i.status){var a=new FileReader;a.onload=function(t){var a=new DataView(this.result);if(65496!=a.getUint16(0,!1))return e({size:i.response.size,type:i.response.type,width:n.width,height:n.height,orientation:-1});var r=a.byteLength,s=2;while(s<r){var o=a.getUint16(s,!1);if(s+=2,65505==o){if(1165519206!=a.getUint32(s+=2,!1))return e({size:i.response.size,type:i.response.type,width:n.width,height:n.height,orientation:-1});var u=18761==a.getUint16(s+=6,!1);s+=a.getUint32(s+4,u);var c=a.getUint16(s,u);s+=2;for(var d=0;d<c;d++)if(274==a.getUint16(s+12*d,u))return e({size:i.response.size,type:i.response.type,width:n.width,height:n.height,orientation:a.getUint16(s+12*d+8,u)})}else{if(65280!=(65280&o))break;s+=a.getUint16(s,!1)}}return e({size:i.response.size,type:i.response.type,width:n.width,height:n.height,orientation:-1})},a.readAsArrayBuffer(i.response)}},a.send()}},_result:function(t,e){n.push(t),r+=1,a.length-1>=r?this._cpImg():(uni.hideLoading(),this.$emit("result",n))},_err:function(t){uni.hideLoading(),this.$emit("err",t)}}};e.default=s},e59a:function(t,e,i){"use strict";i.r(e);var n=i("0b08"),a=i("5c5f");for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);var s,o=i("f0c5"),u=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"6aa40e94",null,!1,n["a"],s);e["default"]=u.exports},f55a:function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"_cpimg"},[i("v-uni-canvas",{style:{width:t.cWidth+"px",height:t.cHeight+"px"},attrs:{id:"_myCanvas","canvas-id":"_myCanvas"}})],1)},r=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return n}))}}]);