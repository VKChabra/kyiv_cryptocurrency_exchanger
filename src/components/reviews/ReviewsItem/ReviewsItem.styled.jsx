import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 430px;
  height: 341px;
  margin-bottom: 30px;
  padding: 52px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 0px 0px 0px 0px;
  border: 2px solid #ffffff;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.02);
  }
`;
export const NameWpapper = styled.div`
  margin-bottom: 50px;
`;

export const Name = styled.p`
  text-align: center;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 170px;
  width: 80px;
  overflow: hidden;
  top: -60px;
  left: -40px;
  width: 158px;
  padding: 6px 20px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  p {
    text-align: center;
    font-size: 90px;
  }
`;
export const ReviewWpapper = styled.div`
  height: 210px;
`;

export const ReviewDate = styled.p`
  text-align: right;
`;
