import styled, { css } from 'styled-components';
import { LoginButton } from '../LoginPage/LoginPage.style';

export const LoanApproveWrap = styled.div`
  width: 100%;
  height: max-content;
  margin: 2em;
  padding: 2em;
  border: 1px solid #ccc;
  border-radius: 10px;'
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
