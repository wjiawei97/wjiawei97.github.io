(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{440:function(t,v,_){"use strict";_.r(v);var r=_(1),s=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"事件循环-event-loop"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事件循环-event-loop"}},[t._v("#")]),t._v(" 事件循环 Event Loop")]),t._v(" "),_("h2",{attrs:{id:"为什么需要事件循环"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要事件循环"}},[t._v("#")]),t._v(" 为什么需要事件循环")]),t._v(" "),_("ul",[_("li",[t._v("JS是单线程，同一个时间只能做同一件事，所有任务需要排队，如果前一个任务耗时很长，后一个任务就需要一直等待")])]),t._v(" "),_("h2",{attrs:{id:"什么是事件循环"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是事件循环"}},[t._v("#")]),t._v(" 什么是事件循环")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("同步任务")]),t._v("进入"),_("strong",[t._v("主执行栈")]),t._v(", "),_("strong",[t._v("异步任务")]),t._v("进入"),_("strong",[t._v("任务队列")]),t._v(".")]),t._v(" "),_("li",[_("strong",[t._v("主线程")]),t._v("内的任务执行完毕, 去"),_("strong",[t._v("任务队列")]),t._v("读取对应的任务, 推入主线程执行")]),t._v(" "),_("li",[t._v("这个过程是不断循环的")])]),t._v(" "),_("h2",{attrs:{id:"微任务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#微任务"}},[t._v("#")]),t._v(" 微任务")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("promise")])]),t._v(" "),_("li",[t._v("process.nextTick")]),t._v(" "),_("li",[t._v("Object.observe")]),t._v(" "),_("li",[t._v("MutationOberserver")])]),t._v(" "),_("h2",{attrs:{id:"宏任务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#宏任务"}},[t._v("#")]),t._v(" 宏任务")]),t._v(" "),_("ul",[_("li",[t._v("script")]),t._v(" "),_("li",[t._v("setTimeout")]),t._v(" "),_("li",[t._v("setInterval")]),t._v(" "),_("li",[t._v("I/O")]),t._v(" "),_("li",[t._v("UI rendering")])]),t._v(" "),_("h2",{attrs:{id:"执行流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#执行流程"}},[t._v("#")]),t._v(" 执行流程")]),t._v(" "),_("ul",[_("li",[t._v("执行同步代码")]),t._v(" "),_("li",[t._v("执行栈为空, 查询是否有微任务需要执行")]),t._v(" "),_("li",[t._v("执行所有微任务")]),t._v(" "),_("li",[t._v("执行所有宏任务")]),t._v(" "),_("li",[t._v("开始下一轮事件循环")])])])}),[],!1,null,null,null);v.default=s.exports}}]);