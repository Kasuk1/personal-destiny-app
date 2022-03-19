import parse from 'html-react-parser';
import { marked } from 'marked';
import { IEntitie } from 'interfaces/hotelsApi';
import { useNavigate } from 'react-router-dom';
import { EntitieStyles } from './EntitieStyles';

export const Entitie: React.FC<IEntitie> = ({
  destinationId,
  name,
  type,
  caption,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (type !== 'HOTEL') navigate(`/hotels/${destinationId}`);
  };

  return (
    <EntitieStyles onClick={handleClick}>
      <div className="entitie--header">
        <h2 className="entitie--name">{name}</h2>
        <span className="entitie--type">{type}</span>
      </div>

      {parse(marked(caption))}
    </EntitieStyles>
  );
};
