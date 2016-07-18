import homeReducer from './homeReducer';
import { $$initialState as $$homeState } from './homeReducer';

export default {
  $$homeStore: homeReducer,
};

export const initialStates = {
  $$homeState,
};
