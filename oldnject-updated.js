// ============================================================
// QuotexMaster - Premium Console Extension
// Clean, readable version
// ============================================================

  // ============================================================
  // EARLY HOOKS — must run before any page script (document-start)
  // Fixes WebGL DEMO watermark which is preserveDrawingBuffer:false
  // and drawn before late Canvas2D filters can catch it.
  // ============================================================
  try {
    // Intercept window.settings isDemo / history / fetch / WebSocket — demo path should behave as LIVE (no watermark)
    // The chart watermark is driven by socket.isDemo / isDemoTradePage, not just window.settings — patch all carriers
    (function interceptSettingsAndNetwork() {
      window.__qmDemoSession = window.__qmDemoSession === undefined
        ? (() => { try { return location.pathname.indexOf('/en/demo-trade') === 0; } catch(e) { return false; } })()
        : window.__qmDemoSession;
      function isDemoPathNow() { return window.__qmDemoSession === true; }
      function isLivePathNow() { return window.__qmDemoSession !== true; }
      function shouldFlipToLiveObj(obj) {
        return obj && typeof obj==='object' && isDemoPathNow();
      }
      function patchDemoFlags(obj) {
        if (!shouldFlipToLiveObj(obj)) return obj;
        try {
          if ('isDemo' in obj) obj.isDemo = 0;
          if ('demo' in obj) obj.demo = 0;
          if ('isDemoTradePage' in obj) obj.isDemoTradePage = false;
          if ('isDemoProfile' in obj) obj.isDemoProfile = false;
          // generic deep keys used by Quotex payloads
          if ('demoBalance' in obj && 'liveBalance' in obj) { /* keep balances */ }
        } catch(e){}
        return obj;
      }
      // --- window.settings intercept ---
      let _settingsValue = window.settings;
      try {
        Object.defineProperty(window, 'settings', {
          configurable: true, enumerable: true,
          get() { return _settingsValue; },
          set(v) {
            if (v && typeof v==='object' && isDemoPathNow()) patchDemoFlags(v);
            _settingsValue = v;
            if (v && typeof v==='object' && isDemoPathNow() && 'isDemo' in v) {
              try {
                let _d = v.isDemo;
                Object.defineProperty(v, 'isDemo', {
                  configurable:true, enumerable:true,
                  get(){ return _d; },
                  set(nv){ _d = (isDemoPathNow() ? 0 : nv); }
                });
                v.isDemo = 0;
              } catch(e){}
            }
          }
        });
        if (_settingsValue && typeof _settingsValue==='object' && isDemoPathNow()) patchDemoFlags(_settingsValue);
      } catch(e){}

      // --- history.replaceState/pushState: keep URL semantics for app routing but ensure isDemoTradePage stays consistent ---
      // Do not prevent navigation; app may use path to decide mode — so also patch location.pathname illusion when needed
      // Instead patch fetch/XHR/WebSocket payloads below so chart never sees demo mode.

      // --- WebSocket sniff: patch messages that carry isDemo ---
      try {
        const OrigWS = window.WebSocket;
        if (OrigWS && !OrigWS.__qmPatched) {
          function patchSocketEvent(event) {
            try {
              if (!event || typeof event.data !== 'string' || event.data.indexOf('isDemo') === -1) return event;
              const parsed = JSON.parse(event.data);
              (function deepPatch(value) {
                if (!value || typeof value !== 'object') return;
                patchDemoFlags(value);
                for (const key of ['payload', 'data', 'result']) if (value[key]) deepPatch(value[key]);
                for (const key in value) {
                  const child = value[key];
                  if (child && typeof child === 'object') deepPatch(child);
                }
              })(parsed);
              return new MessageEvent('message', { data: JSON.stringify(parsed), origin: event.origin, lastEventId: event.lastEventId });
            } catch(e) { return event; }
          }
          window.WebSocket = function(url, protocols){
            const ws = protocols ? new OrigWS(url, protocols) : new OrigWS(url);
            // patch send to flip outgoing isDemo
            const origSend = ws.send;
            ws.send = function(data){
              try {
                if (typeof data==='string' && data.indexOf('isDemo')!==-1 && isDemoPathNow()) {
                  let obj; try{ obj=JSON.parse(data);}catch(e){ obj=null; }
                  if (obj) { patchDemoFlags(obj); if (obj.payload) patchDemoFlags(obj.payload); data = JSON.stringify(obj); }
                }
              } catch(e){}
              return origSend.call(this, data);
            };
            const nativeAddEventListener = ws.addEventListener.bind(ws);
            let onMessageHandler = null;
            Object.defineProperty(ws, 'onmessage', {
              configurable: true,
              get() { return onMessageHandler; },
              set(handler) {
                onMessageHandler = handler;
                if (typeof handler !== 'function') return;
                nativeAddEventListener('message', function(event) {
                  handler.call(ws, patchSocketEvent(event));
                });
              }
            });
            ws.addEventListener = function(type, listener, options) {
              if (type !== 'message' || typeof listener !== 'function') {
                return nativeAddEventListener(type, listener, options);
              }
              return nativeAddEventListener(type, function(event) {
                listener.call(ws, patchSocketEvent(event));
              }, options);
            };
            return ws;
          };
          window.WebSocket.prototype = OrigWS.prototype;
          window.WebSocket.__qmPatched = true;
          window.WebSocket.OPEN = OrigWS.OPEN; window.WebSocket.CONNECTING = OrigWS.CONNECTING;
          window.WebSocket.CLOSING = OrigWS.CLOSING; window.WebSocket.CLOSED = OrigWS.CLOSED;
        }
      } catch(e){}

      // --- fetch patch: flip any JSON request/response that carries isDemo / isDemoTradePage ---
      try {
        const origFetch = window.fetch;
        if (origFetch && !origFetch.__qmPatched) {
          window.fetch = function(input, init){
            // patch request
            try {
              if (init && typeof init.body==='string' && init.body.indexOf('isDemo')!==-1 && isDemoPathNow()) {
                try{ let b=JSON.parse(init.body); patchDemoFlags(b); if(b.payload) patchDemoFlags(b.payload); init.body=JSON.stringify(b); }catch(e){}
              }
              if (typeof input==='string' && input.indexOf('/demo')!==-1 && isDemoPathNow()) {
                // keep URL as-is for socket; watermark is decided by payload, not URL
              }
            } catch(e){}
            return origFetch.call(this, input, init).then(function(resp){
              // clone and patch JSON bodies that contain isDemo
              const ct = resp.headers.get('content-type')||'';
              if (ct.indexOf('json')!==-1 || ct.indexOf('text')!==-1) {
                return resp.clone().text().then(function(txt){
                  try{
                    if (txt.indexOf('isDemo')!==-1 && isDemoPathNow()) {
                      let j=JSON.parse(txt);
                      // deep patch
                      (function deep(o){
                        if(!o||typeof o!=='object') return;
                        patchDemoFlags(o);
                        if(o.payload) deep(o.payload);
                        if(o.data) deep(o.data);
                        for(const k in o) if(typeof o[k]==='object') deep(o[k]);
                      })(j);
                      txt=JSON.stringify(j);
                      return new Response(txt, {status: resp.status, statusText: resp.statusText, headers: resp.headers});
                    }
                  }catch(e){}
                  return resp;
                });
              }
              return resp;
            });
          };
          window.fetch.__qmPatched=true;
        }
      } catch(e){}

      // --- XHR patch ---
      try {
        const origOpen = XMLHttpRequest.prototype.open;
        const origSend = XMLHttpRequest.prototype.send;
        if (origOpen && !origOpen.__qmPatched) {
          XMLHttpRequest.prototype.open = function(method, url){ this.__qmUrl=url; return origOpen.apply(this, arguments); };
          XMLHttpRequest.prototype.open.__qmPatched=true;
        }
        if (origSend && !origSend.__qmPatched) {
          XMLHttpRequest.prototype.send = function(body){
            try{
              if (typeof body==='string' && body.indexOf('isDemo')!==-1 && isDemoPathNow()) {
                try{ let j=JSON.parse(body); patchDemoFlags(j); if(j.payload) patchDemoFlags(j.payload); body=JSON.stringify(j);}catch(e){}
              }
            }catch(e){}
            // hook response
            this.addEventListener('load', function(){
              try{
                const txt=this.responseText;
                if (txt && txt.indexOf('isDemo')!==-1 && isDemoPathNow() && this.getResponseHeader('content-type')?.indexOf('json')!==-1) {
                  // can't mutate XHR response, but app reads socket not XHR for chart mode
                }
              }catch(e){}
            });
            return origSend.call(this, body);
          };
          XMLHttpRequest.prototype.send.__qmPatched=true;
        }
      } catch(e){}
    })();

    // Capture Canvas2D fillText early — mark watermark canvas, don't getImageData here (hot path)
    (function hookCanvas2DEarly() {
      const demoRe = /(?:^|\s)(?:demo(?:\s+(?:account|trading))?|practice)(?:\s|$)/i;
      const wmSet = (window.__qmWmCanvases = window.__qmWmCanvases || new WeakSet());
      window.__qmMarkWmCanvas = function(c){ try{ if(c) wmSet.add(c);}catch(e){} };
      const protos = [CanvasRenderingContext2D.prototype, (typeof OffscreenCanvasRenderingContext2D !== 'undefined' ? OffscreenCanvasRenderingContext2D.prototype : null)].filter(Boolean);
      protos.forEach(function(proto) {
        ['fillText','strokeText'].forEach(function(m) {
          const orig = proto[m];
          if (!orig || orig.__qmDemoFilterEarly) return;
          const wrapped = function(text) {
            try {
              const norm = String(text).replace(/\s+/g,' ').trim();
              const cv = this.canvas;
              const isLarge = cv && cv.width >= 280 && cv.height >= 40;
              let isWm = demoRe.test(norm);
              if (!isWm && isLarge && /^[demo\s]+$/i.test(norm) && norm.length >= 2) isWm = true;
              if (isWm) { if(cv) try{ wmSet.add(cv); }catch(e){} return; }
            } catch(e){}
            return orig.apply(this, arguments);
          };
          wrapped.__qmDemoFilterEarly = true;
          wrapped.__orig = orig;
          proto[m] = wrapped;
        });
        ['drawImage','createPattern'].forEach(function(m){
          const orig = proto[m];
          if (!orig || orig.__qmSrcFilterEarly) return;
          const wrapped = function(src){
            try{
              const url = String(src && src.src || '');
              if (/(?:^|\/)(?:demo|watermark)(?:[-_.]|$)|data:image\/svg\+xml.*demo/i.test(url)) return m==='createPattern'? null : undefined;
            }catch(e){}
            return orig.apply(this, arguments);
          };
          wrapped.__qmSrcFilterEarly = true;
          proto[m]=wrapped;
        });
      });
    })();

    // Hook HTMLCanvasElement.getContext to wrap WebGL contexts and block DEMO texture uploads / draws
    (function hookWebGLEarly() {
      const origGetContext = HTMLCanvasElement.prototype.getContext;
      if (!origGetContext || origGetContext.__qmWrapped) return;
      HTMLCanvasElement.prototype.getContext = function(type, attrs) {
        const ctx = origGetContext.call(this, type, attrs);
        if (!ctx) return ctx;
        const t = String(type||'').toLowerCase();
        if (t.indexOf('webgl')===0) {
          try { wrapWebGLContext(ctx, this); } catch(e){}
        }
        return ctx;
      };
      HTMLCanvasElement.prototype.getContext.__qmWrapped = true;
      HTMLCanvasElement.prototype.getContext.__orig = origGetContext;

      // lightweight: watermark canvases are marked by fillText hook (no getImageData in hot path)
      const _wmCanvases = (window.__qmWmCanvases = window.__qmWmCanvases || new WeakSet());
      window.__qmMarkWmCanvas = function(c) { try{ if(c) _wmCanvases.add(c); }catch(e){} };

      function wrapWebGLContext(gl, canvas) {
        if (!gl || gl.__qmWrapped) return;
        gl.__qmWrapped = true;
        const origTexImage2D = gl.texImage2D;
        const origTexSubImage2D = gl.texSubImage2D;
        if (origTexImage2D && !origTexImage2D.__qmWrapped) {
          gl.texImage2D = function() {
            try {
              const args = Array.prototype.slice.call(arguments);
              let src = null;
              for (let i=5;i<args.length;i++){
                const a=args[i];
                if(a && (a instanceof HTMLCanvasElement || (typeof OffscreenCanvas!=='undefined' && a instanceof OffscreenCanvas) || a instanceof HTMLImageElement || a instanceof ImageBitmap)) { src=a; break; }
                if(a && a.data && a.width) { src=a; break; }
              }
              // fast path: only drop if source was previously marked as watermark canvas
              if (src && _wmCanvases.has(src)) return;
              if (src && src.src && /demo|watermark/i.test(src.src)) return;
              if (src && src.src && /demo|watermark/i.test(String(src.src||''))) return;
            } catch(e){}
            return origTexImage2D.apply(this, arguments);
          };
          gl.texImage2D.__qmWrapped=true;
        }
        if (origTexSubImage2D && !origTexSubImage2D.__qmWrapped) {
          gl.texSubImage2D = function(){
            try{
              const args=Array.prototype.slice.call(arguments);
              let src=null;
              for(let i=6;i<args.length;i++){
                const a=args[i];
                if(a && (a instanceof HTMLCanvasElement || (typeof OffscreenCanvas!=='undefined' && a instanceof OffscreenCanvas))){ src=a; break; }
              }
              if(src && _wmCanvases.has(src)) return;
            }catch(e){}
            return origTexSubImage2D.apply(this, arguments);
          };
          gl.texSubImage2D.__qmWrapped=true;
        }
      }

      // --- draw block: DEMO watermark counts 1710/6 (pixel-verified) — block only on DEMO path ---
      function shouldBlockDEMOWatermark(count) {
        if (!isDemoPathNow()) return false;
        return count === 1710 || count === 6;
      }
      function wrapDrawForWM(gl) {
        if (!gl || gl.__qmDrawWrap) return;
        gl.__qmDrawWrap = true;
        const oDE = gl.drawElements, oDA = gl.drawArrays;
        if (oDE && !oDE.__qmWM) {
          gl.drawElements = function(mode, count, type, offset){
            if (shouldBlockDEMOWatermark(count)) return;
            return oDE.apply(this, arguments);
          };
          gl.drawElements.__qmWM = true;
        }
        if (oDA && !oDA.__qmWM) {
          gl.drawArrays = function(mode, first, count){
            if (shouldBlockDEMOWatermark(count)) return;
            return oDA.apply(this, arguments);
          };
          gl.drawArrays.__qmWM = true;
        }
      }
      try {
        [WebGLRenderingContext.prototype, WebGL2RenderingContext.prototype].filter(Boolean).forEach(function(proto){
          if (proto.__qmProtoWM) return;
          proto.__qmProtoWM = true;
          const oDE = proto.drawElements, oDA = proto.drawArrays;
          proto.drawElements = function(mode, count, type, offset){
            if (shouldBlockDEMOWatermark(count)) return;
            return oDE.apply(this, arguments);
          };
          proto.drawArrays = function(mode, first, count){
            if (shouldBlockDEMOWatermark(count)) return;
            return oDA.apply(this, arguments);
          };
        });
      } catch(e){}
      try {
        document.querySelectorAll('canvas').forEach(function(c){
          try{
            const gl=c.getContext('webgl')||c.getContext('webgl2')||c.getContext('experimental-webgl');
            if(gl) { wrapWebGLContext(gl,c); wrapDrawForWM(gl); }
          }catch(e){}
        });
      } catch(e){}
      const _origWrap = wrapWebGLContext;
      wrapWebGLContext = function(gl, canvas){
        _origWrap(gl, canvas);
        try{ wrapDrawForWM(gl); }catch(e){}
      };
    })();
  } catch(e) {}
(function () {
  'use strict';

  // ============================================================
  // Constants
  // ============================================================
  const APP_NAME = 'QuotexMaster';
  const FLAG_CLASS = 'flag-bd';

  // Firebase URLs
  const FIREBASE_APP_URL = 'https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js';
  const FIREBASE_DB_URL = 'https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js';
  const FIREBASE_AUTH_URL = 'https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js';

  // Error Messages
  const FIREBASE_ERROR_MSG = '❌ Failed to load Firebase SDK. Please check your internet connection.';
  const AUTH_ERROR_MSG = '❌ Authentication failed. Please enable Anonymous auth in Console.';
  const LICENSE_EMPTY_ERROR = '❌ Please enter a license key';
  const LICENSE_FORMAT_ERROR = '❌ Invalid license format. Use: QICK-1108-V56B';
  const LICENSE_VERIFY_ERROR_MSG = '❌ License verification failed';
  const LICENSE_ERROR_MSG = '❌ License verification error';
  const DEVICE_MISMATCH_ERROR = 'device_mismatch';
  const DEVICE_MISMATCH_MSG = '❌ License is used on another device bro';
  const LICENSE_NOT_FOUND_MSG = 'License key not found';
  const BALANCE_INVALID_ERROR = '❌ Please enter a valid balance';
  const STARTING_MSG = '🚀 Starting working Bro....';

  // DOM Element IDs
  const LICENSE_INPUT_ID = 'license-input';
  const LICENSE_POPUP_ID = 'license-popup';
  const LICENSE_LOADING_CLASS = 'license-loading';
  const LICENSE_SUBMIT_ID = 'license-submit';
  const BALANCE_INPUT_ID = 'balance-input';
  const NAME_INPUT_ID = 'name-input';
  const FLAG_SELECT_ID = 'flag-select';
  const AVATAR_INPUT_ID = 'avatar-input';
  const GREENLINE_SLIDER_ID = 'greenline-slider';
  const GREENLINE_VALUE_ID = 'greenline-value';
  const BALANCE_SUBMIT_ID = 'balance-submit';
  const BALANCE_POPUP_ID = 'balance-popup';
  const LICENSE_OVERLAY_ID = 'license-blocking-overlay';
  const ERROR_AREA_CLASS = 'error-message-area';
  const PNL_COLOR_CLASS = 'pnl-color-override';

  // LocalStorage Keys
  const CACHED_LICENSE_KEY = 'cachedLicenseKey';
  const DEVICE_FINGERPRINT_KEY = 'deviceFingerprint';
  const CUSTOM_AVATAR_URL_KEY = 'customAvatarUrl';
  const GREENLINE_WIDTH_KEY = 'greenLineWidth';
  const CUSTOM_MOD_SETTINGS_KEY = 'customModSettings';

  // CSS Selectors for balance elements
  const BALANCE_SELECTORS = [
    '.Zt1hG',
    '.pVBHU',
    ".---react-features-Usermenu-styles-module__infoBalance--pVBHU",
    "#root > div > div.page.app__page > header > div.lqUUw > div.rymiA > div > div._58LeE > div.pVBHU",
    "#root > div > div.page.app__page > header > div.header__container > div.---react-features-Usermenu-styles-module__usermenu--rymiA > div > div.---react-features-Usermenu-styles-module__infoText--58LeE > div.---react-features-Usermenu-styles-module__infoBalance--pVBHU",
    ".usermenu__info-balance",
    "[class*='infoBalance']",
  ];

  // Leaderboard money selectors
  const MONEY_SELECTORS = [
    '.ord28',
    '.BwWCZ',
    ".---react-features-Sidepanel-LeaderBoard-Position-styles-module__money--BwWCZ",
    '.position__header-money',
    "[class*='LeaderBoard-Position'][class*='money']",
  ];

  // Name/Flag selectors
  const NAME_SELECTORS = [
    '.d6ijp',
    '.xN5cX',
    ".---react-features-Sidepanel-LeaderBoard-Position-styles-module__name--xN5cX",
    '.position__header-name',
    "[class*='LeaderBoard-Position'][class*='name']",
  ];

  // Banner hide stylesheet
  const HIDE_BANNER_CSS = `
    .q04vx,
    div[dir="ltr"].q04vx,
    .JbYcC,
    .r7UKG,
    .P86XK,
    .VRCVp {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        height: 0 !important;
        width: 0 !important;
        overflow: hidden !important;
        position: absolute !important;
        left: -9999px !important;
    }
  `;

  // PNL color stylesheet
  const PNL_COLOR_CSS = `
    .ord28.o8xRM { color: var(--pnl-color, #0faf59) !important; }
    .BwWCZ.LD4pW { color: var(--pnl-color, #0faf59) !important; }
    .---react-features-Sidepanel-LeaderBoard-Position-styles-module__money--BwWCZ.---react-features-Sidepanel-LeaderBoard-Position-styles-module__red--LD4pW { color: #ff4757 !important; }
    .---react-features-Sidepanel-LeaderBoard-Position-styles-module__money--BwWCZ.---react-features-Sidepanel-LeaderBoard-Position-styles-module__green--LD4pW { color: #0faf59 !important; }
    .position__header-money.--red { color: #ff4757 !important; }
    .position__header-money.--green { color: #0faf59 !important; }
  `;

  // Firebase config
  const FIREBASE_CONFIG = {
    apiKey: 'AIzaSyAkhYexMHLcLWWLOsynXADmkFH-TUkMBAU',
    authDomain: 'injection-6f022.firebaseapp.com',
    databaseURL: 'https://injection-6f022-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'injection-6f022',
    storageBucket: 'injection-6f022.firebasestorage.app',
    messagingSenderId: '887557497201',
    appId: '1:887557497201:web:6c9797ec6015b2c8e516d0',
    measurementId: 'G-DHLY4ZELC3',
  };

  // Supported domains
  const SUPPORTED_DOMAINS = ['qxbroker.com', 'market-qx.pro', 'market-qx.trade', 'market-qtx.trade'];
  const DEMO_PATH = '/en/demo-trade';
  const TRADE_PATH = '/en/trade';

  // ============================================================
  // Hide Banner Script
  // ============================================================
  const hideBannerStyle = document.createElement('style');
  hideBannerStyle.id = 'hide-welcome-banner';
  hideBannerStyle.textContent = HIDE_BANNER_CSS;

  if (document.head) {
    document.head.appendChild(hideBannerStyle);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      document.head.appendChild(hideBannerStyle);
    });
  }

  // ============================================================
  // Redirect demo-trade to trade
  // ============================================================
  function redirectDemoToTrade() {
    const hostname = location.hostname.replace(/^www\./, '');
    if (SUPPORTED_DOMAINS.some((domain) => hostname.endsWith(domain))) {
      if (location.pathname.startsWith(DEMO_PATH)) {
        const newUrl = location.origin + TRADE_PATH + location.search + location.hash;
        history.replaceState(null, '', newUrl);
      }
    }
  }

  redirectDemoToTrade();

  const redirectObserver = new MutationObserver(redirectDemoToTrade);
  redirectObserver.observe(document, { subtree: true, childList: true });

  // ============================================================
  // Firebase SDK Loader
  // ============================================================
  function loadFirebaseSDK() {
    return new Promise((resolve, reject) => {
      if (typeof firebase !== "undefined") {
        resolve();
        return;
      }

      const loadScripts = () => {
        const appScript = document.createElement("script");
        appScript.src = FIREBASE_APP_URL;

        appScript.onload = () => {
          const dbScript = document.createElement("script");
          dbScript.src = FIREBASE_DB_URL;

          dbScript.onload = () => {
            const authScript = document.createElement("script");
            authScript.src = FIREBASE_AUTH_URL;

            authScript.onload = () => setTimeout(resolve, 6000);
            authScript.onerror = reject;
            document.head.appendChild(authScript);
          };
          dbScript.onerror = reject;
          document.head.appendChild(dbScript);
        };
        appScript.onerror = reject;
        document.head.appendChild(appScript);
      };

      if (document.head) loadScripts();
      else document.addEventListener("DOMContentLoaded", loadScripts, { once: true });
    });
  }
  async function initExtension() {
    try {
      await loadFirebaseSDK();
      initializeFirebase();
    } catch (error) {
      showErrorMessage(FIREBASE_ERROR_MSG);
    }
  }

  // ============================================================
  // Main Firebase Logic
  // ============================================================
  function initializeFirebase() {
    if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);

    const db = firebase.database();
    const auth = firebase.auth();
    let startingBalance = null;
    let licenseVerified = false;
    let licenseKey = null;
    let isAnonymousAuth = false;

    // ---- Anonymous Auth ----
    async function signInAnonymously() {
      try {
        await auth.signInAnonymously();
        isAnonymousAuth = true;
        return true;
      } catch (error) {
        showErrorMessage(AUTH_ERROR_MSG);
        return false;
      }
    }

    // ---- Device Fingerprint ----
    function generateDeviceFingerprint() {
      const cached = sessionStorage.getItem(DEVICE_FINGERPRINT_KEY);
      if (cached) return cached;

      let webglInfo = 'no-webgl';
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl) {
          const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
          if (debugInfo) {
            const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) || 'unknown-vendor';
            const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || 'unknown-renderer';
            webglInfo = vendor + '~' + renderer;
          }
        }
      } catch {
        webglInfo = 'no-webgl';
      }

      const deviceData = {
        screen: screen.width + 'x' + screen.height + 'x' + screen.colorDepth,
        availScreen: screen.availWidth + 'x' + screen.availHeight,
        platform: navigator.platform || 'unknown',
        hardwareConcurrency: navigator.hardwareConcurrency || 'unknown',
        maxTouchPoints: navigator.maxTouchPoints || 0,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
        timezoneOffset: new Date().getTimezoneOffset(),
        webgl: webglInfo,
        ua: navigator.userAgent || 'unknown',
      };

      const jsonString = JSON.stringify(deviceData);

      // Simple hash
      let hash = 0;
      for (let i = 0; i < jsonString.length; i++) {
        const charCode = jsonString.charCodeAt(i);
        hash = ((hash << 5) - hash) + charCode;
        hash = hash & hash; // Convert to 32bit integer
      }

      const hashStr = Math.abs(hash).toString(36).padStart(8, '0');
      const b64Str = btoa(jsonString).replace(/[^a-zA-Z0-9]/g, '').substring(0, 16);
      const fingerprint = (hashStr + b64Str).substring(0, 24);

      sessionStorage.setItem(DEVICE_FINGERPRINT_KEY, fingerprint);
      return fingerprint;
    }

    function getDeviceInfo() {
      return JSON.stringify({
        userAgent: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screen: screen.width + 'x' + screen.height,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      });
    }

    // ---- License Verification ----
    async function verifyLicense(licenseKeyInput) {
      try {
        const fingerprint = generateDeviceFingerprint();
        const deviceInfo = getDeviceInfo();
        const licenseRef = db.ref('licenses/' + licenseKeyInput);
        const snapshot = await licenseRef.once('value');

        if (!snapshot.exists()) throw new Error(LICENSE_NOT_FOUND_MSG);

        const licenseData = snapshot.val();

        if (licenseData.status !== 'active') {
          throw new Error('License is ' + licenseData.status);
        }

        if (licenseData.fingerprint && licenseData.fingerprint !== fingerprint) {
          throw new Error(DEVICE_MISMATCH_ERROR);
        }

        if (!licenseData.fingerprint) {
          await licenseRef.update({
            fingerprint: fingerprint,
            deviceInfo: deviceInfo,
            lastUsed: new Date().toISOString(),
            lastModified: new Date().toISOString(),
          });
        } else {
          await licenseRef.update({
            lastUsed: new Date().toISOString(),
            lastModified: new Date().toISOString(),
          });
        }

        return { success: true };
      } catch (error) {
        if (error.message === DEVICE_MISMATCH_ERROR) {
          return { success: false, error: DEVICE_MISMATCH_ERROR };
        }
        return { success: false, error: error.message };
      }
    }

    // ---- Error Display ----
    function showError(message, containerId = null) {
      if (containerId) {
        const container = document.getElementById(containerId);
        if (container) {
          let errorArea = container.querySelector('.error-message-area');
          if (!errorArea) {
            errorArea = document.createElement('div');
            errorArea.className = ERROR_AREA_CLASS;
            errorArea.style.cssText = 'margin-top: 15px; padding: 12px; background: rgba(220, 53, 69, 0.9); color: white; border-radius: 8px; font-size: 13px; text-align: center; border: 1px solid rgba(255,255,255,0.2); animation: errorShake 0.5s ease;';
            container.appendChild(errorArea);
          }
          errorArea.innerHTML = message;
          errorArea.style.display = 'block';
          setTimeout(() => {
            if (errorArea && errorArea.parentNode) {
              errorArea.style.display = 'none';
            }
          }, 5000);
          return;
        }
      }

      // Fallback toast
      const toast = document.createElement('div');
      toast.style.cssText = "position: fixed; top: 20px; right: 20px; z-index: 999999; background: rgba(220, 53, 69, 0.95); color: white; padding: 15px 20px; border-radius: 8px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 600; font-size: 14px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);";
      toast.innerHTML = message;
      const appendToast = () => document.body.appendChild(toast);
      if (document.body) appendToast();
      else document.addEventListener('DOMContentLoaded', appendToast, { once: true });
      setTimeout(() => {
        if (toast.parentNode) toast.remove();
      }, 6000);
    }

    // ---- Show Toast Message ----
    function showToast(message) {
      const toastContainer = document.createElement('div');
      toastContainer.innerHTML = `
        <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 999999; animation: toastFadeIn 0.5s ease;">
          <div style="background: linear-gradient(145deg, rgba(18,18,32,0.96), rgba(10,10,20,0.99)); padding: 28px 36px; border-radius: 24px; backdrop-filter: blur(30px) saturate(180%); -webkit-backdrop-filter: blur(30px) saturate(180%); border: 1px solid rgba(255,107,53,0.35); color: white; font-family: 'Segoe UI', Arial, sans-serif; text-align: center; max-width: 440px; min-width: 320px; word-wrap: break-word; line-height: 1.6; box-shadow: 0 30px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,107,53,0.12) inset, 0 0 50px rgba(255,107,53,0.10); position: relative;">
            <div style="display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 18px;">
              <div style="width: 48px; height: 48px; background: url('https://www.image2url.com/r2/default/images/1783062172228-2b84b015-5139-465b-b2af-8f37d52e08ca.png') center/cover; border-radius: 12px; border: 2px solid rgba(255,107,53,0.4); box-shadow: 0 6px 25px rgba(255,107,53,0.4); flex-shrink:0;"></div>
              <div style="text-align: left;">
                <h3 style="margin:0; font-size:20px; font-weight:700; background:linear-gradient(135deg, #FFB380, #FF6B35); -webkit-background-clip:text; -webkit-text-fill-color:transparent; letter-spacing:0.3px;">QUOTEX MASTER</h3>
                <p style="margin:2px 0 0; font-size:11px; color:rgba(255,107,53,0.7); font-weight:500; text-transform:uppercase; letter-spacing:1.5px;">Premium Code</p>
              </div>
            </div>
            <div style="font-size:12px; color:rgba(255,107,53,0.5); font-weight:500; letter-spacing:0.5px; border-top:1px solid rgba(255,107,53,0.1); padding-top:14px;">Created by @QuotexMaster</div>
          </div>
        </div>
      `;
      document.body.appendChild(toastContainer);
      setTimeout(() => {
        if (toastContainer.parentNode) {
          toastContainer.style.animation = 'toastFadeOut 0.4s ease forwards';
          setTimeout(() => {
            if (toastContainer.parentNode) toastContainer.remove();
          }, 500);
        }
      }, 4000);
    }

    // ============================================================
    // License Popup
    // ============================================================
    function createLicensePopup() {
      const licensePopupDiv = document.createElement('div');
      licensePopupDiv.innerHTML = `
        <div id="${LICENSE_POPUP_ID}" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(8,8,18,0.92); display: flex; align-items: center; justify-content: center; z-index: 999999; font-family: 'Segoe UI', 'Poppins', Arial, sans-serif; animation: bgFade 0.5s ease; padding: 16px; backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%);">
          <div class="watermark" style="position: absolute; bottom: 24px; right: 28px; color: rgba(255,107,53,0.15); font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; z-index: 2;">✦ QuotexMaster</div>
          <div style="background: linear-gradient(145deg, rgba(18,18,32,0.97), rgba(10,10,20,0.99)); padding: 0; border-radius: 28px; backdrop-filter: blur(40px) saturate(200%); -webkit-backdrop-filter: blur(40px) saturate(200%); border: 1px solid rgba(255,107,53,0.25); text-align: center; max-width: 420px; width: 100%; animation: popupFade 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); color: white; box-shadow: 0 30px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,107,53,0.08) inset, 0 0 60px rgba(255,107,53,0.06); overflow: hidden; position: relative; z-index: 3;">
            <div style="position: absolute; inset: -2px; border-radius: 30px; padding: 2px; background: conic-gradient(from 0deg, rgba(255,107,53,0.3), rgba(139,92,246,0.3), rgba(255,107,53,0.3), rgba(139,92,246,0.3), rgba(255,107,53,0.3)); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; animation: borderRotate 6s linear infinite; z-index: 0;"></div>
            <div style="position: absolute; top: -80px; right: -80px; width: 240px; height: 240px; background: radial-gradient(circle, rgba(255,107,53,0.10), transparent 70%); border-radius: 50%; pointer-events: none; z-index: 0; animation: orbFloat 8s ease-in-out infinite;"></div>
            <div style="position: absolute; bottom: -100px; left: -100px; width: 280px; height: 280px; background: radial-gradient(circle, rgba(139,92,246,0.08), transparent 70%); border-radius: 50%; pointer-events: none; z-index: 0; animation: orbFloat 10s ease-in-out infinite reverse;"></div>
            <div style="position: relative; padding: 28px 28px 20px; background: linear-gradient(135deg, rgba(255,107,53,0.08), rgba(139,92,246,0.04)); border-bottom: 1px solid rgba(255,107,53,0.10); z-index: 1;">
              <div style="display: flex; align-items: center; justify-content: center; gap: 16px;">
                <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #1a1a2e, #2d2d44); border-radius: 16px; display: flex; align-items: center; justify-content: center; border: 1.5px solid rgba(255,107,53,0.35); box-shadow: 0 8px 30px rgba(255,107,53,0.20), 0 0 0 1px rgba(255,107,53,0.05) inset; flex-shrink: 0; overflow: hidden;">
                  <div style="width: 42px; height: 42px; background: url('https://www.image2url.com/r2/default/images/1783060621579-373ada1f-269c-44bc-89d7-ca7e05c39360.png') center/cover; border-radius: 10px;"></div>
                </div>
                <div style="text-align: left;">
                  <h1 style="margin: 0; font-size: 20px; font-weight: 700; background: linear-gradient(135deg, #FFB380, #FF6B35, #FFB380); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: -0.3px; animation: shimmerText 3s ease-in-out infinite; line-height: 1.2;">Quotex Editor Pro</h1>
                  <p style="margin: 2px 0 0 0; font-size: 10px; color: rgba(255,107,53,0.60); font-weight: 500; text-transform: uppercase; letter-spacing: 2.5px; -webkit-text-fill-color: rgba(255,107,53,0.60);">✦ Premium Console Code ✦</p>
                </div>
              </div>
              <div style="position: relative; margin-top: 16px; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,53,0.20), transparent);"></div>
            </div>
            <div style="position: relative; padding: 24px 28px 26px; z-index: 1;">
              <h2 style="margin: 0 0 2px 0; font-size: 17px; font-weight: 600; color: #ffffff; letter-spacing: 0.3px;">License Verification</h2>
              <p style="margin: 0 0 18px 0; color: rgba(255,255,255,0.45); font-size: 12.5px; line-height: 1.5; font-weight: 400; letter-spacing: 0.2px;">Enter your license key to unlock premium features</p>
              <input id="${LICENSE_INPUT_ID}" type="text" placeholder="✧ QICK-1108-V56B" style="width: 100%; padding: 14px 18px; margin: 0 0 16px 0; border: 1.5px solid rgba(255,107,53,0.20); background: rgba(255,255,255,0.03); border-radius: 14px; font-size: 15px; color: #ffffff; text-align: center; outline: none; transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); font-family: 'Monaco', 'Consolas', 'Courier New', monospace; letter-spacing: 2px; box-sizing: border-box; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); box-shadow: 0 2px 12px rgba(0,0,0,0.20);">
              <button id="${LICENSE_SUBMIT_ID}" style="background: linear-gradient(135deg, #FF6B35, #CC3300, #FF6B35); background-size: 200% auto; color: #0a0a12; padding: 14px 20px; border: none; border-radius: 14px; cursor: pointer; font-size: 14px; font-weight: 700; width: 100%; box-shadow: 0 6px 28px rgba(255,107,53,0.30); transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); margin-bottom: 14px; letter-spacing: 1px; text-transform: uppercase; position: relative; overflow: hidden;">
                <span style="position: relative; z-index: 2;">✦ Verify &amp; Activate</span>
                <div style="position: absolute; inset: 0; background: linear-gradient(135deg, #FFB380, #FF6B35, #FFB380); background-size: 200% auto; opacity: 0; transition: opacity 0.4s ease; animation: shimmerBtn 2.5s ease-in-out infinite;"></div>
              </button>
              <div id="${LICENSE_LOADING_CLASS}" style="display: none; margin-top: 10px; color: rgba(255,255,255,0.60); font-size: 12px; font-weight: 500; letter-spacing: 0.5px;">
                <div style="display: inline-block; width: 16px; height: 16px; border: 2px solid rgba(255,107,53,0.15); border-radius: 50%; border-top-color: #FF6B35; animation: spin 0.9s ease-in-out infinite; margin-right: 10px; vertical-align: middle;"></div>
                Verifying license...
              </div>
              <div class="${ERROR_AREA_CLASS}" style="display: none; margin-top: 12px; padding: 10px 16px; background: rgba(239,68,68,0.08); color: #fca5a5; border-radius: 12px; font-size: 12px; text-align: center; border: 1px solid rgba(239,68,68,0.15); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); font-weight: 500; letter-spacing: 0.2px;"></div>
              <div style="margin: 18px 0 16px; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,53,0.12), transparent);"></div>
              <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                <a href="https://t.me/QuotexMaster_Pro" target="_blank" style="display: flex; align-items: center; padding: 8px 18px; background: rgba(255,107,53,0.06); border: 1px solid rgba(255,107,53,0.12); border-radius: 30px; color: #FF6B35; text-decoration: none; font-size: 12px; font-weight: 500; transition: all 0.35s ease; gap: 6px; letter-spacing: 0.3px; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
                  @QuotexMaster
                </a>
              </div>
              <p style="margin: 12px 0 0 0; font-size: 9.5px; color: rgba(255,215,0,0.40); letter-spacing: 1.5px; text-transform: uppercase; font-weight: 600;">✦ Premium Code By QUOTEX MASTER ✦</p>
            </div>
          </div>
        </div>
        <style>
          @keyframes popupFade { from { transform: translateY(-30px) scale(0.92); opacity: 0; } to { transform: translateY(0) scale(1); opacity: 1; } }
          @keyframes bgFade { from { opacity: 0; } to { opacity: 1; } }
          @keyframes spin { to { transform: rotate(360deg); } }
          @keyframes borderRotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
          @keyframes orbFloat { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(10px,-15px) scale(1.05); } }
          @keyframes shimmerText { 0%,100% { background-position: 0% center; } 50% { background-position: 200% center; } }
          @keyframes shimmerBtn { 0%,100% { opacity: 0; } 50% { opacity: 0.15; } }
          @keyframes errorShake { 0%,100% { transform: translateX(0); } 10%,30%,50%,70%,90% { transform: translateX(-6px); } 20%,40%,60%,80% { transform: translateX(6px); } }
          #${LICENSE_INPUT_ID}::placeholder { color: rgba(255,215,0,0.30); letter-spacing: 1.5px; font-weight: 300; }
          #${LICENSE_INPUT_ID}:focus { border-color: rgba(255,215,0,0.60); background: rgba(255,215,0,0.06); box-shadow: 0 0 0 4px rgba(255,215,0,0.10), 0 4px 20px rgba(255,215,0,0.12); transform: scale(1.01); }
          #${LICENSE_INPUT_ID}:hover { border-color: rgba(255,215,0,0.40); }
          #${LICENSE_SUBMIT_ID}:hover { transform: translateY(-2px) scale(1.01); box-shadow: 0 8px 35px rgba(255,215,0,0.45); }
          #${LICENSE_SUBMIT_ID}:active { transform: translateY(0) scale(0.98); box-shadow: 0 4px 20px rgba(255,215,0,0.30); }
          #${LICENSE_SUBMIT_ID}:disabled { opacity: 0.5; cursor: not-allowed; transform: none !important; box-shadow: 0 4px 20px rgba(255,215,0,0.15); }
          .${ERROR_AREA_CLASS} { animation: errorShake 0.4s ease; }
          a[href*="t.me"]:hover { transform: translateY(-1px) scale(1.03); border-color: rgba(255,215,0,0.40); box-shadow: 0 4px 20px rgba(255,215,0,0.12); background: rgba(255,215,0,0.12); }
          @media (max-width: 480px) {
            #${LICENSE_POPUP_ID} > div { max-width: calc(100vw - 24px); border-radius: 20px; }
            #${LICENSE_POPUP_ID} > div > div:last-child { padding: 18px 18px 20px; }
            #${LICENSE_POPUP_ID} > div > div:first-child { padding: 20px 18px 16px; }
            #${LICENSE_INPUT_ID} { font-size: 13px; padding: 12px 14px; letter-spacing: 1px; }
            #${LICENSE_SUBMIT_ID} { font-size: 13px; padding: 12px 16px; }
            .watermark { bottom: 16px; right: 18px; font-size: 9px; }
            a[href*="t.me"] { font-size: 11px; padding: 6px 14px; }
          }
        </style>
      `;
      document.body.appendChild(licensePopupDiv);

      // Auto-fill cached license key
      const cachedLicense = localStorage.getItem(CACHED_LICENSE_KEY);
      if (cachedLicense) {
        document.getElementById(LICENSE_INPUT_ID).value = cachedLicense;
        const errorArea = document.querySelector(`#${LICENSE_POPUP_ID} .${ERROR_AREA_CLASS}`);
        if (errorArea) errorArea.style.display = 'none';
        document.getElementById(LICENSE_SUBMIT_ID).click();
      }
    }

    // ---- License Submit Handler ----
    function setupLicenseHandlers() {
      document.getElementById(LICENSE_SUBMIT_ID).addEventListener('click', async () => {
        const licenseValue = document.getElementById(LICENSE_INPUT_ID).value.trim().toUpperCase();

        if (!licenseValue) {
          showError(LICENSE_EMPTY_ERROR, LICENSE_POPUP_ID);
          return;
        }

        const licensePattern = /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
        if (!licensePattern.test(licenseValue)) {
          showError(LICENSE_FORMAT_ERROR, LICENSE_POPUP_ID);
          return;
        }

        document.getElementById(LICENSE_LOADING_CLASS).style.display = 'block';
        document.getElementById(LICENSE_SUBMIT_ID).disabled = true;

        try {
          if (!isAnonymousAuth) {
            const authResult = await signInAnonymously();
            if (!authResult) {
              document.getElementById(LICENSE_LOADING_CLASS).style.display = 'none';
              document.getElementById(LICENSE_SUBMIT_ID).disabled = false;
              return;
            }
          }

          const result = await verifyLicense(licenseValue);

          if (result.success) {
            licenseVerified = true;
            licenseKey = licenseValue;
            localStorage.setItem(CACHED_LICENSE_KEY, licenseValue);

            const errorArea = document.querySelector(`#${LICENSE_POPUP_ID} .${ERROR_AREA_CLASS}`);
            if (errorArea) errorArea.style.display = 'none';

            document.getElementById(LICENSE_POPUP_ID).remove();
            onLicenseVerified();
            setTimeout(showBalancePopup, 3500);
          } else {
            if (result.error === DEVICE_MISMATCH_ERROR) {
              showError(DEVICE_MISMATCH_MSG, LICENSE_POPUP_ID);
            } else {
              showError(LICENSE_VERIFY_ERROR_MSG, LICENSE_POPUP_ID);
            }
            document.getElementById(LICENSE_LOADING_CLASS).style.display = 'none';
            document.getElementById(LICENSE_SUBMIT_ID).disabled = false;
          }
        } catch (error) {
          showError(LICENSE_ERROR_MSG, LICENSE_POPUP_ID);
          document.getElementById(LICENSE_LOADING_CLASS).style.display = 'none';
          document.getElementById(LICENSE_SUBMIT_ID).disabled = false;
        }
      });

      document.getElementById(LICENSE_INPUT_ID).addEventListener('keypress', (e) => {
        if (e.key === 'Enter') document.getElementById(LICENSE_SUBMIT_ID).click();
      });

      document.getElementById(LICENSE_INPUT_ID).addEventListener('input', () => {
        const errorArea = document.querySelector(`#${LICENSE_POPUP_ID} .${ERROR_AREA_CLASS}`);
        if (errorArea) errorArea.style.display = 'none';
      });
    }

    // ---- No-op callback when license is verified ----
    function onLicenseVerified() {}

    // ============================================================
    // Balance Popup
    // ============================================================
    function showBalancePopup() {
      const balancePopupDiv = document.createElement('div');
      balancePopupDiv.innerHTML = `
        <div id="${BALANCE_POPUP_ID}" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(8,8,18,0.92); display: flex; align-items: center; justify-content: center; z-index: 999999; font-family: 'Segoe UI', 'Poppins', Arial, sans-serif; animation: bgFade 0.5s ease; padding: 16px; backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%);">
          <div class="watermark" style="position: absolute; bottom: 24px; right: 28px; color: rgba(255,107,53,0.15); font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; z-index: 2;">✦ QuotexMaster</div>
          <div style="background: linear-gradient(145deg, rgba(18,18,32,0.97), rgba(10,10,20,0.99)); padding: 0; border-radius: 28px; backdrop-filter: blur(40px) saturate(200%); -webkit-backdrop-filter: blur(40px) saturate(200%); border: 1px solid rgba(255,107,53,0.25); text-align: center; max-width: 420px; width: 100%; animation: popupFade 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); color: white; box-shadow: 0 30px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,107,53,0.08) inset, 0 0 60px rgba(255,107,53,0.06); overflow: hidden; position: relative; z-index: 3;">
            <div style="position: absolute; inset: -2px; border-radius: 30px; padding: 2px; background: conic-gradient(from 0deg, rgba(255,107,53,0.3), rgba(204,51,0,0.3), rgba(255,107,53,0.3), rgba(204,51,0,0.3), rgba(255,107,53,0.3)); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; animation: borderRotate 6s linear infinite; z-index: 0;"></div>
            <div style="position: absolute; top: -80px; right: -80px; width: 240px; height: 240px; background: radial-gradient(circle, rgba(255,107,53,0.10), transparent 70%); border-radius: 50%; pointer-events: none; z-index: 0; animation: orbFloat 8s ease-in-out infinite;"></div>
            <div style="position: absolute; bottom: -100px; left: -100px; width: 280px; height: 280px; background: radial-gradient(circle, rgba(204,51,0,0.08), transparent 70%); border-radius: 50%; pointer-events: none; z-index: 0; animation: orbFloat 10s ease-in-out infinite reverse;"></div>
            <div style="position: relative; padding: 28px 28px 20px; background: linear-gradient(135deg, rgba(255,107,53,0.08), rgba(204,51,0,0.04)); border-bottom: 1px solid rgba(255,107,53,0.10); z-index: 1;">
              <div style="display: flex; align-items: center; justify-content: center; gap: 16px;">
                <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #1a1a2e, #2d2d44); border-radius: 16px; display: flex; align-items: center; justify-content: center; border: 1.5px solid rgba(255,107,53,0.35); box-shadow: 0 8px 30px rgba(255,107,53,0.20), 0 0 0 1px rgba(255,107,53,0.05) inset; flex-shrink: 0; overflow: hidden;">
                  <div style="width: 42px; height: 42px; background: url('https://www.image2url.com/r2/default/images/1783060621579-373ada1f-269c-44bc-89d7-ca7e05c39360.png') center/cover; border-radius: 10px;"></div>
                </div>
                <div style="text-align: left;">
                  <h1 style="margin: 0; font-size: 20px; font-weight: 700; background: linear-gradient(135deg, #FF6B35, #CC3300, #FF6B35); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: -0.3px; animation: shimmerText 3s ease-in-out infinite; line-height: 1.2;">Quotex Master</h1>
                  <p style="margin: 2px 0 0 0; font-size: 10px; color: rgba(255,107,53,0.60); font-weight: 500; text-transform: uppercase; letter-spacing: 2.5px; -webkit-text-fill-color: rgba(255,107,53,0.60);">✦ Premium Console Code ✦</p>
                </div>
              </div>
              <div style="position: relative; margin-top: 16px; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,53,0.20), transparent);"></div>
            </div>
            <div style="position: relative; padding: 24px 28px 26px; z-index: 1;">
              <div style="margin-bottom: 16px;">
                <label style="display: block; margin-bottom: 6px; color: rgba(255,255,255,0.9); font-weight: 500; text-align: left; font-size: 13px;">Starting Balance</label>
                <input id="${BALANCE_INPUT_ID}" type="number" placeholder="Here Your Starting Balance" style="width: 100%; padding: 14px 18px; border: 1.5px solid rgba(255,107,53,0.20); background: rgba(255,255,255,0.03); border-radius: 14px; font-size: 15px; color: #ffffff; text-align: center; outline: none; transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); box-sizing: border-box; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); box-shadow: 0 2px 12px rgba(0,0,0,0.20);">
              </div>
              <div style="margin-bottom: 16px;">
                <label style="display: block; margin-bottom: 6px; color: rgba(255,255,255,0.9); font-weight: 500; text-align: left; font-size: 13px;">Display Name</label>
                <input id="${NAME_INPUT_ID}" type="text" placeholder="Your Leaderboard Name" value="${APP_NAME}" style="width: 100%; padding: 14px 18px; border: 1.5px solid rgba(255,107,53,0.20); background: rgba(255,255,255,0.03); border-radius: 14px; font-size: 15px; color: #ffffff; text-align: center; outline: none; transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); box-sizing: border-box; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); box-shadow: 0 2px 12px rgba(0,0,0,0.20);">
              </div>
              <div style="margin-bottom: 16px;">
                <label style="display: block; margin-bottom: 6px; color: rgba(255,255,255,0.9); font-weight: 500; text-align: left; font-size: 13px;">Country Flag</label>
                <select id="${FLAG_SELECT_ID}" style="width: 100%; padding: 14px 18px; border: 1.5px solid rgba(255,107,53,0.20); background: rgba(20,25,35,0.9); border-radius: 14px; font-size: 15px; color: #ffffff; outline: none; transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); box-sizing: border-box; cursor: pointer; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);">
                  <option value="flag-in">India</option>
                  <option value="flag-pk">Pakistan</option>
                  <option value="flag-bd">Bangladesh</option>
                  <option value="flag-np">Nepal</option>
                  <option value="flag-br">Brazil</option>
                  <option value="flag-id">Indonesia</option>
                  <option value="flag-ru">Russia</option>
                  <option value="flag-de">Germany</option>
                  <option value="flag-jp">Japan</option>
                  <option value="flag-us">United States</option>
                  <option value="flag-gb">United Kingdom</option>
                  <option value="flag-lk">Sri Lanka</option>
                  <option value="flag-ao">Angola</option>
                </select>
              </div>
              <div style="margin-bottom: 16px;">
                <label style="display: block; margin-bottom: 6px; color: rgba(255,255,255,0.9); font-weight: 500; text-align: left; font-size: 13px;">Green Line Width: <span id="${GREENLINE_VALUE_ID}" style="color: #FF6B35;">50%</span></label>
                <div style="display: flex; align-items: center; gap: 10px;">
                  <input id="${GREENLINE_SLIDER_ID}" type="range" min="0" max="100" value="50" style="flex: 1; height: 4px; border-radius: 4px; background: linear-gradient(to right, #FF6B35 0%, #FF6B35 50%, rgba(255,107,53,0.2) 50%, rgba(255,107,53,0.2) 100%); outline: none; -webkit-appearance: none; appearance: none;">
                  <span style="font-size: 12px; color: rgba(255,255,255,0.6); min-width: 35px; text-align: right;">0-100</span>
                </div>
              </div>
              <div style="margin-bottom: 18px;">
                <label style="display: block; margin-bottom: 6px; color: rgba(255,255,255,0.9); font-weight: 500; text-align: left; font-size: 13px;">🖼️ Avatar URL (Optional)</label>
                <input id="${AVATAR_INPUT_ID}" type="url" placeholder="https://image2url.com/image.png" style="width: 100%; padding: 14px 18px; border: 1.5px solid rgba(255,107,53,0.20); background: rgba(255,255,255,0.03); border-radius: 14px; font-size: 15px; color: #ffffff; text-align: center; outline: none; transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); box-sizing: border-box; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); box-shadow: 0 2px 12px rgba(0,0,0,0.20);">
              </div>
              <div class="${ERROR_AREA_CLASS}" style="display: none; margin-bottom: 16px; padding: 10px 16px; background: rgba(239,68,68,0.08); color: #fca5a5; border-radius: 12px; font-size: 12px; text-align: center; border: 1px solid rgba(239,68,68,0.15); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); font-weight: 500;"></div>
              <button id="${BALANCE_SUBMIT_ID}" style="background: linear-gradient(135deg, #FF6B35, #CC3300, #FF6B35); background-size: 200% auto; color: #0a0a12; padding: 14px 20px; border: none; border-radius: 14px; cursor: pointer; font-size: 14px; font-weight: 700; width: 100%; box-shadow: 0 6px 28px rgba(255,107,53,0.30); transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); margin-bottom: 14px; letter-spacing: 1px; text-transform: uppercase;">🚀 Start Trading</button>
              <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,107,53,0.10);">
                <div style="display: flex; gap: 12px; justify-content: center; margin-bottom: 8px;">
                  <a href="https://t.me/QuotexMaster_Pro" target="_blank" style="display: flex; align-items: center; padding: 8px 18px; background: rgba(255,107,53,0.06); border: 1px solid rgba(255,107,53,0.12); border-radius: 30px; color: #FF6B35; text-decoration: none; font-size: 12px; font-weight: 500; transition: all 0.35s ease; gap: 6px; letter-spacing: 0.3px; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
                    @QuotexMaster
                  </a>
                </div>
                <p style="margin: 0; font-size: 9.5px; color: rgba(255,215,0,0.40); letter-spacing: 1.5px; text-transform: uppercase; font-weight: 600;">✦ Premium Console Code By QUOTEX MASTER ✦</p>
              </div>
            </div>
          </div>
        </div>
        <style>
          #${BALANCE_INPUT_ID}:focus, #${NAME_INPUT_ID}:focus, #${AVATAR_INPUT_ID}:focus { border-color: rgba(255,215,0,0.60); background: rgba(255,215,0,0.06); box-shadow: 0 0 0 4px rgba(255,215,0,0.10), 0 4px 20px rgba(255,215,0,0.12); transform: scale(1.01); }
          #${FLAG_SELECT_ID}:focus { border-color: rgba(255,215,0,0.60); background: rgba(20,25,35,0.95); box-shadow: 0 0 0 4px rgba(255,215,0,0.10), 0 4px 20px rgba(255,215,0,0.12); transform: scale(1.01); }
          #${FLAG_SELECT_ID} option { background: rgba(20,25,35,0.95); color: white; padding: 6px; }
          #${BALANCE_SUBMIT_ID}:hover { transform: translateY(-2px) scale(1.01); box-shadow: 0 8px 35px rgba(255,215,0,0.45); }
          #${BALANCE_SUBMIT_ID}:active { transform: translateY(0) scale(0.98); box-shadow: 0 4px 20px rgba(255,215,0,0.30); }
          #${GREENLINE_SLIDER_ID}::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 16px; height: 16px; border-radius: 50%; background: linear-gradient(135deg, #FFD700, #B8860B); cursor: pointer; border: 2px solid white; box-shadow: 0 2px 8px rgba(255,215,0,0.5); transition: all 0.2s ease; }
          #${GREENLINE_SLIDER_ID}::-webkit-slider-thumb:hover { transform: scale(1.2); box-shadow: 0 4px 12px rgba(255,215,0,0.7); }
          #${GREENLINE_SLIDER_ID}::-moz-range-thumb { width: 16px; height: 16px; border-radius: 50%; background: linear-gradient(135deg, #FFD700, #B8860B); cursor: pointer; border: 2px solid white; box-shadow: 0 2px 8px rgba(255,215,0,0.5); transition: all 0.2s ease; }
          #${GREENLINE_SLIDER_ID}::-moz-range-thumb:hover { transform: scale(1.2); box-shadow: 0 4px 12px rgba(255,215,0,0.7); }
          @media (max-width: 480px) { #${BALANCE_POPUP_ID} { padding: 10px; } #${BALANCE_POPUP_ID} > div { max-width: calc(100vw - 24px); border-radius: 20px; } #${BALANCE_POPUP_ID} input, #${BALANCE_POPUP_ID} select { font-size: 14px; padding: 12px 14px; } #${BALANCE_POPUP_ID} button { font-size: 14px; padding: 12px 16px; } }
        </style>
      `;
      document.body.appendChild(balancePopupDiv);

      // Populate saved settings
      const savedSettings = loadModSettings();
      document.getElementById(NAME_INPUT_ID).value = savedSettings.customName;
      document.getElementById(FLAG_SELECT_ID).value = savedSettings.customFlagCode;
      if (savedSettings.avatarUrl) {
        document.getElementById(AVATAR_INPUT_ID).value = savedSettings.avatarUrl;
      }

      // Green line slider
      const savedGreenWidth = localStorage.getItem(GREENLINE_WIDTH_KEY);
      const slider = document.getElementById(GREENLINE_SLIDER_ID);
      const sliderValue = document.getElementById(GREENLINE_VALUE_ID);

      if (savedGreenWidth !== null) {
        slider.value = savedGreenWidth;
        sliderValue.textContent = savedGreenWidth + '%';
        updateGreenLineSliderTrack(slider, savedGreenWidth);
      }

      function updateGreenLineSliderTrack(sliderEl, value) {
        sliderEl.style.background = `linear-gradient(to right, #FF6B35 0%, #FF6B35 ${value}%, rgba(255,107,53, 0.2) ${value}%, rgba(255,107,53, 0.2) 100%)`;
      }

      slider.addEventListener('input', (e) => {
        const value = e.target.value;
        sliderValue.textContent = value + '%';
        updateGreenLineSliderTrack(slider, value);
        if (typeof window.updateGreenLineWidth === 'function') {
          window.updateGreenLineWidth(parseFloat(value));
        }
      });

      // Clear error on input
      const clearError = () => {
        const err = document.querySelector(`#${BALANCE_POPUP_ID} .${ERROR_AREA_CLASS}`);
        if (err) err.style.display = 'none';
      };

      // Balance submit handler
      document.getElementById(BALANCE_SUBMIT_ID).addEventListener('click', () => {
        const balance = parseFloat(document.getElementById(BALANCE_INPUT_ID).value);
        const name = document.getElementById(NAME_INPUT_ID).value.trim() || APP_NAME;
        const flagCode = document.getElementById(FLAG_SELECT_ID).value;
        const avatarUrl = document.getElementById(AVATAR_INPUT_ID).value.trim();
        const greenLineWidth = parseFloat(document.getElementById(GREENLINE_SLIDER_ID).value);

        if (!isNaN(balance)) {
          startingBalance = balance;

          saveModSettings({
            customName: name,
            customFlagCode: flagCode,
            avatarUrl: avatarUrl,
          });

          updateNameFlagInDOM(name, flagCode);

          if (typeof window.LeaderboardHack !== 'undefined' && window.LeaderboardHack.updateSettings) {
            window.LeaderboardHack.updateSettings(name, flagCode, avatarUrl);
            console.log('Leaderboard updated with new name/flag:', name, flagCode);
          }

          if (avatarUrl) localStorage.setItem(CUSTOM_AVATAR_URL_KEY, avatarUrl);
          localStorage.setItem(GREENLINE_WIDTH_KEY, greenLineWidth.toString());

          if (typeof window.updateGreenLineWidth === 'function') {
            window.updateGreenLineWidth(greenLineWidth);
          }

          const err = document.querySelector(`#${BALANCE_POPUP_ID} .${ERROR_AREA_CLASS}`);
          if (err) err.style.display = 'none';

          document.getElementById(BALANCE_POPUP_ID).remove();
          showToast(STARTING_MSG);
          startPNLTracking();
          initMenuAccountDisplay();
        } else {
          showError(BALANCE_INVALID_ERROR, BALANCE_POPUP_ID);
        }
      });

      // Enter key handlers
      document.getElementById(BALANCE_INPUT_ID).addEventListener('keypress', (e) => {
        if (e.key === 'Enter') document.getElementById(BALANCE_SUBMIT_ID).click();
      });
      document.getElementById(AVATAR_INPUT_ID).addEventListener('keypress', (e) => {
        if (e.key === 'Enter') document.getElementById(BALANCE_SUBMIT_ID).click();
      });

      // Clear errors on input
      document.getElementById(BALANCE_INPUT_ID).addEventListener('input', clearError);
      document.getElementById(NAME_INPUT_ID).addEventListener('input', clearError);
      document.getElementById(AVATAR_INPUT_ID).addEventListener('input', clearError);
      document.getElementById(FLAG_SELECT_ID).addEventListener('change', clearError);
    }

    // ============================================================
    // PNL (Profit & Loss) Tracker
    // ============================================================
    function getCurrentBalance() {
      for (const selector of BALANCE_SELECTORS) {
        const el = document.querySelector(selector);
        if (el) {
          const value = parseFloat(el.textContent.replace(/[^\d.-]/g, ''));
          if (!isNaN(value)) return value;
        }
      }
      return null;
    }

    function updatePNLDisplay(currentBalance) {
      if (!licenseVerified || startingBalance === null) return;

      // Find money element
      let moneyEl = null;
      for (const selector of MONEY_SELECTORS) {
        moneyEl = document.querySelector(selector);
        if (moneyEl) break;
      }
      if (!moneyEl) return;

      const pnl = currentBalance - startingBalance;
      const isPositive = pnl >= 0;
      const formattedPnl = Math.abs(pnl).toLocaleString('en-IN', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      const pnlText = isPositive ? '$' + formattedPnl : '-' + formattedPnl + '$';

      moneyEl.textContent = pnlText;

      // Update color classes
      const hasMoneyClass = moneyEl.classList.contains('ord28') ||
        moneyEl.classList.contains('BwWCZ') ||
        moneyEl.classList.contains('---react-features-Sidepanel-LeaderBoard-Position-styles-module__money--BwWCZ');

      if (hasMoneyClass) {
        moneyEl.classList.remove('o8xRM', 'LD4pW',
          '---react-features-Sidepanel-LeaderBoard-Position-styles-module__green--LD4pW',
          '---react-features-Sidepanel-LeaderBoard-Position-styles-module__red--LD4pW');

        if (moneyEl.classList.contains('ord28')) {
          moneyEl.classList.add('o8xRM');
        } else if (moneyEl.classList.contains('BwWCZ')) {
          moneyEl.classList.add('LD4pW');
        } else if (isPositive) {
          moneyEl.classList.add('---react-features-Sidepanel-LeaderBoard-Position-styles-module__green--LD4pW');
        } else {
          moneyEl.classList.add('---react-features-Sidepanel-LeaderBoard-Position-styles-module__red--LD4pW');
        }
      } else {
        moneyEl.classList.remove('--green', '--red');
        moneyEl.classList.add(isPositive ? '--green' : '--red');
      }

      // Force color
      if (!isPositive) {
        moneyEl.style.setProperty('color', '#ff4757', 'important');
      } else {
        moneyEl.style.setProperty('color', '#0faf59', 'important');
      }

      // Inject PNL color styles if not already present
      if (!document.getElementById(PNL_COLOR_CLASS)) {
        const style = document.createElement('style');
        style.id = PNL_COLOR_CLASS;
        style.textContent = PNL_COLOR_CSS;
        document.head.appendChild(style);
      }
    }

    function startPNLTracking() {
      setInterval(() => {
        if (!licenseVerified) return;
        const balance = getCurrentBalance();
        if (startingBalance !== null && balance !== null) {
          updatePNLDisplay(balance);
        }
      }, 1000);
    }

    // ============================================================
    // Name/Flag Settings Persistence
    // ============================================================
    let customName = APP_NAME;
    let customFlagCode = FLAG_CLASS;

    function loadModSettings() {
      try {
        const raw = localStorage.getItem(CUSTOM_MOD_SETTINGS_KEY);
        if (raw) {
          const settings = JSON.parse(raw);
          customName = settings.customName || APP_NAME;
          customFlagCode = settings.customFlagCode || FLAG_CLASS;
          if (!settings.avatarUrl) {
            const legacyAvatar = localStorage.getItem(CUSTOM_AVATAR_URL_KEY);
            if (legacyAvatar) settings.avatarUrl = legacyAvatar;
          }
          return settings;
        }
      } catch {}

      const legacyAvatar = localStorage.getItem(CUSTOM_AVATAR_URL_KEY);
      return {
        customName: customName,
        customFlagCode: customFlagCode,
        avatarUrl: legacyAvatar || null,
      };
    }

    function saveModSettings(settings) {
      localStorage.setItem(CUSTOM_MOD_SETTINGS_KEY, JSON.stringify(settings));
      customName = settings.customName || customName;
      customFlagCode = settings.customFlagCode || customFlagCode;
    }

    // ---- Update name/flag in the leaderboard DOM ----
    function updateNameFlagInDOM(name, flagCode) {
      try {
        let nameFlagContainer = document.querySelector('.d6ijp');
        if (!nameFlagContainer) {
          for (const selector of NAME_SELECTORS) {
            nameFlagContainer = document.querySelector(selector);
            if (nameFlagContainer) break;
          }
        }
        if (!nameFlagContainer) return;

        const svgEl = nameFlagContainer.querySelector('svg');
        const nameEl = nameFlagContainer.querySelector('p');
        if (!svgEl) return;

        const currentClass = svgEl.getAttribute('class') || '';
        const currentName = nameEl ? nameEl.textContent.trim() : '';

        // Skip if already set
        if (nameFlagContainer.dataset.customized === 'true' &&
            currentClass === flagCode && currentName === name) return;

        // Update flag icon
        svgEl.setAttribute('class', flagCode);
        const flagLabel = flagCode.replace('flag-', '').toUpperCase();
        svgEl.setAttribute('aria-label', 'Flag ' + flagLabel);

        const useEl = svgEl.querySelector('use');
        if (useEl) {
          const flagHref = '/profile/images/flags.svg#' + flagCode;
          useEl.setAttribute('href', flagHref);
          useEl.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', flagHref);
        }

        // Update name text
        if (nameEl) {
          nameEl.textContent = name;
        } else {
          const newP = document.createElement('p');
          newP.textContent = name;
          nameFlagContainer.appendChild(newP);
        }

        nameFlagContainer.dataset.customized = 'true';
        console.log('Name/Flag updated in .d6ijp:', name, flagCode);
      } catch (error) {
        console.error('NameFlag error:', error);
      }
    }

    // ---- Mutation observer for name/flag updates ----
    function observeNameFlagUpdates() {
      const settings = loadModSettings();
      updateNameFlagInDOM(settings.customName, settings.customFlagCode);

      let nameFlagDebounce = null;
      const observer = new MutationObserver(() => {
        if (nameFlagDebounce) clearTimeout(nameFlagDebounce);
        nameFlagDebounce = setTimeout(() => {
          updateNameFlagInDOM(customName, customFlagCode);
        }, 500);
      });
      observer.observe(document.body, { childList: true, subtree: true });

      setInterval(() => {
        updateNameFlagInDOM(customName, customFlagCode);
      }, 3000);
    }

    // Global API for updating name/flag
    window.updateNameFlag = function (name, flagCode) {
      customName = name;
      customFlagCode = flagCode;
      saveModSettings({ customName: name, customFlagCode: flagCode });

      const nameFlagEl = document.querySelector('.d6ijp');
      if (nameFlagEl) nameFlagEl.dataset.customized = 'false';

      updateNameFlagInDOM(name, flagCode);

      if (typeof window.LeaderboardHack !== 'undefined' && window.LeaderboardHack.updateSettings) {
        window.LeaderboardHack.updateSettings(name, flagCode, null);
        console.log('Leaderboard updated via updateNameFlag:', name, flagCode);
      }
    };

    // ============================================================
    // Menu Account Display (Live Account selector)
    // ============================================================
    function initMenuAccountDisplay() {
      'use strict';

      function shouldRun() {
        if (window.extensionDisabled === true) return false;
        if (document.getElementById(LICENSE_OVERLAY_ID)) return false;
        return true;
      }

      if (!shouldRun()) return;

      function formatCurrency(amount) {
        const num = parseFloat(amount);
        if (isNaN(num)) return '$0.00';
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(num);
      }

      function updateLevelDisplay(container, balance) {
        // V2 level selectors
        const levelContainer = container.querySelector('.usermenu__level');
        if (levelContainer) {
          const levelName = levelContainer.querySelector('.usermenu__level-name:not(.hidden)');
          const levelProfit = levelContainer.querySelector('.usermenu__level-profit:not(.hidden)');
          const levelIcons = levelContainer.querySelector('svg.icon-profile-level-standart, svg.icon-profile-level-pro, svg.icon-profile-level-vip');
          const iconUse = levelIcons?.querySelector('use');

          if (levelName && levelProfit && levelIcons && iconUse) {
            const baseUrl = 'https://' + window.location.hostname + '/profile/images/spritemap.svg#';

            if (balance >= 15000) {
              levelName.textContent = 'vip level:';
              levelProfit.textContent = '+4% profit';
              levelIcons.setAttribute('class', 'icon-profile-level-vip');
              iconUse.setAttribute('xlink:href', baseUrl + 'icon-profile-level-vip');
            } else if (balance >= 5000) {
              levelName.textContent = 'pro level:';
              levelProfit.textContent = '+2% profit';
              levelIcons.setAttribute('class', 'icon-profile-level-pro');
              iconUse.setAttribute('xlink:href', baseUrl + 'icon-profile-level-pro');
            } else {
              levelName.textContent = 'standard:';
              levelProfit.textContent = '+0% profit';
              levelIcons.setAttribute('class', 'icon-profile-level-standart');
              iconUse.setAttribute('xlink:href', baseUrl + 'icon-profile-level-standart');
            }
          }
          return;
        }

        // V1 level selectors (old Quotex layout)
        const v1LevelContainer = container.querySelector('.OCZRh');
        if (v1LevelContainer) {
          const v1LevelName = v1LevelContainer.querySelector('.qjGlZ');
          const v1LevelProfit = v1LevelContainer.querySelector('.VgpLl');
          const v1LevelIcon = v1LevelContainer.querySelector('.nKm6H svg');
          const v1IconUse = v1LevelIcon?.querySelector('use');

          if (v1LevelName && v1LevelProfit && v1LevelIcon && v1IconUse) {
            const baseUrl = 'https://' + window.location.hostname + '/profile/images/spritemap.svg#';

            if (balance >= 15000) {
              v1LevelName.textContent = 'vip level:';
              v1LevelProfit.textContent = '+4% profit';
              v1LevelIcon.setAttribute('class', 'icon-profile-level-vip');
              v1IconUse.setAttribute('xlink:href', baseUrl + 'icon-profile-level-vip');
            } else if (balance >= 5000) {
              v1LevelName.textContent = 'pro level:';
              v1LevelProfit.textContent = '+2% profit';
              v1LevelIcon.setAttribute('class', 'icon-profile-level-pro');
              v1IconUse.setAttribute('xlink:href', baseUrl + 'icon-profile-level-pro');
            } else {
              v1LevelName.textContent = 'standard:';
              v1LevelProfit.textContent = '+0% profit';
              v1LevelIcon.setAttribute('class', 'icon-profile-level-standart');
              v1IconUse.setAttribute('xlink:href', baseUrl + 'icon-profile-level-standart');
            }
          }
        }
      }

      function processMenuV1(menuContainer) {
        const menuItems = menuContainer.querySelectorAll('li.RDtBn');
        const demoItem = Array.from(menuItems).find(
          (item) => item.querySelector('a.yBslY')?.textContent.trim() === 'Demo Account'
        );
        const liveItem = Array.from(menuItems).find(
          (item) => item.querySelector('a.yBslY')?.textContent.trim() === 'Live Account'
        );

        // Remove active from all
        menuItems.forEach((item) => {
          item.classList.remove('Qx5RW');
          item.querySelector('a.yBslY')?.classList.remove('active');
        });

        // Set Live as active
        if (liveItem) {
          liveItem.classList.add('Qx5RW');
          liveItem.querySelector('a.yBslY')?.classList.add('active');
        }

        // Read demo balance
        let balance = 0;
        if (demoItem) {
          const input = demoItem.querySelector('input.input-control__input');
          if (input && !isNaN(parseFloat(input.value))) {
            balance = parseFloat(input.value);
          } else {
            const balanceText = demoItem.querySelector('b.YnoT0')?.textContent;
            if (balanceText) {
              const cleaned = balanceText.replace(/[$,]/g, '');
              if (!isNaN(parseFloat(cleaned))) balance = parseFloat(cleaned);
            }
          }
          // Demo row: show constant $10,000.00
          const demoBalanceEl = demoItem.querySelector('b.YnoT0');
          if (demoBalanceEl) demoBalanceEl.textContent = formatCurrency(10000);
        }

        // Live row: show actual balance (read from demo)
        if (liveItem) {
          const liveBalanceEl = liveItem.querySelector('b.YnoT0');
          if (liveBalanceEl) liveBalanceEl.textContent = formatCurrency(balance);
        }

        // Update level display
        updateLevelDisplay(menuContainer, balance);
      }

      function processMenuV2(menuContainer) {
        const radioItems = menuContainer.querySelectorAll('li.usermenu__select-item--radio');
        const demoItem = Array.from(radioItems).find((item) =>
          item.querySelector('a.usermenu__select-name')?.textContent.trim().includes('Demo Account')
        );
        const liveItem = Array.from(radioItems).find((item) =>
          item.querySelector('a.usermenu__select-name')?.textContent.trim().includes('Live Account')
        );

        radioItems.forEach((item) => item.classList.remove('active'));
        if (liveItem) liveItem.classList.add('active');

        // Read actual demo balance
        let balance = 0;
        if (demoItem) {
          const balanceBlock = demoItem.querySelector('div.usermenu__select-balance__block b.usermenu__select-balance.user-balance.js-balance-visible-usermenu:not(.hidden)');
          if (balanceBlock) {
            const balanceText = balanceBlock.textContent.replace(/[$,]/g, '').trim();
            if (!isNaN(parseFloat(balanceText))) balance = parseFloat(balanceText);
          }
        }

        // Demo row: show constant $10,000.00
        if (demoItem) {
          const demoBalance = demoItem.querySelector('div.usermenu__select-balance__block b.usermenu__select-balance.user-balance.js-balance-visible-usermenu:not(.hidden)');
          if (demoBalance) demoBalance.textContent = formatCurrency(10000);
        }

        // Live row: show actual balance (read from demo)
        if (liveItem) {
          const liveBalance = liveItem.querySelector('b.usermenu__select-balance.js-balance-visible-usermenu:not(.hidden)');
          if (liveBalance) liveBalance.textContent = formatCurrency(balance);
        }

        updateLevelDisplay(menuContainer, balance);
      }

      function processMenu(container) {
        if (container.querySelector('li.RDtBn')) {
          processMenuV1(container);
          return;
        }
        if (container.querySelector('li.usermenu__select-item--radio')) {
          processMenuV2(container);
          return;
        }
      }

      // Observe for menu elements appearing
      const menuObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          for (const node of mutation.addedNodes) {
            if (node.nodeType === Node.ELEMENT_NODE && node.querySelector) {
              if (node.querySelector('li.RDtBn') || node.querySelector('li.usermenu__select-item--radio')) {
                processMenu(node);
              }
            }
          }
        }
      });
      menuObserver.observe(document.body, { childList: true, subtree: true });

      // Process existing menus
      const existingMenuUl = document.querySelector('ul.IkdIG');
      const existingUserMenu = document.querySelector('ul.usermenu__select');
      if (existingMenuUl) processMenu(existingMenuUl);
      if (existingUserMenu) processMenu(existingUserMenu);

      // ---- Update top-level header: replace "Demo" with "Live" in usermenu area ----
      // Selectors from original obfuscated code
      const USERMENU_SELECTORS = ".QE4Zb, .Xlyoi, .rymiA, [class*='usermenu']";
      const USERMENU_NAME_SELECTORS = ".v2KPX, .SfrTV, [class*='infoName']";
      const USERMENU_BALANCE_SELECTORS = ".Zt1hG, .pVBHU, [class*='infoBalance']";
      const USERMENU_ICON_SELECTORS = ".h5aTJ use, .ePf8T use, [class*='infoLevels'] use";
      const LEVEL_BASE_URL = 'https://' + window.location.hostname + '/profile/images/spritemap.svg#';

      function getUsermenuLiveText() {
        return window.innerWidth <= 768 ? 'Live' : 'Live Account';
      }

      function getLevelIconName(balance) {
        if (balance >= 15000) return 'icon-profile-level-vip';
        if (balance >= 5000) return 'icon-profile-level-pro';
        return 'icon-profile-level-standart';
      }

      function processUsermenuForLive(usermenuEl) {
        try {
          const nameEls = usermenuEl.querySelectorAll(USERMENU_NAME_SELECTORS);
          const balanceEl = usermenuEl.querySelector(USERMENU_BALANCE_SELECTORS);
          const iconUseEl = usermenuEl.querySelector(USERMENU_ICON_SELECTORS);

          if (!balanceEl || !iconUseEl) return;

          // Replace all name elements with "Live" text and green color
          const liveText = getUsermenuLiveText();
          for (const nameEl of nameEls) {
            // Skip if already set to avoid triggering mutation loops
            if (nameEl.textContent === liveText && nameEl.style.color === 'rgb(15, 175, 89)') continue;
            nameEl.textContent = liveText;
            nameEl.style.color = '#0faf59';
          }

          // Parse balance and update level icon
          const balanceText = balanceEl.textContent || '';
          const balanceValue = parseFloat(balanceText.replace(/[^\d.]/g, '').replace(/,/g, '')) || 0;
          const levelIcon = getLevelIconName(balanceValue);
          const iconHref = LEVEL_BASE_URL + levelIcon;

          if (iconUseEl.getAttribute('xlink:href') !== iconHref) {
            iconUseEl.setAttribute('xlink:href', iconHref);
          }
        } catch (error) {
          console.error('Usermenu Live update error:', error);
        }
      }

      let usermenuDebounce = null;
      function updateUsermenuToLive() {
        const usermenus = document.querySelectorAll(USERMENU_SELECTORS);
        for (const um of usermenus) {
          processUsermenuForLive(um);
        }
      }

      // Run on interval only (no MutationObserver to avoid freeze loops)
      setInterval(updateUsermenuToLive, 3000);
      // Initial run after a short delay to let page render
      setTimeout(updateUsermenuToLive, 1000);
    }

    // ============================================================
    // Green Line Width & Leaderboard Money Display
    // ============================================================
    function initGreenLineAndLeaderboardMoney() {
      if (window.extensionDisabled) return;

      let lastSeenBalance = null;
      let lastSeenValue = null;
      let isStable = false;
      let lastStableValue = null;
      let sameCount = 0;
      let greenLineWidth = 50;

      // Load saved green line width
      try {
        const savedWidth = localStorage.getItem(GREENLINE_WIDTH_KEY);
        if (savedWidth !== null) {
          greenLineWidth = parseFloat(savedWidth);
          applyGreenLineWidth(greenLineWidth);
        }
      } catch {}

      function applyGreenLineWidth(width) {
        const el = document.querySelector('.uQuVa, .KBHoM, .BwWCZ');
        if (el) el.style.width = width + '%';
      }

      function updateRankDisplay(rankValue) {
        if (lastStableValue === rankValue) {
          sameCount++;
        } else {
          sameCount = 0;
          lastStableValue = rankValue;
        }

        if (sameCount >= 3 || !isStable || lastSeenValue === null) {
          if (!isStable || lastSeenValue !== rankValue) {
            lastSeenValue = rankValue;
            setLeaderboardRank(rankValue);
            lastSeenValue = rankValue;
          }
        }
      }

      function setLeaderboardRank(rank) {
        const rankEl = document.querySelector('.c_7BP, .iKtL6');
        if (rankEl) {
          rankEl.dataset.rankCustomized = 'true';
          const textNodes = [...rankEl.childNodes].filter(
            (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== ''
          );
          const rankStr = typeof rank === 'string' ? rank : rank.toString();

          if (textNodes.length > 0) {
            const currentText = textNodes[0].textContent.trim();
            if (currentText !== rankStr) {
              textNodes[0].textContent = rankStr;
            }
          } else {
            const titleEl = rankEl.querySelector('.ocuJC, .---react-features-Sidepanel-LeaderBoard-Position-styles-module__title--ocuJC');
            if (titleEl) rankEl.appendChild(document.createTextNode(rankStr));
          }
        }
        applyGreenLineWidth(greenLineWidth);
      }

      function checkLeaderboardMoney() {
        const moneyEl = document.querySelector('.ord28, .BwWCZ');
        if (!moneyEl) return;

        let value = parseFloat(moneyEl.textContent.replace(/[^\d.-]/g, ''));

        if (isNaN(value)) {
          if (isStable) updateRankDisplay('100+');
          return;
        }

        if (value > lastSeenBalance) lastSeenBalance = value;

        if (value <= 0) {
          isStable = true;
          updateRankDisplay('100+');
          return;
        }

        if (value > 0 && value < 100) {
          isStable = true;
          updateRankDisplay('100+');
          return;
        }

        // Get all money values from leaderboard
        let allValues = [...document.querySelectorAll('.ePgNa, .jJUGd, .---react-features-Sidepanel-LeaderBoard-styles-module__money--jJUGd')]
          .map((el) => +el.textContent.replace(/[^\d.-]/g, ''))
          .filter((v) => !isNaN(v));

        if (allValues.length === 0) return;

        allValues.sort((a, b) => b - a);

        let rank = allValues.findIndex((v) => value >= v) + 1;

        // Ranks 1–20: direct comparison against sorted leaderboard values
        if (rank > 0 && rank <= 20) {
          isStable = true;
          updateRankDisplay(rank);
          return;
        }

        // Ranks 21–30: tiered interpolation based on balance ranges ($1K–$15K+)
        if (value >= 1000 && value < 2000) {
          const ratio = (value - 1000) / 1000;
          rank = Math.round(21 + ratio * 3);
        } else if (value >= 2000 && value < 5000) {
          const ratio = (value - 2000) / 3000;
          rank = Math.round(24 + ratio * 3);
        } else if (value >= 5000 && value < 10000) {
          const ratio = (value - 5000) / 5000;
          rank = Math.round(27 + ratio * 1);
        } else if (value >= 10000 && value < 15000) {
          const ratio = (value - 10000) / 5000;
          rank = Math.round(28 + ratio * 1);
        } else if (value >= 15000) {
          rank = 30;
        }

        rank = Math.max(1, Math.min(30, rank));
        isStable = true;
        updateRankDisplay(rank);
      }

      function startRankObserver() {
        let rankDebounce = null;
        const observer = new MutationObserver((mutations) => {
          if (rankDebounce) clearTimeout(rankDebounce);
          rankDebounce = setTimeout(() => {
            for (const mutation of mutations) {
              if (mutation.type === 'childList' || mutation.type === 'characterData') {
                const rankEl = document.querySelector('.c_7BP, .iKtL6');
                if (rankEl && lastSeenValue !== null) {
                  const text = rankEl.textContent.replace(/[^\d]/g, '');
                  if (text !== lastSeenValue.toString() && rankEl.dataset.rankCustomized === 'true') {
                    setLeaderboardRank(lastSeenValue);
                  }
                }
              }
            }
          }, 300);
        });
        observer.observe(document.body, {
          childList: true,
          subtree: true,
          characterData: true,
        });
      }

      startRankObserver();
      setInterval(checkLeaderboardMoney, 3000);
      setInterval(() => applyGreenLineWidth(greenLineWidth), 2000);

      window.updateGreenLineWidth = function (width) {
        greenLineWidth = width;
        localStorage.setItem(GREENLINE_WIDTH_KEY, width.toString());
        applyGreenLineWidth(greenLineWidth);
      };
    }

    // ============================================================
    // Entry Points
    // ============================================================
    createLicensePopup();
    setupLicenseHandlers();
    observeNameFlagUpdates();
    initMenuAccountDisplay();
    initGreenLineAndLeaderboardMoney();
  }

  // ============================================================
  // Global Error Handler
  // ============================================================
  window.showErrorMessage = function (message, containerId = null) {
    if (containerId) {
      if (typeof showErrorMessage === 'function') {
        showErrorMessage(message, containerId);
        return;
      }
    }

    const toast = document.createElement('div');
    toast.style.cssText = "position: fixed; top: 20px; right: 20px; z-index: 999999; background: rgba(220, 53, 69, 0.95); color: white; padding: 15px 20px; border-radius: 8px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 600; font-size: 14px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);";
    toast.innerHTML = message;
    const appendToast = () => document.body.appendChild(toast);
    if (document.body) appendToast();
    else document.addEventListener('DOMContentLoaded', appendToast, { once: true });
    setTimeout(() => {
      if (toast.parentNode) toast.remove();
    }, 6000);
  };

  // ============================================================
  // Start Extension
  // ============================================================
  initExtension();

  // ============================================================
  // Tab Title Enforcer
  // ============================================================
  (function () {
    if (window.extensionDisabled) return;

    const DESIRED_TITLE = 'Live trading | Quotex';

    function enforceTitle() {
      if (document.title !== DESIRED_TITLE) {
        document.title = DESIRED_TITLE;
      }
    }

    enforceTitle();

    const titleObserver = new MutationObserver(enforceTitle);

    function observeTitle() {
      const titleEl = document.querySelector('title');
      if (titleEl) {
        titleObserver.observe(titleEl, { childList: true });
      } else if (document.head) {
        const newTitle = document.createElement('title');
        newTitle.textContent = DESIRED_TITLE;
        document.head.appendChild(newTitle);
        titleObserver.observe(newTitle, { childList: true });
      } else {
        document.addEventListener('DOMContentLoaded', observeTitle, { once: true });
      }
    }

    observeTitle();
    setInterval(enforceTitle, 1000);
    document.addEventListener('visibilitychange', enforceTitle);
  })();

  // ============================================================
  // Leaderboard Row Replacement Hack
  // ============================================================
  (function () {
    if (window.extensionDisabled) return;

    let avatarUrl = null;
    let customName = null;
    let customFlagCode = null;
    let isActive = false;
    let checkInterval = null;
    let leaderboardContainer = null;
    let nameFlagContainer = null;
    let moneyElement = null;
    let rankElement = null;
    let currentRank = null;
    let cachedOriginals = {};
    let lastCacheKey = null;
    let lastRank = null;
    let intervalId = null;

    const ROWS_SELECTOR = '.tlUK7';
    const ROW_CLASS = '.CYmPX';
    const RANK_SELECTOR = '.c_7BP';
    const NAME_FLAG_SELECTOR = '.d6ijp';
    const MONEY_SELECTOR = '.ord28';

    function parseRank(el) {
      const text = el.textContent || el.innerText || '';
      const match = text.match(/\d+/);
      return match ? parseInt(match[0], 10) : null;
    }

    function createReplacementRow(rank, name, flagCode, avatarUrl, displayAmount) {
      const row = document.createElement('div');
      row.className = 'CYmPX';

      let medalHtml = '';
      let extraClass = 'FdU8g';

      if (rank === 1) {
        medalHtml = '<img src="/profile/images/top-gold.svg" alt="top-gold">';
      } else if (rank === 2) {
        medalHtml = '<img src="/profile/images/top-silver.svg" alt="top-silver">';
      } else if (rank === 3) {
        medalHtml = '<img src="/profile/images/top-bronza.svg" alt="top-bronze">';
      } else {
        extraClass += ' _0J2mJ';
        medalHtml = '<div class="' + extraClass + '">' + rank + '</div>';
      }

      const rankDisplay = rank <= 3
        ? medalHtml + '<div class="' + extraClass + '">' + rank + '</div>'
        : medalHtml;

      let avatarHtml;
      if (avatarUrl && avatarUrl.trim()) {
        avatarHtml = '<img src="' + avatarUrl + '" alt="avatar">';
      } else {
        avatarHtml = '<svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"></use></svg>';
      }

      row.innerHTML =
        '<div class="bCjpw"></div>' +
        '<div class="spCR5">' +
          '<div class="anZcM">' + rankDisplay + '</div>' +
          '<div class="HPYiu">' +
            '<svg class="' + flagCode + '" aria-label="Flag ' + flagCode.replace('flag-', '').toUpperCase() + '">' +
              '<use href="/profile/images/flags.svg#' + flagCode + '"></use>' +
            '</svg>' +
            '<div class="QyASJ">' + avatarHtml + '</div>' +
          '</div>' +
          '<div class="hKWVz">' + name + '</div>' +
        '</div>' +
        '<div class="ePgNa iXGFm">' + displayAmount + '</div>';

      return row;
    }

    function replaceLeaderboardRow() {
      if (!leaderboardContainer || !nameFlagContainer || !moneyElement || !rankElement) return;

      const rank = parseRank(rankElement);
      if (!rank || rank < 1 || rank > 30) return;

      const rows = leaderboardContainer.querySelectorAll(ROW_CLASS);
      if (rows.length < rank) return;

      let flagCode = customFlagCode || 'flag-in';
      let displayName = customName || 'QuotexMaster';

      // Fallback to reading from DOM
      if (!customName || !customFlagCode) {
        const nameFlagEl = document.querySelector(NAME_FLAG_SELECTOR);
        if (nameFlagEl) {
          const svg = nameFlagEl.querySelector('svg');
          const p = nameFlagEl.querySelector('p');
          if (!customFlagCode && svg) flagCode = svg.getAttribute('class') || 'flag-in';
          if (!customName && p) displayName = p.textContent.trim() || 'QuotexMaster';
        }
      }

      console.log('[Leaderboard] Using name:', displayName, 'flag:', flagCode);

      // Format money display
      let amountText = moneyElement.textContent.trim();
      if (rank === 1) {
        const parsed = parseFloat(amountText.replace(/[$,]/g, ''));
        if (parsed >= 10000) amountText = '"$30,000.00"+';
      }

      const cacheKey = rank + '|' + displayName + '|' + flagCode + '|' + amountText;

      // Skip if already applied
      if (lastCacheKey === cacheKey && lastRank === rank) return;

      // Restore previously replaced row if rank changed
      if (lastRank && lastRank !== rank && cachedOriginals[lastRank]) {
        const allRows = leaderboardContainer.querySelectorAll(ROW_CLASS);
        if (allRows[lastRank - 1]) {
          leaderboardContainer.replaceChild(cachedOriginals[lastRank], allRows[lastRank - 1]);
          delete cachedOriginals[lastRank];
        }
      }

      // Cache the original row before replacing
      if (!cachedOriginals[rank]) {
        cachedOriginals[rank] = rows[rank - 1].cloneNode(true);
      }

      // Get avatar URL
      let avatar = avatarUrl;
      if (!avatar) {
        try {
          const settings = JSON.parse(localStorage.getItem(CUSTOM_MOD_SETTINGS_KEY) || '{}');
          avatar = settings.avatarUrl || localStorage.getItem(CUSTOM_AVATAR_URL_KEY);
        } catch {
          avatar = null;
        }
      }

      const newRow = createReplacementRow(rank, displayName, flagCode, avatar, amountText);

      try {
        leaderboardContainer.replaceChild(newRow, rows[rank - 1]);
        lastRank = rank;
        lastCacheKey = cacheKey;
      } catch (error) {
        console.error('[Leaderboard] Error replacing row:', error);
      }
    }

    function startLeaderboardHack() {
      if (isActive) return;

      leaderboardContainer = document.querySelector(ROWS_SELECTOR);
      nameFlagContainer = document.querySelector(NAME_FLAG_SELECTOR);
      moneyElement = document.querySelector(MONEY_SELECTOR);
      rankElement = document.querySelector(RANK_SELECTOR);

      if (!leaderboardContainer || !nameFlagContainer || !moneyElement || !rankElement) {
        setTimeout(() => {
          if (!isActive) startLeaderboardHack();
        }, 3000);
        return;
      }

      isActive = true;
      replaceLeaderboardRow();
      intervalId = setInterval(replaceLeaderboardRow, 2000);
    }

    function stopLeaderboardHack() {
      if (!isActive) return;
      isActive = false;

      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }

      // Restore all replaced rows
      if (leaderboardContainer) {
        const rows = leaderboardContainer.querySelectorAll(ROW_CLASS);
        Object.keys(cachedOriginals).forEach((key) => {
          const idx = parseInt(key, 10);
          if (rows[idx - 1] && cachedOriginals[idx]) {
            leaderboardContainer.replaceChild(cachedOriginals[idx], rows[idx - 1]);
          }
        });
      }

      cachedOriginals = {};
      lastRank = null;
      lastCacheKey = null;
    }

    function checkAndToggle() {
      const hasLeaderboard = document.querySelector(ROWS_SELECTOR) &&
        document.querySelector(NAME_FLAG_SELECTOR) &&
        document.querySelector(MONEY_SELECTOR) &&
        document.querySelector(RANK_SELECTOR);

      if (hasLeaderboard && !isActive) {
        startLeaderboardHack();
      } else if (!hasLeaderboard && isActive) {
        stopLeaderboardHack();
      }
    }

    function periodicCheck() {
      if (checkInterval) clearInterval(checkInterval);
      checkAndToggle();
      checkInterval = setInterval(checkAndToggle, 3000);
    }

    function loadSettings() {
      try {
        const settings = JSON.parse(localStorage.getItem(CUSTOM_MOD_SETTINGS_KEY) || '{}');
        customName = settings.customName;
        customFlagCode = settings.customFlagCode;
        avatarUrl = settings.avatarUrl || localStorage.getItem(CUSTOM_AVATAR_URL_KEY);
      } catch {
        avatarUrl = localStorage.getItem(CUSTOM_AVATAR_URL_KEY);
      }
    }

    loadSettings();
    periodicCheck();

    window.LeaderboardHack = {
      start: periodicCheck,
      stop: stopLeaderboardHack,
      updateSettings: (name, flagCode, avatar) => {
        customName = name;
        customFlagCode = flagCode;
        if (avatar) avatarUrl = avatar;
        if (isActive) replaceLeaderboardRow();
      },
    };
  })();
})();
