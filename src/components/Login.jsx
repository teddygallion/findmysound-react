import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div id="login" className="container">
          <img id="fms-preview" alt="FindMySound preview 1" src="https://i.imgur.com/MDASvJp.png" />
      <h2>Finding new tunes for you is all we do.</h2>
      <p>
        Here at FMS we consider ourselves music junkies, but we wanted to make the process of finding new artists and
        bands faster and easier than ever before. So we take your top artists and find artists that are the most similar
        to them, and show you their top songs!
      </p>
      <a href="/api/login" className="btn btn-primary">Log in with Spotify</a>
    </div>
  );
};

export default Login;
