const a227_0x2ca48a=a227_0xd20e;(function(_0x7b4d9d,_0x3eb6d4){const _0x674cd1=a227_0xd20e,_0x3f0536=_0x7b4d9d();while(!![]){try{const _0x28ac3b=parseInt(_0x674cd1(0x12c))/0x1+-parseInt(_0x674cd1(0x12a))/0x2*(-parseInt(_0x674cd1(0x127))/0x3)+-parseInt(_0x674cd1(0x164))/0x4*(parseInt(_0x674cd1(0x138))/0x5)+parseInt(_0x674cd1(0x15a))/0x6+-parseInt(_0x674cd1(0x128))/0x7*(-parseInt(_0x674cd1(0x162))/0x8)+-parseInt(_0x674cd1(0x14c))/0x9*(-parseInt(_0x674cd1(0x14d))/0xa)+parseInt(_0x674cd1(0x13a))/0xb*(-parseInt(_0x674cd1(0x140))/0xc);if(_0x28ac3b===_0x3eb6d4)break;else _0x3f0536['push'](_0x3f0536['shift']());}catch(_0x54c001){_0x3f0536['push'](_0x3f0536['shift']());}}}(a227_0x2be0,0xe0ae6));const a227_0x3206d8=(function(){let _0x51d300=!![];return function(_0x4eb643,_0x3daecc){const _0x1cf1bc=_0x51d300?function(){const _0x245daa=a227_0xd20e;if(_0x3daecc){const _0x253be2=_0x3daecc[_0x245daa(0x130)](_0x4eb643,arguments);return _0x3daecc=null,_0x253be2;}}:function(){};return _0x51d300=![],_0x1cf1bc;};}()),a227_0x3a9fb0=a227_0x3206d8(this,function(){const _0x1dbf4a=a227_0xd20e;return a227_0x3a9fb0[_0x1dbf4a(0x146)]()[_0x1dbf4a(0x139)](_0x1dbf4a(0x158))[_0x1dbf4a(0x146)]()['constructor'](a227_0x3a9fb0)[_0x1dbf4a(0x139)](_0x1dbf4a(0x158));});function a227_0x2be0(){const _0xca29fe=['modified','proceedChunksToUpload','Cannot\x20upload\x20components\x20due\x20to\x20size\x20-\x20MAX_SIZE\x20=\x20','stringify','length','(((.+)+)+)+$','executeGraphs','4711722FMvgRp','\x20requests\x20to\x20composite\x20api.','log','update','componentsToUpdate','author','proceedCommitsToRepository','proceedCommitsToBranch','8NhATOS','logger','48fINPxD','get','composite','push','removed','__importDefault','\x20COMPONENTS_SIZE\x20=\x20','componentsToDelete','recordTypes','inserted','../../../../core','Sending\x20','reference','repositoryId','defineProperty','Logger','540006fJiULC','7981127yoYRil','find','10gdTXan','error','696859oRuSxX','map','SalesforceError','branchId','apply','manifests','default','proceedCommits','options','typedi','__esModule','proceededComponentsMeta','236965fCSAyR','search','176eZAYmu','SalesforceComponentsManager','proceedRequests','./salesforce-components-manager.service','chunkArray','insert','1858020hNMuLd','COMPONENTS_PER_CHUNK','../../../../constants','../errors/salesforce.error','SALESFORCE_MAX_GRAPH_NODES_PER_REQUEST','sfLogger','toString','extractComponentIdsFromGraphsResponse','commitId','have\x20to\x20proceed\x20%d\x20composite\x20requests\x20(branch)','reduce','delete','9iIdzIg','4440530kdKibO','SalesforceCompositeService','floor','have\x20to\x20proceed\x20%d\x20composite\x20requests\x20(repository)','SalesforceCommitsManager','componentId'];a227_0x2be0=function(){return _0xca29fe;};return a227_0x2be0();}a227_0x3a9fb0();'use strict';var __importDefault=this&&this[a227_0x2ca48a(0x169)]||function(_0x3f8e90){const _0x7599bf=a227_0x2ca48a;return _0x3f8e90&&_0x3f8e90[_0x7599bf(0x136)]?_0x3f8e90:{'default':_0x3f8e90};};function a227_0xd20e(_0x39859d,_0x19fb1a){const _0x5a1996=a227_0x2be0();return a227_0xd20e=function(_0x3a9fb0,_0x3206d8){_0x3a9fb0=_0x3a9fb0-0x124;let _0x2be01f=_0x5a1996[_0x3a9fb0];return _0x2be01f;},a227_0xd20e(_0x39859d,_0x19fb1a);}Object[a227_0x2ca48a(0x125)](exports,'__esModule',{'value':!![]}),exports[a227_0x2ca48a(0x151)]=void 0x0;const core_1=require(a227_0x2ca48a(0x16e)),typedi_1=__importDefault(require(a227_0x2ca48a(0x135))),constants_1=require(a227_0x2ca48a(0x142)),utils_1=require('../../../shared/utils'),salesforce_error_1=require(a227_0x2ca48a(0x143)),composite_utils_1=require('../utils/composite.utils'),salesforce_components_manager_service_1=require(a227_0x2ca48a(0x13d)),salesforce_composite_service_1=require('./salesforce-composite.service');class SalesforceCommitsManager{constructor(_0x2c1b67){const _0x5bee8f=a227_0x2ca48a;this[_0x5bee8f(0x134)]=_0x2c1b67,this[_0x5bee8f(0x141)]=0x3,this[_0x5bee8f(0x163)]=new core_1[(_0x5bee8f(0x126))](SalesforceCommitsManager['name']),this[_0x5bee8f(0x145)]=this[_0x5bee8f(0x134)]['logger'],this[_0x5bee8f(0x166)]=typedi_1[_0x5bee8f(0x132)][_0x5bee8f(0x165)](salesforce_composite_service_1[_0x5bee8f(0x14e)]),this[_0x5bee8f(0x137)]=[];}async['proceedChunksToUpload'](_0x5930c8,_0x3dcfd2=![]){const _0x55cd88=a227_0x2ca48a,_0x4dabf1=async _0x4711bb=>{const _0x349e4d=a227_0xd20e;await this[_0x349e4d(0x163)]['log'](_0x349e4d(0x16f)+_0x4711bb[_0x349e4d(0x14a)]((_0x84ca4,_0x513f93)=>_0x84ca4+_0x513f93[_0x349e4d(0x157)],0x0)+_0x349e4d(0x15b));const _0x167fb8=_0x4711bb[_0x349e4d(0x12d)]((_0x17e70c,_0x11acc5)=>({'graphId':'graph'+_0x11acc5,'compositeRequest':_0x17e70c})),_0x13db65=await this['composite'][_0x349e4d(0x159)](_0x167fb8);if(_0x3dcfd2){const _0x191ad0=(0x0,composite_utils_1[_0x349e4d(0x147)])(_0x13db65);for(const {id:_0x2f4e2a,ref:_0x4ab493}of _0x191ad0){const _0x1af0fd=this[_0x349e4d(0x137)][_0x349e4d(0x129)](_0x4a077d=>_0x4a077d[_0x349e4d(0x170)]===_0x4ab493);_0x1af0fd&&(_0x1af0fd[_0x349e4d(0x152)]=_0x2f4e2a);}}},_0x15b80e=0x1e8480;let _0x25b993=0x0,_0xd87431=[];for(const _0x562755 of _0x5930c8){const _0x2a2136=_0x562755[_0x55cd88(0x14a)]((_0x1a9736,_0x37c707)=>{const _0x4c1c38=_0x55cd88,_0x4e9b07=JSON[_0x4c1c38(0x156)](_0x37c707)['length']*0x2;return _0x1a9736+_0x4e9b07;},0x0);if(_0x2a2136>constants_1['SALESFORCE_MAX_REQUEST_SIZE_BYTES'])throw new salesforce_error_1[(_0x55cd88(0x12e))](_0x55cd88(0x155)+constants_1['SALESFORCE_MAX_REQUEST_SIZE_BYTES']+_0x55cd88(0x16a)+_0x2a2136);_0x25b993+_0x2a2136>constants_1['SALESFORCE_MAX_REQUEST_SIZE_BYTES']-_0x15b80e&&(await _0x4dabf1(_0xd87431),_0xd87431=[],_0x25b993=0x0),_0x25b993+=_0x2a2136,_0xd87431['push'](_0x562755);}_0xd87431[_0x55cd88(0x157)]&&await _0x4dabf1(_0xd87431);}async[a227_0x2ca48a(0x13c)](_0x5a81b1,_0x5aeb61=![]){const _0x32f188=a227_0x2ca48a,_0x34fc84=(this[_0x32f188(0x141)]+ +_0x5aeb61)*0x3,_0x17a212=(0x0,utils_1[_0x32f188(0x13e)])(_0x5a81b1,_0x34fc84);try{while(_0x17a212['length']){const _0x2ad163=_0x17a212['splice'](0x0,Math[_0x32f188(0x14f)](constants_1[_0x32f188(0x144)]/_0x34fc84));await this[_0x32f188(0x154)](_0x2ad163,_0x5aeb61);}}catch(_0x2f73cf){this['logger'][_0x32f188(0x12b)](_0x2f73cf instanceof salesforce_error_1[_0x32f188(0x12e)]?JSON[_0x32f188(0x156)](_0x2f73cf['toJSON'](),null,0x2):_0x2f73cf),this[_0x32f188(0x145)][_0x32f188(0x15c)](_0x2f73cf instanceof salesforce_error_1[_0x32f188(0x12e)]?JSON[_0x32f188(0x156)](_0x2f73cf['toJSON'](),null,0x2):_0x2f73cf[_0x32f188(0x146)]());throw _0x2f73cf;}}async[a227_0x2ca48a(0x160)](_0x237d5e){const _0xe7fdfe=a227_0x2ca48a;for(const _0x3219cd of _0x237d5e){if(!_0x3219cd[_0xe7fdfe(0x16d)]['length']&&!_0x3219cd[_0xe7fdfe(0x153)][_0xe7fdfe(0x157)]&&!_0x3219cd[_0xe7fdfe(0x168)]['length'])continue;const _0x3b5468=[],_0x5ac805=[],_0x27e40f=new salesforce_components_manager_service_1[(_0xe7fdfe(0x13b))](this[_0xe7fdfe(0x134)][_0xe7fdfe(0x124)],this[_0xe7fdfe(0x134)]['branchId'],_0x3219cd[_0xe7fdfe(0x15f)],this['options'][_0xe7fdfe(0x16c)],this[_0xe7fdfe(0x137)]);_0x3b5468[_0xe7fdfe(0x167)](...await _0x27e40f['insert'](_0x3219cd['inserted'],this['options'][_0xe7fdfe(0x148)])),_0x3b5468[_0xe7fdfe(0x167)](...await _0x27e40f['update'](_0x3219cd[_0xe7fdfe(0x153)],this[_0xe7fdfe(0x134)]['commitId'])),_0x5ac805[_0xe7fdfe(0x167)](await _0x27e40f[_0xe7fdfe(0x14b)](_0x3219cd[_0xe7fdfe(0x168)],!![])),this['proceededComponentsMeta']=_0x27e40f['getProceededComponentsMeta'](),await this[_0xe7fdfe(0x13c)](_0x3b5468,!![]);for(const _0x39253e of _0x5ac805){_0x39253e[_0xe7fdfe(0x131)][_0xe7fdfe(0x157)]&&await this[_0xe7fdfe(0x13c)](_0x39253e[_0xe7fdfe(0x131)],!![]),_0x39253e[_0xe7fdfe(0x15e)][_0xe7fdfe(0x157)]&&await this[_0xe7fdfe(0x13c)](_0x39253e[_0xe7fdfe(0x15e)],!![]),_0x39253e[_0xe7fdfe(0x16b)]['length']&&await this[_0xe7fdfe(0x13c)](_0x39253e[_0xe7fdfe(0x16b)],!![]);}this[_0xe7fdfe(0x163)]['log'](_0xe7fdfe(0x150),_0x3b5468['length']);}}async[a227_0x2ca48a(0x161)](_0x41f762){const _0x47b813=a227_0x2ca48a,_0xcbf2fc=[],_0x25a719=[];for(const _0x39907a of _0x41f762){if(!_0x39907a[_0x47b813(0x16d)][_0x47b813(0x157)]&&!_0x39907a[_0x47b813(0x153)]['length']&&!_0x39907a[_0x47b813(0x168)]['length'])continue;const _0xded963=new salesforce_components_manager_service_1[(_0x47b813(0x13b))](this['options'][_0x47b813(0x124)],this[_0x47b813(0x134)]['branchId'],_0x39907a[_0x47b813(0x15f)],this[_0x47b813(0x134)][_0x47b813(0x16c)],[]);_0xcbf2fc[_0x47b813(0x167)](...await _0xded963[_0x47b813(0x13f)](_0x39907a[_0x47b813(0x16d)])),_0xcbf2fc[_0x47b813(0x167)](...await _0xded963[_0x47b813(0x15d)](_0x39907a['modified'])),_0x25a719['push'](await _0xded963['delete'](_0x39907a[_0x47b813(0x168)]));}this[_0x47b813(0x163)][_0x47b813(0x15c)](_0x47b813(0x149),_0xcbf2fc[_0x47b813(0x157)]),await this[_0x47b813(0x13c)](_0xcbf2fc);const _0xf139bc=_0x25a719['reduce']((_0x294ab4,_0x6c0c2a)=>({'manifests':[..._0x294ab4[_0x47b813(0x131)],..._0x6c0c2a[_0x47b813(0x131)]],'componentsToDelete':[..._0x294ab4[_0x47b813(0x16b)],..._0x6c0c2a[_0x47b813(0x16b)]],'componentsToUpdate':[..._0x294ab4[_0x47b813(0x15e)],..._0x6c0c2a[_0x47b813(0x15e)]]}),{'manifests':[],'componentsToDelete':[],'componentsToUpdate':[]});_0xf139bc['manifests'][_0x47b813(0x157)]&&await this['proceedRequests'](_0xf139bc[_0x47b813(0x131)],!![]),_0xf139bc[_0x47b813(0x15e)]['length']&&await this[_0x47b813(0x13c)](_0xf139bc['componentsToUpdate'],!![]),_0xf139bc[_0x47b813(0x16b)][_0x47b813(0x157)]&&await this[_0x47b813(0x13c)](_0xf139bc['componentsToDelete'],!![]);}async[a227_0x2ca48a(0x133)](_0x37b143){const _0x300a4b=a227_0x2ca48a;this[_0x300a4b(0x134)][_0x300a4b(0x12f)]?await this['proceedCommitsToBranch'](_0x37b143):await this[_0x300a4b(0x160)](_0x37b143);}}exports['SalesforceCommitsManager']=SalesforceCommitsManager;