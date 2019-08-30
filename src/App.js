import React from 'react';
import _ from 'lodash';
import { flow, toPairs, groupBy, sortBy, map } from 'lodash/fp'

import colors from '../node_modules/channel-colors/dist/default.colors.json';
import styles from './App.module.scss';

function Palette({ name, color }) {
  const { hex, opacity } = color;
  return (
    <div className={styles.Palette}>
      <div className={styles.Backer} />
      <div
        className={styles.Color}
        style={{ backgroundColor: hex, opacity: _.round(opacity / 100, 2) }}
      />
      <div className={styles.Label}>
        { name } / { hex }
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <div className={styles.GNB}>
        <div className={styles.Title}>
          Channel.io
        </div>
      </div>

      <div className={styles.Wrapper}>
        {
          flow(
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
            map((colors) => (
              <div
                key={colors[0].family}
                className={styles.ColorFamily}
              >
                <div className={styles.FamilyName}>{ colors[0].family }</div>
                <div className={styles.Colors}>
                  { _.map(colors, (color) => (
                    <Palette
                      key={color.name}
                      name={color.name}
                      color={color}
                    />
                  )) }
                </div>
              </div>
            ))
          )(colors)
        }
      </div>
    </>
  );
}

export default App;
