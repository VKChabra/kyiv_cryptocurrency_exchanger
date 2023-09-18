import styled from '@emotion/styled';

export const Container = styled.div`
  width: 800px;
  height: 600px;
  border: 1px solid #d3d3d3;
`;

export const CurrentUserWrap = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  padding: 10px 10px 10px 10px;
  border-bottom: 1px solid #d3d3d3;
`;

export const UserAvatarWrap = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border: 1px solid #d3d3d3;
  border-radius: 50%;
  background: rgb(62, 69, 195);
  background: linear-gradient(90deg, rgba(62, 69, 195, 1) 0%, rgba(240, 193, 74, 1) 100%);
  p {
    font-size: 40px;
    text-align: center;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const UserNameWrap = styled.div`
  p {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MessageContainer = styled.div`
  height: 83%;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
`;

export const InputContainer = styled.div`
  height: 7%;
  width: 100%;
  border: 1px solid #d3d3d3;
  box-sizing: border-box;
  //   padding: 10px;
  border-top: 1px solid #d3d3d3;
`;
