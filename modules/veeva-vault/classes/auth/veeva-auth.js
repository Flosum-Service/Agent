const a352_0x7700aa=a352_0x40de;(function(_0x3e0777,_0x28ff7){const _0x52d90b=a352_0x40de,_0x547381=_0x3e0777();while(!![]){try{const _0x22c12c=-parseInt(_0x52d90b(0x177))/0x1+parseInt(_0x52d90b(0x181))/0x2+parseInt(_0x52d90b(0x18f))/0x3+parseInt(_0x52d90b(0x178))/0x4*(parseInt(_0x52d90b(0x197))/0x5)+parseInt(_0x52d90b(0x17a))/0x6+parseInt(_0x52d90b(0x194))/0x7*(parseInt(_0x52d90b(0x172))/0x8)+-parseInt(_0x52d90b(0x196))/0x9;if(_0x22c12c===_0x28ff7)break;else _0x547381['push'](_0x547381['shift']());}catch(_0x33c472){_0x547381['push'](_0x547381['shift']());}}}(a352_0x42d4,0xb3d56));const a352_0xc8809f=(function(){let _0x3b322b=!![];return function(_0x4174ea,_0x25ae6e){const _0x2f8e86=_0x3b322b?function(){const _0x5f28c4=a352_0x40de;if(_0x25ae6e){const _0x14e429=_0x25ae6e[_0x5f28c4(0x17c)](_0x4174ea,arguments);return _0x25ae6e=null,_0x14e429;}}:function(){};return _0x3b322b=![],_0x2f8e86;};}()),a352_0x501e36=a352_0xc8809f(this,function(){const _0x3a8bb1=a352_0x40de;return a352_0x501e36[_0x3a8bb1(0x173)]()[_0x3a8bb1(0x171)](_0x3a8bb1(0x192))[_0x3a8bb1(0x173)]()['constructor'](a352_0x501e36)[_0x3a8bb1(0x171)](_0x3a8bb1(0x192));});a352_0x501e36();'use strict';var __importDefault=this&&this[a352_0x7700aa(0x184)]||function(_0x1f6366){const _0x6cd969=a352_0x7700aa;return _0x1f6366&&_0x1f6366[_0x6cd969(0x18e)]?_0x1f6366:{'default':_0x1f6366};};Object[a352_0x7700aa(0x175)](exports,'__esModule',{'value':!![]}),exports[a352_0x7700aa(0x18c)]=void 0x0;const veeva_constants_1=require(a352_0x7700aa(0x18b)),axios_1=__importDefault(require(a352_0x7700aa(0x186))),status_enums_1=require('../../enums/status.enums'),utils_1=require('../../../shared/utils'),app_constants_1=require(a352_0x7700aa(0x180)),base_veeva_auth_1=require(a352_0x7700aa(0x185));function a352_0x40de(_0x357a67,_0x28686e){const _0x490b8e=a352_0x42d4();return a352_0x40de=function(_0x501e36,_0xc8809f){_0x501e36=_0x501e36-0x171;let _0x42d486=_0x490b8e[_0x501e36];return _0x42d486;},a352_0x40de(_0x357a67,_0x28686e);}function a352_0x42d4(){const _0x340e41=['type','apply','sessionId','VeevaResponseStatus','errors','../../constants/app.constants','1340136HrSGkc','default','auth','__importDefault','./base-veeva-auth','axios','attemptsOfUpdateToken','AppConstants','username','instanceUrl','../../constants/veeva.constants','VeevaAuth','some','__esModule','1835805SdUnjD','VeevaConstants','ENDPOINT_AUTH','(((.+)+)+)+$','sleep','14DBiBBT','application/x-www-form-urlencoded','7513515EJHWda','375805fWXMLx','LOGIN_TIMEOUT','search','2230968xbkzAl','toString','password','defineProperty','UNDEFINED_ERROR','1001609huOkWd','16XZuSuY','append','2595918lwhscn'];a352_0x42d4=function(){return _0x340e41;};return a352_0x42d4();}class VeevaAuth extends base_veeva_auth_1['BaseVeevaAuth']{constructor(_0x38f91a,_0x1d9398=0x0){const _0xa95927=a352_0x7700aa;super(_0x38f91a),this['auth']=_0x38f91a,this[_0xa95927(0x187)]=_0x1d9398;}async['getNewAccessToken'](_0x263733=this[a352_0x7700aa(0x187)]){const _0xb23134=a352_0x7700aa;var _0x2ba8d7,_0x240194;const _0x5424f1=this[_0xb23134(0x183)][_0xb23134(0x18a)]+veeva_constants_1[_0xb23134(0x190)][_0xb23134(0x191)],_0x1c3253=new URLSearchParams();_0x1c3253['append']('username',this[_0xb23134(0x183)][_0xb23134(0x189)]),_0x1c3253[_0xb23134(0x179)](_0xb23134(0x174),this[_0xb23134(0x183)][_0xb23134(0x174)]);const {data:_0x573c8e}=await axios_1[_0xb23134(0x182)]['post'](_0x5424f1,_0x1c3253,{'headers':{'Content-Type':_0xb23134(0x195)}});if(_0x573c8e['responseStatus']===status_enums_1[_0xb23134(0x17e)]['SUCCESS'])return _0x573c8e[_0xb23134(0x17d)];else{const _0x58f479=(_0x2ba8d7=_0x573c8e['errors'])===null||_0x2ba8d7===void 0x0?void 0x0:_0x2ba8d7[_0xb23134(0x18d)](_0x1e816a=>_0x1e816a[_0xb23134(0x17b)]===veeva_constants_1[_0xb23134(0x190)]['API_LIMIT_EXCEEDED']);if(_0x58f479&&_0x263733>0x0)return await(0x0,utils_1[_0xb23134(0x193)])(VeevaAuth[_0xb23134(0x198)]),await this['getNewAccessToken'](_0x263733-0x1);else throw new Error(((_0x240194=_0x573c8e[_0xb23134(0x17f)][0x0])===null||_0x240194===void 0x0?void 0x0:_0x240194['message'])||app_constants_1[_0xb23134(0x188)][_0xb23134(0x176)]);}}}exports[a352_0x7700aa(0x18c)]=VeevaAuth,VeevaAuth[a352_0x7700aa(0x198)]=0x3e8*0x3c;