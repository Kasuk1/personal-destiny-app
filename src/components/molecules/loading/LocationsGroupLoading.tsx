import { EntitieLoading } from 'components/atoms';
import styled from 'styled-components';

const LocationsGroupLoadingStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export const LocationsGroupLoading = () => (
  <LocationsGroupLoadingStyles>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => (
      <EntitieLoading key={n} />
    ))}
  </LocationsGroupLoadingStyles>
);
