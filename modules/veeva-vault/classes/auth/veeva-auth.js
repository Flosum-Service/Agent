function a325_0x141f(_0x399255,_0x33a702){const _0x5a5895=a325_0x2ba4();return a325_0x141f=function(_0x583785,_0x141fd1){_0x583785=_0x583785-0x186;let _0x2ba476=_0x5a5895[_0x583785];return _0x2ba476;},a325_0x141f(_0x399255,_0x33a702);}const a325_0x529a25=a325_0x141f;(function(_0x10106b,_0x123dc2){const _0x263723=a325_0x141f,_0x400786=_0x10106b();while(!![]){try{const _0x25c887=parseInt(_0x263723(0x1ab))/0x1+parseInt(_0x263723(0x193))/0x2*(parseInt(_0x263723(0x19b))/0x3)+-parseInt(_0x263723(0x190))/0x4+parseInt(_0x263723(0x1b4))/0x5*(-parseInt(_0x263723(0x192))/0x6)+parseInt(_0x263723(0x197))/0x7*(-parseInt(_0x263723(0x1a7))/0x8)+-parseInt(_0x263723(0x1a1))/0x9*(parseInt(_0x263723(0x194))/0xa)+-parseInt(_0x263723(0x18a))/0xb*(-parseInt(_0x263723(0x18e))/0xc);if(_0x25c887===_0x123dc2)break;else _0x400786['push'](_0x400786['shift']());}catch(_0xadf386){_0x400786['push'](_0x400786['shift']());}}}(a325_0x2ba4,0xe97ce));const a325_0x141fd1=(function(){let _0x24737f=!![];return function(_0x4bbfe3,_0x19287d){const _0x150c8f=_0x24737f?function(){if(_0x19287d){const _0x1d06c3=_0x19287d['apply'](_0x4bbfe3,arguments);return _0x19287d=null,_0x1d06c3;}}:function(){};return _0x24737f=![],_0x150c8f;};}()),a325_0x583785=a325_0x141fd1(this,function(){const _0x1bf777=a325_0x141f;return a325_0x583785[_0x1bf777(0x1a0)]()[_0x1bf777(0x199)](_0x1bf777(0x186))[_0x1bf777(0x1a0)]()[_0x1bf777(0x196)](a325_0x583785)[_0x1bf777(0x199)](_0x1bf777(0x186));});a325_0x583785();function a325_0x2ba4(){const _0x135ec5=['type','sessionId','toString','1230912CYXkBw','getNewAccessToken','attemptsOfUpdateToken','application/x-www-form-urlencoded','append','sleep','8mHWEYJ','message','AppConstants','BaseVeevaAuth','1905841LHNjeD','password','SUCCESS','VeevaResponseStatus','username','defineProperty','default','some','VeevaConstants','1845595ZOFOzE','../../constants/veeva.constants','(((.+)+)+)+$','../../constants/app.constants','errors','../../../shared/utils','1144704WwXGjV','UNDEFINED_ERROR','VeevaAuth','__esModule','192tNegSb','API_LIMIT_EXCEEDED','5812100RqldVJ','../../enums/status.enums','12QXGiis','34QIUrdV','70noKEpA','instanceUrl','constructor','5791135jDWiuE','LOGIN_TIMEOUT','search','auth','240255mzuhYD','__importDefault','ENDPOINT_AUTH'];a325_0x2ba4=function(){return _0x135ec5;};return a325_0x2ba4();}'use strict';var __importDefault=this&&this[a325_0x529a25(0x19c)]||function(_0x2e1e8a){const _0x74e00f=a325_0x529a25;return _0x2e1e8a&&_0x2e1e8a[_0x74e00f(0x18d)]?_0x2e1e8a:{'default':_0x2e1e8a};};Object[a325_0x529a25(0x1b0)](exports,'__esModule',{'value':!![]}),exports[a325_0x529a25(0x18c)]=void 0x0;const veeva_constants_1=require(a325_0x529a25(0x1b5)),axios_1=__importDefault(require('axios')),status_enums_1=require(a325_0x529a25(0x191)),utils_1=require(a325_0x529a25(0x189)),app_constants_1=require(a325_0x529a25(0x187)),base_veeva_auth_1=require('./base-veeva-auth');class VeevaAuth extends base_veeva_auth_1[a325_0x529a25(0x1aa)]{constructor(_0x47641d,_0x44a2fc=0x0){const _0x3d5e43=a325_0x529a25;super(_0x47641d),this[_0x3d5e43(0x19a)]=_0x47641d,this[_0x3d5e43(0x1a3)]=_0x44a2fc;}async[a325_0x529a25(0x1a2)](_0x421b52=this[a325_0x529a25(0x1a3)]){const _0x3a7cc2=a325_0x529a25;var _0x5aad4c,_0x7da70f;const _0x165149=this[_0x3a7cc2(0x19a)][_0x3a7cc2(0x195)]+veeva_constants_1[_0x3a7cc2(0x1b3)][_0x3a7cc2(0x19d)],_0x552e08=new URLSearchParams();_0x552e08[_0x3a7cc2(0x1a5)](_0x3a7cc2(0x1af),this[_0x3a7cc2(0x19a)][_0x3a7cc2(0x1af)]),_0x552e08[_0x3a7cc2(0x1a5)](_0x3a7cc2(0x1ac),this[_0x3a7cc2(0x19a)][_0x3a7cc2(0x1ac)]);const {data:_0x1d7534}=await axios_1[_0x3a7cc2(0x1b1)]['post'](_0x165149,_0x552e08,{'headers':{'Content-Type':_0x3a7cc2(0x1a4)}});if(_0x1d7534['responseStatus']===status_enums_1[_0x3a7cc2(0x1ae)][_0x3a7cc2(0x1ad)])return _0x1d7534[_0x3a7cc2(0x19f)];else{const _0x35afcc=(_0x5aad4c=_0x1d7534['errors'])===null||_0x5aad4c===void 0x0?void 0x0:_0x5aad4c[_0x3a7cc2(0x1b2)](_0x576124=>_0x576124[_0x3a7cc2(0x19e)]===veeva_constants_1[_0x3a7cc2(0x1b3)][_0x3a7cc2(0x18f)]);if(_0x35afcc&&_0x421b52>0x0)return await(0x0,utils_1[_0x3a7cc2(0x1a6)])(VeevaAuth[_0x3a7cc2(0x198)]),await this[_0x3a7cc2(0x1a2)](_0x421b52-0x1);else throw new Error(((_0x7da70f=_0x1d7534[_0x3a7cc2(0x188)][0x0])===null||_0x7da70f===void 0x0?void 0x0:_0x7da70f[_0x3a7cc2(0x1a8)])||app_constants_1[_0x3a7cc2(0x1a9)][_0x3a7cc2(0x18b)]);}}}exports[a325_0x529a25(0x18c)]=VeevaAuth,VeevaAuth[a325_0x529a25(0x198)]=0x3e8*0x3c;