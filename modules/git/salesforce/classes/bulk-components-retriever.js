const a259_0x86040e=a259_0x3130;(function(_0x4f1782,_0x587ce8){const _0x56f63d=a259_0x3130,_0x381cd5=_0x4f1782();while(!![]){try{const _0x3d9aac=-parseInt(_0x56f63d(0x1aa))/0x1*(-parseInt(_0x56f63d(0x1ad))/0x2)+parseInt(_0x56f63d(0x1d5))/0x3*(-parseInt(_0x56f63d(0x1d0))/0x4)+parseInt(_0x56f63d(0x1cd))/0x5*(-parseInt(_0x56f63d(0x1b6))/0x6)+parseInt(_0x56f63d(0x1a7))/0x7+-parseInt(_0x56f63d(0x1d6))/0x8*(-parseInt(_0x56f63d(0x1ae))/0x9)+parseInt(_0x56f63d(0x1be))/0xa+parseInt(_0x56f63d(0x1bf))/0xb*(-parseInt(_0x56f63d(0x1b0))/0xc);if(_0x3d9aac===_0x587ce8)break;else _0x381cd5['push'](_0x381cd5['shift']());}catch(_0x4a8bb8){_0x381cd5['push'](_0x381cd5['shift']());}}}(a259_0x2977,0x67ba3));function a259_0x3130(_0x4b51da,_0x57b5f8){const _0x3f2358=a259_0x2977();return a259_0x3130=function(_0x184de5,_0x414c06){_0x184de5=_0x184de5-0x1a3;let _0x297786=_0x3f2358[_0x184de5];return _0x297786;},a259_0x3130(_0x4b51da,_0x57b5f8);}const a259_0x414c06=(function(){let _0x46eb08=!![];return function(_0x3c385d,_0x4fc077){const _0x49d2c1=_0x46eb08?function(){const _0x3caa10=a259_0x3130;if(_0x4fc077){const _0x417e74=_0x4fc077[_0x3caa10(0x1cb)](_0x3c385d,arguments);return _0x4fc077=null,_0x417e74;}}:function(){};return _0x46eb08=![],_0x49d2c1;};}()),a259_0x184de5=a259_0x414c06(this,function(){const _0x520ad1=a259_0x3130;return a259_0x184de5['toString']()[_0x520ad1(0x1c2)]('(((.+)+)+)+$')[_0x520ad1(0x1de)]()['constructor'](a259_0x184de5)['search'](_0x520ad1(0x1d7));});a259_0x184de5();function a259_0x2977(){const _0x123453=['pipe','ParentId\x20IN\x20(:ids)','body','__esModule','Body','toString','mkdir','FLOSUM_NAMESPACE','Component_Name__c','tmpPath','Query','retrieveComponents','Component__r.','defineProperty','975058skGXEc','ids','set','147816WQSPVA','Name','API','4ltDOQD','157509oWXkWk','../../internal/fs.internal','1272hxTFnU','getIsDone','splice','Bulk1JobOperation','components','values','414nNsSNI','Bulk1RetrieveData','retrieve','APPLICATION_XML','SalesforceConstants','from','where','Component_History__c','8230460cWctQn','15697zPhdIR','../../../../core','error','search','BulkV1QueryContentType','request','Component__r','BulkComponentsRetriever','logger','fileType','Parent\x20record\x20(%s)\x20for\x20file\x20(%s)\x20was\x20not\x20found.','Attachment','apply','execute','53855gUFDfV','CompositeRetrieveData','select','4XKUQxN','Version__c','ParentId','QueryBuilder','../../../../configs/path','1758543tPcKzz','296QSayDn','(((.+)+)+)+$','retrieveAttachments'];a259_0x2977=function(){return _0x123453;};return a259_0x2977();}'use strict';Object[a259_0x86040e(0x1a6)](exports,a259_0x86040e(0x1dc),{'value':!![]}),exports[a259_0x86040e(0x1c6)]=void 0x0;const salesforce_1=require('@flosum/salesforce'),core_1=require(a259_0x86040e(0x1c0)),constants_1=require('../../../../constants'),promises_1=require('fs/promises'),fs_internal_1=require(a259_0x86040e(0x1af)),path_1=require(a259_0x86040e(0x1d4)),BINARY_FIELDS=[a259_0x86040e(0x1dd)],MAX_IDS_CHUNK_LENGTH=0xfa0;class BulkComponentsRetriever{constructor({request:_0x15f7a3,ids:_0x303108}){const _0x488464=a259_0x86040e;this[_0x488464(0x1b4)]=new Map(),this[_0x488464(0x1c4)]=_0x15f7a3,this[_0x488464(0x1a8)]=_0x303108,this[_0x488464(0x1c7)]=new core_1['Logger'](BulkComponentsRetriever['name']);}async[a259_0x86040e(0x1a4)](_0x546602){const _0x5b6cb7=a259_0x86040e,_0x515139=new salesforce_1[(_0x5b6cb7(0x1d3))]()[_0x5b6cb7(0x1cf)]('Id',constants_1[_0x5b6cb7(0x1e0)]+_0x5b6cb7(0x1a5)+constants_1['FLOSUM_NAMESPACE']+_0x5b6cb7(0x1e1),constants_1[_0x5b6cb7(0x1e0)]+_0x5b6cb7(0x1d1))[_0x5b6cb7(0x1bb)](constants_1[_0x5b6cb7(0x1e0)]+_0x5b6cb7(0x1bd))[_0x5b6cb7(0x1bc)]('Id\x20IN\x20(:ids)',{'ids':_0x546602}),_0x24a1f3=new salesforce_1[(_0x5b6cb7(0x1ce))]({'api':salesforce_1[_0x5b6cb7(0x1ba)][_0x5b6cb7(0x1ac)],'queryBuilder':_0x515139,'instance':this['request'],'isTooling':![]});do{const {records:_0x301d06}=await _0x24a1f3[_0x5b6cb7(0x1cc)]();for(const _0x5b49dd of _0x301d06){this[_0x5b6cb7(0x1b4)][_0x5b6cb7(0x1a9)](_0x5b49dd['Id'],{'fileName':_0x5b49dd[constants_1[_0x5b6cb7(0x1e0)]+_0x5b6cb7(0x1c5)][constants_1[_0x5b6cb7(0x1e0)]+_0x5b6cb7(0x1e1)],'fileType':'','body':'','version':_0x5b49dd[constants_1['FLOSUM_NAMESPACE']+_0x5b6cb7(0x1d1)]});}}while(!_0x24a1f3[_0x5b6cb7(0x1b1)]());}async['retrieveAttachments'](_0x1a7caf){const _0x57d1a4=a259_0x86040e,_0xf6fa34=new salesforce_1[(_0x57d1a4(0x1d3))]()[_0x57d1a4(0x1cf)](_0x57d1a4(0x1dd),_0x57d1a4(0x1ab),_0x57d1a4(0x1d2))[_0x57d1a4(0x1bb)](_0x57d1a4(0x1ca))[_0x57d1a4(0x1bc)](_0x57d1a4(0x1da),{'ids':_0x1a7caf});!await fs_internal_1['FS']['exists'](path_1[_0x57d1a4(0x1e2)])&&await(0x0,promises_1[_0x57d1a4(0x1df)])(path_1[_0x57d1a4(0x1e2)],{'recursive':!![]});const _0x1002ad=new salesforce_1[(_0x57d1a4(0x1b7))]({'instance':this[_0x57d1a4(0x1c4)],'api':salesforce_1['SalesforceConstants'][_0x57d1a4(0x1ac)],'pollInterval':0x1388,'queryBuilder':_0xf6fa34,'objectName':_0x57d1a4(0x1ca),'contentType':salesforce_1[_0x57d1a4(0x1c3)][_0x57d1a4(0x1b9)],'jobOperation':salesforce_1[_0x57d1a4(0x1b3)][_0x57d1a4(0x1a3)],'tmpPath':path_1['tmpPath']});do{const _0x573d0f=await _0x1002ad[_0x57d1a4(0x1cc)]();if(!_0x573d0f)break;const _0x2df802=new salesforce_1['BulkXmlStreamParser']({'binaryFields':BINARY_FIELDS});for await(const {Name:_0x344088,ParentId:_0x4608b3,Body:_0x267e6d}of _0x573d0f[_0x57d1a4(0x1d9)](_0x2df802)){const _0x300675=this[_0x57d1a4(0x1b4)]['get'](_0x4608b3);if(!_0x300675){this[_0x57d1a4(0x1c7)][_0x57d1a4(0x1c1)](_0x57d1a4(0x1c9),_0x4608b3,_0x344088);continue;}_0x300675[_0x57d1a4(0x1db)]=_0x267e6d,_0x300675[_0x57d1a4(0x1c8)]=_0x344088;}}while(!_0x1002ad['getIsDone']());}async[a259_0x86040e(0x1b8)](){const _0x4cf788=a259_0x86040e;do{const _0x1f6316=this[_0x4cf788(0x1a8)][_0x4cf788(0x1b2)](0x0,MAX_IDS_CHUNK_LENGTH);await this[_0x4cf788(0x1a4)](_0x1f6316),await this[_0x4cf788(0x1d8)](_0x1f6316);}while(this[_0x4cf788(0x1a8)]['length']);return[...this[_0x4cf788(0x1b4)][_0x4cf788(0x1b5)]()];}}exports[a259_0x86040e(0x1c6)]=BulkComponentsRetriever;