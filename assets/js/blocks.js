/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4:
/***/ (function() {

var _wp$element = wp.element,
    Component = _wp$element.Component,
    render = _wp$element.render; //https://wordpress.org/support/topic/reactjs-in-wpwp-elemet/

var _wp$data = wp.data,
    useSelect = _wp$data.useSelect,
    useDispatch = _wp$data.useDispatch;
var TabPanel = wp.components.TabPanel;
var _gbLibrary = gbLibrary,
    blockWarper = _gbLibrary.blockWarper,
    blockInit = _gbLibrary.blockInit,
    Style = _gbLibrary.Style;
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
    // test:{
    //     control:{
    //         field: '__experimentalAlignmentMatrixControl',
    //         label: 'Test Label - autocontrol',
    //         props: {
    //             width: '50px',
    //             haga: 'poop'
    //         }
    //     },
    //     type: {},
    //     default: {}
    // },
    test: {
      control: {
        field: 'TextControl',
        label: 'Test Label - autocontrol',
        help: 'test help',
        props: {
          placeholder: 'some placeholder ....'
        }
      },
      type: {},
      "default": {
        "default": 'default value',
        mobile: 'mobile value'
      }
    }
  }
};

var View = function View(_ref) {
  var attributes = _ref.attributes,
      deviceType = _ref.deviceType;
  // console.clear()
  console.log(attributes);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "see console for attribute's value. deviceType: ", deviceType), /*#__PURE__*/React.createElement("p", null, "blockId: ", attributes.blockId));
};

var Styles = function Styles(_ref2) {
  var attributes = _ref2.attributes;
  return null;
};

blockInit(config, View, Styles);

/***/ }),

/***/ 132:
/***/ (function() {

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

var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    useBlockProps = _wp$blockEditor.useBlockProps;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    TabPanel = _wp$components.TabPanel,
    BaseControl = _wp$components.BaseControl;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$data = wp.data,
    useSelect = _wp$data.useSelect,
    useDispatch = _wp$data.useDispatch;
var blockWarper = {
  PanelControls: function PanelControls(props, config) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes,
        clientId = props.clientId;

    var _useDispatch = useDispatch('core/edit-post'),
        setPreviewDeviceType = _useDispatch.__experimentalSetPreviewDeviceType;

    var blockId = attributes.blockId;

    if (!blockId) {
      setAttributes({
        blockId: 'block-id-' + clientId
      });
    }

    function changeHandler(name, oldValue, newValue, viewport) {
      viewport = viewport || 'default';
      var value = {
        "default": oldValue["default"] || null,
        tablet: oldValue.tablet || null,
        mobile: oldValue.mobile || null
      };
      value[viewport] = newValue;
      console.log({
        name: name,
        oldValue: oldValue,
        newValue: newValue,
        viewport: viewport,
        value: value
      });
      setAttributes(_defineProperty({}, name, value));
    }

    var onSelect = function onSelect(tabName) {
      console.log('Selecting tab', tabName);
    };

    return /*#__PURE__*/React.createElement(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, /*#__PURE__*/React.createElement(TabPanel, {
      className: "my-tab-panel",
      activeClass: "active-tab",
      onSelect: onSelect,
      tabs: [{
        name: 'tab1',
        title: 'Tab 1',
        className: 'tab-one'
      }, {
        name: 'tab2',
        title: 'Tab 2',
        className: 'tab-two'
      }]
    }, function (tab) {
      return /*#__PURE__*/React.createElement("p", null, tab.title, " ok");
    }), /*#__PURE__*/React.createElement(PanelBody, {
      title: "Change Box Margin & Padding"
    }, /*#__PURE__*/React.createElement("p", null, "the following controls are auto generated"), Object.entries(config.attributes).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          index = _ref2[0],
          attribute = _ref2[1];

      if (attribute.control && attribute.control.field) {
        var Component = wp.components[attribute.control.field];
        var controlId = attribute.control.field + index + attributes.blockId;
        return /*#__PURE__*/React.createElement(BaseControl, {
          key: index,
          id: controlId,
          label: attribute.control.label,
          help: attribute.control.help
        }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("button", {
          key: controlId + 'rs-default',
          onClick: function onClick() {
            setPreviewDeviceType('Desktop');
          }
        }, "default"), /*#__PURE__*/React.createElement("button", {
          key: controlId + 'rs-tablet',
          onClick: function onClick() {
            setPreviewDeviceType('Tablet');
          }
        }, "tablet"), /*#__PURE__*/React.createElement("button", {
          key: controlId + 'rs-mobile',
          onClick: function onClick() {
            setPreviewDeviceType('Mobile');
          }
        }, "mobile")), /*#__PURE__*/React.createElement(Component, _extends({
          key: index + 'default',
          id: controlId,
          onChange: function onChange(value) {
            changeHandler(index, attributes[index], value);
          },
          value: attributes[index]["default"] || ''
        }, attribute.control.props)), /*#__PURE__*/React.createElement(Component, _extends({
          key: index + 'tablet',
          id: controlId,
          onChange: function onChange(value) {
            changeHandler(index, attributes[index], value, 'tablet');
          },
          value: attributes[index].tablet || ''
        }, attribute.control.props)), /*#__PURE__*/React.createElement(Component, _extends({
          key: index + 'mobile',
          id: controlId,
          onChange: function onChange(value) {
            changeHandler(index, attributes[index], value, 'mobile');
          },
          value: attributes[index].mobile || ''
        }, attribute.control.props)));
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
      // only CSS/ Style section will receive this value in editor view. currently it's in testing phase.
      var _useSelect = useSelect(function (select) {
        var _select = select('core/edit-post'),
            __experimentalGetPreviewDeviceType = _select.__experimentalGetPreviewDeviceType;

        return {
          deviceType: __experimentalGetPreviewDeviceType()
        };
      }, []),
          deviceType = _useSelect.deviceType;

      return [/*#__PURE__*/React.createElement(Styles, {
        deviceType: deviceType,
        key: "styles",
        attributes: props.attributes
      }), /*#__PURE__*/React.createElement("div", {
        key: "controls"
      }, blockWarper.PanelControls(props, config)), /*#__PURE__*/React.createElement("div", _extends({
        key: "view"
      }, useBlockProps({
        className: props.attributes.blockId
      })), /*#__PURE__*/React.createElement(View, {
        deviceType: deviceType,
        attributes: props.attributes
      }))];
    },
    save: function save(props) {
      var deviceType = 'Desktop';
      return [/*#__PURE__*/React.createElement(Styles, {
        deviceType: deviceType,
        key: "styles",
        attributes: props.attributes
      }), /*#__PURE__*/React.createElement("div", _extends({
        key: "view"
      }, useBlockProps.save({
        className: props.attributes.blockId
      })), /*#__PURE__*/React.createElement(View, {
        deviceType: deviceType,
        attributes: props.attributes
      }))];
    }
  }));
};

if ('undefined' === typeof window.gbLibrary) {
  window.gbLibrary = {};
}

gbLibrary.blockWarper = blockWarper;
gbLibrary.Style = Style;
gbLibrary.blockInit = blockInit; // export {blockWarper, Style, blockInit}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/* harmony import */ var _inc_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var _inc_components_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inc_components_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_control_test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _blocks_control_test_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blocks_control_test_js__WEBPACK_IMPORTED_MODULE_1__);

 // import './blocks/test.js';
// import './blocks/test-experiments.js';
// import './blocks/pricing.js';
}();
/******/ })()
;