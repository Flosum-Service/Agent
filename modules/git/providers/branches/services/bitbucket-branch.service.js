const a174_0x1cdba9=a174_0x497e;(function(_0x193ecd,_0x58b719){const _0x474bbe=a174_0x497e,_0x2ca6ea=_0x193ecd();while(!![]){try{const _0x333641=parseInt(_0x474bbe(0xc0))/0x1+parseInt(_0x474bbe(0xcc))/0x2*(-parseInt(_0x474bbe(0xd5))/0x3)+parseInt(_0x474bbe(0xc7))/0x4+parseInt(_0x474bbe(0xd1))/0x5*(-parseInt(_0x474bbe(0xcb))/0x6)+parseInt(_0x474bbe(0xca))/0x7*(-parseInt(_0x474bbe(0xc5))/0x8)+-parseInt(_0x474bbe(0xbf))/0x9+parseInt(_0x474bbe(0xce))/0xa;if(_0x333641===_0x58b719)break;else _0x2ca6ea['push'](_0x2ca6ea['shift']());}catch(_0x1f4476){_0x2ca6ea['push'](_0x2ca6ea['shift']());}}}(a174_0x22c4,0x24dca));function a174_0x497e(_0x332ab3,_0x5a1acb){const _0x4f10d7=a174_0x22c4();return a174_0x497e=function(_0x4e9f6c,_0x2e8cdc){_0x4e9f6c=_0x4e9f6c-0xbf;let _0x22c494=_0x4f10d7[_0x4e9f6c];return _0x22c494;},a174_0x497e(_0x332ab3,_0x5a1acb);}const a174_0x2e8cdc=(function(){let _0x522e4a=!![];return function(_0x3272f5,_0x3b30a2){const _0x541b39=_0x522e4a?function(){const _0x3e5067=a174_0x497e;if(_0x3b30a2){const _0x55c52c=_0x3b30a2[_0x3e5067(0xcf)](_0x3272f5,arguments);return _0x3b30a2=null,_0x55c52c;}}:function(){};return _0x522e4a=![],_0x541b39;};}()),a174_0x4e9f6c=a174_0x2e8cdc(this,function(){const _0xed046d=a174_0x497e;return a174_0x4e9f6c[_0xed046d(0xd9)]()[_0xed046d(0xc4)](_0xed046d(0xd2))[_0xed046d(0xd9)]()[_0xed046d(0xd0)](a174_0x4e9f6c)['search']('(((.+)+)+)+$');});a174_0x4e9f6c();'use strict';Object[a174_0x1cdba9(0xc2)](exports,a174_0x1cdba9(0xc6),{'value':!![]}),exports['BitbucketBranchService']=void 0x0;function a174_0x22c4(){const _0x509afc=['46824oddhBY','__esModule','430548kqfBDG','api','repository','308bOscyz','84eNcZnl','78468aIJEyX','./git-branch.service','6210790iHcHjF','apply','constructor','55855ZVHgOK','(((.+)+)+)+$','createRequest','../../../../../core/errors/not-found.error','9glrtYO','NotFoundError','apiUrl','request','toString','1157220VpMJiq','82478AuALVI','BitbucketBranchService','defineProperty','delete','search'];a174_0x22c4=function(){return _0x509afc;};return a174_0x22c4();}const not_found_error_1=require(a174_0x1cdba9(0xd4)),git_branch_service_1=require(a174_0x1cdba9(0xcd));class BitbucketBranchService extends git_branch_service_1['GitBranchService']{constructor(_0x3fc7f9,_0x47034c,_0x1c8be3){const _0x2086d3=a174_0x1cdba9;super(_0x3fc7f9,_0x1c8be3),this[_0x2086d3(0xc8)]=_0x47034c,this[_0x2086d3(0xd8)]=this[_0x2086d3(0xd3)]();}[a174_0x1cdba9(0xd3)](){const _0x214de4=a174_0x1cdba9;return this[_0x214de4(0xc8)]['createRequest'](this[_0x214de4(0xc9)][_0x214de4(0xd7)]);}async['delete'](_0x2a377a){const _0x49ced2=a174_0x1cdba9;try{await this[_0x49ced2(0xd8)][_0x49ced2(0xc3)]('refs/branches/'+_0x2a377a);}catch(_0x4e20a3){throw new not_found_error_1[(_0x49ced2(0xd6))](_0x4e20a3);}}}exports[a174_0x1cdba9(0xc1)]=BitbucketBranchService;