import React from 'react';
import {
  func, bool, shape, any, string,
} from 'prop-types';
import { Field, getIn } from 'formik';
import _ from 'lodash';
import Select from 'react-select';
import FormLabel from './FormLabel';
import {
  FormItem,
  FormError,
  FormInputStyled,
  FormInputWrapperStyled,
  FormCheckboxStyled,
} from './Form.style';

export const INPUT_TYPES = {
  TEXT: 'text',
  NUMBER: 'number',
  PHONE_NUMBER: 'phoneNumber',
  CHECKBOX: 'checkbox',
  SELECT: 'select',
  TEXT_AREA: 'textarea',
};

const FORM_LAYOUT = {
  labelCol: { xs: 24, sm: 24 },
  wrapperCol: { xs: 24, sm: 24 },
};


class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false,
    };
  }

  static propTypes = {
    refInput: func,
    formLayout: shape(),
    regular: any,
    type: string,
    inputTable: bool,
  }

  static defaultProps = {
    formLayout: FORM_LAYOUT,
    refInput: () => { },
  }

  renderTextInput = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors },
    form,
    ...props
  }) => {
    const {
      inputSize,
      label,
      formLayout,
      refInput,
      shouldRenderFeedback,
      type,
      disable,
      inputTable,
      ...rest
    } = props;

    const isTouched = getIn(touched, field.name);
    let errorMessage = '';
    let validateStatus = 'success';
    if (isTouched) {
      errorMessage = getIn(errors, field.name);
      if (errorMessage) {
        validateStatus = 'error';
      }
    }

    return (
      <FormInputWrapperStyled
        label={label}
        validateStatus={validateStatus}
        error={errorMessage}
        disabled={disable}
        inputTable={inputTable}
        {...formLayout}
      >
        <FormLabel label={label} />
        <FormInputStyled
          ref={this.input}
          {...field}
          {...rest}
          type={type}
          disabled={disable}
        />
        {errorMessage && (
          <FormError className="form-error">{errorMessage}</FormError>
        )}
      </FormInputWrapperStyled>
    );
  };

  renderNumberInput = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors },
    ...props
  }) => {
    const {
      label,
      formLayout,
      type,
      ...rest
    } = props;

    const isTouched = getIn(touched, field.name);
    let errorMessage = '';
    let validateStatus = 'success';

    if (isTouched) {
      errorMessage = getIn(errors, field.name);
      if (errorMessage) {
        validateStatus = 'error';
      }
    }

    return (
      <FormInputWrapperStyled
        label={label}
        validateStatus={validateStatus}
        error={errorMessage}
        {...formLayout}
      >
        <FormLabel label={label} />
        <FormInputStyled
          ref={this.input}
          {...field}
          {...rest}
          type={type}
        />
        {errorMessage && (
          <FormError className="form-error">{errorMessage}</FormError>
        )}
      </FormInputWrapperStyled>
    );
  };

  renderCheckbox = ({
    field, // { name, value, onChange, onBlur }
    form,
    ...props
  }) => {
    const {
      label,
      handleChange,
      formLayout,
      type,
      disable,
    } = props;
    const { touched, errors } = form;

    const isTouched = getIn(touched, field.name);
    let errorMessage = '';
    let validateStatus = 'success';

    if (isTouched) {
      errorMessage = getIn(errors, field.name);
      if (errorMessage) {
        validateStatus = 'error';
      }
    }

    const onChange = (e) => {
      if (typeof handleChange === 'function') {
        handleChange();
      }
      field.onChange(e);
    };

    return (
      <FormInputWrapperStyled
        label={label}
        validateStatus={validateStatus}
        error={errorMessage}
        disabled={disable}
        {...formLayout}
      >
        <FormCheckboxStyled>
          <input
            {...field}
            onChange={onChange}
            checked={_.get(form, `values.${field.name}`)}
            type={type}
            disabled={disable}
          />
          <span className="checkmark" />
          <span>{label}</span>
        </FormCheckboxStyled>
        {errorMessage && (
          <FormError className="form-error">{errorMessage}</FormError>
        )}
      </FormInputWrapperStyled>
    );
  };

  renderSelect = ({
    field, // { name, value, onChange, onBlur }
    form,
    formLayout,
    isDisabled,
    onInputChange,
    selectedValue,
    ...props
  }) => {
    const {
      disabled,
      options,
      label,
      inputTable,
      handleChange,
      isMultiSelect,
      ...rest
    } = props; // required

    const onChange = (value) => {
      form.setFieldValue(field.name, value);
      if (typeof handleChange === 'function') {
        handleChange(value, form);
      }
    };
    const { touched, errors } = form;
    const { value } = field;
    const isTouched = getIn(touched, field.name);
    let errorMessage = '';
    let validateStatus = 'success';

    if (isTouched) {
      errorMessage = getIn(errors, field.name);
      if (errorMessage) {
        validateStatus = 'error';
      }
    }

    return (
      <FormInputWrapperStyled
        label={label}
        validateStatus={validateStatus}
        error={errorMessage}
        disabled={isDisabled}
        inputTable={inputTable}
        {...formLayout}
        {...props}
      >
        <FormLabel label={label} />
        <Select
          {...field}
          options={options}
          classNamePrefix="select"
          onChange={onChange}
          disabled={disabled}
          ref={this.input}
          onInputChange={onInputChange}
          value={value}
          defaultValue={value}
          isMulti={!!isMultiSelect}
          {...rest}
        />
        {errorMessage && (
          <FormError className="form-error">{errorMessage}</FormError>
        )}
      </FormInputWrapperStyled>
    );
  };

  renderFormInput = (props) => {
    const { type } = props;
    switch (type) {
      case INPUT_TYPES.TEXT:
        return this.renderTextInput(props);
      case INPUT_TYPES.NUMBER:
        return this.renderNumberInput(props);
      case INPUT_TYPES.PHONE_NUMBER:
        return this.renderPhoneInput(props);
      case INPUT_TYPES.CHECKBOX:
        return this.renderCheckbox(props);
      case INPUT_TYPES.SELECT:
        return this.renderSelect(props);
      default:
        return this.renderTextInput(props);
    }
  };

  renderFormWrapper = (fieldProps) => {
    const { inputTable } = this.props;
    return (
      <FormItem inputTable={inputTable}>
        {this.renderFormInput(fieldProps)}
      </FormItem>
    );
  }

  render() {
    const { regular, ...rest } = this.props;
    if (regular) {
      return this.renderFormInput(this.props);
    }
    return (
      <Field
        {...rest}
        component={this.renderFormWrapper}
      />
    );
  }
}

export default FormInput;
