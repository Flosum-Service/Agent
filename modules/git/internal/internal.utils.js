const a127_0x3d0709=a127_0x199b;(function(_0x897f78,_0x2d52eb){const _0x4e0d7c=a127_0x199b,_0x2a5f57=_0x897f78();while(!![]){try{const _0x2f466d=-parseInt(_0x4e0d7c(0x16d))/0x1*(parseInt(_0x4e0d7c(0x15f))/0x2)+parseInt(_0x4e0d7c(0x177))/0x3*(-parseInt(_0x4e0d7c(0x168))/0x4)+-parseInt(_0x4e0d7c(0x15d))/0x5*(parseInt(_0x4e0d7c(0x176))/0x6)+-parseInt(_0x4e0d7c(0x15e))/0x7*(-parseInt(_0x4e0d7c(0x162))/0x8)+parseInt(_0x4e0d7c(0x16c))/0x9*(-parseInt(_0x4e0d7c(0x16f))/0xa)+-parseInt(_0x4e0d7c(0x172))/0xb*(parseInt(_0x4e0d7c(0x171))/0xc)+parseInt(_0x4e0d7c(0x166))/0xd;if(_0x2f466d===_0x2d52eb)break;else _0x2a5f57['push'](_0x2a5f57['shift']());}catch(_0x35e20e){_0x2a5f57['push'](_0x2a5f57['shift']());}}}(a127_0x2a08,0x71373));const a127_0x32d3c0=(function(){let _0x1e8387=!![];return function(_0x539ef8,_0xe1772f){const _0x1f0c46=_0x1e8387?function(){const _0x1cd709=a127_0x199b;if(_0xe1772f){const _0x49e6c5=_0xe1772f[_0x1cd709(0x167)](_0x539ef8,arguments);return _0xe1772f=null,_0x49e6c5;}}:function(){};return _0x1e8387=![],_0x1f0c46;};}()),a127_0x52d384=a127_0x32d3c0(this,function(){const _0x2debb5=a127_0x199b;return a127_0x52d384[_0x2debb5(0x16b)]()['search'](_0x2debb5(0x165))[_0x2debb5(0x16b)]()[_0x2debb5(0x160)](a127_0x52d384)[_0x2debb5(0x174)]('(((.+)+)+)+$');});a127_0x52d384();'use strict';Object['defineProperty'](exports,a127_0x3d0709(0x17d),{'value':!![]}),exports['parseGitError']=exports[a127_0x3d0709(0x178)]=exports[a127_0x3d0709(0x17f)]=exports[a127_0x3d0709(0x175)]=exports[a127_0x3d0709(0x169)]=void 0x0;const internal_server_error_1=require(a127_0x3d0709(0x161)),GIT_AUTHOR_REGEXP=/Author\:\s(.+)$/m,GIT_EMAIL_REGEXP=/Email\:\s(.+)$/m,GIT_MESSAGE_REGEXP=/Message\:\s(.+)$/m,GIT_CHANGE_REGEXP=/^(D|M|A)\s+([^\n]+)/;function extractAuthorFromCommitDescribe(_0x3ccac1){const _0x234def=a127_0x3d0709,_0x35b0e6=_0x3ccac1[_0x234def(0x16a)](GIT_AUTHOR_REGEXP);if(!_0x35b0e6)return'';return _0x35b0e6[0x1];}exports['extractAuthorFromCommitDescribe']=extractAuthorFromCommitDescribe;function extractEmailFromCommitDescribe(_0x3f263a){const _0x41f28c=_0x3f263a['match'](GIT_EMAIL_REGEXP);if(!_0x41f28c)return'';return _0x41f28c[0x1];}function a127_0x2a08(){const _0x39d235=['__esModule','parseGitError','extractMessageFromCommitDescribe','message','filter','10HodYJQ','2733787TwjMwc','1122zzTFvl','constructor','../../../core/errors/internal-server.error','16iWWxiH','added','Switched','(((.+)+)+)+$','26061386cZaLok','apply','105976FxjqVq','extractAuthorFromCommitDescribe','match','toString','5976891MqqADD','713TYwOeU','map','10LqkXmm','warning:','9296196dqECvT','11nAZdVK','InternalServerError','search','extractEmailFromCommitDescribe','1370412CzKWhc','3FMQuSV','extractChangesFromCommitDescribe','push','includes','removed','Warning!'];a127_0x2a08=function(){return _0x39d235;};return a127_0x2a08();}exports[a127_0x3d0709(0x175)]=extractEmailFromCommitDescribe;function extractMessageFromCommitDescribe(_0x4ef27d){const _0x48ef13=a127_0x3d0709,_0x18140c=_0x4ef27d[_0x48ef13(0x16a)](GIT_MESSAGE_REGEXP);if(!_0x18140c)return'';return _0x18140c[0x1];}exports[a127_0x3d0709(0x17f)]=extractMessageFromCommitDescribe;function a127_0x199b(_0x1fae11,_0xe45f9f){const _0x1464db=a127_0x2a08();return a127_0x199b=function(_0x52d384,_0x32d3c0){_0x52d384=_0x52d384-0x15c;let _0x2a082f=_0x1464db[_0x52d384];return _0x2a082f;},a127_0x199b(_0x1fae11,_0xe45f9f);}function extractChangesFromCommitDescribe(_0x4f3b16){const _0x2255fd=a127_0x3d0709,_0xd7b6f9={'added':[],'modified':[],'removed':[]};return _0x4f3b16['split']('\x0a')[_0x2255fd(0x16e)](_0x5220dc=>_0x5220dc[_0x2255fd(0x16a)](GIT_CHANGE_REGEXP))[_0x2255fd(0x15c)](_0x3ad129=>!!_0x3ad129)['forEach'](([,_0x2d94eb,_0x11c018])=>{const _0x1d2f39=_0x2255fd;switch(_0x2d94eb){case'A':_0xd7b6f9[_0x1d2f39(0x163)][_0x1d2f39(0x179)](_0x11c018);break;case'M':_0xd7b6f9['modified'][_0x1d2f39(0x179)](_0x11c018);break;case'D':_0xd7b6f9[_0x1d2f39(0x17b)][_0x1d2f39(0x179)](_0x11c018);break;}}),_0xd7b6f9;}exports[a127_0x3d0709(0x178)]=extractChangesFromCommitDescribe;function parseGitError(_0x3ae73b){const _0x5978b5=a127_0x3d0709,_0x39e386=_0x3ae73b[_0x5978b5(0x180)]||_0x3ae73b;if(_0x39e386[_0x5978b5(0x17a)]('merge')||_0x39e386[_0x5978b5(0x17a)]('pull\x20request')||_0x39e386[_0x5978b5(0x17a)](_0x5978b5(0x17c))||_0x39e386[_0x5978b5(0x17a)](_0x5978b5(0x170))||_0x39e386[_0x5978b5(0x17a)](_0x5978b5(0x164)))return _0x39e386;throw new internal_server_error_1[(_0x5978b5(0x173))](_0x3ae73b);}exports[a127_0x3d0709(0x17e)]=parseGitError;