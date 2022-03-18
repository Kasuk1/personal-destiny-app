import { Entitie } from 'components/molecules';
import { ISuggestion } from 'interfaces/hotelsApi';
import { FaCity, FaLandmark } from 'react-icons/fa';
import { MdHotel } from 'react-icons/md';
import { AiFillCar } from 'react-icons/ai';
import { GroupStyles } from './GroupStyles';

export const Group: React.FC<ISuggestion> = ({ group, entities }) => {
  const renderTitle = () => {
    let title;
    switch (group) {
      case 'CITY_GROUP':
        title = (
          <>
            Cities <FaCity />
          </>
        );
        break;
      case 'HOTEL_GROUP':
        title = (
          <>
            Hotels <MdHotel />
          </>
        );
        break;
      case 'LANDMARK_GROUP':
        title = (
          <>
            LandMarks <FaLandmark />
          </>
        );
        break;
      case 'TRANSPORT_GROUP':
        title = (
          <>
            Transports <AiFillCar />
          </>
        );
        break;
      default:
        break;
    }
    return title;
  };

  return (
    <GroupStyles>
      <h1 className="group--title">{renderTitle()}</h1>
      {entities.length === 0 ? (
        <div className="group--empty">We did not find entities in here.</div>
      ) : (
        entities.map((entitie) => (
          <Entitie key={entitie.destinationId} {...entitie} />
        ))
      )}
    </GroupStyles>
  );
};
