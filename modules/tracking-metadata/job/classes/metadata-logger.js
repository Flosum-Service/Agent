const a341_0x2169df=a341_0x24a2;(function(_0x47546a,_0x419394){const _0x26bbfd=a341_0x24a2,_0x1ba7b2=_0x47546a();while(!![]){try{const _0x44e82d=parseInt(_0x26bbfd(0xe9))/0x1+parseInt(_0x26bbfd(0xea))/0x2+-parseInt(_0x26bbfd(0xd1))/0x3+parseInt(_0x26bbfd(0xdd))/0x4+parseInt(_0x26bbfd(0xd8))/0x5*(-parseInt(_0x26bbfd(0xcf))/0x6)+parseInt(_0x26bbfd(0xcb))/0x7*(parseInt(_0x26bbfd(0xca))/0x8)+-parseInt(_0x26bbfd(0xc9))/0x9;if(_0x44e82d===_0x419394)break;else _0x1ba7b2['push'](_0x1ba7b2['shift']());}catch(_0x409d6b){_0x1ba7b2['push'](_0x1ba7b2['shift']());}}}(a341_0x52a9,0x39065));const a341_0x4a92b0=(function(){let _0x68cc02=!![];return function(_0x3a2f7c,_0x1ceda3){const _0xa802c1=_0x68cc02?function(){if(_0x1ceda3){const _0x4985c3=_0x1ceda3['apply'](_0x3a2f7c,arguments);return _0x1ceda3=null,_0x4985c3;}}:function(){};return _0x68cc02=![],_0xa802c1;};}()),a341_0x38a798=a341_0x4a92b0(this,function(){const _0x260d51=a341_0x24a2;return a341_0x38a798['toString']()[_0x260d51(0xc7)](_0x260d51(0xd3))[_0x260d51(0xda)]()[_0x260d51(0xed)](a341_0x38a798)[_0x260d51(0xc7)]('(((.+)+)+)+$');});function a341_0x24a2(_0x556f6c,_0x5b7ca2){const _0x3f2639=a341_0x52a9();return a341_0x24a2=function(_0x38a798,_0x4a92b0){_0x38a798=_0x38a798-0xc1;let _0x52a94b=_0x3f2639[_0x38a798];return _0x52a94b;},a341_0x24a2(_0x556f6c,_0x5b7ca2);}function a341_0x52a9(){const _0x194fb3=['1362088xboxqb','metadataLogId','../../../../constants','__esModule','Job_Completed__c','MetadataLogger','init','Status__c','Start_Date__c','Completed_Date__c','deployMetadataLog','update','373214qLUynQ','252394AtuCqL','trackingSettingId','Metadata_Log__c','constructor','COMPLETED','instance','Organisation__c','error','IN_PROGRESS','then','LogStatus','createMetadataLog','search','apiVersion','7342677MpqQiH','3263720XMjxkS','7DzpWox','_status','defineProperty','Is_Error__c','743868cZoHnL','getTime','223482shKnag','metadataLog','(((.+)+)+)+$','status','FLOSUM_NAMESPACE','Update\x20metadata\x20log\x20error\x20\x0a','startDate','5NmRVLF','targetOrgId','toString','RestSimpleDeployData','@flosum/salesforce'];a341_0x52a9=function(){return _0x194fb3;};return a341_0x52a9();}a341_0x38a798();'use strict';Object[a341_0x2169df(0xcd)](exports,a341_0x2169df(0xe0),{'value':!![]}),exports['MetadataLogger']=void 0x0;const salesforce_1=require(a341_0x2169df(0xdc)),constants_1=require('../../constants'),constants_2=require(a341_0x2169df(0xdf)),METADATA_LOG_OBJECT_NAME=constants_2[a341_0x2169df(0xd5)]+a341_0x2169df(0xec),PROCESS_TYPE_RETRIEVE_ORGANIZATION='Tracking\x20Organization\x20-\x20Retrieve';class MetadataLogger{constructor({apiVersion:_0x5e4de6,instance:_0x21cd51,targetOrgId:_0x150f64,trackingSettingId:_0x550f32,startDate:_0x3e6b9b}){const _0x133b10=a341_0x2169df;this[_0x133b10(0xc8)]=_0x5e4de6,this[_0x133b10(0xef)]=_0x21cd51,this[_0x133b10(0xd9)]=_0x150f64,this[_0x133b10(0xeb)]=_0x550f32,this[_0x133b10(0xd7)]=_0x3e6b9b;}set[a341_0x2169df(0xd4)](_0xe9e090){this['_status']=_0xe9e090;}async[a341_0x2169df(0xe7)](){const _0x348371=a341_0x2169df,_0x3b265c=new salesforce_1[(_0x348371(0xdb))]({'instance':this[_0x348371(0xef)],'objectName':METADATA_LOG_OBJECT_NAME,'api':this['apiVersion'],'allOrNone':![],'externalIdField':'Id'});return await _0x3b265c['execute']({'records':[this['metadataLog']]});}[a341_0x2169df(0xc6)](){const _0x8a383b=a341_0x2169df;this[_0x8a383b(0xd2)]={'attributes':{'type':METADATA_LOG_OBJECT_NAME},'Id':this[_0x8a383b(0xde)]||null,[constants_2[_0x8a383b(0xd5)]+_0x8a383b(0xe5)]:this['startDate'],[constants_2['FLOSUM_NAMESPACE']+_0x8a383b(0xc1)]:this[_0x8a383b(0xd9)],[constants_2[_0x8a383b(0xd5)]+'Tracking_Setting__c']:this[_0x8a383b(0xeb)],[constants_2['FLOSUM_NAMESPACE']+'Process_Type__c']:PROCESS_TYPE_RETRIEVE_ORGANIZATION,[constants_2['FLOSUM_NAMESPACE']+_0x8a383b(0xe4)]:this[_0x8a383b(0xcc)],[constants_2[_0x8a383b(0xd5)]+'Succeed__c']:this[_0x8a383b(0xcc)]===constants_1[_0x8a383b(0xc5)][_0x8a383b(0xee)],[constants_2[_0x8a383b(0xd5)]+_0x8a383b(0xe6)]:this[_0x8a383b(0xcc)]===constants_1[_0x8a383b(0xc5)][_0x8a383b(0xc3)]?null:new Date()[_0x8a383b(0xd0)](),[constants_2['FLOSUM_NAMESPACE']+_0x8a383b(0xce)]:this[_0x8a383b(0xcc)]===constants_1['LogStatus']['EXCEPTION'],[constants_2['FLOSUM_NAMESPACE']+_0x8a383b(0xe1)]:this[_0x8a383b(0xcc)]!==constants_1['LogStatus']['IN_PROGRESS']};}async[a341_0x2169df(0xe3)](){const _0x348278=a341_0x2169df;this[_0x348278(0xc6)]();const _0x3246ac=await this['deployMetadataLog'](),_0x2e78f5=_0x3246ac['at'](0x0);if(_0x2e78f5===null||_0x2e78f5===void 0x0?void 0x0:_0x2e78f5['success'])return this[_0x348278(0xde)]=_0x2e78f5['id'],_0x2e78f5['id'];else throw new Error('Init\x20metadata\x20log\x20error\x20\x0a'+(_0x2e78f5===null||_0x2e78f5===void 0x0?void 0x0:_0x2e78f5[_0x348278(0xc2)]));}async[a341_0x2169df(0xe8)](){const _0x2c69f0=a341_0x2169df;this[_0x2c69f0(0xc6)](),await this['deployMetadataLog']()[_0x2c69f0(0xc4)](_0x19dd51=>{const _0x46ee10=_0x2c69f0,_0x18938e=_0x19dd51['at'](0x0);if(_0x18938e===null||_0x18938e===void 0x0?void 0x0:_0x18938e['error'])throw new Error(_0x46ee10(0xd6)+(_0x18938e===null||_0x18938e===void 0x0?void 0x0:_0x18938e[_0x46ee10(0xc2)]));});}}exports[a341_0x2169df(0xe2)]=MetadataLogger;