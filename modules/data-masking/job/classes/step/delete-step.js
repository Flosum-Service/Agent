const a60_0xb2df4c=a60_0x7ae3;(function(_0x35b2e6,_0x291890){const _0x2fe205=a60_0x7ae3,_0x2db355=_0x35b2e6();while(!![]){try{const _0x55b0dd=-parseInt(_0x2fe205(0x153))/0x1*(-parseInt(_0x2fe205(0x152))/0x2)+-parseInt(_0x2fe205(0x159))/0x3+-parseInt(_0x2fe205(0x14c))/0x4+parseInt(_0x2fe205(0x143))/0x5+parseInt(_0x2fe205(0x155))/0x6+parseInt(_0x2fe205(0x13f))/0x7*(-parseInt(_0x2fe205(0x14e))/0x8)+parseInt(_0x2fe205(0x146))/0x9;if(_0x55b0dd===_0x291890)break;else _0x2db355['push'](_0x2db355['shift']());}catch(_0x3eb551){_0x2db355['push'](_0x2db355['shift']());}}}(a60_0xe2a4,0x22102));const a60_0x171689=(function(){let _0x3a694e=!![];return function(_0x147b48,_0x1cd7d3){const _0x312e31=_0x3a694e?function(){const _0x28998b=a60_0x7ae3;if(_0x1cd7d3){const _0xa907a=_0x1cd7d3[_0x28998b(0x156)](_0x147b48,arguments);return _0x1cd7d3=null,_0xa907a;}}:function(){};return _0x3a694e=![],_0x312e31;};}()),a60_0x55f857=a60_0x171689(this,function(){const _0x557056=a60_0x7ae3;return a60_0x55f857['toString']()[_0x557056(0x158)]('(((.+)+)+)+$')[_0x557056(0x145)]()[_0x557056(0x15d)](a60_0x55f857)[_0x557056(0x158)]('(((.+)+)+)+$');});function a60_0x7ae3(_0x5ce88a,_0x3ec260){const _0x2256d0=a60_0xe2a4();return a60_0x7ae3=function(_0x55f857,_0x171689){_0x55f857=_0x55f857-0x13f;let _0xe2a42e=_0x2256d0[_0x55f857];return _0xe2a42e;},a60_0x7ae3(_0x5ce88a,_0x3ec260);}a60_0x55f857();'use strict';function a60_0xe2a4(){const _0x2579aa=['defineProperty','356876zWMdPr','stream/promises','568faXwCJ','log','FAILED','loggerJobState','2776rLOdVB','141ihEJJS','getRecordsCount','1274454vUZKqt','apply','setObjectStatus','search','657000ugSMzH','COMPLETED','pipeline','objectName','constructor','19131UgwQcZ','DeleteStep','getDeployStream','ObjectStatus','100500hkparv','recordsCount','toString','1922103ouZFjl','__esModule','Deleting\x20records\x20for\x20object\x20\x27','getRetrieveStream','BaseStep'];a60_0xe2a4=function(){return _0x2579aa;};return a60_0xe2a4();}Object[a60_0xb2df4c(0x14b)](exports,a60_0xb2df4c(0x147),{'value':!![]}),exports[a60_0xb2df4c(0x140)]=void 0x0;const base_step_1=require('./base-step'),logger_enums_1=require('../../enums/logger.enums'),promises_1=require(a60_0xb2df4c(0x14d));class DeleteStep extends base_step_1[a60_0xb2df4c(0x14a)]{constructor(_0x54df1a){super(_0x54df1a);}async['execute'](){const _0x487920=a60_0xb2df4c;this[_0x487920(0x14f)](_0x487920(0x148)+this[_0x487920(0x15c)]+'\x27'),this[_0x487920(0x151)][_0x487920(0x157)](this['objectName'],logger_enums_1['ObjectStatus']['IN_PROGRESS']);try{this[_0x487920(0x144)]=await this[_0x487920(0x154)](),this[_0x487920(0x144)]!==0x0&&await(0x0,promises_1[_0x487920(0x15b)])(this[_0x487920(0x149)](),this[_0x487920(0x141)]()),this[_0x487920(0x151)][_0x487920(0x157)](this[_0x487920(0x15c)],logger_enums_1[_0x487920(0x142)][_0x487920(0x15a)]),this[_0x487920(0x14f)]('Finish\x20deleting\x20records\x20for\x20object\x20\x27'+this['objectName']+'\x27');}catch(_0x579e9d){this['error'](_0x579e9d),this[_0x487920(0x151)][_0x487920(0x157)](this[_0x487920(0x15c)],logger_enums_1['ObjectStatus'][_0x487920(0x150)]);}}}exports[a60_0xb2df4c(0x140)]=DeleteStep;