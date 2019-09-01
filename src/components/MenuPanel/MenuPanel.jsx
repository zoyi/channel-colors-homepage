import React, { useContext, useCallback } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
// import AnchorLink from 'react-anchor-link-smooth-scroll'
import _ from 'lodash';

import { ColorContext } from '../../contexts'
import styles from './MenuPanel.module.scss';

function AnchorLink({ href, children, ...otherProps }) {
  const handleClick = useCallback((e) => {
    const target = window.document.getElementById(href);
    if (target) {
      e.preventDefault();
      const node = ReactDOM.findDOMNode(target);
      node.scrollIntoView();
    }
  }, [href]);

  return (
    <a
      {...otherProps}
      href={href}
      onClick={handleClick}
    >
      { children }
    </a>
  )
}

function MenuPanel() {
  const colors = useContext(ColorContext);

  return (
    <div className={styles.MenuPanel}>
      <AnchorLink className={styles.MenuItem} href="overview">
        Overview
      </AnchorLink>

      <AnchorLink className={styles.MenuItem} href="downloads">
        Downloads
      </AnchorLink>

      <div>
        <AnchorLink className={styles.MenuItem} href="colors">
          Color Swatches
        </AnchorLink>

        <div className={styles.SubMenu}>
          { _.keys(colors).map((family) => (
            <AnchorLink
              key={family}
              className={classNames(styles.MenuItem, styles.SubMenuItem)}
              href={`colors-${family}`}
            >
              { family }
            </AnchorLink>
          )) }
        </div>
      </div>

      <a
        className={styles.MenuItem}
        href="https://github.com/zoyi/channel-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  )
}

export default MenuPanel
