import styled from '@emotion/styled';

export const Container = styled.div`
  // display: flex;
  // flex-direction: column;

  width: 320px;
  height: 400px;
  padding: 24px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.02);
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row !important;
  height: 80px;
  margin-bottom: 11px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`;

export const TextWrap = styled.div`
  overflow: hidden;
  height: 192px;
  margin-bottom: 25px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

export const BtnDateWrap = styled.div`
  display: flex;
  flex-direction: row !important ;
  justify-content: space-between;
  width: 250px;
  p {
    color: ${({ theme }) => theme.colors.primary};
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const Btn = styled.button`
  color: #fff;
  display: inline-flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #3e45c3;
`;
