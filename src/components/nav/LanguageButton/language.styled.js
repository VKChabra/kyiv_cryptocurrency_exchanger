import styled from '@emotion/styled';

export const Language = styled.img``;

export const LanguageChosen = styled.select`
  cursor: pointer;
  background-color: transparent;
  color: inherit;
  font: inherit;
  font-size: 16px;
  font-weight: 700;
  border: none;
  outline: none;
`;

export const LanguageWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 5px;
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  top: -25px;
  padding-left: 115px;
`;
