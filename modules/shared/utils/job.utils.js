const a335_0x3357b9=a335_0x1948;(function(_0xb9322f,_0x1ee835){const _0xa40f90=a335_0x1948,_0x40a1cd=_0xb9322f();while(!![]){try{const _0x22a555=parseInt(_0xa40f90(0x169))/0x1+parseInt(_0xa40f90(0x16b))/0x2+-parseInt(_0xa40f90(0x17c))/0x3*(parseInt(_0xa40f90(0x16a))/0x4)+parseInt(_0xa40f90(0x16e))/0x5+-parseInt(_0xa40f90(0x173))/0x6*(-parseInt(_0xa40f90(0x170))/0x7)+parseInt(_0xa40f90(0x18e))/0x8*(-parseInt(_0xa40f90(0x18a))/0x9)+-parseInt(_0xa40f90(0x191))/0xa;if(_0x22a555===_0x1ee835)break;else _0x40a1cd['push'](_0x40a1cd['shift']());}catch(_0x5dac40){_0x40a1cd['push'](_0x40a1cd['shift']());}}}(a335_0x4512,0x50ed4));const a335_0x5256be=(function(){let _0x4a4049=!![];return function(_0x23a139,_0x591537){const _0x1cb50f=_0x4a4049?function(){const _0x1bdab6=a335_0x1948;if(_0x591537){const _0x4b7119=_0x591537[_0x1bdab6(0x18f)](_0x23a139,arguments);return _0x591537=null,_0x4b7119;}}:function(){};return _0x4a4049=![],_0x1cb50f;};}()),a335_0x413167=a335_0x5256be(this,function(){const _0x3d2e36=a335_0x1948;return a335_0x413167[_0x3d2e36(0x16c)]()[_0x3d2e36(0x17e)]('(((.+)+)+)+$')[_0x3d2e36(0x16c)]()[_0x3d2e36(0x181)](a335_0x413167)[_0x3d2e36(0x17e)](_0x3d2e36(0x18b));});a335_0x413167();'use strict';var __importDefault=this&&this[a335_0x3357b9(0x165)]||function(_0x231799){const _0x4f773f=a335_0x3357b9;return _0x231799&&_0x231799[_0x4f773f(0x175)]?_0x231799:{'default':_0x231799};};Object[a335_0x3357b9(0x188)](exports,a335_0x3357b9(0x175),{'value':!![]});const path_1=__importDefault(require(a335_0x3357b9(0x182))),spawn_utils_1=require('./spawn.utils'),core_1=require(a335_0x3357b9(0x174)),shortid_1=__importDefault(require(a335_0x3357b9(0x171))),utils_1=require(a335_0x3357b9(0x16d)),promises_1=require('fs/promises'),job_1=require(a335_0x3357b9(0x18c));class JobUtils{static[a335_0x3357b9(0x168)](){const _0x159b31=a335_0x3357b9;return(0x0,shortid_1[_0x159b31(0x17b)])();}static[a335_0x3357b9(0x17d)](_0x4d9f59,_0x440106){return new Promise((_0x4fae5d,_0x2dccbf)=>{const _0x4f25b4=a335_0x1948,{jobStorePath:_0xcec8a5,jobId:_0x4f166c}=_0x440106,_0x71e29c=(0x0,spawn_utils_1[_0x4f25b4(0x193)])(_0x4d9f59,...(0x0,spawn_utils_1[_0x4f25b4(0x187)])({'jobStorePath':_0xcec8a5,'jobId':_0x4f166c})),_0x4f5071=new core_1[(_0x4f25b4(0x180))](_0x4f166c);_0x71e29c['once'](_0x4f25b4(0x186),_0x2375ef=>{const _0x26fb05=_0x4f25b4,_0x93b587='Job\x20has\x20been\x20closed\x20with\x20status\x20code:\x20'+_0x2375ef;_0x4f5071[_0x26fb05(0x17a)](_0x93b587),_0x2375ef===0x0?_0x4fae5d(_0x93b587):_0x2dccbf(new Error(_0x93b587));});});}static async[a335_0x3357b9(0x192)](_0x49cbfa){const _0x4d9ca1=a335_0x3357b9;if(!await utils_1['FsUtils'][_0x4d9ca1(0x167)](_0x49cbfa))return[];const _0x23ffd1=await(0x0,promises_1[_0x4d9ca1(0x17f)])(_0x49cbfa,{'withFileTypes':!![]}),_0x59d2a5=_0x23ffd1[_0x4d9ca1(0x16f)](_0x109a05=>_0x109a05[_0x4d9ca1(0x177)]())[_0x4d9ca1(0x184)](_0x38acac=>_0x38acac[_0x4d9ca1(0x185)]),_0x1b4129=[];for(const _0x3d873e of _0x59d2a5){const _0x5bcf3f=path_1[_0x4d9ca1(0x17b)][_0x4d9ca1(0x176)](_0x49cbfa,_0x3d873e,job_1[_0x4d9ca1(0x183)]);await utils_1[_0x4d9ca1(0x179)][_0x4d9ca1(0x167)](_0x5bcf3f)&&_0x1b4129[_0x4d9ca1(0x166)](_0x3d873e);}return _0x1b4129;}static async['sortJobsIds'](_0x2ecc68,_0x4daf8f){const _0x1bd1f6=a335_0x3357b9,_0x9322e2=new Map();for(const _0x299359 of _0x4daf8f){const _0x4e2d7b=await(0x0,promises_1['stat'])(path_1[_0x1bd1f6(0x17b)][_0x1bd1f6(0x176)](_0x2ecc68,_0x299359));_0x9322e2[_0x1bd1f6(0x178)](_0x4e2d7b,_0x299359);}return Array['from'](_0x9322e2[_0x1bd1f6(0x190)]())[_0x1bd1f6(0x172)]((_0x1462df,_0x42f57f)=>_0x42f57f['birthtime']-_0x1462df[_0x1bd1f6(0x18d)])[_0x1bd1f6(0x184)](_0x4fdf7f=>_0x9322e2[_0x1bd1f6(0x189)](_0x4fdf7f));}}function a335_0x1948(_0xe41357,_0x31483d){const _0x33e956=a335_0x4512();return a335_0x1948=function(_0x413167,_0x5256be){_0x413167=_0x413167-0x165;let _0x4512f8=_0x33e956[_0x413167];return _0x4512f8;},a335_0x1948(_0xe41357,_0x31483d);}exports[a335_0x3357b9(0x17b)]=JobUtils;function a335_0x4512(){const _0x10d67d=['6qAjPfq','../../../core','__esModule','join','isDirectory','set','FsUtils','log','default','3YlYMtd','runJob','search','readdir','Logger','constructor','path','JOB_LOG_STATE_FILENAME','map','name','close','objectToArgsList','defineProperty','get','1259559KpbFTy','(((.+)+)+)+$','../../../constants/job','birthtime','24AbPiST','apply','keys','9334700wmdcfy','getJobsIds','executeInterpreter','__importDefault','push','isExistsPath','generateJobId','627291JNsPwR','676252deSAHS','1235218dGjDfM','toString','@flosum/utils','327525SinmHs','filter','3804199JEpErz','shortid','sort'];a335_0x4512=function(){return _0x10d67d;};return a335_0x4512();}