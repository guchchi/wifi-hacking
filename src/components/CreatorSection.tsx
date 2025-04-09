
import React from 'react';
import { Youtube } from 'lucide-react';

const CreatorSection = () => {
  const videos = [
    {
      id: 1,
      title: "How to Install Kali Linux on Raspberry Pi",
      thumbnail: "https://img.youtube.com/vi/CzhNgRi7d3Y/maxresdefault.jpg",
      youtubeId: "CzhNgRi7d3Y",
      isShort: true
    },
    {
      id: 2,
      title: "Kali Linux on VNC",
      thumbnail: "https://img.youtube.com/vi/RJcan3vQOSc/maxresdefault.jpg",
      youtubeId: "RJcan3vQOSc",
      isShort: true
    },
    {
      id: 3,
      title: "Wi-Fi Hacking Setup with Kali Linux",
      thumbnail: "https://img.youtube.com/vi/FpUL9XrBzfs/maxresdefault.jpg",
      youtubeId: "FpUL9XrBzfs"
    }
  ];

  return (
    <section id="creator" className="bg-hack-dark py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet ALX-17</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            This website is created by ALX-17, a passionate tech content creator and YouTuber. 
            Known for hands-on tutorials on Raspberry Pi, VS Code, Ethical Hacking, and open-source tools, 
            ALX-17 is committed to making complex tech simple and fun.
          </p>
          <div className="w-24 h-1 bg-hack-green mx-auto mt-4"></div>
          
          <a 
            href="https://www.youtube.com/@ALX-17" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-6 inline-flex items-center text-hack-green hover:text-white transition-colors"
          >
            <Youtube className="w-5 h-5 mr-2" />
            Subscribe to ALX-17's YouTube Channel
          </a>
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
                    <Youtube className="h-6 w-6 text-hack-dark" />
                  </div>
                </a>
              </div>
              <h3 className="text-lg font-bold mt-4 mb-2">{video.title}</h3>
              <p className="text-sm text-gray-400">
                ALX-17 • Tech Tutorials
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreatorSection;
