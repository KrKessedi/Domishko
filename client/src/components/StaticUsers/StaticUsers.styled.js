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
    align-items: center;
  }
`;

export const Ava = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;

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

  &.blocked {
    color: white;
    background-color: #555;
  }

  svg {
    font-size: 36px;
  }
`;
