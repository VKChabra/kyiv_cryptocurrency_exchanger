import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const Wrap = styled.div`
  ${mediaBp('tablet')} {
    display: flex;
    justify-content: space-evenly;
  }
  ${mediaBp('desktop')} {
    display: flex;
  }
  ${mediaBp('huge')} {
    display: flex;
  }
`;

export const Frame = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  ${mediaBp('tablet')} {
    flex: 67%;
  }
  ${mediaBp('desktop')} {
    flex: 67%;
  }
  ${mediaBp('huge')} {
    flex: 67%;
  }
`;

export const Icon = styled.div`
  font-size: 36px;
  width: 64px;
  ${mediaBp('desktop')} {
    font-size: 48px;
  }
  ${mediaBp('huge')} {
    font-size: 48px;
  }
`;
