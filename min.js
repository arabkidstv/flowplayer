! function(e) {
    function t(e, t, n, i) {
        for (var r, o = n.slice(), a = (c = e, (u = t).currentTarget = c, u.eventPhase = u.target === u.currentTarget ? 2 : 3, u), s = 0, l = o.length; s < l && (handler = o[s], "object" == typeof handler && "function" == typeof handler.handleEvent ? handler.handleEvent(a) : handler.call(e, a), !a.stoppedImmediatePropagation); s++);
        var u, c;
        return r = !a.stoppedPropagation, i && r && e.parentNode ? e.parentNode.dispatchEvent(a) : !a.defaultPrevented
    }

    function n(e, t) {
        return {
            configurable: !0,
            get: e,
            set: t
        }
    }

    function i(e, t, i) {
        var r = y(t || e, i);
        m(e, "textContent", n(function() {
            return r.get.call(this)
        }, function(e) {
            r.set.call(this, e)
        }))
    }

    function r(e, t) {
        for (var n = e.length; n-- && e[n] !== t;);
        return n
    }

    function o() {
        if ("BR" === this.tagName) return "\n";
        for (var e = this.firstChild, t = []; e;) 8 !== e.nodeType && 7 !== e.nodeType && t.push(e.textContent), e = e.nextSibling;
        return t.join("")
    }

    function a(e) {
        !f && C.test(document.readyState) && (f = !f, document.detachEvent(d, a), (e = document.createEvent("Event")).initEvent(p, !0, !0), document.dispatchEvent(e))
    }

    function s(e) {
        for (var t; t = this.lastChild;) this.removeChild(t);
        null != e && this.appendChild(document.createTextNode(e))
    }

    function l(t, n) {
        return n || (n = e.event), n.target || (n.target = n.srcElement || n.fromElement || document), n.timeStamp || (n.timeStamp = (new Date).getTime()), n
    }
    if (!document.createEvent) {
        var u, c = !0,
            f = !1,
            d = "onreadystatechange",
            p = "DOMContentLoaded",
            h = "__IE8__" + Math.random(),
            g = e.Object,
            m = g.defineProperty || function(e, t, n) {
                e[t] = n.value
            },
            v = g.defineProperties || function(t, n) {
                for (var i in n)
                    if (w.call(n, i)) try {
                        m(t, i, n[i])
                    } catch (n) {
                        e.console && console.log(i + " failed on object:", t, n.message)
                    }
            },
            y = g.getOwnPropertyDescriptor,
            w = g.prototype.hasOwnProperty,
            b = e.Element.prototype,
            I = e.Text.prototype,
            M = /^[a-z]+$/,
            C = /loaded|complete/,
            A = {},
            S = document.createElement("div");
        i(e.HTMLCommentElement.prototype, b, "nodeValue"), i(e.HTMLScriptElement.prototype, null, "text"), i(I, null, "nodeValue"), i(e.HTMLTitleElement.prototype, null, "text"), m(e.HTMLStyleElement.prototype, "textContent", (u = y(e.CSSStyleSheet.prototype, "cssText"), n(function() {
            return u.get.call(this.styleSheet)
        }, function(e) {
            u.set.call(this.styleSheet, e)
        }))), v(b, {
            textContent: {
                get: o,
                set: s
            },
            firstElementChild: {
                get: function() {
                    for (var e = this.childNodes || [], t = 0, n = e.length; t < n; t++)
                        if (1 == e[t].nodeType) return e[t]
                }
            },
            lastElementChild: {
                get: function() {
                    for (var e = this.childNodes || [], t = e.length; t--;)
                        if (1 == e[t].nodeType) return e[t]
                }
            },
            previousElementSibling: {
                get: function() {
                    for (var e = this.previousSibling; e && 1 != e.nodeType;) e = e.previousSibling;
                    return e
                }
            },
            nextElementSibling: {
                get: function() {
                    for (var e = this.nextSibling; e && 1 != e.nodeType;) e = e.nextSibling;
                    return e
                }
            },
            childElementCount: {
                get: function() {
                    for (var e = 0, t = this.childNodes || [], n = t.length; n--; e += 1 == t[n].nodeType);
                    return e
                }
            },
            addEventListener: {
                value: function(e, n, i) {
                    var o, a = this,
                        s = "on" + e,
                        u = a[h] || m(a, h, {
                            value: {}
                        })[h],
                        c = u[s] || (u[s] = {}),
                        f = c.h || (c.h = []);
                    if (!w.call(c, "w")) {
                        if (c.w = function(e) {
                                return e[h] || t(a, l(0, e), f, !1)
                            }, !w.call(A, s))
                            if (M.test(e)) try {
                                (o = document.createEventObject())[h] = !0, 9 != a.nodeType && null == a.parentNode && S.appendChild(a), a.fireEvent(s, o), A[s] = !0
                            } catch (o) {
                                for (A[s] = !1; S.hasChildNodes();) S.removeChild(S.firstChild)
                            } else A[s] = !1;
                            (c.n = A[s]) && a.attachEvent(s, c.w)
                    }
                    r(f, n) < 0 && f[i ? "unshift" : "push"](n)
                }
            },
            dispatchEvent: {
                value: function(e) {
                    var n, i = this,
                        r = "on" + e.type,
                        o = i[h],
                        a = o && o[r],
                        s = !!a;
                    return e.target || (e.target = i), s ? a.n ? i.fireEvent(r, e) : t(i, e, a.h, !0) : !(n = i.parentNode) || n.dispatchEvent(e), !e.defaultPrevented
                }
            },
            removeEventListener: {
                value: function(e, t, n) {
                    var i = "on" + e,
                        o = this[h],
                        a = o && o[i],
                        s = a && a.h,
                        l = s ? r(s, t) : -1; - 1 < l && s.splice(l, 1)
                }
            }
        }), v(I, {
            addEventListener: {
                value: b.addEventListener
            },
            dispatchEvent: {
                value: b.dispatchEvent
            },
            removeEventListener: {
                value: b.removeEventListener
            }
        }), v(e.XMLHttpRequest.prototype, {
            addEventListener: {
                value: function(e, t, n) {
                    var i = this,
                        o = "on" + e,
                        a = i[h] || m(i, h, {
                            value: {}
                        })[h],
                        s = a[o] || (a[o] = {}),
                        l = s.h || (s.h = []);
                    r(l, t) < 0 && (i[o] || (i[o] = function() {
                        var t = document.createEvent("Event");
                        t.initEvent(e, !0, !0), i.dispatchEvent(t)
                    }), l[n ? "unshift" : "push"](t))
                }
            },
            dispatchEvent: {
                value: function(e) {
                    var n = "on" + e.type,
                        i = this[h],
                        r = i && i[n];
                    return !!r && (r.n ? this.fireEvent(n, e) : t(this, e, r.h, !0))
                }
            },
            removeEventListener: {
                value: b.removeEventListener
            }
        }), v(e.Event.prototype, {
            bubbles: {
                value: !0,
                writable: !0
            },
            cancelable: {
                value: !0,
                writable: !0
            },
            preventDefault: {
                value: function() {
                    this.cancelable && (this.defaultPrevented = !0, this.returnValue = !1)
                }
            },
            stopPropagation: {
                value: function() {
                    this.stoppedPropagation = !0, this.cancelBubble = !0
                }
            },
            stopImmediatePropagation: {
                value: function() {
                    this.stoppedImmediatePropagation = !0, this.stopPropagation()
                }
            },
            initEvent: {
                value: function(e, t, n) {
                    this.type = e, this.bubbles = !!t, this.cancelable = !!n, this.bubbles || this.stopPropagation()
                }
            }
        }), v(e.HTMLDocument.prototype, {
            textContent: {
                get: function() {
                    return 11 === this.nodeType ? o.call(this) : null
                },
                set: function(e) {
                    11 === this.nodeType && s.call(this, e)
                }
            },
            addEventListener: {
                value: function(t, n, i) {
                    var r = this;
                    b.addEventListener.call(r, t, n, i), c && t === p && !C.test(r.readyState) && (c = !1, r.attachEvent(d, a), e == top && function e(t) {
                        try {
                            r.documentElement.doScroll("left"), a()
                        } catch (t) {
                            setTimeout(e, 50)
                        }
                    }())
                }
            },
            dispatchEvent: {
                value: b.dispatchEvent
            },
            removeEventListener: {
                value: b.removeEventListener
            },
            createEvent: {
                value: function(e) {
                    var t;
                    if ("Event" !== e) throw new Error("unsupported " + e);
                    return (t = document.createEventObject()).timeStamp = (new Date).getTime(), t
                }
            }
        }), v(e.Window.prototype, {
            getComputedStyle: {
                value: function() {
                    function e(e) {
                        this._ = e
                    }

                    function t() {}
                    var n = /^(?:[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/,
                        i = /^(top|right|bottom|left)$/,
                        r = /\-([a-z])/g,
                        o = function(e, t) {
                            return t.toUpperCase()
                        };
                    return e.prototype.getPropertyValue = function(e) {
                            var t, a, s, l = this._,
                                u = l.style,
                                c = l.currentStyle,
                                f = l.runtimeStyle;
                            return e = ("float" === e ? "style-float" : e).replace(r, o), t = c ? c[e] : u[e], n.test(t) && !i.test(e) && (a = u.left, (s = f && f.left) && (f.left = c.left), u.left = "fontSize" === e ? "1em" : t, t = u.pixelLeft + "px", u.left = a, s && (f.left = s)), null == t ? t : t + "" || "auto"
                        }, t.prototype.getPropertyValue = function() {
                            return null
                        },
                        function(n, i) {
                            return i ? new t(n) : new e(n)
                        }
                }()
            },
            addEventListener: {
                value: function(n, i, o) {
                    var a, s = e,
                        u = "on" + n;
                    s[u] || (s[u] = function(e) {
                        return t(s, l(0, e), a, !1)
                    }), r(a = s[u][h] || (s[u][h] = []), i) < 0 && a[o ? "unshift" : "push"](i)
                }
            },
            dispatchEvent: {
                value: function(t) {
                    var n = e["on" + t.type];
                    return !n || !1 !== n.call(e, t) && !t.defaultPrevented
                }
            },
            removeEventListener: {
                value: function(t, n, i) {
                    var o = (e["on" + t] || g)[h],
                        a = o ? r(o, n) : -1; - 1 < a && o.splice(a, 1)
                }
            }
        })
    }
}(this),
function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).flowplayer = e()
    }
}(function() {
    return function e(t, n, i) {
        function r(a, s) {
            if (!n[a]) {
                if (!t[a]) {
                    var l = "function" == typeof require && require;
                    if (!s && l) return l(a, !0);
                    if (o) return o(a, !0);
                    var u = new Error("Cannot find module '" + a + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = n[a] = {
                    exports: {}
                };
                t[a][0].call(c.exports, function(e) {
                    var n = t[a][1][e];
                    return r(n || e)
                }, c, c.exports, e, t, n, i)
            }
            return n[a].exports
        }
        for (var o = "function" == typeof require && require, a = 0; a < i.length; a++) r(i[a]);
        return r
    }({
        1: [function(e, t, n) {
            "use strict";
            var i = t.exports = {},
                r = e("class-list"),
                o = window.jQuery,
                a = e("punycode"),
                s = e("computed-style");
            i.noop = function() {}, i.identity = function(e) {
                    return e
                }, i.removeNode = function(e) {
                    e && e.parentNode && e.parentNode.removeChild(e)
                }, i.find = function(e, t) {
                    return o ? o(e, t).toArray() : (t = t || document, Array.prototype.map.call(t.querySelectorAll(e), function(e) {
                        return e
                    }))
                }, i.text = function(e, t) {
                    e["innerText" in e ? "innerText" : "textContent"] = t
                }, i.findDirect = function(e, t) {
                    return i.find(e, t).filter(function(e) {
                        return e.parentNode === t
                    })
                }, i.hasClass = function(e, t) {
                    return "string" == typeof e.className && r(e).contains(t)
                }, i.isSameDomain = function(e) {
                    var t = window.location,
                        n = i.createElement("a", {
                            href: e
                        });
                    return t.hostname === n.hostname && t.protocol === n.protocol && t.port === n.port
                }, i.css = function(e, t, n) {
                    return "object" == typeof t ? Object.keys(t).forEach(function(n) {
                        i.css(e, n, t[n])
                    }) : void 0 !== n ? "" === n ? e ? e.style.removeProperty(t) : void 0 : e ? e.style.setProperty(t, n) : void 0 : e ? s(e, t) : void 0
                }, i.createElement = function(e, t, n) {
                    try {
                        var r = document.createElement(e);
                        for (var a in t) t.hasOwnProperty(a) && ("css" === a ? i.css(r, t[a]) : i.attr(r, a, t[a]));
                        return n && (r.innerHTML = n), r
                    } catch (i) {
                        if (!o) throw i;
                        return o("<" + e + ">" + n + "</" + e + ">").attr(t)[0]
                    }
                }, i.toggleClass = function(e, t, n) {
                    if (e) {
                        var i = r(e);
                        void 0 === n ? i.toggle(t) : n ? i.add(t) : n || i.remove(t)
                    }
                }, i.addClass = function(e, t) {
                    return i.toggleClass(e, t, !0)
                }, i.removeClass = function(e, t) {
                    return i.toggleClass(e, t, !1)
                }, i.append = function(e, t) {
                    return e.appendChild(t), e
                }, i.appendTo = function(e, t) {
                    return i.append(t, e), e
                }, i.prepend = function(e, t) {
                    e.insertBefore(t, e.firstChild)
                }, i.insertAfter = function(e, t, n) {
                    t == i.lastChild(e) && e.appendChild(n);
                    var r = Array.prototype.indexOf.call(e.children, t);
                    e.insertBefore(n, e.children[r + 1])
                }, i.html = function(e, t) {
                    (e = e.length ? e : [e]).forEach(function(e) {
                        e.innerHTML = t
                    })
                }, i.attr = function(e, t, n) {
                    if ("class" === t && (t = "className"), i.hasOwnOrPrototypeProperty(e, t)) try {
                        e[t] = n
                    } catch (i) {
                        if (!o) throw i;
                        o(e).attr(t, n)
                    } else !1 === n ? e.removeAttribute(t) : e.setAttribute(t, n);
                    return e
                }, i.prop = function(e, t, n) {
                    if (void 0 === n) return e && e[t];
                    e[t] = n
                }, i.offset = function(e) {
                    var t = e.getBoundingClientRect();
                    return e.offsetWidth / e.offsetHeight > e.clientWidth / e.clientHeight && (t = {
                        left: 100 * t.left,
                        right: 100 * t.right,
                        top: 100 * t.top,
                        bottom: 100 * t.bottom,
                        width: 100 * t.width,
                        height: 100 * t.height
                    }), t
                }, i.width = function(e, t) {
                    if (t) return e.style.width = ("" + t).replace(/px$/, "") + "px";
                    var n = i.offset(e).width;
                    return void 0 === n ? e.offsetWidth : n
                }, i.height = function(e, t) {
                    if (t) return e.style.height = ("" + t).replace(/px$/, "") + "px";
                    var n = i.offset(e).height;
                    return void 0 === n ? e.offsetHeight : n
                }, i.lastChild = function(e) {
                    return e.children[e.children.length - 1]
                }, i.hasParent = function(e, t) {
                    for (var n = e.parentElement; n;) {
                        if ("string" != typeof t) {
                            if (n === t) return !0
                        } else if (i.matches(n, t)) return !0;
                        n = n.parentElement
                    }
                    return !1
                }, i.createAbsoluteUrl = function(e) {
                    return i.createElement("a", {
                        href: e
                    }).href
                }, i.xhrGet = function(e, t, n) {
                    var i = new XMLHttpRequest;
                    i.onreadystatechange = function() {
                        if (4 === this.readyState) return this.status >= 400 ? n() : void t(this.responseText)
                    }, i.open("get", e, !0), i.send()
                }, i.pick = function(e, t) {
                    var n = {};
                    return t.forEach(function(t) {
                        e.hasOwnProperty(t) && (n[t] = e[t])
                    }), n
                }, i.hostname = function(e) {
                    return a.toUnicode(e || window.location.hostname)
                }, i.browser = {
                    webkit: "WebkitAppearance" in document.documentElement.style
                }, i.getPrototype = function(e) {
                    return Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__
                }, i.hasOwnOrPrototypeProperty = function(e, t) {
                    for (var n = e; n;) {
                        if (Object.prototype.hasOwnProperty.call(n, t)) return !0;
                        n = i.getPrototype(n)
                    }
                    return !1
                }, i.matches = function(e, t) {
                    var n = Element.prototype;
                    return (n.matches || n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector || function(e) {
                        for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = 0; t[n] && t[n] !== this;) n++;
                        return !!t[n]
                    }).call(e, t)
                },
                function(e) {
                    function t(e) {
                        return e.replace(/-[a-z]/g, function(e) {
                            return e[1].toUpperCase()
                        })
                    }
                    void 0 !== e.setAttribute && (e.setProperty = function(e, n) {
                        return this.setAttribute(t(e), String(n))
                    }, e.getPropertyValue = function(e) {
                        return this.getAttribute(t(e)) || null
                    }, e.removeProperty = function(e) {
                        var n = this.getPropertyValue(e);
                        return this.removeAttribute(t(e)), n
                    })
                }(window.CSSStyleDeclaration.prototype)
        }, {
            "class-list": 36,
            "computed-style": 37,
            punycode: 44
        }],
        2: [function(e, t, n) {
            "use strict";
            var i = e("../common");
            t.exports = function(e, t, n, r) {
                n = n || "opaque";
                var o = "obj" + ("" + Math.random()).slice(2, 15),
                    a = '<object class="fp-engine" id="' + o + '" name="' + o + '" ',
                    s = navigator.userAgent.indexOf("MSIE") > -1;
                a += s ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' : ' data="' + e + '" type="application/x-shockwave-flash">';
                var l = {
                    width: "100%",
                    height: "100%",
                    allowscriptaccess: "always",
                    wmode: n,
                    quality: "high",
                    flashvars: "",
                    movie: e + (s ? "?" + o : ""),
                    name: o
                };
                "transparent" !== n && (l.bgcolor = r || "#333333"), Object.keys(t).forEach(function(e) {
                    l.flashvars += e + "=" + t[e] + "&"
                }), Object.keys(l).forEach(function(e) {
                    a += '<param name="' + e + '" value="' + l[e] + '"/>'
                }), a += "</object>";
                var u = i.createElement("div", {}, a);
                return i.find("object", u)
            }, window.attachEvent && window.attachEvent("onbeforeunload", function() {
                window.__flash_savedUnloadHandler = window.__flash_unloadHandler = function() {}
            })
        }, {
            "../common": 1
        }],
        3: [function(e, t, n) {
            "use strict";
            var i, r = e("../flowplayer"),
                o = e("../common"),
                a = e("./embed"),
                s = e("extend-object"),
                l = e("bean");

            function u(e) {
                return /^https?:/.test(e)
            }(i = function(e, t) {
                var n, c, f, d, p = e.conf,
                    h = [],
                    g = {
                        engineName: i.engineName,
                        pick: function(t) {
                            var n = s({}, function() {
                                if (r.support.flashVideo) {
                                    for (var n, i, o = 0; o < t.length; o++)
                                        if (i = t[o], /mp4|flv|flash/i.test(i.type) && (n = i), e.conf.swfHls && /mpegurl/i.test(i.type) && (n = i), n && !/mp4/i.test(n.type)) return n;
                                    return n
                                }
                            }());
                            if (n) return !n.src || u(n.src) || e.conf.rtmp || n.rtmp || (n.src = o.createAbsoluteUrl(n.src)), n
                        },
                        suspendEngine: function() {
                            d = !0
                        },
                        resumeEngine: function() {
                            d = !1
                        },
                        load: function(i) {
                            function v(e) {
                                return e.replace(/&amp;/g, "%26").replace(/&/g, "%26").replace(/=/g, "%3D")
                            }
                            n = i, h.forEach(function(e) {
                                clearTimeout(e)
                            });
                            var y = o.findDirect("video", t)[0] || o.find(".fp-player > video", t)[0],
                                w = i.src,
                                b = u(w),
                                I = function() {
                                    o.removeNode(y)
                                };
                            r.support.video && o.prop(y, "autoplay") && i.sources.some(function(e) {
                                return !!y.canPlayType(e.type)
                            }) ? l.one(y, "timeupdate", I) : I();
                            var M, C = i.rtmp || p.rtmp;
                            if (b || C || (w = o.createAbsoluteUrl(w)), f && m(i) && f.data !== o.createAbsoluteUrl(p.swfHls) && g.unload(), f) {
                                ["live", "preload", "loop"].forEach(function(e) {
                                    i.hasOwnProperty(e) && f.__set(e, i[e])
                                }), Object.keys(i.flashls || {}).forEach(function(e) {
                                    f.__set("hls_" + e, i.flashls[e])
                                });
                                var A = !1;
                                if (!b && C) f.__set("rtmp", C.url || C);
                                else A = !!f.__get("rtmp"), f.__set("rtmp", null);
                                f.__play(w, A || i.rtmp && i.rtmp !== p.rtmp)
                            } else {
                                c = "fpCallback" + ("" + Math.random()).slice(3, 15), w = v(w);
                                var S = {
                                    hostname: p.embedded ? o.hostname(p.hostname) : o.hostname(location.hostname),
                                    url: w,
                                    callback: c
                                };
                                t.getAttribute("data-origin") && (S.origin = t.getAttribute("data-origin")), ["proxy", "key", "autoplay", "preload", "subscribe", "live", "loop", "debug", "splash", "poster", "rtmpt"].forEach(function(e) {
                                    p.hasOwnProperty(e) && (S[e] = p[e]), i.hasOwnProperty(e) && (S[e] = i[e]), (p.rtmp || {}).hasOwnProperty(e) && (S[e] = (p.rtmp || {})[e]), (i.rtmp || {}).hasOwnProperty(e) && (S[e] = (i.rtmp || {})[e])
                                }), p.splash && (S.autoplay = !0), p.rtmp && (S.rtmp = p.rtmp.url || p.rtmp), i.rtmp && (S.rtmp = i.rtmp.url || i.rtmp), Object.keys(i.flashls || {}).forEach(function(e) {
                                    var t = i.flashls[e];
                                    S["hls_" + e] = t
                                });
                                var E = void 0 !== i.hlsQualities ? i.hlsQualities : p.hlsQualities;
                                void 0 !== E && (S.hlsQualities = E ? encodeURIComponent(JSON.stringify(E)) : E), void 0 !== p.bufferTime && (S.bufferTime = p.bufferTime), b && delete S.rtmp, S.rtmp && (S.rtmp = v(S.rtmp));
                                var D, N = p.bgcolor || o.css(t, "background-color") || "";
                                0 === N.indexOf("rgb") ? D = function(e) {
                                    function t(e) {
                                        return ("0" + parseInt(e).toString(16)).slice(-2)
                                    }
                                    if (!(e = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))) return;
                                    return "#" + t(e[1]) + t(e[2]) + t(e[3])
                                }(N) : 0 === N.indexOf("#") && (D = 7 === (M = N).length ? M : "#" + M.split("").slice(1).map(function(e) {
                                    return e + e
                                }).join("")), S.initialVolume = e.volumeLevel;
                                var j = m(i) ? p.swfHls : p.swf;
                                f = a(j, S, p.wmode, D)[0];
                                var L = o.find(".fp-player", t)[0];
                                o.prepend(L, f), e.off("quality.flashengine").on("quality.flashengine", function(t, n, i) {
                                    if (void 0 !== e.video.hlsQualities ? e.video.hlsQualities : e.conf.hlsQualities) try {
                                        f.__quality(i)
                                    } catch (t) {
                                        e.debug("Error changing quality in flash engine", t)
                                    }
                                }), setTimeout(function() {
                                    try {
                                        if (!f.PercentLoaded()) return e.trigger("error", [e, {
                                            code: 7,
                                            url: p.swf
                                        }])
                                    } catch (e) {}
                                }, 5e3), h.push(setTimeout(function() {
                                    void 0 === f.PercentLoaded && e.trigger("flashdisabled", [e])
                                }, 15e3)), h.push(setTimeout(function() {
                                    void 0 === f.PercentLoaded && e.trigger("flashdisabled", [e, !1])
                                }, 500)), e.off("resume.flashhack").on("resume.flashhack", function() {
                                    var t = setTimeout(function() {
                                        var t = f.__status().time,
                                            n = setTimeout(function() {
                                                e.playing && !e.loading && f.__status().time === t && e.trigger("flashdisabled", [e])
                                            }, 400);
                                        h.push(n), e.one("seek.flashhack pause.flashhack load.flashack", function() {
                                            clearTimeout(n)
                                        })
                                    }, 800);
                                    h.push(t), e.one("progress", function() {
                                        clearTimeout(t)
                                    })
                                }), f.pollInterval = setInterval(function() {
                                    if (f && !d) {
                                        var t = f.__status ? f.__status() : null;
                                        t && ((e.conf.live || e.live || i.live) && (i.seekOffset = t.seekOffset, i.duration = t.duration + t.seekOffset), e.playing && t.time && t.time !== e.video.time && e.trigger("progress", [e, t.time]), i.buffer = t.buffer / i.bytes * i.duration, e.trigger("buffer", [e, i.buffer]), !i.buffered && t.time > 0 && (i.buffered = !0, e.trigger("buffered", [e])))
                                    }
                                }, 250), window[c] = function(i, r) {
                                    var o = n;
                                    p.debug && (0 === i.indexOf("debug") && r && r.length ? console.log.apply(console, ["-- " + i].concat(r)) : console.log("--", i, r));
                                    var a = {
                                        type: i
                                    };
                                    switch (i) {
                                        case "ready":
                                            r = s(o, r);
                                            break;
                                        case "click":
                                            a.flash = !0;
                                            break;
                                        case "keydown":
                                            a.which = r;
                                            break;
                                        case "seek":
                                            o.time = r;
                                            break;
                                        case "status":
                                            e.trigger("progress", [e, r.time]), r.buffer < o.bytes && !o.buffered ? (o.buffer = r.buffer / o.bytes * o.duration, e.trigger("buffer", o.buffer)) : o.buffered || (o.buffered = !0, e.trigger("buffered"));
                                            break;
                                        case "metadata":
                                            var u = atob(r);
                                            r = {
                                                key: u.substr(10, 4),
                                                data: u.substr(21)
                                            }
                                    }
                                    "click" === i || "keydown" === i ? (a.target = t, l.fire(t, i, [a])) : "buffered" != i && "unload" !== i ? setTimeout(function() {
                                        e.trigger(a, [e, r])
                                    }, 1) : "unload" === i && e.trigger(a, [e, r])
                                }
                            }
                        },
                        speed: o.noop,
                        unload: function() {
                            f && f.__unload && f.__unload();
                            try {
                                c && window[c] && delete window[c]
                            } catch (e) {}
                            o.find("object", t).forEach(o.removeNode), f = 0, e.off(".flashengine"), e.off(".flashhack"), clearInterval(f.pollInterval), h.forEach(function(e) {
                                clearTimeout(e)
                            })
                        }
                    };

                function m(e) {
                    return /application\/x-mpegurl/i.test(e.type)
                }
                return ["pause", "resume", "seek", "volume"].forEach(function(t) {
                    g[t] = function(n) {
                        try {
                            e.ready && (void 0 === n ? f["__" + t]() : f["__" + t](n))
                        } catch (n) {
                            if (void 0 === f["__" + t]) return e.trigger("flashdisabled", [e]);
                            throw n
                        }
                    }
                }), g
            }).engineName = "flash", i.canPlay = function(e, t) {
                return r.support.flashVideo && /video\/(mp4|flash|flv)/i.test(e) || r.support.flashVideo && t.swfHls && /mpegurl/i.test(e)
            }, r.engines.push(i)
        }, {
            "../common": 1,
            "../flowplayer": 31,
            "./embed": 2,
            bean: 34,
            "extend-object": 39
        }],
        4: [function(e, t, n) {
            "use strict";
            var i, r = e("../flowplayer"),
                o = r.support,
                a = r.common,
                s = r.bean,
                l = e("./html5-factory");

            function u(e) {
                return void 0 !== window.Hls && (/mpegurl/.test(e) && window.Hls.isSupported())
            }(i = function(e, t) {
                var n, o, c, f = window.Hls;
                return l("hlsjs-lite", e, t, u, function(l, u, d) {
                    var p, h, g = r.extend({
                        recoverMediaError: !0
                    }, e.conf.hlsjs, l.hlsjs);
                    n = i.hls = new f(g), i.extensions.forEach(function(i) {
                        i({
                            hls: n,
                            player: e,
                            root: t,
                            videoTag: u
                        })
                    }), n.loadSource(l.src), d.resume = function() {
                        e.live && !e.dvr && (u.currentTime = n.liveSyncPosition || 0), u.play()
                    }, d.seek = function(t) {
                        try {
                            e.live && !e.dvr ? u.currentTime = Math.min(t, n.liveSyncPosition) : u.currentTime = t
                        } catch (n) {
                            e.debug("Failed to seek to ", t, n)
                        }
                    }, e.on("quality", function(e, t, i) {
                        n.nextLevel = o = i
                    });
                    var m = function(i) {
                        if (e.debug("hlsjs - recovery"), a.removeClass(t, "is-paused"), a.addClass(t, "is-seeking"), s.one(u, "seeked", function() {
                                u.paused && (a.removeClass(t, "is-poster"), e.poster = !1, u.play()), a.removeClass(t, "is-seeking")
                            }), i) return n.startLoad();
                        var r = performance.now();
                        !p || r - p > 3e3 ? (p = performance.now(), n.recoverMediaError()) : (!h || r - h > 3e3) && (h = performance.now(), n.swapAudioCodec(), n.recoverMediaError())
                    };
                    return n.on(f.Events.MANIFEST_PARSED, function(t, i) {
                        var r, s = l.hlsQualities || e.conf.hlsQualities,
                            d = {},
                            p = i.levels;
                        if (!1 === s) return n.attachMedia(u);
                        if ("drive" === s) switch (p.length) {
                            case 4:
                                r = [1, 2, 3];
                                break;
                            case 5:
                                r = [1, 2, 3, 4];
                                break;
                            case 6:
                                r = [1, 3, 4, 5];
                                break;
                            case 7:
                                r = [1, 3, 5, 6];
                                break;
                            case 8:
                                r = [1, 3, 6, 7];
                                break;
                            default:
                                r = p.length < 3 || p[0].height && p[2].height && p[0].height === p[2].height ? [] : [1, 2]
                        }
                        l.qualities = [{
                            value: -1,
                            label: "Auto"
                        }], Array.isArray(s) && (l.qualities = [], r = s.map(function(e) {
                            return void 0 !== e.level && (d[e.level] = e.label), void 0 !== e.level ? e.level : e
                        }));
                        var h = -2;
                        l.qualities = l.qualities.concat(p.map(function(e, t) {
                            if (r && -1 === r.indexOf(t)) return !1;
                            var n = d[t] || Math.min(e.width, e.height) + "p";
                            return d[t] || "drive" === s || (n += " (" + Math.round(e.bitrate / 1e3) + "k)"), t === o && (h = t), {
                                value: t,
                                label: n
                            }
                        })).filter(a.identity);
                        var v = l.quality = -2 === h ? l.qualities[0].value || -1 : h;
                        v !== n.currentLevel && (n.currentLevel = v), n.on(f.Events.ERROR, function(t, i) {
                            if (i.fatal)
                                if (g.recoverNetworkError && i.type === f.ErrorTypes.NETWORK_ERROR) m(!0);
                                else if (g.recoverMediaError && i.type === f.ErrorTypes.MEDIA_ERROR) m(!1);
                            else {
                                var r = 5;
                                i.type === f.ErrorTypes.NETWORK_ERROR && (r = 2), i.type === f.ErrorTypes.MEDIA_ERROR && (r = 3), n.destroy(), e.trigger("error", [e, {
                                    code: r
                                }])
                            }
                        }), n.attachMedia(u), c && l.src !== c && u.play(), c = l.src
                    }), {
                        handlers: {
                            error: function(e, t) {
                                var n = t.error && t.error.code;
                                return g.recoverMediaError && 3 === n || !n ? (e.preventDefault(), m(!1), !0) : g.recoverNetworkError && 2 === n ? (e.preventDefault(), m(!0), !0) : void 0
                            }
                        }
                    }
                })
            }).canPlay = function(e, t) {
                return !(o.browser.safari && !(t.clip && t.clip.hlsjs || t.hlsjs || {}).safari) && (r.support.video && u(e))
            }, i.engineName = "hlsjs-lite", i.plugin = function(e) {
                i.extensions.push(e)
            }, i.extensions = [], r.engines.push(i)
        }, {
            "../flowplayer": 31,
            "./html5-factory": 5
        }],
        5: [function(e, t, n) {
            var i = e("../flowplayer"),
                r = i.common,
                o = i.support,
                a = i.bean,
                s = i.extend,
                l = o.browser.safari && !o.iOS,
                u = {
                    ended: "finish",
                    pause: "pause",
                    play: "resume",
                    timeupdate: "progress",
                    volumechange: "volume",
                    ratechange: "speed",
                    seeked: "seek",
                    loadedmetadata: l ? 0 : "ready",
                    canplaythrough: l ? "ready" : 0,
                    durationchange: "ready",
                    error: "error",
                    dataunavailable: "error",
                    webkitendfullscreen: !i.support.inlineVideo && "unload",
                    progress: "buffer"
                };

            function c(e, t) {
                return t = t || 100, Math.round(e * t) / t
            }
            t.exports = function(e, t, n, i, l) {
                var f, d, p, h = r.findDirect("video", n)[0] || r.find(".fp-player > video", n)[0],
                    g = t.conf;
                return p = {
                    engineName: e,
                    pick: function(e) {
                        var t = o.video && e.filter(function(e) {
                            return i(e.type)
                        })[0];
                        if (t) return "string" == typeof t.src && (t.src = r.createAbsoluteUrl(t.src)), t
                    },
                    load: function(e) {
                        var f = r.find(".fp-player", n)[0],
                            m = !1;
                        if (h || (h = document.createElement("video"), r.prepend(f, h), h.autoplay = !!g.splash, m = !0), r.addClass(h, "fp-engine"), r.find("track", h).forEach(r.removeNode), h.preload = "none", g.nativesubtitles || r.attr(h, "crossorigin", !1), g.disableInline || (h.setAttribute("webkit-playsinline", "true"), h.setAttribute("playsinline", "true")), o.inlineVideo || r.css(h, {
                                position: "absolute",
                                top: "-9999em"
                            }), o.subtitles && g.nativesubtitles && e.subtitles && e.subtitles.length) {
                            r.addClass(h, "native-subtitles");
                            var v = e.subtitles,
                                y = function(e) {
                                    var t = h.textTracks;
                                    t.length && (t[0].mode = e)
                                };
                            v.some(function(e) {
                                return !r.isSameDomain(e.src)
                            }) && r.attr(h, "crossorigin", "anonymous"), "function" == typeof h.textTracks.addEventListener && h.textTracks.addEventListener("addtrack", function() {
                                y("disabled"), y("showing")
                            }), v.forEach(function(e) {
                                h.appendChild(r.createElement("track", {
                                    kind: "subtitles",
                                    srclang: e.srclang || "en",
                                    label: e.label || "en",
                                    src: e.src,
                                    default: e.default
                                }))
                            })
                        }
                        a.off(h, "timeupdate", r.noop), a.on(h, "timeupdate", r.noop), r.prop(h, "loop", !1), t.off(".loophack"), (e.loop || g.loop) && t.on("finish.loophack", function() {
                            t.resume()
                        }), void 0 !== d && (h.volume = d);
                        var w = l(e, h, p);
                        if (g.autoplay || g.splash || e.autoplay) {
                            t.debug("Autoplay / Splash setup, try to start video");
                            try {
                                o.preloadMetadata || h.load();
                                var b = h.play();
                                if (b && b.catch) {
                                    var I = function(e) {
                                        if ("AbortError" === e.name && 20 === e.code) return m ? void 0 : h.play().catch(I);
                                        if (!g.mutedAutoplay) throw new Error("Unable to autoplay");
                                        return t.debug("Play errored, trying muted", e), t.mute(!0, !0), h.play()
                                    };
                                    b.catch(I).catch(function() {
                                        g.autoplay = !1, t.mute(!1, !0), t.trigger("stop", [t])
                                    })
                                }
                            } catch (e) {
                                t.debug("play() error thrown", e)
                            }
                        }
                        if (p._listeners = function(e, l, f, d) {
                                var p = n.getAttribute("data-flowplayer-instance-id");
                                if (!e.listeners || !e.listeners.hasOwnProperty(p)) {
                                    (e.listeners || (e.listeners = {}))[p] = f, a.on(l, "error", function(n) {
                                        try {
                                            i(n.target.getAttribute("type")) && t.trigger("error", [t, {
                                                code: 4,
                                                video: s(f, {
                                                    src: e.src,
                                                    url: e.src
                                                })
                                            }])
                                        } catch (e) {}
                                    }), t.on("shutdown", function() {
                                        a.off(l), a.off(e, ".dvrhack"), t.off(".loophack")
                                    });
                                    var h = {},
                                        g = function(e) {
                                            "metadata" === e.kind && (e.mode = "hidden", e.addEventListener("cuechange", function() {
                                                e.activeCues.length && t.trigger("metadata", [t, e.activeCues[0].value])
                                            }, !1))
                                        };
                                    return e && e.textTracks && e.textTracks.length && Array.prototype.forEach.call(e.textTracks, g), e && e.textTracks && "function" == typeof e.textTracks.addEventListener && e.textTracks.addEventListener("addtrack", function(e) {
                                        g(e.track)
                                    }, !1), (t.conf.dvr || t.dvr || f.dvr) && a.on(e, "progress.dvrhack", function() {
                                        e.seekable.length && (t.video.duration = e.seekable.end(null), t.video.seekOffset = e.seekable.start(null), t.trigger("dvrwindow", [t, {
                                            start: e.seekable.start(null),
                                            end: e.seekable.end(null)
                                        }]), e.currentTime >= e.seekable.start(null) || (e.currentTime = e.seekable.start(null)))
                                    }), Object.keys(u).forEach(function(i) {
                                        var a = u[i];
                                        if ("webkitendfullscreen" === i && t.conf.disableInline && (a = "unload"), a) {
                                            var l = function(l) {
                                                if (f = e.listeners[p], l.target && r.hasClass(l.target, "fp-engine")) {
                                                    /progress/.test(a) || t.debug(i, "->", a, l);
                                                    var u, h = function(e) {
                                                        t.trigger(e || a, [t, u])
                                                    };
                                                    if ((t.ready || /ready|error/.test(a)) && a && r.find("video", n).length)
                                                        if ("unload" !== a) {
                                                            switch (a) {
                                                                case "ready":
                                                                    if (t.ready) return t.debug("Player already ready, not sending duplicate ready event");
                                                                    if (!(e.duration && e.duration !== 1 / 0 || t.live)) return t.debug("No duration and VOD setup, not sending ready event");
                                                                    if ((u = s(f, {
                                                                            duration: e.duration < Number.MAX_VALUE ? e.duration : 0,
                                                                            width: e.videoWidth,
                                                                            height: e.videoHeight,
                                                                            url: e.currentSrc
                                                                        })).seekable = u.duration, t.debug("Ready: ", u), !t.live && !u.duration && !o.hlsDuration && "loadeddata" === i) {
                                                                        var g = function() {
                                                                            u.duration = e.duration;
                                                                            try {
                                                                                u.seekable = e.seekable && e.seekable.end(null)
                                                                            } catch (e) {}
                                                                            h(), e.removeEventListener("durationchange", g), r.toggleClass(n, "is-live", !1)
                                                                        };
                                                                        e.addEventListener("durationchange", g);
                                                                        var m = function() {
                                                                            t.ready || e.duration || (u.duration = 0, r.addClass(n, "is-live"), h()), e.removeEventListener("timeupdate", m)
                                                                        };
                                                                        return void e.addEventListener("timeupdate", m)
                                                                    }
                                                                    break;
                                                                case "progress":
                                                                case "seek":
                                                                    if (e.currentTime > 0 || t.live) u = Math.max(e.currentTime, 0);
                                                                    else if ("seek" === a && 0 === e.currentTime) u = 0;
                                                                    else if ("progress" == a) return;
                                                                    break;
                                                                case "buffer":
                                                                    u = [];
                                                                    for (var v = 0; v < e.buffered.length; v++) u.push({
                                                                        start: e.buffered.start(v),
                                                                        end: e.buffered.end(v)
                                                                    });
                                                                    e.buffered.length && e.buffered.end(null) === e.duration && h("buffered");
                                                                    break;
                                                                case "speed":
                                                                    u = c(e.playbackRate);
                                                                    break;
                                                                case "volume":
                                                                    u = c(e.muted ? 0 : e.volume);
                                                                    break;
                                                                case "error":
                                                                    try {
                                                                        if (d && d.handlers && d.handlers.error && d.handlers.error(l, e)) return;
                                                                        (u = (l.srcElement || l.originalTarget).error).video = s(f, {
                                                                            src: e.src,
                                                                            url: e.src
                                                                        })
                                                                    } catch (e) {
                                                                        return
                                                                    }
                                                            }
                                                            h()
                                                        } else t.unload();
                                                    else "resume" === a && t.one("ready", function() {
                                                        setTimeout(function() {
                                                            h()
                                                        })
                                                    })
                                                }
                                            };
                                            n.addEventListener(i, l, !0), h[i] || (h[i] = []), h[i].push(l)
                                        }
                                    }), h
                                }
                                e.listeners[p] = f
                            }(h, r.find("source", h).concat(h), e, w) || p._listeners, !(g.autoplay || g.splash || e.autoplay)) {
                            var M = function() {
                                var e;
                                (e = n.getBoundingClientRect()).top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) + e.height && e.right <= (window.innerWidth || document.documentElement.clientWidth) + e.width && (t.debug("player is in viewport, preload"), o.preloadMetadata ? h.preload = "metadata" : h.load(), a.off(document, "scroll.preloadviewport"))
                            };
                            a.off(document, "scroll.preloadviewport"), a.on(document, "scroll.preloadviewport", function() {
                                window.requestAnimationFrame(M)
                            }), M()
                        }
                    },
                    mute: function(e) {
                        h.muted = !!e, t.trigger("mute", [t, e]), t.trigger("volume", [t, e ? 0 : h.volume])
                    },
                    pause: function() {
                        h.pause()
                    },
                    resume: function() {
                        h.play()
                    },
                    speed: function(e) {
                        h.playbackRate = e
                    },
                    seek: function(e) {
                        var n = h.paused || t.finished;
                        try {
                            h.currentTime = e, n && a.one(h, "seeked", function() {
                                h.pause()
                            })
                        } catch (e) {}
                    },
                    volume: function(e) {
                        d = e, h && (h.volume = e, e && p.mute(!1))
                    },
                    unload: function() {
                        a.off(document, "scroll.preloadviewport"), r.find("video.fp-engine", n).forEach(function(e) {
                            "MediaSource" in window ? e.src = URL.createObjectURL(new MediaSource) : e.src = "", r.removeNode(e)
                        }), f = clearInterval(f);
                        var e = n.getAttribute("data-flowplayer-instance-id");
                        delete h.listeners[e], h = 0, p._listeners && Object.keys(p._listeners).forEach(function(e) {
                            p._listeners[e].forEach(function(t) {
                                n.removeEventListener(e, t, !0)
                            })
                        })
                    }
                }
            }
        }, {
            "../flowplayer": 31
        }],
        6: [function(e, t, n) {
            "use strict";
            var i, r = e("../flowplayer"),
                o = r.common,
                a = e("./html5-factory"),
                s = document.createElement("video");

            function l(e) {
                var t;
                return /^(video|application)/i.test(e) || (e = /mpegurl/i.test(t = e) ? "application/x-mpegurl" : t), !!s.canPlayType(e).replace("no", "")
            }(i = function(e, t) {
                return a("html5", e, t, l, function(e, t) {
                    t.currentSrc !== e.src ? (o.find("source", t).forEach(o.removeNode), t.src = e.src, t.type = e.type) : e.autoplay && t.load()
                })
            }).canPlay = function(e) {
                return r.support.video && l(e)
            }, i.engineName = "html5", r.engines.push(i)
        }, {
            "../flowplayer": 31,
            "./html5-factory": 5
        }],
        7: [function(e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("bean");
            i(function(e, t) {
                e.on("ready", function() {
                    var e = r.find("video.fp-engine", t)[0];
                    e && (e.setAttribute("x-webkit-airplay", "allow"), window.WebKitPlaybackTargetAvailabilityEvent && (e.addEventListener("webkitplaybacktargetavailabilitychanged", function(e) {
                        if ("available" === e.availability) {
                            var n = r.find(".fp-header", t)[0];
                            r.find(".fp-airplay", n).forEach(r.removeNode);
                            var i = r.createElement("a", {
                                class: "fp-airplay fp-icon",
                                title: "Play on AirPlay device"
                            });
                            n.insertBefore(i, r.find(".fp-fullscreen", n)[0])
                        }
                    }), e.addEventListener("webkitcurrentplaybacktargetiswirelesschanged", function() {
                        var n = r.find(".fp-airplay", t)[0];
                        n && r.toggleClass(n, "fp-active", e.webkitCurrentPlaybackTargetIsWireless)
                    })))
                }), o.on(t, "click", ".fp-airplay", function(e) {
                    e.preventDefault(), r.find("video.fp-engine", t)[0].webkitShowPlaybackTargetPicker()
                })
            })
        }, {
            "../common": 1,
            "../flowplayer": 31,
            bean: 34
        }],
        8: [function(e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
                r = e("./resolve").TYPE_RE,
                o = e("scriptjs"),
                a = e("bean");
            i(function(e, t) {
                var n, i = e.conf.analytics,
                    s = 0,
                    l = 0;
                if (i) {
                    "undefined" == typeof _gat && o("//google-analytics.com/ga.js");
                    var u = function() {
                            var e = _gat._getTracker(i);
                            return e._setAllowLinker(!0), e
                        },
                        c = function(i, o, a) {
                            (a = a || e.video, s && "undefined" != typeof _gat) && (u()._trackEvent("Video / Seconds played", e.engine.engineName + "/" + a.type, a.title || t.getAttribute("title") || a.src.split("/").slice(-1)[0].replace(r, ""), Math.round(s / 1e3)), s = 0, n && (clearTimeout(n), n = null))
                        };
                    e.bind("load unload", c).bind("progress", function() {
                        e.seeking || (s += l ? +new Date - l : 0, l = +new Date), n || (n = setTimeout(function() {
                            n = null, u()._trackEvent("Flowplayer heartbeat", "Heartbeat", "", 0, !0)
                        }, 6e5))
                    }).bind("pause", function() {
                        l = 0
                    }), e.bind("shutdown", function() {
                        a.off(window, "unload", c)
                    }), a.on(window, "unload", c)
                }
            })
        }, {
            "../flowplayer": 31,
            "./resolve": 21,
            bean: 34,
            scriptjs: 45
        }],
        9: [function(e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("bean"),
                a = e("scriptjs");
            i(function(e, t) {
                if (!1 !== e.conf.chromecast) {
                    a("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"), window.__onGCastApiAvailable = function(e) {
                        var t, n, i;
                        e && (t = l.applicationId || chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID, n = new chrome.cast.SessionRequest(t), i = new chrome.cast.ApiConfig(n, u, c), chrome.cast.initialize(i, f, d))
                    };
                    var n, i, s, l = e.conf.chromecast || {};
                    o.on(t, "click", ".fp-chromecast", function(o) {
                        if (o.preventDefault(), n) return e.trigger("pause", [e]), n.stop(), n = null, void p();
                        e.playing && e.pause(), chrome.cast.requestSession(function(o) {
                            var a = (n = o).receiver.friendlyName;
                            r.html(r.find(".fp-chromecast-engine-status")[0], "Playing on device " + a);
                            var l = new chrome.cast.media.MediaInfo(e.video.src),
                                u = new chrome.cast.media.LoadRequest(l);
                            n.loadMedia(u, function(o) {
                                o.addUpdateListener(function(a) {
                                    if (n) {
                                        i = i || setInterval(function() {
                                            e.trigger("progress", [e, o.getEstimatedTime()])
                                        }, 500), a ? (r.toggleClass(t, "is-chromecast", !0), r.toggleClass(s, "fp-active", !0), e.hijack({
                                            pause: function() {
                                                o.pause()
                                            },
                                            resume: function() {
                                                o.play()
                                            },
                                            seek: function(e) {
                                                var t = new chrome.cast.media.SeekRequest;
                                                t.currentTime = e, o.seek(t)
                                            }
                                        })) : (p(), e.trigger("finish", [e]));
                                        var l = o.playerState;
                                        e.paused && l === chrome.cast.media.PlayerState.PLAYING && e.trigger("resume", [e]), e.playing && l === chrome.cast.media.PlayerState.PAUSED && e.trigger("pause", [e]), r.toggleClass(t, "is-loading", l === chrome.cast.media.PlayerState.BUFFERING)
                                    }
                                })
                            }, function() {})
                        }, function(e) {
                            console.error("requestSession error", e)
                        })
                    })
                }

                function u() {
                    console.log("sessionListener")
                }

                function c(e) {
                    e === chrome.cast.ReceiverAvailability.AVAILABLE && function() {
                        var e = r.find(".fp-header", t)[0];
                        if (!e) return;
                        r.find(".fp-chromecast", e).forEach(r.removeNode), r.find(".fp-chromecast-engine", t).forEach(r.removeNode), s = r.createElement("a", {
                            class: "fp-chromecast fp-icon",
                            title: "Play on Cast device"
                        }), e.insertBefore(s, r.find(".fp-fullscreen", e)[0]);
                        var n = r.createElement("div", {
                                class: "fp-chromecast-engine"
                            }),
                            i = r.createElement("p", {
                                class: "fp-chromecast-engine-status"
                            }),
                            o = r.createElement("p", {
                                class: "fp-chromecast-engine-icon"
                            });
                        n.appendChild(o), n.appendChild(i);
                        var a = r.find(".fp-engine", t)[0];
                        a ? a.parentNode.insertBefore(n, a) : r.prepend(r.find(".fp-player", t)[0] || t, n)
                    }()
                }

                function f() {}

                function d() {
                    console.log("onError")
                }

                function p() {
                    clearInterval(i), i = null, e.release(), r.toggleClass(t, "is-chromecast", !1), r.toggleClass(s, "fp-active", !1)
                }
            })
        }, {
            "../common": 1,
            "../flowplayer": 31,
            bean: 34,
            scriptjs: 45
        }],
        10: [function(e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("bean");
            i(function(e, t) {
                var n = / ?cue\d+ ?/,
                    i = !1;

                function a(e) {
                    t.className = t.className.replace(n, " "), e >= 0 && r.addClass(t, "cue" + e)
                }
                var s = {},
                    l = -.125,
                    u = function(t) {
                        a(t.index), e.trigger("cuepoint", [e, t])
                    };

                function c(t) {
                    var n = t && !isNaN(t.time) ? t.time : t;
                    return n < 0 && (n = e.video.duration + n), .125 * Math.round(n / .125)
                }
                e.on("progress", function(e, t, n) {
                    if (!i)
                        for (var r = c(n); l < r;) s[l += .125] && s[l].forEach(u)
                }).on("unload", a).on("beforeseek", function(e) {
                    setTimeout(function() {
                        e.defaultPrevented || (i = !0)
                    })
                }).on("seek", function(e, t, n) {
                    a(), l = c(n || 0) - .125, i = !1, !n && s[0] && s[0].forEach(u)
                }).on("ready", function(t, n, i) {
                    l = -.125;
                    var r = i.cuepoints || e.conf.cuepoints || [];
                    e.setCuepoints(r)
                }).on("finish", function() {
                    for (var t = c(e.video.duration); l < t;) s[l += .125] && s[l].forEach(u);
                    l = -.125
                }), e.conf.generate_cuepoints && e.bind("load", function() {
                    r.find(".fp-cuepoint", t).forEach(r.removeNode)
                }), e.setCuepoints = function(t) {
                    return e.cuepoints = [], s = {}, t.forEach(e.addCuepoint), e
                }, e.addCuepoint = function(n) {
                    e.cuepoints || (e.cuepoints = []), "number" == typeof n && (n = {
                        time: n
                    }), n.index = 0;
                    var i = c(n);
                    if (s[i] || (s[i] = []), s[i].push(n), e.cuepoints.length && (n.index = Math.max.apply(null, e.cuepoints.map(function(e) {
                            return e.index
                        })) + 1), e.cuepoints.push(n), e.conf.generate_cuepoints && !1 !== n.visible) {
                        var a = e.video.duration,
                            l = r.find(".fp-timeline", t)[0];
                        r.css(l, "overflow", "visible");
                        var u = n.time || n;
                        u < 0 && (u = a + u);
                        var f = r.createElement("a", {
                            className: "fp-cuepoint fp-cuepoint" + n.index
                        });
                        r.css(f, "left", u / a * 100 + "%"), l.appendChild(f), o.on(f, "mousedown", function(t) {
                            t.preventDefault(), t.stopPropagation(), e.seek(u)
                        })
                    }
                    return e
                }, e.removeCuepoint = function(n) {
                    "number" == typeof n && (n = e.cuepoints.filter(function(e) {
                        return e.index === n
                    })[0]);
                    var i = e.cuepoints.indexOf(n),
                        o = c(n);
                    if (-1 !== i) {
                        e.cuepoints = e.cuepoints.slice(0, i).concat(e.cuepoints.slice(i + 1));
                        var a = r.find(".fp-timeline", t)[0];
                        r.find(".fp-cuepoint" + n.index, a).forEach(r.removeNode);
                        var l = s[o].indexOf(n);
                        if (-1 !== l) return s[o] = s[o].slice(0, l).concat(s[o].slice(l + 1)), e
                    }
                }
            })
        }, {
            "../common": 1,
            "../flowplayer": 31,
            bean: 34
        }],
        11: [function(e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
                r = e("bean"),
                o = e("../common"),
                a = e("./util/clipboard");
            i(function(e, t) {
                if (!1 !== e.conf.embed && !1 !== e.conf.share) {
                    var n = o.find(".fp-share-menu", t)[0],
                        i = o.createElement("a", {
                            class: "fp-icon fp-embed",
                            title: "Copy to your site"
                        }, "Embed");
                    o.append(n, i), e.embedCode = function() {
                        var n = e.conf.embed || {},
                            i = e.video,
                            r = n.width || i.width || o.width(t),
                            a = n.height || i.height || o.height(t),
                            s = e.conf.ratio,
                            l = '<iframe src="' + e.shareUrl(!0) + '" allowfullscreen style="border:none;';
                        return n.width || n.height ? (isNaN(r) || (r += "px"), isNaN(a) || (a += "px"), l + "width:" + r + ";height:" + a + ';"></iframe>') : (s && !e.conf.adaptiveRatio || (s = a / r), '<div style="position:relative;width:100%;display:inline-block;">' + l + 'position:absolute;top:0;left:0;width:100%;height:100%;"></iframe><div style="padding-top:' + 100 * s + '%;"></div></div>')
                    }, r.on(t, "click", ".fp-embed", function() {
                        a(e.embedCode(), function() {
                            e.message("The embed code is now on your clipboard", 2e3)
                        }, function() {
                            e.textarea(e.embedCode(), "Copy the code below to embed your video")
                        })
                    })
                }
            })
        }, {
            "../common": 1,
            "../flowplayer": 31,
            "./util/clipboard": 30,
            bean: 34
        }],
        12: [function(e, t, n) {
            "use strict";
            t.exports = function(e, t) {
                t || (t = document.createElement("div"));
                var n = {},
                    i = {},
                    r = function(e, r, o) {
                        var a = e.split(".")[0],
                            s = function(l) {
                                o && (t.removeEventListener(a, s), n[e].splice(n[e].indexOf(s), 1));
                                var u = [l].concat(i[l.timeStamp + l.type] || []);
                                r && r.apply(void 0, u)
                            };
                        t.addEventListener(a, s), n[e] || (n[e] = []), n[e].push(s)
                    };
                e.on = e.bind = function(t, n) {
                    return t.split(" ").forEach(function(e) {
                        r(e, n)
                    }), e
                }, e.one = function(t, n) {
                    return t.split(" ").forEach(function(e) {
                        r(e, n, !0)
                    }), e
                };
                e.off = e.unbind = function(i) {
                    return i.split(" ").forEach(function(e) {
                        var i = e.split(".").slice(1),
                            r = e.split(".")[0];
                        Object.keys(n).filter(function(e) {
                            var t, n = e.split(".").slice(1);
                            return (!r || 0 === e.indexOf(r)) && (t = n, 0 === i.filter(function(e) {
                                return -1 === t.indexOf(e)
                            }).length)
                        }).forEach(function(e) {
                            var i = n[e],
                                r = e.split(".")[0];
                            n[e] = i.filter(function(e) {
                                return t.removeEventListener(r, e), !1
                            })
                        })
                    }), e
                }, e.trigger = function(n, r, o) {
                    if (n) {
                        r = (r || []).length ? r || [] : [r];
                        var a, s = document.createEvent("Event");
                        return a = n.type || n, s.initEvent(a, !1, !0), Object.defineProperty && (s.preventDefault = function() {
                            Object.defineProperty(this, "defaultPrevented", {
                                get: function() {
                                    return !0
                                }
                            })
                        }), i[s.timeStamp + s.type] = r, t.dispatchEvent(s), o ? s : e
                    }
                }
            }, t.exports.EVENTS = ["beforeseek", "disable", "error", "finish", "fullscreen", "fullscreen-exit", "load", "mute", "pause", "progress", "ready", "resume", "seek", "speed", "stop", "unload", "volume", "boot", "shutdown"]
        }, {}],
        13: [function(e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("bean");
            i(function(e, t) {
                var n = e.conf;
                if (!1 !== n.share && n.facebook) {
                    e.facebook = function() {
                        var e, t, i = screen.height,
                            r = screen.width,
                            o = "string" == typeof n.facebook ? n.facebook : window.location.toString();
                        e = Math.round(r / 2 - 275), t = 0, i > 420 && (t = Math.round(i / 2 - 210)), window.open("https://www.facebook.com/sharer.php?s=100&p[url]=" + encodeURIComponent(o), "sharer", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left=" + e + ",top=" + t)
                    };
                    var i = r.find(".fp-share-menu", t)[0],
                        a = r.createElement("a", {
                            class: "fp-icon fp-facebook"
                        }, "Facebook");
                    r.append(i, a), o.on(t, "click", ".fp-facebook", function() {
                        e.facebook()
                    })
                }
            })
        }, {
            "../common": 1,
            "../flowplayer": 31,
            bean: 34
        }],
        14: [function(e, t, n) {
            "use strict";
            var i, r = e("../flowplayer"),
                o = e("bean"),
                a = e("../common"),
                s = "fullscreen",
                l = "fullscreen-exit",
                u = r.support.fullscreen;
            o.on(document, "fullscreenchange.ffscr webkitfullscreenchange.ffscr mozfullscreenchange.ffscr MSFullscreenChange.ffscr", function(e) {
                var t = document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.fullscreenElement || document.msFullscreenElement || e.target;
                if (i || t.parentNode && t.parentNode.getAttribute("data-flowplayer-instance-id")) {
                    var n = i || r(t.parentNode);
                    t && !i ? i = n.trigger(s, [n]) : (i.trigger(l, [i]), i = null)
                }
            }), r(function(e, t) {
                var n = a.createElement("div", {
                    className: "fp-player"
                });
                if (Array.prototype.map.call(t.children, a.identity).forEach(function(e) {
                        a.matches(e, ".fp-ratio,script") || n.appendChild(e)
                    }), t.appendChild(n), e.conf.fullscreen) {
                    var r, o, c, f = window;
                    e.isFullscreen = !1, e.fullscreen = function(t) {
                        if (!e.disabled) return void 0 === t && (t = !e.isFullscreen), t && (r = f.scrollY, o = f.scrollX), u ? t ? ["requestFullScreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"].forEach(function(e) {
                            "function" == typeof n[e] && (n[e](Element.ALLOW_KEYBOARD_INPUT), "webkitRequestFullScreen" !== e || document.webkitFullscreenElement || n[e]())
                        }) : ["exitFullscreen", "webkitCancelFullScreen", "mozCancelFullScreen", "msExitFullscreen"].forEach(function(e) {
                            "function" == typeof document[e] && document[e]()
                        }) : e.trigger(t ? s : l, [e]), e
                    }, e.on("mousedown.fs", function() {
                        +new Date - c < 150 && e.ready && e.fullscreen(), c = +new Date
                    }), e.on(s, function() {
                        a.addClass(t, "is-fullscreen"), a.toggleClass(t, "fp-minimal-fullscreen", a.hasClass(t, "fp-minimal")), a.removeClass(t, "fp-minimal"), u || a.css(t, "position", "fixed"), e.isFullscreen = !0
                    }).on(l, function() {
                        var n;
                        a.toggleClass(t, "fp-minimal", a.hasClass(t, "fp-minimal-fullscreen")), a.removeClass(t, "fp-minimal-fullscreen"), u || "html5" !== e.engine || (n = t.css("opacity") || "", a.css(t, "opacity", 0)), u || a.css(t, "position", ""), a.removeClass(t, "is-fullscreen"), u || "html5" !== e.engine || setTimeout(function() {
                            t.css("opacity", n)
                        }), e.isFullscreen = !1, f.scrollTo(o, r)
                    }).on("unload", function() {
                        e.isFullscreen && e.fullscreen()
                    }), e.on("shutdown", function() {
                        i = null, a.removeNode(n)
                    })
                }
            })
        }, {
            "../common": 1,
            "../flowplayer": 31,
            bean: 34
        }],
        15: [function(e, t, n) {
            "use strict";
            var i, r, o = e("../flowplayer"),
                a = e("bean"),
                s = e("../common");
            a.on(document, "keydown.fp", function(e) {
                var t = i,
                    n = e.ctrlKey || e.metaKey || e.altKey,
                    r = e.which,
                    o = t && t.conf;
                if (t && o.keyboard && !t.disabled && !n && t.ready) {
                    if (e.shiftKey) return 39 == r ? t.speed(!0) : 37 == r && t.speed(!1), e.preventDefault();
                    if (r < 58 && r > 47) return e.preventDefault(), t.seekTo(r - 48);
                    (function() {
                        switch (r) {
                            case 38:
                            case 75:
                                return t.volume(t.volumeLevel + .15), !0;
                            case 40:
                            case 74:
                                return t.volume(t.volumeLevel - .15), !0;
                            case 39:
                            case 76:
                                return t.seeking = !0, t.seek(!0), !0;
                            case 37:
                            case 72:
                                return t.seeking = !0, t.seek(!1), !0;
                            case 190:
                                return t.seekTo(), !0;
                            case 32:
                                return t.toggle(), !0;
                            case 70:
                                return o.fullscreen && t.fullscreen(), !0;
                            case 77:
                                return t.mute(), !0;
                            case 81:
                                return t.unload(), !0
                        }
                    })() && e.preventDefault()
                }
            }), o(function(e, t) {
                e.conf.keyboard && (a.on(document, "click", function(n) {
                    if (s.hasParent(n.target, t)) i = e.disabled ? 0 : e;
                    else {
                        if (i !== e) return;
                        i = 0
                    }
                    i && (r = t)
                }), e.bind("shutdown", function() {
                    r == t && (r = null)
                }))
            })
        }, {
            "../common": 1,
            "../flowplayer": 31,
            bean: 34
        }],
        16: [function(e, t, n) {
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("bean");
            i(function(e, t) {
                e.showMenu = function(n, i) {
                    var a = r.find(".fp-ui", t)[0];
                    r.toggleClass(n, "fp-active", !0), setTimeout(function() {
                        o.one(document, "click", function() {
                            e.hideMenu(n)
                        })
                    });
                    var s = i;
                    if (i && i.tagName && (s = {
                            left: r.offset(i).left,
                            rightFallbackOffset: r.width(i),
                            top: r.offset(i).top + r.height(i)
                        }), !s) return r.css(n, "top", "auto");
                    s.rightFallbackOffset = s.rightFallbackOffset || 0;
                    var l = s.top - r.offset(a).top,
                        u = s.left - r.offset(a).left;
                    r.width(n) + u > r.width(a) && (u = u - r.width(n) + s.rightFallbackOffset), r.height(n) + l > r.height(a) && (l -= r.height(n)), r.css(n, {
                        top: l + "px",
                        left: u + "px",
                        right: "auto"
                    })
                }, e.hideMenu = function(e) {
                    r.toggleClass(e, "fp-active", !1), r.css(e, {
                        top: "-9999em"
                    })
                }
            })
        }, {
            "../common": 1,
            "../flowplayer": 31,
            bean: 34
        }],
        17: [function(e, t, n) {
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("bean");
            i(function(e, t) {
                var n = r.find(".fp-header", t)[0],
                    i = r.find(".fp-ui", t)[0];
                e.message = function(e, t) {
                    var o, a, s = (o = e, a = r.createElement("div", {
                            className: "fp-message"
                        }, o), i.insertBefore(a, n), setTimeout(function() {
                            r.toggleClass(a, "fp-shown")
                        }), a),
                        l = function() {
                            r.toggleClass(s, "fp-shown"), setTimeout(function() {
                                var e;
                                e = s, r.removeNode(e)
                            }, 500)
                        };
                    return t && setTimeout(l, t), l
                }, e.textarea = function(e) {
                    var t = document.createElement("textarea");
                    t.value = e, t.className = "fp-textarea", i.appendChild(t), o.on(document, "click.fptextarea", function(e) {
                        if (e.target === t) return t.select();
                        e.stopPropagation(), e.preventDefault(), r.removeNode(t), o.off(document, "click.fptextarea")
                    })
                }
            })
        }, {
            "../common": 1,
            "../flowplayer": 31,
            bean: 34
        }],
        18: [function(e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
                r = /IEMobile/.test(window.navigator.userAgent),
                o = e("../common"),
                a = e("bean"),
                s = e("./ui").format,
                l = i.support,
                u = window.navigator.userAgent;
            (l.touch || r) && i(function(e, t) {
                var n = l.android,
                    i = n && !n.firefox,
                    c = /Silk/.test(u),
                    f = n.version || 0;
                if (i && !r) {
                    if (!/Chrome/.test(u) && f < 4 || n.samsung && f < 5) {
                        var d = e.load;
                        e.load = function() {
                            var n = d.apply(e, arguments);
                            return o.find("video.fp-engine", t)[0].load(), e.trigger("ready", [e, e.video]), n
                        }
                    }
                    var p, h = 0,
                        g = function(e) {
                            p = setInterval(function() {
                                e.video.time = ++h, e.trigger("progress", [e, h])
                            }, 1e3)
                        };
                    e.on("ready pause unload", function() {
                        p && (clearInterval(p), p = null)
                    }), e.on("ready", function() {
                        h = 0
                    }), e.on("resume", function(t, n) {
                        if (n.live) return h ? g(n) : void e.one("progress", function(e, t, n) {
                            0 === n && g(t)
                        })
                    })
                }
                l.volume || (o.removeClass(t, "fp-mute"), o.addClass(t, "no-volume")), l.iOS && o.addClass(t, "fp-mute"), o.addClass(t, "is-touch"), e.sliders && e.sliders.timeline && e.sliders.timeline.disableAnimation();
                var m = !1;
                if (a.on(t, "touchmove", function() {
                        m = !0
                    }), a.on(t, "touchend click", function(n) {
                        if (m) m = !1;
                        else {
                            var i = o.find("video.fp-engine", t)[0];
                            if (e.conf.clickToUnMute && i && i.muted && e.conf.autoplay && (i.muted = !1), e.playing && !o.hasClass(t, "is-mouseover")) return o.addClass(t, "is-mouseover"), o.removeClass(t, "is-mouseout"), n.preventDefault(), void n.stopPropagation();
                            e.playing || e.splash || !o.hasClass(t, "is-mouseout") || o.hasClass(t, "is-mouseover") || setTimeout(function() {
                                e.disabled || e.playing || e.splash || o.find("video.fp-engine", t)[0].play()
                            }, 400)
                        }
                    }), !l.fullscreen && e.conf.native_fullscreen && "function" == typeof o.createElement("video").webkitEnterFullScreen) {
                    var v = e.fullscreen;
                    e.fullscreen = function() {
                        var n = o.find("video.fp-engine", t)[0];
                        if (!n) return v.apply(e);
                        e.trigger("fullscreen", [e]), a.on(document, "webkitfullscreenchange.nativefullscreen", function() {
                            document.webkitFullscreenElement === n && (a.off(document, ".nativefullscreen"), a.on(document, "webkitfullscreenchange.nativefullscreen", function() {
                                document.webkitFullscreenElement || (a.off(document, ".nativefullscreen"), e.trigger("fullscreen-exit", [e]))
                            }))
                        }), n.webkitEnterFullScreen(), a.one(n, "webkitendfullscreen", function() {
                            a.off(document, "fullscreenchange.nativefullscreen"), e.trigger("fullscreen-exit", [e]), o.prop(n, "controls", !0), o.prop(n, "controls", !1)
                        })
                    }
                }(i || c) && e.bind("ready", function() {
                    var n = o.find("video.fp-engine", t)[0];
                    e.conf.splash && n.paused && (a.one(n, "canplay", function() {
                        n.play()
                    }), n.load()), e.bind("progress.dur", function() {
                        if (!e.live && !e.conf.live) {
                            var i = n.duration;
                            1 !== i && (e.video.duration = i, o.find(".fp-duration", t)[0].innerHTML = s(i), e.unbind("progress.dur"))
                        }
                    })
                })
            })
        }, {
            "../common": 1,
            "../flowplayer": 31,
            "./ui": 27,
            bean: 34
        }],
        19: [function(e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
                r = e("extend-object"),
                o = e("bean"),
                a = e("../common"),
                s = e("./resolve"),
                l = new s,
                u = window.jQuery,
                c = /^#/;
            i(function(e, t) {
                var n = r({
                        active: "is-active",
                        advance: !0,
                        query: ".fp-playlist a"
                    }, e.conf),
                    i = n.active,
                    f = a.find(".fp-ui", t)[0],
                    d = a.hasClass(t, "fp-custom-playlist") || !!n.customPlaylist;

                function p() {
                    return a.find(n.query, h())
                }

                function h() {
                    if (!c.test(n.query)) return t
                }

                function g() {
                    return a.find(n.query + "." + i, h())
                }

                function m() {
                    var n = a.find(".fp-playlist", t)[0];
                    if (!n) {
                        n = a.createElement("div", {
                            className: "fp-playlist"
                        });
                        var r = a.find(".fp-next,.fp-prev", t);
                        r.length ? r[0].parentElement.insertBefore(n, r[0]) : a.insertAfter(t, a.find("video", t)[0], n)
                    }
                    n.innerHTML = "", e.conf.playlist[0].length && (e.conf.playlist = e.conf.playlist.map(function(e) {
                        if ("string" == typeof e) {
                            var t = e.split(s.TYPE_RE)[1];
                            return {
                                sources: [{
                                    type: "m3u8" === t.toLowerCase() ? "application/x-mpegurl" : "video/" + t,
                                    src: e
                                }]
                            }
                        }
                        return {
                            sources: e.map(function(e) {
                                var t = {};
                                return Object.keys(e).forEach(function(n) {
                                    t.type = /mpegurl/i.test(n) ? "application/x-mpegurl" : "video/" + n, t.src = e[n]
                                }), t
                            })
                        }
                    })), e.conf.playlist.forEach(function(t, r) {
                        var o = t.sources[0].src;
                        n.appendChild(a.createElement("a", {
                            href: o,
                            className: e.video.index === r ? i : void 0,
                            "data-index": r
                        }))
                    })
                }
                a.toggleClass(t, "fp-custom-playlist", d), a.toggleClass(t, "fp-default-playlist", !d), e.play = function(t) {
                    if (void 0 === t) return e.resume();
                    if ("number" == typeof t && !e.conf.playlist[t]) return e;
                    if ("number" != typeof t) return e.load.apply(null, arguments);
                    var n = r({
                        index: t
                    }, e.conf.playlist[t]);
                    return e.off("beforeresume.fromfirst"), "number" == typeof t && t === e.video.index ? e.seek(0, function() {
                        e.resume()
                    }) : (e.load(n, function() {
                        e.video.index = t
                    }), e)
                }, e.next = function(t) {
                    t && t.preventDefault();
                    var n = e.video.index;
                    return -1 != n && (n = n === e.conf.playlist.length - 1 ? 0 : n + 1, e.play(n)), e
                }, e.prev = function(t) {
                    t && t.preventDefault();
                    var n = e.video.index;
                    return -1 != n && (n = 0 === n ? e.conf.playlist.length - 1 : n - 1, e.play(n)), e
                }, e.setPlaylist = function(t, n) {
                    return e.conf.playlist = t, n || delete e.video.index, m(), e
                }, e.addPlaylistItem = function(t) {
                    return delete e.video.is_last, e.setPlaylist(e.conf.playlist.concat([t]), !0)
                }, e.removePlaylistItem = function(t) {
                    var n = e.conf.playlist;
                    return e.setPlaylist(n.slice(0, t).concat(n.slice(t + 1)))
                }, o.on(t, "click", ".fp-next", e.next), o.on(t, "click", ".fp-prev", e.prev), e.off("finish.pl").on("finish.pl", function(e, i) {
                    if (void 0 === i.conf.advance || i.conf.advance) {
                        if (i.video.loop) return i.seek(0, function() {
                            i.resume()
                        });
                        var r = i.video.index >= 0 ? i.video.index + 1 : void 0;
                        r < i.conf.playlist.length || n.loop ? (r = r === i.conf.playlist.length ? 0 : r, a.removeClass(t, "is-finished"), setTimeout(function() {
                            i.play(r)
                        })) : i.conf.playlist.length > 1 && (i.one("beforeresume.fromfirst", function(e) {
                            e.preventDefault(), i.play(0)
                        }), i.one("seek", function() {
                            i.off("beforeresume.fromfirst")
                        }))
                    }
                });
                var v = !1;
                e.conf.playlist.length && (v = !0, m(), e.conf.clip && e.conf.clip.sources.length || (e.conf.clip = e.conf.playlist[e.conf.startIndex || 0])), p().length && !v && (e.conf.playlist = [], delete e.conf.startIndex, p().forEach(function(t) {
                    var n = t.href;
                    t.setAttribute("data-index", e.conf.playlist.length);
                    var i = l.resolve(n, e.conf.clip.sources);
                    u && r(i, u(t).data()), e.conf.playlist.push(i)
                })), a.find(".fp-prev,.fp-next,.fp-playlist", t).forEach(function(e) {
                    f.appendChild(e)
                }), o.on(c.test(n.query) ? document : t, "click", n.query, function(t) {
                    t.preventDefault();
                    var n = t.currentTarget,
                        i = Number(n.getAttribute("data-index")); - 1 != i && e.play(i)
                }), e.on("load", function(r, o, s) {
                    if (e.conf.playlist.length) {
                        var l, u = g()[0],
                            c = u && u.getAttribute("data-index"),
                            f = s.index = void 0 !== (l = s).index ? l.index : void 0 !== e.video.index ? e.video.index : e.conf.startIndex || 0,
                            d = a.find(n.query + '[data-index="' + f + '"]', h())[0],
                            p = f == e.conf.playlist.length - 1;
                        u && a.removeClass(u, i), d && a.addClass(d, i), a.removeClass(t, "video" + c), a.addClass(t, "video" + f), a.toggleClass(t, "last-video", p), s.index = o.video.index = f, s.is_last = o.video.is_last = p
                    }
                }).on("unload.pl", function() {
                    e.conf.playlist.length && (g().forEach(function(e) {
                        a.toggleClass(e, i)
                    }), e.conf.playlist.forEach(function(e, n) {
                        a.removeClass(t, "video" + n)
                    }))
                }), e.conf.playlist.length && (e.conf.loop = !1)
            })
        }, {
            "../common": 1,
            "../flowplayer": 31,
            "./resolve": 21,
            bean: 34,
            "extend-object": 39
        }],
        20: [function(e, t, n) {
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("bean");
            i(function(e, t) {
                var n = r.find(".fp-ui", t)[0],
                    i = r.find(".fp-controls", n)[0];

                function a(e) {
                    r.find(".fp-qsel-menu a", t).forEach(function(t) {
                        r.toggleClass(t, "fp-selected", t.getAttribute("data-quality") == e), r.toggleClass(t, "fp-color", t.getAttribute("data-quality") == e)
                    })
                }
                o.on(t, "click", ".fp-qsel", function() {
                    var n = r.find(".fp-qsel-menu", t)[0];
                    r.hasClass(n, "fp-active") ? e.hideMenu() : e.showMenu(n)
                }), o.on(t, "click", ".fp-qsel-menu a", function(t) {
                    var n = t.target.getAttribute("data-quality");
                    e.quality(n)
                }), e.quality = function(t) {
                    t = isNaN(Number(t)) ? t : Number(t), e.trigger("quality", [e, t])
                }, e.on("quality", function(e, t, n) {
                    a(n, t.video.qualities)
                }), e.on("ready", function(e, o, s) {
                    r.find(".fp-qsel-menu", t).forEach(r.removeNode), r.find(".fp-qsel", t).forEach(r.removeNode), !s.qualities || s.qualities.filter(function(e) {
                        return void 0 === e.value || e.value > -1
                    }).length < 2 || (! function(e) {
                        i.appendChild(r.createElement("strong", {
                            className: "fp-qsel"
                        }, "HD"));
                        var t = r.createElement("div", {
                            className: "fp-menu fp-qsel-menu"
                        }, "<strong>Quality</strong>");
                        e.forEach(function(e) {
                            var n = document.createElement("a"),
                                i = void 0 !== e.value ? e.value : e;
                            n.setAttribute("data-quality", i), n.innerHTML = e.label || e, t.appendChild(n)
                        }), n.appendChild(t)
                    }(s.qualities, s.quality), a(s.quality, s.qualities))
                })
            })
        }, {
            "../common": 1,
            "../flowplayer": 31,
            bean: 34
        }],
        21: [function(e, t, n) {
            "use strict";
            var i = /\.(\w{3,4})(\?.*)?$/i,
                r = e("extend-object");

            function o(e) {
                var t = e.attr("src"),
                    n = e.attr("type") || "",
                    o = t.split(i)[1];
                return n = n.toLowerCase(), r(e.data(), {
                    src: t,
                    suffix: o || n,
                    type: n || o
                })
            }
            t.exports = function() {
                this.sourcesFromVideoTag = function(e, t) {
                    var n = [];
                    return t("source", e).each(function() {
                        n.push(o(t(this)))
                    }), !n.length && e.length && n.push(o(e)), n
                }, this.resolve = function(e, t) {
                    return e ? ("string" == typeof e && ((e = {
                        src: e,
                        sources: []
                    }).sources = (t || []).map(function(t) {
                        var n = t.src.split(i)[1];
                        return {
                            type: t.type,
                            src: e.src.replace(i, "." + n + "$2")
                        }
                    })), e instanceof Array && (e = {
                        sources: e.map(function(e) {
                            return e.type && e.src ? e : Object.keys(e).reduce(function(t, n) {
                                return r(t, {
                                    type: (i = n, /mpegurl/i.test(i) ? "application/x-mpegurl" : "video/" + i),
                                    src: e[n]
                                });
                                var i
                            }, {})
                        })
                    }), e) : {
                        sources: t
                    }
                }
            }, t.exports.TYPE_RE = i
        }, {
            "extend-object": 39
        }],
        22: [function(e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("extend-object"),
                a = e("bean");
            i(function(e, t) {
                var n = e.conf;
                if (!1 !== n.share) {
                    e.shareUrl = function(t) {
                        return t && n.embed && n.embed.iframe ? n.embed.iframe : "string" == typeof e.conf.share ? e.conf.share : (t ? "https://flowplayer.com/e/" : "https://flowplayer.com/s/") + "?t=" + encodeURIComponent(e.video.title || (r.find("title")[0] || {}).innerHTML || "Flowplayer video") + "&c=" + encodeURIComponent(btoa(JSON.stringify(o({}, e.conf, e.extensions)).replace(/[\u007F-\uFFFF]/g, function(e) {
                            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).substr(-4)
                        }))) + "&r=" + encodeURIComponent(window.location.toString())
                    };
                    var i = r.createElement("div", {
                        className: "fp-menu fp-share-menu"
                    }, "<strong>Share</strong>");
                    r.find(".fp-ui", t)[0].appendChild(i);
                    var s = r.find(".fp-share", t)[0];
                    a.on(t, "click", ".fp-share", function(t) {
                        t.preventDefault(), r.hasClass(i, "fp-active") ? e.hideMenu() : e.showMenu(i, s)
                    })
                } else r.find(".fp-share", t).forEach(r.removeNode)
            })
        }, {
            "../common": 1,
            "../flowplayer": 31,
            bean: 34,
            "extend-object": 39
        }],
        23: [function(e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("bean"),
                a = e("./subtitles/parser");
            i.defaults.subtitleParser = a, i(function(e, t) {
                var n, a, s, l, u;
                (!i.support.inlineVideo || !i.support.fullscreen && e.conf.native_fullscreen) && (e.conf.nativesubtitles = !0), e.ui || (e.ui = {}), e.ui.createSubtitleControl = function(e, n) {
                    return u = n, s = s || r.createElement("strong", {
                        className: "fp-cc"
                    }, "CC"), l = l || r.createElement("div", {
                        className: "fp-menu fp-subtitle-menu"
                    }, "<strong>Closed Captions</strong>"), r.find("a", l).forEach(r.removeNode), l.appendChild(r.createElement("a", {
                        "data-subtitle-index": -1
                    }, "No subtitles")), (e || []).forEach(function(e, t) {
                        var n = e.srclang || "en",
                            i = e.label || "Default (" + n + ")",
                            o = r.createElement("a", {
                                "data-subtitle-index": t
                            }, i);
                        l.appendChild(o)
                    }), r.find(".fp-ui", t)[0].appendChild(l), r.find(".fp-controls", t)[0].appendChild(s), r.toggleClass(s, "fp-hidden", !e || !e.length), s
                }, e.ui.setActiveSubtitleItem = function(e) {
                    c(e)
                }, o.on(t, "click", ".fp-cc", function() {
                    r.hasClass(l, "fp-active") ? e.hideMenu() : e.showMenu(l)
                }), o.on(t, "click", ".fp-subtitle-menu [data-subtitle-index]", function(t) {
                    t.preventDefault();
                    var n = t.target.getAttribute("data-subtitle-index");
                    return u ? u(n) : "-1" === n ? e.disableSubtitles() : void e.loadSubtitles(n)
                });
                e.on("ready", function(n, i, o) {
                    if (i.subtitles = [], a = (a = r.find(".fp-captions", t)[0]) || r.appendTo(r.createElement("div", {
                            class: "fp-captions"
                        }), r.find(".fp-player", t)[0]), Array.prototype.forEach.call(a.children, r.removeNode), e.ui.createSubtitleControl(e.video.subtitles), r.removeClass(t, "has-menu"), e.disableSubtitles(), o.subtitles && o.subtitles.length) {
                        var s = o.subtitles.filter(function(e) {
                            return e.default
                        })[0];
                        s && i.loadSubtitles(o.subtitles.indexOf(s))
                    }
                }), e.showSubtitle = function(e) {
                    r.html(a, e), r.addClass(a, "fp-shown")
                }, e.hideSubtitle = function() {
                    r.removeClass(a, "fp-shown")
                }, e.bind("cuepoint", function(t, i, r) {
                    r.subtitle ? (n = r.index, e.showSubtitle(r.subtitle.text)) : r.subtitleEnd && (e.hideSubtitle(), n = r.index)
                }), e.bind("seek", function(t, i, o) {
                    n && e.cuepoints[n] && e.cuepoints[n].time > o && (r.removeClass(a, "fp-shown"), n = null), (e.cuepoints || []).forEach(function(t, i) {
                        var r = t.subtitle;
                        r && n != i ? o >= t.time && (!r.endTime || o <= r.endTime) && e.trigger("cuepoint", [e, t]) : t.subtitleEnd && o >= t.time && i == n + 1 && e.trigger("cuepoint", [e, t])
                    })
                }), e.on("unload", function() {
                    r.find(".fp-captions", t).forEach(r.removeNode)
                });
                var c = function(e) {
                        r.toggleClass(r.find("a.fp-selected", l)[0], "fp-selected"), r.toggleClass(r.find('a[data-subtitle-index="' + e + '"]', l)[0], "fp-selected")
                    },
                    f = function(e, n) {
                        var i = r.find("video.fp-engine", t)[0].textTracks;
                        i.length && (null === e ? [].forEach.call(i, function(e) {
                            e.mode = n
                        }) : i[e].mode = n)
                    };
                e.disableSubtitles = function() {
                    return e.subtitles = [], (e.cuepoints || []).forEach(function(t) {
                        (t.subtitle || t.subtitleEnd) && e.removeCuepoint(t)
                    }), a && Array.prototype.forEach.call(a.children, r.removeNode), c(-1), i.support.subtitles && e.conf.nativesubtitles && "html5" == e.engine.engineName && f(null, "disabled"), e
                }, e.loadSubtitles = function(t) {
                    e.disableSubtitles();
                    var n = e.video.subtitles[t].src;
                    if (n) {
                        if (c(t), !i.support.subtitles || !e.conf.nativesubtitles || "html5" != e.engine.engineName) return r.xhrGet(n, function(t) {
                            e.conf.subtitleParser(t).forEach(function(t) {
                                var n = {
                                    time: t.startTime,
                                    subtitle: t,
                                    visible: !1
                                };
                                e.subtitles.push(t), e.addCuepoint(n), e.addCuepoint({
                                    time: t.endTime,
                                    subtitleEnd: t.title,
                                    visible: !1
                                }), 0 !== t.startTime || e.video.time || e.splash || e.trigger("cuepoint", [e, i.extend({}, n, {
                                    index: 0
                                })]), e.splash && e.one("ready", function() {
                                    e.trigger("cuepoint", [e, n])
                                })
                            })
                        }, function() {
                            return e.trigger("error", {
                                code: 8,
                                url: n
                            }), !1
                        }), e;
                        f(t, "showing")
                    }
                }
            })
        }, {
            "../common": 1,
            "../flowplayer": 31,
            "./subtitles/parser": 24,
            bean: 34
        }],
        24: [function(e, t, n) {
            t.exports = function(e) {
                var t = /^(([0-9]+:){1,2}[0-9]{2}[,.][0-9]{3}) --\> (([0-9]+:){1,2}[0-9]{2}[,.][0-9]{3})(.*)/;

                function n(e) {
                    var t = e.split(":");
                    return 2 == t.length && t.unshift(0), 60 * t[0] * 60 + 60 * t[1] + parseFloat(t[2].replace(",", "."))
                }
                for (var i, r, o, a = [], s = 0, l = e.split("\n"), u = l.length, c = {}; s < u; s++)
                    if (r = t.exec(l[s])) {
                        for (i = l[s - 1], o = "<p>" + l[++s] + "</p><br/>";
                            "string" == typeof l[++s] && l[s].trim() && s < l.length;) o += "<p>" + l[s] + "</p><br/>";
                        c = {
                            title: i,
                            startTime: n(r[1]),
                            endTime: n(r[3]),
                            text: o
                        }, a.push(c)
                    }
                return a
            }
        }, {}],
        25: [function(e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
                r = e("extend-object");
            ! function() {
                var e = {},
                    t = document.documentElement.style,
                    n = navigator.userAgent.toLowerCase(),
                    o = /(chrome)[ \/]([\w.]+)/.exec(n) || /(safari)[ \/]([\w.]+)/.exec(n) || /(webkit)[ \/]([\w.]+)/.exec(n) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(n) || /(msie) ([\w.]+)/.exec(n) || n.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(n) || [];
                o[1] && (e[o[1]] = !0, e.version = o[2] || "0"), e.safari && (e.version = (/version\/([\w.]+)/.exec(n) || [])[1]);
                var a, s, l = ((s = document.createElement("video")).loop = !0, s.autoplay = !0, s.preload = !0, s),
                    u = navigator.userAgent,
                    c = e.msie || /Trident\/7/.test(u),
                    f = /iPad|MeeGo/.test(u) && !/CriOS/.test(u),
                    d = /iPad/.test(u) && /CriOS/.test(u),
                    p = /iP(hone|od)/i.test(u) && !/iPad/.test(u) && !/IEMobile/i.test(u),
                    h = /Android/.test(u),
                    g = h && /Firefox/.test(u),
                    m = h && /SAMSUNG/.test(u),
                    v = /Silk/.test(u),
                    y = /IEMobile/.test(u),
                    w = y ? parseFloat(/Windows\ Phone\ (\d+\.\d+)/.exec(u)[1], 10) : 0,
                    b = y ? parseFloat(/IEMobile\/(\d+\.\d+)/.exec(u)[1], 10) : 0,
                    I = f || p ? (a = /iP(ad|hone)(; CPU)? OS (\d+_\d)/.exec(u)) && a.length > 1 ? parseFloat(a[a.length - 1].replace("_", "."), 10) : 0 : 0,
                    M = h ? parseFloat(/Android\ (\d\.\d)/.exec(u)[1], 10) : 0,
                    C = (p || f || d) && {
                        iPhone: p,
                        iPad: f || d,
                        version: I,
                        chrome: d
                    },
                    A = r(i.support, {
                        browser: e,
                        iOS: C,
                        android: !!h && {
                            firefox: g,
                            opera: /Opera/.test(u),
                            samsung: m,
                            version: M
                        },
                        subtitles: !!l.addTextTrack,
                        fullscreen: "boolean" == typeof document.webkitFullscreenEnabled ? document.webkitFullscreenEnabled : "function" == typeof document.webkitCancelFullScreen && !/Mac OS X 10_5.+Version\/5\.0\.\d Safari/.test(u) || document.mozFullScreenEnabled || "function" == typeof document.exitFullscreen || "function" == typeof document.msExitFullscreen,
                        inlineBlock: !(c && e.version < 8),
                        touch: "ontouchstart" in window,
                        dataload: !f && !p && !y,
                        flex: "flexWrap" in t || "WebkitFlexWrap" in t || "msFlexWrap" in t,
                        svg: !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
                        zeropreload: !c && !h,
                        volume: !(f || p || v || d),
                        cachedVideoTag: !(f || p || d || y),
                        firstframe: !(v || y || g || m || I && I < 10 || h && M < 4.4),
                        inlineVideo: (!p || I >= 10) && (!y || w >= 8.1 && b >= 11) && (!h || M >= 3),
                        hlsDuration: !h && (!e.safari || f || p || d),
                        seekable: !f && !d,
                        preloadMetadata: !C && !e.safari
                    });
                A.autoplay = A.firstframe, y && (A.browser.safari = !1);
                try {
                    var S = navigator.plugins["Shockwave Flash"],
                        E = c ? new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version") : S.description;
                    c || S[0].enabledPlugin ? ((E = E.split(/\D+/)).length && !E[0] && (E = E.slice(1)), A.flashVideo = E[0] > 9 || 9 == E[0] && E[3] >= 115) : A.flashVideo = !1
                } catch (e) {}
                try {
                    A.video = !!l.canPlayType, A.video && l.canPlayType("video/mp4")
                } catch (e) {
                    A.video = !1
                }
                A.animation = function() {
                    for (var e = ["", "Webkit", "Moz", "O", "ms", "Khtml"], t = document.createElement("p"), n = 0; n < e.length; n++)
                        if (void 0 !== t.style[e[n] + "AnimationName"]) return !0
                }()
            }()
        }, {
            "../flowplayer": 31,
            "extend-object": 39
        }],
        26: [function(e, t, n) {
            "use strict";
            var i = e("../flowplayer"),
                r = e("../common"),
                o = e("bean");
            i(function(e, t) {
                var n = e.conf;
                if (!1 !== n.share && !1 !== n.twitter) {
                    e.tweet = function() {
                        var t, i, r = screen.height,
                            o = screen.width,
                            a = "string" == typeof n.twitter ? n.twitter : e.shareUrl();
                        t = Math.round(o / 2 - 275), i = 0, r > 420 && (i = Math.round(r / 2 - 210)), window.open("https://twitter.com/intent/tweet?url=" + encodeURIComponent(a), "intent", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,left=" + t + ",top=" + i)
                    };
                    var i = r.find(".fp-share-menu", t)[0],
                        a = r.createElement("a", {
                            class: "fp-icon fp-twitter"
                        }, "Twitter");
                    r.append(i, a), o.on(t, "click", ".fp-twitter", function() {
                        e.tweet()
                    })
                }
            })
        }, {
            "../common": 1,
            "../flowplayer": 31,
            bean: 34
        }],
        27: [function(e, t, n) {
            (function(n) {
                "use strict";
                var i = e("../flowplayer"),
                    r = e("../common"),
                    o = e("bean"),
                    a = e("./ui/slider"),
                    s = e("./ui/bar-slider");

                function l(e) {
                    return (e = parseInt(e, 10)) >= 10 ? e : "0" + e
                }

                function u(e, t) {
                    e = Math.max(e || 0, 0), e = t ? Math.ceil(e) : Math.floor(e);
                    var n = Math.floor(e / 3600),
                        i = Math.floor(e / 60);
                    return e -= 60 * i, n >= 1 ? n + ":" + l(i -= 60 * n) + ":" + l(e) : l(i) + ":" + l(e)
                }
                var c = n("PHN2ZyBjbGFzcz0iZnAtcGxheS1yb3VuZGVkLW91dGxpbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDk5Ljg0NCA5OS44NDM0Ij48ZGVmcz48c3R5bGU+LmZwLWNvbG9yLXBsYXl7b3BhY2l0eTowLjY1O30uY29udHJvbGJ1dHRvbntmaWxsOiNmZmY7fTwvc3R5bGU+CjwvZGVmcz4KPHRpdGxlPnBsYXktcm91bmRlZC1vdXRsaW5lPC90aXRsZT48cGF0aCBjbGFzcz0iZnAtY29sb3ItcGxheSIgZD0iTTQ5LjkyMTctLjA3OGE1MCw1MCwwLDEsMCw1MCw1MEE1MC4wNTY0LDUwLjA1NjQsMCwwLDAsNDkuOTIxNy0uMDc4WiIvPjxwYXRoIGNsYXNzPSJjb250cm9sYnV0dG9uIiBkPSJNNDEuMDM1OSw3MS4xOWE1LjA0OTIsNS4wNDkyLDAsMCwxLTIuNTU3NS0uNjY3M2MtMS44MDMxLTEuMDQxLTIuNzk1OC0zLjEyNDgtMi43OTU4LTUuODY2NFYzNS4xODg3YzAtMi43NDI5Ljk5MzMtNC44MjcyLDIuNzk3LTUuODY3NiwxLjgwMjUtMS4wNDIyLDQuMTAzNC0uODYsNi40OC41MTQzTDcwLjQ3ODIsNDQuNTY3MmMyLjM3NTEsMS4zNzExLDMuNjgyNiwzLjI3MjUsMy42ODMyLDUuMzU0NXMtMS4zMDc2LDMuOTg0NS0zLjY4MzIsNS4zNTYyTDQ0Ljk1OTIsNzAuMDExNEE3LjkzODQsNy45Mzg0LDAsMCwxLDQxLjAzNTksNzEuMTlabS4wMDY1LTQwLjEyM2EyLjY3OTQsMi42Nzk0LDAsMCwwLTEuMzU4Mi4zNDEzYy0xLjAyNjMuNTkyNi0xLjU5MTIsMS45MzQ5LTEuNTkxMiwzLjc4VjY0LjY1NjNjMCwxLjg0NDkuNTY0OSwzLjE4NjYsMS41OTA2LDMuNzc5MSwxLjAyODEuNTkzMiwyLjQ3MzMuNDEwOCw0LjA3LS41MTJMNjkuMjczLDUzLjE5MDZjMS41OTgzLS45MjI3LDIuNDc4LTIuMDgzOCwyLjQ3OC0zLjI2ODlzLS44OC0yLjM0NDUtMi40NzgtMy4yNjY2TDQzLjc1NCwzMS45MjI3QTUuNTY4NSw1LjU2ODUsMCwwLDAsNDEuMDQyMywzMS4wNjcxWiIgZmlsdGVyPSJ1cmwoI2YxKSIvPjwvc3ZnPgo=", "base64"),
                    f = n("PHN2ZyBjbGFzcz0iZnAtcGxheS1yb3VuZGVkLWZpbGwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiPgogIDxkZWZzPjxzdHlsZT4uYXtmaWxsOiMwMDA7b3BhY2l0eTowLjY1O30uYntmaWxsOiNmZmY7b3BhY2l0eToxLjA7fTwvc3R5bGU+CiAgPC9kZWZzPjx0aXRsZT5wbGF5LXJvdW5kZWQtZmlsbDwvdGl0bGU+CiAgPHBhdGggY2xhc3M9ImZwLWNvbG9yLXBsYXkiIGQ9Ik00OS45MjE3LS4wNzhhNTAsNTAsMCwxLDAsNTAsNTBBNTAuMDU2NCw1MC4wNTY0LDAsMCwwLDQ5LjkyMTctLjA3OFoiLz4KICA8cGF0aCBjbGFzcz0iYiIgZD0iTTM1Ljk0MiwzNS4yMzIzYzAtNC43Mjg5LDMuMzUwNi02LjY2MzcsNy40NDYtNC4yOTcxTDY4LjgzLDQ1LjYyMzVjNC4wOTU2LDIuMzY0LDQuMDk1Niw2LjIzMTksMCw4LjU5NzdMNDMuMzg4LDY4LjkxYy00LjA5NTQsMi4zNjQtNy40NDYuNDMtNy40NDYtNC4yOTc5WiIgZmlsdGVyPSJ1cmwoI2YxKSIvPgogIDwvc3ZnPgogIAo=", "base64"),
                    d = n("PHN2ZyBjbGFzcz0iZnAtcGxheS1zaGFycC1maWxsIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4uZnAtY29sb3ItcGxheXtvcGFjaXR5OjAuNjU7fS5jb250cm9sYnV0dG9ue2ZpbGw6I2ZmZjt9PC9zdHlsZT4KICA8L2RlZnM+CiAgPHRpdGxlPnBsYXktc2hhcnAtZmlsbDwvdGl0bGU+CiAgPHBhdGggY2xhc3M9ImZwLWNvbG9yLXBsYXkiIGQ9Ik00OS45MjE3LS4wNzhhNTAsNTAsMCwxLDAsNTAsNTBBNTAuMDU2NCw1MC4wNTY0LDAsMCwwLDQ5LjkyMTctLjA3OFoiLz4KICA8cG9seWdvbiBjbGFzcz0iY29udHJvbGJ1dHRvbiIgcG9pbnRzPSI3My42MDEgNTAgMzcuOTY4IDcwLjU3MyAzNy45NjggMjkuNDI3IDczLjYwMSA1MCIgZmlsdGVyPSJ1cmwoI2YxKSIvPgo8L3N2Zz4K", "base64"),
                    p = n("PHN2ZyBjbGFzcz0iZnAtcGxheS1zaGFycC1vdXRsaW5lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5OS44NDQgOTkuODQzNCI+PGRlZnM+PHN0eWxlPi5jb250cm9sYnV0dG9uYmd7b3BhY2l0eTowLjY1O30uY29udHJvbGJ1dHRvbntmaWxsOiNmZmY7fTwvc3R5bGU+CjwvZGVmcz48dGl0bGU+cGxheS1zaGFycC1vdXRsaW5lPC90aXRsZT48cGF0aCBjbGFzcz0iZnAtY29sb3ItcGxheSIgZD0iTTQ5LjkyMTctLjA3OGE1MCw1MCwwLDEsMCw1MCw1MEE1MC4wNTY0LDUwLjA1NjQsMCwwLDAsNDkuOTIxNy0uMDc4WiIvPjxwYXRoIGNsYXNzPSJjb250cm9sYnV0dG9uIiBkPSJNMzYuOTQ0Myw3Mi4yNDczVjI3LjI5MTZMNzUuODc3Niw0OS43N1ptMi4yLTQxLjE0NTVWNjguNDM3MUw3MS40Nzc2LDQ5Ljc3WiIgZmlsdGVyPSJ1cmwoI2YxKSIvPjwvc3ZnPgo=", "base64"),
                    h = n("PHN2ZyBjbGFzcz0iZnAtcGF1c2Utcm91bmRlZC1vdXRsaW5lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5OS44NDM0IDk5Ljg0MzQiPjxkZWZzPjxzdHlsZT4uZnAtY29sb3ItcGxheXtvcGFjaXR5OjAuNjU7fS5yZWN0e2ZpbGw6I2ZmZjt9PC9zdHlsZT4KPC9kZWZzPjx0aXRsZT5wYXVzZS1yb3VuZGVkLW91dGxpbmU8L3RpdGxlPjxwYXRoIGNsYXNzPSJmcC1jb2xvci1wbGF5IiBkPSJNNDkuOTIxMi0uMDc4M2E1MCw1MCwwLDEsMCw1MC4wMDA2LDUwQTUwLjA1NjIsNTAuMDU2MiwwLDAsMCw0OS45MjEyLS4wNzgzWiIvPjxnIGNsYXNzPSJjb250cm9sYnV0dG9uIj48cGF0aCBjbGFzcz0icmVjdCIgZD0iTTM5LjAwMzYsNzEuOTcyNmE3LjU2NSw3LjU2NSwwLDAsMS03LjU1Ny03LjU1NnYtMjguOTlhNy41NTY1LDcuNTU2NSwwLDAsMSwxNS4xMTMsMHYyOC45OUE3LjU2NDgsNy41NjQ4LDAsMCwxLDM5LjAwMzYsNzEuOTcyNlptMC00MS45MDRhNS4zNjQ3LDUuMzY0NywwLDAsMC01LjM1OTMsNS4zNTgydjI4Ljk5YTUuMzU4Nyw1LjM1ODcsMCwwLDAsMTAuNzE3NCwwdi0yOC45OUE1LjM2NDUsNS4zNjQ1LDAsMCwwLDM5LjAwMzYsMzAuMDY4NloiIGZpbHRlcj0idXJsKCNmMSkiLz48cGF0aCBjbGFzcz0icmVjdCIgZD0iTTYwLjg0LDcxLjk3MjZhNy41NjQ4LDcuNTY0OCwwLDAsMS03LjU1Ni03LjU1NnYtMjguOTlhNy41NTY1LDcuNTU2NSwwLDAsMSwxNS4xMTMsMHYyOC45OUE3LjU2NSw3LjU2NSwwLDAsMSw2MC44NCw3MS45NzI2Wm0wLTQxLjkwNGE1LjM2NDUsNS4zNjQ1LDAsMCwwLTUuMzU4Miw1LjM1ODJ2MjguOTlhNS4zNTg3LDUuMzU4NywwLDAsMCwxMC43MTc0LDB2LTI4Ljk5QTUuMzY0Nyw1LjM2NDcsMCwwLDAsNjAuODQsMzAuMDY4NloiIGZpbHRlcj0idXJsKCNmMSkiLz48L2c+PC9zdmc+Cg==", "base64"),
                    g = n("PHN2ZyBjbGFzcz0iZnAtcGF1c2Utcm91bmRlZC1maWxsIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmZwLWNvbG9yLXBsYXl7b3BhY2l0eTowLjY1O30ucmVjdHtmaWxsOiNmZmY7fTwvc3R5bGU+CjwvZGVmcz48dGl0bGU+cGF1c2Utcm91bmRlZC1maWxsPC90aXRsZT48cGF0aCBjbGFzcz0iZnAtY29sb3ItcGxheSIgZD0iTTQ5LjkyMTctLjA3OGE1MCw1MCwwLDEsMCw1MCw1MEE1MC4wNTY0LDUwLjA1NjQsMCwwLDAsNDkuOTIxNy0uMDc4WiIvPjxnIGNsYXNzPSJjb250cm9sYnV0dG9uIiBmaWx0ZXI9InVybCgjZjEpIj48cmVjdCBjbGFzcz0icmVjdCIgeD0iMzEuODQ0IiB5PSIyOC4xMjMxIiB3aWR0aD0iMTMuNDM2MiIgaGVpZ2h0PSI0My41OTczIiByeD0iNi43MTgxIiByeT0iNi43MTgxIi8+PHJlY3QgY2xhc3M9InJlY3QiIHg9IjU0LjU2MzgiIHk9IjI4LjEyMzEiIHdpZHRoPSIxMy40MzYyIiBoZWlnaHQ9IjQzLjU5NzMiIHJ4PSI2LjcxODEiIHJ5PSI2LjcxODEiLz48L2c+PC9zdmc+Cg==", "base64"),
                    m = n("PHN2ZyBjbGFzcz0iZnAtcGF1c2Utc2hhcnAtZmlsbCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGRlZnM+PHN0eWxlPi5mcC1jb2xvci1wbGF5e29wYWNpdHk6MC42NTt9LnJlY3R7ZmlsbDojZmZmO308L3N0eWxlPgo8L2RlZnM+PHRpdGxlPnBhdXNlLXNoYXJwLWZpbGw8L3RpdGxlPjxwYXRoIGNsYXNzPSJmcC1jb2xvci1wbGF5IiBkPSJNNDkuOTIxNy0uMDc4YTUwLDUwLDAsMSwwLDUwLDUwQTUwLjA1NjQsNTAuMDU2NCwwLDAsMCw0OS45MjE3LS4wNzhaIi8+PGcgY2xhc3M9ImNvbnRyb2xidXR0b24iIGZpbHRlcj0idXJsKCNmMSkiPjxyZWN0IGNsYXNzPSJyZWN0IiB4PSIzMy41IiB5PSIzMC4xMDQyIiB3aWR0aD0iMTIuMjYzNCIgaGVpZ2h0PSIzOS43OTE3Ii8+PHJlY3QgY2xhc3M9InJlY3QiIHg9IjU0LjIzNjYiIHk9IjMwLjEwNDIiIHdpZHRoPSIxMi4yNjM0IiBoZWlnaHQ9IjM5Ljc5MTciLz48L2c+PC9zdmc+Cg==", "base64"),
                    v = n("PHN2ZyBjbGFzcz0iZnAtcGF1c2Utc2hhcnAtb3V0bGluZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgOTkuODQzNCA5OS44NDM0Ij48ZGVmcz48c3R5bGU+LmZwLWNvbG9yLXBsYXl7b3BhY2l0eTowLjY1O30ucmVjdHtmaWxsOiNmZmY7fTwvc3R5bGU+CjwvZGVmcz48dGl0bGU+cGF1c2Utc2hhcnAtb3V0bGluZTwvdGl0bGU+PHBhdGggY2xhc3M9ImZwLWNvbG9yLXBsYXkiIGQ9Ik00OS45MjEyLS4wNzgzYTUwLDUwLDAsMSwwLDUwLjAwMDYsNTBBNTAuMDU2Miw1MC4wNTYyLDAsMCwwLDQ5LjkyMTItLjA3ODNaIi8+PGcgY2xhc3M9ImNvbnRyb2xidXR0b24iIGZpbHRlcj0idXJsKCNmMSkiPjxwYXRoIGNsYXNzPSJyZWN0IiBkPSJNNDYuODcwOSw2OS45NTMxSDMzLjEzODVWMjkuODlINDYuODcwOVpNMzUuMTQxNiw2Ny45NWg5LjcyNjJWMzEuODkzNUgzNS4xNDE2WiIvPjxwYXRoIGNsYXNzPSJyZWN0IiBkPSJNNjYuNzA0Nyw2OS45NTMxSDUyLjk3MjJWMjkuODlINjYuNzA0N1pNNTQuOTc1NCw2Ny45NWg5LjcyNjJWMzEuODkzNUg1NC45NzU0WiIvPjwvZz48L3N2Zz4K", "base64"),
                    y = n("PHN2ZyBjbGFzcz0iZnAtbG9hZGluZy1yb3VuZGVkLW91dGxpbmUiIHdpZHRoPScxMTJweCcgaGVpZ2h0PScxMTJweCcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijc2IiBoZWlnaHQ9Ijc2IiBmaWxsPSJyZ2JhKDAsMCwwLDApIiBjbGFzcz0iYmsiPjwvcmVjdD4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgMjUpIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwwLDAsLjUpIiBzdHJva2Utd2lkdGg9IjMlIiBjbGFzcz0ic3EiPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjAuMHMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4wcyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICAgIDwvY2lyY2xlPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyNSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwuNSkiIHN0cm9rZS13aWR0aD0iMyUiIGNsYXNzPSJzcSI+CiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZSIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMC40cyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjRzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgPC9jaXJjbGU+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDUwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLC41KSIgc3Ryb2tlLXdpZHRoPSIzJSIgY2xhc3M9InNxIj4KICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ic3Ryb2tlIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIwLjhzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBhZGRpdGl2ZT0ic3VtIiBmcm9tPSIwLjgiIHRvPSIxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuOHMiIGR1cj0iMS42cyIgdmFsdWVzPSIxOzAuODswLjg7MTsxIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgNTApIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwwLDAsLjUpIiBzdHJva2Utd2lkdGg9IjMlIiBjbGFzcz0ic3EiPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjEuMnMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMS4ycyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICAgIDwvY2lyY2xlPgo8L3N2Zz4K", "base64"),
                    w = n("PHN2ZyBjbGFzcz0iZnAtbG9hZGluZy1yb3VuZGVkLWZpbGwiIHdpZHRoPScxMTJweCcgaGVpZ2h0PScxMTJweCcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijc2IiBoZWlnaHQ9Ijc2IiBmaWxsPSJyZ2JhKDAsMCwwLDApIiBjbGFzcz0iYmsiPjwvcmVjdD4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgMjUpIiBmaWxsPSJyZ2JhKDAsMCwwLC41KSIgY2xhc3M9InNxIj4KICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbCIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMC4wcyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjBzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgPC9jaXJjbGU+CiAgICA8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDI1KSIgZmlsbD0icmdiYSgwLDAsMCwuNSkiIGNsYXNzPSJzcSI+CiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjAuNHMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC40cyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICAgIDwvY2lyY2xlPgogICAgPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCA1MCkiIGZpbGw9InJnYmEoMCwwLDAsLjUpIiBjbGFzcz0ic3EiPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIwLjhzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBhZGRpdGl2ZT0ic3VtIiBmcm9tPSIwLjgiIHRvPSIxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuOHMiIGR1cj0iMS42cyIgdmFsdWVzPSIxOzAuODswLjg7MTsxIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgICA8L2NpcmNsZT4KICAgIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUgNTApIiBmaWxsPSJyZ2JhKDAsMCwwLC41KSIgY2xhc3M9InNxIj4KICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbCIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMS4ycyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIxLjJzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogICAgPC9jaXJjbGU+Cjwvc3ZnPgo=", "base64"),
                    b = n("PHN2ZyBjbGFzcz0iZnAtbG9hZGluZy1zaGFycC1maWxsIiB3aWR0aD0nMTEycHgnIGhlaWdodD0nMTEycHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNzYiIGhlaWdodD0iNzYiIGZpbGw9InJnYmEoMCwwLDAsMCkiIGNsYXNzPSJiayI+PC9yZWN0PgogIDxyZWN0IHg9Ii0xMCIgeT0iLTEwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1IDI1KSIgZmlsbD0icmdiYSgwLDAsMCwuNSkiIGNsYXNzPSJzcSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIwLjBzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjBzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogIDwvcmVjdD4KICA8cmVjdCB4PSItMTAiIHk9Ii0xMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MCAyNSkiIGZpbGw9InJnYmEoMCwwLDAsLjUpIiBjbGFzcz0ic3EiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iZmlsbCIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMC40cyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC40cyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICA8L3JlY3Q+CiAgPHJlY3QgeD0iLTEwIiB5PSItMTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgNTApIiBmaWxsPSJyZ2JhKDAsMCwwLC41KSIgY2xhc3M9InNxIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImZpbGwiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjAuOHMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBhZGRpdGl2ZT0ic3VtIiBmcm9tPSIwLjgiIHRvPSIxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuOHMiIGR1cj0iMS42cyIgdmFsdWVzPSIxOzAuODswLjg7MTsxIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgPC9yZWN0PgogIDxyZWN0IHg9Ii0xMCIgeT0iLTEwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1IDUwKSIgZmlsbD0icmdiYSgwLDAsMCwuNSkiIGNsYXNzPSJzcSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJmaWxsIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIxLjJzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIxLjJzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogIDwvcmVjdD4KPC9zdmc+Cg==", "base64"),
                    I = n("PHN2ZyBjbGFzcz0iZnAtbG9hZGluZy1zaGFycC1vdXRsaW5lIiB3aWR0aD0nMTEycHgnIGhlaWdodD0nMTEycHgnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iNzYiIGhlaWdodD0iNzYiIGZpbGw9InJnYmEoMCwwLDAsMCkiIGNsYXNzPSJiayI+PC9yZWN0PgogIDxyZWN0IHg9Ii05IiB5PSItOSIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNSAyNSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwuNSkiIHN0cm9rZS13aWR0aD0iMyUiIGNsYXNzPSJzcSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjAuMHMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMC4wcyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICA8L3JlY3Q+CiAgPHJlY3QgeD0iLTkiIHk9Ii05IiB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwIDI1KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLC41KSIgc3Ryb2tlLXdpZHRoPSIzJSIgY2xhc3M9InNxIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZSIgZnJvbT0icmdiYSgwLDAsMCwwKSIgdG89InJnYmEoMCwwLDAsLjUpIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgZHVyPSIxLjZzIiBiZWdpbj0iMC40cyIgdmFsdWVzPSJyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwuNSkiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZT4KICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYWRkaXRpdmU9InN1bSIgZnJvbT0iMC44IiB0bz0iMSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGJlZ2luPSIwLjRzIiBkdXI9IjEuNnMiIHZhbHVlcz0iMTswLjg7MC44OzE7MSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlVHJhbnNmb3JtPgogIDwvcmVjdD4KICA8cmVjdCB4PSItOSIgeT0iLTkiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNTAgNTApIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMCwwLDAsLjUpIiBzdHJva2Utd2lkdGg9IjMlIiBjbGFzcz0ic3EiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ic3Ryb2tlIiBmcm9tPSJyZ2JhKDAsMCwwLDApIiB0bz0icmdiYSgwLDAsMCwuNSkiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjEuNnMiIGJlZ2luPSIwLjhzIiB2YWx1ZXM9InJnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsMCk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLC41KTtyZ2JhKDAsMCwwLC41KSIga2V5VGltZXM9IjA7MC4xOzAuMjswLjQ7MSI+PC9hbmltYXRlPgogICAgICA8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiBhZGRpdGl2ZT0ic3VtIiBmcm9tPSIwLjgiIHRvPSIxIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgYmVnaW49IjAuOHMiIGR1cj0iMS42cyIgdmFsdWVzPSIxOzAuODswLjg7MTsxIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgPC9yZWN0PgogIDxyZWN0IHg9Ii05IiB5PSItOSIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNSA1MCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLDAsMCwuNSkiIHN0cm9rZS13aWR0aD0iMyUiIGNsYXNzPSJzcSI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UiIGZyb209InJnYmEoMCwwLDAsMCkiIHRvPSJyZ2JhKDAsMCwwLC41KSIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGR1cj0iMS42cyIgYmVnaW49IjEuMnMiIHZhbHVlcz0icmdiYSgwLDAsMCwuNSk7cmdiYSgwLDAsMCwwKTtyZ2JhKDAsMCwwLDApO3JnYmEoMCwwLDAsLjUpO3JnYmEoMCwwLDAsLjUpIiBrZXlUaW1lcz0iMDswLjE7MC4yOzAuNDsxIj48L2FuaW1hdGU+CiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGFkZGl0aXZlPSJzdW0iIGZyb209IjAuOCIgdG89IjEiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBiZWdpbj0iMS4ycyIgZHVyPSIxLjZzIiB2YWx1ZXM9IjE7MC44OzAuODsxOzEiIGtleVRpbWVzPSIwOzAuMTswLjI7MC40OzEiPjwvYW5pbWF0ZVRyYW5zZm9ybT4KICA8L3JlY3Q+Cjwvc3ZnPgo=", "base64");
                i(function(e, t) {
                    r.find(".fp-filters").forEach(r.removeNode);
                    try {
                        var l;
                        document.body.appendChild(l = r.createElement("div", {}, n("PHN2ZyBjbGFzcz0iZnAtZmlsdGVycyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMCAwIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9ImYxIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMjAwJSIgaGVpZ2h0PSIyMDAlIj4KICAgICAgPGZlT2Zmc2V0IHJlc3VsdD0ib2ZmT3V0IiBpbj0iU291cmNlQWxwaGEiIGR4PSIwIiBkeT0iMCIgLz4KICAgICAgPGZlQ29sb3JNYXRyaXggcmVzdWx0PSJtYXRyaXhPdXQiIGluPSJvZmZPdXQiIHR5cGU9Im1hdHJpeCIKICAgICAgdmFsdWVzPSIwLjMgMCAwIDAgMCAwIDAuMyAwIDAgMCAwIDAgMC4zIDAgMCAwIDAgMCAwLjQgMCIgLz4KICAgICAgPGZlR2F1c3NpYW5CbHVyIHJlc3VsdD0iYmx1ck91dCIgaW49Im1hdHJpeE91dCIgc3RkRGV2aWF0aW9uPSI0IiAvPgogICAgICA8ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyT3V0IiBtb2RlPSJub3JtYWwiIC8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+Cjwvc3ZnPgo=", "base64"))), r.css(l, {
                            width: 0,
                            height: 0,
                            overflow: "hidden",
                            position: "absolute",
                            margin: 0,
                            padding: 0
                        })
                    } catch (e) {}
                    var M, C = e.conf,
                        A = i.support;
                    r.find(".fp-ratio,.fp-ui", t).forEach(r.removeNode), r.addClass(t, "flowplayer"), t.appendChild(r.createElement("div", {
                        className: "fp-ratio"
                    }));
                    var S = r.createElement("div", {
                        className: "fp-ui"
                    }, '         <div class="fp-waiting">           {{ LOADING_SHARP_OUTLINE }}           {{ LOADING_SHARP_FILL }}           {{ LOADING_ROUNDED_FILL }}           {{ LOADING_ROUNDED_OUTLINE }}         </div>         <div class="fp-header">           <a class="fp-share fp-icon"></a>           <a class="fp-fullscreen fp-icon"></a>           <a class="fp-unload fp-icon"></a>         </div>         <p class="fp-speed-flash"></p>         <div class="fp-play fp-visible">           <a class="fp-icon fp-playbtn"></a>           {{ PLAY_ROUNDED_FILL }}           {{ PLAY_ROUNDED_OUTLINE }}           {{ PLAY_SHARP_FILL }}           {{ PLAY_SHARP_OUTLINE }}         </div>         <div class="fp-pause">           <a class="fp-icon fp-playbtn"></a>           {{ PAUSE_SHARP_OUTLINE }}           {{ PAUSE_SHARP_FILL }}           {{ PAUSE_ROUNDED_OUTLINE }}           {{ PAUSE_ROUNDED_FILL }}         </div>         <div class="fp-controls">            <a class="fp-icon fp-playbtn"></a>            <span class="fp-elapsed">00:00</span>            <div class="fp-timeline fp-bar">               <span class="fp-timestamp"></span>               <div class="fp-progress fp-color"></div>            </div>            <span class="fp-duration"></span>            <span class="fp-remaining"></span>            <div class="fp-volume">               <a class="fp-icon fp-volumebtn"></a>               <div class="fp-volumebar fp-bar-slider">                 <em></em><em></em><em></em><em></em><em></em><em></em><em></em>               </div>            </div>            <strong class="fp-speed fp-hidden"></strong>         </div>'.replace("{{ PAUSE_ROUNDED_FILL }}", g).replace("{{ PAUSE_ROUNDED_OUTLINE }}", h).replace("{{ PAUSE_SHARP_FILL }}", m).replace("{{ PAUSE_SHARP_OUTLINE }}", v).replace("{{ PLAY_SHARP_OUTLINE }}", p).replace("{{ PLAY_SHARP_FILL }}", d).replace("{{ PLAY_ROUNDED_OUTLINE }}", c).replace("{{ PLAY_ROUNDED_FILL }}", f).replace("{{ LOADING_ROUNDED_OUTLINE }}", y).replace("{{ LOADING_ROUNDED_FILL }}", w).replace("{{ LOADING_SHARP_FILL }}", b).replace("{{ LOADING_SHARP_OUTLINE }}", I).replace(/url\(#/g, "url(" + window.location.href.replace(window.location.hash, "").replace(/\#$/g, "") + "#"));

                    function E(e) {
                        return r.find(".fp-" + e, t)[0]
                    }
                    t.appendChild(S);
                    var D = E("waiting"),
                        N = E("elapsed"),
                        j = E("ratio"),
                        L = E("speed-flash"),
                        x = E("duration"),
                        T = E("remaining"),
                        Z = E("timestamp"),
                        P = r.css(j, "padding-top"),
                        k = E("play"),
                        Y = E("pause"),
                        z = E("timeline"),
                        G = a(z, e.rtl),
                        R = E("fullscreen"),
                        O = E("volumebar"),
                        W = s(O, {
                            rtl: e.rtl
                        }),
                        U = r.hasClass(t, "no-toggle");
                    G.disableAnimation(r.hasClass(t, "is-touch")), e.sliders = e.sliders || {}, e.sliders.timeline = G, e.sliders.volume = W;
                    var J = [];

                    function B(e) {
                        r.css(j, "padding-top", 100 * e + "%"), A.inlineBlock || r.height(r.find("object", t)[0], r.height(t))
                    }

                    function F(e) {
                        e ? (r.addClass(t, "is-mouseover"), r.removeClass(t, "is-mouseout")) : (r.addClass(t, "is-mouseout"), r.removeClass(t, "is-mouseover"))
                    }
                    A.svg || r.html(D, "<p>loading &hellip;</p>"), C.ratio && B(C.ratio);
                    try {
                        C.fullscreen || r.removeNode(R)
                    } catch (e) {
                        r.removeNode(R)
                    }
                    e.on("dvrwindow", function() {
                        G.disable(!1)
                    }), e.on("ready", function(e, n, i) {
                        var o = n.video.duration;
                        G.disable(n.disabled || !o), C.adaptiveRatio && !isNaN(i.height / i.width) && B(i.height / i.width), r.html([x, T], n.live ? "Live" : u(o)), r.toggleClass(t, "is-long", o >= 3600), W.slide(n.volumeLevel), "flash" === n.engine.engineName ? G.disableAnimation(!0, !0) : G.disableAnimation(!1), r.find(".fp-title", S).forEach(r.removeNode), i.title && r.prepend(S, r.createElement("div", {
                            className: "fp-message fp-title"
                        }, i.title)), r.toggleClass(t, "has-title", !!i.title)
                    }).on("unload", function() {
                        P || C.splash || r.css(j, "paddingTop", ""), G.slide(0), r.addClass(k, "fp-visible")
                    }).on("buffer", function(e, t, n) {
                        var i = t.video,
                            o = i.buffer / i.duration;
                        !i.seekable && A.seekable && G.max(t.conf.live ? 1 / 0 : o), n && "number" != typeof n || (n = [{
                            start: 0,
                            end: i.buffer
                        }]);
                        var a = r.find(".fp-buffer", z);
                        a.length !== n.length && (a.forEach(r.removeNode), a = []), n.forEach(function(e, t) {
                            var n = a[t] || r.createElement("div", {
                                className: "fp-buffer"
                            });
                            r.css(n, {
                                left: 100 * e.start / i.duration + "%",
                                width: 100 * (e.end - e.start) / i.duration + "%"
                            }), r.prepend(z, n)
                        })
                    }).on("speed", function(e, t, n) {
                        t.video.time && (r.text(L, n + "x"), r.addClass(L, "fp-shown"), (J = J.filter(function(e) {
                            return clearTimeout(e), !1
                        })).push(setTimeout(function() {
                            r.addClass(L, "fp-hilite"), J.push(setTimeout(function() {
                                r.removeClass(L, "fp-hilite"), J.push(setTimeout(function() {
                                    r.removeClass(L, "fp-shown")
                                }, 300))
                            }, 1e3))
                        })))
                    }).on("buffered", function() {
                        G.max(1)
                    }).on("progress seek", function(n, i, o) {
                        var a = e.video.duration,
                            s = e.video.seekOffset || 0,
                            l = ((o = o || e.video.time) - s) / (a - s);
                        G.dragging || G.slide(l, e.seeking ? 0 : 250), r.toggleClass(t, "is-live-position", a - o < C.livePositionOffset), r.html(N, u(o)), r.html(T, u(a - o, !0))
                    }).on("finish resume seek", function(e) {
                        r.toggleClass(t, "is-finished", "finish" == e.type)
                    }).on("resume", function() {
                        r.addClass(k, "fp-visible"), setTimeout(function() {
                            r.removeClass(k, "fp-visible")
                        }, 300)
                    }).on("pause", function() {
                        r.addClass(Y, "fp-visible"), setTimeout(function() {
                            r.removeClass(Y, "fp-visible")
                        }, 300)
                    }).on("stop", function() {
                        r.html(N, u(0)), G.slide(0, 100)
                    }).on("finish", function() {
                        r.html(N, u(e.video.duration)), G.slide(1, 100), r.removeClass(t, "is-seeking")
                    }).on("beforeseek", function() {}).on("volume", function() {
                        W.slide(e.volumeLevel)
                    }).on("disable", function() {
                        var n = e.disabled;
                        G.disable(n), W.disable(n), r.toggleClass(t, "is-disabled", e.disabled)
                    }).on("mute", function(e, n, i) {
                        r.toggleClass(t, "is-muted", i)
                    }).on("error", function(e, n, i) {
                        if (r.removeClass(t, "is-loading"), r.removeClass(t, "is-seeking"), r.addClass(t, "is-error"), i) {
                            n.error = !0;
                            var o = i.code;
                            (i.message || "").match(/DECODER_ERROR_NOT_SUPPORTED/) && (o = 3);
                            var a = n.message((n.engine && n.engine.engineName || "html5") + ": " + C.errors[o]);
                            r.removeClass(t, "is-mouseover"), n.one("load progress", function() {
                                a()
                            })
                        }
                    }).one("resume ready", function() {
                        var e = r.find("video.fp-engine", t)[0];
                        if (e && (!r.width(e) || !r.height(e))) {
                            var n = t.style.overflow;
                            t.style.overflow = "visible", setTimeout(function() {
                                n ? t.style.overflow = n : t.style.removeProperty("overflow")
                            })
                        }
                    }), o.on(t, "mouseenter mouseleave", function(n) {
                        if (!U) {
                            var i, r = "mouseover" == n.type;
                            if (F(r), r) {
                                var a = function() {
                                    F(!0), i = new Date
                                };
                                e.on("pause.x volume.x", a), o.on(t, "mousemove.x", a), M = setInterval(function() {
                                    new Date - i > C.mouseoutTimeout && (F(!1), i = new Date)
                                }, 100)
                            } else o.off(t, "mousemove.x"), e.off("pause.x volume.x"), clearInterval(M)
                        }
                    }), o.on(t, "mouseleave", function() {
                        (G.dragging || W.dragging) && (r.addClass(t, "is-mouseover"), r.removeClass(t, "is-mouseout"))
                    }), o.on(t, "click.player", function(t) {
                        if (!e.disabled) return r.hasClass(t.target, "fp-ui") || r.hasClass(t.target, "fp-engine") || t.flash || r.hasParent(t.target, ".fp-play,.fp-pause") ? (t.preventDefault && t.preventDefault(), e.toggle()) : void 0
                    }), o.on(t, "mousemove", ".fp-timeline", function(t) {
                        var n = (t.pageX || t.clientX) - r.offset(z).left,
                            i = n / r.width(z),
                            o = e.video,
                            a = o.duration - (void 0 === o.seekOffset ? 0 : o.seekOffset),
                            s = (e.rtl ? 1 - i : i) * a;
                        if (!(i < 0)) {
                            r.html(Z, u(s));
                            var l = n - r.width(Z) / 2;
                            l < 0 && (l = 0), l > r.width(z) - r.width(Z) && (l = !1), !1 !== l ? r.css(Z, {
                                left: l + "px",
                                right: "auto"
                            }) : r.css(Z, {
                                left: "auto",
                                right: "0px"
                            })
                        }
                    }), o.on(t, "contextmenu", function(n) {
                        var i = window;
                        if (!r.hasClass(t, "is-flash-disabled")) {
                            var a = r.find(".fp-context-menu", t)[0];
                            a && (n.preventDefault(), e.showMenu(a, {
                                left: n.clientX - i.scrollX,
                                top: n.clientY - i.scrollY
                            }), o.on(t, "click", ".fp-context-menu", function(e) {
                                e.stopPropagation()
                            }))
                        }
                    }), e.on("flashdisabled", function(n, i, o) {
                        var a;
                        r.addClass(t, "is-flash-disabled"), !1 !== o && (a = e.message("Seems something is blocking Adobe Flash from running")), e.one("ready progress", function() {
                            r.removeClass(t, "is-flash-disabled"), a && a()
                        })
                    }), C.poster && r.css(t, "background-image", "url(" + C.poster + ")");
                    var H, V = r.css(t, "background-color"),
                        X = "none" != r.css(t, "background-image") || V && "rgba(0, 0, 0, 0)" != V && "transparent" != V;
                    if (X && !C.splash) {
                        C.poster || (C.poster = !0);
                        var _ = function() {
                            r.addClass(t, "is-poster"), r.addClass(k, "fp-visible"), e.poster = !0, e.on("resume.poster progress.poster beforeseek.poster", function(n) {
                                ("beforeseek" === n.type || e.playing) && (r.removeClass(t, "is-poster"), r.removeClass(k, "fp-visible"), e.poster = !1, e.off(".poster"))
                            })
                        };
                        e.on("stop", function() {
                            _()
                        }), e.on("ready", function(e, t, n) {
                            n.index || n.autoplay || _()
                        })
                    }
                    if ("string" == typeof C.splash && r.css(t, "background-image", "url('" + C.splash + "')"), !X && e.forcedSplash && r.css(t, "background-color", "#555"), o.on(t, "click", ".fp-toggle, .fp-play, .fp-playbtn", function() {
                            e.disabled || e.toggle()
                        }), o.on(t, "click", ".fp-volumebtn", function() {
                            e.mute()
                        }), o.on(t, "click", ".fp-fullscreen", function() {
                            e.fullscreen()
                        }), o.on(t, "click", ".fp-unload", function() {
                            e.unload()
                        }), o.on(z, "slide", function(t) {
                            e.seeking = !0, e.seekTo(10 * t)
                        }), o.on(O, "slide", function(t) {
                            e.volume(t)
                        }), o.on(t, "click", ".fp-duration,.fp-remaining", function() {
                            if (e.dvr) return e.seekTo(10);
                            r.toggleClass(t, "is-inverted")
                        }), F(U), e.on("shutdown", function() {
                            o.off(z), o.off(O), H && window.cancelAnimationFrame(H), r.removeNode(S), r.find(".fp-ratio", t).forEach(r.removeNode)
                        }), "function" == typeof window.requestAnimationFrame) {
                        var K = function() {
                            var e = r.find(".fp-player", t)[0] || t;
                            r.toggleClass(t, "is-tiny", e.clientWidth < 400), r.toggleClass(t, "is-small", e.clientWidth < 600 && e.clientWidth >= 400), H = window.requestAnimationFrame(K)
                        };
                        H = window.requestAnimationFrame(K)
                    }
                }), t.exports.format = u
            }).call(this, e("buffer").Buffer)
        }, {
            "../common": 1,
            "../flowplayer": 31,
            "./ui/bar-slider": 28,
            "./ui/slider": 29,
            bean: 34,
            buffer: 35
        }],
        28: [function(e, t, n) {
            var i = e("bean"),
                r = e("../../common");
            t.exports = function(e, t) {
                var n = (t = t || {}).activeClass || "fp-color",
                    o = t.inactiveClass || "fp-grey",
                    a = t.childSelector || "em",
                    s = !!t.rtl,
                    l = !1,
                    u = r.find(a, e).length,
                    c = {
                        unload: function() {
                            i.off(e, ".barslider")
                        },
                        slide: function(t, s) {
                            r.find(a, e).forEach(function(e, i) {
                                var a = t > i / u;
                                r.toggleClass(e, n, a), r.toggleClass(e, o, !a)
                            }), s && i.fire(e, "slide", [t])
                        },
                        disable: function(e) {
                            l = e
                        }
                    };
                return i.on(e, "mousedown.sld touchstart.sld", function(t) {
                    t.preventDefault(), l || (c.slide(f(t), !0), i.on(e, "mousemove.sld touchmove.sld", function(e) {
                        e.preventDefault(), c.slide(f(e), !0)
                    }), i.one(document, "mouseup.sld touchup.sld", function() {
                        i.off(e, "mousemove.sld touchmove.sld")
                    }))
                }), c;

                function f(t) {
                    var n = t.pageX || t.clientX,
                        i = r.offset(e),
                        o = r.width(e);
                    !n && t.originalEvent && t.originalEvent.touches && t.originalEvent.touches.length && (n = t.originalEvent.touches[0].pageX);
                    var a = n - i.left,
                        l = (a = Math.max(0, Math.min(o, a))) / o;
                    return s && (l = 1 - l), l
                }
            }
        }, {
            "../../common": 1,
            bean: 34
        }],
        29: [function(e, t, n) {
            "use strict";
            var i = e("bean"),
                r = e("../../common");
            t.exports = function(e, t) {
                var n, o, a, s, l, u, c = r.lastChild(e),
                    f = !1,
                    d = function() {
                        o = r.offset(e), a = r.width(e), r.height(e), s = a, u = m(l)
                    },
                    p = function(t) {
                        n || t == v.value || l && !(t < l) || (i.fire(e, "slide", [t]), v.value = t)
                    },
                    h = function(e) {
                        var n = e.pageX || e.clientX;
                        !n && e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length && (n = e.originalEvent.touches[0].pageX);
                        var i = n - o.left,
                            r = (i = Math.max(0, Math.min(u || s, i))) / s;
                        return t && (r = 1 - r), g(r, 0, !0)
                    },
                    g = function(e, t) {
                        void 0 === t && (t = 0), e > 1 && (e = 1);
                        var n = Math.round(1e3 * e) / 10 + "%";
                        return (!l || e <= l) && (f ? r.removeClass(c, "animated") : (r.addClass(c, "animated"), r.css(c, "transition-duration", (t || 0) + "ms")), r.css(c, "width", n)), e
                    },
                    m = function(e) {
                        return Math.max(0, Math.min(s, e * a))
                    },
                    v = {
                        max: function(e) {
                            l = e
                        },
                        disable: function(e) {
                            n = e
                        },
                        slide: function(e, t, n) {
                            d(), n && p(e), g(e, t)
                        },
                        disableAnimation: function(t, n) {
                            f = !1 !== t, r.toggleClass(e, "no-animation", !!n)
                        }
                    };
                return d(), i.on(e, "mousedown.sld touchstart", function(t) {
                    if (t.preventDefault(), !n) {
                        var o = (a = p, s = 100, function() {
                            l || (a.apply(this, arguments), l = 1, setTimeout(function() {
                                l = 0
                            }, s))
                        });
                        d(), v.dragging = !0, r.addClass(e, "is-dragging"), p(h(t)), i.on(document, "mousemove.sld touchmove.sld", function(e) {
                            e.preventDefault(), o(h(e))
                        }), i.one(document, "mouseup touchend", function() {
                            v.dragging = !1, r.removeClass(e, "is-dragging"), i.off(document, "mousemove.sld touchmove.sld")
                        })
                    }
                    var a, s, l
                }), v
            }
        }, {
            "../../common": 1,
            bean: 34
        }],
        30: [function(e, t, n) {
            t.exports = function(e, t, n) {
                try {
                    ! function(e) {
                        var t = document.createElement("textarea");
                        t.value = e, t.style.opacity = 0, t.style.position = "absolute", document.body.appendChild(t), t.select();
                        var n = document.execCommand("copy");
                        if (document.body.removeChild(t), !n) throw new Error("Unsuccessfull")
                    }(e), t()
                } catch (e) {
                    n(e)
                }
            }
        }, {}],
        31: [function(e, t, n) {
            "use strict";
            var i = e("extend-object"),
                r = e("is-function"),
                o = e("bean"),
                a = e("./ext/ui/slider"),
                s = e("./ext/ui/bar-slider"),
                l = e("./common"),
                u = e("./ext/events"),
                c = [],
                f = [],
                d = window.onbeforeunload;
            window.onbeforeunload = function(e) {
                if (c.forEach(function(e) {
                        e.conf.splash ? e.unload() : e.bind("error", function() {
                            l.find(".flowplayer.is-error .fp-message").forEach(l.removeNode)
                        })
                    }), d) return d(e)
            };
            var p = /Safari/.exec(navigator.userAgent) && !/Chrome/.exec(navigator.userAgent),
                h = /(\d+\.\d+) Safari/.exec(navigator.userAgent),
                g = h ? Number(h[1]) : 100,
                m = t.exports = function(e, t, n) {
                    if (r(e)) return f.push(e);
                    if ("number" == typeof e || void 0 === e) return c[e || 0];
                    if (e.nodeType) {
                        if (null !== e.getAttribute("data-flowplayer-instance-id")) return c[e.getAttribute("data-flowplayer-instance-id")];
                        if (!t) return;
                        return b(e, t, n)
                    }
                    if (e.jquery) return m(e[0], t, n);
                    if ("string" == typeof e) {
                        var i = l.find(e)[0];
                        return i && m(i, t, n)
                    }
                };
            i(m, {
                version: "7.2.5",
                engines: [],
                engine: function(e) {
                    return m.engines.filter(function(t) {
                        return t.engineName === e
                    })[0]
                },
                extensions: [],
                conf: {},
                set: function(e, t) {
                    "string" == typeof e ? m.conf[e] = t : i(m.conf, e)
                },
                registerExtension: function(e, t) {
                    m.extensions.push([e, t])
                },
                support: {},
                defaults: {
                    debug: !1,
                    disabled: !1,
                    fullscreen: window == window.top,
                    keyboard: !0,
                    ratio: 9 / 16,
                    adaptiveRatio: !1,
                    rtmp: 0,
                    proxy: "best",
                    hlsQualities: !0,
                    seekStep: !1,
                    splash: !1,
                    live: !1,
                    livePositionOffset: 120,
                    swf: "//releases.flowplayer.org/7.2.5/flowplayer.swf",
                    swfHls: "//releases.flowplayer.org/7.2.5/flowplayerhls.swf",
                    speeds: [.25, .5, 1, 1.5, 2],
                    tooltip: !0,
                    mouseoutTimeout: 5e3,
                    mutedAutoplay: !0,
                    clickToUnMute: !0,
                    volume: 1,
                    errors: ["", "Video loading aborted", "Network error", "Video not properly encoded", "Video file not found", "Unsupported video", "Skin not found", "SWF file not found", "Subtitles not found", "Invalid RTMP URL", "Unsupported video format. Try installing Adobe Flash."],
                    errorUrls: ["", "", "", "", "", "", "", "", "", "", "http://get.adobe.com/flashplayer/"],
                    playlist: [],
                    hlsFix: p && g < 8,
                    disableInline: !1
                },
                bean: o,
                common: l,
                slider: a,
                barSlider: s,
                extend: i
            });
            var v = 0,
                y = e("./ext/resolve");
            if (void 0 !== window.jQuery) {
                var w = window.jQuery;
                w(function() {
                    "function" == typeof w.fn.flowplayer && w('.flowplayer:has(video:not(.fp-engine),script[type="application/json"])').flowplayer()
                });
                w.fn.flowplayer = function(e, t) {
                    return this.each(function() {
                        "string" == typeof e && (e = {
                            swf: e
                        }), r(e) && (t = e, e = {});
                        var n = w(this),
                            o = n.find('script[type="application/json"]'),
                            a = o.length ? JSON.parse(o.text()) : function(e) {
                                if (!e.length) return {};
                                var t = e.data() || {},
                                    n = {};
                                return w.each(["autoplay", "loop", "preload", "poster"], function(i, r) {
                                    var o = e.attr(r);
                                    void 0 !== o && -1 !== ["autoplay", "poster"].indexOf(r) ? n[r] = o || !0 : void 0 !== o && (t[r] = o || !0)
                                }), e[0].autoplay = e[0].preload = !1, t.subtitles = e.find("track").map(function() {
                                    var e = w(this);
                                    return {
                                        src: e.attr("src"),
                                        kind: e.attr("kind"),
                                        label: e.attr("label"),
                                        srclang: e.attr("srclang"),
                                        default: e.prop("default")
                                    }
                                }).get(), t.sources = (new y).sourcesFromVideoTag(e, w), i(n, {
                                    clip: t
                                })
                            }(n.find("video")),
                            s = b(this, w.extend({}, e || {}, a, n.data()), t);
                        u.EVENTS.forEach(function(e) {
                            s.on(e + ".jquery", function(e) {
                                n.trigger.call(n, e.type, e.detail && e.detail.args)
                            })
                        }), n.data("flowplayer", s)
                    })
                }
            }

            function b(e, t, n) {
                t && t.embed && (t.embed = i({}, m.defaults.embed, t.embed));
                var a = !1;
                try {
                    void 0 === m.conf.storage && "object" == typeof window.localStorage && (window.localStorage.flowplayerTestStorage = "test", a = !0)
                } catch (e) {}
                var s, d, p = e,
                    h = i({}, m.defaults, m.conf, t),
                    g = {},
                    w = p.className,
                    b = new y;
                l.addClass(p, "is-loading"), l.toggleClass(p, "no-flex", !m.support.flex), l.toggleClass(p, "no-svg", !m.support.svg);
                try {
                    g = m.conf.storage || (a ? window.localStorage : g)
                } catch (e) {}
                if (h.volume = "true" === g.muted ? 0 : h.volume !== m.defaults.volume ? h.volume : isNaN(g.volume) ? h.volume : g.volume, h.debug = !!g.flowplayerDebug || h.debug, h.aspectRatio && "string" == typeof h.aspectRatio) {
                    var I = h.aspectRatio.split(/[:\/]/);
                    h.ratio = I[1] / I[0]
                }
                var M = p.currentStyle && "rtl" === p.currentStyle.direction || window.getComputedStyle && null !== window.getComputedStyle(p, null) && "rtl" === window.getComputedStyle(p, null).getPropertyValue("direction");
                M && l.addClass(p, "is-rtl");
                var C = {
                    conf: h,
                    currentSpeed: 1,
                    volumeLevel: h.muted ? 0 : void 0 === h.volume ? 1 * g.volume : h.volume,
                    video: {},
                    disabled: !1,
                    finished: !1,
                    loading: !1,
                    muted: "true" == g.muted || h.muted,
                    paused: !1,
                    playing: !1,
                    ready: !1,
                    splash: !1,
                    rtl: M,
                    hijack: function(e) {
                        try {
                            C.engine.suspendEngine()
                        } catch (e) {}
                        C.hijacked = e
                    },
                    release: function() {
                        try {
                            C.engine.resumeEngine()
                        } catch (e) {}
                        C.hijacked = !1
                    },
                    debug: function() {
                        h.debug && console.log.apply(console, ["DEBUG"].concat([].slice.call(arguments)))
                    },
                    load: function(e, t) {
                        if (!C.error && !C.loading) {
                            C.video = {}, C.finished = !1, e = e || h.clip, e = i({}, b.resolve(e, h.clip.sources)), (C.playing || C.engine) && (e.autoplay = !0);
                            var n = A(e);
                            if (!n) return setTimeout(function() {
                                C.trigger("error", [C, {
                                    code: m.support.flashVideo ? 5 : 10
                                }])
                            }) && C;
                            if (!n.engineName) throw new Error("engineName property of factory should be exposed");
                            if (C.engine && n.engineName === C.engine.engineName || (C.ready = !1, C.engine && (C.engine.unload(), C.conf.autoplay = !0), d = C.engine = n(C, p), C.one("ready", function() {
                                    setTimeout(function() {
                                        C.muted ? C.mute(!0, !0) : d.volume(C.volumeLevel)
                                    })
                                })), i(e, d.pick(e.sources.filter(function(e) {
                                    return !e.engine || e.engine === d.engineName
                                }))), e.src) C.trigger("load", [C, e, d], !0).defaultPrevented ? C.loading = !1 : (C.ready = !1, d.load(e), r(e) && (t = e), t && C.one("ready", t));
                            return C
                        }
                    },
                    pause: function(e) {
                        return C.hijacked ? C.hijacked.pause(e) | C : (!C.ready || C.seeking || C.loading || (d.pause(), C.one("pause", e)), C)
                    },
                    resume: function() {
                        if (!C.trigger("beforeresume", [C], !0).defaultPrevented) return C.hijacked ? C.hijacked.resume() | C : (C.ready && C.paused && (d.resume(), C.finished && (C.trigger("resume", [C]), C.finished = !1)), C)
                    },
                    toggle: function() {
                        return C.ready ? C.paused ? C.resume() : C.pause() : C.load()
                    },
                    seek: function(e, t) {
                        if ("boolean" == typeof e) {
                            var n = C.conf.seekStep || .1 * C.video.duration;
                            e = C.video.time + (e ? n : -n), e = Math.min(Math.max(e, 0), C.video.duration - .1)
                        }
                        if (void 0 === e) return C;
                        if (C.hijacked) return C.hijacked.seek(e, t) | C;
                        C.ready && (s = e, C.trigger("beforeseek", [C, e], !0).defaultPrevented ? (C.seeking = !1, l.toggleClass(p, "is-seeking", C.seeking)) : (d.seek(e), r(t) && C.one("seek", t)));
                        return C
                    },
                    seekTo: function(e, t) {
                        return void 0 === e ? C.seek(s, t) : void 0 !== C.video.seekOffset ? C.seek(C.video.seekOffset + .1 * (C.video.duration - C.video.seekOffset) * e, t) : C.seek(.1 * C.video.duration * e, t)
                    },
                    mute: function(e, t) {
                        return void 0 === e && (e = !C.muted), C.muted = e, t || (g.muted = e, g.volume = isNaN(g.volume) ? h.volume : g.volume), void 0 !== d.mute ? d.mute(e) : (C.volume(e ? 0 : g.volume, !0), C.trigger("mute", [C, e])), C
                    },
                    volume: function(e, t) {
                        return C.ready && (e = Math.min(Math.max(e, 0), 1), t || (g.volume = e), d.volume(e)), C
                    },
                    speed: function(e, t) {
                        return C.ready && ("boolean" == typeof e && (e = h.speeds[h.speeds.indexOf(C.currentSpeed) + (e ? 1 : -1)] || C.currentSpeed), d.speed(e), t && p.one("speed", t)), C
                    },
                    stop: function() {
                        return C.ready && (C.pause(), !C.live || C.dvr ? C.seek(0, function() {
                            C.trigger("stop", [C])
                        }) : C.trigger("stop", [C])), C
                    },
                    unload: function() {
                        return h.splash ? (C.trigger("unload", [C]), d && (d.unload(), C.engine = d = 0)) : C.stop(), C
                    },
                    shutdown: function() {
                        C.unload(), C.trigger("shutdown", [C]), o.off(p), delete c[p.getAttribute("data-flowplayer-instance-id")], p.removeAttribute("data-flowplayer-instance-id")
                    },
                    disable: function(e) {
                        return void 0 === e && (e = !C.disabled), e != C.disabled && (C.disabled = e, C.trigger("disable", e)), C
                    },
                    registerExtension: function(e, t) {
                        "string" == typeof(e = e || []) && (e = [e]), "string" == typeof(t = t || []) && (t = [t]), e.forEach(function(e) {
                            C.extensions.js.push(e)
                        }), t.forEach(function(e) {
                            C.extensions.css.push(e)
                        })
                    }
                };
                C.conf = i(C.conf, h), C.extensions = {
                    js: [],
                    css: []
                }, m.extensions.forEach(function(e) {
                    C.registerExtension(e[0], e[1])
                }), u(C);
                var A = function(e) {
                    var t, n = m.engines;
                    if (h.engine) {
                        var i = n.filter(function(e) {
                            return e.engineName === h.engine
                        })[0];
                        if (i && e.sources.some(function(e) {
                                return (!e.engine || e.engine === i.engineName) && i.canPlay(e.type, C.conf)
                            })) return i
                    }
                    return h.enginePreference && (n = m.engines.filter(function(e) {
                        return h.enginePreference.indexOf(e.engineName) > -1
                    }).sort(function(e, t) {
                        return h.enginePreference.indexOf(e.engineName) - h.enginePreference.indexOf(t.engineName)
                    })), e.sources.some(function(e) {
                        var i = n.filter(function(t) {
                            return (!e.engine || e.engine === t.engineName) && t.canPlay(e.type, C.conf)
                        }).shift();
                        return i && (t = i), !!i
                    }), t
                };
                return p.getAttribute("data-flowplayer-instance-id") || (p.setAttribute("data-flowplayer-instance-id", v++), C.on("boot", function() {
                    var e = m.support;
                    (h.splash || l.hasClass(p, "is-splash") || !e.firstframe) && (C.forcedSplash = !h.splash && !l.hasClass(p, "is-splash"), C.splash = !0, h.splash || (h.splash = !0), l.addClass(p, "is-splash")), h.splash && l.find("video", p).forEach(l.removeNode), (h.dvr || h.live || l.hasClass(p, "is-live")) && (C.live = h.live = !0, C.dvr = h.dvr = !!h.dvr || l.hasClass(p, "is-dvr"), l.addClass(p, "is-live"), l.toggleClass(p, "is-dvr", C.dvr)), f.forEach(function(e) {
                        e(C, p)
                    }), c.push(C), h.splash ? C.unload() : C.load(), h.disabled && C.disable(), C.one("ready", n), C.one("shutdown", function() {
                        p.className = w
                    })
                }).on("load", function(e, t, n) {
                    h.splash && l.find(".flowplayer.is-ready,.flowplayer.is-loading").forEach(function(e) {
                        var t = e.getAttribute("data-flowplayer-instance-id");
                        if (t !== p.getAttribute("data-flowplayer-instance-id")) {
                            var n = c[Number(t)];
                            n && n.conf.splash && n.unload()
                        }
                    }), l.addClass(p, "is-loading"), t.loading = !0, void 0 === n.live && void 0 === n.dvr || (l.toggleClass(p, "is-live", n.dvr || n.live), l.toggleClass(p, "is-dvr", !!n.dvr), t.live = n.dvr || n.live, t.dvr = !!n.dvr)
                }).on("ready", function(e, t, n) {
                    n.time = 0, t.video = n, l.removeClass(p, "is-loading"), t.loading = !1, t.muted ? t.mute(!0, !0) : t.volume(t.volumeLevel);
                    var i = t.conf.hlsFix && /mpegurl/i.exec(n.type);
                    l.toggleClass(p, "hls-fix", !!i)
                }).on("unload", function() {
                    l.removeClass(p, "is-loading"), C.loading = !1
                }).on("ready unload", function(e) {
                    var t = "ready" == e.type;
                    l.toggleClass(p, "is-splash", !t), l.toggleClass(p, "is-ready", t), C.ready = t, C.splash = !t
                }).on("progress", function(e, t, n) {
                    t.video.time = n
                }).on("buffer", function(e, t, n) {
                    t.video.buffer = "number" == typeof n ? n : n.length ? n[n.length - 1].end : 0
                }).on("speed", function(e, t, n) {
                    t.currentSpeed = n
                }).on("volume", function(e, t, n) {
                    t.volumeLevel = Math.round(100 * n) / 100, t.muted && n && t.mute(!1)
                }).on("beforeseek seek", function(e) {
                    C.seeking = "beforeseek" == e.type, l.toggleClass(p, "is-seeking", C.seeking)
                }).on("ready pause resume unload finish stop", function(e) {
                    C.paused = /pause|finish|unload|stop/.test(e.type), C.paused = C.paused || "ready" === e.type && !h.autoplay && !C.playing, C.playing = !C.paused, l.toggleClass(p, "is-paused", C.paused), l.toggleClass(p, "is-playing", C.playing), C.load.ed || C.pause()
                }).on("finish", function() {
                    C.finished = !0
                }).on("error", function() {})), C.trigger("boot", [C, p]), C
            }
        }, {
            "./common": 1,
            "./ext/events": 12,
            "./ext/resolve": 21,
            "./ext/ui/bar-slider": 28,
            "./ext/ui/slider": 29,
            bean: 34,
            "extend-object": 39,
            "is-function": 42
        }],
        32: [function(e, t, n) {
            e("es5-shim");
            var i = t.exports = e("./flowplayer");
            e("./ext/support"), e("./engine/embed"), e("./engine/hlsjs"), e("./engine/html5"), e("./engine/flash"), e("./ext/ui"), e("./ext/message"), e("./ext/keyboard"), e("./ext/playlist"), e("./ext/cuepoint"), e("./ext/subtitle"), e("./ext/analytics"), e("./ext/share"), e("./ext/facebook"), e("./ext/twitter"), e("./ext/embed"), e("./ext/airplay"), e("./ext/chromecast"), e("./ext/qsel"), e("./ext/menu"), e("./ext/fullscreen"), e("./ext/mobile"), i(function(e, t) {
                var n, r, o, a, s = e.conf,
                    l = i.common,
                    u = l.createElement,
                    c = s.swf.indexOf("flowplayer.org") && s.e && t.getAttribute("data-origin"),
                    f = c ? (n = c, (r = document.createElement("a")).href = n, l.hostname(r.hostname)) : l.hostname(),
                    d = (document, s.key);
                if ("file:" == location.protocol && (f = "localhost"), e.load.ed = 1, s.hostname = f, s.origin = c || location.href, c && (a = "is-embedded", -1 === (o = t).className.split(" ").indexOf(a) && (o.className += " " + a)), "string" == typeof d && (d = d.split(/,\s*/)), d && "function" == typeof key_check && key_check(d, f)) {
                    if (s.logo) {
                        var p = l.find(".fp-player", t)[0],
                            h = s.logo.href || "",
                            g = s.logo.src || s.logo,
                            m = u("a", {
                                className: "fp-logo",
                                href: h
                            });
                        c && (m.href = m.href || c), s.embed && s.embed.popup && (m.target = "_blank");
                        var v = u("img", {
                            src: g
                        });
                        m.appendChild(v), (p || t).appendChild(m)
                    }
                } else {
                    m = u("a", {});
                    ((p = l.find(".fp-player", t)[0]) || t).appendChild(m);
                    var y = u("div", {
                            className: "fp-context-menu fp-menu"
                        }, '<strong>&copy; 2018 Arabkids TV</strong>'),
                        w = window.location.href.indexOf("localhost");
                    7 !== w && (p || t).appendChild(y), e.on("pause resume finish unload ready", function(e, n) {
                        var i, r = -1;
                        if (n.video.src)
                            for (var o = [
                                    ["org", "flowplayer", "drive"],
                                    ["org", "flowplayer", "my"],
                                    ["org", "flowplayer", "cdn"],
                                    ["com", "flowplayer", "cdn"]
                                ], a = 0; a < o.length && -1 === (r = n.video.src.indexOf("://" + o[a].reverse().join("."))); a++);
                        if (/pause|resume/.test(e.type) && "flash" != n.engine.engineName && 4 != r && 5 != r) {
                            var s = {};
                            for (var l in s) s.hasOwnProperty(l) && (m.style[l] = s[l]);
                            n.load.ed = (i = m, "none" !== window.getComputedStyle(i).display && (7 === w || y.parentNode == t || y.parentNode == p)), n.load.ed || n.pause()
                        } else m.style.display = "none"
                    })
                }
            })
        }, {
            "./engine/embed": 2,
            "./engine/flash": 3,
            "./engine/hlsjs": 4,
            "./engine/html5": 6,
            "./ext/airplay": 7,
            "./ext/analytics": 8,
            "./ext/chromecast": 9,
            "./ext/cuepoint": 10,
            "./ext/embed": 11,
            "./ext/facebook": 13,
            "./ext/fullscreen": 14,
            "./ext/keyboard": 15,
            "./ext/menu": 16,
            "./ext/message": 17,
            "./ext/mobile": 18,
            "./ext/playlist": 19,
            "./ext/qsel": 20,
            "./ext/share": 22,
            "./ext/subtitle": 23,
            "./ext/support": 25,
            "./ext/twitter": 26,
            "./ext/ui": 27,
            "./flowplayer": 31,
            "es5-shim": 38
        }],
        33: [function(e, t, n) {
            "use strict";
            n.byteLength = function(e) {
                return 3 * e.length / 4 - u(e)
            }, n.toByteArray = function(e) {
                var t, n, i, a, s, l = e.length;
                a = u(e), s = new o(3 * l / 4 - a), n = a > 0 ? l - 4 : l;
                var c = 0;
                for (t = 0; t < n; t += 4) i = r[e.charCodeAt(t)] << 18 | r[e.charCodeAt(t + 1)] << 12 | r[e.charCodeAt(t + 2)] << 6 | r[e.charCodeAt(t + 3)], s[c++] = i >> 16 & 255, s[c++] = i >> 8 & 255, s[c++] = 255 & i;
                2 === a ? (i = r[e.charCodeAt(t)] << 2 | r[e.charCodeAt(t + 1)] >> 4, s[c++] = 255 & i) : 1 === a && (i = r[e.charCodeAt(t)] << 10 | r[e.charCodeAt(t + 1)] << 4 | r[e.charCodeAt(t + 2)] >> 2, s[c++] = i >> 8 & 255, s[c++] = 255 & i);
                return s
            }, n.fromByteArray = function(e) {
                for (var t, n = e.length, r = n % 3, o = "", a = [], s = 0, l = n - r; s < l; s += 16383) a.push(c(e, s, s + 16383 > l ? l : s + 16383));
                1 === r ? (t = e[n - 1], o += i[t >> 2], o += i[t << 4 & 63], o += "==") : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], o += i[t >> 10], o += i[t >> 4 & 63], o += i[t << 2 & 63], o += "=");
                return a.push(o), a.join("")
            };
            for (var i = [], r = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, l = a.length; s < l; ++s) i[s] = a[s], r[a.charCodeAt(s)] = s;

            function u(e) {
                var t = e.length;
                if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
            }

            function c(e, t, n) {
                for (var r, o, a = [], s = t; s < n; s += 3) r = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(i[(o = r) >> 18 & 63] + i[o >> 12 & 63] + i[o >> 6 & 63] + i[63 & o]);
                return a.join("")
            }
            r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
        }, {}],
        34: [function(e, t, n) {
            var i, r;
            i = this, r = function(e, t) {
                e = e || "bean", t = t || this;
                var n, i, r, o, a, s, l, u, c, f, d, p, h, g, m, v, y, w, b, I = window,
                    M = t[e],
                    C = /[^\.]*(?=\..*)\.|.*/,
                    A = /\..*/,
                    S = "addEventListener",
                    E = document || {},
                    D = E.documentElement || {},
                    N = D[S],
                    j = N ? S : "attachEvent",
                    L = {},
                    x = Array.prototype.slice,
                    T = function(e, t) {
                        return e.split(t || " ")
                    },
                    Z = function(e) {
                        return "string" == typeof e
                    },
                    P = function(e) {
                        return "function" == typeof e
                    },
                    k = function(e, t, n) {
                        for (n = 0; n < t.length; n++) t[n] && (e[t[n]] = 1);
                        return e
                    }({}, T("click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange message error abort scroll " + (N ? "show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend textinput readystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete " : ""))),
                    Y = (w = "compareDocumentPosition" in D ? function(e, t) {
                        return t.compareDocumentPosition && 16 == (16 & t.compareDocumentPosition(e))
                    } : "contains" in D ? function(e, t) {
                        return (t = 9 === t.nodeType || t === window ? D : t) !== e && t.contains(e)
                    } : function(e, t) {
                        for (; e = e.parentNode;)
                            if (e === t) return 1;
                        return 0
                    }, {
                        mouseenter: {
                            base: "mouseover",
                            condition: b = function(e) {
                                var t = e.relatedTarget;
                                return t ? t !== this && "xul" !== t.prefix && !/document/.test(this.toString()) && !w(t, this) : null == t
                            }
                        },
                        mouseleave: {
                            base: "mouseout",
                            condition: b
                        },
                        mousewheel: {
                            base: /Firefox/.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel"
                        }
                    }),
                    z = (s = T("altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which propertyName"), l = s.concat(T("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement")), u = l.concat(T("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis")), c = s.concat(T("char charCode key keyCode keyIdentifier keyLocation location")), f = s.concat(T("data")), d = s.concat(T("touches targetTouches changedTouches scale rotation")), p = s.concat(T("data origin source")), h = s.concat(T("state")), g = /over|out/, m = [{
                        reg: /key/i,
                        fix: function(e, t) {
                            return t.keyCode = e.keyCode || e.which, c
                        }
                    }, {
                        reg: /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,
                        fix: function(e, t, n) {
                            return t.rightClick = 3 === e.which || 2 === e.button, t.pos = {
                                x: 0,
                                y: 0
                            }, e.pageX || e.pageY ? (t.clientX = e.pageX, t.clientY = e.pageY) : (e.clientX || e.clientY) && (t.clientX = e.clientX + E.body.scrollLeft + D.scrollLeft, t.clientY = e.clientY + E.body.scrollTop + D.scrollTop), g.test(n) && (t.relatedTarget = e.relatedTarget || e[("mouseover" == n ? "from" : "to") + "Element"]), l
                        }
                    }, {
                        reg: /mouse.*(wheel|scroll)/i,
                        fix: function() {
                            return u
                        }
                    }, {
                        reg: /^text/i,
                        fix: function() {
                            return f
                        }
                    }, {
                        reg: /^touch|^gesture/i,
                        fix: function() {
                            return d
                        }
                    }, {
                        reg: /^message$/i,
                        fix: function() {
                            return p
                        }
                    }, {
                        reg: /^popstate$/i,
                        fix: function() {
                            return h
                        }
                    }, {
                        reg: /.*/,
                        fix: function() {
                            return s
                        }
                    }], v = {}, (y = function(e, t, n) {
                        if (arguments.length && (e = e || ((t.ownerDocument || t.document || t).parentWindow || I).event, this.originalEvent = e, this.isNative = n, this.isBean = !0, e)) {
                            var i, r, o, a, s, l = e.type,
                                u = e.target || e.srcElement;
                            if (this.target = u && 3 === u.nodeType ? u.parentNode : u, n) {
                                if (!(s = v[l]))
                                    for (i = 0, r = m.length; i < r; i++)
                                        if (m[i].reg.test(l)) {
                                            v[l] = s = m[i].fix;
                                            break
                                        }
                                for (i = (a = s(e, this, l)).length; i--;) !((o = a[i]) in this) && o in e && (this[o] = e[o])
                            }
                        }
                    }).prototype.preventDefault = function() {
                        this.originalEvent.preventDefault ? this.originalEvent.preventDefault() : this.originalEvent.returnValue = !1
                    }, y.prototype.stopPropagation = function() {
                        this.originalEvent.stopPropagation ? this.originalEvent.stopPropagation() : this.originalEvent.cancelBubble = !0
                    }, y.prototype.stop = function() {
                        this.preventDefault(), this.stopPropagation(), this.stopped = !0
                    }, y.prototype.stopImmediatePropagation = function() {
                        this.originalEvent.stopImmediatePropagation && this.originalEvent.stopImmediatePropagation(), this.isImmediatePropagationStopped = function() {
                            return !0
                        }
                    }, y.prototype.isImmediatePropagationStopped = function() {
                        return this.originalEvent.isImmediatePropagationStopped && this.originalEvent.isImmediatePropagationStopped()
                    }, y.prototype.clone = function(e) {
                        var t = new y(this, this.element, this.isNative);
                        return t.currentTarget = e, t
                    }, y),
                    G = function(e, t) {
                        return N || t || e !== E && e !== I ? e : D
                    },
                    R = (o = function(e, t, n, i) {
                        var r = function(n, r) {
                                return t.apply(e, i ? x.call(r, n ? 0 : 1).concat(i) : r)
                            },
                            o = function(n, i) {
                                return t.__beanDel ? t.__beanDel.ft(n.target, e) : i
                            },
                            a = n ? function(e) {
                                var t = o(e, this);
                                if (n.apply(t, arguments)) return e && (e.currentTarget = t), r(e, arguments)
                            } : function(e) {
                                return t.__beanDel && (e = e.clone(o(e))), r(e, arguments)
                            };
                        return a.__beanDel = t.__beanDel, a
                    }, (a = function(e, t, n, i, r, a, s) {
                        var l, u = Y[t];
                        "unload" == t && (n = B(F, e, t, n, i)), u && (u.condition && (n = o(e, n, u.condition, a)), t = u.base || t), this.isNative = l = k[t] && !!e[j], this.customType = !N && !l && t, this.element = e, this.type = t, this.original = i, this.namespaces = r, this.eventType = N || l ? t : "propertychange", this.target = G(e, l), this[j] = !!this.target[j], this.root = s, this.handler = o(e, n, null, a)
                    }).prototype.inNamespaces = function(e) {
                        var t, n, i = 0;
                        if (!e) return !0;
                        if (!this.namespaces) return !1;
                        for (t = e.length; t--;)
                            for (n = this.namespaces.length; n--;) e[t] == this.namespaces[n] && i++;
                        return e.length === i
                    }, a.prototype.matches = function(e, t, n) {
                        return !(this.element !== e || t && this.original !== t || n && this.handler !== n)
                    }, a),
                    O = (i = {}, r = function(e, t, n, o, a, s) {
                        var l = a ? "r" : "$";
                        if (t && "*" != t) {
                            var u, c = 0,
                                f = i[l + t],
                                d = "*" == e;
                            if (!f) return;
                            for (u = f.length; c < u; c++)
                                if ((d || f[c].matches(e, n, o)) && !s(f[c], f, c, t)) return
                        } else
                            for (var p in i) p.charAt(0) == l && r(e, p.substr(1), n, o, a, s)
                    }, {
                        has: function(e, t, n, r) {
                            var o, a = i[(r ? "r" : "$") + t];
                            if (a)
                                for (o = a.length; o--;)
                                    if (!a[o].root && a[o].matches(e, n, null)) return !0;
                            return !1
                        },
                        get: function(e, t, n, i) {
                            var o = [];
                            return r(e, t, n, null, i, function(e) {
                                return o.push(e)
                            }), o
                        },
                        put: function(e) {
                            var t = !e.root && !this.has(e.element, e.type, null, !1),
                                n = (e.root ? "r" : "$") + e.type;
                            return (i[n] || (i[n] = [])).push(e), t
                        },
                        del: function(e) {
                            r(e.element, e.type, null, e.handler, e.root, function(e, t, n) {
                                return t.splice(n, 1), e.removed = !0, 0 === t.length && delete i[(e.root ? "r" : "$") + e.type], !1
                            })
                        },
                        entries: function() {
                            var e, t = [];
                            for (e in i) "$" == e.charAt(0) && (t = t.concat(i[e]));
                            return t
                        }
                    }),
                    W = function(e) {
                        n = arguments.length ? e : E.querySelectorAll ? function(e, t) {
                            return t.querySelectorAll(e)
                        } : function() {
                            throw new Error("Bean: No selector engine installed")
                        }
                    },
                    U = function(e, t) {
                        if (N || !t || !e || e.propertyName == "_on" + t) {
                            var n = O.get(this, t || e.type, null, !1),
                                i = n.length,
                                r = 0;
                            for (e = new z(e, this, !0), t && (e.type = t); r < i && !e.isImmediatePropagationStopped(); r++) n[r].removed || n[r].handler.call(this, e)
                        }
                    },
                    J = N ? function(e, t, n) {
                        e[n ? S : "removeEventListener"](t, U, !1)
                    } : function(e, t, n, i) {
                        var r;
                        n ? (O.put(r = new R(e, i || t, function(t) {
                            U.call(e, t, i)
                        }, U, null, null, !0)), i && null == e["_on" + i] && (e["_on" + i] = 0), r.target.attachEvent("on" + r.eventType, r.handler)) : (r = O.get(e, i || t, U, !0)[0]) && (r.target.detachEvent("on" + r.eventType, r.handler), O.del(r))
                    },
                    B = function(e, t, n, i, r) {
                        return function() {
                            i.apply(this, arguments), e(t, n, r)
                        }
                    },
                    F = function(e, t, n, i) {
                        var r, o, a = t && t.replace(A, ""),
                            s = O.get(e, a, null, !1),
                            l = {};
                        for (r = 0, o = s.length; r < o; r++) n && s[r].original !== n || !s[r].inNamespaces(i) || (O.del(s[r]), !l[s[r].eventType] && s[r][j] && (l[s[r].eventType] = {
                            t: s[r].eventType,
                            c: s[r].type
                        }));
                        for (r in l) O.has(e, l[r].t, null, !1) || J(e, l[r].t, !1, l[r].c)
                    },
                    H = N ? function(e, t, n) {
                        var i = E.createEvent(e ? "HTMLEvents" : "UIEvents");
                        i[e ? "initEvent" : "initUIEvent"](t, !0, !0, I, 1), n.dispatchEvent(i)
                    } : function(e, t, n) {
                        n = G(n, e), e ? n.fireEvent("on" + t, E.createEventObject()) : n["_on" + t]++
                    },
                    V = function(e, t, n) {
                        var i, r, o, a, s = Z(t);
                        if (s && t.indexOf(" ") > 0) {
                            for (a = (t = T(t)).length; a--;) V(e, t[a], n);
                            return e
                        }
                        if ((r = s && t.replace(A, "")) && Y[r] && (r = Y[r].base), !t || s)(o = s && t.replace(C, "")) && (o = T(o, ".")), F(e, r, n, o);
                        else if (P(t)) F(e, null, t);
                        else
                            for (i in t) t.hasOwnProperty(i) && V(e, i, t[i]);
                        return e
                    },
                    X = function(e, t, i, r) {
                        var o, a, s, l, u, c, f;
                        if (void 0 !== i || "object" != typeof t) {
                            var d, p, h, g;
                            for (P(i) ? (u = x.call(arguments, 3), r = o = i) : (o = r, u = x.call(arguments, 4), p = o, (g = function(e) {
                                    var t = h(e.target, this);
                                    t && p.apply(t, arguments)
                                }).__beanDel = {
                                    ft: h = function(e, t) {
                                        for (var i, r = Z(d) ? n(d, t) : d; e && e !== t; e = e.parentNode)
                                            for (i = r.length; i--;)
                                                if (r[i] === e) return e
                                    },
                                    selector: d = i
                                }, r = g), s = T(t), this === L && (r = B(V, e, t, r, o)), l = s.length; l--;) f = O.put(c = new R(e, s[l].replace(A, ""), r, o, T(s[l].replace(C, ""), "."), u, !1)), c[j] && f && J(e, c.eventType, !0, c.customType);
                            return e
                        }
                        for (a in t) t.hasOwnProperty(a) && X.call(this, e, a, t[a])
                    },
                    _ = {
                        on: X,
                        add: function(e, t, n, i) {
                            return X.apply(null, Z(n) ? [e, n, t, i].concat(arguments.length > 3 ? x.call(arguments, 5) : []) : x.call(arguments))
                        },
                        one: function() {
                            return X.apply(L, arguments)
                        },
                        off: V,
                        remove: V,
                        clone: function(e, t, n) {
                            for (var i, r, o = O.get(t, n, null, !1), a = o.length, s = 0; s < a; s++) o[s].original && (i = [e, o[s].type], (r = o[s].handler.__beanDel) && i.push(r.selector), i.push(o[s].original), X.apply(null, i));
                            return e
                        },
                        fire: function(e, t, n) {
                            var i, r, o, a, s, l = T(t);
                            for (i = l.length; i--;)
                                if (t = l[i].replace(A, ""), (a = l[i].replace(C, "")) && (a = T(a, ".")), a || n || !e[j])
                                    for (s = O.get(e, t, null, !1), n = [!1].concat(n), r = 0, o = s.length; r < o; r++) s[r].inNamespaces(a) && s[r].handler.apply(e, n);
                                else H(k[t], t, e);
                            return e
                        },
                        Event: z,
                        setSelectorEngine: W,
                        noConflict: function() {
                            return t[e] = M, this
                        }
                    };
                if (I.attachEvent) {
                    var K = function() {
                        var e, t = O.entries();
                        for (e in t) t[e].type && "unload" !== t[e].type && V(t[e].element, t[e].type);
                        I.detachEvent("onunload", K), I.CollectGarbage && I.CollectGarbage()
                    };
                    I.attachEvent("onunload", K)
                }
                return W(), _
            }, void 0 !== t && t.exports ? t.exports = r() : i.bean = r()
        }, {}],
        35: [function(e, t, n) {
            (function(t) {
                "use strict";
                var i = e("base64-js"),
                    r = e("ieee754"),
                    o = e("isarray");

                function a() {
                    return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }

                function s(e, t) {
                    if (a() < t) throw new RangeError("Invalid typed array length");
                    return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)), e.length = t), e
                }

                function l(e, t, n) {
                    if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(e, t, n);
                    if ("number" == typeof e) {
                        if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                        return f(this, e)
                    }
                    return u(this, e, t, n)
                }

                function u(e, t, n, i) {
                    if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, i) {
                        if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                        if (t.byteLength < n + (i || 0)) throw new RangeError("'length' is out of bounds");
                        t = void 0 === n && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t, n) : new Uint8Array(t, n, i);
                        l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = d(e, t);
                        return e
                    }(e, t, n, i) : "string" == typeof t ? function(e, t, n) {
                        "string" == typeof n && "" !== n || (n = "utf8");
                        if (!l.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                        var i = 0 | h(t, n),
                            r = (e = s(e, i)).write(t, n);
                        r !== i && (e = e.slice(0, r));
                        return e
                    }(e, t, n) : function(e, t) {
                        if (l.isBuffer(t)) {
                            var n = 0 | p(t.length);
                            return 0 === (e = s(e, n)).length ? e : (t.copy(e, 0, 0, n), e)
                        }
                        if (t) {
                            if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (i = t.length) != i ? s(e, 0) : d(e, t);
                            if ("Buffer" === t.type && o(t.data)) return d(e, t.data)
                        }
                        var i;
                        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(e, t)
                }

                function c(e) {
                    if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                    if (e < 0) throw new RangeError('"size" argument must not be negative')
                }

                function f(e, t) {
                    if (c(t), e = s(e, t < 0 ? 0 : 0 | p(t)), !l.TYPED_ARRAY_SUPPORT)
                        for (var n = 0; n < t; ++n) e[n] = 0;
                    return e
                }

                function d(e, t) {
                    var n = t.length < 0 ? 0 : 0 | p(t.length);
                    e = s(e, n);
                    for (var i = 0; i < n; i += 1) e[i] = 255 & t[i];
                    return e
                }

                function p(e) {
                    if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                    return 0 | e
                }

                function h(e, t) {
                    if (l.isBuffer(e)) return e.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                    "string" != typeof e && (e = "" + e);
                    var n = e.length;
                    if (0 === n) return 0;
                    for (var i = !1;;) switch (t) {
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return n;
                        case "utf8":
                        case "utf-8":
                        case void 0:
                            return Y(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return 2 * n;
                        case "hex":
                            return n >>> 1;
                        case "base64":
                            return z(e).length;
                        default:
                            if (i) return Y(e).length;
                            t = ("" + t).toLowerCase(), i = !0
                    }
                }

                function g(e, t, n) {
                    var i = e[t];
                    e[t] = e[n], e[n] = i
                }

                function m(e, t, n, i, r) {
                    if (0 === e.length) return -1;
                    if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = r ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                        if (r) return -1;
                        n = e.length - 1
                    } else if (n < 0) {
                        if (!r) return -1;
                        n = 0
                    }
                    if ("string" == typeof t && (t = l.from(t, i)), l.isBuffer(t)) return 0 === t.length ? -1 : v(e, t, n, i, r);
                    if ("number" == typeof t) return t &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : v(e, [t], n, i, r);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function v(e, t, n, i, r) {
                    var o, a = 1,
                        s = e.length,
                        l = t.length;
                    if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                        if (e.length < 2 || t.length < 2) return -1;
                        a = 2, s /= 2, l /= 2, n /= 2
                    }

                    function u(e, t) {
                        return 1 === a ? e[t] : e.readUInt16BE(t * a)
                    }
                    if (r) {
                        var c = -1;
                        for (o = n; o < s; o++)
                            if (u(e, o) === u(t, -1 === c ? 0 : o - c)) {
                                if (-1 === c && (c = o), o - c + 1 === l) return c * a
                            } else -1 !== c && (o -= o - c), c = -1
                    } else
                        for (n + l > s && (n = s - l), o = n; o >= 0; o--) {
                            for (var f = !0, d = 0; d < l; d++)
                                if (u(e, o + d) !== u(t, d)) {
                                    f = !1;
                                    break
                                }
                            if (f) return o
                        }
                    return -1
                }

                function y(e, t, n, i) {
                    n = Number(n) || 0;
                    var r = e.length - n;
                    i ? (i = Number(i)) > r && (i = r) : i = r;
                    var o = t.length;
                    if (o % 2 != 0) throw new TypeError("Invalid hex string");
                    i > o / 2 && (i = o / 2);
                    for (var a = 0; a < i; ++a) {
                        var s = parseInt(t.substr(2 * a, 2), 16);
                        if (isNaN(s)) return a;
                        e[n + a] = s
                    }
                    return a
                }

                function w(e, t, n, i) {
                    return G(function(e) {
                        for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                        return t
                    }(t), e, n, i)
                }

                function b(e, t, n) {
                    return 0 === t && n === e.length ? i.fromByteArray(e) : i.fromByteArray(e.slice(t, n))
                }

                function I(e, t, n) {
                    n = Math.min(e.length, n);
                    for (var i = [], r = t; r < n;) {
                        var o, a, s, l, u = e[r],
                            c = null,
                            f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                        if (r + f <= n) switch (f) {
                            case 1:
                                u < 128 && (c = u);
                                break;
                            case 2:
                                128 == (192 & (o = e[r + 1])) && (l = (31 & u) << 6 | 63 & o) > 127 && (c = l);
                                break;
                            case 3:
                                o = e[r + 1], a = e[r + 2], 128 == (192 & o) && 128 == (192 & a) && (l = (15 & u) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (l < 55296 || l > 57343) && (c = l);
                                break;
                            case 4:
                                o = e[r + 1], a = e[r + 2], s = e[r + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (l = (15 & u) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && l < 1114112 && (c = l)
                        }
                        null === c ? (c = 65533, f = 1) : c > 65535 && (c -= 65536, i.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), i.push(c), r += f
                    }
                    return function(e) {
                        var t = e.length;
                        if (t <= M) return String.fromCharCode.apply(String, e);
                        var n = "",
                            i = 0;
                        for (; i < t;) n += String.fromCharCode.apply(String, e.slice(i, i += M));
                        return n
                    }(i)
                }
                n.Buffer = l, n.SlowBuffer = function(e) {
                    +e != e && (e = 0);
                    return l.alloc(+e)
                }, n.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function() {
                    try {
                        var e = new Uint8Array(1);
                        return e.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function() {
                                return 42
                            }
                        }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                    } catch (e) {
                        return !1
                    }
                }(), n.kMaxLength = a(), l.poolSize = 8192, l._augment = function(e) {
                    return e.__proto__ = l.prototype, e
                }, l.from = function(e, t, n) {
                    return u(null, e, t, n)
                }, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
                    value: null,
                    configurable: !0
                })), l.alloc = function(e, t, n) {
                    return i = null, o = t, a = n, c(r = e), r <= 0 ? s(i, r) : void 0 !== o ? "string" == typeof a ? s(i, r).fill(o, a) : s(i, r).fill(o) : s(i, r);
                    var i, r, o, a
                }, l.allocUnsafe = function(e) {
                    return f(null, e)
                }, l.allocUnsafeSlow = function(e) {
                    return f(null, e)
                }, l.isBuffer = function(e) {
                    return !(null == e || !e._isBuffer)
                }, l.compare = function(e, t) {
                    if (!l.isBuffer(e) || !l.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                    if (e === t) return 0;
                    for (var n = e.length, i = t.length, r = 0, o = Math.min(n, i); r < o; ++r)
                        if (e[r] !== t[r]) {
                            n = e[r], i = t[r];
                            break
                        }
                    return n < i ? -1 : i < n ? 1 : 0
                }, l.isEncoding = function(e) {
                    switch (String(e).toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "latin1":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, l.concat = function(e, t) {
                    if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === e.length) return l.alloc(0);
                    var n;
                    if (void 0 === t)
                        for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                    var i = l.allocUnsafe(t),
                        r = 0;
                    for (n = 0; n < e.length; ++n) {
                        var a = e[n];
                        if (!l.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                        a.copy(i, r), r += a.length
                    }
                    return i
                }, l.byteLength = h, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
                    var e = this.length;
                    if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var t = 0; t < e; t += 2) g(this, t, t + 1);
                    return this
                }, l.prototype.swap32 = function() {
                    var e = this.length;
                    if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
                    return this
                }, l.prototype.swap64 = function() {
                    var e = this.length;
                    if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
                    return this
                }, l.prototype.toString = function() {
                    var e = 0 | this.length;
                    return 0 === e ? "" : 0 === arguments.length ? I(this, 0, e) : function(e, t, n) {
                        var i = !1;
                        if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                        if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                        if ((n >>>= 0) <= (t >>>= 0)) return "";
                        for (e || (e = "utf8");;) switch (e) {
                            case "hex":
                                return S(this, t, n);
                            case "utf8":
                            case "utf-8":
                                return I(this, t, n);
                            case "ascii":
                                return C(this, t, n);
                            case "latin1":
                            case "binary":
                                return A(this, t, n);
                            case "base64":
                                return b(this, t, n);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return E(this, t, n);
                            default:
                                if (i) throw new TypeError("Unknown encoding: " + e);
                                e = (e + "").toLowerCase(), i = !0
                        }
                    }.apply(this, arguments)
                }, l.prototype.equals = function(e) {
                    if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    return this === e || 0 === l.compare(this, e)
                }, l.prototype.inspect = function() {
                    var e = "",
                        t = n.INSPECT_MAX_BYTES;
                    return this.length > 0 && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
                }, l.prototype.compare = function(e, t, n, i, r) {
                    if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0), void 0 === r && (r = this.length), t < 0 || n > e.length || i < 0 || r > this.length) throw new RangeError("out of range index");
                    if (i >= r && t >= n) return 0;
                    if (i >= r) return -1;
                    if (t >= n) return 1;
                    if (this === e) return 0;
                    for (var o = (r >>>= 0) - (i >>>= 0), a = (n >>>= 0) - (t >>>= 0), s = Math.min(o, a), u = this.slice(i, r), c = e.slice(t, n), f = 0; f < s; ++f)
                        if (u[f] !== c[f]) {
                            o = u[f], a = c[f];
                            break
                        }
                    return o < a ? -1 : a < o ? 1 : 0
                }, l.prototype.includes = function(e, t, n) {
                    return -1 !== this.indexOf(e, t, n)
                }, l.prototype.indexOf = function(e, t, n) {
                    return m(this, e, t, n, !0)
                }, l.prototype.lastIndexOf = function(e, t, n) {
                    return m(this, e, t, n, !1)
                }, l.prototype.write = function(e, t, n, i) {
                    if (void 0 === t) i = "utf8", n = this.length, t = 0;
                    else if (void 0 === n && "string" == typeof t) i = t, n = this.length, t = 0;
                    else {
                        if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        t |= 0, isFinite(n) ? (n |= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0)
                    }
                    var r = this.length - t;
                    if ((void 0 === n || n > r) && (n = r), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    i || (i = "utf8");
                    for (var o, a, s, l, u, c, f, d, p, h = !1;;) switch (i) {
                        case "hex":
                            return y(this, e, t, n);
                        case "utf8":
                        case "utf-8":
                            return d = t, p = n, G(Y(e, (f = this).length - d), f, d, p);
                        case "ascii":
                            return w(this, e, t, n);
                        case "latin1":
                        case "binary":
                            return w(this, e, t, n);
                        case "base64":
                            return l = this, u = t, c = n, G(z(e), l, u, c);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return a = t, s = n, G(function(e, t) {
                                for (var n, i, r, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = e.charCodeAt(a), i = n >> 8, r = n % 256, o.push(r), o.push(i);
                                return o
                            }(e, (o = this).length - a), o, a, s);
                        default:
                            if (h) throw new TypeError("Unknown encoding: " + i);
                            i = ("" + i).toLowerCase(), h = !0
                    }
                }, l.prototype.toJSON = function() {
                    return {
                        type: "Buffer",
                        data: Array.prototype.slice.call(this._arr || this, 0)
                    }
                };
                var M = 4096;

                function C(e, t, n) {
                    var i = "";
                    n = Math.min(e.length, n);
                    for (var r = t; r < n; ++r) i += String.fromCharCode(127 & e[r]);
                    return i
                }

                function A(e, t, n) {
                    var i = "";
                    n = Math.min(e.length, n);
                    for (var r = t; r < n; ++r) i += String.fromCharCode(e[r]);
                    return i
                }

                function S(e, t, n) {
                    var i = e.length;
                    (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
                    for (var r = "", o = t; o < n; ++o) r += k(e[o]);
                    return r
                }

                function E(e, t, n) {
                    for (var i = e.slice(t, n), r = "", o = 0; o < i.length; o += 2) r += String.fromCharCode(i[o] + 256 * i[o + 1]);
                    return r
                }

                function D(e, t, n) {
                    if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                    if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
                }

                function N(e, t, n, i, r, o) {
                    if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (t > r || t < o) throw new RangeError('"value" argument is out of bounds');
                    if (n + i > e.length) throw new RangeError("Index out of range")
                }

                function j(e, t, n, i) {
                    t < 0 && (t = 65535 + t + 1);
                    for (var r = 0, o = Math.min(e.length - n, 2); r < o; ++r) e[n + r] = (t & 255 << 8 * (i ? r : 1 - r)) >>> 8 * (i ? r : 1 - r)
                }

                function L(e, t, n, i) {
                    t < 0 && (t = 4294967295 + t + 1);
                    for (var r = 0, o = Math.min(e.length - n, 4); r < o; ++r) e[n + r] = t >>> 8 * (i ? r : 3 - r) & 255
                }

                function x(e, t, n, i, r, o) {
                    if (n + i > e.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("Index out of range")
                }

                function T(e, t, n, i, o) {
                    return o || x(e, 0, n, 4), r.write(e, t, n, i, 23, 4), n + 4
                }

                function Z(e, t, n, i, o) {
                    return o || x(e, 0, n, 8), r.write(e, t, n, i, 52, 8), n + 8
                }
                l.prototype.slice = function(e, t) {
                    var n, i = this.length;
                    if ((e = ~~e) < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i), (t = void 0 === t ? i : ~~t) < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i), t < e && (t = e), l.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = l.prototype;
                    else {
                        var r = t - e;
                        n = new l(r, void 0);
                        for (var o = 0; o < r; ++o) n[o] = this[o + e]
                    }
                    return n
                }, l.prototype.readUIntLE = function(e, t, n) {
                    e |= 0, t |= 0, n || D(e, t, this.length);
                    for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r;
                    return i
                }, l.prototype.readUIntBE = function(e, t, n) {
                    e |= 0, t |= 0, n || D(e, t, this.length);
                    for (var i = this[e + --t], r = 1; t > 0 && (r *= 256);) i += this[e + --t] * r;
                    return i
                }, l.prototype.readUInt8 = function(e, t) {
                    return t || D(e, 1, this.length), this[e]
                }, l.prototype.readUInt16LE = function(e, t) {
                    return t || D(e, 2, this.length), this[e] | this[e + 1] << 8
                }, l.prototype.readUInt16BE = function(e, t) {
                    return t || D(e, 2, this.length), this[e] << 8 | this[e + 1]
                }, l.prototype.readUInt32LE = function(e, t) {
                    return t || D(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                }, l.prototype.readUInt32BE = function(e, t) {
                    return t || D(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                }, l.prototype.readIntLE = function(e, t, n) {
                    e |= 0, t |= 0, n || D(e, t, this.length);
                    for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r;
                    return i >= (r *= 128) && (i -= Math.pow(2, 8 * t)), i
                }, l.prototype.readIntBE = function(e, t, n) {
                    e |= 0, t |= 0, n || D(e, t, this.length);
                    for (var i = t, r = 1, o = this[e + --i]; i > 0 && (r *= 256);) o += this[e + --i] * r;
                    return o >= (r *= 128) && (o -= Math.pow(2, 8 * t)), o
                }, l.prototype.readInt8 = function(e, t) {
                    return t || D(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                }, l.prototype.readInt16LE = function(e, t) {
                    t || D(e, 2, this.length);
                    var n = this[e] | this[e + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, l.prototype.readInt16BE = function(e, t) {
                    t || D(e, 2, this.length);
                    var n = this[e + 1] | this[e] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, l.prototype.readInt32LE = function(e, t) {
                    return t || D(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                }, l.prototype.readInt32BE = function(e, t) {
                    return t || D(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                }, l.prototype.readFloatLE = function(e, t) {
                    return t || D(e, 4, this.length), r.read(this, e, !0, 23, 4)
                }, l.prototype.readFloatBE = function(e, t) {
                    return t || D(e, 4, this.length), r.read(this, e, !1, 23, 4)
                }, l.prototype.readDoubleLE = function(e, t) {
                    return t || D(e, 8, this.length), r.read(this, e, !0, 52, 8)
                }, l.prototype.readDoubleBE = function(e, t) {
                    return t || D(e, 8, this.length), r.read(this, e, !1, 52, 8)
                }, l.prototype.writeUIntLE = function(e, t, n, i) {
                    (e = +e, t |= 0, n |= 0, i) || N(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    var r = 1,
                        o = 0;
                    for (this[t] = 255 & e; ++o < n && (r *= 256);) this[t + o] = e / r & 255;
                    return t + n
                }, l.prototype.writeUIntBE = function(e, t, n, i) {
                    (e = +e, t |= 0, n |= 0, i) || N(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
                    var r = n - 1,
                        o = 1;
                    for (this[t + r] = 255 & e; --r >= 0 && (o *= 256);) this[t + r] = e / o & 255;
                    return t + n
                }, l.prototype.writeUInt8 = function(e, t, n) {
                    return e = +e, t |= 0, n || N(this, e, t, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
                }, l.prototype.writeUInt16LE = function(e, t, n) {
                    return e = +e, t |= 0, n || N(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : j(this, e, t, !0), t + 2
                }, l.prototype.writeUInt16BE = function(e, t, n) {
                    return e = +e, t |= 0, n || N(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : j(this, e, t, !1), t + 2
                }, l.prototype.writeUInt32LE = function(e, t, n) {
                    return e = +e, t |= 0, n || N(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : L(this, e, t, !0), t + 4
                }, l.prototype.writeUInt32BE = function(e, t, n) {
                    return e = +e, t |= 0, n || N(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : L(this, e, t, !1), t + 4
                }, l.prototype.writeIntLE = function(e, t, n, i) {
                    if (e = +e, t |= 0, !i) {
                        var r = Math.pow(2, 8 * n - 1);
                        N(this, e, t, n, r - 1, -r)
                    }
                    var o = 0,
                        a = 1,
                        s = 0;
                    for (this[t] = 255 & e; ++o < n && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
                    return t + n
                }, l.prototype.writeIntBE = function(e, t, n, i) {
                    if (e = +e, t |= 0, !i) {
                        var r = Math.pow(2, 8 * n - 1);
                        N(this, e, t, n, r - 1, -r)
                    }
                    var o = n - 1,
                        a = 1,
                        s = 0;
                    for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
                    return t + n
                }, l.prototype.writeInt8 = function(e, t, n) {
                    return e = +e, t |= 0, n || N(this, e, t, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                }, l.prototype.writeInt16LE = function(e, t, n) {
                    return e = +e, t |= 0, n || N(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : j(this, e, t, !0), t + 2
                }, l.prototype.writeInt16BE = function(e, t, n) {
                    return e = +e, t |= 0, n || N(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : j(this, e, t, !1), t + 2
                }, l.prototype.writeInt32LE = function(e, t, n) {
                    return e = +e, t |= 0, n || N(this, e, t, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : L(this, e, t, !0), t + 4
                }, l.prototype.writeInt32BE = function(e, t, n) {
                    return e = +e, t |= 0, n || N(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : L(this, e, t, !1), t + 4
                }, l.prototype.writeFloatLE = function(e, t, n) {
                    return T(this, e, t, !0, n)
                }, l.prototype.writeFloatBE = function(e, t, n) {
                    return T(this, e, t, !1, n)
                }, l.prototype.writeDoubleLE = function(e, t, n) {
                    return Z(this, e, t, !0, n)
                }, l.prototype.writeDoubleBE = function(e, t, n) {
                    return Z(this, e, t, !1, n)
                }, l.prototype.copy = function(e, t, n, i) {
                    if (n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n) return 0;
                    if (0 === e.length || 0 === this.length) return 0;
                    if (t < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (i < 0) throw new RangeError("sourceEnd out of bounds");
                    i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
                    var r, o = i - n;
                    if (this === e && n < t && t < i)
                        for (r = o - 1; r >= 0; --r) e[r + t] = this[r + n];
                    else if (o < 1e3 || !l.TYPED_ARRAY_SUPPORT)
                        for (r = 0; r < o; ++r) e[r + t] = this[r + n];
                    else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
                    return o
                }, l.prototype.fill = function(e, t, n, i) {
                    if ("string" == typeof e) {
                        if ("string" == typeof t ? (i = t, t = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), 1 === e.length) {
                            var r = e.charCodeAt(0);
                            r < 256 && (e = r)
                        }
                        if (void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                        if ("string" == typeof i && !l.isEncoding(i)) throw new TypeError("Unknown encoding: " + i)
                    } else "number" == typeof e && (e &= 255);
                    if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                    if (n <= t) return this;
                    var o;
                    if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                        for (o = t; o < n; ++o) this[o] = e;
                    else {
                        var a = l.isBuffer(e) ? e : Y(new l(e, i).toString()),
                            s = a.length;
                        for (o = 0; o < n - t; ++o) this[o + t] = a[o % s]
                    }
                    return this
                };
                var P = /[^+\/0-9A-Za-z-_]/g;

                function k(e) {
                    return e < 16 ? "0" + e.toString(16) : e.toString(16)
                }

                function Y(e, t) {
                    var n;
                    t = t || 1 / 0;
                    for (var i = e.length, r = null, o = [], a = 0; a < i; ++a) {
                        if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                            if (!r) {
                                if (n > 56319) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                if (a + 1 === i) {
                                    (t -= 3) > -1 && o.push(239, 191, 189);
                                    continue
                                }
                                r = n;
                                continue
                            }
                            if (n < 56320) {
                                (t -= 3) > -1 && o.push(239, 191, 189), r = n;
                                continue
                            }
                            n = 65536 + (r - 55296 << 10 | n - 56320)
                        } else r && (t -= 3) > -1 && o.push(239, 191, 189);
                        if (r = null, n < 128) {
                            if ((t -= 1) < 0) break;
                            o.push(n)
                        } else if (n < 2048) {
                            if ((t -= 2) < 0) break;
                            o.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((t -= 3) < 0) break;
                            o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112)) throw new Error("Invalid code point");
                            if ((t -= 4) < 0) break;
                            o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return o
                }

                function z(e) {
                    return i.toByteArray(function(e) {
                        var t;
                        if ((e = (t = e, t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")).replace(P, "")).length < 2) return "";
                        for (; e.length % 4 != 0;) e += "=";
                        return e
                    }(e))
                }

                function G(e, t, n, i) {
                    for (var r = 0; r < i && !(r + n >= t.length || r >= e.length); ++r) t[r + n] = e[r];
                    return r
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "base64-js": 33,
            ieee754: 40,
            isarray: 43
        }],
        36: [function(e, t, n) {
            var i = e("indexof");

            function r(e) {
                return !!e
            }
            t.exports = function(e) {
                var t = e.classList;
                if (t) return t;
                var n = {
                    add: o,
                    remove: a,
                    contains: s,
                    toggle: function(e) {
                        return s(e) ? (a(e), !1) : (o(e), !0)
                    },
                    toString: function() {
                        return e.className
                    },
                    length: 0,
                    item: function(e) {
                        return l()[e] || null
                    }
                };
                return n;

                function o(e) {
                    var t = l();
                    i(t, e) > -1 || (t.push(e), u(t))
                }

                function a(e) {
                    var t = l(),
                        n = i(t, e); - 1 !== n && (t.splice(n, 1), u(t))
                }

                function s(e) {
                    return i(l(), e) > -1
                }

                function l() {
                    var t = e.className;
                    return function(e, t) {
                        for (var n = [], i = 0; i < e.length; i++) t(e[i]) && n.push(e[i]);
                        return n
                    }(t.split(" "), r)
                }

                function u(t) {
                    var i = t.length;
                    e.className = t.join(" "), n.length = i;
                    for (var r = 0; r < t.length; r++) n[r] = t[r];
                    delete t[i]
                }
            }
        }, {
            indexof: 41
        }],
        37: [function(e, t, n) {
            t.exports = function(e, t, n, i) {
                if (i = (n = window.getComputedStyle) ? n(e) : e.currentStyle) return i[t.replace(/-(\w)/gi, function(e, t) {
                    return t.toUpperCase()
                })]
            }
        }, {}],
        38: [function(e, t, n) {
            ! function(e, i) {
                "use strict";
                "object" == typeof n ? t.exports = i() : e.returnExports = i()
            }(this, function() {
                var e, t, n = Array,
                    i = n.prototype,
                    r = Object,
                    o = r.prototype,
                    a = Function,
                    s = a.prototype,
                    l = String,
                    u = l.prototype,
                    c = Number,
                    f = c.prototype,
                    d = i.slice,
                    p = i.splice,
                    h = i.push,
                    g = i.unshift,
                    m = i.concat,
                    v = i.join,
                    y = s.call,
                    w = s.apply,
                    b = Math.max,
                    I = Math.min,
                    M = o.toString,
                    C = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
                    A = Function.prototype.toString,
                    S = /^\s*class /,
                    E = function(e) {
                        try {
                            var t = A.call(e).replace(/\/\/.*\n/g, "").replace(/\/\*[.\s\S]*\*\//g, "").replace(/\n/gm, " ").replace(/ {2}/g, " ");
                            return S.test(t)
                        } catch (e) {
                            return !1
                        }
                    },
                    D = function(e) {
                        if (!e) return !1;
                        if ("function" != typeof e && "object" != typeof e) return !1;
                        if (C) return function(e) {
                            try {
                                return !E(e) && (A.call(e), !0)
                            } catch (e) {
                                return !1
                            }
                        }(e);
                        if (E(e)) return !1;
                        var t = M.call(e);
                        return "[object Function]" === t || "[object GeneratorFunction]" === t
                    },
                    N = RegExp.prototype.exec;
                e = function(e) {
                    return "object" == typeof e && (C ? function(e) {
                        try {
                            return N.call(e), !0
                        } catch (e) {
                            return !1
                        }
                    }(e) : "[object RegExp]" === M.call(e))
                };
                var j = String.prototype.valueOf;
                t = function(e) {
                    return "string" == typeof e || "object" == typeof e && (C ? function(e) {
                        try {
                            return j.call(e), !0
                        } catch (e) {
                            return !1
                        }
                    }(e) : "[object String]" === M.call(e))
                };
                var L, x, T = r.defineProperty && function() {
                        try {
                            var e = {};
                            for (var t in r.defineProperty(e, "x", {
                                    enumerable: !1,
                                    value: e
                                }), e) return !1;
                            return e.x === e
                        } catch (e) {
                            return !1
                        }
                    }(),
                    Z = (L = o.hasOwnProperty, x = T ? function(e, t, n, i) {
                        !i && t in e || r.defineProperty(e, t, {
                            configurable: !0,
                            enumerable: !1,
                            writable: !0,
                            value: n
                        })
                    } : function(e, t, n, i) {
                        !i && t in e || (e[t] = n)
                    }, function(e, t, n) {
                        for (var i in t) L.call(t, i) && x(e, i, t[i], n)
                    }),
                    P = function(e) {
                        var t = typeof e;
                        return null === e || "object" !== t && "function" !== t
                    },
                    k = c.isNaN || function(e) {
                        return e != e
                    },
                    Y = function(e) {
                        var t = +e;
                        return k(t) ? t = 0 : 0 !== t && t !== 1 / 0 && t !== -1 / 0 && (t = (t > 0 || -1) * Math.floor(Math.abs(t))), t
                    },
                    z = function(e) {
                        var t, n, i;
                        if (P(e)) return e;
                        if (n = e.valueOf, D(n) && (t = n.call(e), P(t))) return t;
                        if (i = e.toString, D(i) && (t = i.call(e), P(t))) return t;
                        throw new TypeError
                    },
                    G = function(e) {
                        if (null == e) throw new TypeError("can't convert " + e + " to object");
                        return r(e)
                    },
                    R = function(e) {
                        return e >>> 0
                    },
                    O = function() {};
                Z(s, {
                    bind: function(e) {
                        var t = this;
                        if (!D(t)) throw new TypeError("Function.prototype.bind called on incompatible " + t);
                        for (var n, i = d.call(arguments, 1), o = b(0, t.length - i.length), s = [], l = 0; l < o; l++) h.call(s, "$" + l);
                        return n = a("binder", "return function (" + v.call(s, ",") + "){ return binder.apply(this, arguments); }")(function() {
                            if (this instanceof n) {
                                var o = w.call(t, this, m.call(i, d.call(arguments)));
                                return r(o) === o ? o : this
                            }
                            return w.call(t, e, m.call(i, d.call(arguments)))
                        }), t.prototype && (O.prototype = t.prototype, n.prototype = new O, O.prototype = null), n
                    }
                });
                var W = y.bind(o.hasOwnProperty),
                    U = y.bind(o.toString),
                    J = y.bind(d),
                    B = w.bind(d);
                if ("object" == typeof document && document && document.documentElement) try {
                    J(document.documentElement.childNodes)
                } catch (e) {
                    var F = J,
                        H = B;
                    J = function(e) {
                        for (var t = [], n = e.length; n-- > 0;) t[n] = e[n];
                        return H(t, F(arguments, 1))
                    }, B = function(e, t) {
                        return H(J(e), t)
                    }
                }
                var V = y.bind(u.slice),
                    X = y.bind(u.split),
                    _ = y.bind(u.indexOf),
                    K = y.bind(h),
                    Q = y.bind(o.propertyIsEnumerable),
                    q = y.bind(i.sort),
                    $ = n.isArray || function(e) {
                        return "[object Array]" === U(e)
                    },
                    ee = 1 !== [].unshift(0);
                Z(i, {
                    unshift: function() {
                        return g.apply(this, arguments), this.length
                    }
                }, ee), Z(n, {
                    isArray: $
                });
                var te = r("a"),
                    ne = "a" !== te[0] || !(0 in te),
                    ie = function(e) {
                        var t = !0,
                            n = !0,
                            i = !1;
                        if (e) try {
                            e.call("foo", function(e, n, i) {
                                "object" != typeof i && (t = !1)
                            }), e.call([1], function() {
                                "use strict";
                                n = "string" == typeof this
                            }, "x")
                        } catch (e) {
                            i = !0
                        }
                        return !!e && !i && t && n
                    };
                Z(i, {
                    forEach: function(e) {
                        var n, i = G(this),
                            r = ne && t(this) ? X(this, "") : i,
                            o = -1,
                            a = R(r.length);
                        if (arguments.length > 1 && (n = arguments[1]), !D(e)) throw new TypeError("Array.prototype.forEach callback must be a function");
                        for (; ++o < a;) o in r && (void 0 === n ? e(r[o], o, i) : e.call(n, r[o], o, i))
                    }
                }, !ie(i.forEach)), Z(i, {
                    map: function(e) {
                        var i, r = G(this),
                            o = ne && t(this) ? X(this, "") : r,
                            a = R(o.length),
                            s = n(a);
                        if (arguments.length > 1 && (i = arguments[1]), !D(e)) throw new TypeError("Array.prototype.map callback must be a function");
                        for (var l = 0; l < a; l++) l in o && (s[l] = void 0 === i ? e(o[l], l, r) : e.call(i, o[l], l, r));
                        return s
                    }
                }, !ie(i.map)), Z(i, {
                    filter: function(e) {
                        var n, i, r = G(this),
                            o = ne && t(this) ? X(this, "") : r,
                            a = R(o.length),
                            s = [];
                        if (arguments.length > 1 && (i = arguments[1]), !D(e)) throw new TypeError("Array.prototype.filter callback must be a function");
                        for (var l = 0; l < a; l++) l in o && (n = o[l], (void 0 === i ? e(n, l, r) : e.call(i, n, l, r)) && K(s, n));
                        return s
                    }
                }, !ie(i.filter)), Z(i, {
                    every: function(e) {
                        var n, i = G(this),
                            r = ne && t(this) ? X(this, "") : i,
                            o = R(r.length);
                        if (arguments.length > 1 && (n = arguments[1]), !D(e)) throw new TypeError("Array.prototype.every callback must be a function");
                        for (var a = 0; a < o; a++)
                            if (a in r && !(void 0 === n ? e(r[a], a, i) : e.call(n, r[a], a, i))) return !1;
                        return !0
                    }
                }, !ie(i.every)), Z(i, {
                    some: function(e) {
                        var n, i = G(this),
                            r = ne && t(this) ? X(this, "") : i,
                            o = R(r.length);
                        if (arguments.length > 1 && (n = arguments[1]), !D(e)) throw new TypeError("Array.prototype.some callback must be a function");
                        for (var a = 0; a < o; a++)
                            if (a in r && (void 0 === n ? e(r[a], a, i) : e.call(n, r[a], a, i))) return !0;
                        return !1
                    }
                }, !ie(i.some));
                var re = !1;
                i.reduce && (re = "object" == typeof i.reduce.call("es5", function(e, t, n, i) {
                    return i
                })), Z(i, {
                    reduce: function(e) {
                        var n = G(this),
                            i = ne && t(this) ? X(this, "") : n,
                            r = R(i.length);
                        if (!D(e)) throw new TypeError("Array.prototype.reduce callback must be a function");
                        if (0 === r && 1 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
                        var o, a = 0;
                        if (arguments.length >= 2) o = arguments[1];
                        else
                            for (;;) {
                                if (a in i) {
                                    o = i[a++];
                                    break
                                }
                                if (++a >= r) throw new TypeError("reduce of empty array with no initial value")
                            }
                        for (; a < r; a++) a in i && (o = e(o, i[a], a, n));
                        return o
                    }
                }, !re);
                var oe = !1;
                i.reduceRight && (oe = "object" == typeof i.reduceRight.call("es5", function(e, t, n, i) {
                    return i
                })), Z(i, {
                    reduceRight: function(e) {
                        var n, i = G(this),
                            r = ne && t(this) ? X(this, "") : i,
                            o = R(r.length);
                        if (!D(e)) throw new TypeError("Array.prototype.reduceRight callback must be a function");
                        if (0 === o && 1 === arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
                        var a = o - 1;
                        if (arguments.length >= 2) n = arguments[1];
                        else
                            for (;;) {
                                if (a in r) {
                                    n = r[a--];
                                    break
                                }
                                if (--a < 0) throw new TypeError("reduceRight of empty array with no initial value")
                            }
                        if (a < 0) return n;
                        for (; a in r && (n = e(n, r[a], a, i)), a--;);
                        return n
                    }
                }, !oe);
                var ae = i.indexOf && -1 !== [0, 1].indexOf(1, 2);
                Z(i, {
                    indexOf: function(e) {
                        var n = ne && t(this) ? X(this, "") : G(this),
                            i = R(n.length);
                        if (0 === i) return -1;
                        var r = 0;
                        for (arguments.length > 1 && (r = Y(arguments[1])), r = r >= 0 ? r : b(0, i + r); r < i; r++)
                            if (r in n && n[r] === e) return r;
                        return -1
                    }
                }, ae);
                var se = i.lastIndexOf && -1 !== [0, 1].lastIndexOf(0, -3);
                Z(i, {
                    lastIndexOf: function(e) {
                        var n = ne && t(this) ? X(this, "") : G(this),
                            i = R(n.length);
                        if (0 === i) return -1;
                        var r = i - 1;
                        for (arguments.length > 1 && (r = I(r, Y(arguments[1]))), r = r >= 0 ? r : i - Math.abs(r); r >= 0; r--)
                            if (r in n && e === n[r]) return r;
                        return -1
                    }
                }, se);
                var le, ue, ce = (ue = (le = [1, 2]).splice(), 2 === le.length && $(ue) && 0 === ue.length);
                Z(i, {
                    splice: function(e, t) {
                        return 0 === arguments.length ? [] : p.apply(this, arguments)
                    }
                }, !ce);
                var fe, de = (fe = {}, i.splice.call(fe, 0, 0, 1), 1 === fe.length);
                Z(i, {
                    splice: function(e, t) {
                        if (0 === arguments.length) return [];
                        var n = arguments;
                        return this.length = b(Y(this.length), 0), arguments.length > 0 && "number" != typeof t && ((n = J(arguments)).length < 2 ? K(n, this.length - e) : n[1] = Y(t)), p.apply(this, n)
                    }
                }, !de);
                var pe, he, ge = ((pe = new n(1e5))[8] = "x", pe.splice(1, 1), 7 === pe.indexOf("x")),
                    me = ((he = [])[256] = "a", he.splice(257, 0, "b"), "a" === he[256]);
                Z(i, {
                    splice: function(e, t) {
                        for (var n, i = G(this), r = [], o = R(i.length), a = Y(e), s = a < 0 ? b(o + a, 0) : I(a, o), u = I(b(Y(t), 0), o - s), c = 0; c < u;) n = l(s + c), W(i, n) && (r[c] = i[n]), c += 1;
                        var f, d = J(arguments, 2),
                            p = d.length;
                        if (p < u) {
                            c = s;
                            for (var h = o - u; c < h;) n = l(c + u), f = l(c + p), W(i, n) ? i[f] = i[n] : delete i[f], c += 1;
                            c = o;
                            for (var g = o - u + p; c > g;) delete i[c - 1], c -= 1
                        } else if (p > u)
                            for (c = o - u; c > s;) n = l(c + u - 1), f = l(c + p - 1), W(i, n) ? i[f] = i[n] : delete i[f], c -= 1;
                        c = s;
                        for (var m = 0; m < d.length; ++m) i[c] = d[m], c += 1;
                        return i.length = o - u + p, r
                    }
                }, !ge || !me);
                var ve, ye = i.join;
                try {
                    ve = "1,2,3" !== Array.prototype.join.call("123", ",")
                } catch (e) {
                    ve = !0
                }
                ve && Z(i, {
                    join: function(e) {
                        var n = void 0 === e ? "," : e;
                        return ye.call(t(this) ? X(this, "") : this, n)
                    }
                }, ve);
                var we = "1,2" !== [1, 2].join(void 0);
                we && Z(i, {
                    join: function(e) {
                        var t = void 0 === e ? "," : e;
                        return ye.call(this, t)
                    }
                }, we);
                var be, Ie = function(e) {
                        for (var t = G(this), n = R(t.length), i = 0; i < arguments.length;) t[n + i] = arguments[i], i += 1;
                        return t.length = n + i, n + i
                    },
                    Me = (be = {}, 1 !== Array.prototype.push.call(be, void 0) || 1 !== be.length || void 0 !== be[0] || !W(be, 0));
                Z(i, {
                    push: function(e) {
                        return $(this) ? h.apply(this, arguments) : Ie.apply(this, arguments)
                    }
                }, Me);
                var Ce, Ae = 1 !== (Ce = []).push(void 0) || 1 !== Ce.length || void 0 !== Ce[0] || !W(Ce, 0);
                Z(i, {
                    push: Ie
                }, Ae), Z(i, {
                    slice: function(e, n) {
                        var i = t(this) ? X(this, "") : this;
                        return B(i, arguments)
                    }
                }, ne);
                var Se = function() {
                        try {
                            [1, 2].sort(null)
                        } catch (e) {
                            try {
                                [1, 2].sort({})
                            } catch (e) {
                                return !1
                            }
                        }
                        return !0
                    }(),
                    Ee = function() {
                        try {
                            return [1, 2].sort(/a/), !1
                        } catch (e) {}
                        return !0
                    }(),
                    De = function() {
                        try {
                            return [1, 2].sort(void 0), !0
                        } catch (e) {}
                        return !1
                    }();
                Z(i, {
                    sort: function(e) {
                        if (void 0 === e) return q(this);
                        if (!D(e)) throw new TypeError("Array.prototype.sort callback must be a function");
                        return q(this, e)
                    }
                }, Se || !De || !Ee);
                var Ne = !Q({
                        toString: null
                    }, "toString"),
                    je = Q(function() {}, "prototype"),
                    Le = !W("x", "0"),
                    xe = function(e) {
                        var t = e.constructor;
                        return t && t.prototype === e
                    },
                    Te = {
                        $window: !0,
                        $console: !0,
                        $parent: !0,
                        $self: !0,
                        $frame: !0,
                        $frames: !0,
                        $frameElement: !0,
                        $webkitIndexedDB: !0,
                        $webkitStorageInfo: !0,
                        $external: !0,
                        $width: !0,
                        $height: !0,
                        $top: !0,
                        $localStorage: !0
                    },
                    Ze = function() {
                        if ("undefined" == typeof window) return !1;
                        for (var e in window) try {
                            !Te["$" + e] && W(window, e) && null !== window[e] && "object" == typeof window[e] && xe(window[e])
                        } catch (e) {
                            return !0
                        }
                        return !1
                    }(),
                    Pe = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                    ke = Pe.length,
                    Ye = function(e) {
                        return "[object Arguments]" === U(e)
                    },
                    ze = Ye(arguments) ? Ye : function(e) {
                        return null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && !$(e) && D(e.callee)
                    };
                Z(r, {
                    keys: function(e) {
                        var n = D(e),
                            i = ze(e),
                            r = null !== e && "object" == typeof e,
                            o = r && t(e);
                        if (!r && !n && !i) throw new TypeError("Object.keys called on a non-object");
                        var a = [],
                            s = je && n;
                        if (o && Le || i)
                            for (var u = 0; u < e.length; ++u) K(a, l(u));
                        if (!i)
                            for (var c in e) s && "prototype" === c || !W(e, c) || K(a, l(c));
                        if (Ne)
                            for (var f = function(e) {
                                    if ("undefined" == typeof window || !Ze) return xe(e);
                                    try {
                                        return xe(e)
                                    } catch (e) {
                                        return !1
                                    }
                                }(e), d = 0; d < ke; d++) {
                                var p = Pe[d];
                                f && "constructor" === p || !W(e, p) || K(a, p)
                            }
                        return a
                    }
                });
                var Ge = r.keys && function() {
                        return 2 === r.keys(arguments).length
                    }(1, 2),
                    Re = r.keys && function() {
                        var e = r.keys(arguments);
                        return 1 !== arguments.length || 1 !== e.length || 1 !== e[0]
                    }(1),
                    Oe = r.keys;
                Z(r, {
                    keys: function(e) {
                        return ze(e) ? Oe(J(e)) : Oe(e)
                    }
                }, !Ge || Re);
                var We, Ue, Je = 0 !== new Date(-0xc782b5b342b24).getUTCMonth(),
                    Be = new Date(-0x55d318d56a724),
                    Fe = new Date(14496624e5),
                    He = "Mon, 01 Jan -45875 11:59:59 GMT" !== Be.toUTCString();
                Be.getTimezoneOffset() < -720 ? (We = "Tue Jan 02 -45875" !== Be.toDateString(), Ue = !/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(Fe))) : (We = "Mon Jan 01 -45875" !== Be.toDateString(), Ue = !/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(Fe)));
                var Ve = y.bind(Date.prototype.getFullYear),
                    Xe = y.bind(Date.prototype.getMonth),
                    _e = y.bind(Date.prototype.getDate),
                    Ke = y.bind(Date.prototype.getUTCFullYear),
                    Qe = y.bind(Date.prototype.getUTCMonth),
                    qe = y.bind(Date.prototype.getUTCDate),
                    $e = y.bind(Date.prototype.getUTCDay),
                    et = y.bind(Date.prototype.getUTCHours),
                    tt = y.bind(Date.prototype.getUTCMinutes),
                    nt = y.bind(Date.prototype.getUTCSeconds),
                    it = y.bind(Date.prototype.getUTCMilliseconds),
                    rt = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    ot = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    at = function(e, t) {
                        return _e(new Date(t, e, 0))
                    };
                Z(Date.prototype, {
                    getFullYear: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Ve(this);
                        return e < 0 && Xe(this) > 11 ? e + 1 : e
                    },
                    getMonth: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Ve(this),
                            t = Xe(this);
                        return e < 0 && t > 11 ? 0 : t
                    },
                    getDate: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Ve(this),
                            t = Xe(this),
                            n = _e(this);
                        return e < 0 && t > 11 ? 12 === t ? n : at(0, e + 1) - n + 1 : n
                    },
                    getUTCFullYear: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Ke(this);
                        return e < 0 && Qe(this) > 11 ? e + 1 : e
                    },
                    getUTCMonth: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Ke(this),
                            t = Qe(this);
                        return e < 0 && t > 11 ? 0 : t
                    },
                    getUTCDate: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = Ke(this),
                            t = Qe(this),
                            n = qe(this);
                        return e < 0 && t > 11 ? 12 === t ? n : at(0, e + 1) - n + 1 : n
                    }
                }, Je), Z(Date.prototype, {
                    toUTCString: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = $e(this),
                            t = qe(this),
                            n = Qe(this),
                            i = Ke(this),
                            r = et(this),
                            o = tt(this),
                            a = nt(this);
                        return rt[e] + ", " + (t < 10 ? "0" + t : t) + " " + ot[n] + " " + i + " " + (r < 10 ? "0" + r : r) + ":" + (o < 10 ? "0" + o : o) + ":" + (a < 10 ? "0" + a : a) + " GMT"
                    }
                }, Je || He), Z(Date.prototype, {
                    toDateString: function() {
                        if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                        var e = this.getDay(),
                            t = this.getDate(),
                            n = this.getMonth(),
                            i = this.getFullYear();
                        return rt[e] + " " + ot[n] + " " + (t < 10 ? "0" + t : t) + " " + i
                    }
                }, Je || We), (Je || Ue) && (Date.prototype.toString = function() {
                    if (!(this && this instanceof Date)) throw new TypeError("this is not a Date object.");
                    var e = this.getDay(),
                        t = this.getDate(),
                        n = this.getMonth(),
                        i = this.getFullYear(),
                        r = this.getHours(),
                        o = this.getMinutes(),
                        a = this.getSeconds(),
                        s = this.getTimezoneOffset(),
                        l = Math.floor(Math.abs(s) / 60),
                        u = Math.floor(Math.abs(s) % 60);
                    return rt[e] + " " + ot[n] + " " + (t < 10 ? "0" + t : t) + " " + i + " " + (r < 10 ? "0" + r : r) + ":" + (o < 10 ? "0" + o : o) + ":" + (a < 10 ? "0" + a : a) + " GMT" + (s > 0 ? "-" : "+") + (l < 10 ? "0" + l : l) + (u < 10 ? "0" + u : u)
                }, T && r.defineProperty(Date.prototype, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0
                }));
                var st = -621987552e5,
                    lt = "-000001",
                    ut = Date.prototype.toISOString && -1 === new Date(st).toISOString().indexOf(lt),
                    ct = Date.prototype.toISOString && "1969-12-31T23:59:59.999Z" !== new Date(-1).toISOString(),
                    ft = y.bind(Date.prototype.getTime);
                Z(Date.prototype, {
                        toISOString: function() {
                            if (!isFinite(this) || !isFinite(ft(this))) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
                            var e = Ke(this),
                                t = Qe(this);
                            e += Math.floor(t / 12);
                            var n = [(t = (t % 12 + 12) % 12) + 1, qe(this), et(this), tt(this), nt(this)];
                            e = (e < 0 ? "-" : e > 9999 ? "+" : "") + V("00000" + Math.abs(e), 0 <= e && e <= 9999 ? -4 : -6);
                            for (var i = 0; i < n.length; ++i) n[i] = V("00" + n[i], -2);
                            return e + "-" + J(n, 0, 2).join("-") + "T" + J(n, 2).join(":") + "." + V("000" + it(this), -3) + "Z"
                        }
                    }, ut || ct),
                    function() {
                        try {
                            return Date.prototype.toJSON && null === new Date(NaN).toJSON() && -1 !== new Date(st).toJSON().indexOf(lt) && Date.prototype.toJSON.call({
                                toISOString: function() {
                                    return !0
                                }
                            })
                        } catch (e) {
                            return !1
                        }
                    }() || (Date.prototype.toJSON = function(e) {
                        var t = r(this),
                            n = z(t);
                        if ("number" == typeof n && !isFinite(n)) return null;
                        var i = t.toISOString;
                        if (!D(i)) throw new TypeError("toISOString property is not callable");
                        return i.call(t)
                    });
                var dt = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
                    pt = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")) || !isNaN(Date.parse("2012-12-31T23:59:60.000Z"));
                if (isNaN(Date.parse("2000-01-01T00:00:00.000Z")) || pt || !dt) {
                    var ht = Math.pow(2, 31) - 1,
                        gt = k(new Date(1970, 0, 1, 0, 0, 0, ht + 1).getTime());
                    Date = function(e) {
                        var t = function(n, i, r, o, a, s, u) {
                                var c, f = arguments.length;
                                if (this instanceof e) {
                                    var d = s,
                                        p = u;
                                    if (gt && f >= 7 && u > ht) {
                                        var h = Math.floor(u / ht) * ht,
                                            g = Math.floor(h / 1e3);
                                        d += g, p -= 1e3 * g
                                    }
                                    c = 1 === f && l(n) === n ? new e(t.parse(n)) : f >= 7 ? new e(n, i, r, o, a, d, p) : f >= 6 ? new e(n, i, r, o, a, d) : f >= 5 ? new e(n, i, r, o, a) : f >= 4 ? new e(n, i, r, o) : f >= 3 ? new e(n, i, r) : f >= 2 ? new e(n, i) : f >= 1 ? new e(n instanceof e ? +n : n) : new e
                                } else c = e.apply(this, arguments);
                                return P(c) || Z(c, {
                                    constructor: t
                                }, !0), c
                            },
                            n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
                            i = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365],
                            r = function(e, t) {
                                var n = t > 1 ? 1 : 0;
                                return i[t] + Math.floor((e - 1969 + n) / 4) - Math.floor((e - 1901 + n) / 100) + Math.floor((e - 1601 + n) / 400) + 365 * (e - 1970)
                            };
                        for (var o in e) W(e, o) && (t[o] = e[o]);
                        Z(t, {
                            now: e.now,
                            UTC: e.UTC
                        }, !0), t.prototype = e.prototype, Z(t.prototype, {
                            constructor: t
                        }, !0);
                        return Z(t, {
                            parse: function(t) {
                                var i = n.exec(t);
                                if (i) {
                                    var o, a = c(i[1]),
                                        s = c(i[2] || 1) - 1,
                                        l = c(i[3] || 1) - 1,
                                        u = c(i[4] || 0),
                                        f = c(i[5] || 0),
                                        d = c(i[6] || 0),
                                        p = Math.floor(1e3 * c(i[7] || 0)),
                                        h = Boolean(i[4] && !i[8]),
                                        g = "-" === i[9] ? 1 : -1,
                                        m = c(i[10] || 0),
                                        v = c(i[11] || 0);
                                    return u < (f > 0 || d > 0 || p > 0 ? 24 : 25) && f < 60 && d < 60 && p < 1e3 && s > -1 && s < 12 && m < 24 && v < 60 && l > -1 && l < r(a, s + 1) - r(a, s) && (o = 1e3 * (60 * ((o = 60 * (24 * (r(a, s) + l) + u + m * g)) + f + v * g) + d) + p, h && (o = function(t) {
                                        var n = 0,
                                            i = t;
                                        if (gt && i > ht) {
                                            var r = Math.floor(i / ht) * ht,
                                                o = Math.floor(r / 1e3);
                                            n += o, i -= 1e3 * o
                                        }
                                        return c(new e(1970, 0, 1, 0, 0, n, i))
                                    }(o)), -864e13 <= o && o <= 864e13) ? o : NaN
                                }
                                return e.parse.apply(this, arguments)
                            }
                        }), t
                    }(Date)
                }
                Date.now || (Date.now = function() {
                    return (new Date).getTime()
                });
                var mt = f.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9. toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)),
                    vt = {
                        base: 1e7,
                        size: 6,
                        data: [0, 0, 0, 0, 0, 0],
                        multiply: function(e, t) {
                            for (var n = -1, i = t; ++n < vt.size;) i += e * vt.data[n], vt.data[n] = i % vt.base, i = Math.floor(i / vt.base)
                        },
                        divide: function(e) {
                            for (var t = vt.size, n = 0; --t >= 0;) n += vt.data[t], vt.data[t] = Math.floor(n / e), n = n % e * vt.base
                        },
                        numToString: function() {
                            for (var e = vt.size, t = ""; --e >= 0;)
                                if ("" !== t || 0 === e || 0 !== vt.data[e]) {
                                    var n = l(vt.data[e]);
                                    "" === t ? t = n : t += V("0000000", 0, 7 - n.length) + n
                                }
                            return t
                        },
                        pow: function e(t, n, i) {
                            return 0 === n ? i : n % 2 == 1 ? e(t, n - 1, i * t) : e(t * t, n / 2, i)
                        },
                        log: function(e) {
                            for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
                            for (; n >= 2;) t += 1, n /= 2;
                            return t
                        }
                    };
                Z(f, {
                    toFixed: function(e) {
                        var t, n, i, r, o, a, s, u;
                        if (t = c(e), (t = k(t) ? 0 : Math.floor(t)) < 0 || t > 20) throw new RangeError("Number.toFixed called with invalid number of decimals");
                        if (n = c(this), k(n)) return "NaN";
                        if (n <= -1e21 || n >= 1e21) return l(n);
                        if (i = "", n < 0 && (i = "-", n = -n), r = "0", n > 1e-21)
                            if (a = (o = vt.log(n * vt.pow(2, 69, 1)) - 69) < 0 ? n * vt.pow(2, -o, 1) : n / vt.pow(2, o, 1), a *= 4503599627370496, (o = 52 - o) > 0) {
                                for (vt.multiply(0, a), s = t; s >= 7;) vt.multiply(1e7, 0), s -= 7;
                                for (vt.multiply(vt.pow(10, s, 1), 0), s = o - 1; s >= 23;) vt.divide(1 << 23), s -= 23;
                                vt.divide(1 << s), vt.multiply(1, 1), vt.divide(2), r = vt.numToString()
                            } else vt.multiply(0, a), vt.multiply(1 << -o, 0), r = vt.numToString() + V("0.00000000000000000000", 2, 2 + t);
                        return r = t > 0 ? (u = r.length) <= t ? i + V("0.0000000000000000000", 0, t - u + 2) + r : i + V(r, 0, u - t) + "." + V(r, u - t) : i + r
                    }
                }, mt);
                var yt, wt, bt = function() {
                        try {
                            return "1" === 1..toPrecision(void 0)
                        } catch (e) {
                            return !0
                        }
                    }(),
                    It = f.toPrecision;
                Z(f, {
                    toPrecision: function(e) {
                        return void 0 === e ? It.call(this) : It.call(this, e)
                    }
                }, bt), 2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? (yt = void 0 === /()??/.exec("")[1], wt = Math.pow(2, 32) - 1, u.split = function(t, n) {
                    var i = String(this);
                    if (void 0 === t && 0 === n) return [];
                    if (!e(t)) return X(this, t, n);
                    var r, o, a, s, l = [],
                        u = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                        c = 0,
                        f = new RegExp(t.source, u + "g");
                    yt || (r = new RegExp("^" + f.source + "$(?!\\s)", u));
                    var d = void 0 === n ? wt : R(n);
                    for (o = f.exec(i); o && !((a = o.index + o[0].length) > c && (K(l, V(i, c, o.index)), !yt && o.length > 1 && o[0].replace(r, function() {
                            for (var e = 1; e < arguments.length - 2; e++) void 0 === arguments[e] && (o[e] = void 0)
                        }), o.length > 1 && o.index < i.length && h.apply(l, J(o, 1)), s = o[0].length, c = a, l.length >= d));) f.lastIndex === o.index && f.lastIndex++, o = f.exec(i);
                    return c === i.length ? !s && f.test("") || K(l, "") : K(l, V(i, c)), l.length > d ? J(l, 0, d) : l
                }) : "0".split(void 0, 0).length && (u.split = function(e, t) {
                    return void 0 === e && 0 === t ? [] : X(this, e, t)
                });
                var Mt, Ct = u.replace;
                (Mt = [], "x".replace(/x(.)?/g, function(e, t) {
                    K(Mt, t)
                }), 1 === Mt.length && void 0 === Mt[0]) || (u.replace = function(t, n) {
                    var i = D(n),
                        r = e(t) && /\)[*?]/.test(t.source);
                    if (i && r) {
                        return Ct.call(this, t, function(e) {
                            var i = arguments.length,
                                r = t.lastIndex;
                            t.lastIndex = 0;
                            var o = t.exec(e) || [];
                            return t.lastIndex = r, K(o, arguments[i - 2], arguments[i - 1]), n.apply(this, o)
                        })
                    }
                    return Ct.call(this, t, n)
                });
                var At = u.substr,
                    St = "".substr && "b" !== "0b".substr(-1);
                Z(u, {
                    substr: function(e, t) {
                        var n = e;
                        return e < 0 && (n = b(this.length + e, 0)), At.call(this, n, t)
                    }
                }, St);
                var Et = "\t\n\v\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff",
                    Dt = "[" + Et + "]",
                    Nt = new RegExp("^" + Dt + Dt + "*"),
                    jt = new RegExp(Dt + Dt + "*$"),
                    Lt = u.trim && (Et.trim() || !"â€‹".trim());
                Z(u, {
                    trim: function() {
                        if (null == this) throw new TypeError("can't convert " + this + " to object");
                        return l(this).replace(Nt, "").replace(jt, "")
                    }
                }, Lt);
                var xt = y.bind(String.prototype.trim),
                    Tt = u.lastIndexOf && -1 !== "abcã‚ã„".lastIndexOf("ã‚ã„", 2);
                Z(u, {
                    lastIndexOf: function(e) {
                        if (null == this) throw new TypeError("can't convert " + this + " to object");
                        for (var t = l(this), n = l(e), i = arguments.length > 1 ? c(arguments[1]) : NaN, r = k(i) ? 1 / 0 : Y(i), o = I(b(r, 0), t.length), a = n.length, s = o + a; s > 0;) {
                            s = b(0, s - a);
                            var u = _(V(t, s, o + a), n);
                            if (-1 !== u) return s + u
                        }
                        return -1
                    }
                }, Tt);
                var Zt, Pt, kt, Yt = u.lastIndexOf;
                if (Z(u, {
                        lastIndexOf: function(e) {
                            return Yt.apply(this, arguments)
                        }
                    }, 1 !== u.lastIndexOf.length), 8 === parseInt(Et + "08") && 22 === parseInt(Et + "0x16") || (parseInt = (Zt = parseInt, Pt = /^[-+]?0[xX]/, function(e, t) {
                        var n = xt(String(e)),
                            i = c(t) || (Pt.test(n) ? 16 : 10);
                        return Zt(n, i)
                    })), 1 / parseFloat("-0") != -1 / 0 && (parseFloat = (kt = parseFloat, function(e) {
                        var t = xt(String(e)),
                            n = kt(t);
                        return 0 === n && "-" === V(t, 0, 1) ? -0 : n
                    })), "RangeError: test" !== String(new RangeError("test"))) {
                    Error.prototype.toString = function() {
                        if (null == this) throw new TypeError("can't convert " + this + " to object");
                        var e = this.name;
                        void 0 === e ? e = "Error" : "string" != typeof e && (e = l(e));
                        var t = this.message;
                        return void 0 === t ? t = "" : "string" != typeof t && (t = l(t)), e ? t ? e + ": " + t : e : t
                    }
                }
                if (T) {
                    var zt = function(e, t) {
                        if (Q(e, t)) {
                            var n = Object.getOwnPropertyDescriptor(e, t);
                            n.configurable && (n.enumerable = !1, Object.defineProperty(e, t, n))
                        }
                    };
                    zt(Error.prototype, "message"), "" !== Error.prototype.message && (Error.prototype.message = ""), zt(Error.prototype, "name")
                }
                if ("/a/gim" !== String(/a/gim)) {
                    RegExp.prototype.toString = function() {
                        var e = "/" + this.source + "/";
                        return this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), e
                    }
                }
            })
        }, {}],
        39: [function(e, t, n) {
            var i = [],
                r = i.forEach,
                o = i.slice;
            t.exports = function(e) {
                return r.call(o.call(arguments, 1), function(t) {
                    if (t)
                        for (var n in t) e[n] = t[n]
                }), e
            }
        }, {}],
        40: [function(e, t, n) {
            n.read = function(e, t, n, i, r) {
                var o, a, s = 8 * r - i - 1,
                    l = (1 << s) - 1,
                    u = l >> 1,
                    c = -7,
                    f = n ? r - 1 : 0,
                    d = n ? -1 : 1,
                    p = e[t + f];
                for (f += d, o = p & (1 << -c) - 1, p >>= -c, c += s; c > 0; o = 256 * o + e[t + f], f += d, c -= 8);
                for (a = o & (1 << -c) - 1, o >>= -c, c += i; c > 0; a = 256 * a + e[t + f], f += d, c -= 8);
                if (0 === o) o = 1 - u;
                else {
                    if (o === l) return a ? NaN : 1 / 0 * (p ? -1 : 1);
                    a += Math.pow(2, i), o -= u
                }
                return (p ? -1 : 1) * a * Math.pow(2, o - i)
            }, n.write = function(e, t, n, i, r, o) {
                var a, s, l, u = 8 * o - r - 1,
                    c = (1 << u) - 1,
                    f = c >> 1,
                    d = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    p = i ? 0 : o - 1,
                    h = i ? 1 : -1,
                    g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = c) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), (t += a + f >= 1 ? d / l : d * Math.pow(2, 1 - f)) * l >= 2 && (a++, l /= 2), a + f >= c ? (s = 0, a = c) : a + f >= 1 ? (s = (t * l - 1) * Math.pow(2, r), a += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, r), a = 0)); r >= 8; e[n + p] = 255 & s, p += h, s /= 256, r -= 8);
                for (a = a << r | s, u += r; u > 0; e[n + p] = 255 & a, p += h, a /= 256, u -= 8);
                e[n + p - h] |= 128 * g
            }
        }, {}],
        41: [function(e, t, n) {
            var i = [].indexOf;
            t.exports = function(e, t) {
                if (i) return e.indexOf(t);
                for (var n = 0; n < e.length; ++n)
                    if (e[n] === t) return n;
                return -1
            }
        }, {}],
        42: [function(e, t, n) {
            t.exports = function(e) {
                var t = i.call(e);
                return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
            };
            var i = Object.prototype.toString
        }, {}],
        43: [function(e, t, n) {
            var i = {}.toString;
            t.exports = Array.isArray || function(e) {
                return "[object Array]" == i.call(e)
            }
        }, {}],
        44: [function(e, t, n) {
            (function(e) {
                ! function(i) {
                    var r = "object" == typeof n && n && !n.nodeType && n,
                        o = "object" == typeof t && t && !t.nodeType && t,
                        a = "object" == typeof e && e;
                    a.global !== a && a.window !== a && a.self !== a || (i = a);
                    var s, l, u = 2147483647,
                        c = 36,
                        f = 1,
                        d = 26,
                        p = 38,
                        h = 700,
                        g = 72,
                        m = 128,
                        v = "-",
                        y = /^xn--/,
                        w = /[^\x20-\x7E]/,
                        b = /[\x2E\u3002\uFF0E\uFF61]/g,
                        I = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        },
                        M = c - f,
                        C = Math.floor,
                        A = String.fromCharCode;

                    function S(e) {
                        throw new RangeError(I[e])
                    }

                    function E(e, t) {
                        for (var n = e.length, i = []; n--;) i[n] = t(e[n]);
                        return i
                    }

                    function D(e, t) {
                        var n = e.split("@"),
                            i = "";
                        return n.length > 1 && (i = n[0] + "@", e = n[1]), i + E((e = e.replace(b, ".")).split("."), t).join(".")
                    }

                    function N(e) {
                        for (var t, n, i = [], r = 0, o = e.length; r < o;)(t = e.charCodeAt(r++)) >= 55296 && t <= 56319 && r < o ? 56320 == (64512 & (n = e.charCodeAt(r++))) ? i.push(((1023 & t) << 10) + (1023 & n) + 65536) : (i.push(t), r--) : i.push(t);
                        return i
                    }

                    function j(e) {
                        return E(e, function(e) {
                            var t = "";
                            return e > 65535 && (t += A((e -= 65536) >>> 10 & 1023 | 55296), e = 56320 | 1023 & e), t += A(e)
                        }).join("")
                    }

                    function L(e, t) {
                        return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                    }

                    function x(e, t, n) {
                        var i = 0;
                        for (e = n ? C(e / h) : e >> 1, e += C(e / t); e > M * d >> 1; i += c) e = C(e / M);
                        return C(i + (M + 1) * e / (e + p))
                    }

                    function T(e) {
                        var t, n, i, r, o, a, s, l, p, h, y, w = [],
                            b = e.length,
                            I = 0,
                            M = m,
                            A = g;
                        for ((n = e.lastIndexOf(v)) < 0 && (n = 0), i = 0; i < n; ++i) e.charCodeAt(i) >= 128 && S("not-basic"), w.push(e.charCodeAt(i));
                        for (r = n > 0 ? n + 1 : 0; r < b;) {
                            for (o = I, a = 1, s = c; r >= b && S("invalid-input"), ((l = (y = e.charCodeAt(r++)) - 48 < 10 ? y - 22 : y - 65 < 26 ? y - 65 : y - 97 < 26 ? y - 97 : c) >= c || l > C((u - I) / a)) && S("overflow"), I += l * a, !(l < (p = s <= A ? f : s >= A + d ? d : s - A)); s += c) a > C(u / (h = c - p)) && S("overflow"), a *= h;
                            A = x(I - o, t = w.length + 1, 0 == o), C(I / t) > u - M && S("overflow"), M += C(I / t), I %= t, w.splice(I++, 0, M)
                        }
                        return j(w)
                    }

                    function Z(e) {
                        var t, n, i, r, o, a, s, l, p, h, y, w, b, I, M, E = [];
                        for (w = (e = N(e)).length, t = m, n = 0, o = g, a = 0; a < w; ++a)(y = e[a]) < 128 && E.push(A(y));
                        for (i = r = E.length, r && E.push(v); i < w;) {
                            for (s = u, a = 0; a < w; ++a)(y = e[a]) >= t && y < s && (s = y);
                            for (s - t > C((u - n) / (b = i + 1)) && S("overflow"), n += (s - t) * b, t = s, a = 0; a < w; ++a)
                                if ((y = e[a]) < t && ++n > u && S("overflow"), y == t) {
                                    for (l = n, p = c; !(l < (h = p <= o ? f : p >= o + d ? d : p - o)); p += c) M = l - h, I = c - h, E.push(A(L(h + M % I, 0))), l = C(M / I);
                                    E.push(A(L(l, 0))), o = x(n, b, i == r), n = 0, ++i
                                }++n, ++t
                        }
                        return E.join("")
                    }
                    if (s = {
                            version: "1.4.1",
                            ucs2: {
                                decode: N,
                                encode: j
                            },
                            decode: T,
                            encode: Z,
                            toASCII: function(e) {
                                return D(e, function(e) {
                                    return w.test(e) ? "xn--" + Z(e) : e
                                })
                            },
                            toUnicode: function(e) {
                                return D(e, function(e) {
                                    return y.test(e) ? T(e.slice(4).toLowerCase()) : e
                                })
                            }
                        }, r && o)
                        if (t.exports == r) o.exports = s;
                        else
                            for (l in s) s.hasOwnProperty(l) && (r[l] = s[l]);
                    else i.punycode = s
                }(this)
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        45: [function(e, t, n) {
            ! function(e, n) {
                void 0 !== t && t.exports ? t.exports = n() : this.$script = n()
            }(0, function() {
                var e, t, n = document,
                    i = n.getElementsByTagName("head")[0],
                    r = !1,
                    o = "push",
                    a = "readyState",
                    s = "onreadystatechange",
                    l = {},
                    u = {},
                    c = {},
                    f = {};

                function d(e, t) {
                    for (var n = 0, i = e.length; n < i; ++n)
                        if (!t(e[n])) return r;
                    return 1
                }

                function p(e, t) {
                    d(e, function(e) {
                        return !t(e)
                    })
                }

                function h(t, n, i) {
                    t = t[o] ? t : [t];
                    var r = n && n.call,
                        a = r ? n : i,
                        s = r ? t.join("") : n,
                        m = t.length;

                    function v(e) {
                        return e.call ? e() : l[e]
                    }

                    function y() {
                        if (!--m)
                            for (var e in l[s] = 1, a && a(), c) d(e.split("|"), v) && !p(c[e], v) && (c[e] = [])
                    }
                    return setTimeout(function() {
                        p(t, function t(n, i) {
                            return null === n ? y() : (i || /^https?:\/\//.test(n) || !e || (n = -1 === n.indexOf(".js") ? e + n + ".js" : e + n), f[n] ? (s && (u[s] = 1), 2 == f[n] ? y() : setTimeout(function() {
                                t(n, !0)
                            }, 0)) : (f[n] = 1, s && (u[s] = 1), void g(n, y)))
                        })
                    }, 0), h
                }

                function g(e, r) {
                    var o, l = n.createElement("script");
                    l.onload = l.onerror = l[s] = function() {
                        l[a] && !/^c|loade/.test(l[a]) || o || (l.onload = l[s] = null, o = 1, f[e] = 2, r())
                    }, l.async = 1, l.src = t ? e + (-1 === e.indexOf("?") ? "?" : "&") + t : e, i.insertBefore(l, i.lastChild)
                }
                return h.get = g, h.order = function(e, t, n) {
                    ! function i(r) {
                        r = e.shift(), e.length ? h(r, i) : h(r, t, n)
                    }()
                }, h.path = function(t) {
                    e = t
                }, h.urlArgs = function(e) {
                    t = e
                }, h.ready = function(e, t, n) {
                    e = e[o] ? e : [e];
                    var i, r = [];
                    return !p(e, function(e) {
                        l[e] || r[o](e)
                    }) && d(e, function(e) {
                        return l[e]
                    }) ? t() : (i = e.join("|"), c[i] = c[i] || [], c[i][o](t), n && n(r)), h
                }, h.done = function(e) {
                    h([null], e)
                }, h
            })
        }, {}]
    }, {}, [32])(32)
});
