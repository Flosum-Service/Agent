var a201_0x418bd4=a201_0x3a02;(function(_0x4f496c,_0x3a32af){var _0x3cc0c3=a201_0x3a02,_0x336821=_0x4f496c();while(!![]){try{var _0x250a32=parseInt(_0x3cc0c3(0x1a5))/0x1*(parseInt(_0x3cc0c3(0x1bf))/0x2)+parseInt(_0x3cc0c3(0x19e))/0x3+-parseInt(_0x3cc0c3(0x1aa))/0x4+-parseInt(_0x3cc0c3(0x1a2))/0x5*(parseInt(_0x3cc0c3(0x1c4))/0x6)+parseInt(_0x3cc0c3(0x1b0))/0x7+-parseInt(_0x3cc0c3(0x1ba))/0x8*(parseInt(_0x3cc0c3(0x1a7))/0x9)+-parseInt(_0x3cc0c3(0x1b2))/0xa*(-parseInt(_0x3cc0c3(0x1b1))/0xb);if(_0x250a32===_0x3a32af)break;else _0x336821['push'](_0x336821['shift']());}catch(_0x7135de){_0x336821['push'](_0x336821['shift']());}}}(a201_0x58ad,0xf056b));function a201_0x3a02(_0x1f6cfc,_0x3c9c8e){var _0x25f3d1=a201_0x58ad();return a201_0x3a02=function(_0x34a1eb,_0x476d05){_0x34a1eb=_0x34a1eb-0x199;var _0x58ad7a=_0x25f3d1[_0x34a1eb];return _0x58ad7a;},a201_0x3a02(_0x1f6cfc,_0x3c9c8e);}var a201_0x476d05=(function(){var _0x40f9ba=!![];return function(_0x44b33c,_0x473aa8){var _0x5bd73e=_0x40f9ba?function(){if(_0x473aa8){var _0x667fe0=_0x473aa8['apply'](_0x44b33c,arguments);return _0x473aa8=null,_0x667fe0;}}:function(){};return _0x40f9ba=![],_0x5bd73e;};}()),a201_0x34a1eb=a201_0x476d05(this,function(){var _0x43f5ec=a201_0x3a02;return a201_0x34a1eb['toString']()['search'](_0x43f5ec(0x1be))[_0x43f5ec(0x1b6)]()[_0x43f5ec(0x1c3)](a201_0x34a1eb)[_0x43f5ec(0x1a3)](_0x43f5ec(0x1be));});function a201_0x58ad(){var _0x11f265=['length','(((.+)+)+)+$','1486Rdorpb','application/vnd.github.v3+json','MAX_REQUEST_PER_HOUR','getAuthorizationHeader','constructor','6vFkXdN','Service','user','Inject','object','defineProperty','5209428DVhkyi','credentials','decorate','getHeaders','2142885KdYXTg','search','GitlabApiService','454DoalhI','function','4250349miBYIY','metadata','__esModule','2370464HTMRaF','./git-api.service','GitApiService','design:paramtypes','Tokens','request','153965FqPrOC','2101484uDVwYn','20fAMWaD','isLoggedIn','provider','groups/','toString','getCurrentUser','__metadata','../providers.tokens','8QlpthK','__param','__decorate'];a201_0x58ad=function(){return _0x11f265;};return a201_0x58ad();}a201_0x34a1eb();'use strict';var __decorate=this&&this[a201_0x418bd4(0x1bc)]||function(_0xbdefde,_0x2acf6b,_0x4115d0,_0x36f8fc){var _0x1f9fdb=a201_0x418bd4,_0x13a553=arguments[_0x1f9fdb(0x1bd)],_0x55ced5=_0x13a553<0x3?_0x2acf6b:_0x36f8fc===null?_0x36f8fc=Object['getOwnPropertyDescriptor'](_0x2acf6b,_0x4115d0):_0x36f8fc,_0x64f182;if(typeof Reflect===_0x1f9fdb(0x19c)&&typeof Reflect[_0x1f9fdb(0x1a0)]===_0x1f9fdb(0x1a6))_0x55ced5=Reflect[_0x1f9fdb(0x1a0)](_0xbdefde,_0x2acf6b,_0x4115d0,_0x36f8fc);else{for(var _0x30303d=_0xbdefde[_0x1f9fdb(0x1bd)]-0x1;_0x30303d>=0x0;_0x30303d--)if(_0x64f182=_0xbdefde[_0x30303d])_0x55ced5=(_0x13a553<0x3?_0x64f182(_0x55ced5):_0x13a553>0x3?_0x64f182(_0x2acf6b,_0x4115d0,_0x55ced5):_0x64f182(_0x2acf6b,_0x4115d0))||_0x55ced5;}return _0x13a553>0x3&&_0x55ced5&&Object[_0x1f9fdb(0x19d)](_0x2acf6b,_0x4115d0,_0x55ced5),_0x55ced5;},__metadata=this&&this[a201_0x418bd4(0x1b8)]||function(_0x3c488a,_0x4e0573){var _0x407f19=a201_0x418bd4;if(typeof Reflect===_0x407f19(0x19c)&&typeof Reflect[_0x407f19(0x1a8)]===_0x407f19(0x1a6))return Reflect[_0x407f19(0x1a8)](_0x3c488a,_0x4e0573);},__param=this&&this[a201_0x418bd4(0x1bb)]||function(_0x49d2b9,_0x2f9c02){return function(_0x11ed33,_0x13f4ac){_0x2f9c02(_0x11ed33,_0x13f4ac,_0x49d2b9);};};Object[a201_0x418bd4(0x19d)](exports,a201_0x418bd4(0x1a9),{'value':!![]}),exports[a201_0x418bd4(0x1a4)]=void 0x0;const typedi_1=require('typedi'),git_api_service_1=require(a201_0x418bd4(0x1ab)),providers_tokens_1=require(a201_0x418bd4(0x1b9)),git_provider_1=require('../types/git-provider');let GitlabApiService=class GitlabApiService extends git_api_service_1[a201_0x418bd4(0x1ac)]{constructor(_0x4b5aef,_0xa4d794){var _0x4dc293=a201_0x418bd4;super(_0x4b5aef,_0xa4d794),this[_0x4dc293(0x1c1)]=0xe10;}[a201_0x418bd4(0x1a1)](){var _0x1881bb=a201_0x418bd4;return{'Accept':_0x1881bb(0x1c0),'Authorization':this[_0x1881bb(0x19f)][_0x1881bb(0x1c2)]()};}[a201_0x418bd4(0x1b7)](){var _0x573dac=a201_0x418bd4;return this[_0x573dac(0x1af)]['get'](_0x573dac(0x19a));}['getGroup'](_0x286555){var _0x5d6626=a201_0x418bd4;return this[_0x5d6626(0x1af)]['get'](_0x5d6626(0x1b5)+_0x286555);}async[a201_0x418bd4(0x1b3)](){var _0xaeacb1=a201_0x418bd4;return await this[_0xaeacb1(0x1b7)](),!![];}};GitlabApiService=__decorate([(0x0,typedi_1[a201_0x418bd4(0x199)])(),__param(0x0,(0x0,typedi_1[a201_0x418bd4(0x19b)])(providers_tokens_1[a201_0x418bd4(0x1ae)][a201_0x418bd4(0x1b4)])),__param(0x1,(0x0,typedi_1[a201_0x418bd4(0x19b)])(providers_tokens_1[a201_0x418bd4(0x1ae)]['credentials'])),__metadata(a201_0x418bd4(0x1ad),[String,Object])],GitlabApiService),exports['GitlabApiService']=GitlabApiService;