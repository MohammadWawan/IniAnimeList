"use client";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: "300",
    height: "250",
  };
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPLayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="bg-color-primary text-color-dark rounded-3xl 
          float-right px-3 mb-1 text-xl 
          hover:bg-color-accent transition-all shadow-xl"
          onClick={handleVideoPLayer}
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={{ option }}
        />
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button
        className="fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark hover:bg-color-accent rounded"
        onClick={handleVideoPLayer}
      >
        Tonton Trailer
      </button>
    );
  };
  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
