function a58_0x586e(){const _0x238330=['utf-8','51KBJaxX','name','updateLoggerState','failed','FsUtils','COMPLETED','2134DwBCJq','\x27\x20in\x20statistic','writeFile','filePath','271960NqxuCk','JOB_LOG_STATE_FILENAME','find','159528RXSmBO','../../job-detail','successful','Logger\x20Job\x20State\x20wasn\x27t\x20init','getObjectState','_jobId','search','8939rBePJH','@flosum/utils','BaseLogger','includes','LoggerJobState','isLoggerInit','jobState','4612296CqpJZC','toString','error','22376ETPweX','Cannot\x20find\x20object\x20\x27','initJobState','__esModule','FAILED','constructor','default','status','defineProperty','./base-logger','jobStorePath','_isLoggerInit','44403696gwYdeU','start','77960sNoMhk','updateObjectProcess','getJobState','../../enums/logger.enums','JobStatus','5718ugcPhp','join','_jobState','init','65IjRGBm','setJobStatus','initObjectStatistics','fs/promises','processed','ObjectStatus','path','_jobPath','__importDefault','(((.+)+)+)+$','setObjectStatus','9PvmlGr'];a58_0x586e=function(){return _0x238330;};return a58_0x586e();}function a58_0x3592(_0x6e4841,_0x3ad881){const _0x18a4d8=a58_0x586e();return a58_0x3592=function(_0x28cb16,_0xe335ea){_0x28cb16=_0x28cb16-0x99;let _0x586ed9=_0x18a4d8[_0x28cb16];return _0x586ed9;},a58_0x3592(_0x6e4841,_0x3ad881);}const a58_0x58cda3=a58_0x3592;(function(_0x246ef0,_0xa31dff){const _0x46c2e9=a58_0x3592,_0x3c3771=_0x246ef0();while(!![]){try{const _0x1a2687=-parseInt(_0x46c2e9(0xae))/0x1+parseInt(_0x46c2e9(0xbf))/0x2*(-parseInt(_0x46c2e9(0xa1))/0x3)+-parseInt(_0x46c2e9(0xab))/0x4*(-parseInt(_0x46c2e9(0xd6))/0x5)+-parseInt(_0x46c2e9(0xd2))/0x6*(parseInt(_0x46c2e9(0xb5))/0x7)+parseInt(_0x46c2e9(0xbc))/0x8*(-parseInt(_0x46c2e9(0x9f))/0x9)+-parseInt(_0x46c2e9(0xcd))/0xa*(parseInt(_0x46c2e9(0xa7))/0xb)+parseInt(_0x46c2e9(0xcb))/0xc;if(_0x1a2687===_0xa31dff)break;else _0x3c3771['push'](_0x3c3771['shift']());}catch(_0x5663f0){_0x3c3771['push'](_0x3c3771['shift']());}}}(a58_0x586e,0xe2b00));const a58_0xe335ea=(function(){let _0xa83c28=!![];return function(_0x547e4c,_0x3fab3d){const _0x15ecb9=_0xa83c28?function(){if(_0x3fab3d){const _0x534ae3=_0x3fab3d['apply'](_0x547e4c,arguments);return _0x3fab3d=null,_0x534ae3;}}:function(){};return _0xa83c28=![],_0x15ecb9;};}()),a58_0x28cb16=a58_0xe335ea(this,function(){const _0x94ab11=a58_0x3592;return a58_0x28cb16[_0x94ab11(0xbd)]()[_0x94ab11(0xb4)](_0x94ab11(0x9d))[_0x94ab11(0xbd)]()[_0x94ab11(0xc4)](a58_0x28cb16)[_0x94ab11(0xb4)](_0x94ab11(0x9d));});a58_0x28cb16();'use strict';var __importDefault=this&&this[a58_0x58cda3(0x9c)]||function(_0x5e341d){return _0x5e341d&&_0x5e341d['__esModule']?_0x5e341d:{'default':_0x5e341d};};Object[a58_0x58cda3(0xc7)](exports,a58_0x58cda3(0xc2),{'value':!![]}),exports[a58_0x58cda3(0xb9)]=void 0x0;const path_1=__importDefault(require(a58_0x58cda3(0x9a))),logger_enums_1=require(a58_0x58cda3(0xd0)),base_logger_1=require(a58_0x58cda3(0xc8)),promises_1=require(a58_0x58cda3(0xd9)),job_detail_1=require(a58_0x58cda3(0xaf)),utils_1=require(a58_0x58cda3(0xb6)),job_1=require('../../../../../constants/job');class LoggerJobState extends base_logger_1[a58_0x58cda3(0xb7)]{constructor(){super(...arguments),this['_isLoggerInit']=![];}get[a58_0x58cda3(0xba)](){const _0xa35254=a58_0x58cda3;return this[_0xa35254(0xca)];}set[a58_0x58cda3(0xba)](_0x558760){this['_isLoggerInit']=_0x558760;}get['jobState'](){const _0x233892=a58_0x58cda3;if(!this['isLoggerInit'])throw new Error(_0x233892(0xb1));return this[_0x233892(0xd4)];}get[a58_0x58cda3(0xaa)](){const _0x488645=a58_0x58cda3;return path_1[_0x488645(0xc5)][_0x488645(0xd3)](this[_0x488645(0x9b)],job_1[_0x488645(0xac)]);}async[a58_0x58cda3(0xd5)](_0x4ffb4b){const _0x3a08af=a58_0x58cda3;return this[_0x3a08af(0xd4)]=await this[_0x3a08af(0xcf)](),this[_0x3a08af(0xd4)][_0x3a08af(0xda)]=this[_0x3a08af(0xd8)](_0x4ffb4b),await this['write'](),await this[_0x3a08af(0xcc)](),this[_0x3a08af(0xba)]=!![],this;}[a58_0x58cda3(0x9e)](_0x426ae0,_0x1be215){const _0x375ab0=a58_0x58cda3;this[_0x375ab0(0xb2)](_0x426ae0)[_0x375ab0(0xc6)]=_0x1be215,this['updateLoggerState']();}[a58_0x58cda3(0xd7)](_0x1d2e01){const _0xdf3975=a58_0x58cda3;this['jobState'][_0xdf3975(0xc6)]=_0x1d2e01,[logger_enums_1[_0xdf3975(0xd1)][_0xdf3975(0xc3)],logger_enums_1[_0xdf3975(0xd1)][_0xdf3975(0xa6)]][_0xdf3975(0xb8)](_0x1d2e01)&&(this[_0xdf3975(0xbb)]['completedDate']=new Date()['getTime']()),this['updateLoggerState']();}['setJobError'](_0x6b01c7){const _0x7244d2=a58_0x58cda3;this[_0x7244d2(0xbb)][_0x7244d2(0xbe)]=_0x6b01c7,this[_0x7244d2(0xa3)]();}[a58_0x58cda3(0xce)](_0x26c95e,_0x3a7c49,_0x5970ec){const _0x1c77ed=a58_0x58cda3,_0x10f5ff=this[_0x1c77ed(0xb2)](_0x26c95e);_0x10f5ff[_0x1c77ed(0xb0)]+=_0x3a7c49,_0x10f5ff[_0x1c77ed(0xa4)]+=_0x5970ec,this[_0x1c77ed(0xbb)][_0x1c77ed(0xb0)]+=_0x3a7c49,this[_0x1c77ed(0xbb)]['failed']+=_0x5970ec,this[_0x1c77ed(0xa3)]();}[a58_0x58cda3(0xb2)](_0x559d62){const _0x102dba=a58_0x58cda3;var _0x50f870;const _0x52fac3=(_0x50f870=this[_0x102dba(0xbb)][_0x102dba(0xda)])===null||_0x50f870===void 0x0?void 0x0:_0x50f870[_0x102dba(0xad)](_0x1652a7=>_0x1652a7[_0x102dba(0xa2)]===_0x559d62);if(!_0x52fac3)throw new Error(_0x102dba(0xc0)+_0x559d62+_0x102dba(0xa8));return _0x52fac3;}async[a58_0x58cda3(0xcf)](){const _0x36a85f=a58_0x58cda3;if(!await utils_1[_0x36a85f(0xa5)]['isExistsPath'](this['filePath']))return this[_0x36a85f(0xc1)]();const _0x1752f7=await(0x0,promises_1['readFile'])(job_detail_1[_0x36a85f(0xc9)]+'/'+job_1[_0x36a85f(0xac)],{'encoding':_0x36a85f(0xa0)});return JSON['parse'](_0x1752f7);}[a58_0x58cda3(0xc1)](){const _0x51ca4e=a58_0x58cda3;return{'id':this[_0x51ca4e(0xb3)],'status':logger_enums_1[_0x51ca4e(0xd1)]['QUEUED'],'processed':[],'createdDate':new Date()['getTime'](),'successful':0x0,'failed':0x0};}[a58_0x58cda3(0xd8)](_0x120475){const _0x4c41f0=a58_0x58cda3;return _0x120475['map'](_0x3fc16e=>({'name':_0x3fc16e,'status':logger_enums_1[_0x4c41f0(0x99)]['QUEUED'],'failed':0x0,'successful':0x0}));}['write'](){const _0x1b8831=a58_0x58cda3;return(0x0,promises_1[_0x1b8831(0xa9)])(this[_0x1b8831(0xaa)],JSON['stringify'](this[_0x1b8831(0xd4)]));}}exports[a58_0x58cda3(0xb9)]=LoggerJobState;