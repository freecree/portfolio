import {Link} from 'react-scroll';
import avatar from '../assets/avatar_main.png';
import Icon from './ui/Icon';
import { useTranslation } from 'react-i18next';

function Main() {
  const [t] = useTranslation();

  return (
    <section className='relative mx-auto min-h-[calc(100vh-110px)] flex items-center'>
      <div className='absolute w-[60%] h-[40vh] left-0 top-0 z-[-1] rounded-[50%] blur-[250px] bg-bg_light1'></div>
      <div className='absolute w-[60%] h-[30vh] right-0 bottom-[100px] z-[-2] rounded-[50%] blur-[250px] bg-bg_light2'></div>
      <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center space-x-14 justify-center ">
        <div className='md:w-auto lg:w-[483px] shrink'>
          <h2 className='h1'>{t('main.title')}</h2>
          <p className="text-[25px] mt-0.5 font-title">{t('main.sub-title')}</p>
          <p className="text-[20px] mt-[30px]">
            {t('main.text')}
          </p>
          <div className="flex flex-col xxsm:flex-row items-center gap-[16px] mt-[35px]">
            <Link className="btn btn-fill"
              smooth={true}
              to="contacts">
                {t('main.contact-me')}
              </Link>
            <Link className="btn btn-outline" data-text={t('main.my-works')}
              smooth={true}
              to="works">
            </Link>
          </div>
          <div className="flex justify-center xxsm:justify-start gap-[24px] mt-[25px]">
            <a target='_blank' href="https://github.com/freecree">
              <Icon name='github' width={25} height={25} className='icon-hover cust-transition' />
            </a>
            <a target='_blank' href="https://www.linkedin.com/in/bohdan-sidorov">
              <Icon name='linkedin' width={25} height={25} className='icon-hover' />
            </a>
            <a target='_blank' href="https://telegram.me/ferragus_S">
              <Icon name='telegram' width={25} height={25} className='icon-hover' />
            </a>
          </div>
        </div>
        <div className='shrink-0 w-[40%] hidden md:block'>
          <img src={avatar} alt="Full stack developer" />
        </div>
      </div>
    </section>
   );
}

export default Main;