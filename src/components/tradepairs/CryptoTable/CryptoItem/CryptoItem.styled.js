import styled from '@emotion/styled';

export const Wrapper = styled.div`
  height: 100%;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ListTitle = styled.ul`
  display: flex;
  padding-left: 7%;
  color: ${({ theme }) => theme.colors.primary};
  border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 30px;
`;

export const ListTitleItem = styled.li`
  padding: 0 0 30px 0;
  width: 22%;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;

export const List = styled.ul`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;
  counter-reset: item;
  transform: translateX(10px);
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  padding: 15px;
  :nth-of-type(odd) {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    box-shadow: 1px 1px 21px 2px rgba(17, 17, 17, 0.5) inset;
    -webkit-box-shadow: 1px 1px 21px 2px rgba(11, 11, 11, 0.5) inset;
    -moz-box-shadow: 1px 1px 21px 2px rgba(29, 19, 19, 0.5) inset;
  }
  ::before {
    content: counter(item) '. ';
    counter-increment: item;
    margin-right: 15px;
    font-weight: bold;
  }
  p {
    font-family: Roboto;
    width: 20%;
    font-size: 18px;
    font-style: bold;
    font-weight: 700;
    line-height: 100%; /* 16px */
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Table = styled.div``;

export const Change = styled.span`
  color: ${({ p }) => (p >= 0 ? '#06f239' : '#ff0000')};
`;

export const ChangeButton = styled.button`
  color: ${({ theme }) => theme.colors.text};
  border: none;
  background-color: #3e45c3;
  display: inline-flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 24px;
  &:active {
    transform: scale(0.99);
    transition: transform 0.1s ease-in-out;
    background-color: rgba(63, 70, 195, 0.4);
  }
`;
