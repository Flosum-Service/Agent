const a349_0x190a64=a349_0x3fe0;function a349_0xb16b(){const _0x5b227e=['updateTrackingSetting','parse','./classes/source-member.handler','targetOrgId','flosumOrgCredentials','status','utf-8','3403323mxtAKn','initManifest','targetOrgCredentials','initMetadataLogger','apiVersion','Tracking\x20setting\x20updated','fs/promises','MetadataLogger','catch','init','then','jobStorePath','IN_PROGRESS','constructor','execute','../../shared/managers/auth.manager','slice','LogStatus','targetInstance','10821MKgFul','Tracking\x20components\x20job\x20has\x20been\x20started\x20with\x20id:\x20','metadataTypes','3826500NAnspD','11kYTzXi','EXCEPTION','3310020ebASqL','join','1896UOiucg','argv','flosumInstance','Last_Start_Retrieval__c','../../../constants/job','MetadataRetriever','metadataLogger','isProcessed','readFile','@flosum/salesforce','19442saGPLK','Is_Processed__c','startDate','log','1240mzHWaP','AxiosInstanceUtils','Job\x20Error:\x20','update','initInstances','lastRetrieveDate','388jBZkyX','timeZone','./classes/metadata-logger','__importDefault','success','Logger','RestSimpleDeployData','getTime','defineProperty','./classes/logger/logger','../../../core','../../../constants','21GvHycM','(((.+)+)+)+$','message','logger','13YjGXOX','trackingSettingId','search','Tracking\x20components\x20job\x20has\x20been\x20failed','exit','FLOSUM_NAMESPACE','ComponentsDeployer','SourceMemberHandler','createTrackingSettingRecord','getSourceMemberHandler','./classes/components.deployer','getComponentsDeployer','getMetadataRetriever','__esModule','9OCLqZE','./classes/metadata.retriever','getSourceMemberRetriever','jobId','create','352424AzRVsh','metadataLogId','default','toString','error'];a349_0xb16b=function(){return _0x5b227e;};return a349_0xb16b();}(function(_0x41dbd4,_0x512cbc){const _0xb8540d=a349_0x3fe0,_0x5c8f7c=_0x41dbd4();while(!![]){try{const _0x2974ac=parseInt(_0xb8540d(0x217))/0x1*(-parseInt(_0xb8540d(0x1ef))/0x2)+-parseInt(_0xb8540d(0x1dd))/0x3*(-parseInt(_0xb8540d(0x1f9))/0x4)+-parseInt(_0xb8540d(0x1f3))/0x5*(-parseInt(_0xb8540d(0x1e5))/0x6)+-parseInt(_0xb8540d(0x205))/0x7*(-parseInt(_0xb8540d(0x21c))/0x8)+parseInt(_0xb8540d(0x1ca))/0x9+-parseInt(_0xb8540d(0x1e3))/0xa*(parseInt(_0xb8540d(0x1e1))/0xb)+parseInt(_0xb8540d(0x1e0))/0xc*(-parseInt(_0xb8540d(0x209))/0xd);if(_0x2974ac===_0x512cbc)break;else _0x5c8f7c['push'](_0x5c8f7c['shift']());}catch(_0x910b12){_0x5c8f7c['push'](_0x5c8f7c['shift']());}}}(a349_0xb16b,0x311e3));const a349_0x527e92=(function(){let _0xbb721e=!![];return function(_0x419fe8,_0x4d0a07){const _0x1076c3=_0xbb721e?function(){if(_0x4d0a07){const _0x15f486=_0x4d0a07['apply'](_0x419fe8,arguments);return _0x4d0a07=null,_0x15f486;}}:function(){};return _0xbb721e=![],_0x1076c3;};}()),a349_0x12b80e=a349_0x527e92(this,function(){const _0x8f0af9=a349_0x3fe0;return a349_0x12b80e['toString']()[_0x8f0af9(0x20b)](_0x8f0af9(0x206))[_0x8f0af9(0x21f)]()[_0x8f0af9(0x1d7)](a349_0x12b80e)[_0x8f0af9(0x20b)](_0x8f0af9(0x206));});a349_0x12b80e();'use strict';var __importDefault=this&&this[a349_0x190a64(0x1fc)]||function(_0x515dfe){const _0xf7d058=a349_0x190a64;return _0x515dfe&&_0x515dfe[_0xf7d058(0x216)]?_0x515dfe:{'default':_0x515dfe};};Object[a349_0x190a64(0x201)](exports,a349_0x190a64(0x216),{'value':!![]}),exports['Job']=void 0x0;const minimist_1=__importDefault(require('minimist')),core_1=require(a349_0x190a64(0x203)),salesforce_1=require(a349_0x190a64(0x1ee)),auth_manager_1=require(a349_0x190a64(0x1d9)),logger_1=require(a349_0x190a64(0x202)),promises_1=require('stream/promises'),promises_2=require(a349_0x190a64(0x1d0)),path_1=__importDefault(require('path')),metadata_retriever_1=require(a349_0x190a64(0x218)),components_deployer_1=require(a349_0x190a64(0x213)),source_member_retriever_1=require('./classes/source-member.retriever'),source_member_handler_1=require(a349_0x190a64(0x223)),metadata_logger_1=require(a349_0x190a64(0x1fb)),job_1=require(a349_0x190a64(0x1e9)),constants_1=require(a349_0x190a64(0x204)),constants_2=require('../constants'),{jobId,jobStorePath}=(0x0,minimist_1[a349_0x190a64(0x21e)])(process[a349_0x190a64(0x1e6)][a349_0x190a64(0x1da)](0x2)),systemLogger=new core_1[(a349_0x190a64(0x1fe))](jobId);class Job{constructor(){this['jobStorePath']=jobStorePath,this['jobId']=jobId;}async[a349_0x190a64(0x1cb)](){const _0x5a16e0=a349_0x190a64,_0x33e696=path_1[_0x5a16e0(0x21e)][_0x5a16e0(0x1e4)](this[_0x5a16e0(0x1d5)],job_1['MANIFEST_FILENAME']),_0x29fc0d=await(0x0,promises_2[_0x5a16e0(0x1ed)])(_0x33e696,{'encoding':_0x5a16e0(0x227)})[_0x5a16e0(0x1d4)](JSON[_0x5a16e0(0x222)])[_0x5a16e0(0x1d4)](({details:_0x1199ef})=>_0x1199ef);await(0x0,promises_2['rm'])(_0x33e696,{'recursive':!![],'force':!![]}),this['apiVersion']=_0x29fc0d[_0x5a16e0(0x1ce)],this[_0x5a16e0(0x225)]=_0x29fc0d['flosumOrgCredentials'],this[_0x5a16e0(0x1cc)]=_0x29fc0d['targetOrgCredentials'],this[_0x5a16e0(0x224)]=_0x29fc0d[_0x5a16e0(0x224)],this[_0x5a16e0(0x20a)]=_0x29fc0d[_0x5a16e0(0x20a)],this[_0x5a16e0(0x1f8)]=_0x29fc0d[_0x5a16e0(0x1f8)],this[_0x5a16e0(0x1df)]=_0x29fc0d[_0x5a16e0(0x1df)],this['timeZone']=_0x29fc0d[_0x5a16e0(0x1fa)];}async['initInstances'](){const _0xc9123=a349_0x190a64;this[_0xc9123(0x1e7)]=await salesforce_1[_0xc9123(0x1f4)][_0xc9123(0x21b)](new auth_manager_1['AuthManager'](this[_0xc9123(0x225)]),[],{'maxContentLength':Infinity,'maxBodyLength':Infinity}),this[_0xc9123(0x1dc)]=await salesforce_1[_0xc9123(0x1f4)][_0xc9123(0x21b)](new auth_manager_1['AuthManager'](this[_0xc9123(0x1cc)]),[],{'maxContentLength':Infinity,'maxBodyLength':Infinity});}async[a349_0x190a64(0x1cd)](){const _0x1f9f0f=a349_0x190a64;this[_0x1f9f0f(0x1eb)]=new metadata_logger_1[(_0x1f9f0f(0x1d1))]({'apiVersion':this[_0x1f9f0f(0x1ce)],'instance':this[_0x1f9f0f(0x1e7)],'targetOrgId':this[_0x1f9f0f(0x224)],'trackingSettingId':this['trackingSettingId'],'startDate':this[_0x1f9f0f(0x1f1)]}),this['metadataLogId']=await this[_0x1f9f0f(0x1eb)][_0x1f9f0f(0x1d3)]();}['initLogger'](){const _0x4241d9=a349_0x190a64;this[_0x4241d9(0x208)]=new logger_1[(_0x4241d9(0x1fe))]({'systemLogger':systemLogger,'apiVersion':this[_0x4241d9(0x1ce)],'instance':this[_0x4241d9(0x1e7)],'metadataLogId':this[_0x4241d9(0x21d)],'timeZone':this[_0x4241d9(0x1fa)]});}[a349_0x190a64(0x219)](){const _0x1f1b26=a349_0x190a64;return new source_member_retriever_1['SourceMemberRetriever']({'apiVersion':this['apiVersion'],'instance':this[_0x1f1b26(0x1dc)],'logger':this[_0x1f1b26(0x208)],'lastRetrieveDate':this[_0x1f1b26(0x1f8)],'currentRetrieveDate':this[_0x1f1b26(0x1f1)],'metadataTypes':this['metadataTypes']});}[a349_0x190a64(0x212)](){const _0x136a18=a349_0x190a64;return new source_member_handler_1[(_0x136a18(0x210))]({'instance':this[_0x136a18(0x1e7)],'apiVersion':this['apiVersion'],'logger':this[_0x136a18(0x208)],'targetOrgId':this[_0x136a18(0x224)]});}[a349_0x190a64(0x215)](){const _0x45a3a7=a349_0x190a64;return new metadata_retriever_1[(_0x45a3a7(0x1ea))]({'instance':this['targetInstance'],'apiVersion':this['apiVersion'],'logger':this[_0x45a3a7(0x208)],'metadataTypes':this['metadataTypes']});}[a349_0x190a64(0x214)](){const _0xe8fc8c=a349_0x190a64;return new components_deployer_1[(_0xe8fc8c(0x20f))]({'instance':this[_0xe8fc8c(0x1e7)],'logger':this[_0xe8fc8c(0x208)],'apiVersion':this[_0xe8fc8c(0x1ce)],'targetOrgId':this[_0xe8fc8c(0x224)],'trackingSettingId':this[_0xe8fc8c(0x20a)]});}[a349_0x190a64(0x211)](){const _0x379f9b=a349_0x190a64;return{'attributes':{'type':constants_1[_0x379f9b(0x20e)]+'Tracking_Setting__c'},'Id':this[_0x379f9b(0x20a)],[constants_1[_0x379f9b(0x20e)]+_0x379f9b(0x1f0)]:this[_0x379f9b(0x1ec)],[constants_1[_0x379f9b(0x20e)]+_0x379f9b(0x1e8)]:this['startDate']};}async['updateTrackingSetting'](){const _0x369e58=a349_0x190a64,_0x3e3813=this[_0x369e58(0x211)](),_0xab60b8=new salesforce_1[(_0x369e58(0x1ff))]({'instance':this[_0x369e58(0x1e7)],'objectName':constants_1['FLOSUM_NAMESPACE']+'Tracking_Setting__c','api':this[_0x369e58(0x1ce)],'allOrNone':![],'externalIdField':'Id'}),_0x264984=await _0xab60b8[_0x369e58(0x1d8)]({'records':[_0x3e3813]}),_0x3d0bd4=_0x264984['at'](0x0);(_0x3d0bd4===null||_0x3d0bd4===void 0x0?void 0x0:_0x3d0bd4[_0x369e58(0x1fd)])?this[_0x369e58(0x208)][_0x369e58(0x1f2)](_0x369e58(0x1cf)):this[_0x369e58(0x208)][_0x369e58(0x1f2)]('Tracking\x20setting\x20not\x20updated\x20\x0a\x20'+(_0x3d0bd4===null||_0x3d0bd4===void 0x0?void 0x0:_0x3d0bd4[_0x369e58(0x220)]));}async['execute'](){const _0x38432a=a349_0x190a64;await this[_0x38432a(0x1cb)](),this[_0x38432a(0x1f1)]=new Date()[_0x38432a(0x200)]();try{await this[_0x38432a(0x1f7)](),await this[_0x38432a(0x1cd)](),this['initLogger'](),this[_0x38432a(0x208)][_0x38432a(0x1f2)](_0x38432a(0x1de)+this[_0x38432a(0x21a)]),this[_0x38432a(0x1eb)][_0x38432a(0x226)]=constants_2['LogStatus'][_0x38432a(0x1d6)],this[_0x38432a(0x1ec)]=!![],await this['updateTrackingSetting'](),await this[_0x38432a(0x1eb)][_0x38432a(0x1f6)](),await this[_0x38432a(0x208)]['update']();const _0x410541=this[_0x38432a(0x219)](),_0x45564a=this[_0x38432a(0x212)](),_0x1abd3e=this[_0x38432a(0x215)](),_0x4e5138=this[_0x38432a(0x214)]();await(0x0,promises_1['pipeline'])(_0x410541,_0x45564a,_0x1abd3e,_0x4e5138),this[_0x38432a(0x208)][_0x38432a(0x1f2)]('Tracking\x20components\x20job\x20has\x20been\x20completed'),this[_0x38432a(0x1eb)][_0x38432a(0x226)]=constants_2[_0x38432a(0x1db)]['COMPLETED'];}catch(_0x4be1eb){this[_0x38432a(0x208)][_0x38432a(0x220)](_0x38432a(0x20c)),this[_0x38432a(0x208)][_0x38432a(0x220)](_0x4be1eb[_0x38432a(0x207)]),this[_0x38432a(0x1eb)][_0x38432a(0x226)]=constants_2[_0x38432a(0x1db)][_0x38432a(0x1e2)];}finally{this[_0x38432a(0x1ec)]=![],await this[_0x38432a(0x221)](),await this[_0x38432a(0x208)][_0x38432a(0x1f6)](),await this[_0x38432a(0x1eb)][_0x38432a(0x1f6)]();}}}function a349_0x3fe0(_0x5096bf,_0x6cde5c){const _0x30097a=a349_0xb16b();return a349_0x3fe0=function(_0x12b80e,_0x527e92){_0x12b80e=_0x12b80e-0x1ca;let _0xb16b8e=_0x30097a[_0x12b80e];return _0xb16b8e;},a349_0x3fe0(_0x5096bf,_0x6cde5c);}exports['Job']=Job,new Job()[a349_0x190a64(0x1d8)]()[a349_0x190a64(0x1d4)](()=>process[a349_0x190a64(0x20d)](0x0))[a349_0x190a64(0x1d2)](_0x51c7a1=>{const _0x4dd6c1=a349_0x190a64;systemLogger[_0x4dd6c1(0x220)](_0x4dd6c1(0x1f5)+_0x51c7a1['message']),process[_0x4dd6c1(0x20d)](0x1);});