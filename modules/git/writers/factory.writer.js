const a301_0x3f578c=a301_0x777d;(function(_0x17beda,_0x2bbf28){const _0x326c58=a301_0x777d,_0x67263d=_0x17beda();while(!![]){try{const _0x28e8fb=parseInt(_0x326c58(0x1ad))/0x1*(parseInt(_0x326c58(0x1a4))/0x2)+-parseInt(_0x326c58(0x19c))/0x3*(parseInt(_0x326c58(0x195))/0x4)+parseInt(_0x326c58(0x1aa))/0x5*(-parseInt(_0x326c58(0x193))/0x6)+-parseInt(_0x326c58(0x19d))/0x7*(parseInt(_0x326c58(0x194))/0x8)+-parseInt(_0x326c58(0x196))/0x9+-parseInt(_0x326c58(0x1a7))/0xa+-parseInt(_0x326c58(0x1a5))/0xb*(-parseInt(_0x326c58(0x198))/0xc);if(_0x28e8fb===_0x2bbf28)break;else _0x67263d['push'](_0x67263d['shift']());}catch(_0x56a65d){_0x67263d['push'](_0x67263d['shift']());}}}(a301_0x5bd9,0xa4ac8));const a301_0x16a9fb=(function(){let _0x4017cb=!![];return function(_0x3331e5,_0x6a357a){const _0x52f4a5=_0x4017cb?function(){if(_0x6a357a){const _0x3bc4cc=_0x6a357a['apply'](_0x3331e5,arguments);return _0x6a357a=null,_0x3bc4cc;}}:function(){};return _0x4017cb=![],_0x52f4a5;};}()),a301_0x2b7b5d=a301_0x16a9fb(this,function(){const _0x4db3d6=a301_0x777d;return a301_0x2b7b5d['toString']()['search'](_0x4db3d6(0x1a9))[_0x4db3d6(0x1a8)]()[_0x4db3d6(0x1ac)](a301_0x2b7b5d)[_0x4db3d6(0x1ab)](_0x4db3d6(0x1a9));});a301_0x2b7b5d();function a301_0x777d(_0x2ae57d,_0xf94514){const _0x2ee4d1=a301_0x5bd9();return a301_0x777d=function(_0x2b7b5d,_0x16a9fb){_0x2b7b5d=_0x2b7b5d-0x193;let _0x5bd98e=_0x2ee4d1[_0x2b7b5d];return _0x5bd98e;},a301_0x777d(_0x2ae57d,_0xf94514);}'use strict';function a301_0x5bd9(){const _0x106792=['4245354Cuktrd','CommerceCloudWriter','4584xAOrmk','./marketing-cloud.writer','RecordTypes','create','75NYwsLW','88991qjteEg','MARKETING_CLOUD','__esModule','./commerce-cloud.writer','FactoryWriter','MDApiWriter','../devops/errors/messages','12gSANId','98340YgGEoB','MarketingCloudWriter','11008310gWdxAZ','toString','(((.+)+)+)+$','5RoGyqg','search','constructor','16217TrdrzY','808302CRQSlW','184ZDHykD','134116nkpiKF'];a301_0x5bd9=function(){return _0x106792;};return a301_0x5bd9();}Object['defineProperty'](exports,a301_0x3f578c(0x19f),{'value':!![]}),exports[a301_0x3f578c(0x1a1)]=void 0x0;const mdapi_writer_1=require('./mdapi.writer'),marketing_cloud_writer_1=require(a301_0x3f578c(0x199)),constants_1=require('../devops/constants/constants'),messages_1=require(a301_0x3f578c(0x1a3)),commerce_cloud_writer_1=require(a301_0x3f578c(0x1a0));class FactoryWriter{static[a301_0x3f578c(0x19b)]({recordType:_0x586d92,components:_0x3466d0,sourceDir:_0x4edc3a,skipChildErrors:_0x53646e}){const _0x264338=a301_0x3f578c;switch(_0x586d92){case constants_1[_0x264338(0x19a)]['COMMERCE_CLOUD']:{return new commerce_cloud_writer_1[(_0x264338(0x197))]({'components':_0x3466d0,'sourceDir':_0x4edc3a});}case constants_1[_0x264338(0x19a)][_0x264338(0x19e)]:{return new marketing_cloud_writer_1[(_0x264338(0x1a6))]({'components':_0x3466d0,'sourceDir':_0x4edc3a});}case constants_1[_0x264338(0x19a)]['DEFAULT']:{return new mdapi_writer_1[(_0x264338(0x1a2))]({'components':_0x3466d0,'sourceDir':_0x4edc3a,'skipChildErrors':_0x53646e});}default:{throw new Error(messages_1['WRONG_RECORD_TYPE_ERROR_MESSAGE']+_0x586d92);}}}}exports[a301_0x3f578c(0x1a1)]=FactoryWriter;