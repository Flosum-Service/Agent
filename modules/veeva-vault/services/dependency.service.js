const a349_0x21e0b3=a349_0x439d;(function(_0x4ed444,_0x380411){const _0xc54139=a349_0x439d,_0x280738=_0x4ed444();while(!![]){try{const _0x2a117b=parseInt(_0xc54139(0xa0))/0x1+-parseInt(_0xc54139(0x88))/0x2+parseInt(_0xc54139(0xaa))/0x3*(-parseInt(_0xc54139(0xb8))/0x4)+-parseInt(_0xc54139(0xa7))/0x5+-parseInt(_0xc54139(0xa9))/0x6+parseInt(_0xc54139(0x86))/0x7+parseInt(_0xc54139(0xac))/0x8;if(_0x2a117b===_0x380411)break;else _0x280738['push'](_0x280738['shift']());}catch(_0x12d7a0){_0x280738['push'](_0x280738['shift']());}}}(a349_0x4b82,0xd5a4f));const a349_0x2a49a5=(function(){let _0x119891=!![];return function(_0x247b8d,_0x2bee74){const _0x536d9e=_0x119891?function(){const _0x3b717a=a349_0x439d;if(_0x2bee74){const _0x380ac4=_0x2bee74[_0x3b717a(0xb7)](_0x247b8d,arguments);return _0x2bee74=null,_0x380ac4;}}:function(){};return _0x119891=![],_0x536d9e;};}()),a349_0x1ad799=a349_0x2a49a5(this,function(){const _0x489a4e=a349_0x439d;return a349_0x1ad799[_0x489a4e(0xb6)]()[_0x489a4e(0x9b)](_0x489a4e(0xa5))[_0x489a4e(0xb6)]()[_0x489a4e(0x99)](a349_0x1ad799)[_0x489a4e(0x9b)](_0x489a4e(0xa5));});function a349_0x439d(_0x288100,_0x196420){const _0x34b1df=a349_0x4b82();return a349_0x439d=function(_0x1ad799,_0x2a49a5){_0x1ad799=_0x1ad799-0x82;let _0x4b8239=_0x34b1df[_0x1ad799];return _0x4b8239;},a349_0x439d(_0x288100,_0x196420);}a349_0x1ad799();'use strict';Object[a349_0x21e0b3(0x9e)](exports,a349_0x21e0b3(0xaf),{'value':!![]}),exports['DependencyService']=void 0x0;function a349_0x4b82(){const _0x23154c=['get','843200ycXCIG','sourceComponentId','getFlosumComponents','getDependencyVeevaComponents','branchId','(((.+)+)+)+$','No\x20veeva\x20components\x20found\x20in\x20branch','8585105UnCsiw','retrieve','5482650JKjxIm','22182uWuxTn','No\x20components\x20found\x20in\x20Veeva','31207600HYNNAm','name','FlosumComponentVeevaComponentRetriever','__esModule','type','map','_branchId','has','set','BranchFlosumComponentRetriever','toString','apply','916zQAwAe','No\x20dependency\x20components\x20found\x20in\x20Veeva','DependencyService','IdVeevaComponentRetriever','AppResponseStatus','reduce','4172497XkowTW','baseVeevaComponentRetrieverOptions','282224oyTTjM','_connectionVeeva','No\x20relationship\x20found\x20in\x20Veeva','getVeevaComponentsByFlosumComponents','_veevaService','dependencies','createDataResult','getVeevaComponentsById','SalesforceService','targetComponentId','execute','EmptyLogger','_connectionSalesforce','_salesforceService','VeevaService','../classes/retrievers/veeva-components/id.veeva-component.retriever','./veeva.service','constructor','SourceIdVeevaComponentRelationshipRetriever','search','length','../enums/status.enums','defineProperty'];a349_0x4b82=function(){return _0x23154c;};return a349_0x4b82();}const veeva_service_1=require(a349_0x21e0b3(0x98)),status_enums_1=require(a349_0x21e0b3(0x9d)),salesforce_service_1=require('./salesforce.service'),empty_logger_1=require('../classes/loggers/empty.logger'),flosum_component_veeva_component_retriever_1=require('../classes/retrievers/veeva-components/flosum-component.veeva-component.retriever'),id_veeva_component_retriever_1=require(a349_0x21e0b3(0x97)),source_id_veeva_component_relationship_retriever_1=require('../classes/retrievers/veeva-component-relationships/source-id.veeva-component-relationship.retriever'),branch_flosum_component_retriever_1=require('../classes/retrievers/flosum-components/branch.flosum-component.retriever');class DependencyService{constructor(_0x140528,_0x3a9cbe,_0x535e20){const _0x26967a=a349_0x21e0b3;this['_connectionSalesforce']=_0x3a9cbe,this[_0x26967a(0x89)]=_0x535e20,this['_branchId']=_0x140528[_0x26967a(0xa4)];const _0x536443=new empty_logger_1[(_0x26967a(0x93))]();this[_0x26967a(0x8c)]=new veeva_service_1[(_0x26967a(0x96))]({'connection':this[_0x26967a(0x89)],'logger':_0x536443}),this[_0x26967a(0x95)]=new salesforce_service_1[(_0x26967a(0x90))]({'connection':this[_0x26967a(0x94)]});}get[a349_0x21e0b3(0x87)](){const _0x573278=a349_0x21e0b3;return{'veevaService':this[_0x573278(0x8c)],'logger':new empty_logger_1['EmptyLogger']()};}async[a349_0x21e0b3(0x92)](){const _0x11df80=a349_0x21e0b3,_0x37abd8=await this[_0x11df80(0xa2)](),_0x178264=await this[_0x11df80(0x8b)](_0x37abd8),_0x3fe79b=await this['getDependencyVeevaComponents'](_0x178264),_0x1a55ab=_0x3fe79b['map'](_0x4c69cd=>_0x4c69cd['targetComponentId']),_0x397f73=await this['getVeevaComponentsById'](_0x1a55ab),_0x46d959=DependencyService[_0x11df80(0x8e)](_0x178264,_0x397f73,_0x3fe79b);return{'responseStatus':status_enums_1[_0x11df80(0x84)]['SUCCESS'],'data':_0x46d959};}async[a349_0x21e0b3(0xa2)](){const _0x3ef5cd=a349_0x21e0b3,_0x4ee56b=await new branch_flosum_component_retriever_1[(_0x3ef5cd(0xb5))]({'value':this[_0x3ef5cd(0xb2)],'salesforceService':this[_0x3ef5cd(0x95)]})[_0x3ef5cd(0xa8)]();if(!_0x4ee56b[_0x3ef5cd(0x9c)])throw new Error(_0x3ef5cd(0xa6));return _0x4ee56b;}async[a349_0x21e0b3(0x8b)](_0x25b871){const _0x4fe956=a349_0x21e0b3,_0x208c65=await new flosum_component_veeva_component_retriever_1[(_0x4fe956(0xae))]({'value':_0x25b871,...this[_0x4fe956(0x87)]})['retrieve']();if(!_0x208c65[_0x4fe956(0x9c)])throw new Error(_0x4fe956(0xab));return _0x208c65;}async[a349_0x21e0b3(0x8f)](_0x4dcd06){const _0x308320=a349_0x21e0b3,_0x3b317a=await new id_veeva_component_retriever_1[(_0x308320(0x83))]({'value':_0x4dcd06,...this[_0x308320(0x87)]})[_0x308320(0xa8)]();if(!_0x3b317a[_0x308320(0x9c)])throw new Error(_0x308320(0xb9));return _0x3b317a;}async[a349_0x21e0b3(0xa3)](_0x3f4c4c){const _0x2fc029=a349_0x21e0b3,_0x223fc0=await new source_id_veeva_component_relationship_retriever_1[(_0x2fc029(0x9a))]({'value':_0x3f4c4c[_0x2fc029(0xb1)](({id:_0x502b91})=>_0x502b91),'veevaService':this[_0x2fc029(0x8c)]})[_0x2fc029(0xa8)]();if(!_0x223fc0[_0x2fc029(0x9c)])throw new Error(_0x2fc029(0x8a));return _0x223fc0;}static['createDataResult'](_0x37cd19,_0x18b500,_0x5022fc){const _0x5cded8=a349_0x21e0b3,_0x5efc5e={},_0x292d66=_0x37cd19[_0x5cded8(0x85)]((_0x41bf6d,_0x1d0472)=>_0x41bf6d['set'](_0x1d0472['id'],_0x1d0472),new Map()),_0x133843=_0x18b500[_0x5cded8(0x85)]((_0x6021c5,_0xd3c326)=>_0x6021c5[_0x5cded8(0xb4)](_0xd3c326['id'],_0xd3c326),new Map());for(const _0x52a430 of _0x5022fc){const _0x581d64=_0x292d66[_0x5cded8(0xb3)](_0x52a430[_0x5cded8(0xa1)])&&_0x133843[_0x5cded8(0xb3)](_0x52a430[_0x5cded8(0x91)]);if(!_0x581d64)continue;const _0x520545=_0x292d66[_0x5cded8(0x9f)](_0x52a430['sourceComponentId']),_0x3e9b4f=_0x133843[_0x5cded8(0x9f)](_0x52a430[_0x5cded8(0x91)]);!_0x5efc5e[_0x520545[_0x5cded8(0xad)]+':'+_0x520545[_0x5cded8(0xb0)]]&&(_0x5efc5e[_0x520545[_0x5cded8(0xad)]+':'+_0x520545[_0x5cded8(0xb0)]]={'dependencies':[],'label':_0x520545['name']+'\x20('+_0x520545['type']+')','type':_0x520545['type'],'name':_0x520545[_0x5cded8(0xad)]}),_0x5efc5e[_0x520545[_0x5cded8(0xad)]+':'+_0x520545[_0x5cded8(0xb0)]][_0x5cded8(0x8d)]['push']({'label':_0x3e9b4f[_0x5cded8(0xad)]+'\x20('+_0x3e9b4f[_0x5cded8(0xb0)]+')','name':_0x3e9b4f[_0x5cded8(0xad)],'type':_0x3e9b4f['type'],'lastUpdate':_0x3e9b4f['lastModifiedDate'],'isMissing':!_0x292d66[_0x5cded8(0xb3)](_0x52a430['targetComponentId'])});}return _0x5efc5e;}}exports[a349_0x21e0b3(0x82)]=DependencyService;