import { useParams } from 'react-router-dom';
import { useGetLocationsQuery } from 'services/api/hotels';
import { Container } from 'components/atoms';
import { Group } from 'components/organinsms';
import { Return } from 'components/molecules';
import { LocationsGroupStyles } from './LocationsGroupStyles';

export const LocationsGroup = () => {
  const { searchTerm } = useParams();
  const { data: locations, isLoading } = useGetLocationsQuery(searchTerm!);

  return (
    <LocationsGroupStyles>
      <Container>
        <section className="locations">
          <Return to="/" />

          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            locations?.suggestions.map((suggestion) => (
              <Group key={suggestion.group} {...suggestion} />
            ))
          )}
        </section>
      </Container>
    </LocationsGroupStyles>
  );
};
