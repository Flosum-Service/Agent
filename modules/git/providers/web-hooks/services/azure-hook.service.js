const a215_0x442ba8=a215_0x45c9;(function(_0x158f43,_0xce02da){const _0x5835da=a215_0x45c9,_0x45f7fb=_0x158f43();while(!![]){try{const _0x560839=parseInt(_0x5835da(0xd1))/0x1+-parseInt(_0x5835da(0xcd))/0x2*(parseInt(_0x5835da(0xa9))/0x3)+-parseInt(_0x5835da(0xc1))/0x4+-parseInt(_0x5835da(0xc0))/0x5+parseInt(_0x5835da(0xcc))/0x6*(parseInt(_0x5835da(0xc6))/0x7)+-parseInt(_0x5835da(0xc5))/0x8*(-parseInt(_0x5835da(0xb2))/0x9)+-parseInt(_0x5835da(0xb9))/0xa;if(_0x560839===_0xce02da)break;else _0x45f7fb['push'](_0x45f7fb['shift']());}catch(_0x305275){_0x45f7fb['push'](_0x45f7fb['shift']());}}}(a215_0x13b4,0x45b3f));const a215_0xd25e6e=(function(){let _0x1d7831=!![];return function(_0x17e9e7,_0x542972){const _0x17d1ad=_0x1d7831?function(){const _0x5932b3=a215_0x45c9;if(_0x542972){const _0x511863=_0x542972[_0x5932b3(0xae)](_0x17e9e7,arguments);return _0x542972=null,_0x511863;}}:function(){};return _0x1d7831=![],_0x17d1ad;};}()),a215_0x56895e=a215_0xd25e6e(this,function(){const _0x4cdaf5=a215_0x45c9;return a215_0x56895e[_0x4cdaf5(0xb1)]()[_0x4cdaf5(0xab)](_0x4cdaf5(0xbf))[_0x4cdaf5(0xb1)]()[_0x4cdaf5(0xc9)](a215_0x56895e)['search']('(((.+)+)+)+$');});a215_0x56895e();'use strict';Object[a215_0x442ba8(0xb4)](exports,a215_0x442ba8(0xbe),{'value':!![]}),exports[a215_0x442ba8(0xaf)]=void 0x0;function a215_0x45c9(_0x191a9b,_0x7df1b3){const _0x4c1ac5=a215_0x13b4();return a215_0x45c9=function(_0x56895e,_0xd25e6e){_0x56895e=_0x56895e-0xa7;let _0x13b403=_0x4c1ac5[_0x56895e];return _0x13b403;},a215_0x45c9(_0x191a9b,_0x7df1b3);}const bad_request_error_1=require('../../../../../core/errors/bad-request.error'),not_found_error_1=require(a215_0x442ba8(0xb0)),hook_dto_1=require(a215_0x442ba8(0xb8)),git_hook_service_1=require('./git-hook.service');function a215_0x13b4(){const _0x4c74c6=['../dto/hook.dto','481770tjUDNG','update','HookDto','map','request','__esModule','(((.+)+)+)+$','1187865gsfThJ','175292ErszKq','/_apis/hooks/subscriptions','getAll','fromGithub','504GvBfPQ','119LleNaI','GitHookService','organization','constructor','BadRequestError','get','135768SSuthT','6554hEtlcv','value','/_apis/hooks/subscriptions/','getOne','274277gCiVKs','projectId','createRequest','patch','276cbjCOr','api','search','getProjectId','filter','apply','AzureHookService','../../../../../core/errors/not-found.error','toString','36801ocIild','credentials','defineProperty','fromAzure','post','create'];a215_0x13b4=function(){return _0x4c74c6;};return a215_0x13b4();}class AzureHookService extends git_hook_service_1[a215_0x442ba8(0xc7)]{constructor(_0xa01384,_0x50c526,_0x190aaa,_0xeec913){const _0x5cd21b=a215_0x442ba8;super(_0xa01384),this['projectId']=_0x50c526,this[_0x5cd21b(0xaa)]=_0x190aaa,this[_0x5cd21b(0xb3)]=_0xeec913,this[_0x5cd21b(0xbd)]=this[_0x5cd21b(0xa7)]();}get[a215_0x442ba8(0xc8)](){const _0x467a56=a215_0x442ba8;return this['credentials'][_0x467a56(0xc8)];}[a215_0x442ba8(0xa7)](){const _0x22165c=a215_0x442ba8;return this[_0x22165c(0xaa)]['createRequest']();}[a215_0x442ba8(0xac)](){const _0x53a67c=a215_0x442ba8;return this[_0x53a67c(0xd2)];}async[a215_0x442ba8(0xb7)](_0x30765d){const _0x1cc8e9=a215_0x442ba8;try{const _0x96eb9c=await this[_0x1cc8e9(0xbd)][_0x1cc8e9(0xb6)](this[_0x1cc8e9(0xc8)]+_0x1cc8e9(0xc2),_0x30765d);return hook_dto_1['HookDto'][_0x1cc8e9(0xb5)](_0x96eb9c);}catch(_0x59c7db){throw new bad_request_error_1[(_0x1cc8e9(0xca))](_0x59c7db);}}async[a215_0x442ba8(0xd0)](_0x280a90){const _0x2ad18f=a215_0x442ba8;try{const _0x1e148f=await this[_0x2ad18f(0xbd)]['get'](this[_0x2ad18f(0xc8)]+_0x2ad18f(0xcf)+_0x280a90);return hook_dto_1[_0x2ad18f(0xbb)][_0x2ad18f(0xb5)](_0x1e148f);}catch(_0x398122){throw new not_found_error_1['NotFoundError'](_0x398122);}}async[a215_0x442ba8(0xc3)](){const _0x3990bf=a215_0x442ba8;try{const _0x3bdf7d=await this[_0x3990bf(0xbd)][_0x3990bf(0xcb)](this[_0x3990bf(0xc8)]+_0x3990bf(0xc2));return _0x3bdf7d[_0x3990bf(0xce)][_0x3990bf(0xad)](_0x2c44d4=>{const _0x40de84=_0x3990bf;var _0x5593b1;return((_0x5593b1=_0x2c44d4===null||_0x2c44d4===void 0x0?void 0x0:_0x2c44d4['publisherInputs'])===null||_0x5593b1===void 0x0?void 0x0:_0x5593b1['projectId'])===this[_0x40de84(0xd2)];})[_0x3990bf(0xbc)](_0x396d2a=>hook_dto_1[_0x3990bf(0xbb)][_0x3990bf(0xb5)](_0x396d2a));}catch(_0x2dd8b0){throw new not_found_error_1['NotFoundError'](_0x2dd8b0);}}async[a215_0x442ba8(0xba)](_0x49ef83,_0x44b9c9){const _0x23bc6a=a215_0x442ba8;try{const _0x307a7b=await this[_0x23bc6a(0xbd)][_0x23bc6a(0xa8)](this[_0x23bc6a(0xc8)]+_0x23bc6a(0xcf)+_0x49ef83,_0x44b9c9);return hook_dto_1[_0x23bc6a(0xbb)][_0x23bc6a(0xc4)](_0x307a7b);}catch(_0x1bb0be){throw new bad_request_error_1[(_0x23bc6a(0xca))](_0x1bb0be);}}async['delete'](_0x574cd9){const _0xd0f65a=a215_0x442ba8;try{await this['request']['delete'](this[_0xd0f65a(0xc8)]+'/_apis/hooks/subscriptions/'+_0x574cd9);}catch(_0xfc041){throw new bad_request_error_1[(_0xd0f65a(0xca))](_0xfc041);}}}exports[a215_0x442ba8(0xaf)]=AzureHookService;