import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { List, Row } from 'antd';

import trimText from '../utils/trimText';
import formatNumber from '../utils/numberFormat';

import '../css/CategoryVideoList.scss';

class CategoryVideoList extends React.Component {
  componentDidMount() {
    const { fetchCategoryVideos, categoryId } = this.props;

    fetchCategoryVideos(categoryId, 20);
  }

  render() {
    const { categoryId, categoryVideos } = this.props;
    const data = [];
    const categoryVids = categoryVideos[`${categoryId}_videos`];

    if (!isEmpty(categoryVids)) {
      const newVideoArray = categoryVids.items.slice(0, 6);

      newVideoArray.map((video) => {
        const newObject = {
          videoId: video.id,
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.medium.url,
          channelTitle: video.snippet.channelTitle,
          viewCount: video.statistics.viewCount,
        };

        return data.push(newObject);
      });
    }

    return (
      <Row gutter={16} className="category-row">
        <List
          grid={{
            gutter: 8, xs: 1, sm: 2, md: 3, lg: 4, xl: 6, xxl: 6,
          }}
          dataSource={data}
          renderItem={item => (
            <Link to={`/videos/${item.videoId}`} key={item.videoId}>
              <List.Item>
                <div className="video-item">
                  <img src={item.thumbnail} alt="thumbnail"/>
                  <h4>{trimText(item.title, 50)}</h4>

                  <p>{item.channelTitle}</p>
                  <p>{formatNumber(item.viewCount)} views</p>
                </div>
              </List.Item>
            </Link>
          )}
        />
      </Row>
    );
  }
}

export default CategoryVideoList;
