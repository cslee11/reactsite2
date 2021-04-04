import React from 'react'
import './Layout.css';
import Logo from './Components/Logo/Logo';

// logo header
// nav content
// footer


function Layout() {
    return (
<div className='container'>
    <div className='logos'>
        <Logo className='logo' alt='Logo goes here'/>
    </div>
    
    <div className='header'>header</div>
    <div className='nav'>nav</div>
    <div className='content'>content</div>
    <div className='footer'>footer</div>

</div>
    )
}

export default Layout
