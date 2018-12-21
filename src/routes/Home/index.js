import { connect } from 'react-redux';
import { compose } from 'recompose';

import Home from './Home';
import withLocalTimezone from '../../hocs/withLocalTimezone';
import withTimezone from '../../hocs/withTimezone';

export default compose(
  connect(state => ({
    timezones: state.home.timezones,
  })),
  withTimezone('Asia/Tokyo'),
  withTimezone('Australia/Sydney'),
  withTimezone('America/Los_Angeles'),
  withLocalTimezone,

)(Home);
