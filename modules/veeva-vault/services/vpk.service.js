const a408_0x14569b=a408_0x2bef;function a408_0x2bef(_0x5dc3a9,_0x2c3b2f){const _0x342ced=a408_0x1c13();return a408_0x2bef=function(_0x35541b,_0x1478e1){_0x35541b=_0x35541b-0xa9;let _0x1c1399=_0x342ced[_0x35541b];return _0x1c1399;},a408_0x2bef(_0x5dc3a9,_0x2c3b2f);}(function(_0x2b52e1,_0x1fb5a0){const _0x44aace=a408_0x2bef,_0x4d59c8=_0x2b52e1();while(!![]){try{const _0x408d9a=parseInt(_0x44aace(0xd5))/0x1+parseInt(_0x44aace(0xcc))/0x2*(-parseInt(_0x44aace(0xb9))/0x3)+parseInt(_0x44aace(0xae))/0x4+parseInt(_0x44aace(0xbf))/0x5*(parseInt(_0x44aace(0xc0))/0x6)+parseInt(_0x44aace(0xc5))/0x7+-parseInt(_0x44aace(0xb3))/0x8+parseInt(_0x44aace(0xbd))/0x9*(-parseInt(_0x44aace(0xd6))/0xa);if(_0x408d9a===_0x1fb5a0)break;else _0x4d59c8['push'](_0x4d59c8['shift']());}catch(_0x563114){_0x4d59c8['push'](_0x4d59c8['shift']());}}}(a408_0x1c13,0x1b5d1));const a408_0x1478e1=(function(){let _0x4a05b8=!![];return function(_0x320472,_0x42905c){const _0x12cbe2=_0x4a05b8?function(){const _0x2e2aef=a408_0x2bef;if(_0x42905c){const _0x20edbd=_0x42905c[_0x2e2aef(0xb6)](_0x320472,arguments);return _0x42905c=null,_0x20edbd;}}:function(){};return _0x4a05b8=![],_0x12cbe2;};}()),a408_0x35541b=a408_0x1478e1(this,function(){const _0xb41fc6=a408_0x2bef;return a408_0x35541b[_0xb41fc6(0xb2)]()['search']('(((.+)+)+)+$')[_0xb41fc6(0xb2)]()[_0xb41fc6(0xc9)](a408_0x35541b)[_0xb41fc6(0xcf)](_0xb41fc6(0xcb));});a408_0x35541b();'use strict';var __importDefault=this&&this[a408_0x14569b(0xd7)]||function(_0x39e97d){const _0x103188=a408_0x14569b;return _0x39e97d&&_0x39e97d[_0x103188(0xb1)]?_0x39e97d:{'default':_0x39e97d};};function a408_0x1c13(){const _0x34d4c4=['VeevaConstants','createReadStream','../utils/veeva-auth.utils','responseStatus','170815FyRKtU','1162900cezlSX','__importDefault','headers','validate','VpkService','VeevaResponseStatus','../enums/status.enums','246404UOtcAb','default','VeevaError','__esModule','toString','1465888LAdgSI','append','data','apply','defineProperty','includes','3mfkbkF','post','arraybuffer','updateVeevaConnection','18AqXsnN','multipart/form-data','5dwnUxL','827538wMezFW','application/json','../constants/veeva.constants','content-type','file','1320137XTdLmi','errors','generate','../classes/errors/veeva-error','constructor','SUCCESS','(((.+)+)+)+$','62066bRIIDv','ENDPOINT_VALIDATE_VPK','parse','search','_connection'];a408_0x1c13=function(){return _0x34d4c4;};return a408_0x1c13();}Object[a408_0x14569b(0xb7)](exports,'__esModule',{'value':!![]}),exports[a408_0x14569b(0xab)]=void 0x0;const form_data_1=__importDefault(require('form-data')),fs_1=require('fs'),veeva_constants_1=require(a408_0x14569b(0xc2)),veeva_auth_utils_1=require(a408_0x14569b(0xd3)),veeva_error_1=require(a408_0x14569b(0xc8)),status_enums_1=require(a408_0x14569b(0xad));class VpkService{constructor({connection:_0x5eb137}){const _0x5bbb2b=a408_0x14569b;this[_0x5bbb2b(0xd0)]=_0x5eb137;}async[a408_0x14569b(0xc7)](_0x2eb6a2,_0x206afa=0x1){const _0x505dec=a408_0x14569b;var _0x4f3644;const _0x642a9e=new form_data_1[(_0x505dec(0xaf))]();_0x642a9e[_0x505dec(0xb4)](_0x505dec(0xc4),(0x0,fs_1[_0x505dec(0xd2)])(_0x2eb6a2));const _0x5bbf89=await this[_0x505dec(0xd0)][_0x505dec(0xba)](veeva_constants_1[_0x505dec(0xd1)]['ENDPOINT_EXPORT_IMPORT_PACKAGE'],_0x642a9e,{'responseType':_0x505dec(0xbb),'headers':{'Content-Type':_0x505dec(0xbe)}}),_0x1fbdd6=(_0x4f3644=_0x5bbf89[_0x505dec(0xa9)][_0x505dec(0xc3)])===null||_0x4f3644===void 0x0?void 0x0:_0x4f3644[_0x505dec(0xb8)](_0x505dec(0xc1));if(!_0x1fbdd6)return _0x5bbf89[_0x505dec(0xb5)];else{const _0x10db13=JSON[_0x505dec(0xce)](_0x5bbf89[_0x505dec(0xb5)]);if(_0x206afa>0x0)return await(0x0,veeva_auth_utils_1[_0x505dec(0xbc)])(this[_0x505dec(0xd0)]),await this[_0x505dec(0xc7)](_0x2eb6a2,_0x206afa-0x1);throw new veeva_error_1[(_0x505dec(0xb0))](_0x10db13[_0x505dec(0xc6)]);}}async['validate'](_0x36ef3e,_0x4f8ea4=0x1){const _0x20f7f5=a408_0x14569b,_0x4999d7=new form_data_1['default']();_0x4999d7[_0x20f7f5(0xb4)](_0x20f7f5(0xc4),(0x0,fs_1['createReadStream'])(_0x36ef3e));const _0x1c9180=await this[_0x20f7f5(0xd0)][_0x20f7f5(0xba)](veeva_constants_1['VeevaConstants'][_0x20f7f5(0xcd)],_0x4999d7,{'headers':{'Content-Type':_0x20f7f5(0xbe)}}),_0x236737=_0x1c9180['data'];if(_0x236737[_0x20f7f5(0xd4)]===status_enums_1[_0x20f7f5(0xac)][_0x20f7f5(0xca)])return _0x236737;else{if(_0x4f8ea4>0x0)return await(0x0,veeva_auth_utils_1[_0x20f7f5(0xbc)])(this[_0x20f7f5(0xd0)]),await this[_0x20f7f5(0xaa)](_0x36ef3e,_0x4f8ea4-0x1);throw new veeva_error_1[(_0x20f7f5(0xb0))](_0x236737['errors']);}}}exports[a408_0x14569b(0xab)]=VpkService;