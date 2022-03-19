import { IProperty } from 'interfaces/hotelsApi';
import { HotelStyles } from './HotelStyles';

export const Hotel: React.FC<IProperty> = ({
  name,
  optimizedThumbUrls,
  address,
  starRating,
  providerType,
}) => {
  const { streetAddress, locality, countryName } = address;
  return (
    <HotelStyles>
      <div className="hotel--header">
        <img
          className="hotel--image"
          src={optimizedThumbUrls.srpDesktop}
          alt=""
        />
      </div>
      <div className="hotel--info">
        <div className="hotel--info__header">
          <h3 className="hotel--title">{name}</h3>
          <p className="hotel--address">
            {streetAddress}, {locality}, {countryName} - {providerType}
          </p>
        </div>
        <p className="hotel--rating">{starRating}</p>
      </div>
    </HotelStyles>
  );
};
