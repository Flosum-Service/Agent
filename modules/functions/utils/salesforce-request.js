const a60_0x2e066c=a60_0x4717;(function(_0x44a0a0,_0xcf718a){const _0x56c453=a60_0x4717,_0x545b32=_0x44a0a0();while(!![]){try{const _0x58105d=-parseInt(_0x56c453(0x1b7))/0x1*(parseInt(_0x56c453(0x1a1))/0x2)+parseInt(_0x56c453(0x1b5))/0x3*(-parseInt(_0x56c453(0x1a2))/0x4)+-parseInt(_0x56c453(0x199))/0x5+parseInt(_0x56c453(0x1a4))/0x6*(parseInt(_0x56c453(0x1b6))/0x7)+-parseInt(_0x56c453(0x1b2))/0x8+-parseInt(_0x56c453(0x18b))/0x9*(parseInt(_0x56c453(0x18d))/0xa)+-parseInt(_0x56c453(0x1ae))/0xb*(-parseInt(_0x56c453(0x1a7))/0xc);if(_0x58105d===_0xcf718a)break;else _0x545b32['push'](_0x545b32['shift']());}catch(_0x171265){_0x545b32['push'](_0x545b32['shift']());}}}(a60_0x3cd6,0xbac2b));const a60_0xf7765e=(function(){let _0x9977a5=!![];return function(_0x57845b,_0x3f8e61){const _0x3fa021=_0x9977a5?function(){const _0x2b794d=a60_0x4717;if(_0x3f8e61){const _0x5cc366=_0x3f8e61[_0x2b794d(0x1ac)](_0x57845b,arguments);return _0x3f8e61=null,_0x5cc366;}}:function(){};return _0x9977a5=![],_0x3fa021;};}()),a60_0x183207=a60_0xf7765e(this,function(){const _0x27493f=a60_0x4717;return a60_0x183207[_0x27493f(0x19e)]()['search'](_0x27493f(0x192))[_0x27493f(0x19e)]()['constructor'](a60_0x183207)['search'](_0x27493f(0x192));});a60_0x183207();'use strict';function a60_0x4717(_0x222350,_0x170c77){const _0x46d32c=a60_0x3cd6();return a60_0x4717=function(_0x183207,_0xf7765e){_0x183207=_0x183207-0x18b;let _0x3cd6a6=_0x46d32c[_0x183207];return _0x3cd6a6;},a60_0x4717(_0x222350,_0x170c77);}var __importDefault=this&&this[a60_0x2e066c(0x1b0)]||function(_0x19646f){const _0x34c595=a60_0x2e066c;return _0x19646f&&_0x19646f[_0x34c595(0x18e)]?_0x19646f:{'default':_0x19646f};};function a60_0x3cd6(){const _0x25b649=['namespace','2yqlcwr','12aTJIkz','config','1554JLWrHQ','isArray','data','996SPjMYO','maxBodyLength','authorization','accept','isAxiosError','apply','application/json','528638rtuETd','headers','__importDefault','createRequest','9878960Prnpfd','error','instanceUrl','1299819hiZXQK','34447pyGMeG','285704cYzrVA','2493wBjlrh','default','34510bepOhX','__esModule','refreshToken','response','Bearer\x20','(((.+)+)+)+$','status','axios','../../../constants','maxContentLength','message','accessToken','3610310gDZfXK','./auth.utils','interceptors','axios-retry','AuthUtils','toString','RequestError'];a60_0x3cd6=function(){return _0x25b649;};return a60_0x3cd6();}Object['defineProperty'](exports,a60_0x2e066c(0x18e),{'value':!![]}),exports[a60_0x2e066c(0x1b1)]=exports[a60_0x2e066c(0x1a0)]=void 0x0;const axios_1=__importDefault(require(a60_0x2e066c(0x194))),axios_retry_1=__importDefault(require(a60_0x2e066c(0x19c))),request_error_1=require('../../shared/errors/request.error'),auth_utils_1=require(a60_0x2e066c(0x19a)),constants_1=require(a60_0x2e066c(0x195)),DELAY=0x9c4;exports[a60_0x2e066c(0x1a0)]=constants_1['FLOSUM_NAMESPACE']?'/Flosum':'';function createRequest(_0x35ff58){const _0xe92e73=a60_0x2e066c,_0x929ebf=axios_1[_0xe92e73(0x18c)]['create']();return(0x0,axios_retry_1[_0xe92e73(0x18c)])(_0x929ebf,{'retries':0x3,'retryDelay'(_0x2dcb75){return _0x2dcb75*DELAY;}}),_0x929ebf[_0xe92e73(0x19b)]['request']['use'](_0x9031ed=>{const _0x5d4ff3=_0xe92e73;return _0x9031ed['headers']||(_0x9031ed[_0x5d4ff3(0x1af)]={}),_0x9031ed['headers'][_0x5d4ff3(0x1aa)]=_0x5d4ff3(0x1ad),_0x9031ed[_0x5d4ff3(0x1af)][_0x5d4ff3(0x1a9)]='Bearer\x20'+_0x35ff58[_0x5d4ff3(0x198)],_0x9031ed['baseURL']=_0x35ff58[_0x5d4ff3(0x1b4)],_0x9031ed[_0x5d4ff3(0x1a8)]=0x6400000,_0x9031ed[_0x5d4ff3(0x196)]=0x6400000,_0x9031ed;}),_0x929ebf['interceptors'][_0xe92e73(0x190)]['use'](undefined,async _0x503fbd=>{const _0x5c2286=_0xe92e73;var _0x91e43d,_0xab8f6e,_0x18367e,_0x3d07a6;if(_0x503fbd[_0x5c2286(0x1ab)]){if(((_0x91e43d=_0x503fbd[_0x5c2286(0x190)])===null||_0x91e43d===void 0x0?void 0x0:_0x91e43d[_0x5c2286(0x193)])===0x191)return _0x35ff58[_0x5c2286(0x198)]=await auth_utils_1[_0x5c2286(0x19d)]['updateAccessToken'](_0x35ff58['instanceUrl'],_0x35ff58[_0x5c2286(0x18f)],_0x35ff58['clientId'],_0x35ff58['clientSecret']),(_0x3d07a6=_0x503fbd['config'])['headers']||(_0x3d07a6[_0x5c2286(0x1af)]={}),_0x503fbd[_0x5c2286(0x1a3)]['headers'][_0x5c2286(0x1a9)]=_0x5c2286(0x191)+_0x35ff58[_0x5c2286(0x198)],_0x503fbd[_0x5c2286(0x1a3)]['baseURL']=_0x35ff58[_0x5c2286(0x1b4)],_0x929ebf(_0x503fbd[_0x5c2286(0x1a3)]);}let _0x53c49f=((_0xab8f6e=_0x503fbd===null||_0x503fbd===void 0x0?void 0x0:_0x503fbd[_0x5c2286(0x190)])===null||_0xab8f6e===void 0x0?void 0x0:_0xab8f6e[_0x5c2286(0x1a6)])||{};Array[_0x5c2286(0x1a5)](_0x53c49f)&&(_0x53c49f=_0x53c49f[0x0]);const _0x270475=_0x53c49f[_0x5c2286(0x197)]||typeof _0x53c49f[_0x5c2286(0x1b3)]==='string'?_0x53c49f['error']:((_0x18367e=_0x53c49f[_0x5c2286(0x1b3)])===null||_0x18367e===void 0x0?void 0x0:_0x18367e[_0x5c2286(0x197)])||_0x503fbd[_0x5c2286(0x197)];throw new request_error_1[(_0x5c2286(0x19f))](_0x270475,_0x53c49f);}),_0x929ebf;}exports[a60_0x2e066c(0x1b1)]=createRequest;