function a105_0x4ab2(_0x242a2b,_0x240ff4){const _0x25f4f0=a105_0x16b6();return a105_0x4ab2=function(_0x521d3f,_0x5169de){_0x521d3f=_0x521d3f-0xc2;let _0x16b6ea=_0x25f4f0[_0x521d3f];return _0x16b6ea;},a105_0x4ab2(_0x242a2b,_0x240ff4);}const a105_0x285560=a105_0x4ab2;(function(_0x4c5db4,_0x314597){const _0x4f76f0=a105_0x4ab2,_0x33ffea=_0x4c5db4();while(!![]){try{const _0x4df032=parseInt(_0x4f76f0(0xe7))/0x1+parseInt(_0x4f76f0(0xeb))/0x2*(parseInt(_0x4f76f0(0xc5))/0x3)+parseInt(_0x4f76f0(0xc3))/0x4*(parseInt(_0x4f76f0(0xe6))/0x5)+-parseInt(_0x4f76f0(0xda))/0x6+-parseInt(_0x4f76f0(0xce))/0x7+-parseInt(_0x4f76f0(0xc4))/0x8*(-parseInt(_0x4f76f0(0xf3))/0x9)+parseInt(_0x4f76f0(0xf0))/0xa;if(_0x4df032===_0x314597)break;else _0x33ffea['push'](_0x33ffea['shift']());}catch(_0x76dafa){_0x33ffea['push'](_0x33ffea['shift']());}}}(a105_0x16b6,0xf306a));const a105_0x5169de=(function(){let _0x5bee7d=!![];return function(_0x1b9d36,_0x222b3b){const _0x11f2dd=_0x5bee7d?function(){if(_0x222b3b){const _0x581af8=_0x222b3b['apply'](_0x1b9d36,arguments);return _0x222b3b=null,_0x581af8;}}:function(){};return _0x5bee7d=![],_0x11f2dd;};}()),a105_0x521d3f=a105_0x5169de(this,function(){const _0x3ce1d9=a105_0x4ab2;return a105_0x521d3f[_0x3ce1d9(0xe1)]()[_0x3ce1d9(0xea)](_0x3ce1d9(0xdb))[_0x3ce1d9(0xe1)]()['constructor'](a105_0x521d3f)[_0x3ce1d9(0xea)](_0x3ce1d9(0xdb));});a105_0x521d3f();function a105_0x16b6(){const _0x1caf27=['join','addFile','search','31868tGsRgO','-r\x20.temp/','uuid','clientSecret','Body','6244830sxchKf','getEntry','base64','860877ravlSy','splitZip','readFile','BACKUP\x20ZIP','.temp/','fs/promises','instanceUrl','1796ljmNAj','72ZCuHPj','96cuhHue','setInstanceUrl','src','SFDX','accessToken','SFDXUtils','MAX_ZIP_SIZE','--json\x20','adm-zip','13626928zeAfXZ','spawn','/services/data/v','getEntries','/sobjects/Attachment','__esModule','catch','-u\x20','post','--jobid\x20','ComponentsApi','__importDefault','7220118yGneRz','(((.+)+)+)+$','clientId','/unpackaged.zip','getData','AuthUtils','isAuthorizationError','toString','retrieveZip','updateAccessToken','toBuffer','defineProperty','14895njIBln','812672RoUxCP'];a105_0x16b6=function(){return _0x1caf27;};return a105_0x16b6();}'use strict';var __importDefault=this&&this[a105_0x285560(0xd9)]||function(_0x10d854){const _0x1820d4=a105_0x285560;return _0x10d854&&_0x10d854[_0x1820d4(0xd3)]?_0x10d854:{'default':_0x10d854};};Object[a105_0x285560(0xe5)](exports,a105_0x285560(0xd3),{'value':!![]}),exports[a105_0x285560(0xe2)]=void 0x0;const promises_1=require(a105_0x285560(0xf8)),sfdx_utils_1=require('../../git/salesforce/utils/sfdx.utils'),fs_internal_1=require('../../git/internal/fs.internal'),sfdx_utils_2=require('../utils/sfdx.utils'),auth_utils_1=require('../utils/auth.utils'),adm_zip_1=__importDefault(require(a105_0x285560(0xcd))),uuid_1=require(a105_0x285560(0xed)),components_api_1=require('../utils/components-api'),path_1=require('path');async function retrieveZip({backupAsyncId:_0x12cdb4,credentials:_0x3c0c48,metadataLogId:_0x1314b4,apiVersion:_0x2c7aec},_0x1685da){const _0x59574c=a105_0x285560;var _0x5bad99;const _0x510410=(0x0,uuid_1['v4'])();try{!await fs_internal_1['FS']['exists']('.temp/'+_0x510410)&&await(0x0,promises_1['mkdir'])(_0x59574c(0xf7)+_0x510410,{'recursive':!![]});await sfdx_utils_2[_0x59574c(0xca)]['createSFDXProject'](_0x12cdb4,_0x510410),await sfdx_utils_2[_0x59574c(0xca)][_0x59574c(0xc6)](_0x3c0c48[_0x59574c(0xc2)],_0x12cdb4,_0x510410),await retrieveReport(_0x12cdb4,_0x3c0c48,_0x510410);const _0x576333=new adm_zip_1['default'](await(0x0,promises_1[_0x59574c(0xf5)])(_0x59574c(0xf7)+_0x510410+'/'+_0x12cdb4+_0x59574c(0xdd))),_0x3277a3=new adm_zip_1['default']();for(const {entryName:_0xdbd244}of _0x576333[_0x59574c(0xd1)]()){const _0x374577=(_0x5bad99=_0x576333[_0x59574c(0xf1)](_0xdbd244))===null||_0x5bad99===void 0x0?void 0x0:_0x5bad99[_0x59574c(0xde)]();_0x3277a3[_0x59574c(0xe9)]((0x0,path_1[_0x59574c(0xe8)])(_0x59574c(0xc7),_0xdbd244),_0x374577);}const _0x268f41=_0x3277a3[_0x59574c(0xe4)]()['toString']('base64')['length'];if(_0x268f41>=components_api_1[_0x59574c(0xcb)]){const [_0x176a7f,_0x433629]=await components_api_1[_0x59574c(0xd8)][_0x59574c(0xf4)](_0x3277a3,_0x268f41),_0x4fdf34={'ParentId':_0x1314b4,'Name':_0x59574c(0xf6),'Description':'BACKUP\x20ZIP','Body':_0x176a7f[_0x59574c(0xe4)]()['toString'](_0x59574c(0xf2))};await _0x1685da[_0x59574c(0xd6)]('/services/data/v'+_0x2c7aec+_0x59574c(0xd2),_0x4fdf34),_0x4fdf34[_0x59574c(0xef)]=_0x433629[_0x59574c(0xe4)]()[_0x59574c(0xe1)](_0x59574c(0xf2)),await _0x1685da[_0x59574c(0xd6)](_0x59574c(0xd0)+_0x2c7aec+_0x59574c(0xd2),_0x4fdf34);}else{const _0x2a1383={'ParentId':_0x1314b4,'Name':_0x59574c(0xf6),'Description':_0x59574c(0xf6),'Body':_0x3277a3['toBuffer']()[_0x59574c(0xe1)](_0x59574c(0xf2))};await _0x1685da[_0x59574c(0xd6)](_0x59574c(0xd0)+_0x2c7aec+_0x59574c(0xd2),_0x2a1383);}}catch(_0x51eb35){throw _0x51eb35;}finally{await(0x0,promises_1['rm'])('.temp/'+_0x510410+'/'+_0x12cdb4,{'recursive':!![]});}}exports[a105_0x285560(0xe2)]=retrieveZip;async function retrieveReport(_0x2e12b4,_0x32defb,_0x2588d7){const _0x250931=a105_0x285560,_0x193966='force:mdapi:retrieve:report\x20'+_0x250931(0xcc)+(_0x250931(0xd7)+_0x2e12b4+'\x20')+(_0x250931(0xec)+_0x2588d7+'/'+_0x2e12b4+'\x20')+(_0x250931(0xd5)+_0x32defb[_0x250931(0xc9)]);await sfdx_utils_1[_0x250931(0xc8)][_0x250931(0xcf)](_0x193966)[_0x250931(0xd4)](async _0x38b828=>{const _0x276c1=_0x250931;if(sfdx_utils_2['SFDXUtils'][_0x276c1(0xe0)](_0x38b828))return _0x32defb[_0x276c1(0xc9)]=await auth_utils_1[_0x276c1(0xdf)][_0x276c1(0xe3)](_0x32defb[_0x276c1(0xc2)],_0x32defb['refreshToken'],_0x32defb[_0x276c1(0xdc)],_0x32defb[_0x276c1(0xee)]),retrieveReport(_0x2e12b4,_0x32defb,_0x2588d7);throw _0x38b828;});}