import React, { useState } from 'react';
import './App.css';

function App() {
  // Define the mood data with associated content
  const moodData = [
    {
      name: "Happy",
      description: "Feeling Warm Inside",
      song: "https://open.spotify.com/track/0lgfKhIc7WUSdFrI2eGHSI", 
      songName: "Dopamine - Hudson Matlock",
      memory: "This Song is special to me because I made my first hole-in-one with this song playing in the background. It takes me back to the energy and excitement I was feeling in that moment, yet to be matched by any other event in my life.",
      color: "#FFD700" 
    },
    {
      name: "Nostalgic",
      description: "My moms ringtone for many years",
      song: "https://open.spotify.com/track/1N62wozuHCvczCkY4QidpP", 
      songName: "Over My Head - The Fray",
      memory: "Driving on roadtrips, and this song coming on her phone from getting several phone calls throughout the trip.",
      color: "#9370DB" 
    },
    {
      name: "Focused",
      description: "Flow State",
      song: "https://open.spotify.com/album/7GrWzoQHbx463gP1E6HFSp", 
      songName: "Buttons - Mac Miller",
      memory: "Any given finals week in my 4 years here at ATU.",
      color: "#1E90FF" 
    },
    {
      name: "Contemplative",
      description: "Deep Thoughts",
      song: "https://open.spotify.com/track/5yEPxDjbbzUzyauGtnmVEC", 
      songName: "Bitter Sweet Symphony - The Verve",
      memory: "Sitting around a campfire with my buddies.",
      color: "#483D8B" 
    },
    {
      name: "Energetic",
      description: "Feeling like I can't sit still",
      song: "https://open.spotify.com/track/0VgtjIiWXKMxqtYnhHmQ8U", 
      songName: "Stay With Me - Chris Lake",
      memory: "Anytime I am feeling energetic, this is the type of music I listen to.",
      color: "#FF4500"
    }
  ];

  // State to track the currently selected mood
  const [currentMood, setCurrentMood] = useState(moodData[0]);

  return (
    <div className="app" style={{ backgroundColor: `${currentMood.color}20` }}>
      <div className="container">
        <header>
          <h1>Mood <span className="accent">Reflections</span></h1>
          <p className="subtitle">Track your mood and the memories, music, and moments that shape it</p>
        </header>

        <div className="mood-selector">
          <h2>How are you feeling today?</h2>
          <div className="mood-buttons">
            {moodData.map((mood) => (
              <button
                key={mood.name}
                onClick={() => setCurrentMood(mood)}
                className={currentMood.name === mood.name ? 'active' : ''}
                style={{ 
                  backgroundColor: currentMood.name === mood.name ? mood.color : 'transparent',
                  borderColor: mood.color
                }}
              >
                {mood.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mood-content" style={{ borderColor: currentMood.color }}>
          <h2 className="mood-title" style={{ color: currentMood.color }}>
            {currentMood.name}
          </h2>
          
          <div className="mood-description">
            <h3>What it feels like:</h3>
            <p>{currentMood.description}</p>
          </div>

          <div className="mood-memory">
            <h3>A memory this brings to mind:</h3>
            <p>"{currentMood.memory}"</p>
          </div>

          <div className="mood-song">
            <h3>The perfect soundtrack:</h3>
            <a 
              href={currentMood.song} 
              target="_blank" 
              rel="noopener noreferrer"
              className="song-link"
              style={{ backgroundColor: currentMood.color }}
            >
              {currentMood.songName}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;