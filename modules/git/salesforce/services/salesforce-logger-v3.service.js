const a277_0x4b003a=a277_0x612a;(function(_0xf33b33,_0x17bfcf){const _0x27b0ab=a277_0x612a,_0x15d5f2=_0xf33b33();while(!![]){try{const _0x1fc346=parseInt(_0x27b0ab(0x88))/0x1+parseInt(_0x27b0ab(0xa2))/0x2*(parseInt(_0x27b0ab(0xb2))/0x3)+-parseInt(_0x27b0ab(0x87))/0x4+parseInt(_0x27b0ab(0x7f))/0x5*(parseInt(_0x27b0ab(0xbe))/0x6)+parseInt(_0x27b0ab(0x9c))/0x7*(-parseInt(_0x27b0ab(0x83))/0x8)+parseInt(_0x27b0ab(0x86))/0x9*(-parseInt(_0x27b0ab(0x98))/0xa)+-parseInt(_0x27b0ab(0xac))/0xb;if(_0x1fc346===_0x17bfcf)break;else _0x15d5f2['push'](_0x15d5f2['shift']());}catch(_0x12e78d){_0x15d5f2['push'](_0x15d5f2['shift']());}}}(a277_0x22df,0x49cc0));const a277_0xa041e7=(function(){let _0x3e75cc=!![];return function(_0x453c8f,_0x5b2f90){const _0x3a0f81=_0x3e75cc?function(){if(_0x5b2f90){const _0xafc473=_0x5b2f90['apply'](_0x453c8f,arguments);return _0x5b2f90=null,_0xafc473;}}:function(){};return _0x3e75cc=![],_0x3a0f81;};}()),a277_0x5a96a2=a277_0xa041e7(this,function(){const _0x5d8a25=a277_0x612a;return a277_0x5a96a2['toString']()[_0x5d8a25(0xbc)](_0x5d8a25(0x93))['toString']()[_0x5d8a25(0x82)](a277_0x5a96a2)['search']('(((.+)+)+)+$');});a277_0x5a96a2();'use strict';var __decorate=this&&this[a277_0x4b003a(0xbb)]||function(_0x53d31b,_0x56b202,_0x1d53bb,_0x176dcb){const _0x957791=a277_0x4b003a;var _0x543593=arguments[_0x957791(0x81)],_0x2f639b=_0x543593<0x3?_0x56b202:_0x176dcb===null?_0x176dcb=Object[_0x957791(0xa9)](_0x56b202,_0x1d53bb):_0x176dcb,_0xb20cd3;if(typeof Reflect===_0x957791(0xaa)&&typeof Reflect[_0x957791(0xa5)]===_0x957791(0x8d))_0x2f639b=Reflect[_0x957791(0xa5)](_0x53d31b,_0x56b202,_0x1d53bb,_0x176dcb);else{for(var _0x21e802=_0x53d31b[_0x957791(0x81)]-0x1;_0x21e802>=0x0;_0x21e802--)if(_0xb20cd3=_0x53d31b[_0x21e802])_0x2f639b=(_0x543593<0x3?_0xb20cd3(_0x2f639b):_0x543593>0x3?_0xb20cd3(_0x56b202,_0x1d53bb,_0x2f639b):_0xb20cd3(_0x56b202,_0x1d53bb))||_0x2f639b;}return _0x543593>0x3&&_0x2f639b&&Object['defineProperty'](_0x56b202,_0x1d53bb,_0x2f639b),_0x2f639b;},__metadata=this&&this[a277_0x4b003a(0xa6)]||function(_0x12b90f,_0x540dfd){const _0x30a034=a277_0x4b003a;if(typeof Reflect==='object'&&typeof Reflect[_0x30a034(0x8e)]===_0x30a034(0x8d))return Reflect[_0x30a034(0x8e)](_0x12b90f,_0x540dfd);},SalesforceLogger3_1;Object[a277_0x4b003a(0x8f)](exports,a277_0x4b003a(0xba),{'value':!![]}),exports[a277_0x4b003a(0x85)]=void 0x0;const typedi_1=require(a277_0x4b003a(0x99)),constants_1=require(a277_0x4b003a(0xaf)),core_1=require(a277_0x4b003a(0xb4)),salesforce_error_1=require(a277_0x4b003a(0x8a)),create_request_util_1=require('../utils/create-request.util'),salesforce_auth_service_1=require(a277_0x4b003a(0x91)),salesforce_rest_service_1=require(a277_0x4b003a(0xa4)),bad_request_error_1=require(a277_0x4b003a(0x9f)),errors_1=require(a277_0x4b003a(0x97)),LOGG_TYPES={'info':a277_0x4b003a(0xb0),'warning':a277_0x4b003a(0xb8),'error':a277_0x4b003a(0xb9)};let SalesforceLogger3=SalesforceLogger3_1=class SalesforceLogger3{constructor(_0x37dc01){const _0x29d7f2=a277_0x4b003a;this[_0x29d7f2(0xb5)]=_0x37dc01,this[_0x29d7f2(0x7c)]=(0x0,create_request_util_1['createSalesforceRequest'])(typedi_1[_0x29d7f2(0x7d)]['get'](salesforce_auth_service_1[_0x29d7f2(0xad)])),this[_0x29d7f2(0x84)]=new core_1['Logger'](SalesforceLogger3_1[_0x29d7f2(0x9d)]),this[_0x29d7f2(0x80)]=[];}[a277_0x4b003a(0x89)](){const _0x1ee24d=a277_0x4b003a;return this[_0x1ee24d(0xb5)];}['setLoggerId'](_0x2c407b){this['loggerId']=_0x2c407b;}async[a277_0x4b003a(0x8c)](){const _0x2eb306=a277_0x4b003a;try{if(!this[_0x2eb306(0xb5)])return;const _0x3a019c=this[_0x2eb306(0x80)];this['_messages']=[],this[_0x2eb306(0xb5)]&&_0x3a019c[_0x2eb306(0x81)]&&await this['request'][_0x2eb306(0x7e)](_0x2eb306(0x95)+(constants_1[_0x2eb306(0x9a)]?'':'/flosum_git')+_0x2eb306(0x9b),{'messages':_0x3a019c,'loggerId':this[_0x2eb306(0xb5)]});}catch(_0x127cc3){throw new salesforce_error_1['SalesforceError'](_0x127cc3);}}[a277_0x4b003a(0x9e)](_0x155595){const _0x4a969a=a277_0x4b003a;return this[_0x4a969a(0x84)]['log'](_0x4a969a(0xb3),_0x4a969a(0xae)+_0x155595),this['_messages'][_0x4a969a(0xab)]({'timestamp':Date[_0x4a969a(0x94)](),'type':LOGG_TYPES[_0x4a969a(0x7b)],'message':_0x155595}),this;}[a277_0x4b003a(0xa0)](_0x4939f9){const _0x2f3082=a277_0x4b003a;return this[_0x2f3082(0x84)][_0x2f3082(0x9e)](_0x2f3082(0xb3),_0x2f3082(0x90)+_0x4939f9),this['_messages']['push']({'timestamp':Date[_0x2f3082(0x94)](),'type':LOGG_TYPES[_0x2f3082(0xa0)],'message':_0x4939f9}),this;}[a277_0x4b003a(0xbd)](_0x516385){const _0x2585f1=a277_0x4b003a;return this[_0x2585f1(0x84)]['error']('[message]\x20%s',_0x2585f1(0x8b)+_0x516385),this[_0x2585f1(0x80)][_0x2585f1(0xab)]({'timestamp':Date[_0x2585f1(0x94)](),'type':LOGG_TYPES[_0x2585f1(0xbd)],'message':_0x516385}),this;}static async[a277_0x4b003a(0xb6)](_0x167510){const _0x33b0ab=a277_0x4b003a;if(!_0x167510)throw new Error(errors_1[_0x33b0ab(0xb1)]);const _0x339b4e=typedi_1[_0x33b0ab(0x7d)][_0x33b0ab(0xa8)](salesforce_rest_service_1[_0x33b0ab(0xa1)]);try{return await _0x339b4e[_0x33b0ab(0x7e)](constants_1['FLOSUM_GIT_NAMESPACE']+'Log__c',{[constants_1[_0x33b0ab(0xa7)]+_0x33b0ab(0x92)]:_0x167510});}catch(_0x351500){throw new bad_request_error_1[(_0x33b0ab(0x96))](_0x351500);}}};function a277_0x612a(_0x7b15ae,_0x49e5d2){const _0x3f2d42=a277_0x22df();return a277_0x612a=function(_0x5a96a2,_0xa041e7){_0x5a96a2=_0x5a96a2-0x7b;let _0x22dfd6=_0x3f2d42[_0x5a96a2];return _0x22dfd6;},a277_0x612a(_0x7b15ae,_0x49e5d2);}SalesforceLogger3=SalesforceLogger3_1=__decorate([(0x0,typedi_1[a277_0x4b003a(0xa3)])(),__metadata(a277_0x4b003a(0xb7),[String])],SalesforceLogger3),exports['SalesforceLogger3']=SalesforceLogger3;function a277_0x22df(){const _0x1563d2=['../../../../core/errors/bad-request.error','warning','SalesforceRestService','198278ptJJYS','Service','./salesforce-rest.service','decorate','__metadata','FLOSUM_GIT_NAMESPACE','get','getOwnPropertyDescriptor','object','push','2706748UldahC','SalesforceAuthService','[INFO]\x20','../../../../constants','INFO','ERR_INVALID_LOGGER_TYPE','15RxBgXB','[message]\x20%s','../../../../core','loggerId','createLoggerId','design:paramtypes','WARNING','ERROR','__esModule','__decorate','search','error','2778aoBQPP','info','request','Container','post','4605vUBMZs','_messages','length','constructor','1763648YOAnNB','logger','SalesforceLogger3','1206mFWlbq','717944dMeRmZ','584676BVOhDE','getLoggerId','../errors/salesforce.error','[ERROR]\x20','send','function','metadata','defineProperty','[WARNING]\x20','./salesforce-auth.service','Type__c','(((.+)+)+)+$','now','services/apexrest','BadRequestError','../../../../constants/errors','41680tOfOFv','typedi','IGNORE_FLOSUM_GIT_NAMESPACE','/logger','7DQedYJ','name','log'];a277_0x22df=function(){return _0x1563d2;};return a277_0x22df();}