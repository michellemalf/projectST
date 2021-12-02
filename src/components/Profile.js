import React from 'react';
import {useNavigate}  from 'react-router-dom'
import { callApi } from '../util';

const Profile = ({ token, messages, user, setMessages}) => {
const navigate = useNavigate();

const handleSubmit = async () => {
const data = await callApi({
    url: '/users/me',
    token
});
    setMessages(data.data.messages);    
    }
    if(!token) {
    navigate('/')
    }

return <>
    <h1 className="profile-title">Profile</h1>
    <form onSubmit={(ev) => {
    ev.preventDefault();
    handleSubmit()
}}>
    <button className="profile-btn"type="submit">Click to View Messages</button>
</form>
</>        
}
export default Profile;