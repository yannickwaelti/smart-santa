import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link to='/'>Home</Link>
    <div className='options'>
      <Link className='option' to='/groups'>
        GROUPS
      </Link>
      <Link className='option' to='/wishlist'>
        MY WISHLIST
      </Link>
      <Link className='option' to='/gifts'>
        MY GIFTS
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      <Link className='option' to='/sign-in'>
        LOGIN
      </Link>
    </div>
  </div>
);

export default Header;
