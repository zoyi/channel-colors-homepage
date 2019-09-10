/* NOTE: from ch-desk-web */

/* External dependencies */
import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';

/* Internal dependencies */
import styles from './ToggleButton.module.scss';

const PADDING = 4;

function ToggleButton({ className, style, checked, size = 16, onClick = _.noop }) {
  return (
    <div
      style={{
        width: `${size * 2}px`,
        height: `${size + PADDING}px`,
        borderRadius: `${(size + PADDING) / 2}px`,
        ...style,
      }}
      className={classNames(
        className,
        styles.wrapper,
        checked ? styles.on : styles.off,
      )}
      onClick={onClick}
    >
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: checked ? `translateX(${size - PADDING}px)` : null,
        }}
        className={styles.content}
      />
    </div>
  );
}

export default ToggleButton
