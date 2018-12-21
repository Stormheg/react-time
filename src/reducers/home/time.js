import { handleActions } from 'redux-actions';

import { updateTime, addTime, removeTime } from '../../actions/time';

const reducer = handleActions({
  [updateTime]: (state, action) => state.map(
    time => (time.id === action.payload.id ? {
      ...time,
      hours: action.payload.hours,
      minutes: action.payload.minutes,
      seconds: action.payload.seconds,
    } : time),
  ),

  [addTime]: (state, action) => [
    ...state,
    {
      id: action.payload.id,
      timerId: action.payload.timerId,
      hours: action.payload.hours,
      minutes: action.payload.minutes,
      seconds: action.payload.seconds,
    },
  ],

  [removeTime]: (state, action) => state.filter(time => time.id !== action.payload),
}, []);

export default reducer;
