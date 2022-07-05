import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <header className='header'>
      <section className='header-section'>
        <img className='header-logo' alt='home' src='../adeotnr_logo.png' />
        <nav className='header-nav'>
          <NavLink to="/">홈</NavLink>
          <NavLink to="/landmark">강서구 명소</NavLink>
          {/* <NavLink to="/cctv">CCTV 위치</NavLink> */}
        </nav>
      </section>
    </header>
  )
}
