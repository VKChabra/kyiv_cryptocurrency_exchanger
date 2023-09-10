import styled from '@emotion/styled';
import Logo from 'components/logo/Logo';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 172px;
  padding: 40px 112px 60px 112px;
  background-color: #3e45c3;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const WhiteLogo = styled(Logo)`
  fill: white;
`;
