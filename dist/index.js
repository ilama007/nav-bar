function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var reactPortal = require('react-portal');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var styles = {"navBar":"_2mDNk","overlay":"_3qw0K","overlayBackground":"_OK5K3","mobileMenuContent":"_19S0I","mobileMenuContentActive":"_2Zx1E","hamburgerIcon":"_3Xhed","hamburgerIconActive":"_2RupP"};

var getWidth = function getWidth() {
  return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
};

function NavBar(_ref) {
  var mobileBreakPoint = _ref.mobileBreakPoint,
      mobileMenuOverlayBG = _ref.mobileMenuOverlayBG,
      triggerHamburgerClose = _ref.triggerHamburgerClose,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["mobileBreakPoint", "mobileMenuOverlayBG", "triggerHamburgerClose", "children"]);

  var _useState = React.useState(false),
      isHamburgerActive = _useState[0],
      setIsHamburgerActive = _useState[1];

  var _useState2 = React.useState(getWidth()),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useState3 = React.useState(false),
      isMobile = _useState3[0],
      setIsMobile = _useState3[1];

  var _useState4 = React.useState(false),
      startMenuAnim = _useState4[0],
      setStartMenuAnim = _useState4[1];

  var onHamburgerClick = function onHamburgerClick() {
    setIsHamburgerActive(function (prevState) {
      return !prevState;
    });
  };

  React.useEffect(function () {
    triggerHamburgerClose && setIsHamburgerActive(false);
  }, [triggerHamburgerClose]);
  React.useEffect(function () {
    var resizeListener = function resizeListener() {
      setWidth(getWidth());
    };

    window.addEventListener('resize', resizeListener);
    return function () {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);
  React.useEffect(function () {
    if (width <= mobileBreakPoint) {
      setIsMobile(true);
    } else {
      setIsHamburgerActive(false);
      setIsMobile(false);
    }
  }, [width]);
  React.useEffect(function () {
    isHamburgerActive ? setTimeout(function () {
      setStartMenuAnim(true);
    }, 50) : setStartMenuAnim(false);
  }, [isHamburgerActive]);
  return /*#__PURE__*/React__default.createElement("div", _extends({}, props, {
    className: styles.navBar + " nav-bar"
  }), !isMobile && /*#__PURE__*/React__default.createElement(React.Fragment, {
    className: "desktop " + styles.navContent + " nav-content"
  }, children), isMobile && /*#__PURE__*/React__default.createElement(React.Fragment, null, isHamburgerActive && /*#__PURE__*/React__default.createElement(reactPortal.Portal, null, /*#__PURE__*/React__default.createElement("div", {
    className: "mobile " + styles.overlayBackground + " " + mobileMenuOverlayBG + " " + styles.overlay
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles.mobileMenuContent + " " + (startMenuAnim && styles.mobileMenuContentActive)
  }, children))), /*#__PURE__*/React__default.createElement("div", {
    className: styles.hamburgerIcon + " " + (isHamburgerActive && styles.hamburgerIconActive) + " hamburger-icon",
    onClick: onHamburgerClick
  }, /*#__PURE__*/React__default.createElement("div", null))));
}
NavBar.propTypes = {
  mobileBreakPoint: PropTypes.number.isRequired,
  triggerHamburgerClose: PropTypes.bool,
  children: PropTypes.node.isRequired
};

module.exports = NavBar;
//# sourceMappingURL=index.js.map
