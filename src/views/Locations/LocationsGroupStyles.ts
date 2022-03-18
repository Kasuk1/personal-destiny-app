import { LocationsImage } from 'assets';
import styled from 'styled-components';

export const LocationsGroupStyles = styled.main`
  background-color: ${(props) => props.theme.tertiaryColor};
  padding-bottom: 8rem;

  .locations {
    &--container {
      display: flex;
      flex-direction: column;
      gap: 5rem;
    }

    &--background {
      background: linear-gradient(
          rgba(0, 0, 0, 0.6) 0%,
          rgba(0, 0, 0, 0.15) 80%
        ),
        url(${LocationsImage});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      text-align: center;
      margin-bottom: 4rem;
      height: 40vh;
      min-height: 35rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    &--title {
      color: #fff;
      font-size: 2.5rem;

      & span {
        color: ${(props) => props.theme.primaryColor};
      }

      @media only screen and (min-width: 37.5em) {
        font-size: 4.5rem;
      }
    }
  }
`;
