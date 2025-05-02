


// import { useState, useRef, useEffect } from "react";
// import {
//   Volume2,
//   VolumeX,
//   Maximize2,
//   Minimize2,
//   Play,
//   Pause,
// } from "lucide-react";

// export default function VideoSection() {
//   const [isMuted, setIsMuted] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [progress, setProgress] = useState(0); // Video progress state
//   const videoRef = useRef(null);
//   const containerRef = useRef(null);

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   const togglePlay = () => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.pause();
//       } else {
//         videoRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   const toggleFullscreen = () => {
//     if (!document.fullscreenElement) {
//       containerRef.current.requestFullscreen().then(() => {
//         setIsFullscreen(true);
//       });
//     } else {
//       document.exitFullscreen();
//       setIsFullscreen(false);
//     }
//   };

//   // Update progress bar as video plays
//   useEffect(() => {
//     const updateProgress = () => {
//       if (videoRef.current) {
//         const percentage =
//           (videoRef.current.currentTime / videoRef.current.duration) * 100;
//         setProgress(percentage);
//       }
//     };

//     videoRef.current?.addEventListener("timeupdate", updateProgress);
//     return () =>
//       videoRef.current?.removeEventListener("timeupdate", updateProgress);
//   }, []);

//   // Seek video position when progress bar is clicked
//   const handleSeek = (e) => {
//     if (videoRef.current) {
//       const rect = e.target.getBoundingClientRect();
//       const offsetX = e.clientX - rect.left;
//       const newTime =
//         (offsetX / rect.width) * videoRef.current.duration;
//       videoRef.current.currentTime = newTime;
//     }
//   };

//   return (
//     <section className="relative my-20 mt-20 bg-gradient-to-r from-gray-900 to-gray-700">
//       <div
//         ref={containerRef}
//         className="max-w-[90%] mx-auto h-[730px] rounded-2xl overflow-hidden shadow-xl relative"
//       >
//         {/* Video Container */}
//         <div className="relative w-full h-full">
//           <video
//             ref={videoRef}
//             autoPlay
//             muted={isMuted}
//             loop
//             playsInline
//             className="w-full h-full object-cover filter brightness-100"
//             style={{ maxWidth: "100%", height: "auto" }}
//           >
//             <source src="src/assets/video/crcidf (240p).mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>

//           {/* Control Bar */}
//           <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center justify-between">
//             {/* Left Controls */}
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={togglePlay}
//                 className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300"
//                 aria-label={isPlaying ? "Pause video" : "Play video"}
//               >
//                 {isPlaying ? (
//                   <Pause className="w-6 h-6 text-white" />
//                 ) : (
//                   <Play className="w-6 h-6 text-white" />
//                 )}
//               </button>
//               <button
//                 onClick={toggleMute}
//                 className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300"
//                 aria-label={isMuted ? "Unmute video" : "Mute video"}
//               >
//                 {isMuted ? (
//                   <VolumeX className="w-6 h-6 text-white" />
//                 ) : (
//                   <Volume2 className="w-6 h-6 text-white" />
//                 )}
//               </button>
//             </div>

//             {/* Fullscreen Button */}
//             <button
//               onClick={toggleFullscreen}
//               className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300"
//               aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
//             >
//               {isFullscreen ? (
//                 <Minimize2 className="w-6 h-6 text-white" />
//               ) : (
//                 <Maximize2 className="w-6 h-6 text-white" />
//               )}
//             </button>
//           </div>

//           {/* Progress Bar */}
//           <div className="absolute bottom-1 left-0 right-0 px-4">
//             <div
//               className="w-full h-1 bg-gray-700 rounded cursor-pointer"
//               onClick={handleSeek}
//             >
//               <div
//                 className="h-1 bg-blue-500 rounded"
//                 style={{ width: `${progress}%` }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







// import { useState, useRef, useEffect } from 'react';
// import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';

// export default function VideoSection() {
//   const videoRef = useRef(null);
//   const containerRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isMuted, setIsMuted] = useState(true);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [currentTime, setCurrentTime] = useState('00:00');
//   const [duration, setDuration] = useState('00:00');
//   const [hasError, setHasError] = useState(false);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     const handleMetadata = () => {
//       setDuration(formatTime(video.duration));
//     };

//     const handleTimeUpdate = () => {
//       setProgress((video.currentTime / video.duration) * 100);
//       setCurrentTime(formatTime(video.currentTime));
//     };

//     const handleFullscreenChange = () => {
//       setIsFullscreen(!!document.fullscreenElement);
//     };

//     video.addEventListener('loadedmetadata', handleMetadata);
//     video.addEventListener('timeupdate', handleTimeUpdate);
//     document.addEventListener('fullscreenchange', handleFullscreenChange);
//     video.addEventListener('error', () => setHasError(true));

//     return () => {
//       video.removeEventListener('loadedmetadata', handleMetadata);
//       video.removeEventListener('timeupdate', handleTimeUpdate);
//       document.removeEventListener('fullscreenchange', handleFullscreenChange);
//     };
//   }, []);

//   const togglePlay = () => {
//     if (!videoRef.current) return;
//     isPlaying ? videoRef.current.pause() : videoRef.current.play();
//     setIsPlaying(!isPlaying);
//   };

//   const toggleMute = () => {
//     if (videoRef.current) {
//       videoRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   const toggleFullscreen = () => {
//     if (!document.fullscreenElement && containerRef.current) {
//       containerRef.current.requestFullscreen();
//     } else {
//       document.exitFullscreen();
//     }
//   };

//   const handleSeek = (e) => {
//     if (!videoRef.current) return;
//     const rect = e.currentTarget.getBoundingClientRect();
//     const pos = (e.clientX - rect.left) / rect.width;
//     videoRef.current.currentTime = pos * videoRef.current.duration;
//   };

//   const formatTime = (seconds) => {
//     const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
//     const secs = String(Math.floor(seconds % 60)).padStart(2, '0');
//     return `${mins}:${secs}`;
//   };

//   return (
//     <section className="relative my-20 bg-gradient-to-r from-gray-900 to-gray-700">
//       <div ref={containerRef} className="max-w-[90%] mx-auto h-[730px] rounded-2xl overflow-hidden shadow-xl relative">
//         {hasError ? (
//           <div className="w-full h-full bg-red-900/20 flex items-center justify-center text-red-400">
//             Failed to load video
//           </div>
//         ) : (
//           <video ref={videoRef} autoPlay muted={isMuted} loop playsInline className="w-full h-full object-cover">
//             <source src="src/assets/video/crcidf (240p).mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         )}

//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center justify-between">
//           <button onClick={togglePlay} className="p-2 bg-black/50 rounded-full">
//             {isPlaying ? <Pause className="text-white" /> : <Play className="text-white" />}
//           </button>
//           <button onClick={toggleMute} className="p-2 bg-black/50 rounded-full">
//             {isMuted ? <VolumeX className="text-white" /> : <Volume2 className="text-white" />}
//           </button>
//           <span className="text-white">{currentTime} / {duration}</span>
//           <button onClick={toggleFullscreen} className="p-2 bg-black/50 rounded-full">
//             {isFullscreen ? <Minimize2 className="text-white" /> : <Maximize2 className="text-white" />}
//           </button>
//         </div>

//         <div className="absolute bottom-1 left-0 right-0 px-4">
//           <div className="w-full h-1 bg-gray-700 rounded cursor-pointer" onClick={handleSeek}>
//             <div className="h-1 bg-blue-500 rounded absolute" style={{ width: `${progress}%` }} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';

export default function VideoSection() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleMetadata = () => {
      setDuration(formatTime(video.duration));
    };

    const handleTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
      setCurrentTime(formatTime(video.currentTime));
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    video.addEventListener('loadedmetadata', handleMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    video.addEventListener('error', () => setHasError(true));

    return () => {
      video.removeEventListener('loadedmetadata', handleMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(Math.floor(seconds % 60)).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <section className="relative my-20 bg-gradient-to-r from-gray-900 to-gray-700">
      <div ref={containerRef} className="max-w-[70%] mx-auto h-[500px] rounded-2xl overflow-hidden shadow-xl relative">
        {hasError ? (
          <div className="w-full h-full bg-red-900/20 flex items-center justify-center text-red-400">
            Failed to load video
          </div>
        ) : (
          <video ref={videoRef} autoPlay muted={isMuted} loop playsInline className="w-full h-full object-cover">
            <source src="src/assets/video/crcidf (240p).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={togglePlay} className="p-2 bg-black/50 rounded-full">
              {isPlaying ? <Pause className="text-white" /> : <Play className="text-white" />}
            </button>
            <button onClick={toggleMute} className="p-2 bg-black/50 rounded-full">
              {isMuted ? <VolumeX className="text-white" /> : <Volume2 className="text-white" />}
            </button>
            <span className="text-white">{currentTime} / {duration}</span>
          </div>
          <button onClick={toggleFullscreen} className="p-2 bg-black/50 rounded-full">
            {isFullscreen ? <Minimize2 className="text-white" /> : <Maximize2 className="text-white" />}
          </button>
        </div>

        <div className="absolute bottom-1 left-0 right-0 px-4">
          <div className="w-full h-1 bg-gray-700 rounded cursor-pointer" onClick={handleSeek}>
            <div className="h-1 bg-blue-500 rounded absolute" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </section>
  );
}
