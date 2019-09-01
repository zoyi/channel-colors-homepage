import React, { useContext } from 'react';
import _ from 'lodash';

import { ColorContext } from '../../../../contexts'
import styles from './Swatches.module.scss';

function Swatch({ name, color }) {
  const { hex, opacity } = color;
  return (
    <div className={styles.Swatch}>
      { (opacity < 100) && (<div className={styles.Backer} />) }
      <div
        className={styles.Color}
        style={{ backgroundColor: hex, opacity: _.round(opacity / 100, 2) }}
      />
      <div className={styles.Label}>
        <div>{ name }</div>
        <div className={styles.Hex}>{ hex }</div>
      </div>
    </div>
  )
}

function Swatches() {
  const colors = useContext(ColorContext);

  return (
    <section id="colors">
      <h1>Color Swatches</h1>

      { _.map(colors, (colors) => (
        <div
          id={`colors-${colors[0].family}`}
          key={colors[0].family}
          className={styles.ColorFamily}
        >
          <h2>{ colors[0].family }</h2>
          <div className={styles.Colors}>
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
