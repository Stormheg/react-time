import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'

import Home from './Home'
import withLocalTimezone from '../../hocs/withLocalTimezone'
import withTimezone from '../../hocs/withTimezone';

export default compose(
    connect((state) => ({
        timezones: state.home.timezones
    })),
    withLocalTimezone,
    withTimezone('Europe/London'),
    withTimezone('America/Los_Angeles'),
    withTimezone('Australia/Sydney'),
    withTimezone('Asia/Tokyo'),
)(Home)