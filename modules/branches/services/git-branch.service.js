const a55_0x4057b4=a55_0x5b44;(function(_0x251bea,_0x51c8e9){const _0x2d2be9=a55_0x5b44,_0x5f3fd1=_0x251bea();while(!![]){try{const _0x2d5a1d=-parseInt(_0x2d2be9(0x1b2))/0x1+parseInt(_0x2d2be9(0x1cb))/0x2*(-parseInt(_0x2d2be9(0x1bb))/0x3)+parseInt(_0x2d2be9(0x1b5))/0x4+-parseInt(_0x2d2be9(0x1c8))/0x5+parseInt(_0x2d2be9(0x1c7))/0x6+parseInt(_0x2d2be9(0x1c9))/0x7*(-parseInt(_0x2d2be9(0x1bf))/0x8)+parseInt(_0x2d2be9(0x1c0))/0x9*(parseInt(_0x2d2be9(0x1c3))/0xa);if(_0x2d5a1d===_0x51c8e9)break;else _0x5f3fd1['push'](_0x5f3fd1['shift']());}catch(_0x9048e7){_0x5f3fd1['push'](_0x5f3fd1['shift']());}}}(a55_0x175f,0x25efc));const a55_0x1c5707=(function(){let _0x34eb3c=!![];return function(_0x16056f,_0x20f1e0){const _0x1b57ee=_0x34eb3c?function(){const _0x460624=a55_0x5b44;if(_0x20f1e0){const _0x45c1d3=_0x20f1e0[_0x460624(0x1b4)](_0x16056f,arguments);return _0x20f1e0=null,_0x45c1d3;}}:function(){};return _0x34eb3c=![],_0x1b57ee;};}()),a55_0x4efa19=a55_0x1c5707(this,function(){const _0x114923=a55_0x5b44;return a55_0x4efa19[_0x114923(0x1c4)]()[_0x114923(0x1b1)](_0x114923(0x1bd))[_0x114923(0x1c4)]()[_0x114923(0x1be)](a55_0x4efa19)[_0x114923(0x1b1)](_0x114923(0x1bd));});a55_0x4efa19();function a55_0x5b44(_0x17fa0d,_0x227d00){const _0x36175f=a55_0x175f();return a55_0x5b44=function(_0x4efa19,_0x1c5707){_0x4efa19=_0x4efa19-0x1b0;let _0x175fe3=_0x36175f[_0x4efa19];return _0x175fe3;},a55_0x5b44(_0x17fa0d,_0x227d00);}'use strict';Object['defineProperty'](exports,a55_0x4057b4(0x1b3),{'value':!![]}),exports[a55_0x4057b4(0x1ca)]=void 0x0;const bad_request_error_1=require(a55_0x4057b4(0x1cd)),not_found_error_1=require(a55_0x4057b4(0x1c1)),git_internal_1=require(a55_0x4057b4(0x1c2));function a55_0x175f(){const _0x3a5875=['__esModule','apply','492980vUlANe','BadRequestError','init\x20branch','NotFoundError','getRepositoryBranches','createEmptyBranch','184053iKehuK','name','(((.+)+)+)+$','constructor','96srqeCo','9bufxUY','../../../core/errors/not-found.error','../../internal/git.internal','5279890GJBixe','toString','getAll','getOne','928260Eogwye','572815CboMIr','130522XPjhLL','GitBranchService','10svsdxx','find','../../../core/errors/bad-request.error','repository','search','5486cxBrRb'];a55_0x175f=function(){return _0x3a5875;};return a55_0x175f();}class GitBranchService{constructor(_0x2f1b37){this['repository']=_0x2f1b37;}async['create'](_0x4db0e9){const _0x1f81c4=a55_0x4057b4;try{return await git_internal_1['Git'][_0x1f81c4(0x1ba)](this[_0x1f81c4(0x1b0)],_0x4db0e9['name'],_0x1f81c4(0x1b7)),this[_0x1f81c4(0x1c6)](_0x4db0e9[_0x1f81c4(0x1bc)]);}catch(_0x5e6bbf){throw new bad_request_error_1[(_0x1f81c4(0x1b6))](_0x5e6bbf);}}async[a55_0x4057b4(0x1c6)](_0x5f272c){const _0x30dd88=a55_0x4057b4;try{const _0x336e85=await this['getAll'](),_0x4db06c=_0x336e85[_0x30dd88(0x1cc)](_0x26aead=>_0x26aead[_0x30dd88(0x1bc)]===_0x5f272c);if(!_0x4db06c)throw new Error('Branch\x20not\x20found');return _0x4db06c;}catch(_0x23b377){throw new not_found_error_1[(_0x30dd88(0x1b8))](_0x23b377);}}async[a55_0x4057b4(0x1c5)](){const _0x107800=a55_0x4057b4;try{const _0x2c8fb4=await git_internal_1['Git'][_0x107800(0x1b9)](this[_0x107800(0x1b0)]);return _0x2c8fb4;}catch(_0x50af16){throw new bad_request_error_1[(_0x107800(0x1b6))](_0x50af16);}}}exports['GitBranchService']=GitBranchService;