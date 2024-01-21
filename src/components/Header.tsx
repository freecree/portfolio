import Nav from './Nav';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  return (
    <header className='py-10 flex container mx-auto justify-center items-center text-[18px]'>
      <Nav className='ml-auto'/>
      <LanguageSwitcher className='ml-auto'/>
    </header>
  )
};

export default Header;
