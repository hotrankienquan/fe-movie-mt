import JWPlayer from "@jwplayer/jwplayer-react";

const VideoPlayer = () => {
  const playlist = [
    // {
    //   file: "/stream/videos/vut-mat-reddy-cover-_-reply-199x.m3u8", // HLS streaming URL
    //   // other properties like image, subtitles, etc.
    // },
    {
      file: "/stream/videos/vut-mat-reddy-cover-_-reply-199x.m3u8",
    },
  ];

  return (
    <JWPlayer
      playerId="my-player"
      library="https://content.jwplatform.com/libraries/j9BLvpMc.js"
      playlist={playlist}
    />
  );
};

export default VideoPlayer;
