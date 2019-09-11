import React, { useContext, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import _ from 'lodash';

import { ColorContext } from '../../contexts'
import { SET_THEME } from '../../actions';
import themeSelector from '../../selectors/themeSelector';
import { DARK_THEME, DEFAULT_THEME } from '../../constants/themes';
import ToggleButton from '../ToggleButton';
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
  const dispatch = useDispatch();
  const currentTheme = useSelector(themeSelector.getTheme);

  const handleChangeTheme = useCallback(() => {
    const theme = (currentTheme === DEFAULT_THEME) ? DARK_THEME : DEFAULT_THEME;
    dispatch({ type: SET_THEME, payload: { theme } });
  }, [dispatch, currentTheme]);

  return (
    <div className={styles.MenuPanel}>
      <div className={styles.MenuPanelContent}>
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

      <div className={styles.ThemeToggleWrapper}>
        <h4>Dark Mode</h4>
        <ToggleButton
          className={styles.ToggleButton}
          checked={currentTheme === DARK_THEME}
          onClick={handleChangeTheme}
        />
      </div>
    </div>
  )
}

export default MenuPanel
