const a277_0x30bfd2=a277_0x1f28;(function(_0x8bd774,_0x2e0e87){const _0x35329e=a277_0x1f28,_0xed6c13=_0x8bd774();while(!![]){try{const _0x5e0f30=-parseInt(_0x35329e(0x1e4))/0x1+-parseInt(_0x35329e(0x210))/0x2*(-parseInt(_0x35329e(0x1ed))/0x3)+-parseInt(_0x35329e(0x1e6))/0x4+-parseInt(_0x35329e(0x1f8))/0x5*(-parseInt(_0x35329e(0x204))/0x6)+parseInt(_0x35329e(0x1e7))/0x7+-parseInt(_0x35329e(0x1ef))/0x8+parseInt(_0x35329e(0x1ff))/0x9;if(_0x5e0f30===_0x2e0e87)break;else _0xed6c13['push'](_0xed6c13['shift']());}catch(_0x4e6202){_0xed6c13['push'](_0xed6c13['shift']());}}}(a277_0x5b94,0xbca3e));const a277_0x59db15=(function(){let _0x17ddd2=!![];return function(_0x67af27,_0x1d17f6){const _0xf439d7=_0x17ddd2?function(){const _0x3e5d78=a277_0x1f28;if(_0x1d17f6){const _0x35190d=_0x1d17f6[_0x3e5d78(0x1db)](_0x67af27,arguments);return _0x1d17f6=null,_0x35190d;}}:function(){};return _0x17ddd2=![],_0xf439d7;};}()),a277_0x4da2cf=a277_0x59db15(this,function(){const _0x20b52c=a277_0x1f28;return a277_0x4da2cf[_0x20b52c(0x1d8)]()['search'](_0x20b52c(0x20b))[_0x20b52c(0x1d8)]()['constructor'](a277_0x4da2cf)['search']('(((.+)+)+)+$');});a277_0x4da2cf();'use strict';var __importDefault=this&&this[a277_0x30bfd2(0x207)]||function(_0x3dfe85){return _0x3dfe85&&_0x3dfe85['__esModule']?_0x3dfe85:{'default':_0x3dfe85};};Object[a277_0x30bfd2(0x1dc)](exports,'__esModule',{'value':!![]});const job_utils_1=__importDefault(require('../../shared/utils/job.utils')),path_1=__importDefault(require(a277_0x30bfd2(0x20e))),manifest_manger_1=__importDefault(require(a277_0x30bfd2(0x1ea))),state_manger_1=__importDefault(require('../../shared/managers/state-manger')),promises_1=require('fs/promises'),utils_1=require(a277_0x30bfd2(0x1f5)),csv_utils_1=__importDefault(require('../../shared/utils/csv.utils')),not_found_error_1=require(a277_0x30bfd2(0x1d6)),logger_enums_1=require('../../shared/enums/logger.enums'),bad_request_error_1=require(a277_0x30bfd2(0x1de)),job_1=require(a277_0x30bfd2(0x1f7)),fs_utils_1=require('../../shared/utils/fs.utils'),constants_1=require(a277_0x30bfd2(0x1fc)),path_2=require(a277_0x30bfd2(0x1eb));function a277_0x5b94(){const _0x1379f0=['3048784zmipQc','Job\x20log\x20not\x20found.','JOB_LOG_DETAILS_FILENAME','parse','Chunk\x20not\x20found.','setError','@flosum/utils','FsUtils','../../../constants/job','25bUqhkF','slice','BadRequestError','sortJobsIds','../constants','RETRIEVE_RESULTS_IDS_FILENAME','Result\x20not\x20found.','6849504GFrvjv','default','create','Job\x20not\x20completed.','push','1822398uiFzyu','createRetrieveJob','NotFoundError','__importDefault','utf-8','getJobLogs','getJobStatus','(((.+)+)+)+$','JobStatus','then','path','isExistsPath','25446uPPkmE','init','makeDir','join','generateJobId','../../../core/errors/not-found.error','retrieveMetadataFolder','toString','RETRIEVE_RESULT_FOLDER_NAME','getResultChunk','apply','defineProperty','RETRIEVE_METADATA_FOLDER_NAME','../../../core/errors/bad-request.error','catch','readFile','runJob','getResult','.json','315911vRtenz','dataPath','5848136BIhAsW','3762395IRXXBw','IN_PROGRESS','JOB_PATH','../job/classes/manifest-manger','../../../configs/path','data','27JmqsZi','getJobState'];a277_0x5b94=function(){return _0x1379f0;};return a277_0x5b94();}class RetrieveMetadataService{static async['getJobs'](_0x287bcf,_0x513354){const _0x1631dc=a277_0x30bfd2,_0x52ea18=await job_utils_1[_0x1631dc(0x200)]['getJobsIds'](RetrieveMetadataService[_0x1631dc(0x1d7)]),_0x453a01=await job_utils_1[_0x1631dc(0x200)][_0x1631dc(0x1fb)](RetrieveMetadataService[_0x1631dc(0x1d7)],_0x52ea18),_0x5c4cfc=_0x453a01[_0x1631dc(0x1f9)](_0x513354,_0x513354+_0x287bcf),_0x3ea18b=[];for(const _0x2091dd of _0x5c4cfc){const _0x12d20c=await state_manger_1[_0x1631dc(0x200)][_0x1631dc(0x1ee)](path_1[_0x1631dc(0x200)][_0x1631dc(0x1d4)](RetrieveMetadataService['retrieveMetadataFolder'],_0x2091dd));_0x3ea18b[_0x1631dc(0x203)](_0x12d20c);}return _0x3ea18b;}static async[a277_0x30bfd2(0x205)](_0x5b44a6){const _0x37c8be=a277_0x30bfd2,_0xbfdb13=job_utils_1['default'][_0x37c8be(0x1d5)](),_0xe0856d=path_1[_0x37c8be(0x200)][_0x37c8be(0x1d4)](RetrieveMetadataService[_0x37c8be(0x1d7)],_0xbfdb13);await(0x0,fs_utils_1[_0x37c8be(0x1d3)])(_0xe0856d),await manifest_manger_1[_0x37c8be(0x200)][_0x37c8be(0x201)](_0xe0856d,_0x5b44a6),await state_manger_1['default']['create'](_0xe0856d,_0xbfdb13);const _0x57d229=path_1[_0x37c8be(0x200)][_0x37c8be(0x1d4)](__dirname,job_1[_0x37c8be(0x1e9)]);return job_utils_1['default'][_0x37c8be(0x1e1)](_0x57d229,{'jobStorePath':_0xe0856d,'jobId':_0xbfdb13})[_0x37c8be(0x1df)](async _0x2fa337=>{const _0x946a0d=_0x37c8be,_0x4ffd3d=new state_manger_1[(_0x946a0d(0x200))](_0xe0856d);await _0x4ffd3d[_0x946a0d(0x211)](),await _0x4ffd3d[_0x946a0d(0x1f4)](_0x2fa337);}),{'jobId':_0xbfdb13};}static async[a277_0x30bfd2(0x1e2)](_0x2e395a){const _0x506b49=a277_0x30bfd2,{status:_0x6b0b58}=await RetrieveMetadataService['getJobStatus'](_0x2e395a);if(_0x6b0b58===logger_enums_1[_0x506b49(0x20c)][_0x506b49(0x1e8)])throw new bad_request_error_1['BadRequestError'](_0x506b49(0x202));const _0x37e8d0=path_1[_0x506b49(0x200)][_0x506b49(0x1d4)](RetrieveMetadataService[_0x506b49(0x1d7)],_0x2e395a,constants_1[_0x506b49(0x1fd)]);if(await utils_1[_0x506b49(0x1f6)][_0x506b49(0x20f)](_0x37e8d0))return(0x0,promises_1[_0x506b49(0x1e0)])(_0x37e8d0,_0x506b49(0x208))[_0x506b49(0x20d)](JSON['parse']);else throw new not_found_error_1[(_0x506b49(0x206))](_0x506b49(0x1fe));}static async[a277_0x30bfd2(0x1da)](_0x25485c,_0x2769ab){const _0x34743d=a277_0x30bfd2,{status:_0x19273c}=await RetrieveMetadataService[_0x34743d(0x20a)](_0x25485c);if(_0x19273c===logger_enums_1[_0x34743d(0x20c)][_0x34743d(0x1e8)])throw new bad_request_error_1[(_0x34743d(0x1fa))]('Job\x20not\x20completed.');const _0x3478d0=path_1[_0x34743d(0x200)][_0x34743d(0x1d4)](RetrieveMetadataService[_0x34743d(0x1d7)],_0x25485c,constants_1[_0x34743d(0x1d9)]),_0x138785={'data':[]};if(await utils_1[_0x34743d(0x1f6)][_0x34743d(0x20f)](path_1[_0x34743d(0x200)][_0x34743d(0x1d4)](_0x3478d0,_0x2769ab+_0x34743d(0x1e3))))_0x138785[_0x34743d(0x1ec)]=await(0x0,promises_1[_0x34743d(0x1e0)])(path_1[_0x34743d(0x200)]['join'](_0x3478d0,_0x2769ab+'.json'),_0x34743d(0x208))[_0x34743d(0x20d)](JSON[_0x34743d(0x1f2)]);else throw new not_found_error_1[(_0x34743d(0x206))](_0x34743d(0x1f3));return _0x138785;}static async[a277_0x30bfd2(0x20a)](_0x3f4a75){const _0x5dfc5e=a277_0x30bfd2;try{return await state_manger_1[_0x5dfc5e(0x200)][_0x5dfc5e(0x1ee)](path_1[_0x5dfc5e(0x200)][_0x5dfc5e(0x1d4)](RetrieveMetadataService[_0x5dfc5e(0x1d7)],_0x3f4a75));}catch(_0x37bc6b){throw new not_found_error_1[(_0x5dfc5e(0x206))](_0x37bc6b);}}static async[a277_0x30bfd2(0x209)](_0x3a079b){const _0x660129=a277_0x30bfd2,_0x5d4311=path_1[_0x660129(0x200)]['join'](RetrieveMetadataService[_0x660129(0x1d7)],_0x3a079b,job_1[_0x660129(0x1f1)]);if(await utils_1[_0x660129(0x1f6)]['isExistsPath'](_0x5d4311))return(0x0,promises_1[_0x660129(0x1e0)])(_0x5d4311,_0x660129(0x208))[_0x660129(0x20d)](_0x4adc44=>csv_utils_1[_0x660129(0x200)]['parse'](_0x4adc44,{'columns':!![]}));throw new not_found_error_1[(_0x660129(0x206))](_0x660129(0x1f0));}}function a277_0x1f28(_0x41fd52,_0x7bd57f){const _0x33cc1b=a277_0x5b94();return a277_0x1f28=function(_0x4da2cf,_0x59db15){_0x4da2cf=_0x4da2cf-0x1d3;let _0x5b9460=_0x33cc1b[_0x4da2cf];return _0x5b9460;},a277_0x1f28(_0x41fd52,_0x7bd57f);}exports[a277_0x30bfd2(0x200)]=RetrieveMetadataService,RetrieveMetadataService[a277_0x30bfd2(0x1d7)]=path_1['default']['join'](path_2[a277_0x30bfd2(0x1e5)],constants_1[a277_0x30bfd2(0x1dd)]);