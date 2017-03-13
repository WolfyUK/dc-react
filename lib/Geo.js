'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayGeoJson = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OverlayGeoJson = exports.OverlayGeoJson = function (_Component) {
  _inherits(OverlayGeoJson, _Component);

  function OverlayGeoJson() {
    _classCallCheck(this, OverlayGeoJson);

    return _possibleConstructorReturn(this, (OverlayGeoJson.__proto__ || Object.getPrototypeOf(OverlayGeoJson)).apply(this, arguments));
  }

  return OverlayGeoJson;
}(_react.Component);

OverlayGeoJson.propTypes = {
  json: _react.PropTypes.array,
  name: _react.PropTypes.string,
  keyAccessor: _react.PropTypes.func
};