const a59_0x1c0cf7=a59_0x3906;(function(_0x2cdb29,_0x5a5ea2){const _0x295137=a59_0x3906,_0xf128a1=_0x2cdb29();while(!![]){try{const _0xcfcfb1=parseInt(_0x295137(0x17d))/0x1*(parseInt(_0x295137(0x191))/0x2)+parseInt(_0x295137(0x175))/0x3*(-parseInt(_0x295137(0x189))/0x4)+parseInt(_0x295137(0x171))/0x5*(parseInt(_0x295137(0x173))/0x6)+parseInt(_0x295137(0x18a))/0x7+-parseInt(_0x295137(0x178))/0x8*(parseInt(_0x295137(0x16e))/0x9)+-parseInt(_0x295137(0x190))/0xa+parseInt(_0x295137(0x172))/0xb;if(_0xcfcfb1===_0x5a5ea2)break;else _0xf128a1['push'](_0xf128a1['shift']());}catch(_0x29bd43){_0xf128a1['push'](_0xf128a1['shift']());}}}(a59_0x38a9,0xca223));function a59_0x3906(_0x4ae25c,_0x3d8198){const _0x232a16=a59_0x38a9();return a59_0x3906=function(_0x148f6d,_0x1d44cb){_0x148f6d=_0x148f6d-0x165;let _0x38a94c=_0x232a16[_0x148f6d];return _0x38a94c;},a59_0x3906(_0x4ae25c,_0x3d8198);}const a59_0x1d44cb=(function(){let _0x48cab9=!![];return function(_0x3d4884,_0x1c2ac3){const _0xf823e9=_0x48cab9?function(){const _0x4facbd=a59_0x3906;if(_0x1c2ac3){const _0x32b2e5=_0x1c2ac3[_0x4facbd(0x18c)](_0x3d4884,arguments);return _0x1c2ac3=null,_0x32b2e5;}}:function(){};return _0x48cab9=![],_0xf823e9;};}()),a59_0x148f6d=a59_0x1d44cb(this,function(){const _0x390a7d=a59_0x3906;return a59_0x148f6d[_0x390a7d(0x16a)]()[_0x390a7d(0x18e)](_0x390a7d(0x18d))['toString']()[_0x390a7d(0x17a)](a59_0x148f6d)[_0x390a7d(0x18e)](_0x390a7d(0x18d));});a59_0x148f6d();'use strict';function a59_0x38a9(){const _0x756827=['1374amDyvc','error','request','30496tqLxTu','loggerDetails','constructor','create','SortDirection','1bxUGjC','defineProperty','totalSize','../../../constants','BaseStep','loggerJobState','message','COUNT()','systemLogger','../../job-detail','getRecordsCount','execute','14004tjmFYs','3178007hTIuvJ','exception','apply','(((.+)+)+)+$','search','QueryService','10700730UinucO','394232gIJlVk','../../deploy/deploy-factory','recordsCount','fields','__esModule','@flosum/salesforce','_whereClause','_objectRuleType','toString','DeployFactory','QueryBuilder','from','2655fBrMvp','SALESFORCE_API_VERSION','build','455szBCFz','33538648nXipSI','61050fxaBiM','objectName'];a59_0x38a9=function(){return _0x756827;};return a59_0x38a9();}Object[a59_0x1c0cf7(0x17e)](exports,a59_0x1c0cf7(0x166),{'value':!![]}),exports[a59_0x1c0cf7(0x181)]=void 0x0;const salesforce_1=require(a59_0x1c0cf7(0x167)),retrieve_factory_1=require('../../retrieve/retrieve-factory'),constants_1=require(a59_0x1c0cf7(0x180)),deploy_factory_1=require(a59_0x1c0cf7(0x192)),job_detail_1=require(a59_0x1c0cf7(0x186)),FIELD_ID='Id';class BaseStep{constructor({loggerDetails:_0x45dfc4,loggerJobState:_0x17d3e1,objectName:_0x2cbb7f,request:_0x21f0cb,objectRule:_0x2d0e2e,objectDescribe:_0x47858b}){const _0x4775ad=a59_0x1c0cf7;this[_0x4775ad(0x165)]=[],this['loggerDetails']=_0x45dfc4,this['loggerJobState']=_0x17d3e1,this[_0x4775ad(0x174)]=_0x2cbb7f,this[_0x4775ad(0x177)]=_0x21f0cb,this['_whereClause']=_0x2d0e2e['whereClause'],this[_0x4775ad(0x169)]=_0x2d0e2e['type'],this['objectDescribe']=_0x47858b;}async[a59_0x1c0cf7(0x187)](){const _0x455ee4=a59_0x1c0cf7;try{const _0x5728b6=new salesforce_1[(_0x455ee4(0x16c))]()['select'](_0x455ee4(0x184))[_0x455ee4(0x16d)](this[_0x455ee4(0x174)]);this[_0x455ee4(0x168)]&&_0x5728b6['where'](this[_0x455ee4(0x168)]);const _0x238eb5=await salesforce_1[_0x455ee4(0x18f)][_0x455ee4(0x188)](this[_0x455ee4(0x177)],{},_0x5728b6[_0x455ee4(0x170)](),![],constants_1[_0x455ee4(0x16f)]);return _0x238eb5[_0x455ee4(0x17f)];}catch(_0x4b8b0b){return job_detail_1[_0x455ee4(0x185)][_0x455ee4(0x176)](_0x4b8b0b),-0x1;}}['getRetrieveStream'](){const _0x5b4824=a59_0x1c0cf7,_0x254a1b={'request':this[_0x5b4824(0x177)],'fields':this[_0x5b4824(0x165)],'whereClause':this[_0x5b4824(0x168)],'objectName':this[_0x5b4824(0x174)],'describe':this['objectDescribe'],'indexField':FIELD_ID,'indexFieldDirection':salesforce_1[_0x5b4824(0x17c)]['ASC']};return retrieve_factory_1['RetrieveFactory'][_0x5b4824(0x17b)](_0x254a1b,this[_0x5b4824(0x193)]);}['getDeployStream'](){const _0x2b08b3=a59_0x1c0cf7,_0x36cb6b={'request':this[_0x2b08b3(0x177)],'objectName':this['objectName'],'externalIdField':FIELD_ID,'loggerDetails':this[_0x2b08b3(0x179)],'loggerJobState':this[_0x2b08b3(0x182)]};return deploy_factory_1[_0x2b08b3(0x16b)][_0x2b08b3(0x17b)](_0x36cb6b,this[_0x2b08b3(0x169)]);}['log'](_0x2e9ab8){const _0x5555ad=a59_0x1c0cf7;job_detail_1['systemLogger']['log'](_0x2e9ab8,this[_0x5555ad(0x174)]),this[_0x5555ad(0x179)]['log'](_0x2e9ab8,this[_0x5555ad(0x174)]);}[a59_0x1c0cf7(0x176)](_0x544151){const _0x2ab57f=a59_0x1c0cf7;job_detail_1[_0x2ab57f(0x185)][_0x2ab57f(0x176)](_0x544151,this[_0x2ab57f(0x174)]),this[_0x2ab57f(0x179)][_0x2ab57f(0x18b)](_0x544151[_0x2ab57f(0x183)],this[_0x2ab57f(0x174)]);}}exports[a59_0x1c0cf7(0x181)]=BaseStep;