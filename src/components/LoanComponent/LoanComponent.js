import React, { Component } from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import LoanList from '../../containers/LoanList';
import LoanForm from '../../containers/LoanForm';
import {
  LoanContainerWrap,
} from './LoanComponent.style';

class LoanComponent extends Component {
  render() {
    return (
      <LoanContainerWrap>
        <Tabs>
          <TabList>
            <Tab>Loan List</Tab>
            <Tab>Loan Form</Tab>
          </TabList>

          <TabPanel>
            <LoanList />
          </TabPanel>
          <TabPanel>
            <LoanForm />
          </TabPanel>
        </Tabs>
      </LoanContainerWrap>
    );
  }
}

export default LoanComponent;