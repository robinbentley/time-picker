import 'rc-time-picker/assets/index.less';

import React from 'react';
import ReactDom from 'react-dom';
import { DateTime } from 'luxon';
import TimePicker from 'rc-time-picker';

ReactDom.render(
  <TimePicker defaultValue={DateTime.local()} showSecond={false} minuteStep={15} />
, document.getElementById('__react-content'));
