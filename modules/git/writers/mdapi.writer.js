const a304_0x578aef=a304_0x5de8;(function(_0x5e982c,_0x5b516a){const _0x284d97=a304_0x5de8,_0x1dd706=_0x5e982c();while(!![]){try{const _0xdd997a=parseInt(_0x284d97(0x10b))/0x1*(-parseInt(_0x284d97(0x10f))/0x2)+-parseInt(_0x284d97(0x13c))/0x3*(-parseInt(_0x284d97(0x13d))/0x4)+-parseInt(_0x284d97(0x10a))/0x5+-parseInt(_0x284d97(0x112))/0x6+-parseInt(_0x284d97(0x12d))/0x7*(-parseInt(_0x284d97(0x114))/0x8)+-parseInt(_0x284d97(0x126))/0x9*(parseInt(_0x284d97(0x13f))/0xa)+parseInt(_0x284d97(0x120))/0xb;if(_0xdd997a===_0x5b516a)break;else _0x1dd706['push'](_0x1dd706['shift']());}catch(_0x2914c1){_0x1dd706['push'](_0x1dd706['shift']());}}}(a304_0x2989,0x3776f));const a304_0x4c4d2b=(function(){let _0x1ee5d7=!![];return function(_0x4546ff,_0x47512d){const _0x46e11e=_0x1ee5d7?function(){const _0x46661e=a304_0x5de8;if(_0x47512d){const _0x339b58=_0x47512d[_0x46661e(0x128)](_0x4546ff,arguments);return _0x47512d=null,_0x339b58;}}:function(){};return _0x1ee5d7=![],_0x46e11e;};}()),a304_0x5ae823=a304_0x4c4d2b(this,function(){const _0x2e30dc=a304_0x5de8;return a304_0x5ae823[_0x2e30dc(0x121)]()[_0x2e30dc(0x12b)](_0x2e30dc(0x10e))[_0x2e30dc(0x121)]()[_0x2e30dc(0x13a)](a304_0x5ae823)[_0x2e30dc(0x12b)](_0x2e30dc(0x10e));});function a304_0x5de8(_0x24a59b,_0x59344a){const _0x312839=a304_0x2989();return a304_0x5de8=function(_0x5ae823,_0x4c4d2b){_0x5ae823=_0x5ae823-0x102;let _0x2989a3=_0x312839[_0x5ae823];return _0x2989a3;},a304_0x5de8(_0x24a59b,_0x59344a);}a304_0x5ae823();'use strict';var __importDefault=this&&this[a304_0x578aef(0x130)]||function(_0x52d164){return _0x52d164&&_0x52d164['__esModule']?_0x52d164:{'default':_0x52d164};};Object[a304_0x578aef(0x11f)](exports,a304_0x578aef(0x105),{'value':!![]}),exports[a304_0x578aef(0x123)]=void 0x0;const path_1=__importDefault(require(a304_0x578aef(0x103))),fs_internal_1=require(a304_0x578aef(0x124)),invalid_xml_error_1=require(a304_0x578aef(0x118)),xml_v2_1=require('../parsers/utils/xml-v2'),child_types_1=__importDefault(require(a304_0x578aef(0x107))),base_writer_1=require('./base.writer');class MDApiWriter extends base_writer_1[a304_0x578aef(0x139)]{constructor({components:_0x2b3b80,sourceDir:_0x1daa37,skipChildErrors:_0x57b76e}){const _0x530e7d=a304_0x578aef;super({'components':_0x2b3b80,'sourceDir':_0x1daa37},MDApiWriter[_0x530e7d(0x136)]),this[_0x530e7d(0x12e)]=0x64,this[_0x530e7d(0x12a)]={},this['skipChildErrors']=_0x57b76e;}async[a304_0x578aef(0x116)](_0x4ffbd0){const _0x409c55=a304_0x578aef;try{const _0x5898a2=await this[_0x409c55(0x10d)](_0x4ffbd0[_0x409c55(0x137)],!![]);await Promise[_0x409c55(0x135)](_0x5898a2[_0x409c55(0x131)](({filename:_0x294459,body:_0x5eb8c6})=>fs_internal_1['FS']['writeFile'](path_1[_0x409c55(0x125)][_0x409c55(0x104)](this[_0x409c55(0x11b)],_0x294459),_0x5eb8c6)));}catch(_0x27dc39){throw new Error(_0x409c55(0x13b)+_0x4ffbd0['fileName']+'\x20['+_0x4ffbd0[_0x409c55(0x132)]+_0x409c55(0x108)+_0x27dc39);}}['handleXmlParsingError'](_0x4b293b,_0x2899c9){const _0x389963=a304_0x578aef;throw new invalid_xml_error_1[(_0x389963(0x122))](_0x389963(0x11c)+_0x2899c9['fileName']+'\x20['+_0x2899c9['fileType']+_0x389963(0x108)+_0x4b293b);}async[a304_0x578aef(0x11a)](_0x401b5f){const _0x449be3=a304_0x578aef,{filename:_0x753025,body:_0x20f0a8}=(await this['readZip'](_0x401b5f['body']))[0x0];try{if(!this[_0x449be3(0x12a)][_0x753025]){const _0x5eec93=path_1[_0x449be3(0x125)][_0x449be3(0x104)](this['sourceDir'],_0x753025);if(await fs_internal_1['FS']['exists'](_0x5eec93)){const _0x587a09=await fs_internal_1['FS'][_0x449be3(0x13e)](_0x5eec93);this['parentComponents'][_0x753025]=await xml_v2_1[_0x449be3(0x129)]['parse'](_0x587a09)['catch'](_0x565972=>this[_0x449be3(0x133)](_0x565972,_0x401b5f));}else{this['parentComponents'][_0x753025]=await xml_v2_1[_0x449be3(0x129)][_0x449be3(0x113)](_0x20f0a8)[_0x449be3(0x12c)](_0x323ad8=>this[_0x449be3(0x133)](_0x323ad8,_0x401b5f));return;}}const _0xbbe1be=this[_0x449be3(0x12a)][_0x753025],_0x48363a=await xml_v2_1['XmlV2'][_0x449be3(0x113)](_0x20f0a8)[_0x449be3(0x12c)](_0x2578a5=>this[_0x449be3(0x133)](_0x2578a5,_0x401b5f));xml_v2_1['XmlV2'][_0x449be3(0x119)](_0xbbe1be,_0x48363a);}catch(_0x13be3a){if(_0x13be3a instanceof invalid_xml_error_1[_0x449be3(0x122)]){if(this[_0x449be3(0x12f)])return;else throw _0x13be3a;}throw new Error(_0x449be3(0x109)+_0x401b5f[_0x449be3(0x127)]+'\x20['+_0x401b5f[_0x449be3(0x132)]+_0x449be3(0x108)+_0x13be3a);}}async[a304_0x578aef(0x111)](){const _0x136652=a304_0x578aef;!await fs_internal_1['FS'][_0x136652(0x102)](this[_0x136652(0x11b)])&&await fs_internal_1['FS'][_0x136652(0x117)](this['sourceDir']);const _0x1d46a4=[],_0x3d95fd=[];for(const _0x21a059 of this[_0x136652(0x106)]){child_types_1[_0x136652(0x125)]['includes'](_0x21a059[_0x136652(0x132)])?_0x3d95fd['push'](_0x21a059):_0x1d46a4[_0x136652(0x10c)](_0x21a059);}for(const _0x339379 of _0x1d46a4){await this[_0x136652(0x116)](_0x339379);}for(const _0x6517d6 of _0x3d95fd){await this['writeChild'](_0x6517d6);}const _0x532de2=Object[_0x136652(0x110)](this[_0x136652(0x12a)]);this[_0x136652(0x11d)]['log'](_0x136652(0x115),this['components']['length']);while(_0x532de2[_0x136652(0x134)]){const _0x98b564=_0x532de2[_0x136652(0x138)](0x0,this[_0x136652(0x12e)]);for(const _0x2c5566 of _0x98b564){await fs_internal_1['FS'][_0x136652(0x11e)](path_1[_0x136652(0x125)][_0x136652(0x104)](this['sourceDir'],_0x2c5566),xml_v2_1[_0x136652(0x129)]['convertToString'](this['parentComponents'][_0x2c5566]));}}this[_0x136652(0x12a)]={};}}exports[a304_0x578aef(0x123)]=MDApiWriter;function a304_0x2989(){const _0x45241a=['MDApiWriter','../internal/fs.internal','default','225YFLHgM','fileName','apply','XmlV2','parentComponents','search','catch','700mhTedy','MAX_WRITES_PER_TICK','skipChildErrors','__importDefault','map','fileType','handleXmlParsingError','length','all','name','body','splice','BaseWriter','constructor','[WriteParent]\x20An\x20error\x20occurred\x20while\x20proceeding\x20component\x20','15dSUwDi','61140bKiDEO','readFile','14930XvIngs','exists','path','join','__esModule','components','../parsers/data/child-types','].\x20Original\x20error:\x20','[WriteChild]\x20An\x20error\x20occurred\x20while\x20proceeding\x20component\x20','1243245bmTWXt','20lCDeWI','push','readZip','(((.+)+)+)+$','4810QhVswq','keys','execute','973338JByTvW','parse','33680fmOlvQ','Have\x20to\x20write\x20%d\x20files','writeParent','makeDir','../parsers/errors/invalid-xml.error','replaceOrAppend','writeChild','sourceDir','[InvalidXmlError]\x20An\x20error\x20occurred\x20while\x20proceeding\x20XML\x20','logger','writeFile','defineProperty','2486605iBWkhC','toString','InvalidXmlError'];a304_0x2989=function(){return _0x45241a;};return a304_0x2989();}