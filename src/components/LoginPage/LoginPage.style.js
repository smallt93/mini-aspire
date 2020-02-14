import styled, { css, keyframes } from 'styled-components';

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
export const LoginPageWrap = styled.div``;

export const LoginMessage = styled.div``;

export const LoginItemWrap = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${({ noFlex }) => noFlex && css`
    display: block;
    height: auto;
  `}

  .react-tabs__tab-list {
    display: flex;
    margin-bottom: 1em;
    cursor: pointer;
    .react-tabs__tab {
      flex: 1;
      text-align: center;
      padding: .75em 2em;
      border: 1px solid #ccc;
      &:first-child {
        border-right: none;
        border-radius: 5px 0px 0px 5px;
      }
      &:last-child {
        border-radius: 0px 5px 5px 0px;
      }
      &:hover {
        color: #fff;
        background-color: #02b358;
        border-color: #02b358;
      }
    }
    .react-tabs__tab--selected {
      color: #fff;
      background-color: #00d366;
      border-color:#00d366;
    }
  }
`;

export const LoginItem = styled.div`
  padding: 2em;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const LoginTitle = styled.div`
  margin: 10px 0px 40px;
  text-align: center;
  h1 {
    font-size: 28px;
    font-family: 'MontserratBold';
    line-height: 35px;
    color: ${props => props.theme.colorStyled.ColorPrimary};
    margin: 20px 0px 5px;
  }
  p {
    font-size: 16px;
    line-height: normal;
    font-family: 'MontserratLight';
    color: #7f7f7f;
  }
  @media (max-width: 480px) {
    text-align: center;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  min-height: 35px;
  padding: 10px 130px;
  border-radius: 8.5px;
  color: ${props => props.theme.colorStyled.ColorWhite};
  border: 1px solid ${props => props.theme.colorStyled.ColorBgDefault};
  background-color: ${props => props.theme.colorStyled.ColorBgDefault};
  box-shadow: 0px 4px 6.5px 0 #ff9e1630;
  font-size: 15px;
  margin-bottom: 15px;
  outline: none;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colorStyled.ColorWhite};
    border-color: #a3a0a0;
    background-color: #a3a0a0;
    box-shadow: 0 0 10.5px 0 rgba(0, 0, 0, 0.06);
  }
  ${({ primary }) => primary && css`
    color: ${props => props.theme.colorStyled.ColorPrimary};
    border-color: ${props => props.theme.colorStyled.ColorWhite};
    background-color: ${props => props.theme.colorStyled.ColorWhite};
    box-shadow: 0 0 10.5px 0 rgba(0, 0, 0, 0.06);
  `}
  ${({ register }) => register && css`
    color: ${props => props.theme.colorStyled.ColorWhite};
    border-color: ${props => props.theme.colorStyled.ColorMing};
    background-color: ${props => props.theme.colorStyled.ColorMing};
    box-shadow: 0 0 10.5px 0 rgba(0, 0, 0, 0.06);
  `}
  @media (max-width: 1440px) {
    padding: 10px 60px;
  }
  @media (max-width: 480px) {
    padding: 10px 20px;
  }
`;

export const LoginAction = styled.div``;
