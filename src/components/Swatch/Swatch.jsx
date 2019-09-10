import React from 'react';
import _ from 'lodash';

import styles from './Swatch.module.scss';

function Swatch({ name, color }) {
  const { hex, opacity } = color;
  return (
    <div className={styles.Swatch}>
      { (opacity < 100) && (<div className={styles.Backer} />) }

      <div
        className={styles.Color}
        style={{ backgroundColor: hex, opacity: _.round(opacity / 100, 2) }}
      />

      <div className={styles.ColorBorder} />

      <div className={styles.Label}>
        <div>{ name }</div>
        <div className={styles.Hex}>{ hex }</div>
      </div>
    </div>
  )
}

export default Swatch
