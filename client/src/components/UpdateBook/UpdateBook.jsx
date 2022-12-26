import React, { useEffect, useState } from 'react';
import {
  BookWrap,
  BookWrapper,
  BTN,
  Container,
  IMG,
  Info,
  Left,
  Right,
} from './Update.styled';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GiBookmarklet } from 'react-icons/gi';
import { TbLanguage, TbNumbers } from 'react-icons/tb';
import { FaCompass, FaUserEdit } from 'react-icons/fa';
import { MdAddLink } from 'react-icons/md';
import { RiFileList2Fill } from 'react-icons/ri';
import { BsBarChartFill, BsFileEarmarkImage } from 'react-icons/bs';
import {
  Button,
  Input,
  Inputs,
  InputWrapper,
  Label,
  Option,
  Select,
  Title,
} from '../CreateBook/CreateBook.styled';
import { updateBook, getBooks } from '../../redux/apiCalls';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';

const UpdateBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const bookID = location.pathname.split('/')[3];
  const book = useSelector((state) =>
    state.book.books.find((el) => el._id === bookID)
  );
  const [file, setFile] = useState(null);
  const [inputs, setInputs] = useState({});
  const [loaded, setLoaded] = useState('Сохранить изменения');

  useEffect(() => {
    getBooks(dispatch);
  }, [dispatch]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const book = {
      ...inputs,
    };
    if (file === null) {
      updateBook(book, bookID, dispatch);
      window.location.reload();
    } else {
      const fileName = new Date().getTime() + file.name;
      const storage = getStorage(app);
      const storageRef = ref(storage);
      const imageRef = ref(storageRef, `images/${fileName}`);

      const uploadTask = uploadBytesResumable(imageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setLoaded('Загруска выполнена на ' + progress + '%');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const book = {
              ...inputs,
              img: downloadURL,
            };
            updateBook(book, bookID, dispatch);
            window.location.reload();
          });
        }
      );
    }
  };

  return (
    <Container>
      <Left>
        <IMG src={book.img} />
        <BookWrap>
          <BookWrapper>
            <GiBookmarklet title="Название книги" />

            <Info style={{ fontWeight: 'bold', fontSize: '20px' }}>
              {book.title}
            </Info>
          </BookWrapper>
          <BookWrapper>
            <FaUserEdit title="Автор книги" />

            <Info>{book.author}</Info>
          </BookWrapper>
          <BookWrapper>
            <RiFileList2Fill
              style={{ fontSize: '38px' }}
              title="Описание книги"
            />

            <Info className="desc">{book.desc}</Info>
          </BookWrapper>
          <BookWrapper>
            <FaCompass title=" Категории книг" />

            <Info>{book.categories}</Info>
          </BookWrapper>
          <BookWrapper>
            <BsBarChartFill title="Рейтин книги" />

            <Info>10/{book.rating}</Info>
          </BookWrapper>
          <BookWrapper>
            <TbLanguage title="Языки книги" />

            <Info>{book.language}</Info>
          </BookWrapper>
          <BookWrapper>
            <TbNumbers title=" Количество книги" />

            <Info>{book.pages}</Info>
          </BookWrapper>
          <BookWrapper title={book.linkToDown}>
            <MdAddLink />

            <Info>
              <BTN>Скачать</BTN>
            </Info>
          </BookWrapper>
          <BookWrapper title={book.linkToRead}>
            <MdAddLink />

            <Info>
              <BTN>Читать</BTN>
            </Info>
          </BookWrapper>
        </BookWrap>
      </Left>
      <Right>
        <Title>Изменить книгу</Title>
        <InputWrapper>
          <Inputs>
            <Label>
              {' '}
              <GiBookmarklet />
              Название книги
            </Label>
            <Input
              name="title"
              onChange={handleChange}
              type="text"
              placeholder="Название книги"
            />
          </Inputs>
          <Inputs>
            <Label>
              {' '}
              <FaUserEdit />
              Автор книги
            </Label>
            <Input
              name="author"
              onChange={handleChange}
              type="text"
              placeholder="Автор книги"
            />
          </Inputs>
          <Inputs>
            <Label>
              {' '}
              <RiFileList2Fill />
              Описание книги
            </Label>
            <Input
              name="desc"
              onChange={handleChange}
              type="text"
              placeholder="Описание книги"
            />
          </Inputs>
          <Inputs>
            <Label>
              {' '}
              <BsFileEarmarkImage />
              Облошка книги
            </Label>
            <Input
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
              type="file"
              placeholder="Облошка книги"
            />
          </Inputs>

          <Inputs>
            <Label>
              {' '}
              <FaCompass />
              Категорие книги
            </Label>
            <Select name="categories" onChange={handleChange}>
              <Option>Выберите категорию книги</Option>
              <Option value="Бестселлеры">Бестселлеры</Option>
              <Option value="Фантастика">Фантастика</Option>
              <Option value="Романтика">Романтика</Option>
              <Option value="История">История</Option>
              <Option value="Психология">Психология</Option>
              <Option value="Бизнес">Бизнес</Option>
            </Select>
          </Inputs>

          <Inputs>
            <Label>
              {' '}
              <TbLanguage />
              Язык книги
            </Label>
            <Select name="language" onChange={handleChange}>
              <Option>Выберите язык книги</Option>
              <Option value="Кыргызский">Кыргызский</Option>
              <Option value="Русский">Русский</Option>
              <Option value="Английский">Английский</Option>
            </Select>
          </Inputs>

          <Inputs>
            <Label>
              {' '}
              <TbNumbers />
              Количество страниц в книге
            </Label>
            <Input
              name="pages"
              onChange={handleChange}
              type="number"
              placeholder="Количество страниц в книге"
            />
          </Inputs>
          <Inputs>
            <Label>
              {' '}
              <MdAddLink />
              Cсылка для скачивания книги
            </Label>
            <Input
              name="linkToDown"
              onChange={handleChange}
              type="text"
              placeholder="Cсылка для скачивания книги"
            />
          </Inputs>
          <Inputs>
            <Label>
              {' '}
              <MdAddLink />
              Cсылка для чтения книги
            </Label>
            <Input
              name="linkToRead"
              onChange={handleChange}
              type="text"
              placeholder="Cсылка для чтения книги"
            />
          </Inputs>
          <Button onClick={handleClick}>
            {loaded === 'Сохранить изменения' ? 'Сохранить изменения' : loaded}
          </Button>
        </InputWrapper>
      </Right>
    </Container>
  );
};

export default UpdateBook;
