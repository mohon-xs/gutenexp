/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 616:
/***/ (function() {

var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls,
    ColorPalette = _wp$blockEditor.ColorPalette,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    FontSizePicker = _wp$components.FontSizePicker,
    __experimentalBoxControl = _wp$components.__experimentalBoxControl;
registerBlockType('gutenexp/pricing', {
  title: 'Pricing',
  description: 'Block to generate a custom Pricing Section.',
  icon: 'money-alt',
  category: 'text',
  attributes: {
    planTitle: {
      type: 'string',
      source: 'html',
      selector: 'h4',
      "default": 'Basic'
    },
    planPrice: {
      type: 'string',
      source: 'html',
      selector: 'h2',
      "default": '$99'
    },
    planButton: {
      type: 'string',
      source: 'html',
      selector: 'a',
      "default": 'Subscribe Now'
    },
    planBtnBack: {
      type: 'string',
      "default": '#0170B9'
    },
    planPriceFonts: {
      type: 'string',
      "default": '26'
    },
    planPriceMargin: {
      type: 'string',
      "default": {
        top: '10px',
        left: '10px',
        right: '10px',
        bottom: '10px'
      }
    },
    planPricePadding: {
      type: 'string',
      "default": {
        top: '10px',
        left: '10px',
        right: '10px',
        bottom: '10px'
      }
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var ALLOWED_BLOCKS = ['core/list'];
    var TEMPLATE = [['core/list', {
      placeholder: 'Enter your Feature....'
    }]];
    var planTitle = attributes.planTitle,
        planPrice = attributes.planPrice,
        planButton = attributes.planButton,
        planBtnBack = attributes.planBtnBack,
        planPriceFonts = attributes.planPriceFonts,
        planPriceMargin = attributes.planPriceMargin,
        planPricePadding = attributes.planPricePadding;

    function updateTitle(newTitle) {
      setAttributes({
        planTitle: newTitle
      });
    }

    function updatePrice(newPrice) {
      setAttributes({
        planPrice: newPrice
      });
    }

    function updateButton(newButton) {
      setAttributes({
        planButton: newButton
      });
    }

    function onPlanBtnBackChange(newButtonBackground) {
      setAttributes({
        planBtnBack: newButtonBackground
      });
    }

    function onPlanPriceFontChange(newPriceFontSize) {
      setAttributes({
        planPriceFonts: newPriceFontSize
      });
    }

    function onPlanPriceMargin(newPriceMargin) {
      setAttributes({
        planPriceMargin: newPriceMargin
      });
    }

    function onPlanPricePadding(newPricePadding) {
      setAttributes({
        planPricePadding: newPricePadding
      });
    }

    return [/*#__PURE__*/React.createElement(InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, /*#__PURE__*/React.createElement(PanelBody, {
      title: "Change Box Margin & Padding"
    }, /*#__PURE__*/React.createElement(__experimentalBoxControl, {
      label: "Margin",
      values: planPriceMargin,
      onChange: onPlanPriceMargin
    }), /*#__PURE__*/React.createElement(__experimentalBoxControl, {
      label: "Padding",
      values: planPricePadding,
      onChange: onPlanPricePadding
    })), /*#__PURE__*/React.createElement(PanelBody, {
      title: 'Change Text Size'
    }, /*#__PURE__*/React.createElement(FontSizePicker, {
      fontSizes: [{
        name: 'Small',
        slug: 'small',
        size: 12
      }, {
        name: 'Big',
        slug: 'big',
        size: 26
      }],
      value: planPriceFonts,
      fallbackFontSize: 12,
      onChange: onPlanPriceFontChange,
      withSlider: true
    })), /*#__PURE__*/React.createElement(PanelBody, {
      title: 'Change Button Background'
    }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Select Color : ")), /*#__PURE__*/React.createElement(ColorPalette, {
      value: planBtnBack,
      onChange: onPlanBtnBackChange
    }))), /*#__PURE__*/React.createElement("div", {
      "class": "gutenexp-pricing-two extra-class",
      style: {
        background: '#f4f4f5',
        textAlign: "center",
        margin: planPriceMargin.top,
        padding: planPricePadding.top
      }
    }, /*#__PURE__*/React.createElement(RichText, {
      key: "editable",
      tagName: "h4",
      className: "gutenexp-pricing-title",
      placeholder: "Your Plan Title",
      value: planTitle,
      onChange: updateTitle
    }), "text proper", /*#__PURE__*/React.createElement(RichText, {
      key: "editable",
      tagName: "h2",
      className: "gutenexp-pricing-price",
      placeholder: "$99",
      value: planPrice,
      onChange: updatePrice,
      style: {
        fontSize: planPriceFonts
      }
    }), /*#__PURE__*/React.createElement(InnerBlocks, {
      allowedBlocks: ALLOWED_BLOCKS,
      template: TEMPLATE,
      templateLock: true
    }), /*#__PURE__*/React.createElement(RichText, {
      key: "editable",
      tagName: "a",
      className: "gutenexp-pricing-btn",
      placeholder: "Button text....",
      value: planButton,
      onChange: updateButton,
      style: {
        background: planBtnBack
      }
    }))];
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var planTitle = attributes.planTitle,
        planPrice = attributes.planPrice,
        planButton = attributes.planButton,
        planBtnBack = attributes.planBtnBack,
        planPriceFonts = attributes.planPriceFonts,
        planPriceMargin = attributes.planPriceMargin,
        planPricePadding = attributes.planPricePadding;
    return /*#__PURE__*/React.createElement("div", {
      "class": "gutenexp-pricing-one",
      style: {
        background: '#f4f4f5',
        textAlign: "center",
        margin: planPriceMargin.top,
        padding: planPricePadding.top
      }
    }, /*#__PURE__*/React.createElement(RichText.Content, {
      tagName: "h4",
      className: "gutenexp-pricing-title",
      value: planTitle
    }), /*#__PURE__*/React.createElement(RichText.Content, {
      tagName: "h2",
      className: "gutenexp-pricing-price",
      value: planPrice,
      style: {
        fontSize: planPriceFonts
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "planFeature"
    }, /*#__PURE__*/React.createElement(InnerBlocks.Content, null)), /*#__PURE__*/React.createElement(RichText.Content, {
      tagName: "a",
      className: "gutenexp-pricing-btn",
      value: planButton,
      style: {
        background: planBtnBack,
        padding: '10px 20px',
        color: '#fff'
      }
    }));
  }
});

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

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


;// CONCATENATED MODULE: ./src/js/blocks/test.js
var _wp$element = wp.element,
    Component = _wp$element.Component,
    render = _wp$element.render; //https://wordpress.org/support/topic/reactjs-in-wpwp-elemet/


var config = {
  name: 'gutenexp/test',
  apiVersion: 2,
  title: 'Test Block',
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
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", {
    className: "class-a"
  }, "text: ", attributes.text), " |", /*#__PURE__*/React.createElement("u", {
    className: "class-b"
  }, "color: ", attributes.color)), /*#__PURE__*/React.createElement("p", null, "blockId: ", attributes.blockId));
};

var Styles = function Styles(_ref2) {
  var attributes = _ref2.attributes;
  return [/*#__PURE__*/React.createElement(Style, {
    viewport: "desktop"
  }, "\n                .".concat(attributes.blockId, " .class-a{\n                    color: #ab0;\n                }\n                .").concat(attributes.blockId, " .class-b{\n                    color: ").concat(attributes.color, ";\n                }\n            \n            ")), /*#__PURE__*/React.createElement(Style, {
    viewport: "mobile"
  }, "\n                    .".concat(attributes.blockId, " .class-a{\n                        color: #000;\n                    }\n                    .").concat(attributes.blockId, " .class-b{\n                        color: #00f;\n                    }\n                \n                "))];
};

blockInit(config, View, Styles);
;// CONCATENATED MODULE: ./src/js/inc/components-experiments.js
function components_experiments_extends() { components_experiments_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return components_experiments_extends.apply(this, arguments); }

function components_experiments_slicedToArray(arr, i) { return components_experiments_arrayWithHoles(arr) || components_experiments_iterableToArrayLimit(arr, i) || components_experiments_unsupportedIterableToArray(arr, i) || components_experiments_nonIterableRest(); }

function components_experiments_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function components_experiments_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return components_experiments_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return components_experiments_arrayLikeToArray(o, minLen); }

function components_experiments_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function components_experiments_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function components_experiments_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function components_experiments_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _wp$blockEditor = wp.blockEditor,
    components_experiments_InspectorControls = _wp$blockEditor.InspectorControls,
    InnerBlocks = _wp$blockEditor.InnerBlocks;
var _wp$components = wp.components,
    TextControl = _wp$components.TextControl,
    ColorPalette = _wp$components.ColorPalette,
    components_experiments_PanelBody = _wp$components.PanelBody,
    FontSizePicker = _wp$components.FontSizePicker,
    __experimentalBoxControl = _wp$components.__experimentalBoxControl;
var components_experiments_blockWarper = {
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
      setAttributes(components_experiments_defineProperty({}, name, value));
    }

    return /*#__PURE__*/React.createElement(components_experiments_InspectorControls, {
      style: {
        marginBottom: '40px'
      }
    }, /*#__PURE__*/React.createElement(components_experiments_PanelBody, {
      title: "Change Box Margin & Padding"
    }, /*#__PURE__*/React.createElement("p", null, "these are traditional static controls"), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "type text : ")), /*#__PURE__*/React.createElement(TextControl, {
      value: attributes.text || '',
      onChange: function onChange(value) {
        return changeHandler('text', value);
      }
    }), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Select Color : ")), /*#__PURE__*/React.createElement(ColorPalette, {
      colors: [{
        name: 'red',
        color: '#f00'
      }, {
        name: 'white',
        color: '#fff'
      }, {
        name: 'blue',
        color: '#00f'
      }],
      value: attributes.color || '',
      onChange: function onChange(value) {
        return changeHandler('color', value);
      }
    }), /*#__PURE__*/React.createElement(SeparateView, null, /*#__PURE__*/React.createElement(components_experiments_PanelBody, {
      title: "Child"
    }, /*#__PURE__*/React.createElement("p", null, "the following controls are auto generated"), Object.entries(config.attributes).map(function (_ref) {
      var _ref2 = components_experiments_slicedToArray(_ref, 2),
          index = _ref2[0],
          attribute = _ref2[1];

      if (attribute.control && attribute.control.field) {
        // dynamic load. 
        // need to check properly if the control exists
        // from wp.components or wp.blockEditor
        var Component = wp.components[attribute.control.field];
        return [/*#__PURE__*/React.createElement("p", {
          key: index + '-label'
        }, /*#__PURE__*/React.createElement("strong", null, attribute.control.label)), /*#__PURE__*/React.createElement(Component, components_experiments_extends({
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
    })))));
  }
}; // this is an example component of parent child system
// this concept can be used to create multi-repeater, pop-over  and group-based controls.

var SeparateView = function SeparateView(_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "warper begins"), children, /*#__PURE__*/React.createElement("p", null, "warper ends"));
};

var components_experiments_Style = function Style(_ref4) {
  var viewport = _ref4.viewport,
      children = _ref4.children;
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


;// CONCATENATED MODULE: ./src/js/blocks/test-experiments.js
function test_experiments_extends() { test_experiments_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return test_experiments_extends.apply(this, arguments); }

function test_experiments_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function test_experiments_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { test_experiments_ownKeys(Object(source), true).forEach(function (key) { test_experiments_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { test_experiments_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function test_experiments_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var test_experiments_registerBlockType = wp.blocks.registerBlockType;
var test_experiments_useBlockProps = wp.blockEditor.useBlockProps;
var test_experiments_wp$element = wp.element,
    test_experiments_Component = test_experiments_wp$element.Component,
    test_experiments_render = test_experiments_wp$element.render; //https://wordpress.org/support/topic/reactjs-in-wpwp-elemet/


var test_experiments_config = {
  name: 'gutenexp/test-experiments',
  apiVersion: 2,
  title: 'Test Block - experiments',
  icon: 'universal-access-alt',
  category: 'design',
  attributes: {
    blockId: {
      type: 'string' // default: 'fooId'

    },
    text: {
      type: 'string',
      "default": 'some text'
    },
    color: {
      type: 'string',
      "default": '#f0f'
    },
    autocontrol1: {
      control: {
        field: 'ColorPalette',
        label: 'Some Label - autocontrol1',
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
    autocontrol2: {
      control: {
        field: 'TextControl',
        label: 'Some Label - autocontrol1',
        props: {
          placeholder: 'enter your text ....'
        }
      },
      type: 'string',
      "default": 'some text'
    }
  }
};

var test_experiments_View = function View(_ref) {
  var attributes = _ref.attributes;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", {
    className: "class-a"
  }, "text: ", attributes.text), " |", /*#__PURE__*/React.createElement("u", {
    className: "class-b"
  }, "color: ", attributes.color)), /*#__PURE__*/React.createElement("p", null, "autocontrol1: ", attributes.autocontrol1, " | autocontrol2: ", attributes.autocontrol2));
};

var test_experiments_Styles = function Styles(_ref2) {
  var attributes = _ref2.attributes;
  return [/*#__PURE__*/React.createElement(components_experiments_Style, {
    viewport: "desktop"
  }, "\n                .".concat(attributes.blockId, " .class-a{\n                    color: #ab0;\n                }\n                .").concat(attributes.blockId, " .class-b{\n                    color: ").concat(attributes.color, ";\n                }\n            \n            ")), /*#__PURE__*/React.createElement(components_experiments_Style, {
    viewport: "mobile"
  }, "\n                    .".concat(attributes.blockId, " .class-a{\n                        color: #000;\n                    }\n                    .").concat(attributes.blockId, " .class-b{\n                        color: #00f;\n                    }\n                \n                "))];
};

test_experiments_registerBlockType(test_experiments_config.name, test_experiments_objectSpread(test_experiments_objectSpread({}, test_experiments_config), {}, {
  edit: function edit(props) {
    return [/*#__PURE__*/React.createElement(test_experiments_Styles, {
      key: "styles",
      attributes: props.attributes
    }), /*#__PURE__*/React.createElement("div", {
      key: "controls"
    }, components_experiments_blockWarper.PanelControls(props, test_experiments_config)), /*#__PURE__*/React.createElement("div", test_experiments_extends({
      key: "view"
    }, test_experiments_useBlockProps({
      className: props.attributes.blockId
    })), "Hello World (from the editor).", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(test_experiments_View, {
      attributes: props.attributes
    }))];
  },
  save: function save(props) {
    return [/*#__PURE__*/React.createElement(test_experiments_Styles, {
      key: "styles",
      attributes: props.attributes
    }), /*#__PURE__*/React.createElement("div", test_experiments_extends({
      key: "view"
    }, test_experiments_useBlockProps.save({
      className: props.attributes.blockId
    })), "Hello World (from the preview).", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(test_experiments_View, {
      attributes: props.attributes
    }))];
  }
}));
// EXTERNAL MODULE: ./src/js/blocks/pricing.js
var pricing = __webpack_require__(616);
;// CONCATENATED MODULE: ./src/js/blocks.js



}();
/******/ })()
;