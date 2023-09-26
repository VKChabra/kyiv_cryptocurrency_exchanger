import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justyfy-content: space-between;
  height: 100%;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ListTitle = styled.ul`
  position: absolute;
  top: 20px;
  width: 85%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ListTitleItem = styled.li`
  color: ${({ theme }) => theme.colors.primary};
  width: 16%;
  padding-left: 7%;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
`;

export const List = styled.ul`
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 90px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 100%;
  list-style: none;
  counter-reset: item;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding-left: 5%;
  color: ${({ theme }) => theme.colors.primary};
  ::before {
    content: counter(item) '. ';
    counter-increment: item;
    margin-right: 15px;
    font-weight: bold;
  }
  p {
    width: 20%;
    font-family: Roboto;
    font-size: 18px;
    font-style: bold;
    font-weight: 700;
    line-height: 100%; /* 16px */
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Table = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`;

export const Change = styled.span`
  color: ${({ p }) => (p >= 0 ? '#06f239' : '#ff0000')};
`;

export const Button = styled.button`
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
