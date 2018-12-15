import React from 'react'
import Time from '../../components/Time'

export default ({time}) => {
    return (
        <div className="Home">
            {/* {timers.map(time => {
                <Time key={time.id} {...time} label="Your location" timezone="Europe/Amsterdam"></Time>
            })} */}
            <Time city="Zwolle" country="The Netherlands" hours={time.hours} minutes={time.minutes} seconds={time.seconds}></Time>
            {/* <Time city="London" country="United Kingdom" hours={time.hours-1} minutes={time.minutes} seconds={time.seconds}></Time> */}
            {/* <Time hours={10} minutes={45} seconds={12}></Time> */}
        </div>
    )
}