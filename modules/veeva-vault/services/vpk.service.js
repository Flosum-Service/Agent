const a364_0x2f37e7=a364_0x3294;(function(_0xc4a56e,_0x3694f6){const _0x557470=a364_0x3294,_0x1a67b0=_0xc4a56e();while(!![]){try{const _0x46452c=-parseInt(_0x557470(0x9e))/0x1+parseInt(_0x557470(0x82))/0x2+-parseInt(_0x557470(0x9a))/0x3+-parseInt(_0x557470(0x87))/0x4+parseInt(_0x557470(0x94))/0x5+-parseInt(_0x557470(0xa0))/0x6+parseInt(_0x557470(0x86))/0x7;if(_0x46452c===_0x3694f6)break;else _0x1a67b0['push'](_0x1a67b0['shift']());}catch(_0x27ca92){_0x1a67b0['push'](_0x1a67b0['shift']());}}}(a364_0xc5a6,0xc364c));const a364_0x111f70=(function(){let _0x2c8a48=!![];return function(_0x1c6570,_0x210a40){const _0x2f037b=_0x2c8a48?function(){const _0x1223e2=a364_0x3294;if(_0x210a40){const _0x42aeef=_0x210a40[_0x1223e2(0x92)](_0x1c6570,arguments);return _0x210a40=null,_0x42aeef;}}:function(){};return _0x2c8a48=![],_0x2f037b;};}()),a364_0x129bab=a364_0x111f70(this,function(){const _0x4a3feb=a364_0x3294;return a364_0x129bab[_0x4a3feb(0x7d)]()[_0x4a3feb(0x9b)]('(((.+)+)+)+$')[_0x4a3feb(0x7d)]()[_0x4a3feb(0x90)](a364_0x129bab)[_0x4a3feb(0x9b)](_0x4a3feb(0x8d));});a364_0x129bab();'use strict';var __importDefault=this&&this[a364_0x2f37e7(0x97)]||function(_0x4fa362){const _0xa53c3f=a364_0x2f37e7;return _0x4fa362&&_0x4fa362[_0xa53c3f(0x9d)]?_0x4fa362:{'default':_0x4fa362};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a364_0x2f37e7(0x85)]=void 0x0;const form_data_1=__importDefault(require(a364_0x2f37e7(0x7f))),fs_1=require('fs'),veeva_constants_1=require(a364_0x2f37e7(0x81)),veeva_auth_utils_1=require(a364_0x2f37e7(0x8e)),veeva_error_1=require(a364_0x2f37e7(0x89)),status_enums_1=require(a364_0x2f37e7(0x95));function a364_0xc5a6(){const _0x50990a=['content-type','__importDefault','SUCCESS','VeevaError','3417330tDerbN','search','data','__esModule','862032IJQkIB','append','462510PGwUSJ','headers','post','application/json','toString','updateVeevaConnection','form-data','default','../constants/veeva.constants','870978yuJhcc','generate','VeevaConstants','VpkService','22826405EufkQQ','5960848MPiWHf','errors','../classes/errors/veeva-error','responseStatus','multipart/form-data','createReadStream','(((.+)+)+)+$','../utils/veeva-auth.utils','_connection','constructor','includes','apply','validate','3361835DKMSKa','../enums/status.enums'];a364_0xc5a6=function(){return _0x50990a;};return a364_0xc5a6();}class VpkService{constructor({connection:_0x1d317a}){this['_connection']=_0x1d317a;}async['generate'](_0x1ea67a,_0x30321b=0x1){const _0x3f53ee=a364_0x2f37e7;var _0x81c959;const _0x388285=new form_data_1[(_0x3f53ee(0x80))]();_0x388285[_0x3f53ee(0x9f)]('file',(0x0,fs_1[_0x3f53ee(0x8c)])(_0x1ea67a));const _0x39f685=await this[_0x3f53ee(0x8f)][_0x3f53ee(0x7b)](veeva_constants_1[_0x3f53ee(0x84)]['ENDPOINT_EXPORT_IMPORT_PACKAGE'],_0x388285,{'responseType':'arraybuffer','headers':{'Content-Type':_0x3f53ee(0x8b)}}),_0x5d62cb=(_0x81c959=_0x39f685[_0x3f53ee(0xa1)][_0x3f53ee(0x96)])===null||_0x81c959===void 0x0?void 0x0:_0x81c959[_0x3f53ee(0x91)](_0x3f53ee(0x7c));if(!_0x5d62cb)return _0x39f685[_0x3f53ee(0x9c)];else{const _0x122328=JSON['parse'](_0x39f685['data']);if(_0x30321b>0x0)return await(0x0,veeva_auth_utils_1[_0x3f53ee(0x7e)])(this[_0x3f53ee(0x8f)]),await this[_0x3f53ee(0x83)](_0x1ea67a,_0x30321b-0x1);throw new veeva_error_1[(_0x3f53ee(0x99))](_0x122328[_0x3f53ee(0x88)]);}}async[a364_0x2f37e7(0x93)](_0x133a89,_0x5886e7=0x1){const _0x102143=a364_0x2f37e7,_0x147f65=new form_data_1['default']();_0x147f65['append']('file',(0x0,fs_1[_0x102143(0x8c)])(_0x133a89));const _0x1a73fe=await this[_0x102143(0x8f)][_0x102143(0x7b)](veeva_constants_1[_0x102143(0x84)]['ENDPOINT_VALIDATE_VPK'],_0x147f65,{'headers':{'Content-Type':'multipart/form-data'}}),_0xd48172=_0x1a73fe[_0x102143(0x9c)];if(_0xd48172[_0x102143(0x8a)]===status_enums_1['VeevaResponseStatus'][_0x102143(0x98)])return _0xd48172;else{if(_0x5886e7>0x0)return await(0x0,veeva_auth_utils_1[_0x102143(0x7e)])(this[_0x102143(0x8f)]),await this[_0x102143(0x93)](_0x133a89,_0x5886e7-0x1);throw new veeva_error_1[(_0x102143(0x99))](_0xd48172['errors']);}}}function a364_0x3294(_0x21af80,_0x24ace7){const _0x599166=a364_0xc5a6();return a364_0x3294=function(_0x129bab,_0x111f70){_0x129bab=_0x129bab-0x7b;let _0xc5a6e7=_0x599166[_0x129bab];return _0xc5a6e7;},a364_0x3294(_0x21af80,_0x24ace7);}exports[a364_0x2f37e7(0x85)]=VpkService;