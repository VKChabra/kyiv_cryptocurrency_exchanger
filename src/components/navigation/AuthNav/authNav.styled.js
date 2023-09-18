import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const RegistrationWrapper = styled.div`
  align-items: center;
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  ${mediaBp('desktop')} {
    flex-direction: row;
  }
`;
