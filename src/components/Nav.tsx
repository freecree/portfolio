import {PropsWithChildren} from 'react';
import {Link} from 'react-scroll';
import { useTranslation } from 'react-i18next';

const Nav = ({className}: {className: string}) => {
  const { t } = useTranslation();
  return (
    <nav className={`flex justify-center space-x-9 xsm:space-x-[50px] font-bold ${className}`}>
      <Link className='cursor-pointer hover:text-accent cust-transition'
        to='about'
        smooth={true}
      >
        {t('navbar.about')}
      </Link>
      <Link className='cursor-pointer hover:text-accent cust-transition'
        smooth={true}
        to='works'>
          {t('navbar.myworks')}
      </Link>
      <Link className='cursor-pointer hover:text-accent cust-transition'
        smooth={true}
        to='contacts'>
          {t('navbar.contacts')}
      </Link>
    </nav>
  )
};

export default Nav;
