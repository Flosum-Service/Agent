const a107_0x2b022e=a107_0x5453;(function(_0x1e5b9d,_0x4786b2){const _0x4a1a23=a107_0x5453,_0x5d037f=_0x1e5b9d();while(!![]){try{const _0x5af9fd=parseInt(_0x4a1a23(0x176))/0x1+-parseInt(_0x4a1a23(0x173))/0x2+-parseInt(_0x4a1a23(0x166))/0x3+-parseInt(_0x4a1a23(0x15f))/0x4+-parseInt(_0x4a1a23(0x16a))/0x5+-parseInt(_0x4a1a23(0x170))/0x6+parseInt(_0x4a1a23(0x167))/0x7*(parseInt(_0x4a1a23(0x16e))/0x8);if(_0x5af9fd===_0x4786b2)break;else _0x5d037f['push'](_0x5d037f['shift']());}catch(_0x4009e8){_0x5d037f['push'](_0x5d037f['shift']());}}}(a107_0xd99c,0x7964b));const a107_0x259ece=(function(){let _0x276957=!![];return function(_0x43fe15,_0x227f57){const _0x28d672=_0x276957?function(){if(_0x227f57){const _0x50d6e9=_0x227f57['apply'](_0x43fe15,arguments);return _0x227f57=null,_0x50d6e9;}}:function(){};return _0x276957=![],_0x28d672;};}()),a107_0x3d614f=a107_0x259ece(this,function(){const _0x3b01e2=a107_0x5453;return a107_0x3d614f[_0x3b01e2(0x171)]()['search'](_0x3b01e2(0x16d))['toString']()[_0x3b01e2(0x165)](a107_0x3d614f)[_0x3b01e2(0x161)](_0x3b01e2(0x16d));});a107_0x3d614f();function a107_0x5453(_0x1c4cec,_0x7753f9){const _0x4230e4=a107_0xd99c();return a107_0x5453=function(_0x3d614f,_0x259ece){_0x3d614f=_0x3d614f-0x15d;let _0xd99c35=_0x4230e4[_0x3d614f];return _0xd99c35;},a107_0x5453(_0x1c4cec,_0x7753f9);}'use strict';var __importDefault=this&&this[a107_0x2b022e(0x163)]||function(_0x322f61){const _0x39db00=a107_0x2b022e;return _0x322f61&&_0x322f61[_0x39db00(0x175)]?_0x322f61:{'default':_0x322f61};};Object[a107_0x2b022e(0x174)](exports,'__esModule',{'value':!![]}),exports[a107_0x2b022e(0x15d)]=void 0x0;function a107_0xd99c(){const _0x394507=['split','(((.+)+)+)+$','770920ZdzioG','access_token','262698LCFtlG','toString','/services/oauth2/token','1251604NoYAJf','defineProperty','__esModule','228964dyUjtg','AuthUtils','post','769184FNyOUm','axios','search','getAuthParameters','__importDefault','updateAccessToken','constructor','771420bKVXMC','119mQDund','One\x20of\x20the\x20parameters\x20is\x20missing','default','1254605rUHdKX','env'];a107_0xd99c=function(){return _0x394507;};return a107_0xd99c();}const axios_1=__importDefault(require(a107_0x2b022e(0x160)));class AuthUtils{static async[a107_0x2b022e(0x164)](_0x189b6c,_0x35c342,_0x54de4b,_0x4b1274){const _0x1590fd=a107_0x2b022e,{data:_0x12a97e}=await axios_1[_0x1590fd(0x169)][_0x1590fd(0x15e)](_0x189b6c+_0x1590fd(0x172),null,{'params':{'grant_type':'refresh_token','refresh_token':_0x35c342,'client_id':_0x54de4b,'client_secret':_0x4b1274}});return _0x12a97e[_0x1590fd(0x16f)];}static[a107_0x2b022e(0x162)](_0x3fb513){const _0x2db2dc=a107_0x2b022e,_0x57a6b1=process[_0x2db2dc(0x16b)]['SALESFORCE_TOKEN'];if(!_0x57a6b1)throw new Error('Salesforce\x20token\x20missing');const [_0x1d90c0,_0x2f7710,_0x9d899d,_0x469829]=_0x57a6b1['trim']()[_0x2db2dc(0x16c)]('\x20');if(!_0x1d90c0||!_0x2f7710||!_0x9d899d||!_0x469829)throw new Error(_0x2db2dc(0x168));return{'instanceUrl':_0x3fb513,'refreshToken':_0x1d90c0,'clientId':_0x2f7710,'clientSecret':_0x9d899d};}}exports[a107_0x2b022e(0x15d)]=AuthUtils;