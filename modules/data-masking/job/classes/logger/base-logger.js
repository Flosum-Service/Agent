function a56_0x1a0e(_0x21a158,_0xb602d1){var _0x472463=a56_0x294f();return a56_0x1a0e=function(_0x56d050,_0xf237c2){_0x56d050=_0x56d050-0xdb;var _0x294fff=_0x472463[_0x56d050];return _0x294fff;},a56_0x1a0e(_0x21a158,_0xb602d1);}var a56_0x495855=a56_0x1a0e;(function(_0x1c39e5,_0x2de4a6){var _0x1d31c7=a56_0x1a0e,_0x15be1d=_0x1c39e5();while(!![]){try{var _0x5b60fc=parseInt(_0x1d31c7(0xe7))/0x1*(parseInt(_0x1d31c7(0x102))/0x2)+-parseInt(_0x1d31c7(0xf2))/0x3+-parseInt(_0x1d31c7(0x101))/0x4*(-parseInt(_0x1d31c7(0xf3))/0x5)+-parseInt(_0x1d31c7(0xec))/0x6+-parseInt(_0x1d31c7(0xea))/0x7+-parseInt(_0x1d31c7(0xf1))/0x8*(-parseInt(_0x1d31c7(0xfa))/0x9)+-parseInt(_0x1d31c7(0xde))/0xa;if(_0x5b60fc===_0x2de4a6)break;else _0x15be1d['push'](_0x15be1d['shift']());}catch(_0x57e30c){_0x15be1d['push'](_0x15be1d['shift']());}}}(a56_0x294f,0x8db87));var a56_0xf237c2=(function(){var _0x3c581e=!![];return function(_0x318f4b,_0x3034a7){var _0x1e6c7b=_0x3c581e?function(){if(_0x3034a7){var _0x15e86f=_0x3034a7['apply'](_0x318f4b,arguments);return _0x3034a7=null,_0x15e86f;}}:function(){};return _0x3c581e=![],_0x1e6c7b;};}()),a56_0x56d050=a56_0xf237c2(this,function(){var _0x226829=a56_0x1a0e;return a56_0x56d050['toString']()[_0x226829(0x100)](_0x226829(0xe2))[_0x226829(0xdf)]()[_0x226829(0xe4)](a56_0x56d050)[_0x226829(0x100)]('(((.+)+)+)+$');});a56_0x56d050();'use strict';var __createBinding=this&&this[a56_0x495855(0xf7)]||(Object[a56_0x495855(0xee)]?function(_0x4e5ed2,_0xb539ec,_0x3bf39b,_0x4ec89a){var _0x703b77=a56_0x495855;if(_0x4ec89a===undefined)_0x4ec89a=_0x3bf39b;var _0x2580a0=Object[_0x703b77(0xeb)](_0xb539ec,_0x3bf39b);(!_0x2580a0||('get'in _0x2580a0?!_0xb539ec[_0x703b77(0x105)]:_0x2580a0[_0x703b77(0xf0)]||_0x2580a0[_0x703b77(0xe5)]))&&(_0x2580a0={'enumerable':!![],'get':function(){return _0xb539ec[_0x3bf39b];}}),Object[_0x703b77(0xe8)](_0x4e5ed2,_0x4ec89a,_0x2580a0);}:function(_0x2909fb,_0x4c579e,_0xd742e0,_0x1664d6){if(_0x1664d6===undefined)_0x1664d6=_0xd742e0;_0x2909fb[_0x1664d6]=_0x4c579e[_0xd742e0];}),__setModuleDefault=this&&this['__setModuleDefault']||(Object[a56_0x495855(0xee)]?function(_0x3fa507,_0x1343ee){Object['defineProperty'](_0x3fa507,'default',{'enumerable':!![],'value':_0x1343ee});}:function(_0x4a1ed3,_0x1f9f82){var _0x55345f=a56_0x495855;_0x4a1ed3[_0x55345f(0x103)]=_0x1f9f82;}),__importStar=this&&this[a56_0x495855(0xfb)]||function(_0x5d71e9){var _0x4bb125=a56_0x495855;if(_0x5d71e9&&_0x5d71e9[_0x4bb125(0x105)])return _0x5d71e9;var _0x5c214c={};if(_0x5d71e9!=null){for(var _0x429a5c in _0x5d71e9)if(_0x429a5c!=='default'&&Object[_0x4bb125(0xe6)][_0x4bb125(0xf5)]['call'](_0x5d71e9,_0x429a5c))__createBinding(_0x5c214c,_0x5d71e9,_0x429a5c);}return __setModuleDefault(_0x5c214c,_0x5d71e9),_0x5c214c;};Object['defineProperty'](exports,a56_0x495855(0x105),{'value':!![]}),exports['BaseLogger']=void 0x0;const uuid=__importStar(require(a56_0x495855(0xf6))),core_1=require(a56_0x495855(0xf9));class BaseLogger{constructor(_0x4c3893,_0x5769b7){var _0x1cddd1=a56_0x495855;this['_jobPath']=_0x4c3893,this[_0x1cddd1(0xf4)]=_0x5769b7,this[_0x1cddd1(0xe0)]=new core_1[(_0x1cddd1(0xed))](this[_0x1cddd1(0xf4)]),this['LOGGER_UPDATE_INTERVAL']=0x1388;}get[a56_0x495855(0xdd)](){var _0x48995c=a56_0x495855;return this[_0x48995c(0xe3)]===this['_previousLoggerState'];}async[a56_0x495855(0xfc)](){var _0x3e28ab=a56_0x495855;this[_0x3e28ab(0xef)]&&clearTimeout(this[_0x3e28ab(0xef)]),await this[_0x3e28ab(0xff)]();}[a56_0x495855(0xe9)](){var _0x50a2c9=a56_0x495855;this[_0x50a2c9(0xe3)]=uuid['v4']();}async['start'](){var _0x24f298=a56_0x495855;this['_writeTimeout']=setInterval(async()=>{var _0x45d11a=a56_0x1a0e;await this[_0x45d11a(0xff)]()[_0x45d11a(0xdb)](_0x574623=>this[_0x45d11a(0xe0)][_0x45d11a(0xdc)](_0x574623[_0x45d11a(0xe1)]));},this[_0x24f298(0xf8)]);}async[a56_0x495855(0xff)](){var _0x1e6b43=a56_0x495855;!this['isActualLoggerState']&&(this[_0x1e6b43(0xfd)]=this[_0x1e6b43(0xe3)],await this[_0x1e6b43(0xfe)]());}}function a56_0x294f(){var _0x296915=['default','BaseLogger','__esModule','catch','error','isActualLoggerState','1945980sdbDSW','toString','_systemLogger','message','(((.+)+)+)+$','_loggerState','constructor','configurable','prototype','143gkFzYu','defineProperty','updateLoggerState','4425085cfsiau','getOwnPropertyDescriptor','167484jbodKv','Logger','create','_writeTimeout','writable','8cRtERe','480123EzrGSm','67055oKdYjs','_jobId','hasOwnProperty','uuid','__createBinding','LOGGER_UPDATE_INTERVAL','../../../../../core','2776374lwUQWG','__importStar','kill','_previousLoggerState','write','writeLog','search','56jzKfxs','15370XrqDKv'];a56_0x294f=function(){return _0x296915;};return a56_0x294f();}exports[a56_0x495855(0x104)]=BaseLogger;