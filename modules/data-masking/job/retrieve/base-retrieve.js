const a93_0x3ff4d2=a93_0x4ad3;(function(_0x4fd8b1,_0x17262a){const _0x36a9d7=a93_0x4ad3,_0x1d231d=_0x4fd8b1();while(!![]){try{const _0x32fc5a=-parseInt(_0x36a9d7(0xb8))/0x1+parseInt(_0x36a9d7(0xa4))/0x2+-parseInt(_0x36a9d7(0xa7))/0x3*(-parseInt(_0x36a9d7(0x9e))/0x4)+-parseInt(_0x36a9d7(0xa8))/0x5*(-parseInt(_0x36a9d7(0xb3))/0x6)+parseInt(_0x36a9d7(0xa9))/0x7*(parseInt(_0x36a9d7(0x9d))/0x8)+-parseInt(_0x36a9d7(0xb0))/0x9+-parseInt(_0x36a9d7(0xa6))/0xa;if(_0x32fc5a===_0x17262a)break;else _0x1d231d['push'](_0x1d231d['shift']());}catch(_0x1ddbf5){_0x1d231d['push'](_0x1d231d['shift']());}}}(a93_0x4dde,0x9bcee));const a93_0x138629=(function(){let _0x1601cc=!![];return function(_0x612de7,_0x293a85){const _0xc4b1c8=_0x1601cc?function(){if(_0x293a85){const _0xc46d58=_0x293a85['apply'](_0x612de7,arguments);return _0x293a85=null,_0xc46d58;}}:function(){};return _0x1601cc=![],_0xc4b1c8;};}()),a93_0x5bb434=a93_0x138629(this,function(){const _0x217c2e=a93_0x4ad3;return a93_0x5bb434['toString']()['search']('(((.+)+)+)+$')[_0x217c2e(0xb5)]()[_0x217c2e(0xad)](a93_0x5bb434)[_0x217c2e(0xb1)](_0x217c2e(0x9c));});function a93_0x4dde(){const _0x302baa=['2630558FgzACH','../../constants','BaseRetrieve','pull','constructor','SALESFORCE_API_VERSION','__esModule','3214755HnppaO','search','@flosum/salesforce','24DjocBN','queryBuilder','toString','from','request','383884mUWysr','(((.+)+)+)+$','16vJdsbx','21604nxUiuX','objectName','destroy','whereClause','stream','fields','1810250YNWtwl','baseRetrievePayload','13314170plSaZo','75fTQRvM','1148685FbIirw'];a93_0x4dde=function(){return _0x302baa;};return a93_0x4dde();}a93_0x5bb434();function a93_0x4ad3(_0x4a8fbf,_0xd40bf9){const _0x1dc73c=a93_0x4dde();return a93_0x4ad3=function(_0x5bb434,_0x138629){_0x5bb434=_0x5bb434-0x9c;let _0x4dde81=_0x1dc73c[_0x5bb434];return _0x4dde81;},a93_0x4ad3(_0x4a8fbf,_0xd40bf9);}'use strict';Object['defineProperty'](exports,a93_0x3ff4d2(0xaf),{'value':!![]}),exports[a93_0x3ff4d2(0xab)]=void 0x0;const stream_1=require(a93_0x3ff4d2(0xa2)),salesforce_1=require(a93_0x3ff4d2(0xb2)),constants_1=require(a93_0x3ff4d2(0xaa)),FIELD_ID='Id';class BaseRetrieve extends stream_1['Readable']{constructor({request:_0x5e1080,fields:_0x152efd,whereClause:_0x1a03de,objectName:_0x546eb3,describe:_0x3988bc}){const _0x30a0ed=a93_0x3ff4d2;super({'objectMode':!![]}),this[_0x30a0ed(0xb4)]=new salesforce_1['QueryBuilder']()['select'](FIELD_ID,..._0x152efd)[_0x30a0ed(0xb6)](_0x546eb3),_0x1a03de&&this[_0x30a0ed(0xb4)]['where'](''+_0x1a03de),this[_0x30a0ed(0xb7)]=_0x5e1080,this[_0x30a0ed(0xa3)]=_0x152efd,this[_0x30a0ed(0xa1)]=_0x1a03de,this[_0x30a0ed(0x9f)]=_0x546eb3,this['describe']=_0x3988bc;}get[a93_0x3ff4d2(0xa5)](){const _0x564e3b=a93_0x3ff4d2;return{'queryBuilder':this['queryBuilder'],'instance':this[_0x564e3b(0xb7)],'api':constants_1[_0x564e3b(0xae)]};}async['_read'](){const _0x52cc40=a93_0x3ff4d2;try{await this[_0x52cc40(0xac)]();}catch(_0x200018){this[_0x52cc40(0xa0)](_0x200018);}}}exports[a93_0x3ff4d2(0xab)]=BaseRetrieve;