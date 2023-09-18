import styled from '@emotion/styled';

export const Container = styled.div`
  width: 400px;
  height: 500px;
  position: relative;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  position: fixed;
  bottom: 110px;
  right: 20px;
  box-shadow: 10px 10px 13px -6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 13px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 13px -6px rgba(0, 0, 0, 0.75);
`;

export const ChatHeader = styled.div`
 width: 400px;
    // height: 50px;
    height:10%;
    display: flex;
    align-items: center;
    background-color: #3e45c3;
    padding: 10px 20px 10px 20px;
  }
  span {
    position: absolute;
    right: 97px;
    top: 5px;
  }`;

export const ChatTitle = styled.p`
  margin-right: 90px;
  color: #fff;
  font-family: Actor;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`;

export const LogoImg = styled.img`
  width: 70px;
  height: 70px;
`;

export const MessageContainer = styled.div`
  height: 75%;
`;

export const InputWrap = styled.div`
  height: 10%;
`;
