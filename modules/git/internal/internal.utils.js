const a127_0x1ee9bb=a127_0xaa89;(function(_0x1e332c,_0x1e7c7f){const _0x4e723c=a127_0xaa89,_0x2af68b=_0x1e332c();while(!![]){try{const _0x1557a7=parseInt(_0x4e723c(0x78))/0x1+parseInt(_0x4e723c(0x79))/0x2*(parseInt(_0x4e723c(0x87))/0x3)+parseInt(_0x4e723c(0x94))/0x4*(parseInt(_0x4e723c(0x8a))/0x5)+parseInt(_0x4e723c(0x81))/0x6+parseInt(_0x4e723c(0x80))/0x7*(parseInt(_0x4e723c(0x7f))/0x8)+parseInt(_0x4e723c(0x8f))/0x9*(-parseInt(_0x4e723c(0x7e))/0xa)+parseInt(_0x4e723c(0x89))/0xb*(-parseInt(_0x4e723c(0x77))/0xc);if(_0x1557a7===_0x1e7c7f)break;else _0x2af68b['push'](_0x2af68b['shift']());}catch(_0x435991){_0x2af68b['push'](_0x2af68b['shift']());}}}(a127_0x4540,0x9369c));const a127_0x35fab1=(function(){let _0x2668b8=!![];return function(_0x3e6b73,_0x2f99a3){const _0x520d40=_0x2668b8?function(){if(_0x2f99a3){const _0x4269cd=_0x2f99a3['apply'](_0x3e6b73,arguments);return _0x2f99a3=null,_0x4269cd;}}:function(){};return _0x2668b8=![],_0x520d40;};}()),a127_0x213ca5=a127_0x35fab1(this,function(){const _0x27763e=a127_0xaa89;return a127_0x213ca5[_0x27763e(0x8b)]()[_0x27763e(0x8e)]('(((.+)+)+)+$')[_0x27763e(0x8b)]()['constructor'](a127_0x213ca5)[_0x27763e(0x8e)](_0x27763e(0x8c));});a127_0x213ca5();function a127_0x4540(){const _0x12e637=['Warning!','17002535PtJwep','1106585tWvfby','toString','(((.+)+)+)+$','push','search','1280646MXbOwH','map','warning:','Switched','added','4eOSxvz','extractMessageFromCommitDescribe','parseGitError','match','pull\x20request','includes','message','forEach','12LCmHJS','957596lOprde','34864oiHtFr','extractChangesFromCommitDescribe','split','removed','filter','80PqbLJx','24smgGLY','1862707HYscCw','6190278ekExqL','defineProperty','extractAuthorFromCommitDescribe','extractEmailFromCommitDescribe','merge','InternalServerError','48QmyEOg'];a127_0x4540=function(){return _0x12e637;};return a127_0x4540();}'use strict';Object[a127_0x1ee9bb(0x82)](exports,'__esModule',{'value':!![]}),exports[a127_0x1ee9bb(0x71)]=exports[a127_0x1ee9bb(0x7a)]=exports[a127_0x1ee9bb(0x95)]=exports[a127_0x1ee9bb(0x84)]=exports['extractAuthorFromCommitDescribe']=void 0x0;function a127_0xaa89(_0x3cf579,_0x3b0257){const _0x33182a=a127_0x4540();return a127_0xaa89=function(_0x213ca5,_0x35fab1){_0x213ca5=_0x213ca5-0x71;let _0x454090=_0x33182a[_0x213ca5];return _0x454090;},a127_0xaa89(_0x3cf579,_0x3b0257);}const internal_server_error_1=require('../../../core/errors/internal-server.error'),GIT_AUTHOR_REGEXP=/Author\:\s(.+)$/m,GIT_EMAIL_REGEXP=/Email\:\s(.+)$/m,GIT_MESSAGE_REGEXP=/Message\:\s(.+)$/m,GIT_CHANGE_REGEXP=/^(D|M|A)\s+([^\n]+)/;function extractAuthorFromCommitDescribe(_0x10de87){const _0x215f3=a127_0x1ee9bb,_0x192049=_0x10de87[_0x215f3(0x72)](GIT_AUTHOR_REGEXP);if(!_0x192049)return'';return _0x192049[0x1];}exports[a127_0x1ee9bb(0x83)]=extractAuthorFromCommitDescribe;function extractEmailFromCommitDescribe(_0x497b92){const _0x15d2de=_0x497b92['match'](GIT_EMAIL_REGEXP);if(!_0x15d2de)return'';return _0x15d2de[0x1];}exports['extractEmailFromCommitDescribe']=extractEmailFromCommitDescribe;function extractMessageFromCommitDescribe(_0x383033){const _0x4248a8=a127_0x1ee9bb,_0x9f6753=_0x383033[_0x4248a8(0x72)](GIT_MESSAGE_REGEXP);if(!_0x9f6753)return'';return _0x9f6753[0x1];}exports['extractMessageFromCommitDescribe']=extractMessageFromCommitDescribe;function extractChangesFromCommitDescribe(_0x14e7db){const _0x138bde=a127_0x1ee9bb,_0x3fd0f9={'added':[],'modified':[],'removed':[]};return _0x14e7db[_0x138bde(0x7b)]('\x0a')[_0x138bde(0x90)](_0x3c5bee=>_0x3c5bee[_0x138bde(0x72)](GIT_CHANGE_REGEXP))[_0x138bde(0x7d)](_0x53230a=>!!_0x53230a)[_0x138bde(0x76)](([,_0x48a052,_0x5c275b])=>{const _0x27bbbf=_0x138bde;switch(_0x48a052){case'A':_0x3fd0f9[_0x27bbbf(0x93)][_0x27bbbf(0x8d)](_0x5c275b);break;case'M':_0x3fd0f9['modified'][_0x27bbbf(0x8d)](_0x5c275b);break;case'D':_0x3fd0f9[_0x27bbbf(0x7c)][_0x27bbbf(0x8d)](_0x5c275b);break;}}),_0x3fd0f9;}exports['extractChangesFromCommitDescribe']=extractChangesFromCommitDescribe;function parseGitError(_0x505666){const _0x55c586=a127_0x1ee9bb,_0x763857=_0x505666[_0x55c586(0x75)]||_0x505666;if(_0x763857[_0x55c586(0x74)](_0x55c586(0x85))||_0x763857['includes'](_0x55c586(0x73))||_0x763857[_0x55c586(0x74)](_0x55c586(0x88))||_0x763857[_0x55c586(0x74)](_0x55c586(0x91))||_0x763857[_0x55c586(0x74)](_0x55c586(0x92)))return _0x763857;throw new internal_server_error_1[(_0x55c586(0x86))](_0x505666);}exports[a127_0x1ee9bb(0x71)]=parseGitError;