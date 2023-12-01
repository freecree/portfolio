import React from 'react';
import {Link} from 'react-scroll';

const Nav = () => {
  return (
    <nav className='flex justify-center space-x-9 xsm:space-x-[50px] font-bold text-[20px]'>
      <Link className='cursor-pointer hover:text-accent cust-transition'
        to='about'
        smooth={true}
      >
        About
      </Link>
      <Link className='cursor-pointer hover:text-accent cust-transition'
        smooth={true}
        to='works'>
          My works
      </Link>
      <Link className='cursor-pointer hover:text-accent cust-transition'
        smooth={true}
        to='contacts'>
          Contacts
      </Link>
    </nav>
  )
};

export default Nav;
