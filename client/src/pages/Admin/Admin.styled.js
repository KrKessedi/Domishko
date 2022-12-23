import styled from 'styled-components';

export const AdminWrapper = styled.div`
  display: flex;
  padding: 20px;
`;

export const Sidebar = styled.div`
  flex: 1;
  border: 1px solid #e8d3b9;
  border-radius: 45px;
  margin-right: 20px;
  height: 100vh;
  padding: 10px;
`;

export const SidebarWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
`;

export const SidebarElements = styled.li`
  font-size: 30px;
  font-weight: 700;
  color: #003b94;
  border-radius: 14px;
  padding: 8px 10px;
  background-color: #fdfdfd;
  margin: 10px 0;
  cursor: pointer;
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
