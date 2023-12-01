import { useEffect, useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';

import workPrewiev1 from '../assets/work1.png';
import workPrewiev2 from '../assets/work2.png';
import workPrewiev3 from '../assets/work3.png';
import workPrewiev4 from '../assets/work4.png';
import tailwindConfig from '../../tailwind.config';

function Works() {
  const [windowDimensions, setWindowDimensions] = useWindowDimensions();

  const reseizeEdge = +(tailwindConfig.theme.screens.sm.slice(0, -2));
  const worksIncrement = (windowDimensions.width > reseizeEdge) ? 4 : 2;
  const [visibleWorksNumber, setVisibleWorksNumber] = useState<number>(worksIncrement);

  const works = [
    {src: workPrewiev1, title: 'Site for dog kennel "Iz Vladeniya Akello"', link: 'https://freecree.github.io/pedigree/'},
    {src: workPrewiev2, title: 'Landing page for Landing Studio', link: 'https://freecree.github.io/land-site/'},
    {src: workPrewiev3, title: 'Layout of small CRM', link: 'https://freecree.github.io/crm/'},
    {src: workPrewiev4, title: 'Web system "Hand marking"', link: 'http://51.20.77.94/'},
  ]


  function onShowMore() {
    setVisibleWorksNumber(v => v + worksIncrement);
  }
  function onHide() {
    if (visibleWorksNumber - worksIncrement < 1) return;
    setVisibleWorksNumber(worksIncrement);
  }

  return (
    <section id='works' className="pt-[100px] pb-[40px] container mx-auto max-w-[1500px] text-center">
      <h2 className="h2 text-center">My works</h2>
      <div className="mt-[80px] grid sm:grid-cols-2 gap-4">
        {works.slice(0, visibleWorksNumber).map((work, i) =>
          (
            <div key={i} className="group relative cursor-pointer">
              <img src={work.src} alt={work.title} className='object-cover h-[100%] relative z-0'/>
              <div className='p-[10px] absolute w-full h-full flex items-center justify-center top-0
                text-white bg-[rgba(0,0,0,0.8)] cust-transition opacity-0 invisible
                group-hover:visible group-hover:opacity-100'>
                <div className="text-center">
                  <h3 className='h3 text-[16px] md:text-[18px] mb-[20px]'>{work.title}</h3>
                  <a href={work.link} target='_blank'>
                    <button className='btn btn-fill m-auto h-auto w-auto text-[15px] md:text-[18px] px-[25px] py-[12px]'>View project</button>
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      {
        (visibleWorksNumber < works.length) && (
        <div
          onClick={onShowMore}
          className='m-auto mt-[25px] inline-flex gap-2 items-center justify-center cursor-pointer'>
          <div className="text-[20px] text-accent font-bold">Show more</div>
          <div className='bg-angle_b w-[16px] h-[9px] bg-contain bg-no-repeat'></div>
        </div>
        )
      }
      {
        ((visibleWorksNumber >= works.length) && (visibleWorksNumber > worksIncrement)) && (
        <div
          onClick={onHide}
          className='m-auto mt-[25px] inline-flex gap-2 items-center justify-center cursor-pointer'>
          <div className="text-[20px] text-accent font-bold">Hide</div>
          <div className='bg-angle_b w-[16px] h-[9px] bg-contain bg-no-repeat rotate-180'></div>
        </div>
        )
      }
    </section>
   );
}

export default Works;