const a54_0x4e1cde=a54_0x105a;(function(_0x223f90,_0x3f09f2){const _0x5c678c=a54_0x105a,_0x42c537=_0x223f90();while(!![]){try{const _0x10b481=parseInt(_0x5c678c(0xbb))/0x1+parseInt(_0x5c678c(0xda))/0x2*(-parseInt(_0x5c678c(0x105))/0x3)+parseInt(_0x5c678c(0xe1))/0x4+-parseInt(_0x5c678c(0xe3))/0x5*(parseInt(_0x5c678c(0xe8))/0x6)+parseInt(_0x5c678c(0xf9))/0x7+parseInt(_0x5c678c(0xd5))/0x8+-parseInt(_0x5c678c(0xf0))/0x9*(parseInt(_0x5c678c(0xd4))/0xa);if(_0x10b481===_0x3f09f2)break;else _0x42c537['push'](_0x42c537['shift']());}catch(_0xcc7438){_0x42c537['push'](_0x42c537['shift']());}}}(a54_0x3c87,0xbfbc9));const a54_0x2d7cbd=(function(){let _0x63d1a4=!![];return function(_0xc008b,_0x19eecb){const _0x358152=_0x63d1a4?function(){const _0x4ad41f=a54_0x105a;if(_0x19eecb){const _0x201741=_0x19eecb[_0x4ad41f(0xcd)](_0xc008b,arguments);return _0x19eecb=null,_0x201741;}}:function(){};return _0x63d1a4=![],_0x358152;};}()),a54_0x5e9e53=a54_0x2d7cbd(this,function(){const _0x857b89=a54_0x105a;return a54_0x5e9e53['toString']()[_0x857b89(0xcc)](_0x857b89(0x100))[_0x857b89(0x10d)]()[_0x857b89(0xb5)](a54_0x5e9e53)['search']('(((.+)+)+)+$');});a54_0x5e9e53();function a54_0x3c87(){const _0x2faaf1=['toBuffer','http://soap.sforce.com/2006/04/metadata','Component__r','indexOf','push','replace','BUILD','10974362CAUWEo','dir','find','defineProperty','exists','1.0','unzip','(((.+)+)+)+$','name','length','reduce','extractComponentPermissions','312IJWNhJ','PermissionSet','after\x20create\x20second\x20zip','Name','fs/promises','generateAndDeployZip','path','Body','toString','retrieveAttachments','base64','body','__esModule','constructor','SALESFORCE_API_VERSION','DEPLOYZIP','addLocalFolder','then','../../git/parsers/mdapi','993466VVQXeR','ParentId','substring','../../git/internal/fs.internal','start','log','cwd','package.xml','writeFile','/services/data/','every','Package','.temp','uuid','adm-zip','../../../constants','xml2js','search','apply','Zip','destructiveChangesPre.xml','values','default','post','filter','492980aZpCOB','1991880wDzMoI','map','DEFLATE','types','files','17414WHkxYN','UTF-8','after\x20create\x20zip','join','../utils/extract-component-permissions','MAX_ZIP_SIZE','Builder','2736772mEfphe','text','5AKEIBA','ComponentsApi','Profile','file','orgId','7271718uIiFff','src','fileName','/sobjects/Attachment','fileType','generateAsync','destructiveChangesPost.xml','splitZip','108VbuQKx','type'];a54_0x3c87=function(){return _0x2faaf1;};return a54_0x3c87();}'use strict';var __importDefault=this&&this['__importDefault']||function(_0x260fa3){const _0x18bfb5=a54_0x105a;return _0x260fa3&&_0x260fa3[_0x18bfb5(0xb4)]?_0x260fa3:{'default':_0x260fa3};};Object[a54_0x4e1cde(0xfc)](exports,'__esModule',{'value':!![]}),exports[a54_0x4e1cde(0x10a)]=void 0x0;function a54_0x105a(_0x5917f7,_0x33a95c){const _0x5e378d=a54_0x3c87();return a54_0x105a=function(_0x5e9e53,_0x2d7cbd){_0x5e9e53=_0x5e9e53-0xb2;let _0x3c8791=_0x5e378d[_0x5e9e53];return _0x3c8791;},a54_0x105a(_0x5917f7,_0x33a95c);}const constants_1=require(a54_0x4e1cde(0xca)),path_1=__importDefault(require(a54_0x4e1cde(0x10b))),extract_component_permissions_1=require(a54_0x4e1cde(0xde)),xml2js_1=require(a54_0x4e1cde(0xcb)),zip_1=require('../../git/parsers/utils/zip'),mdapi_1=require(a54_0x4e1cde(0xba)),fs_internal_1=require(a54_0x4e1cde(0xbe)),promises_1=require(a54_0x4e1cde(0x109)),components_api_1=require('../utils/components-api'),adm_zip_1=__importDefault(require(a54_0x4e1cde(0xc9))),uuid_1=require(a54_0x4e1cde(0xc8)),DESTRUCTIVE_CHANGES_PER_NAME=a54_0x4e1cde(0xcf),DESTRUCTIVE_CHANGES_POST_NAME=a54_0x4e1cde(0xee),DEPLOY_DIR_NAME=a54_0x4e1cde(0xb7);async function generateAndDeployZip({attachmentsId:_0x1a1152,isExtractComponentsPermissions:_0x3194fa,preDestructiveAttachmentId:_0x19ac0c,postDestructiveAttachmentId:_0x1a8b82,branchId:_0x1f733e,credentials:_0x2a954b,metadataLogId:_0x1c652b,environments:_0x188cc1,metaTypes:_0x59520},_0x30d011){const _0x3ff38e=a54_0x4e1cde,_0x1bbcf1=(0x0,uuid_1['v4'])();try{const _0x55ff21=await components_api_1[_0x3ff38e(0xe4)]['fetchAttachmentsDetails'](_0x30d011,_0x1a1152),_0x535ba7=_0x55ff21[_0x3ff38e(0x103)]((_0xbbf687,_0x4b03bc)=>({..._0xbbf687,[_0x4b03bc['Id']]:_0x4b03bc[_0x3ff38e(0x108)]}),{}),_0x8e67ee=await getComponents(_0x55ff21,_0x30d011,_0x535ba7),_0x3272a8=await components_api_1[_0x3ff38e(0xe4)]['fetchComponentsDetailsByComponentsHistory'](_0x30d011,_0x55ff21[_0x3ff38e(0xd6)](({ParentId:_0x3a61c6})=>_0x3a61c6))[_0x3ff38e(0xb9)](_0x518956=>components_api_1[_0x3ff38e(0xe4)]['removeNamespacePrefix'](_0x518956));if(_0x3194fa){const _0x5707d9=_0x8e67ee[_0x3ff38e(0xd3)](({fileType:_0x5023ca})=>_0x5023ca===_0x3ff38e(0xe5)||_0x5023ca===_0x3ff38e(0x106));await removePermission(_0x5707d9,_0x3272a8);}await replaceEnvironments(_0x59520,_0x188cc1,_0x8e67ee),await writeZip(_0x8e67ee,_0x1bbcf1),await generateAndWritePackageXML(_0x55ff21,_0x3272a8,_0x1bbcf1);_0x19ac0c&&await saveDestructiveChanges(_0x30d011,_0x19ac0c,DESTRUCTIVE_CHANGES_PER_NAME,_0x1bbcf1);_0x1a8b82&&await saveDestructiveChanges(_0x30d011,_0x1a8b82,DESTRUCTIVE_CHANGES_POST_NAME,_0x1bbcf1);const _0x5f3ff1=(await createDeployZip(_0x1bbcf1)[_0x3ff38e(0xb9)](_0x5886ee=>{return _0x5886ee;}))[_0x3ff38e(0xf2)]()[_0x3ff38e(0x10d)](_0x3ff38e(0xb2));console[_0x3ff38e(0xc0)](_0x3ff38e(0xdc));const _0x54d469=_0x5f3ff1[_0x3ff38e(0x102)];if(_0x54d469>=components_api_1[_0x3ff38e(0xdf)]){const _0x2833b8=await createDeployZip(_0x1bbcf1);console[_0x3ff38e(0xc0)](_0x3ff38e(0x107));const [_0x159d1e,_0x42cb54]=await components_api_1[_0x3ff38e(0xe4)][_0x3ff38e(0xef)](_0x2833b8,_0x54d469),_0x552f35=await insertZip(_0x30d011,_0x1f733e,_0x2a954b[_0x3ff38e(0xe7)],_0x1c652b,_0x159d1e[_0x3ff38e(0xf2)]()['toString'](_0x3ff38e(0xb2))),_0x339994=await insertZip(_0x30d011,_0x1f733e,_0x2a954b[_0x3ff38e(0xe7)],_0x1c652b,_0x42cb54[_0x3ff38e(0xf2)]()[_0x3ff38e(0x10d)](_0x3ff38e(0xb2)));return _0x552f35+','+_0x339994;}else return await insertZip(_0x30d011,_0x1f733e,_0x2a954b['orgId'],_0x1c652b,_0x5f3ff1);}catch(_0x35e218){throw _0x35e218;}finally{if(await fs_internal_1['FS'][_0x3ff38e(0xfd)](path_1[_0x3ff38e(0xd1)][_0x3ff38e(0xdd)](process[_0x3ff38e(0xc1)](),'.temp',_0x1bbcf1)))await(0x0,promises_1['rm'])(path_1[_0x3ff38e(0xd1)][_0x3ff38e(0xdd)](process[_0x3ff38e(0xc1)](),_0x3ff38e(0xc7),_0x1bbcf1),{'recursive':!![]});}}exports[a54_0x4e1cde(0x10a)]=generateAndDeployZip;async function getComponents(_0x7c93df,_0x4e9cff,_0x2c5fcb){const _0x3e36a3=a54_0x4e1cde,_0x1f5597=[],_0x4ec303=await components_api_1[_0x3e36a3(0xe4)][_0x3e36a3(0x10e)](_0x7c93df,_0x4e9cff);return await getComponentFromZip(_0x4ec303,_0x2c5fcb)['then'](_0x50d5a8=>{_0x1f5597['push'](..._0x50d5a8);}),_0x1f5597;}async function getComponentFromZip(_0x392df2,_0x1afa9e){const _0x31b1b4=a54_0x4e1cde,_0x4dbc19=[];for(const _0x16142d of _0x392df2){const _0x4072cf=await zip_1[_0x31b1b4(0xce)][_0x31b1b4(0xff)](_0x16142d[_0x31b1b4(0xd0)][_0x31b1b4(0x10c)]);for(const _0x368eaa in _0x4072cf[_0x31b1b4(0xd9)]){!_0x4072cf[_0x31b1b4(0xd9)][_0x368eaa][_0x31b1b4(0xfa)]&&_0x4dbc19['push']({'fileName':_0x368eaa[_0x31b1b4(0xbd)](_0x368eaa[_0x31b1b4(0xf5)]('/')+0x1),'fileType':_0x1afa9e[_0x16142d['id']],'body':_0x16142d[_0x31b1b4(0xd0)]['Body']});}}return _0x4dbc19;}async function removePermission(_0x378745,_0x5ab76b){const _0x577aeb=a54_0x4e1cde;for(const _0x17af7e of _0x378745){const _0x41ae29=await zip_1[_0x577aeb(0xce)]['unzip'](_0x17af7e[_0x577aeb(0xb3)]),_0x67c279=[];for(const _0x19a33b in _0x41ae29[_0x577aeb(0xd9)]){!_0x41ae29[_0x577aeb(0xd9)][_0x19a33b][_0x577aeb(0xfa)]&&_0x67c279[_0x577aeb(0xf6)]({'fileName':_0x19a33b,'body':await _0x41ae29['files'][_0x19a33b]['async'](_0x577aeb(0xe2))});}const _0x9e5b29=await(0x0,extract_component_permissions_1[_0x577aeb(0x104)])(_0x67c279[0x0][_0x577aeb(0xb3)][_0x577aeb(0x10d)](),_0x5ab76b,_0x17af7e[_0x577aeb(0xec)]),_0x4b9262=new xml2js_1[(_0x577aeb(0xe0))]({'xmldec':{'version':_0x577aeb(0xfe),'encoding':_0x577aeb(0xdb)}}),_0xc0fb60=_0x4b9262['buildObject'](_0x9e5b29),_0x46db24=zip_1[_0x577aeb(0xce)]['createZip']();_0x46db24[_0x577aeb(0xe6)](_0x67c279[0x0][_0x577aeb(0xea)],_0xc0fb60),_0x17af7e['body']=await _0x46db24[_0x577aeb(0xed)]({'type':'base64','compression':_0x577aeb(0xd7),'compressionOptions':{'level':0x6}});}}async function replaceEnvironments(_0x392d5b,_0x388d0b,_0x2c2dea){const _0x41c60a=a54_0x4e1cde;for(const _0x18e7c3 of _0x2c2dea){if(_0x392d5b[_0x41c60a(0xc5)](_0x4479ae=>_0x4479ae!==_0x18e7c3[_0x41c60a(0xec)]))continue;const _0x5b199b=await zip_1[_0x41c60a(0xce)][_0x41c60a(0xff)](_0x18e7c3[_0x41c60a(0xb3)]);for(const _0x1cbb37 in _0x5b199b[_0x41c60a(0xd9)]){if(!_0x5b199b[_0x41c60a(0xd9)][_0x1cbb37][_0x41c60a(0xfa)]){let _0x3718b6=await _0x5b199b[_0x41c60a(0xd9)][_0x1cbb37]['async'](_0x41c60a(0xe2));for(const _0x433d23 of Object['keys'](_0x388d0b)){const _0x358d38=new RegExp('%%'+_0x433d23+'%%','g');_0x3718b6=_0x3718b6[_0x41c60a(0xf7)](_0x358d38,_0x388d0b[_0x433d23]);}_0x5b199b['file'](_0x1cbb37,_0x3718b6);}}_0x18e7c3[_0x41c60a(0xb3)]=await _0x5b199b[_0x41c60a(0xed)]({'type':_0x41c60a(0xb2),'compression':_0x41c60a(0xd7),'compressionOptions':{'level':0x6}});}}async function writeZip(_0x3b0f60,_0x443d4a){const _0x103ddd=a54_0x4e1cde,_0x332467=new mdapi_1['MDApiWriter']({'components':_0x3b0f60,'sourceDir':path_1[_0x103ddd(0xd1)]['join'](process[_0x103ddd(0xc1)](),_0x103ddd(0xc7),_0x443d4a,DEPLOY_DIR_NAME,'src'),'skipChildErrors':![]});await _0x332467[_0x103ddd(0xbf)]();}async function generateAndWritePackageXML(_0x293904,_0x194bd0,_0x2d24fc){const _0x572f5a=a54_0x4e1cde,_0x2e83b5=getComponentsTypeAndName(_0x293904,_0x194bd0),_0x397f86=[...new Set(_0x2e83b5[_0x572f5a(0xd6)](_0x1c3f23=>_0x1c3f23[_0x572f5a(0xf1)]))],_0x157ea6={'Package':{'$':{'xmlns':_0x572f5a(0xf3)},'types':[],'version':''+constants_1[_0x572f5a(0xb6)][_0x572f5a(0xbd)](0x1)}};for(const _0x3769b6 of _0x397f86){const _0x15c387=_0x2e83b5[_0x572f5a(0xd3)](_0x591914=>_0x591914[_0x572f5a(0xf1)]===_0x3769b6)[_0x572f5a(0xd6)](_0x40c13b=>_0x40c13b[_0x572f5a(0x101)]),_0x5acf03={'members':_0x15c387,'name':_0x3769b6};_0x157ea6[_0x572f5a(0xc6)][_0x572f5a(0xd8)][_0x572f5a(0xf6)](_0x5acf03);}const _0x2e0dc4=new xml2js_1[(_0x572f5a(0xe0))]({'xmldec':{'version':'1.0','encoding':_0x572f5a(0xdb)}}),_0x257bc4=_0x2e0dc4['buildObject'](_0x157ea6);await fs_internal_1['FS'][_0x572f5a(0xc3)](path_1[_0x572f5a(0xd1)][_0x572f5a(0xdd)](process['cwd'](),_0x572f5a(0xc7),_0x2d24fc,DEPLOY_DIR_NAME,_0x572f5a(0xe9),_0x572f5a(0xc2)),_0x257bc4);}function getComponentsTypeAndName(_0x26248b,_0x5e228d){const _0x291958=a54_0x4e1cde;return _0x26248b[_0x291958(0x103)]((_0x3b38c6,_0x3dae45)=>{const _0x31e222=_0x291958,_0x41a183=_0x5e228d[_0x31e222(0xfb)](_0x1c03ea=>_0x1c03ea['Id']===_0x3dae45[_0x31e222(0xbc)]);return _0x41a183&&_0x3b38c6[_0x31e222(0xf6)]({'name':_0x41a183[_0x31e222(0xf4)]['Component_Name__c'],'type':_0x3dae45[_0x31e222(0x108)]}),_0x3b38c6;},[]);}async function saveDestructiveChanges(_0x523324,_0x62e843,_0x5de9a0,_0x264c10){const _0x524034=a54_0x4e1cde,_0x176fcb=(await components_api_1[_0x524034(0xe4)]['fetchAttachmentBody'](_0x523324,_0x62e843))['toString']();await fs_internal_1['FS'][_0x524034(0xc3)](path_1[_0x524034(0xd1)]['join'](process[_0x524034(0xc1)](),'.temp',_0x264c10,DEPLOY_DIR_NAME,_0x524034(0xe9),_0x5de9a0),_0x176fcb);}async function createDeployZip(_0x39afe0){const _0x5b014e=a54_0x4e1cde,_0x31293d=new adm_zip_1['default']();return await _0x31293d[_0x5b014e(0xb8)](path_1[_0x5b014e(0xd1)][_0x5b014e(0xdd)](process[_0x5b014e(0xc1)](),_0x5b014e(0xc7),_0x39afe0,DEPLOY_DIR_NAME)),_0x31293d;}async function insertZip(_0xc638d9,_0xf25e05,_0x34778a,_0x40b0fd,_0x49e482){const _0x1de096=a54_0x4e1cde,_0x21ab4a={'ParentId':_0xf25e05,'Name':_0x1de096(0xf8)+_0x34778a,'Description':_0x1de096(0xf8)+_0x40b0fd,'Body':_0x49e482},{data:_0x2fc476}=await _0xc638d9[_0x1de096(0xd2)](_0x1de096(0xc4)+constants_1[_0x1de096(0xb6)]+_0x1de096(0xeb),_0x21ab4a);return _0x2fc476['id'];}