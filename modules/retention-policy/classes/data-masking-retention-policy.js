const a280_0x240b0b=a280_0x1501;(function(_0x42daf0,_0x37aa58){const _0xf10bb=a280_0x1501,_0x405ba0=_0x42daf0();while(!![]){try{const _0x3553a8=-parseInt(_0xf10bb(0x18c))/0x1*(-parseInt(_0xf10bb(0x183))/0x2)+-parseInt(_0xf10bb(0x196))/0x3+parseInt(_0xf10bb(0x19e))/0x4+parseInt(_0xf10bb(0x178))/0x5*(-parseInt(_0xf10bb(0x18a))/0x6)+parseInt(_0xf10bb(0x1a1))/0x7*(-parseInt(_0xf10bb(0x193))/0x8)+parseInt(_0xf10bb(0x195))/0x9+-parseInt(_0xf10bb(0x199))/0xa;if(_0x3553a8===_0x37aa58)break;else _0x405ba0['push'](_0x405ba0['shift']());}catch(_0x35a6d2){_0x405ba0['push'](_0x405ba0['shift']());}}}(a280_0x21b2,0x313ff));const a280_0x5e8f92=(function(){let _0x1fa2bd=!![];return function(_0x3aa9da,_0x3038aa){const _0x3b73c0=_0x1fa2bd?function(){const _0x35d0c4=a280_0x1501;if(_0x3038aa){const _0x386e0b=_0x3038aa[_0x35d0c4(0x17d)](_0x3aa9da,arguments);return _0x3038aa=null,_0x386e0b;}}:function(){};return _0x1fa2bd=![],_0x3b73c0;};}()),a280_0x146eaa=a280_0x5e8f92(this,function(){const _0x51e084=a280_0x1501;return a280_0x146eaa[_0x51e084(0x19a)]()['search'](_0x51e084(0x181))['toString']()[_0x51e084(0x19d)](a280_0x146eaa)[_0x51e084(0x194)](_0x51e084(0x181));});function a280_0x21b2(){const _0x26b305=['path','utf-8','EXPIRED_RANGE_DATE','defineProperty','280PCuLZb','search','2890908AOvTxG','427779mINcGZ','getTime','execute','3495980kGbWrd','toString','error','__esModule','constructor','386764YTHVKn','isExpiredDate','../../../core','7399QyqLJn','maskingFolderPath','logger','../../../constants/job','5OwmxwQ','parse','../../shared/utils/job.utils','MaskingService','readFile','apply','deleteJob','join','JOB_LOG_STATE_FILENAME','(((.+)+)+)+$','getJobCompletedDate','779282Ajddnw','@flosum/utils','__importDefault','getJobsIds','push','DataMaskingRetentionPolicy','fs/promises','459786SZiFoq','filterExpiredJobs','1UXyPkY','isExistsPath','name'];a280_0x21b2=function(){return _0x26b305;};return a280_0x21b2();}a280_0x146eaa();'use strict';var __importDefault=this&&this[a280_0x240b0b(0x185)]||function(_0x5cf06a){const _0x185c10=a280_0x240b0b;return _0x5cf06a&&_0x5cf06a[_0x185c10(0x19c)]?_0x5cf06a:{'default':_0x5cf06a};};Object[a280_0x240b0b(0x192)](exports,a280_0x240b0b(0x19c),{'value':!![]}),exports[a280_0x240b0b(0x188)]=void 0x0;const promises_1=require(a280_0x240b0b(0x189)),core_1=require(a280_0x240b0b(0x1a0)),utils_1=require(a280_0x240b0b(0x184)),job_1=require(a280_0x240b0b(0x177)),job_utils_1=__importDefault(require(a280_0x240b0b(0x17a))),masking_service_1=require('../../data-masking/services/masking.service'),path_1=__importDefault(require(a280_0x240b0b(0x18f)));class DataMaskingRetentionPolicy{constructor(){const _0x2cd3d5=a280_0x240b0b;this[_0x2cd3d5(0x191)]=0x9a7ec800,this[_0x2cd3d5(0x176)]=new core_1['Logger'](DataMaskingRetentionPolicy[_0x2cd3d5(0x18e)]);}async[a280_0x240b0b(0x198)](){const _0x373b39=a280_0x240b0b;try{const _0x161199=await job_utils_1['default'][_0x373b39(0x186)](masking_service_1['MaskingService']['maskingFolderPath']),_0x28bda8=await this[_0x373b39(0x18b)](_0x161199);for(const _0x2986f5 of _0x28bda8){await this[_0x373b39(0x17e)](_0x2986f5);}}catch(_0x17ad38){this[_0x373b39(0x176)][_0x373b39(0x19b)](_0x17ad38);}}async[a280_0x240b0b(0x18b)](_0x3a704a){const _0xfd47d8=a280_0x240b0b,_0x1a4cfc=[];for(const _0x1e5388 of _0x3a704a){const _0x5026ef=await this[_0xfd47d8(0x182)](_0x1e5388),_0x13aebb=_0x5026ef&&this[_0xfd47d8(0x19f)](_0x5026ef);_0x13aebb&&_0x1a4cfc[_0xfd47d8(0x187)](_0x1e5388);}return _0x1a4cfc;}async[a280_0x240b0b(0x182)](_0x4379b9){const _0x2867bc=a280_0x240b0b;var _0x514809;const _0x54e3c4=path_1['default'][_0x2867bc(0x17f)](masking_service_1[_0x2867bc(0x17b)]['maskingFolderPath'],_0x4379b9,job_1[_0x2867bc(0x180)]);if(!await utils_1['FsUtils'][_0x2867bc(0x18d)](_0x54e3c4))return null;const _0x28f2d3=await(0x0,promises_1[_0x2867bc(0x17c)])(_0x54e3c4,{'encoding':_0x2867bc(0x190)});return(_0x514809=JSON[_0x2867bc(0x179)](_0x28f2d3)['completedDate'])!==null&&_0x514809!==void 0x0?_0x514809:null;}[a280_0x240b0b(0x19f)](_0x206a34){const _0x3a577a=a280_0x240b0b;return new Date()[_0x3a577a(0x197)]()-_0x206a34>this[_0x3a577a(0x191)];}[a280_0x240b0b(0x17e)](_0x1e4399){const _0x3646d9=a280_0x240b0b,_0x1800f2=path_1['default']['join'](masking_service_1[_0x3646d9(0x17b)][_0x3646d9(0x1a2)],_0x1e4399);return(0x0,promises_1['rm'])(_0x1800f2,{'recursive':!![],'force':!![]});}}function a280_0x1501(_0x309fee,_0x31b089){const _0x17f772=a280_0x21b2();return a280_0x1501=function(_0x146eaa,_0x5e8f92){_0x146eaa=_0x146eaa-0x176;let _0x21b29b=_0x17f772[_0x146eaa];return _0x21b29b;},a280_0x1501(_0x309fee,_0x31b089);}exports[a280_0x240b0b(0x188)]=DataMaskingRetentionPolicy;