const a194_0x1d756f=a194_0x2f7c;(function(_0x2f2fd5,_0x4a634d){const _0x238a4b=a194_0x2f7c,_0x389443=_0x2f2fd5();while(!![]){try{const _0x574f54=-parseInt(_0x238a4b(0x231))/0x1+parseInt(_0x238a4b(0x1d8))/0x2*(parseInt(_0x238a4b(0x1e6))/0x3)+parseInt(_0x238a4b(0x1f1))/0x4*(-parseInt(_0x238a4b(0x1ee))/0x5)+-parseInt(_0x238a4b(0x1ef))/0x6*(parseInt(_0x238a4b(0x22a))/0x7)+parseInt(_0x238a4b(0x22b))/0x8*(-parseInt(_0x238a4b(0x1ff))/0x9)+-parseInt(_0x238a4b(0x212))/0xa+parseInt(_0x238a4b(0x206))/0xb;if(_0x574f54===_0x4a634d)break;else _0x389443['push'](_0x389443['shift']());}catch(_0x3fd472){_0x389443['push'](_0x389443['shift']());}}}(a194_0x3c9e,0xf1acd));const a194_0x3abd8=(function(){let _0x50ad66=!![];return function(_0x187a90,_0xfc30bd){const _0x472e48=_0x50ad66?function(){if(_0xfc30bd){const _0x93ad26=_0xfc30bd['apply'](_0x187a90,arguments);return _0xfc30bd=null,_0x93ad26;}}:function(){};return _0x50ad66=![],_0x472e48;};}()),a194_0x2d6fa4=a194_0x3abd8(this,function(){const _0x3dd0ce=a194_0x2f7c;return a194_0x2d6fa4[_0x3dd0ce(0x1f3)]()[_0x3dd0ce(0x1fa)](_0x3dd0ce(0x1f2))['toString']()['constructor'](a194_0x2d6fa4)['search'](_0x3dd0ce(0x1f2));});function a194_0x3c9e(){const _0x42da6d=['version','Deletion_By_Agent__c','.id}','username','Changed_By__c','FLOSUM_NAMESPACE','componentsToDelete','Branch__c','componentId','337569ZykPaa','FLOSUM_ATTACHMENT','FLOSUM_COMMIT_MANIFEST','generateAsync','Component__c','Component_Name__c','Could\x20not\x20proceed\x20component\x20','proceedComponentMeta','1680OFtRwg','1950LufgBE','prepareComponentRecord','672EKgQJY','(((.+)+)+)+$','toString','FLOSUM_COMPONENT_HISTORY','Repository','../utils/flosum-naming.utils','gitSync','push','logger','search','FLOSUM_GIT_NAMESPACE','typedi','prepareComponentHistoryRecord','fetchCommitManifestsByComponentIds','135JHObiH','../utils/composite.utils','Last_Modified_Date__c','../../parsers/utils/zip','Source__c','Committed_On__c','__importDefault','24754620qtFoch','SalesforceComponentsManager','files','RecordTypeId','__esModule','toISOString','application/zip','SalesforceGitSyncService','request','find','Body','FLOSUM_COMPONENT','3824830nHQbYy','defineProperty','crc','createPostRequest','Last_Updated_By__c','delete','prepareComponentAttachmentRecord','ParentId','filePath','branchId','update','Component_Type__c','Zip','./salesforce-git-sync.service','body','proceededComponentsMeta','ContentType','repositoryId','Last_Modified_By__c','Branch','File_Name__c','reference','SalesforceError','Logger','12502SzHOad','184776mTiUbs','map','../../../../core','createZip','base64','CRC32__c','7206XtAGeT','default','Description','recordTypes','type','Repository__c','Version__c','../../../../constants','Changed_On__c','componentType','name','2WuyIAV','keys','DEFLATE','insert','prepareCommitManifest'];a194_0x3c9e=function(){return _0x42da6d;};return a194_0x3c9e();}function a194_0x2f7c(_0x225779,_0x4acb83){const _0x316908=a194_0x3c9e();return a194_0x2f7c=function(_0x2d6fa4,_0x3abd8){_0x2d6fa4=_0x2d6fa4-0x1d4;let _0x3c9e75=_0x316908[_0x2d6fa4];return _0x3c9e75;},a194_0x2f7c(_0x225779,_0x4acb83);}a194_0x2d6fa4();'use strict';var __importDefault=this&&this[a194_0x1d756f(0x205)]||function(_0x193f7e){const _0x34c445=a194_0x1d756f;return _0x193f7e&&_0x193f7e[_0x34c445(0x20a)]?_0x193f7e:{'default':_0x193f7e};};Object[a194_0x1d756f(0x213)](exports,'__esModule',{'value':!![]}),exports[a194_0x1d756f(0x207)]=void 0x0;const constants_1=require(a194_0x1d756f(0x1d4)),core_1=require(a194_0x1d756f(0x22d)),zip_1=require(a194_0x1d756f(0x202)),typedi_1=__importDefault(require(a194_0x1d756f(0x1fc))),salesforce_error_1=require('../errors/salesforce.error'),composite_utils_1=require(a194_0x1d756f(0x200)),flosum_naming_utils_1=require(a194_0x1d756f(0x1f6)),salesforce_git_sync_service_1=require(a194_0x1d756f(0x21f));class SalesforceComponentsManager{constructor(_0x25dbde,_0x12a5e4,_0x3fc909,_0x1b22dc,_0x49978c){const _0x5ccd34=a194_0x1d756f;this[_0x5ccd34(0x223)]=_0x25dbde,this[_0x5ccd34(0x21b)]=_0x12a5e4,this[_0x5ccd34(0x1e0)]=_0x3fc909,this[_0x5ccd34(0x234)]=_0x1b22dc,this[_0x5ccd34(0x221)]=_0x49978c,this[_0x5ccd34(0x1f9)]=new core_1[(_0x5ccd34(0x229))](SalesforceComponentsManager[_0x5ccd34(0x1d7)]),this[_0x5ccd34(0x1f7)]=typedi_1[_0x5ccd34(0x232)]['get'](salesforce_git_sync_service_1[_0x5ccd34(0x20d)]);}['proceedComponentMeta'](_0x5c899d,_0x20df7b){const _0x161f28=a194_0x1d756f,_0x18c4ba=(0x0,flosum_naming_utils_1['extractFieldsFromRecord'])(_0x5c899d,[_0x161f28(0x21d),_0x161f28(0x1eb),_0x161f28(0x237)]);this[_0x161f28(0x221)][_0x161f28(0x1f8)]({'componentId':'','reference':_0x20df7b,'version':_0x18c4ba[_0x161f28(0x237)],'componentName':_0x18c4ba[_0x161f28(0x1eb)],'componentType':_0x18c4ba[_0x161f28(0x21d)]});}[a194_0x1d756f(0x1dc)](_0x53be4e,_0x5bd819){const _0x1aada1=a194_0x1d756f,{request:_0x32faed}=(0x0,composite_utils_1[_0x1aada1(0x215)])(constants_1[_0x1aada1(0x1e8)],{[constants_1[_0x1aada1(0x1e2)]+'Commit__c']:_0x53be4e,[constants_1[_0x1aada1(0x1e2)]+'Component_History__c']:_0x5bd819});return _0x32faed;}async[a194_0x1d756f(0x218)](_0x4cf911,_0x117c66){const _0x116fa7=a194_0x1d756f,_0x503cf6={},_0x56a03d=zip_1[_0x116fa7(0x21e)][_0x116fa7(0x22e)]();for(const _0x32c7e9 of Object[_0x116fa7(0x1d9)](_0x4cf911[_0x116fa7(0x208)])){_0x56a03d['file'](_0x32c7e9,_0x4cf911[_0x116fa7(0x208)][_0x32c7e9],{'createFolders':!![]});}return _0x503cf6[_0x116fa7(0x222)]=_0x116fa7(0x20c),_0x503cf6['Name']=_0x4cf911[_0x116fa7(0x235)],_0x503cf6[_0x116fa7(0x233)]=_0x4cf911[_0x116fa7(0x235)],_0x503cf6[_0x116fa7(0x219)]=_0x117c66,_0x503cf6[_0x116fa7(0x210)]=await _0x56a03d[_0x116fa7(0x1e9)]({'type':_0x116fa7(0x22f),'compression':_0x116fa7(0x1da),'compressionOptions':{'level':0x6}}),_0x503cf6;}['prepareComponentHistoryRecord'](_0x425e47,_0x19ccfa,_0x12bfb5){const _0xb51e30=a194_0x1d756f,_0x313df8=new Date()[_0xb51e30(0x20b)](),_0x22dec8={};return _0x22dec8[constants_1[_0xb51e30(0x1e2)]+_0xb51e30(0x1ea)]=_0x19ccfa,_0x22dec8[constants_1[_0xb51e30(0x1e2)]+_0xb51e30(0x230)]=_0x425e47[_0xb51e30(0x214)],_0x22dec8[constants_1[_0xb51e30(0x1e2)]+_0xb51e30(0x1d5)]=_0x313df8,_0x22dec8[constants_1[_0xb51e30(0x1e2)]+_0xb51e30(0x1e1)]=this['username'],_0x22dec8[constants_1[_0xb51e30(0x1e2)]+_0xb51e30(0x237)]=_0x12bfb5?_0x12bfb5+0x1:0x1,_0x22dec8[constants_1[_0xb51e30(0x1fb)]+'Is_From_Agent__c']=!![],_0x22dec8;}[a194_0x1d756f(0x1f0)](_0x857327,_0x5c2862){const _0x294905=a194_0x1d756f;var _0x510150,_0x5b9f34;const _0x59b890=new Date()[_0x294905(0x20b)](),_0x41e0f0={};return!_0x5c2862?(this[_0x294905(0x21b)]?(_0x41e0f0[constants_1[_0x294905(0x1e2)]+_0x294905(0x1e4)]=this[_0x294905(0x21b)],_0x41e0f0[constants_1[_0x294905(0x1e2)]+_0x294905(0x203)]='Branch',_0x41e0f0[_0x294905(0x209)]=(_0x510150=this[_0x294905(0x234)]['find'](_0x110ca8=>_0x110ca8[_0x294905(0x1d7)]===_0x294905(0x225)))===null||_0x510150===void 0x0?void 0x0:_0x510150['id']):(_0x41e0f0[constants_1[_0x294905(0x1e2)]+_0x294905(0x236)]=this[_0x294905(0x223)],_0x41e0f0[constants_1[_0x294905(0x1e2)]+_0x294905(0x203)]=_0x294905(0x1f5),_0x41e0f0[_0x294905(0x209)]=(_0x5b9f34=this['recordTypes']['find'](_0x494332=>_0x494332['name']===_0x294905(0x1f5)))===null||_0x5b9f34===void 0x0?void 0x0:_0x5b9f34['id']),_0x41e0f0[constants_1['FLOSUM_NAMESPACE']+_0x294905(0x237)]=0x1):_0x41e0f0[constants_1[_0x294905(0x1e2)]+_0x294905(0x237)]=_0x5c2862[_0x294905(0x1dd)]+0x1,_0x41e0f0[constants_1[_0x294905(0x1e2)]+_0x294905(0x21d)]=_0x857327[_0x294905(0x235)],_0x41e0f0[constants_1[_0x294905(0x1e2)]+_0x294905(0x1eb)]=_0x857327[_0x294905(0x1d7)],_0x41e0f0[constants_1[_0x294905(0x1e2)]+_0x294905(0x226)]=_0x857327[_0x294905(0x21a)],_0x41e0f0[constants_1[_0x294905(0x1e2)]+_0x294905(0x216)]=this['username'],_0x41e0f0[constants_1[_0x294905(0x1e2)]+_0x294905(0x224)]=this[_0x294905(0x1e0)],_0x41e0f0[constants_1['FLOSUM_NAMESPACE']+_0x294905(0x201)]=_0x59b890,_0x41e0f0[constants_1[_0x294905(0x1e2)]+_0x294905(0x204)]=_0x59b890,_0x41e0f0[constants_1[_0x294905(0x1e2)]+_0x294905(0x230)]=_0x857327[_0x294905(0x214)],_0x41e0f0;}['getProceededComponentsMeta'](){return this['proceededComponentsMeta'];}async[a194_0x1d756f(0x1db)](_0x1d4a6d,_0x21bc8e){const _0x27580c=a194_0x1d756f,_0x91412c=[];for(const _0x31f0f4 of _0x1d4a6d){const _0x5054cf=(0x0,composite_utils_1['createPostRequest'])(constants_1['FLOSUM_COMPONENT'],this['prepareComponentRecord'](_0x31f0f4)),_0x32a58f=(0x0,composite_utils_1[_0x27580c(0x215)])(constants_1['FLOSUM_COMPONENT_HISTORY'],this[_0x27580c(0x1fd)](_0x31f0f4,'@{'+_0x5054cf[_0x27580c(0x227)]+'.id}')),_0x1b1622=(0x0,composite_utils_1[_0x27580c(0x215)])(constants_1[_0x27580c(0x1e7)],await this[_0x27580c(0x218)](_0x31f0f4,'@{'+_0x32a58f['reference']+_0x27580c(0x1df)));this[_0x27580c(0x1ed)](_0x5054cf[_0x27580c(0x20e)][_0x27580c(0x220)],_0x5054cf[_0x27580c(0x227)]),_0x91412c[_0x27580c(0x1f8)](_0x5054cf[_0x27580c(0x20e)],_0x32a58f[_0x27580c(0x20e)],_0x1b1622[_0x27580c(0x20e)]),_0x21bc8e&&_0x91412c['push'](this[_0x27580c(0x1dc)](_0x21bc8e,'@{'+_0x32a58f[_0x27580c(0x227)]+'.id}'));}return _0x91412c;}async[a194_0x1d756f(0x21c)](_0x2379e5,_0x42c554=''){const _0x1bdf54=a194_0x1d756f,_0x392cd0=[];for(const {component:_0x494c11,meta:_0x32b981}of _0x2379e5){if(!_0x32b981['id']){const _0x1e8797=this[_0x1bdf54(0x221)][_0x1bdf54(0x20f)](_0x29db9e=>_0x29db9e['componentName']===_0x494c11[_0x1bdf54(0x1d7)]&&_0x29db9e[_0x1bdf54(0x1d6)]===_0x494c11[_0x1bdf54(0x235)]);if(!_0x1e8797)throw new salesforce_error_1[(_0x1bdf54(0x228))](new Error(_0x1bdf54(0x1ec)+_0x494c11[_0x1bdf54(0x1d7)]+'\x20['+_0x494c11[_0x1bdf54(0x235)]+']\x20-\x20meta\x20not\x20found'));_0x32b981['id']=_0x1e8797[_0x1bdf54(0x1e5)];}const _0x58fd09=(0x0,composite_utils_1['createPatchRequest'])(constants_1[_0x1bdf54(0x211)],_0x32b981['id'],this[_0x1bdf54(0x1f0)](_0x494c11,_0x32b981)),_0x3d1927=(0x0,composite_utils_1[_0x1bdf54(0x215)])(constants_1[_0x1bdf54(0x1f4)],this['prepareComponentHistoryRecord'](_0x494c11,_0x32b981['id'],_0x32b981[_0x1bdf54(0x1dd)])),_0x24b6d7=(0x0,composite_utils_1[_0x1bdf54(0x215)])(constants_1[_0x1bdf54(0x1e7)],await this['prepareComponentAttachmentRecord'](_0x494c11,'@{'+_0x3d1927[_0x1bdf54(0x227)]+_0x1bdf54(0x1df)));this[_0x1bdf54(0x1ed)](_0x58fd09[_0x1bdf54(0x20e)]['body'],_0x58fd09[_0x1bdf54(0x227)]),_0x392cd0[_0x1bdf54(0x1f8)](_0x58fd09[_0x1bdf54(0x20e)],_0x3d1927[_0x1bdf54(0x20e)],_0x24b6d7[_0x1bdf54(0x20e)]),_0x42c554&&_0x392cd0['push'](this[_0x1bdf54(0x1dc)](_0x42c554,'@{'+_0x3d1927[_0x1bdf54(0x227)]+_0x1bdf54(0x1df)));}return _0x392cd0;}async[a194_0x1d756f(0x217)](_0x564acb,_0x2f5bb7=![]){const _0x553813=a194_0x1d756f,_0x3c0e7a={'manifests':[],'componentsToDelete':[],'componentsToUpdate':[]},_0xfac126=[];for(const _0x4dea1b of _0x564acb){if(_0x4dea1b['id'])_0xfac126[_0x553813(0x1f8)](_0x4dea1b['id']);else{const _0x28acea=this[_0x553813(0x221)]['find'](_0x2cd66b=>_0x2cd66b['componentName']===_0x4dea1b[_0x553813(0x1d7)]&&_0x2cd66b[_0x553813(0x1d6)]===_0x4dea1b[_0x553813(0x235)]);if(!_0x28acea||!_0x28acea[_0x553813(0x1e5)])continue;_0xfac126[_0x553813(0x1f8)](_0x28acea[_0x553813(0x1e5)]);}}if(_0x2f5bb7){const _0x3bcd7b=await this[_0x553813(0x1f7)][_0x553813(0x1fe)](_0xfac126);_0x3c0e7a['manifests']=_0x3bcd7b[_0x553813(0x22c)](_0x554556=>(0x0,composite_utils_1['createDeleteRequest'])(constants_1[_0x553813(0x1e8)],_0x554556)['request']);}return _0x3c0e7a['componentsToUpdate']=_0xfac126[_0x553813(0x22c)](_0x13b817=>(0x0,composite_utils_1['createPatchRequest'])(constants_1[_0x553813(0x211)],_0x13b817,{[constants_1[_0x553813(0x1fb)]+_0x553813(0x1de)]:!![]})[_0x553813(0x20e)]),_0x3c0e7a[_0x553813(0x1e3)]=_0xfac126[_0x553813(0x22c)](_0x3eb64b=>(0x0,composite_utils_1['createDeleteRequest'])(constants_1[_0x553813(0x211)],_0x3eb64b)['request']),_0x3c0e7a;}}exports[a194_0x1d756f(0x207)]=SalesforceComponentsManager;