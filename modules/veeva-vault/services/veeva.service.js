const a395_0x52d36d=a395_0x334d;function a395_0x527b(){const _0x583bd7=['CANCELLED','ERRORS_ENCOUNTERED','responseStatus','QUEUEING','450thLRFd','SUCCESS','3902406sDHYFS','CREATE_RECORDS_LIMIT','defineProperty','MISSED_SCHEDULE','Creating\x20','status','../../shared/utils','search','../constants/veeva.constants','errors','data','toString','apply','5ZEjArU','Cannot\x20retrieve\x20job.\x20Job\x20status:\x20','map','createVeevaObjectRecords','ENDPOINT_VQL','RUNNING','_logger','\x20records.','deleteVeevaObjectRecords','740ALQLaI','101EPDJsk','9402QeXYRa','push','length','flat','../classes/errors/veeva-error','VeevaJobStatus','19305240mkuAsp','32582kavIjH','_connection','Unknown\x20Job\x20status\x20:\x20\x27','(((.+)+)+)+$','__esModule','5784975PtLcUk','VeevaError','JOB_STATUS_TIMEOUT','get','\x20records','Check\x20Retrieval\x20Status:\x20Not\x20Completed.\x20Next\x20check\x20after\x2010\x20seconds.','constructor','5030550jmgyDw','chunkArray','sleep','DELETE_RECORDS_LIMIT','executeManyVQL','delete','log','all','VeevaResponseStatus','8PZzquf','VeevaConstants','application/json','VeevaService','5235zPRfjo'];a395_0x527b=function(){return _0x583bd7;};return a395_0x527b();}(function(_0x1aaba0,_0x584ee4){const _0x5ea4d2=a395_0x334d,_0x32e4cd=_0x1aaba0();while(!![]){try{const _0x21e98b=-parseInt(_0x5ea4d2(0x145))/0x1*(parseInt(_0x5ea4d2(0x146))/0x2)+parseInt(_0x5ea4d2(0x127))/0x3*(-parseInt(_0x5ea4d2(0x144))/0x4)+parseInt(_0x5ea4d2(0x13b))/0x5*(-parseInt(_0x5ea4d2(0x12e))/0x6)+parseInt(_0x5ea4d2(0x11a))/0x7+-parseInt(_0x5ea4d2(0x123))/0x8*(parseInt(_0x5ea4d2(0x152))/0x9)+parseInt(_0x5ea4d2(0x12c))/0xa*(parseInt(_0x5ea4d2(0x14d))/0xb)+parseInt(_0x5ea4d2(0x14c))/0xc;if(_0x21e98b===_0x584ee4)break;else _0x32e4cd['push'](_0x32e4cd['shift']());}catch(_0x2bc8f6){_0x32e4cd['push'](_0x32e4cd['shift']());}}}(a395_0x527b,0x5a4f4));const a395_0x50cb93=(function(){let _0x5d00c3=!![];return function(_0x5c64c7,_0x54adbf){const _0x21f372=_0x5d00c3?function(){const _0x5ceaf9=a395_0x334d;if(_0x54adbf){const _0x504bfa=_0x54adbf[_0x5ceaf9(0x13a)](_0x5c64c7,arguments);return _0x54adbf=null,_0x504bfa;}}:function(){};return _0x5d00c3=![],_0x21f372;};}()),a395_0x1c3ce3=a395_0x50cb93(this,function(){const _0x58d352=a395_0x334d;return a395_0x1c3ce3[_0x58d352(0x139)]()[_0x58d352(0x135)]('(((.+)+)+)+$')['toString']()[_0x58d352(0x119)](a395_0x1c3ce3)['search'](_0x58d352(0x150));});a395_0x1c3ce3();'use strict';Object[a395_0x52d36d(0x130)](exports,a395_0x52d36d(0x151),{'value':!![]}),exports[a395_0x52d36d(0x126)]=void 0x0;function a395_0x334d(_0x4297bc,_0x56ff54){const _0x2f63ca=a395_0x527b();return a395_0x334d=function(_0x1c3ce3,_0x50cb93){_0x1c3ce3=_0x1c3ce3-0x117;let _0x527b80=_0x2f63ca[_0x1c3ce3];return _0x527b80;},a395_0x334d(_0x4297bc,_0x56ff54);}const utils_1=require(a395_0x52d36d(0x134)),status_enums_1=require('../enums/status.enums'),veeva_error_1=require(a395_0x52d36d(0x14a)),veeva_constants_1=require(a395_0x52d36d(0x136));class VeevaService{constructor({connection:_0x39139e,logger:_0x491f87}){const _0x5a2429=a395_0x52d36d;this[_0x5a2429(0x14e)]=_0x39139e,this[_0x5a2429(0x141)]=_0x491f87;}async[a395_0x52d36d(0x11e)](_0x5b8988){const _0x2037ca=a395_0x52d36d,_0x48ea61=[];for(const _0x39a335 of _0x5b8988){_0x48ea61[_0x2037ca(0x147)](this['executeVQL'](_0x39a335));}const _0x5823c5=await Promise[_0x2037ca(0x121)](_0x48ea61);return _0x5823c5[_0x2037ca(0x149)]();}async['executeVQL'](_0xd69c36){const _0xe52b9f=a395_0x52d36d,_0x8ea86a=[];let _0x3ec886=this[_0xe52b9f(0x14e)]['post'](veeva_constants_1[_0xe52b9f(0x124)][_0xe52b9f(0x13f)],new URLSearchParams([['q',_0xd69c36]]),{'headers':{'Content-Type':'application/x-www-form-urlencoded'}}),_0x94c6f8=![];do{const _0x232df7=await _0x3ec886,_0x486fab=_0x232df7[_0xe52b9f(0x138)];if(_0x486fab['responseStatus']!==status_enums_1['VeevaResponseStatus'][_0xe52b9f(0x12d)])throw new veeva_error_1['VeevaError'](_0x486fab['errors']);const {responseDetails:{next_page:_0x214122},data:_0x145fd8}=_0x486fab;_0x214122?_0x3ec886=this[_0xe52b9f(0x14e)][_0xe52b9f(0x155)](_0x214122):_0x94c6f8=!![],_0x8ea86a['push'](..._0x145fd8);}while(!_0x94c6f8);return _0x8ea86a;}async[a395_0x52d36d(0x13e)](_0x4ed1aa,_0x3ee7cb){const _0x3653cd=a395_0x52d36d,_0x351ee5=[],_0x1a58b6=(0x0,utils_1[_0x3653cd(0x11b)])(_0x3ee7cb,VeevaService[_0x3653cd(0x12f)]),_0x23d550=_0x3ee7cb[_0x3653cd(0x148)];let _0x4070ec=0x0;for(const _0x3854e2 of _0x1a58b6){_0x4070ec+=_0x3854e2[_0x3653cd(0x148)],this[_0x3653cd(0x141)][_0x3653cd(0x120)](_0x3653cd(0x132)+_0x4070ec+'/'+_0x23d550+_0x3653cd(0x142));const _0xc8173d=await this[_0x3653cd(0x14e)]['post'](_0x4ed1aa,_0x3854e2),_0x3d09cb=_0xc8173d[_0x3653cd(0x138)];if(_0x3d09cb['responseStatus']===status_enums_1[_0x3653cd(0x122)][_0x3653cd(0x12d)])for(const {responseStatus:_0x1a5f55,data:_0x18ceb1}of _0x3d09cb[_0x3653cd(0x138)]){if(_0x1a5f55===status_enums_1[_0x3653cd(0x122)][_0x3653cd(0x12d)])_0x351ee5[_0x3653cd(0x147)](_0x18ceb1['id']);else throw new veeva_error_1[(_0x3653cd(0x153))](_0x3d09cb[_0x3653cd(0x137)]);}else throw new veeva_error_1[(_0x3653cd(0x153))](_0x3d09cb[_0x3653cd(0x137)]);}return _0x351ee5;}async[a395_0x52d36d(0x143)](_0x3d1811,_0x4de9f0){const _0xdf2769=a395_0x52d36d,_0x31745c=_0x4de9f0[_0xdf2769(0x13d)](_0x2847d3=>({'id':_0x2847d3})),_0x1ec3b6=(0x0,utils_1['chunkArray'])(_0x31745c,VeevaService[_0xdf2769(0x11d)]);let _0x342fac=0x0;for(const _0x195a2a of _0x1ec3b6){_0x342fac+=_0x195a2a[_0xdf2769(0x148)],this['_logger'][_0xdf2769(0x120)]('Deleting\x20'+_0x342fac+'/'+_0x4de9f0['length']+_0xdf2769(0x117));const {data:_0x305e43}=await this[_0xdf2769(0x14e)][_0xdf2769(0x11f)](_0x3d1811,{'headers':{'Content-Type':_0xdf2769(0x125)},'data':_0x195a2a});if(_0x305e43[_0xdf2769(0x12a)]===status_enums_1[_0xdf2769(0x122)]['SUCCESS'])for(const _0x29c498 of _0x305e43['data']){const {responseStatus:_0x7b4471,errors:_0x5e5420}=_0x29c498;if(_0x7b4471!==status_enums_1[_0xdf2769(0x122)][_0xdf2769(0x12d)])throw new veeva_error_1[(_0xdf2769(0x153))](_0x5e5420);}else throw new veeva_error_1['VeevaError'](_0x305e43[_0xdf2769(0x137)]);}}async['getJobResult'](_0x31aaa4){const _0x3a0c4c=a395_0x52d36d,_0x48c406=[];do{this[_0x3a0c4c(0x141)][_0x3a0c4c(0x120)](_0x3a0c4c(0x118)),await(0x0,utils_1[_0x3a0c4c(0x11c)])(VeevaService[_0x3a0c4c(0x154)]);const _0x490fec=[];for(const _0xb5c9d4 of _0x31aaa4){const {data:_0x42f376}=await this[_0x3a0c4c(0x14e)][_0x3a0c4c(0x155)](_0xb5c9d4);if(_0x42f376[_0x3a0c4c(0x12a)]===status_enums_1['VeevaResponseStatus'][_0x3a0c4c(0x12d)]){const {data:_0x3814d6}=_0x42f376;switch(_0x3814d6[_0x3a0c4c(0x133)]){case status_enums_1['VeevaJobStatus'][_0x3a0c4c(0x12d)]:case status_enums_1['VeevaJobStatus'][_0x3a0c4c(0x129)]:_0x48c406[_0x3a0c4c(0x147)](_0x3814d6);break;case status_enums_1['VeevaJobStatus'][_0x3a0c4c(0x12b)]:case status_enums_1[_0x3a0c4c(0x14b)][_0x3a0c4c(0x128)]:case status_enums_1[_0x3a0c4c(0x14b)][_0x3a0c4c(0x131)]:throw new Error(_0x3a0c4c(0x13c)+_0x3814d6[_0x3a0c4c(0x133)]);case status_enums_1['VeevaJobStatus']['QUEUED']:case status_enums_1[_0x3a0c4c(0x14b)][_0x3a0c4c(0x140)]:case status_enums_1[_0x3a0c4c(0x14b)]['SCHEDULED']:_0x490fec[_0x3a0c4c(0x147)](_0xb5c9d4);break;default:throw new Error(_0x3a0c4c(0x14f)+_0x3814d6[_0x3a0c4c(0x133)]+'\x27');}}else throw new veeva_error_1[(_0x3a0c4c(0x153))](_0x42f376[_0x3a0c4c(0x137)]);}_0x31aaa4=_0x490fec;}while(_0x31aaa4[_0x3a0c4c(0x148)]);return _0x48c406;}}exports['VeevaService']=VeevaService,VeevaService['JOB_STATUS_TIMEOUT']=0x2710,VeevaService['CREATE_RECORDS_LIMIT']=0x1f4,VeevaService[a395_0x52d36d(0x11d)]=0x1f4;