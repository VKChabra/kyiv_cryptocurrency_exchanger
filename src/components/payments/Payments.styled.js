import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  padding-left: 111px;
`;

export const Frame = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 67%;
  align-items: center;
  font-size: 48px;
`;

export const Icon = styled.img``;

export const Blue = styled.div`
  height: 120px;
  display: flex;
  flex: 33%;
  background-color: #3e45c3;
  border-left: 2px solid ${({ theme }) => theme.colors.primary};
`;
