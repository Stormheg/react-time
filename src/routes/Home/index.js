import { connect } from 'react-redux'
import { compose, withHandlers, withState, lifecycle } from 'recompose'

import Home from './Home'
import withCurrentLocalTime from '../../hocs/withCurrentLocalTime';

export default compose(
    connect((state) => ({
        time: state.home.time
    })),
    withCurrentLocalTime,
)(Home)