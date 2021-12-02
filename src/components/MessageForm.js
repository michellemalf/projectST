import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { callApi } from '../util';


const MessageForm = ({post, token, fetchPosts}) => {
const { postId } = useParams();
const [content, setContent] = useState('');

const handleSubmit = async (ev) => {
ev.preventDefault();
const result = await callApi({
    method: 'POST',
    url: `/posts/${postId}/messages`,
    token,
    body: {
        message: {
            content
        }
    }
});
setContent(result.data.message.content);
await fetchPosts()
setContent('');
}
return <>
{ 
token && !post.isAuthor ?
    <form onSubmit={handleSubmit}>
        <input value={content} placeholder="your message" onChange={(ev) => setContent(ev.target.value)}></input>
        <button type="submit">Send</button>
    </form>
    : ''
}
</>
}

export default MessageForm;