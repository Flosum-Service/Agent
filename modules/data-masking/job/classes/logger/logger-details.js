const a57_0x13b31f=a57_0x1349;function a57_0x4914(){const _0x4dc51c=['6125160HMiWWX','search','JOB_LOG_DETAILS_FILENAME','BaseLogger','getCsvMessages','3448SukncK','log','8oYKMyf','_messages','default','toString','isNeedHeaders','isLoggerInit','messages','exception','push','__esModule','LoggerDetails','24051610ZrAiuy','constructor','_jobPath','_isLoggerInit','path','12RRKCEx','./base-logger','182706aGmnCx','3yIFwQf','5444973podOoJ','init','643030YzMdQy','join','filePath','appendFile','321790xxuaaW','writeFile','csv-stringify/sync','18VSDJST','../../../../../constants/job','getTime'];a57_0x4914=function(){return _0x4dc51c;};return a57_0x4914();}(function(_0x3aa040,_0x2ae3da){const _0x361d28=a57_0x1349,_0x183278=_0x3aa040();while(!![]){try{const _0x5c2dee=parseInt(_0x361d28(0x1a6))/0x1+parseInt(_0x361d28(0x193))/0x2*(-parseInt(_0x361d28(0x194))/0x3)+parseInt(_0x361d28(0x191))/0x4*(-parseInt(_0x361d28(0x197))/0x5)+parseInt(_0x361d28(0x19e))/0x6*(-parseInt(_0x361d28(0x19b))/0x7)+parseInt(_0x361d28(0x1a8))/0x8*(-parseInt(_0x361d28(0x195))/0x9)+-parseInt(_0x361d28(0x1a1))/0xa+parseInt(_0x361d28(0x18c))/0xb;if(_0x5c2dee===_0x2ae3da)break;else _0x183278['push'](_0x183278['shift']());}catch(_0x265057){_0x183278['push'](_0x183278['shift']());}}}(a57_0x4914,0x573f4));const a57_0x1699e2=(function(){let _0xbf0d57=!![];return function(_0x198d97,_0x393996){const _0x7095ad=_0xbf0d57?function(){if(_0x393996){const _0x4c5684=_0x393996['apply'](_0x198d97,arguments);return _0x393996=null,_0x4c5684;}}:function(){};return _0xbf0d57=![],_0x7095ad;};}()),a57_0x4a8fc8=a57_0x1699e2(this,function(){const _0x2c9fc0=a57_0x1349;return a57_0x4a8fc8[_0x2c9fc0(0x184)]()[_0x2c9fc0(0x1a2)]('(((.+)+)+)+$')[_0x2c9fc0(0x184)]()[_0x2c9fc0(0x18d)](a57_0x4a8fc8)[_0x2c9fc0(0x1a2)]('(((.+)+)+)+$');});a57_0x4a8fc8();'use strict';function a57_0x1349(_0x1cb809,_0x500a68){const _0x2de649=a57_0x4914();return a57_0x1349=function(_0x4a8fc8,_0x1699e2){_0x4a8fc8=_0x4a8fc8-0x182;let _0x4914fc=_0x2de649[_0x4a8fc8];return _0x4914fc;},a57_0x1349(_0x1cb809,_0x500a68);}var __importDefault=this&&this['__importDefault']||function(_0xa435a0){return _0xa435a0&&_0xa435a0['__esModule']?_0xa435a0:{'default':_0xa435a0};};Object['defineProperty'](exports,a57_0x13b31f(0x18a),{'value':!![]}),exports[a57_0x13b31f(0x18b)]=void 0x0;const path_1=__importDefault(require(a57_0x13b31f(0x190))),base_logger_1=require(a57_0x13b31f(0x192)),promises_1=require('fs/promises'),sync_1=require(a57_0x13b31f(0x19d)),job_1=require(a57_0x13b31f(0x19f));class LoggerDetails extends base_logger_1[a57_0x13b31f(0x1a4)]{constructor(){const _0x363131=a57_0x13b31f;super(...arguments),this['_messages']=[],this[_0x363131(0x185)]=!![],this[_0x363131(0x18f)]=![];}get['isLoggerInit'](){const _0x101387=a57_0x13b31f;return this[_0x101387(0x18f)];}set[a57_0x13b31f(0x186)](_0x3a0b80){const _0x27d60e=a57_0x13b31f;this[_0x27d60e(0x18f)]=_0x3a0b80;}get[a57_0x13b31f(0x187)](){const _0x2a265f=a57_0x13b31f;if(!this['isLoggerInit'])throw new Error('Logger\x20Job\x20State\x20wasn\x27t\x20init');return this[_0x2a265f(0x182)];}get['filePath'](){const _0xff3f36=a57_0x13b31f;return path_1[_0xff3f36(0x183)][_0xff3f36(0x198)](this[_0xff3f36(0x18e)],job_1[_0xff3f36(0x1a3)]);}async[a57_0x13b31f(0x196)](){const _0x2886b9=a57_0x13b31f;return await(0x0,promises_1[_0x2886b9(0x19c)])(this[_0x2886b9(0x199)],''),await this['start'](),this[_0x2886b9(0x186)]=!![],this;}[a57_0x13b31f(0x1a7)](_0x6ae749,_0x3c7bcb){const _0x2a4bc9=a57_0x13b31f,_0x2ec241={'message':_0x6ae749,'date':new Date()[_0x2a4bc9(0x1a0)](),'objectName':_0x3c7bcb};this['messages'][_0x2a4bc9(0x189)](_0x2ec241),this['updateLoggerState']();}[a57_0x13b31f(0x188)](_0x57b5f5,_0x3b6ec4){const _0xdb9b29=a57_0x13b31f;this[_0xdb9b29(0x1a7)]('Error:\x20'+_0x57b5f5,_0x3b6ec4);}async['write'](){const _0x640383=a57_0x13b31f,_0x44a66c=this['getCsvMessages']();this[_0x640383(0x182)]=[],await(0x0,promises_1[_0x640383(0x19a)])(this[_0x640383(0x199)],_0x44a66c);}[a57_0x13b31f(0x1a5)](){const _0x628b10=a57_0x13b31f,_0x5e1ef2=(0x0,sync_1['stringify'])(this[_0x628b10(0x182)],{'header':this[_0x628b10(0x185)]});return this['isNeedHeaders']=![],_0x5e1ef2;}}exports['LoggerDetails']=LoggerDetails;