import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <div className='header'>
      <NavLink to="/">홈</NavLink>
      <NavLink to="/landmark">랜드마크</NavLink>
      <NavLink to="/cctv">CCTV 위치</NavLink>
    </div>
  )
}
