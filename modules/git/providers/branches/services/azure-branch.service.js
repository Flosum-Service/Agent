const a195_0x2c657c=a195_0x4e43;(function(_0x27632c,_0x385756){const _0x5de0fb=a195_0x4e43,_0x37bba1=_0x27632c();while(!![]){try{const _0x5f30af=parseInt(_0x5de0fb(0x1af))/0x1*(parseInt(_0x5de0fb(0x1c4))/0x2)+-parseInt(_0x5de0fb(0x1bc))/0x3*(-parseInt(_0x5de0fb(0x1b2))/0x4)+-parseInt(_0x5de0fb(0x1c0))/0x5+parseInt(_0x5de0fb(0x1c2))/0x6+-parseInt(_0x5de0fb(0x1c5))/0x7*(parseInt(_0x5de0fb(0x1ca))/0x8)+parseInt(_0x5de0fb(0x1ad))/0x9+parseInt(_0x5de0fb(0x1ae))/0xa*(parseInt(_0x5de0fb(0x1c8))/0xb);if(_0x5f30af===_0x385756)break;else _0x37bba1['push'](_0x37bba1['shift']());}catch(_0x1e7550){_0x37bba1['push'](_0x37bba1['shift']());}}}(a195_0x15b9,0x7350a));const a195_0x380134=(function(){let _0x2dabfe=!![];return function(_0x220823,_0x47b183){const _0x3fb0b0=_0x2dabfe?function(){const _0xb83ba8=a195_0x4e43;if(_0x47b183){const _0x123f14=_0x47b183[_0xb83ba8(0x1b0)](_0x220823,arguments);return _0x47b183=null,_0x123f14;}}:function(){};return _0x2dabfe=![],_0x3fb0b0;};}()),a195_0x1b794b=a195_0x380134(this,function(){const _0x5c678d=a195_0x4e43;return a195_0x1b794b[_0x5c678d(0x1b7)]()[_0x5c678d(0x1c7)](_0x5c678d(0x1b5))['toString']()['constructor'](a195_0x1b794b)[_0x5c678d(0x1c7)]('(((.+)+)+)+$');});a195_0x1b794b();'use strict';function a195_0x4e43(_0x359a4c,_0x1fd9e0){const _0x59947e=a195_0x15b9();return a195_0x4e43=function(_0x1b794b,_0x380134){_0x1b794b=_0x1b794b-0x1ad;let _0x15b922=_0x59947e[_0x1b794b];return _0x15b922;},a195_0x4e43(_0x359a4c,_0x1fd9e0);}Object[a195_0x2c657c(0x1b9)](exports,a195_0x2c657c(0x1b8),{'value':!![]}),exports['AzureBranchService']=void 0x0;function a195_0x15b9(){const _0xaf6df3=['AzureBranchService','329668jCEeRJ','refs/heads/','post','(((.+)+)+)+$','refs','toString','__esModule','defineProperty','0000000000000000000000000000000000000000','createRequest','9lmoiAb','getOne','GitBranchService','delete','3965740alGPOH','api','732EwoUxW','request','2gOXYZv','5338053HDYsFa','BadRequestError','search','2987545mTzQEF','../../../../../core/errors/bad-request.error','8gHCkcA','6865452cVGjSH','20bCHvOF','474666BBgWmH','apply'];a195_0x15b9=function(){return _0xaf6df3;};return a195_0x15b9();}const bad_request_error_1=require(a195_0x2c657c(0x1c9)),git_branch_service_1=require('./git-branch.service');class AzureBranchService extends git_branch_service_1[a195_0x2c657c(0x1be)]{constructor(_0x67ee00,_0x947d18,_0x3c547c){const _0x525c97=a195_0x2c657c;super(_0x67ee00,_0x3c547c),this[_0x525c97(0x1c1)]=_0x947d18,this[_0x525c97(0x1c3)]=this[_0x525c97(0x1bb)]();}[a195_0x2c657c(0x1bb)](){const _0x2a1253=a195_0x2c657c;return this[_0x2a1253(0x1c1)]['createRequest'](this['repository']['apiUrl']);}async[a195_0x2c657c(0x1bf)](_0x52d494){const _0x5f7a9f=a195_0x2c657c;try{await this[_0x5f7a9f(0x1bd)](_0x52d494),await this[_0x5f7a9f(0x1c3)][_0x5f7a9f(0x1b4)](_0x5f7a9f(0x1b6),[{'name':_0x5f7a9f(0x1b3)+_0x52d494,'newObjectId':_0x5f7a9f(0x1ba),'oldObjectId':'0000000000000000000000000000000000000000'}]);}catch(_0xcd7722){throw new bad_request_error_1[(_0x5f7a9f(0x1c6))](_0xcd7722);}}}exports[a195_0x2c657c(0x1b1)]=AzureBranchService;