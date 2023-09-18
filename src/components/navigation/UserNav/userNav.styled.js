import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const UserWrapper = styled.div`
  align-items: baseline;
  align-self: center;
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  ${mediaBp('desktop')} {
    flex-direction: row;
  }
`;

export const Button = styled.button`
  color: inherit;
  font-size: inherit;
  cursor: pointer;
`;
