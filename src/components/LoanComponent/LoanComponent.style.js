import styled from 'styled-components';

export const LoanContainerWrap = styled.div`
  margin: 2em;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  overflow: hidden;

  .react-tabs__tab-list {
    display: flex;
    border-bottom: 1px solid #ccc;
    .react-tabs__tab {
      padding: 10px 15px;
      border-right: 1px solid #ccc;
    }
    .react-tabs__tab--selected {
      background-color: #4a8053;
      color: white;
      border-color: #4a8053;

    }
  }
`;