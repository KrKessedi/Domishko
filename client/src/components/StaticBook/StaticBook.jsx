import React from 'react';
import {
  Items,
  List,
  ListItem,
  Option,
  Select,
  Title,
} from './StaticBook.styled';

const StaticBook = () => {
  return (
    <>
      <Title>Книги</Title>
      <Select>
        <Option>А</Option>
        <Option>Б</Option>
        <Option>В</Option>
      </Select>
      <List>
        <ListItem>
          <Items className="first">Мышык</Items>
          <Items className="first">5/09/21</Items>
          <Items className="second" style={{ backgroundColor: '#FCB242' }}>
            Изменить
          </Items>
          <Items className="second" style={{ backgroundColor: '#FF6969' }}>
            Удалить
          </Items>
        </ListItem>
        <ListItem>
          <Items className="first">Адам</Items>
          <Items className="first">5/09/21</Items>
          <Items className="second" style={{ backgroundColor: '#FCB242' }}>
            Изменить
          </Items>
          <Items className="second" style={{ backgroundColor: '#FF6969' }}>
            Удалить
          </Items>
        </ListItem>
        <ListItem>
          <Items className="first">Маймыл</Items>
          <Items className="first">5/09/21</Items>
          <Items className="second" style={{ backgroundColor: '#FCB242' }}>
            Изменить
          </Items>
          <Items className="second" style={{ backgroundColor: '#FF6969' }}>
            Удалить
          </Items>
        </ListItem>
        <ListItem>
          <Items className="first">Кортошко</Items>
          <Items className="first">5/09/21</Items>
          <Items className="second" style={{ backgroundColor: '#FCB242' }}>
            Изменить
          </Items>
          <Items className="second" style={{ backgroundColor: '#FF6969' }}>
            Удалить
          </Items>
        </ListItem>
        <ListItem>
          <Items className="first">Морковь</Items>
          <Items className="first">5/09/21</Items>
          <Items className="second" style={{ backgroundColor: '#FCB242' }}>
            Изменить
          </Items>
          <Items className="second" style={{ backgroundColor: '#FF6969' }}>
            Удалить
          </Items>
        </ListItem>
        <ListItem>
          <Items className="first">Лукбек</Items>
          <Items className="first">5/09/21</Items>
          <Items className="second" style={{ backgroundColor: '#FCB242' }}>
            Изменить
          </Items>
          <Items className="second" style={{ backgroundColor: '#FF6969' }}>
            Удалить
          </Items>
        </ListItem>
      </List>
    </>
  );
};

export default StaticBook;
