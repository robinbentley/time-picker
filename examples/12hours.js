/* eslint no-console:0 */

import 'rc-time-picker/assets/index.less';

import React from 'react';
import ReactDom from 'react-dom';

import { DateTime } from 'luxon';

import TimePicker from 'rc-time-picker';

const format = 'h:mm a';

const now = DateTime.fromObject({ hour: 0, minute: 0 });

function onChange(value) {
  console.log(value && value.toFormat(format));
}

ReactDom.render(
  <TimePicker
    showSecond={false}
    defaultValue={now}
    className="xxx"
    onChange={onChange}
    format={format}
    use12Hours
    inputReadOnly
  />,
  document.getElementById('__react-content')
);
