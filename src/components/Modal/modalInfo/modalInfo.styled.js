import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalCarImg = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
  background-color: #f3f3f2;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const CloseIcon = styled(AiOutlineClose)`
  display: block;
  width: 24px;
  height: 24px;
  color: #121417;

  position: absolute;
  right: 12px;
  top: 12px;
`;

export const Make = styled.p`
#121417
  font-size: 18px;
  font-weight: 500;
`;

export const Year = styled.p`
  #121417
  font-size: 18px;
  font-weight: 500;
`;

export const Description = styled.p`
  color: #121417;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-top: 14px;
  margin-bottom: 14px;
`;

export const Accessories = styled.p`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const RentalInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const RentalItem = styled.li`
  font-family: Montserrat;
  padding: 7px 14px;
  border-radius: 35px;
  background-color: #f9f9f9;
  color: #363535;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;

  & span {
    color: #3470ff;
    font-weight: 600;
  }
`;
