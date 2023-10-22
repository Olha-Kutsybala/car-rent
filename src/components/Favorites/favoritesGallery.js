import AdvertCard from 'components/AdvertCard/advertCard';
import { CarsGalleryList } from 'components/CarsGallery/carsGallery.styled';
import LoadMore from 'components/LoadMore/loadMore';
import { Loader } from 'components/Loader/loader';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/carsSelectors';
import { selectFavorite } from 'redux/favorites/favoritesSelectors';

const FavoritesGallery = () => {
  const cars = useSelector(selectCars);
  const favorites = useSelector(selectFavorite);
  const favoriteCars = cars.filter(car => favorites.includes(car.id));

  const [page, setPage] = useState(1);

  const cardsPerPage = 8;
  const paginateCards = favoriteCars.slice(0, page * cardsPerPage);
  const totalCards = Math.ceil(favoriteCars.length / cardsPerPage);

  const getPage = () => setPage(page + 1);
  return (
    <div>
      <CarsGalleryList cars={cars}>
        {paginateCards?.map(car => (
          <AdvertCard key={car.id} {...car} />
        ))}
      </CarsGalleryList>

      {favoriteCars.length !== 0 ? (
        totalCards !== page && <LoadMore getPage={getPage} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default FavoritesGallery;
