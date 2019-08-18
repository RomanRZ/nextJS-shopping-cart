import React from 'react';
import Link from 'next/link';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul className='nav__list'>
        <li className='nav__item'>
          <Link href='/'>
            <a className='nav__link'>Products</a>
          </Link>
        </li>
        <li className='nav__item'>
          <Link href='/basket'>
            <a className='nav__link'>Basket</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
