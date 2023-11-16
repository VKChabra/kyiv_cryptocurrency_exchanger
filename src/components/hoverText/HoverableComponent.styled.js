import styled from '@emotion/styled';

export const Hover = styled.p`
  position: absolute;
  width: fit-content;
  padding: 5px;
  height: fit-content;
  outline: 2px solid gray;
  text-wrap: nowrap;
  background-color: ${({ theme }) => theme.colors.body};
`;
