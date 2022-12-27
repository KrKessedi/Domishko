import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: #003b94;
  text-align: center;
  margin-bottom: 10px;
`;

export const List = styled.div`
  font-size: 16px;
  font-weight: 700;

  &.btn {
    width: 100%;
  }

  &.center {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Item = styled.div`
  &.btn {
    font-size: 16px;
    font-weight: 500;
    color: white;
    background-color: #ff6969;
    border: 1px solid;
    border-radius: 22px;
    padding: 10px 0;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }

  &.edit {
    color: white;
    background-color: #fcb242;
  }
`;
