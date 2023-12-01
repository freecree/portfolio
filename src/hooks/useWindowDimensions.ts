import { useEffect, useState} from 'react';

interface WindowDimensions {
  width: number;
  height: number;
}

type UseWindowDimensions = [WindowDimensions, React.Dispatch<React.SetStateAction<WindowDimensions>>];

export default function useWindowDimensions(): UseWindowDimensions{
  function getWindowDimensions(): WindowDimensions {
    const {innerWidth, innerHeight} = window;
    
    return {width: innerWidth, height: innerHeight};
  }
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [windowDimensions, setWindowDimensions];
}