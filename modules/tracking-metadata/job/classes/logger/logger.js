const a292_0x38b4c1=a292_0x5993;(function(_0x32cbd7,_0x2ae742){const _0x58dd0d=a292_0x5993,_0x2dcba6=_0x32cbd7();while(!![]){try{const _0xc26b2a=parseInt(_0x58dd0d(0x80))/0x1*(-parseInt(_0x58dd0d(0x87))/0x2)+parseInt(_0x58dd0d(0x7b))/0x3*(parseInt(_0x58dd0d(0x75))/0x4)+parseInt(_0x58dd0d(0x9e))/0x5*(-parseInt(_0x58dd0d(0x90))/0x6)+parseInt(_0x58dd0d(0x78))/0x7+-parseInt(_0x58dd0d(0x79))/0x8+parseInt(_0x58dd0d(0x73))/0x9*(-parseInt(_0x58dd0d(0x7d))/0xa)+parseInt(_0x58dd0d(0x7f))/0xb;if(_0xc26b2a===_0x2ae742)break;else _0x2dcba6['push'](_0x2dcba6['shift']());}catch(_0x2ddf12){_0x2dcba6['push'](_0x2dcba6['shift']());}}}(a292_0x3910,0x6f955));const a292_0x12fcc3=(function(){let _0x12c224=!![];return function(_0x3da49a,_0x4800cd){const _0x704ac9=_0x12c224?function(){if(_0x4800cd){const _0x5af2ac=_0x4800cd['apply'](_0x3da49a,arguments);return _0x4800cd=null,_0x5af2ac;}}:function(){};return _0x12c224=![],_0x704ac9;};}()),a292_0x575f0f=a292_0x12fcc3(this,function(){const _0x5a0dd3=a292_0x5993;return a292_0x575f0f[_0x5a0dd3(0x8f)]()['search'](_0x5a0dd3(0x8b))['toString']()[_0x5a0dd3(0x96)](a292_0x575f0f)[_0x5a0dd3(0x89)](_0x5a0dd3(0x8b));});a292_0x575f0f();'use strict';Object[a292_0x38b4c1(0x8c)](exports,a292_0x38b4c1(0x86),{'value':!![]});function a292_0x3910(){const _0x1866f1=['\x20[INFO]\x20','update','log','warning','3108965TtezOE','BINARY_FIELD_NAME','instance','52857VFlFKS','createAttachment','1568pnrAga','length','execute','2488430TVOIus','5076384jvfCsp','@flosum/salesforce','1956KviLPa','CompositeBinaryDeployData','910UccOrg','messages','24631123ltAiyz','1QEvoPw','\x20[ERROR]\x20','\x20[WARNING]\x20','apiVersion','systemLogger','from','__esModule','1204876nKOxkH','deployAttachment','search','toLocaleString','(((.+)+)+)+$','defineProperty','error','text/plain','toString','6hOBwMi','attachmentId','push','Update\x20metadata\x20log\x20attachment\x20error\x20\x0a','Readable','stream','constructor','metadataLogId','ATTACHMENT_OBJECT_NAME','../../../constants'];a292_0x3910=function(){return _0x1866f1;};return a292_0x3910();}function a292_0x5993(_0x52dc0b,_0xcda6cb){const _0x365836=a292_0x3910();return a292_0x5993=function(_0x575f0f,_0x12fcc3){_0x575f0f=_0x575f0f-0x72;let _0x391023=_0x365836[_0x575f0f];return _0x391023;},a292_0x5993(_0x52dc0b,_0xcda6cb);}const constants_1=require(a292_0x38b4c1(0x99)),salesforce_1=require(a292_0x38b4c1(0x7a)),stream_1=require(a292_0x38b4c1(0x95)),EXTERNAL_ID_FIELD='Id',CONTENT_TYPE=a292_0x38b4c1(0x8e),TRACKING_ORGANIZATION_LOG_NAME='Tracking\x20Organization\x20Log';class Logger{constructor({systemLogger:_0x2a881b,apiVersion:_0x59bc2c,instance:_0x1dae2c,metadataLogId:_0x48ac82}){const _0x1c50af=a292_0x38b4c1;this['messages']=[],this[_0x1c50af(0x84)]=_0x2a881b,this[_0x1c50af(0x83)]=_0x59bc2c,this['instance']=_0x1dae2c,this[_0x1c50af(0x97)]=_0x48ac82;}async[a292_0x38b4c1(0x74)](){const _0x223d5b=a292_0x38b4c1,_0x54540c={'attributes':{'type':constants_1[_0x223d5b(0x98)],'binaryPartName':TRACKING_ORGANIZATION_LOG_NAME,'binaryPartNameAlias':constants_1[_0x223d5b(0x9f)]},'Id':this[_0x223d5b(0x91)]||null,'Name':TRACKING_ORGANIZATION_LOG_NAME,'ContentType':CONTENT_TYPE,'ParentId':this['metadataLogId'],'Body':TRACKING_ORGANIZATION_LOG_NAME},_0x12fa4a={'binaryFieldName':constants_1[_0x223d5b(0x9f)],'name':TRACKING_ORGANIZATION_LOG_NAME,'value':stream_1[_0x223d5b(0x94)][_0x223d5b(0x85)](this[_0x223d5b(0x7e)])};return{'records':[_0x54540c],'binary':[_0x12fa4a]};}async[a292_0x38b4c1(0x88)](_0x141205){const _0x34a008=a292_0x38b4c1,_0x3c5732=new salesforce_1[(_0x34a008(0x7c))]({'instance':this[_0x34a008(0x72)],'objectName':constants_1['ATTACHMENT_OBJECT_NAME'],'externalIdField':EXTERNAL_ID_FIELD,'allOrNone':![],'api':this[_0x34a008(0x83)]});return _0x3c5732[_0x34a008(0x77)](_0x141205);}async[a292_0x38b4c1(0x9b)](){const _0x220a19=a292_0x38b4c1;if(this[_0x220a19(0x7e)][_0x220a19(0x76)]){const _0x438ca7=await this[_0x220a19(0x74)](),_0x1054c1=await this['deployAttachment'](_0x438ca7),_0x51ba3e=_0x1054c1['at'](0x0);if(_0x51ba3e===null||_0x51ba3e===void 0x0?void 0x0:_0x51ba3e['success'])this['attachmentId']=_0x51ba3e['id'];else throw new Error(_0x220a19(0x93)+(_0x51ba3e===null||_0x51ba3e===void 0x0?void 0x0:_0x51ba3e[_0x220a19(0x8d)]));}}[a292_0x38b4c1(0x9c)](_0x471c00){const _0xa0b0b7=a292_0x38b4c1;this[_0xa0b0b7(0x84)][_0xa0b0b7(0x9c)](_0x471c00),this['messages']['push'](new Date()['toLocaleString']()+_0xa0b0b7(0x9a)+_0x471c00+'\x20\x0a');}[a292_0x38b4c1(0x8d)](_0x17369b){const _0x3b7a21=a292_0x38b4c1;this['systemLogger'][_0x3b7a21(0x8d)](_0x17369b),this[_0x3b7a21(0x7e)][_0x3b7a21(0x92)](new Date()[_0x3b7a21(0x8a)]()+_0x3b7a21(0x81)+_0x17369b+'\x20\x0a');}[a292_0x38b4c1(0x9d)](_0x44d0bd){const _0x37cc07=a292_0x38b4c1;this[_0x37cc07(0x84)][_0x37cc07(0x8d)](_0x44d0bd),this[_0x37cc07(0x7e)][_0x37cc07(0x92)](new Date()[_0x37cc07(0x8a)]()+_0x37cc07(0x82)+_0x44d0bd+'\x20\x0a');}}exports['default']=Logger;