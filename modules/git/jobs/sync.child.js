function a93_0x213c(_0x1d7308,_0x3e4e40){const _0x2a1107=a93_0x1792();return a93_0x213c=function(_0x16afff,_0x2d36c2){_0x16afff=_0x16afff-0xec;let _0x17925a=_0x2a1107[_0x16afff];return _0x17925a;},a93_0x213c(_0x1d7308,_0x3e4e40);}const a93_0x331518=a93_0x213c;(function(_0x4ccfb5,_0x54745a){const _0x32a1bc=a93_0x213c,_0x4338a7=_0x4ccfb5();while(!![]){try{const _0x138f2d=-parseInt(_0x32a1bc(0x102))/0x1+parseInt(_0x32a1bc(0xf4))/0x2*(-parseInt(_0x32a1bc(0x10d))/0x3)+parseInt(_0x32a1bc(0xed))/0x4*(-parseInt(_0x32a1bc(0xfc))/0x5)+parseInt(_0x32a1bc(0xfa))/0x6*(parseInt(_0x32a1bc(0x114))/0x7)+-parseInt(_0x32a1bc(0x10f))/0x8+-parseInt(_0x32a1bc(0x10a))/0x9+parseInt(_0x32a1bc(0xfe))/0xa*(parseInt(_0x32a1bc(0xfd))/0xb);if(_0x138f2d===_0x54745a)break;else _0x4338a7['push'](_0x4338a7['shift']());}catch(_0x4a30a6){_0x4338a7['push'](_0x4338a7['shift']());}}}(a93_0x1792,0x59a9a));const a93_0x2d36c2=(function(){let _0x4f196b=!![];return function(_0x42dfa3,_0x4296b3){const _0x256808=_0x4f196b?function(){const _0x290228=a93_0x213c;if(_0x4296b3){const _0x248b91=_0x4296b3[_0x290228(0x113)](_0x42dfa3,arguments);return _0x4296b3=null,_0x248b91;}}:function(){};return _0x4f196b=![],_0x256808;};}()),a93_0x16afff=a93_0x2d36c2(this,function(){const _0x4a68f9=a93_0x213c;return a93_0x16afff[_0x4a68f9(0xf9)]()[_0x4a68f9(0x10b)](_0x4a68f9(0x106))[_0x4a68f9(0xf9)]()[_0x4a68f9(0xef)](a93_0x16afff)[_0x4a68f9(0x10b)](_0x4a68f9(0x106));});a93_0x16afff();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x19f669){const _0x4584a1=a93_0x213c;return _0x19f669&&_0x19f669[_0x4584a1(0x100)]?_0x19f669:{'default':_0x19f669};};Object[a93_0x331518(0xfb)](exports,a93_0x331518(0x100),{'value':!![]});const fs_1=require('fs');require(a93_0x331518(0xf0));const typedi_1=__importDefault(require(a93_0x331518(0x104)));require(a93_0x331518(0x10c));const sync_service_1=require(a93_0x331518(0x103)),childs_utils_1=require(a93_0x331518(0xf5)),salesforce_credentials_service_1=require('../salesforce/services/salesforce.credentials-service'),providers_tokens_1=require(a93_0x331518(0xf6)),salesforce_logger_v3_service_1=require(a93_0x331518(0x112)),prepare_to_job_1=require('./prepare-to-job'),socketPath=childs_utils_1[a93_0x331518(0xf7)]();function a93_0x1792(){const _0x2e1a91=['catch','(((.+)+)+)+$','Tokens','SalesforceCredentialsService','logger','2024415sxpnKy','search','../../../common/env','5574JsMlpY','utf-8','4596000HKNuCw','exit','Unresolved\x20socket\x20path','../salesforce/services/salesforce-logger-v3.service','apply','84Ryulur','get','4628Itphrg','prepareToJob','constructor','reflect-metadata','loggerId','SalesforceLogger3','parse','152DRnkQM','./childs.utils','../providers/providers.tokens','getSocketPath','default','toString','240666xuJeVn','defineProperty','1515KryHqY','421597JgunKs','310QqXUNa','then','__esModule','setCredentials','10997zaOzSS','../devops/services/sync.service','typedi'];a93_0x1792=function(){return _0x2e1a91;};return a93_0x1792();}if(!socketPath)throw new Error(a93_0x331518(0x111));const message=fs_1['readFileSync'](socketPath,{'encoding':a93_0x331518(0x10e)}),{data}=JSON[a93_0x331518(0xf3)](message),execute=async _0x5d2b65=>{const _0x262b3b=a93_0x331518;salesforce_credentials_service_1[_0x262b3b(0x108)][_0x262b3b(0x101)](),typedi_1[_0x262b3b(0xf8)]['set'](providers_tokens_1[_0x262b3b(0x107)][_0x262b3b(0x109)],new salesforce_logger_v3_service_1[(_0x262b3b(0xf2))](_0x5d2b65[_0x262b3b(0xf1)])),await prepare_to_job_1[_0x262b3b(0xee)](_0x5d2b65['connectionId']);const _0x3ed70f=typedi_1[_0x262b3b(0xf8)][_0x262b3b(0xec)](sync_service_1['SyncService']);await _0x3ed70f['run']();};execute(data)[a93_0x331518(0xff)](()=>process[a93_0x331518(0x110)](0x0))[a93_0x331518(0x105)](()=>process[a93_0x331518(0x110)](0x0));