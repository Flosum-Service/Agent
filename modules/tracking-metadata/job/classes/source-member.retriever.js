const a344_0x3a8e6e=a344_0x137c;function a344_0x137c(_0x1d984b,_0xb67323){const _0xd1257a=a344_0x50c1();return a344_0x137c=function(_0x323c5a,_0x30558a){_0x323c5a=_0x323c5a-0x1d4;let _0x50c134=_0xd1257a[_0x323c5a];return _0x50c134;},a344_0x137c(_0x1d984b,_0xb67323);}(function(_0x35918f,_0x4cc936){const _0x4dabac=a344_0x137c,_0x3bc652=_0x35918f();while(!![]){try{const _0x219d5e=parseInt(_0x4dabac(0x1d8))/0x1+-parseInt(_0x4dabac(0x1e2))/0x2*(-parseInt(_0x4dabac(0x1f5))/0x3)+parseInt(_0x4dabac(0x1f7))/0x4+parseInt(_0x4dabac(0x1f1))/0x5+parseInt(_0x4dabac(0x1ee))/0x6+-parseInt(_0x4dabac(0x1d4))/0x7+-parseInt(_0x4dabac(0x1d5))/0x8;if(_0x219d5e===_0x4cc936)break;else _0x3bc652['push'](_0x3bc652['shift']());}catch(_0x4f9067){_0x3bc652['push'](_0x3bc652['shift']());}}}(a344_0x50c1,0x81683));const a344_0x30558a=(function(){let _0x7e6c87=!![];return function(_0x5f1823,_0x2b52a7){const _0x513c28=_0x7e6c87?function(){const _0x4efe5b=a344_0x137c;if(_0x2b52a7){const _0x56b307=_0x2b52a7[_0x4efe5b(0x1f4)](_0x5f1823,arguments);return _0x2b52a7=null,_0x56b307;}}:function(){};return _0x7e6c87=![],_0x513c28;};}()),a344_0x323c5a=a344_0x30558a(this,function(){const _0x18538e=a344_0x137c;return a344_0x323c5a['toString']()[_0x18538e(0x1dd)]('(((.+)+)+)+$')['toString']()[_0x18538e(0x1e4)](a344_0x323c5a)['search'](_0x18538e(0x1ea));});function a344_0x50c1(){const _0x20853b=['IsNewMember','andWhere','__esModule','(((.+)+)+)+$','defineProperty','execute','RevisionCounter','2728836doxAYG','next','buildSourceMemberQuery','2865805SaOUEG','api','IsNameObsolete','apply','1284JBtnGl','stream','2312032PAyKgw','MemberType','lastRetrieveDate','from','SourceMember','instance','LastModifiedDate','4102266yUXvyf','18112320OAHkOE','Readable','SourceMemberRetriever','836406mKLXfk','\x20>=\x20:lastRetrieveDate','select','MemberName','dataSource','search','getIsDone','where','metadataTypes','currentRetrieveDate','4382fRqpPB','QueryBuilder','constructor','\x20<\x20:currentRetrieveDate','createDataSource'];a344_0x50c1=function(){return _0x20853b;};return a344_0x50c1();}a344_0x323c5a();'use strict';Object[a344_0x3a8e6e(0x1eb)](exports,a344_0x3a8e6e(0x1e9),{'value':!![]}),exports[a344_0x3a8e6e(0x1d7)]=void 0x0;const salesforce_1=require('@flosum/salesforce'),stream_1=require(a344_0x3a8e6e(0x1f6)),SOURCE_MEMBER_OBJECT_NAME=a344_0x3a8e6e(0x1fb),LAST_MODIFIED_DATE_FIELD_NAME=a344_0x3a8e6e(0x1fd),MEMBER_TYPE_FIELD_NAME=a344_0x3a8e6e(0x1f8),SOURCE_MEMBER_SELECT_FIELDS=['Id','MemberIdOrName','ChangedBy',a344_0x3a8e6e(0x1f3),a344_0x3a8e6e(0x1e7),a344_0x3a8e6e(0x1db),a344_0x3a8e6e(0x1f8),a344_0x3a8e6e(0x1ed),'LastModifiedDate'];class SourceMemberRetriever extends stream_1[a344_0x3a8e6e(0x1d6)]{constructor({apiVersion:_0x2311a2,instance:_0x2f06b4,lastRetrieveDate:_0xbd1e3a,currentRetrieveDate:_0xbb603e,metadataTypes:_0x42c566}){const _0xb53810=a344_0x3a8e6e;super({'objectMode':!![]}),this['instance']=_0x2f06b4,this[_0xb53810(0x1f2)]=_0x2311a2,this[_0xb53810(0x1f9)]=_0xbd1e3a,this['currentRetrieveDate']=_0xbb603e,this[_0xb53810(0x1e0)]=_0x42c566,this[_0xb53810(0x1dc)]=this['createDataSource']();}async*[a344_0x3a8e6e(0x1e6)](){const _0x270647=a344_0x3a8e6e,_0x396a38=new salesforce_1['CompositeRetrieveData']({'api':this[_0x270647(0x1f2)],'queryBuilder':this['buildSourceMemberQuery'](),'instance':this[_0x270647(0x1fc)],'isTooling':!![]});do{const {records:_0x412df0}=await _0x396a38[_0x270647(0x1ec)]();yield*_0x412df0;}while(!_0x396a38[_0x270647(0x1de)]());return null;}[a344_0x3a8e6e(0x1f0)](){const _0x3b9a2d=a344_0x3a8e6e;return new salesforce_1[(_0x3b9a2d(0x1e3))]()[_0x3b9a2d(0x1da)](...SOURCE_MEMBER_SELECT_FIELDS)[_0x3b9a2d(0x1fa)](SOURCE_MEMBER_OBJECT_NAME)[_0x3b9a2d(0x1df)](MEMBER_TYPE_FIELD_NAME+'\x20IN\x20(:metadataTypes)',{'metadataTypes':this['metadataTypes']})[_0x3b9a2d(0x1e8)](LAST_MODIFIED_DATE_FIELD_NAME+_0x3b9a2d(0x1d9),{'lastRetrieveDate':new Date(this['lastRetrieveDate'])})[_0x3b9a2d(0x1e8)](LAST_MODIFIED_DATE_FIELD_NAME+_0x3b9a2d(0x1e5),{'currentRetrieveDate':new Date(this[_0x3b9a2d(0x1e1)])});}async['_read'](){const _0x1294f9=a344_0x3a8e6e;try{const {value:_0xf5ba73}=await this[_0x1294f9(0x1dc)][_0x1294f9(0x1ef)]();this['push'](_0xf5ba73);}catch(_0x23281b){this['destroy'](_0x23281b);}}}exports[a344_0x3a8e6e(0x1d7)]=SourceMemberRetriever;