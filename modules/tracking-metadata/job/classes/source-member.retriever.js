const a301_0x1ff846=a301_0x4ebe;(function(_0x4cc7f7,_0x29f25c){const _0x343ee5=a301_0x4ebe,_0x45d80e=_0x4cc7f7();while(!![]){try{const _0x463857=parseInt(_0x343ee5(0x143))/0x1*(-parseInt(_0x343ee5(0x145))/0x2)+-parseInt(_0x343ee5(0x164))/0x3+parseInt(_0x343ee5(0x153))/0x4+-parseInt(_0x343ee5(0x159))/0x5*(-parseInt(_0x343ee5(0x14f))/0x6)+parseInt(_0x343ee5(0x139))/0x7*(-parseInt(_0x343ee5(0x157))/0x8)+-parseInt(_0x343ee5(0x135))/0x9*(parseInt(_0x343ee5(0x148))/0xa)+parseInt(_0x343ee5(0x146))/0xb;if(_0x463857===_0x29f25c)break;else _0x45d80e['push'](_0x45d80e['shift']());}catch(_0x163daa){_0x45d80e['push'](_0x45d80e['shift']());}}}(a301_0x2d2f,0x67bbf));const a301_0x1bc2a4=(function(){let _0x3c29a6=!![];return function(_0x2d2919,_0x11bb3d){const _0x3b8176=_0x3c29a6?function(){const _0x1066c5=a301_0x4ebe;if(_0x11bb3d){const _0x290999=_0x11bb3d[_0x1066c5(0x162)](_0x2d2919,arguments);return _0x11bb3d=null,_0x290999;}}:function(){};return _0x3c29a6=![],_0x3b8176;};}()),a301_0x2829da=a301_0x1bc2a4(this,function(){const _0x46c695=a301_0x4ebe;return a301_0x2829da['toString']()['search'](_0x46c695(0x158))[_0x46c695(0x141)]()[_0x46c695(0x13e)](a301_0x2829da)['search'](_0x46c695(0x158));});a301_0x2829da();'use strict';Object[a301_0x1ff846(0x150)](exports,a301_0x1ff846(0x147),{'value':!![]}),exports[a301_0x1ff846(0x15f)]=void 0x0;const salesforce_1=require(a301_0x1ff846(0x136)),stream_1=require(a301_0x1ff846(0x14d)),SOURCE_MEMBER_OBJECT_NAME=a301_0x1ff846(0x156),LAST_MODIFIED_DATE_FIELD_NAME='LastModifiedDate',MEMBER_TYPE_FIELD_NAME='MemberType',SOURCE_MEMBER_SELECT_FIELDS=['Id',a301_0x1ff846(0x165),a301_0x1ff846(0x144),a301_0x1ff846(0x13a),a301_0x1ff846(0x14b),a301_0x1ff846(0x13b),a301_0x1ff846(0x15b),a301_0x1ff846(0x13d),a301_0x1ff846(0x149)];function a301_0x4ebe(_0x1408ca,_0xc37d4){const _0x2fd77b=a301_0x2d2f();return a301_0x4ebe=function(_0x2829da,_0x1bc2a4){_0x2829da=_0x2829da-0x135;let _0x2d2f26=_0x2fd77b[_0x2829da];return _0x2d2f26;},a301_0x4ebe(_0x1408ca,_0xc37d4);}class SourceMemberRetriever extends stream_1[a301_0x1ff846(0x137)]{constructor({apiVersion:_0x16fdf4,instance:_0x23708c,lastRetrieveDate:_0x561698,currentRetrieveDate:_0x214d9e,metadataTypes:_0x223606}){const _0x55f661=a301_0x1ff846;super({'objectMode':!![]}),this[_0x55f661(0x161)]=_0x23708c,this[_0x55f661(0x163)]=_0x16fdf4,this[_0x55f661(0x13c)]=_0x561698,this[_0x55f661(0x160)]=_0x214d9e,this[_0x55f661(0x15d)]=_0x223606,this[_0x55f661(0x14a)]=this[_0x55f661(0x138)]();}async*[a301_0x1ff846(0x138)](){const _0x5796ab=a301_0x1ff846,_0x549aab=new salesforce_1[(_0x5796ab(0x14c))]({'api':this[_0x5796ab(0x163)],'queryBuilder':this[_0x5796ab(0x155)](),'instance':this[_0x5796ab(0x161)],'isTooling':!![]});do{const {records:_0x4fd42c}=await _0x549aab['execute']();yield*_0x4fd42c;}while(!_0x549aab['getIsDone']());return null;}[a301_0x1ff846(0x155)](){const _0x2caf68=a301_0x1ff846;return new salesforce_1[(_0x2caf68(0x15a))]()[_0x2caf68(0x151)](...SOURCE_MEMBER_SELECT_FIELDS)[_0x2caf68(0x15c)](SOURCE_MEMBER_OBJECT_NAME)[_0x2caf68(0x14e)](MEMBER_TYPE_FIELD_NAME+_0x2caf68(0x13f),{'metadataTypes':this['metadataTypes']})[_0x2caf68(0x142)](LAST_MODIFIED_DATE_FIELD_NAME+_0x2caf68(0x152),{'lastRetrieveDate':new Date(this[_0x2caf68(0x13c)])})['andWhere'](LAST_MODIFIED_DATE_FIELD_NAME+_0x2caf68(0x154),{'currentRetrieveDate':new Date(this['currentRetrieveDate'])});}async['_read'](){const _0x13a5f8=a301_0x1ff846;try{const {value:_0x1a0b74}=await this['dataSource'][_0x13a5f8(0x15e)]();this['push'](_0x1a0b74);}catch(_0x1b4e90){this[_0x13a5f8(0x140)](_0x1b4e90);}}}function a301_0x2d2f(){const _0x57e2ad=['1buHOdp','ChangedBy','366734SFhYIS','16298491qMoFEP','__esModule','610NNUyfG','LastModifiedDate','dataSource','IsNewMember','CompositeRetrieveData','stream','where','6yTUihA','defineProperty','select','\x20>=\x20:lastRetrieveDate','732176ibJxOq','\x20<\x20:currentRetrieveDate','buildSourceMemberQuery','SourceMember','5840552nJgeaW','(((.+)+)+)+$','1450405cEqPQL','QueryBuilder','MemberType','from','metadataTypes','next','SourceMemberRetriever','currentRetrieveDate','instance','apply','api','1196847xzNlHa','MemberIdOrName','32094nmgukl','@flosum/salesforce','Readable','createDataSource','7FlLeKc','IsNameObsolete','MemberName','lastRetrieveDate','RevisionCounter','constructor','\x20IN\x20(:metadataTypes)','destroy','toString','andWhere'];a301_0x2d2f=function(){return _0x57e2ad;};return a301_0x2d2f();}exports[a301_0x1ff846(0x15f)]=SourceMemberRetriever;