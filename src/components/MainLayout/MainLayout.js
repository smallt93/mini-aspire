import React, { PureComponent } from 'react';
import LeftSideBar from '../LeftSideBar';
import { PrimaryLayout } from './MainLayout.style';

export default class MainLayout extends PureComponent {
  static propTypes = {};

  render() {
    return (
      <PrimaryLayout>
        <LeftSideBar />
        {this.props.children}
      </PrimaryLayout>
    );
  }
}
