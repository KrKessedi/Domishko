import React, { useState } from "react";
import { Flex } from "../../pages/WelcomePage/Welcome.styled";
import Modal from "../Modal/Modal";
import { Text } from "./Book.styled";

const Book = ({ book }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <Modal
        isOpened={modal}
        book={book}
        onModalClose={() => setModal(false)}
      />
      <Flex
        onClick={() => setModal(true)}
        width={"300px"}
        style={{ margin: "20px 0" }}
      >
        <img
          src={book.img}
          style={{
            width: "120px",
            height: "180px",
            border: "1px solid",
            borderRadius: "20px",
            marginRight: "1em",
            cursor: "pointer",
          }}
          alt="err"
        />
        <Flex column={"column"} justifyContent={"start-end"}>
          <Text fontSize={"20px"} lineHeight={"24px"} bottom={"5px"}>
            {book.title}
          </Text>
          <Text fontSize={"16px"} lineHeight={"19px"} fontWeight={"700"}>
            {book.author}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Book;
