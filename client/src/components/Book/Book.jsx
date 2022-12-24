import React, { useState } from 'react';
import BookImage from '../../images/Book.jpeg';
import { Flex } from '../../pages/WelcomePage/Welcome.styled';
import Modal from '../Modal/Modal';
import { Text } from './Book.styled';

const Book = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal isOpened={modal} onModalClose={() => setModal(false)} />
      <Flex onClick={() => setModal(true)}>
        <img
          src={BookImage}
          style={{
            width: '84px',
            height: '130px',
            borderRadius: '14px',
            marginRight: '1em',
          }}
          alt="err"
        />
        <Flex column={'column'} justifyContent={'start-end'}>
          <Text fontSize={'20px'} lineHeight={'24px'} bottom={'5px'}>
            Исчезнувшая
          </Text>
          <Text fontSize={'16px'} lineHeight={'19px'} fontWeight={'700'}>
            Гиллиан Флинн
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Book;
