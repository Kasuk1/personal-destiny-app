import styled from 'styled-components';

export const HotelsStyles = styled.section`
  background-color: ${(props) => props.theme.tertiaryColor};
  color: ${(props) => props.theme.secondaryColor};
  padding-bottom: 8rem;

  .hotels {
    &--container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;

      @media only screen and (min-width: 37.5em) {
        align-items: stretch;
      }

      @media only screen and (min-width: 87.5em) {
        flex-direction: row;
        flex-wrap: wrap;
      }
    }

    &--title {
      font-size: 2rem;
      font-weight: 300;
      text-align: center;
      margin-top: 4rem;
      margin-bottom: 6rem;
      width: 100%;

      @media only screen and (min-width: 37.5em) {
        font-size: 2.4rem;
        text-align: right;
      }

      & span {
        color: ${(props) => props.theme.primaryColor};
        font-weight: 700;
      }
    }
  }
`;
