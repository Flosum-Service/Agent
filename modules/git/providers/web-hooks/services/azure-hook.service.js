const a210_0x1a59d4=a210_0x3e26;(function(_0xecbea5,_0x4d293e){const _0x4b2ec9=a210_0x3e26,_0x2f23b2=_0xecbea5();while(!![]){try{const _0x7c14d3=-parseInt(_0x4b2ec9(0x8a))/0x1*(-parseInt(_0x4b2ec9(0xa1))/0x2)+parseInt(_0x4b2ec9(0x82))/0x3+parseInt(_0x4b2ec9(0x9a))/0x4*(-parseInt(_0x4b2ec9(0x87))/0x5)+-parseInt(_0x4b2ec9(0x91))/0x6*(parseInt(_0x4b2ec9(0x81))/0x7)+parseInt(_0x4b2ec9(0xa3))/0x8+-parseInt(_0x4b2ec9(0x9f))/0x9*(parseInt(_0x4b2ec9(0x89))/0xa)+parseInt(_0x4b2ec9(0x7e))/0xb;if(_0x7c14d3===_0x4d293e)break;else _0x2f23b2['push'](_0x2f23b2['shift']());}catch(_0x44f453){_0x2f23b2['push'](_0x2f23b2['shift']());}}}(a210_0x21e3,0x51671));function a210_0x3e26(_0x2217ee,_0x1092c8){const _0x2555e2=a210_0x21e3();return a210_0x3e26=function(_0x4949d7,_0x239db8){_0x4949d7=_0x4949d7-0x79;let _0x21e355=_0x2555e2[_0x4949d7];return _0x21e355;},a210_0x3e26(_0x2217ee,_0x1092c8);}const a210_0x239db8=(function(){let _0x5c3b45=!![];return function(_0xc7c339,_0x2d5c6e){const _0x56d538=_0x5c3b45?function(){const _0x5a666c=a210_0x3e26;if(_0x2d5c6e){const _0x1982ba=_0x2d5c6e[_0x5a666c(0x95)](_0xc7c339,arguments);return _0x2d5c6e=null,_0x1982ba;}}:function(){};return _0x5c3b45=![],_0x56d538;};}()),a210_0x4949d7=a210_0x239db8(this,function(){const _0x10d6c8=a210_0x3e26;return a210_0x4949d7[_0x10d6c8(0x8d)]()[_0x10d6c8(0x99)]('(((.+)+)+)+$')['toString']()[_0x10d6c8(0x98)](a210_0x4949d7)[_0x10d6c8(0x99)](_0x10d6c8(0x7d));});a210_0x4949d7();'use strict';Object[a210_0x1a59d4(0x9b)](exports,a210_0x1a59d4(0x92),{'value':!![]}),exports['AzureHookService']=void 0x0;function a210_0x21e3(){const _0x26d8c1=['get','credentials','apply','AzureHookService','organization','constructor','search','1522404HszjgA','defineProperty','NotFoundError','../dto/hook.dto','fromAzure','9koDTtv','../../../../../core/errors/bad-request.error','38AgvFKv','../../../../../core/errors/not-found.error','1088008GyagBf','BadRequestError','request','delete','createRequest','(((.+)+)+)+$','6353512TMzlUl','GitHookService','api','21woiEga','1459080Qnksit','publisherInputs','patch','HookDto','filter','5djfRlM','update','6343780fyabBz','12782ahaZwQ','projectId','getOne','toString','value','./git-hook.service','/_apis/hooks/subscriptions/','188814nCserL','__esModule'];a210_0x21e3=function(){return _0x26d8c1;};return a210_0x21e3();}const bad_request_error_1=require(a210_0x1a59d4(0xa0)),not_found_error_1=require(a210_0x1a59d4(0xa2)),hook_dto_1=require(a210_0x1a59d4(0x9d)),git_hook_service_1=require(a210_0x1a59d4(0x8f));class AzureHookService extends git_hook_service_1[a210_0x1a59d4(0x7f)]{constructor(_0x15e60a,_0x47390f,_0x57df6c,_0x3c9143){const _0x130b72=a210_0x1a59d4;super(_0x15e60a),this[_0x130b72(0x8b)]=_0x47390f,this[_0x130b72(0x80)]=_0x57df6c,this['credentials']=_0x3c9143,this[_0x130b72(0x7a)]=this[_0x130b72(0x7c)]();}get[a210_0x1a59d4(0x97)](){const _0x22d641=a210_0x1a59d4;return this[_0x22d641(0x94)][_0x22d641(0x97)];}[a210_0x1a59d4(0x7c)](){const _0x4665e3=a210_0x1a59d4;return this[_0x4665e3(0x80)][_0x4665e3(0x7c)]();}['getProjectId'](){const _0x7c7b23=a210_0x1a59d4;return this[_0x7c7b23(0x8b)];}async['create'](_0x2eef99){const _0x2ec495=a210_0x1a59d4;try{const _0x5f18f0=await this[_0x2ec495(0x7a)]['post'](this[_0x2ec495(0x97)]+'/_apis/hooks/subscriptions',_0x2eef99);return hook_dto_1[_0x2ec495(0x85)][_0x2ec495(0x9e)](_0x5f18f0);}catch(_0x35f837){throw new bad_request_error_1[(_0x2ec495(0x79))](_0x35f837);}}async[a210_0x1a59d4(0x8c)](_0x1d95e8){const _0x3ab4f7=a210_0x1a59d4;try{const _0x74602f=await this[_0x3ab4f7(0x7a)]['get'](this[_0x3ab4f7(0x97)]+_0x3ab4f7(0x90)+_0x1d95e8);return hook_dto_1[_0x3ab4f7(0x85)][_0x3ab4f7(0x9e)](_0x74602f);}catch(_0x6a7a6c){throw new not_found_error_1[(_0x3ab4f7(0x9c))](_0x6a7a6c);}}async['getAll'](){const _0x1cd1f5=a210_0x1a59d4;try{const _0x1cc264=await this[_0x1cd1f5(0x7a)][_0x1cd1f5(0x93)](this[_0x1cd1f5(0x97)]+'/_apis/hooks/subscriptions');return _0x1cc264[_0x1cd1f5(0x8e)][_0x1cd1f5(0x86)](_0x1731fe=>{const _0x4823a5=_0x1cd1f5;var _0x522faa;return((_0x522faa=_0x1731fe===null||_0x1731fe===void 0x0?void 0x0:_0x1731fe[_0x4823a5(0x83)])===null||_0x522faa===void 0x0?void 0x0:_0x522faa[_0x4823a5(0x8b)])===this[_0x4823a5(0x8b)];})['map'](_0x1154c6=>hook_dto_1[_0x1cd1f5(0x85)][_0x1cd1f5(0x9e)](_0x1154c6));}catch(_0xf8fe2a){throw new not_found_error_1[(_0x1cd1f5(0x9c))](_0xf8fe2a);}}async[a210_0x1a59d4(0x88)](_0x34bf51,_0xd1f490){const _0x5d002c=a210_0x1a59d4;try{const _0xdee26b=await this[_0x5d002c(0x7a)][_0x5d002c(0x84)](this[_0x5d002c(0x97)]+_0x5d002c(0x90)+_0x34bf51,_0xd1f490);return hook_dto_1[_0x5d002c(0x85)]['fromGithub'](_0xdee26b);}catch(_0x3a269a){throw new bad_request_error_1['BadRequestError'](_0x3a269a);}}async[a210_0x1a59d4(0x7b)](_0x51e6de){const _0x4d4b7c=a210_0x1a59d4;try{await this[_0x4d4b7c(0x7a)][_0x4d4b7c(0x7b)](this[_0x4d4b7c(0x97)]+_0x4d4b7c(0x90)+_0x51e6de);}catch(_0x35d644){throw new bad_request_error_1[(_0x4d4b7c(0x79))](_0x35d644);}}}exports[a210_0x1a59d4(0x96)]=AzureHookService;