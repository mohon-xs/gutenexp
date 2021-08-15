/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/inc/components.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InspectorControls = wp.blockEditor.InspectorControls;
var PanelBody = wp.components.PanelBody;
var registerBlockType = wp.blocks.registerBlockType;
var useBlockProps = wp.blockEditor.useBlockProps;
var blockWarper = {
  PanelControls: function PanelControls(props, config) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes,
        clientId = props.clientId;
    var blockId = attributes.blockId;

    if (!blockId) {
      setAttributes({
        blockId: 'block-id-' + clientId
      });
    }

    function changeHandler(name, value) {
      console.log({
        name: name,
        value: value
      });
      setAttributes(_defineProperty({}, name, value));
    }

    return /*#__PURE__*/React.createElement(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, /*#__PURE__*/React.createElement(PanelBody, {
      title: "Change Box Margin & Padding"
    }, /*#__PURE__*/React.createElement("p", null, "the following controls are auto generated"), Object.entries(config.attributes).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          index = _ref2[0],
          attribute = _ref2[1];

      if (attribute.control && attribute.control.field) {
        // dynamic load. 
        // need to check properly if the control exists
        // from wp.components or wp.blockEditor
        var Component = wp.components[attribute.control.field];
        return [/*#__PURE__*/React.createElement("p", {
          key: index + '-label'
        }, /*#__PURE__*/React.createElement("strong", null, attribute.control.label)), /*#__PURE__*/React.createElement(Component, _extends({
          key: index,
          onChange: function onChange(value) {
            return changeHandler(index, value);
          } // for some controls, they need this event
          // later we will put this on condition, may be
          ,
          onChangeComplete: function onChangeComplete(value) {
            return changeHandler(index, value);
          },
          value: attributes[index] || ''
        }, attribute.control.props))];
      }
    })));
  }
};

var Style = function Style(_ref3) {
  var viewport = _ref3.viewport,
      children = _ref3.children;
  var screen; // console.log(viewport)

  switch (viewport) {
    case 'mobile':
      screen = 'max-width: 600px';
      break;

    case 'tablet':
      screen = 'max-width: 1200px';
      break;

    default:
      // desktop
      screen = 'min-width: 1201px';
      break;
  }

  return /*#__PURE__*/React.createElement("style", null, "@media only screen and (".concat(screen, ") {\n                ").concat(children, "\n            }"));
};

var blockInit = function blockInit(config, View, Styles) {
  registerBlockType(config.name, _objectSpread(_objectSpread({}, config), {}, {
    edit: function edit(props) {
      return [/*#__PURE__*/React.createElement(Styles, {
        key: "styles",
        attributes: props.attributes
      }), /*#__PURE__*/React.createElement("div", {
        key: "controls"
      }, blockWarper.PanelControls(props, config)), /*#__PURE__*/React.createElement("div", _extends({
        key: "view"
      }, useBlockProps({
        className: props.attributes.blockId
      })), /*#__PURE__*/React.createElement(View, {
        attributes: props.attributes
      }))];
    },
    save: function save(props) {
      return [/*#__PURE__*/React.createElement(Styles, {
        key: "styles",
        attributes: props.attributes
      }), /*#__PURE__*/React.createElement("div", _extends({
        key: "view"
      }, useBlockProps.save({
        className: props.attributes.blockId
      })), /*#__PURE__*/React.createElement(View, {
        attributes: props.attributes
      }))];
    }
  }));
};


;// CONCATENATED MODULE: ./src/js/blocks/control-test.js
var _wp$element = wp.element,
    Component = _wp$element.Component,
    render = _wp$element.render; //https://wordpress.org/support/topic/reactjs-in-wpwp-elemet/

var _wp$data = wp.data,
    useSelect = _wp$data.useSelect,
    useDispatch = _wp$data.useDispatch;

var config = {
  name: 'gutenexp/control-test',
  apiVersion: 2,
  title: 'Control Test',
  icon: 'universal-access-alt',
  category: 'design',
  attributes: {
    blockId: {
      type: 'string'
    },
    color: {
      control: {
        field: 'ColorPalette',
        label: 'Color Label - autocontrol',
        props: {
          colors: [{
            name: 'red',
            color: '#f00'
          }, {
            name: 'white',
            color: '#fff'
          }, {
            name: 'blue',
            color: '#00f'
          }]
        }
      },
      type: 'string',
      "default": '#dfb'
    },
    text: {
      control: {
        field: 'TextControl',
        label: 'Text Label - autocontrol',
        props: {
          placeholder: 'enter your text ....'
        }
      },
      type: 'string',
      "default": 'some text'
    }
  }
};

var View = function View(_ref) {
  var attributes = _ref.attributes;
  console.clear();
  console.log(attributes);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "blockId: ", attributes.blockId));
};

var Styles = function Styles(_ref2) {
  var attributes = _ref2.attributes;
  return null;
};

blockInit(config, View, Styles);
;// CONCATENATED MODULE: ./src/js/blocks.js
 // import './blocks/test.js';
// import './blocks/test-experiments.js';
// import './blocks/pricing.js';
/******/ })()
;