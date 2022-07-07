import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  const [slide, setSlide] = useState(1);
  const [link, setLink] = useState();
  const imgUrl = `https://www.bsgangseo.go.kr/visit/img/main/main_vis_0${slide}.jpg`;

  useEffect(() => {
    const interval = setInterval(() => {
      if(slide === 9) setSlide(num => 1);
      setSlide(num => num + 1);
    }, 4000)
    return () => clearInterval(interval);
  }, [slide])

  const linkToLandmark = () => {
    setLink(() => <NavLink onMouseLeave={downLink} to="/landmark" className="link-to-lm"><span className='link'>더 자세한 정보를 보고 싶다면?</span></NavLink>)
  }

  const downLink = () => {
    setLink("");
  }

  return (
    <div className='home'>
      <div className='home-img'>
        {link}
        <img onMouseOver={linkToLandmark} className='main-img' alt="gangseo-gu" src={imgUrl} />
      </div>
      <div className='home-main'>
        <h2>부산광역시 강서구</h2>
        <iframe className='youtube' width="560"  src="https://www.youtube.com/embed/bdiVeIyM6fI?controls=0?autoplay=1&mute=1" title="엄마! 강서라서 행보케요,,,❤️" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  )
}
