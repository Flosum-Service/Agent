const a339_0x382d5c=a339_0x1b45;(function(_0x4585f9,_0x5876a2){const _0x171d87=a339_0x1b45,_0x5ed60c=_0x4585f9();while(!![]){try{const _0x4e28fe=-parseInt(_0x171d87(0x184))/0x1+-parseInt(_0x171d87(0x197))/0x2+parseInt(_0x171d87(0x19d))/0x3*(-parseInt(_0x171d87(0x18b))/0x4)+parseInt(_0x171d87(0x18d))/0x5+parseInt(_0x171d87(0x181))/0x6+parseInt(_0x171d87(0x17d))/0x7*(-parseInt(_0x171d87(0x189))/0x8)+parseInt(_0x171d87(0x18f))/0x9*(parseInt(_0x171d87(0x17b))/0xa);if(_0x4e28fe===_0x5876a2)break;else _0x5ed60c['push'](_0x5ed60c['shift']());}catch(_0x101ec4){_0x5ed60c['push'](_0x5ed60c['shift']());}}}(a339_0x2578,0x416c1));function a339_0x1b45(_0x5176f6,_0xf29375){const _0x277c70=a339_0x2578();return a339_0x1b45=function(_0x253725,_0x4187d7){_0x253725=_0x253725-0x17b;let _0x2578f9=_0x277c70[_0x253725];return _0x2578f9;},a339_0x1b45(_0x5176f6,_0xf29375);}const a339_0x4187d7=(function(){let _0x3f0b22=!![];return function(_0x4ae159,_0x33f7e8){const _0x32a843=_0x3f0b22?function(){const _0xce47e2=a339_0x1b45;if(_0x33f7e8){const _0x3b9678=_0x33f7e8[_0xce47e2(0x199)](_0x4ae159,arguments);return _0x33f7e8=null,_0x3b9678;}}:function(){};return _0x3f0b22=![],_0x32a843;};}()),a339_0x253725=a339_0x4187d7(this,function(){const _0x27ed20=a339_0x1b45;return a339_0x253725[_0x27ed20(0x192)]()[_0x27ed20(0x180)]('(((.+)+)+)+$')[_0x27ed20(0x192)]()['constructor'](a339_0x253725)[_0x27ed20(0x180)](_0x27ed20(0x17f));});a339_0x253725();'use strict';var __importDefault=this&&this[a339_0x382d5c(0x19c)]||function(_0xf2780a){const _0x5753bd=a339_0x382d5c;return _0xf2780a&&_0xf2780a[_0x5753bd(0x19b)]?_0xf2780a:{'default':_0xf2780a};};Object[a339_0x382d5c(0x198)](exports,a339_0x382d5c(0x19b),{'value':!![]}),exports[a339_0x382d5c(0x185)]=void 0x0;const axios_1=__importDefault(require(a339_0x382d5c(0x182))),utils_1=require(a339_0x382d5c(0x17e)),base_veeva_auth_1=require(a339_0x382d5c(0x196));class SalesforceAuth extends base_veeva_auth_1['BaseVeevaAuth']{constructor(_0x504277){const _0x1f1a33=a339_0x382d5c;super(_0x504277),this[_0x1f1a33(0x19e)]=_0x504277;}async[a339_0x382d5c(0x18a)](){const _0x1df2f6=a339_0x382d5c,{accessToken:_0x8036c5}=await SalesforceAuth[_0x1df2f6(0x191)]();return _0x8036c5;}static async[a339_0x382d5c(0x191)](){const _0xfb7b29=a339_0x382d5c,_0x1075ef=process['env']['SALESFORCE_TOKEN'];if(!_0x1075ef)throw new Error(_0xfb7b29(0x19f));const [_0x1a7d66,_0x585e40,_0xb3c612,_0x38e013]=_0x1075ef[_0xfb7b29(0x17c)]()[_0xfb7b29(0x186)]('\x20');if(!_0x1a7d66||!_0x585e40||!_0xb3c612||!_0x38e013)throw new Error('One\x20of\x20the\x20parameters\x20in\x20Salesforce\x20Token\x20is\x20missing');const _0x11473d=SalesforceAuth['getLoginUrl'](_0x38e013),{data:_0x330242}=await axios_1[_0xfb7b29(0x18c)][_0xfb7b29(0x187)]((0x0,utils_1[_0xfb7b29(0x188)])(_0x11473d,'/services/oauth2/token'),null,{'params':{'grant_type':_0xfb7b29(0x190),'refresh_token':_0x1a7d66,'client_id':_0x585e40,'client_secret':_0xb3c612}});return{'instanceUrl':_0x330242[_0xfb7b29(0x18e)],'accessToken':_0x330242[_0xfb7b29(0x193)]};}static['getLoginUrl'](_0x4d25cf){const _0x5a350f=a339_0x382d5c;switch(_0x4d25cf){case _0x5a350f(0x194):return _0x5a350f(0x183);case _0x5a350f(0x195):return _0x5a350f(0x19a);default:throw new Error('Unknown\x20Salesforce\x20Organization\x20type:\x20'+_0x4d25cf);}}}exports[a339_0x382d5c(0x185)]=SalesforceAuth;function a339_0x2578(){const _0xd67528=['auth','Salesforce\x20token\x20missing','7203410SrPTcB','trim','49NLyjWn','../../../shared/utils','(((.+)+)+)+$','search','483414Eshhiv','axios','https://test.salesforce.com','186435ImoNyi','SalesforceAuth','split','post','joinURL','271984SyrqKy','getNewAccessToken','956BOTTun','default','2095085SpoTnk','instance_url','9WNvhPG','refresh_token','getAuthDetails','toString','access_token','Sandbox','Production','./base-veeva-auth','648296TVQnmJ','defineProperty','apply','https://login.salesforce.com','__esModule','__importDefault','2553aTKMLO'];a339_0x2578=function(){return _0xd67528;};return a339_0x2578();}