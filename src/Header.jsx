import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DateTime } from 'luxon';

class Header extends Component {
  static propTypes = {
    format: PropTypes.string,
    prefixCls: PropTypes.string,
    disabledDate: PropTypes.func,
    placeholder: PropTypes.string,
    clearText: PropTypes.string,
    value: PropTypes.object,
    inputReadOnly: PropTypes.bool,
    hourOptions: PropTypes.array,
    minuteOptions: PropTypes.array,
    secondOptions: PropTypes.array,
    disabledHours: PropTypes.func,
    disabledMinutes: PropTypes.func,
    disabledSeconds: PropTypes.func,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    onEsc: PropTypes.func,
    allowEmpty: PropTypes.bool,
    defaultOpenValue: PropTypes.object,
    currentSelectPanel: PropTypes.string,
    focusOnOpen: PropTypes.bool,
    onKeyDown: PropTypes.func,
    clearIcon: PropTypes.node,
  };

  static defaultProps = {
    inputReadOnly: false,
  };

  constructor(props) {
    super(props);
    const { value, format } = props;
    this.state = {
      str: (value && value.toFormat(format)) || '',
      invalid: false,
    };
  }

  componentDidMount() {
    if (this.props.focusOnOpen) {
      // Wait one frame for the panel to be positioned before focusing
      const requestAnimationFrame =
        window.requestAnimationFrame || window.setTimeout;
      requestAnimationFrame(() => {
        this.refs.input.focus();
        this.refs.input.select();
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { value, format } = nextProps;
    this.setState({
      str: (value && value.toFormat(format)) || '',
      invalid: false,
    });
  }

  onInputChange = event => {
    const str = event.target.value;
    this.setState({
      str,
    });
    const {
      format,
      hourOptions,
      minuteOptions,
      secondOptions,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      onChange,
      allowEmpty,
    } = this.props;

    if (str) {
      const originalValue = this.props.value;
      const parsed = DateTime.fromFormat(str, format);
      if (!parsed.isValid) {
        this.setState({
          invalid: true,
        });
        return;
      }

      // if time value not allowed, response warning.
      if (
        hourOptions.indexOf(parsed.hour) < 0 ||
        minuteOptions.indexOf(parsed.minute) < 0 ||
        secondOptions.indexOf(parsed.second) < 0
      ) {
        this.setState({
          invalid: true,
        });
        return;
      }

      // if time value is disabled, response warning.
      const disabledHourOptions = disabledHours();
      const disabledMinuteOptions = disabledMinutes(parsed.hour);
      const disabledSecondOptions = disabledSeconds(parsed.hour, parsed.minute);
      if (
        (disabledHourOptions && disabledHourOptions.indexOf(parsed.hour) >= 0) ||
        (disabledMinuteOptions &&
          disabledMinuteOptions.indexOf(parsed.minute) >= 0) ||
        (disabledSecondOptions &&
          disabledSecondOptions.indexOf(parsed.second) >= 0)
      ) {
        this.setState({
          invalid: true,
        });
        return;
      }

      if (originalValue) {
        if (
          originalValue.hour !== parsed.hour ||
          originalValue.minute !== parsed.minute ||
          originalValue.second !== parsed.second
        ) {
          // keep other fields for rc-calendar
          onChange(parsed);
        }
      } else if (+originalValue !== +parsed) {
        onChange(parsed);
      }
    } else if (allowEmpty) {
      onChange(null);
    } else {
      this.setState({
        invalid: true,
      });
      return;
    }

    this.setState({
      invalid: false,
    });
  };

  onKeyDown = e => {
    const { onEsc, onKeyDown } = this.props;
    if (e.keyCode === 27) {
      onEsc();
    }

    onKeyDown(e);
  };

  onClear = () => {
    this.setState({ str: '' });
    this.props.onClear();
  };

  getClearButton() {
    const { prefixCls, allowEmpty, clearIcon } = this.props;
    if (!allowEmpty) {
      return null;
    }
    return (
      <a
        role="button"
        className={`${prefixCls}-clear-btn`}
        title={this.props.clearText}
        onMouseDown={this.onClear}
      >
        {clearIcon || <i className={`${prefixCls}-clear-btn-icon`} />}
      </a>
    );
  }

  getProtoValue() {
    return this.props.value || this.props.defaultOpenValue;
  }

  getInput() {
    const { prefixCls, placeholder, inputReadOnly } = this.props;
    const { invalid, str } = this.state;
    const invalidClass = invalid ? `${prefixCls}-input-invalid` : '';
    return (
      <input
        className={`${prefixCls}-input  ${invalidClass}`}
        ref="input"
        onKeyDown={this.onKeyDown}
        value={str}
        placeholder={placeholder}
        onChange={this.onInputChange}
        readOnly={!!inputReadOnly}
      />
    );
  }

  render() {
    const { prefixCls } = this.props;
    return (
      <div className={`${prefixCls}-input-wrap`}>
        {this.getInput()}
        {this.getClearButton()}
      </div>
    );
  }
}

export default Header;
