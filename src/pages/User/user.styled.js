import styled from '@emotion/styled';
import { setBgImage } from '../../helpers/setBgImage';
import { NavLink } from 'react-router-dom';
export const Profile = styled.div`
  width: 100%;
  height: 100%;
`;
export const ProfileHeader = styled.div`
  justify-content: flex-end;
  display: flex;
  height: 120px;
  margin-top: -120px;
  width: 100%;
  align-items: center;
`;
export const AvatarHeader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  background-image: ${setBgImage};
  margin-left: 26px;
  margin-right: 113px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: white;
  line-height: 3em;
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;
export const ProfileWrapper = styled.div`
  display: flex;
`;
export const Content = styled.div`
  width: 900px;
  padding: 80px 80px;
  text-align: center;
`;
export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  background-image: ${setBgImage};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: white;
  line-height: 3em;
  font-size: 2em;
`;
export const InputText = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-right: 50px;
`;
export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin-bottom: 20px;
`;
export const Flex = styled.div`
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
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
