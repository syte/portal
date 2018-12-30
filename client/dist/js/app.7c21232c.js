(function(t) {
  function e(e) {
    for (
      var n, a, i = e[0], u = e[1], c = e[2], p = 0, d = [];
      p < i.length;
      p++
    )
      (a = i[p]), s[a] && d.push(s[a][0]), (s[a] = 0);
    for (n in u) Object.prototype.hasOwnProperty.call(u, n) && (t[n] = u[n]);
    l && l(e);
    while (d.length) d.shift()();
    return o.push.apply(o, c || []), r();
  }
  function r() {
    for (var t, e = 0; e < o.length; e++) {
      for (var r = o[e], n = !0, i = 1; i < r.length; i++) {
        var u = r[i];
        0 !== s[u] && (n = !1);
      }
      n && (o.splice(e--, 1), (t = a((a.s = r[0]))));
    }
    return t;
  }
  var n = {},
    s = { app: 0 },
    o = [];
  function a(e) {
    if (n[e]) return n[e].exports;
    var r = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(r.exports, r, r.exports, a), (r.l = !0), r.exports;
  }
  (a.m = t),
    (a.c = n),
    (a.d = function(t, e, r) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (a.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.t = function(t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (a.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          a.d(
            r,
            n,
            function(e) {
              return t[e];
            }.bind(null, n)
          );
      return r;
    }),
    (a.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return a.d(e, "a", e), e;
    }),
    (a.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (a.p = "/");
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    u = i.push.bind(i);
  (i.push = e), (i = i.slice());
  for (var c = 0; c < i.length; c++) e(i[c]);
  var l = u;
  o.push([0, "chunk-vendors"]), r();
})({
  0: function(t, e, r) {
    t.exports = r("56d7");
  },
  "034f": function(t, e, r) {
    "use strict";
    var n = r("64a9"),
      s = r.n(n);
    s.a;
  },
  1: function(t, e) {},
  "1f1f": function(t, e, r) {},
  2: function(t, e) {},
  3: function(t, e) {},
  "35c2": function(t, e, r) {
    "use strict";
    var n = r("55b2"),
      s = r.n(n);
    s.a;
  },
  "376e": function(t, e, r) {},
  3960: function(t, e, r) {
    "use strict";
    var n = r("8d97"),
      s = r.n(n);
    s.a;
  },
  4: function(t, e) {},
  4051: function(t, e, r) {
    "use strict";
    var n = r("c7ab"),
      s = r.n(n);
    s.a;
  },
  5364: function(t, e, r) {
    "use strict";
    var n = r("1f1f"),
      s = r.n(n);
    s.a;
  },
  "55b2": function(t, e, r) {},
  "56d7": function(t, e, r) {
    "use strict";
    r.r(e);
    r("cadf"), r("551c"), r("097d");
    var n = r("2b0e"),
      s = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          "div",
          { attrs: { id: "app" } },
          [
            r("link", {
              attrs: {
                rel: "stylesheet",
                href: "https://fonts.googleapis.com/css?family=Roboto"
              }
            }),
            -1 === ["login", "register"].indexOf(t.$route.name)
              ? r("Header")
              : t._e(),
            r("notifications", { attrs: { group: "portal" } }),
            r(
              "transition",
              { attrs: { name: "fade", mode: "out-in" } },
              [r("router-view")],
              1
            )
          ],
          1
        );
      },
      o = [],
      a = r("bc3a"),
      i = r.n(a),
      u = function(t) {
        t
          ? (i.a.defaults.headers.common["x-access-token"] = "Bearer ".concat(
              t
            ))
          : delete i.a.defaults.headers.common["x-access-token"];
      },
      c = u,
      l = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r("header", { staticClass: "cf" }, [
          r(
            "div",
            { staticClass: "viewport" },
            [
              r("nav", [
                r("ul", [
                  r(
                    "li",
                    [
                      r(
                        "router-link",
                        { attrs: { to: "/profile" } },
                        [
                          r("font-awesome-icon", { attrs: { icon: "user" } }),
                          t._v("\n          Profile\n        ")
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  r(
                    "li",
                    [
                      r(
                        "router-link",
                        { attrs: { to: "/all" } },
                        [
                          r("font-awesome-icon", { attrs: { icon: "bolt" } }),
                          t._v("\n          All\n        ")
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ]),
              r(
                "Dropdown",
                {
                  attrs: {
                    className: "settings",
                    items: [
                      {
                        icon: "sign-out-alt",
                        name: "Sign Out",
                        onClick: this.logout
                      }
                    ],
                    isOpen: t.settingsOpen
                  },
                  on: { onClose: t.toggle }
                },
                [
                  r("div", {
                    staticClass: "user-symbol",
                    domProps: { innerHTML: t._s(t.nameSymbol) },
                    on: { click: t.toggle }
                  })
                ]
              )
            ],
            1
          )
        ]);
      },
      p = [],
      d = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          "div",
          { ref: "dropdown", class: t.classObject },
          [
            t._t("default"),
            r(
              "ul",
              { class: t.menuClasses },
              t._l(t.items, function(e) {
                return r(
                  "li",
                  { key: e.name, on: { click: e.onClick } },
                  [
                    r("font-awesome-icon", { attrs: { icon: e.icon } }),
                    t._v(" " + t._s(e.name) + "\n        ")
                  ],
                  1
                );
              }),
              0
            )
          ],
          2
        );
      },
      f = [],
      m = r("ade3"),
      h = {
        props: {
          items: Array,
          className: String,
          isOpen: Boolean,
          onClose: Function,
          icon: String
        },
        computed: {
          classObject: function() {
            return Object(m["a"])({ dropdown: !0 }, this.className, !0);
          },
          menuClasses: function() {
            return { isOpen: this.isOpen, items: !0 };
          }
        },
        methods: {
          handleClick: function(t) {
            var e = this.$refs.dropdown;
            (e.contains(t.target) && e !== t.target) || this.$emit("onClose");
          },
          addEvents: function() {
            document.addEventListener("click", this.handleClick, !0);
          },
          removeEvents: function() {
            document.removeEventListener("click", this.handleClick, !0);
          }
        },
        watch: {
          isOpen: function(t) {
            t ? this.addEvents() : this.removeEvents();
          }
        }
      },
      v = h,
      g = (r("8179"), r("2877")),
      b = Object(g["a"])(v, d, f, !1, null, "52d9931c", null);
    b.options.__file = "Dropdown.vue";
    var w = b.exports,
      y = {
        name: "Header",
        data: function() {
          return { settingsOpen: !1 };
        },
        props: { msg: String },
        methods: {
          toggle: function() {
            this.settingsOpen = !this.settingsOpen;
          },
          logout: function() {
            this.$store.dispatch("user/logout");
          }
        },
        computed: {
          nameSymbol: function() {
            var t = this.$store.state.user.users[
              this.$store.state.user.currentUser.id
            ];
            return t.firstName.slice(0, 1).toUpperCase();
          }
        },
        components: { Dropdown: w }
      },
      _ = y,
      x = (r("3960"), Object(g["a"])(_, l, p, !1, null, "6f12d146", null));
    x.options.__file = "Header.vue";
    var k = x.exports,
      O = {
        name: "app",
        created: function() {
          var t = localStorage.getItem("token");
          t &&
            (c(localStorage.token),
            this.$store.dispatch("user/setToken", localStorage.token));
        },
        components: { Header: k }
      },
      P = O,
      $ = (r("034f"), Object(g["a"])(P, s, o, !1, null, null, null));
    $.options.__file = "App.vue";
    var j = $.exports,
      C = r("2f62"),
      R = (r("96cf"), r("1da1")),
      E = r("be94"),
      S = "http://localhost:3000",
      U = (function() {
        var t = Object(R["a"])(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(
              function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        "return",
                        i.a.post("".concat(S, "/auth/login"), e)
                      );
                    case 1:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
        return function(e) {
          return t.apply(this, arguments);
        };
      })(),
      I = (function() {
        var t = Object(R["a"])(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(
              function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        "return",
                        i.a.put("".concat(S, "/auth/register"), e)
                      );
                    case 1:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
        return function(e) {
          return t.apply(this, arguments);
        };
      })(),
      N = r("14b7"),
      B = r.n(N),
      D = { currentUser: { id: null, isAuthenticated: !1 }, users: {} },
      H = {
        setUser: function(t, e) {
          return (t.currentUser = {
            id: e ? e.id : null,
            isAuthenticated: !!e.id
          });
        },
        addUser: function(t, e) {
          return (t.users[e.id] = e);
        },
        addUsers: function(t, e) {
          return (t.users = Object(E["a"])({}, t.users, e));
        }
      },
      L = {
        login: (function() {
          var t = Object(R["a"])(
            regeneratorRuntime.mark(function t(e, r) {
              var s, o, a;
              return regeneratorRuntime.wrap(
                function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (s = e.commit), (t.next = 3), U(r);
                      case 3:
                        (o = t.sent),
                          (a = o.data),
                          c(a.token),
                          localStorage.setItem("token", a.token),
                          s("addUser", a.user),
                          s("setUser", a.user),
                          n["default"].router.push("profile");
                      case 10:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          );
          function e(e, r) {
            return t.apply(this, arguments);
          }
          return e;
        })(),
        register: (function() {
          var t = Object(R["a"])(
            regeneratorRuntime.mark(function t(e, r) {
              return regeneratorRuntime.wrap(
                function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), I(r);
                      case 2:
                        n["default"].router.push("/login");
                      case 3:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          );
          function e(e, r) {
            return t.apply(this, arguments);
          }
          return e;
        })(),
        logout: function() {
          c(null),
            localStorage.setItem("token", null),
            n["default"].router.push("/login");
        },
        addUsers: function(t, e) {
          var r = t.commit;
          r("addUsers", e);
        },
        setToken: function(t, e) {
          var r = t.commit,
            n = B.a.decode(e),
            s = n.data;
          r("setUser", s), r("addUser", s);
        }
      },
      q = { namespaced: !0, state: D, actions: L, mutations: H },
      z = "http://localhost:3000",
      T = (function() {
        var t = Object(R["a"])(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(
              function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        "return",
                        i.a.post("".concat(z, "/posts/paginate"), e)
                      );
                    case 1:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
        return function(e) {
          return t.apply(this, arguments);
        };
      })(),
      A = (function() {
        var t = Object(R["a"])(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(
              function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        "return",
                        i.a.patch("".concat(z, "/posts/").concat(e.id), e)
                      );
                    case 1:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
        return function(e) {
          return t.apply(this, arguments);
        };
      })(),
      M = (function() {
        var t = Object(R["a"])(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(
              function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        "return",
                        i.a.put("".concat(z, "/posts"), e)
                      );
                    case 1:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
        return function(e) {
          return t.apply(this, arguments);
        };
      })(),
      Y = (function() {
        var t = Object(R["a"])(
          regeneratorRuntime.mark(function t(e) {
            return regeneratorRuntime.wrap(
              function(t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        "return",
                        i.a.delete("".concat(z, "/posts/").concat(e))
                      );
                    case 1:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              this
            );
          })
        );
        return function(e) {
          return t.apply(this, arguments);
        };
      })(),
      F = {
        posts: {},
        pagination: {
          all: { initialized: !1, offset: null },
          profile: { initialized: !1, offset: null }
        }
      },
      J = {
        addPost: function(t, e) {
          return n["default"].set(t.posts, e.id, e);
        },
        addPosts: function(t, e) {
          return (t.posts = Object(E["a"])({}, t.posts, e));
        },
        deletePost: function(t, e) {
          return n["default"].delete(t.posts, e);
        },
        updatePost: function(t, e) {
          return (t.posts[e.id] = e);
        },
        setPagination: function(t, e) {
          var r = e.type,
            n = e.initialized,
            s = e.offset;
          return (t.pagination[r] = { initialized: n, offset: s });
        }
      },
      W = {
        deletePost: (function() {
          var t = Object(R["a"])(
            regeneratorRuntime.mark(function t(e, r) {
              var n;
              return regeneratorRuntime.wrap(
                function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (n = e.commit), (t.next = 3), Y(r);
                      case 3:
                        n("deletePost", r);
                      case 4:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          );
          function e(e, r) {
            return t.apply(this, arguments);
          }
          return e;
        })(),
        updatePost: (function() {
          var t = Object(R["a"])(
            regeneratorRuntime.mark(function t(e, r) {
              var n, s, o;
              return regeneratorRuntime.wrap(
                function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (n = e.commit), (t.next = 3), A(r);
                      case 3:
                        (s = t.sent), (o = s.data), n("updatePost", o);
                      case 6:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          );
          function e(e, r) {
            return t.apply(this, arguments);
          }
          return e;
        })(),
        queryPosts: (function() {
          var t = Object(R["a"])(
            regeneratorRuntime.mark(function t(e) {
              var r, n, s, o, a, i, u, c;
              return regeneratorRuntime.wrap(
                function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((r = e.state),
                          (n = e.commit),
                          (s = e.dispatch),
                          (o = r.pagination.all),
                          (a = o.offset),
                          (i = o.initialized),
                          !a && i)
                        ) {
                          t.next = 10;
                          break;
                        }
                        return (t.next = 5), T({ offset: a });
                      case 5:
                        (u = t.sent),
                          (c = u.data),
                          n("addPosts", c.posts),
                          n("setPagination", {
                            type: "all",
                            offset: c.offset,
                            initialized: !0
                          }),
                          s("user/addUsers", c.users, { root: !0 });
                      case 10:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          );
          function e(e) {
            return t.apply(this, arguments);
          }
          return e;
        })(),
        queryPostsProfile: (function() {
          var t = Object(R["a"])(
            regeneratorRuntime.mark(function t(e, r) {
              var n, s, o, a, i, u, c, l;
              return regeneratorRuntime.wrap(
                function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          ((n = e.state),
                          (s = e.commit),
                          (o = e.dispatch),
                          (a = n.pagination.profile),
                          (i = a.offset),
                          (u = a.initialized),
                          !i && u)
                        ) {
                          t.next = 10;
                          break;
                        }
                        return (t.next = 5), T({ offset: i, userId: r });
                      case 5:
                        (c = t.sent),
                          (l = c.data),
                          s("addPosts", l.posts),
                          s("setPagination", {
                            type: "profile",
                            offset: l.offset,
                            initialized: !0
                          }),
                          o("user/addUsers", l.users, { root: !0 });
                      case 10:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          );
          function e(e, r) {
            return t.apply(this, arguments);
          }
          return e;
        })(),
        addPost: (function() {
          var t = Object(R["a"])(
            regeneratorRuntime.mark(function t(e, r) {
              var n, s, o;
              return regeneratorRuntime.wrap(
                function(t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (n = e.commit), (t.next = 3), M(r);
                      case 3:
                        (s = t.sent), (o = s.data), n("addPost", o);
                      case 6:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          );
          function e(e, r) {
            return t.apply(this, arguments);
          }
          return e;
        })()
      },
      G = { namespaced: !0, state: F, actions: W, mutations: J };
    n["default"].use(C["a"]);
    var K = new C["a"].Store({ modules: { user: q, post: G }, namespaced: !0 }),
      Q = r("8c4f"),
      V = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          "div",
          { staticClass: "profile" },
          [
            r("Create", {
              attrs: {
                user:
                  t.$store.state.user.users[t.$store.state.user.currentUser.id],
                canEdit: !0
              }
            }),
            t._l(t.getPosts, function(e) {
              return r(
                "div",
                { key: e.id },
                [
                  r("Post", {
                    attrs: {
                      post: e,
                      user:
                        t.$store.state.user.users[
                          t.$store.state.user.currentUser.id
                        ],
                      canEdit: !0
                    }
                  })
                ],
                1
              );
            })
          ],
          2
        );
      },
      X = [],
      Z = (r("ac6a"),
      r("8615"),
      r("55dd"),
      function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r("div", { staticClass: "post card" }, [
          r("div", { staticClass: "user cf" }, [
            r("div", {
              staticClass: "user-symbol",
              domProps: { innerHTML: t._s(t.nameSymbol) }
            }),
            r("div", { staticClass: "info" }, [
              r("div", {
                staticClass: "name",
                domProps: { innerHTML: t._s(t.name) }
              }),
              r("div", {
                staticClass: "date",
                domProps: { innerHTML: t._s(t.date) }
              })
            ])
          ]),
          r("div", { staticClass: "body" }, [
            r("h2", { staticClass: "title" }, [t._v(t._s(t.post.title))]),
            r("div", { staticClass: "content" }, [
              t._v("\n        " + t._s(t.post.content) + "\n      ")
            ])
          ]),
          t.isEditing
            ? r("div", { staticClass: "editor cf" }, [
                r(
                  "form",
                  { on: { submit: t.submit } },
                  [
                    r("font-awesome-icon", {
                      staticClass: "close-btn",
                      attrs: { icon: "times" },
                      on: { click: t.setEditing }
                    }),
                    r("Input", {
                      attrs: {
                        placeholder: "Title",
                        type: "text",
                        error: t.errors.title
                      },
                      model: {
                        value: t.editor.title,
                        callback: function(e) {
                          t.$set(t.editor, "title", e);
                        },
                        expression: "editor.title"
                      }
                    }),
                    r("Input", {
                      attrs: {
                        placeholder: "Content",
                        type: "textarea",
                        error: t.errors.content
                      },
                      model: {
                        value: t.editor.content,
                        callback: function(e) {
                          t.$set(t.editor, "content", e);
                        },
                        expression: "editor.content"
                      }
                    }),
                    r(
                      "Button",
                      { attrs: { theme: "primary", type: "submit" } },
                      [t._v("Save Changes")]
                    )
                  ],
                  1
                )
              ])
            : t._e(),
          t.canEdit
            ? r("div", [
                r("div", { staticClass: "controls" }, [
                  r(
                    "span",
                    { staticClass: "action", on: { click: t.setEditing } },
                    [
                      r("font-awesome-icon", { attrs: { icon: "pencil-alt" } }),
                      t._v("Edit")
                    ],
                    1
                  ),
                  r(
                    "span",
                    { staticClass: "action", on: { click: t.remove } },
                    [
                      r("font-awesome-icon", { attrs: { icon: "times" } }),
                      t._v("Delete")
                    ],
                    1
                  )
                ])
              ])
            : t._e()
        ]);
      }),
      tt = [],
      et = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          "div",
          { staticClass: "input" },
          [
            "textarea" === t.type
              ? r("textarea", {
                  class: t.classObject,
                  attrs: { rows: t.rows, columns: t.columns },
                  domProps: { value: t.value },
                  on: { input: t.onChange }
                })
              : r("input", {
                  class: t.classObject,
                  attrs: { type: t.type, name: t.name },
                  domProps: { value: t.value },
                  on: { input: t.onChange }
                }),
            t.placeholder
              ? r("span", { staticClass: "floating-placeholder" }, [
                  t._v(t._s(t.placeholder))
                ])
              : t._e(),
            r("Error", { attrs: { message: t.error } })
          ],
          1
        );
      },
      rt = [],
      nt = (r("c5f6"),
      function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return t.message
          ? r("div", { staticClass: "error" }, [t._v(t._s(t.message))])
          : t._e();
      }),
      st = [],
      ot = { name: "error", props: { message: String } },
      at = ot,
      it = (r("6e21"), Object(g["a"])(at, nt, st, !1, null, null, null));
    it.options.__file = "Error.vue";
    var ut = it.exports,
      ct = {
        props: {
          type: String,
          name: String,
          placeholder: String,
          value: String,
          error: String,
          columns: { type: Number },
          rows: { type: Number }
        },
        methods: {
          onChange: function(t) {
            this.$emit("input", t.target.value);
          }
        },
        components: { Error: ut },
        computed: {
          classObject: function() {
            return Object(m["a"])(
              { filled: (this.value || "").length > 0, "line-input": !0 },
              this.type,
              !0
            );
          }
        }
      },
      lt = ct,
      pt = (r("7eac"), Object(g["a"])(lt, et, rt, !1, null, "44a5bdad", null));
    pt.options.__file = "Input.vue";
    var dt = pt.exports,
      ft = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r("button", { class: t.classObject }, [t._t("default")], 2);
      },
      mt = [],
      ht = {
        props: {
          type: String,
          text: String,
          isSaving: String,
          theme: String,
          isDisabled: { type: Boolean, default: !1 },
          isLoading: { type: Boolean, default: !1 }
        },
        computed: {
          classObject: function() {
            return Object(m["a"])(
              { isSaving: !1, "flat-button": !0 },
              this.theme,
              !0
            );
          }
        }
      },
      vt = ht,
      gt = (r("35c2"), Object(g["a"])(vt, ft, mt, !1, null, "6a846e87", null));
    gt.options.__file = "Button.vue";
    var bt = gt.exports,
      wt = {
        name: "post",
        data: function() {
          return {
            editor: Object(E["a"])({}, this.post),
            isEditing: !1,
            errors: {}
          };
        },
        props: { post: Object, canEdit: Boolean, user: Object },
        components: { Input: dt, Button: bt },
        methods: {
          submit: (function() {
            var t = Object(R["a"])(
              regeneratorRuntime.mark(function t(e) {
                return regeneratorRuntime.wrap(
                  function(t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            e.preventDefault(),
                            (t.prev = 1),
                            (t.next = 4),
                            this.$store.dispatch("post/updatePost", this.editor)
                          );
                        case 4:
                          this.$notify({
                            type: "success",
                            group: "portal",
                            title: "Post saved!",
                            text: "Your post was successfully saved!"
                          }),
                            (this.errors = {}),
                            (t.next = 11);
                          break;
                        case 8:
                          (t.prev = 8),
                            (t.t0 = t["catch"](1)),
                            400 === t.t0.response.status &&
                              (this.errors = t.t0.response.data.errors);
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[1, 8]]
                );
              })
            );
            function e(e) {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          remove: (function() {
            var t = Object(R["a"])(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function(t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            this.$store.dispatch(
                              "post/deletePost",
                              this.post.id
                            )
                          );
                        case 3:
                          this.$notify({
                            type: "success",
                            group: "portal",
                            title: "Post deleted!",
                            text: "Your post was successfully deleted!"
                          }),
                            (t.next = 8);
                          break;
                        case 6:
                          (t.prev = 6), (t.t0 = t["catch"](0));
                        case 8:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[0, 6]]
                );
              })
            );
            function e() {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          setEditing: function() {
            this.isEditing = !this.isEditing;
          }
        },
        computed: {
          nameSymbol: function() {
            return this.user.firstName.slice(0, 1).toUpperCase();
          },
          name: function() {
            return this.user.firstName + " " + this.user.lastName;
          },
          date: function() {
            var t = {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            };
            return new Date(this.post.updatedAt).toLocaleDateString("en-US", t);
          }
        }
      },
      yt = wt,
      _t = (r("4051"), Object(g["a"])(yt, Z, tt, !1, null, "28a5a6fe", null));
    _t.options.__file = "Post.vue";
    var xt = _t.exports,
      kt = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r("div", { staticClass: "card create" }, [
          r(
            "form",
            { on: { submit: t.submit } },
            [
              r("Input", {
                attrs: {
                  placeholder: "Title",
                  type: "text",
                  error: t.errors.title
                },
                model: {
                  value: t.editor.title,
                  callback: function(e) {
                    t.$set(t.editor, "title", e);
                  },
                  expression: "editor.title"
                }
              }),
              r("Input", {
                attrs: {
                  placeholder: "Content",
                  type: "textarea",
                  error: t.errors.content
                },
                model: {
                  value: t.editor.content,
                  callback: function(e) {
                    t.$set(t.editor, "content", e);
                  },
                  expression: "editor.content"
                }
              }),
              r("Button", { attrs: { theme: "primary", type: "submit" } }, [
                t._v("Create")
              ])
            ],
            1
          )
        ]);
      },
      Ot = [],
      Pt = function(t) {
        return { title: "", content: "", userId: t };
      },
      $t = {
        name: "create",
        data: function() {
          return { editor: Pt(this.user.id), errors: {} };
        },
        props: { user: Object },
        components: { Input: dt, Button: bt },
        methods: {
          submit: (function() {
            var t = Object(R["a"])(
              regeneratorRuntime.mark(function t(e) {
                return regeneratorRuntime.wrap(
                  function(t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            e.preventDefault(),
                            (t.prev = 1),
                            (t.next = 4),
                            this.$store.dispatch("post/addPost", this.editor)
                          );
                        case 4:
                          (this.errors = {}),
                            (this.editor = Pt(this.user.id)),
                            this.$notify({
                              type: "success",
                              group: "portal",
                              title: "Post created!",
                              text: "Your post was successfully created!"
                            }),
                            (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t["catch"](1)),
                            400 === t.t0.response.status &&
                              (this.errors = t.t0.response.data.errors);
                        case 12:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[1, 9]]
                );
              })
            );
            function e(e) {
              return t.apply(this, arguments);
            }
            return e;
          })()
        }
      },
      jt = $t,
      Ct = (r("5364"), Object(g["a"])(jt, kt, Ot, !1, null, "4b3c5bed", null));
    Ct.options.__file = "Create.vue";
    var Rt = Ct.exports,
      Et = {
        name: "Profile",
        components: { Post: xt, Create: Rt },
        methods: {
          fetchPage: function(t) {
            t.preventDefault(), this.$store.dispatch("post/queryPosts");
          }
        },
        created: function() {
          var t = this;
          this.$store.state.post.pagination.profile.initialized ||
            (console.log(this.$store.state.user.currentUser.id),
            this.$store.dispatch(
              "post/queryPostsProfile",
              this.$store.state.user.currentUser.id
            )),
            (window.onscroll = function() {
              window.innerHeight + window.pageYOffset >=
                document.body.offsetHeight &&
                t.$store.dispatch("post/queryPostsProfile");
            });
        },
        computed: {
          getPosts: function() {
            var t = this;
            return (
              console.log(this.$store.state.user.currentUser.id),
              Object.values(this.$store.state.post.posts)
                .filter(function(e) {
                  return e.userId === t.$store.state.user.currentUser.id;
                })
                .sort(function(t, e) {
                  return t.offset > e.offset ? -1 : t.offset < e.offset ? 1 : 0;
                })
            );
          }
        },
        destroyed: function() {}
      },
      St = Et,
      Ut = Object(g["a"])(St, V, X, !1, null, null, null);
    Ut.options.__file = "Profile.vue";
    var It = Ut.exports,
      Nt = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          "div",
          { staticClass: "portal login" },
          [
            r("Error", { attrs: { message: t.errors.global } }),
            r(
              "form",
              { on: { submit: t.submit } },
              [
                r("Input", {
                  attrs: {
                    type: "email",
                    name: "email",
                    placeholder: "Email Address",
                    error: t.errors.email
                  },
                  model: {
                    value: t.email,
                    callback: function(e) {
                      t.email = e;
                    },
                    expression: "email"
                  }
                }),
                r("Input", {
                  attrs: {
                    type: "password",
                    name: "password",
                    placeholder: "Password",
                    error: t.errors.password
                  },
                  model: {
                    value: t.password,
                    callback: function(e) {
                      t.password = e;
                    },
                    expression: "password"
                  }
                }),
                r("Button", { attrs: { theme: "primary", type: "submit" } }, [
                  t._v("Login")
                ]),
                r(
                  "router-link",
                  { staticClass: "portal-link", attrs: { to: "/register" } },
                  [t._v("Don't have an account?")]
                )
              ],
              1
            )
          ],
          1
        );
      },
      Bt = [],
      Dt = {
        data: function() {
          return { email: "", password: "", errors: {} };
        },
        name: "Login",
        components: { Input: dt, Button: bt, Error: ut },
        methods: {
          submit: (function() {
            var t = Object(R["a"])(
              regeneratorRuntime.mark(function t(e) {
                return regeneratorRuntime.wrap(
                  function(t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            e.preventDefault(),
                            (t.prev = 1),
                            (t.next = 4),
                            this.$store.dispatch("user/login", {
                              email: this.email,
                              password: this.password
                            })
                          );
                        case 4:
                          (this.errors = {}), (t.next = 11);
                          break;
                        case 7:
                          (t.prev = 7),
                            (t.t0 = t["catch"](1)),
                            400 === t.t0.response.status &&
                              (this.errors = t.t0.response.data.errors),
                            401 === t.t0.response.status &&
                              (this.errors.global =
                                "User name or password is invalid");
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[1, 7]]
                );
              })
            );
            function e(e) {
              return t.apply(this, arguments);
            }
            return e;
          })()
        }
      },
      Ht = Dt,
      Lt = Object(g["a"])(Ht, Nt, Bt, !1, null, null, null);
    Lt.options.__file = "Login.vue";
    var qt = Lt.exports,
      zt = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r("div", { staticClass: "portal login" }, [
          r(
            "form",
            { on: { submit: t.submit } },
            [
              r("Input", {
                attrs: {
                  type: "text",
                  name: "email",
                  placeholder: "Email Address",
                  error: t.errors.email
                },
                model: {
                  value: t.user.email,
                  callback: function(e) {
                    t.$set(t.user, "email", e);
                  },
                  expression: "user.email"
                }
              }),
              r("Input", {
                attrs: {
                  type: "text",
                  name: "firstName",
                  placeholder: "First Name",
                  error: t.errors.firstName
                },
                model: {
                  value: t.user.firstName,
                  callback: function(e) {
                    t.$set(t.user, "firstName", e);
                  },
                  expression: "user.firstName"
                }
              }),
              r("Input", {
                attrs: {
                  type: "text",
                  name: "lastName",
                  placeholder: "Last Name",
                  error: t.errors.lastName
                },
                model: {
                  value: t.user.lastName,
                  callback: function(e) {
                    t.$set(t.user, "lastName", e);
                  },
                  expression: "user.lastName"
                }
              }),
              r("Input", {
                attrs: {
                  type: "password",
                  name: "password",
                  placeholder: "Password",
                  error: t.errors.password
                },
                model: {
                  value: t.user.password,
                  callback: function(e) {
                    t.$set(t.user, "password", e);
                  },
                  expression: "user.password"
                }
              }),
              r("Input", {
                attrs: {
                  type: "password",
                  name: "confirmPassword",
                  placeholder: "Password Confirmation",
                  error: t.errors.confirmPassword
                },
                model: {
                  value: t.user.confirmPassword,
                  callback: function(e) {
                    t.$set(t.user, "confirmPassword", e);
                  },
                  expression: "user.confirmPassword"
                }
              }),
              r("Button", { attrs: { theme: "primary", type: "submit" } }, [
                t._v("Register")
              ]),
              r(
                "router-link",
                { staticClass: "portal-link", attrs: { to: "/login" } },
                [t._v("Have a account?")]
              )
            ],
            1
          )
        ]);
      },
      Tt = [],
      At = {
        data: function() {
          return {
            user: {
              email: "",
              firstName: "",
              lastName: "",
              password: "",
              confirmPassword: ""
            },
            errors: {}
          };
        },
        methods: {
          submit: (function() {
            var t = Object(R["a"])(
              regeneratorRuntime.mark(function t(e) {
                return regeneratorRuntime.wrap(
                  function(t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            e.preventDefault(),
                            (t.prev = 1),
                            (t.next = 4),
                            this.$store.dispatch("user/register", this.user)
                          );
                        case 4:
                          (this.errors = {}),
                            this.$notify({
                              type: "success",
                              group: "portal",
                              title: "User created!",
                              text:
                                "Your user has been created. You can now login and start making posts!"
                            }),
                            (t.next = 11);
                          break;
                        case 8:
                          (t.prev = 8),
                            (t.t0 = t["catch"](1)),
                            400 === t.t0.response.status &&
                              (this.errors = t.t0.response.data.errors);
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this,
                  [[1, 8]]
                );
              })
            );
            function e(e) {
              return t.apply(this, arguments);
            }
            return e;
          })()
        },
        components: { Input: dt, Button: bt }
      },
      Mt = At,
      Yt = Object(g["a"])(Mt, zt, Tt, !1, null, null, null);
    Yt.options.__file = "Register.vue";
    var Ft = Yt.exports,
      Jt = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r(
          "div",
          { staticClass: "all" },
          t._l(t.getPosts, function(e) {
            return r(
              "div",
              { key: e.id },
              [
                r("Post", {
                  attrs: {
                    post: e,
                    user: t.$store.state.user.users[e.userId],
                    canEdit: !1
                  }
                })
              ],
              1
            );
          }),
          0
        );
      },
      Wt = [],
      Gt = {
        name: "All",
        methods: {
          fetchPage: function(t) {
            t.preventDefault(), this.$store.dispatch("post/queryPosts");
          }
        },
        components: { Post: xt },
        created: function() {
          var t = this;
          this.$store.state.post.pagination.all.initialized ||
            this.$store.dispatch("post/queryPosts"),
            (window.onscroll = function() {
              window.innerHeight + window.pageYOffset >=
                document.body.offsetHeight &&
                t.$store.dispatch("post/queryPosts");
            });
        },
        computed: {
          getPosts: function() {
            return Object.values(this.$store.state.post.posts).sort(function(
              t,
              e
            ) {
              return t.offset > e.offset ? -1 : t.offset < e.offset ? 1 : 0;
            });
          }
        },
        destroyed: function() {}
      },
      Kt = Gt,
      Qt = Object(g["a"])(Kt, Jt, Wt, !1, null, null, null);
    Qt.options.__file = "All.vue";
    var Vt = Qt.exports,
      Xt = function() {
        var t = this,
          e = t.$createElement,
          r = t._self._c || e;
        return r("div", { staticClass: "box not-found" }, [
          t._v(
            "\n    Sorry, we were able to find the page you were looking for. If you think this is an issue, please\n    connect our helpline.\n"
          )
        ]);
      },
      Zt = [],
      te = { name: "NotFound" },
      ee = te,
      re = Object(g["a"])(ee, Xt, Zt, !1, null, null, null);
    re.options.__file = "NotFound.vue";
    var ne = re.exports;
    function se() {
      var t = new Q["a"]({
        mode: "history",
        fallback: !1,
        scrollBehavior: function() {
          return { y: 0 };
        },
        routes: [
          {
            path: "/profile",
            name: "profile",
            component: It,
            meta: { authRequired: !0 }
          },
          { path: "/login", name: "login", component: qt },
          { path: "/register", name: "register", component: Ft },
          {
            path: "/all",
            name: "all",
            component: Vt,
            meta: { authRequired: !0 }
          },
          { path: "*", component: ne }
        ]
      });
      return (
        t.beforeEach(function(t, e, r) {
          t.matched.some(function(t) {
            return t.meta.authRequired;
          })
            ? localStorage.getItem("token")
              ? r()
              : r({ path: "/login", params: { nextUrl: t.fullPath } })
            : r();
        }),
        t
      );
    }
    n["default"].use(Q["a"]);
    var oe = r("ee98"),
      ae = r.n(oe),
      ie = r("ecee"),
      ue = r("c074"),
      ce = r("ad3d");
    ie["c"].add(ue["a"]),
      ie["c"].add(ue["e"]),
      ie["c"].add(ue["b"]),
      ie["c"].add(ue["d"]),
      ie["c"].add(ue["c"]),
      n["default"].use(ae.a),
      n["default"].component("font-awesome-icon", ce["a"]);
    var le = se();
    (n["default"].router = le), (n["default"].config.productionTip = !1);
    var pe = new n["default"]({
      router: le,
      store: K,
      render: function(t) {
        return t(j);
      }
    }).$mount("#app");
    i.a.interceptors.response.use(
      function(t) {
        return t;
      },
      function(t) {
        throw (401 === t.response.status && n["default"].router.push("/login"),
        400 !== t.response.status &&
          401 !== t.response.status &&
          pe.$notify({
            type: "error",
            group: "portal",
            title: "Sorry an unexpected error occurred!",
            text:
              "Our system is encountering a bit of downtime. We apologize for the inconvience."
          }),
        t);
      }
    );
  },
  "64a9": function(t, e, r) {},
  "6e21": function(t, e, r) {
    "use strict";
    var n = r("376e"),
      s = r.n(n);
    s.a;
  },
  "7eac": function(t, e, r) {
    "use strict";
    var n = r("ab25"),
      s = r.n(n);
    s.a;
  },
  8179: function(t, e, r) {
    "use strict";
    var n = r("9464"),
      s = r.n(n);
    s.a;
  },
  "8d97": function(t, e, r) {},
  9464: function(t, e, r) {},
  ab25: function(t, e, r) {},
  c7ab: function(t, e, r) {}
});
//# sourceMappingURL=app.7c21232c.js.map
