const a332_0x53bb44=a332_0x4c3e;(function(_0x473de8,_0x164c69){const _0x84e785=a332_0x4c3e,_0x385f4a=_0x473de8();while(!![]){try{const _0x471181=parseInt(_0x84e785(0x1e1))/0x1+-parseInt(_0x84e785(0x1df))/0x2+-parseInt(_0x84e785(0x1ef))/0x3+parseInt(_0x84e785(0x1db))/0x4*(parseInt(_0x84e785(0x1e9))/0x5)+-parseInt(_0x84e785(0x1f2))/0x6*(-parseInt(_0x84e785(0x1e3))/0x7)+parseInt(_0x84e785(0x1e0))/0x8*(parseInt(_0x84e785(0x1f3))/0x9)+-parseInt(_0x84e785(0x1f4))/0xa;if(_0x471181===_0x164c69)break;else _0x385f4a['push'](_0x385f4a['shift']());}catch(_0x186843){_0x385f4a['push'](_0x385f4a['shift']());}}}(a332_0x3d31,0xa19e0));const a332_0x741bd3=(function(){let _0xe846e9=!![];return function(_0xf63667,_0x21aad2){const _0x2c32d1=_0xe846e9?function(){if(_0x21aad2){const _0x25c941=_0x21aad2['apply'](_0xf63667,arguments);return _0x21aad2=null,_0x25c941;}}:function(){};return _0xe846e9=![],_0x2c32d1;};}()),a332_0x17015b=a332_0x741bd3(this,function(){const _0x2f1c6c=a332_0x4c3e;return a332_0x17015b[_0x2f1c6c(0x1fc)]()[_0x2f1c6c(0x1ea)]('(((.+)+)+)+$')[_0x2f1c6c(0x1fc)]()[_0x2f1c6c(0x1dd)](a332_0x17015b)['search'](_0x2f1c6c(0x1ec));});a332_0x17015b();'use strict';Object[a332_0x53bb44(0x1d8)](exports,a332_0x53bb44(0x1e8),{'value':!![]}),exports[a332_0x53bb44(0x1de)]=exports[a332_0x53bb44(0x1e2)]=exports[a332_0x53bb44(0x1fd)]=exports[a332_0x53bb44(0x1da)]=exports['retrieveAttachments']=void 0x0;const index_1=require(a332_0x53bb44(0x1ee)),constants_1=require(a332_0x53bb44(0x1f9)),salesforce_request_1=require('../../functions/utils/salesforce-request'),CHUNK_QUERY_SIZE=0x1f4,REST_ATTACHMENT_MAX_SIZE=0x200000,REST_ATTACHMENT_COUNT=0x64,BINARY_FIELDS=[a332_0x53bb44(0x1fb)],FIELD_PARENT_ID=a332_0x53bb44(0x1e7),FIELD_ID='Id';function a332_0x3d31(){const _0x1123b8=['43836nwLgiP','5894379aTrAdN','6709160gBuida','\x20IN\x20(','get','/services/data/','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20Id,\x20Name,\x20BodyLength,\x20ParentId\x0a\x20\x20\x20\x20\x20\x20FROM\x20Attachment\x0a\x20\x20\x20\x20\x20\x20WHERE\x20','../../../constants','/body','Body','toString','fetchAttachmentsDetailsByParentId','join','defineProperty','SALESFORCE_API_VERSION','fetchAttachmentsDetailsById','166724KBeGwj','push','constructor','fetchAttachments','69142gRBaLi','16eWCsZn','919961NtfRHj','fetchAttachmentBody','364fIaVPQ','length','/retrieveAttachments/','chunkArray','ParentId','__esModule','5mnqWdA','search','BodyLength','(((.+)+)+)+$','post','./index','3851835RWwLrH','base64','/services/apexrest'];a332_0x3d31=function(){return _0x1123b8;};return a332_0x3d31();}async function retrieveAttachments(_0x216408,_0x91976d){const _0x59a009=a332_0x53bb44;let _0x4cc319=0x0,_0x5e063c=0x0,_0x5e4dfa=[];const _0x22304d=[];for(const _0x5c330a of _0x216408){if(_0x5c330a['BodyLength']>REST_ATTACHMENT_MAX_SIZE){const _0x3251d2=await fetchAttachmentBody(_0x91976d,_0x5c330a['Id']);_0x22304d[_0x59a009(0x1dc)]({'id':_0x5c330a['Id'],'values':{'Body':_0x3251d2[_0x59a009(0x1fc)](_0x59a009(0x1f0))}});continue;}if(_0x5c330a['BodyLength']+_0x4cc319>REST_ATTACHMENT_MAX_SIZE||_0x5e063c+0x1>=REST_ATTACHMENT_COUNT){const _0x2ccfd6=await fetchAttachments(_0x91976d,BINARY_FIELDS,_0x5e4dfa);_0x22304d[_0x59a009(0x1dc)](..._0x2ccfd6),_0x5e4dfa=[],_0x4cc319=0x0,_0x5e063c=0x0;}_0x5e4dfa[_0x59a009(0x1dc)](_0x5c330a['Id']),_0x4cc319+=_0x5c330a[_0x59a009(0x1eb)],_0x5e063c++;}if(_0x5e4dfa[_0x59a009(0x1e4)]){const _0x20729b=await fetchAttachments(_0x91976d,BINARY_FIELDS,_0x5e4dfa);_0x22304d[_0x59a009(0x1dc)](..._0x20729b);}return _0x22304d;}exports['retrieveAttachments']=retrieveAttachments;function fetchAttachmentsDetailsById(_0x21b6ef,_0x137b7e){return fetchAttachmentsDetails(_0x21b6ef,FIELD_ID,_0x137b7e);}exports[a332_0x53bb44(0x1da)]=fetchAttachmentsDetailsById;function a332_0x4c3e(_0x353227,_0x541ca5){const _0x1ffed8=a332_0x3d31();return a332_0x4c3e=function(_0x17015b,_0x741bd3){_0x17015b=_0x17015b-0x1d7;let _0x3d31d5=_0x1ffed8[_0x17015b];return _0x3d31d5;},a332_0x4c3e(_0x353227,_0x541ca5);}function fetchAttachmentsDetailsByParentId(_0x140275,_0x29a2ad){return fetchAttachmentsDetails(_0x140275,FIELD_PARENT_ID,_0x29a2ad);}exports[a332_0x53bb44(0x1fd)]=fetchAttachmentsDetailsByParentId;async function fetchAttachmentsDetails(_0x56738b,_0x1937a8,_0x4d2cd4){const _0x1b8179=a332_0x53bb44,_0x488ceb=[],_0x4e0825=(0x0,index_1[_0x1b8179(0x1e6)])(_0x4d2cd4,CHUNK_QUERY_SIZE);for(const _0x28c33f of _0x4e0825){const _0x136a2f=_0x1b8179(0x1f8)+_0x1937a8+_0x1b8179(0x1f5)+('\x27'+_0x28c33f[_0x1b8179(0x1d7)]('\x27,\x27')+'\x27')+')',{data:_0x2d08aa}=await _0x56738b['get']('/services/data/'+constants_1[_0x1b8179(0x1d9)]+'/query/',{'params':{'q':_0x136a2f}});_0x488ceb[_0x1b8179(0x1dc)](..._0x2d08aa['records']);}return _0x488ceb;}async function fetchAttachmentBody(_0x279404,_0xa78cd9){const _0x39ff07=a332_0x53bb44,{data:_0x442848}=await _0x279404[_0x39ff07(0x1f6)](_0x39ff07(0x1f7)+constants_1[_0x39ff07(0x1d9)]+'/sobjects/Attachment/'+_0xa78cd9+_0x39ff07(0x1fa),{'responseType':'arraybuffer'});return _0x442848;}exports[a332_0x53bb44(0x1e2)]=fetchAttachmentBody;async function fetchAttachments(_0x1232ea,_0x359acd,_0x375a69){const _0x3fff43=a332_0x53bb44,{data:_0x4d59c1}=await _0x1232ea[_0x3fff43(0x1ed)](_0x3fff43(0x1f1)+salesforce_request_1['namespace']+_0x3fff43(0x1e5),{'objectName':'Attachment','binaryFields':_0x359acd,'recordIds':_0x375a69});return _0x4d59c1;}exports['fetchAttachments']=fetchAttachments;