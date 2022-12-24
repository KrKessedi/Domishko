import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  Container,
  Input,
  Inputs,
  InputWrapper,
  Label,
  Option,
  Select,
  Title,
} from './CreateBook.styled';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import app from '../../firebase';
import { addBook } from '../../redux/apiCalls';

const CreateBook = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  console.log(inputs);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
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
          addBook(book, dispatch);
        });
      }
    );
  };

  return (
    <Container>
      <Title>Загрузить книгу</Title>
      <InputWrapper>
        <Inputs>
          <Label>Название книги</Label>
          <Input
            name="title"
            onChange={handleChange}
            type="text"
            placeholder="Название книги"
          />
        </Inputs>
        <Inputs>
          <Label>Описание книги</Label>
          <Input
            name="desc"
            onChange={handleChange}
            type="text"
            placeholder="Описание книги"
          />
        </Inputs>
        <Inputs>
          <Label>Облошка книги</Label>
          <Input
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            placeholder="Облошка книги"
          />
        </Inputs>

        <Inputs>
          <Label>Категорие книги</Label>
          <Select name="categories" onChange={handleChange}>
            <Option value="Бестселлеры">Бестселлеры</Option>
            <Option value="Фантастика">Фантастика</Option>
            <Option value="Романтика">Романтика</Option>
            <Option value="История">История</Option>
            <Option value="Психология">Психология</Option>
            <Option value="Бизнес">Бизнес</Option>
          </Select>
        </Inputs>

        <Inputs>
          <Label>Язык книги</Label>
          <Select name="language" onChange={handleChange}>
            <Option value="Кыргызский">Кыргызский</Option>
            <Option value="Русский">Русский</Option>
            <Option value="Английский">Английский</Option>
          </Select>
        </Inputs>

        <Inputs>
          <Label>Количество страниц в книге</Label>
          <Input
            name="pages"
            onChange={handleChange}
            type="number"
            placeholder="Количество страниц в книге"
          />
        </Inputs>
        <Inputs>
          <Label>Cсылка для скачивания </Label>
          <Input
            name="linkToDown"
            onChange={handleChange}
            type="text"
            placeholder="Название книги"
          />
        </Inputs>
        <Inputs>
          <Label>Cсылка для чтения книги</Label>
          <Input
            name="linkToRead"
            onChange={handleChange}
            type="text"
            placeholder="Cсылка для чтения книги"
          />
        </Inputs>
        <Inputs className="last">
          <Button onClick={handleClick}>Опубликовать</Button>
        </Inputs>
      </InputWrapper>
    </Container>
  );
};

export default CreateBook;
