import { compose } from 'recompose';
import { connect } from 'react-redux';

import Clock from './Clock';

export default compose(
  connect((state, props) => {
    const city = props.timezone.timezone.split('/')[1].replace('_', ' ');
    return {
      city,
    };
  }),
)(Clock);
