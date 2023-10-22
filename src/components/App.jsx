import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/home';
import SharedLayout from './SharedLayout/sharedLayout';

const CatalogPage = lazy(() => import('../pages/Catalog/catalog'));
const FavoritesPage = lazy(() => import('../pages/Favorites/favorites'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<SharedLayout />}>
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
export default App;