const a215_0x1886a2=a215_0x1b5c;(function(_0x872c4d,_0x460781){const _0x562957=a215_0x1b5c,_0x3be119=_0x872c4d();while(!![]){try{const _0x3342e4=parseInt(_0x562957(0x1ce))/0x1+parseInt(_0x562957(0x1c9))/0x2+parseInt(_0x562957(0x1ac))/0x3+-parseInt(_0x562957(0x1cd))/0x4*(-parseInt(_0x562957(0x1bd))/0x5)+-parseInt(_0x562957(0x1c6))/0x6+parseInt(_0x562957(0x1c7))/0x7*(-parseInt(_0x562957(0x1a7))/0x8)+parseInt(_0x562957(0x1bc))/0x9*(-parseInt(_0x562957(0x1b5))/0xa);if(_0x3342e4===_0x460781)break;else _0x3be119['push'](_0x3be119['shift']());}catch(_0x378079){_0x3be119['push'](_0x3be119['shift']());}}}(a215_0x4891,0x46951));const a215_0x555c87=(function(){let _0x401844=!![];return function(_0x2d1fc3,_0x1e3909){const _0xd699fd=_0x401844?function(){const _0x3078f2=a215_0x1b5c;if(_0x1e3909){const _0x5e5e2d=_0x1e3909[_0x3078f2(0x1c1)](_0x2d1fc3,arguments);return _0x1e3909=null,_0x5e5e2d;}}:function(){};return _0x401844=![],_0xd699fd;};}()),a215_0x5afd5f=a215_0x555c87(this,function(){const _0x52bd5e=a215_0x1b5c;return a215_0x5afd5f['toString']()[_0x52bd5e(0x1a8)](_0x52bd5e(0x1b0))[_0x52bd5e(0x1ba)]()[_0x52bd5e(0x1c8)](a215_0x5afd5f)[_0x52bd5e(0x1a8)](_0x52bd5e(0x1b0));});a215_0x5afd5f();'use strict';function a215_0x1b5c(_0x4d362e,_0x7a08d9){const _0x470f07=a215_0x4891();return a215_0x1b5c=function(_0x5afd5f,_0x555c87){_0x5afd5f=_0x5afd5f-0x1a7;let _0x4891b4=_0x470f07[_0x5afd5f];return _0x4891b4;},a215_0x1b5c(_0x4d362e,_0x7a08d9);}Object[a215_0x1886a2(0x1b1)](exports,'__esModule',{'value':!![]}),exports[a215_0x1886a2(0x1b3)]=void 0x0;const bad_request_error_1=require(a215_0x1886a2(0x1c2)),not_found_error_1=require(a215_0x1886a2(0x1b4)),hook_dto_1=require(a215_0x1886a2(0x1cc)),git_hook_service_1=require(a215_0x1886a2(0x1c4));function a215_0x4891(){const _0x56a672=['fromGitlab','99678jUWuwX','1214857bioutL','constructor','850252WTWbcj','hooks','post','../dto/hook.dto','1600FQRlek','386020TMEbnO','createRequest','8thPQGb','search','getOne','repository','apiUrl','1674126AjBJfN','getAll','api','NotFoundError','(((.+)+)+)+$','defineProperty','update','GitlabHookService','../../../../../core/errors/not-found.error','1200290yQFSeS','BadRequestError','hooks/','request','delete','toString','create','99xxeDqY','5380Hvmoya','get','HookDto','put','apply','../../../../../core/errors/bad-request.error','map','./git-hook.service'];a215_0x4891=function(){return _0x56a672;};return a215_0x4891();}class GitlabHookService extends git_hook_service_1['GitHookService']{constructor(_0x531c17,_0x233455){const _0x1df608=a215_0x1886a2;super(_0x531c17),this['api']=_0x233455,this[_0x1df608(0x1b8)]=this[_0x1df608(0x1cf)]();}[a215_0x1886a2(0x1cf)](){const _0x26666f=a215_0x1886a2;return this[_0x26666f(0x1ae)][_0x26666f(0x1cf)](this[_0x26666f(0x1aa)][_0x26666f(0x1ab)]);}async[a215_0x1886a2(0x1bb)](_0x5c15da){const _0x26856e=a215_0x1886a2;try{const _0x36a618=await this[_0x26856e(0x1b8)][_0x26856e(0x1cb)](_0x26856e(0x1ca),_0x5c15da);return hook_dto_1['HookDto']['fromGitlab'](_0x36a618);}catch(_0x135eec){throw new bad_request_error_1[(_0x26856e(0x1b6))](_0x135eec);}}async[a215_0x1886a2(0x1a9)](_0x40afa7){const _0x335d3d=a215_0x1886a2;try{const _0x12476d=await this[_0x335d3d(0x1b8)]['get']('hooks/'+_0x40afa7);return hook_dto_1[_0x335d3d(0x1bf)][_0x335d3d(0x1c5)](_0x12476d);}catch(_0xf52446){throw new not_found_error_1[(_0x335d3d(0x1af))](_0xf52446);}}async[a215_0x1886a2(0x1ad)](){const _0x2f4359=a215_0x1886a2;try{const _0x38a412=await this[_0x2f4359(0x1b8)][_0x2f4359(0x1be)]('hooks');return _0x38a412[_0x2f4359(0x1c3)](_0x224d12=>hook_dto_1[_0x2f4359(0x1bf)][_0x2f4359(0x1c5)](_0x224d12));}catch(_0x33d7b2){throw new not_found_error_1[(_0x2f4359(0x1af))](_0x33d7b2);}}async[a215_0x1886a2(0x1b2)](_0x56558e,_0x23718c){const _0x17ad78=a215_0x1886a2;try{const _0x548a25=await this[_0x17ad78(0x1b8)][_0x17ad78(0x1c0)](_0x17ad78(0x1b7)+_0x56558e,_0x23718c);return hook_dto_1[_0x17ad78(0x1bf)]['fromGitlab'](_0x548a25);}catch(_0x2ff3df){throw new not_found_error_1[(_0x17ad78(0x1af))](_0x2ff3df);}}async['delete'](_0x3204d1){const _0x482415=a215_0x1886a2;try{await this[_0x482415(0x1b8)][_0x482415(0x1b9)](_0x482415(0x1b7)+_0x3204d1);}catch(_0x163ce2){throw new not_found_error_1[(_0x482415(0x1af))](_0x163ce2);}}}exports[a215_0x1886a2(0x1b3)]=GitlabHookService;