const a298_0x31996b=a298_0x8de7;function a298_0x386d(){const _0x366ece=['axios','3393813XYWzcD','AuthManager','refresh_token','@flosum/salesforce','5231376ZbLoVS','__importDefault','_clientId','30tFnDbt','4hHyeOR','search','6004110eTcFLm','(((.+)+)+)+$','constructor','20930220gLTlDF','900604iKNEeY','_clientSecret','__esModule','apply','toString','675268uwKXJu','_refreshToken','refreshToken','access_token','post','instanceUrl','1686678mIiVob'];a298_0x386d=function(){return _0x366ece;};return a298_0x386d();}(function(_0x150fa2,_0x306c29){const _0x31c3d3=a298_0x8de7,_0x3ff101=_0x150fa2();while(!![]){try{const _0x51f820=-parseInt(_0x31c3d3(0x1d3))/0x1+-parseInt(_0x31c3d3(0x1d8))/0x2+-parseInt(_0x31c3d3(0x1c5))/0x3+-parseInt(_0x31c3d3(0x1cd))/0x4*(-parseInt(_0x31c3d3(0x1cf))/0x5)+parseInt(_0x31c3d3(0x1cc))/0x6*(-parseInt(_0x31c3d3(0x1c3))/0x7)+parseInt(_0x31c3d3(0x1c9))/0x8+parseInt(_0x31c3d3(0x1d2))/0x9;if(_0x51f820===_0x306c29)break;else _0x3ff101['push'](_0x3ff101['shift']());}catch(_0x44fea0){_0x3ff101['push'](_0x3ff101['shift']());}}}(a298_0x386d,0x93f5d));const a298_0x99e3ae=(function(){let _0x4d3c27=!![];return function(_0x220b23,_0x39b6cf){const _0x15ebd9=_0x4d3c27?function(){const _0xdf106d=a298_0x8de7;if(_0x39b6cf){const _0x32d61b=_0x39b6cf[_0xdf106d(0x1d6)](_0x220b23,arguments);return _0x39b6cf=null,_0x32d61b;}}:function(){};return _0x4d3c27=![],_0x15ebd9;};}()),a298_0xb983ed=a298_0x99e3ae(this,function(){const _0x14d418=a298_0x8de7;return a298_0xb983ed[_0x14d418(0x1d7)]()[_0x14d418(0x1ce)](_0x14d418(0x1d0))[_0x14d418(0x1d7)]()[_0x14d418(0x1d1)](a298_0xb983ed)['search'](_0x14d418(0x1d0));});a298_0xb983ed();function a298_0x8de7(_0xc193bd,_0x446d5e){const _0x490f2d=a298_0x386d();return a298_0x8de7=function(_0xb983ed,_0x99e3ae){_0xb983ed=_0xb983ed-0x1c1;let _0x386d43=_0x490f2d[_0xb983ed];return _0x386d43;},a298_0x8de7(_0xc193bd,_0x446d5e);}'use strict';var __importDefault=this&&this[a298_0x31996b(0x1ca)]||function(_0x284fa8){const _0x33c2e2=a298_0x31996b;return _0x284fa8&&_0x284fa8[_0x33c2e2(0x1d5)]?_0x284fa8:{'default':_0x284fa8};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a298_0x31996b(0x1c6)]=void 0x0;const axios_1=__importDefault(require(a298_0x31996b(0x1c4))),salesforce_1=require(a298_0x31996b(0x1c8));class AuthManager extends salesforce_1['AuthorizationManager']{constructor({accessToken:_0x3a9b78,refreshToken:_0x5a0628,instanceUrl:_0x32e6d3,clientId:_0x634203,clientSecret:_0x308847}){const _0x5d458d=a298_0x31996b;super({'accessToken':_0x3a9b78,'instanceUrl':_0x32e6d3}),this[_0x5d458d(0x1d4)]=_0x308847,this[_0x5d458d(0x1cb)]=_0x634203,this['_refreshToken']=_0x5a0628;}async[a298_0x31996b(0x1da)](){const _0x39fd3b=a298_0x31996b,{data:_0x2555c8}=await axios_1['default'][_0x39fd3b(0x1c1)](this[_0x39fd3b(0x1c2)]+'/services/oauth2/token',null,{'params':{'grant_type':_0x39fd3b(0x1c7),'refresh_token':this[_0x39fd3b(0x1d9)],'client_id':this[_0x39fd3b(0x1cb)],'client_secret':this[_0x39fd3b(0x1d4)]}});return _0x2555c8[_0x39fd3b(0x1db)];}}exports['AuthManager']=AuthManager;