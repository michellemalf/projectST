import React, { useState } from 'react';
import { callApi } from '../util';
import PostSingle from './PostSingle';
import { Link } from 'react-router-dom';


const AllPosts= ({posts, setPosts, fetchPosts, setPostId, token})=>{
const [searchTerm, setSearchTerm] = useState('');

const postMatches = (post, text) => {
    const data = post.includes(text);
    return data;
}
const handleSubmit = () => {
    const filteredPosts = posts.filter(post => postMatches(post.title.toLowerCase(), searchTerm));
    setPosts(filteredPosts);
    if (!searchTerm.length) {
        fetchPosts();
    }
}
const handleDelete = async (token, postId) => {
    const response = await callApi({
        method: 'DELETE',
        url: `/posts/${postId}`,
        token
    });
    await fetchPosts();
}
    
return <>
    <h1 className="posts-title">Posts</h1>
    <form className="search-form" onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
    }}>
        <input type="text" placeholder="search posts" className="search-input" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}></input>
        <button type="submit" className="search-btn">Search</button>
    </form>
    {
    token ? <Link className="create-post-link" to='/addpost'>Create A Post </Link> : ''
    }
    { posts.map(post => <PostSingle id="posts" key={post._id} post={post} token={token}>
    <Link className="view-post-link" to={`/posts/${post._id}`}>View Post</Link>
    { post.isAuthor && <button onClick={() => handleDelete(post._id)}>Delete</button>}
    </PostSingle>
)
}
</>
}

export default AllPosts;