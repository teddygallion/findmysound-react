import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Recommendations from './components/Recommendations';
import './App.css';

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('access_token');
    const refresh = params.get('refresh_token');
    
    if (token && refresh) {
      setAccessToken(token);
      setRefreshToken(refresh);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <h1>Find My Sound!</h1>
        {!accessToken ? (
          <div id="login" className="container-fluid">
            <div className="flex-row">
              <img 
                id="fms-preview" 
                alt="FindMySound preview 2" 
                src="https://i.imgur.com/BodYNWZ.png" 
                className="flex-item"
              />
            </div>
            <h2>Finding new tunes for you is all we do.</h2>
            <p>
              Here at FMS we consider ourselves music junkies, but we wanted to make the process of finding new artists and
              bands faster and easier than ever before. So we take your top artists and find artists that are the most similar
              to them, and show you their top songs!
            </p>
            <a href={`${import.meta.env.VITE_BACKEND_URI}/login`} className="login-button">Log in with Spotify</a>
          </div>
        ) : (
          <Routes>
            <Route path="/recommendations" element={<Recommendations accessToken={accessToken} refreshToken={refreshToken} />} />
            <Route path="/" element={<div>Welcome Home!</div>} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
