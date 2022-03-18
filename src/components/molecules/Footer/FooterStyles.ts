import styled from 'styled-components';

export const FooterStyles = styled.footer`
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};
  padding: 6rem 2rem;
  padding-bottom: 14rem;
  text-align: center;

  @media only screen and (min-width: 37.5em) {
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.secondaryColor};
    padding-bottom: 6rem;
    text-align: left;
    flex-direction: row;
  }

  .footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    @media only screen and (min-width: 37.5em) {
      flex-direction: row;
    }

    &--headers {
    }
    &--logo {
      font-family: 'Quicksand', sans-serif;
      font-size: 6rem;
      font-weight: 700;
    }

    &--desc {
      font-size: 1.35rem;
      font-weight: 600;
      opacity: 0.75;
    }

    &--portfolio {
      color: #fff;
      transition: all 0.2s;

      &:hover {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    &--list {
      display: flex;
      gap: 1.5rem;
    }

    &--item {
    }

    &--link {
      color: #fff;
      font-size: 2.5rem;
      transition: all 0.2s;

      &:hover {
        color: ${(props) => props.theme.secondaryColor};
      }
    }
  }
`;
