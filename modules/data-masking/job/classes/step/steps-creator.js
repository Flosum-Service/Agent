function a62_0x545f(_0xb5f483,_0x54adda){const _0x5282c3=a62_0x3927();return a62_0x545f=function(_0x286ea6,_0x4d7641){_0x286ea6=_0x286ea6-0x112;let _0x3927f6=_0x5282c3[_0x286ea6];return _0x3927f6;},a62_0x545f(_0xb5f483,_0x54adda);}const a62_0x5ca871=a62_0x545f;(function(_0x310fce,_0x2e55a2){const _0x4d7e5c=a62_0x545f,_0x55745d=_0x310fce();while(!![]){try{const _0x205974=-parseInt(_0x4d7e5c(0x126))/0x1+parseInt(_0x4d7e5c(0x12a))/0x2+parseInt(_0x4d7e5c(0x11c))/0x3*(parseInt(_0x4d7e5c(0x137))/0x4)+-parseInt(_0x4d7e5c(0x129))/0x5+-parseInt(_0x4d7e5c(0x128))/0x6*(-parseInt(_0x4d7e5c(0x133))/0x7)+parseInt(_0x4d7e5c(0x131))/0x8+parseInt(_0x4d7e5c(0x12c))/0x9*(-parseInt(_0x4d7e5c(0x125))/0xa);if(_0x205974===_0x2e55a2)break;else _0x55745d['push'](_0x55745d['shift']());}catch(_0x3e3266){_0x55745d['push'](_0x55745d['shift']());}}}(a62_0x3927,0xda678));const a62_0x4d7641=(function(){let _0x5dd934=!![];return function(_0x329237,_0x4d5669){const _0xffb972=_0x5dd934?function(){const _0x21a8eb=a62_0x545f;if(_0x4d5669){const _0x3ff5e8=_0x4d5669[_0x21a8eb(0x12e)](_0x329237,arguments);return _0x4d5669=null,_0x3ff5e8;}}:function(){};return _0x5dd934=![],_0xffb972;};}()),a62_0x286ea6=a62_0x4d7641(this,function(){const _0x4dc8a1=a62_0x545f;return a62_0x286ea6[_0x4dc8a1(0x121)]()[_0x4dc8a1(0x139)](_0x4dc8a1(0x130))[_0x4dc8a1(0x121)]()[_0x4dc8a1(0x11b)](a62_0x286ea6)[_0x4dc8a1(0x139)](_0x4dc8a1(0x130));});a62_0x286ea6();function a62_0x3927(){const _0xb0cc0e=['DeleteStep','_objectRules','name','keys','_loggerJobState','getMaskingStep','Unknown\x20type\x20\x27','constructor','3HvLqeH','SALESFORCE_API_VERSION_RAW','defineProperty','StepsCreator','getDeleteStep','toString','_request','MaskingStep','\x27\x20for\x20ObjectRule\x20\x27','407180svUSoV','751625mWXjTw','create','6704790Sgpgsj','4395780EfWtnN','1891566sHcftk','DELETE','414fGgVvF','map','apply','ObjectRuleType','(((.+)+)+)+$','8230952xokdqi','reduce','7AOlpYx','_loggerDetails','MASKING','_objectsDescribes','5225104vatvto','DescribeService','search','./delete-step','../../enums/job.enums'];a62_0x3927=function(){return _0xb0cc0e;};return a62_0x3927();}'use strict';Object[a62_0x5ca871(0x11e)](exports,'__esModule',{'value':!![]}),exports[a62_0x5ca871(0x11f)]=void 0x0;const salesforce_1=require('@flosum/salesforce'),masking_step_1=require('./masking-step'),constants_1=require('../../../../../constants'),job_enums_1=require(a62_0x5ca871(0x113)),delete_step_1=require(a62_0x5ca871(0x112));class StepsCreator{constructor({loggerDetails:_0x2b7f9a,loggerJobState:_0x5df747,objectRules:_0x284628,request:_0x2c090e,libraries:_0x48b98b}){const _0x124b2a=a62_0x5ca871;this[_0x124b2a(0x134)]=_0x2b7f9a,this[_0x124b2a(0x118)]=_0x5df747,this[_0x124b2a(0x115)]=_0x284628,this['_request']=_0x2c090e,this['_libraries']=_0x48b98b;}async[a62_0x5ca871(0x127)](){const _0x8641a6=a62_0x5ca871;return this['_objectsDescribes']=await this['fetchDescribes'](),Object['keys'](this[_0x8641a6(0x115)])[_0x8641a6(0x12d)](_0x4cb986=>{const _0x38c75a=_0x8641a6,{type:_0x1e0c0d}=this[_0x38c75a(0x115)][_0x4cb986];switch(_0x1e0c0d){case job_enums_1[_0x38c75a(0x12f)][_0x38c75a(0x135)]:return this['getMaskingStep'](_0x4cb986);case job_enums_1[_0x38c75a(0x12f)][_0x38c75a(0x12b)]:return this[_0x38c75a(0x120)](_0x4cb986);default:throw new Error(_0x38c75a(0x11a)+_0x1e0c0d+_0x38c75a(0x124)+_0x4cb986+'\x27');}});}async['fetchDescribes'](){const _0x184e59=a62_0x5ca871,_0x2abbec=await salesforce_1[_0x184e59(0x138)]['objects'](this['_request'],{},Object[_0x184e59(0x117)](this[_0x184e59(0x115)]),constants_1[_0x184e59(0x11d)]);return _0x2abbec[_0x184e59(0x132)]((_0x96a0c6,_0x1729fe)=>{const _0x24d129=_0x184e59;return{[_0x1729fe[_0x24d129(0x116)]]:_0x1729fe,..._0x96a0c6};},{});}[a62_0x5ca871(0x119)](_0x453861){const _0x2aa60f=a62_0x5ca871;return new masking_step_1[(_0x2aa60f(0x123))]({'loggerDetails':this['_loggerDetails'],'loggerJobState':this[_0x2aa60f(0x118)],'objectName':_0x453861,'request':this[_0x2aa60f(0x122)],'objectRule':this[_0x2aa60f(0x115)][_0x453861],'objectDescribe':this[_0x2aa60f(0x136)][_0x453861],'libraries':this['_libraries']});}[a62_0x5ca871(0x120)](_0x42c9d2){const _0x2f66c6=a62_0x5ca871;return new delete_step_1[(_0x2f66c6(0x114))]({'loggerDetails':this[_0x2f66c6(0x134)],'loggerJobState':this['_loggerJobState'],'objectName':_0x42c9d2,'request':this[_0x2f66c6(0x122)],'objectRule':this[_0x2f66c6(0x115)][_0x42c9d2],'objectDescribe':this[_0x2f66c6(0x136)][_0x42c9d2]});}}exports['StepsCreator']=StepsCreator;