import styled from '@emotion/styled';

export const HeaderBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  text-align: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;
