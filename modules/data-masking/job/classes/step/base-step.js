const a59_0xc83afa=a59_0xcace;(function(_0xe94f01,_0x3e7ce4){const _0x2029ce=a59_0xcace,_0x555222=_0xe94f01();while(!![]){try{const _0x30df8b=parseInt(_0x2029ce(0x202))/0x1+-parseInt(_0x2029ce(0x206))/0x2+-parseInt(_0x2029ce(0x204))/0x3+-parseInt(_0x2029ce(0x208))/0x4+-parseInt(_0x2029ce(0x200))/0x5+parseInt(_0x2029ce(0x1ef))/0x6+parseInt(_0x2029ce(0x1f6))/0x7;if(_0x30df8b===_0x3e7ce4)break;else _0x555222['push'](_0x555222['shift']());}catch(_0x337e04){_0x555222['push'](_0x555222['shift']());}}}(a59_0x3d41,0xb680f));function a59_0xcace(_0xb01133,_0x57bea6){const _0x368178=a59_0x3d41();return a59_0xcace=function(_0x591621,_0x451fdd){_0x591621=_0x591621-0x1e6;let _0x3d410b=_0x368178[_0x591621];return _0x3d410b;},a59_0xcace(_0xb01133,_0x57bea6);}const a59_0x451fdd=(function(){let _0x5e072b=!![];return function(_0x252ff1,_0x1e59a0){const _0x5f402d=_0x5e072b?function(){const _0x5971d9=a59_0xcace;if(_0x1e59a0){const _0x2d24aa=_0x1e59a0[_0x5971d9(0x205)](_0x252ff1,arguments);return _0x1e59a0=null,_0x2d24aa;}}:function(){};return _0x5e072b=![],_0x5f402d;};}()),a59_0x591621=a59_0x451fdd(this,function(){const _0x32365b=a59_0xcace;return a59_0x591621[_0x32365b(0x20d)]()['search'](_0x32365b(0x1ea))[_0x32365b(0x20d)]()['constructor'](a59_0x591621)[_0x32365b(0x1ec)]('(((.+)+)+)+$');});function a59_0x3d41(){const _0x1237f8=['systemLogger','SALESFORCE_API_VERSION','(((.+)+)+)+$','create','search','whereClause','message','1716516RQzBTP','type','execute','loggerJobState','../../retrieve/retrieve-factory','log','QueryBuilder','13817734xoZTKb','fields','objectDescribe','RetrieveFactory','__esModule','DeployFactory','loggerDetails','totalSize','../../deploy/deploy-factory','_objectRuleType','4377740jqWYIZ','QueryService','931062RLGyHk','BaseStep','2398989SXUABD','apply','356196JDXKeH','select','2361064YtJHhs','request','objectName','@flosum/salesforce','error','toString','from','_whereClause','getRetrieveStream','defineProperty','getRecordsCount'];a59_0x3d41=function(){return _0x1237f8;};return a59_0x3d41();}a59_0x591621();'use strict';Object[a59_0xc83afa(0x1e6)](exports,a59_0xc83afa(0x1fa),{'value':!![]}),exports[a59_0xc83afa(0x203)]=void 0x0;const salesforce_1=require(a59_0xc83afa(0x20b)),retrieve_factory_1=require(a59_0xc83afa(0x1f3)),constants_1=require('../../../constants'),deploy_factory_1=require(a59_0xc83afa(0x1fe)),job_detail_1=require('../../job-detail'),FIELD_ID='Id';class BaseStep{constructor({loggerDetails:_0x445514,loggerJobState:_0x169217,objectName:_0x402422,request:_0xc5caf4,objectRule:_0xe143b,objectDescribe:_0x78c2d0}){const _0x48bae8=a59_0xc83afa;this[_0x48bae8(0x1f7)]=[],this['loggerDetails']=_0x445514,this['loggerJobState']=_0x169217,this[_0x48bae8(0x20a)]=_0x402422,this['request']=_0xc5caf4,this[_0x48bae8(0x20f)]=_0xe143b[_0x48bae8(0x1ed)],this[_0x48bae8(0x1ff)]=_0xe143b[_0x48bae8(0x1f0)],this[_0x48bae8(0x1f8)]=_0x78c2d0;}async[a59_0xc83afa(0x1e7)](){const _0x565466=a59_0xc83afa;try{const _0x2ef6c5=new salesforce_1[(_0x565466(0x1f5))]()[_0x565466(0x207)]('COUNT()')[_0x565466(0x20e)](this[_0x565466(0x20a)]);this[_0x565466(0x20f)]&&_0x2ef6c5['where'](this[_0x565466(0x20f)]);const _0x123f7f=await salesforce_1[_0x565466(0x201)][_0x565466(0x1f1)](this[_0x565466(0x209)],{},_0x2ef6c5['build'](),![],constants_1[_0x565466(0x1e9)]);return _0x123f7f[_0x565466(0x1fd)];}catch(_0x2e12cc){return job_detail_1['systemLogger'][_0x565466(0x20c)](_0x2e12cc),-0x1;}}[a59_0xc83afa(0x210)](){const _0x1de20d=a59_0xc83afa,_0x2f1cb1={'request':this['request'],'fields':this[_0x1de20d(0x1f7)],'whereClause':this[_0x1de20d(0x20f)],'objectName':this[_0x1de20d(0x20a)],'describe':this[_0x1de20d(0x1f8)]};return retrieve_factory_1[_0x1de20d(0x1f9)][_0x1de20d(0x1eb)](_0x2f1cb1,this['recordsCount']);}['getDeployStream'](){const _0x220b1d=a59_0xc83afa,_0x4522ec={'request':this[_0x220b1d(0x209)],'objectName':this[_0x220b1d(0x20a)],'externalIdField':FIELD_ID,'loggerDetails':this[_0x220b1d(0x1fc)],'loggerJobState':this[_0x220b1d(0x1f2)]};return deploy_factory_1[_0x220b1d(0x1fb)]['create'](_0x4522ec,this[_0x220b1d(0x1ff)]);}[a59_0xc83afa(0x1f4)](_0x121003){const _0x13e106=a59_0xc83afa;job_detail_1[_0x13e106(0x1e8)]['log'](_0x121003,this[_0x13e106(0x20a)]),this[_0x13e106(0x1fc)][_0x13e106(0x1f4)](_0x121003,this[_0x13e106(0x20a)]);}[a59_0xc83afa(0x20c)](_0x4a5d01){const _0x4f6b29=a59_0xc83afa;job_detail_1[_0x4f6b29(0x1e8)][_0x4f6b29(0x20c)](_0x4a5d01,this[_0x4f6b29(0x20a)]),this['loggerDetails']['exception'](_0x4a5d01[_0x4f6b29(0x1ee)],this[_0x4f6b29(0x20a)]);}}exports[a59_0xc83afa(0x203)]=BaseStep;