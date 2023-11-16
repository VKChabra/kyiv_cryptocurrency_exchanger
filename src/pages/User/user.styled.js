import styled from '@emotion/styled';
import { setBgImage } from '../../helpers/setBgImage';
import { NavLink } from 'react-router-dom';
import mediaBp from 'styles/breakpoints';

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 700;
  line-height: 100%;
  ${mediaBp('huge')} {
    font-size: calc(8px + 1vw);
    margin-left: 20px;
  }
`;
export const ProfileWrapper = styled.div`
  ${mediaBp('tablet')} {
    display: flex;
    margin: 0 auto;
  }
  ${mediaBp('desktop')} {
    display: flex;
    margin: 0 auto;
  }
  ${mediaBp('huge')} {
    display: flex;
    margin: 0 auto;
    font-size: calc(8px + 1vw);
  }
`;
export const Box = styled.div`
  flex-direction: column;
  align-items: center;

  ${mediaBp('tablet')} {
    width: 840px;
    padding: 20px 20px;
  }
  ${mediaBp('desktop')} {
    min-width: 840px;
    padding: 20px 20px;
  }
  ${mediaBp('huge')} {
    min-width: 1200px;
    width: 70%;
    padding: 20px 20px;
  }
`;
export const Content = styled.div`
  text-align: center;
  padding: 10px 10px;
`;
export const Avatar = styled.div`
  border-radius: 50%;
  text-align: center;
  background-image: ${setBgImage};
  margin: 0 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: white;
  line-height: 3em;
  width: 50px;
  height: 50px;
  ${mediaBp('tablet')} {
    display: none;
  }
  ${mediaBp('desktop')} {
    display: none;
  }
  ${mediaBp('huge')} {
    display: none;
  }
`;

// ====================================
export const InputText = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  ${mediaBp('desktop')} {
    margin-right: 50px;
    font-size: 16px;
    font-weight: 700;
  }
  ${mediaBp('huge')} {
    margin-right: 50px;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const BoxR = styled.div`
  align-items: center;
`;

export const LinkGo = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: ${({ theme }) => theme.colors.hovers};
  }
`;
export const Link = styled(NavLink)`
  display: flex;
  cursor: pointer;
  margin-right: 16px;
  color: ${({ theme }) => theme.colors.primary};
  &.active {
    color: ${({ theme }) => theme.colors.hovers};
    text-decoration: underline;
  }
  svg {
    display: none;
  }
  ${mediaBp('tablet')} {
    margin-right: 0px;
    margin-top: 50px;
    padding-left: 20px;
    align-items: center;
    width: 160px;
    height: 50px;
    border-right: none;
    svg {
      width: 25px;
      height: 25px;
      display: block;
      fill: ${({ theme }) => theme.colors.primary};
      margin-right: 10px;
    }
    &.active {
      border: 2px solid ${({ theme }) => theme.colors.primary};
      border-right: transparent;
      background-color: ${({ theme }) => theme.colors.body};
      margin-right: -2px;
      text-decoration: none;
    }
  }
  ${mediaBp('desktop')} {
    padding-left: 20px;
    align-items: center;
    max-width: 304px;
    height: 60px;
    margin-top: 60px;
    margin-right: 0;
    margin-left: 20%;
    border-right: none;
    overflow: hidden;
    svg {
      width: 25px;
      height: 25px;
      display: block;
      fill: ${({ theme }) => theme.colors.primary};
      margin-right: 10px;
    }
    &.active {
      border: 2px solid ${({ theme }) => theme.colors.primary};
      border-right: transparent;
      background-color: ${({ theme }) => theme.colors.body};
      margin-right: -2px;
      text-decoration: none;
    }
  }
  ${mediaBp('huge')} {
    padding-left: 20px;
    align-items: center;
    height: 60px;
    margin-top: calc(12vh);
    margin-left: calc(4vw);
    margin-right: 0;
    border-right: none;
    overflow: hidden;
    svg {
      width: 25px;
      height: 25px;
      display: block;
      fill: ${({ theme }) => theme.colors.primary};
    }
    &.active {
      border: 2px solid ${({ theme }) => theme.colors.primary};
      border-right: transparent;
      background-color: ${({ theme }) => theme.colors.body};
      text-decoration: none;
      margin-right: -2px;
    }
  }
`;
export const ProfileNav = styled.div`
  display: flex;
  padding: 10px 20px;
  ${mediaBp('tablet')} {
    background-image: url('${({ theme }) => theme.colors.background}');
    background-size: cover;
    max-width: 250px;
    display: block;
    padding: 0;
    flex-direction: column;
    height: 100%;
    border-right: 2px solid ${({ theme }) => theme.colors.primary};
  }
  ${mediaBp('desktop')} {
    padding: 0;
    display: flex;
    flex-direction: column;
    background-image: url('${({ theme }) => theme.colors.background}');
    background-size: cover;
    background-repeat: no-repeat;
    width: 390px;
    height: 100%;
    border-right: 2px solid ${({ theme }) => theme.colors.primary};
  }
  ${mediaBp('huge')} {
    padding: 0;
    display: flex;
    flex-direction: column;
    background-image: url('${({ theme }) => theme.colors.background}');
    background-size: cover;
    background-repeat: no-repeat;
    width: 25vw;
    height: calc(85vh - 20px);
    border-right: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  ${mediaBp('tablet')} {
    flex-direction: column;
    margin: 0 0 40px 70px;
  }
  ${mediaBp('desktop')} {
    flex-direction: column;
  }
  ${mediaBp('huge')} {
    flex-direction: column;
  }
`;

export const ExitButton = styled.button`
  cursor: pointer;
  border: none;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  svg {
    display: none;
  }
  :hover {
    color: ${({ theme }) => theme.colors.hovers};
    text-decoration: underline;
  }

  ${mediaBp('tablet')} {
    background: transparent;
    :hover {
      text-decoration: none;
      background-color: ${({ theme }) => theme.colors.body};
    }
    border: 2px solid ${({ theme }) => theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 44px;
    margin: 140px 100px 40px 100px;
    svg {
      width: 25px;
      height: 25px;
      display: block;
      fill: ${({ theme }) => theme.colors.primary};
      margin-right: 10px;
    }
  }
  ${mediaBp('desktop')} {
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    &.active,
    :hover {
      color: ${({ theme }) => theme.colors.hovers};
      text-decoration: none;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 44px;
    margin: 140px 120px 80px 120px;
    svg {
      width: 25px;
      height: 25px;
      display: block;
      fill: ${({ theme }) => theme.colors.primary};
      margin-right: 10px;
    }
    :hover {
      color: ${({ theme }) => theme.colors.hovers};
      text-decoration: none;
      background-color: ${({ theme }) => theme.colors.body};
    }
  }
  ${mediaBp('huge')} {
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    &.active,
    :hover {
      color: ${({ theme }) => theme.colors.hovers};
      text-decoration: none;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: calc(12vh);
    margin-left: calc(8vw);
    width: 7vw;
    height: 7vh;
    svg {
      width: 25px;
      height: 25px;
      display: block;
      fill: ${({ theme }) => theme.colors.primary};
    }
    :hover {
      color: ${({ theme }) => theme.colors.hovers};
      text-decoration: none;
      background-color: ${({ theme }) => theme.colors.body};
    }
  }
`;
export const TextReview = styled.div`
  color: ${({ theme }) => theme.colors.hovers};
  padding: 20px;
`;
