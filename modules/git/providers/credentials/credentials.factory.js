function a214_0x4b0c(_0x53a1cf,_0x52271f){const _0x256d11=a214_0x48a4();return a214_0x4b0c=function(_0x2a2545,_0x2573ae){_0x2a2545=_0x2a2545-0xd1;let _0x48a45a=_0x256d11[_0x2a2545];return _0x48a45a;},a214_0x4b0c(_0x53a1cf,_0x52271f);}const a214_0x2250e5=a214_0x4b0c;(function(_0x3b45b1,_0x233dcc){const _0x167d4d=a214_0x4b0c,_0x250c46=_0x3b45b1();while(!![]){try{const _0x45c92c=parseInt(_0x167d4d(0xd8))/0x1+parseInt(_0x167d4d(0xe0))/0x2*(parseInt(_0x167d4d(0xee))/0x3)+parseInt(_0x167d4d(0xf7))/0x4*(-parseInt(_0x167d4d(0xf9))/0x5)+parseInt(_0x167d4d(0xe8))/0x6+-parseInt(_0x167d4d(0xf3))/0x7+-parseInt(_0x167d4d(0xd7))/0x8*(parseInt(_0x167d4d(0xe4))/0x9)+-parseInt(_0x167d4d(0xf4))/0xa;if(_0x45c92c===_0x233dcc)break;else _0x250c46['push'](_0x250c46['shift']());}catch(_0x4ff7bb){_0x250c46['push'](_0x250c46['shift']());}}}(a214_0x48a4,0xa10e4));const a214_0x2573ae=(function(){let _0x481546=!![];return function(_0x552ffe,_0x45a9ca){const _0x40b973=_0x481546?function(){const _0x1991c6=a214_0x4b0c;if(_0x45a9ca){const _0x3b026a=_0x45a9ca[_0x1991c6(0xe9)](_0x552ffe,arguments);return _0x45a9ca=null,_0x3b026a;}}:function(){};return _0x481546=![],_0x40b973;};}()),a214_0x2a2545=a214_0x2573ae(this,function(){const _0x3c1c6c=a214_0x4b0c;return a214_0x2a2545[_0x3c1c6c(0xdf)]()[_0x3c1c6c(0xdd)](_0x3c1c6c(0xf8))[_0x3c1c6c(0xdf)]()[_0x3c1c6c(0xdb)](a214_0x2a2545)[_0x3c1c6c(0xdd)](_0x3c1c6c(0xf8));});a214_0x2a2545();'use strict';function a214_0x48a4(){const _0x2ed595=['2547391cLbgpJ','3365270yGtStU','./dto/bitbucket-credentials.dto','BitbucketServer','28ukzsQj','(((.+)+)+)+$','185965ZsfBZc','BitbucketCredentialsDto','./dto/github-credentials.dto','GithubServerCredentialsDto','Bitbucket','GithubServer','Github','112JUnyNm','102608SZHpbV','CredentialsFactory','gitProvider','constructor','createFromConnection','search','validate','toString','6eRltgt','./dto/gitlab-credentials.dto','./dto/azure-credentials.dto','GitProvider','9369VfFyLC','UnprocessableEntityError','./dto/github-server-credentials.dto','length','2828820ygFATw','apply','./dto/azure-server-credentials.dto','AzureCredentialsDto','defineProperty','Unknown\x20git\x20provider\x20\x27','1060971mJTcyd','fromConnectionEnvVariables','GitlabServerCredentialsDto','envVariables','BitbucketServerCredentialsDto'];a214_0x48a4=function(){return _0x2ed595;};return a214_0x48a4();}Object[a214_0x2250e5(0xec)](exports,'__esModule',{'value':!![]}),exports['CredentialsFactory']=void 0x0;const git_provider_1=require('../types/git-provider'),azure_credentials_dto_1=require(a214_0x2250e5(0xe2)),azure_server_credentials_dto_1=require(a214_0x2250e5(0xea)),bitbucket_credentials_dto_1=require(a214_0x2250e5(0xf5)),bitbucket_server_credentials_dto_1=require('./dto/bitbucket-server-credentials.dto'),github_credentials_dto_1=require(a214_0x2250e5(0xd2)),github_server_credentials_dto_1=require(a214_0x2250e5(0xe6)),gitlab_credentials_dto_1=require(a214_0x2250e5(0xe1)),gitlab_server_credentials_dto_1=require('./dto/gitlab-server-credentials.dto'),class_validator_1=require('class-validator'),unprocessable_entity_error_1=require('../../../../core/errors/unprocessable-entity.error'),PROVIDER_CREDENTIALS_MAP={[git_provider_1[a214_0x2250e5(0xe3)]['Azure']]:azure_credentials_dto_1[a214_0x2250e5(0xeb)],[git_provider_1[a214_0x2250e5(0xe3)]['AzureServer']]:azure_server_credentials_dto_1['AzureServerCredentialsDto'],[git_provider_1['GitProvider'][a214_0x2250e5(0xd4)]]:bitbucket_credentials_dto_1[a214_0x2250e5(0xd1)],[git_provider_1[a214_0x2250e5(0xe3)][a214_0x2250e5(0xf6)]]:bitbucket_server_credentials_dto_1[a214_0x2250e5(0xf2)],[git_provider_1[a214_0x2250e5(0xe3)][a214_0x2250e5(0xd6)]]:github_credentials_dto_1['GithubCredentialsDto'],[git_provider_1[a214_0x2250e5(0xe3)][a214_0x2250e5(0xd5)]]:github_server_credentials_dto_1[a214_0x2250e5(0xd3)],[git_provider_1[a214_0x2250e5(0xe3)]['Gitlab']]:gitlab_credentials_dto_1['GitlabCredentialsDto'],[git_provider_1['GitProvider']['GitlabServer']]:gitlab_server_credentials_dto_1[a214_0x2250e5(0xf0)]};class CredentialsFactory{static async[a214_0x2250e5(0xdc)](_0x527526){const _0x1dbe1c=a214_0x2250e5;if(!(_0x527526[_0x1dbe1c(0xda)]in PROVIDER_CREDENTIALS_MAP))throw new Error(_0x1dbe1c(0xed)+_0x527526[_0x1dbe1c(0xda)]+'\x27');const _0x10e262=PROVIDER_CREDENTIALS_MAP[_0x527526[_0x1dbe1c(0xda)]],_0x128e03=_0x10e262[_0x1dbe1c(0xef)](_0x527526[_0x1dbe1c(0xf1)]),_0x599197=await(0x0,class_validator_1[_0x1dbe1c(0xde)])(_0x128e03);if(_0x599197[_0x1dbe1c(0xe7)])throw new unprocessable_entity_error_1[(_0x1dbe1c(0xe5))](_0x599197);return _0x128e03;}}exports[a214_0x2250e5(0xd9)]=CredentialsFactory;