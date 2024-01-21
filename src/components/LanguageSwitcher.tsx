import { useState, useEffect } from 'react';
import Icon from './ui/Icon';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({className}: {className?: string}) => {
  const [t, i18n] = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { name: "English", code: "en" },
    { name: "Ukrainian", code: "ukr" },
  ];

  function handleChangeLanguage(code: string) {
    i18n.changeLanguage(code);
  }

  function closeLanguageSwitcher() {
    setIsOpen(false);
  }

  useEffect(() => {
    document.addEventListener("click", closeLanguageSwitcher);
    return () => {
      document.removeEventListener("click", closeLanguageSwitcher);
    };
  }, []);

  return (
    <div className={className}
      onClick={(e) => {e.stopPropagation(); setIsOpen(!isOpen)}}
    >
      <div className='flex items-center gap-2 cursor-pointer relative'>
        <span className='font-bold text-accent'>
          {i18n.language}
        </span>
        <Icon className={`cust-transition ${isOpen ? 'rotate-180': ''}`} color='#AC0DF7' name='angle_b' width={18} height={11}/>
      </div>
      <ul className={`absolute z-[2] cust-transition ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        {languages.map(({code}) => 
          <li key={code} className='cursor-pointer hover:text-accent cust-transition' onClick={() => handleChangeLanguage(code)}>
            {code}
          </li>
        )}
      </ul>
    </div>
  )
}
export default LanguageSwitcher;