import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const UserWrapper = styled.div`
  align-items: baseline;
  align-self: center;
  display: flex;
  flex-direction: column;
  ${mediaBp('desktop')} {
    padding-left: 60px;
    flex-direction: row;
  }
`;

export const Button = styled.button`
  color: inherit;
  font-size: inherit;
  cursor: pointer;
`;
