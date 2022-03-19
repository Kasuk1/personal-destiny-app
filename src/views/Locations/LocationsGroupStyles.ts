import styled from 'styled-components';

export const LocationsGroupStyles = styled.section`
  background-color: ${(props) => props.theme.tertiaryColor};
  padding-bottom: 8rem;

  .locations {
    &--container {
      display: flex;
      flex-direction: column;
      gap: 5rem;
    }
  }
`;
