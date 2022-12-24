import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: 999;

  &.true {
    height: 100%;
    display: block;
  }

  &.false {
    height: 0;
    display: none;
  }
`;

export const ModalCenter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  width: 700px;
  background: white;
  padding: 30px;
  border-radius: 50px;
  border: 1px solid #e8d3b9;
`;

export const ModalClose = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-bottom: 10px;

  svg {
    font-size: 30px;
    cursor: pointer;
    color: black;
    border: 1px solid;
    border-radius: 50%;
  }
`;
