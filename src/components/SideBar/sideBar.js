import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: '#3470ff',
          paddingTop: '40px',
          fontSize: '36px',
          color: 'white',
          fontWeight: '700',
          minHeight: '100vh',
        },
      }}
    >
      <Menu
        menuItemStyles={{
          button: {
            padding: '40px',
            [`&:hover`]: {
              backgroundColor: '#3470ff',
            },
          },
        }}
      >
        <MenuItem component={<Link to="/home" />}>Home</MenuItem>
        <MenuItem component={<Link to="/catalog" />}>Catalog</MenuItem>
        <MenuItem component={<Link to="/favorites" />}>Favorites</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
