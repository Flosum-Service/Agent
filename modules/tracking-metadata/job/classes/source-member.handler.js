function a295_0x2f99(_0xcfbf54,_0x235f03){const _0x375e41=a295_0x1d3a();return a295_0x2f99=function(_0x475e0b,_0x3bf7f8){_0x475e0b=_0x475e0b-0xfb;let _0x1d3ac8=_0x375e41[_0x475e0b];return _0x1d3ac8;},a295_0x2f99(_0xcfbf54,_0x235f03);}const a295_0x295a26=a295_0x2f99;(function(_0x3ce1c9,_0x39aaff){const _0x18ab7=a295_0x2f99,_0x1fc058=_0x3ce1c9();while(!![]){try{const _0x533a27=-parseInt(_0x18ab7(0x10b))/0x1*(parseInt(_0x18ab7(0x124))/0x2)+-parseInt(_0x18ab7(0x106))/0x3*(parseInt(_0x18ab7(0x12e))/0x4)+-parseInt(_0x18ab7(0x113))/0x5*(parseInt(_0x18ab7(0x107))/0x6)+-parseInt(_0x18ab7(0x131))/0x7*(-parseInt(_0x18ab7(0x12d))/0x8)+-parseInt(_0x18ab7(0x10d))/0x9*(-parseInt(_0x18ab7(0x137))/0xa)+parseInt(_0x18ab7(0x11a))/0xb+parseInt(_0x18ab7(0x12a))/0xc;if(_0x533a27===_0x39aaff)break;else _0x1fc058['push'](_0x1fc058['shift']());}catch(_0x301abc){_0x1fc058['push'](_0x1fc058['shift']());}}}(a295_0x1d3a,0x3582c));function a295_0x1d3a(){const _0x2e079a=['CompositeRetrieveData','@flosum/salesforce','Folder__c','IsNameObsolete','1387771PyhBqs','apply','../../constants','MemberType','sourceMemberRecords','set','api','addToChunk','andWhere','toString','207872VscBch','API_Name__c','MemberIdOrName','QueryBuilder','handle','instance','2386608lHhGOE','handledMembersCounter','default','8LRKqFc','16DEyfIS','ORG_COMPONENT_OBJECT_NAME','OrganisationName__c','1355039QNIssq','execute','stream','Component_Type__c','__esModule','\x20IN\x20(:sourceMemberIds)','1871410gWblaT','(((.+)+)+)+$','Changes\x20found\x20for\x20','FLOSUM_NAMESPACE','RevisionCounter','logger','Transform','select','log','../../../../constants','getComponentFromFlosum','ChangedBy','Revision_Counter__c','where','215148GtbqKg','29268ilaXwu','\x20components','Source_Member_Id__c','\x20=\x20:targetOrgId','1EdtCVe','search','18KNWEiC','defineProperty','size','Attachment_ID__c','targetOrgId','_transform','290shePoS','buildOrgComponentQuery','from'];a295_0x1d3a=function(){return _0x2e079a;};return a295_0x1d3a();}const a295_0x3bf7f8=(function(){let _0x263b51=!![];return function(_0x5649b5,_0x294d17){const _0x4735a4=_0x263b51?function(){const _0xf25c87=a295_0x2f99;if(_0x294d17){const _0x3da225=_0x294d17[_0xf25c87(0x11b)](_0x5649b5,arguments);return _0x294d17=null,_0x3da225;}}:function(){};return _0x263b51=![],_0x4735a4;};}()),a295_0x475e0b=a295_0x3bf7f8(this,function(){const _0x347c93=a295_0x2f99;return a295_0x475e0b[_0x347c93(0x123)]()[_0x347c93(0x10c)](_0x347c93(0x138))[_0x347c93(0x123)]()['constructor'](a295_0x475e0b)['search'](_0x347c93(0x138));});a295_0x475e0b();'use strict';Object[a295_0x295a26(0x10e)](exports,a295_0x295a26(0x135),{'value':!![]});const stream_1=require(a295_0x295a26(0x133)),salesforce_1=require(a295_0x295a26(0x117)),constants_1=require(a295_0x295a26(0x11c)),constants_2=require(a295_0x295a26(0x101)),MAX_CHUNK_SIZE=0xfa0,REVISION_COUNTER_FIELD_NAME=a295_0x295a26(0xfc),IS_NAME_OBSOLETE=a295_0x295a26(0x119),MEMBER_ID_FIELD_NAME=a295_0x295a26(0x126),MEMBER_TYPE_FIELD_NAME=a295_0x295a26(0x11d),CHANGED_BY_FIELD_NAME=a295_0x295a26(0x103),SOURCE_MEMBER_ID_FIELD_NAME=constants_2['FLOSUM_NAMESPACE']+'Source_Member_Id__c',ORGANIZATION_NAME_FIELD=constants_2[a295_0x295a26(0xfb)]+a295_0x295a26(0x130),REVISION_COUNTER_CUSTOM_FIELD_NAME=constants_2[a295_0x295a26(0xfb)]+a295_0x295a26(0x104),ORG_COMPONENT_SELECT_FIELDS=['Id',constants_2[a295_0x295a26(0xfb)]+a295_0x295a26(0x104),constants_2[a295_0x295a26(0xfb)]+a295_0x295a26(0x134),constants_2[a295_0x295a26(0xfb)]+a295_0x295a26(0x125),constants_2[a295_0x295a26(0xfb)]+'Name__c',constants_2[a295_0x295a26(0xfb)]+a295_0x295a26(0x109),constants_2['FLOSUM_NAMESPACE']+a295_0x295a26(0x130),constants_2['FLOSUM_NAMESPACE']+a295_0x295a26(0x110),constants_2[a295_0x295a26(0xfb)]+a295_0x295a26(0x118)];class SourceMemberHandler extends stream_1[a295_0x295a26(0xfe)]{constructor({apiVersion:_0x377f8e,instance:_0x185c3e,targetOrgId:_0x2a7e90,logger:_0x4a4225}){const _0x55bcf7=a295_0x295a26;super({'objectMode':!![]}),this[_0x55bcf7(0x11e)]=new Map(),this[_0x55bcf7(0x12b)]=0x0,this['api']=_0x377f8e,this[_0x55bcf7(0x129)]=_0x185c3e,this[_0x55bcf7(0x111)]=_0x2a7e90,this[_0x55bcf7(0xfd)]=_0x4a4225;}[a295_0x295a26(0x114)](){const _0x48c2b3=a295_0x295a26;return new salesforce_1[(_0x48c2b3(0x127))]()[_0x48c2b3(0xff)](...ORG_COMPONENT_SELECT_FIELDS)[_0x48c2b3(0x115)](constants_1[_0x48c2b3(0x12f)])[_0x48c2b3(0x105)](SOURCE_MEMBER_ID_FIELD_NAME+_0x48c2b3(0x136),{'sourceMemberIds':[...this[_0x48c2b3(0x11e)]['keys']()]})[_0x48c2b3(0x122)](ORGANIZATION_NAME_FIELD+_0x48c2b3(0x10a),{'targetOrgId':this[_0x48c2b3(0x111)]});}async[a295_0x295a26(0x102)](){const _0x45714a=a295_0x295a26,_0x1842d2=new salesforce_1[(_0x45714a(0x116))]({'api':this[_0x45714a(0x120)],'queryBuilder':this['buildOrgComponentQuery'](),'instance':this['instance'],'isTooling':![]}),_0x2b64a8=new Map();do{const {records:_0x450db1}=await _0x1842d2[_0x45714a(0x132)]();for(const _0x1cc435 of _0x450db1){_0x2b64a8[_0x45714a(0x11f)](_0x1cc435[SOURCE_MEMBER_ID_FIELD_NAME],_0x1cc435);}}while(!_0x1842d2['getIsDone']());return _0x2b64a8;}async[a295_0x295a26(0x121)](_0x37483f){const _0x29d7dd=a295_0x295a26;this['sourceMemberRecords']['set'](_0x37483f['Id'],_0x37483f),this[_0x29d7dd(0x11e)][_0x29d7dd(0x10f)]===MAX_CHUNK_SIZE&&await this[_0x29d7dd(0x128)]();}async[a295_0x295a26(0x128)](){const _0x522f48=a295_0x295a26,_0x4bb609=await this['getComponentFromFlosum']();for(const [_0x3b3f94,_0xd53a]of this[_0x522f48(0x11e)]){const _0x1b44aa=_0x4bb609['get'](_0x3b3f94);if(_0x1b44aa&&_0xd53a[REVISION_COUNTER_FIELD_NAME]===_0x1b44aa[REVISION_COUNTER_CUSTOM_FIELD_NAME])continue;const _0x23d0d8={'sourceMemberId':_0xd53a['Id'],'componentId':(_0x1b44aa===null||_0x1b44aa===void 0x0?void 0x0:_0x1b44aa['Id'])||null,'attachmentId':(_0x1b44aa===null||_0x1b44aa===void 0x0?void 0x0:_0x1b44aa[_0x522f48(0x110)])||null,'metadataId':_0xd53a[MEMBER_ID_FIELD_NAME],'metadataType':_0xd53a[MEMBER_TYPE_FIELD_NAME],'isNameObsolete':_0xd53a[IS_NAME_OBSOLETE],'revisionCounter':_0xd53a[REVISION_COUNTER_FIELD_NAME],'changedBy':_0xd53a[CHANGED_BY_FIELD_NAME]};this[_0x522f48(0x12b)]++,this['push'](_0x23d0d8);}this[_0x522f48(0x11e)]=new Map();}async[a295_0x295a26(0x112)](_0x52a1bd,_0xb77e73,_0x5f4fa1){const _0x296c6f=a295_0x295a26;try{await this[_0x296c6f(0x121)](_0x52a1bd),_0x5f4fa1();}catch(_0x110423){_0x5f4fa1(_0x110423);}}async['_flush'](_0x142a25){const _0x26bd53=a295_0x295a26;try{this[_0x26bd53(0x11e)][_0x26bd53(0x10f)]&&await this[_0x26bd53(0x128)](),this['logger'][_0x26bd53(0x100)](_0x26bd53(0x139)+this[_0x26bd53(0x12b)]+_0x26bd53(0x108)),await this[_0x26bd53(0xfd)]['update'](),_0x142a25();}catch(_0x2a78b3){_0x142a25(_0x2a78b3);}}}exports[a295_0x295a26(0x12c)]=SourceMemberHandler;