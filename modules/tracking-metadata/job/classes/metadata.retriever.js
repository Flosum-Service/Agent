const a342_0x1d10fe=a342_0x4b8e;(function(_0x1f4a69,_0x22db06){const _0x5121e1=a342_0x4b8e,_0x29ba48=_0x1f4a69();while(!![]){try{const _0x1f5f56=parseInt(_0x5121e1(0xc0))/0x1+parseInt(_0x5121e1(0xd8))/0x2+-parseInt(_0x5121e1(0xc7))/0x3+parseInt(_0x5121e1(0xbc))/0x4+parseInt(_0x5121e1(0xcb))/0x5+parseInt(_0x5121e1(0xcf))/0x6+parseInt(_0x5121e1(0xd4))/0x7*(-parseInt(_0x5121e1(0xc6))/0x8);if(_0x1f5f56===_0x22db06)break;else _0x29ba48['push'](_0x29ba48['shift']());}catch(_0x2cc5f5){_0x29ba48['push'](_0x29ba48['shift']());}}}(a342_0x36c1,0x445fe));const a342_0x529b5a=(function(){let _0x1cab35=!![];return function(_0x499947,_0x58c0e9){const _0x298e4e=_0x1cab35?function(){const _0x55f219=a342_0x4b8e;if(_0x58c0e9){const _0x50ef02=_0x58c0e9[_0x55f219(0xbb)](_0x499947,arguments);return _0x58c0e9=null,_0x50ef02;}}:function(){};return _0x1cab35=![],_0x298e4e;};}()),a342_0x2ba8aa=a342_0x529b5a(this,function(){const _0x47447a=a342_0x4b8e;return a342_0x2ba8aa[_0x47447a(0xdc)]()['search'](_0x47447a(0xd7))[_0x47447a(0xdc)]()[_0x47447a(0xb5)](a342_0x2ba8aa)['search'](_0x47447a(0xd7));});function a342_0x4b8e(_0xde08b7,_0x42510a){const _0x18e7f1=a342_0x36c1();return a342_0x4b8e=function(_0x2ba8aa,_0x529b5a){_0x2ba8aa=_0x2ba8aa-0xb3;let _0x36c154=_0x18e7f1[_0x2ba8aa];return _0x36c154;},a342_0x4b8e(_0xde08b7,_0x42510a);}a342_0x2ba8aa();'use strict';function a342_0x36c1(){const _0x1f6885=['files','DeclarativeFilterOptions','_flush','toString','PartialRetrieve','metadataResult','execute','constructor','LoggerAdapter','components','push','Transform','logger','apply','2176392qtlTWa','_transform','items','metadataId','463511PpwPKi','__esModule','api','metadataTypes','log','instance','5624768RjJrrh','704643EAkZUF','listMetadataItem','join','sourceMemberRecords','1387530lwMuLz','length','createDeclarativeFilter','update','1384170VBobBJ','metadataType','retrieveMetadata','stream','Retrieved\x20metadata\x20items\x20completed','14WAvTpG','MetadataRetriever','@flosum/salesforce','(((.+)+)+)+$','810650LTZTTM'];a342_0x36c1=function(){return _0x1f6885;};return a342_0x36c1();}Object['defineProperty'](exports,a342_0x1d10fe(0xc1),{'value':!![]}),exports['MetadataRetriever']=void 0x0;const salesforce_1=require(a342_0x1d10fe(0xd6)),stream_1=require(a342_0x1d10fe(0xd2)),logger_adapter_1=require('./logger/logger.adapter');class MetadataRetriever extends stream_1[a342_0x1d10fe(0xb9)]{constructor({apiVersion:_0x4bc11d,instance:_0x41a51c,metadataTypes:_0x1d15b7,logger:_0x82e654}){const _0x4a7ef5=a342_0x1d10fe;super({'objectMode':!![]}),this[_0x4a7ef5(0xca)]=[],this[_0x4a7ef5(0xc2)]=_0x4bc11d,this[_0x4a7ef5(0xba)]=_0x82e654,this['instance']=_0x41a51c,this[_0x4a7ef5(0xc3)]=_0x1d15b7;}[a342_0x1d10fe(0xcd)](){const _0x26b82a=a342_0x1d10fe,_0x2152a8=this[_0x26b82a(0xca)]['map'](_0x238e00=>_0x238e00[_0x26b82a(0xbf)])[_0x26b82a(0xc9)](';'),_0x209c26=[];return _0x209c26[_0x26b82a(0xb8)]({'field':'id','option':salesforce_1[_0x26b82a(0xda)]['IN'],'value':_0x2152a8}),_0x209c26;}async[a342_0x1d10fe(0xd1)](){const _0x121bed=a342_0x1d10fe,_0x2e49ce=this[_0x121bed(0xcd)](),_0x3b9f56=new logger_adapter_1[(_0x121bed(0xb6))](this['logger']);this['metadataResult']=await new salesforce_1[(_0x121bed(0xdd))](this[_0x121bed(0xc2)],this[_0x121bed(0xc5)],_0x3b9f56,_0x2e49ce,null,this[_0x121bed(0xc3)])[_0x121bed(0xb4)]();}async['handle'](){const _0x494eb7=a342_0x1d10fe;await this[_0x494eb7(0xd1)]();for(const _0x5ec1ea of this[_0x494eb7(0xca)]){const _0x985470=this[_0x494eb7(0xb3)][_0x494eb7(0xbe)][_0x5ec1ea[_0x494eb7(0xd0)]],_0x36c02d=_0x985470[_0x494eb7(0xb7)]['find'](_0x573b94=>_0x573b94[_0x494eb7(0xc8)]['id']===_0x5ec1ea[_0x494eb7(0xbf)]);if(!_0x36c02d)continue;const _0x1688ef={'sourceMemberRecord':_0x5ec1ea,'listMetadataItem':_0x36c02d[_0x494eb7(0xc8)],'files':_0x36c02d[_0x494eb7(0xd9)]};this[_0x494eb7(0xb8)](_0x1688ef);}}async[a342_0x1d10fe(0xbd)](_0x1fe9c2,_0x5df9f6,_0x4b3b15){const _0x18b4c1=a342_0x1d10fe;try{this[_0x18b4c1(0xca)][_0x18b4c1(0xb8)](_0x1fe9c2),_0x4b3b15();}catch(_0x208de){_0x4b3b15(_0x208de);}}async[a342_0x1d10fe(0xdb)](_0x4616cf){const _0xef6c26=a342_0x1d10fe;try{this[_0xef6c26(0xca)][_0xef6c26(0xcc)]&&await this['handle'](),this[_0xef6c26(0xba)][_0xef6c26(0xc4)](_0xef6c26(0xd3)),await this[_0xef6c26(0xba)][_0xef6c26(0xce)](),_0x4616cf();}catch(_0x4baf28){_0x4616cf(_0x4baf28);}}}exports[a342_0x1d10fe(0xd5)]=MetadataRetriever;