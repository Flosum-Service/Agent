const a86_0x710f01=a86_0x34de;(function(_0x4359cb,_0x46bf33){const _0x1da08f=a86_0x34de,_0x373590=_0x4359cb();while(!![]){try{const _0x37b205=-parseInt(_0x1da08f(0x14d))/0x1+-parseInt(_0x1da08f(0x14c))/0x2+parseInt(_0x1da08f(0x189))/0x3+parseInt(_0x1da08f(0x15e))/0x4+-parseInt(_0x1da08f(0x146))/0x5+parseInt(_0x1da08f(0x18e))/0x6*(-parseInt(_0x1da08f(0x15b))/0x7)+parseInt(_0x1da08f(0x192))/0x8;if(_0x37b205===_0x46bf33)break;else _0x373590['push'](_0x373590['shift']());}catch(_0xafd175){_0x373590['push'](_0x373590['shift']());}}}(a86_0x41cb,0x8e418));const a86_0x597073=(function(){let _0x220691=!![];return function(_0x3217e5,_0x4a10d9){const _0x226ab2=_0x220691?function(){const _0x34b98b=a86_0x34de;if(_0x4a10d9){const _0x109665=_0x4a10d9[_0x34b98b(0x138)](_0x3217e5,arguments);return _0x4a10d9=null,_0x109665;}}:function(){};return _0x220691=![],_0x226ab2;};}()),a86_0x3f3244=a86_0x597073(this,function(){const _0x2a39e9=a86_0x34de;return a86_0x3f3244[_0x2a39e9(0x157)]()['search'](_0x2a39e9(0x193))['toString']()['constructor'](a86_0x3f3244)[_0x2a39e9(0x177)](_0x2a39e9(0x193));});a86_0x3f3244();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x12e0a7){const _0x12f6b3=a86_0x34de;return _0x12e0a7&&_0x12e0a7[_0x12f6b3(0x187)]?_0x12e0a7:{'default':_0x12e0a7};};Object[a86_0x710f01(0x185)](exports,a86_0x710f01(0x187),{'value':!![]}),exports[a86_0x710f01(0x17c)]=void 0x0;const constants_1=require(a86_0x710f01(0x16e)),path_1=__importDefault(require('path')),extract_component_permissions_1=require('../utils/extract-component-permissions'),xml2js_1=require(a86_0x710f01(0x176)),zip_1=require(a86_0x710f01(0x175)),mdapi_1=require(a86_0x710f01(0x13c)),fs_internal_1=require(a86_0x710f01(0x18d)),promises_1=require(a86_0x710f01(0x160)),components_api_1=require(a86_0x710f01(0x143)),adm_zip_1=__importDefault(require(a86_0x710f01(0x184))),uuid_1=require(a86_0x710f01(0x154)),fetch_attachments_1=require(a86_0x710f01(0x14e)),DESTRUCTIVE_CHANGES_PER_NAME='destructiveChangesPre.xml',DESTRUCTIVE_CHANGES_POST_NAME=a86_0x710f01(0x178),DEPLOY_DIR_NAME=a86_0x710f01(0x191);function a86_0x34de(_0x251321,_0x4cf645){const _0x7c5b2a=a86_0x41cb();return a86_0x34de=function(_0x3f3244,_0x597073){_0x3f3244=_0x3f3244-0x138;let _0x41cb80=_0x7c5b2a[_0x3f3244];return _0x41cb80;},a86_0x34de(_0x251321,_0x4cf645);}async function generateAndDeployZip({attachmentsId:_0xf5614a,isExtractComponentsPermissions:_0x20d777,preDestructiveAttachmentId:_0x6226de,postDestructiveAttachmentId:_0x332b87,branchId:_0x132a60,credentials:_0x574e99,metadataLogId:_0x55b86c,environments:_0x31d579,metaTypes:_0x51b22e},_0x4ed02b){const _0x21acee=a86_0x710f01,_0x2cdd68=(0x0,uuid_1['v4'])();try{const _0x24f36b=await(0x0,fetch_attachments_1[_0x21acee(0x18a)])(_0x4ed02b,_0xf5614a),_0x324647=_0x24f36b[_0x21acee(0x15d)]((_0x334ac2,_0x66f22a)=>({..._0x334ac2,[_0x66f22a['Id']]:_0x66f22a[_0x21acee(0x18c)]}),{}),_0x555029=await getComponents(_0x24f36b,_0x4ed02b,_0x324647),_0x390ec4=await components_api_1['ComponentsApi'][_0x21acee(0x142)](_0x4ed02b,_0x24f36b[_0x21acee(0x155)](({ParentId:_0x11501a})=>_0x11501a))[_0x21acee(0x18f)](_0x32835c=>components_api_1[_0x21acee(0x170)][_0x21acee(0x16f)](_0x32835c));if(_0x20d777){const _0x235f40=_0x555029[_0x21acee(0x140)](({fileType:_0x39ecb0})=>_0x39ecb0==='Profile'||_0x39ecb0===_0x21acee(0x171));await removePermission(_0x235f40,_0x390ec4);}await replaceEnvironments(_0x51b22e,_0x31d579,_0x555029),await writeZip(_0x555029,_0x2cdd68),await generateAndWritePackageXML(_0x24f36b,_0x390ec4,_0x2cdd68);_0x6226de&&await saveDestructiveChanges(_0x4ed02b,_0x6226de,DESTRUCTIVE_CHANGES_PER_NAME,_0x2cdd68);_0x332b87&&await saveDestructiveChanges(_0x4ed02b,_0x332b87,DESTRUCTIVE_CHANGES_POST_NAME,_0x2cdd68);const _0x2bcb3a=(await createDeployZip(_0x2cdd68)[_0x21acee(0x18f)](_0x51bef4=>{return _0x51bef4;}))['toBuffer']()[_0x21acee(0x157)](_0x21acee(0x180));console['log'](_0x21acee(0x188));const _0x512d19=_0x2bcb3a[_0x21acee(0x13f)];if(_0x512d19>=components_api_1[_0x21acee(0x163)]){const _0x48988e=await createDeployZip(_0x2cdd68);console['log'](_0x21acee(0x15f));const [_0x2da571,_0x4ee641]=await components_api_1['ComponentsApi']['splitZip'](_0x48988e,_0x512d19),_0x251306=await insertZip(_0x4ed02b,_0x132a60,_0x574e99[_0x21acee(0x13d)],_0x55b86c,_0x2da571['toBuffer']()[_0x21acee(0x157)](_0x21acee(0x180))),_0x5183e6=await insertZip(_0x4ed02b,_0x132a60,_0x574e99[_0x21acee(0x13d)],_0x55b86c,_0x4ee641[_0x21acee(0x165)]()[_0x21acee(0x157)](_0x21acee(0x180)));return _0x251306+','+_0x5183e6;}else return await insertZip(_0x4ed02b,_0x132a60,_0x574e99[_0x21acee(0x13d)],_0x55b86c,_0x2bcb3a);}catch(_0x5df3f0){throw _0x5df3f0;}finally{if(await fs_internal_1['FS'][_0x21acee(0x13b)](path_1[_0x21acee(0x17a)][_0x21acee(0x172)](process[_0x21acee(0x144)](),_0x21acee(0x153),_0x2cdd68)))await(0x0,promises_1['rm'])(path_1[_0x21acee(0x17a)]['join'](process[_0x21acee(0x144)](),_0x21acee(0x153),_0x2cdd68),{'recursive':!![]});}}function a86_0x41cb(){const _0x10cbf7=['destructiveChangesPost.xml','BUILD','default','indexOf','generateAndDeployZip','find','dir','type','base64','DEFLATE','SALESFORCE_API_VERSION','package.xml','adm-zip','defineProperty','Package','__esModule','after\x20create\x20zip','1908117sgdoRu','fetchAttachmentsDetailsById','writeFile','Name','../../git/internal/fs.internal','198906gbtWol','then','addLocalFolder','DEPLOYZIP','13174184qKriYd','(((.+)+)+)+$','apply','/sobjects/Attachment','generateAsync','exists','../../git/parsers/mdapi','orgId','file','length','filter','unzip','fetchComponentsDetailsByComponentsHistory','../utils/components-api','cwd','fetchAttachmentBody','4579905PvcDXQ','retrieveAttachments','push','http://soap.sforce.com/2006/04/metadata','types','text','444518azsGIy','62649FoUYSS','../../shared/utils/fetch-attachments','src','fileType','body','files','.temp','uuid','map','name','toString','Zip','values','extractComponentPermissions','133CqRixN','ParentId','reduce','522504sfRfeE','after\x20create\x20second\x20zip','fs/promises','/services/data/','async','MAX_ZIP_SIZE','post','toBuffer','Builder','replace','UTF-8','1.0','Component_Name__c','MDApiWriter','buildObject','createZip','../../../constants','removeNamespacePrefix','ComponentsApi','PermissionSet','join','substring','start','../../git/parsers/utils/zip','xml2js','search'];a86_0x41cb=function(){return _0x10cbf7;};return a86_0x41cb();}exports['generateAndDeployZip']=generateAndDeployZip;async function getComponents(_0x443ebf,_0x29edd3,_0x2b9b4b){const _0x49aa52=a86_0x710f01,_0x49c093=[],_0x19f89b=await(0x0,fetch_attachments_1[_0x49aa52(0x147)])(_0x443ebf,_0x29edd3);return await getComponentFromZip(_0x19f89b,_0x2b9b4b)[_0x49aa52(0x18f)](_0x44b3af=>{const _0xc9db97=_0x49aa52;_0x49c093[_0xc9db97(0x148)](..._0x44b3af);}),_0x49c093;}async function getComponentFromZip(_0x44ffe7,_0x1927af){const _0x1dc602=a86_0x710f01,_0x990bbe=[];for(const _0x26d963 of _0x44ffe7){const _0x51b3d8=await zip_1['Zip'][_0x1dc602(0x141)](_0x26d963[_0x1dc602(0x159)]['Body']);for(const _0x1b69a6 in _0x51b3d8['files']){!_0x51b3d8[_0x1dc602(0x152)][_0x1b69a6][_0x1dc602(0x17e)]&&_0x990bbe[_0x1dc602(0x148)]({'fileName':_0x1b69a6['substring'](_0x1b69a6[_0x1dc602(0x17b)]('/')+0x1),'fileType':_0x1927af[_0x26d963['id']],'body':_0x26d963[_0x1dc602(0x159)]['Body']});}}return _0x990bbe;}async function removePermission(_0x384135,_0x2ed0dc){const _0x4b7fb3=a86_0x710f01;for(const _0x87cd3f of _0x384135){const _0x40cd76=await zip_1[_0x4b7fb3(0x158)][_0x4b7fb3(0x141)](_0x87cd3f[_0x4b7fb3(0x151)]),_0x116578=[];for(const _0x39332c in _0x40cd76[_0x4b7fb3(0x152)]){!_0x40cd76[_0x4b7fb3(0x152)][_0x39332c]['dir']&&_0x116578['push']({'fileName':_0x39332c,'body':await _0x40cd76[_0x4b7fb3(0x152)][_0x39332c][_0x4b7fb3(0x162)]('text')});}const _0x5c8a40=await(0x0,extract_component_permissions_1[_0x4b7fb3(0x15a)])(_0x116578[0x0][_0x4b7fb3(0x151)][_0x4b7fb3(0x157)](),_0x2ed0dc,_0x87cd3f[_0x4b7fb3(0x150)]),_0xb6266=new xml2js_1[(_0x4b7fb3(0x166))]({'xmldec':{'version':_0x4b7fb3(0x169),'encoding':'UTF-8'}}),_0x2303f9=_0xb6266[_0x4b7fb3(0x16c)](_0x5c8a40),_0xbbdb33=zip_1[_0x4b7fb3(0x158)][_0x4b7fb3(0x16d)]();_0xbbdb33[_0x4b7fb3(0x13e)](_0x116578[0x0]['fileName'],_0x2303f9),_0x87cd3f[_0x4b7fb3(0x151)]=await _0xbbdb33[_0x4b7fb3(0x13a)]({'type':_0x4b7fb3(0x180),'compression':_0x4b7fb3(0x181),'compressionOptions':{'level':0x6}});}}async function replaceEnvironments(_0x301604,_0x2d4b9f,_0x45f25f){const _0x28201c=a86_0x710f01;for(const _0x48ec0b of _0x45f25f){if(_0x301604['every'](_0x4e2427=>_0x4e2427!==_0x48ec0b[_0x28201c(0x150)]))continue;const _0x33922e=await zip_1[_0x28201c(0x158)][_0x28201c(0x141)](_0x48ec0b[_0x28201c(0x151)]);for(const _0x29d8cb in _0x33922e['files']){if(!_0x33922e[_0x28201c(0x152)][_0x29d8cb]['dir']){let _0xf21c4d=await _0x33922e['files'][_0x29d8cb][_0x28201c(0x162)](_0x28201c(0x14b));for(const _0xb7bec of Object['keys'](_0x2d4b9f)){const _0x34ce87=new RegExp('%%'+_0xb7bec+'%%','g');_0xf21c4d=_0xf21c4d[_0x28201c(0x167)](_0x34ce87,_0x2d4b9f[_0xb7bec]);}_0x33922e[_0x28201c(0x13e)](_0x29d8cb,_0xf21c4d);}}_0x48ec0b[_0x28201c(0x151)]=await _0x33922e[_0x28201c(0x13a)]({'type':'base64','compression':_0x28201c(0x181),'compressionOptions':{'level':0x6}});}}async function writeZip(_0x4b1417,_0x53b934){const _0x286ba9=a86_0x710f01,_0x161a1c=new mdapi_1[(_0x286ba9(0x16b))]({'components':_0x4b1417,'sourceDir':path_1['default'][_0x286ba9(0x172)](process['cwd'](),_0x286ba9(0x153),_0x53b934,DEPLOY_DIR_NAME,'src'),'skipChildErrors':![]});await _0x161a1c[_0x286ba9(0x174)]();}async function generateAndWritePackageXML(_0x285b22,_0x31f517,_0x449c79){const _0x14c09c=a86_0x710f01,_0x3c4559=getComponentsTypeAndName(_0x285b22,_0x31f517),_0x1864d0=[...new Set(_0x3c4559[_0x14c09c(0x155)](_0x41d536=>_0x41d536[_0x14c09c(0x17f)]))],_0x1b0a9e={'Package':{'$':{'xmlns':_0x14c09c(0x149)},'types':[],'version':''+constants_1[_0x14c09c(0x182)][_0x14c09c(0x173)](0x1)}};for(const _0x1616b4 of _0x1864d0){const _0x1d2119=_0x3c4559['filter'](_0x1c7845=>_0x1c7845[_0x14c09c(0x17f)]===_0x1616b4)[_0x14c09c(0x155)](_0x220f35=>_0x220f35[_0x14c09c(0x156)]),_0x202c2e={'members':_0x1d2119,'name':_0x1616b4};_0x1b0a9e[_0x14c09c(0x186)][_0x14c09c(0x14a)][_0x14c09c(0x148)](_0x202c2e);}const _0x428a2e=new xml2js_1[(_0x14c09c(0x166))]({'xmldec':{'version':'1.0','encoding':_0x14c09c(0x168)}}),_0x1777a3=_0x428a2e[_0x14c09c(0x16c)](_0x1b0a9e);await fs_internal_1['FS'][_0x14c09c(0x18b)](path_1[_0x14c09c(0x17a)][_0x14c09c(0x172)](process['cwd'](),_0x14c09c(0x153),_0x449c79,DEPLOY_DIR_NAME,_0x14c09c(0x14f),_0x14c09c(0x183)),_0x1777a3);}function getComponentsTypeAndName(_0x45a9d8,_0x117cb8){const _0x32e899=a86_0x710f01;return _0x45a9d8[_0x32e899(0x15d)]((_0x115c66,_0x5b137f)=>{const _0x31be83=_0x32e899,_0x2d1a54=_0x117cb8[_0x31be83(0x17d)](_0x13abda=>_0x13abda['Id']===_0x5b137f[_0x31be83(0x15c)]);return _0x2d1a54&&_0x115c66[_0x31be83(0x148)]({'name':_0x2d1a54['Component__r'][_0x31be83(0x16a)],'type':_0x5b137f['Name']}),_0x115c66;},[]);}async function saveDestructiveChanges(_0x19274a,_0x3f0cad,_0x1e4045,_0x3644d6){const _0x1aca6f=a86_0x710f01,_0x39941e=(await(0x0,fetch_attachments_1[_0x1aca6f(0x145)])(_0x19274a,_0x3f0cad))[_0x1aca6f(0x157)]();await fs_internal_1['FS']['writeFile'](path_1[_0x1aca6f(0x17a)]['join'](process[_0x1aca6f(0x144)](),_0x1aca6f(0x153),_0x3644d6,DEPLOY_DIR_NAME,_0x1aca6f(0x14f),_0x1e4045),_0x39941e);}async function createDeployZip(_0x31c0d8){const _0x22d85a=a86_0x710f01,_0x2c548d=new adm_zip_1[(_0x22d85a(0x17a))]();return await _0x2c548d[_0x22d85a(0x190)](path_1[_0x22d85a(0x17a)][_0x22d85a(0x172)](process[_0x22d85a(0x144)](),'.temp',_0x31c0d8,DEPLOY_DIR_NAME)),_0x2c548d;}async function insertZip(_0x2024cb,_0x2341a1,_0x236b2a,_0x188484,_0x147590){const _0x1b2194=a86_0x710f01,_0x338910={'ParentId':_0x2341a1,'Name':_0x1b2194(0x179)+_0x236b2a,'Description':_0x1b2194(0x179)+_0x188484,'Body':_0x147590},{data:_0x39c5e0}=await _0x2024cb[_0x1b2194(0x164)](_0x1b2194(0x161)+constants_1[_0x1b2194(0x182)]+_0x1b2194(0x139),_0x338910);return _0x39c5e0['id'];}