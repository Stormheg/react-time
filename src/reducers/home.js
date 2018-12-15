import { handleActions } from 'redux-actions'

import { setTime, registerTimer } from '../actions/time'

const reducer = handleActions({
    [setTime]: (state, action) => ({
        ...state,
        time: {
            hours: action.payload.hours,
            minutes: action.payload.minutes,
            seconds: action.payload.seconds
        }
    }),
    [registerTimer]: (state, action) => ({
        ...state,
        timer: action.payload
    })
}, () => {
    let now = new Date()
    let hours = String(now.getHours()).padStart(2, '0')
    let minutes = String(now.getMinutes()).padStart(2, '0')
    let seconds = String(now.getSeconds()).padStart(2, '0')

    return {
        time: {
            hours,
            minutes,
            seconds
        }
    }
})

export default reducer