const a69_0x1d9137=a69_0xca90;(function(_0x29a53e,_0x26ee5f){const _0x533595=a69_0xca90,_0x5ce9b1=_0x29a53e();while(!![]){try{const _0x4ff54d=-parseInt(_0x533595(0x17c))/0x1*(-parseInt(_0x533595(0x16a))/0x2)+parseInt(_0x533595(0x191))/0x3+-parseInt(_0x533595(0x178))/0x4*(parseInt(_0x533595(0x180))/0x5)+parseInt(_0x533595(0x174))/0x6*(-parseInt(_0x533595(0x18c))/0x7)+-parseInt(_0x533595(0x170))/0x8+parseInt(_0x533595(0x197))/0x9+parseInt(_0x533595(0x18f))/0xa*(parseInt(_0x533595(0x173))/0xb);if(_0x4ff54d===_0x26ee5f)break;else _0x5ce9b1['push'](_0x5ce9b1['shift']());}catch(_0x3bda6e){_0x5ce9b1['push'](_0x5ce9b1['shift']());}}}(a69_0x1c73,0x2721c));const a69_0x440c9f=(function(){let _0x131b7a=!![];return function(_0x1c7060,_0x1f93d4){const _0x1b85f6=_0x131b7a?function(){if(_0x1f93d4){const _0x125bb7=_0x1f93d4['apply'](_0x1c7060,arguments);return _0x1f93d4=null,_0x125bb7;}}:function(){};return _0x131b7a=![],_0x1b85f6;};}()),a69_0x278033=a69_0x440c9f(this,function(){const _0x46f81b=a69_0xca90;return a69_0x278033[_0x46f81b(0x195)]()[_0x46f81b(0x193)](_0x46f81b(0x183))['toString']()[_0x46f81b(0x17d)](a69_0x278033)[_0x46f81b(0x193)](_0x46f81b(0x183));});function a69_0xca90(_0x42b9c6,_0x3ddca3){const _0x3c081e=a69_0x1c73();return a69_0xca90=function(_0x278033,_0x440c9f){_0x278033=_0x278033-0x16a;let _0x1c73ec=_0x3c081e[_0x278033];return _0x1c73ec;},a69_0xca90(_0x42b9c6,_0x3ddca3);}a69_0x278033();'use strict';var __importDefault=this&&this[a69_0x1d9137(0x187)]||function(_0xa9faaf){const _0x3284a9=a69_0x1d9137;return _0xa9faaf&&_0xa9faaf[_0x3284a9(0x198)]?_0xa9faaf:{'default':_0xa9faaf};};function a69_0x1c73(){const _0x2e5147=['../../shared/managers/state-manger','b2cFolder','create','readFile','@flosum/utils','2327216SufcHA','setError','join','5753XuASLa','6hwiHZG','getJobLog','push','default','4quEKxU','generateJobId','dataPath','NotFoundError','523kdXBdj','constructor','fs/promises','B2C_FOLDER_NAME','12700sdsrLw','getJobs','parse','(((.+)+)+)+$','cartridges','Job\x20log\x20not\x20found.','getJobState','__importDefault','runJob','path','JOB_LOG_DETAILS_FILENAME','../../../configs/path','1402247LkVWtp','catch','../../shared/utils/csv.utils','3940ntBfZq','../job/classes/manifest-manager','146271OJnNZl','utf-8','search','finally','toString','isExistsPath','2449251cvsFBs','__esModule','486XZKanv'];a69_0x1c73=function(){return _0x2e5147;};return a69_0x1c73();}Object['defineProperty'](exports,a69_0x1d9137(0x198),{'value':!![]});const promises_1=require(a69_0x1d9137(0x17e)),utils_1=require(a69_0x1d9137(0x16f)),not_found_error_1=require('../../../core/errors/not-found.error'),fs_utils_1=require('../../shared/utils/fs.utils'),constants_1=require('../constants'),path_1=require(a69_0x1d9137(0x18b)),job_1=require('../../../constants/job'),path_2=__importDefault(require(a69_0x1d9137(0x189))),manifest_manager_1=__importDefault(require(a69_0x1d9137(0x190))),state_manger_1=__importDefault(require(a69_0x1d9137(0x16b))),job_utils_1=__importDefault(require('../../shared/utils/job.utils')),csv_utils_1=__importDefault(require(a69_0x1d9137(0x18e)));class B2CService{static async['createJob'](_0x38a48a){const _0x423717=a69_0x1d9137,_0x5df7c0=job_utils_1[_0x423717(0x177)][_0x423717(0x179)](),_0x426c2c=path_2[_0x423717(0x177)]['join'](B2CService[_0x423717(0x16c)],_0x5df7c0);await(0x0,fs_utils_1['makeDir'])(_0x426c2c),await manifest_manager_1[_0x423717(0x177)][_0x423717(0x16d)](_0x426c2c,_0x38a48a),await state_manger_1['default'][_0x423717(0x16d)](_0x426c2c,_0x5df7c0);const _0xbcf374=path_2[_0x423717(0x177)][_0x423717(0x172)](__dirname,job_1['JOB_PATH']);return job_utils_1[_0x423717(0x177)][_0x423717(0x188)](_0xbcf374,{'jobStorePath':_0x426c2c,'jobId':_0x5df7c0})[_0x423717(0x18d)](async _0x501891=>{const _0x4934cb=_0x423717,_0x5df1cf=new state_manger_1[(_0x4934cb(0x177))](_0x426c2c);await _0x5df1cf['init'](),await _0x5df1cf[_0x4934cb(0x171)](_0x501891);})[_0x423717(0x194)](async()=>{const _0x29b3cf=_0x423717,_0x4a1dad=path_2[_0x29b3cf(0x177)][_0x29b3cf(0x172)](_0x426c2c,_0x29b3cf(0x184));await(0x0,promises_1['rm'])(_0x4a1dad,{'recursive':!![],'force':!![]});}),{'jobId':_0x5df7c0};}static async[a69_0x1d9137(0x181)](_0x245550,_0x4ced1e){const _0x560ee6=a69_0x1d9137,_0x275b70=await job_utils_1['default']['getJobsIds'](B2CService[_0x560ee6(0x16c)]),_0x265629=await job_utils_1[_0x560ee6(0x177)]['sortJobsIds'](B2CService[_0x560ee6(0x16c)],_0x275b70),_0x142f48=_0x265629['slice'](_0x4ced1e,_0x4ced1e+_0x245550),_0x3e98b2=[];for(const _0x3d6846 of _0x142f48){const _0x3f2638=await state_manger_1[_0x560ee6(0x177)][_0x560ee6(0x186)](path_2[_0x560ee6(0x177)]['join'](B2CService[_0x560ee6(0x16c)],_0x3d6846));_0x3e98b2[_0x560ee6(0x176)](_0x3f2638);}return _0x3e98b2;}static async['getJobStatus'](_0x476fd0){const _0x49b169=a69_0x1d9137;try{return state_manger_1[_0x49b169(0x177)][_0x49b169(0x186)](path_2[_0x49b169(0x177)][_0x49b169(0x172)](B2CService[_0x49b169(0x16c)],_0x476fd0));}catch(_0x17f22f){throw new not_found_error_1[(_0x49b169(0x17b))](_0x17f22f);}}static async[a69_0x1d9137(0x175)](_0x5468fc){const _0x1c7ed4=a69_0x1d9137,_0x231c95=path_2[_0x1c7ed4(0x177)]['join'](B2CService[_0x1c7ed4(0x16c)],_0x5468fc,job_1[_0x1c7ed4(0x18a)]);if(await utils_1['FsUtils'][_0x1c7ed4(0x196)](_0x231c95))return(0x0,promises_1[_0x1c7ed4(0x16e)])(_0x231c95,_0x1c7ed4(0x192))['then'](_0xba635d=>csv_utils_1[_0x1c7ed4(0x177)][_0x1c7ed4(0x182)](_0xba635d,{'columns':!![]}));throw new not_found_error_1['NotFoundError'](_0x1c7ed4(0x185));}}exports['default']=B2CService,B2CService['b2cFolder']=path_2['default'][a69_0x1d9137(0x172)](path_1[a69_0x1d9137(0x17a)],constants_1[a69_0x1d9137(0x17f)]);