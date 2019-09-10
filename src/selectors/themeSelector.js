import { createSelector } from 'reselect';

import { DEFAULT_THEME, DARK_THEME } from '../constants/themes';
import { parseColors } from '../utils/colorUtils';

import defaultColors from '../../node_modules/channel-colors/dist/default.colors.json';
import darkColors from '../../node_modules/channel-colors/dist/dark.colors.json';

const getTheme = state => state.themeReducer.theme;

const getThemeColors = createSelector(
  getTheme,
  (theme) => {
    switch (theme) {
      case DARK_THEME: {
        return parseColors(defaultColors);
      }
      case DEFAULT_THEME:
      default: {
        return parseColors(darkColors);
      }
    }
  },
);

export default {
  getTheme,
  getThemeColors,
}
