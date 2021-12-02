import React from 'react';

const PostSingle = ({post, children}) => {
return (post
? <div className="single-post">
    <h3><b>{post.title}</b></h3>
    <div>Description: {post.description}</div>
    <div>Price: {post.price ? post.price : '[On Request]'}</div>
    <div>Location: {post.location ? post.location : '[On Request]'}</div>
    <div>Delivery Available? {post.willDeliver ? 'yes' : 'no'}</div>
    <div><i>Seller: {post.author.username}</i></div>
    {
      children
    }
    </div>
    : 'No posts to display'
)
}

export default PostSingle;