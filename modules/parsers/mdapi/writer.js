function a98_0x1a85(){const _0x2568cd=['components','toString','log','readFile','8160680QQIWcx','parentComponents','makeDir','convertToString','length','readZip','parse','sourceDir','fileType','search','constructor','1433509uzhegO','all','9JLWGpq','30WIpVHZ','exists','catch','[WriteChild]\x20An\x20error\x20occurred\x20while\x20proceeding\x20component\x20','files','].\x20Original\x20error:\x20','../../internal/fs.internal','MAX_WRITES_PER_TICK','text','defineProperty','unzip','1420316JAVXaj','skipChildErrors','have\x20to\x20write\x20%d\x20files','__importDefault','writeFile','1605035ytXURy','InvalidXmlError','writeParent','Zip','__esModule','../utils/xml','(((.+)+)+)+$','path','../data/child-types','default','../errors/invalid-xml.error','22863NRaNYp','Xml','handleXmlParsingError','[InvalidXmlError]\x20An\x20error\x20occurred\x20while\x20proceeding\x20XML\x20','MDApiWriter','writeChild','3822DvVWrL','1234200PiPZFf','internalLogger','../utils/zip','replaceOrAppend','body','splice','keys'];a98_0x1a85=function(){return _0x2568cd;};return a98_0x1a85();}const a98_0x4b3ad2=a98_0x5dbe;(function(_0x48adbc,_0x4b8b12){const _0x1c7036=a98_0x5dbe,_0x4c8eac=_0x48adbc();while(!![]){try{const _0x374609=-parseInt(_0x1c7036(0x19a))/0x1*(parseInt(_0x1c7036(0x17f))/0x2)+parseInt(_0x1c7036(0x1a1))/0x3+-parseInt(_0x1c7036(0x18a))/0x4+-parseInt(_0x1c7036(0x18f))/0x5+parseInt(_0x1c7036(0x1a0))/0x6+-parseInt(_0x1c7036(0x17c))/0x7+-parseInt(_0x1c7036(0x1ac))/0x8*(-parseInt(_0x1c7036(0x17e))/0x9);if(_0x374609===_0x4b8b12)break;else _0x4c8eac['push'](_0x4c8eac['shift']());}catch(_0x8c1710){_0x4c8eac['push'](_0x4c8eac['shift']());}}}(a98_0x1a85,0x32db0));const a98_0x46c076=(function(){let _0x309a1f=!![];return function(_0x4d0679,_0x1dc1a5){const _0x3bc5af=_0x309a1f?function(){if(_0x1dc1a5){const _0x3b3d53=_0x1dc1a5['apply'](_0x4d0679,arguments);return _0x1dc1a5=null,_0x3b3d53;}}:function(){};return _0x309a1f=![],_0x3bc5af;};}()),a98_0x21b95d=a98_0x46c076(this,function(){const _0x384b7d=a98_0x5dbe;return a98_0x21b95d['toString']()[_0x384b7d(0x17a)](_0x384b7d(0x195))[_0x384b7d(0x1a9)]()[_0x384b7d(0x17b)](a98_0x21b95d)[_0x384b7d(0x17a)](_0x384b7d(0x195));});a98_0x21b95d();'use strict';var __importDefault=this&&this[a98_0x4b3ad2(0x18d)]||function(_0x5bf672){const _0xf93aa2=a98_0x4b3ad2;return _0x5bf672&&_0x5bf672[_0xf93aa2(0x193)]?_0x5bf672:{'default':_0x5bf672};};Object[a98_0x4b3ad2(0x188)](exports,a98_0x4b3ad2(0x193),{'value':!![]}),exports[a98_0x4b3ad2(0x19e)]=void 0x0;const path_1=__importDefault(require(a98_0x4b3ad2(0x196))),core_1=require('../../../core'),fs_internal_1=require(a98_0x4b3ad2(0x185)),invalid_xml_error_1=require(a98_0x4b3ad2(0x199)),xml_1=require(a98_0x4b3ad2(0x194)),zip_1=require(a98_0x4b3ad2(0x1a3)),child_types_1=__importDefault(require(a98_0x4b3ad2(0x197)));function a98_0x5dbe(_0xeaa2f4,_0x2406eb){const _0x1e17cc=a98_0x1a85();return a98_0x5dbe=function(_0x21b95d,_0x46c076){_0x21b95d=_0x21b95d-0x175;let _0x1a85f8=_0x1e17cc[_0x21b95d];return _0x1a85f8;},a98_0x5dbe(_0xeaa2f4,_0x2406eb);}class MDApiWriter{constructor({components:_0x48163e,sourceDir:_0x46219d,skipChildErrors:_0x2224f2}){const _0x1bd29e=a98_0x4b3ad2;this['MAX_WRITES_PER_TICK']=0x64,this[_0x1bd29e(0x1ad)]={},this[_0x1bd29e(0x1a2)]=new core_1['Logger'](MDApiWriter['name']),this[_0x1bd29e(0x1a8)]=_0x48163e,this['sourceDir']=_0x46219d,this[_0x1bd29e(0x18b)]=_0x2224f2;}async[a98_0x4b3ad2(0x176)](_0x1cde8f,_0x5bc7bd=![]){const _0x46d361=a98_0x4b3ad2,_0x1c9c22=await zip_1[_0x46d361(0x192)][_0x46d361(0x189)](_0x1cde8f),_0x228052=[];for(const _0x93c269 of Object[_0x46d361(0x1a7)](_0x1c9c22['files'])){!_0x1c9c22['files'][_0x93c269]['dir']&&_0x228052['push']({'filename':_0x93c269,'body':await _0x1c9c22[_0x46d361(0x183)][_0x93c269]['async'](_0x5bc7bd?'nodebuffer':_0x46d361(0x187))});}return _0x228052;}async[a98_0x4b3ad2(0x191)](_0x42af70){const _0x30ffe9=a98_0x4b3ad2;try{const _0x18592c=await this[_0x30ffe9(0x176)](_0x42af70[_0x30ffe9(0x1a5)],!![]);await Promise[_0x30ffe9(0x17d)](_0x18592c['map'](({filename:_0x3498d7,body:_0x1ea56c})=>fs_internal_1['FS'][_0x30ffe9(0x18e)](path_1[_0x30ffe9(0x198)]['join'](this[_0x30ffe9(0x178)],_0x3498d7),_0x1ea56c)));}catch(_0x206819){throw new Error('[WriteParent]\x20An\x20error\x20occured\x20while\x20proceeding\x20component\x20'+_0x42af70['fileName']+'\x20['+_0x42af70[_0x30ffe9(0x179)]+_0x30ffe9(0x184)+_0x206819);}}[a98_0x4b3ad2(0x19c)](_0x1579f3,_0x3fa8f8){const _0x4875e2=a98_0x4b3ad2;throw new invalid_xml_error_1['InvalidXmlError'](_0x4875e2(0x19d)+_0x3fa8f8['fileName']+'\x20['+_0x3fa8f8[_0x4875e2(0x179)]+'].\x20Original\x20error:\x20'+_0x1579f3);}async['writeChild'](_0x212d34){const _0xb8367f=a98_0x4b3ad2,{filename:_0x1c308b,body:_0x3e5cc0}=(await this['readZip'](_0x212d34[_0xb8367f(0x1a5)]))[0x0];try{if(!this['parentComponents'][_0x1c308b]){const _0x1d9133=path_1['default']['join'](this[_0xb8367f(0x178)],_0x1c308b);if(await fs_internal_1['FS'][_0xb8367f(0x180)](_0x1d9133)){const _0x5a4918=await fs_internal_1['FS'][_0xb8367f(0x1ab)](_0x1d9133);this[_0xb8367f(0x1ad)][_0x1c308b]=await xml_1[_0xb8367f(0x19b)][_0xb8367f(0x177)](_0x5a4918)[_0xb8367f(0x181)](_0x35f8f0=>this[_0xb8367f(0x19c)](_0x35f8f0,_0x212d34));}else{this[_0xb8367f(0x1ad)][_0x1c308b]=await xml_1['Xml'][_0xb8367f(0x177)](_0x3e5cc0)[_0xb8367f(0x181)](_0x24ddaf=>this[_0xb8367f(0x19c)](_0x24ddaf,_0x212d34));return;}}const _0x30e0d5=this['parentComponents'][_0x1c308b],_0x5e7661=await xml_1['Xml'][_0xb8367f(0x177)](_0x3e5cc0)[_0xb8367f(0x181)](_0x4cf7d7=>this[_0xb8367f(0x19c)](_0x4cf7d7,_0x212d34));xml_1['Xml'][_0xb8367f(0x1a4)](_0x30e0d5,_0x5e7661);}catch(_0x24d39c){if(_0x24d39c instanceof invalid_xml_error_1[_0xb8367f(0x190)]){if(this['skipChildErrors'])return;else throw _0x24d39c;}throw new Error(_0xb8367f(0x182)+_0x212d34['fileName']+'\x20['+_0x212d34[_0xb8367f(0x179)]+_0xb8367f(0x184)+_0x24d39c);}}async['start'](){const _0x3a611=a98_0x4b3ad2;!await fs_internal_1['FS'][_0x3a611(0x180)](this['sourceDir'])&&await fs_internal_1['FS'][_0x3a611(0x1ae)](this[_0x3a611(0x178)]);for(const _0x5805a0 of this['components']){!child_types_1[_0x3a611(0x198)]['includes'](_0x5805a0[_0x3a611(0x179)])?await this[_0x3a611(0x191)](_0x5805a0):await this[_0x3a611(0x19f)](_0x5805a0);}const _0x355552=Object[_0x3a611(0x1a7)](this[_0x3a611(0x1ad)]);this['internalLogger'][_0x3a611(0x1aa)](_0x3a611(0x18c),this['components'][_0x3a611(0x175)]);while(_0x355552[_0x3a611(0x175)]){const _0x52342d=_0x355552[_0x3a611(0x1a6)](0x0,this[_0x3a611(0x186)]);for(const _0x5322ef of _0x52342d){await fs_internal_1['FS']['writeFile'](path_1['default']['join'](this[_0x3a611(0x178)],_0x5322ef),xml_1['Xml'][_0x3a611(0x1af)](this[_0x3a611(0x1ad)][_0x5322ef]));}}this['parentComponents']={};}}exports[a98_0x4b3ad2(0x19e)]=MDApiWriter;