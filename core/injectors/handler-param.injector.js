const a30_0xea66ae=a30_0x283b;(function(_0x4d9723,_0x2bb9ce){const _0x400eca=a30_0x283b,_0x3973f=_0x4d9723();while(!![]){try{const _0x49bec9=parseInt(_0x400eca(0x127))/0x1*(-parseInt(_0x400eca(0x125))/0x2)+parseInt(_0x400eca(0x131))/0x3*(-parseInt(_0x400eca(0x11e))/0x4)+parseInt(_0x400eca(0x12a))/0x5+-parseInt(_0x400eca(0x12d))/0x6*(-parseInt(_0x400eca(0x126))/0x7)+parseInt(_0x400eca(0x136))/0x8+parseInt(_0x400eca(0x129))/0x9+-parseInt(_0x400eca(0x12c))/0xa*(parseInt(_0x400eca(0x134))/0xb);if(_0x49bec9===_0x2bb9ce)break;else _0x3973f['push'](_0x3973f['shift']());}catch(_0x2fd87d){_0x3973f['push'](_0x3973f['shift']());}}}(a30_0x4039,0xbba1c));const a30_0x3fcc54=(function(){let _0x177b38=!![];return function(_0x44263d,_0x2aa88a){const _0x10b75e=_0x177b38?function(){const _0x538540=a30_0x283b;if(_0x2aa88a){const _0x52a51e=_0x2aa88a[_0x538540(0x138)](_0x44263d,arguments);return _0x2aa88a=null,_0x52a51e;}}:function(){};return _0x177b38=![],_0x10b75e;};}()),a30_0xb19b1e=a30_0x3fcc54(this,function(){const _0x2dec44=a30_0x283b;return a30_0xb19b1e[_0x2dec44(0x132)]()[_0x2dec44(0x135)]('(((.+)+)+)+$')[_0x2dec44(0x132)]()[_0x2dec44(0x139)](a30_0xb19b1e)[_0x2dec44(0x135)](_0x2dec44(0x11f));});function a30_0x283b(_0x4a1a81,_0x52a124){const _0x4e524e=a30_0x4039();return a30_0x283b=function(_0xb19b1e,_0x3fcc54){_0xb19b1e=_0xb19b1e-0x118;let _0x4039e8=_0x4e524e[_0xb19b1e];return _0x4039e8;},a30_0x283b(_0x4a1a81,_0x52a124);}a30_0xb19b1e();'use strict';Object[a30_0xea66ae(0x123)](exports,a30_0xea66ae(0x120),{'value':!![]}),exports[a30_0xea66ae(0x124)]=void 0x0;const constants_1=require('../constants');async function injectParam(_0x4fc3db,_0x1e9a4c,_0x425f4e){const _0x10273e=a30_0xea66ae;var _0x2bcbd9,_0x27649b;const _0x31bdcb=Reflect[_0x10273e(0x133)](constants_1['META_HANDLER_PARAMTYPES'],_0x4fc3db),_0x345b07=(_0x2bcbd9=_0x1e9a4c[_0x10273e(0x11c)])===null||_0x2bcbd9===void 0x0?void 0x0:_0x2bcbd9[_0x10273e(0x122)],_0x574c01=((_0x27649b=_0x1e9a4c[_0x10273e(0x11c)])===null||_0x27649b===void 0x0?void 0x0:_0x27649b['pipes'])||[];let _0x59b564=_0x345b07?_0x425f4e[_0x345b07]:_0x425f4e;for(const _0x31bd3e of _0x574c01){_0x31bd3e[_0x10273e(0x11b)]&&await _0x31bd3e[_0x10273e(0x12e)](_0x59b564,_0x31bdcb[_0x1e9a4c[_0x10273e(0x137)]]),_0x31bd3e[_0x10273e(0x130)]&&(_0x59b564=await _0x31bd3e[_0x10273e(0x11d)](_0x59b564,_0x31bdcb[_0x1e9a4c[_0x10273e(0x137)]]));}return _0x59b564;}async function injectCustomParam(_0xcc3e30,_0x22723f){const _0x1b79cc=a30_0xea66ae;return _0xcc3e30[_0x1b79cc(0x119)]&&_0xcc3e30[_0x1b79cc(0x119)](_0x22723f,_0xcc3e30['data']);}async function handlerParamInjector(_0x4c57ab,_0x4ab744,_0x569876,_0x5ee099){const _0x14a3a8=a30_0xea66ae,_0x5e2b71=Reflect[_0x14a3a8(0x118)](constants_1['META_HANDLER_ARGS'],_0x4c57ab)||[],_0x3023ba=[];for(const _0x568cb2 of _0x5e2b71[_0x14a3a8(0x12f)]((_0x23ab66,_0x8703c1)=>_0x23ab66['index']-_0x8703c1[_0x14a3a8(0x137)])){switch(_0x568cb2['type']){case 0x0:_0x3023ba['push'](_0x4ab744['context']);break;case 0x4:_0x3023ba[_0x14a3a8(0x11a)](_0x4ab744);break;case 0x5:_0x3023ba[_0x14a3a8(0x11a)](_0x569876);break;case 0x6:_0x3023ba['push'](_0x5ee099);break;case 0x1:_0x3023ba[_0x14a3a8(0x11a)](await injectParam(_0x4c57ab,_0x568cb2,_0x4ab744[_0x14a3a8(0x13a)]));break;case 0x2:_0x3023ba[_0x14a3a8(0x11a)](await injectParam(_0x4c57ab,_0x568cb2,_0x4ab744[_0x14a3a8(0x12b)]));break;case 0x3:_0x3023ba[_0x14a3a8(0x11a)](await injectParam(_0x4c57ab,_0x568cb2,_0x4ab744[_0x14a3a8(0x121)]));break;case 0x7:_0x3023ba[_0x14a3a8(0x11a)](await injectCustomParam(_0x568cb2,_0x4ab744[_0x14a3a8(0x128)]));break;default:continue;}}return _0x3023ba;}function a30_0x4039(){const _0x42a383=['30VZmNAV','6zRASJx','validate','sort','transformable','1132683iiIQMW','toString','getMetadata','3345441vzjALQ','search','8883896WaKyfu','index','apply','constructor','body','getOwnMetadata','value','push','validatable','data','transform','4FAtohP','(((.+)+)+)+$','__esModule','query','name','defineProperty','handlerParamInjector','565322vgBUqE','6444473nfItxt','2mcQhux','context','3516678iVpzEj','1009740KcAZeW','params'];a30_0x4039=function(){return _0x42a383;};return a30_0x4039();}exports['handlerParamInjector']=handlerParamInjector;