const a76_0x12f274=a76_0x2fbb;function a76_0x28bd(){const _0x145e9d=['1041785HpiJmq','Masking\x20object\x20\x27','log','../../masking/standard-masking','getDeployStream','objectDescribe','469070CpjSwy','getMaskingStream','setObjectStatus','getRetrieveStream','__esModule','objectRule','constructor','fields','search','IN_PROGRESS','58290CvjbBz','execute','78BICzHn','8iRccbj','getRecordsCount','keys','COMPLETED','ObjectStatus','stream/promises','error','set','loggerJobState','30acZUBP','objectName','MaskingStep','5475371CPVJai','toString','../../enums/logger.enums','pipeline','fieldRules','4132824fbVVGU','(((.+)+)+)+$','_libraries','Finish\x20masking\x20for\x20object\x20\x27','recordsCount','1358500mximil','9592911gqNupn','StandardMasking','51lYeDwC','BaseStep'];a76_0x28bd=function(){return _0x145e9d;};return a76_0x28bd();}(function(_0x1bd4df,_0x54b37b){const _0x57c622=a76_0x2fbb,_0x8da06e=_0x1bd4df();while(!![]){try{const _0xe1d921=parseInt(_0x57c622(0x19b))/0x1+-parseInt(_0x57c622(0x1ab))/0x2*(parseInt(_0x57c622(0x199))/0x3)+parseInt(_0x57c622(0x1bf))/0x4+parseInt(_0x57c622(0x196))/0x5+-parseInt(_0x57c622(0x1ad))/0x6*(parseInt(_0x57c622(0x1a1))/0x7)+parseInt(_0x57c622(0x1ae))/0x8*(parseInt(_0x57c622(0x197))/0x9)+-parseInt(_0x57c622(0x1b7))/0xa*(parseInt(_0x57c622(0x1ba))/0xb);if(_0xe1d921===_0x54b37b)break;else _0x8da06e['push'](_0x8da06e['shift']());}catch(_0x56e6b6){_0x8da06e['push'](_0x8da06e['shift']());}}}(a76_0x28bd,0x86ef4));const a76_0x25671f=(function(){let _0x56ae0b=!![];return function(_0x15a4ec,_0x13367b){const _0x1b2dfc=_0x56ae0b?function(){if(_0x13367b){const _0x5cb68a=_0x13367b['apply'](_0x15a4ec,arguments);return _0x13367b=null,_0x5cb68a;}}:function(){};return _0x56ae0b=![],_0x1b2dfc;};}()),a76_0x53403c=a76_0x25671f(this,function(){const _0x1796fc=a76_0x2fbb;return a76_0x53403c[_0x1796fc(0x1bb)]()['search'](_0x1796fc(0x192))[_0x1796fc(0x1bb)]()[_0x1796fc(0x1a7)](a76_0x53403c)[_0x1796fc(0x1a9)](_0x1796fc(0x192));});a76_0x53403c();function a76_0x2fbb(_0x3f44b0,_0x40119e){const _0x58865f=a76_0x28bd();return a76_0x2fbb=function(_0x53403c,_0x25671f){_0x53403c=_0x53403c-0x192;let _0x28bd92=_0x58865f[_0x53403c];return _0x28bd92;},a76_0x2fbb(_0x3f44b0,_0x40119e);}'use strict';Object['defineProperty'](exports,a76_0x12f274(0x1a5),{'value':!![]}),exports[a76_0x12f274(0x1b9)]=void 0x0;const promises_1=require(a76_0x12f274(0x1b3)),logger_enums_1=require(a76_0x12f274(0x1bc)),standard_masking_1=require(a76_0x12f274(0x19e)),base_step_1=require('./base-step');class MaskingStep extends base_step_1[a76_0x12f274(0x19a)]{constructor({libraries:_0x5edbe4,..._0x3cc507}){const _0x4b664f=a76_0x12f274;super(_0x3cc507),this[_0x4b664f(0x1a6)]=_0x3cc507[_0x4b664f(0x1a6)],this[_0x4b664f(0x193)]=_0x5edbe4,this[_0x4b664f(0x1a8)]=Object[_0x4b664f(0x1b0)](this[_0x4b664f(0x1a6)][_0x4b664f(0x1be)]);}async[a76_0x12f274(0x1ac)](){const _0x28e1fd=a76_0x12f274;this[_0x28e1fd(0x19d)](_0x28e1fd(0x19c)+this[_0x28e1fd(0x1b8)]+'\x27'),this['loggerJobState']['setObjectStatus'](this['objectName'],logger_enums_1[_0x28e1fd(0x1b2)][_0x28e1fd(0x1aa)]);try{this[_0x28e1fd(0x195)]=await this[_0x28e1fd(0x1af)](),this[_0x28e1fd(0x195)]!==0x0&&await(0x0,promises_1[_0x28e1fd(0x1bd)])(this[_0x28e1fd(0x1a4)](),this['getMaskingStream'](),this[_0x28e1fd(0x19f)]()),this[_0x28e1fd(0x1b6)][_0x28e1fd(0x1a3)](this[_0x28e1fd(0x1b8)],logger_enums_1['ObjectStatus'][_0x28e1fd(0x1b1)]),this[_0x28e1fd(0x19d)](_0x28e1fd(0x194)+this[_0x28e1fd(0x1b8)]+'\x27');}catch(_0x3bbd00){this[_0x28e1fd(0x1b4)](_0x3bbd00),this[_0x28e1fd(0x1b6)][_0x28e1fd(0x1a3)](this[_0x28e1fd(0x1b8)],logger_enums_1[_0x28e1fd(0x1b2)]['FAILED']);}}[a76_0x12f274(0x1a2)](){const _0x309a47=a76_0x12f274,_0x18e0bf=this[_0x309a47(0x1a0)][_0x309a47(0x1a8)]['reduce']((_0x269546,_0x3872ad)=>_0x269546[_0x309a47(0x1b5)](_0x3872ad['name'],_0x3872ad),new Map()),_0x3736d9={'objectName':this['objectName'],'fieldRules':this['objectRule']['fieldRules'],'describeFieldMap':_0x18e0bf,'libraries':this['_libraries']};return new standard_masking_1[(_0x309a47(0x198))](_0x3736d9);}}exports[a76_0x12f274(0x1b9)]=MaskingStep;