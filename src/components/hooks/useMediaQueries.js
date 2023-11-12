import { bp } from 'styles/breakpoints';
import { useMediaQuery } from 'react-responsive';

const useMediaQueries = () => {
  const isMobile = useMediaQuery({ maxWidth: bp.tablet - 1 });
  const isTablet = useMediaQuery({ minWidth: bp.tablet, maxWidth: bp.desktop - 1 });
  const isDesktop = useMediaQuery({ minWidth: bp.desktop, maxWidth: bp.huge - 1 });
  const isHuge = useMediaQuery({ minWidth: bp.huge });

  return {
    isMobile,
    isTablet,
    isDesktop,
    isHuge,
  };
};

export default useMediaQueries;
