function a89_0xc891(){const _0x333d3d=['__esModule','One\x20of\x20the\x20parameters\x20is\x20missing','trim','11934288wlwLKY','/services/oauth2/token','104thkjdM','toString','AuthUtils','Salesforce\x20token\x20missing','87801bLcNYM','1571664WJbDCX','post','split','(((.+)+)+)+$','default','constructor','1500440qGNmZl','axios','2701345nwtdig','317390ZHRbEq','search','138wHdtzx','16078ibUxDo','SALESFORCE_TOKEN'];a89_0xc891=function(){return _0x333d3d;};return a89_0xc891();}const a89_0xe3c42c=a89_0x88e0;(function(_0x1cdbd7,_0x447167){const _0x4d6f44=a89_0x88e0,_0x29d213=_0x1cdbd7();while(!![]){try{const _0x305188=-parseInt(_0x4d6f44(0x13d))/0x1+-parseInt(_0x4d6f44(0x140))/0x2*(-parseInt(_0x4d6f44(0x13f))/0x3)+-parseInt(_0x4d6f44(0x13a))/0x4+-parseInt(_0x4d6f44(0x13c))/0x5+-parseInt(_0x4d6f44(0x14c))/0x6+parseInt(_0x4d6f44(0x14b))/0x7*(parseInt(_0x4d6f44(0x147))/0x8)+parseInt(_0x4d6f44(0x145))/0x9;if(_0x305188===_0x447167)break;else _0x29d213['push'](_0x29d213['shift']());}catch(_0x56ef36){_0x29d213['push'](_0x29d213['shift']());}}}(a89_0xc891,0x58e8c));function a89_0x88e0(_0x3b6484,_0x9f6a9d){const _0x6b7ddf=a89_0xc891();return a89_0x88e0=function(_0x6a05fb,_0x32449f){_0x6a05fb=_0x6a05fb-0x137;let _0xc891aa=_0x6b7ddf[_0x6a05fb];return _0xc891aa;},a89_0x88e0(_0x3b6484,_0x9f6a9d);}const a89_0x32449f=(function(){let _0x459e12=!![];return function(_0x24371d,_0x354677){const _0x4cc33c=_0x459e12?function(){if(_0x354677){const _0x3b4036=_0x354677['apply'](_0x24371d,arguments);return _0x354677=null,_0x3b4036;}}:function(){};return _0x459e12=![],_0x4cc33c;};}()),a89_0x6a05fb=a89_0x32449f(this,function(){const _0x401358=a89_0x88e0;return a89_0x6a05fb[_0x401358(0x148)]()[_0x401358(0x13e)](_0x401358(0x137))['toString']()[_0x401358(0x139)](a89_0x6a05fb)[_0x401358(0x13e)](_0x401358(0x137));});a89_0x6a05fb();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x54b23f){const _0x31c2ff=a89_0x88e0;return _0x54b23f&&_0x54b23f[_0x31c2ff(0x142)]?_0x54b23f:{'default':_0x54b23f};};Object['defineProperty'](exports,a89_0xe3c42c(0x142),{'value':!![]}),exports[a89_0xe3c42c(0x149)]=void 0x0;const axios_1=__importDefault(require(a89_0xe3c42c(0x13b)));class AuthUtils{static async['updateAccessToken'](_0x47b27d,_0x8d77e1,_0x12cd99,_0x2f5e29){const _0x4a4780=a89_0xe3c42c,{data:_0x38186c}=await axios_1[_0x4a4780(0x138)][_0x4a4780(0x14d)](_0x47b27d+_0x4a4780(0x146),null,{'params':{'grant_type':'refresh_token','refresh_token':_0x8d77e1,'client_id':_0x12cd99,'client_secret':_0x2f5e29}});return _0x38186c['access_token'];}static['getAuthParameters'](_0x418bd9){const _0x540e13=a89_0xe3c42c,_0x2d08fe=process['env'][_0x540e13(0x141)];if(!_0x2d08fe)throw new Error(_0x540e13(0x14a));const [_0x3609f9,_0x4c454f,_0x5013f9,_0x489c8c]=_0x2d08fe[_0x540e13(0x144)]()[_0x540e13(0x14e)]('\x20');if(!_0x3609f9||!_0x4c454f||!_0x5013f9||!_0x489c8c)throw new Error(_0x540e13(0x143));return{'instanceUrl':_0x418bd9,'refreshToken':_0x3609f9,'clientId':_0x4c454f,'clientSecret':_0x5013f9};}}exports[a89_0xe3c42c(0x149)]=AuthUtils;