import { NavLink } from 'react-router-dom';
import { NavItem, NavList } from './headerNav.styled';

const HeaderNav = () => {
  return (
    <>
      <header>
        <nav>
          <NavList>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/catalog">Catalog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/favorites">Favorites</NavLink>
            </NavItem>
          </NavList>
        </nav>
      </header>
    </>
  );
};

export default HeaderNav;
