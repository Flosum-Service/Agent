const a163_0x2362eb=a163_0x2445;(function(_0x2054cb,_0x19cab0){const _0x4006d2=a163_0x2445,_0x2e76e2=_0x2054cb();while(!![]){try{const _0x5c7208=-parseInt(_0x4006d2(0x146))/0x1*(-parseInt(_0x4006d2(0x12c))/0x2)+parseInt(_0x4006d2(0x12f))/0x3*(-parseInt(_0x4006d2(0x127))/0x4)+-parseInt(_0x4006d2(0x12d))/0x5+parseInt(_0x4006d2(0x13e))/0x6+-parseInt(_0x4006d2(0x147))/0x7+-parseInt(_0x4006d2(0x129))/0x8+parseInt(_0x4006d2(0x148))/0x9;if(_0x5c7208===_0x19cab0)break;else _0x2e76e2['push'](_0x2e76e2['shift']());}catch(_0x1301bb){_0x2e76e2['push'](_0x2e76e2['shift']());}}}(a163_0xef81,0xbe6f2));const a163_0x3e9396=(function(){let _0x5e3f56=!![];return function(_0x46e6ba,_0x350781){const _0x260a84=_0x5e3f56?function(){const _0x370f3f=a163_0x2445;if(_0x350781){const _0x41ac3a=_0x350781[_0x370f3f(0x150)](_0x46e6ba,arguments);return _0x350781=null,_0x41ac3a;}}:function(){};return _0x5e3f56=![],_0x260a84;};}()),a163_0x5df1e5=a163_0x3e9396(this,function(){const _0x5c45da=a163_0x2445;return a163_0x5df1e5[_0x5c45da(0x139)]()[_0x5c45da(0x14d)]('(((.+)+)+)+$')[_0x5c45da(0x139)]()[_0x5c45da(0x14b)](a163_0x5df1e5)[_0x5c45da(0x14d)]('(((.+)+)+)+$');});a163_0x5df1e5();'use strict';Object[a163_0x2362eb(0x13d)](exports,a163_0x2362eb(0x145),{'value':!![]}),exports[a163_0x2362eb(0x135)]=void 0x0;const bad_request_error_1=require('../../../../../core/errors/bad-request.error'),not_found_error_1=require(a163_0x2362eb(0x126)),hook_dto_1=require(a163_0x2362eb(0x142)),git_hook_service_1=require(a163_0x2362eb(0x124));function a163_0xef81(){const _0xa49515=['7283024zGWlfb','14910057VbdSVw','filter','getOne','constructor','request','search','GitHookService','get','apply','NotFoundError','./git-hook.service','/_apis/hooks/subscriptions','../../../../../core/errors/not-found.error','4494220FvLhyK','post','634000kPDPDF','getProjectId','getAll','1412oqWMHK','405595NKvtIL','organization','3XWXSPm','fromGithub','update','BadRequestError','value','publisherInputs','AzureHookService','HookDto','map','/_apis/hooks/subscriptions/','toString','create','delete','projectId','defineProperty','6275922JuPLPx','createRequest','credentials','patch','../dto/hook.dto','api','fromAzure','__esModule','569ZtsHZG'];a163_0xef81=function(){return _0xa49515;};return a163_0xef81();}function a163_0x2445(_0x3b1472,_0x236e18){const _0x1d1c2c=a163_0xef81();return a163_0x2445=function(_0x5df1e5,_0x3e9396){_0x5df1e5=_0x5df1e5-0x123;let _0xef8164=_0x1d1c2c[_0x5df1e5];return _0xef8164;},a163_0x2445(_0x3b1472,_0x236e18);}class AzureHookService extends git_hook_service_1[a163_0x2362eb(0x14e)]{constructor(_0x47d05c,_0x20f61d,_0x3d2fc9,_0x27bbe8){const _0x2cdac4=a163_0x2362eb;super(_0x47d05c),this[_0x2cdac4(0x13c)]=_0x20f61d,this[_0x2cdac4(0x143)]=_0x3d2fc9,this[_0x2cdac4(0x140)]=_0x27bbe8,this[_0x2cdac4(0x14c)]=this[_0x2cdac4(0x13f)]();}get[a163_0x2362eb(0x12e)](){const _0x5ec4e1=a163_0x2362eb;return this[_0x5ec4e1(0x140)][_0x5ec4e1(0x12e)];}[a163_0x2362eb(0x13f)](){const _0xe138f6=a163_0x2362eb;return this['api'][_0xe138f6(0x13f)]();}[a163_0x2362eb(0x12a)](){const _0x4082f5=a163_0x2362eb;return this[_0x4082f5(0x13c)];}async[a163_0x2362eb(0x13a)](_0x3f310e){const _0x2ee91a=a163_0x2362eb;try{const _0x19a5cc=await this[_0x2ee91a(0x14c)][_0x2ee91a(0x128)](this['organization']+_0x2ee91a(0x125),_0x3f310e);return hook_dto_1[_0x2ee91a(0x136)]['fromAzure'](_0x19a5cc);}catch(_0x3bccbe){throw new bad_request_error_1[(_0x2ee91a(0x132))](_0x3bccbe);}}async[a163_0x2362eb(0x14a)](_0x573b2d){const _0x12802b=a163_0x2362eb;try{const _0x7c7aee=await this[_0x12802b(0x14c)][_0x12802b(0x14f)](this['organization']+_0x12802b(0x138)+_0x573b2d);return hook_dto_1[_0x12802b(0x136)][_0x12802b(0x144)](_0x7c7aee);}catch(_0x1215fe){throw new not_found_error_1[(_0x12802b(0x123))](_0x1215fe);}}async[a163_0x2362eb(0x12b)](){const _0x9d7957=a163_0x2362eb;try{const _0x1e3e44=await this[_0x9d7957(0x14c)][_0x9d7957(0x14f)](this['organization']+_0x9d7957(0x125));return _0x1e3e44[_0x9d7957(0x133)][_0x9d7957(0x149)](_0x55fe78=>{const _0x553056=_0x9d7957;var _0x43a98c;return((_0x43a98c=_0x55fe78===null||_0x55fe78===void 0x0?void 0x0:_0x55fe78[_0x553056(0x134)])===null||_0x43a98c===void 0x0?void 0x0:_0x43a98c[_0x553056(0x13c)])===this[_0x553056(0x13c)];})[_0x9d7957(0x137)](_0x201a2b=>hook_dto_1[_0x9d7957(0x136)][_0x9d7957(0x144)](_0x201a2b));}catch(_0x333599){throw new not_found_error_1[(_0x9d7957(0x123))](_0x333599);}}async[a163_0x2362eb(0x131)](_0x4c52fe,_0x5432ca){const _0x433fbf=a163_0x2362eb;try{const _0x40e52f=await this['request'][_0x433fbf(0x141)](this[_0x433fbf(0x12e)]+_0x433fbf(0x138)+_0x4c52fe,_0x5432ca);return hook_dto_1[_0x433fbf(0x136)][_0x433fbf(0x130)](_0x40e52f);}catch(_0x563ade){throw new bad_request_error_1['BadRequestError'](_0x563ade);}}async[a163_0x2362eb(0x13b)](_0xdeebd8){const _0x2c1a5d=a163_0x2362eb;try{await this[_0x2c1a5d(0x14c)][_0x2c1a5d(0x13b)](this['organization']+_0x2c1a5d(0x138)+_0xdeebd8);}catch(_0x3df809){throw new bad_request_error_1['BadRequestError'](_0x3df809);}}}exports['AzureHookService']=AzureHookService;