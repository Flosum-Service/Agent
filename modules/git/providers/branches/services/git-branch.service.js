const a207_0x538008=a207_0x37b1;(function(_0x157726,_0x38d585){const _0xa32168=a207_0x37b1,_0x47d8da=_0x157726();while(!![]){try{const _0x3ac81c=parseInt(_0xa32168(0x1a7))/0x1+parseInt(_0xa32168(0x18c))/0x2+-parseInt(_0xa32168(0x193))/0x3*(-parseInt(_0xa32168(0x194))/0x4)+-parseInt(_0xa32168(0x19b))/0x5*(-parseInt(_0xa32168(0x191))/0x6)+-parseInt(_0xa32168(0x19e))/0x7*(-parseInt(_0xa32168(0x1a0))/0x8)+-parseInt(_0xa32168(0x18f))/0x9+-parseInt(_0xa32168(0x1a6))/0xa;if(_0x3ac81c===_0x38d585)break;else _0x47d8da['push'](_0x47d8da['shift']());}catch(_0x2e13dd){_0x47d8da['push'](_0x47d8da['shift']());}}}(a207_0xaede,0x8251c));function a207_0xaede(){const _0x1f055b=['2782868pUnhiO','create','repository','credentials','../../../../../core/errors/not-found.error','createEmptyBranch','toString','485820adZDrb','../../../../../core/errors/bad-request.error','__esModule','972503tQvOlB','init\x20branch','40pSsxMT','(((.+)+)+)+$','search','defineProperty','Git','getAll','24927290vadncd','474238SZplqJ','find','apply','NotFoundError','getRepositoryBranches','1921760JUXuOK','getOne','GitBranchService','5186475CfAEPl','BadRequestError','48suuBvR','name','3cKFdOz'];a207_0xaede=function(){return _0x1f055b;};return a207_0xaede();}const a207_0x4b3662=(function(){let _0x56eb9e=!![];return function(_0x11f162,_0x1794c8){const _0x59b088=_0x56eb9e?function(){const _0x4569c1=a207_0x37b1;if(_0x1794c8){const _0x19789d=_0x1794c8[_0x4569c1(0x1a9)](_0x11f162,arguments);return _0x1794c8=null,_0x19789d;}}:function(){};return _0x56eb9e=![],_0x59b088;};}()),a207_0x4c3ffe=a207_0x4b3662(this,function(){const _0x49e6ec=a207_0x37b1;return a207_0x4c3ffe['toString']()[_0x49e6ec(0x1a2)](_0x49e6ec(0x1a1))[_0x49e6ec(0x19a)]()['constructor'](a207_0x4c3ffe)[_0x49e6ec(0x1a2)](_0x49e6ec(0x1a1));});a207_0x4c3ffe();'use strict';Object[a207_0x538008(0x1a3)](exports,a207_0x538008(0x19d),{'value':!![]}),exports[a207_0x538008(0x18e)]=void 0x0;const bad_request_error_1=require(a207_0x538008(0x19c)),not_found_error_1=require(a207_0x538008(0x198)),git_internal_1=require('../../../internal/git.internal');function a207_0x37b1(_0x570dcf,_0x46dc05){const _0x5e9622=a207_0xaede();return a207_0x37b1=function(_0x4c3ffe,_0x4b3662){_0x4c3ffe=_0x4c3ffe-0x18a;let _0xaede81=_0x5e9622[_0x4c3ffe];return _0xaede81;},a207_0x37b1(_0x570dcf,_0x46dc05);}class GitBranchService{constructor(_0x5798d5,_0x3f5eee){const _0x2533d5=a207_0x538008;this[_0x2533d5(0x196)]=_0x5798d5,this[_0x2533d5(0x197)]=_0x3f5eee;}async[a207_0x538008(0x195)](_0x511e92){const _0x4ce552=a207_0x538008;try{return await git_internal_1['Git'][_0x4ce552(0x199)](this['repository'],_0x511e92['name'],_0x4ce552(0x19f),this[_0x4ce552(0x197)]),this[_0x4ce552(0x18d)](_0x511e92[_0x4ce552(0x192)]);}catch(_0x512e66){throw new bad_request_error_1['BadRequestError'](_0x512e66);}}async[a207_0x538008(0x18d)](_0x12484f){const _0x86fe9e=a207_0x538008;try{const _0x4cc0b2=await this[_0x86fe9e(0x1a5)](),_0x2f5a8d=_0x4cc0b2[_0x86fe9e(0x1a8)](_0x44b4f9=>_0x44b4f9['name']===_0x12484f);if(!_0x2f5a8d)throw new Error('Branch\x20not\x20found');return _0x2f5a8d;}catch(_0x34102c){throw new not_found_error_1[(_0x86fe9e(0x18a))](_0x34102c);}}async['getAll'](){const _0x41b36=a207_0x538008;try{const _0x11fe97=await git_internal_1[_0x41b36(0x1a4)][_0x41b36(0x18b)](this['repository'],this[_0x41b36(0x197)]);return _0x11fe97;}catch(_0x314ffb){throw new bad_request_error_1[(_0x41b36(0x190))](_0x314ffb);}}}exports['GitBranchService']=GitBranchService;