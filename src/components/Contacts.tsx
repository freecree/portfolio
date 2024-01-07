import iconTelegram from '../assets/icon_telegram.svg';
import iconEmail from '../assets/icon_email.svg';
import iconLinkedin from '../assets/icon_linkedin.svg';
import iconGithub from '../assets/icon_github.svg';
import Icon from './ui/Icon';

function Contacts() {
  return ( 
    <section id='contacts' className="relative h-[100vh] flex justify-center items-center">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="h1 md:text-[50px] text-center">Let’s work together!</h1>
        <div className="mt-[55px]">
          <div className="flex items-center gap-[20px] mt-[10px]">
            <a target='_blank' href="https://telegram.me/ferragus_S">
              <Icon name='telegram' width={25} height={25} className='icon-hover' />
            </a>
            <p className='text-[18px] sm:text-[25px]'>@ferragus_S</p>
          </div>
          <div className="flex items-center gap-[20px] mt-[10px]">
            <a target='_blank' href="mailto:bohdansidorov@gmail.com">
              <Icon name='email' width={25} height={25} className='icon-hover' />
            </a>
            <p className='text-[18px] sm:text-[25px]'>bohdansidorov@gmail.com</p>
          </div>
          <div className="flex items-center gap-[20px] mt-[10px]">
            <a target='_blank' href="https://www.linkedin.com/in/bohdan-sidorov">
              <Icon name='linkedin' width={25} height={25} className='icon-hover' />
            </a>
            <p className='text-[18px] sm:text-[25px]'>www.linkedin.com/in/bohdan-sidorov</p>
          </div>
          <div className="flex items-center gap-[20px] mt-[10px]">
            <a target='_blank' href="https://github.com/freecree">
              <Icon name='github' width={25} height={25} className='icon-hover' />
            </a>
            <p className='text-[18px] sm:text-[25px]'>https://github.com/freecree</p>
          </div>
        </div>
      </div>
      <div className='absolute w-[60%] h-[40vh] right-0 top-0 z-[-1] rounded-[50%] blur-[250px] bg-bg_light1'></div>
      <div className='absolute w-[60%] h-[40vh] left-0 bottom-[0] z-[-2] rounded-[50%] blur-[250px] bg-bg_light2'></div>
    </section>
   );
}

export default Contacts;