const a99_0x5ad790=a99_0x4091;(function(_0x35c06f,_0x509d64){const _0x2b0098=a99_0x4091,_0x5c59cf=_0x35c06f();while(!![]){try{const _0x2ec1cc=parseInt(_0x2b0098(0xac))/0x1*(parseInt(_0x2b0098(0x9e))/0x2)+parseInt(_0x2b0098(0x88))/0x3*(-parseInt(_0x2b0098(0xbb))/0x4)+parseInt(_0x2b0098(0x8c))/0x5+parseInt(_0x2b0098(0x92))/0x6+parseInt(_0x2b0098(0x9f))/0x7*(-parseInt(_0x2b0098(0xa2))/0x8)+parseInt(_0x2b0098(0x98))/0x9+-parseInt(_0x2b0098(0x91))/0xa;if(_0x2ec1cc===_0x509d64)break;else _0x5c59cf['push'](_0x5c59cf['shift']());}catch(_0x53631a){_0x5c59cf['push'](_0x5c59cf['shift']());}}}(a99_0x379e,0x4a230));const a99_0x1fc9cc=(function(){let _0x4b1642=!![];return function(_0x24b819,_0x5ac19d){const _0x42ac15=_0x4b1642?function(){const _0x2bdef3=a99_0x4091;if(_0x5ac19d){const _0x1dfbba=_0x5ac19d[_0x2bdef3(0x9d)](_0x24b819,arguments);return _0x5ac19d=null,_0x1dfbba;}}:function(){};return _0x4b1642=![],_0x42ac15;};}()),a99_0x21dd72=a99_0x1fc9cc(this,function(){const _0x5133a2=a99_0x4091;return a99_0x21dd72[_0x5133a2(0x81)]()['search'](_0x5133a2(0xa6))[_0x5133a2(0x81)]()[_0x5133a2(0xb2)](a99_0x21dd72)['search']('(((.+)+)+)+$');});a99_0x21dd72();'use strict';Object[a99_0x5ad790(0xa0)](exports,a99_0x5ad790(0xaf),{'value':!![]}),exports['GitCommitDto']=void 0x0;const errors_1=require('../../../../constants/errors'),bad_request_error_1=require('../../../../core/errors/bad-request.error');function a99_0x4091(_0x26e62f,_0x51d792){const _0x470829=a99_0x379e();return a99_0x4091=function(_0x21dd72,_0x1fc9cc){_0x21dd72=_0x21dd72-0x81;let _0x379eec=_0x470829[_0x21dd72];return _0x379eec;},a99_0x4091(_0x26e62f,_0x51d792);}function a99_0x379e(){const _0x564e6f=['username','x-event-key','html','name','refUpdates','97941yBDbgC','displayName','commits','repository','1784255LvHoaf','map','headers','changes','commitId','12211890ZKBzZR','3425946xopSfk','x-gitlab-event','clone','req','.git','git.push','3478212uizKWT','href','body','GitCommitDto','force','apply','4fHXyth','21nZLyDQ','defineProperty','BadRequestError','28304lAkPGk','pushedBy','fromAzure','http','(((.+)+)+)+$','git_http_url','replace','user_username','push','repo:push','126902zAVQGv','eventType','links','__esModule','ERR_UNSUPPORTED_EVENT','resource','constructor','branch','hash','fromGithub','x-github-event','new','Push\x20Hook','repositoryGit','clone_url','4NVHlDn','pusher','refs/heads/','toString','ref'];a99_0x379e=function(){return _0x564e6f;};return a99_0x379e();}class GitCommitDto{constructor(){const _0x386f10=a99_0x5ad790;this[_0x386f10(0x9c)]=![];}static['fromBitbucketServer'](_0x5c633d){const _0x28ba3b=a99_0x5ad790;var _0x5e503a,_0x9f41e4;if(_0x5c633d[_0x28ba3b(0x95)]['headers']['x-event-key']!=='repo:refs_changed')throw new bad_request_error_1[(_0x28ba3b(0xa1))](errors_1[_0x28ba3b(0xb0)]);const _0x3e0553=new GitCommitDto(),_0x41358a=_0x5c633d[_0x28ba3b(0x95)][_0x28ba3b(0x9a)];return _0x3e0553[_0x28ba3b(0x8b)]=_0x41358a[_0x28ba3b(0x8b)][_0x28ba3b(0x86)],_0x3e0553[_0x28ba3b(0xb3)]=_0x41358a[_0x28ba3b(0x8f)][0x0]['refId'][_0x28ba3b(0xa8)]('refs/heads/',''),_0x3e0553['repositoryGit']=(_0x9f41e4=(_0x5e503a=_0x41358a['repository'][_0x28ba3b(0xae)][_0x28ba3b(0x94)])===null||_0x5e503a===void 0x0?void 0x0:_0x5e503a['find'](_0x175a8e=>_0x175a8e[_0x28ba3b(0x86)]['startsWith'](_0x28ba3b(0xa5))))===null||_0x9f41e4===void 0x0?void 0x0:_0x9f41e4[_0x28ba3b(0x99)],_0x3e0553['username']=_0x41358a['actor']['displayName'],_0x3e0553[_0x28ba3b(0x8a)]=_0x41358a['changes']['map'](_0x58e1c1=>({'id':_0x58e1c1['toHash']})),_0x3e0553;}static['fromBitbucket'](_0x16b6f4){const _0x266293=a99_0x5ad790;if(_0x16b6f4['req'][_0x266293(0x8e)][_0x266293(0x84)]!==_0x266293(0xab))throw new bad_request_error_1[(_0x266293(0xa1))](errors_1[_0x266293(0xb0)]);const _0x4d0947=new GitCommitDto(),_0x33523b=_0x16b6f4[_0x266293(0x95)][_0x266293(0x9a)];return _0x4d0947[_0x266293(0x8b)]=_0x33523b[_0x266293(0x8b)][_0x266293(0x86)],_0x4d0947[_0x266293(0xb3)]=_0x33523b[_0x266293(0xaa)][_0x266293(0x8f)][0x0][_0x266293(0xb7)][_0x266293(0x86)][_0x266293(0xa8)]('refs/heads/',''),_0x4d0947[_0x266293(0xb9)]=_0x33523b[_0x266293(0x8b)][_0x266293(0xae)][_0x266293(0x85)][_0x266293(0x99)]+_0x266293(0x96),_0x4d0947[_0x266293(0x83)]='',_0x4d0947[_0x266293(0x8a)]=_0x33523b[_0x266293(0xaa)][_0x266293(0x8f)][_0x266293(0x8d)](_0x1c359f=>({'id':_0x1c359f[_0x266293(0xb7)]['target'][_0x266293(0xb4)]})),_0x4d0947;}static[a99_0x5ad790(0xa4)](_0x4f195b){const _0x35d546=a99_0x5ad790;if(_0x4f195b['req'][_0x35d546(0x9a)][_0x35d546(0xad)]!==_0x35d546(0x97))throw new bad_request_error_1[(_0x35d546(0xa1))](errors_1['ERR_UNSUPPORTED_EVENT']);const _0x156bcd=new GitCommitDto(),_0x128a82=_0x4f195b[_0x35d546(0x95)][_0x35d546(0x9a)][_0x35d546(0xb1)];return _0x156bcd[_0x35d546(0x8b)]=_0x128a82[_0x35d546(0x8b)][_0x35d546(0x86)],_0x156bcd[_0x35d546(0xb3)]=_0x128a82[_0x35d546(0x87)][0x0][_0x35d546(0x86)]['replace'](_0x35d546(0xbd),''),_0x156bcd[_0x35d546(0xb9)]=_0x128a82[_0x35d546(0x8b)]['remoteUrl'],_0x156bcd['username']=_0x128a82[_0x35d546(0xa3)][_0x35d546(0x89)],_0x156bcd['commits']=_0x128a82['commits'][_0x35d546(0x8d)](_0x1bad7d=>({'id':_0x1bad7d[_0x35d546(0x90)]})),_0x156bcd;}static['fromGitlab'](_0x236772){const _0x111bf4=a99_0x5ad790;if(_0x236772[_0x111bf4(0x95)][_0x111bf4(0x8e)][_0x111bf4(0x93)]!==_0x111bf4(0xb8))throw new bad_request_error_1[(_0x111bf4(0xa1))](errors_1[_0x111bf4(0xb0)]);const _0x5333fb=new GitCommitDto(),_0x1d0aee=_0x236772[_0x111bf4(0x95)][_0x111bf4(0x9a)];return _0x5333fb[_0x111bf4(0x8b)]=_0x1d0aee[_0x111bf4(0x8b)][_0x111bf4(0x86)],_0x5333fb[_0x111bf4(0xb3)]=_0x1d0aee[_0x111bf4(0x82)][_0x111bf4(0xa8)](_0x111bf4(0xbd),''),_0x5333fb[_0x111bf4(0xb9)]=_0x1d0aee[_0x111bf4(0x8b)][_0x111bf4(0xa7)],_0x5333fb['username']=_0x1d0aee[_0x111bf4(0xa9)],_0x5333fb['commits']=_0x1d0aee['commits'][_0x111bf4(0x8d)](_0x342a7b=>({'id':_0x342a7b['id']})),_0x5333fb;}static[a99_0x5ad790(0xb5)](_0x3c479e){const _0x245a1e=a99_0x5ad790;if(_0x3c479e['req'][_0x245a1e(0x8e)][_0x245a1e(0xb6)]!==_0x245a1e(0xaa))throw new bad_request_error_1[(_0x245a1e(0xa1))](errors_1[_0x245a1e(0xb0)]);const _0x266d04=new GitCommitDto(),_0x258136=_0x3c479e[_0x245a1e(0x95)][_0x245a1e(0x9a)];return _0x266d04[_0x245a1e(0x8b)]=_0x258136[_0x245a1e(0x8b)][_0x245a1e(0x86)],_0x266d04[_0x245a1e(0xb3)]=_0x258136[_0x245a1e(0x82)][_0x245a1e(0xa8)](_0x245a1e(0xbd),''),_0x266d04[_0x245a1e(0xb9)]=_0x258136[_0x245a1e(0x8b)][_0x245a1e(0xba)],_0x266d04[_0x245a1e(0x83)]=_0x258136[_0x245a1e(0xbc)][_0x245a1e(0x86)],_0x266d04[_0x245a1e(0x8a)]=_0x258136[_0x245a1e(0x8a)]['map'](_0x38b4eb=>({'id':_0x38b4eb['id']})),_0x266d04;}}exports[a99_0x5ad790(0x9b)]=GitCommitDto;