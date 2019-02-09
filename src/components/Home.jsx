import React from "react";
import { Row, Col } from 'antd';

import Nav from './NavWrapper';
import Video from './Video';
import Playlist from '../containers/Playlist';

const Home = () => {
  return (
    <Nav>
      <Row gutter={24}>
        <Col xs={24} sm={24} md={24} lg={18} xl={18}>
          <Video/>
        </Col>

        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
          <Playlist/>
        </Col>
      </Row>
    </Nav>
  );
};

export default Home;
