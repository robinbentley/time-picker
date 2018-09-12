/* eslint no-console:0 */

import 'rc-time-picker/assets/index.less';

import React from 'react';
import ReactDom from 'react-dom';

import { DateTime } from 'luxon';

import TimePicker from 'rc-time-picker';

const showSecond = true;
const str = showSecond ? 'HH:mm:ss' : 'HH:mm';


function onChange(value) {
  console.log(value && value.toFormat(str));
}

ReactDom.render(
  <TimePicker
    style={{ width: 100 }}
    showSecond={showSecond}
    defaultValue={DateTime.local()}
    className="xxx"
    onChange={onChange}
  />,
  document.getElementById('__react-content')
);
