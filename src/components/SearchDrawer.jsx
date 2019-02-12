import React from 'react';
import { withRouter } from 'react-router'
import { Drawer, Icon, Input } from 'antd';

const Search = Input.Search;

class SearchDrawer extends React.Component {
  state = {
    visible: false
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onSearch = (value) => {
    this.props.history.push(`/search?q=${value}`);
  };

  render() {
    return (
      <React.Fragment>
        <Icon
          className="search-icon"
          type="search"
          onClick={this.showDrawer}
        />

        <Drawer
          placement="top"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
          className="search-drawer"
        >
          <Search
            placeholder="Search..."
            onSearch={this.onSearch}
            enterButton
            className="search-input"
          />
        </Drawer>
      </React.Fragment>
    );
  }
}

export default withRouter(SearchDrawer);