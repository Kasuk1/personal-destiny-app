import { HeroImage } from 'assets';
import styled from 'styled-components';

export const HeroStyles = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.4) 100%),
    url(${HeroImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
  position: relative;
  bottom: 6rem;
  z-index: -1;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 37.5em) {
    height: 80vh;
    bottom: 8rem;
  }

  .hero {
    padding: 2rem;
    width: 100%;
    text-align: center;

    @media only screen and (min-width: 87.5em) {
      width: 40%;
    }

    &--title {
      color: #fff;
      font-size: 3rem;
      font-weight: 600;
      box-shadow: 0 0 5rem rgba(0, 0, 0, 0.5);

      @media only screen and (min-width: 37.5em) {
        font-size: 5.5rem;
        padding: 1.5rem 0;
      }
    }
  }
`;
