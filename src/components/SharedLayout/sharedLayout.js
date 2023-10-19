import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from '../SideBar/sideBar';
import { Container, Main } from './sharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <SideBar></SideBar>
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
};

export default SharedLayout;
