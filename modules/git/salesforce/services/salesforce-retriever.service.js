const a185_0x548e2f=a185_0x3864;(function(_0x3ccff5,_0x4a40ff){const _0x499cd3=a185_0x3864,_0x2f5e9f=_0x3ccff5();while(!![]){try{const _0x54c2ca=-parseInt(_0x499cd3(0x122))/0x1+-parseInt(_0x499cd3(0x118))/0x2*(parseInt(_0x499cd3(0x148))/0x3)+parseInt(_0x499cd3(0x144))/0x4+-parseInt(_0x499cd3(0x113))/0x5*(parseInt(_0x499cd3(0x141))/0x6)+parseInt(_0x499cd3(0x132))/0x7+-parseInt(_0x499cd3(0x126))/0x8*(-parseInt(_0x499cd3(0x12e))/0x9)+parseInt(_0x499cd3(0x11a))/0xa*(parseInt(_0x499cd3(0x139))/0xb);if(_0x54c2ca===_0x4a40ff)break;else _0x2f5e9f['push'](_0x2f5e9f['shift']());}catch(_0x3e5009){_0x2f5e9f['push'](_0x2f5e9f['shift']());}}}(a185_0x3d13,0xd0c00));const a185_0x4968b4=(function(){let _0x5d1ba3=!![];return function(_0xe32de3,_0x5cbcd8){const _0x2dfd6e=_0x5d1ba3?function(){if(_0x5cbcd8){const _0x374485=_0x5cbcd8['apply'](_0xe32de3,arguments);return _0x5cbcd8=null,_0x374485;}}:function(){};return _0x5d1ba3=![],_0x2dfd6e;};}()),a185_0x3193e8=a185_0x4968b4(this,function(){const _0x15065a=a185_0x3864;return a185_0x3193e8['toString']()[_0x15065a(0x140)](_0x15065a(0x115))[_0x15065a(0x12a)]()[_0x15065a(0x120)](a185_0x3193e8)[_0x15065a(0x140)](_0x15065a(0x115));});a185_0x3193e8();function a185_0x3864(_0x30f9b0,_0x58ba9f){const _0x5c0511=a185_0x3d13();return a185_0x3864=function(_0x3193e8,_0x4968b4){_0x3193e8=_0x3193e8-0x10f;let _0x3d136d=_0x5c0511[_0x3193e8];return _0x3d136d;},a185_0x3864(_0x30f9b0,_0x58ba9f);}'use strict';var __importDefault=this&&this[a185_0x548e2f(0x123)]||function(_0x59256a){return _0x59256a&&_0x59256a['__esModule']?_0x59256a:{'default':_0x59256a};};Object[a185_0x548e2f(0x143)](exports,a185_0x548e2f(0x131),{'value':!![]}),exports[a185_0x548e2f(0x147)]=void 0x0;const core_1=require(a185_0x548e2f(0x124)),typedi_1=__importDefault(require(a185_0x548e2f(0x127))),salesforce_query_service_1=require(a185_0x548e2f(0x121)),queries_1=require(a185_0x548e2f(0x13b)),flosum_component_history_dto_1=require(a185_0x548e2f(0x11b));function a185_0x3d13(){const _0x11b245=['defineProperty','2100864tUmBBB','name','logger','SalesforceRetrieverService','249GEoeku','GET_COMPONENT_HISTORIES_BY_IDS','manually\x20retrieved\x20%d/%d\x20components','info','default','%parent_ids%','log','15MkHPZr','replace','(((.+)+)+)+$','components','%ids%','27420lkODKm','COMPONENTS_PER_REQUEST','520qvsjOc','../dto/flosum-component-history.dto','salesforceService','then','retrieveComponentIdsFromHistoryIds','ParentId','constructor','./salesforce-query.service','735355muMluH','__importDefault','../../../../core','retrieveLastComponents','403912PUzBDi','typedi','manually\x20retrieving\x20components\x20from\x20salesforce','splice','toString','find','fileName','query','261NuUjRO','manually\x20retrieving\x20component\x20ids\x20from\x20history\x20ids\x20(%d)','GET_ATTACHMENT_BY_PARENT_IDS_QUERY','__esModule','249186UgoiaY','COMPONENTS_PER_QUERY','attachmentId','push','length','all','join','321266dNzdwC','ids','../queries','Name','base64','map','fileType','search','1630764mOtqXz','run'];a185_0x3d13=function(){return _0x11b245;};return a185_0x3d13();}class SalesforceRetrieverService{constructor(_0x84a06e){const _0x4e643e=a185_0x548e2f;this['salesforceService']=_0x84a06e,this[_0x4e643e(0x146)]=new core_1['Logger'](SalesforceRetrieverService[_0x4e643e(0x145)]),this[_0x4e643e(0x119)]=0xbb8,this[_0x4e643e(0x133)]=0x1f4;}async[a185_0x548e2f(0x11e)](_0xa2bc60){const _0x11c3b8=a185_0x548e2f;this[_0x11c3b8(0x146)]['info'](_0x11c3b8(0x12f),_0xa2bc60[_0x11c3b8(0x136)]);const _0x405405=typedi_1[_0x11c3b8(0x110)]['get'](salesforce_query_service_1['SalesforceQueryService']),_0x5a551d=_0xa2bc60['map'](_0x2e9bcc=>'\x27'+_0x2e9bcc+'\x27'),_0x468f27=[];while(_0x5a551d['length']){const _0x3c53e8=_0x5a551d[_0x11c3b8(0x129)](0x0,this[_0x11c3b8(0x133)]),_0x54f7c6=_0x405405['query'](queries_1[_0x11c3b8(0x130)][_0x11c3b8(0x114)](_0x11c3b8(0x111),_0x3c53e8[_0x11c3b8(0x138)]())),_0xca2fa5=_0x405405[_0x11c3b8(0x12d)](queries_1[_0x11c3b8(0x149)][_0x11c3b8(0x114)](_0x11c3b8(0x117),_0x3c53e8[_0x11c3b8(0x138)]()))[_0x11c3b8(0x11d)](_0x56b055=>_0x56b055[_0x11c3b8(0x13e)](_0x2263ac=>flosum_component_history_dto_1['FlosumComponentHistoryDto']['fromSalesforce'](_0x2263ac))),[_0x4a904c,_0x1f67e6]=await Promise[_0x11c3b8(0x137)]([_0x54f7c6,_0xca2fa5]);for(const _0x59638c of _0x1f67e6){const _0x5b2153=_0x4a904c[_0x11c3b8(0x12b)](_0x8224b9=>_0x8224b9[_0x11c3b8(0x11f)]===_0x59638c['id']);_0x5b2153&&_0x468f27['push']({'fileType':_0x5b2153[_0x11c3b8(0x13c)],'fileName':_0x59638c['filename'],'attachmentId':_0x5b2153['Id']});}}return _0x468f27;}async[a185_0x548e2f(0x125)](_0x82ecc9){const _0x1822df=a185_0x548e2f,_0x47481a=await this[_0x1822df(0x11e)](_0x82ecc9);this['logger'][_0x1822df(0x10f)](_0x1822df(0x128));const _0x4cc6fa=[];for(const _0xda27c9 of _0x47481a){const _0x217403=await this['salesforceService']['retrieveAttachment'](_0xda27c9[_0x1822df(0x134)],!![]);_0x4cc6fa[_0x1822df(0x135)]({'body':_0x217403[_0x1822df(0x12a)](_0x1822df(0x13d)),'fileName':_0xda27c9[_0x1822df(0x12c)],'fileType':_0xda27c9[_0x1822df(0x13f)]}),this[_0x1822df(0x146)]['info'](_0x1822df(0x14a),_0x4cc6fa[_0x1822df(0x136)],_0x82ecc9[_0x1822df(0x136)]);}return _0x4cc6fa;}async[a185_0x548e2f(0x142)](_0x337a03){const _0x187092=a185_0x548e2f,_0x549326=[..._0x337a03],_0x268886=[],_0x4a74c1=[];while(_0x549326[_0x187092(0x136)]){const _0x56c427=_0x549326[_0x187092(0x129)](0x0,this[_0x187092(0x119)]),_0x5ef8e8=await this[_0x187092(0x11c)]['retrieveComponents'](_0x56c427);_0x56c427[_0x187092(0x136)]!==_0x5ef8e8[_0x187092(0x13a)][_0x187092(0x136)]?(_0x549326[_0x187092(0x135)](..._0x5ef8e8[_0x187092(0x13a)]),_0x268886[_0x187092(0x135)](..._0x5ef8e8[_0x187092(0x116)])):_0x4a74c1[_0x187092(0x135)](..._0x56c427),this[_0x187092(0x146)][_0x187092(0x112)]('retrieved\x20%d/%d\x20components\x20from\x20salesforce\x20rest',_0x337a03[_0x187092(0x136)]-_0x549326[_0x187092(0x136)],_0x337a03[_0x187092(0x136)]);}if(_0x4a74c1[_0x187092(0x136)]){const _0x324bb1=await this['retrieveLastComponents'](_0x4a74c1);_0x268886[_0x187092(0x135)](..._0x324bb1);}return _0x268886;}}exports[a185_0x548e2f(0x147)]=SalesforceRetrieverService;