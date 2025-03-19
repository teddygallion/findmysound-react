import React, { useEffect, useState } from 'react';
import Recommendation from './Recommendation';
import "./Recommendations.css"
const Recommendations = ({ accessToken, refreshToken }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/recommendations?access_token=${accessToken}&refresh_token=${refreshToken}`, {
          method: 'GET',
        });

        const data = await response.json();

        if (data.recList) {
          setRecommendations(data.recList);
        }
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, [accessToken, refreshToken]);

  return (
    <div id="recommendations">
      <h2>Give these fine folx a listen</h2>
      <p>Don't like your recommendations? Refresh the page to see more!</p>
      <div className="rec-container">
        {recommendations.length > 0 ? (
          recommendations.map((artist) => (
            <Recommendation key={artist.id} artist={artist}/>
          ))
        ) : (
          <p>No recommendations available. Try logging in again!</p>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
