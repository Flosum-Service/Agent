const a69_0x578c3e=a69_0x5002;function a69_0x92d0(){const _0x311838=['execute','runLint','jobId','./classes/run-lint','../../../core','minimist','systemLogger','exit','axiosInstance','error','namespace','join','./classes/retrieve-cartridges','isCompileCartridges','4070160heTUBB','default','isActivateCodeVersion','27896nvZRpF','../../shared/managers/auth.manager','setError','3471256EKiMBW','setCompleted','IGNORE_FLOSUM_NAMESPACE','jobPath','init','27eGbANm','97JlxQTh','AxiosInstanceUtils','__importDefault','./classes/logger','search','cartridges','(((.+)+)+)+$','isUseCertificate','metadataLogId','setInProgress','2315OBTgac','6503000qJUqQo','apiVersion','8770741uPaahJ','======\x20Retrieve\x20Cartridge\x20Files\x20','then','argv','catch','getAxiosInstance','runScript','./classes/run-script','retrieveCartridges','codeVersion','logger','getFlosumNamespace','getAuthDetails','slice','__esModule','FLOSUM_NAMESPACE','branchId','./classes/manifest-manager','FsUtils','1229624yiVvRo','FLOSUM_SCRIPT_PATH','deployCartridges','@flosum/salesforce','defineProperty','apply','env','../constants','./classes/deploy-cartridges','AuthManager','Job','padEnd','../../shared/managers/state-manger','getManifestParameters','variables','858DFGWfc','@flosum/utils','create','log','======\x20Run\x20Script\x20','credentials','Logger'];a69_0x92d0=function(){return _0x311838;};return a69_0x92d0();}(function(_0x3cac13,_0x4dcefc){const _0x273305=a69_0x5002,_0xc59d9a=_0x3cac13();while(!![]){try{const _0x181def=-parseInt(_0x273305(0x1ef))/0x1*(parseInt(_0x273305(0x1e6))/0x2)+-parseInt(_0x273305(0x1e3))/0x3+parseInt(_0x273305(0x20f))/0x4+parseInt(_0x273305(0x1f9))/0x5*(parseInt(_0x273305(0x1ce))/0x6)+parseInt(_0x273305(0x1fc))/0x7+parseInt(_0x273305(0x1e9))/0x8*(parseInt(_0x273305(0x1ee))/0x9)+parseInt(_0x273305(0x1fa))/0xa;if(_0x181def===_0x4dcefc)break;else _0xc59d9a['push'](_0xc59d9a['shift']());}catch(_0xdd22c){_0xc59d9a['push'](_0xc59d9a['shift']());}}}(a69_0x92d0,0xd423b));const a69_0x555676=(function(){let _0x134e28=!![];return function(_0x5d5007,_0x1cd384){const _0x129193=_0x134e28?function(){const _0x23af86=a69_0x5002;if(_0x1cd384){const _0x46e8bd=_0x1cd384[_0x23af86(0x214)](_0x5d5007,arguments);return _0x1cd384=null,_0x46e8bd;}}:function(){};return _0x134e28=![],_0x129193;};}()),a69_0x55a3f6=a69_0x555676(this,function(){const _0x5699db=a69_0x5002;return a69_0x55a3f6['toString']()[_0x5699db(0x1f3)](_0x5699db(0x1f5))['toString']()['constructor'](a69_0x55a3f6)[_0x5699db(0x1f3)]('(((.+)+)+)+$');});a69_0x55a3f6();function a69_0x5002(_0x44d357,_0x70afe3){const _0x26fdaf=a69_0x92d0();return a69_0x5002=function(_0x55a3f6,_0x555676){_0x55a3f6=_0x55a3f6-0x1c6;let _0x92d09=_0x26fdaf[_0x55a3f6];return _0x92d09;},a69_0x5002(_0x44d357,_0x70afe3);}'use strict';var __importDefault=this&&this[a69_0x578c3e(0x1f1)]||function(_0x3860d2){const _0x16302a=a69_0x578c3e;return _0x3860d2&&_0x3860d2[_0x16302a(0x20a)]?_0x3860d2:{'default':_0x3860d2};};Object[a69_0x578c3e(0x213)](exports,a69_0x578c3e(0x20a),{'value':!![]}),exports[a69_0x578c3e(0x1c9)]=void 0x0;const core_1=require(a69_0x578c3e(0x1d9)),salesforce_1=require(a69_0x578c3e(0x212)),auth_manager_1=require(a69_0x578c3e(0x1e7)),constants_1=require(a69_0x578c3e(0x1c6)),utils_1=require(a69_0x578c3e(0x1cf)),minimist_1=__importDefault(require(a69_0x578c3e(0x1da))),path_1=__importDefault(require('path')),state_manger_1=__importDefault(require(a69_0x578c3e(0x1cb))),logger_1=__importDefault(require(a69_0x578c3e(0x1f2))),retrieve_cartridges_1=__importDefault(require(a69_0x578c3e(0x1e1))),deploy_cartridges_1=__importDefault(require(a69_0x578c3e(0x1c7))),run_script_1=__importDefault(require(a69_0x578c3e(0x203))),run_lint_1=__importDefault(require(a69_0x578c3e(0x1d8))),manifest_manager_1=__importDefault(require(a69_0x578c3e(0x20d))),salesforce_auth_1=__importDefault(require('./classes/salesforce-auth'));class Job{constructor(){const _0xc7ce6a=a69_0x578c3e,{jobId:_0x57cb8b,jobStorePath:_0x101487}=(0x0,minimist_1['default'])(process[_0xc7ce6a(0x1ff)][_0xc7ce6a(0x209)](0x2));this[_0xc7ce6a(0x1ec)]=_0x101487,this[_0xc7ce6a(0x1d7)]=_0x57cb8b;}async['execute'](){const _0x2abb2d=a69_0x578c3e;this[_0x2abb2d(0x1db)]=new core_1[(_0x2abb2d(0x1d4))](this[_0x2abb2d(0x1d7)]),this['logger']=new logger_1[(_0x2abb2d(0x1e4))](this[_0x2abb2d(0x1d7)],this[_0x2abb2d(0x1db)]);const _0x1cd821=await new state_manger_1[(_0x2abb2d(0x1e4))](this[_0x2abb2d(0x1ec)])[_0x2abb2d(0x1ed)](),_0x83168d=path_1[_0x2abb2d(0x1e4)][_0x2abb2d(0x1e0)](this[_0x2abb2d(0x1ec)],_0x2abb2d(0x1f4),constants_1[_0x2abb2d(0x210)]);await this[_0x2abb2d(0x206)]['log']('Job\x20has\x20been\x20started.');try{await _0x1cd821[_0x2abb2d(0x1f8)](),this['axiosInstance']=await this[_0x2abb2d(0x201)](),this['namespace']=this[_0x2abb2d(0x207)](),await this[_0x2abb2d(0x1cc)](),await this['retrieveCartridges'](),!this['isLintValidate']?await utils_1[_0x2abb2d(0x20e)]['isExistsPath'](_0x83168d)?await this['runScript']():await this[_0x2abb2d(0x211)]():await this[_0x2abb2d(0x1d6)](),await _0x1cd821[_0x2abb2d(0x1ea)](),await this[_0x2abb2d(0x206)][_0x2abb2d(0x1d1)]('Job\x20has\x20been\x20completed.');}catch(_0x2ac839){await _0x1cd821[_0x2abb2d(0x1e8)](_0x2ac839),await this[_0x2abb2d(0x206)][_0x2abb2d(0x1de)](_0x2ac839['message']),await this['logger'][_0x2abb2d(0x1de)]('Job\x20has\x20been\x20failed.');}}async[a69_0x578c3e(0x1cc)](){const _0x4cf86b=a69_0x578c3e,{credentials:_0xbf2f7,apiVersion:_0x36b9d6,branchId:_0x426ebb,metadataLogId:_0x56fe21,codeVersion:_0x2454da,isUseCertificate:_0x14383d,isLintValidate:_0x327b68,isCompileCartridges:_0x194f38,isActivateCodeVersion:_0x11fd94,variables:_0x1f682e}=await new manifest_manager_1[(_0x4cf86b(0x1e4))](this[_0x4cf86b(0x1ec)])[_0x4cf86b(0x1ed)]();this[_0x4cf86b(0x1d3)]=_0xbf2f7,this[_0x4cf86b(0x1fb)]=_0x36b9d6,this[_0x4cf86b(0x20c)]=_0x426ebb,this[_0x4cf86b(0x1f7)]=_0x56fe21,this['codeVersion']=_0x2454da,this[_0x4cf86b(0x1f6)]=_0x14383d,this['isLintValidate']=_0x327b68,this['isCompileCartridges']=_0x194f38,this['isActivateCodeVersion']=_0x11fd94,this['variables']=_0x1f682e;}async[a69_0x578c3e(0x201)](){const _0x39163e=a69_0x578c3e,_0x21ca86=await salesforce_auth_1[_0x39163e(0x1e4)][_0x39163e(0x208)]();return salesforce_1[_0x39163e(0x1f0)][_0x39163e(0x1d0)](new auth_manager_1[(_0x39163e(0x1c8))](_0x21ca86),[],{'maxContentLength':Infinity,'maxBodyLength':Infinity});}async[a69_0x578c3e(0x204)](){const _0x2f4aa8=a69_0x578c3e;await this['logger'][_0x2f4aa8(0x1d1)](_0x2f4aa8(0x1fd)['padEnd'](0x32,'=')),await new retrieve_cartridges_1[(_0x2f4aa8(0x1e4))](this[_0x2f4aa8(0x1ec)],this[_0x2f4aa8(0x1dd)],this['apiVersion'],this[_0x2f4aa8(0x1df)],this[_0x2f4aa8(0x20c)],this[_0x2f4aa8(0x1f7)],this[_0x2f4aa8(0x206)],this['systemLogger'],this[_0x2f4aa8(0x1cd)])[_0x2f4aa8(0x1d5)]();}async[a69_0x578c3e(0x202)](){const _0x48d228=a69_0x578c3e;await this[_0x48d228(0x206)][_0x48d228(0x1d1)](_0x48d228(0x1d2)[_0x48d228(0x1ca)](0x32,'=')),await new run_script_1['default'](this[_0x48d228(0x1ec)],this[_0x48d228(0x1d3)],this[_0x48d228(0x205)],this[_0x48d228(0x1f6)],this[_0x48d228(0x1e2)],this[_0x48d228(0x1e5)],this[_0x48d228(0x1db)],this['logger'])[_0x48d228(0x1d5)]();}async[a69_0x578c3e(0x1d6)](){const _0x2a2180=a69_0x578c3e;await this['logger'][_0x2a2180(0x1d1)]('======\x20Run\x20Lint\x20'[_0x2a2180(0x1ca)](0x32,'=')),await new run_lint_1[(_0x2a2180(0x1e4))](this[_0x2a2180(0x1ec)],this['systemLogger'],this[_0x2a2180(0x206)])[_0x2a2180(0x1d5)]();}async[a69_0x578c3e(0x211)](){const _0x5cd285=a69_0x578c3e;await this[_0x5cd285(0x206)][_0x5cd285(0x1d1)]('======\x20Deploy\x20Cartridge\x20Files\x20'[_0x5cd285(0x1ca)](0x32,'=')),await new deploy_cartridges_1[(_0x5cd285(0x1e4))](this[_0x5cd285(0x1ec)],this[_0x5cd285(0x1d3)],this[_0x5cd285(0x205)],this[_0x5cd285(0x1e5)],this['logger'])[_0x5cd285(0x1d5)]();}[a69_0x578c3e(0x207)](){const _0x2f0820=a69_0x578c3e;var _0x277b8e,_0x1304ef;return((_0x1304ef=(_0x277b8e=process[_0x2f0820(0x215)])===null||_0x277b8e===void 0x0?void 0x0:_0x277b8e[_0x2f0820(0x1eb)])===null||_0x1304ef===void 0x0?void 0x0:_0x1304ef['toLowerCase']())==='true'?'':constants_1[_0x2f0820(0x20b)];}}exports[a69_0x578c3e(0x1c9)]=Job,new Job()['execute']()[a69_0x578c3e(0x1fe)](()=>process['exit'](0x0))[a69_0x578c3e(0x200)](()=>process[a69_0x578c3e(0x1dc)](0x1));