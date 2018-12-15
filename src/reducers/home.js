import { handleActions } from 'redux-actions'

import { setTime, registerTimer } from '../actions/time'

const reducer = handleActions({
    [setTime]: (state, action) => {
        let newState = { ...state }
        if (!action.error) {
            newState.time = {
                id: action.payload.id,
                hours: action.payload.hours,
                minutes: action.payload.minutes,
                seconds: action.payload.seconds
            }
        }
    },
    [registerTimer]: (state, action) => ({
        ...state,
        // time: action.payload
    })
}, () => {
    let now = new Date()
    let hours = String(now.getHours()).padStart(2, '0')
    let minutes = String(now.getMinutes()).padStart(2, '0')
    let seconds = String(now.getSeconds()).padStart(2, '0')

    return {
        time: {
            id: 0,
            hours,
            minutes,
            seconds
        }
    }
})

export default reducer