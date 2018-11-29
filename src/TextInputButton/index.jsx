import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Core from './core';
import stylesheet from './style';

const TextInputButton = ({
  variant = 'default', classes, customClasses = {}, ...restProps
}) => {
  const newClasses = {
    type1: {
      ...classes,
      container: classNames(classes.containerType1, customClasses.container),
      input: classNames(classes.inputType1, customClasses.input),
    },
    default: {
      ...classes,
      container: classNames(classes.containerDefault, customClasses.container),
      input: classNames(classes.inputDefault, customClasses.input),
      borderNormal: classNames(classes.borderNormal, customClasses.borderNormal),
      borderError: classNames(classes.borderError, customClasses.borderError),
      borderFocus: classNames(classes.borderFocus, customClasses.borderFocus),
    },
  };

  return <Core classes={newClasses[variant]} {...restProps} />;
};


export default withStyles(stylesheet)(TextInputButton);
