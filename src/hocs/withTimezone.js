import React from 'react'
import uuid from 'uuid/v4'

import { getStore } from '../utils/Store'
import { addTimezone } from '../actions/timezone'

export default (timezone) => WrappedComponent => {
    return class extends React.Component {
        componentDidMount() {
            const state = getStore().getState()
            let id = uuid()

            this.props.dispatch(addTimezone({
                id,
                timezone
            }))
        }
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}
