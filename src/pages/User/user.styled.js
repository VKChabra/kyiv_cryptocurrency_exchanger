import styled from '@emotion/styled';
import { setBgImage } from '../../helpers/setBgImage';
import { NavLink } from 'react-router-dom';
import mediaBp from 'styles/breakpoints';
export const Profile = styled.div`
  ${mediaBp('desktop')} {
    width: 100%;
    height: 100%;
  }
`;
export const ProfileHeader = styled.div`
  display: none;
  @media ${mediaBp('desktop')} {
    justify-content: flex-end;
    display: flex;
    height: 120px;
    margin-top: -120px;
    width: 100%;
    align-items: center;
  }
`;
export const AvatarHeader = styled.div`
  displey: none;
  @media ${mediaBp('tablet')} {
    border-radius: 50%;
    text-align: center;
    background-image: ${setBgImage};
    margin-left: 26px;
    margin-right: 113px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: white;
    line-height: 3em;
    width: 50px;
    height: 50px;
  }
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};

  @media ${mediaBp('tablet')} {
  }
  @media ${mediaBp('desktop')} {
    font-size: 16px;
    font-weight: 700;
    line-height: 100%;
  }
`;
export const ProfileWrapper = styled.div`
  @media ${mediaBp('tablet')} {
  }
  @media ${mediaBp('desktop')} {
    display: flex;
  }
`;
export const Content = styled.div`
  text-align: center;
  @media ${mediaBp('tablet')} {
  }
  @media ${mediaBp('desktop')} {
    width: 900px;
    padding: 80px 80px;
  }
`;
export const Avatar = styled.div`
  border-radius: 50%;
  text-align: center;
  background-image: ${setBgImage};
  margin-left: 26px;
  margin-right: 113px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: white;
  line-height: 3em;
  width: 50px;
  height: 50px;
  @media ${mediaBp('tablet')} {
  }
  @media ${mediaBp('desktop')} {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    text-align: center;
    background-image: ${setBgImage};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: white;
    line-height: 3em;
    font-size: 2em;
  }
`;
export const InputText = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  @media ${mediaBp('tablet')} {
  }
  @media ${mediaBp('desktop')} {
    margin-right: 50px;
    font-size: 16px;
    font-weight: 700;
  }
`;
export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primary};

  @media ${mediaBp('tablet')} {
  }
  @media ${mediaBp('desktop')} {
    font-weight: 700;
    line-height: 100%;
    margin-bottom: 20px;
    font-size: 20px;
  }
`;
export const Flex = styled.div`
  @media ${mediaBp('tablet')} {
  }
  @media ${mediaBp('desktop')} {
    display: flex;
    height: 120px;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 20px;
  }
`;
export const BoxR = styled.div`
  align-items: center;
  @media ${mediaBp('tablet')} {
  }
  @media ${mediaBp('desktop')} {
  }
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
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.primary};
  &.active {
    color: ${({ theme }) => theme.colors.hovers};
    text-decoration: underline;
  }
  svg {
    display: none;
  }
  @media ${mediaBp('tablet')} {
  }
  @media ${mediaBp('desktop')} {
    display: inline-flex;
    align-items: center;
    padding-left: 20px;
    width: 304px;
    height: 60px;
    margin-top: 40px;
    border-right: none;
    &.active {
      border: 2px solid ${({ theme }) => theme.colors.primary};
      border-right: transparent;
      background-color: ${({ theme }) => theme.colors.body};
      margin-right: -2px;
    }
  }
`;
export const ProfileNav = styled.div`
  display: flex;
  padding: 15px 50px;
  @media ${mediaBp('tablet')} {
  }
  @media ${mediaBp('desktop')} {
    border-right: 2px solid ${({ theme }) => theme.colors.primary};
    background-image: url('${({ theme }) => theme.colors.background}');
    background-size: cover;
    display: flex;
    flex-wrap: wrap;
    width: 390px;
    height: 100%;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media ${mediaBp('tablet')} {
  }
  @media ${mediaBp('desktop')} {
    height: 400px;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
`;

export const ExitButton = styled.button`
cursor: pointer;
font-size: 16px;
color: ${({ theme }) => theme.colors.primary};
svg {
    display: none;
  }
  &.active {
    color: ${({ theme }) => theme.colors.hovers};
    text-decoration: underline;
  }
  }
  @media ${mediaBp('tablet')} {
  }
  @media ${mediaBp('desktop')} {
  
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.body};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 140px;
    height: 44px;
    margin: 140px 120px 40px 120px;
  }
`;
// export const Text = styled.p`
//   margin-left: 10px;
// `;
