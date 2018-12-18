import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import uuid from 'uuid/v4'

import Time from './Time'
import { addTime, updateTime, removeTime } from '../../actions/time'
import { getTimeForTimezone } from '../../helpers/timezone'

export default compose(
    connect((state, props) => {
        let time = state.home.time.find(time => { return time.id === props.id })

        if (time) {
            return {
                hours: time.hours,
                minutes: time.minutes,
                seconds: time.seconds,
            }
        }
        return {}

    }),
    lifecycle({
        componentDidMount(props) {
            let id = uuid()
            let { hours, minutes, seconds } = getTimeForTimezone(this.props.timezone.timezone, false)
            this.props.handleSetId(id)
            this.props.dispatch(addTime({
                id,
                hours,
                minutes,
                seconds,
                timerId: setInterval(() => {
                    let { hours, minutes, seconds } = getTimeForTimezone(this.props.timezone.timezone, false)

                    this.props.dispatch(updateTime({
                        id,
                        hours,
                        minutes,
                        seconds
                    }))
                }, 1000),
            }
            ))
        },
        componentWillUnmount() {
            this.props.dispatch(removeTime(this.props.id))
        }
    })
)(Time)
