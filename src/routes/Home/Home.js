import React from 'react';
import Clock from '../../components/Clock';

export default ({ timezones }) => (
  <div className="Home">
    <div className="Home__Zones">
      {timezones.map(timezone => <Clock key={timezone.id} timezone={timezone} />)}
    </div>
  </div>
);
