const a288_0x5c1e63=a288_0x3f8e;(function(_0x17523c,_0x22a3e8){const _0x4caf16=a288_0x3f8e,_0x12bc6e=_0x17523c();while(!![]){try{const _0x4e6869=-parseInt(_0x4caf16(0x1f7))/0x1+-parseInt(_0x4caf16(0x205))/0x2*(parseInt(_0x4caf16(0x1e7))/0x3)+-parseInt(_0x4caf16(0x20a))/0x4+-parseInt(_0x4caf16(0x1ea))/0x5*(parseInt(_0x4caf16(0x1d4))/0x6)+parseInt(_0x4caf16(0x1eb))/0x7*(-parseInt(_0x4caf16(0x1f9))/0x8)+-parseInt(_0x4caf16(0x1de))/0x9*(parseInt(_0x4caf16(0x1f5))/0xa)+parseInt(_0x4caf16(0x207))/0xb*(parseInt(_0x4caf16(0x1fc))/0xc);if(_0x4e6869===_0x22a3e8)break;else _0x12bc6e['push'](_0x12bc6e['shift']());}catch(_0x2ae216){_0x12bc6e['push'](_0x12bc6e['shift']());}}}(a288_0x5f46,0xc3bfd));const a288_0x64ec42=(function(){let _0x5379e2=!![];return function(_0x53a891,_0x11da1b){const _0x53a02b=_0x5379e2?function(){if(_0x11da1b){const _0x454611=_0x11da1b['apply'](_0x53a891,arguments);return _0x11da1b=null,_0x454611;}}:function(){};return _0x5379e2=![],_0x53a02b;};}()),a288_0x2116b5=a288_0x64ec42(this,function(){const _0x380ae9=a288_0x3f8e;return a288_0x2116b5['toString']()[_0x380ae9(0x202)](_0x380ae9(0x204))['toString']()[_0x380ae9(0x1d5)](a288_0x2116b5)['search'](_0x380ae9(0x204));});a288_0x2116b5();'use strict';var __importDefault=this&&this[a288_0x5c1e63(0x1e6)]||function(_0x3262cf){const _0x985e5c=a288_0x5c1e63;return _0x3262cf&&_0x3262cf[_0x985e5c(0x1fd)]?_0x3262cf:{'default':_0x3262cf};};Object[a288_0x5c1e63(0x1d9)](exports,a288_0x5c1e63(0x1fd),{'value':!![]});const salesforce_1=require(a288_0x5c1e63(0x200)),manifest_manger_1=__importDefault(require(a288_0x5c1e63(0x1e3))),path_1=__importDefault(require(a288_0x5c1e63(0x1ee))),promises_1=require('fs/promises'),fs_utils_1=require(a288_0x5c1e63(0x1db)),object_sizeof_1=__importDefault(require(a288_0x5c1e63(0x1e4))),retrieve_factory_1=__importDefault(require(a288_0x5c1e63(0x1f1))),auth_manager_1=require('../../../shared/managers/auth.manager'),constants_1=require(a288_0x5c1e63(0x1fb)),shortid_1=__importDefault(require(a288_0x5c1e63(0x1f8))),jszip_1=__importDefault(require(a288_0x5c1e63(0x1da)));function a288_0x3f8e(_0x1b6153,_0xad7ad4){const _0x1879b8=a288_0x5f46();return a288_0x3f8e=function(_0x2116b5,_0x64ec42){_0x2116b5=_0x2116b5-0x1d4;let _0x5f4624=_0x1879b8[_0x2116b5];return _0x5f4624;},a288_0x3f8e(_0x1b6153,_0xad7ad4);}function a288_0x5f46(){const _0xcd582c=['../../../shared/utils/fs.utils','logger','retrieveResultsPath','364923rDYsYj','items','stringify','jobStorePath','.json','./manifest-manger','object-sizeof','Item\x20\x27','__importDefault','45qTlKPy','default','components','122350aaNmay','7tbNMzx','push','create','path','length','execute','./retrieve-factory','AxiosInstanceUtils','RETRIEVE_RESULTS_IDS_FILENAME','makeDir','20slPkHq','stateManager','183661MeUKVu','shortid','6338512sUpggb','\x27\x20size\x20\x27','../../constants','63932208QGHFRY','__esModule','DEFLATE','base64','@flosum/salesforce','file','search','init','(((.+)+)+)+$','152820LFIcpF','generateAsync','11cnGJQq','join','metadataFolder','5962784UOfswl','204ucNLrj','constructor','writeChunk','AuthManager','writeFile','defineProperty','jszip'];a288_0x5f46=function(){return _0xcd582c;};return a288_0x5f46();}class RetrieveMetadata{constructor(_0x42f72e,_0x1b753d,_0x2566bf){const _0x5b35c3=a288_0x5c1e63;this[_0x5b35c3(0x1e1)]=_0x42f72e,this[_0x5b35c3(0x1dc)]=_0x1b753d,this[_0x5b35c3(0x1f6)]=_0x2566bf,this['metadataFolder']=path_1[_0x5b35c3(0x1e8)][_0x5b35c3(0x208)](this['jobStorePath'],constants_1['RETRIEVE_RESULT_FOLDER_NAME']),this[_0x5b35c3(0x1dd)]=path_1[_0x5b35c3(0x1e8)][_0x5b35c3(0x208)](this[_0x5b35c3(0x1e1)],constants_1[_0x5b35c3(0x1f3)]);}async[a288_0x5c1e63(0x1d6)](_0x4c5f26){const _0x1ba934=a288_0x5c1e63,_0x430321=(0x0,shortid_1[_0x1ba934(0x1e8)])();return await(0x0,promises_1[_0x1ba934(0x1d8)])(path_1[_0x1ba934(0x1e8)][_0x1ba934(0x208)](this[_0x1ba934(0x209)],_0x430321+_0x1ba934(0x1e2)),JSON[_0x1ba934(0x1e0)](_0x4c5f26)),_0x430321;}async[a288_0x5c1e63(0x1f0)](){const _0x1f26b6=a288_0x5c1e63,{credentials:_0x347bce,declarativeFilter:_0x180461,metadataTypes:_0x18b49d,maxChunkSize:_0x328889,maxChunkItems:_0x5f1fe5,apiVersion:_0x2a4920}=await new manifest_manger_1[(_0x1f26b6(0x1e8))](this['jobStorePath'])[_0x1f26b6(0x203)](),_0x2a39bc=await salesforce_1[_0x1f26b6(0x1f2)][_0x1f26b6(0x1ed)](new auth_manager_1[(_0x1f26b6(0x1d7))](_0x347bce),[],{'maxContentLength':Infinity,'maxBodyLength':Infinity}),_0x430120=await retrieve_factory_1['default'][_0x1f26b6(0x1ed)](_0x2a39bc,this[_0x1f26b6(0x1dc)],_0x180461,_0x18b49d,_0x2a4920)['execute']();await(0x0,fs_utils_1[_0x1f26b6(0x1f4)])(this[_0x1f26b6(0x209)]);let _0x2d7c9e=[];const _0x3269ab=[];let _0x202728=0x0;for(const _0x42022b in _0x430120[_0x1f26b6(0x1df)]){for(const {listMetadataItem:_0x1c3ab5,files:_0x261d66}of _0x430120[_0x1f26b6(0x1df)][_0x42022b][_0x1f26b6(0x1e9)]){const _0x4ad651=new jszip_1[(_0x1f26b6(0x1e8))]();for(const _0x5d6f1a in _0x261d66){await _0x4ad651[_0x1f26b6(0x201)](_0x5d6f1a,_0x261d66[_0x5d6f1a]);}const _0x548401=await _0x4ad651[_0x1f26b6(0x206)]({'type':_0x1f26b6(0x1ff),'compression':_0x1f26b6(0x1fe),'compressionOptions':{'level':0x9}}),_0x28e893={..._0x1c3ab5,'zip':_0x548401},_0x58971b=(0x0,object_sizeof_1[_0x1f26b6(0x1e8)])(_0x28e893);if(_0x58971b>_0x328889){await this['stateManager']['addWarning'](_0x1f26b6(0x1e5)+_0x1c3ab5['fileName']+_0x1f26b6(0x1fa)+_0x58971b+'\x27\x20exceed\x20limit\x20\x27'+_0x328889+'\x27');continue;}if(_0x202728+_0x58971b>_0x328889||_0x2d7c9e[_0x1f26b6(0x1ef)]>=_0x5f1fe5){const _0x522e4=await this[_0x1f26b6(0x1d6)](_0x2d7c9e);_0x3269ab[_0x1f26b6(0x1ec)](_0x522e4),_0x202728=0x0,_0x2d7c9e=[];}_0x2d7c9e[_0x1f26b6(0x1ec)](_0x28e893),_0x202728+=_0x58971b;}}if(_0x2d7c9e[_0x1f26b6(0x1ef)]){const _0x46f912=await this[_0x1f26b6(0x1d6)](_0x2d7c9e);_0x3269ab[_0x1f26b6(0x1ec)](_0x46f912);}await(0x0,promises_1[_0x1f26b6(0x1d8)])(this['retrieveResultsPath'],JSON[_0x1f26b6(0x1e0)](_0x3269ab));}}exports[a288_0x5c1e63(0x1e8)]=RetrieveMetadata;