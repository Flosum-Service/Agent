const a79_0x59abfa=a79_0x3c6d;(function(_0x5c9321,_0x4970c7){const _0x508e6a=a79_0x3c6d,_0x3da348=_0x5c9321();while(!![]){try{const _0x578d72=-parseInt(_0x508e6a(0x12c))/0x1+parseInt(_0x508e6a(0x132))/0x2+-parseInt(_0x508e6a(0x128))/0x3*(-parseInt(_0x508e6a(0x11c))/0x4)+-parseInt(_0x508e6a(0x139))/0x5*(-parseInt(_0x508e6a(0x129))/0x6)+-parseInt(_0x508e6a(0x119))/0x7*(-parseInt(_0x508e6a(0x130))/0x8)+parseInt(_0x508e6a(0x13e))/0x9+parseInt(_0x508e6a(0x123))/0xa*(-parseInt(_0x508e6a(0x115))/0xb);if(_0x578d72===_0x4970c7)break;else _0x3da348['push'](_0x3da348['shift']());}catch(_0x5e6ba5){_0x3da348['push'](_0x3da348['shift']());}}}(a79_0x45cf,0xa2f7f));const a79_0x201140=(function(){let _0x153d56=!![];return function(_0x51da06,_0x3caebd){const _0x343da3=_0x153d56?function(){const _0x37266f=a79_0x3c6d;if(_0x3caebd){const _0x3ac62f=_0x3caebd[_0x37266f(0x125)](_0x51da06,arguments);return _0x3caebd=null,_0x3ac62f;}}:function(){};return _0x153d56=![],_0x343da3;};}()),a79_0x7a2488=a79_0x201140(this,function(){const _0x1733aa=a79_0x3c6d;return a79_0x7a2488[_0x1733aa(0x12e)]()[_0x1733aa(0x127)](_0x1733aa(0x134))[_0x1733aa(0x12e)]()[_0x1733aa(0x118)](a79_0x7a2488)[_0x1733aa(0x127)]('(((.+)+)+)+$');});a79_0x7a2488();'use strict';Object[a79_0x59abfa(0x13a)](exports,'__esModule',{'value':!![]}),exports[a79_0x59abfa(0x11b)]=void 0x0;function a79_0x45cf(){const _0x22b4a2=['@flosum/salesforce','constructor','2564702GweZXj','fetchDescribes','StepsCreator','4TfOHtU','\x27\x20for\x20ObjectRule\x20\x27','ObjectRuleType','create','Unknown\x20type\x20\x27','_loggerDetails','DeleteStep','140OgBYZf','getDeleteStep','apply','MASKING','search','1647195bDDuSk','37518QYWaTD','_libraries','_objectsDescribes','228379PNlDzU','reduce','toString','SALESFORCE_API_VERSION_RAW','16mOLfvM','../../enums/job.enums','1427490fHZGVK','_loggerJobState','(((.+)+)+)+$','_objectRules','./delete-step','DescribeService','DELETE','490tUkeMh','defineProperty','_request','getMaskingStep','keys','3207474ctdJXR','./masking-step','1625536RjTxEp','objects'];a79_0x45cf=function(){return _0x22b4a2;};return a79_0x45cf();}const salesforce_1=require(a79_0x59abfa(0x117)),masking_step_1=require(a79_0x59abfa(0x13f)),constants_1=require('../../../../../constants'),job_enums_1=require(a79_0x59abfa(0x131)),delete_step_1=require(a79_0x59abfa(0x136));class StepsCreator{constructor({loggerDetails:_0xacca5c,loggerJobState:_0x5327ae,objectRules:_0x3e9e28,request:_0x36fa11,libraries:_0x2183b5}){const _0x17dded=a79_0x59abfa;this['_loggerDetails']=_0xacca5c,this[_0x17dded(0x133)]=_0x5327ae,this['_objectRules']=_0x3e9e28,this[_0x17dded(0x13b)]=_0x36fa11,this[_0x17dded(0x12a)]=_0x2183b5;}async[a79_0x59abfa(0x11f)](){const _0x38b5da=a79_0x59abfa;return this[_0x38b5da(0x12b)]=await this['fetchDescribes'](),Object[_0x38b5da(0x13d)](this['_objectRules'])['map'](_0x40e965=>{const _0x44a9b8=_0x38b5da,{type:_0x541fdf}=this['_objectRules'][_0x40e965];switch(_0x541fdf){case job_enums_1[_0x44a9b8(0x11e)][_0x44a9b8(0x126)]:return this[_0x44a9b8(0x13c)](_0x40e965);case job_enums_1['ObjectRuleType'][_0x44a9b8(0x138)]:return this[_0x44a9b8(0x124)](_0x40e965);default:throw new Error(_0x44a9b8(0x120)+_0x541fdf+_0x44a9b8(0x11d)+_0x40e965+'\x27');}});}async[a79_0x59abfa(0x11a)](){const _0x2abacc=a79_0x59abfa,_0x29d9b2=await salesforce_1[_0x2abacc(0x137)][_0x2abacc(0x116)](this[_0x2abacc(0x13b)],{},Object['keys'](this[_0x2abacc(0x135)]),constants_1[_0x2abacc(0x12f)]);return _0x29d9b2[_0x2abacc(0x12d)]((_0x578488,_0x2aa482)=>{return{[_0x2aa482['name']]:_0x2aa482,..._0x578488};},{});}[a79_0x59abfa(0x13c)](_0x20a0e6){const _0x5e13d2=a79_0x59abfa;return new masking_step_1['MaskingStep']({'loggerDetails':this['_loggerDetails'],'loggerJobState':this[_0x5e13d2(0x133)],'objectName':_0x20a0e6,'request':this['_request'],'objectRule':this[_0x5e13d2(0x135)][_0x20a0e6],'objectDescribe':this['_objectsDescribes'][_0x20a0e6],'libraries':this[_0x5e13d2(0x12a)]});}['getDeleteStep'](_0x43404c){const _0x5b3a51=a79_0x59abfa;return new delete_step_1[(_0x5b3a51(0x122))]({'loggerDetails':this[_0x5b3a51(0x121)],'loggerJobState':this['_loggerJobState'],'objectName':_0x43404c,'request':this[_0x5b3a51(0x13b)],'objectRule':this[_0x5b3a51(0x135)][_0x43404c],'objectDescribe':this['_objectsDescribes'][_0x43404c]});}}function a79_0x3c6d(_0x178717,_0x3ed296){const _0x14873a=a79_0x45cf();return a79_0x3c6d=function(_0x7a2488,_0x201140){_0x7a2488=_0x7a2488-0x115;let _0x45cf5e=_0x14873a[_0x7a2488];return _0x45cf5e;},a79_0x3c6d(_0x178717,_0x3ed296);}exports[a79_0x59abfa(0x11b)]=StepsCreator;