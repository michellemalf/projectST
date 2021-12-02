import React from 'react';
import { useParams } from 'react-router-dom';
import PostSingle from './PostSingle';
import MessageForm from './MessageForm';

const PostView = ({posts, token, fetchPosts}) => {
// console.log('posts', posts)
const { postId } = useParams();
console.log('postId', postId);
const results = posts.find(post => post._id === postId);
console.log('post: ', results)

return <>
    {token && <h3 className="single-post-title"> Send a Message About This Item:</h3>}
    <PostSingle post={results} >
        {
            results && results.messages && results.messages.map(message => <div key={message._id}>{message.fromUser.username}: {message.content}</div>)
        }
        <MessageForm post={results} token={token} fetchPosts={fetchPosts} />
    </PostSingle>
</>
}

export default PostView;