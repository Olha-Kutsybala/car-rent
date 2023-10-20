import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: 'rgb(154, 171, 247)',
          paddingTop: '50px',
          fontSize: '24px',
          color: 'white',
          fontWeight: '700',
        },
      }}
    >
      <Menu
        menuItemStyles={{
          button: {
            // the active class will be added automatically by react router
            // so we can use it to style the active menu item
            [`&.active`]: {
              backgroundColor: '#13395e',
              color: '#b6c8d9',
            },
          },
        }}
      >
        <MenuItem active={true} component={<Link to="/home" />}>
          Home
        </MenuItem>
        <MenuItem active={true} component={<Link to="/catalog" />}>
          Catalog
        </MenuItem>
        <MenuItem active={true} component={<Link to="/favorites" />}>
          Favorites
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
