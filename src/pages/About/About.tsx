import * as React from 'react';
import Navi from '../../Navi';
import * as moment from 'moment';

export default () => (
  <div>
    <Navi />
    <h2>About</h2>
    <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
  </div>
);
