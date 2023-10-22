import styled from 'styled-components';

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 24px;
  padding: 24px 60px;
  font-size: 32px;
  color: white;
`;

export const NavItem = styled.li`
  &:hover,
  &:focus {
    text-decoration: underline;
    text-underline-offset: 12px;
  }
`;
