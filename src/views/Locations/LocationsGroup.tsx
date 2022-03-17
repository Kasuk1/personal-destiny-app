import { Group } from 'components/organinsms';
import { useParams } from 'react-router-dom';
import { useGetLocationsQuery } from 'services/api/hotels';

export const LocationsGroup = () => {
  const { searchTerm } = useParams();
  const { data: locations, isLoading } = useGetLocationsQuery(searchTerm!);

  return (
    <main>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {locations?.suggestions.map((sug) => (
            <Group {...sug} />
          ))}
        </div>
      )}
    </main>
  );
};
