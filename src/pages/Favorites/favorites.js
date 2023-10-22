import FavoritesGallery from 'components/Favorites/favoritesGallery';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCars } from 'redux/cars/carsOperations';

const Favorites = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return <FavoritesGallery />;
};

export default Favorites;
