import styled from 'styled-components';
import img from 'assets/images/hero.jpg';

export const MainBox = styled.div`
  background-image: linear-gradient(180deg, #0000ff 5%, #00000000 50%),
    url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
`;
