import React from 'react'
import { connect } from 'react-redux'

import { registerTimer, setTime } from '../actions/time'
import { getStore } from '../utils/Store'

export default (WrappedComponent,) => {
    return class extends React.Component {
        componentDidMount() {
            const store = getStore()
            this.props.dispatch(registerTimer(setInterval(() => {
                let now = new Date()
                let hours = String(now.getHours()).padStart(2, '0')
                let minutes = String(now.getMinutes()).padStart(2, '0')
                let seconds = String(now.getSeconds()).padStart(2, '0')

                this.props.dispatch(setTime({
                    id: 0,
                    hours,
                    minutes,
                    seconds
                }, ))
            }, 1000)))

        }
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}