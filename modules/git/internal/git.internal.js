const a126_0x32e5a3=a126_0x3c73;(function(_0x271a21,_0x216c50){const _0x58071e=a126_0x3c73,_0x4a80ca=_0x271a21();while(!![]){try{const _0x3f6162=-parseInt(_0x58071e(0x166))/0x1*(parseInt(_0x58071e(0x137))/0x2)+-parseInt(_0x58071e(0x14f))/0x3*(-parseInt(_0x58071e(0x13c))/0x4)+parseInt(_0x58071e(0x178))/0x5+-parseInt(_0x58071e(0x168))/0x6*(-parseInt(_0x58071e(0x162))/0x7)+parseInt(_0x58071e(0x139))/0x8*(parseInt(_0x58071e(0x14a))/0x9)+parseInt(_0x58071e(0x176))/0xa+-parseInt(_0x58071e(0x13e))/0xb;if(_0x3f6162===_0x216c50)break;else _0x4a80ca['push'](_0x4a80ca['shift']());}catch(_0x1eb18f){_0x4a80ca['push'](_0x4a80ca['shift']());}}}(a126_0x91c9,0xab6b4));function a126_0x91c9(){const _0x10f107=['Git','BranchDto','\x20&&\x20git\x20remote\x20add\x20origin\x20','create\x20empty\x20branch\x20at\x20%s\x20name\x20%s\x20[%s]','gitUrl','../../../constants','then','../../shared/utils','logger','commit','join','spawnPromise','git','148064TBQctg','name','extractChangesFromCommitDescribe','status','37977vDnTaS','\x20&&\x20git\x20checkout\x20--orphan\x20','78LhKlXI','baseDir','_repoPath','checkout\x20to\x20%s','\x20&&\x20git\x20add\x20','INITIAL_COMMIT','://','\x20&&\x20git\x20status','\x20&&\x20git\x20init','search','.temp','(((.+)+)+)+$','test','DEFAULT_GIT_USER_NAME','7663010aEceES','DEFAULT_GIT_USER_EMAIL','200645qMweWC','DEFAULT_CLONE_PATH','clone','\x20&&\x20git\x20checkout\x20','Logger','\x22\x20&&\x20git\x20config\x20--local\x20user.email\x20\x22','describe\x20commit\x20%s','\x20&&\x20git\x20show\x20--pretty=format:\x22Author:\x20%an%nEmail:\x20%ae%nMessage:\x20%s\x22\x20--name-status\x20','describeCommit','split','cwd','__importDefault','replace','34KbXkhr','getCurrentHash','112AKlzHo','extractMessageFromCommitDescribe','cd\x20','4omSAZv','log','12896070QjQSkz','removeDir','defineProperty','@flosum/utils','push\x20changes\x20to\x20%s','ChildProcessUtils','default','toString','\x20&&\x20git\x20push\x20origin\x20','createEmptyBranch','refs/heads/','commit\x20message\x20\x22%s\x22','148887RZmTNL','sha','../providers/branches/dto/branch.dto','map','setCredentials','3621309BmtLPL','getGitShellAuthorizationString','\x20--single-branch\x20','\x20&&\x20git\x20commit\x20-m\x20\x22','../../../core','getRemoteHash'];a126_0x91c9=function(){return _0x10f107;};return a126_0x91c9();}const a126_0x18895c=(function(){let _0x2c1854=!![];return function(_0x8c4dc9,_0x19c852){const _0x5175b3=_0x2c1854?function(){if(_0x19c852){const _0x319459=_0x19c852['apply'](_0x8c4dc9,arguments);return _0x19c852=null,_0x319459;}}:function(){};return _0x2c1854=![],_0x5175b3;};}()),a126_0x4bda36=a126_0x18895c(this,function(){const _0x32e9c0=a126_0x3c73;return a126_0x4bda36[_0x32e9c0(0x145)]()[_0x32e9c0(0x171)](_0x32e9c0(0x173))[_0x32e9c0(0x145)]()['constructor'](a126_0x4bda36)[_0x32e9c0(0x171)](_0x32e9c0(0x173));});a126_0x4bda36();function a126_0x3c73(_0x379d3d,_0x3aff){const _0x445fab=a126_0x91c9();return a126_0x3c73=function(_0x4bda36,_0x18895c){_0x4bda36=_0x4bda36-0x12b;let _0x91c940=_0x445fab[_0x4bda36];return _0x91c940;},a126_0x3c73(_0x379d3d,_0x3aff);}'use strict';var __importDefault=this&&this[a126_0x32e5a3(0x135)]||function(_0x370974){return _0x370974&&_0x370974['__esModule']?_0x370974:{'default':_0x370974};};Object[a126_0x32e5a3(0x140)](exports,'__esModule',{'value':!![]}),exports[a126_0x32e5a3(0x155)]=void 0x0;const constants_1=require(a126_0x32e5a3(0x15a)),core_1=require(a126_0x32e5a3(0x153)),path_1=__importDefault(require('path')),branch_dto_1=require(a126_0x32e5a3(0x14c)),utils_1=require(a126_0x32e5a3(0x15c)),fs_internal_1=require('./fs.internal'),internal_utils_1=require('./internal.utils'),utils_2=require(a126_0x32e5a3(0x141));class Git{constructor(_0x29c0bc){const _0x248ff3=a126_0x32e5a3;this[_0x248ff3(0x16a)]=_0x29c0bc;}get[a126_0x32e5a3(0x169)](){const _0x2fc7a7=a126_0x32e5a3;return this[_0x2fc7a7(0x16a)];}async[a126_0x32e5a3(0x14e)](_0x5591ae,_0x137aae){const _0x35df8d=a126_0x32e5a3;await utils_2[_0x35df8d(0x143)]['spawnPromise'](_0x35df8d(0x13b)+this[_0x35df8d(0x16a)]+'\x20&&\x20git\x20config\x20--local\x20user.name\x20\x22'+_0x5591ae+_0x35df8d(0x12f)+_0x137aae+'\x22','');}async['add'](..._0x29ce26){const _0x79d9db=a126_0x32e5a3;await utils_2['ChildProcessUtils'][_0x79d9db(0x160)](_0x79d9db(0x13b)+this['_repoPath']+_0x79d9db(0x16c)+_0x29ce26[_0x79d9db(0x15f)]('\x20'),'');}async[a126_0x32e5a3(0x165)](){const _0x1d59a0=a126_0x32e5a3;return utils_2['ChildProcessUtils'][_0x1d59a0(0x160)](_0x1d59a0(0x13b)+this[_0x1d59a0(0x16a)]+_0x1d59a0(0x16f),'');}async[a126_0x32e5a3(0x15e)](_0x38bcca){const _0x4bcd07=a126_0x32e5a3;Git[_0x4bcd07(0x15d)][_0x4bcd07(0x13d)](_0x4bcd07(0x149),_0x38bcca),await utils_2[_0x4bcd07(0x143)][_0x4bcd07(0x160)](_0x4bcd07(0x13b)+this[_0x4bcd07(0x16a)]+_0x4bcd07(0x152)+_0x38bcca+'\x22','');}async['push'](_0x3e1e46){const _0x45cb17=a126_0x32e5a3;Git[_0x45cb17(0x15d)][_0x45cb17(0x13d)](_0x45cb17(0x142),_0x3e1e46),await utils_2[_0x45cb17(0x143)][_0x45cb17(0x160)](_0x45cb17(0x13b)+this[_0x45cb17(0x16a)]+_0x45cb17(0x146)+_0x3e1e46+'\x20--quiet','');}async['checkout'](_0x2da29b){const _0xf07cfa=a126_0x32e5a3;Git[_0xf07cfa(0x15d)][_0xf07cfa(0x13d)](_0xf07cfa(0x16b),_0x2da29b),await utils_2[_0xf07cfa(0x143)]['spawnPromise']('cd\x20'+this[_0xf07cfa(0x16a)]+_0xf07cfa(0x12d)+_0x2da29b,'');}async[a126_0x32e5a3(0x138)](){const _0xe2387e=a126_0x32e5a3,_0xb2a560=await utils_2['ChildProcessUtils']['spawnPromise'](_0xe2387e(0x13b)+this[_0xe2387e(0x16a)]+'\x20&&\x20git\x20rev-parse\x20HEAD','');return _0xb2a560[_0xe2387e(0x136)]('\x0a','');}async[a126_0x32e5a3(0x132)](_0x51a5ab){const _0x5241f9=a126_0x32e5a3;Git[_0x5241f9(0x15d)][_0x5241f9(0x13d)](_0x5241f9(0x130),_0x51a5ab);const _0x40442a=await utils_2[_0x5241f9(0x143)]['spawnPromise'](_0x5241f9(0x13b)+this[_0x5241f9(0x16a)]+_0x5241f9(0x131)+_0x51a5ab,'');return{'author':(0x0,internal_utils_1['extractAuthorFromCommitDescribe'])(_0x40442a),'email':(0x0,internal_utils_1['extractEmailFromCommitDescribe'])(_0x40442a),'message':(0x0,internal_utils_1[_0x5241f9(0x13a)])(_0x40442a),'changes':(0x0,internal_utils_1[_0x5241f9(0x164)])(_0x40442a)};}static async[a126_0x32e5a3(0x154)](_0x19e804,_0x44bee8){const _0x535a65=a126_0x32e5a3,[_0x77cd8a]=await utils_2[_0x535a65(0x143)][_0x535a65(0x160)]('git\x20ls-remote\x20'+_0x19e804+'\x20'+_0x44bee8+'\x20--refs','')[_0x535a65(0x15b)](_0x478e47=>_0x478e47[_0x535a65(0x136)](/\s/g,'\x20')[_0x535a65(0x133)]('\x20'));return _0x77cd8a;}static async[a126_0x32e5a3(0x12c)](_0x433a1d,_0x834dbf,_0x540945){const _0x595fb8=a126_0x32e5a3,_0x151375=path_1[_0x595fb8(0x144)][_0x595fb8(0x15f)](this[_0x595fb8(0x12b)],_0x834dbf),_0x48b07c=new Git(_0x151375);return Git[_0x595fb8(0x15d)]['log']('clone\x20repository\x20branch\x20%s\x20to\x20%s',_0x540945,_0x151375),await fs_internal_1['FS']['removeDir'](_0x151375),await utils_2['ChildProcessUtils'][_0x595fb8(0x160)]('git\x20clone\x20-b\x20'+_0x540945+_0x595fb8(0x151)+_0x433a1d+'\x20'+_0x151375,''),_0x48b07c;}static async['getRepositoryBranches'](_0x355eea,_0x579a85){const _0x5167bb=a126_0x32e5a3,_0x35b105=/(?:([a-f0-9]+)\s+((?:HEAD|refs\/heads\/).*))/,_0x18b13a=_0x355eea[_0x5167bb(0x159)][_0x5167bb(0x136)](/http(s)?:\/\/(.+@)?/,(0x0,utils_1['getProtocol'])(_0x355eea[_0x5167bb(0x159)])+_0x5167bb(0x16e)+_0x579a85[_0x5167bb(0x150)]()+'@'),_0x6f1166=await utils_2['ChildProcessUtils'][_0x5167bb(0x160)]('git\x20ls-remote\x20'+_0x18b13a,'');return _0x6f1166[_0x5167bb(0x133)]('\x0a')['filter'](_0x469398=>_0x35b105[_0x5167bb(0x174)](_0x469398))[_0x5167bb(0x14d)](_0x2f0bd4=>{const _0x6d1deb=_0x5167bb,[,_0x503efa,_0x317937]=_0x2f0bd4['match'](_0x35b105),_0x175f4d=new branch_dto_1[(_0x6d1deb(0x156))]();return _0x175f4d[_0x6d1deb(0x14b)]=_0x503efa,_0x175f4d[_0x6d1deb(0x163)]=_0x317937['replace'](_0x6d1deb(0x148),''),_0x175f4d;});}static async[a126_0x32e5a3(0x147)](_0x4db2c4,_0x1ab850,_0x34fd93,_0x42a701){const _0x1d72d5=a126_0x32e5a3,_0x1ed04f=_0x4db2c4[_0x1d72d5(0x159)]['replace'](/http(s)?:\/\/(.+@)?/,(0x0,utils_1['getProtocol'])(_0x4db2c4[_0x1d72d5(0x159)])+_0x1d72d5(0x16e)+_0x42a701['getGitShellAuthorizationString']()+'@'),_0xdce821=path_1[_0x1d72d5(0x144)][_0x1d72d5(0x15f)](this['DEFAULT_CLONE_PATH'],_0x4db2c4[_0x1d72d5(0x163)]);Git[_0x1d72d5(0x15d)][_0x1d72d5(0x13d)](_0x1d72d5(0x158),_0x4db2c4[_0x1d72d5(0x163)],_0x1ab850,_0xdce821),await fs_internal_1['FS'][_0x1d72d5(0x13f)](_0xdce821),await fs_internal_1['FS']['makeDir'](_0xdce821);const _0x3f1df3=new Git(_0xdce821);await utils_2[_0x1d72d5(0x143)]['spawnPromise'](_0x1d72d5(0x13b)+_0x3f1df3[_0x1d72d5(0x169)]+_0x1d72d5(0x170),''),await utils_2['ChildProcessUtils'][_0x1d72d5(0x160)]('cd\x20'+_0x3f1df3[_0x1d72d5(0x169)]+_0x1d72d5(0x157)+_0x1ed04f,''),await _0x3f1df3['setCredentials'](constants_1[_0x1d72d5(0x175)],constants_1[_0x1d72d5(0x177)]),await utils_2['ChildProcessUtils'][_0x1d72d5(0x160)](_0x1d72d5(0x13b)+_0x3f1df3[_0x1d72d5(0x169)]+_0x1d72d5(0x167)+_0x1ab850,''),await utils_2[_0x1d72d5(0x143)]['spawnPromise'](_0x1d72d5(0x13b)+_0x3f1df3['baseDir']+'\x20&&\x20git\x20commit\x20-m\x20\x22'+(_0x34fd93||constants_1[_0x1d72d5(0x16d)])+'\x22\x20--allow-empty',''),await _0x3f1df3['push'](_0x1ab850),Git[_0x1d72d5(0x15d)][_0x1d72d5(0x13d)]('clean\x20up\x20repository\x20directory\x20after\x20creating\x20branch'),await fs_internal_1['FS'][_0x1d72d5(0x13f)](_0x3f1df3[_0x1d72d5(0x169)]);}}exports[a126_0x32e5a3(0x155)]=Git,Git[a126_0x32e5a3(0x12b)]=path_1[a126_0x32e5a3(0x144)][a126_0x32e5a3(0x15f)](process[a126_0x32e5a3(0x134)](),a126_0x32e5a3(0x172),a126_0x32e5a3(0x161)),Git[a126_0x32e5a3(0x15d)]=new core_1[(a126_0x32e5a3(0x12e))](Git[a126_0x32e5a3(0x163)]);