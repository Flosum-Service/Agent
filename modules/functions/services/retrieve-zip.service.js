function a87_0x47f3(){const _0x349c57=['--json\x20','fs/promises','toBuffer','base64','../utils/sfdx.utils','setInstanceUrl','defineProperty','../utils/auth.utils','SFDXUtils','path','../../git/internal/fs.internal','retrieveZip','instanceUrl','__importDefault','exists','length','(((.+)+)+)+$','__esModule','/services/data/','constructor','5423BJcgGK','force:mdapi:retrieve:report\x20','2008PSlrFJ','toString','-u\x20','spawn','search','adm-zip','refreshToken','../../../constants','-r\x20.temp/','10pGsgpq','3ehtpqc','MAX_ZIP_SIZE','15852xjGZyu','src','uuid','8408nGodOF','2228478jRwVum','getData','default','join','--jobid\x20','BACKUP\x20ZIP','../../git/salesforce/utils/sfdx.utils','Body','isAuthorizationError','.temp/','1aSUzER','getEntry','22687dhytpr','accessToken','/unpackaged.zip','apply','2461185ypoLjE','updateAccessToken','11293560BPzuMJ','catch','AuthUtils','clientId','post','SALESFORCE_API_VERSION','readFile','3234774RLkraX','splitZip'];a87_0x47f3=function(){return _0x349c57;};return a87_0x47f3();}const a87_0x5eed6e=a87_0x424d;function a87_0x424d(_0x4584c6,_0x52a0f3){const _0x35d111=a87_0x47f3();return a87_0x424d=function(_0x2d2746,_0x154c8d){_0x2d2746=_0x2d2746-0x145;let _0x47f3d1=_0x35d111[_0x2d2746];return _0x47f3d1;},a87_0x424d(_0x4584c6,_0x52a0f3);}(function(_0x378671,_0x3fe805){const _0x348137=a87_0x424d,_0x320baa=_0x378671();while(!![]){try{const _0x102593=-parseInt(_0x348137(0x148))/0x1*(parseInt(_0x348137(0x17f))/0x2)+-parseInt(_0x348137(0x179))/0x3*(parseInt(_0x348137(0x17e))/0x4)+-parseInt(_0x348137(0x178))/0x5*(-parseInt(_0x348137(0x157))/0x6)+-parseInt(_0x348137(0x14a))/0x7*(-parseInt(_0x348137(0x16f))/0x8)+parseInt(_0x348137(0x14e))/0x9+-parseInt(_0x348137(0x150))/0xa+parseInt(_0x348137(0x16d))/0xb*(parseInt(_0x348137(0x17b))/0xc);if(_0x102593===_0x3fe805)break;else _0x320baa['push'](_0x320baa['shift']());}catch(_0xcb16f6){_0x320baa['push'](_0x320baa['shift']());}}}(a87_0x47f3,0x8b592));const a87_0x154c8d=(function(){let _0x44f9af=!![];return function(_0x4567b4,_0x2f54f6){const _0x2d319e=_0x44f9af?function(){const _0x2c2abd=a87_0x424d;if(_0x2f54f6){const _0xa22852=_0x2f54f6[_0x2c2abd(0x14d)](_0x4567b4,arguments);return _0x2f54f6=null,_0xa22852;}}:function(){};return _0x44f9af=![],_0x2d319e;};}()),a87_0x2d2746=a87_0x154c8d(this,function(){const _0x3bf854=a87_0x424d;return a87_0x2d2746[_0x3bf854(0x170)]()[_0x3bf854(0x173)](_0x3bf854(0x169))[_0x3bf854(0x170)]()[_0x3bf854(0x16c)](a87_0x2d2746)[_0x3bf854(0x173)](_0x3bf854(0x169));});a87_0x2d2746();'use strict';var __importDefault=this&&this[a87_0x5eed6e(0x166)]||function(_0x19fb48){const _0x1cde4d=a87_0x5eed6e;return _0x19fb48&&_0x19fb48[_0x1cde4d(0x16a)]?_0x19fb48:{'default':_0x19fb48};};Object[a87_0x5eed6e(0x15f)](exports,a87_0x5eed6e(0x16a),{'value':!![]}),exports[a87_0x5eed6e(0x164)]=void 0x0;const constants_1=require(a87_0x5eed6e(0x176)),promises_1=require(a87_0x5eed6e(0x15a)),sfdx_utils_1=require(a87_0x5eed6e(0x185)),fs_internal_1=require(a87_0x5eed6e(0x163)),sfdx_utils_2=require(a87_0x5eed6e(0x15d)),auth_utils_1=require(a87_0x5eed6e(0x160)),adm_zip_1=__importDefault(require(a87_0x5eed6e(0x174))),uuid_1=require(a87_0x5eed6e(0x17d)),components_api_1=require('../utils/components-api'),path_1=require(a87_0x5eed6e(0x162));async function retrieveZip({backupAsyncId:_0x26ca71,credentials:_0x2888e1,metadataLogId:_0x299e7b},_0x1eeada){const _0x268c67=a87_0x5eed6e;var _0x327066;const _0x3a2f68=(0x0,uuid_1['v4'])();try{!await fs_internal_1['FS'][_0x268c67(0x167)](_0x268c67(0x147)+_0x3a2f68)&&await(0x0,promises_1['mkdir'])(_0x268c67(0x147)+_0x3a2f68,{'recursive':!![]});await sfdx_utils_2[_0x268c67(0x161)]['createSFDXProject'](_0x26ca71,_0x3a2f68),await sfdx_utils_2['SFDXUtils'][_0x268c67(0x15e)](_0x2888e1[_0x268c67(0x165)],_0x26ca71,_0x3a2f68),await retrieveReport(_0x26ca71,_0x2888e1,_0x3a2f68);const _0x10f47f=new adm_zip_1['default'](await(0x0,promises_1[_0x268c67(0x156)])(_0x268c67(0x147)+_0x3a2f68+'/'+_0x26ca71+_0x268c67(0x14c))),_0x2cd688=new adm_zip_1[(_0x268c67(0x181))]();for(const {entryName:_0x15a3a2}of _0x10f47f['getEntries']()){const _0x54b08e=(_0x327066=_0x10f47f[_0x268c67(0x149)](_0x15a3a2))===null||_0x327066===void 0x0?void 0x0:_0x327066[_0x268c67(0x180)]();_0x2cd688['addFile']((0x0,path_1[_0x268c67(0x182)])(_0x268c67(0x17c),_0x15a3a2),_0x54b08e);}const _0x311b6b=_0x2cd688[_0x268c67(0x15b)]()['toString'](_0x268c67(0x15c))[_0x268c67(0x168)];if(_0x311b6b>=components_api_1[_0x268c67(0x17a)]){const [_0x478a2b,_0x6cf912]=await components_api_1['ComponentsApi'][_0x268c67(0x158)](_0x2cd688,_0x311b6b),_0x4c9055={'ParentId':_0x299e7b,'Name':_0x268c67(0x184),'Description':_0x268c67(0x184),'Body':_0x478a2b[_0x268c67(0x15b)]()[_0x268c67(0x170)](_0x268c67(0x15c))};await _0x1eeada[_0x268c67(0x154)](_0x268c67(0x16b)+constants_1[_0x268c67(0x155)]+'/sobjects/Attachment',_0x4c9055),_0x4c9055[_0x268c67(0x145)]=_0x6cf912[_0x268c67(0x15b)]()['toString'](_0x268c67(0x15c)),await _0x1eeada[_0x268c67(0x154)]('/services/data/'+constants_1[_0x268c67(0x155)]+'/sobjects/Attachment',_0x4c9055);}else{const _0x44ac45={'ParentId':_0x299e7b,'Name':_0x268c67(0x184),'Description':_0x268c67(0x184),'Body':_0x2cd688[_0x268c67(0x15b)]()[_0x268c67(0x170)]('base64')};await _0x1eeada[_0x268c67(0x154)](_0x268c67(0x16b)+constants_1['SALESFORCE_API_VERSION']+'/sobjects/Attachment',_0x44ac45);}}catch(_0x303c64){throw _0x303c64;}finally{await(0x0,promises_1['rm'])(_0x268c67(0x147)+_0x3a2f68+'/'+_0x26ca71,{'recursive':!![]});}}exports[a87_0x5eed6e(0x164)]=retrieveZip;async function retrieveReport(_0x27927b,_0x4c29f6,_0x12140e){const _0x7cee61=a87_0x5eed6e,_0x75cc03=_0x7cee61(0x16e)+_0x7cee61(0x159)+(_0x7cee61(0x183)+_0x27927b+'\x20')+(_0x7cee61(0x177)+_0x12140e+'/'+_0x27927b+'\x20')+(_0x7cee61(0x171)+_0x4c29f6[_0x7cee61(0x14b)]);await sfdx_utils_1['SFDX'][_0x7cee61(0x172)](_0x75cc03)[_0x7cee61(0x151)](async _0x8c216b=>{const _0x361f4f=_0x7cee61;if(sfdx_utils_2[_0x361f4f(0x161)][_0x361f4f(0x146)](_0x8c216b))return _0x4c29f6[_0x361f4f(0x14b)]=await auth_utils_1[_0x361f4f(0x152)][_0x361f4f(0x14f)](_0x4c29f6[_0x361f4f(0x165)],_0x4c29f6[_0x361f4f(0x175)],_0x4c29f6[_0x361f4f(0x153)],_0x4c29f6['clientSecret']),retrieveReport(_0x27927b,_0x4c29f6,_0x12140e);throw _0x8c216b;});}