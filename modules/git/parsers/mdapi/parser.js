function a147_0x4427(_0x3db01a,_0x563955){const _0xc051bc=a147_0x507e();return a147_0x4427=function(_0x4a6f01,_0x357355){_0x4a6f01=_0x4a6f01-0xd0;let _0x507e21=_0xc051bc[_0x4a6f01];return _0x507e21;},a147_0x4427(_0x3db01a,_0x563955);}const a147_0x18858e=a147_0x4427;(function(_0x73794d,_0x118fe4){const _0x206019=a147_0x4427,_0x1af136=_0x73794d();while(!![]){try{const _0x387e17=parseInt(_0x206019(0x10b))/0x1+parseInt(_0x206019(0x107))/0x2+-parseInt(_0x206019(0x11b))/0x3*(-parseInt(_0x206019(0xf3))/0x4)+-parseInt(_0x206019(0x11e))/0x5+parseInt(_0x206019(0xd6))/0x6+parseInt(_0x206019(0xfe))/0x7+-parseInt(_0x206019(0xea))/0x8*(parseInt(_0x206019(0x10d))/0x9);if(_0x387e17===_0x118fe4)break;else _0x1af136['push'](_0x1af136['shift']());}catch(_0x444d54){_0x1af136['push'](_0x1af136['shift']());}}}(a147_0x507e,0xa1edc));const a147_0x357355=(function(){let _0x21d0aa=!![];return function(_0x424bca,_0x11aebb){const _0x28948f=_0x21d0aa?function(){const _0x483227=a147_0x4427;if(_0x11aebb){const _0x5df49d=_0x11aebb[_0x483227(0xfa)](_0x424bca,arguments);return _0x11aebb=null,_0x5df49d;}}:function(){};return _0x21d0aa=![],_0x28948f;};}()),a147_0x4a6f01=a147_0x357355(this,function(){const _0x368ae8=a147_0x4427;return a147_0x4a6f01[_0x368ae8(0x117)]()['search'](_0x368ae8(0xe9))['toString']()[_0x368ae8(0x109)](a147_0x4a6f01)['search'](_0x368ae8(0xe9));});a147_0x4a6f01();'use strict';var __importDefault=this&&this[a147_0x18858e(0xe5)]||function(_0x5b164b){const _0x3ea2d4=a147_0x18858e;return _0x5b164b&&_0x5b164b[_0x3ea2d4(0xee)]?_0x5b164b:{'default':_0x5b164b};};function a147_0x507e(){const _0x5a55ed=['3517461lnygVV','../utils/crc32','WaveTemplateBundle','readFile','isParentComponent','default','hasChildNodes','endsWith','all','exists','toString','path','join','../data/settings-types-list','42kbjHEu','filePath','META_EXPERIENCES_EXTENSION','5294340iMCuzl','readChildComponents','push','paths','isSFDXProject','BUNDLED_FOLDERS_REGEXP','readComponentFiles','extractFilenameFromPath','1512324CZiKmP','logger','filter','package.xml','relative','../../../../core','../../internal/fs.internal','startsWith','catch','experiences','Component\x20\x22','error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','error','find','../../../../constants','__importDefault','META_EXTENSION','files','createChildComponentsFromParent','(((.+)+)+)+$','16zRZWuZ','../utils','Settings','parse','__esModule','readDir','extractFileNameFromFiles','../utils/xml','dir','137972vDiKSn','crc','test','MDApiParser','extname','CustomLabels','getChildsByName','apply','\x22\x20not\x20found\x20in\x20\x22','Xml','map','624246tiKUCq','../data/child-types-map','../../devops/utils/git-commit.utils','isDir','utf-8','init','.site-meta.xml','../data/folder-types','type','2393404PbCzVA','name','constructor','includes','482950VdPmVE','readBundledFiles'];a147_0x507e=function(){return _0x5a55ed;};return a147_0x507e();}Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a147_0x18858e(0xf6)]=void 0x0;const fs_internal_1=require(a147_0x18858e(0xdc)),utils_1=require(a147_0x18858e(0xeb)),path_1=require(a147_0x18858e(0x118)),xml_1=require(a147_0x18858e(0xf1)),child_types_map_1=__importDefault(require(a147_0x18858e(0xff))),constants_1=require(a147_0x18858e(0xe4)),core_1=require(a147_0x18858e(0xdb)),git_commit_utils_1=require(a147_0x18858e(0x100)),crc32_1=require(a147_0x18858e(0x10e)),folder_types_1=__importDefault(require(a147_0x18858e(0x105))),settings_types_list_1=__importDefault(require(a147_0x18858e(0x11a))),CHILD_XML_KEYS=Object['values'](child_types_map_1[a147_0x18858e(0x112)]);class MDApiParser{constructor(_0x479d82,_0x1cda06,_0x10f82e){const _0x56f69e=a147_0x18858e;this[_0x56f69e(0xf2)]=_0x479d82,this[_0x56f69e(0xd2)]=_0x10f82e,this[_0x56f69e(0xd7)]=new core_1['Logger'](MDApiParser[_0x56f69e(0x108)]),this[_0x56f69e(0xe6)]='-meta.xml',this[_0x56f69e(0x11d)]=_0x56f69e(0x104),this[_0x56f69e(0xd1)]=_0x1cda06;}async[a147_0x18858e(0x11f)](_0x4c9c65){const _0xffa6f0=a147_0x18858e;try{const _0x1a8173=await xml_1['Xml'][_0xffa6f0(0xed)](Object['values'](_0x4c9c65['files'])[0x0]['toString'](_0xffa6f0(0x102))),_0x4898f0=CHILD_XML_KEYS[_0xffa6f0(0xd8)](_0x5d1d59=>xml_1[_0xffa6f0(0xfc)][_0xffa6f0(0x113)](_0x1a8173,_0x5d1d59))['reduce']((_0x1b520b,_0x275e4e)=>[..._0x1b520b,...xml_1[_0xffa6f0(0xfc)][_0xffa6f0(0xf9)](_0x1a8173,_0x275e4e)],[]);return(0x0,utils_1[_0xffa6f0(0xe8)])(_0x4c9c65,_0x1a8173,_0x4898f0);}catch(_0xc99eae){throw new Error('Cannot\x20parse\x20childs\x20in\x20'+_0x4c9c65['name']+'\x20['+_0x4c9c65[_0xffa6f0(0x106)]+']');}}async[a147_0x18858e(0x10c)](_0xe2b62c){const _0x34b4a6=a147_0x18858e,_0x575d78=(0x0,path_1[_0x34b4a6(0x119)])(this[_0x34b4a6(0xf2)],_0xe2b62c),_0x586e48=_0xe2b62c+(_0xe2b62c[_0x34b4a6(0xdd)](_0x34b4a6(0xdf))?this[_0x34b4a6(0x11d)]:this[_0x34b4a6(0xe6)]),_0x4ce90a=await fs_internal_1['FS'][_0x34b4a6(0xef)](_0x575d78,!![]),_0x5b0bf0=await fs_internal_1['FS'][_0x34b4a6(0x110)]((0x0,path_1[_0x34b4a6(0x119)])(this[_0x34b4a6(0xf2)],_0x586e48),!![])['catch'](()=>null),_0x2507d0={};for(const _0x1f5c15 of _0x4ce90a){_0x2507d0[(0x0,path_1[_0x34b4a6(0xda)])(this[_0x34b4a6(0xf2)],_0x1f5c15)]=await fs_internal_1['FS'][_0x34b4a6(0x110)](_0x1f5c15,!![]);}return _0x5b0bf0&&(_0x2507d0[(0x0,path_1[_0x34b4a6(0xda)])(this['dir'],_0x586e48)]=_0x5b0bf0),_0x2507d0;}async[a147_0x18858e(0xd4)](_0x402cfb){const _0xb00270=a147_0x18858e;let _0x1eec13=_0x402cfb+this[_0xb00270(0xe6)];if(constants_1[_0xb00270(0xd3)][_0xb00270(0xf5)](_0x402cfb))return this['readBundledFiles'](_0x402cfb);if(await fs_internal_1['FS'][_0xb00270(0x101)]((0x0,path_1[_0xb00270(0x119)])(this[_0xb00270(0xf2)],_0x402cfb))||await fs_internal_1['FS'][_0xb00270(0x116)]((0x0,path_1[_0xb00270(0x119)])(this[_0xb00270(0xf2)],_0x1eec13))){const _0x4d594e=await fs_internal_1['FS'][_0xb00270(0x110)]((0x0,path_1[_0xb00270(0x119)])(this[_0xb00270(0xf2)],_0x1eec13),!![]),_0x23aebc=await(0x0,utils_1['extractComponentTypeFromFiles'])({'files':{[_0x1eec13]:_0x4d594e}})['catch'](()=>null);if(_0x23aebc&&folder_types_1['default'][_0xb00270(0x10a)](_0x23aebc))return{[_0x1eec13]:await fs_internal_1['FS'][_0xb00270(0x110)]((0x0,path_1['join'])(this[_0xb00270(0xf2)],_0x1eec13),!![])};}if(!(0x0,path_1[_0xb00270(0xf7)])(_0x402cfb)&&this[_0xb00270(0xd2)]){const _0x343285=_0x402cfb['split']('/')[0x0],_0x2079ec=(await fs_internal_1['FS'][_0xb00270(0xef)]((0x0,path_1[_0xb00270(0x119)])(this['dir'],_0x343285)))[_0xb00270(0xe3)](_0x6937a0=>(0x0,git_commit_utils_1['isPathsEquals'])(_0x6937a0,(0x0,path_1['join'])(this['dir'],_0x402cfb)));if(!_0x2079ec)throw new Error(_0xb00270(0xe0)+_0x402cfb+_0xb00270(0xfb)+_0x343285+'\x22');_0x402cfb=(0x0,path_1['relative'])(this[_0xb00270(0xf2)],_0x2079ec),_0x1eec13=_0x402cfb+this['META_EXTENSION'];}const [_0x315ae3,_0x1f8eb7]=await Promise[_0xb00270(0x115)]([fs_internal_1['FS'][_0xb00270(0x110)]((0x0,path_1[_0xb00270(0x119)])(this[_0xb00270(0xf2)],_0x402cfb),!![])[_0xb00270(0xde)](()=>null),fs_internal_1['FS'][_0xb00270(0x110)]((0x0,path_1['join'])(this['dir'],_0x1eec13),!![])[_0xb00270(0xde)](()=>null)]);return{..._0x315ae3?{[_0x402cfb]:_0x315ae3}:{},..._0x1f8eb7?{[_0x1eec13]:_0x1f8eb7}:{}};}async[a147_0x18858e(0x103)](){const _0x4457a5=a147_0x18858e,_0x529f4e=[...this[_0x4457a5(0xd1)]];if(this[_0x4457a5(0xd2)])for(const _0x5d11fd of _0x529f4e){if(constants_1[_0x4457a5(0xd3)]['test'](_0x5d11fd))continue;if(await fs_internal_1['FS'][_0x4457a5(0x101)]((0x0,path_1[_0x4457a5(0x119)])(this[_0x4457a5(0xf2)],_0x5d11fd))){const _0x374d71=await fs_internal_1['FS'][_0x4457a5(0xef)]((0x0,path_1[_0x4457a5(0x119)])(this[_0x4457a5(0xf2)],_0x5d11fd),!![]);_0x529f4e[_0x4457a5(0xd0)](..._0x374d71[_0x4457a5(0xfd)](_0x115ea7=>(0x0,path_1[_0x4457a5(0xda)])(this[_0x4457a5(0xf2)],_0x115ea7)));}}this[_0x4457a5(0xd1)]=(0x0,utils_1['convertToCleanPaths'])(_0x529f4e);}async['parse'](){const _0x1959e3=a147_0x18858e;await this[_0x1959e3(0x103)]();const _0x1fbc05=[];for(const _0x8eb726 of this[_0x1959e3(0xd1)]){if(_0x8eb726[_0x1959e3(0x114)](_0x1959e3(0xd9)))continue;const _0x23492c={};try{_0x23492c['files']=await this['readComponentFiles'](_0x8eb726),_0x23492c[_0x1959e3(0x11c)]=constants_1[_0x1959e3(0xd3)][_0x1959e3(0xf5)](_0x8eb726)?_0x8eb726:(0x0,utils_1[_0x1959e3(0xf0)])({'files':_0x23492c[_0x1959e3(0xe7)]}),_0x8eb726[_0x1959e3(0xdd)]('waveTemplates')?_0x23492c[_0x1959e3(0x106)]=_0x1959e3(0x10f):_0x23492c[_0x1959e3(0x106)]=await(0x0,utils_1['extractComponentTypeFromFiles'])({'files':_0x23492c[_0x1959e3(0xe7)]});}catch(_0x205509){this[_0x1959e3(0xd7)][_0x1959e3(0xe2)](_0x1959e3(0xe1),_0x8eb726,_0x205509);continue;}_0x23492c[_0x1959e3(0x108)]=(0x0,utils_1[_0x1959e3(0xd5)])(_0x8eb726),_0x23492c[_0x1959e3(0xf4)]=(0x0,crc32_1['calculateCRC32'])(_0x23492c);if((0x0,utils_1[_0x1959e3(0x111)])(_0x23492c)){const _0x52361c=await this[_0x1959e3(0x11f)](_0x23492c);_0x1fbc05[_0x1959e3(0xd0)](..._0x52361c);}if(_0x23492c[_0x1959e3(0x106)]===_0x1959e3(0xf8))continue;settings_types_list_1['default']['includes'](_0x23492c['type'])&&(_0x23492c[_0x1959e3(0x106)]=_0x1959e3(0xec)),_0x1fbc05[_0x1959e3(0xd0)](_0x23492c);}return _0x1fbc05;}}exports[a147_0x18858e(0xf6)]=MDApiParser;