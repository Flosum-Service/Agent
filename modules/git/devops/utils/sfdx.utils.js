const a92_0x1e0e28=a92_0x47b7;(function(_0x150dea,_0x4a6be3){const _0x47c1a0=a92_0x47b7,_0x2345b1=_0x150dea();while(!![]){try{const _0x4b37c6=-parseInt(_0x47c1a0(0x1db))/0x1*(-parseInt(_0x47c1a0(0x1be))/0x2)+parseInt(_0x47c1a0(0x1ca))/0x3*(parseInt(_0x47c1a0(0x1c1))/0x4)+parseInt(_0x47c1a0(0x1cf))/0x5+-parseInt(_0x47c1a0(0x1d5))/0x6*(-parseInt(_0x47c1a0(0x1d0))/0x7)+-parseInt(_0x47c1a0(0x1d1))/0x8+parseInt(_0x47c1a0(0x1d4))/0x9*(-parseInt(_0x47c1a0(0x1d2))/0xa)+parseInt(_0x47c1a0(0x1da))/0xb*(-parseInt(_0x47c1a0(0x1cb))/0xc);if(_0x4b37c6===_0x4a6be3)break;else _0x2345b1['push'](_0x2345b1['shift']());}catch(_0x1b768e){_0x2345b1['push'](_0x2345b1['shift']());}}}(a92_0x1215,0xa4478));const a92_0x3ef47f=(function(){let _0x36ce24=!![];return function(_0x36adfb,_0x181031){const _0x3b5bb8=_0x36ce24?function(){const _0x1621ad=a92_0x47b7;if(_0x181031){const _0xf313b3=_0x181031[_0x1621ad(0x1c6)](_0x36adfb,arguments);return _0x181031=null,_0xf313b3;}}:function(){};return _0x36ce24=![],_0x3b5bb8;};}()),a92_0x16e965=a92_0x3ef47f(this,function(){const _0x12c4b0=a92_0x47b7;return a92_0x16e965['toString']()[_0x12c4b0(0x1e4)](_0x12c4b0(0x1d3))['toString']()[_0x12c4b0(0x1e1)](a92_0x16e965)[_0x12c4b0(0x1e4)]('(((.+)+)+)+$');});a92_0x16e965();'use strict';var __importDefault=this&&this[a92_0x1e0e28(0x1d7)]||function(_0x42ace6){const _0x54bff4=a92_0x1e0e28;return _0x42ace6&&_0x42ace6[_0x54bff4(0x1c5)]?_0x42ace6:{'default':_0x42ace6};};Object['defineProperty'](exports,a92_0x1e0e28(0x1c5),{'value':!![]}),exports[a92_0x1e0e28(0x1bf)]=void 0x0;const path_1=__importDefault(require(a92_0x1e0e28(0x1c8))),fs_internal_1=require(a92_0x1e0e28(0x1cc)),shell_internal_1=require(a92_0x1e0e28(0x1e5)),sfdx_utils_1=require('../../salesforce/utils/sfdx.utils'),shortid_1=__importDefault(require(a92_0x1e0e28(0x1de)));function a92_0x47b7(_0x62bf6c,_0xf3aa84){const _0x287bfd=a92_0x1215();return a92_0x47b7=function(_0x16e965,_0x3ef47f){_0x16e965=_0x16e965-0x1bd;let _0x12152f=_0x287bfd[_0x16e965];return _0x12152f;},a92_0x47b7(_0x62bf6c,_0xf3aa84);}class SFDXUtils{constructor(){const _0x3889a0=a92_0x1e0e28;this[_0x3889a0(0x1dd)]=path_1[_0x3889a0(0x1c2)][_0x3889a0(0x1dc)](process['cwd'](),_0x3889a0(0x1c9),_0x3889a0(0x1df)),this['uniqueId']=(0x0,shortid_1[_0x3889a0(0x1c2)])();}get[a92_0x1e0e28(0x1bd)](){const _0x1af973=a92_0x1e0e28;return''+this[_0x1af973(0x1e3)];}get[a92_0x1e0e28(0x1cd)](){const _0x13c8fa=a92_0x1e0e28;return path_1[_0x13c8fa(0x1c2)]['join'](this[_0x13c8fa(0x1dd)],this[_0x13c8fa(0x1bd)]);}async[a92_0x1e0e28(0x1e2)](_0x5a2e7b){const _0xccc82d=a92_0x1e0e28;!await fs_internal_1['FS']['exists'](this[_0xccc82d(0x1dd)])&&await fs_internal_1['FS']['makeDir'](this[_0xccc82d(0x1dd)]),await sfdx_utils_1[_0xccc82d(0x1e6)][_0xccc82d(0x1c0)](this[_0xccc82d(0x1dd)],this['fullProjectName']),await sfdx_utils_1[_0xccc82d(0x1e6)][_0xccc82d(0x1d6)](_0x5a2e7b),await sfdx_utils_1[_0xccc82d(0x1e6)]['mdapiToSource'](_0x5a2e7b,this[_0xccc82d(0x1cd)]);}async['copyProjectTo'](_0x11cd0d,_0x2e5a6c=!![]){const _0x2a6830=a92_0x1e0e28;_0x2e5a6c&&(!await fs_internal_1['FS'][_0x2a6830(0x1d8)](_0x11cd0d+_0x2a6830(0x1c7))&&(_0x2e5a6c=![])),_0x2e5a6c?await shell_internal_1['Shell'][_0x2a6830(0x1c3)]('cp\x20-r\x20'+this[_0x2a6830(0x1cd)]+'/force-app\x20'+_0x11cd0d):await shell_internal_1[_0x2a6830(0x1d9)][_0x2a6830(0x1c3)](_0x2a6830(0x1ce)+this[_0x2a6830(0x1cd)]+_0x2a6830(0x1c4)+_0x11cd0d);}async[a92_0x1e0e28(0x1e0)](){const _0x50e5c2=a92_0x1e0e28;await fs_internal_1['FS'][_0x50e5c2(0x1e0)](this[_0x50e5c2(0x1cd)]);}}exports[a92_0x1e0e28(0x1bf)]=SFDXUtils;function a92_0x1215(){const _0x5069c7=['SFDXUtils','createEmptyProject','32584cXKUfZ','default','exec','/*\x20','__esModule','apply','/sfdx-project.json','path','.temp','372KkEMHB','636rAQgxG','../../internal/fs.internal','dir','cp\x20-r\x20','5814610xmgYYo','119YrLrLq','9030088ocOtOy','192370lqYBQh','(((.+)+)+)+$','9ZhhCPN','308532CJBomm','createEmptyPackageXml','__importDefault','exists','Shell','371789NBmBNs','565033yQXsLK','join','PROJECTS_PATH','shortid','sfdx','removeDir','constructor','createProjectFrom','uniqueId','search','../../internal/shell.internal','SFDX','fullProjectName','2ZkEmij'];a92_0x1215=function(){return _0x5069c7;};return a92_0x1215();}