'use strict';const a92_0x207265=a92_0x3dd2;(function(_0x20d6e9,_0x324e52){const _0x260ca5=a92_0x3dd2,_0x33d7a9=_0x20d6e9();while(!![]){try{const _0x12d77a=-parseInt(_0x260ca5(0xc4))/0x1+parseInt(_0x260ca5(0xc9))/0x2*(parseInt(_0x260ca5(0xbf))/0x3)+parseInt(_0x260ca5(0xd1))/0x4*(parseInt(_0x260ca5(0xd7))/0x5)+parseInt(_0x260ca5(0xf5))/0x6*(parseInt(_0x260ca5(0xee))/0x7)+parseInt(_0x260ca5(0xe1))/0x8+-parseInt(_0x260ca5(0xc2))/0x9*(parseInt(_0x260ca5(0xe2))/0xa)+-parseInt(_0x260ca5(0xcc))/0xb*(parseInt(_0x260ca5(0xc5))/0xc);if(_0x12d77a===_0x324e52)break;else _0x33d7a9['push'](_0x33d7a9['shift']());}catch(_0x2729ab){_0x33d7a9['push'](_0x33d7a9['shift']());}}}(a92_0x6cc7,0xe3c7b));Object[a92_0x207265(0xc0)](exports,a92_0x207265(0xca),{'value':!![]}),exports[a92_0x207265(0xd8)]=exports[a92_0x207265(0xf0)]=void 0x0;function a92_0x3dd2(_0x17ef63,_0x5a80b8){const _0x40eeef=a92_0x6cc7();return a92_0x3dd2=function(_0x728fdb,_0x951636){_0x728fdb=_0x728fdb-0xb8;let _0x6cc7ac=_0x40eeef[_0x728fdb];return _0x6cc7ac;},a92_0x3dd2(_0x17ef63,_0x5a80b8);}const xml_1=require(a92_0x207265(0xe5)),xml2js_1=require('xml2js'),PERMISSIONS_MAP=new Map([['classAccesses',a92_0x207265(0xdb)],[a92_0x207265(0xde),'apexPage'],[a92_0x207265(0xf1),a92_0x207265(0xc3)],[a92_0x207265(0xd2),a92_0x207265(0xc3)],[a92_0x207265(0xbe),'content'],[a92_0x207265(0xd9),'dataCategoryGroup'],['objectPermissions',a92_0x207265(0xda)],[a92_0x207265(0xf6),a92_0x207265(0xe4)],[a92_0x207265(0xdd),'name'],[a92_0x207265(0xc7),a92_0x207265(0xd0)],['externalDataSourceAccesses',a92_0x207265(0xd3)],[a92_0x207265(0xbd),a92_0x207265(0xe4)],['flowAccesses',a92_0x207265(0xc6)],[a92_0x207265(0xd5),a92_0x207265(0xdf)],[a92_0x207265(0xf3),a92_0x207265(0xcd)],['fieldPermissions','field']]);var UNREMOVE_PERMISSION;(function(_0x1cbc8d){const _0x5f359d=a92_0x207265,_0x10a99e=(function(){let _0x559d96=!![];return function(_0x3bbd63,_0x4d2e60){const _0x3322f5=_0x559d96?function(){const _0x2bc514=a92_0x3dd2;if(_0x4d2e60){const _0x4e7a82=_0x4d2e60[_0x2bc514(0xce)](_0x3bbd63,arguments);return _0x4d2e60=null,_0x4e7a82;}}:function(){};return _0x559d96=![],_0x3322f5;};}()),_0x2c463b=_0x10a99e(this,function(){const _0xace8d5=a92_0x3dd2;return _0x2c463b[_0xace8d5(0xb9)]()[_0xace8d5(0xe7)]('(((.+)+)+)+$')[_0xace8d5(0xb9)]()[_0xace8d5(0xf4)](_0x2c463b)[_0xace8d5(0xe7)](_0xace8d5(0xc1));});_0x2c463b(),_0x1cbc8d[_0x5f359d(0xe6)]='hasActivationRequired',_0x1cbc8d[_0x5f359d(0xe9)]=_0x5f359d(0xe9),_0x1cbc8d[_0x5f359d(0xe0)]='custom',_0x1cbc8d['description']=_0x5f359d(0xef);}(UNREMOVE_PERMISSION||(UNREMOVE_PERMISSION={})));const prepareDeleteComponent={'Profile':_0x2ac847=>{const _0x508e22=a92_0x207265;var _0x30ca99,_0x115694;return(_0x30ca99=_0x2ac847[_0x508e22(0xbb)])===null||_0x30ca99===void 0x0?!![]:delete _0x30ca99[_0x508e22(0xd6)],(_0x115694=_0x2ac847[_0x508e22(0xbb)])===null||_0x115694===void 0x0?!![]:delete _0x115694[_0x508e22(0xe3)],_0x2ac847;},'PermissionSet':_0x17ef18=>{const _0x2b2b10=a92_0x207265;var _0xc6e2c3,_0xb3189;return(_0xc6e2c3=_0x17ef18[_0x2b2b10(0xcb)])===null||_0xc6e2c3===void 0x0?!![]:delete _0xc6e2c3['userPermissions'],(_0xb3189=_0x17ef18[_0x2b2b10(0xcb)])===null||_0xb3189===void 0x0?!![]:delete _0xb3189['loginIpRanges'],_0x17ef18;}};async function extractComponentPermissions(_0x59b6aa,_0x26333c,_0x1a66fa){const _0x2e8779=a92_0x207265,_0x410f9e=await getReadyComponent(_0x59b6aa,_0x1a66fa),_0x379b1f=_0x410f9e[_0x1a66fa];if(!_0x379b1f)return _0x410f9e;for(const _0x56450b in _0x379b1f){if(UNREMOVE_PERMISSION[_0x56450b])continue;const _0x18d73f=_0x379b1f[_0x56450b],_0x3b0abc=getValidPermission(_0x18d73f,_0x56450b,_0x26333c);_0x3b0abc[_0x2e8779(0xf7)]?_0x379b1f[_0x56450b]=_0x3b0abc:delete _0x379b1f[_0x56450b];}return _0x410f9e[_0x1a66fa]['$']={'xmlns':_0x2e8779(0xd4)},_0x410f9e;}function a92_0x6cc7(){const _0x28a310=['description','extractComponentPermissions','tabSettings','buildObject','recordTypeVisibilities','constructor','4308522PkMmTr','customMetadataTypeAccesses','length','Xml','toString','Component_Name__c','Profile','UTF-8','customPermissions','profileActionOverrides','1410ZMvgVF','defineProperty','(((.+)+)+)+$','4788009SFeAtA','tab','813111oNhUjX','199284TohdDL','flow','applicationVisibilities','parse','4318IQYDUb','__esModule','PermissionSet','715ytVUar','recordType','apply','Component__r','application','516808VCImue','tabVisibilities','externalDataSource','http://soap.sforce.com/2006/04/metadata','layoutAssignments','userPermissions','70IkJXaq','mergeComponentPermissions','categoryGroupVisibilities','object','apexClass','Builder','customSettingAccesses','pageAccesses','layout','custom','1294592AZdnIn','30DTrcEX','loginIpRanges','name','../../git/parsers/utils/xml','hasActivationRequired','search','findIndex','label','isArray','1.0','get','push','14uqideP'];a92_0x6cc7=function(){return _0x28a310;};return a92_0x6cc7();}exports[a92_0x207265(0xf0)]=extractComponentPermissions;async function mergeComponentPermissions(_0x3056af,_0x1fc075,_0xd716ad){const _0x3b8902=a92_0x207265,_0x9c4cd6=await xml_1[_0x3b8902(0xb8)][_0x3b8902(0xc8)](_0x3056af),_0x32ccd4=await xml_1[_0x3b8902(0xb8)][_0x3b8902(0xc8)](_0x1fc075),_0x39d8a3=_0x9c4cd6[_0xd716ad],_0xb8cbd5=_0x32ccd4[_0xd716ad];if(!_0x39d8a3)return _0x1fc075;for(const _0x519f66 in _0x39d8a3){const _0x19fab1=PERMISSIONS_MAP[_0x3b8902(0xec)](_0x519f66);if(!_0x19fab1||!_0xb8cbd5[_0x519f66]){_0xb8cbd5[_0x519f66]=_0x39d8a3[_0x519f66];continue;}for(const _0x35c16f of _0x39d8a3[_0x519f66]){const _0x3dea75=_0xb8cbd5[_0x519f66][_0x3b8902(0xe8)](_0x1b7d86=>_0x35c16f[_0x19fab1][0x0]===_0x1b7d86[_0x19fab1][0x0]);_0x3dea75!==-0x1?_0xb8cbd5[_0x519f66][_0x3dea75]=_0x35c16f:_0xb8cbd5[_0x519f66][_0x3b8902(0xed)](_0x35c16f);}}_0x32ccd4[_0xd716ad]['$']={'xmlns':_0x3b8902(0xd4)};const _0x2a9c4b=new xml2js_1[(_0x3b8902(0xdc))]({'xmldec':{'version':_0x3b8902(0xeb),'encoding':_0x3b8902(0xbc)}});return _0x2a9c4b[_0x3b8902(0xf2)](_0x32ccd4);}exports['mergeComponentPermissions']=mergeComponentPermissions;function getValidPermission(_0x9f7ab2,_0x58888b,_0x5b0b99){const _0x269551=a92_0x207265;let _0x342805=[];if(_0x58888b===_0x269551(0xd5))_0x342805=getValidLayout(_0x9f7ab2,_0x58888b,_0x5b0b99);else{const _0x69ec20=Array['isArray'](_0x9f7ab2)?_0x9f7ab2:[_0x9f7ab2];for(const _0xce27de of _0x69ec20){isValidPermission(_0xce27de,_0x58888b,_0x5b0b99)&&_0x342805[_0x269551(0xed)](_0xce27de);}}return _0x342805;}function isValidPermission(_0x388d8c,_0x3f1a2e,_0x45497c){const _0x4013d3=a92_0x207265,_0x20b785=PERMISSIONS_MAP[_0x4013d3(0xec)](_0x3f1a2e);return _0x388d8c[_0x20b785]&&_0x45497c['some'](_0x23a832=>_0x23a832[_0x4013d3(0xcf)][_0x4013d3(0xba)]['includes'](_0x388d8c[_0x20b785]));}function getValidLayout(_0x1ee545,_0x1fde95,_0x4c2f11){const _0x43242d=a92_0x207265,_0x19dc49=[],_0x272a2b=Array[_0x43242d(0xea)](_0x1ee545)?_0x1ee545:[_0x1ee545];for(const _0x2bfdc3 in _0x272a2b){isValidPermission(_0x272a2b[_0x2bfdc3],_0x1fde95,_0x4c2f11)&&(!_0x272a2b[_0x2bfdc3][_0x43242d(0xcd)]&&_0x19dc49[_0x43242d(0xed)](_0x272a2b[_0x2bfdc3]),isValidPermission(_0x272a2b[_0x2bfdc3],'recordTypeVisibilities',_0x4c2f11)&&_0x19dc49[_0x43242d(0xed)](_0x272a2b[_0x2bfdc3]));}return _0x19dc49;}async function getReadyComponent(_0x28c274,_0x3c2e6a){const _0x59951a=a92_0x207265,_0x418bca=await xml_1[_0x59951a(0xb8)][_0x59951a(0xc8)](_0x28c274);return prepareDeleteComponent[_0x3c2e6a](_0x418bca);}