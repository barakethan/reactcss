"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.mergeClasses=void 0;var _map=require("lodash/map"),_map2=_interopRequireDefault(_map),_cloneDeep=require("lodash/cloneDeep"),_cloneDeep2=_interopRequireDefault(_cloneDeep),_objectAssign=require("object-assign"),_objectAssign2=_interopRequireDefault(_objectAssign),mergeClasses=exports.mergeClasses=function(e){var t=arguments.length<=1||void 0===arguments[1]?[]:arguments[1],r=e["default"]&&(0,_cloneDeep2["default"])(e["default"])||{};return t.map(function(t){var s=e[t];return s&&(0,_map2["default"])(s,function(e,t){r[t]||(r[t]={}),(0,_objectAssign2["default"])(r[t],s[t])}),t}),r};exports["default"]=mergeClasses;