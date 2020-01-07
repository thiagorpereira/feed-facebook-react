import React,{ Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {

  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Thiago Pereira',
          avatar: 'https://avatars1.githubusercontent.com/u/26577467?s=460&v=4'
        },
        date: '07 Jan 2020',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        comments: [
          {
            id: 2,
            author: {
              name: 'Laura Rita',
              avatar: 'https://i.pravatar.cc/150?img=1',
            },
            date: '08 Jan 220',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Linus Torvalds',
          avatar: 'https://avatars0.githubusercontent.com/u/1024025?s=460&v=4'
        },
        date: '07 Jan 2020',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        comments: [
          {
            id: 4,
            author: {
              name: 'Rute Hurama',
              avatar: 'https://i.pravatar.cc/150?img=5',
            },
            date: '08 Jan 220',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
          },
          {
            id: 5,
            author: {
              name: 'Jeremy Camp',
              avatar: 'https://i.pravatar.cc/150?img=51',
            },
            date: '08 Jan 220',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
          },
        ]
      }
    ]
  }

  render() {
    const { posts } = this.state;
  
    return (
      <div className="postList">
        {posts.map(post => (
          <PostItem key={post.id} {...post}/>
        ))}
      </div>
    );
  }
}

export default PostList;