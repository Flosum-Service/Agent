const a186_0x540485=a186_0x1af9;(function(_0x5df9b3,_0x3ca1c2){const _0x581fa3=a186_0x1af9,_0x48dc64=_0x5df9b3();while(!![]){try{const _0x51528d=-parseInt(_0x581fa3(0x236))/0x1+parseInt(_0x581fa3(0x1f6))/0x2*(parseInt(_0x581fa3(0x20c))/0x3)+parseInt(_0x581fa3(0x1ef))/0x4+parseInt(_0x581fa3(0x21a))/0x5+-parseInt(_0x581fa3(0x22e))/0x6+-parseInt(_0x581fa3(0x22d))/0x7*(parseInt(_0x581fa3(0x220))/0x8)+-parseInt(_0x581fa3(0x230))/0x9;if(_0x51528d===_0x3ca1c2)break;else _0x48dc64['push'](_0x48dc64['shift']());}catch(_0x9e39c8){_0x48dc64['push'](_0x48dc64['shift']());}}}(a186_0x2a20,0xe409b));const a186_0x1dc64e=(function(){let _0x2c9326=!![];return function(_0x306938,_0x13b213){const _0x3e4561=_0x2c9326?function(){const _0x523156=a186_0x1af9;if(_0x13b213){const _0x440bf9=_0x13b213[_0x523156(0x203)](_0x306938,arguments);return _0x13b213=null,_0x440bf9;}}:function(){};return _0x2c9326=![],_0x3e4561;};}()),a186_0x547e44=a186_0x1dc64e(this,function(){const _0x46ae3d=a186_0x1af9;return a186_0x547e44[_0x46ae3d(0x1eb)]()[_0x46ae3d(0x20d)]('(((.+)+)+)+$')[_0x46ae3d(0x1eb)]()[_0x46ae3d(0x234)](a186_0x547e44)[_0x46ae3d(0x20d)](_0x46ae3d(0x212));});a186_0x547e44();'use strict';var __importDefault=this&&this[a186_0x540485(0x22f)]||function(_0xdfd94a){const _0x173e5f=a186_0x540485;return _0xdfd94a&&_0xdfd94a[_0x173e5f(0x1f4)]?_0xdfd94a:{'default':_0xdfd94a};};Object['defineProperty'](exports,a186_0x540485(0x1f4),{'value':!![]}),exports[a186_0x540485(0x1fd)]=exports['extractComponentTypeFromFiles']=exports[a186_0x540485(0x222)]=exports[a186_0x540485(0x1ff)]=exports['calculateCRC32']=exports['isParentComponentFile']=exports[a186_0x540485(0x1f1)]=exports['extractFilenameFromPath']=exports[a186_0x540485(0x207)]=exports[a186_0x540485(0x216)]=exports['convertToCleanPaths']=void 0x0;const constants_1=require(a186_0x540485(0x21d)),path_1=__importDefault(require(a186_0x540485(0x202))),child_types_map_1=__importDefault(require(a186_0x540485(0x221))),parent_xml_types_1=__importDefault(require(a186_0x540485(0x1f3))),xml_v2_1=require(a186_0x540485(0x1f7)),crc_32_1=__importDefault(require(a186_0x540485(0x21c))),parent_xml_types_map_1=__importDefault(require(a186_0x540485(0x20f))),fs_internal_1=require(a186_0x540485(0x211));function convertToCleanPaths(_0x3f6d13){const _0x4c79ac=a186_0x540485,_0x45be46=_0x3f6d13[_0x4c79ac(0x217)](_0x26f423=>_0x26f423[_0x4c79ac(0x208)](constants_1[_0x4c79ac(0x22c)])),_0x209122=_0x45be46[_0x4c79ac(0x226)](_0x2ec310=>_0x2ec310[_0x4c79ac(0x205)](new RegExp(constants_1[_0x4c79ac(0x22c)]+'$'),'')),_0x3e2bfa=_0x3f6d13[_0x4c79ac(0x217)](_0x512488=>!_0x45be46[_0x4c79ac(0x232)](_0x512488));return[...new Set([..._0x3e2bfa,..._0x209122])];}exports['convertToCleanPaths']=convertToCleanPaths;function filterParserPaths(_0x511f6c){const _0x3ce0ca=a186_0x540485,_0x2558d4=[...new Set(_0x511f6c[_0x3ce0ca(0x217)](_0x39dab0=>!_0x39dab0['endsWith'](constants_1[_0x3ce0ca(0x22c)])))],_0x55e81f=_0x511f6c['filter'](_0x8462ec=>_0x8462ec[_0x3ce0ca(0x208)](constants_1[_0x3ce0ca(0x22c)]))[_0x3ce0ca(0x217)](_0x1010ec=>!_0x2558d4[_0x3ce0ca(0x232)](_0x1010ec[_0x3ce0ca(0x205)](constants_1[_0x3ce0ca(0x22c)],'')));return[..._0x55e81f,..._0x2558d4];}exports[a186_0x540485(0x216)]=filterParserPaths;function getChildComponentTypeByChildNodeName(_0x1426a9){const _0x124454=a186_0x540485,_0x8e2e4=Object[_0x124454(0x1fc)](child_types_map_1[_0x124454(0x21b)])['find'](([_0x296116,_0x3d748f])=>_0x3d748f===_0x1426a9);if(!_0x8e2e4)throw new Error(_0x124454(0x227)+_0x1426a9);return _0x8e2e4[0x0];}exports[a186_0x540485(0x207)]=getChildComponentTypeByChildNodeName;function extractFilenameFromPath(_0x27fb11){const _0x9baa0=a186_0x540485,_0x50f21d=_0x27fb11[_0x9baa0(0x1f9)](path_1[_0x9baa0(0x21b)][_0x9baa0(0x21f)]),_0x4cebaa=path_1[_0x9baa0(0x21b)][_0x9baa0(0x201)](_0x27fb11['replace'](constants_1[_0x9baa0(0x22c)],''),path_1[_0x9baa0(0x21b)][_0x9baa0(0x1ec)](_0x27fb11));if(_0x50f21d[_0x9baa0(0x22b)]>0x2)return _0x50f21d[_0x50f21d[_0x9baa0(0x22b)]-0x2]+'/'+_0x4cebaa;return _0x4cebaa;}exports['extractFilenameFromPath']=extractFilenameFromPath;function isParentComponent({type:_0x4766f5}){const _0x4841c3=a186_0x540485;return parent_xml_types_1[_0x4841c3(0x21b)][_0x4841c3(0x232)](_0x4766f5);}exports[a186_0x540485(0x1f1)]=isParentComponent;function isParentComponentFile(_0x3db0b7){const _0x20deae=a186_0x540485,_0x48956c=path_1[_0x20deae(0x21b)][_0x20deae(0x1f8)](_0x3db0b7);return Object[_0x20deae(0x21e)](parent_xml_types_map_1[_0x20deae(0x21b)])[_0x20deae(0x213)](_0x5dc2a9=>_0x48956c[_0x20deae(0x233)]['endsWith'](_0x5dc2a9));}exports[a186_0x540485(0x1e9)]=isParentComponentFile;function calculateCRC32(_0x173968){const _0x96ac81=a186_0x540485,_0x27b28f=Object[_0x96ac81(0x214)](_0x173968[_0x96ac81(0x209)])[_0x96ac81(0x231)]();switch(_0x27b28f[_0x96ac81(0x22b)]){case 0x1:{const [_0x2445ac]=_0x27b28f,_0x14fc06=_0x173968[_0x96ac81(0x209)][_0x2445ac];return crc_32_1[_0x96ac81(0x21b)][_0x96ac81(0x235)](_0x14fc06[_0x96ac81(0x1eb)](_0x96ac81(0x215)),0x20)[_0x96ac81(0x1eb)]();}case 0x2:{const [_0x4a0167,_0x4f9fa5]=_0x27b28f,_0x289b43=_0x173968['files'][_0x4a0167],_0x291d94=_0x173968[_0x96ac81(0x209)][_0x4f9fa5];return crc_32_1[_0x96ac81(0x21b)]['str'](_0x289b43[_0x96ac81(0x1eb)](_0x96ac81(0x215)),0x20)[_0x96ac81(0x1eb)]()+'\x20'+crc_32_1['default'][_0x96ac81(0x235)](_0x291d94[_0x96ac81(0x1eb)](_0x96ac81(0x215)),0x20)[_0x96ac81(0x1eb)]();}default:{let _0x24c939=0x0;if(_0x27b28f[_0x96ac81(0x22b)]>0x0)_0x24c939=crc_32_1[_0x96ac81(0x21b)][_0x96ac81(0x235)](_0x173968[_0x96ac81(0x209)][_0x27b28f[0x0]][_0x96ac81(0x1eb)](_0x96ac81(0x215)),0x20);for(let _0x37d27f=0x1;_0x37d27f<_0x27b28f['length'];_0x37d27f++){const _0x26488d=crc_32_1[_0x96ac81(0x21b)][_0x96ac81(0x235)](_0x173968['files'][_0x27b28f[_0x37d27f]][_0x96ac81(0x1eb)]('utf-8'),0x20);_0x24c939=Math[_0x96ac81(0x210)]((_0x26488d+_0x24c939)/0x2);}return _0x24c939[_0x96ac81(0x1eb)]();}}}function a186_0x1af9(_0x177e9b,_0x2dfbf3){const _0x26287b=a186_0x2a20();return a186_0x1af9=function(_0x547e44,_0x1dc64e){_0x547e44=_0x547e44-0x1e9;let _0x2a20a4=_0x26287b[_0x547e44];return _0x2a20a4;},a186_0x1af9(_0x177e9b,_0x2dfbf3);}exports[a186_0x540485(0x225)]=calculateCRC32;function createChildComponentsFromParent(_0x655c0c,_0x47d987,_0x836154){const _0x15e27b=a186_0x540485,_0x605bdc=[];for(const _0x2d7946 of _0x836154){const _0x2e9b7e=xml_v2_1[_0x15e27b(0x1ee)][_0x15e27b(0x1fa)](xml_v2_1[_0x15e27b(0x1ee)][_0x15e27b(0x218)](_0x47d987),_0x2d7946[_0x15e27b(0x223)],_0x2d7946[_0x15e27b(0x20a)]),_0xb18eeb={};_0xb18eeb['filePath']=_0x655c0c[_0x15e27b(0x20e)],_0xb18eeb['type']=getChildComponentTypeByChildNodeName(_0x2d7946['nodeName']),_0x655c0c[_0x15e27b(0x22a)]===_0x15e27b(0x206)?_0xb18eeb[_0x15e27b(0x228)]=_0x2d7946[_0x15e27b(0x20a)][_0x15e27b(0x1ea)]:_0xb18eeb[_0x15e27b(0x228)]=_0x655c0c[_0x15e27b(0x228)]+'.'+_0x2d7946['nodeData'][_0x15e27b(0x1ea)],_0xb18eeb[_0x15e27b(0x209)]={[Object[_0x15e27b(0x214)](_0x655c0c[_0x15e27b(0x209)])[0x0]]:Buffer['from'](xml_v2_1[_0x15e27b(0x1ee)][_0x15e27b(0x229)](_0x2e9b7e,![]))},_0xb18eeb[_0x15e27b(0x224)]=calculateCRC32(_0xb18eeb),_0x605bdc[_0x15e27b(0x1fb)](_0xb18eeb);}return _0x605bdc;}exports[a186_0x540485(0x1ff)]=createChildComponentsFromParent;function extractFileNameFromFiles({files:_0x50e3f0}){const _0x160b83=a186_0x540485;var _0x192cd5;const _0x4d1dbd=Object['keys'](_0x50e3f0);return((_0x192cd5=_0x4d1dbd[0x0])===null||_0x192cd5===void 0x0?void 0x0:_0x192cd5['replace'](constants_1[_0x160b83(0x22c)],''))||'';}exports[a186_0x540485(0x222)]=extractFileNameFromFiles;async function extractComponentTypeFromFiles({files:_0x38f148}){const _0x2e9943=a186_0x540485,_0x501562=Object[_0x2e9943(0x214)](_0x38f148),_0x11319c=_0x501562[_0x2e9943(0x1f0)](_0x34beec=>_0x34beec[_0x2e9943(0x208)](constants_1[_0x2e9943(0x22c)]))||_0x501562[0x0];try{const _0x2ea8d9=await xml_v2_1['XmlV2'][_0x2e9943(0x1f8)](_0x38f148[_0x11319c][_0x2e9943(0x1eb)](_0x2e9943(0x215))),_0x391841=Object['keys'](_0x2ea8d9)[0x0];if(!_0x391841)throw new Error();return _0x391841;}catch(_0x2ba94f){throw new Error('Cannot\x20identify\x20component\x20type.\x20At\x20file\x20['+_0x501562[_0x2e9943(0x1f2)](_0x11319c)+_0x2e9943(0x20b)+_0x501562[_0x2e9943(0x1fe)](',\x20')+')');}}exports[a186_0x540485(0x219)]=extractComponentTypeFromFiles;function a186_0x2a20(){const _0x2440b8=['keys','utf-8','filterParserPaths','filter','createEmptyRootNodeFrom','extractComponentTypeFromFiles','6327735QVVEpb','default','crc-32','../../../../constants','values','sep','13768FwEKTF','../data/child-types-map','extractFileNameFromFiles','nodeName','crc','calculateCRC32','map','Unknown\x20child\x20type\x20for\x20','name','convertToString','type','length','META_XML_EXTENSION','238fFeyFz','7683900JMgFlg','__importDefault','5700294EEPxEd','sort','includes','dir','constructor','str','1298462Jwrdfl','isParentComponentFile','fullName','toString','extname','relative','XmlV2','4412788MJECuP','find','isParentComponent','indexOf','../data/parent-xml-types','__esModule','dirname','6XjnYFM','./xml-v2','parse','split','addChildNode','push','entries','readFilesByFilename','join','createChildComponentsFromParent','match','basename','path','apply','readDir','replace','CustomLabels','getChildComponentTypeByChildNodeName','endsWith','files','nodeData',']\x20index\x20in\x20(','1836291xrnVdx','search','filePath','../data/parent-xml-types-map','round','../../internal/fs.internal','(((.+)+)+)+$','some'];a186_0x2a20=function(){return _0x2440b8;};return a186_0x2a20();}async function readFilesByFilename(_0x16d7ce,_0xba99f3){const _0x9fc73c=a186_0x540485,_0x466b2d=path_1[_0x9fc73c(0x21b)][_0x9fc73c(0x1f5)](_0x16d7ce),_0x49e447=path_1[_0x9fc73c(0x21b)][_0x9fc73c(0x1fe)](_0xba99f3,_0x466b2d),_0x47f72c=await fs_internal_1['FS'][_0x9fc73c(0x204)](_0x49e447,!![]),_0x129034=_0x47f72c[_0x9fc73c(0x226)](_0x45c8c7=>path_1['default'][_0x9fc73c(0x1ed)](_0xba99f3,_0x45c8c7)),_0x32b92b=new RegExp('^'+_0x16d7ce+'[./-]{1}');return _0x129034[_0x9fc73c(0x217)](_0x4fb576=>_0x4fb576[_0x9fc73c(0x200)](_0x32b92b));}exports[a186_0x540485(0x1fd)]=readFilesByFilename;