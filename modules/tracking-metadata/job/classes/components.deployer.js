function a311_0x1096(){const _0x55885e=['file','3920gzhzqw','600fEIKCF','type','then','183172dgeHXK','Retrieved','orgComponentsToDeployChunk','(((.+)+)+)+$','length','createZip','records','apply','ORG_COMPONENT_OBJECT_NAME','isReachedMaxChunk','deploy','Readable','2483840VJYliA','from','sourceMemberId','Component_Type__c','API_Name__c','changedBy','508uBnAeg','toString','ATTACHMENT_OBJECT_NAME','__esModule','Tracking_Setting__c','Status__c','RestSimpleDeployData','has','_final','resetChunks','OrganisationName__c','error','__importDefault','push','Attachment_ID__c','attachmentId','Writable','CompositeBinaryDeployData','generateAsync','byteLength','FLOSUM_NAMESPACE','application/zip','search','binaryRecordsSizeChunk','default','deployOrgComponents','284827KOdUFk','stream','jszip','instance','nodebuffer','log','fullName','logger','targetOrgId','constructor','defineProperty','740106Npxoux','successDeployedCounter','Is_Deleted__c','@flosum/salesforce','execute','ComponentsDeployer','addAttachmentToChunk','Name__c','addOrgComponentToChunk','trackingSettingId','Label__c','Folder__c','Revision_Counter__c','MAX_BODY_SIZE','Source_Member_Id__c','2286585jTYMqp','componentId','fileName','handleDeployResult','\x20components','BINARY_FIELD_NAME','3522fgfUuC','attachmentsToDeployChunk'];a311_0x1096=function(){return _0x55885e;};return a311_0x1096();}const a311_0x4902c7=a311_0x1147;(function(_0x4d6c6a,_0x73d0b7){const _0x59573d=a311_0x1147,_0xac036d=_0x4d6c6a();while(!![]){try{const _0x4ac6f3=parseInt(_0x59573d(0xef))/0x1+-parseInt(_0x59573d(0x128))/0x2*(parseInt(_0x59573d(0x10f))/0x3)+parseInt(_0x59573d(0x116))/0x4+-parseInt(_0x59573d(0x112))/0x5*(-parseInt(_0x59573d(0x113))/0x6)+-parseInt(_0x59573d(0x109))/0x7+parseInt(_0x59573d(0x122))/0x8+parseInt(_0x59573d(0xfa))/0x9;if(_0x4ac6f3===_0x73d0b7)break;else _0xac036d['push'](_0xac036d['shift']());}catch(_0x2aed54){_0xac036d['push'](_0xac036d['shift']());}}}(a311_0x1096,0x2b2f3));function a311_0x1147(_0x4fb3ff,_0x577153){const _0xbe6aa6=a311_0x1096();return a311_0x1147=function(_0x3e869a,_0x315c0e){_0x3e869a=_0x3e869a-0xdf;let _0x1096e2=_0xbe6aa6[_0x3e869a];return _0x1096e2;},a311_0x1147(_0x4fb3ff,_0x577153);}const a311_0x315c0e=(function(){let _0x52e778=!![];return function(_0x114be7,_0x13c64c){const _0xcd826b=_0x52e778?function(){const _0x464353=a311_0x1147;if(_0x13c64c){const _0x469a64=_0x13c64c[_0x464353(0x11d)](_0x114be7,arguments);return _0x13c64c=null,_0x469a64;}}:function(){};return _0x52e778=![],_0xcd826b;};}()),a311_0x3e869a=a311_0x315c0e(this,function(){const _0x292e5d=a311_0x1147;return a311_0x3e869a[_0x292e5d(0x129)]()['search'](_0x292e5d(0x119))[_0x292e5d(0x129)]()[_0x292e5d(0xf8)](a311_0x3e869a)[_0x292e5d(0xeb)](_0x292e5d(0x119));});a311_0x3e869a();'use strict';var __importDefault=this&&this[a311_0x4902c7(0xe1)]||function(_0x58e747){const _0x3dccea=a311_0x4902c7;return _0x58e747&&_0x58e747[_0x3dccea(0x12b)]?_0x58e747:{'default':_0x58e747};};Object[a311_0x4902c7(0xf9)](exports,a311_0x4902c7(0x12b),{'value':!![]}),exports[a311_0x4902c7(0xff)]=void 0x0;const salesforce_1=require(a311_0x4902c7(0xfd)),constants_1=require('../../constants'),stream_1=require(a311_0x4902c7(0xf0)),jszip_1=__importDefault(require(a311_0x4902c7(0xf1))),constants_2=require('../../../../constants'),MAX_COMPOSITE_CHUNK_COUNT=0xc8,EXTERNAL_ID_FIELD='Id',ATTACHMENT_FIELD_NAME=constants_2['FLOSUM_NAMESPACE']+a311_0x4902c7(0xe3),CONTENT_TYPE=a311_0x4902c7(0xea);class ComponentsDeployer extends stream_1[a311_0x4902c7(0xe5)]{constructor({apiVersion:_0x561f61,instance:_0x20f40a,logger:_0x2656e3,targetOrgId:_0x35a636,trackingSettingId:_0x8e2ec0}){const _0xd0e535=a311_0x4902c7;super({'objectMode':!![]}),this[_0xd0e535(0x110)]={'records':[],'binary':[]},this[_0xd0e535(0xec)]=0x0,this[_0xd0e535(0x118)]=[],this[_0xd0e535(0xfb)]=0x0,this['apiVersion']=_0x561f61,this[_0xd0e535(0xf2)]=_0x20f40a,this['logger']=_0x2656e3,this[_0xd0e535(0xf7)]=_0x35a636,this[_0xd0e535(0x103)]=_0x8e2ec0;}async[a311_0x4902c7(0x120)](){const _0x2d1476=a311_0x4902c7;await this['deployAttachments']()[_0x2d1476(0x115)](_0x39087c=>this['populateAttachmentId'](_0x39087c))[_0x2d1476(0x115)](()=>this['deployOrgComponents']())[_0x2d1476(0x115)](_0x5137d7=>this[_0x2d1476(0x10c)](_0x5137d7)),this[_0x2d1476(0x131)]();}['deployAttachments'](){const _0x1f2189=a311_0x4902c7,_0x52c683=new salesforce_1[(_0x1f2189(0xe6))]({'instance':this[_0x1f2189(0xf2)],'objectName':constants_1[_0x1f2189(0x12a)],'externalIdField':EXTERNAL_ID_FIELD,'allOrNone':![],'api':this['apiVersion']});return _0x52c683['execute'](this[_0x1f2189(0x110)]);}[a311_0x4902c7(0xee)](){const _0x13b830=a311_0x4902c7,_0x2acf55=new salesforce_1[(_0x13b830(0x12e))]({'instance':this['instance'],'objectName':constants_1[_0x13b830(0x11e)],'api':this['apiVersion'],'allOrNone':![],'externalIdField':'Id'});return _0x2acf55[_0x13b830(0xfe)]({'records':this[_0x13b830(0x118)]});}async[a311_0x4902c7(0x10c)](_0x2f370b){const _0x3a39a3=a311_0x4902c7;for(const {success:_0x5b04f4,error:_0x18d785}of _0x2f370b){if(_0x5b04f4){this[_0x3a39a3(0xfb)]++;continue;}_0x18d785&&this[_0x3a39a3(0xf6)][_0x3a39a3(0xe0)](_0x18d785);}}[a311_0x4902c7(0x11f)](_0xb77dc6){const _0x2b6916=a311_0x4902c7;return _0xb77dc6+this['binaryRecordsSizeChunk']>=salesforce_1['CompositeConstants'][_0x2b6916(0x107)]||this[_0x2b6916(0x110)][_0x2b6916(0x11c)][_0x2b6916(0x11a)]===MAX_COMPOSITE_CHUNK_COUNT;}[a311_0x4902c7(0x131)](){const _0x10ace6=a311_0x4902c7;this[_0x10ace6(0xec)]=0x0,this[_0x10ace6(0x110)]={'records':[],'binary':[]},this[_0x10ace6(0x118)]=[];}['populateAttachmentId'](_0x313e4f){const _0x124673=a311_0x4902c7;for(const _0x812828 in _0x313e4f){this[_0x124673(0x118)][_0x812828][ATTACHMENT_FIELD_NAME]=_0x313e4f[_0x812828]['id'];}}async['addAttachmentToChunk'](_0x23e3c3,_0x42d41b){const _0x2048c7=a311_0x4902c7,{listMetadataItem:_0x20722f,sourceMemberRecord:_0xef15d2}=_0x23e3c3,_0xdaf26f={'attributes':{'type':constants_1[_0x2048c7(0x12a)],'binaryPartName':_0x20722f[_0x2048c7(0xf5)],'binaryPartNameAlias':constants_1[_0x2048c7(0x10e)]},'Id':_0xef15d2[_0x2048c7(0xe4)],'Name':_0x20722f[_0x2048c7(0xf5)],'Description':_0x20722f[_0x2048c7(0x114)],'ContentType':CONTENT_TYPE,'ParentId':this[_0x2048c7(0xf7)],'Body':_0x20722f[_0x2048c7(0xf5)]},_0x3289f6={'binaryFieldName':constants_1[_0x2048c7(0x10e)],'name':_0x20722f[_0x2048c7(0xf5)],'value':stream_1[_0x2048c7(0x121)][_0x2048c7(0x123)](_0x42d41b)};this[_0x2048c7(0x110)]['records'][_0x2048c7(0xe2)](_0xdaf26f),this[_0x2048c7(0x110)]['binary']['push'](_0x3289f6);}[a311_0x4902c7(0x11b)](_0x46b855){const _0x2ccc01=a311_0x4902c7,_0x4b24af=new jszip_1[(_0x2ccc01(0xed))]();for(const _0x2584ee in _0x46b855){_0x4b24af[_0x2ccc01(0x111)](_0x2584ee,_0x46b855[_0x2584ee]);}return _0x4b24af[_0x2ccc01(0xe7)]({'type':_0x2ccc01(0xf3)});}[a311_0x4902c7(0x102)](_0x26d5b9,_0x33dc17){const _0x204a9a=a311_0x4902c7,_0x3b8814={'attributes':{'type':constants_1[_0x204a9a(0x11e)]},'Id':_0x33dc17[_0x204a9a(0x10a)],[constants_2[_0x204a9a(0xe9)]+_0x204a9a(0xfc)]:_0x33dc17['isNameObsolete'],[constants_2[_0x204a9a(0xe9)]+_0x204a9a(0x106)]:_0x33dc17['revisionCounter'],[constants_2[_0x204a9a(0xe9)]+_0x204a9a(0x108)]:_0x33dc17[_0x204a9a(0x124)],[constants_2['FLOSUM_NAMESPACE']+'Last_Updated_By__c']:_0x33dc17[_0x204a9a(0x127)],[constants_2[_0x204a9a(0xe9)]+_0x204a9a(0x126)]:_0x26d5b9[_0x204a9a(0xf5)],[constants_2['FLOSUM_NAMESPACE']+_0x204a9a(0x101)]:_0x26d5b9[_0x204a9a(0xf5)],[constants_2[_0x204a9a(0xe9)]+_0x204a9a(0x125)]:_0x26d5b9['type'],[constants_2[_0x204a9a(0xe9)]+_0x204a9a(0x104)]:_0x26d5b9[_0x204a9a(0x10b)],[constants_2[_0x204a9a(0xe9)]+_0x204a9a(0x105)]:constants_1['METADATA_FOLDER_MAP'][_0x204a9a(0x12f)](_0x26d5b9[_0x204a9a(0x114)])||null,[constants_2[_0x204a9a(0xe9)]+'Is_Retrieved__c']:!![],[constants_2[_0x204a9a(0xe9)]+_0x204a9a(0xdf)]:this[_0x204a9a(0xf7)],[constants_2['FLOSUM_NAMESPACE']+_0x204a9a(0x12c)]:this[_0x204a9a(0x103)],[constants_2[_0x204a9a(0xe9)]+_0x204a9a(0x12d)]:_0x204a9a(0x117)};this[_0x204a9a(0x118)][_0x204a9a(0xe2)](_0x3b8814);}async['_write'](_0x4d80af,_0x8da439,_0x1ef3a7){const _0x5c0652=a311_0x4902c7;try{const {listMetadataItem:_0x494ea6,sourceMemberRecord:_0x13cbe6,files:_0x1f9b64}=_0x4d80af,_0x2e1a3b=await this['createZip'](_0x1f9b64),_0x5def60=Buffer[_0x5c0652(0xe8)](_0x2e1a3b);this[_0x5c0652(0x11f)](_0x5def60)&&await this[_0x5c0652(0x120)](),this[_0x5c0652(0xec)]+=_0x5def60,await this[_0x5c0652(0x100)](_0x4d80af,_0x2e1a3b),this[_0x5c0652(0x102)](_0x494ea6,_0x13cbe6),_0x1ef3a7();}catch(_0x3a97bc){_0x1ef3a7(_0x3a97bc);}}async[a311_0x4902c7(0x130)](_0x208fee){const _0x22d0ba=a311_0x4902c7;try{this[_0x22d0ba(0x110)][_0x22d0ba(0x11c)]['length']&&this['orgComponentsToDeployChunk'][_0x22d0ba(0x11a)]&&await this[_0x22d0ba(0x120)](),this[_0x22d0ba(0xf6)][_0x22d0ba(0xf4)]('Process\x20completed\x20for\x20'+this[_0x22d0ba(0xfb)]+_0x22d0ba(0x10d)),await this['logger']['update'](),_0x208fee();}catch(_0x175190){_0x208fee(_0x175190);}}}exports[a311_0x4902c7(0xff)]=ComponentsDeployer;