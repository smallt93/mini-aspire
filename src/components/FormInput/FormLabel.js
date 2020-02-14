import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  FormLabelItem,
  FormRequired,
} from './Form.style';

class FormLabel extends PureComponent {
  render() {
    const { label, required, icon } = this.props;
    return (
      <FormLabelItem>
        {label}
        {required && <FormRequired>*</FormRequired>}
        {icon && <i className={icon} />}
      </FormLabelItem>
    );
  }
}

FormLabel.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.string,
};

FormLabel.defaultProps = {
  required: false,
  label: '',
  icon: '',
};

export default FormLabel;
