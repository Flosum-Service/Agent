const a54_0x11ccc5=a54_0x2322;function a54_0x3a95(){const _0x1d7806=['./modules/functions/functions.controller','2670BafIBK','1628LwbGFJ','4353UNfmhy','19236tXCMvz','2670435KyarsX','7505yfVqox','env','startScheduler','ProxyController','default','588YUUBIj','DataMaskingController','defineProperty','FunctionsController','then','search','__esModule','get','DataMaskingRetentionPolicy','586DemrKa','./modules/b2c/b2c.controller','332316kuuyuK','9000808jNzWYJ','PORT','./pre-bootstrap','60258jCWGPM','VeevaVaultController','./modules/retrieve-metadata/retrieve-metadata.controller','RetrieveMetadataController','constructor','./modules/veeva-vault/veeva-vault.controller','./modules/info/info.controller','./modules/tracking-metadata/tracking-metadata.controller','./common/env','./modules/git/salesforce/services/salesforce.credentials-service','(((.+)+)+)+$','./modules/data-masking/data-masking.controller','SalesforceCredentialsService','TrackingMetadataController','preBootstrap','Server','B2CController','run','apply','toString','./core/server','RetentionPolicyService'];a54_0x3a95=function(){return _0x1d7806;};return a54_0x3a95();}function a54_0x2322(_0x3001dc,_0x56cf8f){const _0x451d47=a54_0x3a95();return a54_0x2322=function(_0xa53c3d,_0x3e9ae6){_0xa53c3d=_0xa53c3d-0x6d;let _0x3a954e=_0x451d47[_0xa53c3d];return _0x3a954e;},a54_0x2322(_0x3001dc,_0x56cf8f);}(function(_0x31e547,_0x11f847){const _0x301f2b=a54_0x2322,_0x10dbf5=_0x31e547();while(!![]){try{const _0x2f0670=parseInt(_0x301f2b(0x9a))/0x1*(-parseInt(_0x301f2b(0x7b))/0x2)+parseInt(_0x301f2b(0x9c))/0x3+-parseInt(_0x301f2b(0x99))/0x4*(-parseInt(_0x301f2b(0x6d))/0x5)+-parseInt(_0x301f2b(0x72))/0x6*(-parseInt(_0x301f2b(0x9b))/0x7)+-parseInt(_0x301f2b(0x7e))/0x8+parseInt(_0x301f2b(0x7d))/0x9+parseInt(_0x301f2b(0x98))/0xa*(parseInt(_0x301f2b(0x81))/0xb);if(_0x2f0670===_0x11f847)break;else _0x10dbf5['push'](_0x10dbf5['shift']());}catch(_0xb90fec){_0x10dbf5['push'](_0x10dbf5['shift']());}}}(a54_0x3a95,0xd4400));const a54_0x3e9ae6=(function(){let _0x2d2937=!![];return function(_0x19f190,_0x3f36a9){const _0x14d7a7=_0x2d2937?function(){const _0x68a161=a54_0x2322;if(_0x3f36a9){const _0x3d67ae=_0x3f36a9[_0x68a161(0x93)](_0x19f190,arguments);return _0x3f36a9=null,_0x3d67ae;}}:function(){};return _0x2d2937=![],_0x14d7a7;};}()),a54_0xa53c3d=a54_0x3e9ae6(this,function(){const _0x53be2f=a54_0x2322;return a54_0xa53c3d[_0x53be2f(0x94)]()[_0x53be2f(0x77)](_0x53be2f(0x8b))[_0x53be2f(0x94)]()[_0x53be2f(0x85)](a54_0xa53c3d)[_0x53be2f(0x77)](_0x53be2f(0x8b));});a54_0xa53c3d();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x2b12f4){const _0xc85fd8=a54_0x2322;return _0x2b12f4&&_0x2b12f4[_0xc85fd8(0x78)]?_0x2b12f4:{'default':_0x2b12f4};};Object[a54_0x11ccc5(0x74)](exports,a54_0x11ccc5(0x78),{'value':!![]}),require('reflect-metadata'),require(a54_0x11ccc5(0x89));const typedi_1=__importDefault(require('typedi')),server_1=require(a54_0x11ccc5(0x95)),proxy_controller_1=require('./modules/proxy/proxy.controller'),info_controller_1=require(a54_0x11ccc5(0x87)),pre_bootstrap_1=require(a54_0x11ccc5(0x80)),salesforce_credentials_service_1=require(a54_0x11ccc5(0x8a)),git_controller_1=require('./modules/git/git.controller'),functions_controller_1=require(a54_0x11ccc5(0x97)),veeva_vault_controller_1=require(a54_0x11ccc5(0x86)),data_masking_controller_1=require(a54_0x11ccc5(0x8c)),retention_policy_service_1=require('./modules/retention-policy/services/retention-policy.service'),data_masking_retention_policy_1=require('./modules/retention-policy/classes/data-masking-retention-policy'),retrieve_metadata_controller_1=require(a54_0x11ccc5(0x83)),tracking_metadata_controller_1=require(a54_0x11ccc5(0x88)),b2c_controller_1=require(a54_0x11ccc5(0x7c)),PORT=process[a54_0x11ccc5(0x6e)]['PORT']?parseInt(process[a54_0x11ccc5(0x6e)][a54_0x11ccc5(0x7f)]):0xbb8;async function bootstrap(){const _0x2fd8ea=a54_0x11ccc5,_0x188bbb=typedi_1[_0x2fd8ea(0x71)][_0x2fd8ea(0x79)](server_1[_0x2fd8ea(0x90)]);salesforce_credentials_service_1[_0x2fd8ea(0x8d)]['setCredentials'](),_0x188bbb['useControllers'](proxy_controller_1[_0x2fd8ea(0x70)],info_controller_1['InfoController'],functions_controller_1[_0x2fd8ea(0x75)],git_controller_1['GitController'],veeva_vault_controller_1[_0x2fd8ea(0x82)],data_masking_controller_1[_0x2fd8ea(0x73)],retrieve_metadata_controller_1[_0x2fd8ea(0x84)],tracking_metadata_controller_1[_0x2fd8ea(0x8e)],b2c_controller_1[_0x2fd8ea(0x91)]),await _0x188bbb[_0x2fd8ea(0x92)](PORT);const _0x1f1c87=new retention_policy_service_1[(_0x2fd8ea(0x96))]([new data_masking_retention_policy_1[(_0x2fd8ea(0x7a))]()]);_0x1f1c87[_0x2fd8ea(0x6f)]();}(0x0,pre_bootstrap_1[a54_0x11ccc5(0x8f)])()[a54_0x11ccc5(0x76)](bootstrap);