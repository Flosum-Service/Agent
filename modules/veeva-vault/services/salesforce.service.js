const a394_0x142d76=a394_0x4c43;(function(_0x55f7fd,_0x4752eb){const _0x198e6a=a394_0x4c43,_0x273125=_0x55f7fd();while(!![]){try{const _0xf9fc2f=-parseInt(_0x198e6a(0x18d))/0x1*(-parseInt(_0x198e6a(0x19d))/0x2)+parseInt(_0x198e6a(0x1a5))/0x3+parseInt(_0x198e6a(0x193))/0x4*(parseInt(_0x198e6a(0x1a9))/0x5)+parseInt(_0x198e6a(0x196))/0x6+-parseInt(_0x198e6a(0x197))/0x7+-parseInt(_0x198e6a(0x191))/0x8*(parseInt(_0x198e6a(0x19a))/0x9)+parseInt(_0x198e6a(0x190))/0xa*(parseInt(_0x198e6a(0x18f))/0xb);if(_0xf9fc2f===_0x4752eb)break;else _0x273125['push'](_0x273125['shift']());}catch(_0x5b74fe){_0x273125['push'](_0x273125['shift']());}}}(a394_0x9608,0x9fc6e));const a394_0x608698=(function(){let _0x23b5ef=!![];return function(_0x144acb,_0x48eda6){const _0x22b98a=_0x23b5ef?function(){const _0x4d80a6=a394_0x4c43;if(_0x48eda6){const _0x4e99b1=_0x48eda6[_0x4d80a6(0x1a7)](_0x144acb,arguments);return _0x48eda6=null,_0x4e99b1;}}:function(){};return _0x23b5ef=![],_0x22b98a;};}()),a394_0x30a2f4=a394_0x608698(this,function(){const _0xe01665=a394_0x4c43;return a394_0x30a2f4[_0xe01665(0x18c)]()[_0xe01665(0x19c)](_0xe01665(0x195))['toString']()['constructor'](a394_0x30a2f4)[_0xe01665(0x19c)](_0xe01665(0x195));});a394_0x30a2f4();function a394_0x9608(){const _0x2c8ac0=['data','(((.+)+)+)+$','3663348IRcVLY','3584518pwmocz','../../shared/utils','push','9nNKmPo','../constants/flosum.constants','search','313898rFJKZD','_connection','ENDPOINT_INSERT_MULTIPLE_RECORDS','get','nextRecordsUrl','retrieveRecords','__esModule','post','456030zZDlMJ','records','apply','INSERT_RECORDS_LIMIT','655525yxMfan','FlosumConstants','SalesforceService','done','defineProperty','toString','2lUFpca','insertMultipleRecords','77WZoPeS','1073510VkXMgV','9486584derpaU','map','16xpTvAp'];a394_0x9608=function(){return _0x2c8ac0;};return a394_0x9608();}'use strict';Object[a394_0x142d76(0x18b)](exports,a394_0x142d76(0x1a3),{'value':!![]}),exports[a394_0x142d76(0x189)]=void 0x0;function a394_0x4c43(_0x336d35,_0x18f64c){const _0x215cfe=a394_0x9608();return a394_0x4c43=function(_0x30a2f4,_0x608698){_0x30a2f4=_0x30a2f4-0x189;let _0x9608f6=_0x215cfe[_0x30a2f4];return _0x9608f6;},a394_0x4c43(_0x336d35,_0x18f64c);}const utils_1=require(a394_0x142d76(0x198)),flosum_constants_1=require(a394_0x142d76(0x19b));class SalesforceService{constructor({connection:_0x372eda}){const _0x334871=a394_0x142d76;this[_0x334871(0x19e)]=_0x372eda;}async[a394_0x142d76(0x18e)](_0x367580,_0x7cb37){const _0x5e2cef=a394_0x142d76,_0x24ff79=[],_0x2a3fa5=_0x7cb37[_0x5e2cef(0x192)](_0x226c40=>({'attributes':{'type':_0x367580},..._0x226c40})),_0x256440=(0x0,utils_1['chunkArray'])(_0x2a3fa5,SalesforceService[_0x5e2cef(0x1a8)]);for(const _0x3c7b26 of _0x256440){const {data:_0x1544fd}=await this[_0x5e2cef(0x19e)][_0x5e2cef(0x1a4)](flosum_constants_1[_0x5e2cef(0x1aa)][_0x5e2cef(0x19f)],{'allOrNone':!![],'records':_0x3c7b26});_0x24ff79[_0x5e2cef(0x199)](..._0x1544fd);}return _0x24ff79;}async[a394_0x142d76(0x1a2)](_0x89dd75){const _0x5637b4=a394_0x142d76,_0x3da2c1=[];let _0x592833,_0x507f70;do{let _0x12391f;!_0x592833?_0x12391f=await this[_0x5637b4(0x19e)]['get'](flosum_constants_1[_0x5637b4(0x1aa)]['ENDPOINT_QUERY'],{'params':{'q':_0x89dd75}}):_0x12391f=await this['_connection'][_0x5637b4(0x1a0)](_0x592833),_0x3da2c1[_0x5637b4(0x199)](..._0x12391f[_0x5637b4(0x194)][_0x5637b4(0x1a6)]),_0x592833=_0x12391f[_0x5637b4(0x194)][_0x5637b4(0x1a1)],_0x507f70=_0x12391f[_0x5637b4(0x194)][_0x5637b4(0x18a)];}while(!_0x507f70);return _0x3da2c1;}}exports[a394_0x142d76(0x189)]=SalesforceService,SalesforceService[a394_0x142d76(0x1a8)]=0xc8;