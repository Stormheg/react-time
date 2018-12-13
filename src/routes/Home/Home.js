import React from 'react'
import Time from '../../components/Time'

export default ({time}) => {
    return (
        <div className="Home">
            <Time hours={time.hours} minutes={time.minutes} seconds={time.seconds}></Time>
            {/* <Time hours={10} minutes={45} seconds={12}></Time> */}
        </div>
    )
}