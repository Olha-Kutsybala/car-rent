import AdvertCard from 'components/AdvertCard/advertCard';
import LoadMore from 'components/LoadMore/loadMore';
import { Loader } from 'components/Loader/loader';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCars, selectIsLoading } from 'redux/cars/carsSelectors';
import { CarsGalleryList } from './carsGallery.styled';

const CarsGallery = () => {
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);

  const [page, setPage] = useState(1);
  const cardsForPage = 8;
  const paginateCards = cars.slice(0, page * cardsForPage);
  const totalCards = Math.ceil(cars.length / cardsForPage);

  const getPage = async () => {
    setPage(page + 1);
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CarsGalleryList cars={cars}>
            {paginateCards?.map(car => (
              <AdvertCard key={car.id} {...car} />
            ))}
          </CarsGalleryList>
        </>
      )}
      {!isLoading ? (
        totalCards !== page && <LoadMore getPage={getPage} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CarsGallery;
