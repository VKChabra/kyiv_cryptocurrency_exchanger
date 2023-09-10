import Advantages from './Advantages/Advantages';
import Aside from './Aside/Aside';
import { Wrapper, AboutUsContainer, Title, SubTitle } from './AboutUs.styled';

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Title>ABOUT SERVICE CRYPTOHUB</Title>
      <SubTitle> Преимущества в работе с нашим сервисом</SubTitle>
      <Wrapper>
        <Aside />
        <Advantages />
      </Wrapper>
    </AboutUsContainer>
  );
};

export default AboutUs;
