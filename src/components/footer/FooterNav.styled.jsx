import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const NavFooter = styled.div`
  display: flex;
  align-items: center;
  ${mediaBp('tablet')} {
    & > * {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
  ${mediaBp('huge')} {
    font-size: calc(6px + 1vw);
  }
`;

export const Text = styled.span`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  ${mediaBp('huge')} {
    font-weight: normal;
    font-size: calc(4px + 1vw);
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  ${mediaBp('desktop')} {
    align-items: flex-start;
    margin-left: 10px;
    margin-right: 190px;
  }
  ${mediaBp('huge')} {
    align-items: flex-start;
    margin-left: 20px;
    margin-right: 190px;
  }
`;

export const InfoList = styled.ul`
  list-style: none;
  background-color: transparent;
  z-index: 0;
  ${mediaBp('desktop')} {
    position: absolute;
    padding-top: 50px;
  }
  ${mediaBp('huge')} {
    position: absolute;
    padding-top: 50px;
  }
`;

export const InfoItem = styled.li`
  width: fit-content;
  letter-spacing: 0;
  white-space: nowrap;
  ${mediaBp('desktop')} {
    margin-bottom: 30px;
    &:last-child {
      padding-bottom: 0;
    }
  }
  ${mediaBp('huge')} {
    font-size: calc(6px + 1vw);
    margin-bottom: 30px;
    &:last-child {
      padding-bottom: 0;
    }
  }
`;

export const InfoText = styled.p`
  color: #fff;
  font-size: 90%;
  font-style: normal;
  font-weight: 300;
  line-height: 16px;
`;

export const SocialList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  list-style: none;
  background-color: transparent;
  z-index: 4;
  ${mediaBp('desktop')} {
    position: absolute;
    width: 280px;
    padding-top: 50px;
    padding-left: 5px;
  }
  ${mediaBp('huge')} {
    position: absolute;
    width: 280px;
    padding-top: 50px;
    padding-left: 5px;
  }
`;

export const SocialItem = styled.li`
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
`;

export const SocialLink = styled.a``;
