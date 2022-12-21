import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #003b94;
  text-align: center;
  margin-bottom: 20px;
`;

export const Select = styled.select`
  margin-bottom: 20px;
`;

export const Option = styled.option``;

export const List = styled.ul`
  overflow-y: scroll;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e8d3b9;
  padding: 10px;
  margin: 0 10px;
`;

export const Items = styled.span`
  font-size: 20px;
  font-weight: 700;

  &.first {
    width: 400px;
  }

  &.second {
    border: 1px solid;
    border-radius: 40px;
    padding: 10px 30px;
    font-size: 20px;
    font-weight: 700;
    color: white;
  }
`;
