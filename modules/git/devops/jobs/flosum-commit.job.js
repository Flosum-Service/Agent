const a105_0x4e69a8=a105_0x41a8;(function(_0x54bf9f,_0x2e0c15){const _0x480cfc=a105_0x41a8,_0x3da24e=_0x54bf9f();while(!![]){try{const _0x417bfd=-parseInt(_0x480cfc(0x1f3))/0x1+-parseInt(_0x480cfc(0x198))/0x2+parseInt(_0x480cfc(0x1a7))/0x3*(-parseInt(_0x480cfc(0x1b9))/0x4)+parseInt(_0x480cfc(0x1cc))/0x5+-parseInt(_0x480cfc(0x1b4))/0x6+parseInt(_0x480cfc(0x1e8))/0x7*(-parseInt(_0x480cfc(0x1b5))/0x8)+parseInt(_0x480cfc(0x1d0))/0x9*(parseInt(_0x480cfc(0x1c2))/0xa);if(_0x417bfd===_0x2e0c15)break;else _0x3da24e['push'](_0x3da24e['shift']());}catch(_0x645a73){_0x3da24e['push'](_0x3da24e['shift']());}}}(a105_0x4680,0x5614f));const a105_0x5547d9=(function(){let _0x3292a9=!![];return function(_0x39051a,_0x1abf6f){const _0x906c20=_0x3292a9?function(){const _0x3b918d=a105_0x41a8;if(_0x1abf6f){const _0x404e72=_0x1abf6f[_0x3b918d(0x1c4)](_0x39051a,arguments);return _0x1abf6f=null,_0x404e72;}}:function(){};return _0x3292a9=![],_0x906c20;};}()),a105_0xa93d87=a105_0x5547d9(this,function(){const _0x15eb2a=a105_0x41a8;return a105_0xa93d87[_0x15eb2a(0x1dc)]()[_0x15eb2a(0x204)](_0x15eb2a(0x1bb))[_0x15eb2a(0x1dc)]()[_0x15eb2a(0x1cb)](a105_0xa93d87)['search'](_0x15eb2a(0x1bb));});a105_0xa93d87();'use strict';var __decorate=this&&this[a105_0x4e69a8(0x1a8)]||function(_0x19a156,_0x43102c,_0x5dc8d1,_0x42bbb8){const _0x42cb85=a105_0x4e69a8;var _0x14b1fa=arguments[_0x42cb85(0x1b8)],_0x42d250=_0x14b1fa<0x3?_0x43102c:_0x42bbb8===null?_0x42bbb8=Object[_0x42cb85(0x1cd)](_0x43102c,_0x5dc8d1):_0x42bbb8,_0x8e2ec9;if(typeof Reflect===_0x42cb85(0x1bc)&&typeof Reflect[_0x42cb85(0x1be)]==='function')_0x42d250=Reflect['decorate'](_0x19a156,_0x43102c,_0x5dc8d1,_0x42bbb8);else{for(var _0x109a20=_0x19a156[_0x42cb85(0x1b8)]-0x1;_0x109a20>=0x0;_0x109a20--)if(_0x8e2ec9=_0x19a156[_0x109a20])_0x42d250=(_0x14b1fa<0x3?_0x8e2ec9(_0x42d250):_0x14b1fa>0x3?_0x8e2ec9(_0x43102c,_0x5dc8d1,_0x42d250):_0x8e2ec9(_0x43102c,_0x5dc8d1))||_0x42d250;}return _0x14b1fa>0x3&&_0x42d250&&Object['defineProperty'](_0x43102c,_0x5dc8d1,_0x42d250),_0x42d250;},__metadata=this&&this['__metadata']||function(_0x44f2ba,_0x163d84){const _0x395284=a105_0x4e69a8;if(typeof Reflect===_0x395284(0x1bc)&&typeof Reflect[_0x395284(0x1ca)]===_0x395284(0x1a2))return Reflect['metadata'](_0x44f2ba,_0x163d84);},__importDefault=this&&this[a105_0x4e69a8(0x1b6)]||function(_0x4c4f25){return _0x4c4f25&&_0x4c4f25['__esModule']?_0x4c4f25:{'default':_0x4c4f25};},FlosumCommitJob_1;function a105_0x41a8(_0x1b7973,_0x1740c4){const _0xbcefff=a105_0x4680();return a105_0x41a8=function(_0xa93d87,_0x5547d9){_0xa93d87=_0xa93d87-0x197;let _0x4680db=_0xbcefff[_0xa93d87];return _0x4680db;},a105_0x41a8(_0x1b7973,_0x1740c4);}Object[a105_0x4e69a8(0x203)](exports,a105_0x4e69a8(0x1c1),{'value':!![]}),exports[a105_0x4e69a8(0x1d4)]=void 0x0;const core_1=require('../../../../core'),salesforce_service_1=require('../../salesforce/services/salesforce.service'),typedi_1=require('typedi'),errors_1=require('../../../../constants/errors'),bad_request_error_1=require(a105_0x4e69a8(0x1c6)),salesforce_retriever_service_1=require('../../salesforce/services/salesforce-retriever.service'),salesforce_sync_service_1=require('../../salesforce/services/salesforce-sync.service'),commit_components_dto_1=require(a105_0x4e69a8(0x1de)),commit_components_job_1=require(a105_0x4e69a8(0x1a5)),constants_1=require(a105_0x4e69a8(0x1c5)),shortid_1=__importDefault(require('shortid')),providers_tokens_1=require(a105_0x4e69a8(0x1b7));let FlosumCommitJob=FlosumCommitJob_1=class FlosumCommitJob{constructor(_0x3a597f,_0x61ab57,_0x36585c){const _0x457c15=a105_0x4e69a8;this[_0x457c15(0x1e7)]=_0x3a597f,this[_0x457c15(0x1b0)]=_0x61ab57,this[_0x457c15(0x1e2)]=_0x36585c,this[_0x457c15(0x1f0)]=new core_1[(_0x457c15(0x1e1))](FlosumCommitJob_1[_0x457c15(0x1e6)]);}async[a105_0x4e69a8(0x1fd)](){const _0xc98e8e=a105_0x4e69a8;try{if(this[_0xc98e8e(0x1fb)][_0xc98e8e(0x1c7)])this[_0xc98e8e(0x1c0)]=await this[_0xc98e8e(0x1e2)]['getRepositoryRecord'](this['commitData'][_0xc98e8e(0x1c7)]);else this[_0xc98e8e(0x1fb)][_0xc98e8e(0x1ed)]&&(this[_0xc98e8e(0x1c0)]=await this['salesforceSync'][_0xc98e8e(0x1d9)](this[_0xc98e8e(0x1fb)]['syncBranchId']));}catch(_0xcf9f7b){throw new bad_request_error_1[(_0xc98e8e(0x1bf))](errors_1[_0xc98e8e(0x1db)]);}}async['getComponentsToWrite'](){const _0x351b21=a105_0x4e69a8;if(!this['commitData'][_0x351b21(0x1e5)])return[];await this[_0x351b21(0x1e7)]['patchObject'](constants_1[_0x351b21(0x1a6)],this[_0x351b21(0x1fb)][_0x351b21(0x1e5)],{'Name':(0x0,shortid_1[_0x351b21(0x1f6)])()});const _0x21a9c5=await this[_0x351b21(0x1e7)][_0x351b21(0x1d3)](this[_0x351b21(0x1fb)]['commitAttachmentId'])[_0x351b21(0x1ae)](_0xbe8c0=>_0xbe8c0[_0x351b21(0x1c8)]('\x20')[_0x351b21(0x1b2)](_0x37bdfb=>_0x37bdfb['trim']()));await this[_0x351b21(0x1e7)][_0x351b21(0x1c9)](this[_0x351b21(0x1fb)][_0x351b21(0x1e5)]);const _0x4634e4=new salesforce_retriever_service_1[(_0x351b21(0x1ad))](this[_0x351b21(0x1e7)]);return await _0x4634e4[_0x351b21(0x1a0)](_0x21a9c5);}async['getComponentsToDelete'](){const _0x1b88c8=a105_0x4e69a8;if(!this[_0x1b88c8(0x1fb)][_0x1b88c8(0x1f5)])return[];await this['salesforceService'][_0x1b88c8(0x1b1)](constants_1['FLOSUM_ATTACHMENT'],this[_0x1b88c8(0x1fb)][_0x1b88c8(0x1f5)],{'Name':(0x0,shortid_1[_0x1b88c8(0x1f6)])()});const _0x27b08b=await this['salesforceService']['retrieveAttachment'](this[_0x1b88c8(0x1fb)][_0x1b88c8(0x1f5)]),_0x215475=JSON[_0x1b88c8(0x1f1)](_0x27b08b);return await this['salesforceService']['deleteAttachment'](this['commitData']['deleteAttachmentId']),_0x215475;}async[a105_0x4e69a8(0x1ba)](){const _0x5612d2=a105_0x4e69a8,_0x52e17e=new commit_components_dto_1[(_0x5612d2(0x1df))](),[_0x43da2c,_0x2706f5]=await Promise[_0x5612d2(0x1e3)]([this[_0x5612d2(0x19f)](),this[_0x5612d2(0x1fc)]()]);return _0x52e17e[_0x5612d2(0x1f4)]=this[_0x5612d2(0x1fb)][_0x5612d2(0x1f4)],_0x52e17e['user']=this[_0x5612d2(0x1fb)][_0x5612d2(0x19e)],_0x52e17e[_0x5612d2(0x1ef)]={'writed':_0x43da2c,'deleted':_0x2706f5},_0x52e17e[_0x5612d2(0x1e9)]=this[_0x5612d2(0x1b3)][_0x5612d2(0x1dd)],_0x52e17e[_0x5612d2(0x1d1)]=this['repository'],_0x52e17e['branch']=this[_0x5612d2(0x1ac)],_0x52e17e[_0x5612d2(0x1af)]=this['config'][_0x5612d2(0x1f7)],_0x52e17e;}async['updateLastCommit'](_0x412e4f=![]){const _0x5a0188=a105_0x4e69a8;if(_0x412e4f)await this['salesforceSync'][_0x5a0188(0x1ec)](this['repositoryData'],{});else{const _0x4e5264=await this['repository']['branches']['getOne'](this[_0x5a0188(0x1ac)][_0x5a0188(0x1e6)]);this[_0x5a0188(0x1aa)][_0x5a0188(0x1c3)](this['prefix']+_0x5a0188(0x199));const _0x1cad7b={[this[_0x5a0188(0x1ff)][_0x5a0188(0x1f8)]]:{'lastCommit':_0x4e5264[_0x5a0188(0x197)]}};await this[_0x5a0188(0x1e2)][_0x5a0188(0x1ec)](this['repositoryData'],_0x1cad7b);}}async[a105_0x4e69a8(0x19d)](){const _0x4cb120=a105_0x4e69a8,_0x1a9a08=await this[_0x4cb120(0x1ba)]();await this['salesforceSync'][_0x4cb120(0x200)](this['repositoryData'],_0x4cb120(0x1d6)),await this['commitJob'][_0x4cb120(0x1a0)](_0x1a9a08,this[_0x4cb120(0x1f9)]),await this['updateLastCommit'](),await this['salesforceSync'][_0x4cb120(0x200)](this[_0x4cb120(0x1c0)],'Completed');}async[a105_0x4e69a8(0x1e0)](_0x28db92){const _0x8cbfeb=a105_0x4e69a8;try{this[_0x8cbfeb(0x1aa)]['error'](''+_0x28db92),await this[_0x8cbfeb(0x1aa)][_0x8cbfeb(0x1eb)](),await this[_0x8cbfeb(0x19a)](!![]),await this['salesforceSync'][_0x8cbfeb(0x200)](this[_0x8cbfeb(0x1c0)],_0x8cbfeb(0x1d8));}catch(_0x38cb5d){this[_0x8cbfeb(0x1f0)]['error'](_0x38cb5d);}}async['run'](_0x186dae){const _0x57fed8=a105_0x4e69a8;try{this[_0x57fed8(0x1fb)]=_0x186dae,this['gitApiService']=typedi_1[_0x57fed8(0x1a9)][_0x57fed8(0x1a1)](providers_tokens_1[_0x57fed8(0x1ea)]['gitApiService']),this[_0x57fed8(0x1e4)]=typedi_1[_0x57fed8(0x1a9)][_0x57fed8(0x1a1)](providers_tokens_1['Tokens'][_0x57fed8(0x1a3)]),this['config']=typedi_1['Container'][_0x57fed8(0x1a1)](providers_tokens_1[_0x57fed8(0x1ea)][_0x57fed8(0x1b3)]),await this[_0x57fed8(0x1fd)](),this[_0x57fed8(0x1ff)]=await this[_0x57fed8(0x1e4)][_0x57fed8(0x202)](this[_0x57fed8(0x1c0)]['repositoryName']),this['branch']=await this['repository'][_0x57fed8(0x1d5)]['getOne'](this['repositoryData'][_0x57fed8(0x1f2)]),this[_0x57fed8(0x1aa)]=typedi_1['Container'][_0x57fed8(0x1a1)](providers_tokens_1['Tokens'][_0x57fed8(0x1f0)]),this[_0x57fed8(0x1f9)]=_0x57fed8(0x1da)+this[_0x57fed8(0x1b3)][_0x57fed8(0x1f7)][_0x57fed8(0x19c)]()+_0x57fed8(0x1d7)+this['repositoryData'][_0x57fed8(0x1d2)]+_0x57fed8(0x1ab)+this[_0x57fed8(0x1c0)][_0x57fed8(0x1f2)]+']\x20['+FlosumCommitJob_1[_0x57fed8(0x1e6)]+']';if(!this[_0x57fed8(0x1c0)])throw new bad_request_error_1[(_0x57fed8(0x1bf))](errors_1[_0x57fed8(0x19b)]);await this[_0x57fed8(0x1aa)]['log'](this[_0x57fed8(0x1f9)]+_0x57fed8(0x1bd))[_0x57fed8(0x1eb)](),await this[_0x57fed8(0x19d)]()[_0x57fed8(0x1ee)](_0x4d3160=>this[_0x57fed8(0x1e0)](_0x4d3160));}catch(_0x311510){this[_0x57fed8(0x1fb)]=undefined,this['logger'][_0x57fed8(0x1a4)](_0x311510);throw _0x311510;}}};function a105_0x4680(){const _0x23b709=['./commit-components.job','FLOSUM_ATTACHMENT','3XQHnYw','__decorate','Container','sfLogger',']\x20[Branch:\x20','branch','SalesforceRetrieverService','then','provider','commitJob','patchObject','map','config','1969764kAFQPF','4584WEbEam','__importDefault','../../providers/providers.tokens','length','706796SuOAWD','getCommitDto','(((.+)+)+)+$','object','\x20Start\x20Flosum\x20commit\x20job.','decorate','BadRequestError','repositoryData','__esModule','21335430GCqfMO','log','apply','../../../../constants','../../../../core/errors/bad-request.error','syncRepositoryId','split','deleteAttachment','metadata','constructor','759605PlqQaa','getOwnPropertyDescriptor','SalesforceService','CommitComponentsJob','9vmxeIM','repo','repositoryName','retrieveAttachment','FlosumCommitJob','branches','In\x20Progress',']\x20[Repository:\x20','Error','getBranchRecord','[FLOSUM\x20->\x20GIT]\x20[','ERR_INVALID_SYNC_RECORD_ID','toString','isConvertToSfdx','../dto/commit-components.dto','CommitComponentsDto','handleCommitJobError','Logger','salesforceSync','all','repoService','commitAttachmentId','name','salesforceService','7364eTutdV','convertToSFDX','Tokens','send','updateRemoteState','syncBranchId','catch','components','logger','parse','branchName','455784vZxtVF','message','deleteAttachmentId','default','gitProvider','gitUrl','prefix','design:paramtypes','commitData','getComponentsToDelete','fetchRepositoryData','Service','repository','setStatus','SalesforceSyncService','getOne','defineProperty','search','sha','738600usFJCk','\x20Update\x20remote\x20state.','updateLastCommit','ERR_UNKNOWN_SYNC_RECORD_ID','toUpperCase','exec','user','getComponentsToWrite','run','get','function','gitRepoService','error'];a105_0x4680=function(){return _0x23b709;};return a105_0x4680();}FlosumCommitJob=FlosumCommitJob_1=__decorate([(0x0,typedi_1[a105_0x4e69a8(0x1fe)])({'transient':!![]}),__metadata(a105_0x4e69a8(0x1fa),[salesforce_service_1[a105_0x4e69a8(0x1ce)],commit_components_job_1[a105_0x4e69a8(0x1cf)],salesforce_sync_service_1[a105_0x4e69a8(0x201)]])],FlosumCommitJob),exports[a105_0x4e69a8(0x1d4)]=FlosumCommitJob;