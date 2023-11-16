import styled from '@emotion/styled';
import { setBgImage } from 'helpers/setBgImage';
import mediaBp from 'styles/breakpoints';

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  flex-direction: column;
  ${mediaBp('desktop')} {
    display: flex;
    align-items: baseline;
    margin-left: 60px;
    flex-direction: row;
  }
  ${mediaBp('huge')} {
    display: flex;
    align-items: baseline;
    margin-left: 60px;
    flex-direction: row;
    align-items: center;
  }
`;

export const Button = styled.button`
  color: inherit;
  cursor: pointer;
  ${mediaBp('huge')} {
    font-size: calc(6px + 1vw);
  }
`;

export const Text = styled.span`
  text-shadow: 1px 1px 4px black;
  ${mediaBp('desktop')} {
    text-shadow: none;
  }
  ${mediaBp('huge')} {
    text-shadow: none;
  }
`;

// avatar with name
export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mediaBp('desktop')} {
    margin-left: calc(16px + 4vw);
  }
  ${mediaBp('huge')} {
    margin-left: calc(16px + 4vw);
  }
`;

export const TextHeader = styled.p`
  display: none;
  ${mediaBp('desktop')} {
    display: block;
  }
  ${mediaBp('huge')} {
    display: block;
    font-size: calc(6px + 1vw);
  }
`;

export const AvatarHeader = styled.div`
  cursor: ${({ role }) => (role === 'admin' ? 'pointer' : 'auto')};
  display: block;
  border-radius: 50%;
  text-align: center;
  background-image: ${setBgImage};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: white;
  line-height: 3em;
  width: 50px;
  height: 50px;
  ${mediaBp('desktop')} {
    margin-left: 20px;
  }
  ${mediaBp('huge')} {
    margin-left: 20px;
  }
`;
