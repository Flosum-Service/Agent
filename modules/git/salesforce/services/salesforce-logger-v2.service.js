const a198_0x58e061=a198_0x2c24;(function(_0xab191e,_0x506a95){const _0x4a43cb=a198_0x2c24,_0x526f08=_0xab191e();while(!![]){try{const _0x41a8d8=-parseInt(_0x4a43cb(0x12b))/0x1+-parseInt(_0x4a43cb(0x128))/0x2*(parseInt(_0x4a43cb(0x133))/0x3)+parseInt(_0x4a43cb(0x121))/0x4+-parseInt(_0x4a43cb(0x124))/0x5+-parseInt(_0x4a43cb(0x119))/0x6+-parseInt(_0x4a43cb(0x140))/0x7*(-parseInt(_0x4a43cb(0x13a))/0x8)+parseInt(_0x4a43cb(0x120))/0x9;if(_0x41a8d8===_0x506a95)break;else _0x526f08['push'](_0x526f08['shift']());}catch(_0x5f028e){_0x526f08['push'](_0x526f08['shift']());}}}(a198_0x508f,0xb790b));const a198_0xa016a=(function(){let _0x442602=!![];return function(_0x530dae,_0x2496db){const _0x46a9a5=_0x442602?function(){if(_0x2496db){const _0x10a05b=_0x2496db['apply'](_0x530dae,arguments);return _0x2496db=null,_0x10a05b;}}:function(){};return _0x442602=![],_0x46a9a5;};}()),a198_0x541a8f=a198_0xa016a(this,function(){const _0x138dd6=a198_0x2c24;return a198_0x541a8f[_0x138dd6(0x138)]()[_0x138dd6(0x13f)](_0x138dd6(0x139))[_0x138dd6(0x138)]()['constructor'](a198_0x541a8f)[_0x138dd6(0x13f)](_0x138dd6(0x139));});function a198_0x2c24(_0x324288,_0x4e974f){const _0xbaef36=a198_0x508f();return a198_0x2c24=function(_0x541a8f,_0xa016a){_0x541a8f=_0x541a8f-0x119;let _0x508f0a=_0xbaef36[_0x541a8f];return _0x508f0a;},a198_0x2c24(_0x324288,_0x4e974f);}a198_0x541a8f();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x251181){const _0x55bac2=a198_0x2c24;return _0x251181&&_0x251181[_0x55bac2(0x141)]?_0x251181:{'default':_0x251181};};Object[a198_0x58e061(0x123)](exports,a198_0x58e061(0x141),{'value':!![]}),exports['SalesforceLogger2']=void 0x0;const typedi_1=__importDefault(require(a198_0x58e061(0x129))),constants_1=require('../../../../constants'),core_1=require(a198_0x58e061(0x130)),salesforce_error_1=require(a198_0x58e061(0x137)),create_request_util_1=require(a198_0x58e061(0x13d)),salesforce_auth_service_1=require(a198_0x58e061(0x11a)),salesforce_rest_service_1=require(a198_0x58e061(0x144));function a198_0x508f(){const _0x2f7160=['FLOSUM_GIT_NAMESPACE','delete','1405182QQKGeW','./salesforce-auth.service','log','createLogger','Log__c','removeLogger','SalesforceError','18347787LmVuBy','2948644tyNBkQ','get','defineProperty','1860530rpZGdU','createSalesforceRequest','push','prefix','2cuBAUx','typedi','[message]\x20%s','535793KZrmUi','logger','getLoggerId','send','getPrefix','../../../../core','splice','default','3748884YiFNNo','/flosum_git','setLoggerId','services/apexrest','../errors/salesforce.error','toString','(((.+)+)+)+$','326936oijEzA','SalesforceAuthService','request','../utils/create-request.util','SalesforceRestService','search','63YZZPWC','__esModule','messages','length','./salesforce-rest.service','name','loggerId'];a198_0x508f=function(){return _0x2f7160;};return a198_0x508f();}class SalesforceLogger2{constructor(_0x3d65b2,_0x3c69e0){const _0x252ba9=a198_0x58e061;this[_0x252ba9(0x146)]=_0x3d65b2,this[_0x252ba9(0x127)]=_0x3c69e0,this[_0x252ba9(0x13c)]=(0x0,create_request_util_1[_0x252ba9(0x125)])(typedi_1[_0x252ba9(0x132)][_0x252ba9(0x122)](salesforce_auth_service_1[_0x252ba9(0x13b)])),this[_0x252ba9(0x12c)]=new core_1['Logger'](SalesforceLogger2[_0x252ba9(0x145)]),this[_0x252ba9(0x142)]=[];}[a198_0x58e061(0x135)](_0x36138e){const _0x54b7c7=a198_0x58e061;this[_0x54b7c7(0x146)]=_0x36138e;}[a198_0x58e061(0x12d)](){return this['loggerId']||'';}[a198_0x58e061(0x12f)](){const _0x6d21a5=a198_0x58e061;return this[_0x6d21a5(0x127)]||'';}async[a198_0x58e061(0x12e)](){const _0x3f19a4=a198_0x58e061;try{if(!this['loggerId'])return;const _0x663e42=this[_0x3f19a4(0x142)][_0x3f19a4(0x131)](0x0)['map'](_0x1bf9f5=>''+(this[_0x3f19a4(0x127)]||'')+_0x1bf9f5);this[_0x3f19a4(0x146)]&&_0x663e42[_0x3f19a4(0x143)]&&await this['request']['post'](_0x3f19a4(0x136)+(constants_1['IGNORE_FLOSUM_GIT_NAMESPACE']?'':_0x3f19a4(0x134))+'/logger',{'messages':_0x663e42,'loggerId':this['loggerId']});}catch(_0x41aebf){throw new salesforce_error_1[(_0x3f19a4(0x11f))](_0x41aebf);}}[a198_0x58e061(0x11b)](_0x3532c4){const _0x4882a1=a198_0x58e061;return this[_0x4882a1(0x12c)][_0x4882a1(0x11b)](_0x4882a1(0x12a),_0x3532c4),this[_0x4882a1(0x142)][_0x4882a1(0x126)](_0x3532c4),this;}static async[a198_0x58e061(0x11c)](){const _0x115621=a198_0x58e061;try{const _0x19f871=typedi_1[_0x115621(0x132)][_0x115621(0x122)](salesforce_rest_service_1[_0x115621(0x13e)]),_0x621aaa=await _0x19f871['post'](constants_1[_0x115621(0x147)]+_0x115621(0x11d),{});return new SalesforceLogger2(_0x621aaa);}catch(_0x2ad238){throw new salesforce_error_1[(_0x115621(0x11f))](_0x2ad238);}}async[a198_0x58e061(0x11e)](){const _0x3c8df0=a198_0x58e061;try{if(!this[_0x3c8df0(0x146)])return;const _0x33b015=typedi_1['default']['get'](salesforce_rest_service_1[_0x3c8df0(0x13e)]);await _0x33b015[_0x3c8df0(0x148)](constants_1['FLOSUM_GIT_NAMESPACE']+_0x3c8df0(0x11d),this['loggerId']),this[_0x3c8df0(0x146)]='',this[_0x3c8df0(0x142)]=[];}catch(_0x16c518){throw new salesforce_error_1[(_0x3c8df0(0x11f))](_0x16c518);}}}exports['SalesforceLogger2']=SalesforceLogger2;