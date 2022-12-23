import React, { useEffect, useState } from 'react';
import { userReq } from '../../redux/apiCalls';
import {
  Items,
  List,
  ListItem,
  Option,
  Select,
  Title,
} from './StaticUsers.styled';
import format from 'date-fns/format';

const StaticUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userReq.get('users/?new=true');
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  return (
    <>
      <Title>Пользователи</Title>
      <Select>
        <Option>Январь</Option>
        <Option>Февраль</Option>
        <Option>Март</Option>
      </Select>
      <List>
        {users?.map((el) => (
          <ListItem key={el._id}>
            <Items className="first">{el.username}</Items>
            <Items className="first">
              {format(new Date(el.createdAt), 'yyyy-LL-dd')}
            </Items>
            <Items className="second" style={{ backgroundColor: '#FCB242' }}>
              Заблокировать
            </Items>
            <Items className="second" style={{ backgroundColor: '#FF6969' }}>
              Удалить
            </Items>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default StaticUsers;
