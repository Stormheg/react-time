import React from 'react'

export default ({city, country, hours, minutes, seconds }) => {
    return (
        <div className="Time">
            <p className="Time__Label">
                <span className="Time__City">{city}, </span>
                <span className="Time__Country">{country}</span>
            </p>
            <p className="Time__Count">
                <span className="Time__Hours">{hours}</span>
                <span className="Time__Minutes">{minutes}</span>
                <span className="Time__Seconds">{seconds}</span>
            </p>
        </div>
    )
}