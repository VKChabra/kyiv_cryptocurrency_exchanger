import styled from '@emotion/styled';
// import imageUrl from '../../images/fon.jpg';
// background-image: url('${imageUrl}')};

export const Button = styled.button`
  width: 304px;
  height: 60px;
  margin-top: 40px;
  border-right: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  &:hover,
  &.active {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-right: transparent;
    background-color: ${({ theme }) => theme.colors.body};
    margin-right: -1px;
  }
`;

export const ProfileNav = styled.div`
  width: 390px;
  border-right: 2px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-wrap: wrap;
`;
export const ButtonWrapper = styled.div`
  height: 400px;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const ExitButton = styled.button`
  width: 140px;
  height: 44px;
  margin: 140px 120px 40px 120px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  &:hover {
    background-color: green;
  }
`;
