import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  color: #003b94;
  text-align: center;
`;

export const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #003b94;
  text-align: center;
`;

export const ChartWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Left = styled.div`
  flex: 1;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  border: 1px solid #e8d3b9;
  border-radius: 30px;
  padding: 20px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const Num = styled.span`
  font-size: 45px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #003b94;

  svg {
    font-size: 38px;
    margin-right: 14px;
  }
`;

export const NumTitle = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #003b94;
  margin: 10px 0;
`;

export const Right = styled.div`
  flex: 2;
`;
