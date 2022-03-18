import styled from 'styled-components';

export const LocationsGroupStyles = styled.main`
  background-color: ${(props) => props.theme.tertiaryColor};
  padding-top: 6rem;
  padding-bottom: 8rem;

  .locations {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }

  @media only screen and (min-width: 37.5em) {
    padding-top: 8rem;
  }
`;
