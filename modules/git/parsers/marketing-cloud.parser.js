const a181_0x44a8f0=a181_0x5988;(function(_0x220f7e,_0x4574de){const _0x34ae60=a181_0x5988,_0x5d4142=_0x220f7e();while(!![]){try{const _0x1d7dc2=-parseInt(_0x34ae60(0x16d))/0x1+-parseInt(_0x34ae60(0x180))/0x2*(-parseInt(_0x34ae60(0x181))/0x3)+-parseInt(_0x34ae60(0x173))/0x4*(parseInt(_0x34ae60(0x177))/0x5)+parseInt(_0x34ae60(0x166))/0x6*(-parseInt(_0x34ae60(0x174))/0x7)+parseInt(_0x34ae60(0x183))/0x8*(-parseInt(_0x34ae60(0x172))/0x9)+parseInt(_0x34ae60(0x164))/0xa*(-parseInt(_0x34ae60(0x17a))/0xb)+parseInt(_0x34ae60(0x17f))/0xc;if(_0x1d7dc2===_0x4574de)break;else _0x5d4142['push'](_0x5d4142['shift']());}catch(_0x349dc0){_0x5d4142['push'](_0x5d4142['shift']());}}}(a181_0x4467,0x2a295));const a181_0x1a5356=(function(){let _0x1000ca=!![];return function(_0x2d8346,_0x18d508){const _0x17e5c5=_0x1000ca?function(){const _0x25485d=a181_0x5988;if(_0x18d508){const _0x1e4c9e=_0x18d508[_0x25485d(0x176)](_0x2d8346,arguments);return _0x18d508=null,_0x1e4c9e;}}:function(){};return _0x1000ca=![],_0x17e5c5;};}()),a181_0x2cb2fe=a181_0x1a5356(this,function(){const _0x5aa375=a181_0x5988;return a181_0x2cb2fe[_0x5aa375(0x16c)]()[_0x5aa375(0x168)](_0x5aa375(0x170))[_0x5aa375(0x16c)]()[_0x5aa375(0x175)](a181_0x2cb2fe)['search'](_0x5aa375(0x170));});a181_0x2cb2fe();'use strict';Object[a181_0x44a8f0(0x184)](exports,'__esModule',{'value':!![]}),exports[a181_0x44a8f0(0x16f)]=void 0x0;const base_parser_1=require(a181_0x44a8f0(0x167)),fs_internal_1=require('../internal/fs.internal'),crc32_1=require(a181_0x44a8f0(0x16b)),path_1=require(a181_0x44a8f0(0x169)),marketing_cloud_1=require(a181_0x44a8f0(0x17c));function a181_0x5988(_0x1ab0d7,_0x35fb7f){const _0x8a7805=a181_0x4467();return a181_0x5988=function(_0x2cb2fe,_0x1a5356){_0x2cb2fe=_0x2cb2fe-0x160;let _0x446758=_0x8a7805[_0x2cb2fe];return _0x446758;},a181_0x5988(_0x1ab0d7,_0x35fb7f);}function a181_0x4467(){const _0x42f82a=['execute','4024yKiAcP','defineProperty','sourceDir','error','key','catch','415230KhHBJW','BaseParser','12rrQAjo','./base.parser','search','path','parseMarketingCloudComponent','./utils/crc32','toString','113223NDRupm','logger','MarketingCloudParser','(((.+)+)+)+$','join','720AJIbPl','12zrsLPn','654941zNOVBX','constructor','apply','223495tJlSKL','Error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','split','55gFltfP','calculateCRC32','./utils/marketing-cloud','crc','readComponent','9235692sPJXLM','138ZaDVru','3711NzGqOM'];a181_0x4467=function(){return _0x42f82a;};return a181_0x4467();}class MarketingCloudParser extends base_parser_1[a181_0x44a8f0(0x165)]{constructor({sourceDir:_0x4d60a9,paths:_0x198157}){super({'sourceDir':_0x4d60a9,'paths':_0x198157},MarketingCloudParser['name']);}async[a181_0x44a8f0(0x17e)](_0x259995){const _0x16e522=a181_0x44a8f0,_0x5617d4=(0x0,path_1[_0x16e522(0x171)])(this[_0x16e522(0x160)],_0x259995),_0x38e1e4=await fs_internal_1['FS']['readFile'](_0x5617d4,!![]);return _0x38e1e4;}async[a181_0x44a8f0(0x182)](){const _0x91a17=a181_0x44a8f0,_0x56d3a7=this['paths'][0x0],[_0x587e69,_0x457aff]=_0x56d3a7[_0x91a17(0x179)](path_1['sep']),_0x3f3b33=await this[_0x91a17(0x17e)](_0x56d3a7)[_0x91a17(0x163)](_0x4210a2=>this[_0x91a17(0x16e)][_0x91a17(0x161)]('Error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20',_0x56d3a7,_0x4210a2));if(!_0x3f3b33)return[];const _0x452da6=await(0x0,marketing_cloud_1[_0x91a17(0x16a)])(_0x56d3a7,_0x3f3b33)[_0x91a17(0x163)](_0x4c509e=>this[_0x91a17(0x16e)]['error'](_0x91a17(0x178),_0x56d3a7,_0x4c509e)),_0x37e09e={'files':{[_0x56d3a7]:_0x3f3b33},'filePath':_0x56d3a7,'type':(_0x452da6===null||_0x452da6===void 0x0?void 0x0:_0x452da6['componentType'])||_0x587e69,'name':(_0x452da6===null||_0x452da6===void 0x0?void 0x0:_0x452da6['componentName'])||_0x457aff,'marketingCloudKey':_0x452da6===null||_0x452da6===void 0x0?void 0x0:_0x452da6[_0x91a17(0x162)]},_0x25ac88=(0x0,crc32_1[_0x91a17(0x17b)])(_0x37e09e);return _0x37e09e[_0x91a17(0x17d)]=_0x25ac88,[_0x37e09e];}}exports[a181_0x44a8f0(0x16f)]=MarketingCloudParser;