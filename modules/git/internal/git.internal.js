const a126_0x1d9d11=a126_0x25fb;(function(_0x3a26fd,_0x416af1){const _0x5913b9=a126_0x25fb,_0x42833b=_0x3a26fd();while(!![]){try{const _0x14719f=parseInt(_0x5913b9(0x1af))/0x1*(parseInt(_0x5913b9(0x1dc))/0x2)+-parseInt(_0x5913b9(0x1c8))/0x3+-parseInt(_0x5913b9(0x1d6))/0x4*(-parseInt(_0x5913b9(0x1b4))/0x5)+parseInt(_0x5913b9(0x1a6))/0x6*(-parseInt(_0x5913b9(0x1c3))/0x7)+parseInt(_0x5913b9(0x195))/0x8+parseInt(_0x5913b9(0x1d8))/0x9+-parseInt(_0x5913b9(0x1de))/0xa*(parseInt(_0x5913b9(0x1b5))/0xb);if(_0x14719f===_0x416af1)break;else _0x42833b['push'](_0x42833b['shift']());}catch(_0x88b0bf){_0x42833b['push'](_0x42833b['shift']());}}}(a126_0xff3c,0x82148));function a126_0xff3c(){const _0x378090=['spawnPromise','./fs.internal','547314pzfMSi','replace','getProtocol','extractEmailFromCommitDescribe','BranchDto','\x20&&\x20git\x20config\x20--local\x20user.name\x20\x22','describe\x20commit\x20%s','://','\x20&&\x20git\x20show\x20--pretty=format:\x22Author:\x20%an%nEmail:\x20%ae%nMessage:\x20%s\x22\x20--name-status\x20','4AuasxO','log','extractMessageFromCommitDescribe','createEmptyBranch','\x20&&\x20git\x20remote\x20add\x20origin\x20','953605qlZCMd','690888ZugSII','add','map','__importDefault','\x20&&\x20git\x20checkout\x20','getGitShellAuthorizationString','__esModule','\x20--refs','baseDir','name','git\x20ls-remote\x20','../../../constants','test','create\x20empty\x20branch\x20at\x20%s\x20name\x20%s\x20[%s]','42xwvljN','@flosum/utils','logger','checkout','sha','2348196KpbUwl','clone\x20repository\x20branch\x20%s\x20to\x20%s','cd\x20','constructor','status','push\x20changes\x20to\x20%s','INITIAL_COMMIT','\x20&&\x20git\x20commit\x20-m\x20\x22','describeCommit','_repoPath','Git','join','\x22\x20&&\x20git\x20config\x20--local\x20user.email\x20\x22','cwd','4KvpmqS','search','8247699HWaRNL','\x20&&\x20git\x20checkout\x20--orphan\x20','apply','clean\x20up\x20repository\x20directory\x20after\x20creating\x20branch','363836odkBdm','getRepositoryBranches','130RZiXBD','DEFAULT_GIT_USER_NAME','push','.temp','toString','commit\x20message\x20\x22%s\x22','6756432tKZFmy','ChildProcessUtils','../providers/branches/dto/branch.dto','clone','../../../core','split','DEFAULT_CLONE_PATH','removeDir','setCredentials','gitUrl','default','\x22\x20--allow-empty','\x20&&\x20git\x20add\x20','../../shared/utils','getCurrentHash'];a126_0xff3c=function(){return _0x378090;};return a126_0xff3c();}function a126_0x25fb(_0x3380be,_0x2403ac){const _0x4b22d4=a126_0xff3c();return a126_0x25fb=function(_0x18b41c,_0x255453){_0x18b41c=_0x18b41c-0x191;let _0xff3c78=_0x4b22d4[_0x18b41c];return _0xff3c78;},a126_0x25fb(_0x3380be,_0x2403ac);}const a126_0x255453=(function(){let _0x34573c=!![];return function(_0x5da44e,_0x2f23a5){const _0x3ad6bc=_0x34573c?function(){const _0xb81b3e=a126_0x25fb;if(_0x2f23a5){const _0x18a78e=_0x2f23a5[_0xb81b3e(0x1da)](_0x5da44e,arguments);return _0x2f23a5=null,_0x18a78e;}}:function(){};return _0x34573c=![],_0x3ad6bc;};}()),a126_0x18b41c=a126_0x255453(this,function(){const _0x34db83=a126_0x25fb;return a126_0x18b41c['toString']()['search']('(((.+)+)+)+$')[_0x34db83(0x193)]()[_0x34db83(0x1cb)](a126_0x18b41c)[_0x34db83(0x1d7)]('(((.+)+)+)+$');});a126_0x18b41c();'use strict';var __importDefault=this&&this[a126_0x1d9d11(0x1b8)]||function(_0x252550){const _0x1b05e4=a126_0x1d9d11;return _0x252550&&_0x252550[_0x1b05e4(0x1bb)]?_0x252550:{'default':_0x252550};};Object['defineProperty'](exports,a126_0x1d9d11(0x1bb),{'value':!![]}),exports[a126_0x1d9d11(0x1d2)]=void 0x0;const constants_1=require(a126_0x1d9d11(0x1c0)),core_1=require(a126_0x1d9d11(0x199)),path_1=__importDefault(require('path')),branch_dto_1=require(a126_0x1d9d11(0x197)),utils_1=require(a126_0x1d9d11(0x1a2)),fs_internal_1=require(a126_0x1d9d11(0x1a5)),internal_utils_1=require('./internal.utils'),utils_2=require(a126_0x1d9d11(0x1c4));class Git{constructor(_0x3a6481){this['_repoPath']=_0x3a6481;}get[a126_0x1d9d11(0x1bd)](){const _0x4b3609=a126_0x1d9d11;return this[_0x4b3609(0x1d1)];}async[a126_0x1d9d11(0x19d)](_0x3601c9,_0x4ab5c2){const _0x3c4834=a126_0x1d9d11;await utils_2[_0x3c4834(0x196)][_0x3c4834(0x1a4)](_0x3c4834(0x1ca)+this[_0x3c4834(0x1d1)]+_0x3c4834(0x1ab)+_0x3601c9+_0x3c4834(0x1d4)+_0x4ab5c2+'\x22','');}async[a126_0x1d9d11(0x1b6)](..._0x5e043c){const _0x59c13b=a126_0x1d9d11;await utils_2[_0x59c13b(0x196)][_0x59c13b(0x1a4)](_0x59c13b(0x1ca)+this[_0x59c13b(0x1d1)]+_0x59c13b(0x1a1)+_0x5e043c[_0x59c13b(0x1d3)]('\x20'),'');}async[a126_0x1d9d11(0x1cc)](){const _0x4aa7af=a126_0x1d9d11;return utils_2[_0x4aa7af(0x196)][_0x4aa7af(0x1a4)](_0x4aa7af(0x1ca)+this[_0x4aa7af(0x1d1)]+'\x20&&\x20git\x20status','');}async['commit'](_0x399e11){const _0x396557=a126_0x1d9d11;Git['logger'][_0x396557(0x1b0)](_0x396557(0x194),_0x399e11),await utils_2[_0x396557(0x196)][_0x396557(0x1a4)]('cd\x20'+this['_repoPath']+'\x20&&\x20git\x20commit\x20-m\x20\x22'+_0x399e11+'\x22','');}async[a126_0x1d9d11(0x191)](_0x201a00){const _0x2b1755=a126_0x1d9d11;Git[_0x2b1755(0x1c5)]['log'](_0x2b1755(0x1cd),_0x201a00),await utils_2[_0x2b1755(0x196)][_0x2b1755(0x1a4)](_0x2b1755(0x1ca)+this['_repoPath']+'\x20&&\x20git\x20push\x20origin\x20'+_0x201a00+'\x20--quiet','');}async[a126_0x1d9d11(0x1c6)](_0xb12e57){const _0x308ce9=a126_0x1d9d11;Git[_0x308ce9(0x1c5)]['log']('checkout\x20to\x20%s',_0xb12e57),await utils_2[_0x308ce9(0x196)][_0x308ce9(0x1a4)]('cd\x20'+this['_repoPath']+_0x308ce9(0x1b9)+_0xb12e57,'');}async[a126_0x1d9d11(0x1a3)](){const _0x4d9081=a126_0x1d9d11,_0x5053c7=await utils_2[_0x4d9081(0x196)][_0x4d9081(0x1a4)]('cd\x20'+this[_0x4d9081(0x1d1)]+'\x20&&\x20git\x20rev-parse\x20HEAD','');return _0x5053c7[_0x4d9081(0x1a7)]('\x0a','');}async[a126_0x1d9d11(0x1d0)](_0x3fafe4){const _0x52401e=a126_0x1d9d11;Git[_0x52401e(0x1c5)][_0x52401e(0x1b0)](_0x52401e(0x1ac),_0x3fafe4);const _0x455f64=await utils_2['ChildProcessUtils'][_0x52401e(0x1a4)](_0x52401e(0x1ca)+this['_repoPath']+_0x52401e(0x1ae)+_0x3fafe4,'');return{'author':(0x0,internal_utils_1['extractAuthorFromCommitDescribe'])(_0x455f64),'email':(0x0,internal_utils_1[_0x52401e(0x1a9)])(_0x455f64),'message':(0x0,internal_utils_1[_0x52401e(0x1b1)])(_0x455f64),'changes':(0x0,internal_utils_1['extractChangesFromCommitDescribe'])(_0x455f64)};}static async['getRemoteHash'](_0x3c8920,_0x36dd52){const _0x5e8c8b=a126_0x1d9d11,[_0xd02a82]=await utils_2[_0x5e8c8b(0x196)][_0x5e8c8b(0x1a4)](_0x5e8c8b(0x1bf)+_0x3c8920+'\x20'+_0x36dd52+_0x5e8c8b(0x1bc),'')['then'](_0x1f2990=>_0x1f2990['replace'](/\s/g,'\x20')[_0x5e8c8b(0x19a)]('\x20'));return _0xd02a82;}static async[a126_0x1d9d11(0x198)](_0x540041,_0x310ee6,_0x298c35){const _0x2a0910=a126_0x1d9d11,_0x3b7188=path_1[_0x2a0910(0x19f)]['join'](this['DEFAULT_CLONE_PATH'],_0x310ee6),_0x368cfe=new Git(_0x3b7188);return Git[_0x2a0910(0x1c5)]['log'](_0x2a0910(0x1c9),_0x298c35,_0x3b7188),await fs_internal_1['FS'][_0x2a0910(0x19c)](_0x3b7188),await utils_2['ChildProcessUtils'][_0x2a0910(0x1a4)]('git\x20clone\x20-b\x20'+_0x298c35+'\x20--single-branch\x20'+_0x540041+'\x20'+_0x3b7188,''),_0x368cfe;}static async[a126_0x1d9d11(0x1dd)](_0x42b0aa,_0x270e66){const _0x5b0bdc=a126_0x1d9d11,_0x361eab=/(?:([a-f0-9]+)\s+((?:HEAD|refs\/heads\/).*))/,_0x5e835d=_0x42b0aa[_0x5b0bdc(0x19e)][_0x5b0bdc(0x1a7)](/http(s)?:\/\/(.+@)?/,(0x0,utils_1[_0x5b0bdc(0x1a8)])(_0x42b0aa['gitUrl'])+'://'+_0x270e66[_0x5b0bdc(0x1ba)]()+'@'),_0x133be7=await utils_2[_0x5b0bdc(0x196)][_0x5b0bdc(0x1a4)](_0x5b0bdc(0x1bf)+_0x5e835d,'');return _0x133be7[_0x5b0bdc(0x19a)]('\x0a')['filter'](_0x305740=>_0x361eab[_0x5b0bdc(0x1c1)](_0x305740))[_0x5b0bdc(0x1b7)](_0x39edc0=>{const _0x3c6dca=_0x5b0bdc,[,_0x393c1b,_0x527d26]=_0x39edc0['match'](_0x361eab),_0x3098f4=new branch_dto_1[(_0x3c6dca(0x1aa))]();return _0x3098f4[_0x3c6dca(0x1c7)]=_0x393c1b,_0x3098f4[_0x3c6dca(0x1be)]=_0x527d26[_0x3c6dca(0x1a7)]('refs/heads/',''),_0x3098f4;});}static async[a126_0x1d9d11(0x1b2)](_0x3fa3a5,_0x4d837d,_0x3874a9,_0x34f278){const _0x151970=a126_0x1d9d11,_0xaef29d=_0x3fa3a5['gitUrl']['replace'](/http(s)?:\/\/(.+@)?/,(0x0,utils_1['getProtocol'])(_0x3fa3a5[_0x151970(0x19e)])+_0x151970(0x1ad)+_0x34f278['getGitShellAuthorizationString']()+'@'),_0x52ef49=path_1[_0x151970(0x19f)][_0x151970(0x1d3)](this[_0x151970(0x19b)],_0x3fa3a5[_0x151970(0x1be)]);Git[_0x151970(0x1c5)][_0x151970(0x1b0)](_0x151970(0x1c2),_0x3fa3a5[_0x151970(0x1be)],_0x4d837d,_0x52ef49),await fs_internal_1['FS'][_0x151970(0x19c)](_0x52ef49),await fs_internal_1['FS']['makeDir'](_0x52ef49);const _0xe01b10=new Git(_0x52ef49);await utils_2[_0x151970(0x196)][_0x151970(0x1a4)]('cd\x20'+_0xe01b10[_0x151970(0x1bd)]+'\x20&&\x20git\x20init',''),await utils_2[_0x151970(0x196)][_0x151970(0x1a4)]('cd\x20'+_0xe01b10['baseDir']+_0x151970(0x1b3)+_0xaef29d,''),await _0xe01b10['setCredentials'](constants_1[_0x151970(0x1df)],constants_1['DEFAULT_GIT_USER_EMAIL']),await utils_2[_0x151970(0x196)]['spawnPromise']('cd\x20'+_0xe01b10[_0x151970(0x1bd)]+_0x151970(0x1d9)+_0x4d837d,''),await utils_2['ChildProcessUtils'][_0x151970(0x1a4)]('cd\x20'+_0xe01b10['baseDir']+_0x151970(0x1cf)+(_0x3874a9||constants_1[_0x151970(0x1ce)])+_0x151970(0x1a0),''),await _0xe01b10[_0x151970(0x191)](_0x4d837d),Git[_0x151970(0x1c5)][_0x151970(0x1b0)](_0x151970(0x1db)),await fs_internal_1['FS'][_0x151970(0x19c)](_0xe01b10[_0x151970(0x1bd)]);}}exports[a126_0x1d9d11(0x1d2)]=Git,Git[a126_0x1d9d11(0x19b)]=path_1[a126_0x1d9d11(0x19f)][a126_0x1d9d11(0x1d3)](process[a126_0x1d9d11(0x1d5)](),a126_0x1d9d11(0x192),'git'),Git[a126_0x1d9d11(0x1c5)]=new core_1['Logger'](Git[a126_0x1d9d11(0x1be)]);