const a116_0x4fffc0=a116_0x33e2;function a116_0x33e2(_0x1f4645,_0x59bcd0){const _0x1b5309=a116_0xd661();return a116_0x33e2=function(_0x2c1565,_0x269bc8){_0x2c1565=_0x2c1565-0x6b;let _0xd661aa=_0x1b5309[_0x2c1565];return _0xd661aa;},a116_0x33e2(_0x1f4645,_0x59bcd0);}(function(_0x1d174f,_0x3bf980){const _0x15e010=a116_0x33e2,_0x551e47=_0x1d174f();while(!![]){try{const _0x22c603=parseInt(_0x15e010(0x86))/0x1*(parseInt(_0x15e010(0x78))/0x2)+parseInt(_0x15e010(0x7c))/0x3+-parseInt(_0x15e010(0x76))/0x4*(parseInt(_0x15e010(0x6e))/0x5)+-parseInt(_0x15e010(0x74))/0x6*(parseInt(_0x15e010(0x6b))/0x7)+parseInt(_0x15e010(0x81))/0x8*(-parseInt(_0x15e010(0x84))/0x9)+-parseInt(_0x15e010(0x77))/0xa+-parseInt(_0x15e010(0x89))/0xb*(-parseInt(_0x15e010(0x7f))/0xc);if(_0x22c603===_0x3bf980)break;else _0x551e47['push'](_0x551e47['shift']());}catch(_0x52dadc){_0x551e47['push'](_0x551e47['shift']());}}}(a116_0xd661,0x2e294));const a116_0x269bc8=(function(){let _0x12830e=!![];return function(_0x1fd38f,_0x4418a4){const _0x180072=_0x12830e?function(){const _0x292616=a116_0x33e2;if(_0x4418a4){const _0x50864c=_0x4418a4[_0x292616(0x79)](_0x1fd38f,arguments);return _0x4418a4=null,_0x50864c;}}:function(){};return _0x12830e=![],_0x180072;};}()),a116_0x2c1565=a116_0x269bc8(this,function(){const _0x3b8908=a116_0x33e2;return a116_0x2c1565[_0x3b8908(0x75)]()[_0x3b8908(0x7b)](_0x3b8908(0x7a))['toString']()[_0x3b8908(0x80)](a116_0x2c1565)['search'](_0x3b8908(0x7a));});a116_0x2c1565();'use strict';function a116_0xd661(){const _0x2cf5ec=['130394wgpWiK','982989fcaVnK','__esModule','run','10nWzsvn','../../jobs/child','CommitsQueue','logger','execute','childName','12VNXUkW','toString','675704GDGLUD','2171740kUONza','598gPrhnP','apply','(((.+)+)+)+$','search','359118JzbpBb','commit\x20job\x20done\x20for\x20%s','queue','984mdBkEG','constructor','8LhQujw','Child','currentJobs','1857699OdWnBm','shift','467tXKznN','log','defineProperty'];a116_0xd661=function(){return _0x2cf5ec;};return a116_0xd661();}Object[a116_0x4fffc0(0x88)](exports,a116_0x4fffc0(0x6c),{'value':!![]}),exports[a116_0x4fffc0(0x70)]=void 0x0;const child_1=require(a116_0x4fffc0(0x6f));class CommitsQueue{constructor(_0x57a62f){const _0x5e9e9d=a116_0x4fffc0;this[_0x5e9e9d(0x73)]=_0x57a62f,this[_0x5e9e9d(0x7e)]={},this[_0x5e9e9d(0x83)]={};}async[a116_0x4fffc0(0x6d)](_0x3e9058){const _0xd2b653=a116_0x4fffc0;if(this['currentJobs'][_0x3e9058]||!this[_0xd2b653(0x7e)][_0x3e9058])return;const _0x4b8de6=this['queue'][_0x3e9058][_0xd2b653(0x85)]();if(_0x4b8de6){this[_0xd2b653(0x71)][_0xd2b653(0x87)]('Run\x20commit\x20job\x20\x22%s\x22',_0x3e9058);try{const _0x37cd6d=new child_1[(_0xd2b653(0x82))](this[_0xd2b653(0x73)]);this[_0xd2b653(0x83)][_0x3e9058]=_0x37cd6d,await _0x37cd6d[_0xd2b653(0x72)]({'data':_0x4b8de6},!![]),delete this[_0xd2b653(0x83)][_0x3e9058];}catch(_0xdec78b){this[_0xd2b653(0x7e)][_0x3e9058]=[],delete this[_0xd2b653(0x83)][_0x3e9058];}this[_0xd2b653(0x71)][_0xd2b653(0x87)](_0xd2b653(0x7d),_0x3e9058),this[_0xd2b653(0x6d)](_0x3e9058);}}}exports['CommitsQueue']=CommitsQueue;