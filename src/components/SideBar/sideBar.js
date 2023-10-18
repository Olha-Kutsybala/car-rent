const { useRef, useEffect } = require('react');
const { Link } = require('react-router-dom');

const SideBar = ({ toggleSideBarShow }) => {
  const sideBarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        toggleSideBarShow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleSideBarShow]);

  return (
    <aside ref={sideBarRef}>
      <nav onLinkClick={() => toggleSideBarShow(false)}>
        <Link to={'/'}>Home</Link>
        <Link to={'/catalog'}>Catalog</Link>
        <Link to={'/favorites'}>Favorites</Link>
      </nav>
    </aside>
  );
};

export default SideBar;
