import React from 'react';

import { Overview, Downloads, Swatches } from './sections'
import Copyright from './Copyright/Copyright';
import styles from './Content.module.scss'

function Content() {
  return (
    <div className={styles.Content}>
      <div className={styles.Sections}>
        <Overview />
        <Downloads />
        <Swatches />
      </div>

      <Copyright />
    </div>
  )
}

export default Content
