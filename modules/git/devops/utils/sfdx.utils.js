const a142_0xdc2550=a142_0x5e00;(function(_0x3c5fa8,_0x4821df){const _0x2155df=a142_0x5e00,_0x4f1f75=_0x3c5fa8();while(!![]){try{const _0x37c015=-parseInt(_0x2155df(0x1f4))/0x1+-parseInt(_0x2155df(0x1e4))/0x2+parseInt(_0x2155df(0x209))/0x3*(parseInt(_0x2155df(0x1e7))/0x4)+parseInt(_0x2155df(0x1dd))/0x5+-parseInt(_0x2155df(0x1e6))/0x6*(parseInt(_0x2155df(0x1d5))/0x7)+parseInt(_0x2155df(0x1f2))/0x8+parseInt(_0x2155df(0x1e9))/0x9;if(_0x37c015===_0x4821df)break;else _0x4f1f75['push'](_0x4f1f75['shift']());}catch(_0x23e72d){_0x4f1f75['push'](_0x4f1f75['shift']());}}}(a142_0x1707,0xbf93f));const a142_0x3f7b6f=(function(){let _0x9c215a=!![];return function(_0x214ab8,_0x23ca4f){const _0x215763=_0x9c215a?function(){if(_0x23ca4f){const _0x149d40=_0x23ca4f['apply'](_0x214ab8,arguments);return _0x23ca4f=null,_0x149d40;}}:function(){};return _0x9c215a=![],_0x215763;};}()),a142_0x1f6287=a142_0x3f7b6f(this,function(){const _0xd75629=a142_0x5e00;return a142_0x1f6287[_0xd75629(0x1d9)]()['search']('(((.+)+)+)+$')['toString']()[_0xd75629(0x1f9)](a142_0x1f6287)[_0xd75629(0x1de)](_0xd75629(0x200));});a142_0x1f6287();'use strict';function a142_0x5e00(_0x2e58c5,_0x111b3e){const _0x5d0a33=a142_0x1707();return a142_0x5e00=function(_0x1f6287,_0x3f7b6f){_0x1f6287=_0x1f6287-0x1d5;let _0x1707b2=_0x5d0a33[_0x1f6287];return _0x1707b2;},a142_0x5e00(_0x2e58c5,_0x111b3e);}var __importDefault=this&&this[a142_0xdc2550(0x207)]||function(_0x3b2f8e){return _0x3b2f8e&&_0x3b2f8e['__esModule']?_0x3b2f8e:{'default':_0x3b2f8e};};function a142_0x1707(){const _0x13c20b=['exec','sfdx','dir','(((.+)+)+)+$','isVlocityComponent','COMMERCE_CLOUD','MARKETING_CLOUD','fs/promises','copySFDXIgnoredComponents','join','__importDefault','crypto','3BtRbKZ','mdapiToSource','28JGsDqA','isConvertToSfdx','createProjectFrom','/force-app\x20','toString','SFDXUtils','randomUUID','../errors/messages','1282430NmssXk','search','default','../../../../constants/sfdx','readdir','match','.temp','2557074NLTwPv','RecordTypes','1603650lhXbDO','803360QcSUCu','../constants/constants','16710372gNqwwW','fullProjectName','/sfdx-project.json','exists','/*\x20','NO_RESULTS_TO_FORMAT','uniqueId','cp\x20-r\x20','SFDX','7527944AOiDTs','PROJECTS_PATH','122687ixjZmb','copyProjectTo','Shell','../../parsers/utils/vlocity','createEmptyProject','constructor','__esModule','../../salesforce/utils/sfdx.utils','cwd'];a142_0x1707=function(){return _0x13c20b;};return a142_0x1707();}Object['defineProperty'](exports,a142_0xdc2550(0x1fa),{'value':!![]}),exports[a142_0xdc2550(0x1da)]=void 0x0;const path_1=__importDefault(require('path')),fs_internal_1=require('../../internal/fs.internal'),shell_internal_1=require('../../internal/shell.internal'),sfdx_utils_1=require(a142_0xdc2550(0x1fb)),sfdx_1=require(a142_0xdc2550(0x1e0)),promises_1=require(a142_0xdc2550(0x204)),vlocity_1=require(a142_0xdc2550(0x1f7)),constants_1=require(a142_0xdc2550(0x1e8)),messages_1=require(a142_0xdc2550(0x1dc)),crypto_1=require(a142_0xdc2550(0x208));class SFDXUtils{constructor(){const _0x5b188a=a142_0xdc2550;this[_0x5b188a(0x1f3)]=path_1[_0x5b188a(0x1df)][_0x5b188a(0x206)](process[_0x5b188a(0x1fc)](),_0x5b188a(0x1e3),_0x5b188a(0x1fe)),this[_0x5b188a(0x1ef)]=(0x0,crypto_1[_0x5b188a(0x1db)])();}get[a142_0xdc2550(0x1ea)](){const _0x2efcac=a142_0xdc2550;return''+this[_0x2efcac(0x1ef)];}get[a142_0xdc2550(0x1ff)](){const _0x33cff6=a142_0xdc2550;return path_1[_0x33cff6(0x1df)][_0x33cff6(0x206)](this[_0x33cff6(0x1f3)],this[_0x33cff6(0x1ea)]);}async[a142_0xdc2550(0x1d7)](_0x51eddd){const _0x3d8dca=a142_0xdc2550;!await fs_internal_1['FS'][_0x3d8dca(0x1ec)](this[_0x3d8dca(0x1f3)])&&await fs_internal_1['FS']['makeDir'](this[_0x3d8dca(0x1f3)]);await sfdx_utils_1[_0x3d8dca(0x1f1)][_0x3d8dca(0x1f8)](this[_0x3d8dca(0x1f3)],this[_0x3d8dca(0x1ea)]),await sfdx_utils_1['SFDX']['createEmptyPackageXml'](_0x51eddd);try{await sfdx_utils_1[_0x3d8dca(0x1f1)][_0x3d8dca(0x20a)](_0x51eddd,this[_0x3d8dca(0x1ff)]);}catch(_0x5f1429){if(!_0x5f1429['message'][_0x3d8dca(0x1e2)](sfdx_1[_0x3d8dca(0x1ee)]))throw _0x5f1429;}}async[a142_0xdc2550(0x1f5)](_0x59fd6b,_0xe4da69=!![]){const _0x57f1fd=a142_0xdc2550;_0xe4da69&&(!await fs_internal_1['FS'][_0x57f1fd(0x1ec)](_0x59fd6b+_0x57f1fd(0x1eb))&&(_0xe4da69=![])),_0xe4da69?await shell_internal_1[_0x57f1fd(0x1f6)][_0x57f1fd(0x1fd)]('cp\x20-r\x20'+this[_0x57f1fd(0x1ff)]+_0x57f1fd(0x1d8)+_0x59fd6b):await shell_internal_1[_0x57f1fd(0x1f6)][_0x57f1fd(0x1fd)](_0x57f1fd(0x1f0)+this[_0x57f1fd(0x1ff)]+_0x57f1fd(0x1ed)+_0x59fd6b);}async['removeDir'](){const _0x394274=a142_0xdc2550;await fs_internal_1['FS']['removeDir'](this[_0x394274(0x1ff)]);}async[a142_0xdc2550(0x205)](_0x26adee,_0x42d5a1){const _0x54544d=a142_0xdc2550,_0x268040=await(0x0,promises_1[_0x54544d(0x1e1)])(_0x26adee),_0x1c1ca8=_0x268040['filter'](_0x4aeb27=>(0x0,vlocity_1[_0x54544d(0x201)])(_0x4aeb27));for(const _0x2bec28 of _0x1c1ca8){const _0x4f4ef9=path_1[_0x54544d(0x1df)][_0x54544d(0x206)](_0x26adee,_0x2bec28),_0x5401f2=path_1['default']['join'](_0x42d5a1,_0x2bec28);await(0x0,promises_1['cp'])(_0x4f4ef9,_0x5401f2,{'recursive':!![]});}}[a142_0xdc2550(0x1d6)](_0x13d389){const _0x216c06=a142_0xdc2550;switch(_0x13d389){case constants_1[_0x216c06(0x1e5)][_0x216c06(0x202)]:case constants_1[_0x216c06(0x1e5)][_0x216c06(0x203)]:{return![];}case constants_1[_0x216c06(0x1e5)]['DEFAULT']:{return!![];}default:{throw new Error(messages_1['WRONG_RECORD_TYPE_ERROR_MESSAGE']+_0x13d389);}}}}exports[a142_0xdc2550(0x1da)]=SFDXUtils;