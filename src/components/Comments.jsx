import React from 'react';
import moment from 'moment';
import {
  Comment, Icon, Input, Tooltip, Avatar,
} from 'antd';

import '../css/Comments.scss';

const { TextArea } = Input;

class Comments extends React.Component {
  state = {
    likes: 0,
    dislikes: 0,
    action: null,
  };

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  };

  render() {
    const { likes, dislikes, action } = this.state;

    const actions = [
      <span>
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === 'liked' ? 'filled' : 'outlined'}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>
          {likes}
        </span>
      </span>,
      <span>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === 'disliked' ? 'filled' : 'outlined'}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>
          {dislikes}
        </span>
      </span>,
      <span>Reply to</span>,
    ];

    const displayComment = () => {
      return (
        <Comment
          actions={actions}
          author={<a>Some User</a>}
          avatar={(
            <Avatar
              src="/images/avatar-1.jpg"
              alt="avatar"
            />
          )}
          content={(
            <p>
              Now is the winter of our discontent
              Made glorious summer by this sun of York;
              And all the clouds that lour'd upon our house
              In the deep bosom of the ocean buried.
              Now are our brows bound with victorious wreaths.
            </p>
          )}
          datetime={(
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          )}
        />
      );
    };

    return (
      <React.Fragment>
        <div className="comment-input-section">
          <Avatar
            src="/images/avatar-1.jpg"
            alt="avatar"
          />
          <TextArea className="comment-input" placeholder="Add a public comment..."/>
        </div>

        <Comment
          actions={actions}
          author={<a>Some User</a>}
          avatar={(
            <Avatar
              src="/images/avatar-1.jpg"
              alt="avatar"
            />
          )}
          content={(
            <p>The actual comments that the user had made would go here.</p>
          )}
          datetime={(
            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          )}
        >

          <Comment
            actions={actions}
            author={<a>Another User</a>}
            avatar={(
              <Avatar
                src="/images/avatar-1.jpg"
                alt="avatar"
              />
            )}
            content={(
              <p>This would be a reply to the comment.</p>
            )}
            datetime={(
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            )}
          />

        </Comment>

        { displayComment() }
        { displayComment() }
        { displayComment() }

        <hr/>

      </React.Fragment>
    );
  }
}

export default Comments;
