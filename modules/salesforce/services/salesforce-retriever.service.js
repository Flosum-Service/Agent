function a135_0x5a65(){const _0x346cb6=['components','Logger','358671BclPBw','retrieveComponents','SalesforceRetrieverService','defineProperty','attachmentId','log','3849228eVXHXb','__importDefault','replace','name','toString','splice','%parent_ids%','logger','7tMEOWK','ids','info','join','fileType','query','then','retrieveLastComponents','FlosumComponentHistoryDto','retrieved\x20%d/%d\x20components\x20from\x20salesforce\x20rest','manually\x20retrieved\x20%d/%d\x20components','GET_ATTACHMENT_BY_PARENT_IDS_QUERY','typedi','../../../core','./salesforce-query.service','824961kqPnUQ','__esModule','base64','salesforceService','884958hcOrey','2442635sXNQru','8204010BfgcwH','COMPONENTS_PER_QUERY','4vGahmQ','COMPONENTS_PER_REQUEST','find','push','length','retrieveComponentIdsFromHistoryIds','constructor','map','8OHFoek','663778cNQsbe','fileName'];a135_0x5a65=function(){return _0x346cb6;};return a135_0x5a65();}const a135_0x2d33d6=a135_0x8f73;(function(_0x50dbd2,_0xebabb2){const _0x107ae6=a135_0x8f73,_0x69c874=_0x50dbd2();while(!![]){try{const _0x3a3f8b=parseInt(_0x107ae6(0x108))/0x1+parseInt(_0x107ae6(0x104))/0x2+parseInt(_0x107ae6(0x125))/0x3+parseInt(_0x107ae6(0xfb))/0x4*(parseInt(_0x107ae6(0x12a))/0x5)+-parseInt(_0x107ae6(0x129))/0x6*(-parseInt(_0x107ae6(0x116))/0x7)+parseInt(_0x107ae6(0x103))/0x8*(-parseInt(_0x107ae6(0x10e))/0x9)+-parseInt(_0x107ae6(0x12b))/0xa;if(_0x3a3f8b===_0xebabb2)break;else _0x69c874['push'](_0x69c874['shift']());}catch(_0x200785){_0x69c874['push'](_0x69c874['shift']());}}}(a135_0x5a65,0x564c2));const a135_0x464c3d=(function(){let _0x50653=!![];return function(_0x15cc77,_0x93ce5){const _0x415695=_0x50653?function(){if(_0x93ce5){const _0x4f4fe0=_0x93ce5['apply'](_0x15cc77,arguments);return _0x93ce5=null,_0x4f4fe0;}}:function(){};return _0x50653=![],_0x415695;};}()),a135_0x4a99f2=a135_0x464c3d(this,function(){const _0x25280b=a135_0x8f73;return a135_0x4a99f2[_0x25280b(0x112)]()['search']('(((.+)+)+)+$')['toString']()[_0x25280b(0x101)](a135_0x4a99f2)['search']('(((.+)+)+)+$');});a135_0x4a99f2();'use strict';var __importDefault=this&&this[a135_0x2d33d6(0x10f)]||function(_0x2a3ee2){const _0x49a501=a135_0x2d33d6;return _0x2a3ee2&&_0x2a3ee2[_0x49a501(0x126)]?_0x2a3ee2:{'default':_0x2a3ee2};};Object[a135_0x2d33d6(0x10b)](exports,a135_0x2d33d6(0x126),{'value':!![]}),exports[a135_0x2d33d6(0x10a)]=void 0x0;const core_1=require(a135_0x2d33d6(0x123)),typedi_1=__importDefault(require(a135_0x2d33d6(0x122))),salesforce_query_service_1=require(a135_0x2d33d6(0x124)),queries_1=require('../queries'),flosum_component_history_dto_1=require('../dto/flosum-component-history.dto');class SalesforceRetrieverService{constructor(_0x3d4091){const _0x12c93f=a135_0x2d33d6;this[_0x12c93f(0x128)]=_0x3d4091,this['logger']=new core_1[(_0x12c93f(0x107))](SalesforceRetrieverService[_0x12c93f(0x111)]),this[_0x12c93f(0xfc)]=0xbb8,this[_0x12c93f(0xfa)]=0x1f4;}async[a135_0x2d33d6(0x100)](_0x43c54f){const _0x1b360d=a135_0x2d33d6;this[_0x1b360d(0x115)][_0x1b360d(0x118)]('manually\x20retrieving\x20component\x20ids\x20from\x20history\x20ids\x20(%d)',_0x43c54f['length']);const _0x1e287c=typedi_1['default']['get'](salesforce_query_service_1['SalesforceQueryService']),_0x3f3033=_0x43c54f[_0x1b360d(0x102)](_0x5dee6d=>'\x27'+_0x5dee6d+'\x27'),_0x18093d=[];while(_0x3f3033[_0x1b360d(0xff)]){const _0x3a4dc9=_0x3f3033[_0x1b360d(0x113)](0x0,this[_0x1b360d(0xfa)]),_0x1cb5cf=_0x1e287c[_0x1b360d(0x11b)](queries_1[_0x1b360d(0x121)][_0x1b360d(0x110)](_0x1b360d(0x114),_0x3a4dc9[_0x1b360d(0x119)]())),_0x12ce6c=_0x1e287c['query'](queries_1['GET_COMPONENT_HISTORIES_BY_IDS'][_0x1b360d(0x110)]('%ids%',_0x3a4dc9[_0x1b360d(0x119)]()))[_0x1b360d(0x11c)](_0x25191f=>_0x25191f['map'](_0x2a947b=>flosum_component_history_dto_1[_0x1b360d(0x11e)]['fromSalesforce'](_0x2a947b))),[_0x4a886d,_0x319a92]=await Promise['all']([_0x1cb5cf,_0x12ce6c]);for(const _0x280e37 of _0x319a92){const _0x12d32d=_0x4a886d[_0x1b360d(0xfd)](_0x214d75=>_0x214d75['ParentId']===_0x280e37['id']);_0x12d32d&&_0x18093d[_0x1b360d(0xfe)]({'fileType':_0x12d32d['Name'],'fileName':_0x280e37['filename'],'attachmentId':_0x12d32d['Id']});}}return _0x18093d;}async['retrieveLastComponents'](_0x16bc98){const _0x1e5e78=a135_0x2d33d6,_0x2df487=await this[_0x1e5e78(0x100)](_0x16bc98);this[_0x1e5e78(0x115)][_0x1e5e78(0x118)]('manually\x20retrieving\x20components\x20from\x20salesforce');const _0x30181d=[];for(const _0x25c36a of _0x2df487){const _0x2299b8=await this[_0x1e5e78(0x128)]['retrieveAttachment'](_0x25c36a[_0x1e5e78(0x10c)],!![]);_0x30181d[_0x1e5e78(0xfe)]({'body':_0x2299b8[_0x1e5e78(0x112)](_0x1e5e78(0x127)),'fileName':_0x25c36a[_0x1e5e78(0x105)],'fileType':_0x25c36a[_0x1e5e78(0x11a)]}),this['logger'][_0x1e5e78(0x118)](_0x1e5e78(0x120),_0x30181d[_0x1e5e78(0xff)],_0x16bc98[_0x1e5e78(0xff)]);}return _0x30181d;}async['run'](_0x296e0f){const _0x33fee0=a135_0x2d33d6,_0x5e0bc3=[..._0x296e0f],_0x13f611=[],_0x89598f=[];while(_0x5e0bc3[_0x33fee0(0xff)]){const _0x13e3af=_0x5e0bc3[_0x33fee0(0x113)](0x0,this['COMPONENTS_PER_REQUEST']),_0x153c11=await this[_0x33fee0(0x128)][_0x33fee0(0x109)](_0x13e3af);_0x13e3af[_0x33fee0(0xff)]!==_0x153c11[_0x33fee0(0x117)][_0x33fee0(0xff)]?(_0x5e0bc3[_0x33fee0(0xfe)](..._0x153c11[_0x33fee0(0x117)]),_0x13f611['push'](..._0x153c11[_0x33fee0(0x106)])):_0x89598f[_0x33fee0(0xfe)](..._0x13e3af),this[_0x33fee0(0x115)][_0x33fee0(0x10d)](_0x33fee0(0x11f),_0x296e0f[_0x33fee0(0xff)]-_0x5e0bc3['length'],_0x296e0f[_0x33fee0(0xff)]);}if(_0x89598f[_0x33fee0(0xff)]){const _0x24a9e3=await this[_0x33fee0(0x11d)](_0x89598f);_0x13f611['push'](..._0x24a9e3);}return _0x13f611;}}function a135_0x8f73(_0x18d011,_0x40af0e){const _0x2f14d4=a135_0x5a65();return a135_0x8f73=function(_0x4a99f2,_0x464c3d){_0x4a99f2=_0x4a99f2-0xfa;let _0x5a6571=_0x2f14d4[_0x4a99f2];return _0x5a6571;},a135_0x8f73(_0x18d011,_0x40af0e);}exports['SalesforceRetrieverService']=SalesforceRetrieverService;