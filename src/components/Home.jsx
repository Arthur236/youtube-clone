import React from "react";

import Nav from './NavWrapper';
import CategoryVideoList from '../containers/CategoryVideoList';

class Home extends React.Component {
  render() {
    return (
      <Nav>
        <h3>Music</h3>
        <CategoryVideoList categoryId={'10'} />

        <hr/>

        <h3>Gaming</h3>
        <CategoryVideoList categoryId={'20'} />

        <hr/>

        <h3>Science & Technology</h3>
        <CategoryVideoList categoryId={'28'} />
      </Nav>
    );
  }
}

export default Home;
