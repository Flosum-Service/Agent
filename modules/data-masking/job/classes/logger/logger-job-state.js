const a58_0x13e2d0=a58_0x7415;(function(_0x434ed7,_0x295d5c){const _0x437ed8=a58_0x7415,_0x164bad=_0x434ed7();while(!![]){try{const _0x37c5ff=-parseInt(_0x437ed8(0x122))/0x1+parseInt(_0x437ed8(0x108))/0x2+-parseInt(_0x437ed8(0x114))/0x3*(-parseInt(_0x437ed8(0x130))/0x4)+parseInt(_0x437ed8(0x121))/0x5+-parseInt(_0x437ed8(0x11f))/0x6+parseInt(_0x437ed8(0x115))/0x7*(-parseInt(_0x437ed8(0x135))/0x8)+-parseInt(_0x437ed8(0x136))/0x9*(-parseInt(_0x437ed8(0x138))/0xa);if(_0x37c5ff===_0x295d5c)break;else _0x164bad['push'](_0x164bad['shift']());}catch(_0x21dd32){_0x164bad['push'](_0x164bad['shift']());}}}(a58_0x4ddc,0x5d2f0));const a58_0x302052=(function(){let _0x3f70b5=!![];return function(_0x43d23e,_0x44b0bb){const _0x598302=_0x3f70b5?function(){const _0x49ed60=a58_0x7415;if(_0x44b0bb){const _0x3bb55c=_0x44b0bb[_0x49ed60(0x12b)](_0x43d23e,arguments);return _0x44b0bb=null,_0x3bb55c;}}:function(){};return _0x3f70b5=![],_0x598302;};}()),a58_0xf5def4=a58_0x302052(this,function(){const _0x72c4d0=a58_0x7415;return a58_0xf5def4[_0x72c4d0(0x113)]()[_0x72c4d0(0x118)]('(((.+)+)+)+$')['toString']()[_0x72c4d0(0xfb)](a58_0xf5def4)[_0x72c4d0(0x118)](_0x72c4d0(0x10e));});a58_0xf5def4();'use strict';var __importDefault=this&&this[a58_0x13e2d0(0xf9)]||function(_0x2164c6){const _0x3705c2=a58_0x13e2d0;return _0x2164c6&&_0x2164c6[_0x3705c2(0x10b)]?_0x2164c6:{'default':_0x2164c6};};Object['defineProperty'](exports,a58_0x13e2d0(0x10b),{'value':!![]}),exports[a58_0x13e2d0(0x12d)]=void 0x0;function a58_0x7415(_0x407d26,_0x4ca061){const _0x51db70=a58_0x4ddc();return a58_0x7415=function(_0xf5def4,_0x302052){_0xf5def4=_0xf5def4-0xf9;let _0x4ddcf2=_0x51db70[_0xf5def4];return _0x4ddcf2;},a58_0x7415(_0x407d26,_0x4ca061);}const path_1=__importDefault(require('path')),logger_enums_1=require(a58_0x13e2d0(0x12a)),base_logger_1=require(a58_0x13e2d0(0x103)),promises_1=require(a58_0x13e2d0(0xfe)),job_detail_1=require(a58_0x13e2d0(0x116)),utils_1=require(a58_0x13e2d0(0x131)),job_1=require(a58_0x13e2d0(0x132));class LoggerJobState extends base_logger_1['BaseLogger']{constructor(){const _0x502478=a58_0x13e2d0;super(...arguments),this[_0x502478(0xfd)]=![];}get['isLoggerInit'](){const _0x145fd7=a58_0x13e2d0;return this[_0x145fd7(0xfd)];}set[a58_0x13e2d0(0x11d)](_0x40543e){const _0x125faa=a58_0x13e2d0;this[_0x125faa(0xfd)]=_0x40543e;}get[a58_0x13e2d0(0x129)](){if(!this['isLoggerInit'])throw new Error('Logger\x20Job\x20State\x20wasn\x27t\x20init');return this['_jobState'];}get[a58_0x13e2d0(0x100)](){const _0x5dc169=a58_0x13e2d0;return path_1['default']['join'](this['_jobPath'],job_1[_0x5dc169(0x124)]);}async['init'](_0x3fb3f5){const _0x44dc33=a58_0x13e2d0;return this[_0x44dc33(0x123)]=await this[_0x44dc33(0x11e)](),this['_jobState'][_0x44dc33(0x12f)]=this[_0x44dc33(0x11b)](_0x3fb3f5),await this[_0x44dc33(0x10d)](),await this[_0x44dc33(0x110)](),this[_0x44dc33(0x11d)]=!![],this;}[a58_0x13e2d0(0x125)](_0x2f9687,_0x24c84e){const _0x3c95e7=a58_0x13e2d0;this[_0x3c95e7(0x104)](_0x2f9687)[_0x3c95e7(0x107)]=_0x24c84e,this['updateLoggerState']();}[a58_0x13e2d0(0x120)](_0x3c72b9){const _0x2c5748=a58_0x13e2d0;this[_0x2c5748(0x129)][_0x2c5748(0x107)]=_0x3c72b9,[logger_enums_1[_0x2c5748(0x134)][_0x2c5748(0x126)],logger_enums_1['JobStatus'][_0x2c5748(0x106)]][_0x2c5748(0x10a)](_0x3c72b9)&&(this[_0x2c5748(0x129)][_0x2c5748(0x12e)]=new Date()['getTime']()),this[_0x2c5748(0xfa)]();}[a58_0x13e2d0(0x11c)](_0x55bcce){const _0x5c4615=a58_0x13e2d0;this[_0x5c4615(0x129)][_0x5c4615(0xfc)]=_0x55bcce,this['updateLoggerState']();}[a58_0x13e2d0(0x10f)](_0x30c0b0,_0x3b991e,_0x3e86d9){const _0x19edb6=a58_0x13e2d0,_0x43c3e1=this['getObjectState'](_0x30c0b0);_0x43c3e1[_0x19edb6(0x12c)]+=_0x3b991e,_0x43c3e1['failed']+=_0x3e86d9,this[_0x19edb6(0x129)][_0x19edb6(0x12c)]+=_0x3b991e,this[_0x19edb6(0x129)]['failed']+=_0x3e86d9,this['updateLoggerState']();}[a58_0x13e2d0(0x104)](_0x44e27c){const _0x1f1f76=a58_0x13e2d0;var _0x550c75;const _0x4a9055=(_0x550c75=this['jobState'][_0x1f1f76(0x12f)])===null||_0x550c75===void 0x0?void 0x0:_0x550c75[_0x1f1f76(0x102)](_0x31d340=>_0x31d340[_0x1f1f76(0x105)]===_0x44e27c);if(!_0x4a9055)throw new Error(_0x1f1f76(0x111)+_0x44e27c+_0x1f1f76(0x11a));return _0x4a9055;}async[a58_0x13e2d0(0x11e)](){const _0x15e4a8=a58_0x13e2d0;if(!await utils_1[_0x15e4a8(0x101)]['isExistsPath'](this[_0x15e4a8(0x100)]))return this[_0x15e4a8(0x119)]();const _0x514a62=await(0x0,promises_1[_0x15e4a8(0x10c)])(job_detail_1[_0x15e4a8(0x117)]+'/'+job_1[_0x15e4a8(0x124)],{'encoding':_0x15e4a8(0x128)});return JSON['parse'](_0x514a62);}[a58_0x13e2d0(0x119)](){const _0x84e7ba=a58_0x13e2d0;return{'id':this[_0x84e7ba(0x112)],'status':logger_enums_1[_0x84e7ba(0x134)][_0x84e7ba(0x109)],'processed':[],'createdDate':new Date()[_0x84e7ba(0x127)](),'successful':0x0,'failed':0x0};}[a58_0x13e2d0(0x11b)](_0x345796){const _0x3af1fd=a58_0x13e2d0;return _0x345796[_0x3af1fd(0x133)](_0x13a4b4=>({'name':_0x13a4b4,'status':logger_enums_1[_0x3af1fd(0x139)][_0x3af1fd(0x109)],'failed':0x0,'successful':0x0}));}['write'](){const _0x51724b=a58_0x13e2d0;return(0x0,promises_1[_0x51724b(0xff)])(this[_0x51724b(0x100)],JSON[_0x51724b(0x137)](this[_0x51724b(0x123)]));}}exports['LoggerJobState']=LoggerJobState;function a58_0x4ddc(){const _0xe9dcd9=['LoggerJobState','completedDate','processed','176fXeztm','@flosum/utils','../../../../../constants/job','map','JobStatus','472NUzxeK','18bAJLRb','stringify','2809910xJrqtK','ObjectStatus','__importDefault','updateLoggerState','constructor','error','_isLoggerInit','fs/promises','writeFile','filePath','FsUtils','find','./base-logger','getObjectState','name','COMPLETED','status','136250TZWvBP','QUEUED','includes','__esModule','readFile','write','(((.+)+)+)+$','updateObjectProcess','start','Cannot\x20find\x20object\x20\x27','_jobId','toString','22818FRzhYM','5768KlfCzP','../../job-detail','jobStorePath','search','initJobState','\x27\x20in\x20statistic','initObjectStatistics','setJobError','isLoggerInit','getJobState','3530244jYjIHx','setJobStatus','753250vylspv','96751yeYCHV','_jobState','JOB_LOG_STATE_FILENAME','setObjectStatus','FAILED','getTime','utf-8','jobState','../../enums/logger.enums','apply','successful'];a58_0x4ddc=function(){return _0xe9dcd9;};return a58_0x4ddc();}