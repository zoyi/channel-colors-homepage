import React, { useMemo } from 'react';
import { flow, groupBy, map, sortBy, toPairs } from 'lodash/fp';

import _defaultColors from '../node_modules/channel-colors/dist/default.colors.json';
import { ColorContext } from './contexts';
import MenuPanel from './components/MenuPanel';
import Content from './components/Content';
import styles from './App.module.scss'

function App() {
  const defaultColors = useMemo(() => flow(
    toPairs,
    map(([name, color]) => ({ name, ...color })),
    sortBy(({ name }) => {
      const regex = /[a-z]+(\d+)/;
      if (name.match(regex)) {
        const match = name.match(regex);
        return Number(match[1]);
      }
      if (name.match(/[a-z]+/)) {
        return Number.MAX_SAFE_INTEGER
      }
      return 0;
    }),
    groupBy('family'),
  )(_defaultColors), []);

  return (
    <div className={styles.App}>
      <ColorContext.Provider value={defaultColors}>
        <MenuPanel />
        <Content />
      </ColorContext.Provider>
    </div>
  );
}

export default App;
