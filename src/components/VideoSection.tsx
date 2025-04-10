
import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const videos = [
    {
      id: 1,
      title: "WiFi Hacking Techniques",
      thumbnail: "https://img.youtube.com/vi/sgPR6bVZX0w/maxresdefault.jpg",
      youtubeId: "sgPR6bVZX0w",
      isShort: true,
      isFeatured: true
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Demonstrations by ALX-17</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Watch detailed demonstrations of the techniques covered in our tutorials, created exclusively by ALX-17.
          </p>
          <div className="w-24 h-1 bg-hack-green mx-auto mt-4"></div>
        </div>
        
        {videos.filter(video => video.isFeatured).length > 0 && (
          <div className="mb-12">
            <div className="card overflow-hidden p-0">
              {videos.filter(video => video.isFeatured).map(video => (
                <div key={video.id} className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-80 object-cover"
                  />
                  <a 
                    href={video.isShort 
                      ? `https://youtube.com/shorts/${video.youtubeId}` 
                      : `https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-30 transition-all"
                  >
                    <div className="w-20 h-20 rounded-full bg-hack-green flex items-center justify-center">
                      <Play className="h-10 w-10 text-hack-dark" />
                    </div>
                  </a>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4">
                    <h3 className="text-2xl font-bold text-white">{video.title}</h3>
                    <p className="text-gray-300">Featured tutorial by ALX-17</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.filter(video => !video.isFeatured).map((video) => (
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
                {video.isShort ? "ALX-17 YouTube Short" : "Presented by ALX-17 - Learn the complete process with this step-by-step video tutorial."}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://www.youtube.com/@ALX-17"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white font-bold py-4 px-8 rounded-lg inline-flex items-center gap-2 hover:bg-red-700 transition-colors"
          >
            <Play className="h-6 w-6" /> Watch More on ALX-17's YouTube Channel
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
