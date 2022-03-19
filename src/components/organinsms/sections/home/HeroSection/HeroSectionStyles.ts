import { HeroImage } from 'assets';
import styled from 'styled-components';

export const HeroStyles = styled.header`
  background: linear-gradient(rgba(0, 0, 0, 0.5) 100%, rgba(0, 0, 0, 0.4) 100%),
    url(${HeroImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media only screen and (min-width: 37.5em) {
    height: 80vh;
  }

  .hero {
    padding: 2rem;
    width: 100%;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    @media only screen and (min-width: 87.5em) {
      width: 40%;
    }

    &--title {
      color: #fff;
      font-size: 3rem;
      font-weight: 600;

      & span {
        color: ${(props) => props.theme.primaryColor};
      }

      @media only screen and (min-width: 37.5em) {
        font-size: 5.5rem;
      }
    }
  }
`;
