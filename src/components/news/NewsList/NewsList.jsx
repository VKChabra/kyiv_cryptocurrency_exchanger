import NewsItem from '../NewsItem';
import { List, Item } from './NewsList.styled';

const NewsList = ({ data }) => {
  return (
    <List>
      {data?.map(item => (
        <Item key={item.id}>
          <NewsItem data={item} />
        </Item>
      ))}
    </List>
  );
};

export default NewsList;
