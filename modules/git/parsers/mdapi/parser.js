const a146_0xae8a52=a146_0x3eec;(function(_0x555bdb,_0x32e700){const _0x55ea67=a146_0x3eec,_0x50dd3e=_0x555bdb();while(!![]){try{const _0x1f4773=parseInt(_0x55ea67(0xda))/0x1+parseInt(_0x55ea67(0xf6))/0x2*(parseInt(_0x55ea67(0xc5))/0x3)+parseInt(_0x55ea67(0xb1))/0x4*(-parseInt(_0x55ea67(0xf8))/0x5)+-parseInt(_0x55ea67(0xd2))/0x6*(parseInt(_0x55ea67(0xc8))/0x7)+-parseInt(_0x55ea67(0xce))/0x8*(-parseInt(_0x55ea67(0xdc))/0x9)+-parseInt(_0x55ea67(0xbc))/0xa*(parseInt(_0x55ea67(0xee))/0xb)+-parseInt(_0x55ea67(0xb9))/0xc*(-parseInt(_0x55ea67(0xec))/0xd);if(_0x1f4773===_0x32e700)break;else _0x50dd3e['push'](_0x50dd3e['shift']());}catch(_0x3a58b9){_0x50dd3e['push'](_0x50dd3e['shift']());}}}(a146_0x56fb,0xc9701));const a146_0x2f85e6=(function(){let _0x33ac60=!![];return function(_0x378f6a,_0x335b3e){const _0x309d3c=_0x33ac60?function(){const _0x3e60dc=a146_0x3eec;if(_0x335b3e){const _0x2323b9=_0x335b3e[_0x3e60dc(0xf3)](_0x378f6a,arguments);return _0x335b3e=null,_0x2323b9;}}:function(){};return _0x33ac60=![],_0x309d3c;};}()),a146_0x567c77=a146_0x2f85e6(this,function(){const _0x59bb7c=a146_0x3eec;return a146_0x567c77['toString']()[_0x59bb7c(0xb0)](_0x59bb7c(0xe0))[_0x59bb7c(0xca)]()['constructor'](a146_0x567c77)[_0x59bb7c(0xb0)](_0x59bb7c(0xe0));});a146_0x567c77();'use strict';var __importDefault=this&&this[a146_0xae8a52(0xf4)]||function(_0x299554){const _0x5f0426=a146_0xae8a52;return _0x299554&&_0x299554[_0x5f0426(0xd7)]?_0x299554:{'default':_0x299554};};Object[a146_0xae8a52(0xe5)](exports,'__esModule',{'value':!![]}),exports['MDApiParser']=void 0x0;function a146_0x56fb(){const _0x5c0b49=['path','relative','217555GzVpaH','split','2821170NLLTtD','isDir','reduce','exists','../data/settings-types-list','apply','__importDefault','extractFileNameFromFiles','10HvHrxz','dir','2920520DyTWwL','type','../data/child-types-map','crc','getChildsByName','Xml','search','4BqZvfn','filter','startsWith','includes','isSFDXProject','package.xml','createChildComponentsFromParent','readComponentFiles','636tIBHUC','paths','../utils','40NgLXFS','BUNDLED_FOLDERS_REGEXP','extractFilenameFromPath','-meta.xml','readDir','test','META_EXTENSION','waveTemplates','catch','646347brjqtd','extname','parse','35lLbgfo','readBundledFiles','toString','readFile','all','endsWith','296CXvnnD','join','logger','readChildComponents','751578qFSxrD','isPathsEquals','../utils/crc32','error','default','__esModule','../../internal/fs.internal','files','579299AuPzRD','.site-meta.xml','125973dogsrB','WaveTemplateBundle','META_EXPERIENCES_EXTENSION','Component\x20\x22','(((.+)+)+)+$','../utils/xml','filePath','find','CustomLabels','defineProperty','../../../../core','name','extractComponentTypeFromFiles','push'];a146_0x56fb=function(){return _0x5c0b49;};return a146_0x56fb();}function a146_0x3eec(_0x2bb765,_0x467e9a){const _0x86ace6=a146_0x56fb();return a146_0x3eec=function(_0x567c77,_0x2f85e6){_0x567c77=_0x567c77-0xac;let _0x56fb14=_0x86ace6[_0x567c77];return _0x56fb14;},a146_0x3eec(_0x2bb765,_0x467e9a);}const fs_internal_1=require(a146_0xae8a52(0xd8)),utils_1=require(a146_0xae8a52(0xbb)),path_1=require(a146_0xae8a52(0xea)),xml_1=require(a146_0xae8a52(0xe1)),child_types_map_1=__importDefault(require(a146_0xae8a52(0xac))),constants_1=require('../../../../constants'),core_1=require(a146_0xae8a52(0xe6)),git_commit_utils_1=require('../../devops/utils/git-commit.utils'),crc32_1=require(a146_0xae8a52(0xd4)),folder_types_1=__importDefault(require('../data/folder-types')),settings_types_list_1=__importDefault(require(a146_0xae8a52(0xf2))),CHILD_XML_KEYS=Object['values'](child_types_map_1[a146_0xae8a52(0xd6)]);class MDApiParser{constructor(_0x1922e6,_0x11b936,_0x5dfc21){const _0x230209=a146_0xae8a52;this['dir']=_0x1922e6,this[_0x230209(0xb5)]=_0x5dfc21,this[_0x230209(0xd0)]=new core_1['Logger'](MDApiParser[_0x230209(0xe7)]),this[_0x230209(0xc2)]=_0x230209(0xbf),this[_0x230209(0xde)]=_0x230209(0xdb),this[_0x230209(0xba)]=_0x11b936;}async[a146_0xae8a52(0xd1)](_0x2a420b){const _0x2d4ac3=a146_0xae8a52;try{const _0x24e5dc=await xml_1[_0x2d4ac3(0xaf)][_0x2d4ac3(0xc7)](Object['values'](_0x2a420b[_0x2d4ac3(0xd9)])[0x0][_0x2d4ac3(0xca)]('utf-8')),_0x46fdfd=CHILD_XML_KEYS[_0x2d4ac3(0xb2)](_0x48ae23=>xml_1[_0x2d4ac3(0xaf)]['hasChildNodes'](_0x24e5dc,_0x48ae23))[_0x2d4ac3(0xf0)]((_0x1cf608,_0x1a722f)=>[..._0x1cf608,...xml_1['Xml'][_0x2d4ac3(0xae)](_0x24e5dc,_0x1a722f)],[]);return(0x0,utils_1[_0x2d4ac3(0xb7)])(_0x2a420b,_0x24e5dc,_0x46fdfd);}catch(_0x1d6de4){throw new Error('Cannot\x20parse\x20childs\x20in\x20'+_0x2a420b[_0x2d4ac3(0xe7)]+'\x20['+_0x2a420b[_0x2d4ac3(0xf9)]+']');}}async[a146_0xae8a52(0xc9)](_0x7577ee){const _0x3a175a=a146_0xae8a52,_0x437db9=(0x0,path_1[_0x3a175a(0xcf)])(this[_0x3a175a(0xf7)],_0x7577ee),_0x36a763=_0x7577ee+(_0x7577ee[_0x3a175a(0xb3)]('experiences')?this[_0x3a175a(0xde)]:this[_0x3a175a(0xc2)]),_0x10e43a=await fs_internal_1['FS'][_0x3a175a(0xc0)](_0x437db9,!![]),_0x490669=await fs_internal_1['FS'][_0x3a175a(0xcb)]((0x0,path_1[_0x3a175a(0xcf)])(this[_0x3a175a(0xf7)],_0x36a763),!![])[_0x3a175a(0xc4)](()=>null),_0x6a4db9={};for(const _0x347565 of _0x10e43a){_0x6a4db9[(0x0,path_1[_0x3a175a(0xeb)])(this[_0x3a175a(0xf7)],_0x347565)]=await fs_internal_1['FS'][_0x3a175a(0xcb)](_0x347565,!![]);}return _0x490669&&(_0x6a4db9[(0x0,path_1[_0x3a175a(0xeb)])(this['dir'],_0x36a763)]=_0x490669),_0x6a4db9;}async[a146_0xae8a52(0xb8)](_0x2a271b){const _0x3632eb=a146_0xae8a52;let _0x393e4f=_0x2a271b+this[_0x3632eb(0xc2)];if(constants_1['BUNDLED_FOLDERS_REGEXP'][_0x3632eb(0xc1)](_0x2a271b))return this[_0x3632eb(0xc9)](_0x2a271b);if(await fs_internal_1['FS'][_0x3632eb(0xef)]((0x0,path_1[_0x3632eb(0xcf)])(this[_0x3632eb(0xf7)],_0x2a271b))||await fs_internal_1['FS'][_0x3632eb(0xf1)]((0x0,path_1[_0x3632eb(0xcf)])(this[_0x3632eb(0xf7)],_0x393e4f))){const _0x2097c2=await fs_internal_1['FS'][_0x3632eb(0xcb)]((0x0,path_1[_0x3632eb(0xcf)])(this[_0x3632eb(0xf7)],_0x393e4f),!![]),_0x555236=await(0x0,utils_1[_0x3632eb(0xe8)])({'files':{[_0x393e4f]:_0x2097c2}})[_0x3632eb(0xc4)](()=>null);if(_0x555236&&folder_types_1[_0x3632eb(0xd6)][_0x3632eb(0xb4)](_0x555236))return{[_0x393e4f]:await fs_internal_1['FS'][_0x3632eb(0xcb)]((0x0,path_1[_0x3632eb(0xcf)])(this[_0x3632eb(0xf7)],_0x393e4f),!![])};}if(!(0x0,path_1[_0x3632eb(0xc6)])(_0x2a271b)&&this['isSFDXProject']){const _0x451545=_0x2a271b[_0x3632eb(0xed)]('/')[0x0],_0x248024=(await fs_internal_1['FS'][_0x3632eb(0xc0)]((0x0,path_1[_0x3632eb(0xcf)])(this[_0x3632eb(0xf7)],_0x451545)))[_0x3632eb(0xe3)](_0x44c85a=>(0x0,git_commit_utils_1[_0x3632eb(0xd3)])(_0x44c85a,(0x0,path_1[_0x3632eb(0xcf)])(this[_0x3632eb(0xf7)],_0x2a271b)));if(!_0x248024)throw new Error(_0x3632eb(0xdf)+_0x2a271b+'\x22\x20not\x20found\x20in\x20\x22'+_0x451545+'\x22');_0x2a271b=(0x0,path_1['relative'])(this[_0x3632eb(0xf7)],_0x248024),_0x393e4f=_0x2a271b+this[_0x3632eb(0xc2)];}const [_0x1538e1,_0x107f9a]=await Promise[_0x3632eb(0xcc)]([fs_internal_1['FS'][_0x3632eb(0xcb)]((0x0,path_1['join'])(this[_0x3632eb(0xf7)],_0x2a271b),!![])[_0x3632eb(0xc4)](()=>null),fs_internal_1['FS'][_0x3632eb(0xcb)]((0x0,path_1[_0x3632eb(0xcf)])(this[_0x3632eb(0xf7)],_0x393e4f),!![])[_0x3632eb(0xc4)](()=>null)]);return{..._0x1538e1?{[_0x2a271b]:_0x1538e1}:{},..._0x107f9a?{[_0x393e4f]:_0x107f9a}:{}};}async['init'](){const _0x240b5d=a146_0xae8a52,_0x4a563a=[...this[_0x240b5d(0xba)]];if(this[_0x240b5d(0xb5)])for(const _0x1e86be of _0x4a563a){if(constants_1[_0x240b5d(0xbd)][_0x240b5d(0xc1)](_0x1e86be))continue;if(await fs_internal_1['FS'][_0x240b5d(0xef)]((0x0,path_1['join'])(this[_0x240b5d(0xf7)],_0x1e86be))){const _0x4d4f49=await fs_internal_1['FS']['readDir']((0x0,path_1[_0x240b5d(0xcf)])(this[_0x240b5d(0xf7)],_0x1e86be),!![]);_0x4a563a[_0x240b5d(0xe9)](..._0x4d4f49['map'](_0x96b6a2=>(0x0,path_1[_0x240b5d(0xeb)])(this[_0x240b5d(0xf7)],_0x96b6a2)));}}this['paths']=(0x0,utils_1['convertToCleanPaths'])(_0x4a563a);}async[a146_0xae8a52(0xc7)](){const _0x488349=a146_0xae8a52;await this['init']();const _0xccea28=[];for(const _0x54c8d8 of this[_0x488349(0xba)]){if(_0x54c8d8[_0x488349(0xcd)](_0x488349(0xb6)))continue;const _0x3c6a00={};try{_0x3c6a00[_0x488349(0xd9)]=await this['readComponentFiles'](_0x54c8d8),_0x3c6a00[_0x488349(0xe2)]=constants_1[_0x488349(0xbd)][_0x488349(0xc1)](_0x54c8d8)?_0x54c8d8:(0x0,utils_1[_0x488349(0xf5)])({'files':_0x3c6a00['files']}),_0x54c8d8[_0x488349(0xb3)](_0x488349(0xc3))?_0x3c6a00[_0x488349(0xf9)]=_0x488349(0xdd):_0x3c6a00[_0x488349(0xf9)]=await(0x0,utils_1['extractComponentTypeFromFiles'])({'files':_0x3c6a00['files']});}catch(_0x326996){this[_0x488349(0xd0)][_0x488349(0xd5)]('error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20',_0x54c8d8,_0x326996);continue;}_0x3c6a00[_0x488349(0xe7)]=(0x0,utils_1[_0x488349(0xbe)])(_0x54c8d8),_0x3c6a00[_0x488349(0xad)]=(0x0,crc32_1['calculateCRC32'])(_0x3c6a00);if((0x0,utils_1['isParentComponent'])(_0x3c6a00)){const _0x547181=await this[_0x488349(0xd1)](_0x3c6a00);_0xccea28[_0x488349(0xe9)](..._0x547181);}if(_0x3c6a00[_0x488349(0xf9)]===_0x488349(0xe4))continue;settings_types_list_1['default']['includes'](_0x3c6a00[_0x488349(0xf9)])&&(_0x3c6a00['type']='Settings'),_0xccea28[_0x488349(0xe9)](_0x3c6a00);}return _0xccea28;}}exports['MDApiParser']=MDApiParser;