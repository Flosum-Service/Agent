function a288_0xa7e4(){const _0x60bc4e=['attemptsOfUpdateToken','__importDefault','877420aNLtpu','270550rQJEFF','(((.+)+)+)+$','axios','__esModule','153407HulNeq','../../enums/status.enums','constructor','search','VeevaConstants','append','message','some','UNDEFINED_ERROR','VeevaAuth','errors','../../constants/veeva.constants','instanceUrl','API_LIMIT_EXCEEDED','getNewAccessToken','../../constants/app.constants','486267AViByc','toString','responseStatus','username','auth','defineProperty','1127424nNnZvZ','38172QDhPhE','924180SPAqiR','SUCCESS','../../../shared/utils','./base-veeva-auth','sleep','post','AppConstants','password','sessionId','133HAirqp','VeevaResponseStatus','application/x-www-form-urlencoded'];a288_0xa7e4=function(){return _0x60bc4e;};return a288_0xa7e4();}const a288_0x46e0da=a288_0x45e3;(function(_0x3803bb,_0x448810){const _0x5d78d3=a288_0x45e3,_0x29c548=_0x3803bb();while(!![]){try{const _0x581a10=parseInt(_0x5d78d3(0xe4))/0x1+-parseInt(_0x5d78d3(0xe0))/0x2+-parseInt(_0x5d78d3(0xf4))/0x3+parseInt(_0x5d78d3(0xd1))/0x4+-parseInt(_0x5d78d3(0xdf))/0x5+parseInt(_0x5d78d3(0xd0))/0x6*(parseInt(_0x5d78d3(0xda))/0x7)+parseInt(_0x5d78d3(0xcf))/0x8;if(_0x581a10===_0x448810)break;else _0x29c548['push'](_0x29c548['shift']());}catch(_0x197d21){_0x29c548['push'](_0x29c548['shift']());}}}(a288_0xa7e4,0x2a562));const a288_0x41dfe2=(function(){let _0x55fdc3=!![];return function(_0x351634,_0x59cfa6){const _0xf96f48=_0x55fdc3?function(){if(_0x59cfa6){const _0x10485e=_0x59cfa6['apply'](_0x351634,arguments);return _0x59cfa6=null,_0x10485e;}}:function(){};return _0x55fdc3=![],_0xf96f48;};}()),a288_0x455198=a288_0x41dfe2(this,function(){const _0x5ad890=a288_0x45e3;return a288_0x455198[_0x5ad890(0xf5)]()[_0x5ad890(0xe7)](_0x5ad890(0xe1))[_0x5ad890(0xf5)]()[_0x5ad890(0xe6)](a288_0x455198)[_0x5ad890(0xe7)](_0x5ad890(0xe1));});a288_0x455198();'use strict';var __importDefault=this&&this[a288_0x46e0da(0xde)]||function(_0x21fb74){const _0x2406f1=a288_0x46e0da;return _0x21fb74&&_0x21fb74[_0x2406f1(0xe3)]?_0x21fb74:{'default':_0x21fb74};};Object[a288_0x46e0da(0xce)](exports,'__esModule',{'value':!![]}),exports[a288_0x46e0da(0xed)]=void 0x0;function a288_0x45e3(_0x4c210a,_0x351c0c){const _0x2f71bf=a288_0xa7e4();return a288_0x45e3=function(_0x455198,_0x41dfe2){_0x455198=_0x455198-0xcd;let _0xa7e440=_0x2f71bf[_0x455198];return _0xa7e440;},a288_0x45e3(_0x4c210a,_0x351c0c);}const veeva_constants_1=require(a288_0x46e0da(0xef)),axios_1=__importDefault(require(a288_0x46e0da(0xe2))),status_enums_1=require(a288_0x46e0da(0xe5)),utils_1=require(a288_0x46e0da(0xd3)),app_constants_1=require(a288_0x46e0da(0xf3)),base_veeva_auth_1=require(a288_0x46e0da(0xd4));class VeevaAuth extends base_veeva_auth_1['BaseVeevaAuth']{constructor(_0x49ecd0,_0x4d057a=0x0){const _0x3a7f3d=a288_0x46e0da;super(_0x49ecd0),this[_0x3a7f3d(0xcd)]=_0x49ecd0,this[_0x3a7f3d(0xdd)]=_0x4d057a;}async[a288_0x46e0da(0xf2)](_0x3ab5a6=this[a288_0x46e0da(0xdd)]){const _0x2f193d=a288_0x46e0da;var _0x55c627,_0x314988;const _0x4cbef5=this[_0x2f193d(0xcd)][_0x2f193d(0xf0)]+veeva_constants_1[_0x2f193d(0xe8)]['ENDPOINT_AUTH'],_0x1e2d37=new URLSearchParams();_0x1e2d37[_0x2f193d(0xe9)](_0x2f193d(0xf7),this[_0x2f193d(0xcd)]['username']),_0x1e2d37[_0x2f193d(0xe9)](_0x2f193d(0xd8),this['auth'][_0x2f193d(0xd8)]);const {data:_0x28b4e6}=await axios_1['default'][_0x2f193d(0xd6)](_0x4cbef5,_0x1e2d37,{'headers':{'Content-Type':_0x2f193d(0xdc)}});if(_0x28b4e6[_0x2f193d(0xf6)]===status_enums_1[_0x2f193d(0xdb)][_0x2f193d(0xd2)])return _0x28b4e6[_0x2f193d(0xd9)];else{const _0x53dc28=(_0x55c627=_0x28b4e6[_0x2f193d(0xee)])===null||_0x55c627===void 0x0?void 0x0:_0x55c627[_0x2f193d(0xeb)](_0x11efff=>_0x11efff['type']===veeva_constants_1['VeevaConstants'][_0x2f193d(0xf1)]);if(_0x53dc28&&_0x3ab5a6>0x0)return await(0x0,utils_1[_0x2f193d(0xd5)])(VeevaAuth['LOGIN_TIMEOUT']),await this[_0x2f193d(0xf2)](_0x3ab5a6-0x1);else throw new Error(((_0x314988=_0x28b4e6[_0x2f193d(0xee)][0x0])===null||_0x314988===void 0x0?void 0x0:_0x314988[_0x2f193d(0xea)])||app_constants_1[_0x2f193d(0xd7)][_0x2f193d(0xec)]);}}}exports[a288_0x46e0da(0xed)]=VeevaAuth,VeevaAuth['LOGIN_TIMEOUT']=0x3e8*0x3c;