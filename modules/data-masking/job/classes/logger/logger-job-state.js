function a73_0x3c6f(_0x5145ca,_0x5ee103){const _0x19063c=a73_0x1d86();return a73_0x3c6f=function(_0x24eb0d,_0x33f48e){_0x24eb0d=_0x24eb0d-0x7c;let _0x1d869e=_0x19063c[_0x24eb0d];return _0x1d869e;},a73_0x3c6f(_0x5145ca,_0x5ee103);}const a73_0x390c7e=a73_0x3c6f;(function(_0x2cd8f3,_0x532462){const _0x2011b6=a73_0x3c6f,_0x23c112=_0x2cd8f3();while(!![]){try{const _0x38e85e=parseInt(_0x2011b6(0xb6))/0x1*(parseInt(_0x2011b6(0x86))/0x2)+-parseInt(_0x2011b6(0x82))/0x3*(parseInt(_0x2011b6(0x97))/0x4)+-parseInt(_0x2011b6(0x80))/0x5+-parseInt(_0x2011b6(0xa0))/0x6*(parseInt(_0x2011b6(0x96))/0x7)+-parseInt(_0x2011b6(0x91))/0x8*(-parseInt(_0x2011b6(0x81))/0x9)+parseInt(_0x2011b6(0xb4))/0xa+parseInt(_0x2011b6(0x94))/0xb*(-parseInt(_0x2011b6(0x9b))/0xc);if(_0x38e85e===_0x532462)break;else _0x23c112['push'](_0x23c112['shift']());}catch(_0x1a6a24){_0x23c112['push'](_0x23c112['shift']());}}}(a73_0x1d86,0x1e3aa));const a73_0x33f48e=(function(){let _0x1777ec=!![];return function(_0x598dec,_0x3efca6){const _0x2c0891=_0x1777ec?function(){if(_0x3efca6){const _0x28b577=_0x3efca6['apply'](_0x598dec,arguments);return _0x3efca6=null,_0x28b577;}}:function(){};return _0x1777ec=![],_0x2c0891;};}()),a73_0x24eb0d=a73_0x33f48e(this,function(){const _0x5ad1c4=a73_0x3c6f;return a73_0x24eb0d[_0x5ad1c4(0x8a)]()[_0x5ad1c4(0x95)](_0x5ad1c4(0x99))[_0x5ad1c4(0x8a)]()['constructor'](a73_0x24eb0d)['search'](_0x5ad1c4(0x99));});a73_0x24eb0d();'use strict';var __importDefault=this&&this['__importDefault']||function(_0xdb83f3){const _0x54a79d=a73_0x3c6f;return _0xdb83f3&&_0xdb83f3[_0x54a79d(0x9d)]?_0xdb83f3:{'default':_0xdb83f3};};Object['defineProperty'](exports,a73_0x390c7e(0x9d),{'value':!![]}),exports[a73_0x390c7e(0xae)]=void 0x0;function a73_0x1d86(){const _0x7aff75=['setJobStatus','168eScHbt','Logger\x20Job\x20State\x20wasn\x27t\x20init','__esModule','./base-logger','JOB_LOG_STATE_FILENAME','6NlajaI','successful','getObjectState','updateLoggerState','BaseLogger','getJobState','getTime','path','filePath','start','processed','jobState','parse','../../../../../constants/job','LoggerJobState','write','_jobPath','FAILED','readFile','failed','2069260gYkvcv','init','48309cmjCDA','completedDate','updateObjectProcess','jobStorePath','default','_isLoggerInit','Cannot\x20find\x20object\x20\x27','QUEUED','915495QiUpqP','900BGxuem','519297mPlzgY','error','setObjectStatus','writeFile','8BznHMU','stringify','initJobState','isLoggerInit','toString','JobStatus','status','join','../../job-detail','FsUtils','initObjectStatistics','16904pIBMEr','\x27\x20in\x20statistic','_jobState','63877TqzSdX','search','351036aYTpJn','4tPAXXn','isExistsPath','(((.+)+)+)+$'];a73_0x1d86=function(){return _0x7aff75;};return a73_0x1d86();}const path_1=__importDefault(require(a73_0x390c7e(0xa7))),logger_enums_1=require('../../enums/logger.enums'),base_logger_1=require(a73_0x390c7e(0x9e)),promises_1=require('fs/promises'),job_detail_1=require(a73_0x390c7e(0x8e)),utils_1=require('@flosum/utils'),job_1=require(a73_0x390c7e(0xad));class LoggerJobState extends base_logger_1[a73_0x390c7e(0xa4)]{constructor(){super(...arguments),this['_isLoggerInit']=![];}get['isLoggerInit'](){return this['_isLoggerInit'];}set[a73_0x390c7e(0x89)](_0x474252){const _0x4d8b63=a73_0x390c7e;this[_0x4d8b63(0x7d)]=_0x474252;}get[a73_0x390c7e(0xab)](){const _0x425b01=a73_0x390c7e;if(!this[_0x425b01(0x89)])throw new Error(_0x425b01(0x9c));return this[_0x425b01(0x93)];}get[a73_0x390c7e(0xa8)](){const _0x2f04d5=a73_0x390c7e;return path_1[_0x2f04d5(0x7c)][_0x2f04d5(0x8d)](this[_0x2f04d5(0xb0)],job_1[_0x2f04d5(0x9f)]);}async[a73_0x390c7e(0xb5)](_0x26d2bc){const _0x24931e=a73_0x390c7e;return this[_0x24931e(0x93)]=await this['getJobState'](),this[_0x24931e(0x93)][_0x24931e(0xaa)]=this[_0x24931e(0x90)](_0x26d2bc),await this[_0x24931e(0xaf)](),await this[_0x24931e(0xa9)](),this[_0x24931e(0x89)]=!![],this;}[a73_0x390c7e(0x84)](_0x244e5e,_0x1ba758){const _0x39f8c1=a73_0x390c7e;this[_0x39f8c1(0xa2)](_0x244e5e)['status']=_0x1ba758,this[_0x39f8c1(0xa3)]();}[a73_0x390c7e(0x9a)](_0x597a61){const _0x578d2c=a73_0x390c7e;this[_0x578d2c(0xab)][_0x578d2c(0x8c)]=_0x597a61,[logger_enums_1[_0x578d2c(0x8b)][_0x578d2c(0xb1)],logger_enums_1[_0x578d2c(0x8b)]['COMPLETED']]['includes'](_0x597a61)&&(this[_0x578d2c(0xab)][_0x578d2c(0xb7)]=new Date()[_0x578d2c(0xa6)]()),this[_0x578d2c(0xa3)]();}['setJobError'](_0x59ee20){const _0x506c17=a73_0x390c7e;this[_0x506c17(0xab)][_0x506c17(0x83)]=_0x59ee20,this[_0x506c17(0xa3)]();}[a73_0x390c7e(0xb8)](_0x4227ce,_0x1466ad,_0x116944){const _0x2d0dc7=a73_0x390c7e,_0x359d28=this[_0x2d0dc7(0xa2)](_0x4227ce);_0x359d28[_0x2d0dc7(0xa1)]+=_0x1466ad,_0x359d28[_0x2d0dc7(0xb3)]+=_0x116944,this[_0x2d0dc7(0xab)][_0x2d0dc7(0xa1)]+=_0x1466ad,this['jobState']['failed']+=_0x116944,this[_0x2d0dc7(0xa3)]();}[a73_0x390c7e(0xa2)](_0xbf4671){const _0x24959f=a73_0x390c7e;var _0x5d7728;const _0x3af417=(_0x5d7728=this[_0x24959f(0xab)][_0x24959f(0xaa)])===null||_0x5d7728===void 0x0?void 0x0:_0x5d7728['find'](_0x3832d5=>_0x3832d5['name']===_0xbf4671);if(!_0x3af417)throw new Error(_0x24959f(0x7e)+_0xbf4671+_0x24959f(0x92));return _0x3af417;}async[a73_0x390c7e(0xa5)](){const _0x233483=a73_0x390c7e;if(!await utils_1[_0x233483(0x8f)][_0x233483(0x98)](this[_0x233483(0xa8)]))return this[_0x233483(0x88)]();const _0x8684a=await(0x0,promises_1[_0x233483(0xb2)])(job_detail_1[_0x233483(0xb9)]+'/'+job_1[_0x233483(0x9f)],{'encoding':'utf-8'});return JSON[_0x233483(0xac)](_0x8684a);}[a73_0x390c7e(0x88)](){const _0x31cef5=a73_0x390c7e;return{'id':this['_jobId'],'status':logger_enums_1[_0x31cef5(0x8b)][_0x31cef5(0x7f)],'processed':[],'createdDate':new Date()[_0x31cef5(0xa6)](),'successful':0x0,'failed':0x0};}[a73_0x390c7e(0x90)](_0x5d7f20){const _0x2cb66f=a73_0x390c7e;return _0x5d7f20['map'](_0x21e0df=>({'name':_0x21e0df,'status':logger_enums_1['ObjectStatus'][_0x2cb66f(0x7f)],'failed':0x0,'successful':0x0}));}[a73_0x390c7e(0xaf)](){const _0x1045a4=a73_0x390c7e;return(0x0,promises_1[_0x1045a4(0x85)])(this[_0x1045a4(0xa8)],JSON[_0x1045a4(0x87)](this[_0x1045a4(0x93)]));}}exports['LoggerJobState']=LoggerJobState;