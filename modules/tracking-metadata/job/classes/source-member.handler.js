function a344_0x3e52(_0x27ffdc,_0x3facd5){const _0x12eacf=a344_0x4e7a();return a344_0x3e52=function(_0x37a384,_0x2c9e18){_0x37a384=_0x37a384-0x1b2;let _0x4e7af1=_0x12eacf[_0x37a384];return _0x4e7af1;},a344_0x3e52(_0x27ffdc,_0x3facd5);}const a344_0x48f8ed=a344_0x3e52;(function(_0x1f68d4,_0x1cd4b9){const _0x50afbd=a344_0x3e52,_0x19cd03=_0x1f68d4();while(!![]){try{const _0x5f39b8=-parseInt(_0x50afbd(0x1da))/0x1+parseInt(_0x50afbd(0x1d2))/0x2+parseInt(_0x50afbd(0x1d3))/0x3+-parseInt(_0x50afbd(0x1e1))/0x4+parseInt(_0x50afbd(0x1e4))/0x5*(-parseInt(_0x50afbd(0x1de))/0x6)+-parseInt(_0x50afbd(0x1c6))/0x7+parseInt(_0x50afbd(0x1e0))/0x8;if(_0x5f39b8===_0x1cd4b9)break;else _0x19cd03['push'](_0x19cd03['shift']());}catch(_0x54e7ad){_0x19cd03['push'](_0x19cd03['shift']());}}}(a344_0x4e7a,0x2455a));const a344_0x2c9e18=(function(){let _0x4ef529=!![];return function(_0x21dc7b,_0x15a34b){const _0x31e073=_0x4ef529?function(){const _0x41a682=a344_0x3e52;if(_0x15a34b){const _0x35fe71=_0x15a34b[_0x41a682(0x1e7)](_0x21dc7b,arguments);return _0x15a34b=null,_0x35fe71;}}:function(){};return _0x4ef529=![],_0x31e073;};}()),a344_0x37a384=a344_0x2c9e18(this,function(){const _0x310209=a344_0x3e52;return a344_0x37a384[_0x310209(0x1db)]()['search']('(((.+)+)+)+$')[_0x310209(0x1db)]()[_0x310209(0x1e6)](a344_0x37a384)[_0x310209(0x1ea)]('(((.+)+)+)+$');});function a344_0x4e7a(){const _0x2e54b5=['\x20components','getIsDone','buildOrgComponentQuery','Folder__c','log','instance','SourceMemberHandler','size','handledMembersCounter','../../constants','1384964OxfXtR','handle','ChangedBy','defineProperty','QueryBuilder','MemberType','push','RevisionCounter','andWhere','logger','@flosum/salesforce','Component_Type__c','142316lcmEoR','404154zGcLkM','CompositeRetrieveData','from','update','Changes\x20found\x20for\x20','set','Source_Member_Id__c','125344vVuuRp','toString','where','api','55710UebUIb','sourceMemberRecords','5782176ohupGT','1120844UvgtGH','get','Attachment_ID__c','95ynNeUJ','FLOSUM_NAMESPACE','constructor','apply','getComponentFromFlosum','stream','search','MemberIdOrName','ORG_COMPONENT_OBJECT_NAME','targetOrgId','select','MemberName','../../../../constants','addToChunk','Revision_Counter__c','API_Name__c','_flush'];a344_0x4e7a=function(){return _0x2e54b5;};return a344_0x4e7a();}a344_0x37a384();'use strict';Object[a344_0x48f8ed(0x1c9)](exports,'__esModule',{'value':!![]}),exports['SourceMemberHandler']=void 0x0;const stream_1=require(a344_0x48f8ed(0x1e9)),salesforce_1=require(a344_0x48f8ed(0x1d0)),constants_1=require(a344_0x48f8ed(0x1c5)),constants_2=require(a344_0x48f8ed(0x1b7)),MAX_CHUNK_SIZE=0xfa0,REVISION_COUNTER_FIELD_NAME=a344_0x48f8ed(0x1cd),IS_NAME_OBSOLETE='IsNameObsolete',MEMBER_ID_FIELD_NAME=a344_0x48f8ed(0x1b2),MEMBER_TYPE_FIELD_NAME=a344_0x48f8ed(0x1cb),MEMBER_NAME=a344_0x48f8ed(0x1b6),CHANGED_BY_FIELD_NAME=a344_0x48f8ed(0x1c8),SOURCE_MEMBER_ID_FIELD_NAME=constants_2['FLOSUM_NAMESPACE']+a344_0x48f8ed(0x1d9),ORGANIZATION_NAME_FIELD=constants_2[a344_0x48f8ed(0x1e5)]+'OrganisationName__c',REVISION_COUNTER_CUSTOM_FIELD_NAME=constants_2['FLOSUM_NAMESPACE']+a344_0x48f8ed(0x1b9),ORG_COMPONENT_SELECT_FIELDS=['Id',constants_2[a344_0x48f8ed(0x1e5)]+a344_0x48f8ed(0x1b9),constants_2[a344_0x48f8ed(0x1e5)]+a344_0x48f8ed(0x1d1),constants_2[a344_0x48f8ed(0x1e5)]+a344_0x48f8ed(0x1ba),constants_2[a344_0x48f8ed(0x1e5)]+'Name__c',constants_2['FLOSUM_NAMESPACE']+a344_0x48f8ed(0x1d9),constants_2[a344_0x48f8ed(0x1e5)]+'OrganisationName__c',constants_2['FLOSUM_NAMESPACE']+a344_0x48f8ed(0x1e3),constants_2[a344_0x48f8ed(0x1e5)]+a344_0x48f8ed(0x1bf)];class SourceMemberHandler extends stream_1['Transform']{constructor({apiVersion:_0x3dfb58,instance:_0x3c5329,targetOrgId:_0x143978,logger:_0x58db77}){const _0xa7b6ad=a344_0x48f8ed;super({'objectMode':!![]}),this['sourceMemberRecords']=new Map(),this[_0xa7b6ad(0x1c4)]=0x0,this['api']=_0x3dfb58,this['instance']=_0x3c5329,this[_0xa7b6ad(0x1b4)]=_0x143978,this['logger']=_0x58db77;}[a344_0x48f8ed(0x1be)](){const _0x46129b=a344_0x48f8ed;return new salesforce_1[(_0x46129b(0x1ca))]()[_0x46129b(0x1b5)](...ORG_COMPONENT_SELECT_FIELDS)[_0x46129b(0x1d5)](constants_1[_0x46129b(0x1b3)])[_0x46129b(0x1dc)](SOURCE_MEMBER_ID_FIELD_NAME+'\x20IN\x20(:sourceMemberIds)',{'sourceMemberIds':[...this[_0x46129b(0x1df)]['keys']()]})[_0x46129b(0x1ce)](ORGANIZATION_NAME_FIELD+'\x20=\x20:targetOrgId',{'targetOrgId':this[_0x46129b(0x1b4)]});}async[a344_0x48f8ed(0x1e8)](){const _0x4047a6=a344_0x48f8ed,_0x39cf4d=new salesforce_1[(_0x4047a6(0x1d4))]({'api':this[_0x4047a6(0x1dd)],'queryBuilder':this['buildOrgComponentQuery'](),'instance':this[_0x4047a6(0x1c1)],'isTooling':![]}),_0x11aa97=new Map();do{const {records:_0x457b47}=await _0x39cf4d['execute']();for(const _0x3c8658 of _0x457b47){_0x11aa97[_0x4047a6(0x1d8)](_0x3c8658[SOURCE_MEMBER_ID_FIELD_NAME],_0x3c8658);}}while(!_0x39cf4d[_0x4047a6(0x1bd)]());return _0x11aa97;}async[a344_0x48f8ed(0x1b8)](_0x1f77a2){const _0x4627d6=a344_0x48f8ed;this[_0x4627d6(0x1df)][_0x4627d6(0x1d8)](_0x1f77a2['Id'],_0x1f77a2),this[_0x4627d6(0x1df)][_0x4627d6(0x1c3)]===MAX_CHUNK_SIZE&&await this[_0x4627d6(0x1c7)]();}async[a344_0x48f8ed(0x1c7)](){const _0x2b0732=a344_0x48f8ed,_0x124ec7=await this[_0x2b0732(0x1e8)]();for(const [_0x245b87,_0x1bb363]of this[_0x2b0732(0x1df)]){const _0x4b9f48=_0x124ec7[_0x2b0732(0x1e2)](_0x245b87);if(_0x4b9f48&&_0x1bb363[REVISION_COUNTER_FIELD_NAME]===_0x4b9f48[REVISION_COUNTER_CUSTOM_FIELD_NAME])continue;const _0x5dc3f7={'sourceMemberId':_0x1bb363['Id'],'componentId':(_0x4b9f48===null||_0x4b9f48===void 0x0?void 0x0:_0x4b9f48['Id'])||null,'attachmentId':(_0x4b9f48===null||_0x4b9f48===void 0x0?void 0x0:_0x4b9f48[_0x2b0732(0x1e3)])||null,'metadataId':_0x1bb363[MEMBER_ID_FIELD_NAME],'metadataType':_0x1bb363[MEMBER_TYPE_FIELD_NAME],'metadataName':_0x1bb363[MEMBER_NAME],'isNameObsolete':_0x1bb363[IS_NAME_OBSOLETE],'revisionCounter':_0x1bb363[REVISION_COUNTER_FIELD_NAME],'changedBy':_0x1bb363[CHANGED_BY_FIELD_NAME]};this[_0x2b0732(0x1c4)]++,this[_0x2b0732(0x1cc)](_0x5dc3f7);}this[_0x2b0732(0x1df)]=new Map();}async['_transform'](_0xc3b9d0,_0x89e3ff,_0x24bce8){const _0x524bec=a344_0x48f8ed;try{await this[_0x524bec(0x1b8)](_0xc3b9d0),_0x24bce8();}catch(_0x590857){_0x24bce8(_0x590857);}}async[a344_0x48f8ed(0x1bb)](_0x51506a){const _0x3aa17c=a344_0x48f8ed;try{this[_0x3aa17c(0x1df)]['size']&&await this['handle'](),this['logger'][_0x3aa17c(0x1c0)](_0x3aa17c(0x1d7)+this['handledMembersCounter']+_0x3aa17c(0x1bc)),await this[_0x3aa17c(0x1cf)][_0x3aa17c(0x1d6)](),_0x51506a();}catch(_0x2faf4c){_0x51506a(_0x2faf4c);}}}exports[a344_0x48f8ed(0x1c2)]=SourceMemberHandler;