import React from 'react'
import nikebanner from '../../img/nikelogo1.png'
import Logo from '../../Components/Logo/Logo';

function Home() {
  return (
<body>
      <header className='banner'>
        <Logo className='logo root'/>
        <img src={nikebanner} alt='nike banner'/>
        <h1>React Website</h1>
        <p>By Chia Lee</p>

      </header>
      
</body>
  )
}

export default Home
