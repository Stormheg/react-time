import React from 'react'
import Clock from '../../components/Clock'

export default ({timezones}) => {
    return (
        <div className="Home">
            <div className="Home__Zones">
                {timezones.map(timezone => {
                    return(<Clock key={timezone.id} timezone={timezone}></Clock>)
                })}
            </div>
            {/* <Time hours={time.hours} minutes={time.minutes} seconds={time.seconds}></Time> */}
            {/* <Time city="London" country="United Kingdom" hours={time.hours-1} minutes={time.minutes} seconds={time.seconds}></Time> */}
        </div>
    )
}