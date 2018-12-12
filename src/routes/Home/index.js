import { compose } from 'recompose'
import { connect } from 'react-redux'

import Home from './Home'
import withCurrentTime from '../../hocs/withCurrentTime'

export default compose(
    connect(),
    withCurrentTime,
)(Home)