function a317_0xc34b(_0x58ce3f,_0x29329e){const _0x1b138a=a317_0x5860();return a317_0xc34b=function(_0x5b3e9c,_0x284339){_0x5b3e9c=_0x5b3e9c-0x196;let _0x5860e2=_0x1b138a[_0x5b3e9c];return _0x5860e2;},a317_0xc34b(_0x58ce3f,_0x29329e);}const a317_0x3a5c23=a317_0xc34b;(function(_0x355dcd,_0x351bb5){const _0x320ddb=a317_0xc34b,_0x1fd5aa=_0x355dcd();while(!![]){try{const _0x338143=-parseInt(_0x320ddb(0x1b5))/0x1*(parseInt(_0x320ddb(0x1b4))/0x2)+-parseInt(_0x320ddb(0x19e))/0x3+-parseInt(_0x320ddb(0x1b7))/0x4+-parseInt(_0x320ddb(0x1b0))/0x5+parseInt(_0x320ddb(0x1a7))/0x6+-parseInt(_0x320ddb(0x1b9))/0x7+parseInt(_0x320ddb(0x198))/0x8*(parseInt(_0x320ddb(0x1a9))/0x9);if(_0x338143===_0x351bb5)break;else _0x1fd5aa['push'](_0x1fd5aa['shift']());}catch(_0x1860fe){_0x1fd5aa['push'](_0x1fd5aa['shift']());}}}(a317_0x5860,0xf2771));const a317_0x284339=(function(){let _0x500b85=!![];return function(_0xf1857,_0x17ba39){const _0x38963d=_0x500b85?function(){const _0x711b68=a317_0xc34b;if(_0x17ba39){const _0x5e8193=_0x17ba39[_0x711b68(0x199)](_0xf1857,arguments);return _0x17ba39=null,_0x5e8193;}}:function(){};return _0x500b85=![],_0x38963d;};}()),a317_0x5b3e9c=a317_0x284339(this,function(){const _0x29b5fb=a317_0xc34b;return a317_0x5b3e9c[_0x29b5fb(0x1aa)]()['search']('(((.+)+)+)+$')['toString']()[_0x29b5fb(0x19f)](a317_0x5b3e9c)[_0x29b5fb(0x1b1)](_0x29b5fb(0x1ae));});a317_0x5b3e9c();'use strict';var __importDefault=this&&this[a317_0x3a5c23(0x1ab)]||function(_0x46e802){const _0xe6ea18=a317_0x3a5c23;return _0x46e802&&_0x46e802[_0xe6ea18(0x1a0)]?_0x46e802:{'default':_0x46e802};};Object[a317_0x3a5c23(0x196)](exports,a317_0x3a5c23(0x1a0),{'value':!![]}),exports['Job']=void 0x0;const minimist_1=__importDefault(require('minimist')),state_manger_1=__importDefault(require(a317_0x3a5c23(0x1ba))),core_1=require(a317_0x3a5c23(0x19c)),logger_1=__importDefault(require(a317_0x3a5c23(0x1a5))),retrieve_metadata_1=__importDefault(require(a317_0x3a5c23(0x19b)));function a317_0x5860(){const _0x261ab7=['../../../core','then','1974831pKaxsM','constructor','__esModule','catch','setInProgress','setError','slice','./classes/logger','setCompleted','11753412ztNdSe','init','1251AiMHXE','toString','__importDefault','log','exit','(((.+)+)+)+$','argv','2627180HNCuLK','search','Job','default','112bIxHSk','21694HlsUse','error','5318728zQqmoz','Retrieve\x20metadata\x20job\x20has\x20been\x20started','13473075dhIiKA','../../shared/managers/state-manger','defineProperty','execute','269768zDWcNc','apply','Logger','./classes/retrieve-metadata'];a317_0x5860=function(){return _0x261ab7;};return a317_0x5860();}class Job{constructor(){const _0x3da610=a317_0x3a5c23,{jobId:_0x348f96,jobStorePath:_0x1ccfaf}=(0x0,minimist_1[_0x3da610(0x1b3)])(process[_0x3da610(0x1af)][_0x3da610(0x1a4)](0x2));this['jobStorePath']=_0x1ccfaf,this['jobId']=_0x348f96;}async[a317_0x3a5c23(0x197)](){const _0x1f0260=a317_0x3a5c23,_0x1de636=new core_1[(_0x1f0260(0x19a))](this['jobId']),_0x4c26e8=new logger_1[(_0x1f0260(0x1b3))](this['jobId'],_0x1de636),_0x558279=await new state_manger_1[(_0x1f0260(0x1b3))](this['jobStorePath'])[_0x1f0260(0x1a8)]();await _0x4c26e8[_0x1f0260(0x1ac)](_0x1f0260(0x1b8));try{await _0x558279[_0x1f0260(0x1a2)](),await new retrieve_metadata_1['default'](this['jobStorePath'],_0x4c26e8,_0x558279)[_0x1f0260(0x197)](),await _0x558279[_0x1f0260(0x1a6)](),await _0x4c26e8[_0x1f0260(0x1ac)]('Retrieve\x20metadata\x20job\x20has\x20been\x20completed');}catch(_0x4c179a){await _0x558279[_0x1f0260(0x1a3)](_0x4c179a),await _0x4c26e8[_0x1f0260(0x1b6)]('Retrieve\x20metadata\x20job\x20has\x20been\x20failed'),await _0x4c26e8['error'](_0x4c179a['message']);}}}exports[a317_0x3a5c23(0x1b2)]=Job,new Job()[a317_0x3a5c23(0x197)]()[a317_0x3a5c23(0x19d)](()=>process[a317_0x3a5c23(0x1ad)](0x0))[a317_0x3a5c23(0x1a1)](()=>process[a317_0x3a5c23(0x1ad)](0x1));