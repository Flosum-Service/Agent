const a361_0x1781bc=a361_0x55d4;function a361_0x5ce5(){const _0x4ea5f9=['ENDPOINT_QUERY','562727jvSHlH','defineProperty','records','get','2363380ntIyWx','18Hacmhv','search','17998272NgXUrU','SalesforceService','1960zSUAMx','4PYfGSP','push','962siOCal','toString','nextRecordsUrl','insertMultipleRecords','data','map','../../shared/utils','332DSlTMh','post','INSERT_RECORDS_LIMIT','2577279vzsQkL','FlosumConstants','_connection','49782VAxWYf','apply','../constants/flosum.constants','retrieveRecords','24328pcBqzl','(((.+)+)+)+$','295cOLdPh'];a361_0x5ce5=function(){return _0x4ea5f9;};return a361_0x5ce5();}function a361_0x55d4(_0x59a84a,_0x213cc7){const _0x57bc07=a361_0x5ce5();return a361_0x55d4=function(_0x1a140b,_0x516a0c){_0x1a140b=_0x1a140b-0xf1;let _0x5ce542=_0x57bc07[_0x1a140b];return _0x5ce542;},a361_0x55d4(_0x59a84a,_0x213cc7);}(function(_0x5db79f,_0x37661e){const _0x175e69=a361_0x55d4,_0x22031b=_0x5db79f();while(!![]){try{const _0x251e41=-parseInt(_0x175e69(0xf1))/0x1*(-parseInt(_0x175e69(0x10b))/0x2)+-parseInt(_0x175e69(0xf4))/0x3*(-parseInt(_0x175e69(0x109))/0x4)+-parseInt(_0x175e69(0xfd))/0x5*(-parseInt(_0x175e69(0xf7))/0x6)+parseInt(_0x175e69(0x108))/0x7*(parseInt(_0x175e69(0xfb))/0x8)+parseInt(_0x175e69(0x104))/0x9*(-parseInt(_0x175e69(0x103))/0xa)+parseInt(_0x175e69(0xff))/0xb+-parseInt(_0x175e69(0x106))/0xc;if(_0x251e41===_0x37661e)break;else _0x22031b['push'](_0x22031b['shift']());}catch(_0x8c6eb9){_0x22031b['push'](_0x22031b['shift']());}}}(a361_0x5ce5,0x6b08d));const a361_0x516a0c=(function(){let _0x6bb8bf=!![];return function(_0x3876bb,_0xd4202a){const _0x556f42=_0x6bb8bf?function(){const _0x100272=a361_0x55d4;if(_0xd4202a){const _0x47e005=_0xd4202a[_0x100272(0xf8)](_0x3876bb,arguments);return _0xd4202a=null,_0x47e005;}}:function(){};return _0x6bb8bf=![],_0x556f42;};}()),a361_0x1a140b=a361_0x516a0c(this,function(){const _0x486925=a361_0x55d4;return a361_0x1a140b[_0x486925(0x10c)]()[_0x486925(0x105)](_0x486925(0xfc))[_0x486925(0x10c)]()['constructor'](a361_0x1a140b)[_0x486925(0x105)]('(((.+)+)+)+$');});a361_0x1a140b();'use strict';Object[a361_0x1781bc(0x100)](exports,'__esModule',{'value':!![]}),exports[a361_0x1781bc(0x107)]=void 0x0;const utils_1=require(a361_0x1781bc(0x111)),flosum_constants_1=require(a361_0x1781bc(0xf9));class SalesforceService{constructor({connection:_0x23cba1}){const _0x2fb8c7=a361_0x1781bc;this[_0x2fb8c7(0xf6)]=_0x23cba1;}async[a361_0x1781bc(0x10e)](_0x1c3954,_0x291178){const _0x1a841d=a361_0x1781bc,_0x5208cd=[],_0x1e2c30=_0x291178[_0x1a841d(0x110)](_0x2a4ecf=>({'attributes':{'type':_0x1c3954},..._0x2a4ecf})),_0xaa7a3c=(0x0,utils_1['chunkArray'])(_0x1e2c30,SalesforceService[_0x1a841d(0xf3)]);for(const _0x2cdcf8 of _0xaa7a3c){const {data:_0x323f46}=await this[_0x1a841d(0xf6)][_0x1a841d(0xf2)](flosum_constants_1['FlosumConstants']['ENDPOINT_INSERT_MULTIPLE_RECORDS'],{'allOrNone':!![],'records':_0x2cdcf8});_0x5208cd[_0x1a841d(0x10a)](..._0x323f46);}return _0x5208cd;}async[a361_0x1781bc(0xfa)](_0x411e49){const _0x911cc2=a361_0x1781bc,_0x3aa785=[];let _0xeb1c55,_0x395614;do{let _0x433e9d;!_0xeb1c55?_0x433e9d=await this[_0x911cc2(0xf6)][_0x911cc2(0x102)](flosum_constants_1[_0x911cc2(0xf5)][_0x911cc2(0xfe)],{'params':{'q':_0x411e49}}):_0x433e9d=await this['_connection'][_0x911cc2(0x102)](_0xeb1c55),_0x3aa785[_0x911cc2(0x10a)](..._0x433e9d[_0x911cc2(0x10f)][_0x911cc2(0x101)]),_0xeb1c55=_0x433e9d[_0x911cc2(0x10f)][_0x911cc2(0x10d)],_0x395614=_0x433e9d[_0x911cc2(0x10f)]['done'];}while(!_0x395614);return _0x3aa785;}}exports['SalesforceService']=SalesforceService,SalesforceService[a361_0x1781bc(0xf3)]=0xc8;