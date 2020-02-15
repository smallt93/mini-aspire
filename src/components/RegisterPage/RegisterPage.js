import React, { PureComponent } from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';
import UserRegisterForm from '../../containers/RegisterPage/UserRegister';
import AdminRegisterForm from '../../containers/RegisterPage/AdminRegister';
import { LoginItemWrap } from '../LoginPage/LoginPage.style';

export default class RegisterPage extends PureComponent {
  render() {
    return (
      <LoginItemWrap>
        <Tabs>
          <TabList>
            <Tab>User</Tab>
            <Tab>Admin</Tab>
          </TabList>

          <TabPanel>
            <UserRegisterForm />
          </TabPanel>
          <TabPanel>
            <AdminRegisterForm />
          </TabPanel>
        </Tabs>
      </LoginItemWrap>
    );
  }
}
