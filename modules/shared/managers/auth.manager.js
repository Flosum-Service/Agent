function a314_0x203b(){const _0x32c38b=['5799TYwfxy','/services/oauth2/token','search','AuthorizationManager','5467914CGtRZx','AuthManager','axios','904608BxTkeP','2046795aWUgcE','__esModule','toString','1157870ibrVjB','_clientSecret','(((.+)+)+)+$','post','29418xYXxtT','_clientId','860zKwreE','access_token','instanceUrl','6673560MlOxDy','constructor','refreshToken','__importDefault','default','39VRTjvI'];a314_0x203b=function(){return _0x32c38b;};return a314_0x203b();}const a314_0xc58527=a314_0x49b3;(function(_0x4560a8,_0x348230){const _0x4aaceb=a314_0x49b3,_0x33752e=_0x4560a8();while(!![]){try{const _0x5cbcd3=parseInt(_0x4aaceb(0x1a1))/0x1*(parseInt(_0x4aaceb(0x197))/0x2)+parseInt(_0x4aaceb(0x1a2))/0x3*(-parseInt(_0x4aaceb(0x199))/0x4)+parseInt(_0x4aaceb(0x190))/0x5+-parseInt(_0x4aaceb(0x1a6))/0x6+parseInt(_0x4aaceb(0x193))/0x7+parseInt(_0x4aaceb(0x19c))/0x8+-parseInt(_0x4aaceb(0x1a9))/0x9;if(_0x5cbcd3===_0x348230)break;else _0x33752e['push'](_0x33752e['shift']());}catch(_0x5381e0){_0x33752e['push'](_0x33752e['shift']());}}}(a314_0x203b,0x878b5));function a314_0x49b3(_0x4090e4,_0x954950){const _0x599577=a314_0x203b();return a314_0x49b3=function(_0x2f6fcf,_0x7dd6ab){_0x2f6fcf=_0x2f6fcf-0x190;let _0x203bf5=_0x599577[_0x2f6fcf];return _0x203bf5;},a314_0x49b3(_0x4090e4,_0x954950);}const a314_0x7dd6ab=(function(){let _0x5d2306=!![];return function(_0x4eb41f,_0x5e95bf){const _0x430800=_0x5d2306?function(){if(_0x5e95bf){const _0x3481c2=_0x5e95bf['apply'](_0x4eb41f,arguments);return _0x5e95bf=null,_0x3481c2;}}:function(){};return _0x5d2306=![],_0x430800;};}()),a314_0x2f6fcf=a314_0x7dd6ab(this,function(){const _0x264025=a314_0x49b3;return a314_0x2f6fcf[_0x264025(0x192)]()['search'](_0x264025(0x195))[_0x264025(0x192)]()[_0x264025(0x19d)](a314_0x2f6fcf)[_0x264025(0x1a4)](_0x264025(0x195));});a314_0x2f6fcf();'use strict';var __importDefault=this&&this[a314_0xc58527(0x19f)]||function(_0x3a6e8d){const _0x352b9a=a314_0xc58527;return _0x3a6e8d&&_0x3a6e8d[_0x352b9a(0x191)]?_0x3a6e8d:{'default':_0x3a6e8d};};Object['defineProperty'](exports,a314_0xc58527(0x191),{'value':!![]}),exports[a314_0xc58527(0x1a7)]=void 0x0;const axios_1=__importDefault(require(a314_0xc58527(0x1a8))),salesforce_1=require('@flosum/salesforce');class AuthManager extends salesforce_1[a314_0xc58527(0x1a5)]{constructor({accessToken:_0xe5b9f6,refreshToken:_0x424f1a,instanceUrl:_0x4e4e3b,clientId:_0x462e5d,clientSecret:_0x54d23f}){const _0x4aba3b=a314_0xc58527;super({'accessToken':_0xe5b9f6,'instanceUrl':_0x4e4e3b}),this[_0x4aba3b(0x194)]=_0x54d23f,this['_clientId']=_0x462e5d,this['_refreshToken']=_0x424f1a;}async[a314_0xc58527(0x19e)](){const _0xa4a286=a314_0xc58527,{data:_0x2a2fa0}=await axios_1[_0xa4a286(0x1a0)][_0xa4a286(0x196)](this[_0xa4a286(0x19b)]+_0xa4a286(0x1a3),null,{'params':{'grant_type':'refresh_token','refresh_token':this['_refreshToken'],'client_id':this[_0xa4a286(0x198)],'client_secret':this[_0xa4a286(0x194)]}});return _0x2a2fa0[_0xa4a286(0x19a)];}}exports[a314_0xc58527(0x1a7)]=AuthManager;