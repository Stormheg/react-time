import React from 'react';

export default ({ hours, minutes, seconds }) => (
  <div className="Time">
    <p className="Time__Count">
      <span className="Time__Hours">{hours}</span>
      <span className="Time__Minutes">{minutes}</span>
      <span className="Time__Seconds">{seconds}</span>
    </p>
  </div>
);
