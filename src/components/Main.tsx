import {Link} from 'react-scroll';
import avatar from '../assets/avatar_main.png';
import iconGithub from '../assets/icon_github.svg';
import iconLinkedin from '../assets/icon_linkedin.svg';
import iconTelegram from '../assets/icon_telegram.svg';
import Icons from '../assets/icons.svg';
import Icon from './ui/Icon';

function Main() {
  console.log('icons: ', Icons);
  
  return ( 
    <section className='relative mx-auto pt-[105px] pb-[105px]'>
      <div className='absolute w-[60%] h-[40vh] left-0 top-0 z-[-1] rounded-[50%] blur-[250px] bg-bg_light1'></div>
      <div className='absolute w-[60%] h-[30vh] right-0 bottom-[100px] z-[-2] rounded-[50%] blur-[250px] bg-bg_light2'></div>
      <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center space-x-14 justify-center ">
        <div className='md:w-auto lg:w-[483px] shrink'>
          <h2 className='h1'>Bohdan Sidorov</h2>
          <p className="text-[25px] mt-0.5">Full Stack developer</p>
          <p className="text-[20px] mt-[30px]">
            Full stack JavaScript developer with specialization in React and NodeJS. Experienced above 1 year of creating various sites, including landings and other web pages.
          </p>
          <div className="flex flex-col xxsm:flex-row items-center gap-[16px] mt-[35px]">
            <Link className="btn btn-fill"
              smooth={true}
              to="contacts">
                Contact me
              </Link>
            <Link className="btn btn-outline" data-text="My works"
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