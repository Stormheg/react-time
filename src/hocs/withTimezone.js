import React from 'react';
import uuid from 'uuid/v4';

import { addTimezone } from '../actions/timezone';

export default timezone => WrappedComponent => class extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    const id = uuid();

    dispatch(addTimezone({
      id,
      timezone,
    }));
  }

  render() {
    return <WrappedComponent {...this.props} />;
  }
};
