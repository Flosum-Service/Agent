const a181_0x1fe157=a181_0x39ca;(function(_0x16b797,_0x18fccf){const _0x3a2108=a181_0x39ca,_0x2025d6=_0x16b797();while(!![]){try{const _0x4c3c7a=parseInt(_0x3a2108(0x1c5))/0x1+parseInt(_0x3a2108(0x1ca))/0x2*(-parseInt(_0x3a2108(0x1cf))/0x3)+-parseInt(_0x3a2108(0x1be))/0x4*(parseInt(_0x3a2108(0x19c))/0x5)+parseInt(_0x3a2108(0x1d2))/0x6*(parseInt(_0x3a2108(0x1d0))/0x7)+parseInt(_0x3a2108(0x1b6))/0x8*(parseInt(_0x3a2108(0x1a3))/0x9)+-parseInt(_0x3a2108(0x1d8))/0xa*(parseInt(_0x3a2108(0x1dd))/0xb)+parseInt(_0x3a2108(0x1a4))/0xc;if(_0x4c3c7a===_0x18fccf)break;else _0x2025d6['push'](_0x2025d6['shift']());}catch(_0x30797a){_0x2025d6['push'](_0x2025d6['shift']());}}}(a181_0x5d26,0xa70a8));const a181_0x2adb16=(function(){let _0x331c17=!![];return function(_0x11f927,_0x41af23){const _0xf493e1=_0x331c17?function(){const _0x84cf82=a181_0x39ca;if(_0x41af23){const _0x2502e9=_0x41af23[_0x84cf82(0x1ce)](_0x11f927,arguments);return _0x41af23=null,_0x2502e9;}}:function(){};return _0x331c17=![],_0xf493e1;};}()),a181_0x1c719b=a181_0x2adb16(this,function(){const _0x318e8e=a181_0x39ca;return a181_0x1c719b[_0x318e8e(0x1b9)]()['search'](_0x318e8e(0x19a))['toString']()[_0x318e8e(0x1de)](a181_0x1c719b)[_0x318e8e(0x1bd)](_0x318e8e(0x19a));});a181_0x1c719b();'use strict';var __importDefault=this&&this[a181_0x1fe157(0x1c1)]||function(_0x27d039){const _0x389826=a181_0x1fe157;return _0x27d039&&_0x27d039[_0x389826(0x1e2)]?_0x27d039:{'default':_0x27d039};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a181_0x1fe157(0x1b0)]=void 0x0;const fs_internal_1=require('../internal/fs.internal'),utils_1=require(a181_0x1fe157(0x1c3)),path_1=require(a181_0x1fe157(0x19b)),xml_v2_1=require(a181_0x1fe157(0x1a7)),child_types_map_1=__importDefault(require(a181_0x1fe157(0x1cb))),constants_1=require(a181_0x1fe157(0x1e1)),crc32_1=require(a181_0x1fe157(0x1c7)),folder_types_1=__importDefault(require(a181_0x1fe157(0x1ab))),settings_types_list_1=__importDefault(require(a181_0x1fe157(0x1dc))),base_parser_1=require(a181_0x1fe157(0x1b3)),CHILD_XML_KEYS=Object[a181_0x1fe157(0x1cd)](child_types_map_1[a181_0x1fe157(0x1cc)]);class MDApiParserV2 extends base_parser_1['BaseParser']{constructor({sourceDir:_0x3d7e53,paths:_0x514cbf}){const _0x2f8257=a181_0x1fe157;super({'sourceDir':_0x3d7e53,'paths':_0x514cbf},MDApiParserV2['name']),this[_0x2f8257(0x1b1)]='-meta.xml',this[_0x2f8257(0x1e7)]=_0x2f8257(0x1ba);}async['readChildComponents'](_0x271cfe){const _0x333e8d=a181_0x1fe157;try{const _0x4b3beb=await xml_v2_1[_0x333e8d(0x1a8)]['parse'](Object[_0x333e8d(0x1cd)](_0x271cfe[_0x333e8d(0x1c0)])[0x0][_0x333e8d(0x1b9)](_0x333e8d(0x1aa))),_0x1fae2d=CHILD_XML_KEYS[_0x333e8d(0x1b8)](_0x1330a1=>xml_v2_1[_0x333e8d(0x1a8)][_0x333e8d(0x1a9)](_0x4b3beb,_0x1330a1))[_0x333e8d(0x19f)]((_0x52967e,_0x434760)=>[..._0x52967e,...xml_v2_1[_0x333e8d(0x1a8)][_0x333e8d(0x1d3)](_0x4b3beb,_0x434760)],[]);return(0x0,utils_1['createChildComponentsFromParent'])(_0x271cfe,_0x4b3beb,_0x1fae2d);}catch(_0x5ba0bf){throw new Error('Cannot\x20parse\x20children\x20in\x20'+_0x271cfe['name']+'\x20['+_0x271cfe[_0x333e8d(0x1e0)]+']');}}async[a181_0x1fe157(0x1ac)](_0x42f33e){const _0xeaf350=a181_0x1fe157,_0x119dfc=(0x0,path_1[_0xeaf350(0x1bb)])(this['sourceDir'],_0x42f33e),_0x47a84e=_0x42f33e+(_0x42f33e[_0xeaf350(0x1db)](_0xeaf350(0x1e3))?this['META_EXPERIENCES_EXTENSION']:this['META_EXTENSION']),_0x877e43=await fs_internal_1['FS'][_0xeaf350(0x1b4)](_0x119dfc,!![]),_0x8f4ce3=await fs_internal_1['FS'][_0xeaf350(0x1af)]((0x0,path_1[_0xeaf350(0x1bb)])(this['sourceDir'],_0x47a84e),!![])['catch'](()=>null),_0x1b9076={};for(const _0x2a4ce4 of _0x877e43){_0x1b9076[(0x0,path_1[_0xeaf350(0x1c2)])(this[_0xeaf350(0x1e4)],_0x2a4ce4)[_0xeaf350(0x1c9)](/\\/g,'/')]=await fs_internal_1['FS'][_0xeaf350(0x1af)](_0x2a4ce4,!![]);}return _0x8f4ce3&&(_0x1b9076[(0x0,path_1[_0xeaf350(0x1c2)])(this[_0xeaf350(0x1e4)],_0x47a84e)[_0xeaf350(0x1c9)](/\\/g,'/')]=_0x8f4ce3),_0x1b9076;}async['readComponent'](_0x19cac3){const _0x29b1c6=a181_0x1fe157,_0x53e1fe=_0x19cac3+this[_0x29b1c6(0x1b1)];if(constants_1[_0x29b1c6(0x1c4)][_0x29b1c6(0x1bc)](_0x19cac3))return this['readBundledComponent'](_0x19cac3);if(await fs_internal_1['FS'][_0x29b1c6(0x1b5)]((0x0,path_1[_0x29b1c6(0x1bb)])(this[_0x29b1c6(0x1e4)],_0x53e1fe))){const _0x249d38=await fs_internal_1['FS']['readFile']((0x0,path_1[_0x29b1c6(0x1bb)])(this[_0x29b1c6(0x1e4)],_0x53e1fe),!![]),_0x5b28cc=await(0x0,utils_1[_0x29b1c6(0x1a6)])({'files':{[_0x53e1fe]:_0x249d38}})[_0x29b1c6(0x1a0)](()=>null);if(_0x5b28cc&&folder_types_1['default'][_0x29b1c6(0x1d6)](_0x5b28cc))return{[_0x53e1fe]:_0x249d38};return{[_0x53e1fe]:_0x249d38,[_0x19cac3]:await fs_internal_1['FS']['readFile']((0x0,path_1['join'])(this[_0x29b1c6(0x1e4)],_0x19cac3),!![])};}return{[_0x19cac3]:await fs_internal_1['FS'][_0x29b1c6(0x1af)]((0x0,path_1[_0x29b1c6(0x1bb)])(this[_0x29b1c6(0x1e4)],_0x19cac3),!![])};}[a181_0x1fe157(0x1d5)](){const _0x198ce3=a181_0x1fe157;this[_0x198ce3(0x1c8)]=this[_0x198ce3(0x1c8)][_0x198ce3(0x1d9)](_0x54f03e=>constants_1['BUNDLED_FOLDERS_REGEXP']['test'](_0x54f03e)?_0x54f03e[_0x198ce3(0x19d)]('/')[_0x198ce3(0x1d1)](0x0,0x2)['join']('/'):_0x54f03e),this[_0x198ce3(0x1c8)]=[...new Set(this['paths'])];}async['execute'](){const _0x241239=a181_0x1fe157,_0x544987=[];this['foldBundledComponentsPaths']();for(const _0x544e0d of this[_0x241239(0x1c8)]){if(_0x544e0d[_0x241239(0x1e6)](_0x241239(0x1e5)))continue;const _0x1e01d0={};try{_0x1e01d0[_0x241239(0x1c0)]=await this[_0x241239(0x1b7)](_0x544e0d),_0x1e01d0[_0x241239(0x1a1)]=constants_1[_0x241239(0x1c4)][_0x241239(0x1bc)](_0x544e0d)?_0x544e0d:(0x0,utils_1[_0x241239(0x1c6)])({'files':_0x1e01d0['files']}),_0x544e0d['startsWith'](_0x241239(0x19e))?_0x1e01d0['type']=_0x241239(0x1d4):_0x1e01d0[_0x241239(0x1e0)]=await(0x0,utils_1[_0x241239(0x1a6)])({'files':_0x1e01d0['files']});}catch(_0x16fa50){this[_0x241239(0x1d7)]['error'](_0x241239(0x1ad),_0x544e0d,_0x16fa50);continue;}_0x1e01d0[_0x241239(0x1df)]=(0x0,utils_1[_0x241239(0x1a2)])(_0x544e0d),_0x1e01d0['crc']=(0x0,crc32_1[_0x241239(0x1b2)])(_0x1e01d0);if((0x0,utils_1[_0x241239(0x1da)])(_0x1e01d0)){const _0x36943b=await this['readChildComponents'](_0x1e01d0);_0x544987[_0x241239(0x1a5)](..._0x36943b);}if(_0x1e01d0[_0x241239(0x1e0)]===_0x241239(0x1ae))continue;settings_types_list_1['default'][_0x241239(0x1d6)](_0x1e01d0[_0x241239(0x1e0)])&&(_0x1e01d0[_0x241239(0x1e0)]=_0x241239(0x1bf)),_0x544987[_0x241239(0x1a5)](_0x1e01d0);}return _0x544987;}}function a181_0x39ca(_0x25b76b,_0x5a02db){const _0x3d0d9a=a181_0x5d26();return a181_0x39ca=function(_0x1c719b,_0x2adb16){_0x1c719b=_0x1c719b-0x19a;let _0x5d26bf=_0x3d0d9a[_0x1c719b];return _0x5d26bf;},a181_0x39ca(_0x25b76b,_0x5a02db);}function a181_0x5d26(){const _0x226d09=['filePath','extractFilenameFromPath','820809MzCYmo','13308756SVELRX','push','extractComponentTypeFromFiles','./utils/xml-v2','XmlV2','hasChildNodes','utf-8','./data/folder-types','readBundledComponent','Error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','CustomLabels','readFile','MDApiParserV2','META_EXTENSION','calculateCRC32','./base.parser','readDir','exists','32nYSlPg','readComponent','filter','toString','.site-meta.xml','join','test','search','1844qgMjGf','Settings','files','__importDefault','relative','./utils','BUNDLED_FOLDERS_REGEXP','1074608IUhKsW','extractFileNameFromFiles','./utils/crc32','paths','replace','13766dTPjQH','./data/child-types-map','default','values','apply','213KUBahA','1421TsgFdh','slice','11196ShKbiz','getChildsByName','WaveTemplateBundle','foldBundledComponentsPaths','includes','logger','406310vZJLAP','map','isParentComponent','startsWith','./data/settings-types-list','209Jigtdl','constructor','name','type','../../../constants','__esModule','experiences','sourceDir','package.xml','endsWith','META_EXPERIENCES_EXTENSION','(((.+)+)+)+$','path','10655LfkkzL','split','waveTemplates','reduce','catch'];a181_0x5d26=function(){return _0x226d09;};return a181_0x5d26();}exports['MDApiParserV2']=MDApiParserV2;