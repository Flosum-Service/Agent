const a274_0x339dc7=a274_0x5218;(function(_0x2dd8fd,_0x21b702){const _0x531a26=a274_0x5218,_0x5d6fb7=_0x2dd8fd();while(!![]){try{const _0x18b2f9=-parseInt(_0x531a26(0xd5))/0x1+parseInt(_0x531a26(0xbf))/0x2+parseInt(_0x531a26(0xc4))/0x3*(-parseInt(_0x531a26(0xcc))/0x4)+-parseInt(_0x531a26(0xc1))/0x5*(-parseInt(_0x531a26(0xdb))/0x6)+-parseInt(_0x531a26(0xd2))/0x7*(parseInt(_0x531a26(0xcb))/0x8)+parseInt(_0x531a26(0xbe))/0x9*(parseInt(_0x531a26(0xc2))/0xa)+parseInt(_0x531a26(0xc9))/0xb;if(_0x18b2f9===_0x21b702)break;else _0x5d6fb7['push'](_0x5d6fb7['shift']());}catch(_0x2f8746){_0x5d6fb7['push'](_0x5d6fb7['shift']());}}}(a274_0xfff3,0xd2360));const a274_0x1313da=(function(){let _0x44da5c=!![];return function(_0x5ebde6,_0x48c746){const _0x226dfd=_0x44da5c?function(){if(_0x48c746){const _0x4c7fa8=_0x48c746['apply'](_0x5ebde6,arguments);return _0x48c746=null,_0x4c7fa8;}}:function(){};return _0x44da5c=![],_0x226dfd;};}()),a274_0x5729b1=a274_0x1313da(this,function(){const _0x413c81=a274_0x5218;return a274_0x5729b1['toString']()[_0x413c81(0xb1)](_0x413c81(0xb8))[_0x413c81(0xb2)]()[_0x413c81(0xc0)](a274_0x5729b1)[_0x413c81(0xb1)](_0x413c81(0xb8));});a274_0x5729b1();function a274_0xfff3(){const _0x243e6d=['__metadata','/services/data/','SalesforceCompositeService','every','__decorate','(((.+)+)+)+$','../errors/salesforce.error','function','__esModule','post','defineProperty','634005iYAOsq','3275808HEduyv','constructor','14545sfXrTJ','50tdRYtJ','executeGraphs','69oJaAyC','metadata','request','Unsuccessful\x20composite\x20request','SALESFORCE_API_VERSION','1014255uSjsGX','createSalesforceRequest','24FwQXFC','59396hhSkcA','../../../../constants','object','CompositeGraphError','design:paramtypes','decorate','709051pGKNtE','SalesforceAuthService','isSuccessful','1620235mrNyEX','SalesforceError','../utils/create-request.util','getOwnPropertyDescriptor','SALESFORCE_MAX_REQUEST_SIZE_BYTES','graphs','2154EgMIGp','length','search','toString'];a274_0xfff3=function(){return _0x243e6d;};return a274_0xfff3();}'use strict';var __decorate=this&&this[a274_0x339dc7(0xb7)]||function(_0xeee625,_0x31259a,_0x5e92eb,_0x3e24d1){const _0x534955=a274_0x339dc7;var _0x35c30a=arguments['length'],_0x404942=_0x35c30a<0x3?_0x31259a:_0x3e24d1===null?_0x3e24d1=Object[_0x534955(0xd8)](_0x31259a,_0x5e92eb):_0x3e24d1,_0x54b9cc;if(typeof Reflect===_0x534955(0xce)&&typeof Reflect[_0x534955(0xd1)]===_0x534955(0xba))_0x404942=Reflect[_0x534955(0xd1)](_0xeee625,_0x31259a,_0x5e92eb,_0x3e24d1);else{for(var _0x65bb0f=_0xeee625[_0x534955(0xb0)]-0x1;_0x65bb0f>=0x0;_0x65bb0f--)if(_0x54b9cc=_0xeee625[_0x65bb0f])_0x404942=(_0x35c30a<0x3?_0x54b9cc(_0x404942):_0x35c30a>0x3?_0x54b9cc(_0x31259a,_0x5e92eb,_0x404942):_0x54b9cc(_0x31259a,_0x5e92eb))||_0x404942;}return _0x35c30a>0x3&&_0x404942&&Object[_0x534955(0xbd)](_0x31259a,_0x5e92eb,_0x404942),_0x404942;},__metadata=this&&this[a274_0x339dc7(0xb3)]||function(_0x217f00,_0x14e9d5){const _0x32c453=a274_0x339dc7;if(typeof Reflect===_0x32c453(0xce)&&typeof Reflect[_0x32c453(0xc5)]===_0x32c453(0xba))return Reflect[_0x32c453(0xc5)](_0x217f00,_0x14e9d5);};Object['defineProperty'](exports,a274_0x339dc7(0xbb),{'value':!![]}),exports[a274_0x339dc7(0xb5)]=void 0x0;const constants_1=require(a274_0x339dc7(0xcd)),typedi_1=require('typedi'),composite_graph_error_1=require('../errors/composite-graph.error'),salesforce_error_1=require(a274_0x339dc7(0xb9)),create_request_util_1=require(a274_0x339dc7(0xd7)),salesforce_auth_service_1=require('./salesforce-auth.service');let SalesforceCompositeService=class SalesforceCompositeService{constructor(_0x31e8f9){const _0x59a8a7=a274_0x339dc7;this[_0x59a8a7(0xc6)]=(0x0,create_request_util_1[_0x59a8a7(0xca)])(_0x31e8f9);}async[a274_0x339dc7(0xc3)](_0x3b373b){const _0x12d48c=a274_0x339dc7;try{const {data:_0x2da8db}=await this['request'][_0x12d48c(0xbc)](_0x12d48c(0xb4)+constants_1[_0x12d48c(0xc8)]+'/composite/graph',{'graphs':_0x3b373b},{'maxBodyLength':constants_1[_0x12d48c(0xd9)]});if(!_0x2da8db[_0x12d48c(0xda)][_0x12d48c(0xb6)](_0x51d025=>_0x51d025[_0x12d48c(0xd4)]))throw new composite_graph_error_1[(_0x12d48c(0xcf))](_0x12d48c(0xc7),_0x3b373b,_0x2da8db);return _0x2da8db;}catch(_0x12200f){if(_0x12200f instanceof salesforce_error_1[_0x12d48c(0xd6)])throw _0x12200f;throw new salesforce_error_1['SalesforceError'](_0x12200f);}}};function a274_0x5218(_0x3d28ca,_0x42b2ea){const _0x35fb9d=a274_0xfff3();return a274_0x5218=function(_0x5729b1,_0x1313da){_0x5729b1=_0x5729b1-0xb0;let _0xfff374=_0x35fb9d[_0x5729b1];return _0xfff374;},a274_0x5218(_0x3d28ca,_0x42b2ea);}SalesforceCompositeService=__decorate([(0x0,typedi_1['Service'])(),__metadata(a274_0x339dc7(0xd0),[salesforce_auth_service_1[a274_0x339dc7(0xd3)]])],SalesforceCompositeService),exports['SalesforceCompositeService']=SalesforceCompositeService;