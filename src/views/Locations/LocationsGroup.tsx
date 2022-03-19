import { useParams } from 'react-router-dom';
import { useGetLocationsQuery } from 'services/api/hotels';
import { Container } from 'components/atoms';
import { Group } from 'components/organinsms';
import { LocationsGroupLoading, Return } from 'components/molecules';
import { Header } from 'components/templates';
import { LocationsImage } from 'assets';
import { LocationsGroupStyles } from './LocationsGroupStyles';

export const LocationsGroup = () => {
  const { searchTerm } = useParams();
  const { data: locations, isLoading } = useGetLocationsQuery(searchTerm!);

  return (
    <LocationsGroupStyles>
      <Header
        backgroundImageUrl={LocationsImage}
        title="<h1> What we are <span>looking</span> now?</h1>"
      />
      <Container>
        <section className="locations--container">
          <Return to="/" />

          {isLoading ? (
            <LocationsGroupLoading />
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
