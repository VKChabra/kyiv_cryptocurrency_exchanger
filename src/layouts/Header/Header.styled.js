import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const HeaderBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  text-align: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const NavWrap = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-left: 40px;
  padding-top: ${({ footer }) => (footer ? '10px' : 0)};
  display: none;
  ${mediaBp('desktop')} {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: green;
  width: max-content;
  height: max-content;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
`;

export const MobileButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 20px;
  padding: 0;

  div {
    width: 100%;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
