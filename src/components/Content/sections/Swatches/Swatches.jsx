import React, { useContext, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import { ColorContext } from '../../../../contexts';
import { SET_THEME } from '../../../../actions';
import themeSelector from '../../../../selectors/themeSelector';
import { DEFAULT_THEME, DARK_THEME } from '../../../../constants/themes';
import ToggleButton from '../../../ToggleButton';
import Swatch from '../../../Swatch';
import styles from './Swatches.module.scss';

function Swatches() {
  const colors = useContext(ColorContext);
  const dispatch = useDispatch();
  const currentTheme = useSelector(themeSelector.getTheme);

  const handleChangeTheme = useCallback(() => {
    const theme = (currentTheme === DEFAULT_THEME) ? DARK_THEME : DEFAULT_THEME;
    dispatch({ type: SET_THEME, payload: { theme } });
  }, [dispatch, currentTheme]);

  return (
    <section id="colors">
      <h1>Color Swatches</h1>

      <div className={styles.ThemeToggleWrapper}>
        <h3>Dark Theme</h3>
        <ToggleButton
          className={styles.ToggleButton}
          checked={currentTheme === DARK_THEME}
          onClick={handleChangeTheme}
        />
      </div>

      { _.map(colors, (colors) => (
        <div
          id={`colors-${colors[0].family}`}
          key={colors[0].family}
          className={styles.ColorFamily}
        >
          <h2>{ colors[0].family }</h2>
          <div className={styles.SwatchWrapper}>
            { _.map(colors, (color) => (
              <Swatch
                key={color.name}
                name={color.name}
                color={color}
              />
            )) }
          </div>
        </div>
      )) }
    </section>
  )
}

export default Swatches
