import { useState } from 'react';
import avatar from '../assets/avatar_about.png';

function About() {
  const [activeTab, setActiveTab] = useState<'skills' | 'education'>('skills');
  const [activeSkillTab, setActiveSkillTab] = useState<'frontend' | 'backend' | 'english'>('frontend');

  return ( 
    <section id='about' className='relative flex items-start gap-[60px] max-md:container mx-auto'>
      <div className="basis-2/5 xl:basis-auto hidden md:block">
        <img src={avatar} alt="Full stack developer" className='rounded-r-[70px]'/>
      </div>
      <div className='max-w-[700px] md:pr-[20px] md:basis-3/5 xl:basis-auto pt-[40px] pb-[40px]'>
        <h2 className='h2 mb-[27px]'>About me</h2>
        <p className=''>I am Full Stack developer with Experience above 1 year of creating various sites, including landings and other web pages using Html, Css/Scss, JS.
Now my main specialization is React but also I have strong knowledge of NodeJS and Express and SQL, NOSQL databases.</p>
        <p className='mt-[18px]'>
          From my university years I have a foundation in Math, understanding of programming paradigms, creating Web Api on Java (Spring) and PHP (Laravel) and base in C/C++. Besides that, I have experience in working with Python and creating CNN with Tensorflow while working on my diploma project. Such extensive knowledge helps me in developing of effective and reliable web systems.
        </p>
        <div className="flex gap-[20px] mt-[20px]">
          <h3 className={`h3 hover:text-accent cursor-pointer cust-transition ${(activeTab === 'skills') ? 'text-accent' : ''}`}
            onClick={() => setActiveTab('skills')}>
              Skills
          </h3>
          <h3 className={`h3 hover:text-accent cursor-pointer cust-transition ${(activeTab === 'education') ? 'text-accent' : ''}`}
            onClick={() => setActiveTab('education')}>
            Education
          </h3>
        </div>
        <div className={(activeTab === 'skills') ? 'block' : 'hidden '}>
          <div className={`flex gap-[20px] text-accent text-[20px] mt-[14px] `}>
            <h4 className={`group relative cursor-pointer cust-transition ${(activeSkillTab === 'frontend') ? 'active' : ''}`}
              onClick={() => setActiveSkillTab('frontend')}>
              Frontend
              <span className='bg-accent absolute bottom-0 left-0 w-0 h-[2px] cust-transition group-hover:w-full group-[.active]:w-full'></span>
            </h4>
            <h4 className={`group relative cursor-pointer cust-transition ${(activeSkillTab === 'backend') ? 'active' : ''}`}
              onClick={() => setActiveSkillTab('backend')}>
              Backend
              <span className='bg-accent absolute bottom-0 left-0 w-0 h-[2px] cust-transition group-hover:w-full group-[.active]:w-full'></span>
            </h4>
            <h4 className={`group relative cursor-pointer cust-transition ${(activeSkillTab === 'english') ? 'active' : ''}`}
              onClick={() => setActiveSkillTab('english')}>
              English
              <span className='bg-accent absolute bottom-0 left-0 w-0 h-[2px] cust-transition group-hover:w-full group-[.active]:w-full' ></span>
            </h4>
          </div>
          <ul className={`mt-[18px] list-disc pl-[15px] ${(activeSkillTab === 'frontend') ? '' : 'hidden'}`}>
            <li>HTML, CSS / SCSS;</li>
            <li>JavaScript(ES6) / Typescript;</li>
            <li>React, React Router;</li>
            <li>Axios;</li>
            <li>Mobx;</li>
            <li>i18next;</li>
            <li>Builders: Webpack, Gulp, Vite, Esbuild;</li>
          </ul>
          <ul className={`mt-[18px] ${(activeSkillTab === 'backend') ? '' : 'hidden'}`}>
            <li>Main stack:</li>
            <ul className='list-disc pl-[15px]'>
              <li>NodeJS, ExpressJS, Mongoose</li>
              <li>Databases: MongoDB, SQL;</li>
            </ul>
            <li>Additional technologies (base level):</li>
            <ul className='list-disc pl-[15px]'>
              <li>Java (Spring, Springboot, Hibernate);</li>
              <li>PHP (Laravel);</li>
              <li>C/C++;</li>
              <li>Python (Flask Api, Tensorflow, deep learning).</li>
            </ul>
          </ul>
          <div className={`mt-[18px] ${(activeSkillTab === 'english') ? '' : 'hidden'}`}>
            <p>Upper-Intermediate (B2)</p>
          </div>
        </div>
        <ul className={`list-disc pl-[15px] mt-[18px] ${(activeTab === 'education') ? '' : 'hidden '}`}>
          <li>Bachelor’s degree in Software Engineering, National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute”.
          </li>
          <li>
            Getting master degree in Software Engineering, National Technical University of Ukraine “Igor Sikorsky Kyiv Polytechnic Institute” on fifth year.
          </li>
        </ul>
      </div>
      <div className='absolute w-[60%] h-[30vh] right-0 bottom-[-100px] z-[-1] rounded-[50%] blur-[200px] bg-bg_light1'></div>
    </section>
   );
}

export default About;