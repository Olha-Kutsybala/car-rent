import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCars } from 'redux/cars/carsOperations';
import { selectIsLoading } from 'redux/cars/carsSelectors';
import { Loader } from 'components/Loader/loader';
import CarsGallery from 'components/CarsGallery/carsGallery';

export default function Catalog() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return <>{!selectIsLoading ? <Loader /> : <CarsGallery />}</>;
}
