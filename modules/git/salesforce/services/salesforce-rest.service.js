const a278_0x14fc89=a278_0x29ad;function a278_0x29ad(_0x34b9a0,_0x1a9eed){const _0x49fa93=a278_0x1cd6();return a278_0x29ad=function(_0x388b8,_0x172bcb){_0x388b8=_0x388b8-0x146;let _0x1cd66d=_0x49fa93[_0x388b8];return _0x1cd66d;},a278_0x29ad(_0x34b9a0,_0x1a9eed);}(function(_0x17e443,_0x597fb2){const _0x597ad=a278_0x29ad,_0x2b61e6=_0x17e443();while(!![]){try{const _0x595db7=parseInt(_0x597ad(0x14c))/0x1+-parseInt(_0x597ad(0x14d))/0x2+-parseInt(_0x597ad(0x166))/0x3+parseInt(_0x597ad(0x151))/0x4+parseInt(_0x597ad(0x15f))/0x5+-parseInt(_0x597ad(0x15e))/0x6+parseInt(_0x597ad(0x15d))/0x7*(parseInt(_0x597ad(0x165))/0x8);if(_0x595db7===_0x597fb2)break;else _0x2b61e6['push'](_0x2b61e6['shift']());}catch(_0x2f3d34){_0x2b61e6['push'](_0x2b61e6['shift']());}}}(a278_0x1cd6,0x85d9c));const a278_0x172bcb=(function(){let _0x1a3fd0=!![];return function(_0x1b6f4e,_0x4fc3ef){const _0x384ac0=_0x1a3fd0?function(){const _0x1dc6a7=a278_0x29ad;if(_0x4fc3ef){const _0x50f571=_0x4fc3ef[_0x1dc6a7(0x15c)](_0x1b6f4e,arguments);return _0x4fc3ef=null,_0x50f571;}}:function(){};return _0x1a3fd0=![],_0x384ac0;};}()),a278_0x388b8=a278_0x172bcb(this,function(){const _0x4bcdd9=a278_0x29ad;return a278_0x388b8['toString']()[_0x4bcdd9(0x164)](_0x4bcdd9(0x163))['toString']()['constructor'](a278_0x388b8)[_0x4bcdd9(0x164)](_0x4bcdd9(0x163));});a278_0x388b8();'use strict';var __decorate=this&&this[a278_0x14fc89(0x147)]||function(_0x3f7b73,_0x59cc05,_0x452de8,_0x2c5c07){const _0x2a1d92=a278_0x14fc89;var _0x2e662a=arguments[_0x2a1d92(0x14a)],_0x4e8df8=_0x2e662a<0x3?_0x59cc05:_0x2c5c07===null?_0x2c5c07=Object[_0x2a1d92(0x149)](_0x59cc05,_0x452de8):_0x2c5c07,_0x343145;if(typeof Reflect==='object'&&typeof Reflect[_0x2a1d92(0x15b)]===_0x2a1d92(0x160))_0x4e8df8=Reflect['decorate'](_0x3f7b73,_0x59cc05,_0x452de8,_0x2c5c07);else{for(var _0x17fdee=_0x3f7b73[_0x2a1d92(0x14a)]-0x1;_0x17fdee>=0x0;_0x17fdee--)if(_0x343145=_0x3f7b73[_0x17fdee])_0x4e8df8=(_0x2e662a<0x3?_0x343145(_0x4e8df8):_0x2e662a>0x3?_0x343145(_0x59cc05,_0x452de8,_0x4e8df8):_0x343145(_0x59cc05,_0x452de8))||_0x4e8df8;}return _0x2e662a>0x3&&_0x4e8df8&&Object[_0x2a1d92(0x154)](_0x59cc05,_0x452de8,_0x4e8df8),_0x4e8df8;},__metadata=this&&this[a278_0x14fc89(0x148)]||function(_0x2c9f30,_0x227240){const _0x5d52dc=a278_0x14fc89;if(typeof Reflect==='object'&&typeof Reflect[_0x5d52dc(0x15a)]===_0x5d52dc(0x160))return Reflect[_0x5d52dc(0x15a)](_0x2c9f30,_0x227240);};Object[a278_0x14fc89(0x154)](exports,a278_0x14fc89(0x153),{'value':!![]}),exports[a278_0x14fc89(0x162)]=void 0x0;const constants_1=require('../../../../constants'),typedi_1=require(a278_0x14fc89(0x146)),salesforce_error_1=require('../errors/salesforce.error'),create_request_util_1=require(a278_0x14fc89(0x161)),salesforce_auth_service_1=require('./salesforce-auth.service');let SalesforceRestService=class SalesforceRestService{constructor(_0x3156ef){this['request']=(0x0,create_request_util_1['createSalesforceRequest'])(_0x3156ef);}async[a278_0x14fc89(0x157)](_0x3ac878,_0x1920b2){const _0x5927e2=a278_0x14fc89;try{await this[_0x5927e2(0x155)][_0x5927e2(0x157)]('services/data/'+constants_1['SALESFORCE_API_VERSION']+_0x5927e2(0x152)+_0x3ac878+'/'+_0x1920b2);}catch(_0x1e5336){throw new salesforce_error_1[(_0x5927e2(0x167))](_0x1e5336);}}async[a278_0x14fc89(0x150)](_0x2f0c48,_0x1d6a17){const _0x3774b1=a278_0x14fc89;try{const _0xb8aaad=await this[_0x3774b1(0x155)]['get'](_0x3774b1(0x14f)+constants_1['SALESFORCE_API_VERSION']+_0x3774b1(0x152)+_0x2f0c48+'/'+_0x1d6a17);return _0xb8aaad['data'];}catch(_0xa32b9b){throw new salesforce_error_1[(_0x3774b1(0x167))](_0xa32b9b);}}async[a278_0x14fc89(0x14b)](_0x4911d6,_0x5a0cba){const _0x3213b6=a278_0x14fc89;try{const _0x49d300=await this['request'][_0x3213b6(0x14b)](_0x3213b6(0x14f)+constants_1['SALESFORCE_API_VERSION']+_0x3213b6(0x152)+_0x4911d6,_0x5a0cba);return _0x49d300[_0x3213b6(0x14e)]['id'];}catch(_0x478637){throw new salesforce_error_1[(_0x3213b6(0x167))](_0x478637);}}async[a278_0x14fc89(0x158)](_0xf34020,_0x14b603,_0x2e8443){const _0x5694cd=a278_0x14fc89;try{await this[_0x5694cd(0x155)][_0x5694cd(0x158)]('services/data/'+constants_1[_0x5694cd(0x168)]+_0x5694cd(0x152)+_0xf34020+'/'+_0x14b603,_0x2e8443);}catch(_0x5e8ca0){throw new salesforce_error_1[(_0x5694cd(0x167))](_0x5e8ca0);}}};SalesforceRestService=__decorate([(0x0,typedi_1[a278_0x14fc89(0x156)])(),__metadata('design:paramtypes',[salesforce_auth_service_1[a278_0x14fc89(0x159)]])],SalesforceRestService),exports[a278_0x14fc89(0x162)]=SalesforceRestService;function a278_0x1cd6(){const _0x2874a3=['services/data/','get','2549028SbskPC','/sobjects/','__esModule','defineProperty','request','Service','delete','patch','SalesforceAuthService','metadata','decorate','apply','305753ujAElh','765564tCgPuy','1009475wbGKRE','function','../utils/create-request.util','SalesforceRestService','(((.+)+)+)+$','search','64JXUawR','2764641nfLiDC','SalesforceError','SALESFORCE_API_VERSION','typedi','__decorate','__metadata','getOwnPropertyDescriptor','length','post','413789uuKNLp','9960rnnNuo','data'];a278_0x1cd6=function(){return _0x2874a3;};return a278_0x1cd6();}