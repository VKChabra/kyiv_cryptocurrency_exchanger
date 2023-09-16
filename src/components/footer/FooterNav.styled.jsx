import styled from '@emotion/styled';

export const NavFooter = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  margin-right: 190px;
  position: relative;
`;

export const InfoList = styled.ul`
  position: absolute;
  padding-top: 50px;
  list-style: none;
  background-color: transparent;
  z-index: 4;
`;

export const InfoItem = styled.li`
  width: fit-content;
  margin-bottom: 30px;
  font-size: 16px;
  letter-spacing: 0;
  white-space: nowrap;
  &:last-child {
    padding-bottom: 0;
  }
`;

export const InfoText = styled.p`
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px;
`;

export const SocialList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 280px;
  padding-top: 50px;
  padding-left: 5px;
  list-style: none;
  background-color: transparent;
  z-index: 4;
`;

export const SocialItem = styled.li`
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
`;
