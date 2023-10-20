import FavoritesGallery from 'components/Favorites/favoritesGallery';
import { Loader } from 'components/Loader/loader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCars } from 'redux/cars/carsOperations';
import { selectIsLoading } from 'redux/cars/carsSelectors';

const Favorites = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return <>{!selectIsLoading ? <Loader /> : <FavoritesGallery />}</>;
};

export default Favorites;
