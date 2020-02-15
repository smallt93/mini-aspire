import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { LeftSideBarWrap } from './LeftSideBar.style';
import { ROLE_TYPE } from '../../utils/enums';

const { Sider } = Layout;

class LeftSideBar extends Component {
  render() {
    const { userRole } = this.props;
    return (
      <LeftSideBarWrap>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" >
                <Link to="/loans">
                  <Icon type="container" />
                  <span>Loans</span>
                </Link>
              </Menu.Item>

              {userRole === ROLE_TYPE.ADMIN 
                && (
                <Menu.Item key="2">
                  <Link to="/loan-approves">
                    <Icon type="hdd" />
                    <span>Loan Approves</span>
                  </Link>
                </Menu.Item>
              )}

              <Menu.Item key="3">
                <Link to="/payments">
                  <Icon type="snippets" />
                  <span>Repayments</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
        </Layout>
      </LeftSideBarWrap>
    );
  }
}

export default LeftSideBar;