const a314_0x17e5a9=a314_0x3b18;(function(_0x3492f9,_0x516a7d){const _0x23eaa6=a314_0x3b18,_0x49314c=_0x3492f9();while(!![]){try{const _0x25783f=-parseInt(_0x23eaa6(0x1d6))/0x1+-parseInt(_0x23eaa6(0x1d7))/0x2*(parseInt(_0x23eaa6(0x1d5))/0x3)+parseInt(_0x23eaa6(0x1b2))/0x4*(-parseInt(_0x23eaa6(0x1c9))/0x5)+-parseInt(_0x23eaa6(0x1dd))/0x6+parseInt(_0x23eaa6(0x1c0))/0x7*(parseInt(_0x23eaa6(0x1b4))/0x8)+parseInt(_0x23eaa6(0x1d2))/0x9*(parseInt(_0x23eaa6(0x1c3))/0xa)+parseInt(_0x23eaa6(0x1cd))/0xb*(parseInt(_0x23eaa6(0x1cb))/0xc);if(_0x25783f===_0x516a7d)break;else _0x49314c['push'](_0x49314c['shift']());}catch(_0x4be2de){_0x49314c['push'](_0x49314c['shift']());}}}(a314_0x13e7,0xcce3e));const a314_0x58c454=(function(){let _0x3aa485=!![];return function(_0x2bd13f,_0x5e4dee){const _0x5d0849=_0x3aa485?function(){const _0x2f1ab0=a314_0x3b18;if(_0x5e4dee){const _0x30b2d9=_0x5e4dee[_0x2f1ab0(0x1b7)](_0x2bd13f,arguments);return _0x5e4dee=null,_0x30b2d9;}}:function(){};return _0x3aa485=![],_0x5d0849;};}()),a314_0x556b31=a314_0x58c454(this,function(){const _0x30bfd5=a314_0x3b18;return a314_0x556b31[_0x30bfd5(0x1db)]()['search']('(((.+)+)+)+$')[_0x30bfd5(0x1db)]()[_0x30bfd5(0x1d3)](a314_0x556b31)[_0x30bfd5(0x1c1)](_0x30bfd5(0x1c4));});a314_0x556b31();'use strict';Object[a314_0x17e5a9(0x1de)](exports,'__esModule',{'value':!![]}),exports[a314_0x17e5a9(0x1c8)]=void 0x0;const salesforce_1=require(a314_0x17e5a9(0x1b6)),constants_1=require(a314_0x17e5a9(0x1cc)),constants_2=require(a314_0x17e5a9(0x1af)),METADATA_LOG_OBJECT_NAME=constants_2['FLOSUM_NAMESPACE']+a314_0x17e5a9(0x1bf),PROCESS_TYPE_RETRIEVE_ORGANIZATION='Tracking\x20Organization\x20-\x20Retrieve';function a314_0x13e7(){const _0x441209=['Update\x20metadata\x20log\x20error\x20\x0a','error','MetadataLogger','733510CxlAuy','Start_Date__c','14844vTrEjI','../../constants','7183trKTNC','FLOSUM_NAMESPACE','success','metadataLogId','deployMetadataLog','471564BRjVdR','constructor','IN_PROGRESS','6dJlPcY','1248625aGdDrs','523788loDyat','Status__c','startDate','Completed_Date__c','toString','_status','1994238RJTsky','defineProperty','update','then','../../../../constants','Init\x20metadata\x20log\x20error\x20\x0a','LogStatus','4tLoGnT','instance','56cJCZsn','EXCEPTION','@flosum/salesforce','apply','trackingSettingId','createMetadataLog','Job_Completed__c','Tracking_Setting__c','getTime','COMPLETED','status','Metadata_Log__c','920661mjIZlj','search','Succeed__c','260AXrLZo','(((.+)+)+)+$','apiVersion'];a314_0x13e7=function(){return _0x441209;};return a314_0x13e7();}class MetadataLogger{constructor({apiVersion:_0x3f4c26,instance:_0x3a4316,targetOrgId:_0x53c00c,trackingSettingId:_0x1950ae,startDate:_0x53dbfc}){const _0x23aeeb=a314_0x17e5a9;this[_0x23aeeb(0x1c5)]=_0x3f4c26,this[_0x23aeeb(0x1b3)]=_0x3a4316,this['targetOrgId']=_0x53c00c,this[_0x23aeeb(0x1b8)]=_0x1950ae,this[_0x23aeeb(0x1d9)]=_0x53dbfc;}set[a314_0x17e5a9(0x1be)](_0x40a49e){const _0x464217=a314_0x17e5a9;this[_0x464217(0x1dc)]=_0x40a49e;}async['deployMetadataLog'](){const _0x484d26=a314_0x17e5a9,_0x44f8ad=new salesforce_1['RestSimpleDeployData']({'instance':this[_0x484d26(0x1b3)],'objectName':METADATA_LOG_OBJECT_NAME,'api':this[_0x484d26(0x1c5)],'allOrNone':![],'externalIdField':'Id'});return await _0x44f8ad['execute']({'records':[this['metadataLog']]});}[a314_0x17e5a9(0x1b9)](){const _0x3758ca=a314_0x17e5a9;this['metadataLog']={'attributes':{'type':METADATA_LOG_OBJECT_NAME},'Id':this[_0x3758ca(0x1d0)]||null,[constants_2[_0x3758ca(0x1ce)]+_0x3758ca(0x1ca)]:this[_0x3758ca(0x1d9)],[constants_2[_0x3758ca(0x1ce)]+'Organisation__c']:this['targetOrgId'],[constants_2[_0x3758ca(0x1ce)]+_0x3758ca(0x1bb)]:this['trackingSettingId'],[constants_2['FLOSUM_NAMESPACE']+'Process_Type__c']:PROCESS_TYPE_RETRIEVE_ORGANIZATION,[constants_2[_0x3758ca(0x1ce)]+_0x3758ca(0x1d8)]:this[_0x3758ca(0x1dc)],[constants_2[_0x3758ca(0x1ce)]+_0x3758ca(0x1c2)]:this[_0x3758ca(0x1dc)]===constants_1[_0x3758ca(0x1b1)][_0x3758ca(0x1bd)],[constants_2[_0x3758ca(0x1ce)]+_0x3758ca(0x1da)]:this['_status']===constants_1[_0x3758ca(0x1b1)]['IN_PROGRESS']?null:new Date()[_0x3758ca(0x1bc)](),[constants_2[_0x3758ca(0x1ce)]+'Is_Error__c']:this[_0x3758ca(0x1dc)]===constants_1[_0x3758ca(0x1b1)][_0x3758ca(0x1b5)],[constants_2[_0x3758ca(0x1ce)]+_0x3758ca(0x1ba)]:this[_0x3758ca(0x1dc)]!==constants_1[_0x3758ca(0x1b1)][_0x3758ca(0x1d4)]};}async['init'](){const _0x4ad7b6=a314_0x17e5a9;this[_0x4ad7b6(0x1b9)]();const _0x18621a=await this[_0x4ad7b6(0x1d1)](),_0x144950=_0x18621a['at'](0x0);if(_0x144950===null||_0x144950===void 0x0?void 0x0:_0x144950[_0x4ad7b6(0x1cf)])return this[_0x4ad7b6(0x1d0)]=_0x144950['id'],_0x144950['id'];else throw new Error(_0x4ad7b6(0x1b0)+(_0x144950===null||_0x144950===void 0x0?void 0x0:_0x144950[_0x4ad7b6(0x1c7)]));}async[a314_0x17e5a9(0x1ad)](){const _0x56edf6=a314_0x17e5a9;this[_0x56edf6(0x1b9)](),await this[_0x56edf6(0x1d1)]()[_0x56edf6(0x1ae)](_0x5787e1=>{const _0x1892f8=_0x56edf6,_0x58c7b3=_0x5787e1['at'](0x0);if(_0x58c7b3===null||_0x58c7b3===void 0x0?void 0x0:_0x58c7b3[_0x1892f8(0x1c7)])throw new Error(_0x1892f8(0x1c6)+(_0x58c7b3===null||_0x58c7b3===void 0x0?void 0x0:_0x58c7b3['error']));});}}function a314_0x3b18(_0x88234a,_0xca95bd){const _0xfa9e3d=a314_0x13e7();return a314_0x3b18=function(_0x556b31,_0x58c454){_0x556b31=_0x556b31-0x1ad;let _0x13e741=_0xfa9e3d[_0x556b31];return _0x13e741;},a314_0x3b18(_0x88234a,_0xca95bd);}exports['MetadataLogger']=MetadataLogger;