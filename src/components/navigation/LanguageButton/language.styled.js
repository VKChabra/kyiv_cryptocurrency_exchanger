import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';
import { ReactComponent as LanguageIcon } from 'images/nav/language.svg';

export const Language = styled(LanguageIcon)`
  fill: none;
  stroke: ${({ theme }) => theme.colors.primary};
  ${mediaBp('huge')} {
    width: calc(1vw);
    height: calc(1vw);
  }
`;

export const LanguageChosen = styled.select`
  cursor: pointer;
  background-color: transparent;
  color: inherit;
  background-color: ${({ theme }) => theme.colors.body};
  font-size: 16px;
  font-weight: 700;
  border: none;
  outline: none;
  ${mediaBp('huge')} {
    font-size: calc(1vw);
  }
  option {
    ${mediaBp('huge')} {
      font-size: calc(1vw - 35%);
    }
  }
`;

export const LanguageWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  position: relative;
  display: flex;
  margin-right: 12px;
  gap: 5px;
  ${mediaBp('desktop')} {
    color: inherit;
  }
  ${mediaBp('huge')} {
    color: inherit;
  }
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  top: -25px;
  padding-left: 115px;
`;
