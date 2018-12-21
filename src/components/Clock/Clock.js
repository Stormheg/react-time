import React, { useState } from 'react';
import Time from '../Time';

export default ({ city, timezone }) => {
  const [id, setId] = useState(null);

  return (
    <div className="Clock">
      <p className="Clock__Label">
        <span className="Clock__City">{city}</span>
      </p>
      <Time id={id} handleSetId={setId} timezone={timezone} />
    </div>
  );
};
