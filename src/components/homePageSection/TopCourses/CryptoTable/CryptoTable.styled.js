import styled from '@emotion/styled';

export const ListTitle = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 20px 150px 0 0;
  align-items: center;
  list-style: none;
`;

export const Item = styled.li`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
  color: ${({ theme }) => theme.colors.primary};
`;

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1219px;
  height: 564px;
  flex-shrink: 0;
  opacity: 0.8;
  margin-bottom: 60px;
  background: ${({ theme }) => theme.colors.curses};
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const BackgroundImage = styled.img`
  position: absolute;
  height: 100%;
  object-fit: cover;
`;

export const Image = styled.img`
  position: absolute;
  object-fit: cover;
  top: 60px;
  left: 75px;
`;
