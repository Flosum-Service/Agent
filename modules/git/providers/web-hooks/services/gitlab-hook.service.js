const a180_0x1d1bfc=a180_0x14d9;(function(_0x49ba9e,_0x3cd5b1){const _0x102feb=a180_0x14d9,_0xedb999=_0x49ba9e();while(!![]){try{const _0xbe77f=-parseInt(_0x102feb(0x14c))/0x1+-parseInt(_0x102feb(0x15f))/0x2+-parseInt(_0x102feb(0x14f))/0x3+parseInt(_0x102feb(0x14e))/0x4*(parseInt(_0x102feb(0x160))/0x5)+parseInt(_0x102feb(0x15d))/0x6*(parseInt(_0x102feb(0x157))/0x7)+-parseInt(_0x102feb(0x148))/0x8*(-parseInt(_0x102feb(0x15c))/0x9)+-parseInt(_0x102feb(0x156))/0xa*(parseInt(_0x102feb(0x14a))/0xb);if(_0xbe77f===_0x3cd5b1)break;else _0xedb999['push'](_0xedb999['shift']());}catch(_0x25269d){_0xedb999['push'](_0xedb999['shift']());}}}(a180_0x2dcd,0xb3a9b));const a180_0x545941=(function(){let _0x1fd6ce=!![];return function(_0x5d1135,_0x2bc0e5){const _0x4b2b81=_0x1fd6ce?function(){const _0x4a4f2d=a180_0x14d9;if(_0x2bc0e5){const _0x409fc7=_0x2bc0e5[_0x4a4f2d(0x166)](_0x5d1135,arguments);return _0x2bc0e5=null,_0x409fc7;}}:function(){};return _0x1fd6ce=![],_0x4b2b81;};}()),a180_0x3a00f6=a180_0x545941(this,function(){const _0x44760d=a180_0x14d9;return a180_0x3a00f6[_0x44760d(0x14b)]()[_0x44760d(0x153)](_0x44760d(0x15a))['toString']()[_0x44760d(0x14d)](a180_0x3a00f6)[_0x44760d(0x153)](_0x44760d(0x15a));});a180_0x3a00f6();function a180_0x14d9(_0x4ca967,_0x4f8063){const _0x569f05=a180_0x2dcd();return a180_0x14d9=function(_0x3a00f6,_0x545941){_0x3a00f6=_0x3a00f6-0x140;let _0x2dcd73=_0x569f05[_0x3a00f6];return _0x2dcd73;},a180_0x14d9(_0x4ca967,_0x4f8063);}'use strict';Object[a180_0x1d1bfc(0x158)](exports,a180_0x1d1bfc(0x154),{'value':!![]}),exports[a180_0x1d1bfc(0x162)]=void 0x0;const bad_request_error_1=require('../../../../../core/errors/bad-request.error'),not_found_error_1=require(a180_0x1d1bfc(0x145)),hook_dto_1=require(a180_0x1d1bfc(0x15b)),git_hook_service_1=require(a180_0x1d1bfc(0x161));class GitlabHookService extends git_hook_service_1['GitHookService']{constructor(_0x14ea55,_0x30c429){const _0x94d608=a180_0x1d1bfc;super(_0x14ea55),this[_0x94d608(0x150)]=_0x30c429,this[_0x94d608(0x142)]=this[_0x94d608(0x143)]();}['createRequest'](){const _0x1f5569=a180_0x1d1bfc;return this['api'][_0x1f5569(0x143)](this[_0x1f5569(0x164)]['apiUrl']);}async[a180_0x1d1bfc(0x165)](_0x1b1275){const _0x309dcd=a180_0x1d1bfc;try{const _0x2d4981=await this['request'][_0x309dcd(0x15e)](_0x309dcd(0x163),_0x1b1275);return hook_dto_1[_0x309dcd(0x147)][_0x309dcd(0x149)](_0x2d4981);}catch(_0x3c4f1b){throw new bad_request_error_1['BadRequestError'](_0x3c4f1b);}}async[a180_0x1d1bfc(0x151)](_0x6627a8){const _0x15fcca=a180_0x1d1bfc;try{const _0x226faf=await this['request']['get'](_0x15fcca(0x159)+_0x6627a8);return hook_dto_1[_0x15fcca(0x147)][_0x15fcca(0x149)](_0x226faf);}catch(_0x148ed4){throw new not_found_error_1[(_0x15fcca(0x141))](_0x148ed4);}}async[a180_0x1d1bfc(0x140)](){const _0x17dd92=a180_0x1d1bfc;try{const _0xbc8752=await this['request'][_0x17dd92(0x146)](_0x17dd92(0x163));return _0xbc8752['map'](_0x6d3376=>hook_dto_1[_0x17dd92(0x147)][_0x17dd92(0x149)](_0x6d3376));}catch(_0x3815ac){throw new not_found_error_1[(_0x17dd92(0x141))](_0x3815ac);}}async[a180_0x1d1bfc(0x144)](_0x414e65,_0x55e08d){const _0x34a4f9=a180_0x1d1bfc;try{const _0x418d90=await this['request'][_0x34a4f9(0x155)](_0x34a4f9(0x159)+_0x414e65,_0x55e08d);return hook_dto_1[_0x34a4f9(0x147)][_0x34a4f9(0x149)](_0x418d90);}catch(_0x44ff96){throw new not_found_error_1[(_0x34a4f9(0x141))](_0x44ff96);}}async['delete'](_0x39e829){const _0x103d73=a180_0x1d1bfc;try{await this[_0x103d73(0x142)][_0x103d73(0x152)](_0x103d73(0x159)+_0x39e829);}catch(_0x5e9819){throw new not_found_error_1[(_0x103d73(0x141))](_0x5e9819);}}}function a180_0x2dcd(){const _0x9b685=['createRequest','update','../../../../../core/errors/not-found.error','get','HookDto','2385688HofYBs','fromGitlab','44Ofabpv','toString','884182bYTUhc','constructor','1690364URWIwZ','105747MiscNg','api','getOne','delete','search','__esModule','put','172250oogeVq','47446EvvuLr','defineProperty','hooks/','(((.+)+)+)+$','../dto/hook.dto','27kMpIji','1158HhlgQb','post','1802296rKoSJz','5fooIaf','./git-hook.service','GitlabHookService','hooks','repository','create','apply','getAll','NotFoundError','request'];a180_0x2dcd=function(){return _0x9b685;};return a180_0x2dcd();}exports[a180_0x1d1bfc(0x162)]=GitlabHookService;