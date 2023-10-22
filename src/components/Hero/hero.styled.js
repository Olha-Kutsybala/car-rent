import styled from 'styled-components';

export const HeroSection = styled.div`
  padding: 20px 60px 0;
  height: 100vh;
`;

export const HeroTitle = styled.h1`
  font-size: 54px;
  color: white;
  margin-bottom: 12px;
`;

export const HeroDescr = styled.p`
  font-size: 32px;
  color: white;
  margin-bottom: 12px;
`;

export const HeroBtn = styled.a`
  display: block;
  width: 240px;
  padding: 12px 0;
  text-align: center;
  border-radius: 12px;
  background-color: white;
  border: none;
  color: #3470ff;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0b44cd;
    color: white;
  }
`;
