import React, { useState } from 'react'
import Cards from './Cards';
import lm from '../landmark.json';

export default function LandMark() {
  const [landmarks, setLandmarks] = useState(lm);
  console.log(landmarks)
  return (
    <div>
    <Cards />
      <article className='landmark'>
        <p>landmark</p>
        <nav className='lm-btns'>
          {landmarks.map(data => {
            const a = <button>{data["name"]}</button>
            return a;
          })}
        </nav>
      </article>
    </div>
    
  )
}
