const a187_0x4557f1=a187_0x1b62;(function(_0x5d31f2,_0x112474){const _0x18601f=a187_0x1b62,_0x5f49bb=_0x5d31f2();while(!![]){try{const _0x56f451=-parseInt(_0x18601f(0x151))/0x1+parseInt(_0x18601f(0x169))/0x2+parseInt(_0x18601f(0x153))/0x3+-parseInt(_0x18601f(0x165))/0x4*(parseInt(_0x18601f(0x156))/0x5)+-parseInt(_0x18601f(0x16b))/0x6+-parseInt(_0x18601f(0x15d))/0x7+-parseInt(_0x18601f(0x14f))/0x8*(-parseInt(_0x18601f(0x154))/0x9);if(_0x56f451===_0x112474)break;else _0x5f49bb['push'](_0x5f49bb['shift']());}catch(_0x5b4383){_0x5f49bb['push'](_0x5f49bb['shift']());}}}(a187_0x2812,0x43974));const a187_0x528809=(function(){let _0x5f05e6=!![];return function(_0x72fe5c,_0x5dc39f){const _0x281662=_0x5f05e6?function(){const _0x5497ec=a187_0x1b62;if(_0x5dc39f){const _0x56feef=_0x5dc39f[_0x5497ec(0x16a)](_0x72fe5c,arguments);return _0x5dc39f=null,_0x56feef;}}:function(){};return _0x5f05e6=![],_0x281662;};}()),a187_0x58061d=a187_0x528809(this,function(){const _0x353a2f=a187_0x1b62;return a187_0x58061d[_0x353a2f(0x15b)]()[_0x353a2f(0x163)](_0x353a2f(0x16e))[_0x353a2f(0x15b)]()[_0x353a2f(0x160)](a187_0x58061d)[_0x353a2f(0x163)](_0x353a2f(0x16e));});a187_0x58061d();'use strict';Object[a187_0x4557f1(0x14c)](exports,a187_0x4557f1(0x168),{'value':!![]}),exports['isMarketingCloudComponent']=exports['parseMarketingCloudComponent']=void 0x0;const xml_v2_1=require(a187_0x4557f1(0x164)),path_1=require('path'),marketing_cloud_types_1=require(a187_0x4557f1(0x14d)),core_1=require(a187_0x4557f1(0x155));async function parseMarketingCloudComponent(_0x179bd4,_0x3e5b5d){const _0x4dcadd=a187_0x4557f1,_0x230ade=new core_1[(_0x4dcadd(0x170))](parseMarketingCloudComponent[_0x4dcadd(0x157)]),[_0x204e78,_0x3790e0]=_0x179bd4[_0x4dcadd(0x14b)](path_1[_0x4dcadd(0x159)]);try{if(marketing_cloud_types_1[_0x4dcadd(0x158)]['includes'](_0x204e78))return parseJSONComponent(_0x204e78,_0x3790e0,_0x3e5b5d);if(marketing_cloud_types_1[_0x4dcadd(0x161)]['includes'](_0x204e78))return await parseXMLComponent(_0x204e78,_0x3790e0,_0x3e5b5d);}catch(_0x2380e1){_0x230ade[_0x4dcadd(0x150)](_0x4dcadd(0x162),_0x179bd4,_0x2380e1);}return{'componentType':_0x204e78,'componentName':_0x3790e0,'key':''};}exports[a187_0x4557f1(0x167)]=parseMarketingCloudComponent;function parseJSONComponent(_0x40e3c0,_0x36f34d,_0x4cf84d){const _0x28eef4=a187_0x4557f1;var _0x429166;const _0x390131={'componentType':_0x40e3c0,'componentName':_0x36f34d,'key':''},_0x1799c5=JSON[_0x28eef4(0x16d)](_0x4cf84d[_0x28eef4(0x15b)]());_0x390131['key']=_0x1799c5===null||_0x1799c5===void 0x0?void 0x0:_0x1799c5['id'];const _0x34d28f=((_0x429166=_0x1799c5===null||_0x1799c5===void 0x0?void 0x0:_0x1799c5[_0x28eef4(0x15e)])===null||_0x429166===void 0x0?void 0x0:_0x429166[_0x28eef4(0x16c)])||(_0x1799c5===null||_0x1799c5===void 0x0?void 0x0:_0x1799c5[_0x28eef4(0x157)]);return _0x34d28f&&_0x36f34d!==_0x34d28f&&(_0x390131['componentName']=_0x34d28f+'\x20('+_0x36f34d+')'),_0x390131;}async function parseXMLComponent(_0x4496eb,_0x20aed5,_0x84365c){const _0x3537e7=a187_0x4557f1;var _0x52ad00,_0x347cf9;const _0x4211d9={'componentType':_0x4496eb,'componentName':_0x20aed5,'key':''},_0x1c6e7b=await xml_v2_1[_0x3537e7(0x152)][_0x3537e7(0x16d)](_0x84365c[_0x3537e7(0x15b)]());_0x4211d9[_0x3537e7(0x16f)]=(_0x52ad00=_0x1c6e7b===null||_0x1c6e7b===void 0x0?void 0x0:_0x1c6e7b['Results'])===null||_0x52ad00===void 0x0?void 0x0:_0x52ad00[_0x3537e7(0x15c)];const _0xa57d2a=(_0x347cf9=_0x1c6e7b===null||_0x1c6e7b===void 0x0?void 0x0:_0x1c6e7b[_0x3537e7(0x15f)])===null||_0x347cf9===void 0x0?void 0x0:_0x347cf9[_0x3537e7(0x14e)];return _0xa57d2a&&_0x20aed5!==_0xa57d2a&&(_0x4211d9[_0x3537e7(0x15a)]=_0xa57d2a+'\x20('+_0x20aed5+')'),_0x4211d9;}function a187_0x2812(){const _0x29abd4=['__esModule','864878bBtPKT','apply','2829738RajjxR','fileName','parse','(((.+)+)+)+$','key','Logger','split','defineProperty','../data/marketing-cloud-types','Name','8qRraJB','error','274336zPvgFc','XmlV2','174891AmGddi','13917213fUvSwL','../../../../core','56485JFAHLi','name','MARKETING_CLOUD_JSON_COMPONENT_TYPES','sep','componentName','toString','CustomerKey','3383261YfvZjN','fileProperties','Results','constructor','MARKETING_CLOUD_XML_COMPONENT_TYPES','Error\x20during\x20parse\x20Marketing\x20Cloud\x20component\x20file\x20%s,\x20original\x20error:\x20%s','search','./xml-v2','188nNfcIt','includes','parseMarketingCloudComponent'];a187_0x2812=function(){return _0x29abd4;};return a187_0x2812();}function isMarketingCloudComponent(_0x218724){const _0x28b050=a187_0x4557f1,_0x3303b6=_0x218724['split'](path_1[_0x28b050(0x159)])[0x0];return marketing_cloud_types_1[_0x28b050(0x158)][_0x28b050(0x166)](_0x3303b6)||marketing_cloud_types_1[_0x28b050(0x161)][_0x28b050(0x166)](_0x3303b6);}function a187_0x1b62(_0x444061,_0xadeae0){const _0x2c7add=a187_0x2812();return a187_0x1b62=function(_0x58061d,_0x528809){_0x58061d=_0x58061d-0x14b;let _0x2812f7=_0x2c7add[_0x58061d];return _0x2812f7;},a187_0x1b62(_0x444061,_0xadeae0);}exports['isMarketingCloudComponent']=isMarketingCloudComponent;