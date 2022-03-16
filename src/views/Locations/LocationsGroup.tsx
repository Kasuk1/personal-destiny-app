import { useParams } from 'react-router-dom';
import { useGetLocationsQuery } from 'services/api/hotels';

export const LocationsGroup = () => {
  const { searchTerm } = useParams();
  const { data: locations, isLoading } = useGetLocationsQuery(searchTerm!);

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <code>
          {JSON.stringify(
            locations?.suggestions.filter((sug) => sug.group === 'HOTEL_GROUP'),
            null,
            4
          )}
        </code>
      )}
    </div>
  );
};
