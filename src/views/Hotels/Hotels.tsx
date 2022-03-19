import { HotelsImage } from 'assets';
import { Container } from 'components/atoms';
import { Hotel, Return } from 'components/molecules';
import { Header } from 'components/templates';
import { useParams } from 'react-router-dom';
import { useGetPropertiesQuery } from 'services/api/hotels';
import { HotelsStyles } from './HotelsStyles';

export const Hotels = () => {
  const { destinationId } = useParams();
  const { data: properties, isLoading } = useGetPropertiesQuery(destinationId!);
  const hotels = properties?.data?.body?.searchResults.results;
  const header = properties?.data?.body?.header;

  return (
    <HotelsStyles>
      <Header
        backgroundImageUrl={HotelsImage}
        title="<h1>That one looks really <span>good</span>.</h1>"
      />
      <Container>
        <section className="hotels--container">
          <Return to="/" />
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              <h2 className="hotels--title">
                This is what we have in <span>{header}</span>
              </h2>
              {hotels?.map((hotel) => (
                <Hotel key={hotel.id} {...hotel} />
              ))}
            </>
          )}
        </section>
      </Container>
    </HotelsStyles>
  );
};
