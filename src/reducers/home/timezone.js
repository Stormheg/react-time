import { handleActions } from 'redux-actions';

import { addTimezone, removeTimezone } from '../../actions/timezone';

const reducer = handleActions({
  [removeTimezone]: (state, action) => state.filter(timezone => timezone.id !== action.payload),
  [addTimezone]: (state, action) => [
    ...state,
    {
      id: action.payload.id,
      timezone: action.payload.timezone,
    },
  ],
}, []);

export default reducer;
