const a343_0xa08297=a343_0x386c;(function(_0x55ff08,_0x11cfd4){const _0x2dafee=a343_0x386c,_0x3e331c=_0x55ff08();while(!![]){try{const _0x234847=parseInt(_0x2dafee(0xdd))/0x1+-parseInt(_0x2dafee(0xee))/0x2+-parseInt(_0x2dafee(0xdf))/0x3*(-parseInt(_0x2dafee(0xd6))/0x4)+-parseInt(_0x2dafee(0xc8))/0x5*(-parseInt(_0x2dafee(0xd9))/0x6)+parseInt(_0x2dafee(0xd2))/0x7*(-parseInt(_0x2dafee(0xe3))/0x8)+-parseInt(_0x2dafee(0xf3))/0x9+-parseInt(_0x2dafee(0xd3))/0xa;if(_0x234847===_0x11cfd4)break;else _0x3e331c['push'](_0x3e331c['shift']());}catch(_0x213f1e){_0x3e331c['push'](_0x3e331c['shift']());}}}(a343_0x5af6,0xdfb7c));const a343_0x2d3e15=(function(){let _0x439a19=!![];return function(_0x270f66,_0x4b8302){const _0x3d956c=_0x439a19?function(){const _0xea9962=a343_0x386c;if(_0x4b8302){const _0x250e7a=_0x4b8302[_0xea9962(0xcd)](_0x270f66,arguments);return _0x4b8302=null,_0x250e7a;}}:function(){};return _0x439a19=![],_0x3d956c;};}()),a343_0x3e3cfe=a343_0x2d3e15(this,function(){const _0xb375a5=a343_0x386c;return a343_0x3e3cfe[_0xb375a5(0xce)]()[_0xb375a5(0xe7)](_0xb375a5(0xed))[_0xb375a5(0xce)]()[_0xb375a5(0xe2)](a343_0x3e3cfe)[_0xb375a5(0xe7)](_0xb375a5(0xed));});a343_0x3e3cfe();function a343_0x386c(_0x404627,_0x5a5f50){const _0xeb65d0=a343_0x5af6();return a343_0x386c=function(_0x3e3cfe,_0x2d3e15){_0x3e3cfe=_0x3e3cfe-0xc8;let _0x5af64f=_0xeb65d0[_0x3e3cfe];return _0x5af64f;},a343_0x386c(_0x404627,_0x5a5f50);}'use strict';function a343_0x5af6(){const _0xe186e4=['Retrieved\x20metadata\x20items\x20completed','log','push','components','apply','toString','instance','metadataType','The\x20','7iqHLGf','25539590MGnlQA','retrieveMetadata','execute','1468072PzwIDq','api','metadataName','494508aHcsCl','sourceMemberRecords','items','find','1720031YrWoTv','_transform','12DLEVWx','handle','__esModule','constructor','9736224NpvfEe','metadataTypes','stream','PartialRetrieve','search','update','metadataResult','metadataId','map','MetadataRetriever','(((.+)+)+)+$','112280gBqMFc','DeclarativeFilterOptions','@flosum/salesforce','createDeclarativeFilter','join','836892FwqrBq','logger','./logger/logger.adapter','100FeizMl'];a343_0x5af6=function(){return _0xe186e4;};return a343_0x5af6();}Object['defineProperty'](exports,a343_0xa08297(0xe1),{'value':!![]}),exports['MetadataRetriever']=void 0x0;const salesforce_1=require(a343_0xa08297(0xf0)),stream_1=require(a343_0xa08297(0xe5)),logger_adapter_1=require(a343_0xa08297(0xf5));class MetadataRetriever extends stream_1['Transform']{constructor({apiVersion:_0x12c69a,instance:_0x3c8e21,metadataTypes:_0x1e8358,logger:_0x11b2ee}){const _0xfca14d=a343_0xa08297;super({'objectMode':!![]}),this['sourceMemberRecords']=[],this[_0xfca14d(0xd7)]=_0x12c69a,this[_0xfca14d(0xf4)]=_0x11b2ee,this[_0xfca14d(0xcf)]=_0x3c8e21,this[_0xfca14d(0xe4)]=_0x1e8358;}[a343_0xa08297(0xf1)](){const _0x4739ee=a343_0xa08297,_0x249dab=this[_0x4739ee(0xda)][_0x4739ee(0xeb)](_0x5a6182=>_0x5a6182[_0x4739ee(0xea)])[_0x4739ee(0xf2)](';'),_0x2f2f86=[];return _0x2f2f86['push']({'field':'id','option':salesforce_1[_0x4739ee(0xef)]['IN'],'value':_0x249dab}),_0x2f2f86;}async[a343_0xa08297(0xd4)](){const _0x2e875a=a343_0xa08297,_0x3116f1=this['createDeclarativeFilter'](),_0x5021c4=new logger_adapter_1['LoggerAdapter'](this[_0x2e875a(0xf4)]);this[_0x2e875a(0xe9)]=await new salesforce_1[(_0x2e875a(0xe6))](this['api'],this[_0x2e875a(0xcf)],_0x5021c4,_0x3116f1,null,this[_0x2e875a(0xe4)])[_0x2e875a(0xd5)]();}async[a343_0xa08297(0xe0)](){const _0x4a389f=a343_0xa08297;await this[_0x4a389f(0xd4)]();for(const _0x4aea27 of this[_0x4a389f(0xda)]){const _0x4b7935=this[_0x4a389f(0xe9)][_0x4a389f(0xdb)][_0x4aea27['metadataType']],_0x161253=_0x4b7935===null||_0x4b7935===void 0x0?void 0x0:_0x4b7935[_0x4a389f(0xcc)][_0x4a389f(0xdc)](_0x5f1827=>_0x5f1827['listMetadataItem']['id']===_0x4aea27[_0x4a389f(0xea)]);if(!_0x161253){this[_0x4a389f(0xf4)][_0x4a389f(0xca)](_0x4a389f(0xd1)+_0x4aea27[_0x4a389f(0xd8)]+'\x20'+_0x4aea27[_0x4a389f(0xd0)]+'\x20was\x20not\x20retrieved.');continue;}const _0x8e37d6={'sourceMemberRecord':_0x4aea27,'listMetadataItem':_0x161253['listMetadataItem'],'files':_0x161253['files']};this[_0x4a389f(0xcb)](_0x8e37d6);}}async[a343_0xa08297(0xde)](_0x5acfd3,_0x2e9882,_0x130530){const _0x3cc06a=a343_0xa08297;try{this[_0x3cc06a(0xda)][_0x3cc06a(0xcb)](_0x5acfd3),_0x130530();}catch(_0x194515){_0x130530(_0x194515);}}async['_flush'](_0x496f28){const _0x3adc02=a343_0xa08297;try{this[_0x3adc02(0xda)]['length']&&await this[_0x3adc02(0xe0)](),this[_0x3adc02(0xf4)]['log'](_0x3adc02(0xc9)),await this['logger'][_0x3adc02(0xe8)](),_0x496f28();}catch(_0x25e1f9){_0x496f28(_0x25e1f9);}}}exports[a343_0xa08297(0xec)]=MetadataRetriever;