import React from 'react'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'

import { getStore } from '../utils/Store'
import { addTimezone, removeTimezone } from '../actions/timezone'

export default (timezone, city, country) => WrappedComponent => {
    return class extends React.Component {
        componentDidMount() {
            const store = getStore()
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




// import React from 'react'
// import uuid from 'uuid/v4'
// import { connect } from 'react-redux'

// import { getStore } from '../utils/Store'
// import { addTimezone, removeTimezone } from '../actions/timezone'
// import getTimeForTimezone from '../helpers/timezone'

// export default (WrappedComponent, timezone) => {
//     return class extends React.Component {
//         componentDidMount() {
//             const store = getStore()
//             let id = uuid()
            
//             let time = getTimeForTimezone()

//             this.props.dispatch(addTimezone({
//                 id,
//                 ...time
//             }))
//         }
//         render() {
//             return <WrappedComponent {...this.props} />
//         }
//     }
// }

