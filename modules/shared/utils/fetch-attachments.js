const a287_0x1e22e8=a287_0x3840;(function(_0x1615ba,_0x44405f){const _0x1dbad0=a287_0x3840,_0x1f04f5=_0x1615ba();while(!![]){try{const _0x55cc11=parseInt(_0x1dbad0(0xb5))/0x1*(-parseInt(_0x1dbad0(0xa8))/0x2)+parseInt(_0x1dbad0(0xc7))/0x3*(parseInt(_0x1dbad0(0xbc))/0x4)+-parseInt(_0x1dbad0(0xb7))/0x5*(-parseInt(_0x1dbad0(0xbd))/0x6)+parseInt(_0x1dbad0(0xaa))/0x7*(-parseInt(_0x1dbad0(0xc3))/0x8)+parseInt(_0x1dbad0(0xb1))/0x9+parseInt(_0x1dbad0(0xae))/0xa+parseInt(_0x1dbad0(0xc8))/0xb*(-parseInt(_0x1dbad0(0xab))/0xc);if(_0x55cc11===_0x44405f)break;else _0x1f04f5['push'](_0x1f04f5['shift']());}catch(_0x47ffc3){_0x1f04f5['push'](_0x1f04f5['shift']());}}}(a287_0x1e02,0xefc0a));function a287_0x3840(_0x3a2240,_0x2b66e1){const _0x1c6f8b=a287_0x1e02();return a287_0x3840=function(_0x426f59,_0x65c6f0){_0x426f59=_0x426f59-0xa3;let _0x1e02d5=_0x1c6f8b[_0x426f59];return _0x1e02d5;},a287_0x3840(_0x3a2240,_0x2b66e1);}const a287_0x65c6f0=(function(){let _0x564a08=!![];return function(_0x363f74,_0x1d631f){const _0x4f3904=_0x564a08?function(){const _0x33da65=a287_0x3840;if(_0x1d631f){const _0x9499e9=_0x1d631f[_0x33da65(0xb2)](_0x363f74,arguments);return _0x1d631f=null,_0x9499e9;}}:function(){};return _0x564a08=![],_0x4f3904;};}()),a287_0x426f59=a287_0x65c6f0(this,function(){const _0x39757b=a287_0x3840;return a287_0x426f59[_0x39757b(0xba)]()[_0x39757b(0xa7)]('(((.+)+)+)+$')[_0x39757b(0xba)]()[_0x39757b(0xb9)](a287_0x426f59)[_0x39757b(0xa7)](_0x39757b(0xa4));});a287_0x426f59();'use strict';Object['defineProperty'](exports,a287_0x1e22e8(0xbe),{'value':!![]}),exports['fetchAttachments']=exports['fetchAttachmentBody']=exports[a287_0x1e22e8(0xbb)]=exports[a287_0x1e22e8(0xa6)]=exports['retrieveAttachments']=void 0x0;const index_1=require('./index'),constants_1=require(a287_0x1e22e8(0xc1)),salesforce_request_1=require(a287_0x1e22e8(0xac)),CHUNK_QUERY_SIZE=0x1f4,REST_ATTACHMENT_MAX_SIZE=0x200000,REST_ATTACHMENT_COUNT=0x64,BINARY_FIELDS=[a287_0x1e22e8(0xb0)],FIELD_PARENT_ID=a287_0x1e22e8(0xc6),FIELD_ID='Id';function a287_0x1e02(){const _0x2f0c52=['fetchAttachments','(((.+)+)+)+$','/body','fetchAttachmentsDetailsById','search','2ybMgks','/retrieveAttachments/','1843352LstqUq','708kWypws','../../functions/utils/salesforce-request','base64','12808910cYkgCQ','\x20IN\x20(','Body','14250123hSVile','apply','/services/data/','join','782284SjHLqm','records','5FmQYpK','SALESFORCE_API_VERSION','constructor','toString','fetchAttachmentsDetailsByParentId','4152020wRvwCP','9514746fXGlLU','__esModule','BodyLength','retrieveAttachments','../../../constants','Attachment','24Wtiwqj','/services/apexrest','push','ParentId','3vYCpan','546964ldBVWY','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20Id,\x20Name,\x20BodyLength,\x20ParentId\x0a\x20\x20\x20\x20\x20\x20FROM\x20Attachment\x0a\x20\x20\x20\x20\x20\x20WHERE\x20'];a287_0x1e02=function(){return _0x2f0c52;};return a287_0x1e02();}async function retrieveAttachments(_0x45c921,_0x3ac8c6){const _0x59187e=a287_0x1e22e8;let _0x193d9b=0x0,_0x2ea176=0x0,_0x12865f=[];const _0x40d4d7=[];for(const _0xd68246 of _0x45c921){if(_0xd68246[_0x59187e(0xbf)]>REST_ATTACHMENT_MAX_SIZE){const _0x2085ee=await fetchAttachmentBody(_0x3ac8c6,_0xd68246['Id']);_0x40d4d7[_0x59187e(0xc5)]({'id':_0xd68246['Id'],'values':{'Body':_0x2085ee['toString'](_0x59187e(0xad))}});continue;}if(_0xd68246[_0x59187e(0xbf)]+_0x193d9b>REST_ATTACHMENT_MAX_SIZE||_0x2ea176+0x1>=REST_ATTACHMENT_COUNT){const _0x3b125b=await fetchAttachments(_0x3ac8c6,BINARY_FIELDS,_0x12865f);_0x40d4d7[_0x59187e(0xc5)](..._0x3b125b),_0x12865f=[],_0x193d9b=0x0,_0x2ea176=0x0;}_0x12865f['push'](_0xd68246['Id']),_0x193d9b+=_0xd68246['BodyLength'],_0x2ea176++;}if(_0x12865f['length']){const _0x450b71=await fetchAttachments(_0x3ac8c6,BINARY_FIELDS,_0x12865f);_0x40d4d7['push'](..._0x450b71);}return _0x40d4d7;}exports[a287_0x1e22e8(0xc0)]=retrieveAttachments;function fetchAttachmentsDetailsById(_0x56d14e,_0x4db259){return fetchAttachmentsDetails(_0x56d14e,FIELD_ID,_0x4db259);}exports[a287_0x1e22e8(0xa6)]=fetchAttachmentsDetailsById;function fetchAttachmentsDetailsByParentId(_0x2082ce,_0x483c9d){return fetchAttachmentsDetails(_0x2082ce,FIELD_PARENT_ID,_0x483c9d);}exports[a287_0x1e22e8(0xbb)]=fetchAttachmentsDetailsByParentId;async function fetchAttachmentsDetails(_0x2fd4a5,_0x3b4295,_0x3f81e1){const _0x15bf44=a287_0x1e22e8,_0x3deeab=[],_0x5eea75=(0x0,index_1['chunkArray'])(_0x3f81e1,CHUNK_QUERY_SIZE);for(const _0x33d61b of _0x5eea75){const _0x5e4dca=_0x15bf44(0xc9)+_0x3b4295+_0x15bf44(0xaf)+('\x27'+_0x33d61b[_0x15bf44(0xb4)]('\x27,\x27')+'\x27')+')',{data:_0x527c11}=await _0x2fd4a5['get']('/services/data/'+constants_1[_0x15bf44(0xb8)]+'/query/',{'params':{'q':_0x5e4dca}});_0x3deeab[_0x15bf44(0xc5)](..._0x527c11[_0x15bf44(0xb6)]);}return _0x3deeab;}async function fetchAttachmentBody(_0x491398,_0x103c31){const _0x57d2f0=a287_0x1e22e8,{data:_0x15496e}=await _0x491398['get'](_0x57d2f0(0xb3)+constants_1[_0x57d2f0(0xb8)]+'/sobjects/Attachment/'+_0x103c31+_0x57d2f0(0xa5),{'responseType':'arraybuffer'});return _0x15496e;}exports['fetchAttachmentBody']=fetchAttachmentBody;async function fetchAttachments(_0xe22ac2,_0x59b890,_0x51883a){const _0x5d5c44=a287_0x1e22e8,{data:_0x41949b}=await _0xe22ac2['post'](_0x5d5c44(0xc4)+salesforce_request_1['namespace']+_0x5d5c44(0xa9),{'objectName':_0x5d5c44(0xc2),'binaryFields':_0x59b890,'recordIds':_0x51883a});return _0x41949b;}exports[a287_0x1e22e8(0xa3)]=fetchAttachments;