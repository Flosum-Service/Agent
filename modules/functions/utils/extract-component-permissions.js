'use strict';const a60_0x343368=a60_0x1fd6;(function(_0x559206,_0x18ee3c){const _0x17bbfc=a60_0x1fd6,_0x30b67a=_0x559206();while(!![]){try{const _0x3cb637=parseInt(_0x17bbfc(0xd9))/0x1*(parseInt(_0x17bbfc(0xf0))/0x2)+parseInt(_0x17bbfc(0xd1))/0x3+-parseInt(_0x17bbfc(0xdb))/0x4+parseInt(_0x17bbfc(0xed))/0x5*(-parseInt(_0x17bbfc(0xbe))/0x6)+-parseInt(_0x17bbfc(0xeb))/0x7+parseInt(_0x17bbfc(0xc6))/0x8+-parseInt(_0x17bbfc(0xe9))/0x9;if(_0x3cb637===_0x18ee3c)break;else _0x30b67a['push'](_0x30b67a['shift']());}catch(_0x22b5f6){_0x30b67a['push'](_0x30b67a['shift']());}}}(a60_0x4a85,0x61084));Object[a60_0x343368(0xe2)](exports,'__esModule',{'value':!![]}),exports['extractComponentPermissions']=void 0x0;const xml_1=require(a60_0x343368(0xd0)),PERMISSIONS_MAP=new Map([[a60_0x343368(0xda),a60_0x343368(0xd3)],['pageAccesses',a60_0x343368(0xce)],[a60_0x343368(0xc3),a60_0x343368(0xe0)],[a60_0x343368(0xe7),a60_0x343368(0xe0)],[a60_0x343368(0xbd),a60_0x343368(0xe8)],[a60_0x343368(0xd8),a60_0x343368(0xde)],[a60_0x343368(0xc2),a60_0x343368(0xd7)],['customMetadataTypeAccesses',a60_0x343368(0xd5)],[a60_0x343368(0xe5),a60_0x343368(0xd5)],[a60_0x343368(0xc8),'application'],[a60_0x343368(0xdf),a60_0x343368(0xd6)],[a60_0x343368(0xe1),a60_0x343368(0xd5)],[a60_0x343368(0xc7),a60_0x343368(0xc9)],[a60_0x343368(0xc1),a60_0x343368(0xec)],['recordTypeVisibilities',a60_0x343368(0xd4)],['fieldPermissions',a60_0x343368(0xbb)]]);var UNREMOVE_PERMISSION;(function(_0x3e2f2b){const _0x359e54=a60_0x343368,_0x471d6e=(function(){let _0x117bd6=!![];return function(_0x5511e5,_0x5e13d8){const _0x1f4e9e=_0x117bd6?function(){const _0x274784=a60_0x1fd6;if(_0x5e13d8){const _0x959a7=_0x5e13d8[_0x274784(0xe6)](_0x5511e5,arguments);return _0x5e13d8=null,_0x959a7;}}:function(){};return _0x117bd6=![],_0x1f4e9e;};}()),_0x48b37a=_0x471d6e(this,function(){const _0x69a196=a60_0x1fd6;return _0x48b37a[_0x69a196(0xdd)]()[_0x69a196(0xee)]('(((.+)+)+)+$')['toString']()[_0x69a196(0xdc)](_0x48b37a)[_0x69a196(0xee)](_0x69a196(0xcd));});_0x48b37a(),_0x3e2f2b[_0x359e54(0xef)]='hasActivationRequired',_0x3e2f2b[_0x359e54(0xcb)]=_0x359e54(0xcb),_0x3e2f2b['custom']=_0x359e54(0xca),_0x3e2f2b[_0x359e54(0xc0)]=_0x359e54(0xc0);}(UNREMOVE_PERMISSION||(UNREMOVE_PERMISSION={})));function a60_0x4a85(){const _0x1b4a42=['PermissionSet','description','layoutAssignments','objectPermissions','tabSettings','isArray','push','3520080kUKVRc','flowAccesses','applicationVisibilities','flow','custom','label','some','(((.+)+)+)+$','apexPage','includes','../../git/parsers/utils/xml','1756782fGxhiJ','parse','apexClass','recordType','name','externalDataSource','object','categoryGroupVisibilities','284708SwTNNm','classAccesses','1279860UNjaIB','constructor','toString','dataCategoryGroup','externalDataSourceAccesses','tab','customPermissions','defineProperty','userPermissions','length','customSettingAccesses','apply','tabVisibilities','content','2912436YIaxKo','http://soap.sforce.com/2006/04/metadata','1161251mVmFeH','layout','517030dIDfRU','search','hasActivationRequired','2vAKNEB','Profile','Component__r','loginIpRanges','field','extractComponentPermissions','profileActionOverrides','6xRmmUs'];a60_0x4a85=function(){return _0x1b4a42;};return a60_0x4a85();}const prepareDeleteComponent={'Profile':_0x70ffdb=>{const _0x1fa23a=a60_0x343368;var _0x20706f,_0x4dba7e;return(_0x20706f=_0x70ffdb[_0x1fa23a(0xf1)])===null||_0x20706f===void 0x0?!![]:delete _0x20706f[_0x1fa23a(0xe3)],(_0x4dba7e=_0x70ffdb['Profile'])===null||_0x4dba7e===void 0x0?!![]:delete _0x4dba7e[_0x1fa23a(0xba)],_0x70ffdb;},'PermissionSet':_0x4499ba=>{const _0x3b88fc=a60_0x343368;var _0x31551c,_0x528350;return(_0x31551c=_0x4499ba[_0x3b88fc(0xbf)])===null||_0x31551c===void 0x0?!![]:delete _0x31551c[_0x3b88fc(0xe3)],(_0x528350=_0x4499ba[_0x3b88fc(0xbf)])===null||_0x528350===void 0x0?!![]:delete _0x528350['loginIpRanges'],_0x4499ba;}};async function extractComponentPermissions(_0x464ac6,_0x36ba00,_0x2857bf){const _0xfdb935=a60_0x343368,_0x15bcdd=await getReadyComponent(_0x464ac6,_0x2857bf),_0x273876=_0x15bcdd[_0x2857bf];if(!_0x273876)return _0x15bcdd;for(const _0x1b4def in _0x273876){if(UNREMOVE_PERMISSION[_0x1b4def])continue;const _0x20dd2e=_0x273876[_0x1b4def],_0xd4c2c8=getValidPermission(_0x20dd2e,_0x1b4def,_0x36ba00);_0xd4c2c8[_0xfdb935(0xe4)]?_0x273876[_0x1b4def]=_0xd4c2c8:delete _0x273876[_0x1b4def];}return _0x15bcdd[_0x2857bf]['$']={'xmlns':_0xfdb935(0xea)},_0x15bcdd;}exports[a60_0x343368(0xbc)]=extractComponentPermissions;function getValidPermission(_0x47f2ec,_0x4c496e,_0xad6058){const _0x36aebc=a60_0x343368;let _0x1f2b74=[];if(_0x4c496e===_0x36aebc(0xc1))_0x1f2b74=getValidLayout(_0x47f2ec,_0x4c496e,_0xad6058);else{const _0x20351b=Array[_0x36aebc(0xc4)](_0x47f2ec)?_0x47f2ec:[_0x47f2ec];for(const _0x28c345 of _0x20351b){isValidPermission(_0x28c345,_0x4c496e,_0xad6058)&&_0x1f2b74[_0x36aebc(0xc5)](_0x28c345);}}return _0x1f2b74;}function isValidPermission(_0x49904b,_0x15799c,_0x4e1cf2){const _0x6b98f=a60_0x343368,_0x1f2729=PERMISSIONS_MAP['get'](_0x15799c);return _0x49904b[_0x1f2729]&&_0x4e1cf2[_0x6b98f(0xcc)](_0x1c74cd=>_0x1c74cd[_0x6b98f(0xb9)]['Component_Name__c'][_0x6b98f(0xcf)](_0x49904b[_0x1f2729]));}function getValidLayout(_0x29086b,_0x38de48,_0x2956b0){const _0x561875=a60_0x343368,_0x269556=[],_0x4ca79e=Array[_0x561875(0xc4)](_0x29086b)?_0x29086b:[_0x29086b];for(const _0x28e080 in _0x4ca79e){isValidPermission(_0x4ca79e[_0x28e080],_0x38de48,_0x2956b0)&&(!_0x4ca79e[_0x28e080][_0x561875(0xd4)]&&_0x269556['push'](_0x4ca79e[_0x28e080]),isValidPermission(_0x4ca79e[_0x28e080],'recordTypeVisibilities',_0x2956b0)&&_0x269556[_0x561875(0xc5)](_0x4ca79e[_0x28e080]));}return _0x269556;}function a60_0x1fd6(_0x4bcf9a,_0x416214){const _0x39834f=a60_0x4a85();return a60_0x1fd6=function(_0x12d2f5,_0x1c8760){_0x12d2f5=_0x12d2f5-0xb9;let _0x4a85eb=_0x39834f[_0x12d2f5];return _0x4a85eb;},a60_0x1fd6(_0x4bcf9a,_0x416214);}async function getReadyComponent(_0x27f72d,_0x55af37){const _0x4cd4bf=a60_0x343368,_0x43dc4b=await xml_1['Xml'][_0x4cd4bf(0xd2)](_0x27f72d);return prepareDeleteComponent[_0x55af37](_0x43dc4b);}