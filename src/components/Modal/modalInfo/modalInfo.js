import {
  LearnMoreButton,
  MainInfoBlock,
  ModelCar,
  OtherInfo,
  OtherInfoItem,
} from 'components/AdvertCard/advertCard.styled';
import {
  Accessories,
  CloseIcon,
  Description,
  Make,
  ModalCarImg,
  ModalContainer,
  RentalInfo,
  RentalItem,
  Year,
} from './modalInfo.styled';

const ModalInfo = ({
  id,
  img,
  make,
  model,
  year,
  rentalPrice,
  city,
  country,
  type,
  mileage,
  functionalities,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
  onClose,
}) => {
  const millString = mileage.toString();
  const millSlice = millString.slice(1, 4);
  const millForUi = millString[0] + ',' + millSlice;
  const rentalConditionsSplitted = rentalConditions.split('\n', 3);
  const firstElement = rentalConditionsSplitted[0];
  const match = firstElement.match(/\d+/);
  const number = parseInt(match[0], 10);

  const onClickClose = () => {
    onClose();
  };

  return (
    <ModalContainer>
      <CloseIcon onClick={onClickClose} />
      <ModalCarImg src={img} />
      <MainInfoBlock>
        <Make>{make}</Make>
        <ModelCar>
          {model}
          <span style={{ color: 'black' }}>,</span>
        </ModelCar>
        <Year>{year}</Year>
      </MainInfoBlock>
      <OtherInfo>
        <OtherInfoItem>{city}</OtherInfoItem>
        <OtherInfoItem>{country}</OtherInfoItem>
        <OtherInfoItem>Id: {id}</OtherInfoItem>
        <OtherInfoItem>Year: {year}</OtherInfoItem>
        <OtherInfoItem>Type: {type}</OtherInfoItem>
      </OtherInfo>
      <OtherInfo>
        <OtherInfoItem>Fuel Consumption: {fuelConsumption}</OtherInfoItem>
        <OtherInfoItem>Engine Size: {engineSize}</OtherInfoItem>
      </OtherInfo>
      <Description>{description}</Description>
      <Accessories>Accessories and functionalities:</Accessories>
      <OtherInfo>
        <OtherInfoItem>{accessories[0]}</OtherInfoItem>
        <OtherInfoItem>{accessories[1]}</OtherInfoItem>
        <OtherInfoItem>{accessories[2]}</OtherInfoItem>
      </OtherInfo>
      <OtherInfo>
        <OtherInfoItem>{functionalities[0]}</OtherInfoItem>
        <OtherInfoItem>{functionalities[1]}</OtherInfoItem>
        <OtherInfoItem>{functionalities[2]}</OtherInfoItem>
      </OtherInfo>
      <Accessories>Rental Conditions: </Accessories>
      <RentalInfo>
        <RentalItem>
          Minimum age: <span> {number}</span>
        </RentalItem>
        <RentalItem>{rentalConditionsSplitted[1]}</RentalItem>
      </RentalInfo>
      <RentalInfo>
        <RentalItem>{rentalConditionsSplitted[2]}</RentalItem>
        <RentalItem>
          Mileage:<span> {millForUi}</span>
        </RentalItem>
        <RentalItem>
          Price:<span> {rentalPrice}</span>
        </RentalItem>
      </RentalInfo>
      <a href="tel:+380730000000">
        <LearnMoreButton
          style={{
            width: '168px',
            marginTop: '31px',
          }}
        >
          Rental car
        </LearnMoreButton>
      </a>
    </ModalContainer>
  );
};

export default ModalInfo;
