import React from 'react'

const PostCard = (props) => {
  return (
    <div className='postcard-container'>
      <h3 className='postcard-title'>{props.title} </h3>
      <p className='postcard-body'>{props.body}</p>
    </div>
  )
}

export default PostCard;
