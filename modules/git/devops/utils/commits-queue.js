const a135_0x3867e0=a135_0x3a85;function a135_0x51b9(){const _0x6517d0=['log','toString','constructor','run','logger','152dIRvDB','queue','commit\x20job\x20done\x20for\x20%s','apply','274LRwkkD','CommitsQueue','91721WVLDAS','currentJobs','4732002CQkIMm','__esModule','3301431cxQzsd','296616kDDKWy','Child','(((.+)+)+)+$','4121Slwfyq','42623520DTXNrA','6617624mPNpDW','search','childName','../../jobs/child','Run\x20commit\x20job\x20\x22%s\x22','defineProperty','25tAsSZy'];a135_0x51b9=function(){return _0x6517d0;};return a135_0x51b9();}(function(_0x42774a,_0x524651){const _0x2b2615=a135_0x3a85,_0x671991=_0x42774a();while(!![]){try{const _0x4fe4ee=parseInt(_0x2b2615(0x1f3))/0x1*(-parseInt(_0x2b2615(0x1e9))/0x2)+-parseInt(_0x2b2615(0x1ef))/0x3+-parseInt(_0x2b2615(0x1d9))/0x4+-parseInt(_0x2b2615(0x1df))/0x5*(-parseInt(_0x2b2615(0x1f0))/0x6)+-parseInt(_0x2b2615(0x1eb))/0x7*(-parseInt(_0x2b2615(0x1e5))/0x8)+-parseInt(_0x2b2615(0x1ed))/0x9+parseInt(_0x2b2615(0x1d8))/0xa;if(_0x4fe4ee===_0x524651)break;else _0x671991['push'](_0x671991['shift']());}catch(_0x1ae921){_0x671991['push'](_0x671991['shift']());}}}(a135_0x51b9,0xdef63));function a135_0x3a85(_0x197f04,_0x59530e){const _0x52f949=a135_0x51b9();return a135_0x3a85=function(_0x45dbab,_0x362e54){_0x45dbab=_0x45dbab-0x1d8;let _0x51b968=_0x52f949[_0x45dbab];return _0x51b968;},a135_0x3a85(_0x197f04,_0x59530e);}const a135_0x362e54=(function(){let _0x49189a=!![];return function(_0x4d93e4,_0x4c8fd5){const _0x26700b=_0x49189a?function(){const _0x48c5e9=a135_0x3a85;if(_0x4c8fd5){const _0x4705df=_0x4c8fd5[_0x48c5e9(0x1e8)](_0x4d93e4,arguments);return _0x4c8fd5=null,_0x4705df;}}:function(){};return _0x49189a=![],_0x26700b;};}()),a135_0x45dbab=a135_0x362e54(this,function(){const _0x5378ac=a135_0x3a85;return a135_0x45dbab[_0x5378ac(0x1e1)]()[_0x5378ac(0x1da)](_0x5378ac(0x1f2))[_0x5378ac(0x1e1)]()[_0x5378ac(0x1e2)](a135_0x45dbab)['search'](_0x5378ac(0x1f2));});a135_0x45dbab();'use strict';Object[a135_0x3867e0(0x1de)](exports,a135_0x3867e0(0x1ee),{'value':!![]}),exports['CommitsQueue']=void 0x0;const child_1=require(a135_0x3867e0(0x1dc));class CommitsQueue{constructor(_0x2305f8){const _0x205592=a135_0x3867e0;this[_0x205592(0x1db)]=_0x2305f8,this[_0x205592(0x1e6)]={},this[_0x205592(0x1ec)]={};}async[a135_0x3867e0(0x1e3)](_0x57482a){const _0xf836ba=a135_0x3867e0;if(this['currentJobs'][_0x57482a]||!this[_0xf836ba(0x1e6)][_0x57482a])return;const _0x25652d=this[_0xf836ba(0x1e6)][_0x57482a]['shift']();if(_0x25652d){this[_0xf836ba(0x1e4)][_0xf836ba(0x1e0)](_0xf836ba(0x1dd),_0x57482a);try{const _0x6345ce=new child_1[(_0xf836ba(0x1f1))](this[_0xf836ba(0x1db)]);this[_0xf836ba(0x1ec)][_0x57482a]=_0x6345ce,await _0x6345ce['execute']({'data':_0x25652d},!![]),delete this['currentJobs'][_0x57482a];}catch(_0x115da1){this['queue'][_0x57482a]=[],delete this['currentJobs'][_0x57482a];}this['logger']['log'](_0xf836ba(0x1e7),_0x57482a),this[_0xf836ba(0x1e3)](_0x57482a);}}}exports[a135_0x3867e0(0x1ea)]=CommitsQueue;