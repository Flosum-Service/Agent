const a153_0x339480=a153_0x4c35;(function(_0x16e285,_0x8a4057){const _0x1ba303=a153_0x4c35,_0x35890a=_0x16e285();while(!![]){try{const _0x420a46=-parseInt(_0x1ba303(0x1c2))/0x1+parseInt(_0x1ba303(0x1ca))/0x2+-parseInt(_0x1ba303(0x1af))/0x3+-parseInt(_0x1ba303(0x1b1))/0x4+parseInt(_0x1ba303(0x1bc))/0x5+parseInt(_0x1ba303(0x1ba))/0x6+parseInt(_0x1ba303(0x1c6))/0x7*(parseInt(_0x1ba303(0x1b7))/0x8);if(_0x420a46===_0x8a4057)break;else _0x35890a['push'](_0x35890a['shift']());}catch(_0x5bf635){_0x35890a['push'](_0x35890a['shift']());}}}(a153_0x25b3,0x1fddb));const a153_0x19cdbe=(function(){let _0x269e65=!![];return function(_0x1e2f98,_0x42899c){const _0x4d70b0=_0x269e65?function(){const _0x2d68bb=a153_0x4c35;if(_0x42899c){const _0x46b237=_0x42899c[_0x2d68bb(0x1b9)](_0x1e2f98,arguments);return _0x42899c=null,_0x46b237;}}:function(){};return _0x269e65=![],_0x4d70b0;};}()),a153_0x23e2c5=a153_0x19cdbe(this,function(){const _0x536cc1=a153_0x4c35;return a153_0x23e2c5[_0x536cc1(0x1b2)]()[_0x536cc1(0x1d0)](_0x536cc1(0x1c9))[_0x536cc1(0x1b2)]()[_0x536cc1(0x1b6)](a153_0x23e2c5)[_0x536cc1(0x1d0)]('(((.+)+)+)+$');});function a153_0x25b3(){const _0x349944=['SalesforceCredentialsService','reflect-metadata','../../git/devops/jobs/flosum-commit.job','156495JhUyAi','prepareToJob','702908JYcbKZ','toString','__esModule','default','get','constructor','408tKCNAd','../salesforce/services/salesforce.credentials-service','apply','668574gqSfHm','../../../common/env','519880wejASP','loggerId','connectionId','typedi','defineProperty','parse','144198NirJue','SalesforceLogger3','getSocketPath','set','23149MIoXzH','FlosumCommitJob','./prepare-to-job','(((.+)+)+)+$','237102gGgjOc','run','utf-8','Unresolved\x20socket\x20path','catch','exit','search','then'];a153_0x25b3=function(){return _0x349944;};return a153_0x25b3();}a153_0x23e2c5();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x1a771b){const _0x328fe7=a153_0x4c35;return _0x1a771b&&_0x1a771b[_0x328fe7(0x1b3)]?_0x1a771b:{'default':_0x1a771b};};Object[a153_0x339480(0x1c0)](exports,a153_0x339480(0x1b3),{'value':!![]});const fs_1=require('fs');require(a153_0x339480(0x1ad));const typedi_1=__importDefault(require(a153_0x339480(0x1bf)));require(a153_0x339480(0x1bb));const flosum_commit_job_1=require(a153_0x339480(0x1ae)),childs_utils_1=require('./childs.utils'),salesforce_credentials_service_1=require(a153_0x339480(0x1b8)),providers_tokens_1=require('../providers/providers.tokens'),salesforce_logger_v3_service_1=require('../salesforce/services/salesforce-logger-v3.service'),prepare_to_job_1=require(a153_0x339480(0x1c8)),socketPath=(0x0,childs_utils_1[a153_0x339480(0x1c4)])();if(!socketPath)throw new Error(a153_0x339480(0x1cd));function a153_0x4c35(_0x18959f,_0x24d76a){const _0x2ede1a=a153_0x25b3();return a153_0x4c35=function(_0x23e2c5,_0x19cdbe){_0x23e2c5=_0x23e2c5-0x1ac;let _0x25b3b5=_0x2ede1a[_0x23e2c5];return _0x25b3b5;},a153_0x4c35(_0x18959f,_0x24d76a);}const message=(0x0,fs_1['readFileSync'])(socketPath,{'encoding':a153_0x339480(0x1cc)}),{data}=JSON[a153_0x339480(0x1c1)](message),execute=async _0x495531=>{const _0x39f1f7=a153_0x339480;salesforce_credentials_service_1[_0x39f1f7(0x1ac)]['setCredentials'](),typedi_1[_0x39f1f7(0x1b4)][_0x39f1f7(0x1c5)](providers_tokens_1['Tokens']['logger'],new salesforce_logger_v3_service_1[(_0x39f1f7(0x1c3))](_0x495531[_0x39f1f7(0x1bd)])),await(0x0,prepare_to_job_1[_0x39f1f7(0x1b0)])(_0x495531[_0x39f1f7(0x1be)]);const _0x224fa7=typedi_1[_0x39f1f7(0x1b4)][_0x39f1f7(0x1b5)](flosum_commit_job_1[_0x39f1f7(0x1c7)]);await _0x224fa7[_0x39f1f7(0x1cb)](_0x495531['commit']);};execute(data)[a153_0x339480(0x1d1)](()=>process[a153_0x339480(0x1cf)](0x0))[a153_0x339480(0x1ce)](()=>process[a153_0x339480(0x1cf)](0x0));