import styled from 'styled-components';
import { LoginButton } from '../LoginPage/LoginPage.style';

export const LoansWrap = styled.div`
  padding: 2em;
`;

export const LoansItem = styled.div`
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
`;

export const SubmitAction = styled.div`
  width: 100%;
  text-align: center;
`;

export const SubmitButton = styled(LoginButton)`
  max-width: 200px;
`;

export const LoanMessage = styled.div`
  width: 100%;
  text-align: center;
  padding: 2em;
  font-size: 1.5em;
  background-color: ${props => props.theme.colorStyled.ColorSuccess};
  color: white;
  border-radius: 10px;
`;