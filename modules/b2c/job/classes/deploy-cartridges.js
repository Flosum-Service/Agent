const a59_0x4779f7=a59_0xbf90;(function(_0x35b154,_0x3da8b5){const _0x33e24d=a59_0xbf90,_0x29f43b=_0x35b154();while(!![]){try{const _0xf2e718=parseInt(_0x33e24d(0x1f7))/0x1+parseInt(_0x33e24d(0x1ec))/0x2*(parseInt(_0x33e24d(0x1e4))/0x3)+parseInt(_0x33e24d(0x1e1))/0x4+parseInt(_0x33e24d(0x1c8))/0x5+parseInt(_0x33e24d(0x1d9))/0x6*(parseInt(_0x33e24d(0x1e8))/0x7)+parseInt(_0x33e24d(0x1de))/0x8*(-parseInt(_0x33e24d(0x1f2))/0x9)+-parseInt(_0x33e24d(0x1dd))/0xa;if(_0xf2e718===_0x3da8b5)break;else _0x29f43b['push'](_0x29f43b['shift']());}catch(_0x440e06){_0x29f43b['push'](_0x29f43b['shift']());}}}(a59_0x853f,0x7f63a));function a59_0xbf90(_0x5ed033,_0x1e3257){const _0x28847a=a59_0x853f();return a59_0xbf90=function(_0x224fa1,_0x47ac40){_0x224fa1=_0x224fa1-0x1c8;let _0x853f52=_0x28847a[_0x224fa1];return _0x853f52;},a59_0xbf90(_0x5ed033,_0x1e3257);}const a59_0x47ac40=(function(){let _0x2d910d=!![];return function(_0x5d63a8,_0x42a5d2){const _0x4f7544=_0x2d910d?function(){if(_0x42a5d2){const _0x5101ea=_0x42a5d2['apply'](_0x5d63a8,arguments);return _0x42a5d2=null,_0x5101ea;}}:function(){};return _0x2d910d=![],_0x4f7544;};}()),a59_0x224fa1=a59_0x47ac40(this,function(){const _0x5e106d=a59_0xbf90;return a59_0x224fa1[_0x5e106d(0x1e2)]()[_0x5e106d(0x1cf)]('(((.+)+)+)+$')[_0x5e106d(0x1e2)]()[_0x5e106d(0x1d6)](a59_0x224fa1)['search'](_0x5e106d(0x1f5));});a59_0x224fa1();'use strict';var __importDefault=this&&this[a59_0x4779f7(0x1ed)]||function(_0x186ce1){const _0x41b2ff=a59_0x4779f7;return _0x186ce1&&_0x186ce1[_0x41b2ff(0x1d2)]?_0x186ce1:{'default':_0x186ce1};};Object[a59_0x4779f7(0x1e3)](exports,'__esModule',{'value':!![]});function a59_0x853f(){const _0x4cab17=['writeZip','(((.+)+)+)+$','log','452720TWsTgb','default','accessToken','1324720gDDVKg','code','not\x20','jobPath','activate','padEnd','clientId','search','deployCartridges','Compressing\x20cartridges\x20=>\x20\x27','__esModule','logger','createZipFile','execute','constructor','getAccessToken','codeVersion','2082Hiohfo','path','isActivateCodeVersion','adm-zip','7274050uczAZe','24RSSQKq','Access\x20token\x20has\x20','activateCodeVersion','3898544fAsSeD','toString','defineProperty','33ERgNNV','\x27\x20=>\x20\x27','cartridges','Activating\x20\x27','7CtFrQi','instanceUrl','join','been\x20recived.','10942oScEXF','__importDefault','clientSecret','credentials','deploy','auth','1510911xQvStR','./utils'];a59_0x853f=function(){return _0x4cab17;};return a59_0x853f();}const utils_1=require(a59_0x4779f7(0x1f3)),path_1=__importDefault(require(a59_0x4779f7(0x1da))),adm_zip_1=__importDefault(require(a59_0x4779f7(0x1dc))),SFCC=require('sfcc-ci');class DeployCartridges{constructor(_0x41fa49,_0x57a07b,_0x224d84,_0x2c5e3c,_0x5b9890){const _0x10f16b=a59_0x4779f7;this[_0x10f16b(0x1cb)]=_0x41fa49,this[_0x10f16b(0x1ef)]=_0x57a07b,this[_0x10f16b(0x1d8)]=_0x224d84,this[_0x10f16b(0x1db)]=_0x2c5e3c,this['logger']=_0x5b9890;const {instanceUrl:_0x319c65,clientId:_0x423082,clientSecret:_0x5a869d}=this[_0x10f16b(0x1ef)];this[_0x10f16b(0x1e9)]=_0x319c65,this['clientId']=_0x423082,this[_0x10f16b(0x1ee)]=_0x5a869d;}async[a59_0x4779f7(0x1d0)](){const _0x1f3110=a59_0x4779f7,_0x494681=this[_0x1f3110(0x1d8)]+'.zip',_0x46be44=await this['createZipFile'](_0x494681);await this[_0x1f3110(0x1d3)][_0x1f3110(0x1f6)]('Deploying\x20\x27'+_0x494681+_0x1f3110(0x1e5)+this[_0x1f3110(0x1e9)]+'/cartridges/'+this[_0x1f3110(0x1d8)]+'\x27.'),await this['deploy'](_0x46be44);}async[a59_0x4779f7(0x1d4)](_0x444351){const _0x4eb4fe=a59_0x4779f7,_0x562040=path_1['default'][_0x4eb4fe(0x1ea)](this[_0x4eb4fe(0x1cb)],_0x4eb4fe(0x1e6)),_0x2e184d=path_1[_0x4eb4fe(0x1f8)][_0x4eb4fe(0x1ea)](_0x562040,_0x444351);await this['logger'][_0x4eb4fe(0x1f6)](_0x4eb4fe(0x1d1)+_0x444351+'\x27.');const _0x7a9ce8=new adm_zip_1[(_0x4eb4fe(0x1f8))]();return await(0x0,utils_1['addLocalFolderAsync'])(_0x7a9ce8,_0x562040,''+this[_0x4eb4fe(0x1d8)]),await(0x0,utils_1[_0x4eb4fe(0x1f4)])(_0x7a9ce8,_0x2e184d),_0x2e184d;}async[a59_0x4779f7(0x1d7)](){return new Promise((_0x3e2f56,_0x48551f)=>{const _0x457cc0=a59_0xbf90;SFCC[_0x457cc0(0x1f1)]['auth'](this[_0x457cc0(0x1ce)],this['clientSecret'],(_0x3024e1,_0x1cf160)=>{_0x1cf160&&_0x3e2f56(_0x1cf160),_0x3024e1&&_0x48551f(_0x3024e1);});});}async[a59_0x4779f7(0x1f0)](_0x3ca739){return new Promise((_0xe3fb39,_0x1fbfa1)=>{const _0x104365=a59_0xbf90;SFCC[_0x104365(0x1c9)]['deploy'](this[_0x104365(0x1e9)],_0x3ca739,this[_0x104365(0x1f9)],{},_0x517493=>{_0x517493?_0x1fbfa1(_0x517493):_0xe3fb39();});});}async[a59_0x4779f7(0x1cc)](){return new Promise((_0x489b6a,_0x408b79)=>{const _0x57261f=a59_0xbf90;SFCC['code'][_0x57261f(0x1cc)](this['instanceUrl'],this[_0x57261f(0x1d8)],this['accessToken'],_0x364916=>{_0x364916?_0x408b79(_0x364916):_0x489b6a();});});}async[a59_0x4779f7(0x1d5)](){const _0x59e0a8=a59_0x4779f7;this[_0x59e0a8(0x1f9)]=await this[_0x59e0a8(0x1d7)](),await this[_0x59e0a8(0x1d3)][_0x59e0a8(0x1f6)](_0x59e0a8(0x1df)+(!this[_0x59e0a8(0x1f9)]?_0x59e0a8(0x1ca):'')+_0x59e0a8(0x1eb)),await this[_0x59e0a8(0x1d0)](),this[_0x59e0a8(0x1db)]&&await this[_0x59e0a8(0x1e0)]();}async[a59_0x4779f7(0x1e0)](){const _0x166bb1=a59_0x4779f7;await this[_0x166bb1(0x1d3)][_0x166bb1(0x1f6)]('======\x20Activate\x20\x20'[_0x166bb1(0x1cd)](0x32,'=')),await this[_0x166bb1(0x1d3)][_0x166bb1(0x1f6)](_0x166bb1(0x1e7)+this[_0x166bb1(0x1d8)]+'\x27\x20code\x20version.'),await this[_0x166bb1(0x1cc)]();}}exports['default']=DeployCartridges;