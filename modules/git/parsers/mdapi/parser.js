const a150_0x4533c5=a150_0x51ea;function a150_0x1f46(){const _0x3389fd=['values','apply','CustomLabels','parse','map','MDApiParser','name','error','../data/folder-types','getChildsByName','Settings','5285WszOuU','1068968YgdWMX','Cannot\x20parse\x20childs\x20in\x20','230yGaPjl','(((.+)+)+)+$','logger','readBundledFiles','error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','defineProperty','1510VvFBPB','WaveTemplateBundle','isParentComponent','paths','META_EXPERIENCES_EXTENSION','160692owrYzz','experiences','join','readComponentFiles','package.xml','80361iuhroL','readChildComponents','Component\x20\x22','filter','default','search','142456pKKfsV','__esModule','init','../utils/xml','catch','includes','relative','../../../../constants','378164PDuQgz','isDir','all','extractComponentTypeFromFiles','hasChildNodes','startsWith','511DruMIh','extractFileNameFromFiles','isSFDXProject','-meta.xml','37961506gpHlKc','../../internal/fs.internal','exists','convertToCleanPaths','test','isPathsEquals','dir','\x22\x20not\x20found\x20in\x20\x22','toString','9jIuMpd','../data/child-types-map','find','extractFilenameFromPath','../../devops/utils/git-commit.utils','BUNDLED_FOLDERS_REGEXP','files','../utils','readFile','constructor','.site-meta.xml','path','crc','Xml','filePath','__importDefault','META_EXTENSION','push','readDir','type'];a150_0x1f46=function(){return _0x3389fd;};return a150_0x1f46();}(function(_0x22785f,_0x2e9063){const _0x127c42=a150_0x51ea,_0x48aab5=_0x22785f();while(!![]){try{const _0x553822=parseInt(_0x127c42(0x149))/0x1+parseInt(_0x127c42(0x14a))/0x2+-parseInt(_0x127c42(0x12a))/0x3*(parseInt(_0x127c42(0x117))/0x4)+parseInt(_0x127c42(0x14c))/0x5*(parseInt(_0x127c42(0x104))/0x6)+-parseInt(_0x127c42(0x11d))/0x7*(-parseInt(_0x127c42(0x10f))/0x8)+-parseInt(_0x127c42(0x109))/0x9*(-parseInt(_0x127c42(0x152))/0xa)+-parseInt(_0x127c42(0x121))/0xb;if(_0x553822===_0x2e9063)break;else _0x48aab5['push'](_0x48aab5['shift']());}catch(_0x147b3c){_0x48aab5['push'](_0x48aab5['shift']());}}}(a150_0x1f46,0xa74ce));const a150_0x486ee0=(function(){let _0x3808c1=!![];return function(_0x1691a4,_0x57b4a6){const _0x3c1431=_0x3808c1?function(){const _0x2fe41c=a150_0x51ea;if(_0x57b4a6){const _0xdbbcb7=_0x57b4a6[_0x2fe41c(0x13f)](_0x1691a4,arguments);return _0x57b4a6=null,_0xdbbcb7;}}:function(){};return _0x3808c1=![],_0x3c1431;};}()),a150_0x41e13d=a150_0x486ee0(this,function(){const _0x36a16e=a150_0x51ea;return a150_0x41e13d[_0x36a16e(0x129)]()['search']('(((.+)+)+)+$')[_0x36a16e(0x129)]()[_0x36a16e(0x133)](a150_0x41e13d)[_0x36a16e(0x10e)](_0x36a16e(0x14d));});a150_0x41e13d();'use strict';var __importDefault=this&&this[a150_0x4533c5(0x139)]||function(_0x2812fa){const _0x1795d5=a150_0x4533c5;return _0x2812fa&&_0x2812fa[_0x1795d5(0x110)]?_0x2812fa:{'default':_0x2812fa};};Object[a150_0x4533c5(0x151)](exports,'__esModule',{'value':!![]}),exports[a150_0x4533c5(0x143)]=void 0x0;function a150_0x51ea(_0x88991a,_0x2230f0){const _0x458dc7=a150_0x1f46();return a150_0x51ea=function(_0x41e13d,_0x486ee0){_0x41e13d=_0x41e13d-0x101;let _0x1f46a7=_0x458dc7[_0x41e13d];return _0x1f46a7;},a150_0x51ea(_0x88991a,_0x2230f0);}const fs_internal_1=require(a150_0x4533c5(0x122)),utils_1=require(a150_0x4533c5(0x131)),path_1=require(a150_0x4533c5(0x135)),xml_1=require(a150_0x4533c5(0x112)),child_types_map_1=__importDefault(require(a150_0x4533c5(0x12b))),constants_1=require(a150_0x4533c5(0x116)),core_1=require('../../../../core'),git_commit_utils_1=require(a150_0x4533c5(0x12e)),crc32_1=require('../utils/crc32'),folder_types_1=__importDefault(require(a150_0x4533c5(0x146))),settings_types_list_1=__importDefault(require('../data/settings-types-list')),CHILD_XML_KEYS=Object['values'](child_types_map_1['default']);class MDApiParser{constructor(_0x2618c7,_0xd8c90b,_0x290c8e){const _0x5ddd90=a150_0x4533c5;this[_0x5ddd90(0x127)]=_0x2618c7,this[_0x5ddd90(0x11f)]=_0x290c8e,this[_0x5ddd90(0x14e)]=new core_1['Logger'](MDApiParser[_0x5ddd90(0x144)]),this[_0x5ddd90(0x13a)]=_0x5ddd90(0x120),this[_0x5ddd90(0x103)]=_0x5ddd90(0x134),this[_0x5ddd90(0x102)]=_0xd8c90b;}async[a150_0x4533c5(0x10a)](_0x2d9094){const _0x719a62=a150_0x4533c5;try{const _0x33d209=await xml_1[_0x719a62(0x137)][_0x719a62(0x141)](Object[_0x719a62(0x13e)](_0x2d9094['files'])[0x0][_0x719a62(0x129)]('utf-8')),_0x6819e=CHILD_XML_KEYS[_0x719a62(0x10c)](_0x2fd33c=>xml_1[_0x719a62(0x137)][_0x719a62(0x11b)](_0x33d209,_0x2fd33c))['reduce']((_0x2a552d,_0x56912d)=>[..._0x2a552d,...xml_1['Xml'][_0x719a62(0x147)](_0x33d209,_0x56912d)],[]);return(0x0,utils_1['createChildComponentsFromParent'])(_0x2d9094,_0x33d209,_0x6819e);}catch(_0x2ad32b){throw new Error(_0x719a62(0x14b)+_0x2d9094[_0x719a62(0x144)]+'\x20['+_0x2d9094[_0x719a62(0x13d)]+']');}}async[a150_0x4533c5(0x14f)](_0x3a5d5a){const _0x2459c5=a150_0x4533c5,_0x409f62=(0x0,path_1[_0x2459c5(0x106)])(this[_0x2459c5(0x127)],_0x3a5d5a),_0x46c6cc=_0x3a5d5a+(_0x3a5d5a[_0x2459c5(0x11c)](_0x2459c5(0x105))?this['META_EXPERIENCES_EXTENSION']:this[_0x2459c5(0x13a)]),_0xd51e=await fs_internal_1['FS'][_0x2459c5(0x13c)](_0x409f62,!![]),_0x5b7c4c=await fs_internal_1['FS'][_0x2459c5(0x132)]((0x0,path_1[_0x2459c5(0x106)])(this[_0x2459c5(0x127)],_0x46c6cc),!![])[_0x2459c5(0x113)](()=>null),_0x5981c9={};for(const _0x412120 of _0xd51e){_0x5981c9[(0x0,path_1[_0x2459c5(0x115)])(this[_0x2459c5(0x127)],_0x412120)]=await fs_internal_1['FS'][_0x2459c5(0x132)](_0x412120,!![]);}return _0x5b7c4c&&(_0x5981c9[(0x0,path_1['relative'])(this[_0x2459c5(0x127)],_0x46c6cc)]=_0x5b7c4c),_0x5981c9;}async[a150_0x4533c5(0x107)](_0x35a9bc){const _0x50ed41=a150_0x4533c5;let _0x5bc84b=_0x35a9bc+this[_0x50ed41(0x13a)];if(constants_1[_0x50ed41(0x12f)]['test'](_0x35a9bc))return this[_0x50ed41(0x14f)](_0x35a9bc);if(await fs_internal_1['FS'][_0x50ed41(0x118)]((0x0,path_1[_0x50ed41(0x106)])(this[_0x50ed41(0x127)],_0x35a9bc))||await fs_internal_1['FS'][_0x50ed41(0x123)]((0x0,path_1[_0x50ed41(0x106)])(this['dir'],_0x5bc84b))){const _0x2c95bd=await fs_internal_1['FS'][_0x50ed41(0x132)]((0x0,path_1[_0x50ed41(0x106)])(this[_0x50ed41(0x127)],_0x5bc84b),!![]),_0x2fa2a7=await(0x0,utils_1['extractComponentTypeFromFiles'])({'files':{[_0x5bc84b]:_0x2c95bd}})[_0x50ed41(0x113)](()=>null);if(_0x2fa2a7&&folder_types_1[_0x50ed41(0x10d)][_0x50ed41(0x114)](_0x2fa2a7))return{[_0x5bc84b]:await fs_internal_1['FS'][_0x50ed41(0x132)]((0x0,path_1[_0x50ed41(0x106)])(this[_0x50ed41(0x127)],_0x5bc84b),!![])};}if(!(0x0,path_1['extname'])(_0x35a9bc)&&this[_0x50ed41(0x11f)]){const _0x3c9fc1=_0x35a9bc['split']('/')[0x0],_0xb319aa=(await fs_internal_1['FS'][_0x50ed41(0x13c)]((0x0,path_1[_0x50ed41(0x106)])(this[_0x50ed41(0x127)],_0x3c9fc1)))[_0x50ed41(0x12c)](_0x650f27=>(0x0,git_commit_utils_1[_0x50ed41(0x126)])(_0x650f27,(0x0,path_1[_0x50ed41(0x106)])(this[_0x50ed41(0x127)],_0x35a9bc)));if(!_0xb319aa)throw new Error(_0x50ed41(0x10b)+_0x35a9bc+_0x50ed41(0x128)+_0x3c9fc1+'\x22');_0x35a9bc=(0x0,path_1[_0x50ed41(0x115)])(this['dir'],_0xb319aa),_0x5bc84b=_0x35a9bc+this[_0x50ed41(0x13a)];}const [_0x13fa59,_0x3b5cf0]=await Promise[_0x50ed41(0x119)]([fs_internal_1['FS'][_0x50ed41(0x132)]((0x0,path_1['join'])(this[_0x50ed41(0x127)],_0x35a9bc),!![])[_0x50ed41(0x113)](()=>null),fs_internal_1['FS']['readFile']((0x0,path_1[_0x50ed41(0x106)])(this[_0x50ed41(0x127)],_0x5bc84b),!![])[_0x50ed41(0x113)](()=>null)]);return{..._0x13fa59?{[_0x35a9bc]:_0x13fa59}:{},..._0x3b5cf0?{[_0x5bc84b]:_0x3b5cf0}:{}};}async[a150_0x4533c5(0x111)](){const _0x4be7d0=a150_0x4533c5,_0x5c62ee=[...this[_0x4be7d0(0x102)]];if(this[_0x4be7d0(0x11f)])for(const _0x3aad99 of _0x5c62ee){if(constants_1[_0x4be7d0(0x12f)][_0x4be7d0(0x125)](_0x3aad99))continue;if(await fs_internal_1['FS']['isDir']((0x0,path_1['join'])(this['dir'],_0x3aad99))){const _0x32a35f=await fs_internal_1['FS'][_0x4be7d0(0x13c)]((0x0,path_1[_0x4be7d0(0x106)])(this[_0x4be7d0(0x127)],_0x3aad99),!![]);_0x5c62ee[_0x4be7d0(0x13b)](..._0x32a35f[_0x4be7d0(0x142)](_0x2e213e=>(0x0,path_1[_0x4be7d0(0x115)])(this['dir'],_0x2e213e)));}}this[_0x4be7d0(0x102)]=(0x0,utils_1[_0x4be7d0(0x124)])(_0x5c62ee);}async[a150_0x4533c5(0x141)](){const _0x35d548=a150_0x4533c5;await this['init']();const _0x3cef02=[];for(const _0xf855e4 of this[_0x35d548(0x102)]){if(_0xf855e4['endsWith'](_0x35d548(0x108)))continue;const _0x539dfc={};try{_0x539dfc[_0x35d548(0x130)]=await this['readComponentFiles'](_0xf855e4),_0x539dfc[_0x35d548(0x138)]=constants_1['BUNDLED_FOLDERS_REGEXP'][_0x35d548(0x125)](_0xf855e4)?_0xf855e4:(0x0,utils_1[_0x35d548(0x11e)])({'files':_0x539dfc[_0x35d548(0x130)]}),_0xf855e4[_0x35d548(0x11c)]('waveTemplates')?_0x539dfc[_0x35d548(0x13d)]=_0x35d548(0x153):_0x539dfc[_0x35d548(0x13d)]=await(0x0,utils_1[_0x35d548(0x11a)])({'files':_0x539dfc[_0x35d548(0x130)]});}catch(_0x3c4003){this[_0x35d548(0x14e)][_0x35d548(0x145)](_0x35d548(0x150),_0xf855e4,_0x3c4003);continue;}_0x539dfc[_0x35d548(0x144)]=(0x0,utils_1[_0x35d548(0x12d)])(_0xf855e4),_0x539dfc[_0x35d548(0x136)]=(0x0,crc32_1['calculateCRC32'])(_0x539dfc);if((0x0,utils_1[_0x35d548(0x101)])(_0x539dfc)){const _0x4aa558=await this['readChildComponents'](_0x539dfc);_0x3cef02[_0x35d548(0x13b)](..._0x4aa558);}if(_0x539dfc[_0x35d548(0x13d)]===_0x35d548(0x140))continue;settings_types_list_1[_0x35d548(0x10d)][_0x35d548(0x114)](_0x539dfc[_0x35d548(0x13d)])&&(_0x539dfc[_0x35d548(0x13d)]=_0x35d548(0x148)),_0x3cef02[_0x35d548(0x13b)](_0x539dfc);}return _0x3cef02;}}exports[a150_0x4533c5(0x143)]=MDApiParser;