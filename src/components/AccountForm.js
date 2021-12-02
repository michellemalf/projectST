import React, { useState } from "react";
import { useNavigate, useParams, Link, NavLink } from "react-router-dom";
import { callApi } from "../util";

const AccountForm = ({setToken, setUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const params = useParams()

return <>
    <form 
    className="inputs" 
    onSubmit={ async (event) => {
    event.preventDefault();

const results = await callApi({
    url: `/users/${params.method}`,
    method: 'POST',
    body: {
        user: {
            username,
            password
        }
    }
});
if (results.data) {
    const data = await callApi({url: '/users/me', token: results.data.token});
    setToken(results.data.token);
    setUser(data.data.username)
if (results.data.token) {
    navigate('/'); 
}
if (!password) {
throw ('wrong username or password')
}
}
}}>
    <input className="inputs" type="text" placeholder="Enter Username" value={username} onChange={(event) => setUsername(event.target.value)}></input>
    <input className="inputs" type="password" placeholder="Enter Password" value={password} onChange={(event) => setPassword(event.target.value)}></input>
    <button className="btn-input" type="submit">Submit</button>
</form>
</>
}

export default AccountForm;