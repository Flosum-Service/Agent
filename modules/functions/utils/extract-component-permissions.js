'use strict';const a91_0x20a0f0=a91_0x200f;(function(_0x563cec,_0x1219dc){const _0x51b013=a91_0x200f,_0x47b6ba=_0x563cec();while(!![]){try{const _0x122f66=-parseInt(_0x51b013(0x11c))/0x1*(parseInt(_0x51b013(0xf8))/0x2)+parseInt(_0x51b013(0x11e))/0x3+parseInt(_0x51b013(0x10e))/0x4+parseInt(_0x51b013(0xfc))/0x5+-parseInt(_0x51b013(0x11f))/0x6*(-parseInt(_0x51b013(0x121))/0x7)+-parseInt(_0x51b013(0x126))/0x8*(parseInt(_0x51b013(0x120))/0x9)+-parseInt(_0x51b013(0x10f))/0xa;if(_0x122f66===_0x1219dc)break;else _0x47b6ba['push'](_0x47b6ba['shift']());}catch(_0x3acaee){_0x47b6ba['push'](_0x47b6ba['shift']());}}}(a91_0x2675,0x56df0));Object[a91_0x20a0f0(0x100)](exports,a91_0x20a0f0(0x127),{'value':!![]}),exports['extractComponentPermissions']=void 0x0;function a91_0x200f(_0x479a17,_0x27d5b6){const _0x207bab=a91_0x2675();return a91_0x200f=function(_0xd925df,_0x4dc60f){_0xd925df=_0xd925df-0xf1;let _0x267529=_0x207bab[_0xd925df];return _0x267529;},a91_0x200f(_0x479a17,_0x27d5b6);}const xml_1=require('../../git/parsers/utils/xml'),PERMISSIONS_MAP=new Map([[a91_0x20a0f0(0x103),a91_0x20a0f0(0xf4)],[a91_0x20a0f0(0xf1),'apexPage'],['tabSettings',a91_0x20a0f0(0x123)],[a91_0x20a0f0(0xf6),'tab'],[a91_0x20a0f0(0x106),a91_0x20a0f0(0x119)],[a91_0x20a0f0(0x113),a91_0x20a0f0(0x10d)],[a91_0x20a0f0(0x129),a91_0x20a0f0(0xf9)],[a91_0x20a0f0(0x116),a91_0x20a0f0(0x109)],['customSettingAccesses',a91_0x20a0f0(0x109)],[a91_0x20a0f0(0x115),'application'],[a91_0x20a0f0(0x104),a91_0x20a0f0(0xf5)],[a91_0x20a0f0(0x111),a91_0x20a0f0(0x109)],[a91_0x20a0f0(0x102),'flow'],[a91_0x20a0f0(0x10c),a91_0x20a0f0(0x117)],[a91_0x20a0f0(0xf7),a91_0x20a0f0(0xfd)],['fieldPermissions','field']]);var UNREMOVE_PERMISSION;(function(_0x3e8581){const _0x5e5e46=a91_0x20a0f0,_0x24f187=(function(){let _0xbb2149=!![];return function(_0x56636a,_0x16d7e4){const _0x535c00=_0xbb2149?function(){const _0x38691f=a91_0x200f;if(_0x16d7e4){const _0x2e0b66=_0x16d7e4[_0x38691f(0x128)](_0x56636a,arguments);return _0x16d7e4=null,_0x2e0b66;}}:function(){};return _0xbb2149=![],_0x535c00;};}()),_0x31a8f5=_0x24f187(this,function(){const _0x1c5600=a91_0x200f;return _0x31a8f5[_0x1c5600(0xfa)]()[_0x1c5600(0xfb)](_0x1c5600(0x11a))[_0x1c5600(0xfa)]()[_0x1c5600(0x125)](_0x31a8f5)[_0x1c5600(0xfb)](_0x1c5600(0x11a));});_0x31a8f5(),_0x3e8581[_0x5e5e46(0x10b)]=_0x5e5e46(0x10b),_0x3e8581[_0x5e5e46(0x11d)]=_0x5e5e46(0x11d),_0x3e8581[_0x5e5e46(0xf3)]=_0x5e5e46(0xf3),_0x3e8581[_0x5e5e46(0x12a)]='description';}(UNREMOVE_PERMISSION||(UNREMOVE_PERMISSION={})));const prepareDeleteComponent={'Profile':_0x14fdd8=>{const _0x26a353=a91_0x20a0f0;var _0x34a242,_0xd84de7;return(_0x34a242=_0x14fdd8['Profile'])===null||_0x34a242===void 0x0?!![]:delete _0x34a242[_0x26a353(0xff)],(_0xd84de7=_0x14fdd8[_0x26a353(0x112)])===null||_0xd84de7===void 0x0?!![]:delete _0xd84de7[_0x26a353(0x105)],_0x14fdd8;},'PermissionSet':_0x118e7d=>{const _0x30c015=a91_0x20a0f0;var _0x14f364,_0x233913;return(_0x14f364=_0x118e7d[_0x30c015(0x118)])===null||_0x14f364===void 0x0?!![]:delete _0x14f364[_0x30c015(0xff)],(_0x233913=_0x118e7d[_0x30c015(0x118)])===null||_0x233913===void 0x0?!![]:delete _0x233913[_0x30c015(0x105)],_0x118e7d;}};async function extractComponentPermissions(_0x27c6ca,_0x924f00,_0xb091c8){const _0x54bfd3=a91_0x20a0f0,_0x44a4b0=await getReadyComponent(_0x27c6ca,_0xb091c8),_0x40a55f=_0x44a4b0[_0xb091c8];if(!_0x40a55f)return _0x44a4b0;for(const _0x4cf7df in _0x40a55f){if(UNREMOVE_PERMISSION[_0x4cf7df])continue;const _0x3ca210=_0x40a55f[_0x4cf7df],_0x1ab409=getValidPermission(_0x3ca210,_0x4cf7df,_0x924f00);_0x1ab409[_0x54bfd3(0xfe)]?_0x40a55f[_0x4cf7df]=_0x1ab409:delete _0x40a55f[_0x4cf7df];}return _0x44a4b0[_0xb091c8]['$']={'xmlns':_0x54bfd3(0x101)},_0x44a4b0;}exports[a91_0x20a0f0(0x110)]=extractComponentPermissions;function getValidPermission(_0x1afd33,_0x572218,_0x41b9d3){const _0x36f069=a91_0x20a0f0;let _0x318ebd=[];if(_0x572218===_0x36f069(0x10c))_0x318ebd=getValidLayout(_0x1afd33,_0x572218,_0x41b9d3);else{const _0x12617e=Array[_0x36f069(0x122)](_0x1afd33)?_0x1afd33:[_0x1afd33];for(const _0x1b0a5e of _0x12617e){isValidPermission(_0x1b0a5e,_0x572218,_0x41b9d3)&&_0x318ebd['push'](_0x1b0a5e);}}return _0x318ebd;}function isValidPermission(_0x3d02df,_0xb8745e,_0x26c2eb){const _0x334669=a91_0x20a0f0,_0x6bcc77=PERMISSIONS_MAP[_0x334669(0x108)](_0xb8745e);return _0x3d02df[_0x6bcc77]&&_0x26c2eb[_0x334669(0xf2)](_0x149c0a=>_0x149c0a[_0x334669(0x11b)][_0x334669(0x114)][_0x334669(0x124)](_0x3d02df[_0x6bcc77]));}function getValidLayout(_0x8defc7,_0x563806,_0x1a713d){const _0x11fb7c=a91_0x20a0f0,_0x8595f7=[],_0x12366b=Array[_0x11fb7c(0x122)](_0x8defc7)?_0x8defc7:[_0x8defc7];for(const _0x80d413 in _0x12366b){isValidPermission(_0x12366b[_0x80d413],_0x563806,_0x1a713d)&&(!_0x12366b[_0x80d413][_0x11fb7c(0xfd)]&&_0x8595f7[_0x11fb7c(0x107)](_0x12366b[_0x80d413]),isValidPermission(_0x12366b[_0x80d413],_0x11fb7c(0xf7),_0x1a713d)&&_0x8595f7[_0x11fb7c(0x107)](_0x12366b[_0x80d413]));}return _0x8595f7;}async function getReadyComponent(_0x4f26db,_0x3d1da1){const _0x3389e5=a91_0x20a0f0,_0x1a573d=await xml_1['Xml'][_0x3389e5(0x10a)](_0x4f26db);return prepareDeleteComponent[_0x3d1da1](_0x1a573d);}function a91_0x2675(){const _0x3c22a5=['parse','hasActivationRequired','layoutAssignments','dataCategoryGroup','803868EYUYcc','7134920HHjjUS','extractComponentPermissions','customPermissions','Profile','categoryGroupVisibilities','Component_Name__c','applicationVisibilities','customMetadataTypeAccesses','layout','PermissionSet','content','(((.+)+)+)+$','Component__r','270737bfGfBj','label','616650AbfdiD','4049346DxFcwh','63oYLhlZ','7XHCjqm','isArray','tab','includes','constructor','2272SVYmpj','__esModule','apply','objectPermissions','description','pageAccesses','some','custom','apexClass','externalDataSource','tabVisibilities','recordTypeVisibilities','2Upojrp','object','toString','search','1303165BDQFqu','recordType','length','userPermissions','defineProperty','http://soap.sforce.com/2006/04/metadata','flowAccesses','classAccesses','externalDataSourceAccesses','loginIpRanges','profileActionOverrides','push','get','name'];a91_0x2675=function(){return _0x3c22a5;};return a91_0x2675();}