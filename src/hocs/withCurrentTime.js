import React from 'react'
import { connect } from 'react-redux'

import { registerTimer, setTime } from '../actions/time'
import { getStore } from '../utils/Store'

export default (WrappedComponent) => {
    return class extends React.Component {
        componentDidMount() {
            const store = getStore()
            this.props.dispatch(registerTimer(setInterval(() => {
                let now = new Date()
                let hours = now.getHours()
                let minutes = now.getMinutes()
                let seconds = now.getSeconds()

                this.props.dispatch(setTime({
                    hours,
                    minutes,
                    seconds
                }))
            }, 1000)))

        }
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}