function a277_0x2221(_0x5c7c31,_0x449b4b){const _0x3ac24a=a277_0x1805();return a277_0x2221=function(_0x66287d,_0x5acf02){_0x66287d=_0x66287d-0x17f;let _0x18052a=_0x3ac24a[_0x66287d];return _0x18052a;},a277_0x2221(_0x5c7c31,_0x449b4b);}const a277_0x38e7b4=a277_0x2221;(function(_0x528eaf,_0x13fe4c){const _0x1dcc8b=a277_0x2221,_0x15528f=_0x528eaf();while(!![]){try{const _0x423b70=-parseInt(_0x1dcc8b(0x1b3))/0x1*(parseInt(_0x1dcc8b(0x194))/0x2)+-parseInt(_0x1dcc8b(0x18d))/0x3*(parseInt(_0x1dcc8b(0x1a5))/0x4)+parseInt(_0x1dcc8b(0x183))/0x5*(parseInt(_0x1dcc8b(0x18e))/0x6)+parseInt(_0x1dcc8b(0x1ac))/0x7*(parseInt(_0x1dcc8b(0x19b))/0x8)+parseInt(_0x1dcc8b(0x195))/0x9+-parseInt(_0x1dcc8b(0x1bc))/0xa+-parseInt(_0x1dcc8b(0x18a))/0xb*(parseInt(_0x1dcc8b(0x1aa))/0xc);if(_0x423b70===_0x13fe4c)break;else _0x15528f['push'](_0x15528f['shift']());}catch(_0x13e77c){_0x15528f['push'](_0x15528f['shift']());}}}(a277_0x1805,0xb9ca0));const a277_0x5acf02=(function(){let _0xa68cc4=!![];return function(_0x235d75,_0x179940){const _0x3b88b0=_0xa68cc4?function(){const _0x198a73=a277_0x2221;if(_0x179940){const _0x576775=_0x179940[_0x198a73(0x1bf)](_0x235d75,arguments);return _0x179940=null,_0x576775;}}:function(){};return _0xa68cc4=![],_0x3b88b0;};}()),a277_0x66287d=a277_0x5acf02(this,function(){const _0xaaef1e=a277_0x2221;return a277_0x66287d[_0xaaef1e(0x1b6)]()[_0xaaef1e(0x186)](_0xaaef1e(0x19a))[_0xaaef1e(0x1b6)]()['constructor'](a277_0x66287d)['search'](_0xaaef1e(0x19a));});a277_0x66287d();'use strict';var __decorate=this&&this[a277_0x38e7b4(0x1c0)]||function(_0x2aa1ff,_0x10f380,_0x3943b4,_0x32b6e5){const _0x35afa6=a277_0x38e7b4;var _0x4205f5=arguments[_0x35afa6(0x1bd)],_0x5c98b4=_0x4205f5<0x3?_0x10f380:_0x32b6e5===null?_0x32b6e5=Object[_0x35afa6(0x1b4)](_0x10f380,_0x3943b4):_0x32b6e5,_0x655367;if(typeof Reflect===_0x35afa6(0x1b8)&&typeof Reflect['decorate']===_0x35afa6(0x196))_0x5c98b4=Reflect[_0x35afa6(0x1ab)](_0x2aa1ff,_0x10f380,_0x3943b4,_0x32b6e5);else{for(var _0x5d30d3=_0x2aa1ff[_0x35afa6(0x1bd)]-0x1;_0x5d30d3>=0x0;_0x5d30d3--)if(_0x655367=_0x2aa1ff[_0x5d30d3])_0x5c98b4=(_0x4205f5<0x3?_0x655367(_0x5c98b4):_0x4205f5>0x3?_0x655367(_0x10f380,_0x3943b4,_0x5c98b4):_0x655367(_0x10f380,_0x3943b4))||_0x5c98b4;}return _0x4205f5>0x3&&_0x5c98b4&&Object['defineProperty'](_0x10f380,_0x3943b4,_0x5c98b4),_0x5c98b4;},__metadata=this&&this['__metadata']||function(_0x503810,_0x24d6b2){const _0x2246e6=a277_0x38e7b4;if(typeof Reflect===_0x2246e6(0x1b8)&&typeof Reflect[_0x2246e6(0x19f)]===_0x2246e6(0x196))return Reflect['metadata'](_0x503810,_0x24d6b2);},SalesforceLogger3_1;Object[a277_0x38e7b4(0x1b2)](exports,a277_0x38e7b4(0x19c),{'value':!![]}),exports['SalesforceLogger3']=void 0x0;const typedi_1=require('typedi'),constants_1=require(a277_0x38e7b4(0x188)),core_1=require(a277_0x38e7b4(0x1ae)),salesforce_error_1=require(a277_0x38e7b4(0x19d)),create_request_util_1=require(a277_0x38e7b4(0x185)),salesforce_auth_service_1=require(a277_0x38e7b4(0x187)),salesforce_rest_service_1=require(a277_0x38e7b4(0x1a7)),bad_request_error_1=require(a277_0x38e7b4(0x1ad)),errors_1=require('../../../../constants/errors'),LOGG_TYPES={'info':a277_0x38e7b4(0x1a8),'warning':a277_0x38e7b4(0x182),'error':'ERROR'};let SalesforceLogger3=SalesforceLogger3_1=class SalesforceLogger3{constructor(_0x32f204){const _0xe89039=a277_0x38e7b4;this[_0xe89039(0x191)]=_0x32f204,this['request']=(0x0,create_request_util_1[_0xe89039(0x17f)])(typedi_1[_0xe89039(0x1a3)]['get'](salesforce_auth_service_1[_0xe89039(0x192)])),this[_0xe89039(0x1bb)]=new core_1[(_0xe89039(0x1af))](SalesforceLogger3_1[_0xe89039(0x1be)]),this[_0xe89039(0x1a1)]=[];}[a277_0x38e7b4(0x1b9)](){const _0x659db9=a277_0x38e7b4;return this[_0x659db9(0x191)];}[a277_0x38e7b4(0x181)](_0x4f4894){this['loggerId']=_0x4f4894;}async['send'](){const _0x503c24=a277_0x38e7b4;try{if(!this[_0x503c24(0x191)])return;const _0x4cb34d=this['_messages'];this[_0x503c24(0x1a1)]=[],this['loggerId']&&_0x4cb34d[_0x503c24(0x1bd)]&&await this[_0x503c24(0x1c1)][_0x503c24(0x184)](_0x503c24(0x199)+(constants_1[_0x503c24(0x1c3)]?'':_0x503c24(0x1b5))+_0x503c24(0x189),{'messages':_0x4cb34d,'loggerId':this[_0x503c24(0x191)]});}catch(_0x5cffa9){throw new salesforce_error_1[(_0x503c24(0x1a9))](_0x5cffa9);}}[a277_0x38e7b4(0x190)](_0xa7ef1d){const _0x2cae03=a277_0x38e7b4;return this[_0x2cae03(0x1bb)][_0x2cae03(0x190)](_0x2cae03(0x1b0),'[INFO]\x20'+_0xa7ef1d),this[_0x2cae03(0x1a1)]['push']({'timestamp':Date[_0x2cae03(0x1a6)](),'type':LOGG_TYPES[_0x2cae03(0x1b1)],'message':_0xa7ef1d}),this;}[a277_0x38e7b4(0x180)](_0x5ba456){const _0x1d103b=a277_0x38e7b4;return this[_0x1d103b(0x1bb)]['log']('[message]\x20%s',_0x1d103b(0x193)+_0x5ba456),this[_0x1d103b(0x1a1)][_0x1d103b(0x1c2)]({'timestamp':Date[_0x1d103b(0x1a6)](),'type':LOGG_TYPES[_0x1d103b(0x180)],'message':_0x5ba456}),this;}['error'](_0x36c311){const _0x356991=a277_0x38e7b4;return this[_0x356991(0x1bb)][_0x356991(0x197)]('[message]\x20%s',_0x356991(0x198)+_0x36c311),this['_messages']['push']({'timestamp':Date[_0x356991(0x1a6)](),'type':LOGG_TYPES[_0x356991(0x197)],'message':_0x36c311}),this;}static async[a277_0x38e7b4(0x18c)](_0x5d4280){const _0x40b790=a277_0x38e7b4;if(!_0x5d4280)throw new Error(errors_1[_0x40b790(0x1a0)]);const _0x13f8dc=typedi_1[_0x40b790(0x1a3)][_0x40b790(0x1a2)](salesforce_rest_service_1['SalesforceRestService']);try{return await _0x13f8dc['post'](constants_1[_0x40b790(0x1a4)]+_0x40b790(0x19e),{[constants_1[_0x40b790(0x1a4)]+_0x40b790(0x1b7)]:_0x5d4280});}catch(_0x24cb27){throw new bad_request_error_1[(_0x40b790(0x18f))](_0x24cb27);}}};SalesforceLogger3=SalesforceLogger3_1=__decorate([(0x0,typedi_1[a277_0x38e7b4(0x1ba)])(),__metadata('design:paramtypes',[String])],SalesforceLogger3),exports[a277_0x38e7b4(0x18b)]=SalesforceLogger3;function a277_0x1805(){const _0x4d91cd=['INFO','SalesforceError','76308mxFvLI','decorate','7rEbJJU','../../../../core/errors/bad-request.error','../../../../core','Logger','[message]\x20%s','info','defineProperty','1124zOvAWI','getOwnPropertyDescriptor','/flosum_git','toString','Type__c','object','getLoggerId','Service','logger','2505550eNVNjW','length','name','apply','__decorate','request','push','IGNORE_FLOSUM_GIT_NAMESPACE','createSalesforceRequest','warning','setLoggerId','WARNING','5pmzEox','post','../utils/create-request.util','search','./salesforce-auth.service','../../../../constants','/logger','1122qrCCBR','SalesforceLogger3','createLoggerId','701205MsPKGb','1368366HAeBnk','BadRequestError','log','loggerId','SalesforceAuthService','[WARNING]\x20','26ENnkaO','6863418yKKdPI','function','error','[ERROR]\x20','services/apexrest','(((.+)+)+)+$','7342792RsjcRU','__esModule','../errors/salesforce.error','Log__c','metadata','ERR_INVALID_LOGGER_TYPE','_messages','get','Container','FLOSUM_GIT_NAMESPACE','4tuQBXP','now','./salesforce-rest.service'];a277_0x1805=function(){return _0x4d91cd;};return a277_0x1805();}