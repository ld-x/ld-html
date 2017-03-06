'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HtmlButton = require('./HtmlButton');

var _HtmlButton2 = _interopRequireDefault(_HtmlButton);

var _HtmlModal = require('./HtmlModal');

var _HtmlModal2 = _interopRequireDefault(_HtmlModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: 'html',
  button: _HtmlButton2.default,
  modal: _HtmlModal2.default
};