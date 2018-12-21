import { combineReducers } from 'redux';
import time from './time';
import timezones from './timezone';

export default combineReducers({
  time,
  timezones,
});
