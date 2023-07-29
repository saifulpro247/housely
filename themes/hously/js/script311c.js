(() => {
    function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
        } : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        }, n(e)
    }

    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var o = t[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (a = o.key, r = void 0, r = function(e, t) {
                if ("object" !== n(e) || null === e) return e;
                var i = e[Symbol.toPrimitive];
                if (void 0 !== i) {
                    var o = i.call(e, t || "default");
                    if ("object" !== n(o)) return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(a, "string"), "symbol" === n(r) ? r : String(r)), o)
        }
        var a, r
    }
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
        }
    }), window.__ = function(n) {
        return window.trans = window.trans || {}, "undefined" !== window.trans[n] && window.trans[n] ? window.trans[n] : n
    }, $(document).ready((function() {
        "undefined" != typeof easy_background && easy_background("#home", {
            slide: $("#home").data("images"),
            delay: [4e3, 4e3, 4e3]
        }), (new t).init()
    }));
    var t = function() {
        function n() {
            ! function(n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, n)
        }
        var t, i, o;
        return t = n, (i = [{
            key: "init",
            value: function() {
                this.keyword(), this.location(), this.project(), $(".search-filter").on("click", ".toggle-advanced-search", (function() {
                    $(this).siblings(".advanced-search").toggleClass("hidden")
                })), $("#searchTab").on("click", "button", (function() {
                    $(this).parents("#searchTab").siblings(".search-filter").find(".advanced-search").addClass("hidden")
                })), $("body").on("click", (function(n) {
                    $(n.target).is("#location-suggestion") || $("#location-suggestion").find("ul").html(null), $(n.target).is("#keyword-suggestion") || $("#keyword-suggestion").find("ul").html(null)
                }))
            }
        }, {
            key: "keyword",
            value: function() {
                $(".search-filter").on("keyup", 'input[name="k"]', (function() {
                    var n = $(this).closest("form"),
                        e = n.find('input[name="k"]').parent();
                    e.find(".mdi-loading").removeClass("hidden"), setTimeout((function() {
                        var t = n.find('input[name="k"]').val(),
                            i = n.find('input[name="type"]').val(),
                            o = new URLSearchParams;
                        o.append("type", i), o.append("k", t), o.append("minimal", !0);
                        var a = "".concat(n.data("ajax-url"), "?").concat(o.toString());
                        $.post(a, (function(n) {
                            e.find(".mdi-loading").addClass("hidden"), e.append(n.data), e.find("#keyword-suggestion").removeClass("hidden")
                        }))
                    }), 500)
                })).on("keydown", 'input[name="k"]', (function() {
                    $(".search-filter").find("#keyword-suggestion").remove()
                }))
            }
        }, {
            key: "location",
            value: function() {
                var n = null;
                $(".search-filter").on("keyup", 'input[name="location"]', (function() {
                    var e = $(this);
                    e.siblings(".mdi-loading").removeClass("hidden"), clearTimeout(n), n = setTimeout((function() {
                        var n = e.val(),
                            t = "".concat(e.data("url"), "?location=").concat(n);
                        $.get(t, (function(n) {
                            e.siblings(".mdi-loading").addClass("hidden");
                            var t = e.closest(".filter-search-form");
                            t.append(n.data), t.find("#location-suggestion").removeClass("hidden")
                        }))
                    }), 500)
                })).on("keydown", 'input[name="location"]', (function() {
                    $(".search-filter").find("#location-suggestion").remove()
                })).on("click", "#location-suggestion ul li", (function() {
                    $(this).closest(".filter-search-form").find('input[name="location"]').val($(this).data("location")), $(".search-filter").find("#location-suggestion ul").remove()
                }))
            }
        }, {
            key: "project",
            value: function() {
                var n = null;
                $(".search-filter").on("keyup", 'input[name="project"]', (function() {
                    var e = $(this);
                    e.siblings(".mdi-loading").removeClass("hidden"), clearTimeout(n), n = setTimeout((function() {
                        var n = e.val(),
                            t = "".concat(e.data("url"), "?project=").concat(n);
                        $.get(t, (function(n) {
                            e.siblings(".mdi-loading").addClass("hidden");
                            var t = e.closest(".filter-search-form");
                            t.append(n.data), t.find("#projects-suggestion").removeClass("hidden")
                        }))
                    }), 500)
                })).on("keydown", 'input[name="project"]', (function() {
                    $(".search-filter").find("#projects-suggestion").remove()
                })).on("click", "#projects-suggestion ul li", (function() {
                    $(this).closest(".filter-search-form").find('input[name="project"]').val($(this).data("project")), $(".search-filter").find("#projects-suggestion ul").remove()
                }))
            }
        }]) && e(t.prototype, i), o && e(t, o), Object.defineProperty(t, "prototype", {
            writable: !1
        }), n
    }()
})();