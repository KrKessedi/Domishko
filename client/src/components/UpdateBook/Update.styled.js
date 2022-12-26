import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  padding-top: 20px;
`;

export const IMG = styled.img`
  width: 370px;
  object-fit: contain;
  padding: 10px 0;
`;

export const BookWrap = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BookWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  word-break: break-word;

  svg {
    font-size: 32px;
    margin-right: 10px;
  }
`;

export const Info = styled.span`
  &.desc {
    word-break: break-word;
    width: 100%;
    border: 1px solid;
    overflow: hidden;
    height: 180px;
    padding: 6px;
    font-size: 16px;
    border-radius: 8px;
  }
`;

export const BTN = styled.button`
  padding: 10px 30px;
  border: 1px solid;
  border-radius: 20px;
  background: orange;
  font-size: 18px;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;

export const Right = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
`;
