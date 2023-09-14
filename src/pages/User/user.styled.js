import styled from '@emotion/styled';
import { setBgImage } from '../../helpers/setBgImage';
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
export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  background-image: ${setBgImage};
  margin-left: 26px;
  margin-right: 113px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
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
