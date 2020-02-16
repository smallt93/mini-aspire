import styled, { css } from 'styled-components';
import { LoginButton } from '../LoginPage/LoginPage.style';

export const LoanApproveWrap = styled.div`
  height: max-content;
  margin: 2em;
  width: 100%;
`;

export const RepaymentWrap = styled.div`
  height: max-content;
  padding: 2em;
  .loan-select-container {
    margin-bottom: 15px;
  }
`;

export const LoanNoDataMessage = styled.div`
  width: 100%;
  font-size: 1.2em;
  text-align: center;
`;

export const LoanApproveBlockWrap = styled.div`
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px -1px #ccc;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const LoanApproveContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  span {
    margin-right: 10px;
    font-weight: bold;
  }
  ${({ redColor }) => redColor && css`
    > div {
      color: red;
    }
  `}
`;

export const LoanApproveItem = styled.div``;

export const LoanApproveAction = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
`;

export const LoanButton = styled(LoginButton)`
  max-width: 150px;
  padding: 10px 20px !important;
  ${({ dismiss }) => dismiss && css`
    color: ${props => props.theme.colorStyled.ColorWhite};
    border-color: #a3a0a0;
    background-color: #a3a0a0;
    box-shadow: 0 0 10.5px 0 rgba(0, 0, 0, 0.06);
  `}
`;

export const LoanConfirmPopupWrap = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 2em;
  background-color: #fff;
  box-shadow: 0px 0px 6px -1px #ccc;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const LoanConfirmContent = styled.div`
  font-size: 1.2em;
`;

export const LoanConfirmAction = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1em;
  button {
    margin-right: 10px;
    &:last-child {
      margin-right: 0px;
    }
  }
`;

export const OverlayWrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 1;
  ${({ overlay }) => overlay && css`
    background-color: #00000069;
  `};
`;

export const LoanRepayMessage = styled.div`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 15px;
  background-color: #b9e0bf;
  color: #0e650e;
`;