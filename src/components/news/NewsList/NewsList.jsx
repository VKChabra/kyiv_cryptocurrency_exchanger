import AdminForm from '../AdminForm/AdminForm';
import NewsItem from '../NewsItem';
import { List, Item, Container } from './NewsList.styled';

const NewsList = ({ data }) => {
  return (
    <Container>
      <List>
        {data?.map(item => (
          <Item key={item.id}>
            <NewsItem data={item} />
          </Item>
        ))}
      </List>
      <AdminForm />
    </Container>
  );
};

export default NewsList;
