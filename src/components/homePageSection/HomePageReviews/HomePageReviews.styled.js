import styled from '@emotion/styled';

export const SwiperWrapper = styled.div`
  width: 90%;
  padding: 60px;
  /* .swiper-button-prev {
    top: 90%;
  }
  .swiper-button-next {
    top: 90%;
  } */
  .swiper-pagination {
    position: relative;
    padding-top: 60px;
  }
  .swiper-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 120px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 64px */
  margin-bottom: 30px;
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-family: Roboto;
  width: 892px;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%; /* 32px */
  margin-bottom: 60px;
`;

export const Item = styled.li`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px; */
  /* flex-basis: (calc(100% - 2 * 105px) / 2); */
  /* margin-bottom: 105px;
  &:nth-child(2n + 1) {
    margin-right: 105px;
  } */
`;
