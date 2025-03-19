import React from 'react';

const Recommendation = ({ artist }) => {
  return (
    <div id="recommendation">
      <img src={artist.image} alt={artist.name} />
      <h3>{artist.name}</h3>
      <div className="embed-responsive">
        <iframe
          src={`https://open.spotify.com/embed/artist/${artist.id}`}
          width="100%"  
          height="200"
          frameBorder="0"
          allow="encrypted-media"
          title={artist.name}
        />
      </div>
    </div>
  );
};

export default Recommendation;
