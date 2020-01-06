import React from 'react';

function PostHeader(){
  return(
    <div className="post-header">    
      <img className="avatar" src="" alt="Avatar"/>
      <div className="info">
        <span>Thiago Pereira</span>
        <p>04 jun 2019</p>
      </div>
    </div>
  );
}

function PostComments(){
  return (
    <div className="post-comments">
      <div className="divider"/>
      <div className="comment">
        <img src="https://i.pravatar.cc/150?img=1" alt=""/>
        <p>
          <span>James</span> don't do it
        </p>
      </div>
    </div>
  )
}

function PostItem(){
  return(
    <div className="post">
      <PostHeader/>
      <p>some publish hereee</p>
      <PostComments/>
    </div>
  )
}

export default PostItem;