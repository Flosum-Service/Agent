const a212_0x5c86d5=a212_0x4822;(function(_0x29a958,_0x28a95b){const _0x5a67fd=a212_0x4822,_0x448053=_0x29a958();while(!![]){try{const _0x990190=parseInt(_0x5a67fd(0x118))/0x1+parseInt(_0x5a67fd(0x135))/0x2*(parseInt(_0x5a67fd(0x128))/0x3)+-parseInt(_0x5a67fd(0x10d))/0x4+-parseInt(_0x5a67fd(0x139))/0x5*(parseInt(_0x5a67fd(0x12b))/0x6)+-parseInt(_0x5a67fd(0x11f))/0x7+parseInt(_0x5a67fd(0x110))/0x8*(parseInt(_0x5a67fd(0x12a))/0x9)+parseInt(_0x5a67fd(0x10e))/0xa*(parseInt(_0x5a67fd(0x123))/0xb);if(_0x990190===_0x28a95b)break;else _0x448053['push'](_0x448053['shift']());}catch(_0x111d80){_0x448053['push'](_0x448053['shift']());}}}(a212_0x13ec,0x38c8c));const a212_0x483753=(function(){let _0xf656a9=!![];return function(_0x17268f,_0x4ee672){const _0x40d017=_0xf656a9?function(){const _0x3c7244=a212_0x4822;if(_0x4ee672){const _0x431751=_0x4ee672[_0x3c7244(0x13a)](_0x17268f,arguments);return _0x4ee672=null,_0x431751;}}:function(){};return _0xf656a9=![],_0x40d017;};}()),a212_0x393e0e=a212_0x483753(this,function(){const _0x5b3abc=a212_0x4822;return a212_0x393e0e[_0x5b3abc(0x11c)]()[_0x5b3abc(0x116)](_0x5b3abc(0x127))[_0x5b3abc(0x11c)]()[_0x5b3abc(0x134)](a212_0x393e0e)[_0x5b3abc(0x116)]('(((.+)+)+)+$');});function a212_0x13ec(){const _0x44e673=['../types/git-provider','./dto/gitlab-server-credentials.dto','GitlabServer','toString','class-validator','AzureServerCredentialsDto','2086588VLxUUx','GithubServer','./dto/github-credentials.dto','GitlabServerCredentialsDto','902HxcUVp','UnprocessableEntityError','./dto/bitbucket-server-credentials.dto','Bitbucket','(((.+)+)+)+$','3lguTMX','./dto/azure-credentials.dto','9liKNAL','1798134srOnsk','./dto/azure-server-credentials.dto','length','BitbucketServerCredentialsDto','GithubServerCredentialsDto','Azure','GitProvider','Github','envVariables','constructor','74742FGkFtx','GitlabCredentialsDto','../../../../core/errors/unprocessable-entity.error','CredentialsFactory','5pMIUmC','apply','Gitlab','973680sgEnmb','61700xxtYvQ','BitbucketServer','2041744rcQtiF','gitProvider','BitbucketCredentialsDto','defineProperty','GithubCredentialsDto','AzureCredentialsDto','search','validate','275252QhzuLP'];a212_0x13ec=function(){return _0x44e673;};return a212_0x13ec();}a212_0x393e0e();'use strict';Object[a212_0x5c86d5(0x113)](exports,'__esModule',{'value':!![]}),exports[a212_0x5c86d5(0x138)]=void 0x0;function a212_0x4822(_0x37e399,_0x467f8f){const _0x5c36be=a212_0x13ec();return a212_0x4822=function(_0x393e0e,_0x483753){_0x393e0e=_0x393e0e-0x10d;let _0x13ece3=_0x5c36be[_0x393e0e];return _0x13ece3;},a212_0x4822(_0x37e399,_0x467f8f);}const git_provider_1=require(a212_0x5c86d5(0x119)),azure_credentials_dto_1=require(a212_0x5c86d5(0x129)),azure_server_credentials_dto_1=require(a212_0x5c86d5(0x12c)),bitbucket_credentials_dto_1=require('./dto/bitbucket-credentials.dto'),bitbucket_server_credentials_dto_1=require(a212_0x5c86d5(0x125)),github_credentials_dto_1=require(a212_0x5c86d5(0x121)),github_server_credentials_dto_1=require('./dto/github-server-credentials.dto'),gitlab_credentials_dto_1=require('./dto/gitlab-credentials.dto'),gitlab_server_credentials_dto_1=require(a212_0x5c86d5(0x11a)),class_validator_1=require(a212_0x5c86d5(0x11d)),unprocessable_entity_error_1=require(a212_0x5c86d5(0x137)),PROVIDER_CREDENTIALS_MAP={[git_provider_1[a212_0x5c86d5(0x131)][a212_0x5c86d5(0x130)]]:azure_credentials_dto_1[a212_0x5c86d5(0x115)],[git_provider_1[a212_0x5c86d5(0x131)]['AzureServer']]:azure_server_credentials_dto_1[a212_0x5c86d5(0x11e)],[git_provider_1[a212_0x5c86d5(0x131)][a212_0x5c86d5(0x126)]]:bitbucket_credentials_dto_1[a212_0x5c86d5(0x112)],[git_provider_1[a212_0x5c86d5(0x131)][a212_0x5c86d5(0x10f)]]:bitbucket_server_credentials_dto_1[a212_0x5c86d5(0x12e)],[git_provider_1[a212_0x5c86d5(0x131)][a212_0x5c86d5(0x132)]]:github_credentials_dto_1[a212_0x5c86d5(0x114)],[git_provider_1[a212_0x5c86d5(0x131)][a212_0x5c86d5(0x120)]]:github_server_credentials_dto_1[a212_0x5c86d5(0x12f)],[git_provider_1[a212_0x5c86d5(0x131)][a212_0x5c86d5(0x13b)]]:gitlab_credentials_dto_1[a212_0x5c86d5(0x136)],[git_provider_1[a212_0x5c86d5(0x131)][a212_0x5c86d5(0x11b)]]:gitlab_server_credentials_dto_1[a212_0x5c86d5(0x122)]};class CredentialsFactory{static async['createFromConnection'](_0x4bf9a3){const _0x247512=a212_0x5c86d5;if(!(_0x4bf9a3[_0x247512(0x111)]in PROVIDER_CREDENTIALS_MAP))throw new Error('Unknown\x20git\x20provider\x20\x27'+_0x4bf9a3[_0x247512(0x111)]+'\x27');const _0x53bb9d=PROVIDER_CREDENTIALS_MAP[_0x4bf9a3[_0x247512(0x111)]],_0x4df3dd=_0x53bb9d['fromConnectionEnvVariables'](_0x4bf9a3[_0x247512(0x133)]),_0x20d4d9=await(0x0,class_validator_1[_0x247512(0x117)])(_0x4df3dd);if(_0x20d4d9[_0x247512(0x12d)])throw new unprocessable_entity_error_1[(_0x247512(0x124))](_0x20d4d9);return _0x4df3dd;}}exports[a212_0x5c86d5(0x138)]=CredentialsFactory;