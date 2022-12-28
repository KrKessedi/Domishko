import styled from "styled-components";

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
  font-size: 16px;
  word-break: break-word;

  svg {
    font-size: 32px;
    margin-right: 10px;
    color: #fcb242;
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
    font-size: 14px;
    border-radius: 8px;
  }
`;

export const Right = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
`;
