import styled from '@emotion/styled';

export const Container = styled.div`
  width: 400px;
  height: 500px;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  position: fixed;
  bottom: 110px;
  right: 20px;
  box-shadow: 10px 10px 13px -6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 13px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 13px -6px rgba(0, 0, 0, 0.75);
  div {
    width: 400px;
    height: 70px;
    background-color: #3e45c3;
    padding: 20px 20px 0px 20px;
  }
`;

export const ChatTitle = styled.p`
  color: #fff;
  font-family: Actor;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
`;
