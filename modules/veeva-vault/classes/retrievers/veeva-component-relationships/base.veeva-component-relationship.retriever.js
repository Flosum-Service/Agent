const a316_0x1557cd=a316_0x2bba;(function(_0x3a6392,_0x42bfdb){const _0x3c5d83=a316_0x2bba,_0x579a62=_0x3a6392();while(!![]){try{const _0xba69e=parseInt(_0x3c5d83(0xb4))/0x1+-parseInt(_0x3c5d83(0xa9))/0x2+-parseInt(_0x3c5d83(0x99))/0x3*(-parseInt(_0x3c5d83(0xa7))/0x4)+-parseInt(_0x3c5d83(0xaf))/0x5*(-parseInt(_0x3c5d83(0xb0))/0x6)+-parseInt(_0x3c5d83(0xb1))/0x7*(parseInt(_0x3c5d83(0xab))/0x8)+parseInt(_0x3c5d83(0xa3))/0x9+parseInt(_0x3c5d83(0x9c))/0xa*(parseInt(_0x3c5d83(0xaa))/0xb);if(_0xba69e===_0x42bfdb)break;else _0x579a62['push'](_0x579a62['shift']());}catch(_0x5918e1){_0x579a62['push'](_0x579a62['shift']());}}}(a316_0x3a87,0x96fe1));function a316_0x3a87(){const _0x5a7a13=['value','1569985zxWObQ','12mgqsIj','1517299vNPhTE','../../../dtos/veeva-component-relationship.dto','VeevaConstants','87321eNbvNw','toString','veevaService','VeevaComponentRelationshipDto','formQueryEndpoint','12228WwiSAf','reduce','search','14130IISlOY','deleteDuplicates','(((.+)+)+)+$','__esModule','set','constructor','getEndpointList','4534029OmOEoW','BaseVeevaComponentRelationshipRetriever','sourceComponentId','apply','556cgyaMf','values','2349628jgTKVL','6809yIGjgq','32nBPknR','executeManyVQL','formComponents'];a316_0x3a87=function(){return _0x5a7a13;};return a316_0x3a87();}const a316_0x2cbad0=(function(){let _0x521b2e=!![];return function(_0x3f1e7c,_0xb44575){const _0x25fd84=_0x521b2e?function(){const _0x51fd5a=a316_0x2bba;if(_0xb44575){const _0x291dc4=_0xb44575[_0x51fd5a(0xa6)](_0x3f1e7c,arguments);return _0xb44575=null,_0x291dc4;}}:function(){};return _0x521b2e=![],_0x25fd84;};}()),a316_0x527902=a316_0x2cbad0(this,function(){const _0x5eaa47=a316_0x2bba;return a316_0x527902[_0x5eaa47(0xb5)]()[_0x5eaa47(0x9b)]('(((.+)+)+)+$')[_0x5eaa47(0xb5)]()[_0x5eaa47(0xa1)](a316_0x527902)[_0x5eaa47(0x9b)](_0x5eaa47(0x9e));});a316_0x527902();'use strict';Object['defineProperty'](exports,a316_0x1557cd(0x9f),{'value':!![]}),exports[a316_0x1557cd(0xa4)]=void 0x0;const veeva_constants_1=require('../../../constants/veeva.constants'),veeva_component_relationship_dto_1=require(a316_0x1557cd(0xb2));class BaseVeevaComponentRelationshipRetriever{constructor({value:_0x4d51c7,veevaService:_0x332d7a}){const _0x4cd432=a316_0x1557cd;this[_0x4cd432(0xae)]=_0x4d51c7,this[_0x4cd432(0xb6)]=_0x332d7a;}[a316_0x1557cd(0x98)](_0x35f9ef){const _0x4cc49d=a316_0x1557cd,_0x230574='\x0a\x20\x20\x20\x20\x20\x20\x20\x20SELECT\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20id,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20name__v,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20source_component__sys,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20target_component__sys,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20target_component_name__sys,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20created_date__v\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20FROM\x20vault_component_relationship__sys\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20WHERE\x20'+_0x35f9ef;return veeva_constants_1[_0x4cc49d(0xb3)]['ENDPOINT_VQL']+_0x230574;}[a316_0x1557cd(0x9d)](_0x2c0b63){const _0x468d43=a316_0x1557cd,_0x4f44c9=_0x2c0b63[_0x468d43(0x9a)]((_0x5f0ca6,_0x372aae)=>_0x5f0ca6[_0x468d43(0xa0)](_0x372aae[_0x468d43(0xa5)]+'.'+_0x372aae['targetComponentId'],_0x372aae),new Map());return[..._0x4f44c9[_0x468d43(0xa8)]()];}[a316_0x1557cd(0xad)](_0x2b8d30){const _0x5a55f3=a316_0x1557cd;return _0x2b8d30['map'](_0x64e3b3=>new veeva_component_relationship_dto_1[(_0x5a55f3(0x97))](_0x64e3b3));}async['retrieve'](){const _0x2d68f1=a316_0x1557cd,_0x53f620=this[_0x2d68f1(0xa2)](),_0x1b0e53=await this[_0x2d68f1(0xb6)][_0x2d68f1(0xac)](_0x53f620),_0x50e743=this[_0x2d68f1(0xad)](_0x1b0e53);return this[_0x2d68f1(0x9d)](_0x50e743);}}function a316_0x2bba(_0x204e2b,_0x1d5cc9){const _0x28c1b0=a316_0x3a87();return a316_0x2bba=function(_0x527902,_0x2cbad0){_0x527902=_0x527902-0x97;let _0x3a8770=_0x28c1b0[_0x527902];return _0x3a8770;},a316_0x2bba(_0x204e2b,_0x1d5cc9);}exports[a316_0x1557cd(0xa4)]=BaseVeevaComponentRelationshipRetriever;