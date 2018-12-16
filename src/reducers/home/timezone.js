import { handleActions } from 'redux-actions'

import { addTimezone, removeTimezone } from '../../actions/timezone'

const reducer = handleActions({
    [removeTimezone]: (state, action) => {
        return state.filter(timezone => timezone.id !== action.payload)
    },
    [addTimezone]: (state, action) => {
        return [
            ...state,
            {
                id: action.payload.id,
                timezone: action.payload.timezone,
            }
        ]
    }
}, [])

export default reducer