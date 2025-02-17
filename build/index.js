(() => {
let t = { 9669:(t, r, o) => {
      t.exports = o(1609);
    },
    5448: (t, r, o) => {
'use strict'; let e = o(4867); let a = o(6026); let i = o(4372); let n = o(5327); let d = o(4097); let l = o(4109); let s = o(7985); let m = o(7874); let p = o(2648); let b = o(644); let c = o(205); t.exports = function (t) {
        return new Promise(function(r, o) {
          var g,
            f = t.data,
            u = t.headers,
            v = t.responseType;
          function h() {
            t.cancelToken && t.cancelToken.unsubscribe(g),
              t.signal && t.signal.removeEventListener('abort', g);
          }
          e.isFormData(f) &&
            e.isStandardBrowserEnv() &&
            delete u['Content-Type'];
          var x = new XMLHttpRequest();
          if (t.auth) {
            var w = t.auth.username || '',
              y = t.auth.password
                ? unescape(encodeURIComponent(t.auth.password))
                : '';
            u.Authorization = 'Basic ' + btoa(w + ':' + y);
          }
          var k = d(t.baseURL, t.url);
          function z() {
            if (x) {
              var e =
                  'getAllResponseHeaders' in x
                    ? l(x.getAllResponseHeaders())
                    : null,
                i = {
                  data:
                    v && 'text' !== v && 'json' !== v
                      ? x.response
                      : x.responseText,
                  status: x.status,
                  statusText: x.statusText,
                  headers: e,
                  config: t,
                  request: x
                };
              a(
                function(t) {
                  r(t), h();
                },
                function(t) {
                  o(t), h();
                },
                i
              ),
                (x = null);
            }
          }
          if (
            (x.open(
              t.method.toUpperCase(),
              n(k, t.params, t.paramsSerializer),
              !0
            ),
            (x.timeout = t.timeout),
            'onloadend' in x
              ? (x.onloadend = z)
              : (x.onreadystatechange = function() {
                  x &&
                    4 === x.readyState &&
                    (0 !== x.status ||
                      (x.responseURL &&
                        0 === x.responseURL.indexOf('file:'))) &&
                    setTimeout(z);
                }),
            (x.onabort = function() {
              x &&
                (o(new p('Request aborted', p.ECONNABORTED, t, x)), (x = null));
            }),
            (x.onerror = function() {
              o(new p('Network Error', p.ERR_NETWORK, t, x, x)), (x = null);
            }),
            (x.ontimeout = function() {
              var r = t.timeout
                  ? 'timeout of ' + t.timeout + 'ms exceeded'
                  : 'timeout exceeded',
                e = t.transitional || m;
              t.timeoutErrorMessage && (r = t.timeoutErrorMessage),
                o(
                  new p(
                    r,
                    e.clarifyTimeoutError ? p.ETIMEDOUT : p.ECONNABORTED,
                    t,
                    x
                  )
                ),
                (x = null);
            }),
            e.isStandardBrowserEnv())
          ) {
            var _ =
              (t.withCredentials || s(k)) && t.xsrfCookieName
                ? i.read(t.xsrfCookieName)
                : void 0;
            _ && (u[t.xsrfHeaderName] = _);
          }
          'setRequestHeader' in x &&
            e.forEach(u, function(t, r) {
              void 0 === f && 'content-type' === r.toLowerCase()
                ? delete u[r]
                : x.setRequestHeader(r, t);
            }),
            e.isUndefined(t.withCredentials) ||
              (x.withCredentials = !!t.withCredentials),
            v && 'json' !== v && (x.responseType = t.responseType),
            'function' == typeof t.onDownloadProgress &&
              x.addEventListener('progress', t.onDownloadProgress),
            'function' == typeof t.onUploadProgress &&
              x.upload &&
              x.upload.addEventListener('progress', t.onUploadProgress),
            (t.cancelToken || t.signal) &&
              ((g = function(t) {
                x &&
                  (o(!t || (t && t.type) ? new b() : t), x.abort(), (x = null));
              }),
              t.cancelToken && t.cancelToken.subscribe(g),
              t.signal &&
                (t.signal.aborted
                  ? g()
                  : t.signal.addEventListener('abort', g))),
            f || (f = null);
          var j = c(k);
          j && -1 === ['http', 'https', 'file'].indexOf(j)
            ? o(new p('Unsupported protocol ' + j + ':', p.ERR_BAD_REQUEST, t))
            : x.send(f);
        });
      };
    },
    1609: (t, r, o) => {
'use strict'; let e = o(4867); let a = o(1849); let i = o(321); let n = o(7185); let d = (function t(r) {
var o = new i(r); var d = a(i.prototype.request, o); return e.extend(d, i.prototype, o), e.extend(d, o), d.create = function (o) {
return t(n(r, o))
}, d
}(o(5546))); d.Axios = i, d.CanceledError = o(644), d.CancelToken = o(4972), d.isCancel = o(6502), d.VERSION = o(7288).version, d.toFormData = o(7675), d.AxiosError = o(2648), d.Cancel = d.CanceledError, d.all = function (t) {
          return Promise.all(t);
        }),
        (d.spread = o(8713)),
        (d.isAxiosError = o(6268)),
        (t.exports = d),
        (t.exports.default = d);
    },
    4972: (t, r, o) => {
'use strict'; let e = o(644); function a(t) {
        if ('function' != typeof t)
          throw new TypeError('executor must be a function.');
        var r;
        this.promise = new Promise(function(t) {
          r = t;
        });
        var o = this;
        this.promise.then(function(t) {
          if (o._listeners) {
            var r,
              e = o._listeners.length;
            for (r = 0; r < e; r++) o._listeners[r](t);
            o._listeners = null;
          }
        }),
          (this.promise.then = function(t) {
let r; let e = new Promise(((t) => {o.subscribe(t),r=t})).then(t); return e.cancel = function () {
                o.unsubscribe(r);
              }),
              e;
            );
          }),
          t(function(t) {
            o.reason || ((o.reason = new e(t)), r(o.reason));
          });
      }
      (a.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason;
      }),
        (a.prototype.subscribe = function(t) {
          this.reason
            ? t(this.reason)
            : this._listeners
            ? this._listeners.push(t)
            : (this._listeners = [t]);
        }),
        (a.prototype.unsubscribe = function(t) {
          if (this._listeners) {
let r = this._listeners.indexOf(t); r !== -1 && this._listeners.splice(r, 1);
          }
        }),
        (a.source = function() {
let t; return { token:new a(((r) => {t=r})), cancel:t };
        }),
        (t.exports = a);
    },
    644: (t, r, o) => {
'use strict'; let e = o(2648); function a(t) {
        e.call(this, null == t ? 'canceled' : t, e.ERR_CANCELED),
          (this.name = 'CanceledError');
      }
      o(4867).inherits(a, e, { __CANCEL__: !0 }), (t.exports = a);
    },
    6502: t => {
'use strict'; t.exports = function (t) {
        return !(!t || !t.__CANCEL__);
      };
    },
    321: (t, r, o) => {
'use strict'; let e = o(4867); let a = o(5327); let i = o(782); let n = o(3572); let d = o(7185); let l = o(4097); let s = o(4875); let m = s.validators; function p(t) {
        (this.defaults = t),
          (this.interceptors = { request: new i(), response: new i() });
      }
      (p.prototype.request = function(t, r) {
'string'===typeof t ? (r = r || {}).url = t : r = t || {}, (r = d(this.defaults, r)).method ? r.method = r.method.toLowerCase() : this.defaults.method ? r.method = this.defaults.method.toLowerCase() : r.method = 'get'; let o = r.transitional; void 0 !== o && s.assertOptions(o, { silentJSONParsing:m.transitional(m.boolean), forcedJSONParsing:m.transitional(m.boolean), clarifyTimeoutError:m.transitional(m.boolean) }, !1); let e = []; let a = !0; this.interceptors.request.forEach((t) => {"function"==typeof t.runWhen&&!1===t.runWhen(r)||(a=a&&t.synchronous,e.unshift(t.fulfilled,t.rejected))}); let i; let l = []; if (this.interceptors.response.forEach((t) => {l.push(t.fulfilled,t.rejected)}), !a) {
let p = [n, void 0]; for (Array.prototype.unshift.apply(p, e), p = p.concat(l), i = Promise.resolve(r); p.length;)i = i.then(p.shift(), p.shift()); return i;
        }
        for (var b = r; e.length; ) {
let c = e.shift(); let g = e.shift(); try {
            b = c(b);
          } catch (t) {
            g(t);
            break;
          }
        }
        try {
          i = n(b);
        } catch (t) {
          return Promise.reject(t);
        }
        for (; l.length; ) i = i.then(l.shift(), l.shift());
        return i;
      }),
        (p.prototype.getUri = function(t) {
          t = d(this.defaults, t);
          var r = l(t.baseURL, t.url);
          return a(r, t.params, t.paramsSerializer);
        }),
        e.forEach(['delete', 'get', 'head', 'options'], t => {
          p.prototype[t] = function(r, o) {
            return this.request(
              d(o || {}, { method: t, url: r, data: (o || {}).data })
            );
          };
        }),
        e.forEach(['post', 'put', 'patch'], t => {
          function r(r) {
            return function(o, e, a) {
              return this.request(
                d(a || {}, {
                  method: t,
                  headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
                  url: o,
                  data: e
                })
              );
            };
          }
          (p.prototype[t] = r()), (p.prototype[t + 'Form'] = r(!0));
        }),
        (t.exports = p);
    },
    2648: (t, r, o) => {
'use strict'; let e = o(4867); function a(t, r, o, e, a) {
        Error.call(this),
          (this.message = t),
          (this.name = 'AxiosError'),
          r && (this.code = r),
          o && (this.config = o),
          e && (this.request = e),
          a && (this.response = a);
      }
      e.inherits(a, Error, {
        toJSON: function() {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status:
              this.response && this.response.status
                ? this.response.status
                : null
          };
        }
      });
      var i = a.prototype;
      var n = {};
      [
        'ERR_BAD_OPTION_VALUE',
        'ERR_BAD_OPTION',
        'ECONNABORTED',
        'ETIMEDOUT',
        'ERR_NETWORK',
        'ERR_FR_TOO_MANY_REDIRECTS',
        'ERR_DEPRECATED',
        'ERR_BAD_RESPONSE',
        'ERR_BAD_REQUEST',
        'ERR_CANCELED'
      ].forEach(function(t) {
        n[t] = { value: t };
      }),
        Object.defineProperties(a, n),
        Object.defineProperty(i, 'isAxiosError', { value: !0 }),
        (a.from = function(t, r, o, n, d, l) {
let s = Object.create(i); return e.toFlatObject(t, s, (t) => {return t!==Error.prototype}), a.call(s, t.message, r, o, n, d), s.name = t.name, l && Object.assign(s, l), s;
          );
        }),
        (t.exports = a);
    },
    782: (t, r, o) => {
'use strict'; let e = o(4867); function a() {
        this.handlers = [];
      }
      (a.prototype.use = function(t, r, o) {
        return (
          this.handlers.push({
            fulfilled: t,
            rejected: r,
            synchronous: !!o && o.synchronous,
            runWhen: o ? o.runWhen : null
          }),
          this.handlers.length - 1;
        );
      }),
        (a.prototype.eject = function(t) {
          this.handlers[t] && (this.handlers[t] = null);
        }),
        (a.prototype.forEach = function(t) {
          e.forEach(this.handlers, r => {
            null !== r && t(r);
          });
        }),
        (t.exports = a);
    },
    4097: (t, r, o) => {
'use strict'; let e = o(1793); let a = o(7303); t.exports = function (t, r) {
        return t && !e(r) ? a(t, r) : r;
      };
    },
    3572: (t, r, o) => {
'use strict'; let e = o(4867); let a = o(8527); let i = o(6502); let n = o(5546); let d = o(644); function l(t) {
        if (
          (t.cancelToken && t.cancelToken.throwIfRequested(),
          t.signal && t.signal.aborted)
        )
          throw new d();
      }
      t.exports = function(t) {
        return (
          l(t),
          (t.headers = t.headers || {}),
          (t.data = a.call(t, t.data, t.headers, t.transformRequest)),
          (t.headers = e.merge(
            t.headers.common || {},
            t.headers[t.method] || {},
            t.headers
          )),
          e.forEach(
            ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
            r => {
              delete t.headers[r];
            }
          ),
          (t.adapter || n.adapter)(t).then(
            function(r) {
              return (
                l(t),
                (r.data = a.call(t, r.data, r.headers, t.transformResponse)),
                r
              );
            },
            r => {
              return (
                i(r) ||
                  (l(t),
                  r &&
                    r.response &&
                    (r.response.data = a.call(
                      t,
                      r.response.data,
                      r.response.headers,
                      t.transformResponse
                    ))),
                Promise.reject(r)
              );
            }
          )
        );
      };
    },
    7185: (t, r, o) => {
'use strict'; let e = o(4867); t.exports = function (t, r) {
        r = r || {};
        var o = {};
        function a(t, r) {
          return e.isPlainObject(t) && e.isPlainObject(r)
            ? e.merge(t, r)
            : e.isPlainObject(r)
            ? e.merge({}, r)
            : e.isArray(r)
            ? r.slice()
            : r;
        }
        function i(o) {
          return e.isUndefined(r[o])
            ? e.isUndefined(t[o])
              ? void 0
              : a(void 0, t[o])
            : a(t[o], r[o]);
        }
        function n(t) {
          if (!e.isUndefined(r[t])) return a(void 0, r[t]);
        }
        function d(o) {
          return e.isUndefined(r[o])
            ? e.isUndefined(t[o])
              ? void 0
              : a(void 0, t[o])
            : a(void 0, r[o]);
        }
        function l(o) {
          return o in r ? a(t[o], r[o]) : o in t ? a(void 0, t[o]) : void 0;
        }
        var s = {
          url: n,
          method: n,
          data: n,
          baseURL: d,
          transformRequest: d,
          transformResponse: d,
          paramsSerializer: d,
          timeout: d,
          timeoutMessage: d,
          withCredentials: d,
          adapter: d,
          responseType: d,
          xsrfCookieName: d,
          xsrfHeaderName: d,
          onUploadProgress: d,
          onDownloadProgress: d,
          decompress: d,
          maxContentLength: d,
          maxBodyLength: d,
          beforeRedirect: d,
          transport: d,
          httpAgent: d,
          httpsAgent: d,
          cancelToken: d,
          socketPath: d,
          responseEncoding: d,
          validateStatus: l
        };
        return (
          e.forEach(Object.keys(t).concat(Object.keys(r)), t => {
            var r = s[t] || i,
              a = r(t);
            (e.isUndefined(a) && r !== l) || (o[t] = a);
          }),
          o;
        );
      };
    },
    6026: (t, r, o) => {
'use strict'; let e = o(2648); t.exports = function (t, r, o) {
let a = o.config.validateStatus; o.status && a && !a(o.status) ? r(new e(`Request failed with status code ${o.status}`, [e.ERR_BAD_REQUEST, e.ERR_BAD_RESPONSE][Math.floor(o.status / 100) - 4], o.config, o.request, o)) : t(o);
      };
    },
    8527: (t, r, o) => {
'use strict'; let e = o(4867); let a = o(5546); t.exports = function (t, r, o) {
let i = this || a; return e.forEach(o, (o) => {t=o.call(i,t,r)}), t;
        );
      };
    },
    5546: (t, r, o) => {
'use strict'; let e = o(4867); let a = o(6016); let i = o(2648); let n = o(7874); let d = o(7675); let l = { 'Content-Type':'application/x-www-form-urlencoded' }; function s(t, r) {
        !e.isUndefined(t) &&
          e.isUndefined(t['Content-Type']) &&
          (t['Content-Type'] = r);
      }
      var m;
      var p = {
        transitional: n,
        adapter:
          (('undefined' != typeof XMLHttpRequest ||
            ('undefined' !== typeof process &&
              '[object process]' ===
                Object.prototype.toString.call(process))) &&
            (m = o(5448)),
          m),
        transformRequest: [
          function(t, r) {
            if (
              (a(r, 'Accept'),
              a(r, 'Content-Type'),
              e.isFormData(t) ||
                e.isArrayBuffer(t) ||
                e.isBuffer(t) ||
                e.isStream(t) ||
                e.isFile(t) ||
                e.isBlob(t))
            )
              return t;
            if (e.isArrayBufferView(t)) return t.buffer;
            if (e.isURLSearchParams(t))
              return (
                s(r, 'application/x-www-form-urlencoded;charset=utf-8'),
                t.toString()
              );
            var o;
            var i = e.isObject(t);
            var n = r && r['Content-Type'];
            if ((o = e.isFileList(t)) || (i && 'multipart/form-data' === n)) {
let l = this.env && this.env.FormData; return d(o ? { 'files[]':t } : t, l && new l());
            }
            return i || 'application/json' === n
              ? (s(r, 'application/json'),
                (function(t, r, o) {
                  if (e.isString(t))
                    {try {
return (0, JSON.parse)(t), e.trim(t)
} catch (t) {
if ('SyntaxError'!==t.name) throw t
}} return (0, JSON.stringify)(t);
                })(t))
              : t;
          }
        ],
        transformResponse: [
          function(t) {
let r = this.transitional || p.transitional; let o = r && r.silentJSONParsing; let a = r && r.forcedJSONParsing; let n = !o && 'json' === this.responseType; if (n || a && e.isString(t) && t.length) {try {
return JSON.parse(t)
} catch (t) {
if (n) {
if ('SyntaxError'===t.name) throw i.from(t, i.ERR_BAD_RESPONSE, this, null, this.response); throw t
}
}} return t;
          }
        ],
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: o(1623) },
        validateStatus: function(t) {
          return t >= 200 && t < 300;
        },
        headers: { common: { Accept: 'application/json, text/plain, */*' } }
      };
      e.forEach(['delete', 'get', 'head'], t => {
        p.headers[t] = {};
      }),
        e.forEach(['post', 'put', 'patch'], t => {
          p.headers[t] = e.merge(l);
        }),
        (t.exports = p);
    },
    7874: t => {
'use strict'; t.exports = { silentJSONParsing:!0, forcedJSONParsing:!0, clarifyTimeoutError:!1 };
    },
    7288: t => {
      t.exports = { version: '0.27.2' };
    },
    1849: t => {
'use strict'; t.exports = function (t, r) {
        return function() {
          for (var o = new Array(arguments.length), e = 0; e < o.length; e++)
            o[e] = arguments[e];
          return t.apply(r, o);
        };
      };
    },
    5327: (t, r, o) => {
'use strict'; let e = o(4867); function a(t) {
        return encodeURIComponent(t)
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',')
          .replace(/%20/g, '+')
          .replace(/%5B/gi, '[')
          .replace(/%5D/gi, ']');
      }
      t.exports = function(t, r, o) {
        if (!r) return t;
        var i;
        if (o) i = o(r);
        else if (e.isURLSearchParams(r)) i = r.toString();
        else {
let n = []; e.forEach(r, (t,r) => {null!=t&&(e.isArray(t)?r+="[]":t=[t],e.forEach(t,(function(t){e.isDate(t)?t=t.toISOString():e.isObject(t)&&(t=JSON.stringify(t)),n.push(a(r)+"="+a(t))})))}), i = n.join('&');
        }
        if (i) {
let d = t.indexOf('#'); d !== -1 && (t = t.slice(0, d)), t += (t.indexOf('?') === -1 ? '?':'&') + i;
        }
        return t;
      };
    },
    7303: t => {
'use strict'; t.exports = function (t, r) {
        return r ? t.replace(/\/+$/, '') + '/' + r.replace(/^\/+/, '') : t;
      };
    },
    4372: (t, r, o) => {
'use strict'; let e = o(4867); t.exports = e.isStandardBrowserEnv() ? { write (t, r, o, a, i, n) {
var d = []; d.push(`${t}=${encodeURIComponent(r)}`), e.isNumber(o) && d.push('expires='+new Date(o).toGMTString()), e.isString(a) && d.push('path='+a), e.isString(i) && d.push('domain='+i), !0 === n && d.push('secure'), document.cookie = d.join('; ')
}, read (t) {
var r = document.cookie.match(new RegExp('(^|;\\s*)('+t + ")=([^;]*)")); return r ? decodeURIComponent(r[3]):null
}, remove (t) {
this.write(t, "", Date.now() - 864e5)
} } : { write () {}, read () {
return null
}, remove () {} };
    },
    1793: t => {
'use strict'; t.exports = function (t) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
      };
    },
    6268: (t, r, o) => {
'use strict'; let e = o(4867); t.exports = function (t) {
        return e.isObject(t) && !0 === t.isAxiosError;
      };
    },
    7985: (t, r, o) => {
'use strict'; let e = o(4867); t.exports = e.isStandardBrowserEnv() ? (function () {
var t; var r=/(msie|trident)/i.test(navigator.userAgent); var o = document.createElement('a'); function a(t) {
var e = t; return r && (o.setAttribute('href', e), e = o.href), o.setAttribute('href', e), { href:o.href, protocol:o.protocol ? o.protocol.replace(/:$/, ""):'', host:o.host, search:o.search ? o.search.replace(/^\?/, ""):'', hash:o.hash ? o.hash.replace(/^#/, ""):'', hostname:o.hostname, port:o.port, pathname:'/'===o.pathname.charAt(0) ? o.pathname:'/'+o.pathname }
} return t = a(window.location.href), function (r) {
var o = e.isString(r) ? a(r):r; return o.protocol === t.protocol && o.host === t.host
}
}()):function () {
            return !0;
          };
    },
    6016: (t, r, o) => {
'use strict'; let e = o(4867); t.exports = function (t, r) {
        e.forEach(t, (o, e) => {
          e !== r &&
            e.toUpperCase() === r.toUpperCase() &&
            ((t[r] = o), delete t[e]);
        });
      };
    },
    1623: t => {
      t.exports = null;
    },
    4109: (t, r, o) => {
'use strict'; let e = o(4867); let a = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent']; t.exports = function (t) {
let r; let o; let i; let n = {}; return t ? (e.forEach(t.split('\n'), (t) => {if(i=t.indexOf(":"),r=e.trim(t.substr(0,i)).toLowerCase(),o=e.trim(t.substr(i+1)),r){if(n[r]&&a.indexOf(r)>=0)return;n[r]="set-cookie"===r?(n[r]?n[r]:[]).concat([o]):n[r]?n[r]+", "+o:o}}), n) : n;
      };
    },
    205: t => {
'use strict'; t.exports = function (t) {
let r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t); return r && r[1] || ''
      };
    },
    8713: t => {
'use strict'; t.exports = function (t) {
        return function(r) {
          return t.apply(null, r);
        };
      };
    },
    7675: (t, r, o) => {
'use strict'; let e = o(4867); t.exports = function (t, r) {
        r = r || new FormData();
        var o = [];
        function a(t) {
          return t === null
            ? ''
            : e.isDate(t)
            ? t.toISOString()
            : e.isArrayBuffer(t) || e.isTypedArray(t)
            ? 'function' === typeof Blob
              ? new Blob([t])
              : Buffer.from(t)
            : t;
        }
        return (
          (function t(i, n) {
            if (e.isPlainObject(i) || e.isArray(i)) {
              if (-1 !== o.indexOf(i))
                throw Error('Circular reference detected in ' + n);
              o.push(i),
                e.forEach(i, function(o, i) {
                  if (!e.isUndefined(o)) {
                    var d,
                      l = n ? n + '.' + i : i;
                    if (o && !n && 'object' == typeof o)
                      if (e.endsWith(i, '{}')) o = JSON.stringify(o);
                      else if (e.endsWith(i, '[]') && (d = e.toArray(o)))
                        return void d.forEach(function(t) {
                          !e.isUndefined(t) && r.append(l, a(t));
                        });
                    t(o, l);
                  }
                }),
                o.pop();
            } else r.append(n, a(i));
          })(t),
          r;
        );
      };
    },
    4875: (t, r, o) => {
'use strict'; let e = o(7288).version; let a = o(2648); let i = {}; ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((t,r) => {i[t]=function(o){return typeof o===t||"a"+(r<1?"n ":" ")+t}}); let n = {}; i.transitional = function (t, r, o) {
        function i(t, r) {
          return (
            '[Axios v' +
            e +
            "] Transitional option '" +
            t +
            "'" +
            r +
            (o ? '. ' + o : '');
          );
        }
        return function(o, e, d) {
          if (!1 === t)
            throw new a(
              i(e, ' has been removed' + (r ? ' in ' + r : '')),
              a.ERR_DEPRECATED
            );
          return (
            r &&
              !n[e] &&
              ((n[e] = !0),
              console.warn(
                i(
                  e,
                  ' has been deprecated since v' +
                    r +
                    ' and will be removed in the near future'
                )
              )),
            !t || t(o, e, d);
          );
        };
      }),
        (t.exports = {
          assertOptions: function(t, r, o) {
            if ('object' != typeof t)
              throw new a('options must be an object', a.ERR_BAD_OPTION_VALUE);
            for (let e = Object.keys(t), i = e.length; i-- > 0; ) {
let n = e[i]; let d = r[n]; if (d) {
let l = t[n]; let s = void 0 === l || d(l, n, t); if (!0 !== s) throw new a(`option ${n  } must be ${  s}`, a.ERR_BAD_OPTION_VALUE);
              } else if (!0 !== o)
                throw new a('Unknown option ' + n, a.ERR_BAD_OPTION);
            }
          },
          validators: i
        });
    },
    4867: (t, r, o) => {
'use strict'; let e; let a = o(1849); let i = Object.prototype.toString; let n = (e = Object.create(null), function (t) {
let r = i.call(t); return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
        });
      function d(t) {
        return (
          (t = t.toLowerCase()),
          function(r) {
            return n(r) === t;
          };
        );
      }
      function l(t) {
        return Array.isArray(t);
      }
      function s(t) {
        return void 0 === t;
      }
      var m = d('ArrayBuffer');
      function p(t) {
        return t !== null && 'object' == typeof t;
      }
      function b(t) {
        if ('object' !== n(t)) return !1;
        var r = Object.getPrototypeOf(t);
        return r === null || r === Object.prototype;
      }
      var c = d('Date');
      var g = d('File');
      var f = d('Blob');
      var u = d('FileList');
      function v(t) {
        return '[object Function]' === i.call(t);
      }
      var h = d('URLSearchParams');
      function x(t, r) {
        if (t != null)
          if (('object' != typeof t && (t = [t]), l(t)))
            for (let o = 0, e = t.length; o < e; o++) r.call(null, t[o], o, t);
          else
            for (let a in t)
              Object.prototype.hasOwnProperty.call(t, a) &&
                r.call(null, t[a], a, t);
      }
      var w;
      var y =
        ((w =
          'undefined' !== typeof Uint8Array &&
          Object.getPrototypeOf(Uint8Array)),
        function(t) {
          return w && t instanceof w;
        });
      t.exports = {
        isArray: l,
        isArrayBuffer: m,
        isBuffer: function(t) {
          return (
            t !== null &&
            !s(t) &&
            null !== t.constructor &&
            !s(t.constructor) &&
            'function' === typeof t.constructor.isBuffer &&
            t.constructor.isBuffer(t);
          );
        },
        isFormData: function(t) {
let r = '[object FormData]'; return t && (typeof FormData=='function' && t instanceof FormData || i.call(t) === r || v(t.toString) && t.toString() === r);
          );
        },
        isArrayBufferView: function(t) {
          return 'undefined' !== typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : t && t.buffer && m(t.buffer);
        },
        isString: function(t) {
          return 'string' === typeof t;
        },
        isNumber: function(t) {
          return 'number' === typeof t;
        },
        isObject: p,
        isPlainObject: b,
        isUndefined: s,
        isDate: c,
        isFile: g,
        isBlob: f,
        isFunction: v,
        isStream: function(t) {
          return p(t) && v(t.pipe);
        },
        isURLSearchParams: h,
        isStandardBrowserEnv: function() {
          return (
            ('undefined' == typeof navigator ||
              ('ReactNative' !== navigator.product &&
                'NativeScript' !== navigator.product &&
                'NS' !== navigator.product)) &&
            'undefined' !== typeof window &&
            'undefined' !== typeof document;
          );
        },
        forEach: x,
        merge: function t() {
let r = {}; function o(o, e) {
            b(r[e]) && b(o)
              ? (r[e] = t(r[e], o))
              : b(o)
              ? (r[e] = t({}, o))
              : l(o)
              ? (r[e] = o.slice())
              : (r[e] = o);
          }
          for (let e = 0, a = arguments.length; e < a; e++) x(arguments[e], o);
          return r;
        },
        extend: function(t, r, o) {
          return (
            x(r, (r, e) => {
              t[e] = o && 'function' == typeof r ? a(r, o) : r;
            }),
            t;
          );
        },
        trim: function(t) {
          return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
        },
        stripBOM: function(t) {
          return t.charCodeAt(0) === 65279 && (t = t.slice(1)), t;
        },
        inherits: function(t, r, o, e) {
          (t.prototype = Object.create(r.prototype, e)),
            (t.prototype.constructor = t),
            o && Object.assign(t.prototype, o);
        },
        toFlatObject: function(t, r, o) {
let e; let a; let i; let n = {}; r = r || {}; do {
            for (a = (e = Object.getOwnPropertyNames(t)).length; a-- > 0; )
              n[(i = e[a])] || ((r[i] = t[i]), (n[i] = !0));
            t = Object.getPrototypeOf(t);
          } while (t && (!o || o(t, r)) && t !== Object.prototype);
          return r;
        },
        kindOf: n,
        kindOfTest: d,
        endsWith: function(t, r, o) {
          (t = String(t)),
            (void 0 === o || o > t.length) && (o = t.length),
            (o -= r.length);
          var e = t.indexOf(r, o);
          return -1 !== e && e === o;
        },
        toArray: function(t) {
          if (!t) return null;
          var r = t.length;
          if (s(r)) return null;
          for (var o = new Array(r); r-- > 0; ) o[r] = t[r];
          return o;
        },
        isTypedArray: y,
        isFileList: u
      };
    },
    8581: (t, r, o) => {
'use strict'; o.d(r, { Z:() => i }); let e = o(3645); let a = o.n(e)()((t) => {return t[1]}); a.push([t.id, ":root{font-family:Arial,sans-serif}/*!\n * Bootstrap  v5.2.0 (https://getbootstrap.com/)\n * Copyright 2011-2022 The Bootstrap Authors\n * Copyright 2011-2022 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--bs-blue: #0d6efd;--bs-indigo: #6610f2;--bs-purple: #6f42c1;--bs-pink: #d63384;--bs-red: #dc3545;--bs-orange: #fd7e14;--bs-yellow: #ffc107;--bs-green: #198754;--bs-teal: #20c997;--bs-cyan: #0dcaf0;--bs-black: #000;--bs-white: #fff;--bs-gray: #6c757d;--bs-gray-dark: #343a40;--bs-gray-100: #f8f9fa;--bs-gray-200: #e9ecef;--bs-gray-300: #dee2e6;--bs-gray-400: #ced4da;--bs-gray-500: #adb5bd;--bs-gray-600: #6c757d;--bs-gray-700: #495057;--bs-gray-800: #343a40;--bs-gray-900: #212529;--bs-primary: #0d6efd;--bs-secondary: #6c757d;--bs-success: #198754;--bs-info: #0dcaf0;--bs-warning: #ffc107;--bs-danger: #dc3545;--bs-light: #f8f9fa;--bs-dark: #212529;--bs-primary-rgb: 13, 110, 253;--bs-secondary-rgb: 108, 117, 125;--bs-success-rgb: 25, 135, 84;--bs-info-rgb: 13, 202, 240;--bs-warning-rgb: 255, 193, 7;--bs-danger-rgb: 220, 53, 69;--bs-light-rgb: 248, 249, 250;--bs-dark-rgb: 33, 37, 41;--bs-white-rgb: 255, 255, 255;--bs-black-rgb: 0, 0, 0;--bs-body-color-rgb: 33, 37, 41;--bs-body-bg-rgb: 255, 255, 255;--bs-font-sans-serif: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));--bs-body-font-family: var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight: 400;--bs-body-line-height: 1.5;--bs-body-color: #212529;--bs-body-bg: #fff;--bs-border-width: 1px;--bs-border-style: solid;--bs-border-color: #dee2e6;--bs-border-color-translucent: rgba(0, 0, 0, 0.175);--bs-border-radius: 0.375rem;--bs-border-radius-sm: 0.25rem;--bs-border-radius-lg: 0.5rem;--bs-border-radius-xl: 1rem;--bs-border-radius-2xl: 2rem;--bs-border-radius-pill: 50rem;--bs-link-color: #0d6efd;--bs-link-hover-color: #0a58ca;--bs-code-color: #d63384;--bs-highlight-bg: #fff3cd}*,*::before,*::after{box-sizing:border-box}@media(prefers-reduced-motion: no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}hr{margin:1rem 0;color:inherit;border:0;border-top:1px solid;opacity:.25}h6,.h6,h5,.h5,h4,.h4,h3,.h3,h2,.h2,h1,.h1{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}h1,.h1{font-size:calc(1.375rem + 1.5vw)}@media(min-width: 1200px){h1,.h1{font-size:2.5rem}}h2,.h2{font-size:calc(1.325rem + 0.9vw)}@media(min-width: 1200px){h2,.h2{font-size:2rem}}h3,.h3{font-size:calc(1.3rem + 0.6vw)}@media(min-width: 1200px){h3,.h3{font-size:1.75rem}}h4,.h4{font-size:calc(1.275rem + 0.3vw)}@media(min-width: 1200px){h4,.h4{font-size:1.5rem}}h5,.h5{font-size:1.25rem}h6,.h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}abbr[title]{text-decoration:underline dotted;cursor:help;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul{padding-left:2rem}ol,ul,dl{margin-top:0;margin-bottom:1rem}ol ol,ul ul,ol ul,ul ol{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small,.small{font-size:0.875em}mark,.mark{padding:.1875em;background-color:var(--bs-highlight-bg)}sub,sup{position:relative;font-size:0.75em;line-height:0;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}a{color:var(--bs-link-color);text-decoration:underline}a:hover{color:var(--bs-link-hover-color)}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}pre,code,kbd,samp{font-family:var(--bs-font-monospace);font-size:1em}pre{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:0.875em}pre code{font-size:inherit;color:inherit;word-break:normal}code{font-size:0.875em;color:var(--bs-code-color);word-wrap:break-word}a>code{color:inherit}kbd{padding:.1875rem .375rem;font-size:0.875em;color:var(--bs-body-bg);background-color:var(--bs-body-color);border-radius:.25rem}kbd kbd{padding:0;font-size:1em}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}caption{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}thead,tbody,tfoot,tr,td,th{border-color:inherit;border-style:solid;border-width:0}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}input,button,select,optgroup,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator{display:none !important}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button:not(:disabled),[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + 0.3vw);line-height:inherit}@media(min-width: 1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-text,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::file-selector-button{font:inherit;-webkit-appearance:button}output{display:inline-block}iframe{border:0}summary{display:list-item;cursor:pointer}progress{vertical-align:baseline}[hidden]{display:none !important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-6{font-size:2.5rem}}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:0.875em;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{margin-top:-1rem;margin-bottom:1rem;font-size:0.875em;color:#6c757d}.blockquote-footer::before{content:\"— \"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid var(--bs-border-color);border-radius:.375rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:0.875em;color:#6c757d}.container,.container-fluid,.container-xxl,.container-xl,.container-lg,.container-md,.container-sm{--bs-gutter-x: 1.5rem;--bs-gutter-y: 0;width:100%;padding-right:calc(var(--bs-gutter-x)*.5);padding-left:calc(var(--bs-gutter-x)*.5);margin-right:auto;margin-left:auto}@media(min-width: 576px){.container-sm,.container{max-width:540px}}@media(min-width: 768px){.container-md,.container-sm,.container{max-width:720px}}@media(min-width: 992px){.container-lg,.container-md,.container-sm,.container{max-width:960px}}@media(min-width: 1200px){.container-xl,.container-lg,.container-md,.container-sm,.container{max-width:1140px}}@media(min-width: 1400px){.container-xxl,.container-xl,.container-lg,.container-md,.container-sm,.container{max-width:1320px}}.row{--bs-gutter-x: 1.5rem;--bs-gutter-y: 0;display:flex;flex-wrap:wrap;margin-top:calc(-1*var(--bs-gutter-y));margin-right:calc(-0.5*var(--bs-gutter-x));margin-left:calc(-0.5*var(--bs-gutter-x))}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x)*.5);padding-left:calc(var(--bs-gutter-x)*.5);margin-top:var(--bs-gutter-y)}.col{flex:1 0 0%}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.6666666667%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.33333333%}.offset-2{margin-left:16.66666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333333%}.offset-5{margin-left:41.66666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333333%}.offset-8{margin-left:66.66666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333333%}.offset-11{margin-left:91.66666667%}.g-0,.gx-0{--bs-gutter-x: 0}.g-0,.gy-0{--bs-gutter-y: 0}.g-1,.gx-1{--bs-gutter-x: 0.25rem}.g-1,.gy-1{--bs-gutter-y: 0.25rem}.g-2,.gx-2{--bs-gutter-x: 0.5rem}.g-2,.gy-2{--bs-gutter-y: 0.5rem}.g-3,.gx-3{--bs-gutter-x: 1rem}.g-3,.gy-3{--bs-gutter-y: 1rem}.g-4,.gx-4{--bs-gutter-x: 1.5rem}.g-4,.gy-4{--bs-gutter-y: 1.5rem}.g-5,.gx-5{--bs-gutter-x: 3rem}.g-5,.gy-5{--bs-gutter-y: 3rem}@media(min-width: 576px){.col-sm{flex:1 0 0%}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.6666666667%}.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333333%}.col-sm-2{flex:0 0 auto;width:16.66666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333333%}.col-sm-5{flex:0 0 auto;width:41.66666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333333%}.col-sm-8{flex:0 0 auto;width:66.66666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333333%}.col-sm-11{flex:0 0 auto;width:91.66666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333333%}.offset-sm-2{margin-left:16.66666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333333%}.offset-sm-5{margin-left:41.66666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333333%}.offset-sm-8{margin-left:66.66666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333333%}.offset-sm-11{margin-left:91.66666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x: 0}.g-sm-0,.gy-sm-0{--bs-gutter-y: 0}.g-sm-1,.gx-sm-1{--bs-gutter-x: 0.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y: 0.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x: 0.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y: 0.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x: 1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y: 1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x: 1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y: 1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x: 3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y: 3rem}}@media(min-width: 768px){.col-md{flex:1 0 0%}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.6666666667%}.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333333%}.col-md-2{flex:0 0 auto;width:16.66666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333333%}.col-md-5{flex:0 0 auto;width:41.66666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333333%}.col-md-8{flex:0 0 auto;width:66.66666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333333%}.col-md-11{flex:0 0 auto;width:91.66666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333333%}.offset-md-2{margin-left:16.66666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333333%}.offset-md-5{margin-left:41.66666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333333%}.offset-md-8{margin-left:66.66666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333333%}.offset-md-11{margin-left:91.66666667%}.g-md-0,.gx-md-0{--bs-gutter-x: 0}.g-md-0,.gy-md-0{--bs-gutter-y: 0}.g-md-1,.gx-md-1{--bs-gutter-x: 0.25rem}.g-md-1,.gy-md-1{--bs-gutter-y: 0.25rem}.g-md-2,.gx-md-2{--bs-gutter-x: 0.5rem}.g-md-2,.gy-md-2{--bs-gutter-y: 0.5rem}.g-md-3,.gx-md-3{--bs-gutter-x: 1rem}.g-md-3,.gy-md-3{--bs-gutter-y: 1rem}.g-md-4,.gx-md-4{--bs-gutter-x: 1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y: 1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x: 3rem}.g-md-5,.gy-md-5{--bs-gutter-y: 3rem}}@media(min-width: 992px){.col-lg{flex:1 0 0%}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.6666666667%}.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333333%}.col-lg-2{flex:0 0 auto;width:16.66666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333333%}.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.col-lg-8{flex:0 0 auto;width:66.66666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333333%}.col-lg-11{flex:0 0 auto;width:91.66666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333333%}.offset-lg-2{margin-left:16.66666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333333%}.offset-lg-5{margin-left:41.66666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333333%}.offset-lg-8{margin-left:66.66666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333333%}.offset-lg-11{margin-left:91.66666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x: 0}.g-lg-0,.gy-lg-0{--bs-gutter-y: 0}.g-lg-1,.gx-lg-1{--bs-gutter-x: 0.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y: 0.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x: 0.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y: 0.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x: 1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y: 1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x: 1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y: 1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x: 3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y: 3rem}}@media(min-width: 1200px){.col-xl{flex:1 0 0%}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333333%}.col-xl-2{flex:0 0 auto;width:16.66666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333333%}.col-xl-5{flex:0 0 auto;width:41.66666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333333%}.col-xl-8{flex:0 0 auto;width:66.66666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333333%}.col-xl-11{flex:0 0 auto;width:91.66666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333333%}.offset-xl-2{margin-left:16.66666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333333%}.offset-xl-5{margin-left:41.66666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333333%}.offset-xl-8{margin-left:66.66666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333333%}.offset-xl-11{margin-left:91.66666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x: 0}.g-xl-0,.gy-xl-0{--bs-gutter-y: 0}.g-xl-1,.gx-xl-1{--bs-gutter-x: 0.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y: 0.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x: 0.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y: 0.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x: 1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y: 1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x: 1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y: 1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x: 3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y: 3rem}}@media(min-width: 1400px){.col-xxl{flex:1 0 0%}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333333%}.col-xxl-2{flex:0 0 auto;width:16.66666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333333%}.col-xxl-5{flex:0 0 auto;width:41.66666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333333%}.col-xxl-8{flex:0 0 auto;width:66.66666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333333%}.col-xxl-11{flex:0 0 auto;width:91.66666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333333%}.offset-xxl-2{margin-left:16.66666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333333%}.offset-xxl-5{margin-left:41.66666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333333%}.offset-xxl-8{margin-left:66.66666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333333%}.offset-xxl-11{margin-left:91.66666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x: 0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y: 0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x: 0.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y: 0.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x: 0.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y: 0.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x: 1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y: 1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x: 1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y: 1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x: 3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y: 3rem}}.table{--bs-table-color: var(--bs-body-color);--bs-table-bg: transparent;--bs-table-border-color: var(--bs-border-color);--bs-table-accent-bg: transparent;--bs-table-striped-color: var(--bs-body-color);--bs-table-striped-bg: rgba(0, 0, 0, 0.05);--bs-table-active-color: var(--bs-body-color);--bs-table-active-bg: rgba(0, 0, 0, 0.1);--bs-table-hover-color: var(--bs-body-color);--bs-table-hover-bg: rgba(0, 0, 0, 0.075);width:100%;margin-bottom:1rem;color:var(--bs-table-color);vertical-align:top;border-color:var(--bs-table-border-color)}.table>:not(caption)>*>*{padding:.5rem .5rem;background-color:var(--bs-table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table-group-divider{border-top:2px solid currentcolor}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem .25rem}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped>tbody>tr:nth-of-type(odd)>*{--bs-table-accent-bg: var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-striped-columns>:not(caption)>tr>:nth-child(even){--bs-table-accent-bg: var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-active{--bs-table-accent-bg: var(--bs-table-active-bg);color:var(--bs-table-active-color)}.table-hover>tbody>tr:hover>*{--bs-table-accent-bg: var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-primary{--bs-table-color: #000;--bs-table-bg: #cfe2ff;--bs-table-border-color: #bacbe6;--bs-table-striped-bg: #c5d7f2;--bs-table-striped-color: #000;--bs-table-active-bg: #bacbe6;--bs-table-active-color: #000;--bs-table-hover-bg: #bfd1ec;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-secondary{--bs-table-color: #000;--bs-table-bg: #e2e3e5;--bs-table-border-color: #cbccce;--bs-table-striped-bg: #d7d8da;--bs-table-striped-color: #000;--bs-table-active-bg: #cbccce;--bs-table-active-color: #000;--bs-table-hover-bg: #d1d2d4;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-success{--bs-table-color: #000;--bs-table-bg: #d1e7dd;--bs-table-border-color: #bcd0c7;--bs-table-striped-bg: #c7dbd2;--bs-table-striped-color: #000;--bs-table-active-bg: #bcd0c7;--bs-table-active-color: #000;--bs-table-hover-bg: #c1d6cc;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-info{--bs-table-color: #000;--bs-table-bg: #cff4fc;--bs-table-border-color: #badce3;--bs-table-striped-bg: #c5e8ef;--bs-table-striped-color: #000;--bs-table-active-bg: #badce3;--bs-table-active-color: #000;--bs-table-hover-bg: #bfe2e9;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-warning{--bs-table-color: #000;--bs-table-bg: #fff3cd;--bs-table-border-color: #e6dbb9;--bs-table-striped-bg: #f2e7c3;--bs-table-striped-color: #000;--bs-table-active-bg: #e6dbb9;--bs-table-active-color: #000;--bs-table-hover-bg: #ece1be;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-danger{--bs-table-color: #000;--bs-table-bg: #f8d7da;--bs-table-border-color: #dfc2c4;--bs-table-striped-bg: #eccccf;--bs-table-striped-color: #000;--bs-table-active-bg: #dfc2c4;--bs-table-active-color: #000;--bs-table-hover-bg: #e5c7ca;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-light{--bs-table-color: #000;--bs-table-bg: #f8f9fa;--bs-table-border-color: #dfe0e1;--bs-table-striped-bg: #ecedee;--bs-table-striped-color: #000;--bs-table-active-bg: #dfe0e1;--bs-table-active-color: #000;--bs-table-hover-bg: #e5e6e7;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-dark{--bs-table-color: #fff;--bs-table-bg: #212529;--bs-table-border-color: #373b3e;--bs-table-striped-bg: #2c3034;--bs-table-striped-color: #fff;--bs-table-active-bg: #373b3e;--bs-table-active-color: #fff;--bs-table-hover-bg: #323539;--bs-table-hover-color: #fff;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media(max-width: 575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}}.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(0.375rem + 1px);padding-bottom:calc(0.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(0.5rem + 1px);padding-bottom:calc(0.5rem + 1px);font-size:1.25rem}.col-form-label-sm{padding-top:calc(0.25rem + 1px);padding-bottom:calc(0.25rem + 1px);font-size:0.875rem}.form-text{margin-top:.25rem;font-size:0.875em;color:#6c757d}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;appearance:none;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled{background-color:#e9ecef;opacity:1}.form-control::file-selector-button{padding:.375rem .75rem;margin:-0.375rem -0.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:#212529;background-color:rgba(0,0,0,0);border:solid rgba(0,0,0,0);border-width:1px 0}.form-control-plaintext:focus{outline:0}.form-control-plaintext.form-control-sm,.form-control-plaintext.form-control-lg{padding-right:0;padding-left:0}.form-control-sm{min-height:calc(1.5em + 0.5rem + 2px);padding:.25rem .5rem;font-size:0.875rem;border-radius:.25rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-0.25rem -0.5rem;margin-inline-end:.5rem}.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-0.5rem -1rem;margin-inline-end:1rem}textarea.form-control{min-height:calc(1.5em + 0.75rem + 2px)}textarea.form-control-sm{min-height:calc(1.5em + 0.5rem + 2px)}textarea.form-control-lg{min-height:calc(1.5em + 1rem + 2px)}.form-control-color{width:3rem;height:calc(1.5em + 0.75rem + 2px);padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{border:0 !important;border-radius:.375rem}.form-control-color::-webkit-color-swatch{border-radius:.375rem}.form-control-color.form-control-sm{height:calc(1.5em + 0.5rem + 2px)}.form-control-color.form-control-lg{height:calc(1.5em + 1rem + 2px)}.form-select{display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;-moz-padding-start:calc(0.75rem - 3px);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-select[multiple],.form-select[size]:not([size=\"1\"]){padding-right:.75rem;background-image:none}.form-select:disabled{background-color:#e9ecef}.form-select:-moz-focusring{color:rgba(0,0,0,0);text-shadow:0 0 0 #212529}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:0.875rem;border-radius:.25rem}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem;border-radius:.5rem}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-reverse{padding-right:1.5em;padding-left:0;text-align:right}.form-check-reverse .form-check-input{float:right;margin-right:-1.5em;margin-left:0}.form-check-input{width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid rgba(0,0,0,.25);appearance:none;print-color-adjust:exact}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")}.form-check-input:checked[type=radio]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\")}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input[disabled]~.form-check-label,.form-check-input:disabled~.form-check-label{cursor:default;opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{width:2em;margin-left:-2.5em;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}@media(prefers-reduced-motion: reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\")}.form-switch .form-check-input:checked{background-position:right center;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.form-switch.form-check-reverse{padding-right:2.5em;padding-left:0}.form-switch.form-check-reverse .form-check-input{margin-right:-2.5em;margin-left:0}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.btn-check[disabled]+.btn,.btn-check:disabled+.btn{pointer-events:none;filter:none;opacity:.65}.form-range{width:100%;height:1.5rem;padding:0;background-color:rgba(0,0,0,0);appearance:none}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-0.25rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.form-range::-webkit-slider-thumb{transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:rgba(0,0,0,0);cursor:pointer;background-color:#dee2e6;border-color:rgba(0,0,0,0);border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.form-range::-moz-range-thumb{transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:rgba(0,0,0,0);cursor:pointer;background-color:#dee2e6;border-color:rgba(0,0,0,0);border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-control-plaintext,.form-floating>.form-select{height:calc(3.5rem + 2px);line-height:1.25}.form-floating>label{position:absolute;top:0;left:0;width:100%;height:100%;padding:1rem .75rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;border:1px solid rgba(0,0,0,0);transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}@media(prefers-reduced-motion: reduce){.form-floating>label{transition:none}}.form-floating>.form-control,.form-floating>.form-control-plaintext{padding:1rem .75rem}.form-floating>.form-control::placeholder,.form-floating>.form-control-plaintext::placeholder{color:rgba(0,0,0,0)}.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown),.form-floating>.form-control-plaintext:focus,.form-floating>.form-control-plaintext:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:-webkit-autofill,.form-floating>.form-control-plaintext:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-control-plaintext~label,.form-floating>.form-select~label{opacity:.65;transform:scale(0.85) translateY(-0.5rem) translateX(0.15rem)}.form-floating>.form-control:-webkit-autofill~label{opacity:.65;transform:scale(0.85) translateY(-0.5rem) translateX(0.15rem)}.form-floating>.form-control-plaintext~label{border-width:1px 0}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-select,.input-group>.form-floating{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-select:focus,.input-group>.form-floating:focus-within{z-index:3}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:3}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.375rem}.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text,.input-group-lg>.btn{padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text,.input-group-sm>.btn{padding:.25rem .5rem;font-size:0.875rem;border-radius:.25rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control,.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select{border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-control,.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-select{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.form-floating):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback),.input-group>.form-floating:not(:first-child)>.form-control,.input-group>.form-floating:not(:first-child)>.form-select{margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:0.875em;color:#198754}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:0.875rem;color:#fff;background-color:rgba(25,135,84,.9);border-radius:.375rem}.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip,.is-valid~.valid-feedback,.is-valid~.valid-tooltip{display:block}.was-validated .form-control:valid,.form-control.is-valid{border-color:#198754;padding-right:calc(1.5em + 0.75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(0.375em + 0.1875rem) center;background-size:calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-control:valid:focus,.form-control.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + 0.75rem);background-position:top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)}.was-validated .form-select:valid,.form-select.is-valid{border-color:#198754}.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size=\"1\"],.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size=\"1\"]{padding-right:4.125rem;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\"),url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-select:valid:focus,.form-select.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated .form-control-color:valid,.form-control-color.is-valid{width:calc(3rem + calc(1.5em + 0.75rem))}.was-validated .form-check-input:valid,.form-check-input.is-valid{border-color:#198754}.was-validated .form-check-input:valid:checked,.form-check-input.is-valid:checked{background-color:#198754}.was-validated .form-check-input:valid:focus,.form-check-input.is-valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated .form-check-input:valid~.form-check-label,.form-check-input.is-valid~.form-check-label{color:#198754}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.was-validated .input-group .form-control:valid,.input-group .form-control.is-valid,.was-validated .input-group .form-select:valid,.input-group .form-select.is-valid{z-index:1}.was-validated .input-group .form-control:valid:focus,.input-group .form-control.is-valid:focus,.was-validated .input-group .form-select:valid:focus,.input-group .form-select.is-valid:focus{z-index:3}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:0.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:0.875rem;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.375rem}.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip,.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip{display:block}.was-validated .form-control:invalid,.form-control.is-invalid{border-color:#dc3545;padding-right:calc(1.5em + 0.75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(0.375em + 0.1875rem) center;background-size:calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-control:invalid:focus,.form-control.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + 0.75rem);background-position:top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)}.was-validated .form-select:invalid,.form-select.is-invalid{border-color:#dc3545}.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size=\"1\"],.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size=\"1\"]{padding-right:4.125rem;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\"),url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-select:invalid:focus,.form-select.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated .form-control-color:invalid,.form-control-color.is-invalid{width:calc(3rem + calc(1.5em + 0.75rem))}.was-validated .form-check-input:invalid,.form-check-input.is-invalid{border-color:#dc3545}.was-validated .form-check-input:invalid:checked,.form-check-input.is-invalid:checked{background-color:#dc3545}.was-validated .form-check-input:invalid:focus,.form-check-input.is-invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated .form-check-input:invalid~.form-check-label,.form-check-input.is-invalid~.form-check-label{color:#dc3545}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.was-validated .input-group .form-control:invalid,.input-group .form-control.is-invalid,.was-validated .input-group .form-select:invalid,.input-group .form-select.is-invalid{z-index:2}.was-validated .input-group .form-control:invalid:focus,.input-group .form-control.is-invalid:focus,.was-validated .input-group .form-select:invalid:focus,.input-group .form-select.is-invalid:focus{z-index:3}.btn{--bs-btn-padding-x: 0.75rem;--bs-btn-padding-y: 0.375rem;--bs-btn-font-family: ;--bs-btn-font-size:1rem;--bs-btn-font-weight: 400;--bs-btn-line-height: 1.5;--bs-btn-color: #212529;--bs-btn-bg: transparent;--bs-btn-border-width: 1px;--bs-btn-border-color: transparent;--bs-btn-border-radius: 0.375rem;--bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);--bs-btn-disabled-opacity: 0.65;--bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);display:inline-block;padding:var(--bs-btn-padding-y) var(--bs-btn-padding-x);font-family:var(--bs-btn-font-family);font-size:var(--bs-btn-font-size);font-weight:var(--bs-btn-font-weight);line-height:var(--bs-btn-line-height);color:var(--bs-btn-color);text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;user-select:none;border:var(--bs-btn-border-width) solid var(--bs-btn-border-color);border-radius:var(--bs-btn-border-radius);background-color:var(--bs-btn-bg);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.btn{transition:none}}.btn:hover{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color)}.btn-check:focus+.btn,.btn:focus{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}.btn-check:checked+.btn,.btn-check:active+.btn,.btn:active,.btn.active,.btn.show{color:var(--bs-btn-active-color);background-color:var(--bs-btn-active-bg);border-color:var(--bs-btn-active-border-color)}.btn-check:checked+.btn:focus,.btn-check:active+.btn:focus,.btn:active:focus,.btn.active:focus,.btn.show:focus{box-shadow:var(--bs-btn-focus-box-shadow)}.btn:disabled,.btn.disabled,fieldset:disabled .btn{color:var(--bs-btn-disabled-color);pointer-events:none;background-color:var(--bs-btn-disabled-bg);border-color:var(--bs-btn-disabled-border-color);opacity:var(--bs-btn-disabled-opacity)}.btn-primary{--bs-btn-color: #fff;--bs-btn-bg: #0d6efd;--bs-btn-border-color: #0d6efd;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #0b5ed7;--bs-btn-hover-border-color: #0a58ca;--bs-btn-focus-shadow-rgb: 49, 132, 253;--bs-btn-active-color: #fff;--bs-btn-active-bg: #0a58ca;--bs-btn-active-border-color: #0a53be;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #0d6efd;--bs-btn-disabled-border-color: #0d6efd}.btn-secondary{--bs-btn-color: #fff;--bs-btn-bg: #6c757d;--bs-btn-border-color: #6c757d;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #5c636a;--bs-btn-hover-border-color: #565e64;--bs-btn-focus-shadow-rgb: 130, 138, 145;--bs-btn-active-color: #fff;--bs-btn-active-bg: #565e64;--bs-btn-active-border-color: #51585e;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #6c757d;--bs-btn-disabled-border-color: #6c757d}.btn-success{--bs-btn-color: #fff;--bs-btn-bg: #198754;--bs-btn-border-color: #198754;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #157347;--bs-btn-hover-border-color: #146c43;--bs-btn-focus-shadow-rgb: 60, 153, 110;--bs-btn-active-color: #fff;--bs-btn-active-bg: #146c43;--bs-btn-active-border-color: #13653f;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #198754;--bs-btn-disabled-border-color: #198754}.btn-info{--bs-btn-color: #000;--bs-btn-bg: #0dcaf0;--bs-btn-border-color: #0dcaf0;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #31d2f2;--bs-btn-hover-border-color: #25cff2;--bs-btn-focus-shadow-rgb: 11, 172, 204;--bs-btn-active-color: #000;--bs-btn-active-bg: #3dd5f3;--bs-btn-active-border-color: #25cff2;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #000;--bs-btn-disabled-bg: #0dcaf0;--bs-btn-disabled-border-color: #0dcaf0}.btn-warning{--bs-btn-color: #000;--bs-btn-bg: #ffc107;--bs-btn-border-color: #ffc107;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #ffca2c;--bs-btn-hover-border-color: #ffc720;--bs-btn-focus-shadow-rgb: 217, 164, 6;--bs-btn-active-color: #000;--bs-btn-active-bg: #ffcd39;--bs-btn-active-border-color: #ffc720;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #000;--bs-btn-disabled-bg: #ffc107;--bs-btn-disabled-border-color: #ffc107}.btn-danger{--bs-btn-color: #fff;--bs-btn-bg: #dc3545;--bs-btn-border-color: #dc3545;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #bb2d3b;--bs-btn-hover-border-color: #b02a37;--bs-btn-focus-shadow-rgb: 225, 83, 97;--bs-btn-active-color: #fff;--bs-btn-active-bg: #b02a37;--bs-btn-active-border-color: #a52834;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #dc3545;--bs-btn-disabled-border-color: #dc3545}.btn-light{--bs-btn-color: #000;--bs-btn-bg: #f8f9fa;--bs-btn-border-color: #f8f9fa;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #d3d4d5;--bs-btn-hover-border-color: #c6c7c8;--bs-btn-focus-shadow-rgb: 211, 212, 213;--bs-btn-active-color: #000;--bs-btn-active-bg: #c6c7c8;--bs-btn-active-border-color: #babbbc;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #000;--bs-btn-disabled-bg: #f8f9fa;--bs-btn-disabled-border-color: #f8f9fa}.btn-dark{--bs-btn-color: #fff;--bs-btn-bg: #212529;--bs-btn-border-color: #212529;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #424649;--bs-btn-hover-border-color: #373b3e;--bs-btn-focus-shadow-rgb: 66, 70, 73;--bs-btn-active-color: #fff;--bs-btn-active-bg: #4d5154;--bs-btn-active-border-color: #373b3e;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #212529;--bs-btn-disabled-border-color: #212529}.btn-outline-primary{--bs-btn-color: #0d6efd;--bs-btn-border-color: #0d6efd;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #0d6efd;--bs-btn-hover-border-color: #0d6efd;--bs-btn-focus-shadow-rgb: 13, 110, 253;--bs-btn-active-color: #fff;--bs-btn-active-bg: #0d6efd;--bs-btn-active-border-color: #0d6efd;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #0d6efd;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #0d6efd;--bs-gradient: none}.btn-outline-secondary{--bs-btn-color: #6c757d;--bs-btn-border-color: #6c757d;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #6c757d;--bs-btn-hover-border-color: #6c757d;--bs-btn-focus-shadow-rgb: 108, 117, 125;--bs-btn-active-color: #fff;--bs-btn-active-bg: #6c757d;--bs-btn-active-border-color: #6c757d;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #6c757d;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #6c757d;--bs-gradient: none}.btn-outline-success{--bs-btn-color: #198754;--bs-btn-border-color: #198754;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #198754;--bs-btn-hover-border-color: #198754;--bs-btn-focus-shadow-rgb: 25, 135, 84;--bs-btn-active-color: #fff;--bs-btn-active-bg: #198754;--bs-btn-active-border-color: #198754;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #198754;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #198754;--bs-gradient: none}.btn-outline-info{--bs-btn-color: #0dcaf0;--bs-btn-border-color: #0dcaf0;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #0dcaf0;--bs-btn-hover-border-color: #0dcaf0;--bs-btn-focus-shadow-rgb: 13, 202, 240;--bs-btn-active-color: #000;--bs-btn-active-bg: #0dcaf0;--bs-btn-active-border-color: #0dcaf0;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #0dcaf0;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #0dcaf0;--bs-gradient: none}.btn-outline-warning{--bs-btn-color: #ffc107;--bs-btn-border-color: #ffc107;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #ffc107;--bs-btn-hover-border-color: #ffc107;--bs-btn-focus-shadow-rgb: 255, 193, 7;--bs-btn-active-color: #000;--bs-btn-active-bg: #ffc107;--bs-btn-active-border-color: #ffc107;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #ffc107;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #ffc107;--bs-gradient: none}.btn-outline-danger{--bs-btn-color: #dc3545;--bs-btn-border-color: #dc3545;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #dc3545;--bs-btn-hover-border-color: #dc3545;--bs-btn-focus-shadow-rgb: 220, 53, 69;--bs-btn-active-color: #fff;--bs-btn-active-bg: #dc3545;--bs-btn-active-border-color: #dc3545;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #dc3545;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #dc3545;--bs-gradient: none}.btn-outline-light{--bs-btn-color: #f8f9fa;--bs-btn-border-color: #f8f9fa;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #f8f9fa;--bs-btn-hover-border-color: #f8f9fa;--bs-btn-focus-shadow-rgb: 248, 249, 250;--bs-btn-active-color: #000;--bs-btn-active-bg: #f8f9fa;--bs-btn-active-border-color: #f8f9fa;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #f8f9fa;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #f8f9fa;--bs-gradient: none}.btn-outline-dark{--bs-btn-color: #212529;--bs-btn-border-color: #212529;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #212529;--bs-btn-hover-border-color: #212529;--bs-btn-focus-shadow-rgb: 33, 37, 41;--bs-btn-active-color: #fff;--bs-btn-active-bg: #212529;--bs-btn-active-border-color: #212529;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #212529;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #212529;--bs-gradient: none}.btn-link{--bs-btn-font-weight: 400;--bs-btn-color: var(--bs-link-color);--bs-btn-bg: transparent;--bs-btn-border-color: transparent;--bs-btn-hover-color: var(--bs-link-hover-color);--bs-btn-hover-border-color: transparent;--bs-btn-active-color: var(--bs-link-hover-color);--bs-btn-active-border-color: transparent;--bs-btn-disabled-color: #6c757d;--bs-btn-disabled-border-color: transparent;--bs-btn-box-shadow: none;--bs-btn-focus-shadow-rgb: 49, 132, 253;text-decoration:underline}.btn-link:focus{color:var(--bs-btn-color)}.btn-link:hover{color:var(--bs-btn-hover-color)}.btn-lg,.btn-group-lg>.btn{--bs-btn-padding-y: 0.5rem;--bs-btn-padding-x: 1rem;--bs-btn-font-size:1.25rem;--bs-btn-border-radius: 0.5rem}.btn-sm,.btn-group-sm>.btn{--bs-btn-padding-y: 0.25rem;--bs-btn-padding-x: 0.5rem;--bs-btn-font-size:0.875rem;--bs-btn-border-radius: 0.25rem}.fade{transition:opacity .15s linear}@media(prefers-reduced-motion: reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height .35s ease}@media(prefers-reduced-motion: reduce){.collapsing{transition:none}}.collapsing.collapse-horizontal{width:0;height:auto;transition:width .35s ease}@media(prefers-reduced-motion: reduce){.collapsing.collapse-horizontal{transition:none}}.dropup,.dropend,.dropdown,.dropstart,.dropup-center,.dropdown-center{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid rgba(0,0,0,0);border-bottom:0;border-left:.3em solid rgba(0,0,0,0)}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{--bs-dropdown-min-width: 10rem;--bs-dropdown-padding-x: 0;--bs-dropdown-padding-y: 0.5rem;--bs-dropdown-spacer: 0.125rem;--bs-dropdown-font-size:1rem;--bs-dropdown-color: #212529;--bs-dropdown-bg: #fff;--bs-dropdown-border-color: var(--bs-border-color-translucent);--bs-dropdown-border-radius: 0.375rem;--bs-dropdown-border-width: 1px;--bs-dropdown-inner-border-radius: calc(0.375rem - 1px);--bs-dropdown-divider-bg: var(--bs-border-color-translucent);--bs-dropdown-divider-margin-y: 0.5rem;--bs-dropdown-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-dropdown-link-color: #212529;--bs-dropdown-link-hover-color: #1e2125;--bs-dropdown-link-hover-bg: #e9ecef;--bs-dropdown-link-active-color: #fff;--bs-dropdown-link-active-bg: #0d6efd;--bs-dropdown-link-disabled-color: #adb5bd;--bs-dropdown-item-padding-x: 1rem;--bs-dropdown-item-padding-y: 0.25rem;--bs-dropdown-header-color: #6c757d;--bs-dropdown-header-padding-x: 1rem;--bs-dropdown-header-padding-y: 0.5rem;position:absolute;z-index:1000;display:none;min-width:var(--bs-dropdown-min-width);padding:var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);margin:0;font-size:var(--bs-dropdown-font-size);color:var(--bs-dropdown-color);text-align:left;list-style:none;background-color:var(--bs-dropdown-bg);background-clip:padding-box;border:var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);border-radius:var(--bs-dropdown-border-radius)}.dropdown-menu[data-bs-popper]{top:100%;left:0;margin-top:var(--bs-dropdown-spacer)}.dropdown-menu-start{--bs-position: start}.dropdown-menu-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-end{--bs-position: end}.dropdown-menu-end[data-bs-popper]{right:0;left:auto}@media(min-width: 576px){.dropdown-menu-sm-start{--bs-position: start}.dropdown-menu-sm-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-sm-end{--bs-position: end}.dropdown-menu-sm-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 768px){.dropdown-menu-md-start{--bs-position: start}.dropdown-menu-md-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-md-end{--bs-position: end}.dropdown-menu-md-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 992px){.dropdown-menu-lg-start{--bs-position: start}.dropdown-menu-lg-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-lg-end{--bs-position: end}.dropdown-menu-lg-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 1200px){.dropdown-menu-xl-start{--bs-position: start}.dropdown-menu-xl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xl-end{--bs-position: end}.dropdown-menu-xl-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 1400px){.dropdown-menu-xxl-start{--bs-position: start}.dropdown-menu-xxl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xxl-end{--bs-position: end}.dropdown-menu-xxl-end[data-bs-popper]{right:0;left:auto}}.dropup .dropdown-menu[data-bs-popper]{top:auto;bottom:100%;margin-top:0;margin-bottom:var(--bs-dropdown-spacer)}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid rgba(0,0,0,0);border-bottom:.3em solid;border-left:.3em solid rgba(0,0,0,0)}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{top:0;right:auto;left:100%;margin-top:0;margin-left:var(--bs-dropdown-spacer)}.dropend .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid rgba(0,0,0,0);border-right:0;border-bottom:.3em solid rgba(0,0,0,0);border-left:.3em solid}.dropend .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-toggle::after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{top:0;right:100%;left:auto;margin-top:0;margin-right:var(--bs-dropdown-spacer)}.dropstart .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropstart .dropdown-toggle::after{display:none}.dropstart .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid rgba(0,0,0,0);border-right:.3em solid;border-bottom:.3em solid rgba(0,0,0,0)}.dropstart .dropdown-toggle:empty::after{margin-left:0}.dropstart .dropdown-toggle::before{vertical-align:0}.dropdown-divider{height:0;margin:var(--bs-dropdown-divider-margin-y) 0;overflow:hidden;border-top:1px solid var(--bs-dropdown-divider-bg);opacity:1}.dropdown-item{display:block;width:100%;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);clear:both;font-weight:400;color:var(--bs-dropdown-link-color);text-align:inherit;text-decoration:none;white-space:nowrap;background-color:rgba(0,0,0,0);border:0}.dropdown-item:hover,.dropdown-item:focus{color:var(--bs-dropdown-link-hover-color);background-color:var(--bs-dropdown-link-hover-bg)}.dropdown-item.active,.dropdown-item:active{color:var(--bs-dropdown-link-active-color);text-decoration:none;background-color:var(--bs-dropdown-link-active-bg)}.dropdown-item.disabled,.dropdown-item:disabled{color:var(--bs-dropdown-link-disabled-color);pointer-events:none;background-color:rgba(0,0,0,0)}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);margin-bottom:0;font-size:0.875rem;color:var(--bs-dropdown-header-color);white-space:nowrap}.dropdown-item-text{display:block;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);color:var(--bs-dropdown-link-color)}.dropdown-menu-dark{--bs-dropdown-color: #dee2e6;--bs-dropdown-bg: #343a40;--bs-dropdown-border-color: var(--bs-border-color-translucent);--bs-dropdown-box-shadow: ;--bs-dropdown-link-color: #dee2e6;--bs-dropdown-link-hover-color: #fff;--bs-dropdown-divider-bg: var(--bs-border-color-translucent);--bs-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15);--bs-dropdown-link-active-color: #fff;--bs-dropdown-link-active-bg: #0d6efd;--bs-dropdown-link-disabled-color: #adb5bd;--bs-dropdown-header-color: #adb5bd}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;flex:1 1 auto}.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn:hover,.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn:hover,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn.active{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group{border-radius:.375rem}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child){margin-left:-1px}.btn-group>.btn:not(:last-child):not(.dropdown-toggle),.btn-group>.btn.dropdown-toggle-split:first-child,.btn-group>.btn-group:not(:last-child)>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn,.btn-group>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after,.dropend .dropdown-toggle-split::after{margin-left:0}.dropstart .dropdown-toggle-split::before{margin-right:0}.btn-sm+.dropdown-toggle-split,.btn-group-sm>.btn+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-lg+.dropdown-toggle-split,.btn-group-lg>.btn+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),.btn-group-vertical>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn~.btn,.btn-group-vertical>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{--bs-nav-link-padding-x: 1rem;--bs-nav-link-padding-y: 0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color: var(--bs-link-color);--bs-nav-link-hover-color: var(--bs-link-hover-color);--bs-nav-link-disabled-color: #6c757d;display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);font-size:var(--bs-nav-link-font-size);font-weight:var(--bs-nav-link-font-weight);color:var(--bs-nav-link-color);text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media(prefers-reduced-motion: reduce){.nav-link{transition:none}}.nav-link:hover,.nav-link:focus{color:var(--bs-nav-link-hover-color)}.nav-link.disabled{color:var(--bs-nav-link-disabled-color);pointer-events:none;cursor:default}.nav-tabs{--bs-nav-tabs-border-width: 1px;--bs-nav-tabs-border-color: #dee2e6;--bs-nav-tabs-border-radius: 0.375rem;--bs-nav-tabs-link-hover-border-color: #e9ecef #e9ecef #dee2e6;--bs-nav-tabs-link-active-color: #495057;--bs-nav-tabs-link-active-bg: #fff;--bs-nav-tabs-link-active-border-color: #dee2e6 #dee2e6 #fff;border-bottom:var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color)}.nav-tabs .nav-link{margin-bottom:calc(var(--bs-nav-tabs-border-width)*-1);background:none;border:var(--bs-nav-tabs-border-width) solid rgba(0,0,0,0);border-top-left-radius:var(--bs-nav-tabs-border-radius);border-top-right-radius:var(--bs-nav-tabs-border-radius)}.nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus{isolation:isolate;border-color:var(--bs-nav-tabs-link-hover-border-color)}.nav-tabs .nav-link.disabled,.nav-tabs .nav-link:disabled{color:var(--bs-nav-link-disabled-color);background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.nav-tabs .nav-link.active,.nav-tabs .nav-item.show .nav-link{color:var(--bs-nav-tabs-link-active-color);background-color:var(--bs-nav-tabs-link-active-bg);border-color:var(--bs-nav-tabs-link-active-border-color)}.nav-tabs .dropdown-menu{margin-top:calc(var(--bs-nav-tabs-border-width)*-1);border-top-left-radius:0;border-top-right-radius:0}.nav-pills{--bs-nav-pills-border-radius: 0.375rem;--bs-nav-pills-link-active-color: #fff;--bs-nav-pills-link-active-bg: #0d6efd}.nav-pills .nav-link{background:none;border:0;border-radius:var(--bs-nav-pills-border-radius)}.nav-pills .nav-link:disabled{color:var(--bs-nav-link-disabled-color);background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:var(--bs-nav-pills-link-active-color);background-color:var(--bs-nav-pills-link-active-bg)}.nav-fill>.nav-link,.nav-fill .nav-item{flex:1 1 auto;text-align:center}.nav-justified>.nav-link,.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{--bs-navbar-padding-x: 0;--bs-navbar-padding-y: 0.5rem;--bs-navbar-color: rgba(0, 0, 0, 0.55);--bs-navbar-hover-color: rgba(0, 0, 0, 0.7);--bs-navbar-disabled-color: rgba(0, 0, 0, 0.3);--bs-navbar-active-color: rgba(0, 0, 0, 0.9);--bs-navbar-brand-padding-y: 0.3125rem;--bs-navbar-brand-margin-end: 1rem;--bs-navbar-brand-font-size: 1.25rem;--bs-navbar-brand-color: rgba(0, 0, 0, 0.9);--bs-navbar-brand-hover-color: rgba(0, 0, 0, 0.9);--bs-navbar-nav-link-padding-x: 0.5rem;--bs-navbar-toggler-padding-y: 0.25rem;--bs-navbar-toggler-padding-x: 0.75rem;--bs-navbar-toggler-font-size: 1.25rem;--bs-navbar-toggler-icon-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");--bs-navbar-toggler-border-color: rgba(0, 0, 0, 0.1);--bs-navbar-toggler-border-radius: 0.375rem;--bs-navbar-toggler-focus-width: 0.25rem;--bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:var(--bs-navbar-padding-y) var(--bs-navbar-padding-x)}.navbar>.container,.navbar>.container-fluid,.navbar>.container-sm,.navbar>.container-md,.navbar>.container-lg,.navbar>.container-xl,.navbar>.container-xxl{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:var(--bs-navbar-brand-padding-y);padding-bottom:var(--bs-navbar-brand-padding-y);margin-right:var(--bs-navbar-brand-margin-end);font-size:var(--bs-navbar-brand-font-size);color:var(--bs-navbar-brand-color);text-decoration:none;white-space:nowrap}.navbar-brand:hover,.navbar-brand:focus{color:var(--bs-navbar-brand-hover-color)}.navbar-nav{--bs-nav-link-padding-x: 0;--bs-nav-link-padding-y: 0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color: var(--bs-navbar-color);--bs-nav-link-hover-color: var(--bs-navbar-hover-color);--bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .show>.nav-link,.navbar-nav .nav-link.active{color:var(--bs-navbar-active-color)}.navbar-nav .dropdown-menu{position:static}.navbar-text{padding-top:.5rem;padding-bottom:.5rem;color:var(--bs-navbar-color)}.navbar-text a,.navbar-text a:hover,.navbar-text a:focus{color:var(--bs-navbar-active-color)}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);font-size:var(--bs-navbar-toggler-font-size);line-height:1;color:var(--bs-navbar-color);background-color:rgba(0,0,0,0);border:var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);border-radius:var(--bs-navbar-toggler-border-radius);transition:var(--bs-navbar-toggler-transition)}@media(prefers-reduced-motion: reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 var(--bs-navbar-toggler-focus-width)}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-image:var(--bs-navbar-toggler-icon-bg);background-repeat:no-repeat;background-position:center;background-size:100%}.navbar-nav-scroll{max-height:var(--bs-scroll-height, 75vh);overflow-y:auto}@media(min-width: 576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}.navbar-expand-sm .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-sm .offcanvas .offcanvas-header{display:none}.navbar-expand-sm .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}.navbar-expand-md .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-md .offcanvas .offcanvas-header{display:none}.navbar-expand-md .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-lg .offcanvas .offcanvas-header{display:none}.navbar-expand-lg .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}.navbar-expand-xl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-xl .offcanvas .offcanvas-header{display:none}.navbar-expand-xl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}.navbar-expand-xxl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-xxl .offcanvas .offcanvas-header{display:none}.navbar-expand-xxl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-expand .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand .offcanvas .offcanvas-header{display:none}.navbar-expand .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}.navbar-dark{--bs-navbar-color: rgba(255, 255, 255, 0.55);--bs-navbar-hover-color: rgba(255, 255, 255, 0.75);--bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);--bs-navbar-active-color: #fff;--bs-navbar-brand-color: #fff;--bs-navbar-brand-hover-color: #fff;--bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);--bs-navbar-toggler-icon-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.card{--bs-card-spacer-y: 1rem;--bs-card-spacer-x: 1rem;--bs-card-title-spacer-y: 0.5rem;--bs-card-border-width: 1px;--bs-card-border-color: var(--bs-border-color-translucent);--bs-card-border-radius: 0.375rem;--bs-card-box-shadow: ;--bs-card-inner-border-radius: calc(0.375rem - 1px);--bs-card-cap-padding-y: 0.5rem;--bs-card-cap-padding-x: 1rem;--bs-card-cap-bg: rgba(0, 0, 0, 0.03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg: #fff;--bs-card-img-overlay-padding: 1rem;--bs-card-group-margin: 0.75rem;position:relative;display:flex;flex-direction:column;min-width:0;height:var(--bs-card-height);word-wrap:break-word;background-color:var(--bs-card-bg);background-clip:border-box;border:var(--bs-card-border-width) solid var(--bs-card-border-color);border-radius:var(--bs-card-border-radius)}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;padding:var(--bs-card-spacer-y) var(--bs-card-spacer-x);color:var(--bs-card-color)}.card-title{margin-bottom:var(--bs-card-title-spacer-y)}.card-subtitle{margin-top:calc(-0.5*var(--bs-card-title-spacer-y));margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link+.card-link{margin-left:var(--bs-card-spacer-x)}.card-header{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);margin-bottom:0;color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-bottom:var(--bs-card-border-width) solid var(--bs-card-border-color)}.card-header:first-child{border-radius:var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0}.card-footer{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-top:var(--bs-card-border-width) solid var(--bs-card-border-color)}.card-footer:last-child{border-radius:0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius)}.card-header-tabs{margin-right:calc(-0.5*var(--bs-card-cap-padding-x));margin-bottom:calc(-1*var(--bs-card-cap-padding-y));margin-left:calc(-0.5*var(--bs-card-cap-padding-x));border-bottom:0}.card-header-tabs .nav-link.active{background-color:var(--bs-card-bg);border-bottom-color:var(--bs-card-bg)}.card-header-pills{margin-right:calc(-0.5*var(--bs-card-cap-padding-x));margin-left:calc(-0.5*var(--bs-card-cap-padding-x))}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:var(--bs-card-img-overlay-padding);border-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-top,.card-img-bottom{width:100%}.card-img,.card-img-top{border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-bottom{border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}.card-group>.card{margin-bottom:var(--bs-card-group-margin)}@media(min-width: 576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-img-top,.card-group>.card:not(:last-child) .card-header{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-img-bottom,.card-group>.card:not(:last-child) .card-footer{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-img-top,.card-group>.card:not(:first-child) .card-header{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-img-bottom,.card-group>.card:not(:first-child) .card-footer{border-bottom-left-radius:0}}.accordion{--bs-accordion-color: #000;--bs-accordion-bg: #fff;--bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;--bs-accordion-border-color: var(--bs-border-color);--bs-accordion-border-width: 1px;--bs-accordion-border-radius: 0.375rem;--bs-accordion-inner-border-radius: calc(0.375rem - 1px);--bs-accordion-btn-padding-x: 1.25rem;--bs-accordion-btn-padding-y: 1rem;--bs-accordion-btn-color: var(--bs-body-color);--bs-accordion-btn-bg: var(--bs-accordion-bg);--bs-accordion-btn-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='var%28--bs-body-color%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");--bs-accordion-btn-icon-width: 1.25rem;--bs-accordion-btn-icon-transform: rotate(-180deg);--bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;--bs-accordion-btn-active-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");--bs-accordion-btn-focus-border-color: #86b7fe;--bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);--bs-accordion-body-padding-x: 1.25rem;--bs-accordion-body-padding-y: 1rem;--bs-accordion-active-color: #0c63e4;--bs-accordion-active-bg: #e7f1ff}.accordion-button{position:relative;display:flex;align-items:center;width:100%;padding:var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);font-size:1rem;color:var(--bs-accordion-btn-color);text-align:left;background-color:var(--bs-accordion-btn-bg);border:0;border-radius:0;overflow-anchor:none;transition:var(--bs-accordion-transition)}@media(prefers-reduced-motion: reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){color:var(--bs-accordion-active-color);background-color:var(--bs-accordion-active-bg);box-shadow:inset 0 calc(var(--bs-accordion-border-width)*-1) 0 var(--bs-accordion-border-color)}.accordion-button:not(.collapsed)::after{background-image:var(--bs-accordion-btn-active-icon);transform:var(--bs-accordion-btn-icon-transform)}.accordion-button::after{flex-shrink:0;width:var(--bs-accordion-btn-icon-width);height:var(--bs-accordion-btn-icon-width);margin-left:auto;content:\"\";background-image:var(--bs-accordion-btn-icon);background-repeat:no-repeat;background-size:var(--bs-accordion-btn-icon-width);transition:var(--bs-accordion-btn-icon-transition)}@media(prefers-reduced-motion: reduce){.accordion-button::after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{z-index:3;border-color:var(--bs-accordion-btn-focus-border-color);outline:0;box-shadow:var(--bs-accordion-btn-focus-box-shadow)}.accordion-header{margin-bottom:0}.accordion-item{color:var(--bs-accordion-color);background-color:var(--bs-accordion-bg);border:var(--bs-accordion-border-width) solid var(--bs-accordion-border-color)}.accordion-item:first-of-type{border-top-left-radius:var(--bs-accordion-border-radius);border-top-right-radius:var(--bs-accordion-border-radius)}.accordion-item:first-of-type .accordion-button{border-top-left-radius:var(--bs-accordion-inner-border-radius);border-top-right-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-right-radius:var(--bs-accordion-inner-border-radius);border-bottom-left-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:last-of-type .accordion-collapse{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-body{padding:var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x)}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item{border-right:0;border-left:0;border-radius:0}.accordion-flush .accordion-item:first-child{border-top:0}.accordion-flush .accordion-item:last-child{border-bottom:0}.accordion-flush .accordion-item .accordion-button{border-radius:0}.breadcrumb{--bs-breadcrumb-padding-x: 0;--bs-breadcrumb-padding-y: 0;--bs-breadcrumb-margin-bottom: 1rem;--bs-breadcrumb-bg: ;--bs-breadcrumb-border-radius: ;--bs-breadcrumb-divider-color: #6c757d;--bs-breadcrumb-item-padding-x: 0.5rem;--bs-breadcrumb-item-active-color: #6c757d;display:flex;flex-wrap:wrap;padding:var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);margin-bottom:var(--bs-breadcrumb-margin-bottom);font-size:var(--bs-breadcrumb-font-size);list-style:none;background-color:var(--bs-breadcrumb-bg);border-radius:var(--bs-breadcrumb-border-radius)}.breadcrumb-item+.breadcrumb-item{padding-left:var(--bs-breadcrumb-item-padding-x)}.breadcrumb-item+.breadcrumb-item::before{float:left;padding-right:var(--bs-breadcrumb-item-padding-x);color:var(--bs-breadcrumb-divider-color);content:var(--bs-breadcrumb-divider, \"/\") /* rtl: var(--bs-breadcrumb-divider, \"/\") */}.breadcrumb-item.active{color:var(--bs-breadcrumb-item-active-color)}.pagination{--bs-pagination-padding-x: 0.75rem;--bs-pagination-padding-y: 0.375rem;--bs-pagination-font-size:1rem;--bs-pagination-color: var(--bs-link-color);--bs-pagination-bg: #fff;--bs-pagination-border-width: 1px;--bs-pagination-border-color: #dee2e6;--bs-pagination-border-radius: 0.375rem;--bs-pagination-hover-color: var(--bs-link-hover-color);--bs-pagination-hover-bg: #e9ecef;--bs-pagination-hover-border-color: #dee2e6;--bs-pagination-focus-color: var(--bs-link-hover-color);--bs-pagination-focus-bg: #e9ecef;--bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);--bs-pagination-active-color: #fff;--bs-pagination-active-bg: #0d6efd;--bs-pagination-active-border-color: #0d6efd;--bs-pagination-disabled-color: #6c757d;--bs-pagination-disabled-bg: #fff;--bs-pagination-disabled-border-color: #dee2e6;display:flex;padding-left:0;list-style:none}.page-link{position:relative;display:block;padding:var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);font-size:var(--bs-pagination-font-size);color:var(--bs-pagination-color);text-decoration:none;background-color:var(--bs-pagination-bg);border:var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.page-link{transition:none}}.page-link:hover{z-index:2;color:var(--bs-pagination-hover-color);background-color:var(--bs-pagination-hover-bg);border-color:var(--bs-pagination-hover-border-color)}.page-link:focus{z-index:3;color:var(--bs-pagination-focus-color);background-color:var(--bs-pagination-focus-bg);outline:0;box-shadow:var(--bs-pagination-focus-box-shadow)}.page-link.active,.active>.page-link{z-index:3;color:var(--bs-pagination-active-color);background-color:var(--bs-pagination-active-bg);border-color:var(--bs-pagination-active-border-color)}.page-link.disabled,.disabled>.page-link{color:var(--bs-pagination-disabled-color);pointer-events:none;background-color:var(--bs-pagination-disabled-bg);border-color:var(--bs-pagination-disabled-border-color)}.page-item:not(:first-child) .page-link{margin-left:-1px}.page-item:first-child .page-link{border-top-left-radius:var(--bs-pagination-border-radius);border-bottom-left-radius:var(--bs-pagination-border-radius)}.page-item:last-child .page-link{border-top-right-radius:var(--bs-pagination-border-radius);border-bottom-right-radius:var(--bs-pagination-border-radius)}.pagination-lg{--bs-pagination-padding-x: 1.5rem;--bs-pagination-padding-y: 0.75rem;--bs-pagination-font-size:1.25rem;--bs-pagination-border-radius: 0.5rem}.pagination-sm{--bs-pagination-padding-x: 0.5rem;--bs-pagination-padding-y: 0.25rem;--bs-pagination-font-size:0.875rem;--bs-pagination-border-radius: 0.25rem}.badge{--bs-badge-padding-x: 0.65em;--bs-badge-padding-y: 0.35em;--bs-badge-font-size:0.75em;--bs-badge-font-weight: 700;--bs-badge-color: #fff;--bs-badge-border-radius: 0.375rem;display:inline-block;padding:var(--bs-badge-padding-y) var(--bs-badge-padding-x);font-size:var(--bs-badge-font-size);font-weight:var(--bs-badge-font-weight);line-height:1;color:var(--bs-badge-color);text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:var(--bs-badge-border-radius)}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{--bs-alert-bg: transparent;--bs-alert-padding-x: 1rem;--bs-alert-padding-y: 1rem;--bs-alert-margin-bottom: 1rem;--bs-alert-color: inherit;--bs-alert-border-color: transparent;--bs-alert-border: 1px solid var(--bs-alert-border-color);--bs-alert-border-radius: 0.375rem;position:relative;padding:var(--bs-alert-padding-y) var(--bs-alert-padding-x);margin-bottom:var(--bs-alert-margin-bottom);color:var(--bs-alert-color);background-color:var(--bs-alert-bg);border:var(--bs-alert-border);border-radius:var(--bs-alert-border-radius)}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{position:absolute;top:0;right:0;z-index:2;padding:1.25rem 1rem}.alert-primary{--bs-alert-color: #084298;--bs-alert-bg: #cfe2ff;--bs-alert-border-color: #b6d4fe}.alert-primary .alert-link{color:#06357a}.alert-secondary{--bs-alert-color: #41464b;--bs-alert-bg: #e2e3e5;--bs-alert-border-color: #d3d6d8}.alert-secondary .alert-link{color:#34383c}.alert-success{--bs-alert-color: #0f5132;--bs-alert-bg: #d1e7dd;--bs-alert-border-color: #badbcc}.alert-success .alert-link{color:#0c4128}.alert-info{--bs-alert-color: #055160;--bs-alert-bg: #cff4fc;--bs-alert-border-color: #b6effb}.alert-info .alert-link{color:#04414d}.alert-warning{--bs-alert-color: #664d03;--bs-alert-bg: #fff3cd;--bs-alert-border-color: #ffecb5}.alert-warning .alert-link{color:#523e02}.alert-danger{--bs-alert-color: #842029;--bs-alert-bg: #f8d7da;--bs-alert-border-color: #f5c2c7}.alert-danger .alert-link{color:#6a1a21}.alert-light{--bs-alert-color: #636464;--bs-alert-bg: #fefefe;--bs-alert-border-color: #fdfdfe}.alert-light .alert-link{color:#4f5050}.alert-dark{--bs-alert-color: #141619;--bs-alert-bg: #d3d3d4;--bs-alert-border-color: #bcbebf}.alert-dark .alert-link{color:#101214}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress{--bs-progress-height: 1rem;--bs-progress-font-size:0.75rem;--bs-progress-bg: #e9ecef;--bs-progress-border-radius: 0.375rem;--bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);--bs-progress-bar-color: #fff;--bs-progress-bar-bg: #0d6efd;--bs-progress-bar-transition: width 0.6s ease;display:flex;height:var(--bs-progress-height);overflow:hidden;font-size:var(--bs-progress-font-size);background-color:var(--bs-progress-bg);border-radius:var(--bs-progress-border-radius)}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:var(--bs-progress-bar-color);text-align:center;white-space:nowrap;background-color:var(--bs-progress-bar-bg);transition:var(--bs-progress-bar-transition)}@media(prefers-reduced-motion: reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);background-size:var(--bs-progress-height) var(--bs-progress-height)}.progress-bar-animated{animation:1s linear infinite progress-bar-stripes}@media(prefers-reduced-motion: reduce){.progress-bar-animated{animation:none}}.list-group{--bs-list-group-color: #212529;--bs-list-group-bg: #fff;--bs-list-group-border-color: rgba(0, 0, 0, 0.125);--bs-list-group-border-width: 1px;--bs-list-group-border-radius: 0.375rem;--bs-list-group-item-padding-x: 1rem;--bs-list-group-item-padding-y: 0.5rem;--bs-list-group-action-color: #495057;--bs-list-group-action-hover-color: #495057;--bs-list-group-action-hover-bg: #f8f9fa;--bs-list-group-action-active-color: #212529;--bs-list-group-action-active-bg: #e9ecef;--bs-list-group-disabled-color: #6c757d;--bs-list-group-disabled-bg: #fff;--bs-list-group-active-color: #fff;--bs-list-group-active-bg: #0d6efd;--bs-list-group-active-border-color: #0d6efd;display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:var(--bs-list-group-border-radius)}.list-group-numbered{list-style-type:none;counter-reset:section}.list-group-numbered>.list-group-item::before{content:counters(section, \".\") \". \";counter-increment:section}.list-group-item-action{width:100%;color:var(--bs-list-group-action-color);text-align:inherit}.list-group-item-action:hover,.list-group-item-action:focus{z-index:1;color:var(--bs-list-group-action-hover-color);text-decoration:none;background-color:var(--bs-list-group-action-hover-bg)}.list-group-item-action:active{color:var(--bs-list-group-action-active-color);background-color:var(--bs-list-group-action-active-bg)}.list-group-item{position:relative;display:block;padding:var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);color:var(--bs-list-group-color);text-decoration:none;background-color:var(--bs-list-group-bg);border:var(--bs-list-group-border-width) solid var(--bs-list-group-border-color)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:var(--bs-list-group-disabled-color);pointer-events:none;background-color:var(--bs-list-group-disabled-bg)}.list-group-item.active{z-index:2;color:var(--bs-list-group-active-color);background-color:var(--bs-list-group-active-bg);border-color:var(--bs-list-group-active-border-color)}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:calc(var(--bs-list-group-border-width)*-1);border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:calc(var(--bs-list-group-border-width)*-1);border-left-width:var(--bs-list-group-border-width)}@media(min-width: 576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:calc(var(--bs-list-group-border-width)*-1);border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:calc(var(--bs-list-group-border-width)*-1);border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:calc(var(--bs-list-group-border-width)*-1);border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:calc(var(--bs-list-group-border-width)*-1);border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child{border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child{border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{margin-left:calc(var(--bs-list-group-border-width)*-1);border-left-width:var(--bs-list-group-border-width)}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 var(--bs-list-group-border-width)}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#084298;background-color:#cfe2ff}.list-group-item-primary.list-group-item-action:hover,.list-group-item-primary.list-group-item-action:focus{color:#084298;background-color:#bacbe6}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#084298;border-color:#084298}.list-group-item-secondary{color:#41464b;background-color:#e2e3e5}.list-group-item-secondary.list-group-item-action:hover,.list-group-item-secondary.list-group-item-action:focus{color:#41464b;background-color:#cbccce}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#41464b;border-color:#41464b}.list-group-item-success{color:#0f5132;background-color:#d1e7dd}.list-group-item-success.list-group-item-action:hover,.list-group-item-success.list-group-item-action:focus{color:#0f5132;background-color:#bcd0c7}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#0f5132;border-color:#0f5132}.list-group-item-info{color:#055160;background-color:#cff4fc}.list-group-item-info.list-group-item-action:hover,.list-group-item-info.list-group-item-action:focus{color:#055160;background-color:#badce3}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#055160;border-color:#055160}.list-group-item-warning{color:#664d03;background-color:#fff3cd}.list-group-item-warning.list-group-item-action:hover,.list-group-item-warning.list-group-item-action:focus{color:#664d03;background-color:#e6dbb9}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#664d03;border-color:#664d03}.list-group-item-danger{color:#842029;background-color:#f8d7da}.list-group-item-danger.list-group-item-action:hover,.list-group-item-danger.list-group-item-action:focus{color:#842029;background-color:#dfc2c4}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#842029;border-color:#842029}.list-group-item-light{color:#636464;background-color:#fefefe}.list-group-item-light.list-group-item-action:hover,.list-group-item-light.list-group-item-action:focus{color:#636464;background-color:#e5e5e5}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#636464;border-color:#636464}.list-group-item-dark{color:#141619;background-color:#d3d3d4}.list-group-item-dark.list-group-item-action:hover,.list-group-item-dark.list-group-item-action:focus{color:#141619;background-color:#bebebf}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#141619;border-color:#141619}.btn-close{box-sizing:content-box;width:1em;height:1em;padding:.25em .25em;color:#000;background:rgba(0,0,0,0) url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;border:0;border-radius:.375rem;opacity:.5}.btn-close:hover{color:#000;text-decoration:none;opacity:.75}.btn-close:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);opacity:1}.btn-close:disabled,.btn-close.disabled{pointer-events:none;user-select:none;opacity:.25}.btn-close-white{filter:invert(1) grayscale(100%) brightness(200%)}.toast{--bs-toast-padding-x: 0.75rem;--bs-toast-padding-y: 0.5rem;--bs-toast-spacing: 1.5rem;--bs-toast-max-width: 350px;--bs-toast-font-size:0.875rem;--bs-toast-color: ;--bs-toast-bg: rgba(255, 255, 255, 0.85);--bs-toast-border-width: 1px;--bs-toast-border-color: var(--bs-border-color-translucent);--bs-toast-border-radius: 0.375rem;--bs-toast-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-toast-header-color: #6c757d;--bs-toast-header-bg: rgba(255, 255, 255, 0.85);--bs-toast-header-border-color: rgba(0, 0, 0, 0.05);width:var(--bs-toast-max-width);max-width:100%;font-size:var(--bs-toast-font-size);color:var(--bs-toast-color);pointer-events:auto;background-color:var(--bs-toast-bg);background-clip:padding-box;border:var(--bs-toast-border-width) solid var(--bs-toast-border-color);box-shadow:var(--bs-toast-box-shadow);border-radius:var(--bs-toast-border-radius)}.toast.showing{opacity:0}.toast:not(.show){display:none}.toast-container{position:absolute;z-index:1090;width:max-content;max-width:100%;pointer-events:none}.toast-container>:not(:last-child){margin-bottom:var(--bs-toast-spacing)}.toast-header{display:flex;align-items:center;padding:var(--bs-toast-padding-y) var(--bs-toast-padding-x);color:var(--bs-toast-header-color);background-color:var(--bs-toast-header-bg);background-clip:padding-box;border-bottom:var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);border-top-left-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));border-top-right-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width))}.toast-header .btn-close{margin-right:calc(var(--bs-toast-padding-x)*-0.5);margin-left:var(--bs-toast-padding-x)}.toast-body{padding:var(--bs-toast-padding-x);word-wrap:break-word}.modal{--bs-modal-zindex: 1055;--bs-modal-width: 500px;--bs-modal-padding: 1rem;--bs-modal-margin: 0.5rem;--bs-modal-color: ;--bs-modal-bg: #fff;--bs-modal-border-color: var(--bs-border-color-translucent);--bs-modal-border-width: 1px;--bs-modal-border-radius: 0.5rem;--bs-modal-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);--bs-modal-inner-border-radius: calc(0.5rem - 1px);--bs-modal-header-padding-x: 1rem;--bs-modal-header-padding-y: 1rem;--bs-modal-header-padding: 1rem 1rem;--bs-modal-header-border-color: var(--bs-border-color);--bs-modal-header-border-width: 1px;--bs-modal-title-line-height: 1.5;--bs-modal-footer-gap: 0.5rem;--bs-modal-footer-bg: ;--bs-modal-footer-border-color: var(--bs-border-color);--bs-modal-footer-border-width: 1px;position:fixed;top:0;left:0;z-index:var(--bs-modal-zindex);display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}.modal-dialog{position:relative;width:auto;margin:var(--bs-modal-margin);pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translate(0, -50px)}@media(prefers-reduced-motion: reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - var(--bs-modal-margin)*2)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - var(--bs-modal-margin)*2)}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;color:var(--bs-modal-color);pointer-events:auto;background-color:var(--bs-modal-bg);background-clip:padding-box;border:var(--bs-modal-border-width) solid var(--bs-modal-border-color);border-radius:var(--bs-modal-border-radius);outline:0}.modal-backdrop{--bs-backdrop-zindex: 1050;--bs-backdrop-bg: #000;--bs-backdrop-opacity: 0.5;position:fixed;top:0;left:0;z-index:var(--bs-backdrop-zindex);width:100vw;height:100vh;background-color:var(--bs-backdrop-bg)}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:var(--bs-backdrop-opacity)}.modal-header{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:var(--bs-modal-header-padding);border-bottom:var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);border-top-left-radius:var(--bs-modal-inner-border-radius);border-top-right-radius:var(--bs-modal-inner-border-radius)}.modal-header .btn-close{padding:calc(var(--bs-modal-header-padding-y)*.5) calc(var(--bs-modal-header-padding-x)*.5);margin:calc(var(--bs-modal-header-padding-y)*-0.5) calc(var(--bs-modal-header-padding-x)*-0.5) calc(var(--bs-modal-header-padding-y)*-0.5) auto}.modal-title{margin-bottom:0;line-height:var(--bs-modal-title-line-height)}.modal-body{position:relative;flex:1 1 auto;padding:var(--bs-modal-padding)}.modal-footer{display:flex;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap)*.5);background-color:var(--bs-modal-footer-bg);border-top:var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);border-bottom-right-radius:var(--bs-modal-inner-border-radius);border-bottom-left-radius:var(--bs-modal-inner-border-radius)}.modal-footer>*{margin:calc(var(--bs-modal-footer-gap)*.5)}@media(min-width: 576px){.modal{--bs-modal-margin: 1.75rem;--bs-modal-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15)}.modal-dialog{max-width:var(--bs-modal-width);margin-right:auto;margin-left:auto}.modal-sm{--bs-modal-width: 300px}}@media(min-width: 992px){.modal-lg,.modal-xl{--bs-modal-width: 800px}}@media(min-width: 1200px){.modal-xl{--bs-modal-width: 1140px}}.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen .modal-header,.modal-fullscreen .modal-footer{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}@media(max-width: 575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-sm-down .modal-header,.modal-fullscreen-sm-down .modal-footer{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}}@media(max-width: 767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-md-down .modal-header,.modal-fullscreen-md-down .modal-footer{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}}@media(max-width: 991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-lg-down .modal-header,.modal-fullscreen-lg-down .modal-footer{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}}@media(max-width: 1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xl-down .modal-header,.modal-fullscreen-xl-down .modal-footer{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}}@media(max-width: 1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xxl-down .modal-header,.modal-fullscreen-xxl-down .modal-footer{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}}.tooltip{--bs-tooltip-zindex: 1080;--bs-tooltip-max-width: 200px;--bs-tooltip-padding-x: 0.5rem;--bs-tooltip-padding-y: 0.25rem;--bs-tooltip-margin: ;--bs-tooltip-font-size:0.875rem;--bs-tooltip-color: #fff;--bs-tooltip-bg: #000;--bs-tooltip-border-radius: 0.375rem;--bs-tooltip-opacity: 0.9;--bs-tooltip-arrow-width: 0.8rem;--bs-tooltip-arrow-height: 0.4rem;z-index:var(--bs-tooltip-zindex);display:block;padding:var(--bs-tooltip-arrow-height);margin:var(--bs-tooltip-margin);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-tooltip-font-size);word-wrap:break-word;opacity:0}.tooltip.show{opacity:var(--bs-tooltip-opacity)}.tooltip .tooltip-arrow{display:block;width:var(--bs-tooltip-arrow-width);height:var(--bs-tooltip-arrow-height)}.tooltip .tooltip-arrow::before{position:absolute;content:\"\";border-color:rgba(0,0,0,0);border-style:solid}.bs-tooltip-top .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow{bottom:0}.bs-tooltip-top .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before{top:-1px;border-width:var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width)*.5) 0;border-top-color:var(--bs-tooltip-bg)}.bs-tooltip-end .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow{left:0;width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-end .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before{right:-1px;border-width:calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width)*.5) 0;border-right-color:var(--bs-tooltip-bg)}.bs-tooltip-bottom .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow{top:0}.bs-tooltip-bottom .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before{bottom:-1px;border-width:0 calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height);border-bottom-color:var(--bs-tooltip-bg)}.bs-tooltip-start .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow{right:0;width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-start .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before{left:-1px;border-width:calc(var(--bs-tooltip-arrow-width)*.5) 0 calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height);border-left-color:var(--bs-tooltip-bg)}.tooltip-inner{max-width:var(--bs-tooltip-max-width);padding:var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);color:var(--bs-tooltip-color);text-align:center;background-color:var(--bs-tooltip-bg);border-radius:var(--bs-tooltip-border-radius)}.popover{--bs-popover-zindex: 1070;--bs-popover-max-width: 276px;--bs-popover-font-size:0.875rem;--bs-popover-bg: #fff;--bs-popover-border-width: 1px;--bs-popover-border-color: var(--bs-border-color-translucent);--bs-popover-border-radius: 0.5rem;--bs-popover-inner-border-radius: calc(0.5rem - 1px);--bs-popover-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-popover-header-padding-x: 1rem;--bs-popover-header-padding-y: 0.5rem;--bs-popover-header-font-size:1rem;--bs-popover-header-color: var(--bs-heading-color);--bs-popover-header-bg: #f0f0f0;--bs-popover-body-padding-x: 1rem;--bs-popover-body-padding-y: 1rem;--bs-popover-body-color: #212529;--bs-popover-arrow-width: 1rem;--bs-popover-arrow-height: 0.5rem;--bs-popover-arrow-border: var(--bs-popover-border-color);z-index:var(--bs-popover-zindex);display:block;max-width:var(--bs-popover-max-width);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-popover-font-size);word-wrap:break-word;background-color:var(--bs-popover-bg);background-clip:padding-box;border:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-radius:var(--bs-popover-border-radius)}.popover .popover-arrow{display:block;width:var(--bs-popover-arrow-width);height:var(--bs-popover-arrow-height)}.popover .popover-arrow::before,.popover .popover-arrow::after{position:absolute;display:block;content:\"\";border-color:rgba(0,0,0,0);border-style:solid;border-width:0}.bs-popover-top>.popover-arrow,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow{bottom:calc(var(--bs-popover-arrow-height)*-1 - var(--bs-popover-border-width))}.bs-popover-top>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before,.bs-popover-top>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after{border-width:var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width)*.5) 0}.bs-popover-top>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before{bottom:0;border-top-color:var(--bs-popover-arrow-border)}.bs-popover-top>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after{bottom:var(--bs-popover-border-width);border-top-color:var(--bs-popover-bg)}.bs-popover-end>.popover-arrow,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow{left:calc(var(--bs-popover-arrow-height)*-1 - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-end>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before,.bs-popover-end>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after{border-width:calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width)*.5) 0}.bs-popover-end>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before{left:0;border-right-color:var(--bs-popover-arrow-border)}.bs-popover-end>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after{left:var(--bs-popover-border-width);border-right-color:var(--bs-popover-bg)}.bs-popover-bottom>.popover-arrow,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow{top:calc(var(--bs-popover-arrow-height)*-1 - var(--bs-popover-border-width))}.bs-popover-bottom>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before,.bs-popover-bottom>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after{border-width:0 calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height)}.bs-popover-bottom>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before{top:0;border-bottom-color:var(--bs-popover-arrow-border)}.bs-popover-bottom>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after{top:var(--bs-popover-border-width);border-bottom-color:var(--bs-popover-bg)}.bs-popover-bottom .popover-header::before,.bs-popover-auto[data-popper-placement^=bottom] .popover-header::before{position:absolute;top:0;left:50%;display:block;width:var(--bs-popover-arrow-width);margin-left:calc(var(--bs-popover-arrow-width)*-0.5);content:\"\";border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-header-bg)}.bs-popover-start>.popover-arrow,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow{right:calc(var(--bs-popover-arrow-height)*-1 - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-start>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before,.bs-popover-start>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after{border-width:calc(var(--bs-popover-arrow-width)*.5) 0 calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height)}.bs-popover-start>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before{right:0;border-left-color:var(--bs-popover-arrow-border)}.bs-popover-start>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after{right:var(--bs-popover-border-width);border-left-color:var(--bs-popover-bg)}.popover-header{padding:var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);margin-bottom:0;font-size:var(--bs-popover-header-font-size);color:var(--bs-popover-header-color);background-color:var(--bs-popover-header-bg);border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-top-left-radius:var(--bs-popover-inner-border-radius);border-top-right-radius:var(--bs-popover-inner-border-radius)}.popover-header:empty{display:none}.popover-body{padding:var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);color:var(--bs-popover-body-color)}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;backface-visibility:hidden;transition:transform .6s ease-in-out}@media(prefers-reduced-motion: reduce){.carousel-item{transition:none}}.carousel-item.active,.carousel-item-next,.carousel-item-prev{display:block}.carousel-item-next:not(.carousel-item-start),.active.carousel-item-end{transform:translateX(100%)}.carousel-item-prev:not(.carousel-item-end),.active.carousel-item-start{transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item.active,.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end{z-index:1;opacity:1}.carousel-fade .active.carousel-item-start,.carousel-fade .active.carousel-item-end{z-index:0;opacity:0;transition:opacity 0s .6s}@media(prefers-reduced-motion: reduce){.carousel-fade .active.carousel-item-start,.carousel-fade .active.carousel-item-end{transition:none}}.carousel-control-prev,.carousel-control-next{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:none;border:0;opacity:.5;transition:opacity .15s ease}@media(prefers-reduced-motion: reduce){.carousel-control-prev,.carousel-control-next{transition:none}}.carousel-control-prev:hover,.carousel-control-prev:focus,.carousel-control-next:hover,.carousel-control-next:focus{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-prev-icon,.carousel-control-next-icon{display:inline-block;width:2rem;height:2rem;background-repeat:no-repeat;background-position:50%;background-size:100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:2;display:flex;justify-content:center;padding:0;margin-right:15%;margin-bottom:1rem;margin-left:15%;list-style:none}.carousel-indicators [data-bs-target]{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;padding:0;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border:0;border-top:10px solid rgba(0,0,0,0);border-bottom:10px solid rgba(0,0,0,0);opacity:.5;transition:opacity .6s ease}@media(prefers-reduced-motion: reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:1.25rem;left:15%;padding-top:1.25rem;padding-bottom:1.25rem;color:#fff;text-align:center}.carousel-dark .carousel-control-prev-icon,.carousel-dark .carousel-control-next-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}.spinner-grow,.spinner-border{display:inline-block;width:var(--bs-spinner-width);height:var(--bs-spinner-height);vertical-align:var(--bs-spinner-vertical-align);border-radius:50%;animation:var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name)}@keyframes spinner-border{to{transform:rotate(360deg) /* rtl:ignore */}}.spinner-border{--bs-spinner-width: 2rem;--bs-spinner-height: 2rem;--bs-spinner-vertical-align: -0.125em;--bs-spinner-border-width: 0.25em;--bs-spinner-animation-speed: 0.75s;--bs-spinner-animation-name: spinner-border;border:var(--bs-spinner-border-width) solid currentcolor;border-right-color:rgba(0,0,0,0)}.spinner-border-sm{--bs-spinner-width: 1rem;--bs-spinner-height: 1rem;--bs-spinner-border-width: 0.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{--bs-spinner-width: 2rem;--bs-spinner-height: 2rem;--bs-spinner-vertical-align: -0.125em;--bs-spinner-animation-speed: 0.75s;--bs-spinner-animation-name: spinner-grow;background-color:currentcolor;opacity:0}.spinner-grow-sm{--bs-spinner-width: 1rem;--bs-spinner-height: 1rem}@media(prefers-reduced-motion: reduce){.spinner-border,.spinner-grow{--bs-spinner-animation-speed: 1.5s}}.offcanvas,.offcanvas-xxl,.offcanvas-xl,.offcanvas-lg,.offcanvas-md,.offcanvas-sm{--bs-offcanvas-width: 400px;--bs-offcanvas-height: 30vh;--bs-offcanvas-padding-x: 1rem;--bs-offcanvas-padding-y: 1rem;--bs-offcanvas-color: ;--bs-offcanvas-bg: #fff;--bs-offcanvas-border-width: 1px;--bs-offcanvas-border-color: var(--bs-border-color-translucent);--bs-offcanvas-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)}@media(max-width: 575.98px){.offcanvas-sm{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 575.98px)and (prefers-reduced-motion: reduce){.offcanvas-sm{transition:none}}@media(max-width: 575.98px){.offcanvas-sm.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media(max-width: 575.98px){.offcanvas-sm.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media(max-width: 575.98px){.offcanvas-sm.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media(max-width: 575.98px){.offcanvas-sm.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media(max-width: 575.98px){.offcanvas-sm.showing,.offcanvas-sm.show:not(.hiding){transform:none}}@media(max-width: 575.98px){.offcanvas-sm.showing,.offcanvas-sm.hiding,.offcanvas-sm.show{visibility:visible}}@media(min-width: 576px){.offcanvas-sm{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-sm .offcanvas-header{display:none}.offcanvas-sm .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 767.98px){.offcanvas-md{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 767.98px)and (prefers-reduced-motion: reduce){.offcanvas-md{transition:none}}@media(max-width: 767.98px){.offcanvas-md.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media(max-width: 767.98px){.offcanvas-md.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media(max-width: 767.98px){.offcanvas-md.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media(max-width: 767.98px){.offcanvas-md.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media(max-width: 767.98px){.offcanvas-md.showing,.offcanvas-md.show:not(.hiding){transform:none}}@media(max-width: 767.98px){.offcanvas-md.showing,.offcanvas-md.hiding,.offcanvas-md.show{visibility:visible}}@media(min-width: 768px){.offcanvas-md{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-md .offcanvas-header{display:none}.offcanvas-md .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 991.98px){.offcanvas-lg{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 991.98px)and (prefers-reduced-motion: reduce){.offcanvas-lg{transition:none}}@media(max-width: 991.98px){.offcanvas-lg.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media(max-width: 991.98px){.offcanvas-lg.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media(max-width: 991.98px){.offcanvas-lg.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media(max-width: 991.98px){.offcanvas-lg.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media(max-width: 991.98px){.offcanvas-lg.showing,.offcanvas-lg.show:not(.hiding){transform:none}}@media(max-width: 991.98px){.offcanvas-lg.showing,.offcanvas-lg.hiding,.offcanvas-lg.show{visibility:visible}}@media(min-width: 992px){.offcanvas-lg{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-lg .offcanvas-header{display:none}.offcanvas-lg .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 1199.98px){.offcanvas-xl{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 1199.98px)and (prefers-reduced-motion: reduce){.offcanvas-xl{transition:none}}@media(max-width: 1199.98px){.offcanvas-xl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media(max-width: 1199.98px){.offcanvas-xl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media(max-width: 1199.98px){.offcanvas-xl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media(max-width: 1199.98px){.offcanvas-xl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media(max-width: 1199.98px){.offcanvas-xl.showing,.offcanvas-xl.show:not(.hiding){transform:none}}@media(max-width: 1199.98px){.offcanvas-xl.showing,.offcanvas-xl.hiding,.offcanvas-xl.show{visibility:visible}}@media(min-width: 1200px){.offcanvas-xl{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-xl .offcanvas-header{display:none}.offcanvas-xl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 1399.98px){.offcanvas-xxl{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 1399.98px)and (prefers-reduced-motion: reduce){.offcanvas-xxl{transition:none}}@media(max-width: 1399.98px){.offcanvas-xxl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media(max-width: 1399.98px){.offcanvas-xxl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media(max-width: 1399.98px){.offcanvas-xxl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media(max-width: 1399.98px){.offcanvas-xxl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media(max-width: 1399.98px){.offcanvas-xxl.showing,.offcanvas-xxl.show:not(.hiding){transform:none}}@media(max-width: 1399.98px){.offcanvas-xxl.showing,.offcanvas-xxl.hiding,.offcanvas-xxl.show{visibility:visible}}@media(min-width: 1400px){.offcanvas-xxl{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-xxl .offcanvas-header{display:none}.offcanvas-xxl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}.offcanvas{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}@media(prefers-reduced-motion: reduce){.offcanvas{transition:none}}.offcanvas.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas.showing,.offcanvas.show:not(.hiding){transform:none}.offcanvas.showing,.offcanvas.hiding,.offcanvas.show{visibility:visible}.offcanvas-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.offcanvas-backdrop.fade{opacity:0}.offcanvas-backdrop.show{opacity:.5}.offcanvas-header{display:flex;align-items:center;justify-content:space-between;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)}.offcanvas-header .btn-close{padding:calc(var(--bs-offcanvas-padding-y)*.5) calc(var(--bs-offcanvas-padding-x)*.5);margin-top:calc(var(--bs-offcanvas-padding-y)*-0.5);margin-right:calc(var(--bs-offcanvas-padding-x)*-0.5);margin-bottom:calc(var(--bs-offcanvas-padding-y)*-0.5)}.offcanvas-title{margin-bottom:0;line-height:1.5}.offcanvas-body{flex-grow:1;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);overflow-y:auto}.placeholder{display:inline-block;min-height:1em;vertical-align:middle;cursor:wait;background-color:currentcolor;opacity:.5}.placeholder.btn::before{display:inline-block;content:\"\"}.placeholder-xs{min-height:.6em}.placeholder-sm{min-height:.8em}.placeholder-lg{min-height:1.2em}.placeholder-glow .placeholder{animation:placeholder-glow 2s ease-in-out infinite}@keyframes placeholder-glow{50%{opacity:.2}}.placeholder-wave{mask-image:linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);mask-size:200% 100%;animation:placeholder-wave 2s linear infinite}@keyframes placeholder-wave{100%{mask-position:-200% 0%}}.clearfix::after{display:block;clear:both;content:\"\"}.text-bg-primary{color:#fff !important;background-color:RGBA(13, 110, 253, var(--bs-bg-opacity, 1)) !important}.text-bg-secondary{color:#fff !important;background-color:RGBA(108, 117, 125, var(--bs-bg-opacity, 1)) !important}.text-bg-success{color:#fff !important;background-color:RGBA(25, 135, 84, var(--bs-bg-opacity, 1)) !important}.text-bg-info{color:#000 !important;background-color:RGBA(13, 202, 240, var(--bs-bg-opacity, 1)) !important}.text-bg-warning{color:#000 !important;background-color:RGBA(255, 193, 7, var(--bs-bg-opacity, 1)) !important}.text-bg-danger{color:#fff !important;background-color:RGBA(220, 53, 69, var(--bs-bg-opacity, 1)) !important}.text-bg-light{color:#000 !important;background-color:RGBA(248, 249, 250, var(--bs-bg-opacity, 1)) !important}.text-bg-dark{color:#fff !important;background-color:RGBA(33, 37, 41, var(--bs-bg-opacity, 1)) !important}.link-primary{color:#0d6efd !important}.link-primary:hover,.link-primary:focus{color:#0a58ca !important}.link-secondary{color:#6c757d !important}.link-secondary:hover,.link-secondary:focus{color:#565e64 !important}.link-success{color:#198754 !important}.link-success:hover,.link-success:focus{color:#146c43 !important}.link-info{color:#0dcaf0 !important}.link-info:hover,.link-info:focus{color:#3dd5f3 !important}.link-warning{color:#ffc107 !important}.link-warning:hover,.link-warning:focus{color:#ffcd39 !important}.link-danger{color:#dc3545 !important}.link-danger:hover,.link-danger:focus{color:#b02a37 !important}.link-light{color:#f8f9fa !important}.link-light:hover,.link-light:focus{color:#f9fafb !important}.link-dark{color:#212529 !important}.link-dark:hover,.link-dark:focus{color:#1a1e21 !important}.ratio{position:relative;width:100%}.ratio::before{display:block;padding-top:var(--bs-aspect-ratio);content:\"\"}.ratio>*{position:absolute;top:0;left:0;width:100%;height:100%}.ratio-1x1{--bs-aspect-ratio: 100%}.ratio-4x3{--bs-aspect-ratio: 75%}.ratio-16x9{--bs-aspect-ratio: 56.25%}.ratio-21x9{--bs-aspect-ratio: 42.8571428571%}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.sticky-top{position:sticky;top:0;z-index:1020}.sticky-bottom{position:sticky;bottom:0;z-index:1020}@media(min-width: 576px){.sticky-sm-top{position:sticky;top:0;z-index:1020}.sticky-sm-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 768px){.sticky-md-top{position:sticky;top:0;z-index:1020}.sticky-md-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 992px){.sticky-lg-top{position:sticky;top:0;z-index:1020}.sticky-lg-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 1200px){.sticky-xl-top{position:sticky;top:0;z-index:1020}.sticky-xl-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 1400px){.sticky-xxl-top{position:sticky;top:0;z-index:1020}.sticky-xxl-bottom{position:sticky;bottom:0;z-index:1020}}.hstack{display:flex;flex-direction:row;align-items:center;align-self:stretch}.vstack{display:flex;flex:1 1 auto;flex-direction:column;align-self:stretch}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border:0 !important}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:\"\"}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vr{display:inline-block;align-self:stretch;width:1px;min-height:1em;background-color:currentcolor;opacity:.25}.align-baseline{vertical-align:baseline !important}.align-top{vertical-align:top !important}.align-middle{vertical-align:middle !important}.align-bottom{vertical-align:bottom !important}.align-text-bottom{vertical-align:text-bottom !important}.align-text-top{vertical-align:text-top !important}.float-start{float:left !important}.float-end{float:right !important}.float-none{float:none !important}.opacity-0{opacity:0 !important}.opacity-25{opacity:.25 !important}.opacity-50{opacity:.5 !important}.opacity-75{opacity:.75 !important}.opacity-100{opacity:1 !important}.overflow-auto{overflow:auto !important}.overflow-hidden{overflow:hidden !important}.overflow-visible{overflow:visible !important}.overflow-scroll{overflow:scroll !important}.d-inline{display:inline !important}.d-inline-block{display:inline-block !important}.d-block{display:block !important}.d-grid{display:grid !important}.d-table{display:table !important}.d-table-row{display:table-row !important}.d-table-cell{display:table-cell !important}.d-flex{display:flex !important}.d-inline-flex{display:inline-flex !important}.d-none{display:none !important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15) !important}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075) !important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175) !important}.shadow-none{box-shadow:none !important}.position-static{position:static !important}.position-relative{position:relative !important}.position-absolute{position:absolute !important}.position-fixed{position:fixed !important}.position-sticky{position:sticky !important}.top-0{top:0 !important}.top-50{top:50% !important}.top-100{top:100% !important}.bottom-0{bottom:0 !important}.bottom-50{bottom:50% !important}.bottom-100{bottom:100% !important}.start-0{left:0 !important}.start-50{left:50% !important}.start-100{left:100% !important}.end-0{right:0 !important}.end-50{right:50% !important}.end-100{right:100% !important}.translate-middle{transform:translate(-50%, -50%) !important}.translate-middle-x{transform:translateX(-50%) !important}.translate-middle-y{transform:translateY(-50%) !important}.border{border:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-0{border:0 !important}.border-top{border-top:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-top-0{border-top:0 !important}.border-end{border-right:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-end-0{border-right:0 !important}.border-bottom{border-bottom:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-bottom-0{border-bottom:0 !important}.border-start{border-left:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-start-0{border-left:0 !important}.border-primary{--bs-border-opacity: 1;border-color:rgba(var(--bs-primary-rgb), var(--bs-border-opacity)) !important}.border-secondary{--bs-border-opacity: 1;border-color:rgba(var(--bs-secondary-rgb), var(--bs-border-opacity)) !important}.border-success{--bs-border-opacity: 1;border-color:rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important}.border-info{--bs-border-opacity: 1;border-color:rgba(var(--bs-info-rgb), var(--bs-border-opacity)) !important}.border-warning{--bs-border-opacity: 1;border-color:rgba(var(--bs-warning-rgb), var(--bs-border-opacity)) !important}.border-danger{--bs-border-opacity: 1;border-color:rgba(var(--bs-danger-rgb), var(--bs-border-opacity)) !important}.border-light{--bs-border-opacity: 1;border-color:rgba(var(--bs-light-rgb), var(--bs-border-opacity)) !important}.border-dark{--bs-border-opacity: 1;border-color:rgba(var(--bs-dark-rgb), var(--bs-border-opacity)) !important}.border-white{--bs-border-opacity: 1;border-color:rgba(var(--bs-white-rgb), var(--bs-border-opacity)) !important}.border-1{--bs-border-width: 1px}.border-2{--bs-border-width: 2px}.border-3{--bs-border-width: 3px}.border-4{--bs-border-width: 4px}.border-5{--bs-border-width: 5px}.border-opacity-10{--bs-border-opacity: 0.1}.border-opacity-25{--bs-border-opacity: 0.25}.border-opacity-50{--bs-border-opacity: 0.5}.border-opacity-75{--bs-border-opacity: 0.75}.border-opacity-100{--bs-border-opacity: 1}.w-25{width:25% !important}.w-50{width:50% !important}.w-75{width:75% !important}.w-100{width:100% !important}.w-auto{width:auto !important}.mw-100{max-width:100% !important}.vw-100{width:100vw !important}.min-vw-100{min-width:100vw !important}.h-25{height:25% !important}.h-50{height:50% !important}.h-75{height:75% !important}.h-100{height:100% !important}.h-auto{height:auto !important}.mh-100{max-height:100% !important}.vh-100{height:100vh !important}.min-vh-100{min-height:100vh !important}.flex-fill{flex:1 1 auto !important}.flex-row{flex-direction:row !important}.flex-column{flex-direction:column !important}.flex-row-reverse{flex-direction:row-reverse !important}.flex-column-reverse{flex-direction:column-reverse !important}.flex-grow-0{flex-grow:0 !important}.flex-grow-1{flex-grow:1 !important}.flex-shrink-0{flex-shrink:0 !important}.flex-shrink-1{flex-shrink:1 !important}.flex-wrap{flex-wrap:wrap !important}.flex-nowrap{flex-wrap:nowrap !important}.flex-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-start{justify-content:flex-start !important}.justify-content-end{justify-content:flex-end !important}.justify-content-center{justify-content:center !important}.justify-content-between{justify-content:space-between !important}.justify-content-around{justify-content:space-around !important}.justify-content-evenly{justify-content:space-evenly !important}.align-items-start{align-items:flex-start !important}.align-items-end{align-items:flex-end !important}.align-items-center{align-items:center !important}.align-items-baseline{align-items:baseline !important}.align-items-stretch{align-items:stretch !important}.align-content-start{align-content:flex-start !important}.align-content-end{align-content:flex-end !important}.align-content-center{align-content:center !important}.align-content-between{align-content:space-between !important}.align-content-around{align-content:space-around !important}.align-content-stretch{align-content:stretch !important}.align-self-auto{align-self:auto !important}.align-self-start{align-self:flex-start !important}.align-self-end{align-self:flex-end !important}.align-self-center{align-self:center !important}.align-self-baseline{align-self:baseline !important}.align-self-stretch{align-self:stretch !important}.order-first{order:-1 !important}.order-0{order:0 !important}.order-1{order:1 !important}.order-2{order:2 !important}.order-3{order:3 !important}.order-4{order:4 !important}.order-5{order:5 !important}.order-last{order:6 !important}.m-0{margin:0 !important}.m-1{margin:.25rem !important}.m-2{margin:.5rem !important}.m-3{margin:1rem !important}.m-4{margin:1.5rem !important}.m-5{margin:3rem !important}.m-auto{margin:auto !important}.mx-0{margin-right:0 !important;margin-left:0 !important}.mx-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-3{margin-right:1rem !important;margin-left:1rem !important}.mx-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-5{margin-right:3rem !important;margin-left:3rem !important}.mx-auto{margin-right:auto !important;margin-left:auto !important}.my-0{margin-top:0 !important;margin-bottom:0 !important}.my-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-0{margin-top:0 !important}.mt-1{margin-top:.25rem !important}.mt-2{margin-top:.5rem !important}.mt-3{margin-top:1rem !important}.mt-4{margin-top:1.5rem !important}.mt-5{margin-top:3rem !important}.mt-auto{margin-top:auto !important}.me-0{margin-right:0 !important}.me-1{margin-right:.25rem !important}.me-2{margin-right:.5rem !important}.me-3{margin-right:1rem !important}.me-4{margin-right:1.5rem !important}.me-5{margin-right:3rem !important}.me-auto{margin-right:auto !important}.mb-0{margin-bottom:0 !important}.mb-1{margin-bottom:.25rem !important}.mb-2{margin-bottom:.5rem !important}.mb-3{margin-bottom:1rem !important}.mb-4{margin-bottom:1.5rem !important}.mb-5{margin-bottom:3rem !important}.mb-auto{margin-bottom:auto !important}.ms-0{margin-left:0 !important}.ms-1{margin-left:.25rem !important}.ms-2{margin-left:.5rem !important}.ms-3{margin-left:1rem !important}.ms-4{margin-left:1.5rem !important}.ms-5{margin-left:3rem !important}.ms-auto{margin-left:auto !important}.p-0{padding:0 !important}.p-1{padding:.25rem !important}.p-2{padding:.5rem !important}.p-3{padding:1rem !important}.p-4{padding:1.5rem !important}.p-5{padding:3rem !important}.px-0{padding-right:0 !important;padding-left:0 !important}.px-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-3{padding-right:1rem !important;padding-left:1rem !important}.px-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-5{padding-right:3rem !important;padding-left:3rem !important}.py-0{padding-top:0 !important;padding-bottom:0 !important}.py-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-0{padding-top:0 !important}.pt-1{padding-top:.25rem !important}.pt-2{padding-top:.5rem !important}.pt-3{padding-top:1rem !important}.pt-4{padding-top:1.5rem !important}.pt-5{padding-top:3rem !important}.pe-0{padding-right:0 !important}.pe-1{padding-right:.25rem !important}.pe-2{padding-right:.5rem !important}.pe-3{padding-right:1rem !important}.pe-4{padding-right:1.5rem !important}.pe-5{padding-right:3rem !important}.pb-0{padding-bottom:0 !important}.pb-1{padding-bottom:.25rem !important}.pb-2{padding-bottom:.5rem !important}.pb-3{padding-bottom:1rem !important}.pb-4{padding-bottom:1.5rem !important}.pb-5{padding-bottom:3rem !important}.ps-0{padding-left:0 !important}.ps-1{padding-left:.25rem !important}.ps-2{padding-left:.5rem !important}.ps-3{padding-left:1rem !important}.ps-4{padding-left:1.5rem !important}.ps-5{padding-left:3rem !important}.gap-0{gap:0 !important}.gap-1{gap:.25rem !important}.gap-2{gap:.5rem !important}.gap-3{gap:1rem !important}.gap-4{gap:1.5rem !important}.gap-5{gap:3rem !important}.font-monospace{font-family:var(--bs-font-monospace) !important}.fs-1{font-size:calc(1.375rem + 1.5vw) !important}.fs-2{font-size:calc(1.325rem + 0.9vw) !important}.fs-3{font-size:calc(1.3rem + 0.6vw) !important}.fs-4{font-size:calc(1.275rem + 0.3vw) !important}.fs-5{font-size:1.25rem !important}.fs-6{font-size:1rem !important}.fst-italic{font-style:italic !important}.fst-normal{font-style:normal !important}.fw-light{font-weight:300 !important}.fw-lighter{font-weight:lighter !important}.fw-normal{font-weight:400 !important}.fw-bold{font-weight:700 !important}.fw-semibold{font-weight:600 !important}.fw-bolder{font-weight:bolder !important}.lh-1{line-height:1 !important}.lh-sm{line-height:1.25 !important}.lh-base{line-height:1.5 !important}.lh-lg{line-height:2 !important}.text-start{text-align:left !important}.text-end{text-align:right !important}.text-center{text-align:center !important}.text-decoration-none{text-decoration:none !important}.text-decoration-underline{text-decoration:underline !important}.text-decoration-line-through{text-decoration:line-through !important}.text-lowercase{text-transform:lowercase !important}.text-uppercase{text-transform:uppercase !important}.text-capitalize{text-transform:capitalize !important}.text-wrap{white-space:normal !important}.text-nowrap{white-space:nowrap !important}.text-break{word-wrap:break-word !important;word-break:break-word !important}.text-primary{--bs-text-opacity: 1;color:rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important}.text-secondary{--bs-text-opacity: 1;color:rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important}.text-success{--bs-text-opacity: 1;color:rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important}.text-info{--bs-text-opacity: 1;color:rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important}.text-warning{--bs-text-opacity: 1;color:rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important}.text-danger{--bs-text-opacity: 1;color:rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important}.text-light{--bs-text-opacity: 1;color:rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important}.text-dark{--bs-text-opacity: 1;color:rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important}.text-black{--bs-text-opacity: 1;color:rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important}.text-white{--bs-text-opacity: 1;color:rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important}.text-body{--bs-text-opacity: 1;color:rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important}.text-muted{--bs-text-opacity: 1;color:#6c757d !important}.text-black-50{--bs-text-opacity: 1;color:rgba(0,0,0,.5) !important}.text-white-50{--bs-text-opacity: 1;color:rgba(255,255,255,.5) !important}.text-reset{--bs-text-opacity: 1;color:inherit !important}.text-opacity-25{--bs-text-opacity: 0.25}.text-opacity-50{--bs-text-opacity: 0.5}.text-opacity-75{--bs-text-opacity: 0.75}.text-opacity-100{--bs-text-opacity: 1}.bg-primary{--bs-bg-opacity: 1;background-color:rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important}.bg-secondary{--bs-bg-opacity: 1;background-color:rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important}.bg-success{--bs-bg-opacity: 1;background-color:rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important}.bg-info{--bs-bg-opacity: 1;background-color:rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important}.bg-warning{--bs-bg-opacity: 1;background-color:rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important}.bg-danger{--bs-bg-opacity: 1;background-color:rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important}.bg-light{--bs-bg-opacity: 1;background-color:rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important}.bg-dark{--bs-bg-opacity: 1;background-color:rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important}.bg-black{--bs-bg-opacity: 1;background-color:rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important}.bg-white{--bs-bg-opacity: 1;background-color:rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important}.bg-body{--bs-bg-opacity: 1;background-color:rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important}.bg-transparent{--bs-bg-opacity: 1;background-color:rgba(0,0,0,0) !important}.bg-opacity-10{--bs-bg-opacity: 0.1}.bg-opacity-25{--bs-bg-opacity: 0.25}.bg-opacity-50{--bs-bg-opacity: 0.5}.bg-opacity-75{--bs-bg-opacity: 0.75}.bg-opacity-100{--bs-bg-opacity: 1}.bg-gradient{background-image:var(--bs-gradient) !important}.user-select-all{user-select:all !important}.user-select-auto{user-select:auto !important}.user-select-none{user-select:none !important}.pe-none{pointer-events:none !important}.pe-auto{pointer-events:auto !important}.rounded{border-radius:var(--bs-border-radius) !important}.rounded-0{border-radius:0 !important}.rounded-1{border-radius:var(--bs-border-radius-sm) !important}.rounded-2{border-radius:var(--bs-border-radius) !important}.rounded-3{border-radius:var(--bs-border-radius-lg) !important}.rounded-4{border-radius:var(--bs-border-radius-xl) !important}.rounded-5{border-radius:var(--bs-border-radius-2xl) !important}.rounded-circle{border-radius:50% !important}.rounded-pill{border-radius:var(--bs-border-radius-pill) !important}.rounded-top{border-top-left-radius:var(--bs-border-radius) !important;border-top-right-radius:var(--bs-border-radius) !important}.rounded-end{border-top-right-radius:var(--bs-border-radius) !important;border-bottom-right-radius:var(--bs-border-radius) !important}.rounded-bottom{border-bottom-right-radius:var(--bs-border-radius) !important;border-bottom-left-radius:var(--bs-border-radius) !important}.rounded-start{border-bottom-left-radius:var(--bs-border-radius) !important;border-top-left-radius:var(--bs-border-radius) !important}.visible{visibility:visible !important}.invisible{visibility:hidden !important}@media(min-width: 576px){.float-sm-start{float:left !important}.float-sm-end{float:right !important}.float-sm-none{float:none !important}.d-sm-inline{display:inline !important}.d-sm-inline-block{display:inline-block !important}.d-sm-block{display:block !important}.d-sm-grid{display:grid !important}.d-sm-table{display:table !important}.d-sm-table-row{display:table-row !important}.d-sm-table-cell{display:table-cell !important}.d-sm-flex{display:flex !important}.d-sm-inline-flex{display:inline-flex !important}.d-sm-none{display:none !important}.flex-sm-fill{flex:1 1 auto !important}.flex-sm-row{flex-direction:row !important}.flex-sm-column{flex-direction:column !important}.flex-sm-row-reverse{flex-direction:row-reverse !important}.flex-sm-column-reverse{flex-direction:column-reverse !important}.flex-sm-grow-0{flex-grow:0 !important}.flex-sm-grow-1{flex-grow:1 !important}.flex-sm-shrink-0{flex-shrink:0 !important}.flex-sm-shrink-1{flex-shrink:1 !important}.flex-sm-wrap{flex-wrap:wrap !important}.flex-sm-nowrap{flex-wrap:nowrap !important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-sm-start{justify-content:flex-start !important}.justify-content-sm-end{justify-content:flex-end !important}.justify-content-sm-center{justify-content:center !important}.justify-content-sm-between{justify-content:space-between !important}.justify-content-sm-around{justify-content:space-around !important}.justify-content-sm-evenly{justify-content:space-evenly !important}.align-items-sm-start{align-items:flex-start !important}.align-items-sm-end{align-items:flex-end !important}.align-items-sm-center{align-items:center !important}.align-items-sm-baseline{align-items:baseline !important}.align-items-sm-stretch{align-items:stretch !important}.align-content-sm-start{align-content:flex-start !important}.align-content-sm-end{align-content:flex-end !important}.align-content-sm-center{align-content:center !important}.align-content-sm-between{align-content:space-between !important}.align-content-sm-around{align-content:space-around !important}.align-content-sm-stretch{align-content:stretch !important}.align-self-sm-auto{align-self:auto !important}.align-self-sm-start{align-self:flex-start !important}.align-self-sm-end{align-self:flex-end !important}.align-self-sm-center{align-self:center !important}.align-self-sm-baseline{align-self:baseline !important}.align-self-sm-stretch{align-self:stretch !important}.order-sm-first{order:-1 !important}.order-sm-0{order:0 !important}.order-sm-1{order:1 !important}.order-sm-2{order:2 !important}.order-sm-3{order:3 !important}.order-sm-4{order:4 !important}.order-sm-5{order:5 !important}.order-sm-last{order:6 !important}.m-sm-0{margin:0 !important}.m-sm-1{margin:.25rem !important}.m-sm-2{margin:.5rem !important}.m-sm-3{margin:1rem !important}.m-sm-4{margin:1.5rem !important}.m-sm-5{margin:3rem !important}.m-sm-auto{margin:auto !important}.mx-sm-0{margin-right:0 !important;margin-left:0 !important}.mx-sm-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-sm-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-sm-3{margin-right:1rem !important;margin-left:1rem !important}.mx-sm-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-sm-5{margin-right:3rem !important;margin-left:3rem !important}.mx-sm-auto{margin-right:auto !important;margin-left:auto !important}.my-sm-0{margin-top:0 !important;margin-bottom:0 !important}.my-sm-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-sm-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-sm-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-sm-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-sm-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-sm-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-sm-0{margin-top:0 !important}.mt-sm-1{margin-top:.25rem !important}.mt-sm-2{margin-top:.5rem !important}.mt-sm-3{margin-top:1rem !important}.mt-sm-4{margin-top:1.5rem !important}.mt-sm-5{margin-top:3rem !important}.mt-sm-auto{margin-top:auto !important}.me-sm-0{margin-right:0 !important}.me-sm-1{margin-right:.25rem !important}.me-sm-2{margin-right:.5rem !important}.me-sm-3{margin-right:1rem !important}.me-sm-4{margin-right:1.5rem !important}.me-sm-5{margin-right:3rem !important}.me-sm-auto{margin-right:auto !important}.mb-sm-0{margin-bottom:0 !important}.mb-sm-1{margin-bottom:.25rem !important}.mb-sm-2{margin-bottom:.5rem !important}.mb-sm-3{margin-bottom:1rem !important}.mb-sm-4{margin-bottom:1.5rem !important}.mb-sm-5{margin-bottom:3rem !important}.mb-sm-auto{margin-bottom:auto !important}.ms-sm-0{margin-left:0 !important}.ms-sm-1{margin-left:.25rem !important}.ms-sm-2{margin-left:.5rem !important}.ms-sm-3{margin-left:1rem !important}.ms-sm-4{margin-left:1.5rem !important}.ms-sm-5{margin-left:3rem !important}.ms-sm-auto{margin-left:auto !important}.p-sm-0{padding:0 !important}.p-sm-1{padding:.25rem !important}.p-sm-2{padding:.5rem !important}.p-sm-3{padding:1rem !important}.p-sm-4{padding:1.5rem !important}.p-sm-5{padding:3rem !important}.px-sm-0{padding-right:0 !important;padding-left:0 !important}.px-sm-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-sm-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-sm-3{padding-right:1rem !important;padding-left:1rem !important}.px-sm-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-sm-5{padding-right:3rem !important;padding-left:3rem !important}.py-sm-0{padding-top:0 !important;padding-bottom:0 !important}.py-sm-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-sm-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-sm-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-sm-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-sm-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-sm-0{padding-top:0 !important}.pt-sm-1{padding-top:.25rem !important}.pt-sm-2{padding-top:.5rem !important}.pt-sm-3{padding-top:1rem !important}.pt-sm-4{padding-top:1.5rem !important}.pt-sm-5{padding-top:3rem !important}.pe-sm-0{padding-right:0 !important}.pe-sm-1{padding-right:.25rem !important}.pe-sm-2{padding-right:.5rem !important}.pe-sm-3{padding-right:1rem !important}.pe-sm-4{padding-right:1.5rem !important}.pe-sm-5{padding-right:3rem !important}.pb-sm-0{padding-bottom:0 !important}.pb-sm-1{padding-bottom:.25rem !important}.pb-sm-2{padding-bottom:.5rem !important}.pb-sm-3{padding-bottom:1rem !important}.pb-sm-4{padding-bottom:1.5rem !important}.pb-sm-5{padding-bottom:3rem !important}.ps-sm-0{padding-left:0 !important}.ps-sm-1{padding-left:.25rem !important}.ps-sm-2{padding-left:.5rem !important}.ps-sm-3{padding-left:1rem !important}.ps-sm-4{padding-left:1.5rem !important}.ps-sm-5{padding-left:3rem !important}.gap-sm-0{gap:0 !important}.gap-sm-1{gap:.25rem !important}.gap-sm-2{gap:.5rem !important}.gap-sm-3{gap:1rem !important}.gap-sm-4{gap:1.5rem !important}.gap-sm-5{gap:3rem !important}.text-sm-start{text-align:left !important}.text-sm-end{text-align:right !important}.text-sm-center{text-align:center !important}}@media(min-width: 768px){.float-md-start{float:left !important}.float-md-end{float:right !important}.float-md-none{float:none !important}.d-md-inline{display:inline !important}.d-md-inline-block{display:inline-block !important}.d-md-block{display:block !important}.d-md-grid{display:grid !important}.d-md-table{display:table !important}.d-md-table-row{display:table-row !important}.d-md-table-cell{display:table-cell !important}.d-md-flex{display:flex !important}.d-md-inline-flex{display:inline-flex !important}.d-md-none{display:none !important}.flex-md-fill{flex:1 1 auto !important}.flex-md-row{flex-direction:row !important}.flex-md-column{flex-direction:column !important}.flex-md-row-reverse{flex-direction:row-reverse !important}.flex-md-column-reverse{flex-direction:column-reverse !important}.flex-md-grow-0{flex-grow:0 !important}.flex-md-grow-1{flex-grow:1 !important}.flex-md-shrink-0{flex-shrink:0 !important}.flex-md-shrink-1{flex-shrink:1 !important}.flex-md-wrap{flex-wrap:wrap !important}.flex-md-nowrap{flex-wrap:nowrap !important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-md-start{justify-content:flex-start !important}.justify-content-md-end{justify-content:flex-end !important}.justify-content-md-center{justify-content:center !important}.justify-content-md-between{justify-content:space-between !important}.justify-content-md-around{justify-content:space-around !important}.justify-content-md-evenly{justify-content:space-evenly !important}.align-items-md-start{align-items:flex-start !important}.align-items-md-end{align-items:flex-end !important}.align-items-md-center{align-items:center !important}.align-items-md-baseline{align-items:baseline !important}.align-items-md-stretch{align-items:stretch !important}.align-content-md-start{align-content:flex-start !important}.align-content-md-end{align-content:flex-end !important}.align-content-md-center{align-content:center !important}.align-content-md-between{align-content:space-between !important}.align-content-md-around{align-content:space-around !important}.align-content-md-stretch{align-content:stretch !important}.align-self-md-auto{align-self:auto !important}.align-self-md-start{align-self:flex-start !important}.align-self-md-end{align-self:flex-end !important}.align-self-md-center{align-self:center !important}.align-self-md-baseline{align-self:baseline !important}.align-self-md-stretch{align-self:stretch !important}.order-md-first{order:-1 !important}.order-md-0{order:0 !important}.order-md-1{order:1 !important}.order-md-2{order:2 !important}.order-md-3{order:3 !important}.order-md-4{order:4 !important}.order-md-5{order:5 !important}.order-md-last{order:6 !important}.m-md-0{margin:0 !important}.m-md-1{margin:.25rem !important}.m-md-2{margin:.5rem !important}.m-md-3{margin:1rem !important}.m-md-4{margin:1.5rem !important}.m-md-5{margin:3rem !important}.m-md-auto{margin:auto !important}.mx-md-0{margin-right:0 !important;margin-left:0 !important}.mx-md-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-md-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-md-3{margin-right:1rem !important;margin-left:1rem !important}.mx-md-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-md-5{margin-right:3rem !important;margin-left:3rem !important}.mx-md-auto{margin-right:auto !important;margin-left:auto !important}.my-md-0{margin-top:0 !important;margin-bottom:0 !important}.my-md-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-md-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-md-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-md-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-md-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-md-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-md-0{margin-top:0 !important}.mt-md-1{margin-top:.25rem !important}.mt-md-2{margin-top:.5rem !important}.mt-md-3{margin-top:1rem !important}.mt-md-4{margin-top:1.5rem !important}.mt-md-5{margin-top:3rem !important}.mt-md-auto{margin-top:auto !important}.me-md-0{margin-right:0 !important}.me-md-1{margin-right:.25rem !important}.me-md-2{margin-right:.5rem !important}.me-md-3{margin-right:1rem !important}.me-md-4{margin-right:1.5rem !important}.me-md-5{margin-right:3rem !important}.me-md-auto{margin-right:auto !important}.mb-md-0{margin-bottom:0 !important}.mb-md-1{margin-bottom:.25rem !important}.mb-md-2{margin-bottom:.5rem !important}.mb-md-3{margin-bottom:1rem !important}.mb-md-4{margin-bottom:1.5rem !important}.mb-md-5{margin-bottom:3rem !important}.mb-md-auto{margin-bottom:auto !important}.ms-md-0{margin-left:0 !important}.ms-md-1{margin-left:.25rem !important}.ms-md-2{margin-left:.5rem !important}.ms-md-3{margin-left:1rem !important}.ms-md-4{margin-left:1.5rem !important}.ms-md-5{margin-left:3rem !important}.ms-md-auto{margin-left:auto !important}.p-md-0{padding:0 !important}.p-md-1{padding:.25rem !important}.p-md-2{padding:.5rem !important}.p-md-3{padding:1rem !important}.p-md-4{padding:1.5rem !important}.p-md-5{padding:3rem !important}.px-md-0{padding-right:0 !important;padding-left:0 !important}.px-md-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-md-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-md-3{padding-right:1rem !important;padding-left:1rem !important}.px-md-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-md-5{padding-right:3rem !important;padding-left:3rem !important}.py-md-0{padding-top:0 !important;padding-bottom:0 !important}.py-md-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-md-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-md-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-md-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-md-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-md-0{padding-top:0 !important}.pt-md-1{padding-top:.25rem !important}.pt-md-2{padding-top:.5rem !important}.pt-md-3{padding-top:1rem !important}.pt-md-4{padding-top:1.5rem !important}.pt-md-5{padding-top:3rem !important}.pe-md-0{padding-right:0 !important}.pe-md-1{padding-right:.25rem !important}.pe-md-2{padding-right:.5rem !important}.pe-md-3{padding-right:1rem !important}.pe-md-4{padding-right:1.5rem !important}.pe-md-5{padding-right:3rem !important}.pb-md-0{padding-bottom:0 !important}.pb-md-1{padding-bottom:.25rem !important}.pb-md-2{padding-bottom:.5rem !important}.pb-md-3{padding-bottom:1rem !important}.pb-md-4{padding-bottom:1.5rem !important}.pb-md-5{padding-bottom:3rem !important}.ps-md-0{padding-left:0 !important}.ps-md-1{padding-left:.25rem !important}.ps-md-2{padding-left:.5rem !important}.ps-md-3{padding-left:1rem !important}.ps-md-4{padding-left:1.5rem !important}.ps-md-5{padding-left:3rem !important}.gap-md-0{gap:0 !important}.gap-md-1{gap:.25rem !important}.gap-md-2{gap:.5rem !important}.gap-md-3{gap:1rem !important}.gap-md-4{gap:1.5rem !important}.gap-md-5{gap:3rem !important}.text-md-start{text-align:left !important}.text-md-end{text-align:right !important}.text-md-center{text-align:center !important}}@media(min-width: 992px){.float-lg-start{float:left !important}.float-lg-end{float:right !important}.float-lg-none{float:none !important}.d-lg-inline{display:inline !important}.d-lg-inline-block{display:inline-block !important}.d-lg-block{display:block !important}.d-lg-grid{display:grid !important}.d-lg-table{display:table !important}.d-lg-table-row{display:table-row !important}.d-lg-table-cell{display:table-cell !important}.d-lg-flex{display:flex !important}.d-lg-inline-flex{display:inline-flex !important}.d-lg-none{display:none !important}.flex-lg-fill{flex:1 1 auto !important}.flex-lg-row{flex-direction:row !important}.flex-lg-column{flex-direction:column !important}.flex-lg-row-reverse{flex-direction:row-reverse !important}.flex-lg-column-reverse{flex-direction:column-reverse !important}.flex-lg-grow-0{flex-grow:0 !important}.flex-lg-grow-1{flex-grow:1 !important}.flex-lg-shrink-0{flex-shrink:0 !important}.flex-lg-shrink-1{flex-shrink:1 !important}.flex-lg-wrap{flex-wrap:wrap !important}.flex-lg-nowrap{flex-wrap:nowrap !important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-lg-start{justify-content:flex-start !important}.justify-content-lg-end{justify-content:flex-end !important}.justify-content-lg-center{justify-content:center !important}.justify-content-lg-between{justify-content:space-between !important}.justify-content-lg-around{justify-content:space-around !important}.justify-content-lg-evenly{justify-content:space-evenly !important}.align-items-lg-start{align-items:flex-start !important}.align-items-lg-end{align-items:flex-end !important}.align-items-lg-center{align-items:center !important}.align-items-lg-baseline{align-items:baseline !important}.align-items-lg-stretch{align-items:stretch !important}.align-content-lg-start{align-content:flex-start !important}.align-content-lg-end{align-content:flex-end !important}.align-content-lg-center{align-content:center !important}.align-content-lg-between{align-content:space-between !important}.align-content-lg-around{align-content:space-around !important}.align-content-lg-stretch{align-content:stretch !important}.align-self-lg-auto{align-self:auto !important}.align-self-lg-start{align-self:flex-start !important}.align-self-lg-end{align-self:flex-end !important}.align-self-lg-center{align-self:center !important}.align-self-lg-baseline{align-self:baseline !important}.align-self-lg-stretch{align-self:stretch !important}.order-lg-first{order:-1 !important}.order-lg-0{order:0 !important}.order-lg-1{order:1 !important}.order-lg-2{order:2 !important}.order-lg-3{order:3 !important}.order-lg-4{order:4 !important}.order-lg-5{order:5 !important}.order-lg-last{order:6 !important}.m-lg-0{margin:0 !important}.m-lg-1{margin:.25rem !important}.m-lg-2{margin:.5rem !important}.m-lg-3{margin:1rem !important}.m-lg-4{margin:1.5rem !important}.m-lg-5{margin:3rem !important}.m-lg-auto{margin:auto !important}.mx-lg-0{margin-right:0 !important;margin-left:0 !important}.mx-lg-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-lg-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-lg-3{margin-right:1rem !important;margin-left:1rem !important}.mx-lg-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-lg-5{margin-right:3rem !important;margin-left:3rem !important}.mx-lg-auto{margin-right:auto !important;margin-left:auto !important}.my-lg-0{margin-top:0 !important;margin-bottom:0 !important}.my-lg-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-lg-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-lg-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-lg-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-lg-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-lg-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-lg-0{margin-top:0 !important}.mt-lg-1{margin-top:.25rem !important}.mt-lg-2{margin-top:.5rem !important}.mt-lg-3{margin-top:1rem !important}.mt-lg-4{margin-top:1.5rem !important}.mt-lg-5{margin-top:3rem !important}.mt-lg-auto{margin-top:auto !important}.me-lg-0{margin-right:0 !important}.me-lg-1{margin-right:.25rem !important}.me-lg-2{margin-right:.5rem !important}.me-lg-3{margin-right:1rem !important}.me-lg-4{margin-right:1.5rem !important}.me-lg-5{margin-right:3rem !important}.me-lg-auto{margin-right:auto !important}.mb-lg-0{margin-bottom:0 !important}.mb-lg-1{margin-bottom:.25rem !important}.mb-lg-2{margin-bottom:.5rem !important}.mb-lg-3{margin-bottom:1rem !important}.mb-lg-4{margin-bottom:1.5rem !important}.mb-lg-5{margin-bottom:3rem !important}.mb-lg-auto{margin-bottom:auto !important}.ms-lg-0{margin-left:0 !important}.ms-lg-1{margin-left:.25rem !important}.ms-lg-2{margin-left:.5rem !important}.ms-lg-3{margin-left:1rem !important}.ms-lg-4{margin-left:1.5rem !important}.ms-lg-5{margin-left:3rem !important}.ms-lg-auto{margin-left:auto !important}.p-lg-0{padding:0 !important}.p-lg-1{padding:.25rem !important}.p-lg-2{padding:.5rem !important}.p-lg-3{padding:1rem !important}.p-lg-4{padding:1.5rem !important}.p-lg-5{padding:3rem !important}.px-lg-0{padding-right:0 !important;padding-left:0 !important}.px-lg-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-lg-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-lg-3{padding-right:1rem !important;padding-left:1rem !important}.px-lg-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-lg-5{padding-right:3rem !important;padding-left:3rem !important}.py-lg-0{padding-top:0 !important;padding-bottom:0 !important}.py-lg-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-lg-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-lg-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-lg-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-lg-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-lg-0{padding-top:0 !important}.pt-lg-1{padding-top:.25rem !important}.pt-lg-2{padding-top:.5rem !important}.pt-lg-3{padding-top:1rem !important}.pt-lg-4{padding-top:1.5rem !important}.pt-lg-5{padding-top:3rem !important}.pe-lg-0{padding-right:0 !important}.pe-lg-1{padding-right:.25rem !important}.pe-lg-2{padding-right:.5rem !important}.pe-lg-3{padding-right:1rem !important}.pe-lg-4{padding-right:1.5rem !important}.pe-lg-5{padding-right:3rem !important}.pb-lg-0{padding-bottom:0 !important}.pb-lg-1{padding-bottom:.25rem !important}.pb-lg-2{padding-bottom:.5rem !important}.pb-lg-3{padding-bottom:1rem !important}.pb-lg-4{padding-bottom:1.5rem !important}.pb-lg-5{padding-bottom:3rem !important}.ps-lg-0{padding-left:0 !important}.ps-lg-1{padding-left:.25rem !important}.ps-lg-2{padding-left:.5rem !important}.ps-lg-3{padding-left:1rem !important}.ps-lg-4{padding-left:1.5rem !important}.ps-lg-5{padding-left:3rem !important}.gap-lg-0{gap:0 !important}.gap-lg-1{gap:.25rem !important}.gap-lg-2{gap:.5rem !important}.gap-lg-3{gap:1rem !important}.gap-lg-4{gap:1.5rem !important}.gap-lg-5{gap:3rem !important}.text-lg-start{text-align:left !important}.text-lg-end{text-align:right !important}.text-lg-center{text-align:center !important}}@media(min-width: 1200px){.float-xl-start{float:left !important}.float-xl-end{float:right !important}.float-xl-none{float:none !important}.d-xl-inline{display:inline !important}.d-xl-inline-block{display:inline-block !important}.d-xl-block{display:block !important}.d-xl-grid{display:grid !important}.d-xl-table{display:table !important}.d-xl-table-row{display:table-row !important}.d-xl-table-cell{display:table-cell !important}.d-xl-flex{display:flex !important}.d-xl-inline-flex{display:inline-flex !important}.d-xl-none{display:none !important}.flex-xl-fill{flex:1 1 auto !important}.flex-xl-row{flex-direction:row !important}.flex-xl-column{flex-direction:column !important}.flex-xl-row-reverse{flex-direction:row-reverse !important}.flex-xl-column-reverse{flex-direction:column-reverse !important}.flex-xl-grow-0{flex-grow:0 !important}.flex-xl-grow-1{flex-grow:1 !important}.flex-xl-shrink-0{flex-shrink:0 !important}.flex-xl-shrink-1{flex-shrink:1 !important}.flex-xl-wrap{flex-wrap:wrap !important}.flex-xl-nowrap{flex-wrap:nowrap !important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-xl-start{justify-content:flex-start !important}.justify-content-xl-end{justify-content:flex-end !important}.justify-content-xl-center{justify-content:center !important}.justify-content-xl-between{justify-content:space-between !important}.justify-content-xl-around{justify-content:space-around !important}.justify-content-xl-evenly{justify-content:space-evenly !important}.align-items-xl-start{align-items:flex-start !important}.align-items-xl-end{align-items:flex-end !important}.align-items-xl-center{align-items:center !important}.align-items-xl-baseline{align-items:baseline !important}.align-items-xl-stretch{align-items:stretch !important}.align-content-xl-start{align-content:flex-start !important}.align-content-xl-end{align-content:flex-end !important}.align-content-xl-center{align-content:center !important}.align-content-xl-between{align-content:space-between !important}.align-content-xl-around{align-content:space-around !important}.align-content-xl-stretch{align-content:stretch !important}.align-self-xl-auto{align-self:auto !important}.align-self-xl-start{align-self:flex-start !important}.align-self-xl-end{align-self:flex-end !important}.align-self-xl-center{align-self:center !important}.align-self-xl-baseline{align-self:baseline !important}.align-self-xl-stretch{align-self:stretch !important}.order-xl-first{order:-1 !important}.order-xl-0{order:0 !important}.order-xl-1{order:1 !important}.order-xl-2{order:2 !important}.order-xl-3{order:3 !important}.order-xl-4{order:4 !important}.order-xl-5{order:5 !important}.order-xl-last{order:6 !important}.m-xl-0{margin:0 !important}.m-xl-1{margin:.25rem !important}.m-xl-2{margin:.5rem !important}.m-xl-3{margin:1rem !important}.m-xl-4{margin:1.5rem !important}.m-xl-5{margin:3rem !important}.m-xl-auto{margin:auto !important}.mx-xl-0{margin-right:0 !important;margin-left:0 !important}.mx-xl-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-xl-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-xl-3{margin-right:1rem !important;margin-left:1rem !important}.mx-xl-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-xl-5{margin-right:3rem !important;margin-left:3rem !important}.mx-xl-auto{margin-right:auto !important;margin-left:auto !important}.my-xl-0{margin-top:0 !important;margin-bottom:0 !important}.my-xl-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-xl-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-xl-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-xl-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-xl-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-xl-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-xl-0{margin-top:0 !important}.mt-xl-1{margin-top:.25rem !important}.mt-xl-2{margin-top:.5rem !important}.mt-xl-3{margin-top:1rem !important}.mt-xl-4{margin-top:1.5rem !important}.mt-xl-5{margin-top:3rem !important}.mt-xl-auto{margin-top:auto !important}.me-xl-0{margin-right:0 !important}.me-xl-1{margin-right:.25rem !important}.me-xl-2{margin-right:.5rem !important}.me-xl-3{margin-right:1rem !important}.me-xl-4{margin-right:1.5rem !important}.me-xl-5{margin-right:3rem !important}.me-xl-auto{margin-right:auto !important}.mb-xl-0{margin-bottom:0 !important}.mb-xl-1{margin-bottom:.25rem !important}.mb-xl-2{margin-bottom:.5rem !important}.mb-xl-3{margin-bottom:1rem !important}.mb-xl-4{margin-bottom:1.5rem !important}.mb-xl-5{margin-bottom:3rem !important}.mb-xl-auto{margin-bottom:auto !important}.ms-xl-0{margin-left:0 !important}.ms-xl-1{margin-left:.25rem !important}.ms-xl-2{margin-left:.5rem !important}.ms-xl-3{margin-left:1rem !important}.ms-xl-4{margin-left:1.5rem !important}.ms-xl-5{margin-left:3rem !important}.ms-xl-auto{margin-left:auto !important}.p-xl-0{padding:0 !important}.p-xl-1{padding:.25rem !important}.p-xl-2{padding:.5rem !important}.p-xl-3{padding:1rem !important}.p-xl-4{padding:1.5rem !important}.p-xl-5{padding:3rem !important}.px-xl-0{padding-right:0 !important;padding-left:0 !important}.px-xl-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-xl-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-xl-3{padding-right:1rem !important;padding-left:1rem !important}.px-xl-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-xl-5{padding-right:3rem !important;padding-left:3rem !important}.py-xl-0{padding-top:0 !important;padding-bottom:0 !important}.py-xl-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-xl-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-xl-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-xl-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-xl-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-xl-0{padding-top:0 !important}.pt-xl-1{padding-top:.25rem !important}.pt-xl-2{padding-top:.5rem !important}.pt-xl-3{padding-top:1rem !important}.pt-xl-4{padding-top:1.5rem !important}.pt-xl-5{padding-top:3rem !important}.pe-xl-0{padding-right:0 !important}.pe-xl-1{padding-right:.25rem !important}.pe-xl-2{padding-right:.5rem !important}.pe-xl-3{padding-right:1rem !important}.pe-xl-4{padding-right:1.5rem !important}.pe-xl-5{padding-right:3rem !important}.pb-xl-0{padding-bottom:0 !important}.pb-xl-1{padding-bottom:.25rem !important}.pb-xl-2{padding-bottom:.5rem !important}.pb-xl-3{padding-bottom:1rem !important}.pb-xl-4{padding-bottom:1.5rem !important}.pb-xl-5{padding-bottom:3rem !important}.ps-xl-0{padding-left:0 !important}.ps-xl-1{padding-left:.25rem !important}.ps-xl-2{padding-left:.5rem !important}.ps-xl-3{padding-left:1rem !important}.ps-xl-4{padding-left:1.5rem !important}.ps-xl-5{padding-left:3rem !important}.gap-xl-0{gap:0 !important}.gap-xl-1{gap:.25rem !important}.gap-xl-2{gap:.5rem !important}.gap-xl-3{gap:1rem !important}.gap-xl-4{gap:1.5rem !important}.gap-xl-5{gap:3rem !important}.text-xl-start{text-align:left !important}.text-xl-end{text-align:right !important}.text-xl-center{text-align:center !important}}@media(min-width: 1400px){.float-xxl-start{float:left !important}.float-xxl-end{float:right !important}.float-xxl-none{float:none !important}.d-xxl-inline{display:inline !important}.d-xxl-inline-block{display:inline-block !important}.d-xxl-block{display:block !important}.d-xxl-grid{display:grid !important}.d-xxl-table{display:table !important}.d-xxl-table-row{display:table-row !important}.d-xxl-table-cell{display:table-cell !important}.d-xxl-flex{display:flex !important}.d-xxl-inline-flex{display:inline-flex !important}.d-xxl-none{display:none !important}.flex-xxl-fill{flex:1 1 auto !important}.flex-xxl-row{flex-direction:row !important}.flex-xxl-column{flex-direction:column !important}.flex-xxl-row-reverse{flex-direction:row-reverse !important}.flex-xxl-column-reverse{flex-direction:column-reverse !important}.flex-xxl-grow-0{flex-grow:0 !important}.flex-xxl-grow-1{flex-grow:1 !important}.flex-xxl-shrink-0{flex-shrink:0 !important}.flex-xxl-shrink-1{flex-shrink:1 !important}.flex-xxl-wrap{flex-wrap:wrap !important}.flex-xxl-nowrap{flex-wrap:nowrap !important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-xxl-start{justify-content:flex-start !important}.justify-content-xxl-end{justify-content:flex-end !important}.justify-content-xxl-center{justify-content:center !important}.justify-content-xxl-between{justify-content:space-between !important}.justify-content-xxl-around{justify-content:space-around !important}.justify-content-xxl-evenly{justify-content:space-evenly !important}.align-items-xxl-start{align-items:flex-start !important}.align-items-xxl-end{align-items:flex-end !important}.align-items-xxl-center{align-items:center !important}.align-items-xxl-baseline{align-items:baseline !important}.align-items-xxl-stretch{align-items:stretch !important}.align-content-xxl-start{align-content:flex-start !important}.align-content-xxl-end{align-content:flex-end !important}.align-content-xxl-center{align-content:center !important}.align-content-xxl-between{align-content:space-between !important}.align-content-xxl-around{align-content:space-around !important}.align-content-xxl-stretch{align-content:stretch !important}.align-self-xxl-auto{align-self:auto !important}.align-self-xxl-start{align-self:flex-start !important}.align-self-xxl-end{align-self:flex-end !important}.align-self-xxl-center{align-self:center !important}.align-self-xxl-baseline{align-self:baseline !important}.align-self-xxl-stretch{align-self:stretch !important}.order-xxl-first{order:-1 !important}.order-xxl-0{order:0 !important}.order-xxl-1{order:1 !important}.order-xxl-2{order:2 !important}.order-xxl-3{order:3 !important}.order-xxl-4{order:4 !important}.order-xxl-5{order:5 !important}.order-xxl-last{order:6 !important}.m-xxl-0{margin:0 !important}.m-xxl-1{margin:.25rem !important}.m-xxl-2{margin:.5rem !important}.m-xxl-3{margin:1rem !important}.m-xxl-4{margin:1.5rem !important}.m-xxl-5{margin:3rem !important}.m-xxl-auto{margin:auto !important}.mx-xxl-0{margin-right:0 !important;margin-left:0 !important}.mx-xxl-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-xxl-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-xxl-3{margin-right:1rem !important;margin-left:1rem !important}.mx-xxl-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-xxl-5{margin-right:3rem !important;margin-left:3rem !important}.mx-xxl-auto{margin-right:auto !important;margin-left:auto !important}.my-xxl-0{margin-top:0 !important;margin-bottom:0 !important}.my-xxl-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-xxl-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-xxl-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-xxl-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-xxl-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-xxl-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-xxl-0{margin-top:0 !important}.mt-xxl-1{margin-top:.25rem !important}.mt-xxl-2{margin-top:.5rem !important}.mt-xxl-3{margin-top:1rem !important}.mt-xxl-4{margin-top:1.5rem !important}.mt-xxl-5{margin-top:3rem !important}.mt-xxl-auto{margin-top:auto !important}.me-xxl-0{margin-right:0 !important}.me-xxl-1{margin-right:.25rem !important}.me-xxl-2{margin-right:.5rem !important}.me-xxl-3{margin-right:1rem !important}.me-xxl-4{margin-right:1.5rem !important}.me-xxl-5{margin-right:3rem !important}.me-xxl-auto{margin-right:auto !important}.mb-xxl-0{margin-bottom:0 !important}.mb-xxl-1{margin-bottom:.25rem !important}.mb-xxl-2{margin-bottom:.5rem !important}.mb-xxl-3{margin-bottom:1rem !important}.mb-xxl-4{margin-bottom:1.5rem !important}.mb-xxl-5{margin-bottom:3rem !important}.mb-xxl-auto{margin-bottom:auto !important}.ms-xxl-0{margin-left:0 !important}.ms-xxl-1{margin-left:.25rem !important}.ms-xxl-2{margin-left:.5rem !important}.ms-xxl-3{margin-left:1rem !important}.ms-xxl-4{margin-left:1.5rem !important}.ms-xxl-5{margin-left:3rem !important}.ms-xxl-auto{margin-left:auto !important}.p-xxl-0{padding:0 !important}.p-xxl-1{padding:.25rem !important}.p-xxl-2{padding:.5rem !important}.p-xxl-3{padding:1rem !important}.p-xxl-4{padding:1.5rem !important}.p-xxl-5{padding:3rem !important}.px-xxl-0{padding-right:0 !important;padding-left:0 !important}.px-xxl-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-xxl-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-xxl-3{padding-right:1rem !important;padding-left:1rem !important}.px-xxl-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-xxl-5{padding-right:3rem !important;padding-left:3rem !important}.py-xxl-0{padding-top:0 !important;padding-bottom:0 !important}.py-xxl-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-xxl-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-xxl-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-xxl-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-xxl-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-xxl-0{padding-top:0 !important}.pt-xxl-1{padding-top:.25rem !important}.pt-xxl-2{padding-top:.5rem !important}.pt-xxl-3{padding-top:1rem !important}.pt-xxl-4{padding-top:1.5rem !important}.pt-xxl-5{padding-top:3rem !important}.pe-xxl-0{padding-right:0 !important}.pe-xxl-1{padding-right:.25rem !important}.pe-xxl-2{padding-right:.5rem !important}.pe-xxl-3{padding-right:1rem !important}.pe-xxl-4{padding-right:1.5rem !important}.pe-xxl-5{padding-right:3rem !important}.pb-xxl-0{padding-bottom:0 !important}.pb-xxl-1{padding-bottom:.25rem !important}.pb-xxl-2{padding-bottom:.5rem !important}.pb-xxl-3{padding-bottom:1rem !important}.pb-xxl-4{padding-bottom:1.5rem !important}.pb-xxl-5{padding-bottom:3rem !important}.ps-xxl-0{padding-left:0 !important}.ps-xxl-1{padding-left:.25rem !important}.ps-xxl-2{padding-left:.5rem !important}.ps-xxl-3{padding-left:1rem !important}.ps-xxl-4{padding-left:1.5rem !important}.ps-xxl-5{padding-left:3rem !important}.gap-xxl-0{gap:0 !important}.gap-xxl-1{gap:.25rem !important}.gap-xxl-2{gap:.5rem !important}.gap-xxl-3{gap:1rem !important}.gap-xxl-4{gap:1.5rem !important}.gap-xxl-5{gap:3rem !important}.text-xxl-start{text-align:left !important}.text-xxl-end{text-align:right !important}.text-xxl-center{text-align:center !important}}@media(min-width: 1200px){.fs-1{font-size:2.5rem !important}.fs-2{font-size:2rem !important}.fs-3{font-size:1.75rem !important}.fs-4{font-size:1.5rem !important}}@media print{.d-print-inline{display:inline !important}.d-print-inline-block{display:inline-block !important}.d-print-block{display:block !important}.d-print-grid{display:grid !important}.d-print-table{display:table !important}.d-print-table-row{display:table-row !important}.d-print-table-cell{display:table-cell !important}.d-print-flex{display:flex !important}.d-print-inline-flex{display:inline-flex !important}.d-print-none{display:none !important}}.audio__challenge{width:100%;height:100vh;display:flex;position:relative;flex-flow:column nowrap;align-items:center;background-image:linear-gradient(rgb(24, 90, 157) 0%, rgb(67, 206, 162) 100%)}.game{display:flex;padding:1rem;margin-top:6rem;flex-flow:column nowrap;justify-content:center;align-items:center;width:100%}.game__heading{padding:1.5rem 0;color:#f8f9fa}.game__manual{max-width:500px;width:100%;padding:2rem;color:#fff;font-size:1.1rem;border-radius:4px;background-color:rgba(0,0,0,.3)}.game__progress{display:flex;position:absolute;top:0;width:100%;height:10px;justify-content:space-between;align-items:center}.game__progress_item{display:block;flex:1;height:inherit;background-color:rgba(255,255,255,.5)}.game__progress_item.marked{background-color:#8a2be2}.game__toolbar{display:flex;position:relative;width:100%;top:10px;padding:.5rem 0;justify-content:space-between;align-items:center}.game__mute{display:flex;cursor:pointer;align-items:center;justify-content:center;color:#fff;font-size:2.1rem;width:2.4rem;height:2.4rem}.game__mute span{position:relative;display:block}.game__mute_on{color:#aeaeae}.game .word{display:flex;flex-flow:column nowrap;align-items:center;min-height:200px}.game .word__wrapper{display:flex;align-items:center}.game .word__image{display:none;height:150px;overflow:hidden;padding:0 1rem}.game .word__image img{height:150px;width:150px;border-radius:50%;object-fit:cover}.game .word__translation{width:100%;text-align:center;font-size:1.25rem;text-transform:uppercase;color:#fff;padding-top:1rem}.game .word button{display:flex;padding:0;width:70px;height:70px;justify-content:center;align-items:center;border-radius:50%;background-color:rgba(255,255,255,.5)}.game .word button svg{width:40px;height:40px;fill:#fff}.game__next_word{max-width:150px;width:100%;padding:1rem;background-color:#6610f2;border-radius:.25rem;color:#fff}.game__next_word:disabled{cursor:not-allowed;background-color:rgba(147,40,255,.2)}.game__next_word:hover{box-shadow:0 0 6px -1px #520dc2}.game__result{position:absolute;display:flex;flex-direction:column;width:300px;left:calc(50% - 150px);top:10rem;z-index:100;background:#f5f5f5;padding:1rem}button{padding:.5rem 2rem;border:none;border-radius:3px;cursor:pointer}.words__level{background-color:rgba(0,0,0,0);outline:2px solid rgba(0,0,0,0);margin:.125rem .5rem;font:700 1rem/1.5em Arial;border-radius:.25rem;color:#f5f5f5}.words__level:hover{color:#fff;box-shadow:0 0 0 1px #aeaeae}.answers{display:flex;flex-wrap:wrap;padding:2rem 0;justify-content:center}.answers__item{padding:.5rem 1rem;cursor:pointer;color:#f5f5f5}.answers__item.selected-correct,.answers__item.unselected-correct,.answers__item.unselected{border-radius:4px;margin:0 .25rem}.answers__item.selected-correct{background-color:#20c997;color:#fff}.answers__item.unselected-correct{background-color:#20c997;color:#fff}.answers__item.unselected{color:#aeaeae}.answers__item.selected-mistake{text-decoration:line-through;color:#aeaeae}.answers__item span{padding:0 .25rem 0 0;line-height:1.5em;letter-spacing:.0125em}.answers__item:hover{background-color:rgba(248,249,250,.2)}.correct__answers,.incorrect__answers{list-style:none;padding-left:1.5rem}.correct__answers_item,.incorrect__answers_item{display:flex;padding:.1rem 0;align-items:center}.correct__answers_item .audio,.incorrect__answers_item .audio{padding:0 .3rem;cursor:pointer}.correct__answers_item .audio svg,.incorrect__answers_item .audio svg{width:24px;height:24px;fill:#777}.correct__answers_item .word,.incorrect__answers_item .word{text-transform:capitalize}.correct__answers_item .translate,.incorrect__answers_item .translate{color:#777}.game__statistic{list-style:none;margin:0}.game__statistic__item span{margin-left:.5rem}.game__statistic span{padding-right:.5rem}.statistics__section{display:flex;align-items:center;justify-content:center;padding:1rem 0 2rem 0}.statistics__section svg{width:120px}.statistics__section svg path{fill:none;stroke:#8a2be2;stroke-width:3;animation:progress .7s ease-in forwards}.statistics__section svg .percentage{fill:#666;font-family:sans-serif;font-size:.5em;text-anchor:middle}@keyframes progress{0%{stroke-dasharray:0 100}}", '']); const i = a;
    },
    3865: (t, r, o) => {
'use strict'; o.d(r, { Z:() => i }); let e = o(3645); let a = o.n(e)()((t) => {return t[1]}); a.push([t.id, '.main-content{margin:20px 0;position:relative;z-index:100}.git-hub_svg{width:24px;height:24px;display:inline-block;padding-right:5px}.background{left:0;top:0;width:100%;height:150vh;position:absolute;z-index:-1;opacity:.3}.avatar{border-radius:50%;width:200px;height:200px;border:solid brown 1px}.avatars{margin-top:50px}', '']); const i = a;
    },
    3970: (t, r, o) => {
'use strict'; o.d(r, { Z:() => i }); let e = o(3645); let a = o.n(e)()((t) => {return t[1]}); a.push([t.id, '.background-sprint{left:0;top:0;width:100%;height:100vh;position:absolute;z-index:-1;opacity:.5}#game-modal-dialog{margin-top:35vh}#message-modal-dialog{margin-top:27vh}#modal-header{height:50px}#answers{max-height:200px;overflow:auto}.translate-word{margin:20px 0}.wrong{margin-right:20px}.counter{position:fixed;right:10vw;top:20vw;z-index:1000;font-weight:700;font-size:36px}.counter-wrapper{position:relative}.pre-timer{position:fixed;font-size:48px;text-align:center;top:calc(50% - 50px);left:calc(50% - 50px)}.round-border{border:solid 5px;border-radius:50%;padding:10px;width:100px;height:100px}.red{border-color:red}.yellow{border-color:#ff0}.green{border-color:green}.sound{fill:green;height:20px;width:20px}.sound-button{width:25px;padding:0;border-radius:50%}', '']); const i = a;
    },
    8332: (t, r, o) => {
'use strict'; o.d(r, { Z:() => i }); let e = o(3645); let a = o.n(e)()((t) => {return t[1]}); a.push([t.id, "/*!\n * Bootstrap  v5.2.0 (https://getbootstrap.com/)\n * Copyright 2011-2022 The Bootstrap Authors\n * Copyright 2011-2022 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--bs-blue: #0d6efd;--bs-indigo: #6610f2;--bs-purple: #6f42c1;--bs-pink: #d63384;--bs-red: #dc3545;--bs-orange: #fd7e14;--bs-yellow: #ffc107;--bs-green: #198754;--bs-teal: #20c997;--bs-cyan: #0dcaf0;--bs-black: #000;--bs-white: #fff;--bs-gray: #6c757d;--bs-gray-dark: #343a40;--bs-gray-100: #f8f9fa;--bs-gray-200: #e9ecef;--bs-gray-300: #dee2e6;--bs-gray-400: #ced4da;--bs-gray-500: #adb5bd;--bs-gray-600: #6c757d;--bs-gray-700: #495057;--bs-gray-800: #343a40;--bs-gray-900: #212529;--bs-primary: #0d6efd;--bs-secondary: #6c757d;--bs-success: #198754;--bs-info: #0dcaf0;--bs-warning: #ffc107;--bs-danger: #dc3545;--bs-light: #f8f9fa;--bs-dark: #212529;--bs-primary-rgb: 13, 110, 253;--bs-secondary-rgb: 108, 117, 125;--bs-success-rgb: 25, 135, 84;--bs-info-rgb: 13, 202, 240;--bs-warning-rgb: 255, 193, 7;--bs-danger-rgb: 220, 53, 69;--bs-light-rgb: 248, 249, 250;--bs-dark-rgb: 33, 37, 41;--bs-white-rgb: 255, 255, 255;--bs-black-rgb: 0, 0, 0;--bs-body-color-rgb: 33, 37, 41;--bs-body-bg-rgb: 255, 255, 255;--bs-font-sans-serif: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));--bs-body-font-family: var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight: 400;--bs-body-line-height: 1.5;--bs-body-color: #212529;--bs-body-bg: #fff;--bs-border-width: 1px;--bs-border-style: solid;--bs-border-color: #dee2e6;--bs-border-color-translucent: rgba(0, 0, 0, 0.175);--bs-border-radius: 0.375rem;--bs-border-radius-sm: 0.25rem;--bs-border-radius-lg: 0.5rem;--bs-border-radius-xl: 1rem;--bs-border-radius-2xl: 2rem;--bs-border-radius-pill: 50rem;--bs-link-color: #0d6efd;--bs-link-hover-color: #0a58ca;--bs-code-color: #d63384;--bs-highlight-bg: #fff3cd}*,*::before,*::after{box-sizing:border-box}@media(prefers-reduced-motion: no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}hr{margin:1rem 0;color:inherit;border:0;border-top:1px solid;opacity:.25}h6,.h6,h5,.h5,h4,.h4,h3,.h3,h2,.h2,h1,.h1{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}h1,.h1{font-size:calc(1.375rem + 1.5vw)}@media(min-width: 1200px){h1,.h1{font-size:2.5rem}}h2,.h2{font-size:calc(1.325rem + 0.9vw)}@media(min-width: 1200px){h2,.h2{font-size:2rem}}h3,.h3{font-size:calc(1.3rem + 0.6vw)}@media(min-width: 1200px){h3,.h3{font-size:1.75rem}}h4,.h4{font-size:calc(1.275rem + 0.3vw)}@media(min-width: 1200px){h4,.h4{font-size:1.5rem}}h5,.h5{font-size:1.25rem}h6,.h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}abbr[title]{text-decoration:underline dotted;cursor:help;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul{padding-left:2rem}ol,ul,dl{margin-top:0;margin-bottom:1rem}ol ol,ul ul,ol ul,ul ol{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small,.small{font-size:0.875em}mark,.mark{padding:.1875em;background-color:var(--bs-highlight-bg)}sub,sup{position:relative;font-size:0.75em;line-height:0;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}a{color:var(--bs-link-color);text-decoration:underline}a:hover{color:var(--bs-link-hover-color)}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}pre,code,kbd,samp{font-family:var(--bs-font-monospace);font-size:1em}pre{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:0.875em}pre code{font-size:inherit;color:inherit;word-break:normal}code{font-size:0.875em;color:var(--bs-code-color);word-wrap:break-word}a>code{color:inherit}kbd{padding:.1875rem .375rem;font-size:0.875em;color:var(--bs-body-bg);background-color:var(--bs-body-color);border-radius:.25rem}kbd kbd{padding:0;font-size:1em}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}caption{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}thead,tbody,tfoot,tr,td,th{border-color:inherit;border-style:solid;border-width:0}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}input,button,select,optgroup,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator{display:none !important}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button:not(:disabled),[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + 0.3vw);line-height:inherit}@media(min-width: 1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-text,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::file-selector-button{font:inherit;-webkit-appearance:button}output{display:inline-block}iframe{border:0}summary{display:list-item;cursor:pointer}progress{vertical-align:baseline}[hidden]{display:none !important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-6{font-size:2.5rem}}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:0.875em;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{margin-top:-1rem;margin-bottom:1rem;font-size:0.875em;color:#6c757d}.blockquote-footer::before{content:\"— \"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid var(--bs-border-color);border-radius:.375rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:0.875em;color:#6c757d}.container,.container-fluid,.container-xxl,.container-xl,.container-lg,.container-md,.container-sm{--bs-gutter-x: 1.5rem;--bs-gutter-y: 0;width:100%;padding-right:calc(var(--bs-gutter-x)*.5);padding-left:calc(var(--bs-gutter-x)*.5);margin-right:auto;margin-left:auto}@media(min-width: 576px){.container-sm,.container{max-width:540px}}@media(min-width: 768px){.container-md,.container-sm,.container{max-width:720px}}@media(min-width: 992px){.container-lg,.container-md,.container-sm,.container{max-width:960px}}@media(min-width: 1200px){.container-xl,.container-lg,.container-md,.container-sm,.container{max-width:1140px}}@media(min-width: 1400px){.container-xxl,.container-xl,.container-lg,.container-md,.container-sm,.container{max-width:1320px}}.row{--bs-gutter-x: 1.5rem;--bs-gutter-y: 0;display:flex;flex-wrap:wrap;margin-top:calc(-1*var(--bs-gutter-y));margin-right:calc(-0.5*var(--bs-gutter-x));margin-left:calc(-0.5*var(--bs-gutter-x))}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x)*.5);padding-left:calc(var(--bs-gutter-x)*.5);margin-top:var(--bs-gutter-y)}.col{flex:1 0 0%}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.6666666667%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.33333333%}.offset-2{margin-left:16.66666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333333%}.offset-5{margin-left:41.66666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333333%}.offset-8{margin-left:66.66666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333333%}.offset-11{margin-left:91.66666667%}.g-0,.gx-0{--bs-gutter-x: 0}.g-0,.gy-0{--bs-gutter-y: 0}.g-1,.gx-1{--bs-gutter-x: 0.25rem}.g-1,.gy-1{--bs-gutter-y: 0.25rem}.g-2,.gx-2{--bs-gutter-x: 0.5rem}.g-2,.gy-2{--bs-gutter-y: 0.5rem}.g-3,.gx-3{--bs-gutter-x: 1rem}.g-3,.gy-3{--bs-gutter-y: 1rem}.g-4,.gx-4{--bs-gutter-x: 1.5rem}.g-4,.gy-4{--bs-gutter-y: 1.5rem}.g-5,.gx-5{--bs-gutter-x: 3rem}.g-5,.gy-5{--bs-gutter-y: 3rem}@media(min-width: 576px){.col-sm{flex:1 0 0%}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.6666666667%}.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333333%}.col-sm-2{flex:0 0 auto;width:16.66666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333333%}.col-sm-5{flex:0 0 auto;width:41.66666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333333%}.col-sm-8{flex:0 0 auto;width:66.66666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333333%}.col-sm-11{flex:0 0 auto;width:91.66666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333333%}.offset-sm-2{margin-left:16.66666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333333%}.offset-sm-5{margin-left:41.66666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333333%}.offset-sm-8{margin-left:66.66666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333333%}.offset-sm-11{margin-left:91.66666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x: 0}.g-sm-0,.gy-sm-0{--bs-gutter-y: 0}.g-sm-1,.gx-sm-1{--bs-gutter-x: 0.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y: 0.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x: 0.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y: 0.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x: 1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y: 1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x: 1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y: 1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x: 3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y: 3rem}}@media(min-width: 768px){.col-md{flex:1 0 0%}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.6666666667%}.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333333%}.col-md-2{flex:0 0 auto;width:16.66666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333333%}.col-md-5{flex:0 0 auto;width:41.66666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333333%}.col-md-8{flex:0 0 auto;width:66.66666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333333%}.col-md-11{flex:0 0 auto;width:91.66666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333333%}.offset-md-2{margin-left:16.66666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333333%}.offset-md-5{margin-left:41.66666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333333%}.offset-md-8{margin-left:66.66666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333333%}.offset-md-11{margin-left:91.66666667%}.g-md-0,.gx-md-0{--bs-gutter-x: 0}.g-md-0,.gy-md-0{--bs-gutter-y: 0}.g-md-1,.gx-md-1{--bs-gutter-x: 0.25rem}.g-md-1,.gy-md-1{--bs-gutter-y: 0.25rem}.g-md-2,.gx-md-2{--bs-gutter-x: 0.5rem}.g-md-2,.gy-md-2{--bs-gutter-y: 0.5rem}.g-md-3,.gx-md-3{--bs-gutter-x: 1rem}.g-md-3,.gy-md-3{--bs-gutter-y: 1rem}.g-md-4,.gx-md-4{--bs-gutter-x: 1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y: 1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x: 3rem}.g-md-5,.gy-md-5{--bs-gutter-y: 3rem}}@media(min-width: 992px){.col-lg{flex:1 0 0%}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.6666666667%}.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333333%}.col-lg-2{flex:0 0 auto;width:16.66666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333333%}.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.col-lg-8{flex:0 0 auto;width:66.66666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333333%}.col-lg-11{flex:0 0 auto;width:91.66666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333333%}.offset-lg-2{margin-left:16.66666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333333%}.offset-lg-5{margin-left:41.66666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333333%}.offset-lg-8{margin-left:66.66666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333333%}.offset-lg-11{margin-left:91.66666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x: 0}.g-lg-0,.gy-lg-0{--bs-gutter-y: 0}.g-lg-1,.gx-lg-1{--bs-gutter-x: 0.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y: 0.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x: 0.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y: 0.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x: 1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y: 1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x: 1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y: 1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x: 3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y: 3rem}}@media(min-width: 1200px){.col-xl{flex:1 0 0%}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333333%}.col-xl-2{flex:0 0 auto;width:16.66666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333333%}.col-xl-5{flex:0 0 auto;width:41.66666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333333%}.col-xl-8{flex:0 0 auto;width:66.66666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333333%}.col-xl-11{flex:0 0 auto;width:91.66666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333333%}.offset-xl-2{margin-left:16.66666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333333%}.offset-xl-5{margin-left:41.66666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333333%}.offset-xl-8{margin-left:66.66666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333333%}.offset-xl-11{margin-left:91.66666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x: 0}.g-xl-0,.gy-xl-0{--bs-gutter-y: 0}.g-xl-1,.gx-xl-1{--bs-gutter-x: 0.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y: 0.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x: 0.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y: 0.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x: 1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y: 1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x: 1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y: 1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x: 3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y: 3rem}}@media(min-width: 1400px){.col-xxl{flex:1 0 0%}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333333%}.col-xxl-2{flex:0 0 auto;width:16.66666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333333%}.col-xxl-5{flex:0 0 auto;width:41.66666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333333%}.col-xxl-8{flex:0 0 auto;width:66.66666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333333%}.col-xxl-11{flex:0 0 auto;width:91.66666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333333%}.offset-xxl-2{margin-left:16.66666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333333%}.offset-xxl-5{margin-left:41.66666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333333%}.offset-xxl-8{margin-left:66.66666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333333%}.offset-xxl-11{margin-left:91.66666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x: 0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y: 0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x: 0.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y: 0.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x: 0.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y: 0.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x: 1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y: 1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x: 1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y: 1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x: 3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y: 3rem}}.table{--bs-table-color: var(--bs-body-color);--bs-table-bg: transparent;--bs-table-border-color: var(--bs-border-color);--bs-table-accent-bg: transparent;--bs-table-striped-color: var(--bs-body-color);--bs-table-striped-bg: rgba(0, 0, 0, 0.05);--bs-table-active-color: var(--bs-body-color);--bs-table-active-bg: rgba(0, 0, 0, 0.1);--bs-table-hover-color: var(--bs-body-color);--bs-table-hover-bg: rgba(0, 0, 0, 0.075);width:100%;margin-bottom:1rem;color:var(--bs-table-color);vertical-align:top;border-color:var(--bs-table-border-color)}.table>:not(caption)>*>*{padding:.5rem .5rem;background-color:var(--bs-table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table-group-divider{border-top:2px solid currentcolor}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem .25rem}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped>tbody>tr:nth-of-type(odd)>*{--bs-table-accent-bg: var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-striped-columns>:not(caption)>tr>:nth-child(even){--bs-table-accent-bg: var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-active{--bs-table-accent-bg: var(--bs-table-active-bg);color:var(--bs-table-active-color)}.table-hover>tbody>tr:hover>*{--bs-table-accent-bg: var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-primary{--bs-table-color: #000;--bs-table-bg: #cfe2ff;--bs-table-border-color: #bacbe6;--bs-table-striped-bg: #c5d7f2;--bs-table-striped-color: #000;--bs-table-active-bg: #bacbe6;--bs-table-active-color: #000;--bs-table-hover-bg: #bfd1ec;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-secondary{--bs-table-color: #000;--bs-table-bg: #e2e3e5;--bs-table-border-color: #cbccce;--bs-table-striped-bg: #d7d8da;--bs-table-striped-color: #000;--bs-table-active-bg: #cbccce;--bs-table-active-color: #000;--bs-table-hover-bg: #d1d2d4;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-success{--bs-table-color: #000;--bs-table-bg: #d1e7dd;--bs-table-border-color: #bcd0c7;--bs-table-striped-bg: #c7dbd2;--bs-table-striped-color: #000;--bs-table-active-bg: #bcd0c7;--bs-table-active-color: #000;--bs-table-hover-bg: #c1d6cc;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-info{--bs-table-color: #000;--bs-table-bg: #cff4fc;--bs-table-border-color: #badce3;--bs-table-striped-bg: #c5e8ef;--bs-table-striped-color: #000;--bs-table-active-bg: #badce3;--bs-table-active-color: #000;--bs-table-hover-bg: #bfe2e9;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-warning{--bs-table-color: #000;--bs-table-bg: #fff3cd;--bs-table-border-color: #e6dbb9;--bs-table-striped-bg: #f2e7c3;--bs-table-striped-color: #000;--bs-table-active-bg: #e6dbb9;--bs-table-active-color: #000;--bs-table-hover-bg: #ece1be;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-danger{--bs-table-color: #000;--bs-table-bg: #f8d7da;--bs-table-border-color: #dfc2c4;--bs-table-striped-bg: #eccccf;--bs-table-striped-color: #000;--bs-table-active-bg: #dfc2c4;--bs-table-active-color: #000;--bs-table-hover-bg: #e5c7ca;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-light{--bs-table-color: #000;--bs-table-bg: #f8f9fa;--bs-table-border-color: #dfe0e1;--bs-table-striped-bg: #ecedee;--bs-table-striped-color: #000;--bs-table-active-bg: #dfe0e1;--bs-table-active-color: #000;--bs-table-hover-bg: #e5e6e7;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-dark{--bs-table-color: #fff;--bs-table-bg: #212529;--bs-table-border-color: #373b3e;--bs-table-striped-bg: #2c3034;--bs-table-striped-color: #fff;--bs-table-active-bg: #373b3e;--bs-table-active-color: #fff;--bs-table-hover-bg: #323539;--bs-table-hover-color: #fff;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media(max-width: 575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}}.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(0.375rem + 1px);padding-bottom:calc(0.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(0.5rem + 1px);padding-bottom:calc(0.5rem + 1px);font-size:1.25rem}.col-form-label-sm{padding-top:calc(0.25rem + 1px);padding-bottom:calc(0.25rem + 1px);font-size:0.875rem}.form-text{margin-top:.25rem;font-size:0.875em;color:#6c757d}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;appearance:none;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled{background-color:#e9ecef;opacity:1}.form-control::file-selector-button{padding:.375rem .75rem;margin:-0.375rem -0.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:#212529;background-color:rgba(0,0,0,0);border:solid rgba(0,0,0,0);border-width:1px 0}.form-control-plaintext:focus{outline:0}.form-control-plaintext.form-control-sm,.form-control-plaintext.form-control-lg{padding-right:0;padding-left:0}.form-control-sm{min-height:calc(1.5em + 0.5rem + 2px);padding:.25rem .5rem;font-size:0.875rem;border-radius:.25rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-0.25rem -0.5rem;margin-inline-end:.5rem}.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-0.5rem -1rem;margin-inline-end:1rem}textarea.form-control{min-height:calc(1.5em + 0.75rem + 2px)}textarea.form-control-sm{min-height:calc(1.5em + 0.5rem + 2px)}textarea.form-control-lg{min-height:calc(1.5em + 1rem + 2px)}.form-control-color{width:3rem;height:calc(1.5em + 0.75rem + 2px);padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{border:0 !important;border-radius:.375rem}.form-control-color::-webkit-color-swatch{border-radius:.375rem}.form-control-color.form-control-sm{height:calc(1.5em + 0.5rem + 2px)}.form-control-color.form-control-lg{height:calc(1.5em + 1rem + 2px)}.form-select{display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;-moz-padding-start:calc(0.75rem - 3px);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-select[multiple],.form-select[size]:not([size=\"1\"]){padding-right:.75rem;background-image:none}.form-select:disabled{background-color:#e9ecef}.form-select:-moz-focusring{color:rgba(0,0,0,0);text-shadow:0 0 0 #212529}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:0.875rem;border-radius:.25rem}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem;border-radius:.5rem}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-reverse{padding-right:1.5em;padding-left:0;text-align:right}.form-check-reverse .form-check-input{float:right;margin-right:-1.5em;margin-left:0}.form-check-input{width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid rgba(0,0,0,.25);appearance:none;print-color-adjust:exact}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")}.form-check-input:checked[type=radio]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\")}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input[disabled]~.form-check-label,.form-check-input:disabled~.form-check-label{cursor:default;opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{width:2em;margin-left:-2.5em;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}@media(prefers-reduced-motion: reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\")}.form-switch .form-check-input:checked{background-position:right center;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.form-switch.form-check-reverse{padding-right:2.5em;padding-left:0}.form-switch.form-check-reverse .form-check-input{margin-right:-2.5em;margin-left:0}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.btn-check[disabled]+.btn,.btn-check:disabled+.btn{pointer-events:none;filter:none;opacity:.65}.form-range{width:100%;height:1.5rem;padding:0;background-color:rgba(0,0,0,0);appearance:none}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-0.25rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.form-range::-webkit-slider-thumb{transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:rgba(0,0,0,0);cursor:pointer;background-color:#dee2e6;border-color:rgba(0,0,0,0);border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.form-range::-moz-range-thumb{transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:rgba(0,0,0,0);cursor:pointer;background-color:#dee2e6;border-color:rgba(0,0,0,0);border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-control-plaintext,.form-floating>.form-select{height:calc(3.5rem + 2px);line-height:1.25}.form-floating>label{position:absolute;top:0;left:0;width:100%;height:100%;padding:1rem .75rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;border:1px solid rgba(0,0,0,0);transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}@media(prefers-reduced-motion: reduce){.form-floating>label{transition:none}}.form-floating>.form-control,.form-floating>.form-control-plaintext{padding:1rem .75rem}.form-floating>.form-control::placeholder,.form-floating>.form-control-plaintext::placeholder{color:rgba(0,0,0,0)}.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown),.form-floating>.form-control-plaintext:focus,.form-floating>.form-control-plaintext:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:-webkit-autofill,.form-floating>.form-control-plaintext:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-control-plaintext~label,.form-floating>.form-select~label{opacity:.65;transform:scale(0.85) translateY(-0.5rem) translateX(0.15rem)}.form-floating>.form-control:-webkit-autofill~label{opacity:.65;transform:scale(0.85) translateY(-0.5rem) translateX(0.15rem)}.form-floating>.form-control-plaintext~label{border-width:1px 0}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-select,.input-group>.form-floating{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-select:focus,.input-group>.form-floating:focus-within{z-index:3}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:3}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.375rem}.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text,.input-group-lg>.btn{padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text,.input-group-sm>.btn{padding:.25rem .5rem;font-size:0.875rem;border-radius:.25rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control,.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select{border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-control,.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-select{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.form-floating):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback),.input-group>.form-floating:not(:first-child)>.form-control,.input-group>.form-floating:not(:first-child)>.form-select{margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:0.875em;color:#198754}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:0.875rem;color:#fff;background-color:rgba(25,135,84,.9);border-radius:.375rem}.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip,.is-valid~.valid-feedback,.is-valid~.valid-tooltip{display:block}.was-validated .form-control:valid,.form-control.is-valid{border-color:#198754;padding-right:calc(1.5em + 0.75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(0.375em + 0.1875rem) center;background-size:calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-control:valid:focus,.form-control.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + 0.75rem);background-position:top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)}.was-validated .form-select:valid,.form-select.is-valid{border-color:#198754}.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size=\"1\"],.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size=\"1\"]{padding-right:4.125rem;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\"),url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-select:valid:focus,.form-select.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated .form-control-color:valid,.form-control-color.is-valid{width:calc(3rem + calc(1.5em + 0.75rem))}.was-validated .form-check-input:valid,.form-check-input.is-valid{border-color:#198754}.was-validated .form-check-input:valid:checked,.form-check-input.is-valid:checked{background-color:#198754}.was-validated .form-check-input:valid:focus,.form-check-input.is-valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated .form-check-input:valid~.form-check-label,.form-check-input.is-valid~.form-check-label{color:#198754}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.was-validated .input-group .form-control:valid,.input-group .form-control.is-valid,.was-validated .input-group .form-select:valid,.input-group .form-select.is-valid{z-index:1}.was-validated .input-group .form-control:valid:focus,.input-group .form-control.is-valid:focus,.was-validated .input-group .form-select:valid:focus,.input-group .form-select.is-valid:focus{z-index:3}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:0.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:0.875rem;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.375rem}.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip,.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip{display:block}.was-validated .form-control:invalid,.form-control.is-invalid{border-color:#dc3545;padding-right:calc(1.5em + 0.75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(0.375em + 0.1875rem) center;background-size:calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-control:invalid:focus,.form-control.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + 0.75rem);background-position:top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)}.was-validated .form-select:invalid,.form-select.is-invalid{border-color:#dc3545}.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size=\"1\"],.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size=\"1\"]{padding-right:4.125rem;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\"),url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-select:invalid:focus,.form-select.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated .form-control-color:invalid,.form-control-color.is-invalid{width:calc(3rem + calc(1.5em + 0.75rem))}.was-validated .form-check-input:invalid,.form-check-input.is-invalid{border-color:#dc3545}.was-validated .form-check-input:invalid:checked,.form-check-input.is-invalid:checked{background-color:#dc3545}.was-validated .form-check-input:invalid:focus,.form-check-input.is-invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated .form-check-input:invalid~.form-check-label,.form-check-input.is-invalid~.form-check-label{color:#dc3545}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.was-validated .input-group .form-control:invalid,.input-group .form-control.is-invalid,.was-validated .input-group .form-select:invalid,.input-group .form-select.is-invalid{z-index:2}.was-validated .input-group .form-control:invalid:focus,.input-group .form-control.is-invalid:focus,.was-validated .input-group .form-select:invalid:focus,.input-group .form-select.is-invalid:focus{z-index:3}.btn{--bs-btn-padding-x: 0.75rem;--bs-btn-padding-y: 0.375rem;--bs-btn-font-family: ;--bs-btn-font-size:1rem;--bs-btn-font-weight: 400;--bs-btn-line-height: 1.5;--bs-btn-color: #212529;--bs-btn-bg: transparent;--bs-btn-border-width: 1px;--bs-btn-border-color: transparent;--bs-btn-border-radius: 0.375rem;--bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);--bs-btn-disabled-opacity: 0.65;--bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);display:inline-block;padding:var(--bs-btn-padding-y) var(--bs-btn-padding-x);font-family:var(--bs-btn-font-family);font-size:var(--bs-btn-font-size);font-weight:var(--bs-btn-font-weight);line-height:var(--bs-btn-line-height);color:var(--bs-btn-color);text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;user-select:none;border:var(--bs-btn-border-width) solid var(--bs-btn-border-color);border-radius:var(--bs-btn-border-radius);background-color:var(--bs-btn-bg);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.btn{transition:none}}.btn:hover{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color)}.btn-check:focus+.btn,.btn:focus{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}.btn-check:checked+.btn,.btn-check:active+.btn,.btn:active,.btn.active,.btn.show{color:var(--bs-btn-active-color);background-color:var(--bs-btn-active-bg);border-color:var(--bs-btn-active-border-color)}.btn-check:checked+.btn:focus,.btn-check:active+.btn:focus,.btn:active:focus,.btn.active:focus,.btn.show:focus{box-shadow:var(--bs-btn-focus-box-shadow)}.btn:disabled,.btn.disabled,fieldset:disabled .btn{color:var(--bs-btn-disabled-color);pointer-events:none;background-color:var(--bs-btn-disabled-bg);border-color:var(--bs-btn-disabled-border-color);opacity:var(--bs-btn-disabled-opacity)}.btn-primary{--bs-btn-color: #fff;--bs-btn-bg: #0d6efd;--bs-btn-border-color: #0d6efd;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #0b5ed7;--bs-btn-hover-border-color: #0a58ca;--bs-btn-focus-shadow-rgb: 49, 132, 253;--bs-btn-active-color: #fff;--bs-btn-active-bg: #0a58ca;--bs-btn-active-border-color: #0a53be;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #0d6efd;--bs-btn-disabled-border-color: #0d6efd}.btn-secondary{--bs-btn-color: #fff;--bs-btn-bg: #6c757d;--bs-btn-border-color: #6c757d;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #5c636a;--bs-btn-hover-border-color: #565e64;--bs-btn-focus-shadow-rgb: 130, 138, 145;--bs-btn-active-color: #fff;--bs-btn-active-bg: #565e64;--bs-btn-active-border-color: #51585e;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #6c757d;--bs-btn-disabled-border-color: #6c757d}.btn-success{--bs-btn-color: #fff;--bs-btn-bg: #198754;--bs-btn-border-color: #198754;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #157347;--bs-btn-hover-border-color: #146c43;--bs-btn-focus-shadow-rgb: 60, 153, 110;--bs-btn-active-color: #fff;--bs-btn-active-bg: #146c43;--bs-btn-active-border-color: #13653f;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #198754;--bs-btn-disabled-border-color: #198754}.btn-info{--bs-btn-color: #000;--bs-btn-bg: #0dcaf0;--bs-btn-border-color: #0dcaf0;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #31d2f2;--bs-btn-hover-border-color: #25cff2;--bs-btn-focus-shadow-rgb: 11, 172, 204;--bs-btn-active-color: #000;--bs-btn-active-bg: #3dd5f3;--bs-btn-active-border-color: #25cff2;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #000;--bs-btn-disabled-bg: #0dcaf0;--bs-btn-disabled-border-color: #0dcaf0}.btn-warning{--bs-btn-color: #000;--bs-btn-bg: #ffc107;--bs-btn-border-color: #ffc107;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #ffca2c;--bs-btn-hover-border-color: #ffc720;--bs-btn-focus-shadow-rgb: 217, 164, 6;--bs-btn-active-color: #000;--bs-btn-active-bg: #ffcd39;--bs-btn-active-border-color: #ffc720;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #000;--bs-btn-disabled-bg: #ffc107;--bs-btn-disabled-border-color: #ffc107}.btn-danger{--bs-btn-color: #fff;--bs-btn-bg: #dc3545;--bs-btn-border-color: #dc3545;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #bb2d3b;--bs-btn-hover-border-color: #b02a37;--bs-btn-focus-shadow-rgb: 225, 83, 97;--bs-btn-active-color: #fff;--bs-btn-active-bg: #b02a37;--bs-btn-active-border-color: #a52834;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #dc3545;--bs-btn-disabled-border-color: #dc3545}.btn-light{--bs-btn-color: #000;--bs-btn-bg: #f8f9fa;--bs-btn-border-color: #f8f9fa;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #d3d4d5;--bs-btn-hover-border-color: #c6c7c8;--bs-btn-focus-shadow-rgb: 211, 212, 213;--bs-btn-active-color: #000;--bs-btn-active-bg: #c6c7c8;--bs-btn-active-border-color: #babbbc;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #000;--bs-btn-disabled-bg: #f8f9fa;--bs-btn-disabled-border-color: #f8f9fa}.btn-dark{--bs-btn-color: #fff;--bs-btn-bg: #212529;--bs-btn-border-color: #212529;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #424649;--bs-btn-hover-border-color: #373b3e;--bs-btn-focus-shadow-rgb: 66, 70, 73;--bs-btn-active-color: #fff;--bs-btn-active-bg: #4d5154;--bs-btn-active-border-color: #373b3e;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #212529;--bs-btn-disabled-border-color: #212529}.btn-outline-primary{--bs-btn-color: #0d6efd;--bs-btn-border-color: #0d6efd;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #0d6efd;--bs-btn-hover-border-color: #0d6efd;--bs-btn-focus-shadow-rgb: 13, 110, 253;--bs-btn-active-color: #fff;--bs-btn-active-bg: #0d6efd;--bs-btn-active-border-color: #0d6efd;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #0d6efd;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #0d6efd;--bs-gradient: none}.btn-outline-secondary{--bs-btn-color: #6c757d;--bs-btn-border-color: #6c757d;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #6c757d;--bs-btn-hover-border-color: #6c757d;--bs-btn-focus-shadow-rgb: 108, 117, 125;--bs-btn-active-color: #fff;--bs-btn-active-bg: #6c757d;--bs-btn-active-border-color: #6c757d;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #6c757d;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #6c757d;--bs-gradient: none}.btn-outline-success{--bs-btn-color: #198754;--bs-btn-border-color: #198754;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #198754;--bs-btn-hover-border-color: #198754;--bs-btn-focus-shadow-rgb: 25, 135, 84;--bs-btn-active-color: #fff;--bs-btn-active-bg: #198754;--bs-btn-active-border-color: #198754;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #198754;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #198754;--bs-gradient: none}.btn-outline-info{--bs-btn-color: #0dcaf0;--bs-btn-border-color: #0dcaf0;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #0dcaf0;--bs-btn-hover-border-color: #0dcaf0;--bs-btn-focus-shadow-rgb: 13, 202, 240;--bs-btn-active-color: #000;--bs-btn-active-bg: #0dcaf0;--bs-btn-active-border-color: #0dcaf0;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #0dcaf0;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #0dcaf0;--bs-gradient: none}.btn-outline-warning{--bs-btn-color: #ffc107;--bs-btn-border-color: #ffc107;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #ffc107;--bs-btn-hover-border-color: #ffc107;--bs-btn-focus-shadow-rgb: 255, 193, 7;--bs-btn-active-color: #000;--bs-btn-active-bg: #ffc107;--bs-btn-active-border-color: #ffc107;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #ffc107;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #ffc107;--bs-gradient: none}.btn-outline-danger{--bs-btn-color: #dc3545;--bs-btn-border-color: #dc3545;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #dc3545;--bs-btn-hover-border-color: #dc3545;--bs-btn-focus-shadow-rgb: 220, 53, 69;--bs-btn-active-color: #fff;--bs-btn-active-bg: #dc3545;--bs-btn-active-border-color: #dc3545;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #dc3545;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #dc3545;--bs-gradient: none}.btn-outline-light{--bs-btn-color: #f8f9fa;--bs-btn-border-color: #f8f9fa;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #f8f9fa;--bs-btn-hover-border-color: #f8f9fa;--bs-btn-focus-shadow-rgb: 248, 249, 250;--bs-btn-active-color: #000;--bs-btn-active-bg: #f8f9fa;--bs-btn-active-border-color: #f8f9fa;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #f8f9fa;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #f8f9fa;--bs-gradient: none}.btn-outline-dark{--bs-btn-color: #212529;--bs-btn-border-color: #212529;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #212529;--bs-btn-hover-border-color: #212529;--bs-btn-focus-shadow-rgb: 33, 37, 41;--bs-btn-active-color: #fff;--bs-btn-active-bg: #212529;--bs-btn-active-border-color: #212529;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #212529;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #212529;--bs-gradient: none}.btn-link{--bs-btn-font-weight: 400;--bs-btn-color: var(--bs-link-color);--bs-btn-bg: transparent;--bs-btn-border-color: transparent;--bs-btn-hover-color: var(--bs-link-hover-color);--bs-btn-hover-border-color: transparent;--bs-btn-active-color: var(--bs-link-hover-color);--bs-btn-active-border-color: transparent;--bs-btn-disabled-color: #6c757d;--bs-btn-disabled-border-color: transparent;--bs-btn-box-shadow: none;--bs-btn-focus-shadow-rgb: 49, 132, 253;text-decoration:underline}.btn-link:focus{color:var(--bs-btn-color)}.btn-link:hover{color:var(--bs-btn-hover-color)}.btn-lg,.btn-group-lg>.btn{--bs-btn-padding-y: 0.5rem;--bs-btn-padding-x: 1rem;--bs-btn-font-size:1.25rem;--bs-btn-border-radius: 0.5rem}.btn-sm,.btn-group-sm>.btn{--bs-btn-padding-y: 0.25rem;--bs-btn-padding-x: 0.5rem;--bs-btn-font-size:0.875rem;--bs-btn-border-radius: 0.25rem}.fade{transition:opacity .15s linear}@media(prefers-reduced-motion: reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height .35s ease}@media(prefers-reduced-motion: reduce){.collapsing{transition:none}}.collapsing.collapse-horizontal{width:0;height:auto;transition:width .35s ease}@media(prefers-reduced-motion: reduce){.collapsing.collapse-horizontal{transition:none}}.dropup,.dropend,.dropdown,.dropstart,.dropup-center,.dropdown-center{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid rgba(0,0,0,0);border-bottom:0;border-left:.3em solid rgba(0,0,0,0)}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{--bs-dropdown-min-width: 10rem;--bs-dropdown-padding-x: 0;--bs-dropdown-padding-y: 0.5rem;--bs-dropdown-spacer: 0.125rem;--bs-dropdown-font-size:1rem;--bs-dropdown-color: #212529;--bs-dropdown-bg: #fff;--bs-dropdown-border-color: var(--bs-border-color-translucent);--bs-dropdown-border-radius: 0.375rem;--bs-dropdown-border-width: 1px;--bs-dropdown-inner-border-radius: calc(0.375rem - 1px);--bs-dropdown-divider-bg: var(--bs-border-color-translucent);--bs-dropdown-divider-margin-y: 0.5rem;--bs-dropdown-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-dropdown-link-color: #212529;--bs-dropdown-link-hover-color: #1e2125;--bs-dropdown-link-hover-bg: #e9ecef;--bs-dropdown-link-active-color: #fff;--bs-dropdown-link-active-bg: #0d6efd;--bs-dropdown-link-disabled-color: #adb5bd;--bs-dropdown-item-padding-x: 1rem;--bs-dropdown-item-padding-y: 0.25rem;--bs-dropdown-header-color: #6c757d;--bs-dropdown-header-padding-x: 1rem;--bs-dropdown-header-padding-y: 0.5rem;position:absolute;z-index:1000;display:none;min-width:var(--bs-dropdown-min-width);padding:var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);margin:0;font-size:var(--bs-dropdown-font-size);color:var(--bs-dropdown-color);text-align:left;list-style:none;background-color:var(--bs-dropdown-bg);background-clip:padding-box;border:var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);border-radius:var(--bs-dropdown-border-radius)}.dropdown-menu[data-bs-popper]{top:100%;left:0;margin-top:var(--bs-dropdown-spacer)}.dropdown-menu-start{--bs-position: start}.dropdown-menu-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-end{--bs-position: end}.dropdown-menu-end[data-bs-popper]{right:0;left:auto}@media(min-width: 576px){.dropdown-menu-sm-start{--bs-position: start}.dropdown-menu-sm-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-sm-end{--bs-position: end}.dropdown-menu-sm-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 768px){.dropdown-menu-md-start{--bs-position: start}.dropdown-menu-md-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-md-end{--bs-position: end}.dropdown-menu-md-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 992px){.dropdown-menu-lg-start{--bs-position: start}.dropdown-menu-lg-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-lg-end{--bs-position: end}.dropdown-menu-lg-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 1200px){.dropdown-menu-xl-start{--bs-position: start}.dropdown-menu-xl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xl-end{--bs-position: end}.dropdown-menu-xl-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 1400px){.dropdown-menu-xxl-start{--bs-position: start}.dropdown-menu-xxl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xxl-end{--bs-position: end}.dropdown-menu-xxl-end[data-bs-popper]{right:0;left:auto}}.dropup .dropdown-menu[data-bs-popper]{top:auto;bottom:100%;margin-top:0;margin-bottom:var(--bs-dropdown-spacer)}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid rgba(0,0,0,0);border-bottom:.3em solid;border-left:.3em solid rgba(0,0,0,0)}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{top:0;right:auto;left:100%;margin-top:0;margin-left:var(--bs-dropdown-spacer)}.dropend .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid rgba(0,0,0,0);border-right:0;border-bottom:.3em solid rgba(0,0,0,0);border-left:.3em solid}.dropend .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-toggle::after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{top:0;right:100%;left:auto;margin-top:0;margin-right:var(--bs-dropdown-spacer)}.dropstart .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropstart .dropdown-toggle::after{display:none}.dropstart .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid rgba(0,0,0,0);border-right:.3em solid;border-bottom:.3em solid rgba(0,0,0,0)}.dropstart .dropdown-toggle:empty::after{margin-left:0}.dropstart .dropdown-toggle::before{vertical-align:0}.dropdown-divider{height:0;margin:var(--bs-dropdown-divider-margin-y) 0;overflow:hidden;border-top:1px solid var(--bs-dropdown-divider-bg);opacity:1}.dropdown-item{display:block;width:100%;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);clear:both;font-weight:400;color:var(--bs-dropdown-link-color);text-align:inherit;text-decoration:none;white-space:nowrap;background-color:rgba(0,0,0,0);border:0}.dropdown-item:hover,.dropdown-item:focus{color:var(--bs-dropdown-link-hover-color);background-color:var(--bs-dropdown-link-hover-bg)}.dropdown-item.active,.dropdown-item:active{color:var(--bs-dropdown-link-active-color);text-decoration:none;background-color:var(--bs-dropdown-link-active-bg)}.dropdown-item.disabled,.dropdown-item:disabled{color:var(--bs-dropdown-link-disabled-color);pointer-events:none;background-color:rgba(0,0,0,0)}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);margin-bottom:0;font-size:0.875rem;color:var(--bs-dropdown-header-color);white-space:nowrap}.dropdown-item-text{display:block;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);color:var(--bs-dropdown-link-color)}.dropdown-menu-dark{--bs-dropdown-color: #dee2e6;--bs-dropdown-bg: #343a40;--bs-dropdown-border-color: var(--bs-border-color-translucent);--bs-dropdown-box-shadow: ;--bs-dropdown-link-color: #dee2e6;--bs-dropdown-link-hover-color: #fff;--bs-dropdown-divider-bg: var(--bs-border-color-translucent);--bs-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15);--bs-dropdown-link-active-color: #fff;--bs-dropdown-link-active-bg: #0d6efd;--bs-dropdown-link-disabled-color: #adb5bd;--bs-dropdown-header-color: #adb5bd}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;flex:1 1 auto}.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn:hover,.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn:hover,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn.active{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group{border-radius:.375rem}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child){margin-left:-1px}.btn-group>.btn:not(:last-child):not(.dropdown-toggle),.btn-group>.btn.dropdown-toggle-split:first-child,.btn-group>.btn-group:not(:last-child)>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn,.btn-group>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after,.dropend .dropdown-toggle-split::after{margin-left:0}.dropstart .dropdown-toggle-split::before{margin-right:0}.btn-sm+.dropdown-toggle-split,.btn-group-sm>.btn+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-lg+.dropdown-toggle-split,.btn-group-lg>.btn+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),.btn-group-vertical>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn~.btn,.btn-group-vertical>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{--bs-nav-link-padding-x: 1rem;--bs-nav-link-padding-y: 0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color: var(--bs-link-color);--bs-nav-link-hover-color: var(--bs-link-hover-color);--bs-nav-link-disabled-color: #6c757d;display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);font-size:var(--bs-nav-link-font-size);font-weight:var(--bs-nav-link-font-weight);color:var(--bs-nav-link-color);text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media(prefers-reduced-motion: reduce){.nav-link{transition:none}}.nav-link:hover,.nav-link:focus{color:var(--bs-nav-link-hover-color)}.nav-link.disabled{color:var(--bs-nav-link-disabled-color);pointer-events:none;cursor:default}.nav-tabs{--bs-nav-tabs-border-width: 1px;--bs-nav-tabs-border-color: #dee2e6;--bs-nav-tabs-border-radius: 0.375rem;--bs-nav-tabs-link-hover-border-color: #e9ecef #e9ecef #dee2e6;--bs-nav-tabs-link-active-color: #495057;--bs-nav-tabs-link-active-bg: #fff;--bs-nav-tabs-link-active-border-color: #dee2e6 #dee2e6 #fff;border-bottom:var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color)}.nav-tabs .nav-link{margin-bottom:calc(var(--bs-nav-tabs-border-width)*-1);background:none;border:var(--bs-nav-tabs-border-width) solid rgba(0,0,0,0);border-top-left-radius:var(--bs-nav-tabs-border-radius);border-top-right-radius:var(--bs-nav-tabs-border-radius)}.nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus{isolation:isolate;border-color:var(--bs-nav-tabs-link-hover-border-color)}.nav-tabs .nav-link.disabled,.nav-tabs .nav-link:disabled{color:var(--bs-nav-link-disabled-color);background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.nav-tabs .nav-link.active,.nav-tabs .nav-item.show .nav-link{color:var(--bs-nav-tabs-link-active-color);background-color:var(--bs-nav-tabs-link-active-bg);border-color:var(--bs-nav-tabs-link-active-border-color)}.nav-tabs .dropdown-menu{margin-top:calc(var(--bs-nav-tabs-border-width)*-1);border-top-left-radius:0;border-top-right-radius:0}.nav-pills{--bs-nav-pills-border-radius: 0.375rem;--bs-nav-pills-link-active-color: #fff;--bs-nav-pills-link-active-bg: #0d6efd}.nav-pills .nav-link{background:none;border:0;border-radius:var(--bs-nav-pills-border-radius)}.nav-pills .nav-link:disabled{color:var(--bs-nav-link-disabled-color);background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:var(--bs-nav-pills-link-active-color);background-color:var(--bs-nav-pills-link-active-bg)}.nav-fill>.nav-link,.nav-fill .nav-item{flex:1 1 auto;text-align:center}.nav-justified>.nav-link,.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{--bs-navbar-padding-x: 0;--bs-navbar-padding-y: 0.5rem;--bs-navbar-color: rgba(0, 0, 0, 0.55);--bs-navbar-hover-color: rgba(0, 0, 0, 0.7);--bs-navbar-disabled-color: rgba(0, 0, 0, 0.3);--bs-navbar-active-color: rgba(0, 0, 0, 0.9);--bs-navbar-brand-padding-y: 0.3125rem;--bs-navbar-brand-margin-end: 1rem;--bs-navbar-brand-font-size: 1.25rem;--bs-navbar-brand-color: rgba(0, 0, 0, 0.9);--bs-navbar-brand-hover-color: rgba(0, 0, 0, 0.9);--bs-navbar-nav-link-padding-x: 0.5rem;--bs-navbar-toggler-padding-y: 0.25rem;--bs-navbar-toggler-padding-x: 0.75rem;--bs-navbar-toggler-font-size: 1.25rem;--bs-navbar-toggler-icon-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");--bs-navbar-toggler-border-color: rgba(0, 0, 0, 0.1);--bs-navbar-toggler-border-radius: 0.375rem;--bs-navbar-toggler-focus-width: 0.25rem;--bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:var(--bs-navbar-padding-y) var(--bs-navbar-padding-x)}.navbar>.container,.navbar>.container-fluid,.navbar>.container-sm,.navbar>.container-md,.navbar>.container-lg,.navbar>.container-xl,.navbar>.container-xxl{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:var(--bs-navbar-brand-padding-y);padding-bottom:var(--bs-navbar-brand-padding-y);margin-right:var(--bs-navbar-brand-margin-end);font-size:var(--bs-navbar-brand-font-size);color:var(--bs-navbar-brand-color);text-decoration:none;white-space:nowrap}.navbar-brand:hover,.navbar-brand:focus{color:var(--bs-navbar-brand-hover-color)}.navbar-nav{--bs-nav-link-padding-x: 0;--bs-nav-link-padding-y: 0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color: var(--bs-navbar-color);--bs-nav-link-hover-color: var(--bs-navbar-hover-color);--bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .show>.nav-link,.navbar-nav .nav-link.active{color:var(--bs-navbar-active-color)}.navbar-nav .dropdown-menu{position:static}.navbar-text{padding-top:.5rem;padding-bottom:.5rem;color:var(--bs-navbar-color)}.navbar-text a,.navbar-text a:hover,.navbar-text a:focus{color:var(--bs-navbar-active-color)}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);font-size:var(--bs-navbar-toggler-font-size);line-height:1;color:var(--bs-navbar-color);background-color:rgba(0,0,0,0);border:var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);border-radius:var(--bs-navbar-toggler-border-radius);transition:var(--bs-navbar-toggler-transition)}@media(prefers-reduced-motion: reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 var(--bs-navbar-toggler-focus-width)}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-image:var(--bs-navbar-toggler-icon-bg);background-repeat:no-repeat;background-position:center;background-size:100%}.navbar-nav-scroll{max-height:var(--bs-scroll-height, 75vh);overflow-y:auto}@media(min-width: 576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}.navbar-expand-sm .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-sm .offcanvas .offcanvas-header{display:none}.navbar-expand-sm .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}.navbar-expand-md .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-md .offcanvas .offcanvas-header{display:none}.navbar-expand-md .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-lg .offcanvas .offcanvas-header{display:none}.navbar-expand-lg .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}.navbar-expand-xl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-xl .offcanvas .offcanvas-header{display:none}.navbar-expand-xl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}.navbar-expand-xxl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-xxl .offcanvas .offcanvas-header{display:none}.navbar-expand-xxl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-expand .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand .offcanvas .offcanvas-header{display:none}.navbar-expand .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}.navbar-dark{--bs-navbar-color: rgba(255, 255, 255, 0.55);--bs-navbar-hover-color: rgba(255, 255, 255, 0.75);--bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);--bs-navbar-active-color: #fff;--bs-navbar-brand-color: #fff;--bs-navbar-brand-hover-color: #fff;--bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);--bs-navbar-toggler-icon-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.card{--bs-card-spacer-y: 1rem;--bs-card-spacer-x: 1rem;--bs-card-title-spacer-y: 0.5rem;--bs-card-border-width: 1px;--bs-card-border-color: var(--bs-border-color-translucent);--bs-card-border-radius: 0.375rem;--bs-card-box-shadow: ;--bs-card-inner-border-radius: calc(0.375rem - 1px);--bs-card-cap-padding-y: 0.5rem;--bs-card-cap-padding-x: 1rem;--bs-card-cap-bg: rgba(0, 0, 0, 0.03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg: #fff;--bs-card-img-overlay-padding: 1rem;--bs-card-group-margin: 0.75rem;position:relative;display:flex;flex-direction:column;min-width:0;height:var(--bs-card-height);word-wrap:break-word;background-color:var(--bs-card-bg);background-clip:border-box;border:var(--bs-card-border-width) solid var(--bs-card-border-color);border-radius:var(--bs-card-border-radius)}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;padding:var(--bs-card-spacer-y) var(--bs-card-spacer-x);color:var(--bs-card-color)}.card-title{margin-bottom:var(--bs-card-title-spacer-y)}.card-subtitle{margin-top:calc(-0.5*var(--bs-card-title-spacer-y));margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link+.card-link{margin-left:var(--bs-card-spacer-x)}.card-header{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);margin-bottom:0;color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-bottom:var(--bs-card-border-width) solid var(--bs-card-border-color)}.card-header:first-child{border-radius:var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0}.card-footer{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-top:var(--bs-card-border-width) solid var(--bs-card-border-color)}.card-footer:last-child{border-radius:0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius)}.card-header-tabs{margin-right:calc(-0.5*var(--bs-card-cap-padding-x));margin-bottom:calc(-1*var(--bs-card-cap-padding-y));margin-left:calc(-0.5*var(--bs-card-cap-padding-x));border-bottom:0}.card-header-tabs .nav-link.active{background-color:var(--bs-card-bg);border-bottom-color:var(--bs-card-bg)}.card-header-pills{margin-right:calc(-0.5*var(--bs-card-cap-padding-x));margin-left:calc(-0.5*var(--bs-card-cap-padding-x))}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:var(--bs-card-img-overlay-padding);border-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-top,.card-img-bottom{width:100%}.card-img,.card-img-top{border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-bottom{border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}.card-group>.card{margin-bottom:var(--bs-card-group-margin)}@media(min-width: 576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-img-top,.card-group>.card:not(:last-child) .card-header{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-img-bottom,.card-group>.card:not(:last-child) .card-footer{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-img-top,.card-group>.card:not(:first-child) .card-header{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-img-bottom,.card-group>.card:not(:first-child) .card-footer{border-bottom-left-radius:0}}.accordion{--bs-accordion-color: #000;--bs-accordion-bg: #fff;--bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;--bs-accordion-border-color: var(--bs-border-color);--bs-accordion-border-width: 1px;--bs-accordion-border-radius: 0.375rem;--bs-accordion-inner-border-radius: calc(0.375rem - 1px);--bs-accordion-btn-padding-x: 1.25rem;--bs-accordion-btn-padding-y: 1rem;--bs-accordion-btn-color: var(--bs-body-color);--bs-accordion-btn-bg: var(--bs-accordion-bg);--bs-accordion-btn-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='var%28--bs-body-color%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");--bs-accordion-btn-icon-width: 1.25rem;--bs-accordion-btn-icon-transform: rotate(-180deg);--bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;--bs-accordion-btn-active-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");--bs-accordion-btn-focus-border-color: #86b7fe;--bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);--bs-accordion-body-padding-x: 1.25rem;--bs-accordion-body-padding-y: 1rem;--bs-accordion-active-color: #0c63e4;--bs-accordion-active-bg: #e7f1ff}.accordion-button{position:relative;display:flex;align-items:center;width:100%;padding:var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);font-size:1rem;color:var(--bs-accordion-btn-color);text-align:left;background-color:var(--bs-accordion-btn-bg);border:0;border-radius:0;overflow-anchor:none;transition:var(--bs-accordion-transition)}@media(prefers-reduced-motion: reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){color:var(--bs-accordion-active-color);background-color:var(--bs-accordion-active-bg);box-shadow:inset 0 calc(var(--bs-accordion-border-width)*-1) 0 var(--bs-accordion-border-color)}.accordion-button:not(.collapsed)::after{background-image:var(--bs-accordion-btn-active-icon);transform:var(--bs-accordion-btn-icon-transform)}.accordion-button::after{flex-shrink:0;width:var(--bs-accordion-btn-icon-width);height:var(--bs-accordion-btn-icon-width);margin-left:auto;content:\"\";background-image:var(--bs-accordion-btn-icon);background-repeat:no-repeat;background-size:var(--bs-accordion-btn-icon-width);transition:var(--bs-accordion-btn-icon-transition)}@media(prefers-reduced-motion: reduce){.accordion-button::after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{z-index:3;border-color:var(--bs-accordion-btn-focus-border-color);outline:0;box-shadow:var(--bs-accordion-btn-focus-box-shadow)}.accordion-header{margin-bottom:0}.accordion-item{color:var(--bs-accordion-color);background-color:var(--bs-accordion-bg);border:var(--bs-accordion-border-width) solid var(--bs-accordion-border-color)}.accordion-item:first-of-type{border-top-left-radius:var(--bs-accordion-border-radius);border-top-right-radius:var(--bs-accordion-border-radius)}.accordion-item:first-of-type .accordion-button{border-top-left-radius:var(--bs-accordion-inner-border-radius);border-top-right-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-right-radius:var(--bs-accordion-inner-border-radius);border-bottom-left-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:last-of-type .accordion-collapse{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-body{padding:var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x)}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item{border-right:0;border-left:0;border-radius:0}.accordion-flush .accordion-item:first-child{border-top:0}.accordion-flush .accordion-item:last-child{border-bottom:0}.accordion-flush .accordion-item .accordion-button{border-radius:0}.breadcrumb{--bs-breadcrumb-padding-x: 0;--bs-breadcrumb-padding-y: 0;--bs-breadcrumb-margin-bottom: 1rem;--bs-breadcrumb-bg: ;--bs-breadcrumb-border-radius: ;--bs-breadcrumb-divider-color: #6c757d;--bs-breadcrumb-item-padding-x: 0.5rem;--bs-breadcrumb-item-active-color: #6c757d;display:flex;flex-wrap:wrap;padding:var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);margin-bottom:var(--bs-breadcrumb-margin-bottom);font-size:var(--bs-breadcrumb-font-size);list-style:none;background-color:var(--bs-breadcrumb-bg);border-radius:var(--bs-breadcrumb-border-radius)}.breadcrumb-item+.breadcrumb-item{padding-left:var(--bs-breadcrumb-item-padding-x)}.breadcrumb-item+.breadcrumb-item::before{float:left;padding-right:var(--bs-breadcrumb-item-padding-x);color:var(--bs-breadcrumb-divider-color);content:var(--bs-breadcrumb-divider, \"/\") /* rtl: var(--bs-breadcrumb-divider, \"/\") */}.breadcrumb-item.active{color:var(--bs-breadcrumb-item-active-color)}.pagination{--bs-pagination-padding-x: 0.75rem;--bs-pagination-padding-y: 0.375rem;--bs-pagination-font-size:1rem;--bs-pagination-color: var(--bs-link-color);--bs-pagination-bg: #fff;--bs-pagination-border-width: 1px;--bs-pagination-border-color: #dee2e6;--bs-pagination-border-radius: 0.375rem;--bs-pagination-hover-color: var(--bs-link-hover-color);--bs-pagination-hover-bg: #e9ecef;--bs-pagination-hover-border-color: #dee2e6;--bs-pagination-focus-color: var(--bs-link-hover-color);--bs-pagination-focus-bg: #e9ecef;--bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);--bs-pagination-active-color: #fff;--bs-pagination-active-bg: #0d6efd;--bs-pagination-active-border-color: #0d6efd;--bs-pagination-disabled-color: #6c757d;--bs-pagination-disabled-bg: #fff;--bs-pagination-disabled-border-color: #dee2e6;display:flex;padding-left:0;list-style:none}.page-link{position:relative;display:block;padding:var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);font-size:var(--bs-pagination-font-size);color:var(--bs-pagination-color);text-decoration:none;background-color:var(--bs-pagination-bg);border:var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.page-link{transition:none}}.page-link:hover{z-index:2;color:var(--bs-pagination-hover-color);background-color:var(--bs-pagination-hover-bg);border-color:var(--bs-pagination-hover-border-color)}.page-link:focus{z-index:3;color:var(--bs-pagination-focus-color);background-color:var(--bs-pagination-focus-bg);outline:0;box-shadow:var(--bs-pagination-focus-box-shadow)}.page-link.active,.active>.page-link{z-index:3;color:var(--bs-pagination-active-color);background-color:var(--bs-pagination-active-bg);border-color:var(--bs-pagination-active-border-color)}.page-link.disabled,.disabled>.page-link{color:var(--bs-pagination-disabled-color);pointer-events:none;background-color:var(--bs-pagination-disabled-bg);border-color:var(--bs-pagination-disabled-border-color)}.page-item:not(:first-child) .page-link{margin-left:-1px}.page-item:first-child .page-link{border-top-left-radius:var(--bs-pagination-border-radius);border-bottom-left-radius:var(--bs-pagination-border-radius)}.page-item:last-child .page-link{border-top-right-radius:var(--bs-pagination-border-radius);border-bottom-right-radius:var(--bs-pagination-border-radius)}.pagination-lg{--bs-pagination-padding-x: 1.5rem;--bs-pagination-padding-y: 0.75rem;--bs-pagination-font-size:1.25rem;--bs-pagination-border-radius: 0.5rem}.pagination-sm{--bs-pagination-padding-x: 0.5rem;--bs-pagination-padding-y: 0.25rem;--bs-pagination-font-size:0.875rem;--bs-pagination-border-radius: 0.25rem}.badge{--bs-badge-padding-x: 0.65em;--bs-badge-padding-y: 0.35em;--bs-badge-font-size:0.75em;--bs-badge-font-weight: 700;--bs-badge-color: #fff;--bs-badge-border-radius: 0.375rem;display:inline-block;padding:var(--bs-badge-padding-y) var(--bs-badge-padding-x);font-size:var(--bs-badge-font-size);font-weight:var(--bs-badge-font-weight);line-height:1;color:var(--bs-badge-color);text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:var(--bs-badge-border-radius)}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{--bs-alert-bg: transparent;--bs-alert-padding-x: 1rem;--bs-alert-padding-y: 1rem;--bs-alert-margin-bottom: 1rem;--bs-alert-color: inherit;--bs-alert-border-color: transparent;--bs-alert-border: 1px solid var(--bs-alert-border-color);--bs-alert-border-radius: 0.375rem;position:relative;padding:var(--bs-alert-padding-y) var(--bs-alert-padding-x);margin-bottom:var(--bs-alert-margin-bottom);color:var(--bs-alert-color);background-color:var(--bs-alert-bg);border:var(--bs-alert-border);border-radius:var(--bs-alert-border-radius)}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{position:absolute;top:0;right:0;z-index:2;padding:1.25rem 1rem}.alert-primary{--bs-alert-color: #084298;--bs-alert-bg: #cfe2ff;--bs-alert-border-color: #b6d4fe}.alert-primary .alert-link{color:#06357a}.alert-secondary{--bs-alert-color: #41464b;--bs-alert-bg: #e2e3e5;--bs-alert-border-color: #d3d6d8}.alert-secondary .alert-link{color:#34383c}.alert-success{--bs-alert-color: #0f5132;--bs-alert-bg: #d1e7dd;--bs-alert-border-color: #badbcc}.alert-success .alert-link{color:#0c4128}.alert-info{--bs-alert-color: #055160;--bs-alert-bg: #cff4fc;--bs-alert-border-color: #b6effb}.alert-info .alert-link{color:#04414d}.alert-warning{--bs-alert-color: #664d03;--bs-alert-bg: #fff3cd;--bs-alert-border-color: #ffecb5}.alert-warning .alert-link{color:#523e02}.alert-danger{--bs-alert-color: #842029;--bs-alert-bg: #f8d7da;--bs-alert-border-color: #f5c2c7}.alert-danger .alert-link{color:#6a1a21}.alert-light{--bs-alert-color: #636464;--bs-alert-bg: #fefefe;--bs-alert-border-color: #fdfdfe}.alert-light .alert-link{color:#4f5050}.alert-dark{--bs-alert-color: #141619;--bs-alert-bg: #d3d3d4;--bs-alert-border-color: #bcbebf}.alert-dark .alert-link{color:#101214}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress{--bs-progress-height: 1rem;--bs-progress-font-size:0.75rem;--bs-progress-bg: #e9ecef;--bs-progress-border-radius: 0.375rem;--bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);--bs-progress-bar-color: #fff;--bs-progress-bar-bg: #0d6efd;--bs-progress-bar-transition: width 0.6s ease;display:flex;height:var(--bs-progress-height);overflow:hidden;font-size:var(--bs-progress-font-size);background-color:var(--bs-progress-bg);border-radius:var(--bs-progress-border-radius)}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:var(--bs-progress-bar-color);text-align:center;white-space:nowrap;background-color:var(--bs-progress-bar-bg);transition:var(--bs-progress-bar-transition)}@media(prefers-reduced-motion: reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);background-size:var(--bs-progress-height) var(--bs-progress-height)}.progress-bar-animated{animation:1s linear infinite progress-bar-stripes}@media(prefers-reduced-motion: reduce){.progress-bar-animated{animation:none}}.list-group{--bs-list-group-color: #212529;--bs-list-group-bg: #fff;--bs-list-group-border-color: rgba(0, 0, 0, 0.125);--bs-list-group-border-width: 1px;--bs-list-group-border-radius: 0.375rem;--bs-list-group-item-padding-x: 1rem;--bs-list-group-item-padding-y: 0.5rem;--bs-list-group-action-color: #495057;--bs-list-group-action-hover-color: #495057;--bs-list-group-action-hover-bg: #f8f9fa;--bs-list-group-action-active-color: #212529;--bs-list-group-action-active-bg: #e9ecef;--bs-list-group-disabled-color: #6c757d;--bs-list-group-disabled-bg: #fff;--bs-list-group-active-color: #fff;--bs-list-group-active-bg: #0d6efd;--bs-list-group-active-border-color: #0d6efd;display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:var(--bs-list-group-border-radius)}.list-group-numbered{list-style-type:none;counter-reset:section}.list-group-numbered>.list-group-item::before{content:counters(section, \".\") \". \";counter-increment:section}.list-group-item-action{width:100%;color:var(--bs-list-group-action-color);text-align:inherit}.list-group-item-action:hover,.list-group-item-action:focus{z-index:1;color:var(--bs-list-group-action-hover-color);text-decoration:none;background-color:var(--bs-list-group-action-hover-bg)}.list-group-item-action:active{color:var(--bs-list-group-action-active-color);background-color:var(--bs-list-group-action-active-bg)}.list-group-item{position:relative;display:block;padding:var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);color:var(--bs-list-group-color);text-decoration:none;background-color:var(--bs-list-group-bg);border:var(--bs-list-group-border-width) solid var(--bs-list-group-border-color)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:var(--bs-list-group-disabled-color);pointer-events:none;background-color:var(--bs-list-group-disabled-bg)}.list-group-item.active{z-index:2;color:var(--bs-list-group-active-color);background-color:var(--bs-list-group-active-bg);border-color:var(--bs-list-group-active-border-color)}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:calc(var(--bs-list-group-border-width)*-1);border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:calc(var(--bs-list-group-border-width)*-1);border-left-width:var(--bs-list-group-border-width)}@media(min-width: 576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:calc(var(--bs-list-group-border-width)*-1);border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:calc(var(--bs-list-group-border-width)*-1);border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:calc(var(--bs-list-group-border-width)*-1);border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:calc(var(--bs-list-group-border-width)*-1);border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child{border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child{border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{margin-left:calc(var(--bs-list-group-border-width)*-1);border-left-width:var(--bs-list-group-border-width)}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 var(--bs-list-group-border-width)}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#084298;background-color:#cfe2ff}.list-group-item-primary.list-group-item-action:hover,.list-group-item-primary.list-group-item-action:focus{color:#084298;background-color:#bacbe6}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#084298;border-color:#084298}.list-group-item-secondary{color:#41464b;background-color:#e2e3e5}.list-group-item-secondary.list-group-item-action:hover,.list-group-item-secondary.list-group-item-action:focus{color:#41464b;background-color:#cbccce}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#41464b;border-color:#41464b}.list-group-item-success{color:#0f5132;background-color:#d1e7dd}.list-group-item-success.list-group-item-action:hover,.list-group-item-success.list-group-item-action:focus{color:#0f5132;background-color:#bcd0c7}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#0f5132;border-color:#0f5132}.list-group-item-info{color:#055160;background-color:#cff4fc}.list-group-item-info.list-group-item-action:hover,.list-group-item-info.list-group-item-action:focus{color:#055160;background-color:#badce3}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#055160;border-color:#055160}.list-group-item-warning{color:#664d03;background-color:#fff3cd}.list-group-item-warning.list-group-item-action:hover,.list-group-item-warning.list-group-item-action:focus{color:#664d03;background-color:#e6dbb9}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#664d03;border-color:#664d03}.list-group-item-danger{color:#842029;background-color:#f8d7da}.list-group-item-danger.list-group-item-action:hover,.list-group-item-danger.list-group-item-action:focus{color:#842029;background-color:#dfc2c4}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#842029;border-color:#842029}.list-group-item-light{color:#636464;background-color:#fefefe}.list-group-item-light.list-group-item-action:hover,.list-group-item-light.list-group-item-action:focus{color:#636464;background-color:#e5e5e5}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#636464;border-color:#636464}.list-group-item-dark{color:#141619;background-color:#d3d3d4}.list-group-item-dark.list-group-item-action:hover,.list-group-item-dark.list-group-item-action:focus{color:#141619;background-color:#bebebf}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#141619;border-color:#141619}.btn-close{box-sizing:content-box;width:1em;height:1em;padding:.25em .25em;color:#000;background:rgba(0,0,0,0) url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;border:0;border-radius:.375rem;opacity:.5}.btn-close:hover{color:#000;text-decoration:none;opacity:.75}.btn-close:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);opacity:1}.btn-close:disabled,.btn-close.disabled{pointer-events:none;user-select:none;opacity:.25}.btn-close-white{filter:invert(1) grayscale(100%) brightness(200%)}.toast{--bs-toast-padding-x: 0.75rem;--bs-toast-padding-y: 0.5rem;--bs-toast-spacing: 1.5rem;--bs-toast-max-width: 350px;--bs-toast-font-size:0.875rem;--bs-toast-color: ;--bs-toast-bg: rgba(255, 255, 255, 0.85);--bs-toast-border-width: 1px;--bs-toast-border-color: var(--bs-border-color-translucent);--bs-toast-border-radius: 0.375rem;--bs-toast-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-toast-header-color: #6c757d;--bs-toast-header-bg: rgba(255, 255, 255, 0.85);--bs-toast-header-border-color: rgba(0, 0, 0, 0.05);width:var(--bs-toast-max-width);max-width:100%;font-size:var(--bs-toast-font-size);color:var(--bs-toast-color);pointer-events:auto;background-color:var(--bs-toast-bg);background-clip:padding-box;border:var(--bs-toast-border-width) solid var(--bs-toast-border-color);box-shadow:var(--bs-toast-box-shadow);border-radius:var(--bs-toast-border-radius)}.toast.showing{opacity:0}.toast:not(.show){display:none}.toast-container{position:absolute;z-index:1090;width:max-content;max-width:100%;pointer-events:none}.toast-container>:not(:last-child){margin-bottom:var(--bs-toast-spacing)}.toast-header{display:flex;align-items:center;padding:var(--bs-toast-padding-y) var(--bs-toast-padding-x);color:var(--bs-toast-header-color);background-color:var(--bs-toast-header-bg);background-clip:padding-box;border-bottom:var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);border-top-left-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));border-top-right-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width))}.toast-header .btn-close{margin-right:calc(var(--bs-toast-padding-x)*-0.5);margin-left:var(--bs-toast-padding-x)}.toast-body{padding:var(--bs-toast-padding-x);word-wrap:break-word}.modal{--bs-modal-zindex: 1055;--bs-modal-width: 500px;--bs-modal-padding: 1rem;--bs-modal-margin: 0.5rem;--bs-modal-color: ;--bs-modal-bg: #fff;--bs-modal-border-color: var(--bs-border-color-translucent);--bs-modal-border-width: 1px;--bs-modal-border-radius: 0.5rem;--bs-modal-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);--bs-modal-inner-border-radius: calc(0.5rem - 1px);--bs-modal-header-padding-x: 1rem;--bs-modal-header-padding-y: 1rem;--bs-modal-header-padding: 1rem 1rem;--bs-modal-header-border-color: var(--bs-border-color);--bs-modal-header-border-width: 1px;--bs-modal-title-line-height: 1.5;--bs-modal-footer-gap: 0.5rem;--bs-modal-footer-bg: ;--bs-modal-footer-border-color: var(--bs-border-color);--bs-modal-footer-border-width: 1px;position:fixed;top:0;left:0;z-index:var(--bs-modal-zindex);display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}.modal-dialog{position:relative;width:auto;margin:var(--bs-modal-margin);pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translate(0, -50px)}@media(prefers-reduced-motion: reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - var(--bs-modal-margin)*2)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - var(--bs-modal-margin)*2)}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;color:var(--bs-modal-color);pointer-events:auto;background-color:var(--bs-modal-bg);background-clip:padding-box;border:var(--bs-modal-border-width) solid var(--bs-modal-border-color);border-radius:var(--bs-modal-border-radius);outline:0}.modal-backdrop{--bs-backdrop-zindex: 1050;--bs-backdrop-bg: #000;--bs-backdrop-opacity: 0.5;position:fixed;top:0;left:0;z-index:var(--bs-backdrop-zindex);width:100vw;height:100vh;background-color:var(--bs-backdrop-bg)}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:var(--bs-backdrop-opacity)}.modal-header{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:var(--bs-modal-header-padding);border-bottom:var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);border-top-left-radius:var(--bs-modal-inner-border-radius);border-top-right-radius:var(--bs-modal-inner-border-radius)}.modal-header .btn-close{padding:calc(var(--bs-modal-header-padding-y)*.5) calc(var(--bs-modal-header-padding-x)*.5);margin:calc(var(--bs-modal-header-padding-y)*-0.5) calc(var(--bs-modal-header-padding-x)*-0.5) calc(var(--bs-modal-header-padding-y)*-0.5) auto}.modal-title{margin-bottom:0;line-height:var(--bs-modal-title-line-height)}.modal-body{position:relative;flex:1 1 auto;padding:var(--bs-modal-padding)}.modal-footer{display:flex;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap)*.5);background-color:var(--bs-modal-footer-bg);border-top:var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);border-bottom-right-radius:var(--bs-modal-inner-border-radius);border-bottom-left-radius:var(--bs-modal-inner-border-radius)}.modal-footer>*{margin:calc(var(--bs-modal-footer-gap)*.5)}@media(min-width: 576px){.modal{--bs-modal-margin: 1.75rem;--bs-modal-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15)}.modal-dialog{max-width:var(--bs-modal-width);margin-right:auto;margin-left:auto}.modal-sm{--bs-modal-width: 300px}}@media(min-width: 992px){.modal-lg,.modal-xl{--bs-modal-width: 800px}}@media(min-width: 1200px){.modal-xl{--bs-modal-width: 1140px}}.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen .modal-header,.modal-fullscreen .modal-footer{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}@media(max-width: 575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-sm-down .modal-header,.modal-fullscreen-sm-down .modal-footer{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}}@media(max-width: 767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-md-down .modal-header,.modal-fullscreen-md-down .modal-footer{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}}@media(max-width: 991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-lg-down .modal-header,.modal-fullscreen-lg-down .modal-footer{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}}@media(max-width: 1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xl-down .modal-header,.modal-fullscreen-xl-down .modal-footer{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}}@media(max-width: 1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xxl-down .modal-header,.modal-fullscreen-xxl-down .modal-footer{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}}.tooltip{--bs-tooltip-zindex: 1080;--bs-tooltip-max-width: 200px;--bs-tooltip-padding-x: 0.5rem;--bs-tooltip-padding-y: 0.25rem;--bs-tooltip-margin: ;--bs-tooltip-font-size:0.875rem;--bs-tooltip-color: #fff;--bs-tooltip-bg: #000;--bs-tooltip-border-radius: 0.375rem;--bs-tooltip-opacity: 0.9;--bs-tooltip-arrow-width: 0.8rem;--bs-tooltip-arrow-height: 0.4rem;z-index:var(--bs-tooltip-zindex);display:block;padding:var(--bs-tooltip-arrow-height);margin:var(--bs-tooltip-margin);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-tooltip-font-size);word-wrap:break-word;opacity:0}.tooltip.show{opacity:var(--bs-tooltip-opacity)}.tooltip .tooltip-arrow{display:block;width:var(--bs-tooltip-arrow-width);height:var(--bs-tooltip-arrow-height)}.tooltip .tooltip-arrow::before{position:absolute;content:\"\";border-color:rgba(0,0,0,0);border-style:solid}.bs-tooltip-top .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow{bottom:0}.bs-tooltip-top .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before{top:-1px;border-width:var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width)*.5) 0;border-top-color:var(--bs-tooltip-bg)}.bs-tooltip-end .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow{left:0;width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-end .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before{right:-1px;border-width:calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width)*.5) 0;border-right-color:var(--bs-tooltip-bg)}.bs-tooltip-bottom .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow{top:0}.bs-tooltip-bottom .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before{bottom:-1px;border-width:0 calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height);border-bottom-color:var(--bs-tooltip-bg)}.bs-tooltip-start .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow{right:0;width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-start .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before{left:-1px;border-width:calc(var(--bs-tooltip-arrow-width)*.5) 0 calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height);border-left-color:var(--bs-tooltip-bg)}.tooltip-inner{max-width:var(--bs-tooltip-max-width);padding:var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);color:var(--bs-tooltip-color);text-align:center;background-color:var(--bs-tooltip-bg);border-radius:var(--bs-tooltip-border-radius)}.popover{--bs-popover-zindex: 1070;--bs-popover-max-width: 276px;--bs-popover-font-size:0.875rem;--bs-popover-bg: #fff;--bs-popover-border-width: 1px;--bs-popover-border-color: var(--bs-border-color-translucent);--bs-popover-border-radius: 0.5rem;--bs-popover-inner-border-radius: calc(0.5rem - 1px);--bs-popover-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-popover-header-padding-x: 1rem;--bs-popover-header-padding-y: 0.5rem;--bs-popover-header-font-size:1rem;--bs-popover-header-color: var(--bs-heading-color);--bs-popover-header-bg: #f0f0f0;--bs-popover-body-padding-x: 1rem;--bs-popover-body-padding-y: 1rem;--bs-popover-body-color: #212529;--bs-popover-arrow-width: 1rem;--bs-popover-arrow-height: 0.5rem;--bs-popover-arrow-border: var(--bs-popover-border-color);z-index:var(--bs-popover-zindex);display:block;max-width:var(--bs-popover-max-width);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-popover-font-size);word-wrap:break-word;background-color:var(--bs-popover-bg);background-clip:padding-box;border:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-radius:var(--bs-popover-border-radius)}.popover .popover-arrow{display:block;width:var(--bs-popover-arrow-width);height:var(--bs-popover-arrow-height)}.popover .popover-arrow::before,.popover .popover-arrow::after{position:absolute;display:block;content:\"\";border-color:rgba(0,0,0,0);border-style:solid;border-width:0}.bs-popover-top>.popover-arrow,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow{bottom:calc(var(--bs-popover-arrow-height)*-1 - var(--bs-popover-border-width))}.bs-popover-top>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before,.bs-popover-top>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after{border-width:var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width)*.5) 0}.bs-popover-top>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before{bottom:0;border-top-color:var(--bs-popover-arrow-border)}.bs-popover-top>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after{bottom:var(--bs-popover-border-width);border-top-color:var(--bs-popover-bg)}.bs-popover-end>.popover-arrow,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow{left:calc(var(--bs-popover-arrow-height)*-1 - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-end>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before,.bs-popover-end>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after{border-width:calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width)*.5) 0}.bs-popover-end>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before{left:0;border-right-color:var(--bs-popover-arrow-border)}.bs-popover-end>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after{left:var(--bs-popover-border-width);border-right-color:var(--bs-popover-bg)}.bs-popover-bottom>.popover-arrow,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow{top:calc(var(--bs-popover-arrow-height)*-1 - var(--bs-popover-border-width))}.bs-popover-bottom>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before,.bs-popover-bottom>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after{border-width:0 calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height)}.bs-popover-bottom>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before{top:0;border-bottom-color:var(--bs-popover-arrow-border)}.bs-popover-bottom>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after{top:var(--bs-popover-border-width);border-bottom-color:var(--bs-popover-bg)}.bs-popover-bottom .popover-header::before,.bs-popover-auto[data-popper-placement^=bottom] .popover-header::before{position:absolute;top:0;left:50%;display:block;width:var(--bs-popover-arrow-width);margin-left:calc(var(--bs-popover-arrow-width)*-0.5);content:\"\";border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-header-bg)}.bs-popover-start>.popover-arrow,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow{right:calc(var(--bs-popover-arrow-height)*-1 - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-start>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before,.bs-popover-start>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after{border-width:calc(var(--bs-popover-arrow-width)*.5) 0 calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height)}.bs-popover-start>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before{right:0;border-left-color:var(--bs-popover-arrow-border)}.bs-popover-start>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after{right:var(--bs-popover-border-width);border-left-color:var(--bs-popover-bg)}.popover-header{padding:var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);margin-bottom:0;font-size:var(--bs-popover-header-font-size);color:var(--bs-popover-header-color);background-color:var(--bs-popover-header-bg);border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-top-left-radius:var(--bs-popover-inner-border-radius);border-top-right-radius:var(--bs-popover-inner-border-radius)}.popover-header:empty{display:none}.popover-body{padding:var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);color:var(--bs-popover-body-color)}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;backface-visibility:hidden;transition:transform .6s ease-in-out}@media(prefers-reduced-motion: reduce){.carousel-item{transition:none}}.carousel-item.active,.carousel-item-next,.carousel-item-prev{display:block}.carousel-item-next:not(.carousel-item-start),.active.carousel-item-end{transform:translateX(100%)}.carousel-item-prev:not(.carousel-item-end),.active.carousel-item-start{transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item.active,.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end{z-index:1;opacity:1}.carousel-fade .active.carousel-item-start,.carousel-fade .active.carousel-item-end{z-index:0;opacity:0;transition:opacity 0s .6s}@media(prefers-reduced-motion: reduce){.carousel-fade .active.carousel-item-start,.carousel-fade .active.carousel-item-end{transition:none}}.carousel-control-prev,.carousel-control-next{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:none;border:0;opacity:.5;transition:opacity .15s ease}@media(prefers-reduced-motion: reduce){.carousel-control-prev,.carousel-control-next{transition:none}}.carousel-control-prev:hover,.carousel-control-prev:focus,.carousel-control-next:hover,.carousel-control-next:focus{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-prev-icon,.carousel-control-next-icon{display:inline-block;width:2rem;height:2rem;background-repeat:no-repeat;background-position:50%;background-size:100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:2;display:flex;justify-content:center;padding:0;margin-right:15%;margin-bottom:1rem;margin-left:15%;list-style:none}.carousel-indicators [data-bs-target]{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;padding:0;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border:0;border-top:10px solid rgba(0,0,0,0);border-bottom:10px solid rgba(0,0,0,0);opacity:.5;transition:opacity .6s ease}@media(prefers-reduced-motion: reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:1.25rem;left:15%;padding-top:1.25rem;padding-bottom:1.25rem;color:#fff;text-align:center}.carousel-dark .carousel-control-prev-icon,.carousel-dark .carousel-control-next-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}.spinner-grow,.spinner-border{display:inline-block;width:var(--bs-spinner-width);height:var(--bs-spinner-height);vertical-align:var(--bs-spinner-vertical-align);border-radius:50%;animation:var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name)}@keyframes spinner-border{to{transform:rotate(360deg) /* rtl:ignore */}}.spinner-border{--bs-spinner-width: 2rem;--bs-spinner-height: 2rem;--bs-spinner-vertical-align: -0.125em;--bs-spinner-border-width: 0.25em;--bs-spinner-animation-speed: 0.75s;--bs-spinner-animation-name: spinner-border;border:var(--bs-spinner-border-width) solid currentcolor;border-right-color:rgba(0,0,0,0)}.spinner-border-sm{--bs-spinner-width: 1rem;--bs-spinner-height: 1rem;--bs-spinner-border-width: 0.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{--bs-spinner-width: 2rem;--bs-spinner-height: 2rem;--bs-spinner-vertical-align: -0.125em;--bs-spinner-animation-speed: 0.75s;--bs-spinner-animation-name: spinner-grow;background-color:currentcolor;opacity:0}.spinner-grow-sm{--bs-spinner-width: 1rem;--bs-spinner-height: 1rem}@media(prefers-reduced-motion: reduce){.spinner-border,.spinner-grow{--bs-spinner-animation-speed: 1.5s}}.offcanvas,.offcanvas-xxl,.offcanvas-xl,.offcanvas-lg,.offcanvas-md,.offcanvas-sm{--bs-offcanvas-width: 400px;--bs-offcanvas-height: 30vh;--bs-offcanvas-padding-x: 1rem;--bs-offcanvas-padding-y: 1rem;--bs-offcanvas-color: ;--bs-offcanvas-bg: #fff;--bs-offcanvas-border-width: 1px;--bs-offcanvas-border-color: var(--bs-border-color-translucent);--bs-offcanvas-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)}@media(max-width: 575.98px){.offcanvas-sm{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 575.98px)and (prefers-reduced-motion: reduce){.offcanvas-sm{transition:none}}@media(max-width: 575.98px){.offcanvas-sm.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media(max-width: 575.98px){.offcanvas-sm.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media(max-width: 575.98px){.offcanvas-sm.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media(max-width: 575.98px){.offcanvas-sm.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media(max-width: 575.98px){.offcanvas-sm.showing,.offcanvas-sm.show:not(.hiding){transform:none}}@media(max-width: 575.98px){.offcanvas-sm.showing,.offcanvas-sm.hiding,.offcanvas-sm.show{visibility:visible}}@media(min-width: 576px){.offcanvas-sm{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-sm .offcanvas-header{display:none}.offcanvas-sm .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 767.98px){.offcanvas-md{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 767.98px)and (prefers-reduced-motion: reduce){.offcanvas-md{transition:none}}@media(max-width: 767.98px){.offcanvas-md.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media(max-width: 767.98px){.offcanvas-md.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media(max-width: 767.98px){.offcanvas-md.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media(max-width: 767.98px){.offcanvas-md.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media(max-width: 767.98px){.offcanvas-md.showing,.offcanvas-md.show:not(.hiding){transform:none}}@media(max-width: 767.98px){.offcanvas-md.showing,.offcanvas-md.hiding,.offcanvas-md.show{visibility:visible}}@media(min-width: 768px){.offcanvas-md{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-md .offcanvas-header{display:none}.offcanvas-md .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 991.98px){.offcanvas-lg{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 991.98px)and (prefers-reduced-motion: reduce){.offcanvas-lg{transition:none}}@media(max-width: 991.98px){.offcanvas-lg.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media(max-width: 991.98px){.offcanvas-lg.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media(max-width: 991.98px){.offcanvas-lg.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media(max-width: 991.98px){.offcanvas-lg.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media(max-width: 991.98px){.offcanvas-lg.showing,.offcanvas-lg.show:not(.hiding){transform:none}}@media(max-width: 991.98px){.offcanvas-lg.showing,.offcanvas-lg.hiding,.offcanvas-lg.show{visibility:visible}}@media(min-width: 992px){.offcanvas-lg{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-lg .offcanvas-header{display:none}.offcanvas-lg .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 1199.98px){.offcanvas-xl{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 1199.98px)and (prefers-reduced-motion: reduce){.offcanvas-xl{transition:none}}@media(max-width: 1199.98px){.offcanvas-xl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media(max-width: 1199.98px){.offcanvas-xl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media(max-width: 1199.98px){.offcanvas-xl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media(max-width: 1199.98px){.offcanvas-xl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media(max-width: 1199.98px){.offcanvas-xl.showing,.offcanvas-xl.show:not(.hiding){transform:none}}@media(max-width: 1199.98px){.offcanvas-xl.showing,.offcanvas-xl.hiding,.offcanvas-xl.show{visibility:visible}}@media(min-width: 1200px){.offcanvas-xl{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-xl .offcanvas-header{display:none}.offcanvas-xl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 1399.98px){.offcanvas-xxl{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 1399.98px)and (prefers-reduced-motion: reduce){.offcanvas-xxl{transition:none}}@media(max-width: 1399.98px){.offcanvas-xxl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media(max-width: 1399.98px){.offcanvas-xxl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media(max-width: 1399.98px){.offcanvas-xxl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media(max-width: 1399.98px){.offcanvas-xxl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media(max-width: 1399.98px){.offcanvas-xxl.showing,.offcanvas-xxl.show:not(.hiding){transform:none}}@media(max-width: 1399.98px){.offcanvas-xxl.showing,.offcanvas-xxl.hiding,.offcanvas-xxl.show{visibility:visible}}@media(min-width: 1400px){.offcanvas-xxl{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-xxl .offcanvas-header{display:none}.offcanvas-xxl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}.offcanvas{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}@media(prefers-reduced-motion: reduce){.offcanvas{transition:none}}.offcanvas.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas.showing,.offcanvas.show:not(.hiding){transform:none}.offcanvas.showing,.offcanvas.hiding,.offcanvas.show{visibility:visible}.offcanvas-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.offcanvas-backdrop.fade{opacity:0}.offcanvas-backdrop.show{opacity:.5}.offcanvas-header{display:flex;align-items:center;justify-content:space-between;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)}.offcanvas-header .btn-close{padding:calc(var(--bs-offcanvas-padding-y)*.5) calc(var(--bs-offcanvas-padding-x)*.5);margin-top:calc(var(--bs-offcanvas-padding-y)*-0.5);margin-right:calc(var(--bs-offcanvas-padding-x)*-0.5);margin-bottom:calc(var(--bs-offcanvas-padding-y)*-0.5)}.offcanvas-title{margin-bottom:0;line-height:1.5}.offcanvas-body{flex-grow:1;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);overflow-y:auto}.placeholder{display:inline-block;min-height:1em;vertical-align:middle;cursor:wait;background-color:currentcolor;opacity:.5}.placeholder.btn::before{display:inline-block;content:\"\"}.placeholder-xs{min-height:.6em}.placeholder-sm{min-height:.8em}.placeholder-lg{min-height:1.2em}.placeholder-glow .placeholder{animation:placeholder-glow 2s ease-in-out infinite}@keyframes placeholder-glow{50%{opacity:.2}}.placeholder-wave{mask-image:linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);mask-size:200% 100%;animation:placeholder-wave 2s linear infinite}@keyframes placeholder-wave{100%{mask-position:-200% 0%}}.clearfix::after{display:block;clear:both;content:\"\"}.text-bg-primary{color:#fff !important;background-color:RGBA(13, 110, 253, var(--bs-bg-opacity, 1)) !important}.text-bg-secondary{color:#fff !important;background-color:RGBA(108, 117, 125, var(--bs-bg-opacity, 1)) !important}.text-bg-success{color:#fff !important;background-color:RGBA(25, 135, 84, var(--bs-bg-opacity, 1)) !important}.text-bg-info{color:#000 !important;background-color:RGBA(13, 202, 240, var(--bs-bg-opacity, 1)) !important}.text-bg-warning{color:#000 !important;background-color:RGBA(255, 193, 7, var(--bs-bg-opacity, 1)) !important}.text-bg-danger{color:#fff !important;background-color:RGBA(220, 53, 69, var(--bs-bg-opacity, 1)) !important}.text-bg-light{color:#000 !important;background-color:RGBA(248, 249, 250, var(--bs-bg-opacity, 1)) !important}.text-bg-dark{color:#fff !important;background-color:RGBA(33, 37, 41, var(--bs-bg-opacity, 1)) !important}.link-primary{color:#0d6efd !important}.link-primary:hover,.link-primary:focus{color:#0a58ca !important}.link-secondary{color:#6c757d !important}.link-secondary:hover,.link-secondary:focus{color:#565e64 !important}.link-success{color:#198754 !important}.link-success:hover,.link-success:focus{color:#146c43 !important}.link-info{color:#0dcaf0 !important}.link-info:hover,.link-info:focus{color:#3dd5f3 !important}.link-warning{color:#ffc107 !important}.link-warning:hover,.link-warning:focus{color:#ffcd39 !important}.link-danger{color:#dc3545 !important}.link-danger:hover,.link-danger:focus{color:#b02a37 !important}.link-light{color:#f8f9fa !important}.link-light:hover,.link-light:focus{color:#f9fafb !important}.link-dark{color:#212529 !important}.link-dark:hover,.link-dark:focus{color:#1a1e21 !important}.ratio{position:relative;width:100%}.ratio::before{display:block;padding-top:var(--bs-aspect-ratio);content:\"\"}.ratio>*{position:absolute;top:0;left:0;width:100%;height:100%}.ratio-1x1{--bs-aspect-ratio: 100%}.ratio-4x3{--bs-aspect-ratio: 75%}.ratio-16x9{--bs-aspect-ratio: 56.25%}.ratio-21x9{--bs-aspect-ratio: 42.8571428571%}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.sticky-top{position:sticky;top:0;z-index:1020}.sticky-bottom{position:sticky;bottom:0;z-index:1020}@media(min-width: 576px){.sticky-sm-top{position:sticky;top:0;z-index:1020}.sticky-sm-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 768px){.sticky-md-top{position:sticky;top:0;z-index:1020}.sticky-md-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 992px){.sticky-lg-top{position:sticky;top:0;z-index:1020}.sticky-lg-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 1200px){.sticky-xl-top{position:sticky;top:0;z-index:1020}.sticky-xl-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 1400px){.sticky-xxl-top{position:sticky;top:0;z-index:1020}.sticky-xxl-bottom{position:sticky;bottom:0;z-index:1020}}.hstack{display:flex;flex-direction:row;align-items:center;align-self:stretch}.vstack{display:flex;flex:1 1 auto;flex-direction:column;align-self:stretch}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border:0 !important}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:\"\"}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vr{display:inline-block;align-self:stretch;width:1px;min-height:1em;background-color:currentcolor;opacity:.25}.align-baseline{vertical-align:baseline !important}.align-top{vertical-align:top !important}.align-middle{vertical-align:middle !important}.align-bottom{vertical-align:bottom !important}.align-text-bottom{vertical-align:text-bottom !important}.align-text-top{vertical-align:text-top !important}.float-start{float:left !important}.float-end{float:right !important}.float-none{float:none !important}.opacity-0{opacity:0 !important}.opacity-25{opacity:.25 !important}.opacity-50{opacity:.5 !important}.opacity-75{opacity:.75 !important}.opacity-100{opacity:1 !important}.overflow-auto{overflow:auto !important}.overflow-hidden{overflow:hidden !important}.overflow-visible{overflow:visible !important}.overflow-scroll{overflow:scroll !important}.d-inline{display:inline !important}.d-inline-block{display:inline-block !important}.d-block{display:block !important}.d-grid{display:grid !important}.d-table{display:table !important}.d-table-row{display:table-row !important}.d-table-cell{display:table-cell !important}.d-flex{display:flex !important}.d-inline-flex{display:inline-flex !important}.d-none{display:none !important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15) !important}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075) !important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175) !important}.shadow-none{box-shadow:none !important}.position-static{position:static !important}.position-relative{position:relative !important}.position-absolute{position:absolute !important}.position-fixed{position:fixed !important}.position-sticky{position:sticky !important}.top-0{top:0 !important}.top-50{top:50% !important}.top-100{top:100% !important}.bottom-0{bottom:0 !important}.bottom-50{bottom:50% !important}.bottom-100{bottom:100% !important}.start-0{left:0 !important}.start-50{left:50% !important}.start-100{left:100% !important}.end-0{right:0 !important}.end-50{right:50% !important}.end-100{right:100% !important}.translate-middle{transform:translate(-50%, -50%) !important}.translate-middle-x{transform:translateX(-50%) !important}.translate-middle-y{transform:translateY(-50%) !important}.border{border:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-0{border:0 !important}.border-top{border-top:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-top-0{border-top:0 !important}.border-end{border-right:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-end-0{border-right:0 !important}.border-bottom{border-bottom:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-bottom-0{border-bottom:0 !important}.border-start{border-left:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-start-0{border-left:0 !important}.border-primary{--bs-border-opacity: 1;border-color:rgba(var(--bs-primary-rgb), var(--bs-border-opacity)) !important}.border-secondary{--bs-border-opacity: 1;border-color:rgba(var(--bs-secondary-rgb), var(--bs-border-opacity)) !important}.border-success{--bs-border-opacity: 1;border-color:rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important}.border-info{--bs-border-opacity: 1;border-color:rgba(var(--bs-info-rgb), var(--bs-border-opacity)) !important}.border-warning{--bs-border-opacity: 1;border-color:rgba(var(--bs-warning-rgb), var(--bs-border-opacity)) !important}.border-danger{--bs-border-opacity: 1;border-color:rgba(var(--bs-danger-rgb), var(--bs-border-opacity)) !important}.border-light{--bs-border-opacity: 1;border-color:rgba(var(--bs-light-rgb), var(--bs-border-opacity)) !important}.border-dark{--bs-border-opacity: 1;border-color:rgba(var(--bs-dark-rgb), var(--bs-border-opacity)) !important}.border-white{--bs-border-opacity: 1;border-color:rgba(var(--bs-white-rgb), var(--bs-border-opacity)) !important}.border-1{--bs-border-width: 1px}.border-2{--bs-border-width: 2px}.border-3{--bs-border-width: 3px}.border-4{--bs-border-width: 4px}.border-5{--bs-border-width: 5px}.border-opacity-10{--bs-border-opacity: 0.1}.border-opacity-25{--bs-border-opacity: 0.25}.border-opacity-50{--bs-border-opacity: 0.5}.border-opacity-75{--bs-border-opacity: 0.75}.border-opacity-100{--bs-border-opacity: 1}.w-25{width:25% !important}.w-50{width:50% !important}.w-75{width:75% !important}.w-100{width:100% !important}.w-auto{width:auto !important}.mw-100{max-width:100% !important}.vw-100{width:100vw !important}.min-vw-100{min-width:100vw !important}.h-25{height:25% !important}.h-50{height:50% !important}.h-75{height:75% !important}.h-100{height:100% !important}.h-auto{height:auto !important}.mh-100{max-height:100% !important}.vh-100{height:100vh !important}.min-vh-100{min-height:100vh !important}.flex-fill{flex:1 1 auto !important}.flex-row{flex-direction:row !important}.flex-column{flex-direction:column !important}.flex-row-reverse{flex-direction:row-reverse !important}.flex-column-reverse{flex-direction:column-reverse !important}.flex-grow-0{flex-grow:0 !important}.flex-grow-1{flex-grow:1 !important}.flex-shrink-0{flex-shrink:0 !important}.flex-shrink-1{flex-shrink:1 !important}.flex-wrap{flex-wrap:wrap !important}.flex-nowrap{flex-wrap:nowrap !important}.flex-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-start{justify-content:flex-start !important}.justify-content-end{justify-content:flex-end !important}.justify-content-center{justify-content:center !important}.justify-content-between{justify-content:space-between !important}.justify-content-around{justify-content:space-around !important}.justify-content-evenly{justify-content:space-evenly !important}.align-items-start{align-items:flex-start !important}.align-items-end{align-items:flex-end !important}.align-items-center{align-items:center !important}.align-items-baseline{align-items:baseline !important}.align-items-stretch{align-items:stretch !important}.align-content-start{align-content:flex-start !important}.align-content-end{align-content:flex-end !important}.align-content-center{align-content:center !important}.align-content-between{align-content:space-between !important}.align-content-around{align-content:space-around !important}.align-content-stretch{align-content:stretch !important}.align-self-auto{align-self:auto !important}.align-self-start{align-self:flex-start !important}.align-self-end{align-self:flex-end !important}.align-self-center{align-self:center !important}.align-self-baseline{align-self:baseline !important}.align-self-stretch{align-self:stretch !important}.order-first{order:-1 !important}.order-0{order:0 !important}.order-1{order:1 !important}.order-2{order:2 !important}.order-3{order:3 !important}.order-4{order:4 !important}.order-5{order:5 !important}.order-last{order:6 !important}.m-0{margin:0 !important}.m-1{margin:.25rem !important}.m-2{margin:.5rem !important}.m-3{margin:1rem !important}.m-4{margin:1.5rem !important}.m-5{margin:3rem !important}.m-auto{margin:auto !important}.mx-0{margin-right:0 !important;margin-left:0 !important}.mx-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-3{margin-right:1rem !important;margin-left:1rem !important}.mx-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-5{margin-right:3rem !important;margin-left:3rem !important}.mx-auto{margin-right:auto !important;margin-left:auto !important}.my-0{margin-top:0 !important;margin-bottom:0 !important}.my-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-0{margin-top:0 !important}.mt-1{margin-top:.25rem !important}.mt-2{margin-top:.5rem !important}.mt-3{margin-top:1rem !important}.mt-4{margin-top:1.5rem !important}.mt-5{margin-top:3rem !important}.mt-auto{margin-top:auto !important}.me-0{margin-right:0 !important}.me-1{margin-right:.25rem !important}.me-2{margin-right:.5rem !important}.me-3{margin-right:1rem !important}.me-4{margin-right:1.5rem !important}.me-5{margin-right:3rem !important}.me-auto{margin-right:auto !important}.mb-0{margin-bottom:0 !important}.mb-1{margin-bottom:.25rem !important}.mb-2{margin-bottom:.5rem !important}.mb-3{margin-bottom:1rem !important}.mb-4{margin-bottom:1.5rem !important}.mb-5{margin-bottom:3rem !important}.mb-auto{margin-bottom:auto !important}.ms-0{margin-left:0 !important}.ms-1{margin-left:.25rem !important}.ms-2{margin-left:.5rem !important}.ms-3{margin-left:1rem !important}.ms-4{margin-left:1.5rem !important}.ms-5{margin-left:3rem !important}.ms-auto{margin-left:auto !important}.p-0{padding:0 !important}.p-1{padding:.25rem !important}.p-2{padding:.5rem !important}.p-3{padding:1rem !important}.p-4{padding:1.5rem !important}.p-5{padding:3rem !important}.px-0{padding-right:0 !important;padding-left:0 !important}.px-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-3{padding-right:1rem !important;padding-left:1rem !important}.px-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-5{padding-right:3rem !important;padding-left:3rem !important}.py-0{padding-top:0 !important;padding-bottom:0 !important}.py-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-0{padding-top:0 !important}.pt-1{padding-top:.25rem !important}.pt-2{padding-top:.5rem !important}.pt-3{padding-top:1rem !important}.pt-4{padding-top:1.5rem !important}.pt-5{padding-top:3rem !important}.pe-0{padding-right:0 !important}.pe-1{padding-right:.25rem !important}.pe-2{padding-right:.5rem !important}.pe-3{padding-right:1rem !important}.pe-4{padding-right:1.5rem !important}.pe-5{padding-right:3rem !important}.pb-0{padding-bottom:0 !important}.pb-1{padding-bottom:.25rem !important}.pb-2{padding-bottom:.5rem !important}.pb-3{padding-bottom:1rem !important}.pb-4{padding-bottom:1.5rem !important}.pb-5{padding-bottom:3rem !important}.ps-0{padding-left:0 !important}.ps-1{padding-left:.25rem !important}.ps-2{padding-left:.5rem !important}.ps-3{padding-left:1rem !important}.ps-4{padding-left:1.5rem !important}.ps-5{padding-left:3rem !important}.gap-0{gap:0 !important}.gap-1{gap:.25rem !important}.gap-2{gap:.5rem !important}.gap-3{gap:1rem !important}.gap-4{gap:1.5rem !important}.gap-5{gap:3rem !important}.font-monospace{font-family:var(--bs-font-monospace) !important}.fs-1{font-size:calc(1.375rem + 1.5vw) !important}.fs-2{font-size:calc(1.325rem + 0.9vw) !important}.fs-3{font-size:calc(1.3rem + 0.6vw) !important}.fs-4{font-size:calc(1.275rem + 0.3vw) !important}.fs-5{font-size:1.25rem !important}.fs-6{font-size:1rem !important}.fst-italic{font-style:italic !important}.fst-normal{font-style:normal !important}.fw-light{font-weight:300 !important}.fw-lighter{font-weight:lighter !important}.fw-normal{font-weight:400 !important}.fw-bold{font-weight:700 !important}.fw-semibold{font-weight:600 !important}.fw-bolder{font-weight:bolder !important}.lh-1{line-height:1 !important}.lh-sm{line-height:1.25 !important}.lh-base{line-height:1.5 !important}.lh-lg{line-height:2 !important}.text-start{text-align:left !important}.text-end{text-align:right !important}.text-center{text-align:center !important}.text-decoration-none{text-decoration:none !important}.text-decoration-underline{text-decoration:underline !important}.text-decoration-line-through{text-decoration:line-through !important}.text-lowercase{text-transform:lowercase !important}.text-uppercase{text-transform:uppercase !important}.text-capitalize{text-transform:capitalize !important}.text-wrap{white-space:normal !important}.text-nowrap{white-space:nowrap !important}.text-break{word-wrap:break-word !important;word-break:break-word !important}.text-primary{--bs-text-opacity: 1;color:rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important}.text-secondary{--bs-text-opacity: 1;color:rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important}.text-success{--bs-text-opacity: 1;color:rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important}.text-info{--bs-text-opacity: 1;color:rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important}.text-warning{--bs-text-opacity: 1;color:rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important}.text-danger{--bs-text-opacity: 1;color:rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important}.text-light{--bs-text-opacity: 1;color:rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important}.text-dark{--bs-text-opacity: 1;color:rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important}.text-black{--bs-text-opacity: 1;color:rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important}.text-white{--bs-text-opacity: 1;color:rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important}.text-body{--bs-text-opacity: 1;color:rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important}.text-muted{--bs-text-opacity: 1;color:#6c757d !important}.text-black-50{--bs-text-opacity: 1;color:rgba(0,0,0,.5) !important}.text-white-50{--bs-text-opacity: 1;color:rgba(255,255,255,.5) !important}.text-reset{--bs-text-opacity: 1;color:inherit !important}.text-opacity-25{--bs-text-opacity: 0.25}.text-opacity-50{--bs-text-opacity: 0.5}.text-opacity-75{--bs-text-opacity: 0.75}.text-opacity-100{--bs-text-opacity: 1}.bg-primary{--bs-bg-opacity: 1;background-color:rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important}.bg-secondary{--bs-bg-opacity: 1;background-color:rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important}.bg-success{--bs-bg-opacity: 1;background-color:rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important}.bg-info{--bs-bg-opacity: 1;background-color:rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important}.bg-warning{--bs-bg-opacity: 1;background-color:rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important}.bg-danger{--bs-bg-opacity: 1;background-color:rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important}.bg-light{--bs-bg-opacity: 1;background-color:rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important}.bg-dark{--bs-bg-opacity: 1;background-color:rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important}.bg-black{--bs-bg-opacity: 1;background-color:rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important}.bg-white{--bs-bg-opacity: 1;background-color:rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important}.bg-body{--bs-bg-opacity: 1;background-color:rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important}.bg-transparent{--bs-bg-opacity: 1;background-color:rgba(0,0,0,0) !important}.bg-opacity-10{--bs-bg-opacity: 0.1}.bg-opacity-25{--bs-bg-opacity: 0.25}.bg-opacity-50{--bs-bg-opacity: 0.5}.bg-opacity-75{--bs-bg-opacity: 0.75}.bg-opacity-100{--bs-bg-opacity: 1}.bg-gradient{background-image:var(--bs-gradient) !important}.user-select-all{user-select:all !important}.user-select-auto{user-select:auto !important}.user-select-none{user-select:none !important}.pe-none{pointer-events:none !important}.pe-auto{pointer-events:auto !important}.rounded{border-radius:var(--bs-border-radius) !important}.rounded-0{border-radius:0 !important}.rounded-1{border-radius:var(--bs-border-radius-sm) !important}.rounded-2{border-radius:var(--bs-border-radius) !important}.rounded-3{border-radius:var(--bs-border-radius-lg) !important}.rounded-4{border-radius:var(--bs-border-radius-xl) !important}.rounded-5{border-radius:var(--bs-border-radius-2xl) !important}.rounded-circle{border-radius:50% !important}.rounded-pill{border-radius:var(--bs-border-radius-pill) !important}.rounded-top{border-top-left-radius:var(--bs-border-radius) !important;border-top-right-radius:var(--bs-border-radius) !important}.rounded-end{border-top-right-radius:var(--bs-border-radius) !important;border-bottom-right-radius:var(--bs-border-radius) !important}.rounded-bottom{border-bottom-right-radius:var(--bs-border-radius) !important;border-bottom-left-radius:var(--bs-border-radius) !important}.rounded-start{border-bottom-left-radius:var(--bs-border-radius) !important;border-top-left-radius:var(--bs-border-radius) !important}.visible{visibility:visible !important}.invisible{visibility:hidden !important}@media(min-width: 576px){.float-sm-start{float:left !important}.float-sm-end{float:right !important}.float-sm-none{float:none !important}.d-sm-inline{display:inline !important}.d-sm-inline-block{display:inline-block !important}.d-sm-block{display:block !important}.d-sm-grid{display:grid !important}.d-sm-table{display:table !important}.d-sm-table-row{display:table-row !important}.d-sm-table-cell{display:table-cell !important}.d-sm-flex{display:flex !important}.d-sm-inline-flex{display:inline-flex !important}.d-sm-none{display:none !important}.flex-sm-fill{flex:1 1 auto !important}.flex-sm-row{flex-direction:row !important}.flex-sm-column{flex-direction:column !important}.flex-sm-row-reverse{flex-direction:row-reverse !important}.flex-sm-column-reverse{flex-direction:column-reverse !important}.flex-sm-grow-0{flex-grow:0 !important}.flex-sm-grow-1{flex-grow:1 !important}.flex-sm-shrink-0{flex-shrink:0 !important}.flex-sm-shrink-1{flex-shrink:1 !important}.flex-sm-wrap{flex-wrap:wrap !important}.flex-sm-nowrap{flex-wrap:nowrap !important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-sm-start{justify-content:flex-start !important}.justify-content-sm-end{justify-content:flex-end !important}.justify-content-sm-center{justify-content:center !important}.justify-content-sm-between{justify-content:space-between !important}.justify-content-sm-around{justify-content:space-around !important}.justify-content-sm-evenly{justify-content:space-evenly !important}.align-items-sm-start{align-items:flex-start !important}.align-items-sm-end{align-items:flex-end !important}.align-items-sm-center{align-items:center !important}.align-items-sm-baseline{align-items:baseline !important}.align-items-sm-stretch{align-items:stretch !important}.align-content-sm-start{align-content:flex-start !important}.align-content-sm-end{align-content:flex-end !important}.align-content-sm-center{align-content:center !important}.align-content-sm-between{align-content:space-between !important}.align-content-sm-around{align-content:space-around !important}.align-content-sm-stretch{align-content:stretch !important}.align-self-sm-auto{align-self:auto !important}.align-self-sm-start{align-self:flex-start !important}.align-self-sm-end{align-self:flex-end !important}.align-self-sm-center{align-self:center !important}.align-self-sm-baseline{align-self:baseline !important}.align-self-sm-stretch{align-self:stretch !important}.order-sm-first{order:-1 !important}.order-sm-0{order:0 !important}.order-sm-1{order:1 !important}.order-sm-2{order:2 !important}.order-sm-3{order:3 !important}.order-sm-4{order:4 !important}.order-sm-5{order:5 !important}.order-sm-last{order:6 !important}.m-sm-0{margin:0 !important}.m-sm-1{margin:.25rem !important}.m-sm-2{margin:.5rem !important}.m-sm-3{margin:1rem !important}.m-sm-4{margin:1.5rem !important}.m-sm-5{margin:3rem !important}.m-sm-auto{margin:auto !important}.mx-sm-0{margin-right:0 !important;margin-left:0 !important}.mx-sm-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-sm-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-sm-3{margin-right:1rem !important;margin-left:1rem !important}.mx-sm-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-sm-5{margin-right:3rem !important;margin-left:3rem !important}.mx-sm-auto{margin-right:auto !important;margin-left:auto !important}.my-sm-0{margin-top:0 !important;margin-bottom:0 !important}.my-sm-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-sm-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-sm-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-sm-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-sm-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-sm-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-sm-0{margin-top:0 !important}.mt-sm-1{margin-top:.25rem !important}.mt-sm-2{margin-top:.5rem !important}.mt-sm-3{margin-top:1rem !important}.mt-sm-4{margin-top:1.5rem !important}.mt-sm-5{margin-top:3rem !important}.mt-sm-auto{margin-top:auto !important}.me-sm-0{margin-right:0 !important}.me-sm-1{margin-right:.25rem !important}.me-sm-2{margin-right:.5rem !important}.me-sm-3{margin-right:1rem !important}.me-sm-4{margin-right:1.5rem !important}.me-sm-5{margin-right:3rem !important}.me-sm-auto{margin-right:auto !important}.mb-sm-0{margin-bottom:0 !important}.mb-sm-1{margin-bottom:.25rem !important}.mb-sm-2{margin-bottom:.5rem !important}.mb-sm-3{margin-bottom:1rem !important}.mb-sm-4{margin-bottom:1.5rem !important}.mb-sm-5{margin-bottom:3rem !important}.mb-sm-auto{margin-bottom:auto !important}.ms-sm-0{margin-left:0 !important}.ms-sm-1{margin-left:.25rem !important}.ms-sm-2{margin-left:.5rem !important}.ms-sm-3{margin-left:1rem !important}.ms-sm-4{margin-left:1.5rem !important}.ms-sm-5{margin-left:3rem !important}.ms-sm-auto{margin-left:auto !important}.p-sm-0{padding:0 !important}.p-sm-1{padding:.25rem !important}.p-sm-2{padding:.5rem !important}.p-sm-3{padding:1rem !important}.p-sm-4{padding:1.5rem !important}.p-sm-5{padding:3rem !important}.px-sm-0{padding-right:0 !important;padding-left:0 !important}.px-sm-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-sm-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-sm-3{padding-right:1rem !important;padding-left:1rem !important}.px-sm-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-sm-5{padding-right:3rem !important;padding-left:3rem !important}.py-sm-0{padding-top:0 !important;padding-bottom:0 !important}.py-sm-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-sm-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-sm-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-sm-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-sm-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-sm-0{padding-top:0 !important}.pt-sm-1{padding-top:.25rem !important}.pt-sm-2{padding-top:.5rem !important}.pt-sm-3{padding-top:1rem !important}.pt-sm-4{padding-top:1.5rem !important}.pt-sm-5{padding-top:3rem !important}.pe-sm-0{padding-right:0 !important}.pe-sm-1{padding-right:.25rem !important}.pe-sm-2{padding-right:.5rem !important}.pe-sm-3{padding-right:1rem !important}.pe-sm-4{padding-right:1.5rem !important}.pe-sm-5{padding-right:3rem !important}.pb-sm-0{padding-bottom:0 !important}.pb-sm-1{padding-bottom:.25rem !important}.pb-sm-2{padding-bottom:.5rem !important}.pb-sm-3{padding-bottom:1rem !important}.pb-sm-4{padding-bottom:1.5rem !important}.pb-sm-5{padding-bottom:3rem !important}.ps-sm-0{padding-left:0 !important}.ps-sm-1{padding-left:.25rem !important}.ps-sm-2{padding-left:.5rem !important}.ps-sm-3{padding-left:1rem !important}.ps-sm-4{padding-left:1.5rem !important}.ps-sm-5{padding-left:3rem !important}.gap-sm-0{gap:0 !important}.gap-sm-1{gap:.25rem !important}.gap-sm-2{gap:.5rem !important}.gap-sm-3{gap:1rem !important}.gap-sm-4{gap:1.5rem !important}.gap-sm-5{gap:3rem !important}.text-sm-start{text-align:left !important}.text-sm-end{text-align:right !important}.text-sm-center{text-align:center !important}}@media(min-width: 768px){.float-md-start{float:left !important}.float-md-end{float:right !important}.float-md-none{float:none !important}.d-md-inline{display:inline !important}.d-md-inline-block{display:inline-block !important}.d-md-block{display:block !important}.d-md-grid{display:grid !important}.d-md-table{display:table !important}.d-md-table-row{display:table-row !important}.d-md-table-cell{display:table-cell !important}.d-md-flex{display:flex !important}.d-md-inline-flex{display:inline-flex !important}.d-md-none{display:none !important}.flex-md-fill{flex:1 1 auto !important}.flex-md-row{flex-direction:row !important}.flex-md-column{flex-direction:column !important}.flex-md-row-reverse{flex-direction:row-reverse !important}.flex-md-column-reverse{flex-direction:column-reverse !important}.flex-md-grow-0{flex-grow:0 !important}.flex-md-grow-1{flex-grow:1 !important}.flex-md-shrink-0{flex-shrink:0 !important}.flex-md-shrink-1{flex-shrink:1 !important}.flex-md-wrap{flex-wrap:wrap !important}.flex-md-nowrap{flex-wrap:nowrap !important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-md-start{justify-content:flex-start !important}.justify-content-md-end{justify-content:flex-end !important}.justify-content-md-center{justify-content:center !important}.justify-content-md-between{justify-content:space-between !important}.justify-content-md-around{justify-content:space-around !important}.justify-content-md-evenly{justify-content:space-evenly !important}.align-items-md-start{align-items:flex-start !important}.align-items-md-end{align-items:flex-end !important}.align-items-md-center{align-items:center !important}.align-items-md-baseline{align-items:baseline !important}.align-items-md-stretch{align-items:stretch !important}.align-content-md-start{align-content:flex-start !important}.align-content-md-end{align-content:flex-end !important}.align-content-md-center{align-content:center !important}.align-content-md-between{align-content:space-between !important}.align-content-md-around{align-content:space-around !important}.align-content-md-stretch{align-content:stretch !important}.align-self-md-auto{align-self:auto !important}.align-self-md-start{align-self:flex-start !important}.align-self-md-end{align-self:flex-end !important}.align-self-md-center{align-self:center !important}.align-self-md-baseline{align-self:baseline !important}.align-self-md-stretch{align-self:stretch !important}.order-md-first{order:-1 !important}.order-md-0{order:0 !important}.order-md-1{order:1 !important}.order-md-2{order:2 !important}.order-md-3{order:3 !important}.order-md-4{order:4 !important}.order-md-5{order:5 !important}.order-md-last{order:6 !important}.m-md-0{margin:0 !important}.m-md-1{margin:.25rem !important}.m-md-2{margin:.5rem !important}.m-md-3{margin:1rem !important}.m-md-4{margin:1.5rem !important}.m-md-5{margin:3rem !important}.m-md-auto{margin:auto !important}.mx-md-0{margin-right:0 !important;margin-left:0 !important}.mx-md-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-md-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-md-3{margin-right:1rem !important;margin-left:1rem !important}.mx-md-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-md-5{margin-right:3rem !important;margin-left:3rem !important}.mx-md-auto{margin-right:auto !important;margin-left:auto !important}.my-md-0{margin-top:0 !important;margin-bottom:0 !important}.my-md-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-md-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-md-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-md-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-md-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-md-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-md-0{margin-top:0 !important}.mt-md-1{margin-top:.25rem !important}.mt-md-2{margin-top:.5rem !important}.mt-md-3{margin-top:1rem !important}.mt-md-4{margin-top:1.5rem !important}.mt-md-5{margin-top:3rem !important}.mt-md-auto{margin-top:auto !important}.me-md-0{margin-right:0 !important}.me-md-1{margin-right:.25rem !important}.me-md-2{margin-right:.5rem !important}.me-md-3{margin-right:1rem !important}.me-md-4{margin-right:1.5rem !important}.me-md-5{margin-right:3rem !important}.me-md-auto{margin-right:auto !important}.mb-md-0{margin-bottom:0 !important}.mb-md-1{margin-bottom:.25rem !important}.mb-md-2{margin-bottom:.5rem !important}.mb-md-3{margin-bottom:1rem !important}.mb-md-4{margin-bottom:1.5rem !important}.mb-md-5{margin-bottom:3rem !important}.mb-md-auto{margin-bottom:auto !important}.ms-md-0{margin-left:0 !important}.ms-md-1{margin-left:.25rem !important}.ms-md-2{margin-left:.5rem !important}.ms-md-3{margin-left:1rem !important}.ms-md-4{margin-left:1.5rem !important}.ms-md-5{margin-left:3rem !important}.ms-md-auto{margin-left:auto !important}.p-md-0{padding:0 !important}.p-md-1{padding:.25rem !important}.p-md-2{padding:.5rem !important}.p-md-3{padding:1rem !important}.p-md-4{padding:1.5rem !important}.p-md-5{padding:3rem !important}.px-md-0{padding-right:0 !important;padding-left:0 !important}.px-md-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-md-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-md-3{padding-right:1rem !important;padding-left:1rem !important}.px-md-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-md-5{padding-right:3rem !important;padding-left:3rem !important}.py-md-0{padding-top:0 !important;padding-bottom:0 !important}.py-md-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-md-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-md-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-md-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-md-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-md-0{padding-top:0 !important}.pt-md-1{padding-top:.25rem !important}.pt-md-2{padding-top:.5rem !important}.pt-md-3{padding-top:1rem !important}.pt-md-4{padding-top:1.5rem !important}.pt-md-5{padding-top:3rem !important}.pe-md-0{padding-right:0 !important}.pe-md-1{padding-right:.25rem !important}.pe-md-2{padding-right:.5rem !important}.pe-md-3{padding-right:1rem !important}.pe-md-4{padding-right:1.5rem !important}.pe-md-5{padding-right:3rem !important}.pb-md-0{padding-bottom:0 !important}.pb-md-1{padding-bottom:.25rem !important}.pb-md-2{padding-bottom:.5rem !important}.pb-md-3{padding-bottom:1rem !important}.pb-md-4{padding-bottom:1.5rem !important}.pb-md-5{padding-bottom:3rem !important}.ps-md-0{padding-left:0 !important}.ps-md-1{padding-left:.25rem !important}.ps-md-2{padding-left:.5rem !important}.ps-md-3{padding-left:1rem !important}.ps-md-4{padding-left:1.5rem !important}.ps-md-5{padding-left:3rem !important}.gap-md-0{gap:0 !important}.gap-md-1{gap:.25rem !important}.gap-md-2{gap:.5rem !important}.gap-md-3{gap:1rem !important}.gap-md-4{gap:1.5rem !important}.gap-md-5{gap:3rem !important}.text-md-start{text-align:left !important}.text-md-end{text-align:right !important}.text-md-center{text-align:center !important}}@media(min-width: 992px){.float-lg-start{float:left !important}.float-lg-end{float:right !important}.float-lg-none{float:none !important}.d-lg-inline{display:inline !important}.d-lg-inline-block{display:inline-block !important}.d-lg-block{display:block !important}.d-lg-grid{display:grid !important}.d-lg-table{display:table !important}.d-lg-table-row{display:table-row !important}.d-lg-table-cell{display:table-cell !important}.d-lg-flex{display:flex !important}.d-lg-inline-flex{display:inline-flex !important}.d-lg-none{display:none !important}.flex-lg-fill{flex:1 1 auto !important}.flex-lg-row{flex-direction:row !important}.flex-lg-column{flex-direction:column !important}.flex-lg-row-reverse{flex-direction:row-reverse !important}.flex-lg-column-reverse{flex-direction:column-reverse !important}.flex-lg-grow-0{flex-grow:0 !important}.flex-lg-grow-1{flex-grow:1 !important}.flex-lg-shrink-0{flex-shrink:0 !important}.flex-lg-shrink-1{flex-shrink:1 !important}.flex-lg-wrap{flex-wrap:wrap !important}.flex-lg-nowrap{flex-wrap:nowrap !important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-lg-start{justify-content:flex-start !important}.justify-content-lg-end{justify-content:flex-end !important}.justify-content-lg-center{justify-content:center !important}.justify-content-lg-between{justify-content:space-between !important}.justify-content-lg-around{justify-content:space-around !important}.justify-content-lg-evenly{justify-content:space-evenly !important}.align-items-lg-start{align-items:flex-start !important}.align-items-lg-end{align-items:flex-end !important}.align-items-lg-center{align-items:center !important}.align-items-lg-baseline{align-items:baseline !important}.align-items-lg-stretch{align-items:stretch !important}.align-content-lg-start{align-content:flex-start !important}.align-content-lg-end{align-content:flex-end !important}.align-content-lg-center{align-content:center !important}.align-content-lg-between{align-content:space-between !important}.align-content-lg-around{align-content:space-around !important}.align-content-lg-stretch{align-content:stretch !important}.align-self-lg-auto{align-self:auto !important}.align-self-lg-start{align-self:flex-start !important}.align-self-lg-end{align-self:flex-end !important}.align-self-lg-center{align-self:center !important}.align-self-lg-baseline{align-self:baseline !important}.align-self-lg-stretch{align-self:stretch !important}.order-lg-first{order:-1 !important}.order-lg-0{order:0 !important}.order-lg-1{order:1 !important}.order-lg-2{order:2 !important}.order-lg-3{order:3 !important}.order-lg-4{order:4 !important}.order-lg-5{order:5 !important}.order-lg-last{order:6 !important}.m-lg-0{margin:0 !important}.m-lg-1{margin:.25rem !important}.m-lg-2{margin:.5rem !important}.m-lg-3{margin:1rem !important}.m-lg-4{margin:1.5rem !important}.m-lg-5{margin:3rem !important}.m-lg-auto{margin:auto !important}.mx-lg-0{margin-right:0 !important;margin-left:0 !important}.mx-lg-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-lg-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-lg-3{margin-right:1rem !important;margin-left:1rem !important}.mx-lg-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-lg-5{margin-right:3rem !important;margin-left:3rem !important}.mx-lg-auto{margin-right:auto !important;margin-left:auto !important}.my-lg-0{margin-top:0 !important;margin-bottom:0 !important}.my-lg-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-lg-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-lg-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-lg-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-lg-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-lg-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-lg-0{margin-top:0 !important}.mt-lg-1{margin-top:.25rem !important}.mt-lg-2{margin-top:.5rem !important}.mt-lg-3{margin-top:1rem !important}.mt-lg-4{margin-top:1.5rem !important}.mt-lg-5{margin-top:3rem !important}.mt-lg-auto{margin-top:auto !important}.me-lg-0{margin-right:0 !important}.me-lg-1{margin-right:.25rem !important}.me-lg-2{margin-right:.5rem !important}.me-lg-3{margin-right:1rem !important}.me-lg-4{margin-right:1.5rem !important}.me-lg-5{margin-right:3rem !important}.me-lg-auto{margin-right:auto !important}.mb-lg-0{margin-bottom:0 !important}.mb-lg-1{margin-bottom:.25rem !important}.mb-lg-2{margin-bottom:.5rem !important}.mb-lg-3{margin-bottom:1rem !important}.mb-lg-4{margin-bottom:1.5rem !important}.mb-lg-5{margin-bottom:3rem !important}.mb-lg-auto{margin-bottom:auto !important}.ms-lg-0{margin-left:0 !important}.ms-lg-1{margin-left:.25rem !important}.ms-lg-2{margin-left:.5rem !important}.ms-lg-3{margin-left:1rem !important}.ms-lg-4{margin-left:1.5rem !important}.ms-lg-5{margin-left:3rem !important}.ms-lg-auto{margin-left:auto !important}.p-lg-0{padding:0 !important}.p-lg-1{padding:.25rem !important}.p-lg-2{padding:.5rem !important}.p-lg-3{padding:1rem !important}.p-lg-4{padding:1.5rem !important}.p-lg-5{padding:3rem !important}.px-lg-0{padding-right:0 !important;padding-left:0 !important}.px-lg-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-lg-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-lg-3{padding-right:1rem !important;padding-left:1rem !important}.px-lg-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-lg-5{padding-right:3rem !important;padding-left:3rem !important}.py-lg-0{padding-top:0 !important;padding-bottom:0 !important}.py-lg-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-lg-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-lg-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-lg-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-lg-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-lg-0{padding-top:0 !important}.pt-lg-1{padding-top:.25rem !important}.pt-lg-2{padding-top:.5rem !important}.pt-lg-3{padding-top:1rem !important}.pt-lg-4{padding-top:1.5rem !important}.pt-lg-5{padding-top:3rem !important}.pe-lg-0{padding-right:0 !important}.pe-lg-1{padding-right:.25rem !important}.pe-lg-2{padding-right:.5rem !important}.pe-lg-3{padding-right:1rem !important}.pe-lg-4{padding-right:1.5rem !important}.pe-lg-5{padding-right:3rem !important}.pb-lg-0{padding-bottom:0 !important}.pb-lg-1{padding-bottom:.25rem !important}.pb-lg-2{padding-bottom:.5rem !important}.pb-lg-3{padding-bottom:1rem !important}.pb-lg-4{padding-bottom:1.5rem !important}.pb-lg-5{padding-bottom:3rem !important}.ps-lg-0{padding-left:0 !important}.ps-lg-1{padding-left:.25rem !important}.ps-lg-2{padding-left:.5rem !important}.ps-lg-3{padding-left:1rem !important}.ps-lg-4{padding-left:1.5rem !important}.ps-lg-5{padding-left:3rem !important}.gap-lg-0{gap:0 !important}.gap-lg-1{gap:.25rem !important}.gap-lg-2{gap:.5rem !important}.gap-lg-3{gap:1rem !important}.gap-lg-4{gap:1.5rem !important}.gap-lg-5{gap:3rem !important}.text-lg-start{text-align:left !important}.text-lg-end{text-align:right !important}.text-lg-center{text-align:center !important}}@media(min-width: 1200px){.float-xl-start{float:left !important}.float-xl-end{float:right !important}.float-xl-none{float:none !important}.d-xl-inline{display:inline !important}.d-xl-inline-block{display:inline-block !important}.d-xl-block{display:block !important}.d-xl-grid{display:grid !important}.d-xl-table{display:table !important}.d-xl-table-row{display:table-row !important}.d-xl-table-cell{display:table-cell !important}.d-xl-flex{display:flex !important}.d-xl-inline-flex{display:inline-flex !important}.d-xl-none{display:none !important}.flex-xl-fill{flex:1 1 auto !important}.flex-xl-row{flex-direction:row !important}.flex-xl-column{flex-direction:column !important}.flex-xl-row-reverse{flex-direction:row-reverse !important}.flex-xl-column-reverse{flex-direction:column-reverse !important}.flex-xl-grow-0{flex-grow:0 !important}.flex-xl-grow-1{flex-grow:1 !important}.flex-xl-shrink-0{flex-shrink:0 !important}.flex-xl-shrink-1{flex-shrink:1 !important}.flex-xl-wrap{flex-wrap:wrap !important}.flex-xl-nowrap{flex-wrap:nowrap !important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-xl-start{justify-content:flex-start !important}.justify-content-xl-end{justify-content:flex-end !important}.justify-content-xl-center{justify-content:center !important}.justify-content-xl-between{justify-content:space-between !important}.justify-content-xl-around{justify-content:space-around !important}.justify-content-xl-evenly{justify-content:space-evenly !important}.align-items-xl-start{align-items:flex-start !important}.align-items-xl-end{align-items:flex-end !important}.align-items-xl-center{align-items:center !important}.align-items-xl-baseline{align-items:baseline !important}.align-items-xl-stretch{align-items:stretch !important}.align-content-xl-start{align-content:flex-start !important}.align-content-xl-end{align-content:flex-end !important}.align-content-xl-center{align-content:center !important}.align-content-xl-between{align-content:space-between !important}.align-content-xl-around{align-content:space-around !important}.align-content-xl-stretch{align-content:stretch !important}.align-self-xl-auto{align-self:auto !important}.align-self-xl-start{align-self:flex-start !important}.align-self-xl-end{align-self:flex-end !important}.align-self-xl-center{align-self:center !important}.align-self-xl-baseline{align-self:baseline !important}.align-self-xl-stretch{align-self:stretch !important}.order-xl-first{order:-1 !important}.order-xl-0{order:0 !important}.order-xl-1{order:1 !important}.order-xl-2{order:2 !important}.order-xl-3{order:3 !important}.order-xl-4{order:4 !important}.order-xl-5{order:5 !important}.order-xl-last{order:6 !important}.m-xl-0{margin:0 !important}.m-xl-1{margin:.25rem !important}.m-xl-2{margin:.5rem !important}.m-xl-3{margin:1rem !important}.m-xl-4{margin:1.5rem !important}.m-xl-5{margin:3rem !important}.m-xl-auto{margin:auto !important}.mx-xl-0{margin-right:0 !important;margin-left:0 !important}.mx-xl-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-xl-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-xl-3{margin-right:1rem !important;margin-left:1rem !important}.mx-xl-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-xl-5{margin-right:3rem !important;margin-left:3rem !important}.mx-xl-auto{margin-right:auto !important;margin-left:auto !important}.my-xl-0{margin-top:0 !important;margin-bottom:0 !important}.my-xl-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-xl-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-xl-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-xl-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-xl-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-xl-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-xl-0{margin-top:0 !important}.mt-xl-1{margin-top:.25rem !important}.mt-xl-2{margin-top:.5rem !important}.mt-xl-3{margin-top:1rem !important}.mt-xl-4{margin-top:1.5rem !important}.mt-xl-5{margin-top:3rem !important}.mt-xl-auto{margin-top:auto !important}.me-xl-0{margin-right:0 !important}.me-xl-1{margin-right:.25rem !important}.me-xl-2{margin-right:.5rem !important}.me-xl-3{margin-right:1rem !important}.me-xl-4{margin-right:1.5rem !important}.me-xl-5{margin-right:3rem !important}.me-xl-auto{margin-right:auto !important}.mb-xl-0{margin-bottom:0 !important}.mb-xl-1{margin-bottom:.25rem !important}.mb-xl-2{margin-bottom:.5rem !important}.mb-xl-3{margin-bottom:1rem !important}.mb-xl-4{margin-bottom:1.5rem !important}.mb-xl-5{margin-bottom:3rem !important}.mb-xl-auto{margin-bottom:auto !important}.ms-xl-0{margin-left:0 !important}.ms-xl-1{margin-left:.25rem !important}.ms-xl-2{margin-left:.5rem !important}.ms-xl-3{margin-left:1rem !important}.ms-xl-4{margin-left:1.5rem !important}.ms-xl-5{margin-left:3rem !important}.ms-xl-auto{margin-left:auto !important}.p-xl-0{padding:0 !important}.p-xl-1{padding:.25rem !important}.p-xl-2{padding:.5rem !important}.p-xl-3{padding:1rem !important}.p-xl-4{padding:1.5rem !important}.p-xl-5{padding:3rem !important}.px-xl-0{padding-right:0 !important;padding-left:0 !important}.px-xl-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-xl-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-xl-3{padding-right:1rem !important;padding-left:1rem !important}.px-xl-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-xl-5{padding-right:3rem !important;padding-left:3rem !important}.py-xl-0{padding-top:0 !important;padding-bottom:0 !important}.py-xl-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-xl-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-xl-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-xl-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-xl-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-xl-0{padding-top:0 !important}.pt-xl-1{padding-top:.25rem !important}.pt-xl-2{padding-top:.5rem !important}.pt-xl-3{padding-top:1rem !important}.pt-xl-4{padding-top:1.5rem !important}.pt-xl-5{padding-top:3rem !important}.pe-xl-0{padding-right:0 !important}.pe-xl-1{padding-right:.25rem !important}.pe-xl-2{padding-right:.5rem !important}.pe-xl-3{padding-right:1rem !important}.pe-xl-4{padding-right:1.5rem !important}.pe-xl-5{padding-right:3rem !important}.pb-xl-0{padding-bottom:0 !important}.pb-xl-1{padding-bottom:.25rem !important}.pb-xl-2{padding-bottom:.5rem !important}.pb-xl-3{padding-bottom:1rem !important}.pb-xl-4{padding-bottom:1.5rem !important}.pb-xl-5{padding-bottom:3rem !important}.ps-xl-0{padding-left:0 !important}.ps-xl-1{padding-left:.25rem !important}.ps-xl-2{padding-left:.5rem !important}.ps-xl-3{padding-left:1rem !important}.ps-xl-4{padding-left:1.5rem !important}.ps-xl-5{padding-left:3rem !important}.gap-xl-0{gap:0 !important}.gap-xl-1{gap:.25rem !important}.gap-xl-2{gap:.5rem !important}.gap-xl-3{gap:1rem !important}.gap-xl-4{gap:1.5rem !important}.gap-xl-5{gap:3rem !important}.text-xl-start{text-align:left !important}.text-xl-end{text-align:right !important}.text-xl-center{text-align:center !important}}@media(min-width: 1400px){.float-xxl-start{float:left !important}.float-xxl-end{float:right !important}.float-xxl-none{float:none !important}.d-xxl-inline{display:inline !important}.d-xxl-inline-block{display:inline-block !important}.d-xxl-block{display:block !important}.d-xxl-grid{display:grid !important}.d-xxl-table{display:table !important}.d-xxl-table-row{display:table-row !important}.d-xxl-table-cell{display:table-cell !important}.d-xxl-flex{display:flex !important}.d-xxl-inline-flex{display:inline-flex !important}.d-xxl-none{display:none !important}.flex-xxl-fill{flex:1 1 auto !important}.flex-xxl-row{flex-direction:row !important}.flex-xxl-column{flex-direction:column !important}.flex-xxl-row-reverse{flex-direction:row-reverse !important}.flex-xxl-column-reverse{flex-direction:column-reverse !important}.flex-xxl-grow-0{flex-grow:0 !important}.flex-xxl-grow-1{flex-grow:1 !important}.flex-xxl-shrink-0{flex-shrink:0 !important}.flex-xxl-shrink-1{flex-shrink:1 !important}.flex-xxl-wrap{flex-wrap:wrap !important}.flex-xxl-nowrap{flex-wrap:nowrap !important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-xxl-start{justify-content:flex-start !important}.justify-content-xxl-end{justify-content:flex-end !important}.justify-content-xxl-center{justify-content:center !important}.justify-content-xxl-between{justify-content:space-between !important}.justify-content-xxl-around{justify-content:space-around !important}.justify-content-xxl-evenly{justify-content:space-evenly !important}.align-items-xxl-start{align-items:flex-start !important}.align-items-xxl-end{align-items:flex-end !important}.align-items-xxl-center{align-items:center !important}.align-items-xxl-baseline{align-items:baseline !important}.align-items-xxl-stretch{align-items:stretch !important}.align-content-xxl-start{align-content:flex-start !important}.align-content-xxl-end{align-content:flex-end !important}.align-content-xxl-center{align-content:center !important}.align-content-xxl-between{align-content:space-between !important}.align-content-xxl-around{align-content:space-around !important}.align-content-xxl-stretch{align-content:stretch !important}.align-self-xxl-auto{align-self:auto !important}.align-self-xxl-start{align-self:flex-start !important}.align-self-xxl-end{align-self:flex-end !important}.align-self-xxl-center{align-self:center !important}.align-self-xxl-baseline{align-self:baseline !important}.align-self-xxl-stretch{align-self:stretch !important}.order-xxl-first{order:-1 !important}.order-xxl-0{order:0 !important}.order-xxl-1{order:1 !important}.order-xxl-2{order:2 !important}.order-xxl-3{order:3 !important}.order-xxl-4{order:4 !important}.order-xxl-5{order:5 !important}.order-xxl-last{order:6 !important}.m-xxl-0{margin:0 !important}.m-xxl-1{margin:.25rem !important}.m-xxl-2{margin:.5rem !important}.m-xxl-3{margin:1rem !important}.m-xxl-4{margin:1.5rem !important}.m-xxl-5{margin:3rem !important}.m-xxl-auto{margin:auto !important}.mx-xxl-0{margin-right:0 !important;margin-left:0 !important}.mx-xxl-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-xxl-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-xxl-3{margin-right:1rem !important;margin-left:1rem !important}.mx-xxl-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-xxl-5{margin-right:3rem !important;margin-left:3rem !important}.mx-xxl-auto{margin-right:auto !important;margin-left:auto !important}.my-xxl-0{margin-top:0 !important;margin-bottom:0 !important}.my-xxl-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-xxl-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-xxl-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-xxl-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-xxl-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-xxl-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-xxl-0{margin-top:0 !important}.mt-xxl-1{margin-top:.25rem !important}.mt-xxl-2{margin-top:.5rem !important}.mt-xxl-3{margin-top:1rem !important}.mt-xxl-4{margin-top:1.5rem !important}.mt-xxl-5{margin-top:3rem !important}.mt-xxl-auto{margin-top:auto !important}.me-xxl-0{margin-right:0 !important}.me-xxl-1{margin-right:.25rem !important}.me-xxl-2{margin-right:.5rem !important}.me-xxl-3{margin-right:1rem !important}.me-xxl-4{margin-right:1.5rem !important}.me-xxl-5{margin-right:3rem !important}.me-xxl-auto{margin-right:auto !important}.mb-xxl-0{margin-bottom:0 !important}.mb-xxl-1{margin-bottom:.25rem !important}.mb-xxl-2{margin-bottom:.5rem !important}.mb-xxl-3{margin-bottom:1rem !important}.mb-xxl-4{margin-bottom:1.5rem !important}.mb-xxl-5{margin-bottom:3rem !important}.mb-xxl-auto{margin-bottom:auto !important}.ms-xxl-0{margin-left:0 !important}.ms-xxl-1{margin-left:.25rem !important}.ms-xxl-2{margin-left:.5rem !important}.ms-xxl-3{margin-left:1rem !important}.ms-xxl-4{margin-left:1.5rem !important}.ms-xxl-5{margin-left:3rem !important}.ms-xxl-auto{margin-left:auto !important}.p-xxl-0{padding:0 !important}.p-xxl-1{padding:.25rem !important}.p-xxl-2{padding:.5rem !important}.p-xxl-3{padding:1rem !important}.p-xxl-4{padding:1.5rem !important}.p-xxl-5{padding:3rem !important}.px-xxl-0{padding-right:0 !important;padding-left:0 !important}.px-xxl-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-xxl-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-xxl-3{padding-right:1rem !important;padding-left:1rem !important}.px-xxl-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-xxl-5{padding-right:3rem !important;padding-left:3rem !important}.py-xxl-0{padding-top:0 !important;padding-bottom:0 !important}.py-xxl-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-xxl-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-xxl-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-xxl-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-xxl-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-xxl-0{padding-top:0 !important}.pt-xxl-1{padding-top:.25rem !important}.pt-xxl-2{padding-top:.5rem !important}.pt-xxl-3{padding-top:1rem !important}.pt-xxl-4{padding-top:1.5rem !important}.pt-xxl-5{padding-top:3rem !important}.pe-xxl-0{padding-right:0 !important}.pe-xxl-1{padding-right:.25rem !important}.pe-xxl-2{padding-right:.5rem !important}.pe-xxl-3{padding-right:1rem !important}.pe-xxl-4{padding-right:1.5rem !important}.pe-xxl-5{padding-right:3rem !important}.pb-xxl-0{padding-bottom:0 !important}.pb-xxl-1{padding-bottom:.25rem !important}.pb-xxl-2{padding-bottom:.5rem !important}.pb-xxl-3{padding-bottom:1rem !important}.pb-xxl-4{padding-bottom:1.5rem !important}.pb-xxl-5{padding-bottom:3rem !important}.ps-xxl-0{padding-left:0 !important}.ps-xxl-1{padding-left:.25rem !important}.ps-xxl-2{padding-left:.5rem !important}.ps-xxl-3{padding-left:1rem !important}.ps-xxl-4{padding-left:1.5rem !important}.ps-xxl-5{padding-left:3rem !important}.gap-xxl-0{gap:0 !important}.gap-xxl-1{gap:.25rem !important}.gap-xxl-2{gap:.5rem !important}.gap-xxl-3{gap:1rem !important}.gap-xxl-4{gap:1.5rem !important}.gap-xxl-5{gap:3rem !important}.text-xxl-start{text-align:left !important}.text-xxl-end{text-align:right !important}.text-xxl-center{text-align:center !important}}@media(min-width: 1200px){.fs-1{font-size:2.5rem !important}.fs-2{font-size:2rem !important}.fs-3{font-size:1.75rem !important}.fs-4{font-size:1.5rem !important}}@media print{.d-print-inline{display:inline !important}.d-print-inline-block{display:inline-block !important}.d-print-block{display:block !important}.d-print-grid{display:grid !important}.d-print-table{display:table !important}.d-print-table-row{display:table-row !important}.d-print-table-cell{display:table-cell !important}.d-print-flex{display:flex !important}.d-print-inline-flex{display:inline-flex !important}.d-print-none{display:none !important}}.button{border-radius:5px}.wrapper{max-width:1280px;padding:0 10px;margin:0 auto;padding-bottom:60px}.navigation:hover{cursor:pointer}.textbook-navigation{display:flex;justify-content:center;flex-wrap:wrap;gap:20px;padding-top:20px}@media(max-width: 767px){.textbook-navigation{flex-direction:column;align-items:center}}.page-item{width:90px;text-align:center}@media(max-width: 767px){.page-item{display:none}}.game__button{display:flex;gap:20px}.game__button-audio,.game__button-sprint{box-sizing:border-box;padding-left:0;padding-right:0;width:120px;background-color:#fff}.items-container{display:flex;flex-direction:row;justify-content:center;flex-wrap:wrap;gap:70px;padding-top:20px}.item{background-position:top center,bottom center;background-size:cover;background-repeat:no-repeat;box-sizing:border-box;border-radius:10px;transition:.5s}.item:hover{transform:scale(1.01)}.item__container{display:flex;flex-direction:column;justify-content:end;gap:5px;color:#000;box-sizing:border-box;padding:10px;background:rgba(255,255,255,.6);width:320px;min-height:675px;border-radius:10px;box-shadow:0 15px 30px rgba(0,0,0,.25),0 15px 15px rgba(0,0,0,.2);transition:.5s}.item__container:hover{transform:scale(1);box-shadow:0 15px 15px rgba(255,255,255,.25),0 15px 15px rgba(255,255,255,.2)}.red{border:3px solid red}.red:hover{box-shadow:0 15px 15px rgba(255,0,0,.25),0 15px 15px rgba(255,0,0,.2)}.green{border:3px solid green}.green:hover{box-shadow:0 15px 15px rgba(0,128,0,.25),0 15px 15px rgba(0,128,0,.2)}.item__audio{width:50px}.item__audio-svg{height:50px;width:50px;display:inline-block}.item__play-audio{width:50px;height:50px;padding:0;transition:.5s}.item__play-audio:hover{transform:scale(1.05)}.item__img{position:absolute;object-fit:cover;max-width:100%;height:auto;opacity:.3}.form-select{width:200px}.pagination{height:22px}.form-select_color-one{color:red}.item__buttons{display:none;flex-wrap:wrap;justify-content:center;gap:5px}.item__button-hard,.item__button-learned{width:280px;padding-left:1rem;padding-right:1rem}", '']); const i = a;
    },
    1528: (t, r, o) => {
'use strict'; o.d(r, { Z:() => i }); let e = o(3645); let a = o.n(e)()((t) => {return t[1]}); a.push([t.id, "/*!\n * Bootstrap  v5.2.0 (https://getbootstrap.com/)\n * Copyright 2011-2022 The Bootstrap Authors\n * Copyright 2011-2022 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)\n */:root{--bs-blue: #0d6efd;--bs-indigo: #6610f2;--bs-purple: #6f42c1;--bs-pink: #d63384;--bs-red: #dc3545;--bs-orange: #fd7e14;--bs-yellow: #ffc107;--bs-green: #198754;--bs-teal: #20c997;--bs-cyan: #0dcaf0;--bs-black: #000;--bs-white: #fff;--bs-gray: #6c757d;--bs-gray-dark: #343a40;--bs-gray-100: #f8f9fa;--bs-gray-200: #e9ecef;--bs-gray-300: #dee2e6;--bs-gray-400: #ced4da;--bs-gray-500: #adb5bd;--bs-gray-600: #6c757d;--bs-gray-700: #495057;--bs-gray-800: #343a40;--bs-gray-900: #212529;--bs-primary: #0d6efd;--bs-secondary: #6c757d;--bs-success: #198754;--bs-info: #0dcaf0;--bs-warning: #ffc107;--bs-danger: #dc3545;--bs-light: #f8f9fa;--bs-dark: #212529;--bs-primary-rgb: 13, 110, 253;--bs-secondary-rgb: 108, 117, 125;--bs-success-rgb: 25, 135, 84;--bs-info-rgb: 13, 202, 240;--bs-warning-rgb: 255, 193, 7;--bs-danger-rgb: 220, 53, 69;--bs-light-rgb: 248, 249, 250;--bs-dark-rgb: 33, 37, 41;--bs-white-rgb: 255, 255, 255;--bs-black-rgb: 0, 0, 0;--bs-body-color-rgb: 33, 37, 41;--bs-body-bg-rgb: 255, 255, 255;--bs-font-sans-serif: system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", \"Noto Sans\", \"Liberation Sans\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));--bs-body-font-family: var(--bs-font-sans-serif);--bs-body-font-size:1rem;--bs-body-font-weight: 400;--bs-body-line-height: 1.5;--bs-body-color: #212529;--bs-body-bg: #fff;--bs-border-width: 1px;--bs-border-style: solid;--bs-border-color: #dee2e6;--bs-border-color-translucent: rgba(0, 0, 0, 0.175);--bs-border-radius: 0.375rem;--bs-border-radius-sm: 0.25rem;--bs-border-radius-lg: 0.5rem;--bs-border-radius-xl: 1rem;--bs-border-radius-2xl: 2rem;--bs-border-radius-pill: 50rem;--bs-link-color: #0d6efd;--bs-link-hover-color: #0a58ca;--bs-code-color: #d63384;--bs-highlight-bg: #fff3cd}*,*::before,*::after{box-sizing:border-box}@media(prefers-reduced-motion: no-preference){:root{scroll-behavior:smooth}}body{margin:0;font-family:var(--bs-body-font-family);font-size:var(--bs-body-font-size);font-weight:var(--bs-body-font-weight);line-height:var(--bs-body-line-height);color:var(--bs-body-color);text-align:var(--bs-body-text-align);background-color:var(--bs-body-bg);-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}hr{margin:1rem 0;color:inherit;border:0;border-top:1px solid;opacity:.25}h6,.h6,h5,.h5,h4,.h4,h3,.h3,h2,.h2,h1,.h1{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}h1,.h1{font-size:calc(1.375rem + 1.5vw)}@media(min-width: 1200px){h1,.h1{font-size:2.5rem}}h2,.h2{font-size:calc(1.325rem + 0.9vw)}@media(min-width: 1200px){h2,.h2{font-size:2rem}}h3,.h3{font-size:calc(1.3rem + 0.6vw)}@media(min-width: 1200px){h3,.h3{font-size:1.75rem}}h4,.h4{font-size:calc(1.275rem + 0.3vw)}@media(min-width: 1200px){h4,.h4{font-size:1.5rem}}h5,.h5{font-size:1.25rem}h6,.h6{font-size:1rem}p{margin-top:0;margin-bottom:1rem}abbr[title]{text-decoration:underline dotted;cursor:help;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}ol,ul{padding-left:2rem}ol,ul,dl{margin-top:0;margin-bottom:1rem}ol ol,ul ul,ol ul,ul ol{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small,.small{font-size:0.875em}mark,.mark{padding:.1875em;background-color:var(--bs-highlight-bg)}sub,sup{position:relative;font-size:0.75em;line-height:0;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}a{color:var(--bs-link-color);text-decoration:underline}a:hover{color:var(--bs-link-hover-color)}a:not([href]):not([class]),a:not([href]):not([class]):hover{color:inherit;text-decoration:none}pre,code,kbd,samp{font-family:var(--bs-font-monospace);font-size:1em}pre{display:block;margin-top:0;margin-bottom:1rem;overflow:auto;font-size:0.875em}pre code{font-size:inherit;color:inherit;word-break:normal}code{font-size:0.875em;color:var(--bs-code-color);word-wrap:break-word}a>code{color:inherit}kbd{padding:.1875rem .375rem;font-size:0.875em;color:var(--bs-body-bg);background-color:var(--bs-body-color);border-radius:.25rem}kbd kbd{padding:0;font-size:1em}figure{margin:0 0 1rem}img,svg{vertical-align:middle}table{caption-side:bottom;border-collapse:collapse}caption{padding-top:.5rem;padding-bottom:.5rem;color:#6c757d;text-align:left}th{text-align:inherit;text-align:-webkit-match-parent}thead,tbody,tfoot,tr,td,th{border-color:inherit;border-style:solid;border-width:0}label{display:inline-block}button{border-radius:0}button:focus:not(:focus-visible){outline:0}input,button,select,optgroup,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,select{text-transform:none}[role=button]{cursor:pointer}select{word-wrap:normal}select:disabled{opacity:1}[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator{display:none !important}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button:not(:disabled),[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled){cursor:pointer}::-moz-focus-inner{padding:0;border-style:none}textarea{resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{float:left;width:100%;padding:0;margin-bottom:.5rem;font-size:calc(1.275rem + 0.3vw);line-height:inherit}@media(min-width: 1200px){legend{font-size:1.5rem}}legend+*{clear:left}::-webkit-datetime-edit-fields-wrapper,::-webkit-datetime-edit-text,::-webkit-datetime-edit-minute,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-year-field{padding:0}::-webkit-inner-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:textfield}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-color-swatch-wrapper{padding:0}::file-selector-button{font:inherit;-webkit-appearance:button}output{display:inline-block}iframe{border:0}summary{display:list-item;cursor:pointer}progress{vertical-align:baseline}[hidden]{display:none !important}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:calc(1.625rem + 4.5vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-1{font-size:5rem}}.display-2{font-size:calc(1.575rem + 3.9vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-2{font-size:4.5rem}}.display-3{font-size:calc(1.525rem + 3.3vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-3{font-size:4rem}}.display-4{font-size:calc(1.475rem + 2.7vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-4{font-size:3.5rem}}.display-5{font-size:calc(1.425rem + 2.1vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-5{font-size:3rem}}.display-6{font-size:calc(1.375rem + 1.5vw);font-weight:300;line-height:1.2}@media(min-width: 1200px){.display-6{font-size:2.5rem}}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:0.875em;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote>:last-child{margin-bottom:0}.blockquote-footer{margin-top:-1rem;margin-bottom:1rem;font-size:0.875em;color:#6c757d}.blockquote-footer::before{content:\"— \"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid var(--bs-border-color);border-radius:.375rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:0.875em;color:#6c757d}.container,.container-fluid,.container-xxl,.container-xl,.container-lg,.container-md,.container-sm{--bs-gutter-x: 1.5rem;--bs-gutter-y: 0;width:100%;padding-right:calc(var(--bs-gutter-x)*.5);padding-left:calc(var(--bs-gutter-x)*.5);margin-right:auto;margin-left:auto}@media(min-width: 576px){.container-sm,.container{max-width:540px}}@media(min-width: 768px){.container-md,.container-sm,.container{max-width:720px}}@media(min-width: 992px){.container-lg,.container-md,.container-sm,.container{max-width:960px}}@media(min-width: 1200px){.container-xl,.container-lg,.container-md,.container-sm,.container{max-width:1140px}}@media(min-width: 1400px){.container-xxl,.container-xl,.container-lg,.container-md,.container-sm,.container{max-width:1320px}}.row{--bs-gutter-x: 1.5rem;--bs-gutter-y: 0;display:flex;flex-wrap:wrap;margin-top:calc(-1*var(--bs-gutter-y));margin-right:calc(-0.5*var(--bs-gutter-x));margin-left:calc(-0.5*var(--bs-gutter-x))}.row>*{flex-shrink:0;width:100%;max-width:100%;padding-right:calc(var(--bs-gutter-x)*.5);padding-left:calc(var(--bs-gutter-x)*.5);margin-top:var(--bs-gutter-y)}.col{flex:1 0 0%}.row-cols-auto>*{flex:0 0 auto;width:auto}.row-cols-1>*{flex:0 0 auto;width:100%}.row-cols-2>*{flex:0 0 auto;width:50%}.row-cols-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-4>*{flex:0 0 auto;width:25%}.row-cols-5>*{flex:0 0 auto;width:20%}.row-cols-6>*{flex:0 0 auto;width:16.6666666667%}.col-auto{flex:0 0 auto;width:auto}.col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}.offset-1{margin-left:8.33333333%}.offset-2{margin-left:16.66666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.33333333%}.offset-5{margin-left:41.66666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.33333333%}.offset-8{margin-left:66.66666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.33333333%}.offset-11{margin-left:91.66666667%}.g-0,.gx-0{--bs-gutter-x: 0}.g-0,.gy-0{--bs-gutter-y: 0}.g-1,.gx-1{--bs-gutter-x: 0.25rem}.g-1,.gy-1{--bs-gutter-y: 0.25rem}.g-2,.gx-2{--bs-gutter-x: 0.5rem}.g-2,.gy-2{--bs-gutter-y: 0.5rem}.g-3,.gx-3{--bs-gutter-x: 1rem}.g-3,.gy-3{--bs-gutter-y: 1rem}.g-4,.gx-4{--bs-gutter-x: 1.5rem}.g-4,.gy-4{--bs-gutter-y: 1.5rem}.g-5,.gx-5{--bs-gutter-x: 3rem}.g-5,.gy-5{--bs-gutter-y: 3rem}@media(min-width: 576px){.col-sm{flex:1 0 0%}.row-cols-sm-auto>*{flex:0 0 auto;width:auto}.row-cols-sm-1>*{flex:0 0 auto;width:100%}.row-cols-sm-2>*{flex:0 0 auto;width:50%}.row-cols-sm-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-sm-4>*{flex:0 0 auto;width:25%}.row-cols-sm-5>*{flex:0 0 auto;width:20%}.row-cols-sm-6>*{flex:0 0 auto;width:16.6666666667%}.col-sm-auto{flex:0 0 auto;width:auto}.col-sm-1{flex:0 0 auto;width:8.33333333%}.col-sm-2{flex:0 0 auto;width:16.66666667%}.col-sm-3{flex:0 0 auto;width:25%}.col-sm-4{flex:0 0 auto;width:33.33333333%}.col-sm-5{flex:0 0 auto;width:41.66666667%}.col-sm-6{flex:0 0 auto;width:50%}.col-sm-7{flex:0 0 auto;width:58.33333333%}.col-sm-8{flex:0 0 auto;width:66.66666667%}.col-sm-9{flex:0 0 auto;width:75%}.col-sm-10{flex:0 0 auto;width:83.33333333%}.col-sm-11{flex:0 0 auto;width:91.66666667%}.col-sm-12{flex:0 0 auto;width:100%}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.33333333%}.offset-sm-2{margin-left:16.66666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.33333333%}.offset-sm-5{margin-left:41.66666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.33333333%}.offset-sm-8{margin-left:66.66666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.33333333%}.offset-sm-11{margin-left:91.66666667%}.g-sm-0,.gx-sm-0{--bs-gutter-x: 0}.g-sm-0,.gy-sm-0{--bs-gutter-y: 0}.g-sm-1,.gx-sm-1{--bs-gutter-x: 0.25rem}.g-sm-1,.gy-sm-1{--bs-gutter-y: 0.25rem}.g-sm-2,.gx-sm-2{--bs-gutter-x: 0.5rem}.g-sm-2,.gy-sm-2{--bs-gutter-y: 0.5rem}.g-sm-3,.gx-sm-3{--bs-gutter-x: 1rem}.g-sm-3,.gy-sm-3{--bs-gutter-y: 1rem}.g-sm-4,.gx-sm-4{--bs-gutter-x: 1.5rem}.g-sm-4,.gy-sm-4{--bs-gutter-y: 1.5rem}.g-sm-5,.gx-sm-5{--bs-gutter-x: 3rem}.g-sm-5,.gy-sm-5{--bs-gutter-y: 3rem}}@media(min-width: 768px){.col-md{flex:1 0 0%}.row-cols-md-auto>*{flex:0 0 auto;width:auto}.row-cols-md-1>*{flex:0 0 auto;width:100%}.row-cols-md-2>*{flex:0 0 auto;width:50%}.row-cols-md-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-md-4>*{flex:0 0 auto;width:25%}.row-cols-md-5>*{flex:0 0 auto;width:20%}.row-cols-md-6>*{flex:0 0 auto;width:16.6666666667%}.col-md-auto{flex:0 0 auto;width:auto}.col-md-1{flex:0 0 auto;width:8.33333333%}.col-md-2{flex:0 0 auto;width:16.66666667%}.col-md-3{flex:0 0 auto;width:25%}.col-md-4{flex:0 0 auto;width:33.33333333%}.col-md-5{flex:0 0 auto;width:41.66666667%}.col-md-6{flex:0 0 auto;width:50%}.col-md-7{flex:0 0 auto;width:58.33333333%}.col-md-8{flex:0 0 auto;width:66.66666667%}.col-md-9{flex:0 0 auto;width:75%}.col-md-10{flex:0 0 auto;width:83.33333333%}.col-md-11{flex:0 0 auto;width:91.66666667%}.col-md-12{flex:0 0 auto;width:100%}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.33333333%}.offset-md-2{margin-left:16.66666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.33333333%}.offset-md-5{margin-left:41.66666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.33333333%}.offset-md-8{margin-left:66.66666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.33333333%}.offset-md-11{margin-left:91.66666667%}.g-md-0,.gx-md-0{--bs-gutter-x: 0}.g-md-0,.gy-md-0{--bs-gutter-y: 0}.g-md-1,.gx-md-1{--bs-gutter-x: 0.25rem}.g-md-1,.gy-md-1{--bs-gutter-y: 0.25rem}.g-md-2,.gx-md-2{--bs-gutter-x: 0.5rem}.g-md-2,.gy-md-2{--bs-gutter-y: 0.5rem}.g-md-3,.gx-md-3{--bs-gutter-x: 1rem}.g-md-3,.gy-md-3{--bs-gutter-y: 1rem}.g-md-4,.gx-md-4{--bs-gutter-x: 1.5rem}.g-md-4,.gy-md-4{--bs-gutter-y: 1.5rem}.g-md-5,.gx-md-5{--bs-gutter-x: 3rem}.g-md-5,.gy-md-5{--bs-gutter-y: 3rem}}@media(min-width: 992px){.col-lg{flex:1 0 0%}.row-cols-lg-auto>*{flex:0 0 auto;width:auto}.row-cols-lg-1>*{flex:0 0 auto;width:100%}.row-cols-lg-2>*{flex:0 0 auto;width:50%}.row-cols-lg-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-lg-4>*{flex:0 0 auto;width:25%}.row-cols-lg-5>*{flex:0 0 auto;width:20%}.row-cols-lg-6>*{flex:0 0 auto;width:16.6666666667%}.col-lg-auto{flex:0 0 auto;width:auto}.col-lg-1{flex:0 0 auto;width:8.33333333%}.col-lg-2{flex:0 0 auto;width:16.66666667%}.col-lg-3{flex:0 0 auto;width:25%}.col-lg-4{flex:0 0 auto;width:33.33333333%}.col-lg-5{flex:0 0 auto;width:41.66666667%}.col-lg-6{flex:0 0 auto;width:50%}.col-lg-7{flex:0 0 auto;width:58.33333333%}.col-lg-8{flex:0 0 auto;width:66.66666667%}.col-lg-9{flex:0 0 auto;width:75%}.col-lg-10{flex:0 0 auto;width:83.33333333%}.col-lg-11{flex:0 0 auto;width:91.66666667%}.col-lg-12{flex:0 0 auto;width:100%}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.33333333%}.offset-lg-2{margin-left:16.66666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.33333333%}.offset-lg-5{margin-left:41.66666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.33333333%}.offset-lg-8{margin-left:66.66666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.33333333%}.offset-lg-11{margin-left:91.66666667%}.g-lg-0,.gx-lg-0{--bs-gutter-x: 0}.g-lg-0,.gy-lg-0{--bs-gutter-y: 0}.g-lg-1,.gx-lg-1{--bs-gutter-x: 0.25rem}.g-lg-1,.gy-lg-1{--bs-gutter-y: 0.25rem}.g-lg-2,.gx-lg-2{--bs-gutter-x: 0.5rem}.g-lg-2,.gy-lg-2{--bs-gutter-y: 0.5rem}.g-lg-3,.gx-lg-3{--bs-gutter-x: 1rem}.g-lg-3,.gy-lg-3{--bs-gutter-y: 1rem}.g-lg-4,.gx-lg-4{--bs-gutter-x: 1.5rem}.g-lg-4,.gy-lg-4{--bs-gutter-y: 1.5rem}.g-lg-5,.gx-lg-5{--bs-gutter-x: 3rem}.g-lg-5,.gy-lg-5{--bs-gutter-y: 3rem}}@media(min-width: 1200px){.col-xl{flex:1 0 0%}.row-cols-xl-auto>*{flex:0 0 auto;width:auto}.row-cols-xl-1>*{flex:0 0 auto;width:100%}.row-cols-xl-2>*{flex:0 0 auto;width:50%}.row-cols-xl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xl-4>*{flex:0 0 auto;width:25%}.row-cols-xl-5>*{flex:0 0 auto;width:20%}.row-cols-xl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xl-auto{flex:0 0 auto;width:auto}.col-xl-1{flex:0 0 auto;width:8.33333333%}.col-xl-2{flex:0 0 auto;width:16.66666667%}.col-xl-3{flex:0 0 auto;width:25%}.col-xl-4{flex:0 0 auto;width:33.33333333%}.col-xl-5{flex:0 0 auto;width:41.66666667%}.col-xl-6{flex:0 0 auto;width:50%}.col-xl-7{flex:0 0 auto;width:58.33333333%}.col-xl-8{flex:0 0 auto;width:66.66666667%}.col-xl-9{flex:0 0 auto;width:75%}.col-xl-10{flex:0 0 auto;width:83.33333333%}.col-xl-11{flex:0 0 auto;width:91.66666667%}.col-xl-12{flex:0 0 auto;width:100%}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.33333333%}.offset-xl-2{margin-left:16.66666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.33333333%}.offset-xl-5{margin-left:41.66666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.33333333%}.offset-xl-8{margin-left:66.66666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.33333333%}.offset-xl-11{margin-left:91.66666667%}.g-xl-0,.gx-xl-0{--bs-gutter-x: 0}.g-xl-0,.gy-xl-0{--bs-gutter-y: 0}.g-xl-1,.gx-xl-1{--bs-gutter-x: 0.25rem}.g-xl-1,.gy-xl-1{--bs-gutter-y: 0.25rem}.g-xl-2,.gx-xl-2{--bs-gutter-x: 0.5rem}.g-xl-2,.gy-xl-2{--bs-gutter-y: 0.5rem}.g-xl-3,.gx-xl-3{--bs-gutter-x: 1rem}.g-xl-3,.gy-xl-3{--bs-gutter-y: 1rem}.g-xl-4,.gx-xl-4{--bs-gutter-x: 1.5rem}.g-xl-4,.gy-xl-4{--bs-gutter-y: 1.5rem}.g-xl-5,.gx-xl-5{--bs-gutter-x: 3rem}.g-xl-5,.gy-xl-5{--bs-gutter-y: 3rem}}@media(min-width: 1400px){.col-xxl{flex:1 0 0%}.row-cols-xxl-auto>*{flex:0 0 auto;width:auto}.row-cols-xxl-1>*{flex:0 0 auto;width:100%}.row-cols-xxl-2>*{flex:0 0 auto;width:50%}.row-cols-xxl-3>*{flex:0 0 auto;width:33.3333333333%}.row-cols-xxl-4>*{flex:0 0 auto;width:25%}.row-cols-xxl-5>*{flex:0 0 auto;width:20%}.row-cols-xxl-6>*{flex:0 0 auto;width:16.6666666667%}.col-xxl-auto{flex:0 0 auto;width:auto}.col-xxl-1{flex:0 0 auto;width:8.33333333%}.col-xxl-2{flex:0 0 auto;width:16.66666667%}.col-xxl-3{flex:0 0 auto;width:25%}.col-xxl-4{flex:0 0 auto;width:33.33333333%}.col-xxl-5{flex:0 0 auto;width:41.66666667%}.col-xxl-6{flex:0 0 auto;width:50%}.col-xxl-7{flex:0 0 auto;width:58.33333333%}.col-xxl-8{flex:0 0 auto;width:66.66666667%}.col-xxl-9{flex:0 0 auto;width:75%}.col-xxl-10{flex:0 0 auto;width:83.33333333%}.col-xxl-11{flex:0 0 auto;width:91.66666667%}.col-xxl-12{flex:0 0 auto;width:100%}.offset-xxl-0{margin-left:0}.offset-xxl-1{margin-left:8.33333333%}.offset-xxl-2{margin-left:16.66666667%}.offset-xxl-3{margin-left:25%}.offset-xxl-4{margin-left:33.33333333%}.offset-xxl-5{margin-left:41.66666667%}.offset-xxl-6{margin-left:50%}.offset-xxl-7{margin-left:58.33333333%}.offset-xxl-8{margin-left:66.66666667%}.offset-xxl-9{margin-left:75%}.offset-xxl-10{margin-left:83.33333333%}.offset-xxl-11{margin-left:91.66666667%}.g-xxl-0,.gx-xxl-0{--bs-gutter-x: 0}.g-xxl-0,.gy-xxl-0{--bs-gutter-y: 0}.g-xxl-1,.gx-xxl-1{--bs-gutter-x: 0.25rem}.g-xxl-1,.gy-xxl-1{--bs-gutter-y: 0.25rem}.g-xxl-2,.gx-xxl-2{--bs-gutter-x: 0.5rem}.g-xxl-2,.gy-xxl-2{--bs-gutter-y: 0.5rem}.g-xxl-3,.gx-xxl-3{--bs-gutter-x: 1rem}.g-xxl-3,.gy-xxl-3{--bs-gutter-y: 1rem}.g-xxl-4,.gx-xxl-4{--bs-gutter-x: 1.5rem}.g-xxl-4,.gy-xxl-4{--bs-gutter-y: 1.5rem}.g-xxl-5,.gx-xxl-5{--bs-gutter-x: 3rem}.g-xxl-5,.gy-xxl-5{--bs-gutter-y: 3rem}}.table{--bs-table-color: var(--bs-body-color);--bs-table-bg: transparent;--bs-table-border-color: var(--bs-border-color);--bs-table-accent-bg: transparent;--bs-table-striped-color: var(--bs-body-color);--bs-table-striped-bg: rgba(0, 0, 0, 0.05);--bs-table-active-color: var(--bs-body-color);--bs-table-active-bg: rgba(0, 0, 0, 0.1);--bs-table-hover-color: var(--bs-body-color);--bs-table-hover-bg: rgba(0, 0, 0, 0.075);width:100%;margin-bottom:1rem;color:var(--bs-table-color);vertical-align:top;border-color:var(--bs-table-border-color)}.table>:not(caption)>*>*{padding:.5rem .5rem;background-color:var(--bs-table-bg);border-bottom-width:1px;box-shadow:inset 0 0 0 9999px var(--bs-table-accent-bg)}.table>tbody{vertical-align:inherit}.table>thead{vertical-align:bottom}.table-group-divider{border-top:2px solid currentcolor}.caption-top{caption-side:top}.table-sm>:not(caption)>*>*{padding:.25rem .25rem}.table-bordered>:not(caption)>*{border-width:1px 0}.table-bordered>:not(caption)>*>*{border-width:0 1px}.table-borderless>:not(caption)>*>*{border-bottom-width:0}.table-borderless>:not(:first-child){border-top-width:0}.table-striped>tbody>tr:nth-of-type(odd)>*{--bs-table-accent-bg: var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-striped-columns>:not(caption)>tr>:nth-child(even){--bs-table-accent-bg: var(--bs-table-striped-bg);color:var(--bs-table-striped-color)}.table-active{--bs-table-accent-bg: var(--bs-table-active-bg);color:var(--bs-table-active-color)}.table-hover>tbody>tr:hover>*{--bs-table-accent-bg: var(--bs-table-hover-bg);color:var(--bs-table-hover-color)}.table-primary{--bs-table-color: #000;--bs-table-bg: #cfe2ff;--bs-table-border-color: #bacbe6;--bs-table-striped-bg: #c5d7f2;--bs-table-striped-color: #000;--bs-table-active-bg: #bacbe6;--bs-table-active-color: #000;--bs-table-hover-bg: #bfd1ec;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-secondary{--bs-table-color: #000;--bs-table-bg: #e2e3e5;--bs-table-border-color: #cbccce;--bs-table-striped-bg: #d7d8da;--bs-table-striped-color: #000;--bs-table-active-bg: #cbccce;--bs-table-active-color: #000;--bs-table-hover-bg: #d1d2d4;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-success{--bs-table-color: #000;--bs-table-bg: #d1e7dd;--bs-table-border-color: #bcd0c7;--bs-table-striped-bg: #c7dbd2;--bs-table-striped-color: #000;--bs-table-active-bg: #bcd0c7;--bs-table-active-color: #000;--bs-table-hover-bg: #c1d6cc;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-info{--bs-table-color: #000;--bs-table-bg: #cff4fc;--bs-table-border-color: #badce3;--bs-table-striped-bg: #c5e8ef;--bs-table-striped-color: #000;--bs-table-active-bg: #badce3;--bs-table-active-color: #000;--bs-table-hover-bg: #bfe2e9;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-warning{--bs-table-color: #000;--bs-table-bg: #fff3cd;--bs-table-border-color: #e6dbb9;--bs-table-striped-bg: #f2e7c3;--bs-table-striped-color: #000;--bs-table-active-bg: #e6dbb9;--bs-table-active-color: #000;--bs-table-hover-bg: #ece1be;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-danger{--bs-table-color: #000;--bs-table-bg: #f8d7da;--bs-table-border-color: #dfc2c4;--bs-table-striped-bg: #eccccf;--bs-table-striped-color: #000;--bs-table-active-bg: #dfc2c4;--bs-table-active-color: #000;--bs-table-hover-bg: #e5c7ca;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-light{--bs-table-color: #000;--bs-table-bg: #f8f9fa;--bs-table-border-color: #dfe0e1;--bs-table-striped-bg: #ecedee;--bs-table-striped-color: #000;--bs-table-active-bg: #dfe0e1;--bs-table-active-color: #000;--bs-table-hover-bg: #e5e6e7;--bs-table-hover-color: #000;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-dark{--bs-table-color: #fff;--bs-table-bg: #212529;--bs-table-border-color: #373b3e;--bs-table-striped-bg: #2c3034;--bs-table-striped-color: #fff;--bs-table-active-bg: #373b3e;--bs-table-active-color: #fff;--bs-table-hover-bg: #323539;--bs-table-hover-color: #fff;color:var(--bs-table-color);border-color:var(--bs-table-border-color)}.table-responsive{overflow-x:auto;-webkit-overflow-scrolling:touch}@media(max-width: 575.98px){.table-responsive-sm{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 767.98px){.table-responsive-md{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 991.98px){.table-responsive-lg{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 1199.98px){.table-responsive-xl{overflow-x:auto;-webkit-overflow-scrolling:touch}}@media(max-width: 1399.98px){.table-responsive-xxl{overflow-x:auto;-webkit-overflow-scrolling:touch}}.form-label{margin-bottom:.5rem}.col-form-label{padding-top:calc(0.375rem + 1px);padding-bottom:calc(0.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(0.5rem + 1px);padding-bottom:calc(0.5rem + 1px);font-size:1.25rem}.col-form-label-sm{padding-top:calc(0.25rem + 1px);padding-bottom:calc(0.25rem + 1px);font-size:0.875rem}.form-text{margin-top:.25rem;font-size:0.875em;color:#6c757d}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;appearance:none;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.form-control{transition:none}}.form-control[type=file]{overflow:hidden}.form-control[type=file]:not(:disabled):not([readonly]){cursor:pointer}.form-control:focus{color:#212529;background-color:#fff;border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-control::-webkit-date-and-time-value{height:1.5em}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled{background-color:#e9ecef;opacity:1}.form-control::file-selector-button{padding:.375rem .75rem;margin:-0.375rem -0.75rem;margin-inline-end:.75rem;color:#212529;background-color:#e9ecef;pointer-events:none;border-color:inherit;border-style:solid;border-width:0;border-inline-end-width:1px;border-radius:0;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.form-control::file-selector-button{transition:none}}.form-control:hover:not(:disabled):not([readonly])::file-selector-button{background-color:#dde0e3}.form-control-plaintext{display:block;width:100%;padding:.375rem 0;margin-bottom:0;line-height:1.5;color:#212529;background-color:rgba(0,0,0,0);border:solid rgba(0,0,0,0);border-width:1px 0}.form-control-plaintext:focus{outline:0}.form-control-plaintext.form-control-sm,.form-control-plaintext.form-control-lg{padding-right:0;padding-left:0}.form-control-sm{min-height:calc(1.5em + 0.5rem + 2px);padding:.25rem .5rem;font-size:0.875rem;border-radius:.25rem}.form-control-sm::file-selector-button{padding:.25rem .5rem;margin:-0.25rem -0.5rem;margin-inline-end:.5rem}.form-control-lg{min-height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}.form-control-lg::file-selector-button{padding:.5rem 1rem;margin:-0.5rem -1rem;margin-inline-end:1rem}textarea.form-control{min-height:calc(1.5em + 0.75rem + 2px)}textarea.form-control-sm{min-height:calc(1.5em + 0.5rem + 2px)}textarea.form-control-lg{min-height:calc(1.5em + 1rem + 2px)}.form-control-color{width:3rem;height:calc(1.5em + 0.75rem + 2px);padding:.375rem}.form-control-color:not(:disabled):not([readonly]){cursor:pointer}.form-control-color::-moz-color-swatch{border:0 !important;border-radius:.375rem}.form-control-color::-webkit-color-swatch{border-radius:.375rem}.form-control-color.form-control-sm{height:calc(1.5em + 0.5rem + 2px)}.form-control-color.form-control-lg{height:calc(1.5em + 1rem + 2px)}.form-select{display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;-moz-padding-start:calc(0.75rem - 3px);font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:1px solid #ced4da;border-radius:.375rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.form-select{transition:none}}.form-select:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-select[multiple],.form-select[size]:not([size=\"1\"]){padding-right:.75rem;background-image:none}.form-select:disabled{background-color:#e9ecef}.form-select:-moz-focusring{color:rgba(0,0,0,0);text-shadow:0 0 0 #212529}.form-select-sm{padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:0.875rem;border-radius:.25rem}.form-select-lg{padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem;border-radius:.5rem}.form-check{display:block;min-height:1.5rem;padding-left:1.5em;margin-bottom:.125rem}.form-check .form-check-input{float:left;margin-left:-1.5em}.form-check-reverse{padding-right:1.5em;padding-left:0;text-align:right}.form-check-reverse .form-check-input{float:right;margin-right:-1.5em;margin-left:0}.form-check-input{width:1em;height:1em;margin-top:.25em;vertical-align:top;background-color:#fff;background-repeat:no-repeat;background-position:center;background-size:contain;border:1px solid rgba(0,0,0,.25);appearance:none;print-color-adjust:exact}.form-check-input[type=checkbox]{border-radius:.25em}.form-check-input[type=radio]{border-radius:50%}.form-check-input:active{filter:brightness(90%)}.form-check-input:focus{border-color:#86b7fe;outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.form-check-input:checked{background-color:#0d6efd;border-color:#0d6efd}.form-check-input:checked[type=checkbox]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e\")}.form-check-input:checked[type=radio]{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23fff'/%3e%3c/svg%3e\")}.form-check-input[type=checkbox]:indeterminate{background-color:#0d6efd;border-color:#0d6efd;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e\")}.form-check-input:disabled{pointer-events:none;filter:none;opacity:.5}.form-check-input[disabled]~.form-check-label,.form-check-input:disabled~.form-check-label{cursor:default;opacity:.5}.form-switch{padding-left:2.5em}.form-switch .form-check-input{width:2em;margin-left:-2.5em;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e\");background-position:left center;border-radius:2em;transition:background-position .15s ease-in-out}@media(prefers-reduced-motion: reduce){.form-switch .form-check-input{transition:none}}.form-switch .form-check-input:focus{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%2386b7fe'/%3e%3c/svg%3e\")}.form-switch .form-check-input:checked{background-position:right center;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.form-switch.form-check-reverse{padding-right:2.5em;padding-left:0}.form-switch.form-check-reverse .form-check-input{margin-right:-2.5em;margin-left:0}.form-check-inline{display:inline-block;margin-right:1rem}.btn-check{position:absolute;clip:rect(0, 0, 0, 0);pointer-events:none}.btn-check[disabled]+.btn,.btn-check:disabled+.btn{pointer-events:none;filter:none;opacity:.65}.form-range{width:100%;height:1.5rem;padding:0;background-color:rgba(0,0,0,0);appearance:none}.form-range:focus{outline:0}.form-range:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}.form-range::-moz-focus-outer{border:0}.form-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-0.25rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.form-range::-webkit-slider-thumb{transition:none}}.form-range::-webkit-slider-thumb:active{background-color:#b6d4fe}.form-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:rgba(0,0,0,0);cursor:pointer;background-color:#dee2e6;border-color:rgba(0,0,0,0);border-radius:1rem}.form-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#0d6efd;border:0;border-radius:1rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media(prefers-reduced-motion: reduce){.form-range::-moz-range-thumb{transition:none}}.form-range::-moz-range-thumb:active{background-color:#b6d4fe}.form-range::-moz-range-track{width:100%;height:.5rem;color:rgba(0,0,0,0);cursor:pointer;background-color:#dee2e6;border-color:rgba(0,0,0,0);border-radius:1rem}.form-range:disabled{pointer-events:none}.form-range:disabled::-webkit-slider-thumb{background-color:#adb5bd}.form-range:disabled::-moz-range-thumb{background-color:#adb5bd}.form-floating{position:relative}.form-floating>.form-control,.form-floating>.form-control-plaintext,.form-floating>.form-select{height:calc(3.5rem + 2px);line-height:1.25}.form-floating>label{position:absolute;top:0;left:0;width:100%;height:100%;padding:1rem .75rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;pointer-events:none;border:1px solid rgba(0,0,0,0);transform-origin:0 0;transition:opacity .1s ease-in-out,transform .1s ease-in-out}@media(prefers-reduced-motion: reduce){.form-floating>label{transition:none}}.form-floating>.form-control,.form-floating>.form-control-plaintext{padding:1rem .75rem}.form-floating>.form-control::placeholder,.form-floating>.form-control-plaintext::placeholder{color:rgba(0,0,0,0)}.form-floating>.form-control:focus,.form-floating>.form-control:not(:placeholder-shown),.form-floating>.form-control-plaintext:focus,.form-floating>.form-control-plaintext:not(:placeholder-shown){padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:-webkit-autofill,.form-floating>.form-control-plaintext:-webkit-autofill{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-select{padding-top:1.625rem;padding-bottom:.625rem}.form-floating>.form-control:focus~label,.form-floating>.form-control:not(:placeholder-shown)~label,.form-floating>.form-control-plaintext~label,.form-floating>.form-select~label{opacity:.65;transform:scale(0.85) translateY(-0.5rem) translateX(0.15rem)}.form-floating>.form-control:-webkit-autofill~label{opacity:.65;transform:scale(0.85) translateY(-0.5rem) translateX(0.15rem)}.form-floating>.form-control-plaintext~label{border-width:1px 0}.input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.input-group>.form-control,.input-group>.form-select,.input-group>.form-floating{position:relative;flex:1 1 auto;width:1%;min-width:0}.input-group>.form-control:focus,.input-group>.form-select:focus,.input-group>.form-floating:focus-within{z-index:3}.input-group .btn{position:relative;z-index:2}.input-group .btn:focus{z-index:3}.input-group-text{display:flex;align-items:center;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.375rem}.input-group-lg>.form-control,.input-group-lg>.form-select,.input-group-lg>.input-group-text,.input-group-lg>.btn{padding:.5rem 1rem;font-size:1.25rem;border-radius:.5rem}.input-group-sm>.form-control,.input-group-sm>.form-select,.input-group-sm>.input-group-text,.input-group-sm>.btn{padding:.25rem .5rem;font-size:0.875rem;border-radius:.25rem}.input-group-lg>.form-select,.input-group-sm>.form-select{padding-right:3rem}.input-group:not(.has-validation)>:not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),.input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control,.input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select{border-top-right-radius:0;border-bottom-right-radius:0}.input-group.has-validation>:nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),.input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-control,.input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-select{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>:not(:first-child):not(.dropdown-menu):not(.form-floating):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback),.input-group>.form-floating:not(:first-child)>.form-control,.input-group>.form-floating:not(:first-child)>.form-select{margin-left:-1px;border-top-left-radius:0;border-bottom-left-radius:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:0.875em;color:#198754}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:0.875rem;color:#fff;background-color:rgba(25,135,84,.9);border-radius:.375rem}.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip,.is-valid~.valid-feedback,.is-valid~.valid-tooltip{display:block}.was-validated .form-control:valid,.form-control.is-valid{border-color:#198754;padding-right:calc(1.5em + 0.75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(0.375em + 0.1875rem) center;background-size:calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-control:valid:focus,.form-control.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated textarea.form-control:valid,textarea.form-control.is-valid{padding-right:calc(1.5em + 0.75rem);background-position:top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)}.was-validated .form-select:valid,.form-select.is-valid{border-color:#198754}.was-validated .form-select:valid:not([multiple]):not([size]),.was-validated .form-select:valid:not([multiple])[size=\"1\"],.form-select.is-valid:not([multiple]):not([size]),.form-select.is-valid:not([multiple])[size=\"1\"]{padding-right:4.125rem;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\"),url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23198754' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-select:valid:focus,.form-select.is-valid:focus{border-color:#198754;box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated .form-control-color:valid,.form-control-color.is-valid{width:calc(3rem + calc(1.5em + 0.75rem))}.was-validated .form-check-input:valid,.form-check-input.is-valid{border-color:#198754}.was-validated .form-check-input:valid:checked,.form-check-input.is-valid:checked{background-color:#198754}.was-validated .form-check-input:valid:focus,.form-check-input.is-valid:focus{box-shadow:0 0 0 .25rem rgba(25,135,84,.25)}.was-validated .form-check-input:valid~.form-check-label,.form-check-input.is-valid~.form-check-label{color:#198754}.form-check-inline .form-check-input~.valid-feedback{margin-left:.5em}.was-validated .input-group .form-control:valid,.input-group .form-control.is-valid,.was-validated .input-group .form-select:valid,.input-group .form-select.is-valid{z-index:1}.was-validated .input-group .form-control:valid:focus,.input-group .form-control.is-valid:focus,.was-validated .input-group .form-select:valid:focus,.input-group .form-select.is-valid:focus{z-index:3}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:0.875em;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:0.875rem;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.375rem}.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip,.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip{display:block}.was-validated .form-control:invalid,.form-control.is-invalid{border-color:#dc3545;padding-right:calc(1.5em + 0.75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(0.375em + 0.1875rem) center;background-size:calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-control:invalid:focus,.form-control.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid{padding-right:calc(1.5em + 0.75rem);background-position:top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)}.was-validated .form-select:invalid,.form-select.is-invalid{border-color:#dc3545}.was-validated .form-select:invalid:not([multiple]):not([size]),.was-validated .form-select:invalid:not([multiple])[size=\"1\"],.form-select.is-invalid:not([multiple]):not([size]),.form-select.is-invalid:not([multiple])[size=\"1\"]{padding-right:4.125rem;background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e\"),url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-position:right .75rem center,center right 2.25rem;background-size:16px 12px,calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)}.was-validated .form-select:invalid:focus,.form-select.is-invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated .form-control-color:invalid,.form-control-color.is-invalid{width:calc(3rem + calc(1.5em + 0.75rem))}.was-validated .form-check-input:invalid,.form-check-input.is-invalid{border-color:#dc3545}.was-validated .form-check-input:invalid:checked,.form-check-input.is-invalid:checked{background-color:#dc3545}.was-validated .form-check-input:invalid:focus,.form-check-input.is-invalid:focus{box-shadow:0 0 0 .25rem rgba(220,53,69,.25)}.was-validated .form-check-input:invalid~.form-check-label,.form-check-input.is-invalid~.form-check-label{color:#dc3545}.form-check-inline .form-check-input~.invalid-feedback{margin-left:.5em}.was-validated .input-group .form-control:invalid,.input-group .form-control.is-invalid,.was-validated .input-group .form-select:invalid,.input-group .form-select.is-invalid{z-index:2}.was-validated .input-group .form-control:invalid:focus,.input-group .form-control.is-invalid:focus,.was-validated .input-group .form-select:invalid:focus,.input-group .form-select.is-invalid:focus{z-index:3}.btn{--bs-btn-padding-x: 0.75rem;--bs-btn-padding-y: 0.375rem;--bs-btn-font-family: ;--bs-btn-font-size:1rem;--bs-btn-font-weight: 400;--bs-btn-line-height: 1.5;--bs-btn-color: #212529;--bs-btn-bg: transparent;--bs-btn-border-width: 1px;--bs-btn-border-color: transparent;--bs-btn-border-radius: 0.375rem;--bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);--bs-btn-disabled-opacity: 0.65;--bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);display:inline-block;padding:var(--bs-btn-padding-y) var(--bs-btn-padding-x);font-family:var(--bs-btn-font-family);font-size:var(--bs-btn-font-size);font-weight:var(--bs-btn-font-weight);line-height:var(--bs-btn-line-height);color:var(--bs-btn-color);text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;user-select:none;border:var(--bs-btn-border-width) solid var(--bs-btn-border-color);border-radius:var(--bs-btn-border-radius);background-color:var(--bs-btn-bg);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.btn{transition:none}}.btn:hover{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color)}.btn-check:focus+.btn,.btn:focus{color:var(--bs-btn-hover-color);background-color:var(--bs-btn-hover-bg);border-color:var(--bs-btn-hover-border-color);outline:0;box-shadow:var(--bs-btn-focus-box-shadow)}.btn-check:checked+.btn,.btn-check:active+.btn,.btn:active,.btn.active,.btn.show{color:var(--bs-btn-active-color);background-color:var(--bs-btn-active-bg);border-color:var(--bs-btn-active-border-color)}.btn-check:checked+.btn:focus,.btn-check:active+.btn:focus,.btn:active:focus,.btn.active:focus,.btn.show:focus{box-shadow:var(--bs-btn-focus-box-shadow)}.btn:disabled,.btn.disabled,fieldset:disabled .btn{color:var(--bs-btn-disabled-color);pointer-events:none;background-color:var(--bs-btn-disabled-bg);border-color:var(--bs-btn-disabled-border-color);opacity:var(--bs-btn-disabled-opacity)}.btn-primary{--bs-btn-color: #fff;--bs-btn-bg: #0d6efd;--bs-btn-border-color: #0d6efd;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #0b5ed7;--bs-btn-hover-border-color: #0a58ca;--bs-btn-focus-shadow-rgb: 49, 132, 253;--bs-btn-active-color: #fff;--bs-btn-active-bg: #0a58ca;--bs-btn-active-border-color: #0a53be;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #0d6efd;--bs-btn-disabled-border-color: #0d6efd}.btn-secondary{--bs-btn-color: #fff;--bs-btn-bg: #6c757d;--bs-btn-border-color: #6c757d;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #5c636a;--bs-btn-hover-border-color: #565e64;--bs-btn-focus-shadow-rgb: 130, 138, 145;--bs-btn-active-color: #fff;--bs-btn-active-bg: #565e64;--bs-btn-active-border-color: #51585e;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #6c757d;--bs-btn-disabled-border-color: #6c757d}.btn-success{--bs-btn-color: #fff;--bs-btn-bg: #198754;--bs-btn-border-color: #198754;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #157347;--bs-btn-hover-border-color: #146c43;--bs-btn-focus-shadow-rgb: 60, 153, 110;--bs-btn-active-color: #fff;--bs-btn-active-bg: #146c43;--bs-btn-active-border-color: #13653f;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #198754;--bs-btn-disabled-border-color: #198754}.btn-info{--bs-btn-color: #000;--bs-btn-bg: #0dcaf0;--bs-btn-border-color: #0dcaf0;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #31d2f2;--bs-btn-hover-border-color: #25cff2;--bs-btn-focus-shadow-rgb: 11, 172, 204;--bs-btn-active-color: #000;--bs-btn-active-bg: #3dd5f3;--bs-btn-active-border-color: #25cff2;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #000;--bs-btn-disabled-bg: #0dcaf0;--bs-btn-disabled-border-color: #0dcaf0}.btn-warning{--bs-btn-color: #000;--bs-btn-bg: #ffc107;--bs-btn-border-color: #ffc107;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #ffca2c;--bs-btn-hover-border-color: #ffc720;--bs-btn-focus-shadow-rgb: 217, 164, 6;--bs-btn-active-color: #000;--bs-btn-active-bg: #ffcd39;--bs-btn-active-border-color: #ffc720;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #000;--bs-btn-disabled-bg: #ffc107;--bs-btn-disabled-border-color: #ffc107}.btn-danger{--bs-btn-color: #fff;--bs-btn-bg: #dc3545;--bs-btn-border-color: #dc3545;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #bb2d3b;--bs-btn-hover-border-color: #b02a37;--bs-btn-focus-shadow-rgb: 225, 83, 97;--bs-btn-active-color: #fff;--bs-btn-active-bg: #b02a37;--bs-btn-active-border-color: #a52834;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #dc3545;--bs-btn-disabled-border-color: #dc3545}.btn-light{--bs-btn-color: #000;--bs-btn-bg: #f8f9fa;--bs-btn-border-color: #f8f9fa;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #d3d4d5;--bs-btn-hover-border-color: #c6c7c8;--bs-btn-focus-shadow-rgb: 211, 212, 213;--bs-btn-active-color: #000;--bs-btn-active-bg: #c6c7c8;--bs-btn-active-border-color: #babbbc;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #000;--bs-btn-disabled-bg: #f8f9fa;--bs-btn-disabled-border-color: #f8f9fa}.btn-dark{--bs-btn-color: #fff;--bs-btn-bg: #212529;--bs-btn-border-color: #212529;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #424649;--bs-btn-hover-border-color: #373b3e;--bs-btn-focus-shadow-rgb: 66, 70, 73;--bs-btn-active-color: #fff;--bs-btn-active-bg: #4d5154;--bs-btn-active-border-color: #373b3e;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #fff;--bs-btn-disabled-bg: #212529;--bs-btn-disabled-border-color: #212529}.btn-outline-primary{--bs-btn-color: #0d6efd;--bs-btn-border-color: #0d6efd;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #0d6efd;--bs-btn-hover-border-color: #0d6efd;--bs-btn-focus-shadow-rgb: 13, 110, 253;--bs-btn-active-color: #fff;--bs-btn-active-bg: #0d6efd;--bs-btn-active-border-color: #0d6efd;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #0d6efd;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #0d6efd;--bs-gradient: none}.btn-outline-secondary{--bs-btn-color: #6c757d;--bs-btn-border-color: #6c757d;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #6c757d;--bs-btn-hover-border-color: #6c757d;--bs-btn-focus-shadow-rgb: 108, 117, 125;--bs-btn-active-color: #fff;--bs-btn-active-bg: #6c757d;--bs-btn-active-border-color: #6c757d;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #6c757d;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #6c757d;--bs-gradient: none}.btn-outline-success{--bs-btn-color: #198754;--bs-btn-border-color: #198754;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #198754;--bs-btn-hover-border-color: #198754;--bs-btn-focus-shadow-rgb: 25, 135, 84;--bs-btn-active-color: #fff;--bs-btn-active-bg: #198754;--bs-btn-active-border-color: #198754;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #198754;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #198754;--bs-gradient: none}.btn-outline-info{--bs-btn-color: #0dcaf0;--bs-btn-border-color: #0dcaf0;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #0dcaf0;--bs-btn-hover-border-color: #0dcaf0;--bs-btn-focus-shadow-rgb: 13, 202, 240;--bs-btn-active-color: #000;--bs-btn-active-bg: #0dcaf0;--bs-btn-active-border-color: #0dcaf0;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #0dcaf0;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #0dcaf0;--bs-gradient: none}.btn-outline-warning{--bs-btn-color: #ffc107;--bs-btn-border-color: #ffc107;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #ffc107;--bs-btn-hover-border-color: #ffc107;--bs-btn-focus-shadow-rgb: 255, 193, 7;--bs-btn-active-color: #000;--bs-btn-active-bg: #ffc107;--bs-btn-active-border-color: #ffc107;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #ffc107;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #ffc107;--bs-gradient: none}.btn-outline-danger{--bs-btn-color: #dc3545;--bs-btn-border-color: #dc3545;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #dc3545;--bs-btn-hover-border-color: #dc3545;--bs-btn-focus-shadow-rgb: 220, 53, 69;--bs-btn-active-color: #fff;--bs-btn-active-bg: #dc3545;--bs-btn-active-border-color: #dc3545;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #dc3545;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #dc3545;--bs-gradient: none}.btn-outline-light{--bs-btn-color: #f8f9fa;--bs-btn-border-color: #f8f9fa;--bs-btn-hover-color: #000;--bs-btn-hover-bg: #f8f9fa;--bs-btn-hover-border-color: #f8f9fa;--bs-btn-focus-shadow-rgb: 248, 249, 250;--bs-btn-active-color: #000;--bs-btn-active-bg: #f8f9fa;--bs-btn-active-border-color: #f8f9fa;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #f8f9fa;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #f8f9fa;--bs-gradient: none}.btn-outline-dark{--bs-btn-color: #212529;--bs-btn-border-color: #212529;--bs-btn-hover-color: #fff;--bs-btn-hover-bg: #212529;--bs-btn-hover-border-color: #212529;--bs-btn-focus-shadow-rgb: 33, 37, 41;--bs-btn-active-color: #fff;--bs-btn-active-bg: #212529;--bs-btn-active-border-color: #212529;--bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);--bs-btn-disabled-color: #212529;--bs-btn-disabled-bg: transparent;--bs-btn-disabled-border-color: #212529;--bs-gradient: none}.btn-link{--bs-btn-font-weight: 400;--bs-btn-color: var(--bs-link-color);--bs-btn-bg: transparent;--bs-btn-border-color: transparent;--bs-btn-hover-color: var(--bs-link-hover-color);--bs-btn-hover-border-color: transparent;--bs-btn-active-color: var(--bs-link-hover-color);--bs-btn-active-border-color: transparent;--bs-btn-disabled-color: #6c757d;--bs-btn-disabled-border-color: transparent;--bs-btn-box-shadow: none;--bs-btn-focus-shadow-rgb: 49, 132, 253;text-decoration:underline}.btn-link:focus{color:var(--bs-btn-color)}.btn-link:hover{color:var(--bs-btn-hover-color)}.btn-lg,.btn-group-lg>.btn{--bs-btn-padding-y: 0.5rem;--bs-btn-padding-x: 1rem;--bs-btn-font-size:1.25rem;--bs-btn-border-radius: 0.5rem}.btn-sm,.btn-group-sm>.btn{--bs-btn-padding-y: 0.25rem;--bs-btn-padding-x: 0.5rem;--bs-btn-font-size:0.875rem;--bs-btn-border-radius: 0.25rem}.fade{transition:opacity .15s linear}@media(prefers-reduced-motion: reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{height:0;overflow:hidden;transition:height .35s ease}@media(prefers-reduced-motion: reduce){.collapsing{transition:none}}.collapsing.collapse-horizontal{width:0;height:auto;transition:width .35s ease}@media(prefers-reduced-motion: reduce){.collapsing.collapse-horizontal{transition:none}}.dropup,.dropend,.dropdown,.dropstart,.dropup-center,.dropdown-center{position:relative}.dropdown-toggle{white-space:nowrap}.dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid rgba(0,0,0,0);border-bottom:0;border-left:.3em solid rgba(0,0,0,0)}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{--bs-dropdown-min-width: 10rem;--bs-dropdown-padding-x: 0;--bs-dropdown-padding-y: 0.5rem;--bs-dropdown-spacer: 0.125rem;--bs-dropdown-font-size:1rem;--bs-dropdown-color: #212529;--bs-dropdown-bg: #fff;--bs-dropdown-border-color: var(--bs-border-color-translucent);--bs-dropdown-border-radius: 0.375rem;--bs-dropdown-border-width: 1px;--bs-dropdown-inner-border-radius: calc(0.375rem - 1px);--bs-dropdown-divider-bg: var(--bs-border-color-translucent);--bs-dropdown-divider-margin-y: 0.5rem;--bs-dropdown-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-dropdown-link-color: #212529;--bs-dropdown-link-hover-color: #1e2125;--bs-dropdown-link-hover-bg: #e9ecef;--bs-dropdown-link-active-color: #fff;--bs-dropdown-link-active-bg: #0d6efd;--bs-dropdown-link-disabled-color: #adb5bd;--bs-dropdown-item-padding-x: 1rem;--bs-dropdown-item-padding-y: 0.25rem;--bs-dropdown-header-color: #6c757d;--bs-dropdown-header-padding-x: 1rem;--bs-dropdown-header-padding-y: 0.5rem;position:absolute;z-index:1000;display:none;min-width:var(--bs-dropdown-min-width);padding:var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);margin:0;font-size:var(--bs-dropdown-font-size);color:var(--bs-dropdown-color);text-align:left;list-style:none;background-color:var(--bs-dropdown-bg);background-clip:padding-box;border:var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);border-radius:var(--bs-dropdown-border-radius)}.dropdown-menu[data-bs-popper]{top:100%;left:0;margin-top:var(--bs-dropdown-spacer)}.dropdown-menu-start{--bs-position: start}.dropdown-menu-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-end{--bs-position: end}.dropdown-menu-end[data-bs-popper]{right:0;left:auto}@media(min-width: 576px){.dropdown-menu-sm-start{--bs-position: start}.dropdown-menu-sm-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-sm-end{--bs-position: end}.dropdown-menu-sm-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 768px){.dropdown-menu-md-start{--bs-position: start}.dropdown-menu-md-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-md-end{--bs-position: end}.dropdown-menu-md-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 992px){.dropdown-menu-lg-start{--bs-position: start}.dropdown-menu-lg-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-lg-end{--bs-position: end}.dropdown-menu-lg-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 1200px){.dropdown-menu-xl-start{--bs-position: start}.dropdown-menu-xl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xl-end{--bs-position: end}.dropdown-menu-xl-end[data-bs-popper]{right:0;left:auto}}@media(min-width: 1400px){.dropdown-menu-xxl-start{--bs-position: start}.dropdown-menu-xxl-start[data-bs-popper]{right:auto;left:0}.dropdown-menu-xxl-end{--bs-position: end}.dropdown-menu-xxl-end[data-bs-popper]{right:0;left:auto}}.dropup .dropdown-menu[data-bs-popper]{top:auto;bottom:100%;margin-top:0;margin-bottom:var(--bs-dropdown-spacer)}.dropup .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid rgba(0,0,0,0);border-bottom:.3em solid;border-left:.3em solid rgba(0,0,0,0)}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-menu[data-bs-popper]{top:0;right:auto;left:100%;margin-top:0;margin-left:var(--bs-dropdown-spacer)}.dropend .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid rgba(0,0,0,0);border-right:0;border-bottom:.3em solid rgba(0,0,0,0);border-left:.3em solid}.dropend .dropdown-toggle:empty::after{margin-left:0}.dropend .dropdown-toggle::after{vertical-align:0}.dropstart .dropdown-menu[data-bs-popper]{top:0;right:100%;left:auto;margin-top:0;margin-right:var(--bs-dropdown-spacer)}.dropstart .dropdown-toggle::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.dropstart .dropdown-toggle::after{display:none}.dropstart .dropdown-toggle::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid rgba(0,0,0,0);border-right:.3em solid;border-bottom:.3em solid rgba(0,0,0,0)}.dropstart .dropdown-toggle:empty::after{margin-left:0}.dropstart .dropdown-toggle::before{vertical-align:0}.dropdown-divider{height:0;margin:var(--bs-dropdown-divider-margin-y) 0;overflow:hidden;border-top:1px solid var(--bs-dropdown-divider-bg);opacity:1}.dropdown-item{display:block;width:100%;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);clear:both;font-weight:400;color:var(--bs-dropdown-link-color);text-align:inherit;text-decoration:none;white-space:nowrap;background-color:rgba(0,0,0,0);border:0}.dropdown-item:hover,.dropdown-item:focus{color:var(--bs-dropdown-link-hover-color);background-color:var(--bs-dropdown-link-hover-bg)}.dropdown-item.active,.dropdown-item:active{color:var(--bs-dropdown-link-active-color);text-decoration:none;background-color:var(--bs-dropdown-link-active-bg)}.dropdown-item.disabled,.dropdown-item:disabled{color:var(--bs-dropdown-link-disabled-color);pointer-events:none;background-color:rgba(0,0,0,0)}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);margin-bottom:0;font-size:0.875rem;color:var(--bs-dropdown-header-color);white-space:nowrap}.dropdown-item-text{display:block;padding:var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);color:var(--bs-dropdown-link-color)}.dropdown-menu-dark{--bs-dropdown-color: #dee2e6;--bs-dropdown-bg: #343a40;--bs-dropdown-border-color: var(--bs-border-color-translucent);--bs-dropdown-box-shadow: ;--bs-dropdown-link-color: #dee2e6;--bs-dropdown-link-hover-color: #fff;--bs-dropdown-divider-bg: var(--bs-border-color-translucent);--bs-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15);--bs-dropdown-link-active-color: #fff;--bs-dropdown-link-active-bg: #0d6efd;--bs-dropdown-link-disabled-color: #adb5bd;--bs-dropdown-header-color: #adb5bd}.btn-group,.btn-group-vertical{position:relative;display:inline-flex;vertical-align:middle}.btn-group>.btn,.btn-group-vertical>.btn{position:relative;flex:1 1 auto}.btn-group>.btn-check:checked+.btn,.btn-group>.btn-check:focus+.btn,.btn-group>.btn:hover,.btn-group>.btn:focus,.btn-group>.btn:active,.btn-group>.btn.active,.btn-group-vertical>.btn-check:checked+.btn,.btn-group-vertical>.btn-check:focus+.btn,.btn-group-vertical>.btn:hover,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn.active{z-index:1}.btn-toolbar{display:flex;flex-wrap:wrap;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group{border-radius:.375rem}.btn-group>.btn:not(:first-child),.btn-group>.btn-group:not(:first-child){margin-left:-1px}.btn-group>.btn:not(:last-child):not(.dropdown-toggle),.btn-group>.btn.dropdown-toggle-split:first-child,.btn-group>.btn-group:not(:last-child)>.btn{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:nth-child(n+3),.btn-group>:not(.btn-check)+.btn,.btn-group>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after,.dropend .dropdown-toggle-split::after{margin-left:0}.dropstart .dropdown-toggle-split::before{margin-right:0}.btn-sm+.dropdown-toggle-split,.btn-group-sm>.btn+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-lg+.dropdown-toggle-split,.btn-group-lg>.btn+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{flex-direction:column;align-items:flex-start;justify-content:center}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group{width:100%}.btn-group-vertical>.btn:not(:first-child),.btn-group-vertical>.btn-group:not(:first-child){margin-top:-1px}.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),.btn-group-vertical>.btn-group:not(:last-child)>.btn{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn~.btn,.btn-group-vertical>.btn-group:not(:first-child)>.btn{border-top-left-radius:0;border-top-right-radius:0}.nav{--bs-nav-link-padding-x: 1rem;--bs-nav-link-padding-y: 0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color: var(--bs-link-color);--bs-nav-link-hover-color: var(--bs-link-hover-color);--bs-nav-link-disabled-color: #6c757d;display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x);font-size:var(--bs-nav-link-font-size);font-weight:var(--bs-nav-link-font-weight);color:var(--bs-nav-link-color);text-decoration:none;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out}@media(prefers-reduced-motion: reduce){.nav-link{transition:none}}.nav-link:hover,.nav-link:focus{color:var(--bs-nav-link-hover-color)}.nav-link.disabled{color:var(--bs-nav-link-disabled-color);pointer-events:none;cursor:default}.nav-tabs{--bs-nav-tabs-border-width: 1px;--bs-nav-tabs-border-color: #dee2e6;--bs-nav-tabs-border-radius: 0.375rem;--bs-nav-tabs-link-hover-border-color: #e9ecef #e9ecef #dee2e6;--bs-nav-tabs-link-active-color: #495057;--bs-nav-tabs-link-active-bg: #fff;--bs-nav-tabs-link-active-border-color: #dee2e6 #dee2e6 #fff;border-bottom:var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color)}.nav-tabs .nav-link{margin-bottom:calc(var(--bs-nav-tabs-border-width)*-1);background:none;border:var(--bs-nav-tabs-border-width) solid rgba(0,0,0,0);border-top-left-radius:var(--bs-nav-tabs-border-radius);border-top-right-radius:var(--bs-nav-tabs-border-radius)}.nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus{isolation:isolate;border-color:var(--bs-nav-tabs-link-hover-border-color)}.nav-tabs .nav-link.disabled,.nav-tabs .nav-link:disabled{color:var(--bs-nav-link-disabled-color);background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.nav-tabs .nav-link.active,.nav-tabs .nav-item.show .nav-link{color:var(--bs-nav-tabs-link-active-color);background-color:var(--bs-nav-tabs-link-active-bg);border-color:var(--bs-nav-tabs-link-active-border-color)}.nav-tabs .dropdown-menu{margin-top:calc(var(--bs-nav-tabs-border-width)*-1);border-top-left-radius:0;border-top-right-radius:0}.nav-pills{--bs-nav-pills-border-radius: 0.375rem;--bs-nav-pills-link-active-color: #fff;--bs-nav-pills-link-active-bg: #0d6efd}.nav-pills .nav-link{background:none;border:0;border-radius:var(--bs-nav-pills-border-radius)}.nav-pills .nav-link:disabled{color:var(--bs-nav-link-disabled-color);background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:var(--bs-nav-pills-link-active-color);background-color:var(--bs-nav-pills-link-active-bg)}.nav-fill>.nav-link,.nav-fill .nav-item{flex:1 1 auto;text-align:center}.nav-justified>.nav-link,.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center}.nav-fill .nav-item .nav-link,.nav-justified .nav-item .nav-link{width:100%}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{--bs-navbar-padding-x: 0;--bs-navbar-padding-y: 0.5rem;--bs-navbar-color: rgba(0, 0, 0, 0.55);--bs-navbar-hover-color: rgba(0, 0, 0, 0.7);--bs-navbar-disabled-color: rgba(0, 0, 0, 0.3);--bs-navbar-active-color: rgba(0, 0, 0, 0.9);--bs-navbar-brand-padding-y: 0.3125rem;--bs-navbar-brand-margin-end: 1rem;--bs-navbar-brand-font-size: 1.25rem;--bs-navbar-brand-color: rgba(0, 0, 0, 0.9);--bs-navbar-brand-hover-color: rgba(0, 0, 0, 0.9);--bs-navbar-nav-link-padding-x: 0.5rem;--bs-navbar-toggler-padding-y: 0.25rem;--bs-navbar-toggler-padding-x: 0.75rem;--bs-navbar-toggler-font-size: 1.25rem;--bs-navbar-toggler-icon-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\");--bs-navbar-toggler-border-color: rgba(0, 0, 0, 0.1);--bs-navbar-toggler-border-radius: 0.375rem;--bs-navbar-toggler-focus-width: 0.25rem;--bs-navbar-toggler-transition: box-shadow 0.15s ease-in-out;position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:var(--bs-navbar-padding-y) var(--bs-navbar-padding-x)}.navbar>.container,.navbar>.container-fluid,.navbar>.container-sm,.navbar>.container-md,.navbar>.container-lg,.navbar>.container-xl,.navbar>.container-xxl{display:flex;flex-wrap:inherit;align-items:center;justify-content:space-between}.navbar-brand{padding-top:var(--bs-navbar-brand-padding-y);padding-bottom:var(--bs-navbar-brand-padding-y);margin-right:var(--bs-navbar-brand-margin-end);font-size:var(--bs-navbar-brand-font-size);color:var(--bs-navbar-brand-color);text-decoration:none;white-space:nowrap}.navbar-brand:hover,.navbar-brand:focus{color:var(--bs-navbar-brand-hover-color)}.navbar-nav{--bs-nav-link-padding-x: 0;--bs-nav-link-padding-y: 0.5rem;--bs-nav-link-font-weight: ;--bs-nav-link-color: var(--bs-navbar-color);--bs-nav-link-hover-color: var(--bs-navbar-hover-color);--bs-nav-link-disabled-color: var(--bs-navbar-disabled-color);display:flex;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .show>.nav-link,.navbar-nav .nav-link.active{color:var(--bs-navbar-active-color)}.navbar-nav .dropdown-menu{position:static}.navbar-text{padding-top:.5rem;padding-bottom:.5rem;color:var(--bs-navbar-color)}.navbar-text a,.navbar-text a:hover,.navbar-text a:focus{color:var(--bs-navbar-active-color)}.navbar-collapse{flex-basis:100%;flex-grow:1;align-items:center}.navbar-toggler{padding:var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);font-size:var(--bs-navbar-toggler-font-size);line-height:1;color:var(--bs-navbar-color);background-color:rgba(0,0,0,0);border:var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);border-radius:var(--bs-navbar-toggler-border-radius);transition:var(--bs-navbar-toggler-transition)}@media(prefers-reduced-motion: reduce){.navbar-toggler{transition:none}}.navbar-toggler:hover{text-decoration:none}.navbar-toggler:focus{text-decoration:none;outline:0;box-shadow:0 0 0 var(--bs-navbar-toggler-focus-width)}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;background-image:var(--bs-navbar-toggler-icon-bg);background-repeat:no-repeat;background-position:center;background-size:100%}.navbar-nav-scroll{max-height:var(--bs-scroll-height, 75vh);overflow-y:auto}@media(min-width: 576px){.navbar-expand-sm{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-sm .navbar-nav{flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-sm .navbar-nav-scroll{overflow:visible}.navbar-expand-sm .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}.navbar-expand-sm .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-sm .offcanvas .offcanvas-header{display:none}.navbar-expand-sm .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 768px){.navbar-expand-md{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-md .navbar-nav{flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-md .navbar-nav-scroll{overflow:visible}.navbar-expand-md .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}.navbar-expand-md .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-md .offcanvas .offcanvas-header{display:none}.navbar-expand-md .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 992px){.navbar-expand-lg{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-lg .navbar-nav{flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-lg .navbar-nav-scroll{overflow:visible}.navbar-expand-lg .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}.navbar-expand-lg .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-lg .offcanvas .offcanvas-header{display:none}.navbar-expand-lg .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 1200px){.navbar-expand-xl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xl .navbar-nav{flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xl .navbar-nav-scroll{overflow:visible}.navbar-expand-xl .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}.navbar-expand-xl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-xl .offcanvas .offcanvas-header{display:none}.navbar-expand-xl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}@media(min-width: 1400px){.navbar-expand-xxl{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand-xxl .navbar-nav{flex-direction:row}.navbar-expand-xxl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xxl .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand-xxl .navbar-nav-scroll{overflow:visible}.navbar-expand-xxl .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand-xxl .navbar-toggler{display:none}.navbar-expand-xxl .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand-xxl .offcanvas .offcanvas-header{display:none}.navbar-expand-xxl .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}}.navbar-expand{flex-wrap:nowrap;justify-content:flex-start}.navbar-expand .navbar-nav{flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:var(--bs-navbar-nav-link-padding-x);padding-left:var(--bs-navbar-nav-link-padding-x)}.navbar-expand .navbar-nav-scroll{overflow:visible}.navbar-expand .navbar-collapse{display:flex !important;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-expand .offcanvas{position:static;z-index:auto;flex-grow:1;width:auto !important;height:auto !important;visibility:visible !important;background-color:rgba(0,0,0,0) !important;border:0 !important;transform:none !important;transition:none}.navbar-expand .offcanvas .offcanvas-header{display:none}.navbar-expand .offcanvas .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible}.navbar-dark{--bs-navbar-color: rgba(255, 255, 255, 0.55);--bs-navbar-hover-color: rgba(255, 255, 255, 0.75);--bs-navbar-disabled-color: rgba(255, 255, 255, 0.25);--bs-navbar-active-color: #fff;--bs-navbar-brand-color: #fff;--bs-navbar-brand-hover-color: #fff;--bs-navbar-toggler-border-color: rgba(255, 255, 255, 0.1);--bs-navbar-toggler-icon-bg: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.card{--bs-card-spacer-y: 1rem;--bs-card-spacer-x: 1rem;--bs-card-title-spacer-y: 0.5rem;--bs-card-border-width: 1px;--bs-card-border-color: var(--bs-border-color-translucent);--bs-card-border-radius: 0.375rem;--bs-card-box-shadow: ;--bs-card-inner-border-radius: calc(0.375rem - 1px);--bs-card-cap-padding-y: 0.5rem;--bs-card-cap-padding-x: 1rem;--bs-card-cap-bg: rgba(0, 0, 0, 0.03);--bs-card-cap-color: ;--bs-card-height: ;--bs-card-color: ;--bs-card-bg: #fff;--bs-card-img-overlay-padding: 1rem;--bs-card-group-margin: 0.75rem;position:relative;display:flex;flex-direction:column;min-width:0;height:var(--bs-card-height);word-wrap:break-word;background-color:var(--bs-card-bg);background-clip:border-box;border:var(--bs-card-border-width) solid var(--bs-card-border-color);border-radius:var(--bs-card-border-radius)}.card>hr{margin-right:0;margin-left:0}.card>.list-group{border-top:inherit;border-bottom:inherit}.card>.list-group:first-child{border-top-width:0;border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card>.list-group:last-child{border-bottom-width:0;border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}.card>.card-header+.list-group,.card>.list-group+.card-footer{border-top:0}.card-body{flex:1 1 auto;padding:var(--bs-card-spacer-y) var(--bs-card-spacer-x);color:var(--bs-card-color)}.card-title{margin-bottom:var(--bs-card-title-spacer-y)}.card-subtitle{margin-top:calc(-0.5*var(--bs-card-title-spacer-y));margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link+.card-link{margin-left:var(--bs-card-spacer-x)}.card-header{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);margin-bottom:0;color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-bottom:var(--bs-card-border-width) solid var(--bs-card-border-color)}.card-header:first-child{border-radius:var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius) 0 0}.card-footer{padding:var(--bs-card-cap-padding-y) var(--bs-card-cap-padding-x);color:var(--bs-card-cap-color);background-color:var(--bs-card-cap-bg);border-top:var(--bs-card-border-width) solid var(--bs-card-border-color)}.card-footer:last-child{border-radius:0 0 var(--bs-card-inner-border-radius) var(--bs-card-inner-border-radius)}.card-header-tabs{margin-right:calc(-0.5*var(--bs-card-cap-padding-x));margin-bottom:calc(-1*var(--bs-card-cap-padding-y));margin-left:calc(-0.5*var(--bs-card-cap-padding-x));border-bottom:0}.card-header-tabs .nav-link.active{background-color:var(--bs-card-bg);border-bottom-color:var(--bs-card-bg)}.card-header-pills{margin-right:calc(-0.5*var(--bs-card-cap-padding-x));margin-left:calc(-0.5*var(--bs-card-cap-padding-x))}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:var(--bs-card-img-overlay-padding);border-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-top,.card-img-bottom{width:100%}.card-img,.card-img-top{border-top-left-radius:var(--bs-card-inner-border-radius);border-top-right-radius:var(--bs-card-inner-border-radius)}.card-img,.card-img-bottom{border-bottom-right-radius:var(--bs-card-inner-border-radius);border-bottom-left-radius:var(--bs-card-inner-border-radius)}.card-group>.card{margin-bottom:var(--bs-card-group-margin)}@media(min-width: 576px){.card-group{display:flex;flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:not(:last-child) .card-img-top,.card-group>.card:not(:last-child) .card-header{border-top-right-radius:0}.card-group>.card:not(:last-child) .card-img-bottom,.card-group>.card:not(:last-child) .card-footer{border-bottom-right-radius:0}.card-group>.card:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:not(:first-child) .card-img-top,.card-group>.card:not(:first-child) .card-header{border-top-left-radius:0}.card-group>.card:not(:first-child) .card-img-bottom,.card-group>.card:not(:first-child) .card-footer{border-bottom-left-radius:0}}.accordion{--bs-accordion-color: #000;--bs-accordion-bg: #fff;--bs-accordion-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease;--bs-accordion-border-color: var(--bs-border-color);--bs-accordion-border-width: 1px;--bs-accordion-border-radius: 0.375rem;--bs-accordion-inner-border-radius: calc(0.375rem - 1px);--bs-accordion-btn-padding-x: 1.25rem;--bs-accordion-btn-padding-y: 1rem;--bs-accordion-btn-color: var(--bs-body-color);--bs-accordion-btn-bg: var(--bs-accordion-bg);--bs-accordion-btn-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='var%28--bs-body-color%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");--bs-accordion-btn-icon-width: 1.25rem;--bs-accordion-btn-icon-transform: rotate(-180deg);--bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;--bs-accordion-btn-active-icon: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%230c63e4'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\");--bs-accordion-btn-focus-border-color: #86b7fe;--bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);--bs-accordion-body-padding-x: 1.25rem;--bs-accordion-body-padding-y: 1rem;--bs-accordion-active-color: #0c63e4;--bs-accordion-active-bg: #e7f1ff}.accordion-button{position:relative;display:flex;align-items:center;width:100%;padding:var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);font-size:1rem;color:var(--bs-accordion-btn-color);text-align:left;background-color:var(--bs-accordion-btn-bg);border:0;border-radius:0;overflow-anchor:none;transition:var(--bs-accordion-transition)}@media(prefers-reduced-motion: reduce){.accordion-button{transition:none}}.accordion-button:not(.collapsed){color:var(--bs-accordion-active-color);background-color:var(--bs-accordion-active-bg);box-shadow:inset 0 calc(var(--bs-accordion-border-width)*-1) 0 var(--bs-accordion-border-color)}.accordion-button:not(.collapsed)::after{background-image:var(--bs-accordion-btn-active-icon);transform:var(--bs-accordion-btn-icon-transform)}.accordion-button::after{flex-shrink:0;width:var(--bs-accordion-btn-icon-width);height:var(--bs-accordion-btn-icon-width);margin-left:auto;content:\"\";background-image:var(--bs-accordion-btn-icon);background-repeat:no-repeat;background-size:var(--bs-accordion-btn-icon-width);transition:var(--bs-accordion-btn-icon-transition)}@media(prefers-reduced-motion: reduce){.accordion-button::after{transition:none}}.accordion-button:hover{z-index:2}.accordion-button:focus{z-index:3;border-color:var(--bs-accordion-btn-focus-border-color);outline:0;box-shadow:var(--bs-accordion-btn-focus-box-shadow)}.accordion-header{margin-bottom:0}.accordion-item{color:var(--bs-accordion-color);background-color:var(--bs-accordion-bg);border:var(--bs-accordion-border-width) solid var(--bs-accordion-border-color)}.accordion-item:first-of-type{border-top-left-radius:var(--bs-accordion-border-radius);border-top-right-radius:var(--bs-accordion-border-radius)}.accordion-item:first-of-type .accordion-button{border-top-left-radius:var(--bs-accordion-inner-border-radius);border-top-right-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:not(:first-of-type){border-top:0}.accordion-item:last-of-type{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-item:last-of-type .accordion-button.collapsed{border-bottom-right-radius:var(--bs-accordion-inner-border-radius);border-bottom-left-radius:var(--bs-accordion-inner-border-radius)}.accordion-item:last-of-type .accordion-collapse{border-bottom-right-radius:var(--bs-accordion-border-radius);border-bottom-left-radius:var(--bs-accordion-border-radius)}.accordion-body{padding:var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x)}.accordion-flush .accordion-collapse{border-width:0}.accordion-flush .accordion-item{border-right:0;border-left:0;border-radius:0}.accordion-flush .accordion-item:first-child{border-top:0}.accordion-flush .accordion-item:last-child{border-bottom:0}.accordion-flush .accordion-item .accordion-button{border-radius:0}.breadcrumb{--bs-breadcrumb-padding-x: 0;--bs-breadcrumb-padding-y: 0;--bs-breadcrumb-margin-bottom: 1rem;--bs-breadcrumb-bg: ;--bs-breadcrumb-border-radius: ;--bs-breadcrumb-divider-color: #6c757d;--bs-breadcrumb-item-padding-x: 0.5rem;--bs-breadcrumb-item-active-color: #6c757d;display:flex;flex-wrap:wrap;padding:var(--bs-breadcrumb-padding-y) var(--bs-breadcrumb-padding-x);margin-bottom:var(--bs-breadcrumb-margin-bottom);font-size:var(--bs-breadcrumb-font-size);list-style:none;background-color:var(--bs-breadcrumb-bg);border-radius:var(--bs-breadcrumb-border-radius)}.breadcrumb-item+.breadcrumb-item{padding-left:var(--bs-breadcrumb-item-padding-x)}.breadcrumb-item+.breadcrumb-item::before{float:left;padding-right:var(--bs-breadcrumb-item-padding-x);color:var(--bs-breadcrumb-divider-color);content:var(--bs-breadcrumb-divider, \"/\") /* rtl: var(--bs-breadcrumb-divider, \"/\") */}.breadcrumb-item.active{color:var(--bs-breadcrumb-item-active-color)}.pagination{--bs-pagination-padding-x: 0.75rem;--bs-pagination-padding-y: 0.375rem;--bs-pagination-font-size:1rem;--bs-pagination-color: var(--bs-link-color);--bs-pagination-bg: #fff;--bs-pagination-border-width: 1px;--bs-pagination-border-color: #dee2e6;--bs-pagination-border-radius: 0.375rem;--bs-pagination-hover-color: var(--bs-link-hover-color);--bs-pagination-hover-bg: #e9ecef;--bs-pagination-hover-border-color: #dee2e6;--bs-pagination-focus-color: var(--bs-link-hover-color);--bs-pagination-focus-bg: #e9ecef;--bs-pagination-focus-box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);--bs-pagination-active-color: #fff;--bs-pagination-active-bg: #0d6efd;--bs-pagination-active-border-color: #0d6efd;--bs-pagination-disabled-color: #6c757d;--bs-pagination-disabled-bg: #fff;--bs-pagination-disabled-border-color: #dee2e6;display:flex;padding-left:0;list-style:none}.page-link{position:relative;display:block;padding:var(--bs-pagination-padding-y) var(--bs-pagination-padding-x);font-size:var(--bs-pagination-font-size);color:var(--bs-pagination-color);text-decoration:none;background-color:var(--bs-pagination-bg);border:var(--bs-pagination-border-width) solid var(--bs-pagination-border-color);transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){.page-link{transition:none}}.page-link:hover{z-index:2;color:var(--bs-pagination-hover-color);background-color:var(--bs-pagination-hover-bg);border-color:var(--bs-pagination-hover-border-color)}.page-link:focus{z-index:3;color:var(--bs-pagination-focus-color);background-color:var(--bs-pagination-focus-bg);outline:0;box-shadow:var(--bs-pagination-focus-box-shadow)}.page-link.active,.active>.page-link{z-index:3;color:var(--bs-pagination-active-color);background-color:var(--bs-pagination-active-bg);border-color:var(--bs-pagination-active-border-color)}.page-link.disabled,.disabled>.page-link{color:var(--bs-pagination-disabled-color);pointer-events:none;background-color:var(--bs-pagination-disabled-bg);border-color:var(--bs-pagination-disabled-border-color)}.page-item:not(:first-child) .page-link{margin-left:-1px}.page-item:first-child .page-link{border-top-left-radius:var(--bs-pagination-border-radius);border-bottom-left-radius:var(--bs-pagination-border-radius)}.page-item:last-child .page-link{border-top-right-radius:var(--bs-pagination-border-radius);border-bottom-right-radius:var(--bs-pagination-border-radius)}.pagination-lg{--bs-pagination-padding-x: 1.5rem;--bs-pagination-padding-y: 0.75rem;--bs-pagination-font-size:1.25rem;--bs-pagination-border-radius: 0.5rem}.pagination-sm{--bs-pagination-padding-x: 0.5rem;--bs-pagination-padding-y: 0.25rem;--bs-pagination-font-size:0.875rem;--bs-pagination-border-radius: 0.25rem}.badge{--bs-badge-padding-x: 0.65em;--bs-badge-padding-y: 0.35em;--bs-badge-font-size:0.75em;--bs-badge-font-weight: 700;--bs-badge-color: #fff;--bs-badge-border-radius: 0.375rem;display:inline-block;padding:var(--bs-badge-padding-y) var(--bs-badge-padding-x);font-size:var(--bs-badge-font-size);font-weight:var(--bs-badge-font-weight);line-height:1;color:var(--bs-badge-color);text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:var(--bs-badge-border-radius)}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.alert{--bs-alert-bg: transparent;--bs-alert-padding-x: 1rem;--bs-alert-padding-y: 1rem;--bs-alert-margin-bottom: 1rem;--bs-alert-color: inherit;--bs-alert-border-color: transparent;--bs-alert-border: 1px solid var(--bs-alert-border-color);--bs-alert-border-radius: 0.375rem;position:relative;padding:var(--bs-alert-padding-y) var(--bs-alert-padding-x);margin-bottom:var(--bs-alert-margin-bottom);color:var(--bs-alert-color);background-color:var(--bs-alert-bg);border:var(--bs-alert-border);border-radius:var(--bs-alert-border-radius)}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:3rem}.alert-dismissible .btn-close{position:absolute;top:0;right:0;z-index:2;padding:1.25rem 1rem}.alert-primary{--bs-alert-color: #084298;--bs-alert-bg: #cfe2ff;--bs-alert-border-color: #b6d4fe}.alert-primary .alert-link{color:#06357a}.alert-secondary{--bs-alert-color: #41464b;--bs-alert-bg: #e2e3e5;--bs-alert-border-color: #d3d6d8}.alert-secondary .alert-link{color:#34383c}.alert-success{--bs-alert-color: #0f5132;--bs-alert-bg: #d1e7dd;--bs-alert-border-color: #badbcc}.alert-success .alert-link{color:#0c4128}.alert-info{--bs-alert-color: #055160;--bs-alert-bg: #cff4fc;--bs-alert-border-color: #b6effb}.alert-info .alert-link{color:#04414d}.alert-warning{--bs-alert-color: #664d03;--bs-alert-bg: #fff3cd;--bs-alert-border-color: #ffecb5}.alert-warning .alert-link{color:#523e02}.alert-danger{--bs-alert-color: #842029;--bs-alert-bg: #f8d7da;--bs-alert-border-color: #f5c2c7}.alert-danger .alert-link{color:#6a1a21}.alert-light{--bs-alert-color: #636464;--bs-alert-bg: #fefefe;--bs-alert-border-color: #fdfdfe}.alert-light .alert-link{color:#4f5050}.alert-dark{--bs-alert-color: #141619;--bs-alert-bg: #d3d3d4;--bs-alert-border-color: #bcbebf}.alert-dark .alert-link{color:#101214}@keyframes progress-bar-stripes{0%{background-position-x:1rem}}.progress{--bs-progress-height: 1rem;--bs-progress-font-size:0.75rem;--bs-progress-bg: #e9ecef;--bs-progress-border-radius: 0.375rem;--bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);--bs-progress-bar-color: #fff;--bs-progress-bar-bg: #0d6efd;--bs-progress-bar-transition: width 0.6s ease;display:flex;height:var(--bs-progress-height);overflow:hidden;font-size:var(--bs-progress-font-size);background-color:var(--bs-progress-bg);border-radius:var(--bs-progress-border-radius)}.progress-bar{display:flex;flex-direction:column;justify-content:center;overflow:hidden;color:var(--bs-progress-bar-color);text-align:center;white-space:nowrap;background-color:var(--bs-progress-bar-bg);transition:var(--bs-progress-bar-transition)}@media(prefers-reduced-motion: reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);background-size:var(--bs-progress-height) var(--bs-progress-height)}.progress-bar-animated{animation:1s linear infinite progress-bar-stripes}@media(prefers-reduced-motion: reduce){.progress-bar-animated{animation:none}}.list-group{--bs-list-group-color: #212529;--bs-list-group-bg: #fff;--bs-list-group-border-color: rgba(0, 0, 0, 0.125);--bs-list-group-border-width: 1px;--bs-list-group-border-radius: 0.375rem;--bs-list-group-item-padding-x: 1rem;--bs-list-group-item-padding-y: 0.5rem;--bs-list-group-action-color: #495057;--bs-list-group-action-hover-color: #495057;--bs-list-group-action-hover-bg: #f8f9fa;--bs-list-group-action-active-color: #212529;--bs-list-group-action-active-bg: #e9ecef;--bs-list-group-disabled-color: #6c757d;--bs-list-group-disabled-bg: #fff;--bs-list-group-active-color: #fff;--bs-list-group-active-bg: #0d6efd;--bs-list-group-active-border-color: #0d6efd;display:flex;flex-direction:column;padding-left:0;margin-bottom:0;border-radius:var(--bs-list-group-border-radius)}.list-group-numbered{list-style-type:none;counter-reset:section}.list-group-numbered>.list-group-item::before{content:counters(section, \".\") \". \";counter-increment:section}.list-group-item-action{width:100%;color:var(--bs-list-group-action-color);text-align:inherit}.list-group-item-action:hover,.list-group-item-action:focus{z-index:1;color:var(--bs-list-group-action-hover-color);text-decoration:none;background-color:var(--bs-list-group-action-hover-bg)}.list-group-item-action:active{color:var(--bs-list-group-action-active-color);background-color:var(--bs-list-group-action-active-bg)}.list-group-item{position:relative;display:block;padding:var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);color:var(--bs-list-group-color);text-decoration:none;background-color:var(--bs-list-group-bg);border:var(--bs-list-group-border-width) solid var(--bs-list-group-border-color)}.list-group-item:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.list-group-item:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.list-group-item.disabled,.list-group-item:disabled{color:var(--bs-list-group-disabled-color);pointer-events:none;background-color:var(--bs-list-group-disabled-bg)}.list-group-item.active{z-index:2;color:var(--bs-list-group-active-color);background-color:var(--bs-list-group-active-bg);border-color:var(--bs-list-group-active-border-color)}.list-group-item+.list-group-item{border-top-width:0}.list-group-item+.list-group-item.active{margin-top:calc(var(--bs-list-group-border-width)*-1);border-top-width:var(--bs-list-group-border-width)}.list-group-horizontal{flex-direction:row}.list-group-horizontal>.list-group-item:first-child{border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal>.list-group-item:last-child{border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal>.list-group-item.active{margin-top:0}.list-group-horizontal>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal>.list-group-item+.list-group-item.active{margin-left:calc(var(--bs-list-group-border-width)*-1);border-left-width:var(--bs-list-group-border-width)}@media(min-width: 576px){.list-group-horizontal-sm{flex-direction:row}.list-group-horizontal-sm>.list-group-item:first-child{border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-sm>.list-group-item:last-child{border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-sm>.list-group-item.active{margin-top:0}.list-group-horizontal-sm>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-sm>.list-group-item+.list-group-item.active{margin-left:calc(var(--bs-list-group-border-width)*-1);border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 768px){.list-group-horizontal-md{flex-direction:row}.list-group-horizontal-md>.list-group-item:first-child{border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-md>.list-group-item:last-child{border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-md>.list-group-item.active{margin-top:0}.list-group-horizontal-md>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-md>.list-group-item+.list-group-item.active{margin-left:calc(var(--bs-list-group-border-width)*-1);border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 992px){.list-group-horizontal-lg{flex-direction:row}.list-group-horizontal-lg>.list-group-item:first-child{border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-lg>.list-group-item:last-child{border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-lg>.list-group-item.active{margin-top:0}.list-group-horizontal-lg>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-lg>.list-group-item+.list-group-item.active{margin-left:calc(var(--bs-list-group-border-width)*-1);border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 1200px){.list-group-horizontal-xl{flex-direction:row}.list-group-horizontal-xl>.list-group-item:first-child{border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xl>.list-group-item:last-child{border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xl>.list-group-item.active{margin-top:0}.list-group-horizontal-xl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xl>.list-group-item+.list-group-item.active{margin-left:calc(var(--bs-list-group-border-width)*-1);border-left-width:var(--bs-list-group-border-width)}}@media(min-width: 1400px){.list-group-horizontal-xxl{flex-direction:row}.list-group-horizontal-xxl>.list-group-item:first-child{border-bottom-left-radius:var(--bs-list-group-border-radius);border-top-right-radius:0}.list-group-horizontal-xxl>.list-group-item:last-child{border-top-right-radius:var(--bs-list-group-border-radius);border-bottom-left-radius:0}.list-group-horizontal-xxl>.list-group-item.active{margin-top:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item{border-top-width:var(--bs-list-group-border-width);border-left-width:0}.list-group-horizontal-xxl>.list-group-item+.list-group-item.active{margin-left:calc(var(--bs-list-group-border-width)*-1);border-left-width:var(--bs-list-group-border-width)}}.list-group-flush{border-radius:0}.list-group-flush>.list-group-item{border-width:0 0 var(--bs-list-group-border-width)}.list-group-flush>.list-group-item:last-child{border-bottom-width:0}.list-group-item-primary{color:#084298;background-color:#cfe2ff}.list-group-item-primary.list-group-item-action:hover,.list-group-item-primary.list-group-item-action:focus{color:#084298;background-color:#bacbe6}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#084298;border-color:#084298}.list-group-item-secondary{color:#41464b;background-color:#e2e3e5}.list-group-item-secondary.list-group-item-action:hover,.list-group-item-secondary.list-group-item-action:focus{color:#41464b;background-color:#cbccce}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#41464b;border-color:#41464b}.list-group-item-success{color:#0f5132;background-color:#d1e7dd}.list-group-item-success.list-group-item-action:hover,.list-group-item-success.list-group-item-action:focus{color:#0f5132;background-color:#bcd0c7}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#0f5132;border-color:#0f5132}.list-group-item-info{color:#055160;background-color:#cff4fc}.list-group-item-info.list-group-item-action:hover,.list-group-item-info.list-group-item-action:focus{color:#055160;background-color:#badce3}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#055160;border-color:#055160}.list-group-item-warning{color:#664d03;background-color:#fff3cd}.list-group-item-warning.list-group-item-action:hover,.list-group-item-warning.list-group-item-action:focus{color:#664d03;background-color:#e6dbb9}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#664d03;border-color:#664d03}.list-group-item-danger{color:#842029;background-color:#f8d7da}.list-group-item-danger.list-group-item-action:hover,.list-group-item-danger.list-group-item-action:focus{color:#842029;background-color:#dfc2c4}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#842029;border-color:#842029}.list-group-item-light{color:#636464;background-color:#fefefe}.list-group-item-light.list-group-item-action:hover,.list-group-item-light.list-group-item-action:focus{color:#636464;background-color:#e5e5e5}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#636464;border-color:#636464}.list-group-item-dark{color:#141619;background-color:#d3d3d4}.list-group-item-dark.list-group-item-action:hover,.list-group-item-dark.list-group-item-action:focus{color:#141619;background-color:#bebebf}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#141619;border-color:#141619}.btn-close{box-sizing:content-box;width:1em;height:1em;padding:.25em .25em;color:#000;background:rgba(0,0,0,0) url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e\") center/1em auto no-repeat;border:0;border-radius:.375rem;opacity:.5}.btn-close:hover{color:#000;text-decoration:none;opacity:.75}.btn-close:focus{outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25);opacity:1}.btn-close:disabled,.btn-close.disabled{pointer-events:none;user-select:none;opacity:.25}.btn-close-white{filter:invert(1) grayscale(100%) brightness(200%)}.toast{--bs-toast-padding-x: 0.75rem;--bs-toast-padding-y: 0.5rem;--bs-toast-spacing: 1.5rem;--bs-toast-max-width: 350px;--bs-toast-font-size:0.875rem;--bs-toast-color: ;--bs-toast-bg: rgba(255, 255, 255, 0.85);--bs-toast-border-width: 1px;--bs-toast-border-color: var(--bs-border-color-translucent);--bs-toast-border-radius: 0.375rem;--bs-toast-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-toast-header-color: #6c757d;--bs-toast-header-bg: rgba(255, 255, 255, 0.85);--bs-toast-header-border-color: rgba(0, 0, 0, 0.05);width:var(--bs-toast-max-width);max-width:100%;font-size:var(--bs-toast-font-size);color:var(--bs-toast-color);pointer-events:auto;background-color:var(--bs-toast-bg);background-clip:padding-box;border:var(--bs-toast-border-width) solid var(--bs-toast-border-color);box-shadow:var(--bs-toast-box-shadow);border-radius:var(--bs-toast-border-radius)}.toast.showing{opacity:0}.toast:not(.show){display:none}.toast-container{position:absolute;z-index:1090;width:max-content;max-width:100%;pointer-events:none}.toast-container>:not(:last-child){margin-bottom:var(--bs-toast-spacing)}.toast-header{display:flex;align-items:center;padding:var(--bs-toast-padding-y) var(--bs-toast-padding-x);color:var(--bs-toast-header-color);background-color:var(--bs-toast-header-bg);background-clip:padding-box;border-bottom:var(--bs-toast-border-width) solid var(--bs-toast-header-border-color);border-top-left-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width));border-top-right-radius:calc(var(--bs-toast-border-radius) - var(--bs-toast-border-width))}.toast-header .btn-close{margin-right:calc(var(--bs-toast-padding-x)*-0.5);margin-left:var(--bs-toast-padding-x)}.toast-body{padding:var(--bs-toast-padding-x);word-wrap:break-word}.modal{--bs-modal-zindex: 1055;--bs-modal-width: 500px;--bs-modal-padding: 1rem;--bs-modal-margin: 0.5rem;--bs-modal-color: ;--bs-modal-bg: #fff;--bs-modal-border-color: var(--bs-border-color-translucent);--bs-modal-border-width: 1px;--bs-modal-border-radius: 0.5rem;--bs-modal-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);--bs-modal-inner-border-radius: calc(0.5rem - 1px);--bs-modal-header-padding-x: 1rem;--bs-modal-header-padding-y: 1rem;--bs-modal-header-padding: 1rem 1rem;--bs-modal-header-border-color: var(--bs-border-color);--bs-modal-header-border-width: 1px;--bs-modal-title-line-height: 1.5;--bs-modal-footer-gap: 0.5rem;--bs-modal-footer-bg: ;--bs-modal-footer-border-color: var(--bs-border-color);--bs-modal-footer-border-width: 1px;position:fixed;top:0;left:0;z-index:var(--bs-modal-zindex);display:none;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0}.modal-dialog{position:relative;width:auto;margin:var(--bs-modal-margin);pointer-events:none}.modal.fade .modal-dialog{transition:transform .3s ease-out;transform:translate(0, -50px)}@media(prefers-reduced-motion: reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{transform:none}.modal.modal-static .modal-dialog{transform:scale(1.02)}.modal-dialog-scrollable{height:calc(100% - var(--bs-modal-margin)*2)}.modal-dialog-scrollable .modal-content{max-height:100%;overflow:hidden}.modal-dialog-scrollable .modal-body{overflow-y:auto}.modal-dialog-centered{display:flex;align-items:center;min-height:calc(100% - var(--bs-modal-margin)*2)}.modal-content{position:relative;display:flex;flex-direction:column;width:100%;color:var(--bs-modal-color);pointer-events:auto;background-color:var(--bs-modal-bg);background-clip:padding-box;border:var(--bs-modal-border-width) solid var(--bs-modal-border-color);border-radius:var(--bs-modal-border-radius);outline:0}.modal-backdrop{--bs-backdrop-zindex: 1050;--bs-backdrop-bg: #000;--bs-backdrop-opacity: 0.5;position:fixed;top:0;left:0;z-index:var(--bs-backdrop-zindex);width:100vw;height:100vh;background-color:var(--bs-backdrop-bg)}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:var(--bs-backdrop-opacity)}.modal-header{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:var(--bs-modal-header-padding);border-bottom:var(--bs-modal-header-border-width) solid var(--bs-modal-header-border-color);border-top-left-radius:var(--bs-modal-inner-border-radius);border-top-right-radius:var(--bs-modal-inner-border-radius)}.modal-header .btn-close{padding:calc(var(--bs-modal-header-padding-y)*.5) calc(var(--bs-modal-header-padding-x)*.5);margin:calc(var(--bs-modal-header-padding-y)*-0.5) calc(var(--bs-modal-header-padding-x)*-0.5) calc(var(--bs-modal-header-padding-y)*-0.5) auto}.modal-title{margin-bottom:0;line-height:var(--bs-modal-title-line-height)}.modal-body{position:relative;flex:1 1 auto;padding:var(--bs-modal-padding)}.modal-footer{display:flex;flex-shrink:0;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:calc(var(--bs-modal-padding) - var(--bs-modal-footer-gap)*.5);background-color:var(--bs-modal-footer-bg);border-top:var(--bs-modal-footer-border-width) solid var(--bs-modal-footer-border-color);border-bottom-right-radius:var(--bs-modal-inner-border-radius);border-bottom-left-radius:var(--bs-modal-inner-border-radius)}.modal-footer>*{margin:calc(var(--bs-modal-footer-gap)*.5)}@media(min-width: 576px){.modal{--bs-modal-margin: 1.75rem;--bs-modal-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15)}.modal-dialog{max-width:var(--bs-modal-width);margin-right:auto;margin-left:auto}.modal-sm{--bs-modal-width: 300px}}@media(min-width: 992px){.modal-lg,.modal-xl{--bs-modal-width: 800px}}@media(min-width: 1200px){.modal-xl{--bs-modal-width: 1140px}}.modal-fullscreen{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen .modal-header,.modal-fullscreen .modal-footer{border-radius:0}.modal-fullscreen .modal-body{overflow-y:auto}@media(max-width: 575.98px){.modal-fullscreen-sm-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-sm-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-sm-down .modal-header,.modal-fullscreen-sm-down .modal-footer{border-radius:0}.modal-fullscreen-sm-down .modal-body{overflow-y:auto}}@media(max-width: 767.98px){.modal-fullscreen-md-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-md-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-md-down .modal-header,.modal-fullscreen-md-down .modal-footer{border-radius:0}.modal-fullscreen-md-down .modal-body{overflow-y:auto}}@media(max-width: 991.98px){.modal-fullscreen-lg-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-lg-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-lg-down .modal-header,.modal-fullscreen-lg-down .modal-footer{border-radius:0}.modal-fullscreen-lg-down .modal-body{overflow-y:auto}}@media(max-width: 1199.98px){.modal-fullscreen-xl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xl-down .modal-header,.modal-fullscreen-xl-down .modal-footer{border-radius:0}.modal-fullscreen-xl-down .modal-body{overflow-y:auto}}@media(max-width: 1399.98px){.modal-fullscreen-xxl-down{width:100vw;max-width:none;height:100%;margin:0}.modal-fullscreen-xxl-down .modal-content{height:100%;border:0;border-radius:0}.modal-fullscreen-xxl-down .modal-header,.modal-fullscreen-xxl-down .modal-footer{border-radius:0}.modal-fullscreen-xxl-down .modal-body{overflow-y:auto}}.tooltip{--bs-tooltip-zindex: 1080;--bs-tooltip-max-width: 200px;--bs-tooltip-padding-x: 0.5rem;--bs-tooltip-padding-y: 0.25rem;--bs-tooltip-margin: ;--bs-tooltip-font-size:0.875rem;--bs-tooltip-color: #fff;--bs-tooltip-bg: #000;--bs-tooltip-border-radius: 0.375rem;--bs-tooltip-opacity: 0.9;--bs-tooltip-arrow-width: 0.8rem;--bs-tooltip-arrow-height: 0.4rem;z-index:var(--bs-tooltip-zindex);display:block;padding:var(--bs-tooltip-arrow-height);margin:var(--bs-tooltip-margin);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-tooltip-font-size);word-wrap:break-word;opacity:0}.tooltip.show{opacity:var(--bs-tooltip-opacity)}.tooltip .tooltip-arrow{display:block;width:var(--bs-tooltip-arrow-width);height:var(--bs-tooltip-arrow-height)}.tooltip .tooltip-arrow::before{position:absolute;content:\"\";border-color:rgba(0,0,0,0);border-style:solid}.bs-tooltip-top .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow{bottom:0}.bs-tooltip-top .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=top] .tooltip-arrow::before{top:-1px;border-width:var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width)*.5) 0;border-top-color:var(--bs-tooltip-bg)}.bs-tooltip-end .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow{left:0;width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-end .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=right] .tooltip-arrow::before{right:-1px;border-width:calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height) calc(var(--bs-tooltip-arrow-width)*.5) 0;border-right-color:var(--bs-tooltip-bg)}.bs-tooltip-bottom .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow{top:0}.bs-tooltip-bottom .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=bottom] .tooltip-arrow::before{bottom:-1px;border-width:0 calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height);border-bottom-color:var(--bs-tooltip-bg)}.bs-tooltip-start .tooltip-arrow,.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow{right:0;width:var(--bs-tooltip-arrow-height);height:var(--bs-tooltip-arrow-width)}.bs-tooltip-start .tooltip-arrow::before,.bs-tooltip-auto[data-popper-placement^=left] .tooltip-arrow::before{left:-1px;border-width:calc(var(--bs-tooltip-arrow-width)*.5) 0 calc(var(--bs-tooltip-arrow-width)*.5) var(--bs-tooltip-arrow-height);border-left-color:var(--bs-tooltip-bg)}.tooltip-inner{max-width:var(--bs-tooltip-max-width);padding:var(--bs-tooltip-padding-y) var(--bs-tooltip-padding-x);color:var(--bs-tooltip-color);text-align:center;background-color:var(--bs-tooltip-bg);border-radius:var(--bs-tooltip-border-radius)}.popover{--bs-popover-zindex: 1070;--bs-popover-max-width: 276px;--bs-popover-font-size:0.875rem;--bs-popover-bg: #fff;--bs-popover-border-width: 1px;--bs-popover-border-color: var(--bs-border-color-translucent);--bs-popover-border-radius: 0.5rem;--bs-popover-inner-border-radius: calc(0.5rem - 1px);--bs-popover-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);--bs-popover-header-padding-x: 1rem;--bs-popover-header-padding-y: 0.5rem;--bs-popover-header-font-size:1rem;--bs-popover-header-color: var(--bs-heading-color);--bs-popover-header-bg: #f0f0f0;--bs-popover-body-padding-x: 1rem;--bs-popover-body-padding-y: 1rem;--bs-popover-body-color: #212529;--bs-popover-arrow-width: 1rem;--bs-popover-arrow-height: 0.5rem;--bs-popover-arrow-border: var(--bs-popover-border-color);z-index:var(--bs-popover-zindex);display:block;max-width:var(--bs-popover-max-width);font-family:var(--bs-font-sans-serif);font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;white-space:normal;word-spacing:normal;line-break:auto;font-size:var(--bs-popover-font-size);word-wrap:break-word;background-color:var(--bs-popover-bg);background-clip:padding-box;border:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-radius:var(--bs-popover-border-radius)}.popover .popover-arrow{display:block;width:var(--bs-popover-arrow-width);height:var(--bs-popover-arrow-height)}.popover .popover-arrow::before,.popover .popover-arrow::after{position:absolute;display:block;content:\"\";border-color:rgba(0,0,0,0);border-style:solid;border-width:0}.bs-popover-top>.popover-arrow,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow{bottom:calc(var(--bs-popover-arrow-height)*-1 - var(--bs-popover-border-width))}.bs-popover-top>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before,.bs-popover-top>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after{border-width:var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width)*.5) 0}.bs-popover-top>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::before{bottom:0;border-top-color:var(--bs-popover-arrow-border)}.bs-popover-top>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=top]>.popover-arrow::after{bottom:var(--bs-popover-border-width);border-top-color:var(--bs-popover-bg)}.bs-popover-end>.popover-arrow,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow{left:calc(var(--bs-popover-arrow-height)*-1 - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-end>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before,.bs-popover-end>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after{border-width:calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height) calc(var(--bs-popover-arrow-width)*.5) 0}.bs-popover-end>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::before{left:0;border-right-color:var(--bs-popover-arrow-border)}.bs-popover-end>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=right]>.popover-arrow::after{left:var(--bs-popover-border-width);border-right-color:var(--bs-popover-bg)}.bs-popover-bottom>.popover-arrow,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow{top:calc(var(--bs-popover-arrow-height)*-1 - var(--bs-popover-border-width))}.bs-popover-bottom>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before,.bs-popover-bottom>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after{border-width:0 calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height)}.bs-popover-bottom>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::before{top:0;border-bottom-color:var(--bs-popover-arrow-border)}.bs-popover-bottom>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=bottom]>.popover-arrow::after{top:var(--bs-popover-border-width);border-bottom-color:var(--bs-popover-bg)}.bs-popover-bottom .popover-header::before,.bs-popover-auto[data-popper-placement^=bottom] .popover-header::before{position:absolute;top:0;left:50%;display:block;width:var(--bs-popover-arrow-width);margin-left:calc(var(--bs-popover-arrow-width)*-0.5);content:\"\";border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-header-bg)}.bs-popover-start>.popover-arrow,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow{right:calc(var(--bs-popover-arrow-height)*-1 - var(--bs-popover-border-width));width:var(--bs-popover-arrow-height);height:var(--bs-popover-arrow-width)}.bs-popover-start>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before,.bs-popover-start>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after{border-width:calc(var(--bs-popover-arrow-width)*.5) 0 calc(var(--bs-popover-arrow-width)*.5) var(--bs-popover-arrow-height)}.bs-popover-start>.popover-arrow::before,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::before{right:0;border-left-color:var(--bs-popover-arrow-border)}.bs-popover-start>.popover-arrow::after,.bs-popover-auto[data-popper-placement^=left]>.popover-arrow::after{right:var(--bs-popover-border-width);border-left-color:var(--bs-popover-bg)}.popover-header{padding:var(--bs-popover-header-padding-y) var(--bs-popover-header-padding-x);margin-bottom:0;font-size:var(--bs-popover-header-font-size);color:var(--bs-popover-header-color);background-color:var(--bs-popover-header-bg);border-bottom:var(--bs-popover-border-width) solid var(--bs-popover-border-color);border-top-left-radius:var(--bs-popover-inner-border-radius);border-top-right-radius:var(--bs-popover-inner-border-radius)}.popover-header:empty{display:none}.popover-body{padding:var(--bs-popover-body-padding-y) var(--bs-popover-body-padding-x);color:var(--bs-popover-body-color)}.carousel{position:relative}.carousel.pointer-event{touch-action:pan-y}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner::after{display:block;clear:both;content:\"\"}.carousel-item{position:relative;display:none;float:left;width:100%;margin-right:-100%;backface-visibility:hidden;transition:transform .6s ease-in-out}@media(prefers-reduced-motion: reduce){.carousel-item{transition:none}}.carousel-item.active,.carousel-item-next,.carousel-item-prev{display:block}.carousel-item-next:not(.carousel-item-start),.active.carousel-item-end{transform:translateX(100%)}.carousel-item-prev:not(.carousel-item-end),.active.carousel-item-start{transform:translateX(-100%)}.carousel-fade .carousel-item{opacity:0;transition-property:opacity;transform:none}.carousel-fade .carousel-item.active,.carousel-fade .carousel-item-next.carousel-item-start,.carousel-fade .carousel-item-prev.carousel-item-end{z-index:1;opacity:1}.carousel-fade .active.carousel-item-start,.carousel-fade .active.carousel-item-end{z-index:0;opacity:0;transition:opacity 0s .6s}@media(prefers-reduced-motion: reduce){.carousel-fade .active.carousel-item-start,.carousel-fade .active.carousel-item-end{transition:none}}.carousel-control-prev,.carousel-control-next{position:absolute;top:0;bottom:0;z-index:1;display:flex;align-items:center;justify-content:center;width:15%;padding:0;color:#fff;text-align:center;background:none;border:0;opacity:.5;transition:opacity .15s ease}@media(prefers-reduced-motion: reduce){.carousel-control-prev,.carousel-control-next{transition:none}}.carousel-control-prev:hover,.carousel-control-prev:focus,.carousel-control-next:hover,.carousel-control-next:focus{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-prev-icon,.carousel-control-next-icon{display:inline-block;width:2rem;height:2rem;background-repeat:no-repeat;background-position:50%;background-size:100% 100%}.carousel-control-prev-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e\")}.carousel-control-next-icon{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e\")}.carousel-indicators{position:absolute;right:0;bottom:0;left:0;z-index:2;display:flex;justify-content:center;padding:0;margin-right:15%;margin-bottom:1rem;margin-left:15%;list-style:none}.carousel-indicators [data-bs-target]{box-sizing:content-box;flex:0 1 auto;width:30px;height:3px;padding:0;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border:0;border-top:10px solid rgba(0,0,0,0);border-bottom:10px solid rgba(0,0,0,0);opacity:.5;transition:opacity .6s ease}@media(prefers-reduced-motion: reduce){.carousel-indicators [data-bs-target]{transition:none}}.carousel-indicators .active{opacity:1}.carousel-caption{position:absolute;right:15%;bottom:1.25rem;left:15%;padding-top:1.25rem;padding-bottom:1.25rem;color:#fff;text-align:center}.carousel-dark .carousel-control-prev-icon,.carousel-dark .carousel-control-next-icon{filter:invert(1) grayscale(100)}.carousel-dark .carousel-indicators [data-bs-target]{background-color:#000}.carousel-dark .carousel-caption{color:#000}.spinner-grow,.spinner-border{display:inline-block;width:var(--bs-spinner-width);height:var(--bs-spinner-height);vertical-align:var(--bs-spinner-vertical-align);border-radius:50%;animation:var(--bs-spinner-animation-speed) linear infinite var(--bs-spinner-animation-name)}@keyframes spinner-border{to{transform:rotate(360deg) /* rtl:ignore */}}.spinner-border{--bs-spinner-width: 2rem;--bs-spinner-height: 2rem;--bs-spinner-vertical-align: -0.125em;--bs-spinner-border-width: 0.25em;--bs-spinner-animation-speed: 0.75s;--bs-spinner-animation-name: spinner-border;border:var(--bs-spinner-border-width) solid currentcolor;border-right-color:rgba(0,0,0,0)}.spinner-border-sm{--bs-spinner-width: 1rem;--bs-spinner-height: 1rem;--bs-spinner-border-width: 0.2em}@keyframes spinner-grow{0%{transform:scale(0)}50%{opacity:1;transform:none}}.spinner-grow{--bs-spinner-width: 2rem;--bs-spinner-height: 2rem;--bs-spinner-vertical-align: -0.125em;--bs-spinner-animation-speed: 0.75s;--bs-spinner-animation-name: spinner-grow;background-color:currentcolor;opacity:0}.spinner-grow-sm{--bs-spinner-width: 1rem;--bs-spinner-height: 1rem}@media(prefers-reduced-motion: reduce){.spinner-border,.spinner-grow{--bs-spinner-animation-speed: 1.5s}}.offcanvas,.offcanvas-xxl,.offcanvas-xl,.offcanvas-lg,.offcanvas-md,.offcanvas-sm{--bs-offcanvas-width: 400px;--bs-offcanvas-height: 30vh;--bs-offcanvas-padding-x: 1rem;--bs-offcanvas-padding-y: 1rem;--bs-offcanvas-color: ;--bs-offcanvas-bg: #fff;--bs-offcanvas-border-width: 1px;--bs-offcanvas-border-color: var(--bs-border-color-translucent);--bs-offcanvas-box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)}@media(max-width: 575.98px){.offcanvas-sm{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 575.98px)and (prefers-reduced-motion: reduce){.offcanvas-sm{transition:none}}@media(max-width: 575.98px){.offcanvas-sm.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media(max-width: 575.98px){.offcanvas-sm.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media(max-width: 575.98px){.offcanvas-sm.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media(max-width: 575.98px){.offcanvas-sm.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media(max-width: 575.98px){.offcanvas-sm.showing,.offcanvas-sm.show:not(.hiding){transform:none}}@media(max-width: 575.98px){.offcanvas-sm.showing,.offcanvas-sm.hiding,.offcanvas-sm.show{visibility:visible}}@media(min-width: 576px){.offcanvas-sm{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-sm .offcanvas-header{display:none}.offcanvas-sm .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 767.98px){.offcanvas-md{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 767.98px)and (prefers-reduced-motion: reduce){.offcanvas-md{transition:none}}@media(max-width: 767.98px){.offcanvas-md.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media(max-width: 767.98px){.offcanvas-md.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media(max-width: 767.98px){.offcanvas-md.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media(max-width: 767.98px){.offcanvas-md.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media(max-width: 767.98px){.offcanvas-md.showing,.offcanvas-md.show:not(.hiding){transform:none}}@media(max-width: 767.98px){.offcanvas-md.showing,.offcanvas-md.hiding,.offcanvas-md.show{visibility:visible}}@media(min-width: 768px){.offcanvas-md{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-md .offcanvas-header{display:none}.offcanvas-md .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 991.98px){.offcanvas-lg{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 991.98px)and (prefers-reduced-motion: reduce){.offcanvas-lg{transition:none}}@media(max-width: 991.98px){.offcanvas-lg.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media(max-width: 991.98px){.offcanvas-lg.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media(max-width: 991.98px){.offcanvas-lg.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media(max-width: 991.98px){.offcanvas-lg.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media(max-width: 991.98px){.offcanvas-lg.showing,.offcanvas-lg.show:not(.hiding){transform:none}}@media(max-width: 991.98px){.offcanvas-lg.showing,.offcanvas-lg.hiding,.offcanvas-lg.show{visibility:visible}}@media(min-width: 992px){.offcanvas-lg{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-lg .offcanvas-header{display:none}.offcanvas-lg .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 1199.98px){.offcanvas-xl{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 1199.98px)and (prefers-reduced-motion: reduce){.offcanvas-xl{transition:none}}@media(max-width: 1199.98px){.offcanvas-xl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media(max-width: 1199.98px){.offcanvas-xl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media(max-width: 1199.98px){.offcanvas-xl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media(max-width: 1199.98px){.offcanvas-xl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media(max-width: 1199.98px){.offcanvas-xl.showing,.offcanvas-xl.show:not(.hiding){transform:none}}@media(max-width: 1199.98px){.offcanvas-xl.showing,.offcanvas-xl.hiding,.offcanvas-xl.show{visibility:visible}}@media(min-width: 1200px){.offcanvas-xl{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-xl .offcanvas-header{display:none}.offcanvas-xl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}@media(max-width: 1399.98px){.offcanvas-xxl{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}}@media(max-width: 1399.98px)and (prefers-reduced-motion: reduce){.offcanvas-xxl{transition:none}}@media(max-width: 1399.98px){.offcanvas-xxl.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}}@media(max-width: 1399.98px){.offcanvas-xxl.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}}@media(max-width: 1399.98px){.offcanvas-xxl.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}}@media(max-width: 1399.98px){.offcanvas-xxl.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}}@media(max-width: 1399.98px){.offcanvas-xxl.showing,.offcanvas-xxl.show:not(.hiding){transform:none}}@media(max-width: 1399.98px){.offcanvas-xxl.showing,.offcanvas-xxl.hiding,.offcanvas-xxl.show{visibility:visible}}@media(min-width: 1400px){.offcanvas-xxl{--bs-offcanvas-height: auto;--bs-offcanvas-border-width: 0;background-color:rgba(0,0,0,0) !important}.offcanvas-xxl .offcanvas-header{display:none}.offcanvas-xxl .offcanvas-body{display:flex;flex-grow:0;padding:0;overflow-y:visible;background-color:rgba(0,0,0,0) !important}}.offcanvas{position:fixed;bottom:0;z-index:1045;display:flex;flex-direction:column;max-width:100%;color:var(--bs-offcanvas-color);visibility:hidden;background-color:var(--bs-offcanvas-bg);background-clip:padding-box;outline:0;transition:transform .3s ease-in-out}@media(prefers-reduced-motion: reduce){.offcanvas{transition:none}}.offcanvas.offcanvas-start{top:0;left:0;width:var(--bs-offcanvas-width);border-right:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(-100%)}.offcanvas.offcanvas-end{top:0;right:0;width:var(--bs-offcanvas-width);border-left:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateX(100%)}.offcanvas.offcanvas-top{top:0;right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-bottom:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(-100%)}.offcanvas.offcanvas-bottom{right:0;left:0;height:var(--bs-offcanvas-height);max-height:100%;border-top:var(--bs-offcanvas-border-width) solid var(--bs-offcanvas-border-color);transform:translateY(100%)}.offcanvas.showing,.offcanvas.show:not(.hiding){transform:none}.offcanvas.showing,.offcanvas.hiding,.offcanvas.show{visibility:visible}.offcanvas-backdrop{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.offcanvas-backdrop.fade{opacity:0}.offcanvas-backdrop.show{opacity:.5}.offcanvas-header{display:flex;align-items:center;justify-content:space-between;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x)}.offcanvas-header .btn-close{padding:calc(var(--bs-offcanvas-padding-y)*.5) calc(var(--bs-offcanvas-padding-x)*.5);margin-top:calc(var(--bs-offcanvas-padding-y)*-0.5);margin-right:calc(var(--bs-offcanvas-padding-x)*-0.5);margin-bottom:calc(var(--bs-offcanvas-padding-y)*-0.5)}.offcanvas-title{margin-bottom:0;line-height:1.5}.offcanvas-body{flex-grow:1;padding:var(--bs-offcanvas-padding-y) var(--bs-offcanvas-padding-x);overflow-y:auto}.placeholder{display:inline-block;min-height:1em;vertical-align:middle;cursor:wait;background-color:currentcolor;opacity:.5}.placeholder.btn::before{display:inline-block;content:\"\"}.placeholder-xs{min-height:.6em}.placeholder-sm{min-height:.8em}.placeholder-lg{min-height:1.2em}.placeholder-glow .placeholder{animation:placeholder-glow 2s ease-in-out infinite}@keyframes placeholder-glow{50%{opacity:.2}}.placeholder-wave{mask-image:linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%);mask-size:200% 100%;animation:placeholder-wave 2s linear infinite}@keyframes placeholder-wave{100%{mask-position:-200% 0%}}.clearfix::after{display:block;clear:both;content:\"\"}.text-bg-primary{color:#fff !important;background-color:RGBA(13, 110, 253, var(--bs-bg-opacity, 1)) !important}.text-bg-secondary{color:#fff !important;background-color:RGBA(108, 117, 125, var(--bs-bg-opacity, 1)) !important}.text-bg-success{color:#fff !important;background-color:RGBA(25, 135, 84, var(--bs-bg-opacity, 1)) !important}.text-bg-info{color:#000 !important;background-color:RGBA(13, 202, 240, var(--bs-bg-opacity, 1)) !important}.text-bg-warning{color:#000 !important;background-color:RGBA(255, 193, 7, var(--bs-bg-opacity, 1)) !important}.text-bg-danger{color:#fff !important;background-color:RGBA(220, 53, 69, var(--bs-bg-opacity, 1)) !important}.text-bg-light{color:#000 !important;background-color:RGBA(248, 249, 250, var(--bs-bg-opacity, 1)) !important}.text-bg-dark{color:#fff !important;background-color:RGBA(33, 37, 41, var(--bs-bg-opacity, 1)) !important}.link-primary{color:#0d6efd !important}.link-primary:hover,.link-primary:focus{color:#0a58ca !important}.link-secondary{color:#6c757d !important}.link-secondary:hover,.link-secondary:focus{color:#565e64 !important}.link-success{color:#198754 !important}.link-success:hover,.link-success:focus{color:#146c43 !important}.link-info{color:#0dcaf0 !important}.link-info:hover,.link-info:focus{color:#3dd5f3 !important}.link-warning{color:#ffc107 !important}.link-warning:hover,.link-warning:focus{color:#ffcd39 !important}.link-danger{color:#dc3545 !important}.link-danger:hover,.link-danger:focus{color:#b02a37 !important}.link-light{color:#f8f9fa !important}.link-light:hover,.link-light:focus{color:#f9fafb !important}.link-dark{color:#212529 !important}.link-dark:hover,.link-dark:focus{color:#1a1e21 !important}.ratio{position:relative;width:100%}.ratio::before{display:block;padding-top:var(--bs-aspect-ratio);content:\"\"}.ratio>*{position:absolute;top:0;left:0;width:100%;height:100%}.ratio-1x1{--bs-aspect-ratio: 100%}.ratio-4x3{--bs-aspect-ratio: 75%}.ratio-16x9{--bs-aspect-ratio: 56.25%}.ratio-21x9{--bs-aspect-ratio: 42.8571428571%}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}.sticky-top{position:sticky;top:0;z-index:1020}.sticky-bottom{position:sticky;bottom:0;z-index:1020}@media(min-width: 576px){.sticky-sm-top{position:sticky;top:0;z-index:1020}.sticky-sm-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 768px){.sticky-md-top{position:sticky;top:0;z-index:1020}.sticky-md-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 992px){.sticky-lg-top{position:sticky;top:0;z-index:1020}.sticky-lg-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 1200px){.sticky-xl-top{position:sticky;top:0;z-index:1020}.sticky-xl-bottom{position:sticky;bottom:0;z-index:1020}}@media(min-width: 1400px){.sticky-xxl-top{position:sticky;top:0;z-index:1020}.sticky-xxl-bottom{position:sticky;bottom:0;z-index:1020}}.hstack{display:flex;flex-direction:row;align-items:center;align-self:stretch}.vstack{display:flex;flex:1 1 auto;flex-direction:column;align-self:stretch}.visually-hidden,.visually-hidden-focusable:not(:focus):not(:focus-within){position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border:0 !important}.stretched-link::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;content:\"\"}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.vr{display:inline-block;align-self:stretch;width:1px;min-height:1em;background-color:currentcolor;opacity:.25}.align-baseline{vertical-align:baseline !important}.align-top{vertical-align:top !important}.align-middle{vertical-align:middle !important}.align-bottom{vertical-align:bottom !important}.align-text-bottom{vertical-align:text-bottom !important}.align-text-top{vertical-align:text-top !important}.float-start{float:left !important}.float-end{float:right !important}.float-none{float:none !important}.opacity-0{opacity:0 !important}.opacity-25{opacity:.25 !important}.opacity-50{opacity:.5 !important}.opacity-75{opacity:.75 !important}.opacity-100{opacity:1 !important}.overflow-auto{overflow:auto !important}.overflow-hidden{overflow:hidden !important}.overflow-visible{overflow:visible !important}.overflow-scroll{overflow:scroll !important}.d-inline{display:inline !important}.d-inline-block{display:inline-block !important}.d-block{display:block !important}.d-grid{display:grid !important}.d-table{display:table !important}.d-table-row{display:table-row !important}.d-table-cell{display:table-cell !important}.d-flex{display:flex !important}.d-inline-flex{display:inline-flex !important}.d-none{display:none !important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15) !important}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075) !important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175) !important}.shadow-none{box-shadow:none !important}.position-static{position:static !important}.position-relative{position:relative !important}.position-absolute{position:absolute !important}.position-fixed{position:fixed !important}.position-sticky{position:sticky !important}.top-0{top:0 !important}.top-50{top:50% !important}.top-100{top:100% !important}.bottom-0{bottom:0 !important}.bottom-50{bottom:50% !important}.bottom-100{bottom:100% !important}.start-0{left:0 !important}.start-50{left:50% !important}.start-100{left:100% !important}.end-0{right:0 !important}.end-50{right:50% !important}.end-100{right:100% !important}.translate-middle{transform:translate(-50%, -50%) !important}.translate-middle-x{transform:translateX(-50%) !important}.translate-middle-y{transform:translateY(-50%) !important}.border{border:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-0{border:0 !important}.border-top{border-top:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-top-0{border-top:0 !important}.border-end{border-right:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-end-0{border-right:0 !important}.border-bottom{border-bottom:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-bottom-0{border-bottom:0 !important}.border-start{border-left:var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important}.border-start-0{border-left:0 !important}.border-primary{--bs-border-opacity: 1;border-color:rgba(var(--bs-primary-rgb), var(--bs-border-opacity)) !important}.border-secondary{--bs-border-opacity: 1;border-color:rgba(var(--bs-secondary-rgb), var(--bs-border-opacity)) !important}.border-success{--bs-border-opacity: 1;border-color:rgba(var(--bs-success-rgb), var(--bs-border-opacity)) !important}.border-info{--bs-border-opacity: 1;border-color:rgba(var(--bs-info-rgb), var(--bs-border-opacity)) !important}.border-warning{--bs-border-opacity: 1;border-color:rgba(var(--bs-warning-rgb), var(--bs-border-opacity)) !important}.border-danger{--bs-border-opacity: 1;border-color:rgba(var(--bs-danger-rgb), var(--bs-border-opacity)) !important}.border-light{--bs-border-opacity: 1;border-color:rgba(var(--bs-light-rgb), var(--bs-border-opacity)) !important}.border-dark{--bs-border-opacity: 1;border-color:rgba(var(--bs-dark-rgb), var(--bs-border-opacity)) !important}.border-white{--bs-border-opacity: 1;border-color:rgba(var(--bs-white-rgb), var(--bs-border-opacity)) !important}.border-1{--bs-border-width: 1px}.border-2{--bs-border-width: 2px}.border-3{--bs-border-width: 3px}.border-4{--bs-border-width: 4px}.border-5{--bs-border-width: 5px}.border-opacity-10{--bs-border-opacity: 0.1}.border-opacity-25{--bs-border-opacity: 0.25}.border-opacity-50{--bs-border-opacity: 0.5}.border-opacity-75{--bs-border-opacity: 0.75}.border-opacity-100{--bs-border-opacity: 1}.w-25{width:25% !important}.w-50{width:50% !important}.w-75{width:75% !important}.w-100{width:100% !important}.w-auto{width:auto !important}.mw-100{max-width:100% !important}.vw-100{width:100vw !important}.min-vw-100{min-width:100vw !important}.h-25{height:25% !important}.h-50{height:50% !important}.h-75{height:75% !important}.h-100{height:100% !important}.h-auto{height:auto !important}.mh-100{max-height:100% !important}.vh-100{height:100vh !important}.min-vh-100{min-height:100vh !important}.flex-fill{flex:1 1 auto !important}.flex-row{flex-direction:row !important}.flex-column{flex-direction:column !important}.flex-row-reverse{flex-direction:row-reverse !important}.flex-column-reverse{flex-direction:column-reverse !important}.flex-grow-0{flex-grow:0 !important}.flex-grow-1{flex-grow:1 !important}.flex-shrink-0{flex-shrink:0 !important}.flex-shrink-1{flex-shrink:1 !important}.flex-wrap{flex-wrap:wrap !important}.flex-nowrap{flex-wrap:nowrap !important}.flex-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-start{justify-content:flex-start !important}.justify-content-end{justify-content:flex-end !important}.justify-content-center{justify-content:center !important}.justify-content-between{justify-content:space-between !important}.justify-content-around{justify-content:space-around !important}.justify-content-evenly{justify-content:space-evenly !important}.align-items-start{align-items:flex-start !important}.align-items-end{align-items:flex-end !important}.align-items-center{align-items:center !important}.align-items-baseline{align-items:baseline !important}.align-items-stretch{align-items:stretch !important}.align-content-start{align-content:flex-start !important}.align-content-end{align-content:flex-end !important}.align-content-center{align-content:center !important}.align-content-between{align-content:space-between !important}.align-content-around{align-content:space-around !important}.align-content-stretch{align-content:stretch !important}.align-self-auto{align-self:auto !important}.align-self-start{align-self:flex-start !important}.align-self-end{align-self:flex-end !important}.align-self-center{align-self:center !important}.align-self-baseline{align-self:baseline !important}.align-self-stretch{align-self:stretch !important}.order-first{order:-1 !important}.order-0{order:0 !important}.order-1{order:1 !important}.order-2{order:2 !important}.order-3{order:3 !important}.order-4{order:4 !important}.order-5{order:5 !important}.order-last{order:6 !important}.m-0{margin:0 !important}.m-1{margin:.25rem !important}.m-2{margin:.5rem !important}.m-3{margin:1rem !important}.m-4{margin:1.5rem !important}.m-5{margin:3rem !important}.m-auto{margin:auto !important}.mx-0{margin-right:0 !important;margin-left:0 !important}.mx-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-3{margin-right:1rem !important;margin-left:1rem !important}.mx-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-5{margin-right:3rem !important;margin-left:3rem !important}.mx-auto{margin-right:auto !important;margin-left:auto !important}.my-0{margin-top:0 !important;margin-bottom:0 !important}.my-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-0{margin-top:0 !important}.mt-1{margin-top:.25rem !important}.mt-2{margin-top:.5rem !important}.mt-3{margin-top:1rem !important}.mt-4{margin-top:1.5rem !important}.mt-5{margin-top:3rem !important}.mt-auto{margin-top:auto !important}.me-0{margin-right:0 !important}.me-1{margin-right:.25rem !important}.me-2{margin-right:.5rem !important}.me-3{margin-right:1rem !important}.me-4{margin-right:1.5rem !important}.me-5{margin-right:3rem !important}.me-auto{margin-right:auto !important}.mb-0{margin-bottom:0 !important}.mb-1{margin-bottom:.25rem !important}.mb-2{margin-bottom:.5rem !important}.mb-3{margin-bottom:1rem !important}.mb-4{margin-bottom:1.5rem !important}.mb-5{margin-bottom:3rem !important}.mb-auto{margin-bottom:auto !important}.ms-0{margin-left:0 !important}.ms-1{margin-left:.25rem !important}.ms-2{margin-left:.5rem !important}.ms-3{margin-left:1rem !important}.ms-4{margin-left:1.5rem !important}.ms-5{margin-left:3rem !important}.ms-auto{margin-left:auto !important}.p-0{padding:0 !important}.p-1{padding:.25rem !important}.p-2{padding:.5rem !important}.p-3{padding:1rem !important}.p-4{padding:1.5rem !important}.p-5{padding:3rem !important}.px-0{padding-right:0 !important;padding-left:0 !important}.px-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-3{padding-right:1rem !important;padding-left:1rem !important}.px-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-5{padding-right:3rem !important;padding-left:3rem !important}.py-0{padding-top:0 !important;padding-bottom:0 !important}.py-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-0{padding-top:0 !important}.pt-1{padding-top:.25rem !important}.pt-2{padding-top:.5rem !important}.pt-3{padding-top:1rem !important}.pt-4{padding-top:1.5rem !important}.pt-5{padding-top:3rem !important}.pe-0{padding-right:0 !important}.pe-1{padding-right:.25rem !important}.pe-2{padding-right:.5rem !important}.pe-3{padding-right:1rem !important}.pe-4{padding-right:1.5rem !important}.pe-5{padding-right:3rem !important}.pb-0{padding-bottom:0 !important}.pb-1{padding-bottom:.25rem !important}.pb-2{padding-bottom:.5rem !important}.pb-3{padding-bottom:1rem !important}.pb-4{padding-bottom:1.5rem !important}.pb-5{padding-bottom:3rem !important}.ps-0{padding-left:0 !important}.ps-1{padding-left:.25rem !important}.ps-2{padding-left:.5rem !important}.ps-3{padding-left:1rem !important}.ps-4{padding-left:1.5rem !important}.ps-5{padding-left:3rem !important}.gap-0{gap:0 !important}.gap-1{gap:.25rem !important}.gap-2{gap:.5rem !important}.gap-3{gap:1rem !important}.gap-4{gap:1.5rem !important}.gap-5{gap:3rem !important}.font-monospace{font-family:var(--bs-font-monospace) !important}.fs-1{font-size:calc(1.375rem + 1.5vw) !important}.fs-2{font-size:calc(1.325rem + 0.9vw) !important}.fs-3{font-size:calc(1.3rem + 0.6vw) !important}.fs-4{font-size:calc(1.275rem + 0.3vw) !important}.fs-5{font-size:1.25rem !important}.fs-6{font-size:1rem !important}.fst-italic{font-style:italic !important}.fst-normal{font-style:normal !important}.fw-light{font-weight:300 !important}.fw-lighter{font-weight:lighter !important}.fw-normal{font-weight:400 !important}.fw-bold{font-weight:700 !important}.fw-semibold{font-weight:600 !important}.fw-bolder{font-weight:bolder !important}.lh-1{line-height:1 !important}.lh-sm{line-height:1.25 !important}.lh-base{line-height:1.5 !important}.lh-lg{line-height:2 !important}.text-start{text-align:left !important}.text-end{text-align:right !important}.text-center{text-align:center !important}.text-decoration-none{text-decoration:none !important}.text-decoration-underline{text-decoration:underline !important}.text-decoration-line-through{text-decoration:line-through !important}.text-lowercase{text-transform:lowercase !important}.text-uppercase{text-transform:uppercase !important}.text-capitalize{text-transform:capitalize !important}.text-wrap{white-space:normal !important}.text-nowrap{white-space:nowrap !important}.text-break{word-wrap:break-word !important;word-break:break-word !important}.text-primary{--bs-text-opacity: 1;color:rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important}.text-secondary{--bs-text-opacity: 1;color:rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important}.text-success{--bs-text-opacity: 1;color:rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important}.text-info{--bs-text-opacity: 1;color:rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important}.text-warning{--bs-text-opacity: 1;color:rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important}.text-danger{--bs-text-opacity: 1;color:rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important}.text-light{--bs-text-opacity: 1;color:rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important}.text-dark{--bs-text-opacity: 1;color:rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important}.text-black{--bs-text-opacity: 1;color:rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important}.text-white{--bs-text-opacity: 1;color:rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important}.text-body{--bs-text-opacity: 1;color:rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important}.text-muted{--bs-text-opacity: 1;color:#6c757d !important}.text-black-50{--bs-text-opacity: 1;color:rgba(0,0,0,.5) !important}.text-white-50{--bs-text-opacity: 1;color:rgba(255,255,255,.5) !important}.text-reset{--bs-text-opacity: 1;color:inherit !important}.text-opacity-25{--bs-text-opacity: 0.25}.text-opacity-50{--bs-text-opacity: 0.5}.text-opacity-75{--bs-text-opacity: 0.75}.text-opacity-100{--bs-text-opacity: 1}.bg-primary{--bs-bg-opacity: 1;background-color:rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important}.bg-secondary{--bs-bg-opacity: 1;background-color:rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important}.bg-success{--bs-bg-opacity: 1;background-color:rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important}.bg-info{--bs-bg-opacity: 1;background-color:rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important}.bg-warning{--bs-bg-opacity: 1;background-color:rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important}.bg-danger{--bs-bg-opacity: 1;background-color:rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important}.bg-light{--bs-bg-opacity: 1;background-color:rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important}.bg-dark{--bs-bg-opacity: 1;background-color:rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important}.bg-black{--bs-bg-opacity: 1;background-color:rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important}.bg-white{--bs-bg-opacity: 1;background-color:rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important}.bg-body{--bs-bg-opacity: 1;background-color:rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important}.bg-transparent{--bs-bg-opacity: 1;background-color:rgba(0,0,0,0) !important}.bg-opacity-10{--bs-bg-opacity: 0.1}.bg-opacity-25{--bs-bg-opacity: 0.25}.bg-opacity-50{--bs-bg-opacity: 0.5}.bg-opacity-75{--bs-bg-opacity: 0.75}.bg-opacity-100{--bs-bg-opacity: 1}.bg-gradient{background-image:var(--bs-gradient) !important}.user-select-all{user-select:all !important}.user-select-auto{user-select:auto !important}.user-select-none{user-select:none !important}.pe-none{pointer-events:none !important}.pe-auto{pointer-events:auto !important}.rounded{border-radius:var(--bs-border-radius) !important}.rounded-0{border-radius:0 !important}.rounded-1{border-radius:var(--bs-border-radius-sm) !important}.rounded-2{border-radius:var(--bs-border-radius) !important}.rounded-3{border-radius:var(--bs-border-radius-lg) !important}.rounded-4{border-radius:var(--bs-border-radius-xl) !important}.rounded-5{border-radius:var(--bs-border-radius-2xl) !important}.rounded-circle{border-radius:50% !important}.rounded-pill{border-radius:var(--bs-border-radius-pill) !important}.rounded-top{border-top-left-radius:var(--bs-border-radius) !important;border-top-right-radius:var(--bs-border-radius) !important}.rounded-end{border-top-right-radius:var(--bs-border-radius) !important;border-bottom-right-radius:var(--bs-border-radius) !important}.rounded-bottom{border-bottom-right-radius:var(--bs-border-radius) !important;border-bottom-left-radius:var(--bs-border-radius) !important}.rounded-start{border-bottom-left-radius:var(--bs-border-radius) !important;border-top-left-radius:var(--bs-border-radius) !important}.visible{visibility:visible !important}.invisible{visibility:hidden !important}@media(min-width: 576px){.float-sm-start{float:left !important}.float-sm-end{float:right !important}.float-sm-none{float:none !important}.d-sm-inline{display:inline !important}.d-sm-inline-block{display:inline-block !important}.d-sm-block{display:block !important}.d-sm-grid{display:grid !important}.d-sm-table{display:table !important}.d-sm-table-row{display:table-row !important}.d-sm-table-cell{display:table-cell !important}.d-sm-flex{display:flex !important}.d-sm-inline-flex{display:inline-flex !important}.d-sm-none{display:none !important}.flex-sm-fill{flex:1 1 auto !important}.flex-sm-row{flex-direction:row !important}.flex-sm-column{flex-direction:column !important}.flex-sm-row-reverse{flex-direction:row-reverse !important}.flex-sm-column-reverse{flex-direction:column-reverse !important}.flex-sm-grow-0{flex-grow:0 !important}.flex-sm-grow-1{flex-grow:1 !important}.flex-sm-shrink-0{flex-shrink:0 !important}.flex-sm-shrink-1{flex-shrink:1 !important}.flex-sm-wrap{flex-wrap:wrap !important}.flex-sm-nowrap{flex-wrap:nowrap !important}.flex-sm-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-sm-start{justify-content:flex-start !important}.justify-content-sm-end{justify-content:flex-end !important}.justify-content-sm-center{justify-content:center !important}.justify-content-sm-between{justify-content:space-between !important}.justify-content-sm-around{justify-content:space-around !important}.justify-content-sm-evenly{justify-content:space-evenly !important}.align-items-sm-start{align-items:flex-start !important}.align-items-sm-end{align-items:flex-end !important}.align-items-sm-center{align-items:center !important}.align-items-sm-baseline{align-items:baseline !important}.align-items-sm-stretch{align-items:stretch !important}.align-content-sm-start{align-content:flex-start !important}.align-content-sm-end{align-content:flex-end !important}.align-content-sm-center{align-content:center !important}.align-content-sm-between{align-content:space-between !important}.align-content-sm-around{align-content:space-around !important}.align-content-sm-stretch{align-content:stretch !important}.align-self-sm-auto{align-self:auto !important}.align-self-sm-start{align-self:flex-start !important}.align-self-sm-end{align-self:flex-end !important}.align-self-sm-center{align-self:center !important}.align-self-sm-baseline{align-self:baseline !important}.align-self-sm-stretch{align-self:stretch !important}.order-sm-first{order:-1 !important}.order-sm-0{order:0 !important}.order-sm-1{order:1 !important}.order-sm-2{order:2 !important}.order-sm-3{order:3 !important}.order-sm-4{order:4 !important}.order-sm-5{order:5 !important}.order-sm-last{order:6 !important}.m-sm-0{margin:0 !important}.m-sm-1{margin:.25rem !important}.m-sm-2{margin:.5rem !important}.m-sm-3{margin:1rem !important}.m-sm-4{margin:1.5rem !important}.m-sm-5{margin:3rem !important}.m-sm-auto{margin:auto !important}.mx-sm-0{margin-right:0 !important;margin-left:0 !important}.mx-sm-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-sm-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-sm-3{margin-right:1rem !important;margin-left:1rem !important}.mx-sm-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-sm-5{margin-right:3rem !important;margin-left:3rem !important}.mx-sm-auto{margin-right:auto !important;margin-left:auto !important}.my-sm-0{margin-top:0 !important;margin-bottom:0 !important}.my-sm-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-sm-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-sm-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-sm-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-sm-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-sm-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-sm-0{margin-top:0 !important}.mt-sm-1{margin-top:.25rem !important}.mt-sm-2{margin-top:.5rem !important}.mt-sm-3{margin-top:1rem !important}.mt-sm-4{margin-top:1.5rem !important}.mt-sm-5{margin-top:3rem !important}.mt-sm-auto{margin-top:auto !important}.me-sm-0{margin-right:0 !important}.me-sm-1{margin-right:.25rem !important}.me-sm-2{margin-right:.5rem !important}.me-sm-3{margin-right:1rem !important}.me-sm-4{margin-right:1.5rem !important}.me-sm-5{margin-right:3rem !important}.me-sm-auto{margin-right:auto !important}.mb-sm-0{margin-bottom:0 !important}.mb-sm-1{margin-bottom:.25rem !important}.mb-sm-2{margin-bottom:.5rem !important}.mb-sm-3{margin-bottom:1rem !important}.mb-sm-4{margin-bottom:1.5rem !important}.mb-sm-5{margin-bottom:3rem !important}.mb-sm-auto{margin-bottom:auto !important}.ms-sm-0{margin-left:0 !important}.ms-sm-1{margin-left:.25rem !important}.ms-sm-2{margin-left:.5rem !important}.ms-sm-3{margin-left:1rem !important}.ms-sm-4{margin-left:1.5rem !important}.ms-sm-5{margin-left:3rem !important}.ms-sm-auto{margin-left:auto !important}.p-sm-0{padding:0 !important}.p-sm-1{padding:.25rem !important}.p-sm-2{padding:.5rem !important}.p-sm-3{padding:1rem !important}.p-sm-4{padding:1.5rem !important}.p-sm-5{padding:3rem !important}.px-sm-0{padding-right:0 !important;padding-left:0 !important}.px-sm-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-sm-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-sm-3{padding-right:1rem !important;padding-left:1rem !important}.px-sm-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-sm-5{padding-right:3rem !important;padding-left:3rem !important}.py-sm-0{padding-top:0 !important;padding-bottom:0 !important}.py-sm-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-sm-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-sm-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-sm-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-sm-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-sm-0{padding-top:0 !important}.pt-sm-1{padding-top:.25rem !important}.pt-sm-2{padding-top:.5rem !important}.pt-sm-3{padding-top:1rem !important}.pt-sm-4{padding-top:1.5rem !important}.pt-sm-5{padding-top:3rem !important}.pe-sm-0{padding-right:0 !important}.pe-sm-1{padding-right:.25rem !important}.pe-sm-2{padding-right:.5rem !important}.pe-sm-3{padding-right:1rem !important}.pe-sm-4{padding-right:1.5rem !important}.pe-sm-5{padding-right:3rem !important}.pb-sm-0{padding-bottom:0 !important}.pb-sm-1{padding-bottom:.25rem !important}.pb-sm-2{padding-bottom:.5rem !important}.pb-sm-3{padding-bottom:1rem !important}.pb-sm-4{padding-bottom:1.5rem !important}.pb-sm-5{padding-bottom:3rem !important}.ps-sm-0{padding-left:0 !important}.ps-sm-1{padding-left:.25rem !important}.ps-sm-2{padding-left:.5rem !important}.ps-sm-3{padding-left:1rem !important}.ps-sm-4{padding-left:1.5rem !important}.ps-sm-5{padding-left:3rem !important}.gap-sm-0{gap:0 !important}.gap-sm-1{gap:.25rem !important}.gap-sm-2{gap:.5rem !important}.gap-sm-3{gap:1rem !important}.gap-sm-4{gap:1.5rem !important}.gap-sm-5{gap:3rem !important}.text-sm-start{text-align:left !important}.text-sm-end{text-align:right !important}.text-sm-center{text-align:center !important}}@media(min-width: 768px){.float-md-start{float:left !important}.float-md-end{float:right !important}.float-md-none{float:none !important}.d-md-inline{display:inline !important}.d-md-inline-block{display:inline-block !important}.d-md-block{display:block !important}.d-md-grid{display:grid !important}.d-md-table{display:table !important}.d-md-table-row{display:table-row !important}.d-md-table-cell{display:table-cell !important}.d-md-flex{display:flex !important}.d-md-inline-flex{display:inline-flex !important}.d-md-none{display:none !important}.flex-md-fill{flex:1 1 auto !important}.flex-md-row{flex-direction:row !important}.flex-md-column{flex-direction:column !important}.flex-md-row-reverse{flex-direction:row-reverse !important}.flex-md-column-reverse{flex-direction:column-reverse !important}.flex-md-grow-0{flex-grow:0 !important}.flex-md-grow-1{flex-grow:1 !important}.flex-md-shrink-0{flex-shrink:0 !important}.flex-md-shrink-1{flex-shrink:1 !important}.flex-md-wrap{flex-wrap:wrap !important}.flex-md-nowrap{flex-wrap:nowrap !important}.flex-md-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-md-start{justify-content:flex-start !important}.justify-content-md-end{justify-content:flex-end !important}.justify-content-md-center{justify-content:center !important}.justify-content-md-between{justify-content:space-between !important}.justify-content-md-around{justify-content:space-around !important}.justify-content-md-evenly{justify-content:space-evenly !important}.align-items-md-start{align-items:flex-start !important}.align-items-md-end{align-items:flex-end !important}.align-items-md-center{align-items:center !important}.align-items-md-baseline{align-items:baseline !important}.align-items-md-stretch{align-items:stretch !important}.align-content-md-start{align-content:flex-start !important}.align-content-md-end{align-content:flex-end !important}.align-content-md-center{align-content:center !important}.align-content-md-between{align-content:space-between !important}.align-content-md-around{align-content:space-around !important}.align-content-md-stretch{align-content:stretch !important}.align-self-md-auto{align-self:auto !important}.align-self-md-start{align-self:flex-start !important}.align-self-md-end{align-self:flex-end !important}.align-self-md-center{align-self:center !important}.align-self-md-baseline{align-self:baseline !important}.align-self-md-stretch{align-self:stretch !important}.order-md-first{order:-1 !important}.order-md-0{order:0 !important}.order-md-1{order:1 !important}.order-md-2{order:2 !important}.order-md-3{order:3 !important}.order-md-4{order:4 !important}.order-md-5{order:5 !important}.order-md-last{order:6 !important}.m-md-0{margin:0 !important}.m-md-1{margin:.25rem !important}.m-md-2{margin:.5rem !important}.m-md-3{margin:1rem !important}.m-md-4{margin:1.5rem !important}.m-md-5{margin:3rem !important}.m-md-auto{margin:auto !important}.mx-md-0{margin-right:0 !important;margin-left:0 !important}.mx-md-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-md-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-md-3{margin-right:1rem !important;margin-left:1rem !important}.mx-md-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-md-5{margin-right:3rem !important;margin-left:3rem !important}.mx-md-auto{margin-right:auto !important;margin-left:auto !important}.my-md-0{margin-top:0 !important;margin-bottom:0 !important}.my-md-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-md-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-md-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-md-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-md-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-md-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-md-0{margin-top:0 !important}.mt-md-1{margin-top:.25rem !important}.mt-md-2{margin-top:.5rem !important}.mt-md-3{margin-top:1rem !important}.mt-md-4{margin-top:1.5rem !important}.mt-md-5{margin-top:3rem !important}.mt-md-auto{margin-top:auto !important}.me-md-0{margin-right:0 !important}.me-md-1{margin-right:.25rem !important}.me-md-2{margin-right:.5rem !important}.me-md-3{margin-right:1rem !important}.me-md-4{margin-right:1.5rem !important}.me-md-5{margin-right:3rem !important}.me-md-auto{margin-right:auto !important}.mb-md-0{margin-bottom:0 !important}.mb-md-1{margin-bottom:.25rem !important}.mb-md-2{margin-bottom:.5rem !important}.mb-md-3{margin-bottom:1rem !important}.mb-md-4{margin-bottom:1.5rem !important}.mb-md-5{margin-bottom:3rem !important}.mb-md-auto{margin-bottom:auto !important}.ms-md-0{margin-left:0 !important}.ms-md-1{margin-left:.25rem !important}.ms-md-2{margin-left:.5rem !important}.ms-md-3{margin-left:1rem !important}.ms-md-4{margin-left:1.5rem !important}.ms-md-5{margin-left:3rem !important}.ms-md-auto{margin-left:auto !important}.p-md-0{padding:0 !important}.p-md-1{padding:.25rem !important}.p-md-2{padding:.5rem !important}.p-md-3{padding:1rem !important}.p-md-4{padding:1.5rem !important}.p-md-5{padding:3rem !important}.px-md-0{padding-right:0 !important;padding-left:0 !important}.px-md-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-md-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-md-3{padding-right:1rem !important;padding-left:1rem !important}.px-md-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-md-5{padding-right:3rem !important;padding-left:3rem !important}.py-md-0{padding-top:0 !important;padding-bottom:0 !important}.py-md-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-md-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-md-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-md-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-md-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-md-0{padding-top:0 !important}.pt-md-1{padding-top:.25rem !important}.pt-md-2{padding-top:.5rem !important}.pt-md-3{padding-top:1rem !important}.pt-md-4{padding-top:1.5rem !important}.pt-md-5{padding-top:3rem !important}.pe-md-0{padding-right:0 !important}.pe-md-1{padding-right:.25rem !important}.pe-md-2{padding-right:.5rem !important}.pe-md-3{padding-right:1rem !important}.pe-md-4{padding-right:1.5rem !important}.pe-md-5{padding-right:3rem !important}.pb-md-0{padding-bottom:0 !important}.pb-md-1{padding-bottom:.25rem !important}.pb-md-2{padding-bottom:.5rem !important}.pb-md-3{padding-bottom:1rem !important}.pb-md-4{padding-bottom:1.5rem !important}.pb-md-5{padding-bottom:3rem !important}.ps-md-0{padding-left:0 !important}.ps-md-1{padding-left:.25rem !important}.ps-md-2{padding-left:.5rem !important}.ps-md-3{padding-left:1rem !important}.ps-md-4{padding-left:1.5rem !important}.ps-md-5{padding-left:3rem !important}.gap-md-0{gap:0 !important}.gap-md-1{gap:.25rem !important}.gap-md-2{gap:.5rem !important}.gap-md-3{gap:1rem !important}.gap-md-4{gap:1.5rem !important}.gap-md-5{gap:3rem !important}.text-md-start{text-align:left !important}.text-md-end{text-align:right !important}.text-md-center{text-align:center !important}}@media(min-width: 992px){.float-lg-start{float:left !important}.float-lg-end{float:right !important}.float-lg-none{float:none !important}.d-lg-inline{display:inline !important}.d-lg-inline-block{display:inline-block !important}.d-lg-block{display:block !important}.d-lg-grid{display:grid !important}.d-lg-table{display:table !important}.d-lg-table-row{display:table-row !important}.d-lg-table-cell{display:table-cell !important}.d-lg-flex{display:flex !important}.d-lg-inline-flex{display:inline-flex !important}.d-lg-none{display:none !important}.flex-lg-fill{flex:1 1 auto !important}.flex-lg-row{flex-direction:row !important}.flex-lg-column{flex-direction:column !important}.flex-lg-row-reverse{flex-direction:row-reverse !important}.flex-lg-column-reverse{flex-direction:column-reverse !important}.flex-lg-grow-0{flex-grow:0 !important}.flex-lg-grow-1{flex-grow:1 !important}.flex-lg-shrink-0{flex-shrink:0 !important}.flex-lg-shrink-1{flex-shrink:1 !important}.flex-lg-wrap{flex-wrap:wrap !important}.flex-lg-nowrap{flex-wrap:nowrap !important}.flex-lg-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-lg-start{justify-content:flex-start !important}.justify-content-lg-end{justify-content:flex-end !important}.justify-content-lg-center{justify-content:center !important}.justify-content-lg-between{justify-content:space-between !important}.justify-content-lg-around{justify-content:space-around !important}.justify-content-lg-evenly{justify-content:space-evenly !important}.align-items-lg-start{align-items:flex-start !important}.align-items-lg-end{align-items:flex-end !important}.align-items-lg-center{align-items:center !important}.align-items-lg-baseline{align-items:baseline !important}.align-items-lg-stretch{align-items:stretch !important}.align-content-lg-start{align-content:flex-start !important}.align-content-lg-end{align-content:flex-end !important}.align-content-lg-center{align-content:center !important}.align-content-lg-between{align-content:space-between !important}.align-content-lg-around{align-content:space-around !important}.align-content-lg-stretch{align-content:stretch !important}.align-self-lg-auto{align-self:auto !important}.align-self-lg-start{align-self:flex-start !important}.align-self-lg-end{align-self:flex-end !important}.align-self-lg-center{align-self:center !important}.align-self-lg-baseline{align-self:baseline !important}.align-self-lg-stretch{align-self:stretch !important}.order-lg-first{order:-1 !important}.order-lg-0{order:0 !important}.order-lg-1{order:1 !important}.order-lg-2{order:2 !important}.order-lg-3{order:3 !important}.order-lg-4{order:4 !important}.order-lg-5{order:5 !important}.order-lg-last{order:6 !important}.m-lg-0{margin:0 !important}.m-lg-1{margin:.25rem !important}.m-lg-2{margin:.5rem !important}.m-lg-3{margin:1rem !important}.m-lg-4{margin:1.5rem !important}.m-lg-5{margin:3rem !important}.m-lg-auto{margin:auto !important}.mx-lg-0{margin-right:0 !important;margin-left:0 !important}.mx-lg-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-lg-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-lg-3{margin-right:1rem !important;margin-left:1rem !important}.mx-lg-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-lg-5{margin-right:3rem !important;margin-left:3rem !important}.mx-lg-auto{margin-right:auto !important;margin-left:auto !important}.my-lg-0{margin-top:0 !important;margin-bottom:0 !important}.my-lg-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-lg-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-lg-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-lg-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-lg-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-lg-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-lg-0{margin-top:0 !important}.mt-lg-1{margin-top:.25rem !important}.mt-lg-2{margin-top:.5rem !important}.mt-lg-3{margin-top:1rem !important}.mt-lg-4{margin-top:1.5rem !important}.mt-lg-5{margin-top:3rem !important}.mt-lg-auto{margin-top:auto !important}.me-lg-0{margin-right:0 !important}.me-lg-1{margin-right:.25rem !important}.me-lg-2{margin-right:.5rem !important}.me-lg-3{margin-right:1rem !important}.me-lg-4{margin-right:1.5rem !important}.me-lg-5{margin-right:3rem !important}.me-lg-auto{margin-right:auto !important}.mb-lg-0{margin-bottom:0 !important}.mb-lg-1{margin-bottom:.25rem !important}.mb-lg-2{margin-bottom:.5rem !important}.mb-lg-3{margin-bottom:1rem !important}.mb-lg-4{margin-bottom:1.5rem !important}.mb-lg-5{margin-bottom:3rem !important}.mb-lg-auto{margin-bottom:auto !important}.ms-lg-0{margin-left:0 !important}.ms-lg-1{margin-left:.25rem !important}.ms-lg-2{margin-left:.5rem !important}.ms-lg-3{margin-left:1rem !important}.ms-lg-4{margin-left:1.5rem !important}.ms-lg-5{margin-left:3rem !important}.ms-lg-auto{margin-left:auto !important}.p-lg-0{padding:0 !important}.p-lg-1{padding:.25rem !important}.p-lg-2{padding:.5rem !important}.p-lg-3{padding:1rem !important}.p-lg-4{padding:1.5rem !important}.p-lg-5{padding:3rem !important}.px-lg-0{padding-right:0 !important;padding-left:0 !important}.px-lg-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-lg-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-lg-3{padding-right:1rem !important;padding-left:1rem !important}.px-lg-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-lg-5{padding-right:3rem !important;padding-left:3rem !important}.py-lg-0{padding-top:0 !important;padding-bottom:0 !important}.py-lg-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-lg-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-lg-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-lg-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-lg-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-lg-0{padding-top:0 !important}.pt-lg-1{padding-top:.25rem !important}.pt-lg-2{padding-top:.5rem !important}.pt-lg-3{padding-top:1rem !important}.pt-lg-4{padding-top:1.5rem !important}.pt-lg-5{padding-top:3rem !important}.pe-lg-0{padding-right:0 !important}.pe-lg-1{padding-right:.25rem !important}.pe-lg-2{padding-right:.5rem !important}.pe-lg-3{padding-right:1rem !important}.pe-lg-4{padding-right:1.5rem !important}.pe-lg-5{padding-right:3rem !important}.pb-lg-0{padding-bottom:0 !important}.pb-lg-1{padding-bottom:.25rem !important}.pb-lg-2{padding-bottom:.5rem !important}.pb-lg-3{padding-bottom:1rem !important}.pb-lg-4{padding-bottom:1.5rem !important}.pb-lg-5{padding-bottom:3rem !important}.ps-lg-0{padding-left:0 !important}.ps-lg-1{padding-left:.25rem !important}.ps-lg-2{padding-left:.5rem !important}.ps-lg-3{padding-left:1rem !important}.ps-lg-4{padding-left:1.5rem !important}.ps-lg-5{padding-left:3rem !important}.gap-lg-0{gap:0 !important}.gap-lg-1{gap:.25rem !important}.gap-lg-2{gap:.5rem !important}.gap-lg-3{gap:1rem !important}.gap-lg-4{gap:1.5rem !important}.gap-lg-5{gap:3rem !important}.text-lg-start{text-align:left !important}.text-lg-end{text-align:right !important}.text-lg-center{text-align:center !important}}@media(min-width: 1200px){.float-xl-start{float:left !important}.float-xl-end{float:right !important}.float-xl-none{float:none !important}.d-xl-inline{display:inline !important}.d-xl-inline-block{display:inline-block !important}.d-xl-block{display:block !important}.d-xl-grid{display:grid !important}.d-xl-table{display:table !important}.d-xl-table-row{display:table-row !important}.d-xl-table-cell{display:table-cell !important}.d-xl-flex{display:flex !important}.d-xl-inline-flex{display:inline-flex !important}.d-xl-none{display:none !important}.flex-xl-fill{flex:1 1 auto !important}.flex-xl-row{flex-direction:row !important}.flex-xl-column{flex-direction:column !important}.flex-xl-row-reverse{flex-direction:row-reverse !important}.flex-xl-column-reverse{flex-direction:column-reverse !important}.flex-xl-grow-0{flex-grow:0 !important}.flex-xl-grow-1{flex-grow:1 !important}.flex-xl-shrink-0{flex-shrink:0 !important}.flex-xl-shrink-1{flex-shrink:1 !important}.flex-xl-wrap{flex-wrap:wrap !important}.flex-xl-nowrap{flex-wrap:nowrap !important}.flex-xl-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-xl-start{justify-content:flex-start !important}.justify-content-xl-end{justify-content:flex-end !important}.justify-content-xl-center{justify-content:center !important}.justify-content-xl-between{justify-content:space-between !important}.justify-content-xl-around{justify-content:space-around !important}.justify-content-xl-evenly{justify-content:space-evenly !important}.align-items-xl-start{align-items:flex-start !important}.align-items-xl-end{align-items:flex-end !important}.align-items-xl-center{align-items:center !important}.align-items-xl-baseline{align-items:baseline !important}.align-items-xl-stretch{align-items:stretch !important}.align-content-xl-start{align-content:flex-start !important}.align-content-xl-end{align-content:flex-end !important}.align-content-xl-center{align-content:center !important}.align-content-xl-between{align-content:space-between !important}.align-content-xl-around{align-content:space-around !important}.align-content-xl-stretch{align-content:stretch !important}.align-self-xl-auto{align-self:auto !important}.align-self-xl-start{align-self:flex-start !important}.align-self-xl-end{align-self:flex-end !important}.align-self-xl-center{align-self:center !important}.align-self-xl-baseline{align-self:baseline !important}.align-self-xl-stretch{align-self:stretch !important}.order-xl-first{order:-1 !important}.order-xl-0{order:0 !important}.order-xl-1{order:1 !important}.order-xl-2{order:2 !important}.order-xl-3{order:3 !important}.order-xl-4{order:4 !important}.order-xl-5{order:5 !important}.order-xl-last{order:6 !important}.m-xl-0{margin:0 !important}.m-xl-1{margin:.25rem !important}.m-xl-2{margin:.5rem !important}.m-xl-3{margin:1rem !important}.m-xl-4{margin:1.5rem !important}.m-xl-5{margin:3rem !important}.m-xl-auto{margin:auto !important}.mx-xl-0{margin-right:0 !important;margin-left:0 !important}.mx-xl-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-xl-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-xl-3{margin-right:1rem !important;margin-left:1rem !important}.mx-xl-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-xl-5{margin-right:3rem !important;margin-left:3rem !important}.mx-xl-auto{margin-right:auto !important;margin-left:auto !important}.my-xl-0{margin-top:0 !important;margin-bottom:0 !important}.my-xl-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-xl-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-xl-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-xl-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-xl-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-xl-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-xl-0{margin-top:0 !important}.mt-xl-1{margin-top:.25rem !important}.mt-xl-2{margin-top:.5rem !important}.mt-xl-3{margin-top:1rem !important}.mt-xl-4{margin-top:1.5rem !important}.mt-xl-5{margin-top:3rem !important}.mt-xl-auto{margin-top:auto !important}.me-xl-0{margin-right:0 !important}.me-xl-1{margin-right:.25rem !important}.me-xl-2{margin-right:.5rem !important}.me-xl-3{margin-right:1rem !important}.me-xl-4{margin-right:1.5rem !important}.me-xl-5{margin-right:3rem !important}.me-xl-auto{margin-right:auto !important}.mb-xl-0{margin-bottom:0 !important}.mb-xl-1{margin-bottom:.25rem !important}.mb-xl-2{margin-bottom:.5rem !important}.mb-xl-3{margin-bottom:1rem !important}.mb-xl-4{margin-bottom:1.5rem !important}.mb-xl-5{margin-bottom:3rem !important}.mb-xl-auto{margin-bottom:auto !important}.ms-xl-0{margin-left:0 !important}.ms-xl-1{margin-left:.25rem !important}.ms-xl-2{margin-left:.5rem !important}.ms-xl-3{margin-left:1rem !important}.ms-xl-4{margin-left:1.5rem !important}.ms-xl-5{margin-left:3rem !important}.ms-xl-auto{margin-left:auto !important}.p-xl-0{padding:0 !important}.p-xl-1{padding:.25rem !important}.p-xl-2{padding:.5rem !important}.p-xl-3{padding:1rem !important}.p-xl-4{padding:1.5rem !important}.p-xl-5{padding:3rem !important}.px-xl-0{padding-right:0 !important;padding-left:0 !important}.px-xl-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-xl-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-xl-3{padding-right:1rem !important;padding-left:1rem !important}.px-xl-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-xl-5{padding-right:3rem !important;padding-left:3rem !important}.py-xl-0{padding-top:0 !important;padding-bottom:0 !important}.py-xl-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-xl-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-xl-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-xl-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-xl-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-xl-0{padding-top:0 !important}.pt-xl-1{padding-top:.25rem !important}.pt-xl-2{padding-top:.5rem !important}.pt-xl-3{padding-top:1rem !important}.pt-xl-4{padding-top:1.5rem !important}.pt-xl-5{padding-top:3rem !important}.pe-xl-0{padding-right:0 !important}.pe-xl-1{padding-right:.25rem !important}.pe-xl-2{padding-right:.5rem !important}.pe-xl-3{padding-right:1rem !important}.pe-xl-4{padding-right:1.5rem !important}.pe-xl-5{padding-right:3rem !important}.pb-xl-0{padding-bottom:0 !important}.pb-xl-1{padding-bottom:.25rem !important}.pb-xl-2{padding-bottom:.5rem !important}.pb-xl-3{padding-bottom:1rem !important}.pb-xl-4{padding-bottom:1.5rem !important}.pb-xl-5{padding-bottom:3rem !important}.ps-xl-0{padding-left:0 !important}.ps-xl-1{padding-left:.25rem !important}.ps-xl-2{padding-left:.5rem !important}.ps-xl-3{padding-left:1rem !important}.ps-xl-4{padding-left:1.5rem !important}.ps-xl-5{padding-left:3rem !important}.gap-xl-0{gap:0 !important}.gap-xl-1{gap:.25rem !important}.gap-xl-2{gap:.5rem !important}.gap-xl-3{gap:1rem !important}.gap-xl-4{gap:1.5rem !important}.gap-xl-5{gap:3rem !important}.text-xl-start{text-align:left !important}.text-xl-end{text-align:right !important}.text-xl-center{text-align:center !important}}@media(min-width: 1400px){.float-xxl-start{float:left !important}.float-xxl-end{float:right !important}.float-xxl-none{float:none !important}.d-xxl-inline{display:inline !important}.d-xxl-inline-block{display:inline-block !important}.d-xxl-block{display:block !important}.d-xxl-grid{display:grid !important}.d-xxl-table{display:table !important}.d-xxl-table-row{display:table-row !important}.d-xxl-table-cell{display:table-cell !important}.d-xxl-flex{display:flex !important}.d-xxl-inline-flex{display:inline-flex !important}.d-xxl-none{display:none !important}.flex-xxl-fill{flex:1 1 auto !important}.flex-xxl-row{flex-direction:row !important}.flex-xxl-column{flex-direction:column !important}.flex-xxl-row-reverse{flex-direction:row-reverse !important}.flex-xxl-column-reverse{flex-direction:column-reverse !important}.flex-xxl-grow-0{flex-grow:0 !important}.flex-xxl-grow-1{flex-grow:1 !important}.flex-xxl-shrink-0{flex-shrink:0 !important}.flex-xxl-shrink-1{flex-shrink:1 !important}.flex-xxl-wrap{flex-wrap:wrap !important}.flex-xxl-nowrap{flex-wrap:nowrap !important}.flex-xxl-wrap-reverse{flex-wrap:wrap-reverse !important}.justify-content-xxl-start{justify-content:flex-start !important}.justify-content-xxl-end{justify-content:flex-end !important}.justify-content-xxl-center{justify-content:center !important}.justify-content-xxl-between{justify-content:space-between !important}.justify-content-xxl-around{justify-content:space-around !important}.justify-content-xxl-evenly{justify-content:space-evenly !important}.align-items-xxl-start{align-items:flex-start !important}.align-items-xxl-end{align-items:flex-end !important}.align-items-xxl-center{align-items:center !important}.align-items-xxl-baseline{align-items:baseline !important}.align-items-xxl-stretch{align-items:stretch !important}.align-content-xxl-start{align-content:flex-start !important}.align-content-xxl-end{align-content:flex-end !important}.align-content-xxl-center{align-content:center !important}.align-content-xxl-between{align-content:space-between !important}.align-content-xxl-around{align-content:space-around !important}.align-content-xxl-stretch{align-content:stretch !important}.align-self-xxl-auto{align-self:auto !important}.align-self-xxl-start{align-self:flex-start !important}.align-self-xxl-end{align-self:flex-end !important}.align-self-xxl-center{align-self:center !important}.align-self-xxl-baseline{align-self:baseline !important}.align-self-xxl-stretch{align-self:stretch !important}.order-xxl-first{order:-1 !important}.order-xxl-0{order:0 !important}.order-xxl-1{order:1 !important}.order-xxl-2{order:2 !important}.order-xxl-3{order:3 !important}.order-xxl-4{order:4 !important}.order-xxl-5{order:5 !important}.order-xxl-last{order:6 !important}.m-xxl-0{margin:0 !important}.m-xxl-1{margin:.25rem !important}.m-xxl-2{margin:.5rem !important}.m-xxl-3{margin:1rem !important}.m-xxl-4{margin:1.5rem !important}.m-xxl-5{margin:3rem !important}.m-xxl-auto{margin:auto !important}.mx-xxl-0{margin-right:0 !important;margin-left:0 !important}.mx-xxl-1{margin-right:.25rem !important;margin-left:.25rem !important}.mx-xxl-2{margin-right:.5rem !important;margin-left:.5rem !important}.mx-xxl-3{margin-right:1rem !important;margin-left:1rem !important}.mx-xxl-4{margin-right:1.5rem !important;margin-left:1.5rem !important}.mx-xxl-5{margin-right:3rem !important;margin-left:3rem !important}.mx-xxl-auto{margin-right:auto !important;margin-left:auto !important}.my-xxl-0{margin-top:0 !important;margin-bottom:0 !important}.my-xxl-1{margin-top:.25rem !important;margin-bottom:.25rem !important}.my-xxl-2{margin-top:.5rem !important;margin-bottom:.5rem !important}.my-xxl-3{margin-top:1rem !important;margin-bottom:1rem !important}.my-xxl-4{margin-top:1.5rem !important;margin-bottom:1.5rem !important}.my-xxl-5{margin-top:3rem !important;margin-bottom:3rem !important}.my-xxl-auto{margin-top:auto !important;margin-bottom:auto !important}.mt-xxl-0{margin-top:0 !important}.mt-xxl-1{margin-top:.25rem !important}.mt-xxl-2{margin-top:.5rem !important}.mt-xxl-3{margin-top:1rem !important}.mt-xxl-4{margin-top:1.5rem !important}.mt-xxl-5{margin-top:3rem !important}.mt-xxl-auto{margin-top:auto !important}.me-xxl-0{margin-right:0 !important}.me-xxl-1{margin-right:.25rem !important}.me-xxl-2{margin-right:.5rem !important}.me-xxl-3{margin-right:1rem !important}.me-xxl-4{margin-right:1.5rem !important}.me-xxl-5{margin-right:3rem !important}.me-xxl-auto{margin-right:auto !important}.mb-xxl-0{margin-bottom:0 !important}.mb-xxl-1{margin-bottom:.25rem !important}.mb-xxl-2{margin-bottom:.5rem !important}.mb-xxl-3{margin-bottom:1rem !important}.mb-xxl-4{margin-bottom:1.5rem !important}.mb-xxl-5{margin-bottom:3rem !important}.mb-xxl-auto{margin-bottom:auto !important}.ms-xxl-0{margin-left:0 !important}.ms-xxl-1{margin-left:.25rem !important}.ms-xxl-2{margin-left:.5rem !important}.ms-xxl-3{margin-left:1rem !important}.ms-xxl-4{margin-left:1.5rem !important}.ms-xxl-5{margin-left:3rem !important}.ms-xxl-auto{margin-left:auto !important}.p-xxl-0{padding:0 !important}.p-xxl-1{padding:.25rem !important}.p-xxl-2{padding:.5rem !important}.p-xxl-3{padding:1rem !important}.p-xxl-4{padding:1.5rem !important}.p-xxl-5{padding:3rem !important}.px-xxl-0{padding-right:0 !important;padding-left:0 !important}.px-xxl-1{padding-right:.25rem !important;padding-left:.25rem !important}.px-xxl-2{padding-right:.5rem !important;padding-left:.5rem !important}.px-xxl-3{padding-right:1rem !important;padding-left:1rem !important}.px-xxl-4{padding-right:1.5rem !important;padding-left:1.5rem !important}.px-xxl-5{padding-right:3rem !important;padding-left:3rem !important}.py-xxl-0{padding-top:0 !important;padding-bottom:0 !important}.py-xxl-1{padding-top:.25rem !important;padding-bottom:.25rem !important}.py-xxl-2{padding-top:.5rem !important;padding-bottom:.5rem !important}.py-xxl-3{padding-top:1rem !important;padding-bottom:1rem !important}.py-xxl-4{padding-top:1.5rem !important;padding-bottom:1.5rem !important}.py-xxl-5{padding-top:3rem !important;padding-bottom:3rem !important}.pt-xxl-0{padding-top:0 !important}.pt-xxl-1{padding-top:.25rem !important}.pt-xxl-2{padding-top:.5rem !important}.pt-xxl-3{padding-top:1rem !important}.pt-xxl-4{padding-top:1.5rem !important}.pt-xxl-5{padding-top:3rem !important}.pe-xxl-0{padding-right:0 !important}.pe-xxl-1{padding-right:.25rem !important}.pe-xxl-2{padding-right:.5rem !important}.pe-xxl-3{padding-right:1rem !important}.pe-xxl-4{padding-right:1.5rem !important}.pe-xxl-5{padding-right:3rem !important}.pb-xxl-0{padding-bottom:0 !important}.pb-xxl-1{padding-bottom:.25rem !important}.pb-xxl-2{padding-bottom:.5rem !important}.pb-xxl-3{padding-bottom:1rem !important}.pb-xxl-4{padding-bottom:1.5rem !important}.pb-xxl-5{padding-bottom:3rem !important}.ps-xxl-0{padding-left:0 !important}.ps-xxl-1{padding-left:.25rem !important}.ps-xxl-2{padding-left:.5rem !important}.ps-xxl-3{padding-left:1rem !important}.ps-xxl-4{padding-left:1.5rem !important}.ps-xxl-5{padding-left:3rem !important}.gap-xxl-0{gap:0 !important}.gap-xxl-1{gap:.25rem !important}.gap-xxl-2{gap:.5rem !important}.gap-xxl-3{gap:1rem !important}.gap-xxl-4{gap:1.5rem !important}.gap-xxl-5{gap:3rem !important}.text-xxl-start{text-align:left !important}.text-xxl-end{text-align:right !important}.text-xxl-center{text-align:center !important}}@media(min-width: 1200px){.fs-1{font-size:2.5rem !important}.fs-2{font-size:2rem !important}.fs-3{font-size:1.75rem !important}.fs-4{font-size:1.5rem !important}}@media print{.d-print-inline{display:inline !important}.d-print-inline-block{display:inline-block !important}.d-print-block{display:block !important}.d-print-grid{display:grid !important}.d-print-table{display:table !important}.d-print-table-row{display:table-row !important}.d-print-table-cell{display:table-cell !important}.d-print-flex{display:flex !important}.d-print-inline-flex{display:inline-flex !important}.d-print-none{display:none !important}}ul{list-style:none}.hidden{display:none}.user{border:solid 1px #198754;padding:4px 10px;width:15px;height:15px;border-radius:50%;margin:10px 15px 0;color:#fff}.user.logged{background-color:#198754}.footer{position:fixed;bottom:0;background-color:var(--bs-card-cap-bg);width:100%}.footer__list{display:flex;justify-content:space-around;align-items:center}.logo_image{display:inline-block;height:20px;width:60px}", '']); const i = a;
    },
    8841: (t, r, o) => {
'use strict'; o.d(r, { Z:() => i }); let e = o(3645); let a = o.n(e)()((t) => {return t[1]}); a.push([t.id, '\n', '']); const i = a;
    },
    3645: t => {
'use strict'; t.exports = function (t) {
let r = []; return r.toString = function () {
            return this.map(function(r) {
              var o = t(r);
              return r[2] ? '@media '.concat(r[2], ' {').concat(o, '}') : o;
            }).join('');
          }),
          (r.i = function(t, o, e) {
'string'===typeof t && (t = [[null, t, '']]); let a = {}; if (e) {for (let i = 0; i < this.length; i++) {
var n = this[i][0]; null != n && (a[n] = !0)
}} for (let d = 0; d < t.length; d++) {
let l = [].concat(t[d]); e && a[l[0]] || (o && (l[2] ? l[2] = ''.concat(o, ' and ').concat(l[2]) : l[2] = o), r.push(l));
            }
          }),
          r;
        );
      };
    },
    1941: (t, r, o) => {
'use strict'; o.r(r), o.d(r, { default:() => e }); const e = `${o.p  }9669df6bee9adcf770b07623ed939b4b.jpg`
    },
    1313: (t, r, o) => {
'use strict'; o.r(r), o.d(r, { default:() => e }); const e = `${o.p  }e107ca9ad0065d708d18441b00d72a87.gif`
    },
    126: (t, r, o) => {
'use strict'; o.r(r), o.d(r, { default:() => e }); const e = `${o.p  }b8d69dbe4537c9b04b575b2316856739.jpg`
    },
    9389: (t, r, o) => {
'use strict'; o.r(r), o.d(r, { default:() => e }); const e = `${o.p  }8bf45368d0c68759ad693f2f61a19418.mp3`
    },
    904: (t, r, o) => {
'use strict'; o.r(r), o.d(r, { default:() => e }); const e = `${o.p  }fe95e484c435a6154d9c98c8fd4e1ac2.wav`
    },
    1011: (t, r, o) => {
'use strict'; o.r(r), o.d(r, { default:() => e }); const e = `${o.p  }f3224da1ec2a139994429da2419990a0.mp3`
    },
    4808: (t, r, o) => {
'use strict'; o.r(r), o.d(r, { default:() => e }); const e = `${o.p  }1f62b2108de54852a2f68dd8a8769dde.mp3`
    },
    9682: (t, r, o) => {
'use strict'; o.r(r), o.d(r, { default:() => e }); const e = `${o.p  }10f4ec27b7ddb91560b03fbaa7fd778b.mp3`
    },
    1851: (t, r, o) => {
'use strict'; o.r(r), o.d(r, { default:() => n }); let e = o(3379); let a = o.n(e); let i = o(8581); a()(i.Z, { insert:'head', singleton:!1 }); const n = i.Z.locals || {};
    },
    7657: (t, r, o) => {
'use strict'; o.r(r), o.d(r, { default:() => n }); let e = o(3379); let a = o.n(e); let i = o(3865); a()(i.Z, { insert:'head', singleton:!1 }); const n = i.Z.locals || {};
    },
    6394: (t, r, o) => {
'use strict'; o.r(r), o.d(r, { default:() => n }); let e = o(3379); let a = o.n(e); let i = o(3970); a()(i.Z, { insert:'head', singleton:!1 }); const n = i.Z.locals || {};
    },
    7020: (t, r, o) => {
'use strict'; o.r(r), o.d(r, { default:() => n }); let e = o(3379); let a = o.n(e); let i = o(8332); a()(i.Z, { insert:'head', singleton:!1 }); const n = i.Z.locals || {};
    },
    6860: (t, r, o) => {
'use strict'; o.r(r), o.d(r, { default:() => n }); let e = o(3379); let a = o.n(e); let i = o(1528); a()(i.Z, { insert:'head', singleton:!1 }); const n = i.Z.locals || {};
    },
    242: (t, r, o) => {
'use strict'; o.r(r), o.d(r, { default:() => n }); let e = o(3379); let a = o.n(e); let i = o(8841); a()(i.Z, { insert:'head', singleton:!1 }); const n = i.Z.locals || {};
    },
    3379: (t, r, o) => {
'use strict'; let e; let a = function () {
var t = {}; return function (r) {
if (void 0 === t[r]) {
var o = document.querySelector(r); if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) try {
o = o.contentDocument.head
} catch (t) {
o = null
}t[r] = o
} return t[r]
}
}(); let i = []; function n(t) {
        for (var r = -1, o = 0; o < i.length; o++)
          {if (i[o].identifier === t) {
r = o; break
}} return r;
      }
      function d(t, r) {
        for (var o = {}, e = [], a = 0; a < t.length; a++) {
let d = t[a]; let l = r.base ? d[0] + r.base:d[0]; let s = o[l] || 0; let m = ''.concat(l, ' ').concat(s); o[l] = s + 1; let p = n(m); let b = { css:d[1], media:d[2], sourceMap:d[3] }; p !== -1 ? (i[p].references++, i[p].updater(b)) : i.push({ identifier:m, updater:f(b, r), references:1 }), e.push(m);
        }
        return e;
      }
      function l(t) {
let r = document.createElement('style'); let e = t.attributes || {}; if (void 0 === e.nonce) {
let i = o.nc; i && (e.nonce = i);
        }
        if (
          (Object.keys(e).forEach(function(t) {
            r.setAttribute(t, e[t]);
          }),
          'function' === typeof t.insert)
        )
          t.insert(r);
        else {
let n = a(t.insert || 'head'); if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."); n.appendChild(r);
        }
        return r;
      }
      var s;
      var m =
        ((s = []),
        function(t, r) {
          return (s[t] = r), s.filter(Boolean).join('\n');
        });
      function p(t, r, o, e) {
let a = o ? '':e.media ? '@media '.concat(e.media, ' {').concat(e.css, '}') : e.css; if (t.styleSheet)t.styleSheet.cssText = m(r, a); else {
let i = document.createTextNode(a); let n = t.childNodes; n[r] && t.removeChild(n[r]), n.length ? t.insertBefore(i, n[r]) : t.appendChild(i);
        }
      }
      function b(t, r, o) {
let e = o.css; let a = o.media; let i = o.sourceMap; if (a ? t.setAttribute('media', a) : t.removeAttribute('media'), i && 'undefined'!==typeof btoa && (e += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), ' */')), t.styleSheet)t.styleSheet.cssText = e; else {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(e));
        }
      }
      var c = null;
      var g = 0;
      function f(t, r) {
let o; let e; let a; if (r.singleton) {
let i = g++; o = c || (c = l(r)), e = p.bind(null, o, i, !1), a = p.bind(null, o, i, !0);
        } else
          (o = l(r)),
            (e = b.bind(null, o, r)),
            (a = function() {
              !(function(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(o);
            });
        return (
          e(t),
          function(r) {
            if (r) {
              if (
                r.css === t.css &&
                r.media === t.media &&
                r.sourceMap === t.sourceMap
              )
                return;
              e((t = r));
            } else a();
          };
        );
      }
      t.exports = function(t, r) {
        (r = r || {}).singleton ||
          'boolean' === typeof r.singleton ||
          (r.singleton =
            (void 0 === e &&
              (e = Boolean(window && document && document.all && !window.atob)),
            e));
        var o = d((t = t || []), r);
        return function(t) {
          if (
            ((t = t || []),
            '[object Array]' === Object.prototype.toString.call(t))
          ) {
            for (let e = 0; e < o.length; e++) {
let a = n(o[e]); i[a].references--;
            }
            for (var l = d(t, r), s = 0; s < o.length; s++) {
let m = n(o[s]); i[m].references === 0 && (i[m].updater(), i.splice(m, 1));
            }
            o = l;
          }
        };
      };
    },
    4287: t => {
      t.exports =
        '<svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" class="octicon octicon-mark-github v-align-middle"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>';
    },
    9606: t => {
      t.exports =
        '<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 552.8 205.3"><style>.st0{fill:#fff}.st1{clip-path:url(#SVGID_2_)}.st2{clip-path:url(#SVGID_4_)}.st3{clip-path:url(#SVGID_6_)}.st4{clip-path:url(#SVGID_8_)}.st5{fill:#fff;stroke:#000;stroke-width:4;stroke-miterlimit:10}.st6{clip-path:url(#SVGID_8_)}.st6,.st7{fill:none;stroke:#000;stroke-width:4;stroke-miterlimit:10}.st8,.st9{clip-path:url(#SVGID_10_)}.st9{fill:none;stroke:#000;stroke-width:4;stroke-miterlimit:10}</style><title>rs_school_js</title><path d="M285.4 68l26.3-1.7c.6 4.3 1.7 7.5 3.5 9.8 2.9 3.6 6.9 5.4 12.2 5.4 3.9 0 7-.9 9.1-2.8 2-1.5 3.2-3.9 3.2-6.4 0-2.4-1.1-4.7-3-6.2-2-1.8-6.7-3.6-14.1-5.2-12.1-2.7-20.8-6.3-25.9-10.9-5.1-4.3-8-10.6-7.8-17.3 0-4.6 1.4-9.2 4-13 3-4.3 7.1-7.7 12-9.6 5.3-2.3 12.7-3.5 22-3.5 11.4 0 20.1 2.1 26.1 6.4 6 4.2 9.6 11 10.7 20.3l-26 1.5c-.7-4-2.1-6.9-4.4-8.8s-5.3-2.8-9.2-2.8c-3.2 0-5.6.7-7.2 2-1.5 1.2-2.5 3-2.4 5 0 1.5.8 2.9 2 3.8 1.3 1.2 4.4 2.3 9.3 3.3 12.1 2.6 20.7 5.2 26 7.9 5.3 2.7 9.1 6 11.4 9.9 2.4 4 3.6 8.6 3.5 13.3 0 5.6-1.6 11.2-4.8 15.9-3.3 4.9-7.9 8.7-13.3 11-5.7 2.5-12.9 3.8-21.5 3.8-15.2 0-25.7-2.9-31.6-8.8S286.1 77 285.4 68zM6.3 97.6V8.2h46.1c8.5 0 15.1.7 19.6 2.2 4.4 1.4 8.3 4.3 10.9 8.2 2.9 4.3 4.3 9.3 4.2 14.5.3 8.8-4.2 17.2-11.9 21.6-3 1.7-6.3 2.9-9.7 3.5 2.5.7 5 1.9 7.2 3.3 1.7 1.4 3.1 3 4.4 4.7 1.5 1.7 2.8 3.6 3.9 5.6l13.4 25.9H63L48.2 70.2c-1.9-3.5-3.5-5.8-5-6.9-2-1.4-4.4-2.1-6.8-2.1H34v36.3H6.3zM34 44.4h11.7c2.5-.2 4.9-.6 7.3-1.2 1.8-.3 3.4-1.3 4.5-2.8 2.7-3.6 2.3-8.7-1-11.8-1.8-1.5-5.3-2.3-10.3-2.3H34v18.1zM0 174.2l26.3-1.7c.6 4.3 1.7 7.5 3.5 9.8 2.8 3.6 6.9 5.5 12.2 5.5 3.9 0 7-.9 9.1-2.8 2-1.6 3.2-3.9 3.2-6.4 0-2.4-1.1-4.7-3-6.2-2-1.8-6.7-3.6-14.2-5.2-12.1-2.7-20.8-6.3-25.9-10.9-5.1-4.3-8-10.6-7.8-17.3 0-4.6 1.4-9.2 4-13 3-4.3 7.1-7.7 12-9.6 5.3-2.3 12.7-3.5 22-3.5 11.4 0 20.1 2.1 26.1 6.4s9.5 11 10.6 20.3l-26 1.5c-.7-4-2.1-6.9-4.4-8.8-2.2-1.9-5.3-2.8-9.2-2.7-3.2 0-5.6.7-7.2 2.1-1.6 1.2-2.5 3-2.4 5 0 1.5.8 2.9 2 3.8 1.3 1.2 4.4 2.3 9.3 3.3 12.1 2.6 20.7 5.2 26 7.9 5.3 2.7 9.1 6 11.4 9.9 2.4 4 3.6 8.6 3.6 13.2 0 5.6-1.7 11.1-4.8 15.8-3.3 4.9-7.9 8.7-13.3 11-5.7 2.5-12.9 3.8-21.5 3.8-15.2 0-25.7-2.9-31.6-8.8-5.9-6-9.2-13.4-10-22.4z"></path><path d="M133 167.2l24.2 7.3c-1.3 6.1-4 11.9-7.7 17-3.4 4.5-7.9 8-13 10.3-5.2 2.3-11.8 3.5-19.8 3.5-9.7 0-17.7-1.4-23.8-4.2-6.2-2.8-11.5-7.8-16-14.9-4.5-7.1-6.7-16.2-6.7-27.3 0-14.8 3.9-26.2 11.8-34.1s19-11.9 33.4-11.9c11.3 0 20.1 2.3 26.6 6.8 6.4 4.6 11.2 11.6 14.4 21l-24.4 5.4c-.6-2.1-1.5-4.2-2.7-6-1.5-2.1-3.4-3.7-5.7-4.9-2.3-1.2-4.9-1.7-7.5-1.7-6.3 0-11.1 2.5-14.4 7.6-2.5 3.7-3.8 9.6-3.8 17.6 0 9.9 1.5 16.7 4.5 20.4 3 3.7 7.2 5.5 12.7 5.5 5.3 0 9.3-1.5 12-4.4 2.7-3.1 4.7-7.4 5.9-13zm56.5-52.8h27.6v31.3h30.2v-31.3h27.8v89.4h-27.8v-36.2h-30.2v36.2h-27.6v-89.4z"></path><path d="M271.3 159.1c0-14.6 4.1-26 12.2-34.1 8.1-8.1 19.5-12.2 34-12.2 14.9 0 26.3 4 34.4 12S364 144 364 158.4c0 10.5-1.8 19-5.3 25.7-3.4 6.6-8.7 12-15.2 15.6-6.7 3.7-15 5.6-24.9 5.6-10.1 0-18.4-1.6-25-4.8-6.8-3.4-12.4-8.7-16.1-15.2-4.1-7-6.2-15.7-6.2-26.2zm27.6.1c0 9 1.7 15.5 5 19.5 3.3 3.9 7.9 5.9 13.7 5.9 5.9 0 10.5-1.9 13.8-5.8s4.9-10.8 4.9-20.8c0-8.4-1.7-14.6-5.1-18.4-3.4-3.9-8-5.8-13.8-5.8-5.1-.2-10 2-13.4 5.9-3.4 3.9-5.1 10.4-5.1 19.5zm93.4-.1c0-14.6 4.1-26 12.2-34.1 8.1-8.1 19.5-12.2 34-12.2 14.9 0 26.4 4 34.4 12S485 144 485 158.4c0 10.5-1.8 19-5.3 25.7-3.4 6.6-8.7 12-15.2 15.6-6.7 3.7-15 5.6-24.9 5.6-10.1 0-18.4-1.6-25-4.8-6.8-3.4-12.4-8.7-16.1-15.2-4.1-7-6.2-15.7-6.2-26.2zm27.6.1c0 9 1.7 15.5 5 19.5 3.3 3.9 7.9 5.9 13.7 5.9 5.9 0 10.5-1.9 13.8-5.8 3.3-3.9 4.9-10.8 4.9-20.8 0-8.4-1.7-14.6-5.1-18.4-3.4-3.9-8-5.8-13.8-5.8-5.1-.2-10.1 2-13.4 5.9-3.4 3.9-5.1 10.4-5.1 19.5z"></path><path d="M482.1 114.4h27.6v67.4h43.1v22H482v-89.4z"></path><ellipse transform="rotate(-37.001 420.46 67.88)" class="st0" cx="420.5" cy="67.9" rx="63" ry="51.8"></ellipse><defs><ellipse id="SVGID_1_" transform="rotate(-37.001 420.46 67.88)" cx="420.5" cy="67.9" rx="63" ry="51.8"></ellipse></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_" overflow="visible"></use></clipPath><g class="st1"><path transform="rotate(-37.001 420.82 68.353)" class="st0" d="M330.9-14.2h179.8v165.1H330.9z"></path><g id="Layer_2_1_"><defs><path id="SVGID_3_" transform="rotate(-37.001 420.82 68.353)" d="M330.9-14.2h179.8v165.1H330.9z"></path></defs><clipPath id="SVGID_4_"><use xlink:href="#SVGID_3_" overflow="visible"></use></clipPath><g id="Layer_1-2" class="st2"><ellipse transform="rotate(-37.001 420.46 67.88)" class="st0" cx="420.5" cy="67.9" rx="63" ry="51.8"></ellipse><defs><ellipse id="SVGID_5_" transform="rotate(-37.001 420.46 67.88)" cx="420.5" cy="67.9" rx="63" ry="51.8"></ellipse></defs><clipPath id="SVGID_6_"><use xlink:href="#SVGID_5_" overflow="visible"></use></clipPath><g class="st3"><path transform="rotate(-37 420.799 68.802)" class="st0" d="M357.8 17h125.9v103.7H357.8z"></path><defs><path id="SVGID_7_" transform="rotate(-37 420.799 68.802)" d="M357.8 17h125.9v103.7H357.8z"></path></defs><clipPath id="SVGID_8_"><use xlink:href="#SVGID_7_" overflow="visible"></use></clipPath><g class="st4"><ellipse transform="rotate(-37.001 420.46 67.88)" class="st5" cx="420.5" cy="67.9" rx="63" ry="51.8"></ellipse></g><path transform="rotate(-37 420.799 68.802)" class="st6" d="M357.8 17h125.9v103.7H357.8z"></path><ellipse transform="rotate(-37.001 420.46 67.88)" class="st7" cx="420.5" cy="67.9" rx="63" ry="51.8"></ellipse><path transform="rotate(-37 420.799 68.802)" class="st0" d="M357.8 17h125.9v103.7H357.8z"></path><defs><path id="SVGID_9_" transform="rotate(-37 420.799 68.802)" d="M357.8 17h125.9v103.7H357.8z"></path></defs><clipPath id="SVGID_10_"><use xlink:href="#SVGID_9_" overflow="visible"></use></clipPath><g class="st8"><ellipse transform="rotate(-37.001 420.46 67.88)" class="st5" cx="420.5" cy="67.9" rx="63" ry="51.8"></ellipse></g><path transform="rotate(-37 420.799 68.802)" class="st9" d="M357.8 17h125.9v103.7H357.8z"></path><path transform="rotate(-37.001 420.82 68.353)" class="st7" d="M330.9-14.2h179.8v165.1H330.9z"></path></g><ellipse transform="rotate(-37.001 420.46 67.88)" class="st7" cx="420.5" cy="67.9" rx="63" ry="51.8"></ellipse><path d="M392.4 61.3l10-7 12.3 17.5c2.1 2.8 3.7 5.8 4.9 9.1.7 2.5.5 5.2-.5 7.6-1.3 3-3.4 5.5-6.2 7.3-3.3 2.3-6.1 3.6-8.5 4-2.3.4-4.7 0-6.9-1-2.4-1.2-4.5-2.9-6.1-5.1l8.6-8c.7 1.1 1.6 2.1 2.6 2.9.7.5 1.5.8 2.4.8.7 0 1.4-.3 1.9-.7 1-.6 1.7-1.8 1.6-3-.3-1.7-1-3.4-2.1-4.7l-14-19.7zm30 11.1l9.1-7.2c1 1.2 2.3 2.1 3.7 2.6 2 .6 4.1.2 5.8-1.1 1.2-.8 2.2-1.9 2.6-3.3.6-1.8-.4-3.8-2.2-4.4-.3-.1-.6-.2-.9-.2-1.2-.1-3.3.4-6.4 1.7-5.1 2.1-9.1 2.9-12.1 2.6-2.9-.3-5.6-1.8-7.2-4.3-1.2-1.7-1.8-3.7-1.9-5.7 0-2.3.6-4.6 1.9-6.5 1.9-2.7 4.2-5 7-6.8 4.2-2.9 7.9-4.3 11.1-4.3 3.2 0 6.2 1.5 9 4.6l-9 7.1c-1.8-2.3-5.2-2.8-7.5-1l-.3.3c-1 .6-1.7 1.5-2.1 2.6-.3.8-.1 1.7.4 2.4.4.5 1 .9 1.7.9.8.1 2.2-.3 4.2-1.2 5-2.1 8.8-3.3 11.4-3.7 2.2-.4 4.5-.2 6.6.7 1.9.8 3.5 2.2 4.6 3.9 1.4 2 2.2 4.4 2.3 6.9.1 2.6-.6 5.1-2 7.3-1.8 2.7-4.1 5-6.8 6.8-5.5 3.8-10 5.4-13.6 4.8-3.9-.6-7.1-2.6-9.4-5.5z"></path></g></g></g></svg>';
    },
    4539: t => {
      t.exports =
        '<svg viewBox="0 0 36 36" class="result__percentage blue"><path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path><path class="circle" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path><text x="18" y="20.35" class="percentage"></text></svg>';
    },
    4709: t => {
      t.exports =
        '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M2846 4943 c-10 -3 -400 -310 -867 -684 l-849 -678 -442 -3 c-437 -3 -444 -3 -489 -26 -74 -36 -125 -87 -161 -160 l-33 -67 0 -765 0 -765 33 -67 c36 -73 87 -124 161 -160 45 -23 52 -23 489 -26 l442 -3 848 -678 c467 -373 859 -681 873 -684 75 -20 156 12 194 77 l25 43 0 2263 0 2263 -25 43 c-38 65 -121 97 -199 77z"></path><path d="M4249 4290 c-71 -21 -119 -87 -119 -165 0 -60 7 -72 104 -180 154 -171 247 -307 337 -491 233 -478 270 -1026 103 -1533 -93 -282 -227 -509 -440 -746 -97 -108 -104 -120 -104 -180 0 -115 101 -194 212 -165 34 9 60 29 120 90 291 299 512 714 603 1135 165 764 -54 1558 -591 2134 -91 98 -149 124 -225 101z"></path><path d="M3770 3807 c-77 -25 -120 -83 -120 -160 0 -62 16 -91 100 -183 225 -248 342 -556 342 -904 0 -345 -115 -652 -338 -899 -89 -100 -104 -126 -104 -186 0 -81 48 -144 125 -164 48 -12 102 -2 143 27 42 31 168 180 235 280 65 95 151 268 190 377 72 203 107 483 88 698 -34 382 -165 695 -410 982 -107 126 -170 159 -251 132z"></path></g></svg>';
    },
    1014: function(t, r, o) {
'use strict'; let e = this && this.__awaiter || function (t, r, o, e) {
          return new (o || (o = Promise))(function(a, i) {
            function n(t) {
              try {
                l(e.next(t));
              } catch (t) {
                i(t);
              }
            }
            function d(t) {
              try {
                l(e.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var r;
              t.done
                ? a(t.value)
                : ((r = t.value),
                  r instanceof o
                    ? r
                    : new o(function(t) {
                        t(r);
                      })).then(n, d);
            }
            l((e = e.apply(t, r || [])).next());
          });
        };
      var a =
        (this && this.__importDefault) ||
        function(t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(r, '__esModule', { value: !0 });
      const i = o(2164);
      const n = o(9655);
      const d = o(8363);
      const l = o(7671);
      const s = o(2234);
      const m = o(2293);
      const p = o(1231);
      const b = a(o(904));
      const c = a(o(9389));
      const g = o(6230);
      const f = o(4693);
      const u = o(3888);
      const v = o(8799);
      const h = o(3689);
      const x = o(2646);
      const w = o(6668);
      const y = o(1170);
      r.default = class {
        constructor(t, r = !1, o, a) {
          (this.words = []),
            (this.answers = []),
            (this.correct = []),
            (this.incorrect = []),
            (this.canMoveToNext = !1),
            (this.isRestartGame = !1),
            (this.inRow = 0),
            (this.maxInRow = 0),
            (this.start = () =>
              e(this, void 0, void 0, function*() {
                yield this.beforeGame(),
                  yield this.render(),
                  this.isRestartGame || this.isFromBook || (0, u.showManual)();
              })),
            (this.onLevelSelect = t =>
              e(this, void 0, void 0, function*() {
                this.toggleListeners(),
                  this.toolbar.prepend(this.mute),
                  this.root.prepend(this.toolbar),
                  yield (0, n.clear)(this.container),
                  (this.group = t);
                try {
                  const t =
                    this.group > 5
                      ? yield (0, i.getUserWordsByDifficulty)()
                      : yield (0, i.getWords)(this.page, this.group);
                  if (void 0 !== t) {
                    (this.words = t),
                      (this.current = yield (0, n.getRandomWord)(
                        this.selected,
                        this.words
                      ));
                    const r = yield (0, n.getRandomWords)(
                      this.current,
                      this.words
                    );
                    this.selected.push(this.current.word),
                      this.progress.append(
                        ...(0, s.progress)(this.words.length)
                      ),
                      yield (0, l.nextWord)(this.container, this.current, r),
                      this.container.append(this.next),
                      this.render();
                  }
                } catch (t) {
                  console.log(t);
                }
              })),
            (this.onClickNext = t => {
              this.canMoveToNext ? this.onNextWord() : this.onSelectVariant(t);
            }),
            (this.onKeyPress = t =>
              e(this, void 0, void 0, function*() {
                switch (t.key) {
                  case 'Enter':
                    this.canMoveToNext
                      ? this.onNextWord()
                      : this.onSelectVariant(t);
                    break;
                  case ' ':
                    t.preventDefault(),
                      this.playAudio(`${g.host}/${this.current.audio}`);
                    break;
                  case '1':
                  case '2':
                  case '3':
                  case '4':
                  case '5':
                    if (this.canMoveToNext) return;
                    this.onSelectVariant(t);
                    break;
                  default:
                    return;
                }
              })),
            (this.onNextWord = () =>
              e(this, void 0, void 0, function*() {
                if (
                  ((this.canMoveToNext = !1),
                  ++this.count,
                  this.count !== this.words.length)
                ) {
                  this.current = yield (0, n.getRandomWord)(
                    this.selected,
                    this.words
                  );
                  const t = yield (0, n.getRandomWords)(
                    this.current,
                    this.words
                  );
                  this.selected.push(this.current.word),
                    yield (0, l.nextWord)(this.container, this.current, t),
                    this.container.append(this.next),
                    this.render();
                } else yield this.endGame();
              })),
            (this.onSelectVariant = t =>
              e(this, void 0, void 0, function*() {
let r; let o; let e; let a; let i; const d = this.container.querySelector(`[data-word="${(r = this.current) === null || void 0 === r ? void 0 : r.wordTranslate}"]`); const l = t instanceof KeyboardEvent ? this.container.querySelector(`[data-key="${t.key}"]`) : t.target; let s; let m = b.default; if (this.updateCard(), this.updateProgress(), this.container.append(this.audio), l && l.dataset) {
                  const { word: t } = l.dataset;
                  (s =
                    t ===
                    ((o = this.current) === null || void 0 === o
                      ? void 0
                      : o.wordTranslate)),
                    s
                      ? (this.inRow++,
                        l.classList.add('selected-correct'),
                        (l.innerHTML = `${p.checkIcon} ${l.innerText}`),
                        this.current &&
                          ((e = this.correct) === null ||
                            void 0 === e ||
                            e.push(this.current.word)))
                      : (this.updateMaxInRow(),
                        (this.inRow = 0),
                        l.classList.add('selected-mistake'),
                        d.classList.add('unselected-correct'),
                        (m = c.default),
                        this.current &&
                          ((a = this.incorrect) === null ||
                            void 0 === a ||
                            a.push(this.current.word)));
                } else d.classList.add('unselected-correct'), null === (i = this.incorrect) || void 0 === i || i.push(this.current.word), (m = c.default);
                (this.canMoveToNext = !0),
                  (this.next.innerText = p.nextNextText),
                  (0, n.getElementsList)('.answers__item').forEach(t => {
                    t.removeEventListener('click', this.onSelectVariant),
                      t.classList.contains('selected-correct') ||
                        t.classList.contains('unselected-correct') ||
                        t.classList.add('unselected');
                  }),
                  this.isMuteOn() || this.playAudio(m);
              })),
            (this.render = () =>
              e(this, void 0, void 0, function*() {
                this.root.append(this.progress, this.container),
                  (this.next.innerText = p.nextDefaultText),
                  (0, n.getElementsList)('.answers__item').forEach(t =>
                    t.addEventListener('click', this.onSelectVariant)
                  );
              })),
            (this.updateProgress = () => {
let t; (t = this.progress.querySelector(`[data-count="${this.count}"]`)) === null || void 0 === t || t.classList.add('marked');
            }),
            (this.updateMaxInRow = () => {
              this.maxInRow =
                this.inRow > this.maxInRow ? this.inRow : this.maxInRow;
            }),
            (this.updateCard = () => {
let t; const r = this.container.querySelector('.word__image'); const o = this.container.querySelector('.word__translation'); r.style.display = 'block', o.innerHTML = `<strong>${(t = this.current) === null || void 0 === t ? void 0 : t.word}</strong>`;
            }),
            (this.playAudio = t => {
              this.audio.pause(),
                (this.audio.src = t),
                this.audio.addEventListener('canplaythrough', () =>
                  e(this, void 0, void 0, function*() {
                    yield this.audio.play();
                  })
                );
            }),
            (this.endGame = () =>
              e(this, void 0, void 0, function*() {
                this.next.disabled = !0;
                const t = this.words.filter(t => {
                  var r;
                  return null === (r = this.correct) || void 0 === r
                    ? void 0
                    : r.includes(t.word);
                });
                const r = this.words.filter(t => {
                  var r;
                  return null === (r = this.incorrect) || void 0 === r
                    ? void 0
                    : r.includes(t.word);
                });
                this.updateMaxInRow(),
                  (0, n.clear)(this.container),
                  (0, m.showResult)(
                    t,
                    r,
                    this.maxInRow,
                    this.words.length,
                    this.onRestart,
                    this.onClose
                  ),
                  this.toggleListeners(!1);
              })),
            (this.resetGame = () => {
              this.progress
                .querySelectorAll('.game__progress_item')
                .forEach(t => t.classList.remove('marked')),
                (this.next.disabled = !1),
                (this.selected.length = 0),
                (this.words.length = 0),
                (this.correct.length = 0),
                (this.incorrect.length = 0),
                (this.current = void 0),
                (this.isRestartGame = !0),
                (this.count = this.maxInRow = this.inRow = 0);
            }),
            (this.isMuteOn = () =>
              !0 === JSON.parse(localStorage.getItem('mute'))),
            (this.beforeGame = () =>
              e(this, void 0, void 0, function*() {
this.group !== 0 || this.isRestartGame ? yield this.onLevelSelect(this.group) : yield this.showLevels(), this.progress.classList.add('game__progress'), this.container.className = 'game', this.next.classList.add('game__next_word'), this.next.innerText = p.nextDefaultText;
              })),
            (this.showLevels = () =>
              e(this, void 0, void 0, function*() {
                yield (0, d.drawLevels)(this.container, this.onLevelSelect);
              })),
            (this.onRestart = () => {
              (0, v.updateStatistics)(
                (0, h.getUser)(),
                this.prepareStatistics()
              ),
                this.resetGame(),
                this.start(),
                this.toggleListeners(!0);
            }),
            (this.onClose = () => {
              this.resetGame(), this.toggleListeners(!1);
              const t = document.querySelector(`.${w.Router.MAIN}`);
              localStorage.setItem('router', w.Router.MAIN),
                (document.location.hash = `#${w.Router.MAIN}`),
                (0, y.renderPage)(w.Router.MAIN, t);
            }),
            (this.toggleListeners = (t = !0) => {
              t
                ? (this.next.addEventListener('click', this.onClickNext),
                  document.addEventListener('keydown', this.onKeyPress))
                : (this.next.removeEventListener('click', this.onClickNext),
                  document.removeEventListener('keydown', this.onKeyPress));
            }),
            (this.formateDate = t => t.toLocaleDateString('ru-RU')),
            (this.prepareStatistics = () => {
              const t = this.words
                .map(t => {
                  if (this.correct.includes(t.id)) return t.word;
                })
                .filter(t => t)
                .join(',');
              return {
                date: this.formateDate(new Date()),
                learnedWords: t,
                totalLearningWords: this.correct.length + this.incorrect.length,
                seriesMax: this.maxInRow
              };
            }),
            (this.root = t),
            (this.mute = (0, f.mute)()),
            (this.toolbar = (0, x.toolbar)(this.onClose)),
            (this.container = document.createElement('div')),
            (this.progress = document.createElement('div')),
            (this.next = document.createElement('button')),
            (this.audio = new Audio()),
            (this.isMute = !1),
            (this.selected = []),
            (this.count = 0),
            (this.group = o || 0),
            (this.page = a || Math.floor(30 * Math.random())),
            (this.isFromBook = r);
        }
      };
    },
    1231: (t, r) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.levels = r.errorPath = r.successPath = r.nextNextText = r.nextDefaultText = r.noteIcon = r.statisticCircleGraph = r.wrongIcon = r.checkIcon = r.soundIcon = void 0, r.soundIcon = '<svg class="sound" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></svg>', r.checkIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">\n<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>\n<path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>\n</svg>', r.wrongIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">\n<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>\n</svg>', r.statisticCircleGraph = '<svg viewBox="0 0 36 36">\n<path\n  d="M18 2.0845\n    a 15.9155 15.9155 0 0 1 0 31.831\n    a 15.9155 15.9155 0 0 1 0 -31.831"\n  fill="none"\n  stroke="#444";\n  stroke-width="1";\n/>\n</svg>', r.noteIcon = '♪', r.nextDefaultText = 'не знаю', r.nextNextText = 'следующее', r.successPath = 'assets/sounds/success.wav', r.errorPath = 'assets/sounds/error.mp3', r.levels = [{ group:0, color:'rgb(242, 105, 92)' }, { group:1, color:'rgb(242, 166, 99)' }, { group:2, color:'rgb(250, 170, 186)' }, { group:3, color:'rgb(136, 191, 176)' }, { group:4, color:'rgb(96, 164, 191)' }, { group:5, color:'rgb(89, 72, 77)' }];
    },
    3689: (t, r) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.getUser = r.isAuthenticated = void 0, r.isAuthenticated = () => !!localStorage.getItem('email'), r.getUser = () => {
          if (r.isAuthenticated)
            return JSON.parse(localStorage.getItem('data'));
        });
    },
    8799: function(t, r, o) {
'use strict'; let e = this && this.__awaiter || function (t, r, o, e) {
          return new (o || (o = Promise))(function(a, i) {
            function n(t) {
              try {
                l(e.next(t));
              } catch (t) {
                i(t);
              }
            }
            function d(t) {
              try {
                l(e.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var r;
              t.done
                ? a(t.value)
                : ((r = t.value),
                  r instanceof o
                    ? r
                    : new o(function(t) {
                        t(r);
                      })).then(n, d);
            }
            l((e = e.apply(t, r || [])).next());
          });
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.updateStatistics = void 0);
      const a = o(6230);
      r.updateStatistics = (t, r) =>
        e(void 0, void 0, void 0, function*() {
          const o = {
            learnedWords: r.learnedWords.split(',').length,
            optional: r
          };
          if (t) {
            const { token: r, userId: e } = t;
            const i = yield fetch(`${a.host}/users/${e}/statistics`, {
              method: 'PUT',
              body: JSON.stringify(o),
              headers: {
                Authorization: `Bearer ${r}`,
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
            });
            const n = yield i.json();
            console.log(n);
          } else localStorage.setItem('statistic', JSON.stringify(r));
        });
    },
    2164: function(t, r, o) {
'use strict'; let e = this && this.__awaiter || function (t, r, o, e) {
          return new (o || (o = Promise))(function(a, i) {
            function n(t) {
              try {
                l(e.next(t));
              } catch (t) {
                i(t);
              }
            }
            function d(t) {
              try {
                l(e.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var r;
              t.done
                ? a(t.value)
                : ((r = t.value),
                  r instanceof o
                    ? r
                    : new o(function(t) {
                        t(r);
                      })).then(n, d);
            }
            l((e = e.apply(t, r || [])).next());
          });
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.getUserWordsByDifficulty = r.getWords = void 0);
      const a = o(6230);
      (r.getWords = (t = 0, r) =>
        e(void 0, void 0, void 0, function*() {
          const o = yield fetch(`${a.host}/words?page=${t}&group=${r}`);
          if (o.ok) return yield o.json();
          throw new Error(o.statusText);
        })),
        (r.getUserWordsByDifficulty = (t = 'hard', r = 3600) =>
          e(void 0, void 0, void 0, function*() {
            const o = JSON.parse(localStorage.getItem('data'));
            const { userId: e, token: i } = o;
            try {
              const o = yield fetch(
                `${a.host}/users/${e}/aggregatedWords?wordsPerPage=${r}&filter=%7B%22%24and%22%3A%5B%7B%22userWord.difficulty%22%3A%22${t}%22%7D%5D%7D`,
                {
                  headers: {
                    Authorization: `Bearer ${i}`,
                    Accept: 'application/json',
                    'Access-Control-Allow-Origin': '*'
                  }
                }
              );
              return (yield o.json())[0].paginatedResults;
            } catch (t) {
              console.log(t);
            }
          }));
    },
    9655: function(t, r) {
'use strict'; let o = this && this.__awaiter || function (t, r, o, e) {
          return new (o || (o = Promise))(function(a, i) {
            function n(t) {
              try {
                l(e.next(t));
              } catch (t) {
                i(t);
              }
            }
            function d(t) {
              try {
                l(e.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var r;
              t.done
                ? a(t.value)
                : ((r = t.value),
                  r instanceof o
                    ? r
                    : new o(function(t) {
                        t(r);
                      })).then(n, d);
            }
            l((e = e.apply(t, r || [])).next());
          });
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.getElementsList = r.getRandomWord = r.getRandomWords = r.getRandomNumber = r.clear = r.shuffle = void 0),
        (r.shuffle = t => {
          const r = t.slice();
          for (let t = r.length - 1; t > 0; t--) {
            const o = Math.floor(Math.random() * (t + 1));
            [r[t], r[o]] = [r[o], r[t]];
          }
          return r;
        }),
        (r.clear = t =>
          o(void 0, void 0, void 0, function*() {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
          })),
        (r.getRandomNumber = t => Math.floor(Math.random() * t)),
        (r.getRandomWords = (t, e) =>
          o(void 0, void 0, void 0, function*() {
            const o = [];
            o.push(t);
            const a = e.length < 5 ? e.length : 5;
            for (; o.length < a; ) {
              const t = (0, r.getRandomNumber)(Math.random() * e.length);
              const a = e[t];
              o.includes(a) || o.push(a);
            }
            return (0, r.shuffle)(o);
          })),
        (r.getRandomWord = (t, e) =>
          o(void 0, void 0, void 0, function*() {
            return e.filter(
              r => !t.includes(r.word)
            )[(0, r.getRandomNumber)(e.length - t.length)];
          })),
        (r.getElementsList = t => document.querySelectorAll(t));
    },
    5969: function(t, r, o) {
'use strict'; let e = this && this.__importDefault || function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.renderGame1Page = void 0);
      const a = e(o(1014));
      const i = o(5216);
      o(1851),
        (r.renderGame1Page = (t = !1) => {
          const r = document.getElementById('root');
          for (; r == null ? void 0 : r.lastChild; )
            r == null || r.lastChild.remove();
          (0, i.removeFooter)();
          const o = JSON.parse(localStorage.getItem('currentPageGroup'));
          const e = document.createElement('section');
          if (
            (e.classList.add('game-1', 'audio__challenge'),
            null == r || r.append(e),
            o && t)
          ) {
            const { page: r, group: i } = o;
            new a.default(e, t, i, r).start();
          } else new a.default(e).start();
        });
    },
    8363: function(t, r, o) {
'use strict'; let e = this && this.__awaiter || function (t, r, o, e) {
          return new (o || (o = Promise))(function(a, i) {
            function n(t) {
              try {
                l(e.next(t));
              } catch (t) {
                i(t);
              }
            }
            function d(t) {
              try {
                l(e.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var r;
              t.done
                ? a(t.value)
                : ((r = t.value),
                  r instanceof o
                    ? r
                    : new o(function(t) {
                        t(r);
                      })).then(n, d);
            }
            l((e = e.apply(t, r || [])).next());
          });
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.drawLevels = void 0);
      const a = o(1231);
      const i = o(9655);
      r.drawLevels = (t, r) =>
        e(void 0, void 0, void 0, function*() {
          yield (0, i.clear)(t);
          const o = document.createElement('h3');
          const n = document.createElement('div');
          (o.innerText = 'Выберите уровень'),
            (o.className = 'game__heading'),
            (n.className = 'game__levels'),
            a.levels.forEach(t => {
              ((t, r, o) => {
                e(void 0, void 0, void 0, function*() {
                  const { group: e, color: a } = t,
                    i = document.createElement('button'),
                    n = document.createElement('span');
                  i.classList.add('words__level'),
                    (i.dataset.group = `${e}`),
                    (i.style.backgroundColor = a),
                    n.classList.add('words__level_item'),
                    (n.innerText = `${t.group + 1}`),
                    i.addEventListener('click', () => o(e)),
                    i.append(n),
                    r.append(i);
                });
              })(t, n, r);
            }),
            t.append(o, n);
        });
    },
    3888: (t, r) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.showManual = void 0, r.showManual = () => {
          const t = document.querySelector('.game');
          const r = document.createElement('div');
          (r.className = 'game__manual'),
            (r.innerHTML =
              '<p>Выберите верный вариант перевода из предложенных слов,\n    используя клавишы <b>1</b>, <b>2</b>, <b>3</b>, <b>4</b>, <b>5</b>.<p>\n    <p><strong>Space</strong>, чтобы воспроизвести слово, <strong>Enter</strong> для перехода\n    к следующему слову, либо просто используйте мышку.</p>'),
            t.prepend(r);
        });
    },
    7671: function(t, r, o) {
'use strict'; let e = this && this.__awaiter || function (t, r, o, e) {
          return new (o || (o = Promise))(function(a, i) {
            function n(t) {
              try {
                l(e.next(t));
              } catch (t) {
                i(t);
              }
            }
            function d(t) {
              try {
                l(e.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var r;
              t.done
                ? a(t.value)
                : ((r = t.value),
                  r instanceof o
                    ? r
                    : new o(function(t) {
                        t(r);
                      })).then(n, d);
            }
            l((e = e.apply(t, r || [])).next());
          });
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.nextWord = void 0);
      const a = o(1231);
      const i = o(9655);
      const n = o(6230);
      r.nextWord = (t, r, o) =>
        e(void 0, void 0, void 0, function*() {
          yield (0, i.clear)(t);
          const d = document.createElement('div');
          const l = document.createElement('div');
          const s = document.createElement('img');
          const m = document.createElement('button');
          const p = document.createElement('p');
          const b = document.createElement('audio');
          const c = document.createElement('div');
          const g = document.createElement('div');
          (b.src = `${n.host}/${r.audio}`),
            (b.autoplay = !0),
            (s.src = `${n.host}/${r.image}`),
            (s.alt = `${r.word}`),
            (m.className = 'word__sound'),
            (m.innerHTML = a.soundIcon),
            m.addEventListener('click', () =>
              e(void 0, void 0, void 0, function*() {
                return yield b.play();
              })
            ),
            (p.className = 'word__translation'),
            (d.className = 'word'),
            (l.className = 'word__wrapper'),
            (g.className = 'word__image'),
            g.append(s),
            l.append(g, m),
            d.append(l, p, b),
            (c.className = 'answers'),
            [...o].sort().forEach((t, r) => {
              ((t, r, o) => {
                const e = document.createElement('label');
                (e.className = 'answers__item'),
                  (e.innerText = `${o + 1}. ${r.wordTranslate}`),
                  (e.dataset.key = `${o + 1}`),
                  (e.dataset.word = `${r.wordTranslate}`),
                  t.append(e);
              })(c, t, r);
            }),
            t.append(d, c);
        });
    },
    2234: (t, r) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.progress = void 0, r.progress = (t = 20) => Array(t).fill('').map((t, r) => {
const o = document.createElement('span'); return o.classList.add('game__progress_item'), o.dataset.count = `${r}`, o
});
    },
    2293: function(t, r, o) {
'use strict'; let e = this && this.__awaiter || function (t, r, o, e) {
          return new (o || (o = Promise))(function(a, i) {
            function n(t) {
              try {
                l(e.next(t));
              } catch (t) {
                i(t);
              }
            }
            function d(t) {
              try {
                l(e.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var r;
              t.done
                ? a(t.value)
                : ((r = t.value),
                  r instanceof o
                    ? r
                    : new o(function(t) {
                        t(r);
                      })).then(n, d);
            }
            l((e = e.apply(t, r || [])).next());
          });
        };
      var a =
        (this && this.__importDefault) ||
        function(t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.showResult = void 0);
      const i = o(1231);
      const n = o(6230);
      const d = a(o(4539));
      const l = t =>
        e(void 0, void 0, void 0, function*() {
          let r = t.target;
          r = r.closest('.audio');
          const o = r.dataset.audio,
            e = new Audio(`${n.host}${o}`);
          yield e.play();
        });
      const s = t => {
        t.classList.remove('show'),
          setTimeout(() => {
            document.body.removeChild(t);
          }, 200);
      };
      const m = (t, r) =>
        t.map(t => {
          const o = document.createElement('li');
          return (
            o.classList.add(`${r}__answers_item`),
            (o.innerHTML = `<span class="audio" data-audio="${t.audio}">${i.soundIcon}</span><span class="word">${t.word}</span><span class="translate">&nbsp;-&nbsp;${t.wordTranslate}</span>`),
            o
          );
        });
      r.showResult = (t, r, o, e, a, i) => {
        const n = document.createElement('div');
        const p = document.createElement('div');
        const b = document.createElement('div');
        const c = document.createElement('div');
        const g = document.createElement('button');
        const f = ((t, r, o, e) => {
let a; let i; const n = document.createElement('div'); const l = document.createElement('ul'); const s = document.createElement('ul'); const p = document.createElement('ul'); const b = document.createElement('p'); const c = document.createElement('p'); const g = document.createElement('div'); const f = t.length; const u = r.length; n.classList.add('modal-body'), g.classList.add('statistics__section'), l.classList.add('game__statistic'), s.classList.add('correct__answers'), p.classList.add('incorrect__answers'), b.classList.add('h6', 'text-muted'), c.classList.add('h6', 'text-muted'), l.innerHTML = `\n        <li class="game__statistic__item">In row<span class="badge bg-warning">${o}</span></li>\n        <li class="game__statistic__item">Correct<span class="badge bg-success">${f}</span></li>\n        <li class="game__statistic__item">Wrong<span class="badge bg-danger">${u}</span></li>\n    `, b.innerHTML = `Correct&nbsp;<span class="badge bg-success text-light">${f}</span>`, c.innerHTML = `Mistakes&nbsp;<span class="badge bg-danger text-light">${u}</span>`, s.append(...m(t, 'correct')), p.append(...m(r, 'incorrect')); const v = Math.ceil(t.length / e * 100); return g.innerHTML = d.default, g.querySelector('.percentage').textContent = `${v}%`, (a = g.querySelector('.circle-bg')) === null || void 0 === a || a.setAttribute('stroke-dasharray', `${v} ,100`), (i = g.querySelector('.circle')) === null || void 0 === i || i.setAttribute('stroke-dasharray', `${v} ,100`), g.appendChild(l), n.append(g, b, s, c, p), n;
          );
        })(t, r, o, e);
        g.addEventListener('click', () => {
          s(n), setTimeout(() => a(), 200);
        }),
          n.classList.add('modal', 'fade'),
          (n.style.display = 'block'),
          p.classList.add(
            'modal-dialog',
            'modal-dialog-centered',
            'modal-dialog-scrollable'
          ),
          b.classList.add('modal-content'),
          (g.innerText = 'Restart'),
          g.classList.add('btn', 'btn-primary', 'btn-restart'),
          c.classList.add('modal-footer'),
          b.insertAdjacentHTML(
            'afterbegin',
            '<div class="modal-header">\n        <h5 class="modal-title">Result</h5>\n        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close">\n        </button>\n        </div>'
          ),
          c.appendChild(g),
          b.append(f, c),
          p.appendChild(b),
          n.append(p),
          f.querySelectorAll('.audio').forEach(t => {
            t.addEventListener('click', l);
          });
        const u = b.querySelector('.btn-close');
        setTimeout(() => {
          n.classList.add('show');
        }, 200),
          u.addEventListener('click', () => {
            s(n), setTimeout(() => i(), 200);
          }),
          document.body.append(n);
      };
    },
    4693: (t, r, o) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.mute = void 0; const e = o(1231); r.mute = () => {
        const t = document.createElement('div');
        const r = JSON.parse(localStorage.getItem('mute'));
        return (
          t.classList.add('game__mute'),
          (t.innerHTML = `<span>${e.noteIcon}</span>`),
          r && t.classList.add('game__mute_on'),
          t.addEventListener('click', () => {
            t.classList.toggle('game__mute_on'),
              localStorage.setItem(
                'mute',
                JSON.stringify(t.classList.contains('game__mute_on'))
              );
          }),
          t;
        );
      };
    },
    2646: (t, r) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.toolbar = void 0, r.toolbar = (t, r, o) => {
          const a = document.createElement('div');
          const i = document.createElement('button');
          return (
            i.addEventListener('click', () => {
              e(t);
            }),
            i.classList.add('btn-close', 'game__close', 'bg-info'),
            a.classList.add('game__toolbar', 'container'),
            r && a.append(...r),
            o && o.append(a),
            a.append(i),
            a;
          );
        });
      const o = (t, r = !1, o) => {
        t.classList.remove('show'),
          setTimeout(
            r => {
              document.body.removeChild(t), r && o();
            },
            200,
            r
          );
      };
      const e = t => {
        const r = document.createElement('div');
        r.classList.add('game__dialog_continue'),
          (r.innerHTML =
            '<div class="modal-dialog">\n      <div class="modal-content">\n        <div class="modal-header">\n          <h5 class="modal-title text-center">Завершить игру</h5>\n        </div>\n        <div class="modal-body">\n          <button class="btn btn-primary btn-continue-game">Продолжить</button>\n          <button class="btn btn-danger btn-close-game">Завершить</button>\n        </div>\n      </div>\n    </div>');
        const e = r.querySelector('.btn-close-game');
        const a = r.querySelector('.btn-continue-game');
        e.addEventListener('click', () => {
          o(r, !0, t);
        }),
          a.addEventListener('click', () => {
            o(r);
          }),
          r.classList.add('modal', 'fade'),
          (r.style.display = 'block'),
          setTimeout(() => {
            r.classList.add('show');
          }, 200),
          document.body.append(r);
      };
    },
    394: function(t, r, o) {
'use strict'; let e = this && this.__createBinding || (Object.create ? function (t, r, o, e) {
              void 0 === e && (e = o);
              var a = Object.getOwnPropertyDescriptor(r, o);
              (a &&
                !('get' in a ? !r.__esModule : a.writable || a.configurable)) ||
                (a = {
                  enumerable: !0,
                  get: function() {
                    return r[o];
                  }
                }),
                Object.defineProperty(t, e, a);
            }
          : function(t, r, o, e) {
              void 0 === e && (e = o), (t[e] = r[o]);
            });
      var a =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function(t, r) {
              Object.defineProperty(t, 'default', { enumerable: !0, value: r });
            }
          : function(t, r) {
              t.default = r;
            });
      var i =
        (this && this.__importStar) ||
        function(t) {
          if (t && t.__esModule) return t;
          var r = {};
          if (null != t)
            for (var o in t)
              'default' !== o &&
                Object.prototype.hasOwnProperty.call(t, o) &&
                e(r, t, o);
          return a(r, t), r;
        };
      var n =
        (this && this.__awaiter) ||
        function(t, r, o, e) {
          return new (o || (o = Promise))(function(a, i) {
            function n(t) {
              try {
                l(e.next(t));
              } catch (t) {
                i(t);
              }
            }
            function d(t) {
              try {
                l(e.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var r;
              t.done
                ? a(t.value)
                : ((r = t.value),
                  r instanceof o
                    ? r
                    : new o(function(t) {
                        t(r);
                      })).then(n, d);
            }
            l((e = e.apply(t, r || [])).next());
          });
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.createUser = void 0);
      const d = i(o(9669));
      const l = o(4641);
      const s = d.default;
      const m = o(6230);
      r.createUser = t =>
        n(void 0, void 0, void 0, function*() {
          try {
            return yield s.post(`${m.host}/users`, t);
          } catch (t) {
            (0, l.renderErrorMessage)('Incorrect e-mail or password');
          }
        });
    },
    6230: (t, r) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.host = void 0, r.host = 'https://lexi-rs-shool-team91.herokuapp.com'
    },
    8494: function(t, r, o) {
'use strict'; let e = this && this.__createBinding || (Object.create ? function (t, r, o, e) {
              void 0 === e && (e = o);
              var a = Object.getOwnPropertyDescriptor(r, o);
              (a &&
                !('get' in a ? !r.__esModule : a.writable || a.configurable)) ||
                (a = {
                  enumerable: !0,
                  get: function() {
                    return r[o];
                  }
                }),
                Object.defineProperty(t, e, a);
            }
          : function(t, r, o, e) {
              void 0 === e && (e = o), (t[e] = r[o]);
            });
      var a =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function(t, r) {
              Object.defineProperty(t, 'default', { enumerable: !0, value: r });
            }
          : function(t, r) {
              t.default = r;
            });
      var i =
        (this && this.__importStar) ||
        function(t) {
          if (t && t.__esModule) return t;
          var r = {};
          if (null != t)
            for (var o in t)
              'default' !== o &&
                Object.prototype.hasOwnProperty.call(t, o) &&
                e(r, t, o);
          return a(r, t), r;
        };
      var n =
        (this && this.__awaiter) ||
        function(t, r, o, e) {
          return new (o || (o = Promise))(function(a, i) {
            function n(t) {
              try {
                l(e.next(t));
              } catch (t) {
                i(t);
              }
            }
            function d(t) {
              try {
                l(e.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var r;
              t.done
                ? a(t.value)
                : ((r = t.value),
                  r instanceof o
                    ? r
                    : new o(function(t) {
                        t(r);
                      })).then(n, d);
            }
            l((e = e.apply(t, r || [])).next());
          });
        };
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.logIn = void 0);
      const d = i(o(9669));
      const l = o(4641);
      const s = o(6230);
      const m = d.default;
      r.logIn = t =>
        n(void 0, void 0, void 0, function*() {
          try {
            const r = yield m.post(`${s.host}/signin`, t);
            const { data: o } = r;
            return localStorage.setItem('data', JSON.stringify(o)), r;
          } catch (t) {
            (0, l.renderErrorMessage)('Incorrect e-mail or password');
          }
        });
    },
    4323: (t, r, o) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.signUser = void 0; const e = o(7180); r.signUser = () => {
        document.querySelector('.sign-up').addEventListener('click', () => {
          (0, e.renderSign)('sign up');
        }),
          document.querySelector('.sign-in').addEventListener('click', () => {
            (0, e.renderSign)('sign in');
          }),
          document.querySelector('.sign-out').addEventListener('click', () => {
            (0, e.renderSignOut)();
          });
      };
    },
    4641: (t, r) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.renderErrorMessage = void 0, r.renderErrorMessage = t => {
          const r = document.querySelector('.text-danger');
          const o = document.createElement('div');
          (o.className = 'text-danger'), (o.innerText = t);
          const e = document.querySelector('.sign-action');
          e && !r && e.before(o);
        });
    },
    8838: (t, r) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.messageModal = r.removeModal = void 0, r.removeModal = t => {
          const r = document.querySelector('.btn-close');
          r.addEventListener('click', () => {
            t.remove(), r.removeEventListener('click', () => !0);
          }),
            t.addEventListener('click', () => {
              t.remove(), t.removeEventListener('click', () => !0);
            }),
            document
              .querySelector('.modal-dialog')
              .addEventListener('click', t => {
                t.stopPropagation();
              });
        }),
        (r.messageModal = t => {
          const o = document.createElement('div');
          (o.className = 'modal'),
            (o.style.display = 'flex'),
            (o.style.backgroundColor = 'rgba(100,100,100,0.3)'),
            (o.innerHTML = `\n    <div class="modal-dialog">\n        <div class="modal-content">\n        <div class="modal-header">\n            <h5 class="modal-title" id="exampleModalLabel"></h5>\n            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body">\n            ${t}\n        </div>\n        </div>\n    </div>\n  `),
            document.body.append(o),
            (0, r.removeModal)(o);
        });
    },
    7180: function(t, r, o) {
'use strict'; let e = this && this.__awaiter || function (t, r, o, e) {
          return new (o || (o = Promise))(function(a, i) {
            function n(t) {
              try {
                l(e.next(t));
              } catch (t) {
                i(t);
              }
            }
            function d(t) {
              try {
                l(e.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var r;
              t.done
                ? a(t.value)
                : ((r = t.value),
                  r instanceof o
                    ? r
                    : new o(function(t) {
                        t(r);
                      })).then(n, d);
            }
            l((e = e.apply(t, r || [])).next());
          });
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.renderSignOut = r.renderSign = r.removeUserSymbol = r.addUserSymbol = void 0);
      const a = o(1170);
      const i = o(394);
      const n = o(8494);
      const d = o(8838);
      (r.addUserSymbol = t => {
        const r = document.querySelector('.user');
        r.classList.add('logged'),
          (r.innerText = t[0].toUpperCase()),
          localStorage.setItem('email', t);
      }),
        (r.removeUserSymbol = () => {
          const t = document.querySelector('.user');
          t.classList.remove('logged'), (t.innerText = '_');
        }),
        (r.renderSign = t =>
          e(void 0, void 0, void 0, function*() {
            const o = document.createElement('div');
            (o.className = 'modal'),
              (o.style.display = 'flex'),
              (o.style.backgroundColor = 'rgba(100,100,100,0.3)'),
              (o.innerHTML = `\n    <div class="modal-dialog">\n    <div class="modal-content">\n    <div class="modal-header">\n        <h5 class="modal-title" id="exampleModalLabel"></h5>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n    </div>\n    <div class="modal-body">\n    <form>\n        <div class="mb-3">\n            <label for="exampleInputEmail1" class="form-label">Email address</label>\n            <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">\n            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>\n        </div>\n        <div class="mb-3">\n            <label for="exampleInputPassword1" class="form-label">Password</label>\n            <input type="password" name="password" minlength="8" class="form-control" id="exampleInputPassword1">\n        </div>\n        <button type="submit" class="btn btn-primary sign-action">${t}</button>\n    </form>  \n    </div>\n    </div>\n    </div>\n    `),
              document.body.append(o);
            const l = document.querySelector('form');
            l.addEventListener('submit', s =>
              e(void 0, void 0, void 0, function*() {
                s.preventDefault();
                const e = document.querySelector('.error');
                e && e.remove();
                const m = l.email.value;
                const p = l.password.value;
                if (
                  'sign up' === t
                    ? yield (0, i.createUser)({ email: m, password: p })
                    : yield (0, n.logIn)({ email: m, password: p })
                ) {
                  o.remove();
                  const e =
                    'sign up' === t
                      ? 'New user successfully register'
                      : 'Уou are logged in';
                  'sign up' === t &&
                    ((0, r.removeUserSymbol)(),
                    localStorage.clear(),
                    (0, d.messageModal)(e)),
                    'sign in' === t && (0, r.addUserSymbol)(m);
                }
                (0, a.renderPage)(null, null);
              })
            ),
              (0, d.removeModal)(o);
          })),
        (r.renderSignOut = () => {
          localStorage.clear(),
            (0, d.messageModal)('You are logged out'),
            (0, r.removeUserSymbol)(),
            (0, a.renderPage)(null, null);
        });
    },
    5216: function(t, r, o) {
'use strict'; let e = this && this.__importDefault || function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.renderMainPage = r.renderFooter = r.removeFooter = void 0),
        o(7657);
      const a = e(o(126));
      const i = e(o(1941));
      const n = e(o(9606));
      const d = e(o(4287));
      (r.removeFooter = () => {
        const t = document.querySelector('footer');
        for (; t.lastChild; ) t.lastChild.remove();
      }),
        (r.renderFooter = () => {
          const t = document.querySelector('footer');
          (0, r.removeFooter)(),
            (t.innerHTML =
              '\n    <ul class="footer__list nav">\n    <li class="footer__list-item logo nav-item">\n      <a class="nav-link" href="https://rs.school/js/"><span \n          alt="rs-school logo" class="logo_image">\n        </span></a>\n    </li>\n    <li class="footer__list-item nav-item">\n      <a class="git-link nav-link" href="https://github.com/dab10"><span class="git-hub_svg"></span>Bazhenov Denis</a>\n    </li>\n    <li class="footer__list-item nav-item">\n      <a class="git-link nav-link" href="https://github.com/labatsevich"><span class="git-hub_svg"></span>Yuri Labatsevich</a>\n    </li>\n    <li class="footer__list-item nav-item">\n      <a class="git-link nav-link" href="https://github.com/elem15"><span class="git-hub_svg"></span>Mikhail Dvorkin</a>\n    </li>\n    <li class="footer__list-item">\n      Year 2022\n    </li>\n  </ul>\n  '),
            (document.querySelector('.logo_image').innerHTML = n.default),
            document.querySelectorAll('.git-hub_svg').forEach(t => {
              t.insertAdjacentHTML('afterbegin', d.default);
            });
        }),
        (r.renderMainPage = () => {
          const t = document.getElementById('root');
          for (; t.lastChild; ) t.lastChild.remove();
          const o = document.createElement('section');
          (o.className = 'main'),
            (o.innerHTML = `\n    <div class="main-content">\n    <div class="container">\n      <div class="col-12 text-end">\n        <blockquote class="blockquote">“Границы моего языка означают границы моего мира”</blockquote>\n        <div class="blockquote-footer">\n        <cite title="Source Title "> Людвиг Витгенштейн</cite>\n        </div>\n      </div>\n      <h1 class="h1">lέxi</h1>\n      <div class="">\n          <cite title="Source Title">— изучай язык...</cite>\n          <cite title="Source Title">открывай мир...</cite>\n      </div>\n      <br>\n      <br>\n      <p class="about text-end">В приложени <strong>lexi</strong> вы можете изучачить 3600 часто употребляемых английских слов. <br>В этом вам поможет <strong>Учебник</strong> с ассоциативными карточками. А так же 2 замечательные игры <strong>Аудиовызов</strong> и <strong>Спринт</strong></p>\n    </div>\n    <div class="container avatars">\n    <div class="row justify-content-between">  \n      <ul class="main__list nav justify-content-evenly">     \n        <li class="main__list-item nav-item">\n          <a class="git-link nav-link" href="https://github.com/dab10">\n          <figure class="figure denis">\n          <div class="avatar"></div>\n          <figcaption class="figure-caption text-center">Денис Баженов</figcaption>\n          </figure>\n          </a>\n        </li>\n        <li class="main__list-item nav-item">\n          <a class="git-link nav-link" href="https://github.com/labatsevich">\n          <figure class="figure yuri">\n            <img src=${a.default} class="figure-img avatar img-fluid" alt="...">\n            <figcaption class="figure-caption text-center">Юрий Лабацевич</figcaption>\n          </figure>\n          </a>\n        </li>\n        <li class="main__list-item nav-item">\n          <a class="git-link nav-link" href="https://github.com/elem15">          \n          <figure class="figure mikhail">\n          <div class="avatar"></div>\n          <figcaption class="figure-caption text-center">Михаил Дворкин</figcaption>\n          </figure>\n          </a>\n        </li>    \n      </ul>\n    </div>\n  </div>\n    </div>\n    `),
            t.append(o);
          const e = document.createElement('div');
          (e.innerHTML = `\n        <img class="background" src=${i.default}> \n    `),
            o.append(e),
            (0, r.renderFooter)();
        });
    },
    6655: (t, r, o) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.setNavEvents = void 0; const e = o(6668); const a = o(1170); r.setNavEvents = () => {
        const t = document.querySelector(`.${e.Router.MAIN}`);
        t.addEventListener('click', () => {
          localStorage.setItem('router', e.Router.MAIN),
            (0, a.renderPage)(e.Router.MAIN, t);
        });
        const r = document.querySelector(`.${e.Router.DICTIONARY}`);
        r.addEventListener('click', () => {
          localStorage.setItem('router', e.Router.DICTIONARY),
            (0, a.renderPage)(e.Router.DICTIONARY, r);
        });
        const o = document.querySelector(`.${e.Router.GAME_1}`);
        o.addEventListener('click', () => {
          localStorage.setItem('router', e.Router.GAME_1),
            (0, a.renderPage)(e.Router.GAME_1, o);
        });
        const i = document.querySelector(`.${e.Router.SPRINT}`);
        i.addEventListener('click', () => {
          localStorage.setItem('router', e.Router.SPRINT),
            (0, a.renderPage)(e.Router.SPRINT, i);
        });
        const n = document.querySelector(`.${e.Router.STATISTICS}`);
        n.addEventListener('click', () => {
          localStorage.setItem('router', e.Router.STATISTICS),
            (0, a.renderPage)(e.Router.STATISTICS, n);
        });
      };
    },
    1170: (t, r, o) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.renderPage = void 0; const e = o(6668); const a = o(7180); const i = o(5969); const n = o(5216); const d = o(1268); const l = o(8683); const s = o(1414); r.renderPage = (t, r, o = !1) => {
        (t =
          t ||
          (localStorage.getItem('router')
            ? localStorage.getItem('router')
            : e.Router.MAIN)),
          (r = r || document.querySelector(`.${t}`));
        const m = localStorage.getItem('email');
        switch (
          (m && (0, a.addUserSymbol)(m),
          [...document.querySelectorAll('.nav-link')].map(t => {
            t.classList.remove('active');
          }),
          r.classList.add('active'),
          t)
        ) {
          case e.Router.MAIN:
            (0, n.renderMainPage)();
            break;
          case e.Router.DICTIONARY:
            (0, s.renderWordsList)();
            break;
          case e.Router.GAME_1:
            (0, i.renderGame1Page)(o);
            break;
          case e.Router.SPRINT:
            (0, d.renderSprintPage)(o);
            break;
          case e.Router.STATISTICS:
            (0, l.renderStatisticsPage)();
            break;
          default:
            (0, n.renderMainPage)();
        }
      };
    },
    2556: function(t, r, o) {
'use strict'; let e = this && this.__createBinding || (Object.create ? function (t, r, o, e) {
              void 0 === e && (e = o);
              var a = Object.getOwnPropertyDescriptor(r, o);
              (a &&
                !('get' in a ? !r.__esModule : a.writable || a.configurable)) ||
                (a = {
                  enumerable: !0,
                  get: function() {
                    return r[o];
                  }
                }),
                Object.defineProperty(t, e, a);
            }
          : function(t, r, o, e) {
              void 0 === e && (e = o), (t[e] = r[o]);
            });
      var a =
        (this && this.__setModuleDefault) ||
        (Object.create
          ? function(t, r) {
              Object.defineProperty(t, 'default', { enumerable: !0, value: r });
            }
          : function(t, r) {
              t.default = r;
            });
      var i =
        (this && this.__importStar) ||
        function(t) {
          if (t && t.__esModule) return t;
          var r = {};
          if (null != t)
            for (var o in t)
              'default' !== o &&
                Object.prototype.hasOwnProperty.call(t, o) &&
                e(r, t, o);
          return a(r, t), r;
        };
      var n =
        (this && this.__awaiter) ||
        function(t, r, o, e) {
          return new (o || (o = Promise))(function(a, i) {
            function n(t) {
              try {
                l(e.next(t));
              } catch (t) {
                i(t);
              }
            }
            function d(t) {
              try {
                l(e.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var r;
              t.done
                ? a(t.value)
                : ((r = t.value),
                  r instanceof o
                    ? r
                    : new o(function(t) {
                        t(r);
                      })).then(n, d);
            }
            l((e = e.apply(t, r || [])).next());
          });
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.getWords = void 0);
      const d = i(o(9669));
      const l = o(6230);
      const s = d.default;
      r.getWords = (t = 0, r = Math.floor(29 * Math.random())) =>
        n(void 0, void 0, void 0, function*() {
          try {
            const o = yield s.get(`${l.host}/words?group=${t}&page=${r}`);
            const { data: e } = o;
            return e;
          } catch (t) {
            const r = t instanceof d.AxiosError ? t.message : 'unknown errors';
            console.log('words download with ', r);
          }
        });
    },
    3245: function(t, r, o) {
'use strict'; let e = this && this.__awaiter || function (t, r, o, e) {
          return new (o || (o = Promise))(function(a, i) {
            function n(t) {
              try {
                l(e.next(t));
              } catch (t) {
                i(t);
              }
            }
            function d(t) {
              try {
                l(e.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var r;
              t.done
                ? a(t.value)
                : ((r = t.value),
                  r instanceof o
                    ? r
                    : new o(function(t) {
                        t(r);
                      })).then(n, d);
            }
            l((e = e.apply(t, r || [])).next());
          });
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.getRandomWord = void 0);
      const a = o(2556);
      const i = o(4839);
      const n = o(7553);
      const d = () => Math.floor(19 * Math.random());
      r.getRandomWord = () =>
        e(void 0, void 0, void 0, function*() {
          n.wordsState.data ||
            (n.wordsState.data = yield (0, a.getWords)(n.wordsState.group));
          const { data: t } = n.wordsState;
          let r = d();
          let { id: o, word: e, wordTranslate: l } = t[r];
          let s = 0;
          for (; n.wordsState.usedWordsIds.includes(o) && s < 20; )
            s++,
              (r = d()),
              (o = t[r].id),
              (e = t[r].word),
              (l = t[r].wordTranslate);
          if (
            (n.wordsState.usedWordsIds.push(o),
            (i.statistics.word = t[r]),
            Math.random() > 0.5)
          )
            return {
              id: o,
              word: e,
              wordTranslate: l,
              wordWrongTranslate: '',
              translateEqual: !0
            };
          let m = d();
          for (; m === r; ) m = d();
          return {
            id: o,
            word: e,
            wordTranslate: l,
            wordWrongTranslate: t[m].wordTranslate,
            translateEqual: !1
          };
        });
    },
    4839: (t, r) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.statistics = void 0, r.statistics = { correct:0, incorrect:0, word:null, correctWords:[], incorrectWords:[] };
    },
    7553: (t, r) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.wordsState = void 0, r.wordsState = { usedWordsIds:[], data:null, translateEqual:!0, group:2, page:3, fromBook:!1 };
    },
    2315: (t, r, o) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.gameModal = r.removeModal = void 0; const e = o(6668); const a = o(1170); r.removeModal = t => {
        const r = document.querySelector('.btn-close');
        [t, r].map(r => {
          r.addEventListener('click', () => {
            t.remove();
            const r = document.querySelector(`.${e.Router.MAIN}`);
            localStorage.setItem('router', e.Router.MAIN),
              (0, a.renderPage)(e.Router.MAIN, r);
          });
        }),
          document
            .querySelector('.modal-dialog')
            .addEventListener('click', t => {
              t.stopPropagation();
            });
      }),
        (r.gameModal = () => {
          const t = document.createElement('div');
          (t.className = 'modal'),
            (t.style.display = 'flex'),
            (t.style.backgroundColor = 'rgba(100,100,100,0.3)'),
            (t.innerHTML =
              '\n    <div class="modal-dialog" id="game-modal-dialog">\n        <div class="modal-content">\n        <div class="modal-header" id="modal-header">\n            <h5 class="modal-title" id="exampleModalLabel"></h5>\n            <button type="button" class="btn-close sprint-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body"></div>\n    </div>\n  '),
            document.querySelector('.sprint-container').append(t);
        });
    },
    5268: (t, r, o) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.levelSelectRender = void 0; const e = o(7553); const a = o(2315); const i = o(1268); r.levelSelectRender = () => {
        e.wordsState.data = null;
        const t = document.createElement('div');
        (t.className = 'modal'),
          (t.style.display = 'flex'),
          (t.style.backgroundColor = 'rgba(100,100,100,0.3)'),
          (t.innerHTML =
            '\n    <div class="modal-dialog" id="game-modal-dialog">\n        <div class="modal-content">\n        <div class="modal-header" id="modal-header">\n            <h5 class="modal-title" id="exampleModalLabel">Выберите уровень сложности</h5>\n            <button type="button" class="btn-close sprint-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body">\n        Для управления игрой используйте клавиши ⬅ -  ➡.\n        <br>\n        ESC для возврата в главное меню. \n        </div>\n        <div class="modal-body">\n        <select class="form-select" aria-label="level-select">\n            <option value="0" selected>Уровень 1</option>\n            <option value="1">Уровень 2</option>\n            <option value="2">Уровень 3</option>\n            <option value="3">Уровень 4</option>\n            <option value="4">Уровень 5</option>\n            <option value="5">Уровень 6</option>\n        </select>  \n        </div>\n        <div class="modal-body"> \n        <button type="button" class="btn btn-success new-game" data-action="start">Играть</button>\n        </div>\n    </div>\n  '),
          document.querySelector('.sprint-container').append(t),
          (0, a.removeModal)(t);
        const r = document.querySelector('[data-action="start"]');
        (e.wordsState.page = Math.floor(29 * Math.random())),
          r.addEventListener('click', () => {
            (e.wordsState.group = +o.value), t.remove(), (0, i.startGame)();
          });
        const o = document.querySelector('.form-select');
      };
    },
    8227: (t, r, o) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.messageModal = r.removeModal = r.soundIcon = void 0; const e = o(6668); const a = o(1170); const i = o(4839); const n = o(7553); const d = o(1268); const l = o(6230); const s = o(1268); o(6394), r.soundIcon = '<svg class="sound" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></svg>', r.removeModal = t => {
          const r = document.querySelector('.btn-close');
          const o = document.querySelector('.new-game');
          const i = document.querySelector('.to-main-page');
          [t, r, o].map(r => {
            r.addEventListener('click', () => {
              n.wordsState.fromBook || (n.wordsState.data = null),
                t.remove(),
                r.removeEventListener('click', () => !0),
                (0, d.renderSprintPage)(n.wordsState.fromBook);
            });
          }),
            i.addEventListener('click', () => {
              t.remove();
              const r = document.querySelector(`.${e.Router.MAIN}`);
              localStorage.setItem('router', e.Router.MAIN),
                (0, a.renderPage)(e.Router.MAIN, r);
            }),
            document
              .querySelector('.modal-dialog')
              .addEventListener('click', t => {
                t.stopPropagation();
              });
        }),
        (r.messageModal = t => {
          const o = document.createElement('div');
          return (
            (o.className = 'modal'),
            (o.style.display = 'flex'),
            (o.style.backgroundColor = 'rgba(100,100,100,0.3)'),
            (o.innerHTML = `\n    <div class="modal-dialog" id="message-modal-dialog">\n        <div class="modal-content">\n        <div class="modal-header">\n            <h5 class="modal-title" id="exampleModalLabel">${t}</h5>\n            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>\n        </div>\n        <div class="modal-body">\n            <h6>Результаты:</h6> \n            <br>\n            <span class="text-success">${
              i.statistics.correct
            }</span> изученно.\n            <br>\n            <span class="text-danger">${
              i.statistics.incorrect
            }</span> еще предстоит выучить.\n        </div>\n        <div class="modal-body" id="answers">\n        <p class="text-success">Верные ответы:</p>\n        <ul>       \n            ${i.statistics.correctWords
              .map(
                ({ word: t, wordTranslate: o, audio: e }) =>
                  `\n                        <li><button class="sound-button" data-sound=${l.host}/${e}>${r.soundIcon}</button> ${t} - ${o}</li>\n                    `
              )
              .join(
                ''
              )}</ul> \n            <br>\n            <p class="text-danger">Не верные ответы:</p>\n            <ul>       \n                ${i.statistics.incorrectWords
              .map(
                ({ word: t, wordTranslate: o, audio: e }) =>
                  `\n                                  <li><button class="sound-button" data-sound=${l.host}/${e}>${r.soundIcon}</button> ${t} - ${o}</li>\n                        `
              )
              .join(
                ''
              )}</ul>         \n            </div>\n        <div class="modal-footer">\n        <button type="button" class="btn btn-primary new-game">Играть еще</button>\n        <button type="button" class="btn btn-secondary to-main-page" data-dismiss="modal">На главную</button>\n        </div>\n    </div>\n  `),
            document.querySelector('.sprint-container').append(o),
            [...document.querySelectorAll('.sound-button')].map(t =>
              t.addEventListener('click', t => {
                const r = t.currentTarget;
                (0, s.play)(r.getAttribute('data-sound'));
              })
            ),
            (0, r.removeModal)(o),
            o;
          );
        });
    },
    1183: function(t, r, o) {
'use strict'; let e = this && this.__importDefault || function (t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.renderCounter = r.exitGame = void 0);
      const a = o(6668);
      const i = o(1170);
      const n = o(8227);
      const d = e(o(4808));
      const l = o(4880);
      const s = e(o(1011));
      const m = o(1268);
      const p = o(4839);
      const b = o(7553);
      (r.exitGame = t => {
        const r = document.querySelector('header').querySelectorAll('button');
        (b.wordsState.group = 0), (b.wordsState.data = null), clearInterval(t);
        const o = document.querySelector(`.${a.Router.MAIN}`);
        localStorage.setItem('router', a.Router.MAIN),
          document.removeEventListener('keydown', m.keyDirect),
          (0, i.renderPage)(a.Router.MAIN, o),
          r.forEach(t => (t.disabled = !1));
      }),
        (r.renderCounter = function() {
          (p.statistics.correct = 0),
            (p.statistics.incorrect = 0),
            (p.statistics.correctWords = []),
            (p.statistics.incorrectWords = []);
          const t = document.createElement('div');
          (t.className = 'counter'), (t.innerHTML = '30');
          const o = document.querySelector('header').querySelectorAll('button');
          let e = 30;
          const a = setInterval(() => {
            e--,
              (t.innerHTML = '' + e),
              e < 6 && (0, l.play)(d.default),
              0 === e &&
                (clearInterval(a),
                (0, l.play)(s.default),
                document.querySelector('.modal').remove(),
                document.removeEventListener('keydown', m.keyDirect),
                (0, n.messageModal)('Игра закончена'),
                o.forEach(t => (t.disabled = !1)),
                (t.innerHTML = ''));
          }, 1e3);
          document
            .querySelector('.sprint-close')
            .addEventListener('click', () => (0, r.exitGame)(a));
          const i = t => {
'Escape' === t.code && (clearInterval(a), (0, r.exitGame)(a), document.removeEventListener('keydown', i));
          };
          return document.addEventListener('keydown', i), t;
        });
    },
    4880: function(t, r, o) {
'use strict'; let e = this && this.__awaiter || function (t, r, o, e) {
          return new (o || (o = Promise))(function(a, i) {
            function n(t) {
              try {
                l(e.next(t));
              } catch (t) {
                i(t);
              }
            }
            function d(t) {
              try {
                l(e.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var r;
              t.done
                ? a(t.value)
                : ((r = t.value),
                  r instanceof o
                    ? r
                    : new o(function(t) {
                        t(r);
                      })).then(n, d);
            }
            l((e = e.apply(t, r || [])).next());
          });
        };
      var a =
        (this && this.__importDefault) ||
        function(t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.renderPreCounter = r.getWord = r.play = void 0);
      const i = o(3245);
      const n = o(7553);
      const d = o(1183);
      const l = o(1268);
      const s = a(o(9682));
      const m = a(o(4808));
      const p = o(2315);
      function b(t) {
        const r = new Audio(t).play();
        void 0 !== r && r.then(() => {}).catch(() => {});
      }
      (r.play = b),
        (r.getWord = () =>
          e(void 0, void 0, void 0, function*() {
            const {
              id: t,
              word: r,
              wordTranslate: o,
              wordWrongTranslate: e,
              translateEqual: a
            } = yield (0, i.getRandomWord)();
            const n = document.createElement('div');
            return (
              (n.className = 'words'),
              (n.innerHTML = a
                ? `<div class="translate-word">${r} - ${o}</div>`
                : `<div class="translate-word">${r} - ${e}</div>`),
              { words: n, translateEqual: a, id: t };
            );
          })),
        (r.renderPreCounter = () =>
          e(void 0, void 0, void 0, function*() {
            const t = document.createElement('div');
            return (
              (t.className = 'counter-wrapper'),
              yield (t =>
                e(void 0, void 0, void 0, function*() {
                  const { id: o, words: a, translateEqual: i } = yield (0,
                  r.getWord)();
                  n.wordsState.translateEqual = i;
                  const c = (0, l.renderButtonsContainer)();
                  a.append(c);
                  const g = [
                    '<div class="pre-timer round-border red">1</div>',
                    '<div class="pre-timer round-border yellow">2</div>',
                    '<div class="pre-timer round-border green">3</div>',
                    '<div class="pre-timer">START</div>',
                    a
                  ];
                  for (let r = 0; r < g.length; r++)
                    setTimeout(
                      () =>
                        e(void 0, void 0, void 0, function*() {
                          if ('string' == typeof g[r] && r < 3)
                            (t.innerHTML = g[r]), b(m.default);
                          else if ('string' == typeof g[r] && 3 === r)
                            (t.innerHTML = g[r]), b(s.default);
                          else {
                            t.innerHTML = '';
                            const o = document.createElement('div');
                            o.append(g[r]),
                              (0, p.gameModal)(),
                              t.prepend((0, d.renderCounter)()),
                              document.querySelector('.modal-body').append(o),
                              document.addEventListener('keydown', l.keyDirect);
                          }
                        }),
                      1e3 * r
                    );
                }))(t),
              t;
            );
          }));
    },
    1268: function(t, r, o) {
'use strict'; let e = this && this.__awaiter || function (t, r, o, e) {
          return new (o || (o = Promise))(function(a, i) {
            function n(t) {
              try {
                l(e.next(t));
              } catch (t) {
                i(t);
              }
            }
            function d(t) {
              try {
                l(e.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var r;
              t.done
                ? a(t.value)
                : ((r = t.value),
                  r instanceof o
                    ? r
                    : new o(function(t) {
                        t(r);
                      })).then(n, d);
            }
            l((e = e.apply(t, r || [])).next());
          });
        };
      var a =
        (this && this.__importDefault) ||
        function(t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.renderSprintPage = r.startGame = r.renderButtonsContainer = r.keyDirect = r.play = void 0);
      const i = o(5216);
      const n = o(7553);
      const d = o(4880);
      o(6394);
      const l = a(o(1313));
      const s = a(o(904));
      const m = a(o(9389));
      const p = o(4839);
      const b = o(5268);
      function c(t) {
        new Audio(t).play();
      }
      r.play = c;
      const g = t =>
        e(void 0, void 0, void 0, function*() {
          const r = document.querySelector('.buttons-container');
          if (r) {
            (t => {
              const r = document.querySelector('.modal-title');
              if (t) {
                (p.statistics.correct += 1),
                  p.statistics.correctWords.push(p.statistics.word),
                  (p.statistics.word = null);
                const t = document.createElement('div');
                (t.className = 'text-success equal'), (t.innerText = 'ВЕРНО');
                const o = r.querySelector('.equal');
                o && o.remove(),
                  r.append(t),
                  setTimeout(() => t.remove(), 700),
                  c(s.default);
              } else {
                (p.statistics.incorrect += 1),
                  p.statistics.incorrectWords.push(p.statistics.word),
                  (p.statistics.word = null);
                const t = document.createElement('div');
                (t.className = 'text-danger equal'), (t.innerText = 'НЕ ВЕРНО');
                const o = r.querySelector('.equal');
                o && o.remove(),
                  r.append(t),
                  setTimeout(() => t.remove(), 700),
                  c(m.default);
              }
            })(t);
            const o = yield (0, d.getWord)();
            n.wordsState.translateEqual = o.translateEqual;
            const { words: e } = o;
            document.querySelector('.translate-word').remove(), r.prepend(e);
          }
        });
      (r.keyDirect = t => {
        switch (t.code) {
          case 'ArrowRight':
            g(n.wordsState.translateEqual);
            break;
          case 'ArrowLeft':
            g(!n.wordsState.translateEqual);
        }
      }),
        (r.renderButtonsContainer = () => {
          const t = document.createElement('div');
          t.className = 'buttons-container';
          const r = document.createElement('button');
          (r.className = 'right btn btn-success'), (r.innerText = 'ПРАВДА >');
          const o = document.createElement('button');
          return (
            (o.className = 'wrong btn btn-danger'),
            (o.innerText = '< ЛОЖЬ'),
            t.append(o, r),
            r.addEventListener('click', () =>
              e(void 0, void 0, void 0, function*() {
                return yield g(n.wordsState.translateEqual);
              })
            ),
            o.addEventListener('click', () =>
              e(void 0, void 0, void 0, function*() {
                return yield g(!n.wordsState.translateEqual);
              })
            ),
            t;
          );
        }),
        (r.startGame = () =>
          e(void 0, void 0, void 0, function*() {
            const t = document.querySelector('.sprint-container');
            document
              .querySelector('header')
              .querySelectorAll('button')
              .forEach(t => (t.disabled = !0));
            const r = yield (0, d.renderPreCounter)();
            t.append(r);
          })),
        (r.renderSprintPage = t =>
          e(void 0, void 0, void 0, function*() {
            const o = document.getElementById('root');
            for (; o.lastChild; ) o.lastChild.remove();
            (0, i.removeFooter)();
            const e = document.createElement('section');
            (e.className = 'sprint-container container'),
              (e.innerHTML = '<h1 class="text-center">SPRINT</h1>'),
              o.append(e);
            const a = document.createElement('div');
            (a.innerHTML = `\n    <img class="background-sprint" src=${l.default}> \n    `),
              o.append(a),
              (n.wordsState.fromBook = t),
              t ? (0, r.startGame)() : (0, b.levelSelectRender)();
          }));
    },
    8683: function(t, r, o) {
'use strict'; let e = this && this.__awaiter || function (t, r, o, e) {
          return new (o || (o = Promise))(function(a, i) {
            function n(t) {
              try {
                l(e.next(t));
              } catch (t) {
                i(t);
              }
            }
            function d(t) {
              try {
                l(e.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var r;
              t.done
                ? a(t.value)
                : ((r = t.value),
                  r instanceof o
                    ? r
                    : new o(function(t) {
                        t(r);
                      })).then(n, d);
            }
            l((e = e.apply(t, r || [])).next());
          });
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.renderStatisticsPage = void 0);
      const a = o(5216);
      r.renderStatisticsPage = () =>
        e(void 0, void 0, void 0, function*() {
          const t = document.getElementById('root');
          for (; t.lastChild; ) t.lastChild.remove();
          (0, a.removeFooter)();
          const r = document.createElement('section');
          (r.className = 'statistics'),
            (r.innerHTML = 'Statistics'),
            t.append(r);
        });
    },
    2305: function(t, r, o) {
'use strict'; let e = this && this.__awaiter || function (t, r, o, e) {
          return new (o || (o = Promise))(function(a, i) {
            function n(t) {
              try {
                l(e.next(t));
              } catch (t) {
                i(t);
              }
            }
            function d(t) {
              try {
                l(e.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var r;
              t.done
                ? a(t.value)
                : ((r = t.value),
                  r instanceof o
                    ? r
                    : new o(function(t) {
                        t(r);
                      })).then(n, d);
            }
            l((e = e.apply(t, r || [])).next());
          });
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.addLearnedHardNeutralWord = r.addStyleLearnedPages = r.getSettings = r.updateSettings = r.getAllUserWords = r.getUserWordById = r.addWordToHardLearned = r.getAllHardWords = r.getWordById = r.getUserWords = r.getWords = void 0);
      const a = o(2204);
      const i = o(6230);
      const n = o(7553);
      (r.getWords = (t = 0, r = 0) =>
        e(void 0, void 0, void 0, function*() {
          const o = yield fetch(`${i.host}/words?page=${t}&group=${r}`);
          const e = yield o.json();
          return (n.wordsState.data = e), e;
        })),
        (r.getUserWords = (t = 0, r = 0, o = 20) =>
          e(void 0, void 0, void 0, function*() {
            const e = JSON.parse(localStorage.getItem('data'));
            const { userId: a, token: d } = e;
            try {
              const e = yield fetch(
                `${i.host}/users/${a}/aggregatedWords?wordsPerPage=${o}&filter=%7B%22%24and%22%3A%20%5B%7B%20%22page%22%3A%20${t}%20%7D%2C%20%7B%20%22group%22%3A%20${r}%20%7D%5D%7D`,
                {
                  headers: {
                    Authorization: `Bearer ${d}`,
                    Accept: 'application/json',
                    'Access-Control-Allow-Origin': '*'
                  }
                }
              );
              const l = yield e.json();
              return (
                (n.wordsState.data = l[0].paginatedResults),
                l[0].paginatedResults;
              );
            } catch (t) {
              console.log('Word not exist');
            }
          })),
        (r.getWordById = t =>
          e(void 0, void 0, void 0, function*() {
            try {
              const r = yield fetch(`${i.host}/words/${t}`);
              return yield r.json();
            } catch (t) {
              console.log('Word not exist');
            }
          })),
        (r.getAllHardWords = (t, r = 3600) =>
          e(void 0, void 0, void 0, function*() {
            const o = JSON.parse(localStorage.getItem('data'));
            const { userId: e, token: a } = o;
            try {
              const o = yield fetch(
                `${i.host}/users/${e}/aggregatedWords?wordsPerPage=${r}&filter=%7B%22%24and%22%3A%5B%7B%22userWord.difficulty%22%3A%22${t}%22%7D%5D%7D`,
                {
                  headers: {
                    Authorization: `Bearer ${a}`,
                    Accept: 'application/json',
                    'Access-Control-Allow-Origin': '*'
                  }
                }
              );
              return yield o.json();
            } catch (t) {
              console.log('Word not exist');
            }
          })),
        (r.addWordToHardLearned = (t, o) =>
          e(void 0, void 0, void 0, function*() {
            const e = JSON.parse(localStorage.getItem('data'));
            const { userId: a, token: n } = e;
            void 0 === (yield (0, r.getUserWordById)(t))
              ? (yield fetch(`${i.host}/users/${a}/words/${t}`, {
                  method: 'POST',
                  body: JSON.stringify(o),
                  headers: {
                    Authorization: `Bearer ${n}`,
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Access-Control-Allow-Origin': '*'
                  }
                })).json()
              : (yield fetch(`${i.host}/users/${a}/words/${t}`, {
                  method: 'PUT',
                  body: JSON.stringify(o),
                  headers: {
                    Authorization: `Bearer ${n}`,
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Access-Control-Allow-Origin': '*'
                  }
                })).json();
          })),
        (r.getUserWordById = t =>
          e(void 0, void 0, void 0, function*() {
            const r = JSON.parse(localStorage.getItem('data'));
            const { userId: o, token: e } = r;
            try {
              const r = yield fetch(`${i.host}/users/${o}/words/${t}`, {
                headers: {
                  Authorization: `Bearer ${e}`,
                  Accept: 'application/json'
                }
              });
              return yield r.json();
            } catch (t) {
              console.log('Word not exist');
            }
          })),
        (r.getAllUserWords = () =>
          e(void 0, void 0, void 0, function*() {
            const t = JSON.parse(localStorage.getItem('data'));
            const { userId: r, token: o } = t;
            try {
              const t = yield fetch(`${i.host}/users/${r}/words`, {
                headers: {
                  Authorization: `Bearer ${o}`,
                  Accept: 'application/json'
                }
              });
              return yield t.json();
            } catch (t) {
              console.log('Word not exist');
            }
          })),
        (r.updateSettings = t =>
          e(void 0, void 0, void 0, function*() {
            const r = JSON.parse(localStorage.getItem('data'));
            const { userId: o, token: e } = r;
            yield fetch(`${i.host}/users/${o}/settings`, {
              method: 'PUT',
              body: JSON.stringify(t),
              headers: {
                Authorization: `Bearer ${e}`,
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
            });
          })),
        (r.getSettings = () =>
          e(void 0, void 0, void 0, function*() {
            const t = JSON.parse(localStorage.getItem('data'));
            const { userId: r, token: o } = t;
            try {
              const t = yield fetch(`${i.host}/users/${r}/settings`, {
                headers: {
                  Authorization: `Bearer ${o}`,
                  Accept: 'application/json'
                }
              });
              return yield t.json();
            } catch (t) {
              console.log('Word not exist');
            }
          })),
        (r.addStyleLearnedPages = t =>
          e(void 0, void 0, void 0, function*() {
            const o = yield (0, r.getSettings)();
            if (void 0 === o) {
              const t = { optional: { pages: Object.assign({}, null) } };
              (0, r.updateSettings)(t);
            } else if (void 0 === o.optional || void 0 === o.optional.pages) {
              let e;
              delete o.id, o.optional && (e = o.optional.gameStatistics);
              const a = {
                previousGameStatistic: e,
                pages: Object.assign({}, t)
              };
              (o.optional = a), (0, r.updateSettings)(o);
            } else
              o.optional.pages &&
                (delete o.id,
                (o.optional.pages = Object.assign({}, t)),
                (0, r.updateSettings)(o));
          })),
        (r.addLearnedHardNeutralWord = (t, o) =>
          e(void 0, void 0, void 0, function*() {
            const e = JSON.parse(localStorage.getItem('data'));
            const { userId: n, token: d } = e;
            const l = yield (0, r.getUserWordById)(t);
            if (void 0 === l)
              (yield fetch(`${i.host}/users/${n}/words/${t}`, {
                method: 'POST',
                body: JSON.stringify({
                  difficulty: o,
                  optional: {
                    dateWordNew: 0,
                    dateWordLearned:
                      o === a.Difficulty.learned
                        ? new Date().toLocaleDateString('ru-RU')
                        : 0,
                    rightAnswers: 0,
                    wrongAnswers: 0,
                    rightAnswersSeries: 0
                  }
                }),
                headers: {
                  Authorization: `Bearer ${d}`,
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                  'Access-Control-Allow-Origin': '*'
                }
              })).json();
            else if (l && !('optional' in l))
              (yield fetch(`${i.host}/users/${n}/words/${t}`, {
                method: 'PUT',
                body: JSON.stringify({
                  difficulty: o,
                  optional: {
                    dateWordNew: 0,
                    dateWordLearned:
                      o === a.Difficulty.learned
                        ? new Date().toLocaleDateString('ru-RU')
                        : 0,
                    rightAnswers: 0,
                    wrongAnswers: 0,
                    rightAnswersSeries: 0
                  }
                }),
                headers: {
                  Authorization: `Bearer ${d}`,
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                  'Access-Control-Allow-Origin': '*'
                }
              })).json();
            else if (l && 'optional' in l) {
              let r;
              o === a.Difficulty.learned
                ? l.difficulty === a.Difficulty.neutral ||
                  l.difficulty === a.Difficulty.hard
                  ? (r = {
                      difficulty: o,
                      optional: {
                        dateWordNew: l.optional.dateWordNew,
                        dateWordLearned: l.optional.dateWordLearned
                          ? l.optional.dateWordLearned
                          : new Date().toLocaleDateString('ru-RU'),
                        rightAnswers: l.optional.rightAnswers,
                        wrongAnswers: l.optional.wrongAnswers,
                        rightAnswersSeries: l.optional.rightAnswersSeries
                      }
                    })
                  : l.difficulty === a.Difficulty.learned &&
                    (r = {
                      optional: {
                        dateWordNew: l.optional.dateWordNew,
                        dateWordLearned: l.optional.dateWordLearned,
                        rightAnswers: l.optional.rightAnswers,
                        wrongAnswers: l.optional.wrongAnswers,
                        rightAnswersSeries: l.optional.rightAnswersSeries
                      }
                    })
                : (o !== a.Difficulty.hard && o !== a.Difficulty.neutral) ||
                  (r = {
                    difficulty: o,
                    optional: {
                      dateWordNew: l.optional.dateWordNew,
                      dateWordLearned: 0,
                      rightAnswers: l.optional.rightAnswers,
                      wrongAnswers: l.optional.wrongAnswers,
                      rightAnswersSeries: l.optional.rightAnswersSeries
                    }
                  }),
                (yield fetch(`${i.host}/users/${n}/words/${t}`, {
                  method: 'PUT',
                  body: JSON.stringify(r),
                  headers: {
                    Authorization: `Bearer ${d}`,
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Access-Control-Allow-Origin': '*'
                  }
                })).json();
            }
          }));
    },
    2376: (t, r) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.audioPlayerListener = void 0; const o = new Audio(); r.audioPlayerListener = () => {
        document.querySelectorAll('.item__audio').forEach(t => {
          t.addEventListener('click', e);
        });
      };
      const e = t => {
        const r = Array.from(t.currentTarget.querySelectorAll('source'));
        let e = 0;
        const a = () => {
          e < 2
            ? (e++,
              o.load(),
              (t => {
                fetch(`${r[t].src}`)
                  .then(t => t.blob())
                  .then(t => ((o.src = URL.createObjectURL(t)), o.play()))
                  .catch(() => {
                    o.removeEventListener('ended', a);
                  });
              })(e))
            : ((e = 0), o.removeEventListener('ended', a));
        };
        o.addEventListener('ended', a), (o.src = r[0].src), o.play();
      };
    },
    945: function(t, r, o) {
'use strict'; let e = this && this.__awaiter || function (t, r, o, e) {
          return new (o || (o = Promise))(function(a, i) {
            function n(t) {
              try {
                l(e.next(t));
              } catch (t) {
                i(t);
              }
            }
            function d(t) {
              try {
                l(e.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var r;
              t.done
                ? a(t.value)
                : ((r = t.value),
                  r instanceof o
                    ? r
                    : new o(function(t) {
                        t(r);
                      })).then(n, d);
            }
            l((e = e.apply(t, r || [])).next());
          });
        };
      var a =
        (this && this.__rest) ||
        function(t, r) {
          var o = {};
          for (var e in t)
            Object.prototype.hasOwnProperty.call(t, e) &&
              r.indexOf(e) < 0 &&
              (o[e] = t[e]);
          if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (e = Object.getOwnPropertySymbols(t); a < e.length; a++)
              r.indexOf(e[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, e[a]) &&
                (o[e[a]] = t[e[a]]);
          }
          return o;
        };
      var i =
        (this && this.__importDefault) ||
        function(t) {
          return t && t.__esModule ? t : { default: t };
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.changePageIconDefault = r.changePageIconLearned = r.drawPageNav = r.drawTextbook = r.drawPageDifficultWords = r.draw = r.pageLearned = void 0);
      const n = o(2204);
      const d = o(2376);
      const l = o(2305);
      const s = o(691);
      const m = o(3986);
      const p = o(6230);
      const b = o(6171);
      const c = i(o(4709));
      const g = o(3160);
      const f = [
        '&#x1f534;',
        '&#x1f7e0;',
        '&#x1f7e1;',
        '&#x1f7e2;',
        '&#x1f535;',
        '&#x1f7e3;',
        '&#x1f7e4;'
      ];
      (r.pageLearned = []),
        window.addEventListener('beforeunload', () => {
          localStorage.setItem('pageLearned', JSON.stringify(r.pageLearned));
        }),
        (r.draw = (t = 0, o = 0, i) =>
          e(void 0, void 0, void 0, function*() {
            let e;
            let s;
            let g;
            let f = 0;
            if (i) {
              const a = yield (0, l.getSettings)();
              let i;
              if (a && ((i = a.optional), i)) {
                const t = i.pages;
                t && (r.pageLearned = Object.keys(t).map(r => t[Number(r)]));
              }
              const d = yield (0, l.getAllUserWords)();
              (e = d.filter(t => t.difficulty === n.Difficulty.hard)),
                (s = d.filter(t => t.difficulty === n.Difficulty.learned)),
                (g = yield (0, l.getUserWords)(t, o));
            } else
              g = (yield (0, l.getWords)(t, o)).map(t => {
                var { id: r } = t,
                  o = a(t, ['id']);
                return Object.assign({ _id: r }, o);
              });
            const u = document.createDocumentFragment();
            const v = document.querySelector('#items');
            const h = document.querySelector('.items-container');
            g.forEach(t => {
              const r = v.content.cloneNode(!0);
              if (
                ((r.querySelector('.item').dataset.id = t._id),
                (r.querySelector('.item__title').textContent = t.word),
                (r.querySelector('.item__audio-svg').innerHTML = c.default),
                (r.querySelector(
                  '.item'
                ).style.backgroundImage = `url(${p.host}/${t.image})`),
                (r.querySelector(
                  '.item__audio-word'
                ).src = `${p.host}/${t.audio}`),
                (r.querySelector(
                  '.item__audio-meaning'
                ).src = `${p.host}/${t.audioMeaning}`),
                (r.querySelector(
                  '.item__audio-example'
                ).src = `${p.host}/${t.audioExample}`),
                (r.querySelector(
                  '.item__transcription'
                ).innerHTML = `${t.transcription}`),
                (r.querySelector(
                  '.item__word-translate'
                ).innerHTML = `${t.wordTranslate}`),
                (r.querySelector(
                  '.item__text-meaning'
                ).innerHTML = `${t.textMeaning}`),
                (r.querySelector(
                  '.item__text-example'
                ).innerHTML = `${t.textExample}`),
                (r.querySelector(
                  '.item__text-meaning-translate'
                ).textContent = `${t.textMeaningTranslate}`),
                (r.querySelector(
                  '.item__text-example-translate'
                ).textContent = `${t.textExampleTranslate}`),
                i)
              ) {
                let o, e;
                (r.querySelector('.item__buttons').style.display = 'flex'),
                  (o =
                    t.userWord &&
                    t.userWord.optional &&
                    t.userWord.optional.wrongAnswers
                      ? t.userWord.optional.wrongAnswers
                      : 0),
                  (e =
                    t.userWord &&
                    t.userWord.optional &&
                    t.userWord.optional.rightAnswers
                      ? t.userWord.optional.rightAnswers
                      : 0),
                  (r.querySelector(
                    '.item__wrong-answer'
                  ).innerHTML = `Кол-во неправильных ответов - ${o}`),
                  (r.querySelector(
                    '.item__right-answer'
                  ).innerHTML = `Кол-во правильных ответов - ${e}`);
              }
              i &&
                e.some(r => r.wordId === t._id) &&
                ((r.querySelector('.item__button-hard').textContent =
                  'Добавлено в "Сложные слова"'),
                r.querySelector('.item__container').classList.add('red'),
                f++),
                i &&
                  s.some(r => r.wordId === t._id) &&
                  ((r.querySelector('.item__button-learned').textContent =
                    'Добавлено в "Изученные слова"'),
                  r.querySelector('.item__container').classList.add('green'),
                  f++),
                u.append(r);
            }),
              (h.innerHTML = ''),
              h.appendChild(u),
              (0, d.audioPlayerListener)(),
              (0, b.addAllLearnedMessage)(f, o),
              i &&
                (f < 20 && (0, r.changePageIconDefault)(t, o),
                20 === f && (0, r.changePageIconLearned)(t, o),
                (0, m.addWordsForHardWordsPage)(),
                (0, m.addLearnedWords)());
          })),
        (r.drawPageDifficultWords = t =>
          e(void 0, void 0, void 0, function*() {
            const r = (yield (0, l.getAllHardWords)('hard'))[0]
              .paginatedResults;
            const o = document.createDocumentFragment();
            const e = document.querySelector('#items');
            const a = document.querySelector('.items-container');
            r.forEach(r => {
              const a = e.content.cloneNode(!0);
              if (
                ((a.querySelector('.item').dataset.id = r._id),
                (a.querySelector('.item__title').textContent = r.word),
                a
                  .querySelector('.item__audio-svg')
                  .insertAdjacentHTML('afterbegin', c.default),
                (a.querySelector(
                  '.item'
                ).style.backgroundImage = `url(${p.host}/${r.image})`),
                (a.querySelector(
                  '.item__audio-word'
                ).src = `${p.host}/${r.audio}`),
                (a.querySelector(
                  '.item__audio-meaning'
                ).src = `${p.host}/${r.audioMeaning}`),
                (a.querySelector(
                  '.item__audio-example'
                ).src = `${p.host}/${r.audioExample}`),
                (a.querySelector(
                  '.item__transcription'
                ).innerHTML = `${r.transcription}`),
                (a.querySelector(
                  '.item__word-translate'
                ).innerHTML = `${r.wordTranslate}`),
                (a.querySelector(
                  '.item__text-meaning'
                ).innerHTML = `${r.textMeaning}`),
                (a.querySelector(
                  '.item__text-example'
                ).innerHTML = `${r.textExample}`),
                (a.querySelector(
                  '.item__text-meaning-translate'
                ).textContent = `${r.textMeaningTranslate}`),
                (a.querySelector(
                  '.item__text-example-translate'
                ).textContent = `${r.textExampleTranslate}`),
                t)
              ) {
                let t, o;
                (a.querySelector('.item__buttons').style.display = 'flex'),
                  (a.querySelector('.item__button-hard').textContent =
                    'Удалить из "Сложные слова"'),
                  a.querySelector('.item__container').classList.add('red'),
                  (t =
                    r.userWord &&
                    r.userWord.optional &&
                    r.userWord.optional.wrongAnswers
                      ? r.userWord.optional.wrongAnswers
                      : 0),
                  (o =
                    r.userWord &&
                    r.userWord.optional &&
                    r.userWord.optional.rightAnswers
                      ? r.userWord.optional.rightAnswers
                      : 0),
                  (a.querySelector(
                    '.item__wrong-answer'
                  ).innerHTML = `Кол-во неправильных ответов - ${t}`),
                  (a.querySelector(
                    '.item__right-answer'
                  ).innerHTML = `Кол-во правильных ответов - ${o}`);
              }
              o.append(a);
            }),
              (a.innerHTML = ''),
              a.appendChild(o),
              (0, d.audioPlayerListener)(),
              (0, b.addAllLearnedMessage)(0, 6),
              t && (0, m.deleteWordsFromHardWordsPage)(t);
          })),
        (r.drawTextbook = (t = 0, o = 0, e = [], a) => {
          const i = document.querySelector('.form-select.group');
          const n = document.querySelector('.form-select.page');
          (i.innerHTML = ''), (n.innerHTML = '');
          for (let t = 0; t <= 5; t++) {
            const r = document.createElement('option');
            (r.innerHTML = `${f[t]} &nbsp; Раздел ${t + 1}`),
              (r.value = String(t)),
              i.appendChild(r);
          }
          if (a) {
            const t = document.createElement('option');
            (t.innerHTML = `${f[6]} &nbsp; Сложные слова`),
              (t.value = '6'),
              i.appendChild(t);
          }
          (i.options[o].selected = !0),
            (0, r.drawPageNav)(t, o, e, a),
            6 !== Number(i.value) && (0, r.draw)(t, o, a),
            6 === Number(i.value) && (0, r.drawPageDifficultWords)(a),
            (0, g.addListenerGameButton)(),
            (0, s.pagination)(a, t);
        }),
        (r.drawPageNav = (t, o, a = [], i) =>
          e(void 0, void 0, void 0, function*() {
            if ((i || (a = []), i)) {
              const t = yield (0, l.getSettings)();
              let o;
              if (t && ((o = t.optional), o)) {
                const t = o.pages;
                t && (r.pageLearned = Object.keys(t).map(r => t[Number(r)]));
              }
              a = r.pageLearned;
            }
            const e = document.querySelector('.form-select.group');
            const n = document.querySelector('.form-select.page');
            const d = document.querySelector('.navigation');
            if (
              (Number(e.value) === 6 && (d.style.display = 'none'),
              6 !== Number(e.value))
            ) {
              n.innerHTML = '';
              for (let t = 0; t <= 29; t++) {
                const r = document.createElement('option');
                const e = a.find(r => r.page === t && r.group === Number(o));
                e && (r.innerHTML = `&#9989; &nbsp; Страница ${t + 1}`),
                  e || (r.innerHTML = `&#x1F56E &nbsp; Страница ${t + 1}`),
                  (r.value = String(t)),
                  n.appendChild(r);
              }
              (n.options[t].selected = !0), (r.pageLearned = a);
            }
          })),
        (r.changePageIconLearned = (t, o) =>
          e(void 0, void 0, void 0, function*() {
            (document.querySelector('.form-select.page')[
              t
            ].innerHTML = `&#9989; &nbsp; Страница ${Number(t) + 1}`),
              (r.pageLearned = r.pageLearned.filter(
                r => r.page !== t || r.group !== o
              )),
              r.pageLearned.push({ page: t, group: o }),
              yield (0, l.addStyleLearnedPages)(r.pageLearned);
          })),
        (r.changePageIconDefault = (t, o) =>
          e(void 0, void 0, void 0, function*() {
            const e = document.querySelector('.form-select.group');
            6 !== Number(e.value) &&
              ((document.querySelector('.form-select.page')[
                t
              ].innerHTML = `&#x1F56E &nbsp; Страница ${Number(t) + 1}`),
              (r.pageLearned = r.pageLearned.filter(
                r => r.page !== t || r.group !== o
              )),
              yield (0, l.addStyleLearnedPages)(r.pageLearned));
          }));
    },
    3160: (t, r, o) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.addListenerGameButton = void 0; const e = o(6668); const a = o(1170); r.addListenerGameButton = () => {
        const t = document.querySelector('.game__button-audio');
        const r = document.querySelector('.game__button-sprint');
        const o = document.querySelector(`.${e.Router.GAME_1}`);
        const i = document.querySelector(`.${e.Router.SPRINT}`);
        document.querySelectorAll('audio').forEach(t => {
          (t.src = ''), (t.srcObject = null), t.remove();
        }),
          t.addEventListener('click', () => {
            localStorage.setItem('router', e.Router.GAME_1),
              (0, a.renderPage)(e.Router.GAME_1, o, !0);
          }),
          r.addEventListener('click', () => {
            localStorage.setItem('router', e.Router.SPRINT),
              (0, a.renderPage)(e.Router.SPRINT, i, !0);
          });
      };
    },
    6171: (t, r, o) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.addAllLearnedMessage = void 0; const e = o(8838); r.addAllLearnedMessage = (t = 0, r) => {
        const o = document.querySelector('.items-container');
        const a = document.querySelector('.wrapper');
        const i = document.querySelector('.game__button-audio');
        const n = document.querySelector('.game__button-sprint');
        20 === t
          ? ((a.style.backgroundColor = 'darkcyan'),
            (0, e.messageModal)(
              'Все слова на данной странице относятся к группам "Сложные слова" или "Изученные слова".'
            ),
            (i.disabled = !0),
            (n.disabled = !0))
          : '' === o.innerHTML
          ? ((a.style.backgroundColor = 'darkcyan'),
            (a.style.height = '100vh'),
            (0, e.messageModal)('Отсутствуют слова из группы "Сложные слова".'),
            (i.disabled = !0),
            (n.disabled = !0))
          : ((a.style.backgroundColor = `${
              [
                'rgba(232, 18, 36, 0.6)',
                'rgba(247, 99, 12, 0.6)',
                'rgba(255, 241, 0, 0.6)',
                'rgba(22, 198, 12, 0.6)',
                'rgba(0, 120, 215, 0.6)',
                'rgba(136, 108, 228, 0.6)',
                'rgba(142, 86, 46, 0.6)'
              ][r]
            }`),
            (i.disabled = !1),
            (n.disabled = !1));
      };
    },
    691: (t, r, o) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.pagination = void 0; const e = o(945); const a = 29; r.pagination = (t, r) => {
        const o = document.querySelector('.page-item__previous');
        const i = document.querySelector('.page-item__next');
        const n = document.querySelector('.navigation');
        const d = document.querySelector('.form-select.group');
        const l = document.querySelector('.form-select.page');
        const s = Number(r);
        s === a && i.classList.add('disabled'),
          s !== a && i.classList.remove('disabled'),
          0 === s && o.classList.add('disabled'),
          0 !== s && o.classList.remove('disabled'),
          d.addEventListener('change', () => {
            Number(d.value) < 6 &&
              ((0, e.draw)(Number(l.value), Number(d.value), t),
              (0, e.drawPageNav)(
                Number(l.value),
                Number(d.value),
                e.pageLearned,
                t
              ),
              (n.style.display = 'flex'),
              localStorage.setItem(
                'currentPageGroup',
                JSON.stringify({ page: Number(l.value), group: d.value })
              )),
              6 === Number(d.value) &&
                ((0, e.drawPageDifficultWords)(t),
                (n.style.display = 'none'),
                localStorage.setItem(
                  'currentPageGroup',
                  JSON.stringify({ page: 0, group: d.value })
                ));
            const r = l.selectedIndex;
            r === a && i.classList.add('disabled'),
              r !== a && i.classList.remove('disabled'),
              0 === r && o.classList.add('disabled'),
              0 !== r && o.classList.remove('disabled');
          }),
          l.addEventListener('change', () => {
            const r = l.selectedIndex;
            const n = d.selectedIndex;
            (0, e.draw)(Number(l.value), n, t),
              r === a && i.classList.add('disabled'),
              r !== a && i.classList.remove('disabled'),
              0 === r && o.classList.add('disabled'),
              0 !== r && o.classList.remove('disabled'),
              localStorage.setItem(
                'currentPageGroup',
                JSON.stringify({ page: l.value, group: d.value })
              );
          }),
          o.addEventListener('click', () => {
            let r = l.selectedIndex;
            const a = d.selectedIndex;
            0 !== r &&
              (r--, (l.options[r].selected = !0), (0, e.draw)(r, a, t)),
              0 === r && o.classList.add('disabled'),
              28 === r && i.classList.remove('disabled'),
              document.querySelectorAll('audio').forEach(t => {
                (t.src = ''), (t.srcObject = null), t.remove();
              }),
              localStorage.setItem(
                'currentPageGroup',
                JSON.stringify({ page: r, group: a })
              );
          }),
          i.addEventListener('click', () => {
            let r = l.selectedIndex;
            const n = d.selectedIndex;
            r++,
              (l.options[r].selected = !0),
              (0, e.draw)(r, n, t),
              r === a && i.classList.add('disabled'),
              1 === r && o.classList.remove('disabled'),
              document.querySelectorAll('audio').forEach(t => {
                (t.src = ''), (t.srcObject = null), t.remove();
              }),
              localStorage.setItem(
                'currentPageGroup',
                JSON.stringify({ page: r, group: n })
              );
          });
      };
    },
    5361: (t, r, o) => {
'use strict'; Object.defineProperty(r, '__esModule', { value:!0 }), r.startTextbook = void 0, o(242), o(7020); const e = o(945); r.startTextbook = (t, r) => {
        let o = 0;
        let a = 0;
        let i = [];
        if (!r) {
          if (localStorage.getItem('currentPageGroup')) {
            const t = localStorage.getItem('currentPageGroup');
            const r = JSON.parse(t);
            (o = r.page < 0 ? 0 : r.page), (a = r.group < 0 ? 0 : r.group);
          }
          if (localStorage.getItem('pageLearned')) {
            const t = localStorage.getItem('pageLearned');
            i = JSON.parse(t);
          }
          (0, e.drawTextbook)(o, a, i, t);
        }
        if ('reload' === window.performance.getEntries()[0].type) {
          const r = function() {
            const t = document.querySelector('.form-select.group');
            const r = document.querySelector('.form-select.page').selectedIndex;
            const o = t.selectedIndex;
            localStorage.setItem(
              'currentPageGroup',
              JSON.stringify({ page: r, group: o })
            );
          };
          window.addEventListener('beforeunload', () => r());
          const n = function() {
            if (localStorage.getItem('currentPageGroup')) {
              const t = localStorage.getItem('currentPageGroup');
              const r = JSON.parse(t);
              (o = r.page < 0 ? 0 : r.page), (a = r.group < 0 ? 0 : r.group);
            }
            if (localStorage.getItem('pageLearned')) {
              const t = localStorage.getItem('pageLearned');
              i = JSON.parse(t);
            }
            (0, e.drawTextbook)(o, a, i, t);
          };
          window.addEventListener('load', n);
        } else r && (0, e.drawTextbook)(o, a, i, t);
      };
    },
    1414: function(t, r, o) {
'use strict'; let e = this && this.__awaiter || function (t, r, o, e) {
          return new (o || (o = Promise))(function(a, i) {
            function n(t) {
              try {
                l(e.next(t));
              } catch (t) {
                i(t);
              }
            }
            function d(t) {
              try {
                l(e.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var r;
              t.done
                ? a(t.value)
                : ((r = t.value),
                  r instanceof o
                    ? r
                    : new o(function(t) {
                        t(r);
                      })).then(n, d);
            }
            l((e = e.apply(t, r || [])).next());
          });
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.renderWordsList = void 0);
      const a = o(5216);
      const i = o(5361);
      r.renderWordsList = () =>
        e(void 0, void 0, void 0, function*() {
          document.querySelectorAll('audio').forEach(t => {
            (t.src = ''), (t.srcObject = null), t.remove();
          });
          let t = !1;
          t = null === document.querySelector('section');
          const r = document.getElementById('root');
          for (; r.lastChild; ) r.lastChild.remove();
          (0, a.renderFooter)();
          const o = document.createElement('section');
          (o.className = 'dictionary'),
            r.append(o),
            (o.innerHTML =
              '\n        <div class="wrapper">\n            <div class="textbook-navigation">\n                <select class="form-select group"></select>\n                <nav class="navigation" aria-label="navigation">\n                    <ul class="pagination">\n                        <li class="page-item page-item__previous">\n                            <a class="page-link">Previous</a>\n                        </li>\n                        <li>\n                        <select class="form-select page">\n                        </select>\n                        </li>\n                        <li class="page-item">\n                            <a class="page-link page-item__next">Next</a>\n                        </li>\n                    </ul>\n                </nav>\n                <div class="game__button">\n                    <button class="button game__button-audio">Аудиовызов</button>\n                    <button class="button game__button-sprint">Спринт</button> \n                </div>\n            </div>\n            <div class="items-container"></div>\n        </div>\n        \n        <template id="items">\n        <div class="item">\n            <div class="item__container">\n                <h4 class="item__title"></h4>\n                <div class="item__audio">\n                    <button class="button item__play-audio"><span class="item__audio-svg"></span></button>\n                    <audio>\n                        <source class="item__audio-word" type="audio/mp3">\n                    </audio>\n                    <audio>\n                        <source class="item__audio-meaning" type="audio/mp3">\n                    </audio>\n                    <audio>\n                        <source class="item__audio-example" type="audio/mp3">\n                    </audio>\n                </div>\n                <div class="item__word-translate"></div>\n                <div class="item__transcription"></div>\n                <div class="item__text-meaning"></div>\n                <div class="item__text-meaning-translate"></div>\n                <div class="item__text-example"></div>\n                <div class="item__text-example-translate"></div>\n                <div class="item__wrong-answer"></div>\n                <div class="item__right-answer"></div> \n                <div class="item__buttons">\n                    <button class="button item__button-hard">Добавить в "Сложные слова"</button>\n                    <button class="button item__button-learned">Добавить в "Изученные слова"</button>\n                </div>\n                <img class="item__img">\n            </div>\n        </div>\n        </template>');
          let e = !1;
          const n = document.querySelector('.user');
          (e = !(
            !localStorage.getItem('email') || !n.classList.contains('logged')
          )),
            (0, i.startTextbook)(e, t);
        });
    },
    3986: function(t, r, o) {
'use strict'; let e = this && this.__awaiter || function (t, r, o, e) {
          return new (o || (o = Promise))(function(a, i) {
            function n(t) {
              try {
                l(e.next(t));
              } catch (t) {
                i(t);
              }
            }
            function d(t) {
              try {
                l(e.throw(t));
              } catch (t) {
                i(t);
              }
            }
            function l(t) {
              var r;
              t.done
                ? a(t.value)
                : ((r = t.value),
                  r instanceof o
                    ? r
                    : new o(function(t) {
                        t(r);
                      })).then(n, d);
            }
            l((e = e.apply(t, r || [])).next());
          });
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.addLearnedWords = r.deleteWordsFromHardWordsPage = r.addWordsForHardWordsPage = void 0);
      const a = o(2305);
      const i = o(945);
      const n = o(6171);
      (r.addWordsForHardWordsPage = () => {
        const t = document.querySelectorAll('.item__button-hard');
        const r = t =>
          e(void 0, void 0, void 0, function*() {
            const r = t.target.parentNode.parentNode;
            const o = r.parentNode.dataset.id;
            (t.target.innerText = 'Добавлено в "Сложные слова"'),
              (t.target.nextElementSibling.textContent =
                'Добавить в "Изученные слова"'),
              r.classList.add('red'),
              r.classList.remove('green');
            const e = document.querySelectorAll(
              '.item__button-hard, .item__button-learned'
            );
            let d = 0;
            if (
              (e.forEach(t => {
                ('Добавлено в "Изученные слова"' !== t.textContent &&
                  'Добавлено в "Сложные слова"' !== t.textContent) ||
                  d++;
              }),
              20 === d)
            ) {
              const t = document.querySelector('.form-select.page');
              const r = document.querySelector('.form-select.group');
              (0, i.changePageIconLearned)(t.selectedIndex, r.selectedIndex),
                (0, n.addAllLearnedMessage)(d, r.selectedIndex);
            }
            yield (0, a.addLearnedHardNeutralWord)(o, 'hard');
          });
        t.forEach(t => {
          t.addEventListener('click', r);
        });
      }),
        (r.deleteWordsFromHardWordsPage = t => {
          const r = document.querySelectorAll(
            '.item__button-hard, .item__button-learned'
          );
          const o = r =>
            e(void 0, void 0, void 0, function*() {
              const o = r.target.parentNode.parentNode;
              const e = o.parentNode.dataset.id;
              r.target.classList.contains('item__button-hard')
                ? ((r.target.innerText = 'Добавить в "Сложные слова"'),
                  yield (0, a.addLearnedHardNeutralWord)(e, 'neutral'),
                  (0, i.drawPageDifficultWords)(t),
                  o.classList.remove('red'))
                : ((r.target.innerText = 'Добавлено в "Изученные слова"'),
                  (r.target.previousElementSibling.textContent =
                    'Добавить в "Сложные слова"'),
                  o.classList.remove('red'),
                  o.classList.add('green'),
                  yield (0, a.addLearnedHardNeutralWord)(e, 'learned'),
                  (0, i.drawPageDifficultWords)(t));
            });
          r.forEach(t => {
            t.addEventListener('click', o);
          });
        }),
        (r.addLearnedWords = () => {
          const t = document.querySelectorAll('.item__button-learned');
          const r = t =>
            e(void 0, void 0, void 0, function*() {
              const r = t.target.parentNode.parentNode;
              const o = r.parentNode.dataset.id;
              if (
                ((t.target.previousElementSibling.textContent =
                  'Добавить в "Сложные слова"'),
                'Добавить в "Изученные слова"' !== t.target.textContent)
              ) {
                if (t.target.textContent === 'Добавлено в "Изученные слова"') {
                  yield (0, a.addLearnedHardNeutralWord)(o, 'neutral'),
                    (t.target.textContent = 'Добавить в "Изученные слова"'),
                    r.classList.remove('red'),
                    r.classList.remove('green');
                  const e = document.querySelectorAll(
                    '.item__button-hard, .item__button-learned'
                  );
                  let d = 0;
                  if (
                    (e.forEach(t => {
                      ('Добавлено в "Изученные слова"' !== t.textContent &&
                        'Добавлено в "Сложные слова"' !== t.textContent) ||
                        d++;
                    }),
                    d < 20)
                  ) {
                    const t = document.querySelector('.form-select.page');
                    const r = document.querySelector('.form-select.group');
                    (0, i.changePageIconDefault)(
                      t.selectedIndex,
                      r.selectedIndex
                    ),
                      (0, n.addAllLearnedMessage)(d, r.selectedIndex);
                  }
                }
              } else {
                yield (0, a.addLearnedHardNeutralWord)(o, 'learned'),
                  (t.target.textContent = 'Добавлено в "Изученные слова"'),
                  r.classList.remove('red'),
                  r.classList.add('green');
                const e = document.querySelectorAll(
                  '.item__button-hard, .item__button-learned'
                );
                let d = 0;
                if (
                  (e.forEach(t => {
                    ('Добавлено в "Изученные слова"' !== t.textContent &&
                      'Добавлено в "Сложные слова"' !== t.textContent) ||
                      d++;
                  }),
                  20 === d)
                ) {
                  const t = document.querySelector('.form-select.page');
                  const r = document.querySelector('.form-select.group');
                  (0, i.changePageIconLearned)(
                    t.selectedIndex,
                    r.selectedIndex
                  ),
                    (0, n.addAllLearnedMessage)(d, r.selectedIndex);
                }
              }
            });
          t.forEach(t => {
            t.addEventListener('click', r);
          });
        });
    },
    6668: (t, r) => {
'use strict'; let o; Object.defineProperty(r, '__esModule', { value:!0 }), r.Router = void 0, (o = r.Router || (r.Router = {})).MAIN = 'main', o.DICTIONARY = 'dictionary', o.GAME_1 = 'challenge', o.SPRINT = 'sprint', o.STATISTICS = 'statistics'
    },
    2204: (t, r) => {
'use strict'; let o; Object.defineProperty(r, '__esModule', { value:!0 }), r.Difficulty = void 0, (o = r.Difficulty || (r.Difficulty = {})).hard = 'hard', o.learned = 'learned', o.neutral = 'neutral'
    }
  };
  var r = {};
  function o(e) {
let a = r[e]; if (void 0 !== a) return a.exports; let i = r[e] = { id:e, exports:{} }; return t[e].call(i.exports, i, i.exports, o), i.exports;
  }
  (o.n = t => {
let r = t && t.__esModule ? () => t.default : () => t; return o.d(r, { a:r }), r;
  }),
    (o.d = (t, r) => {
      for (let e in r)
        o.o(r, e) &&
          !o.o(t, e) &&
          Object.defineProperty(t, e, { enumerable: !0, get: r[e] });
    }),
    (o.g = (function() {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (t) {
        if ('object' == typeof window) return window;
      }
    })()),
    (o.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r)),
    (o.r = t => {
'undefined'!==typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value:'Module' }), Object.defineProperty(t, '__esModule', { value:!0 });
    }),
    (() => {
let t; o.g.importScripts && (t = `${o.g.location  }`); let r = o.g.document; if (!t && r && (r.currentScript && (t = r.currentScript.src), !t)) {
let e = r.getElementsByTagName('script'); e.length && (t = e[e.length - 1].src);
      }
      if (!t)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (t = t
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (o.p = t);
    })(),
    (() => {
'use strict'; o(6860); const t = o(4323); const r = o(1170); const e = o(6655); (0, t.signUser)(), (0, e.setNavEvents)(), (0, r.renderPage)(null, null);
    })();
})();
