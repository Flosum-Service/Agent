const a156_0x2332b9=a156_0x49e7;(function(_0x172882,_0x2f741a){const _0x44cefb=a156_0x49e7,_0x46c311=_0x172882();while(!![]){try{const _0x54c0fb=parseInt(_0x44cefb(0x165))/0x1+parseInt(_0x44cefb(0x158))/0x2+-parseInt(_0x44cefb(0x167))/0x3+-parseInt(_0x44cefb(0x151))/0x4*(-parseInt(_0x44cefb(0x170))/0x5)+-parseInt(_0x44cefb(0x153))/0x6*(-parseInt(_0x44cefb(0x171))/0x7)+-parseInt(_0x44cefb(0x16e))/0x8*(-parseInt(_0x44cefb(0x16a))/0x9)+-parseInt(_0x44cefb(0x172))/0xa;if(_0x54c0fb===_0x2f741a)break;else _0x46c311['push'](_0x46c311['shift']());}catch(_0x24b0dd){_0x46c311['push'](_0x46c311['shift']());}}}(a156_0x432f,0x33ca4));const a156_0x111e28=(function(){let _0x2cf0b0=!![];return function(_0x1b9694,_0x4eb99a){const _0x2030c2=_0x2cf0b0?function(){const _0x54f2f5=a156_0x49e7;if(_0x4eb99a){const _0x22063b=_0x4eb99a[_0x54f2f5(0x152)](_0x1b9694,arguments);return _0x4eb99a=null,_0x22063b;}}:function(){};return _0x2cf0b0=![],_0x2030c2;};}()),a156_0x1803bd=a156_0x111e28(this,function(){const _0x48ff3d=a156_0x49e7;return a156_0x1803bd[_0x48ff3d(0x160)]()[_0x48ff3d(0x169)]('(((.+)+)+)+$')[_0x48ff3d(0x160)]()['constructor'](a156_0x1803bd)[_0x48ff3d(0x169)](_0x48ff3d(0x15b));});a156_0x1803bd();'use strict';var __importDefault=this&&this[a156_0x2332b9(0x161)]||function(_0x4697ee){const _0x1cac1=a156_0x2332b9;return _0x4697ee&&_0x4697ee[_0x1cac1(0x162)]?_0x4697ee:{'default':_0x4697ee};};Object[a156_0x2332b9(0x163)](exports,'__esModule',{'value':!![]});const fs_1=require('fs');require(a156_0x2332b9(0x15f));const typedi_1=__importDefault(require('typedi'));require(a156_0x2332b9(0x150));const sync_service_1=require(a156_0x2332b9(0x166)),childs_utils_1=require(a156_0x2332b9(0x159)),salesforce_credentials_service_1=require('../salesforce/services/salesforce.credentials-service'),providers_tokens_1=require(a156_0x2332b9(0x16b)),salesforce_logger_v3_service_1=require(a156_0x2332b9(0x16c)),prepare_to_job_1=require(a156_0x2332b9(0x15c)),socketPath=(0x0,childs_utils_1['getSocketPath'])();if(!socketPath)throw new Error(a156_0x2332b9(0x154));const message=(0x0,fs_1['readFileSync'])(socketPath,{'encoding':'utf-8'}),{data}=JSON[a156_0x2332b9(0x155)](message),execute=async _0x46654b=>{const _0x2628d2=a156_0x2332b9;salesforce_credentials_service_1[_0x2628d2(0x164)][_0x2628d2(0x15d)](),typedi_1[_0x2628d2(0x16f)][_0x2628d2(0x157)](providers_tokens_1[_0x2628d2(0x168)]['logger'],new salesforce_logger_v3_service_1[(_0x2628d2(0x173))](_0x46654b[_0x2628d2(0x15a)])),await(0x0,prepare_to_job_1[_0x2628d2(0x16d)])(_0x46654b['connectionId']);const _0x5e4a7b=typedi_1['default'][_0x2628d2(0x174)](sync_service_1['SyncService']);await _0x5e4a7b['run']();};function a156_0x49e7(_0x33de5b,_0x45522a){const _0x53ab4c=a156_0x432f();return a156_0x49e7=function(_0x1803bd,_0x111e28){_0x1803bd=_0x1803bd-0x150;let _0x432fcf=_0x53ab4c[_0x1803bd];return _0x432fcf;},a156_0x49e7(_0x33de5b,_0x45522a);}execute(data)[a156_0x2332b9(0x156)](()=>process[a156_0x2332b9(0x15e)](0x0))['catch'](()=>process[a156_0x2332b9(0x15e)](0x0));function a156_0x432f(){const _0x45b016=['./prepare-to-job','setCredentials','exit','reflect-metadata','toString','__importDefault','__esModule','defineProperty','SalesforceCredentialsService','3102qXIZKn','../devops/services/sync.service','1235160reqIim','Tokens','search','18729VIcpzM','../providers/providers.tokens','../salesforce/services/salesforce-logger-v3.service','prepareToJob','976FbVdaQ','default','10AaSvQH','28FKZTBm','2422970lWtkNp','SalesforceLogger3','get','../../../common/env','418584CSabQc','apply','92238VsSHlE','Unresolved\x20socket\x20path','parse','then','set','676762lNOCza','./childs.utils','loggerId','(((.+)+)+)+$'];a156_0x432f=function(){return _0x45b016;};return a156_0x432f();}