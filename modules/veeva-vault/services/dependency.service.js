function a400_0x5112(_0x250bcf,_0x1acef0){const _0x22833c=a400_0x5dd2();return a400_0x5112=function(_0x24999a,_0x5871f0){_0x24999a=_0x24999a-0x1d3;let _0x5dd218=_0x22833c[_0x24999a];return _0x5dd218;},a400_0x5112(_0x250bcf,_0x1acef0);}const a400_0x16bb88=a400_0x5112;(function(_0x2972f0,_0x4f2629){const _0x1913f4=a400_0x5112,_0x3c7646=_0x2972f0();while(!![]){try{const _0x1f1fd6=-parseInt(_0x1913f4(0x1f1))/0x1*(parseInt(_0x1913f4(0x205))/0x2)+-parseInt(_0x1913f4(0x1e0))/0x3*(parseInt(_0x1913f4(0x1de))/0x4)+-parseInt(_0x1913f4(0x20c))/0x5*(parseInt(_0x1913f4(0x1fd))/0x6)+parseInt(_0x1913f4(0x1e7))/0x7*(-parseInt(_0x1913f4(0x1fc))/0x8)+parseInt(_0x1913f4(0x1ed))/0x9+parseInt(_0x1913f4(0x1fa))/0xa*(-parseInt(_0x1913f4(0x1d9))/0xb)+parseInt(_0x1913f4(0x1e6))/0xc;if(_0x1f1fd6===_0x4f2629)break;else _0x3c7646['push'](_0x3c7646['shift']());}catch(_0x35f161){_0x3c7646['push'](_0x3c7646['shift']());}}}(a400_0x5dd2,0xbe154));const a400_0x5871f0=(function(){let _0x1ccd10=!![];return function(_0x86ff1d,_0x289baf){const _0xc679d0=_0x1ccd10?function(){const _0x29f154=a400_0x5112;if(_0x289baf){const _0x2af8f5=_0x289baf[_0x29f154(0x203)](_0x86ff1d,arguments);return _0x289baf=null,_0x2af8f5;}}:function(){};return _0x1ccd10=![],_0xc679d0;};}()),a400_0x24999a=a400_0x5871f0(this,function(){const _0x11151f=a400_0x5112;return a400_0x24999a[_0x11151f(0x1e9)]()[_0x11151f(0x209)](_0x11151f(0x207))[_0x11151f(0x1e9)]()[_0x11151f(0x1d7)](a400_0x24999a)[_0x11151f(0x209)](_0x11151f(0x207));});a400_0x24999a();function a400_0x5dd2(){const _0x3a9f55=['targetComponentId','get','109132sCvlvf','No\x20dependency\x20components\x20found\x20in\x20Veeva','54SkaYjG','VeevaService','../classes/retrievers/veeva-components/id.veeva-component.retriever','set','map','EmptyLogger','49733844YpRryM','69013YnruwT','name','toString','_connectionSalesforce','_veevaService','SourceIdVeevaComponentRelationshipRetriever','200799TneleU','BranchFlosumComponentRetriever','createDataResult','baseVeevaComponentRetrieverOptions','1362578BUnPsl','_branchId','getDependencyVeevaComponents','_connectionVeeva','getFlosumComponents','FlosumComponentVeevaComponentRetriever','../classes/retrievers/veeva-component-relationships/source-id.veeva-component-relationship.retriever','getVeevaComponentsById','lastModifiedDate','240770yPuPvD','reduce','304enQyaa','17454VJmnLK','sourceComponentId','../classes/retrievers/veeva-components/flosum-component.veeva-component.retriever','AppResponseStatus','_salesforceService','retrieve','apply','defineProperty','2IAHXvp','./salesforce.service','(((.+)+)+)+$','dependencies','search','length','../enums/status.enums','90HVMjxE','DependencyService','../classes/retrievers/flosum-components/branch.flosum-component.retriever','IdVeevaComponentRetriever','push','type','has','constructor','SalesforceService','506YzZRWz','getVeevaComponentsByFlosumComponents','No\x20veeva\x20components\x20found\x20in\x20branch'];a400_0x5dd2=function(){return _0x3a9f55;};return a400_0x5dd2();}'use strict';Object[a400_0x16bb88(0x204)](exports,'__esModule',{'value':!![]}),exports[a400_0x16bb88(0x20d)]=void 0x0;const veeva_service_1=require('./veeva.service'),status_enums_1=require(a400_0x16bb88(0x20b)),salesforce_service_1=require(a400_0x16bb88(0x206)),empty_logger_1=require('../classes/loggers/empty.logger'),flosum_component_veeva_component_retriever_1=require(a400_0x16bb88(0x1ff)),id_veeva_component_retriever_1=require(a400_0x16bb88(0x1e2)),source_id_veeva_component_relationship_retriever_1=require(a400_0x16bb88(0x1f7)),branch_flosum_component_retriever_1=require(a400_0x16bb88(0x20e));class DependencyService{constructor(_0x2136e8,_0x55bd04,_0x222bde){const _0x3a7c00=a400_0x16bb88;this[_0x3a7c00(0x1ea)]=_0x55bd04,this[_0x3a7c00(0x1f4)]=_0x222bde,this['_branchId']=_0x2136e8['branchId'];const _0x36b223=new empty_logger_1['EmptyLogger']();this['_veevaService']=new veeva_service_1[(_0x3a7c00(0x1e1))]({'connection':this['_connectionVeeva'],'logger':_0x36b223}),this['_salesforceService']=new salesforce_service_1[(_0x3a7c00(0x1d8))]({'connection':this['_connectionSalesforce']});}get[a400_0x16bb88(0x1f0)](){const _0x2f2b4c=a400_0x16bb88;return{'veevaService':this[_0x2f2b4c(0x1eb)],'logger':new empty_logger_1[(_0x2f2b4c(0x1e5))]()};}async['execute'](){const _0x71bc7d=a400_0x16bb88,_0x4ad907=await this[_0x71bc7d(0x1f5)](),_0x2241a4=await this[_0x71bc7d(0x1da)](_0x4ad907),_0x333822=await this['getDependencyVeevaComponents'](_0x2241a4),_0x449fc3=_0x333822[_0x71bc7d(0x1e4)](_0x381913=>_0x381913[_0x71bc7d(0x1dc)]),_0x49d5a9=await this[_0x71bc7d(0x1f8)](_0x449fc3),_0x213bbe=DependencyService[_0x71bc7d(0x1ef)](_0x2241a4,_0x49d5a9,_0x333822);return{'responseStatus':status_enums_1[_0x71bc7d(0x200)]['SUCCESS'],'data':_0x213bbe};}async[a400_0x16bb88(0x1f5)](){const _0x392e81=a400_0x16bb88,_0x221b38=await new branch_flosum_component_retriever_1[(_0x392e81(0x1ee))]({'value':this[_0x392e81(0x1f2)],'salesforceService':this[_0x392e81(0x201)]})[_0x392e81(0x202)]();if(!_0x221b38['length'])throw new Error(_0x392e81(0x1db));return _0x221b38;}async['getVeevaComponentsByFlosumComponents'](_0x3cd00d){const _0x5af8a9=a400_0x16bb88,_0x1a972f=await new flosum_component_veeva_component_retriever_1[(_0x5af8a9(0x1f6))]({'value':_0x3cd00d,...this['baseVeevaComponentRetrieverOptions']})[_0x5af8a9(0x202)]();if(!_0x1a972f['length'])throw new Error('No\x20components\x20found\x20in\x20Veeva');return _0x1a972f;}async[a400_0x16bb88(0x1f8)](_0x3a941b){const _0x3c5f4c=a400_0x16bb88,_0x27cd7f=await new id_veeva_component_retriever_1[(_0x3c5f4c(0x1d3))]({'value':_0x3a941b,...this[_0x3c5f4c(0x1f0)]})[_0x3c5f4c(0x202)]();if(!_0x27cd7f['length'])throw new Error(_0x3c5f4c(0x1df));return _0x27cd7f;}async[a400_0x16bb88(0x1f3)](_0xeeecd7){const _0x1d3f96=a400_0x16bb88,_0x14ba92=await new source_id_veeva_component_relationship_retriever_1[(_0x1d3f96(0x1ec))]({'value':_0xeeecd7[_0x1d3f96(0x1e4)](({id:_0x3525c3})=>_0x3525c3),'veevaService':this['_veevaService']})[_0x1d3f96(0x202)]();if(!_0x14ba92[_0x1d3f96(0x20a)])throw new Error('No\x20relationship\x20found\x20in\x20Veeva');return _0x14ba92;}static[a400_0x16bb88(0x1ef)](_0x4e1a24,_0x1bc565,_0xf35857){const _0x1133fe=a400_0x16bb88,_0x36ce9f={},_0x58a831=_0x4e1a24[_0x1133fe(0x1fb)]((_0x3c52ad,_0x3ec6b8)=>_0x3c52ad[_0x1133fe(0x1e3)](_0x3ec6b8['id'],_0x3ec6b8),new Map()),_0x35f9c9=_0x1bc565[_0x1133fe(0x1fb)]((_0x56fec0,_0x55a11d)=>_0x56fec0[_0x1133fe(0x1e3)](_0x55a11d['id'],_0x55a11d),new Map());for(const _0x28b799 of _0xf35857){const _0x2c5d5f=_0x58a831[_0x1133fe(0x1d6)](_0x28b799[_0x1133fe(0x1fe)])&&_0x35f9c9[_0x1133fe(0x1d6)](_0x28b799[_0x1133fe(0x1dc)]);if(!_0x2c5d5f)continue;const _0x40824d=_0x58a831[_0x1133fe(0x1dd)](_0x28b799[_0x1133fe(0x1fe)]),_0x518de6=_0x35f9c9[_0x1133fe(0x1dd)](_0x28b799['targetComponentId']);!_0x36ce9f[_0x40824d[_0x1133fe(0x1e8)]+':'+_0x40824d[_0x1133fe(0x1d5)]]&&(_0x36ce9f[_0x40824d[_0x1133fe(0x1e8)]+':'+_0x40824d['type']]={'dependencies':[],'label':_0x40824d[_0x1133fe(0x1e8)]+'\x20('+_0x40824d[_0x1133fe(0x1d5)]+')','type':_0x40824d[_0x1133fe(0x1d5)],'name':_0x40824d[_0x1133fe(0x1e8)]}),_0x36ce9f[_0x40824d[_0x1133fe(0x1e8)]+':'+_0x40824d['type']][_0x1133fe(0x208)][_0x1133fe(0x1d4)]({'label':_0x518de6[_0x1133fe(0x1e8)]+'\x20('+_0x518de6[_0x1133fe(0x1d5)]+')','name':_0x518de6[_0x1133fe(0x1e8)],'type':_0x518de6['type'],'lastUpdate':_0x518de6[_0x1133fe(0x1f9)],'isMissing':!_0x58a831[_0x1133fe(0x1d6)](_0x28b799[_0x1133fe(0x1dc)])});}return _0x36ce9f;}}exports[a400_0x16bb88(0x20d)]=DependencyService;