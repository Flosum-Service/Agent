const a86_0x348546=a86_0x4c3c;(function(_0x41f746,_0xc4849c){const _0x380a9a=a86_0x4c3c,_0x300c7a=_0x41f746();while(!![]){try{const _0x1bdd32=parseInt(_0x380a9a(0x1dc))/0x1*(parseInt(_0x380a9a(0x1b3))/0x2)+parseInt(_0x380a9a(0x205))/0x3+parseInt(_0x380a9a(0x206))/0x4+-parseInt(_0x380a9a(0x1c7))/0x5+parseInt(_0x380a9a(0x1cd))/0x6*(-parseInt(_0x380a9a(0x1ba))/0x7)+parseInt(_0x380a9a(0x1f6))/0x8*(-parseInt(_0x380a9a(0x1ea))/0x9)+-parseInt(_0x380a9a(0x1ff))/0xa*(parseInt(_0x380a9a(0x201))/0xb);if(_0x1bdd32===_0xc4849c)break;else _0x300c7a['push'](_0x300c7a['shift']());}catch(_0x3c7cda){_0x300c7a['push'](_0x300c7a['shift']());}}}(a86_0xa288,0xbbd1f));const a86_0x329784=(function(){let _0x459525=!![];return function(_0x1d9d8c,_0x473fd9){const _0x1e50d8=_0x459525?function(){const _0x5d57f0=a86_0x4c3c;if(_0x473fd9){const _0x146566=_0x473fd9[_0x5d57f0(0x1ec)](_0x1d9d8c,arguments);return _0x473fd9=null,_0x146566;}}:function(){};return _0x459525=![],_0x1e50d8;};}()),a86_0x3aad39=a86_0x329784(this,function(){const _0xa566b8=a86_0x4c3c;return a86_0x3aad39[_0xa566b8(0x1f3)]()[_0xa566b8(0x1e0)](_0xa566b8(0x1ed))[_0xa566b8(0x1f3)]()['constructor'](a86_0x3aad39)['search']('(((.+)+)+)+$');});a86_0x3aad39();'use strict';var __importDefault=this&&this[a86_0x348546(0x1bf)]||function(_0x423d4b){const _0x15d255=a86_0x348546;return _0x423d4b&&_0x423d4b[_0x15d255(0x1e8)]?_0x423d4b:{'default':_0x423d4b};};Object['defineProperty'](exports,a86_0x348546(0x1e8),{'value':!![]}),exports[a86_0x348546(0x1fd)]=void 0x0;const constants_1=require('../../../constants'),path_1=__importDefault(require(a86_0x348546(0x1ca))),extract_component_permissions_1=require(a86_0x348546(0x1c5)),xml2js_1=require(a86_0x348546(0x1c4)),zip_1=require(a86_0x348546(0x1fa)),mdapi_1=require(a86_0x348546(0x1bd)),fs_internal_1=require(a86_0x348546(0x1b9)),promises_1=require(a86_0x348546(0x1bc)),components_api_1=require(a86_0x348546(0x1c3)),adm_zip_1=__importDefault(require(a86_0x348546(0x1b0))),uuid_1=require('uuid'),fetch_attachments_1=require('../../shared/utils/fetch-attachments'),DESTRUCTIVE_CHANGES_PER_NAME=a86_0x348546(0x200),DESTRUCTIVE_CHANGES_POST_NAME=a86_0x348546(0x1b6),DEPLOY_DIR_NAME='DEPLOYZIP';function a86_0x4c3c(_0x124597,_0x3a3aae){const _0x4644d2=a86_0xa288();return a86_0x4c3c=function(_0x3aad39,_0x329784){_0x3aad39=_0x3aad39-0x1b0;let _0xa28818=_0x4644d2[_0x3aad39];return _0xa28818;},a86_0x4c3c(_0x124597,_0x3a3aae);}async function generateAndDeployZip({attachmentsId:_0x52b96d,isExtractComponentsPermissions:_0x1e7238,preDestructiveAttachmentId:_0x401823,postDestructiveAttachmentId:_0x2d9cd6,branchId:_0x53b078,credentials:_0x499ebe,metadataLogId:_0x1eea3c,environments:_0x2f2bed,metaTypes:_0x55b17e},_0x2887d5){const _0x421466=a86_0x348546,_0x5c4251=(0x0,uuid_1['v4'])();try{const _0x5bca16=await(0x0,fetch_attachments_1[_0x421466(0x203)])(_0x2887d5,_0x52b96d),_0x211c14=_0x5bca16[_0x421466(0x1f2)]((_0x346e3c,_0xa46d60)=>({..._0x346e3c,[_0xa46d60['Id']]:_0xa46d60['Name']}),{}),_0x5b2b6c=await getComponents(_0x5bca16,_0x2887d5,_0x211c14),_0x3d7936=await components_api_1[_0x421466(0x1e2)][_0x421466(0x1e3)](_0x2887d5,_0x5bca16['map'](({ParentId:_0xe177fa})=>_0xe177fa))[_0x421466(0x1c1)](_0x1fa156=>components_api_1[_0x421466(0x1e2)][_0x421466(0x1b7)](_0x1fa156));if(_0x1e7238){const _0x43565f=_0x5b2b6c['filter'](({fileType:_0x556afd})=>_0x556afd===_0x421466(0x1da)||_0x556afd===_0x421466(0x1c9));await removePermission(_0x43565f,_0x3d7936);}await replaceEnvironments(_0x55b17e,_0x2f2bed,_0x5b2b6c),await writeZip(_0x5b2b6c,_0x5c4251),await generateAndWritePackageXML(_0x5bca16,_0x3d7936,_0x5c4251);_0x401823&&await saveDestructiveChanges(_0x2887d5,_0x401823,DESTRUCTIVE_CHANGES_PER_NAME,_0x5c4251);_0x2d9cd6&&await saveDestructiveChanges(_0x2887d5,_0x2d9cd6,DESTRUCTIVE_CHANGES_POST_NAME,_0x5c4251);const _0x1fb992=(await createDeployZip(_0x5c4251)['then'](_0x368dd1=>{return _0x368dd1;}))['toBuffer']()[_0x421466(0x1f3)]('base64');console[_0x421466(0x1f8)](_0x421466(0x1e9));const _0x5ad464=_0x1fb992['length'];if(_0x5ad464>=components_api_1['MAX_ZIP_SIZE']){const _0xbff28d=await createDeployZip(_0x5c4251);console[_0x421466(0x1f8)](_0x421466(0x1ce));const [_0x31c909,_0x2909a2]=await components_api_1['ComponentsApi']['splitZip'](_0xbff28d,_0x5ad464),_0x1611f6=await insertZip(_0x2887d5,_0x53b078,_0x499ebe['orgId'],_0x1eea3c,_0x31c909[_0x421466(0x1de)]()['toString'](_0x421466(0x1e4))),_0x2ffc2f=await insertZip(_0x2887d5,_0x53b078,_0x499ebe[_0x421466(0x1d6)],_0x1eea3c,_0x2909a2[_0x421466(0x1de)]()[_0x421466(0x1f3)](_0x421466(0x1e4)));return _0x1611f6+','+_0x2ffc2f;}else return await insertZip(_0x2887d5,_0x53b078,_0x499ebe['orgId'],_0x1eea3c,_0x1fb992);}catch(_0x315099){throw _0x315099;}finally{if(await fs_internal_1['FS']['exists'](path_1[_0x421466(0x1b2)][_0x421466(0x1b8)](process[_0x421466(0x1cb)](),_0x421466(0x1d4),_0x5c4251)))await(0x0,promises_1['rm'])(path_1['default']['join'](process[_0x421466(0x1cb)](),_0x421466(0x1d4),_0x5c4251),{'recursive':!![]});}}exports[a86_0x348546(0x1fd)]=generateAndDeployZip;async function getComponents(_0x424bc7,_0x180b34,_0x32d278){const _0x5e9de1=a86_0x348546,_0x3ad22c=[],_0x2fe7c2=await(0x0,fetch_attachments_1[_0x5e9de1(0x1f7)])(_0x424bc7,_0x180b34);return await getComponentFromZip(_0x2fe7c2,_0x32d278)[_0x5e9de1(0x1c1)](_0x1bc747=>{const _0x2d8f56=_0x5e9de1;_0x3ad22c[_0x2d8f56(0x1dd)](..._0x1bc747);}),_0x3ad22c;}async function getComponentFromZip(_0x46199b,_0x9fdc1f){const _0x47a854=a86_0x348546,_0x5ce501=[];for(const _0x40be47 of _0x46199b){const _0x98a7=await zip_1['Zip']['unzip'](_0x40be47[_0x47a854(0x1d9)][_0x47a854(0x202)]);for(const _0x2daf95 in _0x98a7[_0x47a854(0x1d5)]){!_0x98a7[_0x47a854(0x1d5)][_0x2daf95][_0x47a854(0x1e6)]&&_0x5ce501[_0x47a854(0x1dd)]({'fileName':_0x2daf95[_0x47a854(0x1be)](_0x2daf95[_0x47a854(0x1df)]('/')+0x1),'fileType':_0x9fdc1f[_0x40be47['id']],'body':_0x40be47[_0x47a854(0x1d9)][_0x47a854(0x202)]});}}return _0x5ce501;}async function removePermission(_0x841dfd,_0x3b59c5){const _0x11d5b1=a86_0x348546;for(const _0x449e0f of _0x841dfd){const _0xa760b7=await zip_1[_0x11d5b1(0x1d3)]['unzip'](_0x449e0f['body']),_0xd7b71e=[];for(const _0x551e9b in _0xa760b7[_0x11d5b1(0x1d5)]){!_0xa760b7[_0x11d5b1(0x1d5)][_0x551e9b][_0x11d5b1(0x1e6)]&&_0xd7b71e['push']({'fileName':_0x551e9b,'body':await _0xa760b7[_0x11d5b1(0x1d5)][_0x551e9b][_0x11d5b1(0x1cc)]('text')});}const _0x39f41c=await(0x0,extract_component_permissions_1['extractComponentPermissions'])(_0xd7b71e[0x0]['body'][_0x11d5b1(0x1f3)](),_0x3b59c5,_0x449e0f[_0x11d5b1(0x1d0)]),_0x253869=new xml2js_1[(_0x11d5b1(0x1ee))]({'xmldec':{'version':'1.0','encoding':_0x11d5b1(0x1b5)}}),_0x4c84f9=_0x253869['buildObject'](_0x39f41c),_0x437b36=zip_1[_0x11d5b1(0x1d3)]['createZip']();_0x437b36[_0x11d5b1(0x1bb)](_0xd7b71e[0x0][_0x11d5b1(0x20b)],_0x4c84f9),_0x449e0f[_0x11d5b1(0x1c0)]=await _0x437b36[_0x11d5b1(0x1c8)]({'type':_0x11d5b1(0x1e4),'compression':_0x11d5b1(0x1ef),'compressionOptions':{'level':0x6}});}}async function replaceEnvironments(_0x53236b,_0x559d7d,_0x4070fe){const _0x314caa=a86_0x348546;for(const _0x19c59c of _0x4070fe){if(_0x53236b[_0x314caa(0x1d8)](_0x3c0a24=>_0x3c0a24!==_0x19c59c[_0x314caa(0x1d0)]))continue;const _0xe5b5a=await zip_1[_0x314caa(0x1d3)][_0x314caa(0x1f5)](_0x19c59c['body']);for(const _0x520768 in _0xe5b5a[_0x314caa(0x1d5)]){if(!_0xe5b5a[_0x314caa(0x1d5)][_0x520768]['dir']){let _0x10309d=await _0xe5b5a[_0x314caa(0x1d5)][_0x520768][_0x314caa(0x1cc)](_0x314caa(0x1d2));for(const _0x5dc156 of Object[_0x314caa(0x1fe)](_0x559d7d)){const _0x4699d3=new RegExp('%%'+_0x5dc156+'%%','g');_0x10309d=_0x10309d[_0x314caa(0x1e7)](_0x4699d3,_0x559d7d[_0x5dc156]);}_0xe5b5a[_0x314caa(0x1bb)](_0x520768,_0x10309d);}}_0x19c59c[_0x314caa(0x1c0)]=await _0xe5b5a['generateAsync']({'type':'base64','compression':_0x314caa(0x1ef),'compressionOptions':{'level':0x6}});}}async function writeZip(_0x21bcb7,_0x1e6775){const _0x3590bd=a86_0x348546,_0x2dd29c=new mdapi_1[(_0x3590bd(0x1eb))]({'components':_0x21bcb7,'sourceDir':path_1[_0x3590bd(0x1b2)][_0x3590bd(0x1b8)](process['cwd'](),_0x3590bd(0x1d4),_0x1e6775,DEPLOY_DIR_NAME,_0x3590bd(0x1f1)),'skipChildErrors':![]});await _0x2dd29c['start']();}async function generateAndWritePackageXML(_0x40e83f,_0x1b012a,_0x142a7d){const _0x4cbba7=a86_0x348546,_0x557d44=getComponentsTypeAndName(_0x40e83f,_0x1b012a),_0x4002b3=[...new Set(_0x557d44['map'](_0x1e8e5e=>_0x1e8e5e['type']))],_0xdc8ef4={'Package':{'$':{'xmlns':_0x4cbba7(0x1fc)},'types':[],'version':''+constants_1[_0x4cbba7(0x1fb)]['substring'](0x1)}};for(const _0xb0f1ea of _0x4002b3){const _0x13c51a=_0x557d44[_0x4cbba7(0x1f4)](_0x469990=>_0x469990[_0x4cbba7(0x209)]===_0xb0f1ea)['map'](_0xdaff72=>_0xdaff72[_0x4cbba7(0x1b4)]),_0x3b0e7b={'members':_0x13c51a,'name':_0xb0f1ea};_0xdc8ef4[_0x4cbba7(0x207)][_0x4cbba7(0x1f0)][_0x4cbba7(0x1dd)](_0x3b0e7b);}const _0x5a26d9=new xml2js_1[(_0x4cbba7(0x1ee))]({'xmldec':{'version':_0x4cbba7(0x204),'encoding':_0x4cbba7(0x1b5)}}),_0xd5dfa5=_0x5a26d9[_0x4cbba7(0x1e5)](_0xdc8ef4);await fs_internal_1['FS'][_0x4cbba7(0x1d1)](path_1[_0x4cbba7(0x1b2)]['join'](process['cwd'](),'.temp',_0x142a7d,DEPLOY_DIR_NAME,_0x4cbba7(0x1f1),'package.xml'),_0xd5dfa5);}function getComponentsTypeAndName(_0x25e86b,_0x5c3db2){const _0x4993a9=a86_0x348546;return _0x25e86b[_0x4993a9(0x1f2)]((_0x8ee30a,_0x2b4ee6)=>{const _0x27200a=_0x4993a9,_0x423591=_0x5c3db2[_0x27200a(0x1e1)](_0x1e3e35=>_0x1e3e35['Id']===_0x2b4ee6[_0x27200a(0x1c2)]);return _0x423591&&_0x8ee30a['push']({'name':_0x423591[_0x27200a(0x1b1)][_0x27200a(0x1c6)],'type':_0x2b4ee6[_0x27200a(0x208)]}),_0x8ee30a;},[]);}async function saveDestructiveChanges(_0x4fb0c7,_0x2a2598,_0x23466d,_0x1a33c1){const _0x18f5ea=a86_0x348546,_0x5df5e7=(await(0x0,fetch_attachments_1[_0x18f5ea(0x1db)])(_0x4fb0c7,_0x2a2598))[_0x18f5ea(0x1f3)]();await fs_internal_1['FS']['writeFile'](path_1[_0x18f5ea(0x1b2)][_0x18f5ea(0x1b8)](process[_0x18f5ea(0x1cb)](),_0x18f5ea(0x1d4),_0x1a33c1,DEPLOY_DIR_NAME,_0x18f5ea(0x1f1),_0x23466d),_0x5df5e7);}async function createDeployZip(_0x2f7a5b){const _0x2840a5=a86_0x348546,_0x4cd925=new adm_zip_1['default']();return await _0x4cd925[_0x2840a5(0x1f9)](path_1['default'][_0x2840a5(0x1b8)](process[_0x2840a5(0x1cb)](),'.temp',_0x2f7a5b,DEPLOY_DIR_NAME)),_0x4cd925;}async function insertZip(_0x5f49f8,_0x4108c1,_0x1b7abc,_0x42c0a7,_0x205dea){const _0x5c2d4b=a86_0x348546,_0x134dce={'ParentId':_0x4108c1,'Name':_0x5c2d4b(0x1cf)+_0x1b7abc,'Description':'BUILD'+_0x42c0a7,'Body':_0x205dea},{data:_0x24e5dc}=await _0x5f49f8['post'](_0x5c2d4b(0x1d7)+constants_1['SALESFORCE_API_VERSION']+_0x5c2d4b(0x20a),_0x134dce);return _0x24e5dc['id'];}function a86_0xa288(){const _0x570403=['then','ParentId','../utils/components-api','xml2js','../utils/extract-component-permissions','Component_Name__c','3106595QcEORj','generateAsync','PermissionSet','path','cwd','async','999834WTHBJQ','after\x20create\x20second\x20zip','BUILD','fileType','writeFile','text','Zip','.temp','files','orgId','/services/data/','every','values','Profile','fetchAttachmentBody','443sRDhnM','push','toBuffer','indexOf','search','find','ComponentsApi','fetchComponentsDetailsByComponentsHistory','base64','buildObject','dir','replace','__esModule','after\x20create\x20zip','216IOvOAf','MDApiWriter','apply','(((.+)+)+)+$','Builder','DEFLATE','types','src','reduce','toString','filter','unzip','11336kdgMSX','retrieveAttachments','log','addLocalFolder','../../git/parsers/utils/zip','SALESFORCE_API_VERSION','http://soap.sforce.com/2006/04/metadata','generateAndDeployZip','keys','130TPaEMJ','destructiveChangesPre.xml','88869vPEoXN','Body','fetchAttachmentsDetailsById','1.0','605847YtUiFb','4803152wryNjp','Package','Name','type','/sobjects/Attachment','fileName','adm-zip','Component__r','default','2830uzRVIO','name','UTF-8','destructiveChangesPost.xml','removeNamespacePrefix','join','../../git/internal/fs.internal','21qhxSPP','file','fs/promises','../../git/parsers/mdapi','substring','__importDefault','body'];a86_0xa288=function(){return _0x570403;};return a86_0xa288();}