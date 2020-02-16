import styled, { css, keyframes } from 'styled-components';

const formElementCss = css`
  border: 1px solid #dbdbdb;
  color: #333;
  position: relative;
  outline: none;
  width: 100%;
  font-size: ${props => props.theme.fontSize.DefaultFontSize};
  padding: 5px 10px;
  height: 38px;
  transition: border 0.3s;
  background: #fff;
  border-radius: 3px;
  line-height: 1.8;
  z-index: 2;
  &:focus {
    outline: none;
    border-bottom: 1.5px solid ${props => props.theme.colorStyled.ColorBgDefault};
  }
`;

const BounceInput = keyframes`
 0% {
    transform: translateX(0px);
    timing-function: ease-in;
  }
  37% {
    transform: translateX(14px);
    timing-function: ease-out;
  }
  55% {
    transform: translateX(-14px);
    timing-function: ease-in;
  }
  73% {
    transform: translateX(14px);
    timing-function: ease-out;
  }
  82% {
    transform: translateX(-14px);
    timing-function: ease-in;
  }
  91% {
    transform: translateX(14px);
    timing-function: ease-out;
  }
  96% {
    transform: translateX(-14px);
    timing-function: ease-in;
  }
  100% {
    transform: translateX(0px);
    timing-function: ease-in;
  }
`;

export const FormInputStyled = styled.input.attrs({
  className: 'input-text',
})`
  ${formElementCss};
  cursor: text;

  ${({ isInInviteForm }) => isInInviteForm && css`
    padding: 5px 0px;
    z-index: 0;
  `}
`;

export const FormCheckboxStyled = styled.label`
  margin-bottom: 5px;
  margin: 5px 0px 10px;
  display: flex;
  align-items: center;
  position: relative;
  input {
    margin-right: 10px;
  }
  span {
    font-size: ${props => props.theme.fontSize.DefaultFontSize};;
    margin-left: 25px;
  }
  & > .checkmark {
    position: absolute;
    top: 0px;
    left: -25px;
    height: 15px;
    width: 15px;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #d3d3d3;
    &:after {
      content: '';
      position: absolute;
      display: none;
      width: 100%;
      height: 100%;
    }
  }
  & > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    &:checked {
      & ~ .checkmark {
        height: 15px;
        width: 15px;
        border-color: #ff9e16;
        &:after {
          display: block;
          background-color: #ff9e16;
        }
      }
    }
    &:hover {
      & > input {
        & ~ .checkmark {
          background-color: #ccc;
        }
      }
    }
  }
`;

export const FormSelectStyled = styled.select.attrs({
  className: 'input-select',
})`
  ${formElementCss};
`;

export const FormTextAreaStyled = styled.textarea.attrs({
  className: 'text-area',
})`
  ${formElementCss};
  height: unset;
`;

export const FormInputErrorMessage = styled.div`
  color: #ad4444;
  width: 100%;
  font-size: ${props => props.theme.fontSize.DefaultFontSize};;
  text-align: left;
  margin-top: 5px;
`;

export const FormInputWrapperStyled = styled.div`
  margin-bottom: 10px;
  width: 100%;
  position: relative;
  background: transparent;
  .select__option {
    border-color: #dbdbdb;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    font-size: ${props => props.theme.fontSize.DefaultFontSize};;
  }
  .select__menu {
    z-index: 3;
  }
  .select__control {
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #dbdbdb;
    padding: 5px 10px;
    min-height: 28px;
    &:hover {
      border-color: #dbdbdb;
    }
  }
  .select__value-container {
    min-width: 150px;
    font-size: ${props => props.theme.fontSize.DefaultFontSize};;
    padding: 0px;
  }
  .select__control--is-focused {
    box-shadow: none;
    border-bottom: 1.5px solid ${props => props.theme.colorStyled.ColorBgDefault}; !important;
    .select__indicator {
      color: ${props => props.theme.colorStyled.ColorBgDefault}; !important;
    }
  }
  .select__option--is-focused {
    background-color: #02b358;
    color: #fff;
    &:active {
      background-color: #02b358 !important;
    }
  }
  .select__option--is-selected {
    background-color: ${props => props.theme.colorStyled.ColorBgDefault}; !important;
    color: #fff;
    &:active {
      background-color: ${props => props.theme.colorStyled.ColorBgDefault}; !important;
    }
  }
  .select__indicators {
    height: 28px;
  }
  .select__indicator-separator {
    display: none;
  }

  /* datetime picker */
  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    background-image: url('/images/icon-v2/icon-calendar-input.svg');
    width: 100%;
    background-size: 1em;
    background-repeat: no-repeat;
    background-position: center right;
    input {
      border: 1px solid #dbdbdb;
      color: #333;
      position: relative;
      outline: none;
      width: 100%;
      font-size: ${props => props.theme.fontSize.DefaultFontSize};;
      padding: 5px 10px;
      height: 38px;
      transition: border 0.3s;
      background: #fff;
      border-radius: 3px;
      line-height: 1.8;
      z-index: 2;
      cursor: text;
    }
  }
  .react-datepicker-ignore-onclickoutside {
    border-bottom: 1.5px solid #02b358 !important;
  }
  .react-datepicker-popper {
    z-index: 3;
  }

  .react-tel-input{
    border: none;
    border-bottom: 1px solid #dbdbdb;
    color: #333;
    position: relative;
    outline: none;
    width: 100%;
    font-size: ${props => props.theme.fontSize.DefaultFontSize};;
    padding: 5px 10px;
    height: 38px;
    transition: border 0.3s;
    background: transparent;
    line-height: 1.8;
    cursor: text;
    input {
      border: none;
      background: transparent;
      height: auto;
    }
    &:focus {
      border-bottom: 1.5px solid #02b358 !important;
    }
    .flag-dropdown {
      border: none;
      background: transparent;
    }
  }

  ${({ error }) => error && css`
      label,
      .select__indicator {
        color: #E20002 !important;
        i {
          color: #E20002 !important;
        }
      }
      input,
      .select__control,
      .react-tel-input {
        animation-name: ${BounceInput};
        animation-duration: 300ms;
        animation-delay: 250ms;
        border-bottom: 1.5px solid #E20002 !important;
      }
      .select__input,
      .react-tel-input {
        input {
          border-bottom: none !important;
        }
      }

  `}
  ${({ disabled }) => disabled && css`
    pointer-events: none;
    opacity: 0.4;
  `}
  ${({ inputTable }) => inputTable && css`
    margin-bottom: 0px;
    input {
      border-bottom: none;
      border: 1px solid transparent;
      height: auto;
      width: calc(100% - 8px);
      padding: 5px 3px;
      &:focus {
        border: 1px solid #eee;
        border-radius: 3px;
        background: #fff;
      }
    }
    .select__control {
      border-bottom: none;
      padding: 5px 3px;
      background: transparent;
    }
    .select__value-container {
      min-width: 50px;
    }
    .select__control--is-focused {
      border: 1px solid #eee !important;
      border-radius: 3px;
      background: #fff;
      .select__indicator {
        color: #ccc !important;
      }
    }
    .select__indicators {
      position: absolute;
      right: 0px;
      top: 5px;
    }
  `}
  ${({ customize }) => customize && css`
    label {
      top: -17px;
      left: 0px;
      color: #02b358;
    }
  `};

  ${({ isInInviteForm }) => isInInviteForm && css`
    margin-bottom: 0px;

    :focus {
      .input-text {
        margin-bottom: 0px;
      }

      .input-text:forcus {
        border-width: 1px;
      }
    }
  `}
`;

export const FormDateWrapperStyled = styled.div`
  margin-bottom: 10px;
  width: 100%;
  input {
    width: 100%;
    height: 32px;
    font-size: 12px;
  }
`;

export const FormGroupRadioStyled = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  & > .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: #fff;
    border-radius: 50%;
    border: 1px solid #d3d3d3;
    &:after {
      content: '';
      position: absolute;
      display: none;
      top: 2px;
      left: 2px;
      width: 10px;
      height: 10px;
      border-radius: 100%;
    }
  }
  & > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    &:checked {
      & ~ .checkmark {
        height: 16px;
        width: 16px;
        &:after {
          display: block;
          background-color: #004e8c;
        }
      }
    }
    &:hover {
      & > input {
        & ~ .checkmark {
          background-color: #ccc;
        }
      }
    }
  }
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const FormGroupRadioInputStyled = styled.input``;
export const FormGroupCheckMarkStyled = styled.span``;

export const FormItem = styled.div.attrs({
  className: 'form-items',
})`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  position: relative;
  transition: all 300ms ease;
  ${({ haveValue }) => haveValue
    && css`
      label {
        top: -17px;
        left: 0px;
        color: #02b358;
        display: flex;
        align-items: center;
      }
      i {
        color: #02b358 !important;
      }
    `}
  ${({ inputTable }) => inputTable && css`
    margin-bottom: 0px;
    width: 100%;
  `}

  ${({ isInInviteForm }) => isInInviteForm && css`
    margin-bottom: 0px;
    width: 100%;
  `}

  .chalktalk-icon-eyes {
    position: absolute;
    z-index: 3;
    right: 0px;
    top: 10px;
    font-size: 22px;
    cursor: pointer;
    color: #000 !important;
  }
`;

export const FormError = styled.p`
  margin-top: 5px !important;
  font-size: ${props => props.theme.fontSize.DefaultFontSize} !important;
  color: #E20002 !important;

  ${({ center }) => center
    && css`
      text-align: center;
    `};
`;

export const FormLabelItem = styled.label`
  color: #65605e;
  transition: all 300ms ease;
  white-space: nowrap;
  display: flex;
  align-items: center;
  z-index: 1;
  font-size: ${props => props.theme.fontSize.DefaultFontSize};
  margin-bottom: 10px;
  i {
    margin-left: 10px;
    font-size: 18px;
    color: #ccc;
  }
  ${({ required }) => required
    && css`
      color: #df6869;
    `};
  .extraClass {
    color: #000;
    background-color: #fff;
    white-space: normal;
    box-shadow: 0px 0px 4px -3px #d9d9d9;
    &:after {
      border-right-color: #fff !important;
    }
  }
`;

export const FormRequired = styled.div`
  margin-left: 5px;
  color: #df6869;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: baseline;
  > div {
    width: calc(50% - 15px);
    &:first-child {
      margin-right: 15px;
    }
    &:last-child {
      margin-left: 15px;
    }
  }
  > label {
    width: 15%;
  }
  ${({ textCenter }) => textCenter && css`
    align-items: center;
  `}
  @media (max-width: 640px) {
    flex-wrap: wrap;
    > div {
      width: 100%;
      &:first-child {
        margin-right: 0px;
      }
      &:last-child {
        margin-left: 0px;
      }
    }
  }
`;

export const FormValidateWrapper = styled.div`
  margin: 25px 0px 30px;
`;

export const FormValidateItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  p {
    font-size: 14px;
  }
  i {
    width: 25px;
    height: 25px;
    margin-right: 10px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
  .icon-chalktalk-delete {
    font-size: 10px;
    font-weight: bold;
    background-color: #d6d6d6;
  }
  .icon-checkmark {
    font-size: 15px;
    background-color: #fec631;
  }
`;
