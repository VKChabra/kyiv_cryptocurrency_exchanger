export const bp = {
  mobile: 320,
  tablet: 768,
  desktop: 1280,
  huge: 2000,
};

const mediaBp = type => {
  if (type === 'mobile') {
    return `@media (min-width: ${bp.mobile}px and (max-width: ${bp.tablet}px)`;
  } else if (type === 'tablet') {
    return `@media (min-width: ${bp.tablet}px) and (max-width: ${bp.desktop}px)`;
  } else if (type === 'desktop') {
    return `@media (min-width: ${bp.desktop}px) and (max-width: ${bp.huge}px)`;
  } else if (type === 'huge') {
    return `@media (min-width: ${bp.huge}px)`;
  }
};

export default mediaBp;
