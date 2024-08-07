import React from 'react';
import ImageSlider from './components/ImageSlider';
import image1 from './Images/1.jpg';
import image2 from './Images/2.jpg';
import image4 from './Images/4.jpg';
import image3 from './Images/3.jpg';
import image5 from './Images/5.jpg';

import './App.css'; 

function App() {
  const images = [
    { id: 1, url: image1 },
    { id: 2, url: image2 },
    { id: 3, url: image4 },
    { id: 4, url: image3 },
    { id: 5, url: image5 },
   
  ];

  return (
    <div className="App">
      
      <ImageSlider images={images} />
    </div>
  );
}

export default App;
