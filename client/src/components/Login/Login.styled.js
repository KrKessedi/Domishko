import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Wrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  &.top {
    flex: 1.5;
    background: white !important;
  }
`;

export const Wrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const Title = styled.h1`
  font-size: 20px;
  font-weight: 400;
  width: 400px;
  text-align: center;
  margin: ${(props) => props.margin};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
export const Label = styled.label`
  margin: 10px 0;
  font-size: 18px;
  font-weight: 700;
  color: #434140;
`;

export const Input = styled.input`
  border: 1px solid #e8d3b9;
  border-radius: 20px;
  padding: 8px 16px;
  height: 53px;
  font-size: 16px;
  outline: none;
  margin-bottom: ${(props) => props.bottom};

  &::placeholder {
    color: #555;
  }
`;

export const Button = styled.button`
  border: 1px solid white;
  border-radius: 22px;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  width: 223px;
  height: 51px;
  color: white;
  background-color: #fcb242;
  cursor: pointer;
  margin: 40px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterLink = styled.div`
  a {
    color: black;
    font-weight: 900;
    margin-left: 5px;
    font-size: 18px;
  }
`;
