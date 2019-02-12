import React from 'react';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import InfiniteScroll from 'react-infinite-scroller';
import { List, message, Spin } from 'antd';

import Nav from "./NavWrapper";

import formatDate from "../utils/formatDate";
import trimText from "../utils/trimText";

import '../css/Search.scss';

class Search extends React.Component {
  state = {
    loading: false,
    hasMore: true,
  };

  componentDidMount() {
    const { location, search } = this.props;
    const values = queryString.parse(location.search);

    search(values.q);
  }

  componentDidUpdate(prevProps) {
    const { location, search, clearSearch } = this.props;
    const values = queryString.parse(location.search);

    if (location.search !== prevProps.location.search) {
      clearSearch();
      search(values.q);
    }
  }

  handleInfiniteOnLoad = () => {
    const { location, nextPageToken, pageInfo, search, searchResults } = this.props;
    const values = queryString.parse(location.search);

    this.setState({
      loading: true,
    });

    if (searchResults.length > pageInfo.totalResults) {
      message.warning('Infinite List loaded all');

      this.setState({
        hasMore: false,
        loading: false,
      });

      return;
    }

    search(values.q, nextPageToken).then(() => {
      this.setState({
        loading: false,
      });
    });
  };

  render() {
    const { loading, searchResults } = this.props;

    let dataArray = [];

    if (!isEmpty(searchResults)) {
      searchResults.map((video) => {
        const newObject = {
          videoId: video.id.videoId,
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.medium.url,
          channelTitle: video.snippet.channelTitle,
          description: video.snippet.description,
          publishedAt: video.snippet.publishedAt,
        };

        return dataArray.push(newObject);
      });
    }

    if (loading && !this.state.loading) {
      return (
        <Nav>
          <div className="loader-container">
            <Spin size="large"/>
          </div>
        </Nav>
      );
    }

    return (
      <Nav>
        <div className="infinite-container">
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={this.handleInfiniteOnLoad}
            hasMore={!this.state.loading && this.state.hasMore}
            useWindow={true}
          >
            <List
              className="search-list"
              itemLayout="horizontal"
              dataSource={dataArray}
              span={24}
              renderItem={item => (
                <Link to={`/videos/${item.videoId}`} key={item.videoId}>
                  <List.Item>
                    <List.Item.Meta
                      avatar={<img src={item.thumbnail} className="list-thumbnail" alt="thumbnail"/>}
                      title={item.title}
                      description={
                        <span>
                          {item.channelTitle}
                          <p>Published on {formatDate(item.publishedAt)}</p>
                          <p>{trimText(item.description, 100)}</p>
                        </span>
                      }
                    />
                  </List.Item>
                </Link>
              )}
            >


              {this.state.loading && this.state.hasMore && (
                <div className="loader-container">
                  <Spin/>
                </div>
              )}
            </List>
          </InfiniteScroll>
        </div>
      </Nav>
    );
  }
}

export default Search;
