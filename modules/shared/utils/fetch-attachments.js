const a303_0x2aba9c=a303_0x1503;(function(_0x14bdb3,_0x5109a4){const _0x54f3e0=a303_0x1503,_0x1f008a=_0x14bdb3();while(!![]){try{const _0x11a450=parseInt(_0x54f3e0(0xc4))/0x1*(-parseInt(_0x54f3e0(0xc1))/0x2)+parseInt(_0x54f3e0(0xc8))/0x3*(-parseInt(_0x54f3e0(0xb8))/0x4)+parseInt(_0x54f3e0(0xa6))/0x5+parseInt(_0x54f3e0(0xb5))/0x6+-parseInt(_0x54f3e0(0xa8))/0x7+-parseInt(_0x54f3e0(0xc7))/0x8+parseInt(_0x54f3e0(0xb0))/0x9*(parseInt(_0x54f3e0(0xca))/0xa);if(_0x11a450===_0x5109a4)break;else _0x1f008a['push'](_0x1f008a['shift']());}catch(_0xe3cbf8){_0x1f008a['push'](_0x1f008a['shift']());}}}(a303_0x3ec2,0xc287f));const a303_0xe35e27=(function(){let _0x69e114=!![];return function(_0x6bd926,_0x3ad82c){const _0x27255f=_0x69e114?function(){if(_0x3ad82c){const _0x485de1=_0x3ad82c['apply'](_0x6bd926,arguments);return _0x3ad82c=null,_0x485de1;}}:function(){};return _0x69e114=![],_0x27255f;};}()),a303_0x74cfd7=a303_0xe35e27(this,function(){const _0x28ea3d=a303_0x1503;return a303_0x74cfd7[_0x28ea3d(0xbb)]()[_0x28ea3d(0xbc)](_0x28ea3d(0xc6))[_0x28ea3d(0xbb)]()[_0x28ea3d(0xb7)](a303_0x74cfd7)['search']('(((.+)+)+)+$');});function a303_0x3ec2(){const _0x129e66=['../../../constants','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20Id,\x20Name,\x20BodyLength,\x20ParentId\x0a\x20\x20\x20\x20\x20\x20FROM\x20Attachment\x0a\x20\x20\x20\x20\x20\x20WHERE\x20','/services/data/','SALESFORCE_API_VERSION','length','7448745QajmKT','get','5397728SrGrhR','arraybuffer','fetchAttachmentsDetailsById','namespace','./index','fetchAttachments','fetchAttachmentsDetailsByParentId','Body','54LpmeFK','/sobjects/Attachment/','/query/','BodyLength','push','5980716uykLqk','base64','constructor','624476TUEBKQ','fetchAttachmentBody','Attachment','toString','search','retrieveAttachments','join','/body','chunkArray','792praWph','/retrieveAttachments/','\x20IN\x20(','780tWpuNy','ParentId','(((.+)+)+)+$','7457048Sxetho','15QBVxEr','\x27,\x27','1838290EYGpKW','post'];a303_0x3ec2=function(){return _0x129e66;};return a303_0x3ec2();}a303_0x74cfd7();'use strict';Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a303_0x2aba9c(0xad)]=exports[a303_0x2aba9c(0xb9)]=exports[a303_0x2aba9c(0xae)]=exports[a303_0x2aba9c(0xaa)]=exports['retrieveAttachments']=void 0x0;const index_1=require(a303_0x2aba9c(0xac)),constants_1=require(a303_0x2aba9c(0xcc)),salesforce_request_1=require('../../functions/utils/salesforce-request'),CHUNK_QUERY_SIZE=0x1f4,REST_ATTACHMENT_MAX_SIZE=0x200000,REST_ATTACHMENT_COUNT=0x64,BINARY_FIELDS=[a303_0x2aba9c(0xaf)],FIELD_PARENT_ID=a303_0x2aba9c(0xc5),FIELD_ID='Id';async function retrieveAttachments(_0x2722d1,_0x2b72cb){const _0x51bfa0=a303_0x2aba9c;let _0x19d6c0=0x0,_0x59cca9=0x0,_0x1ebf1c=[];const _0x723fd2=[];for(const _0xd69f9c of _0x2722d1){if(_0xd69f9c[_0x51bfa0(0xb3)]>REST_ATTACHMENT_MAX_SIZE){const _0x178afa=await fetchAttachmentBody(_0x2b72cb,_0xd69f9c['Id']);_0x723fd2[_0x51bfa0(0xb4)]({'id':_0xd69f9c['Id'],'values':{'Body':_0x178afa[_0x51bfa0(0xbb)](_0x51bfa0(0xb6))}});continue;}if(_0xd69f9c[_0x51bfa0(0xb3)]+_0x19d6c0>REST_ATTACHMENT_MAX_SIZE||_0x59cca9+0x1>=REST_ATTACHMENT_COUNT){const _0x15751c=await fetchAttachments(_0x2b72cb,BINARY_FIELDS,_0x1ebf1c);_0x723fd2[_0x51bfa0(0xb4)](..._0x15751c),_0x1ebf1c=[],_0x19d6c0=0x0,_0x59cca9=0x0;}_0x1ebf1c['push'](_0xd69f9c['Id']),_0x19d6c0+=_0xd69f9c[_0x51bfa0(0xb3)],_0x59cca9++;}if(_0x1ebf1c[_0x51bfa0(0xa5)]){const _0x5d9242=await fetchAttachments(_0x2b72cb,BINARY_FIELDS,_0x1ebf1c);_0x723fd2[_0x51bfa0(0xb4)](..._0x5d9242);}return _0x723fd2;}exports[a303_0x2aba9c(0xbd)]=retrieveAttachments;function fetchAttachmentsDetailsById(_0x2a0c4d,_0x4eb850){return fetchAttachmentsDetails(_0x2a0c4d,FIELD_ID,_0x4eb850);}exports['fetchAttachmentsDetailsById']=fetchAttachmentsDetailsById;function fetchAttachmentsDetailsByParentId(_0x5034e1,_0x4681cb){return fetchAttachmentsDetails(_0x5034e1,FIELD_PARENT_ID,_0x4681cb);}exports[a303_0x2aba9c(0xae)]=fetchAttachmentsDetailsByParentId;function a303_0x1503(_0x308663,_0x4eb783){const _0x39c064=a303_0x3ec2();return a303_0x1503=function(_0x74cfd7,_0xe35e27){_0x74cfd7=_0x74cfd7-0xa4;let _0x3ec2bf=_0x39c064[_0x74cfd7];return _0x3ec2bf;},a303_0x1503(_0x308663,_0x4eb783);}async function fetchAttachmentsDetails(_0x333e3e,_0x1035c0,_0x5c203a){const _0x410a13=a303_0x2aba9c,_0x15fe7d=[],_0x717e61=(0x0,index_1[_0x410a13(0xc0)])(_0x5c203a,CHUNK_QUERY_SIZE);for(const _0xb9d257 of _0x717e61){const _0x49a143=_0x410a13(0xcd)+_0x1035c0+_0x410a13(0xc3)+('\x27'+_0xb9d257[_0x410a13(0xbe)](_0x410a13(0xc9))+'\x27')+')',{data:_0x4351aa}=await _0x333e3e['get']('/services/data/'+constants_1[_0x410a13(0xa4)]+_0x410a13(0xb2),{'params':{'q':_0x49a143}});_0x15fe7d[_0x410a13(0xb4)](..._0x4351aa['records']);}return _0x15fe7d;}async function fetchAttachmentBody(_0x5bf6de,_0x5b0039){const _0x124ebf=a303_0x2aba9c,{data:_0x4b0da8}=await _0x5bf6de[_0x124ebf(0xa7)](_0x124ebf(0xce)+constants_1[_0x124ebf(0xa4)]+_0x124ebf(0xb1)+_0x5b0039+_0x124ebf(0xbf),{'responseType':_0x124ebf(0xa9)});return _0x4b0da8;}exports[a303_0x2aba9c(0xb9)]=fetchAttachmentBody;async function fetchAttachments(_0x20d0ee,_0x1c2176,_0x4a73ab){const _0x547663=a303_0x2aba9c,{data:_0x36e279}=await _0x20d0ee[_0x547663(0xcb)]('/services/apexrest'+salesforce_request_1[_0x547663(0xab)]+_0x547663(0xc2),{'objectName':_0x547663(0xba),'binaryFields':_0x1c2176,'recordIds':_0x4a73ab});return _0x36e279;}exports[a303_0x2aba9c(0xad)]=fetchAttachments;