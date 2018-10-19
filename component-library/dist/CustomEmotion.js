'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cache = exports.sheet = exports.css = exports.keyframes = exports.injectGlobal = exports.getRegisteredStyles = exports.merge = exports.cx = exports.hydrate = exports.flush = undefined;

var _createEmotion2 = require('create-emotion');

var _createEmotion3 = _interopRequireDefault(_createEmotion2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createEmotion = (0, _createEmotion3.default)({}, {
  key: 'rr-components'
}),
    flush = _createEmotion.flush,
    hydrate = _createEmotion.hydrate,
    cx = _createEmotion.cx,
    merge = _createEmotion.merge,
    getRegisteredStyles = _createEmotion.getRegisteredStyles,
    injectGlobal = _createEmotion.injectGlobal,
    keyframes = _createEmotion.keyframes,
    css = _createEmotion.css,
    sheet = _createEmotion.sheet,
    cache = _createEmotion.cache;

exports.flush = flush;
exports.hydrate = hydrate;
exports.cx = cx;
exports.merge = merge;
exports.getRegisteredStyles = getRegisteredStyles;
exports.injectGlobal = injectGlobal;
exports.keyframes = keyframes;
exports.css = css;
exports.sheet = sheet;
exports.cache = cache;