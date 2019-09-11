import React, { useContext } from 'react';
import _ from 'lodash';

import { ColorContext } from '../../../../contexts';
import Swatch from '../../../Swatch';
import styles from './Swatches.module.scss';

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
