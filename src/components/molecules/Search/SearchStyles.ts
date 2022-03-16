import styled from 'styled-components';

export const SearchStyles = styled.div`
  background-color: #fff;
  border-radius: 5rem;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media only screen and (min-width: 37.5em) {
    padding: 1rem 2rem;
  }

  .search {
    &--input {
      border: none;
      font-family: inherit;
      font-size: 1.6rem;

      &:focus {
        outline: none;
        border-bottom: 2px solid ${(props) => props.theme.primaryColor};
      }

      &:focus .search--input {
        color: red;
      }
    }

    &--icon {
      color: ${(props) => props.theme.primaryColor};
      cursor: pointer;
      display: none;
      font-size: 1.8rem;

      @media only screen and (min-width: 37.5em) {
        display: block;
      }
    }
  }
`;
