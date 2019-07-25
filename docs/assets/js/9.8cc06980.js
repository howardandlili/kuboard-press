(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{114:function(t,_,v){t.exports=v.p+"assets/img/image-20190723115721514.bf981ef3.png"},229:function(t,_,v){t.exports=v.p+"assets/img/image-20190723115852719.f1658660.png"},230:function(t,_,v){t.exports=v.p+"assets/img/image-20190723115912645.393d67ff.png"},231:function(t,_,v){t.exports=v.p+"assets/img/image-20190723115940862.dfeacc57.png"},232:function(t,_,v){t.exports=v.p+"assets/img/image-20190723120011972.0f0914c5.png"},233:function(t,_,v){t.exports=v.p+"assets/img/image-20190723120050894.9b1d6350.png"},234:function(t,_,v){t.exports=v.p+"assets/img/image-20190723120104474.617a620a.png"},235:function(t,_,v){t.exports=v.p+"assets/img/image-20190723120125425.a46d7874.png"},371:function(t,_,v){"use strict";v.r(_);var e=v(0),s=Object(e.a)({},function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"部署-busybox"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署-busybox","aria-hidden":"true"}},[t._v("#")]),t._v(" 部署 busybox")]),t._v(" "),e("h2",{attrs:{id:"前提"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提","aria-hidden":"true"}},[t._v("#")]),t._v(" 前提")]),t._v(" "),e("p",[t._v("必须具备如下条件：")]),t._v(" "),e("ul",[e("li",[t._v("Kubernetes 集群")]),t._v(" "),e("li",[t._v("已在集群中安装 Kuboard")])]),t._v(" "),e("p",[t._v("假设您已经进入了 Kuboard 名称空间界面，如下图所示。可参考 "),e("router-link",{attrs:{to:"/guide/cluster/namespace.html#创建名称空间"}},[t._v("创建名称空间")])],1),t._v(" "),e("p",[e("img",{attrs:{src:v(114),alt:"image-20190723115721514"}})]),t._v(" "),e("h2",{attrs:{id:"部署-busybox-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部署-busybox-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 部署 busybox")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://hub.docker.com/_/busybox",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看 busybox 介绍"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Busybox 是一个非常小巧（不到5M）的容器，此处用它来展示如何将一个 docker image 通过 Kuboard 部署到 kubernetes 集群中。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("点击 "),e("em",[e("strong",[t._v("创建工作负载按钮")])])]),t._v(" "),e("p",[t._v("填写表单如下：")])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("字段名称")]),t._v(" "),e("th",[t._v("填写内容")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("服务类型")]),t._v(" "),e("td",[t._v("Deployment")]),t._v(" "),e("td",[t._v("Kubernetes 的 Deployment 类型")])]),t._v(" "),e("tr",[e("td",[t._v("服务分层")]),t._v(" "),e("td",[t._v("中间件")]),t._v(" "),e("td",[t._v("生成的Kuberenetes对象以 cloud- 作为前缀，"),e("br"),t._v("并显示在中间件分层中")])]),t._v(" "),e("tr",[e("td",[t._v("服务名称")]),t._v(" "),e("td",[t._v("busybox")]),t._v(" "),e("td",[t._v("显示在 Kuboard 中的名称")])]),t._v(" "),e("tr",[e("td",[t._v("副本数量")]),t._v(" "),e("td",[t._v("1")]),t._v(" "),e("td",[t._v("replicas")])]),t._v(" "),e("tr",[e("td",[t._v("容器名称")]),t._v(" "),e("td",[t._v("busybox")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("镜像")]),t._v(" "),e("td",[t._v("busybox:1.29")]),t._v(" "),e("td",[t._v("hub.docker.com 中的 busybox 镜像")])]),t._v(" "),e("tr",[e("td",[t._v("Command")]),t._v(" "),e("td",[t._v("sleep")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("Command")]),t._v(" "),e("td",[t._v("3600")]),t._v(" "),e("td")])])]),t._v(" "),e("p",[e("img",{attrs:{src:v(229),alt:"image-20190723115852719"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("完成表单填写后，点击 "),e("em",[e("strong",[t._v("保存")])])]),t._v(" "),e("p",[t._v("Kuboard 将对表单参数进行校验，通过后，方可执行对集群的变更操作。")])])]),t._v(" "),e("p",[e("img",{attrs:{src:v(230),alt:"image-20190723115912645"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("点击 "),e("em",[e("strong",[t._v("应用")])])]),t._v(" "),e("p",[t._v("Kuboard 执行对集群的变更操作，变更的过程中，产生的事件以通知消息的形式显示出来。")])])]),t._v(" "),e("p",[e("img",{attrs:{src:v(231),alt:"image-20190723115940862"}})]),t._v(" "),e("h2",{attrs:{id:"验证工作负载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#验证工作负载","aria-hidden":"true"}},[t._v("#")]),t._v(" 验证工作负载")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("点击 "),e("em",[e("strong",[t._v("完成")])])]),t._v(" "),e("p",[t._v("点击完成后，可查看工作负载的信息。该界面分成四个区域：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("页头区")]),t._v(" "),e("p",[t._v("页头区包含对该工作负载（本案例中为 Deployment）的操作按钮。可执行的操作有："),e("em",[e("strong",[t._v("编辑")])]),t._v(" / "),e("em",[e("strong",[t._v("伸缩")])]),t._v(" / "),e("em",[e("strong",[t._v("刷新")])]),t._v(" / "),e("em",[e("strong",[t._v("删除")])])])]),t._v(" "),e("li",[e("p",[t._v("工作负载基本信息")]),t._v(" "),e("p",[t._v("基本信息区显示了工作负载的 "),e("em",[e("strong",[t._v("基本信息")])]),t._v(" 、"),e("em",[e("strong",[t._v("运行时信息")])]),t._v("、"),e("em",[e("strong",[t._v("访问方式")])]),t._v("（Service）、"),e("em",[e("strong",[t._v("互联网入口")])]),t._v("（Ingress）")])]),t._v(" "),e("li",[e("p",[t._v("容器组列表")]),t._v(" "),e("p",[t._v("容器组列表区显示了该当前对应的所有容器组（Pod），容器组列表区监听集群的动态变化，当您执行伸缩操作、或者删除容器组操作时，无需刷新，就可以查看到最新的容器组信息。")])]),t._v(" "),e("li",[e("p",[t._v("容器组详情")]),t._v(" "),e("p",[t._v("容器组详情区显示了当前选中容器组的信息，其中包括：")]),t._v(" "),e("ul",[e("li",[t._v("容器组相关事件")]),t._v(" "),e("li",[t._v("容器组基本信息，及删除容器组的操作按钮。（此区域还包括容器组相关的监控操作，监控模块在后续的章节中介绍）")]),t._v(" "),e("li",[t._v("容器基本信息，及查看容器日志、打开容器终端的按钮。（此区域还包括容器相关的监控操作，监控模块在后续的章节中介绍）")])])])])])]),t._v(" "),e("p",[e("img",{attrs:{src:v(232),alt:"image-20190723120011972"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("点击 "),e("em",[e("strong",[t._v("终端")])])]),t._v(" "),e("p",[t._v("此时打开了该容器的控制台，Kuboard 默认使用 /bin/bash 终端程序，而 busybox 镜像中并不包含 /bin/bash，因此您会看到一个如下图所示的错误提示：")])])]),t._v(" "),e("p",[e("img",{attrs:{src:v(233),alt:"image-20190723120050894"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("点击 "),e("em",[e("strong",[t._v("切换到 /bin/sh")])])]),t._v(" "),e("p",[t._v("点击屏幕左上角的 "),e("em",[e("strong",[t._v("切换到 /bin/sh")])])])])]),t._v(" "),e("p",[e("img",{attrs:{src:v(234),alt:"image-20190723120104474"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("输入 "),e("em",[t._v("export")]),t._v(" 并回车")]),t._v(" "),e("p",[t._v("输入 "),e("em",[t._v("export")]),t._v(" 并回车后，可查看该容器当前的环境变量。您也可以在终端中执行任何容器内部的命令。在您完成容器的部署之后，终端界面是非常有效的问题诊断工具之一。")])])]),t._v(" "),e("p",[e("img",{attrs:{src:v(235),alt:"image-20190723120125425"}})])])},[],!1,null,null,null);_.default=s.exports}}]);