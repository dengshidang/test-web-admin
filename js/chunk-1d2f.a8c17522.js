(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1d2f"],{"/Nhe":function(t,e,a){},"4ayC":function(t,e,a){},"9Pcu":function(t,e,a){"use strict";var i={name:"Table"},l=(a("CLoI"),a("KHd+")),s=Object(l.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"table"},[this._t("default")],2)},[],!1,null,"63110baf",null);s.options.__file="index.vue";e.a=s.exports},AnSm:function(t,e,a){},AtDT:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAfNJREFUOBGlk01IVFEUx3/njZqSCDJZiBQqmNLYpixqEZKE0K5N+4JaZCEVWVAEiQtb9QEObty1DNr6gRi0aGO1yCYkQWEoFBFajGioM7dz7507M05uwgeXd8/H/3/O/71zhLLHzJxJkDU3ENOroWP5cBojU8RkTHpmU6UQCYZJXa1ieekFxtxSXxT8Ze8cIqM0ttyXxNstG3MEHrw4jqGnDLC3KczQ2HrZkvhKrrIFK9/ZN3BhAhq6d4OlEhKD0HwNV8hi9ImcZt82dI3ByiQcOAQdj3cTdDyCtY9Qc9T7FWOxkftgQXNVHI7f9QmVddpQRf5e70nj52D+eSB22Cj/tb1z4TVk//h7pC2fHFYSfbc/gNQz+K4SzHYg0JjpFTN9OqOaagteWzVW7cHx87D6Hr49hVyeuJCoF2H9399ldrTdBvjx0ms+fBE6h5T0YFFSCYkVmdZzouCr64RTI1pRiT7f9G5LYk92E+aeKPGHkJ6O3IQFM4ArVJHEVG8Wvj4MUe2iBtr6i7ZOZ2THUz055226Aha8nYEvfbChzVlJ1jZGZb2Crd+BIOdG21pmumtEE277Cvfg1zvIzIdEOKJr0T4Amz9h9rr3iyTl0qc74gjcHuxjlN1i6GzroiSV0Msp1i+92WVKhj2wAddBacb/rvNfdI+tsDGB9gQAAAAASUVORK5CYII="},CLoI:function(t,e,a){"use strict";var i=a("/Nhe");a.n(i).a},Iq8r:function(t,e,a){},L1bN:function(t,e,a){"use strict";var i=a("Iq8r");a.n(i).a},Mz3J:function(t,e,a){"use strict";var i={name:"Pagination",props:{currentPage:{type:Number,default:null},pageSizes:{type:Array,default:function(){return[]}},pageSize:{type:Number,default:null},total:{type:Number,default:null}},data:function(){return{pageValue:0,internalCurrentPage:0}},created:function(){this.pageValue=this.currentPage,this.internalCurrentPage=this.currentPage},methods:{handleSizeChange:function(t){console.log("每页 "+t+" 条")},handleCurrentChange:function(t){this.pageValue=this.internalCurrentPage,this.$emit("current-change",this.internalCurrentPage)},goPage:function(){console.log("页面跳转"),this.internalCurrentPage=parseInt(this.pageValue),this.$emit("current-change",this.internalCurrentPage)}}},l=(a("YsqI"),a("KHd+")),s=Object(l.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-box"},[a("div",{staticClass:"total"},[t._v("\n    Total："),a("span",[t._v(t._s(t.total))])]),t._v(" "),a("elPagination",{attrs:{"current-page":t.internalCurrentPage,"page-sizes":t.pageSizes,"page-size":t.pageSize,total:t.total,small:"",layout:"prev, pager, next"},on:{"update:currentPage":function(e){t.internalCurrentPage=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),a("el-button",{staticClass:"page-button",attrs:{size:"mini"},on:{click:t.goPage}},[t._v("Go")]),t._v(" "),a("elInput",{staticClass:"page-value",attrs:{size:"mini"},model:{value:t.pageValue,callback:function(e){t.pageValue=e},expression:"pageValue"}})],1)},[],!1,null,"58068f14",null);s.options.__file="index.vue";e.a=s.exports},N9DF:function(t,e,a){},Nuvt:function(t,e,a){"use strict";var i={name:"InputBox",props:{title:{type:String,default:""},must:{type:Boolean,default:!1},width:{type:Number,default:200}}},l=(a("Uumj"),a("KHd+")),s=Object(l.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-box",class:{must:this.must},style:{width:this.width+"px"}},[e("div",{staticClass:"input-title"},[this._v(this._s(this.title))]),this._v(" "),this._t("default")],2)},[],!1,null,"9a9a2152",null);s.options.__file="index.vue";e.a=s.exports},Si4Q:function(t,e,a){"use strict";var i={name:"Export",components:{InputBox:a("Nuvt").a},data:function(){return{date:"",visible:!1,options:[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"},{value:"选项5",label:"北京烤鸭"}],value:null,selectType:null}},methods:{setSelectType:function(t){this.selectType===t?this.selectType=null:this.selectType=t},handDownload:function(){}}},l=(a("aV5E"),a("KHd+")),s=Object(l.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"export-info-box"},[a("div",{staticClass:"export-box"},[a("el-button",{attrs:{icon:"el-icon-download",size:"mini"}},[t._v("导出")]),t._v(" "),a("div",{staticClass:"export-list-box"},[a("div",{staticClass:"export-list"},[a("span",[t._v("导出全部")]),t._v(" "),a("span",{on:{click:function(e){t.visible=!0}}},[t._v("批量导出")])])])],1),t._v(" "),a("div",{staticClass:"export-select",style:{display:t.visible?"block":"none"}},[a("div",{staticClass:"export-select-box"},[a("div",{staticClass:"export-select-top"},[a("div",{staticClass:"export-select-title"},[t._v("导出")]),t._v(" "),a("i",{staticClass:"el-icon-close",on:{click:function(e){t.visible=!1}}})]),t._v(" "),a("div",{staticClass:"export-select-body"},[a("div",{staticClass:"line"},[a("input-box",{staticClass:"input-box-left",attrs:{width:320,title:"选择时间"}},[a("elDatePicker",{attrs:{clearable:!1,size:"mini",type:"daterange","range-separator":"~",placeholder:"请选择选择时间"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),t._v(" "),a("input-box",{staticClass:"input-box-right",attrs:{width:320,title:"选择医生"}},[a("el-select",{attrs:{size:"mini",placeholder:"请选择医生"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.options,function(t){return a("elOption",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1),t._v(" "),a("input-box",{attrs:{width:670,title:"选择文件类型"}},[a("div",{staticClass:"select-box"},[a("div",{staticClass:"select-item",class:{on:"excel"===t.selectType},on:{click:function(e){t.setSelectType("excel")}}},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"xsl"}}),t._v(" "),a("span",[t._v("Excel")])],1),t._v(" "),a("div",{staticClass:"select-item",class:{on:"doc"===t.selectType},on:{click:function(e){t.setSelectType("doc")}}},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"doc"}}),t._v(" "),a("span",[t._v("Word")])],1),t._v(" "),a("div",{staticClass:"select-item",class:{on:"pdf"===t.selectType},on:{click:function(e){t.setSelectType("pdf")}}},[a("svg-icon",{staticClass:"icon",attrs:{"icon-class":"pdf"}}),t._v(" "),a("span",[t._v("Pdf")])],1)])]),t._v(" "),a("div",{staticClass:"button-box"},[a("el-button",{attrs:{size:"mini"},on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.handDownload()}}},[t._v("确定")])],1)],1)])])])},[],!1,null,"a8441694",null);s.options.__file="index.vue";e.a=s.exports},Uumj:function(t,e,a){"use strict";var i=a("tB12");a.n(i).a},WGSz:function(t,e,a){t.exports=a.p+"img/not-data.3b206c9.png"},Yhgx:function(t,e,a){"use strict";var i=a("4ayC");a.n(i).a},YsqI:function(t,e,a){"use strict";var i=a("N9DF");a.n(i).a},ZIUK:function(t,e,a){"use strict";var i={name:"NotData",props:{tis:{type:String,default:""},height:{type:[String,Number],default:598}}},l=(a("Yhgx"),a("KHd+")),s=Object(l.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"not-data",style:{height:this.height+"px"}},[e("div",{staticClass:"not-data-box"},[e("img",{attrs:{src:a("WGSz"),alt:"not-data"}}),this._v(" "),e("div",{staticClass:"tis"},[this._v(this._s(this.tis))])])])},[],!1,null,"44f53d90",null);s.options.__file="index.vue";e.a=s.exports},aV5E:function(t,e,a){"use strict";var i=a("AnSm");a.n(i).a},pY1O:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAflJREFUOBGlk09I1EEUxz/z23VVKiskNIkFw0wUNkMEDyGySLIEggfx1J9DSNFJj4Jg2C0ICkIQbxIdIjoGHlYT6dKpcLcuJv0x0IrIIGnddnxvZn/rH6SI3mHmzfe978z7N4Y9YkfbW8jbqxh7Xkzxovk91swQNVNm/EVmJ8WEBzvWHyO3fAfsdSxBiO/aDQUwE8Tqh83Yo5za3AWO/OvtUzknS4TDNXD5LpRVwPQQrC2XTKKkKT+Z0kv8S+7lIrmyyju2pqC2AapPQHsf1LdB9zU4Wqf2pI9WInA5/y68cmHXnoIb05CZhYUHMDgJQQQej0PfCERjsPIa7l/U2AtEgkTUFUzc3LPqYCSrWCV8XITbvRCJQn5T8GJZImU+Qq2TFNvYkbaMvN7sUVkPHIGf36WWtgQ5pbkLTp+D5w9hdcnbDFm91rdKiWcv7E9W9+wcPLkFFYeg/KAiKvFiXKK2JKH/phQtbL1z2L1oGlfuQaK7hG+noPkfb4QPkvufpOoY/PgqKepIaAo6YSr53N/J6rf+2ZNVF26g4+laooDKgORZ1+T1nWsg3ei8tI1oG4Ub+NmW8QzlpQT07ZM/xRPQ0OH1Ql4K+Sz0kt1MKNcXUWZbkLSzvpmHjXXv2NQJZ3q8ruuXd6Ge1v+gB5kaL//1mcJLdP/X77wFfpOi1gP+ia8AAAAASUVORK5CYII="},plUo:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAdtJREFUOBGVkb9LW1EUx7/nJgaveXaqiFYH6SQWSk0gSymIUFxbqBQEB7tWKk2wYKF9W4Uk4D/QrSiKmx1KJwen9iUl2LHgoGSQKlhCnjF57/TctAk3kFB74XHPue97PucXwTo6U3wKcF6+OAPHYLV989ZQ/uTluG/JOkxleynn3q74B2AcRkEvCGHiZ/nU06ulMVtn2x2AfZcaKWd6AUTlAPzMzycfSTUfENS3XJc7tG2IKfvJDkfaD2IMZ0rx/rR3MbDmjTAz6XTBi68WZ21NyxYq5z9+KW7akEpMOSLoi8Z0jYgYinfDkOdaQfYdlQwOAaMGIpmXTHB4dbWnlMr+cqfOjZiYzkLGhB3Ysk1fxxGit1JJ44Lr5aBWOyLwp2p2Wt7+HGZMEeFHy7dvBcJ2wLzs55ILKqImY4N6rJpLvrFFAn8gftdV0qjrDZxX6KuZtp9NrDd77oyGkyndCbj+Wbaz4ucSO/ZvaR/Qrw/HcVnblG61GZjp2ZRtMkeob7GSu/u9F6QJMBCz52z124yZtgTf+NuzD+Y1gTzsBWkDDKTb0ZnCvEA2ekH+CTDQnhDQ82sBukH0K+8+N/D+2gAbgijmEdCKzOrsvwBNSLrwmMHvZGP7twf7l38DN3HnlHwfzqEAAAAASUVORK5CYII="},tB12:function(t,e,a){},vIeO:function(t,e,a){"use strict";a.r(e);var i=a("9Pcu"),l=a("Si4Q"),s=a("Mz3J"),n=a("ZIUK"),o={name:"DeviceLogKir",components:{Export:l.a,RTable:i.a,Pagination:s.a,NotData:n.a},data:function(){return{isUserType:"admin",activeName:"pending",pendingMaintainData:[{id:"0000000000",imei:"00000000000000000",deviceName:"眼动仪检测",hospitalName:"深圳市眼科医院",hospitalAddress:"深圳市福田区泽田路18号",pd:"开机后，设备处于卡机状态，不能正常工作",date:"2018/08/12"},{id:"0000000000",imei:"00000000000000000",deviceName:"眼动仪检测",hospitalName:"深圳市眼科医院",hospitalAddress:"深圳市福田区泽田路18号",pd:"开机后，设备处于卡机状态，不能正常工作",date:"2018/08/12"},{id:"0000000000",imei:"00000000000000000",deviceName:"眼动仪检测",hospitalName:"深圳市眼科医院",hospitalAddress:"深圳市福田区泽田路18号",pd:"开机后，设备处于卡机状态，不能正常工作",date:"2018/08/12"},{id:"0000000000",imei:"00000000000000000",deviceName:"眼动仪检测",hospitalName:"深圳市眼科医院",hospitalAddress:"深圳市福田区泽田路18号",pd:"开机后，设备处于卡机状态，不能正常工作",date:"2018/08/12"},{id:"0000000000",imei:"00000000000000000",deviceName:"眼动仪检测",hospitalName:"深圳市眼科医院",hospitalAddress:"深圳市福田区泽田路18号",pd:"开机后，设备处于卡机状态，不能正常工作",date:"2018/08/12"},{id:"0000000000",imei:"00000000000000000",deviceName:"眼动仪检测",hospitalName:"深圳市眼科医院",hospitalAddress:"深圳市福田区泽田路18号",pd:"开机后，设备处于卡机状态，不能正常工作",date:"2018/08/12"}],pendingCurrentPage:4,pendingTotal:400,pendingPageValue:4,hihMaintainData:[{id:"0000000000",imei:"00000000000000000",deviceName:"眼动仪检测",hospitalName:"深圳市眼科医院",hospitalAddress:"深圳市福田区泽田路18号",pd:"开机后，设备处于卡机状态，不能正常工作",date:"2018/08/12"},{id:"0000000000",imei:"00000000000000000",deviceName:"眼动仪检测",hospitalName:"深圳市眼科医院",hospitalAddress:"深圳市福田区泽田路18号",pd:"开机后，设备处于卡机状态，不能正常工作",date:"2018/08/12"},{id:"0000000000",imei:"00000000000000000",deviceName:"眼动仪检测",hospitalName:"深圳市眼科医院",hospitalAddress:"深圳市福田区泽田路18号",pd:"开机后，设备处于卡机状态，不能正常工作",date:"2018/08/12"},{id:"0000000000",imei:"00000000000000000",deviceName:"眼动仪检测",hospitalName:"深圳市眼科医院",hospitalAddress:"深圳市福田区泽田路18号",pd:"开机后，设备处于卡机状态，不能正常工作",date:"2018/08/12"},{id:"0000000000",imei:"00000000000000000",deviceName:"眼动仪检测",hospitalName:"深圳市眼科医院",hospitalAddress:"深圳市福田区泽田路18号",pd:"开机后，设备处于卡机状态，不能正常工作",date:"2018/08/12"},{id:"0000000000",imei:"00000000000000000",deviceName:"眼动仪检测",hospitalName:"深圳市眼科医院",hospitalAddress:"深圳市福田区泽田路18号",pd:"开机后，设备处于卡机状态，不能正常工作",date:"2018/08/12"}],hihCurrentPage:4,hihTotal:400,hihPageValue:4,alreadyMaintainData:[{id:"0000000000",imei:"00000000000000000",deviceName:"眼动仪检测",hospitalName:"深圳市眼科医院",hospitalAddress:"深圳市福田区泽田路18号",pd:"开机后，设备处于卡机状态，不能正常工作",date:"2018/08/12"},{id:"0000000000",imei:"00000000000000000",deviceName:"眼动仪检测",hospitalName:"深圳市眼科医院",hospitalAddress:"深圳市福田区泽田路18号",pd:"开机后，设备处于卡机状态，不能正常工作",date:"2018/08/12"},{id:"0000000000",imei:"00000000000000000",deviceName:"眼动仪检测",hospitalName:"深圳市眼科医院",hospitalAddress:"深圳市福田区泽田路18号",pd:"开机后，设备处于卡机状态，不能正常工作",date:"2018/08/12"},{id:"0000000000",imei:"00000000000000000",deviceName:"眼动仪检测",hospitalName:"深圳市眼科医院",hospitalAddress:"深圳市福田区泽田路18号",pd:"开机后，设备处于卡机状态，不能正常工作",date:"2018/08/12"},{id:"0000000000",imei:"00000000000000000",deviceName:"眼动仪检测",hospitalName:"深圳市眼科医院",hospitalAddress:"深圳市福田区泽田路18号",pd:"开机后，设备处于卡机状态，不能正常工作",date:"2018/08/12"},{id:"0000000000",imei:"00000000000000000",deviceName:"眼动仪检测",hospitalName:"深圳市眼科医院",hospitalAddress:"深圳市福田区泽田路18号",pd:"开机后，设备处于卡机状态，不能正常工作",date:"2018/08/12"}],alreadyCurrentPage:4,alreadyTotal:400,alreadyPageValue:4,notMaintainData:[],notCurrentPage:4,notTotal:400,notPageValue:4}},methods:{handleClick:function(t,e){console.log(t,e)},handlePendingCurrentChange:function(){},handleHihCurrentChange:function(){},handleAlreadyCurrentChange:function(){},handleNotCurrentChange:function(){}}},r=(a("L1bN"),a("KHd+")),d=Object(r.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"kir-box"},[i("Export",{staticClass:"export"}),t._v(" "),i("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"待受理 27",name:"pending"}},[i("r-table",[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pendingMaintainData,stripe:""}},[i("elTableColumn",{attrs:{prop:"id",label:"设备ID"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"imei",label:"设备IMEI"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"deviceName",label:"设备名称"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"hospitalName",label:"医院名称"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"hospitalAddress",label:"医院位置"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"date",label:"时间"}}),t._v(" "),i("elTableColumn",{attrs:{label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"status-icon"},[i("img",{attrs:{src:a("pY1O")}})]),t._v(" "),i("span",{staticClass:"status-font"},[t._v("待受理")])]}}])}),t._v(" "),"admin"===t.isUserType?i("elTableColumn",{attrs:{width:"120",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("router-link",{attrs:{to:{name:"DeviceKirDw",query:{id:e.row.id}}}},[i("el-button",{attrs:{type:"text"}},[t._v("处理"),i("span",{staticClass:"button status-icon"},[i("img",{attrs:{src:a("plUo")}})])])],1)]}}])}):t._e()],1)],1),t._v(" "),i("Pagination",{attrs:{"current-page":t.pendingCurrentPage,"page-size":100,total:t.pendingTotal},on:{"current-change":t.handlePendingCurrentChange}})],1),t._v(" "),i("el-tab-pane",{attrs:{label:"维修中 88",name:"hih"}},[i("r-table",[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.hihMaintainData,stripe:""}},[i("elTableColumn",{attrs:{prop:"id",label:"设备ID"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"imei",label:"设备IMEI"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"deviceName",label:"设备名称"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"hospitalName",label:"医院名称"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"hospitalAddress",label:"医院位置"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"date",label:"时间"}}),t._v(" "),i("elTableColumn",{attrs:{label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{staticClass:"status-icon"},[i("img",{attrs:{src:a("AtDT")}})]),t._v(" "),i("span",{staticClass:"status-font"},[t._v("维修中")])]}}])}),t._v(" "),"admin"===t.isUserType?i("elTableColumn",{attrs:{width:"120",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"dw-button-box"},[i("el-button",{attrs:{type:"text"}},[t._v("处理"),i("span",{staticClass:"button status-icon"},[i("img",{attrs:{src:a("plUo")}})])]),t._v(" "),i("div",{staticClass:"dw-button-list"},[i("div",{staticClass:"popper-arrow"}),t._v(" "),i("div",[i("div",{staticClass:"list-botton"},[t._v("已维修")]),t._v(" "),i("div",{staticClass:"list-botton"},[t._v("未维修")])])])],1)]}}])}):t._e()],1)],1),t._v(" "),i("Pagination",{attrs:{"current-page":t.hihCurrentPage,"page-size":100,total:t.hihTotal},on:{"current-change":t.handleHihCurrentChange}})],1),t._v(" "),i("el-tab-pane",{attrs:{label:"已维修 99",name:"already"}},[i("r-table",[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.alreadyMaintainData,stripe:""}},[i("elTableColumn",{attrs:{prop:"id",label:"设备ID"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"imei",label:"设备IMEI"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"deviceName",label:"设备名称"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"hospitalName",label:"医院名称"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"hospitalAddress",label:"医院位置"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"date",label:"时间"}}),t._v(" "),i("elTableColumn",{attrs:{label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("i",{staticClass:"el-icon-success"}),t._v(" "),i("span",{staticClass:"status-font"},[t._v("已维修")])]}}])})],1)],1),t._v(" "),i("Pagination",{attrs:{"current-page":t.alreadyCurrentPage,"page-size":100,total:t.alreadyTotal},on:{"current-change":t.handleAlreadyCurrentChange}})],1),t._v(" "),i("el-tab-pane",{attrs:{label:"未维修 ",name:"not"}},[i("r-table",[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.notMaintainData,stripe:""}},[i("elTableColumn",{attrs:{prop:"id",label:"设备ID"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"imei",label:"设备IMEI"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"deviceName",label:"设备名称"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"hospitalName",label:"医院名称"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"hospitalAddress",label:"医院位置"}}),t._v(" "),i("elTableColumn",{attrs:{prop:"date",label:"时间"}}),t._v(" "),i("elTableColumn",{attrs:{label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("i",{staticClass:"el-icon-warning"}),t._v(" "),i("span",{staticClass:"status-font"},[t._v("未维修")])]}}])}),t._v(" "),i("NotData",{attrs:{slot:"empty",tis:"暂无未维修记录"},slot:"empty"})],1)],1),t._v(" "),t.notMaintainData.length?i("Pagination",{attrs:{"current-page":t.notCurrentPage,"page-size":100,total:t.notTotal},on:{"current-change":t.handleNotCurrentChange}}):t._e()],1)],1)],1)},[],!1,null,"ded0a4b4",null);d.options.__file="index.vue";e.default=d.exports}}]);