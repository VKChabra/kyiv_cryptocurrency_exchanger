import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Image = styled.img`
  border-right: 1px solid ${({ theme }) => theme.colors.primary};
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  width: 99.9%;
  height: 100%;
  object-fit: cover;
`;

export const Block = styled.div`
  width: 527px;
  height: 120px;
  flex-shrink: 0;
  background-color: #3e45c3;
  border-right: 1px solid ${({ theme }) => theme.colors.primary};
`;
