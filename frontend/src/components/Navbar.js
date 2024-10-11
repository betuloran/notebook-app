import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <header>
      <div className='container'>
        <Link>
          <h1 to='/'>
            AOS NOT DEFTERİ
          </h1>
        </Link>
      </div>
    </header>
  )
}
