import React, { useEffect } from "react";
import { Flex, Title } from "../WelcomePage/Welcome.styled";
import MainBook from "../../components/Book/MainBook";
import { Container } from "../WelcomePage/WelcomePage";
import { useDispatch, useSelector } from "react-redux";
import Book from "../../components/Book/Book";
import { getBooks } from "../../redux/apiCalls";

const GenrePage = () => {
  const dispatch = useDispatch();
  const genre = useSelector((state) => state.book.genre);
  let books = useSelector((state) => state.book.books);
  let bookFilter = books.filter((book) => book.categories === genre);
  let resultBooks = bookFilter.slice(0, 8);

  useEffect(() => {
    getBooks(dispatch);
  }, [dispatch]);

  return (
    <Container>
      <Title fontSize={"30px"} bottom={"30px"}>
        {genre}
      </Title>
      <Flex bottom={"3em"}>
        <MainBook book={bookFilter[8]} />
        <MainBook book={bookFilter[9]} />
      </Flex>
      <Flex width={"100%"} wrap={"wrap"} height={"360px"}>
        {resultBooks.map((book) => (
          <Book key={book._id} book={book} />
        ))}
      </Flex>
    </Container>
  );
};

export default GenrePage;
