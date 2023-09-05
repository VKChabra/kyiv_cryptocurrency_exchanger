import styled from '@emotion/styled';
import imageUrl from '../../images/background1.svg';
import unlock from '../../images/icons/unlock.svg';
import tag from '../../images/icons/tag.svg';
import monitor from '../../images/icons/monitor.svg';
import house from '../../images/icons/house.svg';

const setIcon = ({ nameBtn }) => {
  console.log(nameBtn);
  switch (nameBtn) {
    case 'privat':
      return house;
    case 'operation':
      return monitor;
    case 'feedback':
      return tag;
    default:
      return unlock;
  }
};

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  padding-left: 20px;
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
    margin-right: -2px;
  }
`;

export const ProfileNav = styled.div`
  width: 390px;
  height:100%;
  border-right: 2px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-wrap: wrap;
  background-size: cover;
  background-image: url('${imageUrl}')};
`;
export const ButtonWrapper = styled.div`
  height: 400px;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const ExitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 44px;
  margin: 140px 120px 40px 120px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  background: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.colors.body};
  }
`;
export const Text = styled.p`
  margin-left: 10px;
`;
export const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url('${setIcon}')};
  background-repeat: no-repeat;
`;
