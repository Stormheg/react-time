import React from 'react'
import uuid from 'uuid/v4'

import { getStore } from '../utils/Store'
import { addTimezone } from '../actions/timezone'

export default (WrappedComponent) => {
    return class extends React.Component {
        componentDidMount() {
            let id = uuid()
            let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone

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
