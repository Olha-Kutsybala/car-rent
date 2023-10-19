// const { useRef, useEffect } = require('react');
// const { Link } = require('react-router-dom');

// const SideBar = ({ toggleSideBarShow }) => {
//   const sideBarRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = event => {
//       if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
//         toggleSideBarShow(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [toggleSideBarShow]);

//   return (
//     <aside ref={sideBarRef}>
//       <nav>
//         <Link to={'/'}>Home</Link>
//         <Link to={'/catalog'}>Catalog</Link>
//         <Link to={'/favorites'}>Favorites</Link>
//       </nav>
//     </aside>
//   );
// };

// export default SideBar;
// import { startTransition } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <Sidebar>
      <Menu>
        <MenuItem component={<Link to="/home" />}>Home</MenuItem>
        <MenuItem component={<Link to="/catalog" />}>Catalog</MenuItem>
        <MenuItem component={<Link to="/favorites" />}>Favorites</MenuItem>
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
