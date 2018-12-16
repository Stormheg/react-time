import React from 'react'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'

import { addTime, updateTime } from '../actions/time'
import { getStore } from '../utils/Store'

export default (WrappedComponent,) => {
    return class extends React.Component {
        componentDidMount() {
            const store = getStore()
            let id = uuid()
            let now = new Date()
            let hours = String(now.getHours()).padStart(2, '0')
            let minutes = String(now.getMinutes()).padStart(2, '0')
            let seconds = String(now.getSeconds()).padStart(2, '0')
            this.props.dispatch(addTime({
                id,
                hours,
                minutes,
                seconds,
                timerId: setInterval(() => {
                    now = new Date()
                    hours = String(now.getHours()).padStart(2, '0')
                    minutes = String(now.getMinutes()).padStart(2, '0')
                    seconds = String(now.getSeconds()).padStart(2, '0')
                    this.props.dispatch(updateTime({
                        id,
                        hours,
                        minutes,
                        seconds
                    }, ))       
                }, 1000),
            }))

        }
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}