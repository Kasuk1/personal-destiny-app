import styled from 'styled-components';

export const NavbarStyles = styled.nav`
  .navbar {
    height: 6rem;

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 37.5em) {
      justify-content: space-between;
      height: 8rem;
    }

    &--logo {
      color: ${(props) => props.theme.primaryColor};
      font-family: 'Quicksand', sans-serif;
      font-weight: 700;
      font-size: 2.5rem;
    }

    &--list {
      background-color: ${(props) => props.theme.primaryColor};
      padding: 1rem 2rem 1rem 2rem;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 8rem;

      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1.5rem;

      & li {
        transform: translateY(5%);
      }

      @media only screen and (min-width: 37.5em) {
        background-color: transparent;
        position: static;
        height: auto;

        justify-content: flex-end;
        gap: 5rem;
      }
    }

    &--item {
      color: #fff;
      font-size: 4rem;

      &.active {
        color: rgba(0, 0, 0, 0.4);
      }

      @media only screen and (min-width: 37.5em) {
        color: rgba(0, 0, 0, 0.5);
        font-size: 1.7rem;

        &.active {
          color: #000;
        }
      }
    }
  }
`;
