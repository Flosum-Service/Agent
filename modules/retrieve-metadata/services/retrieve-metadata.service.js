const a309_0x40ba74=a309_0x3184;(function(_0x38a5b6,_0x38f451){const _0x3312a2=a309_0x3184,_0x408a4b=_0x38a5b6();while(!![]){try{const _0xfc08e6=-parseInt(_0x3312a2(0x8c))/0x1+parseInt(_0x3312a2(0xb2))/0x2*(-parseInt(_0x3312a2(0x87))/0x3)+parseInt(_0x3312a2(0xb1))/0x4+-parseInt(_0x3312a2(0x8d))/0x5*(parseInt(_0x3312a2(0x7f))/0x6)+-parseInt(_0x3312a2(0x81))/0x7*(-parseInt(_0x3312a2(0x84))/0x8)+-parseInt(_0x3312a2(0xa9))/0x9*(parseInt(_0x3312a2(0xb8))/0xa)+parseInt(_0x3312a2(0xa7))/0xb;if(_0xfc08e6===_0x38f451)break;else _0x408a4b['push'](_0x408a4b['shift']());}catch(_0x46ae71){_0x408a4b['push'](_0x408a4b['shift']());}}}(a309_0x5084,0x5d190));const a309_0x544ee0=(function(){let _0x3fe87b=!![];return function(_0x42e1fd,_0x2fe755){const _0x415afd=_0x3fe87b?function(){const _0x328710=a309_0x3184;if(_0x2fe755){const _0x382c80=_0x2fe755[_0x328710(0x8f)](_0x42e1fd,arguments);return _0x2fe755=null,_0x382c80;}}:function(){};return _0x3fe87b=![],_0x415afd;};}()),a309_0x3ebefc=a309_0x544ee0(this,function(){const _0x529e6a=a309_0x3184;return a309_0x3ebefc['toString']()[_0x529e6a(0x7c)]('(((.+)+)+)+$')[_0x529e6a(0xab)]()[_0x529e6a(0x8e)](a309_0x3ebefc)[_0x529e6a(0x7c)](_0x529e6a(0x99));});function a309_0x5084(){const _0x3c09af=['create','setError','getJobsIds','NotFoundError','path','12848913LFMaFT','../constants','95031IHzFLB','sortJobsIds','toString','FsUtils','defineProperty','BadRequestError','JobStatus','../../../core/errors/bad-request.error','2161192pHpjmQ','862882ClAPeZ','../../shared/enums/logger.enums','Job\x20not\x20completed.','../../../core/errors/not-found.error','createRetrieveJob','__esModule','440tkrHzK','Job\x20log\x20not\x20found.','search','JOB_PATH','../../../constants/job','31422fHbVSk','RETRIEVE_METADATA_FOLDER_NAME','18634IzSPBH','../job/classes/manifest-manger','slice','176HpzQoP','RETRIEVE_RESULT_FOLDER_NAME','then','3kEeNnE','utf-8','getJobStatus','parse','readFile','285337BdfpBk','195tYxGyO','constructor','apply','../../shared/utils/csv.utils','data','../../../configs/path','JOB_LOG_DETAILS_FILENAME','../../shared/utils/fs.utils','retrieveMetadataFolder','RETRIEVE_RESULTS_IDS_FILENAME','default','isExistsPath','(((.+)+)+)+$','generateJobId','Result\x20not\x20found.','init','../../shared/managers/state-manger','getJobLogs','dataPath','join','IN_PROGRESS'];a309_0x5084=function(){return _0x3c09af;};return a309_0x5084();}a309_0x3ebefc();function a309_0x3184(_0x32aaab,_0x388b34){const _0x150213=a309_0x5084();return a309_0x3184=function(_0x3ebefc,_0x544ee0){_0x3ebefc=_0x3ebefc-0x7b;let _0x508450=_0x150213[_0x3ebefc];return _0x508450;},a309_0x3184(_0x32aaab,_0x388b34);}'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4a5e5f){const _0x7a4bee=a309_0x3184;return _0x4a5e5f&&_0x4a5e5f[_0x7a4bee(0xb7)]?_0x4a5e5f:{'default':_0x4a5e5f};};Object[a309_0x40ba74(0xad)](exports,'__esModule',{'value':!![]});const job_utils_1=__importDefault(require('../../shared/utils/job.utils')),path_1=__importDefault(require(a309_0x40ba74(0xa6))),manifest_manger_1=__importDefault(require(a309_0x40ba74(0x82))),state_manger_1=__importDefault(require(a309_0x40ba74(0x9d))),promises_1=require('fs/promises'),utils_1=require('@flosum/utils'),csv_utils_1=__importDefault(require(a309_0x40ba74(0x90))),not_found_error_1=require(a309_0x40ba74(0xb5)),logger_enums_1=require(a309_0x40ba74(0xb3)),bad_request_error_1=require(a309_0x40ba74(0xb0)),job_1=require(a309_0x40ba74(0x7e)),fs_utils_1=require(a309_0x40ba74(0x94)),constants_1=require(a309_0x40ba74(0xa8)),path_2=require(a309_0x40ba74(0x92));class RetrieveMetadataService{static async['getJobs'](_0x3efcf3,_0x186429){const _0x428c1c=a309_0x40ba74,_0x1052d4=await job_utils_1[_0x428c1c(0x97)][_0x428c1c(0xa4)](RetrieveMetadataService[_0x428c1c(0x95)]),_0x2dd4c8=await job_utils_1[_0x428c1c(0x97)][_0x428c1c(0xaa)](RetrieveMetadataService[_0x428c1c(0x95)],_0x1052d4),_0x21c5c6=_0x2dd4c8[_0x428c1c(0x83)](_0x186429,_0x186429+_0x3efcf3),_0x275982=[];for(const _0x4d405e of _0x21c5c6){const _0x2c51f1=await state_manger_1[_0x428c1c(0x97)]['getJobState'](path_1[_0x428c1c(0x97)][_0x428c1c(0xa0)](RetrieveMetadataService[_0x428c1c(0x95)],_0x4d405e));_0x275982['push'](_0x2c51f1);}return _0x275982;}static async[a309_0x40ba74(0xb6)](_0x40b353){const _0xfa61ec=a309_0x40ba74,_0x1566d1=job_utils_1[_0xfa61ec(0x97)][_0xfa61ec(0x9a)](),_0x133c41=path_1['default'][_0xfa61ec(0xa0)](RetrieveMetadataService['retrieveMetadataFolder'],_0x1566d1);await(0x0,fs_utils_1['makeDir'])(_0x133c41),await manifest_manger_1[_0xfa61ec(0x97)][_0xfa61ec(0xa2)](_0x133c41,_0x40b353),await state_manger_1[_0xfa61ec(0x97)][_0xfa61ec(0xa2)](_0x133c41,_0x1566d1);const _0x230119=path_1['default']['join'](__dirname,job_1[_0xfa61ec(0x7d)]);return job_utils_1['default']['runJob'](_0x230119,{'jobStorePath':_0x133c41,'jobId':_0x1566d1})['catch'](async _0x5e72c3=>{const _0x3d8acd=_0xfa61ec,_0x7b2f17=new state_manger_1[(_0x3d8acd(0x97))](_0x133c41);await _0x7b2f17[_0x3d8acd(0x9c)](),await _0x7b2f17[_0x3d8acd(0xa3)](_0x5e72c3);}),{'jobId':_0x1566d1};}static async['getResult'](_0x1973c6){const _0xb5ea4f=a309_0x40ba74,{status:_0x4e4c9d}=await RetrieveMetadataService[_0xb5ea4f(0x89)](_0x1973c6);if(_0x4e4c9d===logger_enums_1[_0xb5ea4f(0xaf)][_0xb5ea4f(0xa1)])throw new bad_request_error_1['BadRequestError']('Job\x20not\x20completed.');const _0x50bbd6=path_1['default'][_0xb5ea4f(0xa0)](RetrieveMetadataService[_0xb5ea4f(0x95)],_0x1973c6,constants_1[_0xb5ea4f(0x96)]);if(await utils_1[_0xb5ea4f(0xac)]['isExistsPath'](_0x50bbd6))return(0x0,promises_1[_0xb5ea4f(0x8b)])(_0x50bbd6,_0xb5ea4f(0x88))[_0xb5ea4f(0x86)](JSON[_0xb5ea4f(0x8a)]);else throw new not_found_error_1[(_0xb5ea4f(0xa5))](_0xb5ea4f(0x9b));}static async['getResultChunk'](_0x3d809d,_0x305ea4){const _0x1be5c0=a309_0x40ba74,{status:_0x5e8260}=await RetrieveMetadataService[_0x1be5c0(0x89)](_0x3d809d);if(_0x5e8260===logger_enums_1[_0x1be5c0(0xaf)]['IN_PROGRESS'])throw new bad_request_error_1[(_0x1be5c0(0xae))](_0x1be5c0(0xb4));const _0x16f16a=path_1[_0x1be5c0(0x97)][_0x1be5c0(0xa0)](RetrieveMetadataService[_0x1be5c0(0x95)],_0x3d809d,constants_1[_0x1be5c0(0x85)]),_0x1ac9da={'data':[]};if(await utils_1['FsUtils'][_0x1be5c0(0x98)](path_1['default'][_0x1be5c0(0xa0)](_0x16f16a,_0x305ea4+'.json')))_0x1ac9da[_0x1be5c0(0x91)]=await(0x0,promises_1[_0x1be5c0(0x8b)])(path_1[_0x1be5c0(0x97)][_0x1be5c0(0xa0)](_0x16f16a,_0x305ea4+'.json'),'utf-8')[_0x1be5c0(0x86)](JSON[_0x1be5c0(0x8a)]);else throw new not_found_error_1[(_0x1be5c0(0xa5))]('Chunk\x20not\x20found.');return _0x1ac9da;}static async[a309_0x40ba74(0x89)](_0x2f3f6e){const _0x2cfd3a=a309_0x40ba74;try{return await state_manger_1['default']['getJobState'](path_1[_0x2cfd3a(0x97)][_0x2cfd3a(0xa0)](RetrieveMetadataService['retrieveMetadataFolder'],_0x2f3f6e));}catch(_0xd167f1){throw new not_found_error_1['NotFoundError'](_0xd167f1);}}static async[a309_0x40ba74(0x9e)](_0x5730de){const _0x44df82=a309_0x40ba74,_0x38de65=path_1[_0x44df82(0x97)][_0x44df82(0xa0)](RetrieveMetadataService[_0x44df82(0x95)],_0x5730de,job_1[_0x44df82(0x93)]);if(await utils_1[_0x44df82(0xac)][_0x44df82(0x98)](_0x38de65))return(0x0,promises_1[_0x44df82(0x8b)])(_0x38de65,_0x44df82(0x88))[_0x44df82(0x86)](_0x33714a=>csv_utils_1[_0x44df82(0x97)]['parse'](_0x33714a,{'columns':!![]}));throw new not_found_error_1[(_0x44df82(0xa5))](_0x44df82(0x7b));}}exports[a309_0x40ba74(0x97)]=RetrieveMetadataService,RetrieveMetadataService['retrieveMetadataFolder']=path_1[a309_0x40ba74(0x97)][a309_0x40ba74(0xa0)](path_2[a309_0x40ba74(0x9f)],constants_1[a309_0x40ba74(0x80)]);