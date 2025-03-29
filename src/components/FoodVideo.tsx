import React, { useEffect, useRef } from 'react';

const FoodVideo = () => {
  const videos = [
    {
      id: "video1",
      title: "New Lanka Restaurant",
      videoFile: "/videos/video1.mp4", // Update with actual path
    },
    {
      id: "video2",
      title: "Pastry and buns at New Lanka Restaurant",
      videoFile: "/videos/video2.mp4", // Already seems to have an MP4
    },
    {
      id: "video3",
      title: "Traditional Hoppers time at New Lanka Restaurant",
      videoFile: "/videos/video3.mp4", // Update with actual path
    },
    {
      id: "video4",
      title: "Ceylon Street Food",
      videoFile: "/videos/video4.mp4", // Update with actual path
    },
    {
      id: "video5",
      title: "Traditional Srilankan Food",
      videoFile: "/videos/video5.mp4", // Update with actual path
    },
    {
      id: "video6",
      title: "Ceylon Food",
      videoFile: "/videos/video6.mp4", // Update with actual path
    } 
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Video Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative">
                <video
                  className="w-full h-full object-cover"
                  src={video.videoFile}
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-primary">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodVideo;