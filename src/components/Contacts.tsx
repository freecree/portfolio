import iconTelegram from '../assets/icon_telegram.svg';
import iconEmail from '../assets/icon_email.svg';
import iconLinkedin from '../assets/icon_linkedin.svg';
import iconGithub from '../assets/icon_github.svg';

function Contacts() {
  return ( 
    <section id='contacts' className="relative h-[100vh] flex justify-center items-center">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="h1 md:text-[50px] text-center">Let’s work together!</h1>
        <div className="mt-[55px]">
          <div className="flex items-center gap-[20px] mt-[10px]">
            <a target='_blank' href="https://telegram.me/ferragus_S">
              <img src={iconTelegram} width={25} alt="Telegram"/>
            </a>
            <p className='text-[18px] sm:text-[25px]'>@ferragus_S</p>
          </div>
          <div className="flex items-center gap-[20px] mt-[10px]">
            <a target='_blank' href="mailto:bohdansidorov@gmail.com">
              <img src={iconEmail} width={25} alt="Email"/>
            </a>
            <p className='text-[18px] sm:text-[25px]'>bohdansidorov@gmail.com</p>
          </div>
          <div className="flex items-center gap-[20px] mt-[10px]">
            <a target='_blank' href="https://www.linkedin.com/in/bohdan-sidorov">
              <img src={iconLinkedin} width={25} alt="LinkedIn"/>
            </a>
            <p className='text-[18px] sm:text-[25px]'>www.linkedin.com/in/bohdan-sidorov</p>
          </div>
          <div className="flex items-center gap-[20px] mt-[10px]">
            <a target='_blank' href="https://github.com/freecree/freecree.github.io">
              <img src={iconGithub} width={25} alt="Github"/>
            </a>
            <p className='text-[18px] sm:text-[25px]'>https://freecree.github.io/</p>
          </div>
        </div>
      </div>
      <div className='absolute w-[60%] h-[40vh] right-0 top-0 z-[-1] rounded-[50%] blur-[250px] bg-bg_light1'></div>
      <div className='absolute w-[60%] h-[40vh] left-0 bottom-[0] z-[-2] rounded-[50%] blur-[250px] bg-bg_light2'></div>
    </section>
   );
}

export default Contacts;