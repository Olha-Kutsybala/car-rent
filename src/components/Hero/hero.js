import { HeroBtn, HeroDescr, HeroSection, HeroTitle } from './hero.styled';

const Hero = () => {
  return (
    <HeroSection>
      <HeroTitle>World Rent Car</HeroTitle>
      <HeroDescr>
        Our company is synonymous with professionalism and excellent service.
      </HeroDescr>
      <HeroBtn href="/car-rent/catalog" type="button">
        Choose car
      </HeroBtn>
    </HeroSection>
  );
};

export default Hero;
