function a78_0x2d3c(_0x529a73,_0x1dbb57){const _0xdc929e=a78_0x34d6();return a78_0x2d3c=function(_0x220b65,_0x5e0885){_0x220b65=_0x220b65-0x13d;let _0x34d6ab=_0xdc929e[_0x220b65];return _0x34d6ab;},a78_0x2d3c(_0x529a73,_0x1dbb57);}const a78_0x56be08=a78_0x2d3c;(function(_0x210aeb,_0x211640){const _0x27271f=a78_0x2d3c,_0x2cb508=_0x210aeb();while(!![]){try{const _0x3c023e=-parseInt(_0x27271f(0x14e))/0x1+parseInt(_0x27271f(0x145))/0x2+-parseInt(_0x27271f(0x161))/0x3+-parseInt(_0x27271f(0x14c))/0x4*(parseInt(_0x27271f(0x14a))/0x5)+parseInt(_0x27271f(0x150))/0x6+parseInt(_0x27271f(0x143))/0x7+parseInt(_0x27271f(0x15c))/0x8;if(_0x3c023e===_0x211640)break;else _0x2cb508['push'](_0x2cb508['shift']());}catch(_0x2007ab){_0x2cb508['push'](_0x2cb508['shift']());}}}(a78_0x34d6,0xb6b5d));const a78_0x5e0885=(function(){let _0x594ff1=!![];return function(_0x3532fa,_0x3ebcfc){const _0x55a23a=_0x594ff1?function(){const _0x38946a=a78_0x2d3c;if(_0x3ebcfc){const _0x241fe3=_0x3ebcfc[_0x38946a(0x13f)](_0x3532fa,arguments);return _0x3ebcfc=null,_0x241fe3;}}:function(){};return _0x594ff1=![],_0x55a23a;};}()),a78_0x220b65=a78_0x5e0885(this,function(){const _0x101029=a78_0x2d3c;return a78_0x220b65[_0x101029(0x166)]()[_0x101029(0x160)](_0x101029(0x165))[_0x101029(0x166)]()[_0x101029(0x168)](a78_0x220b65)['search'](_0x101029(0x165));});a78_0x220b65();'use strict';var __importDefault=this&&this[a78_0x56be08(0x16c)]||function(_0x353a10){const _0x46d90e=a78_0x56be08;return _0x353a10&&_0x353a10[_0x46d90e(0x147)]?_0x353a10:{'default':_0x353a10};};Object[a78_0x56be08(0x153)](exports,a78_0x56be08(0x147),{'value':!![]}),exports[a78_0x56be08(0x14f)]=void 0x0;function a78_0x34d6(){const _0x392958=['createRequest','create','apply','map','getOne','default','9477195INmNem','delete','690518hZHisN','/_apis/hooks/subscriptions/','__esModule','projectId','../../../core/errors/not-found.error','3620WnvvuW','get','3152mdIDsl','filter','1398230ngwksU','AzureHookService','2073354venaty','authService','value','defineProperty','HookDto','../../shared/services/auth-settings.service','GitHookService','NotFoundError','/_apis/hooks/subscriptions','fromGithub','update','request','14168864evQyPV','azure','post','BadRequestError','search','3296064uVXknb','patch','typedi','fromAzure','(((.+)+)+)+$','toString','AuthSettingsService','constructor','publisherInputs','organization','getProjectId','__importDefault','../dto/hook.dto'];a78_0x34d6=function(){return _0x392958;};return a78_0x34d6();}const bad_request_error_1=require('../../../core/errors/bad-request.error'),not_found_error_1=require(a78_0x56be08(0x149)),typedi_1=__importDefault(require(a78_0x56be08(0x163))),azure_api_service_1=require('../../git-api/services/azure-api.service'),auth_settings_service_1=require(a78_0x56be08(0x155)),hook_dto_1=require(a78_0x56be08(0x16d)),git_hook_service_1=require('./git-hook.service');class AzureHookService extends git_hook_service_1[a78_0x56be08(0x156)]{constructor(_0x18cb9b,_0x41d69f){const _0x10ea4f=a78_0x56be08;super(_0x18cb9b),this[_0x10ea4f(0x148)]=_0x41d69f,this[_0x10ea4f(0x151)]=typedi_1[_0x10ea4f(0x142)][_0x10ea4f(0x14b)](auth_settings_service_1[_0x10ea4f(0x167)]),this[_0x10ea4f(0x15b)]=this[_0x10ea4f(0x13d)]();}get[a78_0x56be08(0x16a)](){const _0xc2ccbe=a78_0x56be08;return this[_0xc2ccbe(0x151)][_0xc2ccbe(0x15d)][_0xc2ccbe(0x16a)];}[a78_0x56be08(0x13d)](){const _0x50fd86=a78_0x56be08,_0xf17c67=typedi_1[_0x50fd86(0x142)][_0x50fd86(0x14b)](azure_api_service_1['AzureApiService']);return _0xf17c67[_0x50fd86(0x13d)]();}[a78_0x56be08(0x16b)](){return this['projectId'];}async[a78_0x56be08(0x13e)](_0x3517f3){const _0x14a722=a78_0x56be08;try{const _0x483ccc=await this['request'][_0x14a722(0x15e)](this['organization']+_0x14a722(0x158),_0x3517f3);return hook_dto_1[_0x14a722(0x154)]['fromAzure'](_0x483ccc);}catch(_0x4baa4c){throw new bad_request_error_1['BadRequestError'](_0x4baa4c);}}async[a78_0x56be08(0x141)](_0x17773e){const _0x231b5c=a78_0x56be08;try{const _0xc4e99e=await this[_0x231b5c(0x15b)][_0x231b5c(0x14b)](this[_0x231b5c(0x16a)]+_0x231b5c(0x146)+_0x17773e);return hook_dto_1[_0x231b5c(0x154)][_0x231b5c(0x164)](_0xc4e99e);}catch(_0x3418b0){throw new not_found_error_1[(_0x231b5c(0x157))](_0x3418b0);}}async['getAll'](){const _0x38e8a4=a78_0x56be08;try{const _0x404c3a=await this[_0x38e8a4(0x15b)][_0x38e8a4(0x14b)](this['organization']+_0x38e8a4(0x158));return _0x404c3a[_0x38e8a4(0x152)][_0x38e8a4(0x14d)](_0x515ce5=>{const _0x1a7649=_0x38e8a4;var _0x317b02;return((_0x317b02=_0x515ce5===null||_0x515ce5===void 0x0?void 0x0:_0x515ce5[_0x1a7649(0x169)])===null||_0x317b02===void 0x0?void 0x0:_0x317b02['projectId'])===this[_0x1a7649(0x148)];})[_0x38e8a4(0x140)](_0x3cf50b=>hook_dto_1[_0x38e8a4(0x154)][_0x38e8a4(0x164)](_0x3cf50b));}catch(_0x169cfc){throw new not_found_error_1['NotFoundError'](_0x169cfc);}}async[a78_0x56be08(0x15a)](_0x229d4b,_0x45f2c2){const _0x4215ca=a78_0x56be08;try{const _0x2ddebf=await this['request'][_0x4215ca(0x162)](this['organization']+_0x4215ca(0x146)+_0x229d4b,_0x45f2c2);return hook_dto_1[_0x4215ca(0x154)][_0x4215ca(0x159)](_0x2ddebf);}catch(_0x1f50b0){throw new bad_request_error_1[(_0x4215ca(0x15f))](_0x1f50b0);}}async['delete'](_0x44cac1){const _0x498fbb=a78_0x56be08;try{await this[_0x498fbb(0x15b)][_0x498fbb(0x144)](this[_0x498fbb(0x16a)]+_0x498fbb(0x146)+_0x44cac1);}catch(_0x242c76){throw new bad_request_error_1['BadRequestError'](_0x242c76);}}}exports[a78_0x56be08(0x14f)]=AzureHookService;