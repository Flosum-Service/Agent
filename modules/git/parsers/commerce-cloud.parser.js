const a158_0x4163f7=a158_0x3166;(function(_0x930e0d,_0x560b39){const _0xba4382=a158_0x3166,_0x3b52bd=_0x930e0d();while(!![]){try{const _0x26fe29=parseInt(_0xba4382(0x14f))/0x1+parseInt(_0xba4382(0x14c))/0x2+parseInt(_0xba4382(0x151))/0x3*(-parseInt(_0xba4382(0x137))/0x4)+-parseInt(_0xba4382(0x145))/0x5+parseInt(_0xba4382(0x12d))/0x6+-parseInt(_0xba4382(0x148))/0x7+-parseInt(_0xba4382(0x150))/0x8*(-parseInt(_0xba4382(0x138))/0x9);if(_0x26fe29===_0x560b39)break;else _0x3b52bd['push'](_0x3b52bd['shift']());}catch(_0x5a9cf8){_0x3b52bd['push'](_0x3b52bd['shift']());}}}(a158_0x19ed,0x1d0c3));const a158_0x565697=(function(){let _0x187547=!![];return function(_0x78ed6f,_0x341a0c){const _0x54a593=_0x187547?function(){if(_0x341a0c){const _0x1ae6b5=_0x341a0c['apply'](_0x78ed6f,arguments);return _0x341a0c=null,_0x1ae6b5;}}:function(){};return _0x187547=![],_0x54a593;};}()),a158_0x599304=a158_0x565697(this,function(){const _0x4c4d0f=a158_0x3166;return a158_0x599304['toString']()[_0x4c4d0f(0x12c)](_0x4c4d0f(0x13f))[_0x4c4d0f(0x12f)]()[_0x4c4d0f(0x147)](a158_0x599304)[_0x4c4d0f(0x12c)](_0x4c4d0f(0x13f));});a158_0x599304();function a158_0x19ed(){const _0x5bcfae=['CommerceCloudParser','sep','search','445860NtGYez','crc','toString','readFile','calculateCRC32','parseComponentPath','logger','defineProperty','length','Error\x20occurred\x20when\x20parsing\x20file/folder\x20','12mHwhsR','18lpvAhJ','COMMERCE_CLOUD_GLOBAL_DATA_COMPONENT_TYPE','../internal/fs.internal','BaseParser','./utils/crc32','COMMERCE_CLOUD_COMPONENT_TYPES','shift','(((.+)+)+)+$','./data/commerce-cloud-types','catch','split','sourceDir','readComponent','958545zRQFLu','execute','constructor','1558627dhchvi','name','GLOBAL_COMPONENT_TYPE_SPLITTED_PATH_LENGTH','join','293662kCPVIq','Error\x20occurred\x20when\x20parsing\x20file/folder\x20%s.\x20Original\x20error:\x20','error','126615KfVKYH','848152HUZilH','26445wPAIoG'];a158_0x19ed=function(){return _0x5bcfae;};return a158_0x19ed();}'use strict';function a158_0x3166(_0x56d879,_0x4dc273){const _0x33a521=a158_0x19ed();return a158_0x3166=function(_0x599304,_0x565697){_0x599304=_0x599304-0x12b;let _0x19ed52=_0x33a521[_0x599304];return _0x19ed52;},a158_0x3166(_0x56d879,_0x4dc273);}Object[a158_0x4163f7(0x134)](exports,'__esModule',{'value':!![]}),exports[a158_0x4163f7(0x152)]=void 0x0;const base_parser_1=require('./base.parser'),fs_internal_1=require(a158_0x4163f7(0x13a)),crc32_1=require(a158_0x4163f7(0x13c)),path_1=require('path'),commerce_cloud_types_1=require(a158_0x4163f7(0x140));class CommerceCloudParser extends base_parser_1[a158_0x4163f7(0x13b)]{constructor({sourceDir:_0x788c8f,paths:_0x517fa5}){const _0x12a806=a158_0x4163f7;super({'sourceDir':_0x788c8f,'paths':_0x517fa5},CommerceCloudParser[_0x12a806(0x149)]),this['GLOBAL_COMPONENT_TYPE_SPLITTED_PATH_LENGTH']=0x1;}async[a158_0x4163f7(0x144)](_0x2db9f8){const _0x4e26e9=a158_0x4163f7,_0x287e17=(0x0,path_1[_0x4e26e9(0x14b)])(this[_0x4e26e9(0x143)],_0x2db9f8),_0x1a29f7=await fs_internal_1['FS'][_0x4e26e9(0x130)](_0x287e17,!![]);return _0x1a29f7;}[a158_0x4163f7(0x132)](_0x311cd3){const _0x254df4=a158_0x4163f7,_0x245099=_0x311cd3[_0x254df4(0x142)](path_1[_0x254df4(0x12b)]);if(_0x245099[_0x254df4(0x135)]===this[_0x254df4(0x14a)])return{'type':commerce_cloud_types_1[_0x254df4(0x139)],'name':_0x311cd3};const _0x5caaaf=_0x245099[_0x254df4(0x13e)]();if(!_0x5caaaf)throw new Error(_0x254df4(0x136)+_0x311cd3);const _0x38867e=_0x245099[_0x254df4(0x14b)](path_1[_0x254df4(0x12b)]);return{'type':commerce_cloud_types_1[_0x254df4(0x13d)][_0x5caaaf],'name':_0x38867e};}async[a158_0x4163f7(0x146)](){const _0x57242b=a158_0x4163f7,_0x3c22fe=this['paths'][0x0],_0x12035f=await this['readComponent'](_0x3c22fe)[_0x57242b(0x141)](_0x406295=>this[_0x57242b(0x133)][_0x57242b(0x14e)](_0x57242b(0x14d),_0x3c22fe,_0x406295));if(!_0x12035f)return[];const {type:_0x45ae41,name:_0x5adf66}=this['parseComponentPath'](_0x3c22fe),_0x4bb6c6={'files':{[_0x3c22fe]:_0x12035f},'filePath':_0x3c22fe,'type':_0x45ae41,'name':_0x5adf66},_0x19b829=(0x0,crc32_1[_0x57242b(0x131)])(_0x4bb6c6);return _0x4bb6c6[_0x57242b(0x12e)]=_0x19b829,[_0x4bb6c6];}}exports[a158_0x4163f7(0x152)]=CommerceCloudParser;