const a295_0x415d8d=a295_0x4836;(function(_0x2edc69,_0x4ebfed){const _0x46deb=a295_0x4836,_0x36d255=_0x2edc69();while(!![]){try{const _0x3cbda1=parseInt(_0x46deb(0x1db))/0x1*(-parseInt(_0x46deb(0x1e2))/0x2)+-parseInt(_0x46deb(0x209))/0x3*(-parseInt(_0x46deb(0x219))/0x4)+-parseInt(_0x46deb(0x21b))/0x5*(-parseInt(_0x46deb(0x1d7))/0x6)+-parseInt(_0x46deb(0x1d8))/0x7+parseInt(_0x46deb(0x203))/0x8*(-parseInt(_0x46deb(0x21a))/0x9)+parseInt(_0x46deb(0x222))/0xa+-parseInt(_0x46deb(0x1f1))/0xb*(-parseInt(_0x46deb(0x20e))/0xc);if(_0x3cbda1===_0x4ebfed)break;else _0x36d255['push'](_0x36d255['shift']());}catch(_0x4db8bb){_0x36d255['push'](_0x36d255['shift']());}}}(a295_0x5c73,0xd2d71));const a295_0x3461ff=(function(){let _0x5110a3=!![];return function(_0x5082ef,_0x30b984){const _0x4724af=_0x5110a3?function(){const _0x42750e=a295_0x4836;if(_0x30b984){const _0x132b7e=_0x30b984[_0x42750e(0x1d3)](_0x5082ef,arguments);return _0x30b984=null,_0x132b7e;}}:function(){};return _0x5110a3=![],_0x4724af;};}()),a295_0x5eafab=a295_0x3461ff(this,function(){const _0x1d4de1=a295_0x4836;return a295_0x5eafab[_0x1d4de1(0x213)]()['search'](_0x1d4de1(0x1e7))[_0x1d4de1(0x213)]()['constructor'](a295_0x5eafab)[_0x1d4de1(0x1e5)](_0x1d4de1(0x1e7));});a295_0x5eafab();'use strict';var __importDefault=this&&this[a295_0x415d8d(0x212)]||function(_0x2aea05){const _0x159c60=a295_0x415d8d;return _0x2aea05&&_0x2aea05[_0x159c60(0x1d5)]?_0x2aea05:{'default':_0x2aea05};};function a295_0x4836(_0x57e17a,_0xf89094){const _0x421dca=a295_0x5c73();return a295_0x4836=function(_0x5eafab,_0x3461ff){_0x5eafab=_0x5eafab-0x1d0;let _0x5c73dc=_0x421dca[_0x5eafab];return _0x5c73dc;},a295_0x4836(_0x57e17a,_0xf89094);}function a295_0x5c73(){const _0x43afb8=['attachmentId','application/zip','129578zIwquQ','deployOrgComponents','changedBy','search','Is_Deleted__c','(((.+)+)+)+$','Process\x20completed\x20for\x20','apiVersion','Last_Updated_By__c','OrganisationName__c','BINARY_FIELD_NAME','Source_Member_Id__c','fileName','isNameObsolete','has','127457IdeYIv','../../constants','deploy','resetChunks','sourceMemberId','FLOSUM_NAMESPACE','trackingSettingId','Revision_Counter__c','orgComponentsToDeployChunk','type','attachmentsToDeployChunk','binary','ORG_COMPONENT_OBJECT_NAME','Writable','binaryRecordsSizeChunk','\x20components','update','jszip','48736PoyxMJ','Retrieved','log','Name__c','createZip','ComponentsDeployer','12JmhQCY','Component_Type__c','fullName','push','execute','372rrQbLl','CompositeBinaryDeployData','records','isReachedMaxChunk','__importDefault','toString','targetOrgId','default','revisionCounter','METADATA_FOLDER_MAP','handleDeployResult','578208BYedbY','909yipQzs','74630WFzuwN','nodebuffer','RestSimpleDeployData','Readable','deployAttachments','ATTACHMENT_OBJECT_NAME','API_Name__c','10977850fdrLQj','Status__c','instance','defineProperty','then','byteLength','successDeployedCounter','Tracking_Setting__c','apply','logger','__esModule','addOrgComponentToChunk','408TrZOYa','10091809gUErDc','length','populateAttachmentId','2Qgylmh','from','componentId','addAttachmentToChunk','stream'];a295_0x5c73=function(){return _0x43afb8;};return a295_0x5c73();}Object[a295_0x415d8d(0x225)](exports,a295_0x415d8d(0x1d5),{'value':!![]}),exports[a295_0x415d8d(0x208)]=void 0x0;const salesforce_1=require('@flosum/salesforce'),constants_1=require(a295_0x415d8d(0x1f2)),stream_1=require(a295_0x415d8d(0x1df)),jszip_1=__importDefault(require(a295_0x415d8d(0x202))),constants_2=require('../../../../constants'),MAX_COMPOSITE_CHUNK_COUNT=0xc8,EXTERNAL_ID_FIELD='Id',ATTACHMENT_FIELD_NAME=constants_2[a295_0x415d8d(0x1f6)]+'Attachment_ID__c',CONTENT_TYPE=a295_0x415d8d(0x1e1);class ComponentsDeployer extends stream_1[a295_0x415d8d(0x1fe)]{constructor({apiVersion:_0x1595ae,instance:_0x5e7273,logger:_0x1bd715,targetOrgId:_0x26cf16,trackingSettingId:_0x550f1f}){const _0x43e27e=a295_0x415d8d;super({'objectMode':!![]}),this['attachmentsToDeployChunk']={'records':[],'binary':[]},this[_0x43e27e(0x1ff)]=0x0,this[_0x43e27e(0x1f9)]=[],this[_0x43e27e(0x1d1)]=0x0,this[_0x43e27e(0x1e9)]=_0x1595ae,this[_0x43e27e(0x224)]=_0x5e7273,this[_0x43e27e(0x1d4)]=_0x1bd715,this['targetOrgId']=_0x26cf16,this[_0x43e27e(0x1f7)]=_0x550f1f;}async['deploy'](){const _0x248237=a295_0x415d8d;await this['deployAttachments']()[_0x248237(0x226)](_0x52598b=>this[_0x248237(0x1da)](_0x52598b))[_0x248237(0x226)](()=>this['deployOrgComponents']())[_0x248237(0x226)](_0xb1c844=>this['handleDeployResult'](_0xb1c844)),this[_0x248237(0x1f4)]();}[a295_0x415d8d(0x21f)](){const _0x241461=a295_0x415d8d,_0x37905e=new salesforce_1[(_0x241461(0x20f))]({'instance':this[_0x241461(0x224)],'objectName':constants_1[_0x241461(0x220)],'externalIdField':EXTERNAL_ID_FIELD,'allOrNone':![],'api':this[_0x241461(0x1e9)]});return _0x37905e[_0x241461(0x20d)](this[_0x241461(0x1fb)]);}[a295_0x415d8d(0x1e3)](){const _0x30b1e9=a295_0x415d8d,_0x35e957=new salesforce_1[(_0x30b1e9(0x21d))]({'instance':this['instance'],'objectName':constants_1[_0x30b1e9(0x1fd)],'api':this['apiVersion'],'allOrNone':![],'externalIdField':'Id'});return _0x35e957[_0x30b1e9(0x20d)]({'records':this[_0x30b1e9(0x1f9)]});}async[a295_0x415d8d(0x218)](_0x539a1f){const _0x1d29e7=a295_0x415d8d;for(const {success:_0x1a6264,error:_0x27c1d2}of _0x539a1f){if(_0x1a6264){this['successDeployedCounter']++;continue;}_0x27c1d2&&this[_0x1d29e7(0x1d4)]['error'](_0x27c1d2);}}['isReachedMaxChunk'](_0x287c8b){const _0x43e09c=a295_0x415d8d;return _0x287c8b+this[_0x43e09c(0x1ff)]>=salesforce_1['CompositeConstants']['MAX_BODY_SIZE']||this[_0x43e09c(0x1fb)][_0x43e09c(0x210)]['length']===MAX_COMPOSITE_CHUNK_COUNT;}['resetChunks'](){const _0x2e3176=a295_0x415d8d;this[_0x2e3176(0x1ff)]=0x0,this[_0x2e3176(0x1fb)]={'records':[],'binary':[]},this[_0x2e3176(0x1f9)]=[];}[a295_0x415d8d(0x1da)](_0x49ec51){const _0x3fa5b2=a295_0x415d8d;for(const _0x37fc50 in _0x49ec51){this[_0x3fa5b2(0x1f9)][_0x37fc50][ATTACHMENT_FIELD_NAME]=_0x49ec51[_0x37fc50]['id'];}}async[a295_0x415d8d(0x1de)](_0x2c0670,_0x26ae8b){const _0x1a0fa9=a295_0x415d8d,{listMetadataItem:_0x1768c2,sourceMemberRecord:_0x4fc6d2}=_0x2c0670,_0x5239d7={'attributes':{'type':constants_1[_0x1a0fa9(0x220)],'binaryPartName':_0x1768c2[_0x1a0fa9(0x20b)],'binaryPartNameAlias':constants_1[_0x1a0fa9(0x1ec)]},'Id':_0x4fc6d2[_0x1a0fa9(0x1e0)],'Name':_0x1768c2[_0x1a0fa9(0x20b)],'Description':_0x1768c2['type'],'ContentType':CONTENT_TYPE,'ParentId':this[_0x1a0fa9(0x214)],'Body':_0x1768c2['fullName']},_0xb0f2a4={'binaryFieldName':constants_1[_0x1a0fa9(0x1ec)],'name':_0x1768c2[_0x1a0fa9(0x20b)],'value':stream_1[_0x1a0fa9(0x21e)][_0x1a0fa9(0x1dc)](_0x26ae8b)};this[_0x1a0fa9(0x1fb)]['records'][_0x1a0fa9(0x20c)](_0x5239d7),this['attachmentsToDeployChunk'][_0x1a0fa9(0x1fc)][_0x1a0fa9(0x20c)](_0xb0f2a4);}['createZip'](_0x287f59){const _0x16742d=a295_0x415d8d,_0x456420=new jszip_1[(_0x16742d(0x215))]();for(const _0x5d6aaa in _0x287f59){_0x456420['file'](_0x5d6aaa,_0x287f59[_0x5d6aaa]);}return _0x456420['generateAsync']({'type':_0x16742d(0x21c)});}[a295_0x415d8d(0x1d6)](_0x5212e8,_0x2997a3){const _0x373c5a=a295_0x415d8d,_0x44a0b4={'attributes':{'type':constants_1[_0x373c5a(0x1fd)]},'Id':_0x2997a3[_0x373c5a(0x1dd)],[constants_2[_0x373c5a(0x1f6)]+_0x373c5a(0x1e6)]:_0x2997a3[_0x373c5a(0x1ef)],[constants_2[_0x373c5a(0x1f6)]+_0x373c5a(0x1f8)]:_0x2997a3[_0x373c5a(0x216)],[constants_2['FLOSUM_NAMESPACE']+_0x373c5a(0x1ed)]:_0x2997a3[_0x373c5a(0x1f5)],[constants_2['FLOSUM_NAMESPACE']+_0x373c5a(0x1ea)]:_0x2997a3[_0x373c5a(0x1e4)],[constants_2['FLOSUM_NAMESPACE']+_0x373c5a(0x221)]:_0x5212e8[_0x373c5a(0x20b)],[constants_2['FLOSUM_NAMESPACE']+_0x373c5a(0x206)]:_0x5212e8[_0x373c5a(0x20b)],[constants_2[_0x373c5a(0x1f6)]+_0x373c5a(0x20a)]:_0x5212e8['type'],[constants_2[_0x373c5a(0x1f6)]+'Label__c']:_0x5212e8[_0x373c5a(0x1ee)],[constants_2[_0x373c5a(0x1f6)]+'Folder__c']:constants_1[_0x373c5a(0x217)][_0x373c5a(0x1f0)](_0x5212e8[_0x373c5a(0x1fa)])||null,[constants_2[_0x373c5a(0x1f6)]+'Is_Retrieved__c']:!![],[constants_2[_0x373c5a(0x1f6)]+_0x373c5a(0x1eb)]:this[_0x373c5a(0x214)],[constants_2[_0x373c5a(0x1f6)]+_0x373c5a(0x1d2)]:this[_0x373c5a(0x1f7)],[constants_2['FLOSUM_NAMESPACE']+_0x373c5a(0x223)]:_0x373c5a(0x204)};this['orgComponentsToDeployChunk'][_0x373c5a(0x20c)](_0x44a0b4);}async['_write'](_0x1978d2,_0x2fd12e,_0x1a0c2f){const _0x81d4e8=a295_0x415d8d;try{const {listMetadataItem:_0x3ba628,sourceMemberRecord:_0x1c42ea,files:_0x31cd42}=_0x1978d2,_0x20062f=await this[_0x81d4e8(0x207)](_0x31cd42),_0x27f533=Buffer[_0x81d4e8(0x1d0)](_0x20062f);this[_0x81d4e8(0x211)](_0x27f533)&&await this[_0x81d4e8(0x1f3)](),this[_0x81d4e8(0x1ff)]+=_0x27f533,await this[_0x81d4e8(0x1de)](_0x1978d2,_0x20062f),this[_0x81d4e8(0x1d6)](_0x3ba628,_0x1c42ea),_0x1a0c2f();}catch(_0x391d9e){_0x1a0c2f(_0x391d9e);}}async['_final'](_0x19dcb3){const _0x3016c4=a295_0x415d8d;try{this[_0x3016c4(0x1fb)]['records'][_0x3016c4(0x1d9)]&&this['orgComponentsToDeployChunk'][_0x3016c4(0x1d9)]&&await this['deploy'](),this[_0x3016c4(0x1d4)][_0x3016c4(0x205)](_0x3016c4(0x1e8)+this['successDeployedCounter']+_0x3016c4(0x200)),await this[_0x3016c4(0x1d4)][_0x3016c4(0x201)](),_0x19dcb3();}catch(_0x292592){_0x19dcb3(_0x292592);}}}exports['ComponentsDeployer']=ComponentsDeployer;