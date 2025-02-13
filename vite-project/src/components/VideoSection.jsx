"use client"

import { useState } from "react"

function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(0)

  const videos = [
    {
      id: 1,
      title: "Introduction to Solar Analysis",
      description: "Learn the basics of solar potential analysis for buildings.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    },
    {
      id: 2,
      title: "Advanced Solar Mapping Techniques",
      description: "Discover cutting-edge methods for mapping solar potential.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    },
    {
      id: 3,
      title: "Financial Modeling for Solar Projects",
      description: "Learn how to create accurate financial models for solar installations.",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video URL
    },
  ]

  return (
    <section className="video-section">
      <div className="video-container">
        <h2 className="video-section-title">Learn More About Solar Analysis</h2>
        <div className="video-content">
          <div className="video-player">
            <iframe
              src={videos[activeVideo].url}
              title={videos[activeVideo].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-playlist">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`video-item ${index === activeVideo ? "active" : ""}`}
                onClick={() => setActiveVideo(index)}
              >
                <h3 className="video-item-title">{video.title}</h3>
                <p className="video-item-description">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection

