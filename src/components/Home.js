import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({username, token}) => {
return (<div id="welcome">
    { !token && <img className="image" src="https://i.ibb.co/NSTn9k2/39-394877-stranger-things-png-file-stranger-things-logo-png.png" alt="website logo"></img>}
    {
        token ? <h1 className="title"> Welcome! </h1> : <h1 className="title">Enter to Buy/Sell</h1>
    }
    {
        token ? <div className="welcome-message">Logged in as: <b> {username}</b></div> : ''
    }
    {
        token ? <Link className="profile-link" to="/profile">View Profile</Link> : <h3 className="welcome-reminder"> [Log In/Register]</h3>
    }
</div>
)
}

export default Home;