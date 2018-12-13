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
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()

    return {
        time: {
            hours,
            minutes,
            seconds
        }
    }
})

export default reducer