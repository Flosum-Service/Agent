function a75_0x37c8(){const _0x5d3ae6=['18MGwMaC','9227029dbYCxt','log','_messages','_jobPath','stringify','getCsvMessages','1423311HTDnjN','../../../../../constants/job','4419280GfWCjN','fs/promises','BaseLogger','Error:\x20','apply','(((.+)+)+)+$','search','filePath','messages','LoggerDetails','10MEkQMA','toString','join','4OxIdKS','6794194KZXikN','write','isNeedHeaders','push','__esModule','getTime','init','6lpCoer','1494481xxvZPt','JOB_LOG_DETAILS_FILENAME','defineProperty','28308276hPDRFc','_isLoggerInit','exception','5992645bHcJSV','2FQjjXX','isLoggerInit'];a75_0x37c8=function(){return _0x5d3ae6;};return a75_0x37c8();}const a75_0x3f071f=a75_0x2d51;(function(_0x18b51d,_0x46d32a){const _0x554835=a75_0x2d51,_0x504bff=_0x18b51d();while(!![]){try{const _0x48a79f=parseInt(_0x554835(0xcf))/0x1*(-parseInt(_0x554835(0xd6))/0x2)+-parseInt(_0x554835(0xdf))/0x3*(-parseInt(_0x554835(0xc6))/0x4)+parseInt(_0x554835(0xd5))/0x5+-parseInt(_0x554835(0xce))/0x6*(-parseInt(_0x554835(0xd9))/0x7)+parseInt(_0x554835(0xb9))/0x8*(parseInt(_0x554835(0xd8))/0x9)+-parseInt(_0x554835(0xc3))/0xa*(-parseInt(_0x554835(0xc7))/0xb)+-parseInt(_0x554835(0xd2))/0xc;if(_0x48a79f===_0x46d32a)break;else _0x504bff['push'](_0x504bff['shift']());}catch(_0x1055bb){_0x504bff['push'](_0x504bff['shift']());}}}(a75_0x37c8,0xd1fb3));const a75_0x64060d=(function(){let _0x293937=!![];return function(_0x23e7bb,_0x45882e){const _0x349000=_0x293937?function(){const _0x3fbf57=a75_0x2d51;if(_0x45882e){const _0x4fcded=_0x45882e[_0x3fbf57(0xbd)](_0x23e7bb,arguments);return _0x45882e=null,_0x4fcded;}}:function(){};return _0x293937=![],_0x349000;};}()),a75_0x593d88=a75_0x64060d(this,function(){const _0x2e763c=a75_0x2d51;return a75_0x593d88[_0x2e763c(0xc4)]()['search'](_0x2e763c(0xbe))[_0x2e763c(0xc4)]()['constructor'](a75_0x593d88)[_0x2e763c(0xbf)]('(((.+)+)+)+$');});a75_0x593d88();'use strict';var __importDefault=this&&this['__importDefault']||function(_0x442a5e){const _0xaac925=a75_0x2d51;return _0x442a5e&&_0x442a5e[_0xaac925(0xcb)]?_0x442a5e:{'default':_0x442a5e};};Object[a75_0x3f071f(0xd1)](exports,a75_0x3f071f(0xcb),{'value':!![]}),exports['LoggerDetails']=void 0x0;function a75_0x2d51(_0x156eca,_0x3d1a6e){const _0x11b01d=a75_0x37c8();return a75_0x2d51=function(_0x593d88,_0x64060d){_0x593d88=_0x593d88-0xb8;let _0x37c8e0=_0x11b01d[_0x593d88];return _0x37c8e0;},a75_0x2d51(_0x156eca,_0x3d1a6e);}const path_1=__importDefault(require('path')),base_logger_1=require('./base-logger'),promises_1=require(a75_0x3f071f(0xba)),sync_1=require('csv-stringify/sync'),job_1=require(a75_0x3f071f(0xb8));class LoggerDetails extends base_logger_1[a75_0x3f071f(0xbb)]{constructor(){const _0x564824=a75_0x3f071f;super(...arguments),this[_0x564824(0xdb)]=[],this[_0x564824(0xc9)]=!![],this[_0x564824(0xd3)]=![];}get[a75_0x3f071f(0xd7)](){const _0x414c6d=a75_0x3f071f;return this[_0x414c6d(0xd3)];}set[a75_0x3f071f(0xd7)](_0x5cb210){const _0x68c66b=a75_0x3f071f;this[_0x68c66b(0xd3)]=_0x5cb210;}get[a75_0x3f071f(0xc1)](){const _0xa863ab=a75_0x3f071f;if(!this['isLoggerInit'])throw new Error('Logger\x20Job\x20State\x20wasn\x27t\x20init');return this[_0xa863ab(0xdb)];}get[a75_0x3f071f(0xc0)](){const _0x1b9bb4=a75_0x3f071f;return path_1['default'][_0x1b9bb4(0xc5)](this[_0x1b9bb4(0xdc)],job_1[_0x1b9bb4(0xd0)]);}async[a75_0x3f071f(0xcd)](){const _0x1ddd71=a75_0x3f071f;return await(0x0,promises_1['writeFile'])(this['filePath'],''),await this['start'](),this[_0x1ddd71(0xd7)]=!![],this;}[a75_0x3f071f(0xda)](_0x5cb8f1,_0x6dc9f){const _0x2bcef6=a75_0x3f071f,_0x3aef9a={'message':_0x5cb8f1,'date':new Date()[_0x2bcef6(0xcc)](),'objectName':_0x6dc9f};this[_0x2bcef6(0xc1)][_0x2bcef6(0xca)](_0x3aef9a),this['updateLoggerState']();}[a75_0x3f071f(0xd4)](_0x38b655,_0x55093e){const _0x28fcdf=a75_0x3f071f;this[_0x28fcdf(0xda)](_0x28fcdf(0xbc)+_0x38b655,_0x55093e);}async[a75_0x3f071f(0xc8)](){const _0x119d72=a75_0x3f071f,_0x2d14d9=this[_0x119d72(0xde)]();this[_0x119d72(0xdb)]=[],await(0x0,promises_1['appendFile'])(this['filePath'],_0x2d14d9);}[a75_0x3f071f(0xde)](){const _0x22b053=a75_0x3f071f,_0x381e3a=(0x0,sync_1[_0x22b053(0xdd)])(this[_0x22b053(0xdb)],{'header':this['isNeedHeaders']});return this['isNeedHeaders']=![],_0x381e3a;}}exports[a75_0x3f071f(0xc2)]=LoggerDetails;