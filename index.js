const a53_0x36cc60=a53_0x50f5;(function(_0x3a0423,_0x43b5d0){const _0x3eb01c=a53_0x50f5,_0x12d122=_0x3a0423();while(!![]){try{const _0x57564a=-parseInt(_0x3eb01c(0xf5))/0x1+-parseInt(_0x3eb01c(0xf8))/0x2+parseInt(_0x3eb01c(0x103))/0x3*(parseInt(_0x3eb01c(0xf2))/0x4)+-parseInt(_0x3eb01c(0xdf))/0x5*(parseInt(_0x3eb01c(0xe2))/0x6)+parseInt(_0x3eb01c(0xea))/0x7+-parseInt(_0x3eb01c(0xf7))/0x8*(-parseInt(_0x3eb01c(0xe7))/0x9)+-parseInt(_0x3eb01c(0xf9))/0xa*(parseInt(_0x3eb01c(0xe8))/0xb);if(_0x57564a===_0x43b5d0)break;else _0x12d122['push'](_0x12d122['shift']());}catch(_0x1afc1d){_0x12d122['push'](_0x12d122['shift']());}}}(a53_0x159b,0xe6b28));const a53_0x360d6f=(function(){let _0x1a8b0c=!![];return function(_0x2d263f,_0x46c1b7){const _0x4bbc54=_0x1a8b0c?function(){if(_0x46c1b7){const _0x52d8f3=_0x46c1b7['apply'](_0x2d263f,arguments);return _0x46c1b7=null,_0x52d8f3;}}:function(){};return _0x1a8b0c=![],_0x4bbc54;};}()),a53_0x5aa395=a53_0x360d6f(this,function(){const _0x2c9444=a53_0x50f5;return a53_0x5aa395[_0x2c9444(0xf4)]()[_0x2c9444(0xfe)](_0x2c9444(0xf1))[_0x2c9444(0xf4)]()[_0x2c9444(0xd8)](a53_0x5aa395)[_0x2c9444(0xfe)]('(((.+)+)+)+$');});a53_0x5aa395();'use strict';var __importDefault=this&&this[a53_0x36cc60(0xfb)]||function(_0x525ac6){const _0x368a47=a53_0x36cc60;return _0x525ac6&&_0x525ac6[_0x368a47(0xe5)]?_0x525ac6:{'default':_0x525ac6};};function a53_0x50f5(_0x7309b,_0x965430){const _0x36e0a3=a53_0x159b();return a53_0x50f5=function(_0x5aa395,_0x360d6f){_0x5aa395=_0x5aa395-0xd8;let _0x159b4b=_0x36e0a3[_0x5aa395];return _0x159b4b;},a53_0x50f5(_0x7309b,_0x965430);}Object[a53_0x36cc60(0xeb)](exports,'__esModule',{'value':!![]}),require(a53_0x36cc60(0xda)),require(a53_0x36cc60(0xe0));const typedi_1=__importDefault(require(a53_0x36cc60(0x100))),server_1=require(a53_0x36cc60(0xe9)),proxy_controller_1=require('./modules/proxy/proxy.controller'),info_controller_1=require(a53_0x36cc60(0xdc)),pre_bootstrap_1=require(a53_0x36cc60(0x101)),salesforce_credentials_service_1=require(a53_0x36cc60(0xee)),git_controller_1=require(a53_0x36cc60(0xf0)),functions_controller_1=require('./modules/functions/functions.controller'),veeva_vault_controller_1=require(a53_0x36cc60(0xec)),data_masking_controller_1=require(a53_0x36cc60(0xf6)),retention_policy_service_1=require('./modules/retention-policy/services/retention-policy.service'),data_masking_retention_policy_1=require(a53_0x36cc60(0x102)),retrieve_metadata_controller_1=require('./modules/retrieve-metadata/retrieve-metadata.controller'),tracking_metadata_controller_1=require(a53_0x36cc60(0xdd)),PORT=process[a53_0x36cc60(0xd9)]['PORT']?parseInt(process[a53_0x36cc60(0xd9)][a53_0x36cc60(0xfd)]):0xbb8;function a53_0x159b(){const _0x5dee9f=['18vlzJIN','132evlIfk','./core/server','705964UHGBqc','defineProperty','./modules/veeva-vault/veeva-vault.controller','ProxyController','./modules/git/salesforce/services/salesforce.credentials-service','then','./modules/git/git.controller','(((.+)+)+)+$','12yhQrtw','RetentionPolicyService','toString','295270GRwMnC','./modules/data-masking/data-masking.controller','6757064GAhlKV','3018620OwScms','298030JaORfe','FunctionsController','__importDefault','VeevaVaultController','PORT','search','GitController','typedi','./pre-bootstrap','./modules/retention-policy/classes/data-masking-retention-policy','1741989NWtegj','default','constructor','env','reflect-metadata','Server','./modules/info/info.controller','./modules/tracking-metadata/tracking-metadata.controller','preBootstrap','5AKybkD','./common/env','DataMaskingRetentionPolicy','2549730dLhkMS','DataMaskingController','InfoController','__esModule','RetrieveMetadataController'];a53_0x159b=function(){return _0x5dee9f;};return a53_0x159b();}async function bootstrap(){const _0x118e9a=a53_0x36cc60,_0x35c59e=typedi_1[_0x118e9a(0x104)]['get'](server_1[_0x118e9a(0xdb)]);salesforce_credentials_service_1['SalesforceCredentialsService']['setCredentials'](),_0x35c59e['useControllers'](proxy_controller_1[_0x118e9a(0xed)],info_controller_1[_0x118e9a(0xe4)],functions_controller_1[_0x118e9a(0xfa)],git_controller_1[_0x118e9a(0xff)],veeva_vault_controller_1[_0x118e9a(0xfc)],data_masking_controller_1[_0x118e9a(0xe3)],retrieve_metadata_controller_1[_0x118e9a(0xe6)],tracking_metadata_controller_1['TrackingMetadataController']),await _0x35c59e['run'](PORT);const _0x29e7af=new retention_policy_service_1[(_0x118e9a(0xf3))]([new data_masking_retention_policy_1[(_0x118e9a(0xe1))]()]);_0x29e7af['startScheduler']();}(0x0,pre_bootstrap_1[a53_0x36cc60(0xde)])()[a53_0x36cc60(0xef)](bootstrap);