const a316_0x9d97a3=a316_0xf6a2;(function(_0x42c5b3,_0x1d9789){const _0x29fd6b=a316_0xf6a2,_0x6c77ef=_0x42c5b3();while(!![]){try{const _0x51e8f7=-parseInt(_0x29fd6b(0x1ee))/0x1+-parseInt(_0x29fd6b(0x1e8))/0x2+parseInt(_0x29fd6b(0x1e3))/0x3*(-parseInt(_0x29fd6b(0x1d9))/0x4)+parseInt(_0x29fd6b(0x1d5))/0x5+-parseInt(_0x29fd6b(0x1da))/0x6+parseInt(_0x29fd6b(0x1db))/0x7*(parseInt(_0x29fd6b(0x1d7))/0x8)+parseInt(_0x29fd6b(0x1e6))/0x9;if(_0x51e8f7===_0x1d9789)break;else _0x6c77ef['push'](_0x6c77ef['shift']());}catch(_0x2114f5){_0x6c77ef['push'](_0x6c77ef['shift']());}}}(a316_0x3802,0x237c7));function a316_0x3802(){const _0x50e467=['MemberType','keys','API_Name__c','Changes\x20found\x20for\x20','@flosum/salesforce','\x20IN\x20(:sourceMemberIds)','Transform','FLOSUM_NAMESPACE','getIsDone','OrganisationName__c','logger','andWhere','Folder__c','ChangedBy','../../../../constants','apply','instance','\x20=\x20:targetOrgId','_flush','from','where','Source_Member_Id__c','1040620tePSrz','__esModule','41152XCGAbw','IsNameObsolete','68664aBAdCF','783870LKLzYA','224WjmnFs','sourceMemberRecords','buildOrgComponentQuery','addToChunk','toString','handle','size','\x20components','18MSDZIf','handledMembersCounter','(((.+)+)+)+$','4382217LLvjuk','Revision_Counter__c','522570IzpuON','targetOrgId','getComponentFromFlosum','defineProperty','../../constants','CompositeRetrieveData','219368SKEQDI','Attachment_ID__c','RevisionCounter','push','set','search','stream','SourceMemberHandler','constructor'];a316_0x3802=function(){return _0x50e467;};return a316_0x3802();}const a316_0x285eb5=(function(){let _0x43bea6=!![];return function(_0x54c73f,_0x35ef75){const _0x5965ed=_0x43bea6?function(){const _0x362d24=a316_0xf6a2;if(_0x35ef75){const _0x367699=_0x35ef75[_0x362d24(0x1ce)](_0x54c73f,arguments);return _0x35ef75=null,_0x367699;}}:function(){};return _0x43bea6=![],_0x5965ed;};}()),a316_0x5517bf=a316_0x285eb5(this,function(){const _0x52d8ce=a316_0xf6a2;return a316_0x5517bf[_0x52d8ce(0x1df)]()['search'](_0x52d8ce(0x1e5))[_0x52d8ce(0x1df)]()[_0x52d8ce(0x1f6)](a316_0x5517bf)[_0x52d8ce(0x1f3)](_0x52d8ce(0x1e5));});a316_0x5517bf();'use strict';Object[a316_0x9d97a3(0x1eb)](exports,a316_0x9d97a3(0x1d6),{'value':!![]}),exports[a316_0x9d97a3(0x1f5)]=void 0x0;const stream_1=require(a316_0x9d97a3(0x1f4)),salesforce_1=require(a316_0x9d97a3(0x1c3)),constants_1=require(a316_0x9d97a3(0x1ec)),constants_2=require(a316_0x9d97a3(0x1cd)),MAX_CHUNK_SIZE=0xfa0,REVISION_COUNTER_FIELD_NAME=a316_0x9d97a3(0x1f0),IS_NAME_OBSOLETE=a316_0x9d97a3(0x1d8),MEMBER_ID_FIELD_NAME='MemberIdOrName',MEMBER_TYPE_FIELD_NAME=a316_0x9d97a3(0x1f7),CHANGED_BY_FIELD_NAME=a316_0x9d97a3(0x1cc),SOURCE_MEMBER_ID_FIELD_NAME=constants_2['FLOSUM_NAMESPACE']+a316_0x9d97a3(0x1d4),ORGANIZATION_NAME_FIELD=constants_2[a316_0x9d97a3(0x1c6)]+a316_0x9d97a3(0x1c8),REVISION_COUNTER_CUSTOM_FIELD_NAME=constants_2[a316_0x9d97a3(0x1c6)]+a316_0x9d97a3(0x1e7),ORG_COMPONENT_SELECT_FIELDS=['Id',constants_2[a316_0x9d97a3(0x1c6)]+a316_0x9d97a3(0x1e7),constants_2[a316_0x9d97a3(0x1c6)]+'Component_Type__c',constants_2['FLOSUM_NAMESPACE']+a316_0x9d97a3(0x1f9),constants_2['FLOSUM_NAMESPACE']+'Name__c',constants_2[a316_0x9d97a3(0x1c6)]+a316_0x9d97a3(0x1d4),constants_2[a316_0x9d97a3(0x1c6)]+a316_0x9d97a3(0x1c8),constants_2['FLOSUM_NAMESPACE']+a316_0x9d97a3(0x1ef),constants_2[a316_0x9d97a3(0x1c6)]+a316_0x9d97a3(0x1cb)];function a316_0xf6a2(_0x1439ee,_0x2b0c73){const _0x41e433=a316_0x3802();return a316_0xf6a2=function(_0x5517bf,_0x285eb5){_0x5517bf=_0x5517bf-0x1c2;let _0x38025e=_0x41e433[_0x5517bf];return _0x38025e;},a316_0xf6a2(_0x1439ee,_0x2b0c73);}class SourceMemberHandler extends stream_1[a316_0x9d97a3(0x1c5)]{constructor({apiVersion:_0x26bec8,instance:_0x163874,targetOrgId:_0x3262e,logger:_0xd859cb}){const _0xb68ab4=a316_0x9d97a3;super({'objectMode':!![]}),this[_0xb68ab4(0x1dc)]=new Map(),this[_0xb68ab4(0x1e4)]=0x0,this['api']=_0x26bec8,this[_0xb68ab4(0x1cf)]=_0x163874,this[_0xb68ab4(0x1e9)]=_0x3262e,this[_0xb68ab4(0x1c9)]=_0xd859cb;}[a316_0x9d97a3(0x1dd)](){const _0x4028c2=a316_0x9d97a3;return new salesforce_1['QueryBuilder']()['select'](...ORG_COMPONENT_SELECT_FIELDS)[_0x4028c2(0x1d2)](constants_1['ORG_COMPONENT_OBJECT_NAME'])[_0x4028c2(0x1d3)](SOURCE_MEMBER_ID_FIELD_NAME+_0x4028c2(0x1c4),{'sourceMemberIds':[...this[_0x4028c2(0x1dc)][_0x4028c2(0x1f8)]()]})[_0x4028c2(0x1ca)](ORGANIZATION_NAME_FIELD+_0x4028c2(0x1d0),{'targetOrgId':this['targetOrgId']});}async[a316_0x9d97a3(0x1ea)](){const _0x16b34d=a316_0x9d97a3,_0x287a98=new salesforce_1[(_0x16b34d(0x1ed))]({'api':this['api'],'queryBuilder':this[_0x16b34d(0x1dd)](),'instance':this[_0x16b34d(0x1cf)],'isTooling':![]}),_0x3f8b6a=new Map();do{const {records:_0x5bb189}=await _0x287a98['execute']();for(const _0x14a29e of _0x5bb189){_0x3f8b6a[_0x16b34d(0x1f2)](_0x14a29e[SOURCE_MEMBER_ID_FIELD_NAME],_0x14a29e);}}while(!_0x287a98[_0x16b34d(0x1c7)]());return _0x3f8b6a;}async[a316_0x9d97a3(0x1de)](_0x2c80d0){const _0x1d106e=a316_0x9d97a3;this[_0x1d106e(0x1dc)]['set'](_0x2c80d0['Id'],_0x2c80d0),this[_0x1d106e(0x1dc)][_0x1d106e(0x1e1)]===MAX_CHUNK_SIZE&&await this['handle']();}async['handle'](){const _0x1d4148=a316_0x9d97a3,_0x2ded0e=await this['getComponentFromFlosum']();for(const [_0x13c873,_0x10e9d6]of this[_0x1d4148(0x1dc)]){const _0xdcc80c=_0x2ded0e['get'](_0x13c873);if(_0xdcc80c&&_0x10e9d6[REVISION_COUNTER_FIELD_NAME]===_0xdcc80c[REVISION_COUNTER_CUSTOM_FIELD_NAME])continue;const _0x4d6be6={'sourceMemberId':_0x10e9d6['Id'],'componentId':(_0xdcc80c===null||_0xdcc80c===void 0x0?void 0x0:_0xdcc80c['Id'])||null,'attachmentId':(_0xdcc80c===null||_0xdcc80c===void 0x0?void 0x0:_0xdcc80c[_0x1d4148(0x1ef)])||null,'metadataId':_0x10e9d6[MEMBER_ID_FIELD_NAME],'metadataType':_0x10e9d6[MEMBER_TYPE_FIELD_NAME],'isNameObsolete':_0x10e9d6[IS_NAME_OBSOLETE],'revisionCounter':_0x10e9d6[REVISION_COUNTER_FIELD_NAME],'changedBy':_0x10e9d6[CHANGED_BY_FIELD_NAME]};this[_0x1d4148(0x1e4)]++,this[_0x1d4148(0x1f1)](_0x4d6be6);}this[_0x1d4148(0x1dc)]=new Map();}async['_transform'](_0x32af30,_0x981d83,_0x282ba9){const _0xf2bf1b=a316_0x9d97a3;try{await this[_0xf2bf1b(0x1de)](_0x32af30),_0x282ba9();}catch(_0x3dd9a9){_0x282ba9(_0x3dd9a9);}}async[a316_0x9d97a3(0x1d1)](_0x492462){const _0x4b75ec=a316_0x9d97a3;try{this['sourceMemberRecords'][_0x4b75ec(0x1e1)]&&await this[_0x4b75ec(0x1e0)](),this['logger']['log'](_0x4b75ec(0x1c2)+this[_0x4b75ec(0x1e4)]+_0x4b75ec(0x1e2)),await this['logger']['update'](),_0x492462();}catch(_0x1abf8a){_0x492462(_0x1abf8a);}}}exports[a316_0x9d97a3(0x1f5)]=SourceMemberHandler;