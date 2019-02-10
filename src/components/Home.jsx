import React from "react";

import Nav from './NavWrapper';
import CategoryVideoList from '../containers/CategoryVideoList';

class Home extends React.Component {
  render() {
    return (
      <Nav>
        <h3>Music</h3>
        <CategoryVideoList categoryId={'10'} categoryName={'music'} />

        <hr/>

        <h3>Gaming</h3>
        <CategoryVideoList categoryId={'20'} categoryName={'gaming'} />

        <hr/>

        <h3>Science & Technology</h3>
        <CategoryVideoList categoryId={'28'} categoryName={'science'} />
      </Nav>
    );
  }
}

export default Home;
