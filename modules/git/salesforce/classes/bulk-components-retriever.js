const a259_0x37ee1d=a259_0x533b;(function(_0x25e832,_0x3fc8da){const _0x2ae48d=a259_0x533b,_0x4bb4a5=_0x25e832();while(!![]){try{const _0x532661=parseInt(_0x2ae48d(0xd9))/0x1+-parseInt(_0x2ae48d(0xb7))/0x2*(-parseInt(_0x2ae48d(0xbd))/0x3)+-parseInt(_0x2ae48d(0xe2))/0x4+parseInt(_0x2ae48d(0xe4))/0x5*(-parseInt(_0x2ae48d(0xaf))/0x6)+-parseInt(_0x2ae48d(0xeb))/0x7+-parseInt(_0x2ae48d(0xb1))/0x8*(parseInt(_0x2ae48d(0xda))/0x9)+parseInt(_0x2ae48d(0xae))/0xa*(parseInt(_0x2ae48d(0xe3))/0xb);if(_0x532661===_0x3fc8da)break;else _0x4bb4a5['push'](_0x4bb4a5['shift']());}catch(_0x22cc5f){_0x4bb4a5['push'](_0x4bb4a5['shift']());}}}(a259_0x4602,0xdbfad));const a259_0xbf467f=(function(){let _0x5672c4=!![];return function(_0x3f3504,_0x426655){const _0x20de37=_0x5672c4?function(){const _0x5beaa2=a259_0x533b;if(_0x426655){const _0x484536=_0x426655[_0x5beaa2(0xc4)](_0x3f3504,arguments);return _0x426655=null,_0x484536;}}:function(){};return _0x5672c4=![],_0x20de37;};}()),a259_0x99a7bb=a259_0xbf467f(this,function(){const _0x28bb42=a259_0x533b;return a259_0x99a7bb[_0x28bb42(0xbb)]()[_0x28bb42(0xb2)](_0x28bb42(0xd8))[_0x28bb42(0xbb)]()['constructor'](a259_0x99a7bb)[_0x28bb42(0xb2)]('(((.+)+)+)+$');});a259_0x99a7bb();'use strict';Object[a259_0x37ee1d(0xb8)](exports,a259_0x37ee1d(0xbe),{'value':!![]}),exports[a259_0x37ee1d(0xdf)]=void 0x0;const salesforce_1=require(a259_0x37ee1d(0xc7)),core_1=require('../../../../core'),constants_1=require(a259_0x37ee1d(0xb5)),promises_1=require(a259_0x37ee1d(0xba)),fs_internal_1=require(a259_0x37ee1d(0xd6)),path_1=require(a259_0x37ee1d(0xe7)),BINARY_FIELDS=[a259_0x37ee1d(0xb4)],MAX_IDS_CHUNK_LENGTH=0xfa0;class BulkComponentsRetriever{constructor({request:_0x2c0136,ids:_0x2a2a85}){const _0x43b819=a259_0x37ee1d;this['components']=new Map(),this[_0x43b819(0xb3)]=_0x2c0136,this[_0x43b819(0xea)]=_0x2a2a85,this[_0x43b819(0xcd)]=new core_1['Logger'](BulkComponentsRetriever['name']);}async[a259_0x37ee1d(0xb9)](_0x22ce44){const _0x5949a8=a259_0x37ee1d,_0x357b3a=new salesforce_1[(_0x5949a8(0xc2))]()[_0x5949a8(0xcf)]('Id',constants_1[_0x5949a8(0xbc)]+_0x5949a8(0xe8)+constants_1[_0x5949a8(0xbc)]+_0x5949a8(0xdc),constants_1[_0x5949a8(0xbc)]+_0x5949a8(0xbf))[_0x5949a8(0xb6)](constants_1[_0x5949a8(0xbc)]+_0x5949a8(0xe6))[_0x5949a8(0xcc)](_0x5949a8(0xd2),{'ids':_0x22ce44}),_0x3d4365=new salesforce_1[(_0x5949a8(0xde))]({'api':salesforce_1[_0x5949a8(0xd5)][_0x5949a8(0xd0)],'queryBuilder':_0x357b3a,'instance':this[_0x5949a8(0xb3)],'isTooling':![]});do{const {records:_0x3eaeba}=await _0x3d4365[_0x5949a8(0xc1)]();for(const _0x47f0e3 of _0x3eaeba){this[_0x5949a8(0xdd)][_0x5949a8(0xd3)](_0x47f0e3['Id'],{'fileName':_0x47f0e3[constants_1[_0x5949a8(0xbc)]+_0x5949a8(0xc6)][constants_1[_0x5949a8(0xbc)]+_0x5949a8(0xdc)],'fileType':'','body':'','version':_0x47f0e3[constants_1[_0x5949a8(0xbc)]+_0x5949a8(0xbf)]});}}while(!_0x3d4365[_0x5949a8(0xe5)]());}async['retrieveAttachments'](_0x2e3df1){const _0x5e274c=a259_0x37ee1d,_0x3111ba=new salesforce_1[(_0x5e274c(0xc2))]()['select'](_0x5e274c(0xb4),_0x5e274c(0xd7),'ParentId')[_0x5e274c(0xb6)](_0x5e274c(0xca))[_0x5e274c(0xcc)](_0x5e274c(0xd4),{'ids':_0x2e3df1});!await fs_internal_1['FS'][_0x5e274c(0xc3)](path_1[_0x5e274c(0xcb)])&&await(0x0,promises_1[_0x5e274c(0xc0)])(path_1[_0x5e274c(0xcb)],{'recursive':!![]});const _0x41dbd2=new salesforce_1['Bulk1RetrieveData']({'instance':this[_0x5e274c(0xb3)],'api':salesforce_1['SalesforceConstants']['API'],'pollInterval':0x1388,'queryBuilder':_0x3111ba,'objectName':'Attachment','contentType':salesforce_1[_0x5e274c(0xe0)][_0x5e274c(0xc8)],'jobOperation':salesforce_1[_0x5e274c(0xc9)][_0x5e274c(0xdb)],'tmpPath':path_1[_0x5e274c(0xcb)]});do{const _0xc92304=await _0x41dbd2[_0x5e274c(0xc1)]();if(!_0xc92304)break;const _0x3c250a=new salesforce_1[(_0x5e274c(0xad))]({'binaryFields':BINARY_FIELDS});for await(const {Name:_0x5ce76e,ParentId:_0x3e2c7d,Body:_0x4bee9a}of _0xc92304['pipe'](_0x3c250a)){const _0x147ab7=this[_0x5e274c(0xdd)][_0x5e274c(0xd1)](_0x3e2c7d);if(!_0x147ab7){this[_0x5e274c(0xcd)]['error'](_0x5e274c(0xb0),_0x3e2c7d,_0x5ce76e);continue;}_0x147ab7['body']=_0x4bee9a,_0x147ab7[_0x5e274c(0xc5)]=_0x5ce76e;}}while(!_0x41dbd2[_0x5e274c(0xe5)]());}async[a259_0x37ee1d(0xe9)](){const _0x3bcd01=a259_0x37ee1d;do{const _0x4764d3=this[_0x3bcd01(0xea)]['splice'](0x0,MAX_IDS_CHUNK_LENGTH);await this[_0x3bcd01(0xb9)](_0x4764d3),await this[_0x3bcd01(0xce)](_0x4764d3);}while(this['ids'][_0x3bcd01(0xe1)]);return[...this['components']['values']()];}}function a259_0x533b(_0x497256,_0x3a1739){const _0x36a93f=a259_0x4602();return a259_0x533b=function(_0x99a7bb,_0xbf467f){_0x99a7bb=_0x99a7bb-0xad;let _0x460283=_0x36a93f[_0x99a7bb];return _0x460283;},a259_0x533b(_0x497256,_0x3a1739);}function a259_0x4602(){const _0x108ad4=['components','CompositeRetrieveData','BulkComponentsRetriever','BulkV1QueryContentType','length','6058200rzpfxa','18628511mgYLTf','25jvRcPk','getIsDone','Component_History__c','../../../../configs/path','Component__r.','retrieve','ids','7851228MEjeab','BulkXmlStreamParser','30iPXHMe','1871202nrDOGr','Parent\x20record\x20(%s)\x20for\x20file\x20(%s)\x20was\x20not\x20found.','13112776dzOGnS','search','request','Body','../../../../constants','from','316ceBowt','defineProperty','retrieveComponents','fs/promises','toString','FLOSUM_NAMESPACE','28233VePEwH','__esModule','Version__c','mkdir','execute','QueryBuilder','exists','apply','fileType','Component__r','@flosum/salesforce','APPLICATION_XML','Bulk1JobOperation','Attachment','tmpPath','where','logger','retrieveAttachments','select','API','get','Id\x20IN\x20(:ids)','set','ParentId\x20IN\x20(:ids)','SalesforceConstants','../../internal/fs.internal','Name','(((.+)+)+)+$','168182TXEGxl','9YVluYh','Query','Component_Name__c'];a259_0x4602=function(){return _0x108ad4;};return a259_0x4602();}exports['BulkComponentsRetriever']=BulkComponentsRetriever;