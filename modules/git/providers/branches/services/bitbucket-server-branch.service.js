const a170_0xf907eb=a170_0xe1a5;(function(_0x1ad6e1,_0x3b8c89){const _0x277cf1=a170_0xe1a5,_0x53f734=_0x1ad6e1();while(!![]){try{const _0x2ef75e=-parseInt(_0x277cf1(0x10b))/0x1+-parseInt(_0x277cf1(0x10f))/0x2*(-parseInt(_0x277cf1(0x109))/0x3)+-parseInt(_0x277cf1(0x112))/0x4+-parseInt(_0x277cf1(0x107))/0x5*(-parseInt(_0x277cf1(0x10c))/0x6)+parseInt(_0x277cf1(0xfe))/0x7+-parseInt(_0x277cf1(0xfb))/0x8+parseInt(_0x277cf1(0x101))/0x9;if(_0x2ef75e===_0x3b8c89)break;else _0x53f734['push'](_0x53f734['shift']());}catch(_0x241d77){_0x53f734['push'](_0x53f734['shift']());}}}(a170_0x3203,0x28aa9));const a170_0x2b3876=(function(){let _0x717f2d=!![];return function(_0x15508b,_0x50ee0c){const _0x4ca96e=_0x717f2d?function(){const _0x164810=a170_0xe1a5;if(_0x50ee0c){const _0x4d9f5a=_0x50ee0c[_0x164810(0x110)](_0x15508b,arguments);return _0x50ee0c=null,_0x4d9f5a;}}:function(){};return _0x717f2d=![],_0x4ca96e;};}()),a170_0x456588=a170_0x2b3876(this,function(){const _0x229f82=a170_0xe1a5;return a170_0x456588[_0x229f82(0x105)]()[_0x229f82(0x100)](_0x229f82(0x104))[_0x229f82(0x105)]()[_0x229f82(0x108)](a170_0x456588)['search'](_0x229f82(0x104));});a170_0x456588();'use strict';Object[a170_0xf907eb(0x10d)](exports,'__esModule',{'value':!![]}),exports['BitbucketServerBranchService']=void 0x0;const bad_request_error_1=require(a170_0xf907eb(0x113)),git_branch_service_1=require(a170_0xf907eb(0x102));function a170_0xe1a5(_0x19267d,_0x245f68){const _0x3fad75=a170_0x3203();return a170_0xe1a5=function(_0x456588,_0x2b3876){_0x456588=_0x456588-0xf7;let _0x3203b1=_0x3fad75[_0x456588];return _0x3203b1;},a170_0xe1a5(_0x19267d,_0x245f68);}class BitbucketServerBranchService extends git_branch_service_1[a170_0xf907eb(0x10a)]{constructor(_0x229b61,_0x1b4035,_0x1e611c){const _0x4a2851=a170_0xf907eb;super(_0x229b61,_0x1e611c),this[_0x4a2851(0x111)]=_0x1b4035,this[_0x4a2851(0x103)]=this[_0x4a2851(0xf9)]();}['createRequest'](){const _0x296123=a170_0xf907eb;return this[_0x296123(0x111)][_0x296123(0xf9)](this['repository'][_0x296123(0xfc)]);}async[a170_0xf907eb(0xf7)](_0x5de816){const _0x1857bc=a170_0xf907eb;try{await this['getOne'](_0x5de816);const _0x54bf5d=this['repository']['apiUrl'][_0x1857bc(0x10e)](_0x1857bc(0xfd),_0x1857bc(0xff));await this['request']['delete'](_0x54bf5d+'/branches',{'data':{'name':_0x1857bc(0x106)+_0x5de816,'dryRun':![]}});}catch(_0x2a41a2){throw new bad_request_error_1[(_0x1857bc(0xf8))](_0x2a41a2);}}}function a170_0x3203(){const _0x5618da=['GitBranchService','222718ZPDxWF','12ocZLWa','defineProperty','replace','286pBHmhe','apply','api','221716KznEwU','../../../../../core/errors/bad-request.error','delete','BadRequestError','createRequest','BitbucketServerBranchService','2346080GPWyQZ','apiUrl','/api/','658511zQynoq','/branch-utils/','search','4368960wRHDNA','./git-branch.service','request','(((.+)+)+)+$','toString','refs/heads/','57605hBcClO','constructor','2841cCAzDR'];a170_0x3203=function(){return _0x5618da;};return a170_0x3203();}exports[a170_0xf907eb(0xfa)]=BitbucketServerBranchService;