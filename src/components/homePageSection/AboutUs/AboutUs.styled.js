import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const Wrapper = styled.div`
  display: flex;
`;

export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 64px */
  text-align: center;
  margin-bottom: 30px;
  ${mediaBp('tablet')} {
    font-size: 48px;
  }
  ${mediaBp('desktop')} {
    font-size: 64px;
  }
  ${mediaBp('huge')} {
    font-size: 64px;
  }
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};

  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%; /* 32px */
  text-align: center;
  margin-bottom: 20px;
  ${mediaBp('tablet')} {
    font-size: 28px;
    margin-bottom: 40px;
  }
  ${mediaBp('desktop')} {
    font-size: 32px;
    margin-bottom: 60px;
  }
  ${mediaBp('huge')} {
    font-size: 32px;
    margin-bottom: 60px;
  }
`;
