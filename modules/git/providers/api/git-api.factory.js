function a165_0x488b(){const _0xac04e5=['constructor','get','3695905XHVxzR','Gitlab','605700uzjDxV','390618neuWBW','Bitbucket','GitProvider','6ZUvHzx','8aePlMy','3832LQfgat','304083iKtLQt','../types/git-provider','GitlabApiService','./bitbucket-api.service','7091mPYddq','AzureApiService','803177NLyIvj','ServicesFactory','./azure-api.service','BitbucketServerApiService','7821450NgPWzr','__esModule','defineProperty','AzureServer','Unknown\x20git\x20provider\x20\x27','GitlabServer','search','toString','apply','GithubServer','Github','createFromProvider','(((.+)+)+)+$','Azure','./bitbucket-server-api.service','./github-api.service'];a165_0x488b=function(){return _0xac04e5;};return a165_0x488b();}const a165_0x4b9c3d=a165_0x5192;(function(_0x1149e5,_0x2de3eb){const _0x32001c=a165_0x5192,_0x420b48=_0x1149e5();while(!![]){try{const _0x3a389e=parseInt(_0x32001c(0x192))/0x1+parseInt(_0x32001c(0x18a))/0x2*(parseInt(_0x32001c(0x186))/0x3)+parseInt(_0x32001c(0x185))/0x4+parseInt(_0x32001c(0x183))/0x5*(-parseInt(_0x32001c(0x189))/0x6)+parseInt(_0x32001c(0x190))/0x7*(parseInt(_0x32001c(0x18b))/0x8)+-parseInt(_0x32001c(0x18c))/0x9+-parseInt(_0x32001c(0x171))/0xa;if(_0x3a389e===_0x2de3eb)break;else _0x420b48['push'](_0x420b48['shift']());}catch(_0x5aea5f){_0x420b48['push'](_0x420b48['shift']());}}}(a165_0x488b,0x63024));const a165_0x4c8d0b=(function(){let _0x5405c0=!![];return function(_0x5e99fb,_0x96bf5){const _0x4588d0=_0x5405c0?function(){const _0x453841=a165_0x5192;if(_0x96bf5){const _0x30a284=_0x96bf5[_0x453841(0x179)](_0x5e99fb,arguments);return _0x96bf5=null,_0x30a284;}}:function(){};return _0x5405c0=![],_0x4588d0;};}()),a165_0x159876=a165_0x4c8d0b(this,function(){const _0x191f0b=a165_0x5192;return a165_0x159876['toString']()[_0x191f0b(0x177)]('(((.+)+)+)+$')[_0x191f0b(0x178)]()[_0x191f0b(0x181)](a165_0x159876)[_0x191f0b(0x177)](_0x191f0b(0x17d));});a165_0x159876();'use strict';Object[a165_0x4b9c3d(0x173)](exports,a165_0x4b9c3d(0x172),{'value':!![]}),exports[a165_0x4b9c3d(0x193)]=void 0x0;function a165_0x5192(_0xf25e1e,_0x4155ee){const _0x2d85d8=a165_0x488b();return a165_0x5192=function(_0x159876,_0x4c8d0b){_0x159876=_0x159876-0x16f;let _0x488bc1=_0x2d85d8[_0x159876];return _0x488bc1;},a165_0x5192(_0xf25e1e,_0x4155ee);}const git_provider_1=require(a165_0x4b9c3d(0x18d)),gitlab_api_service_1=require('./gitlab-api.service'),github_api_service_1=require(a165_0x4b9c3d(0x180)),azure_api_service_1=require(a165_0x4b9c3d(0x16f)),bitbucket_api_service_1=require(a165_0x4b9c3d(0x18f)),bitbucket_server_api_service_1=require(a165_0x4b9c3d(0x17f)),PROVIDER_SERVICES_MAP={[git_provider_1[a165_0x4b9c3d(0x188)][a165_0x4b9c3d(0x184)]]:gitlab_api_service_1[a165_0x4b9c3d(0x18e)],[git_provider_1[a165_0x4b9c3d(0x188)][a165_0x4b9c3d(0x176)]]:gitlab_api_service_1[a165_0x4b9c3d(0x18e)],[git_provider_1[a165_0x4b9c3d(0x188)][a165_0x4b9c3d(0x17b)]]:github_api_service_1['GithubApiService'],[git_provider_1[a165_0x4b9c3d(0x188)][a165_0x4b9c3d(0x17a)]]:github_api_service_1['GithubApiService'],[git_provider_1['GitProvider'][a165_0x4b9c3d(0x187)]]:bitbucket_api_service_1['BitbucketApiService'],[git_provider_1['GitProvider']['BitbucketServer']]:bitbucket_server_api_service_1[a165_0x4b9c3d(0x170)],[git_provider_1[a165_0x4b9c3d(0x188)][a165_0x4b9c3d(0x17e)]]:azure_api_service_1[a165_0x4b9c3d(0x191)],[git_provider_1[a165_0x4b9c3d(0x188)][a165_0x4b9c3d(0x174)]]:azure_api_service_1[a165_0x4b9c3d(0x191)]};class ServicesFactory{static[a165_0x4b9c3d(0x17c)](_0x10a114,_0x5d5465){const _0x5bff0d=a165_0x4b9c3d;if(!(_0x5d5465 in PROVIDER_SERVICES_MAP))throw new Error(_0x5bff0d(0x175)+_0x5d5465+'\x27');return _0x10a114[_0x5bff0d(0x182)](PROVIDER_SERVICES_MAP[_0x5d5465]);}}exports[a165_0x4b9c3d(0x193)]=ServicesFactory;