import React from 'react'
import Time from '../Time'

export default ({city, country, timezone }) => {
    return (
        <div className="Clock">
            {/* <p className="Clock__Label">
                <span className="Clock__City">{city}, </span>
                <span className="Clock__Country">{country}</span>
            </p> */}
            <Time timezone={timezone}></Time>
        </div>
    )
}