import { useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { useTranslation } from 'react-i18next';

import tailwindConfig from '../../tailwind.config';
import works from '../data/works';
import getImageUrl from '../utils/image-util';

function Works() {
  const [windowDimensions, setWindowDimensions] = useWindowDimensions();

  const reseizeEdge = +(tailwindConfig.theme.screens.sm.slice(0, -2));
  const worksIncrement = (windowDimensions.width > reseizeEdge) ? 4 : 2;
  const [visibleWorksNumber, setVisibleWorksNumber] = useState<number>(worksIncrement);
  const [t, i18n] = useTranslation();

  function onShowMore() {
    setVisibleWorksNumber(v => v + worksIncrement);
  }
  function onHide() {
    if (visibleWorksNumber - worksIncrement < 1) return;
    setVisibleWorksNumber(worksIncrement);
  }

  const lng_prefix = i18n.language === 'en' ? '' : '_' + i18n.language;

  return (
    <section id='works' className="pt-[100px] pb-[40px] container mx-auto max-w-[1500px] text-center">
      <h2 className="h2 text-center">{t('my-works.title')}</h2>
      <div className="mt-[80px] grid sm:grid-cols-2 gap-4">
        {works.slice(0, visibleWorksNumber).map((work, i) =>
          (
            <div key={i} className="group relative cursor-pointer">
              <img src={getImageUrl(work.image)} alt={work.title} className='object-cover h-[100%] relative z-0'/>
              <div className='p-[10px] absolute w-full h-full flex items-center justify-center top-0
                text-white bg-[rgba(0,0,0,0.8)] cust-transition opacity-0 invisible
                group-hover:visible group-hover:opacity-100'>
                <div className="text-center">
                  <h3 className='h3 text-[16px] md:text-[18px] mb-[20px]'>{work[`title${lng_prefix}`]}</h3>
                  <a href={work.link} target='_blank'>
                    <button className='btn btn-fill m-auto h-auto w-auto text-[15px] md:text-[18px] px-[25px] py-[12px]'>{t('my-works.view-btn')}</button>
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
          <div className="text-[20px] text-accent font-bold">{t('my-works.show-more')}</div>
          <div className='bg-angle_b w-[16px] h-[9px] bg-contain bg-no-repeat'></div>
        </div>
        )
      }
      {
        ((visibleWorksNumber >= works.length) && (visibleWorksNumber > worksIncrement)) && (
        <div
          onClick={onHide}
          className='m-auto mt-[25px] inline-flex gap-2 items-center justify-center cursor-pointer'>
          <div className="text-[20px] text-accent font-bold">{t('my-works.hide')}</div>
          <div className='bg-angle_b w-[16px] h-[9px] bg-contain bg-no-repeat rotate-180'></div>
        </div>
        )
      }
    </section>
   );
}

export default Works;