const a102_0x599f6e=a102_0x163c;(function(_0x230267,_0x4232ad){const _0x347f92=a102_0x163c,_0x439959=_0x230267();while(!![]){try{const _0x4185a7=parseInt(_0x347f92(0x1c9))/0x1*(parseInt(_0x347f92(0x1cb))/0x2)+parseInt(_0x347f92(0x1e7))/0x3*(-parseInt(_0x347f92(0x1c7))/0x4)+parseInt(_0x347f92(0x1e4))/0x5*(-parseInt(_0x347f92(0x1cf))/0x6)+parseInt(_0x347f92(0x1d6))/0x7+parseInt(_0x347f92(0x1c4))/0x8+-parseInt(_0x347f92(0x1cc))/0x9+parseInt(_0x347f92(0x19b))/0xa*(parseInt(_0x347f92(0x1d5))/0xb);if(_0x4185a7===_0x4232ad)break;else _0x439959['push'](_0x439959['shift']());}catch(_0x21dcd0){_0x439959['push'](_0x439959['shift']());}}}(a102_0x4041,0x345a2));const a102_0x9606ae=(function(){let _0x44fff6=!![];return function(_0x46cc25,_0x1ac426){const _0x4712ad=_0x44fff6?function(){const _0x2c4488=a102_0x163c;if(_0x1ac426){const _0x2b4c24=_0x1ac426[_0x2c4488(0x1da)](_0x46cc25,arguments);return _0x1ac426=null,_0x2b4c24;}}:function(){};return _0x44fff6=![],_0x4712ad;};}()),a102_0x3cc9a6=a102_0x9606ae(this,function(){const _0x8b63aa=a102_0x163c;return a102_0x3cc9a6[_0x8b63aa(0x1c5)]()[_0x8b63aa(0x1b8)](_0x8b63aa(0x1a5))[_0x8b63aa(0x1c5)]()['constructor'](a102_0x3cc9a6)[_0x8b63aa(0x1b8)](_0x8b63aa(0x1a5));});a102_0x3cc9a6();'use strict';var __importDefault=this&&this[a102_0x599f6e(0x1b9)]||function(_0xfa293){const _0x9bbd39=a102_0x599f6e;return _0xfa293&&_0xfa293[_0x9bbd39(0x1ab)]?_0xfa293:{'default':_0xfa293};};function a102_0x163c(_0x2eff58,_0x5f58d6){const _0x1e8ff3=a102_0x4041();return a102_0x163c=function(_0x3cc9a6,_0x9606ae){_0x3cc9a6=_0x3cc9a6-0x18c;let _0x4041bc=_0x1e8ff3[_0x3cc9a6];return _0x4041bc;},a102_0x163c(_0x2eff58,_0x5f58d6);}Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a102_0x599f6e(0x1d3)]=void 0x0;const path_1=__importDefault(require(a102_0x599f6e(0x1aa))),extract_component_permissions_1=require(a102_0x599f6e(0x1ba)),logger_1=require(a102_0x599f6e(0x1a8)),xml2js_1=require('xml2js'),zip_1=require(a102_0x599f6e(0x1ac)),mdapi_writer_1=require(a102_0x599f6e(0x19a)),fs_internal_1=require(a102_0x599f6e(0x1a4)),promises_1=require(a102_0x599f6e(0x1d9)),components_api_1=require(a102_0x599f6e(0x1b4)),adm_zip_1=__importDefault(require(a102_0x599f6e(0x1dd))),uuid_1=require(a102_0x599f6e(0x19d)),fetch_attachments_1=require(a102_0x599f6e(0x1d2)),salesforce_1=require(a102_0x599f6e(0x197)),DESTRUCTIVE_CHANGES_PER_NAME=a102_0x599f6e(0x1a0),DESTRUCTIVE_CHANGES_POST_NAME=a102_0x599f6e(0x1c3),DEPLOY_DIR_NAME=a102_0x599f6e(0x1a6),PERMISSION_SET_FOLDER_NAME=a102_0x599f6e(0x1ce);async function generateAndDeployZip({attachmentsId:_0x36a958,isExtractComponentsPermissionSets:_0x48221d,isExtractComponentsProfiles:_0x5d5b8c,preDestructiveAttachmentId:_0x5bcdb0,postDestructiveAttachmentId:_0x5c6863,branchId:_0x1ec624,credentials:_0x4219ab,metadataLogId:_0x13b9a9,environments:_0x34f862,metaTypes:_0x548b54,apiVersion:_0x429cda},_0x5d3e07,_0x339255){const _0x24a3fb=a102_0x599f6e;var _0x38a2b6;const _0x53c81b=(0x0,uuid_1['v4'])();try{const _0x42ea08=await(0x0,fetch_attachments_1[_0x24a3fb(0x1b1)])(_0x5d3e07,_0x36a958),_0x40e41c=_0x42ea08['reduce']((_0x4460a6,_0x335563)=>({..._0x4460a6,[_0x335563['Id']]:_0x335563[_0x24a3fb(0x1c8)]}),{}),_0x16e979=await getComponents(_0x42ea08,_0x5d3e07,_0x40e41c),_0x57679d=await components_api_1['ComponentsApi']['fetchComponentsDetailsByComponentsHistory'](_0x5d3e07,_0x42ea08[_0x24a3fb(0x1a3)](({ParentId:_0x14277e})=>_0x14277e),_0x429cda)['then'](_0x7bad1f=>components_api_1[_0x24a3fb(0x1b6)]['removeNamespacePrefix'](_0x7bad1f));if(_0x5d5b8c){const _0x58516b=_0x16e979[_0x24a3fb(0x1d7)](({fileType:_0x4bdac4})=>_0x4bdac4===_0x24a3fb(0x1d4));await removePermission(_0x58516b,_0x57679d);}const _0x411fb4=_0x16e979[_0x24a3fb(0x1d7)](({fileType:_0x6cce2a})=>_0x6cce2a===_0x24a3fb(0x1d1));if(_0x411fb4['length']&&_0x48221d){await removePermission(_0x411fb4,_0x57679d);const {items:_0x214edd}=await retrieveTargetPermissionSets(_0x411fb4,_0x429cda,_0x339255);await mergePermissionSets(_0x411fb4,((_0x38a2b6=_0x214edd[_0x24a3fb(0x1d1)])===null||_0x38a2b6===void 0x0?void 0x0:_0x38a2b6[_0x24a3fb(0x1e0)])||[]);}await replaceEnvironments(_0x548b54,_0x34f862,_0x16e979),await writeZip(_0x16e979,_0x53c81b),await generateAndWritePackageXML(_0x42ea08,_0x57679d,_0x53c81b,_0x429cda);_0x5bcdb0&&await saveDestructiveChanges(_0x5d3e07,_0x5bcdb0,DESTRUCTIVE_CHANGES_PER_NAME,_0x53c81b);_0x5c6863&&await saveDestructiveChanges(_0x5d3e07,_0x5c6863,DESTRUCTIVE_CHANGES_POST_NAME,_0x53c81b);const _0x4f3302=(await createDeployZip(_0x53c81b)[_0x24a3fb(0x1e3)](_0x1afd76=>{return _0x1afd76;}))['toBuffer']()['toString'](_0x24a3fb(0x1af)),_0x442f52=_0x4f3302[_0x24a3fb(0x1cd)];if(_0x442f52>=components_api_1['MAX_ZIP_SIZE']){const _0x3efb36=await createDeployZip(_0x53c81b),[_0x4407c3,_0x25f8c9]=await components_api_1[_0x24a3fb(0x1b6)][_0x24a3fb(0x1e5)](_0x3efb36,_0x442f52),_0xaab256=await insertZip(_0x5d3e07,_0x1ec624,_0x4219ab[_0x24a3fb(0x199)],_0x13b9a9,_0x4407c3[_0x24a3fb(0x1eb)]()[_0x24a3fb(0x1c5)](_0x24a3fb(0x1af)),_0x429cda),_0x4884e3=await insertZip(_0x5d3e07,_0x1ec624,_0x4219ab[_0x24a3fb(0x199)],_0x13b9a9,_0x25f8c9['toBuffer']()[_0x24a3fb(0x1c5)]('base64'),_0x429cda);return _0xaab256+','+_0x4884e3;}else return await insertZip(_0x5d3e07,_0x1ec624,_0x4219ab['orgId'],_0x13b9a9,_0x4f3302,_0x429cda);}catch(_0x5f35ac){throw _0x5f35ac;}finally{if(await fs_internal_1['FS'][_0x24a3fb(0x18c)](path_1[_0x24a3fb(0x1ea)]['join'](process[_0x24a3fb(0x1bd)](),'.temp',_0x53c81b)))await(0x0,promises_1['rm'])(path_1['default'][_0x24a3fb(0x195)](process[_0x24a3fb(0x1bd)](),_0x24a3fb(0x1d0),_0x53c81b),{'recursive':!![]});}}exports[a102_0x599f6e(0x1d3)]=generateAndDeployZip;async function getComponents(_0x43bee7,_0x3b023a,_0x1f0559){const _0x140928=a102_0x599f6e,_0x200984=[],_0x52912e=await(0x0,fetch_attachments_1[_0x140928(0x1b0)])(_0x43bee7,_0x3b023a);return await getComponentFromZip(_0x52912e,_0x1f0559)[_0x140928(0x1e3)](_0x44bb24=>{const _0x2bc3ec=_0x140928;_0x200984[_0x2bc3ec(0x19e)](..._0x44bb24);}),_0x200984;}async function getComponentFromZip(_0x9faa2b,_0x3430fa){const _0x1fd099=a102_0x599f6e,_0x6017ba=[];for(const _0x15e907 of _0x9faa2b){const _0x1052a6=await zip_1[_0x1fd099(0x1c0)][_0x1fd099(0x1e1)](_0x15e907['values']['Body']);for(const _0x555728 in _0x1052a6[_0x1fd099(0x1e2)]){!_0x1052a6['files'][_0x555728][_0x1fd099(0x191)]&&_0x6017ba[_0x1fd099(0x19e)]({'fileName':_0x555728['substring'](_0x555728[_0x1fd099(0x1c1)]('/')+0x1),'fileType':_0x3430fa[_0x15e907['id']],'body':_0x15e907[_0x1fd099(0x18d)]['Body']});}}return _0x6017ba;}async function removePermission(_0x1a8110,_0x41c5c2){const _0x3c6c24=a102_0x599f6e;for(const _0x21354d of _0x1a8110){const _0x1844c5=await zip_1[_0x3c6c24(0x1c0)][_0x3c6c24(0x1e1)](_0x21354d[_0x3c6c24(0x1bc)]),_0x457316=[];for(const _0x5b70bd in _0x1844c5['files']){!_0x1844c5['files'][_0x5b70bd]['dir']&&_0x457316[_0x3c6c24(0x19e)]({'fileName':_0x5b70bd,'body':await _0x1844c5['files'][_0x5b70bd][_0x3c6c24(0x1c2)](_0x3c6c24(0x193))});}const _0x1c901a=await(0x0,extract_component_permissions_1[_0x3c6c24(0x1b2)])(_0x457316[0x0][_0x3c6c24(0x1bc)][_0x3c6c24(0x1c5)](),_0x41c5c2,_0x21354d[_0x3c6c24(0x19c)]),_0x3dd139=new xml2js_1['Builder']({'xmldec':{'version':_0x3c6c24(0x1a9),'encoding':_0x3c6c24(0x1c6)}}),_0x537d0a=_0x3dd139['buildObject'](_0x1c901a),_0x4c5c77=zip_1[_0x3c6c24(0x1c0)][_0x3c6c24(0x19f)]();_0x4c5c77['file'](_0x457316[0x0][_0x3c6c24(0x192)],_0x537d0a),_0x21354d[_0x3c6c24(0x1bc)]=await _0x4c5c77['generateAsync']({'type':'base64','compression':_0x3c6c24(0x1b5),'compressionOptions':{'level':0x6}});}}async function retrieveTargetPermissionSets(_0x2dc41f,_0x31f16e,_0x141991){const _0x2f5464=a102_0x599f6e,_0x55ce26=_0x2dc41f['map'](_0x52b905=>PERMISSION_SET_FOLDER_NAME+'/'+_0x52b905['fileName'])[_0x2f5464(0x195)](';'),_0xe74b1c=[{'field':'fileName','option':salesforce_1['DeclarativeFilterOptions']['IN'],'value':_0x55ce26}],_0x31e076=new logger_1[(_0x2f5464(0x1d8))]();return new salesforce_1[(_0x2f5464(0x1e9))](_0x31f16e,_0x141991,_0x31e076,_0xe74b1c,null,[salesforce_1[_0x2f5464(0x1db)]['PERMISSION_SET']])[_0x2f5464(0x1b3)]();}async function mergePermissionSets(_0x16749f,_0x5237b3){const _0x7c21f=a102_0x599f6e,_0x49f80d=_0x5237b3['reduce']((_0x175b52,_0x4252b1)=>_0x175b52['set'](_0x4252b1['listMetadataItem']['fileName'],_0x4252b1),new Map());for(const _0x48b7ca of _0x16749f){const _0x51b255=PERMISSION_SET_FOLDER_NAME+'/'+_0x48b7ca[_0x7c21f(0x192)],_0x56b96d=_0x49f80d[_0x7c21f(0x190)](_0x51b255);if(!_0x56b96d)continue;const _0x59ceeb=await zip_1['Zip'][_0x7c21f(0x1e1)](_0x48b7ca[_0x7c21f(0x1bc)]),_0x5788b4=await _0x59ceeb[_0x7c21f(0x1e2)][_0x51b255]['async'](_0x7c21f(0x193)),_0x22c94e=_0x56b96d['files'][_0x51b255][_0x7c21f(0x1c5)](),_0x312655=await(0x0,extract_component_permissions_1['mergeComponentPermissions'])(_0x5788b4,_0x22c94e,_0x48b7ca[_0x7c21f(0x19c)]),_0x30250a=zip_1['Zip'][_0x7c21f(0x19f)]();_0x30250a[_0x7c21f(0x1ae)](_0x51b255,_0x312655),_0x48b7ca[_0x7c21f(0x1bc)]=await _0x30250a[_0x7c21f(0x1bb)]({'type':_0x7c21f(0x1af),'compression':_0x7c21f(0x1b5),'compressionOptions':{'level':0x6}});}}async function replaceEnvironments(_0x98a3be,_0x7d3d0c,_0x43a291){const _0x120e0b=a102_0x599f6e;for(const _0x2fe972 of _0x43a291){if(_0x98a3be['every'](_0x15710e=>_0x15710e!==_0x2fe972['fileType']))continue;const _0x4b5a37=await zip_1[_0x120e0b(0x1c0)][_0x120e0b(0x1e1)](_0x2fe972[_0x120e0b(0x1bc)]);for(const _0x531df8 in _0x4b5a37[_0x120e0b(0x1e2)]){if(!_0x4b5a37[_0x120e0b(0x1e2)][_0x531df8][_0x120e0b(0x191)]){let _0x234797=await _0x4b5a37[_0x120e0b(0x1e2)][_0x531df8][_0x120e0b(0x1c2)](_0x120e0b(0x193));for(const _0x583007 of Object['keys'](_0x7d3d0c)){const _0x148f08=new RegExp('%%'+_0x583007+'%%','g');_0x234797=_0x234797['replace'](_0x148f08,_0x7d3d0c[_0x583007]);}_0x4b5a37[_0x120e0b(0x1ae)](_0x531df8,_0x234797);}}_0x2fe972[_0x120e0b(0x1bc)]=await _0x4b5a37[_0x120e0b(0x1bb)]({'type':_0x120e0b(0x1af),'compression':_0x120e0b(0x1b5),'compressionOptions':{'level':0x6}});}}function a102_0x4041(){const _0x868e4e=['post','PartialRetrieve','default','toBuffer','exists','values','reduce','type','get','dir','fileName','text','addLocalFolder','join','Builder','@flosum/salesforce','/services/data/v','orgId','../../git/writers/mdapi.writer','10tzKodC','fileType','uuid','push','createZip','destructiveChangesPre.xml','MetadataConstants','ParentId','map','../../git/internal/fs.internal','(((.+)+)+)+$','DEPLOYZIP','MDApiWriter','../classes/logger','1.0','path','__esModule','../../git/parsers/utils/zip','BUILD','file','base64','retrieveAttachments','fetchAttachmentsDetailsById','extractComponentPermissions','execute','../utils/components-api','DEFLATE','ComponentsApi','name','search','__importDefault','../utils/extract-component-permissions','generateAsync','body','cwd','fetchAttachmentBody','FOLDER_TO_METADATA_TYPE_MAP','Zip','indexOf','async','destructiveChangesPost.xml','2809744KpUXaX','toString','UTF-8','1574032zdnJyZ','Name','232343FjkQYh','src','2GyVMZn','870633CLnyEQ','length','permissionsets','336RcukeP','.temp','PermissionSet','../../shared/utils/fetch-attachments','generateAndDeployZip','Profile','126643kBlJoh','2195683PoDvqB','filter','Logger','fs/promises','apply','MetadataType','buildObject','adm-zip','writeFile','package.xml','components','unzip','files','then','18220eOAOWs','splitZip','types','3lPDcBr'];a102_0x4041=function(){return _0x868e4e;};return a102_0x4041();}async function writeZip(_0x1bd408,_0x3786fa){const _0xdca724=a102_0x599f6e,_0x32c05b=new mdapi_writer_1[(_0xdca724(0x1a7))]({'components':_0x1bd408,'sourceDir':path_1['default'][_0xdca724(0x195)](process[_0xdca724(0x1bd)](),_0xdca724(0x1d0),_0x3786fa,DEPLOY_DIR_NAME,_0xdca724(0x1ca)),'skipChildErrors':![]});await _0x32c05b[_0xdca724(0x1b3)]();}async function generateAndWritePackageXML(_0x39775e,_0x5ce90f,_0x525b06,_0xb939fa){const _0x22eab2=a102_0x599f6e,_0x5d57f8=getComponentsTypeAndName(_0x39775e,_0x5ce90f),_0x123f44=[...new Set(_0x5d57f8[_0x22eab2(0x1a3)](_0x5caf31=>_0x5caf31[_0x22eab2(0x18f)]))],_0x48bc4f={'Package':{'$':{'xmlns':'http://soap.sforce.com/2006/04/metadata'},'types':[],'version':''+_0xb939fa}};for(const _0x518aa8 of _0x123f44){const _0x202e82=_0x5d57f8[_0x22eab2(0x1d7)](_0x878e71=>_0x878e71[_0x22eab2(0x18f)]===_0x518aa8)['map'](_0x57c962=>_0x57c962[_0x22eab2(0x1b7)]),_0xe064a7={'members':_0x202e82,'name':_0x518aa8};_0x48bc4f['Package'][_0x22eab2(0x1e6)][_0x22eab2(0x19e)](_0xe064a7);}const _0x3c18b2=new xml2js_1[(_0x22eab2(0x196))]({'xmldec':{'version':_0x22eab2(0x1a9),'encoding':_0x22eab2(0x1c6)}}),_0x3e9fd8=_0x3c18b2[_0x22eab2(0x1dc)](_0x48bc4f);await fs_internal_1['FS']['writeFile'](path_1['default']['join'](process['cwd'](),_0x22eab2(0x1d0),_0x525b06,DEPLOY_DIR_NAME,_0x22eab2(0x1ca),_0x22eab2(0x1df)),_0x3e9fd8);}function getComponentsTypeAndName(_0x3412f3,_0x4e7183){const _0x4e4e9d=a102_0x599f6e;return _0x3412f3[_0x4e4e9d(0x18e)]((_0x797af5,_0x62ef4)=>{const _0x21b86b=_0x4e4e9d,_0x3abb32=_0x4e7183['find'](_0x2fe798=>_0x2fe798['Id']===_0x62ef4[_0x21b86b(0x1a2)]);return _0x3abb32&&_0x797af5[_0x21b86b(0x19e)]({'name':_0x3abb32['Component__r']['Component_Name__c'],'type':salesforce_1[_0x21b86b(0x1a1)][_0x21b86b(0x1bf)][_0x62ef4[_0x21b86b(0x1c8)]]||_0x62ef4[_0x21b86b(0x1c8)]}),_0x797af5;},[]);}async function saveDestructiveChanges(_0xdacec9,_0x3def4e,_0x158582,_0x29e33c){const _0x330551=a102_0x599f6e,_0x3049e7=(await(0x0,fetch_attachments_1[_0x330551(0x1be)])(_0xdacec9,_0x3def4e))['toString']();await fs_internal_1['FS'][_0x330551(0x1de)](path_1[_0x330551(0x1ea)][_0x330551(0x195)](process[_0x330551(0x1bd)](),'.temp',_0x29e33c,DEPLOY_DIR_NAME,_0x330551(0x1ca),_0x158582),_0x3049e7);}async function createDeployZip(_0x4322a1){const _0x1f6b00=a102_0x599f6e,_0x5cf333=new adm_zip_1[(_0x1f6b00(0x1ea))]();return await _0x5cf333[_0x1f6b00(0x194)](path_1[_0x1f6b00(0x1ea)][_0x1f6b00(0x195)](process[_0x1f6b00(0x1bd)](),_0x1f6b00(0x1d0),_0x4322a1,DEPLOY_DIR_NAME)),_0x5cf333;}async function insertZip(_0x3d6d0c,_0x484ea6,_0x514eb9,_0x37f172,_0x236185,_0x691c6){const _0x2a4e73=a102_0x599f6e,_0x49f969={'ParentId':_0x484ea6,'Name':_0x2a4e73(0x1ad)+_0x514eb9,'Description':_0x2a4e73(0x1ad)+_0x37f172,'Body':_0x236185},{data:_0x5f533d}=await _0x3d6d0c[_0x2a4e73(0x1e8)](_0x2a4e73(0x198)+_0x691c6+'/sobjects/Attachment',_0x49f969);return _0x5f533d['id'];}