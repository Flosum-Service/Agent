const a160_0x478117=a160_0x3841;(function(_0x27f4dd,_0x1651fd){const _0x5d0ecd=a160_0x3841,_0x9feeea=_0x27f4dd();while(!![]){try{const _0x56ab27=-parseInt(_0x5d0ecd(0x1d7))/0x1*(parseInt(_0x5d0ecd(0x1d8))/0x2)+parseInt(_0x5d0ecd(0x1cf))/0x3+-parseInt(_0x5d0ecd(0x1e6))/0x4*(-parseInt(_0x5d0ecd(0x1e8))/0x5)+parseInt(_0x5d0ecd(0x1ef))/0x6+-parseInt(_0x5d0ecd(0x1f0))/0x7*(parseInt(_0x5d0ecd(0x1d4))/0x8)+-parseInt(_0x5d0ecd(0x1e9))/0x9+-parseInt(_0x5d0ecd(0x1e1))/0xa;if(_0x56ab27===_0x1651fd)break;else _0x9feeea['push'](_0x9feeea['shift']());}catch(_0x4055cf){_0x9feeea['push'](_0x9feeea['shift']());}}}(a160_0x3dee,0xab4f8));const a160_0x3ee1af=(function(){let _0x456d3a=!![];return function(_0x4bee19,_0x236bba){const _0x128140=_0x456d3a?function(){const _0x2f3ef8=a160_0x3841;if(_0x236bba){const _0xddb3a3=_0x236bba[_0x2f3ef8(0x1e4)](_0x4bee19,arguments);return _0x236bba=null,_0xddb3a3;}}:function(){};return _0x456d3a=![],_0x128140;};}()),a160_0x14f01c=a160_0x3ee1af(this,function(){const _0x33ea44=a160_0x3841;return a160_0x14f01c['toString']()['search']('(((.+)+)+)+$')[_0x33ea44(0x1eb)]()['constructor'](a160_0x14f01c)[_0x33ea44(0x1db)](_0x33ea44(0x1e7));});a160_0x14f01c();'use strict';var __importDefault=this&&this[a160_0x478117(0x1d1)]||function(_0x12bc5a){const _0x141d19=a160_0x478117;return _0x12bc5a&&_0x12bc5a[_0x141d19(0x1ed)]?_0x12bc5a:{'default':_0x12bc5a};};Object[a160_0x478117(0x1e0)](exports,a160_0x478117(0x1ed),{'value':!![]});const fs_1=require('fs');require(a160_0x478117(0x1d6));const typedi_1=__importDefault(require('typedi'));require(a160_0x478117(0x1ce));const sync_service_1=require(a160_0x478117(0x1d2)),childs_utils_1=require(a160_0x478117(0x1e2)),salesforce_credentials_service_1=require('../salesforce/services/salesforce.credentials-service'),providers_tokens_1=require('../providers/providers.tokens'),salesforce_logger_v3_service_1=require('../salesforce/services/salesforce-logger-v3.service'),prepare_to_job_1=require(a160_0x478117(0x1cd)),socketPath=(0x0,childs_utils_1['getSocketPath'])();if(!socketPath)throw new Error(a160_0x478117(0x1d0));function a160_0x3dee(){const _0x3eed82=['18gjGGlQ','setCredentials','SyncService','search','connectionId','get','syncBody','readFileSync','defineProperty','8569100faMjNe','./childs.utils','set','apply','run','116pSflDt','(((.+)+)+)+$','218410xqzUMg','7165125VBieeB','SalesforceCredentialsService','toString','then','__esModule','SalesforceLogger3','7520868omMNry','959rSXCub','exit','./prepare-to-job','../../../common/env','1273773HzKEDT','Unresolved\x20socket\x20path','__importDefault','../devops/services/sync.service','loggerId','19416bZsFHX','default','reflect-metadata','28625vmZJNs'];a160_0x3dee=function(){return _0x3eed82;};return a160_0x3dee();}function a160_0x3841(_0x95937c,_0x2118c2){const _0x986825=a160_0x3dee();return a160_0x3841=function(_0x14f01c,_0x3ee1af){_0x14f01c=_0x14f01c-0x1cc;let _0x3dee65=_0x986825[_0x14f01c];return _0x3dee65;},a160_0x3841(_0x95937c,_0x2118c2);}const message=(0x0,fs_1[a160_0x478117(0x1df)])(socketPath,{'encoding':'utf-8'}),{data}=JSON['parse'](message),execute=async _0x52d639=>{const _0x212669=a160_0x478117;salesforce_credentials_service_1[_0x212669(0x1ea)][_0x212669(0x1d9)](),typedi_1[_0x212669(0x1d5)][_0x212669(0x1e3)](providers_tokens_1['Tokens']['logger'],new salesforce_logger_v3_service_1[(_0x212669(0x1ee))](_0x52d639[_0x212669(0x1d3)])),await(0x0,prepare_to_job_1['prepareToJob'])(_0x52d639[_0x212669(0x1dc)]);const _0x4bc12e=typedi_1['default'][_0x212669(0x1dd)](sync_service_1[_0x212669(0x1da)]);await _0x4bc12e[_0x212669(0x1e5)](_0x52d639[_0x212669(0x1de)]);};execute(data)[a160_0x478117(0x1ec)](()=>process[a160_0x478117(0x1cc)](0x0))['catch'](()=>process['exit'](0x0));