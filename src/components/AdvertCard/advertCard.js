import Modal from 'components/Modal/modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite } from 'redux/favorites/favoritesSelectors';
import {
  decrementToFavoriteList,
  incrementToFavoriteList,
} from 'redux/favorites/favoritesSlice';
import {
  CarImg,
  MainInfo,
  NameCar,
  Card,
  ModelCar,
  Year,
  Price,
  MainInfoBlock,
  OtherInfo,
  OtherInfoItem,
  LearnMoreButton,
  CarImgBox,
  FavoriteIcon,
  HeartIcon,
  HeartIconBlue,
} from './advertCard.styled';
import ModalInfo from 'components/Modal/modalInfo/modalInfo';

const { useState } = require('react');

const AdvertCard = ({
  id,
  img,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  mileage,
  functionalities,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
}) => {
  const [modal, setModal] = useState(false);
  const favorites = useSelector(selectFavorite);
  const dispatch = useDispatch();

  const incrementFavorite = () => {
    dispatch(incrementToFavoriteList(id));
  };
  const decrementFavorite = () => {
    dispatch(decrementToFavoriteList(id));
  };

  const onClose = () => {
    setModal(prevState => !prevState);
  };

  const newAddress = address.split(', ');
  const country = newAddress[2];
  const city = newAddress[1];
  const millString = mileage.toString();
  const status = favorites.includes(id);

  return (
    <Card key={id}>
      <CarImgBox>
        <CarImg src={img} alt={make} />
        <FavoriteIcon
          type="button"
          onClick={!status ? incrementFavorite : decrementFavorite}
        >
          {!status ? <HeartIcon /> : <HeartIconBlue />}
        </FavoriteIcon>
      </CarImgBox>

      <MainInfo>
        <MainInfoBlock>
          <NameCar>{make}</NameCar>
          <ModelCar>
            {model}
            <span style={{ color: 'black' }}>,</span>
          </ModelCar>
          <Year>{year}</Year>
        </MainInfoBlock>
        <Price>{rentalPrice}</Price>
      </MainInfo>
      <OtherInfo>
        <OtherInfoItem>{city}</OtherInfoItem>
        <OtherInfoItem>{country}</OtherInfoItem>
        <OtherInfoItem>{rentalCompany}</OtherInfoItem>
      </OtherInfo>
      <OtherInfo>
        <OtherInfoItem>{type}</OtherInfoItem>
        <OtherInfoItem>{make}</OtherInfoItem>
        <OtherInfoItem>{millString}</OtherInfoItem>
        <OtherInfoItem>{functionalities[0]}</OtherInfoItem>
      </OtherInfo>
      <LearnMoreButton onClick={onClose}>Learn more</LearnMoreButton>
      {modal && (
        <Modal onClose={onClose}>
          <ModalInfo
            onClose={onClose}
            model={model}
            make={make}
            year={year}
            rentalPrice={rentalPrice}
            country={country}
            city={city}
            address={address}
            rentalCompany={rentalCompany}
            functionalities={functionalities}
            id={id}
            type={type}
            img={img}
            fuelConsumption={fuelConsumption}
            engineSize={engineSize}
            description={description}
            accessories={accessories}
            rentalConditions={rentalConditions}
            mileage={mileage}
          />
        </Modal>
      )}
    </Card>
  );
};

export default AdvertCard;
