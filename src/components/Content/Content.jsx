import React from 'react';

import { Overview, Downloads, Swatches } from './sections'
import styles from './Content.module.scss'

function Content() {
  return (
    <div className={styles.Content}>
      <Overview />
      <Downloads />
      <Swatches />
    </div>
  )
}

export default Content
