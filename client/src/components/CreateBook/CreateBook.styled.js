import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin: 20px 0;
`;

export const InputWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Inputs = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;

  &.last {
    width: 83%;
    display: flex;
    align-items: end;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  outline: none;
  border-radius: 20px;
  padding: 12px 10px;
  font-size: 16px;
  width: 400px;
  border: 1px solid;
`;

export const Button = styled.button`
  background-color: #fcb242;
  font-size: 20px;
  padding: 12px 20px;
  border: 1px solid white;
  border-radius: 20px;
  font-weight: 700;
  width: 400px;
  color: white;
  margin: 10px 0;
`;

export const Select = styled.select`
  outline: none;
  border-radius: 20px;
  padding: 12px 10px;
  font-size: 16px;
  width: 400px;
  border: 1px solid;
  background-color: white;
`;

export const Option = styled.option``;
