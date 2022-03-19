import styled from 'styled-components';

export const NavbarStyles = styled.nav`
  .navbar {
    height: 6rem;
    padding: 0 1rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 192rem;
    z-index: 5;

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 37.5em) {
      padding: 0 2rem;
      height: 8rem;
      left: 50%;
      transform: translateX(-50%);

      justify-content: space-between;
    }

    &--logo {
      color: ${(props) => props.theme.primaryColor};
      font-family: 'Quicksand', sans-serif;
      font-weight: 700;
      font-size: 3.2rem;
    }

    &--list {
      background-color: ${(props) => props.theme.primaryColor};
      padding: 1rem 2rem 1rem 2rem;
      position: fixed;
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
        padding: 0;
        height: auto;

        justify-content: flex-end;
        gap: 5rem;
      }
    }

    &--item {
      color: rgba(255, 255, 255, 0.4);
      font-size: 4rem;
      transition: all 0.2s;

      &.active {
        color: rgba(255, 255, 255, 1);
      }

      @media only screen and (min-width: 37.5em) {
        color: rgba(255, 255, 255, 0.6);
        font-size: 1.7rem;

        &:hover {
          color: rgba(255, 255, 255, 1);
        }

        &.active {
          color: rgba(255, 255, 255, 1);
        }
      }
    }
  }
`;
