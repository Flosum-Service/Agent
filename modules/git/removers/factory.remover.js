const a244_0xa6d7e8=a244_0x51e6;function a244_0x1634(){const _0x3e3815=['499508RTUGvq','__esModule','defineProperty','./marketing-cloud.remover','88330CFXzqf','(((.+)+)+)+$','1096fElEdt','search','./commerce-cloud.remover','CommerceCloudRemover','DEFAULT','6902YpUVbZ','apply','MDApiRemover','MARKETING_CLOUD','359850ToZluN','constructor','COMMERCE_CLOUD','18420YOagAX','1020592kGKWHE','RecordTypes','FactoryRemover','toString','9340596nnBLze','11nUvnVE','WRONG_RECORD_TYPE_ERROR_MESSAGE','459jJqjSk','5QnBTcy','33PStFHN','../devops/constants/constants'];a244_0x1634=function(){return _0x3e3815;};return a244_0x1634();}(function(_0x410a8c,_0x521bb8){const _0x58a12d=a244_0x51e6,_0x39ef53=_0x410a8c();while(!![]){try{const _0x173f37=parseInt(_0x58a12d(0x1ad))/0x1+-parseInt(_0x58a12d(0x1a1))/0x2*(parseInt(_0x58a12d(0x1ab))/0x3)+parseInt(_0x58a12d(0x1a2))/0x4+-parseInt(_0x58a12d(0x1aa))/0x5*(-parseInt(_0x58a12d(0x19e))/0x6)+parseInt(_0x58a12d(0x19a))/0x7*(-parseInt(_0x58a12d(0x1b3))/0x8)+-parseInt(_0x58a12d(0x1a9))/0x9*(-parseInt(_0x58a12d(0x1b1))/0xa)+parseInt(_0x58a12d(0x1a7))/0xb*(-parseInt(_0x58a12d(0x1a6))/0xc);if(_0x173f37===_0x521bb8)break;else _0x39ef53['push'](_0x39ef53['shift']());}catch(_0x3f63a0){_0x39ef53['push'](_0x39ef53['shift']());}}}(a244_0x1634,0x3d1e3));function a244_0x51e6(_0x61ca07,_0x2a52e8){const _0x510b48=a244_0x1634();return a244_0x51e6=function(_0x4a6aa4,_0x2a386d){_0x4a6aa4=_0x4a6aa4-0x196;let _0x163429=_0x510b48[_0x4a6aa4];return _0x163429;},a244_0x51e6(_0x61ca07,_0x2a52e8);}const a244_0x2a386d=(function(){let _0x27c1e3=!![];return function(_0x47d090,_0x4b8f86){const _0x2463a1=_0x27c1e3?function(){const _0x30d0da=a244_0x51e6;if(_0x4b8f86){const _0xaf4c5=_0x4b8f86[_0x30d0da(0x19b)](_0x47d090,arguments);return _0x4b8f86=null,_0xaf4c5;}}:function(){};return _0x27c1e3=![],_0x2463a1;};}()),a244_0x4a6aa4=a244_0x2a386d(this,function(){const _0x267095=a244_0x51e6;return a244_0x4a6aa4[_0x267095(0x1a5)]()[_0x267095(0x196)](_0x267095(0x1b2))['toString']()[_0x267095(0x19f)](a244_0x4a6aa4)['search'](_0x267095(0x1b2));});a244_0x4a6aa4();'use strict';Object[a244_0xa6d7e8(0x1af)](exports,a244_0xa6d7e8(0x1ae),{'value':!![]}),exports[a244_0xa6d7e8(0x1a4)]=void 0x0;const mdapi_remover_1=require('./mdapi.remover'),marketing_cloud_remover_1=require(a244_0xa6d7e8(0x1b0)),constants_1=require(a244_0xa6d7e8(0x1ac)),messages_1=require('../devops/errors/messages'),commerce_cloud_remover_1=require(a244_0xa6d7e8(0x197));class FactoryRemover{static['create']({recordType:_0x50b50b,components:_0x9f6bab,sourceDir:_0x1e210f}){const _0x20939a=a244_0xa6d7e8;switch(_0x50b50b){case constants_1[_0x20939a(0x1a3)][_0x20939a(0x1a0)]:{return new commerce_cloud_remover_1[(_0x20939a(0x198))]({'components':_0x9f6bab,'sourceDir':_0x1e210f});}case constants_1['RecordTypes'][_0x20939a(0x19d)]:{return new marketing_cloud_remover_1['MarketingCloudRemover']({'components':_0x9f6bab,'sourceDir':_0x1e210f});}case constants_1[_0x20939a(0x1a3)][_0x20939a(0x199)]:{return new mdapi_remover_1[(_0x20939a(0x19c))]({'components':_0x9f6bab,'sourceDir':_0x1e210f});}default:{throw new Error(messages_1[_0x20939a(0x1a8)]+_0x50b50b);}}}}exports['FactoryRemover']=FactoryRemover;