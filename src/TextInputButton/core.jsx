
import React, { Component } from 'react';
import classNames from 'classnames';
import Popover from 'material-ui/Popover';
import Arrow from 'customerImages/landingpage/v2/icons/form/enterArrowGrey';
import ArrowError from 'customerImages/landingpage/v2/icons/form/enterArrowDisabled';
import ArrowValid from 'customerImages/landingpage/v2/icons/form/enterArrowBlue';
import exclamationWhite from 'customerImages/landingpage/v2/icons/form/exclamationWhite';


class TextInputButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      focus: false,
    };
  }

  toggleFocus = () => {
    this.setState({
      focus: !this.state.focus,
    });
  }

  valueChange = (text) => {
    const {
      onUpdate,
      disabled,
    } = this.props;
    this.setState({
      text,
    }, () => {
      !disabled && onUpdate && onUpdate(this.state.text);
    });
  }

  render() {
    const {
      placeholder,
      onSubmit,
      classes,
      submitIcon,
      submitText,
      error,
      isValid,
      disabled,
      showSubmit = true,
      SubmitIconComponent,
      TitleComponent,
    } = this.props;

    const {
      text,
      focus,
    } = this.state;

    let arrowIcon = Arrow;
    if (error) {
      arrowIcon = ArrowError;
    } else if (isValid) {
      arrowIcon = ArrowValid;
    }

    let borderClass = classes.borderNormal;

    if (error) {
      borderClass = classes.borderError;
    } else if (focus) {
      borderClass = classes.borderFocus;
    }

    return (
      <div>
        {TitleComponent}
        <div className={classes.container}>
          <input
            disabled={disabled}
            className={classNames(classes.input, borderClass)}
            value={disabled ? placeholder : text}
            placeholder={placeholder}
            onChange={evt => this.valueChange(evt.target.value)}
            onFocus={this.toggleFocus}
            onBlur={this.toggleFocus}
            ref={(ref) => { this.anchorEl = ref; }}
          />
          {showSubmit && <div className={classes.submitButton} onMouseDown={() => !disabled && onSubmit(text)}>
            { SubmitIconComponent || <img src={ submitIcon || arrowIcon} /> }
           </div>
          }
          <Popover
            className={classes.popover}
            open={!!error}
            anchorEl={this.anchorEl}
            onRequestClose={() => this.valueChange(text)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <img src={exclamationWhite} className={classes.exclamation}/>
            {error}
          </Popover>
        </div>
      </div>
    );
  }
}

export default TextInputButton;
