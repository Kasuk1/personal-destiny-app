import styled from 'styled-components';

export const CTASectionStyles = styled.section`
  background-color: #fff;
  padding: 6rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7.5rem;

  @media only screen and (min-width: 37.5em) {
    padding: 15rem 2rem;
  }

  .cta {
    &--headers {
      color: ${(props) => props.theme.secondaryColor};
      text-align: center;
    }
    &--title {
      font-size: 2.5rem;

      & span {
        color: ${(props) => props.theme.primaryColor};
      }

      @media only screen and (min-width: 37.5em) {
        font-size: 3.5rem;
      }
    }
    &--desc {
      font-size: 1.8rem;
      opacity: 0.8;
    }

    &--cities {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
    }
  }
`;
