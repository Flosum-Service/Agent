const a167_0x3256fd=a167_0x7e3d;(function(_0x8fe6d0,_0x25f017){const _0x16461a=a167_0x7e3d,_0x168c00=_0x8fe6d0();while(!![]){try{const _0x3dd30a=-parseInt(_0x16461a(0x1db))/0x1+parseInt(_0x16461a(0x1bc))/0x2*(-parseInt(_0x16461a(0x1dd))/0x3)+parseInt(_0x16461a(0x1d5))/0x4+-parseInt(_0x16461a(0x1dc))/0x5*(parseInt(_0x16461a(0x1a1))/0x6)+parseInt(_0x16461a(0x1d7))/0x7*(-parseInt(_0x16461a(0x1c0))/0x8)+parseInt(_0x16461a(0x1d6))/0x9+parseInt(_0x16461a(0x1ca))/0xa;if(_0x3dd30a===_0x25f017)break;else _0x168c00['push'](_0x168c00['shift']());}catch(_0x1fb693){_0x168c00['push'](_0x168c00['shift']());}}}(a167_0xf8d0,0x9fdcc));const a167_0x15ac62=(function(){let _0x92d03b=!![];return function(_0x8b530e,_0x21999){const _0x26310f=_0x92d03b?function(){const _0xcd9a90=a167_0x7e3d;if(_0x21999){const _0x384f79=_0x21999[_0xcd9a90(0x1b3)](_0x8b530e,arguments);return _0x21999=null,_0x384f79;}}:function(){};return _0x92d03b=![],_0x26310f;};}()),a167_0x34295c=a167_0x15ac62(this,function(){const _0x1fba65=a167_0x7e3d;return a167_0x34295c[_0x1fba65(0x1b8)]()[_0x1fba65(0x1c9)]('(((.+)+)+)+$')[_0x1fba65(0x1b8)]()['constructor'](a167_0x34295c)[_0x1fba65(0x1c9)]('(((.+)+)+)+$');});a167_0x34295c();function a167_0x7e3d(_0x5b6b4f,_0x342313){const _0x2445e6=a167_0xf8d0();return a167_0x7e3d=function(_0x34295c,_0x15ac62){_0x34295c=_0x34295c-0x198;let _0xf8d0d4=_0x2445e6[_0x34295c];return _0xf8d0d4;},a167_0x7e3d(_0x5b6b4f,_0x342313);}'use strict';var __decorate=this&&this[a167_0x3256fd(0x1af)]||function(_0x79989d,_0x2b8fdb,_0x52def6,_0x3978f8){const _0x5f3849=a167_0x3256fd;var _0x313266=arguments[_0x5f3849(0x1df)],_0x1d6502=_0x313266<0x3?_0x2b8fdb:_0x3978f8===null?_0x3978f8=Object[_0x5f3849(0x1c6)](_0x2b8fdb,_0x52def6):_0x3978f8,_0x235a09;if(typeof Reflect===_0x5f3849(0x1c2)&&typeof Reflect[_0x5f3849(0x1a2)]===_0x5f3849(0x1cf))_0x1d6502=Reflect[_0x5f3849(0x1a2)](_0x79989d,_0x2b8fdb,_0x52def6,_0x3978f8);else{for(var _0x373bd8=_0x79989d[_0x5f3849(0x1df)]-0x1;_0x373bd8>=0x0;_0x373bd8--)if(_0x235a09=_0x79989d[_0x373bd8])_0x1d6502=(_0x313266<0x3?_0x235a09(_0x1d6502):_0x313266>0x3?_0x235a09(_0x2b8fdb,_0x52def6,_0x1d6502):_0x235a09(_0x2b8fdb,_0x52def6))||_0x1d6502;}return _0x313266>0x3&&_0x1d6502&&Object[_0x5f3849(0x1a6)](_0x2b8fdb,_0x52def6,_0x1d6502),_0x1d6502;},__metadata=this&&this[a167_0x3256fd(0x1e3)]||function(_0x26f2c7,_0x1d0fb9){const _0x2e9cb2=a167_0x3256fd;if(typeof Reflect==='object'&&typeof Reflect['metadata']===_0x2e9cb2(0x1cf))return Reflect[_0x2e9cb2(0x1b4)](_0x26f2c7,_0x1d0fb9);},__param=this&&this[a167_0x3256fd(0x1be)]||function(_0x1b2895,_0x178474){return function(_0x45c41f,_0x58951f){_0x178474(_0x45c41f,_0x58951f,_0x1b2895);};};Object[a167_0x3256fd(0x1a6)](exports,a167_0x3256fd(0x198),{'value':!![]}),exports[a167_0x3256fd(0x1d0)]=void 0x0;const bad_request_error_1=require('../../../../../core/errors/bad-request.error'),not_found_error_1=require('../../../../../core/errors/not-found.error'),typedi_1=require(a167_0x3256fd(0x1bb)),api_error_1=require(a167_0x3256fd(0x1c5)),bitbucket_server_api_service_1=require(a167_0x3256fd(0x19a)),git_internal_1=require(a167_0x3256fd(0x1e2)),utils_1=require(a167_0x3256fd(0x1d8)),repo_class_1=require(a167_0x3256fd(0x1c1)),git_repo_service_1=require('./git-repo.service'),providers_tokens_1=require(a167_0x3256fd(0x1b5)),bitbucket_server_credentials_dto_1=require(a167_0x3256fd(0x1bf));let BitbucketServerRepoService=class BitbucketServerRepoService extends git_repo_service_1['GitRepoService']{constructor(_0xd97a19,_0x2aede7){const _0x375d7d=a167_0x3256fd;super(_0xd97a19),this[_0x375d7d(0x1ab)]=_0xd97a19,this[_0x375d7d(0x19f)]=_0x2aede7['project'],this[_0x375d7d(0x1b0)]=_0x2aede7;}async[a167_0x3256fd(0x1c7)](_0x3196ea){const _0x4b5df3=a167_0x3256fd;try{const _0x98bc9d={'name':_0x3196ea[_0x4b5df3(0x1a9)],'scmId':_0x4b5df3(0x1ae),'defaultBranch':_0x3196ea[_0x4b5df3(0x1b6)],..._0x3196ea[_0x4b5df3(0x1b9)]||{}},_0x24a8bf=await this[_0x4b5df3(0x1a5)]['post'](_0x4b5df3(0x1a3)+this['project']+'/repos',_0x98bc9d),_0x45c9e4=repo_class_1[_0x4b5df3(0x1da)][_0x4b5df3(0x1ba)](_0x24a8bf,'',this['api'],this[_0x4b5df3(0x1b0)]);return _0x3196ea[_0x4b5df3(0x1ad)]&&await git_internal_1[_0x4b5df3(0x1a0)][_0x4b5df3(0x1d9)](_0x45c9e4,_0x3196ea[_0x4b5df3(0x1b6)]||_0x4b5df3(0x19d),'',this[_0x4b5df3(0x1b0)]),this[_0x4b5df3(0x19c)](_0x45c9e4[_0x4b5df3(0x1a9)]);}catch(_0x2b5795){if(_0x2b5795 instanceof api_error_1[_0x4b5df3(0x1e4)])throw _0x2b5795;throw new bad_request_error_1[(_0x4b5df3(0x1c3))](_0x2b5795);}}async[a167_0x3256fd(0x1b2)](){const _0x152f16=a167_0x3256fd;try{const _0x1d4bb7=[];let _0x3b0436;do{_0x3b0436=await this[_0x152f16(0x1a5)]['get'](_0x152f16(0x1a3)+this['project']+'/repos',{'params':{'limit':0x64,'start':_0x3b0436?_0x3b0436[_0x152f16(0x1cd)]:0x0}}),_0x1d4bb7[_0x152f16(0x1b7)](..._0x3b0436[_0x152f16(0x19e)]);}while(!_0x3b0436[_0x152f16(0x1a7)]);return _0x1d4bb7[_0x152f16(0x1cc)](_0x3b7ef9=>repo_class_1['Repo'][_0x152f16(0x1ba)](_0x3b7ef9,(0x0,utils_1[_0x152f16(0x1d4)])(this[_0x152f16(0x1a5)][_0x152f16(0x1e1)][_0x152f16(0x1d2)]||'','/projects/'+this[_0x152f16(0x19f)]+_0x152f16(0x199)+_0x3b7ef9[_0x152f16(0x1a8)]),this['api'],this[_0x152f16(0x1b0)]));}catch(_0x179536){if(_0x179536 instanceof api_error_1['ApiError'])throw _0x179536;throw new not_found_error_1[(_0x152f16(0x1e0))](_0x179536);}}async['getOne'](_0x49643a){const _0x3ccb20=a167_0x3256fd;var _0x31e357;try{const _0x4fc353=await this[_0x3ccb20(0x1a5)][_0x3ccb20(0x1d1)](_0x3ccb20(0x1a3)+this[_0x3ccb20(0x19f)]+_0x3ccb20(0x199)+_0x49643a),_0x18d13c=repo_class_1[_0x3ccb20(0x1da)][_0x3ccb20(0x1ba)](_0x4fc353,(0x0,utils_1[_0x3ccb20(0x1d4)])(this['request']['defaults'][_0x3ccb20(0x1d2)]||'',_0x3ccb20(0x1ce)+this[_0x3ccb20(0x19f)]+_0x3ccb20(0x199)+_0x49643a),this['api'],this[_0x3ccb20(0x1b0)]),_0x12b770=await this['request'][_0x3ccb20(0x1d1)](_0x18d13c[_0x3ccb20(0x19b)]+_0x3ccb20(0x1e6))[_0x3ccb20(0x1cb)](_0x6531c9=>_0x6531c9[_0x3ccb20(0x19e)]);return _0x18d13c[_0x3ccb20(0x1b6)]=(_0x31e357=_0x12b770['find'](_0x52ecf8=>_0x52ecf8[_0x3ccb20(0x1d3)]===!![]))===null||_0x31e357===void 0x0?void 0x0:_0x31e357[_0x3ccb20(0x1b1)],_0x18d13c;}catch(_0x458be0){if(_0x458be0 instanceof api_error_1[_0x3ccb20(0x1e4)])throw _0x458be0;throw new not_found_error_1[(_0x3ccb20(0x1e0))](_0x458be0);}}async[a167_0x3256fd(0x1aa)](_0xb342d8,_0x4f251f){const _0x1abdbc=a167_0x3256fd;try{const _0x3d3f62=await this['request'][_0x1abdbc(0x1e5)](_0x1abdbc(0x1a3)+this[_0x1abdbc(0x19f)]+_0x1abdbc(0x199)+_0xb342d8,_0x4f251f),_0x126372=await this[_0x1abdbc(0x1a5)]['get']('projects/'+this['project']+_0x1abdbc(0x199)+_0xb342d8+_0x1abdbc(0x1a4)),_0x210f8f=repo_class_1['Repo'][_0x1abdbc(0x1ba)](_0x3d3f62,(0x0,utils_1[_0x1abdbc(0x1d4)])(this[_0x1abdbc(0x1a5)]['defaults'][_0x1abdbc(0x1d2)]||'',_0x1abdbc(0x1ce)+this[_0x1abdbc(0x19f)]+_0x1abdbc(0x199)+_0xb342d8),this['api'],this[_0x1abdbc(0x1b0)]);return _0x210f8f[_0x1abdbc(0x1b6)]=_0x126372['displayId'],_0x210f8f;}catch(_0x551b23){if(_0x551b23 instanceof api_error_1['ApiError'])throw _0x551b23;throw new not_found_error_1[(_0x1abdbc(0x1e0))](_0x551b23);}}async['delete'](_0x42b5cd){const _0x1d4142=a167_0x3256fd;try{await this[_0x1d4142(0x19c)](_0x42b5cd),await this[_0x1d4142(0x1a5)][_0x1d4142(0x1bd)](_0x1d4142(0x1a3)+this[_0x1d4142(0x19f)]+_0x1d4142(0x199)+_0x42b5cd);}catch(_0x19e45f){if(_0x19e45f instanceof api_error_1[_0x1d4142(0x1e4)])throw _0x19e45f;throw new bad_request_error_1['BadRequestError'](_0x19e45f);}}};function a167_0xf8d0(){const _0x3d131b=['projects/','/default-branch','request','defineProperty','isLastPage','slug','name','update','api','Tokens','autoInit','git','__decorate','credentials','displayId','getAll','apply','metadata','../../providers.tokens','defaultBranch','push','toString','apiBody','fromBitbucketServer','typedi','646pQocID','delete','__param','../../credentials/dto/bitbucket-server-credentials.dto','380792eEcxBO','../repo.class','object','BadRequestError','design:paramtypes','../../../../../core/errors/api.error','getOwnPropertyDescriptor','create','BitbucketServerCredentialsDto','search','29595100gLPWVC','then','map','nextPageStart','/projects/','function','BitbucketServerRepoService','get','baseURL','isDefault','joinURL','525044KhRWpb','3772422emHbUM','147okKOYw','../../../../shared/utils','createEmptyBranch','Repo','423054whgcEu','5FxFThr','8781Xtjahs','Inject','length','NotFoundError','defaults','../../../internal/git.internal','__metadata','ApiError','put','/branches','__esModule','/repos/','../../api/bitbucket-server-api.service','apiUrl','getOne','master','values','project','Git','2922474YxajzU','decorate'];a167_0xf8d0=function(){return _0x3d131b;};return a167_0xf8d0();}BitbucketServerRepoService=__decorate([(0x0,typedi_1['Service'])(),__param(0x1,(0x0,typedi_1[a167_0x3256fd(0x1de)])(providers_tokens_1[a167_0x3256fd(0x1ac)]['credentials'])),__metadata(a167_0x3256fd(0x1c4),[bitbucket_server_api_service_1['BitbucketServerApiService'],bitbucket_server_credentials_dto_1[a167_0x3256fd(0x1c8)]])],BitbucketServerRepoService),exports['BitbucketServerRepoService']=BitbucketServerRepoService;