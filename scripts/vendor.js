! function(e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if(!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
	"use strict";

	function n(e, t) {
		t = t || te;
		var n = t.createElement("script");
		n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
	}

	function o(e) {
		var t = !!e && "length" in e && e.length,
			n = he.type(e);
		return "function" !== n && !he.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}

	function r(e, t, n) {
		return he.isFunction(t) ? he.grep(e, function(e, o) {
			return !!t.call(e, o, e) !== n
		}) : t.nodeType ? he.grep(e, function(e) {
			return e === t !== n
		}) : "string" != typeof t ? he.grep(e, function(e) {
			return ae.call(t, e) > -1 !== n
		}) : Se.test(t) ? he.filter(t, e, n) : (t = he.filter(t, e), he.grep(e, function(e) {
			return ae.call(t, e) > -1 !== n && 1 === e.nodeType
		}))
	}

	function i(e, t) {
		for(;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}

	function a(e) {
		var t = {};
		return he.each(e.match(De) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function s(e) {
		return e
	}

	function l(e) {
		throw e
	}

	function c(e, t, n) {
		var o;
		try {
			e && he.isFunction(o = e.promise) ? o.call(e).done(t).fail(n) : e && he.isFunction(o = e.then) ? o.call(e, t, n) : t.call(void 0, e)
		} catch(e) {
			n.call(void 0, e)
		}
	}

	function u() {
		te.removeEventListener("DOMContentLoaded", u), e.removeEventListener("load", u), he.ready()
	}

	function f() {
		this.expando = he.expando + f.uid++
	}

	function d(e) {
		return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Me.test(e) ? JSON.parse(e) : e)
	}

	function p(e, t, n) {
		var o;
		if(void 0 === n && 1 === e.nodeType)
			if(o = "data-" + t.replace(Re, "-$&").toLowerCase(), n = e.getAttribute(o), "string" == typeof n) {
				try {
					n = d(n)
				} catch(e) {}
				Fe.set(e, t, n)
			} else n = void 0;
		return n
	}

	function h(e, t, n, o) {
		var r, i = 1,
			a = 20,
			s = o ? function() {
				return o.cur()
			} : function() {
				return he.css(e, t, "")
			},
			l = s(),
			c = n && n[3] || (he.cssNumber[t] ? "" : "px"),
			u = (he.cssNumber[t] || "px" !== c && +l) && Be.exec(he.css(e, t));
		if(u && u[3] !== c) {
			c = c || u[3], n = n || [], u = +l || 1;
			do i = i || ".5", u /= i, he.style(e, t, u + c); while (i !== (i = s() / l) && 1 !== i && --a)
		}
		return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], o && (o.unit = c, o.start = u, o.end = r)), r
	}

	function v(e) {
		var t, n = e.ownerDocument,
			o = e.nodeName,
			r = Xe[o];
		return r ? r : (t = n.body.appendChild(n.createElement(o)), r = he.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), Xe[o] = r, r)
	}

	function g(e, t) {
		for(var n, o, r = [], i = 0, a = e.length; i < a; i++) o = e[i], o.style && (n = o.style.display, t ? ("none" === n && (r[i] = Ie.get(o, "display") || null, r[i] || (o.style.display = "")), "" === o.style.display && ze(o) && (r[i] = v(o))) : "none" !== n && (r[i] = "none", Ie.set(o, "display", n)));
		for(i = 0; i < a; i++) null != r[i] && (e[i].style.display = r[i]);
		return e
	}

	function m(e, t) {
		var n;
		return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && he.nodeName(e, t) ? he.merge([e], n) : n
	}

	function y(e, t) {
		for(var n = 0, o = e.length; n < o; n++) Ie.set(e[n], "globalEval", !t || Ie.get(t[n], "globalEval"))
	}

	function x(e, t, n, o, r) {
		for(var i, a, s, l, c, u, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
			if(i = e[p], i || 0 === i)
				if("object" === he.type(i)) he.merge(d, i.nodeType ? [i] : i);
				else if(Ge.test(i)) {
			for(a = a || f.appendChild(t.createElement("div")), s = (Ue.exec(i) || ["", ""])[1].toLowerCase(), l = Ye[s] || Ye._default, a.innerHTML = l[1] + he.htmlPrefilter(i) + l[2], u = l[0]; u--;) a = a.lastChild;
			he.merge(d, a.childNodes), a = f.firstChild, a.textContent = ""
		} else d.push(t.createTextNode(i));
		for(f.textContent = "", p = 0; i = d[p++];)
			if(o && he.inArray(i, o) > -1) r && r.push(i);
			else if(c = he.contains(i.ownerDocument, i), a = m(f.appendChild(i), "script"), c && y(a), n)
			for(u = 0; i = a[u++];) Ve.test(i.type || "") && n.push(i);
		return f
	}

	function b() {
		return !0
	}

	function w() {
		return !1
	}

	function T() {
		try {
			return te.activeElement
		} catch(e) {}
	}

	function C(e, t, n, o, r, i) {
		var a, s;
		if("object" == typeof t) {
			"string" != typeof n && (o = o || n, n = void 0);
			for(s in t) C(e, s, n, o, t[s], i);
			return e
		}
		if(null == o && null == r ? (r = n, o = n = void 0) : null == r && ("string" == typeof n ? (r = o, o = void 0) : (r = o, o = n, n = void 0)), r === !1) r = w;
		else if(!r) return e;
		return 1 === i && (a = r, r = function(e) {
			return he().off(e), a.apply(this, arguments)
		}, r.guid = a.guid || (a.guid = he.guid++)), e.each(function() {
			he.event.add(this, t, r, o, n)
		})
	}

	function S(e, t) {
		return he.nodeName(e, "table") && he.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
	}

	function k(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function E(e) {
		var t = ot.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}

	function A(e, t) {
		var n, o, r, i, a, s, l, c;
		if(1 === t.nodeType) {
			if(Ie.hasData(e) && (i = Ie.access(e), a = Ie.set(t, i), c = i.events)) {
				delete a.handle, a.events = {};
				for(r in c)
					for(n = 0, o = c[r].length; n < o; n++) he.event.add(t, r, c[r][n])
			}
			Fe.hasData(e) && (s = Fe.access(e), l = he.extend({}, s), Fe.set(t, l))
		}
	}

	function L(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && _e.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
	}

	function N(e, t, o, r) {
		t = re.apply([], t);
		var i, a, s, l, c, u, f = 0,
			d = e.length,
			p = d - 1,
			h = t[0],
			v = he.isFunction(h);
		if(v || d > 1 && "string" == typeof h && !de.checkClone && nt.test(h)) return e.each(function(n) {
			var i = e.eq(n);
			v && (t[0] = h.call(this, n, i.html())), N(i, t, o, r)
		});
		if(d && (i = x(t, e[0].ownerDocument, !1, e, r), a = i.firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
			for(s = he.map(m(i, "script"), k), l = s.length; f < d; f++) c = i, f !== p && (c = he.clone(c, !0, !0), l && he.merge(s, m(c, "script"))), o.call(e[f], c, f);
			if(l)
				for(u = s[s.length - 1].ownerDocument, he.map(s, E), f = 0; f < l; f++) c = s[f], Ve.test(c.type || "") && !Ie.access(c, "globalEval") && he.contains(u, c) && (c.src ? he._evalUrl && he._evalUrl(c.src) : n(c.textContent.replace(rt, ""), u))
		}
		return e
	}

	function D(e, t, n) {
		for(var o, r = t ? he.filter(t, e) : e, i = 0; null != (o = r[i]); i++) n || 1 !== o.nodeType || he.cleanData(m(o)), o.parentNode && (n && he.contains(o.ownerDocument, o) && y(m(o, "script")), o.parentNode.removeChild(o));
		return e
	}

	function j(e, t, n) {
		var o, r, i, a, s = e.style;
		return n = n || st(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || he.contains(e.ownerDocument, e) || (a = he.style(e, t)), !de.pixelMarginRight() && at.test(a) && it.test(t) && (o = s.width, r = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = o, s.minWidth = r, s.maxWidth = i)), void 0 !== a ? a + "" : a
	}

	function q(e, t) {
		return {
			get: function() {
				return e() ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}

	function H(e) {
		if(e in dt) return e;
		for(var t = e[0].toUpperCase() + e.slice(1), n = ft.length; n--;)
			if(e = ft[n] + t, e in dt) return e
	}

	function O(e, t, n) {
		var o = Be.exec(t);
		return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t
	}

	function I(e, t, n, o, r) {
		var i, a = 0;
		for(i = n === (o ? "border" : "content") ? 4 : "width" === t ? 1 : 0; i < 4; i += 2) "margin" === n && (a += he.css(e, n + We[i], !0, r)), o ? ("content" === n && (a -= he.css(e, "padding" + We[i], !0, r)), "margin" !== n && (a -= he.css(e, "border" + We[i] + "Width", !0, r))) : (a += he.css(e, "padding" + We[i], !0, r), "padding" !== n && (a += he.css(e, "border" + We[i] + "Width", !0, r)));
		return a
	}

	function F(e, t, n) {
		var o, r = !0,
			i = st(e),
			a = "border-box" === he.css(e, "boxSizing", !1, i);
		if(e.getClientRects().length && (o = e.getBoundingClientRect()[t]), o <= 0 || null == o) {
			if(o = j(e, t, i), (o < 0 || null == o) && (o = e.style[t]), at.test(o)) return o;
			r = a && (de.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
		}
		return o + I(e, t, n || (a ? "border" : "content"), r, i) + "px"
	}

	function M(e, t, n, o, r) {
		return new M.prototype.init(e, t, n, o, r)
	}

	function R() {
		ht && (e.requestAnimationFrame(R), he.fx.tick())
	}

	function P() {
		return e.setTimeout(function() {
			pt = void 0
		}), pt = he.now()
	}

	function B(e, t) {
		var n, o = 0,
			r = {
				height: e
			};
		for(t = t ? 1 : 0; o < 4; o += 2 - t) n = We[o], r["margin" + n] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}

	function W(e, t, n) {
		for(var o, r = (X.tweeners[t] || []).concat(X.tweeners["*"]), i = 0, a = r.length; i < a; i++)
			if(o = r[i].call(n, t, e)) return o
	}

	function z(e, t, n) {
		var o, r, i, a, s, l, c, u, f = "width" in t || "height" in t,
			d = this,
			p = {},
			h = e.style,
			v = e.nodeType && ze(e),
			m = Ie.get(e, "fxshow");
		n.queue || (a = he._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
			a.unqueued || s()
		}), a.unqueued++, d.always(function() {
			d.always(function() {
				a.unqueued--, he.queue(e, "fx").length || a.empty.fire()
			})
		}));
		for(o in t)
			if(r = t[o], vt.test(r)) {
				if(delete t[o], i = i || "toggle" === r, r === (v ? "hide" : "show")) {
					if("show" !== r || !m || void 0 === m[o]) continue;
					v = !0
				}
				p[o] = m && m[o] || he.style(e, o)
			}
		if(l = !he.isEmptyObject(t), l || !he.isEmptyObject(p)) {
			f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = m && m.display, null == c && (c = Ie.get(e, "display")), u = he.css(e, "display"), "none" === u && (c ? u = c : (g([e], !0), c = e.style.display || c, u = he.css(e, "display"), g([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === he.css(e, "float") && (l || (d.done(function() {
				h.display = c
			}), null == c && (u = h.display, c = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
				h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
			})), l = !1;
			for(o in p) l || (m ? "hidden" in m && (v = m.hidden) : m = Ie.access(e, "fxshow", {
				display: c
			}), i && (m.hidden = !v), v && g([e], !0), d.done(function() {
				v || g([e]), Ie.remove(e, "fxshow");
				for(o in p) he.style(e, o, p[o])
			})), l = W(v ? m[o] : 0, o, d), o in m || (m[o] = l.start, v && (l.end = l.start, l.start = 0))
		}
	}

	function $(e, t) {
		var n, o, r, i, a;
		for(n in e)
			if(o = he.camelCase(n), r = t[o], i = e[n], he.isArray(i) && (r = i[1], i = e[n] = i[0]), n !== o && (e[o] = i, delete e[n]), a = he.cssHooks[o], a && "expand" in a) {
				i = a.expand(i), delete e[o];
				for(n in i) n in e || (e[n] = i[n], t[n] = r)
			} else t[o] = r
	}

	function X(e, t, n) {
		var o, r, i = 0,
			a = X.prefilters.length,
			s = he.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if(r) return !1;
				for(var t = pt || P(), n = Math.max(0, c.startTime + c.duration - t), o = n / c.duration || 0, i = 1 - o, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(i);
				return s.notifyWith(e, [c, i, n]), i < 1 && l ? n : (s.resolveWith(e, [c]), !1)
			},
			c = s.promise({
				elem: e,
				props: he.extend({}, t),
				opts: he.extend(!0, {
					specialEasing: {},
					easing: he.easing._default
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: pt || P(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var o = he.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(o), o
				},
				stop: function(t) {
					var n = 0,
						o = t ? c.tweens.length : 0;
					if(r) return this;
					for(r = !0; n < o; n++) c.tweens[n].run(1);
					return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
				}
			}),
			u = c.props;
		for($(u, c.opts.specialEasing); i < a; i++)
			if(o = X.prefilters[i].call(c, e, u, c.opts)) return he.isFunction(o.stop) && (he._queueHooks(c.elem, c.opts.queue).stop = he.proxy(o.stop, o)), o;
		return he.map(u, W, c), he.isFunction(c.opts.start) && c.opts.start.call(e, c), he.fx.timer(he.extend(l, {
			elem: e,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}

	function _(e) {
		var t = e.match(De) || [];
		return t.join(" ")
	}

	function U(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function V(e, t, n, o) {
		var r;
		if(he.isArray(t)) he.each(t, function(t, r) {
			n || Et.test(e) ? o(e, r) : V(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, o)
		});
		else if(n || "object" !== he.type(t)) o(e, t);
		else
			for(r in t) V(e + "[" + r + "]", t[r], n, o)
	}

	function Y(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var o, r = 0,
				i = t.toLowerCase().match(De) || [];
			if(he.isFunction(n))
				for(; o = i[r++];) "+" === o[0] ? (o = o.slice(1) || "*", (e[o] = e[o] || []).unshift(n)) : (e[o] = e[o] || []).push(n)
		}
	}

	function G(e, t, n, o) {
		function r(s) {
			var l;
			return i[s] = !0, he.each(e[s] || [], function(e, s) {
				var c = s(t, n, o);
				return "string" != typeof c || a || i[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
			}), l
		}
		var i = {},
			a = e === Rt;
		return r(t.dataTypes[0]) || !i["*"] && r("*")
	}

	function Q(e, t) {
		var n, o, r = he.ajaxSettings.flatOptions || {};
		for(n in t) void 0 !== t[n] && ((r[n] ? e : o || (o = {}))[n] = t[n]);
		return o && he.extend(!0, e, o), e
	}

	function K(e, t, n) {
		for(var o, r, i, a, s = e.contents, l = e.dataTypes;
			"*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
		if(o)
			for(r in s)
				if(s[r] && s[r].test(o)) {
					l.unshift(r);
					break
				}
		if(l[0] in n) i = l[0];
		else {
			for(r in n) {
				if(!l[0] || e.converters[r + " " + l[0]]) {
					i = r;
					break
				}
				a || (a = r)
			}
			i = i || a
		}
		if(i) return i !== l[0] && l.unshift(i), n[i]
	}

	function J(e, t, n, o) {
		var r, i, a, s, l, c = {},
			u = e.dataTypes.slice();
		if(u[1])
			for(a in e.converters) c[a.toLowerCase()] = e.converters[a];
		for(i = u.shift(); i;)
			if(e.responseFields[i] && (n[e.responseFields[i]] = t), !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = u.shift())
				if("*" === i) i = l;
				else if("*" !== l && l !== i) {
			if(a = c[l + " " + i] || c["* " + i], !a)
				for(r in c)
					if(s = r.split(" "), s[1] === i && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
						a === !0 ? a = c[r] : c[r] !== !0 && (i = s[0], u.unshift(s[1]));
						break
					}
			if(a !== !0)
				if(a && e.throws) t = a(t);
				else try {
					t = a(t)
				} catch(e) {
					return {
						state: "parsererror",
						error: a ? e : "No conversion from " + l + " to " + i
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}

	function Z(e) {
		return he.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	var ee = [],
		te = e.document,
		ne = Object.getPrototypeOf,
		oe = ee.slice,
		re = ee.concat,
		ie = ee.push,
		ae = ee.indexOf,
		se = {},
		le = se.toString,
		ce = se.hasOwnProperty,
		ue = ce.toString,
		fe = ue.call(Object),
		de = {},
		pe = "3.1.1",
		he = function(e, t) {
			return new he.fn.init(e, t)
		},
		ve = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		ge = /^-ms-/,
		me = /-([a-z])/g,
		ye = function(e, t) {
			return t.toUpperCase()
		};
	he.fn = he.prototype = {
		jquery: pe,
		constructor: he,
		length: 0,
		toArray: function() {
			return oe.call(this)
		},
		get: function(e) {
			return null == e ? oe.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack: function(e) {
			var t = he.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function(e) {
			return he.each(this, e)
		},
		map: function(e) {
			return this.pushStack(he.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(oe.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: ie,
		sort: ee.sort,
		splice: ee.splice
	}, he.extend = he.fn.extend = function() {
		var e, t, n, o, r, i, a = arguments[0] || {},
			s = 1,
			l = arguments.length,
			c = !1;
		for("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || he.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
			if(null != (e = arguments[s]))
				for(t in e) n = a[t], o = e[t], a !== o && (c && o && (he.isPlainObject(o) || (r = he.isArray(o))) ? (r ? (r = !1, i = n && he.isArray(n) ? n : []) : i = n && he.isPlainObject(n) ? n : {}, a[t] = he.extend(c, i, o)) : void 0 !== o && (a[t] = o));
		return a
	}, he.extend({
		expando: "jQuery" + (pe + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === he.type(e)
		},
		isArray: Array.isArray,
		isWindow: function(e) {
			return null != e && e === e.window
		},
		isNumeric: function(e) {
			var t = he.type(e);
			return("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
		},
		isPlainObject: function(e) {
			var t, n;
			return !(!e || "[object Object]" !== le.call(e) || (t = ne(e)) && (n = ce.call(t, "constructor") && t.constructor, "function" != typeof n || ue.call(n) !== fe))
		},
		isEmptyObject: function(e) {
			var t;
			for(t in e) return !1;
			return !0
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? se[le.call(e)] || "object" : typeof e
		},
		globalEval: function(e) {
			n(e)
		},
		camelCase: function(e) {
			return e.replace(ge, "ms-").replace(me, ye)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t) {
			var n, r = 0;
			if(o(e))
				for(n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
			else
				for(r in e)
					if(t.call(e[r], r, e[r]) === !1) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(ve, "")
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (o(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : ie.call(n, e)), n
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : ae.call(t, e, n)
		},
		merge: function(e, t) {
			for(var n = +t.length, o = 0, r = e.length; o < n; o++) e[r++] = t[o];
			return e.length = r, e
		},
		grep: function(e, t, n) {
			for(var o, r = [], i = 0, a = e.length, s = !n; i < a; i++) o = !t(e[i], i), o !== s && r.push(e[i]);
			return r
		},
		map: function(e, t, n) {
			var r, i, a = 0,
				s = [];
			if(o(e))
				for(r = e.length; a < r; a++) i = t(e[a], a, n), null != i && s.push(i);
			else
				for(a in e) i = t(e[a], a, n), null != i && s.push(i);
			return re.apply([], s)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, o, r;
			if("string" == typeof t && (n = e[t], t = e, e = n), he.isFunction(e)) return o = oe.call(arguments, 2), r = function() {
				return e.apply(t || this, o.concat(oe.call(arguments)))
			}, r.guid = e.guid = e.guid || he.guid++, r
		},
		now: Date.now,
		support: de
	}), "function" == typeof Symbol && (he.fn[Symbol.iterator] = ee[Symbol.iterator]), he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
		se["[object " + t + "]"] = t.toLowerCase()
	});
	var xe = function(e) {
		function t(e, t, n, o) {
			var r, i, a, s, l, c, u, d = t && t.ownerDocument,
				h = t ? t.nodeType : 9;
			if(n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
			if(!o && ((t ? t.ownerDocument || t : W) !== H && q(t), t = t || H, I)) {
				if(11 !== h && (l = me.exec(e)))
					if(r = l[1]) {
						if(9 === h) {
							if(!(a = t.getElementById(r))) return n;
							if(a.id === r) return n.push(a), n
						} else if(d && (a = d.getElementById(r)) && P(t, a) && a.id === r) return n.push(a), n
					} else {
						if(l[2]) return J.apply(n, t.getElementsByTagName(e)), n;
						if((r = l[3]) && T.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(r)), n
					}
				if(T.qsa && !U[e + " "] && (!F || !F.test(e))) {
					if(1 !== h) d = t, u = e;
					else if("object" !== t.nodeName.toLowerCase()) {
						for((s = t.getAttribute("id")) ? s = s.replace(we, Te) : t.setAttribute("id", s = B), c = E(e), i = c.length; i--;) c[i] = "#" + s + " " + p(c[i]);
						u = c.join(","), d = ye.test(e) && f(t.parentNode) || t
					}
					if(u) try {
						return J.apply(n, d.querySelectorAll(u)), n
					} catch(e) {} finally {
						s === B && t.removeAttribute("id")
					}
				}
			}
			return L(e.replace(se, "$1"), t, n, o)
		}

		function n() {
			function e(n, o) {
				return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = o
			}
			var t = [];
			return e
		}

		function o(e) {
			return e[B] = !0, e
		}

		function r(e) {
			var t = H.createElement("fieldset");
			try {
				return !!e(t)
			} catch(e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function i(e, t) {
			for(var n = e.split("|"), o = n.length; o--;) C.attrHandle[n[o]] = t
		}

		function a(e, t) {
			var n = t && e,
				o = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if(o) return o;
			if(n)
				for(; n = n.nextSibling;)
					if(n === t) return -1;
			return e ? 1 : -1
		}

		function s(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}

		function l(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return("input" === n || "button" === n) && t.type === e
			}
		}

		function c(e) {
			return function(t) {
				return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Se(t) === e : t.disabled === e : "label" in t && t.disabled === e
			}
		}

		function u(e) {
			return o(function(t) {
				return t = +t, o(function(n, o) {
					for(var r, i = e([], n.length, t), a = i.length; a--;) n[r = i[a]] && (n[r] = !(o[r] = n[r]))
				})
			})
		}

		function f(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}

		function d() {}

		function p(e) {
			for(var t = 0, n = e.length, o = ""; t < n; t++) o += e[t].value;
			return o
		}

		function h(e, t, n) {
			var o = t.dir,
				r = t.next,
				i = r || o,
				a = n && "parentNode" === i,
				s = $++;
			return t.first ? function(t, n, r) {
				for(; t = t[o];)
					if(1 === t.nodeType || a) return e(t, n, r);
				return !1
			} : function(t, n, l) {
				var c, u, f, d = [z, s];
				if(l) {
					for(; t = t[o];)
						if((1 === t.nodeType || a) && e(t, n, l)) return !0
				} else
					for(; t = t[o];)
						if(1 === t.nodeType || a)
							if(f = t[B] || (t[B] = {}), u = f[t.uniqueID] || (f[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[o] || t;
							else {
								if((c = u[i]) && c[0] === z && c[1] === s) return d[2] = c[2];
								if(u[i] = d, d[2] = e(t, n, l)) return !0
							} return !1
			}
		}

		function v(e) {
			return e.length > 1 ? function(t, n, o) {
				for(var r = e.length; r--;)
					if(!e[r](t, n, o)) return !1;
				return !0
			} : e[0]
		}

		function g(e, n, o) {
			for(var r = 0, i = n.length; r < i; r++) t(e, n[r], o);
			return o
		}

		function m(e, t, n, o, r) {
			for(var i, a = [], s = 0, l = e.length, c = null != t; s < l; s++)(i = e[s]) && (n && !n(i, o, r) || (a.push(i), c && t.push(s)));
			return a
		}

		function y(e, t, n, r, i, a) {
			return r && !r[B] && (r = y(r)), i && !i[B] && (i = y(i, a)), o(function(o, a, s, l) {
				var c, u, f, d = [],
					p = [],
					h = a.length,
					v = o || g(t || "*", s.nodeType ? [s] : s, []),
					y = !e || !o && t ? v : m(v, d, e, s, l),
					x = n ? i || (o ? e : h || r) ? [] : a : y;
				if(n && n(y, x, s, l), r)
					for(c = m(x, p), r(c, [], s, l), u = c.length; u--;)(f = c[u]) && (x[p[u]] = !(y[p[u]] = f));
				if(o) {
					if(i || e) {
						if(i) {
							for(c = [], u = x.length; u--;)(f = x[u]) && c.push(y[u] = f);
							i(null, x = [], c, l)
						}
						for(u = x.length; u--;)(f = x[u]) && (c = i ? ee(o, f) : d[u]) > -1 && (o[c] = !(a[c] = f))
					}
				} else x = m(x === a ? x.splice(h, x.length) : x), i ? i(null, a, x, l) : J.apply(a, x)
			})
		}

		function x(e) {
			for(var t, n, o, r = e.length, i = C.relative[e[0].type], a = i || C.relative[" "], s = i ? 1 : 0, l = h(function(e) {
					return e === t
				}, a, !0), c = h(function(e) {
					return ee(t, e) > -1
				}, a, !0), u = [function(e, n, o) {
					var r = !i && (o || n !== N) || ((t = n).nodeType ? l(e, n, o) : c(e, n, o));
					return t = null, r
				}]; s < r; s++)
				if(n = C.relative[e[s].type]) u = [h(v(u), n)];
				else {
					if(n = C.filter[e[s].type].apply(null, e[s].matches), n[B]) {
						for(o = ++s; o < r && !C.relative[e[o].type]; o++);
						return y(s > 1 && v(u), s > 1 && p(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace(se, "$1"), n, s < o && x(e.slice(s, o)), o < r && x(e = e.slice(o)), o < r && p(e))
					}
					u.push(n)
				}
			return v(u)
		}

		function b(e, n) {
			var r = n.length > 0,
				i = e.length > 0,
				a = function(o, a, s, l, c) {
					var u, f, d, p = 0,
						h = "0",
						v = o && [],
						g = [],
						y = N,
						x = o || i && C.find.TAG("*", c),
						b = z += null == y ? 1 : Math.random() || .1,
						w = x.length;
					for(c && (N = a === H || a || c); h !== w && null != (u = x[h]); h++) {
						if(i && u) {
							for(f = 0, a || u.ownerDocument === H || (q(u), s = !I); d = e[f++];)
								if(d(u, a || H, s)) {
									l.push(u);
									break
								}
							c && (z = b)
						}
						r && ((u = !d && u) && p--, o && v.push(u))
					}
					if(p += h, r && h !== p) {
						for(f = 0; d = n[f++];) d(v, g, a, s);
						if(o) {
							if(p > 0)
								for(; h--;) v[h] || g[h] || (g[h] = Q.call(l));
							g = m(g)
						}
						J.apply(l, g), c && !o && g.length > 0 && p + n.length > 1 && t.uniqueSort(l)
					}
					return c && (z = b, N = y), v
				};
			return r ? o(a) : a
		}
		var w, T, C, S, k, E, A, L, N, D, j, q, H, O, I, F, M, R, P, B = "sizzle" + 1 * new Date,
			W = e.document,
			z = 0,
			$ = 0,
			X = n(),
			_ = n(),
			U = n(),
			V = function(e, t) {
				return e === t && (j = !0), 0
			},
			Y = {}.hasOwnProperty,
			G = [],
			Q = G.pop,
			K = G.push,
			J = G.push,
			Z = G.slice,
			ee = function(e, t) {
				for(var n = 0, o = e.length; n < o; n++)
					if(e[n] === t) return n;
				return -1
			},
			te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			ne = "[\\x20\\t\\r\\n\\f]",
			oe = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			re = "\\[" + ne + "*(" + oe + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
			ie = ":(" + oe + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + re + ")*)|.*)\\)|)",
			ae = new RegExp(ne + "+", "g"),
			se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
			le = new RegExp("^" + ne + "*," + ne + "*"),
			ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
			ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
			fe = new RegExp(ie),
			de = new RegExp("^" + oe + "$"),
			pe = {
				ID: new RegExp("^#(" + oe + ")"),
				CLASS: new RegExp("^\\.(" + oe + ")"),
				TAG: new RegExp("^(" + oe + "|[*])"),
				ATTR: new RegExp("^" + re),
				PSEUDO: new RegExp("^" + ie),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + te + ")$", "i"),
				needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
			},
			he = /^(?:input|select|textarea|button)$/i,
			ve = /^h\d$/i,
			ge = /^[^{]+\{\s*\[native \w/,
			me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			ye = /[+~]/,
			xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
			be = function(e, t, n) {
				var o = "0x" + t - 65536;
				return o !== o || n ? t : o < 0 ? String.fromCharCode(o + 65536) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
			},
			we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			Te = function(e, t) {
				return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			Ce = function() {
				q()
			},
			Se = h(function(e) {
				return e.disabled === !0 && ("form" in e || "label" in e)
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			J.apply(G = Z.call(W.childNodes), W.childNodes), G[W.childNodes.length].nodeType
		} catch(e) {
			J = {
				apply: G.length ? function(e, t) {
					K.apply(e, Z.call(t))
				} : function(e, t) {
					for(var n = e.length, o = 0; e[n++] = t[o++];);
					e.length = n - 1
				}
			}
		}
		T = t.support = {}, k = t.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return !!t && "HTML" !== t.nodeName
		}, q = t.setDocument = function(e) {
			var t, n, o = e ? e.ownerDocument || e : W;
			return o !== H && 9 === o.nodeType && o.documentElement ? (H = o, O = H.documentElement, I = !k(H), W !== H && (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), T.attributes = r(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), T.getElementsByTagName = r(function(e) {
				return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length
			}), T.getElementsByClassName = ge.test(H.getElementsByClassName), T.getById = r(function(e) {
				return O.appendChild(e).id = B, !H.getElementsByName || !H.getElementsByName(B).length
			}), T.getById ? (C.filter.ID = function(e) {
				var t = e.replace(xe, be);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}, C.find.ID = function(e, t) {
				if("undefined" != typeof t.getElementById && I) {
					var n = t.getElementById(e);
					return n ? [n] : []
				}
			}) : (C.filter.ID = function(e) {
				var t = e.replace(xe, be);
				return function(e) {
					var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}, C.find.ID = function(e, t) {
				if("undefined" != typeof t.getElementById && I) {
					var n, o, r, i = t.getElementById(e);
					if(i) {
						if(n = i.getAttributeNode("id"), n && n.value === e) return [i];
						for(r = t.getElementsByName(e), o = 0; i = r[o++];)
							if(n = i.getAttributeNode("id"), n && n.value === e) return [i]
					}
					return []
				}
			}), C.find.TAG = T.getElementsByTagName ? function(e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
			} : function(e, t) {
				var n, o = [],
					r = 0,
					i = t.getElementsByTagName(e);
				if("*" === e) {
					for(; n = i[r++];) 1 === n.nodeType && o.push(n);
					return o
				}
				return i
			}, C.find.CLASS = T.getElementsByClassName && function(e, t) {
				if("undefined" != typeof t.getElementsByClassName && I) return t.getElementsByClassName(e)
			}, M = [], F = [], (T.qsa = ge.test(H.querySelectorAll)) && (r(function(e) {
				O.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + B + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || F.push(".#.+[+~]")
			}), r(function(e) {
				e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
				var t = H.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && F.push(":enabled", ":disabled"), O.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
			})), (T.matchesSelector = ge.test(R = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function(e) {
				T.disconnectedMatch = R.call(e, "*"), R.call(e, "[s!='']:x"), M.push("!=", ie)
			}), F = F.length && new RegExp(F.join("|")), M = M.length && new RegExp(M.join("|")), t = ge.test(O.compareDocumentPosition), P = t || ge.test(O.contains) ? function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					o = t && t.parentNode;
				return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
			} : function(e, t) {
				if(t)
					for(; t = t.parentNode;)
						if(t === e) return !0;
				return !1
			}, V = t ? function(e, t) {
				if(e === t) return j = !0, 0;
				var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === H || e.ownerDocument === W && P(W, e) ? -1 : t === H || t.ownerDocument === W && P(W, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
			} : function(e, t) {
				if(e === t) return j = !0, 0;
				var n, o = 0,
					r = e.parentNode,
					i = t.parentNode,
					s = [e],
					l = [t];
				if(!r || !i) return e === H ? -1 : t === H ? 1 : r ? -1 : i ? 1 : D ? ee(D, e) - ee(D, t) : 0;
				if(r === i) return a(e, t);
				for(n = e; n = n.parentNode;) s.unshift(n);
				for(n = t; n = n.parentNode;) l.unshift(n);
				for(; s[o] === l[o];) o++;
				return o ? a(s[o], l[o]) : s[o] === W ? -1 : l[o] === W ? 1 : 0
			}, H) : H
		}, t.matches = function(e, n) {
			return t(e, null, null, n)
		}, t.matchesSelector = function(e, n) {
			if((e.ownerDocument || e) !== H && q(e), n = n.replace(ue, "='$1']"), T.matchesSelector && I && !U[n + " "] && (!M || !M.test(n)) && (!F || !F.test(n))) try {
				var o = R.call(e, n);
				if(o || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return o
			} catch(e) {}
			return t(n, H, null, [e]).length > 0
		}, t.contains = function(e, t) {
			return(e.ownerDocument || e) !== H && q(e), P(e, t)
		}, t.attr = function(e, t) {
			(e.ownerDocument || e) !== H && q(e);
			var n = C.attrHandle[t.toLowerCase()],
				o = n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
			return void 0 !== o ? o : T.attributes || !I ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
		}, t.escape = function(e) {
			return(e + "").replace(we, Te)
		}, t.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, t.uniqueSort = function(e) {
			var t, n = [],
				o = 0,
				r = 0;
			if(j = !T.detectDuplicates, D = !T.sortStable && e.slice(0), e.sort(V), j) {
				for(; t = e[r++];) t === e[r] && (o = n.push(r));
				for(; o--;) e.splice(n[o], 1)
			}
			return D = null, e
		}, S = t.getText = function(e) {
			var t, n = "",
				o = 0,
				r = e.nodeType;
			if(r) {
				if(1 === r || 9 === r || 11 === r) {
					if("string" == typeof e.textContent) return e.textContent;
					for(e = e.firstChild; e; e = e.nextSibling) n += S(e)
				} else if(3 === r || 4 === r) return e.nodeValue
			} else
				for(; t = e[o++];) n += S(t);
			return n
		}, C = t.selectors = {
			cacheLength: 50,
			createPseudo: o,
			match: pe,
			attrHandle: {},
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(xe, be), e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[6] && e[2];
					return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(xe, be).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = X[e + " "];
					return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && X(e, function(e) {
						return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, n, o) {
					return function(r) {
						var i = t.attr(r, e);
						return null == i ? "!=" === n : !n || (i += "", "=" === n ? i === o : "!=" === n ? i !== o : "^=" === n ? o && 0 === i.indexOf(o) : "*=" === n ? o && i.indexOf(o) > -1 : "$=" === n ? o && i.slice(-o.length) === o : "~=" === n ? (" " + i.replace(ae, " ") + " ").indexOf(o) > -1 : "|=" === n && (i === o || i.slice(0, o.length + 1) === o + "-"))
					}
				},
				CHILD: function(e, t, n, o, r) {
					var i = "nth" !== e.slice(0, 3),
						a = "last" !== e.slice(-4),
						s = "of-type" === t;
					return 1 === o && 0 === r ? function(e) {
						return !!e.parentNode
					} : function(t, n, l) {
						var c, u, f, d, p, h, v = i !== a ? "nextSibling" : "previousSibling",
							g = t.parentNode,
							m = s && t.nodeName.toLowerCase(),
							y = !l && !s,
							x = !1;
						if(g) {
							if(i) {
								for(; v;) {
									for(d = t; d = d[v];)
										if(s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
									h = v = "only" === e && !h && "nextSibling"
								}
								return !0
							}
							if(h = [a ? g.firstChild : g.lastChild], a && y) {
								for(d = g, f = d[B] || (d[B] = {}), u = f[d.uniqueID] || (f[d.uniqueID] = {}), c = u[e] || [], p = c[0] === z && c[1], x = p && c[2], d = p && g.childNodes[p]; d = ++p && d && d[v] || (x = p = 0) || h.pop();)
									if(1 === d.nodeType && ++x && d === t) {
										u[e] = [z, p, x];
										break
									}
							} else if(y && (d = t, f = d[B] || (d[B] = {}), u = f[d.uniqueID] || (f[d.uniqueID] = {}), c = u[e] || [], p = c[0] === z && c[1], x = p), x === !1)
								for(;
									(d = ++p && d && d[v] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++x || (y && (f = d[B] || (d[B] = {}), u = f[d.uniqueID] || (f[d.uniqueID] = {}), u[e] = [z, x]), d !== t)););
							return x -= r, x === o || x % o === 0 && x / o >= 0
						}
					}
				},
				PSEUDO: function(e, n) {
					var r, i = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return i[B] ? i(n) : i.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function(e, t) {
						for(var o, r = i(e, n), a = r.length; a--;) o = ee(e, r[a]), e[o] = !(t[o] = r[a])
					}) : function(e) {
						return i(e, 0, r)
					}) : i
				}
			},
			pseudos: {
				not: o(function(e) {
					var t = [],
						n = [],
						r = A(e.replace(se, "$1"));
					return r[B] ? o(function(e, t, n, o) {
						for(var i, a = r(e, null, o, []), s = e.length; s--;)(i = a[s]) && (e[s] = !(t[s] = i))
					}) : function(e, o, i) {
						return t[0] = e, r(t, null, i, n), t[0] = null, !n.pop()
					}
				}),
				has: o(function(e) {
					return function(n) {
						return t(e, n).length > 0
					}
				}),
				contains: o(function(e) {
					return e = e.replace(xe, be),
						function(t) {
							return(t.textContent || t.innerText || S(t)).indexOf(e) > -1
						}
				}),
				lang: o(function(e) {
					return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(xe, be).toLowerCase(),
						function(t) {
							var n;
							do
								if(n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
							return !1;
						}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === O
				},
				focus: function(e) {
					return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: c(!1),
				disabled: c(!0),
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for(e = e.firstChild; e; e = e.nextSibling)
						if(e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !C.pseudos.empty(e)
				},
				header: function(e) {
					return ve.test(e.nodeName)
				},
				input: function(e) {
					return he.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: u(function() {
					return [0]
				}),
				last: u(function(e, t) {
					return [t - 1]
				}),
				eq: u(function(e, t, n) {
					return [n < 0 ? n + t : n]
				}),
				even: u(function(e, t) {
					for(var n = 0; n < t; n += 2) e.push(n);
					return e
				}),
				odd: u(function(e, t) {
					for(var n = 1; n < t; n += 2) e.push(n);
					return e
				}),
				lt: u(function(e, t, n) {
					for(var o = n < 0 ? n + t : n; --o >= 0;) e.push(o);
					return e
				}),
				gt: u(function(e, t, n) {
					for(var o = n < 0 ? n + t : n; ++o < t;) e.push(o);
					return e
				})
			}
		}, C.pseudos.nth = C.pseudos.eq;
		for(w in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) C.pseudos[w] = s(w);
		for(w in {
				submit: !0,
				reset: !0
			}) C.pseudos[w] = l(w);
		return d.prototype = C.filters = C.pseudos, C.setFilters = new d, E = t.tokenize = function(e, n) {
			var o, r, i, a, s, l, c, u = _[e + " "];
			if(u) return n ? 0 : u.slice(0);
			for(s = e, l = [], c = C.preFilter; s;) {
				o && !(r = le.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(i = [])), o = !1, (r = ce.exec(s)) && (o = r.shift(), i.push({
					value: o,
					type: r[0].replace(se, " ")
				}), s = s.slice(o.length));
				for(a in C.filter) !(r = pe[a].exec(s)) || c[a] && !(r = c[a](r)) || (o = r.shift(), i.push({
					value: o,
					type: a,
					matches: r
				}), s = s.slice(o.length));
				if(!o) break
			}
			return n ? s.length : s ? t.error(e) : _(e, l).slice(0)
		}, A = t.compile = function(e, t) {
			var n, o = [],
				r = [],
				i = U[e + " "];
			if(!i) {
				for(t || (t = E(e)), n = t.length; n--;) i = x(t[n]), i[B] ? o.push(i) : r.push(i);
				i = U(e, b(r, o)), i.selector = e
			}
			return i
		}, L = t.select = function(e, t, n, o) {
			var r, i, a, s, l, c = "function" == typeof e && e,
				u = !o && E(e = c.selector || e);
			if(n = n || [], 1 === u.length) {
				if(i = u[0] = u[0].slice(0), i.length > 2 && "ID" === (a = i[0]).type && 9 === t.nodeType && I && C.relative[i[1].type]) {
					if(t = (C.find.ID(a.matches[0].replace(xe, be), t) || [])[0], !t) return n;
					c && (t = t.parentNode), e = e.slice(i.shift().value.length)
				}
				for(r = pe.needsContext.test(e) ? 0 : i.length; r-- && (a = i[r], !C.relative[s = a.type]);)
					if((l = C.find[s]) && (o = l(a.matches[0].replace(xe, be), ye.test(i[0].type) && f(t.parentNode) || t))) {
						if(i.splice(r, 1), e = o.length && p(i), !e) return J.apply(n, o), n;
						break
					}
			}
			return(c || A(e, u))(o, t, !I, n, !t || ye.test(e) && f(t.parentNode) || t), n
		}, T.sortStable = B.split("").sort(V).join("") === B, T.detectDuplicates = !!j, q(), T.sortDetached = r(function(e) {
			return 1 & e.compareDocumentPosition(H.createElement("fieldset"))
		}), r(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || i("type|href|height|width", function(e, t, n) {
			if(!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), T.attributes && r(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || i("value", function(e, t, n) {
			if(!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
		}), r(function(e) {
			return null == e.getAttribute("disabled")
		}) || i(te, function(e, t, n) {
			var o;
			if(!n) return e[t] === !0 ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
		}), t
	}(e);
	he.find = xe, he.expr = xe.selectors, he.expr[":"] = he.expr.pseudos, he.uniqueSort = he.unique = xe.uniqueSort, he.text = xe.getText, he.isXMLDoc = xe.isXML, he.contains = xe.contains, he.escapeSelector = xe.escape;
	var be = function(e, t, n) {
			for(var o = [], r = void 0 !== n;
				(e = e[t]) && 9 !== e.nodeType;)
				if(1 === e.nodeType) {
					if(r && he(e).is(n)) break;
					o.push(e)
				}
			return o
		},
		we = function(e, t) {
			for(var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		Te = he.expr.match.needsContext,
		Ce = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
		Se = /^.[^:#\[\.,]*$/;
	he.filter = function(e, t, n) {
		var o = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === o.nodeType ? he.find.matchesSelector(o, e) ? [o] : [] : he.find.matches(e, he.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, he.fn.extend({
		find: function(e) {
			var t, n, o = this.length,
				r = this;
			if("string" != typeof e) return this.pushStack(he(e).filter(function() {
				for(t = 0; t < o; t++)
					if(he.contains(r[t], this)) return !0
			}));
			for(n = this.pushStack([]), t = 0; t < o; t++) he.find(e, r[t], n);
			return o > 1 ? he.uniqueSort(n) : n
		},
		filter: function(e) {
			return this.pushStack(r(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(r(this, e || [], !0))
		},
		is: function(e) {
			return !!r(this, "string" == typeof e && Te.test(e) ? he(e) : e || [], !1).length
		}
	});
	var ke, Ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
		Ae = he.fn.init = function(e, t, n) {
			var o, r;
			if(!e) return this;
			if(n = n || ke, "string" == typeof e) {
				if(o = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ee.exec(e), !o || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
				if(o[1]) {
					if(t = t instanceof he ? t[0] : t, he.merge(this, he.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : te, !0)), Ce.test(o[1]) && he.isPlainObject(t))
						for(o in t) he.isFunction(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
					return this
				}
				return r = te.getElementById(o[2]), r && (this[0] = r, this.length = 1), this
			}
			return e.nodeType ? (this[0] = e, this.length = 1, this) : he.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
		};
	Ae.prototype = he.fn, ke = he(te);
	var Le = /^(?:parents|prev(?:Until|All))/,
		Ne = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	he.fn.extend({
		has: function(e) {
			var t = he(e, this),
				n = t.length;
			return this.filter(function() {
				for(var e = 0; e < n; e++)
					if(he.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			var n, o = 0,
				r = this.length,
				i = [],
				a = "string" != typeof e && he(e);
			if(!Te.test(e))
				for(; o < r; o++)
					for(n = this[o]; n && n !== t; n = n.parentNode)
						if(n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
							i.push(n);
							break
						}
			return this.pushStack(i.length > 1 ? he.uniqueSort(i) : i)
		},
		index: function(e) {
			return e ? "string" == typeof e ? ae.call(he(e), this[0]) : ae.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), he.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return be(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return be(e, "parentNode", n)
		},
		next: function(e) {
			return i(e, "nextSibling")
		},
		prev: function(e) {
			return i(e, "previousSibling")
		},
		nextAll: function(e) {
			return be(e, "nextSibling")
		},
		prevAll: function(e) {
			return be(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return be(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return be(e, "previousSibling", n)
		},
		siblings: function(e) {
			return we((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return we(e.firstChild)
		},
		contents: function(e) {
			return e.contentDocument || he.merge([], e.childNodes)
		}
	}, function(e, t) {
		he.fn[e] = function(n, o) {
			var r = he.map(this, t, n);
			return "Until" !== e.slice(-5) && (o = n), o && "string" == typeof o && (r = he.filter(o, r)), this.length > 1 && (Ne[e] || he.uniqueSort(r), Le.test(e) && r.reverse()), this.pushStack(r)
		}
	});
	var De = /[^\x20\t\r\n\f]+/g;
	he.Callbacks = function(e) {
		e = "string" == typeof e ? a(e) : he.extend({}, e);
		var t, n, o, r, i = [],
			s = [],
			l = -1,
			c = function() {
				for(r = e.once, o = t = !0; s.length; l = -1)
					for(n = s.shift(); ++l < i.length;) i[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = i.length, n = !1);
				e.memory || (n = !1), t = !1, r && (i = n ? [] : "")
			},
			u = {
				add: function() {
					return i && (n && !t && (l = i.length - 1, s.push(n)), function t(n) {
						he.each(n, function(n, o) {
							he.isFunction(o) ? e.unique && u.has(o) || i.push(o) : o && o.length && "string" !== he.type(o) && t(o)
						})
					}(arguments), n && !t && c()), this
				},
				remove: function() {
					return he.each(arguments, function(e, t) {
						for(var n;
							(n = he.inArray(t, i, n)) > -1;) i.splice(n, 1), n <= l && l--
					}), this
				},
				has: function(e) {
					return e ? he.inArray(e, i) > -1 : i.length > 0
				},
				empty: function() {
					return i && (i = []), this
				},
				disable: function() {
					return r = s = [], i = n = "", this
				},
				disabled: function() {
					return !i
				},
				lock: function() {
					return r = s = [], n || t || (i = n = ""), this
				},
				locked: function() {
					return !!r
				},
				fireWith: function(e, n) {
					return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
				},
				fire: function() {
					return u.fireWith(this, arguments), this
				},
				fired: function() {
					return !!o
				}
			};
		return u
	}, he.extend({
		Deferred: function(t) {
			var n = [
					["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2],
					["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]
				],
				o = "pending",
				r = {
					state: function() {
						return o
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					catch: function(e) {
						return r.then(null, e)
					},
					pipe: function() {
						var e = arguments;
						return he.Deferred(function(t) {
							he.each(n, function(n, o) {
								var r = he.isFunction(e[o[4]]) && e[o[4]];
								i[o[1]](function() {
									var e = r && r.apply(this, arguments);
									e && he.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[o[0] + "With"](this, r ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					then: function(t, o, r) {
						function i(t, n, o, r) {
							return function() {
								var c = this,
									u = arguments,
									f = function() {
										var e, f;
										if(!(t < a)) {
											if(e = o.apply(c, u), e === n.promise()) throw new TypeError("Thenable self-resolution");
											f = e && ("object" == typeof e || "function" == typeof e) && e.then, he.isFunction(f) ? r ? f.call(e, i(a, n, s, r), i(a, n, l, r)) : (a++, f.call(e, i(a, n, s, r), i(a, n, l, r), i(a, n, s, n.notifyWith))) : (o !== s && (c = void 0, u = [e]), (r || n.resolveWith)(c, u))
										}
									},
									d = r ? f : function() {
										try {
											f()
										} catch(e) {
											he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= a && (o !== l && (c = void 0, u = [e]), n.rejectWith(c, u))
										}
									};
								t ? d() : (he.Deferred.getStackHook && (d.stackTrace = he.Deferred.getStackHook()), e.setTimeout(d))
							}
						}
						var a = 0;
						return he.Deferred(function(e) {
							n[0][3].add(i(0, e, he.isFunction(r) ? r : s, e.notifyWith)), n[1][3].add(i(0, e, he.isFunction(t) ? t : s)), n[2][3].add(i(0, e, he.isFunction(o) ? o : l))
						}).promise()
					},
					promise: function(e) {
						return null != e ? he.extend(e, r) : r
					}
				},
				i = {};
			return he.each(n, function(e, t) {
				var a = t[2],
					s = t[5];
				r[t[1]] = a.add, s && a.add(function() {
					o = s
				}, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), i[t[0]] = function() {
					return i[t[0] + "With"](this === i ? void 0 : this, arguments), this
				}, i[t[0] + "With"] = a.fireWith
			}), r.promise(i), t && t.call(i, i), i
		},
		when: function(e) {
			var t = arguments.length,
				n = t,
				o = Array(n),
				r = oe.call(arguments),
				i = he.Deferred(),
				a = function(e) {
					return function(n) {
						o[e] = this, r[e] = arguments.length > 1 ? oe.call(arguments) : n, --t || i.resolveWith(o, r)
					}
				};
			if(t <= 1 && (c(e, i.done(a(n)).resolve, i.reject), "pending" === i.state() || he.isFunction(r[n] && r[n].then))) return i.then();
			for(; n--;) c(r[n], a(n), i.reject);
			return i.promise()
		}
	});
	var je = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	he.Deferred.exceptionHook = function(t, n) {
		e.console && e.console.warn && t && je.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
	}, he.readyException = function(t) {
		e.setTimeout(function() {
			throw t
		})
	};
	var qe = he.Deferred();
	he.fn.ready = function(e) {
		return qe.then(e).catch(function(e) {
			he.readyException(e)
		}), this
	}, he.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? he.readyWait++ : he.ready(!0)
		},
		ready: function(e) {
			(e === !0 ? --he.readyWait : he.isReady) || (he.isReady = !0, e !== !0 && --he.readyWait > 0 || qe.resolveWith(te, [he]))
		}
	}), he.ready.then = qe.then, "complete" === te.readyState || "loading" !== te.readyState && !te.documentElement.doScroll ? e.setTimeout(he.ready) : (te.addEventListener("DOMContentLoaded", u), e.addEventListener("load", u));
	var He = function(e, t, n, o, r, i, a) {
			var s = 0,
				l = e.length,
				c = null == n;
			if("object" === he.type(n)) {
				r = !0;
				for(s in n) He(e, t, s, n[s], !0, i, a)
			} else if(void 0 !== o && (r = !0, he.isFunction(o) || (a = !0), c && (a ? (t.call(e, o), t = null) : (c = t, t = function(e, t, n) {
					return c.call(he(e), n)
				})), t))
				for(; s < l; s++) t(e[s], n, a ? o : o.call(e[s], s, t(e[s], n)));
			return r ? e : c ? t.call(e) : l ? t(e[0], n) : i
		},
		Oe = function(e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		};
	f.uid = 1, f.prototype = {
		cache: function(e) {
			var t = e[this.expando];
			return t || (t = {}, Oe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, n) {
			var o, r = this.cache(e);
			if("string" == typeof t) r[he.camelCase(t)] = n;
			else
				for(o in t) r[he.camelCase(o)] = t[o];
			return r
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][he.camelCase(t)]
		},
		access: function(e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, o = e[this.expando];
			if(void 0 !== o) {
				if(void 0 !== t) {
					he.isArray(t) ? t = t.map(he.camelCase) : (t = he.camelCase(t), t = t in o ? [t] : t.match(De) || []), n = t.length;
					for(; n--;) delete o[t[n]]
				}(void 0 === t || he.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			var t = e[this.expando];
			return void 0 !== t && !he.isEmptyObject(t)
		}
	};
	var Ie = new f,
		Fe = new f,
		Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Re = /[A-Z]/g;
	he.extend({
		hasData: function(e) {
			return Fe.hasData(e) || Ie.hasData(e)
		},
		data: function(e, t, n) {
			return Fe.access(e, t, n)
		},
		removeData: function(e, t) {
			Fe.remove(e, t)
		},
		_data: function(e, t, n) {
			return Ie.access(e, t, n)
		},
		_removeData: function(e, t) {
			Ie.remove(e, t)
		}
	}), he.fn.extend({
		data: function(e, t) {
			var n, o, r, i = this[0],
				a = i && i.attributes;
			if(void 0 === e) {
				if(this.length && (r = Fe.get(i), 1 === i.nodeType && !Ie.get(i, "hasDataAttrs"))) {
					for(n = a.length; n--;) a[n] && (o = a[n].name, 0 === o.indexOf("data-") && (o = he.camelCase(o.slice(5)), p(i, o, r[o])));
					Ie.set(i, "hasDataAttrs", !0)
				}
				return r
			}
			return "object" == typeof e ? this.each(function() {
				Fe.set(this, e)
			}) : He(this, function(t) {
				var n;
				if(i && void 0 === t) {
					if(n = Fe.get(i, e), void 0 !== n) return n;
					if(n = p(i, e), void 0 !== n) return n
				} else this.each(function() {
					Fe.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				Fe.remove(this, e)
			})
		}
	}), he.extend({
		queue: function(e, t, n) {
			var o;
			if(e) return t = (t || "fx") + "queue", o = Ie.get(e, t), n && (!o || he.isArray(n) ? o = Ie.access(e, t, he.makeArray(n)) : o.push(n)), o || []
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = he.queue(e, t),
				o = n.length,
				r = n.shift(),
				i = he._queueHooks(e, t),
				a = function() {
					he.dequeue(e, t)
				};
			"inprogress" === r && (r = n.shift(), o--), r && ("fx" === t && n.unshift("inprogress"), delete i.stop, r.call(e, a, i)), !o && i && i.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return Ie.get(e, n) || Ie.access(e, n, {
				empty: he.Callbacks("once memory").add(function() {
					Ie.remove(e, [t + "queue", n])
				})
			})
		}
	}), he.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var n = he.queue(this, e, t);
				he._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				he.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, o = 1,
				r = he.Deferred(),
				i = this,
				a = this.length,
				s = function() {
					--o || r.resolveWith(i, [i])
				};
			for("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = Ie.get(i[a], e + "queueHooks"), n && n.empty && (o++, n.empty.add(s));
			return s(), r.promise(t)
		}
	});
	var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Be = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$", "i"),
		We = ["Top", "Right", "Bottom", "Left"],
		ze = function(e, t) {
			return e = t || e, "none" === e.style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
		},
		$e = function(e, t, n, o) {
			var r, i, a = {};
			for(i in t) a[i] = e.style[i], e.style[i] = t[i];
			r = n.apply(e, o || []);
			for(i in t) e.style[i] = a[i];
			return r
		},
		Xe = {};
	he.fn.extend({
		show: function() {
			return g(this, !0)
		},
		hide: function() {
			return g(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				ze(this) ? he(this).show() : he(this).hide()
			})
		}
	});
	var _e = /^(?:checkbox|radio)$/i,
		Ue = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		Ve = /^$|\/(?:java|ecma)script/i,
		Ye = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	Ye.optgroup = Ye.option, Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead, Ye.th = Ye.td;
	var Ge = /<|&#?\w+;/;
	! function() {
		var e = te.createDocumentFragment(),
			t = e.appendChild(te.createElement("div")),
			n = te.createElement("input");
		n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), de.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", de.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
	}();
	var Qe = te.documentElement,
		Ke = /^key/,
		Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		Ze = /^([^.]*)(?:\.(.+)|)/;
	he.event = {
		global: {},
		add: function(e, t, n, o, r) {
			var i, a, s, l, c, u, f, d, p, h, v, g = Ie.get(e);
			if(g)
				for(n.handler && (i = n, n = i.handler, r = i.selector), r && he.find.matchesSelector(Qe, r), n.guid || (n.guid = he.guid++), (l = g.events) || (l = g.events = {}), (a = g.handle) || (a = g.handle = function(t) {
						return "undefined" != typeof he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
					}), t = (t || "").match(De) || [""], c = t.length; c--;) s = Ze.exec(t[c]) || [], p = v = s[1], h = (s[2] || "").split(".").sort(), p && (f = he.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, f = he.event.special[p] || {}, u = he.extend({
					type: p,
					origType: v,
					data: o,
					handler: n,
					guid: n.guid,
					selector: r,
					needsContext: r && he.expr.match.needsContext.test(r),
					namespace: h.join(".")
				}, i), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, f.setup && f.setup.call(e, o, h, a) !== !1 || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, u) : d.push(u), he.event.global[p] = !0)
		},
		remove: function(e, t, n, o, r) {
			var i, a, s, l, c, u, f, d, p, h, v, g = Ie.hasData(e) && Ie.get(e);
			if(g && (l = g.events)) {
				for(t = (t || "").match(De) || [""], c = t.length; c--;)
					if(s = Ze.exec(t[c]) || [], p = v = s[1], h = (s[2] || "").split(".").sort(), p) {
						for(f = he.event.special[p] || {}, p = (o ? f.delegateType : f.bindType) || p, d = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = d.length; i--;) u = d[i], !r && v !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || o && o !== u.selector && ("**" !== o || !u.selector) || (d.splice(i, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
						a && !d.length && (f.teardown && f.teardown.call(e, h, g.handle) !== !1 || he.removeEvent(e, p, g.handle), delete l[p])
					} else
						for(p in l) he.event.remove(e, p + t[c], n, o, !0);
				he.isEmptyObject(l) && Ie.remove(e, "handle events")
			}
		},
		dispatch: function(e) {
			var t, n, o, r, i, a, s = he.event.fix(e),
				l = new Array(arguments.length),
				c = (Ie.get(this, "events") || {})[s.type] || [],
				u = he.event.special[s.type] || {};
			for(l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
			if(s.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, s) !== !1) {
				for(a = he.event.handlers.call(this, s, c), t = 0;
					(r = a[t++]) && !s.isPropagationStopped();)
					for(s.currentTarget = r.elem, n = 0;
						(i = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(i.namespace) || (s.handleObj = i, s.data = i.data, o = ((he.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, l), void 0 !== o && (s.result = o) === !1 && (s.preventDefault(), s.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, s), s.result
			}
		},
		handlers: function(e, t) {
			var n, o, r, i, a, s = [],
				l = t.delegateCount,
				c = e.target;
			if(l && c.nodeType && !("click" === e.type && e.button >= 1))
				for(; c !== this; c = c.parentNode || this)
					if(1 === c.nodeType && ("click" !== e.type || c.disabled !== !0)) {
						for(i = [], a = {}, n = 0; n < l; n++) o = t[n], r = o.selector + " ", void 0 === a[r] && (a[r] = o.needsContext ? he(r, this).index(c) > -1 : he.find(r, this, null, [c]).length), a[r] && i.push(o);
						i.length && s.push({
							elem: c,
							handlers: i
						})
					}
			return c = this, l < t.length && s.push({
				elem: c,
				handlers: t.slice(l)
			}), s
		},
		addProp: function(e, t) {
			Object.defineProperty(he.Event.prototype, e, {
				enumerable: !0,
				configurable: !0,
				get: he.isFunction(t) ? function() {
					if(this.originalEvent) return t(this.originalEvent)
				} : function() {
					if(this.originalEvent) return this.originalEvent[e]
				},
				set: function(t) {
					Object.defineProperty(this, e, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: t
					})
				}
			})
		},
		fix: function(e) {
			return e[he.expando] ? e : new he.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if(this !== T() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if(this === T() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if("checkbox" === this.type && this.click && he.nodeName(this, "input")) return this.click(), !1
				},
				_default: function(e) {
					return he.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, he.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, he.Event = function(e, t) {
		return this instanceof he.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? b : w, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && he.extend(this, t), this.timeStamp = e && e.timeStamp || he.now(), void(this[he.expando] = !0)) : new he.Event(e, t)
	}, he.Event.prototype = {
		constructor: he.Event,
		isDefaultPrevented: w,
		isPropagationStopped: w,
		isImmediatePropagationStopped: w,
		isSimulated: !1,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = b, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = b, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = b, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, he.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		char: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function(e) {
			var t = e.button;
			return null == e.which && Ke.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Je.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, he.event.addProp), he.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		he.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, o = this,
					r = e.relatedTarget,
					i = e.handleObj;
				return r && (r === o || he.contains(o, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), he.fn.extend({
		on: function(e, t, n, o) {
			return C(this, e, t, n, o)
		},
		one: function(e, t, n, o) {
			return C(this, e, t, n, o, 1)
		},
		off: function(e, t, n) {
			var o, r;
			if(e && e.preventDefault && e.handleObj) return o = e.handleObj, he(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
			if("object" == typeof e) {
				for(r in e) this.off(r, t, e[r]);
				return this
			}
			return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = w), this.each(function() {
				he.event.remove(this, e, n, t)
			})
		}
	});
	var et = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		tt = /<script|<style|<link/i,
		nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		ot = /^true\/(.*)/,
		rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	he.extend({
		htmlPrefilter: function(e) {
			return e.replace(et, "<$1></$2>")
		},
		clone: function(e, t, n) {
			var o, r, i, a, s = e.cloneNode(!0),
				l = he.contains(e.ownerDocument, e);
			if(!(de.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
				for(a = m(s), i = m(e), o = 0, r = i.length; o < r; o++) L(i[o], a[o]);
			if(t)
				if(n)
					for(i = i || m(e), a = a || m(s), o = 0, r = i.length; o < r; o++) A(i[o], a[o]);
				else A(e, s);
			return a = m(s, "script"), a.length > 0 && y(a, !l && m(e, "script")), s
		},
		cleanData: function(e) {
			for(var t, n, o, r = he.event.special, i = 0; void 0 !== (n = e[i]); i++)
				if(Oe(n)) {
					if(t = n[Ie.expando]) {
						if(t.events)
							for(o in t.events) r[o] ? he.event.remove(n, o) : he.removeEvent(n, o, t.handle);
						n[Ie.expando] = void 0
					}
					n[Fe.expando] && (n[Fe.expando] = void 0)
				}
		}
	}), he.fn.extend({
		detach: function(e) {
			return D(this, e, !0)
		},
		remove: function(e) {
			return D(this, e)
		},
		text: function(e) {
			return He(this, function(e) {
				return void 0 === e ? he.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return N(this, arguments, function(e) {
				if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = S(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return N(this, arguments, function(e) {
				if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = S(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return N(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return N(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for(var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (he.cleanData(m(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
				return he.clone(this, e, t)
			})
		},
		html: function(e) {
			return He(this, function(e) {
				var t = this[0] || {},
					n = 0,
					o = this.length;
				if(void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if("string" == typeof e && !tt.test(e) && !Ye[(Ue.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = he.htmlPrefilter(e);
					try {
						for(; n < o; n++) t = this[n] || {}, 1 === t.nodeType && (he.cleanData(m(t, !1)), t.innerHTML = e);
						t = 0
					} catch(e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = [];
			return N(this, arguments, function(t) {
				var n = this.parentNode;
				he.inArray(this, e) < 0 && (he.cleanData(m(this)), n && n.replaceChild(t, this))
			}, e)
		}
	}), he.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		he.fn[e] = function(e) {
			for(var n, o = [], r = he(e), i = r.length - 1, a = 0; a <= i; a++) n = a === i ? this : this.clone(!0), he(r[a])[t](n), ie.apply(o, n.get());
			return this.pushStack(o)
		}
	});
	var it = /^margin/,
		at = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$", "i"),
		st = function(t) {
			var n = t.ownerDocument.defaultView;
			return n && n.opener || (n = e), n.getComputedStyle(t)
		};
	! function() {
		function t() {
			if(s) {
				s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Qe.appendChild(a);
				var t = e.getComputedStyle(s);
				n = "1%" !== t.top, i = "2px" === t.marginLeft, o = "4px" === t.width, s.style.marginRight = "50%", r = "4px" === t.marginRight, Qe.removeChild(a), s = null
			}
		}
		var n, o, r, i, a = te.createElement("div"),
			s = te.createElement("div");
		s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", de.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), he.extend(de, {
			pixelPosition: function() {
				return t(), n
			},
			boxSizingReliable: function() {
				return t(), o
			},
			pixelMarginRight: function() {
				return t(), r
			},
			reliableMarginLeft: function() {
				return t(), i
			}
		}))
	}();
	var lt = /^(none|table(?!-c[ea]).+)/,
		ct = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		ut = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		ft = ["Webkit", "Moz", "ms"],
		dt = te.createElement("div").style;
	he.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if(t) {
						var n = j(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			float: "cssFloat"
		},
		style: function(e, t, n, o) {
			if(e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var r, i, a, s = he.camelCase(t),
					l = e.style;
				return t = he.cssProps[s] || (he.cssProps[s] = H(s) || s), a = he.cssHooks[t] || he.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (r = a.get(e, !1, o)) ? r : l[t] : (i = typeof n, "string" === i && (r = Be.exec(n)) && r[1] && (n = h(e, t, r), i = "number"), void(null != n && n === n && ("number" === i && (n += r && r[3] || (he.cssNumber[s] ? "" : "px")), de.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, o)) || (l[t] = n))))
			}
		},
		css: function(e, t, n, o) {
			var r, i, a, s = he.camelCase(t);
			return t = he.cssProps[s] || (he.cssProps[s] = H(s) || s), a = he.cssHooks[t] || he.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = j(e, t, o)), "normal" === r && t in ut && (r = ut[t]), "" === n || n ? (i = parseFloat(r), n === !0 || isFinite(i) ? i || 0 : r) : r
		}
	}), he.each(["height", "width"], function(e, t) {
		he.cssHooks[t] = {
			get: function(e, n, o) {
				if(n) return !lt.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? F(e, t, o) : $e(e, ct, function() {
					return F(e, t, o)
				})
			},
			set: function(e, n, o) {
				var r, i = o && st(e),
					a = o && I(e, t, o, "border-box" === he.css(e, "boxSizing", !1, i), i);
				return a && (r = Be.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = he.css(e, t)), O(e, n, a)
			}
		}
	}), he.cssHooks.marginLeft = q(de.reliableMarginLeft, function(e, t) {
		if(t) return(parseFloat(j(e, "marginLeft")) || e.getBoundingClientRect().left - $e(e, {
			marginLeft: 0
		}, function() {
			return e.getBoundingClientRect().left
		})) + "px"
	}), he.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		he.cssHooks[e + t] = {
			expand: function(n) {
				for(var o = 0, r = {}, i = "string" == typeof n ? n.split(" ") : [n]; o < 4; o++) r[e + We[o] + t] = i[o] || i[o - 2] || i[0];
				return r
			}
		}, it.test(e) || (he.cssHooks[e + t].set = O)
	}), he.fn.extend({
		css: function(e, t) {
			return He(this, function(e, t, n) {
				var o, r, i = {},
					a = 0;
				if(he.isArray(t)) {
					for(o = st(e), r = t.length; a < r; a++) i[t[a]] = he.css(e, t[a], !1, o);
					return i
				}
				return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
			}, e, t, arguments.length > 1)
		}
	}), he.Tween = M, M.prototype = {
		constructor: M,
		init: function(e, t, n, o, r, i) {
			this.elem = e, this.prop = n, this.easing = r || he.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = i || (he.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = M.propHooks[this.prop];
			return e && e.get ? e.get(this) : M.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = M.propHooks[this.prop];
			return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
		}
	}, M.prototype.init.prototype = M.prototype, M.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
			},
			set: function(e) {
				he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, he.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default: "swing"
	}, he.fx = M.prototype.init, he.fx.step = {};
	var pt, ht, vt = /^(?:toggle|show|hide)$/,
		gt = /queueHooks$/;
	he.Animation = he.extend(X, {
			tweeners: {
				"*": [function(e, t) {
					var n = this.createTween(e, t);
					return h(n.elem, e, Be.exec(t), n), n
				}]
			},
			tweener: function(e, t) {
				he.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(De);
				for(var n, o = 0, r = e.length; o < r; o++) n = e[o], X.tweeners[n] = X.tweeners[n] || [], X.tweeners[n].unshift(t)
			},
			prefilters: [z],
			prefilter: function(e, t) {
				t ? X.prefilters.unshift(e) : X.prefilters.push(e)
			}
		}), he.speed = function(e, t, n) {
			var o = e && "object" == typeof e ? he.extend({}, e) : {
				complete: n || !n && t || he.isFunction(e) && e,
				duration: e,
				easing: n && t || t && !he.isFunction(t) && t
			};
			return he.fx.off || te.hidden ? o.duration = 0 : "number" != typeof o.duration && (o.duration in he.fx.speeds ? o.duration = he.fx.speeds[o.duration] : o.duration = he.fx.speeds._default), null != o.queue && o.queue !== !0 || (o.queue = "fx"), o.old = o.complete, o.complete = function() {
				he.isFunction(o.old) && o.old.call(this), o.queue && he.dequeue(this, o.queue)
			}, o
		}, he.fn.extend({
			fadeTo: function(e, t, n, o) {
				return this.filter(ze).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, o)
			},
			animate: function(e, t, n, o) {
				var r = he.isEmptyObject(e),
					i = he.speed(t, n, o),
					a = function() {
						var t = X(this, he.extend({}, e), i);
						(r || Ie.get(this, "finish")) && t.stop(!0)
					};
				return a.finish = a, r || i.queue === !1 ? this.each(a) : this.queue(i.queue, a)
			},
			stop: function(e, t, n) {
				var o = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						r = null != e && e + "queueHooks",
						i = he.timers,
						a = Ie.get(this);
					if(r) a[r] && a[r].stop && o(a[r]);
					else
						for(r in a) a[r] && a[r].stop && gt.test(r) && o(a[r]);
					for(r = i.length; r--;) i[r].elem !== this || null != e && i[r].queue !== e || (i[r].anim.stop(n), t = !1, i.splice(r, 1));
					!t && n || he.dequeue(this, e)
				})
			},
			finish: function(e) {
				return e !== !1 && (e = e || "fx"), this.each(function() {
					var t, n = Ie.get(this),
						o = n[e + "queue"],
						r = n[e + "queueHooks"],
						i = he.timers,
						a = o ? o.length : 0;
					for(n.finish = !0, he.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));
					for(t = 0; t < a; t++) o[t] && o[t].finish && o[t].finish.call(this);
					delete n.finish
				})
			}
		}), he.each(["toggle", "show", "hide"], function(e, t) {
			var n = he.fn[t];
			he.fn[t] = function(e, o, r) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, o, r)
			}
		}), he.each({
			slideDown: B("show"),
			slideUp: B("hide"),
			slideToggle: B("toggle"),
			fadeIn: {
				opacity: "show"
			},
			fadeOut: {
				opacity: "hide"
			},
			fadeToggle: {
				opacity: "toggle"
			}
		}, function(e, t) {
			he.fn[e] = function(e, n, o) {
				return this.animate(t, e, n, o)
			}
		}), he.timers = [], he.fx.tick = function() {
			var e, t = 0,
				n = he.timers;
			for(pt = he.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
			n.length || he.fx.stop(), pt = void 0
		}, he.fx.timer = function(e) {
			he.timers.push(e), e() ? he.fx.start() : he.timers.pop()
		}, he.fx.interval = 13, he.fx.start = function() {
			ht || (ht = e.requestAnimationFrame ? e.requestAnimationFrame(R) : e.setInterval(he.fx.tick, he.fx.interval))
		}, he.fx.stop = function() {
			e.cancelAnimationFrame ? e.cancelAnimationFrame(ht) : e.clearInterval(ht), ht = null
		}, he.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, he.fn.delay = function(t, n) {
			return t = he.fx ? he.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, o) {
				var r = e.setTimeout(n, t);
				o.stop = function() {
					e.clearTimeout(r)
				}
			})
		},
		function() {
			var e = te.createElement("input"),
				t = te.createElement("select"),
				n = t.appendChild(te.createElement("option"));
			e.type = "checkbox", de.checkOn = "" !== e.value, de.optSelected = n.selected, e = te.createElement("input"), e.value = "t", e.type = "radio", de.radioValue = "t" === e.value
		}();
	var mt, yt = he.expr.attrHandle;
	he.fn.extend({
		attr: function(e, t) {
			return He(this, he.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				he.removeAttr(this, e)
			})
		}
	}), he.extend({
		attr: function(e, t, n) {
			var o, r, i = e.nodeType;
			if(3 !== i && 8 !== i && 2 !== i) return "undefined" == typeof e.getAttribute ? he.prop(e, t, n) : (1 === i && he.isXMLDoc(e) || (r = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? mt : void 0)), void 0 !== n ? null === n ? void he.removeAttr(e, t) : r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (o = r.get(e, t)) ? o : (o = he.find.attr(e, t), null == o ? void 0 : o))
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if(!de.radioValue && "radio" === t && he.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var n, o = 0,
				r = t && t.match(De);
			if(r && 1 === e.nodeType)
				for(; n = r[o++];) e.removeAttribute(n)
		}
	}), mt = {
		set: function(e, t, n) {
			return t === !1 ? he.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = yt[t] || he.find.attr;
		yt[t] = function(e, t, o) {
			var r, i, a = t.toLowerCase();
			return o || (i = yt[a], yt[a] = r, r = null != n(e, t, o) ? a : null, yt[a] = i), r
		}
	});
	var xt = /^(?:input|select|textarea|button)$/i,
		bt = /^(?:a|area)$/i;
	he.fn.extend({
		prop: function(e, t) {
			return He(this, he.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[he.propFix[e] || e]
			})
		}
	}), he.extend({
		prop: function(e, t, n) {
			var o, r, i = e.nodeType;
			if(3 !== i && 8 !== i && 2 !== i) return 1 === i && he.isXMLDoc(e) || (t = he.propFix[t] || t, r = he.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : e[t] = n : r && "get" in r && null !== (o = r.get(e, t)) ? o : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = he.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : xt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), de.optSelected || (he.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), he.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		he.propFix[this.toLowerCase()] = this
	}), he.fn.extend({
		addClass: function(e) {
			var t, n, o, r, i, a, s, l = 0;
			if(he.isFunction(e)) return this.each(function(t) {
				he(this).addClass(e.call(this, t, U(this)))
			});
			if("string" == typeof e && e)
				for(t = e.match(De) || []; n = this[l++];)
					if(r = U(n), o = 1 === n.nodeType && " " + _(r) + " ") {
						for(a = 0; i = t[a++];) o.indexOf(" " + i + " ") < 0 && (o += i + " ");
						s = _(o), r !== s && n.setAttribute("class", s)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, o, r, i, a, s, l = 0;
			if(he.isFunction(e)) return this.each(function(t) {
				he(this).removeClass(e.call(this, t, U(this)))
			});
			if(!arguments.length) return this.attr("class", "");
			if("string" == typeof e && e)
				for(t = e.match(De) || []; n = this[l++];)
					if(r = U(n), o = 1 === n.nodeType && " " + _(r) + " ") {
						for(a = 0; i = t[a++];)
							for(; o.indexOf(" " + i + " ") > -1;) o = o.replace(" " + i + " ", " ");
						s = _(o), r !== s && n.setAttribute("class", s)
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : he.isFunction(e) ? this.each(function(n) {
				he(this).toggleClass(e.call(this, n, U(this), t), t)
			}) : this.each(function() {
				var t, o, r, i;
				if("string" === n)
					for(o = 0, r = he(this), i = e.match(De) || []; t = i[o++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
				else void 0 !== e && "boolean" !== n || (t = U(this), t && Ie.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : Ie.get(this, "__className__") || ""))
			})
		},
		hasClass: function(e) {
			var t, n, o = 0;
			for(t = " " + e + " "; n = this[o++];)
				if(1 === n.nodeType && (" " + _(U(n)) + " ").indexOf(t) > -1) return !0;
			return !1
		}
	});
	var wt = /\r/g;
	he.fn.extend({
		val: function(e) {
			var t, n, o, r = this[0];
			return arguments.length ? (o = he.isFunction(e), this.each(function(n) {
				var r;
				1 === this.nodeType && (r = o ? e.call(this, n, he(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : he.isArray(r) && (r = he.map(r, function(e) {
					return null == e ? "" : e + ""
				})), t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
			})) : r ? (t = he.valHooks[r.type] || he.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)) : void 0
		}
	}), he.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = he.find.attr(e, "value");
					return null != t ? t : _(he.text(e))
				}
			},
			select: {
				get: function(e) {
					var t, n, o, r = e.options,
						i = e.selectedIndex,
						a = "select-one" === e.type,
						s = a ? null : [],
						l = a ? i + 1 : r.length;
					for(o = i < 0 ? l : a ? i : 0; o < l; o++)
						if(n = r[o], (n.selected || o === i) && !n.disabled && (!n.parentNode.disabled || !he.nodeName(n.parentNode, "optgroup"))) {
							if(t = he(n).val(), a) return t;
							s.push(t)
						}
					return s
				},
				set: function(e, t) {
					for(var n, o, r = e.options, i = he.makeArray(t), a = r.length; a--;) o = r[a], (o.selected = he.inArray(he.valHooks.option.get(o), i) > -1) && (n = !0);
					return n || (e.selectedIndex = -1), i
				}
			}
		}
	}), he.each(["radio", "checkbox"], function() {
		he.valHooks[this] = {
			set: function(e, t) {
				if(he.isArray(t)) return e.checked = he.inArray(he(e).val(), t) > -1
			}
		}, de.checkOn || (he.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	});
	var Tt = /^(?:focusinfocus|focusoutblur)$/;
	he.extend(he.event, {
		trigger: function(t, n, o, r) {
			var i, a, s, l, c, u, f, d = [o || te],
				p = ce.call(t, "type") ? t.type : t,
				h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
			if(a = s = o = o || te, 3 !== o.nodeType && 8 !== o.nodeType && !Tt.test(p + he.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), c = p.indexOf(":") < 0 && "on" + p, t = t[he.expando] ? t : new he.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), n = null == n ? [t] : he.makeArray(n, [t]), f = he.event.special[p] || {}, r || !f.trigger || f.trigger.apply(o, n) !== !1)) {
				if(!r && !f.noBubble && !he.isWindow(o)) {
					for(l = f.delegateType || p, Tt.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
					s === (o.ownerDocument || te) && d.push(s.defaultView || s.parentWindow || e)
				}
				for(i = 0;
					(a = d[i++]) && !t.isPropagationStopped();) t.type = i > 1 ? l : f.bindType || p, u = (Ie.get(a, "events") || {})[t.type] && Ie.get(a, "handle"), u && u.apply(a, n), u = c && a[c], u && u.apply && Oe(a) && (t.result = u.apply(a, n), t.result === !1 && t.preventDefault());
				return t.type = p, r || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Oe(o) || c && he.isFunction(o[p]) && !he.isWindow(o) && (s = o[c], s && (o[c] = null), he.event.triggered = p, o[p](), he.event.triggered = void 0, s && (o[c] = s)), t.result
			}
		},
		simulate: function(e, t, n) {
			var o = he.extend(new he.Event, n, {
				type: e,
				isSimulated: !0
			});
			he.event.trigger(o, null, t)
		}
	}), he.fn.extend({
		trigger: function(e, t) {
			return this.each(function() {
				he.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			if(n) return he.event.trigger(e, t, n, !0)
		}
	}), he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
		he.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), he.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), de.focusin = "onfocusin" in e, de.focusin || he.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = function(e) {
			he.event.simulate(t, e.target, he.event.fix(e))
		};
		he.event.special[t] = {
			setup: function() {
				var o = this.ownerDocument || this,
					r = Ie.access(o, t);
				r || o.addEventListener(e, n, !0), Ie.access(o, t, (r || 0) + 1)
			},
			teardown: function() {
				var o = this.ownerDocument || this,
					r = Ie.access(o, t) - 1;
				r ? Ie.access(o, t, r) : (o.removeEventListener(e, n, !0), Ie.remove(o, t))
			}
		}
	});
	var Ct = e.location,
		St = he.now(),
		kt = /\?/;
	he.parseXML = function(t) {
		var n;
		if(!t || "string" != typeof t) return null;
		try {
			n = (new e.DOMParser).parseFromString(t, "text/xml")
		} catch(e) {
			n = void 0
		}
		return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t), n
	};
	var Et = /\[\]$/,
		At = /\r?\n/g,
		Lt = /^(?:submit|button|image|reset|file)$/i,
		Nt = /^(?:input|select|textarea|keygen)/i;
	he.param = function(e, t) {
		var n, o = [],
			r = function(e, t) {
				var n = he.isFunction(t) ? t() : t;
				o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if(he.isArray(e) || e.jquery && !he.isPlainObject(e)) he.each(e, function() {
			r(this.name, this.value)
		});
		else
			for(n in e) V(n, e[n], t, r);
		return o.join("&")
	}, he.fn.extend({
		serialize: function() {
			return he.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = he.prop(this, "elements");
				return e ? he.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !he(this).is(":disabled") && Nt.test(this.nodeName) && !Lt.test(e) && (this.checked || !_e.test(e))
			}).map(function(e, t) {
				var n = he(this).val();
				return null == n ? null : he.isArray(n) ? he.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(At, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(At, "\r\n")
				}
			}).get()
		}
	});
	var Dt = /%20/g,
		jt = /#.*$/,
		qt = /([?&])_=[^&]*/,
		Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Ot = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		It = /^(?:GET|HEAD)$/,
		Ft = /^\/\//,
		Mt = {},
		Rt = {},
		Pt = "*/".concat("*"),
		Bt = te.createElement("a");
	Bt.href = Ct.href, he.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: Ct.href,
			type: "GET",
			isLocal: Ot.test(Ct.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Pt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": he.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? Q(Q(e, he.ajaxSettings), t) : Q(he.ajaxSettings, e)
		},
		ajaxPrefilter: Y(Mt),
		ajaxTransport: Y(Rt),
		ajax: function(t, n) {
			function o(t, n, o, s) {
				var c, d, p, b, w, T = n;
				u || (u = !0, l && e.clearTimeout(l), r = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, o && (b = K(h, C, o)), b = J(h, b, C, c), c ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (he.lastModified[i] = w), w = C.getResponseHeader("etag"), w && (he.etag[i] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, d = b.data, p = b.error, c = !p)) : (p = T, !t && T || (T = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || T) + "", c ? m.resolveWith(v, [d, T, C]) : m.rejectWith(v, [C, T, p]), C.statusCode(x), x = void 0, f && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? d : p]), y.fireWith(v, [C, T]), f && (g.trigger("ajaxComplete", [C, h]), --he.active || he.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (n = t, t = void 0), n = n || {};
			var r, i, a, s, l, c, u, f, d, p, h = he.ajaxSetup({}, n),
				v = h.context || h,
				g = h.context && (v.nodeType || v.jquery) ? he(v) : he.event,
				m = he.Deferred(),
				y = he.Callbacks("once memory"),
				x = h.statusCode || {},
				b = {},
				w = {},
				T = "canceled",
				C = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if(u) {
							if(!s)
								for(s = {}; t = Ht.exec(a);) s[t[1].toLowerCase()] = t[2];
							t = s[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return u ? a : null
					},
					setRequestHeader: function(e, t) {
						return null == u && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
					},
					overrideMimeType: function(e) {
						return null == u && (h.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if(e)
							if(u) C.always(e[C.status]);
							else
								for(t in e) x[t] = [x[t], e[t]];
						return this
					},
					abort: function(e) {
						var t = e || T;
						return r && r.abort(t), o(0, t), this
					}
				};
			if(m.promise(C), h.url = ((t || h.url || Ct.href) + "").replace(Ft, Ct.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(De) || [""], null == h.crossDomain) {
				c = te.createElement("a");
				try {
					c.href = h.url, c.href = c.href, h.crossDomain = Bt.protocol + "//" + Bt.host != c.protocol + "//" + c.host
				} catch(e) {
					h.crossDomain = !0
				}
			}
			if(h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)), G(Mt, h, n, C), u) return C;
			f = he.event && h.global, f && 0 === he.active++ && he.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !It.test(h.type), i = h.url.replace(jt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Dt, "+")) : (p = h.url.slice(i.length), h.data && (i += (kt.test(i) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (i = i.replace(qt, "$1"), p = (kt.test(i) ? "&" : "?") + "_=" + St++ + p), h.url = i + p), h.ifModified && (he.lastModified[i] && C.setRequestHeader("If-Modified-Since", he.lastModified[i]), he.etag[i] && C.setRequestHeader("If-None-Match", he.etag[i])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : h.accepts["*"]);
			for(d in h.headers) C.setRequestHeader(d, h.headers[d]);
			if(h.beforeSend && (h.beforeSend.call(v, C, h) === !1 || u)) return C.abort();
			if(T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), r = G(Rt, h, n, C)) {
				if(C.readyState = 1, f && g.trigger("ajaxSend", [C, h]), u) return C;
				h.async && h.timeout > 0 && (l = e.setTimeout(function() {
					C.abort("timeout")
				}, h.timeout));
				try {
					u = !1, r.send(b, o)
				} catch(e) {
					if(u) throw e;
					o(-1, e)
				}
			} else o(-1, "No Transport");
			return C
		},
		getJSON: function(e, t, n) {
			return he.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return he.get(e, void 0, t, "script")
		}
	}), he.each(["get", "post"], function(e, t) {
		he[t] = function(e, n, o, r) {
			return he.isFunction(n) && (r = r || o, o = n, n = void 0), he.ajax(he.extend({
				url: e,
				type: t,
				dataType: r,
				data: n,
				success: o
			}, he.isPlainObject(e) && e))
		}
	}), he._evalUrl = function(e) {
		return he.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			throws: !0
		})
	}, he.fn.extend({
		wrapAll: function(e) {
			var t;
			return this[0] && (he.isFunction(e) && (e = e.call(this[0])), t = he(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for(var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function(e) {
			return he.isFunction(e) ? this.each(function(t) {
				he(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = he(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = he.isFunction(e);
			return this.each(function(n) {
				he(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function(e) {
			return this.parent(e).not("body").each(function() {
				he(this).replaceWith(this.childNodes)
			}), this
		}
	}), he.expr.pseudos.hidden = function(e) {
		return !he.expr.pseudos.visible(e)
	}, he.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, he.ajaxSettings.xhr = function() {
		try {
			return new e.XMLHttpRequest
		} catch(e) {}
	};
	var Wt = {
			0: 200,
			1223: 204
		},
		zt = he.ajaxSettings.xhr();
	de.cors = !!zt && "withCredentials" in zt, de.ajax = zt = !!zt, he.ajaxTransport(function(t) {
		var n, o;
		if(de.cors || zt && !t.crossDomain) return {
			send: function(r, i) {
				var a, s = t.xhr();
				if(s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
					for(a in t.xhrFields) s[a] = t.xhrFields[a];
				t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
				for(a in r) s.setRequestHeader(a, r[a]);
				n = function(e) {
					return function() {
						n && (n = o = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? i(0, "error") : i(s.status, s.statusText) : i(Wt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
							binary: s.response
						} : {
							text: s.responseText
						}, s.getAllResponseHeaders()))
					}
				}, s.onload = n(), o = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = o : s.onreadystatechange = function() {
					4 === s.readyState && e.setTimeout(function() {
						n && o()
					})
				}, n = n("abort");
				try {
					s.send(t.hasContent && t.data || null)
				} catch(e) {
					if(n) throw e
				}
			},
			abort: function() {
				n && n()
			}
		}
	}), he.ajaxPrefilter(function(e) {
		e.crossDomain && (e.contents.script = !1)
	}), he.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return he.globalEval(e), e
			}
		}
	}), he.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), he.ajaxTransport("script", function(e) {
		if(e.crossDomain) {
			var t, n;
			return {
				send: function(o, r) {
					t = he("<script>").prop({
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function(e) {
						t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
					}), te.head.appendChild(t[0])
				},
				abort: function() {
					n && n()
				}
			}
		}
	});
	var $t = [],
		Xt = /(=)\?(?=&|$)|\?\?/;
	he.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = $t.pop() || he.expando + "_" + St++;
			return this[e] = !0, e
		}
	}), he.ajaxPrefilter("json jsonp", function(t, n, o) {
		var r, i, a, s = t.jsonp !== !1 && (Xt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(t.data) && "data");
		if(s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = he.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Xt, "$1" + r) : t.jsonp !== !1 && (t.url += (kt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
			return a || he.error(r + " was not called"), a[0]
		}, t.dataTypes[0] = "json", i = e[r], e[r] = function() {
			a = arguments
		}, o.always(function() {
			void 0 === i ? he(e).removeProp(r) : e[r] = i, t[r] && (t.jsonpCallback = n.jsonpCallback, $t.push(r)), a && he.isFunction(i) && i(a[0]), a = i = void 0
		}), "script"
	}), de.createHTMLDocument = function() {
		var e = te.implementation.createHTMLDocument("").body;
		return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
	}(), he.parseHTML = function(e, t, n) {
		if("string" != typeof e) return [];
		"boolean" == typeof t && (n = t, t = !1);
		var o, r, i;
		return t || (de.createHTMLDocument ? (t = te.implementation.createHTMLDocument(""), o = t.createElement("base"), o.href = te.location.href, t.head.appendChild(o)) : t = te), r = Ce.exec(e), i = !n && [], r ? [t.createElement(r[1])] : (r = x([e], t, i), i && i.length && he(i).remove(), he.merge([], r.childNodes))
	}, he.fn.load = function(e, t, n) {
		var o, r, i, a = this,
			s = e.indexOf(" ");
		return s > -1 && (o = _(e.slice(s)), e = e.slice(0, s)), he.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && he.ajax({
			url: e,
			type: r || "GET",
			dataType: "html",
			data: t
		}).done(function(e) {
			i = arguments, a.html(o ? he("<div>").append(he.parseHTML(e)).find(o) : e)
		}).always(n && function(e, t) {
			a.each(function() {
				n.apply(this, i || [e.responseText, t, e])
			})
		}), this
	}, he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		he.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), he.expr.pseudos.animated = function(e) {
		return he.grep(he.timers, function(t) {
			return e === t.elem
		}).length
	}, he.offset = {
		setOffset: function(e, t, n) {
			var o, r, i, a, s, l, c, u = he.css(e, "position"),
				f = he(e),
				d = {};
			"static" === u && (e.style.position = "relative"), s = f.offset(), i = he.css(e, "top"), l = he.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (i + l).indexOf("auto") > -1, c ? (o = f.position(), a = o.top, r = o.left) : (a = parseFloat(i) || 0, r = parseFloat(l) || 0), he.isFunction(t) && (t = t.call(e, n, he.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : f.css(d)
		}
	}, he.fn.extend({
		offset: function(e) {
			if(arguments.length) return void 0 === e ? this : this.each(function(t) {
				he.offset.setOffset(this, e, t)
			});
			var t, n, o, r, i = this[0];
			return i ? i.getClientRects().length ? (o = i.getBoundingClientRect(), o.width || o.height ? (r = i.ownerDocument, n = Z(r), t = r.documentElement, {
				top: o.top + n.pageYOffset - t.clientTop,
				left: o.left + n.pageXOffset - t.clientLeft
			}) : o) : {
				top: 0,
				left: 0
			} : void 0
		},
		position: function() {
			if(this[0]) {
				var e, t, n = this[0],
					o = {
						top: 0,
						left: 0
					};
				return "fixed" === he.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), he.nodeName(e[0], "html") || (o = e.offset()), o = {
					top: o.top + he.css(e[0], "borderTopWidth", !0),
					left: o.left + he.css(e[0], "borderLeftWidth", !0)
				}), {
					top: t.top - o.top - he.css(n, "marginTop", !0),
					left: t.left - o.left - he.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for(var e = this.offsetParent; e && "static" === he.css(e, "position");) e = e.offsetParent;
				return e || Qe
			})
		}
	}), he.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, t) {
		var n = "pageYOffset" === t;
		he.fn[e] = function(o) {
			return He(this, function(e, o, r) {
				var i = Z(e);
				return void 0 === r ? i ? i[t] : e[o] : void(i ? i.scrollTo(n ? i.pageXOffset : r, n ? r : i.pageYOffset) : e[o] = r)
			}, e, o, arguments.length)
		}
	}), he.each(["top", "left"], function(e, t) {
		he.cssHooks[t] = q(de.pixelPosition, function(e, n) {
			if(n) return n = j(e, t), at.test(n) ? he(e).position()[t] + "px" : n
		})
	}), he.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		he.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, o) {
			he.fn[o] = function(r, i) {
				var a = arguments.length && (n || "boolean" != typeof r),
					s = n || (r === !0 || i === !0 ? "margin" : "border");
				return He(this, function(t, n, r) {
					var i;
					return he.isWindow(t) ? 0 === o.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? he.css(t, n, s) : he.style(t, n, r, s)
				}, t, a ? r : void 0, a)
			}
		})
	}), he.fn.extend({
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, o) {
			return this.on(t, e, n, o)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	}), he.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
		return he
	});
	var _t = e.jQuery,
		Ut = e.$;
	return he.noConflict = function(t) {
		return e.$ === he && (e.$ = Ut), t && e.jQuery === he && (e.jQuery = _t), he
	}, t || (e.jQuery = e.$ = he), he
}), ! function(e, t) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], function(n) {
		return t(n, e, e.document, e.Math)
	}) : "object" == typeof exports && exports ? module.exports = t(require("jquery"), e, e.document, e.Math) : t(jQuery, e, e.document, e.Math)
}("undefined" != typeof window ? window : this, function(e, t, n, o, r) {
	"use strict";
	var i = "fullpage-wrapper",
		a = "." + i,
		s = "fp-scrollable",
		l = "." + s,
		c = "fp-responsive",
		u = "fp-notransition",
		f = "fp-destroyed",
		d = "fp-enabled",
		p = "fp-viewing",
		h = "active",
		v = "." + h,
		g = "fp-completely",
		m = "." + g,
		y = ".section",
		x = "fp-section",
		b = "." + x,
		w = b + v,
		T = b + ":first",
		C = b + ":last",
		S = "fp-tableCell",
		k = "." + S,
		E = "fp-auto-height",
		A = "fp-normal-scroll",
		L = "fp-nav",
		N = "#" + L,
		D = "fp-tooltip",
		j = "." + D,
		q = "fp-show-active",
		H = ".slide",
		O = "fp-slide",
		I = "." + O,
		F = I + v,
		M = "fp-slides",
		R = "." + M,
		P = "fp-slidesContainer",
		B = "." + P,
		W = "fp-table",
		z = "fp-slidesNav",
		$ = "." + z,
		X = $ + " a",
		_ = "fp-controlArrow",
		U = "." + _,
		V = "fp-prev",
		Y = "." + V,
		G = _ + " " + V,
		Q = U + Y,
		K = "fp-next",
		J = "." + K,
		Z = _ + " " + K,
		ee = U + J,
		te = e(t),
		ne = e(n),
		oe = {
			scrollbars: !0,
			mouseWheel: !0,
			hideScrollbars: !1,
			fadeScrollbars: !1,
			disableMouse: !0,
			interactiveScrollbars: !0
		};
	e.fn.fullpage = function(s) {
		function l(t, n) {
			on("autoScrolling", t, n);
			var o = e(w);
			s.autoScrolling && !s.scrollBar ? (sn.css({
				overflow: "hidden",
				height: "100%"
			}), _(Nn.recordHistory, "internal"), gn.css({
				"-ms-touch-action": "none",
				"touch-action": "none"
			}), o.length && Jt(o.position().top)) : (sn.css({
				overflow: "visible",
				height: "initial"
			}), _(!1, "internal"), gn.css({
				"-ms-touch-action": "",
				"touch-action": ""
			}), Jt(0), o.length && sn.scrollTop(o.position().top))
		}

		function _(e, t) {
			on("recordHistory", e, t)
		}

		function Y(e, t) {
			on("scrollingSpeed", e, t)
		}

		function K(e, t) {
			on("fitToSection", e, t)
		}

		function J(e) {
			s.lockAnchors = e
		}

		function ie(e) {
			e ? (Xt(), _t()) : ($t(), Ut())
		}

		function ae(t, n) {
			"undefined" != typeof n ? (n = n.replace(/ /g, "").split(","), e.each(n, function(e, n) {
				en(t, n, "m")
			})) : t ? (ie(!0), Vt()) : (ie(!1), Yt())
		}

		function se(t, n) {
			"undefined" != typeof n ? (n = n.replace(/ /g, "").split(","), e.each(n, function(e, n) {
				en(t, n, "k")
			})) : s.keyboardScrolling = t
		}

		function le() {
			var t = e(w).prev(b);
			t.length || !s.loopTop && !s.continuousVertical || (t = e(b).last()), t.length && Ue(t, null, !0)
		}

		function ce() {
			var t = e(w).next(b);
			t.length || !s.loopBottom && !s.continuousVertical || (t = e(b).first()), t.length && Ue(t, null, !1)
		}

		function ue(e, t) {
			Y(0, "internal"), fe(e, t), Y(Nn.scrollingSpeed, "internal")
		}

		function fe(e, t) {
			var n = Ht(e);
			"undefined" != typeof t ? It(e, t) : n.length > 0 && Ue(n)
		}

		function de(e) {
			$e("right", e)
		}

		function pe(e) {
			$e("left", e)
		}

		function he(t) {
			if(!gn.hasClass(f)) {
				yn = !0, mn = te.height(), e(b).each(function() {
					var t = e(this).find(R),
						n = e(this).find(I);
					s.verticalCentered && e(this).find(k).css("height", jt(e(this)) + "px"), e(this).css("height", mn + "px"), s.scrollOverflow && (n.length ? n.each(function() {
						Nt(e(this))
					}) : Nt(e(this))), n.length > 1 && gt(t, t.find(F))
				});
				var n = e(w),
					o = n.index(b);
				o && ue(o + 1), yn = !1, e.isFunction(s.afterResize) && t && s.afterResize.call(gn), e.isFunction(s.afterReBuild) && !t && s.afterReBuild.call(gn)
			}
		}

		function ve(t) {
			var n = ln.hasClass(c);
			t ? n || (l(!1, "internal"), K(!1, "internal"), e(N).hide(), ln.addClass(c), e.isFunction(s.afterResponsive) && s.afterResponsive.call(gn, t)) : n && (l(Nn.autoScrolling, "internal"), K(Nn.autoScrolling, "internal"), e(N).show(), ln.removeClass(c), e.isFunction(s.afterResponsive) && s.afterResponsive.call(gn, t))
		}

		function ge() {
			return {
				options: s,
				internals: {
					getXmovement: Lt,
					removeAnimation: Ct,
					getTransforms: Zt,
					lazyLoad: Je,
					addAnimation: Tt,
					performHorizontalMove: yt,
					silentLandscapeScroll: Kt,
					keepSlidesPosition: Xe,
					silentScroll: Jt,
					styleSlides: we
				}
			}
		}

		function me() {
			s.css3 && (s.css3 = zt()), s.scrollBar = s.scrollBar || s.hybrid, xe(), be(), ae(!0), l(s.autoScrolling, "internal");
			var t = e(w).find(F);
			t.length && (0 !== e(w).index(b) || 0 === e(w).index(b) && 0 !== t.index()) && Kt(t), wt(), Wt(), "complete" === n.readyState && ot(), te.on("load", ot)
		}

		function ye() {
			te.on("scroll", qe).on("hashchange", rt).blur(ft).resize(bt), ne.keydown(it).keyup(st).on("click touchstart", N + " a", dt).on("click touchstart", X, pt).on("click", j, at), e(b).on("click touchstart", U, ut), s.normalScrollElements && (ne.on("mouseenter", s.normalScrollElements, function() {
				ie(!1)
			}), ne.on("mouseleave", s.normalScrollElements, function() {
				ie(!0)
			}))
		}

		function xe() {
			var t = gn.find(s.sectionSelector);
			s.anchors.length || (s.anchors = t.filter("[data-anchor]").map(function() {
				return e(this).data("anchor").toString()
			}).get()), s.navigationTooltips.length || (s.navigationTooltips = t.filter("[data-tooltip]").map(function() {
				return e(this).data("tooltip").toString()
			}).get())
		}

		function be() {
			gn.css({
				height: "100%",
				position: "relative"
			}), gn.addClass(i), e("html").addClass(d), mn = te.height(), gn.removeClass(f), Se(), e(b).each(function(t) {
				var n = e(this),
					o = n.find(I),
					r = o.length;
				Te(n, t), Ce(n, t), r > 0 ? we(n, o, r) : s.verticalCentered && Dt(n)
			}), s.fixedElements && s.css3 && e(s.fixedElements).appendTo(ln), s.navigation && Ee(), Le(), s.scrollOverflow ? ("complete" === n.readyState && Ae(), te.on("load", Ae)) : je()
		}

		function we(t, n, o) {
			var r = 100 * o,
				i = 100 / o;
			n.wrapAll('<div class="' + P + '" />'), n.parent().wrap('<div class="' + M + '" />'), t.find(B).css("width", r + "%"), o > 1 && (s.controlArrows && ke(t), s.slidesNavigation && Mt(t, o)), n.each(function(t) {
				e(this).css("width", i + "%"), s.verticalCentered && Dt(e(this))
			});
			var a = t.find(F);
			a.length && (0 !== e(w).index(b) || 0 === e(w).index(b) && 0 !== a.index()) ? Kt(a) : n.eq(0).addClass(h)
		}

		function Te(t, n) {
			n || 0 !== e(w).length || t.addClass(h), t.css("height", mn + "px"), s.paddingTop && t.css("padding-top", s.paddingTop), s.paddingBottom && t.css("padding-bottom", s.paddingBottom), "undefined" != typeof s.sectionsColor[n] && t.css("background-color", s.sectionsColor[n]), "undefined" != typeof s.anchors[n] && t.attr("data-anchor", s.anchors[n])
		}

		function Ce(t, n) {
			"undefined" != typeof s.anchors[n] && t.hasClass(h) && Et(s.anchors[n], n), s.menu && s.css3 && e(s.menu).closest(a).length && e(s.menu).appendTo(ln)
		}

		function Se() {
			gn.find(s.sectionSelector).addClass(x), gn.find(s.slideSelector).addClass(O)
		}

		function ke(e) {
			e.find(R).after('<div class="' + G + '"></div><div class="' + Z + '"></div>'), "#fff" != s.controlArrowColor && (e.find(ee).css("border-color", "transparent transparent transparent " + s.controlArrowColor), e.find(Q).css("border-color", "transparent " + s.controlArrowColor + " transparent transparent")), s.loopHorizontal || e.find(Q).hide()
		}

		function Ee() {
			ln.append('<div id="' + L + '"><ul></ul></div>');
			var t = e(N);
			t.addClass(function() {
				return s.showActiveTooltip ? q + " " + s.navigationPosition : s.navigationPosition
			});
			for(var n = 0; n < e(b).length; n++) {
				var o = "";
				s.anchors.length && (o = s.anchors[n]);
				var r = '<li><a href="#' + o + '"><span></span></a>',
					i = s.navigationTooltips[n];
				"undefined" != typeof i && "" !== i && (r += '<div class="' + D + " " + s.navigationPosition + '">' + i + "</div>"), r += "</li>", t.find("ul").append(r)
			}
			e(N).css("margin-top", "-" + e(N).height() / 2 + "px"), e(N).find("li").eq(e(w).index(b)).find("a").addClass(h)
		}

		function Ae() {
			e(b).each(function() {
				var t = e(this).find(I);
				t.length ? t.each(function() {
					Nt(e(this))
				}) : Nt(e(this))
			}), je()
		}

		function Le() {
			gn.find('iframe[src*="youtube.com/embed/"]').each(function() {
				Ne(e(this), "enablejsapi=1")
			})
		}

		function Ne(e, t) {
			var n = e.attr("src");
			e.attr("src", n + De(n) + t)
		}

		function De(e) {
			return /\?/.test(e) ? "&" : "?"
		}

		function je() {
			var t = e(w);
			t.addClass(g), s.scrollOverflowHandler.afterRender && s.scrollOverflowHandler.afterRender(t), Je(t), Ze(t), e.isFunction(s.afterLoad) && s.afterLoad.call(t, t.data("anchor"), t.index(b) + 1), e.isFunction(s.afterRender) && s.afterRender.call(gn)
		}

		function qe() {
			var t;
			if(!s.autoScrolling || s.scrollBar) {
				var o = te.scrollTop(),
					r = Oe(o),
					i = 0,
					a = o + te.height() / 2,
					l = ln.height() - te.height() === o,
					c = n.querySelectorAll(b);
				if(l) i = c.length - 1;
				else if(o)
					for(var u = 0; u < c.length; ++u) {
						var f = c[u];
						f.offsetTop <= a && (i = u)
					} else i = 0;
				if(He(r) && (e(w).hasClass(g) || e(w).addClass(g).siblings().removeClass(g)), t = e(c).eq(i), !t.hasClass(h)) {
					Dn = !0;
					var d, p, v = e(w),
						m = v.index(b) + 1,
						y = At(t),
						x = t.data("anchor"),
						T = t.index(b) + 1,
						C = t.find(F);
					C.length && (p = C.data("anchor"), d = C.index()), bn && (t.addClass(h).siblings().removeClass(h), e.isFunction(s.onLeave) && s.onLeave.call(v, m, T, y), e.isFunction(s.afterLoad) && s.afterLoad.call(t, x, T), tt(v), Je(t), Ze(t), Et(x, T - 1), s.anchors.length && (un = x), Rt(d, p, x, T)), clearTimeout(En), En = setTimeout(function() {
						Dn = !1
					}, 100)
				}
				s.fitToSection && (clearTimeout(An), An = setTimeout(function() {
					bn && s.fitToSection && (e(w).is(t) && (yn = !0), Ue(e(w)), yn = !1)
				}, s.fitToSectionDelay))
			}
		}

		function He(t) {
			var n = e(w).position().top,
				o = n + te.height();
			return "up" == t ? o >= te.scrollTop() + te.height() : n <= te.scrollTop()
		}

		function Oe(e) {
			var t = e > jn ? "down" : "up";
			return jn = e, Mn = e, t
		}

		function Ie(e, t) {
			if(Tn.m[e]) {
				var n = "down" === e ? "bottom" : "top",
					o = "down" === e ? ce : le;
				if(t.length > 0) {
					if(!s.scrollOverflowHandler.isScrolled(n, t)) return !0;
					o()
				} else o()
			}
		}

		function Fe(e) {
			var t = e.originalEvent;
			s.autoScrolling && Pe(t) && e.preventDefault()
		}

		function Me(t) {
			var n = t.originalEvent,
				r = e(n.target).closest(b);
			if(!Re(t.target) && Pe(n)) {
				s.autoScrolling && t.preventDefault();
				var i = s.scrollOverflowHandler.scrollable(r);
				if(bn && !pn) {
					var a = Qt(n);
					On = a.y, In = a.x, r.find(R).length && o.abs(Hn - In) > o.abs(qn - On) ? o.abs(Hn - In) > te.outerWidth() / 100 * s.touchSensitivity && (Hn > In ? Tn.m.right && de(r) : Tn.m.left && pe(r)) : s.autoScrolling && o.abs(qn - On) > te.height() / 100 * s.touchSensitivity && (qn > On ? Ie("down", i) : On > qn && Ie("up", i));
				}
			}
		}

		function Re(t, n) {
			n = n || 0;
			var o = e(t).parent();
			return !!(n < s.normalScrollElementTouchThreshold && o.is(s.normalScrollElements)) || n != s.normalScrollElementTouchThreshold && Re(o, ++n)
		}

		function Pe(e) {
			return "undefined" == typeof e.pointerType || "mouse" != e.pointerType
		}

		function Be(e) {
			var t = e.originalEvent;
			if(s.fitToSection && sn.stop(), Pe(t)) {
				var n = Qt(t);
				qn = n.y, Hn = n.x
			}
		}

		function We(e, t) {
			for(var n = 0, r = e.slice(o.max(e.length - t, 1)), i = 0; i < r.length; i++) n += r[i];
			return o.ceil(n / t)
		}

		function ze(n) {
			var r = (new Date).getTime(),
				i = e(m).hasClass(A);
			if(s.autoScrolling && !dn && !i) {
				n = n || t.event;
				var a = n.wheelDelta || -n.deltaY || -n.detail,
					l = o.max(-1, o.min(1, a)),
					c = "undefined" != typeof n.wheelDeltaX || "undefined" != typeof n.deltaX,
					u = o.abs(n.wheelDeltaX) < o.abs(n.wheelDelta) || o.abs(n.deltaX) < o.abs(n.deltaY) || !c;
				wn.length > 149 && wn.shift(), wn.push(o.abs(a)), s.scrollBar && (n.preventDefault ? n.preventDefault() : n.returnValue = !1);
				var f = e(w),
					d = s.scrollOverflowHandler.scrollable(f),
					p = r - Fn;
				if(Fn = r, p > 200 && (wn = []), bn) {
					var h = We(wn, 10),
						v = We(wn, 70),
						g = h >= v;
					g && u && (l < 0 ? Ie("down", d) : Ie("up", d))
				}
				return !1
			}
			s.fitToSection && sn.stop()
		}

		function $e(t, n) {
			var o = "undefined" == typeof n ? e(w) : n,
				r = o.find(R),
				i = r.find(I).length;
			if(!(!r.length || pn || i < 2)) {
				var a = r.find(F),
					l = null;
				if(l = "left" === t ? a.prev(I) : a.next(I), !l.length) {
					if(!s.loopHorizontal) return;
					l = "left" === t ? a.siblings(":last") : a.siblings(":first")
				}
				pn = !0, gt(r, l, t)
			}
		}

		function Xe() {
			e(F).each(function() {
				Kt(e(this), "internal")
			})
		}

		function _e(e) {
			var t = e.position(),
				n = t.top,
				o = t.top > Mn,
				r = n - mn + e.outerHeight(),
				i = s.bigSectionsDestination;
			return e.outerHeight() > mn ? (o || i) && "bottom" !== i || (n = r) : (o || yn && e.is(":last-child")) && (n = r), Mn = n, n
		}

		function Ue(t, n, o) {
			if("undefined" != typeof t) {
				var r, i, a = _e(t),
					l = {
						element: t,
						callback: n,
						isMovementUp: o,
						dtop: a,
						yMovement: At(t),
						anchorLink: t.data("anchor"),
						sectionIndex: t.index(b),
						activeSlide: t.find(F),
						activeSection: e(w),
						leavingSection: e(w).index(b) + 1,
						localIsResizing: yn
					};
				l.activeSection.is(t) && !yn || s.scrollBar && te.scrollTop() === l.dtop && !t.hasClass(E) || (l.activeSlide.length && (r = l.activeSlide.data("anchor"), i = l.activeSlide.index()), s.autoScrolling && s.continuousVertical && "undefined" != typeof l.isMovementUp && (!l.isMovementUp && "up" == l.yMovement || l.isMovementUp && "down" == l.yMovement) && (l = Ge(l)), e.isFunction(s.onLeave) && !l.localIsResizing && s.onLeave.call(l.activeSection, l.leavingSection, l.sectionIndex + 1, l.yMovement) === !1 || (tt(l.activeSection), s.scrollOverflowHandler.beforeLeave(), t.addClass(h).siblings().removeClass(h), Je(t), s.scrollOverflowHandler.onLeave(), bn = !1, Rt(i, r, l.anchorLink, l.sectionIndex), Ve(l), un = l.anchorLink, Et(l.anchorLink, l.sectionIndex)))
			}
		}

		function Ve(t) {
			if(s.css3 && s.autoScrolling && !s.scrollBar) {
				var n = "translate3d(0px, -" + o.round(t.dtop) + "px, 0px)";
				qt(n, !0), s.scrollingSpeed ? (clearTimeout(Sn), Sn = setTimeout(function() {
					Ke(t)
				}, s.scrollingSpeed)) : Ke(t)
			} else {
				var r = Ye(t);
				e(r.element).animate(r.options, s.scrollingSpeed, s.easing).promise().done(function() {
					s.scrollBar ? setTimeout(function() {
						Ke(t)
					}, 30) : Ke(t)
				})
			}
		}

		function Ye(e) {
			var t = {};
			return s.autoScrolling && !s.scrollBar ? (t.options = {
				top: -e.dtop
			}, t.element = a) : (t.options = {
				scrollTop: e.dtop
			}, t.element = "html, body"), t
		}

		function Ge(t) {
			return t.isMovementUp ? e(w).before(t.activeSection.nextAll(b)) : e(w).after(t.activeSection.prevAll(b).get().reverse()), Jt(e(w).position().top), Xe(), t.wrapAroundElements = t.activeSection, t.dtop = t.element.position().top, t.yMovement = At(t.element), t
		}

		function Qe(t) {
			t.wrapAroundElements && t.wrapAroundElements.length && (t.isMovementUp ? e(T).before(t.wrapAroundElements) : e(C).after(t.wrapAroundElements), Jt(e(w).position().top), Xe())
		}

		function Ke(t) {
			Qe(t), e.isFunction(s.afterLoad) && !t.localIsResizing && s.afterLoad.call(t.element, t.anchorLink, t.sectionIndex + 1), s.scrollOverflowHandler.afterLoad(), Ze(t.element), t.element.addClass(g).siblings().removeClass(g), bn = !0, e.isFunction(t.callback) && t.callback.call(this)
		}

		function Je(t) {
			if(s.lazyLoading) {
				var n, o = nt(t);
				o.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
					n = e(this), n.attr("src", n.data("src")), n.removeAttr("data-src"), n.is("source") && n.closest("video").get(0).load()
				})
			}
		}

		function Ze(t) {
			var n = nt(t);
			n.find("video, audio").each(function() {
				var t = e(this).get(0);
				t.hasAttribute("data-autoplay") && "function" == typeof t.play && t.play()
			}), n.find('iframe[src*="youtube.com/embed/"]').each(function() {
				var t = e(this).get(0);
				t.hasAttribute("data-autoplay") && et(t), t.onload = function() {
					t.hasAttribute("data-autoplay") && et(t)
				}
			})
		}

		function et(e) {
			e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
		}

		function tt(t) {
			var n = nt(t);
			n.find("video, audio").each(function() {
				var t = e(this).get(0);
				t.hasAttribute("data-keepplaying") || "function" != typeof t.pause || t.pause()
			}), n.find('iframe[src*="youtube.com/embed/"]').each(function() {
				var t = e(this).get(0);
				/youtube\.com\/embed\//.test(e(this).attr("src")) && !t.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
			})
		}

		function nt(t) {
			var n = t.find(F);
			return n.length && (t = e(n)), t
		}

		function ot() {
			var e = t.location.hash.replace("#", "").split("/"),
				n = decodeURIComponent(e[0]),
				o = decodeURIComponent(e[1]);
			n && (s.animateAnchor ? It(n, o) : ue(n, o))
		}

		function rt() {
			if(!Dn && !s.lockAnchors) {
				var e = t.location.hash.replace("#", "").split("/"),
					n = decodeURIComponent(e[0]),
					o = decodeURIComponent(e[1]),
					r = "undefined" == typeof un,
					i = "undefined" == typeof un && "undefined" == typeof o && !pn;
				n.length && (n && n !== un && !r || i || !pn && fn != o) && It(n, o)
			}
		}

		function it(t) {
			clearTimeout(Ln);
			var n = e(":focus");
			if(!n.is("textarea") && !n.is("input") && !n.is("select") && "true" !== n.attr("contentEditable") && "" !== n.attr("contentEditable") && s.keyboardScrolling && s.autoScrolling) {
				var o = t.which,
					r = [40, 38, 32, 33, 34];
				e.inArray(o, r) > -1 && t.preventDefault(), dn = t.ctrlKey, Ln = setTimeout(function() {
					ht(t)
				}, 150)
			}
		}

		function at() {
			e(this).prev().trigger("click")
		}

		function st(e) {
			xn && (dn = e.ctrlKey)
		}

		function lt(e) {
			2 == e.which && (Rn = e.pageY, gn.on("mousemove", vt))
		}

		function ct(e) {
			2 == e.which && gn.off("mousemove")
		}

		function ut() {
			var t = e(this).closest(b);
			e(this).hasClass(V) ? Tn.m.left && pe(t) : Tn.m.right && de(t)
		}

		function ft() {
			xn = !1, dn = !1
		}

		function dt(t) {
			t.preventDefault();
			var n = e(this).parent().index();
			Ue(e(b).eq(n))
		}

		function pt(t) {
			t.preventDefault();
			var n = e(this).closest(b).find(R),
				o = n.find(I).eq(e(this).closest("li").index());
			gt(n, o)
		}

		function ht(t) {
			var n = t.shiftKey;
			switch(t.which) {
				case 38:
				case 33:
					Tn.k.up && le();
					break;
				case 32:
					if(n && Tn.k.up) {
						le();
						break
					}
				case 40:
				case 34:
					Tn.k.down && ce();
					break;
				case 36:
					Tn.k.up && fe(1);
					break;
				case 35:
					Tn.k.down && fe(e(b).length);
					break;
				case 37:
					Tn.k.left && pe();
					break;
				case 39:
					Tn.k.right && de();
					break;
				default:
					return
			}
		}

		function vt(e) {
			bn && (e.pageY < Rn && Tn.m.up ? le() : e.pageY > Rn && Tn.m.down && ce()), Rn = e.pageY
		}

		function gt(t, n, o) {
			var r = t.closest(b),
				i = {
					slides: t,
					destiny: n,
					direction: o,
					destinyPos: n.position(),
					slideIndex: n.index(),
					section: r,
					sectionIndex: r.index(b),
					anchorLink: r.data("anchor"),
					slidesNav: r.find($),
					slideAnchor: Bt(n),
					prevSlide: r.find(F),
					prevSlideIndex: r.find(F).index(),
					localIsResizing: yn
				};
			return i.xMovement = Lt(i.prevSlideIndex, i.slideIndex), i.localIsResizing || (bn = !1), s.onSlideLeave && !i.localIsResizing && "none" !== i.xMovement && e.isFunction(s.onSlideLeave) && s.onSlideLeave.call(i.prevSlide, i.anchorLink, i.sectionIndex + 1, i.prevSlideIndex, i.xMovement, i.slideIndex) === !1 ? void(pn = !1) : (n.addClass(h).siblings().removeClass(h), i.localIsResizing || (tt(i.prevSlide), Je(n)), !s.loopHorizontal && s.controlArrows && (r.find(Q).toggle(0 !== i.slideIndex), r.find(ee).toggle(!n.is(":last-child"))), r.hasClass(h) && Rt(i.slideIndex, i.slideAnchor, i.anchorLink, i.sectionIndex), void yt(t, i, !0))
		}

		function mt(t) {
			xt(t.slidesNav, t.slideIndex), t.localIsResizing || (e.isFunction(s.afterSlideLoad) && s.afterSlideLoad.call(t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex), bn = !0), Ze(t.destiny), pn = !1
		}

		function yt(e, t, n) {
			var r = t.destinyPos;
			if(s.css3) {
				var i = "translate3d(-" + o.round(r.left) + "px, 0px, 0px)";
				Tt(e.find(B)).css(Zt(i)), kn = setTimeout(function() {
					n && mt(t)
				}, s.scrollingSpeed, s.easing)
			} else e.animate({
				scrollLeft: o.round(r.left)
			}, s.scrollingSpeed, s.easing, function() {
				n && mt(t)
			})
		}

		function xt(e, t) {
			e.find(v).removeClass(h), e.find("li").eq(t).find("a").addClass(h)
		}

		function bt() {
			if(wt(), hn) {
				var t = e(n.activeElement);
				if(!t.is("textarea") && !t.is("input") && !t.is("select")) {
					var r = te.height();
					o.abs(r - Pn) > 20 * o.max(Pn, r) / 100 && (he(!0), Pn = r)
				}
			} else clearTimeout(Cn), Cn = setTimeout(function() {
				he(!0)
			}, 350)
		}

		function wt() {
			var e = s.responsive || s.responsiveWidth,
				t = s.responsiveHeight,
				n = e && te.outerWidth() < e,
				o = t && te.height() < t;
			e && t ? ve(n || o) : e ? ve(n) : t && ve(o)
		}

		function Tt(e) {
			var t = "all " + s.scrollingSpeed + "ms " + s.easingcss3;
			return e.removeClass(u), e.css({
				"-webkit-transition": t,
				transition: t
			})
		}

		function Ct(e) {
			return e.addClass(u)
		}

		function St(t, n) {
			s.navigation && (e(N).find(v).removeClass(h), t ? e(N).find('a[href="#' + t + '"]').addClass(h) : e(N).find("li").eq(n).find("a").addClass(h))
		}

		function kt(t) {
			s.menu && (e(s.menu).find(v).removeClass(h), e(s.menu).find('[data-menuanchor="' + t + '"]').addClass(h))
		}

		function Et(e, t) {
			kt(e), St(e, t)
		}

		function At(t) {
			var n = e(w).index(b),
				o = t.index(b);
			return n == o ? "none" : n > o ? "up" : "down"
		}

		function Lt(e, t) {
			return e == t ? "none" : e > t ? "left" : "right"
		}

		function Nt(e) {
			if(!e.hasClass("fp-noscroll")) {
				e.css("overflow", "hidden");
				var t, n = s.scrollOverflowHandler,
					o = n.wrapContent(),
					r = e.closest(b),
					i = n.scrollable(e);
				i.length ? t = n.scrollHeight(e) : (t = e.get(0).scrollHeight, s.verticalCentered && (t = e.find(k).get(0).scrollHeight));
				var a = mn - parseInt(r.css("padding-bottom")) - parseInt(r.css("padding-top"));
				t > a ? i.length ? n.update(e, a) : (s.verticalCentered ? e.find(k).wrapInner(o) : e.wrapInner(o), n.create(e, a)) : n.remove(e), e.css("overflow", "")
			}
		}

		function Dt(e) {
			e.hasClass(W) || e.addClass(W).wrapInner('<div class="' + S + '" style="height:' + jt(e) + 'px;" />')
		}

		function jt(e) {
			var t = mn;
			if(s.paddingTop || s.paddingBottom) {
				var n = e;
				n.hasClass(x) || (n = e.closest(b));
				var o = parseInt(n.css("padding-top")) + parseInt(n.css("padding-bottom"));
				t = mn - o
			}
			return t
		}

		function qt(e, t) {
			t ? Tt(gn) : Ct(gn), gn.css(Zt(e)), setTimeout(function() {
				gn.removeClass(u)
			}, 10)
		}

		function Ht(t) {
			var n = gn.find(b + '[data-anchor="' + t + '"]');
			return n.length || (n = e(b).eq(t - 1)), n
		}

		function Ot(e, t) {
			var n = t.find(R),
				o = n.find(I + '[data-anchor="' + e + '"]');
			return o.length || (o = n.find(I).eq(e)), o
		}

		function It(e, t) {
			var n = Ht(e);
			n.length && ("undefined" == typeof t && (t = 0), e === un || n.hasClass(h) ? Ft(n, t) : Ue(n, function() {
				Ft(n, t)
			}))
		}

		function Ft(e, t) {
			if("undefined" != typeof t) {
				var n = e.find(R),
					o = Ot(t, e);
				o.length && gt(n, o)
			}
		}

		function Mt(e, t) {
			e.append('<div class="' + z + '"><ul></ul></div>');
			var n = e.find($);
			n.addClass(s.slidesNavPosition);
			for(var o = 0; o < t; o++) n.find("ul").append('<li><a href="#"><span></span></a></li>');
			n.css("margin-left", "-" + n.width() / 2 + "px"), n.find("li").first().find("a").addClass(h)
		}

		function Rt(e, t, n, o) {
			var r = "";
			s.anchors.length && !s.lockAnchors && (e ? ("undefined" != typeof n && (r = n), "undefined" == typeof t && (t = e), fn = t, Pt(r + "/" + t)) : "undefined" != typeof e ? (fn = t, Pt(n)) : Pt(n)), Wt()
		}

		function Pt(e) {
			if(s.recordHistory) location.hash = e;
			else if(hn || vn) t.history.replaceState(r, r, "#" + e);
			else {
				var n = t.location.href.split("#")[0];
				t.location.replace(n + "#" + e)
			}
		}

		function Bt(e) {
			var t = e.data("anchor"),
				n = e.index();
			return "undefined" == typeof t && (t = n), t
		}

		function Wt() {
			var t = e(w),
				n = t.find(F),
				o = Bt(t),
				r = Bt(n),
				i = String(o);
			n.length && (i = i + "-" + r), i = i.replace("/", "-").replace("#", "");
			var a = new RegExp("\\b\\s?" + p + "-[^\\s]+\\b", "g");
			ln[0].className = ln[0].className.replace(a, ""), ln.addClass(p + "-" + i)
		}

		function zt() {
			var e, o = n.createElement("p"),
				i = {
					webkitTransform: "-webkit-transform",
					OTransform: "-o-transform",
					msTransform: "-ms-transform",
					MozTransform: "-moz-transform",
					transform: "transform"
				};
			n.body.insertBefore(o, null);
			for(var a in i) o.style[a] !== r && (o.style[a] = "translate3d(1px,1px,1px)", e = t.getComputedStyle(o).getPropertyValue(i[a]));
			return n.body.removeChild(o), e !== r && e.length > 0 && "none" !== e
		}

		function $t() {
			n.addEventListener ? (n.removeEventListener("mousewheel", ze, !1), n.removeEventListener("wheel", ze, !1), n.removeEventListener("MozMousePixelScroll", ze, !1)) : n.detachEvent("onmousewheel", ze)
		}

		function Xt() {
			var e, o = "";
			t.addEventListener ? e = "addEventListener" : (e = "attachEvent", o = "on");
			var i = "onwheel" in n.createElement("div") ? "wheel" : n.onmousewheel !== r ? "mousewheel" : "DOMMouseScroll";
			"DOMMouseScroll" == i ? n[e](o + "MozMousePixelScroll", ze, !1) : n[e](o + i, ze, !1)
		}

		function _t() {
			gn.on("mousedown", lt).on("mouseup", ct)
		}

		function Ut() {
			gn.off("mousedown", lt).off("mouseup", ct)
		}

		function Vt() {
			if(s.autoScrolling && (hn || vn)) {
				var t = Gt();
				ln.off("touchmove " + t.move).on("touchmove " + t.move, Fe), e(a).off("touchstart " + t.down).on("touchstart " + t.down, Be).off("touchmove " + t.move).on("touchmove " + t.move, Me)
			}
		}

		function Yt() {
			if(hn || vn) {
				var t = Gt();
				e(a).off("touchstart " + t.down).off("touchmove " + t.move)
			}
		}

		function Gt() {
			var e;
			return e = t.PointerEvent ? {
				down: "pointerdown",
				move: "pointermove"
			} : {
				down: "MSPointerDown",
				move: "MSPointerMove"
			}
		}

		function Qt(e) {
			var t = [];
			return t.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, t.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, vn && Pe(e) && s.scrollBar && (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
		}

		function Kt(e, t) {
			Y(0, "internal"), "undefined" != typeof t && (yn = !0), gt(e.closest(R), e), "undefined" != typeof t && (yn = !1), Y(Nn.scrollingSpeed, "internal")
		}

		function Jt(e) {
			var t = o.round(e);
			if(s.scrollBar) gn.scrollTop(t);
			else if(s.css3) {
				var n = "translate3d(0px, -" + t + "px, 0px)";
				qt(n, !1)
			} else gn.css("top", -t)
		}

		function Zt(e) {
			return {
				"-webkit-transform": e,
				"-moz-transform": e,
				"-ms-transform": e,
				transform: e
			}
		}

		function en(e, t, n) {
			switch(t) {
				case "up":
					Tn[n].up = e;
					break;
				case "down":
					Tn[n].down = e;
					break;
				case "left":
					Tn[n].left = e;
					break;
				case "right":
					Tn[n].right = e;
					break;
				case "all":
					"m" == n ? ae(e) : se(e)
			}
		}

		function tn(t) {
			l(!1, "internal"), ae(!1), se(!1), gn.addClass(f), clearTimeout(kn), clearTimeout(Sn), clearTimeout(Cn), clearTimeout(En), clearTimeout(An), te.off("scroll", qe).off("hashchange", rt).off("resize", bt), ne.off("click touchstart", N + " a").off("mouseenter", N + " li").off("mouseleave", N + " li").off("click touchstart", X).off("mouseover", s.normalScrollElements).off("mouseout", s.normalScrollElements), e(b).off("click touchstart", U), clearTimeout(kn), clearTimeout(Sn), t && nn()
		}

		function nn() {
			Jt(0), gn.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
				e(this).attr("src", e(this).data("src")), e(this).removeAttr("data-src")
			}), e(N + ", " + $ + ", " + U).remove(), e(b).css({
				height: "",
				"background-color": "",
				padding: ""
			}), e(I).css({
				width: ""
			}), gn.css({
				height: "",
				position: "",
				"-ms-touch-action": "",
				"touch-action": ""
			}), sn.css({
				overflow: "",
				height: ""
			}), e("html").removeClass(d), ln.removeClass(c), e.each(ln.get(0).className.split(/\s+/), function(e, t) {
				0 === t.indexOf(p) && ln.removeClass(t)
			}), e(b + ", " + I).each(function() {
				s.scrollOverflowHandler.remove(e(this)), e(this).removeClass(W + " " + h)
			}), Ct(gn), gn.find(k + ", " + B + ", " + R).each(function() {
				e(this).replaceWith(this.childNodes)
			}), sn.scrollTop(0);
			var t = [x, O, P];
			e.each(t, function(t, n) {
				e("." + n).removeClass(n)
			})
		}

		function on(e, t, n) {
			s[e] = t, "internal" !== n && (Nn[e] = t)
		}

		function rn() {
			var t = ["fadingEffect", "continuousHorizontal", "scrollHorizontally", "interlockedSlides", "resetSliders", "responsiveSlides"];
			return e("html").hasClass(d) ? void an("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (s.continuousVertical && (s.loopTop || s.loopBottom) && (s.continuousVertical = !1, an("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), s.scrollBar && s.scrollOverflow && an("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), s.continuousVertical && s.scrollBar && (s.continuousVertical = !1, an("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), t.forEach(function(e) {
				s[e] && an("warn", "fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: " + e)
			}), void e.each(s.anchors, function(t, n) {
				var o = ne.find("[name]").filter(function() {
						return e(this).attr("name") && e(this).attr("name").toLowerCase() == n.toLowerCase()
					}),
					r = ne.find("[id]").filter(function() {
						return e(this).attr("id") && e(this).attr("id").toLowerCase() == n.toLowerCase()
					});
				(r.length || o.length) && (an("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), r.length && an("error", '"' + n + '" is is being used by another element `id` property'), o.length && an("error", '"' + n + '" is is being used by another element `name` property'))
			}))
		}

		function an(e, t) {
			console && console[e] && console[e]("fullPage: " + t)
		}
		if(e("html").hasClass(d)) return void rn();
		var sn = e("html, body"),
			ln = e("body"),
			cn = e.fn.fullpage;
		s = e.extend({
			menu: !1,
			anchors: [],
			lockAnchors: !1,
			navigation: !1,
			navigationPosition: "right",
			navigationTooltips: [],
			showActiveTooltip: !1,
			slidesNavigation: !1,
			slidesNavPosition: "bottom",
			scrollBar: !1,
			hybrid: !1,
			css3: !0,
			scrollingSpeed: 700,
			autoScrolling: !0,
			fitToSection: !0,
			fitToSectionDelay: 1e3,
			easing: "easeInOutCubic",
			easingcss3: "ease",
			loopBottom: !1,
			loopTop: !1,
			loopHorizontal: !0,
			continuousVertical: !1,
			continuousHorizontal: !1,
			scrollHorizontally: !1,
			interlockedSlides: !1,
			resetSliders: !1,
			fadingEffect: !1,
			normalScrollElements: null,
			scrollOverflow: !1,
			scrollOverflowHandler: re,
			scrollOverflowOptions: null,
			touchSensitivity: 5,
			normalScrollElementTouchThreshold: 5,
			bigSectionsDestination: null,
			keyboardScrolling: !0,
			animateAnchor: !0,
			recordHistory: !0,
			controlArrows: !0,
			controlArrowColor: "#fff",
			verticalCentered: !0,
			sectionsColor: [],
			paddingTop: 0,
			paddingBottom: 0,
			fixedElements: null,
			responsive: 0,
			responsiveWidth: 0,
			responsiveHeight: 0,
			responsiveSlides: !1,
			sectionSelector: y,
			slideSelector: H,
			afterLoad: null,
			onLeave: null,
			afterRender: null,
			afterResize: null,
			afterReBuild: null,
			afterSlideLoad: null,
			onSlideLeave: null,
			afterResponsive: null,
			lazyLoading: !0
		}, s);
		var un, fn, dn, pn = !1,
			hn = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
			vn = "ontouchstart" in t || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
			gn = e(this),
			mn = te.height(),
			yn = !1,
			xn = !0,
			bn = !0,
			wn = [],
			Tn = {};
		Tn.m = {
			up: !0,
			down: !0,
			left: !0,
			right: !0
		}, Tn.k = e.extend(!0, {}, Tn.m);
		var Cn, Sn, kn, En, An, Ln, Nn = e.extend(!0, {}, s);
		rn(), oe.click = vn, oe = e.extend(oe, s.scrollOverflowOptions), e.extend(e.easing, {
			easeInOutCubic: function(e, t, n, o, r) {
				return(t /= r / 2) < 1 ? o / 2 * t * t * t + n : o / 2 * ((t -= 2) * t * t + 2) + n
			}
		}), e(this).length && (cn.setAutoScrolling = l, cn.setRecordHistory = _, cn.setScrollingSpeed = Y, cn.setFitToSection = K, cn.setLockAnchors = J, cn.setMouseWheelScrolling = ie, cn.setAllowScrolling = ae, cn.setKeyboardScrolling = se, cn.moveSectionUp = le, cn.moveSectionDown = ce, cn.silentMoveTo = ue, cn.moveTo = fe, cn.moveSlideRight = de, cn.moveSlideLeft = pe, cn.reBuild = he, cn.setResponsive = ve, cn.getFullpageData = ge, cn.destroy = tn, me(), ye());
		var Dn = !1,
			jn = 0,
			qn = 0,
			Hn = 0,
			On = 0,
			In = 0,
			Fn = (new Date).getTime(),
			Mn = 0,
			Rn = 0,
			Pn = mn
	}, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function() {
		this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
	}, IScroll.prototype.wheelOff = function() {
		this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
	});
	var re = {
		refreshId: null,
		iScrollInstances: [],
		onLeave: function() {
			var t = e(w).find(l).data("iscrollInstance");
			"undefined" != typeof t && t && t.wheelOff()
		},
		beforeLeave: function() {
			re.onLeave()
		},
		afterLoad: function() {
			var t = e(w).find(l).data("iscrollInstance");
			"undefined" != typeof t && t && t.wheelOn()
		},
		create: function(t, n) {
			var o = t.find(l);
			o.height(n), o.each(function() {
				var t = jQuery(this),
					n = t.data("iscrollInstance");
				n && e.each(re.iScrollInstances, function() {
					e(this).destroy()
				}), n = new IScroll(t.get(0), oe), re.iScrollInstances.push(n), n.wheelOff(), t.data("iscrollInstance", n)
			})
		},
		isScrolled: function(e, t) {
			var n = t.data("iscrollInstance");
			return !n || ("top" === e ? n.y >= 0 && !t.scrollTop() : "bottom" === e ? 0 - n.y + t.scrollTop() + 1 + t.innerHeight() >= t[0].scrollHeight : void 0)
		},
		scrollable: function(e) {
			return e.find(R).length ? e.find(F).find(l) : e.find(l)
		},
		scrollHeight: function(e) {
			return e.find(l).children().first().get(0).scrollHeight
		},
		remove: function(e) {
			var t = e.find(l);
			if(t.length) {
				var n = t.data("iscrollInstance");
				n.destroy(), t.data("iscrollInstance", null)
			}
			e.find(l).children().first().children().first().unwrap().unwrap()
		},
		update: function(t, n) {
			clearTimeout(re.refreshId), re.refreshId = setTimeout(function() {
				e.each(re.iScrollInstances, function() {
					e(this).get(0).refresh()
				})
			}, 150), t.find(l).css("height", n + "px").parent().css("height", n + "px")
		},
		wrapContent: function() {
			return '<div class="' + s + '"><div class="fp-scroller"></div></div>'
		}
	}
});