import { Container, TitleWrap, Title, Text, BtnDateWrap, Btn } from './NewsItem.styled';

const NewsItem = ({ data }) => {
  return (
    <Container>
      <TitleWrap>
        <img src={data.photo} alt="article" width="100px" />
        <Title>{data.title}</Title>
      </TitleWrap>
      <div>
        <Text>{data.news}</Text>
      </div>
      <BtnDateWrap>
        <div>
          <p>{data.createAt}</p>
        </div>
        <div>
          <Btn type="button">Читати</Btn>
        </div>
      </BtnDateWrap>
    </Container>
  );
};

export default NewsItem;
