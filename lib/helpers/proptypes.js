'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.options = exports.hintPosition = exports.tooltipPosition = void 0;

var _propTypes = _interopRequireDefault(require('prop-types'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Intro.js tooltip position proptype.
 * @type {Function}
 */
var tooltipPosition = _propTypes['default'].oneOf([
  'top',
  'right',
  'bottom',
  'left',
  'bottom-left-aligned',
  'bottom-middle-aligned',
  'bottom-right-aligned',
  'top-left-aligned',
  'top-middle-aligned',
  'top-right-aligned',
  'auto',
]);
/**
 * Intro.js hint position proptype.
 * @type {Function}
 */

exports.tooltipPosition = tooltipPosition;

var hintPosition = _propTypes['default'].oneOf([
  'top-middle',
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right',
  'bottom-middle',
  'middle-left',
  'middle-right',
  'middle-middle',
]);

exports.hintPosition = hintPosition;

var options = _propTypes['default'].shape({
  nextLabel: _propTypes['default'].string,
  prevLabel: _propTypes['default'].string,
  skipLabel: _propTypes['default'].string,
  doneLabel: _propTypes['default'].string,
  hidePrev: _propTypes['default'].bool,
  hideNext: _propTypes['default'].bool,
  tooltipPosition: tooltipPosition,
  tooltipClass: _propTypes['default'].string,
  highlightClass: _propTypes['default'].string,
  exitOnEsc: _propTypes['default'].bool,
  exitOnOverlayClick: _propTypes['default'].bool,
  showStepNumbers: _propTypes['default'].bool,
  keyboardNavigation: _propTypes['default'].bool,
  showButtons: _propTypes['default'].bool,
  showBullets: _propTypes['default'].bool,
  showProgress: _propTypes['default'].bool,
  scrollToElement: _propTypes['default'].bool,
  overlayOpacity: _propTypes['default'].number,
  scrollPadding: _propTypes['default'].number,
  positionPrecedence: _propTypes['default'].arrayOf(_propTypes['default'].string),
  disableInteraction: _propTypes['default'].bool,
  hintPosition: hintPosition,
  hintButtonLabel: _propTypes['default'].string,
  hintAnimation: _propTypes['default'].bool,
});

exports.options = options;
