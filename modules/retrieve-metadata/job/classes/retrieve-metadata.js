function a314_0x2728(){const _0x106f7f=['2383090UoCgCh','writeChunk','68iEKntH','1204TpaSpj','24MEImkE','writeFile','create','generateAsync','40818mCzwRe','\x27\x20size\x20\x27','.json','1416231xqlKBO','execute','22dAhVSE','AxiosInstanceUtils','AuthManager','RETRIEVE_RESULTS_IDS_FILENAME','items','1532546xpXRtH','default','stringify','join','746624cvZjnV','jszip','logger','fs/promises','length','init','DEFLATE','stateManager','\x27\x20exceed\x20limit\x20\x27','toString','apply','file','retrieveResultsPath','__esModule','search','push','addWarning','887630pEBOSO','14982mQqenc','object-sizeof','@flosum/salesforce','makeDir','../../constants','base64','fileName','jobStorePath','(((.+)+)+)+$','shortid','constructor','./retrieve-factory','../../../shared/managers/auth.manager','metadataFolder','__importDefault'];a314_0x2728=function(){return _0x106f7f;};return a314_0x2728();}const a314_0x3c8a8c=a314_0x49c2;(function(_0x27f6b9,_0x38ca95){const _0x41ea64=a314_0x49c2,_0x24b693=_0x27f6b9();while(!![]){try{const _0x4ff3f0=parseInt(_0x41ea64(0x200))/0x1+parseInt(_0x41ea64(0x1fc))/0x2+parseInt(_0x41ea64(0x1f2))/0x3*(-parseInt(_0x41ea64(0x1ec))/0x4)+-parseInt(_0x41ea64(0x211))/0x5+parseInt(_0x41ea64(0x212))/0x6*(-parseInt(_0x41ea64(0x1ed))/0x7)+-parseInt(_0x41ea64(0x1ee))/0x8*(-parseInt(_0x41ea64(0x1f5))/0x9)+parseInt(_0x41ea64(0x1ea))/0xa*(-parseInt(_0x41ea64(0x1f7))/0xb);if(_0x4ff3f0===_0x38ca95)break;else _0x24b693['push'](_0x24b693['shift']());}catch(_0x230074){_0x24b693['push'](_0x24b693['shift']());}}}(a314_0x2728,0xa395c));const a314_0x575c04=(function(){let _0x2454f9=!![];return function(_0x223973,_0x176531){const _0x116a62=_0x2454f9?function(){const _0x544303=a314_0x49c2;if(_0x176531){const _0x35a73f=_0x176531[_0x544303(0x20a)](_0x223973,arguments);return _0x176531=null,_0x35a73f;}}:function(){};return _0x2454f9=![],_0x116a62;};}()),a314_0x4cab7b=a314_0x575c04(this,function(){const _0x5251a1=a314_0x49c2;return a314_0x4cab7b[_0x5251a1(0x209)]()['search'](_0x5251a1(0x1e3))[_0x5251a1(0x209)]()[_0x5251a1(0x1e5)](a314_0x4cab7b)[_0x5251a1(0x20e)](_0x5251a1(0x1e3));});a314_0x4cab7b();'use strict';var __importDefault=this&&this[a314_0x3c8a8c(0x1e9)]||function(_0x3d12e3){const _0x4d5211=a314_0x3c8a8c;return _0x3d12e3&&_0x3d12e3[_0x4d5211(0x20d)]?_0x3d12e3:{'default':_0x3d12e3};};Object['defineProperty'](exports,'__esModule',{'value':!![]});function a314_0x49c2(_0x3a05b1,_0x423199){const _0xe2c02d=a314_0x2728();return a314_0x49c2=function(_0x4cab7b,_0x575c04){_0x4cab7b=_0x4cab7b-0x1e0;let _0x27289d=_0xe2c02d[_0x4cab7b];return _0x27289d;},a314_0x49c2(_0x3a05b1,_0x423199);}const salesforce_1=require(a314_0x3c8a8c(0x214)),manifest_manger_1=__importDefault(require('./manifest-manger')),path_1=__importDefault(require('path')),promises_1=require(a314_0x3c8a8c(0x203)),fs_utils_1=require('../../../shared/utils/fs.utils'),object_sizeof_1=__importDefault(require(a314_0x3c8a8c(0x213))),retrieve_factory_1=__importDefault(require(a314_0x3c8a8c(0x1e6))),auth_manager_1=require(a314_0x3c8a8c(0x1e7)),constants_1=require(a314_0x3c8a8c(0x216)),shortid_1=__importDefault(require(a314_0x3c8a8c(0x1e4))),jszip_1=__importDefault(require(a314_0x3c8a8c(0x201)));class RetrieveMetadata{constructor(_0x15a8fc,_0xd3018e,_0x2c87d3){const _0x10737d=a314_0x3c8a8c;this[_0x10737d(0x1e2)]=_0x15a8fc,this[_0x10737d(0x202)]=_0xd3018e,this['stateManager']=_0x2c87d3,this[_0x10737d(0x1e8)]=path_1[_0x10737d(0x1fd)]['join'](this['jobStorePath'],constants_1['RETRIEVE_RESULT_FOLDER_NAME']),this[_0x10737d(0x20c)]=path_1[_0x10737d(0x1fd)]['join'](this[_0x10737d(0x1e2)],constants_1[_0x10737d(0x1fa)]);}async[a314_0x3c8a8c(0x1eb)](_0x5021ca){const _0x1c7c03=a314_0x3c8a8c,_0x26ef1a=(0x0,shortid_1[_0x1c7c03(0x1fd)])();return await(0x0,promises_1['writeFile'])(path_1[_0x1c7c03(0x1fd)][_0x1c7c03(0x1ff)](this[_0x1c7c03(0x1e8)],_0x26ef1a+_0x1c7c03(0x1f4)),JSON[_0x1c7c03(0x1fe)](_0x5021ca)),_0x26ef1a;}async['execute'](){const _0x57eb9b=a314_0x3c8a8c,{credentials:_0x28b22e,declarativeFilter:_0x41861a,metadataTypes:_0x451b64,maxChunkSize:_0x305e6d,maxChunkItems:_0x10aa20,apiVersion:_0x2a43b9}=await new manifest_manger_1[(_0x57eb9b(0x1fd))](this['jobStorePath'])[_0x57eb9b(0x205)](),_0x1ce394=await salesforce_1[_0x57eb9b(0x1f8)][_0x57eb9b(0x1f0)](new auth_manager_1[(_0x57eb9b(0x1f9))](_0x28b22e),[],{'maxContentLength':Infinity,'maxBodyLength':Infinity}),_0x25ce44=await retrieve_factory_1[_0x57eb9b(0x1fd)][_0x57eb9b(0x1f0)](_0x1ce394,this['logger'],_0x41861a,_0x451b64,_0x2a43b9)[_0x57eb9b(0x1f6)]();await(0x0,fs_utils_1[_0x57eb9b(0x215)])(this[_0x57eb9b(0x1e8)]);let _0x4119f0=[];const _0x31e329=[];let _0x1c6526=0x0;for(const _0x169089 in _0x25ce44[_0x57eb9b(0x1fb)]){for(const {listMetadataItem:_0xd49ca3,files:_0x5be390}of _0x25ce44['items'][_0x169089]['components']){const _0xbe6150=new jszip_1[(_0x57eb9b(0x1fd))]();for(const _0x3a656e in _0x5be390){await _0xbe6150[_0x57eb9b(0x20b)](_0x3a656e,_0x5be390[_0x3a656e]);}const _0xb6bf9a=await _0xbe6150[_0x57eb9b(0x1f1)]({'type':_0x57eb9b(0x1e0),'compression':_0x57eb9b(0x206),'compressionOptions':{'level':0x9}}),_0x434b40={..._0xd49ca3,'zip':_0xb6bf9a},_0x16bcc2=(0x0,object_sizeof_1['default'])(_0x434b40);if(_0x16bcc2>_0x305e6d){await this[_0x57eb9b(0x207)][_0x57eb9b(0x210)]('Item\x20\x27'+_0xd49ca3[_0x57eb9b(0x1e1)]+_0x57eb9b(0x1f3)+_0x16bcc2+_0x57eb9b(0x208)+_0x305e6d+'\x27');continue;}if(_0x1c6526+_0x16bcc2>_0x305e6d||_0x4119f0[_0x57eb9b(0x204)]>=_0x10aa20){const _0x212208=await this['writeChunk'](_0x4119f0);_0x31e329[_0x57eb9b(0x20f)](_0x212208),_0x1c6526=0x0,_0x4119f0=[];}_0x4119f0['push'](_0x434b40),_0x1c6526+=_0x16bcc2;}}if(_0x4119f0[_0x57eb9b(0x204)]){const _0x1a66ea=await this['writeChunk'](_0x4119f0);_0x31e329[_0x57eb9b(0x20f)](_0x1a66ea);}await(0x0,promises_1[_0x57eb9b(0x1ef)])(this[_0x57eb9b(0x20c)],JSON[_0x57eb9b(0x1fe)](_0x31e329));}}exports['default']=RetrieveMetadata;