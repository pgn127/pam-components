import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import classNames from 'classnames';
import styleSheet from './style';


const TextInput = (props) => {
  const {
    classes,
    value,
    placeholder = '',
    type = 'input',
    inputChange,
    disabled = false,
    customClasses = {},
    error,
    maxLength = 1000,
    inputProps,
    success,
  } = props;
  return (
    <div className={classNames(classes.container, customClasses.container, { [classes.containerError]: !!error || !!success })}>
      <div className={classes.inputWrapper}>
        <input
          className={classNames(classes.inputField, classes.contextSmBlack, customClasses.inputField, {
              [classes.inputError]: error,
              [classes.inputSuccess]: success,

              [classes.disabled]: disabled && !error,
            })}
          type="text"
          value={value}
          disabled={disabled}
          onChange={evt => inputChange && inputChange(evt.target.value)}
          maxLength={maxLength}
          placeholder={placeholder}
          {...inputProps}
        />
      </div>
      <span className={classes.error}>{error}</span>
      <span className={classes.success}>{success}</span>
    </div>
  );
};
// export default TextInput
export default withStyles(styleSheet)(TextInput);
