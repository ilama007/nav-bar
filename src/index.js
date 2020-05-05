import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import styles from './styles.module.css';

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

export default function NavBar({
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
    setIsHamburgerActive((prevState) => !prevState);
  };

  useEffect(() => {
    triggerHamburgerClose && setIsHamburgerActive(false);
  }, [triggerHamburgerClose]);

  // resize event listener
  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWidth(getWidth());
    };
    // set resize listener
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      // remove resize listener
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
    isHamburgerActive
      ? setTimeout(() => {
          setStartMenuAnim(true);
        }, 50)
      : setStartMenuAnim(false);
  }, [isHamburgerActive]);

  return (
    <div {...props} className={`${styles.navBar} nav-bar`}>
      {!isMobile && (
        <Fragment className={`desktop ${styles.navContent} nav-content`}>
          {children}
        </Fragment>
      )}
      {isMobile && (
        <Fragment>
          {isHamburgerActive && (
            <Portal>
              <div
                className={`mobile ${styles.overlayBackground} ${mobileMenuOverlayBG} ${styles.overlay}`}
              >
                <div
                  className={`${styles.mobileMenuContent} ${
                    startMenuAnim && styles.mobileMenuContentActive
                  }`}
                >
                  {children}
                </div>
              </div>
            </Portal>
          )}
          <div
            className={`${styles.hamburgerIcon} ${
              isHamburgerActive && styles.hamburgerIconActive
            } hamburger-icon`}
            onClick={onHamburgerClick}
          >
            <div />
          </div>
        </Fragment>
      )}
    </div>
  );
}

NavBar.propTypes = {
  mobileBreakPoint: PropTypes.number.isRequired,
  triggerHamburgerClose: PropTypes.bool,
  children: PropTypes.node.isRequired
};
