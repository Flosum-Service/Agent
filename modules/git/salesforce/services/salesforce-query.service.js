function a240_0x28e8(){const _0x17f0c5=['getRequest','constructor','function','design:paramtypes','SalesforceQueryService','FLOSUM_NAMESPACE','../../../../constants','services/data/','__decorate','3093752lQPHDT','../errors/salesforce.error','decorate','apply','request','16747110XsCbHc','nextRecordsUrl','SalesforceError','1818190VJUdxa','/query/?q=','7674XqyNqW','12901328pvnUnt','SALESFORCE_API_VERSION','get','4902198FtRDzA','137731YSSonU','length','createSalesforceRequest','replace','metadata','Service','../utils/create-request.util','1YmvTex','FLOSUM_GIT_NAMESPACE','search','typedi','defineProperty','getOwnPropertyDescriptor','records','970verRty','push','parseSoqlString','4XnBQZy','object','4585CKAFGS'];a240_0x28e8=function(){return _0x17f0c5;};return a240_0x28e8();}const a240_0x63aeb3=a240_0x3554;(function(_0x45b5a4,_0x2abf7b){const _0x349dc2=a240_0x3554,_0x4e6b64=_0x45b5a4();while(!![]){try{const _0x347a7e=-parseInt(_0x349dc2(0x9c))/0x1*(-parseInt(_0x349dc2(0x86))/0x2)+-parseInt(_0x349dc2(0x94))/0x3+-parseInt(_0x349dc2(0xa6))/0x4*(parseInt(_0x349dc2(0x8e))/0x5)+parseInt(_0x349dc2(0x90))/0x6*(-parseInt(_0x349dc2(0xa8))/0x7)+parseInt(_0x349dc2(0x91))/0x8+parseInt(_0x349dc2(0x8b))/0x9+-parseInt(_0x349dc2(0xa3))/0xa*(parseInt(_0x349dc2(0x95))/0xb);if(_0x347a7e===_0x2abf7b)break;else _0x4e6b64['push'](_0x4e6b64['shift']());}catch(_0x5d0f8c){_0x4e6b64['push'](_0x4e6b64['shift']());}}}(a240_0x28e8,0xece6a));const a240_0x69194f=(function(){let _0x55c04c=!![];return function(_0x5c6413,_0x220f53){const _0x3d3779=_0x55c04c?function(){const _0xe64294=a240_0x3554;if(_0x220f53){const _0x5df2a4=_0x220f53[_0xe64294(0x89)](_0x5c6413,arguments);return _0x220f53=null,_0x5df2a4;}}:function(){};return _0x55c04c=![],_0x3d3779;};}()),a240_0x60e619=a240_0x69194f(this,function(){const _0x35e5ce=a240_0x3554;return a240_0x60e619['toString']()['search']('(((.+)+)+)+$')['toString']()[_0x35e5ce(0x7e)](a240_0x60e619)[_0x35e5ce(0x9e)]('(((.+)+)+)+$');});a240_0x60e619();'use strict';function a240_0x3554(_0x891b3b,_0x4ff662){const _0x130f98=a240_0x28e8();return a240_0x3554=function(_0x60e619,_0x69194f){_0x60e619=_0x60e619-0x7e;let _0x28e8f6=_0x130f98[_0x60e619];return _0x28e8f6;},a240_0x3554(_0x891b3b,_0x4ff662);}var __decorate=this&&this[a240_0x63aeb3(0x85)]||function(_0x3e80e4,_0x272b91,_0x456231,_0x522743){const _0x3c9b3b=a240_0x63aeb3;var _0x4d3587=arguments[_0x3c9b3b(0x96)],_0x18434d=_0x4d3587<0x3?_0x272b91:_0x522743===null?_0x522743=Object[_0x3c9b3b(0xa1)](_0x272b91,_0x456231):_0x522743,_0x8ba233;if(typeof Reflect===_0x3c9b3b(0xa7)&&typeof Reflect[_0x3c9b3b(0x88)]==='function')_0x18434d=Reflect['decorate'](_0x3e80e4,_0x272b91,_0x456231,_0x522743);else{for(var _0x1ca130=_0x3e80e4[_0x3c9b3b(0x96)]-0x1;_0x1ca130>=0x0;_0x1ca130--)if(_0x8ba233=_0x3e80e4[_0x1ca130])_0x18434d=(_0x4d3587<0x3?_0x8ba233(_0x18434d):_0x4d3587>0x3?_0x8ba233(_0x272b91,_0x456231,_0x18434d):_0x8ba233(_0x272b91,_0x456231))||_0x18434d;}return _0x4d3587>0x3&&_0x18434d&&Object[_0x3c9b3b(0xa0)](_0x272b91,_0x456231,_0x18434d),_0x18434d;},__metadata=this&&this['__metadata']||function(_0x730ae1,_0x14892e){const _0x5736a5=a240_0x63aeb3;if(typeof Reflect==='object'&&typeof Reflect[_0x5736a5(0x99)]===_0x5736a5(0x7f))return Reflect[_0x5736a5(0x99)](_0x730ae1,_0x14892e);};Object[a240_0x63aeb3(0xa0)](exports,'__esModule',{'value':!![]}),exports[a240_0x63aeb3(0x81)]=void 0x0;const typedi_1=require(a240_0x63aeb3(0x9f)),constants_1=require(a240_0x63aeb3(0x83)),salesforce_error_1=require(a240_0x63aeb3(0x87)),create_request_util_1=require(a240_0x63aeb3(0x9b)),salesforce_auth_service_1=require('./salesforce-auth.service');let SalesforceQueryService=class SalesforceQueryService{constructor(_0x67b29f){const _0x537965=a240_0x63aeb3;this[_0x537965(0x8a)]=(0x0,create_request_util_1[_0x537965(0x97)])(_0x67b29f);}['parseSoqlString'](_0xbd7192){const _0x2e4f5b=a240_0x63aeb3;return _0xbd7192[_0x2e4f5b(0x98)](/\%namespace\%/g,constants_1[_0x2e4f5b(0x9d)])[_0x2e4f5b(0x98)](/\%flosum_namespace\%/g,constants_1[_0x2e4f5b(0x82)]);}[a240_0x63aeb3(0xa9)](){const _0x47dab3=a240_0x63aeb3;return this[_0x47dab3(0x8a)];}async['query'](_0x25d342){const _0x39fb03=a240_0x63aeb3;try{const _0x5f2b3a=encodeURI(this[_0x39fb03(0xa5)](_0x25d342)),_0x4f30b9=_0x39fb03(0x84)+constants_1[_0x39fb03(0x92)]+_0x39fb03(0x8f)+_0x5f2b3a,{data:_0x2b2231}=await this[_0x39fb03(0x8a)][_0x39fb03(0x93)](_0x4f30b9),_0x4dca13=_0x2b2231[_0x39fb03(0xa2)];let _0x47a350=_0x2b2231[_0x39fb03(0x8c)];while(_0x47a350){const {data:_0x5e5c45}=await this['request'][_0x39fb03(0x93)](_0x47a350);_0x47a350=_0x5e5c45[_0x39fb03(0x8c)],_0x4dca13[_0x39fb03(0xa4)](..._0x5e5c45[_0x39fb03(0xa2)]);}return _0x4dca13;}catch(_0x550461){throw new salesforce_error_1[(_0x39fb03(0x8d))](_0x550461);}}};SalesforceQueryService=__decorate([(0x0,typedi_1[a240_0x63aeb3(0x9a)])(),__metadata(a240_0x63aeb3(0x80),[salesforce_auth_service_1['SalesforceAuthService']])],SalesforceQueryService),exports['SalesforceQueryService']=SalesforceQueryService;