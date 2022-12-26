import styled from 'styled-components';

export const Statistics = styled.div`
  border: 1px solid #e8d3b9;
  border-radius: 45px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  height: 210px;
  padding: 20px 60px;
`;

export const Box = styled.div`
  border: 1px solid #e8d3b9;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #003b94;
  width: 360px;
  -webkit-box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 15px -10px rgba(0, 0, 0, 0.75);
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: 900;

  svg {
    font-size: 30px;
    margin-right: 10px;
  }
`;

export const Number = styled.span``;

export const Title = styled.h3`
  font-size: 22px;
  margin: 5px 0;
  font-weight: 700;
`;

export const SubTitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  padding: 5px 10px;
  height: 50px;
`;
