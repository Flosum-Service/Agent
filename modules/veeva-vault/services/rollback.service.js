const a353_0x51e776=a353_0x8b74;(function(_0xb5124e,_0x3bcebe){const _0x3a7949=a353_0x8b74,_0x4eb5e3=_0xb5124e();while(!![]){try{const _0x9d9356=-parseInt(_0x3a7949(0x173))/0x1*(parseInt(_0x3a7949(0x12b))/0x2)+-parseInt(_0x3a7949(0x144))/0x3+parseInt(_0x3a7949(0x190))/0x4*(parseInt(_0x3a7949(0x164))/0x5)+-parseInt(_0x3a7949(0x19b))/0x6+parseInt(_0x3a7949(0x13f))/0x7*(parseInt(_0x3a7949(0x146))/0x8)+parseInt(_0x3a7949(0x12f))/0x9+parseInt(_0x3a7949(0x15b))/0xa*(parseInt(_0x3a7949(0x188))/0xb);if(_0x9d9356===_0x3bcebe)break;else _0x4eb5e3['push'](_0x4eb5e3['shift']());}catch(_0x5b10b7){_0x4eb5e3['push'](_0x4eb5e3['shift']());}}}(a353_0x220d,0xdaff2));function a353_0x8b74(_0xd15a2b,_0x5ede1f){const _0x49fafa=a353_0x220d();return a353_0x8b74=function(_0x1f99f7,_0x3485f5){_0x1f99f7=_0x1f99f7-0x11c;let _0x220de0=_0x49fafa[_0x1f99f7];return _0x220de0;},a353_0x8b74(_0xd15a2b,_0x5ede1f);}const a353_0x3485f5=(function(){let _0x243619=!![];return function(_0x299337,_0x5d0543){const _0x49b202=_0x243619?function(){const _0x4b7f17=a353_0x8b74;if(_0x5d0543){const _0x14545d=_0x5d0543[_0x4b7f17(0x185)](_0x299337,arguments);return _0x5d0543=null,_0x14545d;}}:function(){};return _0x243619=![],_0x49b202;};}()),a353_0x1f99f7=a353_0x3485f5(this,function(){const _0x24a0c8=a353_0x8b74;return a353_0x1f99f7['toString']()[_0x24a0c8(0x181)](_0x24a0c8(0x143))[_0x24a0c8(0x19f)]()['constructor'](a353_0x1f99f7)[_0x24a0c8(0x181)](_0x24a0c8(0x143));});a353_0x1f99f7();'use strict';var __importDefault=this&&this[a353_0x51e776(0x134)]||function(_0x2573b3){return _0x2573b3&&_0x2573b3['__esModule']?_0x2573b3:{'default':_0x2573b3};};Object[a353_0x51e776(0x137)](exports,a353_0x51e776(0x132),{'value':!![]}),exports[a353_0x51e776(0x177)]=void 0x0;const veeva_service_1=require(a353_0x51e776(0x18e)),salesforce_service_1=require(a353_0x51e776(0x16e)),package_import_service_1=require(a353_0x51e776(0x16d)),id_deployment_result_retriever_1=require('../classes/retrievers/deployment-results/id.deployment-result.retriever'),flosum_constants_1=require(a353_0x51e776(0x128)),fetch_attachments_1=require(a353_0x51e776(0x147)),constants_1=require(a353_0x51e776(0x12e)),zip_creator_rollback_1=require(a353_0x51e776(0x18d)),shortid_1=__importDefault(require(a353_0x51e776(0x141))),promises_1=require('fs/promises'),vpk_service_1=require('./vpk.service'),status_enums_1=require(a353_0x51e776(0x123)),salesforce_dml_error_1=require(a353_0x51e776(0x148)),metadata_log_dto_1=require(a353_0x51e776(0x1a7)),core_1=require(a353_0x51e776(0x157));class RollbackService{constructor({connectionSalesforce:_0x30353e,connectionVeeva:_0x49330b,logger:_0x442a3d,tempFolder:_0x2f8782,instanceUrl:_0x2d50c9,timeZone:_0x187cbc,metadataLogId:_0x27c719,attachmentLogId:_0x166b03,parentMetadataLogId:_0x213233,componentIds:_0x4bf6cf}){const _0x4ea5f2=a353_0x51e776;this[_0x4ea5f2(0x1a0)]=_0x30353e,this[_0x4ea5f2(0x16f)]=_0x49330b,this[_0x4ea5f2(0x14c)]=_0x442a3d,this[_0x4ea5f2(0x154)]=_0x2f8782,this['_instanceUrl']=_0x2d50c9,this[_0x4ea5f2(0x168)]=_0x187cbc,this[_0x4ea5f2(0x192)]=_0x27c719,this[_0x4ea5f2(0x122)]=_0x166b03,this['_parentMetadataLogId']=_0x213233,this['_componentIds']=_0x4bf6cf,this[_0x4ea5f2(0x180)]=new core_1[(_0x4ea5f2(0x1a5))](_0x4ea5f2(0x153)),this['_veevaService']=new veeva_service_1['VeevaService']({'connection':_0x49330b,'logger':_0x442a3d}),this[_0x4ea5f2(0x145)]=new salesforce_service_1['SalesforceService']({'connection':_0x30353e}),this[_0x4ea5f2(0x17d)]=new package_import_service_1[(_0x4ea5f2(0x171))]({'veevaService':this[_0x4ea5f2(0x169)],'connection':_0x49330b,'logger':_0x442a3d,'saveLog':this['saveLog'][_0x4ea5f2(0x140)](this)}),this[_0x4ea5f2(0x1a6)]=new vpk_service_1[(_0x4ea5f2(0x175))]({'connection':_0x49330b});}async[a353_0x51e776(0x14f)](_0x31fd61,_0x45b11f){const _0x5ed414=a353_0x51e776;this[_0x5ed414(0x14c)]['log'](_0x5ed414(0x166));const _0x127aea={'Body':Buffer[_0x5ed414(0x162)](_0x31fd61)['toString'](_0x5ed414(0x15c)),'ContentType':_0x5ed414(0x16c),'ParentId':this['_metadataLogId'],'Name':_0x45b11f};await this[_0x5ed414(0x1a0)][_0x5ed414(0x12c)](flosum_constants_1[_0x5ed414(0x158)][_0x5ed414(0x19c)]+_0x5ed414(0x130),_0x127aea);}async['retrieveMetadataLog'](){const _0xc2e4cd=a353_0x51e776;this[_0xc2e4cd(0x14c)]['log'](_0xc2e4cd(0x179));const [_0x3e8b41]=await this['_salesforceService']['retrieveRecords'](_0xc2e4cd(0x167)+constants_1[_0xc2e4cd(0x136)]+_0xc2e4cd(0x1a2)+constants_1[_0xc2e4cd(0x136)]+'Organisation__r.Name,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+constants_1[_0xc2e4cd(0x136)]+_0xc2e4cd(0x15a)+constants_1[_0xc2e4cd(0x136)]+'Metadata_Log__c\x0a\x20\x20\x20\x20\x20\x20WHERE\x20Id\x20=\x20\x27'+this['_metadataLogId']+_0xc2e4cd(0x18c));return new metadata_log_dto_1[(_0xc2e4cd(0x176))](_0x3e8b41);}async['retrieveDeploymentResults'](){const _0x5d5f25=a353_0x51e776;this[_0x5d5f25(0x14c)][_0x5d5f25(0x150)](_0x5d5f25(0x1a4));const _0x32f9c3=await new id_deployment_result_retriever_1[(_0x5d5f25(0x127))]({'salesforceService':this[_0x5d5f25(0x145)],'value':this['_componentIds']})['retrieve']();if(!_0x32f9c3[_0x5d5f25(0x18f)])throw new Error(_0x5d5f25(0x183));return _0x32f9c3;}async[a353_0x51e776(0x19a)](){const _0x44f674=a353_0x51e776;this['_logger'][_0x44f674(0x150)]('Retrieve\x20Backup');const _0x544219=await this[_0x44f674(0x145)]['retrieveRecords']('\x0a\x20\x20\x20\x20\x20\x20SELECT\x20Id\x0a\x20\x20\x20\x20\x20\x20FROM\x20Attachment\x0a\x20\x20\x20\x20\x20\x20WHERE\x20ParentId\x20=\x20\x27'+this['_parentMetadataLogId']+_0x44f674(0x124)+flosum_constants_1[_0x44f674(0x158)]['BACKUP_ZIP_NAME']+'\x27\x0a\x20\x20\x20\x20'),_0x5b89b8=await(0x0,fetch_attachments_1[_0x44f674(0x142)])(this[_0x44f674(0x1a0)],[_0x544219[0x0]['Id']]),_0x426e22=await(0x0,fetch_attachments_1[_0x44f674(0x129)])(_0x5b89b8,this[_0x44f674(0x1a0)]);if(!_0x426e22[_0x44f674(0x18f)])throw new Error(_0x44f674(0x13d));return _0x426e22[0x0]['values'][_0x44f674(0x198)];}async[a353_0x51e776(0x156)](_0x922389){const _0x466f72=a353_0x51e776;this[_0x466f72(0x14c)]['log'](_0x466f72(0x18b));const _0x3f6af0=await this[_0x466f72(0x19a)](),_0x1d43cf=await new zip_creator_rollback_1[(_0x466f72(0x13a))]({'rollbackName':this[_0x466f72(0x12d)]['name'],'backup':_0x3f6af0,'deploymentResults':_0x922389})[_0x466f72(0x1a3)](),_0xd09860=this[_0x466f72(0x154)]+'/'+(0x0,shortid_1[_0x466f72(0x14e)])()+_0x466f72(0x14a);return await(0x0,promises_1[_0x466f72(0x195)])(_0xd09860,_0x1d43cf),_0xd09860;}async[a353_0x51e776(0x120)](_0x4d12f4){const _0x3e7e79=a353_0x51e776;this['_logger'][_0x3e7e79(0x150)]('Create\x20Vpk\x20package');const _0x40c487=await this['_vpkService']['generate'](_0x4d12f4),_0x39eb3c=this['_tempFolder']+_0x3e7e79(0x11d)+_0x4d12f4['slice'](_0x4d12f4[_0x3e7e79(0x11f)]('/')+0x1);return await(0x0,promises_1[_0x3e7e79(0x195)])(_0x39eb3c,_0x40c487),await this[_0x3e7e79(0x1a6)]['validate'](_0x39eb3c),_0x39eb3c;}[a353_0x51e776(0x131)](_0x28cc94){const _0x98036f=a353_0x51e776;return this[_0x98036f(0x14c)][_0x98036f(0x150)](_0x98036f(0x174)),_0x28cc94[_0x98036f(0x133)](_0x2c93f1=>{const _0x3bbb8a=_0x98036f;return this[_0x3bbb8a(0x14c)]['log'](_0x2c93f1[_0x3bbb8a(0x155)]+'.'+_0x2c93f1[_0x3bbb8a(0x197)]+_0x3bbb8a(0x159)+_0x2c93f1[_0x3bbb8a(0x13b)]),{[constants_1[_0x3bbb8a(0x136)]+_0x3bbb8a(0x178)]:_0x3bbb8a(0x126),[constants_1['FLOSUM_NAMESPACE']+_0x3bbb8a(0x172)]:_0x2c93f1[_0x3bbb8a(0x13b)]===status_enums_1['PackageComponentStatus'][_0x3bbb8a(0x151)]?_0x3bbb8a(0x121):_0x3bbb8a(0x138),[constants_1[_0x3bbb8a(0x136)]+_0x3bbb8a(0x160)]:_0x2c93f1['deploymentAction'],[constants_1['FLOSUM_NAMESPACE']+_0x3bbb8a(0x15d)]:_0x2c93f1[_0x3bbb8a(0x197)],[constants_1[_0x3bbb8a(0x136)]+_0x3bbb8a(0x182)]:_0x2c93f1[_0x3bbb8a(0x155)],[constants_1[_0x3bbb8a(0x136)]+_0x3bbb8a(0x191)]:_0x2c93f1['stepName'],[constants_1[_0x3bbb8a(0x136)]+_0x3bbb8a(0x19d)]:this[_0x3bbb8a(0x12d)]['organizationId'],[constants_1[_0x3bbb8a(0x136)]+_0x3bbb8a(0x19e)]:this[_0x3bbb8a(0x192)]};});}async[a353_0x51e776(0x193)](_0x239612){const _0x15c58c=a353_0x51e776;this[_0x15c58c(0x14c)]['log'](_0x15c58c(0x17e));const _0x5dab34=await this[_0x15c58c(0x145)][_0x15c58c(0x15e)](constants_1[_0x15c58c(0x136)]+_0x15c58c(0x13e),_0x239612),_0x5cb4d6=_0x5dab34[_0x15c58c(0x189)](_0x3dc32a=>!_0x3dc32a['success'])[_0x15c58c(0x133)](_0x58d9a9=>_0x58d9a9['errors'])['flat']();if(_0x5cb4d6[_0x15c58c(0x18f)])throw new salesforce_dml_error_1['SalesforceDmlError'](_0x5cb4d6);}async[a353_0x51e776(0x186)](_0x4e35ec){const _0x2cea02=a353_0x51e776;if(!this['_metadataLog']){this[_0x2cea02(0x180)][_0x2cea02(0x1a1)](_0x4e35ec);return;}this[_0x2cea02(0x14c)][_0x2cea02(0x16b)](_0x4e35ec),await this[_0x2cea02(0x14c)][_0x2cea02(0x196)](),await this[_0x2cea02(0x13c)](![],!![],'');}async[a353_0x51e776(0x13c)](_0x369e83,_0x3921d8,_0x2ca591){const _0x44ddde=a353_0x51e776,{id:_0x458a2c,organizationId:_0x509098,branchId:_0x4f72a1,organizationName:_0x10fc48}=this['_metadataLog'],_0x4bbee1=_0x44ddde(0x152)+this[_0x44ddde(0x18a)]+'/'+_0x458a2c+'\x20>\x20'+_0x44ddde(0x184)+_0x44ddde(0x14b),_0x2500cc=_0x44ddde(0x152)+this[_0x44ddde(0x18a)]+'/'+_0x509098+'\x20>'+_0x10fc48+'</a>',_0xeb151a=_0x4bbee1+_0x44ddde(0x14d)+_0x2500cc+'\x20has\x20been\x20created.',_0x3c067a={[constants_1['FLOSUM_NAMESPACE']+_0x44ddde(0x170)]:_0xeb151a,[constants_1[_0x44ddde(0x136)]+_0x44ddde(0x194)]:new Date(),[constants_1[_0x44ddde(0x136)]+'Branch__c']:_0x4f72a1,[constants_1['FLOSUM_NAMESPACE']+_0x44ddde(0x17b)]:_0x44ddde(0x11e),[constants_1[_0x44ddde(0x136)]+'Activity_Type__c']:_0x44ddde(0x15f),[constants_1[_0x44ddde(0x136)]+_0x44ddde(0x17a)]:_0x509098},_0x45e486={[constants_1[_0x44ddde(0x136)]+'Is_Error__c']:!_0x369e83,[constants_1[_0x44ddde(0x136)]+_0x44ddde(0x11c)]:_0x369e83,[constants_1['FLOSUM_NAMESPACE']+_0x44ddde(0x172)]:_0x3921d8?status_enums_1[_0x44ddde(0x17c)][_0x44ddde(0x17f)]:status_enums_1['MetadataLogStatus']['COMPLETED'],[constants_1[_0x44ddde(0x136)]+'Job_Completed__c']:!![],[constants_1[_0x44ddde(0x136)]+'Async_Request_Id__c']:_0x2ca591};await this[_0x44ddde(0x1a0)][_0x44ddde(0x199)](flosum_constants_1[_0x44ddde(0x158)][_0x44ddde(0x19c)]+'/'+constants_1[_0x44ddde(0x136)]+_0x44ddde(0x161)+this['_metadataLogId'],_0x45e486),await this[_0x44ddde(0x1a0)]['post'](flosum_constants_1[_0x44ddde(0x158)][_0x44ddde(0x19c)]+'/'+constants_1[_0x44ddde(0x136)]+_0x44ddde(0x125),_0x3c067a),this['_logger'][_0x44ddde(0x150)](_0x44ddde(0x165)+(_0x369e83?_0x44ddde(0x12a):_0x44ddde(0x187))+'.'),await this[_0x44ddde(0x14c)]['updateLog']();}async['execute'](){const _0x1f9124=a353_0x51e776;try{this['_metadataLog']=await this[_0x1f9124(0x135)]();const _0x4c2a79=await this[_0x1f9124(0x149)]();await this[_0x1f9124(0x14c)][_0x1f9124(0x196)]();const _0x2b4122=await this[_0x1f9124(0x156)](_0x4c2a79),_0x3739b4=await this['createVpk'](_0x2b4122);await this[_0x1f9124(0x14c)][_0x1f9124(0x196)]();const _0x2c7614=await this['_packageImportService'][_0x1f9124(0x16a)](_0x3739b4);await this[_0x1f9124(0x14c)]['updateLog']();const _0x3b795b=this[_0x1f9124(0x131)](_0x2c7614['packageComponentList']);await this[_0x1f9124(0x193)](_0x3b795b),await this['finishRollback'](_0x2c7614[_0x1f9124(0x139)],![],_0x2c7614[_0x1f9124(0x163)]);}catch(_0xe71041){await this[_0x1f9124(0x186)](_0xe71041)['catch'](_0x220a08=>this[_0x1f9124(0x180)]['error'](_0x220a08));}}}function a353_0x220d(){const _0x274932=['retrieveAttachments','successfully','6ZhVcZe','post','_metadataLog','../../../constants','9674694fUgWYA','/Attachment','formFlosumDeploymentResults','__esModule','map','__importDefault','retrieveMetadataLog','FLOSUM_NAMESPACE','defineProperty','Failure','isDeployed','ZipCreatorRollback','status','finishRollback','Cannot\x20find\x20Backup\x20Zip','Deployment_Result__c','11624935MzZOKp','bind','shortid','fetchAttachmentsDetailsById','(((.+)+)+)+$','1242471TkFzkK','_salesforceService','8UWrHxw','../../shared/utils/fetch-attachments','../classes/errors/salesforce-dml-error','retrieveDeploymentResults','.zip','\x20</a>','_logger','\x20of\x20branch\x20to\x20Organization\x20','default','saveLog','log','DEPLOYED','<a\x20href=','veeva-rollback','_tempFolder','type','createZip','../../../core','FlosumConstants','\x20:\x20','Branch__c\x0a\x20\x20\x20\x20\x20\x20FROM\x20','10hKLFNT','base64','Component_Name__c','insertMultipleRecords','Deployment','Result__c','Metadata_Log__c/','from','packageId','30yWIWwT','Rollback\x20completed\x20','Save\x20log','\x0a\x20\x20\x20\x20\x20\x20SELECT\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Id,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Name,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','_timeZone','_veevaService','import','logError','text/plain','./package-import.service','./salesforce.service','_connectionVeeva','Action__c','PackageImportService','Status__c','473747vALCgy','Form\x20Deployment\x20Results','VpkService','MetadataLogDto','RollbackService','Type__c','Retrieve\x20Metadata\x20Log\x20info','TargetId__c','Activity_Item__c','MetadataLogStatus','_packageImportService','Save\x20Deployment\x20Results','EXCEPTION','_systemLogger','search','Component_Type__c','Cannot\x20find\x20Deployment\x20Results','Veeva\x20Rollback\x20(Deployment)','apply','finishRollbackWithError','with\x20error','6259858HaxJav','filter','_instanceUrl','Create\x20zip\x20from\x20backup','\x27\x0a\x20\x20\x20\x20','../classes/rollback/zip-creator.rollback','./veeva.service','length','604948lKRyOZ','Veeva_Step_Name__c','_metadataLogId','saveDeploymentResults','Date__c','writeFile','updateLog','name','Body','patch','retrieveBackup','8878578lzVQLf','ENDPOINT_UPSERT_RECORD','Org__c','Metadata_Log__c','toString','_connectionSalesforce','error','Organisation__c,\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','create','Retrieve\x20Deployment\x20Results','Logger','_vpkService','../dtos/metadata-log.dto','Succeed__c','/vpk__','Branch','lastIndexOf','createVpk','Success','_attachmentLogId','../enums/status.enums','\x27\x20AND\x20Name\x20=\x20\x27','Log__c','Deployment\x20Result','IdDeploymentResultRetriever','../constants/flosum.constants'];a353_0x220d=function(){return _0x274932;};return a353_0x220d();}exports['RollbackService']=RollbackService;