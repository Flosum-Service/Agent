function a341_0x365a(){const _0x44204c=['2701916tkpejT','(((.+)+)+)+$','constructor','COMPLETED','IN_PROGRESS','execute','_status','2270jOLNfN','Tracking\x20Organization\x20-\x20Retrieve','LogStatus','1431600tjSzKB','error','search','__esModule','Tracking_Setting__c','Init\x20metadata\x20log\x20error\x20\x0a','16128Hbquiy','defineProperty','getTime','targetOrgId','178246wdcjCo','metadataLog','Organisation__c','trackingSettingId','6zAsaRw','Is_Error__c','Update\x20metadata\x20log\x20error\x20\x0a','toString','status','Status__c','Process_Type__c','50614sZDwte','../../../../constants','createMetadataLog','deployMetadataLog','instance','125082NkGIuD','success','startDate','apiVersion','MetadataLogger','FLOSUM_NAMESPACE','metadataLogId','95DKeubm','@flosum/salesforce','883708mtaebE'];a341_0x365a=function(){return _0x44204c;};return a341_0x365a();}const a341_0x2f2c1d=a341_0x57db;(function(_0x5deaa2,_0x24ba49){const _0x1ee2b4=a341_0x57db,_0x5c8c60=_0x5deaa2();while(!![]){try{const _0x172367=parseInt(_0x1ee2b4(0x1b6))/0x1+-parseInt(_0x1ee2b4(0x1ab))/0x2*(parseInt(_0x1ee2b4(0x1af))/0x3)+-parseInt(_0x1ee2b4(0x196))/0x4+-parseInt(_0x1ee2b4(0x194))/0x5*(-parseInt(_0x1ee2b4(0x1bb))/0x6)+parseInt(_0x1ee2b4(0x197))/0x7+parseInt(_0x1ee2b4(0x1a1))/0x8+parseInt(_0x1ee2b4(0x1a7))/0x9*(-parseInt(_0x1ee2b4(0x19e))/0xa);if(_0x172367===_0x24ba49)break;else _0x5c8c60['push'](_0x5c8c60['shift']());}catch(_0x4fa1d1){_0x5c8c60['push'](_0x5c8c60['shift']());}}}(a341_0x365a,0x32378));const a341_0x2c54f3=(function(){let _0x384ee4=!![];return function(_0x2539f5,_0x10e1fe){const _0x1044c3=_0x384ee4?function(){if(_0x10e1fe){const _0x9aa27=_0x10e1fe['apply'](_0x2539f5,arguments);return _0x10e1fe=null,_0x9aa27;}}:function(){};return _0x384ee4=![],_0x1044c3;};}()),a341_0x4ec0b2=a341_0x2c54f3(this,function(){const _0x545c29=a341_0x57db;return a341_0x4ec0b2[_0x545c29(0x1b2)]()[_0x545c29(0x1a3)](_0x545c29(0x198))[_0x545c29(0x1b2)]()[_0x545c29(0x199)](a341_0x4ec0b2)['search']('(((.+)+)+)+$');});a341_0x4ec0b2();'use strict';Object[a341_0x2f2c1d(0x1a8)](exports,a341_0x2f2c1d(0x1a4),{'value':!![]}),exports[a341_0x2f2c1d(0x191)]=void 0x0;const salesforce_1=require(a341_0x2f2c1d(0x195)),constants_1=require('../../constants'),constants_2=require(a341_0x2f2c1d(0x1b7)),METADATA_LOG_OBJECT_NAME=constants_2['FLOSUM_NAMESPACE']+'Metadata_Log__c',PROCESS_TYPE_RETRIEVE_ORGANIZATION=a341_0x2f2c1d(0x19f);class MetadataLogger{constructor({apiVersion:_0x276771,instance:_0x23efae,targetOrgId:_0x24a4df,trackingSettingId:_0x49b835,startDate:_0x4081f0}){const _0x45858d=a341_0x2f2c1d;this['apiVersion']=_0x276771,this['instance']=_0x23efae,this[_0x45858d(0x1aa)]=_0x24a4df,this[_0x45858d(0x1ae)]=_0x49b835,this[_0x45858d(0x1bd)]=_0x4081f0;}set[a341_0x2f2c1d(0x1b3)](_0xfbd1e3){const _0x5f2675=a341_0x2f2c1d;this[_0x5f2675(0x19d)]=_0xfbd1e3;}async[a341_0x2f2c1d(0x1b9)](){const _0xea2d8d=a341_0x2f2c1d,_0x320dac=new salesforce_1['RestSimpleDeployData']({'instance':this[_0xea2d8d(0x1ba)],'objectName':METADATA_LOG_OBJECT_NAME,'api':this[_0xea2d8d(0x190)],'allOrNone':![],'externalIdField':'Id'});return await _0x320dac[_0xea2d8d(0x19c)]({'records':[this[_0xea2d8d(0x1ac)]]});}[a341_0x2f2c1d(0x1b8)](){const _0x3e8d20=a341_0x2f2c1d;this[_0x3e8d20(0x1ac)]={'attributes':{'type':METADATA_LOG_OBJECT_NAME},'Id':this['metadataLogId']||null,[constants_2['FLOSUM_NAMESPACE']+'Start_Date__c']:this[_0x3e8d20(0x1bd)],[constants_2['FLOSUM_NAMESPACE']+_0x3e8d20(0x1ad)]:this[_0x3e8d20(0x1aa)],[constants_2[_0x3e8d20(0x192)]+_0x3e8d20(0x1a5)]:this[_0x3e8d20(0x1ae)],[constants_2[_0x3e8d20(0x192)]+_0x3e8d20(0x1b5)]:PROCESS_TYPE_RETRIEVE_ORGANIZATION,[constants_2[_0x3e8d20(0x192)]+_0x3e8d20(0x1b4)]:this[_0x3e8d20(0x19d)],[constants_2[_0x3e8d20(0x192)]+'Succeed__c']:this[_0x3e8d20(0x19d)]===constants_1[_0x3e8d20(0x1a0)][_0x3e8d20(0x19a)],[constants_2['FLOSUM_NAMESPACE']+'Completed_Date__c']:this[_0x3e8d20(0x19d)]===constants_1['LogStatus'][_0x3e8d20(0x19b)]?null:new Date()[_0x3e8d20(0x1a9)](),[constants_2[_0x3e8d20(0x192)]+_0x3e8d20(0x1b0)]:this[_0x3e8d20(0x19d)]===constants_1[_0x3e8d20(0x1a0)]['EXCEPTION'],[constants_2[_0x3e8d20(0x192)]+'Job_Completed__c']:this[_0x3e8d20(0x19d)]!==constants_1['LogStatus'][_0x3e8d20(0x19b)]};}async['init'](){const _0x3109a8=a341_0x2f2c1d;this[_0x3109a8(0x1b8)]();const _0x4b86ee=await this['deployMetadataLog'](),_0x4e5117=_0x4b86ee['at'](0x0);if(_0x4e5117===null||_0x4e5117===void 0x0?void 0x0:_0x4e5117[_0x3109a8(0x1bc)])return this[_0x3109a8(0x193)]=_0x4e5117['id'],_0x4e5117['id'];else throw new Error(_0x3109a8(0x1a6)+(_0x4e5117===null||_0x4e5117===void 0x0?void 0x0:_0x4e5117['error']));}async['update'](){const _0x25de79=a341_0x2f2c1d;this[_0x25de79(0x1b8)](),await this[_0x25de79(0x1b9)]()['then'](_0x38aaf7=>{const _0x3aa621=_0x25de79,_0x1e679b=_0x38aaf7['at'](0x0);if(_0x1e679b===null||_0x1e679b===void 0x0?void 0x0:_0x1e679b[_0x3aa621(0x1a2)])throw new Error(_0x3aa621(0x1b1)+(_0x1e679b===null||_0x1e679b===void 0x0?void 0x0:_0x1e679b['error']));});}}function a341_0x57db(_0xd64743,_0x1dc440){const _0x48ae67=a341_0x365a();return a341_0x57db=function(_0x4ec0b2,_0x2c54f3){_0x4ec0b2=_0x4ec0b2-0x190;let _0x365ad7=_0x48ae67[_0x4ec0b2];return _0x365ad7;},a341_0x57db(_0xd64743,_0x1dc440);}exports[a341_0x2f2c1d(0x191)]=MetadataLogger;