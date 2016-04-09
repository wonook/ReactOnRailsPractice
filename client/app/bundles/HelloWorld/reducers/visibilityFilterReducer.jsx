import Immutable from 'immutable';

import actionTypes from '../constants/todoConstants.jsx'

export const $$initialState = Immutable.fromJS({filter: 'SHOW_ALL'});

const visilityFilterReducer = ($$state = $$initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return $$state
  }
}

export default visilityFilterReducer