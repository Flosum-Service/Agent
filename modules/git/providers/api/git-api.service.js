const a114_0x5a888a=a114_0x33e2;function a114_0x33e2(_0x16942d,_0x2f29d3){const _0x3513e0=a114_0x4ea9();return a114_0x33e2=function(_0x3022b0,_0x2617ce){_0x3022b0=_0x3022b0-0x1d4;let _0x4ea987=_0x3513e0[_0x3022b0];return _0x4ea987;},a114_0x33e2(_0x16942d,_0x2f29d3);}function a114_0x4ea9(){const _0x722c5a=['setTimeout','GitApiService','82873bwuzZa','numberOfRequestsInQueue','20tSHLkV','createRequest','277960XVSvZd','264XCSmdV','create','__importDefault','use','(((.+)+)+)+$','default','requestInterval','32278sFqXrp','__esModule','timers/promises','constructor','19kYRGug','MAX_REQUEST_PER_HOUR','195245EPBouV','../../../shared/utils/request','869838BvLZBG','toString','2841720UMPVBS','credentials','requestWrapper','638559zzTEtG','search','provider','368TIqeFd','request'];a114_0x4ea9=function(){return _0x722c5a;};return a114_0x4ea9();}(function(_0x26ef39,_0x36af0f){const _0x244cef=a114_0x33e2,_0x5732e7=_0x26ef39();while(!![]){try{const _0x208b4d=-parseInt(_0x244cef(0x1d4))/0x1*(parseInt(_0x244cef(0x1f0))/0x2)+parseInt(_0x244cef(0x1d8))/0x3+-parseInt(_0x244cef(0x1e6))/0x4*(parseInt(_0x244cef(0x1d6))/0x5)+-parseInt(_0x244cef(0x1da))/0x6+-parseInt(_0x244cef(0x1e4))/0x7*(-parseInt(_0x244cef(0x1e0))/0x8)+-parseInt(_0x244cef(0x1dd))/0x9+-parseInt(_0x244cef(0x1e8))/0xa*(-parseInt(_0x244cef(0x1e9))/0xb);if(_0x208b4d===_0x36af0f)break;else _0x5732e7['push'](_0x5732e7['shift']());}catch(_0x27ad68){_0x5732e7['push'](_0x5732e7['shift']());}}}(a114_0x4ea9,0x6f213));const a114_0x2617ce=(function(){let _0x5d2866=!![];return function(_0x48aaa0,_0x5abfb6){const _0x185f54=_0x5d2866?function(){if(_0x5abfb6){const _0x1aa28b=_0x5abfb6['apply'](_0x48aaa0,arguments);return _0x5abfb6=null,_0x1aa28b;}}:function(){};return _0x5d2866=![],_0x185f54;};}()),a114_0x3022b0=a114_0x2617ce(this,function(){const _0x18dab8=a114_0x33e2;return a114_0x3022b0[_0x18dab8(0x1d9)]()[_0x18dab8(0x1de)](_0x18dab8(0x1ed))[_0x18dab8(0x1d9)]()[_0x18dab8(0x1f3)](a114_0x3022b0)['search'](_0x18dab8(0x1ed));});a114_0x3022b0();'use strict';var __importDefault=this&&this[a114_0x5a888a(0x1eb)]||function(_0xba44dd){const _0x26ccfc=a114_0x5a888a;return _0xba44dd&&_0xba44dd[_0x26ccfc(0x1f1)]?_0xba44dd:{'default':_0xba44dd};};Object['defineProperty'](exports,a114_0x5a888a(0x1f1),{'value':!![]}),exports[a114_0x5a888a(0x1e3)]=void 0x0;const axios_1=__importDefault(require('axios')),promises_1=require(a114_0x5a888a(0x1f2)),request_1=require(a114_0x5a888a(0x1d7));class GitApiService{constructor(_0x443e7f,_0x2399e0){const _0x280a6d=a114_0x5a888a;this[_0x280a6d(0x1df)]=_0x443e7f,this['credentials']=_0x2399e0,this[_0x280a6d(0x1e5)]=0x0,this[_0x280a6d(0x1d5)]=-0x1,this[_0x280a6d(0x1e1)]=this[_0x280a6d(0x1e7)]();}get[a114_0x5a888a(0x1ef)](){const _0x2505b5=a114_0x5a888a;return 0x3c*0x3c*0x3e8/this[_0x2505b5(0x1d5)];}[a114_0x5a888a(0x1e7)](_0x3af935){const _0x49cf71=a114_0x5a888a,_0x2aa091=axios_1[_0x49cf71(0x1ee)][_0x49cf71(0x1ea)]({'baseURL':_0x3af935||this[_0x49cf71(0x1db)]['getBaseUrl'](),'headers':this['getHeaders'](),...request_1['proxyOptions']()});return _0x2aa091['interceptors'][_0x49cf71(0x1e1)][_0x49cf71(0x1ec)](async _0x32592c=>{const _0x1390c4=_0x49cf71,_0x5856b4=this['numberOfRequestsInQueue']++*this[_0x1390c4(0x1ef)];return await promises_1[_0x1390c4(0x1e2)](_0x5856b4),this[_0x1390c4(0x1e5)]-=0x1,_0x32592c;}),request_1[_0x49cf71(0x1dc)](_0x2aa091);}}exports['GitApiService']=GitApiService;