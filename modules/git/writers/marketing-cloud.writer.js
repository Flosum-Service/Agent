const a292_0x26eb16=a292_0xde2a;(function(_0x3f82be,_0x24d69e){const _0xf00665=a292_0xde2a,_0x1ff1f0=_0x3f82be();while(!![]){try{const _0x10a432=parseInt(_0xf00665(0x210))/0x1+parseInt(_0xf00665(0x20e))/0x2+parseInt(_0xf00665(0x204))/0x3*(parseInt(_0xf00665(0x20a))/0x4)+-parseInt(_0xf00665(0x1f4))/0x5+-parseInt(_0xf00665(0x209))/0x6+parseInt(_0xf00665(0x200))/0x7+-parseInt(_0xf00665(0x212))/0x8;if(_0x10a432===_0x24d69e)break;else _0x1ff1f0['push'](_0x1ff1f0['shift']());}catch(_0x4f22d7){_0x1ff1f0['push'](_0x1ff1f0['shift']());}}}(a292_0x1780,0x90bc1));const a292_0x4f1fa4=(function(){let _0x17e955=!![];return function(_0x5ec23d,_0x5a150f){const _0x1f7856=_0x17e955?function(){if(_0x5a150f){const _0x352854=_0x5a150f['apply'](_0x5ec23d,arguments);return _0x5a150f=null,_0x352854;}}:function(){};return _0x17e955=![],_0x1f7856;};}()),a292_0x382194=a292_0x4f1fa4(this,function(){const _0x577720=a292_0xde2a;return a292_0x382194[_0x577720(0x208)]()[_0x577720(0x203)](_0x577720(0x213))[_0x577720(0x208)]()[_0x577720(0x211)](a292_0x382194)[_0x577720(0x203)]('(((.+)+)+)+$');});function a292_0x1780(){const _0x4b31a0=['MarketingCloudWriter','1069548wzLlPQ','length','233972hOhsGB','constructor','1265608iueSFH','(((.+)+)+)+$','5225655FAexJT','default','MAX_WRITES_PER_TICK','__esModule','execute','map','Have\x20to\x20write\x20%d\x20files','components','path','../internal/fs.internal','writeFile','join','6262242WGWcTo','sourceDir','log','search','339uDnpFH','__importDefault','name','defineProperty','toString','2100894jZkBfi','17096sUXnYi','BaseWriter','body'];a292_0x1780=function(){return _0x4b31a0;};return a292_0x1780();}function a292_0xde2a(_0x45f383,_0x2a2bde){const _0x775cfb=a292_0x1780();return a292_0xde2a=function(_0x382194,_0x4f1fa4){_0x382194=_0x382194-0x1f4;let _0x1780a4=_0x775cfb[_0x382194];return _0x1780a4;},a292_0xde2a(_0x45f383,_0x2a2bde);}a292_0x382194();'use strict';var __importDefault=this&&this[a292_0x26eb16(0x205)]||function(_0x452783){const _0x2b2ba7=a292_0x26eb16;return _0x452783&&_0x452783[_0x2b2ba7(0x1f7)]?_0x452783:{'default':_0x452783};};Object[a292_0x26eb16(0x207)](exports,'__esModule',{'value':!![]}),exports[a292_0x26eb16(0x20d)]=void 0x0;const path_1=__importDefault(require(a292_0x26eb16(0x1fc))),base_writer_1=require('./base.writer'),fs_internal_1=require(a292_0x26eb16(0x1fd));class MarketingCloudWriter extends base_writer_1[a292_0x26eb16(0x20b)]{constructor({components:_0x248927,sourceDir:_0x3b790f}){const _0xb4b9ad=a292_0x26eb16;super({'components':_0x248927,'sourceDir':_0x3b790f},MarketingCloudWriter[_0xb4b9ad(0x206)]),this[_0xb4b9ad(0x1f6)]=0x64;}async[a292_0x26eb16(0x1f8)](){const _0x1463f3=a292_0x26eb16;!await fs_internal_1['FS']['exists'](this[_0x1463f3(0x201)])&&await fs_internal_1['FS']['makeDir'](this['sourceDir']);this['logger'][_0x1463f3(0x202)](_0x1463f3(0x1fa),this[_0x1463f3(0x1fb)][_0x1463f3(0x20f)]);while(this[_0x1463f3(0x1fb)][_0x1463f3(0x20f)]){const _0x498d73=this[_0x1463f3(0x1fb)]['splice'](0x0,this[_0x1463f3(0x1f6)]);for(const _0x34cde0 of _0x498d73){const _0x1fe49a=await this['readZip'](_0x34cde0[_0x1463f3(0x20c)],!![]),_0x4ca6ee=_0x1fe49a[_0x1463f3(0x1f9)](async({filename:_0x9da56c,body:_0xa648a1})=>{const _0x1e1edd=_0x1463f3;return fs_internal_1['FS'][_0x1e1edd(0x1fe)](path_1[_0x1e1edd(0x1f5)][_0x1e1edd(0x1ff)](this['sourceDir'],_0x9da56c),_0xa648a1);});await Promise['all'](_0x4ca6ee);}}}}exports[a292_0x26eb16(0x20d)]=MarketingCloudWriter;