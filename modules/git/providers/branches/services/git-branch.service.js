const a197_0x90f22f=a197_0x4774;(function(_0x1b78fa,_0x3bd9b1){const _0x2ebd66=a197_0x4774,_0x53fec3=_0x1b78fa();while(!![]){try{const _0x2082b4=parseInt(_0x2ebd66(0x17d))/0x1+-parseInt(_0x2ebd66(0x174))/0x2+parseInt(_0x2ebd66(0x167))/0x3+parseInt(_0x2ebd66(0x175))/0x4+-parseInt(_0x2ebd66(0x17b))/0x5+-parseInt(_0x2ebd66(0x17f))/0x6*(-parseInt(_0x2ebd66(0x16c))/0x7)+-parseInt(_0x2ebd66(0x172))/0x8;if(_0x2082b4===_0x3bd9b1)break;else _0x53fec3['push'](_0x53fec3['shift']());}catch(_0x67e6f0){_0x53fec3['push'](_0x53fec3['shift']());}}}(a197_0xd8b9,0xba8a5));const a197_0x5a0aaa=(function(){let _0x11c86a=!![];return function(_0x27cf85,_0x1a88e9){const _0xc79390=_0x11c86a?function(){const _0x2bd2b6=a197_0x4774;if(_0x1a88e9){const _0x5508e8=_0x1a88e9[_0x2bd2b6(0x181)](_0x27cf85,arguments);return _0x1a88e9=null,_0x5508e8;}}:function(){};return _0x11c86a=![],_0xc79390;};}()),a197_0x3e3018=a197_0x5a0aaa(this,function(){const _0x34f52a=a197_0x4774;return a197_0x3e3018['toString']()[_0x34f52a(0x180)](_0x34f52a(0x16a))[_0x34f52a(0x168)]()['constructor'](a197_0x3e3018)[_0x34f52a(0x180)](_0x34f52a(0x16a));});a197_0x3e3018();'use strict';function a197_0x4774(_0x146c4a,_0x346929){const _0xe0c5bc=a197_0xd8b9();return a197_0x4774=function(_0x3e3018,_0x5a0aaa){_0x3e3018=_0x3e3018-0x167;let _0xd8b9ad=_0xe0c5bc[_0x3e3018];return _0xd8b9ad;},a197_0x4774(_0x146c4a,_0x346929);}function a197_0xd8b9(){const _0xfc49cb=['Git','1154814ilBovk','search','apply','4503402iOCdBD','toString','GitBranchService','(((.+)+)+)+$','repository','14TwluYq','../../../../../core/errors/bad-request.error','../../../internal/git.internal','BadRequestError','find','defineProperty','8556408AiChUF','NotFoundError','1485516vDemYg','5350996ZTZcyY','create','Branch\x20not\x20found','credentials','name','init\x20branch','4927070iGMIxW','getAll','337971knWEnB'];a197_0xd8b9=function(){return _0xfc49cb;};return a197_0xd8b9();}Object[a197_0x90f22f(0x171)](exports,'__esModule',{'value':!![]}),exports['GitBranchService']=void 0x0;const bad_request_error_1=require(a197_0x90f22f(0x16d)),not_found_error_1=require('../../../../../core/errors/not-found.error'),git_internal_1=require(a197_0x90f22f(0x16e));class GitBranchService{constructor(_0x4fd84f,_0x3028be){const _0x194807=a197_0x90f22f;this[_0x194807(0x16b)]=_0x4fd84f,this[_0x194807(0x178)]=_0x3028be;}async[a197_0x90f22f(0x176)](_0x4aaa0c){const _0x44bc6e=a197_0x90f22f;try{return await git_internal_1[_0x44bc6e(0x17e)]['createEmptyBranch'](this[_0x44bc6e(0x16b)],_0x4aaa0c['name'],_0x44bc6e(0x17a),this['credentials']),this['getOne'](_0x4aaa0c[_0x44bc6e(0x179)]);}catch(_0x3f8c8c){throw new bad_request_error_1[(_0x44bc6e(0x16f))](_0x3f8c8c);}}async['getOne'](_0x1acead){const _0x18e283=a197_0x90f22f;try{const _0x57a4dd=await this['getAll'](),_0xcda91c=_0x57a4dd[_0x18e283(0x170)](_0x41854a=>_0x41854a[_0x18e283(0x179)]===_0x1acead);if(!_0xcda91c)throw new Error(_0x18e283(0x177));return _0xcda91c;}catch(_0xdcb99b){throw new not_found_error_1[(_0x18e283(0x173))](_0xdcb99b);}}async[a197_0x90f22f(0x17c)](){const _0x2343c6=a197_0x90f22f;try{const _0x5a6f9e=await git_internal_1[_0x2343c6(0x17e)]['getRepositoryBranches'](this[_0x2343c6(0x16b)],this[_0x2343c6(0x178)]);return _0x5a6f9e;}catch(_0x4f7b08){throw new bad_request_error_1[(_0x2343c6(0x16f))](_0x4f7b08);}}}exports[a197_0x90f22f(0x169)]=GitBranchService;