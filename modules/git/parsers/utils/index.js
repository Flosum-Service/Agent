const a161_0x177a9e=a161_0x144c;(function(_0x1c1376,_0x4cf722){const _0x3c4e81=a161_0x144c,_0x234db1=_0x1c1376();while(!![]){try{const _0x3a7f50=parseInt(_0x3c4e81(0xe8))/0x1*(parseInt(_0x3c4e81(0xf3))/0x2)+parseInt(_0x3c4e81(0xbc))/0x3+parseInt(_0x3c4e81(0xcd))/0x4+-parseInt(_0x3c4e81(0xcc))/0x5*(parseInt(_0x3c4e81(0xcb))/0x6)+-parseInt(_0x3c4e81(0xe4))/0x7*(-parseInt(_0x3c4e81(0xb9))/0x8)+-parseInt(_0x3c4e81(0xcf))/0x9+-parseInt(_0x3c4e81(0xc5))/0xa;if(_0x3a7f50===_0x4cf722)break;else _0x234db1['push'](_0x234db1['shift']());}catch(_0x39f3fb){_0x234db1['push'](_0x234db1['shift']());}}}(a161_0x1539,0x7bc8c));function a161_0x144c(_0xb6729c,_0x195d5b){const _0x1b4e9c=a161_0x1539();return a161_0x144c=function(_0x1936ed,_0x42bed9){_0x1936ed=_0x1936ed-0xb6;let _0x153949=_0x1b4e9c[_0x1936ed];return _0x153949;},a161_0x144c(_0xb6729c,_0x195d5b);}const a161_0x42bed9=(function(){let _0x16c3bf=!![];return function(_0xab178,_0x428efe){const _0x359505=_0x16c3bf?function(){const _0x16760e=a161_0x144c;if(_0x428efe){const _0x2edc33=_0x428efe[_0x16760e(0x103)](_0xab178,arguments);return _0x428efe=null,_0x2edc33;}}:function(){};return _0x16c3bf=![],_0x359505;};}()),a161_0x1936ed=a161_0x42bed9(this,function(){const _0x5af55e=a161_0x144c;return a161_0x1936ed['toString']()[_0x5af55e(0xc3)](_0x5af55e(0xe9))[_0x5af55e(0xd1)]()['constructor'](a161_0x1936ed)[_0x5af55e(0xc3)]('(((.+)+)+)+$');});a161_0x1936ed();'use strict';var __importDefault=this&&this[a161_0x177a9e(0xc1)]||function(_0x348516){const _0x3c61c8=a161_0x177a9e;return _0x348516&&_0x348516[_0x3c61c8(0xd2)]?_0x348516:{'default':_0x348516};};Object['defineProperty'](exports,a161_0x177a9e(0xd2),{'value':!![]}),exports[a161_0x177a9e(0xe7)]=exports[a161_0x177a9e(0xce)]=exports[a161_0x177a9e(0xdb)]=exports[a161_0x177a9e(0xf0)]=exports[a161_0x177a9e(0xfe)]=exports[a161_0x177a9e(0xda)]=exports[a161_0x177a9e(0xbb)]=exports[a161_0x177a9e(0xf4)]=exports[a161_0x177a9e(0x101)]=exports[a161_0x177a9e(0x102)]=exports[a161_0x177a9e(0xf9)]=void 0x0;const constants_1=require(a161_0x177a9e(0xf8)),path_1=__importDefault(require(a161_0x177a9e(0xf2))),child_types_map_1=__importDefault(require(a161_0x177a9e(0xfa))),parent_xml_types_1=__importDefault(require(a161_0x177a9e(0xc0))),xml_v2_1=require(a161_0x177a9e(0xb6)),crc_32_1=__importDefault(require(a161_0x177a9e(0xe2))),parent_xml_types_map_1=__importDefault(require(a161_0x177a9e(0xfd))),fs_internal_1=require(a161_0x177a9e(0xed));function convertToCleanPaths(_0x2b90e3){const _0x3fdade=a161_0x177a9e,_0x123190=_0x2b90e3[_0x3fdade(0xc6)](_0x118ffb=>_0x118ffb['endsWith'](constants_1[_0x3fdade(0xba)])),_0x22817a=_0x123190[_0x3fdade(0xca)](_0x1a2f92=>_0x1a2f92[_0x3fdade(0xc2)](new RegExp(constants_1[_0x3fdade(0xba)]+'$'),'')),_0x4efbc3=_0x2b90e3[_0x3fdade(0xc6)](_0x32ecc5=>!_0x123190[_0x3fdade(0xc8)](_0x32ecc5));return[...new Set([..._0x4efbc3,..._0x22817a])];}exports[a161_0x177a9e(0xf9)]=convertToCleanPaths;function filterParserPaths(_0x57e3cd){const _0xffde6d=a161_0x177a9e,_0x139da9=[...new Set(_0x57e3cd[_0xffde6d(0xc6)](_0x396d68=>!_0x396d68['endsWith'](constants_1[_0xffde6d(0xba)])))],_0x22c669=_0x57e3cd[_0xffde6d(0xc6)](_0x43b80c=>_0x43b80c[_0xffde6d(0xe3)](constants_1[_0xffde6d(0xba)]))['filter'](_0x4808b4=>!_0x139da9[_0xffde6d(0xc8)](_0x4808b4[_0xffde6d(0xc2)](constants_1['META_XML_EXTENSION'],'')));return[..._0x22c669,..._0x139da9];}exports['filterParserPaths']=filterParserPaths;function getChildComponentTypeByChildNodeName(_0x1e2f5a){const _0x3206ba=a161_0x177a9e,_0x5e2df3=Object[_0x3206ba(0xf7)](child_types_map_1['default'])[_0x3206ba(0xd6)](([_0x533348,_0x1d0c97])=>_0x1d0c97===_0x1e2f5a);if(!_0x5e2df3)throw new Error(_0x3206ba(0xef)+_0x1e2f5a);return _0x5e2df3[0x0];}exports[a161_0x177a9e(0x101)]=getChildComponentTypeByChildNodeName;function extractFilenameFromPath(_0x5d6336){const _0x40fa2a=a161_0x177a9e,_0x4d99f3=_0x5d6336['split'](path_1[_0x40fa2a(0xc9)][_0x40fa2a(0xee)]),_0x4db5c2=path_1[_0x40fa2a(0xc9)][_0x40fa2a(0xd3)](_0x5d6336[_0x40fa2a(0xc2)](constants_1[_0x40fa2a(0xba)],''),path_1[_0x40fa2a(0xc9)][_0x40fa2a(0xd0)](_0x5d6336));if(_0x4d99f3[_0x40fa2a(0xd5)]>0x2)return _0x4d99f3[_0x4d99f3[_0x40fa2a(0xd5)]-0x2]+'/'+_0x4db5c2;return _0x4db5c2;}exports[a161_0x177a9e(0xf4)]=extractFilenameFromPath;function isParentComponent({type:_0x236212}){const _0x2585fa=a161_0x177a9e;return parent_xml_types_1[_0x2585fa(0xc9)][_0x2585fa(0xc8)](_0x236212);}exports['isParentComponent']=isParentComponent;function isParentComponentFile(_0x5f4f42){const _0xab42e2=a161_0x177a9e,_0x47b60d=path_1[_0xab42e2(0xc9)][_0xab42e2(0xc4)](_0x5f4f42);return Object[_0xab42e2(0xd4)](parent_xml_types_map_1[_0xab42e2(0xc9)])[_0xab42e2(0xec)](_0x14d25a=>_0x47b60d[_0xab42e2(0xfb)][_0xab42e2(0xe3)](_0x14d25a));}exports[a161_0x177a9e(0xda)]=isParentComponentFile;function calculateCRC32(_0x30a2a7){const _0x447522=a161_0x177a9e,_0x5aa38c=Object[_0x447522(0xe0)](_0x30a2a7['files'])[_0x447522(0xd8)]();switch(_0x5aa38c['length']){case 0x1:{const [_0x4f5258]=_0x5aa38c,_0x53045b=_0x30a2a7[_0x447522(0xbf)][_0x4f5258];return crc_32_1[_0x447522(0xc9)]['str'](_0x53045b[_0x447522(0xd1)](_0x447522(0xf5)),0x20)[_0x447522(0xd1)]();}case 0x2:{const [_0x1d09f7,_0x20c092]=_0x5aa38c,_0x3dbdba=_0x30a2a7[_0x447522(0xbf)][_0x1d09f7],_0x137d2c=_0x30a2a7['files'][_0x20c092];return crc_32_1['default'][_0x447522(0xff)](_0x3dbdba[_0x447522(0xd1)](_0x447522(0xf5)),0x20)['toString']()+'\x20'+crc_32_1[_0x447522(0xc9)][_0x447522(0xff)](_0x137d2c['toString'](_0x447522(0xf5)),0x20)[_0x447522(0xd1)]();}default:{let _0x4759e4=0x0;if(_0x5aa38c['length']>0x0)_0x4759e4=crc_32_1['default'][_0x447522(0xff)](_0x30a2a7[_0x447522(0xbf)][_0x5aa38c[0x0]]['toString']('utf-8'),0x20);for(let _0x947529=0x1;_0x947529<_0x5aa38c['length'];_0x947529++){const _0x1570f2=crc_32_1[_0x447522(0xc9)][_0x447522(0xff)](_0x30a2a7[_0x447522(0xbf)][_0x5aa38c[_0x947529]][_0x447522(0xd1)](_0x447522(0xf5)),0x20);_0x4759e4=Math[_0x447522(0xd7)]((_0x1570f2+_0x4759e4)/0x2);}return _0x4759e4[_0x447522(0xd1)]();}}}exports[a161_0x177a9e(0xfe)]=calculateCRC32;function createChildComponentsFromParent(_0x2a5900,_0x1f309a,_0x243e46){const _0x2115aa=a161_0x177a9e,_0x1767d9=[];for(const _0x3c88f7 of _0x243e46){const _0x4ba262=xml_v2_1[_0x2115aa(0xc7)]['addChildNode'](xml_v2_1['XmlV2'][_0x2115aa(0xdf)](_0x1f309a),_0x3c88f7[_0x2115aa(0xbd)],_0x3c88f7['nodeData']),_0x4caa69={};_0x4caa69[_0x2115aa(0xf1)]=_0x2a5900['filePath'],_0x4caa69[_0x2115aa(0xbe)]=getChildComponentTypeByChildNodeName(_0x3c88f7[_0x2115aa(0xbd)]),_0x2a5900[_0x2115aa(0xbe)]==='CustomLabels'?_0x4caa69['name']=_0x3c88f7[_0x2115aa(0xdd)]['fullName']:_0x4caa69[_0x2115aa(0xeb)]=_0x2a5900[_0x2115aa(0xeb)]+'.'+_0x3c88f7[_0x2115aa(0xdd)][_0x2115aa(0xe1)],_0x4caa69[_0x2115aa(0xbf)]={[Object[_0x2115aa(0xe0)](_0x2a5900[_0x2115aa(0xbf)])[0x0]]:Buffer[_0x2115aa(0xf6)](xml_v2_1[_0x2115aa(0xc7)][_0x2115aa(0xea)](_0x4ba262,![]))},_0x4caa69[_0x2115aa(0xe5)]=calculateCRC32(_0x4caa69),_0x1767d9[_0x2115aa(0xb7)](_0x4caa69);}return _0x1767d9;}exports[a161_0x177a9e(0xf0)]=createChildComponentsFromParent;function a161_0x1539(){const _0x4975a0=['fullName','crc-32','endsWith','70OJxJkP','crc','Cannot\x20identify\x20component\x20type.\x20At\x20file\x20[','readFilesByFilename','485505uzntAb','(((.+)+)+)+$','convertToString','name','some','../../internal/fs.internal','sep','Unknown\x20child\x20type\x20for\x20','createChildComponentsFromParent','filePath','path','2hsFyWI','extractFilenameFromPath','utf-8','from','entries','../../../../constants','convertToCleanPaths','../data/child-types-map','dir','match','../data/parent-xml-types-map','calculateCRC32','str','readDir','getChildComponentTypeByChildNodeName','filterParserPaths','apply','./xml-v2','push','join','581816AEInCX','META_XML_EXTENSION','isParentComponent','1392072CnuTQk','nodeName','type','files','../data/parent-xml-types','__importDefault','replace','search','parse','9117350lIaWKq','filter','XmlV2','includes','default','map','12xrrSRA','536230sCwncM','1295864zXNQtc','extractComponentTypeFromFiles','3307662qabKQw','extname','toString','__esModule','basename','values','length','find','round','sort','indexOf','isParentComponentFile','extractFileNameFromFiles','[./-]{1}','nodeData','relative','createEmptyRootNodeFrom','keys'];a161_0x1539=function(){return _0x4975a0;};return a161_0x1539();}function extractFileNameFromFiles({files:_0x2afb1a}){const _0x329860=a161_0x177a9e;var _0x3e0c4;const _0x59886e=Object['keys'](_0x2afb1a);return((_0x3e0c4=_0x59886e[0x0])===null||_0x3e0c4===void 0x0?void 0x0:_0x3e0c4['replace'](constants_1[_0x329860(0xba)],''))||'';}exports[a161_0x177a9e(0xdb)]=extractFileNameFromFiles;async function extractComponentTypeFromFiles({files:_0x279d05}){const _0x3f64b2=a161_0x177a9e,_0x550a17=Object[_0x3f64b2(0xe0)](_0x279d05),_0x4eef84=_0x550a17[_0x3f64b2(0xd6)](_0x462679=>_0x462679[_0x3f64b2(0xe3)](constants_1[_0x3f64b2(0xba)]))||_0x550a17[0x0];try{const _0x2399c6=await xml_v2_1[_0x3f64b2(0xc7)][_0x3f64b2(0xc4)](_0x279d05[_0x4eef84]['toString']('utf-8')),_0x20828f=Object['keys'](_0x2399c6)[0x0];if(!_0x20828f)throw new Error();return _0x20828f;}catch(_0x45bb2d){throw new Error(_0x3f64b2(0xe6)+_0x550a17[_0x3f64b2(0xd9)](_0x4eef84)+']\x20index\x20in\x20('+_0x550a17[_0x3f64b2(0xb8)](',\x20')+')');}}exports[a161_0x177a9e(0xce)]=extractComponentTypeFromFiles;async function readFilesByFilename(_0x5ed5bf,_0x1c90d5){const _0x7a390f=a161_0x177a9e,_0x4236d5=path_1[_0x7a390f(0xc9)]['dirname'](_0x5ed5bf),_0x520df8=path_1[_0x7a390f(0xc9)]['join'](_0x1c90d5,_0x4236d5),_0x2f968a=await fs_internal_1['FS'][_0x7a390f(0x100)](_0x520df8,!![]),_0x174a58=_0x2f968a[_0x7a390f(0xca)](_0x47e275=>path_1[_0x7a390f(0xc9)][_0x7a390f(0xde)](_0x1c90d5,_0x47e275)),_0x56ea52=new RegExp('^'+_0x5ed5bf+_0x7a390f(0xdc));return _0x174a58[_0x7a390f(0xc6)](_0x286734=>_0x286734[_0x7a390f(0xfc)](_0x56ea52));}exports[a161_0x177a9e(0xe7)]=readFilesByFilename;