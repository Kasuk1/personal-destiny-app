import styled from 'styled-components';

export const HotelStyles = styled.article`
  background-color: #fff;
  border-radius: 0.15rem;
  max-width: 24rem;
  min-width: 20rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 37.5em) {
    max-width: 100%;
    min-width: 100%;
    height: 14rem;
    flex-direction: row;
    gap: 2rem;
  }

  @media only screen and (min-width: 87.5em) {
    width: 48%;
    min-width: auto;
  }

  .hotel {
    &--header {
      width: 100%;
      height: 100%;

      @media only screen and (min-width: 37.5em) {
        width: 38rem;
      }
    }

    &--image {
      border-top-left-radius: 0.15rem;
      border-top-right-radius: 0.15rem;
      object-fit: cover;
      width: 100%;
      height: 100%;

      @media only screen and (min-width: 37.5em) {
        border-top-left-radius: 0.15rem;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0.15rem;
      }
    }

    &--info {
      padding: 1rem;
      padding-bottom: 1.5rem;

      display: flex;
      flex-direction: column;
      gap: 2.5rem;
      width: 100%;

      @media only screen and (min-width: 37.5em) {
        padding-right: 2.5rem;
      }
    }

    &--title {
      color: ${(props) => props.theme.primaryColor};
      font-size: 1.8rem;
      font-weight: 500;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    &--rating {
      align-self: flex-end;
      background-color: ${(props) => props.theme.primaryColor};
      border-radius: 50%;
      color: #fff;
      font-size: 1.6rem;
      font-weight: 600;
      width: 4rem;
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;

      @media only screen and (min-width: 37.5em) {
      }
    }
  }
`;
