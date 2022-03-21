import React from 'react'
import {GiEarthAmerica} from 'react-icons/gi';
const Topbar = () => {
  return (
    <nav className='nav-container'>
        <GiEarthAmerica size={28} color="#fff"/>
        <p>my travel journal</p>
    </nav>
  )
}

export default Topbar