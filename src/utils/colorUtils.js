import _ from 'lodash';
import { flow, groupBy, map, sortBy, toPairs } from 'lodash/fp';

export const parseColors = flow(
  toPairs,
  map(([name, color]) => ({ name, ...color })),
  sortBy(sortColorFnc),
  groupBy('family'),
);

export function swapColorName(colorJSON) {
  return _.mapValues(colorJSON, (colors) => {
    const center = _.round(colors.length / 2);
    for (let i = 0; i < center; i++) {
      const li = colors.length - (i + 1);
      const n1 = colors[i].name;
      const n2 = colors[li].name;
      colors[i].name = n2;
      colors[li].name = n1;
    }
    return _.sortBy(colors, sortColorFnc);
  })
}

export function sortColorFnc({ family, name, opacity }) {
  if (['black', 'white'].includes(family)) {
    return opacity;
  }
  const regex = /[a-z]+(\d+)/;
  if (name.match(regex)) {
    const match = name.match(regex);
    return Number(match[1]);
  }
  if (name.match(/[a-z]+/)) {
    return Number.MAX_SAFE_INTEGER
  }
  return 0;
}
