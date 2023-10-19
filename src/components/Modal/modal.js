const Modal = ({
  onClose,
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
  return <img src={img} alt={make}></img>;
};
export default Modal;
