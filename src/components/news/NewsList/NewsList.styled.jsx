import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: -30px;
  margin-bottom: -30px;
  @media (max-width: 768px) {
    margin-right: -15px;
    margin-bottom: -15px;
  }
  @media (max-width: 575px) {
    flex-direction: column;
    margin-bottom: -15px;
  }
`;

export const Item = styled.li`
  flex-basis: (calc(100% - 3 * 30px) / 3);
  margin-bottom: 30px;
  margin-right: 30px;
  //   &:nth-child(2n + 1) {
  //     margin-right: 30px;
  //   }
`;