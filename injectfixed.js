((function () {
  const nullValue = null;
  const functionMap = {
      concatenate: function (arg1, arg2) {
        return arg1 + arg2;
      },
      concatenateStrings: function (val1, val2) {
        return val1 + val2;
      },
      SCRIPT_TAG: 'script',
      FIREBASE_AUTH_URL: 'https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js',
      FIREBASE_DB_URL: 'https://www.gstatic.com/firebasejs/8.10.1/firebase-database.js',
      notEqual: function (a, b) {
        return a !== b;
      },
      UNDEFINED_STRING: 'undefined',
      executeFunction: function (fn) {
        return fn();
      },
      FIREBASE_APP_URL: 'https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js',
      executeFunc: function (func) {
        return func();
      },
      runFunc: function (f) {
        return f();
      },
      callFunction: function (handler, param) {
        return handler(param);
      },
      FIREBASE_ERROR_MSG: '❌ Failed to load Firebase SDK. Please check your internet connection.',
      AUTH_ERROR_MSG: '❌ Authentication failed. Please enable Anonymous auth in Console.',
      DEVICE_FINGERPRINT_KEY: 'deviceFingerprint',
      NO_WEBGL_CLASS: 'no-webgl',
      CANVAS_TAG: 'canvas',
      WEBGL_CONTEXT: 'webgl',
      EXPERIMENTAL_WEBGL: 'experimental-webgl',
      WEBGL_DEBUG_INFO: 'WEBGL_debug_renderer_info',
      UNKNOWN_VENDOR: 'unknown-vendor',
      UNKNOWN_RENDERER: 'unknown-renderer',
      UNKNOWN_VALUE: 'unknown',
      UTC_TIMEZONE: 'UTC',
      lessThan: function (x, y) {
        return x < y;
      },
      subtract: function (num1, num2) {
        return num1 - num2;
      },
      bitShiftLeft: function (val, shift) {
        return val << shift;
      },
      bitwiseAnd: function (left, right) {
        return left & right;
      },
      callFunctionWithArg: function (callback, arg) {
        return callback(arg);
      },
      add: function (n1, n2) {
        return n1 + n2;
      },
      ERROR_AREA_SELECTOR: '.error-message-area',
      DIV_TAG: 'div',
      ERROR_AREA_CLASS: 'error-message-area',
      ERROR_AREA_STYLES:
        'margin-top: 15px; padding: 12px; background: rgba(220, 53, 69, 0.9); color: white; border-radius: 8px; font-size: 13px; text-align: center; border: 1px solid rgba(255,255,255,0.2); animation: errorShake 0.5s ease;',
      DISPLAY_BLOCK: 'block',
      createElement3Args: function (method, elem1, elem2) {
        return method(elem1, elem2);
      },
      createElement3ArgsAlt: function (func1, elem, data) {
        return func1(elem, data);
      },
      LICENSE_INPUT_ID: 'license-input',
      LICENSE_EMPTY_ERROR: '❌ Please enter a license key',
      LICENSE_POPUP_ID: 'license-popup',
      LICENSE_FORMAT_ERROR: '❌ Invalid license format. Use: QICK-1108-V56B',
      LICENSE_LOADING_CLASS: 'license-loading',
      LICENSE_SUBMIT_ID: 'license-submit',
      executeFunction2: function (operation) {
        return operation();
      },
      DISPLAY_NONE: 'none',
      CACHED_LICENSE_KEY: 'cachedLicenseKey',
      LICENSE_ERROR_SELECTOR: '#license-popup .error-message-area',
      execute: function (exec) {
        return exec();
      },
      equals: function (item, comp) {
        return item === comp;
      },
      DEVICE_MISMATCH_ERROR: 'device_mismatch',
      displayError3Args: function (errHandler, selector, msg) {
        return errHandler(selector, msg);
      },
      DEVICE_MISMATCH_MSG: '❌ License is used on another device bro',
      showError3Args: function (displayFunc, sel, error) {
        return displayFunc(sel, error);
      },
      LICENSE_VERIFY_ERROR_MSG: '❌ License verification failed',
      handleError3Args: function (errFunc, selectorStr, errorMsg) {
        return errFunc(selectorStr, errorMsg);
      },
      LICENSE_ERROR_MSG: '❌ License verification error',
      BALANCE_INPUT_ID: 'balance-input',
      NAME_INPUT_ID: 'name-input',
      APP_NAME: 'QuotexMaster',
      FLAG_SELECT_ID: 'flag-select',
      AVATAR_INPUT_ID: 'avatar-input',
      GREENLINE_SLIDER_ID: 'greenline-slider',
      Ndhng: function (listener, sel2, info) {
        return listener(sel2, info);
      },
      LEADERBOARD_UPDATE_MSG: 'Leaderboard updated with new name/flag:',
      CUSTOM_AVATAR_URL_KEY: 'customAvatarUrl',
      GREENLINE_WIDTH_KEY: 'greenLineWidth',
      strictEqual: function (obj, val) {
        return obj === val;
      },
      FUNCTION_STRING: 'function',
      BALANCE_ERROR_SELECTOR: '#balance-popup .error-message-area',
      BALANCE_POPUP_ID: 'balance-popup',
      STARTING_MSG: '🚀 Starting working Bro....',
      executeFunc3: function (fn2) {
        return fn2();
      },
      BALANCE_INVALID_ERROR: '❌ Please enter a valid balance',
      ENTER_KEY: 'Enter',
      BALANCE_SUBMIT_ID: 'balance-submit',
      GREENLINE_VALUE_ID: 'greenline-value',
      handleEventListener: function (evt, elem3, handler2) {
        return evt(elem3, handler2);
      },
      INPUT_TAG: 'input',
      CLICK_EVENT: 'click',
      KEYPRESS_EVENT: 'keypress',
      CHANGE_EVENT: 'change',
      isEqual: function (type, key) {
        return type === key;
      },
      SELECTOR_ORD28: '.ord28',
      SELECTOR_BWWCZ: '.BwWCZ',
      SELECTOR_MONEY_CLASS: '.---react-features-Sidepanel-LeaderBoard-Position-styles-module__money--BwWCZ',
      SELECTOR_HEADER_MONEY: '.position__header-money',
      SELECTOR_LEADERBOARD_MONEY: "[class*='LeaderBoard-Position'][class*='money']",
      greaterOrEqual: function (el, listener2) {
        return el >= listener2;
      },
      LOCALE_EN_IN: 'en-IN',
      CLASS_ORD28: 'ord28',
      CLASS_BWWCZ: 'BwWCZ',
      CLASS_MONEY_FULL: '---react-features-Sidepanel-LeaderBoard-Position-styles-module__money--BwWCZ',
      CLASS_O8XRM: 'o8xRM',
      CLASS_LD4PW: 'LD4pW',
      CLASS_GREEN_FULL: '---react-features-Sidepanel-LeaderBoard-Position-styles-module__green--LD4pW',
      CLASS_RED_FULL: '---react-features-Sidepanel-LeaderBoard-Position-styles-module__red--LD4pW',
      VAR_GREEN_COLOR: '--green',
      VAR_RED_COLOR: '--red',
      CSS_COLOR_PROP: 'color',
      RED_COLOR_HEX: '#ff4757',
      IMPORTANT_FLAG: 'important',
      GREEN_COLOR_HEX: '#0faf59',
      PNL_COLOR_CLASS: 'pnl-color-override',
      STYLE_ATTR: 'style',
      APP_NAME_2: 'QuotexMaster',
      FLAG_CLASS: 'flag-in',
      orOperator: function (cond1, cond2) {
        return cond1 || cond2;
      },
      SELECTOR_D6IJP: '.d6ijp',
      FALSE_STRING: 'false',
      setProperty3Args: function (prop, key2, val2) {
        return prop(key2, val2);
      },
      notStrictEqual: function (str1, str2) {
        return str1 !== str2;
      },
      LEADERBOARD_UPDATE_MSG_2: 'Leaderboard updated via updateNameFlag:',
      executeWithArg: function (select, str) {
        return select(str);
      },
      ZERO_CURRENCY: '$0.00',
      LOCALE_EN_US: 'en-US',
      CURRENCY_TYPE: 'currency',
      CURRENCY_USD: 'USD',
      SELECTOR_USER_MENU_RADIO: 'li.usermenu__select-item--radio',
      ACTIVE_CLASS: 'active',
      SELECTOR_BALANCE_BLOCK:
        'div.usermenu__select-balance__block b.usermenu__select-balance.user-balance.js-balance-visible-usermenu:not(.hidden)',
      querySelector: function (dom, query) {
        return dom(query);
      },
      SELECTOR_BALANCE_ALT: 'b.usermenu__select-balance.js-balance-visible-usermenu:not(.hidden)',
      setStyle3Args: function (setAttr, attr, attrVal) {
        return setAttr(attr, attrVal);
      },
      SELECTOR_MENU_ITEM: 'li.RDtBn',
      querySelectorNone: function (querySel, sel3) {
        return querySel(sel3);
      },
      notStrictEqual2: function (check1, check2) {
        return check1 !== check2;
      },
      SELECTOR_MENU_UL: 'ul.IkdIG',
      SELECTOR_USER_MENU: 'ul.usermenu__select',
      querySelectAll: function (queryAll, selector2) {
        return queryAll(selector2);
      },
      execute2: function (exec2) {
        return exec2();
      },
      VALUE_PROP: 'value',
      LICENSE_NOT_FOUND_MSG: 'License key not found',
      notEqual2: function (comp1, comp2) {
        return comp1 !== comp2;
      },
      notEqual3: function (check3, check4) {
        return check3 !== check4;
      },
      equals2: function (cmp1, cmp2) {
        return cmp1 === cmp2;
      },
      TOAST_ANIMATION: 'toastFadeOut 0.4s ease forwards',
      addStyle3Args: function (animFunc, sel4, style) {
        return animFunc(sel4, style);
      },
      SELECTOR_ZT1HG: '.Zt1hG',
      SELECTOR_PVBHU: '.pVBHU',
      SELECTOR_INFO_BALANCE: '.---react-features-Usermenu-styles-module__infoBalance--pVBHU',
      SELECTOR_BALANCE_FULL_PATH:
        '#root > div > div.page.app__page > header > div.lqUUw > div.rymiA > div > div._58LeE > div.pVBHU',
      SELECTOR_BALANCE_ALT_PATH:
        '#root > div > div.page.app__page > header > div.header__container > div.---react-features-Usermenu-styles-module__usermenu--rymiA > div > div.---react-features-Usermenu-styles-module__infoText--58LeE > div.---react-features-Usermenu-styles-module__infoBalance--pVBHU',
      SELECTOR_INFO_BALANCE_ALT: '.usermenu__info-balance',
      SELECTOR_INFO_BALANCE_ATTR: "[class*='infoBalance']",
      SVG_TAG: 'svg',
      CLASS_ATTR: 'class',
      TRUE_STRING: 'true',
      FLAG_PREFIX: 'flag-',
      ARIA_LABEL_ATTR: 'aria-label',
      USE_TAG: 'use',
      HREF_ATTR: 'href',
      XLINK_NAMESPACE: 'http://www.w3.org/1999/xlink',
      XLINK_HREF_ATTR: 'xlink:href',
      NAMEFLAT_UPDATE_MSG: 'Name/Flag updated in .d6ijp:',
      NAMEFLAT_ERROR_MSG: 'NameFlag error:',
      addEventListener3Args: function (listener3, sel5, callback2) {
        return listener3(sel5, callback2);
      },
      orOperator2: function (cond3, cond4) {
        return cond3 || cond4;
      },
      lessThan2: function (comp3, comp4) {
        return comp3 < comp4;
      },
      CHILDLIST_MUTATION: 'childList',
      CHARACTERDATA_MUTATION: 'characterData',
      executeFunc4: function (observer, target) {
        return observer(target);
      },
      lessOrEqual: function (check5, check6) {
        return check5 <= check6;
      },
      LIVE_STRING: 'Live',
      LIVE_ACCOUNT_STRING: 'Live Account',
      callFunc2: function (handler3, el2) {
        return handler3(el2);
      },
      executeFunc5: function (fn3) {
        return fn3();
      },
      RESIZE_EVENT: 'resize',
      equals3: function (type2, type3) {
        return type2 === type3;
      },
      greaterThan: function (comp5, comp6) {
        return comp5 > comp6;
      },
      SVG_PROFILE_PATH: '/profile/images/spritemap.svg#',
      ICON_STANDARD: 'icon-profile-level-standart',
      ICON_PRO: 'icon-profile-level-pro',
      ICON_VIP: 'icon-profile-level-vip',
      SELECTOR_USER_MENU_ELEMENTS: ".QE4Zb, .Xlyoi, .rymiA, [class*='usermenu']",
      SELECTOR_BALANCE_ELEMENTS: ".Zt1hG, .pVBHU, [class*='infoBalance']",
      SELECTOR_NAME_ELEMENTS: ".v2KPX, .SfrTV, [class*='infoName']",
      SELECTOR_ICON_ELEMENTS: ".h5aTJ use, .ePf8T use, [class*='infoLevels'] use",
      executeFunc6: function (cb) {
        return cb();
      },
      LICENSE_OVERLAY_ID: 'license-blocking-overlay',
      QX5RW_CLASS: 'Qx5RW',
      SELECTOR_LOGIN_BUTTON: 'a.yBslY',
      SELECTOR_INPUT_FIELD: 'input.input-control__input',
      querySelect2: function (querySel2, query2) {
        return querySel2(query2);
      },
      SELECTOR_BALANCE_TEXT: 'b.YnoT0',
      querySelect3: function (qs, q) {
        return qs(q);
      },
      SELECTOR_OCZRH: '.OCZRh',
      SELECTOR_QJGLZ: '.qjGlZ',
      SELECTOR_VGPLL: '.VgpLl',
      SELECTOR_NKM6H_SVG: '.nKm6H svg',
      greaterOrEqual2: function (n, limit) {
        return n >= limit;
      },
      VIP_LEVEL_TEXT: 'vip level:',
      VIP_PROFIT_TEXT: '+4% profit',
      PRO_LEVEL_TEXT: 'pro level:',
      PRO_PROFIT_TEXT: '+2% profit',
      STANDARD_LEVEL_TEXT: 'standard:',
      STANDARD_PROFIT_TEXT: '+0% profit',
      SELECTOR_LEVEL_CONTAINER: '.usermenu__level',
      SELECTOR_LEVEL_NAME: '.usermenu__level-name:not(.hidden)',
      SELECTOR_LEVEL_PROFIT: '.usermenu__level-profit:not(.hidden)',
      SELECTOR_LEVEL_ICONS:
        'svg.icon-profile-level-standart, svg.icon-profile-level-pro, svg.icon-profile-level-vip',
      greaterOrEqual3: function (check7, check8) {
        return check7 >= check8;
      },
      equals4: function (cmp3, cmp4) {
        return cmp3 === cmp4;
      },
      STRING_TYPE: 'string',
      greaterThan2: function (str3, str4) {
        return str3 > str4;
      },
      SELECTOR_TITLE_ELEMENTS:
        '.ocuJC, .---react-features-Sidepanel-LeaderBoard-Position-styles-module__title--ocuJC',
      notEqual4: function (el3, el4) {
        return el3 !== el4;
      },
      callFunc3Args: function (fn4, sel6, opt) {
        return fn4(sel6, opt);
      },
      HUNDRED_PLUS_STRING: '100+',
      lessOrEqual2: function (num, max) {
        return num <= max;
      },
      SELECTOR_MONEY_ELEMENTS: '.ePgNa, .jJUGd, .---react-features-Sidepanel-LeaderBoard-styles-module__money--jJUGd',
      add2: function (a2, b2) {
        return a2 + b2;
      },
      equals5: function (eq1, eq2) {
        return eq1 === eq2;
      },
      lessThan3: function (l1, l2) {
        return l1 < l2;
      },
      divide: function (d1, d2) {
        return d1 / d2;
      },
      subtract2: function (diff1, diff2) {
        return diff1 - diff2;
      },
      multiply: function (m1, m2) {
        return m1 * m2;
      },
      divide2: function (v1, v2) {
        return v1 / v2;
      },
      subtract3: function (div1, div2) {
        return div1 - div2;
      },
      subtract4: function (sub1, sub2) {
        return sub1 - sub2;
      },
      subtract5: function (sub3, sub4) {
        return sub3 - sub4;
      },
      divide3: function (div3, div4) {
        return div3 / div4;
      },
      SELECTOR_ORD28_BWWCZ: '.ord28, .BwWCZ',
      SELECTOR_UQUVA_KBHOM: '.uQuVa, .KBHoM',
      SELECTOR_C7BP_IKTL6: '.c_7BP, .iKtL6',
      notEqual5: function (ne1, ne2) {
        return ne1 !== ne2;
      },
      FIREBASE_API_KEY: 'AIzaSyAkhYexMHLcLWWLOsynXADmkFH-TUkMBAU',
      FIREBASE_APP_ID: 'injection-6f022.firebaseapp.com',
      FIREBASE_DB_URL_FULL: 'https://injection-6f022-default-rtdb.asia-southeast1.firebasedatabase.app',
      FIREBASE_PROJECT_ID: 'injection-6f022',
      FIREBASE_STORAGE_BUCKET: 'injection-6f022.firebasestorage.app',
      FIREBASE_PROJECT_NUMBER: '887557497201',
      FIREBASE_WEB_APP_ID: '1:887557497201:web:6c9797ec6015b2c8e516d0',
      CUSTOM_MOD_SETTINGS_KEY: 'customModSettings',
      SELECTOR_XN5CX: '.xN5cX',
      SELECTOR_NAME_CLASS: '.---react-features-Sidepanel-LeaderBoard-Position-styles-module__name--xN5cX',
      SELECTOR_HEADER_NAME: '.position__header-name',
      SELECTOR_LEADERBOARD_NAME: "[class*='LeaderBoard-Position'][class*='name']",
      executeFunc7: function (init1) {
        return init1();
      },
      executeFunc8: function (init2) {
        return init2();
      },
      DOMAIN_QXBROKER: 'qxbroker.com',
      DOMAIN_MARKET_QX_PRO: 'market-qx.pro',
      DOMAIN_MARKET_QX_TRADE: 'market-qx.trade',
      DOMAIN_MARKET_QTX_TRADE: 'market-qtx.trade',
      PATH_DEMO_TRADE: '/en/demo-trade',
      PATH_TRADE: '/en/trade',
      HIDE_BANNER_CLASS: 'hide-welcome-banner',
      DOM_CONTENT_LOADED_EVENT: 'DOMContentLoaded',
      executeFunc9: function (ready) {
        return ready();
      },
    },
    readableVar0153 = [
      functionMap['DOMAIN_QXBROKER'],
      functionMap['DOMAIN_MARKET_QX_PRO'],
      functionMap['DOMAIN_MARKET_QX_TRADE'],
      functionMap['DOMAIN_MARKET_QTX_TRADE'],
    ],
    readableVar0154 = functionMap['PATH_DEMO_TRADE'],
    readableVar0155 = functionMap['PATH_TRADE'],
    readableVar0156 = document['createElement'](functionMap['STYLE_ATTR']);
  ((readableVar0156['id'] = functionMap['HIDE_BANNER_CLASS']),
    (readableVar0156['textContent'] =
      '\n        .q04vx,\n        div[dir="ltr"].q04vx,\n        .JbYcC,\n        .r7UKG,\n        .P86XK,\n        .VRCVp {\n            display: none !important;\n            visibility: hidden !important;\n            opacity: 0 !important;\n            height: 0 !important;\n            width: 0 !important;\n            overflow: hidden !important;\n            position: absolute !important;\n            left: -9999px !important;\n        }\n    '));
  document['head']
    ? document['head']['appendChild'](readableVar0156)
    : document['addEventListener'](functionMap['DOM_CONTENT_LOADED_EVENT'], () => {
        const readableVar0157 = null;
        document['head']['appendChild'](readableVar0156);
      });
  function readableVar0158() {
    const readableVar0159 = null,
      readableVar0160 = location['hostname']['replace'](/^www\./, '');
    if (
      readableVar0153['some']((readableVar0161) => readableVar0160['endsWith'](readableVar0161))
    ) {
      if (location['pathname']['startsWith'](readableVar0154)) {
        const readableVar0162 = functionMap['concatenate'](
          functionMap['concatenateStrings'](
            functionMap['concatenateStrings'](location['origin'], readableVar0155),
            location['search']
          ),
          location['hash']
        );
        history['replaceState'](null, '', readableVar0162);
      }
    }
  }
  functionMap['executeFunc9'](readableVar0158);
  const readableVar0163 = new MutationObserver(readableVar0158);
  readableVar0163['observe'](document, {
    subtree: !![],
    childList: !![],
  });
  function readableVar0164() {
    return new Promise((readableVar0165, readableVar0166) => {
      const readableVar0167 = null,
        readableVar0168 = {
          ueobs: functionMap['SCRIPT_TAG'],
          TwEui: functionMap['FIREBASE_AUTH_URL'],
          VtQfS: functionMap['FIREBASE_DB_URL'],
        };
      if (functionMap['notEqual'](typeof firebase, functionMap['UNDEFINED_STRING'])) {
        functionMap['executeFunction'](readableVar0165);
        return;
      }
      const readableVar0169 = document['createElement'](functionMap['SCRIPT_TAG']);
      ((readableVar0169['src'] = functionMap['FIREBASE_APP_URL']),
        (readableVar0169['onload'] = () => {
          const readableVar0170 = null,
            readableVar0171 = document['createElement'](readableVar0168['ueobs']);
          ((readableVar0171['src'] = readableVar0168['VtQfS']),
            (readableVar0171['onload'] = () => {
              const readableVar0172 = null,
                readableVar0173 = document['createElement'](readableVar0168['ueobs']);
              ((readableVar0173['src'] = readableVar0168['TwEui']),
                (readableVar0173['onload'] = () =>
                  setTimeout(readableVar0165, 0x1744 + 0x212e * 0x1 + -0x380e)),
                (readableVar0173['onerror'] = readableVar0166),
                document['head']['appendChild'](readableVar0173));
            }),
            (readableVar0171['onerror'] = readableVar0166),
            document['head']['appendChild'](readableVar0171));
        }),
        (readableVar0169['onerror'] = readableVar0166),
        document['head']['appendChild'](readableVar0169));
    });
  }
  async function readableVar0174() {
    const readableVar0175 = null;
    try {
      (await functionMap['executeFunc'](readableVar0164), functionMap['runFunc'](readableVar0176));
    } catch (readableVar0177) {
      functionMap['callFunction'](showErrorMessage, functionMap['FIREBASE_ERROR_MSG']);
    }
  }
  function readableVar0176() {
    const readableVar0178 = null,
      readableVar0179 = {
        tboWM: function (readableVar0180) {
          const readableVar0181 = null;
          return functionMap['executeFunction2'](readableVar0180);
        },
        viAxQ: function (readableVar0182) {
          const readableVar0183 = null;
          return functionMap['execute2'](readableVar0182);
        },
        JURdi: functionMap['VALUE_PROP'],
        rZsYQ: functionMap['LICENSE_NOT_FOUND_MSG'],
        vkfXu: function (readableVar0184, readableVar0185) {
          const readableVar0186 = null;
          return functionMap['notEqual2'](readableVar0184, readableVar0185);
        },
        acTLG: functionMap['ACTIVE_CLASS'],
        IuDAS: function (readableVar0187, readableVar0188) {
          const readableVar0189 = null;
          return functionMap['notEqual3'](readableVar0187, readableVar0188);
        },
        jtoCS: functionMap['DEVICE_MISMATCH_ERROR'],
        xPCWP: function (readableVar0190, readableVar0191) {
          const readableVar0192 = null;
          return functionMap['equals2'](readableVar0190, readableVar0191);
        },
        OWYPk: functionMap['DISPLAY_NONE'],
        kZqli: functionMap['TOAST_ANIMATION'],
        eTFAo: function (readableVar0193, readableVar0194, readableVar0195) {
          const readableVar0196 = null;
          return functionMap['createElement3Args'](readableVar0193, readableVar0194, readableVar0195);
        },
        JmoUn: functionMap['DIV_TAG'],
        bmFHr: functionMap['ENTER_KEY'],
        zzxpK: functionMap['LICENSE_SUBMIT_ID'],
        NhLFW: functionMap['LICENSE_ERROR_SELECTOR'],
        KHIwq: function (readableVar0197, readableVar0198) {
          const readableVar0199 = null;
          return functionMap['concatenate'](readableVar0197, readableVar0198);
        },
        SMFoX: function (readableVar0200, readableVar0201, readableVar0202) {
          const readableVar0203 = null;
          return functionMap['addStyle3Args'](readableVar0200, readableVar0201, readableVar0202);
        },
        aTfDj: functionMap['FUNCTION_STRING'],
        HAvQS: function (readableVar0204, readableVar0205) {
          const readableVar0206 = null;
          return functionMap['querySelector'](readableVar0204, readableVar0205);
        },
        CLoCe: functionMap['BALANCE_SUBMIT_ID'],
        qwYaU: functionMap['BALANCE_ERROR_SELECTOR'],
        OVWSt: functionMap['SELECTOR_ZT1HG'],
        plaDR: functionMap['SELECTOR_PVBHU'],
        WsPNx: functionMap['SELECTOR_INFO_BALANCE'],
        zETPl: functionMap['SELECTOR_BALANCE_FULL_PATH'],
        kxUJm: functionMap['SELECTOR_BALANCE_ALT_PATH'],
        caetZ: functionMap['SELECTOR_INFO_BALANCE_ALT'],
        bwdla: functionMap['SELECTOR_INFO_BALANCE_ATTR'],
        zJyPr: function (readableVar0207, readableVar0208) {
          const readableVar0209 = null;
          return functionMap['executeWithArg'](readableVar0207, readableVar0208);
        },
        FWzZI: function (readableVar0210) {
          const readableVar0211 = null;
          return functionMap['execute'](readableVar0210);
        },
        lTIsl: function (readableVar0212, readableVar0213) {
          const readableVar0214 = null;
          return functionMap['querySelectAll'](readableVar0212, readableVar0213);
        },
        AfPQx: functionMap['SELECTOR_D6IJP'],
        VAnFD: functionMap['SVG_TAG'],
        zdMdd: functionMap['CLASS_ATTR'],
        Ogfic: functionMap['TRUE_STRING'],
        sbiKh: function (readableVar0215, readableVar0216) {
          const readableVar0217 = null;
          return functionMap['isEqual'](readableVar0215, readableVar0216);
        },
        MbUsk: function (readableVar0218, readableVar0219) {
          const readableVar0220 = null;
          return functionMap['isEqual'](readableVar0218, readableVar0219);
        },
        PSuRl: functionMap['FLAG_PREFIX'],
        dlnBu: functionMap['ARIA_LABEL_ATTR'],
        eKedx: functionMap['USE_TAG'],
        BZoTm: functionMap['HREF_ATTR'],
        KNolj: functionMap['XLINK_NAMESPACE'],
        wQfSh: functionMap['XLINK_HREF_ATTR'],
        BJXco: functionMap['NAMEFLAT_UPDATE_MSG'],
        lonBc: functionMap['NAMEFLAT_ERROR_MSG'],
        Yrpkr: function (readableVar0221, readableVar0222, readableVar0223) {
          const readableVar0224 = null;
          return functionMap['addEventListener3Args'](readableVar0221, readableVar0222, readableVar0223);
        },
        GDzOj: function (readableVar0225, readableVar0226, readableVar0227) {
          const readableVar0228 = null;
          return functionMap['setStyle3Args'](readableVar0225, readableVar0226, readableVar0227);
        },
        ENpTR: function (readableVar0229, readableVar0230) {
          const readableVar0231 = null;
          return functionMap['orOperator2'](readableVar0229, readableVar0230);
        },
        ZXVgG: function (readableVar0232, readableVar0233) {
          const readableVar0234 = null;
          return functionMap['lessThan'](readableVar0232, readableVar0233);
        },
        HIwOy: function (readableVar0235, readableVar0236) {
          const readableVar0237 = null;
          return functionMap['querySelectorNone'](readableVar0235, readableVar0236);
        },
        KuJNG: function (readableVar0238, readableVar0239) {
          const readableVar0240 = null;
          return functionMap['add'](readableVar0238, readableVar0239);
        },
        EuVvY: function (readableVar0241, readableVar0242) {
          const readableVar0243 = null;
          return functionMap['lessThan2'](readableVar0241, readableVar0242);
        },
        LDNJb: function (readableVar0244, readableVar0245) {
          const readableVar0246 = null;
          return functionMap['strictEqual'](readableVar0244, readableVar0245);
        },
        WzQsg: functionMap['CHILDLIST_MUTATION'],
        NltcC: functionMap['CHARACTERDATA_MUTATION'],
        jSXir: function (readableVar0247, readableVar0248) {
          const readableVar0249 = null;
          return functionMap['executeFunc4'](readableVar0247, readableVar0248);
        },
        Vmeog: function (readableVar0250, readableVar0251) {
          const readableVar0252 = null;
          return functionMap['lessOrEqual'](readableVar0250, readableVar0251);
        },
        xVPTP: functionMap['LIVE_STRING'],
        MXaSL: functionMap['LIVE_ACCOUNT_STRING'],
        FZtHs: function (readableVar0253, readableVar0254) {
          const readableVar0255 = null;
          return functionMap['notEqual2'](readableVar0253, readableVar0254);
        },
        JfLNO: function (readableVar0256, readableVar0257) {
          const readableVar0258 = null;
          return functionMap['callFunc2'](readableVar0256, readableVar0257);
        },
        TUYiz: function (readableVar0259) {
          const readableVar0260 = null;
          return functionMap['executeFunc5'](readableVar0259);
        },
        MYLVN: function (readableVar0261) {
          const readableVar0262 = null;
          return functionMap['execute2'](readableVar0261);
        },
        vmibC: functionMap['RESIZE_EVENT'],
        vlASL: function (readableVar0263, readableVar0264) {
          const readableVar0265 = null;
          return functionMap['equals3'](readableVar0263, readableVar0264);
        },
        ovKtr: function (readableVar0266, readableVar0267) {
          const readableVar0268 = null;
          return functionMap['greaterThan'](readableVar0266, readableVar0267);
        },
        JlKGi: function (readableVar0269, readableVar0270) {
          const readableVar0271 = null;
          return functionMap['executeFunc4'](readableVar0269, readableVar0270);
        },
        PYfqj: functionMap['GREEN_COLOR_HEX'],
        GvnLo: functionMap['SVG_PROFILE_PATH'],
        XamHp: functionMap['ICON_STANDARD'],
        yoxTI: functionMap['ICON_PRO'],
        fdXus: functionMap['ICON_VIP'],
        GdEnu: functionMap['SELECTOR_USER_MENU_ELEMENTS'],
        DeIsW: functionMap['SELECTOR_BALANCE_ELEMENTS'],
        cWSqe: functionMap['SELECTOR_NAME_ELEMENTS'],
        RLYRw: functionMap['SELECTOR_ICON_ELEMENTS'],
        jlqFy: function (readableVar0272) {
          const readableVar0273 = null;
          return functionMap['executeFunc6'](readableVar0272);
        },
        JdQvp: functionMap['LICENSE_OVERLAY_ID'],
        peddb: functionMap['QX5RW_CLASS'],
        PnRgF: functionMap['SELECTOR_LOGIN_BUTTON'],
        MgnfQ: functionMap['SELECTOR_MENU_ITEM'],
        KnPMj: functionMap['SELECTOR_INPUT_FIELD'],
        LpBrt: function (readableVar0274, readableVar0275) {
          const readableVar0276 = null;
          return functionMap['querySelect2'](readableVar0274, readableVar0275);
        },
        AGhZm: function (readableVar0277, readableVar0278) {
          const readableVar0279 = null;
          return functionMap['querySelect2'](readableVar0277, readableVar0278);
        },
        hoGSh: functionMap['SELECTOR_BALANCE_TEXT'],
        WbKZw: function (readableVar0280, readableVar0281) {
          const readableVar0282 = null;
          return functionMap['querySelect3'](readableVar0280, readableVar0281);
        },
        VzbQC: functionMap['SELECTOR_OCZRH'],
        PcWGV: functionMap['SELECTOR_QJGLZ'],
        NeuPl: functionMap['SELECTOR_VGPLL'],
        AdTpF: functionMap['SELECTOR_NKM6H_SVG'],
        amkPd: function (readableVar0283, readableVar0284) {
          const readableVar0285 = null;
          return functionMap['orOperator2'](readableVar0283, readableVar0284);
        },
        YqZxw: function (readableVar0286, readableVar0287) {
          const readableVar0288 = null;
          return functionMap['greaterOrEqual2'](readableVar0286, readableVar0287);
        },
        Wssqf: functionMap['VIP_LEVEL_TEXT'],
        ZaKWK: functionMap['VIP_PROFIT_TEXT'],
        Lglkm: function (readableVar0289, readableVar0290) {
          const readableVar0291 = null;
          return functionMap['greaterOrEqual2'](readableVar0289, readableVar0290);
        },
        gtIxA: functionMap['PRO_LEVEL_TEXT'],
        iKVcY: functionMap['PRO_PROFIT_TEXT'],
        HauZW: functionMap['STANDARD_LEVEL_TEXT'],
        DVcFC: functionMap['STANDARD_PROFIT_TEXT'],
        BOUGR: functionMap['SELECTOR_LEVEL_CONTAINER'],
        mZzVT: functionMap['SELECTOR_LEVEL_NAME'],
        mKpDr: functionMap['SELECTOR_LEVEL_PROFIT'],
        ZSZWV: functionMap['SELECTOR_LEVEL_ICONS'],
        AvQse: function (readableVar0292, readableVar0293) {
          const readableVar0294 = null;
          return functionMap['greaterOrEqual3'](readableVar0292, readableVar0293);
        },
        VduVv: function (readableVar0295, readableVar0296) {
          const readableVar0297 = null;
          return functionMap['add'](readableVar0295, readableVar0296);
        },
        oHdOX: function (readableVar0298, readableVar0299) {
          const readableVar0300 = null;
          return functionMap['greaterOrEqual'](readableVar0298, readableVar0299);
        },
        WBqQL: functionMap['SELECTOR_USER_MENU_RADIO'],
        YKVIs: function (readableVar0301, readableVar0302) {
          const readableVar0303 = null;
          return functionMap['strictEqual'](readableVar0301, readableVar0302);
        },
        aAJAM: function (readableVar0304, readableVar0305) {
          const readableVar0306 = null;
          return functionMap['equals3'](readableVar0304, readableVar0305);
        },
        QaoBx: function (readableVar0307, readableVar0308) {
          const readableVar0309 = null;
          return functionMap['equals4'](readableVar0307, readableVar0308);
        },
        wbsuB: functionMap['STRING_TYPE'],
        dXRxI: function (readableVar0310, readableVar0311) {
          const readableVar0312 = null;
          return functionMap['greaterThan2'](readableVar0310, readableVar0311);
        },
        txpuc: functionMap['SELECTOR_TITLE_ELEMENTS'],
        PIgVl: function (readableVar0313, readableVar0314) {
          const readableVar0315 = null;
          return functionMap['notEqual2'](readableVar0313, readableVar0314);
        },
        UieIz: function (readableVar0316, readableVar0317) {
          const readableVar0318 = null;
          return functionMap['notEqual4'](readableVar0316, readableVar0317);
        },
        gjFvs: function (readableVar0319, readableVar0320, readableVar0321) {
          const readableVar0322 = null;
          return functionMap['callFunc3Args'](readableVar0319, readableVar0320, readableVar0321);
        },
        hmHnk: function (readableVar0323, readableVar0324) {
          const readableVar0325 = null;
          return functionMap['querySelectorNone'](readableVar0323, readableVar0324);
        },
        TfsNr: functionMap['HUNDRED_PLUS_STRING'],
        oTyWS: function (readableVar0326, readableVar0327) {
          const readableVar0328 = null;
          return functionMap['lessOrEqual2'](readableVar0326, readableVar0327);
        },
        rTwws: functionMap['SELECTOR_MONEY_ELEMENTS'],
        QKKvn: function (readableVar0329, readableVar0330) {
          const readableVar0331 = null;
          return functionMap['add2'](readableVar0329, readableVar0330);
        },
        qNoxs: function (readableVar0332, readableVar0333) {
          const readableVar0334 = null;
          return functionMap['equals5'](readableVar0332, readableVar0333);
        },
        xJrJz: function (readableVar0335, readableVar0336) {
          const readableVar0337 = null;
          return functionMap['lessThan3'](readableVar0335, readableVar0336);
        },
        pCDlA: function (readableVar0338, readableVar0339) {
          const readableVar0340 = null;
          return functionMap['divide'](readableVar0338, readableVar0339);
        },
        PQbQx: function (readableVar0341, readableVar0342) {
          const readableVar0343 = null;
          return functionMap['subtract2'](readableVar0341, readableVar0342);
        },
        GUSUV: function (readableVar0344, readableVar0345) {
          const readableVar0346 = null;
          return functionMap['multiply'](readableVar0344, readableVar0345);
        },
        umqqC: function (readableVar0347, readableVar0348) {
          const readableVar0349 = null;
          return functionMap['divide2'](readableVar0347, readableVar0348);
        },
        aWoco: function (readableVar0350, readableVar0351) {
          const readableVar0352 = null;
          return functionMap['subtract3'](readableVar0350, readableVar0351);
        },
        Gvuci: function (readableVar0353, readableVar0354) {
          const readableVar0355 = null;
          return functionMap['subtract4'](readableVar0353, readableVar0354);
        },
        RXejp: function (readableVar0356, readableVar0357) {
          const readableVar0358 = null;
          return functionMap['subtract5'](readableVar0356, readableVar0357);
        },
        hrrAf: function (readableVar0359, readableVar0360) {
          const readableVar0361 = null;
          return functionMap['divide3'](readableVar0359, readableVar0360);
        },
        oEVQm: function (readableVar0362, readableVar0363) {
          const readableVar0364 = null;
          return functionMap['multiply'](readableVar0362, readableVar0363);
        },
        OOfbE: function (readableVar0365, readableVar0366) {
          const readableVar0367 = null;
          return functionMap['greaterOrEqual'](readableVar0365, readableVar0366);
        },
        Tuogg: functionMap['GREENLINE_WIDTH_KEY'],
        GKmpz: functionMap['SELECTOR_ORD28_BWWCZ'],
        fPYOn: functionMap['SELECTOR_UQUVA_KBHOM'],
        FyzyR: functionMap['SELECTOR_C7BP_IKTL6'],
        SUSqX: function (readableVar0368, readableVar0369) {
          const readableVar0370 = null;
          return functionMap['notEqual5'](readableVar0368, readableVar0369);
        },
        gSjmo: function (readableVar0371, readableVar0372) {
          const readableVar0373 = null;
          return functionMap['callFunction'](readableVar0371, readableVar0372);
        },
      },
      readableVar0374 = {
        apiKey: functionMap['FIREBASE_API_KEY'],
        authDomain: functionMap['FIREBASE_APP_ID'],
        databaseURL: functionMap['FIREBASE_DB_URL_FULL'],
        projectId: functionMap['FIREBASE_PROJECT_ID'],
        storageBucket: functionMap['FIREBASE_STORAGE_BUCKET'],
        messagingSenderId: functionMap['FIREBASE_PROJECT_NUMBER'],
        appId: functionMap['FIREBASE_WEB_APP_ID'],
        measurementId: 'G-DHLY4ZELC3',
      };
    if (!firebase['apps']['length']) firebase['initializeApp'](readableVar0374);
    const readableVar0375 = firebase['database'](),
      readableVar0376 = firebase['auth']();
    let readableVar0377 = null,
      readableVar0378 = ![],
      readableVar0379 = null,
      readableVar0380 = ![];
    async function readableVar0381() {
      const readableVar0382 = null;
      try {
        return (await readableVar0376['signInAnonymously'](), (readableVar0380 = !![]), !![]);
      } catch (readableVar0383) {
        return (functionMap['callFunction'](readableVar0384, functionMap['AUTH_ERROR_MSG']), ![]);
      }
    }
    function readableVar0385() {
      const readableVar0386 = null,
        readableVar0387 = sessionStorage['getItem'](functionMap['DEVICE_FINGERPRINT_KEY']);
      if (readableVar0387) return readableVar0387;
      let readableVar0388 = functionMap['NO_WEBGL_CLASS'];
      try {
        const readableVar0389 = document['createElement'](functionMap['CANVAS_TAG']),
          readableVar0390 =
            readableVar0389['getContext'](functionMap['WEBGL_CONTEXT']) ||
            readableVar0389['getContext'](functionMap['EXPERIMENTAL_WEBGL']);
        if (readableVar0390) {
          const readableVar0391 = readableVar0390['getExtension'](functionMap['WEBGL_DEBUG_INFO']);
          if (readableVar0391) {
            const readableVar0392 =
                readableVar0390['getParameter'](readableVar0391['UNMASKED_VENDOR_WEBGL']) ||
                functionMap['UNKNOWN_VENDOR'],
              readableVar0393 =
                readableVar0390['getParameter'](readableVar0391['UNMASKED_RENDERER_WEBGL']) ||
                functionMap['UNKNOWN_RENDERER'];
            readableVar0388 = readableVar0392 + '~' + readableVar0393;
          }
        }
      } catch (readableVar0394) {
        readableVar0388 = functionMap['NO_WEBGL_CLASS'];
      }
      const readableVar0395 = {
          screen: screen['width'] + 'x' + screen['height'] + 'x' + screen['colorDepth'],
          availScreen: screen['availWidth'] + 'x' + screen['availHeight'],
          platform: navigator['platform'] || functionMap['UNKNOWN_VALUE'],
          hardwareConcurrency: navigator['hardwareConcurrency'] || functionMap['UNKNOWN_VALUE'],
          maxTouchPoints: navigator['maxTouchPoints'] || 0x88f + 0x9 * -0x30d + 0x12e6,
          timezone:
            Intl['DateTimeFormat']()['resolvedOptions']()['timeZone'] || functionMap['UTC_TIMEZONE'],
          timezoneOffset: new Date()['getTimezoneOffset'](),
          webgl: readableVar0388,
          ua: navigator['userAgent'] || functionMap['UNKNOWN_VALUE'],
        },
        readableVar0396 = JSON['stringify'](readableVar0395);
      let readableVar0397 = 0x1 * -0xeb7 + -0x2 * -0x1c3 + 0xb31;
      for (
        let readableVar0398 = 0x10 * 0x6f + -0x122a + 0xb3a;
        functionMap['lessThan'](readableVar0398, readableVar0396['length']);
        readableVar0398++
      ) {
        const readableVar0399 = readableVar0396['charCodeAt'](readableVar0398);
        ((readableVar0397 = functionMap['concatenateStrings'](
          functionMap['subtract'](
            functionMap['bitShiftLeft'](readableVar0397, 0x1f5 * -0x4 + 0x1249 * 0x1 + -0xa70 * 0x1),
            readableVar0397
          ),
          readableVar0399
        )),
          (readableVar0397 = functionMap['bitwiseAnd'](readableVar0397, readableVar0397)));
      }
      const readableVar0400 = Math['abs'](readableVar0397)
          ['toString'](-0x2 * -0x469 + 0x22ee * 0x1 + -0x2bb0)
          ['padStart'](0x14ab + 0x1 * 0xd37 + -0x21da * 0x1, '0'),
        readableVar0401 = functionMap['callFunctionWithArg'](btoa, readableVar0396)
          ['replace'](/[^a-zA-Z0-9]/g, '')
          ['substring'](0xa87 + -0xf8 * -0x6 + 0x2f * -0x59, 0x56 * -0x29 + -0x20d5 + 0x2eb3),
        readableVar0402 = functionMap['add'](readableVar0400, readableVar0401)['substring'](
          -0x1 * -0x19b3 + -0x224 + -0x25 * 0xa3,
          0x36 * -0x40 + 0x94b + 0x455
        );
      return (
        sessionStorage['setItem'](functionMap['DEVICE_FINGERPRINT_KEY'], readableVar0402),
        readableVar0402
      );
    }
    function readableVar0403() {
      const readableVar0404 = null;
      return JSON['stringify']({
        userAgent: navigator['userAgent'],
        language: navigator['language'],
        platform: navigator['platform'],
        screen: screen['width'] + 'x' + screen['height'],
        timezone: Intl['DateTimeFormat']()['resolvedOptions']()['timeZone'],
      });
    }
    async function readableVar0405(readableVar0406) {
      const readableVar0407 = null;
      try {
        const readableVar0408 = readableVar0179['tboWM'](readableVar0385),
          readableVar0409 = readableVar0179['viAxQ'](readableVar0403),
          readableVar0410 = readableVar0375['ref']('licenses/' + readableVar0406),
          readableVar0411 = await readableVar0410['once'](readableVar0179['JURdi']);
        if (!readableVar0411['exists']()) throw new Error(readableVar0179['rZsYQ']);
        const readableVar0412 = readableVar0411['val']();
        if (readableVar0179['vkfXu'](readableVar0412['status'], readableVar0179['acTLG']))
          throw new Error('License is ' + readableVar0412['status']);
        if (
          readableVar0412['fingerprint'] &&
          readableVar0179['IuDAS'](readableVar0412['fingerprint'], readableVar0408)
        )
          throw new Error(readableVar0179['jtoCS']);
        return (
          !readableVar0412['fingerprint']
            ? await readableVar0410['update']({
                fingerprint: readableVar0408,
                deviceInfo: readableVar0409,
                lastUsed: new Date()['toISOString'](),
                lastModified: new Date()['toISOString'](),
              })
            : await readableVar0410['update']({
                lastUsed: new Date()['toISOString'](),
                lastModified: new Date()['toISOString'](),
              }),
          {
            success: !![],
          }
        );
      } catch (readableVar0413) {
        if (readableVar0179['xPCWP'](readableVar0413['message'], readableVar0179['jtoCS']))
          return {
            success: ![],
            error: readableVar0179['jtoCS'],
          };
        return {
          success: ![],
          error: readableVar0413['message'],
        };
      }
    }
    function readableVar0414() {}
    function readableVar0384(readableVar0415, readableVar0416 = null) {
      const readableVar0417 = null;
      if (readableVar0416) {
        const readableVar0418 = document['getElementById'](readableVar0416);
        if (readableVar0418) {
          let readableVar0419 = readableVar0418['querySelector'](functionMap['ERROR_AREA_SELECTOR']);
          !readableVar0419 &&
            ((readableVar0419 = document['createElement'](functionMap['DIV_TAG'])),
            (readableVar0419['className'] = functionMap['ERROR_AREA_CLASS']),
            (readableVar0419['style']['cssText'] = functionMap['ERROR_AREA_STYLES']),
            readableVar0418['appendChild'](readableVar0419));
          ((readableVar0419['innerHTML'] = readableVar0415),
            (readableVar0419['style']['display'] = functionMap['DISPLAY_BLOCK']),
            functionMap['createElement3Args'](
              setTimeout,
              () => {
                const readableVar0420 = null;
                readableVar0419 &&
                  readableVar0419['parentNode'] &&
                  (readableVar0419['style']['display'] = readableVar0179['OWYPk']);
              },
              -0x2 * 0xfed + 0x2c2 + 0x30a0
            ));
          return;
        }
      }
      const readableVar0421 = document['createElement'](functionMap['DIV_TAG']);
      ((readableVar0421['style']['cssText'] =
        "position: fixed; top: 20px; right: 20px; z-index: 999999; background: rgba(220, 53, 69, 0.95); color: white; padding: 15px 20px; border-radius: 8px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 600; font-size: 14px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);"),
        (readableVar0421['innerHTML'] = readableVar0415),
        document['body']['appendChild'](readableVar0421),
        functionMap['createElement3ArgsAlt'](
          setTimeout,
          () => {
            const readableVar0422 = null;
            if (readableVar0421['parentNode']) readableVar0421['remove']();
          },
          0x6b2 + -0x3 * 0x5b1 + 0x1de9
        ));
    }
    function readableVar0423(readableVar0424) {
      const readableVar0425 = null,
        readableVar0426 = document['createElement'](readableVar0179['JmoUn']);
      // --- PREMIUM TOAST (upgraded UI) ---
      ((readableVar0426['innerHTML'] =
        '<div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 999999; animation: toastFadeIn 0.5s ease;">' +
        '<div style="background: linear-gradient(145deg, rgba(18,18,32,0.96), rgba(10,10,20,0.99)); padding: 28px 36px; border-radius: 24px; backdrop-filter: blur(30px) saturate(180%); -webkit-backdrop-filter: blur(30px) saturate(180%); border: 1px solid rgba(255,107,53,0.35); color: white; font-family: \'Segoe UI\', Arial, sans-serif; text-align: center; max-width: 440px; min-width: 320px; word-wrap: break-word; line-height: 1.6; box-shadow: 0 30px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,107,53,0.12) inset, 0 0 50px rgba(255,107,53,0.10); position: relative;">' +
        '<div style="display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 18px;">' +
        '<div style="width: 48px; height: 48px; background: url(\'https://www.image2url.com/r2/default/images/1783062172228-2b84b015-5139-465b-b2af-8f37d52e08ca.png\') center/cover; border-radius: 12px; border: 2px solid rgba(255,107,53,0.4); box-shadow: 0 6px 25px rgba(255,107,53,0.4); flex-shrink:0;"></div>' +
        '<div style="text-align: left;">' +
        '<h3 style="margin:0; font-size:20px; font-weight:700; background:linear-gradient(135deg, #FFB380, #FF6B35); -webkit-background-clip:text; -webkit-text-fill-color:transparent; letter-spacing:0.3px;">QUOTEX MASTER</h3>' +
        '<p style="margin:2px 0 0; font-size:11px; color:rgba(255,107,53,0.7); font-weight:500; text-transform:uppercase; letter-spacing:1.5px;">Premium Code</p>' +
        '</div>' +
        '</div>' +
        '<div style="font-size:12px; color:rgba(255,107,53,0.5); font-weight:500; letter-spacing:0.5px; border-top:1px solid rgba(255,107,53,0.1); padding-top:14px;">Created by @QuotexMaster</div>' +
        '</div>' +
        '</div>'),
        document['body']['appendChild'](readableVar0426),
        readableVar0179['eTFAo'](
          setTimeout,
          () => {
            const readableVar0427 = null;
            readableVar0426['parentNode'] &&
              ((readableVar0426['style']['animation'] = readableVar0179['kZqli']),
              readableVar0179['eTFAo'](
                setTimeout,
                () => {
                  const readableVar0428 = null;
                  if (readableVar0426['parentNode']) readableVar0426['remove']();
                },
                0x1e9d + 0x2d7 * -0xa + -0xa7
              ));
          },
          0x52 * 0x3b + -0x3 * 0x869 + -0x1 * -0x1019
        ));
    }
    const readableVar0429 = document['createElement'](functionMap['DIV_TAG']);
    // --- PREMIUM LICENSE POPUP (upgraded UI) ---
    ((readableVar0429['innerHTML'] =
      '<div id="license-popup" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(8,8,18,0.92); display: flex; align-items: center; justify-content: center; z-index: 999999; font-family: \'Segoe UI\', \'Poppins\', Arial, sans-serif; animation: bgFade 0.5s ease; padding: 16px; backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%);">' +
      '<div class="watermark" style="position: absolute; bottom: 24px; right: 28px; color: rgba(255,107,53,0.15); font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; z-index: 2;">✦ QuotexMaster</div>' +
      '<div style="background: linear-gradient(145deg, rgba(18,18,32,0.97), rgba(10,10,20,0.99)); padding: 0; border-radius: 28px; backdrop-filter: blur(40px) saturate(200%); -webkit-backdrop-filter: blur(40px) saturate(200%); border: 1px solid rgba(255,107,53,0.25); text-align: center; max-width: 420px; width: 100%; animation: popupFade 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); color: white; box-shadow: 0 30px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,107,53,0.08) inset, 0 0 60px rgba(255,107,53,0.06); overflow: hidden; position: relative; z-index: 3;">' +
      '<!-- Animated border glow -->' +
      '<div style="position: absolute; inset: -2px; border-radius: 30px; padding: 2px; background: conic-gradient(from 0deg, rgba(255,107,53,0.3), rgba(139,92,246,0.3), rgba(255,107,53,0.3), rgba(139,92,246,0.3), rgba(255,107,53,0.3)); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; animation: borderRotate 6s linear infinite; z-index: 0;"></div>' +
      '<!-- Decorative orbs -->' +
      '<div style="position: absolute; top: -80px; right: -80px; width: 240px; height: 240px; background: radial-gradient(circle, rgba(255,107,53,0.10), transparent 70%); border-radius: 50%; pointer-events: none; z-index: 0; animation: orbFloat 8s ease-in-out infinite;"></div>' +
      '<div style="position: absolute; bottom: -100px; left: -100px; width: 280px; height: 280px; background: radial-gradient(circle, rgba(139,92,246,0.08), transparent 70%); border-radius: 50%; pointer-events: none; z-index: 0; animation: orbFloat 10s ease-in-out infinite reverse;"></div>' +
      '<!-- Header -->' +
      '<div style="position: relative; padding: 28px 28px 20px; background: linear-gradient(135deg, rgba(255,107,53,0.08), rgba(139,92,246,0.04)); border-bottom: 1px solid rgba(255,107,53,0.10); z-index: 1;">' +
      '<div style="display: flex; align-items: center; justify-content: center; gap: 16px;">' +
      '<div style="width: 60px; height: 60px; background: linear-gradient(135deg, #1a1a2e, #2d2d44); border-radius: 16px; display: flex; align-items: center; justify-content: center; border: 1.5px solid rgba(255,107,53,0.35); box-shadow: 0 8px 30px rgba(255,107,53,0.20), 0 0 0 1px rgba(255,107,53,0.05) inset; flex-shrink: 0; overflow: hidden;">' +
      '<div style="width: 42px; height: 42px; background: url(\'https://www.image2url.com/r2/default/images/1783060621579-373ada1f-269c-44bc-89d7-ca7e05c39360.png\') center/cover; border-radius: 10px;"></div>' +
      '</div>' +
      '<div style="text-align: left;">' +
      '<h1 style="margin: 0; font-size: 20px; font-weight: 700; background: linear-gradient(135deg, #FFB380, #FF6B35, #FFB380); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: -0.3px; animation: shimmerText 3s ease-in-out infinite; line-height: 1.2;">Quotex Editor Pro</h1>' +
      '<p style="margin: 2px 0 0 0; font-size: 10px; color: rgba(255,107,53,0.60); font-weight: 500; text-transform: uppercase; letter-spacing: 2.5px; -webkit-text-fill-color: rgba(255,107,53,0.60);">✦ Premium Console Code ✦</p>' +
      '</div>' +
      '</div>' +
      '<div style="position: relative; margin-top: 16px; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,53,0.20), transparent);"></div>' +
      '</div>' +
      '<!-- Content -->' +
      '<div style="position: relative; padding: 24px 28px 26px; z-index: 1;">' +
      '<h2 style="margin: 0 0 2px 0; font-size: 17px; font-weight: 600; color: #ffffff; letter-spacing: 0.3px;">License Verification</h2>' +
      '<p style="margin: 0 0 18px 0; color: rgba(255,255,255,0.45); font-size: 12.5px; line-height: 1.5; font-weight: 400; letter-spacing: 0.2px;">Enter your license key to unlock premium features</p>' +
      '<input id="license-input" type="text" placeholder="✧ QICK-1108-V56B" style="width: 100%; padding: 14px 18px; margin: 0 0 16px 0; border: 1.5px solid rgba(255,107,53,0.20); background: rgba(255,255,255,0.03); border-radius: 14px; font-size: 15px; color: #ffffff; text-align: center; outline: none; transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); font-family: \'Monaco\', \'Consolas\', \'Courier New\', monospace; letter-spacing: 2px; box-sizing: border-box; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); box-shadow: 0 2px 12px rgba(0,0,0,0.20);">' +
      '<button id="license-submit" style="background: linear-gradient(135deg, #FF6B35, #CC3300, #FF6B35); background-size: 200% auto; color: #0a0a12; padding: 14px 20px; border: none; border-radius: 14px; cursor: pointer; font-size: 14px; font-weight: 700; width: 100%; box-shadow: 0 6px 28px rgba(255,107,53,0.30); transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); margin-bottom: 14px; letter-spacing: 1px; text-transform: uppercase; position: relative; overflow: hidden;">' +
      '<span style="position: relative; z-index: 2;">✦ Verify &amp; Activate</span>' +
      '<div style="position: absolute; inset: 0; background: linear-gradient(135deg, #FFB380, #FF6B35, #FFB380); background-size: 200% auto; opacity: 0; transition: opacity 0.4s ease; animation: shimmerBtn 2.5s ease-in-out infinite;"></div>' +
      '</button>' +
      '<div id="license-loading" style="display: none; margin-top: 10px; color: rgba(255,255,255,0.60); font-size: 12px; font-weight: 500; letter-spacing: 0.5px;">' +
      '<div style="display: inline-block; width: 16px; height: 16px; border: 2px solid rgba(255,107,53,0.15); border-radius: 50%; border-top-color: #FF6B35; animation: spin 0.9s ease-in-out infinite; margin-right: 10px; vertical-align: middle;"></div>' +
      'Verifying license...' +
      '</div>' +
      '<div class="error-message-area" style="display: none; margin-top: 12px; padding: 10px 16px; background: rgba(239,68,68,0.08); color: #fca5a5; border-radius: 12px; font-size: 12px; text-align: center; border: 1px solid rgba(239,68,68,0.15); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); font-weight: 500; letter-spacing: 0.2px;"></div>' +
      '<div style="margin: 18px 0 16px; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,53,0.12), transparent);"></div>' +
      '<div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">' +
      '<a href="https://t.me/QuotexMaster_Pro" target="_blank" style="display: flex; align-items: center; padding: 8px 18px; background: rgba(255,107,53,0.06); border: 1px solid rgba(255,107,53,0.12); border-radius: 30px; color: #FF6B35; text-decoration: none; font-size: 12px; font-weight: 500; transition: all 0.35s ease; gap: 6px; letter-spacing: 0.3px; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);">' +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>' +
      '@QuotexMaster' +
      '</a>' +
      '<a href="https://wa.me/8801823890514" target="_blank" style="display: flex; align-items: center; padding: 8px 18px; background: rgba(34,197,94,0.05); border: 1px solid rgba(34,197,94,0.12); border-radius: 30px; color: #6ee7b7; text-decoration: none; font-size: 12px; font-weight: 500; transition: all 0.35s ease; gap: 6px; letter-spacing: 0.3px; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);">' +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488z"/></svg>' +
      '+880 1823890514' +
      '</a>' +
      '</div>' +
      '<p style="margin: 12px 0 0 0; font-size: 9.5px; color: rgba(255,255,255,0.20); letter-spacing: 1.5px; text-transform: uppercase; font-weight: 500;">✦ Premium Code By QuotexMaster ✦</p>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<style>' +
      '@keyframes popupFade { from { transform: translateY(-30px) scale(0.92); opacity: 0; } to { transform: translateY(0) scale(1); opacity: 1; } }' +
      '@keyframes bgFade { from { opacity: 0; } to { opacity: 1; } }' +
      '@keyframes spin { to { transform: rotate(360deg); } }' +
      '@keyframes borderRotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }' +
      '@keyframes orbFloat { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(10px,-15px) scale(1.05); } }' +
      '@keyframes shimmerText { 0%,100% { background-position: 0% center; } 50% { background-position: 200% center; } }' +
      '@keyframes shimmerBtn { 0%,100% { opacity: 0; } 50% { opacity: 0.15; } }' +
      '@keyframes errorShake { 0%,100% { transform: translateX(0); } 10%,30%,50%,70%,90% { transform: translateX(-6px); } 20%,40%,60%,80% { transform: translateX(6px); } }' +
      '#license-input::placeholder { color: rgba(255,107,53,0.25); letter-spacing: 1.5px; font-weight: 300; }' +
      '#license-input:focus { border-color: rgba(255,107,53,0.50); background: rgba(255,107,53,0.06); box-shadow: 0 0 0 4px rgba(255,107,53,0.08), 0 4px 20px rgba(255,107,53,0.10); transform: scale(1.01); }' +
      '#license-input:hover { border-color: rgba(255,107,53,0.30); }' +
      '#license-submit:hover { transform: translateY(-2px) scale(1.01); box-shadow: 0 8px 35px rgba(255,107,53,0.40); }' +
      '#license-submit:active { transform: translateY(0) scale(0.98); box-shadow: 0 4px 20px rgba(255,107,53,0.25); }' +
      '#license-submit:disabled { opacity: 0.5; cursor: not-allowed; transform: none !important; box-shadow: 0 4px 20px rgba(255,107,53,0.12); }' +
      '.error-message-area { animation: errorShake 0.4s ease; }' +
      'a[href*="t.me"]:hover, a[href*="wa.me"]:hover { transform: translateY(-1px) scale(1.03); border-color: rgba(255,107,53,0.30); box-shadow: 0 4px 20px rgba(255,107,53,0.08); }' +
      'a[href*="t.me"]:hover { background: rgba(255,107,53,0.12); }' +
      'a[href*="wa.me"]:hover { background: rgba(34,197,94,0.10); border-color: rgba(34,197,94,0.20); }' +
      '@media (max-width: 480px) { #license-popup > div { max-width: calc(100vw - 24px); border-radius: 20px; } #license-popup > div > div:last-child { padding: 18px 18px 20px; } #license-popup > div > div:first-child { padding: 20px 18px 16px; } #license-input { font-size: 13px; padding: 12px 14px; letter-spacing: 1px; } #license-submit { font-size: 13px; padding: 12px 16px; } .watermark { bottom: 16px; right: 18px; font-size: 9px; } a[href*="t.me"], a[href*="wa.me"] { font-size: 11px; padding: 6px 14px; } }' +
      '</style>'),
      document['body']['appendChild'](readableVar0429));
    const readableVar0430 = localStorage['getItem'](functionMap['CACHED_LICENSE_KEY']);
    if (readableVar0430) {
      document['getElementById'](functionMap['LICENSE_INPUT_ID'])['value'] = readableVar0430;
      const readableVar0431 = document['querySelector'](functionMap['LICENSE_ERROR_SELECTOR']);
      (readableVar0431 && (readableVar0431['style']['display'] = functionMap['DISPLAY_NONE']),
        document['getElementById'](functionMap['LICENSE_SUBMIT_ID'])['click']());
    }
    (document['getElementById'](functionMap['LICENSE_SUBMIT_ID'])['addEventListener'](
      functionMap['CLICK_EVENT'],
      async () => {
        const readableVar0432 = null,
          readableVar0433 = document['getElementById'](functionMap['LICENSE_INPUT_ID'])
            ['value']['trim']()
            ['toUpperCase']();
        if (!readableVar0433) {
          functionMap['createElement3Args'](
            readableVar0384,
            functionMap['LICENSE_EMPTY_ERROR'],
            functionMap['LICENSE_POPUP_ID']
          );
          return;
        }
        const readableVar0434 = /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
        if (!readableVar0434['test'](readableVar0433)) {
          functionMap['createElement3ArgsAlt'](
            readableVar0384,
            functionMap['LICENSE_FORMAT_ERROR'],
            functionMap['LICENSE_POPUP_ID']
          );
          return;
        }
        ((document['getElementById'](functionMap['LICENSE_LOADING_CLASS'])['style']['display'] =
          functionMap['DISPLAY_BLOCK']),
          (document['getElementById'](functionMap['LICENSE_SUBMIT_ID'])['disabled'] = !![]));
        try {
          if (!readableVar0380) {
            const readableVar0435 = await functionMap['executeFunction2'](readableVar0381);
            if (!readableVar0435) {
              ((document['getElementById'](functionMap['LICENSE_LOADING_CLASS'])['style']['display'] =
                functionMap['DISPLAY_NONE']),
                (document['getElementById'](functionMap['LICENSE_SUBMIT_ID'])['disabled'] = ![]));
              return;
            }
          }
          const readableVar0436 = await functionMap['callFunctionWithArg'](readableVar0405, readableVar0433);
          if (readableVar0436['success']) {
            ((readableVar0378 = !![]),
              (readableVar0379 = readableVar0433),
              localStorage['setItem'](functionMap['CACHED_LICENSE_KEY'], readableVar0433));
            const readableVar0437 = document['querySelector'](functionMap['LICENSE_ERROR_SELECTOR']);
            (readableVar0437 && (readableVar0437['style']['display'] = functionMap['DISPLAY_NONE']),
              document['getElementById'](functionMap['LICENSE_POPUP_ID'])['remove'](),
              functionMap['execute'](readableVar0414),
              functionMap['createElement3Args'](
                setTimeout,
                readableVar0438,
                -0xf * -0x32 + 0x3ae * 0xa + -0x25c6
              ));
          } else
            (functionMap['equals'](readableVar0436['error'], functionMap['DEVICE_MISMATCH_ERROR'])
              ? functionMap['displayError3Args'](
                  readableVar0384,
                  functionMap['DEVICE_MISMATCH_MSG'],
                  functionMap['LICENSE_POPUP_ID']
                )
              : functionMap['showError3Args'](
                  readableVar0384,
                  functionMap['LICENSE_VERIFY_ERROR_MSG'],
                  functionMap['LICENSE_POPUP_ID']
                ),
              (document['getElementById'](functionMap['LICENSE_LOADING_CLASS'])['style']['display'] =
                functionMap['DISPLAY_NONE']),
              (document['getElementById'](functionMap['LICENSE_SUBMIT_ID'])['disabled'] = ![]));
        } catch (readableVar0439) {
          (functionMap['handleError3Args'](
            readableVar0384,
            functionMap['LICENSE_ERROR_MSG'],
            functionMap['LICENSE_POPUP_ID']
          ),
            (document['getElementById'](functionMap['LICENSE_LOADING_CLASS'])['style']['display'] =
              functionMap['DISPLAY_NONE']),
            (document['getElementById'](functionMap['LICENSE_SUBMIT_ID'])['disabled'] = ![]));
        }
      }
    ),
      document['getElementById'](functionMap['LICENSE_INPUT_ID'])['addEventListener'](
        functionMap['KEYPRESS_EVENT'],
        (readableVar0440) => {
          const readableVar0441 = null;
          readableVar0179['xPCWP'](readableVar0440['key'], readableVar0179['bmFHr']) &&
            document['getElementById'](readableVar0179['zzxpK'])['click']();
        }
      ),
      document['getElementById'](functionMap['LICENSE_INPUT_ID'])['addEventListener'](
        functionMap['INPUT_TAG'],
        () => {
          const readableVar0442 = null,
            readableVar0443 = document['querySelector'](readableVar0179['NhLFW']);
          readableVar0443 && (readableVar0443['style']['display'] = readableVar0179['OWYPk']);
        }
      ));
    function readableVar0438() {
      const readableVar0444 = null,
        readableVar0445 = {
          xWoMh: function (readableVar0446, readableVar0447) {
            const readableVar0448 = null;
            return functionMap['callFunction'](readableVar0446, readableVar0447);
          },
          ecney: functionMap['BALANCE_INPUT_ID'],
          WZYVK: functionMap['NAME_INPUT_ID'],
          eGHVo: functionMap['APP_NAME'],
          Aolrx: functionMap['FLAG_SELECT_ID'],
          kcryL: functionMap['AVATAR_INPUT_ID'],
          dJcQf: functionMap['GREENLINE_SLIDER_ID'],
          aSzmV: function (readableVar0449, readableVar0450) {
            const readableVar0451 = null;
            return functionMap['callFunction'](readableVar0449, readableVar0450);
          },
          UnDxu: function (readableVar0452, readableVar0453, readableVar0454) {
            const readableVar0455 = null;
            return functionMap['Ndhng'](readableVar0452, readableVar0453, readableVar0454);
          },
          pslpz: function (readableVar0456, readableVar0457) {
            const readableVar0458 = null;
            return functionMap['notEqual'](readableVar0456, readableVar0457);
          },
          yiDrG: functionMap['UNDEFINED_STRING'],
          EVSCe: functionMap['LEADERBOARD_UPDATE_MSG'],
          NOjnP: functionMap['CUSTOM_AVATAR_URL_KEY'],
          nSteD: functionMap['GREENLINE_WIDTH_KEY'],
          IOGsq: function (readableVar0459, readableVar0460) {
            const readableVar0461 = null;
            return functionMap['strictEqual'](readableVar0459, readableVar0460);
          },
          QBGuS: functionMap['FUNCTION_STRING'],
          rtXUP: functionMap['BALANCE_ERROR_SELECTOR'],
          fSfQT: functionMap['DISPLAY_NONE'],
          JtYli: functionMap['BALANCE_POPUP_ID'],
          VGhWQ: functionMap['STARTING_MSG'],
          uNUOB: function (readableVar0462) {
            const readableVar0463 = null;
            return functionMap['runFunc'](readableVar0462);
          },
          iFDJR: function (readableVar0464) {
            const readableVar0465 = null;
            return functionMap['executeFunc3'](readableVar0464);
          },
          XnDIg: function (readableVar0466, readableVar0467, readableVar0468) {
            const readableVar0469 = null;
            return functionMap['createElement3Args'](readableVar0466, readableVar0467, readableVar0468);
          },
          nQnGe: functionMap['BALANCE_INVALID_ERROR'],
          rPqdj: functionMap['ENTER_KEY'],
          nyNTr: functionMap['BALANCE_SUBMIT_ID'],
        },
        readableVar0470 = document['createElement'](functionMap['DIV_TAG']);
      // --- PREMIUM BALANCE POPUP (upgraded UI) ---
      ((readableVar0470['innerHTML'] =
        '<div id="balance-popup" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(8,8,18,0.92); display: flex; align-items: center; justify-content: center; z-index: 999999; font-family: \'Segoe UI\', \'Poppins\', Arial, sans-serif; animation: bgFade 0.5s ease; padding: 16px; backdrop-filter: blur(20px) saturate(180%); -webkit-backdrop-filter: blur(20px) saturate(180%);">' +
        '<div class="watermark" style="position: absolute; bottom: 24px; right: 28px; color: rgba(255,107,53,0.15); font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; z-index: 2;">✦ QuotexMaster</div>' +
        '<div style="background: linear-gradient(145deg, rgba(18,18,32,0.97), rgba(10,10,20,0.99)); padding: 0; border-radius: 28px; backdrop-filter: blur(40px) saturate(200%); -webkit-backdrop-filter: blur(40px) saturate(200%); border: 1px solid rgba(255,107,53,0.25); text-align: center; max-width: 420px; width: 100%; animation: popupFade 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); color: white; box-shadow: 0 30px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,107,53,0.08) inset, 0 0 60px rgba(255,107,53,0.06); overflow: hidden; position: relative; z-index: 3;">' +
        '<!-- Animated border -->' +
        '<div style="position: absolute; inset: -2px; border-radius: 30px; padding: 2px; background: conic-gradient(from 0deg, rgba(255,107,53,0.3), rgba(204,51,0,0.3), rgba(255,107,53,0.3), rgba(204,51,0,0.3), rgba(255,107,53,0.3)); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; pointer-events: none; animation: borderRotate 6s linear infinite; z-index: 0;"></div>' +
        '<!-- Orbs -->' +
        '<div style="position: absolute; top: -80px; right: -80px; width: 240px; height: 240px; background: radial-gradient(circle, rgba(255,107,53,0.10), transparent 70%); border-radius: 50%; pointer-events: none; z-index: 0; animation: orbFloat 8s ease-in-out infinite;"></div>' +
        '<div style="position: absolute; bottom: -100px; left: -100px; width: 280px; height: 280px; background: radial-gradient(circle, rgba(204,51,0,0.08), transparent 70%); border-radius: 50%; pointer-events: none; z-index: 0; animation: orbFloat 10s ease-in-out infinite reverse;"></div>' +
        '<!-- Header -->' +
        '<div style="position: relative; padding: 28px 28px 20px; background: linear-gradient(135deg, rgba(255,107,53,0.08), rgba(204,51,0,0.04)); border-bottom: 1px solid rgba(255,107,53,0.10); z-index: 1;">' +
        '<div style="display: flex; align-items: center; justify-content: center; gap: 16px;">' +
        '<div style="width: 60px; height: 60px; background: linear-gradient(135deg, #1a1a2e, #2d2d44); border-radius: 16px; display: flex; align-items: center; justify-content: center; border: 1.5px solid rgba(255,107,53,0.35); box-shadow: 0 8px 30px rgba(255,107,53,0.20), 0 0 0 1px rgba(255,107,53,0.05) inset; flex-shrink: 0; overflow: hidden;">' +
        '<div style="width: 42px; height: 42px; background: url(\'https://www.image2url.com/r2/default/images/1783060621579-373ada1f-269c-44bc-89d7-ca7e05c39360.png\') center/cover; border-radius: 10px;"></div>' +
        '</div>' +
        '<div style="text-align: left;">' +
        '<h1 style="margin: 0; font-size: 20px; font-weight: 700; background: linear-gradient(135deg, #FF6B35, #CC3300, #FF6B35); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: -0.3px; animation: shimmerText 3s ease-in-out infinite; line-height: 1.2;">Quotex Master</h1>' +
        '<p style="margin: 2px 0 0 0; font-size: 10px; color: rgba(255,107,53,0.60); font-weight: 500; text-transform: uppercase; letter-spacing: 2.5px; -webkit-text-fill-color: rgba(255,107,53,0.60);">✦ Premium Console Code ✦</p>' +
        '</div>' +
        '</div>' +
        '<div style="position: relative; margin-top: 16px; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,53,0.20), transparent);"></div>' +
        '</div>' +
        '<!-- Content -->' +
        '<div style="position: relative; padding: 24px 28px 26px; z-index: 1;">' +
        '<div style="margin-bottom: 16px;">' +
        '<label style="display: block; margin-bottom: 6px; color: rgba(255,255,255,0.9); font-weight: 500; text-align: left; font-size: 13px;">Starting Balance</label>' +
        '<input id="balance-input" type="number" placeholder="Here Your Starting Balance" style="width: 100%; padding: 14px 18px; border: 1.5px solid rgba(255,107,53,0.20); background: rgba(255,255,255,0.03); border-radius: 14px; font-size: 15px; color: #ffffff; text-align: center; outline: none; transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); box-sizing: border-box; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); box-shadow: 0 2px 12px rgba(0,0,0,0.20);">' +
        '</div>' +
        '<div style="margin-bottom: 16px;">' +
        '<label style="display: block; margin-bottom: 6px; color: rgba(255,255,255,0.9); font-weight: 500; text-align: left; font-size: 13px;">Display Name</label>' +
        '<input id="name-input" type="text" placeholder="Your Leaderboard Name" value="QuotexMaster" style="width: 100%; padding: 14px 18px; border: 1.5px solid rgba(255,107,53,0.20); background: rgba(255,255,255,0.03); border-radius: 14px; font-size: 15px; color: #ffffff; text-align: center; outline: none; transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); box-sizing: border-box; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); box-shadow: 0 2px 12px rgba(0,0,0,0.20);">' +
        '</div>' +
        '<div style="margin-bottom: 16px;">' +
        '<label style="display: block; margin-bottom: 6px; color: rgba(255,255,255,0.9); font-weight: 500; text-align: left; font-size: 13px;">Country Flag</label>' +
        '<select id="flag-select" style="width: 100%; padding: 14px 18px; border: 1.5px solid rgba(255,107,53,0.20); background: rgba(20,25,35,0.9); border-radius: 14px; font-size: 15px; color: #ffffff; outline: none; transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); box-sizing: border-box; cursor: pointer; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);">' +
        '<option value="flag-in">India</option>' +
        '<option value="flag-pk">Pakistan</option>' +
        '<option value="flag-bd">Bangladesh</option>' +
        '<option value="flag-np">Nepal</option>' +
        '<option value="flag-br">Brazil</option>' +
        '<option value="flag-id">Indonesia</option>' +
        '<option value="flag-ru">Russia</option>' +
        '<option value="flag-de">Germany</option>' +
        '<option value="flag-jp">Japan</option>' +
        '<option value="flag-us">United States</option>' +
        '<option value="flag-gb">United Kingdom</option>' +
        '<option value="flag-lk">Sri Lanka</option>' +
        '<option value="flag-ao">Angola</option>' +
        '</select>' +
        '</div>' +
        '<div style="margin-bottom: 16px;">' +
        '<label style="display: block; margin-bottom: 6px; color: rgba(255,255,255,0.9); font-weight: 500; text-align: left; font-size: 13px;">Green Line Width: <span id="greenline-value" style="color: #FF6B35;">50%</span></label>' +
        '<div style="display: flex; align-items: center; gap: 10px;">' +
        '<input id="greenline-slider" type="range" min="0" max="100" value="50" style="flex: 1; height: 4px; border-radius: 4px; background: linear-gradient(to right, #FF6B35 0%, #FF6B35 50%, rgba(255,107,53,0.2) 50%, rgba(255,107,53,0.2) 100%); outline: none; -webkit-appearance: none; appearance: none;">' +
        '<span style="font-size: 12px; color: rgba(255,255,255,0.6); min-width: 35px; text-align: right;">0-100</span>' +
        '</div>' +
        '</div>' +
        '<div style="margin-bottom: 18px;">' +
        '<label style="display: block; margin-bottom: 6px; color: rgba(255,255,255,0.9); font-weight: 500; text-align: left; font-size: 13px;">🖼️ Avatar URL (Optional)</label>' +
        '<input id="avatar-input" type="url" placeholder="https://image2url.com/image.png" style="width: 100%; padding: 14px 18px; border: 1.5px solid rgba(255,107,53,0.20); background: rgba(255,255,255,0.03); border-radius: 14px; font-size: 15px; color: #ffffff; text-align: center; outline: none; transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); box-sizing: border-box; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); box-shadow: 0 2px 12px rgba(0,0,0,0.20);">' +
        '</div>' +
        '<div class="error-message-area" style="display: none; margin-bottom: 16px; padding: 10px 16px; background: rgba(239,68,68,0.08); color: #fca5a5; border-radius: 12px; font-size: 12px; text-align: center; border: 1px solid rgba(239,68,68,0.15); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); font-weight: 500;"></div>' +
        '<button id="balance-submit" style="background: linear-gradient(135deg, #FF6B35, #CC3300, #FF6B35); background-size: 200% auto; color: #0a0a12; padding: 14px 20px; border: none; border-radius: 14px; cursor: pointer; font-size: 14px; font-weight: 700; width: 100%; box-shadow: 0 6px 28px rgba(255,107,53,0.30); transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); margin-bottom: 14px; letter-spacing: 1px; text-transform: uppercase;">🚀 Start Trading</button>' +
        '<div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255,107,53,0.10);">' +
        '<div style="display: flex; gap: 12px; justify-content: center; margin-bottom: 8px;">' +
        '<a href="https://t.me/QuotexMaster_Pro" target="_blank" style="display: flex; align-items: center; padding: 8px 18px; background: rgba(255,107,53,0.06); border: 1px solid rgba(255,107,53,0.12); border-radius: 30px; color: #FF6B35; text-decoration: none; font-size: 12px; font-weight: 500; transition: all 0.35s ease; gap: 6px; letter-spacing: 0.3px; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>' +
        '@QuotexMaster' +
        '</a>' +
        '<a href="https://wa.me/8801823890514" target="_blank" style="display: flex; align-items: center; padding: 8px 18px; background: rgba(34,197,94,0.05); border: 1px solid rgba(34,197,94,0.12); border-radius: 30px; color: #6ee7b7; text-decoration: none; font-size: 12px; font-weight: 500; transition: all 0.35s ease; gap: 6px; letter-spacing: 0.3px; backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);">' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488z"/></svg>' +
        '+880 1823890514' +
        '</a>' +
        '</div>' +
        '<p style="margin: 0; font-size: 9.5px; color: rgba(255,255,255,0.20); letter-spacing: 1.5px; text-transform: uppercase; font-weight: 500;">🚀 Premium Console Code By QuotexMaster</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<style>' +
        '#balance-input:focus, #name-input:focus, #avatar-input:focus { border-color: rgba(255,107,53,0.50); background: rgba(255,107,53,0.06); box-shadow: 0 0 0 4px rgba(255,107,53,0.08), 0 4px 20px rgba(255,107,53,0.10); transform: scale(1.01); }' +
        '#flag-select:focus { border-color: rgba(255,107,53,0.50); background: rgba(20,25,35,0.95); box-shadow: 0 0 0 4px rgba(255,107,53,0.08), 0 4px 20px rgba(255,107,53,0.10); transform: scale(1.01); }' +
        '#flag-select option { background: rgba(20,25,35,0.95); color: white; padding: 6px; }' +
        '#balance-submit:hover { transform: translateY(-2px) scale(1.01); box-shadow: 0 8px 35px rgba(255,107,53,0.40); }' +
        '#balance-submit:active { transform: translateY(0) scale(0.98); box-shadow: 0 4px 20px rgba(255,107,53,0.25); }' +
        '#greenline-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 16px; height: 16px; border-radius: 50%; background: linear-gradient(135deg, #FF6B35, #CC3300); cursor: pointer; border: 2px solid white; box-shadow: 0 2px 8px rgba(255,107,53,0.5); transition: all 0.2s ease; }' +
        '#greenline-slider::-webkit-slider-thumb:hover { transform: scale(1.2); box-shadow: 0 4px 12px rgba(255,107,53,0.7); }' +
        '#greenline-slider::-moz-range-thumb { width: 16px; height: 16px; border-radius: 50%; background: linear-gradient(135deg, #FF6B35, #CC3300); cursor: pointer; border: 2px solid white; box-shadow: 0 2px 8px rgba(255,107,53,0.5); transition: all 0.2s ease; }' +
        '#greenline-slider::-moz-range-thumb:hover { transform: scale(1.2); box-shadow: 0 4px 12px rgba(255,107,53,0.7); }' +
        '@media (max-width: 480px) { #balance-popup { padding: 10px; } #balance-popup > div { max-width: calc(100vw - 24px); border-radius: 20px; } #balance-popup input, #balance-popup select { font-size: 14px; padding: 12px 14px; } #balance-popup button { font-size: 14px; padding: 12px 16px; } }' +
        '</style>'),
        document['body']['appendChild'](readableVar0470));
      const readableVar0471 = functionMap['executeFunction2'](readableVar0472);
      ((document['getElementById'](functionMap['NAME_INPUT_ID'])['value'] =
        readableVar0471['customName']),
        (document['getElementById'](functionMap['FLAG_SELECT_ID'])['value'] =
          readableVar0471['customFlagCode']));
      readableVar0471['avatarUrl'] &&
        (document['getElementById'](functionMap['AVATAR_INPUT_ID'])['value'] =
          readableVar0471['avatarUrl']);
      const readableVar0473 = localStorage['getItem'](functionMap['GREENLINE_WIDTH_KEY']),
        readableVar0474 = document['getElementById'](functionMap['GREENLINE_SLIDER_ID']),
        readableVar0475 = document['getElementById'](functionMap['GREENLINE_VALUE_ID']);
      functionMap['notEqual'](readableVar0473, null) &&
        ((readableVar0474['value'] = readableVar0473),
        (readableVar0475['textContent'] = functionMap['add'](readableVar0473, '%')),
        functionMap['handleEventListener'](readableVar0476, readableVar0474, readableVar0473));
      function readableVar0476(readableVar0477, readableVar0478) {
        const readableVar0479 = null;
        readableVar0477['style']['background'] =
          'linear-gradient(to right, #FF6B35 0%, #FF6B35 ' +
          readableVar0478 +
          '%, rgba(255,107,53, 0.2) ' +
          readableVar0478 +
          '%, rgba(255,107,53, 0.2) 100%)';
      }
      readableVar0474['addEventListener'](functionMap['INPUT_TAG'], (readableVar0480) => {
        const readableVar0481 = null,
          readableVar0482 = readableVar0480['target']['value'];
        ((readableVar0475['textContent'] = readableVar0179['KHIwq'](readableVar0482, '%')),
          readableVar0179['SMFoX'](readableVar0476, readableVar0474, readableVar0482),
          readableVar0179['xPCWP'](
            typeof window['updateGreenLineWidth'],
            readableVar0179['aTfDj']
          ) &&
            window['updateGreenLineWidth'](readableVar0179['HAvQS'](parseFloat, readableVar0482)));
      });
      const readableVar0483 = document['querySelector'](functionMap['BALANCE_ERROR_SELECTOR']);
      readableVar0483 && (readableVar0483['style']['display'] = functionMap['DISPLAY_NONE']);
      (document['getElementById'](functionMap['BALANCE_SUBMIT_ID'])['addEventListener'](
        functionMap['CLICK_EVENT'],
        () => {
          const readableVar0484 = null,
            readableVar0485 = readableVar0445['xWoMh'](
              parseFloat,
              document['getElementById'](readableVar0445['ecney'])['value']
            ),
            readableVar0486 =
              document['getElementById'](readableVar0445['WZYVK'])['value']['trim']() ||
              readableVar0445['eGHVo'],
            readableVar0487 = document['getElementById'](readableVar0445['Aolrx'])['value'],
            readableVar0488 = document['getElementById'](readableVar0445['kcryL'])['value'][
              'trim'
            ](),
            readableVar0489 = readableVar0445['xWoMh'](
              parseFloat,
              document['getElementById'](readableVar0445['dJcQf'])['value']
            );
          if (!readableVar0445['aSzmV'](isNaN, readableVar0485)) {
            ((readableVar0377 = readableVar0485),
              readableVar0445['aSzmV'](readableVar0490, {
                customName: readableVar0486,
                customFlagCode: readableVar0487,
                avatarUrl: readableVar0488,
              }),
              readableVar0445['UnDxu'](readableVar0491, readableVar0486, readableVar0487));
            readableVar0445['pslpz'](typeof window['LeaderboardHack'], readableVar0445['yiDrG']) &&
              window['LeaderboardHack']['updateSettings'] &&
              (window['LeaderboardHack']['updateSettings'](
                readableVar0486,
                readableVar0487,
                readableVar0488
              ),
              console['log'](readableVar0445['EVSCe'], readableVar0486, readableVar0487));
            readableVar0488 && localStorage['setItem'](readableVar0445['NOjnP'], readableVar0488);
            localStorage['setItem'](readableVar0445['nSteD'], readableVar0489['toString']());
            readableVar0445['IOGsq'](
              typeof window['updateGreenLineWidth'],
              readableVar0445['QBGuS']
            ) && window['updateGreenLineWidth'](readableVar0489);
            const readableVar0492 = document['querySelector'](readableVar0445['rtXUP']);
            (readableVar0492 && (readableVar0492['style']['display'] = readableVar0445['fSfQT']),
              document['getElementById'](readableVar0445['JtYli'])['remove'](),
              readableVar0445['xWoMh'](readableVar0423, readableVar0445['VGhWQ']),
              readableVar0445['uNUOB'](readableVar0493),
              readableVar0445['iFDJR'](readableVar0494));
          } else
            readableVar0445['XnDIg'](
              readableVar0384,
              readableVar0445['nQnGe'],
              readableVar0445['JtYli']
            );
        }
      ),
        document['getElementById'](functionMap['BALANCE_INPUT_ID'])['addEventListener'](
          functionMap['KEYPRESS_EVENT'],
          (readableVar0495) => {
            const readableVar0496 = null;
            if (readableVar0445['IOGsq'](readableVar0495['key'], readableVar0445['rPqdj']))
              document['getElementById'](readableVar0445['nyNTr'])['click']();
          }
        ),
        document['getElementById'](functionMap['AVATAR_INPUT_ID'])['addEventListener'](
          functionMap['KEYPRESS_EVENT'],
          (readableVar0497) => {
            const readableVar0498 = null;
            if (readableVar0179['xPCWP'](readableVar0497['key'], readableVar0179['bmFHr']))
              document['getElementById'](readableVar0179['CLoCe'])['click']();
          }
        ));
      const readableVar0499 = () => {
        const readableVar0500 = null,
          readableVar0501 = document['querySelector'](readableVar0179['qwYaU']);
        readableVar0501 && (readableVar0501['style']['display'] = readableVar0179['OWYPk']);
      };
      (document['getElementById'](functionMap['BALANCE_INPUT_ID'])['addEventListener'](
        functionMap['INPUT_TAG'],
        readableVar0499
      ),
        document['getElementById'](functionMap['NAME_INPUT_ID'])['addEventListener'](
          functionMap['INPUT_TAG'],
          readableVar0499
        ),
        document['getElementById'](functionMap['AVATAR_INPUT_ID'])['addEventListener'](
          functionMap['INPUT_TAG'],
          readableVar0499
        ),
        document['getElementById'](functionMap['FLAG_SELECT_ID'])['addEventListener'](
          functionMap['CHANGE_EVENT'],
          readableVar0499
        ));
    }
    function readableVar0502() {
      const readableVar0503 = null,
        readableVar0504 = [
          readableVar0179['OVWSt'],
          readableVar0179['plaDR'],
          readableVar0179['WsPNx'],
          readableVar0179['zETPl'],
          readableVar0179['kxUJm'],
          readableVar0179['caetZ'],
          readableVar0179['bwdla'],
        ];
      let readableVar0505 = null;
      for (const readableVar0506 of readableVar0504) {
        readableVar0505 = document['querySelector'](readableVar0506);
        if (readableVar0505) break;
      }
      if (!readableVar0505) return null;
      const readableVar0507 = readableVar0179['zJyPr'](
        parseFloat,
        readableVar0505['textContent']['replace'](/[^\d.-]/g, '')
      );
      return readableVar0179['zJyPr'](isNaN, readableVar0507) ? null : readableVar0507;
    }
    function readableVar0508(readableVar0509) {
      const readableVar0510 = null;
      if (!readableVar0378 || functionMap['isEqual'](readableVar0377, null)) return;
      const readableVar0511 = [
        functionMap['SELECTOR_ORD28'],
        functionMap['SELECTOR_BWWCZ'],
        functionMap['SELECTOR_MONEY_CLASS'],
        functionMap['SELECTOR_HEADER_MONEY'],
        functionMap['SELECTOR_LEADERBOARD_MONEY'],
      ];
      let readableVar0512 = null;
      for (const readableVar0513 of readableVar0511) {
        readableVar0512 = document['querySelector'](readableVar0513);
        if (readableVar0512) break;
      }
      if (!readableVar0512) return;
      const readableVar0514 = functionMap['subtract'](readableVar0509, readableVar0377),
        readableVar0515 = functionMap['greaterOrEqual'](readableVar0514, 0x24 * 0x46 + -0x1e04 + 0x142c),
        readableVar0516 = Math['abs'](readableVar0514)['toLocaleString'](functionMap['LOCALE_EN_IN'], {
          minimumFractionDigits: 0x2,
          maximumFractionDigits: 0x2,
        }),
        readableVar0517 = readableVar0515 ? '$' + readableVar0516 : '-' + readableVar0516 + '$';
      readableVar0512['textContent'] = readableVar0517;
      readableVar0512['classList']['contains'](functionMap['CLASS_ORD28']) ||
      readableVar0512['classList']['contains'](functionMap['CLASS_BWWCZ']) ||
      readableVar0512['classList']['contains'](functionMap['CLASS_MONEY_FULL'])
        ? (readableVar0512['classList']['remove'](
            functionMap['CLASS_O8XRM'],
            functionMap['CLASS_LD4PW'],
            functionMap['CLASS_GREEN_FULL'],
            functionMap['CLASS_RED_FULL']
          ),
          readableVar0512['classList']['contains'](functionMap['CLASS_ORD28'])
            ? readableVar0512['classList']['add'](
                readableVar0515 ? functionMap['CLASS_O8XRM'] : functionMap['CLASS_O8XRM']
              )
            : readableVar0512['classList']['add'](
                readableVar0515
                  ? readableVar0512['classList']['contains'](functionMap['CLASS_BWWCZ'])
                    ? functionMap['CLASS_LD4PW']
                    : functionMap['CLASS_GREEN_FULL']
                  : readableVar0512['classList']['contains'](functionMap['CLASS_BWWCZ'])
                    ? functionMap['CLASS_LD4PW']
                    : functionMap['CLASS_RED_FULL']
              ))
        : (readableVar0512['classList']['remove'](
            functionMap['VAR_GREEN_COLOR'],
            functionMap['VAR_RED_COLOR']
          ),
          readableVar0512['classList']['add'](
            readableVar0515 ? functionMap['VAR_GREEN_COLOR'] : functionMap['VAR_RED_COLOR']
          ));
      !readableVar0515
        ? readableVar0512['style']['setProperty'](
            functionMap['CSS_COLOR_PROP'],
            functionMap['RED_COLOR_HEX'],
            functionMap['IMPORTANT_FLAG']
          )
        : readableVar0512['style']['setProperty'](
            functionMap['CSS_COLOR_PROP'],
            functionMap['GREEN_COLOR_HEX'],
            functionMap['IMPORTANT_FLAG']
          );
      if (!document['getElementById'](functionMap['PNL_COLOR_CLASS'])) {
        const readableVar0518 = document['createElement'](functionMap['STYLE_ATTR']);
        ((readableVar0518['id'] = functionMap['PNL_COLOR_CLASS']),
          (readableVar0518['textContent'] =
            '\n                    .ord28.o8xRM {\n                        color: ' +
            (readableVar0515 ? functionMap['GREEN_COLOR_HEX'] : functionMap['RED_COLOR_HEX']) +
            ' !important;\n                    }\n                    .BwWCZ.LD4pW {\n                        color: ' +
            (readableVar0515 ? functionMap['GREEN_COLOR_HEX'] : functionMap['RED_COLOR_HEX']) +
            ' !important;\n                    }\n                    .---react-features-Sidepanel-LeaderBoard-Position-styles-module__money--BwWCZ.---react-features-Sidepanel-LeaderBoard-Position-styles-module__red--LD4pW {\n                        color: #ff4757 !important;\n                    }\n                    .---react-features-Sidepanel-LeaderBoard-Position-styles-module__money--BwWCZ.---react-features-Sidepanel-LeaderBoard-Position-styles-module__green--LD4pW {\n                        color: #0faf59 !important;\n                    }\n                    .position__header-money.--red {\n                        color: #ff4757 !important;\n                    }\n                    .position__header-money.--green {\n                        color: #0faf59 !important;\n                    }\n                '),
          document['head']['appendChild'](readableVar0518));
      }
    }
    function readableVar0493() {
      const readableVar0519 = null,
        readableVar0520 = {
          lCSvh: function (readableVar0521) {
            const readableVar0522 = null;
            return readableVar0179['FWzZI'](readableVar0521);
          },
          azMee: function (readableVar0523, readableVar0524) {
            const readableVar0525 = null;
            return readableVar0179['vkfXu'](readableVar0523, readableVar0524);
          },
          TLEsp: function (readableVar0526, readableVar0527) {
            const readableVar0528 = null;
            return readableVar0179['lTIsl'](readableVar0526, readableVar0527);
          },
        };
      readableVar0179['SMFoX'](
        setInterval,
        () => {
          const readableVar0529 = null;
          if (!readableVar0378) return;
          const readableVar0530 = readableVar0520['lCSvh'](readableVar0502);
          if (
            readableVar0520['azMee'](readableVar0377, null) &&
            readableVar0520['azMee'](readableVar0530, null)
          )
            readableVar0520['TLEsp'](readableVar0508, readableVar0530);
        },
        -0x243b * 0x1 + -0x225 + 0x1 * 0x266a
      );
    }
    const readableVar0531 = functionMap['CUSTOM_MOD_SETTINGS_KEY'],
      readableVar0532 = [
        functionMap['SELECTOR_D6IJP'],
        functionMap['SELECTOR_XN5CX'],
        functionMap['SELECTOR_NAME_CLASS'],
        functionMap['SELECTOR_HEADER_NAME'],
        functionMap['SELECTOR_LEADERBOARD_NAME'],
      ];
    let readableVar0533 = functionMap['APP_NAME_2'],
      readableVar0534 = functionMap['FLAG_CLASS'];
    function readableVar0472() {
      const readableVar0535 = null;
      try {
        const readableVar0536 = localStorage['getItem'](readableVar0531);
        if (readableVar0536) {
          const readableVar0537 = JSON['parse'](readableVar0536);
          ((readableVar0533 = readableVar0537['customName'] || functionMap['APP_NAME_2']),
            (readableVar0534 = readableVar0537['customFlagCode'] || functionMap['FLAG_CLASS']));
          if (!readableVar0537['avatarUrl']) {
            const readableVar0538 = localStorage['getItem'](functionMap['CUSTOM_AVATAR_URL_KEY']);
            readableVar0538 && (readableVar0537['avatarUrl'] = readableVar0538);
          }
          return readableVar0537;
        }
      } catch {}
      const readableVar0539 = localStorage['getItem'](functionMap['CUSTOM_AVATAR_URL_KEY']);
      return {
        customName: readableVar0533,
        customFlagCode: readableVar0534,
        avatarUrl: functionMap['orOperator'](readableVar0539, null),
      };
    }
    function readableVar0490(readableVar0540) {
      const readableVar0541 = null;
      (localStorage['setItem'](readableVar0531, JSON['stringify'](readableVar0540)),
        (readableVar0533 = readableVar0540['customName'] || readableVar0533),
        (readableVar0534 = readableVar0540['customFlagCode'] || readableVar0534));
    }
    function readableVar0491(readableVar0542, readableVar0543) {
      const readableVar0544 = null;
      try {
        let readableVar0545 = document['querySelector'](readableVar0179['AfPQx']);
        if (!readableVar0545)
          for (const readableVar0546 of readableVar0532) {
            readableVar0545 = document['querySelector'](readableVar0546);
            if (readableVar0545) break;
          }
        if (!readableVar0545) return;
        const readableVar0547 = readableVar0545['querySelector'](readableVar0179['VAnFD']),
          readableVar0548 = readableVar0545['querySelector']('p');
        if (!readableVar0547) return;
        const readableVar0549 = readableVar0547['getAttribute'](readableVar0179['zdMdd']) || '',
          readableVar0550 = readableVar0548 ? readableVar0548['textContent']['trim']() : '';
        if (
          readableVar0179['xPCWP'](
            readableVar0545['dataset']['customized'],
            readableVar0179['Ogfic']
          ) &&
          readableVar0179['sbiKh'](readableVar0549, readableVar0543) &&
          readableVar0179['MbUsk'](readableVar0550, readableVar0542)
        )
          return;
        readableVar0547['setAttribute'](readableVar0179['zdMdd'], readableVar0543);
        const readableVar0551 = readableVar0543['replace'](readableVar0179['PSuRl'], '')[
          'toUpperCase'
        ]();
        readableVar0547['setAttribute'](readableVar0179['dlnBu'], 'Flag ' + readableVar0551);
        const readableVar0552 = readableVar0547['querySelector'](readableVar0179['eKedx']);
        if (readableVar0552) {
          const readableVar0553 = '/profile/images/flags.svg#' + readableVar0543;
          (readableVar0552['setAttribute'](readableVar0179['BZoTm'], readableVar0553),
            readableVar0552['setAttributeNS'](
              readableVar0179['KNolj'],
              readableVar0179['wQfSh'],
              readableVar0553
            ));
        }
        if (readableVar0548) readableVar0548['textContent'] = readableVar0542;
        else {
          const readableVar0554 = document['createElement']('p');
          ((readableVar0554['textContent'] = readableVar0542),
            readableVar0545['appendChild'](readableVar0554));
        }
        ((readableVar0545['dataset']['customized'] = readableVar0179['Ogfic']),
          console['log'](readableVar0179['BJXco'], readableVar0542, readableVar0543));
      } catch (readableVar0555) {
        console['error'](readableVar0179['lonBc'], readableVar0555);
      }
    }
    function readableVar0494() {
      const readableVar0556 = null,
        readableVar0557 = {
          luXsh: function (readableVar0558, readableVar0559, readableVar0560) {
            const readableVar0561 = null;
            return readableVar0179['Yrpkr'](readableVar0558, readableVar0559, readableVar0560);
          },
        },
        readableVar0562 = readableVar0179['FWzZI'](readableVar0472);
      readableVar0179['GDzOj'](
        readableVar0491,
        readableVar0562['customName'],
        readableVar0562['customFlagCode']
      );
      const readableVar0563 = new MutationObserver(() => {
        const readableVar0564 = null;
        readableVar0179['Yrpkr'](readableVar0491, readableVar0533, readableVar0534);
      });
      (readableVar0563['observe'](document['body'], {
        childList: !![],
        subtree: !![],
      }),
        readableVar0179['GDzOj'](
          setInterval,
          () => {
            const readableVar0565 = null;
            readableVar0557['luXsh'](readableVar0491, readableVar0533, readableVar0534);
          },
          0x2 * 0x48b + -0x2 * -0x106c + -0x2926
        ));
    }
    window['updateNameFlag'] = function (readableVar0566, readableVar0567) {
      const readableVar0568 = null;
      ((readableVar0533 = readableVar0566),
        (readableVar0534 = readableVar0567),
        functionMap['callFunctionWithArg'](readableVar0490, {
          customName: readableVar0566,
          customFlagCode: readableVar0567,
        }));
      const readableVar0569 = document['querySelector'](functionMap['SELECTOR_D6IJP']);
      (readableVar0569 && (readableVar0569['dataset']['customized'] = functionMap['FALSE_STRING']),
        functionMap['setProperty3Args'](readableVar0491, readableVar0566, readableVar0567),
        functionMap['notStrictEqual'](typeof window['LeaderboardHack'], functionMap['UNDEFINED_STRING']) &&
          window['LeaderboardHack']['updateSettings'] &&
          (window['LeaderboardHack']['updateSettings'](readableVar0566, readableVar0567, null),
          console['log'](functionMap['LEADERBOARD_UPDATE_MSG_2'], readableVar0566, readableVar0567)));
    };
    function readableVar0570() {
      const readableVar0571 = null,
        readableVar0572 = {
          bBOug: function (readableVar0573, readableVar0574) {
            const readableVar0575 = null;
            return readableVar0179['xPCWP'](readableVar0573, readableVar0574);
          },
          xkgUr: function (readableVar0576, readableVar0577) {
            const readableVar0578 = null;
            return readableVar0179['HIwOy'](readableVar0576, readableVar0577);
          },
          fdEvk: function (readableVar0579, readableVar0580) {
            const readableVar0581 = null;
            return readableVar0179['ENpTR'](readableVar0579, readableVar0580);
          },
          kDvyp: function (readableVar0582, readableVar0583) {
            const readableVar0584 = null;
            return readableVar0179['vlASL'](readableVar0582, readableVar0583);
          },
          bsjae: function (readableVar0585, readableVar0586) {
            const readableVar0587 = null;
            return readableVar0179['ovKtr'](readableVar0585, readableVar0586);
          },
          MMbsm: function (readableVar0588, readableVar0589) {
            const readableVar0590 = null;
            return readableVar0179['JlKGi'](readableVar0588, readableVar0589);
          },
        },
        readableVar0591 = {
          mobileMaxWidth: 0x300,
          liveColor: readableVar0179['PYfqj'],
          iconBase: readableVar0179['GvnLo'],
          icons: {
            low: readableVar0179['XamHp'],
            mid: readableVar0179['yoxTI'],
            high: readableVar0179['fdXus'],
          },
          usermenuSelector: readableVar0179['GdEnu'],
          balanceSelector: readableVar0179['DeIsW'],
          nameSelector: readableVar0179['cWSqe'],
          iconUseSelector: readableVar0179['RLYRw'],
        },
        readableVar0592 = {
          isMobile: readableVar0179['Vmeog'](
            window['innerWidth'],
            readableVar0591['mobileMaxWidth']
          ),
          liveText: readableVar0179['Vmeog'](
            window['innerWidth'],
            readableVar0591['mobileMaxWidth']
          )
            ? readableVar0179['xVPTP']
            : readableVar0179['MXaSL'],
          processedElements: new WeakSet(),
          lastBalance: new WeakMap(),
          lastIcon: new WeakMap(),
        },
        readableVar0593 = (readableVar0594) => {
          const readableVar0595 = null,
            readableVar0596 = readableVar0594?.['textContent'] || '';
          if (readableVar0592['lastBalance']['has'](readableVar0594)) {
            const readableVar0597 = readableVar0592['lastBalance']['get'](readableVar0594);
            if (readableVar0572['bBOug'](readableVar0597['text'], readableVar0596))
              return readableVar0597['value'];
          }
          const readableVar0598 =
            readableVar0572['xkgUr'](
              parseFloat,
              readableVar0596['replace'](/[^\d.]/g, '')['replace'](/,/g, '')
            ) || 0x26cf + 0x1e91 + -0x4560;
          return (
            readableVar0592['lastBalance']['set'](readableVar0594, {
              text: readableVar0596,
              value: readableVar0598,
            }),
            readableVar0598
          );
        },
        readableVar0599 = (readableVar0600) =>
          readableVar0600 >= 0x1 * 0x162f + -0x7ed * 0x1 + -0x7f * -0x32
            ? readableVar0591['icons']['high']
            : readableVar0600 >= 0x1 * -0x1939 + 0x102c + 0x1 * 0x1c95
              ? readableVar0591['icons']['mid']
              : readableVar0591['icons']['low'],
        readableVar0601 = (readableVar0602) => {
          const readableVar0603 = null,
            readableVar0604 = readableVar0602['querySelectorAll'](readableVar0591['nameSelector']),
            readableVar0605 = readableVar0602['querySelector'](readableVar0591['balanceSelector']),
            readableVar0606 = readableVar0602['querySelector'](readableVar0591['iconUseSelector']);
          if (readableVar0179['ENpTR'](!readableVar0605, !readableVar0606)) return;
          for (
            let readableVar0607 = -0x492 + -0x1 * -0x136f + 0x1 * -0xedd;
            readableVar0179['ZXVgG'](readableVar0607, readableVar0604['length']);
            readableVar0607++
          ) {
            ((readableVar0604[readableVar0607]['textContent'] = readableVar0592['liveText']),
              (readableVar0604[readableVar0607]['style']['color'] = readableVar0591['liveColor']));
          }
          const readableVar0608 = readableVar0179['HIwOy'](readableVar0593, readableVar0605),
            readableVar0609 = readableVar0179['HIwOy'](readableVar0599, readableVar0608),
            readableVar0610 = readableVar0179['KuJNG'](
              readableVar0591['iconBase'],
              readableVar0609
            ),
            readableVar0611 = readableVar0606['getAttribute'](readableVar0179['wQfSh']);
          readableVar0179['IuDAS'](readableVar0611, readableVar0610) &&
            (readableVar0606['setAttribute'](readableVar0179['wQfSh'], readableVar0610),
            readableVar0592['lastIcon']['delete'](readableVar0606));
        },
        readableVar0612 = () => {
          const readableVar0613 = null,
            readableVar0614 = document['querySelectorAll'](readableVar0591['usermenuSelector']);
          for (
            let readableVar0615 = 0x10df + 0xf26 + -0x493 * 0x7;
            readableVar0179['EuVvY'](readableVar0615, readableVar0614['length']);
            readableVar0615++
          )
            readableVar0179['zJyPr'](readableVar0601, readableVar0614[readableVar0615]);
        },
        readableVar0616 = (readableVar0617) => {
          const readableVar0618 = null,
            readableVar0619 = readableVar0617['querySelector'](readableVar0591['balanceSelector']),
            readableVar0620 = readableVar0617['querySelector'](readableVar0591['iconUseSelector']);
          if (readableVar0572['fdEvk'](!readableVar0619, !readableVar0620)) return;
          (readableVar0592['lastBalance']['delete'](readableVar0619),
            readableVar0572['xkgUr'](readableVar0601, readableVar0617));
        },
        readableVar0621 = () => {
          const readableVar0622 = null,
            readableVar0623 = {
              MBlvr: function (readableVar0624, readableVar0625) {
                const readableVar0626 = null;
                return readableVar0179['LDNJb'](readableVar0624, readableVar0625);
              },
              VHtSh: readableVar0179['WzQsg'],
              TnJdG: readableVar0179['NltcC'],
              MMnZK: function (readableVar0627, readableVar0628) {
                const readableVar0629 = null;
                return readableVar0179['jSXir'](readableVar0627, readableVar0628);
              },
            };
          document['querySelectorAll'](readableVar0591['usermenuSelector'])['forEach'](
            (readableVar0630) => {
              const readableVar0631 = null,
                readableVar0632 = readableVar0630['querySelector'](
                  readableVar0591['balanceSelector']
                );
              if (!readableVar0632 || readableVar0592['processedElements']['has'](readableVar0632))
                return;
              (readableVar0592['processedElements']['add'](readableVar0632),
                new MutationObserver((readableVar0633) => {
                  const readableVar0634 = null,
                    readableVar0635 = {
                      INRKE: function (readableVar0636, readableVar0637) {
                        const readableVar0638 = null;
                        return readableVar0623['MBlvr'](readableVar0636, readableVar0637);
                      },
                      FiCWB: readableVar0623['VHtSh'],
                      NYHDs: function (readableVar0639, readableVar0640) {
                        const readableVar0641 = null;
                        return readableVar0623['MBlvr'](readableVar0639, readableVar0640);
                      },
                      GkRSB: readableVar0623['TnJdG'],
                    };
                  let readableVar0642 = ![];
                  readableVar0633['forEach']((readableVar0643) => {
                    const readableVar0644 = null;
                    if (
                      readableVar0635['INRKE'](readableVar0643['type'], readableVar0635['FiCWB']) ||
                      readableVar0635['NYHDs'](readableVar0643['type'], readableVar0635['GkRSB'])
                    )
                      readableVar0642 = !![];
                  });
                  if (readableVar0642) readableVar0623['MMnZK'](readableVar0616, readableVar0630);
                })['observe'](readableVar0632, {
                  characterData: !![],
                  childList: !![],
                  subtree: !![],
                }));
            }
          );
        },
        readableVar0645 = () => {
          const readableVar0646 = null,
            readableVar0647 = {
              vshse: function (readableVar0648) {
                const readableVar0649 = null;
                return readableVar0179['tboWM'](readableVar0648);
              },
            };
          let readableVar0650 = new Set(),
            readableVar0651 = ![];
          const readableVar0652 = () => {
            const readableVar0653 = null;
            (readableVar0650['forEach']((readableVar0654) => readableVar0601(readableVar0654)),
              readableVar0650['clear'](),
              (readableVar0651 = ![]),
              readableVar0647['vshse'](readableVar0621));
          };
          new MutationObserver((readableVar0655) => {
            const readableVar0656 = null,
              readableVar0657 = {
                MCtft: function (readableVar0658, readableVar0659) {
                  const readableVar0660 = null;
                  return readableVar0572['kDvyp'](readableVar0658, readableVar0659);
                },
              };
            (readableVar0655['forEach']((readableVar0661) => {
              const readableVar0662 = null,
                readableVar0663 = {
                  Qcbka: function (readableVar0664, readableVar0665) {
                    const readableVar0666 = null;
                    return readableVar0657['MCtft'](readableVar0664, readableVar0665);
                  },
                };
              readableVar0661['addedNodes']['forEach']((readableVar0667) => {
                const readableVar0668 = null;
                if (
                  readableVar0663['Qcbka'](readableVar0667['nodeType'], 0x24fd + 0xdd6 + -0x32d2)
                ) {
                  if (
                    readableVar0667['matches'] &&
                    readableVar0667['matches'](readableVar0591['usermenuSelector'])
                  )
                    readableVar0650['add'](readableVar0667);
                  else {
                    if (readableVar0667['querySelectorAll']) {
                      const readableVar0669 = readableVar0667['querySelectorAll'](
                        readableVar0591['usermenuSelector']
                      );
                      readableVar0669['forEach']((readableVar0670) =>
                        readableVar0650['add'](readableVar0670)
                      );
                    }
                  }
                }
              });
            }),
              readableVar0572['bsjae'](readableVar0650['size'], -0x2501 + 0x182 * -0x8 + 0x3111) &&
                !readableVar0651 &&
                ((readableVar0651 = !![]),
                readableVar0572['MMbsm'](requestAnimationFrame, readableVar0652)));
          })['observe'](document['body'], {
            childList: !![],
            subtree: !![],
          });
        },
        readableVar0671 = () => {
          const readableVar0672 = null,
            readableVar0673 = readableVar0592['isMobile'];
          ((readableVar0592['isMobile'] = readableVar0179['Vmeog'](
            window['innerWidth'],
            readableVar0591['mobileMaxWidth']
          )),
            (readableVar0592['liveText'] = readableVar0592['isMobile']
              ? readableVar0179['xVPTP']
              : readableVar0179['MXaSL']),
            readableVar0179['FZtHs'](readableVar0673, readableVar0592['isMobile']) &&
              ((readableVar0592['processedElements'] = new WeakSet()),
              readableVar0179['viAxQ'](readableVar0612)));
        },
        readableVar0674 = () => {
          const readableVar0675 = null,
            readableVar0676 = {
              eSjup: function (readableVar0677, readableVar0678) {
                const readableVar0679 = null;
                return readableVar0179['JfLNO'](readableVar0677, readableVar0678);
              },
              vLBPE: function (readableVar0680, readableVar0681, readableVar0682) {
                const readableVar0683 = null;
                return readableVar0179['Yrpkr'](readableVar0680, readableVar0681, readableVar0682);
              },
            },
            readableVar0684 = document['querySelectorAll'](readableVar0591['usermenuSelector']);
          (readableVar0684['forEach'](readableVar0601),
            readableVar0179['TUYiz'](readableVar0621),
            readableVar0179['MYLVN'](readableVar0645));
          let readableVar0685;
          window['addEventListener'](readableVar0179['vmibC'], () => {
            const readableVar0686 = null;
            if (readableVar0685) readableVar0676['eSjup'](clearTimeout, readableVar0685);
            readableVar0685 = readableVar0676['vLBPE'](
              setTimeout,
              readableVar0671,
              0x19db + 0x1 * 0xc3b + 0x2 * -0x12d9
            );
          });
        };
      readableVar0179['jlqFy'](readableVar0674);
    }
    function readableVar0687() {
      'use strict';
      const readableVar0688 = null,
        readableVar0689 = {
          QYfKD: function (readableVar0690, readableVar0691) {
            const readableVar0692 = null;
            return functionMap['executeWithArg'](readableVar0690, readableVar0691);
          },
          iWxAN: function (readableVar0693, readableVar0694) {
            const readableVar0695 = null;
            return functionMap['callFunctionWithArg'](readableVar0693, readableVar0694);
          },
          nMfoP: functionMap['ZERO_CURRENCY'],
          rxjXJ: functionMap['LOCALE_EN_US'],
          NjOVF: functionMap['CURRENCY_TYPE'],
          lToHb: functionMap['CURRENCY_USD'],
          TTGbc: functionMap['SELECTOR_USER_MENU_RADIO'],
          AuXpm: functionMap['ACTIVE_CLASS'],
          UdQIL: functionMap['SELECTOR_BALANCE_BLOCK'],
          SkhEY: function (readableVar0696, readableVar0697) {
            const readableVar0698 = null;
            return functionMap['querySelector'](readableVar0696, readableVar0697);
          },
          HrFwr: function (readableVar0699, readableVar0700) {
            const readableVar0701 = null;
            return functionMap['callFunction'](readableVar0699, readableVar0700);
          },
          QKSLY: function (readableVar0702, readableVar0703) {
            const readableVar0704 = null;
            return functionMap['callFunctionWithArg'](readableVar0702, readableVar0703);
          },
          rmRYu: functionMap['SELECTOR_BALANCE_ALT'],
          NYFrl: function (readableVar0705, readableVar0706) {
            const readableVar0707 = null;
            return functionMap['executeWithArg'](readableVar0705, readableVar0706);
          },
          vaeeJ: function (readableVar0708, readableVar0709, readableVar0710) {
            const readableVar0711 = null;
            return functionMap['setStyle3Args'](readableVar0708, readableVar0709, readableVar0710);
          },
          mAsnp: functionMap['SELECTOR_MENU_ITEM'],
          dhHWK: function (readableVar0712, readableVar0713) {
            const readableVar0714 = null;
            return functionMap['querySelectorNone'](readableVar0712, readableVar0713);
          },
        };
      const readableVar0715 = functionMap['notStrictEqual2'](window['self'], window['top']),
        readableVar0716 = () => {
          const readableVar0717 = null;
          if (readableVar0179['xPCWP'](window['extensionDisabled'], !![])) return ![];
          const readableVar0718 = document['getElementById'](readableVar0179['JdQvp']);
          if (readableVar0718) return ![];
          return !![];
        };
      if (!functionMap['executeFunction2'](readableVar0716)) return;
      const readableVar0719 = (readableVar0720) => {
          const readableVar0721 = null,
            readableVar0722 = readableVar0689['QYfKD'](parseFloat, readableVar0720);
          if (readableVar0689['iWxAN'](isNaN, readableVar0722)) return readableVar0689['nMfoP'];
          return new Intl['NumberForm' + 'at'](readableVar0689['rxjXJ'], {
            style: readableVar0689['NjOVF'],
            currency: readableVar0689['lToHb'],
            minimumFractionDigits: 0x2,
            maximumFractionDigits: 0x2,
          })['format'](readableVar0722);
        },
        readableVar0723 = (readableVar0724) => {
          const readableVar0725 = null,
            readableVar0726 = {
              zxsfc: readableVar0179['peddb'],
              XiXya: readableVar0179['PnRgF'],
              DJmwE: readableVar0179['acTLG'],
            },
            readableVar0727 = readableVar0724['querySelectorAll'](readableVar0179['MgnfQ']),
            readableVar0728 = Array['from'](readableVar0727)['find'](
              (readableVar0729) =>
                readableVar0729['querySelector']('a.yBslY')?.['textContent']['trim']() ===
                'Demo Account'
            ),
            readableVar0730 = Array['from'](readableVar0727)['find'](
              (readableVar0731) =>
                readableVar0731['querySelector']('a.yBslY')?.['textContent']['trim']() ===
                'Live Account'
            );
          readableVar0727['forEach']((readableVar0732) => {
            const readableVar0733 = null;
            (readableVar0732['classList']['remove'](readableVar0726['zxsfc']),
              readableVar0732['querySelector'](readableVar0726['XiXya'])?.['classList']['remove'](
                readableVar0726['DJmwE']
              ));
          });
          readableVar0730 &&
            (readableVar0730['classList']['add'](readableVar0179['peddb']),
            readableVar0730['querySelector'](readableVar0179['PnRgF'])?.['classList']['add'](
              readableVar0179['acTLG']
            ));
          let readableVar0734 = 0xb1f + 0x1778 + -0x2297;
          if (readableVar0728) {
            const readableVar0735 = readableVar0728['querySelector'](readableVar0179['KnPMj']);
            if (
              readableVar0735 &&
              !readableVar0179['lTIsl'](
                isNaN,
                readableVar0179['LpBrt'](parseFloat, readableVar0735['value'])
              )
            )
              readableVar0734 = readableVar0179['AGhZm'](parseFloat, readableVar0735['value']);
            else {
              const readableVar0736 = readableVar0728['querySelector'](readableVar0179['hoGSh'])?.[
                'textContent'
              ];
              if (readableVar0736) {
                const readableVar0737 = readableVar0736['replace'](/[$,]/g, '');
                !readableVar0179['jSXir'](
                  isNaN,
                  readableVar0179['zJyPr'](parseFloat, readableVar0737)
                ) && (readableVar0734 = readableVar0179['WbKZw'](parseFloat, readableVar0737));
              }
            }
            const readableVar0738 = readableVar0728['querySelector'](readableVar0179['hoGSh']);
            readableVar0738 &&
              (readableVar0738['textContent'] = readableVar0179['JfLNO'](
                readableVar0719,
                0x1bf3 + -0xd85 + -0x6 * -0x41b
              ));
          }
          if (readableVar0730) {
            const readableVar0739 = readableVar0730['querySelector'](readableVar0179['hoGSh']);
            if (readableVar0739)
              readableVar0739['textContent'] = readableVar0179['AGhZm'](
                readableVar0719,
                readableVar0734
              );
          }
          readableVar0179['SMFoX'](readableVar0740, readableVar0724, readableVar0734);
        },
        readableVar0740 = (readableVar0741, readableVar0742) => {
          const readableVar0743 = null,
            readableVar0744 = readableVar0741['querySelector'](readableVar0179['VzbQC']);
          if (!readableVar0744) return;
          const readableVar0745 = readableVar0744['querySelector'](readableVar0179['PcWGV']),
            readableVar0746 = readableVar0744['querySelector'](readableVar0179['NeuPl']),
            readableVar0747 = readableVar0744['querySelector'](readableVar0179['AdTpF']),
            readableVar0748 = readableVar0747?.['querySelector'](readableVar0179['eKedx']);
          if (
            readableVar0179['amkPd'](!readableVar0745, !readableVar0746) ||
            !readableVar0747 ||
            !readableVar0748
          )
            return;
          const readableVar0749 =
            'https://' + window['location']['hostname'] + '/profile/images/spritemap.svg#';
          if (readableVar0179['YqZxw'](readableVar0742, 0x123a + -0x27f5 + 0x3ccb))
            ((readableVar0745['textContent'] = readableVar0179['Wssqf']),
              (readableVar0746['textContent'] = readableVar0179['ZaKWK']),
              readableVar0747['setAttribute'](readableVar0179['zdMdd'], readableVar0179['fdXus']),
              readableVar0748['setAttribute'](
                readableVar0179['wQfSh'],
                readableVar0179['KHIwq'](readableVar0749, readableVar0179['fdXus'])
              ));
          else
            readableVar0179['Lglkm'](readableVar0742, -0x15b * 0x17 + -0x1930 + 0x4be5 * 0x1)
              ? ((readableVar0745['textContent'] = readableVar0179['gtIxA']),
                (readableVar0746['textContent'] = readableVar0179['iKVcY']),
                readableVar0747['setAttribute'](readableVar0179['zdMdd'], readableVar0179['yoxTI']),
                readableVar0748['setAttribute'](
                  readableVar0179['wQfSh'],
                  readableVar0179['KuJNG'](readableVar0749, readableVar0179['yoxTI'])
                ))
              : ((readableVar0745['textContent'] = readableVar0179['HauZW']),
                (readableVar0746['textContent'] = readableVar0179['DVcFC']),
                readableVar0747['setAttribute'](readableVar0179['zdMdd'], readableVar0179['XamHp']),
                readableVar0748['setAttribute'](
                  readableVar0179['wQfSh'],
                  readableVar0179['KuJNG'](readableVar0749, readableVar0179['XamHp'])
                ));
        },
        readableVar0750 = (readableVar0751) => {
          const readableVar0752 = null,
            readableVar0753 = readableVar0751['querySelectorAll'](readableVar0689['TTGbc']),
            readableVar0754 = Array['from'](readableVar0753)['find']((readableVar0755) =>
              readableVar0755['querySelector']('a.usermenu__select-name')
                ?.['textContent']['trim']()
                ['includes']('Demo Account')
            ),
            readableVar0756 = Array['from'](readableVar0753)['find']((readableVar0757) =>
              readableVar0757['querySelector']('a.usermenu__select-name')
                ?.['textContent']['trim']()
                ['includes']('Live Account')
            );
          readableVar0753['forEach']((readableVar0758) =>
            readableVar0758['classList']['remove']('active')
          );
          if (readableVar0756) readableVar0756['classList']['add'](readableVar0689['AuXpm']);
          let readableVar0759 = 0x39f * 0x1 + -0x6ac * -0x1 + -0xa4b;
          if (readableVar0754) {
            const readableVar0760 = readableVar0754['querySelector'](readableVar0689['UdQIL']);
            if (readableVar0760) {
              const readableVar0761 = readableVar0760['textContent']
                ['replace'](/[$,]/g, '')
                ['trim']();
              !readableVar0689['SkhEY'](
                isNaN,
                readableVar0689['HrFwr'](parseFloat, readableVar0761)
              ) && (readableVar0759 = readableVar0689['QKSLY'](parseFloat, readableVar0761));
            }
          }
          if (readableVar0756) {
            const readableVar0762 = readableVar0756['querySelector'](readableVar0689['rmRYu']);
            readableVar0762 &&
              (readableVar0762['textContent'] = readableVar0689['NYFrl'](
                readableVar0719,
                readableVar0759
              ));
          }
          if (readableVar0754) {
            const readableVar0763 = readableVar0754['querySelector'](readableVar0689['UdQIL']);
            readableVar0763 &&
              (readableVar0763['textContent'] = readableVar0689['QKSLY'](
                readableVar0719,
                0x541 + 0x101a + 0x5e7 * 0x3
              ));
          }
          readableVar0689['vaeeJ'](readableVar0764, readableVar0751, readableVar0759);
        },
        readableVar0764 = (readableVar0765, readableVar0766) => {
          const readableVar0767 = null,
            readableVar0768 = readableVar0765['querySelector'](readableVar0179['BOUGR']);
          if (!readableVar0768) return;
          const readableVar0769 = readableVar0768['querySelector'](readableVar0179['mZzVT']),
            readableVar0770 = readableVar0768['querySelector'](readableVar0179['mKpDr']),
            readableVar0771 = readableVar0768['querySelector'](readableVar0179['ZSZWV']),
            readableVar0772 = readableVar0771?.['querySelector'](readableVar0179['eKedx']);
          if (
            readableVar0179['ENpTR'](!readableVar0769, !readableVar0770) ||
            !readableVar0771 ||
            !readableVar0772
          )
            return;
          const readableVar0773 =
            'https://' + window['location']['hostname'] + '/profile/images/spritemap.svg#';
          if (readableVar0179['AvQse'](readableVar0766, 0x4186 + -0x39fa + 0x1f84))
            ((readableVar0769['textContent'] = readableVar0179['Wssqf']),
              (readableVar0770['textContent'] = readableVar0179['ZaKWK']),
              readableVar0771['setAttribute'](readableVar0179['zdMdd'], readableVar0179['fdXus']),
              readableVar0772['setAttribute'](
                readableVar0179['wQfSh'],
                readableVar0179['VduVv'](readableVar0773, readableVar0179['fdXus'])
              ));
          else
            readableVar0179['oHdOX'](readableVar0766, 0x1ddd + 0x690 + -0x10e5)
              ? ((readableVar0769['textContent'] = readableVar0179['gtIxA']),
                (readableVar0770['textContent'] = readableVar0179['iKVcY']),
                readableVar0771['setAttribute'](readableVar0179['zdMdd'], readableVar0179['yoxTI']),
                readableVar0772['setAttribute'](
                  readableVar0179['wQfSh'],
                  readableVar0179['VduVv'](readableVar0773, readableVar0179['yoxTI'])
                ))
              : ((readableVar0769['textContent'] = readableVar0179['HauZW']),
                (readableVar0770['textContent'] = readableVar0179['DVcFC']),
                readableVar0771['setAttribute'](readableVar0179['zdMdd'], readableVar0179['XamHp']),
                readableVar0772['setAttribute'](
                  readableVar0179['wQfSh'],
                  readableVar0179['KHIwq'](readableVar0773, readableVar0179['XamHp'])
                ));
        },
        readableVar0774 = (readableVar0775) => {
          const readableVar0776 = null;
          if (readableVar0775['querySelector'](readableVar0689['mAsnp'])) {
            readableVar0689['HrFwr'](readableVar0723, readableVar0775);
            return;
          }
          if (readableVar0775['querySelector'](readableVar0689['TTGbc'])) {
            readableVar0689['dhHWK'](readableVar0750, readableVar0775);
            return;
          }
        },
        readableVar0777 = new MutationObserver((readableVar0778) => {
          const readableVar0779 = null;
          for (const readableVar0780 of readableVar0778) {
            for (const readableVar0781 of readableVar0780['addedNodes']) {
              readableVar0179['xPCWP'](
                readableVar0781['nodeType'],
                -0xb53 * 0x1 + -0x1079 + 0x287 * 0xb
              ) &&
                readableVar0781['querySelector'] &&
                (readableVar0781['querySelector'](readableVar0179['MgnfQ']) ||
                  readableVar0781['querySelector'](readableVar0179['WBqQL'])) &&
                readableVar0179['HIwOy'](readableVar0774, readableVar0781);
            }
          }
        });
      readableVar0777['observe'](document['body'], {
        childList: !![],
        subtree: !![],
      });
      const readableVar0782 = document['querySelector'](functionMap['SELECTOR_MENU_UL']),
        readableVar0783 = document['querySelector'](functionMap['SELECTOR_USER_MENU']);
      if (readableVar0782) functionMap['querySelectAll'](readableVar0774, readableVar0782);
      if (readableVar0783) functionMap['querySelector'](readableVar0774, readableVar0783);
    }
    function readableVar0784() {
      const readableVar0785 = null,
        readableVar0786 = {
          WNLPi: function (readableVar0787, readableVar0788) {
            const readableVar0789 = null;
            return readableVar0179['hmHnk'](readableVar0787, readableVar0788);
          },
          BzDbh: function (readableVar0790, readableVar0791) {
            const readableVar0792 = null;
            return readableVar0179['JfLNO'](readableVar0790, readableVar0791);
          },
          vRsrj: readableVar0179['TfsNr'],
          ehFtB: function (readableVar0793, readableVar0794) {
            const readableVar0795 = null;
            return readableVar0179['UieIz'](readableVar0793, readableVar0794);
          },
          Lxdwq: function (readableVar0796, readableVar0797) {
            const readableVar0798 = null;
            return readableVar0179['oTyWS'](readableVar0796, readableVar0797);
          },
          TpdNe: function (readableVar0799, readableVar0800) {
            const readableVar0801 = null;
            return readableVar0179['AGhZm'](readableVar0799, readableVar0800);
          },
          HhKJn: function (readableVar0802, readableVar0803) {
            const readableVar0804 = null;
            return readableVar0179['ovKtr'](readableVar0802, readableVar0803);
          },
          GtNvc: function (readableVar0805, readableVar0806) {
            const readableVar0807 = null;
            return readableVar0179['ZXVgG'](readableVar0805, readableVar0806);
          },
          bVjvk: function (readableVar0808, readableVar0809) {
            const readableVar0810 = null;
            return readableVar0179['jSXir'](readableVar0808, readableVar0809);
          },
          tTuWg: readableVar0179['rTwws'],
          YTReu: function (readableVar0811, readableVar0812) {
            const readableVar0813 = null;
            return readableVar0179['LDNJb'](readableVar0811, readableVar0812);
          },
          ePQtV: function (readableVar0814, readableVar0815) {
            const readableVar0816 = null;
            return readableVar0179['QKKvn'](readableVar0814, readableVar0815);
          },
          KchBq: function (readableVar0817, readableVar0818) {
            const readableVar0819 = null;
            return readableVar0179['dXRxI'](readableVar0817, readableVar0818);
          },
          RiyLA: function (readableVar0820, readableVar0821) {
            const readableVar0822 = null;
            return readableVar0179['qNoxs'](readableVar0820, readableVar0821);
          },
          MNslD: function (readableVar0823, readableVar0824) {
            const readableVar0825 = null;
            return readableVar0179['xJrJz'](readableVar0823, readableVar0824);
          },
          jtJRh: function (readableVar0826, readableVar0827) {
            const readableVar0828 = null;
            return readableVar0179['YqZxw'](readableVar0826, readableVar0827);
          },
          TRYhg: function (readableVar0829, readableVar0830) {
            const readableVar0831 = null;
            return readableVar0179['pCDlA'](readableVar0829, readableVar0830);
          },
          irKIp: function (readableVar0832, readableVar0833) {
            const readableVar0834 = null;
            return readableVar0179['PQbQx'](readableVar0832, readableVar0833);
          },
          LmOEM: function (readableVar0835, readableVar0836) {
            const readableVar0837 = null;
            return readableVar0179['PQbQx'](readableVar0835, readableVar0836);
          },
          OKneW: function (readableVar0838, readableVar0839) {
            const readableVar0840 = null;
            return readableVar0179['GUSUV'](readableVar0838, readableVar0839);
          },
          mfPMA: function (readableVar0841, readableVar0842) {
            const readableVar0843 = null;
            return readableVar0179['AvQse'](readableVar0841, readableVar0842);
          },
          wCqwn: function (readableVar0844, readableVar0845) {
            const readableVar0846 = null;
            return readableVar0179['umqqC'](readableVar0844, readableVar0845);
          },
          ABLGS: function (readableVar0847, readableVar0848) {
            const readableVar0849 = null;
            return readableVar0179['aWoco'](readableVar0847, readableVar0848);
          },
          ygqPo: function (readableVar0850, readableVar0851) {
            const readableVar0852 = null;
            return readableVar0179['GUSUV'](readableVar0850, readableVar0851);
          },
          cNgTf: function (readableVar0853, readableVar0854) {
            const readableVar0855 = null;
            return readableVar0179['oHdOX'](readableVar0853, readableVar0854);
          },
          elpER: function (readableVar0856, readableVar0857) {
            const readableVar0858 = null;
            return readableVar0179['xJrJz'](readableVar0856, readableVar0857);
          },
          FRkne: function (readableVar0859, readableVar0860) {
            const readableVar0861 = null;
            return readableVar0179['Gvuci'](readableVar0859, readableVar0860);
          },
          jMQJo: function (readableVar0862, readableVar0863) {
            const readableVar0864 = null;
            return readableVar0179['RXejp'](readableVar0862, readableVar0863);
          },
          alSUh: function (readableVar0865, readableVar0866) {
            const readableVar0867 = null;
            return readableVar0179['hrrAf'](readableVar0865, readableVar0866);
          },
          TtOPx: function (readableVar0868, readableVar0869) {
            const readableVar0870 = null;
            return readableVar0179['oEVQm'](readableVar0868, readableVar0869);
          },
          gLdbw: function (readableVar0871, readableVar0872) {
            const readableVar0873 = null;
            return readableVar0179['OOfbE'](readableVar0871, readableVar0872);
          },
          lrhBX: readableVar0179['Tuogg'],
          sRhuv: function (readableVar0874, readableVar0875) {
            const readableVar0876 = null;
            return readableVar0179['zJyPr'](readableVar0874, readableVar0875);
          },
        };
      if (window['extensionDisabled']) return;
      const readableVar0877 = 0x215e + -0x1 * -0x3b3 + -0x1338,
        readableVar0878 = readableVar0179['GKmpz'],
        readableVar0879 = readableVar0179['fPYOn'],
        readableVar0880 = readableVar0179['FyzyR'];
      let readableVar0881 = null,
        readableVar0882 = null,
        readableVar0883 = ![],
        readableVar0884 = null,
        readableVar0885 = -0x1 * 0x84d + -0x3 * -0xcfe + -0x1ead,
        readableVar0886 = -0x6b9 * -0x1 + 0x3 * -0xb5d + -0xe2 * -0x1f,
        readableVar0887 = null;
      try {
        const readableVar0888 = localStorage['getItem'](readableVar0179['Tuogg']);
        readableVar0179['SUSqX'](readableVar0888, null) &&
          ((readableVar0885 = readableVar0179['AGhZm'](parseFloat, readableVar0888)),
          readableVar0179['gSjmo'](readableVar0889, readableVar0885));
      } catch (readableVar0890) {}
      function readableVar0889(readableVar0891) {
        const readableVar0892 = null,
          readableVar0893 = document['querySelector'](readableVar0879);
        readableVar0893 &&
          (readableVar0893['style']['width'] = readableVar0179['KuJNG'](readableVar0891, '%'));
      }
      function readableVar0894(readableVar0895) {
        const readableVar0896 = null;
        (readableVar0179['YKVIs'](readableVar0887, readableVar0895)
          ? readableVar0886++
          : ((readableVar0886 = -0x38f * 0x4 + 0x1cc6 + -0xe8a),
            (readableVar0887 = readableVar0895)),
          (readableVar0179['oHdOX'](readableVar0886, 0x1f54 + 0x548 + -0x249a) ||
            !readableVar0883 ||
            readableVar0179['aAJAM'](readableVar0882, null)) &&
            (!readableVar0883 || readableVar0179['vkfXu'](readableVar0882, readableVar0895)) &&
            ((readableVar0884 = readableVar0895),
            readableVar0179['zJyPr'](readableVar0897, readableVar0895),
            (readableVar0882 = readableVar0895)));
      }
      function readableVar0897(readableVar0898) {
        const readableVar0899 = null,
          readableVar0900 = document['querySelector'](readableVar0880);
        if (readableVar0900) {
          readableVar0900['dataset']['rankCustomized'] = readableVar0179['Ogfic'];
          const readableVar0901 = [...readableVar0900['childNodes']]['filter'](
              (readableVar0902) =>
                readableVar0902['nodeType'] === Node['TEXT_NODE'] &&
                readableVar0902['textContent']['trim']() !== ''
            ),
            readableVar0903 = readableVar0179['QaoBx'](
              typeof readableVar0898,
              readableVar0179['wbsuB']
            )
              ? readableVar0898
              : readableVar0898['toString']();
          if (
            readableVar0179['dXRxI'](
              readableVar0901['length'],
              0x19a6 + 0x1 * -0x9ee + 0x1 * -0xfb8
            )
          ) {
            const readableVar0904 =
              readableVar0901[-0x1 * -0x26e1 + -0x8 * -0x263 + -0x1353 * 0x3]['textContent'][
                'trim'
              ]();
            readableVar0179['IuDAS'](readableVar0904, readableVar0903) &&
              (readableVar0901[0x1 * -0x2cb + -0x1907 + 0x4a3 * 0x6]['textContent'] =
                readableVar0903);
          } else {
            const readableVar0905 = readableVar0900['querySelector'](readableVar0179['txpuc']);
            readableVar0905 &&
              readableVar0900['appendChild'](document['createTextNode'](readableVar0903));
          }
        }
        readableVar0179['WbKZw'](readableVar0889, readableVar0885);
      }
      function readableVar0906() {
        const readableVar0907 = null,
          readableVar0908 = document['querySelector'](readableVar0878);
        if (!readableVar0908) return;
        let readableVar0909 = readableVar0786['WNLPi'](
          parseFloat,
          readableVar0908['textContent']['replace'](/[^\d.-]/g, '')
        );
        if (readableVar0786['BzDbh'](isNaN, readableVar0909)) {
          readableVar0883 && readableVar0786['WNLPi'](readableVar0894, readableVar0786['vRsrj']);
          return;
        }
        readableVar0786['ehFtB'](readableVar0909, readableVar0881) &&
          (readableVar0881 = readableVar0909);
        if (readableVar0786['Lxdwq'](readableVar0909, 0x19c1 + 0xd69 * 0x1 + -0x6 * 0x687)) {
          ((readableVar0883 = !![]),
            readableVar0786['TpdNe'](readableVar0894, readableVar0786['vRsrj']));
          return;
        }
        if (
          readableVar0786['HhKJn'](readableVar0909, -0x1c97 + 0x1ffa + -0x363) &&
          readableVar0786['GtNvc'](readableVar0909, 0x6b * 0x3 + 0x1511 * 0x1 + -0xa6 * 0x1d)
        ) {
          ((readableVar0883 = !![]),
            readableVar0786['bVjvk'](readableVar0894, readableVar0786['vRsrj']));
          return;
        }
        let readableVar0910 = [...document['querySelectorAll'](readableVar0786['tTuWg'])]
          ['map']((readableVar0911) => +readableVar0911['textContent']['replace'](/[^\d.-]/g, ''))
          ['filter']((readableVar0912) => !isNaN(readableVar0912));
        if (readableVar0786['YTReu'](readableVar0910['length'], -0x1306 + -0x6cb * -0x4 + -0x826))
          return;
        readableVar0910['sort'](
          (readableVar0913, readableVar0914) => readableVar0914 - readableVar0913
        );
        let readableVar0915 = readableVar0786['ePQtV'](
          readableVar0910['findIndex']((readableVar0916) => readableVar0909 >= readableVar0916),
          0x2 * -0xfa1 + 0x1c3d + 0x2b * 0x12
        );
        if (
          readableVar0786['KchBq'](readableVar0915, -0x32b + -0x7b1 + 0x22c * 0x5) &&
          readableVar0786['Lxdwq'](readableVar0915, 0x1793 + 0x1b * 0x33 + 0xa8 * -0x2c)
        ) {
          readableVar0786['RiyLA'](readableVar0915, 0x3 * -0x865 + 0x91e + 0x1012) &&
            readableVar0786['HhKJn'](
              readableVar0910['length'],
              -0x1238 + 0xf6b * 0x1 + -0x1 * -0x2ce
            ) &&
            readableVar0786['MNslD'](readableVar0909, readableVar0910[-0x26f6 + 0xf3c + 0x17ba]) &&
            (readableVar0915 = -0x79a + 0x133c * 0x1 + -0xba0);
          ((readableVar0883 = !![]), readableVar0786['TpdNe'](readableVar0894, readableVar0915));
          return;
        }
        const readableVar0917 =
          readableVar0910[-0x1f6 + 0x20b7 + -0x1eae] || -0x9c6 + -0x1 * -0x1907 + -0xf41;
        if (
          readableVar0786['jtJRh'](readableVar0909, 0xb * 0xe8 + -0xf62 + 0x8ee) &&
          readableVar0786['MNslD'](readableVar0909, -0x14b5 + -0xb7 + 0x1a80)
        ) {
          const readableVar0918 = readableVar0786['TRYhg'](
            readableVar0786['irKIp'](readableVar0909, 0x32b * -0x3 + -0x1438 * 0x1 + 0x1 * 0x213d),
            readableVar0786['LmOEM'](
              -0x1076 + -0xfd4 + 0x255e,
              -0x9f * -0x2f + 0x222c + -0x3 * 0x13f3
            )
          );
          readableVar0915 = Math['round'](
            readableVar0786['irKIp'](
              -0x23b * 0x1 + -0x63f + 0x8db * 0x1,
              readableVar0786['OKneW'](readableVar0918, -0x1 * -0x1ed2 + -0x1c81 + 0x1 * -0x24f)
            )
          );
        } else {
          if (
            readableVar0786['mfPMA'](readableVar0909, -0x7a * 0x41 + 0xd * -0x1bb + 0x3a8d) &&
            readableVar0786['MNslD'](readableVar0909, 0x2082 + 0x14e2 + -0x2d94)
          ) {
            const readableVar0919 = readableVar0786['wCqwn'](
              readableVar0786['irKIp'](readableVar0909, -0xf82 + 0xaf1 * 0x2 + -0x14c),
              readableVar0786['ABLGS'](
                -0xb12 + -0x745 * 0x4 + 0x2ff6,
                -0x11d5 * 0x2 + -0x1dc + 0x2a9a
              )
            );
            readableVar0915 = Math['round'](
              readableVar0786['irKIp'](
                -0xaf * 0x32 + -0x15 * 0x49 + 0x2889,
                readableVar0786['ygqPo'](readableVar0919, -0x2443 * -0x1 + 0x1d64 + -0x4199)
              )
            );
          } else {
            if (
              readableVar0786['cNgTf'](readableVar0909, 0x1 * -0x2345 + -0xd08 * 0x1 + 0x381d) &&
              readableVar0786['elpER'](readableVar0909, 0xda7 * -0x2 + -0xc79 * 0x1 + 0x32b7 * 0x1)
            ) {
              const readableVar0920 = readableVar0786['TRYhg'](
                readableVar0786['ABLGS'](readableVar0909, -0x6 * 0x4a5 + -0x316 + 0x26c4),
                readableVar0786['FRkne'](
                  0x14e + -0x369 * -0x6 + 0x42 * -0x2a,
                  -0x178d * 0x1 + -0x1667 + -0x8f6 * -0x6
                )
              );
              readableVar0915 = Math['round'](
                readableVar0786['jMQJo'](
                  0x1265 + -0x13 * 0x1c1 + -0x53 * -0x2f,
                  readableVar0786['ygqPo'](readableVar0920, -0x13cf + -0x349 * -0x9 + 0x1 * -0x9a5)
                )
              );
            } else {
              if (
                readableVar0786['cNgTf'](
                  readableVar0909,
                  -0x10e * -0xc + -0x25a6 * -0x1 + 0x275e * -0x1
                ) &&
                readableVar0786['MNslD'](readableVar0909, -0x1 * 0x48e + 0x170 * -0x5 + 0x1d * 0xd6)
              ) {
                const readableVar0921 = readableVar0786['alSUh'](
                  readableVar0786['FRkne'](readableVar0909, 0x9a0 + -0x1 * -0xb51 + -0x1 * 0xa01),
                  readableVar0786['FRkne'](
                    0x1195 + -0x1 * 0x1891 + 0xac * 0x1d,
                    -0x33d + -0x9d4 + 0x1801
                  )
                );
                readableVar0915 = Math['round'](
                  readableVar0786['FRkne'](
                    -0xd2f + 0x163b + -0x8db,
                    readableVar0786['TtOPx'](readableVar0921, 0x1 * -0xd7b + 0x1e2c + -0xfa * 0x11)
                  )
                );
              } else {
                if (
                  readableVar0786['gLdbw'](readableVar0909, 0x490 * -0x4 + -0xbff + 0x2abf) &&
                  readableVar0786['elpER'](readableVar0909, readableVar0917)
                ) {
                  const readableVar0922 = readableVar0786['alSUh'](
                    readableVar0786['LmOEM'](readableVar0909, -0x20d8 + 0x14cb * 0x1 + 0x188d),
                    readableVar0786['LmOEM'](
                      readableVar0917,
                      0x133f * -0x2 + -0x4b * -0x3d + 0x211f
                    )
                  );
                  readableVar0915 = Math['round'](
                    readableVar0786['jMQJo'](
                      0x2228 + -0xfe6 + -0x1229 * 0x1,
                      readableVar0786['TtOPx'](
                        readableVar0922,
                        -0xc09 + -0x25 * 0x65 + -0x9 * -0x2f6
                      )
                    )
                  );
                } else
                  readableVar0786['cNgTf'](readableVar0909, readableVar0917) &&
                    ((readableVar0915 = readableVar0786['ePQtV'](
                      readableVar0910['findIndex'](
                        (readableVar0923) => readableVar0909 >= readableVar0923
                      ),
                      -0x22d1 * 0x1 + 0x1 * -0x18d1 + 0x3ba3
                    )),
                    (!readableVar0915 ||
                      readableVar0786['KchBq'](
                        readableVar0915,
                        0x1c47 + -0x1 * -0x104e + -0x2c81
                      )) &&
                      (readableVar0915 = 0xa75 + -0xa55 + -0x1 * 0xc));
              }
            }
          }
        }
        ((readableVar0915 = Math['max'](
          0x8d * 0x13 + -0x1 * 0x22e9 + -0xb * -0x239,
          Math['min'](-0x162f + 0x1806 + 0x22 * -0xb, readableVar0915)
        )),
          (readableVar0883 = !![]),
          readableVar0786['WNLPi'](readableVar0894, readableVar0915));
      }
      function readableVar0924() {
        const readableVar0925 = null,
          readableVar0926 = {
            HnOYg: function (readableVar0927, readableVar0928) {
              const readableVar0929 = null;
              return readableVar0179['vlASL'](readableVar0927, readableVar0928);
            },
            GEmxx: readableVar0179['WzQsg'],
            uszJe: readableVar0179['NltcC'],
            PEgdm: function (readableVar0930, readableVar0931) {
              const readableVar0932 = null;
              return readableVar0179['PIgVl'](readableVar0930, readableVar0931);
            },
            CydLJ: function (readableVar0933, readableVar0934) {
              const readableVar0935 = null;
              return readableVar0179['UieIz'](readableVar0933, readableVar0934);
            },
            TaTkq: readableVar0179['Ogfic'],
            crRVC: function (readableVar0936, readableVar0937, readableVar0938) {
              const readableVar0939 = null;
              return readableVar0179['gjFvs'](readableVar0936, readableVar0937, readableVar0938);
            },
          },
          readableVar0940 = new MutationObserver((readableVar0941) => {
            const readableVar0942 = null,
              readableVar0943 = {
                klaSg: function (readableVar0944, readableVar0945) {
                  const readableVar0946 = null;
                  return readableVar0926['HnOYg'](readableVar0944, readableVar0945);
                },
                KbCYp: readableVar0926['GEmxx'],
                QDVis: readableVar0926['uszJe'],
                leBFm: function (readableVar0947, readableVar0948) {
                  const readableVar0949 = null;
                  return readableVar0926['PEgdm'](readableVar0947, readableVar0948);
                },
                HUoSP: function (readableVar0950, readableVar0951) {
                  const readableVar0952 = null;
                  return readableVar0926['CydLJ'](readableVar0950, readableVar0951);
                },
                uecKt: readableVar0926['TaTkq'],
                pKzDB: function (readableVar0953, readableVar0954, readableVar0955) {
                  const readableVar0956 = null;
                  return readableVar0926['crRVC'](
                    readableVar0953,
                    readableVar0954,
                    readableVar0955
                  );
                },
              };
            readableVar0941['forEach']((readableVar0957) => {
              const readableVar0958 = null;
              if (
                readableVar0943['klaSg'](readableVar0957['type'], readableVar0943['KbCYp']) ||
                readableVar0943['klaSg'](readableVar0957['type'], readableVar0943['QDVis'])
              ) {
                const readableVar0959 = document['querySelector'](readableVar0880);
                if (readableVar0959 && readableVar0943['leBFm'](readableVar0884, null)) {
                  const readableVar0960 = readableVar0959['textContent']['replace'](/[^\d]/g, '');
                  readableVar0943['leBFm'](readableVar0960, readableVar0884['toString']()) &&
                    readableVar0943['HUoSP'](
                      readableVar0959['dataset']['rankCustomized'],
                      readableVar0943['uecKt']
                    ) &&
                    readableVar0943['pKzDB'](
                      setTimeout,
                      () => readableVar0897(readableVar0884),
                      0x11e3 + 0x5 * -0x2f + -0x2 * 0x877
                    );
                }
              }
            });
          });
        readableVar0940['observe'](document['body'], {
          childList: !![],
          subtree: !![],
          characterData: !![],
        });
      }
      (readableVar0179['tboWM'](readableVar0924),
        readableVar0179['gjFvs'](
          setInterval,
          readableVar0906,
          -0x2 * -0x8c5 + -0x7 * -0x25 + 0x1161 * -0x1
        ),
        readableVar0179['Yrpkr'](
          setInterval,
          () => {
            const readableVar0961 = null;
            readableVar0179['lTIsl'](readableVar0889, readableVar0885);
          },
          0x1e2e + -0x136d + -0x8cd * 0x1
        ),
        (window['updateGreenLineWidth'] = function (readableVar0962) {
          const readableVar0963 = null;
          ((readableVar0885 = readableVar0962),
            localStorage['setItem'](readableVar0786['lrhBX'], readableVar0962['toString']()),
            readableVar0786['sRhuv'](readableVar0889, readableVar0885));
        }));
    }
    (functionMap['executeFunc7'](readableVar0570),
      functionMap['executeFunc8'](readableVar0687),
      functionMap['executeFunc5'](readableVar0784));
  }
  ((window['showErrorMessage'] = function (readableVar0964, readableVar0965 = null) {
    const readableVar0966 = null;
    if (readableVar0965) {
      if (functionMap['equals4'](typeof showErrorMessage, functionMap['FUNCTION_STRING'])) {
        functionMap['Ndhng'](showErrorMessage, readableVar0964, readableVar0965);
        return;
      }
    }
    const readableVar0967 = document['createElement'](functionMap['DIV_TAG']);
    ((readableVar0967['style']['cssText'] =
      "position: fixed; top: 20px; right: 20px; z-index: 999999; background: rgba(220, 53, 69, 0.95); color: white; padding: 15px 20px; border-radius: 8px; font-family: 'Segoe UI', Arial, sans-serif; font-weight: 600; font-size: 14px; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);"),
      (readableVar0967['innerHTML'] = readableVar0964),
      document['body']['appendChild'](readableVar0967),
      functionMap['showError3Args'](
        setTimeout,
        () => {
          const readableVar0968 = null;
          if (readableVar0967['parentNode']) readableVar0967['remove']();
        },
        0x2a * -0xb2 + 0x1 * -0x2479 + 0x1c67 * 0x3
      ));
  }),
    functionMap['executeFunction2'](readableVar0174));
})(),
  (function () {
    const readableVar0969 = null,
      readableVar0970 = {
        ToqVz: function (readableVar0971, readableVar0972) {
          return readableVar0971 !== readableVar0972;
        },
        eWGxZ: 'title',
        VZTnr: 'Live trading | Quotex',
        WpHYu: function (readableVar0973) {
          return readableVar0973();
        },
        ROCgJ: function (readableVar0974, readableVar0975, readableVar0976) {
          return readableVar0974(readableVar0975, readableVar0976);
        },
        bEptp: 'visibilitychange',
      };
    if (window['extensionDisabled']) return;
    const readableVar0977 = readableVar0970['VZTnr'];
    function readableVar0978() {
      const readableVar0979 = null;
      readableVar0970['ToqVz'](document['title'], readableVar0977) &&
        (document['title'] = readableVar0977);
    }
    readableVar0970['WpHYu'](readableVar0978);
    const readableVar0980 = new MutationObserver(readableVar0978);
    function readableVar0981() {
      const readableVar0982 = null,
        readableVar0983 = document['querySelector'](readableVar0970['eWGxZ']);
      if (readableVar0983)
        readableVar0980['observe'](readableVar0983, {
          childList: !![],
        });
      else {
        const readableVar0984 = document['createElement'](readableVar0970['eWGxZ']);
        ((readableVar0984['textContent'] = readableVar0977),
          document['head']['appendChild'](readableVar0984),
          readableVar0980['observe'](readableVar0984, {
            childList: !![],
          }));
      }
    }
    (readableVar0970['WpHYu'](readableVar0981),
      readableVar0970['ROCgJ'](setInterval, readableVar0978, -0x1028 + 0x1676 + -0x266),
      document['addEventListener'](readableVar0970['bEptp'], readableVar0978));
  })(),
  (function () {
    const readableVar0985 = null,
      readableVar0986 = {
        FOsse: function (readableVar0987, readableVar0988, readableVar0989) {
          return readableVar0987(readableVar0988, readableVar0989);
        },
        JbGxd: 'div',
        WtGkj: 'CYmPX',
        bMtsz: 'FdU8g',
        aTfXk: function (readableVar0990, readableVar0991) {
          return readableVar0990 === readableVar0991;
        },
        hPUxA: '<img src="/profile/images/top-gold.svg" alt="top-gold">',
        ntmDG: function (readableVar0992, readableVar0993) {
          return readableVar0992 === readableVar0993;
        },
        IsrQZ: '<img src="/profile/images/top-serebro.svg" alt="top-silver">',
        KKIEF: function (readableVar0994, readableVar0995) {
          return readableVar0994 === readableVar0995;
        },
        HOGrT: '<img src="/profile/images/top-bronza.svg" alt="top-bronze">',
        LASuA: ' _0J2mJ',
        jQSmV: function (readableVar0996, readableVar0997) {
          return readableVar0996 <= readableVar0997;
        },
        lahdL: 'flag-',
        kzxTq: function (readableVar0998, readableVar0999) {
          return readableVar0998 || readableVar0999;
        },
        vcqjO: function (readableVar1000, readableVar1001) {
          return readableVar1000(readableVar1001);
        },
        aOBRP: function (readableVar1002, readableVar1003) {
          return readableVar1002 < readableVar1003;
        },
        IKgOc: function (readableVar1004, readableVar1005) {
          return readableVar1004 > readableVar1005;
        },
        TmJXU: function (readableVar1006, readableVar1007) {
          return readableVar1006 < readableVar1007;
        },
        OgEMU: function (readableVar1008, readableVar1009) {
          return readableVar1008 || readableVar1009;
        },
        ZWxBP: 'flag-in',
        Scbvl: 'QuotexMaster',
        ifaeu: function (readableVar1010, readableVar1011) {
          return readableVar1010 || readableVar1011;
        },
        zLAPH: 'svg',
        cUTyX: function (readableVar1012, readableVar1013) {
          return readableVar1012 && readableVar1013;
        },
        URkig: 'class',
        eAGYk: function (readableVar1014, readableVar1015) {
          return readableVar1014 && readableVar1015;
        },
        SWwKx: '[Leaderboard] Using name:',
        EYezm: 'flag:',
        xEBlK: function (readableVar1016, readableVar1017) {
          return readableVar1016 === readableVar1017;
        },
        Gqllg: function (readableVar1018, readableVar1019) {
          return readableVar1018(readableVar1019);
        },
        xWsKb: function (readableVar1020, readableVar1021) {
          return readableVar1020 >= readableVar1021;
        },
        'xvhtP":\"$30,000.00\"+,\n    "IGZPZ': function (readableVar1022, readableVar1023) {
          return readableVar1022 === readableVar1023;
        },
        jSLPR: function (readableVar1024, readableVar1025) {
          return readableVar1024 === readableVar1025;
        },
        cjOCX: function (readableVar1026, readableVar1027) {
          return readableVar1026 !== readableVar1027;
        },
        dzVdf: function (readableVar1028, readableVar1029) {
          return readableVar1028 - readableVar1029;
        },
        hppsg: 'customModSettings',
        YbygJ: 'customAvatarUrl',
        kklCR: function (
          readableVar1030,
          readableVar1031,
          readableVar1032,
          readableVar1033,
          readableVar1034,
          readableVar1035
        ) {
          return readableVar1030(
            readableVar1031,
            readableVar1032,
            readableVar1033,
            readableVar1034,
            readableVar1035
          );
        },
        gzEsa: function (readableVar1036, readableVar1037) {
          return readableVar1036 - readableVar1037;
        },
        nGFyt: '[Leaderboard] Error replacing row:',
        VFCjT: function (readableVar1038) {
          return readableVar1038();
        },
        Rgjtn: function (readableVar1039, readableVar1040) {
          return readableVar1039 || readableVar1040;
        },
        HfhIM: function (readableVar1041, readableVar1042, readableVar1043) {
          return readableVar1041(readableVar1042, readableVar1043);
        },
        uFINk: function (readableVar1044, readableVar1045) {
          return readableVar1044 - readableVar1045;
        },
        mLCLd: function (readableVar1046, readableVar1047) {
          return readableVar1046 - readableVar1047;
        },
        SoFyF: function (readableVar1048, readableVar1049) {
          return readableVar1048(readableVar1049);
        },
        GIGbU: function (readableVar1050) {
          return readableVar1050();
        },
        rRfeP: '.tlUK7',
        NtGPI: '.CYmPX',
        giwxw: '.c_7BP',
        ZxlSz: '.d6ijp',
        ngiGz: '.ord28',
        Dyquh: function (readableVar1051) {
          return readableVar1051();
        },
      };
    if (window['extensionDisabled']) return;
    let readableVar1052 = null,
      readableVar1053 = null,
      readableVar1054 = null,
      readableVar1055 = ![],
      readableVar1056 = null,
      readableVar1057 = null,
      readableVar1058 = null,
      readableVar1059 = {},
      readableVar1060 = null,
      readableVar1061 = null,
      readableVar1062 = null,
      readableVar1063 = null,
      readableVar1064 = null;
    const readableVar1065 = readableVar0986['rRfeP'],
      readableVar1066 = readableVar0986['NtGPI'],
      readableVar1067 = readableVar0986['giwxw'],
      readableVar1068 = readableVar0986['ZxlSz'],
      readableVar1069 = readableVar0986['ngiGz'];
    function readableVar1070(readableVar1071) {
      const readableVar1072 = null,
        readableVar1073 = readableVar1071['textContent'] || readableVar1071['innerText'] || '',
        readableVar1074 = readableVar1073['match'](/\d+/);
      return readableVar1074
        ? readableVar0986['FOsse'](
            parseInt,
            readableVar1074[-0x19 * -0xa7 + 0x1 * 0x202e + 0x307d * -0x1],
            -0x184f + 0x15 * -0xa1 + 0x258e
          )
        : null;
    }
    function readableVar1075(
      readableVar1076,
      readableVar1077,
      readableVar1078,
      readableVar1079,
      readableVar1080
    ) {
      const readableVar1081 = null,
        readableVar1082 = document['createElement'](readableVar0986['JbGxd']);
      readableVar1082['className'] = readableVar0986['WtGkj'];
      let readableVar1083 = '',
        readableVar1084 = readableVar0986['bMtsz'];
      if (readableVar0986['aTfXk'](readableVar1076, 0x1945 * -0x1 + -0x24b * 0xa + 0x3034))
        readableVar1083 = readableVar0986['hPUxA'];
      else {
        if (readableVar0986['ntmDG'](readableVar1076, -0x1 * -0x718 + -0x1d7b * -0x1 + -0x2491))
          readableVar1083 = readableVar0986['IsrQZ'];
        else
          readableVar0986['KKIEF'](readableVar1076, 0xebf + 0x21d8 + -0x3094 * 0x1)
            ? (readableVar1083 = readableVar0986['HOGrT'])
            : ((readableVar1084 += readableVar0986['LASuA']),
              (readableVar1083 =
                '<div class="' + readableVar1084 + '\x22>' + readableVar1076 + '<\/div>'));
      }
      const readableVar1085 = readableVar0986['jQSmV'](
        readableVar1076,
        0xf76 + -0x245 * 0xd + 0xe0e * 0x1
      )
        ? readableVar1083 + '<div class="' + readableVar1084 + '\x22>' + readableVar1076 + '<\/div>'
        : readableVar1083;
      let readableVar1086;
      return (
        readableVar1079 && readableVar1079['trim']()
          ? (readableVar1086 = '<img src="' + readableVar1079 + '" alt="avatar">')
          : (readableVar1086 =
              '<svg class="icon-avatar-default"><use xlink:href="/profile/images/spritemap.svg#icon-avatar-default"><\/use><\/svg>'),
        (readableVar1082['innerHTML'] =
          '<div class="bCjpw"><\/div><div class="spCR5"><div class="anZcM">' +
          readableVar1085 +
          '<\/div><div class="HPYiu"><svg class="' +
          readableVar1078 +
          '" aria-label="Flag ' +
          readableVar1078['replace'](readableVar0986['lahdL'], '')['toUpperCase']() +
          '"><use href="/profile/images/flags.svg#' +
          readableVar1078 +
          '"><\/use><\/svg><div class="QyASJ">' +
          readableVar1086 +
          '<\/div><\/div><div class="hKWVz">' +
          readableVar1077 +
          '<\/div><\/div><div class="ePgNa iXGFm">' +
          readableVar1080 +
          '<\/div>'),
        readableVar1082
      );
    }
    function readableVar1087() {
      const readableVar1088 = null;
      if (
        readableVar0986['kzxTq'](!readableVar1061, !readableVar1062) ||
        !readableVar1063 ||
        !readableVar1064
      )
        return;
      const readableVar1089 = readableVar0986['vcqjO'](readableVar1070, readableVar1064);
      if (
        !readableVar1089 ||
        readableVar0986['aOBRP'](readableVar1089, 0xbf * -0x11 + 0x5fb * -0x5 + 0x2a97 * 0x1) ||
        readableVar0986['IKgOc'](readableVar1089, -0xcba * -0x1 + -0x6e3 * 0x5 + 0x1fb * 0xb)
      )
        return;
      const readableVar1090 = readableVar1061['querySelectorAll'](readableVar1066);
      if (readableVar0986['TmJXU'](readableVar1090['length'], readableVar1089)) return;
      let readableVar1091 = readableVar0986['OgEMU'](readableVar1054, readableVar0986['ZWxBP']),
        readableVar1092 = readableVar0986['OgEMU'](readableVar1053, readableVar0986['Scbvl']);
      if (readableVar0986['ifaeu'](!readableVar1053, !readableVar1054)) {
        const readableVar1093 = document['querySelector'](readableVar1068);
        if (readableVar1093) {
          const readableVar1094 = readableVar1093['querySelector'](readableVar0986['zLAPH']),
            readableVar1095 = readableVar1093['querySelector']('p');
          (readableVar0986['cUTyX'](!readableVar1054, readableVar1094) &&
            (readableVar1091 =
              readableVar1094['getAttribute'](readableVar0986['URkig']) ||
              readableVar0986['ZWxBP']),
            readableVar0986['eAGYk'](!readableVar1053, readableVar1095) &&
              (readableVar1092 =
                readableVar1095['textContent']['trim']() || readableVar0986['Scbvl']));
        }
      }
      console['log'](
        readableVar0986['SWwKx'],
        readableVar1092,
        readableVar0986['EYezm'],
        readableVar1091
      );
      const readableVar1096 = readableVar1063['textContent']['trim']();
      let readableVar1097 = readableVar1096;
      if (
        readableVar0986['xEBlK'](readableVar1089, -0x25 * 0x53 + -0x11 * 0x171 + -0x1 * -0x2481)
      ) {
        const readableVar1098 = readableVar0986['Gqllg'](
          parseFloat,
          readableVar1096['replace'](/[$,]/g, '')
        );
        readableVar0986['xWsKb'](readableVar1098, 0x8 * -0xa88 + 0x343d + 0x9533) &&
          (readableVar1097 = readableVar0986['xvhtP']);
      }
      const readableVar1099 =
        readableVar1089 + '|' + readableVar1092 + '|' + readableVar1091 + '|' + readableVar1097;
      if (
        readableVar0986['IGZPZ'](readableVar1060, readableVar1099) &&
        readableVar0986['jSLPR'](readableVar1058, readableVar1089)
      )
        return;
      if (
        readableVar1058 &&
        readableVar0986['cjOCX'](readableVar1058, readableVar1089) &&
        readableVar1059[readableVar1058]
      ) {
        const readableVar1100 = readableVar1061['querySelectorAll'](readableVar1066);
        readableVar1100[
          readableVar0986['dzVdf'](readableVar1058, -0x3c5 * 0xa + 0x23a3 * 0x1 + 0xb * 0x30)
        ] &&
          (readableVar1061['replaceChild'](
            readableVar1059[readableVar1058],
            readableVar1100[
              readableVar0986['dzVdf'](readableVar1058, -0xd * -0x4e + -0x37d * -0xb + -0x2a54)
            ]
          ),
          delete readableVar1059[readableVar1058]);
      }
      !readableVar1059[readableVar1089] &&
        (readableVar1059[readableVar1089] = readableVar1090[
          readableVar0986['dzVdf'](readableVar1089, 0x771 + 0x7d + 0x1 * -0x7ed)
        ]['cloneNode'](!![]));
      let readableVar1101 = readableVar1052;
      if (!readableVar1101)
        try {
          const readableVar1102 = JSON['parse'](
            localStorage['getItem'](readableVar0986['hppsg']) || '{}'
          );
          readableVar1101 =
            readableVar1102['avatarUrl'] || localStorage['getItem'](readableVar0986['YbygJ']);
        } catch (readableVar1103) {
          readableVar1101 = null;
        }
      const readableVar1104 = readableVar0986['kklCR'](
        readableVar1075,
        readableVar1089,
        readableVar1092,
        readableVar1091,
        readableVar1101,
        readableVar1097
      );
      try {
        (readableVar1061['replaceChild'](
          readableVar1104,
          readableVar1090[readableVar0986['gzEsa'](readableVar1089, 0x13f3 + -0x1689 + 0xdd * 0x3)]
        ),
          (readableVar1058 = readableVar1089),
          (readableVar1060 = readableVar1099));
      } catch (readableVar1105) {
        console['error'](readableVar0986['nGFyt'], readableVar1105);
      }
    }
    function readableVar1106() {
      const readableVar1107 = null,
        readableVar1108 = {
          fCmYd: function (readableVar1109) {
            const readableVar1110 = null;
            return readableVar0986['VFCjT'](readableVar1109);
          },
        };
      if (readableVar1055) return;
      ((readableVar1061 = document['querySelector'](readableVar1065)),
        (readableVar1062 = document['querySelector'](readableVar1068)),
        (readableVar1063 = document['querySelector'](readableVar1069)),
        (readableVar1064 = document['querySelector'](readableVar1067)));
      if (
        readableVar0986['Rgjtn'](!readableVar1061, !readableVar1062) ||
        !readableVar1063 ||
        !readableVar1064
      ) {
        readableVar0986['FOsse'](
          setTimeout,
          () => {
            const readableVar1111 = null;
            if (!readableVar1055) readableVar1108['fCmYd'](readableVar1106);
          },
          0x3 * -0x1cf + -0x109d * -0x1 + -0xafe
        );
        return;
      }
      ((readableVar1055 = !![]),
        readableVar0986['VFCjT'](readableVar1087),
        (readableVar1056 = readableVar0986['FOsse'](
          setInterval,
          readableVar1087,
          -0x2 * 0xa61 + 0x15 * -0xa3 + -0x1b * -0x14b
        )));
    }
    function readableVar1112() {
      const readableVar1113 = null;
      if (!readableVar1055) return;
      readableVar1055 = ![];
      readableVar1056 &&
        (readableVar0986['Gqllg'](clearInterval, readableVar1056), (readableVar1056 = null));
      if (readableVar1061) {
        const readableVar1114 = readableVar1061['querySelectorAll'](readableVar1066);
        Object['keys'](readableVar1059)['forEach']((readableVar1115) => {
          const readableVar1116 = null,
            readableVar1117 = readableVar0986['HfhIM'](
              parseInt,
              readableVar1115,
              0x1 * -0x1ebf + 0x1 * 0x87b + -0x5 * -0x476
            );
          readableVar1114[
            readableVar0986['uFINk'](readableVar1117, 0x10c + 0x9 * -0x3e5 + 0x2202)
          ] &&
            readableVar1059[readableVar1117] &&
            readableVar1061['replaceChild'](
              readableVar1059[readableVar1117],
              readableVar1114[
                readableVar0986['mLCLd'](readableVar1117, 0x10f * 0xe + 0x1bd9 + -0x2aaa)
              ]
            );
        });
      }
      ((readableVar1059 = {}), (readableVar1058 = null), (readableVar1060 = null));
    }
    function readableVar1118() {
      const readableVar1119 = null,
        readableVar1120 = document['querySelector'](readableVar1065),
        readableVar1121 = document['querySelector'](readableVar1068),
        readableVar1122 = document['querySelector'](readableVar1069),
        readableVar1123 = document['querySelector'](readableVar1067),
        readableVar1124 =
          readableVar0986['cUTyX'](readableVar1120, readableVar1121) &&
          readableVar1122 &&
          readableVar1123;
      if (readableVar0986['cUTyX'](readableVar1124, !readableVar1055))
        readableVar0986['VFCjT'](readableVar1106);
      else
        readableVar0986['eAGYk'](!readableVar1124, readableVar1055) &&
          readableVar0986['VFCjT'](readableVar1112);
    }
    function readableVar1125() {
      const readableVar1126 = null;
      (readableVar1057 && readableVar0986['Gqllg'](clearInterval, readableVar1057),
        readableVar0986['VFCjT'](readableVar1118),
        (readableVar1057 = readableVar0986['HfhIM'](
          setInterval,
          readableVar1118,
          0x3 * -0x6e5 + 0x1759 + 0xc2 * -0x3
        )));
    }
    function readableVar1127() {
      const readableVar1128 = null;
      (readableVar1057 &&
        (readableVar0986['SoFyF'](clearInterval, readableVar1057), (readableVar1057 = null)),
        readableVar1055 && readableVar0986['VFCjT'](readableVar1112));
    }
    function readableVar1129() {
      const readableVar1130 = null;
      try {
        const readableVar1131 = JSON['parse'](
          localStorage['getItem'](readableVar0986['hppsg']) || '{}'
        );
        ((readableVar1053 = readableVar1131['customName']),
          (readableVar1054 = readableVar1131['customFlagCode']),
          (readableVar1052 =
            readableVar1131['avatarUrl'] || localStorage['getItem'](readableVar0986['YbygJ'])));
      } catch (readableVar1132) {
        readableVar1052 = localStorage['getItem'](readableVar0986['YbygJ']);
      }
    }
    (readableVar0986['Dyquh'](readableVar1129),
      readableVar0986['VFCjT'](readableVar1125),
      (window['LeaderboardHack'] = {
        start: readableVar1125,
        stop: readableVar1127,
        updateSettings: (readableVar1133, readableVar1134, readableVar1135) => {
          const readableVar1136 = null;
          ((readableVar1053 = readableVar1133), (readableVar1054 = readableVar1134));
          if (readableVar1135) readableVar1052 = readableVar1135;
          if (readableVar1055) readableVar0986['GIGbU'](readableVar1087);
        },
      }));
  })());
