import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { callApi } from '../util';

const AddPost = (props) => {
const [title, setTitle] = useState('');
const [price, setPrice] = useState('');
const [description, setDescription] = useState('');
const [location, setLocation] = useState('')
const [willDeliver, setWillDeliver] = useState('')

const { token, setPosts } = props
const navigate = useNavigate();

const handleAdd = async (ev) => {
    ev.preventDefault();
    const data = await callApi({
    url: '/posts', 
    method: 'POST', 
    body: {
    post: {
        title,
        price, 
        description,
        location,
        willDeliver
}}, 
token});
    const results = await callApi({url: '/posts', token});
    setPosts(results.data.posts);
    setTitle('');
    setPrice('');
    setDescription('');
if(results.data.posts) {
    navigate('/posts');
}
}
return <>
{token &&
<div className="create-post-form">
    <h1 className="create-post-title">Create A Post </h1>
    <form onSubmit={handleAdd}>
    <fieldset>
        <label>Title: </label>
        <input type="text" placeholder="*title*" value={title} onChange={(event) => {setTitle(event.target.value)}}></input>
    </fieldset>
    <fieldset>
        <label>Price: </label>
        <input type="text" placeholder="price" value={price} onChange={(event) => {setPrice(event.target.value)}}></input>
    </fieldset>
    <fieldset>
        <label>Description: </label>
        <input type="text" placeholder="description" value={description} onChange={(event) => {setDescription(event.target.value)}}></input>
    </fieldset>
    <fieldset>
        <label>Location: </label>
        <input type="text" placeholder="location" value={location} onChange={(event) => {setLocation(event.target.value)}}></input>
    </fieldset>
    <fieldset>
        <label>Can Deliver? </label>
            <select type="text" value={willDeliver} onChange={(ev) => setWillDeliver(ev.target.value)}>
                <option value="">Select</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
    </fieldset>
    <fieldset>
        <button className="newpost-submit" type="submit">Submit</button>
    </fieldset>
    </form>
</div>    
} 
</>
}

export default AddPost;