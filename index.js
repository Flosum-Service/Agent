const a54_0x5cdac6=a54_0x2ec8;function a54_0x4bff(){const _0x2a8c1c=['./modules/retention-policy/classes/data-masking-retention-policy','245ZHePog','./modules/tracking-metadata/tracking-metadata.controller','660EPHJzX','468SoDoFD','search','7937405WQkHHw','run','TrackingMetadataController','./modules/proxy/proxy.controller','defineProperty','./modules/veeva-vault/veeva-vault.controller','PORT','preBootstrap','7394oRjGSh','./modules/info/info.controller','env','typedi','ProxyController','__esModule','4jDZXML','RetentionPolicyService','./core/server','6493008wAhgrK','GitController','toString','(((.+)+)+)+$','SalesforceCredentialsService','588038QRfvqI','InfoController','__importDefault','setCredentials','reflect-metadata','128344LItuqx','./modules/retrieve-metadata/retrieve-metadata.controller','./modules/git/git.controller','6104460HaKlrb','./pre-bootstrap','useControllers','2015484kYTwfK','./modules/functions/functions.controller','DataMaskingController','constructor','./modules/b2c/b2c.controller','default','DataMaskingRetentionPolicy','apply'];a54_0x4bff=function(){return _0x2a8c1c;};return a54_0x4bff();}(function(_0x314170,_0xf5027f){const _0x1c97a8=a54_0x2ec8,_0x1f8fe3=_0x314170();while(!![]){try{const _0x39357c=-parseInt(_0x1c97a8(0x177))/0x1*(-parseInt(_0x1c97a8(0x155))/0x2)+-parseInt(_0x1c97a8(0x16e))/0x3*(-parseInt(_0x1c97a8(0x15b))/0x4)+-parseInt(_0x1c97a8(0x16b))/0x5+-parseInt(_0x1c97a8(0x15e))/0x6+-parseInt(_0x1c97a8(0x17c))/0x7+-parseInt(_0x1c97a8(0x168))/0x8*(parseInt(_0x1c97a8(0x17a))/0x9)+parseInt(_0x1c97a8(0x179))/0xa*(parseInt(_0x1c97a8(0x163))/0xb);if(_0x39357c===_0xf5027f)break;else _0x1f8fe3['push'](_0x1f8fe3['shift']());}catch(_0xc726a8){_0x1f8fe3['push'](_0x1f8fe3['shift']());}}}(a54_0x4bff,0xcbc32));const a54_0x4d59e7=(function(){let _0x22395d=!![];return function(_0x226e76,_0x2b4505){const _0x392605=_0x22395d?function(){const _0x38cfec=a54_0x2ec8;if(_0x2b4505){const _0x19a456=_0x2b4505[_0x38cfec(0x175)](_0x226e76,arguments);return _0x2b4505=null,_0x19a456;}}:function(){};return _0x22395d=![],_0x392605;};}()),a54_0x13a431=a54_0x4d59e7(this,function(){const _0x2ed51d=a54_0x2ec8;return a54_0x13a431[_0x2ed51d(0x160)]()[_0x2ed51d(0x17b)](_0x2ed51d(0x161))[_0x2ed51d(0x160)]()[_0x2ed51d(0x171)](a54_0x13a431)[_0x2ed51d(0x17b)](_0x2ed51d(0x161));});a54_0x13a431();'use strict';function a54_0x2ec8(_0xd087be,_0x48da3e){const _0x1bc85c=a54_0x4bff();return a54_0x2ec8=function(_0x13a431,_0x4d59e7){_0x13a431=_0x13a431-0x150;let _0x4bff67=_0x1bc85c[_0x13a431];return _0x4bff67;},a54_0x2ec8(_0xd087be,_0x48da3e);}var __importDefault=this&&this[a54_0x5cdac6(0x165)]||function(_0x410ec0){const _0x209c29=a54_0x5cdac6;return _0x410ec0&&_0x410ec0[_0x209c29(0x15a)]?_0x410ec0:{'default':_0x410ec0};};Object[a54_0x5cdac6(0x151)](exports,a54_0x5cdac6(0x15a),{'value':!![]}),require(a54_0x5cdac6(0x167)),require('./common/env');const typedi_1=__importDefault(require(a54_0x5cdac6(0x158))),server_1=require(a54_0x5cdac6(0x15d)),proxy_controller_1=require(a54_0x5cdac6(0x150)),info_controller_1=require(a54_0x5cdac6(0x156)),pre_bootstrap_1=require(a54_0x5cdac6(0x16c)),salesforce_credentials_service_1=require('./modules/git/salesforce/services/salesforce.credentials-service'),git_controller_1=require(a54_0x5cdac6(0x16a)),functions_controller_1=require(a54_0x5cdac6(0x16f)),veeva_vault_controller_1=require(a54_0x5cdac6(0x152)),data_masking_controller_1=require('./modules/data-masking/data-masking.controller'),retention_policy_service_1=require('./modules/retention-policy/services/retention-policy.service'),data_masking_retention_policy_1=require(a54_0x5cdac6(0x176)),retrieve_metadata_controller_1=require(a54_0x5cdac6(0x169)),tracking_metadata_controller_1=require(a54_0x5cdac6(0x178)),b2c_controller_1=require(a54_0x5cdac6(0x172)),PORT=process[a54_0x5cdac6(0x157)][a54_0x5cdac6(0x153)]?parseInt(process[a54_0x5cdac6(0x157)][a54_0x5cdac6(0x153)]):0xbb8;async function bootstrap(){const _0x497405=a54_0x5cdac6,_0x17c0a4=typedi_1[_0x497405(0x173)]['get'](server_1['Server']);salesforce_credentials_service_1[_0x497405(0x162)][_0x497405(0x166)](),_0x17c0a4[_0x497405(0x16d)](proxy_controller_1[_0x497405(0x159)],info_controller_1[_0x497405(0x164)],functions_controller_1['FunctionsController'],git_controller_1[_0x497405(0x15f)],veeva_vault_controller_1['VeevaVaultController'],data_masking_controller_1[_0x497405(0x170)],retrieve_metadata_controller_1['RetrieveMetadataController'],tracking_metadata_controller_1[_0x497405(0x17e)],b2c_controller_1['B2CController']),await _0x17c0a4[_0x497405(0x17d)](PORT);const _0x39b683=new retention_policy_service_1[(_0x497405(0x15c))]([new data_masking_retention_policy_1[(_0x497405(0x174))]()]);_0x39b683['startScheduler']();}(0x0,pre_bootstrap_1[a54_0x5cdac6(0x154)])()['then'](bootstrap);