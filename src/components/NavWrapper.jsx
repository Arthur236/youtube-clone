import React from 'react';
import { Layout, Menu, Icon } from 'antd';

import '../css/NavWrapper.scss';

const { Content, Footer, Header, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class NavWrapper extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo">
            <Menu theme="dark" mode="inline" className="custom-banner">
              <Menu.Item key="1">
                <Icon type="youtube" />
                <span>YouTube</span>
              </Menu.Item>
            </Menu>
          </div>

          <Menu theme="dark" mode="inline" className="custom-side-menu">
            <Menu.Item key="1">
              <Icon type="home" />
              <span>Home</span>
            </Menu.Item>

            <SubMenu key="sub1" title={<span><Icon type="picture" /><span>Categories</span></span>}>
              <Menu.Item key="2">Music</Menu.Item>
              <Menu.Item key="3">Gaming</Menu.Item>
              <Menu.Item key="4">Science & Technology</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        <Layout>
          <Header>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />

            <Icon type='youtube' className='header-logo'/> &nbsp;
            <span className='header-logo'>YouTube</span>
          </Header>

          <Content>
            {this.props.children}
          </Content>

          <Footer style={{ textAlign: 'center' }}>
            YouTube Clone ©2019 Created by Arthur Thungu
          </Footer>

        </Layout>
      </Layout>
    );
  }
}

export default NavWrapper;
