const a315_0x10a71b=a315_0x82c9;(function(_0x1cc56e,_0x2f93f4){const _0xc676ec=a315_0x82c9,_0xec4b84=_0x1cc56e();while(!![]){try{const _0x21f067=-parseInt(_0xc676ec(0xa7))/0x1*(parseInt(_0xc676ec(0x8e))/0x2)+-parseInt(_0xc676ec(0xa4))/0x3+parseInt(_0xc676ec(0xa6))/0x4*(parseInt(_0xc676ec(0x88))/0x5)+-parseInt(_0xc676ec(0x9a))/0x6+parseInt(_0xc676ec(0xa9))/0x7+-parseInt(_0xc676ec(0x85))/0x8*(-parseInt(_0xc676ec(0xad))/0x9)+parseInt(_0xc676ec(0x9d))/0xa*(parseInt(_0xc676ec(0x80))/0xb);if(_0x21f067===_0x2f93f4)break;else _0xec4b84['push'](_0xec4b84['shift']());}catch(_0x3c6fe3){_0xec4b84['push'](_0xec4b84['shift']());}}}(a315_0x4938,0xe0b30));function a315_0x4938(){const _0x50523c=['IN_PROGRESS','10yotVFi','FsUtils','defineProperty','../../../constants/job','COMPLETED','writeFile','10xTOEyf','search','FAILED','utf-8','fs/promises','default','../enums/logger.enums','__esModule','error','__importDefault','(((.+)+)+)+$','update','9528078vmVAWU','path','join','2704340GWTEzA','readFile','isExistsPath','then','parse','warnings','Job\x20not\x20found.','3448578KjgQTb','create','3467548XvlKsF','146935DsibIV','JobStatus','1466010uNvrFn','statePath','setInProgress','completedDate','5598ukDxda','addWarning','getJobStatePath','init','createdDate','stringify','getTime','apply','setError','toString','55aAxqvv','status','setCompleted','jobState','@flosum/utils','14112WQuaBk','JOB_LOG_STATE_FILENAME'];a315_0x4938=function(){return _0x50523c;};return a315_0x4938();}function a315_0x82c9(_0x56669f,_0x35f01f){const _0x4296c7=a315_0x4938();return a315_0x82c9=function(_0xb4549f,_0x4ba449){_0xb4549f=_0xb4549f-0x78;let _0x4938a4=_0x4296c7[_0xb4549f];return _0x4938a4;},a315_0x82c9(_0x56669f,_0x35f01f);}const a315_0x4ba449=(function(){let _0x853282=!![];return function(_0x52ab35,_0xf4e67b){const _0x2f9455=_0x853282?function(){const _0x3e0f91=a315_0x82c9;if(_0xf4e67b){const _0x598f26=_0xf4e67b[_0x3e0f91(0x7d)](_0x52ab35,arguments);return _0xf4e67b=null,_0x598f26;}}:function(){};return _0x853282=![],_0x2f9455;};}()),a315_0xb4549f=a315_0x4ba449(this,function(){const _0x560bb2=a315_0x82c9;return a315_0xb4549f['toString']()[_0x560bb2(0x8f)](_0x560bb2(0x98))[_0x560bb2(0x7f)]()['constructor'](a315_0xb4549f)[_0x560bb2(0x8f)](_0x560bb2(0x98));});a315_0xb4549f();'use strict';var __importDefault=this&&this[a315_0x10a71b(0x97)]||function(_0x12da53){const _0x5a68cc=a315_0x10a71b;return _0x12da53&&_0x12da53[_0x5a68cc(0x95)]?_0x12da53:{'default':_0x12da53};};Object[a315_0x10a71b(0x8a)](exports,a315_0x10a71b(0x95),{'value':!![]});const logger_enums_1=require(a315_0x10a71b(0x94)),path_1=__importDefault(require(a315_0x10a71b(0x9b))),promises_1=require(a315_0x10a71b(0x92)),utils_1=require(a315_0x10a71b(0x84)),job_1=require(a315_0x10a71b(0x8b));class StateManager{constructor(_0x10cacc){const _0x46ac70=a315_0x10a71b;this[_0x46ac70(0xaa)]=StateManager[_0x46ac70(0x78)](_0x10cacc);}static[a315_0x10a71b(0x78)](_0x177c73){const _0x598d7c=a315_0x10a71b;return path_1[_0x598d7c(0x93)][_0x598d7c(0x9c)](_0x177c73,job_1[_0x598d7c(0x86)]);}static async[a315_0x10a71b(0xa5)](_0x118b6a,_0xf4b4e4){const _0x221520=a315_0x10a71b,_0x18385c=StateManager[_0x221520(0x78)](_0x118b6a),_0x1efc6b={'id':_0xf4b4e4,'status':logger_enums_1[_0x221520(0xa8)]['QUEUED'],'createdDate':null,'completedDate':null,'error':null,'warnings':[]};await(0x0,promises_1[_0x221520(0x8d)])(_0x18385c,JSON[_0x221520(0x7b)](_0x1efc6b));}static async['getJobState'](_0x336a72){const _0x16da3a=a315_0x10a71b,_0x2c0203=StateManager[_0x16da3a(0x78)](_0x336a72);if(await utils_1[_0x16da3a(0x89)][_0x16da3a(0x9f)](_0x2c0203))return(0x0,promises_1[_0x16da3a(0x9e)])(_0x2c0203,_0x16da3a(0x91))[_0x16da3a(0xa0)](JSON[_0x16da3a(0xa1)]);throw new Error(_0x16da3a(0xa3));}async[a315_0x10a71b(0x99)](){const _0x253b42=a315_0x10a71b;await(0x0,promises_1[_0x253b42(0x8d)])(this['statePath'],JSON[_0x253b42(0x7b)](this[_0x253b42(0x83)]));}async[a315_0x10a71b(0x79)](){const _0x1bec35=a315_0x10a71b;return this[_0x1bec35(0x83)]=await(0x0,promises_1[_0x1bec35(0x9e)])(this[_0x1bec35(0xaa)],_0x1bec35(0x91))[_0x1bec35(0xa0)](JSON[_0x1bec35(0xa1)]),this;}async[a315_0x10a71b(0xab)](){const _0x221547=a315_0x10a71b;this[_0x221547(0x83)][_0x221547(0x81)]=logger_enums_1[_0x221547(0xa8)][_0x221547(0x87)],this[_0x221547(0x83)][_0x221547(0x7a)]=new Date()['getTime'](),await this['update']();}async[a315_0x10a71b(0x82)](){const _0x2bfb20=a315_0x10a71b;this[_0x2bfb20(0x83)][_0x2bfb20(0x81)]=logger_enums_1['JobStatus'][_0x2bfb20(0x8c)],this[_0x2bfb20(0x83)][_0x2bfb20(0xac)]=new Date()[_0x2bfb20(0x7c)](),await this[_0x2bfb20(0x99)]();}async[a315_0x10a71b(0x7e)]({message:_0x47be4e}){const _0x440255=a315_0x10a71b;this[_0x440255(0x83)]['status']=logger_enums_1[_0x440255(0xa8)][_0x440255(0x90)],this[_0x440255(0x83)][_0x440255(0xac)]=new Date()[_0x440255(0x7c)](),this[_0x440255(0x83)][_0x440255(0x96)]=_0x47be4e,await this[_0x440255(0x99)]();}[a315_0x10a71b(0xae)](_0x404a0a){const _0x5ad22e=a315_0x10a71b;return this[_0x5ad22e(0x83)][_0x5ad22e(0xa2)]['push'](_0x404a0a),this[_0x5ad22e(0x99)]();}}exports['default']=StateManager;