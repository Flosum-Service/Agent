const a155_0xd02fc3=a155_0x3435;function a155_0x3435(_0x2928f6,_0x2cd931){const _0x101ad2=a155_0x3a7c();return a155_0x3435=function(_0xdcbcea,_0x5734d3){_0xdcbcea=_0xdcbcea-0x18e;let _0x3a7c0e=_0x101ad2[_0xdcbcea];return _0x3a7c0e;},a155_0x3435(_0x2928f6,_0x2cd931);}(function(_0x19aad8,_0x1c7d1){const _0x4d63c1=a155_0x3435,_0x30c1ba=_0x19aad8();while(!![]){try{const _0x2becc6=parseInt(_0x4d63c1(0x1a2))/0x1+parseInt(_0x4d63c1(0x1a1))/0x2*(-parseInt(_0x4d63c1(0x18f))/0x3)+parseInt(_0x4d63c1(0x1b1))/0x4+-parseInt(_0x4d63c1(0x193))/0x5+-parseInt(_0x4d63c1(0x196))/0x6*(parseInt(_0x4d63c1(0x1a5))/0x7)+parseInt(_0x4d63c1(0x190))/0x8*(-parseInt(_0x4d63c1(0x19d))/0x9)+parseInt(_0x4d63c1(0x1a3))/0xa;if(_0x2becc6===_0x1c7d1)break;else _0x30c1ba['push'](_0x30c1ba['shift']());}catch(_0x17572f){_0x30c1ba['push'](_0x30c1ba['shift']());}}}(a155_0x3a7c,0x262ac));const a155_0x5734d3=(function(){let _0x4c9b86=!![];return function(_0x3031dd,_0x1605f0){const _0x425aee=_0x4c9b86?function(){const _0x453013=a155_0x3435;if(_0x1605f0){const _0x4a200b=_0x1605f0[_0x453013(0x19b)](_0x3031dd,arguments);return _0x1605f0=null,_0x4a200b;}}:function(){};return _0x4c9b86=![],_0x425aee;};}()),a155_0xdcbcea=a155_0x5734d3(this,function(){const _0x97c007=a155_0x3435;return a155_0xdcbcea[_0x97c007(0x1aa)]()[_0x97c007(0x197)](_0x97c007(0x1b3))['toString']()[_0x97c007(0x19f)](a155_0xdcbcea)[_0x97c007(0x197)](_0x97c007(0x1b3));});a155_0xdcbcea();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4d9740){const _0x31d5cb=a155_0x3435;return _0x4d9740&&_0x4d9740[_0x31d5cb(0x1ae)]?_0x4d9740:{'default':_0x4d9740};};Object['defineProperty'](exports,'__esModule',{'value':!![]});const fs_1=require('fs');require(a155_0xd02fc3(0x19c));const typedi_1=__importDefault(require('typedi'));require(a155_0xd02fc3(0x1af));const flosum_commit_job_1=require('../../git/devops/jobs/flosum-commit.job'),childs_utils_1=require('./childs.utils'),salesforce_credentials_service_1=require(a155_0xd02fc3(0x1a8)),providers_tokens_1=require(a155_0xd02fc3(0x194)),salesforce_logger_v3_service_1=require(a155_0xd02fc3(0x1a9)),prepare_to_job_1=require(a155_0xd02fc3(0x1b0)),socketPath=(0x0,childs_utils_1['getSocketPath'])();if(!socketPath)throw new Error(a155_0xd02fc3(0x192));const message=(0x0,fs_1[a155_0xd02fc3(0x19e)])(socketPath,{'encoding':'utf-8'}),{data}=JSON['parse'](message),execute=async _0x54f3a1=>{const _0x5af01b=a155_0xd02fc3;salesforce_credentials_service_1[_0x5af01b(0x19a)][_0x5af01b(0x1a0)](),typedi_1[_0x5af01b(0x1ac)][_0x5af01b(0x191)](providers_tokens_1[_0x5af01b(0x198)][_0x5af01b(0x195)],new salesforce_logger_v3_service_1['SalesforceLogger3'](_0x54f3a1[_0x5af01b(0x1b2)])),await(0x0,prepare_to_job_1['prepareToJob'])(_0x54f3a1['connectionId']);const _0x28c318=typedi_1['default'][_0x5af01b(0x18e)](flosum_commit_job_1[_0x5af01b(0x1a6)]);await _0x28c318[_0x5af01b(0x199)](_0x54f3a1[_0x5af01b(0x1a7)]);};function a155_0x3a7c(){const _0x4c1b47=['get','226251wthfkH','720152JwaDOK','set','Unresolved\x20socket\x20path','1353620ndcaAS','../providers/providers.tokens','logger','6PoWOPi','search','Tokens','run','SalesforceCredentialsService','apply','reflect-metadata','18yumMba','readFileSync','constructor','setCredentials','2cAUsoO','201486lUCYnI','3100060hyOkIG','exit','478163OeIzjD','FlosumCommitJob','commit','../salesforce/services/salesforce.credentials-service','../salesforce/services/salesforce-logger-v3.service','toString','then','default','catch','__esModule','../../../common/env','./prepare-to-job','957312cRuDKW','loggerId','(((.+)+)+)+$'];a155_0x3a7c=function(){return _0x4c1b47;};return a155_0x3a7c();}execute(data)[a155_0xd02fc3(0x1ab)](()=>process[a155_0xd02fc3(0x1a4)](0x0))[a155_0xd02fc3(0x1ad)](()=>process['exit'](0x0));