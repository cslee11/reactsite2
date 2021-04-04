import React from 'react'
import './App.css';
import Logo from './Components/Logo/Logo';

// logo header
// nav content
// footer


function App() {
    return (
<div className='container'>
    <div className='logos'>
    <Logo className='logo'/>
    </div>

    <div className='header'>header</div>
    <div className='nav'>nav</div>
    <div className='content'>content</div>
    <div className='footer'>footer</div>

</div>
    )
}

export default App
