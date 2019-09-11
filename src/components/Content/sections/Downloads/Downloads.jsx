import React from 'react';

import { SCSS, CSS, ANDROID_XML, JSON_SCHEME } from '../../../../resources/etc/usages';

function Downloads() {
  return (
    <section id="downloads">
      <h1>Downloads / Usage</h1>

      <h2>SCSS</h2>
      <a href="http://cdn.channel.io/colors/default.colors.scss" download>Download</a>
      <code>{ SCSS }</code>

      <h2>CSS</h2>
      <a href="http://cdn.channel.io/colors/default.colors.css" download>Download</a>
      <code>{ CSS }</code>

      <h2>Android XML</h2>
      <a href="http://cdn.channel.io/colors/android.default.colors.xml" download>Download</a>
      <code>{ ANDROID_XML }</code>

      <h2>JSON</h2>
      <a href="http://cdn.channel.io/colors/default.colors.json" download>Download</a>
      <code>{ JSON_SCHEME }</code>
    </section>
  )
}

export default Downloads
