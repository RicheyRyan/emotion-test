'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CustomEmotion = require('./CustomEmotion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listStyle = /*#__PURE__*/(0, _CustomEmotion.css)('list-style:none;background:rebeccapurple;');

var listItemStyle = /*#__PURE__*/(0, _CustomEmotion.css)('color:white;font-size:2em;');

exports.default = function (props) {
  return _react2.default.createElement(
    'ul',
    { className: listStyle },
    _react2.default.createElement(
      'li',
      { className: listItemStyle },
      'First'
    ),
    _react2.default.createElement(
      'li',
      { className: listItemStyle },
      'Second'
    ),
    _react2.default.createElement(
      'li',
      { className: listItemStyle },
      'Third'
    ),
    _react2.default.createElement(
      'li',
      { className: listItemStyle },
      'Fourth'
    )
  );
};