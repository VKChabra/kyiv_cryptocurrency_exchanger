import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 70px;
  margin-right: -105px;
  margin-bottom: 60px;
  @media (max-width: 768px) {
    margin: -50px;
  }
  @media (max-width: 575px) {
    flex-direction: column;
    margin: -30px;
  }
`;

export const Item = styled.li`
  flex-basis: (calc(100% - 2 * 105px) / 2);
  /* margin-bottom: 105px;
  &:nth-child(2n + 1) {
    margin-right: 105px;
  } */
`;
