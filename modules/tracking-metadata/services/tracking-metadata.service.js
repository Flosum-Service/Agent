const a300_0x8a4993=a300_0xd6e2;function a300_0xd6e2(_0x26d29f,_0x3c3e88){const _0x209558=a300_0x2627();return a300_0xd6e2=function(_0x1f2b05,_0x11ad1c){_0x1f2b05=_0x1f2b05-0xa3;let _0x262736=_0x209558[_0x1f2b05];return _0x262736;},a300_0xd6e2(_0x26d29f,_0x3c3e88);}(function(_0x2f919b,_0x3781a0){const _0x937072=a300_0xd6e2,_0x4f4619=_0x2f919b();while(!![]){try{const _0x4c25e=-parseInt(_0x937072(0xba))/0x1+parseInt(_0x937072(0xb1))/0x2+-parseInt(_0x937072(0xa6))/0x3*(parseInt(_0x937072(0xc0))/0x4)+parseInt(_0x937072(0xa7))/0x5*(-parseInt(_0x937072(0xb4))/0x6)+parseInt(_0x937072(0xb7))/0x7*(-parseInt(_0x937072(0xbf))/0x8)+-parseInt(_0x937072(0xb0))/0x9*(parseInt(_0x937072(0xad))/0xa)+parseInt(_0x937072(0xc3))/0xb;if(_0x4c25e===_0x3781a0)break;else _0x4f4619['push'](_0x4f4619['shift']());}catch(_0xd88472){_0x4f4619['push'](_0x4f4619['shift']());}}}(a300_0x2627,0x50d67));const a300_0x11ad1c=(function(){let _0x9e93ec=!![];return function(_0x415a2a,_0x548249){const _0x1f9875=_0x9e93ec?function(){const _0x56c8ba=a300_0xd6e2;if(_0x548249){const _0x15f3c0=_0x548249[_0x56c8ba(0xbe)](_0x415a2a,arguments);return _0x548249=null,_0x15f3c0;}}:function(){};return _0x9e93ec=![],_0x1f9875;};}()),a300_0x1f2b05=a300_0x11ad1c(this,function(){const _0x123862=a300_0xd6e2;return a300_0x1f2b05[_0x123862(0xaf)]()['search'](_0x123862(0xb9))[_0x123862(0xaf)]()[_0x123862(0xbb)](a300_0x1f2b05)[_0x123862(0xb6)](_0x123862(0xb9));});a300_0x1f2b05();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x4ddf7d){return _0x4ddf7d&&_0x4ddf7d['__esModule']?_0x4ddf7d:{'default':_0x4ddf7d};};Object['defineProperty'](exports,'__esModule',{'value':!![]});function a300_0x2627(){const _0x28e672=['runJob','../../shared/utils/job.utils','writeFile','trackingMetadataFolder','../../../core','stringify','../../../configs/path','117114GSkKsU','5BrOJOX','join','fs/promises','generateJobId','default','createManifest','290jMxpgJ','../constants','toString','151479kqlEfJ','907520uHyjKK','catch','Logger','553794GWNERp','dataPath','search','973yQKfGf','createJob','(((.+)+)+)+$','415251IdsvIK','constructor','getManifestPath','../../shared/utils/fs.utils','apply','10112yvxClk','32Tlwmbb','../../../constants/job','MANIFEST_FILENAME','14971000szdUBI','makeDir'];a300_0x2627=function(){return _0x28e672;};return a300_0x2627();}const job_utils_1=__importDefault(require(a300_0x8a4993(0xc6))),path_1=__importDefault(require('path')),fs_utils_1=require(a300_0x8a4993(0xbd)),job_1=require(a300_0x8a4993(0xc1)),path_2=require(a300_0x8a4993(0xa5)),constants_1=require(a300_0x8a4993(0xae)),promises_1=require(a300_0x8a4993(0xa9)),core_1=require(a300_0x8a4993(0xa3));class TrackingMetadataService{static async[a300_0x8a4993(0xb8)](_0x48dd55){const _0x36cbc6=a300_0x8a4993,_0x324c66=job_utils_1[_0x36cbc6(0xab)][_0x36cbc6(0xaa)](),_0x2e7387=path_1['default']['join'](TrackingMetadataService[_0x36cbc6(0xc8)],_0x324c66);await(0x0,fs_utils_1[_0x36cbc6(0xc4)])(_0x2e7387),await this[_0x36cbc6(0xac)](_0x2e7387,_0x48dd55);const _0x2de641=path_1[_0x36cbc6(0xab)]['join'](__dirname,job_1['JOB_PATH']),_0xc09890=new core_1[(_0x36cbc6(0xb3))](_0x324c66);return job_utils_1[_0x36cbc6(0xab)][_0x36cbc6(0xc5)](_0x2de641,{'jobStorePath':_0x2e7387,'jobId':_0x324c66})[_0x36cbc6(0xb2)](async _0x1cc628=>{_0xc09890['error'](_0x1cc628);}),{'jobId':_0x324c66};}static async['createManifest'](_0x250c18,_0x45a0cb){const _0x1f8182=a300_0x8a4993,_0x1b1e2f=this['getManifestPath'](_0x250c18);return(0x0,promises_1[_0x1f8182(0xc7)])(_0x1b1e2f,JSON[_0x1f8182(0xa4)]({'details':_0x45a0cb}));}static[a300_0x8a4993(0xbc)](_0x3f7035){const _0x170410=a300_0x8a4993;return path_1['default'][_0x170410(0xa8)](_0x3f7035,job_1[_0x170410(0xc2)]);}}exports[a300_0x8a4993(0xab)]=TrackingMetadataService,TrackingMetadataService[a300_0x8a4993(0xc8)]=path_1[a300_0x8a4993(0xab)][a300_0x8a4993(0xa8)](path_2[a300_0x8a4993(0xb5)],constants_1['TRACKING_METADATA_FOLDER_NAME']);