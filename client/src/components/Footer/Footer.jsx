import React from "react";
import { FooterStyled, Text } from "./Footer.styled";
import { Flex } from "../Navbar/Navbar.styled";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterStyled>
      <Flex>
        <Text>Все права зарезервированы, 2022-2023</Text>
        <Flex width={"370px"}>
          <Flex width={"180px"}>
            <Text>Контакты</Text>
            <Text>Вакансии</Text>
          </Flex>
          <Flex width={"130px"} style={{ cursor: "pointer", fontSize: "23px" }}>
            <FaLinkedin />
            <FaInstagramSquare />
            <FaGithubSquare />
            <FaTwitterSquare />
          </Flex>
        </Flex>
      </Flex>
    </FooterStyled>
  );
};

export default Footer;
