const a66_0x127701=a66_0xccc5;(function(_0x418e71,_0x2f1ed7){const _0x2bbbef=a66_0xccc5,_0x140bd2=_0x418e71();while(!![]){try{const _0x2432ad=parseInt(_0x2bbbef(0xa2))/0x1*(parseInt(_0x2bbbef(0x98))/0x2)+-parseInt(_0x2bbbef(0xa4))/0x3+-parseInt(_0x2bbbef(0xa1))/0x4*(parseInt(_0x2bbbef(0x9c))/0x5)+-parseInt(_0x2bbbef(0xa3))/0x6*(-parseInt(_0x2bbbef(0xa7))/0x7)+-parseInt(_0x2bbbef(0xa8))/0x8+-parseInt(_0x2bbbef(0xb4))/0x9+parseInt(_0x2bbbef(0xa5))/0xa;if(_0x2432ad===_0x2f1ed7)break;else _0x140bd2['push'](_0x140bd2['shift']());}catch(_0x274ffa){_0x140bd2['push'](_0x140bd2['shift']());}}}(a66_0xa9b7,0x847a6));function a66_0xa9b7(){const _0x50eb25=['deployRecords','records','executeDeploy','baseDeployPayload','10qnCroJ','BulkV1Deploy','isExceedCSVSizeLimit','deployer','60BVWOxY','./base-bulk-deploy','BaseBulkDeploy','push','search','67516CAKrff','64883zvnVVR','174wWaikh','2763054Cwjawt','25347380ljHRbH','(((.+)+)+)+$','62538DUbdWC','7283016kOTkfE','#N/A','NULL_CSV_VALUE','toString','@flosum/utils','length','constructor','castRecord','recordsCsvSize','execute','SimpleBulkv1DeployData','MAX_RECORDS_CHUNK_COUNT','4874994AgPsUP','__esModule'];a66_0xa9b7=function(){return _0x50eb25;};return a66_0xa9b7();}const a66_0x4f1ffb=(function(){let _0x508a5f=!![];return function(_0x25f89a,_0x2d445e){const _0x1b389d=_0x508a5f?function(){if(_0x2d445e){const _0x5e8620=_0x2d445e['apply'](_0x25f89a,arguments);return _0x2d445e=null,_0x5e8620;}}:function(){};return _0x508a5f=![],_0x1b389d;};}()),a66_0x192157=a66_0x4f1ffb(this,function(){const _0x260b4f=a66_0xccc5;return a66_0x192157[_0x260b4f(0xab)]()[_0x260b4f(0xa0)](_0x260b4f(0xa6))[_0x260b4f(0xab)]()[_0x260b4f(0xae)](a66_0x192157)[_0x260b4f(0xa0)](_0x260b4f(0xa6));});a66_0x192157();'use strict';Object['defineProperty'](exports,a66_0x127701(0xb5),{'value':!![]}),exports[a66_0x127701(0x99)]=void 0x0;const salesforce_1=require('@flosum/salesforce'),sync_1=require('csv-stringify/sync'),base_bulk_deploy_1=require(a66_0x127701(0x9d)),utils_1=require(a66_0x127701(0xac));function a66_0xccc5(_0x4f0466,_0x40c809){const _0x461f87=a66_0xa9b7();return a66_0xccc5=function(_0x192157,_0x4f1ffb){_0x192157=_0x192157-0x97;let _0xa9b794=_0x461f87[_0x192157];return _0xa9b794;},a66_0xccc5(_0x4f0466,_0x40c809);}class BulkV1Deploy extends base_bulk_deploy_1[a66_0x127701(0x9e)]{constructor(_0x12dea4){const _0x47d541=a66_0x127701;super(_0x12dea4),this[_0x47d541(0x9b)]=new salesforce_1[(_0x47d541(0xb2))](this[_0x47d541(0x97)]);}async[a66_0x127701(0x9f)](_0x20584e,_0x29334e,_0x4630a0){const _0x47c8dc=a66_0x127701,_0x28d2de=this['castRecord'](_0x20584e),_0x61a596=this[_0x47c8dc(0xb7)][_0x47c8dc(0xad)]>=base_bulk_deploy_1[_0x47c8dc(0x9e)][_0x47c8dc(0xb3)]||this[_0x47c8dc(0x9a)](_0x28d2de);_0x61a596&&await this[_0x47c8dc(0xb8)](),this[_0x47c8dc(0xb0)]+=utils_1['CsvUtils']['calculateRecordSize'](_0x20584e),this[_0x47c8dc(0xb7)][_0x47c8dc(0x9f)](_0x28d2de),_0x4630a0();}[a66_0x127701(0xb6)](_0x55794a){const _0x1ff27b=a66_0x127701,_0x3754eb=(0x0,sync_1['stringify'])(_0x55794a,{'header':!![]});return this[_0x1ff27b(0x9b)][_0x1ff27b(0xb1)](_0x3754eb);}[a66_0x127701(0xaf)](_0x2ae67b){const _0x43984c={};for(const _0x439162 in _0x2ae67b){_0x2ae67b[_0x439162]===null?_0x43984c[_0x439162]=BulkV1Deploy['NULL_CSV_VALUE']:_0x43984c[_0x439162]=_0x2ae67b[_0x439162];}return _0x43984c;}}exports[a66_0x127701(0x99)]=BulkV1Deploy,BulkV1Deploy[a66_0x127701(0xaa)]=a66_0x127701(0xa9);