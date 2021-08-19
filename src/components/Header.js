import React from 'react'
import '../App.css'
import logo from '../Pictures/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} className='header-image' alt=''/>
            <label className='header-label'>DOTA App</label>
        </div>
    )
}

export default Header
