import React from 'react';
import {
  Items,
  List,
  ListItem,
  Option,
  Select,
  Title,
} from './StaticUsers.styled';

const StaticUsers = () => {
  return (
    <>
      <Title>Пользователи</Title>
      <Select>
        <Option>Январь</Option>
        <Option>Февраль</Option>
        <Option>Март</Option>
      </Select>
      <List>
        <ListItem>
          <Items className="first">Мышык Мышыкбеков</Items>
          <Items className="first">5/09/21</Items>
          <Items className="second" style={{ backgroundColor: '#FCB242' }}>
            Заблокировать
          </Items>
          <Items className="second" style={{ backgroundColor: '#FF6969' }}>
            Удалить
          </Items>
        </ListItem>
        <ListItem>
          <Items className="first">Адам Мышыкбеков</Items>
          <Items className="first">5/09/21</Items>
          <Items className="second" style={{ backgroundColor: '#FCB242' }}>
            Заблокировать
          </Items>
          <Items className="second" style={{ backgroundColor: '#FF6969' }}>
            Удалить
          </Items>
        </ListItem>
        <ListItem>
          <Items className="first">Маймыл Мышыкбеков</Items>
          <Items className="first">5/09/21</Items>
          <Items className="second" style={{ backgroundColor: '#FCB242' }}>
            Заблокировать
          </Items>
          <Items className="second" style={{ backgroundColor: '#FF6969' }}>
            Удалить
          </Items>
        </ListItem>
        <ListItem>
          <Items className="first">Кортошко Мышыкбеков</Items>
          <Items className="first">5/09/21</Items>
          <Items className="second" style={{ backgroundColor: '#FCB242' }}>
            Заблокировать
          </Items>
          <Items className="second" style={{ backgroundColor: '#FF6969' }}>
            Удалить
          </Items>
        </ListItem>
        <ListItem>
          <Items className="first">Морковь Мышыкбеков</Items>
          <Items className="first">5/09/21</Items>
          <Items className="second" style={{ backgroundColor: '#FCB242' }}>
            Заблокировать
          </Items>
          <Items className="second" style={{ backgroundColor: '#FF6969' }}>
            Удалить
          </Items>
        </ListItem>
        <ListItem>
          <Items className="first">Лукбек Мышыкбеков</Items>
          <Items className="first">5/09/21</Items>
          <Items className="second" style={{ backgroundColor: '#FCB242' }}>
            Заблокировать
          </Items>
          <Items className="second" style={{ backgroundColor: '#FF6969' }}>
            Удалить
          </Items>
        </ListItem>
      </List>
    </>
  );
};

export default StaticUsers;
