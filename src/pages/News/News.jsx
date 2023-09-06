import { Container, TextWrap } from './News.styled';
import news from 'components/news/newsJson';
import NewsList from 'components/news/NewsList';

const News = () => {
  return (
    <Container>
      <TextWrap>
        <h2>Cryptocurrency news</h2>
        <p>Найактуальніші новини для вас</p>
      </TextWrap>
      <NewsList data={news} />
    </Container>
  );
};

export default News;
