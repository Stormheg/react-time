import { handleActions } from 'redux-actions'

import { updateTime, addTime } from '../../actions/time'

const reducer = handleActions({
    [updateTime]: (state, action) => {
        return state.map(
            time => 
                time.id === action.payload.id ? {
                    ...time,
                     hours: action.payload.hours,
                     minutes: action.payload.minutes,
                     seconds: action.payload.seconds,
                    } : time
        )
    },
    [addTime]: (state, action) => {
        return [
            ...state,
            {
                id: action.payload.id,
                timerId: action.payload.timerId,
                hours: action.payload.hours,
                minutes: action.payload.minutes,
                seconds: action.payload.seconds,
            }
        ]
    }
}, [])

export default reducer