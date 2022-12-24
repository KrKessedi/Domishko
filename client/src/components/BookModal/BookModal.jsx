import React from 'react';
import {
  Author,
  BookIMG,
  Bottom,
  BottomDesc,
  BottomTitle,
  BTN,
  Center,
  CenterItems,
  CenterWrapper,
  Comment,
  Comments,
  CommentsWrapper,
  Container,
  CreateComment,
  DescItems,
  Description,
  DescTOPLeft,
  DescTOPRight,
  Input,
  Left,
  Right,
  Title,
  Top,
} from './BookModal.styled';

const BookModal = () => {
  return (
    <Container>
      <Top>
        <Left>
          <BookIMG src="https://www.junkybooks.com/administrator/bookimages/63975905ae5a50.99123478.jpg" />
          <BTN>Скачать</BTN>
        </Left>
        <Right>
          <Description>
            <DescItems>
              <DescTOPLeft>
                <Title>New Moon</Title>
                <Author>Stephens Meyer</Author>
              </DescTOPLeft>
              <DescTOPRight>Читать</DescTOPRight>
            </DescItems>
            <DescItems>
              <Center>
                <CenterWrapper>
                  <CenterItems className="title">Рейтинг</CenterItems>
                  <CenterItems>6/10</CenterItems>
                </CenterWrapper>
                <CenterWrapper>
                  <CenterItems className="title">Язык</CenterItems>
                  <CenterItems>Английский</CenterItems>
                </CenterWrapper>
                <CenterWrapper>
                  <CenterItems className="title">Страницы</CenterItems>
                  <CenterItems>256</CenterItems>
                </CenterWrapper>
              </Center>
            </DescItems>
            <DescItems className="desc">
              <BottomTitle>Описание</BottomTitle>
              <BottomDesc>
                Download New Moon by Stephenie Meyer Pdf book free online.
                Edward Cullen is the one thing that Bella Swan values more than
                life itself. However, Bella had no idea how hazardous it would
                be to fall in love with a vampire. Although Edward has already
                saved Bella from the grasp of one evil vampire, they now
                understand that their problems might just be just beginning as
                their daring relationship threatens everything they hold dear.
              </BottomDesc>
            </DescItems>
          </Description>
        </Right>
      </Top>
      <Bottom>
        <CenterItems className="title">Комментарии</CenterItems>
        <Comments>
          <Comment>Книга просто ужас</Comment>
          <Comment>Книга соска, Лариса сошла с ума</Comment>
          <Comment>Книга просто ужас</Comment>
          <Comment>Книга соска, Лариса сошла с ума</Comment>
          <Comment>Книга просто ужас</Comment>
          <Comment>Книга соска, Лариса сошла с ума</Comment>
          <Comment>Книга просто ужас</Comment>
          <Comment>Книга соска, Лариса сошла с ума</Comment>
        </Comments>
        <CreateComment>
          <CenterItems className="title">Оставить комментарий</CenterItems>
          <CommentsWrapper>
            <Input placeholder="Оставить комментарии" />
            <DescTOPRight>Написать</DescTOPRight>
          </CommentsWrapper>
        </CreateComment>
      </Bottom>
    </Container>
  );
};

export default BookModal;
