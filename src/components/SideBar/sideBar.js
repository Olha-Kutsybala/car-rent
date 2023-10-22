import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <Sidebar
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: '#a7bff8',
          paddingTop: '150px',
          fontSize: '36px',
          color: 'white',
          fontWeight: '700',
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
