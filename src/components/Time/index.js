import { connect } from 'react-redux'
import { compose } from 'recompose'

import Time from './Time'

export default compose(
    connect((state, props) => {
        let time = state.home.time.filter(time => time.id === props.id)

        if (!time) {
            throw new Error("No time in state for id " + props.id)
        }
        return {
            hours: time.hours,
            minutes: time.minutes,
            seconds: time.seconds,
        }
    }),
)(Time)
