const a175_0x463db8=a175_0x302c;function a175_0x5da0(){const _0x4b554c=['BitbucketServerBranchService','request','search','/api/','20872360xJosBh','constructor','__esModule','342745LWIrHn','refs/heads/','defineProperty','createRequest','44LMmeAj','104411PuiFwh','replace','627954ZPJXcN','api','11212873mEVRRA','apply','BadRequestError','repository','toString','./git-branch.service','/branch-utils/','1768383YdoEao','delete','2549836ZLlMer'];a175_0x5da0=function(){return _0x4b554c;};return a175_0x5da0();}function a175_0x302c(_0x19a7d0,_0x3dd67f){const _0x27340d=a175_0x5da0();return a175_0x302c=function(_0x1bca07,_0x80e234){_0x1bca07=_0x1bca07-0x167;let _0x5da0c4=_0x27340d[_0x1bca07];return _0x5da0c4;},a175_0x302c(_0x19a7d0,_0x3dd67f);}(function(_0x33c63d,_0x505ef8){const _0x33864f=a175_0x302c,_0x4aeec6=_0x33c63d();while(!![]){try{const _0x46fbc2=parseInt(_0x33864f(0x177))/0x1+parseInt(_0x33864f(0x16a))/0x2+-parseInt(_0x33864f(0x168))/0x3+-parseInt(_0x33864f(0x176))/0x4*(parseInt(_0x33864f(0x172))/0x5)+-parseInt(_0x33864f(0x179))/0x6+-parseInt(_0x33864f(0x17b))/0x7+parseInt(_0x33864f(0x16f))/0x8;if(_0x46fbc2===_0x505ef8)break;else _0x4aeec6['push'](_0x4aeec6['shift']());}catch(_0x52bd4a){_0x4aeec6['push'](_0x4aeec6['shift']());}}}(a175_0x5da0,0xe5188));const a175_0x80e234=(function(){let _0x37dfc9=!![];return function(_0x49cf08,_0x531c2d){const _0x3ab0ae=_0x37dfc9?function(){const _0x165d7c=a175_0x302c;if(_0x531c2d){const _0x1e1891=_0x531c2d[_0x165d7c(0x17c)](_0x49cf08,arguments);return _0x531c2d=null,_0x1e1891;}}:function(){};return _0x37dfc9=![],_0x3ab0ae;};}()),a175_0x1bca07=a175_0x80e234(this,function(){const _0x21d491=a175_0x302c;return a175_0x1bca07[_0x21d491(0x17f)]()['search']('(((.+)+)+)+$')[_0x21d491(0x17f)]()[_0x21d491(0x170)](a175_0x1bca07)[_0x21d491(0x16d)]('(((.+)+)+)+$');});a175_0x1bca07();'use strict';Object[a175_0x463db8(0x174)](exports,a175_0x463db8(0x171),{'value':!![]}),exports[a175_0x463db8(0x16b)]=void 0x0;const bad_request_error_1=require('../../../../../core/errors/bad-request.error'),git_branch_service_1=require(a175_0x463db8(0x180));class BitbucketServerBranchService extends git_branch_service_1['GitBranchService']{constructor(_0x3a419c,_0x134f4d,_0x1aca86){const _0x136c0a=a175_0x463db8;super(_0x3a419c,_0x1aca86),this['api']=_0x134f4d,this[_0x136c0a(0x16c)]=this[_0x136c0a(0x175)]();}[a175_0x463db8(0x175)](){const _0x31439e=a175_0x463db8;return this[_0x31439e(0x17a)][_0x31439e(0x175)](this[_0x31439e(0x17e)]['apiUrl']);}async[a175_0x463db8(0x169)](_0x2eb40b){const _0x58d4f0=a175_0x463db8;try{await this['getOne'](_0x2eb40b);const _0x330322=this[_0x58d4f0(0x17e)]['apiUrl'][_0x58d4f0(0x178)](_0x58d4f0(0x16e),_0x58d4f0(0x167));await this[_0x58d4f0(0x16c)][_0x58d4f0(0x169)](_0x330322+'/branches',{'data':{'name':_0x58d4f0(0x173)+_0x2eb40b,'dryRun':![]}});}catch(_0x4dca1a){throw new bad_request_error_1[(_0x58d4f0(0x17d))](_0x4dca1a);}}}exports[a175_0x463db8(0x16b)]=BitbucketServerBranchService;