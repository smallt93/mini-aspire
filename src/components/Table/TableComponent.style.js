/* eslint-disable eqeqeq */
/* eslint-disable no-nested-ternary */
import styled, { css } from 'styled-components';

export const TableHeadWrapper = styled.div`
  display: flex;
  border: none;
  color: ${props => props.theme.colorStyled.ColorPrimary};
  background-color: ${props => props.theme.colorStyled.ColorWhite};
  border-radius: .5em;
  margin-bottom: 1em;
  font-weight: 700;
  line-height: 1.4;
  min-height: 35px;
  padding: .5em 1em;
  border: 1px solid #ccc;
`;

export const TableContainerWrap = styled.div`
  width: 100%;
`;

export const TableContentWrapper = styled.div`
  border: 1px solid #ccc;
  color: #263035;
  line-height: 1.4;
  padding: .5em 1em;
  border-radius: .5em;
  background-color: ${props => props.theme.colorStyled.ColorWhite};
`;

export const TableContentItem = styled.div`
  display: flex;
  flex: 1;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
  min-height: 3em;
  background-color: ${props => props.theme.colorStyled.ColorWhite};
  &:hover {
    background-color: #f7f7f7 !important;
    border-radius: .325em;
  }
`;

export const TableHead = styled.div`
  flex: 1;
  padding: 0 5px;
  padding: 8px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  transition: all 300ms ease;
  color: ${props => props.theme.colorStyled.ColorHeaderTable};
  ${({ size }) => size
    && css`
      flex: 0 0 ${size}px;
      @media (max-width: 480px) {
        flex: 0 0 60px;
      }
    `};
  ${({ percent }) => percent
    && css`
      flex: 0 0 ${percent}%;
    `};
  ${({ textCenter }) => textCenter
    && css`
      justify-content: center;
      text-align: center;
    `};
  ${({ textRight }) => textRight
    && css`
      justify-content: flex-end;
    `};
  ${({ borderRight }) => borderRight
    && css`
      border-right: 1px solid ${props => props.theme.colorStyled.ColorBorderInput};
      &:last-child {
        border-right: none;
      }
    `};
  ${({ borderLeft }) => borderLeft
    && css`
      border-left: 1px solid ${props => props.theme.colorStyled.ColorBorderInput};
    `};
  ${({ borderBottom }) => borderBottom && css`
    border-bottom: 1px solid #091e4214;
  `};
`;

export const TableRow = styled(TableHead)`
  color: ${props => props.theme.colorStyled.ColorPrimary};
  font-style: ${props => (props.italic ? 'italic' : 'initial')};
  ${({ textUppercase }) => textUppercase && css`
    text-transform: uppercase;
  `}
  ${({ approved }) => approved && css`
    color: ${props => props.theme.colorStyled.ColorSuccessN};
  `}
  ${({ dismiss }) => dismiss && css`
    color: ${props => props.theme.colorStyled.ColorRedDel};
  `}
  ${({ paid }) => paid && css`
    color: ${props => props.theme.colorStyled.ColorYellowCheckbox};
  `}
  ${({ actionType }) => actionType && css`
    cursor: pointer;
    &:hover {
      opacity: .7;
    }
  `}
`;

export const TableCheckboxLabel = styled.label`
  position: relative;
`;

export const TableCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  &:checked {
    & ~ .checkmark {
      height: 1em;
      width: 1em;
      border-color: ${props => props.theme.colorStyled.ColorPrimaryBlue};
      &:after {
        display: block;
        background-color: ${props => props.theme.colorStyled.ColorPrimaryBlue};
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
`;

export const TableCheckMark = styled.span`
  position: absolute;
  top: -.5em;
  height: 1em;
  width: 1em;
  background-color: ${props => props.theme.colorStyled.ColorWhite};
  border-radius: .325em;
  border: 1px solid #d3d3d3;
  cursor: pointer;
  &:after {
    content: '';
    position: absolute;
    display: none;
    width: 100%;
    height: 100%;
  }
`;