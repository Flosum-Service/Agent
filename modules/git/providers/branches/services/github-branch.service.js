const a210_0x21508c=a210_0x19ec;function a210_0x19ec(_0x4ae5e6,_0x3f39d7){const _0x132e77=a210_0x6485();return a210_0x19ec=function(_0x2ad7eb,_0x1ec7d2){_0x2ad7eb=_0x2ad7eb-0x11c;let _0x64855b=_0x132e77[_0x2ad7eb];return _0x64855b;},a210_0x19ec(_0x4ae5e6,_0x3f39d7);}(function(_0x46c359,_0x3f894e){const _0x49d9fc=a210_0x19ec,_0x4e4feb=_0x46c359();while(!![]){try{const _0x611344=-parseInt(_0x49d9fc(0x129))/0x1+parseInt(_0x49d9fc(0x134))/0x2+-parseInt(_0x49d9fc(0x12e))/0x3+parseInt(_0x49d9fc(0x11f))/0x4+-parseInt(_0x49d9fc(0x12f))/0x5*(-parseInt(_0x49d9fc(0x11d))/0x6)+parseInt(_0x49d9fc(0x12c))/0x7*(parseInt(_0x49d9fc(0x126))/0x8)+-parseInt(_0x49d9fc(0x132))/0x9;if(_0x611344===_0x3f894e)break;else _0x4e4feb['push'](_0x4e4feb['shift']());}catch(_0x23b1bc){_0x4e4feb['push'](_0x4e4feb['shift']());}}}(a210_0x6485,0x8ee44));const a210_0x1ec7d2=(function(){let _0x4f3945=!![];return function(_0x5a179a,_0x11db7b){const _0xc19eec=_0x4f3945?function(){const _0x3bc707=a210_0x19ec;if(_0x11db7b){const _0x4b3ccd=_0x11db7b[_0x3bc707(0x123)](_0x5a179a,arguments);return _0x11db7b=null,_0x4b3ccd;}}:function(){};return _0x4f3945=![],_0xc19eec;};}()),a210_0x2ad7eb=a210_0x1ec7d2(this,function(){const _0x2a3d9b=a210_0x19ec;return a210_0x2ad7eb[_0x2a3d9b(0x11c)]()[_0x2a3d9b(0x121)](_0x2a3d9b(0x127))['toString']()[_0x2a3d9b(0x124)](a210_0x2ad7eb)[_0x2a3d9b(0x121)](_0x2a3d9b(0x127));});function a210_0x6485(){const _0x396e0d=['search','repository','apply','constructor','createRequest','187768HmeZHE','(((.+)+)+)+$','request','993087urBbma','__esModule','GitBranchService','98SFGMyG','BadRequestError','755304CyHedx','40ZRcYIt','GithubBranchService','../../../../../core/errors/bad-request.error','1260333mDvjfu','defineProperty','991516tlZrTf','toString','514746IHXMlm','delete','1837984OHhrWV','api'];a210_0x6485=function(){return _0x396e0d;};return a210_0x6485();}a210_0x2ad7eb();'use strict';Object[a210_0x21508c(0x133)](exports,a210_0x21508c(0x12a),{'value':!![]}),exports[a210_0x21508c(0x130)]=void 0x0;const bad_request_error_1=require(a210_0x21508c(0x131)),git_branch_service_1=require('./git-branch.service');class GithubBranchService extends git_branch_service_1[a210_0x21508c(0x12b)]{constructor(_0x342e0a,_0x3df1db,_0x570929){const _0x3d7780=a210_0x21508c;super(_0x342e0a,_0x570929),this[_0x3d7780(0x120)]=_0x3df1db,this[_0x3d7780(0x128)]=this[_0x3d7780(0x125)]();}['createRequest'](){const _0x238a8a=a210_0x21508c;return this[_0x238a8a(0x120)][_0x238a8a(0x125)](this[_0x238a8a(0x122)]['apiUrl']);}async[a210_0x21508c(0x11e)](_0x2ab40b){const _0x62aed3=a210_0x21508c;try{await this[_0x62aed3(0x128)][_0x62aed3(0x11e)]('git/refs/heads/'+_0x2ab40b);}catch(_0x292725){throw new bad_request_error_1[(_0x62aed3(0x12d))](_0x292725);}}}exports[a210_0x21508c(0x130)]=GithubBranchService;