function a142_0x4fbb(){const _0x2a8811=['MARKETING_CLOUD','join','../../internal/fs.internal','constructor','isVlocityComponent','sfdx','randomUUID','6701947BcncYx','cp\x20-r\x20','(((.+)+)+)+$','/sfdx-project.json','WRONG_RECORD_TYPE_ERROR_MESSAGE','763182DklYSV','179488GShtgy','exec','978405NMXVaP','message','path','66311ypfaCS','SFDXUtils','search','exists','readdir','__importDefault','__esModule','Shell','toString','isConvertToSfdx','uniqueId','fs/promises','cwd','dir','default','removeDir','apply','filter','RecordTypes','/force-app\x20','PROJECTS_PATH','createEmptyProject','match','NO_RESULTS_TO_FORMAT','8BhQmbE','3271974aRPYCs','crypto','SFDX','../../salesforce/utils/sfdx.utils','946738MtmTZs','createEmptyPackageXml','defineProperty','fullProjectName'];a142_0x4fbb=function(){return _0x2a8811;};return a142_0x4fbb();}const a142_0x213970=a142_0x2dd1;(function(_0x518e89,_0x647e8b){const _0x4119dc=a142_0x2dd1,_0xdb2a66=_0x518e89();while(!![]){try{const _0x1e813d=-parseInt(_0x4119dc(0x1c8))/0x1+parseInt(_0x4119dc(0x1e5))/0x2+parseInt(_0x4119dc(0x1c2))/0x3+-parseInt(_0x4119dc(0x1c3))/0x4+parseInt(_0x4119dc(0x1c5))/0x5+parseInt(_0x4119dc(0x1e1))/0x6+parseInt(_0x4119dc(0x1bd))/0x7*(-parseInt(_0x4119dc(0x1e0))/0x8);if(_0x1e813d===_0x647e8b)break;else _0xdb2a66['push'](_0xdb2a66['shift']());}catch(_0x3ed922){_0xdb2a66['push'](_0xdb2a66['shift']());}}}(a142_0x4fbb,0x61b29));const a142_0x37d23d=(function(){let _0x1adeb8=!![];return function(_0x5cd512,_0x3f40f8){const _0x1d4853=_0x1adeb8?function(){const _0x1517b1=a142_0x2dd1;if(_0x3f40f8){const _0x50499d=_0x3f40f8[_0x1517b1(0x1d8)](_0x5cd512,arguments);return _0x3f40f8=null,_0x50499d;}}:function(){};return _0x1adeb8=![],_0x1d4853;};}()),a142_0x1355a=a142_0x37d23d(this,function(){const _0x1c84ba=a142_0x2dd1;return a142_0x1355a[_0x1c84ba(0x1d0)]()[_0x1c84ba(0x1ca)](_0x1c84ba(0x1bf))[_0x1c84ba(0x1d0)]()[_0x1c84ba(0x1b9)](a142_0x1355a)[_0x1c84ba(0x1ca)](_0x1c84ba(0x1bf));});a142_0x1355a();function a142_0x2dd1(_0x35c8d7,_0x280c09){const _0x151f85=a142_0x4fbb();return a142_0x2dd1=function(_0x1355a,_0x37d23d){_0x1355a=_0x1355a-0x1b7;let _0x4fbbc0=_0x151f85[_0x1355a];return _0x4fbbc0;},a142_0x2dd1(_0x35c8d7,_0x280c09);}'use strict';var __importDefault=this&&this[a142_0x213970(0x1cd)]||function(_0x5461dc){const _0x2f59b9=a142_0x213970;return _0x5461dc&&_0x5461dc[_0x2f59b9(0x1ce)]?_0x5461dc:{'default':_0x5461dc};};Object[a142_0x213970(0x1e7)](exports,a142_0x213970(0x1ce),{'value':!![]}),exports[a142_0x213970(0x1c9)]=void 0x0;const path_1=__importDefault(require(a142_0x213970(0x1c7))),fs_internal_1=require(a142_0x213970(0x1b8)),shell_internal_1=require('../../internal/shell.internal'),sfdx_utils_1=require(a142_0x213970(0x1e4)),sfdx_1=require('../../../../constants/sfdx'),promises_1=require(a142_0x213970(0x1d3)),vlocity_1=require('../../parsers/utils/vlocity'),constants_1=require('../constants/constants'),messages_1=require('../errors/messages'),crypto_1=require(a142_0x213970(0x1e2));class SFDXUtils{constructor(){const _0x299ec4=a142_0x213970;this['PROJECTS_PATH']=path_1[_0x299ec4(0x1d6)][_0x299ec4(0x1b7)](process[_0x299ec4(0x1d4)](),'.temp',_0x299ec4(0x1bb)),this[_0x299ec4(0x1d2)]=(0x0,crypto_1[_0x299ec4(0x1bc)])();}get[a142_0x213970(0x1e8)](){const _0x3140bb=a142_0x213970;return''+this[_0x3140bb(0x1d2)];}get[a142_0x213970(0x1d5)](){const _0x27a46c=a142_0x213970;return path_1[_0x27a46c(0x1d6)][_0x27a46c(0x1b7)](this[_0x27a46c(0x1dc)],this[_0x27a46c(0x1e8)]);}async['createProjectFrom'](_0x595261){const _0x1bde0f=a142_0x213970;!await fs_internal_1['FS'][_0x1bde0f(0x1cb)](this[_0x1bde0f(0x1dc)])&&await fs_internal_1['FS']['makeDir'](this[_0x1bde0f(0x1dc)]);await sfdx_utils_1[_0x1bde0f(0x1e3)][_0x1bde0f(0x1dd)](this['PROJECTS_PATH'],this[_0x1bde0f(0x1e8)]),await sfdx_utils_1[_0x1bde0f(0x1e3)][_0x1bde0f(0x1e6)](_0x595261);try{await sfdx_utils_1[_0x1bde0f(0x1e3)]['mdapiToSource'](_0x595261,this[_0x1bde0f(0x1d5)]);}catch(_0x173587){if(!_0x173587[_0x1bde0f(0x1c6)][_0x1bde0f(0x1de)](sfdx_1[_0x1bde0f(0x1df)]))throw _0x173587;}}async['copyProjectTo'](_0x21f654,_0x5b2292=!![]){const _0xd153e7=a142_0x213970;_0x5b2292&&(!await fs_internal_1['FS']['exists'](_0x21f654+_0xd153e7(0x1c0))&&(_0x5b2292=![])),_0x5b2292?await shell_internal_1[_0xd153e7(0x1cf)]['exec']('cp\x20-r\x20'+this[_0xd153e7(0x1d5)]+_0xd153e7(0x1db)+_0x21f654):await shell_internal_1['Shell'][_0xd153e7(0x1c4)](_0xd153e7(0x1be)+this['dir']+'/*\x20'+_0x21f654);}async[a142_0x213970(0x1d7)](){const _0x385b4e=a142_0x213970;await fs_internal_1['FS'][_0x385b4e(0x1d7)](this[_0x385b4e(0x1d5)]);}async['copySFDXIgnoredComponents'](_0x2f7a8f,_0x54bdfd){const _0x5168a4=a142_0x213970,_0x38f87b=await(0x0,promises_1[_0x5168a4(0x1cc)])(_0x2f7a8f),_0x4565d4=_0x38f87b[_0x5168a4(0x1d9)](_0x183ef1=>(0x0,vlocity_1[_0x5168a4(0x1ba)])(_0x183ef1));for(const _0x1e71a8 of _0x4565d4){const _0x1cff9b=path_1['default'][_0x5168a4(0x1b7)](_0x2f7a8f,_0x1e71a8),_0x2033a0=path_1[_0x5168a4(0x1d6)]['join'](_0x54bdfd,_0x1e71a8);await(0x0,promises_1['cp'])(_0x1cff9b,_0x2033a0,{'recursive':!![]});}}[a142_0x213970(0x1d1)](_0x5420a5){const _0x5cc4c6=a142_0x213970;switch(_0x5420a5){case constants_1[_0x5cc4c6(0x1da)]['COMMERCE_CLOUD']:case constants_1[_0x5cc4c6(0x1da)][_0x5cc4c6(0x1e9)]:{return![];}case constants_1['RecordTypes']['DEFAULT']:{return!![];}default:{throw new Error(messages_1[_0x5cc4c6(0x1c1)]+_0x5420a5);}}}}exports[a142_0x213970(0x1c9)]=SFDXUtils;