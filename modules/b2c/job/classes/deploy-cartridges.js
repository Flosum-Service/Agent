const a59_0x445b7a=a59_0x2915;(function(_0x42cff0,_0x3a3fb0){const _0x556e4b=a59_0x2915,_0xcb37da=_0x42cff0();while(!![]){try{const _0x408220=-parseInt(_0x556e4b(0x132))/0x1*(parseInt(_0x556e4b(0x133))/0x2)+parseInt(_0x556e4b(0x13c))/0x3*(-parseInt(_0x556e4b(0x156))/0x4)+-parseInt(_0x556e4b(0x143))/0x5*(parseInt(_0x556e4b(0x15e))/0x6)+parseInt(_0x556e4b(0x130))/0x7+parseInt(_0x556e4b(0x160))/0x8+-parseInt(_0x556e4b(0x162))/0x9*(parseInt(_0x556e4b(0x150))/0xa)+parseInt(_0x556e4b(0x12b))/0xb;if(_0x408220===_0x3a3fb0)break;else _0xcb37da['push'](_0xcb37da['shift']());}catch(_0x512f8b){_0xcb37da['push'](_0xcb37da['shift']());}}}(a59_0xcf10,0x3d9c4));const a59_0x2b5727=(function(){let _0x37600d=!![];return function(_0x558688,_0x2aaadb){const _0x6b775b=_0x37600d?function(){const _0x5e4da9=a59_0x2915;if(_0x2aaadb){const _0x340a7d=_0x2aaadb[_0x5e4da9(0x134)](_0x558688,arguments);return _0x2aaadb=null,_0x340a7d;}}:function(){};return _0x37600d=![],_0x6b775b;};}()),a59_0x198306=a59_0x2b5727(this,function(){const _0x5d7dab=a59_0x2915;return a59_0x198306['toString']()[_0x5d7dab(0x151)](_0x5d7dab(0x13a))[_0x5d7dab(0x153)]()[_0x5d7dab(0x13b)](a59_0x198306)[_0x5d7dab(0x151)](_0x5d7dab(0x13a));});a59_0x198306();function a59_0x2915(_0x16791a,_0xa6ab19){const _0x46da7f=a59_0xcf10();return a59_0x2915=function(_0x198306,_0x2b5727){_0x198306=_0x198306-0x12b;let _0xcf105a=_0x46da7f[_0x198306];return _0xcf105a;},a59_0x2915(_0x16791a,_0xa6ab19);}'use strict';var __importDefault=this&&this[a59_0x445b7a(0x14f)]||function(_0x292c76){return _0x292c76&&_0x292c76['__esModule']?_0x292c76:{'default':_0x292c76};};Object[a59_0x445b7a(0x149)](exports,a59_0x445b7a(0x147),{'value':!![]});const utils_1=require(a59_0x445b7a(0x154)),path_1=__importDefault(require(a59_0x445b7a(0x15b))),adm_zip_1=__importDefault(require(a59_0x445b7a(0x158))),SFCC=require(a59_0x445b7a(0x155));function a59_0xcf10(){const _0x1f3a9c=['auth','__importDefault','438350bIKoPe','search','cartridges','toString','./utils','sfcc-ci','876hgOBOa','Access\x20token\x20has\x20','adm-zip','\x27\x20code\x20version.','deploy','path','clientId','addLocalFolderAsync','78vYxlWN','logger','332656WFHVuW','been\x20recived.','9MZsleE','7102073aCZpIW','activateCodeVersion','clientSecret','log','deployCartridges','3516835FqAiUD','execute','1gSrErG','198254PwydOU','apply','credentials','Deploying\x20\x27','======\x20Activate\x20\x20','padEnd','.zip','(((.+)+)+)+$','constructor','4467vKlORa','instanceUrl','accessToken','isActivateCodeVersion','codeVersion','getAccessToken','activate','180085IYnkPt','code','not\x20','join','__esModule','/cartridges/','defineProperty','Compressing\x20cartridges\x20=>\x20\x27','default','jobPath','\x27\x20=>\x20\x27'];a59_0xcf10=function(){return _0x1f3a9c;};return a59_0xcf10();}class DeployCartridges{constructor(_0x2b62c4,_0x28250b,_0x449cf3,_0x4ceb86,_0x4144f0){const _0x35ee56=a59_0x445b7a;this[_0x35ee56(0x14c)]=_0x2b62c4,this['credentials']=_0x28250b,this['codeVersion']=_0x449cf3,this[_0x35ee56(0x13f)]=_0x4ceb86,this['logger']=_0x4144f0;const {instanceUrl:_0xe0cd86,clientId:_0x29793b,clientSecret:_0xabaacf}=this[_0x35ee56(0x135)];this['instanceUrl']=_0xe0cd86,this[_0x35ee56(0x15c)]=_0x29793b,this[_0x35ee56(0x12d)]=_0xabaacf;}async[a59_0x445b7a(0x12f)](){const _0x22f572=a59_0x445b7a,_0x3a223b=this['codeVersion']+_0x22f572(0x139),_0x5038b9=await this['createZipFile'](_0x3a223b);await this[_0x22f572(0x15f)]['log'](_0x22f572(0x136)+_0x3a223b+_0x22f572(0x14d)+this[_0x22f572(0x13d)]+_0x22f572(0x148)+this['codeVersion']+'\x27.'),await this['deploy'](_0x5038b9);}async['createZipFile'](_0x2d8501){const _0xbeb4cf=a59_0x445b7a,_0xc4c1fd=path_1[_0xbeb4cf(0x14b)][_0xbeb4cf(0x146)](this[_0xbeb4cf(0x14c)],_0xbeb4cf(0x152)),_0x532359=path_1['default'][_0xbeb4cf(0x146)](_0xc4c1fd,_0x2d8501);await this[_0xbeb4cf(0x15f)][_0xbeb4cf(0x12e)](_0xbeb4cf(0x14a)+_0x2d8501+'\x27.');const _0x1c67b3=new adm_zip_1[(_0xbeb4cf(0x14b))]();return await(0x0,utils_1[_0xbeb4cf(0x15d)])(_0x1c67b3,_0xc4c1fd,''+this[_0xbeb4cf(0x140)]),await(0x0,utils_1['writeZip'])(_0x1c67b3,_0x532359),_0x532359;}async[a59_0x445b7a(0x141)](){return new Promise((_0x2b0cc5,_0x25da4b)=>{const _0x3a0470=a59_0x2915;SFCC[_0x3a0470(0x14e)][_0x3a0470(0x14e)](this[_0x3a0470(0x15c)],this[_0x3a0470(0x12d)],(_0x1671a8,_0x251362)=>{_0x251362&&_0x2b0cc5(_0x251362),_0x1671a8&&_0x25da4b(_0x1671a8);});});}async[a59_0x445b7a(0x15a)](_0x41c451){return new Promise((_0x15fe83,_0x3243ed)=>{const _0x361e2c=a59_0x2915;SFCC[_0x361e2c(0x144)][_0x361e2c(0x15a)](this[_0x361e2c(0x13d)],_0x41c451,this[_0x361e2c(0x13e)],{},_0x5d4d8c=>{_0x5d4d8c?_0x3243ed(_0x5d4d8c):_0x15fe83();});});}async[a59_0x445b7a(0x142)](){return new Promise((_0x168423,_0x26dd43)=>{const _0x278725=a59_0x2915;SFCC[_0x278725(0x144)][_0x278725(0x142)](this['instanceUrl'],this[_0x278725(0x140)],this[_0x278725(0x13e)],_0x497a7e=>{_0x497a7e?_0x26dd43(_0x497a7e):_0x168423();});});}async[a59_0x445b7a(0x131)](){const _0x257064=a59_0x445b7a;this[_0x257064(0x13e)]=await this['getAccessToken'](),await this[_0x257064(0x15f)][_0x257064(0x12e)](_0x257064(0x157)+(!this[_0x257064(0x13e)]?_0x257064(0x145):'')+_0x257064(0x161)),await this[_0x257064(0x12f)](),this[_0x257064(0x13f)]&&await this['activateCodeVersion']();}async[a59_0x445b7a(0x12c)](){const _0x5f20df=a59_0x445b7a;await this['logger'][_0x5f20df(0x12e)](_0x5f20df(0x137)[_0x5f20df(0x138)](0x32,'=')),await this['logger'][_0x5f20df(0x12e)]('Activating\x20\x27'+this['codeVersion']+_0x5f20df(0x159)),await this[_0x5f20df(0x142)]();}}exports[a59_0x445b7a(0x14b)]=DeployCartridges;