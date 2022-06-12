import React, { useState } from 'react'
import lm from '../landmark.json';

export default function LandMark() {
  const [landmarks, setLandmarks] = useState(lm);
  console.log(landmarks)
  return (
    <div className='landmark'>
      <p>landmark</p>
      <nav className='lm-btns'>
        {landmarks.map(data => {
          const a = <button>{data["name"]}</button>
          return a;
        })}
      </nav>
    </div>
  )
}
