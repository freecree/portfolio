import { useState } from 'react';
import avatar from '../assets/avatar_about.png';
import { useTranslation } from 'react-i18next';

function About() {
  const [activeTab, setActiveTab] = useState<'skills' | 'education'>('skills');
  const [activeSkillTab, setActiveSkillTab] = useState<'frontend' | 'backend' | 'english'>('frontend');
  const [t] = useTranslation();

  return ( 
    <section id='about' className='relative flex items-start gap-[60px] max-md:container mx-auto pt-[105px]'>
      <div className="basis-2/5 xl:basis-auto hidden md:block">
        <img src={avatar} alt="Full stack developer" className='rounded-r-[70px]'/>
      </div>
      <div className='max-w-[700px] md:pr-[20px] md:basis-3/5 xl:basis-auto pt-[40px] pb-[40px]'>
        <h2 className='h2 mb-[27px]'>{t('about-me.title')}</h2>
        <p className=''>{t('about-me.description1')}</p>
        <div className="flex gap-[20px] mt-[20px]">
          <h3 className={`h3 hover:text-accent cursor-pointer cust-transition ${(activeTab === 'skills') ? 'text-accent' : ''}`}
            onClick={() => setActiveTab('skills')}>
              {t('about-me.skills')}
          </h3>
          <h3 className={`h3 hover:text-accent cursor-pointer cust-transition ${(activeTab === 'education') ? 'text-accent' : ''}`}
            onClick={() => setActiveTab('education')}>
            {t('about-me.education')}
          </h3>
        </div>
        <div className={(activeTab === 'skills') ? 'block' : 'hidden '}>
          <div className={`flex gap-[20px] text-accent text-[20px] mt-[14px] `}>
            <h4 className={`group relative cursor-pointer cust-transition ${(activeSkillTab === 'frontend') ? 'active' : ''}`}
              onClick={() => setActiveSkillTab('frontend')}>
              {t('about-me.frontend')}
              <span className='bg-accent absolute bottom-0 left-0 w-0 h-[2px] cust-transition group-hover:w-full group-[.active]:w-full'></span>
            </h4>
            <h4 className={`group relative cursor-pointer cust-transition ${(activeSkillTab === 'backend') ? 'active' : ''}`}
              onClick={() => setActiveSkillTab('backend')}>
              {t('about-me.backend')}
              <span className='bg-accent absolute bottom-0 left-0 w-0 h-[2px] cust-transition group-hover:w-full group-[.active]:w-full'></span>
            </h4>
            <h4 className={`group relative cursor-pointer cust-transition ${(activeSkillTab === 'english') ? 'active' : ''}`}
              onClick={() => setActiveSkillTab('english')}>
              {t('about-me.english')}
              <span className='bg-accent absolute bottom-0 left-0 w-0 h-[2px] cust-transition group-hover:w-full group-[.active]:w-full' ></span>
            </h4>
          </div>
          <ul className={`mt-[18px] list-disc pl-[15px] ${(activeSkillTab === 'frontend') ? '' : 'hidden'}`}>
            {(t('about-me.frontend-list',
            {returnObjects: true, defaultValue: []}) as string[]).map((item, i) => 
              <li key={i}>{item}</li>
            )}
          </ul>
          <ul className={`mt-[18px] ${(activeSkillTab === 'backend') ? '' : 'hidden'}`}>
            <li>{t('about-me.backend-main')}
              <ul className='list-disc pl-[15px]'>
                {(t('about-me.backend-main-list',
                {returnObjects: true, defaultValue: []}) as string[]).map((item, i) => 
                  <li key={i}>{item}</li>
                )}
              </ul>
            </li>
            <li>{t('about-me.backend-other')}
              <ul className='list-disc pl-[15px]'>
                {(t('about-me.backend-other-list',
                {returnObjects: true, defaultValue: []}) as string[]).map((item, i) => 
                  <li key={i}>{item}</li>
                )}
              </ul>
            </li>
          </ul>
          <div className={`mt-[18px] ${(activeSkillTab === 'english') ? '' : 'hidden'}`}>
            <p>{t('about-me.english-grade')}</p>
          </div>
        </div>
        <ul className={`list-disc pl-[15px] mt-[18px] ${(activeTab === 'education') ? '' : 'hidden '}`}>
          <li>
          {t('about-me.master')}
          </li>
          <li>
          {t('about-me.bachelor')}
          </li>
        </ul>
      </div>
      <div className='absolute w-[60%] h-[30vh] right-0 bottom-[-100px] z-[-1] rounded-[50%] blur-[200px] bg-bg_light1'></div>
    </section>
   );
}

export default About;