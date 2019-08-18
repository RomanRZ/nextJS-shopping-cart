import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href='/basket'>
            <a>Basket</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
