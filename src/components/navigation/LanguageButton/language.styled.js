import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const Language = styled.img`
  color: ${({ theme }) => theme.colors.text};
`;

export const LanguageChosen = styled.select`
  cursor: pointer;
  background-color: transparent;
  color: inherit;
  background-color: ${({ theme }) => theme.colors.body};
  font: inherit;
  font-size: 16px;
  font-weight: 700;
  border: none;
  outline: none;
`;

export const LanguageWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  display: flex;
  margin-right: 12px;
  gap: 5px;
  ${mediaBp('desktop')} {
    color: inherit;
  }
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  top: -25px;
  padding-left: 115px;
`;
