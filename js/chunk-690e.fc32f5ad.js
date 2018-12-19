(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-690e"],{"2efd":function(t,e,a){"use strict";var s=a("qjbT");a.n(s).a},OA3U:function(t,e,a){"use strict";a.r(e);var s=a("TaCi"),o=a("vkWD"),i=a("9Pcu"),r=a("Si4Q"),n=a("Mz3J"),l={name:"DeviceProgress",props:{color:{type:String,default:"#FC5043"},percentage:{type:Number,default:0},height:{type:Number,default:20}}},c=(a("vXzv"),a("KHd+")),u=Object(c.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progress-bar-outer",style:{height:this.height+"px"}},[e("div",{staticClass:"progress-bar-inner",style:{width:this.percentage+"%",background:this.color}})])},[],!1,null,"38312eee",null);u.options.__file="index.vue";var m=u.exports,v={name:"DeviceSubtotal",components:{ToolsBox:s.a,Export:r.a,RTable:i.a,Pagination:n.a,Pie:o.a,DeviceProgress:m},data:function(){return{date:null,dateType:"today",amount:{total:862,online:463,totalUse:1245,avgUser:1233},use:{cpu:87,memory:35,storage:28},tableData:[{date:"2018/08/12 11:20:24",imei:"00000000000000000",deviceName:"眼动仪检测",cpu:83,memory:18,storage:60},{date:"2018/08/12 11:20:24",imei:"00000000000000000",deviceName:"眼动仪检测",cpu:1,memory:90,storage:30},{date:"2018/08/12 11:20:24",imei:"00000000000000000",deviceName:"眼动仪检测",cpu:32,memory:85,storage:70},{date:"2018/08/12 11:20:24",imei:"00000000000000000",deviceName:"眼动仪检测",cpu:85,memory:17,storage:43},{date:"2018/08/12 11:20:24",imei:"00000000000000000",deviceName:"眼动仪检测",cpu:67,memory:41,storage:81},{date:"2018/08/12 11:20:24",imei:"00000000000000000",deviceName:"眼动仪检测",cpu:90,memory:23,storage:80},{date:"2018/08/12 11:20:24",imei:"00000000000000000",deviceName:"眼动仪检测",cpu:52,memory:7,storage:21},{date:"2018/08/12 11:20:24",imei:"00000000000000000",deviceName:"眼动仪检测",cpu:16,memory:99,storage:27},{date:"2018/08/12 11:20:24",imei:"00000000000000000",deviceName:"眼动仪检测",cpu:52,memory:71,storage:75},{date:"2018/08/12 11:20:24",imei:"00000000000000000",deviceName:"眼动仪检测",cpu:36,memory:91,storage:66}],currentPage:4,total:400,pageValue:4}},computed:{isToDay:function(){return"today"===this.dateType?"primary":""},isWeek:function(){return"week"===this.dateType?"primary":""},isMonth:function(){return"month"===this.dateType?"primary":""}},methods:{handEditDateType:function(t){this.dateType=t},handleCurrentChange:function(){},statusColor:function(t){return t>=80?"#FC5043":"#00ADB8"}}},d=(a("2efd"),Object(c.a)(v,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"subtotal-box"},[a("tools-box",[a("template",{slot:"left"},[a("el-button-group",[a("el-button",{attrs:{type:t.isToDay,size:"mini"},on:{click:function(e){t.handEditDateType("today")}}},[t._v("今天")]),t._v(" "),a("el-button",{attrs:{type:t.isWeek,size:"mini"},on:{click:function(e){t.handEditDateType("week")}}},[t._v("7天")]),t._v(" "),a("el-button",{attrs:{type:t.isMonth,size:"mini"},on:{click:function(e){t.handEditDateType("month")}}},[t._v("30天")])],1)],1),t._v(" "),a("template",{slot:"right"},[a("elDatePicker",{staticClass:"select-date",attrs:{clearable:!1,size:"mini",type:"daterange","range-separator":"~",placeholder:"请选择选择时间"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],2),t._v(" "),a("div",{staticClass:"count-info-box"},[a("div",{staticClass:"amount-box"},[a("div",{staticClass:"amount-box-item"},[a("div",{staticClass:"amout-number"},[t._v(t._s(t.amount.total))]),t._v(" "),a("div",{staticClass:"amout-depict"},[t._v("总设备数(台)")])]),t._v(" "),a("div",{staticClass:"amount-box-item"},[a("div",{staticClass:"amout-number"},[t._v(t._s(t.amount.online))]),t._v(" "),a("div",{staticClass:"amout-depict"},[t._v("在线设备数(台)")])]),t._v(" "),a("div",{staticClass:"amount-box-item"},[a("div",{staticClass:"amout-number"},[t._v(t._s(t.amount.totalUse))]),t._v(" "),a("div",{staticClass:"amout-depict"},[t._v("总使用频次(次)")])]),t._v(" "),a("div",{staticClass:"amount-box-item"},[a("div",{staticClass:"amout-number"},[t._v(t._s(t.amount.avgUser))]),t._v(" "),a("div",{staticClass:"amout-depict"},[t._v("平均使用频次(次)")])])]),t._v(" "),a("div",{staticClass:"use-box"},[a("div",{staticClass:"use-box-item"},[a("div",{staticClass:"use-item-info"},[a("span",{staticClass:"use-depict"},[t._v("平均CPU使用率(%)")]),t._v(" "),a("span",{staticClass:"use-number",staticStyle:{color:"#FC5043"}},[t._v(t._s(t.use.cpu)+"%")])]),t._v(" "),a("device-progress",{attrs:{percentage:t.use.cpu,color:"#FC5043"}})],1),t._v(" "),a("div",{staticClass:"use-box-item"},[a("div",{staticClass:"use-item-info"},[a("span",{staticClass:"use-depict"},[t._v("平均内存使用率(%)")]),t._v(" "),a("span",{staticClass:"use-number",staticStyle:{color:"#FFBB33"}},[t._v(t._s(t.use.memory)+"%")])]),t._v(" "),a("device-progress",{attrs:{percentage:t.use.cpu,color:"#FFBB33"}})],1),t._v(" "),a("div",{staticClass:"use-box-item"},[a("div",{staticClass:"use-item-info"},[a("span",{staticClass:"use-depict"},[t._v("设备平均剩余存储空间(%)")]),t._v(" "),a("span",{staticClass:"use-number",staticStyle:{color:"#0873CC"}},[t._v(t._s(t.use.storage)+"%")])]),t._v(" "),a("device-progress",{attrs:{percentage:t.use.cpu,color:"#0873CC"}})],1)])]),t._v(" "),a("tools-box",[a("template",{slot:"left"},[a("span",{staticClass:"min-title"},[t._v("详细数据")])]),t._v(" "),a("template",{slot:"right"},[a("Export")],1)],2),t._v(" "),a("r-table",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[a("elTableColumn",{attrs:{prop:"date",label:"时间"}}),t._v(" "),a("elTableColumn",{attrs:{prop:"imei",label:"设备IMEI"}}),t._v(" "),a("elTableColumn",{attrs:{prop:"deviceName",label:"设备名称"}}),t._v(" "),a("elTableColumn",{attrs:{label:"CPU使用率"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("Pie",{attrs:{width:16,percentage:e.row.cpu,stroke:t.statusColor(e.row.cpu)}}),t._v(" "),a("span",{style:{color:t.statusColor(e.row.cpu)}},[t._v(t._s(e.row.cpu)+"%")])]}}])}),t._v(" "),a("elTableColumn",{attrs:{label:"内存使用率"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("Pie",{attrs:{width:16,percentage:e.row.memory,stroke:t.statusColor(e.row.memory)}}),t._v(" "),a("span",{style:{color:t.statusColor(e.row.memory)}},[t._v(t._s(e.row.memory)+"%")])]}}])}),t._v(" "),a("elTableColumn",{attrs:{label:"存储空间使用"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("Pie",{attrs:{width:16,percentage:e.row.storage,stroke:t.statusColor(e.row.storage)}}),t._v(" "),a("span",{style:{color:t.statusColor(e.row.storage)}},[t._v(t._s(e.row.storage)+"%")])]}}])})],1)],1),t._v(" "),a("Pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[100,200,300,400],"page-size":100,total:t.total},on:{"current-change":t.handleCurrentChange}})],1)},[],!1,null,"282761f4",null));d.options.__file="index.vue";e.default=d.exports},mYuN:function(t,e,a){},qjbT:function(t,e,a){},vXzv:function(t,e,a){"use strict";var s=a("mYuN");a.n(s).a}}]);