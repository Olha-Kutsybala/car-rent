import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import SideBar from '../SideBar/sideBar';

const SharedLayout = () => {
  const [sideBareShow, setSideBareShow] = useState(false);

  const toggleSideBarShow = (status = null) => {
    if (status === null) {
      setSideBareShow(prev => !prev);
    } else {
      setSideBareShow(status);
    }
  };

  useEffect(() => {
    const body = document.body;
    if (sideBareShow && window.innerWidth < 1440) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }

    return () => {
      body.style.overflow = '';
    };
  }, [sideBareShow]);

  return (
    <div sideBareShow={sideBareShow}>
      {sideBareShow && window.innerWidth < 1440}
      <SideBar toggleSideBarShow={toggleSideBarShow}></SideBar>
      <button onClick={toggleSideBarShow}>Menu</button>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
