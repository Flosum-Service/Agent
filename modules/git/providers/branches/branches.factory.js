const a131_0x306a61=a131_0x4fab;(function(_0x1c397c,_0x22f8cd){const _0x4e9fb0=a131_0x4fab,_0x27b8ac=_0x1c397c();while(!![]){try{const _0x454ebd=-parseInt(_0x4e9fb0(0x1e4))/0x1+-parseInt(_0x4e9fb0(0x1e5))/0x2*(parseInt(_0x4e9fb0(0x1e2))/0x3)+-parseInt(_0x4e9fb0(0x1c9))/0x4*(parseInt(_0x4e9fb0(0x1d6))/0x5)+parseInt(_0x4e9fb0(0x1cf))/0x6*(-parseInt(_0x4e9fb0(0x1d5))/0x7)+parseInt(_0x4e9fb0(0x1df))/0x8+-parseInt(_0x4e9fb0(0x1e9))/0x9+-parseInt(_0x4e9fb0(0x1cc))/0xa*(-parseInt(_0x4e9fb0(0x1e0))/0xb);if(_0x454ebd===_0x22f8cd)break;else _0x27b8ac['push'](_0x27b8ac['shift']());}catch(_0x5bee23){_0x27b8ac['push'](_0x27b8ac['shift']());}}}(a131_0x4eee,0xc3673));function a131_0x4fab(_0xbb8e86,_0x90496c){const _0x3b9b54=a131_0x4eee();return a131_0x4fab=function(_0x11a3b,_0x1fea5a){_0x11a3b=_0x11a3b-0x1c9;let _0x4eee01=_0x3b9b54[_0x11a3b];return _0x4eee01;},a131_0x4fab(_0xbb8e86,_0x90496c);}const a131_0x1fea5a=(function(){let _0x466f03=!![];return function(_0x5565f9,_0x104e24){const _0x568ef6=_0x466f03?function(){if(_0x104e24){const _0x10047e=_0x104e24['apply'](_0x5565f9,arguments);return _0x104e24=null,_0x10047e;}}:function(){};return _0x466f03=![],_0x568ef6;};}()),a131_0x11a3b=a131_0x1fea5a(this,function(){const _0x318512=a131_0x4fab;return a131_0x11a3b[_0x318512(0x1d7)]()['search'](_0x318512(0x1d0))[_0x318512(0x1d7)]()['constructor'](a131_0x11a3b)['search'](_0x318512(0x1d0));});a131_0x11a3b();'use strict';Object[a131_0x306a61(0x1cb)](exports,a131_0x306a61(0x1eb),{'value':!![]}),exports['BranchesFactory']=void 0x0;const git_provider_1=require(a131_0x306a61(0x1d1)),azure_branch_service_1=require(a131_0x306a61(0x1de)),bitbucket_branch_service_1=require('./services/bitbucket-branch.service'),bitbucket_server_branch_service_1=require(a131_0x306a61(0x1e6)),github_branch_service_1=require(a131_0x306a61(0x1cd)),gitlab_branch_service_1=require(a131_0x306a61(0x1ec)),providers_tokens_1=require(a131_0x306a61(0x1d8)),PROVIDER_BRANCHES_MAP={[git_provider_1[a131_0x306a61(0x1d9)][a131_0x306a61(0x1da)]]:azure_branch_service_1[a131_0x306a61(0x1e7)],[git_provider_1[a131_0x306a61(0x1d9)][a131_0x306a61(0x1d3)]]:azure_branch_service_1[a131_0x306a61(0x1e7)],[git_provider_1[a131_0x306a61(0x1d9)][a131_0x306a61(0x1db)]]:bitbucket_branch_service_1[a131_0x306a61(0x1e1)],[git_provider_1[a131_0x306a61(0x1d9)]['BitbucketServer']]:bitbucket_server_branch_service_1['BitbucketServerBranchService'],[git_provider_1['GitProvider']['Github']]:github_branch_service_1[a131_0x306a61(0x1e3)],[git_provider_1['GitProvider'][a131_0x306a61(0x1d2)]]:github_branch_service_1['GithubBranchService'],[git_provider_1['GitProvider']['Gitlab']]:gitlab_branch_service_1[a131_0x306a61(0x1ca)],[git_provider_1[a131_0x306a61(0x1d9)]['GitlabServer']]:gitlab_branch_service_1[a131_0x306a61(0x1ca)]};class BranchesFactory{static async[a131_0x306a61(0x1dd)](_0x47d563){const _0x3c302c=a131_0x306a61;return _0x47d563['container']['get'](PROVIDER_BRANCHES_MAP[_0x47d563[_0x3c302c(0x1d4)][_0x3c302c(0x1e8)](providers_tokens_1[_0x3c302c(0x1ce)][_0x3c302c(0x1ea)])]);}}function a131_0x4eee(){const _0x2ab7ab=['305224SndDPs','GitlabBranchService','defineProperty','1130zXOUER','./services/github-branch.service','Tokens','12nWSGLv','(((.+)+)+)+$','../types/git-provider','GithubServer','AzureServer','container','3646881oxPRrI','80krfHBU','toString','../providers.tokens','GitProvider','Azure','Bitbucket','BranchesFactory','createFromContext','./services/azure-branch.service','9446856vSRRUv','448107QLEUfw','BitbucketBranchService','161781lONaoP','GithubBranchService','990748rIrckj','38NMLsxp','./services/bitbucket-server-branch.service','AzureBranchService','get','6349896AktkQx','provider','__esModule','./services/gitlab-branch.service'];a131_0x4eee=function(){return _0x2ab7ab;};return a131_0x4eee();}exports[a131_0x306a61(0x1dc)]=BranchesFactory;