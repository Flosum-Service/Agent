const a146_0x2fb2db=a146_0x1d65;(function(_0x21f63c,_0x44df4c){const _0x4ded89=a146_0x1d65,_0x46d606=_0x21f63c();while(!![]){try{const _0x5b7cc8=-parseInt(_0x4ded89(0x17c))/0x1*(-parseInt(_0x4ded89(0x18b))/0x2)+parseInt(_0x4ded89(0x176))/0x3*(-parseInt(_0x4ded89(0x14b))/0x4)+-parseInt(_0x4ded89(0x17f))/0x5+parseInt(_0x4ded89(0x15d))/0x6+-parseInt(_0x4ded89(0x16c))/0x7+parseInt(_0x4ded89(0x172))/0x8*(parseInt(_0x4ded89(0x165))/0x9)+-parseInt(_0x4ded89(0x189))/0xa*(parseInt(_0x4ded89(0x185))/0xb);if(_0x5b7cc8===_0x44df4c)break;else _0x46d606['push'](_0x46d606['shift']());}catch(_0x1bc6b2){_0x46d606['push'](_0x46d606['shift']());}}}(a146_0x55ae,0x67f29));const a146_0x5ad405=(function(){let _0x17bfa5=!![];return function(_0x56a3c1,_0x37f7ae){const _0x60f0ac=_0x17bfa5?function(){const _0x295788=a146_0x1d65;if(_0x37f7ae){const _0x4d1e8d=_0x37f7ae[_0x295788(0x178)](_0x56a3c1,arguments);return _0x37f7ae=null,_0x4d1e8d;}}:function(){};return _0x17bfa5=![],_0x60f0ac;};}()),a146_0x27be5a=a146_0x5ad405(this,function(){const _0x470ece=a146_0x1d65;return a146_0x27be5a[_0x470ece(0x144)]()[_0x470ece(0x166)]('(((.+)+)+)+$')[_0x470ece(0x144)]()[_0x470ece(0x157)](a146_0x27be5a)[_0x470ece(0x166)](_0x470ece(0x171));});a146_0x27be5a();'use strict';var __importDefault=this&&this[a146_0x2fb2db(0x151)]||function(_0x42cae0){const _0x235fd0=a146_0x2fb2db;return _0x42cae0&&_0x42cae0[_0x235fd0(0x177)]?_0x42cae0:{'default':_0x42cae0};};Object['defineProperty'](exports,a146_0x2fb2db(0x177),{'value':!![]}),exports[a146_0x2fb2db(0x15c)]=void 0x0;function a146_0x1d65(_0x2a4d8e,_0x23c66d){const _0x2acbe3=a146_0x55ae();return a146_0x1d65=function(_0x27be5a,_0x5ad405){_0x27be5a=_0x27be5a-0x143;let _0x55ae5f=_0x2acbe3[_0x27be5a];return _0x55ae5f;},a146_0x1d65(_0x2a4d8e,_0x23c66d);}const fs_internal_1=require('../../internal/fs.internal'),utils_1=require(a146_0x2fb2db(0x17d)),path_1=require('path'),xml_v2_1=require(a146_0x2fb2db(0x186)),child_types_map_1=__importDefault(require(a146_0x2fb2db(0x14d))),constants_1=require(a146_0x2fb2db(0x168)),core_1=require(a146_0x2fb2db(0x15f)),crc32_1=require(a146_0x2fb2db(0x167)),folder_types_1=__importDefault(require(a146_0x2fb2db(0x18d))),settings_types_list_1=__importDefault(require(a146_0x2fb2db(0x164))),CHILD_XML_KEYS=Object[a146_0x2fb2db(0x148)](child_types_map_1[a146_0x2fb2db(0x15a)]);class MDApiParserV2{constructor(_0xe4d8f1,_0x222b86){const _0x6ad5c2=a146_0x2fb2db;this[_0x6ad5c2(0x14a)]=_0xe4d8f1,this['paths']=_0x222b86,this[_0x6ad5c2(0x182)]=new core_1[(_0x6ad5c2(0x173))](MDApiParserV2[_0x6ad5c2(0x170)]),this[_0x6ad5c2(0x174)]='-meta.xml',this[_0x6ad5c2(0x16b)]=_0x6ad5c2(0x16e);}async[a146_0x2fb2db(0x143)](_0x3feab6){const _0x12e8a3=a146_0x2fb2db;try{const _0x232656=await xml_v2_1[_0x12e8a3(0x14f)]['parse'](Object[_0x12e8a3(0x148)](_0x3feab6[_0x12e8a3(0x161)])[0x0][_0x12e8a3(0x144)](_0x12e8a3(0x181))),_0xac00f3=CHILD_XML_KEYS['filter'](_0x4a39fe=>xml_v2_1[_0x12e8a3(0x14f)]['hasChildNodes'](_0x232656,_0x4a39fe))[_0x12e8a3(0x16f)]((_0x1187de,_0xbdfad9)=>[..._0x1187de,...xml_v2_1['XmlV2'][_0x12e8a3(0x158)](_0x232656,_0xbdfad9)],[]);return(0x0,utils_1['createChildComponentsFromParent'])(_0x3feab6,_0x232656,_0xac00f3);}catch(_0x4e9d79){throw new Error('Cannot\x20parse\x20children\x20in\x20'+_0x3feab6[_0x12e8a3(0x170)]+'\x20['+_0x3feab6['type']+']');}}async[a146_0x2fb2db(0x187)](_0x108826){const _0x2be004=a146_0x2fb2db,_0x3521bf=(0x0,path_1[_0x2be004(0x184)])(this[_0x2be004(0x14a)],_0x108826),_0x1d0542=_0x108826+(_0x108826['startsWith'](_0x2be004(0x146))?this[_0x2be004(0x16b)]:this[_0x2be004(0x174)]),_0x57b400=await fs_internal_1['FS'][_0x2be004(0x156)](_0x3521bf,!![]),_0x4c9622=await fs_internal_1['FS'][_0x2be004(0x15b)]((0x0,path_1['join'])(this[_0x2be004(0x14a)],_0x1d0542),!![])[_0x2be004(0x159)](()=>null),_0x53a96d={};for(const _0x19963a of _0x57b400){_0x53a96d[(0x0,path_1[_0x2be004(0x15e)])(this[_0x2be004(0x14a)],_0x19963a)['replace'](/\\/g,'/')]=await fs_internal_1['FS'][_0x2be004(0x15b)](_0x19963a,!![]);}return _0x4c9622&&(_0x53a96d[(0x0,path_1[_0x2be004(0x15e)])(this[_0x2be004(0x14a)],_0x1d0542)[_0x2be004(0x180)](/\\/g,'/')]=_0x4c9622),_0x53a96d;}async[a146_0x2fb2db(0x169)](_0x19d675){const _0x29529b=a146_0x2fb2db,_0x330683=_0x19d675+this[_0x29529b(0x174)];if(constants_1['BUNDLED_FOLDERS_REGEXP'][_0x29529b(0x18c)](_0x19d675))return this[_0x29529b(0x187)](_0x19d675);if(await fs_internal_1['FS'][_0x29529b(0x145)]((0x0,path_1['join'])(this[_0x29529b(0x14a)],_0x330683))){const _0x3ff96d=await fs_internal_1['FS'][_0x29529b(0x15b)]((0x0,path_1[_0x29529b(0x184)])(this[_0x29529b(0x14a)],_0x330683),!![]),_0x20dea4=await(0x0,utils_1[_0x29529b(0x16a)])({'files':{[_0x330683]:_0x3ff96d}})[_0x29529b(0x159)](()=>null);if(_0x20dea4&&folder_types_1[_0x29529b(0x15a)][_0x29529b(0x147)](_0x20dea4))return{[_0x330683]:_0x3ff96d};return{[_0x330683]:_0x3ff96d,[_0x19d675]:await fs_internal_1['FS'][_0x29529b(0x15b)]((0x0,path_1[_0x29529b(0x184)])(this['dir'],_0x19d675),!![])};}return{[_0x19d675]:await fs_internal_1['FS'][_0x29529b(0x15b)]((0x0,path_1[_0x29529b(0x184)])(this[_0x29529b(0x14a)],_0x19d675),!![])};}[a146_0x2fb2db(0x16d)](){const _0x223dd6=a146_0x2fb2db;this[_0x223dd6(0x18a)]=this['paths'][_0x223dd6(0x162)](_0xe206a4=>constants_1['BUNDLED_FOLDERS_REGEXP'][_0x223dd6(0x18c)](_0xe206a4)?_0xe206a4[_0x223dd6(0x179)]('/')[_0x223dd6(0x154)](0x0,0x2)['join']('/'):_0xe206a4),this[_0x223dd6(0x18a)]=[...new Set(this[_0x223dd6(0x18a)])];}async[a146_0x2fb2db(0x17e)](){const _0x4d6dd4=a146_0x2fb2db,_0x46da98=[];this[_0x4d6dd4(0x16d)]();for(const _0x5ea9fe of this[_0x4d6dd4(0x18a)]){if(_0x5ea9fe[_0x4d6dd4(0x149)]('package.xml'))continue;const _0x456214={};try{_0x456214[_0x4d6dd4(0x161)]=await this[_0x4d6dd4(0x169)](_0x5ea9fe),_0x456214[_0x4d6dd4(0x183)]=constants_1[_0x4d6dd4(0x152)][_0x4d6dd4(0x18c)](_0x5ea9fe)?_0x5ea9fe:(0x0,utils_1[_0x4d6dd4(0x155)])({'files':_0x456214[_0x4d6dd4(0x161)]}),_0x5ea9fe[_0x4d6dd4(0x153)](_0x4d6dd4(0x14c))?_0x456214[_0x4d6dd4(0x14e)]=_0x4d6dd4(0x175):_0x456214['type']=await(0x0,utils_1['extractComponentTypeFromFiles'])({'files':_0x456214[_0x4d6dd4(0x161)]});}catch(_0x1fd5df){this[_0x4d6dd4(0x182)]['error'](_0x4d6dd4(0x188),_0x5ea9fe,_0x1fd5df);continue;}_0x456214[_0x4d6dd4(0x170)]=(0x0,utils_1[_0x4d6dd4(0x18e)])(_0x5ea9fe),_0x456214['crc']=(0x0,crc32_1[_0x4d6dd4(0x17b)])(_0x456214);if((0x0,utils_1[_0x4d6dd4(0x17a)])(_0x456214)){const _0xbed918=await this[_0x4d6dd4(0x143)](_0x456214);_0x46da98['push'](..._0xbed918);}if(_0x456214[_0x4d6dd4(0x14e)]===_0x4d6dd4(0x160))continue;settings_types_list_1[_0x4d6dd4(0x15a)][_0x4d6dd4(0x147)](_0x456214[_0x4d6dd4(0x14e)])&&(_0x456214['type']=_0x4d6dd4(0x163)),_0x46da98[_0x4d6dd4(0x150)](_0x456214);}return _0x46da98;}}function a146_0x55ae(){const _0x46e079=['map','Settings','../data/settings-types-list','7555077hYJuZH','search','../utils/crc32','../../../../constants','readComponent','extractComponentTypeFromFiles','META_EXPERIENCES_EXTENSION','361865yKFAeU','foldBundledComponentsPaths','.site-meta.xml','reduce','name','(((.+)+)+)+$','8AhhLdm','Logger','META_EXTENSION','WaveTemplateBundle','3DyeNdB','__esModule','apply','split','isParentComponent','calculateCRC32','6529tizdUZ','../utils','parse','60305frnbcX','replace','utf-8','logger','filePath','join','1458347zjjUvt','../utils/xml-v2','readBundledComponent','error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','10qVUCRA','paths','10bzqCBG','test','../data/folder-types','extractFilenameFromPath','readChildComponents','toString','exists','experiences','includes','values','endsWith','dir','3394796sDCNHY','waveTemplates','../data/child-types-map','type','XmlV2','push','__importDefault','BUNDLED_FOLDERS_REGEXP','startsWith','slice','extractFileNameFromFiles','readDir','constructor','getChildsByName','catch','default','readFile','MDApiParserV2','3592218EVaGGK','relative','../../../../core','CustomLabels','files'];a146_0x55ae=function(){return _0x46e079;};return a146_0x55ae();}exports[a146_0x2fb2db(0x15c)]=MDApiParserV2;