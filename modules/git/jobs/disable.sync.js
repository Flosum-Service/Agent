const a156_0x59cafc=a156_0x3051;(function(_0x5f1d28,_0x57ab99){const _0x2ae55c=a156_0x3051,_0x4edea5=_0x5f1d28();while(!![]){try{const _0x2fc3a0=-parseInt(_0x2ae55c(0x1cf))/0x1+parseInt(_0x2ae55c(0x1d7))/0x2*(parseInt(_0x2ae55c(0x1c2))/0x3)+parseInt(_0x2ae55c(0x1d9))/0x4*(parseInt(_0x2ae55c(0x1e5))/0x5)+parseInt(_0x2ae55c(0x1e2))/0x6*(-parseInt(_0x2ae55c(0x1c1))/0x7)+-parseInt(_0x2ae55c(0x1d0))/0x8+parseInt(_0x2ae55c(0x1c8))/0x9*(-parseInt(_0x2ae55c(0x1d6))/0xa)+parseInt(_0x2ae55c(0x1d4))/0xb;if(_0x2fc3a0===_0x57ab99)break;else _0x4edea5['push'](_0x4edea5['shift']());}catch(_0x55f98b){_0x4edea5['push'](_0x4edea5['shift']());}}}(a156_0x5801,0xdc86f));const a156_0x1506f8=(function(){let _0x2cb8db=!![];return function(_0x377366,_0x3b3714){const _0x3e21cd=_0x2cb8db?function(){const _0x4ee68a=a156_0x3051;if(_0x3b3714){const _0x113f58=_0x3b3714[_0x4ee68a(0x1dd)](_0x377366,arguments);return _0x3b3714=null,_0x113f58;}}:function(){};return _0x2cb8db=![],_0x3e21cd;};}()),a156_0x24729b=a156_0x1506f8(this,function(){const _0x3cb415=a156_0x3051;return a156_0x24729b['toString']()[_0x3cb415(0x1c4)](_0x3cb415(0x1c7))[_0x3cb415(0x1d8)]()[_0x3cb415(0x1e6)](a156_0x24729b)[_0x3cb415(0x1c4)]('(((.+)+)+)+$');});a156_0x24729b();'use strict';var __importDefault=this&&this[a156_0x59cafc(0x1c0)]||function(_0x3526c8){return _0x3526c8&&_0x3526c8['__esModule']?_0x3526c8:{'default':_0x3526c8};};Object[a156_0x59cafc(0x1bf)](exports,a156_0x59cafc(0x1c6),{'value':!![]});const fs_1=require('fs');require(a156_0x59cafc(0x1ce));const typedi_1=__importDefault(require('typedi'));function a156_0x3051(_0x51a32d,_0x5a3326){const _0x11352f=a156_0x5801();return a156_0x3051=function(_0x24729b,_0x1506f8){_0x24729b=_0x24729b-0x1bf;let _0x580135=_0x11352f[_0x24729b];return _0x580135;},a156_0x3051(_0x51a32d,_0x5a3326);}require('../../../common/env');const disable_sync_service_1=require(a156_0x59cafc(0x1d3)),childs_utils_1=require(a156_0x59cafc(0x1cd)),salesforce_credentials_service_1=require(a156_0x59cafc(0x1d1)),providers_tokens_1=require(a156_0x59cafc(0x1cc)),salesforce_logger_v3_service_1=require('../salesforce/services/salesforce-logger-v3.service'),prepare_to_job_1=require('./prepare-to-job'),socketPath=(0x0,childs_utils_1[a156_0x59cafc(0x1d2)])();if(!socketPath)throw new Error(a156_0x59cafc(0x1de));const message=(0x0,fs_1[a156_0x59cafc(0x1cb)])(socketPath,{'encoding':a156_0x59cafc(0x1d5)}),{data}=JSON[a156_0x59cafc(0x1e0)](message),execute=async _0x653340=>{const _0x579612=a156_0x59cafc;salesforce_credentials_service_1['SalesforceCredentialsService']['setCredentials'](),typedi_1[_0x579612(0x1e4)][_0x579612(0x1c3)](providers_tokens_1[_0x579612(0x1da)][_0x579612(0x1c9)],new salesforce_logger_v3_service_1[(_0x579612(0x1db))](_0x653340['loggerId'])),await(0x0,prepare_to_job_1[_0x579612(0x1e3)])(_0x653340[_0x579612(0x1df)]);const _0x489aea=typedi_1[_0x579612(0x1e4)][_0x579612(0x1c5)](disable_sync_service_1['DisableSyncService']);await _0x489aea[_0x579612(0x1dc)]();};function a156_0x5801(){const _0x2d6818=['exit','6MEDKVl','prepareToJob','default','30YOYTjo','constructor','defineProperty','__importDefault','8853019kAzjuV','12jqGoAr','set','search','get','__esModule','(((.+)+)+)+$','158040GBodLT','logger','catch','readFileSync','../providers/providers.tokens','./childs.utils','reflect-metadata','1157999vpltUp','10256864sKjntN','../salesforce/services/salesforce.credentials-service','getSocketPath','../devops/services/disable-sync.service','38996771SjqtrF','utf-8','500FnBIoy','80518UifdLM','toString','1186604rCqubH','Tokens','SalesforceLogger3','run','apply','Unresolved\x20socket\x20path','connectionId','parse'];a156_0x5801=function(){return _0x2d6818;};return a156_0x5801();}execute(data)['then'](()=>process['exit'](0x0))[a156_0x59cafc(0x1ca)](()=>process[a156_0x59cafc(0x1e1)](0x0));