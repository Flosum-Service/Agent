const a328_0x50a37e=a328_0x559d;(function(_0x8fee9a,_0x386d3c){const _0x1981b7=a328_0x559d,_0x1dcac3=_0x8fee9a();while(!![]){try{const _0xec87a1=-parseInt(_0x1981b7(0x1c6))/0x1+parseInt(_0x1981b7(0x1d9))/0x2+parseInt(_0x1981b7(0x1e3))/0x3+-parseInt(_0x1981b7(0x1b7))/0x4+-parseInt(_0x1981b7(0x1d5))/0x5+parseInt(_0x1981b7(0x1c5))/0x6*(-parseInt(_0x1981b7(0x1d8))/0x7)+parseInt(_0x1981b7(0x1bc))/0x8;if(_0xec87a1===_0x386d3c)break;else _0x1dcac3['push'](_0x1dcac3['shift']());}catch(_0x3b45f3){_0x1dcac3['push'](_0x1dcac3['shift']());}}}(a328_0x144d,0x7b1fa));function a328_0x144d(){const _0xcb9c7d=['(((.+)+)+)+$','setInProgress','getTime','JobStatus','warnings','COMPLETED','fs/promises','readFile','parse','isExistsPath','Job\x20not\x20found.','writeFile','apply','default','712695gGsHOA','completedDate','statePath','2050853IWmnIh','1311936tPFiNL','update','then','createdDate','status','setCompleted','FsUtils','jobState','error','IN_PROGRESS','1729821zmrlyQ','utf-8','create','stringify','../../../constants/job','3596020uSndoY','setError','@flosum/utils','JOB_LOG_STATE_FILENAME','toString','8752640AsuMPI','getJobStatePath','push','path','__esModule','search','QUEUED','../enums/logger.enums','join','6GLURey','487818ExFaCa'];a328_0x144d=function(){return _0xcb9c7d;};return a328_0x144d();}const a328_0x2e82f5=(function(){let _0x3bfb95=!![];return function(_0x283726,_0x1cfbb1){const _0x13012f=_0x3bfb95?function(){const _0x25032f=a328_0x559d;if(_0x1cfbb1){const _0x346665=_0x1cfbb1[_0x25032f(0x1d3)](_0x283726,arguments);return _0x1cfbb1=null,_0x346665;}}:function(){};return _0x3bfb95=![],_0x13012f;};}()),a328_0x5e409b=a328_0x2e82f5(this,function(){const _0x1c70ce=a328_0x559d;return a328_0x5e409b[_0x1c70ce(0x1bb)]()[_0x1c70ce(0x1c1)]('(((.+)+)+)+$')[_0x1c70ce(0x1bb)]()['constructor'](a328_0x5e409b)['search'](_0x1c70ce(0x1c7));});a328_0x5e409b();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x41b0ca){const _0x1e5704=a328_0x559d;return _0x41b0ca&&_0x41b0ca[_0x1e5704(0x1c0)]?_0x41b0ca:{'default':_0x41b0ca};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const logger_enums_1=require(a328_0x50a37e(0x1c3)),path_1=__importDefault(require(a328_0x50a37e(0x1bf))),promises_1=require(a328_0x50a37e(0x1cd)),utils_1=require(a328_0x50a37e(0x1b9)),job_1=require(a328_0x50a37e(0x1b6));class StateManager{constructor(_0x2efd89){const _0x2d2fc3=a328_0x50a37e;this[_0x2d2fc3(0x1d7)]=StateManager['getJobStatePath'](_0x2efd89);}static[a328_0x50a37e(0x1bd)](_0x18896f){const _0x4c1f81=a328_0x50a37e;return path_1[_0x4c1f81(0x1d4)][_0x4c1f81(0x1c4)](_0x18896f,job_1[_0x4c1f81(0x1ba)]);}static async[a328_0x50a37e(0x1b4)](_0x3a662e,_0x39a1ba){const _0x50d9d2=a328_0x50a37e,_0x288058=StateManager[_0x50d9d2(0x1bd)](_0x3a662e),_0x53320a={'id':_0x39a1ba,'status':logger_enums_1['JobStatus'][_0x50d9d2(0x1c2)],'createdDate':null,'completedDate':null,'error':null,'warnings':[]};await(0x0,promises_1[_0x50d9d2(0x1d2)])(_0x288058,JSON[_0x50d9d2(0x1b5)](_0x53320a));}static async['getJobState'](_0x414226){const _0x495c45=a328_0x50a37e,_0x33b0bd=StateManager[_0x495c45(0x1bd)](_0x414226);if(await utils_1[_0x495c45(0x1df)][_0x495c45(0x1d0)](_0x33b0bd))return(0x0,promises_1['readFile'])(_0x33b0bd,_0x495c45(0x1e4))['then'](JSON[_0x495c45(0x1cf)]);throw new Error(_0x495c45(0x1d1));}async[a328_0x50a37e(0x1da)](){const _0x23bd95=a328_0x50a37e;await(0x0,promises_1[_0x23bd95(0x1d2)])(this[_0x23bd95(0x1d7)],JSON[_0x23bd95(0x1b5)](this[_0x23bd95(0x1e0)]));}async['init'](){const _0x465498=a328_0x50a37e;return this[_0x465498(0x1e0)]=await(0x0,promises_1[_0x465498(0x1ce)])(this[_0x465498(0x1d7)],'utf-8')[_0x465498(0x1db)](JSON[_0x465498(0x1cf)]),this;}async[a328_0x50a37e(0x1c8)](){const _0x2f4de5=a328_0x50a37e;this[_0x2f4de5(0x1e0)][_0x2f4de5(0x1dd)]=logger_enums_1['JobStatus'][_0x2f4de5(0x1e2)],this[_0x2f4de5(0x1e0)][_0x2f4de5(0x1dc)]=new Date()['getTime'](),await this['update']();}async[a328_0x50a37e(0x1de)](){const _0x2ed2e8=a328_0x50a37e;this['jobState'][_0x2ed2e8(0x1dd)]=logger_enums_1['JobStatus'][_0x2ed2e8(0x1cc)],this['jobState'][_0x2ed2e8(0x1d6)]=new Date()['getTime'](),await this['update']();}async[a328_0x50a37e(0x1b8)]({message:_0x2eef66}){const _0x2e314c=a328_0x50a37e;this[_0x2e314c(0x1e0)][_0x2e314c(0x1dd)]=logger_enums_1[_0x2e314c(0x1ca)]['FAILED'],this[_0x2e314c(0x1e0)][_0x2e314c(0x1d6)]=new Date()[_0x2e314c(0x1c9)](),this[_0x2e314c(0x1e0)][_0x2e314c(0x1e1)]=_0x2eef66,await this[_0x2e314c(0x1da)]();}['addWarning'](_0x2c9689){const _0x31923d=a328_0x50a37e;return this[_0x31923d(0x1e0)][_0x31923d(0x1cb)][_0x31923d(0x1be)](_0x2c9689),this[_0x31923d(0x1da)]();}}function a328_0x559d(_0x4139fc,_0x19c601){const _0x4c4da2=a328_0x144d();return a328_0x559d=function(_0x5e409b,_0x2e82f5){_0x5e409b=_0x5e409b-0x1b4;let _0x144d5f=_0x4c4da2[_0x5e409b];return _0x144d5f;},a328_0x559d(_0x4139fc,_0x19c601);}exports[a328_0x50a37e(0x1d4)]=StateManager;