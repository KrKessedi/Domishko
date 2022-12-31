import React, { useState } from "react";
import { Flex } from "../../pages/WelcomePage/Welcome.styled";
import { Text } from "./Book.styled";
import Modal from "../Modal/Modal";

const MainBook = ({ book }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Modal
        isOpened={modal}
        book={book}
        onModalClose={() => setModal(false)}
      />
      <Flex onClick={() => setModal(true)}>
        <img
          src={book?.img}
          style={{
            width: "300px",
            height: "100%",
            borderRadius: "14px",
            marginRight: "2em",
          }}
          alt="err"
        />
        <Flex column={"column"} justifyContent={"start-end"}>
          <Text
            fontSize={"30px"}
            lineHeight={"48px"}
            bottom={"10px"}
            style={{ wordBreak: "break-word", fontWeight: "500" }}
          >
            {book?.title}
          </Text>
          <Text
            fontSize={"25px"}
            lineHeight={"30px"}
            fontWeight={"700"}
            bottom={"15px"}
          >
            {book?.author}
          </Text>
          <Text
            fontSize={"16px"}
            lineHeight={"19px"}
            width={"300px"}
            style={{ wordBreak: "break-word" }}
          >
            {book?.desc}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default MainBook;
