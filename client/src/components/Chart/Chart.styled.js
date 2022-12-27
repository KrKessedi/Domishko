import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: #003b94;
  text-align: center;
`;

export const SubTitle = styled.p`
  font-size: 16px;
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
  height: 316px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Box = styled.div`
  border: 1px solid #e8d3b9;
  border-radius: 30px;
  padding: 20px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Num = styled.span`
  font-size: 38px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #003b94;

  svg {
    font-size: 30px;
    margin-right: 14px;
  }
`;

export const NumTitle = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #003b94;
  margin: 10px 0;
  text-align: center;
`;

export const Right = styled.div`
  flex: 3;
`;
