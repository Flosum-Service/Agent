var a193_0x1f2f4e=a193_0x1643;function a193_0xa6dc(){var _0x4cd879=['2885RXHQzE','4715208mxyiVS','decorate','GitApiService','typedi','isLoggedIn','Tokens','__esModule','getAuthorizationHeader','../types/git-provider','credentials','search','9LGRZzF','Service','2122524BsCUKZ','2510094sjvZQQ','function','provider','then','getHeaders','Inject','14tWSDCv','metadata','defineProperty','__param','string','apply','(((.+)+)+)+$','6735660rbeCRc','../providers.tokens','constructor','1208WsaUCj','__decorate','length','design:paramtypes','/_apis/git/repositories','ERR_INVALID_PROVIDER_CREDENTIALS','object','./git-api.service','organization','../providers.errors','request','AzureApiService','1385313NcNUlA','31869QXYPGQ'];a193_0xa6dc=function(){return _0x4cd879;};return a193_0xa6dc();}(function(_0x2cb02a,_0x4fc776){var _0x44a4ee=a193_0x1643,_0x4ae5f1=_0x2cb02a();while(!![]){try{var _0x40b9a4=-parseInt(_0x44a4ee(0x18f))/0x1+parseInt(_0x44a4ee(0x171))/0x2+parseInt(_0x44a4ee(0x18e))/0x3+parseInt(_0x44a4ee(0x182))/0x4*(parseInt(_0x44a4ee(0x190))/0x5)+parseInt(_0x44a4ee(0x172))/0x6*(-parseInt(_0x44a4ee(0x178))/0x7)+parseInt(_0x44a4ee(0x191))/0x8+parseInt(_0x44a4ee(0x19c))/0x9*(-parseInt(_0x44a4ee(0x17f))/0xa);if(_0x40b9a4===_0x4fc776)break;else _0x4ae5f1['push'](_0x4ae5f1['shift']());}catch(_0x3c9503){_0x4ae5f1['push'](_0x4ae5f1['shift']());}}}(a193_0xa6dc,0xb5c6b));var a193_0x52912d=(function(){var _0x583bac=!![];return function(_0x452c6e,_0x112559){var _0x54bd2d=_0x583bac?function(){var _0x453093=a193_0x1643;if(_0x112559){var _0x2705be=_0x112559[_0x453093(0x17d)](_0x452c6e,arguments);return _0x112559=null,_0x2705be;}}:function(){};return _0x583bac=![],_0x54bd2d;};}()),a193_0x1b654d=a193_0x52912d(this,function(){var _0x51c8b0=a193_0x1643;return a193_0x1b654d['toString']()[_0x51c8b0(0x19b)](_0x51c8b0(0x17e))['toString']()[_0x51c8b0(0x181)](a193_0x1b654d)['search']('(((.+)+)+)+$');});a193_0x1b654d();'use strict';var __decorate=this&&this[a193_0x1f2f4e(0x183)]||function(_0x56a905,_0x416f44,_0x1cae06,_0x5bb972){var _0x30e085=a193_0x1f2f4e,_0x1d29ae=arguments[_0x30e085(0x184)],_0x106c69=_0x1d29ae<0x3?_0x416f44:_0x5bb972===null?_0x5bb972=Object['getOwnPropertyDescriptor'](_0x416f44,_0x1cae06):_0x5bb972,_0x3e9d6d;if(typeof Reflect===_0x30e085(0x188)&&typeof Reflect[_0x30e085(0x192)]===_0x30e085(0x173))_0x106c69=Reflect[_0x30e085(0x192)](_0x56a905,_0x416f44,_0x1cae06,_0x5bb972);else{for(var _0x487d86=_0x56a905['length']-0x1;_0x487d86>=0x0;_0x487d86--)if(_0x3e9d6d=_0x56a905[_0x487d86])_0x106c69=(_0x1d29ae<0x3?_0x3e9d6d(_0x106c69):_0x1d29ae>0x3?_0x3e9d6d(_0x416f44,_0x1cae06,_0x106c69):_0x3e9d6d(_0x416f44,_0x1cae06))||_0x106c69;}return _0x1d29ae>0x3&&_0x106c69&&Object[_0x30e085(0x17a)](_0x416f44,_0x1cae06,_0x106c69),_0x106c69;},__metadata=this&&this['__metadata']||function(_0x1d3c5f,_0x1b3230){var _0x30ff89=a193_0x1f2f4e;if(typeof Reflect===_0x30ff89(0x188)&&typeof Reflect[_0x30ff89(0x179)]===_0x30ff89(0x173))return Reflect[_0x30ff89(0x179)](_0x1d3c5f,_0x1b3230);},__param=this&&this[a193_0x1f2f4e(0x17b)]||function(_0x472ed1,_0x16cd0e){return function(_0x331039,_0x499737){_0x16cd0e(_0x331039,_0x499737,_0x472ed1);};};Object[a193_0x1f2f4e(0x17a)](exports,a193_0x1f2f4e(0x197),{'value':!![]}),exports['AzureApiService']=void 0x0;const typedi_1=require(a193_0x1f2f4e(0x194)),git_api_service_1=require(a193_0x1f2f4e(0x189)),providers_tokens_1=require(a193_0x1f2f4e(0x180)),git_provider_1=require(a193_0x1f2f4e(0x199)),providers_errors_1=require(a193_0x1f2f4e(0x18b));let AzureApiService=class AzureApiService extends git_api_service_1[a193_0x1f2f4e(0x193)]{constructor(_0x2ad678,_0x3f3818){super(_0x2ad678,_0x3f3818),this['MAX_REQUEST_PER_HOUR']=0x2710;}[a193_0x1f2f4e(0x176)](){var _0xf17125=a193_0x1f2f4e;return{'Accept':'application/json;\x20api-version=5.0','Authorization':this[_0xf17125(0x19a)][_0xf17125(0x198)]()};}async[a193_0x1f2f4e(0x195)](){var _0x3b1df5=a193_0x1f2f4e;return await this[_0x3b1df5(0x18c)]['get'](this[_0x3b1df5(0x19a)][_0x3b1df5(0x18a)]+_0x3b1df5(0x186))[_0x3b1df5(0x175)](_0x3ff5e7=>{var _0x2ad031=_0x3b1df5;if(typeof _0x3ff5e7===_0x2ad031(0x17c))throw new Error(providers_errors_1[_0x2ad031(0x187)]);}),!![];}};function a193_0x1643(_0x3a5632,_0x47713f){var _0x6ba2fc=a193_0xa6dc();return a193_0x1643=function(_0x1b654d,_0x52912d){_0x1b654d=_0x1b654d-0x171;var _0xa6dcb1=_0x6ba2fc[_0x1b654d];return _0xa6dcb1;},a193_0x1643(_0x3a5632,_0x47713f);}AzureApiService=__decorate([(0x0,typedi_1[a193_0x1f2f4e(0x19d)])(),__param(0x0,(0x0,typedi_1[a193_0x1f2f4e(0x177)])(providers_tokens_1[a193_0x1f2f4e(0x196)][a193_0x1f2f4e(0x174)])),__param(0x1,(0x0,typedi_1[a193_0x1f2f4e(0x177)])(providers_tokens_1[a193_0x1f2f4e(0x196)][a193_0x1f2f4e(0x19a)])),__metadata(a193_0x1f2f4e(0x185),[String,Object])],AzureApiService),exports[a193_0x1f2f4e(0x18d)]=AzureApiService;