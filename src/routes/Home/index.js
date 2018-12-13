import { connect } from 'react-redux'
import { compose, withHandlers, withState, lifecycle } from 'recompose'

import Home from './Home'
import withCurrentTime from '../../hocs/withCurrentTime';

export default compose(
    connect((state) => ({
        time: state.home.time
    })),
    withCurrentTime,
)(Home)