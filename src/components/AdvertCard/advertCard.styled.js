import styled from 'styled-components';
import { BiHeart } from 'react-icons/bi';
import { BiSolidHeart } from 'react-icons/bi';

export const Card = styled.li`
  width: 274px;
  height: 426px;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const CarImgBox = styled.div`
  position: relative;
`;

export const FavoriteIcon = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: transparent;
  border: none;
`;

export const CarImg = styled.img`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  background-color: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const MainInfoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const NameCar = styled.h2`
  color: #121417;
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; /* 150% */
`;

export const ModelCar = styled.p`
  color: #3470ff;
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Year = styled.p`
  color: #121417;
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; /* 150% */
`;

export const Price = styled.p`
  color: #121417;
  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5; /* 150% */
`;

export const OtherInfo = styled.ul`
  display: flex;
  margin-bottom: 8px;
`;

export const OtherInfoItem = styled.li`
  color: rgba(18, 20, 23, 0.5);
  padding: 0 6px;
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.2);
  }
`;

export const LearnMoreButton = styled.button`
  display: block;
  width: 274px;
  height: 44px;
  padding: 12px 0;
  text-align: center;
  border-radius: 12px;
  background-color: #3470ff;
  margin-top: auto;
  border: none;
  font-family: Manrope;
  color: white;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

export const HeartIcon = styled(BiHeart)`
  display: block;
  width: 18px;
  height: 18px;
  color: rgb(255 255 255 / 80%);
`;

export const HeartIconBlue = styled(BiSolidHeart)`
  display: block;
  width: 18px;
  height: 18px;
  color: #3470ff;
`;
