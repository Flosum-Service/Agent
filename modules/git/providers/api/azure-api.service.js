var a193_0x310a78=a193_0x8a28;function a193_0x18d5(){var _0x4f7e85=['GitApiService','974472sDCSZF','object','__metadata','Tokens','504YCtHlG','__param','__decorate','toString','9109639dtmTVZ','provider','getOwnPropertyDescriptor','apply','application/json;\x20api-version=5.0','1425084rCsnlg','10ccwnxY','../types/git-provider','MAX_REQUEST_PER_HOUR','ERR_INVALID_PROVIDER_CREDENTIALS','request','design:paramtypes','length','4478805YFtjHW','constructor','106716iWSSmx','./git-api.service','metadata','string','isLoggedIn','search','133329cTviAE','45ZWTAKT','__esModule','Service','(((.+)+)+)+$','5339220AivDXG','4FYySZX','function','decorate','credentials','../providers.errors','Inject','/_apis/git/repositories','defineProperty','organization','1IjKHrX','AzureApiService'];a193_0x18d5=function(){return _0x4f7e85;};return a193_0x18d5();}(function(_0x389659,_0x30ec97){var _0x6881c5=a193_0x8a28,_0x1447ce=_0x389659();while(!![]){try{var _0x48b0d5=-parseInt(_0x6881c5(0x165))/0x1*(-parseInt(_0x6881c5(0x175))/0x2)+parseInt(_0x6881c5(0x168))/0x3*(parseInt(_0x6881c5(0x15c))/0x4)+-parseInt(_0x6881c5(0x157))/0x5*(-parseInt(_0x6881c5(0x17f))/0x6)+-parseInt(_0x6881c5(0x156))/0x7*(-parseInt(_0x6881c5(0x16c))/0x8)+-parseInt(_0x6881c5(0x17d))/0x9*(parseInt(_0x6881c5(0x176))/0xa)+-parseInt(_0x6881c5(0x170))/0xb+-parseInt(_0x6881c5(0x15b))/0xc;if(_0x48b0d5===_0x30ec97)break;else _0x1447ce['push'](_0x1447ce['shift']());}catch(_0x4eae5a){_0x1447ce['push'](_0x1447ce['shift']());}}}(a193_0x18d5,0x98ff0));var a193_0x50edad=(function(){var _0x3b22be=!![];return function(_0x1ae02b,_0x3c9eae){var _0x8a8b8e=_0x3b22be?function(){var _0x4de378=a193_0x8a28;if(_0x3c9eae){var _0x426daf=_0x3c9eae[_0x4de378(0x173)](_0x1ae02b,arguments);return _0x3c9eae=null,_0x426daf;}}:function(){};return _0x3b22be=![],_0x8a8b8e;};}()),a193_0x5ee1eb=a193_0x50edad(this,function(){var _0x7f369c=a193_0x8a28;return a193_0x5ee1eb[_0x7f369c(0x16f)]()[_0x7f369c(0x155)](_0x7f369c(0x15a))[_0x7f369c(0x16f)]()[_0x7f369c(0x17e)](a193_0x5ee1eb)[_0x7f369c(0x155)](_0x7f369c(0x15a));});a193_0x5ee1eb();'use strict';function a193_0x8a28(_0x44eb7e,_0x19a96b){var _0xebce29=a193_0x18d5();return a193_0x8a28=function(_0x5ee1eb,_0x50edad){_0x5ee1eb=_0x5ee1eb-0x155;var _0x18d5c4=_0xebce29[_0x5ee1eb];return _0x18d5c4;},a193_0x8a28(_0x44eb7e,_0x19a96b);}var __decorate=this&&this[a193_0x310a78(0x16e)]||function(_0x24f72a,_0x434eeb,_0x4a09bd,_0x299a90){var _0x1e9804=a193_0x310a78,_0x4087bd=arguments['length'],_0x3b8c78=_0x4087bd<0x3?_0x434eeb:_0x299a90===null?_0x299a90=Object[_0x1e9804(0x172)](_0x434eeb,_0x4a09bd):_0x299a90,_0x10585d;if(typeof Reflect===_0x1e9804(0x169)&&typeof Reflect['decorate']===_0x1e9804(0x15d))_0x3b8c78=Reflect[_0x1e9804(0x15e)](_0x24f72a,_0x434eeb,_0x4a09bd,_0x299a90);else{for(var _0x483aa9=_0x24f72a[_0x1e9804(0x17c)]-0x1;_0x483aa9>=0x0;_0x483aa9--)if(_0x10585d=_0x24f72a[_0x483aa9])_0x3b8c78=(_0x4087bd<0x3?_0x10585d(_0x3b8c78):_0x4087bd>0x3?_0x10585d(_0x434eeb,_0x4a09bd,_0x3b8c78):_0x10585d(_0x434eeb,_0x4a09bd))||_0x3b8c78;}return _0x4087bd>0x3&&_0x3b8c78&&Object['defineProperty'](_0x434eeb,_0x4a09bd,_0x3b8c78),_0x3b8c78;},__metadata=this&&this[a193_0x310a78(0x16a)]||function(_0x43b3f8,_0x11d325){var _0x5d0fee=a193_0x310a78;if(typeof Reflect==='object'&&typeof Reflect['metadata']===_0x5d0fee(0x15d))return Reflect[_0x5d0fee(0x181)](_0x43b3f8,_0x11d325);},__param=this&&this[a193_0x310a78(0x16d)]||function(_0x2295ce,_0x525b04){return function(_0x35095b,_0x4e86c8){_0x525b04(_0x35095b,_0x4e86c8,_0x2295ce);};};Object[a193_0x310a78(0x163)](exports,a193_0x310a78(0x158),{'value':!![]}),exports['AzureApiService']=void 0x0;const typedi_1=require('typedi'),git_api_service_1=require(a193_0x310a78(0x180)),providers_tokens_1=require('../providers.tokens'),git_provider_1=require(a193_0x310a78(0x177)),providers_errors_1=require(a193_0x310a78(0x160));let AzureApiService=class AzureApiService extends git_api_service_1[a193_0x310a78(0x167)]{constructor(_0x4a89be,_0x2853cd){var _0x59dea0=a193_0x310a78;super(_0x4a89be,_0x2853cd),this[_0x59dea0(0x178)]=0x2710;}['getHeaders'](){var _0x46dd76=a193_0x310a78;return{'Accept':_0x46dd76(0x174),'Authorization':this[_0x46dd76(0x15f)]['getAuthorizationHeader']()};}async[a193_0x310a78(0x183)](){var _0x3702da=a193_0x310a78;return await this[_0x3702da(0x17a)]['get'](this['credentials'][_0x3702da(0x164)]+_0x3702da(0x162))['then'](_0xaacf5e=>{var _0x2c9c5b=_0x3702da;if(typeof _0xaacf5e===_0x2c9c5b(0x182))throw new Error(providers_errors_1[_0x2c9c5b(0x179)]);}),!![];}};AzureApiService=__decorate([(0x0,typedi_1[a193_0x310a78(0x159)])(),__param(0x0,(0x0,typedi_1[a193_0x310a78(0x161)])(providers_tokens_1[a193_0x310a78(0x16b)][a193_0x310a78(0x171)])),__param(0x1,(0x0,typedi_1[a193_0x310a78(0x161)])(providers_tokens_1[a193_0x310a78(0x16b)][a193_0x310a78(0x15f)])),__metadata(a193_0x310a78(0x17b),[String,Object])],AzureApiService),exports[a193_0x310a78(0x166)]=AzureApiService;