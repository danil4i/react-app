import React from 'react';


function VideoPlayer () {
  return (
    <div className="video-container">
      <h1></h1>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/TdDYZPMvucs"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="responsive-iframe"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
