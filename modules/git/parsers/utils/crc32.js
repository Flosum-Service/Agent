const a160_0x4ba4a2=a160_0x52df;function a160_0x52df(_0x162833,_0x51c960){const _0x37341c=a160_0x1420();return a160_0x52df=function(_0x516b75,_0x124a7d){_0x516b75=_0x516b75-0x165;let _0x14200a=_0x37341c[_0x516b75];return _0x14200a;},a160_0x52df(_0x162833,_0x51c960);}(function(_0xbd7ece,_0x35d955){const _0x4049a4=a160_0x52df,_0x49b2aa=_0xbd7ece();while(!![]){try{const _0x2b5d78=-parseInt(_0x4049a4(0x186))/0x1+parseInt(_0x4049a4(0x167))/0x2*(-parseInt(_0x4049a4(0x165))/0x3)+parseInt(_0x4049a4(0x17d))/0x4*(-parseInt(_0x4049a4(0x184))/0x5)+parseInt(_0x4049a4(0x18a))/0x6+parseInt(_0x4049a4(0x16f))/0x7+-parseInt(_0x4049a4(0x18b))/0x8*(-parseInt(_0x4049a4(0x17b))/0x9)+-parseInt(_0x4049a4(0x179))/0xa*(-parseInt(_0x4049a4(0x16e))/0xb);if(_0x2b5d78===_0x35d955)break;else _0x49b2aa['push'](_0x49b2aa['shift']());}catch(_0x2b7ca1){_0x49b2aa['push'](_0x49b2aa['shift']());}}}(a160_0x1420,0x2ec3c));const a160_0x124a7d=(function(){let _0x3f3fb9=!![];return function(_0x15f2b2,_0x3df945){const _0x1efa27=_0x3f3fb9?function(){const _0x729d3d=a160_0x52df;if(_0x3df945){const _0x109caa=_0x3df945[_0x729d3d(0x18e)](_0x15f2b2,arguments);return _0x3df945=null,_0x109caa;}}:function(){};return _0x3f3fb9=![],_0x1efa27;};}()),a160_0x516b75=a160_0x124a7d(this,function(){const _0x3c4063=a160_0x52df;return a160_0x516b75[_0x3c4063(0x166)]()[_0x3c4063(0x17e)]('(((.+)+)+)+$')['toString']()[_0x3c4063(0x177)](a160_0x516b75)['search'](_0x3c4063(0x16d));});a160_0x516b75();'use strict';var __importDefault=this&&this[a160_0x4ba4a2(0x185)]||function(_0x1d7598){return _0x1d7598&&_0x1d7598['__esModule']?_0x1d7598:{'default':_0x1d7598};};Object['defineProperty'](exports,a160_0x4ba4a2(0x17c),{'value':!![]}),exports[a160_0x4ba4a2(0x172)]=void 0x0;const crc_32_1=__importDefault(require(a160_0x4ba4a2(0x171))),vlocity_types_1=require(a160_0x4ba4a2(0x187)),componentTypeProcessFunctionMap={'AuraDefinitionBundle':bundleTypesProcessor,'LightningComponentBundle':bundleTypesProcessor,'ExperienceBundle':bundleTypesProcessor,'WaveTemplateBundle':bundleTypesProcessor},BINARY_COMPONENTS=[a160_0x4ba4a2(0x189),a160_0x4ba4a2(0x18f)];function bundleTypesProcessor(_0x4f9fea){const _0x5d018d=a160_0x4ba4a2,_0x528195=[],_0x43f2f8=new Set();Object[_0x5d018d(0x182)](_0x4f9fea[_0x5d018d(0x183)])['sort']()[_0x5d018d(0x170)](_0x5ebce3=>{const _0x3d859c=_0x5d018d,_0x37628d=getAuraName(_0x5ebce3);if(_0x37628d&&_0x37628d===_0x4f9fea['filePath']){const _0x3d6e83=_0x4f9fea[_0x3d859c(0x183)][_0x5ebce3],_0x37341a=getCrcWithData(_0x3d6e83);_0x37341a&&_0x528195[_0x3d859c(0x190)](_0x37341a);}else _0x43f2f8[_0x3d859c(0x16a)](_0x5ebce3);});const _0x13136b=calculateResultCRC32(_0x528195);return''+_0x13136b;}function calculateCRC32ForEachFile(_0x3c0d83){const _0x583d66=a160_0x4ba4a2,_0x2d6f0a=[],_0x16e4e1=BINARY_COMPONENTS['includes'](_0x3c0d83[_0x583d66(0x181)]);return Object[_0x583d66(0x182)](_0x3c0d83[_0x583d66(0x183)])[_0x583d66(0x178)]()['forEach'](_0x23648b=>{const _0x2e988d=_0x583d66,_0x44f0ec=_0x3c0d83['files'][_0x23648b],_0x14e888=getCrcWithData(_0x44f0ec,_0x16e4e1);_0x14e888&&_0x2d6f0a[_0x2e988d(0x190)](_0x14e888);}),_0x2d6f0a;}function calculateResultCRC32(_0x326d0){const _0x23cac5=a160_0x4ba4a2;let _0x54bbb2=0x0;_0x326d0[_0x23cac5(0x168)]&&(_0x54bbb2=_0x326d0[0x0]);if(_0x326d0[_0x23cac5(0x168)]<0x1a)for(let _0x4ebd07=0x1;_0x4ebd07<_0x326d0[_0x23cac5(0x168)];_0x4ebd07++){_0x54bbb2=Math[_0x23cac5(0x188)]((_0x326d0[_0x4ebd07]+_0x54bbb2)/0x2);}else{for(let _0x3bda01=0x1;_0x3bda01<_0x326d0[_0x23cac5(0x168)];_0x3bda01++){_0x54bbb2=Math[_0x23cac5(0x188)](_0x326d0[_0x3bda01]+_0x54bbb2);}_0x54bbb2=Math[_0x23cac5(0x188)](_0x54bbb2/_0x326d0[_0x23cac5(0x168)]);}return _0x54bbb2;}function otherComponentsProcessor(_0x259440){const _0x36c02b=a160_0x4ba4a2;return calculateCRC32ForEachFile(_0x259440)[_0x36c02b(0x176)]('\x20');}function vlocityComponentsProcessor(_0x3eff72){const _0x3ce630=calculateCRC32ForEachFile(_0x3eff72),_0x4121ac=calculateResultCRC32(_0x3ce630);return''+_0x4121ac;}function getPosition(_0x55043f,_0x9785e4,_0x4ab0e4){const _0x57c5e9=a160_0x4ba4a2;return _0x55043f[_0x57c5e9(0x18d)](_0x9785e4,_0x4ab0e4)['join'](_0x9785e4)['length'];}function a160_0x1420(){const _0x1604ff=['158408xkLiIA','waveTemplates/','split','apply','ContentAsset','push','lwc/','27474caUjmD','toString','2YdwGAy','length','buf','add','experiences/','lastIndexOf','(((.+)+)+)+$','528gRxQht','788669iMXHwp','forEach','crc-32','calculateCRC32','default','VLOCITY_COMPONENT_TYPES','includes','join','constructor','sort','5220WMSMsU','aura/','9mwzfGp','__esModule','321916MxZBSu','search','startsWith','slice','type','keys','files','5aubXsb','__importDefault','45023BTepyG','../data/vlocity-types','round','StaticResource','1012104TZRtbn'];a160_0x1420=function(){return _0x1604ff;};return a160_0x1420();}function getAuraName(_0x2b8290){const _0x520bcd=a160_0x4ba4a2;if(!_0x2b8290)return null;if(!_0x2b8290[_0x520bcd(0x17f)](_0x520bcd(0x17a))&&!_0x2b8290[_0x520bcd(0x17f)](_0x520bcd(0x191))&&!_0x2b8290[_0x520bcd(0x17f)]('experiences/')&&!_0x2b8290[_0x520bcd(0x17f)](_0x520bcd(0x18c)))return null;if(_0x2b8290[_0x520bcd(0x16c)]('/')>0x5&&_0x2b8290['lastIndexOf']('/')!==_0x2b8290[_0x520bcd(0x168)]-0x1){let _0x3d647d=_0x2b8290[_0x520bcd(0x180)](0x0,getPosition(_0x2b8290,'/',0x2));if(_0x2b8290[_0x520bcd(0x17f)](_0x520bcd(0x16b))||_0x2b8290[_0x520bcd(0x17f)](_0x520bcd(0x18c)))return _0x3d647d[_0x520bcd(0x16c)]('/')!==-0x1&&(_0x3d647d=_0x3d647d[_0x520bcd(0x180)](0x0,_0x3d647d[_0x520bcd(0x16c)]('/'))),_0x3d647d;return _0x3d647d;}return null;}function getCrcWithData(_0x26cda4,_0x1cf4ca=![]){const _0x2a30b5=a160_0x4ba4a2;if(_0x1cf4ca)return crc_32_1[_0x2a30b5(0x173)][_0x2a30b5(0x169)](_0x26cda4,0x20);return crc_32_1[_0x2a30b5(0x173)]['str'](_0x26cda4[_0x2a30b5(0x166)](),0x20);}function calculateCRC32(_0x431708){const _0xc2e3a6=a160_0x4ba4a2;if(componentTypeProcessFunctionMap[_0x431708[_0xc2e3a6(0x181)]])return componentTypeProcessFunctionMap[_0x431708[_0xc2e3a6(0x181)]](_0x431708);if(vlocity_types_1[_0xc2e3a6(0x174)][_0xc2e3a6(0x175)](_0x431708[_0xc2e3a6(0x181)]))return vlocityComponentsProcessor(_0x431708);return otherComponentsProcessor(_0x431708);}exports[a160_0x4ba4a2(0x172)]=calculateCRC32;