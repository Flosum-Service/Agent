const a101_0x5e75de=a101_0x2469;(function(_0x431435,_0x4a63de){const _0x5a7aa4=a101_0x2469,_0x2aee1d=_0x431435();while(!![]){try{const _0x2238d2=parseInt(_0x5a7aa4(0x89))/0x1+-parseInt(_0x5a7aa4(0xa4))/0x2+parseInt(_0x5a7aa4(0x86))/0x3+-parseInt(_0x5a7aa4(0xa7))/0x4+-parseInt(_0x5a7aa4(0xb4))/0x5+parseInt(_0x5a7aa4(0x87))/0x6*(parseInt(_0x5a7aa4(0x80))/0x7)+-parseInt(_0x5a7aa4(0xa8))/0x8;if(_0x2238d2===_0x4a63de)break;else _0x2aee1d['push'](_0x2aee1d['shift']());}catch(_0x33b7c8){_0x2aee1d['push'](_0x2aee1d['shift']());}}}(a101_0x21b4,0xa2c91));const a101_0x57f8ef=(function(){let _0x5a5614=!![];return function(_0x1b6ae8,_0x543d52){const _0x16cbce=_0x5a5614?function(){const _0x5452cc=a101_0x2469;if(_0x543d52){const _0x15fec9=_0x543d52[_0x5452cc(0x96)](_0x1b6ae8,arguments);return _0x543d52=null,_0x15fec9;}}:function(){};return _0x5a5614=![],_0x16cbce;};}()),a101_0x5374a6=a101_0x57f8ef(this,function(){const _0x57ea07=a101_0x2469;return a101_0x5374a6[_0x57ea07(0xa6)]()['search']('(((.+)+)+)+$')[_0x57ea07(0xa6)]()['constructor'](a101_0x5374a6)[_0x57ea07(0x9e)](_0x57ea07(0xa3));});a101_0x5374a6();function a101_0x2469(_0x40c41b,_0x58ffcb){const _0x2c10d4=a101_0x21b4();return a101_0x2469=function(_0x5374a6,_0x57f8ef){_0x5374a6=_0x5374a6-0x7e;let _0x21b449=_0x2c10d4[_0x5374a6];return _0x21b449;},a101_0x2469(_0x40c41b,_0x58ffcb);}'use strict';Object[a101_0x5e75de(0x84)](exports,a101_0x5e75de(0x98),{'value':!![]}),exports[a101_0x5e75de(0xb1)]=void 0x0;const errors_1=require(a101_0x5e75de(0xae)),bad_request_error_1=require('../../../../core/errors/bad-request.error');class GitCommitDto{constructor(){const _0x356243=a101_0x5e75de;this[_0x356243(0xa2)]=![];}static[a101_0x5e75de(0xaf)](_0x1e6817){const _0x2ad1cf=a101_0x5e75de;var _0x37296b,_0x12714a;if(_0x1e6817[_0x2ad1cf(0xb6)][_0x2ad1cf(0x97)][_0x2ad1cf(0xab)]!==_0x2ad1cf(0x83))throw new bad_request_error_1[(_0x2ad1cf(0x91))](errors_1[_0x2ad1cf(0x9c)]);const _0x5a6468=new GitCommitDto(),_0x3eefde=_0x1e6817['req']['body'];return _0x5a6468[_0x2ad1cf(0xad)]=_0x3eefde['repository'][_0x2ad1cf(0xb7)],_0x5a6468[_0x2ad1cf(0xac)]=_0x3eefde['changes'][0x0][_0x2ad1cf(0x9b)][_0x2ad1cf(0x95)](_0x2ad1cf(0x8d),''),_0x5a6468['repositoryGit']=(_0x12714a=(_0x37296b=_0x3eefde[_0x2ad1cf(0xad)]['links'][_0x2ad1cf(0x8b)])===null||_0x37296b===void 0x0?void 0x0:_0x37296b[_0x2ad1cf(0x82)](_0x210ead=>_0x210ead['name']['startsWith'](_0x2ad1cf(0x81))))===null||_0x12714a===void 0x0?void 0x0:_0x12714a['href'],_0x5a6468[_0x2ad1cf(0x8a)]=_0x3eefde[_0x2ad1cf(0xa1)][_0x2ad1cf(0xa5)],_0x5a6468[_0x2ad1cf(0xa9)]=_0x3eefde[_0x2ad1cf(0x9f)][_0x2ad1cf(0x9a)](_0x34fd19=>({'id':_0x34fd19[_0x2ad1cf(0x92)]})),_0x5a6468;}static['fromBitbucket'](_0x1e6f02){const _0x32efbc=a101_0x5e75de;if(_0x1e6f02[_0x32efbc(0xb6)][_0x32efbc(0x97)][_0x32efbc(0xab)]!=='repo:push')throw new bad_request_error_1['BadRequestError'](errors_1[_0x32efbc(0x9c)]);const _0x2258b5=new GitCommitDto(),_0x50407e=_0x1e6f02[_0x32efbc(0xb6)][_0x32efbc(0x85)];return _0x2258b5['repository']=_0x50407e[_0x32efbc(0xad)][_0x32efbc(0xb7)],_0x2258b5[_0x32efbc(0xac)]=_0x50407e[_0x32efbc(0x7f)]['changes'][0x0][_0x32efbc(0x99)][_0x32efbc(0xb7)][_0x32efbc(0x95)](_0x32efbc(0x8d),''),_0x2258b5['repositoryGit']=_0x50407e[_0x32efbc(0xad)]['links'][_0x32efbc(0x93)]['href']+_0x32efbc(0x94),_0x2258b5[_0x32efbc(0x8a)]='',_0x2258b5[_0x32efbc(0xa9)]=_0x50407e['push']['changes']['map'](_0x5bef9b=>({'id':_0x5bef9b[_0x32efbc(0x99)][_0x32efbc(0xb2)][_0x32efbc(0xb9)]})),_0x2258b5;}static['fromAzure'](_0x1eb358){const _0x272e25=a101_0x5e75de;if(_0x1eb358['req'][_0x272e25(0x85)][_0x272e25(0xb3)]!==_0x272e25(0x8f))throw new bad_request_error_1[(_0x272e25(0x91))](errors_1[_0x272e25(0x9c)]);const _0x2133a7=new GitCommitDto(),_0xd083b8=_0x1eb358[_0x272e25(0xb6)][_0x272e25(0x85)]['resource'];return _0x2133a7[_0x272e25(0xad)]=_0xd083b8[_0x272e25(0xad)][_0x272e25(0xb7)],_0x2133a7['branch']=_0xd083b8[_0x272e25(0xa0)][0x0][_0x272e25(0xb7)][_0x272e25(0x95)](_0x272e25(0x8d),''),_0x2133a7[_0x272e25(0x9d)]=_0xd083b8[_0x272e25(0xad)][_0x272e25(0x7e)],_0x2133a7[_0x272e25(0x8a)]=_0xd083b8['pushedBy'][_0x272e25(0xa5)],_0x2133a7['commits']=_0xd083b8['commits'][_0x272e25(0x9a)](_0x2511c4=>({'id':_0x2511c4[_0x272e25(0x8c)]})),_0x2133a7;}static[a101_0x5e75de(0x88)](_0x1da414){const _0x1234b6=a101_0x5e75de;if(_0x1da414['req'][_0x1234b6(0x97)][_0x1234b6(0x8e)]!==_0x1234b6(0x90))throw new bad_request_error_1['BadRequestError'](errors_1[_0x1234b6(0x9c)]);const _0x21f67f=new GitCommitDto(),_0x1c8ce5=_0x1da414[_0x1234b6(0xb6)][_0x1234b6(0x85)];return _0x21f67f[_0x1234b6(0xad)]=_0x1c8ce5['repository'][_0x1234b6(0xb7)],_0x21f67f[_0x1234b6(0xac)]=_0x1c8ce5['ref'][_0x1234b6(0x95)]('refs/heads/',''),_0x21f67f[_0x1234b6(0x9d)]=_0x1c8ce5[_0x1234b6(0xad)]['git_http_url'],_0x21f67f[_0x1234b6(0x8a)]=_0x1c8ce5['user_username'],_0x21f67f[_0x1234b6(0xa9)]=_0x1c8ce5[_0x1234b6(0xa9)][_0x1234b6(0x9a)](_0x3ac0a8=>({'id':_0x3ac0a8['id']})),_0x21f67f;}static[a101_0x5e75de(0xb5)](_0x4d4c3e){const _0x5e3e77=a101_0x5e75de;if(_0x4d4c3e[_0x5e3e77(0xb6)][_0x5e3e77(0x97)][_0x5e3e77(0xb8)]!=='push')throw new bad_request_error_1[(_0x5e3e77(0x91))](errors_1[_0x5e3e77(0x9c)]);const _0x514c24=new GitCommitDto(),_0x5bd8f6=_0x4d4c3e[_0x5e3e77(0xb6)][_0x5e3e77(0x85)];return _0x514c24[_0x5e3e77(0xad)]=_0x5bd8f6[_0x5e3e77(0xad)][_0x5e3e77(0xb7)],_0x514c24['branch']=_0x5bd8f6[_0x5e3e77(0xb0)][_0x5e3e77(0x95)](_0x5e3e77(0x8d),''),_0x514c24[_0x5e3e77(0x9d)]=_0x5bd8f6[_0x5e3e77(0xad)]['clone_url'],_0x514c24['username']=_0x5bd8f6[_0x5e3e77(0xaa)]['name'],_0x514c24['commits']=_0x5bd8f6[_0x5e3e77(0xa9)][_0x5e3e77(0x9a)](_0x2cdb1d=>({'id':_0x2cdb1d['id']})),_0x514c24;}}exports[a101_0x5e75de(0xb1)]=GitCommitDto;function a101_0x21b4(){const _0x3b613d=['x-event-key','branch','repository','../../../../constants/errors','fromBitbucketServer','ref','GitCommitDto','target','eventType','412895ihaWsO','fromGithub','req','name','x-github-event','hash','remoteUrl','push','133BwtDeu','http','find','repo:refs_changed','defineProperty','body','1892496xfOXko','197016lODXbr','fromGitlab','1014769HXwDig','username','clone','commitId','refs/heads/','x-gitlab-event','git.push','Push\x20Hook','BadRequestError','toHash','html','.git','replace','apply','headers','__esModule','new','map','refId','ERR_UNSUPPORTED_EVENT','repositoryGit','search','changes','refUpdates','actor','force','(((.+)+)+)+$','349882scXKqi','displayName','toString','2461968cOXIRs','5837632ctSBJv','commits','pusher'];a101_0x21b4=function(){return _0x3b613d;};return a101_0x21b4();}