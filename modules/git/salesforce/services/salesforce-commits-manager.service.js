const a228_0x305b12=a228_0x497f;(function(_0x5c643a,_0x44a377){const _0x3639cd=a228_0x497f,_0x591e76=_0x5c643a();while(!![]){try{const _0x5e9214=parseInt(_0x3639cd(0x218))/0x1+parseInt(_0x3639cd(0x21c))/0x2*(parseInt(_0x3639cd(0x224))/0x3)+parseInt(_0x3639cd(0x1ed))/0x4+-parseInt(_0x3639cd(0x1e4))/0x5*(-parseInt(_0x3639cd(0x21d))/0x6)+parseInt(_0x3639cd(0x22a))/0x7+-parseInt(_0x3639cd(0x228))/0x8+parseInt(_0x3639cd(0x226))/0x9;if(_0x5e9214===_0x44a377)break;else _0x591e76['push'](_0x591e76['shift']());}catch(_0x287989){_0x591e76['push'](_0x591e76['shift']());}}}(a228_0x259d,0xa2b66));function a228_0x259d(){const _0x347907=['have\x20to\x20proceed\x20%d\x20composite\x20requests\x20(repository)','error','COMPONENTS_PER_CHUNK','chunkArray','splice','length','floor','search','./salesforce-components-manager.service','__importDefault','have\x20to\x20proceed\x20%d\x20composite\x20requests\x20(branch)','graph','modified','componentId','options','find','\x20COMPONENTS_SIZE\x20=\x20','__esModule','toJSON','proceedRequests','../utils/composite.utils','../../../../constants','composite','160198BTFwLf','(((.+)+)+)+$','extractComponentIdsFromGraphsResponse','manifests','1038RLKPJh','4722cjqorP','SALESFORCE_MAX_GRAPH_NODES_PER_REQUEST','logger','componentsToUpdate','proceededComponentsMeta','SALESFORCE_MAX_REQUEST_SIZE_BYTES','delete','714NWKXbD','log','3072645UVGCyT','map','5782960zNrmgq','Logger','5023480eYrgph','SalesforceCompositeService','removed','SalesforceError','130ixMcMV','author','inserted','proceedCommitsToRepository','proceedCommitsToBranch','toString','sfLogger','SalesforceComponentsManager','../../../../core','104452DovomY','defineProperty','apply','commitId','push','stringify','update','repositoryId','recordTypes','name','get','proceedChunksToUpload','typedi','insert','SalesforceCommitsManager','\x20requests\x20to\x20composite\x20api.','reduce','branchId','./salesforce-composite.service','componentsToDelete'];a228_0x259d=function(){return _0x347907;};return a228_0x259d();}const a228_0x1ef4eb=(function(){let _0x5ed30e=!![];return function(_0x4072b7,_0x590854){const _0x2c8765=_0x5ed30e?function(){const _0x23bf67=a228_0x497f;if(_0x590854){const _0x5edb22=_0x590854[_0x23bf67(0x1ef)](_0x4072b7,arguments);return _0x590854=null,_0x5edb22;}}:function(){};return _0x5ed30e=![],_0x2c8765;};}()),a228_0x40435e=a228_0x1ef4eb(this,function(){const _0xd142a1=a228_0x497f;return a228_0x40435e['toString']()[_0xd142a1(0x208)](_0xd142a1(0x219))['toString']()['constructor'](a228_0x40435e)[_0xd142a1(0x208)](_0xd142a1(0x219));});a228_0x40435e();'use strict';var __importDefault=this&&this[a228_0x305b12(0x20a)]||function(_0x3de5a2){const _0xde2751=a228_0x305b12;return _0x3de5a2&&_0x3de5a2[_0xde2751(0x212)]?_0x3de5a2:{'default':_0x3de5a2};};function a228_0x497f(_0x2d55b0,_0x5160d0){const _0x1cc00b=a228_0x259d();return a228_0x497f=function(_0x40435e,_0x1ef4eb){_0x40435e=_0x40435e-0x1e2;let _0x259d44=_0x1cc00b[_0x40435e];return _0x259d44;},a228_0x497f(_0x2d55b0,_0x5160d0);}Object[a228_0x305b12(0x1ee)](exports,'__esModule',{'value':!![]}),exports['SalesforceCommitsManager']=void 0x0;const core_1=require(a228_0x305b12(0x1ec)),typedi_1=__importDefault(require(a228_0x305b12(0x1f9))),constants_1=require(a228_0x305b12(0x216)),utils_1=require('../../../shared/utils'),salesforce_error_1=require('../errors/salesforce.error'),composite_utils_1=require(a228_0x305b12(0x215)),salesforce_components_manager_service_1=require(a228_0x305b12(0x209)),salesforce_composite_service_1=require(a228_0x305b12(0x1ff));class SalesforceCommitsManager{constructor(_0x18a43f){const _0x5dda29=a228_0x305b12;this[_0x5dda29(0x20f)]=_0x18a43f,this[_0x5dda29(0x203)]=0x3,this[_0x5dda29(0x21f)]=new core_1[(_0x5dda29(0x229))](SalesforceCommitsManager[_0x5dda29(0x1f6)]),this[_0x5dda29(0x1ea)]=this[_0x5dda29(0x20f)][_0x5dda29(0x21f)],this[_0x5dda29(0x217)]=typedi_1['default'][_0x5dda29(0x1f7)](salesforce_composite_service_1[_0x5dda29(0x22b)]),this[_0x5dda29(0x221)]=[];}async[a228_0x305b12(0x1f8)](_0x26384b,_0x45f19d=![]){const _0x281261=a228_0x305b12,_0x32322e=async _0x509474=>{const _0xc2c2=a228_0x497f;await this[_0xc2c2(0x21f)][_0xc2c2(0x225)]('Sending\x20'+_0x509474[_0xc2c2(0x1fd)]((_0x242d02,_0x5ce6ae)=>_0x242d02+_0x5ce6ae['length'],0x0)+_0xc2c2(0x1fc));const _0x1c7344=_0x509474[_0xc2c2(0x227)]((_0x2836e2,_0x380545)=>({'graphId':_0xc2c2(0x20c)+_0x380545,'compositeRequest':_0x2836e2})),_0x5879f4=await this['composite']['executeGraphs'](_0x1c7344);if(_0x45f19d){const _0x29d5a3=(0x0,composite_utils_1[_0xc2c2(0x21a)])(_0x5879f4);for(const {id:_0x40e6c3,ref:_0x387162}of _0x29d5a3){const _0x13c239=this['proceededComponentsMeta'][_0xc2c2(0x210)](_0xb1d9c5=>_0xb1d9c5['reference']===_0x387162);_0x13c239&&(_0x13c239[_0xc2c2(0x20e)]=_0x40e6c3);}}},_0x4861bc=0x1e8480;let _0x28ecfd=0x0,_0x1a82c2=[];for(const _0x1401b7 of _0x26384b){const _0x52df90=_0x1401b7[_0x281261(0x1fd)]((_0x247e61,_0x322fc2)=>{const _0x552556=_0x281261,_0x829bbb=JSON['stringify'](_0x322fc2)[_0x552556(0x206)]*0x2;return _0x247e61+_0x829bbb;},0x0);if(_0x52df90>constants_1[_0x281261(0x222)])throw new salesforce_error_1[(_0x281261(0x1e3))]('Cannot\x20upload\x20components\x20due\x20to\x20size\x20-\x20MAX_SIZE\x20=\x20'+constants_1[_0x281261(0x222)]+_0x281261(0x211)+_0x52df90);_0x28ecfd+_0x52df90>constants_1[_0x281261(0x222)]-_0x4861bc&&(await _0x32322e(_0x1a82c2),_0x1a82c2=[],_0x28ecfd=0x0),_0x28ecfd+=_0x52df90,_0x1a82c2[_0x281261(0x1f1)](_0x1401b7);}_0x1a82c2[_0x281261(0x206)]&&await _0x32322e(_0x1a82c2);}async[a228_0x305b12(0x214)](_0x404c55,_0x1b8891=![]){const _0x2d0137=a228_0x305b12,_0xc82ec6=(this[_0x2d0137(0x203)]+ +_0x1b8891)*0x3,_0x28f408=(0x0,utils_1[_0x2d0137(0x204)])(_0x404c55,_0xc82ec6);try{while(_0x28f408[_0x2d0137(0x206)]){const _0x210ce8=_0x28f408[_0x2d0137(0x205)](0x0,Math[_0x2d0137(0x207)](constants_1[_0x2d0137(0x21e)]/_0xc82ec6));await this[_0x2d0137(0x1f8)](_0x210ce8,_0x1b8891);}}catch(_0x133b03){this[_0x2d0137(0x21f)][_0x2d0137(0x202)](_0x133b03 instanceof salesforce_error_1['SalesforceError']?JSON['stringify'](_0x133b03['toJSON'](),null,0x2):_0x133b03),this[_0x2d0137(0x1ea)]['log'](_0x133b03 instanceof salesforce_error_1[_0x2d0137(0x1e3)]?JSON[_0x2d0137(0x1f2)](_0x133b03[_0x2d0137(0x213)](),null,0x2):_0x133b03[_0x2d0137(0x1e9)]());throw _0x133b03;}}async[a228_0x305b12(0x1e7)](_0x1c882c){const _0x231e8b=a228_0x305b12;for(const _0x314565 of _0x1c882c){if(!_0x314565[_0x231e8b(0x1e6)][_0x231e8b(0x206)]&&!_0x314565[_0x231e8b(0x20d)][_0x231e8b(0x206)]&&!_0x314565[_0x231e8b(0x1e2)][_0x231e8b(0x206)])continue;const _0x3499dc=[],_0x206dcd=[],_0x22e6a5=new salesforce_components_manager_service_1[(_0x231e8b(0x1eb))](this['options'][_0x231e8b(0x1f4)],this[_0x231e8b(0x20f)][_0x231e8b(0x1fe)],_0x314565[_0x231e8b(0x1e5)],this[_0x231e8b(0x20f)]['recordTypes'],this[_0x231e8b(0x221)]);_0x3499dc[_0x231e8b(0x1f1)](...await _0x22e6a5['insert'](_0x314565['inserted'],this[_0x231e8b(0x20f)][_0x231e8b(0x1f0)])),_0x3499dc[_0x231e8b(0x1f1)](...await _0x22e6a5[_0x231e8b(0x1f3)](_0x314565[_0x231e8b(0x20d)],this[_0x231e8b(0x20f)][_0x231e8b(0x1f0)])),_0x206dcd[_0x231e8b(0x1f1)](await _0x22e6a5[_0x231e8b(0x223)](_0x314565[_0x231e8b(0x1e2)],!![])),this[_0x231e8b(0x221)]=_0x22e6a5['getProceededComponentsMeta'](),await this[_0x231e8b(0x214)](_0x3499dc,!![]);for(const _0x329fb7 of _0x206dcd){_0x329fb7[_0x231e8b(0x21b)]['length']&&await this[_0x231e8b(0x214)](_0x329fb7[_0x231e8b(0x21b)],!![]),_0x329fb7[_0x231e8b(0x220)]['length']&&await this[_0x231e8b(0x214)](_0x329fb7[_0x231e8b(0x220)],!![]),_0x329fb7['componentsToDelete']['length']&&await this['proceedRequests'](_0x329fb7[_0x231e8b(0x200)],!![]);}this[_0x231e8b(0x21f)][_0x231e8b(0x225)](_0x231e8b(0x201),_0x3499dc[_0x231e8b(0x206)]);}}async[a228_0x305b12(0x1e8)](_0x7f0ddf){const _0x1f9579=a228_0x305b12,_0x2bbc0f=[],_0x481251=[];for(const _0x25605c of _0x7f0ddf){if(!_0x25605c[_0x1f9579(0x1e6)]['length']&&!_0x25605c[_0x1f9579(0x20d)][_0x1f9579(0x206)]&&!_0x25605c[_0x1f9579(0x1e2)][_0x1f9579(0x206)])continue;const _0x4372e3=new salesforce_components_manager_service_1[(_0x1f9579(0x1eb))](this[_0x1f9579(0x20f)][_0x1f9579(0x1f4)],this['options'][_0x1f9579(0x1fe)],_0x25605c[_0x1f9579(0x1e5)],this[_0x1f9579(0x20f)][_0x1f9579(0x1f5)],[]);_0x2bbc0f['push'](...await _0x4372e3[_0x1f9579(0x1fa)](_0x25605c['inserted'])),_0x2bbc0f['push'](...await _0x4372e3[_0x1f9579(0x1f3)](_0x25605c[_0x1f9579(0x20d)])),_0x481251[_0x1f9579(0x1f1)](await _0x4372e3[_0x1f9579(0x223)](_0x25605c['removed']));}this[_0x1f9579(0x21f)][_0x1f9579(0x225)](_0x1f9579(0x20b),_0x2bbc0f[_0x1f9579(0x206)]),await this[_0x1f9579(0x214)](_0x2bbc0f);const _0x12b3a0=_0x481251[_0x1f9579(0x1fd)]((_0x3b1e9e,_0x1e6db5)=>({'manifests':[..._0x3b1e9e[_0x1f9579(0x21b)],..._0x1e6db5[_0x1f9579(0x21b)]],'componentsToDelete':[..._0x3b1e9e['componentsToDelete'],..._0x1e6db5['componentsToDelete']],'componentsToUpdate':[..._0x3b1e9e[_0x1f9579(0x220)],..._0x1e6db5[_0x1f9579(0x220)]]}),{'manifests':[],'componentsToDelete':[],'componentsToUpdate':[]});_0x12b3a0['manifests'][_0x1f9579(0x206)]&&await this['proceedRequests'](_0x12b3a0['manifests'],!![]),_0x12b3a0['componentsToUpdate'][_0x1f9579(0x206)]&&await this[_0x1f9579(0x214)](_0x12b3a0[_0x1f9579(0x220)],!![]),_0x12b3a0[_0x1f9579(0x200)][_0x1f9579(0x206)]&&await this['proceedRequests'](_0x12b3a0[_0x1f9579(0x200)],!![]);}async['proceedCommits'](_0x55a476){const _0x380923=a228_0x305b12;this[_0x380923(0x20f)][_0x380923(0x1fe)]?await this[_0x380923(0x1e8)](_0x55a476):await this['proceedCommitsToRepository'](_0x55a476);}}exports[a228_0x305b12(0x1fb)]=SalesforceCommitsManager;