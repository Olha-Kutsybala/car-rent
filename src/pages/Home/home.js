// import { Link } from 'react-router-dom';

import HeaderNav from 'components/HeaderNav/headerNav';
import Hero from 'components/Hero/hero';
import { MainBox } from './home.styled';

export default function Home() {
  return (
    <MainBox>
      <HeaderNav />
      <Hero />
    </MainBox>
  );
}
