const a80_0x47ff1a=a80_0x317d;function a80_0xa183(){const _0x330858=['1583260YRndIE','calculateRecordSize','search','constructor','apply','deployRecords','CsvUtils','keys','BaseBulkDeploy','31230BhOPto','headerCsvSize','MAX_RECORDS_CHUNK_COUNT','close','finish','handleDeployResults','calculateHeaderSize','defineProperty','1864syyLgz','length','recordsCsvSize','executeDeploy','284vpOkxo','133oiVGBo','deployer','716349VcInnf','toString','push','__esModule','20HVWmpj','@flosum/utils','flat','(((.+)+)+)+$','17826AHrvsk','CONCURRENT_DEPLOYMENT_COUNT','records','827649NcnZgq','MAX_CSV_RECORDS_CHUNK_SIZE','deployments','isExceedCSVSizeLimit','619528tlucoE','BaseDeploy'];a80_0xa183=function(){return _0x330858;};return a80_0xa183();}function a80_0x317d(_0x111aa6,_0x159e52){const _0x3a92ca=a80_0xa183();return a80_0x317d=function(_0x5b9ff6,_0x1fb174){_0x5b9ff6=_0x5b9ff6-0x16d;let _0xa18344=_0x3a92ca[_0x5b9ff6];return _0xa18344;},a80_0x317d(_0x111aa6,_0x159e52);}(function(_0x13f48b,_0x5c7bcb){const _0x310e5c=a80_0x317d,_0x275caa=_0x13f48b();while(!![]){try{const _0x4f3206=parseInt(_0x310e5c(0x172))/0x1*(parseInt(_0x310e5c(0x176))/0x2)+-parseInt(_0x310e5c(0x179))/0x3+parseInt(_0x310e5c(0x18a))/0x4+-parseInt(_0x310e5c(0x193))/0x5+parseInt(_0x310e5c(0x181))/0x6*(-parseInt(_0x310e5c(0x177))/0x7)+-parseInt(_0x310e5c(0x188))/0x8+-parseInt(_0x310e5c(0x184))/0x9*(-parseInt(_0x310e5c(0x17d))/0xa);if(_0x4f3206===_0x5c7bcb)break;else _0x275caa['push'](_0x275caa['shift']());}catch(_0x1eadb8){_0x275caa['push'](_0x275caa['shift']());}}}(a80_0xa183,0x71a62));const a80_0x1fb174=(function(){let _0x323934=!![];return function(_0x4996f4,_0x30bb6c){const _0x143c7a=_0x323934?function(){const _0x348215=a80_0x317d;if(_0x30bb6c){const _0x465354=_0x30bb6c[_0x348215(0x18e)](_0x4996f4,arguments);return _0x30bb6c=null,_0x465354;}}:function(){};return _0x323934=![],_0x143c7a;};}()),a80_0x5b9ff6=a80_0x1fb174(this,function(){const _0x20146c=a80_0x317d;return a80_0x5b9ff6[_0x20146c(0x17a)]()['search'](_0x20146c(0x180))[_0x20146c(0x17a)]()[_0x20146c(0x18d)](a80_0x5b9ff6)[_0x20146c(0x18c)]('(((.+)+)+)+$');});a80_0x5b9ff6();'use strict';var _a;Object[a80_0x47ff1a(0x171)](exports,a80_0x47ff1a(0x17c),{'value':!![]}),exports[a80_0x47ff1a(0x192)]=void 0x0;const base_deploy_1=require('./base-deploy'),utils_1=require(a80_0x47ff1a(0x17e)),BATCH_DEPLOY_PARALLEL_COUNT=(_a=process['env']['DATA_MASKING_BATCH_DEPLOY_PARALLEL_COUNT'])!==null&&_a!==void 0x0?_a:'';class BaseBulkDeploy extends base_deploy_1[a80_0x47ff1a(0x189)]{constructor(){const _0x23d957=a80_0x47ff1a;super(...arguments),this[_0x23d957(0x174)]=0x0,this[_0x23d957(0x186)]=[];}async[a80_0x47ff1a(0x16e)](_0x1c88ef){const _0x329f71=a80_0x47ff1a;this[_0x329f71(0x183)][_0x329f71(0x173)]&&await this[_0x329f71(0x175)]();if(this[_0x329f71(0x186)][_0x329f71(0x173)]){const _0x32141c=(await Promise['all'](this['deployments']))[_0x329f71(0x17f)]();this[_0x329f71(0x186)]=[],await this[_0x329f71(0x16f)](_0x32141c);}await this[_0x329f71(0x178)][_0x329f71(0x16d)](),_0x1c88ef();}async[a80_0x47ff1a(0x175)](){const _0x207ce7=a80_0x47ff1a,_0x183b19=this[_0x207ce7(0x18f)](this[_0x207ce7(0x183)]);this[_0x207ce7(0x186)][_0x207ce7(0x17b)](_0x183b19),this[_0x207ce7(0x183)]=[],this[_0x207ce7(0x174)]=0x0;if(this[_0x207ce7(0x186)]['length']>=BaseBulkDeploy['CONCURRENT_DEPLOYMENT_COUNT']){const _0x3a2f55=(await Promise['all'](this['deployments']))['flat']();this[_0x207ce7(0x186)]=[],await this['handleDeployResults'](_0x3a2f55);}}[a80_0x47ff1a(0x187)](_0x213206){const _0x4e543c=a80_0x47ff1a,_0x1e2788=utils_1[_0x4e543c(0x190)][_0x4e543c(0x18b)](_0x213206);return!this[_0x4e543c(0x194)]&&(this[_0x4e543c(0x194)]=utils_1[_0x4e543c(0x190)][_0x4e543c(0x170)](Object[_0x4e543c(0x191)](_0x213206))),_0x1e2788+this[_0x4e543c(0x194)]+this[_0x4e543c(0x174)]>=BaseBulkDeploy[_0x4e543c(0x185)];}}exports[a80_0x47ff1a(0x192)]=BaseBulkDeploy,BaseBulkDeploy[a80_0x47ff1a(0x182)]=+BATCH_DEPLOY_PARALLEL_COUNT||0x14,BaseBulkDeploy[a80_0x47ff1a(0x195)]=0x2710,BaseBulkDeploy['MAX_CSV_RECORDS_CHUNK_SIZE']=0x989680;