function a59_0x46d5(){const _0xaa2cd8=['__esModule','2253630RXpvSp','6viKbjR','166434jgPKwI','constructor','WARNING','apply','warning','../../../../configs/path','default','JOB_LOG_DETAILS_FILENAME','../../constants','appendFile','../../../shared/utils/csv.utils','log','catch','toString','20AulOso','(((.+)+)+)+$','search','initMessage','systemLogger','join','dataPath','../../../../constants/job','217kjTmIM','1994508ZmHEQy','ERROR','appendToLog','3261078EjnPtv','190106pzGghc','path','getTime','logPath','header','error','stringify','defineProperty','2609568DMDOQs','2199264XpakZT'];a59_0x46d5=function(){return _0xaa2cd8;};return a59_0x46d5();}const a59_0x44dc53=a59_0x2d1b;(function(_0x4fc201,_0x4ffca2){const _0x2f2e4c=a59_0x2d1b,_0x548328=_0x4fc201();while(!![]){try{const _0x5ea86a=-parseInt(_0x2f2e4c(0x1d8))/0x1*(-parseInt(_0x2f2e4c(0x1f4))/0x2)+-parseInt(_0x2f2e4c(0x1f0))/0x3+parseInt(_0x2f2e4c(0x1d5))/0x4+-parseInt(_0x2f2e4c(0x1d7))/0x5+-parseInt(_0x2f2e4c(0x1d9))/0x6*(-parseInt(_0x2f2e4c(0x1ef))/0x7)+parseInt(_0x2f2e4c(0x1d4))/0x8+parseInt(_0x2f2e4c(0x1f3))/0x9*(-parseInt(_0x2f2e4c(0x1e7))/0xa);if(_0x5ea86a===_0x4ffca2)break;else _0x548328['push'](_0x548328['shift']());}catch(_0x5b0af1){_0x548328['push'](_0x548328['shift']());}}}(a59_0x46d5,0x71c49));const a59_0x2e093a=(function(){let _0x4f86b5=!![];return function(_0x301ecd,_0x2822a1){const _0x18d354=_0x4f86b5?function(){const _0x3f8066=a59_0x2d1b;if(_0x2822a1){const _0x2689c5=_0x2822a1[_0x3f8066(0x1dc)](_0x301ecd,arguments);return _0x2822a1=null,_0x2689c5;}}:function(){};return _0x4f86b5=![],_0x18d354;};}()),a59_0x56273b=a59_0x2e093a(this,function(){const _0x4ccf72=a59_0x2d1b;return a59_0x56273b[_0x4ccf72(0x1e6)]()[_0x4ccf72(0x1e9)](_0x4ccf72(0x1e8))['toString']()[_0x4ccf72(0x1da)](a59_0x56273b)['search']('(((.+)+)+)+$');});a59_0x56273b();'use strict';function a59_0x2d1b(_0x460a59,_0x45124c){const _0x1341fc=a59_0x46d5();return a59_0x2d1b=function(_0x56273b,_0x2e093a){_0x56273b=_0x56273b-0x1d0;let _0x46d51d=_0x1341fc[_0x56273b];return _0x46d51d;},a59_0x2d1b(_0x460a59,_0x45124c);}var __importDefault=this&&this['__importDefault']||function(_0x5c25da){const _0x211f1d=a59_0x2d1b;return _0x5c25da&&_0x5c25da[_0x211f1d(0x1d6)]?_0x5c25da:{'default':_0x5c25da};};Object[a59_0x44dc53(0x1d3)](exports,a59_0x44dc53(0x1d6),{'value':!![]});const promises_1=require('fs/promises'),job_1=require(a59_0x44dc53(0x1ee)),constants_1=require(a59_0x44dc53(0x1e1)),path_1=require(a59_0x44dc53(0x1de)),path_2=__importDefault(require(a59_0x44dc53(0x1f5))),csv_utils_1=__importDefault(require(a59_0x44dc53(0x1e3)));class Logger{constructor(_0x43eaa8,_0x568483,_0x33bda7){const _0x506973=a59_0x44dc53;this['systemLogger']=_0x568483,this[_0x506973(0x1ea)]=!![];if(_0x33bda7){this['logPath']=_0x33bda7;return;}this[_0x506973(0x1f7)]=path_2[_0x506973(0x1df)][_0x506973(0x1ec)](path_1[_0x506973(0x1ed)],constants_1['B2C_FOLDER_NAME'],_0x43eaa8,job_1[_0x506973(0x1e0)]);}async[a59_0x44dc53(0x1f2)](_0x48aa81){const _0x526a7e=a59_0x44dc53,_0x16e64d={'header':![]};this[_0x526a7e(0x1ea)]&&(_0x16e64d[_0x526a7e(0x1d0)]=!![],this[_0x526a7e(0x1ea)]=![]);const _0x353947=await csv_utils_1['default'][_0x526a7e(0x1d2)]([_0x48aa81],_0x16e64d);await(0x0,promises_1[_0x526a7e(0x1e2)])(this[_0x526a7e(0x1f7)],_0x353947)[_0x526a7e(0x1e5)](_0x51b823=>this[_0x526a7e(0x1eb)][_0x526a7e(0x1d1)](_0x51b823['message']));}async['log'](_0x577d19){const _0x3fa94d=a59_0x44dc53;this['systemLogger'][_0x3fa94d(0x1e4)](_0x577d19),await this[_0x3fa94d(0x1f2)]({'date':new Date()[_0x3fa94d(0x1f6)](),'type':'INFO','message':_0x577d19});}async[a59_0x44dc53(0x1d1)](_0x1f0281){const _0x126b6c=a59_0x44dc53;this[_0x126b6c(0x1eb)]['error'](_0x1f0281),await this[_0x126b6c(0x1f2)]({'date':new Date()[_0x126b6c(0x1f6)](),'type':_0x126b6c(0x1f1),'message':_0x1f0281});}async[a59_0x44dc53(0x1dd)](_0x4a393b){const _0x5f38f8=a59_0x44dc53;this[_0x5f38f8(0x1eb)][_0x5f38f8(0x1e4)](_0x4a393b),await this[_0x5f38f8(0x1f2)]({'date':new Date()[_0x5f38f8(0x1f6)](),'type':_0x5f38f8(0x1db),'message':_0x4a393b});}}exports[a59_0x44dc53(0x1df)]=Logger;