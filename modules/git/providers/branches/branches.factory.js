const a201_0x597fe5=a201_0x2dc7;(function(_0x26d06f,_0xb3cad1){const _0x289fca=a201_0x2dc7,_0x575886=_0x26d06f();while(!![]){try{const _0x2d5746=parseInt(_0x289fca(0x113))/0x1*(-parseInt(_0x289fca(0x10e))/0x2)+-parseInt(_0x289fca(0x119))/0x3+-parseInt(_0x289fca(0x117))/0x4+parseInt(_0x289fca(0x101))/0x5*(parseInt(_0x289fca(0xf7))/0x6)+-parseInt(_0x289fca(0x11d))/0x7*(parseInt(_0x289fca(0x10d))/0x8)+-parseInt(_0x289fca(0x106))/0x9*(-parseInt(_0x289fca(0x11b))/0xa)+parseInt(_0x289fca(0x108))/0xb;if(_0x2d5746===_0xb3cad1)break;else _0x575886['push'](_0x575886['shift']());}catch(_0x561956){_0x575886['push'](_0x575886['shift']());}}}(a201_0x28a0,0xc5cc8));const a201_0x40af46=(function(){let _0x45d53b=!![];return function(_0xd9c96e,_0x1761aa){const _0xbbaa62=_0x45d53b?function(){const _0x47f47d=a201_0x2dc7;if(_0x1761aa){const _0x210403=_0x1761aa[_0x47f47d(0x110)](_0xd9c96e,arguments);return _0x1761aa=null,_0x210403;}}:function(){};return _0x45d53b=![],_0xbbaa62;};}()),a201_0x37b3c0=a201_0x40af46(this,function(){const _0x343aca=a201_0x2dc7;return a201_0x37b3c0[_0x343aca(0x10b)]()[_0x343aca(0x102)](_0x343aca(0x11c))['toString']()[_0x343aca(0xff)](a201_0x37b3c0)[_0x343aca(0x102)]('(((.+)+)+)+$');});function a201_0x28a0(){const _0x2a8bb0=['1915269PhFVQx','BitbucketBranchService','690CIlZUa','(((.+)+)+)+$','7nKHDzN','BranchesFactory','./services/gitlab-branch.service','Azure','2874ZlKnyo','GitlabBranchService','./services/bitbucket-server-branch.service','GitProvider','AzureServer','Bitbucket','./services/github-branch.service','get','constructor','container','4555FndHCm','search','provider','../providers.tokens','GithubServer','1143Ipkrzk','BitbucketServer','45674519vJpyru','__esModule','BitbucketServerBranchService','toString','../types/git-provider','10649144vexnAF','1438858JllBDa','GithubBranchService','apply','./services/azure-branch.service','Github','1dFjcnG','createFromContext','defineProperty','Tokens','4392728CyCxqQ','Gitlab'];a201_0x28a0=function(){return _0x2a8bb0;};return a201_0x28a0();}a201_0x37b3c0();'use strict';Object[a201_0x597fe5(0x115)](exports,a201_0x597fe5(0x109),{'value':!![]}),exports['BranchesFactory']=void 0x0;const git_provider_1=require(a201_0x597fe5(0x10c)),azure_branch_service_1=require(a201_0x597fe5(0x111)),bitbucket_branch_service_1=require('./services/bitbucket-branch.service'),bitbucket_server_branch_service_1=require(a201_0x597fe5(0xf9)),github_branch_service_1=require(a201_0x597fe5(0xfd)),gitlab_branch_service_1=require(a201_0x597fe5(0xf5)),providers_tokens_1=require(a201_0x597fe5(0x104)),PROVIDER_BRANCHES_MAP={[git_provider_1['GitProvider'][a201_0x597fe5(0xf6)]]:azure_branch_service_1['AzureBranchService'],[git_provider_1[a201_0x597fe5(0xfa)][a201_0x597fe5(0xfb)]]:azure_branch_service_1['AzureBranchService'],[git_provider_1[a201_0x597fe5(0xfa)][a201_0x597fe5(0xfc)]]:bitbucket_branch_service_1[a201_0x597fe5(0x11a)],[git_provider_1[a201_0x597fe5(0xfa)][a201_0x597fe5(0x107)]]:bitbucket_server_branch_service_1[a201_0x597fe5(0x10a)],[git_provider_1[a201_0x597fe5(0xfa)][a201_0x597fe5(0x112)]]:github_branch_service_1[a201_0x597fe5(0x10f)],[git_provider_1['GitProvider'][a201_0x597fe5(0x105)]]:github_branch_service_1[a201_0x597fe5(0x10f)],[git_provider_1[a201_0x597fe5(0xfa)][a201_0x597fe5(0x118)]]:gitlab_branch_service_1[a201_0x597fe5(0xf8)],[git_provider_1[a201_0x597fe5(0xfa)]['GitlabServer']]:gitlab_branch_service_1[a201_0x597fe5(0xf8)]};class BranchesFactory{static async[a201_0x597fe5(0x114)](_0x469dbf){const _0x3801be=a201_0x597fe5;return _0x469dbf['container'][_0x3801be(0xfe)](PROVIDER_BRANCHES_MAP[_0x469dbf[_0x3801be(0x100)][_0x3801be(0xfe)](providers_tokens_1[_0x3801be(0x116)][_0x3801be(0x103)])]);}}function a201_0x2dc7(_0x27e981,_0x2f2f08){const _0x234c7f=a201_0x28a0();return a201_0x2dc7=function(_0x37b3c0,_0x40af46){_0x37b3c0=_0x37b3c0-0xf4;let _0x28a0a5=_0x234c7f[_0x37b3c0];return _0x28a0a5;},a201_0x2dc7(_0x27e981,_0x2f2f08);}exports[a201_0x597fe5(0xf4)]=BranchesFactory;