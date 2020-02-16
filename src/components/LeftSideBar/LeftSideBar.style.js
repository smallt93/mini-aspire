import styled from 'styled-components';

export const LeftSideBarWrap = styled.div`
  border-right: 1px solid #ccc;
  height: 100vh;
  background-color: #fff;
  .ant-menu-item {
    cursor: pointer;
    border-bottom: 1px solid #ccc;
    padding-left: 0px !important;
    a, div {
      padding: 15px 10px 15px 20px;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: black;
      i {
        margin-right: 5px;
      }
    }
    &:hover {
      background-color: #37653e;
      border-color: #37653e;
      a, div {
        color: white;
      }
    }
  }
  .ant-menu-item-selected {
    background-color: #4a8053;
    border-color: #4a8053;
    a {
      color: white;
    }
  }
`;