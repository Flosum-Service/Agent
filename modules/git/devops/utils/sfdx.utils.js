function a91_0x3c20(){const _0x134be9=['shortid','PROJECTS_PATH','Shell','cwd','833685zEhcqt','exists','cp\x20-r\x20','uniqueId','684786psDyzV','__esModule','toString','__importDefault','SFDXUtils','105336BSziis','/force-app\x20','738fsmsmy','exec','35307vORhrJ','default','2848TpxHAz','(((.+)+)+)+$','4312jmYNXF','../../salesforce/utils/sfdx.utils','1067473joOBYD','../../internal/shell.internal','path','fullProjectName','110pmWqOQ','4afKRvB','search','join','createProjectFrom','defineProperty','SFDX','26474172smMvGk','28pqMuRI','/*\x20','mdapiToSource','makeDir','removeDir','.temp','dir'];a91_0x3c20=function(){return _0x134be9;};return a91_0x3c20();}const a91_0x4bc3b0=a91_0x2bdd;(function(_0x7208f3,_0x16f9b3){const _0x5f49ad=a91_0x2bdd,_0x19284c=_0x7208f3();while(!![]){try{const _0x2e25ce=-parseInt(_0x5f49ad(0x199))/0x1*(parseInt(_0x5f49ad(0x1a8))/0x2)+parseInt(_0x5f49ad(0x1be))/0x3+parseInt(_0x5f49ad(0x1af))/0x4*(-parseInt(_0x5f49ad(0x1ba))/0x5)+parseInt(_0x5f49ad(0x19b))/0x6*(parseInt(_0x5f49ad(0x1a1))/0x7)+parseInt(_0x5f49ad(0x19f))/0x8*(-parseInt(_0x5f49ad(0x19d))/0x9)+-parseInt(_0x5f49ad(0x1a7))/0xa*(-parseInt(_0x5f49ad(0x1a3))/0xb)+parseInt(_0x5f49ad(0x1ae))/0xc;if(_0x2e25ce===_0x16f9b3)break;else _0x19284c['push'](_0x19284c['shift']());}catch(_0x354b3f){_0x19284c['push'](_0x19284c['shift']());}}}(a91_0x3c20,0xc41c1));const a91_0x1e4644=(function(){let _0x2ffea6=!![];return function(_0x270b05,_0x3adcf0){const _0x3fa4ed=_0x2ffea6?function(){if(_0x3adcf0){const _0x539eef=_0x3adcf0['apply'](_0x270b05,arguments);return _0x3adcf0=null,_0x539eef;}}:function(){};return _0x2ffea6=![],_0x3fa4ed;};}()),a91_0x275539=a91_0x1e4644(this,function(){const _0x4b7e77=a91_0x2bdd;return a91_0x275539[_0x4b7e77(0x196)]()['search'](_0x4b7e77(0x1a0))['toString']()['constructor'](a91_0x275539)[_0x4b7e77(0x1a9)](_0x4b7e77(0x1a0));});a91_0x275539();function a91_0x2bdd(_0x1866c2,_0x35ec93){const _0x462f1f=a91_0x3c20();return a91_0x2bdd=function(_0x275539,_0x1e4644){_0x275539=_0x275539-0x195;let _0x3c20ff=_0x462f1f[_0x275539];return _0x3c20ff;},a91_0x2bdd(_0x1866c2,_0x35ec93);}'use strict';var __importDefault=this&&this[a91_0x4bc3b0(0x197)]||function(_0x36df19){const _0x5a8d79=a91_0x4bc3b0;return _0x36df19&&_0x36df19[_0x5a8d79(0x195)]?_0x36df19:{'default':_0x36df19};};Object[a91_0x4bc3b0(0x1ac)](exports,'__esModule',{'value':!![]}),exports[a91_0x4bc3b0(0x198)]=void 0x0;const path_1=__importDefault(require(a91_0x4bc3b0(0x1a5))),fs_internal_1=require('../../internal/fs.internal'),shell_internal_1=require(a91_0x4bc3b0(0x1a4)),sfdx_utils_1=require(a91_0x4bc3b0(0x1a2)),shortid_1=__importDefault(require(a91_0x4bc3b0(0x1b6)));class SFDXUtils{constructor(){const _0x179612=a91_0x4bc3b0;this[_0x179612(0x1b7)]=path_1[_0x179612(0x19e)][_0x179612(0x1aa)](process[_0x179612(0x1b9)](),_0x179612(0x1b4),'sfdx'),this[_0x179612(0x1bd)]=(0x0,shortid_1[_0x179612(0x19e)])();}get[a91_0x4bc3b0(0x1a6)](){const _0xd41bdf=a91_0x4bc3b0;return''+this[_0xd41bdf(0x1bd)];}get[a91_0x4bc3b0(0x1b5)](){const _0x4d3b9d=a91_0x4bc3b0;return path_1[_0x4d3b9d(0x19e)][_0x4d3b9d(0x1aa)](this[_0x4d3b9d(0x1b7)],this[_0x4d3b9d(0x1a6)]);}async[a91_0x4bc3b0(0x1ab)](_0x1f0339){const _0xaf8259=a91_0x4bc3b0;!await fs_internal_1['FS'][_0xaf8259(0x1bb)](this[_0xaf8259(0x1b7)])&&await fs_internal_1['FS'][_0xaf8259(0x1b2)](this[_0xaf8259(0x1b7)]),await sfdx_utils_1[_0xaf8259(0x1ad)]['createEmptyProject'](this['PROJECTS_PATH'],this[_0xaf8259(0x1a6)]),await sfdx_utils_1[_0xaf8259(0x1ad)]['createEmptyPackageXml'](_0x1f0339),await sfdx_utils_1[_0xaf8259(0x1ad)][_0xaf8259(0x1b1)](_0x1f0339,this['dir']);}async['copyProjectTo'](_0xab7868,_0x5d0550=!![]){const _0x57e3ca=a91_0x4bc3b0;_0x5d0550&&(!await fs_internal_1['FS'][_0x57e3ca(0x1bb)](_0xab7868+'/sfdx-project.json')&&(_0x5d0550=![])),_0x5d0550?await shell_internal_1['Shell'][_0x57e3ca(0x19c)](_0x57e3ca(0x1bc)+this['dir']+_0x57e3ca(0x19a)+_0xab7868):await shell_internal_1[_0x57e3ca(0x1b8)]['exec']('cp\x20-r\x20'+this[_0x57e3ca(0x1b5)]+_0x57e3ca(0x1b0)+_0xab7868);}async[a91_0x4bc3b0(0x1b3)](){const _0x54b408=a91_0x4bc3b0;await fs_internal_1['FS'][_0x54b408(0x1b3)](this['dir']);}}exports['SFDXUtils']=SFDXUtils;