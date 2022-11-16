import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';

const Navbar = () => {
  return (
    <div className='navbar'>
      <MyButton>Выйти</MyButton>
      <div className='navbar__links'>
        <Link to='/about'>О сайте</Link>
        <Link to='/posts'>Посты</Link>
      </div>
    </div>
  );
};

export default Navbar;
