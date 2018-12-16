import { connect } from 'react-redux'
import { compose } from 'recompose'

import Home from './Home'
import withTimezone from '../../hocs/withTimezone';

export default compose(
    connect((state) => ({
        timezones: state.home.timezones
    })),
    withTimezone('Europe/Amsterdam',),
    withTimezone('Europe/London'),
    withTimezone('America/Los_Angeles'),
    withTimezone('Australia/Sydney'),
    withTimezone('Asia/Tokyo'),
)(Home)