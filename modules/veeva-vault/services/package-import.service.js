const a403_0x3fca30=a403_0x1e18;(function(_0x295e9b,_0x541acf){const _0x516925=a403_0x1e18,_0x3218b5=_0x295e9b();while(!![]){try{const _0x4df743=parseInt(_0x516925(0x13c))/0x1+parseInt(_0x516925(0x128))/0x2*(parseInt(_0x516925(0x152))/0x3)+parseInt(_0x516925(0x109))/0x4+parseInt(_0x516925(0x11e))/0x5*(-parseInt(_0x516925(0x148))/0x6)+-parseInt(_0x516925(0x150))/0x7+-parseInt(_0x516925(0x133))/0x8*(-parseInt(_0x516925(0x159))/0x9)+-parseInt(_0x516925(0x12e))/0xa;if(_0x4df743===_0x541acf)break;else _0x3218b5['push'](_0x3218b5['shift']());}catch(_0x1fb885){_0x3218b5['push'](_0x3218b5['shift']());}}}(a403_0x1c52,0x65791));const a403_0x441bff=(function(){let _0x39e497=!![];return function(_0x4ed453,_0x1244e4){const _0x45997b=_0x39e497?function(){if(_0x1244e4){const _0x4edfa7=_0x1244e4['apply'](_0x4ed453,arguments);return _0x1244e4=null,_0x4edfa7;}}:function(){};return _0x39e497=![],_0x45997b;};}()),a403_0x5d8484=a403_0x441bff(this,function(){const _0x5ee9eb=a403_0x1e18;return a403_0x5d8484[_0x5ee9eb(0x12c)]()['search'](_0x5ee9eb(0x12f))[_0x5ee9eb(0x12c)]()[_0x5ee9eb(0x143)](a403_0x5d8484)[_0x5ee9eb(0x14a)]('(((.+)+)+)+$');});function a403_0x1c52(){const _0x3ed4f3=['Wait\x20Executing\x20job','82MCaBVD','getDeployDetailsAndSaveLog','get','VeevaConstants','toString','Get\x20validation\x20details.','5554660XlprMy','(((.+)+)+)+$','filter','append','map','102232ouQcMq','VERIFIED','PackageComponentStatus','VeevaResponseStatus','deployPackage','VeevaPackageStatus','Import\x20package','filename','defineProperty','463805wDMizm','import','Package\x20not\x20verified','package_components','url','name__v','VeevaError','constructor','../dtos/package-component.dto','../classes/errors/veeva-error','../utils/veeva-auth.utils','includes','64620eiITlc','DEPLOYED','search','endsWith','post','_veevaService','data','_connection','1472170sXtMXh','packageComponentList','46779IGMzFo','groupUniqueToMap','form-data','PackageImportService','errors','formPackageComponentList','fillPackageDeploymentAction','405aLVyPh','_logger','file','text','ArrayUtils','getLogResultText','packageId','isDeployed','importVpk','default','createReadStream','253104OkjsKd','../enums/status.enums','getJobDetailUrl','replace','vaultPackage','ENDPOINT_VALIDATE_PACKAGE','DEPLOYED_WITH_WARNINGS','Deploy\x20Log','getValidationDetailsAndSaveLog','__importDefault','__esModule','status','groupToMap','_saveLog','Get\x20deploy\x20result','log','getJobResult','rel','Deploy\x20package','reduce','deployment_status__v','260DheIue','{package_id}','length','SUCCESS','find','deploymentAction','PackageComponentDto','responseStatus','artifacts'];a403_0x1c52=function(){return _0x3ed4f3;};return a403_0x1c52();}function a403_0x1e18(_0x2976f2,_0x10ae53){const _0x2df076=a403_0x1c52();return a403_0x1e18=function(_0x5d8484,_0x441bff){_0x5d8484=_0x5d8484-0x108;let _0x1c528c=_0x2df076[_0x5d8484];return _0x1c528c;},a403_0x1e18(_0x2976f2,_0x10ae53);}a403_0x5d8484();'use strict';var __importDefault=this&&this[a403_0x3fca30(0x112)]||function(_0x2a7f65){const _0x42e3c4=a403_0x3fca30;return _0x2a7f65&&_0x2a7f65[_0x42e3c4(0x113)]?_0x2a7f65:{'default':_0x2a7f65};};Object[a403_0x3fca30(0x13b)](exports,a403_0x3fca30(0x113),{'value':!![]}),exports[a403_0x3fca30(0x155)]=void 0x0;const veeva_constants_1=require('../constants/veeva.constants'),status_enums_1=require(a403_0x3fca30(0x10a)),veeva_error_1=require(a403_0x3fca30(0x145)),form_data_1=__importDefault(require(a403_0x3fca30(0x154))),fs_1=require('fs'),veeva_auth_utils_1=require(a403_0x3fca30(0x146)),package_details_dto_1=require('../dtos/package-details.dto'),package_component_dto_1=require(a403_0x3fca30(0x144)),array_utils_1=require('../utils/array.utils');class PackageImportService{constructor({veevaService:_0x274ff2,connection:_0x16e031,logger:_0x340259,saveLog:_0x86beed}){const _0xf5294c=a403_0x3fca30;this[_0xf5294c(0x14d)]=_0x274ff2,this[_0xf5294c(0x14f)]=_0x16e031,this[_0xf5294c(0x15a)]=_0x340259,this['_saveLog']=_0x86beed;}async[a403_0x3fca30(0x161)](_0x5e8471,_0x38d694=0x1){const _0x31c782=a403_0x3fca30;this['_logger']['log'](_0x31c782(0x139));const _0x4a8cf9=new form_data_1[(_0x31c782(0x162))]();_0x4a8cf9[_0x31c782(0x131)](_0x31c782(0x15b),(0x0,fs_1[_0x31c782(0x108)])(_0x5e8471));const _0x50f40c=await this[_0x31c782(0x14f)]['put'](veeva_constants_1[_0x31c782(0x12b)]['ENDPOINT_EXPORT_IMPORT_PACKAGE'],_0x4a8cf9,{'headers':{'Content-Type':'multipart/form-data'}}),_0x39132c=_0x50f40c[_0x31c782(0x14e)];if(_0x39132c[_0x31c782(0x125)]===status_enums_1[_0x31c782(0x136)][_0x31c782(0x121)])return _0x39132c['url'];else{if(_0x38d694>0x0)return await(0x0,veeva_auth_utils_1['updateVeevaConnection'])(this[_0x31c782(0x14f)]),await this[_0x31c782(0x161)](_0x5e8471,_0x38d694-0x1);throw new veeva_error_1['VeevaError'](_0x39132c[_0x31c782(0x156)]);}}async[a403_0x3fca30(0x137)](_0x5276d9){const _0x134d8a=a403_0x3fca30;this[_0x134d8a(0x15a)][_0x134d8a(0x118)](_0x134d8a(0x11b));const _0x11bd43=await this['_connection'][_0x134d8a(0x14c)](veeva_constants_1[_0x134d8a(0x12b)]['ENDPOINT_DEPLOY_PACKAGE']['replace'](_0x134d8a(0x11f),_0x5276d9)),_0x56e01a=await _0x11bd43[_0x134d8a(0x14e)];if(_0x56e01a[_0x134d8a(0x125)]===status_enums_1[_0x134d8a(0x136)][_0x134d8a(0x121)])return _0x56e01a[_0x134d8a(0x140)];else throw new veeva_error_1[(_0x134d8a(0x142))](_0x56e01a[_0x134d8a(0x156)]);}async[a403_0x3fca30(0x10b)](_0x3639fc){const _0xdce1fd=a403_0x3fca30;this[_0xdce1fd(0x15a)]['log'](_0xdce1fd(0x127));const [_0x1ccb17]=await this[_0xdce1fd(0x14d)][_0xdce1fd(0x119)]([_0x3639fc]);return _0x1ccb17['links'][_0xdce1fd(0x122)](_0x365f99=>_0x365f99[_0xdce1fd(0x11a)]===_0xdce1fd(0x126))['href'];}async[a403_0x3fca30(0x111)](_0x4b6f2b){const _0x36e27b=a403_0x3fca30;this[_0x36e27b(0x15a)][_0x36e27b(0x118)](_0x36e27b(0x12d));const {data:_0x4de46e}=await this['_connection'][_0x36e27b(0x12a)](_0x4b6f2b);if(_0x4de46e[_0x36e27b(0x125)]===status_enums_1[_0x36e27b(0x136)][_0x36e27b(0x121)]){const _0x2001f0=new package_details_dto_1['PackageDetailsDto'](),{log:_0x17de16,id:_0x3169c2,package_status:_0xb83561,package_steps:_0x5908eb}=_0x4de46e[_0x36e27b(0x10d)],_0x263880=_0x17de16[_0x36e27b(0x130)](_0x24975e=>_0x24975e[_0x36e27b(0x13a)]['endsWith']('Validation.log')),_0x7b2a8b=await this[_0x36e27b(0x15e)](_0x263880[0x0]['url']);await this[_0x36e27b(0x116)](_0x7b2a8b,'Validation\x20Log'),_0x2001f0['packageId']=_0x3169c2,_0x2001f0[_0x36e27b(0x151)]=this[_0x36e27b(0x157)](_0x5908eb),await this[_0x36e27b(0x158)](_0x2001f0);if(_0xb83561!==status_enums_1[_0x36e27b(0x138)][_0x36e27b(0x134)])throw new Error(_0x36e27b(0x13e));return _0x2001f0;}else throw new veeva_error_1['VeevaError'](_0x4de46e[_0x36e27b(0x156)]);}async[a403_0x3fca30(0x129)](_0x53f119,_0x17bb51){const _0xeb311a=a403_0x3fca30;var _0x219ba9;this['_logger'][_0xeb311a(0x118)](_0xeb311a(0x117));const {data:_0x5e16fa}=await this[_0xeb311a(0x14f)][_0xeb311a(0x12a)](_0x53f119);if(_0x5e16fa[_0xeb311a(0x125)]===status_enums_1[_0xeb311a(0x136)][_0xeb311a(0x121)]){const {responseDetails:{deployment_log:_0x30bbd6,package_status__v:_0x1f9b12},package_steps:_0x368be5}=_0x5e16fa,_0x494ce3=_0x30bbd6[_0xeb311a(0x130)](_0x31b779=>_0x31b779[_0xeb311a(0x13a)][_0xeb311a(0x14b)]('Deployment.log')),_0x46f9db=await this[_0xeb311a(0x15e)](_0x494ce3[0x0][_0xeb311a(0x140)]);await this['_saveLog'](_0x46f9db,_0xeb311a(0x110)),_0x17bb51[_0xeb311a(0x160)]=[status_enums_1[_0xeb311a(0x138)][_0xeb311a(0x149)],status_enums_1[_0xeb311a(0x138)][_0xeb311a(0x10f)]][_0xeb311a(0x147)](_0x1f9b12);const _0x259089=array_utils_1[_0xeb311a(0x15d)][_0xeb311a(0x153)](this[_0xeb311a(0x157)](_0x368be5),({uniqueName:_0x1f4dda})=>_0x1f4dda);for(const _0x34e183 of _0x17bb51['packageComponentList']){const _0x2ac132=(_0x219ba9=_0x259089['get'](_0x34e183['uniqueName']))===null||_0x219ba9===void 0x0?void 0x0:_0x219ba9[_0xeb311a(0x114)];_0x2ac132&&(_0x34e183[_0xeb311a(0x114)]=_0x2ac132);}_0x17bb51[_0xeb311a(0x151)]=_0x17bb51[_0xeb311a(0x151)][_0xeb311a(0x130)](_0x595be4=>_0x595be4[_0xeb311a(0x114)]!==status_enums_1[_0xeb311a(0x135)]['VERIFIED']);if(!_0x17bb51[_0xeb311a(0x151)][_0xeb311a(0x120)])throw new Error('Cannot\x20find\x20deployment\x20results');return _0x17bb51;}else throw new veeva_error_1[(_0xeb311a(0x142))](_0x5e16fa[_0xeb311a(0x156)]);}async[a403_0x3fca30(0x15e)](_0x107ffc){const _0x56f4c0=a403_0x3fca30,{data:_0x208ace}=await this[_0x56f4c0(0x14f)][_0x56f4c0(0x12a)](_0x107ffc,{'responseType':_0x56f4c0(0x15c)});return _0x208ace;}[a403_0x3fca30(0x157)](_0x2de0be){const _0x3f1f71=a403_0x3fca30;return _0x2de0be[_0x3f1f71(0x11c)]((_0x245e96,_0x38e897)=>{const _0x3c66b6=_0x3f1f71,_0x3b3f97=_0x38e897[_0x3c66b6(0x13f)][_0x3c66b6(0x132)](_0x1fb423=>new package_component_dto_1[(_0x3c66b6(0x124))]({'status':_0x38e897[_0x3c66b6(0x11d)],'stepName':_0x38e897[_0x3c66b6(0x141)],'component':_0x1fb423}));return[..._0x245e96,..._0x3b3f97];},[]);}async[a403_0x3fca30(0x158)](_0x82fceb){const _0xefa2ca=a403_0x3fca30,{data:_0x2137d5}=await this[_0xefa2ca(0x14f)][_0xefa2ca(0x14c)](veeva_constants_1[_0xefa2ca(0x12b)][_0xefa2ca(0x10e)][_0xefa2ca(0x10c)](_0xefa2ca(0x11f),_0x82fceb[_0xefa2ca(0x15f)]));if(_0x2137d5[_0xefa2ca(0x125)]===status_enums_1['VeevaResponseStatus'][_0xefa2ca(0x121)]){const {package_steps:_0x21d248}=_0x2137d5['responseDetails'],_0xc8e22=array_utils_1[_0xefa2ca(0x15d)][_0xefa2ca(0x115)](_0x82fceb[_0xefa2ca(0x151)],({stepName:_0x2c0099})=>_0x2c0099);for(const {name__v:_0x5f2041,deployment_action:_0x595fcb}of _0x21d248){for(const _0x313929 of _0xc8e22[_0xefa2ca(0x12a)](_0x5f2041)||[]){_0x313929[_0xefa2ca(0x123)]=package_component_dto_1[_0xefa2ca(0x124)]['convertDeploymentAction'](_0x595fcb);}}}else throw new veeva_error_1[(_0xefa2ca(0x142))](_0x2137d5[_0xefa2ca(0x156)]);}async[a403_0x3fca30(0x13d)](_0x568e8a){const _0x546ee2=a403_0x3fca30,_0x39cb23=await this[_0x546ee2(0x161)](_0x568e8a),_0xb09cfb=await this[_0x546ee2(0x10b)](_0x39cb23),_0x38546d=await this[_0x546ee2(0x111)](_0xb09cfb),_0x54a314=await this[_0x546ee2(0x137)](_0x38546d[_0x546ee2(0x15f)]),_0x17d350=await this['getJobDetailUrl'](_0x54a314);return this[_0x546ee2(0x129)](_0x17d350,_0x38546d);}}exports[a403_0x3fca30(0x155)]=PackageImportService;