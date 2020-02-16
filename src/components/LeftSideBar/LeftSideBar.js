import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { LeftSideBarWrap } from './LeftSideBar.style';
import { ROLE_TYPE } from '../../utils/enums';

const { Sider } = Layout;

class LeftSideBar extends Component {
  static propType = {
    userRole: PropTypes.string,
    logout: PropTypes.func,
  }

  handleLogout = () => {
    const { logout } = this.props;
    logout();
  }

  render() {
    const { userRole, history } = this.props;
    const { location } = history;
    return (
      <LeftSideBarWrap>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider>
            <Menu theme="dark" defaultSelectedKeys={[location.pathname]} mode="inline">
              <Menu.Item key="/loans" >
                <Link to="/loans">
                  <Icon type="container" />
                  <span>Loans</span>
                </Link>
              </Menu.Item>

              {userRole === ROLE_TYPE.ADMIN 
                && (
                <Menu.Item key="/loan-approves">
                  <Link to="/loan-approves">
                    <Icon type="hdd" />
                    <span>Loan Approves</span>
                  </Link>
                </Menu.Item>
              )}

              <Menu.Item key="/repayments">
                <Link to="/repayments">
                  <Icon type="snippets" />
                  <span>Repayments</span>
                </Link>
              </Menu.Item>

              <Menu.Item key="4" onClick={this.handleLogout}>
                <a>
                  <Icon type="logout" />
                  <span>Logout</span>
                </a>
              </Menu.Item>
            </Menu>
          </Sider>
        </Layout>
      </LeftSideBarWrap>
    );
  }
}

export default LeftSideBar;