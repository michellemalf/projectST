import React, { useState } from 'react';
import { Link, Routes, Route, NavLink} from 'react-router-dom'
import { useEffect } from 'react'
import { AccountForm, AllPosts, AddPost, Home, Logout, PostView, Profile} from '../components';
import { callApi } from '../util';
import { BrowserRouter as Router } from 'react-router-dom';
import './Main.css'

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');
  const [postId, setPostId] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [messages, setMessages] = useState([]);
  
  const fetchPosts = async () => {
      const response = await callApi({
          url: '/posts',
          token
      });
      const allPosts = response.data.posts;
      if(allPosts) setPosts(allPosts);
  }
  
  useEffect(() => {
      try {
          fetchPosts();
          } catch (error) {
              console.log(error);
          }
      }, [])

    return (
    <div id="container">
    <div className="navbar">
        <Link className="main-link" to="/">HOME</Link>
        <Link className="main-link" to="/posts">POSTS</Link>

        {
            token && <Link className="main-link" to="/profile">PROFILE</Link>
        }
        {
            token ? <Logout setToken={setToken}/> : <Link className="main-link" to="/account/:method">ACCOUNT</Link>
        }
    </div>
    <div className="links">
    <Link className="links" to="/account/login">Login</Link> 
    <Link className="links" to="/account/register">Register</Link> 
    </div>
        
<Routes>
    <Route path="/" exact element={ <Home username={user} token={token} posts={posts}/> } />
    <Route path='/posts' exact element={<AllPosts posts={posts} token={token} fetchPosts={fetchPosts} setPosts= {setPosts} setPostId={setPostId} /> }/>
    <Route path='/addpost' element={ <AddPost token={token} setPosts={setPosts} /> }/>
    <Route path='/posts/:postId' element={<PostView posts={posts} token={token} fetchPosts={fetchPosts} />} />
    <Route path='/profile' element={ <Profile token={token} messages={messages} setMessages={setMessages} user={user} /> } />
    <Route path='/account/:method' element={<AccountForm setToken={setToken} setUser={setUser}/> } />
</Routes>
</div>
)}

export default Main;