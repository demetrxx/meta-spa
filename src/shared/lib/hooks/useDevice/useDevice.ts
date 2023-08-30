import { useEffect, useState } from 'react';

export const useDevice = (screen: number) => {
  const [hasMatch, setHasMatch] = useState(false);

  useEffect(() => {
    const handleResize = () => setHasMatch(window.matchMedia(`(min-width: ${screen}px)`).matches);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); // удаляем обработчик
  }, [screen]);

  return hasMatch;
};
