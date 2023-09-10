import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 84px 20px 72px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-right: none;
`;

export const Title = styled.h4`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 18px */
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

export const Text = styled.p`
  width: 312px;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  color: ${({ theme }) => theme.colors.primary};
`;
