import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';
export const Form = styled.form`
  text-align: center;
  vertical-align: middle;
`;
export const Button = styled.button`
  padding: 4px 10px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  background: transparent;
  font-style: normal;
  font-weight: 700;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hovers};
  }
  ${mediaBp('tablet')} {
    padding: 11px 82px;
  }
  ${mediaBp('desktop')} {
    padding: 11px 82px;
  }
  ${mediaBp('huge')} {
    font-size: calc(4px + 1vw);
    padding: 11px 42px;
  }
`;
export const Text = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  width: 33%;
`;
export const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  width: 100%;
  ${mediaBp('huge')} {
    margin-bottom: 25px;
  }
`;
export const ButtonSubmit = styled.button`
  margin-top: 50px;
  padding: 11px 82px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  background: transparent;
  font-style: normal;
  font-weight: 700;
  &:hover {
    background-color: ${({ theme }) => theme.colors.body};
  }
  ${mediaBp('huge')} {
    font-size: calc(8px + 1vw);
    padding: 20px 82px;
  }
`;

export const Select = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  padding: 4px 20px;
  margin: 4px;
  ${mediaBp('huge')} {
    font-size: calc(8px + 1vw);
    padding: 11px 10px;
    option {
      font-size: calc(1vw - 17%);
    }
  }
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.primary};
`;
