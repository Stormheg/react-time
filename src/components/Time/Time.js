import React from 'react'

export default ({ hours, minutes, seconds }) => {
    return (
        <div className="Time">
            <p className="Time__Hours">{hours}</p>
            <p className="Time__Minutes">{minutes}</p>

            {(() => {
                if (seconds) {
                    return (
                        <p className="Time__Seconds">{seconds}</p>
                    )
                }
            })()}
        </div>
    )
}