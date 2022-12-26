import styled from 'styled-components';

export const AdminWrapper = styled.div`
  display: flex;
  background-color: rgb(254, 248, 238);
`;

export const Sidebar = styled.div`
  flex: 1;
  padding: 0 10px;
`;

export const SidebarWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SidebarElements = styled.li`
  height: 73px;
  font-size: 26px;
  font-weight: 600;
  border-radius: 40px;
  padding: 0 38px;
  background-color: #fdfdfd;
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;

  a {
    color: #003b94;
  }

  &:hover {
    background-color: #003b94;

    & a {
      color: white;
    }
  }
`;

export const Dashboard = styled.div`
  flex: 4;
`;

export const Product = styled.div`
  border: 1px solid #e8d3b9;
  border-radius: 45px;
  margin-top: 20px;
  padding: 20px;
`;
