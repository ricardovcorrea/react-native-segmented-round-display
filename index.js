"use strict";

var polarToCartesian = function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees - 180) * Math.PI / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
};

var drawArc = function drawArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);
  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  var d = ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ');
  return d;
};

var scaleValue = function scaleValue(value, from, to) {
  var scale = (to[1] - to[0]) / (from[1] - from[0]);
  var capped = Math.min(from[1], Math.max(from[0], value)) - from[0]; // eslint-disable-next-line no-bitwise

  return ~~(capped * scale + to[0]);
};
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNativeSvg = _interopRequireWildcard(require("react-native-svg"));

var _renderpropsNative = require("react-spring/renderprops-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SegmentedRoundDisplay = function SegmentedRoundDisplay(_ref) {
  var segments = _ref.segments,
      filledArcWidth = _ref.filledArcWidth,
      emptyArcWidth = _ref.emptyArcWidth,
      arcSpacing = _ref.arcSpacing,
      totalArcSize = _ref.totalArcSize,
      emptyArcColor = _ref.emptyArcColor,
      filledArcColor = _ref.filledArcColor,
      radius = _ref.radius,
      style = _ref.style,
      animationDuration = _ref.animationDuration,
      animated = _ref.animated,
      formatValue = _ref.formatValue,
      incompleteArcColor = _ref.incompleteArcColor,
      displayValue = _ref.displayValue,
      valueBoxColor = _ref.valueBoxColor,
      valueFontColor = _ref.valueFontColor;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      arcs = _useState2[0],
      setArcs = _useState2[1];

  var totalArcs = segments.length;
  var totalSpaces = totalArcs - 1;
  var totalSpacing = totalSpaces * arcSpacing;
  var arcSize = (totalArcSize - totalSpacing) / totalArcs;
  var arcsStart = 90 - totalArcSize / 2;
  var margin = 35;
  var svgWidth = (radius + filledArcWidth) * 2 + 2 * margin;
  var svgHeight = (radius + filledArcWidth) * 2 + 2 * margin;
  var totalFilledValue = segments.reduce(function (acc, actual) {
    return acc + actual.filled;
  }, 0);
  var createArcs = (0, _react.useCallback)(function () {
    var newArcs = segments.map(function (goal, index) {
      var newArc = {
        centerX: radius + filledArcWidth + margin,
        centerY: radius + filledArcWidth + margin,
        start: arcsStart + index * arcSize,
        end: arcsStart + arcSize + index * arcSize,
        isComplete: goal.total === goal.filled
      };

      if (index !== 0) {
        newArc.start += arcSpacing * index;
        newArc.end += arcSpacing * index;
      }

      newArc.filled = scaleValue(goal.filled, [0, goal.total], [newArc.start, newArc.end]);
      return newArc;
    });
    setArcs(newArcs);
  }, [segments, arcSize, arcSpacing, filledArcWidth, arcsStart, radius]);

  var renderDisplayValue = function renderDisplayValue(angle, value) {
    var arc = arcs[arcs.length - 1];

    if (!arc) {
      return /*#__PURE__*/_react["default"].createElement(_reactNativeSvg.G, null);
    }

    var pos = polarToCartesian(arc.centerX, arc.centerY, radius, (angle || arc.filled) + 3);
    var boxFinalPosition = {
      x: pos.x - 40,
      y: pos.y + 6
    };
    var formatedValue = formatValue ? formatValue(value || totalFilledValue) : parseInt(value || totalFilledValue, 10);
    return /*#__PURE__*/_react["default"].createElement(_reactNativeSvg.G, null, /*#__PURE__*/_react["default"].createElement(_reactNativeSvg.Rect, {
      x: boxFinalPosition.x,
      y: boxFinalPosition.y,
      width: "80",
      height: "25",
      fill: valueBoxColor,
      rx: 3
    }), /*#__PURE__*/_react["default"].createElement(_reactNativeSvg.Rect, {
      width: "10",
      height: "10",
      fill: valueBoxColor,
      transform: "translate(".concat(pos.x, ",").concat(pos.y, ") rotate(45)"),
      rx: 2
    }), /*#__PURE__*/_react["default"].createElement(_reactNativeSvg.Text, {
      x: pos.x,
      fontWeight: "bold",
      fontSize: 14,
      y: boxFinalPosition.y + 18,
      fill: valueFontColor,
      textAnchor: "middle"
    }, formatedValue));
  };

  (0, _react.useEffect)(function () {
    createArcs();
  }, [segments, createArcs]);

  if (arcs.length === 0) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null);
  }

  return /*#__PURE__*/_react["default"].createElement(_reactNativeSvg["default"], {
    width: svgWidth,
    height: svgHeight,
    style: style
  }, arcs.map(function (arc, index) {
    return /*#__PURE__*/_react["default"].createElement(_reactNativeSvg.G, {
      key: index.toString()
    }, /*#__PURE__*/_react["default"].createElement(_reactNativeSvg.Path, {
      fill: "none",
      stroke: emptyArcColor,
      strokeWidth: emptyArcWidth,
      strokeLinecap: "round",
      d: drawArc(arc.centerX, arc.centerY, radius, arc.start, arc.end)
    }), animated && arc.filled > arc.start && /*#__PURE__*/_react["default"].createElement(_renderpropsNative.Spring, {
      from: {
        x: arc.start,
        y: 0
      },
      to: {
        x: arc.filled + 0.6,
        y: filledArcWidth
      },
      config: {
        duration: animationDuration / totalArcs,
        delay: animationDuration / totalArcs * index
      }
    }, function (props) {
      return /*#__PURE__*/_react["default"].createElement(_reactNativeSvg.Path, {
        fill: "none",
        stroke: arc.isComplete ? filledArcColor : incompleteArcColor || filledArcColor,
        strokeWidth: props.y,
        strokeLinecap: "round",
        d: drawArc(arc.centerX, arc.centerY, radius, arc.start, props.x)
      });
    }), !animated && arc.filled > arc.start && /*#__PURE__*/_react["default"].createElement(_reactNativeSvg.Path, {
      fill: "none",
      stroke: arc.isComplete ? filledArcColor : incompleteArcColor || filledArcColor,
      strokeWidth: filledArcWidth,
      strokeLinecap: "round",
      d: drawArc(arc.centerX, arc.centerY, radius, arc.start, arc.filled)
    }));
  }), displayValue && /*#__PURE__*/_react["default"].createElement(_reactNativeSvg.G, null, !animated && renderDisplayValue(), animated && /*#__PURE__*/_react["default"].createElement(_renderpropsNative.Spring, {
    from: {
      x: arcsStart,
      value: 0
    },
    to: {
      x: arcs[arcs.length - 1].filled,
      value: totalFilledValue
    },
    config: {
      duration: animationDuration
    }
  }, function (props) {
    return renderDisplayValue(props.x, props.value);
  })));
};

SegmentedRoundDisplay.propTypes = {
  segments: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    total: _propTypes["default"].number.isRequired,
    filled: _propTypes["default"].number.isRequired
  })),
  filledArcWidth: _propTypes["default"].number,
  emptyArcWidth: _propTypes["default"].number,
  arcSpacing: _propTypes["default"].number,
  totalArcSize: _propTypes["default"].number,
  radius: _propTypes["default"].number,
  emptyArcColor: _propTypes["default"].string,
  filledArcColor: _propTypes["default"].string,
  formatAmount: _propTypes["default"].func,
  style: _propTypes["default"].object,
  animationDuration: _propTypes["default"].number,
  animated: _propTypes["default"].bool,
  formatValue: _propTypes["default"].func,
  incompleteArcColor: _propTypes["default"].string,
  displayValue: _propTypes["default"].bool,
  valueBoxColor: _propTypes["default"].string,
  valueFontColor: _propTypes["default"].string
};
SegmentedRoundDisplay.defaultProps = {
  segments: [],
  filledArcWidth: 7,
  emptyArcWidth: 7,
  arcSpacing: 7,
  totalArcSize: 280,
  radius: 100,
  emptyArcColor: "#ADB1CC",
  filledArcColor: "#5ECCAA",
  animationDuration: 1000,
  animated: true,
  incompleteArcColor: "#23318C",
  displayValue: false,
  valueBoxColor: "#23318C",
  valueFontColor: "#FFFFFF"
};
var _default = SegmentedRoundDisplay;
exports["default"] = _default;
