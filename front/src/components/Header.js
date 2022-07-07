import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
export default function Header() {
  const list = useRef();
  const nav = useRef();
  const [isClick, setIsClick] = useState(false);

  const showList = () => {
    isClick ? nav.current.style.display = "none" : nav.current.style.display = "block"
    setIsClick(d => !d)
  }

  return (
    <header className='header'>
      <section className='header-section'>
        <img className='header-logo' alt='home' src='../adeotnr_logo.png' />
        <div ref={list} onClick={showList} className='header-list'>
          <img alt='list' src="../list.png" />
        </div>
        <nav ref={nav} className='header-nav'>
          <NavLink to="/">홈</NavLink>
          <NavLink to="/landmark">강서구 여기 어때?</NavLink>
          <NavLink to="/tendency">나에게 맞는 강서구는?</NavLink>
          <a href="https://www.bsgangseo.go.kr/">강서구 홈페이지</a>
        </nav>
      </section>
        
        <nav ref={nav} className='header-nav hidden-nav'>
          <NavLink to="/">홈</NavLink>
          <NavLink to="/landmark">강서구 여기 어때?</NavLink>
          <NavLink to="/tendency">나에게 맞는 강서구는?</NavLink>
          <a href="https://www.bsgangseo.go.kr/">강서구 홈페이지</a>
        </nav>
    </header>
  )
}
