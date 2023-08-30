import styled from '@emotion/styled';

export const LangBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 7px;
  cursor: pointer;
`;

export const Language = styled.img``;

export const Text = styled.span`
  font-family: 'Roboto-Bold', Helvetica;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

export const DropdownLanguage = styled.img``;

export const LanguageList = styled.ul``;

export const LanguageChosen = styled.li``;

export const LanguageWrapper = styled.div`
  position: relative;
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  top: -25px;
  padding-left: 115px;
`;
