const a92_0x1a0853=a92_0x55b6;(function(_0x514262,_0x120cdb){const _0x11070a=a92_0x55b6,_0x3d3781=_0x514262();while(!![]){try{const _0xb7a4d0=-parseInt(_0x11070a(0xee))/0x1*(parseInt(_0x11070a(0x12b))/0x2)+-parseInt(_0x11070a(0x12a))/0x3*(-parseInt(_0x11070a(0x118))/0x4)+parseInt(_0x11070a(0x129))/0x5+-parseInt(_0x11070a(0x12e))/0x6*(parseInt(_0x11070a(0xfc))/0x7)+-parseInt(_0x11070a(0x110))/0x8*(parseInt(_0x11070a(0x117))/0x9)+-parseInt(_0x11070a(0xf3))/0xa+parseInt(_0x11070a(0xf6))/0xb;if(_0xb7a4d0===_0x120cdb)break;else _0x3d3781['push'](_0x3d3781['shift']());}catch(_0x18327f){_0x3d3781['push'](_0x3d3781['shift']());}}}(a92_0xc8ca,0x24b9c));const a92_0x55546e=(function(){let _0x41322b=!![];return function(_0x3c7102,_0x11a60b){const _0x21269e=_0x41322b?function(){if(_0x11a60b){const _0x3f523f=_0x11a60b['apply'](_0x3c7102,arguments);return _0x11a60b=null,_0x3f523f;}}:function(){};return _0x41322b=![],_0x21269e;};}()),a92_0x3ed7b8=a92_0x55546e(this,function(){const _0x3671b0=a92_0x55b6;return a92_0x3ed7b8[_0x3671b0(0x108)]()['search']('(((.+)+)+)+$')['toString']()[_0x3671b0(0x125)](a92_0x3ed7b8)['search'](_0x3671b0(0x100));});a92_0x3ed7b8();function a92_0xc8ca(){const _0x1e7a5b=['randomUUID','isExistsPath','getIsDone','queryBuilder','constructor','readable','POLL_INTERVAL','readEncryptedTempFile','49915SRfRTd','6SrBLIk','386xkigix','catch','get','8586hmqzQX','retrieve','execute','CryptoUtils','../job-detail','__importDefault','data','request','createReader','@flosum/utils','default','reduce','pipeline','FsUtils','fs/promises','jobStorePath','971hjZtkW','bind','_fieldsTypes','describe','BaseBulkRetrieve','2194350JdsqML','csv-parse','writeEncryptedTempFile','7232643sMmNpX','baseRetrievePayload','@flosum/salesforce','push','stream/promises','pipelineCallback','133bIHFmc','pull','destroy','createDecryptPipe','(((.+)+)+)+$','path','double','../../constants','percent','isPaused','stream','SALESFORCE_API_VERSION','toString','TEXT_CSV','csvParser','once','end','BaseRetrieve','handleError','createWriteStream','1336EWIpzi','__esModule','join','resume','createReadStream','then','currency','15561sMnajf','411404uxxUaq','pause','read','set','createEncryptPipe','readEncryptionVector','error','castCsvValue','parse'];a92_0xc8ca=function(){return _0x1e7a5b;};return a92_0xc8ca();}function a92_0x55b6(_0x220237,_0x4a5862){const _0x1fa8dd=a92_0xc8ca();return a92_0x55b6=function(_0x3ed7b8,_0x55546e){_0x3ed7b8=_0x3ed7b8-0xec;let _0xc8cacf=_0x1fa8dd[_0x3ed7b8];return _0xc8cacf;},a92_0x55b6(_0x220237,_0x4a5862);}'use strict';var __importDefault=this&&this[a92_0x1a0853(0x133)]||function(_0x3da17e){const _0x5c7e25=a92_0x1a0853;return _0x3da17e&&_0x3da17e[_0x5c7e25(0x111)]?_0x3da17e:{'default':_0x3da17e};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a92_0x1a0853(0xf2)]=void 0x0;const base_retrieve_1=require('./base-retrieve'),stream_1=require(a92_0x1a0853(0x106)),path_1=__importDefault(require(a92_0x1a0853(0x101))),utils_1=require(a92_0x1a0853(0x137)),promises_1=require(a92_0x1a0853(0xec)),fs_1=__importDefault(require('fs')),promises_2=require(a92_0x1a0853(0xfa)),crypto_1=require('crypto'),csv_parse_1=require(a92_0x1a0853(0xf4)),salesforce_1=require(a92_0x1a0853(0xf8)),job_detail_1=require(a92_0x1a0853(0x132)),constants_1=require(a92_0x1a0853(0x103));class BaseBulkRetrieve extends base_retrieve_1[a92_0x1a0853(0x10d)]{get[a92_0x1a0853(0xf7)](){const _0x2f5639=a92_0x1a0853;return{'queryBuilder':this[_0x2f5639(0x124)],'instance':this[_0x2f5639(0x135)],'api':constants_1[_0x2f5639(0x107)],'contentType':salesforce_1['BulkV1QueryContentType'][_0x2f5639(0x109)]};}async[a92_0x1a0853(0xfd)](){const _0x1a1812=a92_0x1a0853;var _0x2155ed,_0x2a5b0f;if(this[_0x1a1812(0x12f)][_0x1a1812(0x123)]()&&!((_0x2155ed=this[_0x1a1812(0x10a)])===null||_0x2155ed===void 0x0?void 0x0:_0x2155ed['isPaused']())){this[_0x1a1812(0xf9)](null);return;}if((_0x2a5b0f=this[_0x1a1812(0x10a)])===null||_0x2a5b0f===void 0x0?void 0x0:_0x2a5b0f[_0x1a1812(0x105)]()){this[_0x1a1812(0x10a)][_0x1a1812(0x113)]();return;}const _0x14809a=await this[_0x1a1812(0x12f)][_0x1a1812(0x130)]();if(!_0x14809a)return this[_0x1a1812(0xfd)]();await this[_0x1a1812(0x136)](_0x14809a);}async[a92_0x1a0853(0x136)](_0x58c9e9){const _0x38551d=a92_0x1a0853,_0x3f47aa=path_1['default'][_0x38551d(0x112)](job_detail_1[_0x38551d(0xed)],(0x0,crypto_1[_0x38551d(0x121)])()),_0x644248=(0x0,crypto_1[_0x38551d(0x121)])(),_0x4a09a1=await this[_0x38551d(0xf5)](_0x58c9e9,_0x3f47aa,_0x644248)[_0x38551d(0x115)](()=>this[_0x38551d(0x128)](_0x3f47aa,_0x644248)),_0x1e7f49={'columns':!![],'cast':this[_0x38551d(0x11f)][_0x38551d(0xef)](this)};this[_0x38551d(0x10a)]=(0x0,stream_1[_0x38551d(0x13a)])(_0x4a09a1,(0x0,csv_parse_1[_0x38551d(0x120)])(_0x1e7f49),this[_0x38551d(0xfb)][_0x38551d(0xef)](this,_0x3f47aa)),this[_0x38551d(0x10a)]['on'](_0x38551d(0x134),_0xf7c564=>{const _0x122dc2=_0x38551d;this[_0x122dc2(0x10a)][_0x122dc2(0x119)](),this[_0x122dc2(0xf9)](_0xf7c564);}),this['csvParser']['on'](_0x38551d(0x10c),async()=>{const _0x452802=_0x38551d;return await utils_1['FsUtils'][_0x452802(0x122)](_0x3f47aa)&&await(0x0,promises_1['rm'])(_0x3f47aa)[_0x452802(0x12c)](this[_0x452802(0x10e)]['bind'](this,null)),this['_read']();}),this['csvParser']['on']('error',this['pipelineCallback'][_0x38551d(0xef)](this,_0x3f47aa));}async[a92_0x1a0853(0xf5)](_0x1864f1,_0x3bf439,_0x5e33db){const _0x5e1fae=a92_0x1a0853,_0x430e81=fs_1[_0x5e1fae(0x138)][_0x5e1fae(0x10f)](_0x3bf439);await(0x0,promises_2[_0x5e1fae(0x13a)])(_0x1864f1,utils_1['CryptoUtils'][_0x5e1fae(0x11c)](_0x5e33db),_0x430e81);}async[a92_0x1a0853(0x128)](_0x128a34,_0x5538f4){const _0x9f6ac4=a92_0x1a0853,_0x2b2e94=fs_1[_0x9f6ac4(0x138)][_0x9f6ac4(0x114)](_0x128a34),_0x380e6a=await this[_0x9f6ac4(0x11d)](_0x2b2e94),_0x230fa8=utils_1[_0x9f6ac4(0x131)][_0x9f6ac4(0xff)](_0x5538f4,_0x380e6a);return(0x0,stream_1[_0x9f6ac4(0x13a)])(_0x2b2e94,_0x230fa8,this[_0x9f6ac4(0xfb)][_0x9f6ac4(0xef)](this,_0x128a34));}async[a92_0x1a0853(0xfb)](_0x12495b,_0x2f4617){const _0x5b41a4=a92_0x1a0853;_0x2f4617&&await this[_0x5b41a4(0x10e)](_0x12495b,_0x2f4617);}async[a92_0x1a0853(0x10e)](_0x5bfa37,_0x4fa859){const _0x4abdbe=a92_0x1a0853;_0x5bfa37&&await utils_1[_0x4abdbe(0x13b)][_0x4abdbe(0x122)](_0x5bfa37)&&await(0x0,promises_1['rm'])(_0x5bfa37)[_0x4abdbe(0x12c)](_0xf34974=>job_detail_1['systemLogger'][_0x4abdbe(0x11e)](_0xf34974)),this[_0x4abdbe(0xfe)](_0x4fa859);}async[a92_0x1a0853(0x11d)](_0xb6279f){return new Promise((_0x49788b,_0x3f6977)=>{const _0x49d984=a92_0x55b6;_0xb6279f[_0x49d984(0x10b)]('error',_0x3f6977),_0xb6279f['once'](_0x49d984(0x126),()=>{const _0x792786=_0x49d984,_0x4f4abf=_0xb6279f[_0x792786(0x11a)](0x10);_0x49788b(_0x4f4abf);});});}[a92_0x1a0853(0x11f)](_0x33aafa,{header:_0x3d52a9,column:_0x240704}){const _0x49e2b4=a92_0x1a0853;!this[_0x49e2b4(0xf0)]&&(this[_0x49e2b4(0xf0)]=this[_0x49e2b4(0xf1)]['fields'][_0x49e2b4(0x139)]((_0x44a343,{name:_0x15ef0a,type:_0x1fe3c8})=>_0x44a343[_0x49e2b4(0x11b)](_0x15ef0a,_0x1fe3c8),new Map()));if(_0x3d52a9)return _0x33aafa;if(!_0x33aafa)return null;switch(this[_0x49e2b4(0xf0)][_0x49e2b4(0x12d)](_0x240704)){case'datetime':return _0x33aafa['replace'](/\.\d{3}Z$/,'.000+0000');case'boolean':return _0x33aafa==='true';case _0x49e2b4(0x116):case _0x49e2b4(0x102):case'int':case _0x49e2b4(0x104):return+_0x33aafa;default:return _0x33aafa;}}}exports['BaseBulkRetrieve']=BaseBulkRetrieve,BaseBulkRetrieve[a92_0x1a0853(0x127)]=0x1388;