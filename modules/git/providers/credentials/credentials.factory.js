const a202_0x1482ad=a202_0x2142;(function(_0x372429,_0x574779){const _0x4bc58a=a202_0x2142,_0x56933c=_0x372429();while(!![]){try{const _0x280f92=parseInt(_0x4bc58a(0xb6))/0x1+parseInt(_0x4bc58a(0xc1))/0x2*(-parseInt(_0x4bc58a(0xb0))/0x3)+parseInt(_0x4bc58a(0x99))/0x4+parseInt(_0x4bc58a(0xa3))/0x5*(-parseInt(_0x4bc58a(0x9b))/0x6)+-parseInt(_0x4bc58a(0xbb))/0x7*(parseInt(_0x4bc58a(0x9a))/0x8)+parseInt(_0x4bc58a(0xb7))/0x9+parseInt(_0x4bc58a(0xaf))/0xa;if(_0x280f92===_0x574779)break;else _0x56933c['push'](_0x56933c['shift']());}catch(_0x524207){_0x56933c['push'](_0x56933c['shift']());}}}(a202_0x3858,0x930fe));const a202_0x574089=(function(){let _0x22a3e0=!![];return function(_0x438ba1,_0x1e2ce1){const _0x11cb7d=_0x22a3e0?function(){const _0x49af1e=a202_0x2142;if(_0x1e2ce1){const _0x3af821=_0x1e2ce1[_0x49af1e(0xa8)](_0x438ba1,arguments);return _0x1e2ce1=null,_0x3af821;}}:function(){};return _0x22a3e0=![],_0x11cb7d;};}()),a202_0x539332=a202_0x574089(this,function(){const _0x1ffb9d=a202_0x2142;return a202_0x539332[_0x1ffb9d(0x9e)]()[_0x1ffb9d(0xa9)](_0x1ffb9d(0xb5))[_0x1ffb9d(0x9e)]()[_0x1ffb9d(0xc2)](a202_0x539332)[_0x1ffb9d(0xa9)](_0x1ffb9d(0xb5));});a202_0x539332();'use strict';Object[a202_0x1482ad(0xac)](exports,a202_0x1482ad(0xbf),{'value':!![]}),exports[a202_0x1482ad(0xb8)]=void 0x0;function a202_0x2142(_0x286632,_0x14d00b){const _0x16253b=a202_0x3858();return a202_0x2142=function(_0x539332,_0x574089){_0x539332=_0x539332-0x97;let _0x385844=_0x16253b[_0x539332];return _0x385844;},a202_0x2142(_0x286632,_0x14d00b);}const git_provider_1=require(a202_0x1482ad(0xab)),azure_credentials_dto_1=require(a202_0x1482ad(0xa4)),azure_server_credentials_dto_1=require(a202_0x1482ad(0x98)),bitbucket_credentials_dto_1=require(a202_0x1482ad(0xb2)),bitbucket_server_credentials_dto_1=require('./dto/bitbucket-server-credentials.dto'),github_credentials_dto_1=require(a202_0x1482ad(0x9d)),github_server_credentials_dto_1=require('./dto/github-server-credentials.dto'),gitlab_credentials_dto_1=require(a202_0x1482ad(0xb4)),gitlab_server_credentials_dto_1=require(a202_0x1482ad(0xbc)),class_validator_1=require(a202_0x1482ad(0xc0)),unprocessable_entity_error_1=require(a202_0x1482ad(0xb1)),PROVIDER_CREDENTIALS_MAP={[git_provider_1[a202_0x1482ad(0xa2)][a202_0x1482ad(0xb3)]]:azure_credentials_dto_1[a202_0x1482ad(0xa0)],[git_provider_1[a202_0x1482ad(0xa2)][a202_0x1482ad(0xa7)]]:azure_server_credentials_dto_1['AzureServerCredentialsDto'],[git_provider_1[a202_0x1482ad(0xa2)][a202_0x1482ad(0xa1)]]:bitbucket_credentials_dto_1['BitbucketCredentialsDto'],[git_provider_1[a202_0x1482ad(0xa2)][a202_0x1482ad(0xa5)]]:bitbucket_server_credentials_dto_1['BitbucketServerCredentialsDto'],[git_provider_1[a202_0x1482ad(0xa2)][a202_0x1482ad(0x9c)]]:github_credentials_dto_1[a202_0x1482ad(0xb9)],[git_provider_1[a202_0x1482ad(0xa2)]['GithubServer']]:github_server_credentials_dto_1[a202_0x1482ad(0xad)],[git_provider_1[a202_0x1482ad(0xa2)]['Gitlab']]:gitlab_credentials_dto_1[a202_0x1482ad(0xbd)],[git_provider_1[a202_0x1482ad(0xa2)][a202_0x1482ad(0xba)]]:gitlab_server_credentials_dto_1['GitlabServerCredentialsDto']};function a202_0x3858(){const _0xfb5d02=['(((.+)+)+)+$','537351xuPSpy','7821576vjHBvb','CredentialsFactory','GithubCredentialsDto','GitlabServer','3353iDdAeU','./dto/gitlab-server-credentials.dto','GitlabCredentialsDto','fromConnectionEnvVariables','__esModule','class-validator','4654zfpKKX','constructor','Unknown\x20git\x20provider\x20\x27','./dto/azure-server-credentials.dto','1628288lpIHuY','19208ADAffh','70320JPeYRU','Github','./dto/github-credentials.dto','toString','gitProvider','AzureCredentialsDto','Bitbucket','GitProvider','10YSlicz','./dto/azure-credentials.dto','BitbucketServer','length','AzureServer','apply','search','validate','../types/git-provider','defineProperty','GithubServerCredentialsDto','createFromConnection','6744600lGPpef','918JZfGZK','../../../../core/errors/unprocessable-entity.error','./dto/bitbucket-credentials.dto','Azure','./dto/gitlab-credentials.dto'];a202_0x3858=function(){return _0xfb5d02;};return a202_0x3858();}class CredentialsFactory{static async[a202_0x1482ad(0xae)](_0x2d951f){const _0x5981d2=a202_0x1482ad;if(!(_0x2d951f[_0x5981d2(0x9f)]in PROVIDER_CREDENTIALS_MAP))throw new Error(_0x5981d2(0x97)+_0x2d951f['gitProvider']+'\x27');const _0x5a7437=PROVIDER_CREDENTIALS_MAP[_0x2d951f[_0x5981d2(0x9f)]],_0x389959=_0x5a7437[_0x5981d2(0xbe)](_0x2d951f['envVariables']),_0x4baae7=await(0x0,class_validator_1[_0x5981d2(0xaa)])(_0x389959);if(_0x4baae7[_0x5981d2(0xa6)])throw new unprocessable_entity_error_1['UnprocessableEntityError'](_0x4baae7);return _0x389959;}}exports['CredentialsFactory']=CredentialsFactory;