function a184_0x53cd(_0xd97068,_0x5ed07d){const _0x232a2=a184_0x3e1d();return a184_0x53cd=function(_0xffbc74,_0x895f2e){_0xffbc74=_0xffbc74-0x114;let _0x3e1d55=_0x232a2[_0xffbc74];return _0x3e1d55;},a184_0x53cd(_0xd97068,_0x5ed07d);}const a184_0x474cd7=a184_0x53cd;(function(_0x1075ba,_0x5db6bc){const _0x4957c7=a184_0x53cd,_0x486388=_0x1075ba();while(!![]){try{const _0x394a20=parseInt(_0x4957c7(0x125))/0x1*(-parseInt(_0x4957c7(0x12e))/0x2)+parseInt(_0x4957c7(0x156))/0x3*(parseInt(_0x4957c7(0x145))/0x4)+parseInt(_0x4957c7(0x12d))/0x5+-parseInt(_0x4957c7(0x13c))/0x6+parseInt(_0x4957c7(0x13a))/0x7+-parseInt(_0x4957c7(0x124))/0x8*(parseInt(_0x4957c7(0x13d))/0x9)+parseInt(_0x4957c7(0x11f))/0xa;if(_0x394a20===_0x5db6bc)break;else _0x486388['push'](_0x486388['shift']());}catch(_0x388260){_0x486388['push'](_0x486388['shift']());}}}(a184_0x3e1d,0xc2aee));const a184_0x895f2e=(function(){let _0x2299fd=!![];return function(_0x2da682,_0x598db1){const _0x4b9dd8=_0x2299fd?function(){const _0x206dd1=a184_0x53cd;if(_0x598db1){const _0x3a87b1=_0x598db1[_0x206dd1(0x118)](_0x2da682,arguments);return _0x598db1=null,_0x3a87b1;}}:function(){};return _0x2299fd=![],_0x4b9dd8;};}()),a184_0xffbc74=a184_0x895f2e(this,function(){const _0x3abd95=a184_0x53cd;return a184_0xffbc74[_0x3abd95(0x11b)]()['search'](_0x3abd95(0x139))['toString']()[_0x3abd95(0x137)](a184_0xffbc74)[_0x3abd95(0x130)](_0x3abd95(0x139));});a184_0xffbc74();'use strict';var __importDefault=this&&this[a184_0x474cd7(0x159)]||function(_0x429b03){const _0x24029d=a184_0x474cd7;return _0x429b03&&_0x429b03[_0x24029d(0x116)]?_0x429b03:{'default':_0x429b03};};Object['defineProperty'](exports,a184_0x474cd7(0x116),{'value':!![]}),exports['MDApiParser']=void 0x0;function a184_0x3e1d(){const _0x325470=['all','./utils/crc32','\x22\x20not\x20found\x20in\x20\x22','exists','132xmHOCZ','isParentComponent','./utils','readChildComponents','join','error','logger','default','MDApiParser','files','paths','map','extname','catch','extractComponentTypeFromFiles','split','filePath','49131RmpiSe','../internal/fs.internal','dir','__importDefault','./data/child-types-map','-meta.xml','hasChildNodes','path','values','META_EXTENSION','readBundledFiles','readFile','BUNDLED_FOLDERS_REGEXP','__esModule','relative','apply','parse','META_EXPERIENCES_EXTENSION','toString','experiences','startsWith','crc','12988040kQTHvX','type','Cannot\x20parse\x20childs\x20in\x20','Xml','../../../core','544xiJqQf','30169AtVMNp','find','name','readComponentFiles','endsWith','waveTemplates','init','isSFDXProject','3551640KhxEUu','102fNeVld','push','search','utf-8','filter','readDir','Settings','isDir','Component\x20\x22','constructor','test','(((.+)+)+)+$','5800879xgylXY','calculateCRC32','2337390kFoYyv','86382CcMrQA','../devops/utils/git-commit.utils','Logger','includes'];a184_0x3e1d=function(){return _0x325470;};return a184_0x3e1d();}const fs_internal_1=require(a184_0x474cd7(0x157)),utils_1=require(a184_0x474cd7(0x147)),path_1=require(a184_0x474cd7(0x15d)),xml_1=require('./utils/xml'),child_types_map_1=__importDefault(require(a184_0x474cd7(0x15a))),constants_1=require('../../../constants'),core_1=require(a184_0x474cd7(0x123)),git_commit_utils_1=require(a184_0x474cd7(0x13e)),crc32_1=require(a184_0x474cd7(0x142)),folder_types_1=__importDefault(require('./data/folder-types')),settings_types_list_1=__importDefault(require('./data/settings-types-list')),CHILD_XML_KEYS=Object[a184_0x474cd7(0x15e)](child_types_map_1[a184_0x474cd7(0x14c)]);class MDApiParser{constructor(_0x3afc86,_0x5dcd64,_0x44cc33){const _0x321d6c=a184_0x474cd7;this[_0x321d6c(0x158)]=_0x3afc86,this[_0x321d6c(0x12c)]=_0x44cc33,this[_0x321d6c(0x14b)]=new core_1[(_0x321d6c(0x13f))](MDApiParser[_0x321d6c(0x127)]),this['META_EXTENSION']=_0x321d6c(0x15b),this['META_EXPERIENCES_EXTENSION']='.site-meta.xml',this['paths']=_0x5dcd64;}async[a184_0x474cd7(0x148)](_0x444a6f){const _0x18dda2=a184_0x474cd7;try{const _0x385533=await xml_1[_0x18dda2(0x122)]['parse'](Object[_0x18dda2(0x15e)](_0x444a6f['files'])[0x0][_0x18dda2(0x11b)](_0x18dda2(0x131))),_0x2e2d9b=CHILD_XML_KEYS[_0x18dda2(0x132)](_0x233d56=>xml_1[_0x18dda2(0x122)][_0x18dda2(0x15c)](_0x385533,_0x233d56))['reduce']((_0x521114,_0x2281d8)=>[..._0x521114,...xml_1[_0x18dda2(0x122)]['getChildsByName'](_0x385533,_0x2281d8)],[]);return(0x0,utils_1['createChildComponentsFromParent'])(_0x444a6f,_0x385533,_0x2e2d9b);}catch(_0x170c30){throw new Error(_0x18dda2(0x121)+_0x444a6f[_0x18dda2(0x127)]+'\x20['+_0x444a6f[_0x18dda2(0x120)]+']');}}async[a184_0x474cd7(0x160)](_0x55ebf7){const _0x2b2962=a184_0x474cd7,_0x210048=(0x0,path_1[_0x2b2962(0x149)])(this[_0x2b2962(0x158)],_0x55ebf7),_0x5f047c=_0x55ebf7+(_0x55ebf7[_0x2b2962(0x11d)](_0x2b2962(0x11c))?this[_0x2b2962(0x11a)]:this['META_EXTENSION']),_0x4e79ba=await fs_internal_1['FS'][_0x2b2962(0x133)](_0x210048,!![]),_0x569b5c=await fs_internal_1['FS'][_0x2b2962(0x114)]((0x0,path_1[_0x2b2962(0x149)])(this[_0x2b2962(0x158)],_0x5f047c),!![])[_0x2b2962(0x152)](()=>null),_0x3eb405={};for(const _0x1f6908 of _0x4e79ba){_0x3eb405[(0x0,path_1[_0x2b2962(0x117)])(this[_0x2b2962(0x158)],_0x1f6908)]=await fs_internal_1['FS'][_0x2b2962(0x114)](_0x1f6908,!![]);}return _0x569b5c&&(_0x3eb405[(0x0,path_1[_0x2b2962(0x117)])(this['dir'],_0x5f047c)]=_0x569b5c),_0x3eb405;}async['readComponentFiles'](_0x2f8214){const _0xa5e70d=a184_0x474cd7;let _0x2a1c72=_0x2f8214+this[_0xa5e70d(0x15f)];if(constants_1['BUNDLED_FOLDERS_REGEXP'][_0xa5e70d(0x138)](_0x2f8214))return this[_0xa5e70d(0x160)](_0x2f8214);if(await fs_internal_1['FS']['isDir']((0x0,path_1['join'])(this[_0xa5e70d(0x158)],_0x2f8214))||await fs_internal_1['FS'][_0xa5e70d(0x144)]((0x0,path_1[_0xa5e70d(0x149)])(this[_0xa5e70d(0x158)],_0x2a1c72))){const _0x258799=await fs_internal_1['FS'][_0xa5e70d(0x114)]((0x0,path_1[_0xa5e70d(0x149)])(this['dir'],_0x2a1c72),!![]),_0x3b04f3=await(0x0,utils_1[_0xa5e70d(0x153)])({'files':{[_0x2a1c72]:_0x258799}})[_0xa5e70d(0x152)](()=>null);if(_0x3b04f3&&folder_types_1[_0xa5e70d(0x14c)][_0xa5e70d(0x140)](_0x3b04f3))return{[_0x2a1c72]:await fs_internal_1['FS'][_0xa5e70d(0x114)]((0x0,path_1[_0xa5e70d(0x149)])(this['dir'],_0x2a1c72),!![])};}if(!(0x0,path_1[_0xa5e70d(0x151)])(_0x2f8214)&&this[_0xa5e70d(0x12c)]){const _0x24107e=_0x2f8214[_0xa5e70d(0x154)]('/')[0x0],_0x3850ac=(await fs_internal_1['FS']['readDir']((0x0,path_1[_0xa5e70d(0x149)])(this[_0xa5e70d(0x158)],_0x24107e)))[_0xa5e70d(0x126)](_0xb5c607=>(0x0,git_commit_utils_1['isPathsEquals'])(_0xb5c607,(0x0,path_1[_0xa5e70d(0x149)])(this[_0xa5e70d(0x158)],_0x2f8214)));if(!_0x3850ac)throw new Error(_0xa5e70d(0x136)+_0x2f8214+_0xa5e70d(0x143)+_0x24107e+'\x22');_0x2f8214=(0x0,path_1[_0xa5e70d(0x117)])(this[_0xa5e70d(0x158)],_0x3850ac),_0x2a1c72=_0x2f8214+this[_0xa5e70d(0x15f)];}const [_0x3f2844,_0x2b0974]=await Promise[_0xa5e70d(0x141)]([fs_internal_1['FS']['readFile']((0x0,path_1[_0xa5e70d(0x149)])(this[_0xa5e70d(0x158)],_0x2f8214),!![])[_0xa5e70d(0x152)](()=>null),fs_internal_1['FS'][_0xa5e70d(0x114)]((0x0,path_1[_0xa5e70d(0x149)])(this[_0xa5e70d(0x158)],_0x2a1c72),!![])[_0xa5e70d(0x152)](()=>null)]);return{..._0x3f2844?{[_0x2f8214]:_0x3f2844}:{},..._0x2b0974?{[_0x2a1c72]:_0x2b0974}:{}};}async[a184_0x474cd7(0x12b)](){const _0x33cf95=a184_0x474cd7,_0x1a3e40=[...this[_0x33cf95(0x14f)]];if(this['isSFDXProject'])for(const _0x38006b of _0x1a3e40){if(constants_1['BUNDLED_FOLDERS_REGEXP'][_0x33cf95(0x138)](_0x38006b))continue;if(await fs_internal_1['FS'][_0x33cf95(0x135)]((0x0,path_1[_0x33cf95(0x149)])(this[_0x33cf95(0x158)],_0x38006b))){const _0x3faae5=await fs_internal_1['FS'][_0x33cf95(0x133)]((0x0,path_1['join'])(this['dir'],_0x38006b),!![]);_0x1a3e40['push'](..._0x3faae5[_0x33cf95(0x150)](_0x461e46=>(0x0,path_1[_0x33cf95(0x117)])(this['dir'],_0x461e46)));}}this[_0x33cf95(0x14f)]=(0x0,utils_1['convertToCleanPaths'])(_0x1a3e40);}async[a184_0x474cd7(0x119)](){const _0xbe90d1=a184_0x474cd7;await this[_0xbe90d1(0x12b)]();const _0x542fda=[];for(const _0x2f9c41 of this[_0xbe90d1(0x14f)]){if(_0x2f9c41[_0xbe90d1(0x129)]('package.xml'))continue;const _0x1bb927={};try{_0x1bb927['files']=await this[_0xbe90d1(0x128)](_0x2f9c41),_0x1bb927[_0xbe90d1(0x155)]=constants_1[_0xbe90d1(0x115)][_0xbe90d1(0x138)](_0x2f9c41)?_0x2f9c41:(0x0,utils_1['extractFileNameFromFiles'])({'files':_0x1bb927[_0xbe90d1(0x14e)]}),_0x2f9c41[_0xbe90d1(0x11d)](_0xbe90d1(0x12a))?_0x1bb927['type']='WaveTemplateBundle':_0x1bb927[_0xbe90d1(0x120)]=await(0x0,utils_1['extractComponentTypeFromFiles'])({'files':_0x1bb927[_0xbe90d1(0x14e)]});}catch(_0x59bedf){this[_0xbe90d1(0x14b)][_0xbe90d1(0x14a)]('error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20',_0x2f9c41,_0x59bedf);continue;}_0x1bb927[_0xbe90d1(0x127)]=(0x0,utils_1['extractFilenameFromPath'])(_0x2f9c41),_0x1bb927[_0xbe90d1(0x11e)]=(0x0,crc32_1[_0xbe90d1(0x13b)])(_0x1bb927);if((0x0,utils_1[_0xbe90d1(0x146)])(_0x1bb927)){const _0x473012=await this['readChildComponents'](_0x1bb927);_0x542fda['push'](..._0x473012);}if(_0x1bb927[_0xbe90d1(0x120)]==='CustomLabels')continue;settings_types_list_1[_0xbe90d1(0x14c)][_0xbe90d1(0x140)](_0x1bb927['type'])&&(_0x1bb927['type']=_0xbe90d1(0x134)),_0x542fda[_0xbe90d1(0x12f)](_0x1bb927);}return _0x542fda;}}exports[a184_0x474cd7(0x14d)]=MDApiParser;