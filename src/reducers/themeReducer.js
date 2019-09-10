import _ from 'lodash';

import { SET_THEME } from '../actions'
import { DEFAULT_THEME } from '../constants/themes'

const initialState = {
  theme: DEFAULT_THEME,
};

export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_THEME: {
      return {
        ...state,
        theme: _.get(action, 'payload.theme', DEFAULT_THEME),
      };
    }

    default: {
      return state;
    }
  }
}
