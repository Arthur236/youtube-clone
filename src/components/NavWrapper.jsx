import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Avatar } from 'antd';

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
  };

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
                <Icon type="youtube"/>
                <span><Link to="/" className="side-nav-link">YouTube</Link></span>
              </Menu.Item>
            </Menu>
          </div>

          <Menu theme="dark" mode="inline" className="custom-side-menu">
            <Menu.Item key="1">
              <Icon type="home"/>
              <span><Link to="/" className="side-nav-link">Home</Link></span>
            </Menu.Item>

            <SubMenu key="sub1" title={<span><Icon type="picture"/><span>Categories</span></span>}>
              <Menu.Item key="2"><Link to="/" className="side-nav-link">Music</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/" className="side-nav-link">Gaming</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/" className="side-nav-link">Science & Technology</Link></Menu.Item>
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

            <span className="nav-avatar">
              <Avatar
                src="/images/avatar-1.jpg"
                alt="avatar"
              />
            </span>
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
