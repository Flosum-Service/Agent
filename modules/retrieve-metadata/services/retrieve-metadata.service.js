const a293_0x13270f=a293_0x5d03;(function(_0x224e6d,_0x3a6196){const _0x4cb384=a293_0x5d03,_0x4450d0=_0x224e6d();while(!![]){try{const _0x42dd15=-parseInt(_0x4cb384(0x16a))/0x1*(parseInt(_0x4cb384(0x186))/0x2)+parseInt(_0x4cb384(0x161))/0x3+parseInt(_0x4cb384(0x17b))/0x4+parseInt(_0x4cb384(0x181))/0x5*(-parseInt(_0x4cb384(0x16b))/0x6)+-parseInt(_0x4cb384(0x160))/0x7*(-parseInt(_0x4cb384(0x17d))/0x8)+-parseInt(_0x4cb384(0x189))/0x9+parseInt(_0x4cb384(0x171))/0xa*(parseInt(_0x4cb384(0x18f))/0xb);if(_0x42dd15===_0x3a6196)break;else _0x4450d0['push'](_0x4450d0['shift']());}catch(_0x1eea97){_0x4450d0['push'](_0x4450d0['shift']());}}}(a293_0x181e,0x4738a));const a293_0x3cb4c0=(function(){let _0x2b91ae=!![];return function(_0x504cac,_0x4f2ecc){const _0x323805=_0x2b91ae?function(){const _0x4ce06c=a293_0x5d03;if(_0x4f2ecc){const _0x133e42=_0x4f2ecc[_0x4ce06c(0x162)](_0x504cac,arguments);return _0x4f2ecc=null,_0x133e42;}}:function(){};return _0x2b91ae=![],_0x323805;};}()),a293_0x58d708=a293_0x3cb4c0(this,function(){const _0x4e2033=a293_0x5d03;return a293_0x58d708[_0x4e2033(0x195)]()[_0x4e2033(0x194)]('(((.+)+)+)+$')[_0x4e2033(0x195)]()[_0x4e2033(0x15f)](a293_0x58d708)[_0x4e2033(0x194)](_0x4e2033(0x169));});a293_0x58d708();function a293_0x5d03(_0x495f6c,_0x105df){const _0x29f15d=a293_0x181e();return a293_0x5d03=function(_0x58d708,_0x3cb4c0){_0x58d708=_0x58d708-0x158;let _0x181e5b=_0x29f15d[_0x58d708];return _0x181e5b;},a293_0x5d03(_0x495f6c,_0x105df);}'use strict';var __importDefault=this&&this[a293_0x13270f(0x184)]||function(_0x3d94c9){const _0x1162a6=a293_0x13270f;return _0x3d94c9&&_0x3d94c9[_0x1162a6(0x16f)]?_0x3d94c9:{'default':_0x3d94c9};};Object[a293_0x13270f(0x18d)](exports,'__esModule',{'value':!![]});const job_utils_1=__importDefault(require(a293_0x13270f(0x17e))),path_1=__importDefault(require(a293_0x13270f(0x164))),manifest_manger_1=__importDefault(require(a293_0x13270f(0x165))),state_manger_1=__importDefault(require(a293_0x13270f(0x18c))),promises_1=require(a293_0x13270f(0x16e)),utils_1=require(a293_0x13270f(0x167)),csv_utils_1=__importDefault(require(a293_0x13270f(0x197))),not_found_error_1=require('../../../core/errors/not-found.error'),logger_enums_1=require(a293_0x13270f(0x158)),bad_request_error_1=require('../../../core/errors/bad-request.error'),job_1=require('../../../constants/job'),fs_utils_1=require('../../shared/utils/fs.utils'),constants_1=require(a293_0x13270f(0x193)),path_2=require(a293_0x13270f(0x15c));function a293_0x181e(){const _0x23988a=['isExistsPath','1716770xXFcSQ','JOB_PATH','slice','data','getJobState','generateJobId','FsUtils','retrieveMetadataFolder','getJobs','.json','1216460OdowEQ','createRetrieveJob','2714672rzEugo','../../shared/utils/job.utils','getJobsIds','JobStatus','10enexcu','getJobLogs','RETRIEVE_RESULT_FOLDER_NAME','__importDefault','utf-8','8pMPKPo','runJob','getResult','1801782AeuudZ','join','RETRIEVE_METADATA_FOLDER_NAME','../../shared/managers/state-manger','defineProperty','default','22JHIwZA','Job\x20log\x20not\x20found.','Chunk\x20not\x20found.','init','../constants','search','toString','getJobStatus','../../shared/utils/csv.utils','../../shared/enums/logger.enums','readFile','IN_PROGRESS','BadRequestError','../../../configs/path','NotFoundError','getResultChunk','constructor','7UBStRY','430197qEATwW','apply','Job\x20not\x20completed.','path','../job/classes/manifest-manger','setError','@flosum/utils','then','(((.+)+)+)+$','56425UXSiGV','1237746GUJGwN','dataPath','parse','fs/promises','__esModule'];a293_0x181e=function(){return _0x23988a;};return a293_0x181e();}class RetrieveMetadataService{static async[a293_0x13270f(0x179)](_0x13b70b,_0x23dafd){const _0x2ab147=a293_0x13270f,_0x5d2327=await job_utils_1[_0x2ab147(0x18e)][_0x2ab147(0x17f)](RetrieveMetadataService[_0x2ab147(0x178)]),_0x26e343=await job_utils_1['default']['sortJobsIds'](RetrieveMetadataService[_0x2ab147(0x178)],_0x5d2327),_0x1bda5c=_0x26e343[_0x2ab147(0x173)](_0x23dafd,_0x23dafd+_0x13b70b),_0x5c3ea7=[];for(const _0x41bcc9 of _0x1bda5c){const _0x5109cc=await state_manger_1[_0x2ab147(0x18e)][_0x2ab147(0x175)](path_1['default'][_0x2ab147(0x18a)](RetrieveMetadataService[_0x2ab147(0x178)],_0x41bcc9));_0x5c3ea7['push'](_0x5109cc);}return _0x5c3ea7;}static async[a293_0x13270f(0x17c)](_0x366203){const _0x3102f6=a293_0x13270f,_0x3ab7f4=job_utils_1['default'][_0x3102f6(0x176)](),_0x334b93=path_1[_0x3102f6(0x18e)][_0x3102f6(0x18a)](RetrieveMetadataService[_0x3102f6(0x178)],_0x3ab7f4);await(0x0,fs_utils_1['makeDir'])(_0x334b93),await manifest_manger_1[_0x3102f6(0x18e)]['create'](_0x334b93,_0x366203),await state_manger_1['default']['create'](_0x334b93,_0x3ab7f4);const _0x35cb0e=path_1[_0x3102f6(0x18e)][_0x3102f6(0x18a)](__dirname,job_1[_0x3102f6(0x172)]);return job_utils_1[_0x3102f6(0x18e)][_0x3102f6(0x187)](_0x35cb0e,{'jobStorePath':_0x334b93,'jobId':_0x3ab7f4})['catch'](async _0x11dbe9=>{const _0x320203=_0x3102f6,_0x16cef5=new state_manger_1[(_0x320203(0x18e))](_0x334b93);await _0x16cef5[_0x320203(0x192)](),await _0x16cef5[_0x320203(0x166)](_0x11dbe9);}),{'jobId':_0x3ab7f4};}static async[a293_0x13270f(0x188)](_0x1103b8){const _0x2f0807=a293_0x13270f,{status:_0x2dae18}=await RetrieveMetadataService[_0x2f0807(0x196)](_0x1103b8);if(_0x2dae18===logger_enums_1[_0x2f0807(0x180)][_0x2f0807(0x15a)])throw new bad_request_error_1[(_0x2f0807(0x15b))](_0x2f0807(0x163));const _0x231a12=path_1[_0x2f0807(0x18e)]['join'](RetrieveMetadataService[_0x2f0807(0x178)],_0x1103b8,constants_1['RETRIEVE_RESULTS_IDS_FILENAME']);if(await utils_1[_0x2f0807(0x177)]['isExistsPath'](_0x231a12))return(0x0,promises_1['readFile'])(_0x231a12,_0x2f0807(0x185))['then'](JSON[_0x2f0807(0x16d)]);else throw new not_found_error_1[(_0x2f0807(0x15d))]('Result\x20not\x20found.');}static async[a293_0x13270f(0x15e)](_0x5e626e,_0x162377){const _0x1d3e8e=a293_0x13270f,{status:_0x3f04a9}=await RetrieveMetadataService['getJobStatus'](_0x5e626e);if(_0x3f04a9===logger_enums_1[_0x1d3e8e(0x180)][_0x1d3e8e(0x15a)])throw new bad_request_error_1[(_0x1d3e8e(0x15b))](_0x1d3e8e(0x163));const _0x330514=path_1['default'][_0x1d3e8e(0x18a)](RetrieveMetadataService['retrieveMetadataFolder'],_0x5e626e,constants_1[_0x1d3e8e(0x183)]),_0x2ec542={'data':[]};if(await utils_1[_0x1d3e8e(0x177)][_0x1d3e8e(0x170)](path_1[_0x1d3e8e(0x18e)]['join'](_0x330514,_0x162377+'.json')))_0x2ec542[_0x1d3e8e(0x174)]=await(0x0,promises_1[_0x1d3e8e(0x159)])(path_1[_0x1d3e8e(0x18e)]['join'](_0x330514,_0x162377+_0x1d3e8e(0x17a)),_0x1d3e8e(0x185))['then'](JSON[_0x1d3e8e(0x16d)]);else throw new not_found_error_1[(_0x1d3e8e(0x15d))](_0x1d3e8e(0x191));return _0x2ec542;}static async[a293_0x13270f(0x196)](_0x2fd510){const _0x3a425c=a293_0x13270f;try{return await state_manger_1['default'][_0x3a425c(0x175)](path_1[_0x3a425c(0x18e)]['join'](RetrieveMetadataService[_0x3a425c(0x178)],_0x2fd510));}catch(_0x5d8deb){throw new not_found_error_1[(_0x3a425c(0x15d))](_0x5d8deb);}}static async[a293_0x13270f(0x182)](_0xe37ea6){const _0x4c01e8=a293_0x13270f,_0x528f84=path_1[_0x4c01e8(0x18e)][_0x4c01e8(0x18a)](RetrieveMetadataService[_0x4c01e8(0x178)],_0xe37ea6,job_1['JOB_LOG_DETAILS_FILENAME']);if(await utils_1[_0x4c01e8(0x177)][_0x4c01e8(0x170)](_0x528f84))return(0x0,promises_1[_0x4c01e8(0x159)])(_0x528f84,_0x4c01e8(0x185))[_0x4c01e8(0x168)](_0x48a33f=>csv_utils_1[_0x4c01e8(0x18e)][_0x4c01e8(0x16d)](_0x48a33f,{'columns':!![]}));throw new not_found_error_1['NotFoundError'](_0x4c01e8(0x190));}}exports[a293_0x13270f(0x18e)]=RetrieveMetadataService,RetrieveMetadataService[a293_0x13270f(0x178)]=path_1[a293_0x13270f(0x18e)][a293_0x13270f(0x18a)](path_2[a293_0x13270f(0x16c)],constants_1[a293_0x13270f(0x18b)]);