import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const NavHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  ${mediaBp('desktop')} {
    flex-direction: row;
  }
`;

export const TextWrapper = styled.div`
  padding: 12px 24px;
  ${mediaBp('desktop')} {
    border: 2px solid #fff;
  }
`;
