const a207_0x606db0=a207_0x3f97;(function(_0x2ee415,_0x3d287d){const _0x561a9d=a207_0x3f97,_0x5e1de6=_0x2ee415();while(!![]){try{const _0x517576=parseInt(_0x561a9d(0x18d))/0x1*(-parseInt(_0x561a9d(0x177))/0x2)+-parseInt(_0x561a9d(0x176))/0x3*(-parseInt(_0x561a9d(0x18b))/0x4)+-parseInt(_0x561a9d(0x18a))/0x5+-parseInt(_0x561a9d(0x183))/0x6+-parseInt(_0x561a9d(0x18c))/0x7+-parseInt(_0x561a9d(0x187))/0x8*(parseInt(_0x561a9d(0x194))/0x9)+-parseInt(_0x561a9d(0x179))/0xa*(-parseInt(_0x561a9d(0x18e))/0xb);if(_0x517576===_0x3d287d)break;else _0x5e1de6['push'](_0x5e1de6['shift']());}catch(_0x179a78){_0x5e1de6['push'](_0x5e1de6['shift']());}}}(a207_0x4628,0x6f8bd));const a207_0x889271=(function(){let _0xb3b157=!![];return function(_0x144f91,_0x24b434){const _0x45a48c=_0xb3b157?function(){const _0x413284=a207_0x3f97;if(_0x24b434){const _0x22588b=_0x24b434[_0x413284(0x185)](_0x144f91,arguments);return _0x24b434=null,_0x22588b;}}:function(){};return _0xb3b157=![],_0x45a48c;};}()),a207_0x3e7589=a207_0x889271(this,function(){const _0x57483c=a207_0x3f97;return a207_0x3e7589['toString']()[_0x57483c(0x17c)](_0x57483c(0x193))[_0x57483c(0x17d)]()[_0x57483c(0x178)](a207_0x3e7589)[_0x57483c(0x17c)](_0x57483c(0x193));});a207_0x3e7589();'use strict';function a207_0x3f97(_0x3f79a9,_0x4ad32e){const _0x40d94b=a207_0x4628();return a207_0x3f97=function(_0x3e7589,_0x889271){_0x3e7589=_0x3e7589-0x176;let _0x462881=_0x40d94b[_0x3e7589];return _0x462881;},a207_0x3f97(_0x3f79a9,_0x4ad32e);}Object['defineProperty'](exports,a207_0x606db0(0x195),{'value':!![]}),exports[a207_0x606db0(0x17e)]=void 0x0;const bad_request_error_1=require(a207_0x606db0(0x17a)),not_found_error_1=require(a207_0x606db0(0x190)),git_internal_1=require(a207_0x606db0(0x182));class GitBranchService{constructor(_0x59e56b,_0x4ee0e4){const _0x209dad=a207_0x606db0;this[_0x209dad(0x192)]=_0x59e56b,this['credentials']=_0x4ee0e4;}async[a207_0x606db0(0x189)](_0x4e256a){const _0x22cf6e=a207_0x606db0;try{return await git_internal_1[_0x22cf6e(0x181)][_0x22cf6e(0x18f)](this[_0x22cf6e(0x192)],_0x4e256a[_0x22cf6e(0x191)],_0x22cf6e(0x186),this[_0x22cf6e(0x184)]),this['getOne'](_0x4e256a['name']);}catch(_0x5134c8){throw new bad_request_error_1[(_0x22cf6e(0x188))](_0x5134c8);}}async[a207_0x606db0(0x17b)](_0x1bc199){const _0x3e547e=a207_0x606db0;try{const _0xf42ce6=await this[_0x3e547e(0x17f)](),_0x3a696c=_0xf42ce6['find'](_0x2a77ce=>_0x2a77ce[_0x3e547e(0x191)]===_0x1bc199);if(!_0x3a696c)throw new Error('Branch\x20not\x20found');return _0x3a696c;}catch(_0x2b76e4){throw new not_found_error_1[(_0x3e547e(0x180))](_0x2b76e4);}}async[a207_0x606db0(0x17f)](){const _0x5841ee=a207_0x606db0;try{const _0x371ac4=await git_internal_1['Git']['getRepositoryBranches'](this[_0x5841ee(0x192)],this[_0x5841ee(0x184)]);return _0x371ac4;}catch(_0x4e9e0e){throw new bad_request_error_1[(_0x5841ee(0x188))](_0x4e9e0e);}}}function a207_0x4628(){const _0x252290=['../../../../../core/errors/not-found.error','name','repository','(((.+)+)+)+$','7064973OdeHNC','__esModule','331686QNwYKp','196AuhJxp','constructor','80kNmYKY','../../../../../core/errors/bad-request.error','getOne','search','toString','GitBranchService','getAll','NotFoundError','Git','../../../internal/git.internal','4733022JvbbHB','credentials','apply','init\x20branch','8dvIBZg','BadRequestError','create','2242070FNPPUR','28rtbrhq','264033yOqmmi','6981Czhhrj','3337213yljyFh','createEmptyBranch'];a207_0x4628=function(){return _0x252290;};return a207_0x4628();}exports[a207_0x606db0(0x17e)]=GitBranchService;