const a331_0x22c593=a331_0x483a;(function(_0x5781b5,_0x1fbfd6){const _0x52686a=a331_0x483a,_0x1e0acb=_0x5781b5();while(!![]){try{const _0x4fa817=-parseInt(_0x52686a(0xc2))/0x1*(parseInt(_0x52686a(0xd8))/0x2)+-parseInt(_0x52686a(0xbf))/0x3*(parseInt(_0x52686a(0xde))/0x4)+-parseInt(_0x52686a(0xd0))/0x5*(parseInt(_0x52686a(0xc9))/0x6)+parseInt(_0x52686a(0xcf))/0x7*(parseInt(_0x52686a(0xce))/0x8)+parseInt(_0x52686a(0xca))/0x9+-parseInt(_0x52686a(0xd4))/0xa+parseInt(_0x52686a(0xdf))/0xb;if(_0x4fa817===_0x1fbfd6)break;else _0x1e0acb['push'](_0x1e0acb['shift']());}catch(_0x5512ce){_0x1e0acb['push'](_0x1e0acb['shift']());}}}(a331_0x48b0,0xaa733));const a331_0x458ff6=(function(){let _0x56e235=!![];return function(_0x5ad456,_0x4053af){const _0x40b2eb=_0x56e235?function(){const _0x3b2ee0=a331_0x483a;if(_0x4053af){const _0x50a964=_0x4053af[_0x3b2ee0(0xbd)](_0x5ad456,arguments);return _0x4053af=null,_0x50a964;}}:function(){};return _0x56e235=![],_0x40b2eb;};}()),a331_0x4a999f=a331_0x458ff6(this,function(){const _0x11efc2=a331_0x483a;return a331_0x4a999f[_0x11efc2(0xbb)]()['search']('(((.+)+)+)+$')['toString']()['constructor'](a331_0x4a999f)[_0x11efc2(0xe2)]('(((.+)+)+)+$');});a331_0x4a999f();'use strict';Object[a331_0x22c593(0xe1)](exports,a331_0x22c593(0xcd),{'value':!![]}),exports[a331_0x22c593(0xd7)]=void 0x0;function a331_0x483a(_0x51f955,_0x509d00){const _0x30235c=a331_0x48b0();return a331_0x483a=function(_0x4a999f,_0x458ff6){_0x4a999f=_0x4a999f-0xba;let _0x48b05e=_0x30235c[_0x4a999f];return _0x48b05e;},a331_0x483a(_0x51f955,_0x509d00);}const salesforce_1=require('@flosum/salesforce'),stream_1=require(a331_0x22c593(0xc4)),logger_adapter_1=require(a331_0x22c593(0xe0));class MetadataRetriever extends stream_1[a331_0x22c593(0xba)]{constructor({apiVersion:_0x474c79,instance:_0x1e5b31,metadataTypes:_0x384985,logger:_0x4912ec}){const _0x14b063=a331_0x22c593;super({'objectMode':!![]}),this[_0x14b063(0xdb)]=[],this[_0x14b063(0xd9)]=_0x474c79,this[_0x14b063(0xc5)]=_0x4912ec,this[_0x14b063(0xc6)]=_0x1e5b31,this[_0x14b063(0xda)]=_0x384985;}[a331_0x22c593(0xd1)](){const _0x3f0000=a331_0x22c593,_0x419b81=this['sourceMemberRecords'][_0x3f0000(0xd3)](_0x804353=>_0x804353['metadataId'])['join'](';'),_0x28ec45=[];return _0x28ec45[_0x3f0000(0xcb)]({'field':'id','option':salesforce_1[_0x3f0000(0xc1)]['IN'],'value':_0x419b81}),_0x28ec45;}async[a331_0x22c593(0xc8)](){const _0x510828=a331_0x22c593,_0x422c12=this['createDeclarativeFilter'](),_0x45a955=new logger_adapter_1['LoggerAdapter'](this['logger']);this[_0x510828(0xd6)]=await new salesforce_1['PartialRetrieve'](this[_0x510828(0xd9)],this['instance'],_0x45a955,_0x422c12,null,this['metadataTypes'])[_0x510828(0xd2)]();}async[a331_0x22c593(0xc0)](){const _0x3284ff=a331_0x22c593;await this[_0x3284ff(0xc8)]();for(const _0x4fdde4 of this['sourceMemberRecords']){const _0x6d0550=this[_0x3284ff(0xd6)]['items'][_0x4fdde4['metadataType']],_0x1599ec=_0x6d0550['components'][_0x3284ff(0xcc)](_0x275c13=>_0x275c13[_0x3284ff(0xd5)]['id']===_0x4fdde4[_0x3284ff(0xc7)]);if(!_0x1599ec)continue;const _0x4e8b13={'sourceMemberRecord':_0x4fdde4,'listMetadataItem':_0x1599ec['listMetadataItem'],'files':_0x1599ec['files']};this[_0x3284ff(0xcb)](_0x4e8b13);}}async[a331_0x22c593(0xdc)](_0x5178bb,_0x280d7d,_0x5671f5){const _0xc99471=a331_0x22c593;try{this[_0xc99471(0xdb)][_0xc99471(0xcb)](_0x5178bb),_0x5671f5();}catch(_0x119f4b){_0x5671f5(_0x119f4b);}}async[a331_0x22c593(0xe3)](_0x549a77){const _0x512ba1=a331_0x22c593;try{this['sourceMemberRecords'][_0x512ba1(0xdd)]&&await this[_0x512ba1(0xc0)](),this['logger'][_0x512ba1(0xc3)](_0x512ba1(0xbc)),await this[_0x512ba1(0xc5)][_0x512ba1(0xbe)](),_0x549a77();}catch(_0xda7054){_0x549a77(_0xda7054);}}}function a331_0x48b0(){const _0x393f01=['update','38778ExlEyS','handle','DeclarativeFilterOptions','1xeXqTo','log','stream','logger','instance','metadataId','retrieveMetadata','2935110HzJNTS','71766beXlpi','push','find','__esModule','18936AIqpuj','1309kWCmsH','5EhHrul','createDeclarativeFilter','execute','map','1103830XDcuxK','listMetadataItem','metadataResult','MetadataRetriever','2194058QiFsSJ','api','metadataTypes','sourceMemberRecords','_transform','length','356zGSYVb','34040281moGrwg','./logger/logger.adapter','defineProperty','search','_flush','Transform','toString','Retrieved\x20metadata\x20items\x20completed','apply'];a331_0x48b0=function(){return _0x393f01;};return a331_0x48b0();}exports[a331_0x22c593(0xd7)]=MetadataRetriever;