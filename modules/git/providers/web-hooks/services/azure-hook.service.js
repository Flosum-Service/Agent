const a236_0x5bfeca=a236_0x57d3;(function(_0x35ab05,_0x262dc1){const _0x22fc9f=a236_0x57d3,_0x149f2a=_0x35ab05();while(!![]){try{const _0x46dfc0=parseInt(_0x22fc9f(0x177))/0x1*(parseInt(_0x22fc9f(0x168))/0x2)+-parseInt(_0x22fc9f(0x179))/0x3*(parseInt(_0x22fc9f(0x157))/0x4)+-parseInt(_0x22fc9f(0x161))/0x5*(parseInt(_0x22fc9f(0x16f))/0x6)+-parseInt(_0x22fc9f(0x17c))/0x7+parseInt(_0x22fc9f(0x17a))/0x8+parseInt(_0x22fc9f(0x167))/0x9+-parseInt(_0x22fc9f(0x163))/0xa*(-parseInt(_0x22fc9f(0x16b))/0xb);if(_0x46dfc0===_0x262dc1)break;else _0x149f2a['push'](_0x149f2a['shift']());}catch(_0x13cb0a){_0x149f2a['push'](_0x149f2a['shift']());}}}(a236_0x5ea1,0x2183b));const a236_0x55d273=(function(){let _0x539a28=!![];return function(_0x111a52,_0x290761){const _0x3ac79b=_0x539a28?function(){const _0x15f94d=a236_0x57d3;if(_0x290761){const _0x3c37b9=_0x290761[_0x15f94d(0x162)](_0x111a52,arguments);return _0x290761=null,_0x3c37b9;}}:function(){};return _0x539a28=![],_0x3ac79b;};}()),a236_0x3e051f=a236_0x55d273(this,function(){const _0x37af1f=a236_0x57d3;return a236_0x3e051f[_0x37af1f(0x172)]()['search'](_0x37af1f(0x166))['toString']()['constructor'](a236_0x3e051f)[_0x37af1f(0x170)](_0x37af1f(0x166));});a236_0x3e051f();function a236_0x57d3(_0xf67fe8,_0x2fdb82){const _0x41ebba=a236_0x5ea1();return a236_0x57d3=function(_0x3e051f,_0x55d273){_0x3e051f=_0x3e051f-0x153;let _0x5ea1ec=_0x41ebba[_0x3e051f];return _0x5ea1ec;},a236_0x57d3(_0xf67fe8,_0x2fdb82);}'use strict';Object[a236_0x5bfeca(0x171)](exports,a236_0x5bfeca(0x178),{'value':!![]}),exports[a236_0x5bfeca(0x158)]=void 0x0;const bad_request_error_1=require(a236_0x5bfeca(0x16d)),not_found_error_1=require(a236_0x5bfeca(0x16c)),hook_dto_1=require('../dto/hook.dto'),git_hook_service_1=require(a236_0x5bfeca(0x175));class AzureHookService extends git_hook_service_1[a236_0x5bfeca(0x176)]{constructor(_0x568753,_0x40c145,_0x117c96,_0x401060){const _0x4587ef=a236_0x5bfeca;super(_0x568753),this[_0x4587ef(0x15b)]=_0x40c145,this[_0x4587ef(0x156)]=_0x117c96,this[_0x4587ef(0x174)]=_0x401060,this[_0x4587ef(0x15c)]=this[_0x4587ef(0x160)]();}get[a236_0x5bfeca(0x164)](){const _0x13114a=a236_0x5bfeca;return this[_0x13114a(0x174)][_0x13114a(0x164)];}[a236_0x5bfeca(0x160)](){const _0x4fae1a=a236_0x5bfeca;return this['api'][_0x4fae1a(0x160)]();}['getProjectId'](){const _0x370bc1=a236_0x5bfeca;return this[_0x370bc1(0x15b)];}async['create'](_0x586c9b){const _0x5db5d4=a236_0x5bfeca;try{const _0xb285ac=await this[_0x5db5d4(0x15c)][_0x5db5d4(0x155)](this['organization']+_0x5db5d4(0x17d),_0x586c9b);return hook_dto_1[_0x5db5d4(0x16e)][_0x5db5d4(0x16a)](_0xb285ac);}catch(_0x364b8f){throw new bad_request_error_1[(_0x5db5d4(0x154))](_0x364b8f);}}async['getOne'](_0x44f79a){const _0x5cb530=a236_0x5bfeca;try{const _0x18e739=await this[_0x5cb530(0x15c)]['get'](this[_0x5cb530(0x164)]+_0x5cb530(0x15a)+_0x44f79a);return hook_dto_1[_0x5cb530(0x16e)][_0x5cb530(0x16a)](_0x18e739);}catch(_0x3a8b72){throw new not_found_error_1['NotFoundError'](_0x3a8b72);}}async['getAll'](){const _0x6e7eb=a236_0x5bfeca;try{const _0x2fea7a=await this['request'][_0x6e7eb(0x173)](this[_0x6e7eb(0x164)]+_0x6e7eb(0x17d));return _0x2fea7a[_0x6e7eb(0x165)][_0x6e7eb(0x159)](_0x5dab1c=>{const _0x47549b=_0x6e7eb;var _0xfd30c;return((_0xfd30c=_0x5dab1c===null||_0x5dab1c===void 0x0?void 0x0:_0x5dab1c[_0x47549b(0x15f)])===null||_0xfd30c===void 0x0?void 0x0:_0xfd30c['projectId'])===this[_0x47549b(0x15b)];})[_0x6e7eb(0x15d)](_0x5d9e12=>hook_dto_1[_0x6e7eb(0x16e)][_0x6e7eb(0x16a)](_0x5d9e12));}catch(_0x33c21b){throw new not_found_error_1[(_0x6e7eb(0x15e))](_0x33c21b);}}async['update'](_0xbd020c,_0x314fed){const _0x19a4ce=a236_0x5bfeca;try{const _0x32ef8b=await this['request'][_0x19a4ce(0x17b)](this['organization']+_0x19a4ce(0x15a)+_0xbd020c,_0x314fed);return hook_dto_1['HookDto'][_0x19a4ce(0x153)](_0x32ef8b);}catch(_0xf8e894){throw new bad_request_error_1[(_0x19a4ce(0x154))](_0xf8e894);}}async[a236_0x5bfeca(0x169)](_0x33697c){const _0x5d1262=a236_0x5bfeca;try{await this[_0x5d1262(0x15c)][_0x5d1262(0x169)](this[_0x5d1262(0x164)]+_0x5d1262(0x15a)+_0x33697c);}catch(_0x47d89a){throw new bad_request_error_1[(_0x5d1262(0x154))](_0x47d89a);}}}function a236_0x5ea1(){const _0x4c1581=['193880hnJMko','patch','1738653QkqXwU','/_apis/hooks/subscriptions','fromGithub','BadRequestError','post','api','44qaLeYd','AzureHookService','filter','/_apis/hooks/subscriptions/','projectId','request','map','NotFoundError','publisherInputs','createRequest','167270eiKadw','apply','70JcjAle','organization','value','(((.+)+)+)+$','2098719ECUPuX','2pnYVTD','delete','fromAzure','293073GASuHE','../../../../../core/errors/not-found.error','../../../../../core/errors/bad-request.error','HookDto','6OaNZmK','search','defineProperty','toString','get','credentials','./git-hook.service','GitHookService','95334VwhVeG','__esModule','32769zZXoyX'];a236_0x5ea1=function(){return _0x4c1581;};return a236_0x5ea1();}exports[a236_0x5bfeca(0x158)]=AzureHookService;