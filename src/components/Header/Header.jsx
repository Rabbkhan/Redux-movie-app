import React from 'react'
import './Header.scss'
import User from '../../assets/user.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
<div className='logo'>Movie App</div>
      </Link>
<div className='user-image'>
<img src={User} alt='user'/>
</div>

    </div>
  );
};

export default Header;