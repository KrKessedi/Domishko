import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  border: 1px solid #e8d3b9;
  border-radius: 80px;
  padding: 40px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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
  height: 30px;
  font-size: 16px;
  outline: none;
  margin-bottom: 20px;

  &::placeholder {
    color: #555;
  }
`;

export const Button = styled.button`
  border: 1px solid white;
  border-radius: 22px;
  padding: 10px;
  font-size: 20px;
  font-weight: 800;
  color: white;
  background-color: #fcb242;
  cursor: pointer;
  margin: 40px 0;
`;
