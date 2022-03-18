import { ICity } from 'interfaces/dummy';
import { useNavigate } from 'react-router-dom';
import { CityCardStyles } from './CityCardStyles';

export const CityCard: React.FC<ICity> = ({ name, img, caption }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/locations/${name}`);
  };

  return (
    <CityCardStyles backgroundImage={img} onClick={handleClick}>
      <h3 className="city-card--name">{name}</h3>
      <span className="city-card--caption">{caption}</span>
    </CityCardStyles>
  );
};
