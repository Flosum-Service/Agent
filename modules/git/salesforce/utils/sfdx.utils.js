const a261_0x374515=a261_0x4537;(function(_0x3f4515,_0x47b965){const _0x314c9e=a261_0x4537,_0x4b8e37=_0x3f4515();while(!![]){try{const _0x2a1fd7=-parseInt(_0x314c9e(0x1e0))/0x1+-parseInt(_0x314c9e(0x1dd))/0x2*(parseInt(_0x314c9e(0x1ce))/0x3)+-parseInt(_0x314c9e(0x1d4))/0x4*(-parseInt(_0x314c9e(0x1c9))/0x5)+-parseInt(_0x314c9e(0x1be))/0x6+-parseInt(_0x314c9e(0x1d7))/0x7+-parseInt(_0x314c9e(0x1d1))/0x8*(parseInt(_0x314c9e(0x1cb))/0x9)+parseInt(_0x314c9e(0x1d6))/0xa;if(_0x2a1fd7===_0x47b965)break;else _0x4b8e37['push'](_0x4b8e37['shift']());}catch(_0x4ec3b3){_0x4b8e37['push'](_0x4b8e37['shift']());}}}(a261_0x2b9f,0x1a66c));function a261_0x2b9f(){const _0x5020fe=['readdir','8CnWNtI','includes','spawnPromise','822004UoYEHD','(((.+)+)+)+$','2766740VCJLwA','527576oBJWhX','sfdx','__esModule','log','split','SFDX','22bCltlj','search','goto\x20%s\x20folder\x20and\x20convert\x20mdapi\x20from\x20%s','94160clShSh','package.xml','stdout','Logger','stderr','goto\x20%s\x20folder\x20and\x20convert\x20source\x20to\x20%s','force:project:create\x20-t\x20empty\x20-n\x20','join','data','../../../../core','571872SpJrXZ','sourceToMdapi','createEmptyPackageXml','cross-spawn','isSFDXProject','toString','sfdx-project.json','force:source:convert\x20-d\x20','close','apply','mdapiToSource','5LUQYxh','force:mdapi:convert\x20-r\x20','84528snXtEo','default','defineProperty','27219uDNXJT','info'];a261_0x2b9f=function(){return _0x5020fe;};return a261_0x2b9f();}const a261_0x3be558=(function(){let _0x1146df=!![];return function(_0x2cd451,_0x1a8979){const _0x246ffd=_0x1146df?function(){const _0x44fafa=a261_0x4537;if(_0x1a8979){const _0x20be17=_0x1a8979[_0x44fafa(0x1c7)](_0x2cd451,arguments);return _0x1a8979=null,_0x20be17;}}:function(){};return _0x1146df=![],_0x246ffd;};}()),a261_0x276b0c=a261_0x3be558(this,function(){const _0x31199b=a261_0x4537;return a261_0x276b0c['toString']()[_0x31199b(0x1de)](_0x31199b(0x1d5))[_0x31199b(0x1c3)]()['constructor'](a261_0x276b0c)[_0x31199b(0x1de)](_0x31199b(0x1d5));});function a261_0x4537(_0xd9fea8,_0x2816da){const _0x3177ab=a261_0x2b9f();return a261_0x4537=function(_0x276b0c,_0x3be558){_0x276b0c=_0x276b0c-0x1b5;let _0x2b9fbe=_0x3177ab[_0x276b0c];return _0x2b9fbe;},a261_0x4537(_0xd9fea8,_0x2816da);}a261_0x276b0c();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x815489){const _0x1dd822=a261_0x4537;return _0x815489&&_0x815489[_0x1dd822(0x1d9)]?_0x815489:{'default':_0x815489};};Object[a261_0x374515(0x1cd)](exports,a261_0x374515(0x1d9),{'value':!![]}),exports[a261_0x374515(0x1dc)]=void 0x0;const fs_1=require('fs'),path_1=__importDefault(require('path')),core_1=require(a261_0x374515(0x1bd)),fs_internal_1=require('../../internal/fs.internal'),cross_spawn_1=__importDefault(require(a261_0x374515(0x1c1))),logger=new core_1[(a261_0x374515(0x1b7))]('sfdx');class SFDX{static[a261_0x374515(0x1d3)](_0x5275ae,_0x303d9b,_0x2b0538={}){return new Promise((_0x272759,_0x4a4cab)=>{const _0x566d7f=a261_0x4537;var _0x31a010,_0x311c09;let _0x3785ca='',_0x141b0f='';logger[_0x566d7f(0x1cf)]('spawn\x20%s\x20[%s]',_0x5275ae,_0x303d9b);const _0x31a7fc=(0x0,cross_spawn_1[_0x566d7f(0x1cc)])(_0x5275ae,_0x303d9b[_0x566d7f(0x1db)]('\x20'),_0x2b0538);_0x31a7fc['on']('error',_0x488f07=>{_0x4a4cab(_0x488f07);}),(_0x31a010=_0x31a7fc[_0x566d7f(0x1b6)])===null||_0x31a010===void 0x0?void 0x0:_0x31a010['on'](_0x566d7f(0x1bc),_0x1d4ee7=>{_0x3785ca+=_0x1d4ee7;}),(_0x311c09=_0x31a7fc[_0x566d7f(0x1b8)])===null||_0x311c09===void 0x0?void 0x0:_0x311c09['on'](_0x566d7f(0x1bc),_0x130ef2=>{if(_0x130ef2['includes']('Warning:\x20'))return;_0x141b0f+=_0x130ef2;}),_0x31a7fc['on'](_0x566d7f(0x1c6),(_0x321557,_0x285c92)=>{_0x321557||_0x285c92?_0x4a4cab(new Error(_0x141b0f||_0x3785ca)):_0x272759(_0x3785ca);});});}static async[a261_0x374515(0x1c8)](_0x43b776,_0x4c4405){const _0x38a64e=a261_0x374515;logger[_0x38a64e(0x1da)](_0x38a64e(0x1df),_0x4c4405,_0x43b776),await this[_0x38a64e(0x1d3)](_0x38a64e(0x1d8),_0x38a64e(0x1ca)+_0x43b776,{'cwd':_0x4c4405});}static async[a261_0x374515(0x1bf)](_0x538f36,_0x4804c9){const _0x32bdc7=a261_0x374515;logger[_0x32bdc7(0x1da)](_0x32bdc7(0x1b9),_0x538f36,_0x4804c9),await this[_0x32bdc7(0x1d3)](_0x32bdc7(0x1d8),_0x32bdc7(0x1c5)+_0x4804c9,{'cwd':_0x538f36});}static async['createEmptyProject'](_0xc75cad,_0x49ed89){const _0x4fd265=a261_0x374515;await this[_0x4fd265(0x1d3)]('sfdx',_0x4fd265(0x1ba)+_0x49ed89,{'cwd':_0xc75cad});}static async[a261_0x374515(0x1c0)](_0x51f7d3){const _0xdfec13=a261_0x374515,_0x280025=path_1[_0xdfec13(0x1cc)][_0xdfec13(0x1bb)](_0x51f7d3,_0xdfec13(0x1b5));logger['log']('create\x20empty\x20package.xml\x20at\x20%s',_0x280025),await fs_internal_1['FS']['writeFile'](_0x280025,'<Package\x20xmlns=\x22http://soap.sforce.com/2006/04/metadata\x22><version>54.0</version></Package>');}static async[a261_0x374515(0x1c2)](_0x27422c){return new Promise(_0x199a35=>{const _0x287761=a261_0x4537;(0x0,fs_1[_0x287761(0x1d0)])(_0x27422c,(_0x3917f4,_0x4617cd)=>{const _0x486d56=_0x287761;_0x199a35(!_0x3917f4&&(_0x4617cd[_0x486d56(0x1d2)]('force-app')||_0x4617cd[_0x486d56(0x1d2)]('config')||_0x4617cd[_0x486d56(0x1d2)](_0x486d56(0x1c4))));});});}}exports[a261_0x374515(0x1dc)]=SFDX;