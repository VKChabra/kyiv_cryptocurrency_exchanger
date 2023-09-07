import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 530px;
  height: 350px;
  padding: 52px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border: 2px solid #ffffff;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.02);
  }
`;

export const BlackElipse = styled.img`
  position: absolute;
  top: -60px;
  left: -40px;
  fill: ${({ theme }) => theme.colors.primary};
`;

export const PurpleElipse = styled.img`
  position: absolute;
  top: -50px;
  left: -30px;
  z-index: 10;
`;

export const OrangeElipse = styled.img`
  position: absolute;
  top: -50px;
  left: -30px;
  z-index: 15;
  width: 180px;
  height: 184px;
  border-radius: 183.678px;
`;

export const NameLetter = styled.p`
  position: absolute;
  top: -10px;
  left: 35px;
  z-index: 18;
  text-align: center;
  color: #fff;
  font-family: Roboto;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 96px;
`;

export const NameWpapper = styled.div`
  margin-bottom: 40px;
`;

export const Name = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
`;

export const ReviewWpapper = styled.div`
  height: 200px;
  width: 400px;
  margin-bottom: 40px;
  display: flex;
  justify-content: flex-start;
  p {
    color: ${({ theme }) => theme.colors.primary};
    text-align: left;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const DateStarWpapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
`;

export const ReviewDate = styled.p`
  color: ${({ theme }) => theme.colors.primary};
`;
