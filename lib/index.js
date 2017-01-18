'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HtmlButton = require('./html/HtmlButton');

var _HtmlButton2 = _interopRequireDefault(_HtmlButton);

var _HtmlBlock = require('./html/HtmlBlock');

var _HtmlBlock2 = _interopRequireDefault(_HtmlBlock);

var _HtmlModal = require('./html/HtmlModal');

var _HtmlModal2 = _interopRequireDefault(_HtmlModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: 'html',
  button: _HtmlButton2.default,
  block: _HtmlBlock2.default,
  modal: _HtmlModal2.default
};