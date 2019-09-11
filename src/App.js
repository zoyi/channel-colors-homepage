import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { flow, toPairs, map, forEach } from 'lodash/fp';
import _ from 'lodash';

import { ColorContext } from './contexts';
import { DARK_THEME } from './constants/themes';
import themeSelector from './selectors/themeSelector';
import MenuPanel from './components/MenuPanel';
import Content from './components/Content';
import styles from './App.module.scss'

import defaultColors from '../node_modules/channel-colors/dist/default.colors.json';
import darkColors from '../node_modules/channel-colors/dist/dark.colors.json';

function App() {
  const currentTheme = useSelector(themeSelector.getTheme);
  const themeColors = useSelector(themeSelector.getThemeColors);

  useEffect(() => {
    const root = document.documentElement;
    flow(
      toPairs,
      map(([name, values]) => ({
        name: `--${_.kebabCase(name)}`,
        hex: values.hex,
      })),
      forEach(({ name, hex }) => {
        root.style.setProperty(name, hex);
      })
    )(
      (currentTheme === DARK_THEME) ? darkColors : defaultColors
    )
  }, [currentTheme]);

  return (
    <div className={styles.App}>
      <ColorContext.Provider value={themeColors}>
        <MenuPanel />
        <Content />
      </ColorContext.Provider>
    </div>
  );
}

export default App;
