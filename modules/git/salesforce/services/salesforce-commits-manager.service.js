const a244_0x53fc90=a244_0x2d12;function a244_0x5202(){const _0x4485f2=['./salesforce-components-manager.service','__esModule','796175fLoTRV','\x20COMPONENTS_SIZE\x20=\x20','composite','(((.+)+)+)+$','delete','Cannot\x20upload\x20components\x20due\x20to\x20size\x20-\x20MAX_SIZE\x20=\x20','options','proceedChunksToUpload','reduce','proceedCommitsToBranch','search','log','./salesforce-composite.service','componentsToUpdate','constructor','toJSON','branchId','proceedCommits','executeGraphs','commitId','Sending\x20','sfLogger','SALESFORCE_MAX_REQUEST_SIZE_BYTES','491819UAjZGN','toString','componentsToDelete','SalesforceComponentsManager','update','__importDefault','SalesforceCommitsManager','graph','28TKYkpa','removed','1098784MLDZIK','length','inserted','stringify','5605371pLHvBj','proceedRequests','../utils/composite.utils','190BedCNm','proceedCommitsToRepository','recordTypes','Logger','splice','manifests','defineProperty','logger','author','../../../shared/utils','proceededComponentsMeta','repositoryId','2EmoCvP','SalesforceCompositeService','3bHfTWL','chunkArray','typedi','apply','modified','default','COMPONENTS_PER_CHUNK','SalesforceError','1570664qSJFtt','find','insert','SALESFORCE_MAX_GRAPH_NODES_PER_REQUEST','1134678xFDjcO','push','floor','get','453981ShYCTt'];a244_0x5202=function(){return _0x4485f2;};return a244_0x5202();}(function(_0x45b4ef,_0x2e7a09){const _0x51bfbd=a244_0x2d12,_0x1f0008=_0x45b4ef();while(!![]){try{const _0x46bad9=-parseInt(_0x51bfbd(0x18c))/0x1*(parseInt(_0x51bfbd(0x160))/0x2)+parseInt(_0x51bfbd(0x162))/0x3*(-parseInt(_0x51bfbd(0x16a))/0x4)+parseInt(_0x51bfbd(0x175))/0x5+parseInt(_0x51bfbd(0x16e))/0x6+-parseInt(_0x51bfbd(0x194))/0x7*(parseInt(_0x51bfbd(0x196))/0x8)+parseInt(_0x51bfbd(0x151))/0x9+parseInt(_0x51bfbd(0x154))/0xa*(parseInt(_0x51bfbd(0x172))/0xb);if(_0x46bad9===_0x2e7a09)break;else _0x1f0008['push'](_0x1f0008['shift']());}catch(_0x216651){_0x1f0008['push'](_0x1f0008['shift']());}}}(a244_0x5202,0x4e79f));const a244_0x335289=(function(){let _0x51a8bc=!![];return function(_0x10d263,_0xc84dd0){const _0xed655c=_0x51a8bc?function(){const _0x192001=a244_0x2d12;if(_0xc84dd0){const _0x2e2d62=_0xc84dd0[_0x192001(0x165)](_0x10d263,arguments);return _0xc84dd0=null,_0x2e2d62;}}:function(){};return _0x51a8bc=![],_0xed655c;};}()),a244_0x4f8c3d=a244_0x335289(this,function(){const _0x571acb=a244_0x2d12;return a244_0x4f8c3d['toString']()['search'](_0x571acb(0x178))[_0x571acb(0x18d)]()[_0x571acb(0x183)](a244_0x4f8c3d)[_0x571acb(0x17f)](_0x571acb(0x178));});a244_0x4f8c3d();'use strict';var __importDefault=this&&this[a244_0x53fc90(0x191)]||function(_0x331836){const _0x310b8b=a244_0x53fc90;return _0x331836&&_0x331836[_0x310b8b(0x174)]?_0x331836:{'default':_0x331836};};Object[a244_0x53fc90(0x15a)](exports,'__esModule',{'value':!![]}),exports[a244_0x53fc90(0x192)]=void 0x0;const core_1=require('../../../../core'),typedi_1=__importDefault(require(a244_0x53fc90(0x164))),constants_1=require('../../../../constants'),utils_1=require(a244_0x53fc90(0x15d)),salesforce_error_1=require('../errors/salesforce.error'),composite_utils_1=require(a244_0x53fc90(0x153)),salesforce_components_manager_service_1=require(a244_0x53fc90(0x173)),salesforce_composite_service_1=require(a244_0x53fc90(0x181));function a244_0x2d12(_0x5188a2,_0x20419e){const _0x62f5e5=a244_0x5202();return a244_0x2d12=function(_0x4f8c3d,_0x335289){_0x4f8c3d=_0x4f8c3d-0x14e;let _0x520293=_0x62f5e5[_0x4f8c3d];return _0x520293;},a244_0x2d12(_0x5188a2,_0x20419e);}class SalesforceCommitsManager{constructor(_0xc17601){const _0x48dec7=a244_0x53fc90;this[_0x48dec7(0x17b)]=_0xc17601,this[_0x48dec7(0x168)]=0x3,this[_0x48dec7(0x15b)]=new core_1[(_0x48dec7(0x157))](SalesforceCommitsManager['name']),this[_0x48dec7(0x18a)]=this[_0x48dec7(0x17b)][_0x48dec7(0x15b)],this[_0x48dec7(0x177)]=typedi_1[_0x48dec7(0x167)][_0x48dec7(0x171)](salesforce_composite_service_1[_0x48dec7(0x161)]),this[_0x48dec7(0x15e)]=[];}async[a244_0x53fc90(0x17c)](_0x535801,_0x7f9290=![]){const _0x340e88=a244_0x53fc90,_0x35a255=async _0x585c8d=>{const _0x51827f=a244_0x2d12;await this[_0x51827f(0x15b)][_0x51827f(0x180)](_0x51827f(0x189)+_0x585c8d[_0x51827f(0x17d)]((_0x5c2f7c,_0x3adbe8)=>_0x5c2f7c+_0x3adbe8[_0x51827f(0x14e)],0x0)+'\x20requests\x20to\x20composite\x20api.');const _0x434202=_0x585c8d['map']((_0x275801,_0xc0189)=>({'graphId':_0x51827f(0x193)+_0xc0189,'compositeRequest':_0x275801})),_0xbeb372=await this['composite'][_0x51827f(0x187)](_0x434202);if(_0x7f9290){const _0x56e5de=(0x0,composite_utils_1['extractComponentIdsFromGraphsResponse'])(_0xbeb372);for(const {id:_0x3935d0,ref:_0x1f2ca}of _0x56e5de){const _0x10b9b9=this['proceededComponentsMeta'][_0x51827f(0x16b)](_0x586d7e=>_0x586d7e['reference']===_0x1f2ca);_0x10b9b9&&(_0x10b9b9['componentId']=_0x3935d0);}}},_0x513306=0x1e8480;let _0x170fd9=0x0,_0x5212b3=[];for(const _0x3c1841 of _0x535801){const _0x2edb2b=_0x3c1841[_0x340e88(0x17d)]((_0x3cf96b,_0x4aef54)=>{const _0xff5f78=JSON['stringify'](_0x4aef54)['length']*0x2;return _0x3cf96b+_0xff5f78;},0x0);if(_0x2edb2b>constants_1[_0x340e88(0x18b)])throw new salesforce_error_1[(_0x340e88(0x169))](_0x340e88(0x17a)+constants_1[_0x340e88(0x18b)]+_0x340e88(0x176)+_0x2edb2b);_0x170fd9+_0x2edb2b>constants_1['SALESFORCE_MAX_REQUEST_SIZE_BYTES']-_0x513306&&(await _0x35a255(_0x5212b3),_0x5212b3=[],_0x170fd9=0x0),_0x170fd9+=_0x2edb2b,_0x5212b3['push'](_0x3c1841);}_0x5212b3['length']&&await _0x35a255(_0x5212b3);}async[a244_0x53fc90(0x152)](_0x4b6954,_0x50c6aa=![]){const _0x40e77c=a244_0x53fc90,_0xe559dc=(this[_0x40e77c(0x168)]+ +_0x50c6aa)*0x3,_0x139c23=(0x0,utils_1[_0x40e77c(0x163)])(_0x4b6954,_0xe559dc);try{while(_0x139c23[_0x40e77c(0x14e)]){const _0x2d39e7=_0x139c23[_0x40e77c(0x158)](0x0,Math[_0x40e77c(0x170)](constants_1[_0x40e77c(0x16d)]/_0xe559dc));await this[_0x40e77c(0x17c)](_0x2d39e7,_0x50c6aa);}}catch(_0x971780){this[_0x40e77c(0x15b)]['error'](_0x971780 instanceof salesforce_error_1[_0x40e77c(0x169)]?JSON[_0x40e77c(0x150)](_0x971780[_0x40e77c(0x184)](),null,0x2):_0x971780),this[_0x40e77c(0x18a)][_0x40e77c(0x180)](_0x971780 instanceof salesforce_error_1[_0x40e77c(0x169)]?JSON[_0x40e77c(0x150)](_0x971780[_0x40e77c(0x184)](),null,0x2):_0x971780[_0x40e77c(0x18d)]());throw _0x971780;}}async[a244_0x53fc90(0x155)](_0x547ada){const _0x411595=a244_0x53fc90;for(const _0x337170 of _0x547ada){if(!_0x337170[_0x411595(0x14f)][_0x411595(0x14e)]&&!_0x337170[_0x411595(0x166)]['length']&&!_0x337170[_0x411595(0x195)][_0x411595(0x14e)])continue;const _0x162f85=[],_0x24c217=[],_0x587343=new salesforce_components_manager_service_1[(_0x411595(0x18f))](this[_0x411595(0x17b)][_0x411595(0x15f)],this[_0x411595(0x17b)][_0x411595(0x185)],_0x337170['author'],this['options'][_0x411595(0x156)],this[_0x411595(0x15e)]);_0x162f85[_0x411595(0x16f)](...await _0x587343['insert'](_0x337170[_0x411595(0x14f)],this['options']['commitId'])),_0x162f85[_0x411595(0x16f)](...await _0x587343[_0x411595(0x190)](_0x337170[_0x411595(0x166)],this['options'][_0x411595(0x188)])),_0x24c217[_0x411595(0x16f)](await _0x587343[_0x411595(0x179)](_0x337170['removed'],!![])),this[_0x411595(0x15e)]=_0x587343['getProceededComponentsMeta'](),await this['proceedRequests'](_0x162f85,!![]);for(const _0x12db92 of _0x24c217){_0x12db92[_0x411595(0x159)][_0x411595(0x14e)]&&await this[_0x411595(0x152)](_0x12db92['manifests'],!![]),_0x12db92[_0x411595(0x182)][_0x411595(0x14e)]&&await this[_0x411595(0x152)](_0x12db92[_0x411595(0x182)],!![]),_0x12db92[_0x411595(0x18e)][_0x411595(0x14e)]&&await this[_0x411595(0x152)](_0x12db92[_0x411595(0x18e)],!![]);}this[_0x411595(0x15b)][_0x411595(0x180)]('Have\x20to\x20proceed\x20%d\x20composite\x20requests\x20(repository)',_0x162f85['length']);}}async['proceedCommitsToBranch'](_0x519307){const _0x23dddc=a244_0x53fc90,_0x1a05d3=[],_0x10bd52=[];for(const _0x4bb910 of _0x519307){if(!_0x4bb910['inserted']['length']&&!_0x4bb910[_0x23dddc(0x166)]['length']&&!_0x4bb910[_0x23dddc(0x195)][_0x23dddc(0x14e)])continue;const _0x217a42=new salesforce_components_manager_service_1[(_0x23dddc(0x18f))](this[_0x23dddc(0x17b)]['repositoryId'],this[_0x23dddc(0x17b)][_0x23dddc(0x185)],_0x4bb910[_0x23dddc(0x15c)],this[_0x23dddc(0x17b)][_0x23dddc(0x156)],[]);_0x1a05d3[_0x23dddc(0x16f)](...await _0x217a42[_0x23dddc(0x16c)](_0x4bb910[_0x23dddc(0x14f)])),_0x1a05d3[_0x23dddc(0x16f)](...await _0x217a42[_0x23dddc(0x190)](_0x4bb910[_0x23dddc(0x166)])),_0x10bd52['push'](await _0x217a42[_0x23dddc(0x179)](_0x4bb910[_0x23dddc(0x195)]));}this[_0x23dddc(0x15b)][_0x23dddc(0x180)]('Have\x20to\x20proceed\x20%d\x20composite\x20requests\x20(branch)',_0x1a05d3['length']),await this[_0x23dddc(0x152)](_0x1a05d3);const _0x4ede69=_0x10bd52[_0x23dddc(0x17d)]((_0xeb751c,_0xfd32f9)=>({'manifests':[..._0xeb751c[_0x23dddc(0x159)],..._0xfd32f9[_0x23dddc(0x159)]],'componentsToDelete':[..._0xeb751c[_0x23dddc(0x18e)],..._0xfd32f9[_0x23dddc(0x18e)]],'componentsToUpdate':[..._0xeb751c[_0x23dddc(0x182)],..._0xfd32f9[_0x23dddc(0x182)]]}),{'manifests':[],'componentsToDelete':[],'componentsToUpdate':[]});_0x4ede69[_0x23dddc(0x159)][_0x23dddc(0x14e)]&&await this['proceedRequests'](_0x4ede69[_0x23dddc(0x159)],!![]),_0x4ede69[_0x23dddc(0x182)][_0x23dddc(0x14e)]&&await this[_0x23dddc(0x152)](_0x4ede69[_0x23dddc(0x182)],!![]),_0x4ede69[_0x23dddc(0x18e)]['length']&&await this[_0x23dddc(0x152)](_0x4ede69[_0x23dddc(0x18e)],!![]);}async[a244_0x53fc90(0x186)](_0x21490b){const _0x5a7f33=a244_0x53fc90;this[_0x5a7f33(0x17b)][_0x5a7f33(0x185)]?await this[_0x5a7f33(0x17e)](_0x21490b):await this[_0x5a7f33(0x155)](_0x21490b);}}exports['SalesforceCommitsManager']=SalesforceCommitsManager;