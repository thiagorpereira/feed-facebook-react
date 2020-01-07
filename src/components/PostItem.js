import React from 'react';

function PostHeader(){
  return(
    <div className="post-header">    
      <img className="avatar" src="https://i.pravatar.cc/150?img=1" alt="Avatar"/>
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
        <img className="avatar-comment" src="https://i.pravatar.cc/150?img=1" alt="Avatar"/>
        <p>
          <span>James</span> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  )
}

function PostItem(){
  return(
    <>
    <div className="post">
      <PostHeader/>
      <p className="post-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
      <PostComments/>
    </div>
    <div className="post">
        <PostHeader/>
        <p className="post-content">some publish hereee</p>
        <PostComments/>
        <PostComments/>
      </div>
   </> 
  )
}

export default PostItem;