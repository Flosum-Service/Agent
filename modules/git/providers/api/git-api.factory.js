const a198_0x30390c=a198_0x4abf;(function(_0x339b5b,_0x3e38e9){const _0x510737=a198_0x4abf,_0x12cee2=_0x339b5b();while(!![]){try{const _0x49db3e=parseInt(_0x510737(0x90))/0x1+parseInt(_0x510737(0x91))/0x2+-parseInt(_0x510737(0x99))/0x3*(parseInt(_0x510737(0x8d))/0x4)+parseInt(_0x510737(0xa0))/0x5+parseInt(_0x510737(0xa8))/0x6*(-parseInt(_0x510737(0x92))/0x7)+-parseInt(_0x510737(0xa9))/0x8*(-parseInt(_0x510737(0x9f))/0x9)+-parseInt(_0x510737(0xa5))/0xa*(parseInt(_0x510737(0x98))/0xb);if(_0x49db3e===_0x3e38e9)break;else _0x12cee2['push'](_0x12cee2['shift']());}catch(_0x4c1b33){_0x12cee2['push'](_0x12cee2['shift']());}}}(a198_0x3262,0xa1496));const a198_0x8e1725=(function(){let _0x4239eb=!![];return function(_0x11e315,_0x46c398){const _0xa1134c=_0x4239eb?function(){if(_0x46c398){const _0x21c86c=_0x46c398['apply'](_0x11e315,arguments);return _0x46c398=null,_0x21c86c;}}:function(){};return _0x4239eb=![],_0xa1134c;};}()),a198_0x78fd74=a198_0x8e1725(this,function(){const _0x4f4afc=a198_0x4abf;return a198_0x78fd74[_0x4f4afc(0x93)]()[_0x4f4afc(0x8a)](_0x4f4afc(0x96))['toString']()[_0x4f4afc(0x97)](a198_0x78fd74)[_0x4f4afc(0x8a)](_0x4f4afc(0x96));});a198_0x78fd74();'use strict';function a198_0x3262(){const _0x32aefd=['Azure','20xikpAP','GitProvider','GitlabServer','189126InwgWJ','11112yiqnWO','./github-api.service','BitbucketServerApiService','BitbucketServer','./bitbucket-server-api.service','ServicesFactory','search','GithubServer','../types/git-provider','4nmtmHd','createFromProvider','Bitbucket','526769WKnSFg','707446nUGHoj','189uXnCaP','toString','GitlabApiService','AzureApiService','(((.+)+)+)+$','constructor','770594JUaUoJ','812403ZrDqlq','BitbucketApiService','get','Unknown\x20git\x20provider\x20\x27','Gitlab','GithubApiService','4365vfuLOL','1842245CRsGps','./gitlab-api.service','Github','defineProperty'];a198_0x3262=function(){return _0x32aefd;};return a198_0x3262();}function a198_0x4abf(_0x57e975,_0x2482f3){const _0x16c136=a198_0x3262();return a198_0x4abf=function(_0x78fd74,_0x8e1725){_0x78fd74=_0x78fd74-0x85;let _0x326214=_0x16c136[_0x78fd74];return _0x326214;},a198_0x4abf(_0x57e975,_0x2482f3);}Object[a198_0x30390c(0xa3)](exports,'__esModule',{'value':!![]}),exports[a198_0x30390c(0x89)]=void 0x0;const git_provider_1=require(a198_0x30390c(0x8c)),gitlab_api_service_1=require(a198_0x30390c(0xa1)),github_api_service_1=require(a198_0x30390c(0x85)),azure_api_service_1=require('./azure-api.service'),bitbucket_api_service_1=require('./bitbucket-api.service'),bitbucket_server_api_service_1=require(a198_0x30390c(0x88)),PROVIDER_SERVICES_MAP={[git_provider_1['GitProvider'][a198_0x30390c(0x9d)]]:gitlab_api_service_1[a198_0x30390c(0x94)],[git_provider_1[a198_0x30390c(0xa6)][a198_0x30390c(0xa7)]]:gitlab_api_service_1[a198_0x30390c(0x94)],[git_provider_1[a198_0x30390c(0xa6)][a198_0x30390c(0xa2)]]:github_api_service_1[a198_0x30390c(0x9e)],[git_provider_1[a198_0x30390c(0xa6)][a198_0x30390c(0x8b)]]:github_api_service_1[a198_0x30390c(0x9e)],[git_provider_1['GitProvider'][a198_0x30390c(0x8f)]]:bitbucket_api_service_1[a198_0x30390c(0x9a)],[git_provider_1[a198_0x30390c(0xa6)][a198_0x30390c(0x87)]]:bitbucket_server_api_service_1[a198_0x30390c(0x86)],[git_provider_1[a198_0x30390c(0xa6)][a198_0x30390c(0xa4)]]:azure_api_service_1[a198_0x30390c(0x95)],[git_provider_1[a198_0x30390c(0xa6)]['AzureServer']]:azure_api_service_1[a198_0x30390c(0x95)]};class ServicesFactory{static[a198_0x30390c(0x8e)](_0x29e183,_0x19a854){const _0x15079c=a198_0x30390c;if(!(_0x19a854 in PROVIDER_SERVICES_MAP))throw new Error(_0x15079c(0x9c)+_0x19a854+'\x27');return _0x29e183[_0x15079c(0x9b)](PROVIDER_SERVICES_MAP[_0x19a854]);}}exports[a198_0x30390c(0x89)]=ServicesFactory;