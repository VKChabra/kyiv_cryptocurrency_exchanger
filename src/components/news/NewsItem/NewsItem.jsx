import {
  Container,
  TitleWrap,
  Title,
  ImageContainer,
  Image,
  Text,
  BtnDateWrap,
  Btn,
  TitleWrapEdit,
  TextWrapEdit,
  ImageWrapper,
} from './NewsItem.styled';
import { useTranslation } from 'react-i18next';
import { useDeleteNewsMutation, useUpdateNewsMutation } from 'services/newsApi';
import { useState, useEffect } from 'react';

const NewsItem = ({ data }) => {
  const [editMode, setEditMode] = useState(false);
  const [editNews, setEditNews] = useState({
    title: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    setEditNews({
      title: data.title,
      description: data.description,
      image: data.image,
    });
  }, [data]);

  const onHandleEdit = () => {
    setEditMode(true);
  };

  const { t } = useTranslation();
  const [deleteNews] = useDeleteNewsMutation();
  const [updateNews] = useUpdateNewsMutation();

  const onHandleDelete = async () => {
    console.log(data._id);
    await deleteNews(data._id);
  };

  const toDataURL = element => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(element.files[0]);
    });
  };

  // const onHandleChange = e => {
  //   const { name, value } = e.target;
  //   setEditNews(prev => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // };

  const onHandleChange = async e => {
    const { name, value, type } = e.target;
    if (type === 'file') {
      const res = await toDataURL(e.target);
      setEditNews(prevState => ({
        ...prevState,
        image: res,
      }));
    } else {
      setEditNews(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  function formatDate(dateString) {
    const originalDate = new Date(dateString);
    const day = originalDate.getUTCDate().toString().padStart(2, '0');
    const month = (originalDate.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = originalDate.getUTCFullYear();
    return `${day}.${month}.${year}`;
  }

  return (
    <Container>
      {editMode ? (
        <>
          <TitleWrapEdit
            type="text"
            name="title"
            value={editNews.title}
            onChange={onHandleChange}
          />
          <TextWrapEdit
            type="text"
            name="description"
            value={editNews.description}
            onChange={onHandleChange}
          />
          <ImageWrapper>
            <div className="imageButton">
              <label className="advFormLabel">
                <input
                  id="real-file"
                  className="advAddImageInput"
                  onChange={onHandleChange}
                  type="file"
                  name="image"
                  accept="image/*" // Specify allowed file types
                />
                <button type="button" id="custom-button">
                  Select file
                </button>
              </label>
            </div>
          </ImageWrapper>
          <Btn
            type="button"
            onClick={() => {
              updateNews({ newsId: data._id, data: editNews });
              setEditMode(false);
            }}
          >
            {t('button.save')}
          </Btn>
        </>
      ) : (
        <>
          <Container>
            <TitleWrap>
              <Title>{data.title}</Title>
            </TitleWrap>
            <ImageContainer>
              <Image src={data.image} alt="article" width="160px" height="160px" />
            </ImageContainer>
            <Text>{data.description}</Text>
          </Container>
          <BtnDateWrap>
            <div>
              <p>{formatDate(data.updatedAt)}</p>
            </div>

            <Btn type="button" onClick={onHandleEdit}>
              {t('button.edit')}
            </Btn>

            <Btn type="button" onClick={onHandleDelete}>
              {t('button.delete')}
            </Btn>

            {/* !!!!!!!!!!!!!!!!!!!!!! as admin */}
          </BtnDateWrap>
        </>
      )}
    </Container>
  );
};

export default NewsItem;
