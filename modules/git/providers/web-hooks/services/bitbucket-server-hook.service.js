function a223_0x599f(_0x329584,_0x2424e2){const _0x35692e=a223_0x4700();return a223_0x599f=function(_0x4e763e,_0x20f02e){_0x4e763e=_0x4e763e-0xbe;let _0x470017=_0x35692e[_0x4e763e];return _0x470017;},a223_0x599f(_0x329584,_0x2424e2);}const a223_0x931f3b=a223_0x599f;(function(_0x31853c,_0x23e744){const _0x1df842=a223_0x599f,_0x3eb5cb=_0x31853c();while(!![]){try{const _0x1c6b92=parseInt(_0x1df842(0xdd))/0x1*(parseInt(_0x1df842(0xd2))/0x2)+parseInt(_0x1df842(0xd3))/0x3*(parseInt(_0x1df842(0xe3))/0x4)+-parseInt(_0x1df842(0xde))/0x5*(parseInt(_0x1df842(0xd8))/0x6)+parseInt(_0x1df842(0xe4))/0x7+-parseInt(_0x1df842(0xc1))/0x8+parseInt(_0x1df842(0xc7))/0x9*(parseInt(_0x1df842(0xc0))/0xa)+parseInt(_0x1df842(0xcb))/0xb*(parseInt(_0x1df842(0xc4))/0xc);if(_0x1c6b92===_0x23e744)break;else _0x3eb5cb['push'](_0x3eb5cb['shift']());}catch(_0x246169){_0x3eb5cb['push'](_0x3eb5cb['shift']());}}}(a223_0x4700,0xca327));const a223_0x20f02e=(function(){let _0x662ed6=!![];return function(_0x4df67e,_0x51d433){const _0x2fa4d0=_0x662ed6?function(){if(_0x51d433){const _0xf559b0=_0x51d433['apply'](_0x4df67e,arguments);return _0x51d433=null,_0xf559b0;}}:function(){};return _0x662ed6=![],_0x2fa4d0;};}()),a223_0x4e763e=a223_0x20f02e(this,function(){const _0x158541=a223_0x599f;return a223_0x4e763e[_0x158541(0xc6)]()['search'](_0x158541(0xc2))['toString']()[_0x158541(0xc8)](a223_0x4e763e)['search'](_0x158541(0xc2));});a223_0x4e763e();function a223_0x4700(){const _0x3ec650=['webhooks','fromBitbucketServer','6SWaRWm','GitHookService','BitbucketServerHookService','get','../../../../../core/errors/not-found.error','3Xxsoun','938995SsgudU','getOne','post','createRequest','api','6772hoMiqY','3184853BrqQiU','repository','delete','204770jvYMRK','8788240CvYEXT','(((.+)+)+)+$','HookDto','4224SHfyra','./git-hook.service','toString','45bqDoNf','constructor','request','BadRequestError','7887ApAFWn','map','../dto/hook.dto','apiUrl','NotFoundError','create','../../../../../core/errors/bad-request.error','241186fstNxW','1671Wjluwx','webhooks/','__esModule'];a223_0x4700=function(){return _0x3ec650;};return a223_0x4700();}'use strict';Object['defineProperty'](exports,a223_0x931f3b(0xd5),{'value':!![]}),exports[a223_0x931f3b(0xda)]=void 0x0;const bad_request_error_1=require(a223_0x931f3b(0xd1)),not_found_error_1=require(a223_0x931f3b(0xdc)),hook_dto_1=require(a223_0x931f3b(0xcd)),git_hook_service_1=require(a223_0x931f3b(0xc5));class BitbucketServerHookService extends git_hook_service_1[a223_0x931f3b(0xd9)]{constructor(_0x10fd39,_0x16c899){const _0x3805ea=a223_0x931f3b;super(_0x10fd39),this[_0x3805ea(0xe2)]=_0x16c899,this['request']=this['createRequest']();}[a223_0x931f3b(0xe1)](){const _0x4b9f5b=a223_0x931f3b;return this['api'][_0x4b9f5b(0xe1)](this[_0x4b9f5b(0xbe)][_0x4b9f5b(0xce)]);}async[a223_0x931f3b(0xd0)](_0x218388){const _0x14d445=a223_0x931f3b;try{const _0x5dbc42=await this['request'][_0x14d445(0xe0)]('webhooks',_0x218388);return hook_dto_1[_0x14d445(0xc3)][_0x14d445(0xd7)](_0x5dbc42);}catch(_0x2c1277){throw new bad_request_error_1[(_0x14d445(0xca))](_0x2c1277);}}async[a223_0x931f3b(0xdf)](_0x5ed661){const _0x3ae435=a223_0x931f3b;try{const _0x5f1d67=await this[_0x3ae435(0xc9)][_0x3ae435(0xdb)]('webhooks/'+_0x5ed661);return hook_dto_1[_0x3ae435(0xc3)]['fromBitbucketServer'](_0x5f1d67);}catch(_0x6055cf){throw new not_found_error_1[(_0x3ae435(0xcf))](_0x6055cf);}}async['getAll'](){const _0x34aaa8=a223_0x931f3b;try{const _0x487efb=await this[_0x34aaa8(0xc9)][_0x34aaa8(0xdb)](_0x34aaa8(0xd6));return _0x487efb['values'][_0x34aaa8(0xcc)](_0x1ed201=>hook_dto_1['HookDto']['fromBitbucketServer'](_0x1ed201));}catch(_0x335e31){throw new not_found_error_1[(_0x34aaa8(0xcf))](_0x335e31);}}async['update'](_0x4cd1a9,_0x4c5abd){const _0x35d4c3=a223_0x931f3b;try{const _0x728e1c=await this[_0x35d4c3(0xc9)]['put'](_0x35d4c3(0xd4)+_0x4cd1a9,_0x4c5abd);return hook_dto_1[_0x35d4c3(0xc3)][_0x35d4c3(0xd7)](_0x728e1c);}catch(_0xfd0732){throw new not_found_error_1[(_0x35d4c3(0xcf))](_0xfd0732);}}async[a223_0x931f3b(0xbf)](_0x284ab6){const _0x534598=a223_0x931f3b;try{await this[_0x534598(0xc9)][_0x534598(0xbf)]('webhooks/'+_0x284ab6);}catch(_0x5e208d){throw new not_found_error_1[(_0x534598(0xcf))](_0x5e208d);}}}exports['BitbucketServerHookService']=BitbucketServerHookService;