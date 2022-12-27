import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  display: flex;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  border-right: 1px solid #fcb242;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  &.right {
    justify-content: end;
    width: 100%;

    input {
      font-size: 20px;
    }
  }

  svg {
    font-size: 30px;
  }
`;

export const IMG = styled.img`
  width: 185px;
  height: 185px;
  object-fit: cover;
  border: 1px solid;
  border-radius: 50%;
`;

export const UserName = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid orange;
  color: #434140;
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
  padding: 8px 12px;

  &.username {
    border: none;
  }
`;

export const Right = styled.div`
  flex: 3;
  padding: 0 60px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Label = styled.label`
  font-size: 22px;
  font-weight: 700;
  width: 250px;
`;

export const Button = styled.button`
  border: 1px solid;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 900;
  color: white;
  background: #fcb242;
  cursor: pointer;
  margin-top: 10px;
`;

export const LabelForAvatar = styled.label`
  cursor: pointer;
  position: absolute;
  bottom: 80px;
  right: 216px;
  border-radius: 50%;
  padding: 15px;
  display: flex;
  background: white;
  opacity: 0.8;
  border: 1px solid white;

  svg {
    font-size: 26px;
  }
`;

export const InputForAvatar = styled.input`
  display: none;
`;

export const Bottom = styled.div``;
