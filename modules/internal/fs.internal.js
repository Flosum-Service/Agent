const a84_0x28c212=a84_0x1fa5;(function(_0x220bf9,_0x44d532){const _0x45a419=a84_0x1fa5,_0x452ea8=_0x220bf9();while(!![]){try{const _0x5b785b=-parseInt(_0x45a419(0x119))/0x1+parseInt(_0x45a419(0x139))/0x2+-parseInt(_0x45a419(0x126))/0x3+-parseInt(_0x45a419(0x132))/0x4*(parseInt(_0x45a419(0x127))/0x5)+parseInt(_0x45a419(0x12a))/0x6*(-parseInt(_0x45a419(0x128))/0x7)+-parseInt(_0x45a419(0x12c))/0x8*(parseInt(_0x45a419(0x13a))/0x9)+-parseInt(_0x45a419(0x136))/0xa*(-parseInt(_0x45a419(0x125))/0xb);if(_0x5b785b===_0x44d532)break;else _0x452ea8['push'](_0x452ea8['shift']());}catch(_0x2c7886){_0x452ea8['push'](_0x452ea8['shift']());}}}(a84_0x48d6,0x8c737));const a84_0x1984b4=(function(){let _0x23288a=!![];return function(_0x1448fa,_0x48c8d5){const _0x426eed=_0x23288a?function(){const _0x390a84=a84_0x1fa5;if(_0x48c8d5){const _0x204b0c=_0x48c8d5[_0x390a84(0x13c)](_0x1448fa,arguments);return _0x48c8d5=null,_0x204b0c;}}:function(){};return _0x23288a=![],_0x426eed;};}()),a84_0x453885=a84_0x1984b4(this,function(){const _0x4f9528=a84_0x1fa5;return a84_0x453885['toString']()['search'](_0x4f9528(0x11d))[_0x4f9528(0x142)]()[_0x4f9528(0x13d)](a84_0x453885)[_0x4f9528(0x138)](_0x4f9528(0x11d));});a84_0x453885();'use strict';function a84_0x48d6(){const _0x23ce5e=['(((.+)+)+)+$','readFile','../shared/utils','default','utf-8','code','all','removeDir','2511949RqDhkz','70062zfpHLf','5CTVlEN','6903876tBkkCt','\x20is\x20not\x20a\x20folder','6lAzWHA','EBUSY','5531080jdtIVk','sleep','__setModuleDefault','util','isDir','path','4591896oCBXBY','.git','__esModule','create','170sTAKBx','writeFile','search','1029032CcmcUl','9CUkrPj','name','apply','constructor','defineProperty','endsWith','call','makeDir','toString','resolve','__importStar','exists','972351qioEBO','stat','readDir','promisify'];a84_0x48d6=function(){return _0x23ce5e;};return a84_0x48d6();}var __createBinding=this&&this['__createBinding']||(Object[a84_0x28c212(0x135)]?function(_0x451b44,_0x59d44e,_0x3bbd4f,_0x2f3f09){const _0xb472c=a84_0x28c212;if(_0x2f3f09===undefined)_0x2f3f09=_0x3bbd4f;Object[_0xb472c(0x13e)](_0x451b44,_0x2f3f09,{'enumerable':!![],'get':function(){return _0x59d44e[_0x3bbd4f];}});}:function(_0x34296e,_0x3c3ad3,_0x36400c,_0x53ace2){if(_0x53ace2===undefined)_0x53ace2=_0x36400c;_0x34296e[_0x53ace2]=_0x3c3ad3[_0x36400c];}),__setModuleDefault=this&&this[a84_0x28c212(0x12e)]||(Object[a84_0x28c212(0x135)]?function(_0x4198a1,_0x181aa9){const _0x485f04=a84_0x28c212;Object['defineProperty'](_0x4198a1,_0x485f04(0x120),{'enumerable':!![],'value':_0x181aa9});}:function(_0x5746a1,_0x2fd129){const _0x3f046f=a84_0x28c212;_0x5746a1[_0x3f046f(0x120)]=_0x2fd129;}),__importStar=this&&this[a84_0x28c212(0x117)]||function(_0x41c2f6){const _0x25798b=a84_0x28c212;if(_0x41c2f6&&_0x41c2f6[_0x25798b(0x134)])return _0x41c2f6;var _0x5b93f8={};if(_0x41c2f6!=null){for(var _0x48060e in _0x41c2f6)if(_0x48060e!==_0x25798b(0x120)&&Object['prototype']['hasOwnProperty'][_0x25798b(0x140)](_0x41c2f6,_0x48060e))__createBinding(_0x5b93f8,_0x41c2f6,_0x48060e);}return __setModuleDefault(_0x5b93f8,_0x41c2f6),_0x5b93f8;};Object[a84_0x28c212(0x13e)](exports,a84_0x28c212(0x134),{'value':!![]}),exports['FS']=void 0x0;const fs_1=require('fs'),p=__importStar(require(a84_0x28c212(0x131))),path_1=require(a84_0x28c212(0x131)),util_1=require(a84_0x28c212(0x12f)),utils_1=require(a84_0x28c212(0x11f)),rmPromise=util_1[a84_0x28c212(0x11c)](fs_1['rm']),readdirPromise=util_1['promisify'](fs_1['readdir']);class FS{static['exists'](_0x5b435a){return new Promise((_0x470349,_0x5b3db5)=>{const _0x2a016c=a84_0x1fa5;fs_1[_0x2a016c(0x11a)](_0x5b435a,_0x276ffd=>_0x470349(_0x276ffd?![]:!![]));});}static['isEmptyDir'](_0x5f32c8){return new Promise(async(_0x31ab3d,_0x2a783d)=>{const _0x36ddd5=a84_0x1fa5;if(!await this[_0x36ddd5(0x118)](_0x5f32c8)){_0x31ab3d(!![]);return;}if(!await this[_0x36ddd5(0x130)](_0x5f32c8)){_0x2a783d(new Error(_0x5f32c8+_0x36ddd5(0x129)));return;}const _0xd8dea9=(await this[_0x36ddd5(0x11b)](_0x5f32c8))['filter'](_0x5f418c=>!_0x5f418c[_0x36ddd5(0x13f)](_0x36ddd5(0x133)));_0x31ab3d(_0xd8dea9['length']===0x0);});}static[a84_0x28c212(0x130)](_0x6e051d){return new Promise(async(_0x75b381,_0x430bb4)=>{const _0x220e02=a84_0x1fa5;if(!await this[_0x220e02(0x118)](_0x6e051d))return _0x75b381(![]);fs_1[_0x220e02(0x11a)](_0x6e051d,(_0x2b1315,_0x33e582)=>{if(_0x2b1315){_0x430bb4(_0x2b1315);return;}_0x75b381(_0x33e582['isDirectory']());});});}static['makeDir'](_0x2f7ff9,_0x1051ed=!![]){return new Promise(async(_0x5dd4cd,_0x1a73e6)=>{const _0x75c69d=a84_0x1fa5;if(await this[_0x75c69d(0x118)](_0x2f7ff9)){_0x5dd4cd();return;}fs_1['mkdir'](_0x2f7ff9,{'recursive':_0x1051ed},_0x3b43b5=>{if(_0x3b43b5){_0x1a73e6(_0x3b43b5);return;}_0x5dd4cd();});});}static async['readDir'](_0x830bd8,_0xe8414b=![]){const _0x5bef40=a84_0x28c212,_0x1129df=await readdirPromise(_0x830bd8,{'withFileTypes':!![]}),_0x12f559=await Promise[_0x5bef40(0x123)](_0x1129df['map'](_0x210dba=>{const _0x30f2d0=_0x5bef40,_0x253541=path_1[_0x30f2d0(0x143)](_0x830bd8,_0x210dba[_0x30f2d0(0x13b)]);return _0x210dba['isDirectory']()&&_0xe8414b?this['readDir'](_0x253541,!![]):_0x253541;}));return _0x12f559['flat']();}static[a84_0x28c212(0x11e)](_0x12b2fb,_0x5b43d5){return new Promise((_0x417b98,_0x2b3ed4)=>{const _0x1c8c53=a84_0x1fa5;fs_1['readFile'](_0x12b2fb,_0x5b43d5?undefined:{'encoding':_0x1c8c53(0x121)},(_0x532631,_0x4b5426)=>{if(_0x532631){_0x2b3ed4(_0x532631);return;}_0x417b98(_0x4b5426);});});}static[a84_0x28c212(0x137)](_0x4bb35e,_0x6c8c5d,_0x17fd0f=!![]){return new Promise(async(_0x402911,_0x216bbd)=>{const _0x394932=a84_0x1fa5;_0x17fd0f&&await this[_0x394932(0x141)](p['dirname'](_0x4bb35e)),fs_1[_0x394932(0x137)](_0x4bb35e,_0x6c8c5d,_0x8fc748=>{if(_0x8fc748){_0x216bbd(_0x8fc748);return;}_0x402911();});});}static[a84_0x28c212(0x124)](_0x3bc632,_0x40e5bc=0x5,_0x523bc3=0x3e8){return new Promise(async(_0x257342,_0x2874b5)=>{const _0x4742b3=a84_0x1fa5;let _0x12de29=0x0;while(_0x12de29<_0x40e5bc){try{await rmPromise(_0x3bc632,{'recursive':!![],'force':!![]}),_0x257342();break;}catch(_0x260ceb){_0x12de29++;if(_0x12de29===_0x40e5bc){_0x2874b5(_0x260ceb);break;}if(_0x4742b3(0x122)in _0x260ceb){if(_0x260ceb[_0x4742b3(0x122)]===_0x4742b3(0x12b)){_0x12de29++,await utils_1[_0x4742b3(0x12d)](_0x523bc3);continue;}}_0x2874b5(_0x260ceb);break;}}});}static['removeFile'](_0x419f63){return new Promise((_0x530499,_0x50a4c7)=>{fs_1['rm'](_0x419f63,{'force':!![]},_0x27c94a=>_0x27c94a?_0x50a4c7(_0x27c94a):_0x530499());});}}function a84_0x1fa5(_0x28905c,_0x40f961){const _0x5a3568=a84_0x48d6();return a84_0x1fa5=function(_0x453885,_0x1984b4){_0x453885=_0x453885-0x117;let _0x48d637=_0x5a3568[_0x453885];return _0x48d637;},a84_0x1fa5(_0x28905c,_0x40f961);}exports['FS']=FS;