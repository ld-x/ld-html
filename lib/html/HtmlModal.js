'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  background-color: inherit;\n  width: 700px;\n  display: flex;\n'], ['\n  position: relative;\n  background-color: inherit;\n  width: 700px;\n  display: flex;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  transition: opacity 300ms linear;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  background-color: inherit;\n  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.3);\n  width: 100%;\n  display: flex;\n  overflow-y: scroll;\n  z-index: 100;\n  padding: 1rem;\n  margin-top: -3rem;\n'], ['\n  position: absolute;\n  transition: opacity 300ms linear;\n  border: 1px solid #F1F1F1;\n  border-radius: 2px;\n  background-color: inherit;\n  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.3);\n  width: 100%;\n  display: flex;\n  overflow-y: scroll;\n  z-index: 100;\n  padding: 1rem;\n  margin-top: -3rem;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  flex: 0 0 90%;\n  margin: 0.5rem;\n  padding: 1rem;\n'], ['\n  flex: 0 0 90%;\n  margin: 0.5rem;\n  padding: 1rem;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  flex: 0 0 5%;\n  display: flex;\n  align-self: flex-end;\n  flex-direction: column;\n'], ['\n  flex: 0 0 5%;\n  display: flex;\n  align-self: flex-end;\n  flex-direction: column;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  border: 1px solid #eee;\n  color: #181818 !important;\n  font-size: 14px;\n  line-height: 1.2;\n  height: 140px !important;\n  resize: none;\n  vertical-align: bottom;\n  width: 100%;\n  background: transparent;\n  padding: 0.5rem;\n\n  &:hover {\n    border: 1px solid #ccc;\n  }\n\n  &:focus {\n    border: 1px solid #ccc;\n    outline: none;\n  }\n'], ['\n  border: 1px solid #eee;\n  color: #181818 !important;\n  font-size: 14px;\n  line-height: 1.2;\n  height: 140px !important;\n  resize: none;\n  vertical-align: bottom;\n  width: 100%;\n  background: transparent;\n  padding: 0.5rem;\n\n  &:hover {\n    border: 1px solid #ccc;\n  }\n\n  &:focus {\n    border: 1px solid #ccc;\n    outline: none;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  padding: 0;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  color: #ccc;\n\n  &:hover {\n    color: #9d1d20;\n  }\n'], ['\n  padding: 0;\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n  color: #ccc;\n\n  &:hover {\n    color: #9d1d20;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HtmlModal = function (_Component) {
  _inherits(HtmlModal, _Component);

  function HtmlModal(props) {
    _classCallCheck(this, HtmlModal);

    var _this = _possibleConstructorReturn(this, (HtmlModal.__proto__ || Object.getPrototypeOf(HtmlModal)).call(this, props));

    _this.state = { code: '' };
    return _this;
  }

  _createClass(HtmlModal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setCodeFromState();
    }
  }, {
    key: 'setStateFromCode',
    value: function setStateFromCode() {
      this.props.submitHtmlModal(this.state.code);
    }
  }, {
    key: 'setCodeFromState',
    value: function setCodeFromState() {
      var _props = this.props,
          editorState = _props.editorState,
          onChange = _props.onChange;

      var html = this.props.returnStateAsHtml();
      this.setState({ code: html });
      _reactDom2.default.findDOMNode(this.refs.textArea).focus();
    }
  }, {
    key: 'onEditChange',
    value: function onEditChange(event) {
      event.stopPropagation();
      var code = event.target.value;
      this.setState({ code: code });
    }
  }, {
    key: 'submitHtml',
    value: function submitHtml(event) {
      this.setStateFromCode();
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        this.props.closeModal();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var code = this.state.code;


      return _react2.default.createElement(
        Wrapper,
        null,
        _react2.default.createElement(
          HtmlEdit,
          null,
          _react2.default.createElement(
            EditColumn,
            { className: 'ld-edit-html-wrapper' },
            _react2.default.createElement(EditTextArea, {
              className: 'ld-edit-html-textarea',
              ref: 'textArea',
              onChange: this.onEditChange.bind(this),
              value: code,
              onKeyDown: this.onKeyDown.bind(this) })
          ),
          _react2.default.createElement(
            EditActionsColumn,
            { className: 'ld-edit-actions-wrapper' },
            _react2.default.createElement(
              EditButton,
              {
                className: 'ld-edit-html-submit-button',
                onClick: this.submitHtml.bind(this),
                type: 'button'
              },
              _react2.default.createElement(
                'svg',
                { fill: 'currentColor', height: '24', viewBox: '0 0 24 24', width: '24' },
                _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
                _react2.default.createElement('path', { d: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' })
              )
            ),
            _react2.default.createElement(
              EditButton,
              {
                className: 'ld-edit-html-close-button',
                onClick: this.props.closeModal,
                type: 'button'
              },
              _react2.default.createElement(
                'svg',
                { width: '24', height: '24', viewBox: '0 0 24 24', className: 'ld-button-close' },
                _react2.default.createElement(
                  'g',
                  { fill: 'currentColor', fillRule: 'evenodd' },
                  _react2.default.createElement('path', { d: 'M16.95 5.636l1.414 1.414L7.05 18.364 5.636 16.95z' }),
                  _react2.default.createElement('path', { d: 'M16.95 18.364l1.414-1.414L7.05 5.636 5.636 7.05z' })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return HtmlModal;
}(_react.Component);

exports.default = HtmlModal;


var Wrapper = _styledComponents2.default.div(_templateObject);

var HtmlEdit = _styledComponents2.default.div(_templateObject2);

var EditColumn = _styledComponents2.default.div(_templateObject3);

var EditActionsColumn = _styledComponents2.default.div(_templateObject4);

var EditTextArea = _styledComponents2.default.textarea(_templateObject5);

var EditButton = _styledComponents2.default.button(_templateObject6);