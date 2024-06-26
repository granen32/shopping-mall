function Va(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var Vd =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function sl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var $a = { exports: {} },
  oo = {},
  qa = { exports: {} },
  B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _r = Symbol.for("react.element"),
  $d = Symbol.for("react.portal"),
  qd = Symbol.for("react.fragment"),
  Hd = Symbol.for("react.strict_mode"),
  Wd = Symbol.for("react.profiler"),
  Kd = Symbol.for("react.provider"),
  Gd = Symbol.for("react.context"),
  Yd = Symbol.for("react.forward_ref"),
  Xd = Symbol.for("react.suspense"),
  Jd = Symbol.for("react.memo"),
  Zd = Symbol.for("react.lazy"),
  au = Symbol.iterator;
function ep(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (au && e[au]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ha = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Wa = Object.assign,
  Ka = {};
function Fn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ka),
    (this.updater = n || Ha);
}
Fn.prototype.isReactComponent = {};
Fn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Fn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ga() {}
Ga.prototype = Fn.prototype;
function ll(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ka),
    (this.updater = n || Ha);
}
var ul = (ll.prototype = new Ga());
ul.constructor = ll;
Wa(ul, Fn.prototype);
ul.isPureReactComponent = !0;
var cu = Array.isArray,
  Ya = Object.prototype.hasOwnProperty,
  al = { current: null },
  Xa = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ja(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Ya.call(t, r) && !Xa.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var u = Array(l), a = 0; a < l; a++) u[a] = arguments[a + 2];
    i.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: _r,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: al.current,
  };
}
function tp(e, t) {
  return {
    $$typeof: _r,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function cl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === _r;
}
function np(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var fu = /\/+/g;
function To(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? np("" + e.key)
    : t.toString(36);
}
function ii(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case _r:
          case $d:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + To(s, 0) : r),
      cu(i)
        ? ((n = ""),
          e != null && (n = e.replace(fu, "$&/") + "/"),
          ii(i, t, n, "", function (a) {
            return a;
          }))
        : i != null &&
          (cl(i) &&
            (i = tp(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(fu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), cu(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var u = r + To(o, l);
      s += ii(o, t, n, u, i);
    }
  else if (((u = ep(e)), typeof u == "function"))
    for (e = u.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + To(o, l++)), (s += ii(o, t, n, u, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function br(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ii(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function rp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Oe = { current: null },
  oi = { transition: null },
  ip = {
    ReactCurrentDispatcher: Oe,
    ReactCurrentBatchConfig: oi,
    ReactCurrentOwner: al,
  };
function Za() {
  throw Error("act(...) is not supported in production builds of React.");
}
B.Children = {
  map: br,
  forEach: function (e, t, n) {
    br(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      br(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      br(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!cl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
B.Component = Fn;
B.Fragment = qd;
B.Profiler = Wd;
B.PureComponent = ll;
B.StrictMode = Hd;
B.Suspense = Xd;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ip;
B.act = Za;
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Wa({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = al.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (u in t)
      Ya.call(t, u) &&
        !Xa.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && l !== void 0 ? l[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    l = Array(u);
    for (var a = 0; a < u; a++) l[a] = arguments[a + 2];
    r.children = l;
  }
  return { $$typeof: _r, type: e.type, key: i, ref: o, props: r, _owner: s };
};
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: Gd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Kd, _context: e }),
    (e.Consumer = e)
  );
};
B.createElement = Ja;
B.createFactory = function (e) {
  var t = Ja.bind(null, e);
  return (t.type = e), t;
};
B.createRef = function () {
  return { current: null };
};
B.forwardRef = function (e) {
  return { $$typeof: Yd, render: e };
};
B.isValidElement = cl;
B.lazy = function (e) {
  return { $$typeof: Zd, _payload: { _status: -1, _result: e }, _init: rp };
};
B.memo = function (e, t) {
  return { $$typeof: Jd, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
  var t = oi.transition;
  oi.transition = {};
  try {
    e();
  } finally {
    oi.transition = t;
  }
};
B.unstable_act = Za;
B.useCallback = function (e, t) {
  return Oe.current.useCallback(e, t);
};
B.useContext = function (e) {
  return Oe.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
  return Oe.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
  return Oe.current.useEffect(e, t);
};
B.useId = function () {
  return Oe.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
  return Oe.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
  return Oe.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
  return Oe.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
  return Oe.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
  return Oe.current.useReducer(e, t, n);
};
B.useRef = function (e) {
  return Oe.current.useRef(e);
};
B.useState = function (e) {
  return Oe.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
  return Oe.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
  return Oe.current.useTransition();
};
B.version = "18.3.1";
qa.exports = B;
var I = qa.exports;
const we = sl(I),
  op = Va({ __proto__: null, default: we }, [I]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sp = I,
  lp = Symbol.for("react.element"),
  up = Symbol.for("react.fragment"),
  ap = Object.prototype.hasOwnProperty,
  cp = sp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  fp = { key: !0, ref: !0, __self: !0, __source: !0 };
function ec(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) ap.call(t, r) && !fp.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: lp,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: cp.current,
  };
}
oo.Fragment = up;
oo.jsx = ec;
oo.jsxs = ec;
$a.exports = oo;
var g = $a.exports,
  tc = { exports: {} },
  Ue = {},
  nc = { exports: {} },
  rc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, P) {
    var U = C.length;
    C.push(P);
    e: for (; 0 < U; ) {
      var Q = (U - 1) >>> 1,
        X = C[Q];
      if (0 < i(X, P)) (C[Q] = P), (C[U] = X), (U = Q);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var P = C[0],
      U = C.pop();
    if (U !== P) {
      C[0] = U;
      e: for (var Q = 0, X = C.length, Ur = X >>> 1; Q < Ur; ) {
        var Bt = 2 * (Q + 1) - 1,
          No = C[Bt],
          bt = Bt + 1,
          Br = C[bt];
        if (0 > i(No, U))
          bt < X && 0 > i(Br, No)
            ? ((C[Q] = Br), (C[bt] = U), (Q = bt))
            : ((C[Q] = No), (C[Bt] = U), (Q = Bt));
        else if (bt < X && 0 > i(Br, U)) (C[Q] = Br), (C[bt] = U), (Q = bt);
        else break e;
      }
    }
    return P;
  }
  function i(C, P) {
    var U = C.sortIndex - P.sortIndex;
    return U !== 0 ? U : C.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var u = [],
    a = [],
    c = 1,
    f = null,
    p = 3,
    y = !1,
    v = !1,
    x = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(C) {
    for (var P = n(a); P !== null; ) {
      if (P.callback === null) r(a);
      else if (P.startTime <= C)
        r(a), (P.sortIndex = P.expirationTime), t(u, P);
      else break;
      P = n(a);
    }
  }
  function w(C) {
    if (((x = !1), h(C), !v))
      if (n(u) !== null) (v = !0), L(N);
      else {
        var P = n(a);
        P !== null && W(w, P.startTime - C);
      }
  }
  function N(C, P) {
    (v = !1), x && ((x = !1), m(D), (D = -1)), (y = !0);
    var U = p;
    try {
      for (
        h(P), f = n(u);
        f !== null && (!(f.expirationTime > P) || (C && !H()));

      ) {
        var Q = f.callback;
        if (typeof Q == "function") {
          (f.callback = null), (p = f.priorityLevel);
          var X = Q(f.expirationTime <= P);
          (P = e.unstable_now()),
            typeof X == "function" ? (f.callback = X) : f === n(u) && r(u),
            h(P);
        } else r(u);
        f = n(u);
      }
      if (f !== null) var Ur = !0;
      else {
        var Bt = n(a);
        Bt !== null && W(w, Bt.startTime - P), (Ur = !1);
      }
      return Ur;
    } finally {
      (f = null), (p = U), (y = !1);
    }
  }
  var O = !1,
    R = null,
    D = -1,
    q = 5,
    j = -1;
  function H() {
    return !(e.unstable_now() - j < q);
  }
  function Ce() {
    if (R !== null) {
      var C = e.unstable_now();
      j = C;
      var P = !0;
      try {
        P = R(!0, C);
      } finally {
        P ? pe() : ((O = !1), (R = null));
      }
    } else O = !1;
  }
  var pe;
  if (typeof d == "function")
    pe = function () {
      d(Ce);
    };
  else if (typeof MessageChannel < "u") {
    var E = new MessageChannel(),
      T = E.port2;
    (E.port1.onmessage = Ce),
      (pe = function () {
        T.postMessage(null);
      });
  } else
    pe = function () {
      _(Ce, 0);
    };
  function L(C) {
    (R = C), O || ((O = !0), pe());
  }
  function W(C, P) {
    D = _(function () {
      C(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), L(N));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (q = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (C) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = p;
      }
      var U = p;
      p = P;
      try {
        return C();
      } finally {
        p = U;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, P) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var U = p;
      p = C;
      try {
        return P();
      } finally {
        p = U;
      }
    }),
    (e.unstable_scheduleCallback = function (C, P, U) {
      var Q = e.unstable_now();
      switch (
        (typeof U == "object" && U !== null
          ? ((U = U.delay), (U = typeof U == "number" && 0 < U ? Q + U : Q))
          : (U = Q),
        C)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = U + X),
        (C = {
          id: c++,
          callback: P,
          priorityLevel: C,
          startTime: U,
          expirationTime: X,
          sortIndex: -1,
        }),
        U > Q
          ? ((C.sortIndex = U),
            t(a, C),
            n(u) === null &&
              C === n(a) &&
              (x ? (m(D), (D = -1)) : (x = !0), W(w, U - Q)))
          : ((C.sortIndex = X), t(u, C), v || y || ((v = !0), L(N))),
        C
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (C) {
      var P = p;
      return function () {
        var U = p;
        p = P;
        try {
          return C.apply(this, arguments);
        } finally {
          p = U;
        }
      };
    });
})(rc);
nc.exports = rc;
var dp = nc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pp = I,
  Me = dp;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ic = new Set(),
  ar = {};
function nn(e, t) {
  On(e, t), On(e + "Capture", t);
}
function On(e, t) {
  for (ar[e] = t, e = 0; e < t.length; e++) ic.add(t[e]);
}
var ft = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  rs = Object.prototype.hasOwnProperty,
  hp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  du = {},
  pu = {};
function mp(e) {
  return rs.call(pu, e)
    ? !0
    : rs.call(du, e)
    ? !1
    : hp.test(e)
    ? (pu[e] = !0)
    : ((du[e] = !0), !1);
}
function vp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function yp(e, t, n, r) {
  if (t === null || typeof t > "u" || vp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function _e(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new _e(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ve[t] = new _e(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ve[e] = new _e(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ve[e] = new _e(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new _e(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ve[e] = new _e(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ve[e] = new _e(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ve[e] = new _e(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ve[e] = new _e(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var fl = /[\-:]([a-z])/g;
function dl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(fl, dl);
    ve[t] = new _e(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(fl, dl);
    ve[t] = new _e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(fl, dl);
  ve[t] = new _e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ve[e] = new _e(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new _e(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ve[e] = new _e(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function pl(e, t, n, r) {
  var i = ve.hasOwnProperty(t) ? ve[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (yp(t, n, i, r) && (n = null),
    r || i === null
      ? mp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var mt = pp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  zr = Symbol.for("react.element"),
  un = Symbol.for("react.portal"),
  an = Symbol.for("react.fragment"),
  hl = Symbol.for("react.strict_mode"),
  is = Symbol.for("react.profiler"),
  oc = Symbol.for("react.provider"),
  sc = Symbol.for("react.context"),
  ml = Symbol.for("react.forward_ref"),
  os = Symbol.for("react.suspense"),
  ss = Symbol.for("react.suspense_list"),
  vl = Symbol.for("react.memo"),
  gt = Symbol.for("react.lazy"),
  lc = Symbol.for("react.offscreen"),
  hu = Symbol.iterator;
function Un(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (hu && e[hu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var te = Object.assign,
  Oo;
function Wn(e) {
  if (Oo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Oo = (t && t[1]) || "";
    }
  return (
    `
` +
    Oo +
    e
  );
}
var _o = !1;
function Po(e, t) {
  if (!e || _o) return "";
  _o = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var i = a.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var u =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (_o = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Wn(e) : "";
}
function gp(e) {
  switch (e.tag) {
    case 5:
      return Wn(e.type);
    case 16:
      return Wn("Lazy");
    case 13:
      return Wn("Suspense");
    case 19:
      return Wn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Po(e.type, !1)), e;
    case 11:
      return (e = Po(e.type.render, !1)), e;
    case 1:
      return (e = Po(e.type, !0)), e;
    default:
      return "";
  }
}
function ls(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case an:
      return "Fragment";
    case un:
      return "Portal";
    case is:
      return "Profiler";
    case hl:
      return "StrictMode";
    case os:
      return "Suspense";
    case ss:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case sc:
        return (e.displayName || "Context") + ".Consumer";
      case oc:
        return (e._context.displayName || "Context") + ".Provider";
      case ml:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case vl:
        return (
          (t = e.displayName || null), t !== null ? t : ls(e.type) || "Memo"
        );
      case gt:
        (t = e._payload), (e = e._init);
        try {
          return ls(e(t));
        } catch {}
    }
  return null;
}
function xp(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ls(t);
    case 8:
      return t === hl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ft(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function uc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ep(e) {
  var t = uc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Qr(e) {
  e._valueTracker || (e._valueTracker = Ep(e));
}
function ac(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = uc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ki(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function us(e, t) {
  var n = t.checked;
  return te({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function mu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function cc(e, t) {
  (t = t.checked), t != null && pl(e, "checked", t, !1);
}
function as(e, t) {
  cc(e, t);
  var n = Ft(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? cs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && cs(e, t.type, Ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function vu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function cs(e, t, n) {
  (t !== "number" || ki(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Kn = Array.isArray;
function wn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ft(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function fs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return te({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function yu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Kn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ft(n) };
}
function fc(e, t) {
  var n = Ft(t.value),
    r = Ft(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function gu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function dc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ds(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? dc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Vr,
  pc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Vr = Vr || document.createElement("div"),
          Vr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Vr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function cr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Jn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  wp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jn).forEach(function (e) {
  wp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jn[t] = Jn[e]);
  });
});
function hc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Jn.hasOwnProperty(e) && Jn[e])
    ? ("" + t).trim()
    : t + "px";
}
function mc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = hc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Sp = te(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ps(e, t) {
  if (t) {
    if (Sp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function hs(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ms = null;
function yl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var vs = null,
  Sn = null,
  kn = null;
function xu(e) {
  if ((e = Ir(e))) {
    if (typeof vs != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = co(t)), vs(e.stateNode, e.type, t));
  }
}
function vc(e) {
  Sn ? (kn ? kn.push(e) : (kn = [e])) : (Sn = e);
}
function yc() {
  if (Sn) {
    var e = Sn,
      t = kn;
    if (((kn = Sn = null), xu(e), t)) for (e = 0; e < t.length; e++) xu(t[e]);
  }
}
function gc(e, t) {
  return e(t);
}
function xc() {}
var Ro = !1;
function Ec(e, t, n) {
  if (Ro) return e(t, n);
  Ro = !0;
  try {
    return gc(e, t, n);
  } finally {
    (Ro = !1), (Sn !== null || kn !== null) && (xc(), yc());
  }
}
function fr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = co(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var ys = !1;
if (ft)
  try {
    var Bn = {};
    Object.defineProperty(Bn, "passive", {
      get: function () {
        ys = !0;
      },
    }),
      window.addEventListener("test", Bn, Bn),
      window.removeEventListener("test", Bn, Bn);
  } catch {
    ys = !1;
  }
function kp(e, t, n, r, i, o, s, l, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (c) {
    this.onError(c);
  }
}
var Zn = !1,
  Ci = null,
  Ni = !1,
  gs = null,
  Cp = {
    onError: function (e) {
      (Zn = !0), (Ci = e);
    },
  };
function Np(e, t, n, r, i, o, s, l, u) {
  (Zn = !1), (Ci = null), kp.apply(Cp, arguments);
}
function Tp(e, t, n, r, i, o, s, l, u) {
  if ((Np.apply(this, arguments), Zn)) {
    if (Zn) {
      var a = Ci;
      (Zn = !1), (Ci = null);
    } else throw Error(k(198));
    Ni || ((Ni = !0), (gs = a));
  }
}
function rn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function wc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Eu(e) {
  if (rn(e) !== e) throw Error(k(188));
}
function Op(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = rn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Eu(i), e;
        if (o === r) return Eu(i), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Sc(e) {
  return (e = Op(e)), e !== null ? kc(e) : null;
}
function kc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = kc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Cc = Me.unstable_scheduleCallback,
  wu = Me.unstable_cancelCallback,
  _p = Me.unstable_shouldYield,
  Pp = Me.unstable_requestPaint,
  ie = Me.unstable_now,
  Rp = Me.unstable_getCurrentPriorityLevel,
  gl = Me.unstable_ImmediatePriority,
  Nc = Me.unstable_UserBlockingPriority,
  Ti = Me.unstable_NormalPriority,
  Ip = Me.unstable_LowPriority,
  Tc = Me.unstable_IdlePriority,
  so = null,
  rt = null;
function Ap(e) {
  if (rt && typeof rt.onCommitFiberRoot == "function")
    try {
      rt.onCommitFiberRoot(so, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Xe = Math.clz32 ? Math.clz32 : Lp,
  Dp = Math.log,
  Fp = Math.LN2;
function Lp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Dp(e) / Fp) | 0)) | 0;
}
var $r = 64,
  qr = 4194304;
function Gn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Oi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = Gn(l)) : ((o &= s), o !== 0 && (r = Gn(o)));
  } else (s = n & ~i), s !== 0 ? (r = Gn(s)) : o !== 0 && (r = Gn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Xe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function jp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Mp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Xe(o),
      l = 1 << s,
      u = i[s];
    u === -1
      ? (!(l & n) || l & r) && (i[s] = jp(l, t))
      : u <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function xs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Oc() {
  var e = $r;
  return ($r <<= 1), !($r & 4194240) && ($r = 64), e;
}
function Io(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Pr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Xe(t)),
    (e[t] = n);
}
function Up(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Xe(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function xl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Xe(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var $ = 0;
function _c(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Pc,
  El,
  Rc,
  Ic,
  Ac,
  Es = !1,
  Hr = [],
  Nt = null,
  Tt = null,
  Ot = null,
  dr = new Map(),
  pr = new Map(),
  wt = [],
  Bp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Su(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Nt = null;
      break;
    case "dragenter":
    case "dragleave":
      Tt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ot = null;
      break;
    case "pointerover":
    case "pointerout":
      dr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      pr.delete(t.pointerId);
  }
}
function bn(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Ir(t)), t !== null && El(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function bp(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Nt = bn(Nt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Tt = bn(Tt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Ot = bn(Ot, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return dr.set(o, bn(dr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), pr.set(o, bn(pr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Dc(e) {
  var t = Vt(e.target);
  if (t !== null) {
    var n = rn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = wc(n)), t !== null)) {
          (e.blockedOn = t),
            Ac(e.priority, function () {
              Rc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function si(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ws(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ms = r), n.target.dispatchEvent(r), (ms = null);
    } else return (t = Ir(n)), t !== null && El(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ku(e, t, n) {
  si(e) && n.delete(t);
}
function zp() {
  (Es = !1),
    Nt !== null && si(Nt) && (Nt = null),
    Tt !== null && si(Tt) && (Tt = null),
    Ot !== null && si(Ot) && (Ot = null),
    dr.forEach(ku),
    pr.forEach(ku);
}
function zn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Es ||
      ((Es = !0),
      Me.unstable_scheduleCallback(Me.unstable_NormalPriority, zp)));
}
function hr(e) {
  function t(i) {
    return zn(i, e);
  }
  if (0 < Hr.length) {
    zn(Hr[0], e);
    for (var n = 1; n < Hr.length; n++) {
      var r = Hr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Nt !== null && zn(Nt, e),
      Tt !== null && zn(Tt, e),
      Ot !== null && zn(Ot, e),
      dr.forEach(t),
      pr.forEach(t),
      n = 0;
    n < wt.length;
    n++
  )
    (r = wt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < wt.length && ((n = wt[0]), n.blockedOn === null); )
    Dc(n), n.blockedOn === null && wt.shift();
}
var Cn = mt.ReactCurrentBatchConfig,
  _i = !0;
function Qp(e, t, n, r) {
  var i = $,
    o = Cn.transition;
  Cn.transition = null;
  try {
    ($ = 1), wl(e, t, n, r);
  } finally {
    ($ = i), (Cn.transition = o);
  }
}
function Vp(e, t, n, r) {
  var i = $,
    o = Cn.transition;
  Cn.transition = null;
  try {
    ($ = 4), wl(e, t, n, r);
  } finally {
    ($ = i), (Cn.transition = o);
  }
}
function wl(e, t, n, r) {
  if (_i) {
    var i = ws(e, t, n, r);
    if (i === null) zo(e, t, r, Pi, n), Su(e, r);
    else if (bp(i, e, t, n, r)) r.stopPropagation();
    else if ((Su(e, r), t & 4 && -1 < Bp.indexOf(e))) {
      for (; i !== null; ) {
        var o = Ir(i);
        if (
          (o !== null && Pc(o),
          (o = ws(e, t, n, r)),
          o === null && zo(e, t, r, Pi, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else zo(e, t, r, null, n);
  }
}
var Pi = null;
function ws(e, t, n, r) {
  if (((Pi = null), (e = yl(r)), (e = Vt(e)), e !== null))
    if (((t = rn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = wc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Pi = e), null;
}
function Fc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Rp()) {
        case gl:
          return 1;
        case Nc:
          return 4;
        case Ti:
        case Ip:
          return 16;
        case Tc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kt = null,
  Sl = null,
  li = null;
function Lc() {
  if (li) return li;
  var e,
    t = Sl,
    n = t.length,
    r,
    i = "value" in kt ? kt.value : kt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (li = i.slice(e, 1 < r ? 1 - r : void 0));
}
function ui(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Wr() {
  return !0;
}
function Cu() {
  return !1;
}
function Be(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Wr
        : Cu),
      (this.isPropagationStopped = Cu),
      this
    );
  }
  return (
    te(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Wr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Wr));
      },
      persist: function () {},
      isPersistent: Wr,
    }),
    t
  );
}
var Ln = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  kl = Be(Ln),
  Rr = te({}, Ln, { view: 0, detail: 0 }),
  $p = Be(Rr),
  Ao,
  Do,
  Qn,
  lo = te({}, Rr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Cl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Qn &&
            (Qn && e.type === "mousemove"
              ? ((Ao = e.screenX - Qn.screenX), (Do = e.screenY - Qn.screenY))
              : (Do = Ao = 0),
            (Qn = e)),
          Ao);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Do;
    },
  }),
  Nu = Be(lo),
  qp = te({}, lo, { dataTransfer: 0 }),
  Hp = Be(qp),
  Wp = te({}, Rr, { relatedTarget: 0 }),
  Fo = Be(Wp),
  Kp = te({}, Ln, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gp = Be(Kp),
  Yp = te({}, Ln, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Xp = Be(Yp),
  Jp = te({}, Ln, { data: 0 }),
  Tu = Be(Jp),
  Zp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  eh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  th = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function nh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = th[e]) ? !!t[e] : !1;
}
function Cl() {
  return nh;
}
var rh = te({}, Rr, {
    key: function (e) {
      if (e.key) {
        var t = Zp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ui(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? eh[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Cl,
    charCode: function (e) {
      return e.type === "keypress" ? ui(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ui(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  ih = Be(rh),
  oh = te({}, lo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ou = Be(oh),
  sh = te({}, Rr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Cl,
  }),
  lh = Be(sh),
  uh = te({}, Ln, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ah = Be(uh),
  ch = te({}, lo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  fh = Be(ch),
  dh = [9, 13, 27, 32],
  Nl = ft && "CompositionEvent" in window,
  er = null;
ft && "documentMode" in document && (er = document.documentMode);
var ph = ft && "TextEvent" in window && !er,
  jc = ft && (!Nl || (er && 8 < er && 11 >= er)),
  _u = " ",
  Pu = !1;
function Mc(e, t) {
  switch (e) {
    case "keyup":
      return dh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Uc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var cn = !1;
function hh(e, t) {
  switch (e) {
    case "compositionend":
      return Uc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Pu = !0), _u);
    case "textInput":
      return (e = t.data), e === _u && Pu ? null : e;
    default:
      return null;
  }
}
function mh(e, t) {
  if (cn)
    return e === "compositionend" || (!Nl && Mc(e, t))
      ? ((e = Lc()), (li = Sl = kt = null), (cn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return jc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vh = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ru(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!vh[e.type] : t === "textarea";
}
function Bc(e, t, n, r) {
  vc(r),
    (t = Ri(t, "onChange")),
    0 < t.length &&
      ((n = new kl("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var tr = null,
  mr = null;
function yh(e) {
  Yc(e, 0);
}
function uo(e) {
  var t = pn(e);
  if (ac(t)) return e;
}
function gh(e, t) {
  if (e === "change") return t;
}
var bc = !1;
if (ft) {
  var Lo;
  if (ft) {
    var jo = "oninput" in document;
    if (!jo) {
      var Iu = document.createElement("div");
      Iu.setAttribute("oninput", "return;"),
        (jo = typeof Iu.oninput == "function");
    }
    Lo = jo;
  } else Lo = !1;
  bc = Lo && (!document.documentMode || 9 < document.documentMode);
}
function Au() {
  tr && (tr.detachEvent("onpropertychange", zc), (mr = tr = null));
}
function zc(e) {
  if (e.propertyName === "value" && uo(mr)) {
    var t = [];
    Bc(t, mr, e, yl(e)), Ec(yh, t);
  }
}
function xh(e, t, n) {
  e === "focusin"
    ? (Au(), (tr = t), (mr = n), tr.attachEvent("onpropertychange", zc))
    : e === "focusout" && Au();
}
function Eh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return uo(mr);
}
function wh(e, t) {
  if (e === "click") return uo(t);
}
function Sh(e, t) {
  if (e === "input" || e === "change") return uo(t);
}
function kh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ze = typeof Object.is == "function" ? Object.is : kh;
function vr(e, t) {
  if (Ze(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!rs.call(t, i) || !Ze(e[i], t[i])) return !1;
  }
  return !0;
}
function Du(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Fu(e, t) {
  var n = Du(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Du(n);
  }
}
function Qc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Qc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Vc() {
  for (var e = window, t = ki(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ki(e.document);
  }
  return t;
}
function Tl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ch(e) {
  var t = Vc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Qc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Tl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Fu(n, o));
        var s = Fu(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Nh = ft && "documentMode" in document && 11 >= document.documentMode,
  fn = null,
  Ss = null,
  nr = null,
  ks = !1;
function Lu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ks ||
    fn == null ||
    fn !== ki(r) ||
    ((r = fn),
    "selectionStart" in r && Tl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (nr && vr(nr, r)) ||
      ((nr = r),
      (r = Ri(Ss, "onSelect")),
      0 < r.length &&
        ((t = new kl("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = fn))));
}
function Kr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var dn = {
    animationend: Kr("Animation", "AnimationEnd"),
    animationiteration: Kr("Animation", "AnimationIteration"),
    animationstart: Kr("Animation", "AnimationStart"),
    transitionend: Kr("Transition", "TransitionEnd"),
  },
  Mo = {},
  $c = {};
ft &&
  (($c = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete dn.animationend.animation,
    delete dn.animationiteration.animation,
    delete dn.animationstart.animation),
  "TransitionEvent" in window || delete dn.transitionend.transition);
function ao(e) {
  if (Mo[e]) return Mo[e];
  if (!dn[e]) return e;
  var t = dn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in $c) return (Mo[e] = t[n]);
  return e;
}
var qc = ao("animationend"),
  Hc = ao("animationiteration"),
  Wc = ao("animationstart"),
  Kc = ao("transitionend"),
  Gc = new Map(),
  ju =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function jt(e, t) {
  Gc.set(e, t), nn(t, [e]);
}
for (var Uo = 0; Uo < ju.length; Uo++) {
  var Bo = ju[Uo],
    Th = Bo.toLowerCase(),
    Oh = Bo[0].toUpperCase() + Bo.slice(1);
  jt(Th, "on" + Oh);
}
jt(qc, "onAnimationEnd");
jt(Hc, "onAnimationIteration");
jt(Wc, "onAnimationStart");
jt("dblclick", "onDoubleClick");
jt("focusin", "onFocus");
jt("focusout", "onBlur");
jt(Kc, "onTransitionEnd");
On("onMouseEnter", ["mouseout", "mouseover"]);
On("onMouseLeave", ["mouseout", "mouseover"]);
On("onPointerEnter", ["pointerout", "pointerover"]);
On("onPointerLeave", ["pointerout", "pointerover"]);
nn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
nn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
nn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
nn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
nn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
nn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Yn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  _h = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));
function Mu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Tp(r, t, void 0, e), (e.currentTarget = null);
}
function Yc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            u = l.instance,
            a = l.currentTarget;
          if (((l = l.listener), u !== o && i.isPropagationStopped())) break e;
          Mu(i, l, a), (o = u);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (u = l.instance),
            (a = l.currentTarget),
            (l = l.listener),
            u !== o && i.isPropagationStopped())
          )
            break e;
          Mu(i, l, a), (o = u);
        }
    }
  }
  if (Ni) throw ((e = gs), (Ni = !1), (gs = null), e);
}
function G(e, t) {
  var n = t[_s];
  n === void 0 && (n = t[_s] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Xc(t, e, 2, !1), n.add(r));
}
function bo(e, t, n) {
  var r = 0;
  t && (r |= 4), Xc(n, e, r, t);
}
var Gr = "_reactListening" + Math.random().toString(36).slice(2);
function yr(e) {
  if (!e[Gr]) {
    (e[Gr] = !0),
      ic.forEach(function (n) {
        n !== "selectionchange" && (_h.has(n) || bo(n, !1, e), bo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Gr] || ((t[Gr] = !0), bo("selectionchange", !1, t));
  }
}
function Xc(e, t, n, r) {
  switch (Fc(t)) {
    case 1:
      var i = Qp;
      break;
    case 4:
      i = Vp;
      break;
    default:
      i = wl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ys ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function zo(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var u = s.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = s.stateNode.containerInfo),
              u === i || (u.nodeType === 8 && u.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = Vt(l)), s === null)) return;
          if (((u = s.tag), u === 5 || u === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Ec(function () {
    var a = o,
      c = yl(n),
      f = [];
    e: {
      var p = Gc.get(e);
      if (p !== void 0) {
        var y = kl,
          v = e;
        switch (e) {
          case "keypress":
            if (ui(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = ih;
            break;
          case "focusin":
            (v = "focus"), (y = Fo);
            break;
          case "focusout":
            (v = "blur"), (y = Fo);
            break;
          case "beforeblur":
          case "afterblur":
            y = Fo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Nu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Hp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = lh;
            break;
          case qc:
          case Hc:
          case Wc:
            y = Gp;
            break;
          case Kc:
            y = ah;
            break;
          case "scroll":
            y = $p;
            break;
          case "wheel":
            y = fh;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Xp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ou;
        }
        var x = (t & 4) !== 0,
          _ = !x && e === "scroll",
          m = x ? (p !== null ? p + "Capture" : null) : p;
        x = [];
        for (var d = a, h; d !== null; ) {
          h = d;
          var w = h.stateNode;
          if (
            (h.tag === 5 &&
              w !== null &&
              ((h = w),
              m !== null && ((w = fr(d, m)), w != null && x.push(gr(d, w, h)))),
            _)
          )
            break;
          d = d.return;
        }
        0 < x.length &&
          ((p = new y(p, v, null, n, c)), f.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          p &&
            n !== ms &&
            (v = n.relatedTarget || n.fromElement) &&
            (Vt(v) || v[dt]))
        )
          break e;
        if (
          (y || p) &&
          ((p =
            c.window === c
              ? c
              : (p = c.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = a),
              (v = v ? Vt(v) : null),
              v !== null &&
                ((_ = rn(v)), v !== _ || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = a)),
          y !== v)
        ) {
          if (
            ((x = Nu),
            (w = "onMouseLeave"),
            (m = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = Ou),
              (w = "onPointerLeave"),
              (m = "onPointerEnter"),
              (d = "pointer")),
            (_ = y == null ? p : pn(y)),
            (h = v == null ? p : pn(v)),
            (p = new x(w, d + "leave", y, n, c)),
            (p.target = _),
            (p.relatedTarget = h),
            (w = null),
            Vt(c) === a &&
              ((x = new x(m, d + "enter", v, n, c)),
              (x.target = h),
              (x.relatedTarget = _),
              (w = x)),
            (_ = w),
            y && v)
          )
            t: {
              for (x = y, m = v, d = 0, h = x; h; h = sn(h)) d++;
              for (h = 0, w = m; w; w = sn(w)) h++;
              for (; 0 < d - h; ) (x = sn(x)), d--;
              for (; 0 < h - d; ) (m = sn(m)), h--;
              for (; d--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = sn(x)), (m = sn(m));
              }
              x = null;
            }
          else x = null;
          y !== null && Uu(f, p, y, x, !1),
            v !== null && _ !== null && Uu(f, _, v, x, !0);
        }
      }
      e: {
        if (
          ((p = a ? pn(a) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === "select" || (y === "input" && p.type === "file"))
        )
          var N = gh;
        else if (Ru(p))
          if (bc) N = Sh;
          else {
            N = Eh;
            var O = xh;
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (N = wh);
        if (N && (N = N(e, a))) {
          Bc(f, N, n, c);
          break e;
        }
        O && O(e, p, a),
          e === "focusout" &&
            (O = p._wrapperState) &&
            O.controlled &&
            p.type === "number" &&
            cs(p, "number", p.value);
      }
      switch (((O = a ? pn(a) : window), e)) {
        case "focusin":
          (Ru(O) || O.contentEditable === "true") &&
            ((fn = O), (Ss = a), (nr = null));
          break;
        case "focusout":
          nr = Ss = fn = null;
          break;
        case "mousedown":
          ks = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ks = !1), Lu(f, n, c);
          break;
        case "selectionchange":
          if (Nh) break;
        case "keydown":
        case "keyup":
          Lu(f, n, c);
      }
      var R;
      if (Nl)
        e: {
          switch (e) {
            case "compositionstart":
              var D = "onCompositionStart";
              break e;
            case "compositionend":
              D = "onCompositionEnd";
              break e;
            case "compositionupdate":
              D = "onCompositionUpdate";
              break e;
          }
          D = void 0;
        }
      else
        cn
          ? Mc(e, n) && (D = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      D &&
        (jc &&
          n.locale !== "ko" &&
          (cn || D !== "onCompositionStart"
            ? D === "onCompositionEnd" && cn && (R = Lc())
            : ((kt = c),
              (Sl = "value" in kt ? kt.value : kt.textContent),
              (cn = !0))),
        (O = Ri(a, D)),
        0 < O.length &&
          ((D = new Tu(D, e, null, n, c)),
          f.push({ event: D, listeners: O }),
          R ? (D.data = R) : ((R = Uc(n)), R !== null && (D.data = R)))),
        (R = ph ? hh(e, n) : mh(e, n)) &&
          ((a = Ri(a, "onBeforeInput")),
          0 < a.length &&
            ((c = new Tu("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: a }),
            (c.data = R)));
    }
    Yc(f, t);
  });
}
function gr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ri(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = fr(e, n)),
      o != null && r.unshift(gr(e, o, i)),
      (o = fr(e, t)),
      o != null && r.push(gr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function sn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Uu(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      u = l.alternate,
      a = l.stateNode;
    if (u !== null && u === r) break;
    l.tag === 5 &&
      a !== null &&
      ((l = a),
      i
        ? ((u = fr(n, o)), u != null && s.unshift(gr(n, u, l)))
        : i || ((u = fr(n, o)), u != null && s.push(gr(n, u, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Ph = /\r\n?/g,
  Rh = /\u0000|\uFFFD/g;
function Bu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ph,
      `
`
    )
    .replace(Rh, "");
}
function Yr(e, t, n) {
  if (((t = Bu(t)), Bu(e) !== t && n)) throw Error(k(425));
}
function Ii() {}
var Cs = null,
  Ns = null;
function Ts(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Os = typeof setTimeout == "function" ? setTimeout : void 0,
  Ih = typeof clearTimeout == "function" ? clearTimeout : void 0,
  bu = typeof Promise == "function" ? Promise : void 0,
  Ah =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof bu < "u"
      ? function (e) {
          return bu.resolve(null).then(e).catch(Dh);
        }
      : Os;
function Dh(e) {
  setTimeout(function () {
    throw e;
  });
}
function Qo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), hr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  hr(t);
}
function _t(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function zu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var jn = Math.random().toString(36).slice(2),
  nt = "__reactFiber$" + jn,
  xr = "__reactProps$" + jn,
  dt = "__reactContainer$" + jn,
  _s = "__reactEvents$" + jn,
  Fh = "__reactListeners$" + jn,
  Lh = "__reactHandles$" + jn;
function Vt(e) {
  var t = e[nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[dt] || n[nt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = zu(e); e !== null; ) {
          if ((n = e[nt])) return n;
          e = zu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ir(e) {
  return (
    (e = e[nt] || e[dt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function pn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function co(e) {
  return e[xr] || null;
}
var Ps = [],
  hn = -1;
function Mt(e) {
  return { current: e };
}
function Y(e) {
  0 > hn || ((e.current = Ps[hn]), (Ps[hn] = null), hn--);
}
function K(e, t) {
  hn++, (Ps[hn] = e.current), (e.current = t);
}
var Lt = {},
  ke = Mt(Lt),
  Ie = Mt(!1),
  Yt = Lt;
function _n(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Lt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ae(e) {
  return (e = e.childContextTypes), e != null;
}
function Ai() {
  Y(Ie), Y(ke);
}
function Qu(e, t, n) {
  if (ke.current !== Lt) throw Error(k(168));
  K(ke, t), K(Ie, n);
}
function Jc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(k(108, xp(e) || "Unknown", i));
  return te({}, n, r);
}
function Di(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Lt),
    (Yt = ke.current),
    K(ke, e),
    K(Ie, Ie.current),
    !0
  );
}
function Vu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Jc(e, t, Yt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Y(Ie),
      Y(ke),
      K(ke, e))
    : Y(Ie),
    K(Ie, n);
}
var lt = null,
  fo = !1,
  Vo = !1;
function Zc(e) {
  lt === null ? (lt = [e]) : lt.push(e);
}
function jh(e) {
  (fo = !0), Zc(e);
}
function Ut() {
  if (!Vo && lt !== null) {
    Vo = !0;
    var e = 0,
      t = $;
    try {
      var n = lt;
      for ($ = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (lt = null), (fo = !1);
    } catch (i) {
      throw (lt !== null && (lt = lt.slice(e + 1)), Cc(gl, Ut), i);
    } finally {
      ($ = t), (Vo = !1);
    }
  }
  return null;
}
var mn = [],
  vn = 0,
  Fi = null,
  Li = 0,
  be = [],
  ze = 0,
  Xt = null,
  ut = 1,
  at = "";
function zt(e, t) {
  (mn[vn++] = Li), (mn[vn++] = Fi), (Fi = e), (Li = t);
}
function ef(e, t, n) {
  (be[ze++] = ut), (be[ze++] = at), (be[ze++] = Xt), (Xt = e);
  var r = ut;
  e = at;
  var i = 32 - Xe(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Xe(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (ut = (1 << (32 - Xe(t) + i)) | (n << i) | r),
      (at = o + e);
  } else (ut = (1 << o) | (n << i) | r), (at = e);
}
function Ol(e) {
  e.return !== null && (zt(e, 1), ef(e, 1, 0));
}
function _l(e) {
  for (; e === Fi; )
    (Fi = mn[--vn]), (mn[vn] = null), (Li = mn[--vn]), (mn[vn] = null);
  for (; e === Xt; )
    (Xt = be[--ze]),
      (be[ze] = null),
      (at = be[--ze]),
      (be[ze] = null),
      (ut = be[--ze]),
      (be[ze] = null);
}
var je = null,
  Le = null,
  J = !1,
  Ye = null;
function tf(e, t) {
  var n = Qe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function $u(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (je = e), (Le = _t(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (je = e), (Le = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Xt !== null ? { id: ut, overflow: at } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Qe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (je = e),
            (Le = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Rs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Is(e) {
  if (J) {
    var t = Le;
    if (t) {
      var n = t;
      if (!$u(e, t)) {
        if (Rs(e)) throw Error(k(418));
        t = _t(n.nextSibling);
        var r = je;
        t && $u(e, t)
          ? tf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (J = !1), (je = e));
      }
    } else {
      if (Rs(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (J = !1), (je = e);
    }
  }
}
function qu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  je = e;
}
function Xr(e) {
  if (e !== je) return !1;
  if (!J) return qu(e), (J = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ts(e.type, e.memoizedProps))),
    t && (t = Le))
  ) {
    if (Rs(e)) throw (nf(), Error(k(418)));
    for (; t; ) tf(e, t), (t = _t(t.nextSibling));
  }
  if ((qu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Le = _t(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Le = null;
    }
  } else Le = je ? _t(e.stateNode.nextSibling) : null;
  return !0;
}
function nf() {
  for (var e = Le; e; ) e = _t(e.nextSibling);
}
function Pn() {
  (Le = je = null), (J = !1);
}
function Pl(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
var Mh = mt.ReactCurrentBatchConfig;
function Vn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Jr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Hu(e) {
  var t = e._init;
  return t(e._payload);
}
function rf(e) {
  function t(m, d) {
    if (e) {
      var h = m.deletions;
      h === null ? ((m.deletions = [d]), (m.flags |= 16)) : h.push(d);
    }
  }
  function n(m, d) {
    if (!e) return null;
    for (; d !== null; ) t(m, d), (d = d.sibling);
    return null;
  }
  function r(m, d) {
    for (m = new Map(); d !== null; )
      d.key !== null ? m.set(d.key, d) : m.set(d.index, d), (d = d.sibling);
    return m;
  }
  function i(m, d) {
    return (m = At(m, d)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, d, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((m.flags |= 2), d) : h)
            : ((m.flags |= 2), d))
        : ((m.flags |= 1048576), d)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function l(m, d, h, w) {
    return d === null || d.tag !== 6
      ? ((d = Yo(h, m.mode, w)), (d.return = m), d)
      : ((d = i(d, h)), (d.return = m), d);
  }
  function u(m, d, h, w) {
    var N = h.type;
    return N === an
      ? c(m, d, h.props.children, w, h.key)
      : d !== null &&
        (d.elementType === N ||
          (typeof N == "object" &&
            N !== null &&
            N.$$typeof === gt &&
            Hu(N) === d.type))
      ? ((w = i(d, h.props)), (w.ref = Vn(m, d, h)), (w.return = m), w)
      : ((w = mi(h.type, h.key, h.props, null, m.mode, w)),
        (w.ref = Vn(m, d, h)),
        (w.return = m),
        w);
  }
  function a(m, d, h, w) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = Xo(h, m.mode, w)), (d.return = m), d)
      : ((d = i(d, h.children || [])), (d.return = m), d);
  }
  function c(m, d, h, w, N) {
    return d === null || d.tag !== 7
      ? ((d = Gt(h, m.mode, w, N)), (d.return = m), d)
      : ((d = i(d, h)), (d.return = m), d);
  }
  function f(m, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = Yo("" + d, m.mode, h)), (d.return = m), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case zr:
          return (
            (h = mi(d.type, d.key, d.props, null, m.mode, h)),
            (h.ref = Vn(m, null, d)),
            (h.return = m),
            h
          );
        case un:
          return (d = Xo(d, m.mode, h)), (d.return = m), d;
        case gt:
          var w = d._init;
          return f(m, w(d._payload), h);
      }
      if (Kn(d) || Un(d))
        return (d = Gt(d, m.mode, h, null)), (d.return = m), d;
      Jr(m, d);
    }
    return null;
  }
  function p(m, d, h, w) {
    var N = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return N !== null ? null : l(m, d, "" + h, w);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case zr:
          return h.key === N ? u(m, d, h, w) : null;
        case un:
          return h.key === N ? a(m, d, h, w) : null;
        case gt:
          return (N = h._init), p(m, d, N(h._payload), w);
      }
      if (Kn(h) || Un(h)) return N !== null ? null : c(m, d, h, w, null);
      Jr(m, h);
    }
    return null;
  }
  function y(m, d, h, w, N) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (m = m.get(h) || null), l(d, m, "" + w, N);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case zr:
          return (m = m.get(w.key === null ? h : w.key) || null), u(d, m, w, N);
        case un:
          return (m = m.get(w.key === null ? h : w.key) || null), a(d, m, w, N);
        case gt:
          var O = w._init;
          return y(m, d, h, O(w._payload), N);
      }
      if (Kn(w) || Un(w)) return (m = m.get(h) || null), c(d, m, w, N, null);
      Jr(d, w);
    }
    return null;
  }
  function v(m, d, h, w) {
    for (
      var N = null, O = null, R = d, D = (d = 0), q = null;
      R !== null && D < h.length;
      D++
    ) {
      R.index > D ? ((q = R), (R = null)) : (q = R.sibling);
      var j = p(m, R, h[D], w);
      if (j === null) {
        R === null && (R = q);
        break;
      }
      e && R && j.alternate === null && t(m, R),
        (d = o(j, d, D)),
        O === null ? (N = j) : (O.sibling = j),
        (O = j),
        (R = q);
    }
    if (D === h.length) return n(m, R), J && zt(m, D), N;
    if (R === null) {
      for (; D < h.length; D++)
        (R = f(m, h[D], w)),
          R !== null &&
            ((d = o(R, d, D)), O === null ? (N = R) : (O.sibling = R), (O = R));
      return J && zt(m, D), N;
    }
    for (R = r(m, R); D < h.length; D++)
      (q = y(R, m, D, h[D], w)),
        q !== null &&
          (e && q.alternate !== null && R.delete(q.key === null ? D : q.key),
          (d = o(q, d, D)),
          O === null ? (N = q) : (O.sibling = q),
          (O = q));
    return (
      e &&
        R.forEach(function (H) {
          return t(m, H);
        }),
      J && zt(m, D),
      N
    );
  }
  function x(m, d, h, w) {
    var N = Un(h);
    if (typeof N != "function") throw Error(k(150));
    if (((h = N.call(h)), h == null)) throw Error(k(151));
    for (
      var O = (N = null), R = d, D = (d = 0), q = null, j = h.next();
      R !== null && !j.done;
      D++, j = h.next()
    ) {
      R.index > D ? ((q = R), (R = null)) : (q = R.sibling);
      var H = p(m, R, j.value, w);
      if (H === null) {
        R === null && (R = q);
        break;
      }
      e && R && H.alternate === null && t(m, R),
        (d = o(H, d, D)),
        O === null ? (N = H) : (O.sibling = H),
        (O = H),
        (R = q);
    }
    if (j.done) return n(m, R), J && zt(m, D), N;
    if (R === null) {
      for (; !j.done; D++, j = h.next())
        (j = f(m, j.value, w)),
          j !== null &&
            ((d = o(j, d, D)), O === null ? (N = j) : (O.sibling = j), (O = j));
      return J && zt(m, D), N;
    }
    for (R = r(m, R); !j.done; D++, j = h.next())
      (j = y(R, m, D, j.value, w)),
        j !== null &&
          (e && j.alternate !== null && R.delete(j.key === null ? D : j.key),
          (d = o(j, d, D)),
          O === null ? (N = j) : (O.sibling = j),
          (O = j));
    return (
      e &&
        R.forEach(function (Ce) {
          return t(m, Ce);
        }),
      J && zt(m, D),
      N
    );
  }
  function _(m, d, h, w) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === an &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case zr:
          e: {
            for (var N = h.key, O = d; O !== null; ) {
              if (O.key === N) {
                if (((N = h.type), N === an)) {
                  if (O.tag === 7) {
                    n(m, O.sibling),
                      (d = i(O, h.props.children)),
                      (d.return = m),
                      (m = d);
                    break e;
                  }
                } else if (
                  O.elementType === N ||
                  (typeof N == "object" &&
                    N !== null &&
                    N.$$typeof === gt &&
                    Hu(N) === O.type)
                ) {
                  n(m, O.sibling),
                    (d = i(O, h.props)),
                    (d.ref = Vn(m, O, h)),
                    (d.return = m),
                    (m = d);
                  break e;
                }
                n(m, O);
                break;
              } else t(m, O);
              O = O.sibling;
            }
            h.type === an
              ? ((d = Gt(h.props.children, m.mode, w, h.key)),
                (d.return = m),
                (m = d))
              : ((w = mi(h.type, h.key, h.props, null, m.mode, w)),
                (w.ref = Vn(m, d, h)),
                (w.return = m),
                (m = w));
          }
          return s(m);
        case un:
          e: {
            for (O = h.key; d !== null; ) {
              if (d.key === O)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(m, d.sibling),
                    (d = i(d, h.children || [])),
                    (d.return = m),
                    (m = d);
                  break e;
                } else {
                  n(m, d);
                  break;
                }
              else t(m, d);
              d = d.sibling;
            }
            (d = Xo(h, m.mode, w)), (d.return = m), (m = d);
          }
          return s(m);
        case gt:
          return (O = h._init), _(m, d, O(h._payload), w);
      }
      if (Kn(h)) return v(m, d, h, w);
      if (Un(h)) return x(m, d, h, w);
      Jr(m, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(m, d.sibling), (d = i(d, h)), (d.return = m), (m = d))
          : (n(m, d), (d = Yo(h, m.mode, w)), (d.return = m), (m = d)),
        s(m))
      : n(m, d);
  }
  return _;
}
var Rn = rf(!0),
  of = rf(!1),
  ji = Mt(null),
  Mi = null,
  yn = null,
  Rl = null;
function Il() {
  Rl = yn = Mi = null;
}
function Al(e) {
  var t = ji.current;
  Y(ji), (e._currentValue = t);
}
function As(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Nn(e, t) {
  (Mi = e),
    (Rl = yn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Re = !0), (e.firstContext = null));
}
function $e(e) {
  var t = e._currentValue;
  if (Rl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), yn === null)) {
      if (Mi === null) throw Error(k(308));
      (yn = e), (Mi.dependencies = { lanes: 0, firstContext: e });
    } else yn = yn.next = e;
  return t;
}
var $t = null;
function Dl(e) {
  $t === null ? ($t = [e]) : $t.push(e);
}
function sf(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Dl(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    pt(e, r)
  );
}
function pt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var xt = !1;
function Fl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function lf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), z & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      pt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Dl(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    pt(e, n)
  );
}
function ai(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xl(e, n);
  }
}
function Wu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ui(e, t, n, r) {
  var i = e.updateQueue;
  xt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var u = l,
      a = u.next;
    (u.next = null), s === null ? (o = a) : (s.next = a), (s = u);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = a) : (l.next = a),
        (c.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = a = u = null), (l = o);
    do {
      var p = l.lane,
        y = l.eventTime;
      if ((r & p) === p) {
        c !== null &&
          (c = c.next =
            {
              eventTime: y,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var v = e,
            x = l;
          switch (((p = t), (y = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                f = v.call(y, f, p);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (p = typeof v == "function" ? v.call(y, f, p) : v),
                p == null)
              )
                break e;
              f = te({}, f, p);
              break e;
            case 2:
              xt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [l]) : p.push(l));
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((a = c = y), (u = f)) : (c = c.next = y),
          (s |= p);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (p = l),
          (l = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (u = f),
      (i.baseState = u),
      (i.firstBaseUpdate = a),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Zt |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Ku(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(k(191, i));
        i.call(r);
      }
    }
}
var Ar = {},
  it = Mt(Ar),
  Er = Mt(Ar),
  wr = Mt(Ar);
function qt(e) {
  if (e === Ar) throw Error(k(174));
  return e;
}
function Ll(e, t) {
  switch ((K(wr, t), K(Er, e), K(it, Ar), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ds(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ds(t, e));
  }
  Y(it), K(it, t);
}
function In() {
  Y(it), Y(Er), Y(wr);
}
function uf(e) {
  qt(wr.current);
  var t = qt(it.current),
    n = ds(t, e.type);
  t !== n && (K(Er, e), K(it, n));
}
function jl(e) {
  Er.current === e && (Y(it), Y(Er));
}
var Z = Mt(0);
function Bi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var $o = [];
function Ml() {
  for (var e = 0; e < $o.length; e++)
    $o[e]._workInProgressVersionPrimary = null;
  $o.length = 0;
}
var ci = mt.ReactCurrentDispatcher,
  qo = mt.ReactCurrentBatchConfig,
  Jt = 0,
  ee = null,
  ue = null,
  ce = null,
  bi = !1,
  rr = !1,
  Sr = 0,
  Uh = 0;
function ye() {
  throw Error(k(321));
}
function Ul(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ze(e[n], t[n])) return !1;
  return !0;
}
function Bl(e, t, n, r, i, o) {
  if (
    ((Jt = o),
    (ee = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ci.current = e === null || e.memoizedState === null ? Qh : Vh),
    (e = n(r, i)),
    rr)
  ) {
    o = 0;
    do {
      if (((rr = !1), (Sr = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (ce = ue = null),
        (t.updateQueue = null),
        (ci.current = $h),
        (e = n(r, i));
    } while (rr);
  }
  if (
    ((ci.current = zi),
    (t = ue !== null && ue.next !== null),
    (Jt = 0),
    (ce = ue = ee = null),
    (bi = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function bl() {
  var e = Sr !== 0;
  return (Sr = 0), e;
}
function tt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ce === null ? (ee.memoizedState = ce = e) : (ce = ce.next = e), ce;
}
function qe() {
  if (ue === null) {
    var e = ee.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = ce === null ? ee.memoizedState : ce.next;
  if (t !== null) (ce = t), (ue = e);
  else {
    if (e === null) throw Error(k(310));
    (ue = e),
      (e = {
        memoizedState: ue.memoizedState,
        baseState: ue.baseState,
        baseQueue: ue.baseQueue,
        queue: ue.queue,
        next: null,
      }),
      ce === null ? (ee.memoizedState = ce = e) : (ce = ce.next = e);
  }
  return ce;
}
function kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ho(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = ue,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      u = null,
      a = o;
    do {
      var c = a.lane;
      if ((Jt & c) === c)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var f = {
          lane: c,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((l = u = f), (s = r)) : (u = u.next = f),
          (ee.lanes |= c),
          (Zt |= c);
      }
      a = a.next;
    } while (a !== null && a !== o);
    u === null ? (s = r) : (u.next = l),
      Ze(r, t.memoizedState) || (Re = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ee.lanes |= o), (Zt |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Wo(e) {
  var t = qe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Ze(o, t.memoizedState) || (Re = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function af() {}
function cf(e, t) {
  var n = ee,
    r = qe(),
    i = t(),
    o = !Ze(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Re = !0)),
    (r = r.queue),
    zl(pf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ce !== null && ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Cr(9, df.bind(null, n, r, i, t), void 0, null),
      de === null)
    )
      throw Error(k(349));
    Jt & 30 || ff(n, t, i);
  }
  return i;
}
function ff(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function df(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), hf(t) && mf(e);
}
function pf(e, t, n) {
  return n(function () {
    hf(t) && mf(e);
  });
}
function hf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ze(e, n);
  } catch {
    return !0;
  }
}
function mf(e) {
  var t = pt(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function Gu(e) {
  var t = tt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: kr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = zh.bind(null, ee, e)),
    [t.memoizedState, e]
  );
}
function Cr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ee.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ee.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function vf() {
  return qe().memoizedState;
}
function fi(e, t, n, r) {
  var i = tt();
  (ee.flags |= e),
    (i.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r));
}
function po(e, t, n, r) {
  var i = qe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ue !== null) {
    var s = ue.memoizedState;
    if (((o = s.destroy), r !== null && Ul(r, s.deps))) {
      i.memoizedState = Cr(t, n, o, r);
      return;
    }
  }
  (ee.flags |= e), (i.memoizedState = Cr(1 | t, n, o, r));
}
function Yu(e, t) {
  return fi(8390656, 8, e, t);
}
function zl(e, t) {
  return po(2048, 8, e, t);
}
function yf(e, t) {
  return po(4, 2, e, t);
}
function gf(e, t) {
  return po(4, 4, e, t);
}
function xf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ef(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), po(4, 4, xf.bind(null, t, e), n)
  );
}
function Ql() {}
function wf(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ul(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Sf(e, t) {
  var n = qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ul(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function kf(e, t, n) {
  return Jt & 21
    ? (Ze(n, t) || ((n = Oc()), (ee.lanes |= n), (Zt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Re = !0)), (e.memoizedState = n));
}
function Bh(e, t) {
  var n = $;
  ($ = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = qo.transition;
  qo.transition = {};
  try {
    e(!1), t();
  } finally {
    ($ = n), (qo.transition = r);
  }
}
function Cf() {
  return qe().memoizedState;
}
function bh(e, t, n) {
  var r = It(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Nf(e))
  )
    Tf(t, n);
  else if (((n = sf(e, t, n, r)), n !== null)) {
    var i = Te();
    Je(n, e, r, i), Of(n, t, r);
  }
}
function zh(e, t, n) {
  var r = It(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Nf(e)) Tf(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Ze(l, s))) {
          var u = t.interleaved;
          u === null
            ? ((i.next = i), Dl(t))
            : ((i.next = u.next), (u.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = sf(e, t, i, r)),
      n !== null && ((i = Te()), Je(n, e, r, i), Of(n, t, r));
  }
}
function Nf(e) {
  var t = e.alternate;
  return e === ee || (t !== null && t === ee);
}
function Tf(e, t) {
  rr = bi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Of(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xl(e, n);
  }
}
var zi = {
    readContext: $e,
    useCallback: ye,
    useContext: ye,
    useEffect: ye,
    useImperativeHandle: ye,
    useInsertionEffect: ye,
    useLayoutEffect: ye,
    useMemo: ye,
    useReducer: ye,
    useRef: ye,
    useState: ye,
    useDebugValue: ye,
    useDeferredValue: ye,
    useTransition: ye,
    useMutableSource: ye,
    useSyncExternalStore: ye,
    useId: ye,
    unstable_isNewReconciler: !1,
  },
  Qh = {
    readContext: $e,
    useCallback: function (e, t) {
      return (tt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: $e,
    useEffect: Yu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        fi(4194308, 4, xf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return fi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return fi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = tt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = tt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = bh.bind(null, ee, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = tt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Gu,
    useDebugValue: Ql,
    useDeferredValue: function (e) {
      return (tt().memoizedState = e);
    },
    useTransition: function () {
      var e = Gu(!1),
        t = e[0];
      return (e = Bh.bind(null, e[1])), (tt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ee,
        i = tt();
      if (J) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(k(349));
        Jt & 30 || ff(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Yu(pf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Cr(9, df.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = tt(),
        t = de.identifierPrefix;
      if (J) {
        var n = at,
          r = ut;
        (n = (r & ~(1 << (32 - Xe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Sr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Uh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Vh = {
    readContext: $e,
    useCallback: wf,
    useContext: $e,
    useEffect: zl,
    useImperativeHandle: Ef,
    useInsertionEffect: yf,
    useLayoutEffect: gf,
    useMemo: Sf,
    useReducer: Ho,
    useRef: vf,
    useState: function () {
      return Ho(kr);
    },
    useDebugValue: Ql,
    useDeferredValue: function (e) {
      var t = qe();
      return kf(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Ho(kr)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: af,
    useSyncExternalStore: cf,
    useId: Cf,
    unstable_isNewReconciler: !1,
  },
  $h = {
    readContext: $e,
    useCallback: wf,
    useContext: $e,
    useEffect: zl,
    useImperativeHandle: Ef,
    useInsertionEffect: yf,
    useLayoutEffect: gf,
    useMemo: Sf,
    useReducer: Wo,
    useRef: vf,
    useState: function () {
      return Wo(kr);
    },
    useDebugValue: Ql,
    useDeferredValue: function (e) {
      var t = qe();
      return ue === null ? (t.memoizedState = e) : kf(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Wo(kr)[0],
        t = qe().memoizedState;
      return [e, t];
    },
    useMutableSource: af,
    useSyncExternalStore: cf,
    useId: Cf,
    unstable_isNewReconciler: !1,
  };
function Ke(e, t) {
  if (e && e.defaultProps) {
    (t = te({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ds(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : te({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ho = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? rn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      i = It(e),
      o = ct(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Pt(e, o, i)),
      t !== null && (Je(t, e, i, r), ai(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Te(),
      i = It(e),
      o = ct(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Pt(e, o, i)),
      t !== null && (Je(t, e, i, r), ai(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Te(),
      r = It(e),
      i = ct(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Pt(e, i, r)),
      t !== null && (Je(t, e, r, n), ai(t, e, r));
  },
};
function Xu(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !vr(n, r) || !vr(i, o)
      : !0
  );
}
function _f(e, t, n) {
  var r = !1,
    i = Lt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = $e(o))
      : ((i = Ae(t) ? Yt : ke.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? _n(e, i) : Lt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = ho),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ju(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && ho.enqueueReplaceState(t, t.state, null);
}
function Fs(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Fl(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = $e(o))
    : ((o = Ae(t) ? Yt : ke.current), (i.context = _n(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ds(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && ho.enqueueReplaceState(i, i.state, null),
      Ui(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function An(e, t) {
  try {
    var n = "",
      r = t;
    do (n += gp(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ko(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ls(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var qh = typeof WeakMap == "function" ? WeakMap : Map;
function Pf(e, t, n) {
  (n = ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Vi || ((Vi = !0), (qs = r)), Ls(e, t);
    }),
    n
  );
}
function Rf(e, t, n) {
  (n = ct(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ls(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ls(e, t),
          typeof r != "function" &&
            (Rt === null ? (Rt = new Set([this])) : Rt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Zu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new qh();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = om.bind(null, e, t, n)), t.then(e, e));
}
function ea(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ta(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ct(-1, 1)), (t.tag = 2), Pt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Hh = mt.ReactCurrentOwner,
  Re = !1;
function Ne(e, t, n, r) {
  t.child = e === null ? of(t, null, n, r) : Rn(t, e.child, n, r);
}
function na(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Nn(t, i),
    (r = Bl(e, t, n, r, o, i)),
    (n = bl()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ht(e, t, i))
      : (J && n && Ol(t), (t.flags |= 1), Ne(e, t, r, i), t.child)
  );
}
function ra(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Yl(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), If(e, t, o, r, i))
      : ((e = mi(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : vr), n(s, r) && e.ref === t.ref)
    )
      return ht(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = At(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function If(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (vr(o, r) && e.ref === t.ref)
      if (((Re = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Re = !0);
      else return (t.lanes = e.lanes), ht(e, t, i);
  }
  return js(e, t, n, r, i);
}
function Af(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        K(xn, Fe),
        (Fe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          K(xn, Fe),
          (Fe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        K(xn, Fe),
        (Fe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      K(xn, Fe),
      (Fe |= r);
  return Ne(e, t, i, n), t.child;
}
function Df(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function js(e, t, n, r, i) {
  var o = Ae(n) ? Yt : ke.current;
  return (
    (o = _n(t, o)),
    Nn(t, i),
    (n = Bl(e, t, n, r, o, i)),
    (r = bl()),
    e !== null && !Re
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ht(e, t, i))
      : (J && r && Ol(t), (t.flags |= 1), Ne(e, t, n, i), t.child)
  );
}
function ia(e, t, n, r, i) {
  if (Ae(n)) {
    var o = !0;
    Di(t);
  } else o = !1;
  if ((Nn(t, i), t.stateNode === null))
    di(e, t), _f(t, n, r), Fs(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var u = s.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = $e(a))
      : ((a = Ae(n) ? Yt : ke.current), (a = _n(t, a)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || u !== a) && Ju(t, s, r, a)),
      (xt = !1);
    var p = t.memoizedState;
    (s.state = p),
      Ui(t, r, s, i),
      (u = t.memoizedState),
      l !== r || p !== u || Ie.current || xt
        ? (typeof c == "function" && (Ds(t, n, c, r), (u = t.memoizedState)),
          (l = xt || Xu(t, n, l, r, p, u, a))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (s.props = r),
          (s.state = u),
          (s.context = a),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      lf(e, t),
      (l = t.memoizedProps),
      (a = t.type === t.elementType ? l : Ke(t.type, l)),
      (s.props = a),
      (f = t.pendingProps),
      (p = s.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = $e(u))
        : ((u = Ae(n) ? Yt : ke.current), (u = _n(t, u)));
    var y = n.getDerivedStateFromProps;
    (c =
      typeof y == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || p !== u) && Ju(t, s, r, u)),
      (xt = !1),
      (p = t.memoizedState),
      (s.state = p),
      Ui(t, r, s, i);
    var v = t.memoizedState;
    l !== f || p !== v || Ie.current || xt
      ? (typeof y == "function" && (Ds(t, n, y, r), (v = t.memoizedState)),
        (a = xt || Xu(t, n, a, r, p, v, u) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, u),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, u)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = u),
        (r = a))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ms(e, t, n, r, o, i);
}
function Ms(e, t, n, r, i, o) {
  Df(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Vu(t, n, !1), ht(e, t, o);
  (r = t.stateNode), (Hh.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Rn(t, e.child, null, o)), (t.child = Rn(t, null, l, o)))
      : Ne(e, t, l, o),
    (t.memoizedState = r.state),
    i && Vu(t, n, !0),
    t.child
  );
}
function Ff(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Qu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Qu(e, t.context, !1),
    Ll(e, t.containerInfo);
}
function oa(e, t, n, r, i) {
  return Pn(), Pl(i), (t.flags |= 256), Ne(e, t, n, r), t.child;
}
var Us = { dehydrated: null, treeContext: null, retryLane: 0 };
function Bs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Lf(e, t, n) {
  var r = t.pendingProps,
    i = Z.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    K(Z, i & 1),
    e === null)
  )
    return (
      Is(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = yo(s, r, 0, null)),
              (e = Gt(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Bs(n)),
              (t.memoizedState = Us),
              e)
            : Vl(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return Wh(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = At(i, u)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = At(l, o)) : ((o = Gt(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Bs(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Us),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = At(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Vl(e, t) {
  return (
    (t = yo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Zr(e, t, n, r) {
  return (
    r !== null && Pl(r),
    Rn(t, e.child, null, n),
    (e = Vl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Wh(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ko(Error(k(422)))), Zr(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = yo({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Gt(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Rn(t, e.child, null, s),
        (t.child.memoizedState = Bs(s)),
        (t.memoizedState = Us),
        o);
  if (!(t.mode & 1)) return Zr(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(k(419))), (r = Ko(o, r, void 0)), Zr(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Re || l)) {
    if (((r = de), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), pt(e, i), Je(r, e, i, -1));
    }
    return Gl(), (r = Ko(Error(k(421)))), Zr(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = sm.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Le = _t(i.nextSibling)),
      (je = t),
      (J = !0),
      (Ye = null),
      e !== null &&
        ((be[ze++] = ut),
        (be[ze++] = at),
        (be[ze++] = Xt),
        (ut = e.id),
        (at = e.overflow),
        (Xt = t)),
      (t = Vl(t, r.children)),
      (t.flags |= 4096),
      t);
}
function sa(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), As(e.return, t, n);
}
function Go(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function jf(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Ne(e, t, r.children, n), (r = Z.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && sa(e, n, t);
        else if (e.tag === 19) sa(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((K(Z, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Bi(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Go(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Bi(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Go(t, !0, n, null, o);
        break;
      case "together":
        Go(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function di(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ht(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Zt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = At(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = At(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Kh(e, t, n) {
  switch (t.tag) {
    case 3:
      Ff(t), Pn();
      break;
    case 5:
      uf(t);
      break;
    case 1:
      Ae(t.type) && Di(t);
      break;
    case 4:
      Ll(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      K(ji, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (K(Z, Z.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Lf(e, t, n)
          : (K(Z, Z.current & 1),
            (e = ht(e, t, n)),
            e !== null ? e.sibling : null);
      K(Z, Z.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return jf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        K(Z, Z.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Af(e, t, n);
  }
  return ht(e, t, n);
}
var Mf, bs, Uf, Bf;
Mf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
bs = function () {};
Uf = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), qt(it.current);
    var o = null;
    switch (n) {
      case "input":
        (i = us(e, i)), (r = us(e, r)), (o = []);
        break;
      case "select":
        (i = te({}, i, { value: void 0 })),
          (r = te({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = fs(e, i)), (r = fs(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ii);
    }
    ps(n, r);
    var s;
    n = null;
    for (a in i)
      if (!r.hasOwnProperty(a) && i.hasOwnProperty(a) && i[a] != null)
        if (a === "style") {
          var l = i[a];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (ar.hasOwnProperty(a)
              ? o || (o = [])
              : (o = o || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((l = i != null ? i[a] : void 0),
        r.hasOwnProperty(a) && u !== l && (u != null || l != null))
      )
        if (a === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (u && u.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in u)
              u.hasOwnProperty(s) &&
                l[s] !== u[s] &&
                (n || (n = {}), (n[s] = u[s]));
          } else n || (o || (o = []), o.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (l = l ? l.__html : void 0),
              u != null && l !== u && (o = o || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (ar.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && G("scroll", e),
                  o || l === u || (o = []))
                : (o = o || []).push(a, u));
    }
    n && (o = o || []).push("style", n);
    var a = o;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Bf = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function $n(e, t) {
  if (!J)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Gh(e, t, n) {
  var r = t.pendingProps;
  switch ((_l(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ge(t), null;
    case 1:
      return Ae(t.type) && Ai(), ge(t), null;
    case 3:
      return (
        (r = t.stateNode),
        In(),
        Y(Ie),
        Y(ke),
        Ml(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Xr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ye !== null && (Ks(Ye), (Ye = null)))),
        bs(e, t),
        ge(t),
        null
      );
    case 5:
      jl(t);
      var i = qt(wr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Uf(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return ge(t), null;
        }
        if (((e = qt(it.current)), Xr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[nt] = t), (r[xr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              G("cancel", r), G("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              G("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Yn.length; i++) G(Yn[i], r);
              break;
            case "source":
              G("error", r);
              break;
            case "img":
            case "image":
            case "link":
              G("error", r), G("load", r);
              break;
            case "details":
              G("toggle", r);
              break;
            case "input":
              mu(r, o), G("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                G("invalid", r);
              break;
            case "textarea":
              yu(r, o), G("invalid", r);
          }
          ps(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Yr(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Yr(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : ar.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  G("scroll", r);
            }
          switch (n) {
            case "input":
              Qr(r), vu(r, o, !0);
              break;
            case "textarea":
              Qr(r), gu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ii);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = dc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[nt] = t),
            (e[xr] = r),
            Mf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = hs(n, r)), n)) {
              case "dialog":
                G("cancel", e), G("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                G("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Yn.length; i++) G(Yn[i], e);
                i = r;
                break;
              case "source":
                G("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                G("error", e), G("load", e), (i = r);
                break;
              case "details":
                G("toggle", e), (i = r);
                break;
              case "input":
                mu(e, r), (i = us(e, r)), G("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = te({}, r, { value: void 0 })),
                  G("invalid", e);
                break;
              case "textarea":
                yu(e, r), (i = fs(e, r)), G("invalid", e);
                break;
              default:
                i = r;
            }
            ps(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var u = l[o];
                o === "style"
                  ? mc(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && pc(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && cr(e, u)
                    : typeof u == "number" && cr(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (ar.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && G("scroll", e)
                      : u != null && pl(e, o, u, s));
              }
            switch (n) {
              case "input":
                Qr(e), vu(e, r, !1);
                break;
              case "textarea":
                Qr(e), gu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ft(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? wn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      wn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Ii);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ge(t), null;
    case 6:
      if (e && t.stateNode != null) Bf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = qt(wr.current)), qt(it.current), Xr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[nt] = t),
            (o = r.nodeValue !== n) && ((e = je), e !== null))
          )
            switch (e.tag) {
              case 3:
                Yr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Yr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[nt] = t),
            (t.stateNode = r);
      }
      return ge(t), null;
    case 13:
      if (
        (Y(Z),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (J && Le !== null && t.mode & 1 && !(t.flags & 128))
          nf(), Pn(), (t.flags |= 98560), (o = !1);
        else if (((o = Xr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[nt] = t;
          } else
            Pn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ge(t), (o = !1);
        } else Ye !== null && (Ks(Ye), (Ye = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Z.current & 1 ? ae === 0 && (ae = 3) : Gl())),
          t.updateQueue !== null && (t.flags |= 4),
          ge(t),
          null);
    case 4:
      return (
        In(), bs(e, t), e === null && yr(t.stateNode.containerInfo), ge(t), null
      );
    case 10:
      return Al(t.type._context), ge(t), null;
    case 17:
      return Ae(t.type) && Ai(), ge(t), null;
    case 19:
      if ((Y(Z), (o = t.memoizedState), o === null)) return ge(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) $n(o, !1);
        else {
          if (ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Bi(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    $n(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return K(Z, (Z.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ie() > Dn &&
            ((t.flags |= 128), (r = !0), $n(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Bi(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              $n(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !J)
            )
              return ge(t), null;
          } else
            2 * ie() - o.renderingStartTime > Dn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), $n(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ie()),
          (t.sibling = null),
          (n = Z.current),
          K(Z, r ? (n & 1) | 2 : n & 1),
          t)
        : (ge(t), null);
    case 22:
    case 23:
      return (
        Kl(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Fe & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Yh(e, t) {
  switch ((_l(t), t.tag)) {
    case 1:
      return (
        Ae(t.type) && Ai(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        In(),
        Y(Ie),
        Y(ke),
        Ml(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return jl(t), null;
    case 13:
      if ((Y(Z), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        Pn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Y(Z), null;
    case 4:
      return In(), null;
    case 10:
      return Al(t.type._context), null;
    case 22:
    case 23:
      return Kl(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var ei = !1,
  Ee = !1,
  Xh = typeof WeakSet == "function" ? WeakSet : Set,
  A = null;
function gn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ne(e, t, r);
      }
    else n.current = null;
}
function zs(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var la = !1;
function Jh(e, t) {
  if (((Cs = _i), (e = Vc()), Tl(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            u = -1,
            a = 0,
            c = 0,
            f = e,
            p = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (u = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (p = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (p === n && ++a === i && (l = s),
                p === o && ++c === r && (u = s),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = p), (p = f.parentNode);
            }
            f = y;
          }
          n = l === -1 || u === -1 ? null : { start: l, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ns = { focusedElem: e, selectionRange: n }, _i = !1, A = t; A !== null; )
    if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (A = e);
    else
      for (; A !== null; ) {
        t = A;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    _ = v.memoizedState,
                    m = t.stateNode,
                    d = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Ke(t.type, x),
                      _
                    );
                  m.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (w) {
          ne(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (A = e);
          break;
        }
        A = t.return;
      }
  return (v = la), (la = !1), v;
}
function ir(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && zs(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function mo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Qs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function bf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[nt], delete t[xr], delete t[_s], delete t[Fh], delete t[Lh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function zf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ua(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || zf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Vs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ii));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Vs(e, t, n), e = e.sibling; e !== null; ) Vs(e, t, n), (e = e.sibling);
}
function $s(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($s(e, t, n), e = e.sibling; e !== null; ) $s(e, t, n), (e = e.sibling);
}
var he = null,
  Ge = !1;
function yt(e, t, n) {
  for (n = n.child; n !== null; ) Qf(e, t, n), (n = n.sibling);
}
function Qf(e, t, n) {
  if (rt && typeof rt.onCommitFiberUnmount == "function")
    try {
      rt.onCommitFiberUnmount(so, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ee || gn(n, t);
    case 6:
      var r = he,
        i = Ge;
      (he = null),
        yt(e, t, n),
        (he = r),
        (Ge = i),
        he !== null &&
          (Ge
            ? ((e = he),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : he.removeChild(n.stateNode));
      break;
    case 18:
      he !== null &&
        (Ge
          ? ((e = he),
            (n = n.stateNode),
            e.nodeType === 8
              ? Qo(e.parentNode, n)
              : e.nodeType === 1 && Qo(e, n),
            hr(e))
          : Qo(he, n.stateNode));
      break;
    case 4:
      (r = he),
        (i = Ge),
        (he = n.stateNode.containerInfo),
        (Ge = !0),
        yt(e, t, n),
        (he = r),
        (Ge = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ee &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && zs(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      yt(e, t, n);
      break;
    case 1:
      if (
        !Ee &&
        (gn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          ne(n, t, l);
        }
      yt(e, t, n);
      break;
    case 21:
      yt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ee = (r = Ee) || n.memoizedState !== null), yt(e, t, n), (Ee = r))
        : yt(e, t, n);
      break;
    default:
      yt(e, t, n);
  }
}
function aa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Xh()),
      t.forEach(function (r) {
        var i = lm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function He(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (he = l.stateNode), (Ge = !1);
              break e;
            case 3:
              (he = l.stateNode.containerInfo), (Ge = !0);
              break e;
            case 4:
              (he = l.stateNode.containerInfo), (Ge = !0);
              break e;
          }
          l = l.return;
        }
        if (he === null) throw Error(k(160));
        Qf(o, s, i), (he = null), (Ge = !1);
        var u = i.alternate;
        u !== null && (u.return = null), (i.return = null);
      } catch (a) {
        ne(i, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Vf(t, e), (t = t.sibling);
}
function Vf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((He(t, e), et(e), r & 4)) {
        try {
          ir(3, e, e.return), mo(3, e);
        } catch (x) {
          ne(e, e.return, x);
        }
        try {
          ir(5, e, e.return);
        } catch (x) {
          ne(e, e.return, x);
        }
      }
      break;
    case 1:
      He(t, e), et(e), r & 512 && n !== null && gn(n, n.return);
      break;
    case 5:
      if (
        (He(t, e),
        et(e),
        r & 512 && n !== null && gn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          cr(i, "");
        } catch (x) {
          ne(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && cc(i, o),
              hs(l, s);
            var a = hs(l, o);
            for (s = 0; s < u.length; s += 2) {
              var c = u[s],
                f = u[s + 1];
              c === "style"
                ? mc(i, f)
                : c === "dangerouslySetInnerHTML"
                ? pc(i, f)
                : c === "children"
                ? cr(i, f)
                : pl(i, c, f, a);
            }
            switch (l) {
              case "input":
                as(i, o);
                break;
              case "textarea":
                fc(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? wn(i, !!o.multiple, y, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? wn(i, !!o.multiple, o.defaultValue, !0)
                      : wn(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[xr] = o;
          } catch (x) {
            ne(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((He(t, e), et(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (x) {
          ne(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (He(t, e), et(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          hr(t.containerInfo);
        } catch (x) {
          ne(e, e.return, x);
        }
      break;
    case 4:
      He(t, e), et(e);
      break;
    case 13:
      He(t, e),
        et(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Hl = ie())),
        r & 4 && aa(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ee = (a = Ee) || c), He(t, e), (Ee = a)) : He(t, e),
        et(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !c && e.mode & 1)
        )
          for (A = e, c = e.child; c !== null; ) {
            for (f = A = c; A !== null; ) {
              switch (((p = A), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ir(4, p, p.return);
                  break;
                case 1:
                  gn(p, p.return);
                  var v = p.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (x) {
                      ne(r, n, x);
                    }
                  }
                  break;
                case 5:
                  gn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    fa(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = p), (A = y)) : fa(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (i = f.stateNode),
                  a
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (u = f.memoizedProps.style),
                      (s =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (l.style.display = hc("display", s)));
              } catch (x) {
                ne(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = a ? "" : f.memoizedProps;
              } catch (x) {
                ne(e, e.return, x);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      He(t, e), et(e), r & 4 && aa(e);
      break;
    case 21:
      break;
    default:
      He(t, e), et(e);
  }
}
function et(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (zf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (cr(i, ""), (r.flags &= -33));
          var o = ua(e);
          $s(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = ua(e);
          Vs(e, l, s);
          break;
        default:
          throw Error(k(161));
      }
    } catch (u) {
      ne(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Zh(e, t, n) {
  (A = e), $f(e);
}
function $f(e, t, n) {
  for (var r = (e.mode & 1) !== 0; A !== null; ) {
    var i = A,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || ei;
      if (!s) {
        var l = i.alternate,
          u = (l !== null && l.memoizedState !== null) || Ee;
        l = ei;
        var a = Ee;
        if (((ei = s), (Ee = u) && !a))
          for (A = i; A !== null; )
            (s = A),
              (u = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? da(i)
                : u !== null
                ? ((u.return = s), (A = u))
                : da(i);
        for (; o !== null; ) (A = o), $f(o), (o = o.sibling);
        (A = i), (ei = l), (Ee = a);
      }
      ca(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (A = o)) : ca(e);
  }
}
function ca(e) {
  for (; A !== null; ) {
    var t = A;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ee || mo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ee)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ke(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Ku(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ku(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var c = a.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && hr(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        Ee || (t.flags & 512 && Qs(t));
      } catch (p) {
        ne(t, t.return, p);
      }
    }
    if (t === e) {
      A = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function fa(e) {
  for (; A !== null; ) {
    var t = A;
    if (t === e) {
      A = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (A = n);
      break;
    }
    A = t.return;
  }
}
function da(e) {
  for (; A !== null; ) {
    var t = A;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            mo(4, t);
          } catch (u) {
            ne(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ne(t, i, u);
            }
          }
          var o = t.return;
          try {
            Qs(t);
          } catch (u) {
            ne(t, o, u);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Qs(t);
          } catch (u) {
            ne(t, s, u);
          }
      }
    } catch (u) {
      ne(t, t.return, u);
    }
    if (t === e) {
      A = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (A = l);
      break;
    }
    A = t.return;
  }
}
var em = Math.ceil,
  Qi = mt.ReactCurrentDispatcher,
  $l = mt.ReactCurrentOwner,
  Ve = mt.ReactCurrentBatchConfig,
  z = 0,
  de = null,
  le = null,
  me = 0,
  Fe = 0,
  xn = Mt(0),
  ae = 0,
  Nr = null,
  Zt = 0,
  vo = 0,
  ql = 0,
  or = null,
  Pe = null,
  Hl = 0,
  Dn = 1 / 0,
  st = null,
  Vi = !1,
  qs = null,
  Rt = null,
  ti = !1,
  Ct = null,
  $i = 0,
  sr = 0,
  Hs = null,
  pi = -1,
  hi = 0;
function Te() {
  return z & 6 ? ie() : pi !== -1 ? pi : (pi = ie());
}
function It(e) {
  return e.mode & 1
    ? z & 2 && me !== 0
      ? me & -me
      : Mh.transition !== null
      ? (hi === 0 && (hi = Oc()), hi)
      : ((e = $),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Fc(e.type))),
        e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < sr) throw ((sr = 0), (Hs = null), Error(k(185)));
  Pr(e, n, r),
    (!(z & 2) || e !== de) &&
      (e === de && (!(z & 2) && (vo |= n), ae === 4 && St(e, me)),
      De(e, r),
      n === 1 && z === 0 && !(t.mode & 1) && ((Dn = ie() + 500), fo && Ut()));
}
function De(e, t) {
  var n = e.callbackNode;
  Mp(e, t);
  var r = Oi(e, e === de ? me : 0);
  if (r === 0)
    n !== null && wu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && wu(n), t === 1))
      e.tag === 0 ? jh(pa.bind(null, e)) : Zc(pa.bind(null, e)),
        Ah(function () {
          !(z & 6) && Ut();
        }),
        (n = null);
    else {
      switch (_c(r)) {
        case 1:
          n = gl;
          break;
        case 4:
          n = Nc;
          break;
        case 16:
          n = Ti;
          break;
        case 536870912:
          n = Tc;
          break;
        default:
          n = Ti;
      }
      n = Jf(n, qf.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function qf(e, t) {
  if (((pi = -1), (hi = 0), z & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Tn() && e.callbackNode !== n) return null;
  var r = Oi(e, e === de ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = qi(e, r);
  else {
    t = r;
    var i = z;
    z |= 2;
    var o = Wf();
    (de !== e || me !== t) && ((st = null), (Dn = ie() + 500), Kt(e, t));
    do
      try {
        rm();
        break;
      } catch (l) {
        Hf(e, l);
      }
    while (!0);
    Il(),
      (Qi.current = o),
      (z = i),
      le !== null ? (t = 0) : ((de = null), (me = 0), (t = ae));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = xs(e)), i !== 0 && ((r = i), (t = Ws(e, i)))), t === 1)
    )
      throw ((n = Nr), Kt(e, 0), St(e, r), De(e, ie()), n);
    if (t === 6) St(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !tm(i) &&
          ((t = qi(e, r)),
          t === 2 && ((o = xs(e)), o !== 0 && ((r = o), (t = Ws(e, o)))),
          t === 1))
      )
        throw ((n = Nr), Kt(e, 0), St(e, r), De(e, ie()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Qt(e, Pe, st);
          break;
        case 3:
          if (
            (St(e, r), (r & 130023424) === r && ((t = Hl + 500 - ie()), 10 < t))
          ) {
            if (Oi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Te(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Os(Qt.bind(null, e, Pe, st), t);
            break;
          }
          Qt(e, Pe, st);
          break;
        case 4:
          if ((St(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Xe(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ie() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * em(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Os(Qt.bind(null, e, Pe, st), r);
            break;
          }
          Qt(e, Pe, st);
          break;
        case 5:
          Qt(e, Pe, st);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return De(e, ie()), e.callbackNode === n ? qf.bind(null, e) : null;
}
function Ws(e, t) {
  var n = or;
  return (
    e.current.memoizedState.isDehydrated && (Kt(e, t).flags |= 256),
    (e = qi(e, t)),
    e !== 2 && ((t = Pe), (Pe = n), t !== null && Ks(t)),
    e
  );
}
function Ks(e) {
  Pe === null ? (Pe = e) : Pe.push.apply(Pe, e);
}
function tm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Ze(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function St(e, t) {
  for (
    t &= ~ql,
      t &= ~vo,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Xe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function pa(e) {
  if (z & 6) throw Error(k(327));
  Tn();
  var t = Oi(e, 0);
  if (!(t & 1)) return De(e, ie()), null;
  var n = qi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = xs(e);
    r !== 0 && ((t = r), (n = Ws(e, r)));
  }
  if (n === 1) throw ((n = Nr), Kt(e, 0), St(e, t), De(e, ie()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Qt(e, Pe, st),
    De(e, ie()),
    null
  );
}
function Wl(e, t) {
  var n = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    (z = n), z === 0 && ((Dn = ie() + 500), fo && Ut());
  }
}
function en(e) {
  Ct !== null && Ct.tag === 0 && !(z & 6) && Tn();
  var t = z;
  z |= 1;
  var n = Ve.transition,
    r = $;
  try {
    if (((Ve.transition = null), ($ = 1), e)) return e();
  } finally {
    ($ = r), (Ve.transition = n), (z = t), !(z & 6) && Ut();
  }
}
function Kl() {
  (Fe = xn.current), Y(xn);
}
function Kt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ih(n)), le !== null))
    for (n = le.return; n !== null; ) {
      var r = n;
      switch ((_l(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ai();
          break;
        case 3:
          In(), Y(Ie), Y(ke), Ml();
          break;
        case 5:
          jl(r);
          break;
        case 4:
          In();
          break;
        case 13:
          Y(Z);
          break;
        case 19:
          Y(Z);
          break;
        case 10:
          Al(r.type._context);
          break;
        case 22:
        case 23:
          Kl();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (le = e = At(e.current, null)),
    (me = Fe = t),
    (ae = 0),
    (Nr = null),
    (ql = vo = Zt = 0),
    (Pe = or = null),
    $t !== null)
  ) {
    for (t = 0; t < $t.length; t++)
      if (((n = $t[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    $t = null;
  }
  return e;
}
function Hf(e, t) {
  do {
    var n = le;
    try {
      if ((Il(), (ci.current = zi), bi)) {
        for (var r = ee.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        bi = !1;
      }
      if (
        ((Jt = 0),
        (ce = ue = ee = null),
        (rr = !1),
        (Sr = 0),
        ($l.current = null),
        n === null || n.return === null)
      ) {
        (ae = 1), (Nr = t), (le = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          u = t;
        if (
          ((t = me),
          (l.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = c.alternate;
            p
              ? ((c.updateQueue = p.updateQueue),
                (c.memoizedState = p.memoizedState),
                (c.lanes = p.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var y = ea(s);
          if (y !== null) {
            (y.flags &= -257),
              ta(y, s, l, o, t),
              y.mode & 1 && Zu(o, a, t),
              (t = y),
              (u = a);
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              x.add(u), (t.updateQueue = x);
            } else v.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Zu(o, a, t), Gl();
              break e;
            }
            u = Error(k(426));
          }
        } else if (J && l.mode & 1) {
          var _ = ea(s);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              ta(_, s, l, o, t),
              Pl(An(u, l));
            break e;
          }
        }
        (o = u = An(u, l)),
          ae !== 4 && (ae = 2),
          or === null ? (or = [o]) : or.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = Pf(o, u, t);
              Wu(o, m);
              break e;
            case 1:
              l = u;
              var d = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Rt === null || !Rt.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = Rf(o, l, t);
                Wu(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Gf(n);
    } catch (N) {
      (t = N), le === n && n !== null && (le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Wf() {
  var e = Qi.current;
  return (Qi.current = zi), e === null ? zi : e;
}
function Gl() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    de === null || (!(Zt & 268435455) && !(vo & 268435455)) || St(de, me);
}
function qi(e, t) {
  var n = z;
  z |= 2;
  var r = Wf();
  (de !== e || me !== t) && ((st = null), Kt(e, t));
  do
    try {
      nm();
      break;
    } catch (i) {
      Hf(e, i);
    }
  while (!0);
  if ((Il(), (z = n), (Qi.current = r), le !== null)) throw Error(k(261));
  return (de = null), (me = 0), ae;
}
function nm() {
  for (; le !== null; ) Kf(le);
}
function rm() {
  for (; le !== null && !_p(); ) Kf(le);
}
function Kf(e) {
  var t = Xf(e.alternate, e, Fe);
  (e.memoizedProps = e.pendingProps),
    t === null ? Gf(e) : (le = t),
    ($l.current = null);
}
function Gf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Yh(n, t)), n !== null)) {
        (n.flags &= 32767), (le = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ae = 6), (le = null);
        return;
      }
    } else if (((n = Gh(n, t, Fe)), n !== null)) {
      le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      le = t;
      return;
    }
    le = t = e;
  } while (t !== null);
  ae === 0 && (ae = 5);
}
function Qt(e, t, n) {
  var r = $,
    i = Ve.transition;
  try {
    (Ve.transition = null), ($ = 1), im(e, t, n, r);
  } finally {
    (Ve.transition = i), ($ = r);
  }
  return null;
}
function im(e, t, n, r) {
  do Tn();
  while (Ct !== null);
  if (z & 6) throw Error(k(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Up(e, o),
    e === de && ((le = de = null), (me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ti ||
      ((ti = !0),
      Jf(Ti, function () {
        return Tn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ve.transition), (Ve.transition = null);
    var s = $;
    $ = 1;
    var l = z;
    (z |= 4),
      ($l.current = null),
      Jh(e, n),
      Vf(n, e),
      Ch(Ns),
      (_i = !!Cs),
      (Ns = Cs = null),
      (e.current = n),
      Zh(n),
      Pp(),
      (z = l),
      ($ = s),
      (Ve.transition = o);
  } else e.current = n;
  if (
    (ti && ((ti = !1), (Ct = e), ($i = i)),
    (o = e.pendingLanes),
    o === 0 && (Rt = null),
    Ap(n.stateNode),
    De(e, ie()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Vi) throw ((Vi = !1), (e = qs), (qs = null), e);
  return (
    $i & 1 && e.tag !== 0 && Tn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Hs ? sr++ : ((sr = 0), (Hs = e))) : (sr = 0),
    Ut(),
    null
  );
}
function Tn() {
  if (Ct !== null) {
    var e = _c($i),
      t = Ve.transition,
      n = $;
    try {
      if (((Ve.transition = null), ($ = 16 > e ? 16 : e), Ct === null))
        var r = !1;
      else {
        if (((e = Ct), (Ct = null), ($i = 0), z & 6)) throw Error(k(331));
        var i = z;
        for (z |= 4, A = e.current; A !== null; ) {
          var o = A,
            s = o.child;
          if (A.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var u = 0; u < l.length; u++) {
                var a = l[u];
                for (A = a; A !== null; ) {
                  var c = A;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ir(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (A = f);
                  else
                    for (; A !== null; ) {
                      c = A;
                      var p = c.sibling,
                        y = c.return;
                      if ((bf(c), c === a)) {
                        A = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = y), (A = p);
                        break;
                      }
                      A = y;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var _ = x.sibling;
                    (x.sibling = null), (x = _);
                  } while (x !== null);
                }
              }
              A = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (A = s);
          else
            e: for (; A !== null; ) {
              if (((o = A), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ir(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (A = m);
                break e;
              }
              A = o.return;
            }
        }
        var d = e.current;
        for (A = d; A !== null; ) {
          s = A;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) (h.return = s), (A = h);
          else
            e: for (s = d; A !== null; ) {
              if (((l = A), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      mo(9, l);
                  }
                } catch (N) {
                  ne(l, l.return, N);
                }
              if (l === s) {
                A = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), (A = w);
                break e;
              }
              A = l.return;
            }
        }
        if (
          ((z = i), Ut(), rt && typeof rt.onPostCommitFiberRoot == "function")
        )
          try {
            rt.onPostCommitFiberRoot(so, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ($ = n), (Ve.transition = t);
    }
  }
  return !1;
}
function ha(e, t, n) {
  (t = An(n, t)),
    (t = Pf(e, t, 1)),
    (e = Pt(e, t, 1)),
    (t = Te()),
    e !== null && (Pr(e, 1, t), De(e, t));
}
function ne(e, t, n) {
  if (e.tag === 3) ha(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ha(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Rt === null || !Rt.has(r)))
        ) {
          (e = An(n, e)),
            (e = Rf(t, e, 1)),
            (t = Pt(t, e, 1)),
            (e = Te()),
            t !== null && (Pr(t, 1, e), De(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function om(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Te()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (me & n) === n &&
      (ae === 4 || (ae === 3 && (me & 130023424) === me && 500 > ie() - Hl)
        ? Kt(e, 0)
        : (ql |= n)),
    De(e, t);
}
function Yf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = qr), (qr <<= 1), !(qr & 130023424) && (qr = 4194304))
      : (t = 1));
  var n = Te();
  (e = pt(e, t)), e !== null && (Pr(e, t, n), De(e, n));
}
function sm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Yf(e, n);
}
function lm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Yf(e, n);
}
var Xf;
Xf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ie.current) Re = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Re = !1), Kh(e, t, n);
      Re = !!(e.flags & 131072);
    }
  else (Re = !1), J && t.flags & 1048576 && ef(t, Li, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      di(e, t), (e = t.pendingProps);
      var i = _n(t, ke.current);
      Nn(t, n), (i = Bl(null, t, r, e, i, n));
      var o = bl();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ae(r) ? ((o = !0), Di(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Fl(t),
            (i.updater = ho),
            (t.stateNode = i),
            (i._reactInternals = t),
            Fs(t, r, e, n),
            (t = Ms(null, t, r, !0, o, n)))
          : ((t.tag = 0), J && o && Ol(t), Ne(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (di(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = am(r)),
          (e = Ke(r, e)),
          i)
        ) {
          case 0:
            t = js(null, t, r, e, n);
            break e;
          case 1:
            t = ia(null, t, r, e, n);
            break e;
          case 11:
            t = na(null, t, r, e, n);
            break e;
          case 14:
            t = ra(null, t, r, Ke(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        js(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        ia(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Ff(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          lf(e, t),
          Ui(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = An(Error(k(423)), t)), (t = oa(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = An(Error(k(424)), t)), (t = oa(e, t, r, n, i));
            break e;
          } else
            for (
              Le = _t(t.stateNode.containerInfo.firstChild),
                je = t,
                J = !0,
                Ye = null,
                n = of(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Pn(), r === i)) {
            t = ht(e, t, n);
            break e;
          }
          Ne(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        uf(t),
        e === null && Is(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Ts(r, i) ? (s = null) : o !== null && Ts(r, o) && (t.flags |= 32),
        Df(e, t),
        Ne(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && Is(t), null;
    case 13:
      return Lf(e, t, n);
    case 4:
      return (
        Ll(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Rn(t, null, r, n)) : Ne(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        na(e, t, r, i, n)
      );
    case 7:
      return Ne(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ne(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          K(ji, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Ze(o.value, s)) {
            if (o.children === i.children && !Ie.current) {
              t = ht(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var u = l.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = ct(-1, n & -n)), (u.tag = 2);
                      var a = o.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var c = a.pending;
                        c === null
                          ? (u.next = u)
                          : ((u.next = c.next), (c.next = u)),
                          (a.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      As(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(k(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  As(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Ne(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Nn(t, n),
        (i = $e(i)),
        (r = r(i)),
        (t.flags |= 1),
        Ne(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ke(r, t.pendingProps)),
        (i = Ke(r.type, i)),
        ra(e, t, r, i, n)
      );
    case 15:
      return If(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        di(e, t),
        (t.tag = 1),
        Ae(r) ? ((e = !0), Di(t)) : (e = !1),
        Nn(t, n),
        _f(t, r, i),
        Fs(t, r, i, n),
        Ms(null, t, r, !0, e, n)
      );
    case 19:
      return jf(e, t, n);
    case 22:
      return Af(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Jf(e, t) {
  return Cc(e, t);
}
function um(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Qe(e, t, n, r) {
  return new um(e, t, n, r);
}
function Yl(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function am(e) {
  if (typeof e == "function") return Yl(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ml)) return 11;
    if (e === vl) return 14;
  }
  return 2;
}
function At(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Qe(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function mi(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Yl(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case an:
        return Gt(n.children, i, o, t);
      case hl:
        (s = 8), (i |= 8);
        break;
      case is:
        return (
          (e = Qe(12, n, t, i | 2)), (e.elementType = is), (e.lanes = o), e
        );
      case os:
        return (e = Qe(13, n, t, i)), (e.elementType = os), (e.lanes = o), e;
      case ss:
        return (e = Qe(19, n, t, i)), (e.elementType = ss), (e.lanes = o), e;
      case lc:
        return yo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case oc:
              s = 10;
              break e;
            case sc:
              s = 9;
              break e;
            case ml:
              s = 11;
              break e;
            case vl:
              s = 14;
              break e;
            case gt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Qe(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Gt(e, t, n, r) {
  return (e = Qe(7, e, r, t)), (e.lanes = n), e;
}
function yo(e, t, n, r) {
  return (
    (e = Qe(22, e, r, t)),
    (e.elementType = lc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Yo(e, t, n) {
  return (e = Qe(6, e, null, t)), (e.lanes = n), e;
}
function Xo(e, t, n) {
  return (
    (t = Qe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function cm(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Io(0)),
    (this.expirationTimes = Io(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Io(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Xl(e, t, n, r, i, o, s, l, u) {
  return (
    (e = new cm(e, t, n, l, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Qe(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Fl(o),
    e
  );
}
function fm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: un,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Zf(e) {
  if (!e) return Lt;
  e = e._reactInternals;
  e: {
    if (rn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ae(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ae(n)) return Jc(e, n, t);
  }
  return t;
}
function ed(e, t, n, r, i, o, s, l, u) {
  return (
    (e = Xl(n, r, !0, e, i, o, s, l, u)),
    (e.context = Zf(null)),
    (n = e.current),
    (r = Te()),
    (i = It(n)),
    (o = ct(r, i)),
    (o.callback = t ?? null),
    Pt(n, o, i),
    (e.current.lanes = i),
    Pr(e, i, r),
    De(e, r),
    e
  );
}
function go(e, t, n, r) {
  var i = t.current,
    o = Te(),
    s = It(i);
  return (
    (n = Zf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ct(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Pt(i, t, s)),
    e !== null && (Je(e, i, s, o), ai(e, i, s)),
    s
  );
}
function Hi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ma(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Jl(e, t) {
  ma(e, t), (e = e.alternate) && ma(e, t);
}
function dm() {
  return null;
}
var td =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Zl(e) {
  this._internalRoot = e;
}
xo.prototype.render = Zl.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  go(e, t, null, null);
};
xo.prototype.unmount = Zl.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    en(function () {
      go(null, e, null, null);
    }),
      (t[dt] = null);
  }
};
function xo(e) {
  this._internalRoot = e;
}
xo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ic();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < wt.length && t !== 0 && t < wt[n].priority; n++);
    wt.splice(n, 0, e), n === 0 && Dc(e);
  }
};
function eu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Eo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function va() {}
function pm(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var a = Hi(s);
        o.call(a);
      };
    }
    var s = ed(t, r, e, 0, null, !1, !1, "", va);
    return (
      (e._reactRootContainer = s),
      (e[dt] = s.current),
      yr(e.nodeType === 8 ? e.parentNode : e),
      en(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var a = Hi(u);
      l.call(a);
    };
  }
  var u = Xl(e, 0, !1, null, null, !1, !1, "", va);
  return (
    (e._reactRootContainer = u),
    (e[dt] = u.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    en(function () {
      go(t, u, n, r);
    }),
    u
  );
}
function wo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var u = Hi(s);
        l.call(u);
      };
    }
    go(t, s, e, i);
  } else s = pm(n, t, e, i, r);
  return Hi(s);
}
Pc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Gn(t.pendingLanes);
        n !== 0 &&
          (xl(t, n | 1), De(t, ie()), !(z & 6) && ((Dn = ie() + 500), Ut()));
      }
      break;
    case 13:
      en(function () {
        var r = pt(e, 1);
        if (r !== null) {
          var i = Te();
          Je(r, e, 1, i);
        }
      }),
        Jl(e, 1);
  }
};
El = function (e) {
  if (e.tag === 13) {
    var t = pt(e, 134217728);
    if (t !== null) {
      var n = Te();
      Je(t, e, 134217728, n);
    }
    Jl(e, 134217728);
  }
};
Rc = function (e) {
  if (e.tag === 13) {
    var t = It(e),
      n = pt(e, t);
    if (n !== null) {
      var r = Te();
      Je(n, e, t, r);
    }
    Jl(e, t);
  }
};
Ic = function () {
  return $;
};
Ac = function (e, t) {
  var n = $;
  try {
    return ($ = e), t();
  } finally {
    $ = n;
  }
};
vs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((as(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = co(r);
            if (!i) throw Error(k(90));
            ac(r), as(r, i);
          }
        }
      }
      break;
    case "textarea":
      fc(e, n);
      break;
    case "select":
      (t = n.value), t != null && wn(e, !!n.multiple, t, !1);
  }
};
gc = Wl;
xc = en;
var hm = { usingClientEntryPoint: !1, Events: [Ir, pn, co, vc, yc, Wl] },
  qn = {
    findFiberByHostInstance: Vt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  mm = {
    bundleType: qn.bundleType,
    version: qn.version,
    rendererPackageName: qn.rendererPackageName,
    rendererConfig: qn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Sc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: qn.findFiberByHostInstance || dm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ni.isDisabled && ni.supportsFiber)
    try {
      (so = ni.inject(mm)), (rt = ni);
    } catch {}
}
Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hm;
Ue.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!eu(t)) throw Error(k(200));
  return fm(e, t, null, n);
};
Ue.createRoot = function (e, t) {
  if (!eu(e)) throw Error(k(299));
  var n = !1,
    r = "",
    i = td;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Xl(e, 1, !1, null, null, n, !1, r, i)),
    (e[dt] = t.current),
    yr(e.nodeType === 8 ? e.parentNode : e),
    new Zl(t)
  );
};
Ue.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = Sc(t)), (e = e === null ? null : e.stateNode), e;
};
Ue.flushSync = function (e) {
  return en(e);
};
Ue.hydrate = function (e, t, n) {
  if (!Eo(t)) throw Error(k(200));
  return wo(null, e, t, !0, n);
};
Ue.hydrateRoot = function (e, t, n) {
  if (!eu(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = td;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = ed(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[dt] = t.current),
    yr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new xo(t);
};
Ue.render = function (e, t, n) {
  if (!Eo(t)) throw Error(k(200));
  return wo(null, e, t, !1, n);
};
Ue.unmountComponentAtNode = function (e) {
  if (!Eo(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (en(function () {
        wo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[dt] = null);
        });
      }),
      !0)
    : !1;
};
Ue.unstable_batchedUpdates = Wl;
Ue.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Eo(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return wo(e, t, n, !1, r);
};
Ue.version = "18.3.1-next-f1338f8080-20240426";
function nd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nd);
    } catch (e) {
      console.error(e);
    }
}
nd(), (tc.exports = Ue);
var rd = tc.exports;
const vm = sl(rd);
var id,
  ya = rd;
(id = ya.createRoot), ya.hydrateRoot;
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Tr() {
  return (
    (Tr = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Tr.apply(this, arguments)
  );
}
var Ht;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Ht || (Ht = {}));
const ga = "popstate";
function ym(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: l } = r.location;
    return Gs(
      "",
      { pathname: o, search: s, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Wi(i);
  }
  return xm(t, n, null, e);
}
function Se(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function od(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function gm() {
  return Math.random().toString(36).substr(2, 8);
}
function xa(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Gs(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Tr(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Dr(t) : t,
      { state: n, key: (t && t.key) || r || gm() }
    )
  );
}
function Wi(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Dr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function xm(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    l = Ht.Pop,
    u = null,
    a = c();
  a == null && ((a = 0), s.replaceState(Tr({}, s.state, { idx: a }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function f() {
    l = Ht.Pop;
    let _ = c(),
      m = _ == null ? null : _ - a;
    (a = _), u && u({ action: l, location: x.location, delta: m });
  }
  function p(_, m) {
    l = Ht.Push;
    let d = Gs(x.location, _, m);
    a = c() + 1;
    let h = xa(d, a),
      w = x.createHref(d);
    try {
      s.pushState(h, "", w);
    } catch (N) {
      if (N instanceof DOMException && N.name === "DataCloneError") throw N;
      i.location.assign(w);
    }
    o && u && u({ action: l, location: x.location, delta: 1 });
  }
  function y(_, m) {
    l = Ht.Replace;
    let d = Gs(x.location, _, m);
    a = c();
    let h = xa(d, a),
      w = x.createHref(d);
    s.replaceState(h, "", w),
      o && u && u({ action: l, location: x.location, delta: 0 });
  }
  function v(_) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      d = typeof _ == "string" ? _ : Wi(_);
    return (
      (d = d.replace(/ $/, "%20")),
      Se(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          d
      ),
      new URL(d, m)
    );
  }
  let x = {
    get action() {
      return l;
    },
    get location() {
      return e(i, s);
    },
    listen(_) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(ga, f),
        (u = _),
        () => {
          i.removeEventListener(ga, f), (u = null);
        }
      );
    },
    createHref(_) {
      return t(i, _);
    },
    createURL: v,
    encodeLocation(_) {
      let m = v(_);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: p,
    replace: y,
    go(_) {
      return s.go(_);
    },
  };
  return x;
}
var Ea;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(Ea || (Ea = {}));
function Em(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Dr(t) : t,
    i = tu(r.pathname || "/", n);
  if (i == null) return null;
  let o = sd(e);
  wm(o);
  let s = null;
  for (let l = 0; s == null && l < o.length; ++l) {
    let u = Dm(i);
    s = Rm(o[l], u);
  }
  return s;
}
function sd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (o, s, l) => {
    let u = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (Se(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let a = Dt([r, u.relativePath]),
      c = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (Se(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + a + '".')
      ),
      sd(o.children, t, c, a)),
      !(o.path == null && !o.index) &&
        t.push({ path: a, score: _m(a, o.index), routesMeta: c });
  };
  return (
    e.forEach((o, s) => {
      var l;
      if (o.path === "" || !((l = o.path) != null && l.includes("?"))) i(o, s);
      else for (let u of ld(o.path)) i(o, s, u);
    }),
    t
  );
}
function ld(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = ld(r.join("/")),
    l = [];
  return (
    l.push(...s.map((u) => (u === "" ? o : [o, u].join("/")))),
    i && l.push(...s),
    l.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function wm(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Pm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Sm = /^:[\w-]+$/,
  km = 3,
  Cm = 2,
  Nm = 1,
  Tm = 10,
  Om = -2,
  wa = (e) => e === "*";
function _m(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(wa) && (r += Om),
    t && (r += Cm),
    n
      .filter((i) => !wa(i))
      .reduce((i, o) => i + (Sm.test(o) ? km : o === "" ? Nm : Tm), r)
  );
}
function Pm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Rm(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    o = [];
  for (let s = 0; s < n.length; ++s) {
    let l = n[s],
      u = s === n.length - 1,
      a = i === "/" ? t : t.slice(i.length) || "/",
      c = Im(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        a
      );
    if (!c) return null;
    Object.assign(r, c.params);
    let f = l.route;
    o.push({
      params: r,
      pathname: Dt([i, c.pathname]),
      pathnameBase: Mm(Dt([i, c.pathnameBase])),
      route: f,
    }),
      c.pathnameBase !== "/" && (i = Dt([i, c.pathnameBase]));
  }
  return o;
}
function Im(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Am(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: r.reduce((a, c, f) => {
      let { paramName: p, isOptional: y } = c;
      if (p === "*") {
        let x = l[f] || "";
        s = o.slice(0, o.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const v = l[f];
      return (
        y && !v ? (a[p] = void 0) : (a[p] = (v || "").replace(/%2F/g, "/")), a
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function Am(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    od(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, u) => (
            r.push({ paramName: l, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Dm(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      od(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function tu(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Fm(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? Dr(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Lm(n, t)) : t,
    search: Um(r),
    hash: Bm(i),
  };
}
function Lm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Jo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function jm(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function ud(e, t) {
  let n = jm(e);
  return t
    ? n.map((r, i) => (i === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function ad(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = Dr(e))
    : ((i = Tr({}, e)),
      Se(
        !i.pathname || !i.pathname.includes("?"),
        Jo("?", "pathname", "search", i)
      ),
      Se(
        !i.pathname || !i.pathname.includes("#"),
        Jo("#", "pathname", "hash", i)
      ),
      Se(!i.search || !i.search.includes("#"), Jo("#", "search", "hash", i)));
  let o = e === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    l;
  if (s == null) l = n;
  else {
    let f = t.length - 1;
    if (!r && s.startsWith("..")) {
      let p = s.split("/");
      for (; p[0] === ".."; ) p.shift(), (f -= 1);
      i.pathname = p.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let u = Fm(i, l),
    a = s && s !== "/" && s.endsWith("/"),
    c = (o || s === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (a || c) && (u.pathname += "/"), u;
}
const Dt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Mm = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Um = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Bm = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function bm(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const cd = ["post", "put", "patch", "delete"];
new Set(cd);
const zm = ["get", ...cd];
new Set(zm);
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ki() {
  return (
    (Ki = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ki.apply(this, arguments)
  );
}
const nu = I.createContext(null),
  Qm = I.createContext(null),
  on = I.createContext(null),
  ru = I.createContext(null),
  vt = I.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  fd = I.createContext(null);
function Vm(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Fr() || Se(!1);
  let { basename: r, navigator: i } = I.useContext(on),
    { hash: o, pathname: s, search: l } = pd(e, { relative: n }),
    u = s;
  return (
    r !== "/" && (u = s === "/" ? r : Dt([r, s])),
    i.createHref({ pathname: u, search: l, hash: o })
  );
}
function Fr() {
  return I.useContext(ru) != null;
}
function Lr() {
  return Fr() || Se(!1), I.useContext(ru).location;
}
function dd(e) {
  I.useContext(on).static || I.useLayoutEffect(e);
}
function $m() {
  let { isDataRoute: e } = I.useContext(vt);
  return e ? sv() : qm();
}
function qm() {
  Fr() || Se(!1);
  let e = I.useContext(nu),
    { basename: t, future: n, navigator: r } = I.useContext(on),
    { matches: i } = I.useContext(vt),
    { pathname: o } = Lr(),
    s = JSON.stringify(ud(i, n.v7_relativeSplatPath)),
    l = I.useRef(!1);
  return (
    dd(() => {
      l.current = !0;
    }),
    I.useCallback(
      function (a, c) {
        if ((c === void 0 && (c = {}), !l.current)) return;
        if (typeof a == "number") {
          r.go(a);
          return;
        }
        let f = ad(a, JSON.parse(s), o, c.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Dt([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c);
      },
      [t, r, s, o, e]
    )
  );
}
const Hm = I.createContext(null);
function Wm(e) {
  let t = I.useContext(vt).outlet;
  return t && I.createElement(Hm.Provider, { value: e }, t);
}
function Km() {
  let { matches: e } = I.useContext(vt),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function pd(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = I.useContext(on),
    { matches: i } = I.useContext(vt),
    { pathname: o } = Lr(),
    s = JSON.stringify(ud(i, r.v7_relativeSplatPath));
  return I.useMemo(() => ad(e, JSON.parse(s), o, n === "path"), [e, s, o, n]);
}
function Gm(e, t) {
  return Ym(e);
}
function Ym(e, t, n, r) {
  Fr() || Se(!1);
  let { navigator: i } = I.useContext(on),
    { matches: o } = I.useContext(vt),
    s = o[o.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let u = s ? s.pathnameBase : "/";
  s && s.route;
  let a = Lr(),
    c;
  c = a;
  let f = c.pathname || "/",
    p = f;
  if (u !== "/") {
    let x = u.replace(/^\//, "").split("/");
    p = "/" + f.replace(/^\//, "").split("/").slice(x.length).join("/");
  }
  let y = Em(e, { pathname: p });
  return tv(
    y &&
      y.map((x) =>
        Object.assign({}, x, {
          params: Object.assign({}, l, x.params),
          pathname: Dt([
            u,
            i.encodeLocation
              ? i.encodeLocation(x.pathname).pathname
              : x.pathname,
          ]),
          pathnameBase:
            x.pathnameBase === "/"
              ? u
              : Dt([
                  u,
                  i.encodeLocation
                    ? i.encodeLocation(x.pathnameBase).pathname
                    : x.pathnameBase,
                ]),
        })
      ),
    o,
    n,
    r
  );
}
function Xm() {
  let e = ov(),
    t = bm(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return I.createElement(
    I.Fragment,
    null,
    I.createElement("h2", null, "Unexpected Application Error!"),
    I.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? I.createElement("pre", { style: i }, n) : null,
    null
  );
}
const Jm = I.createElement(Xm, null);
class Zm extends I.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? I.createElement(
          vt.Provider,
          { value: this.props.routeContext },
          I.createElement(fd.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function ev(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = I.useContext(nu);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    I.createElement(vt.Provider, { value: t }, r)
  );
}
function tv(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let s = e,
    l = (i = n) == null ? void 0 : i.errors;
  if (l != null) {
    let c = s.findIndex(
      (f) => f.route.id && (l == null ? void 0 : l[f.route.id]) !== void 0
    );
    c >= 0 || Se(!1), (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  let u = !1,
    a = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let f = s[c];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (a = c),
        f.route.id)
      ) {
        let { loaderData: p, errors: y } = n,
          v =
            f.route.loader &&
            p[f.route.id] === void 0 &&
            (!y || y[f.route.id] === void 0);
        if (f.route.lazy || v) {
          (u = !0), a >= 0 ? (s = s.slice(0, a + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((c, f, p) => {
    let y,
      v = !1,
      x = null,
      _ = null;
    n &&
      ((y = l && f.route.id ? l[f.route.id] : void 0),
      (x = f.route.errorElement || Jm),
      u &&
        (a < 0 && p === 0
          ? (lv("route-fallback"), (v = !0), (_ = null))
          : a === p &&
            ((v = !0), (_ = f.route.hydrateFallbackElement || null))));
    let m = t.concat(s.slice(0, p + 1)),
      d = () => {
        let h;
        return (
          y
            ? (h = x)
            : v
            ? (h = _)
            : f.route.Component
            ? (h = I.createElement(f.route.Component, null))
            : f.route.element
            ? (h = f.route.element)
            : (h = c),
          I.createElement(ev, {
            match: f,
            routeContext: { outlet: c, matches: m, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || p === 0)
      ? I.createElement(Zm, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: y,
          children: d(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : d();
  }, null);
}
var hd = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(hd || {}),
  Gi = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Gi || {});
function nv(e) {
  let t = I.useContext(nu);
  return t || Se(!1), t;
}
function rv(e) {
  let t = I.useContext(Qm);
  return t || Se(!1), t;
}
function iv(e) {
  let t = I.useContext(vt);
  return t || Se(!1), t;
}
function md(e) {
  let t = iv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Se(!1), n.route.id;
}
function ov() {
  var e;
  let t = I.useContext(fd),
    n = rv(Gi.UseRouteError),
    r = md(Gi.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function sv() {
  let { router: e } = nv(hd.UseNavigateStable),
    t = md(Gi.UseNavigateStable),
    n = I.useRef(!1);
  return (
    dd(() => {
      n.current = !0;
    }),
    I.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, Ki({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const Sa = {};
function lv(e, t, n) {
  Sa[e] || (Sa[e] = !0);
}
function uv(e) {
  return Wm(e.context);
}
function av(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Ht.Pop,
    navigator: o,
    static: s = !1,
    future: l,
  } = e;
  Fr() && Se(!1);
  let u = t.replace(/^\/*/, "/"),
    a = I.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: s,
        future: Ki({ v7_relativeSplatPath: !1 }, l),
      }),
      [u, l, o, s]
    );
  typeof r == "string" && (r = Dr(r));
  let {
      pathname: c = "/",
      search: f = "",
      hash: p = "",
      state: y = null,
      key: v = "default",
    } = r,
    x = I.useMemo(() => {
      let _ = tu(c, u);
      return _ == null
        ? null
        : {
            location: { pathname: _, search: f, hash: p, state: y, key: v },
            navigationType: i,
          };
    }, [u, c, f, p, y, v, i]);
  return x == null
    ? null
    : I.createElement(
        on.Provider,
        { value: a },
        I.createElement(ru.Provider, { children: n, value: x })
      );
}
new Promise(() => {});
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ys() {
  return (
    (Ys = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ys.apply(this, arguments)
  );
}
function cv(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function fv(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function dv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !fv(e);
}
const pv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  hv = "6";
try {
  window.__reactRouterVersion = hv;
} catch {}
const mv = "startTransition",
  ka = op[mv];
function vv(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = I.useRef();
  o.current == null && (o.current = ym({ window: i, v5Compat: !0 }));
  let s = o.current,
    [l, u] = I.useState({ action: s.action, location: s.location }),
    { v7_startTransition: a } = r || {},
    c = I.useCallback(
      (f) => {
        a && ka ? ka(() => u(f)) : u(f);
      },
      [u, a]
    );
  return (
    I.useLayoutEffect(() => s.listen(c), [s, c]),
    I.createElement(av, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  );
}
const yv =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  gv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  se = I.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: l,
        target: u,
        to: a,
        preventScrollReset: c,
        unstable_viewTransition: f,
      } = t,
      p = cv(t, pv),
      { basename: y } = I.useContext(on),
      v,
      x = !1;
    if (typeof a == "string" && gv.test(a) && ((v = a), yv))
      try {
        let h = new URL(window.location.href),
          w = a.startsWith("//") ? new URL(h.protocol + a) : new URL(a),
          N = tu(w.pathname, y);
        w.origin === h.origin && N != null
          ? (a = N + w.search + w.hash)
          : (x = !0);
      } catch {}
    let _ = Vm(a, { relative: i }),
      m = xv(a, {
        replace: s,
        state: l,
        target: u,
        preventScrollReset: c,
        relative: i,
        unstable_viewTransition: f,
      });
    function d(h) {
      r && r(h), h.defaultPrevented || m(h);
    }
    return I.createElement(
      "a",
      Ys({}, p, { href: v || _, onClick: x || o ? r : d, ref: n, target: u })
    );
  });
var Ca;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(Ca || (Ca = {}));
var Na;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Na || (Na = {}));
function xv(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: s,
      unstable_viewTransition: l,
    } = t === void 0 ? {} : t,
    u = $m(),
    a = Lr(),
    c = pd(e, { relative: s });
  return I.useCallback(
    (f) => {
      if (dv(f, n)) {
        f.preventDefault();
        let p = r !== void 0 ? r : Wi(a) === Wi(c);
        u(e, {
          replace: p,
          state: i,
          preventScrollReset: o,
          relative: s,
          unstable_viewTransition: l,
        });
      }
    },
    [a, u, c, r, i, n, e, o, s, l]
  );
}
function Xs(e, t) {
  return (
    (Xs = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, i) {
          return (r.__proto__ = i), r;
        }),
    Xs(e, t)
  );
}
function jr(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Xs(e, t);
}
var Mr = (function () {
  function e() {
    this.listeners = [];
  }
  var t = e.prototype;
  return (
    (t.subscribe = function (r) {
      var i = this,
        o = r || function () {};
      return (
        this.listeners.push(o),
        this.onSubscribe(),
        function () {
          (i.listeners = i.listeners.filter(function (s) {
            return s !== o;
          })),
            i.onUnsubscribe();
        }
      );
    }),
    (t.hasListeners = function () {
      return this.listeners.length > 0;
    }),
    (t.onSubscribe = function () {}),
    (t.onUnsubscribe = function () {}),
    e
  );
})();
function V() {
  return (
    (V = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    V.apply(this, arguments)
  );
}
var Yi = typeof window > "u";
function xe() {}
function Ev(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Js(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Xi(e) {
  return Array.isArray(e) ? e : [e];
}
function vd(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function vi(e, t, n) {
  return So(e)
    ? typeof t == "function"
      ? V({}, n, { queryKey: e, queryFn: t })
      : V({}, t, { queryKey: e })
    : e;
}
function Et(e, t, n) {
  return So(e) ? [V({}, t, { queryKey: e }), n] : [e || {}, t];
}
function wv(e, t) {
  if ((e === !0 && t === !0) || (e == null && t == null)) return "all";
  if (e === !1 && t === !1) return "none";
  var n = e ?? !t;
  return n ? "active" : "inactive";
}
function Ta(e, t) {
  var n = e.active,
    r = e.exact,
    i = e.fetching,
    o = e.inactive,
    s = e.predicate,
    l = e.queryKey,
    u = e.stale;
  if (So(l)) {
    if (r) {
      if (t.queryHash !== iu(l, t.options)) return !1;
    } else if (!Ji(t.queryKey, l)) return !1;
  }
  var a = wv(n, o);
  if (a === "none") return !1;
  if (a !== "all") {
    var c = t.isActive();
    if ((a === "active" && !c) || (a === "inactive" && c)) return !1;
  }
  return !(
    (typeof u == "boolean" && t.isStale() !== u) ||
    (typeof i == "boolean" && t.isFetching() !== i) ||
    (s && !s(t))
  );
}
function Oa(e, t) {
  var n = e.exact,
    r = e.fetching,
    i = e.predicate,
    o = e.mutationKey;
  if (So(o)) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Wt(t.options.mutationKey) !== Wt(o)) return !1;
    } else if (!Ji(t.options.mutationKey, o)) return !1;
  }
  return !(
    (typeof r == "boolean" && (t.state.status === "loading") !== r) ||
    (i && !i(t))
  );
}
function iu(e, t) {
  var n = (t == null ? void 0 : t.queryKeyHashFn) || Wt;
  return n(e);
}
function Wt(e) {
  var t = Xi(e);
  return Sv(t);
}
function Sv(e) {
  return JSON.stringify(e, function (t, n) {
    return Zs(n)
      ? Object.keys(n)
          .sort()
          .reduce(function (r, i) {
            return (r[i] = n[i]), r;
          }, {})
      : n;
  });
}
function Ji(e, t) {
  return yd(Xi(e), Xi(t));
}
function yd(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? !Object.keys(t).some(function (n) {
        return !yd(e[n], t[n]);
      })
    : !1;
}
function Zi(e, t) {
  if (e === t) return e;
  var n = Array.isArray(e) && Array.isArray(t);
  if (n || (Zs(e) && Zs(t))) {
    for (
      var r = n ? e.length : Object.keys(e).length,
        i = n ? t : Object.keys(t),
        o = i.length,
        s = n ? [] : {},
        l = 0,
        u = 0;
      u < o;
      u++
    ) {
      var a = n ? u : i[u];
      (s[a] = Zi(e[a], t[a])), s[a] === e[a] && l++;
    }
    return r === o && l === r ? e : s;
  }
  return t;
}
function kv(e, t) {
  if ((e && !t) || (t && !e)) return !1;
  for (var n in e) if (e[n] !== t[n]) return !1;
  return !0;
}
function Zs(e) {
  if (!_a(e)) return !1;
  var t = e.constructor;
  if (typeof t > "u") return !0;
  var n = t.prototype;
  return !(!_a(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function _a(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function So(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Cv(e) {
  return new Promise(function (t) {
    setTimeout(t, e);
  });
}
function Pa(e) {
  Promise.resolve()
    .then(e)
    .catch(function (t) {
      return setTimeout(function () {
        throw t;
      });
    });
}
function gd() {
  if (typeof AbortController == "function") return new AbortController();
}
var Nv = (function (e) {
    jr(t, e);
    function t() {
      var r;
      return (
        (r = e.call(this) || this),
        (r.setup = function (i) {
          var o;
          if (!Yi && (o = window) != null && o.addEventListener) {
            var s = function () {
              return i();
            };
            return (
              window.addEventListener("visibilitychange", s, !1),
              window.addEventListener("focus", s, !1),
              function () {
                window.removeEventListener("visibilitychange", s),
                  window.removeEventListener("focus", s);
              }
            );
          }
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.onSubscribe = function () {
        this.cleanup || this.setEventListener(this.setup);
      }),
      (n.onUnsubscribe = function () {
        if (!this.hasListeners()) {
          var i;
          (i = this.cleanup) == null || i.call(this), (this.cleanup = void 0);
        }
      }),
      (n.setEventListener = function (i) {
        var o,
          s = this;
        (this.setup = i),
          (o = this.cleanup) == null || o.call(this),
          (this.cleanup = i(function (l) {
            typeof l == "boolean" ? s.setFocused(l) : s.onFocus();
          }));
      }),
      (n.setFocused = function (i) {
        (this.focused = i), i && this.onFocus();
      }),
      (n.onFocus = function () {
        this.listeners.forEach(function (i) {
          i();
        });
      }),
      (n.isFocused = function () {
        return typeof this.focused == "boolean"
          ? this.focused
          : typeof document > "u"
          ? !0
          : [void 0, "visible", "prerender"].includes(document.visibilityState);
      }),
      t
    );
  })(Mr),
  lr = new Nv(),
  Tv = (function (e) {
    jr(t, e);
    function t() {
      var r;
      return (
        (r = e.call(this) || this),
        (r.setup = function (i) {
          var o;
          if (!Yi && (o = window) != null && o.addEventListener) {
            var s = function () {
              return i();
            };
            return (
              window.addEventListener("online", s, !1),
              window.addEventListener("offline", s, !1),
              function () {
                window.removeEventListener("online", s),
                  window.removeEventListener("offline", s);
              }
            );
          }
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.onSubscribe = function () {
        this.cleanup || this.setEventListener(this.setup);
      }),
      (n.onUnsubscribe = function () {
        if (!this.hasListeners()) {
          var i;
          (i = this.cleanup) == null || i.call(this), (this.cleanup = void 0);
        }
      }),
      (n.setEventListener = function (i) {
        var o,
          s = this;
        (this.setup = i),
          (o = this.cleanup) == null || o.call(this),
          (this.cleanup = i(function (l) {
            typeof l == "boolean" ? s.setOnline(l) : s.onOnline();
          }));
      }),
      (n.setOnline = function (i) {
        (this.online = i), i && this.onOnline();
      }),
      (n.onOnline = function () {
        this.listeners.forEach(function (i) {
          i();
        });
      }),
      (n.isOnline = function () {
        return typeof this.online == "boolean"
          ? this.online
          : typeof navigator > "u" || typeof navigator.onLine > "u"
          ? !0
          : navigator.onLine;
      }),
      t
    );
  })(Mr),
  yi = new Tv();
function Ov(e) {
  return Math.min(1e3 * Math.pow(2, e), 3e4);
}
function eo(e) {
  return typeof (e == null ? void 0 : e.cancel) == "function";
}
var xd = function (t) {
  (this.revert = t == null ? void 0 : t.revert),
    (this.silent = t == null ? void 0 : t.silent);
};
function gi(e) {
  return e instanceof xd;
}
var Ed = function (t) {
    var n = this,
      r = !1,
      i,
      o,
      s,
      l;
    (this.abort = t.abort),
      (this.cancel = function (p) {
        return i == null ? void 0 : i(p);
      }),
      (this.cancelRetry = function () {
        r = !0;
      }),
      (this.continueRetry = function () {
        r = !1;
      }),
      (this.continue = function () {
        return o == null ? void 0 : o();
      }),
      (this.failureCount = 0),
      (this.isPaused = !1),
      (this.isResolved = !1),
      (this.isTransportCancelable = !1),
      (this.promise = new Promise(function (p, y) {
        (s = p), (l = y);
      }));
    var u = function (y) {
        n.isResolved ||
          ((n.isResolved = !0),
          t.onSuccess == null || t.onSuccess(y),
          o == null || o(),
          s(y));
      },
      a = function (y) {
        n.isResolved ||
          ((n.isResolved = !0),
          t.onError == null || t.onError(y),
          o == null || o(),
          l(y));
      },
      c = function () {
        return new Promise(function (y) {
          (o = y), (n.isPaused = !0), t.onPause == null || t.onPause();
        }).then(function () {
          (o = void 0),
            (n.isPaused = !1),
            t.onContinue == null || t.onContinue();
        });
      },
      f = function p() {
        if (!n.isResolved) {
          var y;
          try {
            y = t.fn();
          } catch (v) {
            y = Promise.reject(v);
          }
          (i = function (x) {
            if (
              !n.isResolved &&
              (a(new xd(x)), n.abort == null || n.abort(), eo(y))
            )
              try {
                y.cancel();
              } catch {}
          }),
            (n.isTransportCancelable = eo(y)),
            Promise.resolve(y)
              .then(u)
              .catch(function (v) {
                var x, _;
                if (!n.isResolved) {
                  var m = (x = t.retry) != null ? x : 3,
                    d = (_ = t.retryDelay) != null ? _ : Ov,
                    h = typeof d == "function" ? d(n.failureCount, v) : d,
                    w =
                      m === !0 ||
                      (typeof m == "number" && n.failureCount < m) ||
                      (typeof m == "function" && m(n.failureCount, v));
                  if (r || !w) {
                    a(v);
                    return;
                  }
                  n.failureCount++,
                    t.onFail == null || t.onFail(n.failureCount, v),
                    Cv(h)
                      .then(function () {
                        if (!lr.isFocused() || !yi.isOnline()) return c();
                      })
                      .then(function () {
                        r ? a(v) : p();
                      });
                }
              });
        }
      };
    f();
  },
  _v = (function () {
    function e() {
      (this.queue = []),
        (this.transactions = 0),
        (this.notifyFn = function (n) {
          n();
        }),
        (this.batchNotifyFn = function (n) {
          n();
        });
    }
    var t = e.prototype;
    return (
      (t.batch = function (r) {
        var i;
        this.transactions++;
        try {
          i = r();
        } finally {
          this.transactions--, this.transactions || this.flush();
        }
        return i;
      }),
      (t.schedule = function (r) {
        var i = this;
        this.transactions
          ? this.queue.push(r)
          : Pa(function () {
              i.notifyFn(r);
            });
      }),
      (t.batchCalls = function (r) {
        var i = this;
        return function () {
          for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
            s[l] = arguments[l];
          i.schedule(function () {
            r.apply(void 0, s);
          });
        };
      }),
      (t.flush = function () {
        var r = this,
          i = this.queue;
        (this.queue = []),
          i.length &&
            Pa(function () {
              r.batchNotifyFn(function () {
                i.forEach(function (o) {
                  r.notifyFn(o);
                });
              });
            });
      }),
      (t.setNotifyFunction = function (r) {
        this.notifyFn = r;
      }),
      (t.setBatchNotifyFunction = function (r) {
        this.batchNotifyFn = r;
      }),
      e
    );
  })(),
  re = new _v(),
  wd = console;
function to() {
  return wd;
}
function Pv(e) {
  wd = e;
}
var Rv = (function () {
    function e(n) {
      (this.abortSignalConsumed = !1),
        (this.hadObservers = !1),
        (this.defaultOptions = n.defaultOptions),
        this.setOptions(n.options),
        (this.observers = []),
        (this.cache = n.cache),
        (this.queryKey = n.queryKey),
        (this.queryHash = n.queryHash),
        (this.initialState = n.state || this.getDefaultState(this.options)),
        (this.state = this.initialState),
        (this.meta = n.meta),
        this.scheduleGc();
    }
    var t = e.prototype;
    return (
      (t.setOptions = function (r) {
        var i;
        (this.options = V({}, this.defaultOptions, r)),
          (this.meta = r == null ? void 0 : r.meta),
          (this.cacheTime = Math.max(
            this.cacheTime || 0,
            (i = this.options.cacheTime) != null ? i : 5 * 60 * 1e3
          ));
      }),
      (t.setDefaultOptions = function (r) {
        this.defaultOptions = r;
      }),
      (t.scheduleGc = function () {
        var r = this;
        this.clearGcTimeout(),
          Js(this.cacheTime) &&
            (this.gcTimeout = setTimeout(function () {
              r.optionalRemove();
            }, this.cacheTime));
      }),
      (t.clearGcTimeout = function () {
        this.gcTimeout &&
          (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
      }),
      (t.optionalRemove = function () {
        this.observers.length ||
          (this.state.isFetching
            ? this.hadObservers && this.scheduleGc()
            : this.cache.remove(this));
      }),
      (t.setData = function (r, i) {
        var o,
          s,
          l = this.state.data,
          u = Ev(r, l);
        return (
          (o = (s = this.options).isDataEqual) != null && o.call(s, l, u)
            ? (u = l)
            : this.options.structuralSharing !== !1 && (u = Zi(l, u)),
          this.dispatch({
            data: u,
            type: "success",
            dataUpdatedAt: i == null ? void 0 : i.updatedAt,
          }),
          u
        );
      }),
      (t.setState = function (r, i) {
        this.dispatch({ type: "setState", state: r, setStateOptions: i });
      }),
      (t.cancel = function (r) {
        var i,
          o = this.promise;
        return (
          (i = this.retryer) == null || i.cancel(r),
          o ? o.then(xe).catch(xe) : Promise.resolve()
        );
      }),
      (t.destroy = function () {
        this.clearGcTimeout(), this.cancel({ silent: !0 });
      }),
      (t.reset = function () {
        this.destroy(), this.setState(this.initialState);
      }),
      (t.isActive = function () {
        return this.observers.some(function (r) {
          return r.options.enabled !== !1;
        });
      }),
      (t.isFetching = function () {
        return this.state.isFetching;
      }),
      (t.isStale = function () {
        return (
          this.state.isInvalidated ||
          !this.state.dataUpdatedAt ||
          this.observers.some(function (r) {
            return r.getCurrentResult().isStale;
          })
        );
      }),
      (t.isStaleByTime = function (r) {
        return (
          r === void 0 && (r = 0),
          this.state.isInvalidated ||
            !this.state.dataUpdatedAt ||
            !vd(this.state.dataUpdatedAt, r)
        );
      }),
      (t.onFocus = function () {
        var r,
          i = this.observers.find(function (o) {
            return o.shouldFetchOnWindowFocus();
          });
        i && i.refetch(), (r = this.retryer) == null || r.continue();
      }),
      (t.onOnline = function () {
        var r,
          i = this.observers.find(function (o) {
            return o.shouldFetchOnReconnect();
          });
        i && i.refetch(), (r = this.retryer) == null || r.continue();
      }),
      (t.addObserver = function (r) {
        this.observers.indexOf(r) === -1 &&
          (this.observers.push(r),
          (this.hadObservers = !0),
          this.clearGcTimeout(),
          this.cache.notify({
            type: "observerAdded",
            query: this,
            observer: r,
          }));
      }),
      (t.removeObserver = function (r) {
        this.observers.indexOf(r) !== -1 &&
          ((this.observers = this.observers.filter(function (i) {
            return i !== r;
          })),
          this.observers.length ||
            (this.retryer &&
              (this.retryer.isTransportCancelable || this.abortSignalConsumed
                ? this.retryer.cancel({ revert: !0 })
                : this.retryer.cancelRetry()),
            this.cacheTime ? this.scheduleGc() : this.cache.remove(this)),
          this.cache.notify({
            type: "observerRemoved",
            query: this,
            observer: r,
          }));
      }),
      (t.getObserversCount = function () {
        return this.observers.length;
      }),
      (t.invalidate = function () {
        this.state.isInvalidated || this.dispatch({ type: "invalidate" });
      }),
      (t.fetch = function (r, i) {
        var o = this,
          s,
          l,
          u;
        if (this.state.isFetching) {
          if (this.state.dataUpdatedAt && i != null && i.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (this.promise) {
            var a;
            return (
              (a = this.retryer) == null || a.continueRetry(), this.promise
            );
          }
        }
        if ((r && this.setOptions(r), !this.options.queryFn)) {
          var c = this.observers.find(function (d) {
            return d.options.queryFn;
          });
          c && this.setOptions(c.options);
        }
        var f = Xi(this.queryKey),
          p = gd(),
          y = { queryKey: f, pageParam: void 0, meta: this.meta };
        Object.defineProperty(y, "signal", {
          enumerable: !0,
          get: function () {
            if (p) return (o.abortSignalConsumed = !0), p.signal;
          },
        });
        var v = function () {
            return o.options.queryFn
              ? ((o.abortSignalConsumed = !1), o.options.queryFn(y))
              : Promise.reject("Missing queryFn");
          },
          x = {
            fetchOptions: i,
            options: this.options,
            queryKey: f,
            state: this.state,
            fetchFn: v,
            meta: this.meta,
          };
        if ((s = this.options.behavior) != null && s.onFetch) {
          var _;
          (_ = this.options.behavior) == null || _.onFetch(x);
        }
        if (
          ((this.revertState = this.state),
          !this.state.isFetching ||
            this.state.fetchMeta !==
              ((l = x.fetchOptions) == null ? void 0 : l.meta))
        ) {
          var m;
          this.dispatch({
            type: "fetch",
            meta: (m = x.fetchOptions) == null ? void 0 : m.meta,
          });
        }
        return (
          (this.retryer = new Ed({
            fn: x.fetchFn,
            abort: p == null || (u = p.abort) == null ? void 0 : u.bind(p),
            onSuccess: function (h) {
              o.setData(h),
                o.cache.config.onSuccess == null ||
                  o.cache.config.onSuccess(h, o),
                o.cacheTime === 0 && o.optionalRemove();
            },
            onError: function (h) {
              (gi(h) && h.silent) || o.dispatch({ type: "error", error: h }),
                gi(h) ||
                  (o.cache.config.onError == null ||
                    o.cache.config.onError(h, o),
                  to().error(h)),
                o.cacheTime === 0 && o.optionalRemove();
            },
            onFail: function () {
              o.dispatch({ type: "failed" });
            },
            onPause: function () {
              o.dispatch({ type: "pause" });
            },
            onContinue: function () {
              o.dispatch({ type: "continue" });
            },
            retry: x.options.retry,
            retryDelay: x.options.retryDelay,
          })),
          (this.promise = this.retryer.promise),
          this.promise
        );
      }),
      (t.dispatch = function (r) {
        var i = this;
        (this.state = this.reducer(this.state, r)),
          re.batch(function () {
            i.observers.forEach(function (o) {
              o.onQueryUpdate(r);
            }),
              i.cache.notify({ query: i, type: "queryUpdated", action: r });
          });
      }),
      (t.getDefaultState = function (r) {
        var i =
            typeof r.initialData == "function"
              ? r.initialData()
              : r.initialData,
          o = typeof r.initialData < "u",
          s = o
            ? typeof r.initialDataUpdatedAt == "function"
              ? r.initialDataUpdatedAt()
              : r.initialDataUpdatedAt
            : 0,
          l = typeof i < "u";
        return {
          data: i,
          dataUpdateCount: 0,
          dataUpdatedAt: l ? s ?? Date.now() : 0,
          error: null,
          errorUpdateCount: 0,
          errorUpdatedAt: 0,
          fetchFailureCount: 0,
          fetchMeta: null,
          isFetching: !1,
          isInvalidated: !1,
          isPaused: !1,
          status: l ? "success" : "idle",
        };
      }),
      (t.reducer = function (r, i) {
        var o, s;
        switch (i.type) {
          case "failed":
            return V({}, r, { fetchFailureCount: r.fetchFailureCount + 1 });
          case "pause":
            return V({}, r, { isPaused: !0 });
          case "continue":
            return V({}, r, { isPaused: !1 });
          case "fetch":
            return V(
              {},
              r,
              {
                fetchFailureCount: 0,
                fetchMeta: (o = i.meta) != null ? o : null,
                isFetching: !0,
                isPaused: !1,
              },
              !r.dataUpdatedAt && { error: null, status: "loading" }
            );
          case "success":
            return V({}, r, {
              data: i.data,
              dataUpdateCount: r.dataUpdateCount + 1,
              dataUpdatedAt: (s = i.dataUpdatedAt) != null ? s : Date.now(),
              error: null,
              fetchFailureCount: 0,
              isFetching: !1,
              isInvalidated: !1,
              isPaused: !1,
              status: "success",
            });
          case "error":
            var l = i.error;
            return gi(l) && l.revert && this.revertState
              ? V({}, this.revertState)
              : V({}, r, {
                  error: l,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  isFetching: !1,
                  isPaused: !1,
                  status: "error",
                });
          case "invalidate":
            return V({}, r, { isInvalidated: !0 });
          case "setState":
            return V({}, r, i.state);
          default:
            return r;
        }
      }),
      e
    );
  })(),
  Iv = (function (e) {
    jr(t, e);
    function t(r) {
      var i;
      return (
        (i = e.call(this) || this),
        (i.config = r || {}),
        (i.queries = []),
        (i.queriesMap = {}),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.build = function (i, o, s) {
        var l,
          u = o.queryKey,
          a = (l = o.queryHash) != null ? l : iu(u, o),
          c = this.get(a);
        return (
          c ||
            ((c = new Rv({
              cache: this,
              queryKey: u,
              queryHash: a,
              options: i.defaultQueryOptions(o),
              state: s,
              defaultOptions: i.getQueryDefaults(u),
              meta: o.meta,
            })),
            this.add(c)),
          c
        );
      }),
      (n.add = function (i) {
        this.queriesMap[i.queryHash] ||
          ((this.queriesMap[i.queryHash] = i),
          this.queries.push(i),
          this.notify({ type: "queryAdded", query: i }));
      }),
      (n.remove = function (i) {
        var o = this.queriesMap[i.queryHash];
        o &&
          (i.destroy(),
          (this.queries = this.queries.filter(function (s) {
            return s !== i;
          })),
          o === i && delete this.queriesMap[i.queryHash],
          this.notify({ type: "queryRemoved", query: i }));
      }),
      (n.clear = function () {
        var i = this;
        re.batch(function () {
          i.queries.forEach(function (o) {
            i.remove(o);
          });
        });
      }),
      (n.get = function (i) {
        return this.queriesMap[i];
      }),
      (n.getAll = function () {
        return this.queries;
      }),
      (n.find = function (i, o) {
        var s = Et(i, o),
          l = s[0];
        return (
          typeof l.exact > "u" && (l.exact = !0),
          this.queries.find(function (u) {
            return Ta(l, u);
          })
        );
      }),
      (n.findAll = function (i, o) {
        var s = Et(i, o),
          l = s[0];
        return Object.keys(l).length > 0
          ? this.queries.filter(function (u) {
              return Ta(l, u);
            })
          : this.queries;
      }),
      (n.notify = function (i) {
        var o = this;
        re.batch(function () {
          o.listeners.forEach(function (s) {
            s(i);
          });
        });
      }),
      (n.onFocus = function () {
        var i = this;
        re.batch(function () {
          i.queries.forEach(function (o) {
            o.onFocus();
          });
        });
      }),
      (n.onOnline = function () {
        var i = this;
        re.batch(function () {
          i.queries.forEach(function (o) {
            o.onOnline();
          });
        });
      }),
      t
    );
  })(Mr),
  Av = (function () {
    function e(n) {
      (this.options = V({}, n.defaultOptions, n.options)),
        (this.mutationId = n.mutationId),
        (this.mutationCache = n.mutationCache),
        (this.observers = []),
        (this.state = n.state || Dv()),
        (this.meta = n.meta);
    }
    var t = e.prototype;
    return (
      (t.setState = function (r) {
        this.dispatch({ type: "setState", state: r });
      }),
      (t.addObserver = function (r) {
        this.observers.indexOf(r) === -1 && this.observers.push(r);
      }),
      (t.removeObserver = function (r) {
        this.observers = this.observers.filter(function (i) {
          return i !== r;
        });
      }),
      (t.cancel = function () {
        return this.retryer
          ? (this.retryer.cancel(), this.retryer.promise.then(xe).catch(xe))
          : Promise.resolve();
      }),
      (t.continue = function () {
        return this.retryer
          ? (this.retryer.continue(), this.retryer.promise)
          : this.execute();
      }),
      (t.execute = function () {
        var r = this,
          i,
          o = this.state.status === "loading",
          s = Promise.resolve();
        return (
          o ||
            (this.dispatch({
              type: "loading",
              variables: this.options.variables,
            }),
            (s = s
              .then(function () {
                r.mutationCache.config.onMutate == null ||
                  r.mutationCache.config.onMutate(r.state.variables, r);
              })
              .then(function () {
                return r.options.onMutate == null
                  ? void 0
                  : r.options.onMutate(r.state.variables);
              })
              .then(function (l) {
                l !== r.state.context &&
                  r.dispatch({
                    type: "loading",
                    context: l,
                    variables: r.state.variables,
                  });
              }))),
          s
            .then(function () {
              return r.executeMutation();
            })
            .then(function (l) {
              (i = l),
                r.mutationCache.config.onSuccess == null ||
                  r.mutationCache.config.onSuccess(
                    i,
                    r.state.variables,
                    r.state.context,
                    r
                  );
            })
            .then(function () {
              return r.options.onSuccess == null
                ? void 0
                : r.options.onSuccess(i, r.state.variables, r.state.context);
            })
            .then(function () {
              return r.options.onSettled == null
                ? void 0
                : r.options.onSettled(
                    i,
                    null,
                    r.state.variables,
                    r.state.context
                  );
            })
            .then(function () {
              return r.dispatch({ type: "success", data: i }), i;
            })
            .catch(function (l) {
              return (
                r.mutationCache.config.onError == null ||
                  r.mutationCache.config.onError(
                    l,
                    r.state.variables,
                    r.state.context,
                    r
                  ),
                to().error(l),
                Promise.resolve()
                  .then(function () {
                    return r.options.onError == null
                      ? void 0
                      : r.options.onError(
                          l,
                          r.state.variables,
                          r.state.context
                        );
                  })
                  .then(function () {
                    return r.options.onSettled == null
                      ? void 0
                      : r.options.onSettled(
                          void 0,
                          l,
                          r.state.variables,
                          r.state.context
                        );
                  })
                  .then(function () {
                    throw (r.dispatch({ type: "error", error: l }), l);
                  })
              );
            })
        );
      }),
      (t.executeMutation = function () {
        var r = this,
          i;
        return (
          (this.retryer = new Ed({
            fn: function () {
              return r.options.mutationFn
                ? r.options.mutationFn(r.state.variables)
                : Promise.reject("No mutationFn found");
            },
            onFail: function () {
              r.dispatch({ type: "failed" });
            },
            onPause: function () {
              r.dispatch({ type: "pause" });
            },
            onContinue: function () {
              r.dispatch({ type: "continue" });
            },
            retry: (i = this.options.retry) != null ? i : 0,
            retryDelay: this.options.retryDelay,
          })),
          this.retryer.promise
        );
      }),
      (t.dispatch = function (r) {
        var i = this;
        (this.state = Fv(this.state, r)),
          re.batch(function () {
            i.observers.forEach(function (o) {
              o.onMutationUpdate(r);
            }),
              i.mutationCache.notify(i);
          });
      }),
      e
    );
  })();
function Dv() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    isPaused: !1,
    status: "idle",
    variables: void 0,
  };
}
function Fv(e, t) {
  switch (t.type) {
    case "failed":
      return V({}, e, { failureCount: e.failureCount + 1 });
    case "pause":
      return V({}, e, { isPaused: !0 });
    case "continue":
      return V({}, e, { isPaused: !1 });
    case "loading":
      return V({}, e, {
        context: t.context,
        data: void 0,
        error: null,
        isPaused: !1,
        status: "loading",
        variables: t.variables,
      });
    case "success":
      return V({}, e, {
        data: t.data,
        error: null,
        status: "success",
        isPaused: !1,
      });
    case "error":
      return V({}, e, {
        data: void 0,
        error: t.error,
        failureCount: e.failureCount + 1,
        isPaused: !1,
        status: "error",
      });
    case "setState":
      return V({}, e, t.state);
    default:
      return e;
  }
}
var Lv = (function (e) {
  jr(t, e);
  function t(r) {
    var i;
    return (
      (i = e.call(this) || this),
      (i.config = r || {}),
      (i.mutations = []),
      (i.mutationId = 0),
      i
    );
  }
  var n = t.prototype;
  return (
    (n.build = function (i, o, s) {
      var l = new Av({
        mutationCache: this,
        mutationId: ++this.mutationId,
        options: i.defaultMutationOptions(o),
        state: s,
        defaultOptions: o.mutationKey
          ? i.getMutationDefaults(o.mutationKey)
          : void 0,
        meta: o.meta,
      });
      return this.add(l), l;
    }),
    (n.add = function (i) {
      this.mutations.push(i), this.notify(i);
    }),
    (n.remove = function (i) {
      (this.mutations = this.mutations.filter(function (o) {
        return o !== i;
      })),
        i.cancel(),
        this.notify(i);
    }),
    (n.clear = function () {
      var i = this;
      re.batch(function () {
        i.mutations.forEach(function (o) {
          i.remove(o);
        });
      });
    }),
    (n.getAll = function () {
      return this.mutations;
    }),
    (n.find = function (i) {
      return (
        typeof i.exact > "u" && (i.exact = !0),
        this.mutations.find(function (o) {
          return Oa(i, o);
        })
      );
    }),
    (n.findAll = function (i) {
      return this.mutations.filter(function (o) {
        return Oa(i, o);
      });
    }),
    (n.notify = function (i) {
      var o = this;
      re.batch(function () {
        o.listeners.forEach(function (s) {
          s(i);
        });
      });
    }),
    (n.onFocus = function () {
      this.resumePausedMutations();
    }),
    (n.onOnline = function () {
      this.resumePausedMutations();
    }),
    (n.resumePausedMutations = function () {
      var i = this.mutations.filter(function (o) {
        return o.state.isPaused;
      });
      return re.batch(function () {
        return i.reduce(function (o, s) {
          return o.then(function () {
            return s.continue().catch(xe);
          });
        }, Promise.resolve());
      });
    }),
    t
  );
})(Mr);
function jv() {
  return {
    onFetch: function (t) {
      t.fetchFn = function () {
        var n,
          r,
          i,
          o,
          s,
          l,
          u =
            (n = t.fetchOptions) == null || (r = n.meta) == null
              ? void 0
              : r.refetchPage,
          a =
            (i = t.fetchOptions) == null || (o = i.meta) == null
              ? void 0
              : o.fetchMore,
          c = a == null ? void 0 : a.pageParam,
          f = (a == null ? void 0 : a.direction) === "forward",
          p = (a == null ? void 0 : a.direction) === "backward",
          y = ((s = t.state.data) == null ? void 0 : s.pages) || [],
          v = ((l = t.state.data) == null ? void 0 : l.pageParams) || [],
          x = gd(),
          _ = x == null ? void 0 : x.signal,
          m = v,
          d = !1,
          h =
            t.options.queryFn ||
            function () {
              return Promise.reject("Missing queryFn");
            },
          w = function (E, T, L, W) {
            return (
              (m = W ? [T].concat(m) : [].concat(m, [T])),
              W ? [L].concat(E) : [].concat(E, [L])
            );
          },
          N = function (E, T, L, W) {
            if (d) return Promise.reject("Cancelled");
            if (typeof L > "u" && !T && E.length) return Promise.resolve(E);
            var C = {
                queryKey: t.queryKey,
                signal: _,
                pageParam: L,
                meta: t.meta,
              },
              P = h(C),
              U = Promise.resolve(P).then(function (X) {
                return w(E, L, X, W);
              });
            if (eo(P)) {
              var Q = U;
              Q.cancel = P.cancel;
            }
            return U;
          },
          O;
        if (!y.length) O = N([]);
        else if (f) {
          var R = typeof c < "u",
            D = R ? c : Ra(t.options, y);
          O = N(y, R, D);
        } else if (p) {
          var q = typeof c < "u",
            j = q ? c : Mv(t.options, y);
          O = N(y, q, j, !0);
        } else
          (function () {
            m = [];
            var pe = typeof t.options.getNextPageParam > "u",
              E = u && y[0] ? u(y[0], 0, y) : !0;
            O = E ? N([], pe, v[0]) : Promise.resolve(w([], v[0], y[0]));
            for (
              var T = function (C) {
                  O = O.then(function (P) {
                    var U = u && y[C] ? u(y[C], C, y) : !0;
                    if (U) {
                      var Q = pe ? v[C] : Ra(t.options, P);
                      return N(P, pe, Q);
                    }
                    return Promise.resolve(w(P, v[C], y[C]));
                  });
                },
                L = 1;
              L < y.length;
              L++
            )
              T(L);
          })();
        var H = O.then(function (pe) {
            return { pages: pe, pageParams: m };
          }),
          Ce = H;
        return (
          (Ce.cancel = function () {
            (d = !0), x == null || x.abort(), eo(O) && O.cancel();
          }),
          H
        );
      };
    },
  };
}
function Ra(e, t) {
  return e.getNextPageParam == null
    ? void 0
    : e.getNextPageParam(t[t.length - 1], t);
}
function Mv(e, t) {
  return e.getPreviousPageParam == null
    ? void 0
    : e.getPreviousPageParam(t[0], t);
}
var Uv = (function () {
    function e(n) {
      n === void 0 && (n = {}),
        (this.queryCache = n.queryCache || new Iv()),
        (this.mutationCache = n.mutationCache || new Lv()),
        (this.defaultOptions = n.defaultOptions || {}),
        (this.queryDefaults = []),
        (this.mutationDefaults = []);
    }
    var t = e.prototype;
    return (
      (t.mount = function () {
        var r = this;
        (this.unsubscribeFocus = lr.subscribe(function () {
          lr.isFocused() &&
            yi.isOnline() &&
            (r.mutationCache.onFocus(), r.queryCache.onFocus());
        })),
          (this.unsubscribeOnline = yi.subscribe(function () {
            lr.isFocused() &&
              yi.isOnline() &&
              (r.mutationCache.onOnline(), r.queryCache.onOnline());
          }));
      }),
      (t.unmount = function () {
        var r, i;
        (r = this.unsubscribeFocus) == null || r.call(this),
          (i = this.unsubscribeOnline) == null || i.call(this);
      }),
      (t.isFetching = function (r, i) {
        var o = Et(r, i),
          s = o[0];
        return (s.fetching = !0), this.queryCache.findAll(s).length;
      }),
      (t.isMutating = function (r) {
        return this.mutationCache.findAll(V({}, r, { fetching: !0 })).length;
      }),
      (t.getQueryData = function (r, i) {
        var o;
        return (o = this.queryCache.find(r, i)) == null ? void 0 : o.state.data;
      }),
      (t.getQueriesData = function (r) {
        return this.getQueryCache()
          .findAll(r)
          .map(function (i) {
            var o = i.queryKey,
              s = i.state,
              l = s.data;
            return [o, l];
          });
      }),
      (t.setQueryData = function (r, i, o) {
        var s = vi(r),
          l = this.defaultQueryOptions(s);
        return this.queryCache.build(this, l).setData(i, o);
      }),
      (t.setQueriesData = function (r, i, o) {
        var s = this;
        return re.batch(function () {
          return s
            .getQueryCache()
            .findAll(r)
            .map(function (l) {
              var u = l.queryKey;
              return [u, s.setQueryData(u, i, o)];
            });
        });
      }),
      (t.getQueryState = function (r, i) {
        var o;
        return (o = this.queryCache.find(r, i)) == null ? void 0 : o.state;
      }),
      (t.removeQueries = function (r, i) {
        var o = Et(r, i),
          s = o[0],
          l = this.queryCache;
        re.batch(function () {
          l.findAll(s).forEach(function (u) {
            l.remove(u);
          });
        });
      }),
      (t.resetQueries = function (r, i, o) {
        var s = this,
          l = Et(r, i, o),
          u = l[0],
          a = l[1],
          c = this.queryCache,
          f = V({}, u, { active: !0 });
        return re.batch(function () {
          return (
            c.findAll(u).forEach(function (p) {
              p.reset();
            }),
            s.refetchQueries(f, a)
          );
        });
      }),
      (t.cancelQueries = function (r, i, o) {
        var s = this,
          l = Et(r, i, o),
          u = l[0],
          a = l[1],
          c = a === void 0 ? {} : a;
        typeof c.revert > "u" && (c.revert = !0);
        var f = re.batch(function () {
          return s.queryCache.findAll(u).map(function (p) {
            return p.cancel(c);
          });
        });
        return Promise.all(f).then(xe).catch(xe);
      }),
      (t.invalidateQueries = function (r, i, o) {
        var s,
          l,
          u,
          a = this,
          c = Et(r, i, o),
          f = c[0],
          p = c[1],
          y = V({}, f, {
            active:
              (s = (l = f.refetchActive) != null ? l : f.active) != null
                ? s
                : !0,
            inactive: (u = f.refetchInactive) != null ? u : !1,
          });
        return re.batch(function () {
          return (
            a.queryCache.findAll(f).forEach(function (v) {
              v.invalidate();
            }),
            a.refetchQueries(y, p)
          );
        });
      }),
      (t.refetchQueries = function (r, i, o) {
        var s = this,
          l = Et(r, i, o),
          u = l[0],
          a = l[1],
          c = re.batch(function () {
            return s.queryCache.findAll(u).map(function (p) {
              return p.fetch(
                void 0,
                V({}, a, {
                  meta: { refetchPage: u == null ? void 0 : u.refetchPage },
                })
              );
            });
          }),
          f = Promise.all(c).then(xe);
        return (a != null && a.throwOnError) || (f = f.catch(xe)), f;
      }),
      (t.fetchQuery = function (r, i, o) {
        var s = vi(r, i, o),
          l = this.defaultQueryOptions(s);
        typeof l.retry > "u" && (l.retry = !1);
        var u = this.queryCache.build(this, l);
        return u.isStaleByTime(l.staleTime)
          ? u.fetch(l)
          : Promise.resolve(u.state.data);
      }),
      (t.prefetchQuery = function (r, i, o) {
        return this.fetchQuery(r, i, o).then(xe).catch(xe);
      }),
      (t.fetchInfiniteQuery = function (r, i, o) {
        var s = vi(r, i, o);
        return (s.behavior = jv()), this.fetchQuery(s);
      }),
      (t.prefetchInfiniteQuery = function (r, i, o) {
        return this.fetchInfiniteQuery(r, i, o).then(xe).catch(xe);
      }),
      (t.cancelMutations = function () {
        var r = this,
          i = re.batch(function () {
            return r.mutationCache.getAll().map(function (o) {
              return o.cancel();
            });
          });
        return Promise.all(i).then(xe).catch(xe);
      }),
      (t.resumePausedMutations = function () {
        return this.getMutationCache().resumePausedMutations();
      }),
      (t.executeMutation = function (r) {
        return this.mutationCache.build(this, r).execute();
      }),
      (t.getQueryCache = function () {
        return this.queryCache;
      }),
      (t.getMutationCache = function () {
        return this.mutationCache;
      }),
      (t.getDefaultOptions = function () {
        return this.defaultOptions;
      }),
      (t.setDefaultOptions = function (r) {
        this.defaultOptions = r;
      }),
      (t.setQueryDefaults = function (r, i) {
        var o = this.queryDefaults.find(function (s) {
          return Wt(r) === Wt(s.queryKey);
        });
        o
          ? (o.defaultOptions = i)
          : this.queryDefaults.push({ queryKey: r, defaultOptions: i });
      }),
      (t.getQueryDefaults = function (r) {
        var i;
        return r
          ? (i = this.queryDefaults.find(function (o) {
              return Ji(r, o.queryKey);
            })) == null
            ? void 0
            : i.defaultOptions
          : void 0;
      }),
      (t.setMutationDefaults = function (r, i) {
        var o = this.mutationDefaults.find(function (s) {
          return Wt(r) === Wt(s.mutationKey);
        });
        o
          ? (o.defaultOptions = i)
          : this.mutationDefaults.push({ mutationKey: r, defaultOptions: i });
      }),
      (t.getMutationDefaults = function (r) {
        var i;
        return r
          ? (i = this.mutationDefaults.find(function (o) {
              return Ji(r, o.mutationKey);
            })) == null
            ? void 0
            : i.defaultOptions
          : void 0;
      }),
      (t.defaultQueryOptions = function (r) {
        if (r != null && r._defaulted) return r;
        var i = V(
          {},
          this.defaultOptions.queries,
          this.getQueryDefaults(r == null ? void 0 : r.queryKey),
          r,
          { _defaulted: !0 }
        );
        return (
          !i.queryHash && i.queryKey && (i.queryHash = iu(i.queryKey, i)), i
        );
      }),
      (t.defaultQueryObserverOptions = function (r) {
        return this.defaultQueryOptions(r);
      }),
      (t.defaultMutationOptions = function (r) {
        return r != null && r._defaulted
          ? r
          : V(
              {},
              this.defaultOptions.mutations,
              this.getMutationDefaults(r == null ? void 0 : r.mutationKey),
              r,
              { _defaulted: !0 }
            );
      }),
      (t.clear = function () {
        this.queryCache.clear(), this.mutationCache.clear();
      }),
      e
    );
  })(),
  Bv = (function (e) {
    jr(t, e);
    function t(r, i) {
      var o;
      return (
        (o = e.call(this) || this),
        (o.client = r),
        (o.options = i),
        (o.trackedProps = []),
        (o.selectError = null),
        o.bindMethods(),
        o.setOptions(i),
        o
      );
    }
    var n = t.prototype;
    return (
      (n.bindMethods = function () {
        (this.remove = this.remove.bind(this)),
          (this.refetch = this.refetch.bind(this));
      }),
      (n.onSubscribe = function () {
        this.listeners.length === 1 &&
          (this.currentQuery.addObserver(this),
          Ia(this.currentQuery, this.options) && this.executeFetch(),
          this.updateTimers());
      }),
      (n.onUnsubscribe = function () {
        this.listeners.length || this.destroy();
      }),
      (n.shouldFetchOnReconnect = function () {
        return el(
          this.currentQuery,
          this.options,
          this.options.refetchOnReconnect
        );
      }),
      (n.shouldFetchOnWindowFocus = function () {
        return el(
          this.currentQuery,
          this.options,
          this.options.refetchOnWindowFocus
        );
      }),
      (n.destroy = function () {
        (this.listeners = []),
          this.clearTimers(),
          this.currentQuery.removeObserver(this);
      }),
      (n.setOptions = function (i, o) {
        var s = this.options,
          l = this.currentQuery;
        if (
          ((this.options = this.client.defaultQueryObserverOptions(i)),
          typeof this.options.enabled < "u" &&
            typeof this.options.enabled != "boolean")
        )
          throw new Error("Expected enabled to be a boolean");
        this.options.queryKey || (this.options.queryKey = s.queryKey),
          this.updateQuery();
        var u = this.hasListeners();
        u && Aa(this.currentQuery, l, this.options, s) && this.executeFetch(),
          this.updateResult(o),
          u &&
            (this.currentQuery !== l ||
              this.options.enabled !== s.enabled ||
              this.options.staleTime !== s.staleTime) &&
            this.updateStaleTimeout();
        var a = this.computeRefetchInterval();
        u &&
          (this.currentQuery !== l ||
            this.options.enabled !== s.enabled ||
            a !== this.currentRefetchInterval) &&
          this.updateRefetchInterval(a);
      }),
      (n.getOptimisticResult = function (i) {
        var o = this.client.defaultQueryObserverOptions(i),
          s = this.client.getQueryCache().build(this.client, o);
        return this.createResult(s, o);
      }),
      (n.getCurrentResult = function () {
        return this.currentResult;
      }),
      (n.trackResult = function (i, o) {
        var s = this,
          l = {},
          u = function (c) {
            s.trackedProps.includes(c) || s.trackedProps.push(c);
          };
        return (
          Object.keys(i).forEach(function (a) {
            Object.defineProperty(l, a, {
              configurable: !1,
              enumerable: !0,
              get: function () {
                return u(a), i[a];
              },
            });
          }),
          (o.useErrorBoundary || o.suspense) && u("error"),
          l
        );
      }),
      (n.getNextResult = function (i) {
        var o = this;
        return new Promise(function (s, l) {
          var u = o.subscribe(function (a) {
            a.isFetching ||
              (u(),
              a.isError && i != null && i.throwOnError ? l(a.error) : s(a));
          });
        });
      }),
      (n.getCurrentQuery = function () {
        return this.currentQuery;
      }),
      (n.remove = function () {
        this.client.getQueryCache().remove(this.currentQuery);
      }),
      (n.refetch = function (i) {
        return this.fetch(
          V({}, i, {
            meta: { refetchPage: i == null ? void 0 : i.refetchPage },
          })
        );
      }),
      (n.fetchOptimistic = function (i) {
        var o = this,
          s = this.client.defaultQueryObserverOptions(i),
          l = this.client.getQueryCache().build(this.client, s);
        return l.fetch().then(function () {
          return o.createResult(l, s);
        });
      }),
      (n.fetch = function (i) {
        var o = this;
        return this.executeFetch(i).then(function () {
          return o.updateResult(), o.currentResult;
        });
      }),
      (n.executeFetch = function (i) {
        this.updateQuery();
        var o = this.currentQuery.fetch(this.options, i);
        return (i != null && i.throwOnError) || (o = o.catch(xe)), o;
      }),
      (n.updateStaleTimeout = function () {
        var i = this;
        if (
          (this.clearStaleTimeout(),
          !(Yi || this.currentResult.isStale || !Js(this.options.staleTime)))
        ) {
          var o = vd(this.currentResult.dataUpdatedAt, this.options.staleTime),
            s = o + 1;
          this.staleTimeoutId = setTimeout(function () {
            i.currentResult.isStale || i.updateResult();
          }, s);
        }
      }),
      (n.computeRefetchInterval = function () {
        var i;
        return typeof this.options.refetchInterval == "function"
          ? this.options.refetchInterval(
              this.currentResult.data,
              this.currentQuery
            )
          : (i = this.options.refetchInterval) != null
          ? i
          : !1;
      }),
      (n.updateRefetchInterval = function (i) {
        var o = this;
        this.clearRefetchInterval(),
          (this.currentRefetchInterval = i),
          !(
            Yi ||
            this.options.enabled === !1 ||
            !Js(this.currentRefetchInterval) ||
            this.currentRefetchInterval === 0
          ) &&
            (this.refetchIntervalId = setInterval(function () {
              (o.options.refetchIntervalInBackground || lr.isFocused()) &&
                o.executeFetch();
            }, this.currentRefetchInterval));
      }),
      (n.updateTimers = function () {
        this.updateStaleTimeout(),
          this.updateRefetchInterval(this.computeRefetchInterval());
      }),
      (n.clearTimers = function () {
        this.clearStaleTimeout(), this.clearRefetchInterval();
      }),
      (n.clearStaleTimeout = function () {
        this.staleTimeoutId &&
          (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
      }),
      (n.clearRefetchInterval = function () {
        this.refetchIntervalId &&
          (clearInterval(this.refetchIntervalId),
          (this.refetchIntervalId = void 0));
      }),
      (n.createResult = function (i, o) {
        var s = this.currentQuery,
          l = this.options,
          u = this.currentResult,
          a = this.currentResultState,
          c = this.currentResultOptions,
          f = i !== s,
          p = f ? i.state : this.currentQueryInitialState,
          y = f ? this.currentResult : this.previousQueryResult,
          v = i.state,
          x = v.dataUpdatedAt,
          _ = v.error,
          m = v.errorUpdatedAt,
          d = v.isFetching,
          h = v.status,
          w = !1,
          N = !1,
          O;
        if (o.optimisticResults) {
          var R = this.hasListeners(),
            D = !R && Ia(i, o),
            q = R && Aa(i, s, o, l);
          (D || q) && ((d = !0), x || (h = "loading"));
        }
        if (
          o.keepPreviousData &&
          !v.dataUpdateCount &&
          y != null &&
          y.isSuccess &&
          h !== "error"
        )
          (O = y.data), (x = y.dataUpdatedAt), (h = y.status), (w = !0);
        else if (o.select && typeof v.data < "u")
          if (
            u &&
            v.data === (a == null ? void 0 : a.data) &&
            o.select === this.selectFn
          )
            O = this.selectResult;
          else
            try {
              (this.selectFn = o.select),
                (O = o.select(v.data)),
                o.structuralSharing !== !1 &&
                  (O = Zi(u == null ? void 0 : u.data, O)),
                (this.selectResult = O),
                (this.selectError = null);
            } catch (Ce) {
              to().error(Ce), (this.selectError = Ce);
            }
        else O = v.data;
        if (
          typeof o.placeholderData < "u" &&
          typeof O > "u" &&
          (h === "loading" || h === "idle")
        ) {
          var j;
          if (
            u != null &&
            u.isPlaceholderData &&
            o.placeholderData === (c == null ? void 0 : c.placeholderData)
          )
            j = u.data;
          else if (
            ((j =
              typeof o.placeholderData == "function"
                ? o.placeholderData()
                : o.placeholderData),
            o.select && typeof j < "u")
          )
            try {
              (j = o.select(j)),
                o.structuralSharing !== !1 &&
                  (j = Zi(u == null ? void 0 : u.data, j)),
                (this.selectError = null);
            } catch (Ce) {
              to().error(Ce), (this.selectError = Ce);
            }
          typeof j < "u" && ((h = "success"), (O = j), (N = !0));
        }
        this.selectError &&
          ((_ = this.selectError),
          (O = this.selectResult),
          (m = Date.now()),
          (h = "error"));
        var H = {
          status: h,
          isLoading: h === "loading",
          isSuccess: h === "success",
          isError: h === "error",
          isIdle: h === "idle",
          data: O,
          dataUpdatedAt: x,
          error: _,
          errorUpdatedAt: m,
          failureCount: v.fetchFailureCount,
          errorUpdateCount: v.errorUpdateCount,
          isFetched: v.dataUpdateCount > 0 || v.errorUpdateCount > 0,
          isFetchedAfterMount:
            v.dataUpdateCount > p.dataUpdateCount ||
            v.errorUpdateCount > p.errorUpdateCount,
          isFetching: d,
          isRefetching: d && h !== "loading",
          isLoadingError: h === "error" && v.dataUpdatedAt === 0,
          isPlaceholderData: N,
          isPreviousData: w,
          isRefetchError: h === "error" && v.dataUpdatedAt !== 0,
          isStale: ou(i, o),
          refetch: this.refetch,
          remove: this.remove,
        };
        return H;
      }),
      (n.shouldNotifyListeners = function (i, o) {
        if (!o) return !0;
        var s = this.options,
          l = s.notifyOnChangeProps,
          u = s.notifyOnChangePropsExclusions;
        if ((!l && !u) || (l === "tracked" && !this.trackedProps.length))
          return !0;
        var a = l === "tracked" ? this.trackedProps : l;
        return Object.keys(i).some(function (c) {
          var f = c,
            p = i[f] !== o[f],
            y =
              a == null
                ? void 0
                : a.some(function (x) {
                    return x === c;
                  }),
            v =
              u == null
                ? void 0
                : u.some(function (x) {
                    return x === c;
                  });
          return p && !v && (!a || y);
        });
      }),
      (n.updateResult = function (i) {
        var o = this.currentResult;
        if (
          ((this.currentResult = this.createResult(
            this.currentQuery,
            this.options
          )),
          (this.currentResultState = this.currentQuery.state),
          (this.currentResultOptions = this.options),
          !kv(this.currentResult, o))
        ) {
          var s = { cache: !0 };
          (i == null ? void 0 : i.listeners) !== !1 &&
            this.shouldNotifyListeners(this.currentResult, o) &&
            (s.listeners = !0),
            this.notify(V({}, s, i));
        }
      }),
      (n.updateQuery = function () {
        var i = this.client.getQueryCache().build(this.client, this.options);
        if (i !== this.currentQuery) {
          var o = this.currentQuery;
          (this.currentQuery = i),
            (this.currentQueryInitialState = i.state),
            (this.previousQueryResult = this.currentResult),
            this.hasListeners() &&
              (o == null || o.removeObserver(this), i.addObserver(this));
        }
      }),
      (n.onQueryUpdate = function (i) {
        var o = {};
        i.type === "success"
          ? (o.onSuccess = !0)
          : i.type === "error" && !gi(i.error) && (o.onError = !0),
          this.updateResult(o),
          this.hasListeners() && this.updateTimers();
      }),
      (n.notify = function (i) {
        var o = this;
        re.batch(function () {
          i.onSuccess
            ? (o.options.onSuccess == null ||
                o.options.onSuccess(o.currentResult.data),
              o.options.onSettled == null ||
                o.options.onSettled(o.currentResult.data, null))
            : i.onError &&
              (o.options.onError == null ||
                o.options.onError(o.currentResult.error),
              o.options.onSettled == null ||
                o.options.onSettled(void 0, o.currentResult.error)),
            i.listeners &&
              o.listeners.forEach(function (s) {
                s(o.currentResult);
              }),
            i.cache &&
              o.client
                .getQueryCache()
                .notify({
                  query: o.currentQuery,
                  type: "observerResultsUpdated",
                });
        });
      }),
      t
    );
  })(Mr);
function bv(e, t) {
  return (
    t.enabled !== !1 &&
    !e.state.dataUpdatedAt &&
    !(e.state.status === "error" && t.retryOnMount === !1)
  );
}
function Ia(e, t) {
  return bv(e, t) || (e.state.dataUpdatedAt > 0 && el(e, t, t.refetchOnMount));
}
function el(e, t, n) {
  if (t.enabled !== !1) {
    var r = typeof n == "function" ? n(e) : n;
    return r === "always" || (r !== !1 && ou(e, t));
  }
  return !1;
}
function Aa(e, t, n, r) {
  return (
    n.enabled !== !1 &&
    (e !== t || r.enabled === !1) &&
    (!n.suspense || e.state.status !== "error") &&
    ou(e, n)
  );
}
function ou(e, t) {
  return e.isStaleByTime(t.staleTime);
}
var zv = vm.unstable_batchedUpdates;
re.setBatchNotifyFunction(zv);
var Qv = console;
Pv(Qv);
var Da = we.createContext(void 0),
  Sd = we.createContext(!1);
function kd(e) {
  return e && typeof window < "u"
    ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Da),
      window.ReactQueryClientContext)
    : Da;
}
var Vv = function () {
    var t = we.useContext(kd(we.useContext(Sd)));
    if (!t)
      throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return t;
  },
  $v = function (t) {
    var n = t.client,
      r = t.contextSharing,
      i = r === void 0 ? !1 : r,
      o = t.children;
    we.useEffect(
      function () {
        return (
          n.mount(),
          function () {
            n.unmount();
          }
        );
      },
      [n]
    );
    var s = kd(i);
    return we.createElement(
      Sd.Provider,
      { value: i },
      we.createElement(s.Provider, { value: n }, o)
    );
  };
function qv() {
  var e = !1;
  return {
    clearReset: function () {
      e = !1;
    },
    reset: function () {
      e = !0;
    },
    isReset: function () {
      return e;
    },
  };
}
var Hv = we.createContext(qv()),
  Wv = function () {
    return we.useContext(Hv);
  };
function Kv(e, t, n) {
  return typeof t == "function"
    ? t.apply(void 0, n)
    : typeof t == "boolean"
    ? t
    : !!e;
}
function Gv(e, t) {
  var n = we.useRef(!1),
    r = we.useState(0),
    i = r[1],
    o = Vv(),
    s = Wv(),
    l = o.defaultQueryObserverOptions(e);
  (l.optimisticResults = !0),
    l.onError && (l.onError = re.batchCalls(l.onError)),
    l.onSuccess && (l.onSuccess = re.batchCalls(l.onSuccess)),
    l.onSettled && (l.onSettled = re.batchCalls(l.onSettled)),
    l.suspense &&
      (typeof l.staleTime != "number" && (l.staleTime = 1e3),
      l.cacheTime === 0 && (l.cacheTime = 1)),
    (l.suspense || l.useErrorBoundary) &&
      (s.isReset() || (l.retryOnMount = !1));
  var u = we.useState(function () {
      return new t(o, l);
    }),
    a = u[0],
    c = a.getOptimisticResult(l);
  if (
    (we.useEffect(
      function () {
        (n.current = !0), s.clearReset();
        var f = a.subscribe(
          re.batchCalls(function () {
            n.current &&
              i(function (p) {
                return p + 1;
              });
          })
        );
        return (
          a.updateResult(),
          function () {
            (n.current = !1), f();
          }
        );
      },
      [s, a]
    ),
    we.useEffect(
      function () {
        a.setOptions(l, { listeners: !1 });
      },
      [l, a]
    ),
    l.suspense && c.isLoading)
  )
    throw a
      .fetchOptimistic(l)
      .then(function (f) {
        var p = f.data;
        l.onSuccess == null || l.onSuccess(p),
          l.onSettled == null || l.onSettled(p, null);
      })
      .catch(function (f) {
        s.clearReset(),
          l.onError == null || l.onError(f),
          l.onSettled == null || l.onSettled(void 0, f);
      });
  if (
    c.isError &&
    !s.isReset() &&
    !c.isFetching &&
    Kv(l.suspense, l.useErrorBoundary, [c.error, a.getCurrentQuery()])
  )
    throw c.error;
  return l.notifyOnChangeProps === "tracked" && (c = a.trackResult(c, l)), c;
}
function Cd(e, t, n) {
  var r = vi(e, t, n);
  return Gv(r, Bv);
}
const su = JSON,
  Yv = (e) => e.toUpperCase(),
  Xv = (e) => {
    const t = {};
    return (
      e.forEach((n, r) => {
        t[r] = n;
      }),
      t
    );
  },
  Jv = (e, t, n) =>
    e.document
      ? e
      : { document: e, variables: t, requestHeaders: n, signal: void 0 },
  Zv = (e, t, n) =>
    e.query ? e : { query: e, variables: t, requestHeaders: n, signal: void 0 },
  e0 = (e, t) =>
    e.documents ? e : { documents: e, requestHeaders: t, signal: void 0 },
  t0 = (e, t, ...n) => {
    const [r, i] = n;
    return e.document
      ? e
      : {
          url: e,
          document: t,
          variables: r,
          requestHeaders: i,
          signal: void 0,
        };
  };
function xi(e, t) {
  if (!!!e) throw new Error(t);
}
function n0(e) {
  return typeof e == "object" && e !== null;
}
function r0(e, t) {
  if (!!!e) throw new Error("Unexpected invariant triggered.");
}
const i0 = /\r\n|[\n\r]/g;
function tl(e, t) {
  let n = 0,
    r = 1;
  for (const i of e.body.matchAll(i0)) {
    if ((typeof i.index == "number" || r0(!1), i.index >= t)) break;
    (n = i.index + i[0].length), (r += 1);
  }
  return { line: r, column: t + 1 - n };
}
function o0(e) {
  return Nd(e.source, tl(e.source, e.start));
}
function Nd(e, t) {
  const n = e.locationOffset.column - 1,
    r = "".padStart(n) + e.body,
    i = t.line - 1,
    o = e.locationOffset.line - 1,
    s = t.line + o,
    l = t.line === 1 ? n : 0,
    u = t.column + l,
    a = `${e.name}:${s}:${u}
`,
    c = r.split(/\r\n|[\n\r]/g),
    f = c[i];
  if (f.length > 120) {
    const p = Math.floor(u / 80),
      y = u % 80,
      v = [];
    for (let x = 0; x < f.length; x += 80) v.push(f.slice(x, x + 80));
    return (
      a +
      Fa([
        [`${s} |`, v[0]],
        ...v.slice(1, p + 1).map((x) => ["|", x]),
        ["|", "^".padStart(y)],
        ["|", v[p + 1]],
      ])
    );
  }
  return (
    a +
    Fa([
      [`${s - 1} |`, c[i - 1]],
      [`${s} |`, f],
      ["|", "^".padStart(u)],
      [`${s + 1} |`, c[i + 1]],
    ])
  );
}
function Fa(e) {
  const t = e.filter(([r, i]) => i !== void 0),
    n = Math.max(...t.map(([r]) => r.length));
  return t.map(([r, i]) => r.padStart(n) + (i ? " " + i : "")).join(`
`);
}
function s0(e) {
  const t = e[0];
  return t == null || "kind" in t || "length" in t
    ? {
        nodes: t,
        source: e[1],
        positions: e[2],
        path: e[3],
        originalError: e[4],
        extensions: e[5],
      }
    : t;
}
class lu extends Error {
  constructor(t, ...n) {
    var r, i, o;
    const {
      nodes: s,
      source: l,
      positions: u,
      path: a,
      originalError: c,
      extensions: f,
    } = s0(n);
    super(t),
      (this.name = "GraphQLError"),
      (this.path = a ?? void 0),
      (this.originalError = c ?? void 0),
      (this.nodes = La(Array.isArray(s) ? s : s ? [s] : void 0));
    const p = La(
      (r = this.nodes) === null || r === void 0
        ? void 0
        : r.map((v) => v.loc).filter((v) => v != null)
    );
    (this.source =
      l ??
      (p == null || (i = p[0]) === null || i === void 0 ? void 0 : i.source)),
      (this.positions = u ?? (p == null ? void 0 : p.map((v) => v.start))),
      (this.locations =
        u && l
          ? u.map((v) => tl(l, v))
          : p == null
          ? void 0
          : p.map((v) => tl(v.source, v.start)));
    const y = n0(c == null ? void 0 : c.extensions)
      ? c == null
        ? void 0
        : c.extensions
      : void 0;
    (this.extensions =
      (o = f ?? y) !== null && o !== void 0 ? o : Object.create(null)),
      Object.defineProperties(this, {
        message: { writable: !0, enumerable: !0 },
        name: { enumerable: !1 },
        nodes: { enumerable: !1 },
        source: { enumerable: !1 },
        positions: { enumerable: !1 },
        originalError: { enumerable: !1 },
      }),
      c != null && c.stack
        ? Object.defineProperty(this, "stack", {
            value: c.stack,
            writable: !0,
            configurable: !0,
          })
        : Error.captureStackTrace
        ? Error.captureStackTrace(this, lu)
        : Object.defineProperty(this, "stack", {
            value: Error().stack,
            writable: !0,
            configurable: !0,
          });
  }
  get [Symbol.toStringTag]() {
    return "GraphQLError";
  }
  toString() {
    let t = this.message;
    if (this.nodes)
      for (const n of this.nodes)
        n.loc &&
          (t +=
            `

` + o0(n.loc));
    else if (this.source && this.locations)
      for (const n of this.locations)
        t +=
          `

` + Nd(this.source, n);
    return t;
  }
  toJSON() {
    const t = { message: this.message };
    return (
      this.locations != null && (t.locations = this.locations),
      this.path != null && (t.path = this.path),
      this.extensions != null &&
        Object.keys(this.extensions).length > 0 &&
        (t.extensions = this.extensions),
      t
    );
  }
}
function La(e) {
  return e === void 0 || e.length === 0 ? void 0 : e;
}
function fe(e, t, n) {
  return new lu(`Syntax Error: ${n}`, { source: e, positions: [t] });
}
class l0 {
  constructor(t, n, r) {
    (this.start = t.start),
      (this.end = n.end),
      (this.startToken = t),
      (this.endToken = n),
      (this.source = r);
  }
  get [Symbol.toStringTag]() {
    return "Location";
  }
  toJSON() {
    return { start: this.start, end: this.end };
  }
}
class Td {
  constructor(t, n, r, i, o, s) {
    (this.kind = t),
      (this.start = n),
      (this.end = r),
      (this.line = i),
      (this.column = o),
      (this.value = s),
      (this.prev = null),
      (this.next = null);
  }
  get [Symbol.toStringTag]() {
    return "Token";
  }
  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column,
    };
  }
}
const Od = {
    Name: [],
    Document: ["definitions"],
    OperationDefinition: [
      "name",
      "variableDefinitions",
      "directives",
      "selectionSet",
    ],
    VariableDefinition: ["variable", "type", "defaultValue", "directives"],
    Variable: ["name"],
    SelectionSet: ["selections"],
    Field: ["alias", "name", "arguments", "directives", "selectionSet"],
    Argument: ["name", "value"],
    FragmentSpread: ["name", "directives"],
    InlineFragment: ["typeCondition", "directives", "selectionSet"],
    FragmentDefinition: [
      "name",
      "variableDefinitions",
      "typeCondition",
      "directives",
      "selectionSet",
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ["values"],
    ObjectValue: ["fields"],
    ObjectField: ["name", "value"],
    Directive: ["name", "arguments"],
    NamedType: ["name"],
    ListType: ["type"],
    NonNullType: ["type"],
    SchemaDefinition: ["description", "directives", "operationTypes"],
    OperationTypeDefinition: ["type"],
    ScalarTypeDefinition: ["description", "name", "directives"],
    ObjectTypeDefinition: [
      "description",
      "name",
      "interfaces",
      "directives",
      "fields",
    ],
    FieldDefinition: ["description", "name", "arguments", "type", "directives"],
    InputValueDefinition: [
      "description",
      "name",
      "type",
      "defaultValue",
      "directives",
    ],
    InterfaceTypeDefinition: [
      "description",
      "name",
      "interfaces",
      "directives",
      "fields",
    ],
    UnionTypeDefinition: ["description", "name", "directives", "types"],
    EnumTypeDefinition: ["description", "name", "directives", "values"],
    EnumValueDefinition: ["description", "name", "directives"],
    InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
    DirectiveDefinition: ["description", "name", "arguments", "locations"],
    SchemaExtension: ["directives", "operationTypes"],
    ScalarTypeExtension: ["name", "directives"],
    ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
    InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
    UnionTypeExtension: ["name", "directives", "types"],
    EnumTypeExtension: ["name", "directives", "values"],
    InputObjectTypeExtension: ["name", "directives", "fields"],
  },
  u0 = new Set(Object.keys(Od));
function ja(e) {
  const t = e == null ? void 0 : e.kind;
  return typeof t == "string" && u0.has(t);
}
var En;
(function (e) {
  (e.QUERY = "query"),
    (e.MUTATION = "mutation"),
    (e.SUBSCRIPTION = "subscription");
})(En || (En = {}));
var nl;
(function (e) {
  (e.QUERY = "QUERY"),
    (e.MUTATION = "MUTATION"),
    (e.SUBSCRIPTION = "SUBSCRIPTION"),
    (e.FIELD = "FIELD"),
    (e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION"),
    (e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD"),
    (e.INLINE_FRAGMENT = "INLINE_FRAGMENT"),
    (e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION"),
    (e.SCHEMA = "SCHEMA"),
    (e.SCALAR = "SCALAR"),
    (e.OBJECT = "OBJECT"),
    (e.FIELD_DEFINITION = "FIELD_DEFINITION"),
    (e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION"),
    (e.INTERFACE = "INTERFACE"),
    (e.UNION = "UNION"),
    (e.ENUM = "ENUM"),
    (e.ENUM_VALUE = "ENUM_VALUE"),
    (e.INPUT_OBJECT = "INPUT_OBJECT"),
    (e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION");
})(nl || (nl = {}));
var M;
(function (e) {
  (e.NAME = "Name"),
    (e.DOCUMENT = "Document"),
    (e.OPERATION_DEFINITION = "OperationDefinition"),
    (e.VARIABLE_DEFINITION = "VariableDefinition"),
    (e.SELECTION_SET = "SelectionSet"),
    (e.FIELD = "Field"),
    (e.ARGUMENT = "Argument"),
    (e.FRAGMENT_SPREAD = "FragmentSpread"),
    (e.INLINE_FRAGMENT = "InlineFragment"),
    (e.FRAGMENT_DEFINITION = "FragmentDefinition"),
    (e.VARIABLE = "Variable"),
    (e.INT = "IntValue"),
    (e.FLOAT = "FloatValue"),
    (e.STRING = "StringValue"),
    (e.BOOLEAN = "BooleanValue"),
    (e.NULL = "NullValue"),
    (e.ENUM = "EnumValue"),
    (e.LIST = "ListValue"),
    (e.OBJECT = "ObjectValue"),
    (e.OBJECT_FIELD = "ObjectField"),
    (e.DIRECTIVE = "Directive"),
    (e.NAMED_TYPE = "NamedType"),
    (e.LIST_TYPE = "ListType"),
    (e.NON_NULL_TYPE = "NonNullType"),
    (e.SCHEMA_DEFINITION = "SchemaDefinition"),
    (e.OPERATION_TYPE_DEFINITION = "OperationTypeDefinition"),
    (e.SCALAR_TYPE_DEFINITION = "ScalarTypeDefinition"),
    (e.OBJECT_TYPE_DEFINITION = "ObjectTypeDefinition"),
    (e.FIELD_DEFINITION = "FieldDefinition"),
    (e.INPUT_VALUE_DEFINITION = "InputValueDefinition"),
    (e.INTERFACE_TYPE_DEFINITION = "InterfaceTypeDefinition"),
    (e.UNION_TYPE_DEFINITION = "UnionTypeDefinition"),
    (e.ENUM_TYPE_DEFINITION = "EnumTypeDefinition"),
    (e.ENUM_VALUE_DEFINITION = "EnumValueDefinition"),
    (e.INPUT_OBJECT_TYPE_DEFINITION = "InputObjectTypeDefinition"),
    (e.DIRECTIVE_DEFINITION = "DirectiveDefinition"),
    (e.SCHEMA_EXTENSION = "SchemaExtension"),
    (e.SCALAR_TYPE_EXTENSION = "ScalarTypeExtension"),
    (e.OBJECT_TYPE_EXTENSION = "ObjectTypeExtension"),
    (e.INTERFACE_TYPE_EXTENSION = "InterfaceTypeExtension"),
    (e.UNION_TYPE_EXTENSION = "UnionTypeExtension"),
    (e.ENUM_TYPE_EXTENSION = "EnumTypeExtension"),
    (e.INPUT_OBJECT_TYPE_EXTENSION = "InputObjectTypeExtension");
})(M || (M = {}));
function rl(e) {
  return e === 9 || e === 32;
}
function Or(e) {
  return e >= 48 && e <= 57;
}
function _d(e) {
  return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
}
function Pd(e) {
  return _d(e) || e === 95;
}
function a0(e) {
  return _d(e) || Or(e) || e === 95;
}
function c0(e) {
  var t;
  let n = Number.MAX_SAFE_INTEGER,
    r = null,
    i = -1;
  for (let s = 0; s < e.length; ++s) {
    var o;
    const l = e[s],
      u = f0(l);
    u !== l.length &&
      ((r = (o = r) !== null && o !== void 0 ? o : s),
      (i = s),
      s !== 0 && u < n && (n = u));
  }
  return e
    .map((s, l) => (l === 0 ? s : s.slice(n)))
    .slice((t = r) !== null && t !== void 0 ? t : 0, i + 1);
}
function f0(e) {
  let t = 0;
  for (; t < e.length && rl(e.charCodeAt(t)); ) ++t;
  return t;
}
function d0(e, t) {
  const n = e.replace(/"""/g, '\\"""'),
    r = n.split(/\r\n|[\n\r]/g),
    i = r.length === 1,
    o =
      r.length > 1 &&
      r.slice(1).every((y) => y.length === 0 || rl(y.charCodeAt(0))),
    s = n.endsWith('\\"""'),
    l = e.endsWith('"') && !s,
    u = e.endsWith("\\"),
    a = l || u,
    c = !i || e.length > 70 || a || o || s;
  let f = "";
  const p = i && rl(e.charCodeAt(0));
  return (
    ((c && !p) || o) &&
      (f += `
`),
    (f += n),
    (c || a) &&
      (f += `
`),
    '"""' + f + '"""'
  );
}
var S;
(function (e) {
  (e.SOF = "<SOF>"),
    (e.EOF = "<EOF>"),
    (e.BANG = "!"),
    (e.DOLLAR = "$"),
    (e.AMP = "&"),
    (e.PAREN_L = "("),
    (e.PAREN_R = ")"),
    (e.SPREAD = "..."),
    (e.COLON = ":"),
    (e.EQUALS = "="),
    (e.AT = "@"),
    (e.BRACKET_L = "["),
    (e.BRACKET_R = "]"),
    (e.BRACE_L = "{"),
    (e.PIPE = "|"),
    (e.BRACE_R = "}"),
    (e.NAME = "Name"),
    (e.INT = "Int"),
    (e.FLOAT = "Float"),
    (e.STRING = "String"),
    (e.BLOCK_STRING = "BlockString"),
    (e.COMMENT = "Comment");
})(S || (S = {}));
class p0 {
  constructor(t) {
    const n = new Td(S.SOF, 0, 0, 0, 0);
    (this.source = t),
      (this.lastToken = n),
      (this.token = n),
      (this.line = 1),
      (this.lineStart = 0);
  }
  get [Symbol.toStringTag]() {
    return "Lexer";
  }
  advance() {
    return (this.lastToken = this.token), (this.token = this.lookahead());
  }
  lookahead() {
    let t = this.token;
    if (t.kind !== S.EOF)
      do
        if (t.next) t = t.next;
        else {
          const n = m0(this, t.end);
          (t.next = n), (n.prev = t), (t = n);
        }
      while (t.kind === S.COMMENT);
    return t;
  }
}
function h0(e) {
  return (
    e === S.BANG ||
    e === S.DOLLAR ||
    e === S.AMP ||
    e === S.PAREN_L ||
    e === S.PAREN_R ||
    e === S.SPREAD ||
    e === S.COLON ||
    e === S.EQUALS ||
    e === S.AT ||
    e === S.BRACKET_L ||
    e === S.BRACKET_R ||
    e === S.BRACE_L ||
    e === S.PIPE ||
    e === S.BRACE_R
  );
}
function Mn(e) {
  return (e >= 0 && e <= 55295) || (e >= 57344 && e <= 1114111);
}
function ko(e, t) {
  return Rd(e.charCodeAt(t)) && Id(e.charCodeAt(t + 1));
}
function Rd(e) {
  return e >= 55296 && e <= 56319;
}
function Id(e) {
  return e >= 56320 && e <= 57343;
}
function tn(e, t) {
  const n = e.source.body.codePointAt(t);
  if (n === void 0) return S.EOF;
  if (n >= 32 && n <= 126) {
    const r = String.fromCodePoint(n);
    return r === '"' ? `'"'` : `"${r}"`;
  }
  return "U+" + n.toString(16).toUpperCase().padStart(4, "0");
}
function oe(e, t, n, r, i) {
  const o = e.line,
    s = 1 + n - e.lineStart;
  return new Td(t, n, r, o, s, i);
}
function m0(e, t) {
  const n = e.source.body,
    r = n.length;
  let i = t;
  for (; i < r; ) {
    const o = n.charCodeAt(i);
    switch (o) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++i;
        continue;
      case 10:
        ++i, ++e.line, (e.lineStart = i);
        continue;
      case 13:
        n.charCodeAt(i + 1) === 10 ? (i += 2) : ++i,
          ++e.line,
          (e.lineStart = i);
        continue;
      case 35:
        return v0(e, i);
      case 33:
        return oe(e, S.BANG, i, i + 1);
      case 36:
        return oe(e, S.DOLLAR, i, i + 1);
      case 38:
        return oe(e, S.AMP, i, i + 1);
      case 40:
        return oe(e, S.PAREN_L, i, i + 1);
      case 41:
        return oe(e, S.PAREN_R, i, i + 1);
      case 46:
        if (n.charCodeAt(i + 1) === 46 && n.charCodeAt(i + 2) === 46)
          return oe(e, S.SPREAD, i, i + 3);
        break;
      case 58:
        return oe(e, S.COLON, i, i + 1);
      case 61:
        return oe(e, S.EQUALS, i, i + 1);
      case 64:
        return oe(e, S.AT, i, i + 1);
      case 91:
        return oe(e, S.BRACKET_L, i, i + 1);
      case 93:
        return oe(e, S.BRACKET_R, i, i + 1);
      case 123:
        return oe(e, S.BRACE_L, i, i + 1);
      case 124:
        return oe(e, S.PIPE, i, i + 1);
      case 125:
        return oe(e, S.BRACE_R, i, i + 1);
      case 34:
        return n.charCodeAt(i + 1) === 34 && n.charCodeAt(i + 2) === 34
          ? S0(e, i)
          : g0(e, i);
    }
    if (Or(o) || o === 45) return y0(e, i, o);
    if (Pd(o)) return k0(e, i);
    throw fe(
      e.source,
      i,
      o === 39
        ? `Unexpected single quote character ('), did you mean to use a double quote (")?`
        : Mn(o) || ko(n, i)
        ? `Unexpected character: ${tn(e, i)}.`
        : `Invalid character: ${tn(e, i)}.`
    );
  }
  return oe(e, S.EOF, r, r);
}
function v0(e, t) {
  const n = e.source.body,
    r = n.length;
  let i = t + 1;
  for (; i < r; ) {
    const o = n.charCodeAt(i);
    if (o === 10 || o === 13) break;
    if (Mn(o)) ++i;
    else if (ko(n, i)) i += 2;
    else break;
  }
  return oe(e, S.COMMENT, t, i, n.slice(t + 1, i));
}
function y0(e, t, n) {
  const r = e.source.body;
  let i = t,
    o = n,
    s = !1;
  if ((o === 45 && (o = r.charCodeAt(++i)), o === 48)) {
    if (((o = r.charCodeAt(++i)), Or(o)))
      throw fe(
        e.source,
        i,
        `Invalid number, unexpected digit after 0: ${tn(e, i)}.`
      );
  } else (i = Zo(e, i, o)), (o = r.charCodeAt(i));
  if (
    (o === 46 &&
      ((s = !0),
      (o = r.charCodeAt(++i)),
      (i = Zo(e, i, o)),
      (o = r.charCodeAt(i))),
    (o === 69 || o === 101) &&
      ((s = !0),
      (o = r.charCodeAt(++i)),
      (o === 43 || o === 45) && (o = r.charCodeAt(++i)),
      (i = Zo(e, i, o)),
      (o = r.charCodeAt(i))),
    o === 46 || Pd(o))
  )
    throw fe(
      e.source,
      i,
      `Invalid number, expected digit but got: ${tn(e, i)}.`
    );
  return oe(e, s ? S.FLOAT : S.INT, t, i, r.slice(t, i));
}
function Zo(e, t, n) {
  if (!Or(n))
    throw fe(
      e.source,
      t,
      `Invalid number, expected digit but got: ${tn(e, t)}.`
    );
  const r = e.source.body;
  let i = t + 1;
  for (; Or(r.charCodeAt(i)); ) ++i;
  return i;
}
function g0(e, t) {
  const n = e.source.body,
    r = n.length;
  let i = t + 1,
    o = i,
    s = "";
  for (; i < r; ) {
    const l = n.charCodeAt(i);
    if (l === 34) return (s += n.slice(o, i)), oe(e, S.STRING, t, i + 1, s);
    if (l === 92) {
      s += n.slice(o, i);
      const u =
        n.charCodeAt(i + 1) === 117
          ? n.charCodeAt(i + 2) === 123
            ? x0(e, i)
            : E0(e, i)
          : w0(e, i);
      (s += u.value), (i += u.size), (o = i);
      continue;
    }
    if (l === 10 || l === 13) break;
    if (Mn(l)) ++i;
    else if (ko(n, i)) i += 2;
    else throw fe(e.source, i, `Invalid character within String: ${tn(e, i)}.`);
  }
  throw fe(e.source, i, "Unterminated string.");
}
function x0(e, t) {
  const n = e.source.body;
  let r = 0,
    i = 3;
  for (; i < 12; ) {
    const o = n.charCodeAt(t + i++);
    if (o === 125) {
      if (i < 5 || !Mn(r)) break;
      return { value: String.fromCodePoint(r), size: i };
    }
    if (((r = (r << 4) | Xn(o)), r < 0)) break;
  }
  throw fe(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${n.slice(t, t + i)}".`
  );
}
function E0(e, t) {
  const n = e.source.body,
    r = Ma(n, t + 2);
  if (Mn(r)) return { value: String.fromCodePoint(r), size: 6 };
  if (Rd(r) && n.charCodeAt(t + 6) === 92 && n.charCodeAt(t + 7) === 117) {
    const i = Ma(n, t + 8);
    if (Id(i)) return { value: String.fromCodePoint(r, i), size: 12 };
  }
  throw fe(
    e.source,
    t,
    `Invalid Unicode escape sequence: "${n.slice(t, t + 6)}".`
  );
}
function Ma(e, t) {
  return (
    (Xn(e.charCodeAt(t)) << 12) |
    (Xn(e.charCodeAt(t + 1)) << 8) |
    (Xn(e.charCodeAt(t + 2)) << 4) |
    Xn(e.charCodeAt(t + 3))
  );
}
function Xn(e) {
  return e >= 48 && e <= 57
    ? e - 48
    : e >= 65 && e <= 70
    ? e - 55
    : e >= 97 && e <= 102
    ? e - 87
    : -1;
}
function w0(e, t) {
  const n = e.source.body;
  switch (n.charCodeAt(t + 1)) {
    case 34:
      return { value: '"', size: 2 };
    case 92:
      return { value: "\\", size: 2 };
    case 47:
      return { value: "/", size: 2 };
    case 98:
      return { value: "\b", size: 2 };
    case 102:
      return { value: "\f", size: 2 };
    case 110:
      return {
        value: `
`,
        size: 2,
      };
    case 114:
      return { value: "\r", size: 2 };
    case 116:
      return { value: "	", size: 2 };
  }
  throw fe(
    e.source,
    t,
    `Invalid character escape sequence: "${n.slice(t, t + 2)}".`
  );
}
function S0(e, t) {
  const n = e.source.body,
    r = n.length;
  let i = e.lineStart,
    o = t + 3,
    s = o,
    l = "";
  const u = [];
  for (; o < r; ) {
    const a = n.charCodeAt(o);
    if (a === 34 && n.charCodeAt(o + 1) === 34 && n.charCodeAt(o + 2) === 34) {
      (l += n.slice(s, o)), u.push(l);
      const c = oe(
        e,
        S.BLOCK_STRING,
        t,
        o + 3,
        c0(u).join(`
`)
      );
      return (e.line += u.length - 1), (e.lineStart = i), c;
    }
    if (
      a === 92 &&
      n.charCodeAt(o + 1) === 34 &&
      n.charCodeAt(o + 2) === 34 &&
      n.charCodeAt(o + 3) === 34
    ) {
      (l += n.slice(s, o)), (s = o + 1), (o += 4);
      continue;
    }
    if (a === 10 || a === 13) {
      (l += n.slice(s, o)),
        u.push(l),
        a === 13 && n.charCodeAt(o + 1) === 10 ? (o += 2) : ++o,
        (l = ""),
        (s = o),
        (i = o);
      continue;
    }
    if (Mn(a)) ++o;
    else if (ko(n, o)) o += 2;
    else throw fe(e.source, o, `Invalid character within String: ${tn(e, o)}.`);
  }
  throw fe(e.source, o, "Unterminated string.");
}
function k0(e, t) {
  const n = e.source.body,
    r = n.length;
  let i = t + 1;
  for (; i < r; ) {
    const o = n.charCodeAt(i);
    if (a0(o)) ++i;
    else break;
  }
  return oe(e, S.NAME, t, i, n.slice(t, i));
}
const C0 = 10,
  Ad = 2;
function uu(e) {
  return Co(e, []);
}
function Co(e, t) {
  switch (typeof e) {
    case "string":
      return JSON.stringify(e);
    case "function":
      return e.name ? `[function ${e.name}]` : "[function]";
    case "object":
      return N0(e, t);
    default:
      return String(e);
  }
}
function N0(e, t) {
  if (e === null) return "null";
  if (t.includes(e)) return "[Circular]";
  const n = [...t, e];
  if (T0(e)) {
    const r = e.toJSON();
    if (r !== e) return typeof r == "string" ? r : Co(r, n);
  } else if (Array.isArray(e)) return _0(e, n);
  return O0(e, n);
}
function T0(e) {
  return typeof e.toJSON == "function";
}
function O0(e, t) {
  const n = Object.entries(e);
  return n.length === 0
    ? "{}"
    : t.length > Ad
    ? "[" + P0(e) + "]"
    : "{ " + n.map(([i, o]) => i + ": " + Co(o, t)).join(", ") + " }";
}
function _0(e, t) {
  if (e.length === 0) return "[]";
  if (t.length > Ad) return "[Array]";
  const n = Math.min(C0, e.length),
    r = e.length - n,
    i = [];
  for (let o = 0; o < n; ++o) i.push(Co(e[o], t));
  return (
    r === 1
      ? i.push("... 1 more item")
      : r > 1 && i.push(`... ${r} more items`),
    "[" + i.join(", ") + "]"
  );
}
function P0(e) {
  const t = Object.prototype.toString
    .call(e)
    .replace(/^\[object /, "")
    .replace(/]$/, "");
  if (t === "Object" && typeof e.constructor == "function") {
    const n = e.constructor.name;
    if (typeof n == "string" && n !== "") return n;
  }
  return t;
}
const R0 = globalThis.process
  ? function (t, n) {
      return t instanceof n;
    }
  : function (t, n) {
      if (t instanceof n) return !0;
      if (typeof t == "object" && t !== null) {
        var r;
        const i = n.prototype[Symbol.toStringTag],
          o =
            Symbol.toStringTag in t
              ? t[Symbol.toStringTag]
              : (r = t.constructor) === null || r === void 0
              ? void 0
              : r.name;
        if (i === o) {
          const s = uu(t);
          throw new Error(`Cannot use ${i} "${s}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`);
        }
      }
      return !1;
    };
class Dd {
  constructor(t, n = "GraphQL request", r = { line: 1, column: 1 }) {
    typeof t == "string" ||
      xi(!1, `Body must be a string. Received: ${uu(t)}.`),
      (this.body = t),
      (this.name = n),
      (this.locationOffset = r),
      this.locationOffset.line > 0 ||
        xi(!1, "line in locationOffset is 1-indexed and must be positive."),
      this.locationOffset.column > 0 ||
        xi(!1, "column in locationOffset is 1-indexed and must be positive.");
  }
  get [Symbol.toStringTag]() {
    return "Source";
  }
}
function I0(e) {
  return R0(e, Dd);
}
function Fd(e, t) {
  return new A0(e, t).parseDocument();
}
class A0 {
  constructor(t, n = {}) {
    const r = I0(t) ? t : new Dd(t);
    (this._lexer = new p0(r)), (this._options = n), (this._tokenCounter = 0);
  }
  parseName() {
    const t = this.expectToken(S.NAME);
    return this.node(t, { kind: M.NAME, value: t.value });
  }
  parseDocument() {
    return this.node(this._lexer.token, {
      kind: M.DOCUMENT,
      definitions: this.many(S.SOF, this.parseDefinition, S.EOF),
    });
  }
  parseDefinition() {
    if (this.peek(S.BRACE_L)) return this.parseOperationDefinition();
    const t = this.peekDescription(),
      n = t ? this._lexer.lookahead() : this._lexer.token;
    if (n.kind === S.NAME) {
      switch (n.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
      if (t)
        throw fe(
          this._lexer.source,
          this._lexer.token.start,
          "Unexpected description, descriptions are supported only on type definitions."
        );
      switch (n.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    }
    throw this.unexpected(n);
  }
  parseOperationDefinition() {
    const t = this._lexer.token;
    if (this.peek(S.BRACE_L))
      return this.node(t, {
        kind: M.OPERATION_DEFINITION,
        operation: En.QUERY,
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
      });
    const n = this.parseOperationType();
    let r;
    return (
      this.peek(S.NAME) && (r = this.parseName()),
      this.node(t, {
        kind: M.OPERATION_DEFINITION,
        operation: n,
        name: r,
        variableDefinitions: this.parseVariableDefinitions(),
        directives: this.parseDirectives(!1),
        selectionSet: this.parseSelectionSet(),
      })
    );
  }
  parseOperationType() {
    const t = this.expectToken(S.NAME);
    switch (t.value) {
      case "query":
        return En.QUERY;
      case "mutation":
        return En.MUTATION;
      case "subscription":
        return En.SUBSCRIPTION;
    }
    throw this.unexpected(t);
  }
  parseVariableDefinitions() {
    return this.optionalMany(
      S.PAREN_L,
      this.parseVariableDefinition,
      S.PAREN_R
    );
  }
  parseVariableDefinition() {
    return this.node(this._lexer.token, {
      kind: M.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(S.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(S.EQUALS)
        ? this.parseConstValueLiteral()
        : void 0,
      directives: this.parseConstDirectives(),
    });
  }
  parseVariable() {
    const t = this._lexer.token;
    return (
      this.expectToken(S.DOLLAR),
      this.node(t, { kind: M.VARIABLE, name: this.parseName() })
    );
  }
  parseSelectionSet() {
    return this.node(this._lexer.token, {
      kind: M.SELECTION_SET,
      selections: this.many(S.BRACE_L, this.parseSelection, S.BRACE_R),
    });
  }
  parseSelection() {
    return this.peek(S.SPREAD) ? this.parseFragment() : this.parseField();
  }
  parseField() {
    const t = this._lexer.token,
      n = this.parseName();
    let r, i;
    return (
      this.expectOptionalToken(S.COLON)
        ? ((r = n), (i = this.parseName()))
        : (i = n),
      this.node(t, {
        kind: M.FIELD,
        alias: r,
        name: i,
        arguments: this.parseArguments(!1),
        directives: this.parseDirectives(!1),
        selectionSet: this.peek(S.BRACE_L) ? this.parseSelectionSet() : void 0,
      })
    );
  }
  parseArguments(t) {
    const n = t ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(S.PAREN_L, n, S.PAREN_R);
  }
  parseArgument(t = !1) {
    const n = this._lexer.token,
      r = this.parseName();
    return (
      this.expectToken(S.COLON),
      this.node(n, {
        kind: M.ARGUMENT,
        name: r,
        value: this.parseValueLiteral(t),
      })
    );
  }
  parseConstArgument() {
    return this.parseArgument(!0);
  }
  parseFragment() {
    const t = this._lexer.token;
    this.expectToken(S.SPREAD);
    const n = this.expectOptionalKeyword("on");
    return !n && this.peek(S.NAME)
      ? this.node(t, {
          kind: M.FRAGMENT_SPREAD,
          name: this.parseFragmentName(),
          directives: this.parseDirectives(!1),
        })
      : this.node(t, {
          kind: M.INLINE_FRAGMENT,
          typeCondition: n ? this.parseNamedType() : void 0,
          directives: this.parseDirectives(!1),
          selectionSet: this.parseSelectionSet(),
        });
  }
  parseFragmentDefinition() {
    const t = this._lexer.token;
    return (
      this.expectKeyword("fragment"),
      this._options.allowLegacyFragmentVariables === !0
        ? this.node(t, {
            kind: M.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet(),
          })
        : this.node(t, {
            kind: M.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet(),
          })
    );
  }
  parseFragmentName() {
    if (this._lexer.token.value === "on") throw this.unexpected();
    return this.parseName();
  }
  parseValueLiteral(t) {
    const n = this._lexer.token;
    switch (n.kind) {
      case S.BRACKET_L:
        return this.parseList(t);
      case S.BRACE_L:
        return this.parseObject(t);
      case S.INT:
        return (
          this.advanceLexer(), this.node(n, { kind: M.INT, value: n.value })
        );
      case S.FLOAT:
        return (
          this.advanceLexer(), this.node(n, { kind: M.FLOAT, value: n.value })
        );
      case S.STRING:
      case S.BLOCK_STRING:
        return this.parseStringLiteral();
      case S.NAME:
        switch ((this.advanceLexer(), n.value)) {
          case "true":
            return this.node(n, { kind: M.BOOLEAN, value: !0 });
          case "false":
            return this.node(n, { kind: M.BOOLEAN, value: !1 });
          case "null":
            return this.node(n, { kind: M.NULL });
          default:
            return this.node(n, { kind: M.ENUM, value: n.value });
        }
      case S.DOLLAR:
        if (t)
          if ((this.expectToken(S.DOLLAR), this._lexer.token.kind === S.NAME)) {
            const r = this._lexer.token.value;
            throw fe(
              this._lexer.source,
              n.start,
              `Unexpected variable "$${r}" in constant value.`
            );
          } else throw this.unexpected(n);
        return this.parseVariable();
      default:
        throw this.unexpected();
    }
  }
  parseConstValueLiteral() {
    return this.parseValueLiteral(!0);
  }
  parseStringLiteral() {
    const t = this._lexer.token;
    return (
      this.advanceLexer(),
      this.node(t, {
        kind: M.STRING,
        value: t.value,
        block: t.kind === S.BLOCK_STRING,
      })
    );
  }
  parseList(t) {
    const n = () => this.parseValueLiteral(t);
    return this.node(this._lexer.token, {
      kind: M.LIST,
      values: this.any(S.BRACKET_L, n, S.BRACKET_R),
    });
  }
  parseObject(t) {
    const n = () => this.parseObjectField(t);
    return this.node(this._lexer.token, {
      kind: M.OBJECT,
      fields: this.any(S.BRACE_L, n, S.BRACE_R),
    });
  }
  parseObjectField(t) {
    const n = this._lexer.token,
      r = this.parseName();
    return (
      this.expectToken(S.COLON),
      this.node(n, {
        kind: M.OBJECT_FIELD,
        name: r,
        value: this.parseValueLiteral(t),
      })
    );
  }
  parseDirectives(t) {
    const n = [];
    for (; this.peek(S.AT); ) n.push(this.parseDirective(t));
    return n;
  }
  parseConstDirectives() {
    return this.parseDirectives(!0);
  }
  parseDirective(t) {
    const n = this._lexer.token;
    return (
      this.expectToken(S.AT),
      this.node(n, {
        kind: M.DIRECTIVE,
        name: this.parseName(),
        arguments: this.parseArguments(t),
      })
    );
  }
  parseTypeReference() {
    const t = this._lexer.token;
    let n;
    if (this.expectOptionalToken(S.BRACKET_L)) {
      const r = this.parseTypeReference();
      this.expectToken(S.BRACKET_R),
        (n = this.node(t, { kind: M.LIST_TYPE, type: r }));
    } else n = this.parseNamedType();
    return this.expectOptionalToken(S.BANG)
      ? this.node(t, { kind: M.NON_NULL_TYPE, type: n })
      : n;
  }
  parseNamedType() {
    return this.node(this._lexer.token, {
      kind: M.NAMED_TYPE,
      name: this.parseName(),
    });
  }
  peekDescription() {
    return this.peek(S.STRING) || this.peek(S.BLOCK_STRING);
  }
  parseDescription() {
    if (this.peekDescription()) return this.parseStringLiteral();
  }
  parseSchemaDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("schema");
    const r = this.parseConstDirectives(),
      i = this.many(S.BRACE_L, this.parseOperationTypeDefinition, S.BRACE_R);
    return this.node(t, {
      kind: M.SCHEMA_DEFINITION,
      description: n,
      directives: r,
      operationTypes: i,
    });
  }
  parseOperationTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseOperationType();
    this.expectToken(S.COLON);
    const r = this.parseNamedType();
    return this.node(t, {
      kind: M.OPERATION_TYPE_DEFINITION,
      operation: n,
      type: r,
    });
  }
  parseScalarTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("scalar");
    const r = this.parseName(),
      i = this.parseConstDirectives();
    return this.node(t, {
      kind: M.SCALAR_TYPE_DEFINITION,
      description: n,
      name: r,
      directives: i,
    });
  }
  parseObjectTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("type");
    const r = this.parseName(),
      i = this.parseImplementsInterfaces(),
      o = this.parseConstDirectives(),
      s = this.parseFieldsDefinition();
    return this.node(t, {
      kind: M.OBJECT_TYPE_DEFINITION,
      description: n,
      name: r,
      interfaces: i,
      directives: o,
      fields: s,
    });
  }
  parseImplementsInterfaces() {
    return this.expectOptionalKeyword("implements")
      ? this.delimitedMany(S.AMP, this.parseNamedType)
      : [];
  }
  parseFieldsDefinition() {
    return this.optionalMany(S.BRACE_L, this.parseFieldDefinition, S.BRACE_R);
  }
  parseFieldDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription(),
      r = this.parseName(),
      i = this.parseArgumentDefs();
    this.expectToken(S.COLON);
    const o = this.parseTypeReference(),
      s = this.parseConstDirectives();
    return this.node(t, {
      kind: M.FIELD_DEFINITION,
      description: n,
      name: r,
      arguments: i,
      type: o,
      directives: s,
    });
  }
  parseArgumentDefs() {
    return this.optionalMany(S.PAREN_L, this.parseInputValueDef, S.PAREN_R);
  }
  parseInputValueDef() {
    const t = this._lexer.token,
      n = this.parseDescription(),
      r = this.parseName();
    this.expectToken(S.COLON);
    const i = this.parseTypeReference();
    let o;
    this.expectOptionalToken(S.EQUALS) && (o = this.parseConstValueLiteral());
    const s = this.parseConstDirectives();
    return this.node(t, {
      kind: M.INPUT_VALUE_DEFINITION,
      description: n,
      name: r,
      type: i,
      defaultValue: o,
      directives: s,
    });
  }
  parseInterfaceTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("interface");
    const r = this.parseName(),
      i = this.parseImplementsInterfaces(),
      o = this.parseConstDirectives(),
      s = this.parseFieldsDefinition();
    return this.node(t, {
      kind: M.INTERFACE_TYPE_DEFINITION,
      description: n,
      name: r,
      interfaces: i,
      directives: o,
      fields: s,
    });
  }
  parseUnionTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("union");
    const r = this.parseName(),
      i = this.parseConstDirectives(),
      o = this.parseUnionMemberTypes();
    return this.node(t, {
      kind: M.UNION_TYPE_DEFINITION,
      description: n,
      name: r,
      directives: i,
      types: o,
    });
  }
  parseUnionMemberTypes() {
    return this.expectOptionalToken(S.EQUALS)
      ? this.delimitedMany(S.PIPE, this.parseNamedType)
      : [];
  }
  parseEnumTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("enum");
    const r = this.parseName(),
      i = this.parseConstDirectives(),
      o = this.parseEnumValuesDefinition();
    return this.node(t, {
      kind: M.ENUM_TYPE_DEFINITION,
      description: n,
      name: r,
      directives: i,
      values: o,
    });
  }
  parseEnumValuesDefinition() {
    return this.optionalMany(
      S.BRACE_L,
      this.parseEnumValueDefinition,
      S.BRACE_R
    );
  }
  parseEnumValueDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription(),
      r = this.parseEnumValueName(),
      i = this.parseConstDirectives();
    return this.node(t, {
      kind: M.ENUM_VALUE_DEFINITION,
      description: n,
      name: r,
      directives: i,
    });
  }
  parseEnumValueName() {
    if (
      this._lexer.token.value === "true" ||
      this._lexer.token.value === "false" ||
      this._lexer.token.value === "null"
    )
      throw fe(
        this._lexer.source,
        this._lexer.token.start,
        `${ri(
          this._lexer.token
        )} is reserved and cannot be used for an enum value.`
      );
    return this.parseName();
  }
  parseInputObjectTypeDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("input");
    const r = this.parseName(),
      i = this.parseConstDirectives(),
      o = this.parseInputFieldsDefinition();
    return this.node(t, {
      kind: M.INPUT_OBJECT_TYPE_DEFINITION,
      description: n,
      name: r,
      directives: i,
      fields: o,
    });
  }
  parseInputFieldsDefinition() {
    return this.optionalMany(S.BRACE_L, this.parseInputValueDef, S.BRACE_R);
  }
  parseTypeSystemExtension() {
    const t = this._lexer.lookahead();
    if (t.kind === S.NAME)
      switch (t.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    throw this.unexpected(t);
  }
  parseSchemaExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("schema");
    const n = this.parseConstDirectives(),
      r = this.optionalMany(
        S.BRACE_L,
        this.parseOperationTypeDefinition,
        S.BRACE_R
      );
    if (n.length === 0 && r.length === 0) throw this.unexpected();
    return this.node(t, {
      kind: M.SCHEMA_EXTENSION,
      directives: n,
      operationTypes: r,
    });
  }
  parseScalarTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    const n = this.parseName(),
      r = this.parseConstDirectives();
    if (r.length === 0) throw this.unexpected();
    return this.node(t, {
      kind: M.SCALAR_TYPE_EXTENSION,
      name: n,
      directives: r,
    });
  }
  parseObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("type");
    const n = this.parseName(),
      r = this.parseImplementsInterfaces(),
      i = this.parseConstDirectives(),
      o = this.parseFieldsDefinition();
    if (r.length === 0 && i.length === 0 && o.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: M.OBJECT_TYPE_EXTENSION,
      name: n,
      interfaces: r,
      directives: i,
      fields: o,
    });
  }
  parseInterfaceTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("interface");
    const n = this.parseName(),
      r = this.parseImplementsInterfaces(),
      i = this.parseConstDirectives(),
      o = this.parseFieldsDefinition();
    if (r.length === 0 && i.length === 0 && o.length === 0)
      throw this.unexpected();
    return this.node(t, {
      kind: M.INTERFACE_TYPE_EXTENSION,
      name: n,
      interfaces: r,
      directives: i,
      fields: o,
    });
  }
  parseUnionTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("union");
    const n = this.parseName(),
      r = this.parseConstDirectives(),
      i = this.parseUnionMemberTypes();
    if (r.length === 0 && i.length === 0) throw this.unexpected();
    return this.node(t, {
      kind: M.UNION_TYPE_EXTENSION,
      name: n,
      directives: r,
      types: i,
    });
  }
  parseEnumTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("enum");
    const n = this.parseName(),
      r = this.parseConstDirectives(),
      i = this.parseEnumValuesDefinition();
    if (r.length === 0 && i.length === 0) throw this.unexpected();
    return this.node(t, {
      kind: M.ENUM_TYPE_EXTENSION,
      name: n,
      directives: r,
      values: i,
    });
  }
  parseInputObjectTypeExtension() {
    const t = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("input");
    const n = this.parseName(),
      r = this.parseConstDirectives(),
      i = this.parseInputFieldsDefinition();
    if (r.length === 0 && i.length === 0) throw this.unexpected();
    return this.node(t, {
      kind: M.INPUT_OBJECT_TYPE_EXTENSION,
      name: n,
      directives: r,
      fields: i,
    });
  }
  parseDirectiveDefinition() {
    const t = this._lexer.token,
      n = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken(S.AT);
    const r = this.parseName(),
      i = this.parseArgumentDefs(),
      o = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    const s = this.parseDirectiveLocations();
    return this.node(t, {
      kind: M.DIRECTIVE_DEFINITION,
      description: n,
      name: r,
      arguments: i,
      repeatable: o,
      locations: s,
    });
  }
  parseDirectiveLocations() {
    return this.delimitedMany(S.PIPE, this.parseDirectiveLocation);
  }
  parseDirectiveLocation() {
    const t = this._lexer.token,
      n = this.parseName();
    if (Object.prototype.hasOwnProperty.call(nl, n.value)) return n;
    throw this.unexpected(t);
  }
  node(t, n) {
    return (
      this._options.noLocation !== !0 &&
        (n.loc = new l0(t, this._lexer.lastToken, this._lexer.source)),
      n
    );
  }
  peek(t) {
    return this._lexer.token.kind === t;
  }
  expectToken(t) {
    const n = this._lexer.token;
    if (n.kind === t) return this.advanceLexer(), n;
    throw fe(this._lexer.source, n.start, `Expected ${Ld(t)}, found ${ri(n)}.`);
  }
  expectOptionalToken(t) {
    return this._lexer.token.kind === t ? (this.advanceLexer(), !0) : !1;
  }
  expectKeyword(t) {
    const n = this._lexer.token;
    if (n.kind === S.NAME && n.value === t) this.advanceLexer();
    else
      throw fe(this._lexer.source, n.start, `Expected "${t}", found ${ri(n)}.`);
  }
  expectOptionalKeyword(t) {
    const n = this._lexer.token;
    return n.kind === S.NAME && n.value === t ? (this.advanceLexer(), !0) : !1;
  }
  unexpected(t) {
    const n = t ?? this._lexer.token;
    return fe(this._lexer.source, n.start, `Unexpected ${ri(n)}.`);
  }
  any(t, n, r) {
    this.expectToken(t);
    const i = [];
    for (; !this.expectOptionalToken(r); ) i.push(n.call(this));
    return i;
  }
  optionalMany(t, n, r) {
    if (this.expectOptionalToken(t)) {
      const i = [];
      do i.push(n.call(this));
      while (!this.expectOptionalToken(r));
      return i;
    }
    return [];
  }
  many(t, n, r) {
    this.expectToken(t);
    const i = [];
    do i.push(n.call(this));
    while (!this.expectOptionalToken(r));
    return i;
  }
  delimitedMany(t, n) {
    this.expectOptionalToken(t);
    const r = [];
    do r.push(n.call(this));
    while (this.expectOptionalToken(t));
    return r;
  }
  advanceLexer() {
    const { maxTokens: t } = this._options,
      n = this._lexer.advance();
    if (
      t !== void 0 &&
      n.kind !== S.EOF &&
      (++this._tokenCounter, this._tokenCounter > t)
    )
      throw fe(
        this._lexer.source,
        n.start,
        `Document contains more that ${t} tokens. Parsing aborted.`
      );
  }
}
function ri(e) {
  const t = e.value;
  return Ld(e.kind) + (t != null ? ` "${t}"` : "");
}
function Ld(e) {
  return h0(e) ? `"${e}"` : e;
}
function D0(e) {
  return `"${e.replace(F0, L0)}"`;
}
const F0 = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;
function L0(e) {
  return j0[e.charCodeAt(0)];
}
const j0 = [
    "\\u0000",
    "\\u0001",
    "\\u0002",
    "\\u0003",
    "\\u0004",
    "\\u0005",
    "\\u0006",
    "\\u0007",
    "\\b",
    "\\t",
    "\\n",
    "\\u000B",
    "\\f",
    "\\r",
    "\\u000E",
    "\\u000F",
    "\\u0010",
    "\\u0011",
    "\\u0012",
    "\\u0013",
    "\\u0014",
    "\\u0015",
    "\\u0016",
    "\\u0017",
    "\\u0018",
    "\\u0019",
    "\\u001A",
    "\\u001B",
    "\\u001C",
    "\\u001D",
    "\\u001E",
    "\\u001F",
    "",
    "",
    '\\"',
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\\\",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "\\u007F",
    "\\u0080",
    "\\u0081",
    "\\u0082",
    "\\u0083",
    "\\u0084",
    "\\u0085",
    "\\u0086",
    "\\u0087",
    "\\u0088",
    "\\u0089",
    "\\u008A",
    "\\u008B",
    "\\u008C",
    "\\u008D",
    "\\u008E",
    "\\u008F",
    "\\u0090",
    "\\u0091",
    "\\u0092",
    "\\u0093",
    "\\u0094",
    "\\u0095",
    "\\u0096",
    "\\u0097",
    "\\u0098",
    "\\u0099",
    "\\u009A",
    "\\u009B",
    "\\u009C",
    "\\u009D",
    "\\u009E",
    "\\u009F",
  ],
  M0 = Object.freeze({});
function U0(e, t, n = Od) {
  const r = new Map();
  for (const m of Object.values(M)) r.set(m, B0(t, m));
  let i,
    o = Array.isArray(e),
    s = [e],
    l = -1,
    u = [],
    a = e,
    c,
    f;
  const p = [],
    y = [];
  do {
    l++;
    const m = l === s.length,
      d = m && u.length !== 0;
    if (m) {
      if (
        ((c = y.length === 0 ? void 0 : p[p.length - 1]),
        (a = f),
        (f = y.pop()),
        d)
      )
        if (o) {
          a = a.slice();
          let w = 0;
          for (const [N, O] of u) {
            const R = N - w;
            O === null ? (a.splice(R, 1), w++) : (a[R] = O);
          }
        } else {
          a = Object.defineProperties({}, Object.getOwnPropertyDescriptors(a));
          for (const [w, N] of u) a[w] = N;
        }
      (l = i.index), (s = i.keys), (u = i.edits), (o = i.inArray), (i = i.prev);
    } else if (f) {
      if (((c = o ? l : s[l]), (a = f[c]), a == null)) continue;
      p.push(c);
    }
    let h;
    if (!Array.isArray(a)) {
      var v, x;
      ja(a) || xi(!1, `Invalid AST Node: ${uu(a)}.`);
      const w = m
        ? (v = r.get(a.kind)) === null || v === void 0
          ? void 0
          : v.leave
        : (x = r.get(a.kind)) === null || x === void 0
        ? void 0
        : x.enter;
      if (((h = w == null ? void 0 : w.call(t, a, c, f, p, y)), h === M0))
        break;
      if (h === !1) {
        if (!m) {
          p.pop();
          continue;
        }
      } else if (h !== void 0 && (u.push([c, h]), !m))
        if (ja(h)) a = h;
        else {
          p.pop();
          continue;
        }
    }
    if ((h === void 0 && d && u.push([c, a]), m)) p.pop();
    else {
      var _;
      (i = { inArray: o, index: l, keys: s, edits: u, prev: i }),
        (o = Array.isArray(a)),
        (s = o ? a : (_ = n[a.kind]) !== null && _ !== void 0 ? _ : []),
        (l = -1),
        (u = []),
        f && y.push(f),
        (f = a);
    }
  } while (i !== void 0);
  return u.length !== 0 ? u[u.length - 1][1] : e;
}
function B0(e, t) {
  const n = e[t];
  return typeof n == "object"
    ? n
    : typeof n == "function"
    ? { enter: n, leave: void 0 }
    : { enter: e.enter, leave: e.leave };
}
function b0(e) {
  return U0(e, Q0);
}
const z0 = 80,
  Q0 = {
    Name: { leave: (e) => e.value },
    Variable: { leave: (e) => "$" + e.name },
    Document: {
      leave: (e) =>
        F(
          e.definitions,
          `

`
        ),
    },
    OperationDefinition: {
      leave(e) {
        const t = b("(", F(e.variableDefinitions, ", "), ")"),
          n = F([e.operation, F([e.name, t]), F(e.directives, " ")], " ");
        return (n === "query" ? "" : n + " ") + e.selectionSet;
      },
    },
    VariableDefinition: {
      leave: ({ variable: e, type: t, defaultValue: n, directives: r }) =>
        e + ": " + t + b(" = ", n) + b(" ", F(r, " ")),
    },
    SelectionSet: { leave: ({ selections: e }) => We(e) },
    Field: {
      leave({
        alias: e,
        name: t,
        arguments: n,
        directives: r,
        selectionSet: i,
      }) {
        const o = b("", e, ": ") + t;
        let s = o + b("(", F(n, ", "), ")");
        return (
          s.length > z0 &&
            (s =
              o +
              b(
                `(
`,
                Ei(
                  F(
                    n,
                    `
`
                  )
                ),
                `
)`
              )),
          F([s, F(r, " "), i], " ")
        );
      },
    },
    Argument: { leave: ({ name: e, value: t }) => e + ": " + t },
    FragmentSpread: {
      leave: ({ name: e, directives: t }) => "..." + e + b(" ", F(t, " ")),
    },
    InlineFragment: {
      leave: ({ typeCondition: e, directives: t, selectionSet: n }) =>
        F(["...", b("on ", e), F(t, " "), n], " "),
    },
    FragmentDefinition: {
      leave: ({
        name: e,
        typeCondition: t,
        variableDefinitions: n,
        directives: r,
        selectionSet: i,
      }) =>
        `fragment ${e}${b("(", F(n, ", "), ")")} on ${t} ${b(
          "",
          F(r, " "),
          " "
        )}` + i,
    },
    IntValue: { leave: ({ value: e }) => e },
    FloatValue: { leave: ({ value: e }) => e },
    StringValue: { leave: ({ value: e, block: t }) => (t ? d0(e) : D0(e)) },
    BooleanValue: { leave: ({ value: e }) => (e ? "true" : "false") },
    NullValue: { leave: () => "null" },
    EnumValue: { leave: ({ value: e }) => e },
    ListValue: { leave: ({ values: e }) => "[" + F(e, ", ") + "]" },
    ObjectValue: { leave: ({ fields: e }) => "{" + F(e, ", ") + "}" },
    ObjectField: { leave: ({ name: e, value: t }) => e + ": " + t },
    Directive: {
      leave: ({ name: e, arguments: t }) => "@" + e + b("(", F(t, ", "), ")"),
    },
    NamedType: { leave: ({ name: e }) => e },
    ListType: { leave: ({ type: e }) => "[" + e + "]" },
    NonNullType: { leave: ({ type: e }) => e + "!" },
    SchemaDefinition: {
      leave: ({ description: e, directives: t, operationTypes: n }) =>
        b(
          "",
          e,
          `
`
        ) + F(["schema", F(t, " "), We(n)], " "),
    },
    OperationTypeDefinition: {
      leave: ({ operation: e, type: t }) => e + ": " + t,
    },
    ScalarTypeDefinition: {
      leave: ({ description: e, name: t, directives: n }) =>
        b(
          "",
          e,
          `
`
        ) + F(["scalar", t, F(n, " ")], " "),
    },
    ObjectTypeDefinition: {
      leave: ({
        description: e,
        name: t,
        interfaces: n,
        directives: r,
        fields: i,
      }) =>
        b(
          "",
          e,
          `
`
        ) +
        F(["type", t, b("implements ", F(n, " & ")), F(r, " "), We(i)], " "),
    },
    FieldDefinition: {
      leave: ({
        description: e,
        name: t,
        arguments: n,
        type: r,
        directives: i,
      }) =>
        b(
          "",
          e,
          `
`
        ) +
        t +
        (Ua(n)
          ? b(
              `(
`,
              Ei(
                F(
                  n,
                  `
`
                )
              ),
              `
)`
            )
          : b("(", F(n, ", "), ")")) +
        ": " +
        r +
        b(" ", F(i, " ")),
    },
    InputValueDefinition: {
      leave: ({
        description: e,
        name: t,
        type: n,
        defaultValue: r,
        directives: i,
      }) =>
        b(
          "",
          e,
          `
`
        ) + F([t + ": " + n, b("= ", r), F(i, " ")], " "),
    },
    InterfaceTypeDefinition: {
      leave: ({
        description: e,
        name: t,
        interfaces: n,
        directives: r,
        fields: i,
      }) =>
        b(
          "",
          e,
          `
`
        ) +
        F(
          ["interface", t, b("implements ", F(n, " & ")), F(r, " "), We(i)],
          " "
        ),
    },
    UnionTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, types: r }) =>
        b(
          "",
          e,
          `
`
        ) + F(["union", t, F(n, " "), b("= ", F(r, " | "))], " "),
    },
    EnumTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, values: r }) =>
        b(
          "",
          e,
          `
`
        ) + F(["enum", t, F(n, " "), We(r)], " "),
    },
    EnumValueDefinition: {
      leave: ({ description: e, name: t, directives: n }) =>
        b(
          "",
          e,
          `
`
        ) + F([t, F(n, " ")], " "),
    },
    InputObjectTypeDefinition: {
      leave: ({ description: e, name: t, directives: n, fields: r }) =>
        b(
          "",
          e,
          `
`
        ) + F(["input", t, F(n, " "), We(r)], " "),
    },
    DirectiveDefinition: {
      leave: ({
        description: e,
        name: t,
        arguments: n,
        repeatable: r,
        locations: i,
      }) =>
        b(
          "",
          e,
          `
`
        ) +
        "directive @" +
        t +
        (Ua(n)
          ? b(
              `(
`,
              Ei(
                F(
                  n,
                  `
`
                )
              ),
              `
)`
            )
          : b("(", F(n, ", "), ")")) +
        (r ? " repeatable" : "") +
        " on " +
        F(i, " | "),
    },
    SchemaExtension: {
      leave: ({ directives: e, operationTypes: t }) =>
        F(["extend schema", F(e, " "), We(t)], " "),
    },
    ScalarTypeExtension: {
      leave: ({ name: e, directives: t }) =>
        F(["extend scalar", e, F(t, " ")], " "),
    },
    ObjectTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
        F(
          ["extend type", e, b("implements ", F(t, " & ")), F(n, " "), We(r)],
          " "
        ),
    },
    InterfaceTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: n, fields: r }) =>
        F(
          [
            "extend interface",
            e,
            b("implements ", F(t, " & ")),
            F(n, " "),
            We(r),
          ],
          " "
        ),
    },
    UnionTypeExtension: {
      leave: ({ name: e, directives: t, types: n }) =>
        F(["extend union", e, F(t, " "), b("= ", F(n, " | "))], " "),
    },
    EnumTypeExtension: {
      leave: ({ name: e, directives: t, values: n }) =>
        F(["extend enum", e, F(t, " "), We(n)], " "),
    },
    InputObjectTypeExtension: {
      leave: ({ name: e, directives: t, fields: n }) =>
        F(["extend input", e, F(t, " "), We(n)], " "),
    },
  };
function F(e, t = "") {
  var n;
  return (n = e == null ? void 0 : e.filter((r) => r).join(t)) !== null &&
    n !== void 0
    ? n
    : "";
}
function We(e) {
  return b(
    `{
`,
    Ei(
      F(
        e,
        `
`
      )
    ),
    `
}`
  );
}
function b(e, t, n = "") {
  return t != null && t !== "" ? e + t + n : "";
}
function Ei(e) {
  return b(
    "  ",
    e.replace(
      /\n/g,
      `
  `
    )
  );
}
function Ua(e) {
  var t;
  return (t =
    e == null
      ? void 0
      : e.some((n) =>
          n.includes(`
`)
        )) !== null && t !== void 0
    ? t
    : !1;
}
const Ba = (e) => {
    var r, i;
    let t;
    const n = e.definitions.filter((o) => o.kind === "OperationDefinition");
    return (
      n.length === 1 &&
        (t =
          (i = (r = n[0]) == null ? void 0 : r.name) == null
            ? void 0
            : i.value),
      t
    );
  },
  es = (e) => {
    if (typeof e == "string") {
      let n;
      try {
        const r = Fd(e);
        n = Ba(r);
      } catch {}
      return { query: e, operationName: n };
    }
    const t = Ba(e);
    return { query: b0(e), operationName: t };
  };
class ur extends Error {
  constructor(t, n) {
    const r = `${ur.extractMessage(t)}: ${JSON.stringify({
      response: t,
      request: n,
    })}`;
    super(r),
      Object.setPrototypeOf(this, ur.prototype),
      (this.response = t),
      (this.request = n),
      typeof Error.captureStackTrace == "function" &&
        Error.captureStackTrace(this, ur);
  }
  static extractMessage(t) {
    var n, r;
    return (
      ((r = (n = t.errors) == null ? void 0 : n[0]) == null
        ? void 0
        : r.message) ?? `GraphQL Error (Code: ${t.status})`
    );
  }
}
var il = { exports: {} };
(function (e, t) {
  var n = typeof self < "u" ? self : Vd,
    r = (function () {
      function o() {
        (this.fetch = !1), (this.DOMException = n.DOMException);
      }
      return (o.prototype = n), new o();
    })();
  (function (o) {
    (function (s) {
      var l = {
        searchParams: "URLSearchParams" in o,
        iterable: "Symbol" in o && "iterator" in Symbol,
        blob:
          "FileReader" in o &&
          "Blob" in o &&
          (function () {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          })(),
        formData: "FormData" in o,
        arrayBuffer: "ArrayBuffer" in o,
      };
      function u(E) {
        return E && DataView.prototype.isPrototypeOf(E);
      }
      if (l.arrayBuffer)
        var a = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          c =
            ArrayBuffer.isView ||
            function (E) {
              return E && a.indexOf(Object.prototype.toString.call(E)) > -1;
            };
      function f(E) {
        if (
          (typeof E != "string" && (E = String(E)),
          /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(E))
        )
          throw new TypeError("Invalid character in header field name");
        return E.toLowerCase();
      }
      function p(E) {
        return typeof E != "string" && (E = String(E)), E;
      }
      function y(E) {
        var T = {
          next: function () {
            var L = E.shift();
            return { done: L === void 0, value: L };
          },
        };
        return (
          l.iterable &&
            (T[Symbol.iterator] = function () {
              return T;
            }),
          T
        );
      }
      function v(E) {
        (this.map = {}),
          E instanceof v
            ? E.forEach(function (T, L) {
                this.append(L, T);
              }, this)
            : Array.isArray(E)
            ? E.forEach(function (T) {
                this.append(T[0], T[1]);
              }, this)
            : E &&
              Object.getOwnPropertyNames(E).forEach(function (T) {
                this.append(T, E[T]);
              }, this);
      }
      (v.prototype.append = function (E, T) {
        (E = f(E)), (T = p(T));
        var L = this.map[E];
        this.map[E] = L ? L + ", " + T : T;
      }),
        (v.prototype.delete = function (E) {
          delete this.map[f(E)];
        }),
        (v.prototype.get = function (E) {
          return (E = f(E)), this.has(E) ? this.map[E] : null;
        }),
        (v.prototype.has = function (E) {
          return this.map.hasOwnProperty(f(E));
        }),
        (v.prototype.set = function (E, T) {
          this.map[f(E)] = p(T);
        }),
        (v.prototype.forEach = function (E, T) {
          for (var L in this.map)
            this.map.hasOwnProperty(L) && E.call(T, this.map[L], L, this);
        }),
        (v.prototype.keys = function () {
          var E = [];
          return (
            this.forEach(function (T, L) {
              E.push(L);
            }),
            y(E)
          );
        }),
        (v.prototype.values = function () {
          var E = [];
          return (
            this.forEach(function (T) {
              E.push(T);
            }),
            y(E)
          );
        }),
        (v.prototype.entries = function () {
          var E = [];
          return (
            this.forEach(function (T, L) {
              E.push([L, T]);
            }),
            y(E)
          );
        }),
        l.iterable && (v.prototype[Symbol.iterator] = v.prototype.entries);
      function x(E) {
        if (E.bodyUsed) return Promise.reject(new TypeError("Already read"));
        E.bodyUsed = !0;
      }
      function _(E) {
        return new Promise(function (T, L) {
          (E.onload = function () {
            T(E.result);
          }),
            (E.onerror = function () {
              L(E.error);
            });
        });
      }
      function m(E) {
        var T = new FileReader(),
          L = _(T);
        return T.readAsArrayBuffer(E), L;
      }
      function d(E) {
        var T = new FileReader(),
          L = _(T);
        return T.readAsText(E), L;
      }
      function h(E) {
        for (
          var T = new Uint8Array(E), L = new Array(T.length), W = 0;
          W < T.length;
          W++
        )
          L[W] = String.fromCharCode(T[W]);
        return L.join("");
      }
      function w(E) {
        if (E.slice) return E.slice(0);
        var T = new Uint8Array(E.byteLength);
        return T.set(new Uint8Array(E)), T.buffer;
      }
      function N() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (E) {
            (this._bodyInit = E),
              E
                ? typeof E == "string"
                  ? (this._bodyText = E)
                  : l.blob && Blob.prototype.isPrototypeOf(E)
                  ? (this._bodyBlob = E)
                  : l.formData && FormData.prototype.isPrototypeOf(E)
                  ? (this._bodyFormData = E)
                  : l.searchParams && URLSearchParams.prototype.isPrototypeOf(E)
                  ? (this._bodyText = E.toString())
                  : l.arrayBuffer && l.blob && u(E)
                  ? ((this._bodyArrayBuffer = w(E.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : l.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(E) || c(E))
                  ? (this._bodyArrayBuffer = w(E))
                  : (this._bodyText = E = Object.prototype.toString.call(E))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                (typeof E == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : l.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(E) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          l.blob &&
            ((this.blob = function () {
              var E = x(this);
              if (E) return E;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? x(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(m);
            })),
          (this.text = function () {
            var E = x(this);
            if (E) return E;
            if (this._bodyBlob) return d(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(h(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          l.formData &&
            (this.formData = function () {
              return this.text().then(q);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var O = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function R(E) {
        var T = E.toUpperCase();
        return O.indexOf(T) > -1 ? T : E;
      }
      function D(E, T) {
        T = T || {};
        var L = T.body;
        if (E instanceof D) {
          if (E.bodyUsed) throw new TypeError("Already read");
          (this.url = E.url),
            (this.credentials = E.credentials),
            T.headers || (this.headers = new v(E.headers)),
            (this.method = E.method),
            (this.mode = E.mode),
            (this.signal = E.signal),
            !L && E._bodyInit != null && ((L = E._bodyInit), (E.bodyUsed = !0));
        } else this.url = String(E);
        if (
          ((this.credentials =
            T.credentials || this.credentials || "same-origin"),
          (T.headers || !this.headers) && (this.headers = new v(T.headers)),
          (this.method = R(T.method || this.method || "GET")),
          (this.mode = T.mode || this.mode || null),
          (this.signal = T.signal || this.signal),
          (this.referrer = null),
          (this.method === "GET" || this.method === "HEAD") && L)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(L);
      }
      D.prototype.clone = function () {
        return new D(this, { body: this._bodyInit });
      };
      function q(E) {
        var T = new FormData();
        return (
          E.trim()
            .split("&")
            .forEach(function (L) {
              if (L) {
                var W = L.split("="),
                  C = W.shift().replace(/\+/g, " "),
                  P = W.join("=").replace(/\+/g, " ");
                T.append(decodeURIComponent(C), decodeURIComponent(P));
              }
            }),
          T
        );
      }
      function j(E) {
        var T = new v(),
          L = E.replace(/\r?\n[\t ]+/g, " ");
        return (
          L.split(/\r?\n/).forEach(function (W) {
            var C = W.split(":"),
              P = C.shift().trim();
            if (P) {
              var U = C.join(":").trim();
              T.append(P, U);
            }
          }),
          T
        );
      }
      N.call(D.prototype);
      function H(E, T) {
        T || (T = {}),
          (this.type = "default"),
          (this.status = T.status === void 0 ? 200 : T.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in T ? T.statusText : "OK"),
          (this.headers = new v(T.headers)),
          (this.url = T.url || ""),
          this._initBody(E);
      }
      N.call(H.prototype),
        (H.prototype.clone = function () {
          return new H(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new v(this.headers),
            url: this.url,
          });
        }),
        (H.error = function () {
          var E = new H(null, { status: 0, statusText: "" });
          return (E.type = "error"), E;
        });
      var Ce = [301, 302, 303, 307, 308];
      (H.redirect = function (E, T) {
        if (Ce.indexOf(T) === -1) throw new RangeError("Invalid status code");
        return new H(null, { status: T, headers: { location: E } });
      }),
        (s.DOMException = o.DOMException);
      try {
        new s.DOMException();
      } catch {
        (s.DOMException = function (T, L) {
          (this.message = T), (this.name = L);
          var W = Error(T);
          this.stack = W.stack;
        }),
          (s.DOMException.prototype = Object.create(Error.prototype)),
          (s.DOMException.prototype.constructor = s.DOMException);
      }
      function pe(E, T) {
        return new Promise(function (L, W) {
          var C = new D(E, T);
          if (C.signal && C.signal.aborted)
            return W(new s.DOMException("Aborted", "AbortError"));
          var P = new XMLHttpRequest();
          function U() {
            P.abort();
          }
          (P.onload = function () {
            var Q = {
              status: P.status,
              statusText: P.statusText,
              headers: j(P.getAllResponseHeaders() || ""),
            };
            Q.url =
              "responseURL" in P
                ? P.responseURL
                : Q.headers.get("X-Request-URL");
            var X = "response" in P ? P.response : P.responseText;
            L(new H(X, Q));
          }),
            (P.onerror = function () {
              W(new TypeError("Network request failed"));
            }),
            (P.ontimeout = function () {
              W(new TypeError("Network request failed"));
            }),
            (P.onabort = function () {
              W(new s.DOMException("Aborted", "AbortError"));
            }),
            P.open(C.method, C.url, !0),
            C.credentials === "include"
              ? (P.withCredentials = !0)
              : C.credentials === "omit" && (P.withCredentials = !1),
            "responseType" in P && l.blob && (P.responseType = "blob"),
            C.headers.forEach(function (Q, X) {
              P.setRequestHeader(X, Q);
            }),
            C.signal &&
              (C.signal.addEventListener("abort", U),
              (P.onreadystatechange = function () {
                P.readyState === 4 && C.signal.removeEventListener("abort", U);
              })),
            P.send(typeof C._bodyInit > "u" ? null : C._bodyInit);
        });
      }
      return (
        (pe.polyfill = !0),
        o.fetch ||
          ((o.fetch = pe), (o.Headers = v), (o.Request = D), (o.Response = H)),
        (s.Headers = v),
        (s.Request = D),
        (s.Response = H),
        (s.fetch = pe),
        Object.defineProperty(s, "__esModule", { value: !0 }),
        s
      );
    })({});
  })(r),
    (r.fetch.ponyfill = !0),
    delete r.fetch.polyfill;
  var i = r;
  (t = i.fetch),
    (t.default = i.fetch),
    (t.fetch = i.fetch),
    (t.Headers = i.Headers),
    (t.Request = i.Request),
    (t.Response = i.Response),
    (e.exports = t);
})(il, il.exports);
var no = il.exports;
const wi = sl(no),
  V0 = Va({ __proto__: null, default: wi }, [no]),
  ln = (e) => {
    let t = {};
    return (
      e &&
        ((typeof Headers < "u" && e instanceof Headers) ||
        (V0 && no.Headers && e instanceof no.Headers)
          ? (t = Xv(e))
          : Array.isArray(e)
          ? e.forEach(([n, r]) => {
              n && r !== void 0 && (t[n] = r);
            })
          : (t = e)),
      t
    );
  },
  ba = (e) => e.replace(/([\s,]|#[^\n\r]+)+/g, " ").trim(),
  $0 = (e) => {
    if (!Array.isArray(e.query)) {
      const r = e,
        i = [`query=${encodeURIComponent(ba(r.query))}`];
      return (
        e.variables &&
          i.push(
            `variables=${encodeURIComponent(
              r.jsonSerializer.stringify(r.variables)
            )}`
          ),
        r.operationName &&
          i.push(`operationName=${encodeURIComponent(r.operationName)}`),
        i.join("&")
      );
    }
    if (typeof e.variables < "u" && !Array.isArray(e.variables))
      throw new Error(
        "Cannot create query with given variable type, array expected"
      );
    const t = e,
      n = e.query.reduce(
        (r, i, o) => (
          r.push({
            query: ba(i),
            variables: t.variables
              ? t.jsonSerializer.stringify(t.variables[o])
              : void 0,
          }),
          r
        ),
        []
      );
    return `query=${encodeURIComponent(t.jsonSerializer.stringify(n))}`;
  },
  q0 = (e) => async (t) => {
    const {
        url: n,
        query: r,
        variables: i,
        operationName: o,
        fetch: s,
        fetchOptions: l,
        middleware: u,
      } = t,
      a = { ...t.headers };
    let c = "",
      f;
    e === "POST"
      ? ((f = K0(r, i, o, l.jsonSerializer)),
        typeof f == "string" && (a["Content-Type"] = "application/json"))
      : (c = $0({
          query: r,
          variables: i,
          operationName: o,
          jsonSerializer: l.jsonSerializer ?? su,
        }));
    const p = { method: e, headers: a, body: f, ...l };
    let y = n,
      v = p;
    if (u) {
      const x = await Promise.resolve(
          u({ ...p, url: n, operationName: o, variables: i })
        ),
        { url: _, ...m } = x;
      (y = _), (v = m);
    }
    return c && (y = `${y}?${c}`), await s(y, v);
  };
class H0 {
  constructor(t, n = {}) {
    (this.url = t),
      (this.requestConfig = n),
      (this.rawRequest = async (...r) => {
        const [i, o, s] = r,
          l = Zv(i, o, s),
          {
            headers: u,
            fetch: a = wi,
            method: c = "POST",
            requestMiddleware: f,
            responseMiddleware: p,
            ...y
          } = this.requestConfig,
          { url: v } = this;
        l.signal !== void 0 && (y.signal = l.signal);
        const { operationName: x } = es(l.query);
        return ts({
          url: v,
          query: l.query,
          variables: l.variables,
          headers: { ...ln(ns(u)), ...ln(l.requestHeaders) },
          operationName: x,
          fetch: a,
          method: c,
          fetchOptions: y,
          middleware: f,
        })
          .then((_) => (p && p(_), _))
          .catch((_) => {
            throw (p && p(_), _);
          });
      });
  }
  async request(t, ...n) {
    const [r, i] = n,
      o = Jv(t, r, i),
      {
        headers: s,
        fetch: l = wi,
        method: u = "POST",
        requestMiddleware: a,
        responseMiddleware: c,
        ...f
      } = this.requestConfig,
      { url: p } = this;
    o.signal !== void 0 && (f.signal = o.signal);
    const { query: y, operationName: v } = es(o.document);
    return ts({
      url: p,
      query: y,
      variables: o.variables,
      headers: { ...ln(ns(s)), ...ln(o.requestHeaders) },
      operationName: v,
      fetch: l,
      method: u,
      fetchOptions: f,
      middleware: a,
    })
      .then((x) => (c && c(x), x.data))
      .catch((x) => {
        throw (c && c(x), x);
      });
  }
  batchRequests(t, n) {
    const r = e0(t, n),
      { headers: i, ...o } = this.requestConfig;
    r.signal !== void 0 && (o.signal = r.signal);
    const s = r.documents.map(({ document: u }) => es(u).query),
      l = r.documents.map(({ variables: u }) => u);
    return ts({
      url: this.url,
      query: s,
      variables: l,
      headers: { ...ln(ns(i)), ...ln(r.requestHeaders) },
      operationName: void 0,
      fetch: this.requestConfig.fetch ?? wi,
      method: this.requestConfig.method || "POST",
      fetchOptions: o,
      middleware: this.requestConfig.requestMiddleware,
    })
      .then(
        (u) => (
          this.requestConfig.responseMiddleware &&
            this.requestConfig.responseMiddleware(u),
          u.data
        )
      )
      .catch((u) => {
        throw (
          (this.requestConfig.responseMiddleware &&
            this.requestConfig.responseMiddleware(u),
          u)
        );
      });
  }
  setHeaders(t) {
    return (this.requestConfig.headers = t), this;
  }
  setHeader(t, n) {
    const { headers: r } = this.requestConfig;
    return r ? (r[t] = n) : (this.requestConfig.headers = { [t]: n }), this;
  }
  setEndpoint(t) {
    return (this.url = t), this;
  }
}
const ts = async (e) => {
  const { query: t, variables: n, fetchOptions: r } = e,
    i = q0(Yv(e.method ?? "post")),
    o = Array.isArray(e.query),
    s = await i(e),
    l = await G0(s, r.jsonSerializer ?? su),
    u = Array.isArray(l) ? !l.some(({ data: c }) => !c) : !!l.data,
    a =
      Array.isArray(l) ||
      !l.errors ||
      (Array.isArray(l.errors) && !l.errors.length) ||
      r.errorPolicy === "all" ||
      r.errorPolicy === "ignore";
  if (s.ok && a && u) {
    const { errors: c, ...f } = (Array.isArray(l), l),
      p = r.errorPolicy === "ignore" ? f : l;
    return { ...(o ? { data: p } : p), headers: s.headers, status: s.status };
  } else {
    const c = typeof l == "string" ? { error: l } : l;
    throw new ur(
      { ...c, status: s.status, headers: s.headers },
      { query: t, variables: n }
    );
  }
};
async function W0(e, t, ...n) {
  const r = t0(e, t, ...n);
  return new H0(r.url).request({ ...r });
}
const K0 = (e, t, n, r) => {
    const i = r ?? su;
    if (!Array.isArray(e))
      return i.stringify({ query: e, variables: t, operationName: n });
    if (typeof t < "u" && !Array.isArray(t))
      throw new Error(
        "Cannot create request body with given variable type, array expected"
      );
    const o = e.reduce(
      (s, l, u) => (s.push({ query: l, variables: t ? t[u] : void 0 }), s),
      []
    );
    return i.stringify(o);
  },
  G0 = async (e, t) => {
    let n;
    return (
      e.headers.forEach((r, i) => {
        i.toLowerCase() === "content-type" && (n = r);
      }),
      n &&
      (n.toLowerCase().startsWith("application/json") ||
        n.toLowerCase().startsWith("application/graphql+json") ||
        n.toLowerCase().startsWith("application/graphql-response+json"))
        ? t.parse(await e.text())
        : e.text()
    );
  },
  ns = (e) => (typeof e == "function" ? e() : e),
  Y0 = (() => {
    let e = null;
    return () => (
      e ||
        (e = new Uv({
          defaultOptions: {
            queries: {
              staleTime: 1 / 0,
              cacheTime: 1 / 0,
              refetchOnMount: !1,
              refetchOnReconnect: !1,
              refetchOnWindowFocus: !1,
            },
          },
        })),
      e
    );
  })(),
  X0 = "/",
  jd = (e, t = {}) => W0(X0, e, t),
  Md = { PRODUCTS: "PRODUCTS" },
  za = "/assets/main-DkQhl7ed.webp",
  Ud = "/assets/logo-BrsaoOC6.png",
  J0 = "/assets/main_img_01-BzvMkuOB.jpeg",
  Z0 = "/assets/main_img_02-RxixQSrW.jpeg",
  ey = () =>
    g.jsx("section", {
      children: g.jsxs("div", {
        className:
          "md:flex flex-wrap justify-center bg-[#fafafa] md:border-b border-b-black/10",
        children: [
          g.jsxs(se, {
            to: "",
            className:
              "md:w-full xl:w-1/3 mx-auto text-center border-b md:border-b border-black/10 lg:border-r-0 xl:border-b-0 xl:border-r pt-[46px] md:pt-[51px] lg:pt-[56px]",
            children: [
              g.jsx("h3", {
                className:
                  "leading-[40px] text-[32px] font-600 lg:leading-[50px] lg:pb-0",
                children: "Tadpole",
              }),
              g.jsx("p", {
                className:
                  "text-[14px] lg:text-[16px] text-opal-grey1 font-500 leading-[24px] pb-[18px] md:pb-[18px] lg:pb-[18px]",
                children: "The tiny webcam with a clip",
              }),
              g.jsx("div", {
                className:
                  "inline-flex justify-center items-center text-[16px] text-white bg-[#000] h-[32px] lg:h-[40px] px-5 rounded-full mb-[46px]",
                children: "Now $129",
              }),
              g.jsx("img", {
                src: J0,
                alt: "main image1",
                className: "w-[237px]  mx-auto",
              }),
            ],
          }),
          g.jsxs(se, {
            to: "",
            className:
              "md:w-1/2 xl:w-1/3 mx-auto text-center min-h-[416px] md:min-h-[376px] lg:min-h-[552px]  border-b md:border-b-0 border-black/10 md:border-r pt-[46px] md:pt-[51px] lg:pt-[56px]",
            children: [
              g.jsx("h3", {
                className:
                  "leading-[40px] text-[32px] font-600 lg:leading-[50px] lg:pb-0",
                children: "Granen",
              }),
              g.jsx("p", {
                className:
                  "text-[14px] lg:text-[16px] text-opal-grey1 font-500 leading-[24px] pb-[18px] md:pb-[18px] lg:pb-[18px]",
                children: "The first professional",
              }),
              g.jsx("div", {
                className:
                  "inline-flex justify-center items-center text-[16px] text-white bg-[#000] h-[40px] px-5 rounded-full mb-[46px]",
                children: "$299",
              }),
              g.jsx("img", {
                src: Z0,
                alt: "main image2",
                className: "w-[237px]  mx-auto",
              }),
            ],
          }),
          g.jsxs(se, {
            to: "",
            className: `md:w-1/2 xl:w-1/3 mx-auto text-center min-h-[416px] md:min-h-[376px] lg:min-h-[552px] pt-[46px] md:pt-[51px]
        lg:pt-[56px]`,
            children: [
              g.jsx("h3", {
                className:
                  "leading-[40px] text-[32px] font-600 lg:leading-[50px] pb-1.5 lg:pb-0",
                children: "Composer",
              }),
              g.jsx("p", {
                className:
                  "text-[14px] lg:text-[16px] text-opal-grey1 font-500 leading-[24px] pb-[73px]",
                children: "The magic behind",
              }),
              g.jsx("img", {
                src: Ud,
                alt: "main image3",
                className: "w-[350px]  mx-auto",
              }),
            ],
          }),
        ],
      }),
    }),
  ty = () =>
    g.jsxs(g.Fragment, {
      children: [
        g.jsxs("div", {
          className: "relative",
          children: [
            g.jsx("div", {
              className: "absolute left-0 top-0 w-full h-full",
              children: g.jsx("div", {
                className:
                  "max-w-[1648px] px-4 mx-auto gap-x-4 lg:grid grid-cols-12 h-full",
                children: g.jsx("div", {
                  className: "col-span-10 col-start-2",
                  children: g.jsxs("div", {
                    className: `text-center lg:text-left pt-[157px] md:pt-[170px] lg:pt-[275px] 
            `,
                    children: [
                      g.jsxs("p", {
                        className:
                          "hero-title text-[24px] md:text-[32px] xl:text-[40px] xl:leading-[48px] 4xl:text-[48px] 4xl:leading-[52px] md:leading-[40px] md:font-300 tracking-common text-white font-400 leading-[32px] lg:text-left",
                        children: [
                          g.jsx("span", {
                            className: "y-w block",
                            children: g.jsx("span", {
                              className: "y",
                              children: "First experience",
                            }),
                          }),
                          g.jsx("span", {
                            className: "y-w block",
                            children: g.jsx("span", {
                              className: "y",
                              children: "at Granen Korea.",
                            }),
                          }),
                        ],
                      }),
                      g.jsx("button", {
                        className:
                          "hero-button font-400 inline-flex justify-center items-center text-[16px] mt-[15px] h-[40px] px-5 pt-0 rounded-full bg-[#000] text-white",
                        children: "Available now for $129.",
                      }),
                    ],
                  }),
                }),
              }),
            }),
            g.jsxs("picture", {
              className: "",
              children: [
                g.jsx("source", { srcSet: za }),
                g.jsx("img", { src: za, alt: "Granen MAIN" }),
              ],
            }),
          ],
        }),
        g.jsx(ey, {}),
      ],
    }),
  ny = () => g.jsx(ty, {}),
  ry = ({ product: e }) => {
    const {
      id: t,
      title: n,
      price: r,
      imageUrl: i,
      description: o,
      createdAt: s,
    } = e;
    return g.jsx("li", {
      className: "border border-black p-2.5",
      children: g.jsxs(se, {
        to: `/products/${t}`,
        children: [
          g.jsx("p", { className: "border border-black p-2", children: s }),
          g.jsx("p", { className: "border border-black p-2", children: n }),
          g.jsx("p", { className: "border border-black p-2", children: o }),
          g.jsx("img", {
            src: i,
            alt: e.title,
            className: "object-contain w-full h-[150px]",
          }),
          g.jsxs("span", {
            className: "border border-black p-2",
            children: ["$", r],
          }),
        ],
      }),
    });
  };
var ro = function () {
  return (
    (ro =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    ro.apply(this, arguments)
  );
};
var Si = new Map(),
  ol = new Map(),
  Bd = !0,
  io = !1;
function bd(e) {
  return e.replace(/[\s,]+/g, " ").trim();
}
function iy(e) {
  return bd(e.source.body.substring(e.start, e.end));
}
function oy(e) {
  var t = new Set(),
    n = [];
  return (
    e.definitions.forEach(function (r) {
      if (r.kind === "FragmentDefinition") {
        var i = r.name.value,
          o = iy(r.loc),
          s = ol.get(i);
        s && !s.has(o)
          ? Bd &&
            console.warn(
              "Warning: fragment with name " +
                i +
                ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`
            )
          : s || ol.set(i, (s = new Set())),
          s.add(o),
          t.has(o) || (t.add(o), n.push(r));
      } else n.push(r);
    }),
    ro(ro({}, e), { definitions: n })
  );
}
function sy(e) {
  var t = new Set(e.definitions);
  t.forEach(function (r) {
    r.loc && delete r.loc,
      Object.keys(r).forEach(function (i) {
        var o = r[i];
        o && typeof o == "object" && t.add(o);
      });
  });
  var n = e.loc;
  return n && (delete n.startToken, delete n.endToken), e;
}
function ly(e) {
  var t = bd(e);
  if (!Si.has(t)) {
    var n = Fd(e, {
      experimentalFragmentVariables: io,
      allowLegacyFragmentVariables: io,
    });
    if (!n || n.kind !== "Document")
      throw new Error("Not a valid GraphQL document.");
    Si.set(t, sy(oy(n)));
  }
  return Si.get(t);
}
function ot(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  typeof e == "string" && (e = [e]);
  var r = e[0];
  return (
    t.forEach(function (i, o) {
      i && i.kind === "Document" ? (r += i.loc.source.body) : (r += i),
        (r += e[o + 1]);
    }),
    ly(r)
  );
}
function uy() {
  Si.clear(), ol.clear();
}
function ay() {
  Bd = !1;
}
function cy() {
  io = !0;
}
function fy() {
  io = !1;
}
var Hn = {
  gql: ot,
  resetCaches: uy,
  disableFragmentWarnings: ay,
  enableExperimentalFragmentVariables: cy,
  disableExperimentalFragmentVariables: fy,
};
(function (e) {
  (e.gql = Hn.gql),
    (e.resetCaches = Hn.resetCaches),
    (e.disableFragmentWarnings = Hn.disableFragmentWarnings),
    (e.enableExperimentalFragmentVariables =
      Hn.enableExperimentalFragmentVariables),
    (e.disableExperimentalFragmentVariables =
      Hn.disableExperimentalFragmentVariables);
})(ot || (ot = {}));
ot.default = ot;
const dy = ot`
  query GET_PRODUCTS($cursor: ID, $showDeleted: Boolean) {
    products(cursor: $cursor, showDeleted: $showDeleted) {
      id
      imageUrl
      price
      title
      description
      createdAt
    }
  }
`,
  py = ot`
  query GET_PRODUCT($id: ID!) {
    product(id: $id) {
      id
      imageUrl
      price
      title
      description
      createdAt
    }
  }
`;
ot`
  mutation ADD_PRODUCT(
    $imageUrl: String!
    $price: Int!
    $title: String!
    $description: String!
  ) {
    addProduct(
      imageUrl: $imageUrl
      price: $price
      title: $title
      description: $description
    ) {
      id
      imageUrl
      price
      title
      description
      createdAt
    }
  }
`;
ot`
  mutation UPDATE_PRODUCT(
    $id: ID!
    $imageUrl: String
    $price: Int
    $title: String
    $description: String
  ) {
    updateProduct(
      id: $id
      imageUrl: $imageUrl
      price: $price
      title: $title
      description: $description
    ) {
      id
      imageUrl
      price
      title
      description
      createdAt
    }
  }
`;
ot`
  mutation DELETE_PRODUCT($id: ID!) {
    deleteProduct(id: $id)
  }
`;
const hy = () => {
    var t;
    const { data: e } = Cd(Md.PRODUCTS, () => jd(dy));
    return g.jsxs("div", {
      className: "max-w-[1480px] mx-auto pt-[145px] w-full",
      children: [
        g.jsxs("div", {
          className: "hero-txt",
          children: [
            g.jsxs("h1", {
              className: "heading-1",
              children: [
                g.jsx("span", {
                  className: "y-w block",
                  children: g.jsx("span", { className: "y", children: "Opal" }),
                }),
                g.jsx("span", {
                  className: "y-w block",
                  children: g.jsx("span", {
                    className: "y",
                    children: "Media Kit",
                  }),
                }),
              ],
            }),
            g.jsxs("p", {
              children: [
                g.jsx("span", {
                  className: "y-w block",
                  children: g.jsx("span", {
                    className: "y",
                    children:
                      "Get the basic company facts, stories, investors, photos and answers to",
                  }),
                }),
                g.jsx("span", {
                  className: "y-w block",
                  children: g.jsx("span", {
                    className: "y",
                    children:
                      "the most frequently asked questions. All content downloaded may be",
                  }),
                }),
                g.jsx("span", {
                  className: "y-w block",
                  children: g.jsx("span", {
                    className: "y",
                    children: "used for editorial purposes only.",
                  }),
                }),
              ],
            }),
          ],
        }),
        g.jsx("ul", {
          className: "grid grid-cols-3 gap-x-[20px] gap-y-7.5",
          children:
            (t = e == null ? void 0 : e.products) == null
              ? void 0
              : t.map((n) => g.jsx(ry, { product: n }, n.id)),
        }),
      ],
    });
  },
  my = (e) => {
    console.log(e, "item");
    const {
      title: t,
      description: n,
      imageUrl: r,
      price: i,
      createdAt: o,
    } = e.product;
    return g.jsxs("div", {
      children: [
        g.jsx("h2", { children: "상품 상세" }),
        g.jsx("h3", { children: t }),
        g.jsx("p", { children: n }),
        g.jsx("p", { children: i }),
        g.jsx("p", { children: o }),
        g.jsx("img", { src: r, alt: t }),
      ],
    });
  },
  vy = () => {
    const { id: e } = Km(),
      { data: t } = Cd([Md.PRODUCTS, e], () => jd(py, { id: e }));
    return t ? g.jsx(my, { product: t.product }) : null;
  },
  yy = "/assets/logo_footer-BS58lYyq.png",
  gy = () => {
    const e = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return g.jsx("footer", {
      className: "bg-white  footer-w footer-w-light border-t-[1px] mt-[20px]",
      children: g.jsx("div", {
        className: "mix-blend-difference invert",
        children: g.jsxs("div", {
          className: "px-2",
          children: [
            g.jsx("div", {
              className: "footer relative pt-[31.96px] pb-[24.66px]",
              children: g.jsx("img", {
                src: yy,
                alt: "logo",
                className: "mx-auto",
              }),
            }),
            g.jsxs("div", {
              className:
                "max-w-[1616px] mx-auto mt-[-35px] relative grid grid-cols-12 gap-x-4",
              children: [
                g.jsxs("div", {
                  className:
                    "hidden md:block col-span-4 relative border-t border-t-black/10 group-[.is]/theme-dark:border-t-black/20 pt-[41px] ",
                  children: [
                    g.jsxs("p", {
                      className:
                        "font-600 text-[20px] leading-[28px] mb-[20px] max-w-[254px]",
                      children: [
                        "Subscribe to the ",
                        g.jsx("br", {}),
                        "Granen Newsletter",
                      ],
                    }),
                    g.jsx("p", {
                      className:
                        "text-[13px] leading-[24px] max-w-[247px] mb-[23px]",
                      children:
                        "Latest news, musings, announcements and updates direct to your inbox.",
                    }),
                    g.jsx(se, {
                      to: "",
                      className:
                        "footer-newsletter-link group relative w-[100px] h-10 rounded-[20px] inline-flex will-change-[background-color] bg-black hover:bg-[#000] group-[.is]/theme-dark:hover:bg-[#000] group-hover/theme-dark:deep:fill-white duration-200 transition-colors ease-ease items-center deep:fill-white deep:hover:fill-black",
                      type: "submit",
                      "aria-label": "Submit",
                      children: g.jsx("svg", {
                        viewBox: "0 0 28 20",
                        fill: "#fff",
                        className:
                          "w-[24px] absolute left-[calc(100%-44px)] group-hover:left-[calc(50%-14px)] transition-[left] duration-400 ease-o3   deep:transition-colors deep:duration-300 deep:ease-o3",
                        children: g.jsx("path", {
                          d: "M18,19c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414L23.586,11H2c-0.552,0-1-0.448-1-1s0.448-1,1-1h21.586l-6.293-6.293c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0l8,8c0.097,0.096,0.169,0.208,0.218,0.326C26.973,9.735,27,9.863,27,9.997l0,0c0,0.002,0,0.004,0,0.006l0,0c0,0.134-0.027,0.262-0.075,0.378c-0.049,0.119-0.121,0.23-0.218,0.326l-8,8C18.512,18.902,18.256,19,18,19z",
                        }),
                      }),
                    }),
                  ],
                }),
                g.jsxs("div", {
                  className:
                    "col-span-5 col-start-7 px-2 gap-x-4 border-t border-t-black/10 group-[.is]/theme-dark:border-t-black/20 pt-[37px]",
                  children: [
                    g.jsxs("div", {
                      children: [
                        g.jsx("div", {
                          className:
                            "font-400 text-[13px] text-black/40 mb-[20px]",
                          children: "Products",
                        }),
                        g.jsx(se, {
                          to: "",
                          className:
                            "font-medium text-[13px] text-black hover:text-black/50 mb-[9px]",
                          children: "Tadpole",
                        }),
                        g.jsx(se, {
                          to: "",
                          className:
                            "font-medium text-[13px] text-black hover:text-black/50 mb-[9px]",
                          children: "Granen ai",
                        }),
                        g.jsx(se, {
                          to: "",
                          className:
                            "font-medium text-[13px] text-black hover:text-black/50 mb-[9px]",
                          children: "Composer",
                        }),
                      ],
                    }),
                    g.jsxs("div", {
                      children: [
                        g.jsx("div", {
                          className:
                            "font-400 text-[13px]  text-black/40 mb-[20px]",
                          children: "Company",
                        }),
                        g.jsx(se, {
                          to: "",
                          className:
                            "font-medium text-[13px] text-black hover:text-black/50 mb-[9px]",
                          children: "About",
                        }),
                        g.jsx(se, {
                          to: "",
                          className:
                            "font-medium text-[13px] text-black hover:text-black/50 mb-[9px]",
                          children: "Terms",
                        }),
                        g.jsx(se, {
                          to: "",
                          className:
                            "font-medium text-[13px] text-black hover:text-black/50 mb-[9px]",
                          children: "Privacy",
                        }),
                      ],
                    }),
                    g.jsxs("div", {
                      children: [
                        g.jsx("div", {
                          className:
                            "font-400 text-[13px]  text-black/40 mb-[20px]",
                          children: "Resources",
                        }),
                        g.jsx(se, {
                          to: "mailto:support@opalcamera.com",
                          className:
                            "font-mediumtext-[13px] text-black hover:text-black/50 mb-[9px]",
                          children: "Support",
                        }),
                        g.jsx(se, {
                          to: "",
                          className:
                            "font-medium  text-[13px] text-black hover:text-black/50 mb-[9px]",
                          children: "Media Kit",
                        }),
                        g.jsx(se, {
                          to: "",
                          className:
                            "font-medium  text-[13px] text-black hover:text-black/50 mb-[9px]",
                          children: "Downloads",
                        }),
                        g.jsx(se, {
                          to: "",
                          className:
                            "font-medium  text-[13px] text-black hover:text-black/50 mb-[9px]",
                          children: "Newsletter",
                        }),
                      ],
                    }),
                    g.jsxs("div", {
                      children: [
                        g.jsx("div", {
                          className:
                            "font-400 text-[13px]  text-black/40 mb-[20px]",
                          children: "Social",
                        }),
                        g.jsx(se, {
                          to: "",
                          className:
                            "font-medium  text-[13px] text-black hover:text-black/50 mb-[9px]",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: "Instagram",
                        }),
                        g.jsx(se, {
                          to: "",
                          className:
                            "font-medium  text-[13px] text-black hover:text-black/50 mb-[9px]",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          children: "Twitter",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            g.jsx("div", {
              className:
                "max-w-[1616px] mx-auto md:pt-[64px] grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-4 pt-5",
              children: g.jsxs("div", {
                className:
                  "relative col-span-4 md:col-span-8 lg:col-span-12 items-center grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 xl:grid-cols-10 gap-x-4 leading-[0]",
                children: [
                  g.jsxs("div", {
                    className:
                      "group-[.is]/theme-dark:border-t-black/20 col-span-4 border-t border-t-black/10  text-[14px] font-medium flex justify-between w-full md:pt-0 h-[65px] md:h-[50px] items-center leading-[1] px-2 md:px-0",
                    children: [
                      g.jsx("div", { children: "Granen Camera Inc." }),
                      g.jsx("div", { children: "All rights reserved." }),
                    ],
                  }),
                  g.jsx("div", {
                    className:
                      "items-center md:col-span-4 lg:col-span-8 xl:col-span-6 hidden md:flex justify-end h-[65px] md:h-[50px] leading-[0]",
                    children: g.jsx("button", {
                      onClick: e,
                      "aria-label": "Scroll to top",
                      className:
                        "jump bg-black  hover:bg-[#000] hover:text-white group-[.is]/theme-dark:hover:bg-[#000]  bg-black/10 group-[.is]/theme-dark:child:hover:fill-white transition-colors child:transition-colors duration-200 ease-ease child:duration-200 child:ease-ease w-10 h-10 rounded-full cursor-pointer",
                      children: "TOP",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    });
  },
  xy = [{ title: "products", link: "/products" }],
  Qa =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAAAsCAYAAADxavN6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA2MSURBVHgB7V0LeBXFFT5AIEGeNcgzaBALCIgvCpQWSm2rBRRaqZa2qIitVrQoVnzxYam1Njx81McHfQDWoi2KoG3B6oeAFlsQFahGjYEmpYAEEgrYBJJApv+fmTVzb3b37r17Q+Ln/t/3c++dndfOnJ0558zZIBISSqmW4ADwEbAYPF0iRGgKgDCeAv4C3Kk0joKXSYQIjQkIYQZ4KbgdrFGxuFsiRGgMQPiagV8EXwaPKXc871O+OSkRIqQbEKyu4ONgtfLHDq6wbnVUVlYuwbXD4GrwdnA42EoiREgVEKBscJYRrCDYT2H2qGuyi4CXgxvBh8HLwNPANmAziRDBCxCQk8CJ4CaVHI6A53nUSd11SYLyH5k2HwOvAYeB3ZXHqhzhUwgIwyhwudJWeSr4jk/dXJHzk6iLK+y74PPgZ6QBgfpbgBcq7TK7BWwnEZoOMCGdwDngQRUO0xO0MyKFNugt6CYNCNQ/CCw17VEVuVIiNCpqt01MxCn4+Bb4czDVVUqBReACQz/8A/wVeJsEx5ZmzZp9GDTz9u3be+bk5EzPzMxsHSD7UtT9Gj55yJBt0jg2VFWekAgpgQsePm4H25qkYnA+xvq4V5nCwsL2mLc7srKy9LzBsu6PiraocDgE/h7MEf8O003VE1yqklcf5kgSyM/PP6eiouK/Aev+vunfGWChSaNReLFESBkYv0tUrFHM+TjTrwzmras9bxllZWUjunXrdo6kjtXgbDwVm/0yKa0/Xg9y++8kyaEGXC7hsNPU44bD5nMHOBo8FyzEPW2VCClBaaN2kphd2qAjyIf+vaD1ZGASUnWcF4hevtegjnKvTOhoJj6+C94CDpTUQEEJfFMeGA569fMo/8F9UE3ZbhghHDjXw13SaYQuwFj/TwIgo3Pnzsm6bw6AD4EL0ch+v4xKu5vuBb8EniSpY13QG/LBoUR1oL98wu8To4cWFBTc3a9fv4K4PC3xcZ3olZY6Kw8aOA7UYZegjXeUNq7GmiIrkLbMpS3uWleDg8HOonX4feCb4KMoUxiXn/P0Y9F6sRQXFy/Izc39p+gHfwTYHawWbQf8GXwKdRwW73tl/ingF8BeIO+rDMwHl6PsKgmHoaZPxDawt2hdlELbB3wrUC3o6DQVDHT3/IF6WoA6Twd/ZsqERSU4TpKEiw7aNkC/O4P/dgps3LhxmHWN+vP5Sh8qeIG6+M1Ku6kc5MW10Racq7S/2AsV4GxlnbLxu9Kutlrs2bPnQaWjx7zwBjjA5R7pi74e3Kf88Rx4qqQA09dVVl1sb6X1+wGvsvV0UKS1SNAeLa41oi381/Bk1fh0jHomVwXqmgkFOSD+BW6Rxsf54HNgD/Ob47DbkGpSruiVcB7o6m3A+HAX+R14qVXHB6JXPa5gPUWvNLRgZ4E8oJjupkLBbrgJHzxt4+pdDFaKXrF6mXT29wmUvwDlD5n2mX4t+IjpM8FVmysxV1+68WjEUC0bD56MMhMS7ZQu6AuOMt+pPi0z/Rxn2h2Hemf4WfMfAxlvVf7gapCVoA46uHni85aqH90UFjz/T1pPTucKiq/twb9addEyZZjhGebeW5v7f0bVD6LJs+qfZo0Pd4Z7lHbxOSs065uv6izfKvAb5nrMCmqwATzXtM+43D7gPBVrOd9qtd9PaUuaOK70qtbbtE3SD36dqgufZJ65yY4/8t9rtb/WpPUA3zNpHINh4j5vMSuon4DWGJaB13p1EumDwRUqcRBJIrwAvh6Xxsm+RFKAi4A+AOa5cJR1L14COkFpgXIwBWzhMhYUkifj7iHPXOPWustKv0u5xBsoHfH1GyvfqyY9XkAZ89DZpXwLM5YOXrau2X3jFt7JpTwFdayVjwcqfSQJqNiTwiut9Mes9MVuZd0E9E4VC0cw40H9M9tqLAu8X8VOXCqgQIw1dVIQjlvXPANPEiEJP6i9wtUTUKUnbKGVf5Nfu0qvUqXx9eNziJX2H+Wjyyu9kjo6KsejnaovoPN9yo9RdeNYbMpyu95r0jhn30xwH+9bbV0jAYG851nlYh4ifB+t6nYY6tlt4su76aDOU6zMp1cU0USQRsIPRetbtM7DHD3uBReCD1rW5kvg2+DZ5vdmXNsr6UGpuPtBKxOUoz7Y1/r9tF9m9JcTSwv1a3GXbAc1J2Y68lV5VMMYAEc/485FYyfG6oWR5Ol2q6qq2pWRkXG4efPm9EpQt21TXl6e07p163ZIY5Zj4Hi0P1K8kWl9T+Y1ninWd67+pdZvniDSK9Jf9LjSE+Lr36aAciAonEHC2z4r2jGfKamjAuTyPgeTucu+gN+MZHoSX88SPTHLJH34HOjmZjriV2jNmjUtBw4c2KFr148X8n2SGPSjxgtoR+s7jcmpEhzt4xMOHjzoaWC0atWKD+IxK6lZmzZtKBCOV4DG2lUSHFlBMiltq3zV/GT7S22jGt+pLtB91d8kXYHfzxr/sysooH8CfyR11mkipCqc7OgrIF0Mq328AbyBm0x/XpH0oTQVX2p1dbXKzs6utpKCBFi7nf/bddCyPSjBUSbhcdzQWZQOSN0q7QusyEGtePpje5vv9GRwwekfl4deD94/hfnzYBfRu6kreJJEy4qW3hIJ+KSkAB4hUjAXo72jCfJy66IrhtvaTmlkjB49mitsiZV0ll9+ozYNcrlk1/EOyJcLE42FA26TYV+VOWDa4wJDlYrBQR8EKYgVOeiDfYXUHW3SZUZ1KH51pMrhyBk9GCPFR21yKltmCi4yn+nCPlPnXC7vfhmV9hI4x2P3+R2fnkigH/ROvI6vjjdhMn7PQ/ru+LxKW+UTpG4Ls8E6uGLR+qdVnIM6Nri1qbSD3LGwy6mHq/Cvxjg+2w6GA1Dvqx7tnyzaziC4VR9IUHetGwkfF8UlB4mMo1trJcfZ7WKtgFIHMLofgyRulmD6qB8oXHTuz0LdbyfKrLS7YyZIa5EGwhuGTQV8EdAJG+Pk0nsxFfcWP3EUvBnishMhLy13jgknkTrlTPye6DjRHSh92LFO6gwTzsskCQm0Q8v9cXxlVBgXg9vYH5cjVaon94A3mCQeU9IXW2yucwehnrkJZf9uFeXC4jxU3C0e8ukOx5DjSTkbIvqB3uaW0YkHZUY+tV0kvHBSIBnnuRY3UOWX0bgZGEjyE7F04KKioiAxnMmCLiOvLbXIbUW0wPNpnhDxdIdjxu2ZDm4aezw755hdKPoEzc+zwfI84eFEfh3kcSAn8l3RWyEt/bukTjipe86W9GGx6TsNxlxwvdJhjOtFG4s8iWK02XirDOM3i/kFeakz0q/K+aF+OQ7X1pvVndu7o4b8Gul5Xp0wuyVPlSiYbc13dwFVOtpommhDqaeEA5+KhX5BCqaDnGT6Pu8U/QTFPBSZmZkNoQu/6HONx3+LvC7SoEOfedRLd9O3RW/Tgw0rzW9HXaIF/77osLL4ejajHrb1lOhVloEaXHkoHNz+OVnOWNBw4DFn2iKrUBcPXb4nWsg41xTIX5r2q02fbFWCQvaM9ZsBLs7iwZ2OASHrTfoQK99K8e8Hx/O3ou0SghFOD8fvJkRz0+BECS+cxJ4AwkkrjzdAQ4g3WG/F7t69exg3lhea+zDhrmHOjbnt8SGssC6xrxROeiX+Inpl3OFTD+99jGgfYY1pm26fdlLXD+qmfK/rWUkzzJb+FdFvCjg7HGWAaocjnLQdqG79lKqBVZxn9s4uRN3UiZHgQ+Y45Gl4JVTrRD+kjiuMK7qb3l5rxdM3xYFniFaygcTxGAUujU80S/ppovVbBpMkehkt9Bbfvn37AtwbDZYgxoUTUseHa7IYV1qPHj1irFxj6N1vdDlOCrdkrjpUD/4mOshZqdgjzHo+PuRZhzzrTXmuPHwTgWXoF2bs61YX3yAnk4cjC8z9+QkBV93LzX3wYfoorn0K6VXoA8P36BrqJ3qcqFPTw0D9ssKlXuqcXPW51bP9DeZe6Q4cY/LsQtljkgDIU4Ky1GWduS4193XImbf9+y3vFjJfBJaocNis4s7slX7H/UZwa9BKSkpKQhsFjQncwh+t25kpEVKGLUw8ZqSxEsYpTJ2mVlVQOuiBq8MLovWcs4NWgieoIbb4lIH7OBVk/OUCw2yfvNQjh1pJ+RIhPTBCxdXuuEoN9BleDJ6pdJjcEZUabpAmBKXf5S+0+seQuJYu+RhJxFAzJ9iGO1KuREgvlI6Gd8C/8jFSBX8Lc5vSkSphcKM0MaBPMyzB4+dapf/IQ5a5zrdjGSZnhx3mSYT0AwObCf4AnKTMSoHPpxMIlVeYXjJgmBpjNBv0L4ikAjMmK1zusUbVj4Vl2jqlnd4RTgQw2Bco99jPdAgm6+W78n1VE/6jYUrHZd4BFvncC2MZqa+2lQihEVgYMOD0k/HIb5SVTD9e2CAGvk9PJ/iqIO6JpgClX0YbZEjDkH5QBlTQLfVSkOPdCA0ATMzUNK2YBN97uVp9wv9Al4r+KG/TASaiG/iiCocDSr+I1UUiREg3IFgdwUdV8i/JVRjhHioRIjQklPb3Xa70y19BQNcT/9OF6K8mRzhxUPrtwzd9BPNDpd8Fb3JuowifEkD4Orhs+XQbLVL6Fdxo1YzQ+IAgfhncrfRf4BgcCWaEJgcIZS+l//5QhAhpwf8Be7WGSdmz7qIAAAAASUVORK5CYII=",
  Ey = ({ type: e, onClick: t }) => {
    const n = I.useRef(null),
      r = Lr(),
      [i, o] = I.useState(null),
      s = () => {
        const a = i === "dark" ? "light" : "dark";
        o(a),
          window.localStorage.setItem("theme", a),
          (document.body.className = a);
      };
    I.useEffect(() => {
      o(document.body.className);
    }, []);
    const l = () => {
      const a = document.getElementById("logo-image"),
        c = document.getElementById("nav-element"),
        f = document.querySelectorAll(".top-menu button svg");
      window.scrollY > 200 || r.pathname !== "/"
        ? ((a.src = Ud),
          c.classList.remove("text-white"),
          c.classList.add("text-black", "border-b-[1px]", "bg-white"),
          f.forEach((p) => {
            p.style.stroke = "#000";
          }))
        : ((a.src = Qa),
          c.classList.remove("text-black", "border-b-[1px]", "bg-white"),
          c.classList.add("text-white"),
          f.forEach((p) => {
            p.style.stroke = "#fff";
          }));
    };
    I.useEffect(
      () => (
        l(),
        window.addEventListener("scroll", l),
        () => {
          window.removeEventListener("scroll", l);
        }
      ),
      [r.pathname]
    );
    const u =
      "text-base font-normal block leading-[78px] whitespace-nowrap relative nav-element";
    return g.jsx("nav", {
      id: "nav-element",
      ref: n,
      className:
        "text-white font-medium fixed left-0 top-[40px] w-full z-[9994] transition-colors duration-300 ease-in-out",
      children: g.jsx("div", {
        className: "wrap-ml relative z-10 max-w-[1480px] w-full mx-auto",
        children: g.jsxs("div", {
          className: "gap-x-4 grid grid-cols-12",
          children: [
            g.jsx("div", {
              className: "lg:col-span-2 xl:col-span-1",
              children: g.jsx(se, {
                to: "/",
                "aria-label": "eigne korea",
                className: "w-[108px] block mt-[29px]",
                children: "Granen.AI",
              }),
            }),
            g.jsx("div", {
              className: "col-span-6 xl:col-span-9",
              children: g.jsx("ul", {
                className: "flex xl:grid grid-cols-7 xl:col-span-6 xl:gap-x-4",
                children: xy.map((a, c) => {
                  const { title: f, link: p } = a;
                  return g.jsx(
                    "li",
                    {
                      className:
                        "first:w-[27.5%] second:w-[27.5%] xl:!w-[initial] xl:col-span-1 relative",
                      children: g.jsx(
                        se,
                        {
                          to: p,
                          className: e === "normal" ? u : u + "text-black",
                          onClick: t || (() => {}),
                          children: f,
                        },
                        f
                      ),
                    },
                    a.link + c
                  );
                }),
              }),
            }),
            g.jsxs("div", {
              className: "grid grid-cols-2 gap-x-4 col-span-2 flex-row-reverse",
              children: [
                g.jsx("div", {
                  className: "col-span-1",
                  children: g.jsx(se, {
                    to: "/",
                    "aria-label": "eigne korea",
                    className: "w-[108px] block mt-[29px]",
                    children: g.jsx("img", {
                      src: Qa,
                      id: "logo-image",
                      alt: "아이겐 코리아",
                      className: "transition duration-300 ease-in-out",
                    }),
                  }),
                }),
                g.jsxs("div", {
                  className: "flex items-center justify-center top-menu",
                  children: [
                    g.jsx("button", {
                      onClick: s,
                      className: "px-2",
                      "aria-label": "Change Theme",
                      children: g.jsxs("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        className: "transition-all duration-300 ease-out",
                        role: "img",
                        stroke: "#fff",
                        fill: "transparent",
                        children: [
                          g.jsx("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "1.5",
                            d: "M11 19c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z",
                          }),
                          g.jsx("path", {
                            strokeLinejoin: "round",
                            strokeWidth: "1.5",
                            d: "M22 22l-5-5",
                          }),
                        ],
                      }),
                    }),
                    g.jsx("button", {
                      "aria-label": "Change Theme",
                      className: "px-2",
                      children: g.jsxs("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        className: "transition-all duration-300 ease-out",
                        role: "img",
                        stroke: "#fff",
                        children: [
                          g.jsx("circle", {
                            cx: "11.5",
                            cy: "6.5",
                            r: "3.75",
                            strokeWidth: "1.5",
                          }),
                          g.jsx("path", {
                            strokeWidth: "1.5",
                            d: "M1.78 21.25c.382-4.758 4.364-8.5 9.22-8.5h1c4.856 0 8.838 3.742 9.22 8.5H1.78z",
                          }),
                        ],
                      }),
                    }),
                    g.jsx("button", {
                      "aria-label": "Change Theme",
                      className: "px-2",
                      children: g.jsx("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        fill: "transparent",
                        viewBox: "0 0 24 24",
                        className: "transition-all duration-300 ease-out",
                        role: "img",
                        children: g.jsx("path", {
                          d: "M23.073 22.253l-1.946-14.31c-.04-.38-.368-.667-.758-.667h-3.656v-1.74c0-2.543-2.115-4.613-4.713-4.613-2.599 0-4.713 2.07-4.713 4.613v1.74H3.63c-.39 0-.717.288-.758.667L.927 22.253c-.022.21.047.42.192.577.144.157.35.247.566.247h20.63c.216 0 .421-.09.566-.247.145-.157.214-.366.192-.576zM8.81 5.537c0-1.72 1.431-3.122 3.19-3.122 1.758 0 3.19 1.401 3.19 3.122v1.74H8.81v-1.74zm-6.28 16.05l1.786-12.82h2.97v1.644c0 .412.342.746.762.746.421 0 .762-.334.762-.746V8.767h6.38v1.643c0 .412.34.746.761.746.42 0 .762-.334.762-.746V8.767h2.97l1.786 12.819H2.53z",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
  },
  wy = () =>
    g.jsx(g.Fragment, {
      children: g.jsxs("header", {
        children: [
          g.jsx("div", {
            className:
              "ease-o6 !duration-400 transition-[height] lg:text-[14px] text-[12px] w-full relative lg:fixed z-[9994] overflow-hidden bg-[#3A2522]",
            children: g.jsx("div", {
              className: "h-[40px] flex items-center justify-center",
              children: g.jsxs("div", {
                className: "text-white",
                children: [
                  "Take $50 off any order $200 USD or more with code ",
                  g.jsx("b", { children: "ANY50" }),
                ],
              }),
            }),
          }),
          g.jsx(Ey, { type: "normal" }),
        ],
      }),
    }),
  Sy = () =>
    g.jsxs(g.Fragment, {
      children: [
        g.jsx(wy, {}),
        g.jsx("main", {
          className:
            "transition duration-500 bg-white dark:bg-[#111111] text-black dark:text-white",
          children: g.jsx("div", {
            className: "flex flex-col  m-auto",
            children: g.jsx(I.Suspense, {
              fallback: "loading...",
              children: g.jsx(uv, {}),
            }),
          }),
        }),
        g.jsx(gy, {}),
      ],
    }),
  ky = [
    {
      path: "/",
      element: g.jsx(Sy, {}),
      children: [
        { path: "/", element: g.jsx(ny, {}), index: !0 },
        { path: "/products", element: g.jsx(hy, {}), index: !0 },
        { path: "/products/:id", element: g.jsx(vy, {}) },
      ],
    },
  ];
var zd = { exports: {} };
zd.exports = {
  ReactQueryDevtools: function () {
    return null;
  },
  ReactQueryDevtoolsPanel: function () {
    return null;
  },
};
var Cy = zd.exports;
const Ny = () => {
    const e = Gm(ky),
      t = Y0();
    return g.jsx($v, {
      client: t,
      children: g.jsxs(g.Fragment, {
        children: [e, g.jsx(Cy.ReactQueryDevtools, { initialIsOpen: !1 })],
      }),
    });
  },
  Qd = document.createElement("div");
Qd.id = "modal-root";
document.body.appendChild(Qd);
const Ty = document.getElementById("root"),
  Oy = id(Ty);
async function _y() {}
_y().then(() => {
  Oy.render(
    g.jsx(we.StrictMode, { children: g.jsx(vv, { children: g.jsx(Ny, {}) }) })
  );
});
