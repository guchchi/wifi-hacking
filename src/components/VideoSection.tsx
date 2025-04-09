
import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      title: "How to Capture Handshake | Step-by-Step",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      youtubeId: "dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "Installing Kali Linux",
      thumbnail: "https://img.youtube.com/vi/CzhNgRi7d3Y/maxresdefault.jpg",
      youtubeId: "CzhNgRi7d3Y",
      isShort: true
    },
    {
      id: 3,
      title: "Kali Linux on VNC",
      thumbnail: "https://img.youtube.com/vi/RJcan3vQOSc/maxresdefault.jpg",
      youtubeId: "RJcan3vQOSc",
      isShort: true
    }
  ];

  return (
    <section id="videos" className="bg-hack-gray py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Demonstrations</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Watch detailed demonstrations of the techniques covered in our tutorials.
          </p>
          <div className="w-24 h-1 bg-hack-green mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="card overflow-hidden">
              <div className="relative">
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-48 object-cover"
                />
                <a 
                  href={video.isShort 
                    ? `https://youtube.com/shorts/${video.youtubeId}` 
                    : `https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-30 transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-hack-green flex items-center justify-center">
                    <Play className="h-6 w-6 text-hack-dark" />
                  </div>
                </a>
              </div>
              <h3 className="text-lg font-bold mt-4 mb-2">{video.title}</h3>
              <p className="text-sm text-gray-400">
                {video.isShort ? "YouTube Short" : "Learn the complete process with this step-by-step video tutorial."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
