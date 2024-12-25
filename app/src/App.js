import React, { useState, useEffect } from 'react';

// Importing images from the img folder
import image1 from './img/1.jpg';
import image2 from './img/2.jpg';
import image3 from './img/3.jpg';
import image4 from './img/4.jpg';
import image5 from './img/5.jpg';
import image6 from './img/6.jpg';

// Importing the video
import videoFile from './img/video.mp4';

function App() {
  // Array of images
  const images = [image1, image2, image3, image4, image5, image6];
  
  // State for tracking the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [videoPlayed, setVideoPlayed] = useState(false);

  useEffect(() => {
    // Change image every 3 seconds
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000ms = 3 seconds
    
    // After 18 seconds (6 images * 3 seconds per image), play the video
    const videoTimer = setTimeout(() => {
      setVideoPlayed(true);
    }, 18000); // 18 seconds

    // Clear intervals when the component is unmounted
    return () => {
      clearInterval(imageInterval);
      clearTimeout(videoTimer);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Happy Birthday, My Anjalai!</h1>
        <p className="header-wish">Wishing you a day filled with love, laughter, and happiness! From Ajay</p>
      </header>

      <div className="birthday-message justify-center">
        <p className="main-message">May all your dreams come true, and may your year ahead be as wonderful as you are! 🎉</p>

        <div className="hearts-and-flowers">
          <div className="hearts">
            ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️
          </div>
          <div className="flowers">
            🌸 🌸 🌸 🌼 🌻 🌷 🌺 🌸
          </div>
          <div className="rainbows">
            🌈 🌈 🌈 🌈 🌈
          </div>
        </div>

        <div className="heart-frame">
          {/* Image or video */}
          {videoPlayed ? (
            <div className="video-container">
              <video width="320" height="240" controls autoPlay className="video">
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <div className="image-container">
              <img
                src={images[currentImageIndex]}
                alt="Birthday Image"
                className="image"
              />
            </div>
          )}
        </div>
      </div>

      <footer className="App-footer">
        <p className="footer-message">May your birthday be filled with beautiful memories and joyful moments. 💖</p>
      </footer>

      <style jsx>{`
        .App {
          text-align: center;
          background: linear-gradient(to right, #ff7eb9, #ff65a3, #ff2a68);
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-family: 'Comic Sans MS', cursive, sans-serif;
        }

        .App-header {
          background-color: #fff;
          padding: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-bottom: 4px solid #ff2a68;
        }

        .App-header h1 {
          font-size: 3rem;
          color: #ff2a68;
          margin: 0;
        }

        .header-wish {
          font-size: 1.25rem;
          color: #ff6347;
          margin-top: 10px;
        }

        .birthday-message {
          background-color: #fff;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          width: 80%;
          max-width: 800px;
          margin-top: 30px;
        }

        .main-message {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 20px;
        }

        .hearts-and-flowers {
          margin-bottom: 20px;
        }

        .hearts {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .flowers {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .rainbows {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .heart-frame {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 0 20px rgba(255, 42, 104, 0.8);
          animation: glow 1.5s infinite alternate;
          margin: 0 auto;
        }

        .image-container,
        .video-container {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .App-footer {
          background-color: #fff;
          padding: 15px;
          box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
          border-top: 4px solid #ff2a68;
        }

        .footer-message {
          font-size: 1.25rem;
          color: #333;
          margin: 0;
          font-weight: bold;
        }

        /* Glowing border for heart frame */
        @keyframes glow {
          0% {
            box-shadow: 0 0 5px rgba(255, 42, 104, 0.8), 0 0 10px rgba(255, 42, 104, 0.6);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 42, 104, 1), 0 0 30px rgba(255, 42, 104, 0.8);
          }
          100% {
            box-shadow: 0 0 5px rgba(255, 42, 104, 0.8), 0 0 10px rgba(255, 42, 104, 0.6);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
