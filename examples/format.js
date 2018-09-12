import 'rc-time-picker-luxon/assets/index.less';
import React from 'react';
import ReactDom from 'react-dom';
import { DateTime } from 'luxon';
import TimePicker from 'rc-time-picker-luxon';

ReactDom.render(
  <div>
    <TimePicker defaultValue={DateTime.local()} showHour={false} />
    <TimePicker defaultValue={DateTime.local()} showMinute={false} />
    <TimePicker defaultValue={DateTime.local()} showSecond={false} />

    <TimePicker defaultValue={DateTime.local()} showMinute={false} showSecond={false} />
    <TimePicker defaultValue={DateTime.local()} showHour={false} showSecond={false}/>
    <TimePicker defaultValue={DateTime.local()} showHour={false} showMinute={false} />
  </div>
, document.getElementById('__react-content'));
