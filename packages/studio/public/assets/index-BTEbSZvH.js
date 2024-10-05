function kv(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o)
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] },
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  )
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o)
  new MutationObserver(o => {
    for (const i of o)
      if (i.type === 'childList')
        for (const l of i.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const i = {}
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (i.credentials = 'omit')
          : (i.credentials = 'same-origin'),
      i
    )
  }
  function r(o) {
    if (o.ep) return
    o.ep = !0
    const i = n(o)
    fetch(o.href, i)
  }
})()
function Ra(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var $d = { exports: {} },
  el = {},
  Bd = { exports: {} },
  B = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var So = Symbol.for('react.element'),
  Nv = Symbol.for('react.portal'),
  Tv = Symbol.for('react.fragment'),
  _v = Symbol.for('react.strict_mode'),
  Av = Symbol.for('react.profiler'),
  Lv = Symbol.for('react.provider'),
  Ov = Symbol.for('react.context'),
  zv = Symbol.for('react.forward_ref'),
  Iv = Symbol.for('react.suspense'),
  Mv = Symbol.for('react.memo'),
  Dv = Symbol.for('react.lazy'),
  Xu = Symbol.iterator
function jv(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Xu && e[Xu]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var Wd = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Hd = Object.assign,
  Vd = {}
function Sr(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Vd),
    (this.updater = n || Wd)
}
Sr.prototype.isReactComponent = {}
Sr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
Sr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function Ud() {}
Ud.prototype = Sr.prototype
function ka(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = Vd),
    (this.updater = n || Wd)
}
var Na = (ka.prototype = new Ud())
Na.constructor = ka
Hd(Na, Sr.prototype)
Na.isPureReactComponent = !0
var Qu = Array.isArray,
  Gd = Object.prototype.hasOwnProperty,
  Ta = { current: null },
  Yd = { key: !0, ref: !0, __self: !0, __source: !0 }
function Kd(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Gd.call(t, r) && !Yd.hasOwnProperty(r) && (o[r] = t[r])
  var s = arguments.length - 2
  if (s === 1) o.children = n
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2]
    o.children = a
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r])
  return { $$typeof: So, type: e, key: i, ref: l, props: o, _owner: Ta.current }
}
function bv(e, t) {
  return {
    $$typeof: So,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function _a(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === So
}
function Fv(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var Zu = /\/+/g
function Ll(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Fv('' + e.key)
    : t.toString(36)
}
function oi(e, t, n, r, o) {
  var i = typeof e
  ;(i === 'undefined' || i === 'boolean') && (e = null)
  var l = !1
  if (e === null) l = !0
  else
    switch (i) {
      case 'string':
      case 'number':
        l = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case So:
          case Nv:
            l = !0
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + Ll(l, 0) : r),
      Qu(o)
        ? ((n = ''),
          e != null && (n = e.replace(Zu, '$&/') + '/'),
          oi(o, t, n, '', function (u) {
            return u
          }))
        : o != null &&
          (_a(o) &&
            (o = bv(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ''
                  : ('' + o.key).replace(Zu, '$&/') + '/') +
                e,
            )),
          t.push(o)),
      1
    )
  if (((l = 0), (r = r === '' ? '.' : r + ':'), Qu(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s]
      var a = r + Ll(i, s)
      l += oi(i, t, n, a, o)
    }
  else if (((a = jv(e)), typeof a == 'function'))
    for (e = a.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Ll(i, s++)), (l += oi(i, t, n, a, o))
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    )
  return l
}
function Lo(e, t, n) {
  if (e == null) return e
  var r = [],
    o = 0
  return (
    oi(e, r, '', '', function (i) {
      return t.call(n, i, o++)
    }),
    r
  )
}
function $v(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var Oe = { current: null },
  ii = { transition: null },
  Bv = {
    ReactCurrentDispatcher: Oe,
    ReactCurrentBatchConfig: ii,
    ReactCurrentOwner: Ta,
  }
function Xd() {
  throw Error('act(...) is not supported in production builds of React.')
}
B.Children = {
  map: Lo,
  forEach: function (e, t, n) {
    Lo(
      e,
      function () {
        t.apply(this, arguments)
      },
      n,
    )
  },
  count: function (e) {
    var t = 0
    return (
      Lo(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      Lo(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!_a(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      )
    return e
  },
}
B.Component = Sr
B.Fragment = Tv
B.Profiler = Av
B.PureComponent = ka
B.StrictMode = _v
B.Suspense = Iv
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bv
B.act = Xd
B.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    )
  var r = Hd({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Ta.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps
    for (a in t)
      Gd.call(t, a) &&
        !Yd.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
  }
  var a = arguments.length - 2
  if (a === 1) r.children = n
  else if (1 < a) {
    s = Array(a)
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2]
    r.children = s
  }
  return { $$typeof: So, type: e.type, key: o, ref: i, props: r, _owner: l }
}
B.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ov,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Lv, _context: e }),
    (e.Consumer = e)
  )
}
B.createElement = Kd
B.createFactory = function (e) {
  var t = Kd.bind(null, e)
  return (t.type = e), t
}
B.createRef = function () {
  return { current: null }
}
B.forwardRef = function (e) {
  return { $$typeof: zv, render: e }
}
B.isValidElement = _a
B.lazy = function (e) {
  return { $$typeof: Dv, _payload: { _status: -1, _result: e }, _init: $v }
}
B.memo = function (e, t) {
  return { $$typeof: Mv, type: e, compare: t === void 0 ? null : t }
}
B.startTransition = function (e) {
  var t = ii.transition
  ii.transition = {}
  try {
    e()
  } finally {
    ii.transition = t
  }
}
B.unstable_act = Xd
B.useCallback = function (e, t) {
  return Oe.current.useCallback(e, t)
}
B.useContext = function (e) {
  return Oe.current.useContext(e)
}
B.useDebugValue = function () {}
B.useDeferredValue = function (e) {
  return Oe.current.useDeferredValue(e)
}
B.useEffect = function (e, t) {
  return Oe.current.useEffect(e, t)
}
B.useId = function () {
  return Oe.current.useId()
}
B.useImperativeHandle = function (e, t, n) {
  return Oe.current.useImperativeHandle(e, t, n)
}
B.useInsertionEffect = function (e, t) {
  return Oe.current.useInsertionEffect(e, t)
}
B.useLayoutEffect = function (e, t) {
  return Oe.current.useLayoutEffect(e, t)
}
B.useMemo = function (e, t) {
  return Oe.current.useMemo(e, t)
}
B.useReducer = function (e, t, n) {
  return Oe.current.useReducer(e, t, n)
}
B.useRef = function (e) {
  return Oe.current.useRef(e)
}
B.useState = function (e) {
  return Oe.current.useState(e)
}
B.useSyncExternalStore = function (e, t, n) {
  return Oe.current.useSyncExternalStore(e, t, n)
}
B.useTransition = function () {
  return Oe.current.useTransition()
}
B.version = '18.3.1'
Bd.exports = B
var c = Bd.exports
const Y = Ra(c),
  Wv = kv({ __proto__: null, default: Y }, [c])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hv = c,
  Vv = Symbol.for('react.element'),
  Uv = Symbol.for('react.fragment'),
  Gv = Object.prototype.hasOwnProperty,
  Yv = Hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Kv = { key: !0, ref: !0, __self: !0, __source: !0 }
function Qd(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (l = t.ref)
  for (r in t) Gv.call(t, r) && !Kv.hasOwnProperty(r) && (o[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r])
  return { $$typeof: Vv, type: e, key: i, ref: l, props: o, _owner: Yv.current }
}
el.Fragment = Uv
el.jsx = Qd
el.jsxs = Qd
$d.exports = el
var S = $d.exports,
  Zd = { exports: {} },
  Ye = {},
  Jd = { exports: {} },
  qd = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(N, L) {
    var z = N.length
    N.push(L)
    e: for (; 0 < z; ) {
      var G = (z - 1) >>> 1,
        re = N[G]
      if (0 < o(re, L)) (N[G] = L), (N[z] = re), (z = G)
      else break e
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0]
  }
  function r(N) {
    if (N.length === 0) return null
    var L = N[0],
      z = N.pop()
    if (z !== L) {
      N[0] = z
      e: for (var G = 0, re = N.length, pt = re >>> 1; G < pt; ) {
        var Ce = 2 * (G + 1) - 1,
          ht = N[Ce],
          _e = Ce + 1,
          M = N[_e]
        if (0 > o(ht, z))
          _e < re && 0 > o(M, ht)
            ? ((N[G] = M), (N[_e] = z), (G = _e))
            : ((N[G] = ht), (N[Ce] = z), (G = Ce))
        else if (_e < re && 0 > o(M, z)) (N[G] = M), (N[_e] = z), (G = _e)
        else break e
      }
    }
    return L
  }
  function o(N, L) {
    var z = N.sortIndex - L.sortIndex
    return z !== 0 ? z : N.id - L.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance
    e.unstable_now = function () {
      return i.now()
    }
  } else {
    var l = Date,
      s = l.now()
    e.unstable_now = function () {
      return l.now() - s
    }
  }
  var a = [],
    u = [],
    d = 1,
    f = null,
    p = 3,
    y = !1,
    w = !1,
    g = !1,
    C = typeof setTimeout == 'function' ? setTimeout : null,
    m = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function v(N) {
    for (var L = n(u); L !== null; ) {
      if (L.callback === null) r(u)
      else if (L.startTime <= N) r(u), (L.sortIndex = L.expirationTime), t(a, L)
      else break
      L = n(u)
    }
  }
  function x(N) {
    if (((g = !1), v(N), !w))
      if (n(a) !== null) (w = !0), I(E)
      else {
        var L = n(u)
        L !== null && H(x, L.startTime - N)
      }
  }
  function E(N, L) {
    ;(w = !1), g && ((g = !1), m(k), (k = -1)), (y = !0)
    var z = p
    try {
      for (
        v(L), f = n(a);
        f !== null && (!(f.expirationTime > L) || (N && !D()));

      ) {
        var G = f.callback
        if (typeof G == 'function') {
          ;(f.callback = null), (p = f.priorityLevel)
          var re = G(f.expirationTime <= L)
          ;(L = e.unstable_now()),
            typeof re == 'function' ? (f.callback = re) : f === n(a) && r(a),
            v(L)
        } else r(a)
        f = n(a)
      }
      if (f !== null) var pt = !0
      else {
        var Ce = n(u)
        Ce !== null && H(x, Ce.startTime - L), (pt = !1)
      }
      return pt
    } finally {
      ;(f = null), (p = z), (y = !1)
    }
  }
  var R = !1,
    P = null,
    k = -1,
    A = 5,
    _ = -1
  function D() {
    return !(e.unstable_now() - _ < A)
  }
  function $() {
    if (P !== null) {
      var N = e.unstable_now()
      _ = N
      var L = !0
      try {
        L = P(!0, N)
      } finally {
        L ? b() : ((R = !1), (P = null))
      }
    } else R = !1
  }
  var b
  if (typeof h == 'function')
    b = function () {
      h($)
    }
  else if (typeof MessageChannel < 'u') {
    var F = new MessageChannel(),
      W = F.port2
    ;(F.port1.onmessage = $),
      (b = function () {
        W.postMessage(null)
      })
  } else
    b = function () {
      C($, 0)
    }
  function I(N) {
    ;(P = N), R || ((R = !0), b())
  }
  function H(N, L) {
    k = C(function () {
      N(e.unstable_now())
    }, L)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null
    }),
    (e.unstable_continueExecution = function () {
      w || y || ((w = !0), I(E))
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (A = 0 < N ? Math.floor(1e3 / N) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a)
    }),
    (e.unstable_next = function (N) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var L = 3
          break
        default:
          L = p
      }
      var z = p
      p = L
      try {
        return N()
      } finally {
        p = z
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, L) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          N = 3
      }
      var z = p
      p = N
      try {
        return L()
      } finally {
        p = z
      }
    }),
    (e.unstable_scheduleCallback = function (N, L, z) {
      var G = e.unstable_now()
      switch (
        (typeof z == 'object' && z !== null
          ? ((z = z.delay), (z = typeof z == 'number' && 0 < z ? G + z : G))
          : (z = G),
        N)
      ) {
        case 1:
          var re = -1
          break
        case 2:
          re = 250
          break
        case 5:
          re = 1073741823
          break
        case 4:
          re = 1e4
          break
        default:
          re = 5e3
      }
      return (
        (re = z + re),
        (N = {
          id: d++,
          callback: L,
          priorityLevel: N,
          startTime: z,
          expirationTime: re,
          sortIndex: -1,
        }),
        z > G
          ? ((N.sortIndex = z),
            t(u, N),
            n(a) === null &&
              N === n(u) &&
              (g ? (m(k), (k = -1)) : (g = !0), H(x, z - G)))
          : ((N.sortIndex = re), t(a, N), w || y || ((w = !0), I(E))),
        N
      )
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (N) {
      var L = p
      return function () {
        var z = p
        p = L
        try {
          return N.apply(this, arguments)
        } finally {
          p = z
        }
      }
    })
})(qd)
Jd.exports = qd
var Xv = Jd.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Qv = c,
  Ge = Xv
function T(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var ef = new Set(),
  eo = {}
function Mn(e, t) {
  cr(e, t), cr(e + 'Capture', t)
}
function cr(e, t) {
  for (eo[e] = t, e = 0; e < t.length; e++) ef.add(t[e])
}
var It = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ys = Object.prototype.hasOwnProperty,
  Zv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ju = {},
  qu = {}
function Jv(e) {
  return ys.call(qu, e)
    ? !0
    : ys.call(Ju, e)
      ? !1
      : Zv.test(e)
        ? (qu[e] = !0)
        : ((Ju[e] = !0), !1)
}
function qv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function eg(e, t, n, r) {
  if (t === null || typeof t > 'u' || qv(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function ze(e, t, n, r, o, i, l) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l)
}
var xe = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    xe[e] = new ze(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  xe[t] = new ze(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  xe[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  xe[e] = new ze(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    xe[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  xe[e] = new ze(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  xe[e] = new ze(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  xe[e] = new ze(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  xe[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Aa = /[\-:]([a-z])/g
function La(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Aa, La)
    xe[t] = new ze(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Aa, La)
    xe[t] = new ze(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Aa, La)
  xe[t] = new ze(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  xe[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
xe.xlinkHref = new ze(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  xe[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Oa(e, t, n, r) {
  var o = xe.hasOwnProperty(t) ? xe[t] : null
  ;(o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (eg(t, n, o, r) && (n = null),
    r || o === null
      ? Jv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var $t = Qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Oo = Symbol.for('react.element'),
  Vn = Symbol.for('react.portal'),
  Un = Symbol.for('react.fragment'),
  za = Symbol.for('react.strict_mode'),
  ws = Symbol.for('react.profiler'),
  tf = Symbol.for('react.provider'),
  nf = Symbol.for('react.context'),
  Ia = Symbol.for('react.forward_ref'),
  Ss = Symbol.for('react.suspense'),
  xs = Symbol.for('react.suspense_list'),
  Ma = Symbol.for('react.memo'),
  Vt = Symbol.for('react.lazy'),
  rf = Symbol.for('react.offscreen'),
  ec = Symbol.iterator
function Ar(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (ec && e[ec]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var se = Object.assign,
  Ol
function Fr(e) {
  if (Ol === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Ol = (t && t[1]) || ''
    }
  return (
    `
` +
    Ol +
    e
  )
}
var zl = !1
function Il(e, t) {
  if (!e || zl) return ''
  zl = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var a =
                  `
` + o[l].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    a.includes('<anonymous>') &&
                    (a = a.replace('<anonymous>', e.displayName)),
                  a
                )
              }
            while (1 <= l && 0 <= s)
          break
        }
    }
  } finally {
    ;(zl = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? Fr(e) : ''
}
function tg(e) {
  switch (e.tag) {
    case 5:
      return Fr(e.type)
    case 16:
      return Fr('Lazy')
    case 13:
      return Fr('Suspense')
    case 19:
      return Fr('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Il(e.type, !1)), e
    case 11:
      return (e = Il(e.type.render, !1)), e
    case 1:
      return (e = Il(e.type, !0)), e
    default:
      return ''
  }
}
function Cs(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case Un:
      return 'Fragment'
    case Vn:
      return 'Portal'
    case ws:
      return 'Profiler'
    case za:
      return 'StrictMode'
    case Ss:
      return 'Suspense'
    case xs:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case nf:
        return (e.displayName || 'Context') + '.Consumer'
      case tf:
        return (e._context.displayName || 'Context') + '.Provider'
      case Ia:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case Ma:
        return (
          (t = e.displayName || null), t !== null ? t : Cs(e.type) || 'Memo'
        )
      case Vt:
        ;(t = e._payload), (e = e._init)
        try {
          return Cs(e(t))
        } catch {}
    }
  return null
}
function ng(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return Cs(t)
    case 8:
      return t === za ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function on(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function of(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function rg(e) {
  var t = of(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this)
        },
        set: function (l) {
          ;(r = '' + l), i.call(this, l)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (l) {
          r = '' + l
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function zo(e) {
  e._valueTracker || (e._valueTracker = rg(e))
}
function lf(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = of(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function Si(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Es(e, t) {
  var n = t.checked
  return se({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function tc(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = on(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function sf(e, t) {
  ;(t = t.checked), t != null && Oa(e, 'checked', t, !1)
}
function Ps(e, t) {
  sf(e, t)
  var n = on(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? Rs(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Rs(e, t.type, on(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function nc(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function Rs(e, t, n) {
  ;(t !== 'number' || Si(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var $r = Array.isArray
function nr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + on(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        ;(e[o].selected = !0), r && (e[o].defaultSelected = !0)
        return
      }
      t !== null || e[o].disabled || (t = e[o])
    }
    t !== null && (t.selected = !0)
  }
}
function ks(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91))
  return se({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function rc(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92))
      if ($r(n)) {
        if (1 < n.length) throw Error(T(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: on(n) }
}
function af(e, t) {
  var n = on(t.value),
    r = on(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function oc(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function uf(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Ns(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? uf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
}
var Io,
  cf = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        Io = Io || document.createElement('div'),
          Io.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Io.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function to(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Vr = {
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
  og = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Vr).forEach(function (e) {
  og.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vr[t] = Vr[e])
  })
})
function df(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Vr.hasOwnProperty(e) && Vr[e])
      ? ('' + t).trim()
      : t + 'px'
}
function ff(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = df(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o)
    }
}
var ig = se(
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
  },
)
function Ts(e, t) {
  if (t) {
    if (ig[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(T(62))
  }
}
function _s(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var As = null
function Da(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var Ls = null,
  rr = null,
  or = null
function ic(e) {
  if ((e = Eo(e))) {
    if (typeof Ls != 'function') throw Error(T(280))
    var t = e.stateNode
    t && ((t = il(t)), Ls(e.stateNode, e.type, t))
  }
}
function pf(e) {
  rr ? (or ? or.push(e) : (or = [e])) : (rr = e)
}
function hf() {
  if (rr) {
    var e = rr,
      t = or
    if (((or = rr = null), ic(e), t)) for (e = 0; e < t.length; e++) ic(t[e])
  }
}
function mf(e, t) {
  return e(t)
}
function vf() {}
var Ml = !1
function gf(e, t, n) {
  if (Ml) return e(t, n)
  Ml = !0
  try {
    return mf(e, t, n)
  } finally {
    ;(Ml = !1), (rr !== null || or !== null) && (vf(), hf())
  }
}
function no(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = il(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(T(231, t, typeof n))
  return n
}
var Os = !1
if (It)
  try {
    var Lr = {}
    Object.defineProperty(Lr, 'passive', {
      get: function () {
        Os = !0
      },
    }),
      window.addEventListener('test', Lr, Lr),
      window.removeEventListener('test', Lr, Lr)
  } catch {
    Os = !1
  }
function lg(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (d) {
    this.onError(d)
  }
}
var Ur = !1,
  xi = null,
  Ci = !1,
  zs = null,
  sg = {
    onError: function (e) {
      ;(Ur = !0), (xi = e)
    },
  }
function ag(e, t, n, r, o, i, l, s, a) {
  ;(Ur = !1), (xi = null), lg.apply(sg, arguments)
}
function ug(e, t, n, r, o, i, l, s, a) {
  if ((ag.apply(this, arguments), Ur)) {
    if (Ur) {
      var u = xi
      ;(Ur = !1), (xi = null)
    } else throw Error(T(198))
    Ci || ((Ci = !0), (zs = u))
  }
}
function Dn(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function yf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function lc(e) {
  if (Dn(e) !== e) throw Error(T(188))
}
function cg(e) {
  var t = e.alternate
  if (!t) {
    if (((t = Dn(e)), t === null)) throw Error(T(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var o = n.return
    if (o === null) break
    var i = o.alternate
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return lc(o), e
        if (i === r) return lc(o), t
        i = i.sibling
      }
      throw Error(T(188))
    }
    if (n.return !== r.return) (n = o), (r = i)
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          ;(l = !0), (n = o), (r = i)
          break
        }
        if (s === r) {
          ;(l = !0), (r = o), (n = i)
          break
        }
        s = s.sibling
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            ;(l = !0), (n = i), (r = o)
            break
          }
          if (s === r) {
            ;(l = !0), (r = i), (n = o)
            break
          }
          s = s.sibling
        }
        if (!l) throw Error(T(189))
      }
    }
    if (n.alternate !== r) throw Error(T(190))
  }
  if (n.tag !== 3) throw Error(T(188))
  return n.stateNode.current === n ? e : t
}
function wf(e) {
  return (e = cg(e)), e !== null ? Sf(e) : null
}
function Sf(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = Sf(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var xf = Ge.unstable_scheduleCallback,
  sc = Ge.unstable_cancelCallback,
  dg = Ge.unstable_shouldYield,
  fg = Ge.unstable_requestPaint,
  ce = Ge.unstable_now,
  pg = Ge.unstable_getCurrentPriorityLevel,
  ja = Ge.unstable_ImmediatePriority,
  Cf = Ge.unstable_UserBlockingPriority,
  Ei = Ge.unstable_NormalPriority,
  hg = Ge.unstable_LowPriority,
  Ef = Ge.unstable_IdlePriority,
  tl = null,
  xt = null
function mg(e) {
  if (xt && typeof xt.onCommitFiberRoot == 'function')
    try {
      xt.onCommitFiberRoot(tl, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var st = Math.clz32 ? Math.clz32 : yg,
  vg = Math.log,
  gg = Math.LN2
function yg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((vg(e) / gg) | 0)) | 0
}
var Mo = 64,
  Do = 4194304
function Br(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
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
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function Pi(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455
  if (l !== 0) {
    var s = l & ~o
    s !== 0 ? (r = Br(s)) : ((i &= l), i !== 0 && (r = Br(i)))
  } else (l = n & ~o), l !== 0 ? (r = Br(l)) : i !== 0 && (r = Br(i))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - st(t)), (o = 1 << n), (r |= e[n]), (t &= ~o)
  return r
}
function wg(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
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
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function Sg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - st(i),
      s = 1 << l,
      a = o[l]
    a === -1
      ? (!(s & n) || s & r) && (o[l] = wg(s, t))
      : a <= t && (e.expiredLanes |= s),
      (i &= ~s)
  }
}
function Is(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function Pf() {
  var e = Mo
  return (Mo <<= 1), !(Mo & 4194240) && (Mo = 64), e
}
function Dl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function xo(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - st(t)),
    (e[t] = n)
}
function xg(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - st(n),
      i = 1 << o
    ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i)
  }
}
function ba(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - st(n),
      o = 1 << r
    ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
  }
}
var K = 0
function Rf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var kf,
  Fa,
  Nf,
  Tf,
  _f,
  Ms = !1,
  jo = [],
  Qt = null,
  Zt = null,
  Jt = null,
  ro = new Map(),
  oo = new Map(),
  Gt = [],
  Cg =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    )
function ac(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Qt = null
      break
    case 'dragenter':
    case 'dragleave':
      Zt = null
      break
    case 'mouseover':
    case 'mouseout':
      Jt = null
      break
    case 'pointerover':
    case 'pointerout':
      ro.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      oo.delete(t.pointerId)
  }
}
function Or(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Eo(t)), t !== null && Fa(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e)
}
function Eg(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Qt = Or(Qt, e, t, n, r, o)), !0
    case 'dragenter':
      return (Zt = Or(Zt, e, t, n, r, o)), !0
    case 'mouseover':
      return (Jt = Or(Jt, e, t, n, r, o)), !0
    case 'pointerover':
      var i = o.pointerId
      return ro.set(i, Or(ro.get(i) || null, e, t, n, r, o)), !0
    case 'gotpointercapture':
      return (
        (i = o.pointerId), oo.set(i, Or(oo.get(i) || null, e, t, n, r, o)), !0
      )
  }
  return !1
}
function Af(e) {
  var t = En(e.target)
  if (t !== null) {
    var n = Dn(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = yf(n)), t !== null)) {
          ;(e.blockedOn = t),
            _f(e.priority, function () {
              Nf(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function li(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ds(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(As = r), n.target.dispatchEvent(r), (As = null)
    } else return (t = Eo(n)), t !== null && Fa(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function uc(e, t, n) {
  li(e) && n.delete(t)
}
function Pg() {
  ;(Ms = !1),
    Qt !== null && li(Qt) && (Qt = null),
    Zt !== null && li(Zt) && (Zt = null),
    Jt !== null && li(Jt) && (Jt = null),
    ro.forEach(uc),
    oo.forEach(uc)
}
function zr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ms ||
      ((Ms = !0), Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, Pg)))
}
function io(e) {
  function t(o) {
    return zr(o, e)
  }
  if (0 < jo.length) {
    zr(jo[0], e)
    for (var n = 1; n < jo.length; n++) {
      var r = jo[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    Qt !== null && zr(Qt, e),
      Zt !== null && zr(Zt, e),
      Jt !== null && zr(Jt, e),
      ro.forEach(t),
      oo.forEach(t),
      n = 0;
    n < Gt.length;
    n++
  )
    (r = Gt[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < Gt.length && ((n = Gt[0]), n.blockedOn === null); )
    Af(n), n.blockedOn === null && Gt.shift()
}
var ir = $t.ReactCurrentBatchConfig,
  Ri = !0
function Rg(e, t, n, r) {
  var o = K,
    i = ir.transition
  ir.transition = null
  try {
    ;(K = 1), $a(e, t, n, r)
  } finally {
    ;(K = o), (ir.transition = i)
  }
}
function kg(e, t, n, r) {
  var o = K,
    i = ir.transition
  ir.transition = null
  try {
    ;(K = 4), $a(e, t, n, r)
  } finally {
    ;(K = o), (ir.transition = i)
  }
}
function $a(e, t, n, r) {
  if (Ri) {
    var o = Ds(e, t, n, r)
    if (o === null) Gl(e, t, r, ki, n), ac(e, r)
    else if (Eg(o, e, t, n, r)) r.stopPropagation()
    else if ((ac(e, r), t & 4 && -1 < Cg.indexOf(e))) {
      for (; o !== null; ) {
        var i = Eo(o)
        if (
          (i !== null && kf(i),
          (i = Ds(e, t, n, r)),
          i === null && Gl(e, t, r, ki, n),
          i === o)
        )
          break
        o = i
      }
      o !== null && r.stopPropagation()
    } else Gl(e, t, r, null, n)
  }
}
var ki = null
function Ds(e, t, n, r) {
  if (((ki = null), (e = Da(r)), (e = En(e)), e !== null))
    if (((t = Dn(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = yf(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (ki = e), null
}
function Lf(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (pg()) {
        case ja:
          return 1
        case Cf:
          return 4
        case Ei:
        case hg:
          return 16
        case Ef:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var Kt = null,
  Ba = null,
  si = null
function Of() {
  if (si) return si
  var e,
    t = Ba,
    n = t.length,
    r,
    o = 'value' in Kt ? Kt.value : Kt.textContent,
    i = o.length
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (si = o.slice(e, 1 < r ? 1 - r : void 0))
}
function ai(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function bo() {
  return !0
}
function cc() {
  return !1
}
function Ke(e) {
  function t(n, r, o, i, l) {
    ;(this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null)
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]))
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? bo
        : cc),
      (this.isPropagationStopped = cc),
      this
    )
  }
  return (
    se(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = bo))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = bo))
      },
      persist: function () {},
      isPersistent: bo,
    }),
    t
  )
}
var xr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Wa = Ke(xr),
  Co = se({}, xr, { view: 0, detail: 0 }),
  Ng = Ke(Co),
  jl,
  bl,
  Ir,
  nl = se({}, Co, {
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
    getModifierState: Ha,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Ir &&
            (Ir && e.type === 'mousemove'
              ? ((jl = e.screenX - Ir.screenX), (bl = e.screenY - Ir.screenY))
              : (bl = jl = 0),
            (Ir = e)),
          jl)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : bl
    },
  }),
  dc = Ke(nl),
  Tg = se({}, nl, { dataTransfer: 0 }),
  _g = Ke(Tg),
  Ag = se({}, Co, { relatedTarget: 0 }),
  Fl = Ke(Ag),
  Lg = se({}, xr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Og = Ke(Lg),
  zg = se({}, xr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  Ig = Ke(zg),
  Mg = se({}, xr, { data: 0 }),
  fc = Ke(Mg),
  Dg = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  jg = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  bg = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function Fg(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = bg[e]) ? !!t[e] : !1
}
function Ha() {
  return Fg
}
var $g = se({}, Co, {
    key: function (e) {
      if (e.key) {
        var t = Dg[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = ai(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? jg[e.keyCode] || 'Unidentified'
          : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ha,
    charCode: function (e) {
      return e.type === 'keypress' ? ai(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? ai(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
    },
  }),
  Bg = Ke($g),
  Wg = se({}, nl, {
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
  pc = Ke(Wg),
  Hg = se({}, Co, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ha,
  }),
  Vg = Ke(Hg),
  Ug = se({}, xr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Gg = Ke(Ug),
  Yg = se({}, nl, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Kg = Ke(Yg),
  Xg = [9, 13, 27, 32],
  Va = It && 'CompositionEvent' in window,
  Gr = null
It && 'documentMode' in document && (Gr = document.documentMode)
var Qg = It && 'TextEvent' in window && !Gr,
  zf = It && (!Va || (Gr && 8 < Gr && 11 >= Gr)),
  hc = ' ',
  mc = !1
function If(e, t) {
  switch (e) {
    case 'keyup':
      return Xg.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function Mf(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Gn = !1
function Zg(e, t) {
  switch (e) {
    case 'compositionend':
      return Mf(t)
    case 'keypress':
      return t.which !== 32 ? null : ((mc = !0), hc)
    case 'textInput':
      return (e = t.data), e === hc && mc ? null : e
    default:
      return null
  }
}
function Jg(e, t) {
  if (Gn)
    return e === 'compositionend' || (!Va && If(e, t))
      ? ((e = Of()), (si = Ba = Kt = null), (Gn = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return zf && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var qg = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
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
}
function vc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!qg[e.type] : t === 'textarea'
}
function Df(e, t, n, r) {
  pf(r),
    (t = Ni(t, 'onChange')),
    0 < t.length &&
      ((n = new Wa('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var Yr = null,
  lo = null
function e0(e) {
  Yf(e, 0)
}
function rl(e) {
  var t = Xn(e)
  if (lf(t)) return e
}
function t0(e, t) {
  if (e === 'change') return t
}
var jf = !1
if (It) {
  var $l
  if (It) {
    var Bl = 'oninput' in document
    if (!Bl) {
      var gc = document.createElement('div')
      gc.setAttribute('oninput', 'return;'),
        (Bl = typeof gc.oninput == 'function')
    }
    $l = Bl
  } else $l = !1
  jf = $l && (!document.documentMode || 9 < document.documentMode)
}
function yc() {
  Yr && (Yr.detachEvent('onpropertychange', bf), (lo = Yr = null))
}
function bf(e) {
  if (e.propertyName === 'value' && rl(lo)) {
    var t = []
    Df(t, lo, e, Da(e)), gf(e0, t)
  }
}
function n0(e, t, n) {
  e === 'focusin'
    ? (yc(), (Yr = t), (lo = n), Yr.attachEvent('onpropertychange', bf))
    : e === 'focusout' && yc()
}
function r0(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return rl(lo)
}
function o0(e, t) {
  if (e === 'click') return rl(t)
}
function i0(e, t) {
  if (e === 'input' || e === 'change') return rl(t)
}
function l0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var ut = typeof Object.is == 'function' ? Object.is : l0
function so(e, t) {
  if (ut(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var o = n[r]
    if (!ys.call(t, o) || !ut(e[o], t[o])) return !1
  }
  return !0
}
function wc(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Sc(e, t) {
  var n = wc(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = wc(n)
  }
}
function Ff(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ff(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1
}
function $f() {
  for (var e = window, t = Si(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = Si(e.document)
  }
  return t
}
function Ua(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function s0(e) {
  var t = $f(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ff(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ua(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var o = n.textContent.length,
          i = Math.min(r.start, o)
        ;(r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Sc(n, i))
        var l = Sc(n, r)
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var a0 = It && 'documentMode' in document && 11 >= document.documentMode,
  Yn = null,
  js = null,
  Kr = null,
  bs = !1
function xc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  bs ||
    Yn == null ||
    Yn !== Si(r) ||
    ((r = Yn),
    'selectionStart' in r && Ua(r)
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
    (Kr && so(Kr, r)) ||
      ((Kr = r),
      (r = Ni(js, 'onSelect')),
      0 < r.length &&
        ((t = new Wa('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Yn))))
}
function Fo(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var Kn = {
    animationend: Fo('Animation', 'AnimationEnd'),
    animationiteration: Fo('Animation', 'AnimationIteration'),
    animationstart: Fo('Animation', 'AnimationStart'),
    transitionend: Fo('Transition', 'TransitionEnd'),
  },
  Wl = {},
  Bf = {}
It &&
  ((Bf = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Kn.animationend.animation,
    delete Kn.animationiteration.animation,
    delete Kn.animationstart.animation),
  'TransitionEvent' in window || delete Kn.transitionend.transition)
function ol(e) {
  if (Wl[e]) return Wl[e]
  if (!Kn[e]) return e
  var t = Kn[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Bf) return (Wl[e] = t[n])
  return e
}
var Wf = ol('animationend'),
  Hf = ol('animationiteration'),
  Vf = ol('animationstart'),
  Uf = ol('transitionend'),
  Gf = new Map(),
  Cc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    )
function fn(e, t) {
  Gf.set(e, t), Mn(t, [e])
}
for (var Hl = 0; Hl < Cc.length; Hl++) {
  var Vl = Cc[Hl],
    u0 = Vl.toLowerCase(),
    c0 = Vl[0].toUpperCase() + Vl.slice(1)
  fn(u0, 'on' + c0)
}
fn(Wf, 'onAnimationEnd')
fn(Hf, 'onAnimationIteration')
fn(Vf, 'onAnimationStart')
fn('dblclick', 'onDoubleClick')
fn('focusin', 'onFocus')
fn('focusout', 'onBlur')
fn(Uf, 'onTransitionEnd')
cr('onMouseEnter', ['mouseout', 'mouseover'])
cr('onMouseLeave', ['mouseout', 'mouseover'])
cr('onPointerEnter', ['pointerout', 'pointerover'])
cr('onPointerLeave', ['pointerout', 'pointerover'])
Mn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
)
Mn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
)
Mn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
Mn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
)
Mn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
)
Mn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
)
var Wr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  d0 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Wr))
function Ec(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), ug(r, t, void 0, e), (e.currentTarget = null)
}
function Yf(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event
    r = r.listeners
    e: {
      var i = void 0
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget
          if (((s = s.listener), a !== i && o.isPropagationStopped())) break e
          Ec(o, s, u), (i = a)
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== i && o.isPropagationStopped())
          )
            break e
          Ec(o, s, u), (i = a)
        }
    }
  }
  if (Ci) throw ((e = zs), (Ci = !1), (zs = null), e)
}
function te(e, t) {
  var n = t[Hs]
  n === void 0 && (n = t[Hs] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Kf(t, e, 2, !1), n.add(r))
}
function Ul(e, t, n) {
  var r = 0
  t && (r |= 4), Kf(n, e, r, t)
}
var $o = '_reactListening' + Math.random().toString(36).slice(2)
function ao(e) {
  if (!e[$o]) {
    ;(e[$o] = !0),
      ef.forEach(function (n) {
        n !== 'selectionchange' && (d0.has(n) || Ul(n, !1, e), Ul(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[$o] || ((t[$o] = !0), Ul('selectionchange', !1, t))
  }
}
function Kf(e, t, n, r) {
  switch (Lf(t)) {
    case 1:
      var o = Rg
      break
    case 4:
      o = kg
      break
    default:
      o = $a
  }
  ;(n = o.bind(null, t, n, e)),
    (o = void 0),
    !Os ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1)
}
function Gl(e, t, n, r, o) {
  var i = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var l = r.tag
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return
            l = l.return
          }
        for (; s !== null; ) {
          if (((l = En(s)), l === null)) return
          if (((a = l.tag), a === 5 || a === 6)) {
            r = i = l
            continue e
          }
          s = s.parentNode
        }
      }
      r = r.return
    }
  gf(function () {
    var u = i,
      d = Da(n),
      f = []
    e: {
      var p = Gf.get(e)
      if (p !== void 0) {
        var y = Wa,
          w = e
        switch (e) {
          case 'keypress':
            if (ai(n) === 0) break e
          case 'keydown':
          case 'keyup':
            y = Bg
            break
          case 'focusin':
            ;(w = 'focus'), (y = Fl)
            break
          case 'focusout':
            ;(w = 'blur'), (y = Fl)
            break
          case 'beforeblur':
          case 'afterblur':
            y = Fl
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            y = dc
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            y = _g
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            y = Vg
            break
          case Wf:
          case Hf:
          case Vf:
            y = Og
            break
          case Uf:
            y = Gg
            break
          case 'scroll':
            y = Ng
            break
          case 'wheel':
            y = Kg
            break
          case 'copy':
          case 'cut':
          case 'paste':
            y = Ig
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            y = pc
        }
        var g = (t & 4) !== 0,
          C = !g && e === 'scroll',
          m = g ? (p !== null ? p + 'Capture' : null) : p
        g = []
        for (var h = u, v; h !== null; ) {
          v = h
          var x = v.stateNode
          if (
            (v.tag === 5 &&
              x !== null &&
              ((v = x),
              m !== null && ((x = no(h, m)), x != null && g.push(uo(h, x, v)))),
            C)
          )
            break
          h = h.return
        }
        0 < g.length &&
          ((p = new y(p, w, null, n, d)), f.push({ event: p, listeners: g }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === 'mouseover' || e === 'pointerover'),
          (y = e === 'mouseout' || e === 'pointerout'),
          p &&
            n !== As &&
            (w = n.relatedTarget || n.fromElement) &&
            (En(w) || w[Mt]))
        )
          break e
        if (
          (y || p) &&
          ((p =
            d.window === d
              ? d
              : (p = d.ownerDocument)
                ? p.defaultView || p.parentWindow
                : window),
          y
            ? ((w = n.relatedTarget || n.toElement),
              (y = u),
              (w = w ? En(w) : null),
              w !== null &&
                ((C = Dn(w)), w !== C || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((y = null), (w = u)),
          y !== w)
        ) {
          if (
            ((g = dc),
            (x = 'onMouseLeave'),
            (m = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((g = pc),
              (x = 'onPointerLeave'),
              (m = 'onPointerEnter'),
              (h = 'pointer')),
            (C = y == null ? p : Xn(y)),
            (v = w == null ? p : Xn(w)),
            (p = new g(x, h + 'leave', y, n, d)),
            (p.target = C),
            (p.relatedTarget = v),
            (x = null),
            En(d) === u &&
              ((g = new g(m, h + 'enter', w, n, d)),
              (g.target = v),
              (g.relatedTarget = C),
              (x = g)),
            (C = x),
            y && w)
          )
            t: {
              for (g = y, m = w, h = 0, v = g; v; v = bn(v)) h++
              for (v = 0, x = m; x; x = bn(x)) v++
              for (; 0 < h - v; ) (g = bn(g)), h--
              for (; 0 < v - h; ) (m = bn(m)), v--
              for (; h--; ) {
                if (g === m || (m !== null && g === m.alternate)) break t
                ;(g = bn(g)), (m = bn(m))
              }
              g = null
            }
          else g = null
          y !== null && Pc(f, p, y, g, !1),
            w !== null && C !== null && Pc(f, C, w, g, !0)
        }
      }
      e: {
        if (
          ((p = u ? Xn(u) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === 'select' || (y === 'input' && p.type === 'file'))
        )
          var E = t0
        else if (vc(p))
          if (jf) E = i0
          else {
            E = r0
            var R = n0
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === 'input' &&
            (p.type === 'checkbox' || p.type === 'radio') &&
            (E = o0)
        if (E && (E = E(e, u))) {
          Df(f, E, n, d)
          break e
        }
        R && R(e, p, u),
          e === 'focusout' &&
            (R = p._wrapperState) &&
            R.controlled &&
            p.type === 'number' &&
            Rs(p, 'number', p.value)
      }
      switch (((R = u ? Xn(u) : window), e)) {
        case 'focusin':
          ;(vc(R) || R.contentEditable === 'true') &&
            ((Yn = R), (js = u), (Kr = null))
          break
        case 'focusout':
          Kr = js = Yn = null
          break
        case 'mousedown':
          bs = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(bs = !1), xc(f, n, d)
          break
        case 'selectionchange':
          if (a0) break
        case 'keydown':
        case 'keyup':
          xc(f, n, d)
      }
      var P
      if (Va)
        e: {
          switch (e) {
            case 'compositionstart':
              var k = 'onCompositionStart'
              break e
            case 'compositionend':
              k = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              k = 'onCompositionUpdate'
              break e
          }
          k = void 0
        }
      else
        Gn
          ? If(e, n) && (k = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (k = 'onCompositionStart')
      k &&
        (zf &&
          n.locale !== 'ko' &&
          (Gn || k !== 'onCompositionStart'
            ? k === 'onCompositionEnd' && Gn && (P = Of())
            : ((Kt = d),
              (Ba = 'value' in Kt ? Kt.value : Kt.textContent),
              (Gn = !0))),
        (R = Ni(u, k)),
        0 < R.length &&
          ((k = new fc(k, e, null, n, d)),
          f.push({ event: k, listeners: R }),
          P ? (k.data = P) : ((P = Mf(n)), P !== null && (k.data = P)))),
        (P = Qg ? Zg(e, n) : Jg(e, n)) &&
          ((u = Ni(u, 'onBeforeInput')),
          0 < u.length &&
            ((d = new fc('onBeforeInput', 'beforeinput', null, n, d)),
            f.push({ event: d, listeners: u }),
            (d.data = P)))
    }
    Yf(f, t)
  })
}
function uo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function Ni(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = no(e, n)),
      i != null && r.unshift(uo(e, i, o)),
      (i = no(e, t)),
      i != null && r.push(uo(e, i, o))),
      (e = e.return)
  }
  return r
}
function bn(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Pc(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode
    if (a !== null && a === r) break
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = no(n, i)), a != null && l.unshift(uo(n, a, s)))
        : o || ((a = no(n, i)), a != null && l.push(uo(n, a, s)))),
      (n = n.return)
  }
  l.length !== 0 && e.push({ event: t, listeners: l })
}
var f0 = /\r\n?/g,
  p0 = /\u0000|\uFFFD/g
function Rc(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      f0,
      `
`,
    )
    .replace(p0, '')
}
function Bo(e, t, n) {
  if (((t = Rc(t)), Rc(e) !== t && n)) throw Error(T(425))
}
function Ti() {}
var Fs = null,
  $s = null
function Bs(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var Ws = typeof setTimeout == 'function' ? setTimeout : void 0,
  h0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  kc = typeof Promise == 'function' ? Promise : void 0,
  m0 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof kc < 'u'
        ? function (e) {
            return kc.resolve(null).then(e).catch(v0)
          }
        : Ws
function v0(e) {
  setTimeout(function () {
    throw e
  })
}
function Yl(e, t) {
  var n = t,
    r = 0
  do {
    var o = n.nextSibling
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), io(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = o
  } while (n)
  io(t)
}
function qt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Nc(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var Cr = Math.random().toString(36).slice(2),
  wt = '__reactFiber$' + Cr,
  co = '__reactProps$' + Cr,
  Mt = '__reactContainer$' + Cr,
  Hs = '__reactEvents$' + Cr,
  g0 = '__reactListeners$' + Cr,
  y0 = '__reactHandles$' + Cr
function En(e) {
  var t = e[wt]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Mt] || n[wt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Nc(e); e !== null; ) {
          if ((n = e[wt])) return n
          e = Nc(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function Eo(e) {
  return (
    (e = e[wt] || e[Mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function Xn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(T(33))
}
function il(e) {
  return e[co] || null
}
var Vs = [],
  Qn = -1
function pn(e) {
  return { current: e }
}
function ne(e) {
  0 > Qn || ((e.current = Vs[Qn]), (Vs[Qn] = null), Qn--)
}
function q(e, t) {
  Qn++, (Vs[Qn] = e.current), (e.current = t)
}
var ln = {},
  Ne = pn(ln),
  De = pn(!1),
  Tn = ln
function dr(e, t) {
  var n = e.type.contextTypes
  if (!n) return ln
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var o = {},
    i
  for (i in n) o[i] = t[i]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  )
}
function je(e) {
  return (e = e.childContextTypes), e != null
}
function _i() {
  ne(De), ne(Ne)
}
function Tc(e, t, n) {
  if (Ne.current !== ln) throw Error(T(168))
  q(Ne, t), q(De, n)
}
function Xf(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var o in r) if (!(o in t)) throw Error(T(108, ng(e) || 'Unknown', o))
  return se({}, n, r)
}
function Ai(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ln),
    (Tn = Ne.current),
    q(Ne, e),
    q(De, De.current),
    !0
  )
}
function _c(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(T(169))
  n
    ? ((e = Xf(e, t, Tn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ne(De),
      ne(Ne),
      q(Ne, e))
    : ne(De),
    q(De, n)
}
var _t = null,
  ll = !1,
  Kl = !1
function Qf(e) {
  _t === null ? (_t = [e]) : _t.push(e)
}
function w0(e) {
  ;(ll = !0), Qf(e)
}
function hn() {
  if (!Kl && _t !== null) {
    Kl = !0
    var e = 0,
      t = K
    try {
      var n = _t
      for (K = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(_t = null), (ll = !1)
    } catch (o) {
      throw (_t !== null && (_t = _t.slice(e + 1)), xf(ja, hn), o)
    } finally {
      ;(K = t), (Kl = !1)
    }
  }
  return null
}
var Zn = [],
  Jn = 0,
  Li = null,
  Oi = 0,
  Xe = [],
  Qe = 0,
  _n = null,
  At = 1,
  Lt = ''
function xn(e, t) {
  ;(Zn[Jn++] = Oi), (Zn[Jn++] = Li), (Li = e), (Oi = t)
}
function Zf(e, t, n) {
  ;(Xe[Qe++] = At), (Xe[Qe++] = Lt), (Xe[Qe++] = _n), (_n = e)
  var r = At
  e = Lt
  var o = 32 - st(r) - 1
  ;(r &= ~(1 << o)), (n += 1)
  var i = 32 - st(t) + o
  if (30 < i) {
    var l = o - (o % 5)
    ;(i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (At = (1 << (32 - st(t) + o)) | (n << o) | r),
      (Lt = i + e)
  } else (At = (1 << i) | (n << o) | r), (Lt = e)
}
function Ga(e) {
  e.return !== null && (xn(e, 1), Zf(e, 1, 0))
}
function Ya(e) {
  for (; e === Li; )
    (Li = Zn[--Jn]), (Zn[Jn] = null), (Oi = Zn[--Jn]), (Zn[Jn] = null)
  for (; e === _n; )
    (_n = Xe[--Qe]),
      (Xe[Qe] = null),
      (Lt = Xe[--Qe]),
      (Xe[Qe] = null),
      (At = Xe[--Qe]),
      (Xe[Qe] = null)
}
var Ve = null,
  He = null,
  oe = !1,
  lt = null
function Jf(e, t) {
  var n = Ze(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Ac(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ve = e), (He = qt(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ve = e), (He = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = _n !== null ? { id: At, overflow: Lt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ze(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ve = e),
            (He = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function Us(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Gs(e) {
  if (oe) {
    var t = He
    if (t) {
      var n = t
      if (!Ac(e, t)) {
        if (Us(e)) throw Error(T(418))
        t = qt(n.nextSibling)
        var r = Ve
        t && Ac(e, t)
          ? Jf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (oe = !1), (Ve = e))
      }
    } else {
      if (Us(e)) throw Error(T(418))
      ;(e.flags = (e.flags & -4097) | 2), (oe = !1), (Ve = e)
    }
  }
}
function Lc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  Ve = e
}
function Wo(e) {
  if (e !== Ve) return !1
  if (!oe) return Lc(e), (oe = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Bs(e.type, e.memoizedProps))),
    t && (t = He))
  ) {
    if (Us(e)) throw (qf(), Error(T(418)))
    for (; t; ) Jf(e, t), (t = qt(t.nextSibling))
  }
  if ((Lc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              He = qt(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      He = null
    }
  } else He = Ve ? qt(e.stateNode.nextSibling) : null
  return !0
}
function qf() {
  for (var e = He; e; ) e = qt(e.nextSibling)
}
function fr() {
  ;(He = Ve = null), (oe = !1)
}
function Ka(e) {
  lt === null ? (lt = [e]) : lt.push(e)
}
var S0 = $t.ReactCurrentBatchConfig
function Mr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309))
        var r = n.stateNode
      }
      if (!r) throw Error(T(147, e))
      var o = r,
        i = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs
            l === null ? delete s[i] : (s[i] = l)
          }),
          (t._stringRef = i),
          t)
    }
    if (typeof e != 'string') throw Error(T(284))
    if (!n._owner) throw Error(T(290, e))
  }
  return e
}
function Ho(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  )
}
function Oc(e) {
  var t = e._init
  return t(e._payload)
}
function ep(e) {
  function t(m, h) {
    if (e) {
      var v = m.deletions
      v === null ? ((m.deletions = [h]), (m.flags |= 16)) : v.push(h)
    }
  }
  function n(m, h) {
    if (!e) return null
    for (; h !== null; ) t(m, h), (h = h.sibling)
    return null
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling)
    return m
  }
  function o(m, h) {
    return (m = rn(m, h)), (m.index = 0), (m.sibling = null), m
  }
  function i(m, h, v) {
    return (
      (m.index = v),
      e
        ? ((v = m.alternate),
          v !== null
            ? ((v = v.index), v < h ? ((m.flags |= 2), h) : v)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    )
  }
  function l(m) {
    return e && m.alternate === null && (m.flags |= 2), m
  }
  function s(m, h, v, x) {
    return h === null || h.tag !== 6
      ? ((h = ts(v, m.mode, x)), (h.return = m), h)
      : ((h = o(h, v)), (h.return = m), h)
  }
  function a(m, h, v, x) {
    var E = v.type
    return E === Un
      ? d(m, h, v.props.children, x, v.key)
      : h !== null &&
          (h.elementType === E ||
            (typeof E == 'object' &&
              E !== null &&
              E.$$typeof === Vt &&
              Oc(E) === h.type))
        ? ((x = o(h, v.props)), (x.ref = Mr(m, h, v)), (x.return = m), x)
        : ((x = mi(v.type, v.key, v.props, null, m.mode, x)),
          (x.ref = Mr(m, h, v)),
          (x.return = m),
          x)
  }
  function u(m, h, v, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== v.containerInfo ||
      h.stateNode.implementation !== v.implementation
      ? ((h = ns(v, m.mode, x)), (h.return = m), h)
      : ((h = o(h, v.children || [])), (h.return = m), h)
  }
  function d(m, h, v, x, E) {
    return h === null || h.tag !== 7
      ? ((h = Nn(v, m.mode, x, E)), (h.return = m), h)
      : ((h = o(h, v)), (h.return = m), h)
  }
  function f(m, h, v) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = ts('' + h, m.mode, v)), (h.return = m), h
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case Oo:
          return (
            (v = mi(h.type, h.key, h.props, null, m.mode, v)),
            (v.ref = Mr(m, null, h)),
            (v.return = m),
            v
          )
        case Vn:
          return (h = ns(h, m.mode, v)), (h.return = m), h
        case Vt:
          var x = h._init
          return f(m, x(h._payload), v)
      }
      if ($r(h) || Ar(h)) return (h = Nn(h, m.mode, v, null)), (h.return = m), h
      Ho(m, h)
    }
    return null
  }
  function p(m, h, v, x) {
    var E = h !== null ? h.key : null
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return E !== null ? null : s(m, h, '' + v, x)
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case Oo:
          return v.key === E ? a(m, h, v, x) : null
        case Vn:
          return v.key === E ? u(m, h, v, x) : null
        case Vt:
          return (E = v._init), p(m, h, E(v._payload), x)
      }
      if ($r(v) || Ar(v)) return E !== null ? null : d(m, h, v, x, null)
      Ho(m, v)
    }
    return null
  }
  function y(m, h, v, x, E) {
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return (m = m.get(v) || null), s(h, m, '' + x, E)
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case Oo:
          return (m = m.get(x.key === null ? v : x.key) || null), a(h, m, x, E)
        case Vn:
          return (m = m.get(x.key === null ? v : x.key) || null), u(h, m, x, E)
        case Vt:
          var R = x._init
          return y(m, h, v, R(x._payload), E)
      }
      if ($r(x) || Ar(x)) return (m = m.get(v) || null), d(h, m, x, E, null)
      Ho(h, x)
    }
    return null
  }
  function w(m, h, v, x) {
    for (
      var E = null, R = null, P = h, k = (h = 0), A = null;
      P !== null && k < v.length;
      k++
    ) {
      P.index > k ? ((A = P), (P = null)) : (A = P.sibling)
      var _ = p(m, P, v[k], x)
      if (_ === null) {
        P === null && (P = A)
        break
      }
      e && P && _.alternate === null && t(m, P),
        (h = i(_, h, k)),
        R === null ? (E = _) : (R.sibling = _),
        (R = _),
        (P = A)
    }
    if (k === v.length) return n(m, P), oe && xn(m, k), E
    if (P === null) {
      for (; k < v.length; k++)
        (P = f(m, v[k], x)),
          P !== null &&
            ((h = i(P, h, k)), R === null ? (E = P) : (R.sibling = P), (R = P))
      return oe && xn(m, k), E
    }
    for (P = r(m, P); k < v.length; k++)
      (A = y(P, m, k, v[k], x)),
        A !== null &&
          (e && A.alternate !== null && P.delete(A.key === null ? k : A.key),
          (h = i(A, h, k)),
          R === null ? (E = A) : (R.sibling = A),
          (R = A))
    return (
      e &&
        P.forEach(function (D) {
          return t(m, D)
        }),
      oe && xn(m, k),
      E
    )
  }
  function g(m, h, v, x) {
    var E = Ar(v)
    if (typeof E != 'function') throw Error(T(150))
    if (((v = E.call(v)), v == null)) throw Error(T(151))
    for (
      var R = (E = null), P = h, k = (h = 0), A = null, _ = v.next();
      P !== null && !_.done;
      k++, _ = v.next()
    ) {
      P.index > k ? ((A = P), (P = null)) : (A = P.sibling)
      var D = p(m, P, _.value, x)
      if (D === null) {
        P === null && (P = A)
        break
      }
      e && P && D.alternate === null && t(m, P),
        (h = i(D, h, k)),
        R === null ? (E = D) : (R.sibling = D),
        (R = D),
        (P = A)
    }
    if (_.done) return n(m, P), oe && xn(m, k), E
    if (P === null) {
      for (; !_.done; k++, _ = v.next())
        (_ = f(m, _.value, x)),
          _ !== null &&
            ((h = i(_, h, k)), R === null ? (E = _) : (R.sibling = _), (R = _))
      return oe && xn(m, k), E
    }
    for (P = r(m, P); !_.done; k++, _ = v.next())
      (_ = y(P, m, k, _.value, x)),
        _ !== null &&
          (e && _.alternate !== null && P.delete(_.key === null ? k : _.key),
          (h = i(_, h, k)),
          R === null ? (E = _) : (R.sibling = _),
          (R = _))
    return (
      e &&
        P.forEach(function ($) {
          return t(m, $)
        }),
      oe && xn(m, k),
      E
    )
  }
  function C(m, h, v, x) {
    if (
      (typeof v == 'object' &&
        v !== null &&
        v.type === Un &&
        v.key === null &&
        (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case Oo:
          e: {
            for (var E = v.key, R = h; R !== null; ) {
              if (R.key === E) {
                if (((E = v.type), E === Un)) {
                  if (R.tag === 7) {
                    n(m, R.sibling),
                      (h = o(R, v.props.children)),
                      (h.return = m),
                      (m = h)
                    break e
                  }
                } else if (
                  R.elementType === E ||
                  (typeof E == 'object' &&
                    E !== null &&
                    E.$$typeof === Vt &&
                    Oc(E) === R.type)
                ) {
                  n(m, R.sibling),
                    (h = o(R, v.props)),
                    (h.ref = Mr(m, R, v)),
                    (h.return = m),
                    (m = h)
                  break e
                }
                n(m, R)
                break
              } else t(m, R)
              R = R.sibling
            }
            v.type === Un
              ? ((h = Nn(v.props.children, m.mode, x, v.key)),
                (h.return = m),
                (m = h))
              : ((x = mi(v.type, v.key, v.props, null, m.mode, x)),
                (x.ref = Mr(m, h, v)),
                (x.return = m),
                (m = x))
          }
          return l(m)
        case Vn:
          e: {
            for (R = v.key; h !== null; ) {
              if (h.key === R)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === v.containerInfo &&
                  h.stateNode.implementation === v.implementation
                ) {
                  n(m, h.sibling),
                    (h = o(h, v.children || [])),
                    (h.return = m),
                    (m = h)
                  break e
                } else {
                  n(m, h)
                  break
                }
              else t(m, h)
              h = h.sibling
            }
            ;(h = ns(v, m.mode, x)), (h.return = m), (m = h)
          }
          return l(m)
        case Vt:
          return (R = v._init), C(m, h, R(v._payload), x)
      }
      if ($r(v)) return w(m, h, v, x)
      if (Ar(v)) return g(m, h, v, x)
      Ho(m, v)
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = o(h, v)), (h.return = m), (m = h))
          : (n(m, h), (h = ts(v, m.mode, x)), (h.return = m), (m = h)),
        l(m))
      : n(m, h)
  }
  return C
}
var pr = ep(!0),
  tp = ep(!1),
  zi = pn(null),
  Ii = null,
  qn = null,
  Xa = null
function Qa() {
  Xa = qn = Ii = null
}
function Za(e) {
  var t = zi.current
  ne(zi), (e._currentValue = t)
}
function Ys(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function lr(e, t) {
  ;(Ii = e),
    (Xa = qn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Me = !0), (e.firstContext = null))
}
function qe(e) {
  var t = e._currentValue
  if (Xa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), qn === null)) {
      if (Ii === null) throw Error(T(308))
      ;(qn = e), (Ii.dependencies = { lanes: 0, firstContext: e })
    } else qn = qn.next = e
  return t
}
var Pn = null
function Ja(e) {
  Pn === null ? (Pn = [e]) : Pn.push(e)
}
function np(e, t, n, r) {
  var o = t.interleaved
  return (
    o === null ? ((n.next = n), Ja(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Dt(e, r)
  )
}
function Dt(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var Ut = !1
function qa(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function rp(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function Ot(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function en(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), U & 2)) {
    var o = r.pending
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Dt(e, n)
    )
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Ja(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Dt(e, n)
  )
}
function ui(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), ba(e, n)
  }
}
function zc(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next)
      } while (n !== null)
      i === null ? (o = i = t) : (i = i.next = t)
    } else o = i = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function Mi(e, t, n, r) {
  var o = e.updateQueue
  Ut = !1
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending
  if (s !== null) {
    o.shared.pending = null
    var a = s,
      u = a.next
    ;(a.next = null), l === null ? (i = u) : (l.next = u), (l = a)
    var d = e.alternate
    d !== null &&
      ((d = d.updateQueue),
      (s = d.lastBaseUpdate),
      s !== l &&
        (s === null ? (d.firstBaseUpdate = u) : (s.next = u),
        (d.lastBaseUpdate = a)))
  }
  if (i !== null) {
    var f = o.baseState
    ;(l = 0), (d = u = a = null), (s = i)
    do {
      var p = s.lane,
        y = s.eventTime
      if ((r & p) === p) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            })
        e: {
          var w = e,
            g = s
          switch (((p = t), (y = n), g.tag)) {
            case 1:
              if (((w = g.payload), typeof w == 'function')) {
                f = w.call(y, f, p)
                break e
              }
              f = w
              break e
            case 3:
              w.flags = (w.flags & -65537) | 128
            case 0:
              if (
                ((w = g.payload),
                (p = typeof w == 'function' ? w.call(y, f, p) : w),
                p == null)
              )
                break e
              f = se({}, f, p)
              break e
            case 2:
              Ut = !0
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (p = o.effects),
          p === null ? (o.effects = [s]) : p.push(s))
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          d === null ? ((u = d = y), (a = f)) : (d = d.next = y),
          (l |= p)
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break
        ;(p = s),
          (s = p.next),
          (p.next = null),
          (o.lastBaseUpdate = p),
          (o.shared.pending = null)
      }
    } while (!0)
    if (
      (d === null && (a = f),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t
      do (l |= o.lane), (o = o.next)
      while (o !== t)
    } else i === null && (o.shared.lanes = 0)
    ;(Ln |= l), (e.lanes = l), (e.memoizedState = f)
  }
}
function Ic(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(T(191, o))
        o.call(r)
      }
    }
}
var Po = {},
  Ct = pn(Po),
  fo = pn(Po),
  po = pn(Po)
function Rn(e) {
  if (e === Po) throw Error(T(174))
  return e
}
function eu(e, t) {
  switch ((q(po, t), q(fo, e), q(Ct, Po), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ns(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ns(t, e))
  }
  ne(Ct), q(Ct, t)
}
function hr() {
  ne(Ct), ne(fo), ne(po)
}
function op(e) {
  Rn(po.current)
  var t = Rn(Ct.current),
    n = Ns(t, e.type)
  t !== n && (q(fo, e), q(Ct, n))
}
function tu(e) {
  fo.current === e && (ne(Ct), ne(fo))
}
var ie = pn(0)
function Di(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var Xl = []
function nu() {
  for (var e = 0; e < Xl.length; e++) Xl[e]._workInProgressVersionPrimary = null
  Xl.length = 0
}
var ci = $t.ReactCurrentDispatcher,
  Ql = $t.ReactCurrentBatchConfig,
  An = 0,
  le = null,
  pe = null,
  me = null,
  ji = !1,
  Xr = !1,
  ho = 0,
  x0 = 0
function Pe() {
  throw Error(T(321))
}
function ru(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ut(e[n], t[n])) return !1
  return !0
}
function ou(e, t, n, r, o, i) {
  if (
    ((An = i),
    (le = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ci.current = e === null || e.memoizedState === null ? R0 : k0),
    (e = n(r, o)),
    Xr)
  ) {
    i = 0
    do {
      if (((Xr = !1), (ho = 0), 25 <= i)) throw Error(T(301))
      ;(i += 1),
        (me = pe = null),
        (t.updateQueue = null),
        (ci.current = N0),
        (e = n(r, o))
    } while (Xr)
  }
  if (
    ((ci.current = bi),
    (t = pe !== null && pe.next !== null),
    (An = 0),
    (me = pe = le = null),
    (ji = !1),
    t)
  )
    throw Error(T(300))
  return e
}
function iu() {
  var e = ho !== 0
  return (ho = 0), e
}
function gt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return me === null ? (le.memoizedState = me = e) : (me = me.next = e), me
}
function et() {
  if (pe === null) {
    var e = le.alternate
    e = e !== null ? e.memoizedState : null
  } else e = pe.next
  var t = me === null ? le.memoizedState : me.next
  if (t !== null) (me = t), (pe = e)
  else {
    if (e === null) throw Error(T(310))
    ;(pe = e),
      (e = {
        memoizedState: pe.memoizedState,
        baseState: pe.baseState,
        baseQueue: pe.baseQueue,
        queue: pe.queue,
        next: null,
      }),
      me === null ? (le.memoizedState = me = e) : (me = me.next = e)
  }
  return me
}
function mo(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function Zl(e) {
  var t = et(),
    n = t.queue
  if (n === null) throw Error(T(311))
  n.lastRenderedReducer = e
  var r = pe,
    o = r.baseQueue,
    i = n.pending
  if (i !== null) {
    if (o !== null) {
      var l = o.next
      ;(o.next = i.next), (i.next = l)
    }
    ;(r.baseQueue = o = i), (n.pending = null)
  }
  if (o !== null) {
    ;(i = o.next), (r = r.baseState)
    var s = (l = null),
      a = null,
      u = i
    do {
      var d = u.lane
      if ((An & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action))
      else {
        var f = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        }
        a === null ? ((s = a = f), (l = r)) : (a = a.next = f),
          (le.lanes |= d),
          (Ln |= d)
      }
      u = u.next
    } while (u !== null && u !== i)
    a === null ? (l = r) : (a.next = s),
      ut(r, t.memoizedState) || (Me = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    o = e
    do (i = o.lane), (le.lanes |= i), (Ln |= i), (o = o.next)
    while (o !== e)
  } else o === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function Jl(e) {
  var t = et(),
    n = t.queue
  if (n === null) throw Error(T(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState
  if (o !== null) {
    n.pending = null
    var l = (o = o.next)
    do (i = e(i, l.action)), (l = l.next)
    while (l !== o)
    ut(i, t.memoizedState) || (Me = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i)
  }
  return [i, r]
}
function ip() {}
function lp(e, t) {
  var n = le,
    r = et(),
    o = t(),
    i = !ut(r.memoizedState, o)
  if (
    (i && ((r.memoizedState = o), (Me = !0)),
    (r = r.queue),
    lu(up.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (me !== null && me.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      vo(9, ap.bind(null, n, r, o, t), void 0, null),
      ve === null)
    )
      throw Error(T(349))
    An & 30 || sp(n, t, o)
  }
  return o
}
function sp(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function ap(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), cp(t) && dp(e)
}
function up(e, t, n) {
  return n(function () {
    cp(t) && dp(e)
  })
}
function cp(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !ut(e, n)
  } catch {
    return !0
  }
}
function dp(e) {
  var t = Dt(e, 1)
  t !== null && at(t, e, 1, -1)
}
function Mc(e) {
  var t = gt()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: mo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = P0.bind(null, le, e)),
    [t.memoizedState, e]
  )
}
function vo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = le.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (le.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function fp() {
  return et().memoizedState
}
function di(e, t, n, r) {
  var o = gt()
  ;(le.flags |= e),
    (o.memoizedState = vo(1 | t, n, void 0, r === void 0 ? null : r))
}
function sl(e, t, n, r) {
  var o = et()
  r = r === void 0 ? null : r
  var i = void 0
  if (pe !== null) {
    var l = pe.memoizedState
    if (((i = l.destroy), r !== null && ru(r, l.deps))) {
      o.memoizedState = vo(t, n, i, r)
      return
    }
  }
  ;(le.flags |= e), (o.memoizedState = vo(1 | t, n, i, r))
}
function Dc(e, t) {
  return di(8390656, 8, e, t)
}
function lu(e, t) {
  return sl(2048, 8, e, t)
}
function pp(e, t) {
  return sl(4, 2, e, t)
}
function hp(e, t) {
  return sl(4, 4, e, t)
}
function mp(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function vp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), sl(4, 4, mp.bind(null, t, e), n)
  )
}
function su() {}
function gp(e, t) {
  var n = et()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && ru(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function yp(e, t) {
  var n = et()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && ru(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function wp(e, t, n) {
  return An & 21
    ? (ut(n, t) || ((n = Pf()), (le.lanes |= n), (Ln |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Me = !0)), (e.memoizedState = n))
}
function C0(e, t) {
  var n = K
  ;(K = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = Ql.transition
  Ql.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(K = n), (Ql.transition = r)
  }
}
function Sp() {
  return et().memoizedState
}
function E0(e, t, n) {
  var r = nn(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    xp(e))
  )
    Cp(t, n)
  else if (((n = np(e, t, n, r)), n !== null)) {
    var o = Le()
    at(n, e, r, o), Ep(n, t, r)
  }
}
function P0(e, t, n) {
  var r = nn(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (xp(e)) Cp(t, o)
  else {
    var i = e.alternate
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = i(l, n)
        if (((o.hasEagerState = !0), (o.eagerState = s), ut(s, l))) {
          var a = t.interleaved
          a === null
            ? ((o.next = o), Ja(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o)
          return
        }
      } catch {
      } finally {
      }
    ;(n = np(e, t, o, r)),
      n !== null && ((o = Le()), at(n, e, r, o), Ep(n, t, r))
  }
}
function xp(e) {
  var t = e.alternate
  return e === le || (t !== null && t === le)
}
function Cp(e, t) {
  Xr = ji = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function Ep(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), ba(e, n)
  }
}
var bi = {
    readContext: qe,
    useCallback: Pe,
    useContext: Pe,
    useEffect: Pe,
    useImperativeHandle: Pe,
    useInsertionEffect: Pe,
    useLayoutEffect: Pe,
    useMemo: Pe,
    useReducer: Pe,
    useRef: Pe,
    useState: Pe,
    useDebugValue: Pe,
    useDeferredValue: Pe,
    useTransition: Pe,
    useMutableSource: Pe,
    useSyncExternalStore: Pe,
    useId: Pe,
    unstable_isNewReconciler: !1,
  },
  R0 = {
    readContext: qe,
    useCallback: function (e, t) {
      return (gt().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: qe,
    useEffect: Dc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        di(4194308, 4, mp.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return di(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return di(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = gt()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = gt()
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
        (e = e.dispatch = E0.bind(null, le, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = gt()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Mc,
    useDebugValue: su,
    useDeferredValue: function (e) {
      return (gt().memoizedState = e)
    },
    useTransition: function () {
      var e = Mc(!1),
        t = e[0]
      return (e = C0.bind(null, e[1])), (gt().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = le,
        o = gt()
      if (oe) {
        if (n === void 0) throw Error(T(407))
        n = n()
      } else {
        if (((n = t()), ve === null)) throw Error(T(349))
        An & 30 || sp(r, t, n)
      }
      o.memoizedState = n
      var i = { value: n, getSnapshot: t }
      return (
        (o.queue = i),
        Dc(up.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        vo(9, ap.bind(null, r, i, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = gt(),
        t = ve.identifierPrefix
      if (oe) {
        var n = Lt,
          r = At
        ;(n = (r & ~(1 << (32 - st(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = ho++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = x0++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  k0 = {
    readContext: qe,
    useCallback: gp,
    useContext: qe,
    useEffect: lu,
    useImperativeHandle: vp,
    useInsertionEffect: pp,
    useLayoutEffect: hp,
    useMemo: yp,
    useReducer: Zl,
    useRef: fp,
    useState: function () {
      return Zl(mo)
    },
    useDebugValue: su,
    useDeferredValue: function (e) {
      var t = et()
      return wp(t, pe.memoizedState, e)
    },
    useTransition: function () {
      var e = Zl(mo)[0],
        t = et().memoizedState
      return [e, t]
    },
    useMutableSource: ip,
    useSyncExternalStore: lp,
    useId: Sp,
    unstable_isNewReconciler: !1,
  },
  N0 = {
    readContext: qe,
    useCallback: gp,
    useContext: qe,
    useEffect: lu,
    useImperativeHandle: vp,
    useInsertionEffect: pp,
    useLayoutEffect: hp,
    useMemo: yp,
    useReducer: Jl,
    useRef: fp,
    useState: function () {
      return Jl(mo)
    },
    useDebugValue: su,
    useDeferredValue: function (e) {
      var t = et()
      return pe === null ? (t.memoizedState = e) : wp(t, pe.memoizedState, e)
    },
    useTransition: function () {
      var e = Jl(mo)[0],
        t = et().memoizedState
      return [e, t]
    },
    useMutableSource: ip,
    useSyncExternalStore: lp,
    useId: Sp,
    unstable_isNewReconciler: !1,
  }
function ot(e, t) {
  if (e && e.defaultProps) {
    ;(t = se({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
function Ks(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : se({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var al = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Dn(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = Le(),
      o = nn(e),
      i = Ot(r, o)
    ;(i.payload = t),
      n != null && (i.callback = n),
      (t = en(e, i, o)),
      t !== null && (at(t, e, o, r), ui(t, e, o))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = Le(),
      o = nn(e),
      i = Ot(r, o)
    ;(i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = en(e, i, o)),
      t !== null && (at(t, e, o, r), ui(t, e, o))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = Le(),
      r = nn(e),
      o = Ot(n, r)
    ;(o.tag = 2),
      t != null && (o.callback = t),
      (t = en(e, o, r)),
      t !== null && (at(t, e, r, n), ui(t, e, r))
  },
}
function jc(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !so(n, r) || !so(o, i)
        : !0
  )
}
function Pp(e, t, n) {
  var r = !1,
    o = ln,
    i = t.contextType
  return (
    typeof i == 'object' && i !== null
      ? (i = qe(i))
      : ((o = je(t) ? Tn : Ne.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? dr(e, o) : ln)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = al),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  )
}
function bc(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && al.enqueueReplaceState(t, t.state, null)
}
function Xs(e, t, n, r) {
  var o = e.stateNode
  ;(o.props = n), (o.state = e.memoizedState), (o.refs = {}), qa(e)
  var i = t.contextType
  typeof i == 'object' && i !== null
    ? (o.context = qe(i))
    : ((i = je(t) ? Tn : Ne.current), (o.context = dr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Ks(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && al.enqueueReplaceState(o, o.state, null),
      Mi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308)
}
function mr(e, t) {
  try {
    var n = '',
      r = t
    do (n += tg(r)), (r = r.return)
    while (r)
    var o = n
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack
  }
  return { value: e, source: t, stack: o, digest: null }
}
function ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Qs(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var T0 = typeof WeakMap == 'function' ? WeakMap : Map
function Rp(e, t, n) {
  ;(n = Ot(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      $i || (($i = !0), (la = r)), Qs(e, t)
    }),
    n
  )
}
function kp(e, t, n) {
  ;(n = Ot(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var o = t.value
    ;(n.payload = function () {
      return r(o)
    }),
      (n.callback = function () {
        Qs(e, t)
      })
  }
  var i = e.stateNode
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Qs(e, t),
          typeof r != 'function' &&
            (tn === null ? (tn = new Set([this])) : tn.add(this))
        var l = t.stack
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : '' })
      }),
    n
  )
}
function Fc(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new T0()
    var o = new Set()
    r.set(t, o)
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o))
  o.has(n) || (o.add(n), (e = W0.bind(null, e, t, n)), t.then(e, e))
}
function $c(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function Bc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ot(-1, 1)), (t.tag = 2), en(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var _0 = $t.ReactCurrentOwner,
  Me = !1
function Ae(e, t, n, r) {
  t.child = e === null ? tp(t, null, n, r) : pr(t, e.child, n, r)
}
function Wc(e, t, n, r, o) {
  n = n.render
  var i = t.ref
  return (
    lr(t, o),
    (r = ou(e, t, n, r, i, o)),
    (n = iu()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        jt(e, t, o))
      : (oe && n && Ga(t), (t.flags |= 1), Ae(e, t, r, o), t.child)
  )
}
function Hc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type
    return typeof i == 'function' &&
      !mu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Np(e, t, i, r, o))
      : ((e = mi(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : so), n(l, r) && e.ref === t.ref)
    )
      return jt(e, t, o)
  }
  return (
    (t.flags |= 1),
    (e = rn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function Np(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps
    if (so(i, r) && e.ref === t.ref)
      if (((Me = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Me = !0)
      else return (t.lanes = e.lanes), jt(e, t, o)
  }
  return Zs(e, t, n, r, o)
}
function Tp(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        q(tr, $e),
        ($e |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          q(tr, $e),
          ($e |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        q(tr, $e),
        ($e |= r)
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      q(tr, $e),
      ($e |= r)
  return Ae(e, t, o, n), t.child
}
function _p(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Zs(e, t, n, r, o) {
  var i = je(n) ? Tn : Ne.current
  return (
    (i = dr(t, i)),
    lr(t, o),
    (n = ou(e, t, n, r, i, o)),
    (r = iu()),
    e !== null && !Me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        jt(e, t, o))
      : (oe && r && Ga(t), (t.flags |= 1), Ae(e, t, n, o), t.child)
  )
}
function Vc(e, t, n, r, o) {
  if (je(n)) {
    var i = !0
    Ai(t)
  } else i = !1
  if ((lr(t, o), t.stateNode === null))
    fi(e, t), Pp(t, n, r), Xs(t, n, r, o), (r = !0)
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps
    l.props = s
    var a = l.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = qe(u))
      : ((u = je(n) ? Tn : Ne.current), (u = dr(t, u)))
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == 'function' || typeof l.getSnapshotBeforeUpdate == 'function'
    f ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((s !== r || a !== u) && bc(t, l, r, u)),
      (Ut = !1)
    var p = t.memoizedState
    ;(l.state = p),
      Mi(t, r, l, o),
      (a = t.memoizedState),
      s !== r || p !== a || De.current || Ut
        ? (typeof d == 'function' && (Ks(t, n, d, r), (a = t.memoizedState)),
          (s = Ut || jc(t, n, s, r, p, a, u))
            ? (f ||
                (typeof l.UNSAFE_componentWillMount != 'function' &&
                  typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(l = t.stateNode),
      rp(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : ot(t.type, s)),
      (l.props = u),
      (f = t.pendingProps),
      (p = l.context),
      (a = n.contextType),
      typeof a == 'object' && a !== null
        ? (a = qe(a))
        : ((a = je(n) ? Tn : Ne.current), (a = dr(t, a)))
    var y = n.getDerivedStateFromProps
    ;(d =
      typeof y == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((s !== f || p !== a) && bc(t, l, r, a)),
      (Ut = !1),
      (p = t.memoizedState),
      (l.state = p),
      Mi(t, r, l, o)
    var w = t.memoizedState
    s !== f || p !== w || De.current || Ut
      ? (typeof y == 'function' && (Ks(t, n, y, r), (w = t.memoizedState)),
        (u = Ut || jc(t, n, u, r, p, w, a) || !1)
          ? (d ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' &&
                typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' &&
                l.componentWillUpdate(r, w, a),
              typeof l.UNSAFE_componentWillUpdate == 'function' &&
                l.UNSAFE_componentWillUpdate(r, w, a)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (l.props = r),
        (l.state = w),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return Js(e, t, n, r, i, o)
}
function Js(e, t, n, r, o, i) {
  _p(e, t)
  var l = (t.flags & 128) !== 0
  if (!r && !l) return o && _c(t, n, !1), jt(e, t, i)
  ;(r = t.stateNode), (_0.current = t)
  var s =
    l && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = pr(t, e.child, null, i)), (t.child = pr(t, null, s, i)))
      : Ae(e, t, s, i),
    (t.memoizedState = r.state),
    o && _c(t, n, !0),
    t.child
  )
}
function Ap(e) {
  var t = e.stateNode
  t.pendingContext
    ? Tc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Tc(e, t.context, !1),
    eu(e, t.containerInfo)
}
function Uc(e, t, n, r, o) {
  return fr(), Ka(o), (t.flags |= 256), Ae(e, t, n, r), t.child
}
var qs = { dehydrated: null, treeContext: null, retryLane: 0 }
function ea(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function Lp(e, t, n) {
  var r = t.pendingProps,
    o = ie.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    q(ie, o & 1),
    e === null)
  )
    return (
      Gs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: 'hidden', children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = dl(l, r, 0, null)),
              (e = Nn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ea(n)),
              (t.memoizedState = qs),
              e)
            : au(t, l))
    )
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return A0(e, t, l, r, s, o, n)
  if (i) {
    ;(i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling)
    var a = { mode: 'hidden', children: r.children }
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = rn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = rn(s, i)) : ((i = Nn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? ea(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = qs),
      r
    )
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = rn(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function au(e, t) {
  return (
    (t = dl({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Vo(e, t, n, r) {
  return (
    r !== null && Ka(r),
    pr(t, e.child, null, n),
    (e = au(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function A0(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ql(Error(T(422)))), Vo(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = dl({ mode: 'visible', children: r.children }, o, 0, null)),
          (i = Nn(i, o, l, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && pr(t, e.child, null, l),
          (t.child.memoizedState = ea(l)),
          (t.memoizedState = qs),
          i)
  if (!(t.mode & 1)) return Vo(e, t, l, null)
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst
    return (r = s), (i = Error(T(419))), (r = ql(i, r, void 0)), Vo(e, t, l, r)
  }
  if (((s = (l & e.childLanes) !== 0), Me || s)) {
    if (((r = ve), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2
          break
        case 16:
          o = 8
          break
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
          o = 32
          break
        case 536870912:
          o = 268435456
          break
        default:
          o = 0
      }
      ;(o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Dt(e, o), at(r, e, o, -1))
    }
    return hu(), (r = ql(Error(T(421)))), Vo(e, t, l, r)
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = H0.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (He = qt(o.nextSibling)),
      (Ve = t),
      (oe = !0),
      (lt = null),
      e !== null &&
        ((Xe[Qe++] = At),
        (Xe[Qe++] = Lt),
        (Xe[Qe++] = _n),
        (At = e.id),
        (Lt = e.overflow),
        (_n = t)),
      (t = au(t, r.children)),
      (t.flags |= 4096),
      t)
}
function Gc(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), Ys(e.return, t, n)
}
function es(e, t, n, r, o) {
  var i = e.memoizedState
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o))
}
function Op(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail
  if ((Ae(e, t, r.children, n), (r = ie.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Gc(e, n, t)
        else if (e.tag === 19) Gc(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((q(ie, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Di(e) === null && (o = n),
            (n = n.sibling)
        ;(n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          es(t, !1, o, n, i)
        break
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Di(e) === null)) {
            t.child = o
            break
          }
          ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
        }
        es(t, !0, n, null, i)
        break
      case 'together':
        es(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function fi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function jt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ln |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(T(153))
  if (t.child !== null) {
    for (
      e = t.child, n = rn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = rn(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function L0(e, t, n) {
  switch (t.tag) {
    case 3:
      Ap(t), fr()
      break
    case 5:
      op(t)
      break
    case 1:
      je(t.type) && Ai(t)
      break
    case 4:
      eu(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value
      q(zi, r._currentValue), (r._currentValue = o)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (q(ie, ie.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? Lp(e, t, n)
            : (q(ie, ie.current & 1),
              (e = jt(e, t, n)),
              e !== null ? e.sibling : null)
      q(ie, ie.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Op(e, t, n)
        t.flags |= 128
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        q(ie, ie.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), Tp(e, t, n)
  }
  return jt(e, t, n)
}
var zp, ta, Ip, Mp
zp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
ta = function () {}
Ip = function (e, t, n, r) {
  var o = e.memoizedProps
  if (o !== r) {
    ;(e = t.stateNode), Rn(Ct.current)
    var i = null
    switch (n) {
      case 'input':
        ;(o = Es(e, o)), (r = Es(e, r)), (i = [])
        break
      case 'select':
        ;(o = se({}, o, { value: void 0 })),
          (r = se({}, r, { value: void 0 })),
          (i = [])
        break
      case 'textarea':
        ;(o = ks(e, o)), (r = ks(e, r)), (i = [])
        break
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = Ti)
    }
    Ts(n, r)
    var l
    n = null
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === 'style') {
          var s = o[u]
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (eo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null))
    for (u in r) {
      var a = r[u]
      if (
        ((s = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === 'style')
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ''))
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]))
          } else n || (i || (i = []), i.push(u, n)), (n = a)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(u, a))
            : u === 'children'
              ? (typeof a != 'string' && typeof a != 'number') ||
                (i = i || []).push(u, '' + a)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (eo.hasOwnProperty(u)
                  ? (a != null && u === 'onScroll' && te('scroll', e),
                    i || s === a || (i = []))
                  : (i = i || []).push(u, a))
    }
    n && (i = i || []).push('style', n)
    var u = i
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
Mp = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function Dr(e, t) {
  if (!oe)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function Re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling)
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function O0(e, t, n) {
  var r = t.pendingProps
  switch ((Ya(t), t.tag)) {
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
      return Re(t), null
    case 1:
      return je(t.type) && _i(), Re(t), null
    case 3:
      return (
        (r = t.stateNode),
        hr(),
        ne(De),
        ne(Ne),
        nu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Wo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), lt !== null && (ua(lt), (lt = null)))),
        ta(e, t),
        Re(t),
        null
      )
    case 5:
      tu(t)
      var o = Rn(po.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        Ip(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166))
          return Re(t), null
        }
        if (((e = Rn(Ct.current)), Wo(t))) {
          ;(r = t.stateNode), (n = t.type)
          var i = t.memoizedProps
          switch (((r[wt] = t), (r[co] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              te('cancel', r), te('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              te('load', r)
              break
            case 'video':
            case 'audio':
              for (o = 0; o < Wr.length; o++) te(Wr[o], r)
              break
            case 'source':
              te('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              te('error', r), te('load', r)
              break
            case 'details':
              te('toggle', r)
              break
            case 'input':
              tc(r, i), te('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!i.multiple }),
                te('invalid', r)
              break
            case 'textarea':
              rc(r, i), te('invalid', r)
          }
          Ts(n, i), (o = null)
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l]
              l === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Bo(r.textContent, s, e),
                    (o = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Bo(r.textContent, s, e),
                    (o = ['children', '' + s]))
                : eo.hasOwnProperty(l) &&
                  s != null &&
                  l === 'onScroll' &&
                  te('scroll', r)
            }
          switch (n) {
            case 'input':
              zo(r), nc(r, i, !0)
              break
            case 'textarea':
              zo(r), oc(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof i.onClick == 'function' && (r.onclick = Ti)
          }
          ;(r = o), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = uf(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = l.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = l.createElement(n, { is: r.is }))
                  : ((e = l.createElement(n)),
                    n === 'select' &&
                      ((l = e),
                      r.multiple
                        ? (l.multiple = !0)
                        : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[wt] = t),
            (e[co] = r),
            zp(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((l = _s(n, r)), n)) {
              case 'dialog':
                te('cancel', e), te('close', e), (o = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                te('load', e), (o = r)
                break
              case 'video':
              case 'audio':
                for (o = 0; o < Wr.length; o++) te(Wr[o], e)
                o = r
                break
              case 'source':
                te('error', e), (o = r)
                break
              case 'img':
              case 'image':
              case 'link':
                te('error', e), te('load', e), (o = r)
                break
              case 'details':
                te('toggle', e), (o = r)
                break
              case 'input':
                tc(e, r), (o = Es(e, r)), te('invalid', e)
                break
              case 'option':
                o = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = se({}, r, { value: void 0 })),
                  te('invalid', e)
                break
              case 'textarea':
                rc(e, r), (o = ks(e, r)), te('invalid', e)
                break
              default:
                o = r
            }
            Ts(n, o), (s = o)
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i]
                i === 'style'
                  ? ff(e, a)
                  : i === 'dangerouslySetInnerHTML'
                    ? ((a = a ? a.__html : void 0), a != null && cf(e, a))
                    : i === 'children'
                      ? typeof a == 'string'
                        ? (n !== 'textarea' || a !== '') && to(e, a)
                        : typeof a == 'number' && to(e, '' + a)
                      : i !== 'suppressContentEditableWarning' &&
                        i !== 'suppressHydrationWarning' &&
                        i !== 'autoFocus' &&
                        (eo.hasOwnProperty(i)
                          ? a != null && i === 'onScroll' && te('scroll', e)
                          : a != null && Oa(e, i, a, l))
              }
            switch (n) {
              case 'input':
                zo(e), nc(e, r, !1)
                break
              case 'textarea':
                zo(e), oc(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + on(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? nr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      nr(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof o.onClick == 'function' && (e.onclick = Ti)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return Re(t), null
    case 6:
      if (e && t.stateNode != null) Mp(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(T(166))
        if (((n = Rn(po.current)), Rn(Ct.current), Wo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[wt] = t),
            (i = r.nodeValue !== n) && ((e = Ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                Bo(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Bo(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          i && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[wt] = t),
            (t.stateNode = r)
      }
      return Re(t), null
    case 13:
      if (
        (ne(ie),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (oe && He !== null && t.mode & 1 && !(t.flags & 128))
          qf(), fr(), (t.flags |= 98560), (i = !1)
        else if (((i = Wo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(T(318))
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(T(317))
            i[wt] = t
          } else
            fr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          Re(t), (i = !1)
        } else lt !== null && (ua(lt), (lt = null)), (i = !0)
        if (!i) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ie.current & 1 ? he === 0 && (he = 3) : hu())),
          t.updateQueue !== null && (t.flags |= 4),
          Re(t),
          null)
    case 4:
      return (
        hr(), ta(e, t), e === null && ao(t.stateNode.containerInfo), Re(t), null
      )
    case 10:
      return Za(t.type._context), Re(t), null
    case 17:
      return je(t.type) && _i(), Re(t), null
    case 19:
      if ((ne(ie), (i = t.memoizedState), i === null)) return Re(t), null
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) Dr(i, !1)
        else {
          if (he !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Di(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    Dr(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return q(ie, (ie.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          i.tail !== null &&
            ce() > vr &&
            ((t.flags |= 128), (r = !0), Dr(i, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = Di(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Dr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !oe)
            )
              return Re(t), null
          } else
            2 * ce() - i.renderingStartTime > vr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Dr(i, !1), (t.lanes = 4194304))
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l))
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ce()),
          (t.sibling = null),
          (n = ie.current),
          q(ie, r ? (n & 1) | 2 : n & 1),
          t)
        : (Re(t), null)
    case 22:
    case 23:
      return (
        pu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? $e & 1073741824 && (Re(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Re(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(T(156, t.tag))
}
function z0(e, t) {
  switch ((Ya(t), t.tag)) {
    case 1:
      return (
        je(t.type) && _i(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        hr(),
        ne(De),
        ne(Ne),
        nu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return tu(t), null
    case 13:
      if (
        (ne(ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(T(340))
        fr()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return ne(ie), null
    case 4:
      return hr(), null
    case 10:
      return Za(t.type._context), null
    case 22:
    case 23:
      return pu(), null
    case 24:
      return null
    default:
      return null
  }
}
var Uo = !1,
  ke = !1,
  I0 = typeof WeakSet == 'function' ? WeakSet : Set,
  O = null
function er(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        ae(e, t, r)
      }
    else n.current = null
}
function na(e, t, n) {
  try {
    n()
  } catch (r) {
    ae(e, t, r)
  }
}
var Yc = !1
function M0(e, t) {
  if (((Fs = Ri), (e = $f()), Ua(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var o = r.anchorOffset,
            i = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, i.nodeType
          } catch {
            n = null
            break e
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            d = 0,
            f = e,
            p = null
          t: for (;;) {
            for (
              var y;
              f !== n || (o !== 0 && f.nodeType !== 3) || (s = l + o),
                f !== i || (r !== 0 && f.nodeType !== 3) || (a = l + r),
                f.nodeType === 3 && (l += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (p = f), (f = y)
            for (;;) {
              if (f === e) break t
              if (
                (p === n && ++u === o && (s = l),
                p === i && ++d === r && (a = l),
                (y = f.nextSibling) !== null)
              )
                break
              ;(f = p), (p = f.parentNode)
            }
            f = y
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for ($s = { focusedElem: e, selectionRange: n }, Ri = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e)
    else
      for (; O !== null; ) {
        t = O
        try {
          var w = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (w !== null) {
                  var g = w.memoizedProps,
                    C = w.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : ot(t.type, g),
                      C,
                    )
                  m.__reactInternalSnapshotBeforeUpdate = h
                }
                break
              case 3:
                var v = t.stateNode.containerInfo
                v.nodeType === 1
                  ? (v.textContent = '')
                  : v.nodeType === 9 &&
                    v.documentElement &&
                    v.removeChild(v.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(T(163))
            }
        } catch (x) {
          ae(t, t.return, x)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (O = e)
          break
        }
        O = t.return
      }
  return (w = Yc), (Yc = !1), w
}
function Qr(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next)
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy
        ;(o.destroy = void 0), i !== void 0 && na(t, n, i)
      }
      o = o.next
    } while (o !== r)
  }
}
function ul(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function ra(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function Dp(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), Dp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[wt], delete t[co], delete t[Hs], delete t[g0], delete t[y0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function jp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Kc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || jp(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function oa(e, t, n) {
  var r = e.tag
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
          n != null || t.onclick !== null || (t.onclick = Ti))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (oa(e, t, n), e = e.sibling; e !== null; ) oa(e, t, n), (e = e.sibling)
}
function ia(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ia(e, t, n), e = e.sibling; e !== null; ) ia(e, t, n), (e = e.sibling)
}
var ge = null,
  it = !1
function Wt(e, t, n) {
  for (n = n.child; n !== null; ) bp(e, t, n), (n = n.sibling)
}
function bp(e, t, n) {
  if (xt && typeof xt.onCommitFiberUnmount == 'function')
    try {
      xt.onCommitFiberUnmount(tl, n)
    } catch {}
  switch (n.tag) {
    case 5:
      ke || er(n, t)
    case 6:
      var r = ge,
        o = it
      ;(ge = null),
        Wt(e, t, n),
        (ge = r),
        (it = o),
        ge !== null &&
          (it
            ? ((e = ge),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ge.removeChild(n.stateNode))
      break
    case 18:
      ge !== null &&
        (it
          ? ((e = ge),
            (n = n.stateNode),
            e.nodeType === 8
              ? Yl(e.parentNode, n)
              : e.nodeType === 1 && Yl(e, n),
            io(e))
          : Yl(ge, n.stateNode))
      break
    case 4:
      ;(r = ge),
        (o = it),
        (ge = n.stateNode.containerInfo),
        (it = !0),
        Wt(e, t, n),
        (ge = r),
        (it = o)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ke &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next
        do {
          var i = o,
            l = i.destroy
          ;(i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && na(n, t, l),
            (o = o.next)
        } while (o !== r)
      }
      Wt(e, t, n)
      break
    case 1:
      if (
        !ke &&
        (er(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (s) {
          ae(n, t, s)
        }
      Wt(e, t, n)
      break
    case 21:
      Wt(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((ke = (r = ke) || n.memoizedState !== null), Wt(e, t, n), (ke = r))
        : Wt(e, t, n)
      break
    default:
      Wt(e, t, n)
  }
}
function Xc(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new I0()),
      t.forEach(function (r) {
        var o = V0.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(o, o))
      })
  }
}
function rt(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r]
      try {
        var i = e,
          l = t,
          s = l
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ;(ge = s.stateNode), (it = !1)
              break e
            case 3:
              ;(ge = s.stateNode.containerInfo), (it = !0)
              break e
            case 4:
              ;(ge = s.stateNode.containerInfo), (it = !0)
              break e
          }
          s = s.return
        }
        if (ge === null) throw Error(T(160))
        bp(i, l, o), (ge = null), (it = !1)
        var a = o.alternate
        a !== null && (a.return = null), (o.return = null)
      } catch (u) {
        ae(o, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Fp(t, e), (t = t.sibling)
}
function Fp(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((rt(t, e), vt(e), r & 4)) {
        try {
          Qr(3, e, e.return), ul(3, e)
        } catch (g) {
          ae(e, e.return, g)
        }
        try {
          Qr(5, e, e.return)
        } catch (g) {
          ae(e, e.return, g)
        }
      }
      break
    case 1:
      rt(t, e), vt(e), r & 512 && n !== null && er(n, n.return)
      break
    case 5:
      if (
        (rt(t, e),
        vt(e),
        r & 512 && n !== null && er(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode
        try {
          to(o, '')
        } catch (g) {
          ae(e, e.return, g)
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue
        if (((e.updateQueue = null), a !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && sf(o, i),
              _s(s, l)
            var u = _s(s, i)
            for (l = 0; l < a.length; l += 2) {
              var d = a[l],
                f = a[l + 1]
              d === 'style'
                ? ff(o, f)
                : d === 'dangerouslySetInnerHTML'
                  ? cf(o, f)
                  : d === 'children'
                    ? to(o, f)
                    : Oa(o, d, f, u)
            }
            switch (s) {
              case 'input':
                Ps(o, i)
                break
              case 'textarea':
                af(o, i)
                break
              case 'select':
                var p = o._wrapperState.wasMultiple
                o._wrapperState.wasMultiple = !!i.multiple
                var y = i.value
                y != null
                  ? nr(o, !!i.multiple, y, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? nr(o, !!i.multiple, i.defaultValue, !0)
                      : nr(o, !!i.multiple, i.multiple ? [] : '', !1))
            }
            o[co] = i
          } catch (g) {
            ae(e, e.return, g)
          }
      }
      break
    case 6:
      if ((rt(t, e), vt(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162))
        ;(o = e.stateNode), (i = e.memoizedProps)
        try {
          o.nodeValue = i
        } catch (g) {
          ae(e, e.return, g)
        }
      }
      break
    case 3:
      if (
        (rt(t, e), vt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          io(t.containerInfo)
        } catch (g) {
          ae(e, e.return, g)
        }
      break
    case 4:
      rt(t, e), vt(e)
      break
    case 13:
      rt(t, e),
        vt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (du = ce())),
        r & 4 && Xc(e)
      break
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ke = (u = ke) || d), rt(t, e), (ke = u)) : rt(t, e),
        vt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (O = e, d = e.child; d !== null; ) {
            for (f = O = d; O !== null; ) {
              switch (((p = O), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qr(4, p, p.return)
                  break
                case 1:
                  er(p, p.return)
                  var w = p.stateNode
                  if (typeof w.componentWillUnmount == 'function') {
                    ;(r = p), (n = p.return)
                    try {
                      ;(t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount()
                    } catch (g) {
                      ae(r, n, g)
                    }
                  }
                  break
                case 5:
                  er(p, p.return)
                  break
                case 22:
                  if (p.memoizedState !== null) {
                    Zc(f)
                    continue
                  }
              }
              y !== null ? ((y.return = p), (O = y)) : Zc(f)
            }
            d = d.sibling
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f
              try {
                ;(o = f.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((s = f.stateNode),
                      (a = f.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty('display')
                          ? a.display
                          : null),
                      (s.style.display = df('display', l)))
              } catch (g) {
                ae(e, e.return, g)
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps
              } catch (g) {
                ae(e, e.return, g)
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ;(f.child.return = f), (f = f.child)
            continue
          }
          if (f === e) break e
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e
            d === f && (d = null), (f = f.return)
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling)
        }
      }
      break
    case 19:
      rt(t, e), vt(e), r & 4 && Xc(e)
      break
    case 21:
      break
    default:
      rt(t, e), vt(e)
  }
}
function vt(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (jp(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(T(160))
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode
          r.flags & 32 && (to(o, ''), (r.flags &= -33))
          var i = Kc(e)
          ia(e, i, o)
          break
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Kc(e)
          oa(e, s, l)
          break
        default:
          throw Error(T(161))
      }
    } catch (a) {
      ae(e, e.return, a)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function D0(e, t, n) {
  ;(O = e), $p(e)
}
function $p(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var o = O,
      i = o.child
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Uo
      if (!l) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || ke
        s = Uo
        var u = ke
        if (((Uo = l), (ke = a) && !u))
          for (O = o; O !== null; )
            (l = O),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Jc(o)
                : a !== null
                  ? ((a.return = l), (O = a))
                  : Jc(o)
        for (; i !== null; ) (O = i), $p(i), (i = i.sibling)
        ;(O = o), (Uo = s), (ke = u)
      }
      Qc(e)
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (O = i)) : Qc(e)
  }
}
function Qc(e) {
  for (; O !== null; ) {
    var t = O
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ke || ul(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !ke)
                if (n === null) r.componentDidMount()
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : ot(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  )
                }
              var i = t.updateQueue
              i !== null && Ic(t, i, r)
              break
            case 3:
              var l = t.updateQueue
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                Ic(t, l, n)
              }
              break
            case 5:
              var s = t.stateNode
              if (n === null && t.flags & 4) {
                n = s
                var a = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    a.autoFocus && n.focus()
                    break
                  case 'img':
                    a.src && (n.src = a.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var d = u.memoizedState
                  if (d !== null) {
                    var f = d.dehydrated
                    f !== null && io(f)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(T(163))
          }
        ke || (t.flags & 512 && ra(t))
      } catch (p) {
        ae(t, t.return, p)
      }
    }
    if (t === e) {
      O = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (O = n)
      break
    }
    O = t.return
  }
}
function Zc(e) {
  for (; O !== null; ) {
    var t = O
    if (t === e) {
      O = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (O = n)
      break
    }
    O = t.return
  }
}
function Jc(e) {
  for (; O !== null; ) {
    var t = O
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            ul(4, t)
          } catch (a) {
            ae(t, n, a)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var o = t.return
            try {
              r.componentDidMount()
            } catch (a) {
              ae(t, o, a)
            }
          }
          var i = t.return
          try {
            ra(t)
          } catch (a) {
            ae(t, i, a)
          }
          break
        case 5:
          var l = t.return
          try {
            ra(t)
          } catch (a) {
            ae(t, l, a)
          }
      }
    } catch (a) {
      ae(t, t.return, a)
    }
    if (t === e) {
      O = null
      break
    }
    var s = t.sibling
    if (s !== null) {
      ;(s.return = t.return), (O = s)
      break
    }
    O = t.return
  }
}
var j0 = Math.ceil,
  Fi = $t.ReactCurrentDispatcher,
  uu = $t.ReactCurrentOwner,
  Je = $t.ReactCurrentBatchConfig,
  U = 0,
  ve = null,
  fe = null,
  Se = 0,
  $e = 0,
  tr = pn(0),
  he = 0,
  go = null,
  Ln = 0,
  cl = 0,
  cu = 0,
  Zr = null,
  Ie = null,
  du = 0,
  vr = 1 / 0,
  Nt = null,
  $i = !1,
  la = null,
  tn = null,
  Go = !1,
  Xt = null,
  Bi = 0,
  Jr = 0,
  sa = null,
  pi = -1,
  hi = 0
function Le() {
  return U & 6 ? ce() : pi !== -1 ? pi : (pi = ce())
}
function nn(e) {
  return e.mode & 1
    ? U & 2 && Se !== 0
      ? Se & -Se
      : S0.transition !== null
        ? (hi === 0 && (hi = Pf()), hi)
        : ((e = K),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Lf(e.type))),
          e)
    : 1
}
function at(e, t, n, r) {
  if (50 < Jr) throw ((Jr = 0), (sa = null), Error(T(185)))
  xo(e, n, r),
    (!(U & 2) || e !== ve) &&
      (e === ve && (!(U & 2) && (cl |= n), he === 4 && Yt(e, Se)),
      be(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((vr = ce() + 500), ll && hn()))
}
function be(e, t) {
  var n = e.callbackNode
  Sg(e, t)
  var r = Pi(e, e === ve ? Se : 0)
  if (r === 0)
    n !== null && sc(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && sc(n), t === 1))
      e.tag === 0 ? w0(qc.bind(null, e)) : Qf(qc.bind(null, e)),
        m0(function () {
          !(U & 6) && hn()
        }),
        (n = null)
    else {
      switch (Rf(r)) {
        case 1:
          n = ja
          break
        case 4:
          n = Cf
          break
        case 16:
          n = Ei
          break
        case 536870912:
          n = Ef
          break
        default:
          n = Ei
      }
      n = Kp(n, Bp.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function Bp(e, t) {
  if (((pi = -1), (hi = 0), U & 6)) throw Error(T(327))
  var n = e.callbackNode
  if (sr() && e.callbackNode !== n) return null
  var r = Pi(e, e === ve ? Se : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = Wi(e, r)
  else {
    t = r
    var o = U
    U |= 2
    var i = Hp()
    ;(ve !== e || Se !== t) && ((Nt = null), (vr = ce() + 500), kn(e, t))
    do
      try {
        $0()
        break
      } catch (s) {
        Wp(e, s)
      }
    while (!0)
    Qa(),
      (Fi.current = i),
      (U = o),
      fe !== null ? (t = 0) : ((ve = null), (Se = 0), (t = he))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Is(e)), o !== 0 && ((r = o), (t = aa(e, o)))), t === 1)
    )
      throw ((n = go), kn(e, 0), Yt(e, r), be(e, ce()), n)
    if (t === 6) Yt(e, r)
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !b0(o) &&
          ((t = Wi(e, r)),
          t === 2 && ((i = Is(e)), i !== 0 && ((r = i), (t = aa(e, i)))),
          t === 1))
      )
        throw ((n = go), kn(e, 0), Yt(e, r), be(e, ce()), n)
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345))
        case 2:
          Cn(e, Ie, Nt)
          break
        case 3:
          if (
            (Yt(e, r), (r & 130023424) === r && ((t = du + 500 - ce()), 10 < t))
          ) {
            if (Pi(e, 0) !== 0) break
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Le(), (e.pingedLanes |= e.suspendedLanes & o)
              break
            }
            e.timeoutHandle = Ws(Cn.bind(null, e, Ie, Nt), t)
            break
          }
          Cn(e, Ie, Nt)
          break
        case 4:
          if ((Yt(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - st(r)
            ;(i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i)
          }
          if (
            ((r = o),
            (r = ce() - r),
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
                          : 1960 * j0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ws(Cn.bind(null, e, Ie, Nt), r)
            break
          }
          Cn(e, Ie, Nt)
          break
        case 5:
          Cn(e, Ie, Nt)
          break
        default:
          throw Error(T(329))
      }
    }
  }
  return be(e, ce()), e.callbackNode === n ? Bp.bind(null, e) : null
}
function aa(e, t) {
  var n = Zr
  return (
    e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256),
    (e = Wi(e, t)),
    e !== 2 && ((t = Ie), (Ie = n), t !== null && ua(t)),
    e
  )
}
function ua(e) {
  Ie === null ? (Ie = e) : Ie.push.apply(Ie, e)
}
function b0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot
          o = o.value
          try {
            if (!ut(i(), o)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function Yt(e, t) {
  for (
    t &= ~cu,
      t &= ~cl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - st(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function qc(e) {
  if (U & 6) throw Error(T(327))
  sr()
  var t = Pi(e, 0)
  if (!(t & 1)) return be(e, ce()), null
  var n = Wi(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = Is(e)
    r !== 0 && ((t = r), (n = aa(e, r)))
  }
  if (n === 1) throw ((n = go), kn(e, 0), Yt(e, t), be(e, ce()), n)
  if (n === 6) throw Error(T(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Cn(e, Ie, Nt),
    be(e, ce()),
    null
  )
}
function fu(e, t) {
  var n = U
  U |= 1
  try {
    return e(t)
  } finally {
    ;(U = n), U === 0 && ((vr = ce() + 500), ll && hn())
  }
}
function On(e) {
  Xt !== null && Xt.tag === 0 && !(U & 6) && sr()
  var t = U
  U |= 1
  var n = Je.transition,
    r = K
  try {
    if (((Je.transition = null), (K = 1), e)) return e()
  } finally {
    ;(K = r), (Je.transition = n), (U = t), !(U & 6) && hn()
  }
}
function pu() {
  ;($e = tr.current), ne(tr)
}
function kn(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), h0(n)), fe !== null))
    for (n = fe.return; n !== null; ) {
      var r = n
      switch ((Ya(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && _i()
          break
        case 3:
          hr(), ne(De), ne(Ne), nu()
          break
        case 5:
          tu(r)
          break
        case 4:
          hr()
          break
        case 13:
          ne(ie)
          break
        case 19:
          ne(ie)
          break
        case 10:
          Za(r.type._context)
          break
        case 22:
        case 23:
          pu()
      }
      n = n.return
    }
  if (
    ((ve = e),
    (fe = e = rn(e.current, null)),
    (Se = $e = t),
    (he = 0),
    (go = null),
    (cu = cl = Ln = 0),
    (Ie = Zr = null),
    Pn !== null)
  ) {
    for (t = 0; t < Pn.length; t++)
      if (((n = Pn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var o = r.next,
          i = n.pending
        if (i !== null) {
          var l = i.next
          ;(i.next = o), (r.next = l)
        }
        n.pending = r
      }
    Pn = null
  }
  return e
}
function Wp(e, t) {
  do {
    var n = fe
    try {
      if ((Qa(), (ci.current = bi), ji)) {
        for (var r = le.memoizedState; r !== null; ) {
          var o = r.queue
          o !== null && (o.pending = null), (r = r.next)
        }
        ji = !1
      }
      if (
        ((An = 0),
        (me = pe = le = null),
        (Xr = !1),
        (ho = 0),
        (uu.current = null),
        n === null || n.return === null)
      ) {
        ;(he = 1), (go = t), (fe = null)
        break
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          a = t
        if (
          ((t = Se),
          (s.flags |= 32768),
          a !== null && typeof a == 'object' && typeof a.then == 'function')
        ) {
          var u = a,
            d = s,
            f = d.tag
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var p = d.alternate
            p
              ? ((d.updateQueue = p.updateQueue),
                (d.memoizedState = p.memoizedState),
                (d.lanes = p.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null))
          }
          var y = $c(l)
          if (y !== null) {
            ;(y.flags &= -257),
              Bc(y, l, s, i, t),
              y.mode & 1 && Fc(i, u, t),
              (t = y),
              (a = u)
            var w = t.updateQueue
            if (w === null) {
              var g = new Set()
              g.add(a), (t.updateQueue = g)
            } else w.add(a)
            break e
          } else {
            if (!(t & 1)) {
              Fc(i, u, t), hu()
              break e
            }
            a = Error(T(426))
          }
        } else if (oe && s.mode & 1) {
          var C = $c(l)
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              Bc(C, l, s, i, t),
              Ka(mr(a, s))
            break e
          }
        }
        ;(i = a = mr(a, s)),
          he !== 4 && (he = 2),
          Zr === null ? (Zr = [i]) : Zr.push(i),
          (i = l)
        do {
          switch (i.tag) {
            case 3:
              ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
              var m = Rp(i, a, t)
              zc(i, m)
              break e
            case 1:
              s = a
              var h = i.type,
                v = i.stateNode
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (v !== null &&
                    typeof v.componentDidCatch == 'function' &&
                    (tn === null || !tn.has(v))))
              ) {
                ;(i.flags |= 65536), (t &= -t), (i.lanes |= t)
                var x = kp(i, s, t)
                zc(i, x)
                break e
              }
          }
          i = i.return
        } while (i !== null)
      }
      Up(n)
    } catch (E) {
      ;(t = E), fe === n && n !== null && (fe = n = n.return)
      continue
    }
    break
  } while (!0)
}
function Hp() {
  var e = Fi.current
  return (Fi.current = bi), e === null ? bi : e
}
function hu() {
  ;(he === 0 || he === 3 || he === 2) && (he = 4),
    ve === null || (!(Ln & 268435455) && !(cl & 268435455)) || Yt(ve, Se)
}
function Wi(e, t) {
  var n = U
  U |= 2
  var r = Hp()
  ;(ve !== e || Se !== t) && ((Nt = null), kn(e, t))
  do
    try {
      F0()
      break
    } catch (o) {
      Wp(e, o)
    }
  while (!0)
  if ((Qa(), (U = n), (Fi.current = r), fe !== null)) throw Error(T(261))
  return (ve = null), (Se = 0), he
}
function F0() {
  for (; fe !== null; ) Vp(fe)
}
function $0() {
  for (; fe !== null && !dg(); ) Vp(fe)
}
function Vp(e) {
  var t = Yp(e.alternate, e, $e)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? Up(e) : (fe = t),
    (uu.current = null)
}
function Up(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = z0(n, t)), n !== null)) {
        ;(n.flags &= 32767), (fe = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(he = 6), (fe = null)
        return
      }
    } else if (((n = O0(n, t, $e)), n !== null)) {
      fe = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      fe = t
      return
    }
    fe = t = e
  } while (t !== null)
  he === 0 && (he = 5)
}
function Cn(e, t, n) {
  var r = K,
    o = Je.transition
  try {
    ;(Je.transition = null), (K = 1), B0(e, t, n, r)
  } finally {
    ;(Je.transition = o), (K = r)
  }
  return null
}
function B0(e, t, n, r) {
  do sr()
  while (Xt !== null)
  if (U & 6) throw Error(T(327))
  n = e.finishedWork
  var o = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var i = n.lanes | n.childLanes
  if (
    (xg(e, i),
    e === ve && ((fe = ve = null), (Se = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Go ||
      ((Go = !0),
      Kp(Ei, function () {
        return sr(), null
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    ;(i = Je.transition), (Je.transition = null)
    var l = K
    K = 1
    var s = U
    ;(U |= 4),
      (uu.current = null),
      M0(e, n),
      Fp(n, e),
      s0($s),
      (Ri = !!Fs),
      ($s = Fs = null),
      (e.current = n),
      D0(n),
      fg(),
      (U = s),
      (K = l),
      (Je.transition = i)
  } else e.current = n
  if (
    (Go && ((Go = !1), (Xt = e), (Bi = o)),
    (i = e.pendingLanes),
    i === 0 && (tn = null),
    mg(n.stateNode),
    be(e, ce()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest })
  if ($i) throw (($i = !1), (e = la), (la = null), e)
  return (
    Bi & 1 && e.tag !== 0 && sr(),
    (i = e.pendingLanes),
    i & 1 ? (e === sa ? Jr++ : ((Jr = 0), (sa = e))) : (Jr = 0),
    hn(),
    null
  )
}
function sr() {
  if (Xt !== null) {
    var e = Rf(Bi),
      t = Je.transition,
      n = K
    try {
      if (((Je.transition = null), (K = 16 > e ? 16 : e), Xt === null))
        var r = !1
      else {
        if (((e = Xt), (Xt = null), (Bi = 0), U & 6)) throw Error(T(331))
        var o = U
        for (U |= 4, O = e.current; O !== null; ) {
          var i = O,
            l = i.child
          if (O.flags & 16) {
            var s = i.deletions
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a]
                for (O = u; O !== null; ) {
                  var d = O
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qr(8, d, i)
                  }
                  var f = d.child
                  if (f !== null) (f.return = d), (O = f)
                  else
                    for (; O !== null; ) {
                      d = O
                      var p = d.sibling,
                        y = d.return
                      if ((Dp(d), d === u)) {
                        O = null
                        break
                      }
                      if (p !== null) {
                        ;(p.return = y), (O = p)
                        break
                      }
                      O = y
                    }
                }
              }
              var w = i.alternate
              if (w !== null) {
                var g = w.child
                if (g !== null) {
                  w.child = null
                  do {
                    var C = g.sibling
                    ;(g.sibling = null), (g = C)
                  } while (g !== null)
                }
              }
              O = i
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (O = l)
          else
            e: for (; O !== null; ) {
              if (((i = O), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qr(9, i, i.return)
                }
              var m = i.sibling
              if (m !== null) {
                ;(m.return = i.return), (O = m)
                break e
              }
              O = i.return
            }
        }
        var h = e.current
        for (O = h; O !== null; ) {
          l = O
          var v = l.child
          if (l.subtreeFlags & 2064 && v !== null) (v.return = l), (O = v)
          else
            e: for (l = h; O !== null; ) {
              if (((s = O), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ul(9, s)
                  }
                } catch (E) {
                  ae(s, s.return, E)
                }
              if (s === l) {
                O = null
                break e
              }
              var x = s.sibling
              if (x !== null) {
                ;(x.return = s.return), (O = x)
                break e
              }
              O = s.return
            }
        }
        if (
          ((U = o), hn(), xt && typeof xt.onPostCommitFiberRoot == 'function')
        )
          try {
            xt.onPostCommitFiberRoot(tl, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(K = n), (Je.transition = t)
    }
  }
  return !1
}
function ed(e, t, n) {
  ;(t = mr(n, t)),
    (t = Rp(e, t, 1)),
    (e = en(e, t, 1)),
    (t = Le()),
    e !== null && (xo(e, 1, t), be(e, t))
}
function ae(e, t, n) {
  if (e.tag === 3) ed(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ed(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (tn === null || !tn.has(r)))
        ) {
          ;(e = mr(n, e)),
            (e = kp(t, e, 1)),
            (t = en(t, e, 1)),
            (e = Le()),
            t !== null && (xo(t, 1, e), be(t, e))
          break
        }
      }
      t = t.return
    }
}
function W0(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = Le()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ve === e &&
      (Se & n) === n &&
      (he === 4 || (he === 3 && (Se & 130023424) === Se && 500 > ce() - du)
        ? kn(e, 0)
        : (cu |= n)),
    be(e, t)
}
function Gp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Do), (Do <<= 1), !(Do & 130023424) && (Do = 4194304))
      : (t = 1))
  var n = Le()
  ;(e = Dt(e, t)), e !== null && (xo(e, t, n), be(e, n))
}
function H0(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), Gp(e, n)
}
function V0(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState
      o !== null && (n = o.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(T(314))
  }
  r !== null && r.delete(t), Gp(e, n)
}
var Yp
Yp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || De.current) Me = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Me = !1), L0(e, t, n)
      Me = !!(e.flags & 131072)
    }
  else (Me = !1), oe && t.flags & 1048576 && Zf(t, Oi, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      fi(e, t), (e = t.pendingProps)
      var o = dr(t, Ne.current)
      lr(t, n), (o = ou(null, t, r, e, o, n))
      var i = iu()
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            je(r) ? ((i = !0), Ai(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            qa(t),
            (o.updater = al),
            (t.stateNode = o),
            (o._reactInternals = t),
            Xs(t, r, e, n),
            (t = Js(null, t, r, !0, i, n)))
          : ((t.tag = 0), oe && i && Ga(t), Ae(null, t, o, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (fi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = G0(r)),
          (e = ot(r, e)),
          o)
        ) {
          case 0:
            t = Zs(null, t, r, e, n)
            break e
          case 1:
            t = Vc(null, t, r, e, n)
            break e
          case 11:
            t = Wc(null, t, r, e, n)
            break e
          case 14:
            t = Hc(null, t, r, ot(r.type, e), n)
            break e
        }
        throw Error(T(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ot(r, o)),
        Zs(e, t, r, o, n)
      )
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ot(r, o)),
        Vc(e, t, r, o, n)
      )
    case 3:
      e: {
        if ((Ap(t), e === null)) throw Error(T(387))
        ;(r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          rp(e, t),
          Mi(t, r, null, n)
        var l = t.memoizedState
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            ;(o = mr(Error(T(423)), t)), (t = Uc(e, t, r, n, o))
            break e
          } else if (r !== o) {
            ;(o = mr(Error(T(424)), t)), (t = Uc(e, t, r, n, o))
            break e
          } else
            for (
              He = qt(t.stateNode.containerInfo.firstChild),
                Ve = t,
                oe = !0,
                lt = null,
                n = tp(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((fr(), r === o)) {
            t = jt(e, t, n)
            break e
          }
          Ae(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        op(t),
        e === null && Gs(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Bs(r, o) ? (l = null) : i !== null && Bs(r, i) && (t.flags |= 32),
        _p(e, t),
        Ae(e, t, l, n),
        t.child
      )
    case 6:
      return e === null && Gs(t), null
    case 13:
      return Lp(e, t, n)
    case 4:
      return (
        eu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = pr(t, null, r, n)) : Ae(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ot(r, o)),
        Wc(e, t, r, o, n)
      )
    case 7:
      return Ae(e, t, t.pendingProps, n), t.child
    case 8:
      return Ae(e, t, t.pendingProps.children, n), t.child
    case 12:
      return Ae(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          q(zi, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (ut(i.value, l)) {
            if (i.children === o.children && !De.current) {
              t = jt(e, t, n)
              break e
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies
              if (s !== null) {
                l = i.child
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      ;(a = Ot(-1, n & -n)), (a.tag = 2)
                      var u = i.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var d = u.pending
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a)
                      }
                    }
                    ;(i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      Ys(i.return, n, t),
                      (s.lanes |= n)
                    break
                  }
                  a = a.next
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(T(341))
                ;(l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  Ys(l, n, t),
                  (l = i.sibling)
              } else l = i.child
              if (l !== null) l.return = i
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null
                    break
                  }
                  if (((i = l.sibling), i !== null)) {
                    ;(i.return = l.return), (l = i)
                    break
                  }
                  l = l.return
                }
              i = l
            }
        Ae(e, t, o.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        lr(t, n),
        (o = qe(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ae(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (o = ot(r, t.pendingProps)),
        (o = ot(r.type, o)),
        Hc(e, t, r, o, n)
      )
    case 15:
      return Np(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : ot(r, o)),
        fi(e, t),
        (t.tag = 1),
        je(r) ? ((e = !0), Ai(t)) : (e = !1),
        lr(t, n),
        Pp(t, r, o),
        Xs(t, r, o, n),
        Js(null, t, r, !0, e, n)
      )
    case 19:
      return Op(e, t, n)
    case 22:
      return Tp(e, t, n)
  }
  throw Error(T(156, t.tag))
}
function Kp(e, t) {
  return xf(e, t)
}
function U0(e, t, n, r) {
  ;(this.tag = e),
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
    (this.alternate = null)
}
function Ze(e, t, n, r) {
  return new U0(e, t, n, r)
}
function mu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function G0(e) {
  if (typeof e == 'function') return mu(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Ia)) return 11
    if (e === Ma) return 14
  }
  return 2
}
function rn(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = Ze(e.tag, t, e.key, e.mode)),
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
  )
}
function mi(e, t, n, r, o, i) {
  var l = 2
  if (((r = e), typeof e == 'function')) mu(e) && (l = 1)
  else if (typeof e == 'string') l = 5
  else
    e: switch (e) {
      case Un:
        return Nn(n.children, o, i, t)
      case za:
        ;(l = 8), (o |= 8)
        break
      case ws:
        return (e = Ze(12, n, t, o | 2)), (e.elementType = ws), (e.lanes = i), e
      case Ss:
        return (e = Ze(13, n, t, o)), (e.elementType = Ss), (e.lanes = i), e
      case xs:
        return (e = Ze(19, n, t, o)), (e.elementType = xs), (e.lanes = i), e
      case rf:
        return dl(n, o, i, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case tf:
              l = 10
              break e
            case nf:
              l = 9
              break e
            case Ia:
              l = 11
              break e
            case Ma:
              l = 14
              break e
            case Vt:
              ;(l = 16), (r = null)
              break e
          }
        throw Error(T(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = Ze(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  )
}
function Nn(e, t, n, r) {
  return (e = Ze(7, e, r, t)), (e.lanes = n), e
}
function dl(e, t, n, r) {
  return (
    (e = Ze(22, e, r, t)),
    (e.elementType = rf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function ts(e, t, n) {
  return (e = Ze(6, e, null, t)), (e.lanes = n), e
}
function ns(e, t, n) {
  return (
    (t = Ze(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function Y0(e, t, n, r, o) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Dl(0)),
    (this.expirationTimes = Dl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Dl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null)
}
function vu(e, t, n, r, o, i, l, s, a) {
  return (
    (e = new Y0(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Ze(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    qa(i),
    e
  )
}
function K0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: Vn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function Xp(e) {
  if (!e) return ln
  e = e._reactInternals
  e: {
    if (Dn(e) !== e || e.tag !== 1) throw Error(T(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (je(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(T(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (je(n)) return Xf(e, n, t)
  }
  return t
}
function Qp(e, t, n, r, o, i, l, s, a) {
  return (
    (e = vu(n, r, !0, e, o, i, l, s, a)),
    (e.context = Xp(null)),
    (n = e.current),
    (r = Le()),
    (o = nn(n)),
    (i = Ot(r, o)),
    (i.callback = t ?? null),
    en(n, i, o),
    (e.current.lanes = o),
    xo(e, o, r),
    be(e, r),
    e
  )
}
function fl(e, t, n, r) {
  var o = t.current,
    i = Le(),
    l = nn(o)
  return (
    (n = Xp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ot(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = en(o, t, l)),
    e !== null && (at(e, o, l, i), ui(e, o, l)),
    l
  )
}
function Hi(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function td(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function gu(e, t) {
  td(e, t), (e = e.alternate) && td(e, t)
}
function X0() {
  return null
}
var Zp =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function yu(e) {
  this._internalRoot = e
}
pl.prototype.render = yu.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(T(409))
  fl(e, t, null, null)
}
pl.prototype.unmount = yu.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    On(function () {
      fl(null, e, null, null)
    }),
      (t[Mt] = null)
  }
}
function pl(e) {
  this._internalRoot = e
}
pl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Tf()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < Gt.length && t !== 0 && t < Gt[n].priority; n++);
    Gt.splice(n, 0, e), n === 0 && Af(e)
  }
}
function wu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function hl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function nd() {}
function Q0(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r
      r = function () {
        var u = Hi(l)
        i.call(u)
      }
    }
    var l = Qp(t, r, e, 0, null, !1, !1, '', nd)
    return (
      (e._reactRootContainer = l),
      (e[Mt] = l.current),
      ao(e.nodeType === 8 ? e.parentNode : e),
      On(),
      l
    )
  }
  for (; (o = e.lastChild); ) e.removeChild(o)
  if (typeof r == 'function') {
    var s = r
    r = function () {
      var u = Hi(a)
      s.call(u)
    }
  }
  var a = vu(e, 0, !1, null, null, !1, !1, '', nd)
  return (
    (e._reactRootContainer = a),
    (e[Mt] = a.current),
    ao(e.nodeType === 8 ? e.parentNode : e),
    On(function () {
      fl(t, a, n, r)
    }),
    a
  )
}
function ml(e, t, n, r, o) {
  var i = n._reactRootContainer
  if (i) {
    var l = i
    if (typeof o == 'function') {
      var s = o
      o = function () {
        var a = Hi(l)
        s.call(a)
      }
    }
    fl(t, l, e, o)
  } else l = Q0(n, t, e, o, r)
  return Hi(l)
}
kf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = Br(t.pendingLanes)
        n !== 0 &&
          (ba(t, n | 1), be(t, ce()), !(U & 6) && ((vr = ce() + 500), hn()))
      }
      break
    case 13:
      On(function () {
        var r = Dt(e, 1)
        if (r !== null) {
          var o = Le()
          at(r, e, 1, o)
        }
      }),
        gu(e, 1)
  }
}
Fa = function (e) {
  if (e.tag === 13) {
    var t = Dt(e, 134217728)
    if (t !== null) {
      var n = Le()
      at(t, e, 134217728, n)
    }
    gu(e, 134217728)
  }
}
Nf = function (e) {
  if (e.tag === 13) {
    var t = nn(e),
      n = Dt(e, t)
    if (n !== null) {
      var r = Le()
      at(n, e, t, r)
    }
    gu(e, t)
  }
}
Tf = function () {
  return K
}
_f = function (e, t) {
  var n = K
  try {
    return (K = e), t()
  } finally {
    K = n
  }
}
Ls = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((Ps(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var o = il(r)
            if (!o) throw Error(T(90))
            lf(r), Ps(r, o)
          }
        }
      }
      break
    case 'textarea':
      af(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && nr(e, !!n.multiple, t, !1)
  }
}
mf = fu
vf = On
var Z0 = { usingClientEntryPoint: !1, Events: [Eo, Xn, il, pf, hf, fu] },
  jr = {
    findFiberByHostInstance: En,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  J0 = {
    bundleType: jr.bundleType,
    version: jr.version,
    rendererPackageName: jr.rendererPackageName,
    rendererConfig: jr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: $t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = wf(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: jr.findFiberByHostInstance || X0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Yo = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!Yo.isDisabled && Yo.supportsFiber)
    try {
      ;(tl = Yo.inject(J0)), (xt = Yo)
    } catch {}
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z0
Ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!wu(t)) throw Error(T(200))
  return K0(e, t, null, n)
}
Ye.createRoot = function (e, t) {
  if (!wu(e)) throw Error(T(299))
  var n = !1,
    r = '',
    o = Zp
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = vu(e, 1, !1, null, null, n, !1, r, o)),
    (e[Mt] = t.current),
    ao(e.nodeType === 8 ? e.parentNode : e),
    new yu(t)
  )
}
Ye.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(T(188))
      : ((e = Object.keys(e).join(',')), Error(T(268, e)))
  return (e = wf(t)), (e = e === null ? null : e.stateNode), e
}
Ye.flushSync = function (e) {
  return On(e)
}
Ye.hydrate = function (e, t, n) {
  if (!hl(t)) throw Error(T(200))
  return ml(null, e, t, !0, n)
}
Ye.hydrateRoot = function (e, t, n) {
  if (!wu(e)) throw Error(T(405))
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = Zp
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Qp(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Mt] = t.current),
    ao(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o)
  return new pl(t)
}
Ye.render = function (e, t, n) {
  if (!hl(t)) throw Error(T(200))
  return ml(null, e, t, !1, n)
}
Ye.unmountComponentAtNode = function (e) {
  if (!hl(e)) throw Error(T(40))
  return e._reactRootContainer
    ? (On(function () {
        ml(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Mt] = null)
        })
      }),
      !0)
    : !1
}
Ye.unstable_batchedUpdates = fu
Ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!hl(n)) throw Error(T(200))
  if (e == null || e._reactInternals === void 0) throw Error(T(38))
  return ml(e, t, n, !1, r)
}
Ye.version = '18.3.1-next-f1338f8080-20240426'
function Jp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jp)
    } catch (e) {
      console.error(e)
    }
}
Jp(), (Zd.exports = Ye)
var mn = Zd.exports
const q0 = Ra(mn)
function ey(e, t) {
  typeof e == 'function' ? e(t) : e != null && (e.current = t)
}
function qp(...e) {
  return t => e.forEach(n => ey(n, t))
}
function X(...e) {
  return c.useCallback(qp(...e), e)
}
var tt = c.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    o = c.Children.toArray(n),
    i = o.find(ty)
  if (i) {
    const l = i.props.children,
      s = o.map(a =>
        a === i
          ? c.Children.count(l) > 1
            ? c.Children.only(null)
            : c.isValidElement(l)
              ? l.props.children
              : null
          : a,
      )
    return S.jsx(ca, {
      ...r,
      ref: t,
      children: c.isValidElement(l) ? c.cloneElement(l, void 0, s) : null,
    })
  }
  return S.jsx(ca, { ...r, ref: t, children: n })
})
tt.displayName = 'Slot'
var ca = c.forwardRef((e, t) => {
  const { children: n, ...r } = e
  if (c.isValidElement(n)) {
    const o = ry(n)
    return c.cloneElement(n, { ...ny(r, n.props), ref: t ? qp(t, o) : o })
  }
  return c.Children.count(n) > 1 ? c.Children.only(null) : null
})
ca.displayName = 'SlotClone'
var eh = ({ children: e }) => S.jsx(S.Fragment, { children: e })
function ty(e) {
  return c.isValidElement(e) && e.type === eh
}
function ny(e, t) {
  const n = { ...t }
  for (const r in t) {
    const o = e[r],
      i = t[r]
    ;/^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...s) => {
            i(...s), o(...s)
          })
        : o && (n[r] = o)
      : r === 'style'
        ? (n[r] = { ...o, ...i })
        : r === 'className' && (n[r] = [o, i].filter(Boolean).join(' '))
  }
  return { ...e, ...n }
}
function ry(e) {
  var r, o
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, 'ref')) == null
        ? void 0
        : r.get,
    n = t && 'isReactWarning' in t && t.isReactWarning
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, 'ref')) == null
          ? void 0
          : o.get),
      (n = t && 'isReactWarning' in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref)
}
var oy = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'span',
    'svg',
    'ul',
  ],
  V = oy.reduce((e, t) => {
    const n = c.forwardRef((r, o) => {
      const { asChild: i, ...l } = r,
        s = i ? tt : t
      return (
        typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0),
        S.jsx(s, { ...l, ref: o })
      )
    })
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n }
  }, {})
function iy(e, t) {
  e && mn.flushSync(() => e.dispatchEvent(t))
}
var ly = 'VisuallyHidden',
  Su = c.forwardRef((e, t) =>
    S.jsx(V.span, {
      ...e,
      ref: t,
      style: {
        position: 'absolute',
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        wordWrap: 'normal',
        ...e.style,
      },
    }),
  )
Su.displayName = ly
var sy = Su,
  th = { exports: {} }
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ;(function (e) {
  ;(function () {
    var t = {}.hasOwnProperty
    function n() {
      for (var r = [], o = 0; o < arguments.length; o++) {
        var i = arguments[o]
        if (i) {
          var l = typeof i
          if (l === 'string' || l === 'number') r.push(i)
          else if (Array.isArray(i)) {
            if (i.length) {
              var s = n.apply(null, i)
              s && r.push(s)
            }
          } else if (l === 'object') {
            if (
              i.toString !== Object.prototype.toString &&
              !i.toString.toString().includes('[native code]')
            ) {
              r.push(i.toString())
              continue
            }
            for (var a in i) t.call(i, a) && i[a] && r.push(a)
          }
        }
      }
      return r.join(' ')
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n)
  })()
})(th)
var ay = th.exports
const ue = Ra(ay)
function Bt(e, t = []) {
  let n = []
  function r(i, l) {
    const s = c.createContext(l),
      a = n.length
    n = [...n, l]
    function u(f) {
      const { scope: p, children: y, ...w } = f,
        g = (p == null ? void 0 : p[e][a]) || s,
        C = c.useMemo(() => w, Object.values(w))
      return S.jsx(g.Provider, { value: C, children: y })
    }
    function d(f, p) {
      const y = (p == null ? void 0 : p[e][a]) || s,
        w = c.useContext(y)
      if (w) return w
      if (l !== void 0) return l
      throw new Error(`\`${f}\` must be used within \`${i}\``)
    }
    return (u.displayName = i + 'Provider'), [u, d]
  }
  const o = () => {
    const i = n.map(l => c.createContext(l))
    return function (s) {
      const a = (s == null ? void 0 : s[e]) || i
      return c.useMemo(() => ({ [`__scope${e}`]: { ...s, [e]: a } }), [s, a])
    }
  }
  return (o.scopeName = e), [r, uy(o, ...t)]
}
function uy(...e) {
  const t = e[0]
  if (e.length === 1) return t
  const n = () => {
    const r = e.map(o => ({ useScope: o(), scopeName: o.scopeName }))
    return function (i) {
      const l = r.reduce((s, { useScope: a, scopeName: u }) => {
        const f = a(i)[`__scope${u}`]
        return { ...s, ...f }
      }, {})
      return c.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l])
    }
  }
  return (n.scopeName = t.scopeName), n
}
function j(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o)
  }
}
var Te =
    globalThis != null && globalThis.document ? c.useLayoutEffect : () => {},
  cy = Wv.useId || (() => {}),
  dy = 0
function vl(e) {
  const [t, n] = c.useState(cy())
  return (
    Te(() => {
      n(r => r ?? String(dy++))
    }, [e]),
    t ? `radix-${t}` : ''
  )
}
function ye(e) {
  const t = c.useRef(e)
  return (
    c.useEffect(() => {
      t.current = e
    }),
    c.useMemo(
      () =>
        (...n) => {
          var r
          return (r = t.current) == null ? void 0 : r.call(t, ...n)
        },
      [],
    )
  )
}
function sn({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, o] = fy({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    l = i ? e : r,
    s = ye(n),
    a = c.useCallback(
      u => {
        if (i) {
          const f = typeof u == 'function' ? u(e) : u
          f !== e && s(f)
        } else o(u)
      },
      [i, e, o, s],
    )
  return [l, a]
}
function fy({ defaultProp: e, onChange: t }) {
  const n = c.useState(e),
    [r] = n,
    o = c.useRef(r),
    i = ye(t)
  return (
    c.useEffect(() => {
      o.current !== r && (i(r), (o.current = r))
    }, [r, o, i]),
    n
  )
}
function py(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ye(e)
  c.useEffect(() => {
    const r = o => {
      o.key === 'Escape' && n(o)
    }
    return (
      t.addEventListener('keydown', r, { capture: !0 }),
      () => t.removeEventListener('keydown', r, { capture: !0 })
    )
  }, [n, t])
}
var hy = 'DismissableLayer',
  da = 'dismissableLayer.update',
  my = 'dismissableLayer.pointerDownOutside',
  vy = 'dismissableLayer.focusOutside',
  rd,
  nh = c.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  xu = c.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: l,
        onDismiss: s,
        ...a
      } = e,
      u = c.useContext(nh),
      [d, f] = c.useState(null),
      p =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, y] = c.useState({}),
      w = X(t, P => f(P)),
      g = Array.from(u.layers),
      [C] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      m = g.indexOf(C),
      h = d ? g.indexOf(d) : -1,
      v = u.layersWithOutsidePointerEventsDisabled.size > 0,
      x = h >= m,
      E = wy(P => {
        const k = P.target,
          A = [...u.branches].some(_ => _.contains(k))
        !x ||
          A ||
          (o == null || o(P),
          l == null || l(P),
          P.defaultPrevented || s == null || s())
      }, p),
      R = Sy(P => {
        const k = P.target
        ;[...u.branches].some(_ => _.contains(k)) ||
          (i == null || i(P),
          l == null || l(P),
          P.defaultPrevented || s == null || s())
      }, p)
    return (
      py(P => {
        h === u.layers.size - 1 &&
          (r == null || r(P),
          !P.defaultPrevented && s && (P.preventDefault(), s()))
      }, p),
      c.useEffect(() => {
        if (d)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((rd = p.body.style.pointerEvents),
                (p.body.style.pointerEvents = 'none')),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            od(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (p.body.style.pointerEvents = rd)
            }
          )
      }, [d, p, n, u]),
      c.useEffect(
        () => () => {
          d &&
            (u.layers.delete(d),
            u.layersWithOutsidePointerEventsDisabled.delete(d),
            od())
        },
        [d, u],
      ),
      c.useEffect(() => {
        const P = () => y({})
        return (
          document.addEventListener(da, P),
          () => document.removeEventListener(da, P)
        )
      }, []),
      S.jsx(V.div, {
        ...a,
        ref: w,
        style: {
          pointerEvents: v ? (x ? 'auto' : 'none') : void 0,
          ...e.style,
        },
        onFocusCapture: j(e.onFocusCapture, R.onFocusCapture),
        onBlurCapture: j(e.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: j(e.onPointerDownCapture, E.onPointerDownCapture),
      })
    )
  })
xu.displayName = hy
var gy = 'DismissableLayerBranch',
  yy = c.forwardRef((e, t) => {
    const n = c.useContext(nh),
      r = c.useRef(null),
      o = X(t, r)
    return (
      c.useEffect(() => {
        const i = r.current
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i)
            }
          )
      }, [n.branches]),
      S.jsx(V.div, { ...e, ref: o })
    )
  })
yy.displayName = gy
function wy(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ye(e),
    r = c.useRef(!1),
    o = c.useRef(() => {})
  return (
    c.useEffect(() => {
      const i = s => {
          if (s.target && !r.current) {
            let a = function () {
              rh(my, n, u, { discrete: !0 })
            }
            const u = { originalEvent: s }
            s.pointerType === 'touch'
              ? (t.removeEventListener('click', o.current),
                (o.current = a),
                t.addEventListener('click', o.current, { once: !0 }))
              : a()
          } else t.removeEventListener('click', o.current)
          r.current = !1
        },
        l = window.setTimeout(() => {
          t.addEventListener('pointerdown', i)
        }, 0)
      return () => {
        window.clearTimeout(l),
          t.removeEventListener('pointerdown', i),
          t.removeEventListener('click', o.current)
      }
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  )
}
function Sy(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = ye(e),
    r = c.useRef(!1)
  return (
    c.useEffect(() => {
      const o = i => {
        i.target &&
          !r.current &&
          rh(vy, n, { originalEvent: i }, { discrete: !1 })
      }
      return (
        t.addEventListener('focusin', o),
        () => t.removeEventListener('focusin', o)
      )
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  )
}
function od() {
  const e = new CustomEvent(da)
  document.dispatchEvent(e)
}
function rh(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n })
  t && o.addEventListener(e, t, { once: !0 }), r ? iy(o, i) : o.dispatchEvent(i)
}
var rs = 'focusScope.autoFocusOnMount',
  os = 'focusScope.autoFocusOnUnmount',
  id = { bubbles: !1, cancelable: !0 },
  xy = 'FocusScope',
  oh = c.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...l
      } = e,
      [s, a] = c.useState(null),
      u = ye(o),
      d = ye(i),
      f = c.useRef(null),
      p = X(t, g => a(g)),
      y = c.useRef({
        paused: !1,
        pause() {
          this.paused = !0
        },
        resume() {
          this.paused = !1
        },
      }).current
    c.useEffect(() => {
      if (r) {
        let g = function (v) {
            if (y.paused || !s) return
            const x = v.target
            s.contains(x) ? (f.current = x) : Ht(f.current, { select: !0 })
          },
          C = function (v) {
            if (y.paused || !s) return
            const x = v.relatedTarget
            x !== null && (s.contains(x) || Ht(f.current, { select: !0 }))
          },
          m = function (v) {
            if (document.activeElement === document.body)
              for (const E of v) E.removedNodes.length > 0 && Ht(s)
          }
        document.addEventListener('focusin', g),
          document.addEventListener('focusout', C)
        const h = new MutationObserver(m)
        return (
          s && h.observe(s, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener('focusin', g),
              document.removeEventListener('focusout', C),
              h.disconnect()
          }
        )
      }
    }, [r, s, y.paused]),
      c.useEffect(() => {
        if (s) {
          sd.add(y)
          const g = document.activeElement
          if (!s.contains(g)) {
            const m = new CustomEvent(rs, id)
            s.addEventListener(rs, u),
              s.dispatchEvent(m),
              m.defaultPrevented ||
                (Cy(Ny(ih(s)), { select: !0 }),
                document.activeElement === g && Ht(s))
          }
          return () => {
            s.removeEventListener(rs, u),
              setTimeout(() => {
                const m = new CustomEvent(os, id)
                s.addEventListener(os, d),
                  s.dispatchEvent(m),
                  m.defaultPrevented || Ht(g ?? document.body, { select: !0 }),
                  s.removeEventListener(os, d),
                  sd.remove(y)
              }, 0)
          }
        }
      }, [s, u, d, y])
    const w = c.useCallback(
      g => {
        if ((!n && !r) || y.paused) return
        const C = g.key === 'Tab' && !g.altKey && !g.ctrlKey && !g.metaKey,
          m = document.activeElement
        if (C && m) {
          const h = g.currentTarget,
            [v, x] = Ey(h)
          v && x
            ? !g.shiftKey && m === x
              ? (g.preventDefault(), n && Ht(v, { select: !0 }))
              : g.shiftKey &&
                m === v &&
                (g.preventDefault(), n && Ht(x, { select: !0 }))
            : m === h && g.preventDefault()
        }
      },
      [n, r, y.paused],
    )
    return S.jsx(V.div, { tabIndex: -1, ...l, ref: p, onKeyDown: w })
  })
oh.displayName = xy
function Cy(e, { select: t = !1 } = {}) {
  const n = document.activeElement
  for (const r of e)
    if ((Ht(r, { select: t }), document.activeElement !== n)) return
}
function Ey(e) {
  const t = ih(e),
    n = ld(t, e),
    r = ld(t.reverse(), e)
  return [n, r]
}
function ih(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: r => {
        const o = r.tagName === 'INPUT' && r.type === 'hidden'
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
            ? NodeFilter.FILTER_ACCEPT
            : NodeFilter.FILTER_SKIP
      },
    })
  for (; n.nextNode(); ) t.push(n.currentNode)
  return t
}
function ld(e, t) {
  for (const n of e) if (!Py(n, { upTo: t })) return n
}
function Py(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === 'hidden') return !0
  for (; e; ) {
    if (t !== void 0 && e === t) return !1
    if (getComputedStyle(e).display === 'none') return !0
    e = e.parentElement
  }
  return !1
}
function Ry(e) {
  return e instanceof HTMLInputElement && 'select' in e
}
function Ht(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement
    e.focus({ preventScroll: !0 }), e !== n && Ry(e) && t && e.select()
  }
}
var sd = ky()
function ky() {
  let e = []
  return {
    add(t) {
      const n = e[0]
      t !== n && (n == null || n.pause()), (e = ad(e, t)), e.unshift(t)
    },
    remove(t) {
      var n
      ;(e = ad(e, t)), (n = e[0]) == null || n.resume()
    },
  }
}
function ad(e, t) {
  const n = [...e],
    r = n.indexOf(t)
  return r !== -1 && n.splice(r, 1), n
}
function Ny(e) {
  return e.filter(t => t.tagName !== 'A')
}
var Ty = 'Portal',
  lh = c.forwardRef((e, t) => {
    var s
    const { container: n, ...r } = e,
      [o, i] = c.useState(!1)
    Te(() => i(!0), [])
    const l =
      n ||
      (o &&
        ((s = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : s.body))
    return l ? q0.createPortal(S.jsx(V.div, { ...r, ref: t }), l) : null
  })
lh.displayName = Ty
function _y(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e)
}
var jn = e => {
  const { present: t, children: n } = e,
    r = Ay(t),
    o =
      typeof n == 'function' ? n({ present: r.isPresent }) : c.Children.only(n),
    i = X(r.ref, Ly(o))
  return typeof n == 'function' || r.isPresent
    ? c.cloneElement(o, { ref: i })
    : null
}
jn.displayName = 'Presence'
function Ay(e) {
  const [t, n] = c.useState(),
    r = c.useRef({}),
    o = c.useRef(e),
    i = c.useRef('none'),
    l = e ? 'mounted' : 'unmounted',
    [s, a] = _y(l, {
      mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
      unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
      unmounted: { MOUNT: 'mounted' },
    })
  return (
    c.useEffect(() => {
      const u = Ko(r.current)
      i.current = s === 'mounted' ? u : 'none'
    }, [s]),
    Te(() => {
      const u = r.current,
        d = o.current
      if (d !== e) {
        const p = i.current,
          y = Ko(u)
        e
          ? a('MOUNT')
          : y === 'none' || (u == null ? void 0 : u.display) === 'none'
            ? a('UNMOUNT')
            : a(d && p !== y ? 'ANIMATION_OUT' : 'UNMOUNT'),
          (o.current = e)
      }
    }, [e, a]),
    Te(() => {
      if (t) {
        const u = f => {
            const y = Ko(r.current).includes(f.animationName)
            f.target === t && y && mn.flushSync(() => a('ANIMATION_END'))
          },
          d = f => {
            f.target === t && (i.current = Ko(r.current))
          }
        return (
          t.addEventListener('animationstart', d),
          t.addEventListener('animationcancel', u),
          t.addEventListener('animationend', u),
          () => {
            t.removeEventListener('animationstart', d),
              t.removeEventListener('animationcancel', u),
              t.removeEventListener('animationend', u)
          }
        )
      } else a('ANIMATION_END')
    }, [t, a]),
    {
      isPresent: ['mounted', 'unmountSuspended'].includes(s),
      ref: c.useCallback(u => {
        u && (r.current = getComputedStyle(u)), n(u)
      }, []),
    }
  )
}
function Ko(e) {
  return (e == null ? void 0 : e.animationName) || 'none'
}
function Ly(e) {
  var r, o
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, 'ref')) == null
        ? void 0
        : r.get,
    n = t && 'isReactWarning' in t && t.isReactWarning
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, 'ref')) == null
          ? void 0
          : o.get),
      (n = t && 'isReactWarning' in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref)
}
var is = 0
function Oy() {
  c.useEffect(() => {
    const e = document.querySelectorAll('[data-radix-focus-guard]')
    return (
      document.body.insertAdjacentElement('afterbegin', e[0] ?? ud()),
      document.body.insertAdjacentElement('beforeend', e[1] ?? ud()),
      is++,
      () => {
        is === 1 &&
          document
            .querySelectorAll('[data-radix-focus-guard]')
            .forEach(t => t.remove()),
          is--
      }
    )
  }, [])
}
function ud() {
  const e = document.createElement('span')
  return (
    e.setAttribute('data-radix-focus-guard', ''),
    (e.tabIndex = 0),
    (e.style.cssText =
      'outline: none; opacity: 0; position: fixed; pointer-events: none'),
    e
  )
}
var St = function () {
  return (
    (St =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r]
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
      }),
    St.apply(this, arguments)
  )
}
function sh(e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]])
  return n
}
function zy(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]))
  return e.concat(i || Array.prototype.slice.call(t))
}
var vi = 'right-scroll-bar-position',
  gi = 'width-before-scroll-bar',
  Iy = 'with-scroll-bars-hidden',
  My = '--removed-body-scroll-bar-size'
function ls(e, t) {
  return typeof e == 'function' ? e(t) : e && (e.current = t), e
}
function Dy(e, t) {
  var n = c.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value
        },
        set current(r) {
          var o = n.value
          o !== r && ((n.value = r), n.callback(r, o))
        },
      },
    }
  })[0]
  return (n.callback = t), n.facade
}
var jy = typeof window < 'u' ? c.useLayoutEffect : c.useEffect,
  cd = new WeakMap()
function by(e, t) {
  var n = Dy(null, function (r) {
    return e.forEach(function (o) {
      return ls(o, r)
    })
  })
  return (
    jy(
      function () {
        var r = cd.get(n)
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            l = n.current
          o.forEach(function (s) {
            i.has(s) || ls(s, null)
          }),
            i.forEach(function (s) {
              o.has(s) || ls(s, l)
            })
        }
        cd.set(n, e)
      },
      [e],
    ),
    n
  )
}
function Fy(e) {
  return e
}
function $y(e, t) {
  t === void 0 && (t = Fy)
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.',
          )
        return n.length ? n[n.length - 1] : e
      },
      useMedium: function (i) {
        var l = t(i, r)
        return (
          n.push(l),
          function () {
            n = n.filter(function (s) {
              return s !== l
            })
          }
        )
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var l = n
          ;(n = []), l.forEach(i)
        }
        n = {
          push: function (s) {
            return i(s)
          },
          filter: function () {
            return n
          },
        }
      },
      assignMedium: function (i) {
        r = !0
        var l = []
        if (n.length) {
          var s = n
          ;(n = []), s.forEach(i), (l = n)
        }
        var a = function () {
            var d = l
            ;(l = []), d.forEach(i)
          },
          u = function () {
            return Promise.resolve().then(a)
          }
        u(),
          (n = {
            push: function (d) {
              l.push(d), u()
            },
            filter: function (d) {
              return (l = l.filter(d)), n
            },
          })
      },
    }
  return o
}
function By(e) {
  e === void 0 && (e = {})
  var t = $y(null)
  return (t.options = St({ async: !0, ssr: !1 }, e)), t
}
var ah = function (e) {
  var t = e.sideCar,
    n = sh(e, ['sideCar'])
  if (!t)
    throw new Error(
      'Sidecar: please provide `sideCar` property to import the right car',
    )
  var r = t.read()
  if (!r) throw new Error('Sidecar medium not found')
  return c.createElement(r, St({}, n))
}
ah.isSideCarExport = !0
function Wy(e, t) {
  return e.useMedium(t), ah
}
var uh = By(),
  ss = function () {},
  gl = c.forwardRef(function (e, t) {
    var n = c.useRef(null),
      r = c.useState({
        onScrollCapture: ss,
        onWheelCapture: ss,
        onTouchMoveCapture: ss,
      }),
      o = r[0],
      i = r[1],
      l = e.forwardProps,
      s = e.children,
      a = e.className,
      u = e.removeScrollBar,
      d = e.enabled,
      f = e.shards,
      p = e.sideCar,
      y = e.noIsolation,
      w = e.inert,
      g = e.allowPinchZoom,
      C = e.as,
      m = C === void 0 ? 'div' : C,
      h = e.gapMode,
      v = sh(e, [
        'forwardProps',
        'children',
        'className',
        'removeScrollBar',
        'enabled',
        'shards',
        'sideCar',
        'noIsolation',
        'inert',
        'allowPinchZoom',
        'as',
        'gapMode',
      ]),
      x = p,
      E = by([n, t]),
      R = St(St({}, v), o)
    return c.createElement(
      c.Fragment,
      null,
      d &&
        c.createElement(x, {
          sideCar: uh,
          removeScrollBar: u,
          shards: f,
          noIsolation: y,
          inert: w,
          setCallbacks: i,
          allowPinchZoom: !!g,
          lockRef: n,
          gapMode: h,
        }),
      l
        ? c.cloneElement(c.Children.only(s), St(St({}, R), { ref: E }))
        : c.createElement(m, St({}, R, { className: a, ref: E }), s),
    )
  })
gl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }
gl.classNames = { fullWidth: gi, zeroRight: vi }
var Hy = function () {
  if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__
}
function Vy() {
  if (!document) return null
  var e = document.createElement('style')
  e.type = 'text/css'
  var t = Hy()
  return t && e.setAttribute('nonce', t), e
}
function Uy(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t))
}
function Gy(e) {
  var t = document.head || document.getElementsByTagName('head')[0]
  t.appendChild(e)
}
var Yy = function () {
    var e = 0,
      t = null
    return {
      add: function (n) {
        e == 0 && (t = Vy()) && (Uy(t, n), Gy(t)), e++
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null))
      },
    }
  },
  Ky = function () {
    var e = Yy()
    return function (t, n) {
      c.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove()
            }
          )
        },
        [t && n],
      )
    }
  },
  ch = function () {
    var e = Ky(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic
        return e(r, o), null
      }
    return t
  },
  Xy = { left: 0, top: 0, right: 0, gap: 0 },
  as = function (e) {
    return parseInt(e || '', 10) || 0
  },
  Qy = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === 'padding' ? 'paddingLeft' : 'marginLeft'],
      r = t[e === 'padding' ? 'paddingTop' : 'marginTop'],
      o = t[e === 'padding' ? 'paddingRight' : 'marginRight']
    return [as(n), as(r), as(o)]
  },
  Zy = function (e) {
    if ((e === void 0 && (e = 'margin'), typeof window > 'u')) return Xy
    var t = Qy(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    }
  },
  Jy = ch(),
  ar = 'data-scroll-locked',
  qy = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      l = e.right,
      s = e.gap
    return (
      n === void 0 && (n = 'margin'),
      `
  .`
        .concat(
          Iy,
          ` {
   overflow: hidden `,
        )
        .concat(
          r,
          `;
   padding-right: `,
        )
        .concat(s, 'px ')
        .concat(
          r,
          `;
  }
  body[`,
        )
        .concat(
          ar,
          `] {
    overflow: hidden `,
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `,
        )
        .concat(
          [
            t && 'position: relative '.concat(r, ';'),
            n === 'margin' &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `,
                )
                .concat(
                  i,
                  `px;
    padding-right: `,
                )
                .concat(
                  l,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `,
                )
                .concat(s, 'px ')
                .concat(
                  r,
                  `;
    `,
                ),
            n === 'padding' &&
              'padding-right: '.concat(s, 'px ').concat(r, ';'),
          ]
            .filter(Boolean)
            .join(''),
          `
  }
  
  .`,
        )
        .concat(
          vi,
          ` {
    right: `,
        )
        .concat(s, 'px ')
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(
          gi,
          ` {
    margin-right: `,
        )
        .concat(s, 'px ')
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(vi, ' .')
        .concat(
          vi,
          ` {
    right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  .`,
        )
        .concat(gi, ' .')
        .concat(
          gi,
          ` {
    margin-right: 0 `,
        )
        .concat(
          r,
          `;
  }
  
  body[`,
        )
        .concat(
          ar,
          `] {
    `,
        )
        .concat(My, ': ')
        .concat(
          s,
          `px;
  }
`,
        )
    )
  },
  dd = function () {
    var e = parseInt(document.body.getAttribute(ar) || '0', 10)
    return isFinite(e) ? e : 0
  },
  ew = function () {
    c.useEffect(function () {
      return (
        document.body.setAttribute(ar, (dd() + 1).toString()),
        function () {
          var e = dd() - 1
          e <= 0
            ? document.body.removeAttribute(ar)
            : document.body.setAttribute(ar, e.toString())
        }
      )
    }, [])
  },
  tw = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? 'margin' : r
    ew()
    var i = c.useMemo(
      function () {
        return Zy(o)
      },
      [o],
    )
    return c.createElement(Jy, { styles: qy(i, !t, o, n ? '' : '!important') })
  },
  fa = !1
if (typeof window < 'u')
  try {
    var Xo = Object.defineProperty({}, 'passive', {
      get: function () {
        return (fa = !0), !0
      },
    })
    window.addEventListener('test', Xo, Xo),
      window.removeEventListener('test', Xo, Xo)
  } catch {
    fa = !1
  }
var Fn = fa ? { passive: !1 } : !1,
  nw = function (e) {
    return e.tagName === 'TEXTAREA'
  },
  dh = function (e, t) {
    var n = window.getComputedStyle(e)
    return (
      n[t] !== 'hidden' &&
      !(n.overflowY === n.overflowX && !nw(e) && n[t] === 'visible')
    )
  },
  rw = function (e) {
    return dh(e, 'overflowY')
  },
  ow = function (e) {
    return dh(e, 'overflowX')
  },
  fd = function (e, t) {
    var n = t.ownerDocument,
      r = t
    do {
      typeof ShadowRoot < 'u' && r instanceof ShadowRoot && (r = r.host)
      var o = fh(e, r)
      if (o) {
        var i = ph(e, r),
          l = i[1],
          s = i[2]
        if (l > s) return !0
      }
      r = r.parentNode
    } while (r && r !== n.body)
    return !1
  },
  iw = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight
    return [t, n, r]
  },
  lw = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth
    return [t, n, r]
  },
  fh = function (e, t) {
    return e === 'v' ? rw(t) : ow(t)
  },
  ph = function (e, t) {
    return e === 'v' ? iw(t) : lw(t)
  },
  sw = function (e, t) {
    return e === 'h' && t === 'rtl' ? -1 : 1
  },
  aw = function (e, t, n, r, o) {
    var i = sw(e, window.getComputedStyle(t).direction),
      l = i * r,
      s = n.target,
      a = t.contains(s),
      u = !1,
      d = l > 0,
      f = 0,
      p = 0
    do {
      var y = ph(e, s),
        w = y[0],
        g = y[1],
        C = y[2],
        m = g - C - i * w
      ;(w || m) && fh(e, s) && ((f += m), (p += w)),
        s instanceof ShadowRoot ? (s = s.host) : (s = s.parentNode)
    } while ((!a && s !== document.body) || (a && (t.contains(s) || t === s)))
    return (
      ((d && (Math.abs(f) < 1 || !o)) || (!d && (Math.abs(p) < 1 || !o))) &&
        (u = !0),
      u
    )
  },
  Qo = function (e) {
    return 'changedTouches' in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0]
  },
  pd = function (e) {
    return [e.deltaX, e.deltaY]
  },
  hd = function (e) {
    return e && 'current' in e ? e.current : e
  },
  uw = function (e, t) {
    return e[0] === t[0] && e[1] === t[1]
  },
  cw = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`,
      )
      .concat(
        e,
        ` {pointer-events: all;}
`,
      )
  },
  dw = 0,
  $n = []
function fw(e) {
  var t = c.useRef([]),
    n = c.useRef([0, 0]),
    r = c.useRef(),
    o = c.useState(dw++)[0],
    i = c.useState(ch)[0],
    l = c.useRef(e)
  c.useEffect(
    function () {
      l.current = e
    },
    [e],
  ),
    c.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add('block-interactivity-'.concat(o))
          var g = zy([e.lockRef.current], (e.shards || []).map(hd), !0).filter(
            Boolean,
          )
          return (
            g.forEach(function (C) {
              return C.classList.add('allow-interactivity-'.concat(o))
            }),
            function () {
              document.body.classList.remove('block-interactivity-'.concat(o)),
                g.forEach(function (C) {
                  return C.classList.remove('allow-interactivity-'.concat(o))
                })
            }
          )
        }
      },
      [e.inert, e.lockRef.current, e.shards],
    )
  var s = c.useCallback(function (g, C) {
      if ('touches' in g && g.touches.length === 2)
        return !l.current.allowPinchZoom
      var m = Qo(g),
        h = n.current,
        v = 'deltaX' in g ? g.deltaX : h[0] - m[0],
        x = 'deltaY' in g ? g.deltaY : h[1] - m[1],
        E,
        R = g.target,
        P = Math.abs(v) > Math.abs(x) ? 'h' : 'v'
      if ('touches' in g && P === 'h' && R.type === 'range') return !1
      var k = fd(P, R)
      if (!k) return !0
      if ((k ? (E = P) : ((E = P === 'v' ? 'h' : 'v'), (k = fd(P, R))), !k))
        return !1
      if (
        (!r.current && 'changedTouches' in g && (v || x) && (r.current = E), !E)
      )
        return !0
      var A = r.current || E
      return aw(A, C, g, A === 'h' ? v : x, !0)
    }, []),
    a = c.useCallback(function (g) {
      var C = g
      if (!(!$n.length || $n[$n.length - 1] !== i)) {
        var m = 'deltaY' in C ? pd(C) : Qo(C),
          h = t.current.filter(function (E) {
            return (
              E.name === C.type &&
              (E.target === C.target || C.target === E.shadowParent) &&
              uw(E.delta, m)
            )
          })[0]
        if (h && h.should) {
          C.cancelable && C.preventDefault()
          return
        }
        if (!h) {
          var v = (l.current.shards || [])
              .map(hd)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(C.target)
              }),
            x = v.length > 0 ? s(C, v[0]) : !l.current.noIsolation
          x && C.cancelable && C.preventDefault()
        }
      }
    }, []),
    u = c.useCallback(function (g, C, m, h) {
      var v = { name: g, delta: C, target: m, should: h, shadowParent: pw(m) }
      t.current.push(v),
        setTimeout(function () {
          t.current = t.current.filter(function (x) {
            return x !== v
          })
        }, 1)
    }, []),
    d = c.useCallback(function (g) {
      ;(n.current = Qo(g)), (r.current = void 0)
    }, []),
    f = c.useCallback(function (g) {
      u(g.type, pd(g), g.target, s(g, e.lockRef.current))
    }, []),
    p = c.useCallback(function (g) {
      u(g.type, Qo(g), g.target, s(g, e.lockRef.current))
    }, [])
  c.useEffect(function () {
    return (
      $n.push(i),
      e.setCallbacks({
        onScrollCapture: f,
        onWheelCapture: f,
        onTouchMoveCapture: p,
      }),
      document.addEventListener('wheel', a, Fn),
      document.addEventListener('touchmove', a, Fn),
      document.addEventListener('touchstart', d, Fn),
      function () {
        ;($n = $n.filter(function (g) {
          return g !== i
        })),
          document.removeEventListener('wheel', a, Fn),
          document.removeEventListener('touchmove', a, Fn),
          document.removeEventListener('touchstart', d, Fn)
      }
    )
  }, [])
  var y = e.removeScrollBar,
    w = e.inert
  return c.createElement(
    c.Fragment,
    null,
    w ? c.createElement(i, { styles: cw(o) }) : null,
    y ? c.createElement(tw, { gapMode: e.gapMode }) : null,
  )
}
function pw(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode)
  return t
}
const hw = Wy(uh, fw)
var hh = c.forwardRef(function (e, t) {
  return c.createElement(gl, St({}, e, { ref: t, sideCar: hw }))
})
hh.classNames = gl.classNames
var mw = function (e) {
    if (typeof document > 'u') return null
    var t = Array.isArray(e) ? e[0] : e
    return t.ownerDocument.body
  },
  Bn = new WeakMap(),
  Zo = new WeakMap(),
  Jo = {},
  us = 0,
  mh = function (e) {
    return e && (e.host || mh(e.parentNode))
  },
  vw = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n
        var r = mh(n)
        return r && e.contains(r)
          ? r
          : (console.error(
              'aria-hidden',
              n,
              'in not contained inside',
              e,
              '. Doing nothing',
            ),
            null)
      })
      .filter(function (n) {
        return !!n
      })
  },
  gw = function (e, t, n, r) {
    var o = vw(t, Array.isArray(e) ? e : [e])
    Jo[n] || (Jo[n] = new WeakMap())
    var i = Jo[n],
      l = [],
      s = new Set(),
      a = new Set(o),
      u = function (f) {
        !f || s.has(f) || (s.add(f), u(f.parentNode))
      }
    o.forEach(u)
    var d = function (f) {
      !f ||
        a.has(f) ||
        Array.prototype.forEach.call(f.children, function (p) {
          if (s.has(p)) d(p)
          else
            try {
              var y = p.getAttribute(r),
                w = y !== null && y !== 'false',
                g = (Bn.get(p) || 0) + 1,
                C = (i.get(p) || 0) + 1
              Bn.set(p, g),
                i.set(p, C),
                l.push(p),
                g === 1 && w && Zo.set(p, !0),
                C === 1 && p.setAttribute(n, 'true'),
                w || p.setAttribute(r, 'true')
            } catch (m) {
              console.error('aria-hidden: cannot operate on ', p, m)
            }
        })
    }
    return (
      d(t),
      s.clear(),
      us++,
      function () {
        l.forEach(function (f) {
          var p = Bn.get(f) - 1,
            y = i.get(f) - 1
          Bn.set(f, p),
            i.set(f, y),
            p || (Zo.has(f) || f.removeAttribute(r), Zo.delete(f)),
            y || f.removeAttribute(n)
        }),
          us--,
          us ||
            ((Bn = new WeakMap()),
            (Bn = new WeakMap()),
            (Zo = new WeakMap()),
            (Jo = {}))
      }
    )
  },
  yw = function (e, t, n) {
    n === void 0 && (n = 'data-aria-hidden')
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = mw(e)
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll('[aria-live]'))),
        gw(r, o, n, 'aria-hidden'))
      : function () {
          return null
        }
  }
const vn = { asChild: { type: 'boolean' } },
  ww = {
    width: {
      type: 'string',
      className: 'rt-r-w',
      customProperties: ['--width'],
      responsive: !0,
    },
    minWidth: {
      type: 'string',
      className: 'rt-r-min-w',
      customProperties: ['--min-width'],
      responsive: !0,
    },
    maxWidth: {
      type: 'string',
      className: 'rt-r-max-w',
      customProperties: ['--max-width'],
      responsive: !0,
    },
  },
  Sw = {
    height: {
      type: 'string',
      className: 'rt-r-h',
      customProperties: ['--height'],
      responsive: !0,
    },
    minHeight: {
      type: 'string',
      className: 'rt-r-min-h',
      customProperties: ['--min-height'],
      responsive: !0,
    },
    maxHeight: {
      type: 'string',
      className: 'rt-r-max-h',
      customProperties: ['--max-height'],
      responsive: !0,
    },
  },
  Cu = [
    'gray',
    'gold',
    'bronze',
    'brown',
    'yellow',
    'amber',
    'orange',
    'tomato',
    'red',
    'ruby',
    'crimson',
    'pink',
    'plum',
    'purple',
    'violet',
    'iris',
    'indigo',
    'blue',
    'cyan',
    'teal',
    'jade',
    'green',
    'grass',
    'lime',
    'mint',
    'sky',
  ],
  xw = ['auto', 'gray', 'mauve', 'slate', 'sage', 'olive', 'sand'],
  Ro = { color: { type: 'enum', values: Cu, default: void 0 } },
  Cw = { color: { type: 'enum', values: Cu, default: '' } },
  ko = {
    highContrast: {
      type: 'boolean',
      className: 'rt-high-contrast',
      default: void 0,
    },
  },
  Ew = ['normal', 'start', 'end', 'both'],
  vh = {
    trim: { type: 'enum', className: 'rt-r-lt', values: Ew, responsive: !0 },
  },
  Pw = ['left', 'center', 'right'],
  gh = {
    align: { type: 'enum', className: 'rt-r-ta', values: Pw, responsive: !0 },
  },
  Rw = ['wrap', 'nowrap', 'pretty', 'balance'],
  Eu = {
    wrap: { type: 'enum', className: 'rt-r-tw', values: Rw, responsive: !0 },
  },
  Pu = { truncate: { type: 'boolean', className: 'rt-truncate' } },
  kw = ['light', 'regular', 'medium', 'bold'],
  Ru = {
    weight: {
      type: 'enum',
      className: 'rt-r-weight',
      values: kw,
      responsive: !0,
    },
  },
  Nw = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  Tw = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  _w = {
    as: { type: 'enum', values: Nw, default: 'h1' },
    ...vn,
    size: {
      type: 'enum',
      className: 'rt-r-size',
      values: Tw,
      default: '6',
      responsive: !0,
    },
    ...Ru,
    ...gh,
    ...vh,
    ...Pu,
    ...Eu,
    ...Ro,
    ...ko,
  },
  ku = ['initial', 'xs', 'sm', 'md', 'lg', 'xl']
function yh(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t)
}
function qr(e) {
  return typeof e == 'object' && Object.keys(e).some(t => ku.includes(t))
}
function Aw({ className: e, customProperties: t, ...n }) {
  const r = wh({ allowArbitraryValues: !0, className: e, ...n }),
    o = Lw({ customProperties: t, ...n })
  return [r, o]
}
function wh({
  allowArbitraryValues: e,
  value: t,
  className: n,
  propValues: r,
  parseValue: o = i => i,
}) {
  const i = []
  if (t) {
    if (typeof t == 'string' && r.includes(t)) return md(n, t, o)
    if (qr(t)) {
      const l = t
      for (const s in l) {
        if (!yh(l, s) || !ku.includes(s)) continue
        const a = l[s]
        if (a !== void 0) {
          if (r.includes(a)) {
            const u = md(n, a, o),
              d = s === 'initial' ? u : `${s}:${u}`
            i.push(d)
          } else if (e) {
            const u = s === 'initial' ? n : `${s}:${n}`
            i.push(u)
          }
        }
      }
      return i.join(' ')
    }
    if (e) return n
  }
}
function md(e, t, n) {
  const r = e ? '-' : '',
    o = n(t),
    i = o == null ? void 0 : o.startsWith('-'),
    l = i ? '-' : '',
    s = i ? (o == null ? void 0 : o.substring(1)) : o
  return `${l}${e}${r}${s}`
}
function Lw({
  customProperties: e,
  value: t,
  propValues: n,
  parseValue: r = o => o,
}) {
  let o = {}
  if (!(!t || (typeof t == 'string' && n.includes(t)))) {
    if (
      (typeof t == 'string' && (o = Object.fromEntries(e.map(i => [i, t]))),
      qr(t))
    ) {
      const i = t
      for (const l in i) {
        if (!yh(i, l) || !ku.includes(l)) continue
        const s = i[l]
        if (!n.includes(s))
          for (const a of e)
            o = { [l === 'initial' ? a : `${a}-${l}`]: s, ...o }
      }
    }
    for (const i in o) {
      const l = o[i]
      l !== void 0 && (o[i] = r(l))
    }
    return o
  }
}
function vd(...e) {
  let t = {}
  for (const n of e) n && (t = { ...t, ...n })
  return Object.keys(t).length ? t : void 0
}
function Ow(...e) {
  return Object.assign({}, ...e)
}
function ft(e, ...t) {
  let n, r
  const o = { ...e },
    i = Ow(...t)
  for (const l in i) {
    let s = o[l]
    const a = i[l]
    if (
      (a.default !== void 0 && s === void 0 && (s = a.default),
      a.type === 'enum' &&
        ![a.default, ...a.values].includes(s) &&
        !qr(s) &&
        (s = a.default),
      (o[l] = s),
      'className' in a && a.className)
    ) {
      delete o[l]
      const u = 'responsive' in a
      if (!s || (qr(s) && !u)) continue
      if (
        (qr(s) &&
          (a.default !== void 0 &&
            s.initial === void 0 &&
            (s.initial = a.default),
          a.type === 'enum' &&
            ([a.default, ...a.values].includes(s.initial) ||
              (s.initial = a.default))),
        a.type === 'enum')
      ) {
        const d = wh({
          allowArbitraryValues: !1,
          value: s,
          className: a.className,
          propValues: a.values,
          parseValue: a.parseValue,
        })
        n = ue(n, d)
        continue
      }
      if (a.type === 'string' || a.type === 'enum | string') {
        const d = a.type === 'string' ? [] : a.values,
          [f, p] = Aw({
            className: a.className,
            customProperties: a.customProperties,
            propValues: d,
            parseValue: a.parseValue,
            value: s,
          })
        ;(r = vd(r, p)), (n = ue(n, f))
        continue
      }
      if (a.type === 'boolean' && s) {
        n = ue(n, a.className)
        continue
      }
    }
  }
  return (o.className = ue(n, e.className)), (o.style = vd(r, e.style)), o
}
const wn = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '-1',
    '-2',
    '-3',
    '-4',
    '-5',
    '-6',
    '-7',
    '-8',
    '-9',
  ],
  Pt = {
    m: {
      type: 'enum | string',
      values: wn,
      responsive: !0,
      className: 'rt-r-m',
      customProperties: ['--m'],
    },
    mx: {
      type: 'enum | string',
      values: wn,
      responsive: !0,
      className: 'rt-r-mx',
      customProperties: ['--ml', '--mr'],
    },
    my: {
      type: 'enum | string',
      values: wn,
      responsive: !0,
      className: 'rt-r-my',
      customProperties: ['--mt', '--mb'],
    },
    mt: {
      type: 'enum | string',
      values: wn,
      responsive: !0,
      className: 'rt-r-mt',
      customProperties: ['--mt'],
    },
    mr: {
      type: 'enum | string',
      values: wn,
      responsive: !0,
      className: 'rt-r-mr',
      customProperties: ['--mr'],
    },
    mb: {
      type: 'enum | string',
      values: wn,
      responsive: !0,
      className: 'rt-r-mb',
      customProperties: ['--mb'],
    },
    ml: {
      type: 'enum | string',
      values: wn,
      responsive: !0,
      className: 'rt-r-ml',
      customProperties: ['--ml'],
    },
  },
  Sh = c.forwardRef((e, t) => {
    const {
      children: n,
      className: r,
      asChild: o,
      as: i = 'h1',
      color: l,
      ...s
    } = ft(e, _w, Pt)
    return c.createElement(
      tt,
      { 'data-accent-color': l, ...s, ref: t, className: ue('rt-Heading', r) },
      o ? n : c.createElement(i, null, n),
    )
  })
Sh.displayName = 'Heading'
const zw = ['span', 'div', 'label', 'p'],
  Iw = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  Mw = {
    as: { type: 'enum', values: zw, default: 'span' },
    ...vn,
    size: { type: 'enum', className: 'rt-r-size', values: Iw, responsive: !0 },
    ...Ru,
    ...gh,
    ...vh,
    ...Pu,
    ...Eu,
    ...Ro,
    ...ko,
  },
  zt = c.forwardRef((e, t) => {
    const {
      children: n,
      className: r,
      asChild: o,
      as: i = 'span',
      color: l,
      ...s
    } = ft(e, Mw, Pt)
    return c.createElement(
      tt,
      { 'data-accent-color': l, ...s, ref: t, className: ue('rt-Text', r) },
      o ? n : c.createElement(i, null, n),
    )
  })
zt.displayName = 'Text'
const Dw = ['top', 'right', 'bottom', 'left'],
  an = Math.min,
  We = Math.max,
  Vi = Math.round,
  qo = Math.floor,
  un = e => ({ x: e, y: e }),
  jw = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  bw = { start: 'end', end: 'start' }
function pa(e, t, n) {
  return We(e, an(t, n))
}
function bt(e, t) {
  return typeof e == 'function' ? e(t) : e
}
function Ft(e) {
  return e.split('-')[0]
}
function Er(e) {
  return e.split('-')[1]
}
function Nu(e) {
  return e === 'x' ? 'y' : 'x'
}
function Tu(e) {
  return e === 'y' ? 'height' : 'width'
}
function cn(e) {
  return ['top', 'bottom'].includes(Ft(e)) ? 'y' : 'x'
}
function _u(e) {
  return Nu(cn(e))
}
function Fw(e, t, n) {
  n === void 0 && (n = !1)
  const r = Er(e),
    o = _u(e),
    i = Tu(o)
  let l =
    o === 'x'
      ? r === (n ? 'end' : 'start')
        ? 'right'
        : 'left'
      : r === 'start'
        ? 'bottom'
        : 'top'
  return t.reference[i] > t.floating[i] && (l = Ui(l)), [l, Ui(l)]
}
function $w(e) {
  const t = Ui(e)
  return [ha(e), t, ha(t)]
}
function ha(e) {
  return e.replace(/start|end/g, t => bw[t])
}
function Bw(e, t, n) {
  const r = ['left', 'right'],
    o = ['right', 'left'],
    i = ['top', 'bottom'],
    l = ['bottom', 'top']
  switch (e) {
    case 'top':
    case 'bottom':
      return n ? (t ? o : r) : t ? r : o
    case 'left':
    case 'right':
      return t ? i : l
    default:
      return []
  }
}
function Ww(e, t, n, r) {
  const o = Er(e)
  let i = Bw(Ft(e), n === 'start', r)
  return o && ((i = i.map(l => l + '-' + o)), t && (i = i.concat(i.map(ha)))), i
}
function Ui(e) {
  return e.replace(/left|right|bottom|top/g, t => jw[t])
}
function Hw(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e }
}
function xh(e) {
  return typeof e != 'number' ? Hw(e) : { top: e, right: e, bottom: e, left: e }
}
function Gi(e) {
  const { x: t, y: n, width: r, height: o } = e
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  }
}
function gd(e, t, n) {
  let { reference: r, floating: o } = e
  const i = cn(t),
    l = _u(t),
    s = Tu(l),
    a = Ft(t),
    u = i === 'y',
    d = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    p = r[s] / 2 - o[s] / 2
  let y
  switch (a) {
    case 'top':
      y = { x: d, y: r.y - o.height }
      break
    case 'bottom':
      y = { x: d, y: r.y + r.height }
      break
    case 'right':
      y = { x: r.x + r.width, y: f }
      break
    case 'left':
      y = { x: r.x - o.width, y: f }
      break
    default:
      y = { x: r.x, y: r.y }
  }
  switch (Er(t)) {
    case 'start':
      y[l] -= p * (n && u ? -1 : 1)
      break
    case 'end':
      y[l] += p * (n && u ? -1 : 1)
      break
  }
  return y
}
const Vw = async (e, t, n) => {
  const {
      placement: r = 'bottom',
      strategy: o = 'absolute',
      middleware: i = [],
      platform: l,
    } = n,
    s = i.filter(Boolean),
    a = await (l.isRTL == null ? void 0 : l.isRTL(t))
  let u = await l.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: f } = gd(u, r, a),
    p = r,
    y = {},
    w = 0
  for (let g = 0; g < s.length; g++) {
    const { name: C, fn: m } = s[g],
      {
        x: h,
        y: v,
        data: x,
        reset: E,
      } = await m({
        x: d,
        y: f,
        initialPlacement: r,
        placement: p,
        strategy: o,
        middlewareData: y,
        rects: u,
        platform: l,
        elements: { reference: e, floating: t },
      })
    ;(d = h ?? d),
      (f = v ?? f),
      (y = { ...y, [C]: { ...y[C], ...x } }),
      E &&
        w <= 50 &&
        (w++,
        typeof E == 'object' &&
          (E.placement && (p = E.placement),
          E.rects &&
            (u =
              E.rects === !0
                ? await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : E.rects),
          ({ x: d, y: f } = gd(u, p, a))),
        (g = -1))
  }
  return { x: d, y: f, placement: p, strategy: o, middlewareData: y }
}
async function yo(e, t) {
  var n
  t === void 0 && (t = {})
  const { x: r, y: o, platform: i, rects: l, elements: s, strategy: a } = e,
    {
      boundary: u = 'clippingAncestors',
      rootBoundary: d = 'viewport',
      elementContext: f = 'floating',
      altBoundary: p = !1,
      padding: y = 0,
    } = bt(t, e),
    w = xh(y),
    C = s[p ? (f === 'floating' ? 'reference' : 'floating') : f],
    m = Gi(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(C))) == null ||
          n
            ? C
            : C.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(s.floating))),
        boundary: u,
        rootBoundary: d,
        strategy: a,
      }),
    ),
    h =
      f === 'floating'
        ? { x: r, y: o, width: l.floating.width, height: l.floating.height }
        : l.reference,
    v = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(s.floating)),
    x = (await (i.isElement == null ? void 0 : i.isElement(v)))
      ? (await (i.getScale == null ? void 0 : i.getScale(v))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = Gi(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: s,
            rect: h,
            offsetParent: v,
            strategy: a,
          })
        : h,
    )
  return {
    top: (m.top - E.top + w.top) / x.y,
    bottom: (E.bottom - m.bottom + w.bottom) / x.y,
    left: (m.left - E.left + w.left) / x.x,
    right: (E.right - m.right + w.right) / x.x,
  }
}
const Uw = e => ({
    name: 'arrow',
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: l,
          elements: s,
          middlewareData: a,
        } = t,
        { element: u, padding: d = 0 } = bt(e, t) || {}
      if (u == null) return {}
      const f = xh(d),
        p = { x: n, y: r },
        y = _u(o),
        w = Tu(y),
        g = await l.getDimensions(u),
        C = y === 'y',
        m = C ? 'top' : 'left',
        h = C ? 'bottom' : 'right',
        v = C ? 'clientHeight' : 'clientWidth',
        x = i.reference[w] + i.reference[y] - p[y] - i.floating[w],
        E = p[y] - i.reference[y],
        R = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(u))
      let P = R ? R[v] : 0
      ;(!P || !(await (l.isElement == null ? void 0 : l.isElement(R)))) &&
        (P = s.floating[v] || i.floating[w])
      const k = x / 2 - E / 2,
        A = P / 2 - g[w] / 2 - 1,
        _ = an(f[m], A),
        D = an(f[h], A),
        $ = _,
        b = P - g[w] - D,
        F = P / 2 - g[w] / 2 + k,
        W = pa($, F, b),
        I =
          !a.arrow &&
          Er(o) != null &&
          F !== W &&
          i.reference[w] / 2 - (F < $ ? _ : D) - g[w] / 2 < 0,
        H = I ? (F < $ ? F - $ : F - b) : 0
      return {
        [y]: p[y] + H,
        data: {
          [y]: W,
          centerOffset: F - W - H,
          ...(I && { alignmentOffset: H }),
        },
        reset: I,
      }
    },
  }),
  Gw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'flip',
        options: e,
        async fn(t) {
          var n, r
          const {
              placement: o,
              middlewareData: i,
              rects: l,
              initialPlacement: s,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: f = !0,
              fallbackPlacements: p,
              fallbackStrategy: y = 'bestFit',
              fallbackAxisSideDirection: w = 'none',
              flipAlignment: g = !0,
              ...C
            } = bt(e, t)
          if ((n = i.arrow) != null && n.alignmentOffset) return {}
          const m = Ft(o),
            h = cn(s),
            v = Ft(s) === s,
            x = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            E = p || (v || !g ? [Ui(s)] : $w(s)),
            R = w !== 'none'
          !p && R && E.push(...Ww(s, g, w, x))
          const P = [s, ...E],
            k = await yo(t, C),
            A = []
          let _ = ((r = i.flip) == null ? void 0 : r.overflows) || []
          if ((d && A.push(k[m]), f)) {
            const F = Fw(o, l, x)
            A.push(k[F[0]], k[F[1]])
          }
          if (
            ((_ = [..._, { placement: o, overflows: A }]),
            !A.every(F => F <= 0))
          ) {
            var D, $
            const F = (((D = i.flip) == null ? void 0 : D.index) || 0) + 1,
              W = P[F]
            if (W)
              return {
                data: { index: F, overflows: _ },
                reset: { placement: W },
              }
            let I =
              ($ = _.filter(H => H.overflows[0] <= 0).sort(
                (H, N) => H.overflows[1] - N.overflows[1],
              )[0]) == null
                ? void 0
                : $.placement
            if (!I)
              switch (y) {
                case 'bestFit': {
                  var b
                  const H =
                    (b = _.filter(N => {
                      if (R) {
                        const L = cn(N.placement)
                        return L === h || L === 'y'
                      }
                      return !0
                    })
                      .map(N => [
                        N.placement,
                        N.overflows
                          .filter(L => L > 0)
                          .reduce((L, z) => L + z, 0),
                      ])
                      .sort((N, L) => N[1] - L[1])[0]) == null
                      ? void 0
                      : b[0]
                  H && (I = H)
                  break
                }
                case 'initialPlacement':
                  I = s
                  break
              }
            if (o !== I) return { reset: { placement: I } }
          }
          return {}
        },
      }
    )
  }
function yd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  }
}
function wd(e) {
  return Dw.some(t => e[t] >= 0)
}
const Yw = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: 'hide',
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = 'referenceHidden', ...o } = bt(e, t)
        switch (r) {
          case 'referenceHidden': {
            const i = await yo(t, { ...o, elementContext: 'reference' }),
              l = yd(i, n.reference)
            return {
              data: { referenceHiddenOffsets: l, referenceHidden: wd(l) },
            }
          }
          case 'escaped': {
            const i = await yo(t, { ...o, altBoundary: !0 }),
              l = yd(i, n.floating)
            return { data: { escapedOffsets: l, escaped: wd(l) } }
          }
          default:
            return {}
        }
      },
    }
  )
}
async function Kw(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    l = Ft(n),
    s = Er(n),
    a = cn(n) === 'y',
    u = ['left', 'top'].includes(l) ? -1 : 1,
    d = i && a ? -1 : 1,
    f = bt(t, e)
  let {
    mainAxis: p,
    crossAxis: y,
    alignmentAxis: w,
  } = typeof f == 'number'
    ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: f.mainAxis || 0,
        crossAxis: f.crossAxis || 0,
        alignmentAxis: f.alignmentAxis,
      }
  return (
    s && typeof w == 'number' && (y = s === 'end' ? w * -1 : w),
    a ? { x: y * d, y: p * u } : { x: p * u, y: y * d }
  )
}
const Xw = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: 'offset',
        options: e,
        async fn(t) {
          var n, r
          const { x: o, y: i, placement: l, middlewareData: s } = t,
            a = await Kw(t, e)
          return l === ((n = s.offset) == null ? void 0 : n.placement) &&
            (r = s.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: i + a.y, data: { ...a, placement: l } }
        },
      }
    )
  },
  Qw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'shift',
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: l = !1,
              limiter: s = {
                fn: C => {
                  let { x: m, y: h } = C
                  return { x: m, y: h }
                },
              },
              ...a
            } = bt(e, t),
            u = { x: n, y: r },
            d = await yo(t, a),
            f = cn(Ft(o)),
            p = Nu(f)
          let y = u[p],
            w = u[f]
          if (i) {
            const C = p === 'y' ? 'top' : 'left',
              m = p === 'y' ? 'bottom' : 'right',
              h = y + d[C],
              v = y - d[m]
            y = pa(h, y, v)
          }
          if (l) {
            const C = f === 'y' ? 'top' : 'left',
              m = f === 'y' ? 'bottom' : 'right',
              h = w + d[C],
              v = w - d[m]
            w = pa(h, w, v)
          }
          const g = s.fn({ ...t, [p]: y, [f]: w })
          return {
            ...g,
            data: { x: g.x - n, y: g.y - r, enabled: { [p]: i, [f]: l } },
          }
        },
      }
    )
  },
  Zw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: l } = t,
            { offset: s = 0, mainAxis: a = !0, crossAxis: u = !0 } = bt(e, t),
            d = { x: n, y: r },
            f = cn(o),
            p = Nu(f)
          let y = d[p],
            w = d[f]
          const g = bt(s, t),
            C =
              typeof g == 'number'
                ? { mainAxis: g, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...g }
          if (a) {
            const v = p === 'y' ? 'height' : 'width',
              x = i.reference[p] - i.floating[v] + C.mainAxis,
              E = i.reference[p] + i.reference[v] - C.mainAxis
            y < x ? (y = x) : y > E && (y = E)
          }
          if (u) {
            var m, h
            const v = p === 'y' ? 'width' : 'height',
              x = ['top', 'left'].includes(Ft(o)),
              E =
                i.reference[f] -
                i.floating[v] +
                ((x && ((m = l.offset) == null ? void 0 : m[f])) || 0) +
                (x ? 0 : C.crossAxis),
              R =
                i.reference[f] +
                i.reference[v] +
                (x ? 0 : ((h = l.offset) == null ? void 0 : h[f]) || 0) -
                (x ? C.crossAxis : 0)
            w < E ? (w = E) : w > R && (w = R)
          }
          return { [p]: y, [f]: w }
        },
      }
    )
  },
  Jw = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: 'size',
        options: e,
        async fn(t) {
          var n, r
          const { placement: o, rects: i, platform: l, elements: s } = t,
            { apply: a = () => {}, ...u } = bt(e, t),
            d = await yo(t, u),
            f = Ft(o),
            p = Er(o),
            y = cn(o) === 'y',
            { width: w, height: g } = i.floating
          let C, m
          f === 'top' || f === 'bottom'
            ? ((C = f),
              (m =
                p ===
                ((await (l.isRTL == null ? void 0 : l.isRTL(s.floating)))
                  ? 'start'
                  : 'end')
                  ? 'left'
                  : 'right'))
            : ((m = f), (C = p === 'end' ? 'top' : 'bottom'))
          const h = g - d.top - d.bottom,
            v = w - d.left - d.right,
            x = an(g - d[C], h),
            E = an(w - d[m], v),
            R = !t.middlewareData.shift
          let P = x,
            k = E
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (k = v),
            (r = t.middlewareData.shift) != null && r.enabled.y && (P = h),
            R && !p)
          ) {
            const _ = We(d.left, 0),
              D = We(d.right, 0),
              $ = We(d.top, 0),
              b = We(d.bottom, 0)
            y
              ? (k = w - 2 * (_ !== 0 || D !== 0 ? _ + D : We(d.left, d.right)))
              : (P = g - 2 * ($ !== 0 || b !== 0 ? $ + b : We(d.top, d.bottom)))
          }
          await a({ ...t, availableWidth: k, availableHeight: P })
          const A = await l.getDimensions(s.floating)
          return w !== A.width || g !== A.height ? { reset: { rects: !0 } } : {}
        },
      }
    )
  }
function yl() {
  return typeof window < 'u'
}
function Pr(e) {
  return Ch(e) ? (e.nodeName || '').toLowerCase() : '#document'
}
function Ue(e) {
  var t
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  )
}
function Rt(e) {
  var t
  return (t = (Ch(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement
}
function Ch(e) {
  return yl() ? e instanceof Node || e instanceof Ue(e).Node : !1
}
function ct(e) {
  return yl() ? e instanceof Element || e instanceof Ue(e).Element : !1
}
function Et(e) {
  return yl() ? e instanceof HTMLElement || e instanceof Ue(e).HTMLElement : !1
}
function Sd(e) {
  return !yl() || typeof ShadowRoot > 'u'
    ? !1
    : e instanceof ShadowRoot || e instanceof Ue(e).ShadowRoot
}
function No(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = dt(e)
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !['inline', 'contents'].includes(o)
  )
}
function qw(e) {
  return ['table', 'td', 'th'].includes(Pr(e))
}
function wl(e) {
  return [':popover-open', ':modal'].some(t => {
    try {
      return e.matches(t)
    } catch {
      return !1
    }
  })
}
function Au(e) {
  const t = Lu(),
    n = ct(e) ? dt(e) : e
  return (
    n.transform !== 'none' ||
    n.perspective !== 'none' ||
    (n.containerType ? n.containerType !== 'normal' : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
    (!t && (n.filter ? n.filter !== 'none' : !1)) ||
    ['transform', 'perspective', 'filter'].some(r =>
      (n.willChange || '').includes(r),
    ) ||
    ['paint', 'layout', 'strict', 'content'].some(r =>
      (n.contain || '').includes(r),
    )
  )
}
function e1(e) {
  let t = dn(e)
  for (; Et(t) && !gr(t); ) {
    if (Au(t)) return t
    if (wl(t)) return null
    t = dn(t)
  }
  return null
}
function Lu() {
  return typeof CSS > 'u' || !CSS.supports
    ? !1
    : CSS.supports('-webkit-backdrop-filter', 'none')
}
function gr(e) {
  return ['html', 'body', '#document'].includes(Pr(e))
}
function dt(e) {
  return Ue(e).getComputedStyle(e)
}
function Sl(e) {
  return ct(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY }
}
function dn(e) {
  if (Pr(e) === 'html') return e
  const t = e.assignedSlot || e.parentNode || (Sd(e) && e.host) || Rt(e)
  return Sd(t) ? t.host : t
}
function Eh(e) {
  const t = dn(e)
  return gr(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Et(t) && No(t)
      ? t
      : Eh(t)
}
function wo(e, t, n) {
  var r
  t === void 0 && (t = []), n === void 0 && (n = !0)
  const o = Eh(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    l = Ue(o)
  if (i) {
    const s = ma(l)
    return t.concat(
      l,
      l.visualViewport || [],
      No(o) ? o : [],
      s && n ? wo(s) : [],
    )
  }
  return t.concat(o, wo(o, [], n))
}
function ma(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Ph(e) {
  const t = dt(e)
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0
  const o = Et(e),
    i = o ? e.offsetWidth : n,
    l = o ? e.offsetHeight : r,
    s = Vi(n) !== i || Vi(r) !== l
  return s && ((n = i), (r = l)), { width: n, height: r, $: s }
}
function Ou(e) {
  return ct(e) ? e : e.contextElement
}
function ur(e) {
  const t = Ou(e)
  if (!Et(t)) return un(1)
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = Ph(t)
  let l = (i ? Vi(n.width) : n.width) / r,
    s = (i ? Vi(n.height) : n.height) / o
  return (
    (!l || !Number.isFinite(l)) && (l = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    { x: l, y: s }
  )
}
const t1 = un(0)
function Rh(e) {
  const t = Ue(e)
  return !Lu() || !t.visualViewport
    ? t1
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
}
function n1(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Ue(e)) ? !1 : t
}
function zn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1)
  const o = e.getBoundingClientRect(),
    i = Ou(e)
  let l = un(1)
  t && (r ? ct(r) && (l = ur(r)) : (l = ur(e)))
  const s = n1(i, n, r) ? Rh(i) : un(0)
  let a = (o.left + s.x) / l.x,
    u = (o.top + s.y) / l.y,
    d = o.width / l.x,
    f = o.height / l.y
  if (i) {
    const p = Ue(i),
      y = r && ct(r) ? Ue(r) : r
    let w = p,
      g = ma(w)
    for (; g && r && y !== w; ) {
      const C = ur(g),
        m = g.getBoundingClientRect(),
        h = dt(g),
        v = m.left + (g.clientLeft + parseFloat(h.paddingLeft)) * C.x,
        x = m.top + (g.clientTop + parseFloat(h.paddingTop)) * C.y
      ;(a *= C.x),
        (u *= C.y),
        (d *= C.x),
        (f *= C.y),
        (a += v),
        (u += x),
        (w = Ue(g)),
        (g = ma(w))
    }
  }
  return Gi({ width: d, height: f, x: a, y: u })
}
function r1(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e
  const i = o === 'fixed',
    l = Rt(r),
    s = t ? wl(t.floating) : !1
  if (r === l || (s && i)) return n
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = un(1)
  const d = un(0),
    f = Et(r)
  if (
    (f || (!f && !i)) &&
    ((Pr(r) !== 'body' || No(l)) && (a = Sl(r)), Et(r))
  ) {
    const p = zn(r)
    ;(u = ur(r)), (d.x = p.x + r.clientLeft), (d.y = p.y + r.clientTop)
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + d.x,
    y: n.y * u.y - a.scrollTop * u.y + d.y,
  }
}
function o1(e) {
  return Array.from(e.getClientRects())
}
function va(e, t) {
  const n = Sl(e).scrollLeft
  return t ? t.left + n : zn(Rt(e)).left + n
}
function i1(e) {
  const t = Rt(e),
    n = Sl(e),
    r = e.ownerDocument.body,
    o = We(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = We(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight)
  let l = -n.scrollLeft + va(e)
  const s = -n.scrollTop
  return (
    dt(r).direction === 'rtl' && (l += We(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: l, y: s }
  )
}
function l1(e, t) {
  const n = Ue(e),
    r = Rt(e),
    o = n.visualViewport
  let i = r.clientWidth,
    l = r.clientHeight,
    s = 0,
    a = 0
  if (o) {
    ;(i = o.width), (l = o.height)
    const u = Lu()
    ;(!u || (u && t === 'fixed')) && ((s = o.offsetLeft), (a = o.offsetTop))
  }
  return { width: i, height: l, x: s, y: a }
}
function s1(e, t) {
  const n = zn(e, !0, t === 'fixed'),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = Et(e) ? ur(e) : un(1),
    l = e.clientWidth * i.x,
    s = e.clientHeight * i.y,
    a = o * i.x,
    u = r * i.y
  return { width: l, height: s, x: a, y: u }
}
function xd(e, t, n) {
  let r
  if (t === 'viewport') r = l1(e, n)
  else if (t === 'document') r = i1(Rt(e))
  else if (ct(t)) r = s1(t, n)
  else {
    const o = Rh(e)
    r = { ...t, x: t.x - o.x, y: t.y - o.y }
  }
  return Gi(r)
}
function kh(e, t) {
  const n = dn(e)
  return n === t || !ct(n) || gr(n)
    ? !1
    : dt(n).position === 'fixed' || kh(n, t)
}
function a1(e, t) {
  const n = t.get(e)
  if (n) return n
  let r = wo(e, [], !1).filter(s => ct(s) && Pr(s) !== 'body'),
    o = null
  const i = dt(e).position === 'fixed'
  let l = i ? dn(e) : e
  for (; ct(l) && !gr(l); ) {
    const s = dt(l),
      a = Au(l)
    !a && s.position === 'fixed' && (o = null),
      (
        i
          ? !a && !o
          : (!a &&
              s.position === 'static' &&
              !!o &&
              ['absolute', 'fixed'].includes(o.position)) ||
            (No(l) && !a && kh(e, l))
      )
        ? (r = r.filter(d => d !== l))
        : (o = s),
      (l = dn(l))
  }
  return t.set(e, r), r
}
function u1(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e
  const l = [
      ...(n === 'clippingAncestors'
        ? wl(t)
          ? []
          : a1(t, this._c)
        : [].concat(n)),
      r,
    ],
    s = l[0],
    a = l.reduce(
      (u, d) => {
        const f = xd(t, d, o)
        return (
          (u.top = We(f.top, u.top)),
          (u.right = an(f.right, u.right)),
          (u.bottom = an(f.bottom, u.bottom)),
          (u.left = We(f.left, u.left)),
          u
        )
      },
      xd(t, s, o),
    )
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  }
}
function c1(e) {
  const { width: t, height: n } = Ph(e)
  return { width: t, height: n }
}
function d1(e, t, n) {
  const r = Et(t),
    o = Rt(t),
    i = n === 'fixed',
    l = zn(e, !0, i, t)
  let s = { scrollLeft: 0, scrollTop: 0 }
  const a = un(0)
  if (r || (!r && !i))
    if (((Pr(t) !== 'body' || No(o)) && (s = Sl(t)), r)) {
      const y = zn(t, !0, i, t)
      ;(a.x = y.x + t.clientLeft), (a.y = y.y + t.clientTop)
    } else o && (a.x = va(o))
  let u = 0,
    d = 0
  if (o && !r && !i) {
    const y = o.getBoundingClientRect()
    ;(d = y.top + s.scrollTop), (u = y.left + s.scrollLeft - va(o, y))
  }
  const f = l.left + s.scrollLeft - a.x - u,
    p = l.top + s.scrollTop - a.y - d
  return { x: f, y: p, width: l.width, height: l.height }
}
function cs(e) {
  return dt(e).position === 'static'
}
function Cd(e, t) {
  if (!Et(e) || dt(e).position === 'fixed') return null
  if (t) return t(e)
  let n = e.offsetParent
  return Rt(e) === n && (n = n.ownerDocument.body), n
}
function Nh(e, t) {
  const n = Ue(e)
  if (wl(e)) return n
  if (!Et(e)) {
    let o = dn(e)
    for (; o && !gr(o); ) {
      if (ct(o) && !cs(o)) return o
      o = dn(o)
    }
    return n
  }
  let r = Cd(e, t)
  for (; r && qw(r) && cs(r); ) r = Cd(r, t)
  return r && gr(r) && cs(r) && !Au(r) ? n : r || e1(e) || n
}
const f1 = async function (e) {
  const t = this.getOffsetParent || Nh,
    n = this.getDimensions,
    r = await n(e.floating)
  return {
    reference: d1(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  }
}
function p1(e) {
  return dt(e).direction === 'rtl'
}
const h1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: r1,
  getDocumentElement: Rt,
  getClippingRect: u1,
  getOffsetParent: Nh,
  getElementRects: f1,
  getClientRects: o1,
  getDimensions: c1,
  getScale: ur,
  isElement: ct,
  isRTL: p1,
}
function m1(e, t) {
  let n = null,
    r
  const o = Rt(e)
  function i() {
    var s
    clearTimeout(r), (s = n) == null || s.disconnect(), (n = null)
  }
  function l(s, a) {
    s === void 0 && (s = !1), a === void 0 && (a = 1), i()
    const { left: u, top: d, width: f, height: p } = e.getBoundingClientRect()
    if ((s || t(), !f || !p)) return
    const y = qo(d),
      w = qo(o.clientWidth - (u + f)),
      g = qo(o.clientHeight - (d + p)),
      C = qo(u),
      h = {
        rootMargin: -y + 'px ' + -w + 'px ' + -g + 'px ' + -C + 'px',
        threshold: We(0, an(1, a)) || 1,
      }
    let v = !0
    function x(E) {
      const R = E[0].intersectionRatio
      if (R !== a) {
        if (!v) return l()
        R
          ? l(!1, R)
          : (r = setTimeout(() => {
              l(!1, 1e-7)
            }, 1e3))
      }
      v = !1
    }
    try {
      n = new IntersectionObserver(x, { ...h, root: o.ownerDocument })
    } catch {
      n = new IntersectionObserver(x, h)
    }
    n.observe(e)
  }
  return l(!0), i
}
function v1(e, t, n, r) {
  r === void 0 && (r = {})
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: l = typeof ResizeObserver == 'function',
      layoutShift: s = typeof IntersectionObserver == 'function',
      animationFrame: a = !1,
    } = r,
    u = Ou(e),
    d = o || i ? [...(u ? wo(u) : []), ...wo(t)] : []
  d.forEach(m => {
    o && m.addEventListener('scroll', n, { passive: !0 }),
      i && m.addEventListener('resize', n)
  })
  const f = u && s ? m1(u, n) : null
  let p = -1,
    y = null
  l &&
    ((y = new ResizeObserver(m => {
      let [h] = m
      h &&
        h.target === u &&
        y &&
        (y.unobserve(t),
        cancelAnimationFrame(p),
        (p = requestAnimationFrame(() => {
          var v
          ;(v = y) == null || v.observe(t)
        }))),
        n()
    })),
    u && !a && y.observe(u),
    y.observe(t))
  let w,
    g = a ? zn(e) : null
  a && C()
  function C() {
    const m = zn(e)
    g &&
      (m.x !== g.x ||
        m.y !== g.y ||
        m.width !== g.width ||
        m.height !== g.height) &&
      n(),
      (g = m),
      (w = requestAnimationFrame(C))
  }
  return (
    n(),
    () => {
      var m
      d.forEach(h => {
        o && h.removeEventListener('scroll', n),
          i && h.removeEventListener('resize', n)
      }),
        f == null || f(),
        (m = y) == null || m.disconnect(),
        (y = null),
        a && cancelAnimationFrame(w)
    }
  )
}
const g1 = Xw,
  y1 = Qw,
  w1 = Gw,
  S1 = Jw,
  x1 = Yw,
  Ed = Uw,
  C1 = Zw,
  E1 = (e, t, n) => {
    const r = new Map(),
      o = { platform: h1, ...n },
      i = { ...o.platform, _c: r }
    return Vw(e, t, { ...o, platform: i })
  }
var yi = typeof document < 'u' ? c.useLayoutEffect : c.useEffect
function Yi(e, t) {
  if (e === t) return !0
  if (typeof e != typeof t) return !1
  if (typeof e == 'function' && e.toString() === t.toString()) return !0
  let n, r, o
  if (e && t && typeof e == 'object') {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1
      for (r = n; r-- !== 0; ) if (!Yi(e[r], t[r])) return !1
      return !0
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1
    for (r = n; r-- !== 0; ) {
      const i = o[r]
      if (!(i === '_owner' && e.$$typeof) && !Yi(e[i], t[i])) return !1
    }
    return !0
  }
  return e !== e && t !== t
}
function Th(e) {
  return typeof window > 'u'
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Pd(e, t) {
  const n = Th(e)
  return Math.round(t * n) / n
}
function ds(e) {
  const t = c.useRef(e)
  return (
    yi(() => {
      t.current = e
    }),
    t
  )
}
function P1(e) {
  e === void 0 && (e = {})
  const {
      placement: t = 'bottom',
      strategy: n = 'absolute',
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: l } = {},
      transform: s = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [d, f] = c.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [p, y] = c.useState(r)
  Yi(p, r) || y(r)
  const [w, g] = c.useState(null),
    [C, m] = c.useState(null),
    h = c.useCallback(N => {
      N !== R.current && ((R.current = N), g(N))
    }, []),
    v = c.useCallback(N => {
      N !== P.current && ((P.current = N), m(N))
    }, []),
    x = i || w,
    E = l || C,
    R = c.useRef(null),
    P = c.useRef(null),
    k = c.useRef(d),
    A = a != null,
    _ = ds(a),
    D = ds(o),
    $ = ds(u),
    b = c.useCallback(() => {
      if (!R.current || !P.current) return
      const N = { placement: t, strategy: n, middleware: p }
      D.current && (N.platform = D.current),
        E1(R.current, P.current, N).then(L => {
          const z = { ...L, isPositioned: $.current !== !1 }
          F.current &&
            !Yi(k.current, z) &&
            ((k.current = z),
            mn.flushSync(() => {
              f(z)
            }))
        })
    }, [p, t, n, D, $])
  yi(() => {
    u === !1 &&
      k.current.isPositioned &&
      ((k.current.isPositioned = !1), f(N => ({ ...N, isPositioned: !1 })))
  }, [u])
  const F = c.useRef(!1)
  yi(
    () => (
      (F.current = !0),
      () => {
        F.current = !1
      }
    ),
    [],
  ),
    yi(() => {
      if ((x && (R.current = x), E && (P.current = E), x && E)) {
        if (_.current) return _.current(x, E, b)
        b()
      }
    }, [x, E, b, _, A])
  const W = c.useMemo(
      () => ({ reference: R, floating: P, setReference: h, setFloating: v }),
      [h, v],
    ),
    I = c.useMemo(() => ({ reference: x, floating: E }), [x, E]),
    H = c.useMemo(() => {
      const N = { position: n, left: 0, top: 0 }
      if (!I.floating) return N
      const L = Pd(I.floating, d.x),
        z = Pd(I.floating, d.y)
      return s
        ? {
            ...N,
            transform: 'translate(' + L + 'px, ' + z + 'px)',
            ...(Th(I.floating) >= 1.5 && { willChange: 'transform' }),
          }
        : { position: n, left: L, top: z }
    }, [n, s, I.floating, d.x, d.y])
  return c.useMemo(
    () => ({ ...d, update: b, refs: W, elements: I, floatingStyles: H }),
    [d, b, W, I, H],
  )
}
const R1 = e => {
    function t(n) {
      return {}.hasOwnProperty.call(n, 'current')
    }
    return {
      name: 'arrow',
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == 'function' ? e(n) : e
        return r && t(r)
          ? r.current != null
            ? Ed({ element: r.current, padding: o }).fn(n)
            : {}
          : r
            ? Ed({ element: r, padding: o }).fn(n)
            : {}
      },
    }
  },
  k1 = (e, t) => ({ ...g1(e), options: [e, t] }),
  N1 = (e, t) => ({ ...y1(e), options: [e, t] }),
  T1 = (e, t) => ({ ...C1(e), options: [e, t] }),
  _1 = (e, t) => ({ ...w1(e), options: [e, t] }),
  A1 = (e, t) => ({ ...S1(e), options: [e, t] }),
  L1 = (e, t) => ({ ...x1(e), options: [e, t] }),
  O1 = (e, t) => ({ ...R1(e), options: [e, t] })
var z1 = 'Arrow',
  _h = c.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e
    return S.jsx(V.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: '0 0 30 10',
      preserveAspectRatio: 'none',
      children: e.asChild ? n : S.jsx('polygon', { points: '0,0 30,0 15,10' }),
    })
  })
_h.displayName = z1
var I1 = _h
function Ah(e) {
  const [t, n] = c.useState(void 0)
  return (
    Te(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight })
        const r = new ResizeObserver(o => {
          if (!Array.isArray(o) || !o.length) return
          const i = o[0]
          let l, s
          if ('borderBoxSize' in i) {
            const a = i.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a
            ;(l = u.inlineSize), (s = u.blockSize)
          } else (l = e.offsetWidth), (s = e.offsetHeight)
          n({ width: l, height: s })
        })
        return r.observe(e, { box: 'border-box' }), () => r.unobserve(e)
      } else n(void 0)
    }, [e]),
    t
  )
}
var zu = 'Popper',
  [Lh, xl] = Bt(zu),
  [M1, Oh] = Lh(zu),
  zh = e => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = c.useState(null)
    return S.jsx(M1, { scope: t, anchor: r, onAnchorChange: o, children: n })
  }
zh.displayName = zu
var Ih = 'PopperAnchor',
  Mh = c.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = Oh(Ih, n),
      l = c.useRef(null),
      s = X(t, l)
    return (
      c.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || l.current)
      }),
      r ? null : S.jsx(V.div, { ...o, ref: s })
    )
  })
Mh.displayName = Ih
var Iu = 'PopperContent',
  [D1, j1] = Lh(Iu),
  Dh = c.forwardRef((e, t) => {
    var M, ee, Ee, J, Q, Z
    const {
        __scopePopper: n,
        side: r = 'bottom',
        sideOffset: o = 0,
        align: i = 'center',
        alignOffset: l = 0,
        arrowPadding: s = 0,
        avoidCollisions: a = !0,
        collisionBoundary: u = [],
        collisionPadding: d = 0,
        sticky: f = 'partial',
        hideWhenDetached: p = !1,
        updatePositionStrategy: y = 'optimized',
        onPlaced: w,
        ...g
      } = e,
      C = Oh(Iu, n),
      [m, h] = c.useState(null),
      v = X(t, Fe => h(Fe)),
      [x, E] = c.useState(null),
      R = Ah(x),
      P = (R == null ? void 0 : R.width) ?? 0,
      k = (R == null ? void 0 : R.height) ?? 0,
      A = r + (i !== 'center' ? '-' + i : ''),
      _ =
        typeof d == 'number'
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      D = Array.isArray(u) ? u : [u],
      $ = D.length > 0,
      b = { padding: _, boundary: D.filter(F1), altBoundary: $ },
      {
        refs: F,
        floatingStyles: W,
        placement: I,
        isPositioned: H,
        middlewareData: N,
      } = P1({
        strategy: 'fixed',
        placement: A,
        whileElementsMounted: (...Fe) =>
          v1(...Fe, { animationFrame: y === 'always' }),
        elements: { reference: C.anchor },
        middleware: [
          k1({ mainAxis: o + k, alignmentAxis: l }),
          a &&
            N1({
              mainAxis: !0,
              crossAxis: !1,
              limiter: f === 'partial' ? T1() : void 0,
              ...b,
            }),
          a && _1({ ...b }),
          A1({
            ...b,
            apply: ({
              elements: Fe,
              rects: mt,
              availableWidth: Nr,
              availableHeight: Tr,
            }) => {
              const { width: _r, height: Rv } = mt.reference,
                Ao = Fe.floating.style
              Ao.setProperty('--radix-popper-available-width', `${Nr}px`),
                Ao.setProperty('--radix-popper-available-height', `${Tr}px`),
                Ao.setProperty('--radix-popper-anchor-width', `${_r}px`),
                Ao.setProperty('--radix-popper-anchor-height', `${Rv}px`)
            },
          }),
          x && O1({ element: x, padding: s }),
          $1({ arrowWidth: P, arrowHeight: k }),
          p && L1({ strategy: 'referenceHidden', ...b }),
        ],
      }),
      [L, z] = Fh(I),
      G = ye(w)
    Te(() => {
      H && (G == null || G())
    }, [H, G])
    const re = (M = N.arrow) == null ? void 0 : M.x,
      pt = (ee = N.arrow) == null ? void 0 : ee.y,
      Ce = ((Ee = N.arrow) == null ? void 0 : Ee.centerOffset) !== 0,
      [ht, _e] = c.useState()
    return (
      Te(() => {
        m && _e(window.getComputedStyle(m).zIndex)
      }, [m]),
      S.jsx('div', {
        ref: F.setFloating,
        'data-radix-popper-content-wrapper': '',
        style: {
          ...W,
          transform: H ? W.transform : 'translate(0, -200%)',
          minWidth: 'max-content',
          zIndex: ht,
          '--radix-popper-transform-origin': [
            (J = N.transformOrigin) == null ? void 0 : J.x,
            (Q = N.transformOrigin) == null ? void 0 : Q.y,
          ].join(' '),
          ...(((Z = N.hide) == null ? void 0 : Z.referenceHidden) && {
            visibility: 'hidden',
            pointerEvents: 'none',
          }),
        },
        dir: e.dir,
        children: S.jsx(D1, {
          scope: n,
          placedSide: L,
          onArrowChange: E,
          arrowX: re,
          arrowY: pt,
          shouldHideArrow: Ce,
          children: S.jsx(V.div, {
            'data-side': L,
            'data-align': z,
            ...g,
            ref: v,
            style: { ...g.style, animation: H ? void 0 : 'none' },
          }),
        }),
      })
    )
  })
Dh.displayName = Iu
var jh = 'PopperArrow',
  b1 = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
  bh = c.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = j1(jh, r),
      l = b1[i.placedSide]
    return S.jsx('span', {
      ref: i.onArrowChange,
      style: {
        position: 'absolute',
        left: i.arrowX,
        top: i.arrowY,
        [l]: 0,
        transformOrigin: {
          top: '',
          right: '0 0',
          bottom: 'center 0',
          left: '100% 0',
        }[i.placedSide],
        transform: {
          top: 'translateY(100%)',
          right: 'translateY(50%) rotate(90deg) translateX(-50%)',
          bottom: 'rotate(180deg)',
          left: 'translateY(50%) rotate(-90deg) translateX(50%)',
        }[i.placedSide],
        visibility: i.shouldHideArrow ? 'hidden' : void 0,
      },
      children: S.jsx(I1, {
        ...o,
        ref: n,
        style: { ...o.style, display: 'block' },
      }),
    })
  })
bh.displayName = jh
function F1(e) {
  return e !== null
}
var $1 = e => ({
  name: 'transformOrigin',
  options: e,
  fn(t) {
    var C, m, h
    const { placement: n, rects: r, middlewareData: o } = t,
      l = ((C = o.arrow) == null ? void 0 : C.centerOffset) !== 0,
      s = l ? 0 : e.arrowWidth,
      a = l ? 0 : e.arrowHeight,
      [u, d] = Fh(n),
      f = { start: '0%', center: '50%', end: '100%' }[d],
      p = (((m = o.arrow) == null ? void 0 : m.x) ?? 0) + s / 2,
      y = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + a / 2
    let w = '',
      g = ''
    return (
      u === 'bottom'
        ? ((w = l ? f : `${p}px`), (g = `${-a}px`))
        : u === 'top'
          ? ((w = l ? f : `${p}px`), (g = `${r.floating.height + a}px`))
          : u === 'right'
            ? ((w = `${-a}px`), (g = l ? f : `${y}px`))
            : u === 'left' &&
              ((w = `${r.floating.width + a}px`), (g = l ? f : `${y}px`)),
      { data: { x: w, y: g } }
    )
  },
})
function Fh(e) {
  const [t, n = 'center'] = e.split('-')
  return [t, n]
}
var B1 = zh,
  $h = Mh,
  Bh = Dh,
  Wh = bh,
  [Cl, VC] = Bt('Tooltip', [xl]),
  Mu = xl(),
  Hh = 'TooltipProvider',
  W1 = 700,
  Rd = 'tooltip.open',
  [H1, Vh] = Cl(Hh),
  Uh = e => {
    const {
        __scopeTooltip: t,
        delayDuration: n = W1,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      [l, s] = c.useState(!0),
      a = c.useRef(!1),
      u = c.useRef(0)
    return (
      c.useEffect(() => {
        const d = u.current
        return () => window.clearTimeout(d)
      }, []),
      S.jsx(H1, {
        scope: t,
        isOpenDelayed: l,
        delayDuration: n,
        onOpen: c.useCallback(() => {
          window.clearTimeout(u.current), s(!1)
        }, []),
        onClose: c.useCallback(() => {
          window.clearTimeout(u.current),
            (u.current = window.setTimeout(() => s(!0), r))
        }, [r]),
        isPointerInTransitRef: a,
        onPointerInTransitChange: c.useCallback(d => {
          a.current = d
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    )
  }
Uh.displayName = Hh
var Gh = 'Tooltip',
  [UC, El] = Cl(Gh),
  ga = 'TooltipTrigger',
  V1 = c.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = El(ga, n),
      i = Vh(ga, n),
      l = Mu(n),
      s = c.useRef(null),
      a = X(t, s, o.onTriggerChange),
      u = c.useRef(!1),
      d = c.useRef(!1),
      f = c.useCallback(() => (u.current = !1), [])
    return (
      c.useEffect(
        () => () => document.removeEventListener('pointerup', f),
        [f],
      ),
      S.jsx($h, {
        asChild: !0,
        ...l,
        children: S.jsx(V.button, {
          'aria-describedby': o.open ? o.contentId : void 0,
          'data-state': o.stateAttribute,
          ...r,
          ref: a,
          onPointerMove: j(e.onPointerMove, p => {
            p.pointerType !== 'touch' &&
              !d.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (d.current = !0))
          }),
          onPointerLeave: j(e.onPointerLeave, () => {
            o.onTriggerLeave(), (d.current = !1)
          }),
          onPointerDown: j(e.onPointerDown, () => {
            ;(u.current = !0),
              document.addEventListener('pointerup', f, { once: !0 })
          }),
          onFocus: j(e.onFocus, () => {
            u.current || o.onOpen()
          }),
          onBlur: j(e.onBlur, o.onClose),
          onClick: j(e.onClick, o.onClose),
        }),
      })
    )
  })
V1.displayName = ga
var U1 = 'TooltipPortal',
  [GC, G1] = Cl(U1, { forceMount: void 0 }),
  yr = 'TooltipContent',
  Y1 = c.forwardRef((e, t) => {
    const n = G1(yr, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = 'top', ...i } = e,
      l = El(yr, e.__scopeTooltip)
    return S.jsx(jn, {
      present: r || l.open,
      children: l.disableHoverableContent
        ? S.jsx(Yh, { side: o, ...i, ref: t })
        : S.jsx(K1, { side: o, ...i, ref: t }),
    })
  }),
  K1 = c.forwardRef((e, t) => {
    const n = El(yr, e.__scopeTooltip),
      r = Vh(yr, e.__scopeTooltip),
      o = c.useRef(null),
      i = X(t, o),
      [l, s] = c.useState(null),
      { trigger: a, onClose: u } = n,
      d = o.current,
      { onPointerInTransitChange: f } = r,
      p = c.useCallback(() => {
        s(null), f(!1)
      }, [f]),
      y = c.useCallback(
        (w, g) => {
          const C = w.currentTarget,
            m = { x: w.clientX, y: w.clientY },
            h = J1(m, C.getBoundingClientRect()),
            v = q1(m, h),
            x = eS(g.getBoundingClientRect()),
            E = nS([...v, ...x])
          s(E), f(!0)
        },
        [f],
      )
    return (
      c.useEffect(() => () => p(), [p]),
      c.useEffect(() => {
        if (a && d) {
          const w = C => y(C, d),
            g = C => y(C, a)
          return (
            a.addEventListener('pointerleave', w),
            d.addEventListener('pointerleave', g),
            () => {
              a.removeEventListener('pointerleave', w),
                d.removeEventListener('pointerleave', g)
            }
          )
        }
      }, [a, d, y, p]),
      c.useEffect(() => {
        if (l) {
          const w = g => {
            const C = g.target,
              m = { x: g.clientX, y: g.clientY },
              h =
                (a == null ? void 0 : a.contains(C)) ||
                (d == null ? void 0 : d.contains(C)),
              v = !tS(m, l)
            h ? p() : v && (p(), u())
          }
          return (
            document.addEventListener('pointermove', w),
            () => document.removeEventListener('pointermove', w)
          )
        }
      }, [a, d, l, u, p]),
      S.jsx(Yh, { ...e, ref: i })
    )
  }),
  [X1, Q1] = Cl(Gh, { isInside: !1 }),
  Yh = c.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        'aria-label': o,
        onEscapeKeyDown: i,
        onPointerDownOutside: l,
        ...s
      } = e,
      a = El(yr, n),
      u = Mu(n),
      { onClose: d } = a
    return (
      c.useEffect(
        () => (
          document.addEventListener(Rd, d),
          () => document.removeEventListener(Rd, d)
        ),
        [d],
      ),
      c.useEffect(() => {
        if (a.trigger) {
          const f = p => {
            const y = p.target
            y != null && y.contains(a.trigger) && d()
          }
          return (
            window.addEventListener('scroll', f, { capture: !0 }),
            () => window.removeEventListener('scroll', f, { capture: !0 })
          )
        }
      }, [a.trigger, d]),
      S.jsx(xu, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: l,
        onFocusOutside: f => f.preventDefault(),
        onDismiss: d,
        children: S.jsxs(Bh, {
          'data-state': a.stateAttribute,
          ...u,
          ...s,
          ref: t,
          style: {
            ...s.style,
            '--radix-tooltip-content-transform-origin':
              'var(--radix-popper-transform-origin)',
            '--radix-tooltip-content-available-width':
              'var(--radix-popper-available-width)',
            '--radix-tooltip-content-available-height':
              'var(--radix-popper-available-height)',
            '--radix-tooltip-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-tooltip-trigger-height':
              'var(--radix-popper-anchor-height)',
          },
          children: [
            S.jsx(eh, { children: r }),
            S.jsx(X1, {
              scope: n,
              isInside: !0,
              children: S.jsx(sy, {
                id: a.contentId,
                role: 'tooltip',
                children: o || r,
              }),
            }),
          ],
        }),
      })
    )
  })
Y1.displayName = yr
var Kh = 'TooltipArrow',
  Z1 = c.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Mu(n)
    return Q1(Kh, n).isInside ? null : S.jsx(Wh, { ...o, ...r, ref: t })
  })
Z1.displayName = Kh
function J1(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x)
  switch (Math.min(n, r, o, i)) {
    case i:
      return 'left'
    case o:
      return 'right'
    case n:
      return 'top'
    case r:
      return 'bottom'
    default:
      throw new Error('unreachable')
  }
}
function q1(e, t, n = 5) {
  const r = []
  switch (t) {
    case 'top':
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n })
      break
    case 'bottom':
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n })
      break
    case 'left':
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n })
      break
    case 'right':
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n })
      break
  }
  return r
}
function eS(e) {
  const { top: t, right: n, bottom: r, left: o } = e
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ]
}
function tS(e, t) {
  const { x: n, y: r } = e
  let o = !1
  for (let i = 0, l = t.length - 1; i < t.length; l = i++) {
    const s = t[i].x,
      a = t[i].y,
      u = t[l].x,
      d = t[l].y
    a > r != d > r && n < ((u - s) * (r - a)) / (d - a) + s && (o = !o)
  }
  return o
}
function nS(e) {
  const t = e.slice()
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0,
    ),
    rS(t)
  )
}
function rS(e) {
  if (e.length <= 1) return e.slice()
  const t = []
  for (let r = 0; r < e.length; r++) {
    const o = e[r]
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        l = t[t.length - 2]
      if ((i.x - l.x) * (o.y - l.y) >= (i.y - l.y) * (o.x - l.x)) t.pop()
      else break
    }
    t.push(o)
  }
  t.pop()
  const n = []
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r]
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        l = n[n.length - 2]
      if ((i.x - l.x) * (o.y - l.y) >= (i.y - l.y) * (o.x - l.x)) n.pop()
      else break
    }
    n.push(o)
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  )
}
var oS = Uh,
  Xh = c.createContext(void 0),
  iS = e => {
    const { dir: t, children: n } = e
    return S.jsx(Xh.Provider, { value: t, children: n })
  }
function To(e) {
  const t = c.useContext(Xh)
  return e || t || 'ltr'
}
function lS(e) {
  switch (e) {
    case 'tomato':
    case 'red':
    case 'ruby':
    case 'crimson':
    case 'pink':
    case 'plum':
    case 'purple':
    case 'violet':
      return 'mauve'
    case 'iris':
    case 'indigo':
    case 'blue':
    case 'sky':
    case 'cyan':
      return 'slate'
    case 'teal':
    case 'jade':
    case 'mint':
    case 'green':
      return 'sage'
    case 'grass':
    case 'lime':
      return 'olive'
    case 'yellow':
    case 'amber':
    case 'orange':
    case 'brown':
    case 'gold':
    case 'bronze':
      return 'sand'
    case 'gray':
      return 'gray'
  }
}
const Qh = ['none', 'small', 'medium', 'large', 'full'],
  Zh = { radius: { type: 'enum', values: Qh, default: void 0 } },
  sS = ['inherit', 'light', 'dark'],
  aS = ['solid', 'translucent'],
  uS = ['90%', '95%', '100%', '105%', '110%'],
  Be = {
    ...vn,
    hasBackground: { type: 'boolean', default: !0 },
    appearance: { type: 'enum', values: sS, default: 'inherit' },
    accentColor: { type: 'enum', values: Cu, default: 'indigo' },
    grayColor: { type: 'enum', values: xw, default: 'auto' },
    panelBackground: { type: 'enum', values: aS, default: 'translucent' },
    radius: { type: 'enum', values: Qh, default: 'medium' },
    scaling: { type: 'enum', values: uS, default: '100%' },
  },
  Wn = () => {},
  Ki = c.createContext(void 0)
function cS() {
  const e = c.useContext(Ki)
  if (e === void 0)
    throw new Error('`useThemeContext` must be used within a `Theme`')
  return e
}
const Du = c.forwardRef((e, t) =>
  c.useContext(Ki) === void 0
    ? c.createElement(
        oS,
        { delayDuration: 200 },
        c.createElement(
          iS,
          { dir: 'ltr' },
          c.createElement(Jh, { ...e, ref: t }),
        ),
      )
    : c.createElement(ju, { ...e, ref: t }),
)
Du.displayName = 'Theme'
const Jh = c.forwardRef((e, t) => {
  const {
      appearance: n = Be.appearance.default,
      accentColor: r = Be.accentColor.default,
      grayColor: o = Be.grayColor.default,
      panelBackground: i = Be.panelBackground.default,
      radius: l = Be.radius.default,
      scaling: s = Be.scaling.default,
      hasBackground: a = Be.hasBackground.default,
      ...u
    } = e,
    [d, f] = c.useState(n)
  c.useEffect(() => f(n), [n])
  const [p, y] = c.useState(r)
  c.useEffect(() => y(r), [r])
  const [w, g] = c.useState(o)
  c.useEffect(() => g(o), [o])
  const [C, m] = c.useState(i)
  c.useEffect(() => m(i), [i])
  const [h, v] = c.useState(l)
  c.useEffect(() => v(l), [l])
  const [x, E] = c.useState(s)
  return (
    c.useEffect(() => E(s), [s]),
    c.createElement(ju, {
      ...u,
      ref: t,
      isRoot: !0,
      hasBackground: a,
      appearance: d,
      accentColor: p,
      grayColor: w,
      panelBackground: C,
      radius: h,
      scaling: x,
      onAppearanceChange: f,
      onAccentColorChange: y,
      onGrayColorChange: g,
      onPanelBackgroundChange: m,
      onRadiusChange: v,
      onScalingChange: E,
    })
  )
})
Jh.displayName = 'ThemeRoot'
const ju = c.forwardRef((e, t) => {
  const n = c.useContext(Ki),
    {
      asChild: r,
      isRoot: o,
      hasBackground: i,
      appearance: l = (n == null ? void 0 : n.appearance) ??
        Be.appearance.default,
      accentColor: s = (n == null ? void 0 : n.accentColor) ??
        Be.accentColor.default,
      grayColor: a = (n == null ? void 0 : n.resolvedGrayColor) ??
        Be.grayColor.default,
      panelBackground: u = (n == null ? void 0 : n.panelBackground) ??
        Be.panelBackground.default,
      radius: d = (n == null ? void 0 : n.radius) ?? Be.radius.default,
      scaling: f = (n == null ? void 0 : n.scaling) ?? Be.scaling.default,
      onAppearanceChange: p = Wn,
      onAccentColorChange: y = Wn,
      onGrayColorChange: w = Wn,
      onPanelBackgroundChange: g = Wn,
      onRadiusChange: C = Wn,
      onScalingChange: m = Wn,
      ...h
    } = e,
    v = r ? tt : 'div',
    x = a === 'auto' ? lS(s) : a,
    E = e.appearance === 'light' || e.appearance === 'dark',
    R = i === void 0 ? o || E : i
  return c.createElement(
    Ki.Provider,
    {
      value: c.useMemo(
        () => ({
          appearance: l,
          accentColor: s,
          grayColor: a,
          resolvedGrayColor: x,
          panelBackground: u,
          radius: d,
          scaling: f,
          onAppearanceChange: p,
          onAccentColorChange: y,
          onGrayColorChange: w,
          onPanelBackgroundChange: g,
          onRadiusChange: C,
          onScalingChange: m,
        }),
        [l, s, a, x, u, d, f, p, y, w, g, C, m],
      ),
    },
    c.createElement(v, {
      'data-is-root-theme': o ? 'true' : 'false',
      'data-accent-color': s,
      'data-gray-color': x,
      'data-has-background': R ? 'true' : 'false',
      'data-panel-background': u,
      'data-radius': d,
      'data-scaling': f,
      ref: t,
      ...h,
      className: ue(
        'radix-themes',
        { light: l === 'light', dark: l === 'dark' },
        h.className,
      ),
    }),
  )
})
ju.displayName = 'ThemeImpl'
const dS = ['div', 'span'],
  fS = ['none', 'inline', 'inline-block', 'block'],
  pS = {
    as: { type: 'enum', values: dS, default: 'div' },
    ...vn,
    display: {
      type: 'enum',
      className: 'rt-r-display',
      values: fS,
      responsive: !0,
    },
  },
  Sn = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  hS = {
    p: {
      type: 'enum | string',
      className: 'rt-r-p',
      customProperties: ['--p'],
      values: Sn,
      responsive: !0,
    },
    px: {
      type: 'enum | string',
      className: 'rt-r-px',
      customProperties: ['--pl', '--pr'],
      values: Sn,
      responsive: !0,
    },
    py: {
      type: 'enum | string',
      className: 'rt-r-py',
      customProperties: ['--pt', '--pb'],
      values: Sn,
      responsive: !0,
    },
    pt: {
      type: 'enum | string',
      className: 'rt-r-pt',
      customProperties: ['--pt'],
      values: Sn,
      responsive: !0,
    },
    pr: {
      type: 'enum | string',
      className: 'rt-r-pr',
      customProperties: ['--pr'],
      values: Sn,
      responsive: !0,
    },
    pb: {
      type: 'enum | string',
      className: 'rt-r-pb',
      customProperties: ['--pb'],
      values: Sn,
      responsive: !0,
    },
    pl: {
      type: 'enum | string',
      className: 'rt-r-pl',
      customProperties: ['--pl'],
      values: Sn,
      responsive: !0,
    },
  },
  fs = ['visible', 'hidden', 'clip', 'scroll', 'auto'],
  mS = ['static', 'relative', 'absolute', 'fixed', 'sticky'],
  br = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '-1',
    '-2',
    '-3',
    '-4',
    '-5',
    '-6',
    '-7',
    '-8',
    '-9',
  ],
  vS = ['0', '1'],
  gS = ['0', '1'],
  bu = {
    ...hS,
    ...ww,
    ...Sw,
    position: {
      type: 'enum',
      className: 'rt-r-position',
      values: mS,
      responsive: !0,
    },
    inset: {
      type: 'enum | string',
      className: 'rt-r-inset',
      customProperties: ['--inset'],
      values: br,
      responsive: !0,
    },
    top: {
      type: 'enum | string',
      className: 'rt-r-top',
      customProperties: ['--top'],
      values: br,
      responsive: !0,
    },
    right: {
      type: 'enum | string',
      className: 'rt-r-right',
      customProperties: ['--right'],
      values: br,
      responsive: !0,
    },
    bottom: {
      type: 'enum | string',
      className: 'rt-r-bottom',
      customProperties: ['--bottom'],
      values: br,
      responsive: !0,
    },
    left: {
      type: 'enum | string',
      className: 'rt-r-left',
      customProperties: ['--left'],
      values: br,
      responsive: !0,
    },
    overflow: {
      type: 'enum',
      className: 'rt-r-overflow',
      values: fs,
      responsive: !0,
    },
    overflowX: {
      type: 'enum',
      className: 'rt-r-ox',
      values: fs,
      responsive: !0,
    },
    overflowY: {
      type: 'enum',
      className: 'rt-r-oy',
      values: fs,
      responsive: !0,
    },
    flexBasis: {
      type: 'string',
      className: 'rt-r-fb',
      customProperties: ['--flex-basis'],
      responsive: !0,
    },
    flexShrink: {
      type: 'enum | string',
      className: 'rt-r-fs',
      customProperties: ['--flex-shrink'],
      values: vS,
      responsive: !0,
    },
    flexGrow: {
      type: 'enum | string',
      className: 'rt-r-fg',
      customProperties: ['--flex-grow'],
      values: gS,
      responsive: !0,
    },
    gridArea: {
      type: 'string',
      className: 'rt-r-ga',
      customProperties: ['--grid-area'],
      responsive: !0,
    },
    gridColumn: {
      type: 'string',
      className: 'rt-r-gc',
      customProperties: ['--grid-column'],
      responsive: !0,
    },
    gridColumnStart: {
      type: 'string',
      className: 'rt-r-gcs',
      customProperties: ['--grid-column-start'],
      responsive: !0,
    },
    gridColumnEnd: {
      type: 'string',
      className: 'rt-r-gce',
      customProperties: ['--grid-column-end'],
      responsive: !0,
    },
    gridRow: {
      type: 'string',
      className: 'rt-r-gr',
      customProperties: ['--grid-row'],
      responsive: !0,
    },
    gridRowStart: {
      type: 'string',
      className: 'rt-r-grs',
      customProperties: ['--grid-row-start'],
      responsive: !0,
    },
    gridRowEnd: {
      type: 'string',
      className: 'rt-r-gre',
      customProperties: ['--grid-row-end'],
      responsive: !0,
    },
  },
  Fu = c.forwardRef((e, t) => {
    const { className: n, asChild: r, as: o = 'div', ...i } = ft(e, pS, bu, Pt)
    return c.createElement(r ? tt : o, {
      ...i,
      ref: t,
      className: ue('rt-Box', n),
    })
  })
Fu.displayName = 'Box'
const ps = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  qh = {
    gap: {
      type: 'enum | string',
      className: 'rt-r-gap',
      customProperties: ['--gap'],
      values: ps,
      responsive: !0,
    },
    gapX: {
      type: 'enum | string',
      className: 'rt-r-cg',
      customProperties: ['--column-gap'],
      values: ps,
      responsive: !0,
    },
    gapY: {
      type: 'enum | string',
      className: 'rt-r-rg',
      customProperties: ['--row-gap'],
      values: ps,
      responsive: !0,
    },
  },
  yS = ['div', 'span'],
  wS = ['none', 'inline-flex', 'flex'],
  SS = ['row', 'column', 'row-reverse', 'column-reverse'],
  xS = ['start', 'center', 'end', 'baseline', 'stretch'],
  CS = ['start', 'center', 'end', 'between'],
  ES = ['nowrap', 'wrap', 'wrap-reverse'],
  PS = {
    as: { type: 'enum', values: yS, default: 'div' },
    ...vn,
    display: {
      type: 'enum',
      className: 'rt-r-display',
      values: wS,
      responsive: !0,
    },
    direction: {
      type: 'enum',
      className: 'rt-r-fd',
      values: SS,
      responsive: !0,
    },
    align: { type: 'enum', className: 'rt-r-ai', values: xS, responsive: !0 },
    justify: {
      type: 'enum',
      className: 'rt-r-jc',
      values: CS,
      parseValue: RS,
      responsive: !0,
    },
    wrap: { type: 'enum', className: 'rt-r-fw', values: ES, responsive: !0 },
    ...qh,
  }
function RS(e) {
  return e === 'between' ? 'space-between' : e
}
const we = c.forwardRef((e, t) => {
  const { className: n, asChild: r, as: o = 'div', ...i } = ft(e, PS, bu, Pt)
  return c.createElement(r ? tt : o, {
    ...i,
    ref: t,
    className: ue('rt-Flex', n),
  })
})
we.displayName = 'Flex'
const kS = ['1', '2', '3'],
  NS = {
    size: {
      type: 'enum',
      className: 'rt-r-size',
      values: kS,
      default: '2',
      responsive: !0,
    },
    loading: { type: 'boolean', default: !0 },
  },
  em = c.forwardRef((e, t) => {
    const { className: n, children: r, loading: o, ...i } = ft(e, NS, Pt)
    if (!o) return r
    const l = c.createElement(
      'span',
      { ...i, ref: t, className: ue('rt-Spinner', n) },
      c.createElement('span', { className: 'rt-SpinnerLeaf' }),
      c.createElement('span', { className: 'rt-SpinnerLeaf' }),
      c.createElement('span', { className: 'rt-SpinnerLeaf' }),
      c.createElement('span', { className: 'rt-SpinnerLeaf' }),
      c.createElement('span', { className: 'rt-SpinnerLeaf' }),
      c.createElement('span', { className: 'rt-SpinnerLeaf' }),
      c.createElement('span', { className: 'rt-SpinnerLeaf' }),
      c.createElement('span', { className: 'rt-SpinnerLeaf' }),
    )
    return r === void 0
      ? l
      : c.createElement(
          we,
          {
            asChild: !0,
            position: 'relative',
            align: 'center',
            justify: 'center',
          },
          c.createElement(
            'span',
            null,
            c.createElement(
              'span',
              {
                'aria-hidden': !0,
                style: { display: 'contents', visibility: 'hidden' },
                inert: void 0,
              },
              r,
            ),
            c.createElement(
              we,
              {
                asChild: !0,
                align: 'center',
                justify: 'center',
                position: 'absolute',
                inset: '0',
              },
              c.createElement('span', null, l),
            ),
          ),
        )
  })
em.displayName = 'Spinner'
function tm(e) {
  const t = c.useRef({ value: e, previous: e })
  return c.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e],
  )
}
function nm(e) {
  const t = e + 'CollectionProvider',
    [n, r] = Bt(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    l = y => {
      const { scope: w, children: g } = y,
        C = Y.useRef(null),
        m = Y.useRef(new Map()).current
      return S.jsx(o, { scope: w, itemMap: m, collectionRef: C, children: g })
    }
  l.displayName = t
  const s = e + 'CollectionSlot',
    a = Y.forwardRef((y, w) => {
      const { scope: g, children: C } = y,
        m = i(s, g),
        h = X(w, m.collectionRef)
      return S.jsx(tt, { ref: h, children: C })
    })
  a.displayName = s
  const u = e + 'CollectionItemSlot',
    d = 'data-radix-collection-item',
    f = Y.forwardRef((y, w) => {
      const { scope: g, children: C, ...m } = y,
        h = Y.useRef(null),
        v = X(w, h),
        x = i(u, g)
      return (
        Y.useEffect(
          () => (
            x.itemMap.set(h, { ref: h, ...m }), () => void x.itemMap.delete(h)
          ),
        ),
        S.jsx(tt, { [d]: '', ref: v, children: C })
      )
    })
  f.displayName = u
  function p(y) {
    const w = i(e + 'CollectionConsumer', y)
    return Y.useCallback(() => {
      const C = w.collectionRef.current
      if (!C) return []
      const m = Array.from(C.querySelectorAll(`[${d}]`))
      return Array.from(w.itemMap.values()).sort(
        (x, E) => m.indexOf(x.ref.current) - m.indexOf(E.ref.current),
      )
    }, [w.collectionRef, w.itemMap])
  }
  return [{ Provider: l, Slot: a, ItemSlot: f }, p, r]
}
var hs = 'rovingFocusGroup.onEntryFocus',
  TS = { bubbles: !1, cancelable: !0 },
  Pl = 'RovingFocusGroup',
  [ya, rm, _S] = nm(Pl),
  [AS, Rl] = Bt(Pl, [_S]),
  [LS, OS] = AS(Pl),
  om = c.forwardRef((e, t) =>
    S.jsx(ya.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: S.jsx(ya.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: S.jsx(zS, { ...e, ref: t }),
      }),
    }),
  )
om.displayName = Pl
var zS = c.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: o = !1,
        dir: i,
        currentTabStopId: l,
        defaultCurrentTabStopId: s,
        onCurrentTabStopIdChange: a,
        onEntryFocus: u,
        preventScrollOnEntryFocus: d = !1,
        ...f
      } = e,
      p = c.useRef(null),
      y = X(t, p),
      w = To(i),
      [g = null, C] = sn({ prop: l, defaultProp: s, onChange: a }),
      [m, h] = c.useState(!1),
      v = ye(u),
      x = rm(n),
      E = c.useRef(!1),
      [R, P] = c.useState(0)
    return (
      c.useEffect(() => {
        const k = p.current
        if (k)
          return k.addEventListener(hs, v), () => k.removeEventListener(hs, v)
      }, [v]),
      S.jsx(LS, {
        scope: n,
        orientation: r,
        dir: w,
        loop: o,
        currentTabStopId: g,
        onItemFocus: c.useCallback(k => C(k), [C]),
        onItemShiftTab: c.useCallback(() => h(!0), []),
        onFocusableItemAdd: c.useCallback(() => P(k => k + 1), []),
        onFocusableItemRemove: c.useCallback(() => P(k => k - 1), []),
        children: S.jsx(V.div, {
          tabIndex: m || R === 0 ? -1 : 0,
          'data-orientation': r,
          ...f,
          ref: y,
          style: { outline: 'none', ...e.style },
          onMouseDown: j(e.onMouseDown, () => {
            E.current = !0
          }),
          onFocus: j(e.onFocus, k => {
            const A = !E.current
            if (k.target === k.currentTarget && A && !m) {
              const _ = new CustomEvent(hs, TS)
              if ((k.currentTarget.dispatchEvent(_), !_.defaultPrevented)) {
                const D = x().filter(I => I.focusable),
                  $ = D.find(I => I.active),
                  b = D.find(I => I.id === g),
                  W = [$, b, ...D].filter(Boolean).map(I => I.ref.current)
                sm(W, d)
              }
            }
            E.current = !1
          }),
          onBlur: j(e.onBlur, () => h(!1)),
        }),
      })
    )
  }),
  im = 'RovingFocusGroupItem',
  lm = c.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: o = !1,
        tabStopId: i,
        ...l
      } = e,
      s = vl(),
      a = i || s,
      u = OS(im, n),
      d = u.currentTabStopId === a,
      f = rm(n),
      { onFocusableItemAdd: p, onFocusableItemRemove: y } = u
    return (
      c.useEffect(() => {
        if (r) return p(), () => y()
      }, [r, p, y]),
      S.jsx(ya.ItemSlot, {
        scope: n,
        id: a,
        focusable: r,
        active: o,
        children: S.jsx(V.span, {
          tabIndex: d ? 0 : -1,
          'data-orientation': u.orientation,
          ...l,
          ref: t,
          onMouseDown: j(e.onMouseDown, w => {
            r ? u.onItemFocus(a) : w.preventDefault()
          }),
          onFocus: j(e.onFocus, () => u.onItemFocus(a)),
          onKeyDown: j(e.onKeyDown, w => {
            if (w.key === 'Tab' && w.shiftKey) {
              u.onItemShiftTab()
              return
            }
            if (w.target !== w.currentTarget) return
            const g = DS(w, u.orientation, u.dir)
            if (g !== void 0) {
              if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return
              w.preventDefault()
              let m = f()
                .filter(h => h.focusable)
                .map(h => h.ref.current)
              if (g === 'last') m.reverse()
              else if (g === 'prev' || g === 'next') {
                g === 'prev' && m.reverse()
                const h = m.indexOf(w.currentTarget)
                m = u.loop ? jS(m, h + 1) : m.slice(h + 1)
              }
              setTimeout(() => sm(m))
            }
          }),
        }),
      })
    )
  })
lm.displayName = im
var IS = {
  ArrowLeft: 'prev',
  ArrowUp: 'prev',
  ArrowRight: 'next',
  ArrowDown: 'next',
  PageUp: 'first',
  Home: 'first',
  PageDown: 'last',
  End: 'last',
}
function MS(e, t) {
  return t !== 'rtl'
    ? e
    : e === 'ArrowLeft'
      ? 'ArrowRight'
      : e === 'ArrowRight'
        ? 'ArrowLeft'
        : e
}
function DS(e, t, n) {
  const r = MS(e.key, n)
  if (
    !(t === 'vertical' && ['ArrowLeft', 'ArrowRight'].includes(r)) &&
    !(t === 'horizontal' && ['ArrowUp', 'ArrowDown'].includes(r))
  )
    return IS[r]
}
function sm(e, t = !1) {
  const n = document.activeElement
  for (const r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return
}
function jS(e, t) {
  return e.map((n, r) => e[(t + r) % e.length])
}
var am = om,
  um = lm
const bS = ['div', 'span'],
  FS = ['none', 'inline-grid', 'grid'],
  $S = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  BS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  WS = ['row', 'column', 'dense', 'row-dense', 'column-dense'],
  HS = ['start', 'center', 'end', 'baseline', 'stretch'],
  VS = ['start', 'center', 'end', 'between'],
  Xi = {
    as: { type: 'enum', values: bS, default: 'div' },
    ...vn,
    display: {
      type: 'enum',
      className: 'rt-r-display',
      values: FS,
      responsive: !0,
    },
    areas: {
      type: 'string',
      className: 'rt-r-gta',
      customProperties: ['--grid-template-areas'],
      responsive: !0,
    },
    columns: {
      type: 'enum | string',
      className: 'rt-r-gtc',
      customProperties: ['--grid-template-columns'],
      values: $S,
      parseValue: kd,
      responsive: !0,
    },
    rows: {
      type: 'enum | string',
      className: 'rt-r-gtr',
      customProperties: ['--grid-template-rows'],
      values: BS,
      parseValue: kd,
      responsive: !0,
    },
    flow: { type: 'enum', className: 'rt-r-gaf', values: WS, responsive: !0 },
    align: { type: 'enum', className: 'rt-r-ai', values: HS, responsive: !0 },
    justify: {
      type: 'enum',
      className: 'rt-r-jc',
      values: VS,
      parseValue: US,
      responsive: !0,
    },
    ...qh,
  }
function kd(e) {
  return Xi.columns.values.includes(e)
    ? e
    : e != null && e.match(/^\d+$/)
      ? `repeat(${e}, minmax(0, 1fr))`
      : e
}
function US(e) {
  return e === 'between' ? 'space-between' : e
}
const cm = c.forwardRef((e, t) => {
  const { className: n, asChild: r, as: o = 'div', ...i } = ft(e, Xi, bu, Pt)
  return c.createElement(r ? tt : o, {
    ...i,
    ref: t,
    className: ue('rt-Grid', n),
  })
})
cm.displayName = 'Grid'
const GS = Y.forwardRef((e, t) =>
  Y.createElement(
    'svg',
    {
      width: '9',
      height: '9',
      viewBox: '0 0 9 9',
      fill: 'currentcolor',
      xmlns: 'http://www.w3.org/2000/svg',
      ...e,
      ref: t,
    },
    Y.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M0.75 4.5C0.75 4.08579 1.08579 3.75 1.5 3.75H7.5C7.91421 3.75 8.25 4.08579 8.25 4.5C8.25 4.91421 7.91421 5.25 7.5 5.25H1.5C1.08579 5.25 0.75 4.91421 0.75 4.5Z',
    }),
  ),
)
GS.displayName = 'ThickDividerHorizontalIcon'
const dm = Y.forwardRef((e, t) =>
  Y.createElement(
    'svg',
    {
      width: '9',
      height: '9',
      viewBox: '0 0 9 9',
      fill: 'currentcolor',
      xmlns: 'http://www.w3.org/2000/svg',
      ...e,
      ref: t,
    },
    Y.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z',
    }),
  ),
)
dm.displayName = 'ThickCheckIcon'
const fm = Y.forwardRef((e, t) =>
  Y.createElement(
    'svg',
    {
      width: '9',
      height: '9',
      viewBox: '0 0 9 9',
      fill: 'currentcolor',
      xmlns: 'http://www.w3.org/2000/svg',
      ...e,
      ref: t,
    },
    Y.createElement('path', {
      d: 'M0.135232 3.15803C0.324102 2.95657 0.640521 2.94637 0.841971 3.13523L4.5 6.56464L8.158 3.13523C8.3595 2.94637 8.6759 2.95657 8.8648 3.15803C9.0536 3.35949 9.0434 3.67591 8.842 3.86477L4.84197 7.6148C4.64964 7.7951 4.35036 7.7951 4.15803 7.6148L0.158031 3.86477C-0.0434285 3.67591 -0.0536285 3.35949 0.135232 3.15803Z',
    }),
  ),
)
fm.displayName = 'ChevronDownIcon'
const YS = Y.forwardRef((e, t) =>
  Y.createElement(
    'svg',
    {
      width: '9',
      height: '9',
      viewBox: '0 0 9 9',
      fill: 'currentcolor',
      xmlns: 'http://www.w3.org/2000/svg',
      ...e,
      ref: t,
    },
    Y.createElement('path', {
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      d: 'M3.23826 0.201711C3.54108 -0.0809141 4.01567 -0.0645489 4.29829 0.238264L7.79829 3.98826C8.06724 4.27642 8.06724 4.72359 7.79829 5.01174L4.29829 8.76174C4.01567 9.06455 3.54108 9.08092 3.23826 8.79829C2.93545 8.51567 2.91909 8.04108 3.20171 7.73826L6.22409 4.5L3.20171 1.26174C2.91909 0.958928 2.93545 0.484337 3.23826 0.201711Z',
    }),
  ),
)
YS.displayName = 'ThickChevronRightIcon'
const KS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  XS = ['solid', 'soft', 'outline', 'ghost'],
  QS = {
    ...vn,
    size: { type: 'enum', className: 'rt-r-size', values: KS, responsive: !0 },
    variant: {
      type: 'enum',
      className: 'rt-variant',
      values: XS,
      default: 'soft',
    },
    ...Ru,
    ...Cw,
    ...ko,
    ...Pu,
    ...Eu,
  },
  pm = c.forwardRef((e, t) => {
    const { asChild: n, className: r, color: o, ...i } = ft(e, QS, Pt),
      l = e.variant === 'ghost' ? o || void 0 : o
    return c.createElement(n ? tt : 'code', {
      'data-accent-color': l,
      ...i,
      ref: t,
      className: ue('rt-reset', 'rt-Code', r),
    })
  })
pm.displayName = 'Code'
function wa(e, [t, n]) {
  return Math.min(n, Math.max(t, e))
}
function ZS(e, t) {
  return c.useReducer((n, r) => t[n][r] ?? n, e)
}
var $u = 'ScrollArea',
  [hm, YC] = Bt($u),
  [JS, nt] = hm($u),
  mm = c.forwardRef((e, t) => {
    const {
        __scopeScrollArea: n,
        type: r = 'hover',
        dir: o,
        scrollHideDelay: i = 600,
        ...l
      } = e,
      [s, a] = c.useState(null),
      [u, d] = c.useState(null),
      [f, p] = c.useState(null),
      [y, w] = c.useState(null),
      [g, C] = c.useState(null),
      [m, h] = c.useState(0),
      [v, x] = c.useState(0),
      [E, R] = c.useState(!1),
      [P, k] = c.useState(!1),
      A = X(t, D => a(D)),
      _ = To(o)
    return S.jsx(JS, {
      scope: n,
      type: r,
      dir: _,
      scrollHideDelay: i,
      scrollArea: s,
      viewport: u,
      onViewportChange: d,
      content: f,
      onContentChange: p,
      scrollbarX: y,
      onScrollbarXChange: w,
      scrollbarXEnabled: E,
      onScrollbarXEnabledChange: R,
      scrollbarY: g,
      onScrollbarYChange: C,
      scrollbarYEnabled: P,
      onScrollbarYEnabledChange: k,
      onCornerWidthChange: h,
      onCornerHeightChange: x,
      children: S.jsx(V.div, {
        dir: _,
        ...l,
        ref: A,
        style: {
          position: 'relative',
          '--radix-scroll-area-corner-width': m + 'px',
          '--radix-scroll-area-corner-height': v + 'px',
          ...e.style,
        },
      }),
    })
  })
mm.displayName = $u
var vm = 'ScrollAreaViewport',
  gm = c.forwardRef((e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...i } = e,
      l = nt(vm, n),
      s = c.useRef(null),
      a = X(t, s, l.onViewportChange)
    return S.jsxs(S.Fragment, {
      children: [
        S.jsx('style', {
          dangerouslySetInnerHTML: {
            __html:
              '[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}',
          },
          nonce: o,
        }),
        S.jsx(V.div, {
          'data-radix-scroll-area-viewport': '',
          ...i,
          ref: a,
          style: {
            overflowX: l.scrollbarXEnabled ? 'scroll' : 'hidden',
            overflowY: l.scrollbarYEnabled ? 'scroll' : 'hidden',
            ...e.style,
          },
          children: S.jsx('div', {
            ref: l.onContentChange,
            style: { minWidth: '100%', display: 'table' },
            children: r,
          }),
        }),
      ],
    })
  })
gm.displayName = vm
var kt = 'ScrollAreaScrollbar',
  ym = c.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = nt(kt, e.__scopeScrollArea),
      { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: l } = o,
      s = e.orientation === 'horizontal'
    return (
      c.useEffect(
        () => (
          s ? i(!0) : l(!0),
          () => {
            s ? i(!1) : l(!1)
          }
        ),
        [s, i, l],
      ),
      o.type === 'hover'
        ? S.jsx(qS, { ...r, ref: t, forceMount: n })
        : o.type === 'scroll'
          ? S.jsx(ex, { ...r, ref: t, forceMount: n })
          : o.type === 'auto'
            ? S.jsx(wm, { ...r, ref: t, forceMount: n })
            : o.type === 'always'
              ? S.jsx(Bu, { ...r, ref: t })
              : null
    )
  })
ym.displayName = kt
var qS = c.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = nt(kt, e.__scopeScrollArea),
      [i, l] = c.useState(!1)
    return (
      c.useEffect(() => {
        const s = o.scrollArea
        let a = 0
        if (s) {
          const u = () => {
              window.clearTimeout(a), l(!0)
            },
            d = () => {
              a = window.setTimeout(() => l(!1), o.scrollHideDelay)
            }
          return (
            s.addEventListener('pointerenter', u),
            s.addEventListener('pointerleave', d),
            () => {
              window.clearTimeout(a),
                s.removeEventListener('pointerenter', u),
                s.removeEventListener('pointerleave', d)
            }
          )
        }
      }, [o.scrollArea, o.scrollHideDelay]),
      S.jsx(jn, {
        present: n || i,
        children: S.jsx(wm, {
          'data-state': i ? 'visible' : 'hidden',
          ...r,
          ref: t,
        }),
      })
    )
  }),
  ex = c.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = nt(kt, e.__scopeScrollArea),
      i = e.orientation === 'horizontal',
      l = Nl(() => a('SCROLL_END'), 100),
      [s, a] = ZS('hidden', {
        hidden: { SCROLL: 'scrolling' },
        scrolling: { SCROLL_END: 'idle', POINTER_ENTER: 'interacting' },
        interacting: { SCROLL: 'interacting', POINTER_LEAVE: 'idle' },
        idle: {
          HIDE: 'hidden',
          SCROLL: 'scrolling',
          POINTER_ENTER: 'interacting',
        },
      })
    return (
      c.useEffect(() => {
        if (s === 'idle') {
          const u = window.setTimeout(() => a('HIDE'), o.scrollHideDelay)
          return () => window.clearTimeout(u)
        }
      }, [s, o.scrollHideDelay, a]),
      c.useEffect(() => {
        const u = o.viewport,
          d = i ? 'scrollLeft' : 'scrollTop'
        if (u) {
          let f = u[d]
          const p = () => {
            const y = u[d]
            f !== y && (a('SCROLL'), l()), (f = y)
          }
          return (
            u.addEventListener('scroll', p),
            () => u.removeEventListener('scroll', p)
          )
        }
      }, [o.viewport, i, a, l]),
      S.jsx(jn, {
        present: n || s !== 'hidden',
        children: S.jsx(Bu, {
          'data-state': s === 'hidden' ? 'hidden' : 'visible',
          ...r,
          ref: t,
          onPointerEnter: j(e.onPointerEnter, () => a('POINTER_ENTER')),
          onPointerLeave: j(e.onPointerLeave, () => a('POINTER_LEAVE')),
        }),
      })
    )
  }),
  wm = c.forwardRef((e, t) => {
    const n = nt(kt, e.__scopeScrollArea),
      { forceMount: r, ...o } = e,
      [i, l] = c.useState(!1),
      s = e.orientation === 'horizontal',
      a = Nl(() => {
        if (n.viewport) {
          const u = n.viewport.offsetWidth < n.viewport.scrollWidth,
            d = n.viewport.offsetHeight < n.viewport.scrollHeight
          l(s ? u : d)
        }
      }, 10)
    return (
      wr(n.viewport, a),
      wr(n.content, a),
      S.jsx(jn, {
        present: r || i,
        children: S.jsx(Bu, {
          'data-state': i ? 'visible' : 'hidden',
          ...o,
          ref: t,
        }),
      })
    )
  }),
  Bu = c.forwardRef((e, t) => {
    const { orientation: n = 'vertical', ...r } = e,
      o = nt(kt, e.__scopeScrollArea),
      i = c.useRef(null),
      l = c.useRef(0),
      [s, a] = c.useState({
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
      }),
      u = Em(s.viewport, s.content),
      d = {
        ...r,
        sizes: s,
        onSizesChange: a,
        hasThumb: u > 0 && u < 1,
        onThumbChange: p => (i.current = p),
        onThumbPointerUp: () => (l.current = 0),
        onThumbPointerDown: p => (l.current = p),
      }
    function f(p, y) {
      return sx(p, l.current, s, y)
    }
    return n === 'horizontal'
      ? S.jsx(tx, {
          ...d,
          ref: t,
          onThumbPositionChange: () => {
            if (o.viewport && i.current) {
              const p = o.viewport.scrollLeft,
                y = Nd(p, s, o.dir)
              i.current.style.transform = `translate3d(${y}px, 0, 0)`
            }
          },
          onWheelScroll: p => {
            o.viewport && (o.viewport.scrollLeft = p)
          },
          onDragScroll: p => {
            o.viewport && (o.viewport.scrollLeft = f(p, o.dir))
          },
        })
      : n === 'vertical'
        ? S.jsx(nx, {
            ...d,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && i.current) {
                const p = o.viewport.scrollTop,
                  y = Nd(p, s)
                i.current.style.transform = `translate3d(0, ${y}px, 0)`
              }
            },
            onWheelScroll: p => {
              o.viewport && (o.viewport.scrollTop = p)
            },
            onDragScroll: p => {
              o.viewport && (o.viewport.scrollTop = f(p))
            },
          })
        : null
  }),
  tx = c.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, ...o } = e,
      i = nt(kt, e.__scopeScrollArea),
      [l, s] = c.useState(),
      a = c.useRef(null),
      u = X(t, a, i.onScrollbarXChange)
    return (
      c.useEffect(() => {
        a.current && s(getComputedStyle(a.current))
      }, [a]),
      S.jsx(xm, {
        'data-orientation': 'horizontal',
        ...o,
        ref: u,
        sizes: n,
        style: {
          bottom: 0,
          left: i.dir === 'rtl' ? 'var(--radix-scroll-area-corner-width)' : 0,
          right: i.dir === 'ltr' ? 'var(--radix-scroll-area-corner-width)' : 0,
          '--radix-scroll-area-thumb-width': kl(n) + 'px',
          ...e.style,
        },
        onThumbPointerDown: d => e.onThumbPointerDown(d.x),
        onDragScroll: d => e.onDragScroll(d.x),
        onWheelScroll: (d, f) => {
          if (i.viewport) {
            const p = i.viewport.scrollLeft + d.deltaX
            e.onWheelScroll(p), Rm(p, f) && d.preventDefault()
          }
        },
        onResize: () => {
          a.current &&
            i.viewport &&
            l &&
            r({
              content: i.viewport.scrollWidth,
              viewport: i.viewport.offsetWidth,
              scrollbar: {
                size: a.current.clientWidth,
                paddingStart: Zi(l.paddingLeft),
                paddingEnd: Zi(l.paddingRight),
              },
            })
        },
      })
    )
  }),
  nx = c.forwardRef((e, t) => {
    const { sizes: n, onSizesChange: r, ...o } = e,
      i = nt(kt, e.__scopeScrollArea),
      [l, s] = c.useState(),
      a = c.useRef(null),
      u = X(t, a, i.onScrollbarYChange)
    return (
      c.useEffect(() => {
        a.current && s(getComputedStyle(a.current))
      }, [a]),
      S.jsx(xm, {
        'data-orientation': 'vertical',
        ...o,
        ref: u,
        sizes: n,
        style: {
          top: 0,
          right: i.dir === 'ltr' ? 0 : void 0,
          left: i.dir === 'rtl' ? 0 : void 0,
          bottom: 'var(--radix-scroll-area-corner-height)',
          '--radix-scroll-area-thumb-height': kl(n) + 'px',
          ...e.style,
        },
        onThumbPointerDown: d => e.onThumbPointerDown(d.y),
        onDragScroll: d => e.onDragScroll(d.y),
        onWheelScroll: (d, f) => {
          if (i.viewport) {
            const p = i.viewport.scrollTop + d.deltaY
            e.onWheelScroll(p), Rm(p, f) && d.preventDefault()
          }
        },
        onResize: () => {
          a.current &&
            i.viewport &&
            l &&
            r({
              content: i.viewport.scrollHeight,
              viewport: i.viewport.offsetHeight,
              scrollbar: {
                size: a.current.clientHeight,
                paddingStart: Zi(l.paddingTop),
                paddingEnd: Zi(l.paddingBottom),
              },
            })
        },
      })
    )
  }),
  [rx, Sm] = hm(kt),
  xm = c.forwardRef((e, t) => {
    const {
        __scopeScrollArea: n,
        sizes: r,
        hasThumb: o,
        onThumbChange: i,
        onThumbPointerUp: l,
        onThumbPointerDown: s,
        onThumbPositionChange: a,
        onDragScroll: u,
        onWheelScroll: d,
        onResize: f,
        ...p
      } = e,
      y = nt(kt, n),
      [w, g] = c.useState(null),
      C = X(t, A => g(A)),
      m = c.useRef(null),
      h = c.useRef(''),
      v = y.viewport,
      x = r.content - r.viewport,
      E = ye(d),
      R = ye(a),
      P = Nl(f, 10)
    function k(A) {
      if (m.current) {
        const _ = A.clientX - m.current.left,
          D = A.clientY - m.current.top
        u({ x: _, y: D })
      }
    }
    return (
      c.useEffect(() => {
        const A = _ => {
          const D = _.target
          ;(w == null ? void 0 : w.contains(D)) && E(_, x)
        }
        return (
          document.addEventListener('wheel', A, { passive: !1 }),
          () => document.removeEventListener('wheel', A, { passive: !1 })
        )
      }, [v, w, x, E]),
      c.useEffect(R, [r, R]),
      wr(w, P),
      wr(y.content, P),
      S.jsx(rx, {
        scope: n,
        scrollbar: w,
        hasThumb: o,
        onThumbChange: ye(i),
        onThumbPointerUp: ye(l),
        onThumbPositionChange: R,
        onThumbPointerDown: ye(s),
        children: S.jsx(V.div, {
          ...p,
          ref: C,
          style: { position: 'absolute', ...p.style },
          onPointerDown: j(e.onPointerDown, A => {
            A.button === 0 &&
              (A.target.setPointerCapture(A.pointerId),
              (m.current = w.getBoundingClientRect()),
              (h.current = document.body.style.webkitUserSelect),
              (document.body.style.webkitUserSelect = 'none'),
              y.viewport && (y.viewport.style.scrollBehavior = 'auto'),
              k(A))
          }),
          onPointerMove: j(e.onPointerMove, k),
          onPointerUp: j(e.onPointerUp, A => {
            const _ = A.target
            _.hasPointerCapture(A.pointerId) &&
              _.releasePointerCapture(A.pointerId),
              (document.body.style.webkitUserSelect = h.current),
              y.viewport && (y.viewport.style.scrollBehavior = ''),
              (m.current = null)
          }),
        }),
      })
    )
  }),
  Qi = 'ScrollAreaThumb',
  Cm = c.forwardRef((e, t) => {
    const { forceMount: n, ...r } = e,
      o = Sm(Qi, e.__scopeScrollArea)
    return S.jsx(jn, {
      present: n || o.hasThumb,
      children: S.jsx(ox, { ref: t, ...r }),
    })
  }),
  ox = c.forwardRef((e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e,
      i = nt(Qi, n),
      l = Sm(Qi, n),
      { onThumbPositionChange: s } = l,
      a = X(t, f => l.onThumbChange(f)),
      u = c.useRef(),
      d = Nl(() => {
        u.current && (u.current(), (u.current = void 0))
      }, 100)
    return (
      c.useEffect(() => {
        const f = i.viewport
        if (f) {
          const p = () => {
            if ((d(), !u.current)) {
              const y = ax(f, s)
              ;(u.current = y), s()
            }
          }
          return (
            s(),
            f.addEventListener('scroll', p),
            () => f.removeEventListener('scroll', p)
          )
        }
      }, [i.viewport, d, s]),
      S.jsx(V.div, {
        'data-state': l.hasThumb ? 'visible' : 'hidden',
        ...o,
        ref: a,
        style: {
          width: 'var(--radix-scroll-area-thumb-width)',
          height: 'var(--radix-scroll-area-thumb-height)',
          ...r,
        },
        onPointerDownCapture: j(e.onPointerDownCapture, f => {
          const y = f.target.getBoundingClientRect(),
            w = f.clientX - y.left,
            g = f.clientY - y.top
          l.onThumbPointerDown({ x: w, y: g })
        }),
        onPointerUp: j(e.onPointerUp, l.onThumbPointerUp),
      })
    )
  })
Cm.displayName = Qi
var Wu = 'ScrollAreaCorner',
  ix = c.forwardRef((e, t) => {
    const n = nt(Wu, e.__scopeScrollArea),
      r = !!(n.scrollbarX && n.scrollbarY)
    return n.type !== 'scroll' && r ? S.jsx(lx, { ...e, ref: t }) : null
  })
ix.displayName = Wu
var lx = c.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e,
    o = nt(Wu, n),
    [i, l] = c.useState(0),
    [s, a] = c.useState(0),
    u = !!(i && s)
  return (
    wr(o.scrollbarX, () => {
      var f
      const d = ((f = o.scrollbarX) == null ? void 0 : f.offsetHeight) || 0
      o.onCornerHeightChange(d), a(d)
    }),
    wr(o.scrollbarY, () => {
      var f
      const d = ((f = o.scrollbarY) == null ? void 0 : f.offsetWidth) || 0
      o.onCornerWidthChange(d), l(d)
    }),
    u
      ? S.jsx(V.div, {
          ...r,
          ref: t,
          style: {
            width: i,
            height: s,
            position: 'absolute',
            right: o.dir === 'ltr' ? 0 : void 0,
            left: o.dir === 'rtl' ? 0 : void 0,
            bottom: 0,
            ...e.style,
          },
        })
      : null
  )
})
function Zi(e) {
  return e ? parseInt(e, 10) : 0
}
function Em(e, t) {
  const n = e / t
  return isNaN(n) ? 0 : n
}
function kl(e) {
  const t = Em(e.viewport, e.content),
    n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
    r = (e.scrollbar.size - n) * t
  return Math.max(r, 18)
}
function sx(e, t, n, r = 'ltr') {
  const o = kl(n),
    i = o / 2,
    l = t || i,
    s = o - l,
    a = n.scrollbar.paddingStart + l,
    u = n.scrollbar.size - n.scrollbar.paddingEnd - s,
    d = n.content - n.viewport,
    f = r === 'ltr' ? [0, d] : [d * -1, 0]
  return Pm([a, u], f)(e)
}
function Nd(e, t, n = 'ltr') {
  const r = kl(t),
    o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
    i = t.scrollbar.size - o,
    l = t.content - t.viewport,
    s = i - r,
    a = n === 'ltr' ? [0, l] : [l * -1, 0],
    u = wa(e, a)
  return Pm([0, l], [0, s])(u)
}
function Pm(e, t) {
  return n => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0]
    const r = (t[1] - t[0]) / (e[1] - e[0])
    return t[0] + r * (n - e[0])
  }
}
function Rm(e, t) {
  return e > 0 && e < t
}
var ax = (e, t = () => {}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop },
    r = 0
  return (
    (function o() {
      const i = { left: e.scrollLeft, top: e.scrollTop },
        l = n.left !== i.left,
        s = n.top !== i.top
      ;(l || s) && t(), (n = i), (r = window.requestAnimationFrame(o))
    })(),
    () => window.cancelAnimationFrame(r)
  )
}
function Nl(e, t) {
  const n = ye(e),
    r = c.useRef(0)
  return (
    c.useEffect(() => () => window.clearTimeout(r.current), []),
    c.useCallback(() => {
      window.clearTimeout(r.current), (r.current = window.setTimeout(n, t))
    }, [n, t])
  )
}
function wr(e, t) {
  const n = ye(t)
  Te(() => {
    let r = 0
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), (r = window.requestAnimationFrame(n))
      })
      return (
        o.observe(e),
        () => {
          window.cancelAnimationFrame(r), o.unobserve(e)
        }
      )
    }
  }, [e, n])
}
var ux = mm,
  cx = gm,
  dx = ym,
  fx = Cm,
  Hu = 'Radio',
  [px, km] = Bt(Hu),
  [hx, mx] = px(Hu),
  Nm = c.forwardRef((e, t) => {
    const {
        __scopeRadio: n,
        name: r,
        checked: o = !1,
        required: i,
        disabled: l,
        value: s = 'on',
        onCheck: a,
        ...u
      } = e,
      [d, f] = c.useState(null),
      p = X(t, g => f(g)),
      y = c.useRef(!1),
      w = d ? !!d.closest('form') : !0
    return S.jsxs(hx, {
      scope: n,
      checked: o,
      disabled: l,
      children: [
        S.jsx(V.button, {
          type: 'button',
          role: 'radio',
          'aria-checked': o,
          'data-state': Am(o),
          'data-disabled': l ? '' : void 0,
          disabled: l,
          value: s,
          ...u,
          ref: p,
          onClick: j(e.onClick, g => {
            o || a == null || a(),
              w &&
                ((y.current = g.isPropagationStopped()),
                y.current || g.stopPropagation())
          }),
        }),
        w &&
          S.jsx(vx, {
            control: d,
            bubbles: !y.current,
            name: r,
            value: s,
            checked: o,
            required: i,
            disabled: l,
            style: { transform: 'translateX(-100%)' },
          }),
      ],
    })
  })
Nm.displayName = Hu
var Tm = 'RadioIndicator',
  _m = c.forwardRef((e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e,
      i = mx(Tm, n)
    return S.jsx(jn, {
      present: r || i.checked,
      children: S.jsx(V.span, {
        'data-state': Am(i.checked),
        'data-disabled': i.disabled ? '' : void 0,
        ...o,
        ref: t,
      }),
    })
  })
_m.displayName = Tm
var vx = e => {
  const { control: t, checked: n, bubbles: r = !0, ...o } = e,
    i = c.useRef(null),
    l = tm(n),
    s = Ah(t)
  return (
    c.useEffect(() => {
      const a = i.current,
        u = window.HTMLInputElement.prototype,
        f = Object.getOwnPropertyDescriptor(u, 'checked').set
      if (l !== n && f) {
        const p = new Event('click', { bubbles: r })
        f.call(a, n), a.dispatchEvent(p)
      }
    }, [l, n, r]),
    S.jsx('input', {
      type: 'radio',
      'aria-hidden': !0,
      defaultChecked: n,
      ...o,
      tabIndex: -1,
      ref: i,
      style: {
        ...e.style,
        ...s,
        position: 'absolute',
        pointerEvents: 'none',
        opacity: 0,
        margin: 0,
      },
    })
  )
}
function Am(e) {
  return e ? 'checked' : 'unchecked'
}
var gx = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'],
  Vu = 'RadioGroup',
  [yx, KC] = Bt(Vu, [Rl, km]),
  Lm = Rl(),
  Om = km(),
  [wx, Sx] = yx(Vu),
  zm = c.forwardRef((e, t) => {
    const {
        __scopeRadioGroup: n,
        name: r,
        defaultValue: o,
        value: i,
        required: l = !1,
        disabled: s = !1,
        orientation: a,
        dir: u,
        loop: d = !0,
        onValueChange: f,
        ...p
      } = e,
      y = Lm(n),
      w = To(u),
      [g, C] = sn({ prop: i, defaultProp: o, onChange: f })
    return S.jsx(wx, {
      scope: n,
      name: r,
      required: l,
      disabled: s,
      value: g,
      onValueChange: C,
      children: S.jsx(am, {
        asChild: !0,
        ...y,
        orientation: a,
        dir: w,
        loop: d,
        children: S.jsx(V.div, {
          role: 'radiogroup',
          'aria-required': l,
          'aria-orientation': a,
          'data-disabled': s ? '' : void 0,
          dir: w,
          ...p,
          ref: t,
        }),
      }),
    })
  })
zm.displayName = Vu
var Im = 'RadioGroupItem',
  Mm = c.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e,
      i = Sx(Im, n),
      l = i.disabled || r,
      s = Lm(n),
      a = Om(n),
      u = c.useRef(null),
      d = X(t, u),
      f = i.value === o.value,
      p = c.useRef(!1)
    return (
      c.useEffect(() => {
        const y = g => {
            gx.includes(g.key) && (p.current = !0)
          },
          w = () => (p.current = !1)
        return (
          document.addEventListener('keydown', y),
          document.addEventListener('keyup', w),
          () => {
            document.removeEventListener('keydown', y),
              document.removeEventListener('keyup', w)
          }
        )
      }, []),
      S.jsx(um, {
        asChild: !0,
        ...s,
        focusable: !l,
        active: f,
        children: S.jsx(Nm, {
          disabled: l,
          required: i.required,
          checked: f,
          ...a,
          ...o,
          name: i.name,
          ref: d,
          onCheck: () => i.onValueChange(o.value),
          onKeyDown: j(y => {
            y.key === 'Enter' && y.preventDefault()
          }),
          onFocus: j(o.onFocus, () => {
            var y
            p.current && ((y = u.current) == null || y.click())
          }),
        }),
      })
    )
  })
Mm.displayName = Im
var xx = 'RadioGroupIndicator',
  Cx = c.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, ...r } = e,
      o = Om(n)
    return S.jsx(_m, { ...o, ...r, ref: t })
  })
Cx.displayName = xx
var Ex = zm,
  Px = Mm
const Rx = ['1', '2', '3'],
  kx = ['surface', 'classic'],
  Nx = {
    ...vn,
    size: {
      type: 'enum',
      className: 'rt-r-size',
      values: Rx,
      default: '2',
      responsive: !0,
    },
    variant: {
      type: 'enum',
      className: 'rt-variant',
      values: kx,
      default: 'surface',
    },
    ...Ro,
    ...ko,
    columns: { ...Xi.columns, default: 'repeat(auto-fit, minmax(160px, 1fr))' },
    gap: { ...Xi.gap, default: '4' },
  },
  Dm = c.forwardRef((e, t) => {
    const { className: n, color: r, ...o } = ft(e, Nx, Pt)
    return c.createElement(
      cm,
      { asChild: !0 },
      c.createElement(Ex, {
        'data-accent-color': r,
        ...o,
        ref: t,
        className: ue('rt-RadioCardsRoot', n),
      }),
    )
  })
Dm.displayName = 'RadioCards.Root'
const jm = c.forwardRef(({ className: e, ...t }, n) =>
  c.createElement(Px, {
    ...t,
    asChild: !1,
    ref: n,
    className: ue('rt-reset', 'rt-BaseCard', 'rt-RadioCardsItem', e),
  }),
)
jm.displayName = 'RadioCards.Item'
var Tx = 'Toggle',
  bm = c.forwardRef((e, t) => {
    const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...i } = e,
      [l = !1, s] = sn({ prop: n, onChange: o, defaultProp: r })
    return S.jsx(V.button, {
      type: 'button',
      'aria-pressed': l,
      'data-state': l ? 'on' : 'off',
      'data-disabled': e.disabled ? '' : void 0,
      ...i,
      ref: t,
      onClick: j(e.onClick, () => {
        e.disabled || s(!l)
      }),
    })
  })
bm.displayName = Tx
var Rr = 'ToggleGroup',
  [Fm, XC] = Bt(Rr, [Rl]),
  $m = Rl(),
  Uu = Y.forwardRef((e, t) => {
    const { type: n, ...r } = e
    if (n === 'single') {
      const o = r
      return S.jsx(_x, { ...o, ref: t })
    }
    if (n === 'multiple') {
      const o = r
      return S.jsx(Ax, { ...o, ref: t })
    }
    throw new Error(`Missing prop \`type\` expected on \`${Rr}\``)
  })
Uu.displayName = Rr
var [Bm, Wm] = Fm(Rr),
  _x = Y.forwardRef((e, t) => {
    const { value: n, defaultValue: r, onValueChange: o = () => {}, ...i } = e,
      [l, s] = sn({ prop: n, defaultProp: r, onChange: o })
    return S.jsx(Bm, {
      scope: e.__scopeToggleGroup,
      type: 'single',
      value: l ? [l] : [],
      onItemActivate: s,
      onItemDeactivate: Y.useCallback(() => s(''), [s]),
      children: S.jsx(Hm, { ...i, ref: t }),
    })
  }),
  Ax = Y.forwardRef((e, t) => {
    const { value: n, defaultValue: r, onValueChange: o = () => {}, ...i } = e,
      [l = [], s] = sn({ prop: n, defaultProp: r, onChange: o }),
      a = Y.useCallback(d => s((f = []) => [...f, d]), [s]),
      u = Y.useCallback(d => s((f = []) => f.filter(p => p !== d)), [s])
    return S.jsx(Bm, {
      scope: e.__scopeToggleGroup,
      type: 'multiple',
      value: l,
      onItemActivate: a,
      onItemDeactivate: u,
      children: S.jsx(Hm, { ...i, ref: t }),
    })
  })
Uu.displayName = Rr
var [Lx, Ox] = Fm(Rr),
  Hm = Y.forwardRef((e, t) => {
    const {
        __scopeToggleGroup: n,
        disabled: r = !1,
        rovingFocus: o = !0,
        orientation: i,
        dir: l,
        loop: s = !0,
        ...a
      } = e,
      u = $m(n),
      d = To(l),
      f = { role: 'group', dir: d, ...a }
    return S.jsx(Lx, {
      scope: n,
      rovingFocus: o,
      disabled: r,
      children: o
        ? S.jsx(am, {
            asChild: !0,
            ...u,
            orientation: i,
            dir: d,
            loop: s,
            children: S.jsx(V.div, { ...f, ref: t }),
          })
        : S.jsx(V.div, { ...f, ref: t }),
    })
  }),
  Ji = 'ToggleGroupItem',
  Vm = Y.forwardRef((e, t) => {
    const n = Wm(Ji, e.__scopeToggleGroup),
      r = Ox(Ji, e.__scopeToggleGroup),
      o = $m(e.__scopeToggleGroup),
      i = n.value.includes(e.value),
      l = r.disabled || e.disabled,
      s = { ...e, pressed: i, disabled: l },
      a = Y.useRef(null)
    return r.rovingFocus
      ? S.jsx(um, {
          asChild: !0,
          ...o,
          focusable: !l,
          active: i,
          ref: a,
          children: S.jsx(Td, { ...s, ref: t }),
        })
      : S.jsx(Td, { ...s, ref: t })
  })
Vm.displayName = Ji
var Td = Y.forwardRef((e, t) => {
    const { __scopeToggleGroup: n, value: r, ...o } = e,
      i = Wm(Ji, n),
      l = { role: 'radio', 'aria-checked': e.pressed, 'aria-pressed': void 0 },
      s = i.type === 'single' ? l : void 0
    return S.jsx(bm, {
      ...s,
      ...o,
      ref: t,
      onPressedChange: a => {
        a ? i.onItemActivate(r) : i.onItemDeactivate(r)
      },
    })
  }),
  zx = Uu,
  Ix = Vm
const Mx = ['1', '2', '3'],
  Dx = ['surface', 'classic'],
  jx = {
    size: {
      type: 'enum',
      className: 'rt-r-size',
      values: Mx,
      default: '2',
      responsive: !0,
    },
    variant: {
      type: 'enum',
      className: 'rt-variant',
      values: Dx,
      default: 'surface',
    },
    ...Zh,
  },
  Um = c.forwardRef((e, t) => {
    const {
        className: n,
        children: r,
        radius: o,
        value: i,
        defaultValue: l,
        onValueChange: s,
        ...a
      } = ft(e, jx, Pt),
      [u, d] = sn({ prop: i, onChange: s, defaultProp: l })
    return c.createElement(
      zx,
      {
        'data-radius': o,
        ref: t,
        className: ue('rt-SegmentedControlRoot', n),
        onValueChange: f => {
          f && d(f)
        },
        ...a,
        type: 'single',
        value: u,
        asChild: !1,
        disabled: !1,
      },
      r,
      c.createElement('div', { className: 'rt-SegmentedControlIndicator' }),
    )
  })
Um.displayName = 'SegmentedControl.Root'
const wi = c.forwardRef(({ children: e, className: t, ...n }, r) =>
  c.createElement(
    Ix,
    {
      ref: r,
      className: ue('rt-reset', 'rt-SegmentedControlItem', t),
      ...n,
      disabled: !1,
      asChild: !1,
    },
    c.createElement('span', { className: 'rt-SegmentedControlItemSeparator' }),
    c.createElement(
      'span',
      { className: 'rt-SegmentedControlItemLabel' },
      c.createElement(
        'span',
        { className: 'rt-SegmentedControlItemLabelActive' },
        e,
      ),
      c.createElement(
        'span',
        { className: 'rt-SegmentedControlItemLabelInactive' },
        e,
      ),
    ),
  ),
)
wi.displayName = 'SegmentedControl.Item'
var bx = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
  Fx = [' ', 'Enter'],
  _o = 'Select',
  [Tl, _l, $x] = nm(_o),
  [kr, QC] = Bt(_o, [$x, xl]),
  Al = xl(),
  [Bx, gn] = kr(_o),
  [Wx, Hx] = kr(_o),
  Gm = e => {
    const {
        __scopeSelect: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        value: l,
        defaultValue: s,
        onValueChange: a,
        dir: u,
        name: d,
        autoComplete: f,
        disabled: p,
        required: y,
      } = e,
      w = Al(t),
      [g, C] = c.useState(null),
      [m, h] = c.useState(null),
      [v, x] = c.useState(!1),
      E = To(u),
      [R = !1, P] = sn({ prop: r, defaultProp: o, onChange: i }),
      [k, A] = sn({ prop: l, defaultProp: s, onChange: a }),
      _ = c.useRef(null),
      D = g ? !!g.closest('form') : !0,
      [$, b] = c.useState(new Set()),
      F = Array.from($)
        .map(W => W.props.value)
        .join(';')
    return S.jsx(B1, {
      ...w,
      children: S.jsxs(Bx, {
        required: y,
        scope: t,
        trigger: g,
        onTriggerChange: C,
        valueNode: m,
        onValueNodeChange: h,
        valueNodeHasChildren: v,
        onValueNodeHasChildrenChange: x,
        contentId: vl(),
        value: k,
        onValueChange: A,
        open: R,
        onOpenChange: P,
        dir: E,
        triggerPointerDownPosRef: _,
        disabled: p,
        children: [
          S.jsx(Tl.Provider, {
            scope: t,
            children: S.jsx(Wx, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: c.useCallback(W => {
                b(I => new Set(I).add(W))
              }, []),
              onNativeOptionRemove: c.useCallback(W => {
                b(I => {
                  const H = new Set(I)
                  return H.delete(W), H
                })
              }, []),
              children: n,
            }),
          }),
          D
            ? S.jsxs(
                vv,
                {
                  'aria-hidden': !0,
                  required: y,
                  tabIndex: -1,
                  name: d,
                  autoComplete: f,
                  value: k,
                  onChange: W => A(W.target.value),
                  disabled: p,
                  children: [
                    k === void 0 ? S.jsx('option', { value: '' }) : null,
                    Array.from($),
                  ],
                },
                F,
              )
            : null,
        ],
      }),
    })
  }
Gm.displayName = _o
var Ym = 'SelectTrigger',
  Km = c.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e,
      i = Al(n),
      l = gn(Ym, n),
      s = l.disabled || r,
      a = X(t, l.onTriggerChange),
      u = _l(n),
      [d, f, p] = gv(w => {
        const g = u().filter(h => !h.disabled),
          C = g.find(h => h.value === l.value),
          m = yv(g, w, C)
        m !== void 0 && l.onValueChange(m.value)
      }),
      y = () => {
        s || (l.onOpenChange(!0), p())
      }
    return S.jsx($h, {
      asChild: !0,
      ...i,
      children: S.jsx(V.button, {
        type: 'button',
        role: 'combobox',
        'aria-controls': l.contentId,
        'aria-expanded': l.open,
        'aria-required': l.required,
        'aria-autocomplete': 'none',
        dir: l.dir,
        'data-state': l.open ? 'open' : 'closed',
        disabled: s,
        'data-disabled': s ? '' : void 0,
        'data-placeholder': mv(l.value) ? '' : void 0,
        ...o,
        ref: a,
        onClick: j(o.onClick, w => {
          w.currentTarget.focus()
        }),
        onPointerDown: j(o.onPointerDown, w => {
          const g = w.target
          g.hasPointerCapture(w.pointerId) &&
            g.releasePointerCapture(w.pointerId),
            w.button === 0 &&
              w.ctrlKey === !1 &&
              (y(),
              (l.triggerPointerDownPosRef.current = {
                x: Math.round(w.pageX),
                y: Math.round(w.pageY),
              }),
              w.preventDefault())
        }),
        onKeyDown: j(o.onKeyDown, w => {
          const g = d.current !== ''
          !(w.ctrlKey || w.altKey || w.metaKey) &&
            w.key.length === 1 &&
            f(w.key),
            !(g && w.key === ' ') &&
              bx.includes(w.key) &&
              (y(), w.preventDefault())
        }),
      }),
    })
  })
Km.displayName = Ym
var Xm = 'SelectValue',
  Qm = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: r,
        style: o,
        children: i,
        placeholder: l = '',
        ...s
      } = e,
      a = gn(Xm, n),
      { onValueNodeHasChildrenChange: u } = a,
      d = i !== void 0,
      f = X(t, a.onValueNodeChange)
    return (
      Te(() => {
        u(d)
      }, [u, d]),
      S.jsx(V.span, {
        ...s,
        ref: f,
        style: { pointerEvents: 'none' },
        children: mv(a.value) ? S.jsx(S.Fragment, { children: l }) : i,
      })
    )
  })
Qm.displayName = Xm
var Vx = 'SelectIcon',
  Zm = c.forwardRef((e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e
    return S.jsx(V.span, {
      'aria-hidden': !0,
      ...o,
      ref: t,
      children: r || '▼',
    })
  })
Zm.displayName = Vx
var Ux = 'SelectPortal',
  Jm = e => S.jsx(lh, { asChild: !0, ...e })
Jm.displayName = Ux
var In = 'SelectContent',
  qm = c.forwardRef((e, t) => {
    const n = gn(In, e.__scopeSelect),
      [r, o] = c.useState()
    if (
      (Te(() => {
        o(new DocumentFragment())
      }, []),
      !n.open)
    ) {
      const i = r
      return i
        ? mn.createPortal(
            S.jsx(ev, {
              scope: e.__scopeSelect,
              children: S.jsx(Tl.Slot, {
                scope: e.__scopeSelect,
                children: S.jsx('div', { children: e.children }),
              }),
            }),
            i,
          )
        : null
    }
    return S.jsx(tv, { ...e, ref: t })
  })
qm.displayName = In
var Tt = 10,
  [ev, yn] = kr(In),
  Gx = 'SelectContentImpl',
  tv = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: r = 'item-aligned',
        onCloseAutoFocus: o,
        onEscapeKeyDown: i,
        onPointerDownOutside: l,
        side: s,
        sideOffset: a,
        align: u,
        alignOffset: d,
        arrowPadding: f,
        collisionBoundary: p,
        collisionPadding: y,
        sticky: w,
        hideWhenDetached: g,
        avoidCollisions: C,
        ...m
      } = e,
      h = gn(In, n),
      [v, x] = c.useState(null),
      [E, R] = c.useState(null),
      P = X(t, M => x(M)),
      [k, A] = c.useState(null),
      [_, D] = c.useState(null),
      $ = _l(n),
      [b, F] = c.useState(!1),
      W = c.useRef(!1)
    c.useEffect(() => {
      if (v) return yw(v)
    }, [v]),
      Oy()
    const I = c.useCallback(
        M => {
          const [ee, ...Ee] = $().map(Z => Z.ref.current),
            [J] = Ee.slice(-1),
            Q = document.activeElement
          for (const Z of M)
            if (
              Z === Q ||
              (Z == null || Z.scrollIntoView({ block: 'nearest' }),
              Z === ee && E && (E.scrollTop = 0),
              Z === J && E && (E.scrollTop = E.scrollHeight),
              Z == null || Z.focus(),
              document.activeElement !== Q)
            )
              return
        },
        [$, E],
      ),
      H = c.useCallback(() => I([k, v]), [I, k, v])
    c.useEffect(() => {
      b && H()
    }, [b, H])
    const { onOpenChange: N, triggerPointerDownPosRef: L } = h
    c.useEffect(() => {
      if (v) {
        let M = { x: 0, y: 0 }
        const ee = J => {
            var Q, Z
            M = {
              x: Math.abs(
                Math.round(J.pageX) -
                  (((Q = L.current) == null ? void 0 : Q.x) ?? 0),
              ),
              y: Math.abs(
                Math.round(J.pageY) -
                  (((Z = L.current) == null ? void 0 : Z.y) ?? 0),
              ),
            }
          },
          Ee = J => {
            M.x <= 10 && M.y <= 10
              ? J.preventDefault()
              : v.contains(J.target) || N(!1),
              document.removeEventListener('pointermove', ee),
              (L.current = null)
          }
        return (
          L.current !== null &&
            (document.addEventListener('pointermove', ee),
            document.addEventListener('pointerup', Ee, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener('pointermove', ee),
              document.removeEventListener('pointerup', Ee, { capture: !0 })
          }
        )
      }
    }, [v, N, L]),
      c.useEffect(() => {
        const M = () => N(!1)
        return (
          window.addEventListener('blur', M),
          window.addEventListener('resize', M),
          () => {
            window.removeEventListener('blur', M),
              window.removeEventListener('resize', M)
          }
        )
      }, [N])
    const [z, G] = gv(M => {
        const ee = $().filter(Q => !Q.disabled),
          Ee = ee.find(Q => Q.ref.current === document.activeElement),
          J = yv(ee, M, Ee)
        J && setTimeout(() => J.ref.current.focus())
      }),
      re = c.useCallback(
        (M, ee, Ee) => {
          const J = !W.current && !Ee
          ;((h.value !== void 0 && h.value === ee) || J) &&
            (A(M), J && (W.current = !0))
        },
        [h.value],
      ),
      pt = c.useCallback(() => (v == null ? void 0 : v.focus()), [v]),
      Ce = c.useCallback(
        (M, ee, Ee) => {
          const J = !W.current && !Ee
          ;((h.value !== void 0 && h.value === ee) || J) && D(M)
        },
        [h.value],
      ),
      ht = r === 'popper' ? Sa : nv,
      _e =
        ht === Sa
          ? {
              side: s,
              sideOffset: a,
              align: u,
              alignOffset: d,
              arrowPadding: f,
              collisionBoundary: p,
              collisionPadding: y,
              sticky: w,
              hideWhenDetached: g,
              avoidCollisions: C,
            }
          : {}
    return S.jsx(ev, {
      scope: n,
      content: v,
      viewport: E,
      onViewportChange: R,
      itemRefCallback: re,
      selectedItem: k,
      onItemLeave: pt,
      itemTextRefCallback: Ce,
      focusSelectedItem: H,
      selectedItemText: _,
      position: r,
      isPositioned: b,
      searchRef: z,
      children: S.jsx(hh, {
        as: tt,
        allowPinchZoom: !0,
        children: S.jsx(oh, {
          asChild: !0,
          trapped: h.open,
          onMountAutoFocus: M => {
            M.preventDefault()
          },
          onUnmountAutoFocus: j(o, M => {
            var ee
            ;(ee = h.trigger) == null || ee.focus({ preventScroll: !0 }),
              M.preventDefault()
          }),
          children: S.jsx(xu, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: i,
            onPointerDownOutside: l,
            onFocusOutside: M => M.preventDefault(),
            onDismiss: () => h.onOpenChange(!1),
            children: S.jsx(ht, {
              role: 'listbox',
              id: h.contentId,
              'data-state': h.open ? 'open' : 'closed',
              dir: h.dir,
              onContextMenu: M => M.preventDefault(),
              ...m,
              ..._e,
              onPlaced: () => F(!0),
              ref: P,
              style: {
                display: 'flex',
                flexDirection: 'column',
                outline: 'none',
                ...m.style,
              },
              onKeyDown: j(m.onKeyDown, M => {
                const ee = M.ctrlKey || M.altKey || M.metaKey
                if (
                  (M.key === 'Tab' && M.preventDefault(),
                  !ee && M.key.length === 1 && G(M.key),
                  ['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(M.key))
                ) {
                  let J = $()
                    .filter(Q => !Q.disabled)
                    .map(Q => Q.ref.current)
                  if (
                    (['ArrowUp', 'End'].includes(M.key) &&
                      (J = J.slice().reverse()),
                    ['ArrowUp', 'ArrowDown'].includes(M.key))
                  ) {
                    const Q = M.target,
                      Z = J.indexOf(Q)
                    J = J.slice(Z + 1)
                  }
                  setTimeout(() => I(J)), M.preventDefault()
                }
              }),
            }),
          }),
        }),
      }),
    })
  })
tv.displayName = Gx
var Yx = 'SelectItemAlignedPosition',
  nv = c.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: r, ...o } = e,
      i = gn(In, n),
      l = yn(In, n),
      [s, a] = c.useState(null),
      [u, d] = c.useState(null),
      f = X(t, P => d(P)),
      p = _l(n),
      y = c.useRef(!1),
      w = c.useRef(!0),
      {
        viewport: g,
        selectedItem: C,
        selectedItemText: m,
        focusSelectedItem: h,
      } = l,
      v = c.useCallback(() => {
        if (i.trigger && i.valueNode && s && u && g && C && m) {
          const P = i.trigger.getBoundingClientRect(),
            k = u.getBoundingClientRect(),
            A = i.valueNode.getBoundingClientRect(),
            _ = m.getBoundingClientRect()
          if (i.dir !== 'rtl') {
            const Q = _.left - k.left,
              Z = A.left - Q,
              Fe = P.left - Z,
              mt = P.width + Fe,
              Nr = Math.max(mt, k.width),
              Tr = window.innerWidth - Tt,
              _r = wa(Z, [Tt, Tr - Nr])
            ;(s.style.minWidth = mt + 'px'), (s.style.left = _r + 'px')
          } else {
            const Q = k.right - _.right,
              Z = window.innerWidth - A.right - Q,
              Fe = window.innerWidth - P.right - Z,
              mt = P.width + Fe,
              Nr = Math.max(mt, k.width),
              Tr = window.innerWidth - Tt,
              _r = wa(Z, [Tt, Tr - Nr])
            ;(s.style.minWidth = mt + 'px'), (s.style.right = _r + 'px')
          }
          const D = p(),
            $ = window.innerHeight - Tt * 2,
            b = g.scrollHeight,
            F = window.getComputedStyle(u),
            W = parseInt(F.borderTopWidth, 10),
            I = parseInt(F.paddingTop, 10),
            H = parseInt(F.borderBottomWidth, 10),
            N = parseInt(F.paddingBottom, 10),
            L = W + I + b + N + H,
            z = Math.min(C.offsetHeight * 5, L),
            G = window.getComputedStyle(g),
            re = parseInt(G.paddingTop, 10),
            pt = parseInt(G.paddingBottom, 10),
            Ce = P.top + P.height / 2 - Tt,
            ht = $ - Ce,
            _e = C.offsetHeight / 2,
            M = C.offsetTop + _e,
            ee = W + I + M,
            Ee = L - ee
          if (ee <= Ce) {
            const Q = C === D[D.length - 1].ref.current
            s.style.bottom = '0px'
            const Z = u.clientHeight - g.offsetTop - g.offsetHeight,
              Fe = Math.max(ht, _e + (Q ? pt : 0) + Z + H),
              mt = ee + Fe
            s.style.height = mt + 'px'
          } else {
            const Q = C === D[0].ref.current
            s.style.top = '0px'
            const Fe = Math.max(Ce, W + g.offsetTop + (Q ? re : 0) + _e) + Ee
            ;(s.style.height = Fe + 'px'), (g.scrollTop = ee - Ce + g.offsetTop)
          }
          ;(s.style.margin = `${Tt}px 0`),
            (s.style.minHeight = z + 'px'),
            (s.style.maxHeight = $ + 'px'),
            r == null || r(),
            requestAnimationFrame(() => (y.current = !0))
        }
      }, [p, i.trigger, i.valueNode, s, u, g, C, m, i.dir, r])
    Te(() => v(), [v])
    const [x, E] = c.useState()
    Te(() => {
      u && E(window.getComputedStyle(u).zIndex)
    }, [u])
    const R = c.useCallback(
      P => {
        P && w.current === !0 && (v(), h == null || h(), (w.current = !1))
      },
      [v, h],
    )
    return S.jsx(Xx, {
      scope: n,
      contentWrapper: s,
      shouldExpandOnScrollRef: y,
      onScrollButtonChange: R,
      children: S.jsx('div', {
        ref: a,
        style: {
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          zIndex: x,
        },
        children: S.jsx(V.div, {
          ...o,
          ref: f,
          style: { boxSizing: 'border-box', maxHeight: '100%', ...o.style },
        }),
      }),
    })
  })
nv.displayName = Yx
var Kx = 'SelectPopperPosition',
  Sa = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: r = 'start',
        collisionPadding: o = Tt,
        ...i
      } = e,
      l = Al(n)
    return S.jsx(Bh, {
      ...l,
      ...i,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        boxSizing: 'border-box',
        ...i.style,
        '--radix-select-content-transform-origin':
          'var(--radix-popper-transform-origin)',
        '--radix-select-content-available-width':
          'var(--radix-popper-available-width)',
        '--radix-select-content-available-height':
          'var(--radix-popper-available-height)',
        '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
        '--radix-select-trigger-height': 'var(--radix-popper-anchor-height)',
      },
    })
  })
Sa.displayName = Kx
var [Xx, Gu] = kr(In, {}),
  xa = 'SelectViewport',
  rv = c.forwardRef((e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e,
      i = yn(xa, n),
      l = Gu(xa, n),
      s = X(t, i.onViewportChange),
      a = c.useRef(0)
    return S.jsxs(S.Fragment, {
      children: [
        S.jsx('style', {
          dangerouslySetInnerHTML: {
            __html:
              '[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}',
          },
          nonce: r,
        }),
        S.jsx(Tl.Slot, {
          scope: n,
          children: S.jsx(V.div, {
            'data-radix-select-viewport': '',
            role: 'presentation',
            ...o,
            ref: s,
            style: {
              position: 'relative',
              flex: 1,
              overflow: 'auto',
              ...o.style,
            },
            onScroll: j(o.onScroll, u => {
              const d = u.currentTarget,
                { contentWrapper: f, shouldExpandOnScrollRef: p } = l
              if (p != null && p.current && f) {
                const y = Math.abs(a.current - d.scrollTop)
                if (y > 0) {
                  const w = window.innerHeight - Tt * 2,
                    g = parseFloat(f.style.minHeight),
                    C = parseFloat(f.style.height),
                    m = Math.max(g, C)
                  if (m < w) {
                    const h = m + y,
                      v = Math.min(w, h),
                      x = h - v
                    ;(f.style.height = v + 'px'),
                      f.style.bottom === '0px' &&
                        ((d.scrollTop = x > 0 ? x : 0),
                        (f.style.justifyContent = 'flex-end'))
                  }
                }
              }
              a.current = d.scrollTop
            }),
          }),
        }),
      ],
    })
  })
rv.displayName = xa
var ov = 'SelectGroup',
  [Qx, Zx] = kr(ov),
  iv = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = vl()
    return S.jsx(Qx, {
      scope: n,
      id: o,
      children: S.jsx(V.div, {
        role: 'group',
        'aria-labelledby': o,
        ...r,
        ref: t,
      }),
    })
  })
iv.displayName = ov
var lv = 'SelectLabel',
  sv = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = Zx(lv, n)
    return S.jsx(V.div, { id: o.id, ...r, ref: t })
  })
sv.displayName = lv
var qi = 'SelectItem',
  [Jx, av] = kr(qi),
  uv = c.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: r,
        disabled: o = !1,
        textValue: i,
        ...l
      } = e,
      s = gn(qi, n),
      a = yn(qi, n),
      u = s.value === r,
      [d, f] = c.useState(i ?? ''),
      [p, y] = c.useState(!1),
      w = X(t, m => {
        var h
        return (h = a.itemRefCallback) == null ? void 0 : h.call(a, m, r, o)
      }),
      g = vl(),
      C = () => {
        o || (s.onValueChange(r), s.onOpenChange(!1))
      }
    if (r === '')
      throw new Error(
        'A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.',
      )
    return S.jsx(Jx, {
      scope: n,
      value: r,
      disabled: o,
      textId: g,
      isSelected: u,
      onItemTextChange: c.useCallback(m => {
        f(h => h || ((m == null ? void 0 : m.textContent) ?? '').trim())
      }, []),
      children: S.jsx(Tl.ItemSlot, {
        scope: n,
        value: r,
        disabled: o,
        textValue: d,
        children: S.jsx(V.div, {
          role: 'option',
          'aria-labelledby': g,
          'data-highlighted': p ? '' : void 0,
          'aria-selected': u && p,
          'data-state': u ? 'checked' : 'unchecked',
          'aria-disabled': o || void 0,
          'data-disabled': o ? '' : void 0,
          tabIndex: o ? void 0 : -1,
          ...l,
          ref: w,
          onFocus: j(l.onFocus, () => y(!0)),
          onBlur: j(l.onBlur, () => y(!1)),
          onPointerUp: j(l.onPointerUp, C),
          onPointerMove: j(l.onPointerMove, m => {
            var h
            o
              ? (h = a.onItemLeave) == null || h.call(a)
              : m.currentTarget.focus({ preventScroll: !0 })
          }),
          onPointerLeave: j(l.onPointerLeave, m => {
            var h
            m.currentTarget === document.activeElement &&
              ((h = a.onItemLeave) == null || h.call(a))
          }),
          onKeyDown: j(l.onKeyDown, m => {
            var v
            ;(((v = a.searchRef) == null ? void 0 : v.current) !== '' &&
              m.key === ' ') ||
              (Fx.includes(m.key) && C(), m.key === ' ' && m.preventDefault())
          }),
        }),
      }),
    })
  })
uv.displayName = qi
var Hr = 'SelectItemText',
  cv = c.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e,
      l = gn(Hr, n),
      s = yn(Hr, n),
      a = av(Hr, n),
      u = Hx(Hr, n),
      [d, f] = c.useState(null),
      p = X(
        t,
        m => f(m),
        a.onItemTextChange,
        m => {
          var h
          return (h = s.itemTextRefCallback) == null
            ? void 0
            : h.call(s, m, a.value, a.disabled)
        },
      ),
      y = d == null ? void 0 : d.textContent,
      w = c.useMemo(
        () =>
          S.jsx(
            'option',
            { value: a.value, disabled: a.disabled, children: y },
            a.value,
          ),
        [a.disabled, a.value, y],
      ),
      { onNativeOptionAdd: g, onNativeOptionRemove: C } = u
    return (
      Te(() => (g(w), () => C(w)), [g, C, w]),
      S.jsxs(S.Fragment, {
        children: [
          S.jsx(V.span, { id: a.textId, ...i, ref: p }),
          a.isSelected && l.valueNode && !l.valueNodeHasChildren
            ? mn.createPortal(i.children, l.valueNode)
            : null,
        ],
      })
    )
  })
cv.displayName = Hr
var dv = 'SelectItemIndicator',
  fv = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e
    return av(dv, n).isSelected
      ? S.jsx(V.span, { 'aria-hidden': !0, ...r, ref: t })
      : null
  })
fv.displayName = dv
var Ca = 'SelectScrollUpButton',
  qx = c.forwardRef((e, t) => {
    const n = yn(Ca, e.__scopeSelect),
      r = Gu(Ca, e.__scopeSelect),
      [o, i] = c.useState(!1),
      l = X(t, r.onScrollButtonChange)
    return (
      Te(() => {
        if (n.viewport && n.isPositioned) {
          let s = function () {
            const u = a.scrollTop > 0
            i(u)
          }
          const a = n.viewport
          return (
            s(),
            a.addEventListener('scroll', s),
            () => a.removeEventListener('scroll', s)
          )
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? S.jsx(pv, {
            ...e,
            ref: l,
            onAutoScroll: () => {
              const { viewport: s, selectedItem: a } = n
              s && a && (s.scrollTop = s.scrollTop - a.offsetHeight)
            },
          })
        : null
    )
  })
qx.displayName = Ca
var Ea = 'SelectScrollDownButton',
  eC = c.forwardRef((e, t) => {
    const n = yn(Ea, e.__scopeSelect),
      r = Gu(Ea, e.__scopeSelect),
      [o, i] = c.useState(!1),
      l = X(t, r.onScrollButtonChange)
    return (
      Te(() => {
        if (n.viewport && n.isPositioned) {
          let s = function () {
            const u = a.scrollHeight - a.clientHeight,
              d = Math.ceil(a.scrollTop) < u
            i(d)
          }
          const a = n.viewport
          return (
            s(),
            a.addEventListener('scroll', s),
            () => a.removeEventListener('scroll', s)
          )
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? S.jsx(pv, {
            ...e,
            ref: l,
            onAutoScroll: () => {
              const { viewport: s, selectedItem: a } = n
              s && a && (s.scrollTop = s.scrollTop + a.offsetHeight)
            },
          })
        : null
    )
  })
eC.displayName = Ea
var pv = c.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
      i = yn('SelectScrollButton', n),
      l = c.useRef(null),
      s = _l(n),
      a = c.useCallback(() => {
        l.current !== null &&
          (window.clearInterval(l.current), (l.current = null))
      }, [])
    return (
      c.useEffect(() => () => a(), [a]),
      Te(() => {
        var d
        const u = s().find(f => f.ref.current === document.activeElement)
        ;(d = u == null ? void 0 : u.ref.current) == null ||
          d.scrollIntoView({ block: 'nearest' })
      }, [s]),
      S.jsx(V.div, {
        'aria-hidden': !0,
        ...o,
        ref: t,
        style: { flexShrink: 0, ...o.style },
        onPointerDown: j(o.onPointerDown, () => {
          l.current === null && (l.current = window.setInterval(r, 50))
        }),
        onPointerMove: j(o.onPointerMove, () => {
          var u
          ;(u = i.onItemLeave) == null || u.call(i),
            l.current === null && (l.current = window.setInterval(r, 50))
        }),
        onPointerLeave: j(o.onPointerLeave, () => {
          a()
        }),
      })
    )
  }),
  tC = 'SelectSeparator',
  hv = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e
    return S.jsx(V.div, { 'aria-hidden': !0, ...r, ref: t })
  })
hv.displayName = tC
var Pa = 'SelectArrow',
  nC = c.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = Al(n),
      i = gn(Pa, n),
      l = yn(Pa, n)
    return i.open && l.position === 'popper'
      ? S.jsx(Wh, { ...o, ...r, ref: t })
      : null
  })
nC.displayName = Pa
function mv(e) {
  return e === '' || e === void 0
}
var vv = c.forwardRef((e, t) => {
  const { value: n, ...r } = e,
    o = c.useRef(null),
    i = X(t, o),
    l = tm(n)
  return (
    c.useEffect(() => {
      const s = o.current,
        a = window.HTMLSelectElement.prototype,
        d = Object.getOwnPropertyDescriptor(a, 'value').set
      if (l !== n && d) {
        const f = new Event('change', { bubbles: !0 })
        d.call(s, n), s.dispatchEvent(f)
      }
    }, [l, n]),
    S.jsx(Su, {
      asChild: !0,
      children: S.jsx('select', { ...r, ref: i, defaultValue: n }),
    })
  )
})
vv.displayName = 'BubbleSelect'
function gv(e) {
  const t = ye(e),
    n = c.useRef(''),
    r = c.useRef(0),
    o = c.useCallback(
      l => {
        const s = n.current + l
        t(s),
          (function a(u) {
            ;(n.current = u),
              window.clearTimeout(r.current),
              u !== '' && (r.current = window.setTimeout(() => a(''), 1e3))
          })(s)
      },
      [t],
    ),
    i = c.useCallback(() => {
      ;(n.current = ''), window.clearTimeout(r.current)
    }, [])
  return c.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i]
}
function yv(e, t, n) {
  const o = t.length > 1 && Array.from(t).every(u => u === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1
  let l = rC(e, Math.max(i, 0))
  o.length === 1 && (l = l.filter(u => u !== n))
  const a = l.find(u => u.textValue.toLowerCase().startsWith(o.toLowerCase()))
  return a !== n ? a : void 0
}
function rC(e, t) {
  return e.map((n, r) => e[(t + r) % e.length])
}
var oC = Gm,
  iC = Km,
  lC = Qm,
  sC = Zm,
  aC = Jm,
  uC = qm,
  cC = rv,
  dC = iv,
  fC = sv,
  pC = uv,
  hC = cv,
  mC = fv,
  vC = hv
const gC = ['1', '2', '3'],
  Yu = {
    size: {
      type: 'enum',
      className: 'rt-r-size',
      values: gC,
      default: '2',
      responsive: !0,
    },
  },
  yC = ['classic', 'surface', 'soft', 'ghost'],
  wC = {
    variant: {
      type: 'enum',
      className: 'rt-variant',
      values: yC,
      default: 'surface',
    },
    ...Ro,
    ...Zh,
    placeholder: { type: 'string' },
  },
  SC = ['solid', 'soft'],
  xC = {
    variant: {
      type: 'enum',
      className: 'rt-variant',
      values: SC,
      default: 'solid',
    },
    ...Ro,
    ...ko,
  },
  Ku = c.createContext({}),
  wv = e => {
    const { children: t, size: n = Yu.size.default, ...r } = e
    return c.createElement(
      oC,
      { ...r },
      c.createElement(
        Ku.Provider,
        { value: c.useMemo(() => ({ size: n }), [n]) },
        t,
      ),
    )
  }
wv.displayName = 'Select.Root'
const Sv = c.forwardRef((e, t) => {
  const n = c.useContext(Ku),
    {
      children: r,
      className: o,
      color: i,
      radius: l,
      placeholder: s,
      ...a
    } = ft(
      { size: n == null ? void 0 : n.size, ...e },
      { size: Yu.size },
      wC,
      Pt,
    )
  return c.createElement(
    iC,
    { asChild: !0 },
    c.createElement(
      'button',
      {
        'data-accent-color': i,
        'data-radius': l,
        ...a,
        ref: t,
        className: ue('rt-reset', 'rt-SelectTrigger', o),
      },
      c.createElement(
        'span',
        { className: 'rt-SelectTriggerInner' },
        c.createElement(lC, { placeholder: s }, r),
      ),
      c.createElement(
        sC,
        { asChild: !0 },
        c.createElement(fm, { className: 'rt-SelectIcon' }),
      ),
    ),
  )
})
Sv.displayName = 'Select.Trigger'
const xv = c.forwardRef((e, t) => {
  const n = c.useContext(Ku),
    {
      className: r,
      children: o,
      color: i,
      container: l,
      ...s
    } = ft({ size: n == null ? void 0 : n.size, ...e }, { size: Yu.size }, xC),
    a = cS(),
    u = i || a.accentColor
  return c.createElement(
    aC,
    { container: l },
    c.createElement(
      Du,
      { asChild: !0 },
      c.createElement(
        uC,
        {
          'data-accent-color': u,
          sideOffset: 4,
          ...s,
          asChild: !1,
          ref: t,
          className: ue(
            { 'rt-PopperContent': s.position === 'popper' },
            'rt-SelectContent',
            r,
          ),
        },
        c.createElement(
          ux,
          { type: 'auto', className: 'rt-ScrollAreaRoot' },
          c.createElement(
            cC,
            { asChild: !0, className: 'rt-SelectViewport' },
            c.createElement(
              cx,
              {
                className: 'rt-ScrollAreaViewport',
                style: { overflowY: void 0 },
              },
              o,
            ),
          ),
          c.createElement(
            dx,
            {
              className: 'rt-ScrollAreaScrollbar rt-r-size-1',
              orientation: 'vertical',
            },
            c.createElement(fx, { className: 'rt-ScrollAreaThumb' }),
          ),
        ),
      ),
    ),
  )
})
xv.displayName = 'Select.Content'
const Cv = c.forwardRef((e, t) => {
  const { className: n, children: r, ...o } = e
  return c.createElement(
    pC,
    { ...o, asChild: !1, ref: t, className: ue('rt-SelectItem', n) },
    c.createElement(
      mC,
      { className: 'rt-SelectItemIndicator' },
      c.createElement(dm, { className: 'rt-SelectItemIndicatorIcon' }),
    ),
    c.createElement(hC, null, r),
  )
})
Cv.displayName = 'Select.Item'
const Ev = c.forwardRef(({ className: e, ...t }, n) =>
  c.createElement(dC, {
    ...t,
    asChild: !1,
    ref: n,
    className: ue('rt-SelectGroup', e),
  }),
)
Ev.displayName = 'Select.Group'
const CC = c.forwardRef(({ className: e, ...t }, n) =>
  c.createElement(fC, {
    ...t,
    asChild: !1,
    ref: n,
    className: ue('rt-SelectLabel', e),
  }),
)
CC.displayName = 'Select.Label'
const EC = c.forwardRef(({ className: e, ...t }, n) =>
  c.createElement(vC, {
    ...t,
    asChild: !1,
    ref: n,
    className: ue('rt-SelectSeparator', e),
  }),
)
EC.displayName = 'Select.Separator'
var Pv,
  _d = mn
;(Pv = _d.createRoot), _d.hydrateRoot
const PC = ({ children: e }) =>
  S.jsx(we, { direction: 'row', width: '100%', height: '100%', children: e })
function RC(e, t = 300) {
  let n
  return () => {
    clearTimeout(n),
      (n = setTimeout(() => {
        e()
      }, t))
  }
}
const kC = e => {
  c.useEffect(() => {
    const t = RC(e, 100)
    return (
      window.addEventListener('resize', t),
      () => {
        window.removeEventListener('resize', t)
      }
    )
  }, [e])
}
var NC = (function () {
    var e = function (t, n) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (r, o) {
              r.__proto__ = o
            }) ||
          function (r, o) {
            for (var i in o)
              Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i])
          }),
        e(t, n)
      )
    }
    return function (t, n) {
      e(t, n)
      function r() {
        this.constructor = t
      }
      t.prototype =
        n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
    }
  })(),
  de = function () {
    return (
      (de =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n]
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          }
          return e
        }),
      de.apply(this, arguments)
    )
  },
  Ad = {
    width: '100%',
    height: '10px',
    top: '0px',
    left: '0px',
    cursor: 'row-resize',
  },
  Ld = {
    width: '10px',
    height: '100%',
    top: '0px',
    left: '0px',
    cursor: 'col-resize',
  },
  ei = { width: '20px', height: '20px', position: 'absolute' },
  TC = {
    top: de(de({}, Ad), { top: '-5px' }),
    right: de(de({}, Ld), { left: void 0, right: '-5px' }),
    bottom: de(de({}, Ad), { top: void 0, bottom: '-5px' }),
    left: de(de({}, Ld), { left: '-5px' }),
    topRight: de(de({}, ei), {
      right: '-10px',
      top: '-10px',
      cursor: 'ne-resize',
    }),
    bottomRight: de(de({}, ei), {
      right: '-10px',
      bottom: '-10px',
      cursor: 'se-resize',
    }),
    bottomLeft: de(de({}, ei), {
      left: '-10px',
      bottom: '-10px',
      cursor: 'sw-resize',
    }),
    topLeft: de(de({}, ei), {
      left: '-10px',
      top: '-10px',
      cursor: 'nw-resize',
    }),
  },
  _C = (function (e) {
    NC(t, e)
    function t() {
      var n = (e !== null && e.apply(this, arguments)) || this
      return (
        (n.onMouseDown = function (r) {
          n.props.onResizeStart(r, n.props.direction)
        }),
        (n.onTouchStart = function (r) {
          n.props.onResizeStart(r, n.props.direction)
        }),
        n
      )
    }
    return (
      (t.prototype.render = function () {
        return c.createElement(
          'div',
          {
            className: this.props.className || '',
            style: de(
              de(
                { position: 'absolute', userSelect: 'none' },
                TC[this.props.direction],
              ),
              this.props.replaceStyles || {},
            ),
            onMouseDown: this.onMouseDown,
            onTouchStart: this.onTouchStart,
          },
          this.props.children,
        )
      }),
      t
    )
  })(c.PureComponent),
  AC = (function () {
    var e = function (t, n) {
      return (
        (e =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (r, o) {
              r.__proto__ = o
            }) ||
          function (r, o) {
            for (var i in o)
              Object.prototype.hasOwnProperty.call(o, i) && (r[i] = o[i])
          }),
        e(t, n)
      )
    }
    return function (t, n) {
      e(t, n)
      function r() {
        this.constructor = t
      }
      t.prototype =
        n === null ? Object.create(n) : ((r.prototype = n.prototype), new r())
    }
  })(),
  yt = function () {
    return (
      (yt =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n]
            for (var o in t)
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
          }
          return e
        }),
      yt.apply(this, arguments)
    )
  },
  LC = { width: 'auto', height: 'auto' },
  ti = function (e, t, n) {
    return Math.max(Math.min(e, n), t)
  },
  Od = function (e, t, n) {
    var r = Math.round(e / t)
    return r * t + n * (r - 1)
  },
  Hn = function (e, t) {
    return new RegExp(e, 'i').test(t)
  },
  ni = function (e) {
    return !!(e.touches && e.touches.length)
  },
  OC = function (e) {
    return !!((e.clientX || e.clientX === 0) && (e.clientY || e.clientY === 0))
  },
  zd = function (e, t, n) {
    n === void 0 && (n = 0)
    var r = t.reduce(function (i, l, s) {
        return Math.abs(l - e) < Math.abs(t[i] - e) ? s : i
      }, 0),
      o = Math.abs(t[r] - e)
    return n === 0 || o < n ? t[r] : e
  },
  ms = function (e) {
    return (
      (e = e.toString()),
      e === 'auto' ||
      e.endsWith('px') ||
      e.endsWith('%') ||
      e.endsWith('vh') ||
      e.endsWith('vw') ||
      e.endsWith('vmax') ||
      e.endsWith('vmin')
        ? e
        : e + 'px'
    )
  },
  ri = function (e, t, n, r) {
    if (e && typeof e == 'string') {
      if (e.endsWith('px')) return Number(e.replace('px', ''))
      if (e.endsWith('%')) {
        var o = Number(e.replace('%', '')) / 100
        return t * o
      }
      if (e.endsWith('vw')) {
        var o = Number(e.replace('vw', '')) / 100
        return n * o
      }
      if (e.endsWith('vh')) {
        var o = Number(e.replace('vh', '')) / 100
        return r * o
      }
    }
    return e
  },
  zC = function (e, t, n, r, o, i, l) {
    return (
      (r = ri(r, e.width, t, n)),
      (o = ri(o, e.height, t, n)),
      (i = ri(i, e.width, t, n)),
      (l = ri(l, e.height, t, n)),
      {
        maxWidth: typeof r > 'u' ? void 0 : Number(r),
        maxHeight: typeof o > 'u' ? void 0 : Number(o),
        minWidth: typeof i > 'u' ? void 0 : Number(i),
        minHeight: typeof l > 'u' ? void 0 : Number(l),
      }
    )
  },
  IC = function (e) {
    return Array.isArray(e) ? e : [e, e]
  },
  MC = [
    'as',
    'ref',
    'style',
    'className',
    'grid',
    'gridGap',
    'snap',
    'bounds',
    'boundsByDirection',
    'size',
    'defaultSize',
    'minWidth',
    'minHeight',
    'maxWidth',
    'maxHeight',
    'lockAspectRatio',
    'lockAspectRatioExtraWidth',
    'lockAspectRatioExtraHeight',
    'enable',
    'handleStyles',
    'handleClasses',
    'handleWrapperStyle',
    'handleWrapperClass',
    'children',
    'onResizeStart',
    'onResize',
    'onResizeStop',
    'handleComponent',
    'scale',
    'resizeRatio',
    'snapGap',
  ],
  Id = '__resizable_base__',
  DC = (function (e) {
    AC(t, e)
    function t(n) {
      var r,
        o,
        i,
        l,
        s = e.call(this, n) || this
      return (
        (s.ratio = 1),
        (s.resizable = null),
        (s.parentLeft = 0),
        (s.parentTop = 0),
        (s.resizableLeft = 0),
        (s.resizableRight = 0),
        (s.resizableTop = 0),
        (s.resizableBottom = 0),
        (s.targetLeft = 0),
        (s.targetTop = 0),
        (s.appendBase = function () {
          if (!s.resizable || !s.window) return null
          var a = s.parentNode
          if (!a) return null
          var u = s.window.document.createElement('div')
          return (
            (u.style.width = '100%'),
            (u.style.height = '100%'),
            (u.style.position = 'absolute'),
            (u.style.transform = 'scale(0, 0)'),
            (u.style.left = '0'),
            (u.style.flex = '0 0 100%'),
            u.classList ? u.classList.add(Id) : (u.className += Id),
            a.appendChild(u),
            u
          )
        }),
        (s.removeBase = function (a) {
          var u = s.parentNode
          u && u.removeChild(a)
        }),
        (s.state = {
          isResizing: !1,
          width:
            (o =
              (r = s.propsSize) === null || r === void 0 ? void 0 : r.width) !==
              null && o !== void 0
              ? o
              : 'auto',
          height:
            (l =
              (i = s.propsSize) === null || i === void 0
                ? void 0
                : i.height) !== null && l !== void 0
              ? l
              : 'auto',
          direction: 'right',
          original: { x: 0, y: 0, width: 0, height: 0 },
          backgroundStyle: {
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0)',
            cursor: 'auto',
            opacity: 0,
            position: 'fixed',
            zIndex: 9999,
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
          },
          flexBasis: void 0,
        }),
        (s.onResizeStart = s.onResizeStart.bind(s)),
        (s.onMouseMove = s.onMouseMove.bind(s)),
        (s.onMouseUp = s.onMouseUp.bind(s)),
        s
      )
    }
    return (
      Object.defineProperty(t.prototype, 'parentNode', {
        get: function () {
          return this.resizable ? this.resizable.parentNode : null
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'window', {
        get: function () {
          return !this.resizable || !this.resizable.ownerDocument
            ? null
            : this.resizable.ownerDocument.defaultView
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'propsSize', {
        get: function () {
          return this.props.size || this.props.defaultSize || LC
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'size', {
        get: function () {
          var n = 0,
            r = 0
          if (this.resizable && this.window) {
            var o = this.resizable.offsetWidth,
              i = this.resizable.offsetHeight,
              l = this.resizable.style.position
            l !== 'relative' && (this.resizable.style.position = 'relative'),
              (n =
                this.resizable.style.width !== 'auto'
                  ? this.resizable.offsetWidth
                  : o),
              (r =
                this.resizable.style.height !== 'auto'
                  ? this.resizable.offsetHeight
                  : i),
              (this.resizable.style.position = l)
          }
          return { width: n, height: r }
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'sizeStyle', {
        get: function () {
          var n = this,
            r = this.props.size,
            o = function (s) {
              var a
              if (typeof n.state[s] > 'u' || n.state[s] === 'auto')
                return 'auto'
              if (
                n.propsSize &&
                n.propsSize[s] &&
                !((a = n.propsSize[s]) === null || a === void 0) &&
                a.toString().endsWith('%')
              ) {
                if (n.state[s].toString().endsWith('%'))
                  return n.state[s].toString()
                var u = n.getParentSize(),
                  d = Number(n.state[s].toString().replace('px', '')),
                  f = (d / u[s]) * 100
                return f + '%'
              }
              return ms(n.state[s])
            },
            i =
              r && typeof r.width < 'u' && !this.state.isResizing
                ? ms(r.width)
                : o('width'),
            l =
              r && typeof r.height < 'u' && !this.state.isResizing
                ? ms(r.height)
                : o('height')
          return { width: i, height: l }
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.getParentSize = function () {
        if (!this.parentNode)
          return this.window
            ? { width: this.window.innerWidth, height: this.window.innerHeight }
            : { width: 0, height: 0 }
        var n = this.appendBase()
        if (!n) return { width: 0, height: 0 }
        var r = !1,
          o = this.parentNode.style.flexWrap
        o !== 'wrap' && ((r = !0), (this.parentNode.style.flexWrap = 'wrap')),
          (n.style.position = 'relative'),
          (n.style.minWidth = '100%'),
          (n.style.minHeight = '100%')
        var i = { width: n.offsetWidth, height: n.offsetHeight }
        return r && (this.parentNode.style.flexWrap = o), this.removeBase(n), i
      }),
      (t.prototype.bindEvents = function () {
        this.window &&
          (this.window.addEventListener('mouseup', this.onMouseUp),
          this.window.addEventListener('mousemove', this.onMouseMove),
          this.window.addEventListener('mouseleave', this.onMouseUp),
          this.window.addEventListener('touchmove', this.onMouseMove, {
            capture: !0,
            passive: !1,
          }),
          this.window.addEventListener('touchend', this.onMouseUp))
      }),
      (t.prototype.unbindEvents = function () {
        this.window &&
          (this.window.removeEventListener('mouseup', this.onMouseUp),
          this.window.removeEventListener('mousemove', this.onMouseMove),
          this.window.removeEventListener('mouseleave', this.onMouseUp),
          this.window.removeEventListener('touchmove', this.onMouseMove, !0),
          this.window.removeEventListener('touchend', this.onMouseUp))
      }),
      (t.prototype.componentDidMount = function () {
        if (!(!this.resizable || !this.window)) {
          var n = this.window.getComputedStyle(this.resizable)
          this.setState({
            width: this.state.width || this.size.width,
            height: this.state.height || this.size.height,
            flexBasis: n.flexBasis !== 'auto' ? n.flexBasis : void 0,
          })
        }
      }),
      (t.prototype.componentWillUnmount = function () {
        this.window && this.unbindEvents()
      }),
      (t.prototype.createSizeForCssProperty = function (n, r) {
        var o = this.propsSize && this.propsSize[r]
        return this.state[r] === 'auto' &&
          this.state.original[r] === n &&
          (typeof o > 'u' || o === 'auto')
          ? 'auto'
          : n
      }),
      (t.prototype.calculateNewMaxFromBoundary = function (n, r) {
        var o = this.props.boundsByDirection,
          i = this.state.direction,
          l = o && Hn('left', i),
          s = o && Hn('top', i),
          a,
          u
        if (this.props.bounds === 'parent') {
          var d = this.parentNode
          d &&
            ((a = l
              ? this.resizableRight - this.parentLeft
              : d.offsetWidth + (this.parentLeft - this.resizableLeft)),
            (u = s
              ? this.resizableBottom - this.parentTop
              : d.offsetHeight + (this.parentTop - this.resizableTop)))
        } else
          this.props.bounds === 'window'
            ? this.window &&
              ((a = l
                ? this.resizableRight
                : this.window.innerWidth - this.resizableLeft),
              (u = s
                ? this.resizableBottom
                : this.window.innerHeight - this.resizableTop))
            : this.props.bounds &&
              ((a = l
                ? this.resizableRight - this.targetLeft
                : this.props.bounds.offsetWidth +
                  (this.targetLeft - this.resizableLeft)),
              (u = s
                ? this.resizableBottom - this.targetTop
                : this.props.bounds.offsetHeight +
                  (this.targetTop - this.resizableTop)))
        return (
          a && Number.isFinite(a) && (n = n && n < a ? n : a),
          u && Number.isFinite(u) && (r = r && r < u ? r : u),
          { maxWidth: n, maxHeight: r }
        )
      }),
      (t.prototype.calculateNewSizeFromDirection = function (n, r) {
        var o = this.props.scale || 1,
          i = IC(this.props.resizeRatio || 1),
          l = i[0],
          s = i[1],
          a = this.state,
          u = a.direction,
          d = a.original,
          f = this.props,
          p = f.lockAspectRatio,
          y = f.lockAspectRatioExtraHeight,
          w = f.lockAspectRatioExtraWidth,
          g = d.width,
          C = d.height,
          m = y || 0,
          h = w || 0
        return (
          Hn('right', u) &&
            ((g = d.width + ((n - d.x) * l) / o),
            p && (C = (g - h) / this.ratio + m)),
          Hn('left', u) &&
            ((g = d.width - ((n - d.x) * l) / o),
            p && (C = (g - h) / this.ratio + m)),
          Hn('bottom', u) &&
            ((C = d.height + ((r - d.y) * s) / o),
            p && (g = (C - m) * this.ratio + h)),
          Hn('top', u) &&
            ((C = d.height - ((r - d.y) * s) / o),
            p && (g = (C - m) * this.ratio + h)),
          { newWidth: g, newHeight: C }
        )
      }),
      (t.prototype.calculateNewSizeFromAspectRatio = function (n, r, o, i) {
        var l = this.props,
          s = l.lockAspectRatio,
          a = l.lockAspectRatioExtraHeight,
          u = l.lockAspectRatioExtraWidth,
          d = typeof i.width > 'u' ? 10 : i.width,
          f = typeof o.width > 'u' || o.width < 0 ? n : o.width,
          p = typeof i.height > 'u' ? 10 : i.height,
          y = typeof o.height > 'u' || o.height < 0 ? r : o.height,
          w = a || 0,
          g = u || 0
        if (s) {
          var C = (p - w) * this.ratio + g,
            m = (y - w) * this.ratio + g,
            h = (d - g) / this.ratio + w,
            v = (f - g) / this.ratio + w,
            x = Math.max(d, C),
            E = Math.min(f, m),
            R = Math.max(p, h),
            P = Math.min(y, v)
          ;(n = ti(n, x, E)), (r = ti(r, R, P))
        } else (n = ti(n, d, f)), (r = ti(r, p, y))
        return { newWidth: n, newHeight: r }
      }),
      (t.prototype.setBoundingClientRect = function () {
        var n = 1 / (this.props.scale || 1)
        if (this.props.bounds === 'parent') {
          var r = this.parentNode
          if (r) {
            var o = r.getBoundingClientRect()
            ;(this.parentLeft = o.left * n), (this.parentTop = o.top * n)
          }
        }
        if (this.props.bounds && typeof this.props.bounds != 'string') {
          var i = this.props.bounds.getBoundingClientRect()
          ;(this.targetLeft = i.left * n), (this.targetTop = i.top * n)
        }
        if (this.resizable) {
          var l = this.resizable.getBoundingClientRect(),
            s = l.left,
            a = l.top,
            u = l.right,
            d = l.bottom
          ;(this.resizableLeft = s * n),
            (this.resizableRight = u * n),
            (this.resizableTop = a * n),
            (this.resizableBottom = d * n)
        }
      }),
      (t.prototype.onResizeStart = function (n, r) {
        if (!(!this.resizable || !this.window)) {
          var o = 0,
            i = 0
          if (
            (n.nativeEvent && OC(n.nativeEvent)
              ? ((o = n.nativeEvent.clientX), (i = n.nativeEvent.clientY))
              : n.nativeEvent &&
                ni(n.nativeEvent) &&
                ((o = n.nativeEvent.touches[0].clientX),
                (i = n.nativeEvent.touches[0].clientY)),
            this.props.onResizeStart && this.resizable)
          ) {
            var l = this.props.onResizeStart(n, r, this.resizable)
            if (l === !1) return
          }
          this.props.size &&
            (typeof this.props.size.height < 'u' &&
              this.props.size.height !== this.state.height &&
              this.setState({ height: this.props.size.height }),
            typeof this.props.size.width < 'u' &&
              this.props.size.width !== this.state.width &&
              this.setState({ width: this.props.size.width })),
            (this.ratio =
              typeof this.props.lockAspectRatio == 'number'
                ? this.props.lockAspectRatio
                : this.size.width / this.size.height)
          var s,
            a = this.window.getComputedStyle(this.resizable)
          if (a.flexBasis !== 'auto') {
            var u = this.parentNode
            if (u) {
              var d = this.window.getComputedStyle(u).flexDirection
              ;(this.flexDir = d.startsWith('row') ? 'row' : 'column'),
                (s = a.flexBasis)
            }
          }
          this.setBoundingClientRect(), this.bindEvents()
          var f = {
            original: {
              x: o,
              y: i,
              width: this.size.width,
              height: this.size.height,
            },
            isResizing: !0,
            backgroundStyle: yt(yt({}, this.state.backgroundStyle), {
              cursor: this.window.getComputedStyle(n.target).cursor || 'auto',
            }),
            direction: r,
            flexBasis: s,
          }
          this.setState(f)
        }
      }),
      (t.prototype.onMouseMove = function (n) {
        var r = this
        if (!(!this.state.isResizing || !this.resizable || !this.window)) {
          if (this.window.TouchEvent && ni(n))
            try {
              n.preventDefault(), n.stopPropagation()
            } catch {}
          var o = this.props,
            i = o.maxWidth,
            l = o.maxHeight,
            s = o.minWidth,
            a = o.minHeight,
            u = ni(n) ? n.touches[0].clientX : n.clientX,
            d = ni(n) ? n.touches[0].clientY : n.clientY,
            f = this.state,
            p = f.direction,
            y = f.original,
            w = f.width,
            g = f.height,
            C = this.getParentSize(),
            m = zC(
              C,
              this.window.innerWidth,
              this.window.innerHeight,
              i,
              l,
              s,
              a,
            )
          ;(i = m.maxWidth),
            (l = m.maxHeight),
            (s = m.minWidth),
            (a = m.minHeight)
          var h = this.calculateNewSizeFromDirection(u, d),
            v = h.newHeight,
            x = h.newWidth,
            E = this.calculateNewMaxFromBoundary(i, l)
          this.props.snap &&
            this.props.snap.x &&
            (x = zd(x, this.props.snap.x, this.props.snapGap)),
            this.props.snap &&
              this.props.snap.y &&
              (v = zd(v, this.props.snap.y, this.props.snapGap))
          var R = this.calculateNewSizeFromAspectRatio(
            x,
            v,
            { width: E.maxWidth, height: E.maxHeight },
            { width: s, height: a },
          )
          if (((x = R.newWidth), (v = R.newHeight), this.props.grid)) {
            var P = Od(
                x,
                this.props.grid[0],
                this.props.gridGap ? this.props.gridGap[0] : 0,
              ),
              k = Od(
                v,
                this.props.grid[1],
                this.props.gridGap ? this.props.gridGap[1] : 0,
              ),
              A = this.props.snapGap || 0,
              _ = A === 0 || Math.abs(P - x) <= A ? P : x,
              D = A === 0 || Math.abs(k - v) <= A ? k : v
            ;(x = _), (v = D)
          }
          var $ = { width: x - y.width, height: v - y.height }
          if (w && typeof w == 'string') {
            if (w.endsWith('%')) {
              var b = (x / C.width) * 100
              x = b + '%'
            } else if (w.endsWith('vw')) {
              var F = (x / this.window.innerWidth) * 100
              x = F + 'vw'
            } else if (w.endsWith('vh')) {
              var W = (x / this.window.innerHeight) * 100
              x = W + 'vh'
            }
          }
          if (g && typeof g == 'string') {
            if (g.endsWith('%')) {
              var b = (v / C.height) * 100
              v = b + '%'
            } else if (g.endsWith('vw')) {
              var F = (v / this.window.innerWidth) * 100
              v = F + 'vw'
            } else if (g.endsWith('vh')) {
              var W = (v / this.window.innerHeight) * 100
              v = W + 'vh'
            }
          }
          var I = {
            width: this.createSizeForCssProperty(x, 'width'),
            height: this.createSizeForCssProperty(v, 'height'),
          }
          this.flexDir === 'row'
            ? (I.flexBasis = I.width)
            : this.flexDir === 'column' && (I.flexBasis = I.height)
          var H = this.state.width !== I.width,
            N = this.state.height !== I.height,
            L = this.state.flexBasis !== I.flexBasis,
            z = H || N || L
          z &&
            mn.flushSync(function () {
              r.setState(I)
            }),
            this.props.onResize &&
              z &&
              this.props.onResize(n, p, this.resizable, $)
        }
      }),
      (t.prototype.onMouseUp = function (n) {
        var r,
          o,
          i = this.state,
          l = i.isResizing,
          s = i.direction,
          a = i.original
        if (!(!l || !this.resizable)) {
          var u = {
            width: this.size.width - a.width,
            height: this.size.height - a.height,
          }
          this.props.onResizeStop &&
            this.props.onResizeStop(n, s, this.resizable, u),
            this.props.size &&
              this.setState({
                width:
                  (r = this.props.size.width) !== null && r !== void 0
                    ? r
                    : 'auto',
                height:
                  (o = this.props.size.height) !== null && o !== void 0
                    ? o
                    : 'auto',
              }),
            this.unbindEvents(),
            this.setState({
              isResizing: !1,
              backgroundStyle: yt(yt({}, this.state.backgroundStyle), {
                cursor: 'auto',
              }),
            })
        }
      }),
      (t.prototype.updateSize = function (n) {
        var r, o
        this.setState({
          width: (r = n.width) !== null && r !== void 0 ? r : 'auto',
          height: (o = n.height) !== null && o !== void 0 ? o : 'auto',
        })
      }),
      (t.prototype.renderResizer = function (n) {
        var r = this,
          o = this.props,
          i = o.enable,
          l = o.handleStyles,
          s = o.handleClasses,
          a = o.handleWrapperStyle,
          u = o.handleWrapperClass,
          d = o.handleComponent
        if (!i) return null
        var f = n
          .filter(function (p) {
            return i[p] !== !1
          })
          .map(function (p) {
            return i[p] !== !1
              ? c.createElement(
                  _C,
                  {
                    key: p,
                    direction: p,
                    onResizeStart: r.onResizeStart,
                    replaceStyles: l && l[p],
                    className: s && s[p],
                  },
                  d && d[p] ? d[p] : null,
                )
              : null
          })
        return c.createElement('div', { className: u, style: a }, f)
      }),
      (t.prototype.render = function () {
        var n = this,
          r = Object.keys(this.props).reduce(function (l, s) {
            return MC.indexOf(s) !== -1 || (l[s] = n.props[s]), l
          }, {}),
          o = yt(
            yt(
              yt(
                {
                  position: 'relative',
                  userSelect: this.state.isResizing ? 'none' : 'auto',
                },
                this.props.style,
              ),
              this.sizeStyle,
            ),
            {
              maxWidth: this.props.maxWidth,
              maxHeight: this.props.maxHeight,
              minWidth: this.props.minWidth,
              minHeight: this.props.minHeight,
              boxSizing: 'border-box',
              flexShrink: 0,
            },
          )
        this.state.flexBasis && (o.flexBasis = this.state.flexBasis)
        var i = this.props.as || 'div'
        return c.createElement(
          i,
          yt({ style: o, className: this.props.className }, r, {
            ref: function (l) {
              l && (n.resizable = l)
            },
          }),
          this.state.isResizing &&
            c.createElement('div', { style: this.state.backgroundStyle }),
          this.renderResizer(['topLeft', 'top', 'topRight', 'left']),
          this.props.children,
          this.renderResizer(['right', 'bottomLeft', 'bottom', 'bottomRight']),
        )
      }),
      (t.defaultProps = {
        as: 'div',
        onResizeStart: function () {},
        onResize: function () {},
        onResizeStop: function () {},
        enable: {
          top: !0,
          right: !0,
          bottom: !0,
          left: !0,
          topRight: !0,
          bottomRight: !0,
          bottomLeft: !0,
          topLeft: !0,
        },
        style: {},
        grid: [1, 1],
        gridGap: [0, 0],
        lockAspectRatio: !1,
        lockAspectRatioExtraWidth: 0,
        lockAspectRatioExtraHeight: 0,
        scale: 1,
        resizeRatio: 1,
        snapGap: 0,
      }),
      t
    )
  })(c.PureComponent)
const jC = () => {
    const e = c.useRef(0),
      t = c.useCallback(() => (e.current = 0), [])
    return {
      onLoad: c.useCallback(r => {
        var i, l, s
        const o = r.target
        e.current > 0 &&
          ((i = o.contentWindow) == null || i.scrollTo(0, e.current)),
          (l = o.contentWindow) == null ||
            l.addEventListener('resize', () => {
              var a
              e.current =
                ((a = o.contentWindow) == null ? void 0 : a.scrollY) ?? 0
            }),
          (s = o.contentDocument) == null ||
            s.addEventListener('scroll', () => {
              var a
              e.current =
                ((a = o.contentWindow) == null ? void 0 : a.scrollY) ?? 0
            })
      }, []),
      reset: t,
    }
  },
  Md = () =>
    S.jsx('div', {
      style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 4,
        height: 64,
        borderRadius: 'var(--radius-2)',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'var(--gray-7)',
      },
    }),
  bC = ({ size: e, srcDoc: t, onSizeChange: n }) => {
    const { onLoad: r, reset: o } = jC()
    return (
      c.useEffect(() => {
        o()
      }, [e, o]),
      S.jsx('div', {
        style: {
          width: '100%',
          padding: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        children: S.jsx(DC, {
          size: { width: e.width, height: e.height },
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          resizeRatio: [2, 1],
          handleStyles: {
            topLeft: { display: 'none' },
            topRight: { display: 'none' },
            bottomLeft: { display: 'none' },
            bottomRight: { display: 'none' },
            left: { width: 24, left: -24 },
            right: { width: 24, right: -24 },
          },
          handleComponent: { left: S.jsx(Md, {}), right: S.jsx(Md, {}) },
          bounds: 'parent',
          onResizeStop: (i, l, s, a) => {
            n({ width: e.width + a.width, height: e.height + a.height })
          },
          children: S.jsx('iframe', {
            srcDoc: t,
            style: {
              border: 'none',
              width: e.width,
              height: e.height,
              borderRadius: 'var(--radius-1)',
            },
            onLoad: r,
          }),
        }),
      })
    )
  },
  vs = { width: 400 },
  Dd = { width: 800 },
  gs = 48,
  FC = ({ template: e }) => {
    const [t, n] = c.useState({
        width: vs.width,
        height: window.innerHeight - gs - 60,
      }),
      [r, o] = c.useState(0),
      i = c.useCallback(() => {
        n(d => ({ ...d, height: window.innerHeight - gs - 60 }))
      }, [])
    kC(i)
    const l = r >= e.previews.length ? e.previews[0] : e.previews[r]
    r >= e.previews.length && o(0),
      c.useEffect(() => {
        o(0)
      }, [e])
    const s = d => {
        const f = e.previews.findIndex(p => p.id === d)
        f !== -1 && o(f)
      },
      a = c.useMemo(
        () =>
          t.width === vs.width
            ? 'mobile'
            : t.width === Dd.width
              ? 'desktop'
              : 'custom',
        [t],
      ),
      u = d => {
        switch (d) {
          case 'mobile': {
            n(f => ({ ...f, ...vs }))
            break
          }
          case 'desktop': {
            n(f => ({ ...f, ...Dd }))
            break
          }
          case 'custom': {
            n(f => {
              const p = Math.random() < 0.5 ? -1 : 1
              return { ...f, width: f.width + 100 * p }
            })
            break
          }
        }
      }
    return S.jsxs(we, {
      direction: 'column',
      width: '100%',
      height: '100vh',
      overflowY: 'auto',
      children: [
        S.jsx(Fu, {
          width: '100%',
          position: 'sticky',
          top: '0',
          style: {
            height: gs,
            backgroundColor: 'var(--color-background)',
            borderBottom: '1px solid var(--gray-3)',
            zIndex: 5,
          },
          children: S.jsxs(we, {
            width: '100%',
            py: '3',
            px: '4',
            justify: 'between',
            align: 'center',
            gap: '3',
            direction: 'row',
            children: [
              S.jsx(zt, {
                size: '2',
                weight: 'medium',
                children: e.title ?? e.path,
              }),
              S.jsxs(we, {
                gap: '5',
                align: 'center',
                children: [
                  S.jsxs(we, {
                    gap: '2',
                    align: 'center',
                    children: [
                      S.jsx(zt, {
                        size: '1',
                        style: { color: 'var(--gray-11)' },
                        children: 'Preview',
                      }),
                      S.jsxs(wv, {
                        size: '1',
                        onValueChange: s,
                        value: l.id,
                        children: [
                          S.jsx(Sv, {}),
                          S.jsx(xv, {
                            children: S.jsx(Ev, {
                              children: e.previews.map(d =>
                                S.jsx(
                                  Cv,
                                  { value: d.id, children: d.id },
                                  d.id,
                                ),
                              ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  S.jsxs(we, {
                    gap: '2',
                    align: 'center',
                    children: [
                      S.jsxs(zt, {
                        size: '1',
                        style: {
                          minWidth: 64,
                          textAlign: 'right',
                          color: 'var(--gray-11)',
                        },
                        children: [t.width, 'x', t.height],
                      }),
                      S.jsxs(Um, {
                        size: '1',
                        onValueChange: u,
                        value: a,
                        children: [
                          S.jsx(wi, { value: 'custom', children: 'Custom' }),
                          S.jsx(wi, { value: 'mobile', children: 'Mobile' }),
                          S.jsx(wi, { value: 'desktop', children: 'Desktop' }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        S.jsx(bC, { size: t, onSizeChange: n, srcDoc: l.html ?? '' }),
      ],
    })
  },
  $C = 207.18 / 112.77,
  jd = 240,
  bd = ({ hasTemplates: e, workspacePath: t }) =>
    S.jsxs(we, {
      direction: 'column',
      width: '100%',
      height: '100vh',
      align: 'center',
      justify: 'center',
      gap: '7',
      children: [
        S.jsx('svg', {
          'data-name': 'Layer 1',
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 207.18 112.77',
          width: jd,
          height: jd / $C,
          children: S.jsx('path', {
            d: 'M207.08 17.04c-2.7-1.64-13.4-.41-17.82-.28-3.36.14-7.42.83-11 1-.86 0-3-.22-5.15-.34s-4.21-.13-4.92.45a1.1 1.1 0 0 0-.25.23.44.44 0 0 0-.14.35s0 .05 0 .07a24.21 24.21 0 0 0 1.14 8.21c-23.47 6.9-47.41 13.35-71.51 17-4.7.69-9.42 1.24-14.15 1.62s-9.48.5-14.2.39a90.47 90.47 0 0 1-27.7-4.67c-1.11-.38-2.18-.83-3.27-1.25a29.81 29.81 0 0 1-3.16-1.37 20.42 20.42 0 0 1-5.4-3.73 8.74 8.74 0 0 1-2.69-5.16 10.59 10.59 0 0 1 1.19-5.8 22.81 22.81 0 0 1 3.71-5.4 38.51 38.51 0 0 1 4.75-4.72 42 42 0 0 1 11.6-6.68l1.53-.58.76-.29.79-.21L54.34 5l3.21-.59.8-.15.82-.08 1.62-.15 1.63-.16h4.07l.82.07 3.24.28 3.2.58a40.6 40.6 0 0 1 12 4.7l2.65 1.84a9.43 9.43 0 0 1 1.28 1c.41.35.84.67 1.22 1a33.46 33.46 0 0 1 4.35 4.78 41.47 41.47 0 0 1 8 24.57c.07 8.79-2.59 17.74-8.15 24.53a37.59 37.59 0 0 1-9.34 7.91 78.67 78.67 0 0 1-11.53 5.68c-8.15 3.29-16.62 6.4-25 9.48-16.75 6.19-33.25 12.28-47.87 20-2.93 1.54-1 3.39 2.14 2 16.68-7.09 33.79-13.24 50.91-19.73q6.4-2.43 12.81-4.94c4.26-1.7 8.53-3.35 12.73-5.31a63.06 63.06 0 0 0 12-7.13 36.33 36.33 0 0 0 9.41-10.67 44 44 0 0 0 5.23-27.82 43.2 43.2 0 0 0-12.28-25.37A41.38 41.38 0 0 0 68.63.15a47.29 47.29 0 0 0-14.09.89 50.4 50.4 0 0 0-13.29 4.81 46.82 46.82 0 0 0-11.07 8.46 44.07 44.07 0 0 0-4.36 5.57 18.37 18.37 0 0 0-2.71 6.9 12 12 0 0 0 .06 4 11.88 11.88 0 0 0 1.43 3.74 16.93 16.93 0 0 0 5.35 5.4 33.38 33.38 0 0 0 6.41 3.26l3.26 1.26 3.32 1.08a89.3 89.3 0 0 0 13.61 3 121.41 121.41 0 0 0 13.86 1 179.51 179.51 0 0 0 27.47-2 487.07 487.07 0 0 0 72.78-16.24c.36.7.73 1.4 1.13 2.08.91 1.53 1.08 3.71 3.74 3.51a8.26 8.26 0 0 0 2.25-.54 37.68 37.68 0 0 0 6.41-3.32c2.09-1.31 4.1-2.7 5.86-3.76.87-.55 5.55-3.28 9.74-6.09s8.07-5.65 7.29-6.12Z',
            fill: 'var(--gray-3)',
          }),
        }),
        S.jsxs(we, {
          gap: '1',
          direction: 'column',
          align: 'center',
          children: [
            S.jsx(Sh, {
              style: { color: 'var(--gray-8)' },
              size: '3',
              children: e
                ? 'Welcome back to the studio!'
                : 'Welcome to the studio!',
            }),
            e
              ? S.jsx(zt, {
                  style: { color: 'var(--gray-8)' },
                  size: '2',
                  children: 'Select a template to get started',
                })
              : S.jsxs(S.Fragment, {
                  children: [
                    S.jsx(zt, {
                      style: { color: 'var(--gray-8)' },
                      size: '2',
                      children:
                        'Create a MJML template in the following folder to get started:',
                    }),
                    S.jsx(pm, { size: '2', children: t }),
                  ],
                }),
          ],
        }),
      ],
    }),
  BC = ({ children: e }) =>
    S.jsx(Fu, {
      width: '270px',
      height: '100vh',
      flexShrink: '0',
      overflowX: 'hidden',
      overflowY: 'auto',
      style: { borderRight: '1px solid var(--gray-3)' },
      children: S.jsxs(we, {
        px: '3',
        pt: '0',
        pb: '5',
        direction: 'column',
        children: [
          S.jsxs(we, {
            position: 'sticky',
            style: { zIndex: 5, backgroundColor: 'var(--color-background)' },
            top: '0',
            direction: 'row',
            align: 'center',
            gap: '2',
            pt: '4',
            pb: '5',
            px: '2',
            children: [
              S.jsxs('svg', {
                width: '20',
                height: '20',
                viewBox: '0 0 200 200',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: [
                  S.jsx('path', {
                    d: 'M0 100C0 24 24 0 100 0s100 24 100 100-24 100-100 100S0 176 0 100Z',
                    fill: 'var(--gray-contrast)',
                  }),
                  S.jsx('path', {
                    fill: 'var(--color-background)',
                    d: 'M42.4 94.8V42h52.8v52.8z',
                  }),
                  S.jsx('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M104.8 42v120c33.137 0 60-26.863 60-60s-26.863-60-60-60ZM63.399 161.509l33.807-22.639C94.554 152.06 82.826 162 68.76 162c-1.832 0-3.624-.168-5.361-.491ZM47.085 152.34l47.675-31.926a28.452 28.452 0 0 1 2.841 9.677L55.05 158.586a29.079 29.079 0 0 1-7.964-6.246ZM90.842 114.523l-47.8 32.011A28.454 28.454 0 0 1 40 136.99l43.073-28.845a29.106 29.106 0 0 1 7.768 6.378ZM40.158 128.37c2.314-13.606 14.24-23.97 28.602-23.97 2.13 0 4.206.228 6.206.661L40.158 128.37Z',
                    fill: 'var(--color-background)',
                  }),
                ],
              }),
              S.jsx(zt, {
                size: '2',
                weight: 'medium',
                children: 'Recontent Studio',
              }),
            ],
          }),
          e,
        ],
      }),
    }),
  Fd = '',
  WC = () => {
    const [e, t] = c.useState(''),
      [n, r] = c.useState([]),
      o = c.useRef(!1),
      [i, l] = c.useState(!1)
    return (
      c.useEffect(() => {
        if (o.current) return
        ;(o.current = !0),
          fetch([Fd, '/templates'].join(''))
            .then(a => a.json())
            .then(a => {
              r(a.data), t(a.workspacePath), l(!0)
            })
        const s = new EventSource([Fd, '/sync'].join(''))
        s.addEventListener('error', () => {}),
          (s.onmessage = a => {
            const u = JSON.parse(a.data)
            switch (u.type) {
              case 'template-updated': {
                r(d => {
                  const f = u.template,
                    p = d.findIndex(y => y.path === f.path)
                  return p === -1
                    ? [...d, f]
                    : [...d.slice(0, p), f, ...d.slice(p + 1)]
                })
                break
              }
              case 'template-deleted': {
                r(d => {
                  const f = u.template,
                    p = d.findIndex(y => y.path === f.path)
                  return p === -1 ? d : [...d.slice(0, p), ...d.slice(p + 1)]
                })
                break
              }
            }
          })
      }, []),
      { initialized: i, workspacePath: e, templates: n }
    )
  },
  HC = () => {
    const { workspacePath: e, templates: t, initialized: n } = WC(),
      [r, o] = c.useState(null)
    c.useEffect(() => {
      t.length > 0 && o(null)
    }, [t.length])
    const i = c.useMemo(() => (r === null ? null : t[r]), [t, r])
    return n
      ? t.length === 0
        ? S.jsx(bd, { hasTemplates: !1, workspacePath: e })
        : S.jsxs(PC, {
            children: [
              S.jsx(BC, {
                children: S.jsx(we, {
                  direction: 'column',
                  gap: '3',
                  children: t.map((l, s) =>
                    S.jsx(
                      Dm,
                      {
                        value: (i == null ? void 0 : i.path) ?? '',
                        size: '1',
                        variant: 'surface',
                        onValueChange: () => o(s),
                        children: S.jsx(jm, {
                          value: l.path,
                          children: S.jsxs(we, {
                            width: '100%',
                            direction: 'column',
                            children: [
                              S.jsx(zt, {
                                weight: 'medium',
                                size: '2',
                                style: {
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                },
                                children: l.title ?? 'Untitled',
                              }),
                              S.jsx(zt, {
                                size: '1',
                                style: {
                                  color: 'var(--gray-10)',
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                },
                                children: l.path,
                              }),
                            ],
                          }),
                        }),
                      },
                      l.path,
                    ),
                  ),
                }),
              }),
              S.jsx(we, {
                flexGrow: '1',
                height: '100%',
                children: i
                  ? S.jsx(FC, { template: i })
                  : S.jsx(bd, { hasTemplates: !0, workspacePath: e }),
              }),
            ],
          })
      : S.jsx(we, {
          width: '100%',
          height: '100vh',
          align: 'center',
          justify: 'center',
          children: S.jsx(em, {}),
        })
  }
Pv(document.getElementById('root')).render(
  S.jsx(c.StrictMode, {
    children: S.jsx(Du, {
      appearance: 'dark',
      radius: 'large',
      accentColor: 'blue',
      grayColor: 'slate',
      children: S.jsx(HC, {}),
    }),
  }),
)
