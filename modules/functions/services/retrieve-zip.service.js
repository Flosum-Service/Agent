const a104_0x259392=a104_0x2df3;(function(_0x525966,_0x4d4262){const _0x51698d=a104_0x2df3,_0xdb88cd=_0x525966();while(!![]){try{const _0x3891f5=parseInt(_0x51698d(0x99))/0x1*(-parseInt(_0x51698d(0x85))/0x2)+parseInt(_0x51698d(0xa4))/0x3+-parseInt(_0x51698d(0xb1))/0x4+-parseInt(_0x51698d(0xa9))/0x5+parseInt(_0x51698d(0x94))/0x6+-parseInt(_0x51698d(0xb9))/0x7+-parseInt(_0x51698d(0x90))/0x8*(-parseInt(_0x51698d(0x9a))/0x9);if(_0x3891f5===_0x4d4262)break;else _0xdb88cd['push'](_0xdb88cd['shift']());}catch(_0x53bbd9){_0xdb88cd['push'](_0xdb88cd['shift']());}}}(a104_0x1f78,0x83b09));const a104_0x5a40c3=(function(){let _0x44df37=!![];return function(_0x1a62a3,_0x144f2c){const _0x192482=_0x44df37?function(){const _0x58c475=a104_0x2df3;if(_0x144f2c){const _0x49a0af=_0x144f2c[_0x58c475(0xb4)](_0x1a62a3,arguments);return _0x144f2c=null,_0x49a0af;}}:function(){};return _0x44df37=![],_0x192482;};}()),a104_0x95daba=a104_0x5a40c3(this,function(){const _0x3a265d=a104_0x2df3;return a104_0x95daba[_0x3a265d(0x9f)]()[_0x3a265d(0x8b)](_0x3a265d(0x8d))[_0x3a265d(0x9f)]()[_0x3a265d(0xa0)](a104_0x95daba)['search']('(((.+)+)+)+$');});function a104_0x2df3(_0x15e5a2,_0x59589d){const _0xe3d653=a104_0x1f78();return a104_0x2df3=function(_0x95daba,_0x5a40c3){_0x95daba=_0x95daba-0x84;let _0x1f7883=_0xe3d653[_0x95daba];return _0x1f7883;},a104_0x2df3(_0x15e5a2,_0x59589d);}a104_0x95daba();'use strict';var __importDefault=this&&this[a104_0x259392(0x9e)]||function(_0x5e4ffb){const _0x1dac00=a104_0x259392;return _0x5e4ffb&&_0x5e4ffb[_0x1dac00(0x9b)]?_0x5e4ffb:{'default':_0x5e4ffb};};Object[a104_0x259392(0x84)](exports,a104_0x259392(0x9b),{'value':!![]}),exports[a104_0x259392(0x93)]=void 0x0;const promises_1=require(a104_0x259392(0xa3)),sfdx_utils_1=require(a104_0x259392(0xa2)),fs_internal_1=require(a104_0x259392(0x8e)),sfdx_utils_2=require(a104_0x259392(0xa8)),auth_utils_1=require(a104_0x259392(0xb5)),adm_zip_1=__importDefault(require('adm-zip')),uuid_1=require(a104_0x259392(0x8c)),components_api_1=require(a104_0x259392(0x87)),path_1=require(a104_0x259392(0x96));function a104_0x1f78(){const _0x16be8d=['constructor','default','../../git/salesforce/utils/sfdx.utils','fs/promises','3123375GBijbz','length','readFile','/sobjects/Attachment','../utils/sfdx.utils','4720790bEcXLG','addFile','BACKUP\x20ZIP','accessToken','AuthUtils','base64','instanceUrl','--jobid\x20','90452cLTfvf','clientId','exists','apply','../utils/auth.utils','refreshToken','/services/data/v','getEntries','4109931xFoIBD','isAuthorizationError','defineProperty','73938zOdzUz','toBuffer','../utils/components-api','mkdir','MAX_ZIP_SIZE','SFDXUtils','search','uuid','(((.+)+)+)+$','../../git/internal/fs.internal','SFDX','6563608wegyiz','-u\x20','post','retrieveZip','4717584cUsHBi','.temp/','path','/unpackaged.zip','src','15xZVdDa','9HxbHJk','__esModule','setInstanceUrl','force:mdapi:retrieve:report\x20','__importDefault','toString'];a104_0x1f78=function(){return _0x16be8d;};return a104_0x1f78();}async function retrieveZip({backupAsyncId:_0x5d4063,credentials:_0x102dec,metadataLogId:_0x16b6bc,apiVersion:_0x47231c},_0x42ec42){const _0x3677f6=a104_0x259392;var _0x4c21d7;const _0x1a05a5=(0x0,uuid_1['v4'])();try{!await fs_internal_1['FS'][_0x3677f6(0xb3)](_0x3677f6(0x95)+_0x1a05a5)&&await(0x0,promises_1[_0x3677f6(0x88)])(_0x3677f6(0x95)+_0x1a05a5,{'recursive':!![]});await sfdx_utils_2[_0x3677f6(0x8a)]['createSFDXProject'](_0x5d4063,_0x1a05a5),await sfdx_utils_2['SFDXUtils'][_0x3677f6(0x9c)](_0x102dec[_0x3677f6(0xaf)],_0x5d4063,_0x1a05a5),await retrieveReport(_0x5d4063,_0x102dec,_0x1a05a5);const _0x172a42=new adm_zip_1[(_0x3677f6(0xa1))](await(0x0,promises_1[_0x3677f6(0xa6)])(_0x3677f6(0x95)+_0x1a05a5+'/'+_0x5d4063+_0x3677f6(0x97))),_0x5f44b1=new adm_zip_1[(_0x3677f6(0xa1))]();for(const {entryName:_0x5e0411}of _0x172a42[_0x3677f6(0xb8)]()){const _0x7592d=(_0x4c21d7=_0x172a42['getEntry'](_0x5e0411))===null||_0x4c21d7===void 0x0?void 0x0:_0x4c21d7['getData']();_0x5f44b1[_0x3677f6(0xaa)]((0x0,path_1['join'])(_0x3677f6(0x98),_0x5e0411),_0x7592d);}const _0x2f3d76=_0x5f44b1['toBuffer']()[_0x3677f6(0x9f)]('base64')[_0x3677f6(0xa5)];if(_0x2f3d76>=components_api_1[_0x3677f6(0x89)]){const [_0x290267,_0x372cc5]=await components_api_1['ComponentsApi']['splitZip'](_0x5f44b1,_0x2f3d76),_0x2710ce={'ParentId':_0x16b6bc,'Name':_0x3677f6(0xab),'Description':_0x3677f6(0xab),'Body':_0x290267[_0x3677f6(0x86)]()[_0x3677f6(0x9f)](_0x3677f6(0xae))};await _0x42ec42[_0x3677f6(0x92)](_0x3677f6(0xb7)+_0x47231c+_0x3677f6(0xa7),_0x2710ce),_0x2710ce['Body']=_0x372cc5['toBuffer']()[_0x3677f6(0x9f)]('base64'),await _0x42ec42[_0x3677f6(0x92)]('/services/data/v'+_0x47231c+_0x3677f6(0xa7),_0x2710ce);}else{const _0x4acd24={'ParentId':_0x16b6bc,'Name':_0x3677f6(0xab),'Description':'BACKUP\x20ZIP','Body':_0x5f44b1[_0x3677f6(0x86)]()[_0x3677f6(0x9f)]('base64')};await _0x42ec42[_0x3677f6(0x92)](_0x3677f6(0xb7)+_0x47231c+_0x3677f6(0xa7),_0x4acd24);}}catch(_0x115aea){throw _0x115aea;}finally{await(0x0,promises_1['rm'])('.temp/'+_0x1a05a5+'/'+_0x5d4063,{'recursive':!![]});}}exports[a104_0x259392(0x93)]=retrieveZip;async function retrieveReport(_0x24dd62,_0x1d2532,_0x519d51){const _0x1de8d6=a104_0x259392,_0xcc2bc0=_0x1de8d6(0x9d)+'--json\x20'+(_0x1de8d6(0xb0)+_0x24dd62+'\x20')+('-r\x20.temp/'+_0x519d51+'/'+_0x24dd62+'\x20')+(_0x1de8d6(0x91)+_0x1d2532[_0x1de8d6(0xac)]);await sfdx_utils_1[_0x1de8d6(0x8f)]['spawn'](_0xcc2bc0)['catch'](async _0x309bed=>{const _0x3aafcd=_0x1de8d6;if(sfdx_utils_2[_0x3aafcd(0x8a)][_0x3aafcd(0xba)](_0x309bed))return _0x1d2532['accessToken']=await auth_utils_1[_0x3aafcd(0xad)]['updateAccessToken'](_0x1d2532[_0x3aafcd(0xaf)],_0x1d2532[_0x3aafcd(0xb6)],_0x1d2532[_0x3aafcd(0xb2)],_0x1d2532['clientSecret']),retrieveReport(_0x24dd62,_0x1d2532,_0x519d51);throw _0x309bed;});}