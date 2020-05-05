import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';

var styles = {"navBar":"_styles-module__navBar__2mDNk","overlay":"_styles-module__overlay__3qw0K","overlayBackground":"_styles-module__overlayBackground__OK5K3","mobileMenuContent":"_styles-module__mobileMenuContent__19S0I","mobileMenuContentActive":"_styles-module__mobileMenuContentActive__2Zx1E","hamburgerIcon":"_styles-module__hamburgerIcon__3Xhed","hamburgerIconActive":"_styles-module__hamburgerIconActive__2RupP"};

const getWidth = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  }
};

function NavBar({
  mobileBreakPoint,
  mobileMenuOverlayBG,
  triggerHamburgerClose,
  children,
  ...props
}) {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [width, setWidth] = useState(getWidth());
  const [isMobile, setIsMobile] = useState(false);
  const [startMenuAnim, setStartMenuAnim] = useState(false);

  const onHamburgerClick = () => {
    setIsHamburgerActive(prevState => !prevState);
  };

  useEffect(() => {
    triggerHamburgerClose && setIsHamburgerActive(false);
  }, [triggerHamburgerClose]);
  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth());
    };

    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);
  useEffect(() => {
    if (width <= mobileBreakPoint) {
      setIsMobile(true);
    } else {
      setIsHamburgerActive(false);
      setIsMobile(false);
    }
  }, [width]);
  useEffect(() => {
    isHamburgerActive ? setTimeout(() => {
      setStartMenuAnim(true);
    }, 50) : setStartMenuAnim(false);
  }, [isHamburgerActive]);
  return /*#__PURE__*/React.createElement("div", Object.assign({}, props, {
    className: `${styles.navBar} nav-bar`
  }), !isMobile && /*#__PURE__*/React.createElement("div", {
    className: `desktop ${styles.navContent} nav-content`
  }, children), isMobile && /*#__PURE__*/React.createElement(Fragment, null, isHamburgerActive && /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement("div", {
    className: `mobile ${styles.overlayBackground} ${mobileMenuOverlayBG} ${styles.overlay}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${styles.mobileMenuContent} ${startMenuAnim && styles.mobileMenuContentActive}`
  }, children))), /*#__PURE__*/React.createElement("div", {
    className: `${styles.hamburgerIcon} ${isHamburgerActive && styles.hamburgerIconActive} hamburger-icon`,
    onClick: onHamburgerClick
  }, /*#__PURE__*/React.createElement("div", null))));
}
NavBar.propTypes = {
  mobileBreakPoint: PropTypes.number.isRequired,
  triggerHamburgerClose: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default NavBar;
//# sourceMappingURL=index.modern.js.map
