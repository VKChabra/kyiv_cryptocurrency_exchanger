import styled from '@emotion/styled';
import { setBgImage } from '../../helpers/setBgImage';
export const Content = styled.div`
  width: 100%;
  padding: 80px;
`;
export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  text-align: center;
  background-image: ${setBgImage};
  border: 2px solid white;
  color: white;
  line-height: 3em;
  font-size: 2em;
`;
export const Text = styled.p`
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;
export const InputText = styled.p`
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-right: 50px;
`;
export const Title = styled.p`
  color: #fff;
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
  width: 950px;
`;
export const Box = styled.div`
  align-items: center;
`;
