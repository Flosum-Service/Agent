const a207_0x4f7dfe=a207_0x3f1e;function a207_0x3f1e(_0x139ac3,_0x12cace){const _0x13385f=a207_0x1843();return a207_0x3f1e=function(_0xc9888b,_0x3f66d2){_0xc9888b=_0xc9888b-0x10b;let _0x1843c0=_0x13385f[_0xc9888b];return _0x1843c0;},a207_0x3f1e(_0x139ac3,_0x12cace);}(function(_0x353d11,_0x345dd8){const _0x218cf4=a207_0x3f1e,_0x5dd30a=_0x353d11();while(!![]){try{const _0x3b0173=-parseInt(_0x218cf4(0x118))/0x1+-parseInt(_0x218cf4(0x10c))/0x2+-parseInt(_0x218cf4(0x126))/0x3+parseInt(_0x218cf4(0x11e))/0x4*(-parseInt(_0x218cf4(0x121))/0x5)+parseInt(_0x218cf4(0x113))/0x6+-parseInt(_0x218cf4(0x122))/0x7*(-parseInt(_0x218cf4(0x125))/0x8)+-parseInt(_0x218cf4(0x11c))/0x9*(-parseInt(_0x218cf4(0x111))/0xa);if(_0x3b0173===_0x345dd8)break;else _0x5dd30a['push'](_0x5dd30a['shift']());}catch(_0x49bf92){_0x5dd30a['push'](_0x5dd30a['shift']());}}}(a207_0x1843,0x4f494));const a207_0x3f66d2=(function(){let _0x297c25=!![];return function(_0x4c5820,_0x3e3244){const _0xf5f40d=_0x297c25?function(){const _0x18d76c=a207_0x3f1e;if(_0x3e3244){const _0x1ed251=_0x3e3244[_0x18d76c(0x115)](_0x4c5820,arguments);return _0x3e3244=null,_0x1ed251;}}:function(){};return _0x297c25=![],_0xf5f40d;};}()),a207_0xc9888b=a207_0x3f66d2(this,function(){const _0x5dd2f6=a207_0x3f1e;return a207_0xc9888b[_0x5dd2f6(0x124)]()[_0x5dd2f6(0x11b)](_0x5dd2f6(0x119))['toString']()['constructor'](a207_0xc9888b)['search']('(((.+)+)+)+$');});function a207_0x1843(){const _0x446d0d=['108981adTWsX','/api/','205084Saayox','./git-branch.service','refs/heads/','25JuGaZK','21245QidIum','defineProperty','toString','1424hrNZJq','134709CkCSzC','/branch-utils/','994120XNCZQw','createRequest','BitbucketServerBranchService','replace','getOne','200WIxRoz','/branches','2794248GsIEvf','api','apply','delete','repository','125044QYIuLX','(((.+)+)+)+$','request','search'];a207_0x1843=function(){return _0x446d0d;};return a207_0x1843();}a207_0xc9888b();'use strict';Object[a207_0x4f7dfe(0x123)](exports,'__esModule',{'value':!![]}),exports[a207_0x4f7dfe(0x10e)]=void 0x0;const bad_request_error_1=require('../../../../../core/errors/bad-request.error'),git_branch_service_1=require(a207_0x4f7dfe(0x11f));class BitbucketServerBranchService extends git_branch_service_1['GitBranchService']{constructor(_0x41ceb6,_0x3e5c08,_0x22386c){const _0x4c83ff=a207_0x4f7dfe;super(_0x41ceb6,_0x22386c),this[_0x4c83ff(0x114)]=_0x3e5c08,this[_0x4c83ff(0x11a)]=this[_0x4c83ff(0x10d)]();}[a207_0x4f7dfe(0x10d)](){const _0x2a8101=a207_0x4f7dfe;return this['api'][_0x2a8101(0x10d)](this[_0x2a8101(0x117)]['apiUrl']);}async[a207_0x4f7dfe(0x116)](_0x557a02){const _0x29eada=a207_0x4f7dfe;try{await this[_0x29eada(0x110)](_0x557a02);const _0x2a6a42=this['repository']['apiUrl'][_0x29eada(0x10f)](_0x29eada(0x11d),_0x29eada(0x10b));await this['request'][_0x29eada(0x116)](_0x2a6a42+_0x29eada(0x112),{'data':{'name':_0x29eada(0x120)+_0x557a02,'dryRun':![]}});}catch(_0x41a85a){throw new bad_request_error_1['BadRequestError'](_0x41a85a);}}}exports[a207_0x4f7dfe(0x10e)]=BitbucketServerBranchService;