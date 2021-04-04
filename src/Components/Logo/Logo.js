import React from 'react'
import './Logo.css';
import nikeLogo from '../../img/nikelogo2.png';

function Logo() {
    return (
        <div className='logo'>
            <a href><img className='logo' src={nikeLogo} alt='nikelogo'/></a>
        </div>
    );
}
export default Logo;
