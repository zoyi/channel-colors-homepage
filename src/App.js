import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ColorContext } from './contexts';
import themeSelector from './selectors/themeSelector';
import MenuPanel from './components/MenuPanel';
import Content from './components/Content';
import styles from './App.module.scss'

function App() {
  const currentTheme = useSelector(themeSelector.getTheme);
  const themeColors = useSelector(themeSelector.getThemeColors);

  useEffect(() => {
    document.documentElement.dataset['theme'] = currentTheme;
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
