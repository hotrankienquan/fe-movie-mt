import React from "react";
import { useState,useEffect } from "react";
import ReactJWPlayer from "react-jw-player";
import JWPlayer from "@jwplayer/jwplayer-react";
import ReactPlayer from "react-player";
import {useRouter} from 'next/router'
const VideoContainer = ({ movie }) => {
 
  const [videoState, setVideoState] = useState({
    videoId: movie._id || "myvideoid", 
    currentTime: JSON.parse(localStorage.getItem("videoPlaybackState"))?.currentTime || 0
  });
  const [videoQuality, setVideoQuality] = useState("720p"); // Chất lượng mặc định
  const handleQualityChange = (quality) => {
    setVideoQuality(quality);
  };

  const playlist = [
    {
      file: "https://firebasestorage.googleapis.com/v0/b/movie-the-stone.appspot.com/o/files%2FN%E1%BA%BFu%20%C4%90%C3%A1nh%20M%E1%BA%A5t%20Em%20-%20Reddy%20-%20Official%20Lyrics%20Video%20(1).mp4%20%20%20%20%20%20%202023-8-11%2017%3A54%3A34?alt=media&token=e595d5ee-2a75-4160-904c-f25dda4e4583",
      image: "https://link-to-my-poster.jpg",
      tracks: [
        {
          file: "https://link-to-subtitles.vtt",
          label: "English",
          kind: "captions",
          default: true,
        },
      ],
    },
    {
      file: "https://firebasestorage.googleapis.com/v0/b/movie-the-stone.appspot.com/o/files%2FN%E1%BA%BFu%20%C4%90%C3%A1nh%20M%E1%BA%A5t%20Em%20-%20Reddy%20-%20Official%20Lyrics%20Video%20(1).mp4%20%20%20%20%20%20%202023-8-11%2017%3A54%3A34?alt=media&token=e595d5ee-2a75-4160-904c-f25dda4e4583",
      image: "https://link-to-my-other-poster.jpg",
    },
  ];
  const playlistt = [
    {
      file: "/neudanhmatem.mp4",
      tracks: [
        {
          file: "/test.vtt",
          label: "English",
          kind: "captions",
          default: true,
        },
      ],
    },
  ];
  const qualityOptions = [
    { value: "1080p", label: "1080p" },
    { value: "720p", label: "720p" },
    { value: "480p", label: "480p" },
    { value: "360p", label: "360p" },
  ];
  // Khi component được tạo
  useEffect(() => {
    const savedVideoState = localStorage.getItem('videoPlaybackState');

    if (savedVideoState) {
      const parsedState = JSON.parse(savedVideoState);
      const currentTime = parsedState.currentTime;
      
      // Nếu có currentTime, thiết lập nó cho video
      const videoElement = document.querySelector('.players-container video'); // Thay 'myVideo' bằng ID thật của video
      if (videoElement) {
        videoElement.currentTime = currentTime;
      }
    }
    
  }, []);
   // Khi video bắt đầu phát
  const handleVideoPlay = () => {
    localStorage.setItem('videoPlaybackState', JSON.stringify(videoState));
  };

const handleVideoTimeUpdate = (event) => {
  const newVideoState = { ...videoState, currentTime: event.target.currentTime,videoId: movie._id};
  setVideoState(newVideoState);
  localStorage.setItem('videoPlaybackState', JSON.stringify(newVideoState));
};

  // Khi video đã hoàn thành hoặc ngừng xem
  const handleVideoEnded = () => {
    // Xóa dữ liệu trạng thái video khỏi Local Storage
    localStorage.removeItem('videoPlaybackState');
  };
// const handleVideoProgress = (state) => {
//   // Trạng thái state chứa thông tin về thời gian hiện tại của video và nhiều thông tin khác
//   const currentTime = state.playedSeconds; // Thời gian đã phát tính theo giây
//   // Sử dụng currentTime theo ý của bạn, ví dụ:
//   console.log(`Thời gian đã phát: ${currentTime} giây`);

//   const newVideoState = { ...videoState, currentTime,videoId: movie._id};
//   setVideoState(newVideoState);
//   localStorage.setItem('videoPlaybackState', JSON.stringify(newVideoState));
// };

  return (
    <div className="players-container">
      <video
        id={movie._id || "abc"} // Thay 'myVideo' bằng ID thật của video
        onPlay={handleVideoPlay}
        onTimeUpdate={handleVideoTimeUpdate}
        onEnded={handleVideoEnded}
        controls
      >
        <source src={`${process.env.NEXT_PUBLIC_URL}/video/riengminhanh.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     {/* <ReactPlayer
        // url={movie?.video?.[0]}
        url={`${process.env.NEXT_PUBLIC_URL}/video/riengminhanh.mp4`}
        
        controls
        id={movie._id || "abc"}
        onStart={handleVideoPlay}
        onProgress={handleVideoProgress}
        className=""
        config={{
          file: {
            attributes: {
              controlsList: "nodownload", // Loại bỏ nút tải xuống
              preload: "metadata", // Tải metadata trước để lấy thông tin chất lượng
            },
            tracks: [
              {
                kind: "subtitles",
                src: "/test.vtt",
                srcLang: "vn",
                default: true,
              },
              {
                kind: "subtitles",
                src: "/test.vtt",
                srcLang: "en",
              },
            ], // Loại bỏ phụ đề
            // forceHLS: true, // Sử dụng HLS cho video
            // forceVideo: true, // Sử dụng phần mềm video native
            quality: {
              defaultQuality: videoQuality, // Chất lượng mặc định
              options: qualityOptions, // Các tùy chọn chất lượng
              forced: true, // Bắt buộc chọn chất lượng
              onChange: handleQualityChange, // Xử lý khi người dùng thay đổi chất lượng
            },
          },
        }}
      />*/}
    </div>
  );
};

export default VideoContainer;
