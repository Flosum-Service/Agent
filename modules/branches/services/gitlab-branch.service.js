const a57_0x3a7283=a57_0xa351;function a57_0xa351(_0x26a398,_0x157d87){const _0x206c6a=a57_0x8e93();return a57_0xa351=function(_0x433b28,_0x4a2925){_0x433b28=_0x433b28-0x194;let _0x8e93b7=_0x206c6a[_0x433b28];return _0x8e93b7;},a57_0xa351(_0x26a398,_0x157d87);}(function(_0x3f3ad0,_0x3bdafc){const _0x300c2e=a57_0xa351,_0x35243f=_0x3f3ad0();while(!![]){try{const _0x269e8c=-parseInt(_0x300c2e(0x19a))/0x1+parseInt(_0x300c2e(0x19b))/0x2*(-parseInt(_0x300c2e(0x1a8))/0x3)+-parseInt(_0x300c2e(0x19c))/0x4+-parseInt(_0x300c2e(0x197))/0x5+-parseInt(_0x300c2e(0x1a3))/0x6*(parseInt(_0x300c2e(0x1a6))/0x7)+-parseInt(_0x300c2e(0x198))/0x8+parseInt(_0x300c2e(0x1aa))/0x9;if(_0x269e8c===_0x3bdafc)break;else _0x35243f['push'](_0x35243f['shift']());}catch(_0x5337da){_0x35243f['push'](_0x35243f['shift']());}}}(a57_0x8e93,0x5a359));function a57_0x8e93(){const _0x424db6=['default','GitlabApiService','toString','../../git-api/services/gitlab-api.service','get','typedi','138350JsoyKS','2197680GWzHuF','search','416562hWDSZy','10334oUDINw','1532152qHzAzN','request','__importDefault','apply','GitlabBranchService','createRequest','constructor','215142DZYsdw','repository','(((.+)+)+)+$','133FVLPZn','delete','162yNVJBm','../../../core/errors/bad-request.error','21886002rkNJsc'];a57_0x8e93=function(){return _0x424db6;};return a57_0x8e93();}const a57_0x4a2925=(function(){let _0x584a90=!![];return function(_0x1b14af,_0x53d8dc){const _0xfc03c7=_0x584a90?function(){const _0x104a09=a57_0xa351;if(_0x53d8dc){const _0x3fb134=_0x53d8dc[_0x104a09(0x19f)](_0x1b14af,arguments);return _0x53d8dc=null,_0x3fb134;}}:function(){};return _0x584a90=![],_0xfc03c7;};}()),a57_0x433b28=a57_0x4a2925(this,function(){const _0x576e5d=a57_0xa351;return a57_0x433b28[_0x576e5d(0x1ad)]()[_0x576e5d(0x199)](_0x576e5d(0x1a5))[_0x576e5d(0x1ad)]()[_0x576e5d(0x1a2)](a57_0x433b28)[_0x576e5d(0x199)](_0x576e5d(0x1a5));});a57_0x433b28();'use strict';var __importDefault=this&&this[a57_0x3a7283(0x19e)]||function(_0x21a358){return _0x21a358&&_0x21a358['__esModule']?_0x21a358:{'default':_0x21a358};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[a57_0x3a7283(0x1a0)]=void 0x0;const bad_request_error_1=require(a57_0x3a7283(0x1a9)),gitlab_api_service_1=require(a57_0x3a7283(0x194)),typedi_1=__importDefault(require(a57_0x3a7283(0x196))),git_branch_service_1=require('./git-branch.service');class GitlabBranchService extends git_branch_service_1['GitBranchService']{constructor(_0x1fa0d5){const _0x3578f0=a57_0x3a7283;super(_0x1fa0d5),this['request']=this[_0x3578f0(0x1a1)]();}[a57_0x3a7283(0x1a1)](){const _0xebf6f3=a57_0x3a7283,_0x3004e6=typedi_1[_0xebf6f3(0x1ab)][_0xebf6f3(0x195)](gitlab_api_service_1[_0xebf6f3(0x1ac)]);return _0x3004e6[_0xebf6f3(0x1a1)](this[_0xebf6f3(0x1a4)]['apiUrl']);}async[a57_0x3a7283(0x1a7)](_0x1f9a57){const _0x1b6816=a57_0x3a7283;try{await this[_0x1b6816(0x19d)][_0x1b6816(0x1a7)]('repository/branches/'+_0x1f9a57);}catch(_0x1c9e3a){throw new bad_request_error_1['BadRequestError'](_0x1c9e3a);}}}exports[a57_0x3a7283(0x1a0)]=GitlabBranchService;